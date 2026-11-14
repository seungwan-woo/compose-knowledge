# Efficient custom Compose review implementation plan

> Historical proposal. The [current delivery plan](2026-11-14-custom-compose-delivery.md) supersedes the private importer, manifest and relationship-loader work below. Current scope uses direct consumer-local inspection in an approved agent deployment; do not implement the superseded private context layer.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve contract discovery, direct relationship understanding and evidence quality while reducing total model-visible context for custom Compose implementation and review.

**Architecture:** Keep the validated JSON corpus and version logic. Add selected complete spans, small review recipes, advisory routing, an opt-in evidence pack and an explicitly private consumer context layer. Measure costs before choosing an optional backend.

**Tech Stack:** Existing Node 24, TypeScript, Vitest, JSON and Git snapshots. No new database, embedding service, Android build or remote model runtime is required for the first release.

**Spec:** [Proposed design](../specs/2026-11-14-custom-compose-review-design.md).

**Status:** Planning only. None of the tasks below have been implemented or validated by this document. File names marked new are proposed interfaces, not existing capabilities. Base implementation work on the latest main and recheck drift from `30fe869`.

## Global Constraints

- Keep documents and agent instructions concise English; preserve source identifiers and quotations.
- Never add private source, company policies, findings, real local paths or identifiers to public corpus, examples, fixtures, PRs or telemetry. Use independently authored public synthetic examples.
- Preserve sync-first per new question, immutable pins, provenance/licenses, conjunctive requirements and unknown versions. No automatic dependency resolution when a consumer requests static-only analysis.
- Keep default `search`/`read` behavior compatible. Preserve corpus schema v1 and old snapshot access in this release; use separately versioned local/evaluation formats.
- Search/read, including pack contents, share 12,288 stdout bytes, at most three section reads, and one hop per question across all workers. Track other model-visible text and independently scoped question totals as well.
- Do not implement optional MCP/SQLite/graph work inside these PRs. Do not modify the daily schedule or auto-publish private context.

## Review Focus

Incomplete or stale evidence presented as complete; route changes silently changing version context; local mappings promoted into global truths; duplicate evidence hidden from cost accounting; policies or runtime hypotheses reported as proven defects; evaluation leakage; packages missing new runtime data files.

## File and responsibility map

| Area | Existing files to extend | Proposed new files |
| --- | --- | --- |
| Independent evaluation | `scripts/evaluate.mjs` remains the legacy baseline; existing frozen questions stay unchanged | `evaluation/custom-review/{regressions,acceptance,rubric}.json`, `scripts/evaluate-custom-review.mjs`, `docs/reports/custom-review-evaluation.md` |
| Contract spans | `src/refresh/crawl.ts`, `src/refresh/types.ts`, `scripts/refresh.mjs`, `config/crawl.json` | `src/refresh/contracts.ts`, `config/contract-spans.json`, `tests/contracts.test.ts` |
| Reviewed guidance | `config/curated-guidance.json`, `src/knowledge/curate.ts` only if needed | `.agents/skills/compose-reference-context/references/custom-review.md` |
| Routes and compact packs | `src/cli.ts`, `src/retrieval/search.ts`, `src/retrieval/budget.ts` | `src/retrieval/{contracts,routes,pack,ledger}.ts`, `config/{review-routes,review-contracts}.json`, `tests/{routes,pack,ledger}.test.ts` |
| Private context | `src/cli.ts`, `docs/consumer-setup.md` | `src/consumer/{context,relations}.ts`, `tests/consumer-context.test.ts`, `examples/consumer-context.example.json` |
| Distribution and usability | `scripts/bundle.mjs`, `tests/distribution.test.ts`, skill `SKILL.md`, `references/topics.md`, `AGENTS.md` | `docs/reports/custom-review-usability.md` |

No generated corpus, new relation service or repository-wide parser is needed. Add narrowly scoped fixtures alongside each new test file. Update the file map if implementation discovers a simpler integration.

## Shared contracts to freeze in Task 0

