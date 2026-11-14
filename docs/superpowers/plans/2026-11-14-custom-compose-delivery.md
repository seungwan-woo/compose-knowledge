# Custom Compose reference workflow delivery

Status: implementation in progress. This delivery follows the measured six-question pilot and the user's requirement that private code is only inspected in the consumer's approved environment.

## Goal and scope

Deliver an easier installed workflow, targeted public contracts, bounded evidence packs and measured consumer usability. Keep private source, symbol maps, policies and findings out of this repository and its corpus. No private importer, graph, telemetry, automatic code upload, MCP server or new database in this delivery.

The earlier [design](../specs/2026-11-14-custom-compose-review-design.md) remains the evidence model. The user's subsequent reference-only requirement supersedes its optional private manifest/relationship-loader implementation. Consumer agents inspect local diffs and policies directly. The broad 28-case suite remains a later expansion; this delivery uses the frozen six public scenarios plus focused behavioral regression tests, without claiming an unseen holdout or a measured savings target in advance.

## Constraints

- Public AndroidX/Android/Kotlin sources and independently authored generic fixtures only; no private uploads or private review findings.
- Node 24, concise English repository documentation, legacy commands and corpus schema v1 compatible.
- New question: online sync first, immutable snapshot pin; cached/unavailable are distinct. No automatic build of a consumer project; unverified module/variant/artifact applicability stays unknown.
- At most 12,288 retrieval stdout bytes, three emitted sections and one-hop linked evidence per task shared across workers. Serialize concurrent task mutations. No task reset or unrecorded retry allowance.
- Preserve full provenance, conjunctive version requirements and curated-card uncertainty. Full transmission is distinct from sufficient evidence for a named claim.
- No public corpus publication, shared-branch merge, environment publication or private-data export is part of local verification.

## Consumer API

Keep `sync`, `search` and `read` unchanged. Add:

```text
begin --cache DIR --task FILE [--remote URL --ref corpus] [--offline] [--require ARTIFACT=VERSION]
route --query TEXT
lookup --task FILE (--query TEXT | --route ID) [--max-bytes N]
```

`begin` syncs first and exclusively creates a local task file containing the pin, sync status, explicit caller-supplied resolved versions and a zeroed ledger. It refuses an existing task file. `route` is advisory local navigation with at most two candidates; it is not evidence or a version resolver. `lookup` uses the recorded pin and versions, performs only local retrieval, selects one direct search hit and at most two one-hop source sections, and returns a compact pack. No network lookup query is sent. Two lookup attempts maximum per task allow a bounded explicit refinement. Default pack ceiling 6,144 bytes; maximum is the remaining 12,288-byte allowance, including the envelope. Legacy calls retain their 3,072-byte cap. A whole selected pack that cannot fit returns an explicit gap rather than silently trimming a contract.

The task ledger records emitted bytes, section reads and attempts under an exclusive lock and atomic update. Failed/empty attempts remain visible and cannot reset prior spending. Lock collisions execute no retrieval. Refuse invalid/corrupted pins or contexts. Versions on all chosen routes come from the same explicit context; a route does not invent or rewrite an app version.

`lookup` can return whole unreviewed evidence, but only a hash-valid reviewed descriptor can mark evidence sufficient for its named claim. The pack reports snapshot, route, scope, selected section IDs/content, a deduplicated source dictionary, each section's version status, transmission, sufficiency, gaps, related route IDs, and remaining allowance. Related routes are navigation, not verified call/ownership relationships. New routes and descriptors ship with the runtime and are package-relative, not fetched as executable code.

## Shared data formats

- `config/review-routes.json`: schemaVersion 1, routes with `id`, `title`, `keywords` (explicit English/Korean/API aliases), `queries` (artifact plus exactly one symbol/query), `cardIds`, `relatedRouteIds`. At most two query alternatives per route. Route suggestions explain matching terms. Unknown or ambiguous wording returns candidates/gap rather than pretending to interpret arbitrary language.
- `config/review-contracts.json`: schemaVersion 1, contracts with `id`, `claim`, `cardId`, `cardSha256`, `evidence` (one/two `{id,sha256}`). Descriptor hashes bind actual emitted card/raw bodies; absent/changed required evidence means insufficient/unreviewed, never sufficient. No automatic version upgrade.
- `config/contract-spans.json`: schemaVersion 1, spans with `id`, `sourceId`, `title`, `sourceSha256`, `startLine`, `endLine`. Hash the full normalized Git file (`CRLF` to `LF`), use inclusive one-based lines, and create an ordinary section with exactly `id`. Changed/missing file or invalid interval suppresses the span and yields needs-review. Retain ordinary chunks and old snapshots. Exact IDs/intervals are authored only after public-source inspection.

The implementer may factor these formats into small typed modules, but must notify the controller before changing fields consumed by another task.

## Task 1 — Runtime, routing, packs and selected spans

- [ ] Write meaningful failing tests for route aliases/ambiguity, hash completeness, version uncertainty, output/read/hop limits, retries, task locking/corruption, immutable pins and legacy compatibility.
- [ ] Implement the API and data formats above; ship seed routes for interop, effects, compound APIs, nodes, accessible interaction, animation, coroutine cancellation and performance evidence. Start with an empty descriptor/span catalog if public authoring is not ready.
- [ ] Extend crawling with optional selected spans and refresh reporting without changing ordinary chunks or canonical schema. Add hash/interval/source-change tests.
- [ ] Stage new runtime data in bundles; verify installed lookup works outside the checkout. Do not add a private context loader.
- [ ] Run typecheck and full tests, bundle/install/launcher checks; commit and receive an independent scoped review.

## Task 2 — Targeted public knowledge

- [ ] Research exact public contracts for AndroidView factory/update/reset/release, effect key/exit/current callback, toggle state/disabled behavior, and structured animation cancellation. Reuse existing compound/node knowledge where sufficient.
- [ ] Add only necessary official source inputs, at most ten concise guidance cards, complete selected spans and matching claim descriptors. Bind evidence hashes, revision, path, lines and license; retain unknown released applicability.
- [ ] Validate on a locally built candidate snapshot and document newly sufficient claims, unavailable evidence and stale-card behavior. Keep the public snapshot and candidate distinct.
- [ ] Run relevant tests and full checks; commit and receive independent review against full raw source.

## Task 3 — Installed skill and consumer documentation

- [ ] Shorten default SKILL to begin, scope, lookup, assess/stop. Keep detailed fallback/version/provenance explanations in optional references.
- [ ] Document one simple invocation, natural Korean/English questions, local-only query processing, direct consumer-local code inspection and approved internal mirrors/offline use. No private files or mapping templates are needed in this repository.
- [ ] Update README, AGENTS and consumer setup with concise output interpretation, failed-route recovery and shared task budgets. Use generic examples only.
- [ ] Bump bundle to 0.4.0, verify install and inspect all packaged files for unexpected content. Commit and receive scoped review.

## Task 4 — Independent acceptance and measurement

- [ ] Retain the six frozen public questions and the prior 0.3.4 baseline; separate same-corpus workflow comparison from new-corpus coverage.
- [ ] Exercise fresh installation, cached/unavailable sync, routing aliases, empty result, stale descriptor, budget exhaustion and local-only operation. Record exact pins and outputs.
- [ ] Run fresh consumer scenarios on the candidate, independently grade claim support, and report total captured text with the same named tokenizer plus explicit missing provider/hidden usage. Preserve failed trials and evaluation overhead. Do not claim a 20% reduction unless comparable evidence supports it.
- [ ] Run final checks and whole-change review. Deliver code, bundle and reproducible report; keep implementation and knowledge-publication status distinct.
