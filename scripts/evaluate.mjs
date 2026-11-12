#!/usr/bin/env node
// Independent, frozen evaluator. Do not import the implementation's ranker.
import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { arch, cpus, platform, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { performance } from 'node:perf_hooks';

const root = resolve(import.meta.dirname, '..');
const frozenHash = '0d343b5a32531a8802b4b1c1cb52ea16b2a3055e9b7caf1dc415409a9d064f2d';
const questionBytes = readFileSync(join(root, 'evaluation/questions.json'));
const questionHash = createHash('sha256').update(questionBytes).digest('hex');
if (questionHash !== frozenHash) throw new Error('Frozen questions changed; explain and refreeze before evaluation.');
const definition = JSON.parse(questionBytes);
const work = mkdtempSync(join(tmpdir(), 'compose-eval-'));
const output = resolve(process.argv[2] || join(root, '.cache/evaluation'));
mkdirSync(output, { recursive: true });
if (existsSync(join(output, 'results.json'))) throw new Error('Result directory already contains a run; use a distinct output path to preserve it.');
const env = { ...process.env, GIT_CONFIG_GLOBAL: '/dev/null', GIT_CONFIG_NOSYSTEM: '1' };
function command(bin, args, cwd = root) {
  const start = performance.now();
  const result = spawnSync(bin, args, { cwd, env, maxBuffer: 16 * 1024 * 1024 });
  if (result.error) throw result.error;
  return { command: [bin, ...args], exitCode: result.status, stdout: result.stdout.toString('utf8'), stderr: result.stderr.toString('utf8'), bytes: result.stdout.byteLength, ms: performance.now() - start };
}
function checked(bin, args, cwd) {
  const result = command(bin, args, cwd);
  if (result.exitCode !== 0) throw new Error(`${result.command.join(' ')} failed: ${result.stderr}\n${result.stdout}`);
  return result;
}
const cli = (...args) => command(process.execPath, [join(root, 'dist/cli.js'), ...args]);
const git = (...args) => checked('git', args, join(work, 'remote')).stdout.trim();
function argsFor(query, reading = false) {
  const args = [];
  for (const field of (reading ? ['artifact', 'version', 'platform'] : ['artifact', 'version', 'platform', 'symbol', 'query'])) if (query[field] !== undefined) args.push(`--${field}`, String(query[field]));
  if (query.includeDifferent) args.push('--include-different');
  for (const item of query.versions || []) args.push('--require', `${item.artifact}=${item.version ?? 'unknown'}`);
  return args;
}
function parseCall(call, cap) {
  if (call.exitCode !== 0) throw new Error(`CLI failed: ${call.stderr} ${call.stdout}`);
  if (call.bytes > cap) throw new Error(`JSON stdout ${call.bytes} exceeds ${cap} bytes`);
  return JSON.parse(call.stdout);
}
function canonical(artifact, platform) {
  for (const base of ['androidx.compose.ui:ui', 'androidx.compose.material3:material3']) {
    if (artifact === `${base}-android`) return `${base}@android`;
    if (artifact === base) return `${base}@${platform || 'unspecified'}`;
  }
  return `${artifact}@${platform || 'unspecified'}`;
}
function status(entry, query) {
  const requested = [...(query.versions || [])];
  if (query.artifact) requested.push({ artifact: query.artifact, version: query.version ?? null, platform: query.platform });
  let unknown = entry.requires.length === 0;
  for (const requirement of entry.requires) {
    const reqKey = canonical(requirement.artifact, requirement.platform);
    const found = requested.find((r) => canonical(r.artifact, r.platform || query.platform) === reqKey);
    if (!found || !found.version || found.version === 'unknown' || !requirement.version || requirement.version === 'unknown') unknown = true;
    else if (found.version !== requirement.version) return 'different';
  }
  return unknown ? 'unknown' : 'match';
}
function boundedResponse(value, cap) {
  let text = JSON.stringify(value) + '\n';
  while (Buffer.byteLength(text) > cap && value.hits.length) {
    value.hits.pop(); value.truncated = true; text = JSON.stringify(value) + '\n';
  }
  if (Buffer.byteLength(text) > cap) throw new Error('Baseline envelope exceeds cap');
  return text;
}
function percentiles(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return { samples: sorted.length, p50: sorted[Math.ceil(sorted.length * .50) - 1], p95: sorted[Math.ceil(sorted.length * .95) - 1] };
}
try {
  const setup = [];
  setup.push(checked('npm', ['run', 'build']));
  mkdirSync(join(work, 'remote'));
  const built = cli('build', '--input', join(root, 'tests/fixtures/knowledge-input.json'), '--out', join(work, 'remote'), '--json');
  if (built.exitCode !== 0) throw new Error(built.stderr + built.stdout);
  setup.push(built);
  cpSync(join(work, 'remote'), join(output, 'corpus'), { recursive: true });
  git('init', '-b', 'corpus'); git('config', 'user.name', 'Evaluation'); git('config', 'user.email', 'evaluation@example.invalid');
  git('add', '.'); git('commit', '-m', 'Frozen evaluation corpus');
  const snapshot = git('rev-parse', 'HEAD');
  const synced = cli('sync', '--cache', join(work, 'cache'), '--remote', join(work, 'remote'), '--ref', 'corpus', '--json');
  const syncData = parseCall(synced, 12288); setup.push(synced);
  if (syncData.snapshot !== snapshot) throw new Error('Sync did not select the expected actual Git SHA');
  const incremental = cli('sync', '--cache', join(work, 'cache'), '--remote', join(work, 'remote'), '--ref', 'corpus', '--json');
  if (parseCall(incremental, 12288).snapshot !== snapshot) throw new Error('No-change sync altered snapshot identity');
  setup.push(incremental);
  const index = JSON.parse(readFileSync(join(work, 'remote/index/sections.json'), 'utf8'));
  const entries = [...index.entries].sort((a, b) => a.id.localeCompare(b.id));
  // Baseline is stable first-match rg over identical section prose+aliases. No IDF,
  // semantic ranking or question-specific commands. Preparing these rows is setup.
  const baselineSetupStart = performance.now();
  const rowsDir = join(work, 'rg-sections'); mkdirSync(rowsDir);
  for (const entry of entries) writeFileSync(join(rowsDir, `${entry.id}.txt`), [entry.fqn, entry.title, entry.body, ...entry.aliases].join('\n') + '\n');
  const baselinePreparationMs = performance.now() - baselineSetupStart;
  const stop = new Set(['the', 'and', 'what', 'which', 'does', 'when', 'from', 'with', 'that', 'this', 'how', 'its', 'for', 'can', 'into', 'itself', 'whether', 'find']);
  const records = [];
  for (const method of ['index', 'rg']) for (const limit of [3, 5]) for (const question of definition.questions) {
    const calls = [];
    let response;
    let failure;
    try {
      if (method === 'index') {
        const call = cli('search', '--cache', join(work, 'cache'), '--snapshot', snapshot, ...argsFor(question.query), '--limit', String(limit), '--max-bytes', '3072', '--json');
        calls.push(call); response = parseCall(call, 3072);
      } else {
        const rawTerms = `${question.query.symbol || ''} ${question.query.query || ''}`.match(/[\p{L}\p{N}_.]+/gu) || [];
        const terms = [...new Set(rawTerms.filter((t) => t.length >= 2 && !stop.has(t.toLowerCase())))];
        const rgArgs = ['--files-with-matches', '--ignore-case', '--fixed-strings'];
        for (const term of terms) rgArgs.push('-e', term);
        const eligible = entries.filter((entry) => !question.query.artifact || canonical(entry.artifact, question.query.platform) === canonical(question.query.artifact, question.query.platform)).filter((entry) => question.query.includeDifferent || status(entry, question.query) !== 'different');
        rgArgs.push(...eligible.map((entry) => `${entry.id}.txt`));
        const raw = eligible.length ? command('rg', rgArgs, rowsDir) : { command: ['rg', ...rgArgs], exitCode: 1, stdout: '', stderr: '', bytes: 0, ms: 0 };
        if (raw.exitCode !== 0 && raw.exitCode !== 1) throw new Error(raw.stderr);
        const matched = raw.stdout.split('\n').filter(Boolean).map((line) => line.replace(/\.txt$/, ''));
        const selected = eligible.filter((entry) => matched.includes(entry.id)).slice(0, limit);
        const value = { snapshot, hits: selected.map((e) => ({ id: e.id, docId: e.docId, title: e.title, artifact: e.artifact, fqn: e.fqn, snippet: e.body.slice(0, 140), versionStatus: status(e, question.query), sources: e.sources.map((s) => ({ id: s.id, resource: s.resource })), relatedIds: e.relatedIds })), truncated: false };
        const stdout = boundedResponse(value, 3072);
        // Raw rg output is a baseline tool response, too: retain and count it.
        calls.push({ ...raw, rawToolOutput: true });
        calls.push({ command: ['baseline-wrapper', 'bounded-candidates'], exitCode: 0, stdout, stderr: '', bytes: Buffer.byteLength(stdout), ms: 0 });
        response = JSON.parse(stdout);
      }
      if (response.snapshot !== snapshot) throw new Error('Wrong search snapshot');
      let readCount = 0;
      for (const hit of response.hits) {
        if (readCount >= 3) break;
        const cap = Math.min(3072, 12288 - calls.reduce((sum, call) => sum + call.bytes, 0));
        if (cap < 512) break;
        const call = cli('read', '--cache', join(work, 'cache'), '--snapshot', snapshot, '--id', hit.id, ...argsFor(question.query, true), '--max-bytes', String(cap), '--json');
        calls.push(call); readCount++;
        const read = parseCall(call, cap);
        if (read.snapshot !== snapshot || read.id !== hit.id || read.versionStatus !== hit.versionStatus) throw new Error('Read/search identity or version disagreement');
      }
    } catch (error) { failure = String(error); }
    const hits = response?.hits || [];
    const gold = question.accepted;
    const accepted = hits.findIndex((hit) => gold.some((g) => g.id === hit.id && g.versionStatus === hit.versionStatus));
    const readResponses = calls.filter((c) => c.command.includes('read') && c.exitCode === 0).flatMap((c) => {
      try { return [JSON.parse(c.stdout)]; } catch { return []; }
    });
    const readable = readResponses.some((read) => gold.some((g) => g.id === read.id && g.versionStatus === read.versionStatus && g.sourceLocations.some((location) => read.sources.some((source) => source.path && location.path.endsWith(source.path) && source.startLine <= location.startLine && source.endLine >= location.endLine && source.revision && /^[a-f0-9]{64}$/.test(source.sha256)))) && read.body);
    const bytes = calls.reduce((sum, call) => sum + call.bytes, 0);
    const versionErrors = hits.filter((hit) => {
      const entry = entries.find((e) => e.id === hit.id);
      return !entry || status(entry, question.query) !== hit.versionStatus;
    }).length;
    const record = { method, limit, questionId: question.id, acceptedRank: accepted < 0 ? null : accepted + 1, rawHit: accepted >= 0, readable: Boolean(readable), success: accepted >= 0 && readable && bytes <= 12288 && !failure && !versionErrors, bytes, versionErrors, ms: calls.reduce((sum, c) => sum + c.ms, 0), truncated: Boolean(response?.truncated || readResponses.some((r) => r.truncated)), failure, calls };
    records.push(record);
    writeFileSync(join(output, `${method}-${limit}-${question.id}.json`), JSON.stringify(record, null, 2) + '\n');
  }
  const summaries = [];
  for (const method of ['index', 'rg']) for (const limit of [3, 5]) {
    const group = records.filter((r) => r.method === method && r.limit === limit);
    summaries.push({ method, limit, rawHits: group.filter((r) => r.rawHit).length, usableHits: group.filter((r) => r.success).length, versionErrors: group.reduce((s, r) => s + r.versionErrors, 0), budgetViolations: group.filter((r) => r.bytes > 12288).length, maximumBytes: Math.max(...group.map((r) => r.bytes)), latencyMs: percentiles(group.map((r) => r.ms)), failedQuestionIds: group.filter((r) => !r.success).map((r) => r.questionId) });
  }
  const result = { questionHash, sourceMappingHashAtFreeze: definition.freeze.sourceMappingSha256, corpusInputHash: createHash('sha256').update(readFileSync(join(root, 'tests/fixtures/knowledge-input.json'))).digest('hex'), snapshot, node: process.version, machine: { platform: platform(), arch: arch(), cpus: cpus().length, cpuModel: cpus()[0]?.model }, rgVersion: checked('rg', ['--version']).stdout.split('\n')[0], measurements: { compilerBuildMs: setup[0].ms, corpusBuildMs: built.ms, initialSyncMs: synced.ms, unchangedIncrementalSyncMs: incremental.ms, baselinePreparationMs, changedIncrementalSyncMs: null, firstInstallMs: null, note: 'Changed incremental sync and first install are not measured by this retrieval evaluator. Retrieval timings include executable startup and local validation.' }, setup, summaries, records };
  writeFileSync(join(output, 'results.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ questionHash, snapshot, output, summaries }, null, 2));
  const primary = summaries.find((s) => s.method === 'index' && s.limit === 3);
  if (primary.usableHits < 18 || primary.versionErrors || primary.budgetViolations) process.exitCode = 1;
} finally { rmSync(work, { recursive: true, force: true }); }
