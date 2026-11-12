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
export interface CrawlResult { input: KnowledgeInput; sources: SourceStatus[]; }
export type FetchText = (url: string) => Promise<string>;
export interface ChangeSet { added: string[]; updated: string[]; removed: string[]; }
