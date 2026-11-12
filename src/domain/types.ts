/** Contract v1. Changes are coordinated by the controller before workers consume them. */
export type Platform = 'android';
export type VersionStatus = 'match' | 'unknown' | 'different';
export interface ArtifactVersion {
  artifact: string;
  version: string | null;
  platform?: Platform;
}
export interface Source {
  id: string;
  kind: 'code' | 'test' | 'guide';
  resource: string;
  revision: string;
  path?: string;
  startLine?: number;
  endLine?: number;
  sha256: string;
  license: string;
  excerpt: string;
}
export interface KnowledgeSection {
  id: string;
  title: string;
  body: string;
  aliases: string[];
  requires: ArtifactVersion[];
  sources: Source[];
  relatedIds: string[];
}
export interface KnowledgeDocument {
  id: string;
  artifact: string;
  fqn: string;
  title: string;
  description: string;
  tags: string[];
  sections: KnowledgeSection[];
}
export interface KnowledgeInput { schemaVersion: 1; documents: KnowledgeDocument[]; }
export interface IndexEntry extends KnowledgeSection {
  docId: string;
  docPath: string;
  artifact: string;
  fqn: string;
  docTitle: string;
  description: string;
  tags: string[];
}
export interface SearchIndex { schemaVersion: 1; entries: IndexEntry[]; }
export interface Manifest {
  schemaVersion: 1;
  files: Record<string, string>;
  inputRevisions: string[];
}
export interface ValidatedSnapshot { manifest: Manifest; index: SearchIndex; }
export interface SearchQuery {
  artifact?: string;
  version?: string;
  versions?: ArtifactVersion[];
  platform?: Platform;
  symbol?: string;
  query?: string;
  includeDifferent?: boolean;
  limit?: number;
}
export interface SearchHit {
  id: string;
  docId: string;
  title: string;
  artifact: string;
  fqn: string;
  snippet: string;
  versionStatus: VersionStatus;
  sources: Pick<Source, 'id' | 'resource'>[];
  relatedIds: string[];
}
export interface SearchResponse { snapshot: string; hits: SearchHit[]; truncated: boolean; }
export interface ReadResponse {
  snapshot: string;
  id: string;
  title: string;
  body: string;
  sources: Omit<Source, 'excerpt'>[];
  requires: ArtifactVersion[];
  relatedIds: string[];
  versionStatus: VersionStatus;
  truncated: boolean;
}
export interface SyncOptions { cacheDir: string; remote?: string; ref?: string; offline?: boolean; }
export interface SyncResult {
  snapshot: string | null;
  status: 'fresh' | 'cached' | 'unavailable';
  checkedAt: string;
  publishedAt: string | null;
  error?: string;
}
