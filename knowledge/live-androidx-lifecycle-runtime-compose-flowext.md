---
type: reference
title: Lifecycle-aware Compose Flow collection source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 1
    endLine: 35
    sha256: 083c7ae1063e03ed97b5978de08fe768614319374bbe1016c404ef484c42642c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2022 The Android Open Source Project
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      package androidx.lifecycle.compose

      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.NonRestartableComposable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.lifecycle.Lifecycle
      import androidx.lifecycle.LifecycleOwner
      import androidx.lifecycle.repeatOnLifecycle
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.EmptyCoroutineContext
      import kotlinx.coroutines.flow.Flow
      import kotlinx.coroutines.flow.StateFlow
      import kotlinx.coroutines.withContext

      /**
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 106
    endLine: 140
    sha256: e150d9b9a48fac5e709be47e37b25777f0ce774b1e6bad068f465f181a638b7f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return state
      }

      /**
       * Collects values from this [Flow] and represents its latest value via [State] in a lifecycle-aware
       * manner.
       *
       * Every time there would be new value posted into the [Flow] the returned [State] will be updated
       * causing recomposition of every [State.value] usage whenever the [lifecycleOwner]'s lifecycle is
       * at least [minActiveState].
       *
       * This [Flow] is collected every time the [lifecycleOwner]'s lifecycle reaches the [minActiveState]
       * Lifecycle state. The collection stops when the [lifecycleOwner]'s lifecycle falls below
       * [minActiveState].
       *
       * @sample androidx.lifecycle.compose.samples.FlowCollectAsStateWithLifecycle
       *
       * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
       * throw an [IllegalArgumentException].
       *
       * @param initialValue The initial value given to the returned [State.value].
       * @param lifecycleOwner [LifecycleOwner] whose `lifecycle` is used to restart collecting `this`
       *   flow.
       * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
       *   will stop if the lifecycle falls below that state, and will restart if it's in that state
       *   again.
       * @param context [CoroutineContext] to use for collecting.
       */
      @Composable
      public fun <T> Flow<T>.collectAsStateWithLifecycle(
          initialValue: T,
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
          context: CoroutineContext = EmptyCoroutineContext,
      ): State<T> =
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 141
    endLine: 175
    sha256: 217e2ceb85c0079c16e49cb87c2ba960e8aa26a06bdd8838f478969e3e0f86c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          collectAsStateWithLifecycle(
              initialValue = initialValue,
              lifecycle = lifecycleOwner.lifecycle,
              minActiveState = minActiveState,
              context = context,
          )

      /**
       * Collects values from this [Flow] and represents its latest value via [State] in a lifecycle-aware
       * manner.
       *
       * Every time there would be new value posted into the [Flow] the returned [State] will be updated
       * causing recomposition of every [State.value] usage whenever the [lifecycle] is at least
       * [minActiveState].
       *
       * This [Flow] is collected every time [lifecycle] reaches the [minActiveState] Lifecycle state. The
       * collection stops when [lifecycle] falls below [minActiveState].
       *
       * @sample androidx.lifecycle.compose.samples.FlowCollectAsStateWithLifecycle
       *
       * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
       * throw an [IllegalArgumentException].
       *
       * @param initialValue The initial value given to the returned [State.value].
       * @param lifecycle [Lifecycle] used to restart collecting `this` flow.
       * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
       *   will stop if the lifecycle falls below that state, and will restart if it's in that state
       *   again.
       * @param context [CoroutineContext] to use for collecting.
       */
      @Composable
      public fun <T> Flow<T>.collectAsStateWithLifecycle(
          initialValue: T,
          lifecycle: Lifecycle,
          minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 176
    endLine: 202
    sha256: df094d83d86faf093b5538f1ce92226f5f4eab67a96dc847916284054e282397
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          context: CoroutineContext = EmptyCoroutineContext,
      ): State<T> {
          val state = remember { mutableStateOf(initialValue) }
          collectInto(state, lifecycle, minActiveState, context)
          return state
      }

      @Suppress("ComposableNaming")
      @Composable
      @NonRestartableComposable
      private fun <T> Flow<T>.collectInto(
          state: MutableState<T>,
          lifecycle: Lifecycle,
          minActiveState: Lifecycle.State,
          context: CoroutineContext,
      ) {
          LaunchedEffect(this, lifecycle, minActiveState, context) {
              lifecycle.repeatOnLifecycle(minActiveState) {
                  if (context == EmptyCoroutineContext) {
                      collect { state.value = it }
                  } else {
                      withContext(context) { collect { state.value = it } }
                  }
              }
          }
      }
  - id: live-androidx-lifecycle-runtime-compose-flowext-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt
    startLine: 36
    endLine: 70
    sha256: 87b2fdce80d208c43770d082e5446efa8adbbfaa3aa4bb72ab6222ac2ae9f006
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Collects values from this [StateFlow] and represents its latest value via [State] in a
       * lifecycle-aware manner.
       *
       * The [StateFlow.value] is used as an initial value. Every time there would be new value posted
       * into the [StateFlow] the returned [State] will be updated causing recomposition of every
       * [State.value] usage whenever the [lifecycleOwner]'s lifecycle is at least [minActiveState].
       *
       * This [StateFlow] is collected every time the [lifecycleOwner]'s lifecycle reaches the
       * [minActiveState] Lifecycle state. The collection stops when the [lifecycleOwner]'s lifecycle
       * falls below [minActiveState].
       *
       * @sample androidx.lifecycle.compose.samples.StateFlowCollectAsStateWithLifecycle
       *
       * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
       * throw an [IllegalArgumentException].
       *
       * @param lifecycleOwner [LifecycleOwner] whose `lifecycle` is used to restart collecting `this`
       *   flow.
       * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
       *   will stop if the lifecycle falls below that state, and will restart if it's in that state
       *   again.
       * @param context [CoroutineContext] to use for collecting.
       */
      @Composable
      @Suppress("StateFlowValueCalledInComposition")
      public // Initial value for an ongoing collect.
      fun <T> StateFlow<T>.collectAsStateWithLifecycle(
          lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
          minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
          context: CoroutineContext = EmptyCoroutineContext,
      ): State<T> =
          collectAsStateWithLifecycle(
              initialValue = this.value,
              lifecycle = lifecycleOwner.lifecycle,
              minActiveState = minActiveState,
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
compose:
  id: live-androidx-lifecycle-runtime-compose-flowext
  artifact: androidx.lifecycle:lifecycle-runtime-compose
  fqn: androidx.lifecycle.compose.collectAsStateWithLifecycle
  sections:
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-1
      title: Lifecycle-aware Compose Flow collection source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-1-source
      relatedIds: []
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-106
      title: Lifecycle-aware Compose Flow collection source (lines 106–140)
      aliases:
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-106-source
      relatedIds: []
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-141
      title: Lifecycle-aware Compose Flow collection source (lines 141–175)
      aliases:
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-141-source
      relatedIds: []
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-176
      title: Lifecycle-aware Compose Flow collection source (lines 176–202)
      aliases: []
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-176-source
      relatedIds: []
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-36
      title: Lifecycle-aware Compose Flow collection source (lines 36–70)
      aliases:
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-36-source
      relatedIds: []
    - id: live-androidx-lifecycle-runtime-compose-flowext-lines-71
      title: Lifecycle-aware Compose Flow collection source (lines 71–105)
      aliases:
        - androidx.lifecycle.compose.collectAsStateWithLifecycle
      requires:
        - artifact: androidx.lifecycle:lifecycle-runtime-compose
          version: null
      sourceIds:
        - live-androidx-lifecycle-runtime-compose-flowext-lines-71-source
      relatedIds: []
---

# Lifecycle-aware Compose Flow collection source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt

## Lifecycle-aware Compose Flow collection source (lines 1–35)

/*
 * Copyright 2022 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package androidx.lifecycle.compose

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.NonRestartableComposable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleOwner
import androidx.lifecycle.repeatOnLifecycle
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.withContext

/**

Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)

## Lifecycle-aware Compose Flow collection source (lines 106–140)

    return state
}

/**
 * Collects values from this [Flow] and represents its latest value via [State] in a lifecycle-aware
 * manner.
 *
 * Every time there would be new value posted into the [Flow] the returned [State] will be updated
 * causing recomposition of every [State.value] usage whenever the [lifecycleOwner]'s lifecycle is
 * at least [minActiveState].
 *
 * This [Flow] is collected every time the [lifecycleOwner]'s lifecycle reaches the [minActiveState]
 * Lifecycle state. The collection stops when the [lifecycleOwner]'s lifecycle falls below
 * [minActiveState].
 *
 * @sample androidx.lifecycle.compose.samples.FlowCollectAsStateWithLifecycle
 *
 * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
 * throw an [IllegalArgumentException].
 *
 * @param initialValue The initial value given to the returned [State.value].
 * @param lifecycleOwner [LifecycleOwner] whose `lifecycle` is used to restart collecting `this`
 *   flow.
 * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
 *   will stop if the lifecycle falls below that state, and will restart if it's in that state
 *   again.
 * @param context [CoroutineContext] to use for collecting.
 */
@Composable
public fun <T> Flow<T>.collectAsStateWithLifecycle(
    initialValue: T,
    lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
    minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
    context: CoroutineContext = EmptyCoroutineContext,
): State<T> =

Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)

