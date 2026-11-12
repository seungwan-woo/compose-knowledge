#!/usr/bin/env node
import { mkdir, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
function run(bin, args, cwd = root) {
  const result = spawnSync(bin, args, { cwd, env: process.env, encoding: 'utf8' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
  return result.stdout.trim();
}
try {
  const parent = resolve(process.argv[2] || join(root, '.cache/demo'));
  await mkdir(parent, { recursive: true });
  const dir = await mkdtemp(join(parent, 'run-'));
  const remote = join(dir, 'corpus'); const cache = join(dir, 'cache');
  run(process.execPath, [join(root, 'dist/cli.js'), 'build', '--input', join(root, 'tests/fixtures/knowledge-input.json'), '--out', remote, '--json']);
  run('git', ['init', '-b', 'corpus'], remote);
  run('git', ['add', '.'], remote);
  run('git', ['-c', 'user.name=Compose fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-m', 'Public source demonstration snapshot'], remote);
  const synced = JSON.parse(run(process.execPath, [join(root, 'dist/cli.js'), 'sync', '--remote', remote, '--cache', cache, '--ref', 'corpus', '--json']));
  const config = { remote, cache, ...synced, exampleVersions: { material3: '1.3.2', ui: '1.7.8' }, warning: 'Demonstration corpus; not target-project version detection or live publication.' };
  await writeFile(join(parent, 'latest.json'), JSON.stringify(config, null, 2) + '\n');
  console.log(JSON.stringify(config, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
