---
type: reference
title: "Guidance: Collect Android screen Flows with lifecycle awareness"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 71
    endLine: 105
    sha256: 685f744296b0173790588ae8f970c5dae7d6cd34c9bec84fa3fc1d4cd158cd95
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              context = context,
          )

      /**
       * Collects values from this [StateFlow] and represents its latest value via [State] in a
       * lifecycle-aware manner.
       *
       * The [StateFlow.value] is used as an initial value. Every time there would be new value posted
       * into the [StateFlow] the returned [State] will be updated causing recomposition of every
       * [State.value] usage whenever the [lifecycle] is at least [minActiveState].
       *
       * This [StateFlow] is collected every time [lifecycle] reaches the [minActiveState] Lifecycle
       * state. The collection stops when [lifecycle] falls below [minActiveState].
       *
       * @sample androidx.lifecycle.compose.samples.StateFlowCollectAsStateWithLifecycle
       *
       * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
       * throw an [IllegalArgumentException].
       *
       * @param lifecycle [Lifecycle] used to restart collecting `this` flow.
       * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
       *   will stop if the lifecycle falls below that state, and will restart if it's in that state
       *   again.
       * @param context [CoroutineContext] to use for collecting.
       */
      @Composable
      @Suppress("StateFlowValueCalledInComposition")
      public // Initial value for an ongoing collect.
      fun <T> StateFlow<T>.collectAsStateWithLifecycle(
          lifecycle: Lifecycle,
          minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
          context: CoroutineContext = EmptyCoroutineContext,
      ): State<T> {
          val state = remember { mutableStateOf(this.value) }
          collectInto(state, lifecycle, minActiveState, context)
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
  id: guide-android-flow-lifecycle-state
  artifact: androidx.lifecycle:lifecycle-runtime-compose
  fqn: androidx.lifecycle.compose.collectAsStateWithLifecycle
  sections:
    - id: guide-android-flow-lifecycle-state
      title: "Guidance: Collect Android screen Flows with lifecycle awareness"
      aliases:
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
        - Flow to Compose State
        - lifecycle-aware Flow collection
        - ViewModel screen state
        - screen boundary
        - minActiveState
        - STARTED Flow collection
        - INITIALIZED lifecycle error
        - StateFlow initial value
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source
        - live-androidx-lifecycle-runtime-compose-flowext-lines-71-source
      relatedIds:
        - live-compose-guide-state-use-other-types-of-state-in-jetpack-compose
        - live-androidx-lifecycle-runtime-compose-flowext-lines-71
---

# Guidance: Collect Android screen Flows with lifecycle awareness

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Collect Android screen Flows with lifecycle awareness

Guidance: For Android UI, collect a Flow as Compose State with collectAsStateWithLifecycle. For its StateFlow overload, StateFlow.value supplies the initial value. Collection starts when the lifecycle reaches minActiveState, stops below it, and restarts on returning; the default threshold is STARTED. Limitation: INITIALIZED is not allowed and throws IllegalArgumentException. Choose the active threshold deliberately; this API controls UI collection, so do not assume every lifecycle state is a valid threshold.

Sources: [live-compose-guide-state-use-other-types-of-state-in-jetpack-compose-source](https://developer.android.com/develop/ui/compose/state#use-other-types-of-state-in-jetpack-compose), [live-androidx-lifecycle-runtime-compose-flowext-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)
