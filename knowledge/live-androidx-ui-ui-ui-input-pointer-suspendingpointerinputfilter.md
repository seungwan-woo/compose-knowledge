---
type: reference
title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 1
    endLine: 35
    sha256: 1ff521c2860b6d0cf36552d8d1c0e5e90211481e821ec0aa3c4bb5345fb21280
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

      package androidx.compose.ui.input.pointer

      import androidx.collection.mutableObjectListOf
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.internal.PlatformOptimizedCancellationException
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.PointerInputModifierNode
      import androidx.compose.ui.node.requireLayoutNode
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.ViewConfiguration
      import androidx.compose.ui.platform.makeSynchronizedObject
      import androidx.compose.ui.platform.synchronized
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.util.fastAll
      import androidx.compose.ui.util.fastMapNotNull
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 106
    endLine: 140
    sha256: 92ec6b844e76caa3a84ba0aca821e41ac32f2e000ec155073045a6a65f207685
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              block: suspend AwaitPointerEventScope.() -> T,
          ): T? = block()

          /**
           * Runs [block] and returns its results. An [PointerEventTimeoutCancellationException] is thrown
           * if [timeMillis] has passed before [block] completes.
           */
          public suspend fun <T> withTimeout(
              timeMillis: Long,
              block: suspend AwaitPointerEventScope.() -> T,
          ): T = block()
      }

      /**
       * Receiver scope for [Modifier.pointerInput] that permits
       * [handling pointer input][awaitPointerEventScope].
       */
      // Design note: this interface does _not_ implement CoroutineScope, even though doing so
      // would more easily permit the use of launch {} inside Modifier.pointerInput {} blocks without
      // requiring an additional coroutineScope {} layer of nesting. As it is encouraged to define
      // gesture detectors as suspending extensions with a PointerInputScope receiver, also making this
      // interface implement CoroutineScope would be an invitation to break structured concurrency in
      // these extensions, leaving other launched coroutines running in the calling scope.
      @JvmDefaultWithCompatibility
      public interface PointerInputScope : Density {
          /**
           * The measured size of the pointer input region. Input events will be reported with a
           * coordinate space of (0, 0) to (size.width, size,height) as the input region, with (0, 0)
           * indicating the upper left corner.
           */
          public val size: IntSize

          /**
           * The additional space applied to each side of the layout area when the layout is smaller than
           * [ViewConfiguration.minimumTouchTargetSize].
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 141
    endLine: 175
    sha256: 9d00357a63f7bf15a6adc10b6ea901c7286965a7f52c2be9ea9ea04f972ff3de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public val extendedTouchPadding: Size
              get() = Size.Zero

          /** The [ViewConfiguration] used to tune gesture detectors. */
          public val viewConfiguration: ViewConfiguration

          /**
           * Intercept pointer input that children receive even if the pointer is out of bounds.
           *
           * If `true`, and a child has been moved out of this layout and receives an event, this will
           * receive that event. If `false`, a child receiving pointer input outside of the bounds of this
           * layout will not trigger any events in this.
           */
          @Suppress("GetterSetterNames")
          @get:Suppress("GetterSetterNames")
          @JsName("varinterceptOutOfBoundsChildEvents")
          public var interceptOutOfBoundsChildEvents: Boolean
              get() = false
              set(_) {}

          /**
           * Suspend and install a pointer input [block] that can await input events and respond to them
           * immediately. A call to [awaitPointerEventScope] will resume with [block]'s result after it
           * completes.
           *
           * More than one [awaitPointerEventScope] can run concurrently in the same [PointerInputScope]
           * by using [kotlinx.coroutines.launch]. [block]s are dispatched to in the order in which they
           * were installed.
           */
          public suspend fun <R> awaitPointerEventScope(block: suspend AwaitPointerEventScope.() -> R): R
      }

      @Suppress("ConstPropertyName")
      private const val PointerInputModifierNoParamError =
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 176
    endLine: 210
    sha256: 0817c844b62c18c1dd8983db44756ade9e59d2ff7620b0052b2812654f0de5f4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          "Modifier.pointerInput must provide one or more 'key' parameters that define the identity of " +
              "the modifier and determine when its previous input processing coroutine should be " +
              "cancelled and a new effect launched for the new key."

      /**
       * Create a modifier for processing pointer input within the region of the modified element.
       *
       * It is an error to call [pointerInput] without at least one `key` parameter.
       */
      // This deprecated-error function shadows the varargs overload so that the varargs version
      // is not used without key parameters.
      @Suppress("UNUSED_PARAMETER", "UnusedReceiverParameter", "ModifierFactoryUnreferencedReceiver")
      @Deprecated(PointerInputModifierNoParamError, level = DeprecationLevel.ERROR)
      public fun Modifier.pointerInput(block: suspend PointerInputScope.() -> Unit): Modifier =
          error(PointerInputModifierNoParamError)

      @Deprecated(
          "This function is deprecated. Use the PointerInputEventHandler block variation instead",
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  "pointerInput(key1 = key1, pointerInputEventHandler = block)",
                  "androidx.compose.ui.input.pointer.Modifier.pointerInput",
              ),
      )
      public fun Modifier.pointerInput(
          key1: Any?,
          block: suspend PointerInputScope.() -> Unit,
      ): Modifier = this then SuspendPointerInputElement(key1 = key1, pointerInputEventHandler = block)

      /**
       * Create a modifier for processing pointer input within the region of the modified element.
       *
       * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
       * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 211
    endLine: 245
    sha256: 3eda91f5c2f01c37a9c3f9eb1d25df1d62cec3aeb29efe99344596429b257f3b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
       * defined to perform higher-level gesture detection. The pointer input handling [block] will be
       * cancelled and **re-started** when [pointerInput] is recomposed with a different [key1] or the
       * [block] class is different.
       *
       * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
       * to operate on, two patterns are common for working with changes to those variables depending on
       * the desired behavior.
       *
       * Specifying the captured value as a [key][key1] parameter will cause [block] to cancel and restart
       * from the beginning if the value changes:
       *
       * @sample androidx.compose.ui.samples.keyedPointerInputModifier
       *
       * If [block] should **not** restart when a captured value is changed but the value should still be
       * updated for its next use, use
       * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
       * that is accessed by [block]:
       *
       * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier
       *
       * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
       * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
       * do not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       */
      public fun Modifier.pointerInput(key1: Any?, block: PointerInputEventHandler): Modifier =
          this then SuspendPointerInputElement(key1 = key1, pointerInputEventHandler = block)

      @Deprecated(
          "This function is deprecated. Use the PointerInputEventHandler block variation instead",
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  "pointerInput(key1 = key1, key2 = key2, pointerInputEventHandler = block)",
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 246
    endLine: 280
    sha256: 600c89ca56932e6e55adb9dadc8e8bcfba31195c89df2f2e90d8fcf1955e40e8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  "androidx.compose.ui.input.pointer.Modifier.pointerInput",
              ),
      )
      public fun Modifier.pointerInput(
          key1: Any?,
          key2: Any?,
          block: suspend PointerInputScope.() -> Unit,
      ): Modifier =
          this then SuspendPointerInputElement(key1 = key1, key2 = key2, pointerInputEventHandler = block)

      /**
       * Create a modifier for processing pointer input within the region of the modified element.
       *
       * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
       * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer
       * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
       * defined to perform higher-level gesture detection. The pointer input handling [block] will be
       * cancelled and **re-started** when [pointerInput] is recomposed with a different [key1] or [key2],
       * or the [block] class is different.
       *
       * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
       * to operate on, two patterns are common for working with changes to those variables depending on
       * the desired behavior.
       *
       * Specifying the captured value as a [key][key1] parameter will cause [block] to cancel and restart
       * from the beginning if the value changes:
       *
       * @sample androidx.compose.ui.samples.keyedPointerInputModifier
       *
       * If [block] should **not** restart when a captured value is changed but the value should still be
       * updated for its next use, use
       * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
       * that is accessed by [block]:
       *
       * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 281
    endLine: 315
    sha256: 1e8e001c9ac01688b716b93ad34c0ebca748557e2d742fab386094dbd6e70c9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
       * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
       * do not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       */
      public fun Modifier.pointerInput(
          key1: Any?,
          key2: Any?,
          block: PointerInputEventHandler,
      ): Modifier =
          this then SuspendPointerInputElement(key1 = key1, key2 = key2, pointerInputEventHandler = block)

      @Deprecated(
          "This function is deprecated. Use the PointerInputEventHandler block variation instead",
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  "pointerInput(keys = keys, pointerInputEventHandler = block)",
                  "androidx.compose.ui.input.pointer.Modifier.pointerInput",
              ),
      )
      public fun Modifier.pointerInput(
          vararg keys: Any?,
          block: suspend PointerInputScope.() -> Unit,
      ): Modifier = this then SuspendPointerInputElement(keys = keys, pointerInputEventHandler = block)

      /**
       * Create a modifier for processing pointer input within the region of the modified element.
       *
       * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
       * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer
       * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
       * defined to perform higher-level gesture detection. The pointer input handling [block] will be
       * cancelled and **re-started** when [pointerInput] is recomposed with any different [keys] or the
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 316
    endLine: 350
    sha256: 7d9b93c0d389976d2c2e3bc0e23cbaec65b739a41223c196585f2c16d43302da
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [block] class is different.
       *
       * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
       * to operate on, two patterns are common for working with changes to those variables depending on
       * the desired behavior.
       *
       * Specifying the captured value as a [key][keys] parameter will cause [block] to cancel and restart
       * from the beginning if the value changes:
       *
       * @sample androidx.compose.ui.samples.keyedPointerInputModifier
       *
       * If [block] should **not** restart when a captured value is changed but the value should still be
       * updated for its next use, use
       * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
       * that is accessed by [block]:
       *
       * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier
       *
       * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
       * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
       * do not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       */
      public fun Modifier.pointerInput(vararg keys: Any?, block: PointerInputEventHandler): Modifier =
          this then SuspendPointerInputElement(keys = keys, pointerInputEventHandler = block)

      /*
       * Represents the 'block' lambda passed into [Modifier.pointerInput]. It's used to receive and
       * consume pointer input events.
       */
      public fun interface PointerInputEventHandler {
          public suspend operator fun PointerInputScope.invoke()
      }

      internal class SuspendPointerInputElement(
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 351
    endLine: 385
    sha256: 729b14b23ec1d9fc477d7e500ba65b5fcf6fbce63cd5249fcc2030fe8b2f0106
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          val key1: Any? = null,
          val key2: Any? = null,
          val keys: Array<out Any?>? = null,
          val pointerInputEventHandler: PointerInputEventHandler,
      ) : ModifierNodeElement<SuspendingPointerInputModifierNodeImpl>() {
          override fun InspectorInfo.inspectableProperties() {
              name = "pointerInput"
              properties["key1"] = key1
              properties["key2"] = key2
              properties["keys"] = keys
              properties["pointerInputEventHandler"] = pointerInputEventHandler
          }

          override fun create(): SuspendingPointerInputModifierNodeImpl {
              return SuspendingPointerInputModifierNodeImpl(key1, key2, keys, pointerInputEventHandler)
          }

          override fun update(node: SuspendingPointerInputModifierNodeImpl) {
              node.update(key1, key2, keys, pointerInputEventHandler)
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SuspendPointerInputElement) return false

              if (key1 != other.key1) return false
              if (key2 != other.key2) return false
              if (keys != null) {
                  if (other.keys == null) return false
                  if (!keys.contentEquals(other.keys)) return false
              } else if (other.keys != null) return false

              return pointerInputEventHandler === other.pointerInputEventHandler
          }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 36
    endLine: 70
    sha256: 016b9b027c39dfa406b5d9123cbd40ab4086259ad84a1a252b4db3af877a757e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import kotlin.coroutines.Continuation
      import kotlin.coroutines.ContinuationInterceptor
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.EmptyCoroutineContext
      import kotlin.coroutines.RestrictsSuspension
      import kotlin.coroutines.createCoroutine
      import kotlin.coroutines.resume
      import kotlin.coroutines.resumeWithException
      import kotlin.js.JsName
      import kotlin.math.max
      import kotlinx.coroutines.CancellableContinuation
      import kotlinx.coroutines.CancellationException
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.delay
      import kotlinx.coroutines.launch
      import kotlinx.coroutines.suspendCancellableCoroutine

      /**
       * Receiver scope for awaiting pointer events in a call to
       * [PointerInputScope.awaitPointerEventScope].
       *
       * This is a restricted suspension scope. Code in this scope is always called un-dispatched and may
       * only suspend for calls to [awaitPointerEvent]. These functions resume synchronously and the
       * caller may mutate the result **before** the next await call to affect the next stage of the input
       * processing pipeline.
       */
      @RestrictsSuspension
      @JvmDefaultWithCompatibility
      public interface AwaitPointerEventScope : Density {
          /**
           * The measured size of the pointer input region. Input events will be reported with a
           * coordinate space of (0, 0) to (size.width, size,height) as the input region, with (0, 0)
           * indicating the upper left corner.
           */
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 386
    endLine: 420
    sha256: d74f2686e4efe72ae1e01503358308b92025cb135130995655e84cad4eb72aff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun hashCode(): Int {
              var result = key1?.hashCode() ?: 0
              result = 31 * result + (key2?.hashCode() ?: 0)
              result = 31 * result + (keys?.contentHashCode() ?: 0)
              result = 31 * result + pointerInputEventHandler.hashCode()
              return result
          }
      }

      private val EmptyPointerEvent = PointerEvent(emptyList())

      /** Deprecated, use [SuspendingPointerInputModifierNode] instead. */
      @Deprecated(
          message =
              "This function is deprecated. Use 'SuspendingPointerInputModifierNode' with the" +
                  "PointerInputEventHandler instead.",
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  "SuspendingPointerInputModifierNode { pointerInputEventHandler }",
                  "androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode",
              ),
      )
      @Suppress("DEPRECATION")
      public fun SuspendingPointerInputModifierNode(
          pointerInputHandler: suspend PointerInputScope.() -> Unit
      ): SuspendingPointerInputModifierNode {
          return SuspendingPointerInputModifierNodeImpl(null, null, null, pointerInputHandler)
      }

      /**
       * Supports suspending pointer event handling. This is used by [pointerInput], so in most cases you
       * should just use [pointerInput] for suspending pointer input. Creating a
       * [SuspendingPointerInputModifierNode] should only be needed when you want to delegate to
       * suspending pointer input as part of the implementation of a complex [Modifier.Node].
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 421
    endLine: 455
    sha256: a4339a6d4996d30d466de14afbc0b85fc8bb1cf049ab2b70955e61f8519b1022
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun SuspendingPointerInputModifierNode(
          pointerInputEventHandler: PointerInputEventHandler
      ): SuspendingPointerInputModifierNode {
          return SuspendingPointerInputModifierNodeImpl(null, null, null, pointerInputEventHandler)
      }

      /**
       * Extends [PointerInputModifierNode] with a handler to execute asynchronously when an event occurs
       * and a function to reset that handler (cancels the existing coroutine and essentially resets the
       * handler's execution). Note: The handler still executes lazily, meaning nothing will be done until
       * a new event comes in.
       */
      public sealed interface SuspendingPointerInputModifierNode : PointerInputModifierNode {
          /**
           * Handler for pointer input events. When changed, any previously executing pointerInputHandler
           * will be canceled.
           */
          @Deprecated(
              message = "This property is deprecated. Use 'pointerInputEventHandler' instead.",
              level = DeprecationLevel.ERROR,
              replaceWith =
                  ReplaceWith(
                      "pointerInputEventHandler",
                      "androidx.compose.ui.input.pointer." +
                          "SuspendingPointerInputModifierNode.pointerInputEventHandler",
                  ),
          )
          public var pointerInputHandler: suspend PointerInputScope.() -> Unit

          /**
           * Handler for pointer input events. When changed, any previously executing
           * pointerInputEventHandler will be canceled.
           */
          // Supports more dynamic use cases than previous functional type version.
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 456
    endLine: 490
    sha256: 92fb611fae13e39fe8fa32a9ae68941ca09323d2412d8ceafef7bb0b92e7a15b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // NOTE: If you implement this interface, replace the default implementation. For more
          // technical details, see aosp/3070509
          public var pointerInputEventHandler: PointerInputEventHandler
              get() = TODO("pointerInputEventHandler must be implemented (get()).")
              set(value) = TODO("pointerInputEventHandler must be implemented (set($value)).")

          /**
           * Resets the underlying coroutine used to run the handler for input pointer events. This should
           * be called whenever a large change has been made that forces the gesture detection to be
           * completely invalid.
           *
           * For example, if [pointerInputEventHandler] has different modes for detecting a gesture (long
           * press, double click, etc.), and by switching the modes, any currently-running gestures are no
           * longer valid.
           */
          public fun resetPointerInputHandler()
      }

      // Used for multi-sleep solution within [PointerEventHandlerCoroutine.withTimeout()].
      internal const val WITH_TIMEOUT_MICRO_DELAY_MILLIS = 8L

      /**
       * Implementation notes: This class does a lot of lifting. [PointerInputModifierNode] receives,
       * interprets, and, consumes [PointerInputChange]s while the state (and the coroutineScope used to
       * execute [pointerInputEventHandler]) is retained in [Modifier.Node].
       *
       * [SuspendingPointerInputModifierNodeImpl] implements the [PointerInputScope] used to offer the
       * [Modifier.pointerInput] DSL and provides the [Density] from [LocalDensity] lazily from the layout
       * node when it is needed.
       *
       * Note: The coroutine that executes the passed pointer event handler is launched lazily when the
       * first event is fired (making it more efficient) and is cancelled via resetPointerInputHandler().
       */
      internal class SuspendingPointerInputModifierNodeImpl(
          private var key1: Any? = null,
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 491
    endLine: 525
    sha256: 44d7a69570cc87529c4037a284c7f99f0c9ffc9fe6fa78f11dc3e32db2d7ce58
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private var key2: Any? = null,
          private var keys: Array<out Any?>? = null,
          pointerInputEventHandler: PointerInputEventHandler,
      ) : Modifier.Node(), SuspendingPointerInputModifierNode, PointerInputScope, Density {
          @Deprecated("Exists to maintain compatibility with previous API shape")
          constructor(
              key1: Any?,
              key2: Any?,
              keys: Array<out Any?>?,
              pointerInputEvent: suspend PointerInputScope.() -> Unit,
          ) : this(
              key1 = key1,
              key2 = key2,
              keys = keys,
              pointerInputEventHandler = PointerInputEventHandler {}, // Empty Lambda, not used.
          ) {
              // If the _deprecatedPointerInputHandler is set, we will use that instead of the
              // pointerInputEventHandler (why empty lambda above doesn't matter).
              _deprecatedPointerInputHandler = pointerInputEvent
          }

          // Previously used to execute pointer input handlers (now pointerInputEventHandler covers that).
          // This exists purely for backwards compatibility.
          private var _deprecatedPointerInputHandler: (suspend PointerInputScope.() -> Unit)? = null

          // Main handler for pointer input events
          private var _pointerInputEventHandler = pointerInputEventHandler

          @Deprecated("Super property deprecated")
          override var pointerInputHandler: suspend PointerInputScope.() -> Unit
              get() = _deprecatedPointerInputHandler ?: {}
              set(value) {
                  resetPointerInputHandler()
                  _deprecatedPointerInputHandler = value
              }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 526
    endLine: 560
    sha256: 983652e984a4c0a23e49fee4b47df8eca347b29a93b921faef913709a930df03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override var pointerInputEventHandler
              set(value) {
                  resetPointerInputHandler()
                  _deprecatedPointerInputHandler = null
                  _pointerInputEventHandler = value
              }
              get() = _pointerInputEventHandler

          override val density: Float
              get() = requireLayoutNode().density.density

          override val fontScale: Float
              get() = requireLayoutNode().density.fontScale

          override val viewConfiguration
              get() = requireLayoutNode().viewConfiguration

          override val size: IntSize
              get() = boundsSize

          // The handler for pointer input events is now executed lazily when the first event fires.
          // This job indicates that pointer input handler job is running.
          private var pointerInputJob: Job? = null

          private var currentEvent: PointerEvent = EmptyPointerEvent

          /**
           * Actively registered input handlers from currently ongoing calls to [awaitPointerEventScope].
           * Must use `synchronized(pointerHandlersLock)` to access.
           */
          private val pointerHandlers =
              mutableObjectListOf<
                  SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>
              >()
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 561
    endLine: 595
    sha256: 905a9cb6c784cce07f1261e916551b34e7d093321a4f7c6bfb60734137de57c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          private val pointerHandlersLock = makeSynchronizedObject(pointerHandlers)

          /**
           * Scratch list for dispatching to handlers for a particular phase. Used to hold a copy of the
           * contents of [pointerHandlers] during dispatch so that resumed continuations may add/remove
           * handlers without affecting the current dispatch pass. Must only access on the UI thread.
           */
          private val dispatchingPointerHandlers =
              mutableObjectListOf<
                  SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>
              >()

          /**
           * The last pointer event we saw where at least one pointer was currently down; null otherwise.
           * Used to synthesize a fake "all pointers changed to up/all changes to down-state consumed"
           * event for propagating cancellation. This synthetic event corresponds to Android's
           * `MotionEvent.ACTION_CANCEL`.
           */
          private var lastPointerEvent: PointerEvent? = null

          /**
           * The size of the bounds of this input filter. Normally [PointerInputFilter.size] can be used,
           * but for tests, it is better to not rely on something set to an `internal` method.
           */
          private var boundsSize: IntSize = IntSize.Zero

          override val extendedTouchPadding: Size
              get() {
                  val minimumTouchTargetSize = viewConfiguration.minimumTouchTargetSize.toSize()
                  val size = size
                  val horizontal = max(0f, minimumTouchTargetSize.width - size.width) / 2f
                  val vertical = max(0f, minimumTouchTargetSize.height - size.height) / 2f
                  return Size(horizontal, vertical)
              }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 596
    endLine: 630
    sha256: 4159ed4058b03b791bf4495f7a2eecf528c61fb0fa25cec87388613076b0272b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          override var interceptOutOfBoundsChildEvents: Boolean = false

          override fun onDetach() {
              resetPointerInputHandler()
              super.onDetach()
          }

          // The handler for incoming pointer input events needs to be reset if the density changes.
          override fun onDensityChange() {
              resetPointerInputHandler()
          }

          // The handler for incoming pointer input events needs to be reset if the view configuration
          // changes.
          override fun onViewConfigurationChange() {
              resetPointerInputHandler()
          }

          /**
           * This cancels the existing coroutine and essentially resets pointerInputEventHandler's
           * execution. Note, the pointerInputEventHandler still executes lazily, meaning nothing will be
           * done again until a new event comes in. More details: This is triggered from a LayoutNode if
           * the Density or ViewConfiguration change (in an older implementation using composed, these
           * values were used as keys so it would reset everything when either change, we do that manually
           * now through this function). It is also used for testing.
           */
          override fun resetPointerInputHandler() {
              val localJob = pointerInputJob
              if (localJob != null) {
                  localJob.cancel(PointerInputResetException())
                  pointerInputJob = null
              }
          }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 631
    endLine: 665
    sha256: 9a9b507a2077825a8c988a78373928266129e955b540c07b2f8490a9e3fb7f97
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal fun update(
              key1: Any?,
              key2: Any?,
              keys: Array<out Any?>?,
              pointerInputEventHandler: PointerInputEventHandler,
          ) {
              var needsReset = false

              // key1
              if (this.key1 != key1) {
                  needsReset = true
              }
              this.key1 = key1

              // key2
              if (this.key2 != key2) {
                  needsReset = true
              }
              this.key2 = key2

              // keys
              if (this.keys != null && keys == null) {
                  needsReset = true
              }
              if (this.keys == null && keys != null) {
                  needsReset = true
              }
              if (this.keys != null && keys != null && !keys.contentEquals(this.keys)) {
                  needsReset = true
              }
              this.keys = keys

              // Lambda literals will have a new instance every time they are executed (even if it is from
              // the same code location), so we can not use them as a comparison mechanism to avoid
              // restarting pointer input handlers when they are functionally the same. However, we can
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 666
    endLine: 700
    sha256: e58423302b7c906fa2c5dcd4e479a008132e755d730218c9f1b96d93fd2f8830
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // get around this by using a SAM interface and a class comparison instead. (Even though the
              // instances are different, they will have the same class type.)
              if (this.pointerInputEventHandler::class != pointerInputEventHandler::class) {
                  needsReset = true
              }

              // Only reset when keys have changed or pointerInputEventHandler is called from a different
              // call site (determined by class comparison).
              if (needsReset) {
                  resetPointerInputHandler()
              }
              _pointerInputEventHandler = pointerInputEventHandler
          }

          /**
           * Snapshot the current [pointerHandlers] and run [block] on each one. May not be called
           * reentrant or concurrent with itself.
           *
           * Dispatches from first to last registered for [PointerEventPass.Initial] and
           * [PointerEventPass.Final]; dispatches from last to first for [PointerEventPass.Main]. This
           * corresponds to the down/up/down dispatch behavior of each of these passes along the hit test
           * path through the Compose UI layout hierarchy.
           */
          private inline fun forEachCurrentPointerHandler(
              pass: PointerEventPass,
              block: (SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>) -> Unit,
          ) {
              // Copy handlers to avoid mutating the collection during dispatch
              synchronized(pointerHandlersLock) { dispatchingPointerHandlers.addAll(pointerHandlers) }
              try {
                  when (pass) {
                      PointerEventPass.Initial,
                      PointerEventPass.Final -> dispatchingPointerHandlers.forEach(block)
                      PointerEventPass.Main -> dispatchingPointerHandlers.forEachReversed(block)
                  }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 701
    endLine: 735
    sha256: 29ee5ab9323eab7ecd14d2b54bad51a9e06785699fe3af15b3d2ee48bf6a636d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } finally {
                  dispatchingPointerHandlers.clear()
              }
          }

          /**
           * Dispatch [pointerEvent] for [pass] to all [pointerHandlers] currently registered when the
           * call begins.
           */
          private fun dispatchPointerEvent(pointerEvent: PointerEvent, pass: PointerEventPass) {
              forEachCurrentPointerHandler(pass) { it.offerPointerEvent(pointerEvent, pass) }
          }

          override fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
          ) {
              boundsSize = bounds
              if (pass == PointerEventPass.Initial) {
                  currentEvent = pointerEvent
              }

              // Coroutine lazily launches when first event comes in.
              if (pointerInputJob == null) {
                  // 'start = CoroutineStart.UNDISPATCHED' required so handler doesn't miss first event.
                  pointerInputJob =
                      coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                          if (_deprecatedPointerInputHandler != null) {
                              _deprecatedPointerInputHandler!!()
                          } else {
                              with(pointerInputEventHandler) { invoke() }
                          }
                      }
              }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 71
    endLine: 105
    sha256: b1fc8bbdef60df8ffeb117527d47f324ccf4f98aabcb4df54c8ae87d3b9f2004
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val size: IntSize

          /*
           * The additional space applied to each side of the layout area. This can be
           * non-[zero][Size.Zero] when `minimumTouchTargetSize` is set in [pointerInput].
           */
          public val extendedTouchPadding: Size
              get() = Size.Zero

          /** The [PointerEvent] from the most recent touch event. */
          public val currentEvent: PointerEvent

          /** The [ViewConfiguration] used to tune gesture detectors. */
          public val viewConfiguration: ViewConfiguration

          /**
           * Suspend until a [PointerEvent] is reported to the specified input [pass]. [pass] defaults to
           * [PointerEventPass.Main].
           *
           * [awaitPointerEvent] resumes **synchronously** in the restricted suspension scope. This means
           * that callers can react immediately to input after [awaitPointerEvent] returns and affect both
           * the current frame and the next handler or phase of the input processing pipeline. Callers
           * should mutate the returned [PointerEvent] before awaiting another event to consume aspects of
           * the event before the next stage of input processing runs.
           */
          public suspend fun awaitPointerEvent(
              pass: PointerEventPass = PointerEventPass.Main
          ): PointerEvent

          /**
           * Runs [block] and returns the result of [block] or `null` if [timeMillis] has passed before
           * [timeMillis].
           */
          public suspend fun <T> withTimeoutOrNull(
              timeMillis: Long,
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 736
    endLine: 770
    sha256: 9779fa65015b9cd22a1bba36ba538c65b7b9a999604981d230c852a5ff081b41
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
              dispatchPointerEvent(pointerEvent, pass)

              lastPointerEvent = pointerEvent.takeIf { event ->
                  !event.changes.fastAll { it.changedToUpIgnoreConsumed() }
              }
          }

          override fun onCancelPointerInput() {
              // Synthesize a cancel event for whatever state we previously saw, if one is applicable.
              // A cancel event is one where all previously down pointers are now up, the change in
              // down-ness is consumed. Any pointers that were previously hovering are left unchanged.
              val lastEvent = lastPointerEvent ?: return

              if (lastEvent.changes.fastAll { !it.pressed }) {
                  return // There aren't any pressed pointers, so we don't need to send any events.
              }
              val newChanges =
                  lastEvent.changes.fastMapNotNull { old ->
                      PointerInputChange(
                          id = old.id,
                          position = old.position,
                          uptimeMillis = old.uptimeMillis,
                          pressed = false,
                          pressure = old.pressure,
                          previousPosition = old.position,
                          previousUptimeMillis = old.uptimeMillis,
                          previousPressed = old.pressed,
                          isInitiallyConsumed = old.pressed,
                          type = old.type,
                      )
                  }

              val cancelEvent = PointerEvent(newChanges)
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 771
    endLine: 805
    sha256: d2afb64592ef046519739dba50b1051fe4ce9a33050dee9b8b301f0ef45d13c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              currentEvent = cancelEvent
              // Dispatch the synthetic cancel for all three passes
              dispatchPointerEvent(cancelEvent, PointerEventPass.Initial)
              dispatchPointerEvent(cancelEvent, PointerEventPass.Main)
              dispatchPointerEvent(cancelEvent, PointerEventPass.Final)

              lastPointerEvent = null
          }

          override suspend fun <R> awaitPointerEventScope(
              block: suspend AwaitPointerEventScope.() -> R
          ): R = suspendCancellableCoroutine { continuation ->
              val handlerCoroutine = PointerEventHandlerCoroutine(continuation)
              synchronized(pointerHandlersLock) {
                  pointerHandlers += handlerCoroutine

                  // NOTE: We resume the new continuation while holding this lock.
                  // We do this since it runs in a RestrictsSuspension scope and therefore
                  // will only suspend when awaiting a new event. We don't release this
                  // synchronized lock until we know it has an awaiter and any future dispatch
                  // would succeed.

                  // We also create the coroutine with both a receiver and a completion continuation
                  // of the handlerCoroutine itself; we don't use our currently available suspended
                  // continuation as the resume point because handlerCoroutine needs to remove the
                  // ContinuationInterceptor from the supplied CoroutineContext to have un-dispatched
                  // behavior in our restricted suspension scope. This is required so that we can
                  // process event-awaits synchronously and affect the next stage in the pipeline
                  // without running too late due to dispatch.
                  block.createCoroutine(handlerCoroutine, handlerCoroutine).resume(Unit)
              }

              // Restricted suspension handler coroutines can't propagate structured job cancellation
              // automatically as the context must be EmptyCoroutineContext; do it manually instead.
              continuation.invokeOnCancellation { handlerCoroutine.cancel(it) }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 806
    endLine: 840
    sha256: ec4f39e8f897ca8137e50d321a30c49c07d68ababe605fd9dfcc67f1ef19af28
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Implementation of the inner coroutine created to run a single call to
           * [awaitPointerEventScope].
           *
           * [PointerEventHandlerCoroutine] implements [AwaitPointerEventScope] to provide the input
           * handler DSL, and [Continuation] so that it can wrap [completion] and remove the
           * [ContinuationInterceptor] from the calling context and run un-dispatched.
           */
          private inner class PointerEventHandlerCoroutine<R>(private val completion: Continuation<R>) :
              AwaitPointerEventScope,
              Density by this@SuspendingPointerInputModifierNodeImpl,
              Continuation<R> {

              private var pointerAwaiter: CancellableContinuation<PointerEvent>? = null
              private var awaitPass: PointerEventPass = PointerEventPass.Main

              override val currentEvent: PointerEvent
                  get() = this@SuspendingPointerInputModifierNodeImpl.currentEvent

              override val size: IntSize
                  get() = this@SuspendingPointerInputModifierNodeImpl.boundsSize

              override val viewConfiguration: ViewConfiguration
                  get() = this@SuspendingPointerInputModifierNodeImpl.viewConfiguration

              override val extendedTouchPadding: Size
                  get() = this@SuspendingPointerInputModifierNodeImpl.extendedTouchPadding

              fun offerPointerEvent(event: PointerEvent, pass: PointerEventPass) {
                  if (pass == awaitPass) {
                      pointerAwaiter?.run {
                          pointerAwaiter = null
                          resume(event)
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 841
    endLine: 875
    sha256: 7eff5686651295985c357c67a132630096cd639237a267c63836b9cb382ce2cb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  }
              }

              // Called to run any finally blocks in the awaitPointerEventScope block
              fun cancel(cause: Throwable?) {
                  pointerAwaiter?.cancel(cause)
                  pointerAwaiter = null
              }

              // context must be EmptyCoroutineContext for restricted suspension coroutines
              override val context: CoroutineContext = EmptyCoroutineContext

              // Implementation of Continuation; clean up and resume our wrapped continuation.
              override fun resumeWith(result: Result<R>) {
                  synchronized(pointerHandlersLock) { pointerHandlers -= this }
                  completion.resumeWith(result)
              }

              override suspend fun awaitPointerEvent(pass: PointerEventPass): PointerEvent =
                  suspendCancellableCoroutine { continuation ->
                      awaitPass = pass
                      pointerAwaiter = continuation
                  }

              override suspend fun <T> withTimeoutOrNull(
                  timeMillis: Long,
                  block: suspend AwaitPointerEventScope.() -> T,
              ): T? {
                  return try {
                      withTimeout(timeMillis, block)
                  } catch (_: PointerEventTimeoutCancellationException) {
                      null
                  }
              }
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 876
    endLine: 910
    sha256: 5be553346573dc48fb1e56499ff4a136b73457b6f84fbeb1fe3e2091897084e3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              override suspend fun <T> withTimeout(
                  timeMillis: Long,
                  block: suspend AwaitPointerEventScope.() -> T,
              ): T {
                  if (timeMillis <= 0L) {
                      pointerAwaiter?.resumeWithException(
                          PointerEventTimeoutCancellationException(timeMillis)
                      )
                  }

                  val job = coroutineScope.launch {
                      // Delay twice because the timeout continuation needs to be lower-priority than
                      // input events, not treated fairly in FIFO order. The second
                      // micro-delay reposts it to the back of the queue, after any input events
                      // that were posted but not processed during the first delay.
                      delay(timeMillis - WITH_TIMEOUT_MICRO_DELAY_MILLIS)
                      delay(WITH_TIMEOUT_MICRO_DELAY_MILLIS)

                      pointerAwaiter?.resumeWithException(
                          PointerEventTimeoutCancellationException(timeMillis)
                      )
                  }
                  try {
                      return block()
                  } finally {
                      job.cancel(CancelTimeoutCancellationException)
                  }
              }
          }
      }

      /**
       * An exception thrown from [AwaitPointerEventScope.withTimeout] when the execution time of the
       * coroutine is too long.
  - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt
    startLine: 911
    endLine: 928
    sha256: 76359df9ab3237a481743e04d5003cafc1f65ae29c41be8b5a52a5170e75032a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       */
      public expect class PointerEventTimeoutCancellationException(time: Long) : CancellationException

      /**
       * Used in place of the standard Job cancellation pathway to avoid reflective javaClass.simpleName
       * lookups to build the exception message and stack trace collection. Remove if these are changed in
       * kotlinx.coroutines.
       */
      internal class PointerInputResetException() :
          PlatformOptimizedCancellationException("Pointer input was reset")

      /**
       * Also used in place of standard Job cancellation pathway; since we control this code path we
       * shouldn't need to worry about other code calling addSuppressed on this exception so a singleton
       * instance is used
       */
      internal object CancelTimeoutCancellationException : PlatformOptimizedCancellationException()
compose:
  id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.input.pointer
  sections:
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-1
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-106
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-141
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-176
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-211
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-246
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-281
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-316
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-351
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-36
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerInputScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-386
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
        - androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-421
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
        - androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-456
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-491
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputScope
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
        - androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-526
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-561
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-596
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-631
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.input.pointer.PointerInputEventHandler
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-666
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-701
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-71
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.input.pointer.pointerInput
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-736
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-771
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-806
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-841
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 841–875)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-876
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 876–910)
      aliases:
        - androidx.compose.ui.input.pointer.AwaitPointerEventScope
        - androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-876-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-911
      title: androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 911–928)
      aliases:
        - androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-911-source
      relatedIds: []
