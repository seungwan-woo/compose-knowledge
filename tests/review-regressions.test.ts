import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { beforeAll, afterAll, beforeEach, expect, it } from 'vitest';
const root=process.cwd(), hash=(s:string)=>createHash('sha256').update(s).digest('hex');
let dir:string, runtime:any, cache:string, sync:any, route:any, contract:any, sections:any[];
const catalog=async(name:string,data:unknown)=>writeFile(path.join(dir,'config',name),JSON.stringify(data));
const routes=async(r:any)=>catalog('review-routes.json',{schemaVersion:1,routes:[r]});
const task=async(name:string,versions:any[]=[])=>{const f=path.join(dir,name);await runtime.createTask(f,cache,sync,versions);return f;};
beforeAll(async()=>{
 dir=await mkdtemp(path.join(tmpdir(),'review-regression-')); await cp(path.join(root,'dist'),path.join(dir,'dist'),{recursive:true}); await cp(path.join(root,'src'),path.join(dir,'src'),{recursive:true}); await cp(path.join(root,'config'),path.join(dir,'config'),{recursive:true}); await writeFile(path.join(dir,'package.json'),'{"type":"module"}'); await symlink(path.join(root,'node_modules'),path.join(dir,'node_modules'));
 runtime=await import(pathToFileURL(path.join(dir,'dist/review/runtime.js')).href);
 const {buildSnapshot}=await import(pathToFileURL(path.join(dir,'dist/knowledge/build.js')).href); const {syncSnapshot}=await import(pathToFileURL(path.join(dir,'dist/io/snapshot.js')).href);
 sections=['card','evidence-a','evidence-b'].map((id,i)=>({id,title:id,body:i===1?'initial evidence':id+' body',aliases:[],requires:[{artifact:'test:runtime',version:i===2?'2.0.0':'1.0.0'}],relatedIds:i===0?['evidence-a','evidence-b']:[],sources:[{id:'source-'+i,kind:'guide',resource:'https://example.invalid/public#'+id,revision:'a'.repeat(40),sha256:hash('excerpt '+i),license:'Apache-2.0',excerpt:'excerpt '+i}]}));
 sections[1].sources.push(sections[0].sources[0]);
 sections.push({id:'prototype-source',title:'Prototype source',body:'prototype-only-marker',aliases:[],requires:[{artifact:'test:runtime',version:null}],relatedIds:[],sources:[{...sections[0].sources[0],id:'constructor'}]});
 sections.push({id:'large',title:'Large',body:'LongEvidence '+ 'x'.repeat(7400),aliases:[],requires:[{artifact:'test:runtime',version:null}],relatedIds:[],sources:[sections[0].sources[0]]});
 const corpus=path.join(dir,'corpus'); await buildSnapshot({schemaVersion:1,documents:[{id:'doc',artifact:'test:runtime',fqn:'demo.Card',title:'Test',description:'Fixture',tags:[],sections}]},corpus);
 for(const args of [['init','-q','-b','corpus'],['add','.'],['-c','user.name=Test','-c','user.email=t@example.invalid','commit','-qm','fixture']])execFileSync('git',args,{cwd:corpus}); cache=path.join(dir,'cache'); sync=await syncSnapshot({cacheDir:cache,remote:corpus});
 route={id:'test',title:'Test',keywords:['card'],queries:[{artifact:'test:runtime',symbol:'Card'}],cardIds:['card'],relatedRouteIds:[]}; contract={id:'claim',claim:'Generic claim',cardId:'card',cardSha256:hash(sections[0].body),evidence:sections.slice(1,3).map(s=>({id:s.id,sha256:hash(s.body)}))};
});
beforeEach(async()=>{await routes(route);await catalog('review-contracts.json',{schemaVersion:1,contracts:[contract]});});
afterAll(async()=>rm(dir,{recursive:true,force:true}));
it('rejects route query version injection',async()=>{await routes({...route,queries:[{...route.queries[0],version:'1.0.0'}]});await expect(runtime.lookup(await task('injected'),{route:'test'},12288)).rejects.toThrow(/route/i);});
it('reports required sections that exceed the remaining section allowance',async()=>{const f=await task('limited'); await runtime.lookup(f,{query:'initial'},12288); const p=JSON.parse(await runtime.lookup(f,{route:'test'},12288)); expect(p.transmission).toBe('gap'); expect(JSON.stringify(p.gaps)).toContain('evidence-b'); expect(p.sections).toEqual([]);});
it('reports failed required version reads without silently transmitting a partial pack',async()=>{const f=await task('different',[{artifact:'test:runtime',version:'1.0.0'}]);const p=JSON.parse(await runtime.lookup(f,{route:'test'},12288));expect(p.transmission).toBe('gap');expect(JSON.stringify(p.gaps)).toContain('evidence-b');});
it('preserves per-section source associations and supports reviewed unknown evidence',async()=>{const p=JSON.parse(await runtime.lookup(await task('unknown'),{route:'test'},12288));expect(p.sufficiency).toBe('sufficient');expect(p.sections.map((s:any)=>s.versionStatus)).toEqual(['unknown','unknown','unknown']);expect(p.sections.map((s:any)=>s.sourceIds)).toEqual([['source-0'],['source-1','source-0'],['source-2']]);});
it('tries the second route query in the same attempt',async()=>{await routes({...route,queries:[{artifact:'test:runtime',symbol:'Missing'},route.queries[0]]});const p=JSON.parse(await runtime.lookup(await task('alternative'),{route:'test'},12288));expect(p.sections[0].id).toBe('card');});
it('rejects self-referential and duplicate evidence descriptors',async()=>{for(const evidence of [[{id:'card',sha256:contract.cardSha256}],[contract.evidence[0],contract.evidence[0]]]) {await catalog('review-contracts.json',{schemaVersion:1,contracts:[{...contract,evidence}]});await expect(runtime.lookup(await task('bad'+evidence.length),{route:'test'},12288)).rejects.toThrow(/contract/i);}});
it('reports a one-hop exclusion as a gap',async()=>{await catalog('review-contracts.json',{schemaVersion:1,contracts:[{...contract,evidence:[{id:'other',sha256:hash('other')}]}]});const p=JSON.parse(await runtime.lookup(await task('hop'),{route:'test'},12288));expect(p.transmission).toBe('gap');expect(JSON.stringify(p.gaps)).toContain('other');});

