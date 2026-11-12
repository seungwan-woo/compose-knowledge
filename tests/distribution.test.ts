import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

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
      const cache = join(dir, 'cache');
      const sync = invoke('sync', '--remote', corpusDir, '--cache', cache, '--ref', 'corpus').data;
      expect(sync.status).toBe('fresh');
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
