# Compose query routing

This is a routing table, not API evidence. Choose only the relevant row, then search the pinned corpus. Artifacts and symbols do not imply version compatibility. If a symbol has no hit, use the query terms without `--symbol`; preserve the actual artifact/version context. Full knowledge remains outside the prompt.

For reusable component libraries, use the matching row in [component routes](components.md) for API design, theming, measurement, input, or performance contracts.

For measurement and composable API design, use the matching [performance and pattern route](performance-patterns.md).

| Topic | Artifact | Symbol or English query |
| --- | --- | --- |
| State and recomposition | `androidx.compose.runtime:runtime` | `androidx.compose.runtime.derivedStateOf`; `state hoisting` |
| Saved state | `androidx.compose.runtime:runtime-saveable` | `androidx.compose.runtime.saveable.rememberSaveable` |
| Effects and cancellation | `androidx.compose.runtime:runtime` | `androidx.compose.runtime.LaunchedEffect`; `snapshotFlow` |
| Event-driven UI coroutines | `androidx.compose.runtime:runtime` | `androidx.compose.runtime.rememberCoroutineScope`; `event handler coroutine`; `frame clock` |
| Lifecycle-aware Flow | `androidx.lifecycle:lifecycle-runtime-compose` | `androidx.lifecycle.compose.collectAsStateWithLifecycle`; `minActiveState` |
| Coroutine ownership and cancellation | `org.jetbrains.kotlinx:kotlinx-coroutines-core` | `kotlinx.coroutines.coroutineScope`; `kotlinx.coroutines.CancellationException`; `rethrow cancellation` |
| Modifier order | `androidx.compose.ui:ui` | `androidx.compose.ui.Modifier`; `modifier order` |
| Padding and sizing APIs | `androidx.compose.foundation:foundation-layout` | `androidx.compose.foundation.layout.padding`; `size constraints` |
| Lazy lists | `androidx.compose.foundation:foundation` | `androidx.compose.foundation.lazy.LazyColumn`; `stable keys` |
| Gestures | `androidx.compose.foundation:foundation` | `androidx.compose.foundation.gestures.detectTapGestures` |
| Text styles | `androidx.compose.ui:ui-text` | `androidx.compose.ui.text.TextStyle`; `SpanStyle fontWeight` |
| Drawing | `androidx.compose.ui:ui-graphics` | `androidx.compose.ui.graphics.drawscope.DrawScope`; `translate rotate scale` |
| Value animation | `androidx.compose.animation:animation-core` | `androidx.compose.animation.core.animateFloatAsState` |
| Controlled animation and gestures | `androidx.compose.animation:animation-core` | `androidx.compose.animation.core.Animatable`; `sequential animations`; `concurrent animations`; `fling velocity` |
| Visibility animation | `androidx.compose.animation:animation` | `androidx.compose.animation.AnimatedVisibility` |
| Material components | `androidx.compose.material3:material3` | `androidx.compose.material3.Scaffold`; `androidx.compose.material3.TextField` |
| Accessibility | `androidx.compose.ui:ui` | `semantics contentDescription` |
| UI testing | `androidx.compose.ui:ui-test` | `semantics testing` |
| Animation testing | `androidx.compose.ui:ui-test` | `androidx.compose.ui.test.MainTestClock`; `manual test clock` |

For an API whose declaration belongs to a different artifact, use its actual import and resolved dependency. A drawing question may involve Foundation's `Canvas` and UI Graphics' `DrawScope`; do not change the app's version context merely to obtain more hits.