## Lifecycle-aware Compose Flow collection source (lines 141–175)

    collectAsStateWithLifecycle(
        initialValue = initialValue,
        lifecycle = lifecycleOwner.lifecycle,
        minActiveState = minActiveState,
        context = context,
    )

/**
 * Collects values from this [Flow] and represents its latest value via [State] in a lifecycle-aware
 * manner.
 *
 * Every time there would be new value posted into the [Flow] the returned [State] will be updated
 * causing recomposition of every [State.value] usage whenever the [lifecycle] is at least
 * [minActiveState].
 *
 * This [Flow] is collected every time [lifecycle] reaches the [minActiveState] Lifecycle state. The
 * collection stops when [lifecycle] falls below [minActiveState].
 *
 * @sample androidx.lifecycle.compose.samples.FlowCollectAsStateWithLifecycle
 *
 * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
 * throw an [IllegalArgumentException].
 *
 * @param initialValue The initial value given to the returned [State.value].
 * @param lifecycle [Lifecycle] used to restart collecting `this` flow.
 * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
 *   will stop if the lifecycle falls below that state, and will restart if it's in that state
 *   again.
 * @param context [CoroutineContext] to use for collecting.
 */
@Composable
public fun <T> Flow<T>.collectAsStateWithLifecycle(
    initialValue: T,
    lifecycle: Lifecycle,
    minActiveState: Lifecycle.State = Lifecycle.State.STARTED,

Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)

