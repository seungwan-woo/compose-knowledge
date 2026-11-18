import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, expect, it } from 'vitest';
import { importDailyTips } from '../src/knowledge/daily-tips.js';
import { buildSnapshot } from '../src/knowledge/build.js';
import { validateSnapshot } from '../src/knowledge/validate.js';
import { searchIndex } from '../src/retrieval/search.js';

const SHA = 'a'.repeat(40);
const roots: string[] = [];
const rootDir = path.resolve(import.meta.dirname, '..');
afterEach(async () => {
  await Promise.all(roots.splice(0).map(root => rm(root, {recursive:true,force:true})));
});

function fixture(date = '2026-11-19', extras = '') {
  return [
    '---',
    'layout: default',
    'tip: true',
    'title: "Effect timer review"',
    'summary: "Safe LaunchedEffect callback handling"',
    'doc_date: "' + date + '"',
    'version_scope: "Compose Runtime 1.0.0+"',
    'agp_scope: "No API-specific AGP minimum; verify resolved Compose dependencies"',
    'verification: "Official contract reviewed; Android build not executed"',
    'permalink: /tips/' + date + '/',
    '---',
    '',
    '## Callback handling',
    '',
    'If callback changes, use `rememberUpdatedState` rather than restarting `LaunchedEffect`.',
    '',
    '~~~kotlin',
    'val current by rememberUpdatedState(onTimeout)',
    'LaunchedEffect(timeoutMs) { delay(timeoutMs); current() }',
    '~~~',
    '',
    '## Version notes',
    '',
    'Kotlin and AGP requirements depend on resolved Compose versions.',
    extras,
  ].join('\n');
}
async function setup() {
  const root = await mkdtemp(path.join(tmpdir(), 'tips-test-')); roots.push(root);
  const dir = path.join(root, 'tips'); await mkdir(dir);
  return {root,dir};
}
function run(command: string, args: string[], cwd: string): string {
  const result = spawnSync(command,args,{cwd,encoding:'utf8',maxBuffer:4*1024*1024});
  expect(result.status, result.stderr || result.stdout).toBe(0);
  return result.stdout.trim();
}
it('imports exact Markdown sections with immutable line-linked provenance and AGP metadata', async () => {
  const {dir} = await setup();
  await writeFile(path.join(dir,'2026-11-19.md'),fixture());
  const docs = await importDailyTips(dir,SHA);
  expect(docs).toHaveLength(1);
  const [first,second] = docs[0]!.sections;
  expect(first?.title).toContain('Practical Tip');
  expect(first?.body).toContain('AGP support: No API-specific AGP minimum');
  expect(first?.body).toContain('~~~kotlin\nval current by rememberUpdatedState');
  expect(first?.requires).toEqual([{artifact:'compose-knowledge:practical-tip',version:null}]);
  expect(first?.sources[0]).toMatchObject({
    revision:SHA,kind:'guide',path:'docs/tips/2026-11-19.md',
    license:'Unspecified (repository-authored content)'
  });
  expect(first!.sources[0]!.resource).toContain('/blob/'+SHA+'/docs/tips/2026-11-19.md#L');
  expect(first!.sources[0]!.sha256).toBe(createHash('sha256').update(first!.sources[0]!.excerpt).digest('hex'));
  expect(second?.title).toContain('Version notes');
});
it('round-trips tips through the original corpus validator and returns version-unknown hits', async () => {
  const {root,dir} = await setup();
  await writeFile(path.join(dir,'2026-11-19.md'),fixture());
  const docs = await importDailyTips(dir,SHA);
  const snapshot = path.join(root,'snapshot');
  await buildSnapshot({schemaVersion:1,documents:docs},snapshot);
  const validated = await validateSnapshot(snapshot);
  expect(validated.index.entries).toHaveLength(2);
  expect(validated.index.entries[0]?.tags).toContain('practical-tip');
  const hits = searchIndex(validated.index,{
    query:'rememberUpdatedState',artifact:'androidx.compose.runtime:runtime',
    versions:[{artifact:'androidx.compose.runtime:runtime',version:'1.12.1'}],
    limit:3
  },SHA);
  expect(hits.hits[0]).toMatchObject({versionStatus:'unknown'});
  expect(hits.hits[0]?.sources[0]?.resource).toContain('2026-11-19.md#L');
});
it('retrieves practical tips through the same begin/lookup task and pinned snapshot', async () => {
  const {root,dir} = await setup();
  await writeFile(path.join(dir,'2026-11-19.md'),fixture());
  const docs = await importDailyTips(dir,SHA);
  const corpus = path.join(root,'corpus');
  await buildSnapshot({schemaVersion:1,documents:docs},corpus);
  run('git',['init','-q','-b','corpus'],corpus);
  run('git',['config','user.name','Test'],corpus);
  run('git',['config','user.email','test@example.com'],corpus);
  run('git',['add','.'],corpus);
  run('git',['commit','-qm','tips fixture'],corpus);
  const cli=path.join(rootDir,'dist/cli.js'), cache=path.join(root,'cache'), task=path.join(root,'task.json');
  const begun=JSON.parse(run(process.execPath,[cli,'begin','--cache',cache,'--task',task,'--remote',corpus],root));
  const result=JSON.parse(run(process.execPath,[cli,'lookup','--task',task,'--query','tip rememberUpdatedState'],root));
  expect(result.snapshot).toBe(begun.snapshot);
  expect(result.transmission).toBe('complete');
  expect(result.sections).toHaveLength(1);
  expect(result.sections[0]?.body).toContain('LaunchedEffect');
  expect(result.sections[0]?.versionStatus).toBe('unknown');
  expect(result.sufficiency).toBe('unreviewed');
  expect(JSON.parse(await readFile(task,'utf8')).ledger.attempts).toBe(1);
});
it('rejects invalid AGP applicability, non-dated metadata and symlink input', async () => {
  const {dir,root} = await setup();
  const file=path.join(dir,'2026-11-19.md');
  await writeFile(file,fixture().replace(/^agp_scope:.*\n/m,''));
  await expect(importDailyTips(dir,SHA)).rejects.toThrow(/agp_scope/);
  await writeFile(file,fixture('2026-11-18'));
  await expect(importDailyTips(dir,SHA)).rejects.toThrow(/dated tip/);
  await writeFile(file,fixture());
  await expect(importDailyTips(dir,'main')).rejects.toThrow(/immutable/);
  const external=path.join(root,'external.md');await writeFile(external,fixture());
  await rm(file);await symlink(external,file);
  await expect(importDailyTips(dir,SHA)).rejects.toThrow(/regular file/);
});
it('imports the currently published tips, preserving existing code fences', async () => {
  const docs=await importDailyTips(path.join(rootDir,'docs/tips'),SHA);
  expect(docs.length).toBeGreaterThanOrEqual(4);
  const joined=docs.flatMap(d=>d.sections.map(s=>s.body)).join('\n');
  for(const name of ['derivedStateOf','LaunchedEffect','LocalConfiguration','LifecycleEventEffect','drawBehind']) {
    expect(joined).toContain(name);
  }
});

it('tips-only refresh preserves previous official evidence without any upstream crawl', async () => {
  const {root} = await setup();
  const baseline=JSON.parse(await readFile(path.join(rootDir,'tests/fixtures/knowledge-input.json'),'utf8'));
  const old=path.join(root,'old'), refreshed=path.join(root,'refresh');
  await buildSnapshot(baseline,old);
  run(process.execPath,[
    path.join(rootDir,'scripts/refresh.mjs'),
    '--out',refreshed,'--previous',old,
    '--base-snapshot','b'.repeat(40),'--tips-only'
  ],rootDir);
  const former=await validateSnapshot(old);
  const next=await validateSnapshot(path.join(refreshed,'corpus'));
  for (const entry of former.index.entries) {
    expect(next.index.entries.find(item=>item.id===entry.id)).toEqual(entry);
  }
  expect(next.index.entries.filter(entry=>entry.tags.includes('practical-tip')).length).toBeGreaterThan(4);
  const report=JSON.parse(await readFile(path.join(refreshed,'report.json'),'utf8'));
  expect(report.sources).toEqual([]);
  expect(report.tips.length).toBeGreaterThanOrEqual(4);
});