- **Review context v1:** question ID, corpus SHA/status, module/variant, analysis mode (`static-only` or `execution-allowed`), per-artifact declared/resolved versions, scoped public symbols, and explicit local-policy references. Only verified resolved versions for that module/variant populate query requirements. Unknown is representable; declarations and BOMs cannot fill a resolved field. Conflicting explicit CLI/context values fail. Matching raw sources do not upgrade curated-card uncertainty.
- **Route suggestion v1:** at most two artifact/symbol/query candidates, reason and recipe ID. Preserve the original context. The agent may explicitly select one reroute within the same ledger; no user confirmation is needed. No extra network query or hidden search.
- **Pack request v1:** pinned context, direct search-hit IDs, chosen card/raw IDs and remaining byte/read allowance. Select at most three sections; any linked selection must be one hop from a direct hit. No arbitrary transitive expansion.
- **Pack response v1:** snapshot, original context/route, selected section IDs, compact contract/raw content, deduplicated full provenance, per-section version, remaining allowances and gap reason. Separate transmission (`complete`, `partial`, `insufficient-budget`) from evidence sufficiency (`sufficient-for-scope`, `insufficient`, `unreviewed`). An empty complete pack is invalid; whole legacy chunks remain semantically unreviewed by default.
- **Review descriptor v1:** named claim scope, card ID/body hash and all required evidence IDs/body hashes. Ship in validated package data `config/review-contracts.json`, then bind to the selected snapshot at read time. Changed/missing evidence cannot be sufficient; required sections must fit the same three-read/one-hop allowance. Keep corpus schema v1 and its strict path allowlist unchanged. New descriptors require a bundle update; daily corpus sync alone cannot introduce them.
- **Ledger v1:** question ID/pin, ordered call IDs, actual UTF-8 stdout bytes, section-read count, direct-hit IDs, selected links and reported model-visible text. A local coordinator serializes reservations/commits for worker calls; retries and repeated reads count. A worker cannot create a new allowance for the same question. Tokenizer/provider usage is optional, explicitly labeled and stored outside the public corpus.
- **Private context/edge v1:** consumer root and commit identity, scoped module/API mappings, optional design policies and typed relationships; each verified edge binds local path/span/hash/revision. Stale or unverified data cannot establish a behavioral claim. The file is data only, loaded only by explicit path.

Choose exact TypeScript/JSON shapes in the first task and review them before parallel work. Share the small contract file and fixtures, not the full design history.

## Task 0 / PR A — Freeze evaluation and interfaces

Owner: focused evaluation worker (Sol), reviewed by maintainer. This task unblocks independent knowledge and retrieval work.

- [ ] Create an independently authored public suite: 12 known contract/route regression cases, 8 safe-design or insufficient-evidence counterexamples, and 8 reserved acceptance cases. Cover the P0 families, artifact ambiguity, version uncertainty and UTF-8/Korean queries. Shared-checkout cases are not an unseen holdout; claim a holdout only if separately controlled cases/answers remain inaccessible until candidate freeze, with hashes published first.
- [ ] Define accepted evidence, forbidden overclaims, applicability and a finding rubric before candidate changes. Separate correct abstention from unsupported retrieval. Do not copy private bugs or private source into fixtures.
- [ ] Freeze question/rubric hashes, corpus pin, route policy and tool/runtime versions. Preserve all trial commands and exact outputs in local ignored run directories. Public reports contain only public fixture data and aggregate results.
- [ ] Predeclare six representative baseline-supported agent-cost cases and three pairs to repeat once. Freeze the model/configuration, public starting context and adjudication rubric; a candidate failure stays in the comparison. Keep this paired-agent experiment separate from deterministic retrieval replay.
- [ ] Add the shared request/result types in `src/retrieval/contracts.ts` and fixture schemas in the evaluator. Specify validation failures and minimum metadata behavior; do not advertise the future CLI commands yet.
- [ ] Implement `scripts/evaluate-custom-review.mjs` with a baseline driver for existing search/read. Record supported/partial/unsupported/abstained decisions, citation sufficiency, version errors, output bytes, total captured text, p50/p95 and cold/warm elapsed time. Record tokenizer name/version or `unavailable`; do not convert bytes with a guessed constant.
- [ ] Add ledger tests for repeated/parallel reservations, cancellation/retry accounting, Unicode bytes, shared question identity and exhaustion. Implement the small deterministic ledger; keep full captured traces outside agent context.
- [ ] Run the evaluator twice with distinct result directories to prove reproducibility. Run `npm run typecheck` and `npm test`. Report legitimate environment variance rather than overwriting earlier evidence.
- [ ] Review metric limitations and commit as `test: establish custom Compose review and context budgets`.

Acceptance: a reproducible current baseline, agreed interfaces, no weakening of legacy frozen tests, and explicit visibility gaps in token accounting. The count of test cases is a bounded starting suite, not a claim of complete Compose coverage.

## Task 1 / PR B — Fill P0 contracts without broad crawling

Owner: source/knowledge worker (Sol). Can run alongside Task 2 after Task 0. Own collection/config files; coordinate shared contract changes through the maintainer.

