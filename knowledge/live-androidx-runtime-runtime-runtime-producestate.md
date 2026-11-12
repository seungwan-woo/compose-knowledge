---
type: reference
title: androidx.compose.runtime ProduceState.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 1
    endLine: 35
    sha256: 2052185369d376d1cc20001f0d4ddf7d0928f273e109d8df9c6bbeb56181a893
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2021 The Android Open Source Project
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

      @file:JvmName("SnapshotStateKt")
      @file:JvmMultifileClass

      package androidx.compose.runtime

      import kotlin.coroutines.CoroutineContext
      import kotlin.jvm.JvmMultifileClass
      import kotlin.jvm.JvmName
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.suspendCancellableCoroutine

      /** Receiver scope for use with [produceState]. */
      public interface ProduceStateScope<T> : MutableState<T>, CoroutineScope {
          /**
           * Await the disposal of this producer whether it left the composition, the source changed, or
           * an error occurred. Always runs [onDispose] before resuming.
           *
           * This method is useful when configuring callback-based state producers that do not suspend,
           * for example:
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 106
    endLine: 140
    sha256: cdccfc75e94882a6bf72280b16499ca58a72357fdce813509c6def6f213fb59f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          LaunchedEffect(Unit) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1] changes, a running [producer] will be cancelled
       * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 141
    endLine: 175
    sha256: 11018963753efadf568973c81b41e041704dee8691c91ea0dfc1a49dba7dbf89
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
          LaunchedEffect(key1) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1] changes, a running [producer] will be cancelled
       * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 176
    endLine: 210
    sha256: 6b41790e62b01f0fbcfa6cc68ed12a44947ddf9d5a862adebaba975e3af003f6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Changes to the [mutationPolicy] and [initialValue] are ignored.
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          LaunchedEffect(key1) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1] and [key2].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1] or [key2] change, a running [producer] will be
       * cancelled and re-launched for the new source. [producer] should use [ProduceStateScope.value] to
       * set new values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 211
    endLine: 245
    sha256: d0de87f109ebc0c235e60f320576cac96108784f3218e369886fa2f550f3c55c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
          LaunchedEffect(key1, key2) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1] and [key2].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1] or [key2] change, a running [producer] will be
       * cancelled and re-launched for the new source. [producer] should use [ProduceStateScope.value] to
       * set new values on the returned [State].
       *
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 246
    endLine: 280
    sha256: 78177ae121a28c392f3d590dca2ca3bc8c19430252a561080c0e4cfff5732600
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
       *
       * The [mutationPolicy] is only used when initializing the underlying state object. If the
       * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
       * will continue collecting in the previously returned state with the original
       * [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          LaunchedEffect(key1, key2) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 281
    endLine: 315
    sha256: ce8a92cf5b1b98d6cc5b6520956e62bfc39ece8a46e2c02eb4288ce12616266a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1], [key2] and [key3].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
       * will be cancelled and re-launched for the new source. [producer] should use
       * [ProduceStateScope.value] to set new values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param key3 A key that, when changed, will restart the [producer] lambda
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          key3: Any?,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 316
    endLine: 350
    sha256: 489724f86eb77491ca7fc3a108c3467b6a4e645d61e94156650e5cf1338ed2a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          LaunchedEffect(key1, key2, key3) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1], [key2] and [key3].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
       * will be cancelled and re-launched for the new source. [producer] should use
       * [ProduceStateScope.value] to set new values on the returned [State].
       *
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
       *
       * The [mutationPolicy] is only used when initializing the underlying state object. If the
       * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
       * will continue collecting in the previously returned state with the original
       * [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param key3 A key that, when changed, will restart the [producer] lambda
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 351
    endLine: 385
    sha256: 0c3b959a788b5dcfc5ab1db72a292b0742f2364c4fe757b1c1cecb99ffc40e52
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          key3: Any?,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          LaunchedEffect(key1, key2, key3) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1], [key2] and [key3].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
       * will be cancelled and re-launched for the new source. [producer] should use
       * [ProduceStateScope.value] to set new values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 36
    endLine: 70
    sha256: 49d38ba6ea1b1a0e07abbdb3f70947ced2254d24a4b91edbabefc8fec4135dd0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
           */
          public suspend fun awaitDispose(onDispose: () -> Unit): Nothing
      }

      private class ProduceStateScopeImpl<T>(
          state: MutableState<T>,
          override val coroutineContext: CoroutineContext,
      ) : ProduceStateScope<T>, MutableState<T> by state {

          override suspend fun awaitDispose(onDispose: () -> Unit): Nothing {
              try {
                  suspendCancellableCoroutine<Nothing> {}
              } finally {
                  onDispose()
              }
          }
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time without a defined data source.
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 386
    endLine: 420
    sha256: 3cdc69b34da5592e3f34b845d5fc9bd605ddec044fb90a14183d7994640373d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param key3 A key that, when changed, will restart the [producer] lambda
       * @param key4 A key that, when changed, will restart the [producer] lambda
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          key3: Any?,
          key4: Any?,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
          LaunchedEffect(key1, key2, key3, key4) {
              ProduceStateScopeImpl(result, coroutineContext).producer()
          }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [key1], [key2], [key3] or [key4].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [key1], [key2], [key3] or [key4] change, a running
       * [producer] will be cancelled and re-launched for the new source. [producer] should use
       * [ProduceStateScope.value] to set new values on the returned [State].
       *
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 421
    endLine: 455
    sha256: 795a219f52f9ad2d24bd00689360d94a23a01d2b0e9cbfa875f83e8220a3b187
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
       *
       * The [mutationPolicy] is only used when initializing the underlying state object. If the
       * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
       * will continue collecting in the previously returned state with the original
       * [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param key1 A key that, when changed, will restart the [producer] lambda
       * @param key2 A key that, when changed, will restart the [producer] lambda
       * @param key3 A key that, when changed, will restart the [producer] lambda
       * @param key4 A key that, when changed, will restart the [producer] lambda
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          key1: Any?,
          key2: Any?,
          key3: Any?,
          key4: Any?,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          LaunchedEffect(key1, key2, key3, key4) {
              ProduceStateScopeImpl(result, coroutineContext).producer()
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 456
    endLine: 490
    sha256: 5431fafac25390178e574a2468b879a7eadc975d88ba1ec477bc8ec92e02da61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [keys].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [keys] change, a running [producer] will be cancelled
       * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
       * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
       * the latest value if several values are set in rapid succession. This can be changed by providing
       * a [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param keys A list of keys that, when changed, will restart the [producer] lambda
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          vararg keys: Any?,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
          @Suppress("CHANGING_ARGUMENTS_EXECUTION_ORDER_FOR_NAMED_VARARGS")
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 491
    endLine: 525
    sha256: 9238ba5b37ddc08be8069e8d8b9c82b8cc9bee756bb19abff3b6a1cfc2eee79f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          LaunchedEffect(keys = keys) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time from [keys].
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. If [keys] change, a running [producer] will be cancelled
       * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
       *
       * The [mutationPolicy] is only used when initializing the underlying state object. If the
       * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
       * will continue collecting in the previously returned state with the original
       * [SnapshotMutationPolicy].
       *
       * [produceState] may be used to observe either suspending or non-suspending sources of external
       * data, for example:
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param keys A list of keys that, when changed, will restart the [producer] lambda
       * @param mutationPolicy A policy used to control how changes are handled in the returned state
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 526
    endLine: 538
    sha256: 03e008c93467001e835ff297176b90d65e59ebd417a18dfaee53e0dfd0279b84
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      @Composable
      public fun <T> produceState(
          initialValue: T,
          vararg keys: Any?,
          mutationPolicy: SnapshotMutationPolicy<T>,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue, mutationPolicy) }
          @Suppress("CHANGING_ARGUMENTS_EXECUTION_ORDER_FOR_NAMED_VARARGS")
          LaunchedEffect(keys = keys) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }
  - id: live-androidx-runtime-runtime-runtime-producestate-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt
    startLine: 71
    endLine: 105
    sha256: b1012c70b45cbce2258f702a9d4efbd927368fd4814389d1caf291f8ac78fb77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.runtime.samples.ProduceState
       * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
       * @param initialValue The value that the returned state will initially contain
       * @param producer A suspending lambda that defines what values are emitted to the returned state
       */
      @Composable
      public fun <T> produceState(
          initialValue: T,
          producer: suspend ProduceStateScope<T>.() -> Unit,
      ): State<T> {
          val result = remember { mutableStateOf(initialValue) }
          LaunchedEffect(Unit) { ProduceStateScopeImpl(result, coroutineContext).producer() }
          return result
      }

      /**
       * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
       * produces values over time without a defined data source.
       *
       * [producer] is launched when [produceState] enters the composition and is cancelled when
       * [produceState] leaves the composition. [producer] should use [ProduceStateScope.value] to set new
       * values on the returned [State].
       *
       * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
       * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
       * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
       * if several values are set in rapid succession. This is especially true when reading the returned
       * state in composition, as composition executes with the latest values from a snapshot rather than
       * composing once with each intermediate value of a state.
       *
       * The [mutationPolicy] is only used when initializing the underlying state object. If the
       * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
       * will continue collecting in the previously returned state with the original
       * [SnapshotMutationPolicy].
compose:
  id: live-androidx-runtime-runtime-runtime-producestate
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-1
      title: androidx.compose.runtime ProduceState.kt source (lines 1–35)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-106
      title: androidx.compose.runtime ProduceState.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-141
      title: androidx.compose.runtime ProduceState.kt source (lines 141–175)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-176
      title: androidx.compose.runtime ProduceState.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-211
      title: androidx.compose.runtime ProduceState.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-246
      title: androidx.compose.runtime ProduceState.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-281
      title: androidx.compose.runtime ProduceState.kt source (lines 281–315)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-316
      title: androidx.compose.runtime ProduceState.kt source (lines 316–350)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-351
      title: androidx.compose.runtime ProduceState.kt source (lines 351–385)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-36
      title: androidx.compose.runtime ProduceState.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-386
      title: androidx.compose.runtime ProduceState.kt source (lines 386–420)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-386-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-421
      title: androidx.compose.runtime ProduceState.kt source (lines 421–455)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-421-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-456
      title: androidx.compose.runtime ProduceState.kt source (lines 456–490)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-456-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-491
      title: androidx.compose.runtime ProduceState.kt source (lines 491–525)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-491-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-526
      title: androidx.compose.runtime ProduceState.kt source (lines 526–538)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-526-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-producestate-lines-71
      title: androidx.compose.runtime ProduceState.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.ProduceStateScope
        - androidx.compose.runtime.produceState
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-producestate-lines-71-source
      relatedIds: []
---

# androidx.compose.runtime ProduceState.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt

## androidx.compose.runtime ProduceState.kt source (lines 1–35)

/*
 * Copyright 2021 The Android Open Source Project
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

@file:JvmName("SnapshotStateKt")
@file:JvmMultifileClass

package androidx.compose.runtime

import kotlin.coroutines.CoroutineContext
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.suspendCancellableCoroutine

/** Receiver scope for use with [produceState]. */
public interface ProduceStateScope<T> : MutableState<T>, CoroutineScope {
    /**
     * Await the disposal of this producer whether it left the composition, the source changed, or
     * an error occurred. Always runs [onDispose] before resuming.
     *
     * This method is useful when configuring callback-based state producers that do not suspend,
     * for example:

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 106–140)

 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param mutationPolicy A policy used to control how changes are handled in the returned state
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    LaunchedEffect(Unit) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1] changes, a running [producer] will be cancelled
 * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 141–175)

 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }
    LaunchedEffect(key1) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1] changes, a running [producer] will be cancelled
 * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 176–210)

 *
 * Changes to the [mutationPolicy] and [initialValue] are ignored.
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param mutationPolicy A policy used to control how changes are handled in the returned state
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    LaunchedEffect(key1) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1] and [key2].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1] or [key2] change, a running [producer] will be
 * cancelled and re-launched for the new source. [producer] should use [ProduceStateScope.value] to
 * set new values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 211–245)

 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }
    LaunchedEffect(key1, key2) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1] and [key2].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1] or [key2] change, a running [producer] will be
 * cancelled and re-launched for the new source. [producer] should use [ProduceStateScope.value] to
 * set new values on the returned [State].
 *

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 246–280)

 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.
 *
 * The [mutationPolicy] is only used when initializing the underlying state object. If the
 * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
 * will continue collecting in the previously returned state with the original
 * [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param mutationPolicy A policy used to control how changes are handled in the returned state
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    LaunchedEffect(key1, key2) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 281–315)


/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1], [key2] and [key3].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
 * will be cancelled and re-launched for the new source. [producer] should use
 * [ProduceStateScope.value] to set new values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param key3 A key that, when changed, will restart the [producer] lambda
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    key3: Any?,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 316–350)

    LaunchedEffect(key1, key2, key3) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1], [key2] and [key3].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
 * will be cancelled and re-launched for the new source. [producer] should use
 * [ProduceStateScope.value] to set new values on the returned [State].
 *
 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.
 *
 * The [mutationPolicy] is only used when initializing the underlying state object. If the
 * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
 * will continue collecting in the previously returned state with the original
 * [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param key3 A key that, when changed, will restart the [producer] lambda
 * @param mutationPolicy A policy used to control how changes are handled in the returned state

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 351–385)

 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    key3: Any?,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    LaunchedEffect(key1, key2, key3) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1], [key2] and [key3].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1], [key2] or [key3] change, a running [producer]
 * will be cancelled and re-launched for the new source. [producer] should use
 * [ProduceStateScope.value] to set new values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 36–70)

     *
     * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
     */
    public suspend fun awaitDispose(onDispose: () -> Unit): Nothing
}

private class ProduceStateScopeImpl<T>(
    state: MutableState<T>,
    override val coroutineContext: CoroutineContext,
) : ProduceStateScope<T>, MutableState<T> by state {

    override suspend fun awaitDispose(onDispose: () -> Unit): Nothing {
        try {
            suspendCancellableCoroutine<Nothing> {}
        } finally {
            onDispose()
        }
    }
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time without a defined data source.
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 386–420)

 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param key3 A key that, when changed, will restart the [producer] lambda
 * @param key4 A key that, when changed, will restart the [producer] lambda
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    key3: Any?,
    key4: Any?,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }
    LaunchedEffect(key1, key2, key3, key4) {
        ProduceStateScopeImpl(result, coroutineContext).producer()
    }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [key1], [key2], [key3] or [key4].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [key1], [key2], [key3] or [key4] change, a running
 * [producer] will be cancelled and re-launched for the new source. [producer] should use
 * [ProduceStateScope.value] to set new values on the returned [State].
 *
 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 421–455)

 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.
 *
 * The [mutationPolicy] is only used when initializing the underlying state object. If the
 * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
 * will continue collecting in the previously returned state with the original
 * [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param key1 A key that, when changed, will restart the [producer] lambda
 * @param key2 A key that, when changed, will restart the [producer] lambda
 * @param key3 A key that, when changed, will restart the [producer] lambda
 * @param key4 A key that, when changed, will restart the [producer] lambda
 * @param mutationPolicy A policy used to control how changes are handled in the returned state
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    key1: Any?,
    key2: Any?,
    key3: Any?,
    key4: Any?,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    LaunchedEffect(key1, key2, key3, key4) {
        ProduceStateScopeImpl(result, coroutineContext).producer()

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 456–490)

    }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [keys].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [keys] change, a running [producer] will be cancelled
 * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The returned [State] conflates values; no change will be observable if [ProduceStateScope.value]
 * is used to set a value that is [equal][Any.equals] to its old value, and observers may only see
 * the latest value if several values are set in rapid succession. This can be changed by providing
 * a [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param keys A list of keys that, when changed, will restart the [producer] lambda
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    vararg keys: Any?,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }
    @Suppress("CHANGING_ARGUMENTS_EXECUTION_ORDER_FOR_NAMED_VARARGS")

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 491–525)

    LaunchedEffect(keys = keys) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time from [keys].
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. If [keys] change, a running [producer] will be cancelled
 * and re-launched for the new source. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.
 *
 * The [mutationPolicy] is only used when initializing the underlying state object. If the
 * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
 * will continue collecting in the previously returned state with the original
 * [SnapshotMutationPolicy].
 *
 * [produceState] may be used to observe either suspending or non-suspending sources of external
 * data, for example:
 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param keys A list of keys that, when changed, will restart the [producer] lambda
 * @param mutationPolicy A policy used to control how changes are handled in the returned state
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 526–538)

