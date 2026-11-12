# Local storage candidates: RDF and property graphs

Researched: **2026-11-12 UTC**, using official GitHub READMEs, LICENSE files, documentation sources, and APIs. No DB installation, corpus recrawl, or load testing was performed. Some product websites were blocked by environment network policy; pinned documentation from the same projects' GitHub repositories was used instead. Performance and operational comparisons below are architectural assessments, not measurements.

## Recommendation for this project

**Retain snapshot storage/retrieval and add relationship tables as needed.** Local MCP is a tool-call interface; RDF/graph databases provide storage and queries. They are complementary layers. Any candidate can sit behind the same `sync → search → read` contract.

The [coverage record](coverage-expansion.md) reports public snapshot `11d0d4a17ef74dce5788f73684ef5a432ea9c1b8`: 187 documents, **2,848 sections, 29 guidance cards**, 3,685,383 bytes of text/code, and a 12,705,125-byte index with repeated provenance. These are publication-record figures, not a newly collected or validated corpus count. Size alone does not justify a DB server.

The [domain contract](../../src/domain/types.ts) already defines section `relatedIds`, source `resource/revision/path/line range/sha256/license`, artifact `version: string | null`, response `versionStatus: match | unknown | different`, snapshots, and sync freshness. It has no `calls`, `implements`, `deprecatedBy`, `affects`, or precise API dependency edges. Changing databases cannot create them. Build relationships from official sources, static analysis, and review, preserving their type, evidence, applicable versions, and extractor revision.

- **Now:** Retain keyword/symbol search, evidence reads, and one-hop access to directly related sections. JSON maps or SQLite edge tables can index `relatedIds` in both directions.
- **RDF experiment:** If external RDF exchange or SPARQL becomes necessary, try a small optional export from the same snapshot into **native Oxigraph**. Distinguish Node WASM from native persistent storage.
- **Rules and validation:** **Jena** is a balanced candidate for RDFS/limited OWL rules with SHACL. **RDF4J** is strong when SHACL validation on updates and queries across SPARQL endpoints are central.
- **Impact analysis:** Compare **Neo4j Community** for repeated path/reverse-impact queries over rich, verified API relationships when RDF compatibility is unnecessary. Graph visualization or relationship queries alone do not require migrating all retrieval.

## Candidate comparison

| Candidate | Runtime and Node integration | RDF, queries, validation | Text search | Costs and fit |
| --- | --- | --- | --- | --- |
| **Apache Jena / TDB2 / Fuseki** | Embedded TDB2 in a Java library or Fuseki HTTP service. Node can use HTTP SPARQL. Published 6.2.0 documentation requires Java 21+. | RDF datasets/named graphs, SPARQL. Separate inference API provides configurable RDFS and **incomplete OWL/Lite-subset** reasoners. `jena-shacl` supports SHACL Core and SPARQL Constraints. Enabling TDB2 does not enable reasoning/validation. | `jena-text` integrates Lucene. SPARQL `FILTER regex` is not indexed full-text search. | JVM, DB files, and optional Lucene indexes. Useful with an existing Java environment and rules/SHACL needs; adds complexity to current simple retrieval. [J1–J6] |
| **Eclipse RDF4J** | Java `SailRepository` with disk `NativeStore`/`MemoryStore`, or RDF4J Server HTTP; Node uses an HTTP client. The checked 6.0.0 release POM specifies Java 25. | RDF contexts/named graphs, SPARQL. Inference requires a Sail stack such as `SchemaCachingRDFSInferencer`; do not claim complete general OWL support. `ShaclSail` validates commits; check supported predicates/constraints. FedX provides multi-endpoint source selection/joins. | Configure `LuceneSail` in the stack. | Verify JVM/Sail configuration and compatibility. Available storage/inference/validation/search modules do not guarantee every combination works. Strong candidate for explicit validation/federation needs. [R1–R6] |
| **Oxigraph** | Native Rust library, standalone CLI/HTTP server, Python native bindings. RocksDB disk storage available. **Node npm bindings use an in-memory WASM store**, not the same persistent RocksDB API. | RDF datasets/named graphs, SPARQL query/update/federation, RDF serialization. Native SHACL/OWL/RDFS reasoning was not verified in the official feature list, so it is not counted. Use a separate validator/explicit materialization step before export if needed. | Checked core documentation lists no Lucene/BM25 full-text index. Distinguish string filters from lexical ranking; join existing retrieval/SQLite FTS results by ID. | Native local sidecar without a JVM, but adds binary distribution, RocksDB files, and process management. Measure WASM loading memory and native cache/compaction costs. README states SPARQL evaluation optimization is ongoing. First candidate for a small RDF compatibility experiment. [O1–O4] |
| **Neo4j Community** | JVM local single-instance server with an official JavaScript driver; not an embedded npm DB inside Node. | Labeled property graph and Cypher for typed relationships/paths. Core is not an RDF/SPARQL/named-graph/OWL/SHACL engine. RDF import/validation extensions require separate selection and review. | Core Lucene full-text indexes require index creation and lexical queries. Lexical and vector scores have different scales; hybrid ranking needs separate design. | Manage JVM heap, page cache, OS memory, and transaction state. Community is single-instance; do not count Enterprise clustering/online backup as Community features. Compare when complex API impact analysis becomes more important than retrieval. [N1–N4] |
| **RDFLib (supporting candidate)** | Python library with in-memory graphs, stores such as Berkeley DB, and remote SPARQL access. Node integration adds a Python worker/CLI boundary. | Suitable for RDF/SPARQL processing and transformation. README links to pySHACL and OWL-RL as **separate projects**, not RDFLib features. | Core README does not claim a retrieval-ranking engine. | Convenient for RDF export, ontology prototypes, or validation preprocessing. Better treated as a Python tool than a replacement production DB. [P1–P2] |

