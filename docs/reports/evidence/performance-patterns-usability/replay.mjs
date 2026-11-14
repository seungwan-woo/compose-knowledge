#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';import {fileURLToPath} from 'node:url';
const [config,selectionFile]=process.argv.slice(2);if(!selectionFile)throw Error('Usage: node replay.mjs CONFIG SELECTIONS_JSON');
const here=path.dirname(fileURLToPath(import.meta.url));
const run=(file,args)=>{const r=spawnSync(process.execPath,[path.join(here,file),...args],{stdio:'inherit'});if(r.status!==0)process.exit(r.status??1);};
run('run.mjs',['start',config]);run('run.mjs',['refine',config]);
for(const [q,ids]of Object.entries(JSON.parse(fs.readFileSync(selectionFile,'utf8'))))for(const id of ids)run('run.mjs',['read',config,q,id]);
run('verify.mjs',[config]);
