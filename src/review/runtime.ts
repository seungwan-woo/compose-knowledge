import { createHash, randomUUID } from 'node:crypto';
import { open, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import type { ArtifactVersion, ReadResponse, SearchQuery, SyncResult } from '../domain/types.js';
import { getVersionStatus, normalizeArtifact } from '../domain/version.js';
import { validateCachedSnapshot } from '../io/snapshot.js';
import { readSection, searchIndex } from '../retrieval/search.js';

interface RouteQuery { artifact:string; symbol?:string; query?:string }
interface Route { id:string; title:string; keywords:string[]; queries:RouteQuery[]; cardIds:string[]; relatedRouteIds:string[] }
interface Descriptor { id:string; claim:string; cardId:string; cardSha256:string; evidence:{id:string;sha256:string}[] }
interface Task { schemaVersion:1; cache:string; snapshot:string; sync:SyncResult; versions:ArtifactVersion[]; ledger:{bytes:number; sections:number; attempts:number} }
const hash = (s:string) => createHash('sha256').update(s).digest('hex');
const idPattern = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const sha = /^[a-f0-9]{64}$/;
const object = (x:unknown): x is Record<string,unknown> => !!x && typeof x === 'object' && !Array.isArray(x);
const keys = (x:unknown, required:string[], optional:string[] = []): x is Record<string, any> => object(x) && required.every(k => Object.hasOwn(x,k)) && Object.keys(x).every(k => required.includes(k) || optional.includes(k));
const nonempty = (x:unknown): x is string => typeof x === 'string' && !!x.trim();
const validId = (x:unknown): x is string => typeof x === 'string' && idPattern.test(x);
const config = async (name:string):Promise<unknown> => JSON.parse(await readFile(fileURLToPath(new URL(`../../config/${name}`,import.meta.url)),'utf8')) as unknown;

export async function routes():Promise<Route[]> {
 const data = await config('review-routes.json');
 if (!keys(data,['schemaVersion','routes']) || data.schemaVersion !== 1 || !Array.isArray(data.routes)) throw new Error('Invalid route catalog');
 const ids = new Set<string>();
 for (const r of data.routes) {
  if (!keys(r,['id','title','keywords','queries','cardIds','relatedRouteIds']) || !validId(r.id) || ids.has(r.id) || !nonempty(r.title) || !Array.isArray(r.keywords) || !r.keywords.length || !r.keywords.every(nonempty) || !Array.isArray(r.queries) || !r.queries.length || r.queries.length > 2 || !Array.isArray(r.cardIds) || !r.cardIds.every(validId) || !Array.isArray(r.relatedRouteIds) || !r.relatedRouteIds.every(validId)) throw new Error('Invalid route');
  for (const q of r.queries) {
   if (!object(q) || !(keys(q,['artifact','symbol']) || keys(q,['artifact','query'])) || !nonempty(q.artifact) || !(nonempty(q.symbol) || nonempty(q.query))) throw new Error('Invalid route query');
  }
  ids.add(r.id);
 }
 const result = data.routes as Route[];
 if (result.some(r => r.relatedRouteIds.some(id => !ids.has(id)))) throw new Error('Invalid route references');
 return result;
}
function validDescriptor(d:unknown): d is Descriptor {
 if (!keys(d,['id','claim','cardId','cardSha256','evidence']) || !validId(d.id) || !nonempty(d.claim) || !validId(d.cardId) || typeof d.cardSha256 !== 'string' || !sha.test(d.cardSha256) || !Array.isArray(d.evidence) || d.evidence.length < 1 || d.evidence.length > 2) return false;
 const ids = new Set([d.cardId]);
 for (const e of d.evidence) {
  if (!keys(e,['id','sha256']) || !validId(e.id) || ids.has(e.id) || typeof e.sha256 !== 'string' || !sha.test(e.sha256)) return false;
  ids.add(e.id);
 }
 return true;
}
async function contracts():Promise<Descriptor[]> {
 const data = await config('review-contracts.json');
 if (!keys(data,['schemaVersion','contracts']) || data.schemaVersion !== 1 || !Array.isArray(data.contracts) || !data.contracts.every(validDescriptor)) throw new Error('Invalid contract catalog');
 const result = data.contracts as Descriptor[];
 if (new Set(result.map(d => d.id)).size !== result.length) throw new Error('Duplicate contract');
 return result;
}
export function reviewedClaims(contracts:Descriptor[], sections:{id:string;body:string;versionStatus:string}[]) {
 return contracts.filter(d => validDescriptor(d) && [{id:d.cardId,sha256:d.cardSha256},...d.evidence].every(e => sections.some(s => s.id === e.id && hash(s.body) === e.sha256 && s.versionStatus !== 'different'))).map(d => ({id:d.id,claim:d.claim}));
}
export function suggest(query:string,catalog:Route[]) {
 const text=query.toLocaleLowerCase();
 const candidates=catalog.map(r=>({id:r.id,title:r.title,matchedTerms:r.keywords.filter(k=>text.includes(k.toLocaleLowerCase()))})).filter(r=>r.matchedTerms.length).sort((a,b)=>b.matchedTerms.length-a.matchedTerms.length || a.id.localeCompare(b.id)).slice(0,2);
 return {candidates,gap:candidates.length ? null : 'No explicit route alias matched'};
}
function validateTask(t:unknown): asserts t is Task {
 if (!keys(t,['schemaVersion','cache','snapshot','sync','versions','ledger']) || t.schemaVersion !== 1 || typeof t.cache !== 'string' || !path.isAbsolute(t.cache) || typeof t.snapshot !== 'string' || !/^[a-f0-9]{40}$/.test(t.snapshot) || !keys(t.sync,['snapshot','status','checkedAt','publishedAt'],['error']) || t.sync.snapshot !== t.snapshot || (t.sync.status !== 'fresh' && t.sync.status !== 'cached') || typeof t.sync.checkedAt !== 'string' || !Number.isFinite(Date.parse(t.sync.checkedAt)) || typeof t.sync.publishedAt !== 'string' || !Number.isFinite(Date.parse(t.sync.publishedAt)) || ('error' in t.sync && typeof t.sync.error !== 'string') || !Array.isArray(t.versions) || !t.versions.every(v => keys(v,['artifact','version'],['platform']) && nonempty(v.artifact) && (v.version === null || nonempty(v.version)) && (v.platform === undefined || v.platform === 'android')) || !keys(t.ledger,['bytes','sections','attempts'])) throw new Error('Invalid task context');
 for (const [key,max] of [['bytes',12288],['sections',3],['attempts',2]] as const) if (!Number.isSafeInteger(t.ledger[key]) || (t.ledger[key] as number) < 0 || (t.ledger[key] as number) > max) throw new Error('Invalid task ledger');
 getVersionStatus([], {versions:t.versions as ArtifactVersion[]});
}
export async function createTask(file:string,cache:string,sync:SyncResult,versions:ArtifactVersion[]) {
 if (!sync.snapshot) throw new Error('No snapshot available');
 const task:Task={schemaVersion:1,cache:path.resolve(cache),snapshot:sync.snapshot,sync,versions,ledger:{bytes:0,sections:0,attempts:0}};
 validateTask(task); await writeFile(file,JSON.stringify(task)+'\n',{flag:'wx',mode:0o600}); return task;
}
function bindVersions(existing:ArtifactVersion[], incoming:ArtifactVersion[]):ArtifactVersion[] {
 const result=structuredClone(existing);
 for (const value of incoming) {
  const match=result.find(v=>normalizeArtifact(v.artifact)===normalizeArtifact(value.artifact));
  if (match && match.version !== value.version) throw new Error(`Conflicting requested versions for ${value.artifact}`);
  if (!match) result.push(value);
 }
 getVersionStatus([],{versions:result}); return result;
}
async function saveTask(file:string,task:Task) {
 const temp=`${file}.${randomUUID()}.tmp`;
 try { await writeFile(temp,JSON.stringify(task)+'\n',{flag:'wx',mode:0o600}); await rename(temp,file); }
 finally { await rm(temp,{force:true}); }
}
type Gap = {id?:string;reason:string};
function encodePack(base:Record<string,unknown>,task:Task,sections:ReadResponse[],gaps:Gap[],maxBytes:number):string {
 const allowance=12288-task.ledger.bytes, ceiling=Math.min(maxBytes,allowance);
 const encode=(include:boolean,issues:Gap[])=>{
  const sources:Record<string, Omit<ReadResponse['sources'][number],never>>=Object.create(null);
  const projected=include ? sections.map(({snapshot:_snapshot,sources:items,...section})=>{
   for (const source of items) {
    if (sources[source.id] && JSON.stringify(sources[source.id]) !== JSON.stringify(source)) throw new Error('Conflicting source provenance');
    sources[source.id]=source;
   }
   return {...section,sourceIds:items.map(source=>source.id)};
  }) : [];
  let remainingBytes=allowance;
  let result='';
  for (let i=0;i<8;i++) {
   result=JSON.stringify({...base,sections:projected,sources,transmission:issues.length ? 'gap':'complete',gaps:issues,remaining:{bytes:remainingBytes,sections:3-task.ledger.sections-projected.length,attempts:2-task.ledger.attempts}})+'\n';
   const next=allowance-Buffer.byteLength(result); if (next===remainingBytes) break; remainingBytes=next;
  }
  return result;
 };
 let result=encode(!gaps.length,gaps);
 if (Buffer.byteLength(result)>ceiling && !gaps.length) result=encode(false,sections.map(section=>({id:section.id,reason:'Selected evidence does not fit byte allowance'})));
 if (Buffer.byteLength(result)>ceiling) throw new Error('Byte budget cannot fit response');
 return result;
}
export async function lookup(file:string,selection:{query?:string;route?:string},maxBytes=12288,versions:ArtifactVersion[]=[]):Promise<string> {
 const lock=file+'.lock'; const handle=await open(lock,'wx',0o600);
 try {
  const task:unknown=JSON.parse(await readFile(file,'utf8')); validateTask(task);
  if (task.ledger.attempts >= 2) throw new Error('Lookup attempts exhausted');
  if (versions.length && task.ledger.attempts !== 0) throw new Error('Version context already frozen');
  task.versions=bindVersions(task.versions,versions);
  task.ledger.attempts++; await saveTask(file,task);
  const {index}=await validateCachedSnapshot(task.cache,task.snapshot);
  const catalog=await routes(), descriptors=await contracts();
  const candidates=selection.query ? suggest(selection.query,catalog).candidates : [];
  const route=selection.route ? catalog.find(r=>r.id===selection.route) : candidates.length===1 ? catalog.find(r=>r.id===candidates[0]!.id) : undefined;
  if (selection.route && !route) throw new Error('Unknown route');
  const alternatives:RouteQuery[]=route?.queries ?? [{artifact:'',query:selection.query}];
  let hit:ReturnType<typeof searchIndex>['hits'][number] | undefined; let query:SearchQuery={versions:task.versions,limit:1};
  for (const alt of alternatives) {
   query={...(alt.artifact ? {artifact:alt.artifact}:{}),...(alt.symbol ? {symbol:alt.symbol}:{query:alt.query}),versions:task.versions,limit:1};
   hit=searchIndex(index,query,task.snapshot).hits[0]; if (hit) break;
  }
  const descriptor=hit ? descriptors.find(d=>d.cardId===hit!.id) : undefined;
  const gaps:Gap[]=[]; const sections:ReadResponse[]=[];
  const ids=hit ? [hit.id,...(descriptor?.evidence.map(e=>e.id) ?? [])] : [];
  if (!hit) gaps.push({reason:'No matching evidence'});
  if (hit && ids.length > 3-task.ledger.sections) for (const id of ids.slice(3-task.ledger.sections)) gaps.push({id,reason:'Section allowance exhausted'});
  if (hit && descriptor) for (const e of descriptor.evidence) if (!hit.relatedIds.includes(e.id)) gaps.push({id:e.id,reason:'Required evidence is not one hop from direct hit'});
  if (!gaps.length) for (const id of ids) {
   try { sections.push(readSection(index,id,query,task.snapshot)); }
   catch (error) { gaps.push({id,reason:error instanceof Error ? error.message : String(error)}); }
  }
  if (!gaps.length && descriptor) for (const item of [{id:descriptor.cardId,sha256:descriptor.cardSha256},...descriptor.evidence]) if (!sections.some(s=>s.id===item.id && hash(s.body)===item.sha256)) gaps.push({id:item.id,reason:'Reviewed body hash changed'});
  const claims=gaps.length ? [] : reviewedClaims(descriptors,sections);
  const base={snapshot:task.snapshot,route:route?.id ?? null,candidates,scope:selection,sufficiency:claims.length ? 'sufficient':'unreviewed',claims,relatedRouteIds:route?.relatedRouteIds ?? []};
  let result=encodePack(base,task,sections,gaps,maxBytes);
  let pack=JSON.parse(result) as {sections:unknown[];transmission:string};
  if (pack.transmission==='gap' && claims.length) {base.sufficiency='unreviewed';base.claims=[];result=encodePack(base,task,sections,gaps,maxBytes);pack=JSON.parse(result) as typeof pack;}
  task.ledger.bytes+=Buffer.byteLength(result);task.ledger.sections+=pack.sections.length;await saveTask(file,task);return result;
 } finally {await handle.close();await rm(lock,{force:true});}
}
