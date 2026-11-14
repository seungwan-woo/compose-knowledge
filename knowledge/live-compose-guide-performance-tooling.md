---
type: reference
title: Performance tooling
description: "Public source: https://developer.android.com/develop/ui/compose/performance/tooling"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-performance-tooling-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/tooling#additional-resources
    revision: web:compose-guide-performance-tooling:content@sha256:ad432603b744da7dac9f22771bbcea5849b1ce8f1b3de1c36e7a5bdfc03473e4
    sha256: 6e0b8836a3d5a4a692fcb919a6e5e7f33851e5956df2b61f1e8023159bac4176
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      App performance guide: Discover best practices, libraries, and tools to improve performance on Android.

      Inspect Performance: Inspect app performance.

      Benchmarking: Benchmark app performance.

      App startup: Optimize app startup.

      Baseline profiles: Understand baseline profiles.
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
  - id: live-compose-guide-performance-tooling-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/tooling#main-content
    revision: web:compose-guide-performance-tooling:content@sha256:ad432603b744da7dac9f22771bbcea5849b1ce8f1b3de1c36e7a5bdfc03473e4
    sha256: a10a72f8a79fef603a6b7ea812af77241a665954d4ce1a414f406bac369766a2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: It can be hard to know where a performance issue lies and what code to start optimizing. Start by using tools to help narrow down where your issue is.
  - id: live-compose-guide-performance-tooling-tracing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/tooling#tracing
    revision: web:compose-guide-performance-tooling:content@sha256:ad432603b744da7dac9f22771bbcea5849b1ce8f1b3de1c36e7a5bdfc03473e4
    sha256: cc2500184bf23d536f30570400957bf2590d7b4ede4dbe408fa42609016f0597
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Use composition tracing to trace your composable functions in a system trace. Traces are often the best source of information when first looking into a performance issue. They allow you to form a hypothesis of what the issue is and where to start looking.
compose:
  id: live-compose-guide-performance-tooling
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-guide-performance-tooling-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-tooling-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-performance-tooling-layout-inspector
      title: Layout Inspector
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-tooling-layout-inspector-source
      relatedIds: []
    - id: live-compose-guide-performance-tooling-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-tooling-main-content-source
      relatedIds: []
    - id: live-compose-guide-performance-tooling-tracing
      title: Composition tracing
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-tooling-tracing-source
      relatedIds: []
---

# Performance tooling

Public source: https://developer.android.com/develop/ui/compose/performance/tooling

## Additional resources

App performance guide: Discover best practices, libraries, and tools to improve performance on Android.

Inspect Performance: Inspect app performance.

Benchmarking: Benchmark app performance.

App startup: Optimize app startup.

Baseline profiles: Understand baseline profiles.

Sources: [live-compose-guide-performance-tooling-additional-resources-source](https://developer.android.com/develop/ui/compose/performance/tooling#additional-resources)

## Layout Inspector

Use the Layout Inspector to inspect your layout and see recomposition counts.

If your UI has poor performance, this is often because of a coding error that forces your UI to be recomposed excessively. On the other hand, some coding errors can prevent your UI from being recomposed when it needs to be, which means UI changes aren't showing up on the screen. Tracking recompositions can help find both of these kinds of problems.

Recomposition in itself is not bad; however, unexpected recomposition can be an issue. Keep in mind that recomposition counts aren't a substitute for benchmarks: skipping a composable has slot table and parameter comparison overhead, and once composition is scheduled, skipping a single intermediate composable saves little time compared to deferring rapidly changing state reads to the Layout or Draw phases. Always verify performance changes using composition tracing and Macrobenchmark.

For more information, see the Layout Inspector recomposition counts documentation.

Sources: [live-compose-guide-performance-tooling-layout-inspector-source](https://developer.android.com/develop/ui/compose/performance/tooling#layout-inspector)

## Introduction

It can be hard to know where a performance issue lies and what code to start optimizing. Start by using tools to help narrow down where your issue is.

Sources: [live-compose-guide-performance-tooling-main-content-source](https://developer.android.com/develop/ui/compose/performance/tooling#main-content)

## Composition tracing

Use composition tracing to trace your composable functions in a system trace. Traces are often the best source of information when first looking into a performance issue. They allow you to form a hypothesis of what the issue is and where to start looking.

Sources: [live-compose-guide-performance-tooling-tracing-source](https://developer.android.com/develop/ui/compose/performance/tooling#tracing)
