import { describe, expect, it } from 'vitest';
import { parse } from 'yaml';
import { renderOkf } from '../src/knowledge/okf.js';
import { mkdtemp, readFile, writeFile, symlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { toKnowledgeInputs } from '../src/adapters/crawler.js';
import { buildSnapshot } from '../src/knowledge/build.js';
import { validateSnapshot } from '../src/knowledge/validate.js';
import type { KnowledgeInput } from '../src/domain/types.js';

function sample(): KnowledgeInput { return { schemaVersion: 1, documents: [{ id: 'popup', artifact: 'ui', fqn: 'example.Popup', title: 'Popup', description: 'A popup.', tags: ['window'], sections: [{ id: 'popup-dismiss', title: 'Dismiss', body: 'Dismiss calls the callback.', aliases: ['close'], requires: [{ artifact: 'androidx.compose.ui:ui', version: null, platform: 'android' }], sources: [{ id: 'source', kind: 'code', resource: 'https://example.org/Popup.kt', revision: '0123456789abcdef0123456789abcdef01234567', path: 'Popup.kt', startLine: 1, endLine: 2, sha256: hash('fun dismiss()'), license: 'Apache-2.0', excerpt: 'fun dismiss()' }], relatedIds: ['popup-other'] }, { id: 'popup-other', title: 'Other', body: 'Related.', aliases: [], requires: [], sources: [{ id: 'source', kind: 'code', resource: 'https://example.org/Popup.kt', revision: '0123456789abcdef0123456789abcdef01234567', path: 'Popup.kt', startLine: 1, endLine: 2, sha256: hash('fun dismiss()'), license: 'Apache-2.0', excerpt: 'fun dismiss()' }], relatedIds: [] }] }] }; }
const hash = (s: string) => createHash('sha256').update(s).digest('hex');

describe('knowledge snapshots', () => {
  it('rejects missing provenance and duplicate section IDs', () => {
    const bad = sample(); bad.documents[0].sections[0].sources[0].license = '';
    expect(() => toKnowledgeInputs(bad)).toThrow();
    const duplicate = sample(); duplicate.documents[0].sections[1].id = duplicate.documents[0].sections[0].id;
    expect(() => toKnowledgeInputs(duplicate)).toThrow();
  });
  it('preserves unknown versions and produces deterministic round-trip files', async () => {
    const a = await mkdtemp(join(tmpdir(), 'knowledge-a-')); const b = await mkdtemp(join(tmpdir(), 'knowledge-b-'));
    try {
      const ma = await buildSnapshot(sample(), a); const mb = await buildSnapshot(sample(), b);
      expect(ma).toEqual(mb);
      expect(ma.files).toHaveProperty('ATTRIBUTION.md');
      expect(await readFile(join(a, 'ATTRIBUTION.md'), 'utf8')).toContain('Copyright 2020 The Android Open Source Project');
      for (const path of ['manifest.json', ...Object.keys(ma.files)]) expect(await readFile(join(a, path))).toEqual(await readFile(join(b, path)));
      const snapshot = await validateSnapshot(a);
      expect(snapshot.index.entries[0].requires[0].version).toBeNull();
      expect(snapshot.index.entries[0].relatedIds).toEqual(['popup-other']);
      expect(await readFile(join(a, 'knowledge/popup.md'), 'utf8')).toContain('fun dismiss()');
    } finally { await rm(a, { recursive: true }); await rm(b, { recursive: true }); }
  });
  it('rejects index and document inconsistencies even with recomputed hashes', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'knowledge-'));
    try {
      await buildSnapshot(sample(), dir);
      const path = join(dir, 'index/sections.json'); const index = JSON.parse(await readFile(path, 'utf8'));
      index.entries[0].body = 'Invented'; const data = JSON.stringify(index, null, 2) + '\n'; await writeFile(path, data);
      const mp = join(dir, 'manifest.json'); const manifest = JSON.parse(await readFile(mp, 'utf8')); manifest.files['index/sections.json'] = hash(data); await writeFile(mp, JSON.stringify(manifest));
      await expect(validateSnapshot(dir)).rejects.toThrow();
    } finally { await rm(dir, { recursive: true }); }
  });
  it('rejects extra files and symlinks', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'knowledge-'));
    try { await buildSnapshot(sample(), dir); await symlink('manifest.json', join(dir, 'extra')); await expect(validateSnapshot(dir)).rejects.toThrow(); }
    finally { await rm(dir, { recursive: true }); }
  });
  it('rejects dangling links, duplicate logical requirements and corrupt excerpts', () => {
    const dangling = sample(); dangling.documents[0].sections[0].relatedIds = ['missing'];
    expect(() => toKnowledgeInputs(dangling)).toThrow();
    const duplicate = sample(); duplicate.documents[0].sections[0].requires.push({ artifact: 'androidx.compose.ui:ui-android', version: '1' });
    expect(() => toKnowledgeInputs(duplicate)).toThrow();
    const corrupt = sample(); corrupt.documents[0].sections[0].sources[0].excerpt = 'altered';
    expect(() => toKnowledgeInputs(corrupt)).toThrow();
  });
  it('rejects unsafe manifest paths and extra regular payloads', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'knowledge-'));
    try {
      await buildSnapshot(sample(), dir);
      const mp = join(dir, 'manifest.json'); const manifest = JSON.parse(await readFile(mp, 'utf8'));
      manifest.files['../outside'] = hash('outside'); await writeFile(mp, JSON.stringify(manifest));
      await expect(validateSnapshot(dir)).rejects.toThrow();
      delete manifest.files['../outside']; await writeFile(mp, JSON.stringify(manifest));
      await writeFile(join(dir, 'unexpected.txt'), 'extra');
      await expect(validateSnapshot(dir)).rejects.toThrow();
    } finally { await rm(dir, { recursive: true }); }
  });

  it('renders OKF frontmatter with source and section requirements', () => {
    const doc = sample().documents[0]!; const text = renderOkf(doc);
    expect(text.startsWith('---\n')).toBe(true);
    const front = parse(text.split('---\n')[1]!);
    expect(front).toMatchObject({ type: expect.any(String), title: doc.title, description: doc.description, tags: doc.tags, sources: [{ id: 'source', resource: 'https://example.org/Popup.kt' }], compose: { artifact: doc.artifact, fqn: doc.fqn, sections: expect.arrayContaining([expect.objectContaining({ id: 'popup-dismiss', requires: doc.sections[0]!.requires, sourceIds: ['source'] })]) } });
    expect(text).toContain('Sources: [source](https://example.org/Popup.kt)');
  });
  it('rejects invalid provenance and conflicting duplicate source IDs', () => {
    const noLines = sample(); delete noLines.documents[0]!.sections[0]!.sources[0]!.startLine; delete noLines.documents[0]!.sections[0]!.sources[0]!.endLine;
    expect(() => toKnowledgeInputs(noLines)).toThrow();
    const revision = sample(); revision.documents[0]!.sections[0]!.sources[0]!.revision = 'main'; expect(() => toKnowledgeInputs(revision)).toThrow();
    const url = sample(); url.documents[0]!.sections[0]!.sources[0]!.resource = 'local'; expect(() => toKnowledgeInputs(url)).toThrow();
    const conflict = sample(); conflict.documents[0]!.sections[1]!.sources[0]!.license = 'other'; expect(() => toKnowledgeInputs(conflict)).toThrow();
    const guide = sample(); guide.documents[0]!.sections[0]!.sources[0]!.kind = 'guide'; expect(() => toKnowledgeInputs(guide)).toThrow();
  });
  it('keeps unrelated android suffix artifacts distinct', () => {
    const input = sample(); input.documents[0]!.sections[0]!.requires = [{ artifact: 'other:widget', version: '1' }, { artifact: 'other:widget-android', version: '2' }];
    expect(() => toKnowledgeInputs(input)).not.toThrow();
  });

});
