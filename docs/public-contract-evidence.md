# Public review contract evidence

The review route catalog selects a named guidance card and at most two one-hop raw sections. A reviewed descriptor binds the exact emitted card and raw bodies. A complete pack supports only its named claim; it does not establish an application's resolved artifact versions or verify device behavior.

## Source selection

Six new cards use ten selected spans from seven official Git files. AndroidView, Toggleable and CoroutineScope are new crawl inputs; Effects, SnapshotState, Animatable and Modifier reuse existing inputs. Ordinary source chunks remain available alongside the selected spans.

AndroidX files were inspected at [`38c5b1ec5d6542ec80de315116eadf1a1db7fe8e`](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e). Kotlin CoroutineScope was inspected at [`ead082131ceb45b8e4fda027c74471103c1cd09f`](https://github.com/Kotlin/kotlinx.coroutines/commit/ead082131ceb45b8e4fda027c74471103c1cd09f). Both repositories use Apache-2.0; exact copyright notices and license provenance are retained. Released applicability is **unknown**.

| Route | Inspected source and inclusive lines | Supported scope |
| --- | --- | --- |
| interop | [AndroidView.android.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/ui/ui/src/androidMain/kotlin/androidx/compose/ui/viewinterop/AndroidView.android.kt), 110–165 and 179–190 | Per-instance factory/update, eligible reuse, reset before update with possible delayed/absent update, permanent release and resource cleanup. |
| nodes | [Modifier.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Modifier.kt), 175–192; existing official node-element section | Create/update/equality plus attachment-bound coroutineScope access, detached-access failure, and cancellation after onDetach returns. Arbitrary external-resource cleanup and all reset/reattachment behavior are outside this claim. |
| effects | [Effects.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt), 552–569; [SnapshotState.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotState.kt), 317–342 | Key restart and exit cancellation; current callback/parameter values without restarting a long-lived operation. |
| accessibility | [Toggleable.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/selection/Toggleable.kt), 125–137 and 309–348 | Caller-supplied state, inverse-value click request, updated callback/state semantics and enabled behavior. Unrelated handlers are outside this scope. |
| animation | [Animatable.kt](https://android.googlesource.com/platform/frameworks/support/+/38c5b1ec5d6542ec80de315116eadf1a1db7fe8e/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt), 205–217; [CoroutineScope.kt](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt), 378–383 | Interruption cancels the caller's sequence. A separately launched child ending with CancellationException preserves parent and siblings. Finished and BoundReached are distinct normal returns. |
| cancellation | [CoroutineScope.kt](https://github.com/Kotlin/kotlinx.coroutines/blob/ead082131ceb45b8e4fda027c74471103c1cd09f/kotlinx-coroutines-core/common/src/CoroutineScope.kt), 22–26 and 378–383 | Parent-scope cancellation reaches children; normal child cancellation does not cancel parent or siblings. Other failures and detached work are outside this claim. |

The existing compound, narrow node-update and performance-measurement cards have bound descriptors. The node route prefers a new combined configuration/attachment-scope card. The compound evidence was re-downloaded from [ExposedDropdownMenu.kt at aecce470261af232883b790016ce79fc51c962ca](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt), lines 106–175. It establishes a concrete exposed-dropdown state/event/scope/anchor example, not a general performance advantage. The official [ModifierNodeElement section](https://developer.android.com/develop/ui/compose/custom-modifiers#node-element) was reacquired and its extracted body matched the existing bound hash. Its create/update/equality behavior is combined with the complete Modifier.Node coroutineScope contract for the node route. The narrow original card remains available. The existing performance card binds the complete official [Layout Inspector](https://developer.android.com/develop/ui/compose/performance/tooling#layout-inspector) and [accurate timing](https://developer.android.com/develop/ui/compose/tooling/tracing#accurate-timing) sections; both were reacquired and matched their bound hashes. It requires timing/benchmark verification and a non-debuggable, profileable app, without claiming a measured speedup.

The full normalized file hashes and exact intervals are in `config/contract-spans.json`; emitted body hashes and named claims are in `config/review-contracts.json`. A full-file change suppresses a selected span pending review, even if the selected lines appear unchanged. A missing or changed bound section suppresses its guidance card. Required-source acquisition failure aborts refresh and reports affected spans as needing review.

## Local validation

The public baseline was `1a7433db51d3d15cb42a22aa8770caba43627d3b`. A separate local candidate, `f9e370a0ba49504dc142ae143e9273a35a7f16df`, preserved 2,983 nonaffected baseline raw sections and replayed seven exact captured sources through the production crawler. All prior curated documents were removed before applying guidance once. The candidate validated with 3,209 sections, 83 included cards, zero stale cards and ten selected spans. This was a targeted local candidate, not a full upstream refresh or public publication.

Eight independent local-candidate tasks each began with fresh local sync and made one default-ceiling lookup. Actual serialized UTF-8 pack bytes, including provenance, were:

| Route | Bytes | Sections | Transmission / named claim |
| --- | ---: | ---: | --- |
| interop | 8,854 | 3 | Complete / sufficient |
| effects | 5,825 | 3 | Complete / sufficient |
| compound-apis | 7,553 | 3 | Complete / sufficient |
| nodes | 6,057 | 3 | Complete / sufficient |
| accessibility | 5,671 | 3 | Complete / sufficient |
| animation | 5,059 | 3 | Complete / sufficient |
| cancellation | 4,118 | 3 | Complete / sufficient |
| performance | 4,494 | 3 | Complete / sufficient |

All packs fit the 12,288-byte allowance and retain unknown version applicability. The performance claim supports measurement conditions and verification guidance; it does not establish a measured benefit for any application. Its benchmark, UI and runtime-tracing requirements remain conjunctively unknown. Actual task ledgers recorded one attempt and exactly the emitted bytes/section counts. No measured consumer savings or unseen holdout result is claimed.

Changed-file checks include suppression of the node lifecycle span and combined node card when Modifier.kt changes. Missing-source and required-acquisition-failure checks exercised span/card suppression and refresh failure behavior. `npm run typecheck`, `npm run build`, and all 116 tests passed after config integration. No consumer Android build or device test was run.
