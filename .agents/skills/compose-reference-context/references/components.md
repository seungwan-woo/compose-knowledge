# Component implementation and review routes

Select the owning artifact and a narrow query below, then retrieve evidence from the pinned corpus. This table is navigation, not evidence. Preserve actual dependency versions. Compose contracts and Material examples do not establish a private design system's requirements.

| Decision | Artifact | Symbol or English query |
| --- | --- | --- |
| Public modifier API | `androidx.compose.ui:ui` | `androidx.compose.ui.Modifier`; `modifier first optional parameter` |
| Theme boundary and component defaults | `androidx.compose.material3:material3` | `androidx.compose.material3.MaterialTheme`; `custom theme wrapper` |
| Local scope and invalidation | `androidx.compose.runtime:runtime` | `androidx.compose.runtime.CompositionLocal`; `staticCompositionLocalOf invalidation` |
| Reusable modifier nodes | `androidx.compose.ui:ui` | `androidx.compose.ui.node.ModifierNodeElement`; `create update equality` |
| Interaction ownership | `androidx.compose.foundation:foundation` | `androidx.compose.foundation.interaction.MutableInteractionSource`; `press release cancel` |
| Measurement, intrinsics, RTL | `androidx.compose.ui:ui` | `androidx.compose.ui.layout.Layout`; `measure once`; `intrinsic measurements`; `placeRelative` |
| Touch target space | `androidx.compose.foundation:foundation-layout` | `androidx.compose.foundation.layout.sizeIn`; `touch target overlap` |
| Focus requests | `androidx.compose.ui:ui` | `androidx.compose.ui.focus.FocusRequester`; `request focus` |
| Accessible custom gestures | `androidx.compose.ui:ui` | `androidx.compose.ui.semantics.CustomAccessibilityAction`; `custom actions` |
| Stability annotation contract | `androidx.compose.runtime:runtime-annotation` | `androidx.compose.runtime.Stable`; `Stable annotation contract` |
| Skipping and calculation cost | `androidx.compose.runtime:runtime` | `strong skipping`; `remember calculation keys` |
| Frame-clock requirement | `androidx.compose.animation:animation-core` | `finite animation frame clock`; `MonotonicFrameClock` |
| Saved-state tests | `androidx.compose.ui:ui-test-junit4` | `androidx.compose.ui.test.junit4.StateRestorationTester` |

The captured main-branch `Stable` declaration belongs to `runtime-annotation`; older resolved dependencies can differ. Inspect the actual import/dependency owner and keep released applicability unknown. A route alone does not prove that a particular API release or component implements the retrieved behavior. Read the needed raw `relatedIds` before unrelated alternate hits, within the existing task budget.
