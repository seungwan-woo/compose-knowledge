import { execFileSync, spawnSync } from 'node:child_process';
import { chmod, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { parse } from 'yaml';
import { afterEach, describe, expect, it } from 'vitest';

const roots: string[] = [];
afterEach(async () => { await Promise.all(roots.splice(0).map(root => rm(root, {recursive:true, force:true}))); });

async function runPublicationStep(header?: string) {
  const root = await mkdtemp(path.join(tmpdir(), 'workflow-auth-test-')); roots.push(root);
  const checkout = path.join(root, 'checkout'), probe = path.join(root, 'probe'), bin = path.join(root, 'bin');
  await Promise.all([checkout, probe, bin].map(dir => mkdir(dir)));
  const env: NodeJS.ProcessEnv = {...process.env, GIT_CONFIG_NOSYSTEM:'1', GIT_CONFIG_GLOBAL:'/dev/null'};
  for (const key of Object.keys(env)) if (/^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+)$/.test(key)) delete env[key];
  for (const dir of [checkout, probe]) execFileSync('git', ['init', '--quiet', dir], {env});
  if (header !== undefined) execFileSync('git', ['-C', checkout, 'config', '--local', 'http.https://github.com/.extraheader', header], {env});
  const observed = path.join(root, 'observed.txt');
  // Replace only the publisher entry point; probe actual Git configuration in a different repo.
  const launcher = path.join(bin, 'node');
  await writeFile(launcher, '#!/bin/sh\ngit -C "$AUTH_PROBE_REPO" config --get http.https://github.com/.extraheader > "$AUTH_PROBE_OUTPUT"\n');
  await chmod(launcher, 0o700);
  const workflow = parse(await readFile('.github/workflows/refresh.yml', 'utf8'));
  const step = workflow.jobs.publish.steps.find((step: {name?: string}) => step.name === 'Validate and publish');
  const result = spawnSync('bash', ['--noprofile', '--norc', '-e', '-o', 'pipefail', '-c', step.run], {
    cwd:checkout, env:{...env, PATH:`${bin}:${env.PATH}`, AUTH_PROBE_REPO:probe, AUTH_PROBE_OUTPUT:observed,
      CORPUS_REMOTE:'https://github.com/example/repo.git', RUNNER_TEMP:root}, encoding:'utf8',
  });
  return {...result, observed:await readFile(observed, 'utf8').catch(() => null)};
}

describe('publication workflow authentication', () => {
  it('passes the checkout credential to Git in the isolated publisher repository without printing it', async () => {
    const header = 'AUTHORIZATION: basic TEST_ONLY_NOT_A_CREDENTIAL';
    const result = await runPublicationStep(header);
    expect(result.status).toBe(0);
    expect(result.stderr).toBe('');
    expect(result.observed?.trim()).toBe(header);
    expect(result.stdout).not.toContain(header);
    expect(result.stderr).not.toContain(header);
  });
  it.each([undefined, ''])('stops before publication when the checkout header is absent or empty: %s', async header => {
    const result = await runPublicationStep(header);
    expect(result.status).not.toBe(0);
    expect(result.observed).toBeNull();
  });
});
