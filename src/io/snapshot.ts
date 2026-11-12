import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { cp, link, lstat, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { TextDecoder } from 'node:util';
import type { SyncOptions, SyncResult } from '../domain/types.js';
import { validateSnapshot } from '../knowledge/validate.js';

const exec = promisify(execFile);
const shaPattern = /^[0-9a-f]{40}$/;
const decoder = new TextDecoder('utf-8', { fatal: true });
class SnapshotMismatch extends Error {}
interface Pointer { snapshot: string; publishedAt: string; remote?: string; ref?: string }

export function getSnapshotPath(cacheDir: string, snapshot: string): string {
  if (!shaPattern.test(snapshot)) throw new Error('Invalid snapshot SHA');
  return path.join(cacheDir, 'snapshots', snapshot);
}

async function git(cwd: string, args: string[]): Promise<Buffer> {
  const { stdout } = await exec('git', ['-c', 'core.hooksPath=/dev/null', '-c', 'protocol.allow=never', '-c', 'protocol.file.allow=always', '-c', 'protocol.https.allow=always', '-c', 'protocol.http.allow=always', '-c', 'protocol.ssh.allow=always', ...args], {
    cwd, encoding: 'buffer', maxBuffer: 64 * 1024 * 1024,
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_NO_REPLACE_OBJECTS: '1' },
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
    const dir = getSnapshotPath(options.cacheDir, pointer.snapshot);
    if (!(await lstat(dir)).isDirectory()) return null;
    await validateSnapshot(dir);
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
    const destination = getSnapshotPath(options.cacheDir, sha);
    try { await rename(payload, destination); } catch (error) {
      if (!['EEXIST', 'ENOTEMPTY'].includes((error as NodeJS.ErrnoException).code ?? '')) throw error;
      if (!(await lstat(destination)).isDirectory()) throw new Error('Unsafe snapshot directory');
      await validateSnapshot(destination);
      const [existingManifest, fetchedManifest] = await Promise.all([readFile(path.join(destination, 'manifest.json')), readFile(path.join(payload, 'manifest.json'))]);
      if (!existingManifest.equals(fetchedManifest)) throw new SnapshotMismatch('Cached snapshot differs from fetched commit');
    }
    const pointer: Pointer = { snapshot: sha, publishedAt, remote: options.remote, ref };
    pointerTemp = path.join(temp, 'current.json');
    await writeFile(pointerTemp, JSON.stringify(pointer) + '\n', { flag: 'wx' });
    await rename(pointerTemp, path.join(options.cacheDir, 'current.json'));
    return { snapshot: sha, status: 'fresh', checkedAt, publishedAt };
  } catch (error) {
    if (error instanceof SnapshotMismatch) return { snapshot: null, status: 'unavailable', checkedAt, publishedAt: null, error: error.message };
    return fallback(error instanceof Error ? error.message : String(error));
  } finally {
    if (temp) await rm(temp, { recursive: true, force: true });
  }
}
