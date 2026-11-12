---
type: reference
title: androidx.compose.runtime Effects.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-runtime-runtime-runtime-effects-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 1
    endLine: 35
    sha256: 7f13221c96df3569e1cdfa5e80ce12df67fad7ecc46e365f7531a1020353962e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2020 The Android Open Source Project
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

      package androidx.compose.runtime

      import androidx.compose.runtime.internal.PlatformOptimizedCancellationException
      import androidx.compose.runtime.internal.trace
      import androidx.compose.runtime.platform.makeSynchronizedObject
      import androidx.compose.runtime.platform.synchronized
      import androidx.compose.runtime.tooling.ComposeToolingApi
      import androidx.compose.runtime.tooling.ComposeToolingFlags
      import androidx.compose.runtime.tooling.CompositionErrorContextImpl
      import androidx.compose.runtime.tooling.verboseTrace
      import kotlin.concurrent.Volatile
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.EmptyCoroutineContext
      import kotlin.jvm.JvmField
      import kotlinx.coroutines.CoroutineExceptionHandler
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.cancel
      import kotlinx.coroutines.launch
  - id: live-androidx-runtime-runtime-runtime-effects-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 106
    endLine: 140
    sha256: be70efd14c7ceca24f816201cf4d6bce7e5dc0490e877bca3aea2c888ec9ccfe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
       *   scheduled.
       * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
       * @param effect The effect that will execute when this composition completes successfully and is
       *   applying changes.
       */
      @Composable
      @NonRestartableComposable
      public fun SideEffect(key1: Any?, key2: Any?, effect: () -> Unit) {
          if (currentComposer.changed(key1) or currentComposer.changed(key2)) {
              currentComposer.recordSideEffectWithTracing(effect)
          }
      }

      /**
       * Schedule [effect] to run as a side effect for any new unique value of [key1], [key2], or [key3].
       *
       * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
       * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
       * previously provided value.
       *
       * When using the overload of this function that doesn't accept keys, the [effect] will execute on
       * every recomposition. This overload is preferred when you have one-shot work that doesn't require
       * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
       * order that they appear in the composition hierarchy (following an in-order traversal).
       *
       * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
       *   scheduled.
       * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
  - id: live-androidx-runtime-runtime-runtime-effects-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 141
    endLine: 175
    sha256: 83512ee9b11caa67be23b7d7cc9390bbaf43de3dfca59b244e36ed8977a72e82
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param key3 A third key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
       * @param effect The effect that will execute when this composition completes successfully and is
       *   applying changes.
       */
      @Composable
      @NonRestartableComposable
      public fun SideEffect(key1: Any?, key2: Any?, key3: Any?, effect: () -> Unit) {
          if (
              currentComposer.changed(key1) or
                  currentComposer.changed(key2) or
                  currentComposer.changed(key3)
          ) {
              currentComposer.recordSideEffectWithTracing(effect)
          }
      }

      /**
       * Schedule [effect] to run as a side effect for any new unique value of [key1], [key2], [key3] or
       * [key4].
       *
       * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
       * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
       * previously provided value.
       *
       * When using the overload of this function that doesn't accept keys, the [effect] will execute on
       * every recomposition. This overload is preferred when you have one-shot work that doesn't require
       * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
       * order that they appear in the composition hierarchy (following an in-order traversal).
       *
       * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
       *   scheduled.
  - id: live-androidx-runtime-runtime-runtime-effects-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 176
    endLine: 210
    sha256: 42fd52e6ee835c4a005d3b571706a73ec458662e7bd868cf9baf562c3cd140cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
       * @param key3 A third key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
       * @param key4 A fourth key input; if recomposed with a new value from the previous key, [effect]
       *   will be scheduled.
       * @param effect The effect that will execute when this composition completes successfully and is
       *   applying changes.
       */
      @Composable
      @NonRestartableComposable
      public fun SideEffect(key1: Any?, key2: Any?, key3: Any?, key4: Any?, effect: () -> Unit) {
          if (
              currentComposer.changed(key1) or
                  currentComposer.changed(key2) or
                  currentComposer.changed(key3) or
                  currentComposer.changed(key4)
          ) {
              currentComposer.recordSideEffectWithTracing(effect)
          }
      }

      /**
       * Schedule [effect] to run as a side effect for any new unique [keys].
       *
       * A [SideEffect]'s [keys] are values that defines the identity of the [SideEffect]. When a
       * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
       * previously provided value.
       *
       * When using the overload of this function that doesn't accept keys, the [effect] will execute on
       * every recomposition. This overload is preferred when you have one-shot work that doesn't require
       * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
  - id: live-androidx-runtime-runtime-runtime-effects-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 211
    endLine: 245
    sha256: d51bb0b6ae55a3fb5cb1a6af1c8e1c9ad3954f186716242dd9d62691ab520ad9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * order that they appear in the composition hierarchy (following an in-order traversal).
       *
       * @param keys Key inputs; if recomposed with a different list of keys, [effect] will be scheduled.
       * @param effect The effect that will execute when this composition completes successfully and is
       *   applying changes.
       */
      @Composable
      @NonRestartableComposable
      public fun SideEffect(vararg keys: Any?, effect: () -> Unit) {
          var invalid = currentComposer.changed(keys.size)
          for (key in keys) invalid = invalid or currentComposer.changed(key)
          if (invalid) {
              currentComposer.recordSideEffectWithTracing(effect)
          }
      }

      /**
       * Receiver scope for [DisposableEffect] that offers the [onDispose] clause that should be the last
       * statement in any call to [DisposableEffect].
       */
      public class DisposableEffectScope {
          /**
           * Provide [onDisposeEffect] to the [DisposableEffect] to run when it leaves the composition or
           * its key changes.
           */
          public inline fun onDispose(crossinline onDisposeEffect: () -> Unit): DisposableEffectResult =
              object : DisposableEffectResult {
                  override fun dispose() {
                      onDisposeEffect()
                  }
              }
      }

      public interface DisposableEffectResult {
          public fun dispose()
  - id: live-androidx-runtime-runtime-runtime-effects-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 246
    endLine: 280
    sha256: ebd32c89e34674341ee05670780b865d9d6f2245db9330c54d676e1d5cce6f1c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      private val InternalDisposableEffectScope = DisposableEffectScope()

      @OptIn(ComposeToolingApi::class, InternalComposeApi::class)
      private fun Composer.recordSideEffectWithTracing(effect: () -> Unit) {
          if (ComposeToolingFlags.isVerboseTracingEnabled) {
              recordSideEffect { trace("Compose:SideEffect:effect", effect) }
          } else {
              recordSideEffect(effect)
          }
      }

      private class DisposableEffectImpl(
          private val effect: DisposableEffectScope.() -> DisposableEffectResult
      ) : RememberObserver {
          private var onDispose: DisposableEffectResult? = null

          override fun onRemembered() {
              verboseTrace("Compose:DisposableEffect:effect") {
                  onDispose = InternalDisposableEffectScope.effect()
              }
          }

          override fun onForgotten() {
              verboseTrace("Compose:DisposableEffect:dispose") {
                  onDispose?.dispose()
                  onDispose = null
              }
          }

          override fun onAbandoned() {
              // Nothing to do as [onRemembered] was not called.
          }
      }
  - id: live-androidx-runtime-runtime-runtime-effects-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 281
    endLine: 315
    sha256: 5ff699985a09af88060e998cbfeba1c13fcc0717f7de2aaa8d0501d08f364b3f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      private const val DisposableEffectNoParamError =
          "DisposableEffect must provide one or more 'key' parameters that define the identity of " +
              "the DisposableEffect and determine when its previous effect should be disposed and " +
              "a new effect started for the new key."

      private const val LaunchedEffectNoParamError =
          "LaunchedEffect must provide one or more 'key' parameters that define the identity of " +
              "the LaunchedEffect and determine when its previous effect coroutine should be cancelled " +
              "and a new effect launched for the new key."

      /**
       * A side effect of composition that must be reversed or cleaned up if the [DisposableEffect] leaves
       * the composition.
       *
       * It is an error to call [DisposableEffect] without at least one `key` parameter.
       */
      // This deprecated-error function shadows the varargs overload so that the varargs version
      // is not used without key parameters.
      @Composable
      @NonRestartableComposable
      @Suppress("DeprecatedCallableAddReplaceWith", "UNUSED_PARAMETER")
      @Deprecated(DisposableEffectNoParamError, level = DeprecationLevel.ERROR)
      public fun DisposableEffect(effect: DisposableEffectScope.() -> DisposableEffectResult): Unit =
          error(DisposableEffectNoParamError)

      /**
       * A side effect of composition that must run for any new unique value of [key1] and must be
       * reversed or cleaned up if [key1] changes or if the [DisposableEffect] leaves the composition.
       *
       * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
       * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
       * [effect] and reset by calling [effect] again. Examples of keys include:
       * * Observable objects that the effect subscribes to
       * * Unique request parameters to an operation that must cancel and retry if those parameters change
  - id: live-androidx-runtime-runtime-runtime-effects-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 316
    endLine: 350
    sha256: 0a218a2a83ef2377ad19d15b6fe36219deed6590cb85135c93ca8d89464d48e0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
       * different key is provided, performing cleanup for the old operation before initializing the new.
       * For example:
       *
       * @sample androidx.compose.runtime.samples.disposableEffectSample
       *
       * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
       * the final statement in its [effect] block. If your operation does not require disposal it might
       * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
       * managed by the composition.
       *
       * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
       * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
       * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
       * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
       */
      @Composable
      @NonRestartableComposable
      public fun DisposableEffect(
          key1: Any?,
          effect: DisposableEffectScope.() -> DisposableEffectResult,
      ) {
          remember(key1) { DisposableEffectImpl(effect) }
      }

      /**
       * A side effect of composition that must run for any new unique value of [key1] or [key2] and must
       * be reversed or cleaned up if [key1] or [key2] changes, or if the [DisposableEffect] leaves the
       * composition.
       *
       * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
       * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
       * [effect] and reset by calling [effect] again. Examples of keys include:
       * * Observable objects that the effect subscribes to
  - id: live-androidx-runtime-runtime-runtime-effects-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 351
    endLine: 385
    sha256: 3d85491f4a6b6f0aa643db26ac94e9c963b92885dfea485e69ee010674db7817
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * * Unique request parameters to an operation that must cancel and retry if those parameters change
       *
       * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
       * different key is provided, performing cleanup for the old operation before initializing the new.
       * For example:
       *
       * @sample androidx.compose.runtime.samples.disposableEffectSample
       *
       * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
       * the final statement in its [effect] block. If your operation does not require disposal it might
       * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
       * managed by the composition.
       *
       * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
       * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
       * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
       * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
       */
      @Composable
      @NonRestartableComposable
      public fun DisposableEffect(
          key1: Any?,
          key2: Any?,
          effect: DisposableEffectScope.() -> DisposableEffectResult,
      ) {
          remember(key1, key2) { DisposableEffectImpl(effect) }
      }

      /**
       * A side effect of composition that must run for any new unique value of [key1], [key2] or [key3]
       * and must be reversed or cleaned up if [key1], [key2] or [key3] changes, or if the
       * [DisposableEffect] leaves the composition.
       *
       * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
       * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
  - id: live-androidx-runtime-runtime-runtime-effects-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 36
    endLine: 70
    sha256: 1d06060de6588318be0c54d71ea97d19389d8449a3a387a2c3bb54669da61a3e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Schedule [effect] to run when the current composition completes successfully and applies changes.
       * [SideEffect] can be used to apply side effects to objects managed by the composition that are not
       * backed by [snapshots][androidx.compose.runtime.snapshots.Snapshot] so as not to leave those
       * objects in an inconsistent state if the current composition operation fails.
       *
       * [effect] will always be run on the composition's apply dispatcher and appliers are never run
       * concurrent with themselves, one another, applying changes to the composition tree, or running
       * [RememberObserver] event callbacks. [SideEffect]s are always run after [RememberObserver] event
       * callbacks.
       *
       * A [SideEffect] runs after **every** recomposition when invoked without any keys. To only perform
       * the effect once, use an overload of [SideEffect] that accepts a key. To launch an ongoing task
       * spanning potentially many recompositions, see [LaunchedEffect]. To manage an event subscription
       * or other object lifecycle, see [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
       * order that they appear in the composition hierarchy (following an in-order traversal).
       */
      @Composable
      @NonRestartableComposable
      @ExplicitGroupsComposable
      public fun SideEffect(effect: () -> Unit) {
          currentComposer.recordSideEffectWithTracing(effect)
      }

      /**
       * Schedule [effect] to run as a side effect for any new unique value of [key1].
       *
       * A [SideEffect]'s _key_ is a value that defines the identity of the [SideEffect]. When a
       * [SideEffect] recomposes, its [effect] will only execute if its [key][key1] differs from the
       * previously provided value.
       *
  - id: live-androidx-runtime-runtime-runtime-effects-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 386
    endLine: 420
    sha256: 0fd121553811a8339fa85aee66461f34ea42f6364a142f9824444b030fe7fa8c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [effect] and reset by calling [effect] again. Examples of keys include:
       * * Observable objects that the effect subscribes to
       * * Unique request parameters to an operation that must cancel and retry if those parameters change
       *
       * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
       * different key is provided, performing cleanup for the old operation before initializing the new.
       * For example:
       *
       * @sample androidx.compose.runtime.samples.disposableEffectSample
       *
       * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
       * the final statement in its [effect] block. If your operation does not require disposal it might
       * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
       * managed by the composition.
       *
       * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
       * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
       * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
       * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
       */
      @Composable
      @NonRestartableComposable
      public fun DisposableEffect(
          key1: Any?,
          key2: Any?,
          key3: Any?,
          effect: DisposableEffectScope.() -> DisposableEffectResult,
      ) {
          remember(key1, key2, key3) { DisposableEffectImpl(effect) }
      }

      /**
       * A side effect of composition that must run for any new unique value of [key1], [key2], [key3] or
       * [key4] and must be reversed or cleaned up if [key1], [key2], [key3] or [key4] changes, or if the
       * [DisposableEffect] leaves the composition.
  - id: live-androidx-runtime-runtime-runtime-effects-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 421
    endLine: 455
    sha256: 9db4de5db9a0f764c38d30351048c64cd8914ed96b71c4ff08f7e6c9c2780716
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       *
       * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
       * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
       * [effect] and reset by calling [effect] again. Examples of keys include:
       * * Observable objects that the effect subscribes to
       * * Unique request parameters to an operation that must cancel and retry if those parameters change
       *
       * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
       * different key is provided, performing cleanup for the old operation before initializing the new.
       * For example:
       *
       * @sample androidx.compose.runtime.samples.disposableEffectSample
       *
       * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
       * the final statement in its [effect] block. If your operation does not require disposal it might
       * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
       * managed by the composition.
       *
       * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
       * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
       * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
       * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
       */
      @Composable
      @NonRestartableComposable
      public fun DisposableEffect(
          key1: Any?,
          key2: Any?,
          key3: Any?,
          key4: Any?,
          effect: DisposableEffectScope.() -> DisposableEffectResult,
      ) {
          remember(key1, key2, key3, key4) { DisposableEffectImpl(effect) }
      }
  - id: live-androidx-runtime-runtime-runtime-effects-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 456
    endLine: 490
    sha256: 767b97f38ac2f3ead7659021a9995ef9265d2df71ccb7a89fa6f35aa8c4d1f97
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * A side effect of composition that must run for any new unique value of [keys] and must be
       * reversed or cleaned up if any [keys] change or if the [DisposableEffect] leaves the composition.
       *
       * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
       * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
       * [effect] and reset by calling [effect] again. Examples of keys include:
       * * Observable objects that the effect subscribes to
       * * Unique request parameters to an operation that must cancel and retry if those parameters change
       *
       * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
       * different key is provided, performing cleanup for the old operation before initializing the new.
       * For example:
       *
       * @sample androidx.compose.runtime.samples.disposableEffectSample
       *
       * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
       * the final statement in its [effect] block. If your operation does not require disposal it might
       * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
       * managed by the composition.
       *
       * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
       * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
       * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
       * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @Suppress("ArrayReturn")
      public fun DisposableEffect(
          vararg keys: Any?,
          effect: DisposableEffectScope.() -> DisposableEffectResult,
      ) {
          remember(*keys) { DisposableEffectImpl(effect) }
      }
  - id: live-androidx-runtime-runtime-runtime-effects-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 491
    endLine: 525
    sha256: 2f9b90f86d97d4807ae349eb3ff9c2dc832720193e22c154f562f4a0d999bbe3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      internal class LaunchedEffectImpl(
          private val parentCoroutineContext: CoroutineContext,
          private val task: suspend CoroutineScope.() -> Unit,
      ) : RememberObserver, CoroutineExceptionHandler {
          private val scope: CoroutineScope
          private var job: Job? = null

          init {
              var context = parentCoroutineContext + this
              @OptIn(ComposeToolingApi::class)
              if (ComposeToolingFlags.isVerboseTracingEnabled) {
                  context += LaunchedEffectTracingContext
              }
              scope = CoroutineScope(context)
          }

          override fun onRemembered() {
              // This should never happen but is left here for safety
              job?.cancel("Old job was still running!")
              job = scope.launch(block = task)
          }

          override fun onForgotten() {
              job?.cancel(ExitedCompositionCancellationException())
              job = null
          }

          override fun onAbandoned() {
              job?.cancel(ExitedCompositionCancellationException())
              job = null
          }

          // CoroutineExceptionHandler implementation to save on allocations
          override val key: CoroutineContext.Key<*>
  - id: live-androidx-runtime-runtime-runtime-effects-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 526
    endLine: 560
    sha256: e06ab0606f2d86eadd21a2f92768d6f8b30e65896994d7384e22bb665e7c1576
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              get() = CoroutineExceptionHandler.Key

          override fun handleException(context: CoroutineContext, exception: Throwable) {
              context[CompositionErrorContextImpl]?.apply {
                  exception.attachComposeStackTrace(this@LaunchedEffectImpl)
              }
              parentCoroutineContext[CoroutineExceptionHandler]?.handleException(context, exception)
                  ?: throw exception
          }
      }

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] when the [LaunchedEffect]
       * leaves the composition.
       *
       * It is an error to call [LaunchedEffect] without at least one `key` parameter.
       */
      // This deprecated-error function shadows the varargs overload so that the varargs version
      // is not used without key parameters.
      @Deprecated(LaunchedEffectNoParamError, level = DeprecationLevel.ERROR)
      @Suppress("DeprecatedCallableAddReplaceWith", "UNUSED_PARAMETER")
      @Composable
      public fun LaunchedEffect(block: suspend CoroutineScope.() -> Unit): Unit =
          error(LaunchedEffectNoParamError)

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1]. The coroutine will be
       * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key1]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
  - id: live-androidx-runtime-runtime-runtime-effects-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 561
    endLine: 595
    sha256: 649369954764896d112f00334587df582918ed5c9bfcec634d8cdce25fb31919
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(key1: Any?, block: suspend CoroutineScope.() -> Unit) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1) { LaunchedEffectImpl(applyContext, block) }
      }

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1] or [key2]. The coroutine will be
       * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(key1: Any?, key2: Any?, block: suspend CoroutineScope.() -> Unit) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1, key2) { LaunchedEffectImpl(applyContext, block) }
      }

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1], [key2] or [key3]. The coroutine will be
       * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
  - id: live-androidx-runtime-runtime-runtime-effects-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 596
    endLine: 630
    sha256: ce3c044e76a61526835a83825ef61bb22257bff2a45abedffb476a6c8345086b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(
          key1: Any?,
          key2: Any?,
          key3: Any?,
          block: suspend CoroutineScope.() -> Unit,
      ) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1, key2, key3) { LaunchedEffectImpl(applyContext, block) }
      }

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with a different [key1], [key2], [key3] or [key4]. The coroutine
       * will be [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(
          key1: Any?,
          key2: Any?,
  - id: live-androidx-runtime-runtime-runtime-effects-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 631
    endLine: 665
    sha256: 12d2b2c246fe7b2461526d86de496d00cf4533a3cd47106985310cbeb500616a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          key3: Any?,
          key4: Any?,
          block: suspend CoroutineScope.() -> Unit,
      ) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(key1, key2, key3, key4) { LaunchedEffectImpl(applyContext, block) }
      }

      /**
       * A subclass of [kotlinx.coroutines.CancellationException] that will be thrown to cancel
       * composition-bound coroutines. Specifically, this exception is thrown to cancel coroutines
       * launched by [LaunchedEffect] and [Job]s associated with CoroutineScopes created by
       * [rememberCoroutineScope].
       *
       * This exception is thrown when the effect/job is canceled because the effect or coroutineScope was
       * removed from the composition, possibly because of changed keys.
       */
      private class ExitedCompositionCancellationException :
          PlatformOptimizedCancellationException(
              "The coroutine was canceled because it left the composition"
          )

      /**
       * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
       * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
       * [LaunchedEffect] is recomposed with any different [keys]. The coroutine will be
       * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
       *
       * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
       * by way of storing callback data in [MutableState] passed to [key]. Instead, see
       * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
       * scoped to the composition in response to event callbacks.
       */
      @Composable
      @NonRestartableComposable
  - id: live-androidx-runtime-runtime-runtime-effects-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 666
    endLine: 700
    sha256: 050c9436281ac5f3d312dc2aabaaf83337df6fe359f28ce95bdd31f1e7b711bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Suppress("ArrayReturn")
      @OptIn(InternalComposeApi::class)
      public fun LaunchedEffect(vararg keys: Any?, block: suspend CoroutineScope.() -> Unit) {
          val applyContext = currentComposer.applyCoroutineContext
          remember(*keys) { LaunchedEffectImpl(applyContext, block) }
      }

      // Maintenance note: this class once was used by the inlined implementation of
      // rememberCoroutineScope and must be maintained for binary compatibility. The new implementation
      // of RememberedCoroutineScope implements RememberObserver directly, since as of this writing the
      // compose runtime no longer implicitly treats objects incidentally stored in the slot table (e.g.
      // previous parameter values from a skippable invocation, remember keys, etc.) as eligible
      // RememberObservers. This dramatically reduces the risk of receiving unexpected RememberObserver
      // lifecycle callbacks when a reference to a RememberObserver is leaked into user code and we can
      // omit wrapper RememberObservers such as this one.
      @PublishedApi
      internal class CompositionScopedCoroutineScopeCanceller(val coroutineScope: CoroutineScope) :
          RememberObserver {
          override fun onRemembered() {
              // Nothing to do
          }

          override fun onForgotten() {
              val coroutineScope = coroutineScope
              if (coroutineScope is RememberedCoroutineScope) {
                  coroutineScope.cancelIfCreated()
              } else {
                  coroutineScope.cancel(ExitedCompositionCancellationException())
              }
          }

          override fun onAbandoned() {
              val coroutineScope = coroutineScope
              if (coroutineScope is RememberedCoroutineScope) {
                  coroutineScope.cancelIfCreated()
  - id: live-androidx-runtime-runtime-runtime-effects-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 701
    endLine: 735
    sha256: a4897dd4f8a3eea4a70342b2a8d87041322f5018a295a23e1d68275fd875e8c4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  coroutineScope.cancel(ExitedCompositionCancellationException())
              }
          }
      }

      private class CancelledCoroutineContext : CoroutineContext.Element {
          override val key: CoroutineContext.Key<*>
              get() = Key

          companion object Key : CoroutineContext.Key<CancelledCoroutineContext>
      }

      internal class RememberedCoroutineScope(
          private val parentContext: CoroutineContext,
          private val overlayContext: CoroutineContext,
      ) : CoroutineScope, RememberObserver {
          private val lock = makeSynchronizedObject(this)

          // The goal of this implementation is to make cancellation as cheap as possible if the
          // coroutineContext property was never accessed, consisting only of taking a monitor lock and
          // setting a volatile field.

          @Volatile private var _coroutineContext: CoroutineContext? = null

          override val coroutineContext: CoroutineContext
              get() {
                  var localCoroutineContext = _coroutineContext
                  if (
                      localCoroutineContext == null || localCoroutineContext === CancelledCoroutineContext
                  ) {
                      val traceContext = parentContext[CompositionErrorContextImpl]
                      val exceptionHandler =
                          if (traceContext != null) {
                              // If trace context is present, override exception handler, so all child
  - id: live-androidx-runtime-runtime-runtime-effects-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 71
    endLine: 105
    sha256: 16f7bd37bba657081c4845dd62629fc485b6c147560740efd47f12e925732ad1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * When using the overload of this function that doesn't accept keys, the [effect] will execute on
       * every recomposition. This overload is preferred when you have one-shot work that doesn't require
       * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
       * order that they appear in the composition hierarchy (following an in-order traversal).
       *
       * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
       *   scheduled.
       * @param effect The effect that will execute when this composition completes successfully and is
       *   applying changes.
       */
      @Composable
      @NonRestartableComposable
      public fun SideEffect(key1: Any?, effect: () -> Unit) {
          if (currentComposer.changed(key1)) {
              currentComposer.recordSideEffectWithTracing(effect)
          }
      }

      /**
       * Schedule [effect] to run as a side effect for any new unique value of [key1] or [key2].
       *
       * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
       * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
       * previously provided value.
       *
       * When using the overload of this function that doesn't accept keys, the [effect] will execute on
       * every recomposition. This overload is preferred when you have one-shot work that doesn't require
       * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
       *
       * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
       * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
       * order that they appear in the composition hierarchy (following an in-order traversal).
  - id: live-androidx-runtime-runtime-runtime-effects-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 736
    endLine: 769
    sha256: ba626098496e532453d7d877cbdf7b32bb35d890e6bd86e1e56f3d0c1fc6e1ed
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              // jobs would have the composable trace appended.
                              // On exception, call overlay -> parent and throw if neither are present.
                              CoroutineExceptionHandler { c, e ->
                                  traceContext.apply {
                                      e.attachComposeStackTrace(this@RememberedCoroutineScope)
                                  }
                                  overlayContext[CoroutineExceptionHandler]?.handleException(c, e)
                                      ?: parentContext[CoroutineExceptionHandler]?.handleException(c, e)
                                      ?: throw e
                              }
                          } else {
                              EmptyCoroutineContext
                          }

                      // Yes, we're leaking our lock here by using the instance of the object
                      // that also gets handled by user code as a CoroutineScope as an intentional
                      // tradeoff for avoiding the allocation of a dedicated lock object.
                      // Since we only use it here for this lazy initialization and control flow
                      // does not escape the creation of the CoroutineContext while holding the lock,
                      // the splash damage should be acceptable.
                      synchronized(lock) {
                          localCoroutineContext = _coroutineContext
                          if (localCoroutineContext == null) {
                              val parentContext = parentContext
                              val childJob = Job(parentContext[Job])
                              localCoroutineContext =
                                  parentContext + childJob + overlayContext + exceptionHandler
                          } else if (localCoroutineContext === CancelledCoroutineContext) {
                              // Lazily initialize the child job here, already cancelled.
                              // Assemble the CoroutineContext exactly as otherwise expected.
                              val parentContext = parentContext
                              val cancelledChildJob =
                                  Job(parentContext[Job]).apply {
                                      cancel(ExitedCompositionCancellationException())
  - id: live-androidx-runtime-runtime-runtime-effects-lines-770-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 770
    endLine: 804
    sha256: 7c743509a19ec733b3cc91f456f011c8051636dbd1c31a22eb9aa598ed26d29f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  }
                              localCoroutineContext =
                                  parentContext + cancelledChildJob + overlayContext + exceptionHandler

                              @OptIn(ComposeToolingApi::class)
                              if (ComposeToolingFlags.isVerboseTracingEnabled) {
                                  localCoroutineContext += RememberedCoroutineScopeTracingContext
                              }
                          }
                          _coroutineContext = localCoroutineContext
                      }
                  }
                  return localCoroutineContext!!
              }

          fun cancelIfCreated() {
              // Take the lock unconditionally; this is internal API only used by internal
              // RememberObserver implementations that are not leaked to user code; we can assume
              // this won't be called repeatedly. If this assumption is violated we'll simply create a
              // redundant exception.
              synchronized(lock) {
                  val context = _coroutineContext
                  if (context == null) {
                      _coroutineContext = CancelledCoroutineContext
                  } else {
                      // Ignore optimizing the case where we might be cancelling an already cancelled job;
                      // only internal callers such as RememberObservers will invoke this method.
                      context.cancel(ExitedCompositionCancellationException())
                  }
              }
          }

          override fun onRemembered() {
              // Do nothing
          }
  - id: live-androidx-runtime-runtime-runtime-effects-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 805
    endLine: 839
    sha256: ca8ed4d119a746702da9693a8560b8c8e854880a9ff0a92c215ffb3c91b7581c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun onForgotten() {
              cancelIfCreated()
          }

          override fun onAbandoned() {
              cancelIfCreated()
          }

          companion object {
              @JvmField val CancelledCoroutineContext: CoroutineContext = CancelledCoroutineContext()
          }
      }

      @PublishedApi
      @OptIn(InternalComposeApi::class)
      internal fun createCompositionCoroutineScope(
          coroutineContext: CoroutineContext,
          composer: Composer,
      ): CoroutineScope =
          if (coroutineContext[Job] != null) {
              CoroutineScope(
                  Job().apply {
                      completeExceptionally(
                          IllegalArgumentException(
                              "CoroutineContext supplied to " +
                                  "rememberCoroutineScope may not include a parent job"
                          )
                      )
                  }
              )
          } else {
              val applyContext = composer.applyCoroutineContext
              RememberedCoroutineScope(applyContext, coroutineContext)
          }
  - id: live-androidx-runtime-runtime-runtime-effects-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 840
    endLine: 874
    sha256: 507f586bb2a4d630d5ba3d67df38d591b656686fa5b509e894838ac6bf11e934
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Return a [CoroutineScope] bound to this point in the composition using the optional
       * [CoroutineContext] provided by [getContext]. [getContext] will only be called once and the same
       * [CoroutineScope] instance will be returned across recompositions.
       *
       * This scope will be [cancelled][CoroutineScope.cancel] when this call leaves the composition. The
       * [CoroutineContext] returned by [getContext] may not contain a [Job] as this scope is considered
       * to be a child of the composition.
       *
       * The default dispatcher of this scope if one is not provided by the context returned by
       * [getContext] will be the applying dispatcher of the composition's [Recomposer].
       *
       * Use this scope to launch jobs in response to callback events such as clicks or other user
       * interaction where the response to that event needs to unfold over time and be cancelled if the
       * composable managing that process leaves the composition. Jobs should never be launched into
       * **any** coroutine scope as a side effect of composition itself. For scoped ongoing jobs initiated
       * by composition, see [LaunchedEffect].
       *
       * This function will not throw if preconditions are not met, as composable functions do not yet
       * fully support exceptions. Instead the returned scope's [CoroutineScope.coroutineContext] will
       * contain a failed [Job] with the associated exception and will not be capable of launching child
       * jobs.
       */
      @Composable
      public inline fun rememberCoroutineScope(
          crossinline getContext: @DisallowComposableCalls () -> CoroutineContext = {
              EmptyCoroutineContext
          }
      ): CoroutineScope {
          val composer = currentComposer
          return remember { createCompositionCoroutineScope(getContext(), composer) }
      }

      private object LaunchedEffectTracingContext : TracingContext("Compose:LaunchedEffect")
  - id: live-androidx-runtime-runtime-runtime-effects-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt
    startLine: 875
    endLine: 883
    sha256: 7f58de2a8bc91f71c4328fc5534ca84c302d236903bc64efd4f6a5a332dc50b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      private object RememberedCoroutineScopeTracingContext : TracingContext("Compose:coroutineScope")

      internal expect abstract class TracingContext(name: String) : CoroutineContext.Element {
          override val key: CoroutineContext.Key<*>

          companion object Key : CoroutineContext.Key<TracingContext>
      }
compose:
  id: live-androidx-runtime-runtime-runtime-effects
  artifact: androidx.compose.runtime:runtime
  fqn: androidx.compose.runtime
  sections:
    - id: live-androidx-runtime-runtime-runtime-effects-lines-1
      title: androidx.compose.runtime Effects.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-1-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-106
      title: androidx.compose.runtime Effects.kt source (lines 106–140)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-106-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-141
      title: androidx.compose.runtime Effects.kt source (lines 141–175)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-141-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-176
      title: androidx.compose.runtime Effects.kt source (lines 176–210)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-176-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-211
      title: androidx.compose.runtime Effects.kt source (lines 211–245)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-211-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-246
      title: androidx.compose.runtime Effects.kt source (lines 246–280)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-246-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-281
      title: androidx.compose.runtime Effects.kt source (lines 281–315)
      aliases:
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-281-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-316
      title: androidx.compose.runtime Effects.kt source (lines 316–350)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-316-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-351
      title: androidx.compose.runtime Effects.kt source (lines 351–385)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-351-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-36
      title: androidx.compose.runtime Effects.kt source (lines 36–70)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-36-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-386
      title: androidx.compose.runtime Effects.kt source (lines 386–420)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-386-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-421
      title: androidx.compose.runtime Effects.kt source (lines 421–455)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-421-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-456
      title: androidx.compose.runtime Effects.kt source (lines 456–490)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffectScope
        - androidx.compose.runtime.DisposableEffectResult
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-456-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-491
      title: androidx.compose.runtime Effects.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-491-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-526
      title: androidx.compose.runtime Effects.kt source (lines 526–560)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-526-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-561
      title: androidx.compose.runtime Effects.kt source (lines 561–595)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-561-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-596
      title: androidx.compose.runtime Effects.kt source (lines 596–630)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-596-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-631
      title: androidx.compose.runtime Effects.kt source (lines 631–665)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-631-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-666
      title: androidx.compose.runtime Effects.kt source (lines 666–700)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-666-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-701
      title: androidx.compose.runtime Effects.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-701-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-71
      title: androidx.compose.runtime Effects.kt source (lines 71–105)
      aliases:
        - androidx.compose.runtime.SideEffect
        - androidx.compose.runtime.DisposableEffect
        - androidx.compose.runtime.LaunchedEffect
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-71-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-736
      title: androidx.compose.runtime Effects.kt source (lines 736–769)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-736-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-770
      title: androidx.compose.runtime Effects.kt source (lines 770–804)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-770-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-805
      title: androidx.compose.runtime Effects.kt source (lines 805–839)
      aliases:
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-805-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-840
      title: androidx.compose.runtime Effects.kt source (lines 840–874)
      aliases:
        - androidx.compose.runtime.LaunchedEffect
        - androidx.compose.runtime.rememberCoroutineScope
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-840-source
      relatedIds: []
    - id: live-androidx-runtime-runtime-runtime-effects-lines-875
      title: androidx.compose.runtime Effects.kt source (lines 875–883)
      aliases: []
      requires:
        - artifact: androidx.compose.runtime:runtime
          version: null
      sourceIds:
        - live-androidx-runtime-runtime-runtime-effects-lines-875-source
      relatedIds: []
---

# androidx.compose.runtime Effects.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt

## androidx.compose.runtime Effects.kt source (lines 1–35)

/*
 * Copyright 2020 The Android Open Source Project
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

package androidx.compose.runtime

import androidx.compose.runtime.internal.PlatformOptimizedCancellationException
import androidx.compose.runtime.internal.trace
import androidx.compose.runtime.platform.makeSynchronizedObject
import androidx.compose.runtime.platform.synchronized
import androidx.compose.runtime.tooling.ComposeToolingApi
import androidx.compose.runtime.tooling.ComposeToolingFlags
import androidx.compose.runtime.tooling.CompositionErrorContextImpl
import androidx.compose.runtime.tooling.verboseTrace
import kotlin.concurrent.Volatile
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmField
import kotlinx.coroutines.CoroutineExceptionHandler
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.cancel
import kotlinx.coroutines.launch

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 106–140)

 *
 * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
 *   scheduled.
 * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.
 * @param effect The effect that will execute when this composition completes successfully and is
 *   applying changes.
 */
@Composable
@NonRestartableComposable
public fun SideEffect(key1: Any?, key2: Any?, effect: () -> Unit) {
    if (currentComposer.changed(key1) or currentComposer.changed(key2)) {
        currentComposer.recordSideEffectWithTracing(effect)
    }
}

/**
 * Schedule [effect] to run as a side effect for any new unique value of [key1], [key2], or [key3].
 *
 * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
 * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
 * previously provided value.
 *
 * When using the overload of this function that doesn't accept keys, the [effect] will execute on
 * every recomposition. This overload is preferred when you have one-shot work that doesn't require
 * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
 * order that they appear in the composition hierarchy (following an in-order traversal).
 *
 * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
 *   scheduled.
 * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 141–175)

 * @param key3 A third key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.
 * @param effect The effect that will execute when this composition completes successfully and is
 *   applying changes.
 */
@Composable
@NonRestartableComposable
public fun SideEffect(key1: Any?, key2: Any?, key3: Any?, effect: () -> Unit) {
    if (
        currentComposer.changed(key1) or
            currentComposer.changed(key2) or
            currentComposer.changed(key3)
    ) {
        currentComposer.recordSideEffectWithTracing(effect)
    }
}

/**
 * Schedule [effect] to run as a side effect for any new unique value of [key1], [key2], [key3] or
 * [key4].
 *
 * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
 * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
 * previously provided value.
 *
 * When using the overload of this function that doesn't accept keys, the [effect] will execute on
 * every recomposition. This overload is preferred when you have one-shot work that doesn't require
 * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
 * order that they appear in the composition hierarchy (following an in-order traversal).
 *
 * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
 *   scheduled.

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 176–210)

 * @param key2 A second key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.
 * @param key3 A third key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.
 * @param key4 A fourth key input; if recomposed with a new value from the previous key, [effect]
 *   will be scheduled.
 * @param effect The effect that will execute when this composition completes successfully and is
 *   applying changes.
 */
@Composable
@NonRestartableComposable
public fun SideEffect(key1: Any?, key2: Any?, key3: Any?, key4: Any?, effect: () -> Unit) {
    if (
        currentComposer.changed(key1) or
            currentComposer.changed(key2) or
            currentComposer.changed(key3) or
            currentComposer.changed(key4)
    ) {
        currentComposer.recordSideEffectWithTracing(effect)
    }
}

/**
 * Schedule [effect] to run as a side effect for any new unique [keys].
 *
 * A [SideEffect]'s [keys] are values that defines the identity of the [SideEffect]. When a
 * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
 * previously provided value.
 *
 * When using the overload of this function that doesn't accept keys, the [effect] will execute on
 * every recomposition. This overload is preferred when you have one-shot work that doesn't require
 * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 211–245)

 * order that they appear in the composition hierarchy (following an in-order traversal).
 *
 * @param keys Key inputs; if recomposed with a different list of keys, [effect] will be scheduled.
 * @param effect The effect that will execute when this composition completes successfully and is
 *   applying changes.
 */
@Composable
@NonRestartableComposable
public fun SideEffect(vararg keys: Any?, effect: () -> Unit) {
    var invalid = currentComposer.changed(keys.size)
    for (key in keys) invalid = invalid or currentComposer.changed(key)
    if (invalid) {
        currentComposer.recordSideEffectWithTracing(effect)
    }
}

/**
 * Receiver scope for [DisposableEffect] that offers the [onDispose] clause that should be the last
 * statement in any call to [DisposableEffect].
 */
public class DisposableEffectScope {
    /**
     * Provide [onDisposeEffect] to the [DisposableEffect] to run when it leaves the composition or
     * its key changes.
     */
    public inline fun onDispose(crossinline onDisposeEffect: () -> Unit): DisposableEffectResult =
        object : DisposableEffectResult {
            override fun dispose() {
                onDisposeEffect()
            }
        }
}

public interface DisposableEffectResult {
    public fun dispose()

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 246–280)

}

private val InternalDisposableEffectScope = DisposableEffectScope()

@OptIn(ComposeToolingApi::class, InternalComposeApi::class)
private fun Composer.recordSideEffectWithTracing(effect: () -> Unit) {
    if (ComposeToolingFlags.isVerboseTracingEnabled) {
        recordSideEffect { trace("Compose:SideEffect:effect", effect) }
    } else {
        recordSideEffect(effect)
    }
}

private class DisposableEffectImpl(
    private val effect: DisposableEffectScope.() -> DisposableEffectResult
) : RememberObserver {
    private var onDispose: DisposableEffectResult? = null

    override fun onRemembered() {
        verboseTrace("Compose:DisposableEffect:effect") {
            onDispose = InternalDisposableEffectScope.effect()
        }
    }

    override fun onForgotten() {
        verboseTrace("Compose:DisposableEffect:dispose") {
            onDispose?.dispose()
            onDispose = null
        }
    }

    override fun onAbandoned() {
        // Nothing to do as [onRemembered] was not called.
    }
}

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 281–315)


private const val DisposableEffectNoParamError =
    "DisposableEffect must provide one or more 'key' parameters that define the identity of " +
        "the DisposableEffect and determine when its previous effect should be disposed and " +
        "a new effect started for the new key."

private const val LaunchedEffectNoParamError =
    "LaunchedEffect must provide one or more 'key' parameters that define the identity of " +
        "the LaunchedEffect and determine when its previous effect coroutine should be cancelled " +
        "and a new effect launched for the new key."

/**
 * A side effect of composition that must be reversed or cleaned up if the [DisposableEffect] leaves
 * the composition.
 *
 * It is an error to call [DisposableEffect] without at least one `key` parameter.
 */
// This deprecated-error function shadows the varargs overload so that the varargs version
// is not used without key parameters.
@Composable
@NonRestartableComposable
@Suppress("DeprecatedCallableAddReplaceWith", "UNUSED_PARAMETER")
@Deprecated(DisposableEffectNoParamError, level = DeprecationLevel.ERROR)
public fun DisposableEffect(effect: DisposableEffectScope.() -> DisposableEffectResult): Unit =
    error(DisposableEffectNoParamError)

/**
 * A side effect of composition that must run for any new unique value of [key1] and must be
 * reversed or cleaned up if [key1] changes or if the [DisposableEffect] leaves the composition.
 *
 * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
 * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
 * [effect] and reset by calling [effect] again. Examples of keys include:
 * * Observable objects that the effect subscribes to
 * * Unique request parameters to an operation that must cancel and retry if those parameters change

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 316–350)

 *
 * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
 * different key is provided, performing cleanup for the old operation before initializing the new.
 * For example:
 *
 * @sample androidx.compose.runtime.samples.disposableEffectSample
 *
 * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
 * the final statement in its [effect] block. If your operation does not require disposal it might
 * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
 * managed by the composition.
 *
 * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
 * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
 * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
 * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
 */
@Composable
@NonRestartableComposable
public fun DisposableEffect(
    key1: Any?,
    effect: DisposableEffectScope.() -> DisposableEffectResult,
) {
    remember(key1) { DisposableEffectImpl(effect) }
}

/**
 * A side effect of composition that must run for any new unique value of [key1] or [key2] and must
 * be reversed or cleaned up if [key1] or [key2] changes, or if the [DisposableEffect] leaves the
 * composition.
 *
 * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
 * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
 * [effect] and reset by calling [effect] again. Examples of keys include:
 * * Observable objects that the effect subscribes to

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 351–385)

 * * Unique request parameters to an operation that must cancel and retry if those parameters change
 *
 * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
 * different key is provided, performing cleanup for the old operation before initializing the new.
 * For example:
 *
 * @sample androidx.compose.runtime.samples.disposableEffectSample
 *
 * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
 * the final statement in its [effect] block. If your operation does not require disposal it might
 * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
 * managed by the composition.
 *
 * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
 * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
 * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
 * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
 */
@Composable
@NonRestartableComposable
public fun DisposableEffect(
    key1: Any?,
    key2: Any?,
    effect: DisposableEffectScope.() -> DisposableEffectResult,
) {
    remember(key1, key2) { DisposableEffectImpl(effect) }
}

/**
 * A side effect of composition that must run for any new unique value of [key1], [key2] or [key3]
 * and must be reversed or cleaned up if [key1], [key2] or [key3] changes, or if the
 * [DisposableEffect] leaves the composition.
 *
 * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
 * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 36–70)


/**
 * Schedule [effect] to run when the current composition completes successfully and applies changes.
 * [SideEffect] can be used to apply side effects to objects managed by the composition that are not
 * backed by [snapshots][androidx.compose.runtime.snapshots.Snapshot] so as not to leave those
 * objects in an inconsistent state if the current composition operation fails.
 *
 * [effect] will always be run on the composition's apply dispatcher and appliers are never run
 * concurrent with themselves, one another, applying changes to the composition tree, or running
 * [RememberObserver] event callbacks. [SideEffect]s are always run after [RememberObserver] event
 * callbacks.
 *
 * A [SideEffect] runs after **every** recomposition when invoked without any keys. To only perform
 * the effect once, use an overload of [SideEffect] that accepts a key. To launch an ongoing task
 * spanning potentially many recompositions, see [LaunchedEffect]. To manage an event subscription
 * or other object lifecycle, see [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
 * order that they appear in the composition hierarchy (following an in-order traversal).
 */
@Composable
@NonRestartableComposable
@ExplicitGroupsComposable
public fun SideEffect(effect: () -> Unit) {
    currentComposer.recordSideEffectWithTracing(effect)
}

/**
 * Schedule [effect] to run as a side effect for any new unique value of [key1].
 *
 * A [SideEffect]'s _key_ is a value that defines the identity of the [SideEffect]. When a
 * [SideEffect] recomposes, its [effect] will only execute if its [key][key1] differs from the
 * previously provided value.
 *

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 386–420)

 * [effect] and reset by calling [effect] again. Examples of keys include:
 * * Observable objects that the effect subscribes to
 * * Unique request parameters to an operation that must cancel and retry if those parameters change
 *
 * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
 * different key is provided, performing cleanup for the old operation before initializing the new.
 * For example:
 *
 * @sample androidx.compose.runtime.samples.disposableEffectSample
 *
 * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
 * the final statement in its [effect] block. If your operation does not require disposal it might
 * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
 * managed by the composition.
 *
 * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
 * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
 * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
 * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
 */
@Composable
@NonRestartableComposable
public fun DisposableEffect(
    key1: Any?,
    key2: Any?,
    key3: Any?,
    effect: DisposableEffectScope.() -> DisposableEffectResult,
) {
    remember(key1, key2, key3) { DisposableEffectImpl(effect) }
}

/**
 * A side effect of composition that must run for any new unique value of [key1], [key2], [key3] or
 * [key4] and must be reversed or cleaned up if [key1], [key2], [key3] or [key4] changes, or if the
 * [DisposableEffect] leaves the composition.

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 421–455)

 *
 * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
 * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
 * [effect] and reset by calling [effect] again. Examples of keys include:
 * * Observable objects that the effect subscribes to
 * * Unique request parameters to an operation that must cancel and retry if those parameters change
 *
 * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
 * different key is provided, performing cleanup for the old operation before initializing the new.
 * For example:
 *
 * @sample androidx.compose.runtime.samples.disposableEffectSample
 *
 * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
 * the final statement in its [effect] block. If your operation does not require disposal it might
 * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
 * managed by the composition.
 *
 * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
 * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
 * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
 * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
 */
@Composable
@NonRestartableComposable
public fun DisposableEffect(
    key1: Any?,
    key2: Any?,
    key3: Any?,
    key4: Any?,
    effect: DisposableEffectScope.() -> DisposableEffectResult,
) {
    remember(key1, key2, key3, key4) { DisposableEffectImpl(effect) }
}


Sources: [live-androidx-runtime-runtime-runtime-effects-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 456–490)

/**
 * A side effect of composition that must run for any new unique value of [keys] and must be
 * reversed or cleaned up if any [keys] change or if the [DisposableEffect] leaves the composition.
 *
 * A [DisposableEffect]'s _key_ is a value that defines the identity of the [DisposableEffect]. If a
 * key changes, the [DisposableEffect] must [dispose][DisposableEffectScope.onDispose] its current
 * [effect] and reset by calling [effect] again. Examples of keys include:
 * * Observable objects that the effect subscribes to
 * * Unique request parameters to an operation that must cancel and retry if those parameters change
 *
 * [DisposableEffect] may be used to initialize or subscribe to a key and reinitialize when a
 * different key is provided, performing cleanup for the old operation before initializing the new.
 * For example:
 *
 * @sample androidx.compose.runtime.samples.disposableEffectSample
 *
 * A [DisposableEffect] **must** include an [onDispose][DisposableEffectScope.onDispose] clause as
 * the final statement in its [effect] block. If your operation does not require disposal it might
 * be a [SideEffect] instead, or a [LaunchedEffect] if it launches a coroutine that should be
 * managed by the composition.
 *
 * There is guaranteed to be one call to [dispose][DisposableEffectScope.onDispose] for every call
 * to [effect]. Both [effect] and [dispose][DisposableEffectScope.onDispose] will always be run on
 * the composition's apply dispatcher and appliers are never run concurrent with themselves, one
 * another, applying changes to the composition tree, or running [RememberObserver] event callbacks.
 */
@Composable
@NonRestartableComposable
@Suppress("ArrayReturn")
public fun DisposableEffect(
    vararg keys: Any?,
    effect: DisposableEffectScope.() -> DisposableEffectResult,
) {
    remember(*keys) { DisposableEffectImpl(effect) }
}

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 491–525)


internal class LaunchedEffectImpl(
    private val parentCoroutineContext: CoroutineContext,
    private val task: suspend CoroutineScope.() -> Unit,
) : RememberObserver, CoroutineExceptionHandler {
    private val scope: CoroutineScope
    private var job: Job? = null

    init {
        var context = parentCoroutineContext + this
        @OptIn(ComposeToolingApi::class)
        if (ComposeToolingFlags.isVerboseTracingEnabled) {
            context += LaunchedEffectTracingContext
        }
        scope = CoroutineScope(context)
    }

    override fun onRemembered() {
        // This should never happen but is left here for safety
        job?.cancel("Old job was still running!")
        job = scope.launch(block = task)
    }

    override fun onForgotten() {
        job?.cancel(ExitedCompositionCancellationException())
        job = null
    }

    override fun onAbandoned() {
        job?.cancel(ExitedCompositionCancellationException())
        job = null
    }

    // CoroutineExceptionHandler implementation to save on allocations
    override val key: CoroutineContext.Key<*>

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 526–560)

        get() = CoroutineExceptionHandler.Key

    override fun handleException(context: CoroutineContext, exception: Throwable) {
        context[CompositionErrorContextImpl]?.apply {
            exception.attachComposeStackTrace(this@LaunchedEffectImpl)
        }
        parentCoroutineContext[CoroutineExceptionHandler]?.handleException(context, exception)
            ?: throw exception
    }
}

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] when the [LaunchedEffect]
 * leaves the composition.
 *
 * It is an error to call [LaunchedEffect] without at least one `key` parameter.
 */
