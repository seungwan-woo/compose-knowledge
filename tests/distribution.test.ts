import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const run = (script: string, args: string[]) => spawnSync(process.execPath, [join(root, 'scripts', script), ...args], { cwd: root, encoding: 'utf8' });

describe('portable skill and CLI distribution', () => {
  it('installs a checksummed bundle outside the checkout, preserves existing installs, and rejects corruption', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'compose-distribution-'));
    try {
      const built = run('bundle.mjs', [join(dir, 'releases')]);
      expect(built.status, built.stderr).toBe(0);
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
      expect(run('install.mjs', [archive, join(dir, 'skills')]).status).not.toBe(0);
      await writeFile(archive, 'corrupted archive');
      expect(run('install.mjs', [archive, join(dir, 'another-skills')]).status).not.toBe(0);
    } finally { await rm(dir, { recursive: true, force: true }); }
  }, 30000);
});
