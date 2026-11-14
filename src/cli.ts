#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import type { ArtifactVersion, KnowledgeInput, SearchQuery } from './domain/types.js';
import { buildSnapshot } from './knowledge/build.js';
import { validateSnapshot } from './knowledge/validate.js';
import { syncSnapshot, validateCachedSnapshot } from './io/snapshot.js';
import { searchIndex, readSection } from './retrieval/search.js';
import { serializeBounded } from './retrieval/budget.js';
import { createTask, lookup, routes, suggest } from './review/runtime.js';

const help = `Usage:
  compose-knowledge build --input FILE --out EMPTY_DIR [--json]
  compose-knowledge validate --dir DIR [--json]
  compose-knowledge begin --cache DIR --task FILE [--remote URL/PATH] [--ref REF] [--offline] [--require ARTIFACT=VERSION]
  compose-knowledge route --query TEXT
  compose-knowledge lookup --task FILE (--query TEXT | --route ID) [--require ARTIFACT=VERSION] [--max-bytes N]
  compose-knowledge sync --cache DIR [--remote URL/PATH] [--ref REF] [--offline] [--json]
  compose-knowledge search --cache DIR --snapshot FULL_SHA [--artifact NAME --version VERSION] [--platform android] [--symbol NAME | --query TEXT] [--require ARTIFACT=VERSION] [--limit N] [--max-bytes N] [--include-different] [--json]
  compose-knowledge read --cache DIR --snapshot FULL_SHA --id ID [--artifact NAME --version VERSION] [--platform android] [--symbol NAME | --query TEXT] [--require ARTIFACT=VERSION] [--limit N] [--max-bytes N] [--include-different] [--json]

Examples:
  compose-knowledge sync --cache ./cache --remote ./corpus --ref corpus
  compose-knowledge search --cache ./cache --snapshot FULL_SHA --symbol DropdownMenu
  compose-knowledge read --cache ./cache --snapshot FULL_SHA --id menu-api --require androidx.compose.material3:material3=1.3.2

JSON is the default. Search and read budgets are 256–3072 bytes (default 3072); mandatory metadata may require more than 256. Use version 'unknown' to indicate missing version context. Sync is explicit and defaults to ref corpus.
`;
const scopes: Record<string, string[]> = {
  begin: ['cache', 'task', 'remote', 'ref', 'offline', 'require', 'json'], route: ['query', 'json'], lookup: ['task', 'query', 'route', 'max-bytes', 'require', 'json'],
  build: ['input', 'out', 'json'], validate: ['dir', 'json'], sync: ['cache', 'remote', 'ref', 'offline', 'json'],
  search: ['cache', 'snapshot', 'artifact', 'version', 'platform', 'symbol', 'query', 'require', 'limit', 'max-bytes', 'include-different', 'json'],
  read: ['cache', 'snapshot', 'id', 'artifact', 'version', 'platform', 'symbol', 'query', 'require', 'limit', 'max-bytes', 'include-different', 'json'],
};
const switches = new Set(['json', 'offline', 'include-different']);
type Options = Record<string, string[]>;
function parse(args: string[]): { command: string; options: Options } {
  const [command, ...rest] = args;
  if (!command || !Object.hasOwn(scopes, command)) throw new Error('Expected a valid command; use --help');
  const options: Options = {};
  for (let i = 0; i < rest.length; i++) {
    const token = rest[i]!;
    if (!token.startsWith('--') || !scopes[command]!.includes(token.slice(2))) throw new Error(`Invalid option: ${token}`);
    const key = token.slice(2);
    if (options[key] && key !== 'require') throw new Error(`Repeated option: --${key}`);
    const value = switches.has(key) ? 'true' : rest[++i];
    if (!value || (!switches.has(key) && value.startsWith('--'))) throw new Error(`Missing value: --${key}`);
    (options[key] ??= []).push(value);
  }
  return { command, options };
}
const one = (o: Options, k: string) => o[k]?.[0];
function required(o: Options, k: string): string { const value = one(o, k); if (!value || !value.trim()) throw new Error(`Missing --${k}`); return value; }
function positive(value: string | undefined, fallback: number, max = Number.MAX_SAFE_INTEGER): number {
  if (value === undefined) return fallback;
  if (!/^[0-9]+$/.test(value) || !Number.isSafeInteger(Number(value)) || Number(value) < 1 || Number(value) > max) throw new Error('Invalid positive integer');
  return Number(value);
}
function queryOptions(o: Options): SearchQuery {
  const artifact = one(o, 'artifact'), version = one(o, 'version'), platform = one(o, 'platform');
  if (version && !artifact) throw new Error('--version requires --artifact');
  if (platform && platform !== 'android') throw new Error('Unsupported platform');
  if (one(o, 'symbol') && one(o, 'query')) throw new Error('Use either --symbol or --query');
  for (const key of ['artifact', 'version', 'symbol', 'query']) if (one(o, key) !== undefined && !one(o, key)!.trim()) throw new Error(`Empty --${key}`);
  const versions: ArtifactVersion[] = (o.require ?? []).map(item => {
    const at = item.indexOf('=');
    if (at <= 0 || at === item.length - 1 || item.indexOf('=', at + 1) !== -1 || !item.slice(0, at).trim() || !item.slice(at + 1).trim()) throw new Error('Expected --require artifact=version');
    return { artifact: item.slice(0, at), version: item.slice(at + 1) === 'unknown' ? null : item.slice(at + 1), ...(platform ? { platform: 'android' as const } : {}) };
  });
  if (artifact && version === 'unknown') versions.push({ artifact, version: null, ...(platform ? { platform: 'android' as const } : {}) });
  return { ...(artifact ? { artifact } : {}), ...(version && version !== 'unknown' ? { version } : {}), ...(versions.length ? { versions } : {}), ...(platform ? { platform: 'android' } : {}), ...(one(o, 'symbol') ? { symbol: one(o, 'symbol') } : {}), ...(one(o, 'query') ? { query: one(o, 'query') } : {}), ...(o['include-different'] ? { includeDifferent: true } : {}), limit: positive(one(o, 'limit'), 3) };
}
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') { process.stdout.write(help); return; }
  const { command, options: o } = parse(args);
  if (command === 'build') { const input = JSON.parse(await readFile(required(o, 'input'), 'utf8')) as KnowledgeInput; const result = await buildSnapshot(input, required(o, 'out')); process.stdout.write(JSON.stringify(result) + '\n'); return; }
  if (command === 'validate') { const result = await validateSnapshot(required(o, 'dir')); process.stdout.write(JSON.stringify({ valid: true, manifest: result.manifest }) + '\n'); return; }
  if (command === 'sync') { const result = await syncSnapshot({ cacheDir: required(o, 'cache'), remote: one(o, 'remote'), ref: one(o, 'ref'), offline: !!o.offline }); process.stdout.write(JSON.stringify(result) + '\n'); if (result.status === 'unavailable') process.exitCode = 2; return; }
  if (command === 'route') { process.stdout.write(JSON.stringify(suggest(required(o, 'query'), await routes())) + '\n'); return; }
  if (command === 'begin') {
    const cache = required(o, 'cache'), file = required(o, 'task');
    const versions = queryOptions(o).versions ?? [];
    const result = await syncSnapshot({cacheDir:cache,remote:one(o,'remote'),ref:one(o,'ref'),offline:!!o.offline});
    if (!result.snapshot) { process.stdout.write(JSON.stringify(result)+'\n'); process.exitCode=2; return; }
    const task = await createTask(file,cache,result,versions); process.stdout.write(JSON.stringify(task)+'\n'); return;
  }
  if (command === 'lookup') {
    const query = one(o,'query'), route = one(o,'route');
    if (Boolean(query) === Boolean(route) || !(query ?? route)?.trim()) throw new Error('Use either --query or --route');
    process.stdout.write(await lookup(required(o,'task'),{query,route},positive(one(o,'max-bytes'),12288,12288),queryOptions(o).versions ?? [])); return;
  }
  const cache = required(o, 'cache'), snapshot = required(o, 'snapshot');
  const query = queryOptions(o), maxBytes = positive(one(o, 'max-bytes'), 3072, 3072);
  if (maxBytes < 256) throw new Error('Byte budget must be at least 256');
  const id = command === 'read' ? required(o, 'id') : undefined;
  if (id && !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(id)) throw new Error('Invalid section ID');
  const { index } = await validateCachedSnapshot(cache, snapshot);
  const result = command === 'search' ? searchIndex(index, query, snapshot) : readSection(index, id!, query, snapshot);
  process.stdout.write(serializeBounded(result, maxBytes));
}
main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  // Keep error JSON under the minimum accepted byte budget, including its newline.
  let short = Array.from(message).slice(0, 160).join('');
  while (Buffer.byteLength(JSON.stringify({ error: short }) + '\n') > 256) short = Array.from(short).slice(0, -1).join('');
  process.stderr.write(JSON.stringify({ error: short }) + '\n'); process.exitCode = 1;
});
