---
type: reference
title: "Guidance: Inspect composable timing with composition system traces"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-tracing-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#main-content
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: e3f5d2e84442b163d56e25c4c010d626ee5053d700e3908524663aa001bf0d15
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Traces are often the best source of information when first looking into a performance issue. They allow you to form a hypothesis of what the issue is and where to start looking.

      There are two levels of tracing supported on Android: system tracing and method tracing.

      Because system tracing only tracks areas specifically marked for tracing, it has low overhead and doesn't affect the performance of your app greatly. System tracing is great for seeing how long particular sections of your code are taking to run.

      Method tracing tracks every function call in your app. This is very expensive and so it greatly affects the performance of your app, but it gives you a total picture of what is happening, what functions are being called, and how often they are being called.

      By default, system traces do not include individual composable functions. They are available in method traces.

      Composition tracing shows composable functions inside system traces. The feature gives you the low intrusiveness from system tracing, with method tracing levels of detail in composition.
  - id: live-compose-guide-performance-tracing-set-composition-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/tooling/tracing#set-composition
    revision: web:compose-guide-performance-tracing:content@sha256:9ddf40ae25b328981e9fbfb7d99069348233dfcaf5a48fdda29575942b4d7025
    sha256: b81555f9fa925a64097cd2f4b608482b2da32c095c12aeabe6400f2a7bd67a63
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To try out the composition tracing in your project, you need to update to at least the following versions:

      Android Studio Flamingo

      Compose UI: 1.3.0

      Compose Compiler: 1.3.0

      The device or emulator you run your trace on must also be at minimum API level 30.

      Additionally, you need to add a new dependency on Compose Runtime Tracing:

      implementation("androidx.compose.runtime:runtime-tracing:1.12.1")

      If you are using the Compose BOM, you don't have to specify the version:

      val composeBom = platform("androidx.compose:compose-bom:2026.09.00")
      implementation(composeBom)
      // ...

      // dependency without a version
      implementation("androidx.compose.runtime:runtime-tracing")

      With this dependency, when you take a system trace that includes recomposition, you can see the composable functions automatically.
compose:
  id: guide-composition-system-tracing
  artifact: androidx.compose.runtime:runtime-tracing
  fqn: androidx.compose.runtime
  sections:
    - id: guide-composition-system-tracing
      title: "Guidance: Inspect composable timing with composition system traces"
      aliases:
        - androidx.compose.runtime
        - androidx.compose.runtime:runtime-tracing
        - composition tracing
        - system trace
        - method tracing
        - composable timing
        - 구성 추적
        - 시스템 트레이스
      requires:
        - artifact: androidx.compose.runtime:runtime-tracing
          version: null
      sourceIds:
        - live-compose-guide-performance-tracing-main-content-source
        - live-compose-guide-performance-tracing-set-composition-source
      relatedIds:
        - live-compose-guide-performance-tracing-main-content
        - live-compose-guide-performance-tracing-set-composition
---

# Guidance: Inspect composable timing with composition system traces

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Inspect composable timing with composition system traces

Guidance: Use composition tracing to expose composable functions inside system traces when investigating where time is spent. Configure the documented toolchain and device prerequisites and add androidx.compose.runtime:runtime-tracing; the guide explains how the Compose BOM can supply its version. Composition tracing combines composition detail with the lower overhead of system tracing. Limitation: ordinary system traces omit individual composables, while method tracing records every function call and can substantially affect performance. Check the target toolchain and dependencies before copying the setup.

Sources: [live-compose-guide-performance-tracing-main-content-source](https://developer.android.com/develop/ui/compose/tooling/tracing#main-content), [live-compose-guide-performance-tracing-set-composition-source](https://developer.android.com/develop/ui/compose/tooling/tracing#set-composition)
