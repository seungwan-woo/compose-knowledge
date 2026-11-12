# Sync-first and local retrieval trade-offs

Reviewed: 2026-11-12. **Recommendation: require online sync as the skill's first step, then evaluate a small local MCP server with snapshot reuse before adding SQLite FTS5 as a derived index.** Choose RDF/graph storage when relationship data and queries justify it. This change delivered skill 0.3.1 and this review; it did not implement a production MCP server, SQLite backend, graph DB, or schedule.

## 1. Check the latest publication and pin the evidence

For each new Compose question, locate the skill, cache, and remote, then run **online sync → check status/pin SHA → verify project versions → search/read**. Sync again for a new question even if the previous question in the same chat just synced. Keep the SHA for follow-up queries on that question; resync for a new question or an explicit refresh request.

| Result | Meaning and action |
| --- | --- |
| `fresh` | This call fetched and validated the configured remote publication branch. Pin the observed SHA. |
| `cached` | Remote verification failed or offline mode was explicitly requested. Report the error/time and stale evidence; do not claim to satisfy a request requiring current evidence. |
| `unavailable` | Stop search/read and report the evidence gap. Never silently substitute the demo corpus. |

“Latest” means **the configured remote's last publication**, not an immediate AndroidX recrawl or a guarantee that a corporate mirror is ahead of GitHub. Default-branch collection is scheduled daily at 08:00 KST and may fail or run late. `checkedAt` is this sync's time; `publishedAt` is the last data-change commit's time. Corpus sync does not update the skill/CLI software.

This reduces stale-cache use and makes freshness observable, at the cost of remote access and validation per question. Offline use cannot verify freshness. Syncing before every search would add cost and risk mixing snapshots within a task, so retain one pin per question. Start with `--offline` only for an explicit user/environment offline setting.

A documentation skill is a procedure for the agent. This change added no automatic sync hook to every CLI call. See [sync-first verification](sync-first-verification.md) for installed execution and six procedural scenarios.

## 2. MCP, search indexes, and graph models are separate layers

- **MCP:** A protocol for Codex to discover and call local tools. A client can launch a `stdio` server as a subprocess; no HTTP port or remote service is required. Even with local data, tool results enter the connected model's context. [M1]
- **SQLite FTS5:** A local engine for text/metadata storage, inverted indexes, and BM25 ranking. It can sit behind MCP or the existing CLI. [S1]
- **Property graph:** A model for querying nodes, properties, typed edges, and paths. Neo4j/Cypher is a candidate, but current `relatedIds` do not create API call/dependency edges.
- **RDF:** A standard data model using IRIs and triples/datasets. SPARQL queries, SHACL validation, and RDFS/OWL inference are distinct capabilities. Turtle/N-Quads export and operating a DB server are separate decisions. [Detailed review](storage-rdf-research.md)

`local MCP + SQLite`, `local MCP + Oxigraph`, and `local MCP + Jena` are all possible. Separating tools from storage allows comparisons while retaining the consumer skill.

## 3. Current costs and measurement limits

Published snapshot `11d0d4a17ef74dce5788f73684ef5a432ea9c1b8` contains 2,848 sections, 29 guidance cards, about 3.69 MB of actual text, and a 12.71 MB JSON index. In the [implementation](../../src/io/snapshot.ts), `validateCachedSnapshot` validates SHA identity and the full snapshot on each search/read CLI call. Sync also repeats payload materialization and validation when it fetches the same SHA. JSON text search is only part of total latency.

| Earlier local microbenchmark | Observation | Excluded |
| --- | --- | --- |
| Full snapshot validation, 3 runs | About 608–1,619 ms | Network sync, model calls |
| Current index already in memory | Median about 58–63 ms per query; 4 queries, 7 runs each | CLI startup, snapshot validation |
| Temporary in-memory SQLite FTS5 search | Median about 0.24–0.35 ms for the same 4 queries | Version/source policy, CLI/MCP boundary, disk load, model calls |
| Temporary FTS index construction | About 45 ms | Production DB validation, atomic replacement, cold disk/RSS |

[Aggregate measurements](evidence/retrieval-microbenchmark.json) are preserved. Individual timings from the 7 runs and the executable prototype were not retained, so this is not a reproducible comparative benchmark. FTS used AND search/BM25; the current engine uses its own term scores and version/curation priorities. Rankings differed. These results do not establish equal search quality, hundreds-fold end-to-end acceleration, or production-backend performance. No comparison measured DB RSS, cold start, disk size, or operational reliability. Future comparisons must retain an executable harness and every trial.