it('defaults to the remaining aggregate allowance for a complete large pack',async()=>{
 const f=await task('large-task'); const run=(...args:string[])=>spawnSync(process.execPath,[path.join(dir,'dist/cli.js'),...args],{encoding:'utf8'});
 const first=run('lookup','--task',f,'--query','LongEvidence');expect(first.status,first.stderr).toBe(0);expect(Buffer.byteLength(first.stdout)).toBeGreaterThan(6144);expect(JSON.parse(first.stdout).transmission).toBe('complete');
 const second=run('lookup','--task',f,'--query','initial');expect(second.status,second.stderr).toBe(0);expect(Buffer.byteLength(first.stdout)+Buffer.byteLength(second.stdout)).toBeLessThanOrEqual(12288);
});
it('never erases a preexisting section gap when the gap envelope exceeds the byte cap',async()=>{
 const prepare=async(name:string)=>{const f=await task(name);await runtime.lookup(f,{query:'initial'},12288);return f;};
 const normal=JSON.parse(await runtime.lookup(await prepare('gap-normal'),{route:'test'},12288));
 const reference=await prepare('gap-reference');const full=await runtime.lookup(reference,{route:'test'},12288);const cap=Buffer.byteLength(full)-1;
 expect(normal.transmission).toBe('gap');expect(normal.gaps[0].id).toBe('evidence-b');
 const file=await prepare('gap-small');const before=JSON.parse(await readFile(file,'utf8'));
 let raw:string|undefined; let failure:unknown;
 try {raw=await runtime.lookup(file,{route:'test'},cap);} catch(error) {failure=error;}
 if (raw !== undefined) {const result=JSON.parse(raw);expect(result.transmission).toBe('gap');expect(result.gaps.length).toBeGreaterThan(0);expect(Buffer.byteLength(raw)).toBeLessThanOrEqual(cap);}
 else expect((failure as Error).message).toMatch(/byte budget/i);
 const after=JSON.parse(await readFile(file,'utf8'));expect(after.ledger.attempts).toBe(2);expect(after.ledger.sections).toBe(before.ledger.sections);expect(after.ledger.bytes).toBe(before.ledger.bytes+(raw ? Buffer.byteLength(raw) : 0));
});
it('supports prototype-named canonical source IDs with correct associations',async()=>{
 const p=JSON.parse(await runtime.lookup(await task('prototype'),{query:'prototype-only-marker'},12288));expect(p.sections[0].sourceIds).toEqual(['constructor']);expect(p.sources.constructor.id).toBe('constructor');
});
it('rejects corrupted sync status types before spending or retrieving',async()=>{
 for (const [i,status] of [[0,['fresh']],[1,42],[2,{value:'fresh'}]] as const) {
  const file=await task('status-'+i);const state=JSON.parse(await readFile(file,'utf8'));state.sync.status=status;const corrupted=JSON.stringify(state)+'\n';await writeFile(file,corrupted);
  await expect(runtime.lookup(file,{query:'initial'},12288)).rejects.toThrow(/task context/i);expect(await readFile(file,'utf8')).toBe(corrupted);
 }
});
