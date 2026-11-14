import { execFile } from 'node:child_process';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { crawlSources } from '../dist/refresh/crawl.js';
import { diffSnapshots } from '../dist/refresh/publish.js';
import { buildSnapshot } from '../dist/knowledge/build.js';
import { validateSnapshot } from '../dist/knowledge/validate.js';
import { getSnapshotPath, syncSnapshot } from '../dist/io/snapshot.js';
import { applyCuratedGuidance, parseGuidanceConfig } from '../dist/knowledge/curate.js';

async function main() {
const args = process.argv.slice(2); const opts = {};
for (let i = 0; i < args.length; i += 2) {
  if (!['--out', '--config', '--guidance', '--previous', '--remote', '--ref', '--base-snapshot'].includes(args[i]) || !args[i + 1] || opts[args[i]]) throw new Error('Usage: refresh.mjs --out DIR [--config FILE] [--guidance FILE] [--previous DIR | --remote URL] [--ref BRANCH]');
  opts[args[i]] = args[i + 1];
}
if (!opts['--out'] || (opts['--previous'] && opts['--remote']) || (opts['--previous'] && !opts['--base-snapshot']) || (opts['--base-snapshot'] && (!opts['--previous'] || !/^[0-9a-f]{40}$/.test(opts['--base-snapshot'])))) throw new Error('Specify --out and at most one previous source');
const out = path.resolve(opts['--out']); await mkdir(out, { recursive: true });
if ((await readdir(out)).length) throw new Error('Output directory must be empty');
const config = JSON.parse(await readFile(opts['--config'] ?? 'config/crawl.json', 'utf8'));
const baseline = JSON.parse(await readFile('tests/fixtures/knowledge-input.json', 'utf8'));
const spans = JSON.parse(await readFile('config/contract-spans.json', 'utf8'));
const guidanceConfig = parseGuidanceConfig(JSON.parse(await readFile(opts['--guidance'] ?? 'config/curated-guidance.json', 'utf8')));
let previous; let temp; let baseSnapshot = opts['--base-snapshot'] ?? null;
try {
  let previousDir = opts['--previous'];
  if (opts['--remote']) {
    const ref = opts['--ref'] ?? 'corpus';
    if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(ref) || ref.includes('..') || ref.includes('//') || ref.endsWith('/') || ref.endsWith('.') || ref.split('/').some(part => part.startsWith('.') || part.endsWith('.lock'))) throw new Error('Invalid ref');
    if (opts['--remote'].startsWith('-') || /[\x00-\x1f\x7f]/.test(opts['--remote'])) throw new Error('Invalid remote');
    const { stdout } = await promisify(execFile)('git', ['-c', 'core.hooksPath=/dev/null', 'ls-remote', '--heads', '--', opts['--remote'], `refs/heads/${ref}`], { env: { ...process.env, GIT_TERMINAL_PROMPT: '0' } });
    if (stdout.trim()) {
      const match = /^([0-9a-f]{40})\s+refs\/heads\/[^\s]+$/.exec(stdout.trim());
      if (!match) throw new Error('Invalid branch advertisement');
      temp = await mkdtemp(path.join(tmpdir(), 'refresh-previous-'));
      const synced = await syncSnapshot({ cacheDir: temp, remote: opts['--remote'], ref });
      if (synced.status !== 'fresh' || synced.snapshot !== match[1]) throw new Error('Failed to validate previous corpus');
      previousDir = getSnapshotPath(temp, synced.snapshot);
      baseSnapshot = synced.snapshot;
    }
  }
  if (previousDir) previous = await validateSnapshot(previousDir);
  const documents = new Map();
  for (const entry of previous?.index.entries ?? []) {
    const { docId, docPath, artifact, fqn, docTitle, description, tags, ...section } = entry;
    if (!documents.has(docId)) documents.set(docId, { id: docId, artifact, fqn, title: docTitle, description, tags, sections: [] });
    documents.get(docId).sections.push(section);
  }
  const result = await crawlSources(config, baseline, previous ? { schemaVersion: 1, documents: [...documents.values()] } : undefined, undefined, spans);
  const guidance = applyCuratedGuidance(result.input, guidanceConfig);
  const corpus = path.join(out, 'corpus'); await buildSnapshot(guidance.input, corpus);
  const current = await validateSnapshot(corpus); const changes = diffSnapshots(previous, current);
  const report = { baseSnapshot, sources: result.sources, spans: result.spans, changes, curatedGuidance: guidance.statuses };
  await writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  const currentEntries = new Map(current.index.entries.map(entry => [entry.id, entry]));
  const previousEntries = new Map((previous?.index.entries ?? []).map(entry => [entry.id, entry]));
  const text = value => String(value).replace(/[\r\n\t]+/g, ' ').replace(/([\\`*_\[\]<>])/g, '\\$1').slice(0, 200);
  const sections = [];
  for (const [label, ids, lookup] of [['Added', changes.added, currentEntries], ['Updated', changes.updated, currentEntries], ['Removed', changes.removed, previousEntries]]) {
    sections.push(`## ${label} (${ids.length})`, '');
    if (!ids.length) sections.push('- None');
    for (const id of ids.slice(0, 30)) {
      const entry = lookup.get(id); const source = entry?.sources?.[0]?.resource;
      let link = '';
      if (typeof source === 'string') {
        try {
          const url = new URL(source);
          if (['http:', 'https:'].includes(url.protocol) && !url.username && !url.password && url.href.length <= 500) link = ` — [source](${url.href.replace(/[()]/g, c => c === '(' ? '%28' : '%29')})`;
        } catch { /* Invalid source URLs are omitted from the summary. */ }
      }
      sections.push(`- \`${text(id)}\`${entry?.title ? ` — ${text(entry.title)}` : ''}${link}`);
    }
    if (ids.length > 30) sections.push(`- ${ids.length - 30} more; see report.json for the full list.`);
    sections.push('');
  }
  const summary = ['# Daily knowledge refresh', '', `Sections: ${changes.added.length} added, ${changes.updated.length} updated, ${changes.removed.length} removed.`, `Previous corpus: ${baseSnapshot ?? 'none'}.`, '', ...sections, '## Curated guidance', '', ...guidance.statuses.map(card => `- ${text(card.id)}: ${card.status}${card.reason ? ` — ${text(card.reason)}` : ''}`), '', '## Sources', '', ...result.sources.map(source => `- ${text(source.id)}: ${source.status}, ${source.sections} sections${source.note ? ` — ${text(source.note)}` : ''}`), ''].join('\n');
  await writeFile(path.join(out, 'summary.md'), summary);
  if (process.env.GITHUB_STEP_SUMMARY) await import('node:fs/promises').then(fs => fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary));
} finally { if (temp) await rm(temp, { recursive: true, force: true }); }

}
main().catch(async error => {
  const message = error instanceof Error ? error.message : String(error);
  const summary = `# Daily knowledge refresh failed\n\n${message.replace(/[\r\n]+/g, ' ')}\n`;
  console.error(summary);
  const outIndex = process.argv.indexOf('--out');
  if (outIndex >= 0 && process.argv[outIndex + 1]) {
    const out = path.resolve(process.argv[outIndex + 1]);
    await writeFile(path.join(out, 'report.json'), JSON.stringify({ error: message }, null, 2) + '\n', { flag: 'wx' }).catch(() => {});
    await writeFile(path.join(out, 'summary.md'), summary, { flag: 'wx' }).catch(() => {});
  }
  if (process.env.GITHUB_STEP_SUMMARY) await import('node:fs/promises').then(fs => fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary)).catch(() => {});
  process.exitCode = 1;
});
