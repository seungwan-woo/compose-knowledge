import { execFile } from 'node:child_process';
import { cp, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import type { ValidatedSnapshot } from '../domain/types.js';
import { validateSnapshot } from '../knowledge/validate.js';
import type { ChangeSet } from './types.js';

const exec = promisify(execFile);
export function diffSnapshots(previous: ValidatedSnapshot | undefined, current: ValidatedSnapshot): ChangeSet {
  const old = new Map(previous?.index.entries.map(entry => [entry.id, JSON.stringify(entry)]) ?? []);
  const now = new Map(current.index.entries.map(entry => [entry.id, JSON.stringify(entry)]));
  return {
    added: [...now.keys()].filter(id => !old.has(id)).sort(),
    updated: [...now.keys()].filter(id => old.has(id) && old.get(id) !== now.get(id)).sort(),
    removed: [...old.keys()].filter(id => !now.has(id)).sort(),
  };
}
async function gitBytes(cwd: string, args: string[]): Promise<Buffer> {
  const env: NodeJS.ProcessEnv = { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_NO_REPLACE_OBJECTS: '1', GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' };
  for (const key of ['GIT_DIR', 'GIT_WORK_TREE', 'GIT_COMMON_DIR', 'GIT_INDEX_FILE', 'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_CEILING_DIRECTORIES', 'GIT_DISCOVERY_ACROSS_FILESYSTEM', 'GIT_IMPLICIT_WORK_TREE', 'GIT_GRAFT_FILE', 'GIT_REPLACE_REF_BASE', 'GIT_PREFIX', 'GIT_SHALLOW_FILE', 'GIT_NAMESPACE', 'GIT_QUARANTINE_PATH', 'GIT_CONFIG']) delete env[key];
  const { stdout } = await exec('git', ['-c', 'core.hooksPath=/dev/null', '-c', 'protocol.allow=never', '-c', 'protocol.file.allow=always', '-c', 'protocol.https.allow=always', '-c', 'protocol.http.allow=always', '-c', 'protocol.ssh.allow=always', ...args], { cwd, env, encoding: 'buffer', maxBuffer: 64 * 1024 * 1024 });
  return stdout;
}
async function git(cwd: string, args: string[]): Promise<string> { return (await gitBytes(cwd, args)).toString('utf8').trim(); }
async function exportTree(repo: string, sha: string, destination: string): Promise<void> {
  await mkdir(destination);
  const tree = await gitBytes(repo, ['ls-tree', '-rz', '--full-tree', sha]);
  for (const entry of tree.toString('binary').split('\0')) {
    if (!entry) continue;
    const bytes = Buffer.from(entry, 'binary'); const tab = bytes.indexOf(9);
    const match = /^(100644|100755) blob ([0-9a-f]{40})$/.exec(bytes.subarray(0, tab).toString('ascii'));
    if (tab < 0 || !match) throw new Error('Unsafe Git tree entry');
    const name = new TextDecoder('utf-8', { fatal: true }).decode(bytes.subarray(tab + 1));
    const parts = name.split('/');
    if (!name || name.includes('\\') || parts.some(part => !part || part === '.' || part === '..' || part.toLowerCase() === '.git' || /[\x00-\x1f\x7f]/.test(part))) throw new Error('Unsafe Git path');
    const target = path.join(destination, ...parts);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, await gitBytes(repo, ['cat-file', 'blob', match[2]!]), { flag: 'wx' });
  }
}
export async function publishSnapshot(options: { snapshotDir: string; remote: string; ref?: string; expectedSnapshot?: string | null }): Promise<{ changed: boolean; snapshot: string; changes: ChangeSet }> {
  const ref = options.ref ?? 'corpus';
  if (options.expectedSnapshot !== undefined && options.expectedSnapshot !== null && !/^[0-9a-f]{40}$/.test(options.expectedSnapshot)) throw new Error('Invalid expected snapshot SHA');
  if (!options.remote || options.remote.startsWith('-') || /[\x00-\x1f\x7f]/.test(options.remote)) throw new Error('Invalid remote');
  const remote = !/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(options.remote) && !/^[^/]+:/.test(options.remote) ? path.resolve(options.remote) : options.remote;
  const temp = await mkdtemp(path.join(tmpdir(), 'corpus-publish-'));
  try {
    const repo = path.join(temp, 'repo'); const payload = path.join(temp, 'payload'); const staged = path.join(temp, 'staged');
    await mkdir(repo); await git(repo, ['init', '--quiet']);
    await git(repo, ['check-ref-format', `refs/heads/${ref}`]);
    // Copy first and validate the exact bytes that will be staged.
    await cp(options.snapshotDir, staged, { recursive: true, dereference: false });
    const current = await validateSnapshot(staged);
    const advertised = await git(repo, ['ls-remote', '--heads', '--', remote, `refs/heads/${ref}`]);
    let previous: ValidatedSnapshot | undefined; let oldSha: string | undefined;
    if (options.expectedSnapshot !== undefined) {
      const observed = advertised ? advertised.split(/\s+/)[0] : null;
      if (observed !== options.expectedSnapshot) throw new Error('Remote corpus changed since collection');
    }
    if (advertised) {
      const match = /^([0-9a-f]{40})\s+refs\/heads\/[^\s]+$/.exec(advertised);
      if (!match) throw new Error('Invalid remote branch advertisement');
      oldSha = match[1]!;
      await git(repo, ['fetch', '--quiet', '--no-tags', '--no-recurse-submodules', '--', remote, `refs/heads/${ref}`]);
      if (await git(repo, ['rev-parse', 'FETCH_HEAD']) !== oldSha) throw new Error('Remote branch changed during publication');
      await exportTree(repo, oldSha, payload);
      previous = await validateSnapshot(payload);
      await git(repo, ['checkout', '--quiet', '--detach', oldSha]);
    }
    const changes = diffSnapshots(previous, current);
    if (previous && JSON.stringify(previous.manifest) === JSON.stringify(current.manifest)) return { changed: false, snapshot: oldSha!, changes };
    if (oldSha) await git(repo, ['rm', '-r', '--quiet', '--', '.']);
    await cp(staged, repo, { recursive: true });
    await git(repo, ['add', '--all', '--', '.']);
    await git(repo, ['-c', 'user.name=compose-knowledge bot', '-c', 'user.email=compose-knowledge@users.noreply.github.com', 'commit', '--quiet', '-m', 'Update knowledge corpus']);
    const snapshot = await git(repo, ['rev-parse', 'HEAD']);
    await git(repo, ['push', '--quiet', '--', remote, `HEAD:refs/heads/${ref}`]);
    return { changed: true, snapshot, changes };
  } finally { await rm(temp, { recursive: true, force: true }); }
}
