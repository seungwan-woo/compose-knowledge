import { afterEach, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { buildSnapshot } from '../src/knowledge/build.js';
import { crawlSources } from '../src/refresh/crawl.js';
import { publishSnapshot } from '../src/refresh/publish.js';
import type { KnowledgeInput, ReadResponse, SearchResponse, SyncResult } from '../src/domain/types.js';
import type { CrawlConfig, FetchText } from '../src/refresh/types.js';

// Integration boundary: only upstream HTTP is faked. Acquisition, extraction,
// snapshot construction, publication to bare Git and executable consumption run.
const checkout = path.resolve(import.meta.dirname, '..');
const roots: string[] = [];
const env = { ...process.env, GIT_CONFIG_GLOBAL: '/dev/null', GIT_CONFIG_NOSYSTEM: '1' };
function command(command: string, args: string[], cwd: string) {
  const result = spawnSync(command, args, { cwd, env, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
  if (result.error) throw result.error;
  expect(result.status, result.stderr + result.stdout).toBe(0);
  return result.stdout;
}
function cli<T>(cwd: string, ...args: string[]): T {
  return JSON.parse(command(process.execPath, [path.join(checkout, 'dist/cli.js'), ...args, '--json'], cwd)) as T;
}
const git = (cwd: string, ...args: string[]) => command('git', args, cwd).trim();
const artifact = 'androidx.compose.ui:ui';
const config: CrawlConfig = { schemaVersion: 1, sources: [
  { id: 'daily-guide', kind: 'html', url: 'https://developer.android.com/daily-guide', title: 'Daily guide', artifact, fqn: 'androidx.compose.ui.window.Popup', license: 'CC-BY-4.0' },
  { id: 'daily-popup', kind: 'gitiles', url: 'https://android.googlesource.com/project/+/main/Popup.kt', title: 'Daily Popup source', artifact, fqn: 'androidx.compose.ui.window.Popup', license: 'Apache-2.0', repo: 'https://android.googlesource.com/project', ref: 'main', path: 'Popup.kt' },
  { id: 'daily-material-monitor', kind: 'monitor', url: 'https://m3.material.io/components/menus', title: 'Material shell', artifact, fqn: 'androidx.compose.ui.window.Popup', license: 'Apache-2.0' },
] };
const popupSource = 'fun Popup() {\n    // Acquisition fixture, not an Android runtime assertion.\n}\n';
const html = (body = 'Outside taps request dismissal.', includeSecond = true) => `<html><nav>Chrome must never enter the corpus.</nav><article class="devsite-article-body"><h1 id="dismissal">Dismissal</h1><p>${body}</p>${includeSecond ? '<h2 id="state">Caller state</h2><p>The caller owns expanded state.</p>' : ''}<script>script must never enter the corpus</script></article></html>`;
function upstream(page: string, revision = 'a'.repeat(40)): FetchText {
  return async url => {
    if (url === config.sources[0]!.url) return page;
    if (url === config.sources[2]!.url) return '<html><script>Angular shell; no article body</script></html>';
    if (url === 'https://android.googlesource.com/project/+/refs/heads/main?format=JSON') return `)]}'\n${JSON.stringify({ commit: revision })}`;
    if (url === `https://android.googlesource.com/project/+/${revision}/Popup.kt?format=TEXT`) return Buffer.from(popupSource).toString('base64');
    throw new Error(`Unexpected HTTP fixture request: ${url}`);
  };
}
async function fixture() {
  const root = await mkdtemp(path.join(tmpdir(), 'compose-daily-acceptance-')); roots.push(root);
  const remote = path.join(root, 'remote.git'); await mkdir(remote); git(remote, 'init', '--bare');
  const baseline = JSON.parse(await readFile(path.join(checkout, 'tests/fixtures/knowledge-input.json'), 'utf8')) as KnowledgeInput;
  return { root, remote, cache: path.join(root, 'cache'), baseline };
}
async function publish(root: string, remote: string, name: string, input: KnowledgeInput, expectedSnapshot: string | null) {
  const snapshotDir = path.join(root, name); await buildSnapshot(input, snapshotDir);
  return { snapshotDir, result: await publishSnapshot({ snapshotDir, remote, expectedSnapshot }) };
}
const context = ['--artifact', artifact, '--version', '1.7.8', '--platform', 'android'];
afterEach(async () => { await Promise.all(roots.splice(0).map(dir => rm(dir, { recursive: true, force: true }))); });

it('crawls, publishes, consumes and updates daily evidence while retaining released and pinned snapshots', async () => {
  const f = await fixture();
  const first = await crawlSources(config, f.baseline, undefined, upstream(html()));
  expect(first.sources.map(source => source.status)).toEqual(['ingested', 'ingested', 'monitor-only']);
  expect(first.input.documents.slice(0, f.baseline.documents.length)).toEqual(f.baseline.documents);
  const a = await publish(f.root, f.remote, 'a', first.input, null);
  const sync = cli<SyncResult>(f.root, 'sync', '--cache', f.cache, '--remote', f.remote, '--ref', 'corpus');
  expect(sync).toMatchObject({ status: 'fresh', snapshot: a.result.snapshot });
  const query = ['--cache', f.cache, '--snapshot', a.result.snapshot, ...context];
  const hits = cli<SearchResponse>(f.root, 'search', ...query, '--query', 'Daily guide', '--limit', '3');
  expect(hits.hits.some(hit => hit.id === 'live-daily-guide-dismissal' && hit.versionStatus === 'unknown')).toBe(true);
  const readA = cli<ReadResponse>(f.root, 'read', ...query, '--id', 'live-daily-guide-dismissal');
  expect(readA).toMatchObject({ versionStatus: 'unknown', requires: [{ artifact, version: null }], truncated: false });
  expect(readA.body).toBe('Outside taps request dismissal.');
  expect(readA.sources[0]).toMatchObject({ resource: `${config.sources[0]!.url}#dismissal`, license: 'CC-BY-4.0', sha256: createHash('sha256').update(readA.body).digest('hex') });
  expect(readA.sources[0]!.revision).toMatch(/^web:daily-guide:content@sha256:[a-f0-9]{64}$/);
  const sourceA = cli<ReadResponse>(f.root, 'read', ...query, '--id', 'live-daily-popup-lines-1');
  expect(sourceA.sources[0]).toMatchObject({ revision: 'a'.repeat(40), path: 'Popup.kt', startLine: 1, endLine: 4 });
  expect(sourceA.versionStatus).toBe('unknown');
  expect(cli<ReadResponse>(f.root, 'read', ...query, '--id', 'popup-properties').versionStatus).toBe('match');
  const manifest = JSON.parse(git(f.remote, 'show', `${a.result.snapshot}:manifest.json`));
  expect(manifest.schemaVersion).toBe(1);
  expect(Object.keys(manifest.files).some(name => /\.(?:mjs|js|yml|yaml)$/.test(name))).toBe(false);
  expect(git(f.remote, 'show', `${a.result.snapshot}:index/sections.json`)).not.toMatch(/Chrome must never|script must never|Angular shell/);

  // The Git source revision moved but its bytes did not: unchanged evidence must
  // retain original attribution, avoiding publication churn from head movement.
  const unchanged = await crawlSources(config, f.baseline, first.input, upstream(html(), 'b'.repeat(40)));
  const noOp = await publish(f.root, f.remote, 'no-op', unchanged.input, a.result.snapshot);
  expect(noOp.result).toMatchObject({ changed: false, snapshot: a.result.snapshot, changes: { added: [], updated: [], removed: [] } });
  expect(git(f.remote, 'rev-list', '--count', 'refs/heads/corpus')).toBe('1');

  const changed = await crawlSources(config, f.baseline, unchanged.input, upstream(html('Updated dismissal guidance.', false), 'c'.repeat(40)));
  const b = await publish(f.root, f.remote, 'b', changed.input, a.result.snapshot);
  expect(b.result.changes).toEqual({ added: [], updated: ['live-daily-guide-dismissal'], removed: ['live-daily-guide-state'] });
  expect(git(f.remote, 'rev-parse', `${b.result.snapshot}^`)).toBe(a.result.snapshot);
  expect(cli<SyncResult>(f.root, 'sync', '--cache', f.cache, '--remote', f.remote, '--ref', 'corpus')).toMatchObject({ status: 'fresh', snapshot: b.result.snapshot });
  expect(cli<ReadResponse>(f.root, 'read', ...query, '--id', 'live-daily-guide-dismissal')).toEqual(readA);
  expect(cli<ReadResponse>(f.root, 'read', '--cache', f.cache, '--snapshot', b.result.snapshot, ...context, '--id', 'live-daily-guide-dismissal').body).toBe('Updated dismissal guidance.');
}, 30000);

it('keeps the published and cached last good snapshot across required-source and staged-output failures', async () => {
  const f = await fixture(); const first = await crawlSources(config, f.baseline, undefined, upstream(html()));
  const a = await publish(f.root, f.remote, 'good', first.input, null);
  cli<SyncResult>(f.root, 'sync', '--cache', f.cache, '--remote', f.remote, '--ref', 'corpus');
  const failedFetch: FetchText = async url => { if (url === config.sources[0]!.url) throw new Error('upstream unavailable'); return upstream(html())(url); };
  await expect(crawlSources(config, f.baseline, first.input, failedFetch)).rejects.toThrow('upstream unavailable');
  await expect(crawlSources(config, f.baseline, first.input, upstream('<html><script>shell</script></html>'))).rejects.toThrow();
  const changed = await crawlSources(config, f.baseline, first.input, upstream(html('Must not publish corrupt output.')));
  const corrupt = path.join(f.root, 'corrupt'); await buildSnapshot(changed.input, corrupt);
  await writeFile(path.join(corrupt, 'manifest.json'), '{"schemaVersion":999}');
  await expect(publishSnapshot({ snapshotDir: corrupt, remote: f.remote, expectedSnapshot: a.result.snapshot })).rejects.toThrow();
  expect(git(f.remote, 'rev-parse', 'refs/heads/corpus')).toBe(a.result.snapshot);
  expect(git(f.remote, 'rev-list', '--count', 'refs/heads/corpus')).toBe('1');
  expect(cli<SyncResult>(f.root, 'sync', '--cache', f.cache, '--offline')).toMatchObject({ status: 'cached', snapshot: a.result.snapshot });
  const read = cli<ReadResponse>(f.root, 'read', '--cache', f.cache, '--snapshot', a.result.snapshot, ...context, '--id', 'live-daily-guide-dismissal');
  expect(read).toMatchObject({ body: 'Outside taps request dismissal.', versionStatus: 'unknown' });
}, 30000);
