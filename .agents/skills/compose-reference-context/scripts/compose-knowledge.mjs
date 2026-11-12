#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const bundled = resolve(import.meta.dirname, '../runtime/dist/cli.js');
const checkout = resolve(import.meta.dirname, '../../../../dist/cli.js');
const cli = existsSync(bundled) ? bundled : checkout;
if (!existsSync(cli)) {
  console.error('Compose knowledge CLI is missing. Build the checkout or install a complete versioned bundle.');
  process.exitCode = 1;
} else {
  const child = spawnSync(process.execPath, [cli, ...process.argv.slice(2)], { stdio: 'inherit', env: process.env });
  if (child.error) { console.error(child.error.message); process.exitCode = 1; }
  else process.exitCode = child.status ?? 1;
}
