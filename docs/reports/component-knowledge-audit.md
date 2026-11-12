# Component knowledge audit and supplementation

The audit targets reusable Compose component implementation and PR review. The private `sesl-compose` repository was unavailable; its Material3-like structure and OneUI purpose informed topic selection, not claims about its code or design policy. All application modules, compiler settings, and resolved artifact versions remain unknown.

Three GPT-6.1 Sol researchers separately audited API/theme contracts, layout/accessibility, and runtime/performance/testing. GPT-6 Astra independently prioritized gaps and checked every selected claim against its bound raw evidence. A separate Sol tester froze 14 component questions before seeing the new cards and tested an installed skill outside this checkout.

## Findings and selection

Most gaps were missing compact guidance over already collected documentation, rather than absent upstream text. The prior animation benchmark's stop/snap and lifecycle misses were read-selection problems; this update does not duplicate those cards or weaken artifact/version filters.

| Area | Gap found | Included response |
| --- | --- | --- |
| Public component APIs | API guidelines were present but hard to retrieve as a concise signature rule | Single modifier parameter contract |
| Theme boundaries | No selected custom-design-system explanation | Theme extension/replacement choices and explicit Material component adapters |
| CompositionLocal | Existing raw scope/default and invalidation guidance lacked concise decisions | Tree-scoped dependencies, useful defaults, dynamic/static invalidation |
| Modifier nodes and interactions | Missing explanatory guides for update/equality and interaction ownership | ModifierNodeElement configuration contract; shared source and press completion pairing |
| Layout and accessibility | Raw guidance existed, while exact symbols sometimes missed it | One-measure constraints, intrinsic policies, RTL placement, touch space, focus requests, custom actions |
| Runtime/performance | Annotation assumptions and compiler-mode distinctions were not summarized | Stable contract, strong-skipping comparisons, calculation caching |
| Frame-driven animation | Earlier guidance used a DrawerState analogy | Actual finite-dispatch and MonotonicFrameClock sources; bounded frame-dispatch contract |
| Restoration testing | Saving design was covered but the test mechanism and its boundary were not | StateRestorationTester recipe and its composable-versus-process limit |

The selection adds **18 cards and six source inputs**. Existing state, effects, animation, coroutine, drawing, and semantics cards remain available. Source IDs, exact body SHA-256 bindings, aliases, and requirements are in [curated-guidance.json](../../config/curated-guidance.json); the existing builder omits cards whose mandatory evidence changes or disappears.

## New official inputs

