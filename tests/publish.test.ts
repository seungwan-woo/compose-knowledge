import { afterEach, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildSnapshot } from '../src/knowledge/build.js';
import { publishSnapshot } from '../src/refresh/publish.js';

const roots: string[] = [];
afterEach(async () => { await Promise.all(roots.splice(0).map(p => rm(p, { recursive: true, force: true }))); });
const git = (cwd: string, ...args: string[]) => execFileSync('git', args, { cwd, encoding: 'utf8', env: { ...process.env, GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' } }).trim();
async function setup() {
  const root = await mkdtemp(path.join(tmpdir(), 'publish-test-')); roots.push(root);
  const remote = path.join(root, 'remote.git'); await mkdir(remote); git(remote, 'init', '--bare');
  return { root, remote };
}
async function snapshot(root: string, name: string, ids: string[], body = 'Body') {
  const dir = path.join(root, name);
  await buildSnapshot({ schemaVersion: 1, documents: [{ id: 'doc', artifact: 'a', fqn: 'a.Doc', title: 'Doc', description: 'Description', tags: [], sections: ids.map(id => ({ id, title: id, body, aliases: [], requires: [], sources: [{ id: `source-${id}`, kind: 'guide' as const, resource: `https://example.com/#${id}`, revision: 'a'.repeat(40), sha256: createHash('sha256').update(body).digest('hex'), license: 'Apache-2.0', excerpt: body }], relatedIds: [] })) }] }, dir);
  return dir;
}
it('publishes a validated initial snapshot, skips unchanged data, and reports updates and deletions', async () => {
  const { root, remote } = await setup();
  const first = await snapshot(root, 'first', ['one', 'two']);
  const initial = await publishSnapshot({ snapshotDir: first, remote });
  expect(initial.changed).toBe(true); expect(initial.changes.added).toEqual(['one', 'two']);
  expect(await publishSnapshot({ snapshotDir: first, remote })).toMatchObject({ changed: false, snapshot: initial.snapshot });
  const second = await snapshot(root, 'second', ['one', 'three'], 'Changed');
  const next = await publishSnapshot({ snapshotDir: second, remote });
  expect(next.changes).toEqual({ added: ['three'], updated: ['one'], removed: ['two'] });
  expect(git(remote, 'rev-parse', 'refs/heads/corpus')).toBe(next.snapshot);
});
it('rejects corrupt staging and corrupt remote snapshots', async () => {
  const { root, remote } = await setup(); const first = await snapshot(root, 'first', ['one']);
  await writeFile(path.join(first, 'manifest.json'), '{}');
  await expect(publishSnapshot({ snapshotDir: first, remote })).rejects.toThrow();
  const repo = path.join(root, 'repo'); await mkdir(repo); git(repo, 'init', '-b', 'corpus');
  git(repo, 'config', 'user.name', 'Test'); git(repo, 'config', 'user.email', 'test@example.com');
  await writeFile(path.join(repo, 'manifest.json'), '{}'); git(repo, 'add', '.'); git(repo, 'commit', '-m', 'bad'); git(repo, 'push', remote, 'corpus');
  const good = await snapshot(root, 'good', ['one']);
  await expect(publishSnapshot({ snapshotDir: good, remote })).rejects.toThrow();
});
it('does not treat inaccessible remotes as empty', async () => {
  const { root } = await setup(); const first = await snapshot(root, 'first', ['one']);
  await expect(publishSnapshot({ snapshotDir: first, remote: path.join(root, 'missing') })).rejects.toThrow();
});
it('rejects a concurrent stale push without overwriting the winner', async () => {
  const { root, remote } = await setup(); const first = await snapshot(root, 'first', ['one']);
  const base = await publishSnapshot({ snapshotDir: first, remote });
  const a = await snapshot(root, 'a', ['one'], 'A'); const b = await snapshot(root, 'b', ['one'], 'B');
  const results = await Promise.allSettled([publishSnapshot({ snapshotDir: a, remote, expectedSnapshot: base.snapshot }), publishSnapshot({ snapshotDir: b, remote, expectedSnapshot: base.snapshot })]);
  expect(results.filter(r => r.status === 'fulfilled')).toHaveLength(1);
  expect(results.filter(r => r.status === 'rejected')).toHaveLength(1);
  const winner = results.find(r => r.status === 'fulfilled');
  if (winner?.status !== 'fulfilled') throw new Error('No winner');
  expect(git(remote, 'rev-parse', 'refs/heads/corpus')).toBe(winner.value.snapshot);
});

it('rejects a stale collection base and preserves the newer corpus', async () => {
  const { root, remote } = await setup();
  const a = await snapshot(root, 'a', ['one'], 'A');
  const base = await publishSnapshot({ snapshotDir: a, remote, expectedSnapshot: null });
  const b = await snapshot(root, 'b', ['one'], 'B');
  const newer = await publishSnapshot({ snapshotDir: b, remote, expectedSnapshot: base.snapshot });
  await expect(publishSnapshot({ snapshotDir: a, remote, expectedSnapshot: base.snapshot })).rejects.toThrow(/changed/i);
  await expect(publishSnapshot({ snapshotDir: a, remote, expectedSnapshot: null })).rejects.toThrow(/changed/i);
  await expect(publishSnapshot({ snapshotDir: a, remote, expectedSnapshot: 'invalid' })).rejects.toThrow();
  expect(git(remote, 'rev-parse', 'refs/heads/corpus')).toBe(newer.snapshot);
});