---

# androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 1–35)

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

package androidx.compose.ui.input.pointer

import androidx.collection.mutableObjectListOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.internal.PlatformOptimizedCancellationException
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.PointerInputModifierNode
import androidx.compose.ui.node.requireLayoutNode
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.ViewConfiguration
import androidx.compose.ui.platform.makeSynchronizedObject
import androidx.compose.ui.platform.synchronized
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.fastAll
import androidx.compose.ui.util.fastMapNotNull

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 106–140)

        block: suspend AwaitPointerEventScope.() -> T,
    ): T? = block()

    /**
     * Runs [block] and returns its results. An [PointerEventTimeoutCancellationException] is thrown
     * if [timeMillis] has passed before [block] completes.
     */
    public suspend fun <T> withTimeout(
        timeMillis: Long,
        block: suspend AwaitPointerEventScope.() -> T,
    ): T = block()
}

/**
 * Receiver scope for [Modifier.pointerInput] that permits
 * [handling pointer input][awaitPointerEventScope].
 */
// Design note: this interface does _not_ implement CoroutineScope, even though doing so
// would more easily permit the use of launch {} inside Modifier.pointerInput {} blocks without
// requiring an additional coroutineScope {} layer of nesting. As it is encouraged to define
// gesture detectors as suspending extensions with a PointerInputScope receiver, also making this
// interface implement CoroutineScope would be an invitation to break structured concurrency in
// these extensions, leaving other launched coroutines running in the calling scope.
@JvmDefaultWithCompatibility
public interface PointerInputScope : Density {
    /**
     * The measured size of the pointer input region. Input events will be reported with a
     * coordinate space of (0, 0) to (size.width, size,height) as the input region, with (0, 0)
     * indicating the upper left corner.
     */
    public val size: IntSize