RDF4J documents MemoryStore as designed for fewer than 100,000 triples. This **is not a conversion of the current 2,848 sections**: each section expands into source/version/relationship/literal triples. Measure an actual export. JSON index bytes cannot establish triple count, JVM RSS, RocksDB size, or latency. No candidate receives unverified “a few MB is enough” or “N times faster” claims.

## Semantics to preserve in RDF

**RDF is a family of data-model/interchange standards, not a DB product.** Exporting Turtle/N-Quads and operating a persistent triplestore are separate decisions. SPARQL property-path traversal, RDFS/OWL inference of new facts, and SHACL constraint validation are distinct. Common standards do not make full-text extensions, inference profiles, SHACL coverage, or storage files interchangeable.

Named graphs can partition statements by snapshot/source, but **a graph name does not establish provenance, trust, or version applicability**. Preserve these explicitly:

| Current meaning | Preservation rule |
| --- | --- |
| Snapshot SHA, `fresh/cached/unavailable`, `checkedAt`, `publishedAt` | Separate immutable snapshot identity from this sync observation. Freshness does not establish graph truth or app-version compatibility. |
| Source revision, resource/path/line, excerpt hash, license | Preserve each on source/evidence entities. Current `sha256` hashes **excerpt UTF-8 bytes**, not the whole upstream file. |
| Section/source links and reviewed guidance evidence | Keep explicit evidence relations and reviewed hashes. Changed hashes or missing evidence must not re-expose existing guidance as valid. |
| `relatedIds` | Retain a limited meaning such as `relatedTo`; do not invent call/inheritance/dependency edges. Reverse lookups must preserve original direction and meaning. |
| Artifact `version: null`, response `versionStatus: unknown` | Preserve uncertainty explicitly. Consumer/query-dependent `versionStatus` is not a universally true section property. |
| Future API relationships and applicable versions | Bind evidence/revision/version ranges to relationship assertion entities. Distinguish unverified extracted edges from facts and inferred results. |

Under open-world semantics, a missing triple does not prove a relationship false. However, **triple absence does not replace the current `unknown` contract**. Uncollected data, unverified version applicability, and confirmed absence are different. Return `unknown` when resolved app artifact versions cannot be established. SHACL can require metadata/status values; passing validation does not prove source assertions true or versions compatible.

## Questions that justify further evaluation

