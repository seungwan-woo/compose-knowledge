# Animation and coroutine knowledge expansion

This update adds practical, source-bound guidance for Compose implementation and review. Research was delegated to two GPT-6.1 Sol workers (animation and coroutine/lifecycle), with independent GPT-6 Astra evidence review and an installed-consumer tester. All authored guidance and routing instructions are English.

## Scope and measured corpus

The baseline was freshly synced from the public `corpus` branch at `9b3d86c1dd4e03bce39df75116de8c06f1cee881`, published 2026-11-12 at 12:46:29 UTC. The reviewed candidate was validated and published to a **local test remote**, producing `628b1ddfb38a7ab6dff06cdf152148efba7b1465`; this is not a public publication claim.

| Measure | Baseline | Reviewed candidate |
| --- | ---: | ---: |
| Source documents | 158 | 166 |
| Guidance cards | 29 | 47 |
| Total documents | 187 | 213 |
| Sections | 2,848 | 2,963 |
| Source/code/guidance body bytes | 3,685,513 | 3,815,877 |
| Configured ingestion sources | 154 | 162 |
| Monitor-only sources | 1 | 1 |

The full production refresh collected all configured sources successfully. It added 97 raw sections and 18 guidance sections, with no existing section removed or updated relative to the baseline. All 47 cards passed their exact evidence hashes; none was omitted. After source review, two card bodies were refined and the validated collected data was rebuilt with the production curation/build/validation functions. No additional crawl or substituted evidence was used for those wording corrections.

The existing daily schedule includes the new sources once this configuration is merged. Changed or missing evidence continues to suppress its card until reviewed. Web/main-branch evidence retains unknown released-version applicability.

## New official sources

| Source | Contribution |
| --- | --- |
| [Animation quick guide](https://developer.android.com/develop/ui/compose/animation/quick-guide) | Sequential suspending calls and concurrent child coroutines |
| [Gesture and animation](https://developer.android.com/develop/ui/compose/animation/advanced) | Drag ownership, interruption, velocity tracking, and fling handoff |
| [Animatable.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt) | Cancellation, bounds, stop/snap, and result velocity contracts |
| [Animation testing](https://developer.android.com/develop/ui/compose/animation/testing) | Manual clock control and frame-duration rounding |
| [SnapshotFlow.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotFlow.kt) | Read-only, idempotent snapshot observation |
| [Lifecycle FlowExt.kt](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt) | Lifecycle thresholds, stop/restart, and StateFlow initialization |
| [Android coroutine best practices](https://developer.android.com/kotlin/coroutines/coroutines-best-practices) | Caller-owned suspend work, structured concurrency, and cooperative cancellation |
| [Kotlin coroutine cancellation](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/docs/topics/coroutines-cancellation.md) | Rethrowing CancellationException to preserve propagation |

The Android documentation license page and Kotlin repository license identify Apache-2.0. Sources retain their URLs, revisions, line ranges where available, excerpt hashes, and license metadata. Sources remain data, never executable instructions.

## New guidance

Each card has one or two mandatory raw section IDs and SHA-256 hashes in [curated-guidance.json](../../config/curated-guidance.json). Bodies stay below the existing 1,000-byte limit. The builder derives `relatedIds`, provenance, and unknown-version requirements from those evidence records.

| Card ID | Implementation or review decision |
| --- | --- |
| `guide-animatable-explicit-start` | Choose a remembered starting value; qualify spring velocity continuity |
| `guide-animatable-sequential-suspend` | Sequence animations by awaiting suspending calls |
| `guide-animatable-concurrent-children` | Animate separate values concurrently in child coroutines |
| `guide-animatable-interruption-cancels-chain` | Distinguish cancellation, normal return, and target completion |
| `guide-animatable-stop-versus-snap` | Stop at the current value or immediately replace it |
| `guide-animatable-decay-velocity-handoff` | Read remaining velocity from AnimationResult.endState |
| `guide-animatable-gesture-fling` | Review touch/animation ownership and stop placement |
| `guide-animation-test-manual-clock` | Inspect intermediate states with a controlled test clock |
| `guide-coroutine-scope-user-events` | Launch suspend UI responses from event callbacks |
| `guide-no-launch-during-composition` | Keep coroutine launch out of the composable body |
| `guide-ui-animation-frame-clock-context` | Supply the UI coroutine context needed by animated state operations |
| `guide-android-flow-lifecycle-state` | Select lifecycle-aware Flow collection and its active threshold |
| `guide-platform-agnostic-flow-state` | Choose collectAsState for platform-agnostic code |
| `guide-effect-restart-input-audit` | Separate restart inputs from latest-value captures |
| `guide-snapshot-flow-pure-read-block` | Keep snapshotFlow blocks read-only and idempotent |
| `guide-suspend-work-caller-lifetime` | Preserve caller control over suspend work and child jobs |
| `guide-coroutine-cooperative-cancellation` | Add cancellation checkpoints to long-running work |
| `guide-coroutine-rethrow-cancellation` | Rethrow cancellation after local handling |

## Review and validation

Independent evidence review checked every new claim, artifact/FQN, exact body hash, size, and released-version limitation. Two findings were resolved: `BoundReached` is also a normal animation return, so target-completion work needs an `endReason` check; gesture guidance is conceptual and requires checking stop placement rather than copying the sample loop verbatim. Cancellation rethrow guidance was added only after its explicit Kotlin source was collected.

`npm run typecheck` passed. All 87 tests in 11 files passed, including bundle installation and the installed launcher. The skill workflow and its task budget remain unchanged: 12,288 UTF-8 search/read stdout bytes, at most three section reads, and one hop from direct hits. The 0.3.2 bundle adds five topic-routing rows; an existing installation needs a bundle update to receive that table, while corpus data still updates through sync.

The [installed-consumer comparison](animation-coroutine-usability.md) used 12 questions frozen before authoring. Fully supported answers increased from 2 to 7; partial answers changed from 6 to 5; unsupported answers fell from 4 to 0. Maximum after-run output was 11,545 bytes, within the unchanged 12,288-byte and three-read limits. Separate topic-guided checks found the caller-ownership and cancellation-propagation evidence without changing the frozen scores. Frame-clock evidence remains an analogy from DrawerState for the exact Animatable question. These tests evaluate retrieval and evidence use; they do not execute Android application code or establish compatibility with a private consumer project.