@Composable
public fun <T> produceState(
    initialValue: T,
    vararg keys: Any?,
    mutationPolicy: SnapshotMutationPolicy<T>,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue, mutationPolicy) }
    @Suppress("CHANGING_ARGUMENTS_EXECUTION_ORDER_FOR_NAMED_VARARGS")
    LaunchedEffect(keys = keys) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}


Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)

## androidx.compose.runtime ProduceState.kt source (lines 71–105)

 *
 * @sample androidx.compose.runtime.samples.ProduceState
 * @sample androidx.compose.runtime.samples.ProduceStateAwaitDispose
 * @param initialValue The value that the returned state will initially contain
 * @param producer A suspending lambda that defines what values are emitted to the returned state
 */
@Composable
public fun <T> produceState(
    initialValue: T,
    producer: suspend ProduceStateScope<T>.() -> Unit,
): State<T> {
    val result = remember { mutableStateOf(initialValue) }
    LaunchedEffect(Unit) { ProduceStateScopeImpl(result, coroutineContext).producer() }
    return result
}

/**
 * Return an observable [snapshot][androidx.compose.runtime.snapshots.Snapshot] [State] that
 * produces values over time without a defined data source.
 *
 * [producer] is launched when [produceState] enters the composition and is cancelled when
 * [produceState] leaves the composition. [producer] should use [ProduceStateScope.value] to set new
 * values on the returned [State].
 *
 * The given [mutationPolicy] is used to control how changes are reported and merged in the returned
 * state. If not specified, the default behavior is [structuralEqualityPolicy], which conflates
 * values that are [equal][Any.equals] to each other. Note observers may only see the latest value
 * if several values are set in rapid succession. This is especially true when reading the returned
 * state in composition, as composition executes with the latest values from a snapshot rather than
 * composing once with each intermediate value of a state.
 *
 * The [mutationPolicy] is only used when initializing the underlying state object. If the
 * [mutationPolicy] changes after creating the state, the state and the producer are unaffected and
 * will continue collecting in the previously returned state with the original
 * [SnapshotMutationPolicy].

Sources: [live-androidx-runtime-runtime-runtime-producestate-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/ProduceState.kt)
