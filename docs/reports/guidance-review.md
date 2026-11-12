# AI-assisted Compose guidance independent review

Reviewed `src/knowledge/curate.ts`, its tests, refresh integration, `AGENTS.md`, consumer setup and scheduled-curation documentation, and all 29 authored cards against their exact evidence bodies in `.cache/coverage-live-final/corpus`. This review used local evidence only and did not run a compiler, full suite, external service or network request.

## Findings and disposition

- **Resolved P2:** `guide-gesture-abstraction-and-keys` originally advertised `androidx.compose.ui.input.pointer.awaitPointerEventScope`, inventing a top-level API. Actual cached `SuspendingPointerInputFilter.kt:130–171` declares this function on `PointerInputScope`; the qualified member name is `androidx.compose.ui.input.pointer.PointerInputScope.awaitPointerEventScope`. The implementation claims in the card are supported; the correction concerns exact-symbol search attribution.
- **Completed retrieval refinement:** `guide-measure-text-for-canvas` originally used `ui-graphics`/`DrawScope` as primary identity, inherited from its broad graphics guide. Its central APIs are `ui-text`'s `TextMeasurer` and `drawText`. Using `androidx.compose.ui:ui-text` / `androidx.compose.ui.text.TextMeasurer` as the primary identity makes the card discoverable through the documented artifact-plus-FQN search. Keep DrawScope as an alias and retain raw provenance; the builder already unions the primary artifact with raw evidence requirements.

Scoped re-review verified both metadata changes in the actual configuration. Exact lookup finds the gesture card under `PointerInputScope.awaitPointerEventScope` and does not find that card under the incorrect top-level name. Artifact-scoped `ui-text` plus `TextMeasurer` lookup finds the text-measurement card. Reapplying all cards after these edits and the six additional coverage cards includes 29/29, and every card still returns a complete bounded read response.

No unsupported behavioral claim was found in the prose of any card. The cards state conditions or limitations rather than presenting generated guidance as upstream verbatim text.

## Per-card factual review

Every row below was checked against the actual referenced section body or bodies, rather than only the ID or page title.

| Card | Evidence-supported guidance | Result |
| --- | --- | --- |
| `guide-remember-observable-state` | Composition memory, observable state, configuration-change limit | Supported |
| `guide-state-hoisting` | Caller-owned value/events, common reader/writer owner, related states | Supported |
| `guide-save-minimal-ui-state` | Saveable UI state, recreation, custom savers and bounded Bundle storage | Supported |
| `guide-launched-effect-lifetime` | Composition lifetime, key changes and coroutine cancellation/restart | Supported |
| `guide-updated-callback-in-effect` | Latest callback without restarting a constant-key effect | Supported |
| `guide-disposable-effect-cleanup` | Key/lifetime cleanup, observer replacement and final onDispose | Supported |
| `guide-derived-state-threshold` | Threshold-driven updates versus unnecessary derived string overhead | Supported |
| `guide-produce-state-external-data` | External values, producer keys, awaitDispose and equal-value conflation | Supported |
| `guide-snapshot-flow-state-observation` | Cold Flow, result equality and downstream boolean distinctness | Supported |
| `guide-modifier-order-hit-area` | Padding/clickable order changes the clickable area | Supported |
| `guide-lazy-list-stable-keys` | Stable identity moves remembered item state; Bundle-supported key types | Supported |
| `guide-gesture-abstraction-and-keys` | Higher abstractions preserve semantics; raw handlers restart with keys | Supported; member alias corrected |
| `guide-textfield-state-initialization` | State ownership, remember/save support, initial values versus later edits | Supported |
| `guide-canvas-drawscope-coordinates` | Canvas/drawing modifiers, size, origin and coordinate direction | Supported |
| `guide-cache-drawing-objects` | Cache drawing objects until size or observed state changes | Supported |
| `guide-animated-visibility-exit-lifetime` | Transition-bound animation completion versus independent exit animations | Supported |
| `guide-scaffold-content-padding` | Scaffold slots and applying supplied padding to content | Supported |
| `guide-semantics-descendant-merging` | Logical semantic groups, implicit merging and semantic-only nodes | Supported |
| `guide-test-synchronization-external-work` | Synchronized assertions, virtual time, external-work waitUntil | Supported |
| `guide-defer-state-reads-by-phase` | Read state in the phase that needs it; composition lambda caveat | Supported |
| `guide-accessibility-replace-semantics` | Replacement semantics, toggle meaning, consumer visibility and order | Supported |
| `guide-measure-text-for-canvas` | Text measurement, constraints/style, background sizing and ellipsis | Supported; ui-text identity corrected |

