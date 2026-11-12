# AndroidX Compose source discovery

Gitiles `androidx-main` resolved once to `a25d3a94435b4885a987c2e41158d06b21ce64cf`. Each selected path appeared in a JSON directory listing at that exact revision, then its `format=TEXT` response was downloaded and base64-decoded at that same revision. All selected files decoded as UTF-8, declared a package and retained their upstream Apache license header. The crawl configuration uses branch URLs; the crawler resolves a revision for each run. These discovery counts describe this revision, not a claim about a future run.

The selection contains **85 files**, **2,853,541 source bytes**, and **543 per-file public symbol entries** (overloads collapse to one name within each file). Source bodies, including copyright and license notices, are cached under `.cache/coverage-androidx-files/`. The additions in `.cache/androidx-source-additions.json` use package namespaces for `fqn`, public top-level declarations as optional symbol aliases, official artifact coordinates, and the AndroidX license URL. Symbol lists are selective and are not an API inventory; Kotlin extensions use their declaration package.

| Artifact | Files | Source bytes | Symbol entries |
| --- | ---: | ---: | ---: |
| `androidx.compose.runtime:runtime` | 6 | 141,510 | 42 |
| `androidx.compose.runtime:runtime-saveable` | 3 | 26,929 | 6 |
| `androidx.compose.ui:ui` | 16 | 338,418 | 181 |
| `androidx.compose.ui:ui-graphics` | 4 | 77,282 | 18 |
| `androidx.compose.ui:ui-text` | 6 | 226,722 | 25 |
| `androidx.compose.ui:ui-unit` | 2 | 31,181 | 29 |
| `androidx.compose.foundation:foundation` | 16 | 563,396 | 38 |
| `androidx.compose.foundation:foundation-layout` | 6 | 147,472 | 33 |
| `androidx.compose.animation:animation` | 3 | 133,185 | 15 |
| `androidx.compose.animation:animation-core` | 4 | 197,596 | 58 |
| `androidx.compose.material:material` | 4 | 123,136 | 15 |
| `androidx.compose.material3:material3` | 15 | 846,714 | 83 |

The selected material includes state, effects and saving; modifiers, layout, drawing, text, input, focus and semantics; lazy lists and grids, scroll, gestures and foundational layout; animation and animation core; and Material and Material 3 controls. Existing `Menu.kt` and `Popup.kt` entries were not added again. This is representative coverage, not the entire Compose source tree; APIs in other modules, platform-specific implementations, tests, samples and future revisions remain outside this selection.

## Exclusions and discovery misses

`RecomposeScopeImpl.kt` and `FocusModifier.kt` were downloaded successfully but excluded as implementation-focused. The following candidate filenames were absent from their queried directory listings at the verified revision (they are not claimed to be absent elsewhere):

- `compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotStateList.kt`
- `compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/SnapshotStateMap.kt`
- `compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/LaunchedEffect.kt`
- `compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/PointerInputModifier.kt`
- `compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/GraphicsLayerModifier.kt`
- `compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/LazyListScope.kt`
- `compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Dialog.kt`

Downloaded selected files with errors: none.