- [ ] Inventory existing cards and routes against the five P0 families. Reuse sufficient entries; add only missing behavioral contracts, initially at most ten new cards. Record why each addition resolves an actual knowledge gap rather than a wrong-route symptom.
- [ ] Add specific official AndroidX/Android sources to `config/crawl.json`: interop lifecycle, effects/holder ownership, component/slot contracts, node updates and semantics/focus. Verify retrieval access, provenance and licenses before binding claims. Monitor-only pages do not count as evidence.
- [ ] Write contract-span fixture tests first: valid exact slice, full-file hash change, moved/out-of-range span, Unicode, multiple spans and unavailable source. Keep ordinary source chunks unaffected.
- [ ] Implement `src/refresh/contracts.ts` and a separate schema-v1 `config/contract-spans.json` with source ID, normalized file SHA256, line interval and stable section ID. Capture the current actual revision and lines in generated ordinary knowledge sections. Integrate with crawl/refresh without executing source text.
- [ ] On mismatch omit the selected span, emit `needs-review` in the refresh report and let dependent guidance be suppressed. Never silently rebind the interval. Verify old snapshots and unrelated raw evidence remain usable.
- [ ] Bind concise cards through the existing one/two-evidence hash mechanism and 1,000-byte body limit. If the contract cannot fit safely, split by independent claim and declare required reading; do not remove critical conditions to meet the limit.
- [ ] Author reviewed claim descriptors in `config/review-contracts.json` using Task 0's interface; bind card/evidence hashes and all required reading. Task 2 owns the loader, not these data entries. Mark claims exceeding read/hop limits insufficient rather than ignoring their dependencies.
- [ ] Write the optional `references/custom-review.md`: one route per family, trigger, ownership question, counterexample and validation limit. Keep recipes separate from claims of defects. Reuse animation/performance references instead of repeating them.
- [ ] Run focused contract/crawl/curate tests, then required typecheck/test checks. Evaluate corpus expansion against unchanged baseline retrieval separately from Task 2's search improvements.
- [ ] Have an independent reviewer inspect every new card against full raw evidence; commit as `feat: add complete custom component contract evidence`.

Acceptance: every new claim traceable to complete public evidence, no stale summaries on changed hashes, and P0 gaps resolved or explicitly recorded as unavailable. P1 expansion follows measured demand, not this card-count ceiling.

## Task 2 / PR C — Route and return compact evidence

Owner: retrieval worker (Terra). Parallel with Task 1 using Task 0 synthetic sections; integrate Task 1 cards only after same-corpus evaluation.

- [ ] Write route tests for exact owner, concept query, ambiguous owner, wrong artifact, absent route and Korean aliases. Test declared-only versions, conflicting CLI/context values, module/variant isolation and retained curated-card uncertainty. Retain exact requirements and `includeDifferent` semantics. Return suggestions, never silently widen a hard artifact search.
- [ ] Implement a small validated `config/review-routes.json` and `src/retrieval/routes.ts`; expose proposed `route` operation in `src/cli.ts` with at most two suggestions. Never infer API ownership from a bare symbol collision.
- [ ] Write pack tests for direct-hit/one-hop validation, three-read allowance, already-spent budget, missing IDs, source deduplication, mixed requirements and stale guidance. Test transmission separately from sufficiency: whole unreviewed chunk, missing/changed descriptor dependency, and decisive condition at the end of a reviewed span.
- [ ] Implement `src/retrieval/pack.ts` and opt-in `pack` CLI operation on the existing validated snapshot and version logic. Send only needed sections and one source dictionary; preserve readable evidence and full provenance. Keep old search/read output stable.
- [ ] Integrate pack serialization with `budget.ts` without changing legacy semantics. Legacy calls keep their 3,072-byte maximum; pack may reserve up to the remaining 12,288-byte question allowance, including its complete JSON envelope. For a complete pack include full selected evidence or return explicit insufficiency; never mark character-trimmed behavioral evidence complete. Pack selection counts as section reads even if one tool invocation returns several sections.
- [ ] Wire route/search/read/pack calls into the ledger for the new workflow. Include route output in end-to-end accounting, and charge pack stdout/read counts against the existing retrieval cap. Replay or duplicate calls cannot reset counters.
- [ ] Extend bundle staging to include validated route and review-descriptor data at stable package-relative paths; do not rely on the caller's checkout or working directory. Validate descriptor hashes against the task snapshot before asserting sufficiency. Verify no consumer context enters the bundle.
- [ ] Evaluate baseline/candidate on the exact same frozen corpus and cases, then separately report integration with new knowledge. Run typecheck, tests, bundling, installation and launcher checks for this distribution change.
- [ ] Commit as `feat: add bounded routing and contract evidence packs` after independent review.

Acceptance: legacy compatibility; no supported-case regression, version errors or hidden evidence truncation; no budget/hop/read bypass; candidate cost/quality reported even if the proposed reduction target is missed.

## Task 3 / PR D — Connect private context without exporting it

Owner: consumer integration worker (Terra); start after shared pack/context interfaces are stable. No access to an actual private repository is required for public implementation tests.

