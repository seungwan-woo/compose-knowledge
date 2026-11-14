# Compose knowledge

A local CLI and skill for version-aware official AndroidX evidence retrieval in Codex implementation and review. Requires Node.js 24.

The baseline preserves **9 sections** from Material 3 **1.3.2**, Compose UI **1.7.8**, and pinned AndroidX sources with unverified release versions. Daily collection adds official documentation and current sources. These example evidence versions are not the target app's versions. The new collector uses this repository's input contract; it does not claim integration with existing crawler code that was never supplied.

## Start

```sh
cd /workspace/compose-knowledge
npm_config_cache=/workspace/.npm-cache npm ci --ignore-scripts
npm run build
npm test
node scripts/prepare-demo.mjs
```

The last command creates a local Git remote and cache from public fixtures, recording paths and the actual SHA in `.cache/demo/latest.json`. Each run creates a new directory without overwriting existing files. No separate server, database, or secret is required.

## CLI

```sh
node dist/cli.js --help
node dist/cli.js build --input tests/fixtures/knowledge-input.json --out /tmp/compose-corpus-NEW --json
node dist/cli.js validate --dir /tmp/compose-corpus-NEW --json
```

The build output directory must be empty. Choose a workflow upfront: packs cover AndroidView, effects, compound APIs, modifier nodes, toggles/accessibility, Animatable, coroutine cancellation and performance measurement. Other topics, including text, general layouts and menu/popups, retain [legacy sync/search/read](.agents/skills/compose-reference-context/references/workflow-details.md#legacy-manual-retrieval). Never mix workflows or switch after a lookup attempt. For a pack question, start one task and let lookup manage the pin and retrieval ledger:

```sh
node dist/cli.js begin --cache "$CACHE" --task "$TASK" --remote "$REMOTE" --ref corpus
# Inspect only relevant consumer-local code and available dependency facts.
node dist/cli.js lookup --task "$TASK" --query "effect restart keys current callback"
```

Choose a nonexistent local `TASK` file. Begin syncs online first; use `--offline` only when explicitly requested or configured. `fresh` verifies the configured remote now; `cached` uses older verified data without current freshness; `unavailable` stops retrieval. Keep the immutable full SHA and same task for follow-ups.

On the first lookup only, add repeatable `--require artifact=version` for actual resolved dependencies; omitted versions stay unknown. Context then freezes. `route --query TEXT` offers up to two advisory candidates using explicit English/Korean/API aliases; it does not translate arbitrary questions. Refine at most once on the same task with `--route ID` or a narrower query. Failed/empty attempts remain spent.

Packs contain selected sections and a deduplicated source dictionary. `transmission: complete` describes delivery, while `sufficiency: sufficient` supports only the named reviewed claim. Inspect scope, per-section `match`/`unknown`/`different`, gaps and provenance separately. Source support does not establish app behavior or dependency compatibility.

All workers share the task's ≤12,288 UTF-8 stdout bytes, three emitted sections, one link hop and two lookup attempts. The pack ceiling defaults to the remaining byte allowance; output contains only needed evidence. Serialize task mutations. Report gaps when evidence or allowance runs out; do not reset tasks or bypass their ledger with legacy reads. Legacy sync/search/read remain compatible; see [workflow details](.agents/skills/compose-reference-context/references/workflow-details.md).

## Install the Codex skill

To clone on a corporate PC and use another Android project, follow [AGENTS.md](AGENTS.md) and the [installation and corporate network guide](docs/consumer-setup.md). They cover project installation, internal Git mirrors, offline cache, and executable commands.

In a checkout, explicitly invoke `.agents/skills/compose-reference-context/SKILL.md`. For another workspace, bundle the skill and CLI at the same version.

```sh
npm run bundle
node scripts/install.mjs .cache/distribution/compose-reference-context-0.4.0.tar.gz /YOUR/SKILLS/DIRECTORY
```

The usual user skills directory is `~/.agents/skills`. The installer verifies the SHA256 sidecar and refuses to overwrite an existing skill. Transfer bundle and checksum together through a trusted channel. The checksum verifies transfer integrity; it does not replace a publisher signature.

After installation, invoke the skill once in a Codex prompt; no command flags need to be copied into the request:

```text
$compose-reference-context
Review the effect keys and callback lifetime in the current diff.
```

Natural English and Korean questions are supported through curated aliases. Local route/lookup processing sends no question or code to a network endpoint; online sync fetches the configured public corpus or approved mirror. Private code inspection requires an agent deployment approved for the consumer environment. Keep private sources, symbol maps, policies and review findings there; this repository needs no private uploads or mapping templates.

The agent reports a decision, local code location, short supporting contract and scope, version status, source reference and specific unresolved check. Distinguish source-level support, recommendations and actually executed app tests. Corpus sync updates data; new skill/runtime/catalog behavior requires a new bundle.

## Validation and reports

```sh
npm run typecheck
npm test
node scripts/evaluate.mjs .cache/evaluation-NEW
```

Evaluation output never overwrites existing results. The 20 questions were fixed before ranking implementation. Initial results: top 3 **18/20**, top 5 **20/20**, and **0** incorrect version labels. Top-5 results do not mean all were read within the 3-read limit.

- [Independent tests and retrieval evaluation](docs/reports/acceptance.md)
- [Sources, checksums, and licenses](docs/reports/source-research.md)
- [User-provided collection targets](config/sources.json) and [access diagnostics](docs/reports/source-access.md)
- [Consumer test without the skill](docs/reports/skill-baseline.md)
- [Skill usability test](docs/reports/skill-usability.md)
- [Daily collection validation](docs/reports/daily-refresh.md), [installed skill and publication integration tests](docs/reports/daily-acceptance.md), [independent review](docs/reports/daily-review.md)
- [Expanded corpus validation](docs/reports/coverage-expansion.md), [installed skill before/after comparison](docs/reports/coverage-usability.md), [independent review of 29 guidance cards](docs/reports/guidance-review.md)
- [Animation and coroutine expansion](docs/reports/animation-coroutine-expansion.md)
- [Component knowledge audit and remaining gaps](docs/reports/component-knowledge-audit.md)
- [Performance and component patterns, captured November 14](docs/reports/performance-patterns-expansion.md)
- [Sync-first validation](docs/reports/sync-first-verification.md), [local MCP, SQLite, and graph/RDF comparison](docs/reports/local-retrieval-tradeoffs.md)
- [Parallel implementation plan](docs/superpowers/plans/2026-11-12-compose-knowledge.md)

`Source.sha256` hashes the preserved excerpt's UTF-8 bytes. Upstream file/archive hashes are stored separately in `tests/fixtures/upstream/provenance.json` and were checked against official checksums. Generated corpus includes source provenance, copyright notices, and the Apache license.

## Daily collection and automatic updates

`Daily public corpus refresh` runs daily at **23:00 UTC the previous day / 08:00 KST**. GitHub scheduled runs can be delayed and become active after the workflow merges into the default branch. GitHub may disable schedules in public repositories after prolonged inactivity.

1. Fetch the **172 documents/sources** in [collection configuration](config/crawl.json), and separately monitor 1 dynamic Material 3 site. Collected source bodies and code are stored in corpus, beyond links alone.
2. Preserve text, provenance, hashes, and version status; build a new snapshot alongside existing version-specific evidence. Report added, updated, and removed section IDs.
3. A separate publication job updates the `corpus` branch only with validated data. No changes means no commit. Required collection failure, an invalid snapshot, or a concurrent publication after collection preserves existing data.

| Target | Automatic collection scope |
| --- | --- |
| 75 official Android guides | Bodies and code examples for state, effects, saving, layouts, Modifier, lists, Pager, input, gestures, text, graphics, animation, accessibility, performance, testing, Material3, and adaptive UI |
| 95 AndroidX sources/guides | Representative runtime, runtime-saveable, ui, ui-text, ui-graphics, ui-unit, foundation, foundation-layout, animation, animation-core, material, material3, and lifecycle-runtime-compose sources and API guidelines at exact Git commits |
| compose-samples | `README.md` at an exact Git commit |
| Kotlin coroutines | Official cancellation guide at an exact Git commit |
| Material 3 Compose guide | HTTP response/hash monitoring only; Angular body **not collected** |

Collection does not recursively crawl entire sites. New sections in configured documents are included automatically; other documents or source files must be added to `config/crawl.json`. Current web documentation and main-branch sources remain `unknown` for released-version applicability. Web `web:...@sha256:...` revisions hash preserved normalized content; they are not Git commits.

The earlier 2026-11-12 publication contains **158 source documents + 29 concise guidance cards**, **2,848 sections**, and **3,685,383 bytes** of text/code. The previous publication had 13 documents and 173 sections. These measurements describe that collection and can change with later source updates.

API names are explicitly registered as canonical names verified in source, with search aliases only on sections that actually mention them. For example, search the exact name `androidx.compose.runtime.LaunchedEffect`. Known Compose Android artifact aliases are also supported. This is not a collection of the entire AndroidX API catalog.

Results appear in the Actions job summary and `refresh-report` artifact. The `corpus-data` artifact contains only data that passed consumer validation. Required collection failure leaves a summary and failure report and skips publication. Public collection has read-only permissions; only publication has `contents: write`. No additional PAT is needed.

For manual validation in Actions, use `publish=false`. Publication is always disabled on feature branches. To publish initial data or refresh immediately from the default branch, choose `publish=true`.

```sh
gh workflow run refresh.yml --ref main -f publish=false
# Validate and automatically publish from the default branch
gh workflow run refresh.yml --ref main -f publish=true

# Local preview: output directory must be empty.
npm run build
node scripts/refresh.mjs --out .cache/refresh-NEW \
  --remote https://github.com/seungwan-woo/compose-knowledge.git
```

After public corpus publication, use the skill as follows:

```sh
node .agents/skills/compose-reference-context/scripts/compose-knowledge.mjs sync \
  --remote https://github.com/seungwan-woo/compose-knowledge.git \
  --ref corpus --cache .cache/public-corpus --json
```

Pin the returned `snapshot` SHA for subsequent search/read. `publishedAt` is the last data-change commit time and stays unchanged on daily crawls with no changes. `checkedAt` is this sync invocation's time and changes even offline. Check Actions results for daily collection success.

Background click delivery on Android devices and Codex execution on corporate PCs require separate validation. Uncollected dynamic Material 3 content and other sample Kotlin files are not provided as evidence.

## Knowledge generation and AI's role

Daily collection does not call generative AI APIs. Extracting official documentation/Kotlin source bodies and building sections, provenance, hashes, version status, and search indexes is reproducible in code. `corpus/knowledge/*.md` stores actual text and code; `index/sections.json` stores the same content and retrieval metadata.

Above the sources sit [77 concise topic guidance cards](config/curated-guidance.json), organized with AI and independently checked against original sources. Each body is at most 1,000 UTF-8 bytes and links to 1–2 evidence sections by ID and body hash. Search results mark them `Guidance:`; use `relatedIds` to read only needed sources. The bundle also includes [topic retrieval guidance](.agents/skills/compose-reference-context/references/topics.md).

The two [lazy-layout additions](docs/reports/lazy-layout-guidance.md) are authored configuration; consumers receive them only after merge and a successful corpus publication.

During daily collection, changed or missing evidence automatically omits its guidance and reports `needs-review`. Original sources remain available. An LLM does not rewrite guidance daily; register the [Dot/scheduled-agent curation instructions](docs/dot-curation.md) separately to review only changed items through revision PRs. Repository changes alone do not create a Dot schedule.

The animation/coroutine expansion adds 18 focused cards: Animatable sequencing, concurrency, interruption, stop/snap, fling velocity, gesture handoff, animation test clocks, event-driven scopes, frame-clock context, lifecycle-aware Flow, snapshotFlow purity, effect inputs, caller-owned suspend work, and cancellation. They use the same evidence hashes, one-hop links, and retrieval budgets. The 0.3.2 bundle adds routing rows for these topics; corpus sync alone does not update an installed topic table.

The component knowledge audit adds 18 source-bound decisions for public APIs, custom themes, composition locals, modifier nodes, interaction streams, measurement/intrinsics/RTL, touch targets, focus, accessibility actions, stability, frame clocks, calculation caching, and saved-state tests. The 0.3.3 bundle includes a separate [component routing table](.agents/skills/compose-reference-context/references/components.md), loaded only for relevant tasks. The audit records unfilled knowledge and retrieval gaps separately.

The performance/pattern expansion adds 10 cards for measured optimization, composition tracing, app Baseline Profiles, alpha compositing, compound components, named slots, library state interfaces, scoped parent data, and control ownership. Compound component is a repository synthesis of official contracts, not an Android pattern name or a performance guarantee. Bundle 0.3.4 adds optional [performance and pattern routes](.agents/skills/compose-reference-context/references/performance-patterns.md); target dependency compatibility and actual app performance still require consumer verification.
