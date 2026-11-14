import { describe, expect, it } from 'vitest';
import { crawlSources } from '../src/refresh/crawl.js';
import { toKnowledgeInputs } from '../src/adapters/crawler.js';
import type { CrawlConfig } from '../src/refresh/types.js';
import type { KnowledgeInput } from '../src/domain/types.js';

const baseline: KnowledgeInput = { schemaVersion: 1, documents: [] };
const config: CrawlConfig = { schemaVersion: 1, sources: [{ id: 'guide', kind: 'html', url: 'https://developer.android.com/guide', title: 'Guide', artifact: 'androidx.compose.ui:ui', fqn: 'androidx.compose.ui', license: 'Apache-2.0' }] };
const html = `<html><nav>navigation noise</nav><article class="devsite-article-body"><h1 id="intro">Introduction</h1><p>Compose helps developers build user interfaces.</p><script>bad script</script><h2 id="menus">Menus</h2><p>Menus display choices to the user.</p></article></html>`;

describe('daily source crawl', () => {
  it('extracts anchored article sections with attributable content and unknown versions', async () => {
    const { input } = await crawlSources(config, baseline, undefined, async () => html);
    toKnowledgeInputs(input);
    const sections = input.documents[0]!.sections;
    expect(sections.map(s => s.title)).toEqual(['Introduction', 'Menus']);
    expect(sections.map(s => s.body).join(' ')).not.toMatch(/navigation noise|bad script/);
    expect(sections[1]!.sources[0]!.resource).toBe('https://developer.android.com/guide#menus');
    expect(sections[1]!.sources[0]!.revision).toMatch(/^web:guide:content@sha256:[a-f0-9]{64}$/);
    expect(sections[1]!.requires[0]!.version).toBeNull();
  });
  it('rejects a shell and propagates fetch errors', async () => {
    await expect(crawlSources(config, baseline, undefined, async () => '<html><script>shell</script></html>')).rejects.toThrow();
    await expect(crawlSources(config, baseline, undefined, async () => { throw new Error('offline'); })).rejects.toThrow('offline');
  });
  it('keeps unchanged sections when unrelated article content changes', async () => {
    const first = await crawlSources(config, baseline, undefined, async () => html);
    const second = await crawlSources(config, baseline, first.input, async () => html.replace('choices to the user', 'actions to the user'));
    expect(second.input.documents[0]!.sections[0]).toEqual(first.input.documents[0]!.sections[0]);
    expect(second.input.documents[0]!.sections[1]).not.toEqual(first.input.documents[0]!.sections[1]);
  });
});

describe('immutable upstream acquisition', () => {
  it('pins Gitiles files and retains unchanged evidence when the head moves', async () => {
    const git: CrawlConfig = { schemaVersion: 1, sources: [{ id: 'popup', kind: 'gitiles', url: 'https://android.googlesource.com/project/+/main/Popup.kt', title: 'Popup', artifact: 'androidx.compose.ui:ui', fqn: 'androidx.compose.ui.Popup', license: 'Apache-2.0', repo: 'https://android.googlesource.com/project', ref: 'main', path: 'Popup.kt' }] };
    let head = 'a'.repeat(40);
    const fetch = async (url: string) => url.endsWith('format=JSON') ? `)]}'\n${JSON.stringify({ commit: head })}` : Buffer.from('fun Popup() = Unit\n').toString('base64');
    const first = await crawlSources(git, baseline, undefined, fetch);
    expect(first.input.documents[0]!.sections[0]!.sources[0]).toMatchObject({ revision: head, path: 'Popup.kt', startLine: 1, endLine: 2 });
    head = 'b'.repeat(40);
    const second = await crawlSources(git, baseline, first.input, fetch);
    expect(second.input).toEqual(first.input);
    toKnowledgeInputs(second.input);
  });
  it('records monitor sources without ingesting their shell', async () => {
    const monitor: CrawlConfig = { schemaVersion: 1, sources: [{ ...config.sources[0]!, kind: 'monitor' }] };
    const result = await crawlSources(monitor, baseline, undefined, async () => '<script>shell</script>');
    expect(result.input.documents).toEqual([]);
    expect(result.sources[0]).toMatchObject({ status: 'monitor-only', sections: 0 });
  });
});

it('extracts text directly inside landing-page containers', async () => {
  const landing = '<div class="devsite-article-body"><h3 id="start">Start</h3><div class="description">Compose is the recommended toolkit for Android user interfaces.</div></div>';
  const result = await crawlSources(config, baseline, undefined, async () => landing);
  expect(result.input.documents[0]!.sections[0]!.body).toContain('recommended toolkit');
});