    /**
     * The additional space applied to each side of the layout area when the layout is smaller than
     * [ViewConfiguration.minimumTouchTargetSize].

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 141–175)

     */
    public val extendedTouchPadding: Size
        get() = Size.Zero

    /** The [ViewConfiguration] used to tune gesture detectors. */
    public val viewConfiguration: ViewConfiguration

    /**
     * Intercept pointer input that children receive even if the pointer is out of bounds.
     *
     * If `true`, and a child has been moved out of this layout and receives an event, this will
     * receive that event. If `false`, a child receiving pointer input outside of the bounds of this
     * layout will not trigger any events in this.
     */
    @Suppress("GetterSetterNames")
    @get:Suppress("GetterSetterNames")
    @JsName("varinterceptOutOfBoundsChildEvents")
    public var interceptOutOfBoundsChildEvents: Boolean
        get() = false
        set(_) {}

    /**
     * Suspend and install a pointer input [block] that can await input events and respond to them
     * immediately. A call to [awaitPointerEventScope] will resume with [block]'s result after it
     * completes.
     *
     * More than one [awaitPointerEventScope] can run concurrently in the same [PointerInputScope]
     * by using [kotlinx.coroutines.launch]. [block]s are dispatched to in the order in which they
     * were installed.
     */
    public suspend fun <R> awaitPointerEventScope(block: suspend AwaitPointerEventScope.() -> R): R
}

