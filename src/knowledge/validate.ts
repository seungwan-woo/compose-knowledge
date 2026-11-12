import { createHash } from 'node:crypto';
import { lstat, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { KnowledgeDocument, Manifest, SearchIndex, ValidatedSnapshot } from '../domain/types.js';
import { toKnowledgeInputs } from '../adapters/crawler.js';
import { buildIndex } from './build.js';
import { renderOkf } from './okf.js';
import { ANDROIDX_LICENSE } from './license.js';

const digest = (data: Buffer) => createHash('sha256').update(data).digest('hex');
const record = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const exact = (o: Record<string, unknown>, keys: string[]) => Object.keys(o).sort().join('\0') === [...keys].sort().join('\0');

export async function validateSnapshot(dir: string): Promise<ValidatedSnapshot> {
  if (!(await lstat(dir)).isDirectory()) throw new Error('Snapshot root must be a directory');
  const actual: string[] = [];
  async function walk(path: string, prefix = ''): Promise<void> {
    for (const name of await readdir(path)) {
      const relative = prefix ? `${prefix}/${name}` : name;
      const item = join(path, name); const stat = await lstat(item);
      if (stat.isSymbolicLink()) throw new Error('Symlinks are forbidden');
      if (stat.isDirectory()) { if (!['knowledge', 'index'].includes(relative)) throw new Error('Unexpected directory'); await walk(item, relative); }
      else if (stat.isFile()) actual.push(relative);
      else throw new Error('Invalid payload');
    }
  }
  await walk(dir);
  const manifestValue: unknown = JSON.parse(await readFile(join(dir, 'manifest.json'), 'utf8'));
  if (!record(manifestValue) || !exact(manifestValue, ['schemaVersion', 'files', 'inputRevisions']) || manifestValue.schemaVersion !== 1 || !record(manifestValue.files) || !Array.isArray(manifestValue.inputRevisions) || manifestValue.inputRevisions.some(x => typeof x !== 'string' || !x.trim())) throw new Error('Invalid manifest');
  const manifest = manifestValue as unknown as Manifest;
  const paths = Object.keys(manifest.files);
  if (paths.some(p => !/^(?:knowledge\/[A-Za-z0-9][A-Za-z0-9._-]*\.md|index\/sections\.json|LICENSE-AndroidX\.txt)$/.test(p) || !/^[a-f0-9]{64}$/.test(manifest.files[p] ?? ''))) throw new Error('Unsafe manifest path or digest');
  if (JSON.stringify([...actual].sort()) !== JSON.stringify([...paths, 'manifest.json'].sort())) throw new Error('Payload set differs from manifest');
  for (const p of paths) if (digest(await readFile(join(dir, p))) !== manifest.files[p]) throw new Error('Payload digest mismatch');
  if (!paths.includes('index/sections.json') || !paths.includes('LICENSE-AndroidX.txt') || await readFile(join(dir, 'LICENSE-AndroidX.txt'), 'utf8') !== ANDROIDX_LICENSE) throw new Error('Missing index or license');
  const raw: unknown = JSON.parse(await readFile(join(dir, 'index/sections.json'), 'utf8'));
  if (!record(raw) || !exact(raw, ['schemaVersion', 'entries']) || raw.schemaVersion !== 1 || !Array.isArray(raw.entries)) throw new Error('Invalid index');
  const docs = new Map<string, KnowledgeDocument>();
  for (const entry of raw.entries) {
    if (!record(entry) || !exact(entry, ['id', 'title', 'body', 'aliases', 'requires', 'sources', 'relatedIds', 'docId', 'docPath', 'artifact', 'fqn', 'docTitle', 'description', 'tags']) || typeof entry.docId !== 'string' || entry.docPath !== `knowledge/${entry.docId}.md`) throw new Error('Invalid index entry');
    const { docId, docPath: _path, artifact, fqn, docTitle, description, tags, ...section } = entry;
    const existing = docs.get(docId);
    const meta = { id: docId, artifact, fqn, title: docTitle, description, tags };
    if (existing) {
      const { sections: _sections, ...oldMeta } = existing;
      if (JSON.stringify(oldMeta) !== JSON.stringify(meta)) throw new Error('Inconsistent document metadata');
      existing.sections.push(section as unknown as KnowledgeDocument['sections'][number]);
    } else docs.set(docId, { ...meta, sections: [section] } as unknown as KnowledgeDocument);
  }
  const input = toKnowledgeInputs({ schemaVersion: 1, documents: [...docs.values()] });
  const index = buildIndex(input.documents);
  if (JSON.stringify(index) !== JSON.stringify(raw)) throw new Error('Noncanonical or inconsistent index');
  const expectedPaths = ['index/sections.json', 'LICENSE-AndroidX.txt', ...input.documents.map(d => `knowledge/${d.id}.md`)].sort();
  if (JSON.stringify(paths.sort()) !== JSON.stringify(expectedPaths)) throw new Error('Unexpected document set');
  for (const doc of input.documents) if (await readFile(join(dir, `knowledge/${doc.id}.md`), 'utf8') !== renderOkf(doc)) throw new Error('Index and document differ');
  const revisions = [...new Set(input.documents.flatMap(d => d.sections.flatMap(s => s.sources.map(source => source.revision))))].sort();
  if (JSON.stringify(revisions) !== JSON.stringify(manifest.inputRevisions)) throw new Error('Input revisions differ');
  return { manifest, index: index as SearchIndex };
}
