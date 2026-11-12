import { execFileSync, spawnSync } from 'node:child_process';
import { cpSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

const root = resolve('.');
let tmp: string;
const cli = (...args: string[]) => spawnSync(process.execPath, [join(root, 'dist/cli.js'), ...args], { encoding: 'utf8' });
const json = (args: string[]) => { const result = cli(...args); expect(result.status, result.stderr).toBe(0); expect(result.stderr).toBe(''); return JSON.parse(result.stdout); };
const git = (cwd: string, ...args: string[]) => execFileSync('git', args, { cwd, stdio: 'pipe', encoding: 'utf8' }).trim();
let cache: string, snapshot: string, id: string;

beforeAll(() => {
  execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'pipe' });
  tmp = mkdtempSync(join(tmpdir(), 'compose-cli-'));
});
afterAll(() => { if (tmp) rmSync(tmp, { recursive: true, force: true }); });

describe('CLI', () => {
  it('builds, validates, syncs and reads source and requirement context from a pinned snapshot', () => {
    const corpus = join(tmp, 'corpus'); cache = join(tmp, 'cache');
    expect(json(['build', '--input', 'tests/fixtures/knowledge-input.json', '--out', corpus, '--json']).schemaVersion).toBe(1);
    expect(json(['validate', '--dir', corpus, '--json'])).toBeTruthy();
    git(corpus, 'init', '-q', '-b', 'corpus'); git(corpus, 'config', 'user.name', 'Test'); git(corpus, 'config', 'user.email', 'test@example.com');
    git(corpus, 'add', '.'); git(corpus, 'commit', '-qm', 'fixture');
    snapshot = git(corpus, 'rev-parse', 'HEAD');
    const synced = json(['sync', '--cache', cache, '--remote', corpus, '--json']);
    expect(synced).toMatchObject({ status: 'fresh', snapshot });
    const query = ['--cache', cache, '--snapshot', snapshot, '--artifact', 'androidx.compose.material3:material3', '--version', '1.3.2', '--platform', 'android', '--require', 'androidx.compose.ui:ui=1.7.8'];
    const found = json(['search', ...query, '--symbol', 'DropdownMenu', '--json']);
    expect(found.hits.length).toBeGreaterThan(0); id = found.hits[0].id;
    const read = json(['read', ...query, '--id', id, '--json']);
    expect(read).toMatchObject({ snapshot, id, versionStatus: found.hits[0].versionStatus });
    expect(read.sources[0]).toEqual(expect.objectContaining({ revision: expect.any(String), sha256: expect.any(String), license: expect.any(String) }));
    expect(read.requires.length).toBeGreaterThan(0);
    expect(Buffer.byteLength(JSON.stringify(read) + '\n')).toBeLessThanOrEqual(3072);
    expect(json(['sync', '--cache', cache, '--offline']).status).toBe('cached');
    renameSync(corpus, corpus + '-gone');
    const fallback = json(['sync', '--cache', cache, '--remote', corpus]);
    expect(fallback).toMatchObject({ status: 'cached', snapshot });
    expect(fallback.error).toBeTruthy();
    const unknown = json(['read', '--cache', cache, '--snapshot', snapshot, '--id', id, '--artifact', 'androidx.compose.material3:material3', '--version', 'unknown']);
    expect(unknown.versionStatus).toBe('unknown');
  });
  it('reports unavailable sync as JSON and a nonzero exit', () => {
    const result = cli('sync', '--cache', join(tmp, 'empty'), '--offline', '--json');
    expect(result.status).not.toBe(0); expect(JSON.parse(result.stdout).status).toBe('unavailable');
  });
  it('rejects invalid options and unsafe IDs with JSON errors', () => {
    for (const args of [[], ['wat'], ['build', '--input'], ['validate', '--dir', tmp, '--oops'], ['search', '--dir', tmp], ['read', '--cache', cache, '--snapshot', snapshot, '--id', '../manifest.json'], ['search', '--cache', cache, '--snapshot', snapshot, '--version', '1'], ['search', '--cache', cache, '--snapshot', snapshot, '--max-bytes', '12'], ['search', '--cache', cache, '--snapshot', snapshot, '--max-bytes', '3073'], ['sync', '--cache', cache, '--limit', '3'], ['read', '--cache', cache, '--snapshot', snapshot, '--id', id, '--require', 'broken']]) {
      const result = cli(...args); expect(result.status, args.join(' ')).not.toBe(0); expect(result.stdout).toBe(''); expect(JSON.parse(result.stderr).error).toBeTruthy();
    }
  });
  it('rejects a valid corpus substituted under another commit SHA for search and read', () => {
    const input = JSON.parse(readFileSync(join(root, 'tests/fixtures/knowledge-input.json'), 'utf8'));
    input.documents[0].title += ' changed';
    const otherInput = join(tmp, 'other.json'), otherCorpus = join(tmp, 'other-corpus');
    writeFileSync(otherInput, JSON.stringify(input));
    json(['build', '--input', otherInput, '--out', otherCorpus]);
    expect(json(['validate', '--dir', otherCorpus]).valid).toBe(true);
    const pinned = join(cache, 'snapshots', snapshot), backup = pinned + '-backup';
    renameSync(pinned, backup);
    try {
      cpSync(otherCorpus, pinned, { recursive: true });
      for (const command of [['search'], ['read', '--id', id]]) {
        const result = cli(...command, '--cache', cache, '--snapshot', snapshot);
        expect(result.status).not.toBe(0); expect(result.stdout).toBe('');
        expect(JSON.parse(result.stderr).error).toBeTruthy();
      }
    } finally { rmSync(pinned, { recursive: true, force: true }); renameSync(backup, pinned); }
  });
  it('validates the pinned cache on every read', () => {
    writeFileSync(join(cache, 'snapshots', snapshot, 'manifest.json'), '{}');
    const result = cli('read', '--cache', cache, '--snapshot', snapshot, '--id', id);
    expect(result.status).not.toBe(0); expect(JSON.parse(result.stderr).error).toBeTruthy();
  });
});