1. **Retrieval:** Does the candidate improve lexical retrieval and source/version filtering on the frozen questions? A graph DB does not do this automatically. Keep existing retrieval and use a graph only for candidate-ID expansion/evidence relationships if useful.
2. **Impact analysis:** “Which guidance needs review if this source hash changes?” can use a hash→section→card reverse index/SQL join. Compare graph queries when multi-step API dependency impacts on guidance/apps become recurring questions, after collecting accurate edges with version scopes.
3. **Federation/exchange:** RDF gains value when teams share ontology/IRI semantics or combine SPARQL endpoints. Matching names do not automatically align entities. Reproducibility needs separate handling when endpoints lack snapshots/revisions. Compare RDF4J FedX for complex federation; other SPARQL engines also support simpler `SERVICE` use.
4. **Validation/inference:** List required rules first. Required evidence/hash/version metadata is validation; deriving facts such as subclass propagation is inference. Avoid OWL profiles broader than the actual need.

In a pilot, retain canonical snapshots and treat the DB as a rebuildable cache keyed by `snapshot SHA + exporter/schema version`. Switch readers only after creation/validation completes; support rollback to the previous snapshot. Administrative relationship queries must not expand consumer one-hop, three-read, or output budgets. Compare cold start, steady RSS, import time/disk bytes, update/rollback, offline installation, evidence/version accuracy, and query p50/p95 in one environment. This research did not perform those measurements.

## License and activity verification

These findings cover the pinned **project cores**. Added indexes/drivers/validators, bundled dependencies, and distribution NOTICE files depend on configuration. Neo4j's GPL Community and commercial Enterprise cannot be combined into “all Apache/MIT” or “all commercial.” A communicating application/driver does not automatically share the DB core's license.