it('uses the GitHub commit SHA rather than its nested commit object', async () => {
  const github: CrawlConfig = { schemaVersion: 1, sources: [{ id: 'samples', kind: 'github', url: 'https://github.com/android/compose-samples', title: 'Samples', artifact: 'androidx.compose.ui:ui', fqn: 'androidx.compose.ui', license: 'Apache-2.0', repo: 'android/compose-samples', ref: 'main', path: 'README.md' }] };
  const result = await crawlSources(github, baseline, undefined, async url => url.includes('api.github.com') ? JSON.stringify({ sha: 'a'.repeat(40), commit: { message: 'change' } }) : '# Sample\nUseful text');
  expect(result.input.documents[0]!.sections[0]!.sources[0]!.revision).toBe('a'.repeat(40));
});

it('retains an introduction under a real article anchor', async () => {
  const page = '<article class="devsite-article-body" id="article"><p>Introduction to menus and popups.</p><h2 id="usage">Usage</h2><p>Use a menu.</p></article>';
  const result = await crawlSources(config, baseline, undefined, async () => page);
  expect(result.input.documents[0]!.sections[0]!.body).toContain('Introduction to menus');
  expect(result.input.documents[0]!.sections[0]!.sources[0]!.resource).toBe('https://developer.android.com/guide#article');
});

it('rejects duplicate source IDs and unsupported kinds', async () => {
  await expect(crawlSources({ ...config, sources: [config.sources[0]!, config.sources[0]!] }, baseline, undefined, async () => html)).rejects.toThrow(/duplicate/i);
  await expect(crawlSources({ ...config, sources: [{ ...config.sources[0]!, kind: 'bogus' } as never] }, baseline, undefined, async () => html)).rejects.toThrow(/kind/i);
});

import { fetchWithPolicy } from '../src/refresh/fetch.js';

it('retries transient failures with bounded delays and honors Retry-After', async () => {
  let calls = 0; const delays: number[] = [];
  const result = await fetchWithPolicy('https://developer.android.com/a', async () => {
    calls++;
    return calls === 1 ? { status: 429, headers: { 'retry-after': '2' }, body: '' } : { status: 200, headers: {}, body: 'ok' };
  }, async ms => { delays.push(ms); });
  expect(result).toBe('ok'); expect(calls).toBe(2); expect(delays).toEqual([2000]);
});
it('does not retry permanent HTTP errors', async () => {
  let calls = 0;
  await expect(fetchWithPolicy('https://developer.android.com/a', async () => { calls++; return { status: 404, headers: {}, body: '' }; }, async () => {})).rejects.toThrow(/404/);
  expect(calls).toBe(1);
});
it('validates every redirect before contacting it', async () => {
  let calls = 0;
  await expect(fetchWithPolicy('https://developer.android.com/a', async () => { calls++; return { status: 302, headers: { location: 'https://evil.example/a' }, body: '' }; }, async () => {})).rejects.toThrow(/Untrusted/);
  expect(calls).toBe(1);
});

it('preserves highlighted Kotlin tokens, interpolation, and line comments', async () => {
  const page = `<article class="devsite-article-body"><h2 id="example">Example</h2><pre><code><span>options.forEach</span> { option <span>-</span><span>&gt;</span>\n    // Placeholder comment\n    val label = "Hello \${option.name}"\n}</code></pre></article>`;
  const result = await crawlSources(config, baseline, undefined, async () => page);
  const body = result.input.documents[0]!.sections[0]!.body;
  expect(body).toContain('option ->\n    // Placeholder comment\n    val label = "Hello ${option.name}"');
});

it('indexes configured API symbols only in sections that actually mention the exact name', async () => {
  const configured: CrawlConfig = { ...config, sources: [{ ...config.sources[0]!, symbols: ['androidx.compose.runtime.DisposableEffect'] }] };
  const page = '<article class="devsite-article-body"><h2 id="effect">Effect</h2><p>DisposableEffect runs cleanup when a key changes.</p><h2 id="scope">Scope</h2><p>DisposableEffectScope exposes cleanup registration.</p></article>';
  const result = await crawlSources(configured, baseline, undefined, async () => page);
  expect(result.input.documents[0]!.sections[0]!.aliases).toEqual(['androidx.compose.runtime.DisposableEffect']);
  expect(result.input.documents[0]!.sections[1]!.aliases).toEqual([]);
});

it('rejects malformed configured API symbols before acquisition', async () => {
  const invalid = { ...config, sources: [{ ...config.sources[0]!, symbols: ['not a qualified symbol'] }] };
  await expect(crawlSources(invalid, baseline, undefined, async () => html)).rejects.toThrow(/symbol/i);
});

it('does not index foreign import or package directives as local API evidence', async () => {
  const source = { ...config.sources[0]!, kind: 'gitiles' as const, repo: 'https://android.googlesource.com/project', ref: 'main', path: 'Dp.kt', fqn: 'androidx.compose.ui.unit', symbols: ['androidx.compose.ui.unit.lerp', 'androidx.compose.ui.unit.min'] };
  const lines = ['package androidx.compose.ui.unit', 'import androidx.compose.ui.util.lerp', 'import kotlin.math.min', ...Array(32).fill('// License header'), 'fun lerp(start: Dp, stop: Dp, fraction: Float): Dp = TODO()', 'fun min(a: Dp, b: Dp): Dp = TODO()'];
  const result = await crawlSources({ schemaVersion: 1, sources: [source] }, baseline, undefined, async url => url.endsWith('format=JSON') ? JSON.stringify({ commit: 'a'.repeat(40) }) : Buffer.from(lines.join('\n')).toString('base64'));
  const sections = result.input.documents[0]!.sections;
  expect(sections[0]!.body).toContain('import androidx.compose.ui.util.lerp');
  expect(sections[0]!.aliases).toEqual([]);
  expect(sections[1]!.aliases).toEqual(source.symbols);
});