// This deprecated-error function shadows the varargs overload so that the varargs version
// is not used without key parameters.
@Deprecated(LaunchedEffectNoParamError, level = DeprecationLevel.ERROR)
@Suppress("DeprecatedCallableAddReplaceWith", "UNUSED_PARAMETER")
@Composable
public fun LaunchedEffect(block: suspend CoroutineScope.() -> Unit): Unit =
    error(LaunchedEffectNoParamError)

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
 * [LaunchedEffect] is recomposed with a different [key1]. The coroutine will be
 * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
 *
 * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
 * by way of storing callback data in [MutableState] passed to [key1]. Instead, see
 * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 561–595)

 * scoped to the composition in response to event callbacks.
 */
@Composable
@NonRestartableComposable
@OptIn(InternalComposeApi::class)
public fun LaunchedEffect(key1: Any?, block: suspend CoroutineScope.() -> Unit) {
    val applyContext = currentComposer.applyCoroutineContext
    remember(key1) { LaunchedEffectImpl(applyContext, block) }
}

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
 * [LaunchedEffect] is recomposed with a different [key1] or [key2]. The coroutine will be
 * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
 *
 * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
 * by way of storing callback data in [MutableState] passed to [key]. Instead, see
 * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
 * scoped to the composition in response to event callbacks.
 */
