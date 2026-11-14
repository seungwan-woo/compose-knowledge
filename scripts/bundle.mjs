#!/usr/bin/env node
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = resolve(import.meta.dirname, '..');
const output = resolve(process.argv[2] || join(root, '.cache/distribution'));
let temp;
try {
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
  await mkdir(output, { recursive: true });
  temp = await mkdtemp(join(tmpdir(), 'compose-bundle-'));
  const skill = join(temp, 'compose-reference-context');
  await cp(join(root, '.agents/skills/compose-reference-context'), skill, { recursive: true });
  const runtime = join(skill, 'runtime');
  await mkdir(join(runtime, 'node_modules'), { recursive: true });
  // Compile into this bundle's private staging tree; concurrent CLI readers use dist/.
  execFileSync('npm', ['run', 'build', '--', '--outDir', join(runtime, 'dist')], { cwd: root, stdio: 'pipe' });
  await mkdir(join(runtime, 'config'), { recursive: true });
  for (const name of ['review-routes.json', 'review-contracts.json', 'contract-spans.json']) await cp(join(root, 'config', name), join(runtime, 'config', name));
  await cp(join(root, 'node_modules/yaml'), join(runtime, 'node_modules/yaml'), { recursive: true });
  await writeFile(join(runtime, 'package.json'), JSON.stringify({ name: pkg.name, version: pkg.version, private: true, type: 'module', engines: pkg.engines }) + '\n');
  await mkdir(join(skill, 'references'), { recursive: true });
  await cp(join(root, 'tests/fixtures/upstream'), join(skill, 'references/upstream'), { recursive: true });
  await cp(join(root, 'tests/fixtures/knowledge-input.json'), join(skill, 'references/knowledge-input.json'));
  const archive = join(output, `compose-reference-context-${pkg.version}.tar.gz`);
  execFileSync('tar', ['-czf', archive, '-C', temp, 'compose-reference-context']);
  const sha256 = createHash('sha256').update(await readFile(archive)).digest('hex');
  await writeFile(archive + '.sha256', `${sha256}  compose-reference-context-${pkg.version}.tar.gz\n`);
  console.log(JSON.stringify({ version: pkg.version, archive, sha256 }));
} catch (error) { console.error(error.message); process.exitCode = 1; }
finally { if (temp) await rm(temp, { recursive: true, force: true }); }