@Suppress("ConstPropertyName")
private const val PointerInputModifierNoParamError =

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 176–210)

    "Modifier.pointerInput must provide one or more 'key' parameters that define the identity of " +
        "the modifier and determine when its previous input processing coroutine should be " +
        "cancelled and a new effect launched for the new key."

/**
 * Create a modifier for processing pointer input within the region of the modified element.
 *
 * It is an error to call [pointerInput] without at least one `key` parameter.
 */
// This deprecated-error function shadows the varargs overload so that the varargs version
// is not used without key parameters.
@Suppress("UNUSED_PARAMETER", "UnusedReceiverParameter", "ModifierFactoryUnreferencedReceiver")
@Deprecated(PointerInputModifierNoParamError, level = DeprecationLevel.ERROR)
public fun Modifier.pointerInput(block: suspend PointerInputScope.() -> Unit): Modifier =
    error(PointerInputModifierNoParamError)

@Deprecated(
    "This function is deprecated. Use the PointerInputEventHandler block variation instead",
    level = DeprecationLevel.HIDDEN,
    replaceWith =
        ReplaceWith(
            "pointerInput(key1 = key1, pointerInputEventHandler = block)",
            "androidx.compose.ui.input.pointer.Modifier.pointerInput",
        ),
)
public fun Modifier.pointerInput(
    key1: Any?,
    block: suspend PointerInputScope.() -> Unit,
): Modifier = this then SuspendPointerInputElement(key1 = key1, pointerInputEventHandler = block)

