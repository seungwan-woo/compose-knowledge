---
type: reference
title: "Guidance: Verify performance with timings rather than recomposition counts"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-tooling-layout-inspector-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/tooling#layout-inspector
    revision: web:compose-guide-performance-tooling:content@sha256:ad432603b744da7dac9f22771bbcea5849b1ce8f1b3de1c36e7a5bdfc03473e4
    sha256: 230a86f7f70092073246ef10683d36ea84ac12fe1110a1594ab3662b28e98b1e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the Layout Inspector to inspect your layout and see recomposition counts.

      If your UI has poor performance, this is often because of a coding error that forces your UI to be recomposed excessively. On the other hand, some coding errors can prevent your UI from being recomposed when it needs to be, which means UI changes aren't showing up on the screen. Tracking recompositions can help find both of these kinds of problems.

      Recomposition in itself is not bad; however, unexpected recomposition can be an issue. Keep in mind that recomposition counts aren't a substitute for benchmarks: skipping a composable has slot table and parameter comparison overhead, and once composition is scheduled, skipping a single intermediate composable saves little time compared to deferring rapidly changing state reads to the Layout or Draw phases. Always verify performance changes using composition tracing and Macrobenchmark.

      For more information, see the Layout Inspector recomposition counts documentation.
  - id: live-compose-guide-performance-tracing-accurate-timing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#accurate-timing
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: 1031e5dde873cd2a65392fd962fc40edbe34621dc248e76dd155b13d2f5eb5e8
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: For accurate profiling, like with any performance testing, you need to make the app profileable and non-debuggable as per Profileable applications.
compose:
  id: guide-verify-performance-with-benchmarks
  artifact: androidx.benchmark:benchmark-macro-junit4
  fqn: androidx.benchmark.macro
  sections:
    - id: guide-verify-performance-with-benchmarks
      title: "Guidance: Verify performance with timings rather than recomposition counts"
      aliases:
        - androidx.benchmark.macro
        - Macrobenchmark
        - recomposition counts
        - profileable
        - non-debuggable
        - performance measurement
        - 재구성 횟수
        - 성능 측정
      requires:
        - artifact: androidx.benchmark:benchmark-macro-junit4
          version: null
        - artifact: androidx.compose.ui:ui
          version: null
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tooling-layout-inspector-source
        - live-compose-guide-performance-tracing-accurate-timing-source
      relatedIds:
        - live-compose-guide-performance-tooling-layout-inspector
        - live-compose-guide-performance-tracing-accurate-timing
---

# Guidance: Verify performance with timings rather than recomposition counts

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Verify performance with timings rather than recomposition counts

Guidance: Use Layout Inspector recomposition counts to locate unexpected updates, then verify performance changes with composition tracing and Macrobenchmark. Counts do not measure elapsed work: skipping has slot-table and parameter-comparison overhead, and skipping an intermediate composable can save little once composition is scheduled. For accurate timings, profile a non-debuggable, profileable app. Limitation: fewer recompositions alone do not establish faster UI; inspector observations need timing evidence.

Sources: [live-compose-guide-performance-tooling-layout-inspector-source](https://developer.android.com/develop/ui/compose/performance/tooling#layout-inspector), [live-compose-guide-performance-tracing-accurate-timing-source](https://developer.android.com/develop/ui/compose/tooling/tracing#accurate-timing)