it('honors long Retry-After rather than retrying early', async () => {
  let calls = 0; const delays: number[] = [];
  const body = await fetchWithPolicy('https://android.googlesource.com/a', async () => ++calls === 1
    ? { status: 429, headers: { 'retry-after': '60' }, body: '' }
    : { status: 200, headers: {}, body: 'source' }, async ms => { delays.push(ms); });
  expect(body).toBe('source'); expect(delays).toEqual([60000]);
});

it('allows a bounded recovery window for a burst rate limit', async () => {
  let calls = 0; const delays: number[] = [];
  const body = await fetchWithPolicy('https://android.googlesource.com/a', async () => ++calls <= 4
    ? { status: 429, headers: {}, body: '' }
    : { status: 200, headers: {}, body: 'source' }, async ms => { delays.push(ms); });
  expect(body).toBe('source'); expect(delays).toEqual([2000, 4000, 8000, 16000]);
});

it('emits only hash-valid inclusive selected Git spans and reports changes', async () => {
  const { createHash } = await import('node:crypto');
  const git: CrawlConfig = { schemaVersion: 1, sources: [{ id: 'code', kind: 'github', url: 'https://github.com/a/b', title: 'Code', artifact: 'androidx.compose.ui:ui', fqn: 'androidx.compose.ui', license: 'Apache-2.0', repo: 'a/b', ref: 'main', path: 'A.kt' }] };
  const text = 'first\nsecond\nthird\n';
  const spans = {schemaVersion:1 as const, spans:[{id:'selected',sourceId:'code',title:'Selected',sourceSha256:createHash('sha256').update(text).digest('hex'),startLine:2,endLine:3}]};
  let body = text.replace(/\n/g,'\r\n');
  const fetch = async (url:string) => url.includes('api.github.com') ? JSON.stringify({sha:'a'.repeat(40)}) : body;
  const first = await crawlSources(git, baseline, undefined, fetch, spans);
  expect(first.input.documents[0]!.sections.find(s => s.id === 'selected')?.body).toBe('second\nthird');
  expect(first.spans).toEqual([{id:'selected',status:'ingested'}]);
  body = text + 'changed';
  const changed = await crawlSources(git, baseline, first.input, fetch, spans);
  expect(changed.input.documents[0]!.sections.some(s => s.id === 'selected')).toBe(false);
  expect(changed.spans[0]!.status).toBe('needs-review');
});

it('attaches needs-review span metadata when a required Git file is unavailable', async () => {
 const git: CrawlConfig = {schemaVersion:1,sources:[{id:'missing',kind:'github',url:'https://github.com/a/b',title:'File',artifact:'a:b',fqn:'a.B',license:'Apache-2.0',repo:'a/b',ref:'main',path:'Missing.kt'}]};
 const spans={schemaVersion:1 as const,spans:[{id:'span',sourceId:'missing',title:'Span',sourceSha256:'a'.repeat(64),startLine:1,endLine:1}]};
 try { await crawlSources(git,baseline,undefined,async url=>{if(url.includes('api.github.com'))return JSON.stringify({sha:'a'.repeat(40)});throw new Error('HTTP 404');},spans); expect.fail('expected acquisition to fail'); }
 catch (error) {expect((error as any).spans).toEqual([{id:'span',status:'needs-review',reason:expect.any(String)}]);}
});

it('suppresses an invalid selected span interval while keeping ordinary chunks', async () => {
 const git:CrawlConfig={schemaVersion:1,sources:[{id:'code',kind:'github',url:'https://github.com/a/b',title:'File',artifact:'a:b',fqn:'a.B',license:'Apache-2.0',repo:'a/b',ref:'main',path:'A.kt'}]};
 const {createHash}=await import('node:crypto'); const body='line one\nline two';
 const result=await crawlSources(git,baseline,undefined,async url=>url.includes('api.github.com')?JSON.stringify({sha:'a'.repeat(40)}):body,{schemaVersion:1,spans:[{id:'bad',sourceId:'code',title:'Bad',sourceSha256:createHash('sha256').update(body).digest('hex'),startLine:2,endLine:3}]});
 expect(result.spans).toEqual([{id:'bad',status:'needs-review',reason:expect.any(String)}]);expect(result.input.documents[0]!.sections.some(s=>s.id==='bad')).toBe(false);expect(result.input.documents[0]!.sections.length).toBeGreaterThan(0);
});
