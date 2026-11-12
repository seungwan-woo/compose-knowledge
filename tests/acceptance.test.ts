import { afterEach, describe, expect, it } from 'vitest';
import { spawn, spawnSync } from 'node:child_process';
import { cp, mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

// Black-box acceptance: use the built executable, not implementation imports.
const root = path.resolve(import.meta.dirname, '..');
const roots: string[] = [];
const env = { ...process.env, GIT_CONFIG_GLOBAL: '/dev/null', GIT_CONFIG_NOSYSTEM: '1' };
const cliPath = path.join(root, 'dist/cli.js');
const syncCommand = (args: string[], cwd = root) => {
  const result = spawnSync(args[0]!, args.slice(1), { cwd, env, encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
  if (result.error) throw result.error;
  return { code: result.status, stdout: result.stdout, stderr: result.stderr };
};
const cli = (...args: string[]) => syncCommand([process.execPath, cliPath, ...args]);
const parse = (result: ReturnType<typeof cli>) => {
  expect(result.code, result.stderr + result.stdout).toBe(0);
  return JSON.parse(result.stdout);
};
const parseUnavailable = (result: ReturnType<typeof cli>) => {
  expect(result.code, result.stderr + result.stdout).toBe(2);
  return JSON.parse(result.stdout);
};
const git = (cwd: string, ...args: string[]) => {
  const result = syncCommand(['git', ...args], cwd);
  expect(result.code, result.stderr).toBe(0);
  return result.stdout.trim();
};
const asyncCli = (...args: string[]) => new Promise<ReturnType<typeof cli>>((resolve, reject) => {
  const child = spawn(process.execPath, [cliPath, ...args], { cwd: root, env });
  let stdout = ''; let stderr = '';
  child.stdout.on('data', (data) => { stdout += data.toString(); });
  child.stderr.on('data', (data) => { stderr += data.toString(); });
  child.once('error', reject);
  child.once('close', (code) => resolve({ code, stdout, stderr }));
});
async function fixture() {
  const dir = await mkdtemp(path.join(tmpdir(), 'compose-acceptance-')); roots.push(dir);
  const repo = path.join(dir, 'remote'); const cache = path.join(dir, 'cache');
  await mkdir(repo);
  const input = JSON.parse(await readFile(path.join(root, 'tests/fixtures/knowledge-input.json'), 'utf8'));
  const inputPath = path.join(dir, 'input.json');
  await writeFile(inputPath, JSON.stringify(input));
  parse(cli('build', '--input', inputPath, '--out', repo, '--json'));
  git(repo, 'init', '-b', 'corpus'); git(repo, 'config', 'user.name', 'Independent Acceptance'); git(repo, 'config', 'user.email', 'acceptance@example.invalid');
  git(repo, 'add', '.'); git(repo, 'commit', '-m', 'A');
  const sha = git(repo, 'rev-parse', 'HEAD');
  const synced = parse(cli('sync', '--cache', cache, '--remote', repo, '--ref', 'corpus', '--json'));
  expect(synced).toMatchObject({ snapshot: sha, status: 'fresh' });
  return { dir, repo, cache, input, inputPath, sha };
}
async function rebuildRemote(f: Awaited<ReturnType<typeof fixture>>) {
  const stageRoot = await mkdtemp(path.join(f.dir, 'staging-'));
  const stage = path.join(stageRoot, 'payload');
  parse(cli('build', '--input', f.inputPath, '--out', stage, '--json'));
  await cp(stage, f.repo, { recursive: true });
}
const queryArgs = ['--artifact', 'androidx.compose.ui:ui', '--version', '1.7.8', '--platform', 'android'];
afterEach(async () => { await Promise.all(roots.splice(0).map((dir) => rm(dir, { recursive: true, force: true }))); });

describe('independent executable acceptance', () => {
  it('builds byte-identically and validates a released-source corpus', async () => {
    const f = await fixture(); const again = path.join(f.dir, 'again');
    parse(cli('build', '--input', f.inputPath, '--out', again, '--json'));
    const manifest = await readFile(path.join(f.repo, 'manifest.json'), 'utf8');
    expect(await readFile(path.join(again, 'manifest.json'), 'utf8')).toBe(manifest);
    for (const file of Object.keys(JSON.parse(manifest).files)) expect(await readFile(path.join(again, file))).toEqual(await readFile(path.join(f.repo, file)));
    parse(cli('validate', '--dir', again, '--json'));
  });

  it('returns unavailable offline without a cache and cached with the exact existing SHA', async () => {
    const f = await fixture();
    expect(parseUnavailable(cli('sync', '--cache', path.join(f.dir, 'empty'), '--offline', '--json'))).toMatchObject({ status: 'unavailable', snapshot: null });
    const before = Date.now();
    const cached = parse(cli('sync', '--cache', f.cache, '--offline', '--json'));
    expect(cached).toMatchObject({ status: 'cached', snapshot: f.sha });
    expect(Date.parse(cached.checkedAt)).toBeGreaterThanOrEqual(before - 1000);
    expect(Date.parse(cached.publishedAt)).toBe(Date.parse(git(f.repo, 'show', '-s', '--format=%cI', f.sha)));
  });

  it('rejects an invalid new snapshot and keeps last good on remote failure', async () => {
    const f = await fixture();
    await writeFile(path.join(f.repo, 'manifest.json'), '{"schemaVersion":999}');
    git(f.repo, 'add', '.'); git(f.repo, 'commit', '-m', 'invalid B');
    const invalid = parse(cli('sync', '--cache', f.cache, '--remote', f.repo, '--ref', 'corpus', '--json'));
    expect(invalid).toMatchObject({ status: 'cached', snapshot: f.sha });
    expect(invalid.error).toBeTruthy();
    await rm(f.repo, { recursive: true });
    expect(parse(cli('sync', '--cache', f.cache, '--remote', f.repo, '--ref', 'corpus', '--json'))).toMatchObject({ status: 'cached', snapshot: f.sha });
    const read = parse(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'popup-properties', ...queryArgs, '--json'));
    expect(read.snapshot).toBe(f.sha);
  });

  it('keeps reads pinned to A while independent processes activate complete B', async () => {
    const f = await fixture();
    const a = parse(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'menu-api', '--json'));
    f.input.documents[0].description += ' changed B';
    const changed = f.input.documents.flatMap((document: { sections: any[] }) => document.sections).find((section: { id: string }) => section.id === 'menu-api');
    changed.body += '\nIndependent publication B marker.\n';
    await writeFile(f.inputPath, JSON.stringify(f.input));
    await rebuildRemote(f);
    git(f.repo, 'add', '.'); git(f.repo, 'commit', '-m', 'valid B');
    const next = git(f.repo, 'rev-parse', 'HEAD');
    const args = ['sync', '--cache', f.cache, '--remote', f.repo, '--ref', 'corpus', '--json'];
    const first = asyncCli(...args); const second = asyncCli(...args);
    const reads = Array.from({ length: 6 }, () => asyncCli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'menu-api', '--json'));
    const results = await Promise.all([first, second, ...reads]);
    for (const result of results.slice(0, 2)) expect(parse(result)).toMatchObject({ status: 'fresh', snapshot: next });
    for (const result of results.slice(2)) expect(parse(result)).toEqual(a);
    expect(parse(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'menu-api', '--json'))).toEqual(a);
    expect(parse(cli('read', '--cache', f.cache, '--snapshot', next, '--id', 'menu-api', '--json')).body).toContain('Independent publication B marker.');
    expect(parse(cli('search', '--cache', f.cache, '--snapshot', next, '--symbol', 'Popup', ...queryArgs, '--json')).snapshot).toBe(next);
  }, 30000);

  it('never upgrades mismatched/unknown evidence or a wrong artifact into a match', async () => {
    const f = await fixture();
    const normal = parse(cli('search', '--cache', f.cache, '--snapshot', f.sha, '--artifact', 'androidx.compose.ui:ui', '--version', '9.9.9', '--platform', 'android', '--symbol', 'PopupProperties', '--limit', '5', '--json'));
    expect(normal.hits.every((hit: { versionStatus: string }) => hit.versionStatus !== 'different' && hit.versionStatus !== 'match')).toBe(true);
    const compare = parse(cli('search', '--cache', f.cache, '--snapshot', f.sha, '--artifact', 'androidx.compose.ui:ui', '--version', '9.9.9', '--platform', 'android', '--symbol', 'PopupProperties', '--include-different', '--limit', '5', '--json'));
    expect(compare.hits.some((hit: { versionStatus: string }) => hit.versionStatus === 'different')).toBe(true);
    expect(compare.hits.every((hit: { versionStatus: string }) => hit.versionStatus !== 'match')).toBe(true);
    expect(parse(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'unknown-reference', ...queryArgs, '--json')).versionStatus).toBe('unknown');
    const wrong = parse(cli('search', '--cache', f.cache, '--snapshot', f.sha, '--artifact', 'androidx.compose.material3:material3', '--version', '1.3.2', '--platform', 'android', '--symbol', 'androidx.compose.ui.window.Popup', '--json'));
    expect(wrong.hits).toEqual([]);
  });

  it('resolves the known Android alias, preserves unspecified-platform uncertainty and returns no fabricated hits', async () => {
    const f = await fixture();
    const alias = parse(cli('search', '--cache', f.cache, '--snapshot', f.sha, '--artifact', 'androidx.compose.ui:ui-android', '--version', '1.7.8', '--symbol', 'PopupProperties', '--json'));
    expect(alias.hits.some((hit: { versionStatus: string }) => hit.versionStatus === 'match')).toBe(true);
    const unspecified = parse(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', 'popup-properties', '--artifact', 'androidx.compose.ui:ui', '--version', '1.7.8', '--json'));
    expect(unspecified.versionStatus).toBe('unknown');
    const none = parse(cli('search', '--cache', f.cache, '--snapshot', f.sha, '--symbol', 'org.example.DoesNotExistAnywhere', '--json'));
    expect(none.hits).toEqual([]);
    for (const id of ['../manifest.json', '/etc/passwd', 'knowledge/menu.md', 'nonexistent']) expect(cli('read', '--cache', f.cache, '--snapshot', f.sha, '--id', id, '--json').code).not.toBe(0);
  });

  it('requires every dependency in joint evidence and prefers a matching release over unknown evidence', async () => {
    const f = await fixture();
    const sections = f.input.documents.flatMap((document: { sections: any[] }) => document.sections);
    const known = sections.find((section: { id: string }) => section.id === 'popup-properties');
    const unknown = sections.find((section: { id: string }) => section.id === 'unknown-reference');
    const joint = sections.find((section: { id: string }) => section.id === 'popup-touch-routing');
    joint.requires.push({ artifact: 'androidx.compose.material3:material3', version: '1.3.2', platform: 'android' });
    known.aliases.push('priorityprobe');
    unknown.aliases.push('priorityprobe'); unknown.title += ' priorityprobe'; unknown.body += '\npriorityprobe';
    await writeFile(f.inputPath, JSON.stringify(f.input));
    await rebuildRemote(f);
    git(f.repo, 'add', '.'); git(f.repo, 'commit', '-m', 'joint and priority B');
    const next = git(f.repo, 'rev-parse', 'HEAD');
    parse(cli('sync', '--cache', f.cache, '--remote', f.repo, '--ref', 'corpus', '--json'));
    const readArgs = ['read', '--cache', f.cache, '--snapshot', next, '--id', 'popup-touch-routing', ...queryArgs];
    expect(parse(cli(...readArgs, '--json')).versionStatus).toBe('unknown');
    expect(parse(cli(...readArgs, '--require', 'androidx.compose.material3:material3=1.3.2', '--json')).versionStatus).toBe('match');
    expect(parse(cli(...readArgs, '--require', 'androidx.compose.material3:material3=9.9.9', '--include-different', '--json')).versionStatus).toBe('different');
    const found = parse(cli('search', '--cache', f.cache, '--snapshot', next, ...queryArgs, '--query', 'priorityprobe', '--json'));
    expect(found.hits[0]).toMatchObject({ id: 'popup-properties', versionStatus: 'match' });
  });

  it('counts full UTF-8 JSON bytes and handles tiny caps without partial JSON', async () => {
    const f = await fixture();
    f.input.documents[0].sections[0].body += '\n' + '바깥 터치가 닫힘과 같은가요? 🙂 '.repeat(1000);
    await writeFile(f.inputPath, JSON.stringify(f.input));
    await rebuildRemote(f);
    git(f.repo, 'add', '.'); git(f.repo, 'commit', '-m', 'UTF8 B');
    const next = git(f.repo, 'rev-parse', 'HEAD');
    parse(cli('sync', '--cache', f.cache, '--remote', f.repo, '--ref', 'corpus', '--json'));
    for (const cap of [1, 255, 1024, 3071, 3072]) {
      const result = cli('read', '--cache', f.cache, '--snapshot', next, '--id', f.input.documents[0].sections[0].id, '--max-bytes', String(cap), '--json');
      expect(Buffer.byteLength(result.stdout)).toBeLessThanOrEqual(cap);
      if (result.code === 0) {
        const data = JSON.parse(result.stdout);
        expect(result.stdout).not.toContain('\uFFFD'); expect(data.truncated).toBe(true);
      } else if (result.stdout) expect(() => JSON.parse(result.stdout)).not.toThrow();
    }
  });
});
