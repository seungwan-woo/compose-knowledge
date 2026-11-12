# Independent sync-first and storage review

Reviewed 2026-11-12 against base `4bcabc7` on `codex/sync-first-and-storage-review`.

**Decision: approve. No blocking findings.** Scope is the 0.3.1 skill, consumer instructions, version metadata and research/verification reports. No MCP server, SQLite backend or graph database implementation is present in this change.

## Workflow and consumer instructions

The skill now directs a new Compose question to online sync before Gradle inspection, topic lookup or retrieval. Resolving the launcher/cache/remote is an explicit prerequisite. Earlier-question sync does not satisfy a new question; same-question follow-up keeps the full SHA. An explicit refresh establishes a new pin, and explicit offline configuration permits offline sync. These rules agree across the skill, AGENTS, README and consumer prompt example.

The status descriptions match `src/io/snapshot.ts`: fresh requires this invocation's fetch and validation; cached does not establish remote freshness; unavailable stops corpus retrieval. The instructions preserve latest-only requirements, unknown dependency versions, timestamp meanings and the distinction between corpus data and installed program updates. They make no claim that documentation mechanically enforces call order. Installation-time `--help` examples are setup checks, separate from a new Compose question's workflow.

I inspected the independent installed-consumer report and its saved temporary outputs. Online/offline statuses and full SHA match the report; search/read files contain 2048/1312 bytes, totaling 3360. The installed skill compares byte-for-byte equal to the repository skill. Six scenario rows are clearly identified as instruction-level evaluation rather than six runtime tests. Failure/unavailable runtime tests and Android project validation are not claimed.

## Architecture and factual checks

The storage comparison correctly separates MCP transport/tool contracts, lexical indexing, property graphs and RDF. Inspection of the domain types, CLI, snapshot validation, retrieval scoring and guidance builder supports its description of current behavior. The proposal retains immutable snapshots, source provenance, excerpt hashes, query-dependent version status, stale-guidance suppression and retrieval limits. Existing `relatedIds` are not promoted to unproven API dependency edges.

The four-query FTS prototype has different AND/ranking behavior and omits production policy checks. The report explicitly excludes equivalence of quality, full response speedups, DB memory measurements and operational readiness. The committed evidence JSON matches the prior local measurement file. Corpus size and stdout-reduction figures agree with the cited earlier coverage reports.

I checked the cached official primary sources behind the highest-risk claims: MCP TypeScript SDK's Apache-2.0 transition with remaining MIT contributions; Node 24 SQLite release-candidate status and disabled extension loading default; Oxigraph JavaScript/WASM in-memory storage versus native persistence; Neo4j Community GPLv3 versus commercial Enterprise components; RDF4J EDL/BSD-style licensing and the cited release's Java 25 POM; and Jena Java 21 plus incomplete OWL reasoner scope. The report distinguishes product core from optional components and does not infer a deployment's complete license obligations from the core alone.

RDF exchange, graph traversal, inference and SHACL validation are kept distinct. Open-world absence is not substituted for the application's explicit unknown-version contract, and named graphs/SHACL success are not presented as proof of source truth or version applicability.

## Resolved observations and review limits

- Resolved: the consumer guide's search example now uses limit 2 / 2048 bytes, matching the skill's starting recommendation.
- Clarified: the architecture report now explicitly states that the benchmark artifact preserves aggregates, that the seven individual timings and runnable prototype were not preserved, and that it is not a reproducible comparative benchmark. It requires a runnable harness and all trial results for the next comparison. Future backend selection still needs the proposed equivalent-policy correctness, cold/warm, memory and rollback checks.

I spot-checked these two documentation follow-ups. Approval stands with no remaining requested changes; neither follow-up changes the installed skill or runtime behavior.

This reviewer ran `git diff --check` successfully and performed read-only code/document/evidence checks. I did not rerun the full suite, rebuild, install a DB, modify Git state or contact remotes. The controller's reported typecheck and 84 passing tests are separate validation, not tests executed by this review. Only this review report was written by this reviewer.