A separate installed-consumer test reduced average stdout from 7,003.9 to 5,949.9 bytes, about 15%, by reading concise guidance first. These are [14 frozen-question results](coverage-usability.md), not model token/cost measurements. MCP or graph storage does not automatically reduce required evidence. Measure final tool-visible output, including schemas, envelopes, and repeated results that may enter model input.

## 4. Benefits and costs by configuration

| Configuration | Benefits | Added costs and limits | Assessment here |
| --- | --- | --- | --- |
| Current JSON + separate CLI calls | Simple Git diff/manifest validation; no DB/server. Retains current distribution and offline use. | Validation, parsing, and process costs per call; custom term ranking and a large index. | Retain as the working baseline. |
| **MCP + validated index in memory** | Reuses a snapshot within one server process, reducing repeated validation/loading. Structured input/output and shared tools. | Per-client MCP setup; process lifetime, shutdown, memory reclamation, and concurrent tasks. Reuse disappears if the host restarts the server per call. Search quality is unchanged. | Good first experiment; measure transport and storage gains separately. |
| **MCP or CLI + SQLite FTS5** | Exact ID/symbol/version lookups, BM25 text search, source/edge tables, reusable index. Single-file storage simplifies per-consumer distribution. | Schema/index migrations, tokenizer/ranking tuning, atomic replacement, concurrent readers. No need to expose raw SQL to the model. | Recommended search-backend candidate for current needs. [S1–S3] |
| MCP + Neo4j Community | Cypher paths and reverse impact analysis become useful once verified API edges exist. Includes full-text indexes. | JVM server, memory/backup operations, graph import, edge quality, edition/license review. Document retrieval does not improve automatically. | Consider for recurring multi-step API relationship queries. |
| MCP + RDF store | IRIs/named graphs express source/artifact/version relationships; supports SPARQL and RDF exchange. SHACL/inference/federation depend on the product. | Ontology/IRI identity/change management, triple growth, engine-specific full-text/inference support, extra runtime. | Useful for concrete cross-team RDF exchange, validation, or inference needs. |

FTS5 tokenizers such as `unicode61` do not provide Korean semantic analysis or Korean↔English translation. Retain exact API matching, explicit Korean aliases, and verified query expansion. If wording differences remain a major failure source, separately evaluate hybrid retrieval with local embeddings. Model distribution, index rebuilds, evidence recall, and token cost add trade-offs; embeddings are not required by this proposal.

The Node 24 `node:sqlite` documentation marks it stability 1.2, release candidate. Temporary FTS5 queries worked in this environment; verify support on corporate Node builds/OSes. A separate native driver adds binary/ABI distribution work. Design the DB as a **locally generated derived cache** of validated sources, with read-only queries and extension loading disabled by default. Opening a remote DB file does not replace manifest validation. [S2–S3]

## 5. Open-source graph/RDF candidates

| Candidate | Verified core license | Best fit | Important distinction |
| --- | --- | --- | --- |
| **Oxigraph** | Apache-2.0 **OR** MIT | Small RDF/SPARQL sidecar or export experiment without a JVM | Persistence uses the native path; Node WASM is in-memory. Do not assume core BM25, SHACL, or OWL support. |
| **Apache Jena TDB2/Fuseki** | Apache-2.0 | RDF storage/SPARQL, separate RDFS/limited OWL reasoners, SHACL | Java runtime and optional modules. Installing TDB2 does not enable inference/validation. |
| **Eclipse RDF4J** | EDL 1.0, BSD-style / identified as BSD-3-Clause | SHACL validation on commit, Sail configuration, multi-endpoint federation | Verify JVM/Sail combinations. Do not assume RDF4J uses EPL. |
| **Neo4j Community** | GPLv3 | Property-graph paths and API impact analysis | Separate Community and commercial Enterprise features/licenses. Core is not an RDF/SPARQL DB. |
| **RDFLib** | BSD-3-Clause | Python RDF export/transformation prototypes | A different role from a production DB/search engine. pySHACL/OWL-RL are separate projects. |

These findings come from official LICENSE files and documentation; see [pinned revisions and capability evidence](storage-rdf-research.md). Core licensing does not cover every added driver/index/dependency configuration. RDF requires no separate paid service; corporate distribution depends on the selected binaries, dependencies, and NOTICE files.

## 6. Questions that could justify graph storage

