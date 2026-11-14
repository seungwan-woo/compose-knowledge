import { cp, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { beforeAll, afterAll, expect, it } from 'vitest';

const root=process.cwd(), hash=(s:string)=>createHash('sha256').update(s).digest('hex');
let dir:string, runtime:any, cache:string, sync:any;
const section=(id:string,version='1.0')=>({id,title:id,body:id+' body',aliases:[],requires:[{artifact:'test:runtime',version}],relatedIds:[],sources:[{id:id+'-source',kind:'guide',resource:'https://example.invalid/#'+id,revision:'a'.repeat(40),sha256:hash('excerpt'),license:'Apache-2.0',excerpt:'excerpt'}]});
const doc=(id:string,artifact:string,fqn:string,sections:any[])=>({id,artifact,fqn,title:id,description:'Generic fixture',tags:[],sections});
const query={artifact:'test:runtime',symbol:'Card'};
async function lookup(name:string,cardIds:string[],queries:unknown[]=[query]) {
 await writeFile(path.join(dir,'config/review-routes.json'),JSON.stringify({schemaVersion:1,routes:[{id:'route',title:'Route',keywords:['card'],queries,cardIds,relatedRouteIds:[]}]}));
 const file=path.join(dir,name);await runtime.createTask(file,cache,sync,[{artifact:'test:runtime',version:'1.0'}]);
 return JSON.parse(await runtime.lookup(file,{route:'route'},12288));
}
beforeAll(async()=>{
 dir=await mkdtemp(path.join(tmpdir(),'route-preference-'));await cp(path.join(root,'dist'),path.join(dir,'dist'),{recursive:true});await cp(path.join(root,'src'),path.join(dir,'src'),{recursive:true});await cp(path.join(root,'config'),path.join(dir,'config'),{recursive:true});await writeFile(path.join(dir,'package.json'),'{"type":"module"}');await symlink(path.join(root,'node_modules'),path.join(dir,'node_modules'));
 await writeFile(path.join(dir,'config/review-contracts.json'),'{"schemaVersion":1,"contracts":[]}');
 runtime=await import(pathToFileURL(path.join(dir,'dist/review/runtime.js')).href);const {buildSnapshot}=await import(pathToFileURL(path.join(dir,'dist/knowledge/build.js')).href);const {syncSnapshot}=await import(pathToFileURL(path.join(dir,'dist/io/snapshot.js')).href);
 const corpus=path.join(dir,'corpus');await buildSnapshot({schemaVersion:1,documents:[doc('main','test:runtime','demo.Card',[section('a-generic'),section('z-preferred'),section('different-version','2.0')]),doc('foreign','test:other','demo.Card',[section('wrong-artifact')]),doc('symbol','test:runtime','demo.Other',[section('wrong-symbol')])]},corpus);
 for(const args of [['init','-q','-b','corpus'],['add','.'],['-c','user.name=Test','-c','user.email=t@example.invalid','commit','-qm','fixture']])execFileSync('git',args,{cwd:corpus});
 cache=path.join(dir,'cache');sync=await syncSnapshot({cacheDir:cache,remote:corpus});
});
afterAll(async()=>rm(dir,{recursive:true,force:true}));
it('prefers an eligible route card over a higher-ranked generic hit',async()=>{const pack=await lookup('preferred',['z-preferred']);expect(pack.sections[0].id).toBe('z-preferred');});
it('falls back when preferred cards fail artifact, symbol or version filtering',async()=>{for(const id of ['wrong-artifact','wrong-symbol','different-version']){const pack=await lookup('ineligible-'+id,[id]);expect(pack.sections[0].id).toBe('a-generic');}});
it('falls back when a preferred card is absent',async()=>{const pack=await lookup('absent',['missing']);expect(pack.sections[0].id).toBe('a-generic');});
it('uses the preferred eligible card on a second query alternative',async()=>{const pack=await lookup('alternative',['z-preferred'],[{artifact:'test:runtime',symbol:'Missing'},query]);expect(pack.sections[0].id).toBe('z-preferred');});
