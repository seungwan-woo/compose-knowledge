import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

/** Finish the shared CLI build before any parallel test worker can consume it. */
export default function setup(): void {
  execFileSync('npm', ['run', 'build'], { cwd: resolve(import.meta.dirname, '..'), stdio: 'pipe' });
}
