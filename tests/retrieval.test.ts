import { describe, expect, it } from 'vitest';
import { getVersionStatus, normalizeArtifact } from '../src/domain/version.js';
import { searchIndex, readSection } from '../src/retrieval/search.js';
import { serializeBounded } from '../src/retrieval/budget.js';
import type { IndexEntry, SearchIndex } from '../src/domain/types.js';

const entry = (id: string, fqn = 'a.Popup'): IndexEntry => ({ id, fqn, docId: id, docPath: `${id}.md`, artifact: 'g:ui', docTitle: fqn, title: id, description: '', tags: [], body: 'outside touch 팝업 바깥', aliases: ['외부 터치', 'outside touch'], requires: [{ artifact: 'g:ui', version: '1' }], sources: [{ id: 's', kind: 'code', resource: 'r', revision: 'rev', sha256: 'hash', license: 'Apache-2.0', excerpt: 'x' }], relatedIds: [] });
const index: SearchIndex = { schemaVersion: 1, entries: [entry('b', 'a.PopupProperties'), entry('a')] };

describe('versions', () => {
  it('normalizes Android aliases only when Android is explicit', () => {
    expect(normalizeArtifact('androidx.compose.ui:ui-android')).toBe('androidx.compose.ui:ui');
    expect(normalizeArtifact('g:foo-android')).toBe('g:foo-android');
    expect(normalizeArtifact('g:ui-desktop', 'android')).toBe('g:ui-desktop');
    expect(getVersionStatus([{artifact:'androidx.compose.ui:ui-android', version:'1'}], {artifact:'androidx.compose.ui:ui', version:'1'})).toBe('match');
    expect(getVersionStatus([{artifact:'g:ui', version:'1', platform:'android'}], {artifact:'g:ui', version:'1'})).toBe('unknown');
  });
  it('matches versions for each known Compose Android variant without conflating unrelated artifacts', () => {
    const artifacts = ['runtime:runtime', 'runtime:runtime-saveable', 'foundation:foundation', 'foundation:foundation-layout', 'animation:animation', 'animation:animation-core', 'animation:animation-graphics', 'ui:ui', 'ui:ui-text', 'ui:ui-graphics', 'ui:ui-unit', 'ui:ui-util', 'ui:ui-geometry', 'ui:ui-tooling-preview', 'ui:ui-test', 'ui:ui-test-junit4-accessibility', 'material:material', 'material:material-icons-core', 'material:material-icons-extended', 'material:material-ripple', 'material3:material3', 'material3.adaptive:adaptive', 'material3.adaptive:adaptive-navigation'];
    for (const suffix of artifacts) {
      const artifact = `androidx.compose.${suffix}`;
      expect(normalizeArtifact(`${artifact}-android`)).toBe(artifact);
      expect(getVersionStatus([{artifact: `${artifact}-android`, version:'1'}], {artifact, version:'1'})).toBe('match');
      const candidate = {...entry('variant'), artifact, requires:[{artifact, version:'1'}]};
      expect(searchIndex({schemaVersion:1, entries:[candidate]}, {artifact:`${artifact}-android`, version:'1'}, 'sha').hits.map(h => h.id)).toEqual(['variant']);
      expect(() => getVersionStatus([], {versions:[{artifact,version:'1'}, {artifact:`${artifact}-android`,version:'2'}]})).toThrow();
    }
    expect(normalizeArtifact('other:widget-android')).toBe('other:widget-android');
    expect(getVersionStatus([{artifact:'other:widget-android',version:'1'}], {artifact:'other:widget',version:'1'})).toBe('unknown');
  });
  it('requires every version and gives mismatch precedence', () => {
    const requires = [{artifact:'g:ui', version:'1'}, {artifact:'g:other', version:'2'}];
    expect(getVersionStatus([], {})).toBe('unknown');
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
  it('matches exact qualified API aliases and their short names within the requested artifact', () => {
    const api = {...entry('api', 'androidx.compose.foundation'), artifact:'foundation', aliases:['androidx.compose.foundation.lazy.LazyColumn', 'outside touch']};
    const sibling = {...entry('sibling', 'androidx.compose.foundation'), artifact:'foundation', aliases:['androidx.compose.foundation.lazy.LazyColumnState']};
    const other = {...api, id:'other', artifact:'other'};
    const scoped: SearchIndex = {schemaVersion:1, entries:[api,sibling,other]};
    expect(searchIndex(scoped, {artifact:'foundation',symbol:'androidx.compose.foundation.lazy.LazyColumn'}, 'sha').hits.map(h => h.id)).toEqual(['api']);
    expect(searchIndex(scoped, {artifact:'foundation',symbol:'LazyColumn'}, 'sha').hits.map(h => h.id)).toEqual(['api']);
    expect(searchIndex(scoped, {artifact:'foundation',symbol:'wrong.package.LazyColumn'}, 'sha').hits).toEqual([]);
    expect(searchIndex(scoped, {artifact:'foundation',symbol:'outside touch'}, 'sha').hits).toEqual([]);
  });
  it('supports aliases, hard artifact filtering and comparison mode', () => {
    expect(searchIndex(index, {query:'외부 터치'}, 'sha').hits.map(h => h.id)).toEqual(['a', 'b']);
    expect(searchIndex(index, {artifact:'g:other'}, 'sha').hits).toEqual([]);
    expect(searchIndex(index, {artifact:'g:ui',version:'0'}, 'sha').hits).toEqual([]);
    expect(searchIndex(index, {artifact:'g:ui',version:'0',includeDifferent:true}, 'sha').hits[0].versionStatus).toBe('different');
    expect(readSection(index, 'a', {}, 'sha').sources[0]).not.toHaveProperty('excerpt');
    expect(() => readSection(index, 'missing', {}, 'sha')).toThrow();
  });
  it('gates different direct reads while allowing unknown and linked matches', () => {
    const mismatch = {artifact:'g:ui', version:'0'};
    expect(() => readSection(index, 'a', mismatch, 'sha')).toThrow('Different version evidence requires includeDifferent');
    expect(readSection(index, 'a', {...mismatch, includeDifferent:true}, 'sha').versionStatus).toBe('different');
    expect(readSection(index, 'a', {}, 'sha').versionStatus).toBe('unknown');
    expect(readSection(index, 'a', {artifact:'g:other', version:'2', versions:[{artifact:'g:ui',version:'1'}]}, 'sha').versionStatus).toBe('match');
  });
  it('ranks known matches above unknown evidence even with a weaker lexical score', () => {
    const known = {...entry('known'), body:'touch', aliases: []};
    const unknown = {...entry('unknown'), body:'touch touch touch', aliases:['touch'], requires:[{artifact:'g:ui',version:null}]};
    expect(searchIndex({schemaVersion:1,entries:[unknown,known]}, {query:'touch', artifact:'g:ui',version:'1'}, 'sha').hits.map(h => h.id)).toEqual(['known','unknown']);
  });
  it('prefers a local API declaration over imports and other declarations for a symbol', () => {
    const shared = {...entry('shared', 'androidx.compose.runtime'), aliases:['androidx.compose.runtime.LaunchedEffect'], title:'Effects', docTitle:'Effects', tags:['Compose', 'Android']};
    const mention = {...shared, id:'a-mention', body:'import androidx.compose.runtime.LaunchedEffect\nfun SideEffect() {}'};
    const declaration = {...shared, id:'z-declaration', body:'/** Runs an effect. */\npublic fun LaunchedEffect(key: Any) {}'};
    expect(searchIndex({schemaVersion:1,entries:[mention,declaration]}, {symbol:'LaunchedEffect'}, 'sha').hits.map(h => h.id)).toEqual(['z-declaration','a-mention']);
  });
  it('prefers a contract heading over a license chunk for a symbol', () => {
    const shared = {...entry('shared', 'androidx.compose.foundation'), aliases:['androidx.compose.foundation.lazy.LazyColumn'], title:'Lazy lists', docTitle:'Lazy lists'};
    const license = {...shared, id:'a-license', body:'Copyright and license for LazyColumn.'};
    const contract = {...shared, id:'z-contract', body:'## LazyColumn\nDisplays a scrolling list.'};
    expect(searchIndex({schemaVersion:1,entries:[license,contract]}, {symbol:'LazyColumn'}, 'sha').hits.map(h => h.id)).toEqual(['z-contract','a-license']);
  });
  it('uses whole case-insensitive terms and prefers specific body evidence to repeated metadata', () => {
    const metadata = {...entry('a-metadata', 'a.Something'), title:'Compose', docTitle:'Compose', description:'Compose', tags:['Compose','Compose'], aliases:['Compose'], body:'Other material.'};
    const body = {...entry('z-body', 'a.Other'), title:'Guide', docTitle:'Guide', description:'', tags:[], aliases:[], body:'Compose supports custom layouts.'};
    const partial = {...body, id:'partial', body:'Decompose a shape.', title:'Guide'};
    expect(searchIndex({schemaVersion:1,entries:[metadata,body,partial]}, {query:'COMPOSE'}, 'sha').hits.map(h => h.id)).toEqual(['z-body','a-metadata']);
  });
  it('prioritizes relevant curated guidance without inventing relevance or overriding versions', () => {
    const common = {...entry('common'), title:'Guide', docTitle:'Guide', fqn:'a.Guide', aliases:[], tags:[], description:''};
    const source = {...common, id:'a-source', body:'State saves data.', requires:[{artifact:'g:ui',version:'1'}]};
    const curated = {...common, id:'z-curated', body:'State saves data.', tags:['Compose','Android','curated-guidance'], requires:[{artifact:'g:ui',version:null}]};
    const unrelated = {...common, id:'unrelated', body:'Animation controls motion.', tags:['Compose','Android','curated-guidance'], requires:[{artifact:'g:ui',version:null}]};
    const candidates: SearchIndex = {schemaVersion:1,entries:[source,curated,unrelated]};
    expect(searchIndex(candidates, {query:'state'}, 'sha').hits.map(h => h.id)).toEqual(['z-curated','a-source']);
    expect(searchIndex(candidates, {query:'state', artifact:'g:ui',version:'1'}, 'sha').hits.map(h => h.id)).toEqual(['a-source','z-curated']);
    expect(searchIndex(candidates, {query:'unfindable'}, 'sha').hits).toEqual([]);
  });
  it('puts an exact-symbol guidance card before its source declaration after version ordering', () => {
    const base = {...entry('base', 'a.Widget'), aliases:['a.Widget'], title:'Guide', docTitle:'Guide', description:''};
    const source = {...base, id:'a-source', body:'public fun Widget() {}'};
    const card = {...base, id:'z-card', body:'Use Widget for a surface.', tags:['curated-guidance']};
    const candidates: SearchIndex = {schemaVersion:1,entries:[source,card]};
    expect(searchIndex(candidates, {symbol:'Widget'}, 'sha').hits.map(h => h.id)).toEqual(['z-card','a-source']);
    card.requires = [{artifact:'g:ui',version:null}];
    expect(searchIndex(candidates, {symbol:'Widget',artifact:'g:ui',version:'1'}, 'sha').hits.map(h => h.id)).toEqual(['a-source','z-card']);
  });
  it('does not boost a guidance card for a partial keyword match above a complete source match', () => {
    const base = {...entry('base', 'a.Guide'), aliases:[], title:'Guide', docTitle:'Guide', description:'', tags:[]};
    const source = {...base, id:'source', body:'State restoration preserves values.'};
    const card = {...base, id:'card', body:'State drives animation.', tags:['curated-guidance']};
    expect(searchIndex({schemaVersion:1,entries:[card,source]}, {query:'state restoration'}, 'sha').hits.map(h => h.id)).toEqual(['source','card']);
  });
  it('keeps each search snippet useful within a shared cap', () => {
    const response = searchIndex({schemaVersion:1, entries:['a','b','c'].map(id => ({...entry(id),body:'한😀'.repeat(3000)}))}, {}, 'sha');
    const parsed = JSON.parse(serializeBounded(response, 3072));
    expect(parsed.hits).toHaveLength(3);
    expect(parsed.hits.every((hit: {snippet:string}) => hit.snippet.length > 0)).toBe(true);
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