- [ ] Define a small invented `examples/consumer-context.example.json`: module/variant, declared/resolved versions, a few custom-to-upstream API mappings, policy references and evidence-backed local relationships. Document that adoption belongs in the consumer's private environment.
- [ ] Write loader/relationship tests for explicit-path loading, path containment/symlinks, unknown versions, commit/hash drift, invalid relation types and version-incompatible mappings. Never execute embedded text, URLs or commands.
- [ ] Implement `src/consumer/context.ts` and `relations.ts`. Keep relations in a bounded local JSON slice; begin with `maps_to`, `forwards_to`, `owns_state`, `slot_of`, `disposes`. A mapping is not equivalence. Return only the requested symbols and directly evidenced edges.
- [ ] Add explicit `--context` support to the new workflow. Do not auto-discover files outside the consumer root or include local data in public queries, corpus generation, evaluation reports or package assets. Remote sync remains a public snapshot request independent of private query text.
- [ ] Add a synthetic outbound-request capture test proving that local paths/symbols/policies do not appear in network requests. Check bundled file inventory and report redaction with synthetic sentinel values.
- [ ] Document static-only handling, manual manifest maintenance, declared/resolved distinction, stale-context recovery and unknown edge coverage in `docs/consumer-setup.md`. Local context must work without Gradle, a graph server or a model.
- [ ] Run focused tests and required typecheck/tests; include distribution checks if packaged files change. Commit as `feat: support private scoped Compose review context`.

Acceptance: a public fixture can answer which directly mapped contract is relevant without exporting local context or implying transitive impact. Missing edges and unverified versions remain explicit unknowns.

## Task 4 / PR E — Validate the installed skill and actual review cost

Owners: independent usability tester (Sol) and bounded final reviewer (Astra). Neither grades their own implementation. Root coordinates and resolves disagreement against evidence.

- [ ] Shorten the default skill entry path to sync, scope, route, pack, apply/stop. Load only the chosen optional route/recipe. Preserve freshness, applicability, provenance and budget rules in the installed entry point.
- [ ] Update `AGENTS.md` and consumer instructions with shared-question pin/budget ownership and a compact handoff format. Do not require six agents or all review domains for every PR. Keep implementation and review use cases distinct.
- [ ] Install the candidate bundle into a fresh isolated consumer directory. Exercise offline/cached/unavailable cases, wrong route, one reroute, static-only context, changed evidence, a safe intentional design, budget exhaustion and worker handoff. Do not preload checkout-only reference files.
- [ ] Run reserved public acceptance scenarios once the candidate is frozen. Execute Task 0's paired agent-cost cases with identical model/configuration, corpus and starting context, including the predeclared repeats. Capture initial skill/route reads, tool schemas/envelopes, synthetic local excerpts, briefs/results and duplicate reads. If a host hides usage, state the unmeasured component rather than claiming complete token savings.
- [ ] Independently adjudicate supported-case coverage and finding precision first; then test the proposed median 20% reduction and non-increasing sample p95. Publish sample size, variability, evaluation cost, byte/latency measurements and tokenizer/usage limitations separately. A small-sample p95 is descriptive, not a population guarantee. Retain failures; do not shrink the comparison set after seeing candidate results.
- [ ] Perform the bounded independent review: card truth, version status, whole-contract completeness, local-data boundaries, negative cases and cost accounting. Review the strongest claims against actual text; root adjudicates, narrows or removes unsupported claims.
- [ ] Run repository checks, bundle/install/launcher verification and existing frozen acceptance checks. Write `docs/reports/custom-review-usability.md` with exact reproducible pins and trace hashes; use public synthetic material only.
- [ ] Commit as `docs: validate efficient custom Compose review workflow`. Open reviewable PRs only under the execution request; do not auto-merge them.

Acceptance: working installed-consumer workflow with honest quality/cost results. A missed performance target is an explicit follow-up, not a reason to relax evidence requirements. No Android build or device validation is implied.

## Optional follow-up decision, not an implementation task

After Task 4, profile repeated parsing/validation and ranking failures with a retained executable harness. If process/cache overhead dominates, compare a minimal local MCP adapter over the same service. If search latency or ranking is limiting, compare SQLite FTS5 as a derived snapshot-keyed cache. Preserve task pins, cold/warm measurements, equal evidence quality and offline installation. Try typed edge tables before a graph server; evaluate RDF only for a concrete exchange/query requirement.

## Rollout and rollback

Each PR is independently reviewable; Tasks 1 and 2 can proceed in parallel after Task 0, while integration and acceptance follow their interfaces. Keep route/pack opt-in until installed-consumer acceptance passes. Legacy commands and immutable old snapshots remain available. A failed selected-span revalidation suppresses only dependent guidance; publication still follows existing validation and race safeguards. Remove or disable optional local mappings without affecting the public corpus.

This planning change does not run the future checks, alter the corpus, install tools in another environment, or publish a PR.