@Composable
@NonRestartableComposable
@OptIn(InternalComposeApi::class)
public fun LaunchedEffect(key1: Any?, key2: Any?, block: suspend CoroutineScope.() -> Unit) {
    val applyContext = currentComposer.applyCoroutineContext
    remember(key1, key2) { LaunchedEffectImpl(applyContext, block) }
}

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
 * [LaunchedEffect] is recomposed with a different [key1], [key2] or [key3]. The coroutine will be
 * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
 *

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 596–630)

 * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
 * by way of storing callback data in [MutableState] passed to [key]. Instead, see
 * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
 * scoped to the composition in response to event callbacks.
 */
@Composable
@NonRestartableComposable
@OptIn(InternalComposeApi::class)
public fun LaunchedEffect(
    key1: Any?,
    key2: Any?,
    key3: Any?,
    block: suspend CoroutineScope.() -> Unit,
) {
    val applyContext = currentComposer.applyCoroutineContext
    remember(key1, key2, key3) { LaunchedEffectImpl(applyContext, block) }
}

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
 * [LaunchedEffect] is recomposed with a different [key1], [key2], [key3] or [key4]. The coroutine
 * will be [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
 *
 * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
 * by way of storing callback data in [MutableState] passed to [key]. Instead, see
 * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
 * scoped to the composition in response to event callbacks.
 */
@Composable
@NonRestartableComposable
@OptIn(InternalComposeApi::class)
public fun LaunchedEffect(
    key1: Any?,
    key2: Any?,

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 631–665)

    key3: Any?,
    key4: Any?,
    block: suspend CoroutineScope.() -> Unit,
) {
    val applyContext = currentComposer.applyCoroutineContext
    remember(key1, key2, key3, key4) { LaunchedEffectImpl(applyContext, block) }
}

