# Performance and component pattern routes

Choose one route, then search the pinned corpus. This table is navigation, not evidence. Keep actual module, variant, toolchain and artifact versions; unavailable versions remain unknown. Corpus sync does not update this installed reference.

| Decision | Artifact | Symbol or English query |
| --- | --- | --- |
| Timings versus recomposition counts | `androidx.benchmark:benchmark-macro-junit4` | `androidx.benchmark.macro`; `recomposition counts profileable measurement` |
| Composable work in system traces | `androidx.compose.runtime:runtime-tracing` | `androidx.compose.runtime`; `composition tracing system trace` |
| App-specific Baseline Profiles | `androidx.compose.ui:ui` | `baseline profile critical user journeys` |
| Alpha, overlap and offscreen buffers | `androidx.compose.ui:ui` | `androidx.compose.ui.graphics.CompositingStrategy`; `alpha offscreen overlap` |
| Compound component coordination | `androidx.compose.material3:material3` | `androidx.compose.material3.ExposedDropdownMenuBox`; `compound component contract` |
| Named slots versus child configuration | `androidx.compose.foundation:foundation-layout` | `slot API content customization` |
| Extensible library state contracts | `androidx.compose.runtime:runtime` | `hoisted state interface library` |
| Scoped child layout configuration | `androidx.compose.ui:ui` | `androidx.compose.ui.node.ParentDataModifierNode`; `parent data layout scope` |
| Hidden parent-child coupling | `androidx.compose.ui:ui` | `parent data explicit stateless ownership` |
| Controls returned from emitted UI | `androidx.compose.runtime:runtime` | `emit return control hoist` |

These are topic routes, not additional dependency requirements. Compose UI owns the captured general performance pages; benchmark and tracing tools have their own artifacts. Read needed bound raw sections within the existing three-read/12 KiB budget. Source reading does not measure a target app. State-read phases, stability, lazy-item identity/reuse and drawing caches remain in the existing topic/component routes.

Here, compound component is a repository term for coordinating parts through explicit state, events, slots and scope contracts. The Material example does not define consumer-local design policy, arbitrary child nesting or a React-style namespace API. API composition alone is not a performance improvement; verify workload timings before claiming one.