/**
 * Create a modifier for processing pointer input within the region of the modified element.
 *
 * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
 * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 211–245)

 * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
 * defined to perform higher-level gesture detection. The pointer input handling [block] will be
 * cancelled and **re-started** when [pointerInput] is recomposed with a different [key1] or the
 * [block] class is different.
 *
 * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
 * to operate on, two patterns are common for working with changes to those variables depending on
 * the desired behavior.
 *
 * Specifying the captured value as a [key][key1] parameter will cause [block] to cancel and restart
 * from the beginning if the value changes:
 *
 * @sample androidx.compose.ui.samples.keyedPointerInputModifier
 *
 * If [block] should **not** restart when a captured value is changed but the value should still be
 * updated for its next use, use
 * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
 * that is accessed by [block]:
 *
 * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier
 *
 * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
 * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
 * do not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 */
public fun Modifier.pointerInput(key1: Any?, block: PointerInputEventHandler): Modifier =
    this then SuspendPointerInputElement(key1 = key1, pointerInputEventHandler = block)

@Deprecated(
    "This function is deprecated. Use the PointerInputEventHandler block variation instead",
    level = DeprecationLevel.HIDDEN,
    replaceWith =
        ReplaceWith(
            "pointerInput(key1 = key1, key2 = key2, pointerInputEventHandler = block)",

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 246–280)

            "androidx.compose.ui.input.pointer.Modifier.pointerInput",
        ),
)
public fun Modifier.pointerInput(
    key1: Any?,
    key2: Any?,
    block: suspend PointerInputScope.() -> Unit,
): Modifier =
    this then SuspendPointerInputElement(key1 = key1, key2 = key2, pointerInputEventHandler = block)

/**
 * Create a modifier for processing pointer input within the region of the modified element.
 *
 * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
 * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer
 * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
 * defined to perform higher-level gesture detection. The pointer input handling [block] will be
 * cancelled and **re-started** when [pointerInput] is recomposed with a different [key1] or [key2],
 * or the [block] class is different.
 *
 * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
 * to operate on, two patterns are common for working with changes to those variables depending on
 * the desired behavior.
 *
 * Specifying the captured value as a [key][key1] parameter will cause [block] to cancel and restart
 * from the beginning if the value changes:
 *
 * @sample androidx.compose.ui.samples.keyedPointerInputModifier
 *
 * If [block] should **not** restart when a captured value is changed but the value should still be
 * updated for its next use, use
 * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
 * that is accessed by [block]:
 *
 * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 281–315)

 *
 * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
 * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
 * do not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 */
