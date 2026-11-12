# Expanded corpus: installed consumer usability

The same fourteen frozen questions improved from **9 usable / 4 partial / 1 unsupported** to **13 usable / 1 partial / 0 unsupported** after ranking and reviewed guidance cards were added. Canvas remains partial for the exact transform-restoration claim; this report does not turn the remaining evidence gap into a pass. All outcomes, including the empty exact testing search, are retained.

| Measurement | Baseline | Reviewed-guidance rerun |
| --- | ---: | ---: |
| Usable / partial / unsupported | 9 / 4 / 1 | 13 / 1 / 0 |
| Mean retrieval stdout per task | 7003.9 bytes | 5949.9 bytes |
| Maximum retrieval stdout per task | 10181 bytes | 7201 bytes |
| Total retrieval stdout, all 14 tasks | 98054 bytes | 83299 bytes |
| Retrieval CLI invocation time | 44.47 s | 40.99 s |

The total stdout reduction is **15.0%** while four formerly partial questions become usable and Canvas gains substantive support. Bytes are measured from actual UTF-8 CLI stdout, not estimated tokens. Cards add a verification read: saveable, Canvas, animate and TextField use more bytes than baseline, so the efficiency improvement is not universal. No token-level or model-cost claim is made.

## Installation, publication and scope

Task prompts were frozen at `2026-11-12T11:10:51.903Z`, before baseline candidate inspection. The rerun preserves all fourteen questions, exact initial FQNs, artifact coordinates, Android platform, unknown target versions, maximum two searches/two reads, and 12,288-byte total output ceiling per task. No Gradle project or resolved artifact versions were supplied. All returned versionStatus values are unknown; live guide/upstream main evidence cannot establish released-version compatibility.

Baseline: fresh 0.3.0 bundle `c28a3b140a1eba930581ab333cd15b81e0631cfa45b4a6bfa5a2b688c53ec1c2`; installed at `/tmp/compose-coverage-consumer-7cltkT/skills/compose-reference-context`; pinned local corpus SHA `b8129d0f1569ca017d6dc3e3f00dc127d1422543`; fresh checkedAt `2026-11-12T11:13:28.663Z`, publishedAt `2026-11-12T11:13:27Z`.

Rerun: fresh 0.3.0 bundle SHA256 `1bef9d296bd178d3a7f9ec75d40ad208d4597a3c4dca96ad92adbcb701b93681`; installed at `/tmp/compose-guidance-consumer-VCoayv/skills/compose-reference-context`. Installed production runtime independently validated `/workspace/compose-knowledge/.cache/guidance-release-final/corpus`, then `publishSnapshot({expectedSnapshot:null})` created only local bare Git `/tmp/compose-guidance-consumer-VCoayv/corpus.git`. Installed sync ran once: **fresh**, checkedAt `2026-11-12T11:32:26.100Z`, publishedAt `2026-11-12T11:32:25Z`; all searches/reads pin actual Git SHA **`f1ae51cfa3fdffa36b5929b89ab9e87b5878f3d8`**. Node 24.22.1 executes the installed launcher from `/tmp/compose-guidance-consumer-VCoayv`, outside the checkout. No GitHub mutation, external network request, shared-dist rebuild, or repository full-suite rerun was performed by this consumer.

The complete command/response ledger is `.cache/coverage-consumer-evidence.json` (session-local evidence, not a committed repository file). Its `baseline` object preserves the initial raw evidence and judgments; top-level tasks preserve the rerun. Immutable baseline copies also remain at `/tmp/compose-coverage-consumer-7cltkT/baseline-evidence.json` and `baseline-report.md`. Each ledger call contains actual argv, working directory, stdout/stderr, exit code, elapsed milliseconds, exact stdout bytes and timestamp. Read responses retain source URLs, revisions, paths/lines when present, and hashes.

## Workflow change and evidence checks

The updated installed skill explicitly starts with `--limit 2 --max-bytes 2048`, then reads a relevant `Guidance:` card and only bound raw relatedIds needed for the question. Thirteen exact searches now expose relevant cards; all thirteen card reads are untruncated. The value-based TextField card is selected second because the first card describes a state-based overload. Testing keeps its original English fallback because exact onNodeWithText is still empty; it reads the raw unmerged-tree section directly. No fallback query text was changed.

