#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const config = JSON.parse(await readFile(join(root, '.cache/demo/latest.json'), 'utf8'));
const cli = join(root, 'dist/cli.js');
const run = (...args) => JSON.parse(execFileSync(process.execPath, [cli, ...args], { encoding: 'utf8' }));
const cached = run('sync', '--cache', config.cache, '--offline', '--json');
if (cached.status !== 'cached' || cached.snapshot !== config.snapshot) throw new Error('Offline demonstration cache is not ready');
const hit = run('search', '--cache', config.cache, '--snapshot', cached.snapshot, '--artifact', 'androidx.compose.material3:material3', '--version', '1.3.2', '--platform', 'android', '--symbol', 'DropdownMenu', '--json');
if (!hit.hits.some(item => item.id === 'menu-api' && item.versionStatus === 'match')) throw new Error('Representative knowledge lookup failed');
const read = run('read', '--cache', config.cache, '--snapshot', cached.snapshot, '--artifact', 'androidx.compose.material3:material3', '--version', '1.3.2', '--platform', 'android', '--id', 'menu-api', '--json');
if (!read.body || !read.sources.length || read.snapshot !== hit.snapshot || read.versionStatus !== 'match') throw new Error('Representative knowledge read failed');
console.log(JSON.stringify({ status: 'ready', snapshot: cached.snapshot, workflow: 'offline public-fixture knowledge lookup', servicesRequired: false }));