public fun Modifier.pointerInput(
    key1: Any?,
    key2: Any?,
    block: PointerInputEventHandler,
): Modifier =
    this then SuspendPointerInputElement(key1 = key1, key2 = key2, pointerInputEventHandler = block)

@Deprecated(
    "This function is deprecated. Use the PointerInputEventHandler block variation instead",
    level = DeprecationLevel.HIDDEN,
    replaceWith =
        ReplaceWith(
            "pointerInput(keys = keys, pointerInputEventHandler = block)",
            "androidx.compose.ui.input.pointer.Modifier.pointerInput",
        ),
)
public fun Modifier.pointerInput(
    vararg keys: Any?,
    block: suspend PointerInputScope.() -> Unit,
): Modifier = this then SuspendPointerInputElement(keys = keys, pointerInputEventHandler = block)

/**
 * Create a modifier for processing pointer input within the region of the modified element.
 *
 * [pointerInput] [block]s may call [PointerInputScope.awaitPointerEventScope] to install a pointer
 * input handler that can [AwaitPointerEventScope.awaitPointerEvent] to receive and consume pointer
 * input events. Extension functions on [PointerInputScope] or [AwaitPointerEventScope] may be
 * defined to perform higher-level gesture detection. The pointer input handling [block] will be
 * cancelled and **re-started** when [pointerInput] is recomposed with any different [keys] or the

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 316–350)

 * [block] class is different.
 *
 * When a [pointerInput] modifier is created by composition, if [block] captures any local variables
 * to operate on, two patterns are common for working with changes to those variables depending on
 * the desired behavior.
 *
 * Specifying the captured value as a [key][keys] parameter will cause [block] to cancel and restart
 * from the beginning if the value changes:
 *
 * @sample androidx.compose.ui.samples.keyedPointerInputModifier
 *
 * If [block] should **not** restart when a captured value is changed but the value should still be
 * updated for its next use, use
 * [rememberUpdatedState][androidx.compose.runtime.rememberUpdatedState] to update a value holder
 * that is accessed by [block]:
 *
 * @sample androidx.compose.ui.samples.rememberedUpdatedParameterPointerInputModifier
 *
 * ***Note*** Any removal operations on Android Views from `pointerInput` should wrap the `block` in
 * a `post { }` block to guarantee the event dispatch completes before executing the removal. (You
 * do not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 */
public fun Modifier.pointerInput(vararg keys: Any?, block: PointerInputEventHandler): Modifier =
    this then SuspendPointerInputElement(keys = keys, pointerInputEventHandler = block)

/*
 * Represents the 'block' lambda passed into [Modifier.pointerInput]. It's used to receive and
 * consume pointer input events.
 */
public fun interface PointerInputEventHandler {
    public suspend operator fun PointerInputScope.invoke()
}

internal class SuspendPointerInputElement(

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 351–385)

    val key1: Any? = null,
    val key2: Any? = null,
    val keys: Array<out Any?>? = null,
    val pointerInputEventHandler: PointerInputEventHandler,
) : ModifierNodeElement<SuspendingPointerInputModifierNodeImpl>() {
    override fun InspectorInfo.inspectableProperties() {
        name = "pointerInput"
        properties["key1"] = key1
        properties["key2"] = key2
        properties["keys"] = keys
        properties["pointerInputEventHandler"] = pointerInputEventHandler
    }

    override fun create(): SuspendingPointerInputModifierNodeImpl {
        return SuspendingPointerInputModifierNodeImpl(key1, key2, keys, pointerInputEventHandler)
    }

    override fun update(node: SuspendingPointerInputModifierNodeImpl) {
        node.update(key1, key2, keys, pointerInputEventHandler)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SuspendPointerInputElement) return false

        if (key1 != other.key1) return false
        if (key2 != other.key2) return false
        if (keys != null) {
            if (other.keys == null) return false
            if (!keys.contentEquals(other.keys)) return false
        } else if (other.keys != null) return false

        return pointerInputEventHandler === other.pointerInputEventHandler
    }


Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 36–70)

import kotlin.coroutines.Continuation
import kotlin.coroutines.ContinuationInterceptor
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.coroutines.RestrictsSuspension
import kotlin.coroutines.createCoroutine
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.js.JsName
import kotlin.math.max
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.suspendCancellableCoroutine

/**
 * Receiver scope for awaiting pointer events in a call to
 * [PointerInputScope.awaitPointerEventScope].
 *
 * This is a restricted suspension scope. Code in this scope is always called un-dispatched and may
 * only suspend for calls to [awaitPointerEvent]. These functions resume synchronously and the
 * caller may mutate the result **before** the next await call to affect the next stage of the input
 * processing pipeline.
 */
@RestrictsSuspension
@JvmDefaultWithCompatibility
public interface AwaitPointerEventScope : Density {
    /**
     * The measured size of the pointer input region. Input events will be reported with a
     * coordinate space of (0, 0) to (size.width, size,height) as the input region, with (0, 0)
     * indicating the upper left corner.
     */

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 386–420)

    override fun hashCode(): Int {
        var result = key1?.hashCode() ?: 0
        result = 31 * result + (key2?.hashCode() ?: 0)
        result = 31 * result + (keys?.contentHashCode() ?: 0)
        result = 31 * result + pointerInputEventHandler.hashCode()
        return result
    }
}

private val EmptyPointerEvent = PointerEvent(emptyList())

/** Deprecated, use [SuspendingPointerInputModifierNode] instead. */
@Deprecated(
    message =
        "This function is deprecated. Use 'SuspendingPointerInputModifierNode' with the" +
            "PointerInputEventHandler instead.",
    level = DeprecationLevel.HIDDEN,
    replaceWith =
        ReplaceWith(
            "SuspendingPointerInputModifierNode { pointerInputEventHandler }",
            "androidx.compose.ui.input.pointer.SuspendingPointerInputModifierNode",
        ),
)
@Suppress("DEPRECATION")
public fun SuspendingPointerInputModifierNode(
    pointerInputHandler: suspend PointerInputScope.() -> Unit
): SuspendingPointerInputModifierNode {
    return SuspendingPointerInputModifierNodeImpl(null, null, null, pointerInputHandler)
}

/**
 * Supports suspending pointer event handling. This is used by [pointerInput], so in most cases you
 * should just use [pointerInput] for suspending pointer input. Creating a
 * [SuspendingPointerInputModifierNode] should only be needed when you want to delegate to
 * suspending pointer input as part of the implementation of a complex [Modifier.Node].

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 421–455)

 */
public fun SuspendingPointerInputModifierNode(
    pointerInputEventHandler: PointerInputEventHandler
): SuspendingPointerInputModifierNode {
    return SuspendingPointerInputModifierNodeImpl(null, null, null, pointerInputEventHandler)
}

/**
 * Extends [PointerInputModifierNode] with a handler to execute asynchronously when an event occurs
 * and a function to reset that handler (cancels the existing coroutine and essentially resets the
 * handler's execution). Note: The handler still executes lazily, meaning nothing will be done until
 * a new event comes in.
 */
public sealed interface SuspendingPointerInputModifierNode : PointerInputModifierNode {
    /**
     * Handler for pointer input events. When changed, any previously executing pointerInputHandler
     * will be canceled.
     */
    @Deprecated(
        message = "This property is deprecated. Use 'pointerInputEventHandler' instead.",
        level = DeprecationLevel.ERROR,
        replaceWith =
            ReplaceWith(
                "pointerInputEventHandler",
                "androidx.compose.ui.input.pointer." +
                    "SuspendingPointerInputModifierNode.pointerInputEventHandler",
            ),
    )
    public var pointerInputHandler: suspend PointerInputScope.() -> Unit

    /**
     * Handler for pointer input events. When changed, any previously executing
     * pointerInputEventHandler will be canceled.
     */
    // Supports more dynamic use cases than previous functional type version.

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 456–490)

    // NOTE: If you implement this interface, replace the default implementation. For more
    // technical details, see aosp/3070509
    public var pointerInputEventHandler: PointerInputEventHandler
        get() = TODO("pointerInputEventHandler must be implemented (get()).")
        set(value) = TODO("pointerInputEventHandler must be implemented (set($value)).")

    /**
     * Resets the underlying coroutine used to run the handler for input pointer events. This should
     * be called whenever a large change has been made that forces the gesture detection to be
     * completely invalid.
     *
     * For example, if [pointerInputEventHandler] has different modes for detecting a gesture (long
     * press, double click, etc.), and by switching the modes, any currently-running gestures are no
     * longer valid.
     */
    public fun resetPointerInputHandler()
}

// Used for multi-sleep solution within [PointerEventHandlerCoroutine.withTimeout()].
internal const val WITH_TIMEOUT_MICRO_DELAY_MILLIS = 8L