Every task context retains its frozen artifact/version/platform, including when a card links raw evidence owned by another artifact. For example, Foundation Canvas links UI graphics guidance, and foundation-layout padding links the UI modifier-order guide. Such one-hop reads preserve the original context and return unknown version status; they do not assert artifact versions. Relevant substantive bodies were inspected, rather than imports, headings, aliases, source links, or unseen continuations. Each call reserved its configured maximum within the remaining task budget; no task exceeded two reads or 7201 total bytes. No retrieval CLI process failed.

| Task | Baseline → rerun | Baseline bytes | Rerun bytes | Rerun searches/reads | Rerun CLI time |
| --- | --- | ---: | ---: | ---: | ---: |
| saveable | usable → usable | 4948 | 6667 | 1/2 | 3.24 s |
| effect | usable → usable | 6203 | 5467 | 1/2 | 2.57 s |
| derived | usable → usable | 8835 | 5368 | 1/2 | 3.10 s |
| padding | partial → usable | 6402 | 5204 | 1/2 | 2.99 s |
| keys | usable → usable | 6779 | 6000 | 1/2 | 2.92 s |
| tap | partial → usable | 9026 | 6816 | 1/2 | 3.02 s |
| text | partial → usable | 9830 | 5786 | 1/2 | 3.09 s |
| canvas | unsupported → partial | 4989 | 5907 | 1/2 | 2.63 s |
| animate | usable → usable | 5119 | 5999 | 1/2 | 2.91 s |
| visibility | usable → usable | 10181 | 6371 | 1/2 | 2.87 s |
| scaffold | usable → usable | 7168 | 6333 | 1/2 | 3.01 s |
| field | usable → usable | 7166 | 7201 | 1/2 | 2.91 s |
| semantics | partial → usable | 6478 | 6186 | 1/2 | 2.70 s |
| testing | usable → usable | 4930 | 3994 | 2/1 | 3.04 s |

## All fourteen rerun outcomes

### 1. saveable: usable

**Frozen question:** A counter uses rememberSaveable. Does it survive recomposition, Activity recreation, and process recreation; what must its value support?

**Context and retrieval:** `androidx.compose.runtime:runtime-saveable`, Android, target version unknown. Initial `--symbol androidx.compose.runtime.saveable.rememberSaveable`; Exact card + bound raw. Total 6667 bytes; 3239.37 ms.

**Supported answer:** rememberSaveable retains composable-owned UI state and adds Activity/process recreation through saved instance state. Primitive values are saved automatically; nonprimitive values need supported serialization such as Parcelize, listSaver/mapSaver or a custom Saver. The read gives a boolean UI-state example and a LazyListState Saver example.

**Limitations:** Saved state is a size-limited Bundle mechanism rather than durable storage. This run does not test lifecycle behavior in an application.

**Read evidence:**

