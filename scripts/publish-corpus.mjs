import { appendFile, readFile } from 'node:fs/promises';
import { publishSnapshot } from '../dist/refresh/publish.js';
const args = process.argv.slice(2); const opts = {};
for (let i = 0; i < args.length; i += 2) {
  if (!['--snapshot', '--remote', '--ref', '--report'].includes(args[i]) || !args[i + 1] || opts[args[i]]) throw new Error('Usage: publish-corpus.mjs --snapshot DIR --remote URL [--ref BRANCH]');
  opts[args[i]] = args[i + 1];
}
if (!opts['--snapshot'] || !opts['--remote'] || !opts['--report']) throw new Error('Snapshot, remote and collection report are required');
const report = JSON.parse(await readFile(opts['--report'], 'utf8'));
if (!Object.hasOwn(report, 'baseSnapshot') || (report.baseSnapshot !== null && (typeof report.baseSnapshot !== 'string' || !/^[0-9a-f]{40}$/.test(report.baseSnapshot)))) throw new Error('Invalid collection base snapshot');
const result = await publishSnapshot({ snapshotDir: opts['--snapshot'], remote: opts['--remote'], ref: opts['--ref'], expectedSnapshot: report.baseSnapshot });
console.log(JSON.stringify(result));
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, `\nPublished corpus: ${result.changed ? 'updated' : 'unchanged'} at \`${result.snapshot}\`.\n`);
