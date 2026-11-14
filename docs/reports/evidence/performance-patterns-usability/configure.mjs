#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const [installation,remote,expectedSha,output,cache,configFile,questionsFile]=process.argv.slice(2);
if(!configFile||!/^[0-9a-f]{40}$/.test(expectedSha??''))throw Error('Usage: node configure.mjs SKILL_DIR REMOTE FULL_SHA OUTPUT CACHE CONFIG_FILE');
const here=path.dirname(fileURLToPath(import.meta.url));
const skill=path.resolve(installation);
fs.writeFileSync(configFile,JSON.stringify({questions:questionsFile?path.resolve(questionsFile):path.join(here,'questions.json'),cli:path.join(skill,'scripts/compose-knowledge.mjs'),cwd:path.dirname(skill),cache:path.resolve(cache),remote,expectedSha,output:path.resolve(output)},null,2)+'\n');
