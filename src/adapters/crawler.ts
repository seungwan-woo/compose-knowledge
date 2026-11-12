import { createHash } from 'node:crypto';
import type { KnowledgeInput } from '../domain/types.js';

const object = (v: unknown, keys: string[], optional: string[] = []): Record<string, unknown> => {
  if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error('Expected object');
  const o = v as Record<string, unknown>;
  if (keys.some(k => !(k in o)) || Object.keys(o).some(k => !keys.includes(k) && !optional.includes(k))) throw new Error('Invalid object fields');
  return o;
};
const str = (v: unknown): string => { if (typeof v !== 'string' || !v.trim()) throw new Error('Expected nonempty string'); return v; };
const list = (v: unknown): unknown[] => { if (!Array.isArray(v)) throw new Error('Expected array'); return v; };
const strings = (v: unknown) => list(v).forEach(str);
const id = (v: unknown) => { if (!/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(str(v)) || v === '.' || v === '..') throw new Error('Unsafe ID'); return v as string; };

/** Validate the canonical v1 data format; this is not an adapter for an unknown legacy crawler. */
export function toKnowledgeInputs(value: unknown): KnowledgeInput {
  const root = object(value, ['schemaVersion', 'documents']);
  if (root.schemaVersion !== 1) throw new Error('Unsupported schema version');
  const docs = list(root.documents); if (!docs.length) throw new Error('No documents');
  const docIds = new Set<string>(), sectionIds = new Set<string>(), links: string[] = [];
  const sourceIds = new Map<string, string>();
  for (const raw of docs) {
    const d = object(raw, ['id', 'artifact', 'fqn', 'title', 'description', 'tags', 'sections']);
    const docId = id(d.id); if (docIds.has(docId)) throw new Error('Duplicate document ID'); docIds.add(docId);
    for (const k of ['artifact', 'fqn', 'title', 'description']) str(d[k]); strings(d.tags);
    const sections = list(d.sections); if (!sections.length) throw new Error('Document has no sections');
    for (const rawSection of sections) {
      const s = object(rawSection, ['id', 'title', 'body', 'aliases', 'requires', 'sources', 'relatedIds']);
      const sectionId = id(s.id); if (sectionIds.has(sectionId)) throw new Error('Duplicate section ID'); sectionIds.add(sectionId);
      str(s.title); str(s.body); strings(s.aliases); strings(s.relatedIds); links.push(...s.relatedIds as string[]);
      const artifacts = new Set<string>();
      for (const rawReq of list(s.requires)) {
        const req = object(rawReq, ['artifact', 'version'], ['platform']); const artifact = str(req.artifact);
        // Only these known platform variants share an identity.
        const logical = ['androidx.compose.ui:ui-android', 'androidx.compose.material3:material3-android'].includes(artifact) ? artifact.slice(0, -8) : artifact;
        if (artifacts.has(logical)) throw new Error('Duplicate artifact requirement'); artifacts.add(logical);
        if (req.version !== null) str(req.version);
        if (req.platform !== undefined && req.platform !== 'android') throw new Error('Invalid platform');
      }
      const sources = list(s.sources); if (!sources.length) throw new Error('Missing sources');
      for (const rawSource of sources) {
        const source = object(rawSource, ['id', 'kind', 'resource', 'revision', 'sha256', 'license', 'excerpt'], ['path', 'startLine', 'endLine']);
        const sourceId = id(source.id); if (!['code', 'test', 'guide'].includes(source.kind as string)) throw new Error('Invalid source kind');
        for (const k of ['resource', 'revision', 'license', 'excerpt']) str(source[k]);
        let url: URL; try { url = new URL(source.resource as string); } catch { throw new Error('Invalid source URL'); }
        if (!['http:', 'https:'].includes(url.protocol) || !url.hostname || url.username || url.password) throw new Error('Invalid source URL');
        if (source.kind === 'guide' && (!url.hash || url.hash === '#')) throw new Error('Guide requires an anchor');
        if (!/^(?:[a-f0-9]{40}|[A-Za-z0-9_.-]+:[A-Za-z0-9_.-]+:[A-Za-z0-9_.+-]+@sha256:[a-f0-9]{64})$/.test(source.revision as string)) throw new Error('Invalid immutable revision');
        if (source.kind !== 'guide' && (source.path === undefined || source.startLine === undefined || source.endLine === undefined)) throw new Error('Code and test sources require a path and line range');
        const identity = JSON.stringify(Object.fromEntries(Object.entries(source).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)));
        if (sourceIds.has(sourceId) && sourceIds.get(sourceId) !== identity) throw new Error('Conflicting source ID');
        sourceIds.set(sourceId, identity);
        if (!/^[a-f0-9]{64}$/.test(str(source.sha256)) || createHash('sha256').update(source.excerpt as string).digest('hex') !== source.sha256) throw new Error('Invalid source digest');
        if (source.path !== undefined && (str(source.path).startsWith('/') || (source.path as string).split(/[\\/]/).some(part => part === '..' || part === '.'))) throw new Error('Invalid source path');
        if ((source.startLine === undefined) !== (source.endLine === undefined)) throw new Error('Incomplete line range');
        if (source.startLine !== undefined && (!Number.isSafeInteger(source.startLine) || !Number.isSafeInteger(source.endLine) || (source.startLine as number) < 1 || (source.endLine as number) < (source.startLine as number))) throw new Error('Invalid line range');
      }
    }
  }
  if (links.some(link => !sectionIds.has(link))) throw new Error('Dangling related ID');
  return structuredClone(value) as KnowledgeInput;
}
