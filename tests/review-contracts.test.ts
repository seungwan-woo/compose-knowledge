import {createHash} from 'node:crypto';
import {expect,it} from 'vitest';
import {reviewedClaims} from '../src/review/runtime.js';
const hash=(s:string)=>createHash('sha256').update(s).digest('hex');
it('requires every descriptor body hash and matched version before marking a claim sufficient',()=>{
 const card={id:'card',body:'card body',versionStatus:'match' as const}; const evidence={id:'source',body:'source body',versionStatus:'match' as const};
 const contracts=[{id:'claim',claim:'A claim',cardId:'card',cardSha256:hash(card.body),evidence:[{id:'source',sha256:hash(evidence.body)}]}];
 expect(reviewedClaims(contracts,[card,evidence])).toEqual([{id:'claim',claim:'A claim'}]);
 expect(reviewedClaims(contracts,[card])).toEqual([]);
 expect(reviewedClaims(contracts,[card,{...evidence,body:'changed'}])).toEqual([]);
 expect(reviewedClaims(contracts,[card,{...evidence,versionStatus:'unknown'}])).toEqual([{id:'claim',claim:'A claim'}]);
});
