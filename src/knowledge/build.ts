import { createHash } from 'node:crypto';
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { KnowledgeDocument, KnowledgeInput, Manifest, SearchIndex } from '../domain/types.js';
import { toKnowledgeInputs } from '../adapters/crawler.js';
import { renderOkf } from './okf.js';
import { ANDROIDX_LICENSE, renderAttribution } from './license.js';

const compare = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0;
export function buildIndex(docs: KnowledgeDocument[]): SearchIndex {
  return { schemaVersion: 1, entries: [...docs].sort((a, b) => compare(a.id, b.id)).flatMap(d => [...d.sections].sort((a, b) => compare(a.id, b.id)).map(s => ({ ...s, docId: d.id, docPath: `knowledge/${d.id}.md`, artifact: d.artifact, fqn: d.fqn, docTitle: d.title, description: d.description, tags: d.tags }))) };
}
export async function buildSnapshot(input: KnowledgeInput, outDir: string): Promise<Manifest> {
  const valid = toKnowledgeInputs(input);
  await mkdir(outDir, { recursive: true });
  if ((await readdir(outDir)).length) throw new Error('Output directory must be empty');
  const docs = [...valid.documents].sort((a, b) => compare(a.id, b.id)).map(d => ({ ...d, sections: [...d.sections].sort((a, b) => compare(a.id, b.id)) }));
  const payloads: Record<string, string> = { 'LICENSE-AndroidX.txt': ANDROIDX_LICENSE, 'ATTRIBUTION.md': renderAttribution(docs) };
  for (const d of docs) payloads[`knowledge/${d.id}.md`] = renderOkf(d);
  payloads['index/sections.json'] = JSON.stringify(buildIndex(docs), null, 2) + '\n';
  const files: Record<string, string> = {};
  for (const path of Object.keys(payloads).sort(compare)) {
    const body = payloads[path]!; files[path] = createHash('sha256').update(body).digest('hex');
    if (path.includes('/')) await mkdir(join(outDir, path.split('/')[0]!), { recursive: true }); await writeFile(join(outDir, path), body, { flag: 'wx' });
  }
  const inputRevisions = [...new Set(docs.flatMap(d => d.sections.flatMap(s => s.sources.map(source => source.revision))))].sort(compare);
  const manifest: Manifest = { schemaVersion: 1, files, inputRevisions };
  await writeFile(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  return manifest;
}
