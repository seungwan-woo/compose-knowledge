import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { afterAll, beforeAll, expect, it } from 'vitest';

const root = resolve('.'); let tmp: string, corpus: string, cache: string, task: string;
const cli = (...args: string[]) => spawnSync(process.execPath, [join(root, 'dist/cli.js'), ...args], {encoding:'utf8'});
const git = (...args: string[]) => execFileSync('git', args, {cwd: corpus, encoding:'utf8'}).trim();
beforeAll(() => {
 tmp = mkdtempSync(join(tmpdir(), 'review-')); corpus = join(tmp, 'corpus'); cache = join(tmp, 'cache'); task = join(tmp, 'task.json');
 expect(cli('build','--input',join(root,'tests/fixtures/knowledge-input.json'),'--out',corpus).status).toBe(0);
 git('init','-q','-b','corpus'); git('config','user.name','Test'); git('config','user.email','test@example.com'); git('add','.'); git('commit','-qm','fixture');
});
afterAll(() => rmSync(tmp,{recursive:true,force:true}));
it('routes explicit aliases and leaves unknown wording unresolved', () => {
 const alias = cli('route','--query','AndroidView'); expect(alias.status, alias.stderr).toBe(0); expect(JSON.parse(alias.stdout).candidates[0].id).toBe('interop');
 const unknown = cli('route','--query','qzxunrecognized'); expect(JSON.parse(unknown.stdout).candidates).toEqual([]);
});
it('pins a task and bounds attempts and complete evidence packs', () => {
 const begin = cli('begin','--cache',cache,'--task',task,'--remote',corpus); expect(begin.status,begin.stderr).toBe(0);
 const pin = JSON.parse(begin.stdout).snapshot; expect(pin).toBe(git('rev-parse','HEAD'));
 expect(cli('begin','--cache',cache,'--task',task,'--offline').status).not.toBe(0);
 const result = cli('lookup','--task',task,'--query','DropdownMenu'); expect(result.status,result.stderr).toBe(0);
 const pack = JSON.parse(result.stdout); expect(pack.snapshot).toBe(pin); expect(pack.sections.length).toBeGreaterThan(0); expect(pack.sections[0].versionStatus).toBe('unknown'); expect(pack.sufficiency).not.toBe('sufficient'); expect(Buffer.byteLength(result.stdout)).toBeLessThanOrEqual(6144);
 expect(cli('lookup','--task',task,'--query','qzxunrecognized').status).toBe(0);
 expect(cli('lookup','--task',task,'--query','DropdownMenu').status).not.toBe(0);
 expect(JSON.parse(readFileSync(task,'utf8')).ledger.attempts).toBe(2);
});
it('refuses a locked or corrupted task before retrieval', () => {
 const locked = join(tmp,'locked.json'); writeFileSync(locked,'{}'); writeFileSync(locked+'.lock','');
 expect(cli('lookup','--task',locked,'--query','DropdownMenu').status).not.toBe(0);
 rmSync(locked+'.lock'); expect(cli('lookup','--task',locked,'--query','DropdownMenu').status).not.toBe(0);
});
it('returns an explicit gap when the entire selected evidence cannot fit', () => {
 const file = join(tmp,'small.json'); expect(cli('begin','--cache',cache,'--task',file,'--offline').status).toBe(0);
 const response = cli('lookup','--task',file,'--query','DropdownMenu','--max-bytes','500'); expect(response.status,response.stderr).toBe(0);
 const pack = JSON.parse(response.stdout); expect(pack.transmission).toBe('gap'); expect(pack.sections).toEqual([]); expect(Buffer.byteLength(response.stdout)).toBeLessThanOrEqual(500);
 expect(JSON.parse(readFileSync(file,'utf8')).ledger.sections).toBe(0);
});
it('keeps the original snapshot after a newer sync', () => {
 const file = join(tmp,'pinned.json'); const begin = cli('begin','--cache',cache,'--task',file,'--offline'); const pin = JSON.parse(begin.stdout).snapshot;
 git('commit','--allow-empty','-qm','newer'); expect(cli('sync','--cache',cache,'--remote',corpus).status).toBe(0);
 const response = cli('lookup','--task',file,'--query','DropdownMenu'); expect(response.status,response.stderr).toBe(0); expect(JSON.parse(response.stdout).snapshot).toBe(pin);
});
it('reports ambiguous route aliases without choosing a single route', () => {
 const result = cli('route','--query','AndroidView LaunchedEffect'); expect(result.status,result.stderr).toBe(0);
 expect(JSON.parse(result.stdout).candidates.map((c:{id:string})=>c.id)).toEqual(['effects','interop']);
});
it('does not spend or retrieve when a valid task is locked', () => {
 const file = join(tmp,'collision.json'); expect(cli('begin','--cache',cache,'--task',file,'--offline').status).toBe(0);
 const before = readFileSync(file,'utf8'); writeFileSync(file+'.lock','');
 const result = cli('lookup','--task',file,'--query','DropdownMenu'); expect(result.status).not.toBe(0); expect(result.stdout).toBe(''); expect(readFileSync(file,'utf8')).toBe(before);
 rmSync(file+'.lock');
});