/**
 * A subclass of [kotlinx.coroutines.CancellationException] that will be thrown to cancel
 * composition-bound coroutines. Specifically, this exception is thrown to cancel coroutines
 * launched by [LaunchedEffect] and [Job]s associated with CoroutineScopes created by
 * [rememberCoroutineScope].
 *
 * This exception is thrown when the effect/job is canceled because the effect or coroutineScope was
 * removed from the composition, possibly because of changed keys.
 */
private class ExitedCompositionCancellationException :
    PlatformOptimizedCancellationException(
        "The coroutine was canceled because it left the composition"
    )

/**
 * When [LaunchedEffect] enters the composition it will launch [block] into the composition's
 * [CoroutineContext]. The coroutine will be [cancelled][Job.cancel] and **re-launched** when
 * [LaunchedEffect] is recomposed with any different [keys]. The coroutine will be
 * [cancelled][Job.cancel] when the [LaunchedEffect] leaves the composition.
 *
 * This function should **not** be used to (re-)launch ongoing tasks in response to callback events
 * by way of storing callback data in [MutableState] passed to [key]. Instead, see
 * [rememberCoroutineScope] to obtain a [CoroutineScope] that may be used to launch ongoing jobs
 * scoped to the composition in response to event callbacks.
 */
@Composable
@NonRestartableComposable

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 666–700)

