import { stringify } from 'yaml';
import type { KnowledgeDocument, Source } from '../domain/types.js';

/** Render v0.2 metadata and a human-readable body; source IDs join sections to full provenance. */
export function renderOkf(doc: KnowledgeDocument): string {
  const byId = new Map<string, Source>();
  for (const section of doc.sections) for (const source of section.sources) byId.set(source.id, source);
  const sources = [...byId.values()].sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  const metadata = {
    type: 'reference', title: doc.title, description: doc.description, tags: doc.tags,
    sources,
    compose: {
      id: doc.id, artifact: doc.artifact, fqn: doc.fqn,
      sections: doc.sections.map(s => ({ id: s.id, title: s.title, aliases: s.aliases, requires: s.requires, sourceIds: s.sources.map(source => source.id), relatedIds: s.relatedIds }))
    }
  };
  const sections = doc.sections.map(s => `## ${s.title}\n\n${s.body}\n\nSources: ${s.sources.map(source => `[${source.id}](${source.resource})`).join(', ')}\n`).join('\n');
  return `---\n${stringify(metadata, { lineWidth: 0 })}---\n\n# ${doc.title}\n\n${doc.description}\n\n${sections}`;
}
