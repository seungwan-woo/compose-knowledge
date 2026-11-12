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
  const fqn = entry.fqn.toLowerCase();
  return target.includes('.') ? fqn === target : fqn.split('.').at(-1) === target;
}
function terms(value: string): string[] {
  return value.toLowerCase().match(/[\p{L}\p{N}_]+/gu) ?? [];
}
function relevance(entry: IndexEntry, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 1;
  const fields: [string, number][] = [[entry.title, 8], [entry.fqn, 8], [entry.docTitle, 5], [entry.aliases.join(' '), 6], [entry.tags.join(' '), 4], [entry.description, 2], [entry.body, 1]];
  let score = 0;
  for (const [value, weight] of fields) {
    const v = value.toLowerCase();
    if (v.includes(q)) score += weight * 3;
    for (const term of terms(q)) if (v.includes(term)) score += weight;
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
    const score = relevance(entry, query.query ?? '');
    if (!score) return [];
    return [{entry, score, versionStatus}];
  }).sort((a, b) => {
    const rank = {match: 0, unknown: 1, different: 2};
    return rank[a.versionStatus] - rank[b.versionStatus] || b.score - a.score || (a.entry.id < b.entry.id ? -1 : a.entry.id > b.entry.id ? 1 : 0);
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