- **“Which guidance needs review when this source changes?”** A section→evidence→card reverse index or SQL join can answer this now.
- **“Which APIs/guidance does this API change affect through calls and implementations?”** Requires verified `calls`, `implements`, and `dependsOn` edges with version ranges, built through Kotlin static analysis, official metadata, and review. Do not reinterpret current `relatedIds` as these edges.
- **“Can we connect teams' knowledge and external ontologies through shared identifiers?”** RDF IRIs, shared vocabularies, and SPARQL gain value. APIs sharing a name are not automatically the same entity.
- **“Must every guidance card have sources, hashes, and versions?”** Current validators and SQL constraints can enforce this. In an RDF pipeline, SHACL can provide an exchange format for those constraints.

A named graph can partition snapshots; its name does not prove source truth, completed review, or app-version compatibility. Preserve query-dependent `match/unknown/different`, evidence-body hashes, source revisions, and stale-guidance exclusion. Distinguish absent relationships from uncollected/unverified ones.

## 7. Recommended sequence and acceptance criteria

1. **This change:** Ship the sync-first skill, distinguish corpus/software updates, and document cached/unavailable paths. Retain installed verification and existing tests.
2. **Next small implementation:** Add a local stdio MCP server exposing only `begin_task`, `search`, and `read` over the same search service. Proposed `begin_task` performs online sync and returns a task handle pinned to an immutable SHA. The server can reject queries without handles, but **calling begin_task for every new question requires client/task lifecycle integration**. Installing MCP alone cannot guarantee this.
3. **Search backend:** Build SQLite for each validated snapshot, keyed by `snapshot SHA + index schema/tokenizer version`. Activate completed indexes atomically while preserving existing task pins. Use a separate SQL full-text index and exact-symbol table; preserve version gating and guidance/source priority. Share the service layer with the CLI. Separately verify any optimization that skips materialization for unchanged SHAs, retaining identity and corruption-recovery checks.
4. **Optional relationship experiment:** Collect queries using SQLite edge tables first. If RDF exchange is needed, compare N-Quads export from canonical data with native Oxigraph. For concrete rules/SHACL/federation requirements, compare Jena/RDF4J; for property-graph impact analysis, compare Neo4j against the same questions.

At every stage, use the same frozen questions to check **evidence relevance, zero version mislabels, zero stale-card reappearance, output budgets, cold/warm p50/p95, RSS/index size, import/update time, offline installation, concurrent pins, rollback, and tamper rejection**. Reduce reads per API and actual model-visible output; search milliseconds alone do not determine the winner. Graph traversal does not expand the consumer's one-hop, three-read, or 12 KiB limits.

Use MCP `inputSchema`/`outputSchema` and structured results, but measure actual host output including envelopes and compatibility text duplication. Write protocol messages only to stdout; send logs to stderr. Pin SDK/protocol versions supported by the actual Codex host. The current official TypeScript SDK LICENSE says it is **transitioning to Apache-2.0, with some existing contributions remaining MIT**; do not label the entire SDK MIT from memory. [M1–M3]

## Verified MCP and SQLite sources

- **M1:** [Official stdio transport](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0b22bfed6e94c0c7751046d2e845fac954cac8a7/docs/specification/2026-07-28/basic/transports/stdio.mdx): the client starts a server subprocess; stdout carries MCP messages, stderr carries logs.
- **M2:** [Official tool schemas/structured content](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/0b22bfed6e94c0c7751046d2e845fac954cac8a7/docs/specification/2026-07-28/server/tools.mdx). Reading this specification does not test compatibility between its revision and the current Codex host.
- **M3:** [Official TypeScript SDK LICENSE](https://github.com/modelcontextprotocol/typescript-sdk/blob/919bb8ea88b6e10e72c2f8b6218fad4cfdc40b2c/LICENSE), [README](https://github.com/modelcontextprotocol/typescript-sdk/blob/919bb8ea88b6e10e72c2f8b6218fad4cfdc40b2c/README.md): new contributions use Apache-2.0; existing MIT contributions without relicensing consent remain distinct. Documentation contributions have a separate CC-BY-4.0 clause.
- **S1:** [Official SQLite FTS5 ranking tests](https://github.com/sqlite/sqlite/blob/f157fe7debcda0d8513a2c10364e8fe781ee30ae/ext/fts5/test/fts5rank.test): executable examples of the FTS5 build flag, BM25, and weights. Temporary FTS5 creation/search also ran in this environment.
- **S2:** [SQLite LICENSE](https://github.com/sqlite/sqlite/blob/f157fe7debcda0d8513a2c10364e8fe781ee30ae/LICENSE.md): core SQLite is public domain; some auxiliary files/tools have separate BSD-style or other terms.
- **S3:** [Official Node 24 SQLite documentation](https://github.com/nodejs/node/blob/221ffa5df3013056d72bada8a68f878576ec6019/doc/api/sqlite.md): release-candidate status, file/in-memory databases, read-only mode, and extension loading disabled by default.
