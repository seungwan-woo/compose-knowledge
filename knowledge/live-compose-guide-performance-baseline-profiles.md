---
type: reference
title: Baseline Profiles in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/performance/baseline-profiles"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-performance-baseline-profiles-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#additional-resources
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: 6e0b8836a3d5a4a692fcb919a6e5e7f33851e5956df2b61f1e8023159bac4176
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      App performance guide: Discover best practices, libraries, and tools to improve performance on Android.

      Inspect Performance: Inspect app performance.

      Benchmarking: Benchmark app performance.

      App startup: Optimize app startup.

      Baseline profiles: Understand baseline profiles.
  - id: live-compose-guide-performance-baseline-profiles-benefits-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#benefits
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: 1921cbfa9fc3ea7cb2d27262c613fa8d7fe1e7e4056a352a0ad7a85cd3abf628
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can improve performance by defining Baseline Profiles. These profiles define classes and methods needed on critical user journeys and are distributed with your app's APK or AAB. During app installation, ART compiles this critical code AOT so that it's ready for use when the app launches.

      A good Baseline Profile definition is not always straightforward, and because of this, Compose ships with one by default. You might not have to do any work to see this benefit. However, the Baseline Profile that ships with Compose only contains optimizations for the code within the Compose library.
  - id: live-compose-guide-performance-baseline-profiles-considerations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#considerations
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: 822522f5d59842e0a483fe03c1a9085de4ea13ed61419d275b07439832a17bce
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose is distributed as a library instead of as part of the Android platform. This approach lets the Compose team update Compose frequently and support a wide range of Android versions. However, distributing Compose as a library imposes a cost.

      Android platform code is already compiled and installed on the device. Libraries, however, need to be loaded when the app launches and interpreted JIT when needed. This can slow the app on startup and when it uses a library feature for the first time.
  - id: live-compose-guide-performance-baseline-profiles-macrobenchmark-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#macrobenchmark
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: ba73c74e34fc573e7a70d9bc90b3865bead6a66865e3ce20b29717f8b48f8542
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To get the best optimization, create a Baseline Profile for your app that uses Macrobenchmark to cover critical user journeys. When you define your own profile, you must test the profile to verify that it's helping. A good way to do that is to write Macrobenchmark tests for your app and check the test results as you write and revise your Baseline Profile.

      For an example of how to write Macrobenchmark tests for your Compose UI, see the Macrobenchmark Compose sample.
  - id: live-compose-guide-performance-baseline-profiles-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#main-content
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: 7eb80b2f74cf161e4c33af00c751be9b0ed65c3e3d99de48c0446b0802498565
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Baseline Profiles improve code execution speed by about 30% from the first launch by avoiding interpretation and just-in-time (JIT) compilation steps for included code paths. By shipping a Baseline Profile in an app or library, you enable Android Runtime (ART) to optimize included code paths through ahead-of-time (AOT) compilation, providing performance enhancements for every new app install and every app update. This profile-guided optimization (PGO) lets apps optimize startup, reduce interaction jank, and improve overall runtime performance from the first launch for end users.
compose:
  id: live-compose-guide-performance-baseline-profiles
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-compose-guide-performance-baseline-profiles-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-performance-baseline-profiles-benefits
      title: Benefits of baseline profiles
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-benefits-source
      relatedIds: []
    - id: live-compose-guide-performance-baseline-profiles-considerations
      title: Compose performance considerations
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-considerations-source
      relatedIds: []
    - id: live-compose-guide-performance-baseline-profiles-macrobenchmark
      title: Macrobenchmark
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-macrobenchmark-source
      relatedIds: []
    - id: live-compose-guide-performance-baseline-profiles-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-main-content-source
      relatedIds: []
---

# Baseline Profiles in Compose

Public source: https://developer.android.com/develop/ui/compose/performance/baseline-profiles

## Additional resources

App performance guide: Discover best practices, libraries, and tools to improve performance on Android.

Inspect Performance: Inspect app performance.

Benchmarking: Benchmark app performance.

App startup: Optimize app startup.

Baseline profiles: Understand baseline profiles.

Sources: [live-compose-guide-performance-baseline-profiles-additional-resources-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#additional-resources)

## Benefits of baseline profiles

You can improve performance by defining Baseline Profiles. These profiles define classes and methods needed on critical user journeys and are distributed with your app's APK or AAB. During app installation, ART compiles this critical code AOT so that it's ready for use when the app launches.

A good Baseline Profile definition is not always straightforward, and because of this, Compose ships with one by default. You might not have to do any work to see this benefit. However, the Baseline Profile that ships with Compose only contains optimizations for the code within the Compose library.

Sources: [live-compose-guide-performance-baseline-profiles-benefits-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#benefits)

## Compose performance considerations

Compose is distributed as a library instead of as part of the Android platform. This approach lets the Compose team update Compose frequently and support a wide range of Android versions. However, distributing Compose as a library imposes a cost.

Android platform code is already compiled and installed on the device. Libraries, however, need to be loaded when the app launches and interpreted JIT when needed. This can slow the app on startup and when it uses a library feature for the first time.

Sources: [live-compose-guide-performance-baseline-profiles-considerations-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#considerations)

## Macrobenchmark

To get the best optimization, create a Baseline Profile for your app that uses Macrobenchmark to cover critical user journeys. When you define your own profile, you must test the profile to verify that it's helping. A good way to do that is to write Macrobenchmark tests for your app and check the test results as you write and revise your Baseline Profile.

For an example of how to write Macrobenchmark tests for your Compose UI, see the Macrobenchmark Compose sample.

Sources: [live-compose-guide-performance-baseline-profiles-macrobenchmark-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#macrobenchmark)

## Introduction

Baseline Profiles improve code execution speed by about 30% from the first launch by avoiding interpretation and just-in-time (JIT) compilation steps for included code paths. By shipping a Baseline Profile in an app or library, you enable Android Runtime (ART) to optimize included code paths through ahead-of-time (AOT) compilation, providing performance enhancements for every new app install and every app update. This profile-guided optimization (PGO) lets apps optimize startup, reduce interaction jank, and improve overall runtime performance from the first launch for end users.

Sources: [live-compose-guide-performance-baseline-profiles-main-content-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#main-content)