@Suppress("ArrayReturn")
@OptIn(InternalComposeApi::class)
public fun LaunchedEffect(vararg keys: Any?, block: suspend CoroutineScope.() -> Unit) {
    val applyContext = currentComposer.applyCoroutineContext
    remember(*keys) { LaunchedEffectImpl(applyContext, block) }
}

// Maintenance note: this class once was used by the inlined implementation of
// rememberCoroutineScope and must be maintained for binary compatibility. The new implementation
// of RememberedCoroutineScope implements RememberObserver directly, since as of this writing the
// compose runtime no longer implicitly treats objects incidentally stored in the slot table (e.g.
// previous parameter values from a skippable invocation, remember keys, etc.) as eligible
// RememberObservers. This dramatically reduces the risk of receiving unexpected RememberObserver
// lifecycle callbacks when a reference to a RememberObserver is leaked into user code and we can
// omit wrapper RememberObservers such as this one.
@PublishedApi
internal class CompositionScopedCoroutineScopeCanceller(val coroutineScope: CoroutineScope) :
    RememberObserver {
    override fun onRemembered() {
        // Nothing to do
    }

    override fun onForgotten() {
        val coroutineScope = coroutineScope
        if (coroutineScope is RememberedCoroutineScope) {
            coroutineScope.cancelIfCreated()
        } else {
            coroutineScope.cancel(ExitedCompositionCancellationException())
        }
    }

    override fun onAbandoned() {
        val coroutineScope = coroutineScope
        if (coroutineScope is RememberedCoroutineScope) {
            coroutineScope.cancelIfCreated()

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 701–735)

        } else {
            coroutineScope.cancel(ExitedCompositionCancellationException())
        }
    }
}

