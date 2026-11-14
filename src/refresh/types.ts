import type { KnowledgeInput } from '../domain/types.js';

export interface CrawlSource {
  id: string;
  kind: 'html' | 'gitiles' | 'github' | 'monitor';
  url: string;
  title: string;
  artifact: string;
  fqn: string;
  license: string;
  /** Explicit API symbols evidenced by this source; indexed only in sections mentioning them. */
  symbols?: string[];
  path?: string;
  repo?: string;
  ref?: string;
}
export interface CrawlConfig { schemaVersion: 1; sources: CrawlSource[]; }
export interface SourceStatus {
  id: string;
  url: string;
  status: 'ingested' | 'monitor-only';
  revision: string;
  sections: number;
  note?: string;
}
export interface ContractSpan { id:string; sourceId:string; title:string; sourceSha256:string; startLine:number; endLine:number }
export interface SpanCatalog { schemaVersion:1; spans:ContractSpan[] }
export interface CrawlResult { input: KnowledgeInput; sources: SourceStatus[]; spans: {id:string; status:'ingested'|'needs-review'; reason?:string}[]; }
export type FetchText = (url: string) => Promise<string>;
export interface ChangeSet { added: string[]; updated: string[]; removed: string[]; }