- `guide-save-minimal-ui-state`: 1768 bytes, 980.41 ms, `truncated:false`. [Guidance: Save only the UI state needed for restoration](https://developer.android.com/develop/ui/compose/state-saving#ui-logic), revision `web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701`; [Guidance: Save only the UI state needed for restoration](https://developer.android.com/develop/ui/compose/state-saving#best_practice), revision `web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701`.
- `live-compose-guide-state-saving-ui-logic`: 2851 bytes, 1130.16 ms, `truncated:false`. [UI logic](https://developer.android.com/develop/ui/compose/state-saving#ui-logic), revision `web:compose-guide-state-saving:content@sha256:838715f5e4e3a64e2f7697bee4c18d07fde02784b82c5cc5e2e32df06231d701`.

### 2. effect: usable

**Frozen question:** A LaunchedEffect(userId) fetch is in flight when userId changes and when its composable leaves composition. What happens to its coroutine?

**Context and retrieval:** `androidx.compose.runtime:runtime`, Android, target version unknown. Initial `--symbol androidx.compose.runtime.LaunchedEffect`; Exact card + bound raw. Total 5467 bytes; 2568.24 ms.

**Supported answer:** A changed userId key cancels the existing LaunchedEffect coroutine and starts a new one. Leaving composition cancels it. The raw guide supplies the keyed coroutine lifetime contract and a delay/animation-loop example.

**Limitations:** Project-specific cancellation cooperation or cleanup remains untested.

**Read evidence:**

- `guide-launched-effect-lifetime`: 1312 bytes, 894.26 ms, `truncated:false`. [Guidance: Tie suspend work to LaunchedEffect keys](https://developer.android.com/develop/ui/compose/side-effects#launchedeffect), revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`.
- `live-compose-guide-side-effects-launchedeffect`: 2107 bytes, 835.09 ms, `truncated:false`. [LaunchedEffect: run suspend functions in the scope of a composable](https://developer.android.com/develop/ui/compose/side-effects#launchedeffect), revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`.

### 3. derived: usable

**Frozen question:** A scroll position changes every frame but a button only needs firstVisibleItemIndex > 0. When does derivedStateOf reduce recomposition and what is its cost caveat?

**Context and retrieval:** `androidx.compose.runtime:runtime`, Android, target version unknown. Initial `--symbol androidx.compose.runtime.derivedStateOf`; Exact card + bound raw. Total 5368 bytes; 3102.38 ms.

**Supported answer:** Observe a remembered derived boolean when scroll inputs update more often than the UI threshold firstVisibleItemIndex > 0 needs to change. The raw guide explains threshold-based invalidation, analogous to distinctUntilChanged. The reviewed card warns that merely combining firstName/lastName adds unnecessary overhead when every input change must change the result.

**Limitations:** The direct raw read verifies threshold behavior; the overhead example is from the complete reviewed card, which cites the separately bound incorrect-usage section. No released Runtime version is established.

**Read evidence:**

- `guide-derived-state-threshold`: 1830 bytes, 1036.56 ms, `truncated:false`. [Guidance: Use derivedStateOf when UI changes less often than inputs](https://developer.android.com/develop/ui/compose/side-effects#derivedstateof), revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`; [Guidance: Use derivedStateOf when UI changes less often than inputs](https://developer.android.com/develop/ui/compose/side-effects#incorrect-usage), revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`.
- `live-compose-guide-side-effects-derivedstateof`: 1490 bytes, 1043.84 ms, `truncated:false`. [derivedStateOf: convert one or multiple state objects into another state](https://developer.android.com/develop/ui/compose/side-effects#derivedstateof), revision `web:compose-guide-side-effects:content@sha256:838c4991c1f05c745dc4612e7cd37c2b621ee017632882a3589c7bdc0b819d33`.

### 4. padding: usable

**Frozen question:** How does moving padding before versus after clickable change the padded area hit target, and how does modifier order affect layout?

**Context and retrieval:** `androidx.compose.foundation:foundation-layout`, Android, target version unknown. Initial `--symbol androidx.compose.foundation.layout.padding`; Exact card + bound raw. Total 5204 bytes; 2993.21 ms.

**Supported answer:** Modifier.clickable(...).padding(...) includes the padding in the clickable area; Modifier.padding(...).clickable(...) leaves the added space outside it. Each modifier changes the preceding result, so changing their order changes input/layout composition. Both orders appear in the raw guide examples.

**Limitations:** Hit targets were not rendered or exercised on a device. This answers the concrete modifier-order question without inferring behavior from the Padding implementation alone.

**Read evidence:**

- `guide-padding-clickable-order`: 1408 bytes, 890.97 ms, `truncated:false`. [Guidance: Place padding inside or outside the clickable area](https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters), revision `web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7`.
- `live-compose-guide-modifiers-order-modifier-matters`: 1748 bytes, 902.28 ms, `truncated:false`. [Order of modifiers matters](https://developer.android.com/develop/ui/compose/modifiers#order-modifier-matters), revision `web:compose-guide-modifiers:content@sha256:525977a895ff5e84b1302387b9ad505377552135da00056840ae9a0931576cb7`.

### 5. keys: usable

**Frozen question:** A lazy list reorders items that contain remembered state. Why provide a stable item key, and what key type constraint matters for saved state?

**Context and retrieval:** `androidx.compose.foundation:foundation`, Android, target version unknown. Initial `--symbol androidx.compose.foundation.lazy.LazyColumn`; Exact card + bound raw. Total 6000 bytes; 2916.19 ms.

**Supported answer:** Stable unique item keys preserve the association between an item and remembered state when it moves. Position-based defaults can lose that association. Keys must be Bundle-supported on Android so item rememberSaveable state can restore across Activity recreation or scrolling away and back.

**Limitations:** Actual project keys and equality/uniqueness were not inspected.

**Read evidence:**

- `guide-lazy-list-stable-keys`: 1269 bytes, 830.45 ms, `truncated:false`. [Guidance: Keep lazy item state attached to stable keys](https://developer.android.com/develop/ui/compose/lists#item-keys), revision `web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77`.
- `live-compose-guide-lists-item-keys`: 2683 bytes, 877.32 ms, `truncated:false`. [Item keys](https://developer.android.com/develop/ui/compose/lists#item-keys), revision `web:compose-guide-lists:content@sha256:8fede0e401dd94b8c418b55cf00ea43141460e71d159693875ba90e18b7f5e77`.

### 6. tap: usable

**Frozen question:** Does detectTapGestures consume pointer events, and how can already-consumed input cancel or suppress a tap?

**Context and retrieval:** `androidx.compose.foundation:foundation`, Android, target version unknown. Initial `--symbol androidx.compose.foundation.gestures.detectTapGestures`; Exact card + bound raw. Total 6816 bytes; 3015.58 ms.

**Supported answer:** detectTapGestures consumes the first down and final up; a long press consumes subsequent changes. A first down consumed elsewhere skips the whole gesture including onPress. After onPress, moving outside the input area or consumption of position/down/up can cancel recognition, suppressing tap/double-tap/long-press callbacks.

**Limitations:** The raw read is explicitly truncated only after the complete relevant contract and function signature. Callback offsets may lie outside element bounds for expanded minimum touch targets. No event-dispatch test was run.

**Read evidence:**

- `guide-tap-gesture-consumption`: 1696 bytes, 815.74 ms, `truncated:false`. [compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt), lines 71–105, revision `07f09ade563fe07a62dd26797ba27a2f6ff5571a`.
- `live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71`: 3072 bytes, 1139.77 ms, `truncated:true`. [compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt), lines 71–105, revision `07f09ade563fe07a62dd26797ba27a2f6ff5571a`.

### 7. text: usable

**Frozen question:** How should a caller make a whole Text bold versus only one substring bold, and which style APIs apply?

**Context and retrieval:** `androidx.compose.ui:ui-text`, Android, target version unknown. Initial `--symbol androidx.compose.ui.text.TextStyle`; Exact card + bound raw. Total 5786 bytes; 3086.82 ms.

**Supported answer:** Use Text fontWeight = FontWeight.Bold for whole-text weight. To style only a substring, pass an AnnotatedString built with buildAnnotatedString and wrap the appended range in withStyle(SpanStyle(fontWeight = FontWeight.Bold)). TextStyle applies to Text; SpanStyle and ParagraphStyle apply to AnnotatedString ranges.

**Limitations:** The raw read verifies the full inline example and API distinction. Whole-text fontWeight is stated by the complete reviewed card and bound bold section; that second raw section was not separately read under the two-read limit.

**Read evidence:**

- `guide-text-style-and-span-weight`: 1820 bytes, 994.37 ms, `truncated:false`. [Guidance: Apply font weight to whole text or individual spans](https://developer.android.com/develop/ui/compose/text/style-text#bold), revision `web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531`; [Guidance: Apply font weight to whole text or individual spans](https://developer.android.com/develop/ui/compose/text/style-text#multiple-styles), revision `web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531`.
- `live-compose-guide-text-style-text-multiple-styles`: 1918 bytes, 1185.97 ms, `truncated:false`. [Add multiple styles in text](https://developer.android.com/develop/ui/compose/text/style-text#multiple-styles), revision `web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531`.

### 8. canvas: partial

**Frozen question:** Inside Canvas, which scope exposes drawing and dimensions, and how can transforms be scoped so following drawing is unaffected?

**Context and retrieval:** `androidx.compose.foundation:foundation`, Android, target version unknown. Initial `--symbol androidx.compose.foundation.Canvas`; Exact card + bound raw. Total 5907 bytes; 2630.93 ms.

**Supported answer:** Canvas is a layout composable wrapping drawBehind. Its DrawScope exposes drawing functions and size, the current drawing dimensions. The card recommends grouping translation/rotation and drawing commands inside withTransform.

**Limitations:** The bound raw read verifies Canvas, DrawScope and size. Neither that read nor the card explicitly establishes restoration of transforms for later drawing outside the block. With the frozen two-read limit already spent on card + raw, the precise "following drawing is unaffected" part remains unverified. No extra hidden read or model knowledge fills that gap.

**Read evidence:**

- `guide-foundation-canvas-transforms`: 2052 bytes, 815.44 ms, `truncated:false`. [Guidance: Combine drawing transforms inside Foundation Canvas](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing), revision `web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f`; [Guidance: Combine drawing transforms inside Foundation Canvas](https://developer.android.com/develop/ui/compose/graphics/draw/overview#multiple-transformations), revision `web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f`.
- `live-compose-guide-graphics-draw-overview-basic-drawing`: 2369 bytes, 849.64 ms, `truncated:false`. [Basic drawing with modifiers and DrawScope](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing), revision `web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f`.

### 9. animate: usable

**Frozen question:** An animateFloatAsState target changes before the current animation finishes. Does the animation retarget, and how is animated state consumed?

**Context and retrieval:** `androidx.compose.animation:animation-core`, Android, target version unknown. Initial `--symbol androidx.compose.animation.core.animateFloatAsState`; Exact card + bound raw. Total 5999 bytes; 2907.97 ms.

**Supported answer:** When animateFloatAsState target changes mid-animation, it starts toward the new target from its current value and velocity. Read its updated animation value, for example through delegation and graphicsLayer alpha; the guide provides that sample.

**Limitations:** No frame timing/continuity was measured on a target device.

**Read evidence:**

- `guide-animate-float-target-changes`: 1404 bytes, 982.2 ms, `truncated:false`. [Guidance: Animate a float toward changing targets](https://developer.android.com/develop/ui/compose/animation/value-based#animate-as-state), revision `web:compose-guide-animation-value-based:content@sha256:710a628250ab278df97358f99cedf98db2fefad109909956223f98c3591c4591`.
- `live-compose-guide-animation-value-based-animate-as-state`: 2547 bytes, 869.29 ms, `truncated:false`. [Animate a single value with animate*AsState](https://developer.android.com/develop/ui/compose/animation/value-based#animate-as-state), revision `web:compose-guide-animation-value-based:content@sha256:710a628250ab278df97358f99cedf98db2fefad109909956223f98c3591c4591`.

### 10. visibility: usable

**Frozen question:** When visible becomes false, does AnimatedVisibility immediately dispose its content, and how should enter/exit or custom transition animation be attached?

**Context and retrieval:** `androidx.compose.animation:animation`, Android, target version unknown. Initial `--symbol androidx.compose.animation.AnimatedVisibility`; Exact card + bound raw. Total 6371 bytes; 2866.37 ms.

**Supported answer:** AnimatedVisibility does not immediately remove its content when visible becomes false. Configure enter/exit and put custom animation state on the transition exposed inside its content lambda. It waits for all animations on that Transition before removal.

**Limitations:** Independent animate*AsState exit animations are not tracked and can outlive removal. The raw guide and code example explicitly describe this limitation. No composable disposal test was executed.

**Read evidence:**

- `guide-animated-visibility-exit-lifetime`: 2060 bytes, 846.91 ms, `truncated:false`. [Guidance: Coordinate exit animations before removing content](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility), revision `web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020`; [Guidance: Coordinate exit animations before removing content](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-add-custom-animation), revision `web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020`.
- `live-compose-guide-animation-composables-modifiers-animatedvisibility-add-custom-animation`: 2264 bytes, 991.56 ms, `truncated:false`. [Add custom animation](https://developer.android.com/develop/ui/compose/animation/composables-modifiers#animatedvisibility-add-custom-animation), revision `web:compose-guide-animation-composables-modifiers:content@sha256:5de3de46ff801f7a67d365626e0724fbf4e1e4f88866280c495fbdade1fd8020`.

### 11. scaffold: usable

**Frozen question:** A Scaffold has top and bottom bars. How must its content apply innerPadding to avoid overlap, and is it applied automatically?

**Context and retrieval:** `androidx.compose.material3:material3`, Android, target version unknown. Initial `--symbol androidx.compose.material3.Scaffold`; Exact card + bound raw. Total 6333 bytes; 3009.87 ms.

**Supported answer:** Apply the supplied innerPadding to the content root, for example Scaffold { innerPadding -> Column(Modifier.padding(innerPadding)) { ... } }. The raw guide explicitly asks the caller to apply PaddingValues and shows the application with top and bottom bars.

**Limitations:** No insets rendering test was run. The retrieved example section ends in the following Text modifier, but the complete padding application is visible; truncated:false describes the indexed section, not the whole original article.

**Read evidence:**

- `guide-scaffold-content-padding`: 1307 bytes, 1197.06 ms, `truncated:false`. [Guidance: Apply Scaffold content padding to the content root](https://developer.android.com/develop/ui/compose/components/scaffold#example), revision `web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7`.
- `live-compose-guide-components-scaffold-example`: 2978 bytes, 841.58 ms, `truncated:false`. [Example](https://developer.android.com/develop/ui/compose/components/scaffold#example), revision `web:compose-guide-components-scaffold:content@sha256:201b934dea3695a762072e7f4a4e3bba012c2a252753dde271ba4724ea6ad0a7`.

### 12. field: usable

**Frozen question:** A value-based TextField is passed a constant value and receives onValueChange. Who owns and updates the value to make edits visible?

**Context and retrieval:** `androidx.compose.material3:material3`, Android, target version unknown. Initial `--symbol androidx.compose.material3.TextField`; Exact second card + bound raw. Total 7201 bytes; 2910.67 ms.

**Supported answer:** Keep the displayed value in observable caller-owned state, and update it in onValueChange so recomposition feeds the updated value back. The bound raw guide demonstrates remember { mutableStateOf("") } and OutlinedTextField(value = name, onValueChange = { name = it }); the card also binds Material3 TextField value/callback documentation.

**Limitations:** A state-based TextField card ranks first, so selecting by the concrete value-based overload matters. The state example uses OutlinedTextField; the reviewed card supplies the bound Material3 TextField value-based API context. No project UI edit was performed.

**Read evidence:**

- `guide-textfield-value-callback-state`: 2182 bytes, 1040.29 ms, `truncated:false`. [compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/TextField.kt), lines 297–327, revision `07f09ade563fe07a62dd26797ba27a2f6ff5571a`; [Guidance: Feed value-based text fields from caller-owned state](https://developer.android.com/develop/ui/compose/state#state-in-composables), revision `web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1`.
- `live-compose-guide-state-state-in-composables`: 2972 bytes, 974.19 ms, `truncated:false`. [State in composables](https://developer.android.com/develop/ui/compose/state#state-in-composables), revision `web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1`.

### 13. semantics: usable

**Frozen question:** How does a custom icon expose a spoken label with contentDescription, and what should happen for a decorative icon?

**Context and retrieval:** `androidx.compose.ui:ui`, Android, target version unknown. Initial `--symbol androidx.compose.ui.semantics.contentDescription`; Exact card + bound raw. Total 6186 bytes; 2702.00 ms.

**Supported answer:** Give a meaningful Image/Icon a localized contentDescription describing its graphic. Set contentDescription = null for a purely decorative image. The raw guide includes a localized share icon label and a decorative Image example.

**Limitations:** Do not replace intrinsic Text/Button/clickable semantics with graphic descriptions. No screen reader was exercised.

**Read evidence:**

- `guide-image-content-description`: 1388 bytes, 864.16 ms, `truncated:false`. [Guidance: Describe meaningful images and omit decorative descriptions](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements), revision `web:compose-guide-accessibility-api-defaults:content@sha256:17cdd5bb64f80d2236f8827ae9134a0da598ce633e418960fc78d0c6d92be726`.
- `live-compose-guide-accessibility-api-defaults-graphic-elements`: 2750 bytes, 777.35 ms, `truncated:false`. [Graphic elements](https://developer.android.com/develop/ui/compose/accessibility/api-defaults#graphic-elements), revision `web:compose-guide-accessibility-api-defaults:content@sha256:17cdd5bb64f80d2236f8827ae9134a0da598ce633e418960fc78d0c6d92be726`.

### 14. testing: usable

**Frozen question:** A Compose test cannot find text inside a merged component. How do node finders and merged versus unmerged semantics trees affect lookup?

**Context and retrieval:** `androidx.compose.ui:ui-test`, Android, target version unknown. Initial `--symbol androidx.compose.ui.test.onNodeWithText`; English fallback to raw. Fallback `--query 'Compose testing semantics tree merged unmerged find nodes'`. Total 3994 bytes; 3043.38 ms.

**Supported answer:** Print the semantics tree with onRoot().printToLog(). A merged component can combine child text; use onNodeWithText("World", useUnmergedTree = true) to match a child in the unmerged tree. The raw section includes both trees and that exact finder example.

**Limitations:** Exact onNodeWithText remains empty. The original English query recovers the substantive unmerged guide without a guidance card. No target-app Compose test was executed.

**Read evidence:**

- `live-compose-guide-testing-apis-unmerged`: 1862 bytes, 1095.05 ms, `truncated:false`. [Unmerged tree](https://developer.android.com/develop/ui/compose/testing/apis#unmerged), revision `web:compose-guide-testing-apis:content@sha256:ee822fd20d95c653147c8221503470414af356fed67318ac6e35616dc44f395f`.

## Optional supplemental Canvas check

After completing and preserving the fair two-read comparison, an explicitly separate third read followed the Canvas card one hop to `live-compose-guide-graphics-draw-overview-multiple-transformations`. The actual installed skill permits at most three reads and the same 12,288-byte total. This extra read returned **1825 bytes** in 1524.13 ms, `truncated:false`, bringing all Canvas stdout to **7732 bytes** and all rerun stdout including the supplement to **85124 bytes** (maximum task output including supplement: 7732 bytes). Its command/response is retained under `canvas.supplementalCalls` and `supplementalSummary`.

The [raw multiple-transformations guide](https://developer.android.com/develop/ui/compose/graphics/draw/overview#multiple-transformations), revision `web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f`, verifies withTransform combining translation/rotation and provides the rectangle sample. It does **not explicitly state restoration for subsequent drawing outside the block**. Canvas therefore remains partial, and neither the 13/14 comparison count nor its mean/max bytes is upgraded from this extra check. A direct DrawScope transform restoration contract would still be needed for that exact claim.

## Remaining limits and baseline findings

Canvas now answers the drawing scope/dimensions question and offers grouping via withTransform, but this two-read run does not directly verify automatic transform restoration outside that block. The separately reported third related raw read verifies the grouping example but still does not state restoration; a targeted contract or implementation read would be needed to establish it. This remains partial.

The exact onNodeWithText lookup still returns no hits. English fallback is effective and documented, so the task remains usable while exact discoverability remains incomplete. State-based and value-based TextField cards share the same FQN; title/body inspection is necessary. Several raw indexed sections end mid-code or mid-sentence despite truncated:false, which means the whole indexed section was returned, not the whole upstream article.

Baseline defects were arbitrary source-chunk ranking (including a LazyColumn license chunk and LaunchedEffect SideEffect comments), missing padding/clickable behavior, the unlinked intervening detectTapGestures contract, missing text-span usage, missing decorative-image semantics, and no Foundation Canvas hit. The rerun recovers these through source-bound guidance and explicit cross-artifact relatedIds without claiming broad questions outside these fourteen were tested.

Neither run compiles or runs an Android app, renders UI, exercises accessibility services, or certifies a released dependency matrix. The results establish installed retrieval usability and visible evidence quality for the frozen questions. They do not establish universal Compose coverage.