private class CancelledCoroutineContext : CoroutineContext.Element {
    override val key: CoroutineContext.Key<*>
        get() = Key

    companion object Key : CoroutineContext.Key<CancelledCoroutineContext>
}

internal class RememberedCoroutineScope(
    private val parentContext: CoroutineContext,
    private val overlayContext: CoroutineContext,
) : CoroutineScope, RememberObserver {
    private val lock = makeSynchronizedObject(this)

    // The goal of this implementation is to make cancellation as cheap as possible if the
    // coroutineContext property was never accessed, consisting only of taking a monitor lock and
    // setting a volatile field.

    @Volatile private var _coroutineContext: CoroutineContext? = null

    override val coroutineContext: CoroutineContext
        get() {
            var localCoroutineContext = _coroutineContext
            if (
                localCoroutineContext == null || localCoroutineContext === CancelledCoroutineContext
            ) {
                val traceContext = parentContext[CompositionErrorContextImpl]
                val exceptionHandler =
                    if (traceContext != null) {
                        // If trace context is present, override exception handler, so all child

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 71–105)

 * When using the overload of this function that doesn't accept keys, the [effect] will execute on
 * every recomposition. This overload is preferred when you have one-shot work that doesn't require
 * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
 * order that they appear in the composition hierarchy (following an in-order traversal).
 *
 * @param key1 A key input; if recomposed with a new value from the previous key, [effect] will be
 *   scheduled.
 * @param effect The effect that will execute when this composition completes successfully and is
 *   applying changes.
 */
@Composable
@NonRestartableComposable
public fun SideEffect(key1: Any?, effect: () -> Unit) {
    if (currentComposer.changed(key1)) {
        currentComposer.recordSideEffectWithTracing(effect)
    }
}

/**
 * Schedule [effect] to run as a side effect for any new unique value of [key1] or [key2].
 *
 * A [SideEffect]'s _keys_ are values that defines the identity of the [SideEffect]. When a
 * [SideEffect] recomposes, its [effect] will only execute if any of its keys differ from their
 * previously provided value.
 *
 * When using the overload of this function that doesn't accept keys, the [effect] will execute on
 * every recomposition. This overload is preferred when you have one-shot work that doesn't require
 * the coroutine afforded by [LaunchedEffect], or the disposal afforded by [DisposableEffect].
 *
 * **Note:** For all overloads of [SideEffect], the [effect] is executed _after_ all
 * [DisposableEffect] and [RememberObserver] callbacks are dispatched. Effects are executed in the
 * order that they appear in the composition hierarchy (following an in-order traversal).

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 736–769)

                        // jobs would have the composable trace appended.
                        // On exception, call overlay -> parent and throw if neither are present.
                        CoroutineExceptionHandler { c, e ->
                            traceContext.apply {
                                e.attachComposeStackTrace(this@RememberedCoroutineScope)
                            }
                            overlayContext[CoroutineExceptionHandler]?.handleException(c, e)
                                ?: parentContext[CoroutineExceptionHandler]?.handleException(c, e)
                                ?: throw e
                        }
                    } else {
                        EmptyCoroutineContext
                    }

                // Yes, we're leaking our lock here by using the instance of the object
                // that also gets handled by user code as a CoroutineScope as an intentional
                // tradeoff for avoiding the allocation of a dedicated lock object.
                // Since we only use it here for this lazy initialization and control flow
                // does not escape the creation of the CoroutineContext while holding the lock,
                // the splash damage should be acceptable.
                synchronized(lock) {
                    localCoroutineContext = _coroutineContext
                    if (localCoroutineContext == null) {
                        val parentContext = parentContext
                        val childJob = Job(parentContext[Job])
                        localCoroutineContext =
                            parentContext + childJob + overlayContext + exceptionHandler
                    } else if (localCoroutineContext === CancelledCoroutineContext) {
                        // Lazily initialize the child job here, already cancelled.
                        // Assemble the CoroutineContext exactly as otherwise expected.
                        val parentContext = parentContext
                        val cancelledChildJob =
                            Job(parentContext[Job]).apply {
                                cancel(ExitedCompositionCancellationException())

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 770–804)

                            }
                        localCoroutineContext =
                            parentContext + cancelledChildJob + overlayContext + exceptionHandler

                        @OptIn(ComposeToolingApi::class)
                        if (ComposeToolingFlags.isVerboseTracingEnabled) {
                            localCoroutineContext += RememberedCoroutineScopeTracingContext
                        }
                    }
                    _coroutineContext = localCoroutineContext
                }
            }
            return localCoroutineContext!!
        }

    fun cancelIfCreated() {
        // Take the lock unconditionally; this is internal API only used by internal
        // RememberObserver implementations that are not leaked to user code; we can assume
        // this won't be called repeatedly. If this assumption is violated we'll simply create a
        // redundant exception.
        synchronized(lock) {
            val context = _coroutineContext
            if (context == null) {
                _coroutineContext = CancelledCoroutineContext
            } else {
                // Ignore optimizing the case where we might be cancelling an already cancelled job;
                // only internal callers such as RememberObservers will invoke this method.
                context.cancel(ExitedCompositionCancellationException())
            }
        }
    }

    override fun onRemembered() {
        // Do nothing
    }

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-770-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 805–839)


    override fun onForgotten() {
        cancelIfCreated()
    }

    override fun onAbandoned() {
        cancelIfCreated()
    }

    companion object {
        @JvmField val CancelledCoroutineContext: CoroutineContext = CancelledCoroutineContext()
    }
}

@PublishedApi
@OptIn(InternalComposeApi::class)
internal fun createCompositionCoroutineScope(
    coroutineContext: CoroutineContext,
    composer: Composer,
): CoroutineScope =
    if (coroutineContext[Job] != null) {
        CoroutineScope(
            Job().apply {
                completeExceptionally(
                    IllegalArgumentException(
                        "CoroutineContext supplied to " +
                            "rememberCoroutineScope may not include a parent job"
                    )
                )
            }
        )
    } else {
        val applyContext = composer.applyCoroutineContext
        RememberedCoroutineScope(applyContext, coroutineContext)
    }

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 840–874)


/**
 * Return a [CoroutineScope] bound to this point in the composition using the optional
 * [CoroutineContext] provided by [getContext]. [getContext] will only be called once and the same
 * [CoroutineScope] instance will be returned across recompositions.
 *
 * This scope will be [cancelled][CoroutineScope.cancel] when this call leaves the composition. The
 * [CoroutineContext] returned by [getContext] may not contain a [Job] as this scope is considered
 * to be a child of the composition.
 *
 * The default dispatcher of this scope if one is not provided by the context returned by
 * [getContext] will be the applying dispatcher of the composition's [Recomposer].
 *
 * Use this scope to launch jobs in response to callback events such as clicks or other user
 * interaction where the response to that event needs to unfold over time and be cancelled if the
 * composable managing that process leaves the composition. Jobs should never be launched into
 * **any** coroutine scope as a side effect of composition itself. For scoped ongoing jobs initiated
 * by composition, see [LaunchedEffect].
 *
 * This function will not throw if preconditions are not met, as composable functions do not yet
 * fully support exceptions. Instead the returned scope's [CoroutineScope.coroutineContext] will
 * contain a failed [Job] with the associated exception and will not be capable of launching child
 * jobs.
 */
@Composable
public inline fun rememberCoroutineScope(
    crossinline getContext: @DisallowComposableCalls () -> CoroutineContext = {
        EmptyCoroutineContext
    }
): CoroutineScope {
    val composer = currentComposer
    return remember { createCompositionCoroutineScope(getContext(), composer) }
}

private object LaunchedEffectTracingContext : TracingContext("Compose:LaunchedEffect")

Sources: [live-androidx-runtime-runtime-runtime-effects-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)

## androidx.compose.runtime Effects.kt source (lines 875–883)


private object RememberedCoroutineScopeTracingContext : TracingContext("Compose:coroutineScope")

internal expect abstract class TracingContext(name: String) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<*>

    companion object Key : CoroutineContext.Key<TracingContext>
}


Sources: [live-androidx-runtime-runtime-runtime-effects-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/runtime/runtime/src/commonMain/kotlin/androidx/compose/runtime/Effects.kt)
