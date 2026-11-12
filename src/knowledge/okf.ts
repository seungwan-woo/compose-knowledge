import type { KnowledgeDocument } from '../domain/types.js';

/** Markdown with a lossless canonical JSON block for provenance and machine validation. */
export function renderOkf(doc: KnowledgeDocument): string {
  const sections = doc.sections.map(s => `## ${s.title}\n\n${s.body}\n`).join('\n');
  return `# ${doc.title}\n\n${doc.description}\n\n${sections}\n<!-- canonical knowledge document (JSON)\n${JSON.stringify(doc, null, 2)}\n-->\n`;
}