## Lifecycle-aware Compose Flow collection source (lines 176–202)

    context: CoroutineContext = EmptyCoroutineContext,
): State<T> {
    val state = remember { mutableStateOf(initialValue) }
    collectInto(state, lifecycle, minActiveState, context)
    return state
}

@Suppress("ComposableNaming")
@Composable
@NonRestartableComposable
private fun <T> Flow<T>.collectInto(
    state: MutableState<T>,
    lifecycle: Lifecycle,
    minActiveState: Lifecycle.State,
    context: CoroutineContext,
) {
    LaunchedEffect(this, lifecycle, minActiveState, context) {
        lifecycle.repeatOnLifecycle(minActiveState) {
            if (context == EmptyCoroutineContext) {
                collect { state.value = it }
            } else {
                withContext(context) { collect { state.value = it } }
            }
        }
    }
}


Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)

## Lifecycle-aware Compose Flow collection source (lines 36–70)

 * Collects values from this [StateFlow] and represents its latest value via [State] in a
 * lifecycle-aware manner.
 *
 * The [StateFlow.value] is used as an initial value. Every time there would be new value posted
 * into the [StateFlow] the returned [State] will be updated causing recomposition of every
 * [State.value] usage whenever the [lifecycleOwner]'s lifecycle is at least [minActiveState].
 *
 * This [StateFlow] is collected every time the [lifecycleOwner]'s lifecycle reaches the
 * [minActiveState] Lifecycle state. The collection stops when the [lifecycleOwner]'s lifecycle
 * falls below [minActiveState].
 *
 * @sample androidx.lifecycle.compose.samples.StateFlowCollectAsStateWithLifecycle
 *
 * Warning: [Lifecycle.State.INITIALIZED] is not allowed in this API. Passing it as a parameter will
 * throw an [IllegalArgumentException].
 *
 * @param lifecycleOwner [LifecycleOwner] whose `lifecycle` is used to restart collecting `this`
 *   flow.
 * @param minActiveState [Lifecycle.State] in which the upstream flow gets collected. The collection
 *   will stop if the lifecycle falls below that state, and will restart if it's in that state
 *   again.
 * @param context [CoroutineContext] to use for collecting.
 */
@Composable
@Suppress("StateFlowValueCalledInComposition")
public // Initial value for an ongoing collect.
fun <T> StateFlow<T>.collectAsStateWithLifecycle(
    lifecycleOwner: LifecycleOwner = LocalLifecycleOwner.current,
    minActiveState: Lifecycle.State = Lifecycle.State.STARTED,
    context: CoroutineContext = EmptyCoroutineContext,
): State<T> =
    collectAsStateWithLifecycle(
        initialValue = this.value,
        lifecycle = lifecycleOwner.lifecycle,
        minActiveState = minActiveState,

Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)

## Lifecycle-aware Compose Flow collection source (lines 71–105)

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

Sources: [live-androidx-lifecycle-runtime-compose-flowext-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/lifecycle/lifecycle-runtime-compose/src/commonMain/kotlin/androidx/lifecycle/compose/FlowExt.kt)
