# Official Compose guide coverage discovery

Verified 2026-11-12T10:52:34.412Z. This discovery stages 60 additional explicit HTML sources in `.cache/guide-source-additions.json` without changing the main crawl configuration. Every target was linked from the official [Compose documentation table of contents](https://developer.android.com/develop/ui/compose/documentation), fetched from developer.android.com, returned HTTP 200 without a redirect, and passed the existing production `extractArticle` and `chunks` functions from `dist/refresh/extract.js`. No generated summaries or copied navigation menus are counted as article bodies.

The additions contain **619,064 extracted UTF-8 body bytes**, **644 nonempty article heading groups**, and **708 production chunks**. Raw HTML totals 24,110,180 bytes. The sources declare 189 API symbol occurrences across guides; each symbol is a known real Compose FQN and its simple API name occurs in that guide's extracted text. Source identities use package namespaces, with explicit symbols reserved for actual API mentions. All 60 IDs and URLs are unique and absent from the original 10-source configuration at discovery.

## Topic coverage

| Topic | Articles | Extracted body bytes | Heading groups | Chunks |
| --- | ---: | ---: | ---: | ---: |
| Runtime and state | 7 | 102,693 | 107 | 117 |
| Layouts and lists | 8 | 102,775 | 109 | 116 |
| Gestures and input | 5 | 51,934 | 44 | 48 |
| Text | 4 | 52,059 | 61 | 66 |
| Animation | 4 | 55,971 | 47 | 56 |
| Drawing | 3 | 49,548 | 48 | 55 |
| Performance | 4 | 39,017 | 38 | 44 |
| Accessibility | 4 | 43,903 | 30 | 38 |
| Testing | 4 | 26,745 | 38 | 39 |
| Material 3 components | 15 | 80,316 | 106 | 112 |
| Adaptive layouts | 2 | 14,103 | 16 | 17 |

## Acquisition and reuse

Requests used inherited proxy and CA settings, no manually supplied credentials, at most four concurrent curl processes, a 40-second request timeout, and at most one retry. The local policy allows developer.android.com and the managed environment reported its network policy enforced. No failed HTTP requests or extraction exceptions occurred; the two exclusions below failed the substantive-body threshold. A separate official content-license page request also succeeded.

Cached response bodies are in `.cache/coverage-guide-pages/<source-id>.html`. The cache also includes `documentation.html` (discovery TOC), `content-license.html` (license evidence), `verification.json` (timestamp, original/effective URL, HTTP status, bytes, heading anchors and counts), and `rejected-symbols.json` (four proposed symbols omitted because their simple name was absent from extracted text). The configuration additions are a JSON array of valid `CrawlSource` objects in `.cache/guide-source-additions.json`. These cache files are ignored by git and prepared for the controller to merge and reuse.

The [official content license](https://developer.android.com/license) states: “Unless otherwise noted, the documentation on this site, including any code shown in it, is made available to you under the Apache 2.0 license”. Every addition uses `Apache-2.0 (https://developer.android.com/license)`. Cached source bodies retain each page's link to that license. The existing extraction routine reads the article body, so the site footer itself is outside extracted sections.

## Exclusions and boundaries

- [Configure text layout](https://developer.android.com/develop/ui/compose/text/configure-layout): HTTP 200, but only 690 extracted UTF-8 bytes; current page primarily links to shorter quick guides. Excluded and replaced with the substantive paragraph styling guide.
- [Display text](https://developer.android.com/develop/ui/compose/text/display-text): HTTP 200, but only 574 extracted UTF-8 bytes; current page primarily introduces linked guides. Excluded and replaced with the substantive fonts guide.
- Existing configured URLs, including menus, documentation overview, and release notes, were excluded from the additions.
- This explicit selection covers representative guides, not all Compose docs or all APIs. It does not include videos, externally hosted interactive examples, or screenshots as textual knowledge. The extractor preserves article prose and inline code/snippets, and can also include article-local recommended-reading text.
- A guide may discuss multiple libraries; `artifact` identifies a representative primary library. The adaptive list-detail guide explicitly declares adaptive, adaptive-layout and adaptive-navigation, with navigation as its primary implementation; its entry correctly uses `androidx.compose.material3.adaptive:adaptive-navigation`. The accessibility testing guide explicitly requires `androidx.compose.ui:ui-test-junit4-accessibility`.
- The source verification manifest reflects research-time responses. Final corpus document/section/body-byte totals must be measured after integration with baseline documents and Kotlin sources. No live release applicability is asserted.

## Exact additions

| Source ID | Article | Artifact / package | Body bytes | Chunks |
| --- | --- | --- | ---: | ---: |
| `compose-guide-state` | [State and Jetpack Compose](https://developer.android.com/develop/ui/compose/state) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 18,164 | 30 |
| `compose-guide-side-effects` | [Side-effects in Compose](https://developer.android.com/develop/ui/compose/side-effects) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 16,897 | 16 |
| `compose-guide-state-hoisting` | [Where to hoist state](https://developer.android.com/develop/ui/compose/state-hoisting) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 16,802 | 22 |
| `compose-guide-compositionlocal` | [Locally scoped data with CompositionLocal](https://developer.android.com/develop/ui/compose/compositionlocal) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 14,402 | 13 |
| `compose-guide-lifecycle` | [Lifecycle of composables](https://developer.android.com/develop/ui/compose/lifecycle) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 10,858 | 8 |
| `compose-guide-phases` | [Jetpack Compose phases](https://developer.android.com/develop/ui/compose/phases) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 15,872 | 17 |
| `compose-guide-state-saving` | [Save UI state in Compose](https://developer.android.com/develop/ui/compose/state-saving) | `androidx.compose.runtime:runtime-saveable` / `androidx.compose.runtime.saveable` | 9,698 | 11 |
| `compose-guide-layouts-basics` | [Compose layout basics](https://developer.android.com/develop/ui/compose/layouts/basics) | `androidx.compose.foundation:foundation-layout` / `androidx.compose.foundation.layout` | 9,255 | 12 |
| `compose-guide-layouts-constraints-modifiers` | [Constraints and modifier order](https://developer.android.com/develop/ui/compose/layouts/constraints-modifiers) | `androidx.compose.foundation:foundation-layout` / `androidx.compose.foundation.layout` | 10,607 | 12 |
| `compose-guide-layouts-flow` | [Flow layouts in Compose](https://developer.android.com/develop/ui/compose/layouts/flow) | `androidx.compose.foundation:foundation-layout` / `androidx.compose.foundation.layout` | 9,149 | 12 |
| `compose-guide-modifiers` | [Compose modifiers](https://developer.android.com/develop/ui/compose/modifiers) | `androidx.compose.ui:ui` / `androidx.compose.ui` | 14,311 | 16 |
| `compose-guide-layouts-custom` | [Custom layouts](https://developer.android.com/develop/ui/compose/layouts/custom) | `androidx.compose.ui:ui` / `androidx.compose.ui` | 7,690 | 10 |
| `compose-guide-layouts-intrinsic-measurements` | [Intrinsic measurements in Compose layouts](https://developer.android.com/develop/ui/compose/layouts/intrinsic-measurements) | `androidx.compose.ui:ui` / `androidx.compose.ui` | 8,288 | 6 |
| `compose-guide-lists` | [Lazy lists and lazy grids](https://developer.android.com/develop/ui/compose/lists) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 29,512 | 29 |
| `compose-guide-layouts-pager` | [Pager in Compose](https://developer.android.com/develop/ui/compose/layouts/pager) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 13,963 | 19 |
| `compose-guide-touch-input-pointer-input-understand-gestures` | [Understand gestures](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 17,091 | 16 |
| `compose-guide-touch-input-pointer-input-tap-and-press` | [Tap and press](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 7,273 | 6 |
| `compose-guide-touch-input-pointer-input-drag-composables` | [Drag composables](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/drag-composables) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 17,932 | 17 |
| `compose-guide-touch-input-pointer-input-multi-touch` | [Multitouch: Panning, zooming, rotating](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 1,453 | 2 |
| `compose-guide-touch-input-scroll-scroll-modifiers` | [Scroll modifiers](https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers) | `androidx.compose.foundation:foundation` / `androidx.compose.foundation` | 8,185 | 7 |
| `compose-guide-text-style-text` | [Style text](https://developer.android.com/develop/ui/compose/text/style-text) | `androidx.compose.ui:ui-text` / `androidx.compose.ui.text` | 7,898 | 20 |
| `compose-guide-text-user-input` | [Configure text fields](https://developer.android.com/develop/ui/compose/text/user-input) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 16,533 | 21 |
| `compose-guide-animation-composables-modifiers` | [Animation modifiers and composables](https://developer.android.com/develop/ui/compose/animation/composables-modifiers) | `androidx.compose.animation:animation` / `androidx.compose.animation` | 11,513 | 15 |
| `compose-guide-animation-shared-elements` | [Shared element transitions in Compose](https://developer.android.com/develop/ui/compose/animation/shared-elements) | `androidx.compose.animation:animation` / `androidx.compose.animation` | 19,151 | 14 |
| `compose-guide-animation-value-based` | [Value-based animations](https://developer.android.com/develop/ui/compose/animation/value-based) | `androidx.compose.animation:animation-core` / `androidx.compose.animation.core` | 16,063 | 14 |
| `compose-guide-animation-customize` | [Customize animations](https://developer.android.com/develop/ui/compose/animation/customize) | `androidx.compose.animation:animation-core` / `androidx.compose.animation.core` | 9,244 | 13 |
| `compose-guide-graphics-draw-overview` | [Graphics in Compose](https://developer.android.com/develop/ui/compose/graphics/draw/overview) | `androidx.compose.ui:ui-graphics` / `androidx.compose.ui.graphics` | 12,056 | 18 |
| `compose-guide-graphics-draw-brush` | [Brush: gradients and shaders](https://developer.android.com/develop/ui/compose/graphics/draw/brush) | `androidx.compose.ui:ui-graphics` / `androidx.compose.ui.graphics` | 11,308 | 11 |
| `compose-guide-graphics-draw-modifiers` | [Graphics modifiers](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers) | `androidx.compose.ui:ui` / `androidx.compose.ui.draw` | 26,184 | 26 |
| `compose-guide-performance-bestpractices` | [Follow best practices](https://developer.android.com/develop/ui/compose/performance/bestpractices) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 15,448 | 13 |
| `compose-guide-performance-stability` | [Stability in Compose](https://developer.android.com/develop/ui/compose/performance/stability) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 7,235 | 10 |
| `compose-guide-performance-stability-fix` | [Fix stability issues](https://developer.android.com/develop/ui/compose/performance/stability/fix) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 11,213 | 11 |
| `compose-guide-performance-stability-strongskipping` | [Strong skipping mode](https://developer.android.com/develop/ui/compose/performance/stability/strongskipping) | `androidx.compose.runtime:runtime` / `androidx.compose.runtime` | 5,121 | 10 |
| `compose-guide-accessibility-api-defaults` | [API defaults](https://developer.android.com/develop/ui/compose/accessibility/api-defaults) | `androidx.compose.ui:ui` / `androidx.compose.ui.semantics` | 12,341 | 9 |
| `compose-guide-accessibility-semantics` | [Semantics](https://developer.android.com/develop/ui/compose/accessibility/semantics) | `androidx.compose.ui:ui` / `androidx.compose.ui.semantics` | 18,697 | 17 |
| `compose-guide-accessibility-merging-clearing` | [Merging and clearing](https://developer.android.com/develop/ui/compose/accessibility/merging-clearing) | `androidx.compose.ui:ui` / `androidx.compose.ui.semantics` | 9,656 | 8 |
| `compose-guide-accessibility-testing` | [Testing](https://developer.android.com/develop/ui/compose/accessibility/testing) | `androidx.compose.ui:ui-test-junit4-accessibility` / `androidx.compose.ui.test` | 3,209 | 4 |
| `compose-guide-testing-apis` | [Testing APIs](https://developer.android.com/develop/ui/compose/testing/apis) | `androidx.compose.ui:ui-test` / `androidx.compose.ui.test` | 5,187 | 11 |
| `compose-guide-testing-semantics` | [Semantics](https://developer.android.com/develop/ui/compose/testing/semantics) | `androidx.compose.ui:ui-test` / `androidx.compose.ui.test` | 1,870 | 2 |
| `compose-guide-testing-synchronization` | [Synchronize your tests](https://developer.android.com/develop/ui/compose/testing/synchronization) | `androidx.compose.ui:ui-test` / `androidx.compose.ui.test` | 10,561 | 12 |
| `compose-guide-testing-common-patterns` | [Common patterns](https://developer.android.com/develop/ui/compose/testing/common-patterns) | `androidx.compose.ui:ui-test` / `androidx.compose.ui.test` | 9,127 | 14 |
| `compose-guide-components-app-bars` | [App bars](https://developer.android.com/develop/ui/compose/components/app-bars) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 12,548 | 12 |
| `compose-guide-components-bottom-sheets` | [Bottom sheets](https://developer.android.com/develop/ui/compose/components/bottom-sheets) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 1,953 | 2 |
| `compose-guide-components-button` | [Button](https://developer.android.com/develop/ui/compose/components/button) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,645 | 8 |
| `compose-guide-components-fab` | [Floating action button](https://developer.android.com/develop/ui/compose/components/fab) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,966 | 7 |
| `compose-guide-components-card` | [Card](https://developer.android.com/develop/ui/compose/components/card) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 4,286 | 8 |
| `compose-guide-components-checkbox` | [Checkbox](https://developer.android.com/develop/ui/compose/components/checkbox) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 4,867 | 10 |
| `compose-guide-components-chip` | [Chip](https://developer.android.com/develop/ui/compose/components/chip) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 5,172 | 8 |
| `compose-guide-components-datepickers` | [Date pickers](https://developer.android.com/develop/ui/compose/components/datepickers) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 10,933 | 17 |
| `compose-guide-components-dialog` | [Dialog](https://developer.android.com/develop/ui/compose/components/dialog) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 6,872 | 8 |
| `compose-guide-components-navigation-bar` | [Navigation bar](https://developer.android.com/develop/ui/compose/components/navigation-bar) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,529 | 6 |
| `compose-guide-components-drawer` | [Navigation drawer](https://developer.android.com/develop/ui/compose/components/drawer) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 7,275 | 8 |
| `compose-guide-components-progress` | [Progress indicators](https://developer.android.com/develop/ui/compose/components/progress) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 4,715 | 5 |
| `compose-guide-components-scaffold` | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/scaffold) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,013 | 4 |
| `compose-guide-components-snackbar` | [Snackbar](https://developer.android.com/develop/ui/compose/components/snackbar) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,731 | 4 |
| `compose-guide-components-slider` | [Slider](https://developer.android.com/develop/ui/compose/components/slider) | `androidx.compose.material3:material3` / `androidx.compose.material3` | 3,811 | 5 |
| `compose-guide-layouts-adaptive-use-window-size-classes` | [Use window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes) | `androidx.compose.material3.adaptive:adaptive` / `androidx.compose.material3.adaptive` | 5,730 | 5 |
| `compose-guide-layouts-adaptive-list-detail` | [Build a list-detail layout](https://developer.android.com/develop/ui/compose/layouts/adaptive/list-detail) | `androidx.compose.material3.adaptive:adaptive-navigation` / `androidx.compose.material3.adaptive.navigation` | 8,373 | 12 |
| `compose-guide-text-fonts` | [Work with fonts &nbsp;](https://developer.android.com/develop/ui/compose/text/fonts) | `androidx.compose.ui:ui-text` / `androidx.compose.ui.text` | 15,434 | 15 |
| `compose-guide-text-style-paragraph` | [Style paragraph &nbsp;](https://developer.android.com/develop/ui/compose/text/style-paragraph) | `androidx.compose.ui:ui-text` / `androidx.compose.ui.text` | 12,194 | 10 |
