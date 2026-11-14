#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const cfg=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const qs=JSON.parse(fs.readFileSync(cfg.questions,'utf8'));
let failures=[];const result=[];
for(const q of qs){
 const dir=path.join(cfg.output,q.id),l=JSON.parse(fs.readFileSync(path.join(dir,'ledger.json'),'utf8'));
 let sum=0,reads=0;const allowed=new Set();const outputs=[];
 for(const c of l.calls){
  const raw=fs.readFileSync(path.join(dir,c.file));const json=JSON.parse(raw);
  if(c.bytes!==raw.byteLength)failures.push(q.id+' stored bytes mismatch');
  const max=Number(c.args[c.args.indexOf('--max-bytes')+1]);
  if(sum+max>12288)failures.push(q.id+' maximum was not reserved');
  sum+=raw.byteLength;
  if(c.kind==='search')for(const h of json.hits??[])for(const id of [h.id,...h.relatedIds??[]])allowed.add(id);
  else {reads++;if(!allowed.has(c.id))failures.push(q.id+' illegal hop');}
  outputs.push({file:c.file,kind:c.kind,id:c.id,bytes:raw.byteLength,maxBytes:max,truncated:json.truncated,sha256:crypto.createHash('sha256').update(raw).digest('hex'),sources:json.sources??[]});
 }
 if(sum>12288||reads>3||sum!==l.totalBytes||reads!==l.reads)failures.push(q.id+' budget/count mismatch');
 if(l.snapshot!==cfg.expectedSha||l.sync.json.snapshot!==l.snapshot)failures.push(q.id+' pin mismatch');
 if(l.sync.json.status!=='fresh')failures.push(q.id+' freshness not verified');
 result.push({id:q.id,status:l.sync.json.status,snapshot:l.snapshot,checkedAt:l.sync.json.checkedAt,publishedAt:l.sync.json.publishedAt,totalBytes:sum,reads,outputs});
}
const report={failures,questions:result};fs.writeFileSync(path.join(cfg.output,'verification.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({questions:result.length,failures,maxBytes:Math.max(...result.map(q=>q.totalBytes)),maxReads:Math.max(...result.map(q=>q.reads))}));if(failures.length)process.exitCode=1;
