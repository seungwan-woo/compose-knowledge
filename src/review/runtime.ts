import { createHash, randomUUID } from 'node:crypto';
import { open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import type { ArtifactVersion, SearchQuery, SyncResult } from '../domain/types.js';
import { getVersionStatus } from '../domain/version.js';
import { validateCachedSnapshot } from '../io/snapshot.js';
import { readSection, searchIndex } from '../retrieval/search.js';

interface Route { id:string; title:string; keywords:string[]; queries:SearchQuery[]; cardIds:string[]; relatedRouteIds:string[] }
interface Descriptor { id:string; claim:string; cardId:string; cardSha256:string; evidence:{id:string;sha256:string}[] }
interface Task { schemaVersion:1; cache:string; snapshot:string; sync:SyncResult; versions:ArtifactVersion[]; ledger:{bytes:number; sections:number; attempts:number} }
const digest = (s:string) => createHash('sha256').update(s).digest('hex');
const config = async (name:string) => JSON.parse(await readFile(fileURLToPath(new URL(`../../config/${name}`, import.meta.url)), 'utf8')) as unknown;
const idPattern = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const sha = /^[a-f0-9]{64}$/;
export async function routes():Promise<Route[]> {
 const value = await config('review-routes.json') as {schemaVersion:number;routes:Route[]};
 if (value.schemaVersion !== 1 || !Array.isArray(value.routes)) throw new Error('Invalid route catalog');
 const ids = new Set<string>();
 for (const r of value.routes) {
  if (!r || !idPattern.test(r.id) || ids.has(r.id) || typeof r.title !== 'string' || !Array.isArray(r.keywords) || !r.keywords.length || r.keywords.some(x => typeof x !== 'string' || !x.trim()) || !Array.isArray(r.queries) || !r.queries.length || r.queries.length > 2 || r.queries.some(q => !q || typeof q.artifact !== 'string' || Boolean(q.query) === Boolean(q.symbol)) || !Array.isArray(r.cardIds) || !Array.isArray(r.relatedRouteIds)) throw new Error('Invalid route');
  ids.add(r.id);
 }
 if (value.routes.some(r => r.relatedRouteIds.some(id => !ids.has(id)) || r.cardIds.some(id => !idPattern.test(id)))) throw new Error('Invalid route references');
 return value.routes;
}
export function suggest(query:string, catalog:Route[]) {
 const text = query.toLocaleLowerCase();
 const candidates = catalog.map(r => ({id:r.id,title:r.title,matchedTerms:r.keywords.filter(k => text.includes(k.toLocaleLowerCase()))})).filter(r => r.matchedTerms.length).sort((a,b) => b.matchedTerms.length-a.matchedTerms.length || a.id.localeCompare(b.id)).slice(0,2);
 return {candidates, gap:candidates.length ? null : 'No explicit route alias matched'};
}
export function reviewedClaims(contracts:Descriptor[], sections:{id:string;body:string;versionStatus:string}[]) {
 return contracts.filter(d => d && typeof d.claim === 'string' && idPattern.test(d.id) && sha.test(d.cardSha256) && Array.isArray(d.evidence) && d.evidence.length >= 1 && d.evidence.length <= 2 && [ {id:d.cardId,sha256:d.cardSha256}, ...d.evidence ].every(e => e && sha.test(e.sha256) && sections.some(s => s.id === e.id && digest(s.body) === e.sha256 && s.versionStatus === 'match'))).map(d => ({id:d.id,claim:d.claim}));
}
export async function createTask(file:string, cache:string, sync:SyncResult, versions:ArtifactVersion[]) {
 if (!sync.snapshot) throw new Error('No snapshot available');
 getVersionStatus([], {versions});
 const task:Task = {schemaVersion:1,cache:path.resolve(cache),snapshot:sync.snapshot,sync,versions,ledger:{bytes:0,sections:0,attempts:0}};
 await writeFile(file,JSON.stringify(task)+'\n',{flag:'wx',mode:0o600}); return task;
}
function validateTask(t:Task) {
 if (!t || t.schemaVersion !== 1 || typeof t.cache !== 'string' || !path.isAbsolute(t.cache) || !/^[a-f0-9]{40}$/.test(t.snapshot) || !t.sync || t.sync.snapshot !== t.snapshot || !['fresh','cached'].includes(t.sync.status) || !Number.isFinite(Date.parse(t.sync.checkedAt)) || !Number.isFinite(Date.parse(t.sync.publishedAt ?? '')) || !Array.isArray(t.versions) || t.versions.some(v => !v || typeof v.artifact !== 'string' || !v.artifact.trim() || !(v.version === null || typeof v.version === 'string' && !!v.version.trim()) || (v.platform !== undefined && v.platform !== 'android')) || !t.ledger || !Number.isInteger(t.ledger.bytes) || t.ledger.bytes < 0 || t.ledger.bytes > 12288 || !Number.isInteger(t.ledger.sections) || t.ledger.sections < 0 || t.ledger.sections > 3 || !Number.isInteger(t.ledger.attempts) || t.ledger.attempts < 0 || t.ledger.attempts > 2) throw new Error('Invalid task context');
 getVersionStatus([], {versions:t.versions});
}
export async function lookup(file:string, selection:{query?:string;route?:string}, maxBytes:number):Promise<string> {
 const lock = file+'.lock'; const handle = await open(lock,'wx',0o600); let temp:string|undefined;
 try {
  const task = JSON.parse(await readFile(file,'utf8')) as Task; validateTask(task);
  if (task.ledger.attempts >= 2) throw new Error('Lookup attempts exhausted');
  // Commit the attempt before retrieval so failures cannot provide free retries.
  task.ledger.attempts++;
  const save = async () => { temp = `${file}.${randomUUID()}.tmp`; await writeFile(temp,JSON.stringify(task)+'\n',{flag:'wx',mode:0o600}); await rename(temp,file); temp=undefined; };
  await save();
  const {index} = await validateCachedSnapshot(task.cache,task.snapshot);
  const catalog = await routes(); const candidates = selection.query ? suggest(selection.query,catalog).candidates : [];
  const route = selection.route ? catalog.find(r => r.id === selection.route) : candidates.length === 1 ? catalog.find(r => r.id === candidates[0]!.id) : undefined;
  if (selection.route && !route) throw new Error('Unknown route');
  const query:SearchQuery = {...(route ? route.queries[0] : {query:selection.query}),versions:task.versions,limit:1};
  const hit = searchIndex(index,query,task.snapshot).hits[0];
  const data = await config('review-contracts.json') as {schemaVersion:number;contracts:Descriptor[]};
  if (data.schemaVersion !== 1 || !Array.isArray(data.contracts)) throw new Error('Invalid contract catalog');
  const remainingSections = 3-task.ledger.sections;
  const descriptor = hit && data.contracts.find(d => d?.cardId === hit.id && Array.isArray(d.evidence));
  const linked = descriptor?.evidence.map(e => e.id).filter(id => hit?.relatedIds.includes(id)) ?? [];
  const selected = hit && remainingSections ? [hit.id,...[...new Set(linked)].slice(0,Math.min(2,remainingSections-1))] : [];
  const sections = selected.flatMap(id => { try { return [readSection(index,id,query,task.snapshot)]; } catch { return []; } });
  const sources = Object.fromEntries(sections.flatMap(s => s.sources.map(source => [source.id,source])));
  const sufficient = reviewedClaims(data.contracts, sections);
  const allowance = 12288-task.ledger.bytes; const ceiling = Math.min(maxBytes,allowance);
  const output = (full:boolean) => JSON.stringify({snapshot:task.snapshot,route:route?.id ?? null,candidates,scope:selection,sections:full ? sections.map(({snapshot:_snapshot,sources:_sources,...s})=>s) : [],sources:full ? sources : {},transmission:full ? 'complete' : 'gap',sufficiency:full && sufficient.length ? 'sufficient' : 'unreviewed',claims:full ? sufficient : [],gaps:full ? (!hit ? ['No matching evidence'] : !remainingSections ? ['Section allowance exhausted'] : []) : ['Selected evidence does not fit'],relatedRouteIds:route?.relatedRouteIds ?? [],remaining:{bytes:0,sections:3-task.ledger.sections-(full ? sections.length : 0),attempts:2-task.ledger.attempts}})+'\n';
  const encode = (full:boolean) => { let result=output(full); for (let i=0;i<5;i++) {const obj=JSON.parse(result); obj.remaining.bytes=allowance-Buffer.byteLength(result); const next=JSON.stringify(obj)+'\n'; if (next===result) break; result=next;} return result; };
  let result=encode(true); let full=true; if (Buffer.byteLength(result)>ceiling) {full=false;result=encode(false);} if (Buffer.byteLength(result)>ceiling) throw new Error('Byte budget cannot fit response');
  task.ledger.bytes+=Buffer.byteLength(result); if (full) task.ledger.sections+=sections.length; await save(); return result;
 } finally { if (temp) await rm(temp,{force:true}); await handle.close(); await rm(lock,{force:true}); }
}
