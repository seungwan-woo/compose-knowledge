---
type: reference
title: "Guidance: Choose collectAsState for platform-agnostic Compose code"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-state-groovy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#groovy
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 00720ec5a8c6b6ca493ff2179274347f4ff38c1e988c70776050a67e1f0f0a79
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      dependencies {
            ...
            implementation "androidx.lifecycle:lifecycle-runtime-compose:2.11.0"
      }

      Flow: collectAsState() collectAsState is similar to collectAsStateWithLifecycle, because it also collects values from a Flow and transforms it into Compose State. Use collectAsState for platform-agnostic code instead of collectAsStateWithLifecycle, which is Android-only. Additional dependencies are not required for collectAsState, because it is available in compose-runtime.

      LiveData: observeAsState() observeAsState() starts observing this LiveData and represents its values using State. The following dependency is required in the build.gradle file:
  - id: live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/state#use-other-types-of-state-in-jetpack-compose
    revision: web:compose-guide-state:content@sha256:d49be9efee5933110b077ceeca1807b30275c670d103c11ffa3fcabc2dfec4a1
    sha256: 251965894bcde3fbde7a8da63cbaebaf4cfdf7e5b7cd4f8d8ac256f221ad9458
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Compose doesn't require that you use MutableState<T> to hold state; it supports other observable types. Before reading another observable type in Compose, you must convert it to a State<T> so that composables can automatically recompose when the state changes.

      Compose ships with functions to create State<T> from common observable types used in Android apps. Before using these integrations, add the appropriate artifact(s) as follows:

      Flow: collectAsStateWithLifecycle() collectAsStateWithLifecycle() collects values from a Flow in a lifecycle-aware manner, allowing your app to conserve app resources. It represents the latest emitted value from the Compose State. Use this API as the recommended way to collect flows on Android apps. The following dependency is required in the build.gradle file (it should be 2.6.0-beta01 or newer):
compose:
  id: guide-platform-agnostic-flow-state
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime.collectAsState
  sections:
    - id: guide-platform-agnostic-flow-state
      title: "Guidance: Choose collectAsState for platform-agnostic Compose code"
      aliases:
        - androidx.compose.runtime.collectAsState
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
        - multiplatform Flow collection
        - platform-agnostic Flow
        - Flow to State
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-groovy-source
        - live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source
      relatedIds:
        - live-compose-guide-state-groovy
        - live-compose-guide-state-use-other-types-of-state-in-jetpack-compose
---

# Guidance: Choose collectAsState for platform-agnostic Compose code

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose collectAsState for platform-agnostic Compose code

Guidance: Use collectAsState to convert a Flow to Compose State in platform-agnostic Compose code. It is provided by compose-runtime and does not require the Android lifecycle integration artifact. For Android app screens, the guide recommends lifecycle-aware collectAsStateWithLifecycle instead. Limitation: the two APIs are not interchangeable lifecycle policies; the guide identifies collectAsStateWithLifecycle as the lifecycle-aware option.

Sources: [live-compose-guide-state-groovy-source](https://developer.android.com/develop/ui/compose/state#groovy), [live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source](https://developer.android.com/develop/ui/compose/state#use-other-types-of-state-in-jetpack-compose)