| Project | Pinned source and activity evidence | Verified license text |
| --- | --- | --- |
| Jena | Source `a5d016c2c7459d02afe6e49894c8187cb6c8b870` (commit 2026-11-11); official site source lists 6.2.0. Annotated `jena-6.2.0` tag dated 2026-07-27 targets `d0676a2c402ead68a133596f4ac5977be64dd251`. GitHub `/releases/latest` returned 404; this was not interpreted as discontinued releases. | [LICENSE](https://github.com/apache/jena/blob/a5d016c2c7459d02afe6e49894c8187cb6c8b870/LICENSE): “Apache License”, “Version 2.0, January 2004”. Apache-2.0. |
| RDF4J | Source `1acc280c489577aa51aeac5226e41b32889782a7` (2026-11-11); GitHub latest-release API returned [6.0.0](https://github.com/eclipse-rdf4j/rdf4j/releases/tag/6.0.0), published 2026-08-10. Main POM is 6.2.0-SNAPSHOT, distinct from the release. | [POM](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/pom.xml#L32): “Eclipse Distribution License v1.0”, “A BSD-style OSS license”. [LICENSE](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/LICENSE): “Redistribution and use in source and binary forms, with or without modification, are permitted…” with 3 conditions. GitHub identifies BSD-3-Clause. **Do not assume EPL.** |
| Oxigraph | Source `78734be853a4bec714ba09bbfad790e64f3a1150` (2026-11-11); latest-release API returned [v0.5.13](https://github.com/oxigraph/oxigraph/releases/tag/v0.5.13), published 2026-10-22. | [README](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/README.md#L68): “licensed under either of” Apache License 2.0 / MIT, “at your option.” Also checked [LICENSE-APACHE](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/LICENSE-APACHE) and [LICENSE-MIT](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/LICENSE-MIT). **Apache-2.0 OR MIT**. |
| Neo4j | Tags API returned [2026.10.2](https://github.com/neo4j/neo4j/tree/2026.10.2), commit `11fe55832db7219cbdb9e4535cda9795a069610e` (2026-10-29). Default branch: 2026.10. The latest-release API returned a 2017 entry, which was not used as the current product version. | [README](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/README.asciidoc#L73): “Community Edition is an open source product licensed under GPLv3”; Enterprise has “additional closed-source components … requires a commercial license”. [LICENSE.txt](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/LICENSE.txt) is GPL Version 3. |
| RDFLib | Source `114dd59d48fc75aea7fcb3276bd0f13e4f3103b4` (2026-11-02); latest-release API returned [7.6.0](https://github.com/RDFLib/rdflib/releases/tag/7.6.0), published 2026-02-13. | [LICENSE](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/LICENSE): “BSD 3-Clause License”. |

Dates distinguish API-reported commit, tag, and release timestamps. Recent commits show observed activity, not maintenance, security, or performance guarantees. Development-branch READMEs/docs may differ from released APIs; pin documentation again for the selected pilot version.

## Capability evidence: official documentation sources

All sources were read on 2026-11-12. Pinned documentation revisions: Jena site `7c036e49ad860ad8d96e87ad546faa1c60ff8770`; RDF4J `1acc280c489577aa51aeac5226e41b32889782a7`; Neo4j Cypher `5201435420544967908ac9089076a67cabe1165b`; Neo4j Operations `c9e563478a8d636cb7327c901d4688102da23ab4`.

- **J1:** [TDB2 single-machine storage/Fuseki](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/tdb2/__index.md).
- **J2:** [Inference API and RDFS/OWL reasoner scope](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/inference/__index.md#L64). Describes the OWL reasoner as a “useful but incomplete implementation.”
- **J3:** [SHACL Core/SPARQL, Fuseki operation](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/shacl/__index.md).
- **J4:** [Lucene text extension versus regex](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/documentation/query/text-query.md). Its old Lucene version table was not reused as current compatibility guidance.
- **J5:** [Official release source and Java 21 requirement](https://github.com/apache/jena-site/blob/7c036e49ad860ad8d96e87ad546faa1c60ff8770/source/download/__index.md).
- **J6:** [Jena README](https://github.com/apache/jena/blob/a5d016c2c7459d02afe6e49894c8187cb6c8b870/README.md).
- **R1:** [Repository API / MemoryStore / NativeStore / contexts](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/repository.md).
- **R2:** [Sail stack: NativeStore, RDFS inferencer, LuceneSail](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/reference/sail.md#L194).
- **R3:** [ShaclSail validation, supported features, commits, and memory trade-offs](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/shacl.md).
- **R4:** [FedX federation](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/site/content/documentation/programming/federation.md).
- **R5:** [6.0.0 release POM Java version](https://github.com/eclipse-rdf4j/rdf4j/blob/6.0.0/pom.xml).
- **R6:** [RDF4J README](https://github.com/eclipse-rdf4j/rdf4j/blob/1acc280c489577aa51aeac5226e41b32889782a7/README.md).
- **O1:** [Oxigraph features, RocksDB, and license](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/README.md).
- **O2:** [Node/WASM in-memory binding](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/js/README.md#L7).
- **O3:** [Python in-memory/disk binding](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/python/README.md).
- **O4:** [Native CLI/HTTP SPARQL/Graph Store Protocol](https://github.com/oxigraph/oxigraph/blob/78734be853a4bec714ba09bbfad790e64f3a1150/cli/README.md).
- **N1:** [Neo4j core README and edition licenses](https://github.com/neo4j/neo4j/blob/11fe55832db7219cbdb9e4535cda9795a069610e/README.asciidoc).
- **N2:** [Community/Enterprise features and official language drivers](https://github.com/neo4j/docs-operations/blob/c9e563478a8d636cb7327c901d4688102da23ab4/modules/ROOT/pages/introduction.adoc).
- **N3:** [Full-text indexes: Lucene and lexical ranking](https://github.com/neo4j/docs-cypher/blob/5201435420544967908ac9089076a67cabe1165b/modules/ROOT/pages/indexes/search-indexes/full-text-indexes.adoc).
- **N4:** [Heap/page cache/native/OS/transaction memory](https://github.com/neo4j/docs-operations/blob/c9e563478a8d636cb7327c901d4688102da23ab4/modules/ROOT/pages/performance/memory-configuration.adoc).
- **P1:** [RDFLib README: stores, SPARQL, separate pySHACL/OWL-RL projects](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/README.md).
- **P2:** [RDFLib BSD-3-Clause](https://github.com/RDFLib/rdflib/blob/114dd59d48fc75aea7fcb3276bd0f13e4f3103b4/LICENSE).

Activity sources were each official repository's GitHub `/commits?per_page=1`, `/releases/latest`, and `/tags`, plus Jena's `git/ref/tags/jena-6.2.0`/annotated-tag API. Research cache was kept only in `/tmp/.cache/storage-review/`; the research changed no repository file beyond this report.
