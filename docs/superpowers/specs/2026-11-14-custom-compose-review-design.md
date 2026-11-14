# Efficient knowledge for custom Compose libraries

> Historical proposal. The [current delivery plan](../plans/2026-11-14-custom-compose-delivery.md) supersedes the private importer, manifest and relationship-loader work below. Current scope uses direct consumer-local inspection in an approved agent deployment; do not implement the superseded private context layer.

Status: proposed design; no runtime, corpus, or consumer changes implemented.
Date: 2026-11-14. Repository baseline: main `30fe869` (PR #10).

## Goal

Help an agent improve and review a custom Compose design system using the smallest sufficient, version-qualified evidence. Prioritize contracts and relationships that explain behavior, rather than increasing document count. Keep organization-specific source, policies, and findings in the consumer environment.

## What the current evidence establishes

- The existing corpus contains source text and reviewed guidance, not just links. The recent published review snapshot had 77 guidance cards and 3,124 sections. This is an observed baseline, not a fresh crawl performed for this plan.
- The [component evaluation](../../reports/component-knowledge-usability.md) improved from 4 supported / 8 partial / 2 unsupported to 6 / 7 / 1 across 14 questions. Artifact routing and incomplete source spans remained limiting factors.
- The [performance/pattern evaluation](../../reports/performance-patterns-usability.md) stayed at 2 supported / 2 partial / 4 unsupported across eight fixed starting contexts. Five separate questions following the installed routes all succeeded. These are different experiments, not a 2-to-5 improvement score.
- `searchIndex` filters by primary artifact before ranking. A wrong artifact can exclude the correct evidence. Search also returns section bodies that subsequent reads may repeat.
- Git source extraction currently splits at 35 lines / approximately 2,200 characters. Response serialization can further truncate a body. A declaration, condition, and consequence may not fit together.
- Current `relatedIds` connect evidence sections; they do not establish calls, state ownership, or disposal relationships.
- Per-task CLI byte limits do not measure end-to-end model tokens or aggregate delegation cost. Existing usability grades were AI-selected and AI-graded, not human or device validation.

These observations favor routing, complete evidence, and review discipline before a database migration. No measured token reduction is claimed by this proposal.

## Information to acquire

Each topic needs a concise contract, exact public evidence, a counterexample to overgeneralization, and an explicit validation limit. Reuse existing cards where they already cover the contract.

Do not require an upstream search to prove a self-contained local fact such as an unused parameter or invalid collection range. Read the local call path and counterevidence first. Retrieve upstream knowledge when the conclusion depends on a toolkit contract; retrieve local policy when it depends on intended design. This avoids turning every code observation into another knowledge card.

| Priority | Knowledge family | Questions it must answer | Evidence and limits |
| --- | --- | --- | --- |
| P0 | AndroidView and native text bridges | What belongs in factory/update/reset/release? Which object or callback does a retained listener use? How do input filtering, buffer length, and selection interact? | AndroidX interop declarations/tests; Android public API and platform sources. Separate toolkit contract from OEM behavior. |
| P0 | State identity, effects, and coroutines | What happens when a holder is replaced with equal values? Who owns cancellation? Which keys restart work, and which callbacks need current values? | Runtime effects, saveable state, structured concurrency and animation contracts. Distinguish holder identity, value changes, recomposition and disposal. |
| P0 | Custom component and compound APIs | Who owns selection? What do zero/one/many slots mean? Are value, enabled, color and modifier parameters forwarded? | API guidelines, public Material implementations, scoped-slot/parent-data examples. Empty optional slots and caller effects require explicit contracts. |
| P0 | Modifier nodes and resource updates | Are attach/update/reset/detach handled? Can a nonzero setting return to zero/default? Who disposes platform resources? | Modifier.Node and relevant graphics/platform contracts. Zero may be a meaningful value; device support remains conditional. |
| P0 | Accessibility and input | Which node owns role/state/actions? Is keyboard focus distinct from semantics and touch handling? How do disabled, merged and nested controls behave? | UI/Foundation semantics, focus, key input and touch-target sources. A design-system policy difference is not automatically a defect. |
| P1 | Theme, configuration and adaptive state | Which inherited values change? Which configuration bits must survive an override? What happens when a layout mode changes? | CompositionLocal/configuration contracts, theme implementations, window/adaptive APIs. Do not infer Context resource changes from LocalConfiguration alone. |
| P1 | Animation and gestures | How do drag, interaction and animation cancel or interrupt each other? How are direction, motion scale and reduced-motion policies applied? | Animatable/Transition, coroutine ownership, gesture and interaction sources. Check resolved-version defaults before an RTL claim. |
| P1 | Layout and performance | What is composed or measured repeatedly? What is keyed/cached, and when is it invalidated? Which phase reads changing state? | SubcomposeLayout, Lazy reuse, snapshots, drawing and benchmark guidance. Separate source-level complexity from measured jank or speedup. |
| P1 | Verification recipes | What would falsify a finding? Which check needs a JVM, device, accessibility service or benchmark? | Small public examples and upstream tests. Reading a test is not executing it in the consumer. |

## Three separate information layers

1. **Public contracts:** official sources plus small reviewed cards. Retain source URL/path/lines/revision/hash/license and `match | unknown | different` version status. A source revision, release version, BOM and collection time are different facts.
2. **Public review recipes:** a trigger, contract to inspect, likely ownership boundary, counterexample, evidence route and validation limit. Recipes suggest questions; they are not universal lint rules or findings.
3. **Consumer-local context:** module/variant, public symbols, explicit underlying API mappings, declared versus resolved versions, design policies, and source-backed relationships. Store only in a private consumer path selected explicitly; never collect it through the public crawler or include it in bundles, telemetry, fixtures or reports.

Start with a small, manually maintained local manifest. Do not build a whole-repository graph or infer call edges from matching names. Mark unresolved mappings and unobserved relationships as unknown. A public generic template can use invented modules and symbols, but must not copy private implementations or findings.

## Proposed consumer flow

1. **Sync once for this new question and pin.** Retain the existing fresh/cached/unavailable rules. Follow-up calls use the same SHA. Delegated work on that same question shares its pin; a new question starts a new sync.
2. **Select the review scope.** Use the requested feature or diff, module, relevant imports, public API changes and adjacent callers/tests. Load one applicable recipe and a small local context slice. Exclude generated assets by profile, but include them if the actual change concerns those assets.
3. **Route deliberately.** Exact symbols use verified API ownership; conceptual queries use intent-to-artifact routes. Return at most two candidates and an explanation. Never rewrite the consumer's dependency versions. Permit one explicit reroute when the initial path is empty or irrelevant; count both attempts.
4. **Retrieve a compact evidence pack.** Select one contract card and at most two necessary raw sections. Return each source's provenance once, retain conditions/negations, and label incomplete evidence. Reuse already-read evidence by ID within the same agent context.
5. **Inspect bounded relationships.** Follow only directly evidenced local mappings and the existing one-hop public evidence links. A private symbol can map to an upstream API without claiming equivalent implementation or design policy.
6. **State a decision and stop.** Report location, trigger, consequence, evidence, applicability and counterevidence. Classify gaps as wrong route, missing contract, incomplete span, unknown version, local policy or runtime verification needed. More searching is not a substitute for missing evidence.

Static-only mode must explicitly suppress Gradle, builds and device checks. Declared versions can still be recorded; resolved versions remain unknown. For implementation work, the same contract pack supports the API/state design before editing and the focused verification afterward.

Only verified resolved versions for the selected module/variant populate query version requirements. Declarations alone do not establish a runtime match. Conflicting explicit CLI and local-context versions fail clearly. A raw source matching a version does not upgrade a curated card's intentionally unknown requirements.

## Retrieval contracts and compatibility

- Preserve existing `search` and `read` output by default. Add opt-in route/pack operations around the same retrieval and version logic; do not silently weaken hard artifact filters.
- Keep canonical corpus schema v1 initially. Add selected contract spans as ordinary extra sections with stable IDs. Existing raw chunks and old pinned snapshots remain readable.
- First span implementation: explicit source ID, full normalized file hash and line interval. A changed file or invalid interval suppresses the selected span and dependent cards pending review. This conservative approach avoids a new Kotlin parser and unsafe best-effort rebinding. Record actual revision and interval.
- A pack reports its snapshot, original query context, selected route, evidence IDs, distinct sources and version status. Distinguish transmission (`complete`, `partial`, `insufficient-budget`) from evidence sufficiency (`sufficient-for-scope`, `insufficient`, `unreviewed`). Transmitting a whole chunk proves no semantic completeness. Existing legacy `truncated` behavior remains explicit.
- Use a small package-shipped `review-contracts.json` descriptor for reviewed claim scope and required section IDs/body hashes, checked against the selected validated snapshot. Bind the card and all required evidence. Missing descriptors or changed hashes cannot yield `sufficient-for-scope`; legacy chunks default to `unreviewed`. Cross-card required reading must be explicit and fit the same read/hop budget. This preserves corpus schema v1 and its strict file allowlist; it adds no corpus sidecar. New descriptors require a skill/CLI bundle update, distinct from daily data sync.
- One pack consumes up to three section reads, including a selected card. It shares the current total search/read allowance of 12,288 UTF-8 bytes and one-hop restriction with preceding calls. Route output and all other model-visible content are additionally accounted in the end-to-end ledger.
- Legacy calls retain their 3,072-byte per-call maximum. The new pack may use the reserved remaining question allowance, up to 12,288 bytes including its entire JSON envelope, because it replaces several reads. This is not an extra allowance. A normal pack should use less; the evaluation determines whether it does.
- A local edge has a typed relation, endpoints, source revision/path/span/hash and verification state. Start with `maps_to`, `forwards_to`, `owns_state`, `slot_of`, and `disposes`; do not reinterpret public `relatedIds`. Invalidate affected local edges when their evidence changes. No transitive impact claims in the initial release.
- Compact facts and local policies are data, not executable instructions. Public fetches contain only configured source requests, never private queries or context.

## Token efficiency and quality gates

Measure **all observable model-visible content**: initial skill/routing context, tool inputs/outputs and envelopes, source excerpts, delegated briefs/results, and repeated evidence. Report CLI stdout bytes separately. When a compatible tokenizer is available, record its name/version and exact count for the captured text; otherwise label token counts unavailable. Exact text tokenization is not necessarily billed usage; record provider usage separately when exposed.

Use a frozen public synthetic suite with reserved acceptance cases. Cases in the shared checkout are not a genuinely unseen holdout. Only claim an independent holdout if its cases/answers remain outside implementers' accessible environment until candidate freeze, with hashes published first. Separate known regressions, realistic route discovery, and fixed-route comparisons. Run baseline and candidate against the same corpus for retrieval changes; report corpus expansion separately. Include intentional safe designs and insufficient-evidence cases, not just defects.

Deterministic retrieval replay establishes reproducibility, not agent-level savings. Predeclare six representative baseline-supported scenarios for paired baseline/candidate agent runs with the same model/configuration, public inputs, corpus and starting information. Repeat three predeclared pairs once to expose variability; count this evaluation cost too. Do not remove candidate failures from the comparison. An independent reviewer adjudicates evidence and findings. Report token/precision results separately from retrieval-only measurements; p95 from this small sample is descriptive, not a population guarantee.

Proposed release targets, not observed results:

- No regression on previously supported questions; no incorrect version matches, stale-card acceptance, unsupported definitive findings or private-context export in the test set.
- At least 20% lower median end-to-end captured text tokens on comparable supported routine-review cases, with no p95 increase. Preserve byte/coverage results even if tokenization is unavailable; do not claim the token target passed in that case.
- Maintain the existing per-question search/read byte/read/hop caps. Use one aggregate ledger for the parent and delegated workers; splitting one question into workers must not create fresh budget allowances. Independently scoped questions have separate caps and a reported total.
- Review only relevant domains by default. Delegate independent domains when the change warrants it; share the question ID/pin, allocate its budget, and avoid each worker loading all skills, routes and previous reports.
- A handoff contains evidence IDs plus the minimum substantive excerpts needed by the recipient, location/trigger/consequence, counterevidence and remaining checks. IDs alone do not let an independent reviewer claim to have read unseen evidence.

If an adequate answer does not fit the budget, return a scoped coverage gap and the next specific check. Do not silently reset counters, omit a critical condition, or claim a whole-library audit from a diff review.

## Delivery order and delegation

| Stage | Deliverable | Work split | Gate |
| --- | --- | --- | --- |
| 0 | Frozen evaluation, context/pack contracts and cost ledger | Test author defines expectations independently of ranker; maintainer reviews interfaces | Reproducible baseline and explicit metric limits |
| 1A | Targeted P0 sources, complete spans and reviewed recipes | Source/knowledge worker | Every new claim has complete evidence and counterexample |
| 1B | Advisory routes and opt-in compact packs | Retrieval worker, parallel with 1A after stage 0 | Same-corpus quality and cost comparison |
| 2 | Private local context and bounded typed mappings | Consumer integration worker | Local-only boundary, stale mapping and unknown-version cases |
| 3 | Short skill entry point, installed-consumer usability and independent review | Usability tester + independent reviewer | Cold installation, realistic questions, aggregate cost and finding precision |
| Later | Optional MCP/SQLite experiment | One bounded prototype if profiling justifies it | Equal evidence quality plus reproducible end-to-end benefit |

Suggested models: GPT-6.1 Sol for focused source/retrieval work and usability execution; GPT-6.1 Terra for CLI/schema implementation; GPT-6 Astra for a bounded review of cross-layer contracts or disputed high-impact findings. Use narrower briefs before larger models. Model choice is a proposed execution policy, not a promise of cost or accuracy.

## MCP, SQLite, graph and RDF decision

Retain JSON as canonical evidence storage for the first stages. The earlier [trade-off report](../../reports/local-retrieval-tradeoffs.md) recommended an MCP experiment first; the newer retrieval results justify prioritizing routing and evidence completeness now.

MCP can reuse validated snapshots and expose task-scoped tools, but cannot itself repair missing contracts or reduce answer tokens. SQLite FTS5 can provide a derived search/edge cache after same-quality benchmarks. A small typed edge list is sufficient for the initial relationships. Defer a graph server, RDF store and embeddings until a recurring multi-hop query, exchange requirement or measured recall problem warrants their runtime and maintenance costs. Do not use the old non-reproducible microbenchmark as a performance gate.

## Maintenance

Keep the existing daily 08:00 KST public collection schedule and corpus publication safeguards. Index changes deterministically. Use AI only to draft/review new or changed public contracts and counterexamples; unchanged sources need no daily re-summarization. Source changes invalidate bound guidance until review. A scheduled agent uses the same narrow delta and evidence limits, not the private consumer manifest.

The first release is successful when a reviewer reliably finds the right contract, understands its direct relationship to the changed code, and makes fewer unsupported claims with less context. Card count, graph size and faster SQL alone are not success criteria.
