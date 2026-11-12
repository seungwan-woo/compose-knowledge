import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyCuratedGuidance, parseGuidanceConfig } from '../src/knowledge/curate.js';
import { toKnowledgeInputs } from '../src/adapters/crawler.js';
import type { KnowledgeInput } from '../src/domain/types.js';

const input = JSON.parse(readFileSync('tests/fixtures/knowledge-input.json', 'utf8')) as KnowledgeInput;
const evidence = input.documents[0]!.sections[0]!;
const config = () => ({schemaVersion:1, cards:[{
  id:'guide-dismissal', title:'Dismissal is a request', artifact:'androidx.compose.material3:material3',
  fqn:'androidx.compose.material3.DropdownMenu', body:'Guidance: The caller owns expanded state; a dismissal callback requests closure.',
  aliases:['androidx.compose.material3.DropdownMenu', '닫기 요청'],
  evidence:[{id:evidence.id, sha256:createHash('sha256').update(evidence.body).digest('hex')}],
}]});

describe('curated guidance', () => {
  it('binds concise guidance to exact raw bodies and copies their source provenance', () => {
    const before = JSON.stringify(input);
    const result = applyCuratedGuidance(input, config());
    const doc = result.input.documents.at(-1)!;
    expect(doc.tags).toContain('curated-guidance');
    expect(doc.sections[0]!.relatedIds).toEqual([evidence.id]);
    expect(doc.sections[0]!.sources).toEqual(evidence.sources);
    expect(doc.sections[0]!.requires).toEqual([{artifact:'androidx.compose.material3:material3', version:null}]);
    expect(result.statuses).toEqual([{id:'guide-dismissal', status:'included'}]);
    expect(() => toKnowledgeInputs(result.input)).not.toThrow();
    expect(JSON.stringify(input)).toBe(before);
  });
  it('omits guidance with changed or missing evidence, leaving raw knowledge available', () => {
    const changed = structuredClone(input);
    changed.documents[0]!.sections[0]!.body += '\nChanged upstream contract.';
    expect(applyCuratedGuidance(changed, config()).statuses).toEqual([{id:'guide-dismissal', status:'needs-review', reason:`changed evidence: ${evidence.id}`}]);
    const missing = config(); missing.cards[0]!.evidence[0]!.id = 'missing';
    const result = applyCuratedGuidance(input, missing);
    expect(result.statuses[0]!.reason).toBe('missing evidence: missing');
    expect(result.input).toEqual(input);
  });
  it('rejects malformed, excessive or colliding cards instead of silently accepting them', () => {
    const invalid = config(); invalid.cards[0]!.evidence[0]!.sha256 = 'not-a-hash';
    expect(() => parseGuidanceConfig(invalid)).toThrow();
    const large = config(); large.cards[0]!.body = '한'.repeat(500);
    expect(() => parseGuidanceConfig(large)).toThrow('1000');
    const duplicate = config(); duplicate.cards.push(duplicate.cards[0]!);
    expect(() => parseGuidanceConfig(duplicate)).toThrow('Duplicate');
    const collision = config(); collision.cards[0]!.id = evidence.id;
    expect(() => applyCuratedGuidance(input, collision)).toThrow('collision');
    expect(() => parseGuidanceConfig({...config(), executable:'no'})).toThrow();
  });
  it('does not accept a curated card as evidence for another card', () => {
    const first = applyCuratedGuidance(input, config());
    const next = config(); next.cards[0]!.id = 'guide-indirect';
    const derived = first.input.documents.at(-1)!.sections[0]!;
    next.cards[0]!.evidence = [{id:derived.id, sha256:createHash('sha256').update(derived.body).digest('hex')}];
    expect(applyCuratedGuidance(first.input, next).statuses[0]!.status).toBe('needs-review');
  });
});
