import type { IndexEntry, ReadResponse, SearchIndex, SearchQuery, SearchResponse } from '../domain/types.js';
import { getVersionStatus, normalizeArtifact } from '../domain/version.js';

function artifactMatches(entry: IndexEntry, query: SearchQuery): boolean {
  if (!query.artifact) return true;
  if (entry.artifact === query.artifact) return true;
  return normalizeArtifact(entry.artifact) === normalizeArtifact(query.artifact) &&
    (entry.artifact.endsWith('-android') || query.artifact.endsWith('-android') || query.platform === 'android');
}
function symbolMatches(entry: IndexEntry, symbol: string): boolean {
  const target = symbol.toLowerCase();
  const symbols = [entry.fqn, ...entry.aliases.filter(alias => /^[\p{L}_$][\p{L}\p{N}_$]*(?:\.[\p{L}_$][\p{L}\p{N}_$]*)+$/u.test(alias))];
  return symbols.some(symbol => {
    const fqn = symbol.toLowerCase();
    return target.includes('.') ? fqn === target : fqn.split('.').at(-1) === target;
  });
}
function terms(value: string): string[] {
  return value.toLowerCase().match(/[\p{L}\p{N}_]+/gu) ?? [];
}
function relevance(entry: IndexEntry, query: SearchQuery): number {
  const queryTerms = [...new Set(terms(query.query ?? ''))];
  const symbol = query.symbol?.split('.').at(-1);
  if (!queryTerms.length && !symbol) return query.query?.trim() ? 0 : 1;

  const title = new Set(terms(entry.title));
  const aliases = new Set(terms(entry.aliases.join(' ')));
  const body = new Set(terms(entry.body));
  const metadata = new Set(terms([entry.fqn, entry.docTitle, entry.description, ...entry.tags].join(' ')));
  let score = 0;
  for (const term of queryTerms) {
    // Metadata describes every chunk of a document; count it only once per term.
    score += Math.max(title.has(term) ? 8 : 0, aliases.has(term) ? 6 : 0, metadata.has(term) ? 3 : 0);
    if (body.has(term)) score += 12;
  }
  if (queryTerms.length && !score) return 0;
  if (!queryTerms.length) score = 1; // A symbol has already passed the exact symbol filter.

  const focus = symbol ?? (queryTerms.length === 1 ? queryTerms[0] : undefined);
  if (focus) {
    const escaped = focus.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const identifierEnd = '(?![\\p{L}\\p{N}_$])';
    const declaration = new RegExp(`\\b(?:fun\\s+(?:<[^>]*>\\s*)?(?:[\\p{L}\\p{N}_$.]+\\.)?|(?:class|interface|object|val|var|typealias)\\s+)${escaped}${identifierEnd}`, 'iu');
    const headingTerm = new RegExp(`(?<![\\p{L}\\p{N}_$])${escaped}${identifierEnd}`, 'iu');
    if (entry.body.split('\n').some(line => declaration.test(line))) score += 40;
    if (entry.body.split('\n').some(line => /^\s{0,3}#{1,6}\s/.test(line) && headingTerm.test(line))) score += 25;
  }
  if (entry.tags.includes('curated-guidance')) {
    if (!symbol && queryTerms.every(term => title.has(term) || aliases.has(term) || body.has(term))) score += 30;
  }
  return score;
}
export function searchIndex(index: SearchIndex, query: SearchQuery, snapshot: string): SearchResponse {
  // Validate duplicate version requests even when the index has no candidates.
  getVersionStatus([], query);
  const scored = index.entries.flatMap(entry => {
    if (!artifactMatches(entry, query) || (query.symbol && !symbolMatches(entry, query.symbol))) return [];
    const versionStatus = getVersionStatus(entry.requires, query);
    if (versionStatus === 'different' && !query.includeDifferent) return [];
    const score = relevance(entry, query);
    if (!score) return [];
    const curatedSymbol = Boolean(query.symbol && entry.tags.includes('curated-guidance'));
    return [{entry, score, versionStatus, curatedSymbol}];
  }).sort((a, b) => {
    const rank = {match: 0, unknown: 1, different: 2};
    return rank[a.versionStatus] - rank[b.versionStatus] || Number(b.curatedSymbol) - Number(a.curatedSymbol) || b.score - a.score || (a.entry.id < b.entry.id ? -1 : a.entry.id > b.entry.id ? 1 : 0);
  });
  const limit = query.limit === undefined ? 3 : Math.max(0, Math.floor(query.limit));
  return { snapshot, hits: scored.slice(0, limit).map(({entry, versionStatus}) => ({id: entry.id, docId: entry.docId, title: entry.title, artifact: entry.artifact, fqn: entry.fqn, snippet: entry.body, versionStatus, sources: entry.sources.map(({id, resource}) => ({id, resource})), relatedIds: entry.relatedIds})), truncated: scored.length > limit };
}
export function readSection(index: SearchIndex, id: string, query: SearchQuery, snapshot: string): ReadResponse {
  const entry = index.entries.find(item => item.id === id);
  if (!entry) throw new Error(`Section not found: ${id}`);
  const versionStatus = getVersionStatus(entry.requires, query);
  if (versionStatus === 'different' && !query.includeDifferent) throw new Error('Different version evidence requires includeDifferent');
  return {snapshot, id: entry.id, title: entry.title, body: entry.body, sources: entry.sources.map(({excerpt: _excerpt, ...source}) => source), requires: entry.requires, relatedIds: entry.relatedIds, versionStatus, truncated: false};
}
