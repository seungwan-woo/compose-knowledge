import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { cp, link, lstat, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { TextDecoder } from 'node:util';
import type { SyncOptions, SyncResult, ValidatedSnapshot } from '../domain/types.js';
import { validateSnapshot } from '../knowledge/validate.js';

const exec = promisify(execFile);
const shaPattern = /^[0-9a-f]{40}$/;
const decoder = new TextDecoder('utf-8', { fatal: true });
interface Pointer { snapshot: string; publishedAt: string; remote?: string; ref?: string }

export function getSnapshotPath(cacheDir: string, snapshot: string): string {
  if (!shaPattern.test(snapshot)) throw new Error('Invalid snapshot SHA');
  return path.join(cacheDir, 'snapshots', snapshot);
}

/** Validate the payload against the identity recorded when its Git commit was fetched. */
export async function validateCachedSnapshot(cacheDir: string, snapshot: string): Promise<ValidatedSnapshot> {
  const dir = getSnapshotPath(cacheDir, snapshot);
  if (!(await lstat(dir)).isDirectory()) throw new Error('Unsafe snapshot directory');
  const expected = await readFile(path.join(cacheDir, 'identities', snapshot), 'utf8');
  if (!/^[0-9a-f]{64}\n$/.test(expected)) throw new Error('Invalid snapshot identity');
  const validated = await validateSnapshot(dir);
  const actual = createHash('sha256').update(await readFile(path.join(dir, 'manifest.json'))).digest('hex') + '\n';
  if (actual !== expected) throw new Error('Snapshot identity mismatch');
  return validated;
}

async function git(cwd: string, args: string[]): Promise<Buffer> {
  const env: NodeJS.ProcessEnv = { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_NO_REPLACE_OBJECTS: '1' };
  // Repository-local settings must never redirect operations outside our temporary repo.
  for (const key of ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_COMMON_DIR', 'GIT_INDEX_FILE', 'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_CEILING_DIRECTORIES', 'GIT_DISCOVERY_ACROSS_FILESYSTEM', 'GIT_IMPLICIT_WORK_TREE', 'GIT_GRAFT_FILE', 'GIT_REPLACE_REF_BASE', 'GIT_PREFIX', 'GIT_SHALLOW_FILE', 'GIT_NAMESPACE', 'GIT_QUARANTINE_PATH', 'GIT_CONFIG']) delete env[key];
  const { stdout } = await exec('git', ['-c', 'core.hooksPath=/dev/null', '-c', 'protocol.allow=never', '-c', 'protocol.file.allow=always', '-c', 'protocol.https.allow=always', '-c', 'protocol.http.allow=always', '-c', 'protocol.ssh.allow=always', ...args], {
    cwd, encoding: 'buffer', maxBuffer: 64 * 1024 * 1024,
    env,
  });
  return stdout;
}
function safeRef(ref: string): boolean {
  return ref.length > 0 && !ref.startsWith('-') && !ref.startsWith('/') && !ref.endsWith('/') && !ref.endsWith('.') && !ref.includes('..') && !ref.includes('@{') && !ref.includes('//') && !/[\x00-\x20\x7f~^:?*\\[]/.test(ref) && !ref.split('/').some((p) => p.startsWith('.') || p.endsWith('.lock'));
}
async function cached(options: SyncOptions, ref: string): Promise<Pointer | null> {
  try {
    const pointer: Pointer = JSON.parse(await readFile(path.join(options.cacheDir, 'current.json'), 'utf8'));
    if (!pointer || typeof pointer.snapshot !== 'string' || typeof pointer.publishedAt !== 'string' || !Number.isFinite(Date.parse(pointer.publishedAt))) return null;
    if (options.remote !== undefined && (pointer.remote !== options.remote || pointer.ref !== ref)) return null;
    if (options.remote === undefined && options.ref !== undefined && pointer.ref !== ref) return null;
    await validateCachedSnapshot(options.cacheDir, pointer.snapshot);
    return pointer;
  } catch { return null; }
}

async function publishObjects(source: string, destination: string): Promise<void> {
  await mkdir(destination, { recursive: true });
  for (const entry of await readdir(source, { withFileTypes: true })) {
    if (!entry.isDirectory() || !/^(?:[0-9a-f]{2}|pack)$/.test(entry.name)) continue;
    const target = path.join(destination, entry.name);
    await mkdir(target, { recursive: true });
    const names = await readdir(path.join(source, entry.name));
    // An index is visible only after its corresponding pack is available.
    names.sort((a, b) => Number(a.endsWith('.idx')) - Number(b.endsWith('.idx')));
    for (const name of names) {
      if (entry.name === 'pack' ? !/^pack-[0-9a-f]{40}\.(?:pack|idx|rev)$/.test(name) : !/^[0-9a-f]{38}$/.test(name)) continue;
      try { await link(path.join(source, entry.name, name), path.join(target, name)); }
      catch (error) { if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error; }
    }
  }
}

async function materialize(repo: string, sha: string, destination: string): Promise<void> {
  const tree = await git(repo, ['ls-tree', '-rz', '--full-tree', sha]);
  for (const raw of tree.toString('binary').split('\0')) {
    if (!raw) continue;
    const entry = Buffer.from(raw, 'binary'); const tab = entry.indexOf(9);
    if (tab < 0) throw new Error('Invalid Git tree entry');
    const header = entry.subarray(0, tab).toString('ascii');
    const match = /^(100644|100755) blob ([0-9a-f]{40})$/.exec(header);
    if (!match) throw new Error('Unsafe Git tree entry');
    const name = decoder.decode(entry.subarray(tab + 1));
    const parts = name.split('/');
    if (!name || name.includes('\\') || parts.some((part) => !part || part === '.' || part === '..' || part.toLowerCase() === '.git' || /[\x00-\x1f\x7f]/.test(part))) throw new Error('Unsafe Git path');
    const target = path.join(destination, ...parts);
    await mkdir(path.dirname(target), { recursive: true });
    const contents = await git(repo, ['cat-file', 'blob', match[2]!]);
    await writeFile(target, contents, { flag: 'wx', mode: 0o600 });
  }
}

export async function syncSnapshot(options: SyncOptions): Promise<SyncResult> {
  // Git runs from a temporary repository, so resolve filesystem remotes at the API boundary.
  // URI schemes and SCP-style host:path identifiers must retain their Git syntax.
  if (options.remote && !options.remote.startsWith('-') && !/[\x00-\x1f\x7f]/.test(options.remote) &&
      !/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(options.remote) &&
      !/^[^/]+:/.test(options.remote)) {
    options = { ...options, remote: path.resolve(options.remote) };
  }
  const checkedAt = new Date().toISOString(); const ref = options.ref ?? 'corpus';
  const fallback = async (error: string): Promise<SyncResult> => {
    const pointer = await cached(options, ref);
    return pointer ? { snapshot: pointer.snapshot, status: 'cached', checkedAt, publishedAt: pointer.publishedAt, error } : { snapshot: null, status: 'unavailable', checkedAt, publishedAt: null, error };
  };
  if (options.offline) {
    const pointer = await cached(options, ref);
    return pointer ? { snapshot: pointer.snapshot, status: 'cached', checkedAt, publishedAt: pointer.publishedAt } : { snapshot: null, status: 'unavailable', checkedAt, publishedAt: null, error: 'No valid cached snapshot' };
  }
  if (!options.remote || options.remote.startsWith('-') || /[\x00-\x1f\x7f]/.test(options.remote) || !safeRef(ref)) return fallback('Invalid remote or ref');
  let temp: string | undefined; let pointerTemp: string | undefined;
  try {
    await mkdir(path.join(options.cacheDir, 'snapshots'), { recursive: true });
    temp = await mkdtemp(path.join(options.cacheDir, '.sync-'));
    const repo = path.join(temp, 'repo'); const payload = path.join(temp, 'payload');
    await mkdir(repo); await mkdir(payload);
    await git(repo, ['init', '--bare', '--quiet']);
    const objectCache = path.join(options.cacheDir, 'objects');
    await mkdir(objectCache, { recursive: true });
    await cp(objectCache, path.join(repo, 'objects'), { recursive: true, force: false });
    const previous = await cached(options, ref);
    if (previous) {
      try { await git(repo, ['update-ref', 'refs/heads/cache', previous.snapshot]); } catch { /* Cache objects may be missing. */ }
    }
    await git(repo, ['fetch', '--quiet', '--no-tags', '--no-recurse-submodules', '--', options.remote, ref]);
    const sha = (await git(repo, ['rev-parse', '--verify', 'FETCH_HEAD^{commit}'])).toString('utf8').trim();
    if (!shaPattern.test(sha)) throw new Error('Invalid fetched commit');
    const publishedAt = (await git(repo, ['show', '-s', '--format=%cI', sha])).toString('utf8').trim();
    if (!Number.isFinite(Date.parse(publishedAt))) throw new Error('Invalid commit date');
    await materialize(repo, sha, payload); await validateSnapshot(payload);
    await publishObjects(path.join(repo, 'objects'), objectCache);
    const manifestDigest = createHash('sha256').update(await readFile(path.join(payload, 'manifest.json'))).digest('hex') + '\n';
    const destination = getSnapshotPath(options.cacheDir, sha);
    try { await rename(payload, destination); } catch (error) {
      if (!['EEXIST', 'ENOTEMPTY'].includes((error as NodeJS.ErrnoException).code ?? '')) throw error;
      if (!(await lstat(destination)).isDirectory()) throw new Error('Unsafe snapshot directory');
      await validateSnapshot(destination);
      const [existingManifest, fetchedManifest] = await Promise.all([readFile(path.join(destination, 'manifest.json')), readFile(path.join(payload, 'manifest.json'))]);
      if (!existingManifest.equals(fetchedManifest)) throw new Error('Cached snapshot differs from fetched commit');
    }
    const identities = path.join(options.cacheDir, 'identities');
    await mkdir(identities, { recursive: true });
    const identityTemp = path.join(temp, 'identity');
    await writeFile(identityTemp, manifestDigest, { flag: 'wx' });
    try { await link(identityTemp, path.join(identities, sha)); } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
      if (await readFile(path.join(identities, sha), 'utf8') !== manifestDigest) throw new Error('Conflicting snapshot identity');
    }
    await validateCachedSnapshot(options.cacheDir, sha);
    const pointer: Pointer = { snapshot: sha, publishedAt, remote: options.remote, ref };
    pointerTemp = path.join(temp, 'current.json');
    await writeFile(pointerTemp, JSON.stringify(pointer) + '\n', { flag: 'wx' });
    await rename(pointerTemp, path.join(options.cacheDir, 'current.json'));
    return { snapshot: sha, status: 'fresh', checkedAt, publishedAt };
  } catch (error) {
    return fallback(error instanceof Error ? error.message : String(error));
  } finally {
    if (temp) await rm(temp, { recursive: true, force: true });
  }
}
