import { describe, expect, it } from 'vitest';
import { getVersionStatus, normalizeArtifact } from '../src/domain/version.js';
import { searchIndex, readSection } from '../src/retrieval/search.js';
import { serializeBounded } from '../src/retrieval/budget.js';
import type { IndexEntry, SearchIndex } from '../src/domain/types.js';

const entry = (id: string, fqn = 'a.Popup'): IndexEntry => ({ id, fqn, docId: id, docPath: `${id}.md`, artifact: 'g:ui', docTitle: fqn, title: id, description: '', tags: [], body: 'outside touch 팝업 바깥', aliases: ['외부 터치', 'outside touch'], requires: [{ artifact: 'g:ui', version: '1' }], sources: [{ id: 's', kind: 'code', resource: 'r', revision: 'rev', sha256: 'hash', license: 'Apache-2.0', excerpt: 'x' }], relatedIds: [] });
const index: SearchIndex = { schemaVersion: 1, entries: [entry('b', 'a.PopupProperties'), entry('a')] };

describe('versions', () => {
  it('normalizes Android aliases only when Android is explicit', () => {
    expect(normalizeArtifact('g:ui-android')).toBe('g:ui');
    expect(normalizeArtifact('g:ui-desktop', 'android')).toBe('g:ui-desktop');
    expect(getVersionStatus([{artifact:'g:ui-android', version:'1'}], {artifact:'g:ui', version:'1'})).toBe('match');
    expect(getVersionStatus([{artifact:'g:ui', version:'1', platform:'android'}], {artifact:'g:ui', version:'1'})).toBe('unknown');
  });
  it('requires every version and gives mismatch precedence', () => {
    const requires = [{artifact:'g:ui', version:'1'}, {artifact:'g:other', version:'2'}];
    expect(getVersionStatus(requires, {artifact:'g:ui', version:'1'})).toBe('unknown');
    expect(getVersionStatus(requires, {artifact:'g:ui', version:'0'})).toBe('different');
    expect(getVersionStatus(requires, {versions:[{artifact:'g:ui',version:'1'}, {artifact:'g:other',version:'2'}]})).toBe('match');
    expect(getVersionStatus([{artifact:'g:ui',version:null}], {artifact:'g:ui',version:'1'})).toBe('unknown');
    expect(() => getVersionStatus(requires, {artifact:'g:ui', version:'1', versions:[{artifact:'g:ui',version:'2'}]})).toThrow();
  });
});
describe('retrieval', () => {
  it('matches exact short and qualified symbols without sibling substrings', () => {
    expect(searchIndex(index, {symbol:'Popup'}, 'sha').hits.map(h => h.id)).toEqual(['a']);
    expect(searchIndex(index, {symbol:'a.Popup'}, 'sha').hits.map(h => h.id)).toEqual(['a']);
    expect(searchIndex(index, {symbol:'Missing'}, 'sha').hits).toEqual([]);
  });
  it('supports aliases, hard artifact filtering and comparison mode', () => {
    expect(searchIndex(index, {query:'외부 터치'}, 'sha').hits.map(h => h.id)).toEqual(['a', 'b']);
    expect(searchIndex(index, {artifact:'g:other'}, 'sha').hits).toEqual([]);
    expect(searchIndex(index, {artifact:'g:ui',version:'0'}, 'sha').hits).toEqual([]);
    expect(searchIndex(index, {artifact:'g:ui',version:'0',includeDifferent:true}, 'sha').hits[0].versionStatus).toBe('different');
    expect(readSection(index, 'a', {}, 'sha').sources[0]).not.toHaveProperty('excerpt');
    expect(() => readSection(index, 'missing', {}, 'sha')).toThrow();
  });
  it('bounds valid UTF-8 JSON including metadata and newline', () => {
    const large = {...readSection(index, 'a', {}, 'sha'), body:'한😀'.repeat(4000)};
    const output = serializeBounded(large, 3072);
    expect(Buffer.byteLength(output)).toBeLessThanOrEqual(3072);
    expect(output.endsWith('\n')).toBe(true);
    expect(JSON.parse(output).truncated).toBe(true);
    expect(() => serializeBounded(large, 10)).toThrow();
    const search = searchIndex(index, {}, 'sha');
    search.hits[0].snippet = '한😀'.repeat(4000);
    expect(Buffer.byteLength(serializeBounded(search, 3072))).toBeLessThanOrEqual(3072);
  });
});
