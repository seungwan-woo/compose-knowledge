import { createHash } from 'node:crypto';
import { lstat, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';
import type { KnowledgeDocument, KnowledgeSection } from '../domain/types.js';

const hash = (value: string) => createHash('sha256').update(value).digest('hex');
const revisionPattern = /^[0-9a-f]{40}$/;
const filenamePattern = /^\d{4}-\d{2}-\d{2}\.md$/;

interface TipMetadata {
  layout: string;
  tip: true;
  title: string;
  summary: string;
  doc_date: string;
  version_scope: string;
  agp_scope: string;
  verification: string;
  permalink: string;
  lang?: string;
}

function assertMetadata(raw: unknown, filename: string): TipMetadata {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('Invalid tip frontmatter');
  const obj = raw as Record<string, unknown>;
  for (const field of ['title', 'summary', 'doc_date', 'version_scope', 'agp_scope', 'verification', 'permalink']) {
    if (typeof obj[field] !== 'string' || !(obj[field] as string).trim()) throw new Error('Missing tip metadata: ' + field);
  }
  const day = filename.slice(0, 10);
  if (obj.tip !== true || obj.layout !== 'default' || obj.doc_date !== day ||
      obj.permalink !== '/tips/' + day + '/' ||
      !/^\d{4}-\d{2}-\d{2}$/.test(day) ||
      Number.isNaN(Date.parse(day + 'T00:00:00Z'))) throw new Error('Invalid dated tip metadata: ' + filename);
  return obj as unknown as TipMetadata;
}

interface Chunk { title: string; excerpt: string; startLine: number; endLine: number; }

/** Group authored Markdown at heading boundaries; preserve code fences intact. */
function chunks(lines: string[], contentStart: number): Chunk[] {
  const groups: Chunk[] = [];
  let start = contentStart;
  let title = 'Overview';
  let fence: string | undefined;
  const emit = (endExclusive: number) => {
    let first = start, last = endExclusive;
    while (first < last && !lines[first]!.trim()) first++;
    while (last > first && !lines[last - 1]!.trim()) last--;
    if (first < last) {
      groups.push({ title, excerpt: lines.slice(first, last).join('\n'), startLine: first + 1, endLine: last });
    }
  };
  for (let i = contentStart; i < lines.length; i++) {
    const line = lines[i]!;
    const delim = /^\s*(`{3,}|~{3,})/.exec(line);
    if (delim) {
      if (!fence) fence = delim[1]![0]!;
      else if (fence === delim[1]![0]) fence = undefined;
      continue;
    }
    const heading = !fence ? /^#{2,3}\s+(.+)$/.exec(line) : null;
    if (heading) {
      emit(i);
      start = i;
      title = heading[1]!.trim();
    }
  }
  if (fence) throw new Error('Unclosed Markdown code fence in daily tip');
  emit(lines.length);
  return groups;
}

function aliases(text: string): string[] {
  // Only names found in the actual authored section. These are search hints, not verified API declarations.
  return [...new Set([
    ...(text.match(/\b[A-Za-z_][A-Za-z0-9_]{4,}\b/g) ?? []),
    ...(text.match(/[가-힣]{2,}/g) ?? []),
  ])].slice(0, 60);
}

/** Import human-readable Pages source without re-fetching or executing untrusted Markdown.
 * The exact Git SHA pins source links. Nothing from this input claims an executed app test.
 */
export async function importDailyTips(root: string, gitSha: string): Promise<KnowledgeDocument[]> {
  if (!revisionPattern.test(gitSha)) throw new Error('Tips require an immutable 40-character source commit SHA');
  const docs: KnowledgeDocument[] = [];
  for (const filename of (await readdir(root)).filter(name => filenamePattern.test(name)).sort()) {
    const fullPath = path.join(root, filename);
    if (!(await lstat(fullPath)).isFile()) throw new Error('Tip source must be a regular file: ' + filename);
    const raw = (await readFile(fullPath, 'utf8')).replace(/\r\n/g, '\n');
    const lines = raw.split('\n');
    if (lines[0] !== '---') throw new Error('Missing tip frontmatter: ' + filename);
    const closing = lines.findIndex((line, index) => index > 0 && line === '---');
    if (closing < 2) throw new Error('Missing tip metadata closing delimiter: ' + filename);
    const meta = assertMetadata(parse(lines.slice(1, closing).join('\n')), filename);
    const parts = chunks(lines, closing + 1);
    if (!parts.length) throw new Error('Empty tip: ' + filename);
    const date = meta.doc_date.replace(/-/g, '');
    const sourcePath = 'docs/tips/' + filename;
    const sections: KnowledgeSection[] = parts.map((part, i) => {
      const id = 'tip-' + date + '-' + String(i + 1).padStart(2, '0');
      const resource = 'https://github.com/seungwan-woo/compose-knowledge/blob/' +
        gitSha + '/' + sourcePath + '#L' + part.startLine + '-L' + part.endLine;
      const body = [
        'Practical Tip: author-curated guidance, NOT an independently verified AndroidX contract.',
        'Date: ' + meta.doc_date,
        'Compose versions: ' + meta.version_scope,
        'AGP support: ' + meta.agp_scope,
        'Verification: ' + meta.verification,
        'Original page: https://seungwan-woo.github.io/compose-knowledge/tips/' + meta.doc_date + '/',
        '',
        part.excerpt,
      ].join('\n');
      return {
        id, title: 'Practical Tip: ' + part.title, body,
        aliases: aliases(part.excerpt),
        // A tip may discuss several independent libraries and a version range;
        // keep applicability unknown rather than pretending exact version equality.
        requires: [{ artifact: 'compose-knowledge:practical-tip', version: null }],
        sources: [{
          id: id + '-source', kind: 'guide', resource, revision: gitSha,
          path: sourcePath, startLine: part.startLine, endLine: part.endLine,
          sha256: hash(part.excerpt), license: 'Unspecified (repository-authored content)',
          excerpt: part.excerpt,
        }],
        relatedIds: [],
      };
    });
    docs.push({
      id: 'tip-' + date, artifact: 'compose-knowledge:practical-tip',
      fqn: 'compose.knowledge.daily.' + date,
      title: 'Practical Tip: ' + meta.title,
      description: [meta.summary, 'Compose: ' + meta.version_scope, 'AGP: ' + meta.agp_scope,
        'Verification: ' + meta.verification].join(' | '),
      tags: ['Compose', 'Android', 'practical-tip', 'not-official-contract'],
      sections,
    });
  }
  return docs;
}
