#!/usr/bin/env node
import { lstat, mkdir, mkdtemp, readFile, rename, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

let stage;
try {
  if (process.argv.length !== 4) throw new Error('Usage: node scripts/install.mjs ARCHIVE SKILLS_DIRECTORY');
  const archive = resolve(process.argv[2]); const parent = resolve(process.argv[3]);
  const expected = (await readFile(archive + '.sha256', 'utf8')).trim().split(/\s+/)[0];
  const digest = createHash('sha256').update(await readFile(archive)).digest('hex');
  if (!/^[0-9a-f]{64}$/.test(expected || '') || expected !== digest) throw new Error('Bundle SHA256 verification failed');
  const names = execFileSync('tar', ['-tzf', archive], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }).trim().split('\n');
  const listing = execFileSync('tar', ['-tvzf', archive], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
  if (listing.trim().split('\n').some(line => !['-', 'd'].includes(line[0]))) throw new Error('Bundle contains links or special files');
  if (names.some(name => !name.startsWith('compose-reference-context/') || name.includes('\\') || /[\x00-\x1f\x7f]/.test(name) || name.split('/').some(part => part === '..' || part === '.'))) throw new Error('Unsafe bundle path');
  await mkdir(parent, { recursive: true });
  const target = join(parent, 'compose-reference-context');
  try { await lstat(target); throw new Error('Skill already exists; preserve it and choose another directory for this version'); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  stage = await mkdtemp(join(parent, '.compose-install-'));
  execFileSync('tar', ['-xzf', archive, '-C', stage, '--no-same-owner', '--no-same-permissions']);
  const skill = join(stage, 'compose-reference-context');
  const pkg = JSON.parse(await readFile(join(skill, 'runtime/package.json'), 'utf8'));
  const text = await readFile(join(skill, 'SKILL.md'), 'utf8');
  if (!text.startsWith('---\nname: compose-reference-context\n') || !pkg.version || pkg.type !== 'module') throw new Error('Invalid skill bundle');
  await lstat(join(skill, 'scripts/compose-knowledge.mjs'));
  await lstat(join(skill, 'runtime/dist/cli.js'));
  await rename(skill, target);
  console.log(JSON.stringify({ skillDir: target, version: pkg.version, sha256: digest }));
} catch (error) { console.error(error.message); process.exitCode = 1; }
finally { if (stage) await rm(stage, { recursive: true, force: true }); }
