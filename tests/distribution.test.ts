import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const run = (script: string, args: string[]) => spawnSync(process.execPath, [join(root, 'scripts', script), ...args], { cwd: root, encoding: 'utf8' });

describe('portable skill and CLI distribution', () => {
  it('installs a checksummed bundle outside the checkout, preserves existing installs, and rejects corruption', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'compose-distribution-'));
    try {
      const sharedCliBefore = await stat(join(root, 'dist/cli.js'), { bigint: true });
      const built = run('bundle.mjs', [join(dir, 'releases')]);
      expect(built.status, built.stderr).toBe(0);
      // Packaging runs beside CLI consumers; it must not rewrite their executable.
      expect((await stat(join(root, 'dist/cli.js'), { bigint: true })).mtimeNs).toBe(sharedCliBefore.mtimeNs);
      const { archive } = JSON.parse(built.stdout);
      const installed = run('install.mjs', [archive, join(dir, 'skills')]);
      expect(installed.status, installed.stderr).toBe(0);
      const { skillDir } = JSON.parse(installed.stdout);
      expect(await readFile(join(skillDir, 'SKILL.md'), 'utf8')).toContain('name: compose-reference-context');
      const help = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), '--help'], { cwd: dir, encoding: 'utf8' });
      expect(help.status, help.stderr).toBe(0);
      expect(help.stdout).toContain('search');
      const corpus = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), 'build', '--input', join(root, 'tests/fixtures/knowledge-input.json'), '--out', join(dir, 'corpus'), '--json'], { cwd: dir, encoding: 'utf8' });
      expect(corpus.status, corpus.stderr).toBe(0);
      const corpusDir = join(dir, 'corpus');
      for (const args of [['init', '-b', 'corpus'], ['add', '.'], ['-c', 'user.name=Skill test', '-c', 'user.email=skill@example.invalid', 'commit', '-m', 'Public fixture']]) {
        const committed = spawnSync('git', args, { cwd: corpusDir, encoding: 'utf8' });
        expect(committed.status, committed.stderr).toBe(0);
      }
      const invoke = (...args: string[]) => {
        const response = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), ...args, '--json'], { cwd: dir, encoding: 'utf8' });
        expect(response.status, response.stderr).toBe(0);
        return { data: JSON.parse(response.stdout), bytes: Buffer.byteLength(response.stdout) };
      };
      expect(invoke('route', '--query', 'AndroidView').data.candidates[0].id).toBe('interop');
      // Rewrite only the documented public URL to a local Git fixture; no network is used.
      const rewritten = { ...process.env, GIT_CONFIG_COUNT:'1', GIT_CONFIG_KEY_0:`url.${pathToFileURL(corpusDir).href}.insteadOf`, GIT_CONFIG_VALUE_0:'https://github.com/seungwan-woo/compose-knowledge.git' };
      const defaultCache = join(dir, 'default-cache'), defaultTask = join(dir, 'default-task.json');
      const entry = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), 'begin', '--cache', defaultCache, '--task', defaultTask], {cwd:dir, encoding:'utf8', env:rewritten});
      expect(entry.status, entry.stdout + entry.stderr).toBe(0);
      expect(JSON.parse(entry.stdout).sync.status).toBe('fresh');
      expect(JSON.parse(await readFile(join(defaultCache,'current.json'),'utf8')).remote).toBe('https://github.com/seungwan-woo/compose-knowledge.git');
      const mirrorCache=join(dir,'mirror-cache');
      const mirror=spawnSync(process.execPath,[join(skillDir,'scripts','compose-knowledge.mjs'),'begin','--cache',mirrorCache,'--task',join(dir,'mirror-task.json'),'--remote',corpusDir],{cwd:dir,encoding:'utf8',env:rewritten});
      expect(mirror.status,mirror.stdout + mirror.stderr).toBe(0);
      expect(JSON.parse(await readFile(join(mirrorCache,'current.json'),'utf8')).remote).toBe(corpusDir);
      const offline=spawnSync(process.execPath,[join(skillDir,'scripts','compose-knowledge.mjs'),'begin','--cache',mirrorCache,'--task',join(dir,'offline-task.json'),'--offline'],{cwd:dir,encoding:'utf8',env:rewritten});
      expect(offline.status,offline.stdout + offline.stderr).toBe(0); expect(JSON.parse(offline.stdout).sync.status).toBe('cached');
      const invalid = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), 'begin', '--cache', defaultCache, '--task', join(dir,'invalid-task.json'), '--remote', '-invalid'], {cwd:dir,encoding:'utf8',env:rewritten});
      expect(invalid.status).not.toBe(0); expect(JSON.parse(invalid.stdout).status).toBe('unavailable');
      const legacy = spawnSync(process.execPath, [join(skillDir, 'scripts', 'compose-knowledge.mjs'), 'sync', '--cache', join(dir,'legacy-cache')], {cwd:dir,encoding:'utf8',env:rewritten});
      expect(legacy.status).not.toBe(0); expect(JSON.parse(legacy.stdout).status).toBe('unavailable');
      const cache = join(dir, 'cache');
      const sync = invoke('sync', '--remote', corpusDir, '--cache', cache, '--ref', 'corpus').data;
      expect(sync.status).toBe('fresh');
      const task = join(dir, 'task.json');
      expect(invoke('begin', '--remote', corpusDir, '--cache', cache, '--task', task).data.snapshot).toBe(sync.snapshot);
      expect(JSON.parse(await readFile(join(cache,'current.json'),'utf8')).remote).toBe(corpusDir);
      expect(invoke('lookup', '--task', task, '--query', 'DropdownMenu').data.snapshot).toBe(sync.snapshot);
      const context = ['--cache', cache, '--snapshot', sync.snapshot, '--artifact', 'androidx.compose.material3:material3', '--platform', 'android', '--version', 'unknown'];
      const search = invoke('search', ...context, '--symbol', 'DropdownMenu', '--limit', '3');
      expect(search.data.hits).toEqual(expect.arrayContaining([expect.objectContaining({ id: 'menu-api', versionStatus: 'unknown' })]));
      const read = invoke('read', ...context, '--id', 'menu-api');
      expect(read.data).toMatchObject({ snapshot: sync.snapshot, versionStatus: 'unknown', truncated: false });
      expect(read.data.body).toContain('onDismissRequest');
      expect(search.bytes + read.bytes).toBeLessThanOrEqual(12288);
      expect(invoke('sync', '--remote', corpusDir, '--cache', cache, '--offline').data).toMatchObject({ status: 'cached', snapshot: sync.snapshot });
      expect(run('install.mjs', [archive, join(dir, 'skills')]).status).not.toBe(0);
      await writeFile(archive, 'corrupted archive');
      expect(run('install.mjs', [archive, join(dir, 'another-skills')]).status).not.toBe(0);
    } finally { await rm(dir, { recursive: true, force: true }); }
  }, 30000);
});