The six additional cards were reviewed after the initial 22, against each bound raw body:

| Card | Evidence-supported guidance | Result |
| --- | --- | --- |
| `guide-tap-gesture-consumption` | Down/up consumption, cancellation, skipped consumed first-down and touch-target offsets | Supported |
| `guide-text-style-and-span-weight` | FontWeight, ranged SpanStyle, paragraph properties and AnnotatedString | Supported |
| `guide-animate-float-target-changes` | Initial target, interrupted value/velocity, AnimationSpec and type converters | Supported |
| `guide-image-content-description` | Meaningful localized descriptions, decorative null and built-in semantics | Supported |
| `guide-foundation-canvas-transforms` | Canvas drawing scope and combined transformation block | Supported |
| `guide-textfield-value-callback-state` | Caller-owned value/callback updates and TextFieldValue selection/IME distinction | Supported |

The final API-specific `guide-padding-clickable-order` card was also independently reviewed against `live-compose-guide-modifiers-order-modifier-matters`. Its 529-byte body faithfully describes the two opposite modifier sequences and the resulting hit areas; its body hash matches raw evidence. The primary foundation-layout/padding identity correctly serves strict padding lookups while retaining the raw ui evidence requirement. Pure application and input validation include all 29 cards; this card ranks first for the exact artifact-plus-padding query and its read is complete within the cap.

## Contract and budget verification

All 29 evidence sets reference raw, non-curated sections and their SHA256 values equal the UTF-8 `section.body` hashes. Card bodies are 458–590 UTF-8 bytes, below the 1,000-byte limit; each references one or two evidence sections. These are body hashes, not hashes of another AI card, a whole upstream file, or an unrelated metadata field.

An independent pure-function run against the final raw snapshot included all 29 cards, passed the existing input validator, and built the search index. Every card's bounded read response retained its entire body and mandatory provenance within 3,072 bytes; the largest response was 2,182 bytes, with zero empty or truncated bodies. Mutating one bound raw body suppressed its dependent card as `needs-review`, while raw knowledge remained available.

The builder excludes documents tagged `curated-guidance` from the evidence lookup, checks body hashes before inclusion, copies raw source provenance, links the original section IDs, labels generated guidance, and forces all release requirements to unknown. Its strict config parser rejects extra fields, duplicate/malformed IDs, invalid hashes, excessive evidence count and oversized bodies. Refresh applies cards after live raw collection, records each inclusion/exclusion in the report and summary, and still validates the finished data-only snapshot before publication. No LLM execution or secret is added to collection.

The consumer documents correctly distinguish checkout, installed skill/runtime and separately synchronized corpus; explain project/user skill locations, private mirrors/offline cache identity and fixture limitations; and preserve narrow retrieval, fixed snapshots and output budgets. The scheduled-agent document does not claim a Dot schedule or connector capability was verified. Its proposed operation reviews changed evidence, uses exact body hashes, requests independent review and opens a reviewable change rather than silently refreshing hashes.

## Retrieval and final scoped re-review

Reviewed the final ranking change and its added regression cases. Artifact and exact-symbol filters still run before ranking. Version match/unknown/different ordering remains the first comparison, so a curated unknown-version card cannot outrank matched evidence solely because it is curated. Within a version tier, an exact-symbol card is preferred; keyword cards receive their bonus only when every query term occurs in their own title, aliases or body. Whole-term matching and declaration/heading preference reduce import-only and shared-metadata noise without changing source contents or version claims.

Independent queries over the 29-card integrated local index returned the LaunchedEffect guidance first and found TextMeasurer guidance under its corrected ui-text artifact. The revised first-search limit of two hits and 2,048 bytes produced valid bounded responses (1,351–2,048 bytes in these examples). No ranking blocker was found. The controller reports typecheck and 84/84 tests passing, plus the unchanged 18/20 frozen-fixture result with no version or budget errors; this reviewer did not rerun that suite.

The small topic-routing table is an appropriate alternative to loading the corpus. The routing refinement is resolved: conceptual “Modifier order” now routes to ui/Modifier, and a separate padding/sizing row routes to foundation-layout/padding. The added API-specific padding card supports that strict lookup.

## Verdict

Approved for the reviewed scope. Behavioral content and curation contracts pass review; the sole P2 finding and the text-measurement lookup refinement are resolved and independently verified. No outstanding blocker was found. Final compiler/tests, installed-consumer ranking/evidence checks, fresh integrated snapshot, CI/publication and no-op evidence are separate acceptance steps and are not claimed complete by this report.
