import { createHash } from 'node:crypto';
import type { KnowledgeDocument, KnowledgeInput } from '../domain/types.js';
import { normalizeArtifact } from '../domain/version.js';

interface Card {
  id: string;
  title: string;
  artifact: string;
  fqn: string;
  body: string;
  aliases: string[];
  evidence: { id: string; sha256: string }[];
}
interface GuidanceConfig { schemaVersion: 1; cards: Card[]; }
export interface GuidanceStatus { id: string; status: 'included' | 'needs-review'; reason?: string; }

const object = (value: unknown, keys: string[]): Record<string, unknown> => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid guidance object');
  const obj = value as Record<string, unknown>;
  if (Object.keys(obj).sort().join('\0') !== [...keys].sort().join('\0')) throw new Error('Invalid guidance fields');
  return obj;
};
const text = (value: unknown): string => {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Empty guidance text');
  return value;
};
const identifier = (value: unknown): string => {
  const id = text(value);
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id)) throw new Error('Invalid guidance ID');
  return id;
};

/** Validate authored data only. This function does not run an LLM or treat text as instructions. */
export function parseGuidanceConfig(value: unknown): GuidanceConfig {
  const root = object(value, ['schemaVersion', 'cards']);
  if (root.schemaVersion !== 1 || !Array.isArray(root.cards)) throw new Error('Invalid guidance config');
  const seen = new Set<string>();
  const cards = root.cards.map(raw => {
    const card = object(raw, ['id', 'title', 'artifact', 'fqn', 'body', 'aliases', 'evidence']);
    const id = identifier(card.id);
    if (seen.has(id)) throw new Error('Duplicate guidance ID');
    seen.add(id);
    const body = text(card.body);
    if (Buffer.byteLength(body) > 1000) throw new Error('Guidance body exceeds 1000 UTF-8 bytes');
    if (!Array.isArray(card.aliases) || !Array.isArray(card.evidence) || card.evidence.length < 1 || card.evidence.length > 2) throw new Error('Guidance needs one or two evidence sections');
    const evidenceIds = new Set<string>();
    const evidence = card.evidence.map(rawEvidence => {
      const source = object(rawEvidence, ['id', 'sha256']);
      const sourceId = identifier(source.id), sha256 = text(source.sha256);
      if (!/^[a-f0-9]{64}$/.test(sha256) || evidenceIds.has(sourceId)) throw new Error('Invalid guidance evidence');
      evidenceIds.add(sourceId);
      return {id: sourceId, sha256};
    });
    return {id, title:text(card.title), artifact:text(card.artifact), fqn:text(card.fqn), body, aliases:card.aliases.map(text), evidence};
  });
  return {schemaVersion:1, cards};
}

/** Changed evidence suppresses the summary until its claims are reviewed again. */
export function applyCuratedGuidance(input: KnowledgeInput, value: unknown): {input: KnowledgeInput; statuses: GuidanceStatus[]} {
  const config = parseGuidanceConfig(value);
  const raw = new Map(input.documents.filter(doc => !doc.tags.includes('curated-guidance')).flatMap(doc => doc.sections.map(section => [section.id, section] as const)));
  const existing = new Set(input.documents.flatMap(doc => [doc.id, ...doc.sections.map(section => section.id)]));
  const documents: KnowledgeDocument[] = [...input.documents];
  const statuses: GuidanceStatus[] = [];
  for (const card of config.cards) {
    if (existing.has(card.id)) throw new Error(`Guidance ID collision: ${card.id}`);
    let reason: string | undefined;
    for (const evidence of card.evidence) {
      const section = raw.get(evidence.id);
      if (!section) { reason = `missing evidence: ${evidence.id}`; break; }
      if (createHash('sha256').update(section.body).digest('hex') !== evidence.sha256) { reason = `changed evidence: ${evidence.id}`; break; }
    }
    if (reason) { statuses.push({id:card.id, status:'needs-review', reason}); continue; }
    const evidence = card.evidence.map(source => raw.get(source.id)!);
    const sources = [...new Map(evidence.flatMap(section => section.sources).map(source => [source.id, source])).values()];
    // Curation does not establish released-version applicability, even for mixed-version sources.
    const artifacts = [...new Set([card.artifact, ...evidence.flatMap(section => section.requires.map(req => req.artifact))].map(artifact => normalizeArtifact(artifact)))];
    documents.push({
      id:card.id, artifact:card.artifact, fqn:card.fqn, title:`Guidance: ${card.title}`,
      description:'AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.',
      tags:['Compose', 'Android', 'curated-guidance'],
      sections:[{id:card.id, title:`Guidance: ${card.title}`, body:card.body, aliases:[...card.aliases],
        requires:artifacts.map(artifact => ({artifact, version:null})), sources:structuredClone(sources), relatedIds:card.evidence.map(source => source.id)}],
    });
    statuses.push({id:card.id, status:'included'});
  }
  return {input:{schemaVersion:1, documents}, statuses};
}