- [Custom design systems](https://developer.android.com/develop/ui/compose/designsystems/custom)
- [Custom modifiers](https://developer.android.com/develop/ui/compose/custom-modifiers)
- [Handling interactions](https://developer.android.com/develop/ui/compose/touch-input/user-interactions/handling-interactions)
- [SuspendAnimation.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)
- [MonotonicFrameClock.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/MonotonicFrameClock.kt)
- [Stable.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime-annotation/src/commonMain/kotlin/androidx/compose/runtime/Stable.kt)

The captured `Stable` declaration belongs to `androidx.compose.runtime:runtime-annotation`; older released dependency ownership can differ. The restoration tester belongs to `androidx.compose.ui:ui-test-junit4`. These identities are preserved rather than reassigned to convenient search filters. Captured main/web evidence does not establish a compatible released version.

## Review decisions

All 26 mandatory evidence references for the new cards matched their exact raw bodies. Every card remains below 1,000 UTF-8 bytes and uses at most two evidence records. Independent review found no unsupported behavioral blocker. Two precision improvements were applied:

- The focus card names the captured Boolean-returning `requestFocus(focusDirection = FocusDirection.Enter)` overload and requires checking the project's actual version.
- The caching card uses complete source statements about `remember` keys and `Object.equals()` rather than relying on an incomplete warning at a chunk boundary.

Material theme and 48 dp accessibility examples are explicitly scoped; they are not presented as private OneUI token or behavior requirements. The interaction card does not infer accessibility semantics from a visual indication. The modifier-node card covers configuration updates, not unverified attachment or cleanup behavior.

The frame-clock card binds the finite-dispatch `withFrameNanos` path and runtime clock requirement. The full `Animatable` path also traverses `Animatable.kt` and additional `SuspendAnimation.kt` chunks. It is not claimed that two card references alone prove the whole transitive call chain for every animation operation or release.

## Collected and validated result

The previously merged 47-card main configuration was published successfully by [Actions run 43231243997](https://github.com/seungwan-woo/compose-knowledge/actions/runs/43231243997). Fresh public baseline: `17c7e27471ad8b63102af89159556e981856f46c`. Its sections compare identically to the earlier 47-card local test baseline `628b1ddfb38a7ab6dff06cdf152148efba7b1465` (zero additions, updates, or removals).

The expanded candidate was built and validated through the production collection/curation functions, then published to a local test remote as `6237d0eba6a6d1f8bb38c115af3eefa0f7c7c348`. This candidate has not been published to the public corpus.

| Measure | 47-card baseline | Reviewed candidate |
| --- | ---: | ---: |
| Source documents | 166 | 172 |
| Guidance cards | 47 | 65 |
| Total documents | 213 | 237 |
| Sections | 2,963 | 3,050 |
| Body bytes | 3,815,877 | 3,912,371 |
| Ingested inputs | 162 | 168 |
| Monitor-only inputs | 1 | 1 |

All 169 configured inputs completed successfully. All 65 cards were included; no existing section was removed or updated. The increase is 69 raw sections plus 18 guidance sections. The two wording improvements were applied by rebuilding the already validated collected data; no substitute raw evidence was introduced.

`npm run typecheck` and all 87 tests in 11 files passed. The 0.3.3 bundle adds [component routes](../../.agents/skills/compose-reference-context/references/components.md) through the existing topic table. SKILL.md, the 12,288-byte/three-read task limits, one-hop evidence links, and unknown-version handling are preserved. The [installed-consumer comparison](component-knowledge-usability.md) used 14 frozen questions: 4 usable / 8 partial / 2 unsupported before, and 6 / 7 / 1 after. The maximum candidate output was 11,562 bytes. Two separately scored routing diagnostics recovered touch-target guidance and the composable-restoration simulation boundary. Evidence selection was recorded by an AI tester under a fixed protocol; this is not a deterministic ranking benchmark. Reading source examples is not Android app execution.

## Remaining work, ranked

| Priority | Remaining gap | Why it is separate |
| --- | --- | --- |
| High | Released artifact/compiler applicability | Current main/web text cannot prove a private project's resolved versions. Select actual target versions before acquiring release-specific evidence. |
| High | Cross-artifact routing and complete evidence selection | Correct raw text can remain unreachable from a starting artifact or be skipped/truncated within three reads. Improve routing/read allocation and measure it before duplicating cards or loosening filters. |
| High | Custom content-color propagation | The theme adapter example does not prove a custom surface/LocalContentColor/child-text contract. Acquire and test that specific contract. |
| High | Insets/IME consumption and keyboard traversal | Insets, focus groups/order, and input modes need dedicated questions and sources; the focus-request card does not cover them. |
| Medium | Compound selection and complete component behavior tests | Role/state/action ownership and merged-tree testing deserve dedicated cases; custom actions and restoration cover only part of this area. |
| Medium | Exact Immutable and provider-nesting contracts | Stable guidance and provider summaries do not cover every distinct annotation or nested-lookup question. Validate the exact declaration and complete source spans. |
| Medium | Richer API and frame-clock relationships | A transitive implementation chain can exceed the evidence budget. Investigate explicit evidence-backed relationships without treating name similarity as a call edge. |
| Medium | Modifier lifetime and performance measurements | Node attachment/detachment, resources, reuse, and measured application performance need separate evidence and target-app tests. |
| Context-dependent | Private design-system policy | OneUI dimensions, colors, typography, motion, and intentional Material differences require the consumer repository's own requirements and tests. |

No graph database, MCP service, private-code inspection, or Android device execution was introduced by this supplementation.