/**
 * Implementation notes: This class does a lot of lifting. [PointerInputModifierNode] receives,
 * interprets, and, consumes [PointerInputChange]s while the state (and the coroutineScope used to
 * execute [pointerInputEventHandler]) is retained in [Modifier.Node].
 *
 * [SuspendingPointerInputModifierNodeImpl] implements the [PointerInputScope] used to offer the
 * [Modifier.pointerInput] DSL and provides the [Density] from [LocalDensity] lazily from the layout
 * node when it is needed.
 *
 * Note: The coroutine that executes the passed pointer event handler is launched lazily when the
 * first event is fired (making it more efficient) and is cancelled via resetPointerInputHandler().
 */
internal class SuspendingPointerInputModifierNodeImpl(
    private var key1: Any? = null,

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 491–525)

    private var key2: Any? = null,
    private var keys: Array<out Any?>? = null,
    pointerInputEventHandler: PointerInputEventHandler,
) : Modifier.Node(), SuspendingPointerInputModifierNode, PointerInputScope, Density {
    @Deprecated("Exists to maintain compatibility with previous API shape")
    constructor(
        key1: Any?,
        key2: Any?,
        keys: Array<out Any?>?,
        pointerInputEvent: suspend PointerInputScope.() -> Unit,
    ) : this(
        key1 = key1,
        key2 = key2,
        keys = keys,
        pointerInputEventHandler = PointerInputEventHandler {}, // Empty Lambda, not used.
    ) {
        // If the _deprecatedPointerInputHandler is set, we will use that instead of the
        // pointerInputEventHandler (why empty lambda above doesn't matter).
        _deprecatedPointerInputHandler = pointerInputEvent
    }

    // Previously used to execute pointer input handlers (now pointerInputEventHandler covers that).
    // This exists purely for backwards compatibility.
    private var _deprecatedPointerInputHandler: (suspend PointerInputScope.() -> Unit)? = null

    // Main handler for pointer input events
    private var _pointerInputEventHandler = pointerInputEventHandler

    @Deprecated("Super property deprecated")
    override var pointerInputHandler: suspend PointerInputScope.() -> Unit
        get() = _deprecatedPointerInputHandler ?: {}
        set(value) {
            resetPointerInputHandler()
            _deprecatedPointerInputHandler = value
        }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 526–560)


    override var pointerInputEventHandler
        set(value) {
            resetPointerInputHandler()
            _deprecatedPointerInputHandler = null
            _pointerInputEventHandler = value
        }
        get() = _pointerInputEventHandler

    override val density: Float
        get() = requireLayoutNode().density.density

    override val fontScale: Float
        get() = requireLayoutNode().density.fontScale

    override val viewConfiguration
        get() = requireLayoutNode().viewConfiguration

    override val size: IntSize
        get() = boundsSize

    // The handler for pointer input events is now executed lazily when the first event fires.
    // This job indicates that pointer input handler job is running.
    private var pointerInputJob: Job? = null

    private var currentEvent: PointerEvent = EmptyPointerEvent

    /**
     * Actively registered input handlers from currently ongoing calls to [awaitPointerEventScope].
     * Must use `synchronized(pointerHandlersLock)` to access.
     */
    private val pointerHandlers =
        mutableObjectListOf<
            SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>
        >()

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 561–595)


    private val pointerHandlersLock = makeSynchronizedObject(pointerHandlers)

    /**
     * Scratch list for dispatching to handlers for a particular phase. Used to hold a copy of the
     * contents of [pointerHandlers] during dispatch so that resumed continuations may add/remove
     * handlers without affecting the current dispatch pass. Must only access on the UI thread.
     */
    private val dispatchingPointerHandlers =
        mutableObjectListOf<
            SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>
        >()

    /**
     * The last pointer event we saw where at least one pointer was currently down; null otherwise.
     * Used to synthesize a fake "all pointers changed to up/all changes to down-state consumed"
     * event for propagating cancellation. This synthetic event corresponds to Android's
     * `MotionEvent.ACTION_CANCEL`.
     */
    private var lastPointerEvent: PointerEvent? = null

    /**
     * The size of the bounds of this input filter. Normally [PointerInputFilter.size] can be used,
     * but for tests, it is better to not rely on something set to an `internal` method.
     */
    private var boundsSize: IntSize = IntSize.Zero

    override val extendedTouchPadding: Size
        get() {
            val minimumTouchTargetSize = viewConfiguration.minimumTouchTargetSize.toSize()
            val size = size
            val horizontal = max(0f, minimumTouchTargetSize.width - size.width) / 2f
            val vertical = max(0f, minimumTouchTargetSize.height - size.height) / 2f
            return Size(horizontal, vertical)
        }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 596–630)


    override var interceptOutOfBoundsChildEvents: Boolean = false

    override fun onDetach() {
        resetPointerInputHandler()
        super.onDetach()
    }

    // The handler for incoming pointer input events needs to be reset if the density changes.
    override fun onDensityChange() {
        resetPointerInputHandler()
    }

    // The handler for incoming pointer input events needs to be reset if the view configuration
    // changes.
    override fun onViewConfigurationChange() {
        resetPointerInputHandler()
    }

    /**
     * This cancels the existing coroutine and essentially resets pointerInputEventHandler's
     * execution. Note, the pointerInputEventHandler still executes lazily, meaning nothing will be
     * done again until a new event comes in. More details: This is triggered from a LayoutNode if
     * the Density or ViewConfiguration change (in an older implementation using composed, these
     * values were used as keys so it would reset everything when either change, we do that manually
     * now through this function). It is also used for testing.
     */
    override fun resetPointerInputHandler() {
        val localJob = pointerInputJob
        if (localJob != null) {
            localJob.cancel(PointerInputResetException())
            pointerInputJob = null
        }
    }


Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 631–665)

    internal fun update(
        key1: Any?,
        key2: Any?,
        keys: Array<out Any?>?,
        pointerInputEventHandler: PointerInputEventHandler,
    ) {
        var needsReset = false

        // key1
        if (this.key1 != key1) {
            needsReset = true
        }
        this.key1 = key1

        // key2
        if (this.key2 != key2) {
            needsReset = true
        }
        this.key2 = key2

        // keys
        if (this.keys != null && keys == null) {
            needsReset = true
        }
        if (this.keys == null && keys != null) {
            needsReset = true
        }
        if (this.keys != null && keys != null && !keys.contentEquals(this.keys)) {
            needsReset = true
        }
        this.keys = keys

        // Lambda literals will have a new instance every time they are executed (even if it is from
        // the same code location), so we can not use them as a comparison mechanism to avoid
        // restarting pointer input handlers when they are functionally the same. However, we can

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 666–700)

        // get around this by using a SAM interface and a class comparison instead. (Even though the
        // instances are different, they will have the same class type.)
        if (this.pointerInputEventHandler::class != pointerInputEventHandler::class) {
            needsReset = true
        }

        // Only reset when keys have changed or pointerInputEventHandler is called from a different
        // call site (determined by class comparison).
        if (needsReset) {
            resetPointerInputHandler()
        }
        _pointerInputEventHandler = pointerInputEventHandler
    }

    /**
     * Snapshot the current [pointerHandlers] and run [block] on each one. May not be called
     * reentrant or concurrent with itself.
     *
     * Dispatches from first to last registered for [PointerEventPass.Initial] and
     * [PointerEventPass.Final]; dispatches from last to first for [PointerEventPass.Main]. This
     * corresponds to the down/up/down dispatch behavior of each of these passes along the hit test
     * path through the Compose UI layout hierarchy.
     */
    private inline fun forEachCurrentPointerHandler(
        pass: PointerEventPass,
        block: (SuspendingPointerInputModifierNodeImpl.PointerEventHandlerCoroutine<*>) -> Unit,
    ) {
        // Copy handlers to avoid mutating the collection during dispatch
        synchronized(pointerHandlersLock) { dispatchingPointerHandlers.addAll(pointerHandlers) }
        try {
            when (pass) {
                PointerEventPass.Initial,
                PointerEventPass.Final -> dispatchingPointerHandlers.forEach(block)
                PointerEventPass.Main -> dispatchingPointerHandlers.forEachReversed(block)
            }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 701–735)

        } finally {
            dispatchingPointerHandlers.clear()
        }
    }

    /**
     * Dispatch [pointerEvent] for [pass] to all [pointerHandlers] currently registered when the
     * call begins.
     */
    private fun dispatchPointerEvent(pointerEvent: PointerEvent, pass: PointerEventPass) {
        forEachCurrentPointerHandler(pass) { it.offerPointerEvent(pointerEvent, pass) }
    }

    override fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,
    ) {
        boundsSize = bounds
        if (pass == PointerEventPass.Initial) {
            currentEvent = pointerEvent
        }

        // Coroutine lazily launches when first event comes in.
        if (pointerInputJob == null) {
            // 'start = CoroutineStart.UNDISPATCHED' required so handler doesn't miss first event.
            pointerInputJob =
                coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                    if (_deprecatedPointerInputHandler != null) {
                        _deprecatedPointerInputHandler!!()
                    } else {
                        with(pointerInputEventHandler) { invoke() }
                    }
                }
        }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 71–105)

    public val size: IntSize

    /*
     * The additional space applied to each side of the layout area. This can be
     * non-[zero][Size.Zero] when `minimumTouchTargetSize` is set in [pointerInput].
     */
    public val extendedTouchPadding: Size
        get() = Size.Zero

    /** The [PointerEvent] from the most recent touch event. */
    public val currentEvent: PointerEvent

    /** The [ViewConfiguration] used to tune gesture detectors. */
    public val viewConfiguration: ViewConfiguration

    /**
     * Suspend until a [PointerEvent] is reported to the specified input [pass]. [pass] defaults to
     * [PointerEventPass.Main].
     *
     * [awaitPointerEvent] resumes **synchronously** in the restricted suspension scope. This means
     * that callers can react immediately to input after [awaitPointerEvent] returns and affect both
     * the current frame and the next handler or phase of the input processing pipeline. Callers
     * should mutate the returned [PointerEvent] before awaiting another event to consume aspects of
     * the event before the next stage of input processing runs.
     */
    public suspend fun awaitPointerEvent(
        pass: PointerEventPass = PointerEventPass.Main
    ): PointerEvent

    /**
     * Runs [block] and returns the result of [block] or `null` if [timeMillis] has passed before
     * [timeMillis].
     */
    public suspend fun <T> withTimeoutOrNull(
        timeMillis: Long,

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 736–770)


        dispatchPointerEvent(pointerEvent, pass)

        lastPointerEvent = pointerEvent.takeIf { event ->
            !event.changes.fastAll { it.changedToUpIgnoreConsumed() }
        }
    }

    override fun onCancelPointerInput() {
        // Synthesize a cancel event for whatever state we previously saw, if one is applicable.
        // A cancel event is one where all previously down pointers are now up, the change in
        // down-ness is consumed. Any pointers that were previously hovering are left unchanged.
        val lastEvent = lastPointerEvent ?: return

        if (lastEvent.changes.fastAll { !it.pressed }) {
            return // There aren't any pressed pointers, so we don't need to send any events.
        }
        val newChanges =
            lastEvent.changes.fastMapNotNull { old ->
                PointerInputChange(
                    id = old.id,
                    position = old.position,
                    uptimeMillis = old.uptimeMillis,
                    pressed = false,
                    pressure = old.pressure,
                    previousPosition = old.position,
                    previousUptimeMillis = old.uptimeMillis,
                    previousPressed = old.pressed,
                    isInitiallyConsumed = old.pressed,
                    type = old.type,
                )
            }

        val cancelEvent = PointerEvent(newChanges)


Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 771–805)

        currentEvent = cancelEvent
        // Dispatch the synthetic cancel for all three passes
        dispatchPointerEvent(cancelEvent, PointerEventPass.Initial)
        dispatchPointerEvent(cancelEvent, PointerEventPass.Main)
        dispatchPointerEvent(cancelEvent, PointerEventPass.Final)

        lastPointerEvent = null
    }

    override suspend fun <R> awaitPointerEventScope(
        block: suspend AwaitPointerEventScope.() -> R
    ): R = suspendCancellableCoroutine { continuation ->
        val handlerCoroutine = PointerEventHandlerCoroutine(continuation)
        synchronized(pointerHandlersLock) {
            pointerHandlers += handlerCoroutine

            // NOTE: We resume the new continuation while holding this lock.
            // We do this since it runs in a RestrictsSuspension scope and therefore
            // will only suspend when awaiting a new event. We don't release this
            // synchronized lock until we know it has an awaiter and any future dispatch
            // would succeed.

            // We also create the coroutine with both a receiver and a completion continuation
            // of the handlerCoroutine itself; we don't use our currently available suspended
            // continuation as the resume point because handlerCoroutine needs to remove the
            // ContinuationInterceptor from the supplied CoroutineContext to have un-dispatched
            // behavior in our restricted suspension scope. This is required so that we can
            // process event-awaits synchronously and affect the next stage in the pipeline
            // without running too late due to dispatch.
            block.createCoroutine(handlerCoroutine, handlerCoroutine).resume(Unit)
        }

        // Restricted suspension handler coroutines can't propagate structured job cancellation
        // automatically as the context must be EmptyCoroutineContext; do it manually instead.
        continuation.invokeOnCancellation { handlerCoroutine.cancel(it) }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 806–840)

    }

    /**
     * Implementation of the inner coroutine created to run a single call to
     * [awaitPointerEventScope].
     *
     * [PointerEventHandlerCoroutine] implements [AwaitPointerEventScope] to provide the input
     * handler DSL, and [Continuation] so that it can wrap [completion] and remove the
     * [ContinuationInterceptor] from the calling context and run un-dispatched.
     */
    private inner class PointerEventHandlerCoroutine<R>(private val completion: Continuation<R>) :
        AwaitPointerEventScope,
        Density by this@SuspendingPointerInputModifierNodeImpl,
        Continuation<R> {

        private var pointerAwaiter: CancellableContinuation<PointerEvent>? = null
        private var awaitPass: PointerEventPass = PointerEventPass.Main

        override val currentEvent: PointerEvent
            get() = this@SuspendingPointerInputModifierNodeImpl.currentEvent

        override val size: IntSize
            get() = this@SuspendingPointerInputModifierNodeImpl.boundsSize

        override val viewConfiguration: ViewConfiguration
            get() = this@SuspendingPointerInputModifierNodeImpl.viewConfiguration

        override val extendedTouchPadding: Size
            get() = this@SuspendingPointerInputModifierNodeImpl.extendedTouchPadding

        fun offerPointerEvent(event: PointerEvent, pass: PointerEventPass) {
            if (pass == awaitPass) {
                pointerAwaiter?.run {
                    pointerAwaiter = null
                    resume(event)

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 841–875)

                }
            }
        }

        // Called to run any finally blocks in the awaitPointerEventScope block
        fun cancel(cause: Throwable?) {
            pointerAwaiter?.cancel(cause)
            pointerAwaiter = null
        }

        // context must be EmptyCoroutineContext for restricted suspension coroutines
        override val context: CoroutineContext = EmptyCoroutineContext

        // Implementation of Continuation; clean up and resume our wrapped continuation.
        override fun resumeWith(result: Result<R>) {
            synchronized(pointerHandlersLock) { pointerHandlers -= this }
            completion.resumeWith(result)
        }

        override suspend fun awaitPointerEvent(pass: PointerEventPass): PointerEvent =
            suspendCancellableCoroutine { continuation ->
                awaitPass = pass
                pointerAwaiter = continuation
            }

        override suspend fun <T> withTimeoutOrNull(
            timeMillis: Long,
            block: suspend AwaitPointerEventScope.() -> T,
        ): T? {
            return try {
                withTimeout(timeMillis, block)
            } catch (_: PointerEventTimeoutCancellationException) {
                null
            }
        }

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 876–910)


        override suspend fun <T> withTimeout(
            timeMillis: Long,
            block: suspend AwaitPointerEventScope.() -> T,
        ): T {
            if (timeMillis <= 0L) {
                pointerAwaiter?.resumeWithException(
                    PointerEventTimeoutCancellationException(timeMillis)
                )
            }

            val job = coroutineScope.launch {
                // Delay twice because the timeout continuation needs to be lower-priority than
                // input events, not treated fairly in FIFO order. The second
                // micro-delay reposts it to the back of the queue, after any input events
                // that were posted but not processed during the first delay.
                delay(timeMillis - WITH_TIMEOUT_MICRO_DELAY_MILLIS)
                delay(WITH_TIMEOUT_MICRO_DELAY_MILLIS)

                pointerAwaiter?.resumeWithException(
                    PointerEventTimeoutCancellationException(timeMillis)
                )
            }
            try {
                return block()
            } finally {
                job.cancel(CancelTimeoutCancellationException)
            }
        }
    }
}

/**
 * An exception thrown from [AwaitPointerEventScope.withTimeout] when the execution time of the
 * coroutine is too long.

Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)

## androidx.compose.ui.input.pointer SuspendingPointerInputFilter.kt source (lines 911–928)

 */
public expect class PointerEventTimeoutCancellationException(time: Long) : CancellationException

/**
 * Used in place of the standard Job cancellation pathway to avoid reflective javaClass.simpleName
 * lookups to build the exception message and stack trace collection. Remove if these are changed in
 * kotlinx.coroutines.
 */
internal class PointerInputResetException() :
    PlatformOptimizedCancellationException("Pointer input was reset")

/**
 * Also used in place of standard Job cancellation pathway; since we control this code path we
 * shouldn't need to worry about other code calling addSuppressed on this exception so a singleton
 * instance is used
 */
internal object CancelTimeoutCancellationException : PlatformOptimizedCancellationException()


Sources: [live-androidx-ui-ui-ui-input-pointer-suspendingpointerinputfilter-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/input/pointer/SuspendingPointerInputFilter.kt)
