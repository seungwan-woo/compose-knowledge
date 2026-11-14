---
type: reference
title: "Guidance: Generate and verify Baseline Profiles for app journeys"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-performance-baseline-profiles-benefits-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#benefits
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: 1921cbfa9fc3ea7cb2d27262c613fa8d7fe1e7e4056a352a0ad7a85cd3abf628
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can improve performance by defining Baseline Profiles. These profiles define classes and methods needed on critical user journeys and are distributed with your app's APK or AAB. During app installation, ART compiles this critical code AOT so that it's ready for use when the app launches.

      A good Baseline Profile definition is not always straightforward, and because of this, Compose ships with one by default. You might not have to do any work to see this benefit. However, the Baseline Profile that ships with Compose only contains optimizations for the code within the Compose library.
  - id: live-compose-guide-performance-baseline-profiles-macrobenchmark-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/performance/baseline-profiles#macrobenchmark
    revision: web:compose-guide-performance-baseline-profiles:content@sha256:7d9d3db99a9e5b328cd6c1c52734de4f3dfa9079fad2d555a522efce21f6f45a
    sha256: ba73c74e34fc573e7a70d9bc90b3865bead6a66865e3ce20b29717f8b48f8542
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To get the best optimization, create a Baseline Profile for your app that uses Macrobenchmark to cover critical user journeys. When you define your own profile, you must test the profile to verify that it's helping. A good way to do that is to write Macrobenchmark tests for your app and check the test results as you write and revise your Baseline Profile.

      For an example of how to write Macrobenchmark tests for your Compose UI, see the Macrobenchmark Compose sample.
compose:
  id: guide-app-specific-baseline-profiles
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: guide-app-specific-baseline-profiles
      title: "Guidance: Generate and verify Baseline Profiles for app journeys"
      aliases:
        - androidx.compose.ui
        - Baseline Profile
        - Macrobenchmark
        - critical user journeys
        - ahead-of-time compilation
        - 기준 프로필
        - 사용자 여정
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-performance-baseline-profiles-benefits-source
        - live-compose-guide-performance-baseline-profiles-macrobenchmark-source
      relatedIds:
        - live-compose-guide-performance-baseline-profiles-benefits
        - live-compose-guide-performance-baseline-profiles-macrobenchmark
---

# Guidance: Generate and verify Baseline Profiles for app journeys

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Generate and verify Baseline Profiles for app journeys

Guidance: Create an app Baseline Profile covering critical user journeys with Macrobenchmark, and test the profile as you add or revise it. Profiles identify classes and methods for ahead-of-time compilation. Compose ships a default profile, but its optimizations cover Compose library code; it does not provide a profile of your app-specific journeys. Limitation: defining a profile does not establish a benefit for your app. Use Macrobenchmark results to verify that the generated profile helps the journeys you exercise.

Sources: [live-compose-guide-performance-baseline-profiles-benefits-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#benefits), [live-compose-guide-performance-baseline-profiles-macrobenchmark-source](https://developer.android.com/develop/ui/compose/performance/baseline-profiles#macrobenchmark)
