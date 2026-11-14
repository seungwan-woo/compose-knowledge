import { createHash } from 'node:crypto';
import type { KnowledgeDocument, KnowledgeInput, KnowledgeSection } from '../domain/types.js';
import type { CrawlConfig, CrawlResult, CrawlSource, FetchText, SpanCatalog } from './types.js';
import { chunks, extractArticle, safeId } from './extract.js';
import { fetchPublicText } from './fetch.js';
export { fetchPublicText } from './fetch.js';

const hash = (s: string) => createHash('sha256').update(s).digest('hex');
const revisionFrom = (text: string, gitiles: boolean): string => {
  const obj: unknown = JSON.parse(gitiles ? text.replace(/^\)\]\}'\s*/, '') : text);
  const rev = gitiles ? (obj as { commit?: unknown }).commit : (obj as { sha?: unknown }).sha;
  if (typeof rev !== 'string' || !/^[a-f0-9]{40}$/.test(rev)) throw new Error('Invalid upstream revision');
  return rev;
};
const comparable = (s: KnowledgeSection) => JSON.stringify({ ...s, sources: s.sources.map(({ revision: _revision, resource, ...rest }) => ({ ...rest, resource: resource.replace(/[a-f0-9]{40}/g, 'COMMIT') })) });

export async function crawlSources(config: CrawlConfig, baseline: KnowledgeInput, previous?: KnowledgeInput, fetchText: FetchText = fetchPublicText, spanCatalog: SpanCatalog = {schemaVersion:1,spans:[]}): Promise<CrawlResult> {
  if (config.schemaVersion !== 1) throw new Error('Unsupported crawl config');
  const ids = new Set<string>();
  for (const source of config.sources) {
    if (ids.has(source.id)) throw new Error(`Duplicate crawl source ID: ${source.id}`);
    if (!['html', 'gitiles', 'github', 'monitor'].includes(source.kind)) throw new Error(`Unsupported source kind: ${source.kind}`);
    if (source.symbols !== undefined && (!Array.isArray(source.symbols) || source.symbols.some(symbol => typeof symbol !== 'string' || !/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)+$/.test(symbol)))) throw new Error(`Invalid source symbols: ${source.id}`);
    ids.add(source.id);
  }
  if (spanCatalog.schemaVersion !== 1 || !Array.isArray(spanCatalog.spans)) throw new Error('Invalid span catalog');
  const spanIds = new Set<string>();
  for (const span of spanCatalog.spans) {
    if (!span || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(span.id) || spanIds.has(span.id) || typeof span.sourceId !== 'string' || typeof span.title !== 'string' || !/^[a-f0-9]{64}$/.test(span.sourceSha256) || !Number.isSafeInteger(span.startLine) || !Number.isSafeInteger(span.endLine)) throw new Error('Invalid span');
    spanIds.add(span.id);
  }
  const spanStatuses: CrawlResult['spans'] = [];
  const documents: KnowledgeDocument[] = structuredClone(baseline.documents);
  const statuses: CrawlResult['sources'] = [];
  const old = new Map(previous?.documents.flatMap(d => d.sections).map(s => [s.id, s]) ?? []);
  const revisions = new Map<string, string>();
  for (const source of config.sources) {
    const { id, title, artifact, fqn, license } = source;
    if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id)) throw new Error('Invalid crawl source ID');
    if (source.kind === 'monitor') {
      const body = await fetchText(source.url);
      if (!body.trim()) throw new Error(`Empty monitor response: ${id}`);
      statuses.push({ id, url: source.url, status: 'monitor-only', revision: `web:${id}:content@sha256:${hash(body)}`, sections: 0, note: 'Material 3 is an Angular shell; article body is not ingested.' });
      continue;
    }
    let normalized: string | undefined;
    let rev: string, parts: { anchor: string; title: string; text: string; startLine?: number; endLine?: number }[], resource: string;
    if (source.kind === 'html') {
      const html = await fetchText(source.url);
      const extracted = extractArticle(html);
      rev = `web:${id}:content@sha256:${hash(JSON.stringify(extracted))}`;
      parts = extracted.flatMap(part => chunks(part.text).map(text => ({ ...part, text })));
      resource = source.url;
    } else {
      if (!source.path || !source.repo || !source.ref || source.path.split('/').some(x => !x || x === '..' || x === '.')) throw new Error(`Invalid Git source: ${id}`);
      try {
      const gitiles = source.kind === 'gitiles';
      const headUrl = gitiles ? `${source.repo}/+/refs/heads/${source.ref}?format=JSON` : `https://api.github.com/repos/${source.repo}/commits/${source.ref}`;
      if (!revisions.has(headUrl)) revisions.set(headUrl, revisionFrom(await fetchText(headUrl), gitiles));
      rev = revisions.get(headUrl)!;
      resource = gitiles ? `${source.repo}/+/${rev}/${source.path}` : `https://github.com/${source.repo}/blob/${rev}/${source.path}`;
      const text = await fetchText(gitiles ? `${resource}?format=TEXT` : `https://raw.githubusercontent.com/${source.repo}/${rev}/${source.path}`);
      const decoded = gitiles ? Buffer.from(text.replace(/\s/g, ''), 'base64').toString('utf8') : text;
      if (!decoded.trim() || decoded.includes('\ufffd')) throw new Error(`Empty or invalid Git content: ${id}`);
      normalized = decoded.replace(/\r\n/g, '\n');
      const lines = normalized.split('\n');
      parts = [];
      let start = 0;
      while (start < lines.length) {
        let end = start; let size = 0;
        while (end < lines.length && end - start < 35 && (size + (lines[end]?.length ?? 0) <= 2200 || end === start)) { size += (lines[end]?.length ?? 0) + 1; end++; }
        const chunk = lines.slice(start, end).join('\n');
        if (chunk.trim()) parts.push({ anchor: `lines-${start + 1}`, title: `${title} (lines ${start + 1}–${end})`, text: chunk, startLine: start + 1, endLine: end });
        start = end;
      }
      } catch (error) {
        const spans = spanCatalog.spans.filter(span => span.sourceId === id).map(span => ({id:span.id,status:'needs-review' as const,reason:'Source acquisition failed'}));
        const failure = new Error(`Failed to acquire source ${id}: ${error instanceof Error ? error.message : String(error)}`, {cause:error});
        Object.assign(failure,{spans}); throw failure;
      }
    }
    const seen = new Map<string, number>();
    const sections = parts.map(part => {
      const key = safeId(part.anchor); const count = (seen.get(key) ?? 0) + 1; seen.set(key, count);
      const sectionId = `live-${id}-${key}${count === 1 ? '' : `-${count}`}`;
      const src = { id: `${sectionId}-source`, kind: (source.kind === 'html' ? 'guide' : 'code') as 'guide' | 'code', resource: source.kind === 'html' ? `${resource.split('#')[0]}#${encodeURIComponent(part.anchor)}` : resource, revision: rev, ...(source.kind === 'html' ? {} : { path: source.path!, startLine: part.startLine!, endLine: part.endLine! }), sha256: hash(part.text), license, excerpt: part.text };
      const symbolText = source.kind === 'html' ? part.text : part.text.split('\n').filter(line => !/^\s*(?:import|package)\s/.test(line)).join('\n');
      const aliases = [...new Set(source.symbols ?? [])].filter(symbol => {
        const name = symbol.split('.').at(-1)!.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp(`(?<![\\w$])${name}(?![\\w$])`).test(symbolText);
      });
      const section: KnowledgeSection = { id: sectionId, title: part.title, body: part.text, aliases, requires: [{ artifact, version: null }], sources: [src], relatedIds: [] };
      const prior = old.get(sectionId);
      return prior && comparable(prior) === comparable(section) ? prior : section;
    });
    for (const span of spanCatalog.spans.filter(item => item.sourceId === id)) {
      const lines = normalized?.split('\n');
      if (!normalized || hash(normalized) !== span.sourceSha256 || !lines || span.startLine < 1 || span.endLine < span.startLine || span.endLine > lines.length) {
        spanStatuses.push({id:span.id,status:'needs-review',reason:'Source changed or interval invalid'}); continue;
      }
      const body = lines.slice(span.startLine-1,span.endLine).join('\n');
      if (!body.trim()) { spanStatuses.push({id:span.id,status:'needs-review',reason:'Empty interval'}); continue; }
      const src = {id:`${span.id}-source`,kind:'code' as const,resource,revision:rev,path:source.path!,startLine:span.startLine,endLine:span.endLine,sha256:hash(body),license,excerpt:body};
      sections.push({id:span.id,title:span.title,body,aliases:[],requires:[{artifact,version:null}],sources:[src],relatedIds:[]});
      spanStatuses.push({id:span.id,status:'ingested'});
    }
    if (!sections.length) throw new Error(`No usable sections: ${id}`);
    documents.push({ id: `live-${id}`, artifact, fqn, title, description: `Public source: ${source.url}`, tags: ['Compose', 'Android'], sections });
    statuses.push({ id, url: source.url, status: 'ingested', revision: rev, sections: sections.length });
  }
  for (const span of spanCatalog.spans) if (!spanStatuses.some(s => s.id === span.id)) spanStatuses.push({id:span.id,status:'needs-review',reason:'Source missing or unsupported'});
  return { input: { schemaVersion: 1, documents }, sources: statuses, spans: spanStatuses };
}
