import { afterEach, describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cp, mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildSnapshot } from '../src/knowledge/build.js';
import { getSnapshotPath, syncSnapshot } from '../src/io/snapshot.js';

const roots: string[] = [];
afterEach(async () => { await Promise.all(roots.splice(0).map((p) => rm(p, { recursive: true, force: true }))); });
const git = (cwd: string, ...args: string[]) => execFileSync('git', args, { cwd, encoding: 'utf8', env: { ...process.env, GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' } }).trim();
async function fixture(body = 'Body') {
  const root = await mkdtemp(path.join(tmpdir(), 'snapshot-test-')); roots.push(root);
  const repo = path.join(root, 'repo'); const cacheDir = path.join(root, 'cache');
  await mkdir(repo); git(repo, 'init', '-b', 'corpus'); git(repo, 'config', 'user.email', 'test@example.com'); git(repo, 'config', 'user.name', 'Test');
  await buildSnapshot({ schemaVersion: 1, documents: [{ id: 'doc', artifact: 'a', fqn: 'a.Doc', title: 'Doc', description: 'A document', tags: [], sections: [{ id: 'section', title: 'Section', body, aliases: [], requires: [], sources: [{ id: 'source', kind: 'guide', resource: 'https://example.com', revision: 'revision', sha256: createHash('sha256').update(body).digest('hex'), license: 'Apache-2.0', excerpt: body }], relatedIds: [] }] }] }, path.join(root, 'built'));
  await cp(path.join(root, 'built'), repo, { recursive: true });
  git(repo, 'add', '.'); git(repo, 'commit', '-m', 'initial');
  return { repo, cacheDir, built: path.join(root, 'built'), sha: git(repo, 'rev-parse', 'HEAD') };
}

describe('snapshot sync', () => {
  it('fetches, validates, and permits offline use of a cached snapshot', async () => {
    const { repo, cacheDir, sha } = await fixture();
    const fresh = await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    expect(fresh).toMatchObject({ status: 'fresh', snapshot: sha });
    expect(await readFile(path.join(getSnapshotPath(cacheDir, sha), 'manifest.json'), 'utf8')).toContain('schemaVersion');
    expect(await syncSnapshot({ cacheDir, offline: true })).toMatchObject({ status: 'cached', snapshot: sha });
  });
  it('defaults to the corpus ref', async () => {
    const { repo, cacheDir, sha } = await fixture();
    expect(await syncSnapshot({ cacheDir, remote: repo })).toMatchObject({ status: 'fresh', snapshot: sha });
  });
  it('passes caller proxy and CA settings to Git', async () => {
    const { repo, cacheDir } = await fixture();
    const bin = path.join(path.dirname(repo), 'bin'); await mkdir(bin);
    const realGit = execFileSync('which', ['git'], { encoding: 'utf8' }).trim();
    const capture = path.join(path.dirname(repo), 'env');
    await writeFile(path.join(bin, 'git'), '#!/bin/sh\nprintf \"%s\\n%s\\n\" \"$HTTPS_PROXY\" \"$SSL_CERT_FILE\" > \"$SNAPSHOT_ENV_CAPTURE\"\nexec \"' + realGit + '\" \"$@\"\n', { mode: 0o755 });
    const keys = ['PATH', 'HTTPS_PROXY', 'SSL_CERT_FILE', 'SNAPSHOT_ENV_CAPTURE'] as const;
    const old = Object.fromEntries(keys.map(key => [key, process.env[key]]));
    Object.assign(process.env, { PATH: bin + path.delimiter + process.env.PATH, HTTPS_PROXY: 'http://proxy.invalid:1234', SSL_CERT_FILE: '/test/ca.pem', SNAPSHOT_ENV_CAPTURE: capture });
    try {
      expect((await syncSnapshot({ cacheDir, remote: repo })).status).toBe('fresh');
      expect(await readFile(capture, 'utf8')).toBe('http://proxy.invalid:1234\n/test/ca.pem\n');
    } finally { for (const key of keys) { if (old[key] === undefined) delete process.env[key]; else process.env[key] = old[key]; } }
  });
  it('reuses previously fetched objects on a subsequent sync', async () => {
    const { repo, cacheDir } = await fixture();
    const trace = path.join(cacheDir + '-trace');
    const previous = process.env.GIT_TRACE_PACKET; process.env.GIT_TRACE_PACKET = trace;
    try {
      expect((await syncSnapshot({ cacheDir, remote: repo })).status).toBe('fresh');
      const first = await readFile(trace, 'utf8');
      await writeFile(trace, '');
      expect((await syncSnapshot({ cacheDir, remote: repo })).status).toBe('fresh');
      const second = await readFile(trace, 'utf8');
      expect(first).toMatch(/want [0-9a-f]{40}/);
      expect(second).not.toMatch(/want [0-9a-f]{40}/);
    } finally { if (previous === undefined) delete process.env.GIT_TRACE_PACKET; else process.env.GIT_TRACE_PACKET = previous; }
  });
  it('returns unavailable offline when no valid cache exists', async () => {
    const { cacheDir } = await fixture();
    expect(await syncSnapshot({ cacheDir, offline: true })).toMatchObject({ status: 'unavailable', snapshot: null });
  });
  it('keeps last good on invalid updates and network failure, but not for another origin', async () => {
    const { repo, cacheDir, sha } = await fixture();
    await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    await writeFile(path.join(repo, 'manifest.json'), '{}'); git(repo, 'add', '.'); git(repo, 'commit', '-m', 'invalid');
    expect(await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' })).toMatchObject({ status: 'cached', snapshot: sha });
    await rm(repo, { recursive: true });
    expect(await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' })).toMatchObject({ status: 'cached', snapshot: sha });
    expect(await syncSnapshot({ cacheDir, remote: repo + '-other', ref: 'corpus' })).toMatchObject({ status: 'unavailable', snapshot: null });
  });
  it('retains pinned snapshots during concurrent updates and reads', async () => {
    const { repo, cacheDir, sha } = await fixture();
    await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    git(repo, 'commit', '--allow-empty', '-m', 'next'); const next = git(repo, 'rev-parse', 'HEAD');
    const [a, b, old] = await Promise.all([syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' }), syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' }), readFile(path.join(getSnapshotPath(cacheDir, sha), 'manifest.json'), 'utf8')]);
    expect(a).toMatchObject({ status: 'fresh', snapshot: next }); expect(b).toMatchObject({ status: 'fresh', snapshot: next }); expect(old).toContain('schemaVersion');
    expect(await readFile(path.join(getSnapshotPath(cacheDir, sha), 'manifest.json'), 'utf8')).toBe(old);
  });
  it('rejects unsafe SHAs and refs', async () => {
    expect(() => getSnapshotPath('/tmp/cache', '../escape')).toThrow();
    const { repo, cacheDir } = await fixture();
    expect(await syncSnapshot({ cacheDir, remote: repo, ref: '--upload-pack=evil' })).toMatchObject({ status: 'unavailable' });
  });
  it('rejects symlinked updates and preserves the last good snapshot', async () => {
    const { repo, cacheDir, sha } = await fixture();
    await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    await symlink('/etc/passwd', path.join(repo, 'evil')); git(repo, 'add', '.'); git(repo, 'commit', '-m', 'symlink');
    expect(await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' })).toMatchObject({ status: 'cached', snapshot: sha });
  });
  it('rejects an existing valid payload that does not match the fetched commit', async () => {
    const { repo, cacheDir, sha } = await fixture();
    await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    const other = await fixture('Different body');
    await rm(getSnapshotPath(cacheDir, sha), { recursive: true });
    await cp(other.built, getSnapshotPath(cacheDir, sha), { recursive: true });
    expect(await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' })).not.toMatchObject({ status: 'fresh' });
  });
  it('rejects corrupt caches', async () => {
    const { repo, cacheDir, sha } = await fixture();
    await syncSnapshot({ cacheDir, remote: repo, ref: 'corpus' });
    await writeFile(path.join(getSnapshotPath(cacheDir, sha), 'manifest.json'), '{}');
    expect(await syncSnapshot({ cacheDir, offline: true })).toMatchObject({ status: 'unavailable' });
  });
});
