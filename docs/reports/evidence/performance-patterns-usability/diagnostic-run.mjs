#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const [action, configFile, ...rest] = process.argv.slice(2);
if (!action || !configFile) throw Error('Usage: node run.mjs init|start|refine|read CONFIG [question-id [section-id [max-bytes]]]');
const cfg=JSON.parse(fs.readFileSync(configFile,'utf8'));
const qs=JSON.parse(fs.readFileSync(cfg.questions,'utf8'));
const call=(args,out)=>{ const r=spawnSync(process.execPath,[cfg.cli,...args],{cwd:cfg.cwd,encoding:'utf8',maxBuffer:1024*1024});fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,r.stdout??'');fs.writeFileSync(out+'.stderr',r.stderr??'');const json=JSON.parse(r.stdout);return {json,bytes:Buffer.byteLength(r.stdout),exit:r.status,args};};
const root=path.resolve(cfg.output); fs.mkdirSync(root,{recursive:true});
const save=(q,l)=>fs.writeFileSync(path.join(root,q.id,'ledger.json'),JSON.stringify(l,null,2)+'\n');
for (const q of qs.filter(q=>!rest[0]||q.id===rest[0])) {
 const dir=path.join(root,q.id);fs.mkdirSync(dir,{recursive:true});
 const file=path.join(dir,'ledger.json');
 const common=l=>['--cache',cfg.cache,'--snapshot',l.snapshot,'--platform','android','--artifact',q.artifact,'--version','unknown'];
 if(action==='init'||action==='start') {
  if(fs.existsSync(file)) throw Error(`Existing ledger ${file}`);
  const sync=call(['sync','--remote',cfg.remote,'--ref','corpus','--cache',cfg.cache,'--json'],path.join(dir,'sync.json'));
  if(!['fresh','cached'].includes(sync.json.status)||!sync.json.snapshot) throw Error(`No snapshot ${q.id}`);
  if(cfg.expectedSha&&sync.json.snapshot!==cfg.expectedSha)throw Error('Unexpected snapshot');
  const l={question:q,snapshot:sync.json.snapshot,sync,context:{module:'unknown',variant:'unknown',versions:'unknown',reason:'Private target repository unavailable'},calls:[],totalBytes:0,reads:0};
  const r=call(['search',...common(l),'--symbol',q.symbol,'--limit','2','--max-bytes','2048','--json'],path.join(dir,'search-1.json'));
  l.calls.push({kind:'search',file:'search-1.json',...r});l.totalBytes+=r.bytes;save(q,l);console.log(q.id,JSON.stringify(r.json));
 } else {
  const l=JSON.parse(fs.readFileSync(file,'utf8'));
  if(action==='lookup') {
   if(l.calls.length)throw Error('Lookup already used');
   const r=call(['search',...common(l),...(q.symbol?['--symbol',q.symbol]:['--query',q.query]),'--limit','2','--max-bytes','2048','--json'],path.join(dir,'search-1.json'));
   l.calls.push({kind:'search',file:'search-1.json',...r});l.totalBytes+=r.bytes;save(q,l);console.log(q.id,JSON.stringify(r.json));
  } else if(action==='refine') {
   if(l.calls.filter(c=>c.kind==='search').length!==1)throw Error('Refinement already used');
   if(l.totalBytes+2048>12288)throw Error('Budget exceeded');
   const r=call(['search',...common(l),'--query',q.query,'--limit','2','--max-bytes','2048','--json'],path.join(dir,'search-2.json'));
   l.calls.push({kind:'search',file:'search-2.json',...r});l.totalBytes+=r.bytes;save(q,l);console.log(q.id,JSON.stringify(r.json));
  } else if(action==='read') {
   const id=rest[1],max=Number(rest[2]??Math.min(3072,12288-l.totalBytes));
   if(!id||l.reads>=3||max<256||max>3072||l.totalBytes+max>12288)throw Error('Read budget exceeded/invalid');
   const hits=l.calls.filter(c=>c.kind==='search').flatMap(c=>c.json.hits??[]);
   const allowed=new Set(hits.flatMap(h=>[h.id,...(h.relatedIds??[])]));
   if(!allowed.has(id))throw Error('ID is not direct or one hop from direct hit: '+id);
   const name=`read-${l.reads+1}.json`;
   const r=call(['read',...common(l),'--id',id,'--max-bytes',String(max),'--json'],path.join(dir,name));
   l.calls.push({kind:'read',file:name,id,...r});l.totalBytes+=r.bytes;l.reads++;save(q,l);console.log(q.id,JSON.stringify(r.json));
  } else throw Error('Unknown action');
 }
}
