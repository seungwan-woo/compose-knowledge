# Performance and component patterns

Official sources were checked on November 14, 2026 for reusable Compose component implementation and review. Two GPT-6.1 Sol researchers handled performance and API patterns, GPT-6 Astra independently checked every new claim, and a separate Sol tester compared installed-skill retrieval. The private OneUI/sesl-compose repository was unavailable. Actual modules, variants, compiler configuration and resolved artifact versions remain unknown.

## Included decisions

| Area | Added guidance | Boundary |
| --- | --- | --- |
| Performance measurement | Verify timings with tracing and Macrobenchmark; use a profileable, non-debuggable app | Recomposition counts locate unexpected work but do not prove speed |
| Composition tracing | Expose composable work in system traces and check setup requirements | Method-tracing overhead and target toolchain matter |
| Baseline Profiles | Generate and verify profiles for critical app journeys | Compose's library profile does not cover app-specific journeys; gains require measurement |
| Alpha compositing | Choose Auto/ModulateAlpha with offscreen-buffer and overlap semantics in mind | Avoiding a buffer can change rendering; it is not a universal replacement |
| Compound components | Use ExposedDropdownMenuBox's explicit state, event, content scope and anchor contract as a concrete example | The pattern label is repository synthesis, not an official Android name, React namespace API or speed guarantee |
| Slot APIs | Let named composable slots configure their own content instead of mirroring every child option | Not every scalar parameter or configuration object should become a lambda |
| Library state interfaces | Group growing state/event contracts into caller-supplied types | Do not introduce hidden synchronization or nullable sentinels for internally remembered state |
| Parent-data scopes | Put child layout options on the parent content receiver scope | Lexical scope access does not guarantee a matching direct parent |
| Parent-data ownership | Keep configuration explicit, stateless and integrator-owned | Shared mutable state is a separate hoisted contract |
| Component controls | Pass controls into emitted UI; keep emitting and returning control values separate | Avoid caller ordering constraints and hidden initialization |

Existing guidance already covers state-read phases, strong-skipping comparisons, Stable guarantees, expensive calculations, derived state, lazy keys/content types/placeholder sizes, and drawing-object caches. These additions do not duplicate those cards or change the retrieval engine.

## Sources and freshness

The initial online sync returned `fresh` at public snapshot `4b1c0b32fa56665ed7d7248b01ee95d9880083d0`, checked `2026-11-14T02:00:27.313Z`, published `2026-11-13T03:05:06Z`. The latest completed scheduled [collection/publication run](https://github.com/seungwan-woo/compose-knowledge/actions/runs/43356191356) succeeded. A sync check time is not the source update time, and a scheduled run is not guaranteed to start exactly at 08:00 KST.

Four official inputs join the existing daily collection:

- [Performance tooling](https://developer.android.com/develop/ui/compose/performance/tooling)
- [Baseline Profiles in Compose](https://developer.android.com/develop/ui/compose/performance/baseline-profiles)
- [Composition tracing](https://developer.android.com/develop/ui/compose/tooling/tracing)
- [Material 3 ExposedDropdownMenu.kt](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

Pattern evidence also uses the freshly checked [Compose API guidelines](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/docs/compose-api-guidelines.md), [slot layouts](https://developer.android.com/develop/ui/compose/layouts/basics#slot-based-layouts), and [modifier scopes](https://developer.android.com/develop/ui/compose/modifiers#scope-safety). Compositing evidence uses the existing [graphics modifiers](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers) source. Unchanged captured sections may retain their prior provenance; fresh collection status and each section's recorded revision are distinct.

Current web/main evidence does not establish applicability to a released version in a consumer project. Preserve actual artifact identities, including benchmark-macro-junit4 and runtime-tracing, and resolve the consumer's toolchain before copying setup or API usage. Upstream source quotations and licenses remain recorded in the corpus.

## Review and candidate

All 10 new cards passed independent claim review against 19 exact raw-body hash bindings. Eleven references also matched the refreshed existing corpus; eight reference the four new inputs. Cards contain 517–727 UTF-8 body bytes and at most two mandatory references. All 67 prior authored cards remain unchanged. Source changes still suppress affected cards as `needs-review` through the existing builder.

The local reviewed candidate is `59389ff9ad86eb81a015152d902058bf79630bcd`. It combines the production 169-input existing-source refresh with production captures of the four new inputs; it is not a public corpus publication. A subsequent full production refresh of the final 173-input configuration succeeded: 172 ingested inputs and one monitor, all 77 cards included. Its validated section records compared identically to the reviewed candidate (zero additions, updates or removals), checked at `2026-11-14T02:12:08.239Z`.

| Measure | Public baseline | Local candidate |
| --- | ---: | ---: |
| Source documents | 172 | 176 |
| Guidance cards | 67 | 77 |
| Total documents | 239 | 253 |
| Sections | 3,055 | 3,124 |
| Configured inputs, including one monitor | 169 | 173 |

The candidate has 3,996,185 body bytes. Against the public baseline, 69 sections were added, 13 updated and none removed. The additions comprise 57 sections from new inputs, 10 cards, and two sections from refreshed existing sources. All 77 cards passed their mandatory evidence hashes.

`npm run typecheck` and all 87 tests in 11 files passed, including bundle, installation and launcher coverage. Bundle 0.3.4 adds the optional [performance and pattern routes](../../.agents/skills/compose-reference-context/references/performance-patterns.md). SKILL.md, runtime behavior, version handling, online-sync-first, the 12 KiB/three-read limit and one-hop evidence rules remain unchanged.

## Installed-skill retrieval

The [consumer comparison](performance-patterns-usability.md) freezes eight questions and their original artifact/FQN/query choices. Those fixed starting routes remain at 2 supported / 2 partial / 4 unsupported before and after; adding content does not fix a mismatched artifact filter. The choices are search starting contexts, not verified app dependencies. In particular, a benchmark FQN under the runtime artifact does not identify its true owner.

Five separately scored candidate-only diagnostics follow the new installed routing table for measurement, tracing, Baseline Profiles, compound coordination and named slots. All five retrieved sufficient evidence within the same per-question limits, at most 10,236 CLI stdout bytes and three section reads. Reading the 2,442-byte navigation reference is recorded separately from that CLI-output budget. These diagnostics are not a before/after ranking score. Both tests use AI evidence selection and grading, preserve full pins, start with fresh online syncs and leave actual dependency versions unknown.

## Remaining work

- Benchmark actual release/profileable workloads on target devices; this repository's source review is not an app benchmark or proof of a speedup.
- Check actual compiler settings before applying stability or lambda-allocation advice. Strong-skipping lambda memoization and DontMemoize are already present in raw sources; a dedicated concise decision card remains useful future work.
- Verify private component requirements, allowed child nesting, focus, accessibility semantics and OneUI styling against the consumer repository. The Material example cannot decide those policies.
- Distinguish newly collected knowledge from retrieval misses under fixed artifact filters and evidence budgets; the installed-skill comparison records both.

The expanded candidate remains local. After code review and merge, the existing daily collection validates the configured sources and publishes eligible guidance to the data-only corpus branch. This change does not create a Dot task, run an LLM in daily collection, or publish private repository data.
