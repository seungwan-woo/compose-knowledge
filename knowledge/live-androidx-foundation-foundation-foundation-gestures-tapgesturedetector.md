---
type: reference
title: androidx.compose.foundation.gestures TapGestureDetector.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 1
    endLine: 35
    sha256: 22b868691087d334eb3f5400e36d00d83c258371324e210a4c0e4747bf27798e
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

      package androidx.compose.foundation.gestures

      import androidx.compose.foundation.ExperimentalFoundationApi
      import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.input.pointer.AwaitPointerEventScope
      import androidx.compose.ui.input.pointer.PointerEvent
      import androidx.compose.ui.input.pointer.PointerEventPass
      import androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
      import androidx.compose.ui.input.pointer.PointerInputChange
      import androidx.compose.ui.input.pointer.PointerInputScope
      import androidx.compose.ui.input.pointer.PointerType
      import androidx.compose.ui.input.pointer.changedToDown
      import androidx.compose.ui.input.pointer.changedToDownIgnoreConsumed
      import androidx.compose.ui.input.pointer.changedToUp
      import androidx.compose.ui.input.pointer.isOutOfBounds
      import androidx.compose.ui.input.pointer.isPrimaryPressed
      import androidx.compose.ui.platform.ViewConfiguration
      import androidx.compose.ui.unit.Density
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 106
    endLine: 140
    sha256: 5adcbbce669a0e89824b557670b1ef0fc4143c5c91722f0e1db086fe9cf3aaaf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  scope = this@coroutineScope,
                  pressScope = pressScope,
                  onDoubleTap = onDoubleTap,
                  onLongPress = onLongPress,
                  onPress = onPress,
                  onTap = onTap,
              )
          }
      }

      /**
       * Detects a single tap, double-tap, and long press gesture and calls [onTap], [onDoubleTap], and
       * [onLongPress], respectively, when detected. This should be called in a loop such as
       * [awaitEachGesture] to continually listen for multiple gestures.
       *
       * @see detectTapGestures
       */
      internal suspend fun AwaitPointerEventScope.processTapGesture(
          scope: CoroutineScope,
          pressScope: PressGestureScopeImpl,
          onDoubleTap: ((Offset) -> Unit)?,
          onLongPress: ((Offset) -> Unit)?,
          onPress: suspend PressGestureScope.(Offset) -> Unit,
          onTap: ((Offset) -> Unit)?,
      ) {
          val down = awaitFirstDown()
          down.consume()

          var resetJob = scope.launch(start = CoroutineStart.UNDISPATCHED) { pressScope.reset() }
          if (onPress !== NoPressGesture)
              scope.launchAwaitingReset(resetJob) { pressScope.onPress(down.position) }
          val upOrCancel: PointerInputChange?
          val cancelOrReleaseJob: Job?

          // wait for first tap up or long press
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 141
    endLine: 175
    sha256: 70f00fca8397f7693926f0ade7d8440822dbeca30d9c180e1589ea00800d2cd4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          if (onLongPress == null) {
              upOrCancel = waitForUpOrCancellation()
          } else {
              upOrCancel =
                  when (val longPressResult = waitForLongPress()) {
                      LongPressResult.Success -> {
                          onLongPress.invoke(down.position)
                          consumeUntilUp()
                          scope.launchAwaitingReset(resetJob) { pressScope.release() }
                          // End the current gesture
                          return
                      }

                      is LongPressResult.Released -> longPressResult.finalUpChange
                      is LongPressResult.Canceled -> null
                  }
          }

          if (upOrCancel == null) {
              cancelOrReleaseJob =
                  scope.launchAwaitingReset(resetJob) {
                      // tap-up was canceled
                      pressScope.cancel()
                  }
          } else {
              upOrCancel.consume()
              cancelOrReleaseJob = scope.launchAwaitingReset(resetJob) { pressScope.release() }
          }

          if (upOrCancel != null) {
              // tap was successful.
              if (onDoubleTap == null) {
                  onTap?.invoke(upOrCancel.position) // no need to check for double-tap.
              } else {
                  // check for second tap
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 176
    endLine: 210
    sha256: da7a93866fe8bda9e878b13dd5ad2c15eb29fd2963af93d9efe9676e54a9f6f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val secondDown = awaitSecondDown(upOrCancel)

                  if (secondDown == null) {
                      onTap?.invoke(upOrCancel.position) // no valid second tap started
                  } else {
                      // Second tap down detected
                      resetJob =
                          scope.launch(start = CoroutineStart.UNDISPATCHED) {
                              cancelOrReleaseJob.join()
                              pressScope.reset()
                          }
                      if (onPress !== NoPressGesture) {
                          scope.launchAwaitingReset(resetJob) { pressScope.onPress(secondDown.position) }
                      }

                      // Might have a long second press as the second tap
                      val secondUp =
                          if (onLongPress == null) {
                              waitForUpOrCancellation()
                          } else {
                              when (val longPressResult = waitForLongPress()) {
                                  LongPressResult.Success -> {
                                      // The first tap was valid, but the second tap is a long press -
                                      // we
                                      // intentionally do not invoke onClick() for the first tap,
                                      // since the 'main'
                                      // gesture here is a long press, which canceled the double tap
                                      // / tap.

                                      // notify for the long press
                                      onLongPress.invoke(secondDown.position)
                                      consumeUntilUp()

                                      scope.launchAwaitingReset(resetJob) { pressScope.release() }
                                      return
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 211
    endLine: 245
    sha256: da0608a835502fed8193e3e7672d09b58805ca3ea783cfb227501892a57f9e2e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  }

                                  is LongPressResult.Released -> longPressResult.finalUpChange
                                  is LongPressResult.Canceled -> null
                              }
                          }
                      if (secondUp != null) {
                          secondUp.consume()
                          scope.launchAwaitingReset(resetJob) { pressScope.release() }
                          onDoubleTap(secondUp.position)
                      } else {
                          scope.launchAwaitingReset(resetJob) { pressScope.cancel() }
                          onTap?.invoke(upOrCancel.position)
                      }
                  }
              }
          }
      }

      /**
       * Consumes all pointer events until nothing is pressed and then returns. This method assumes that
       * something is currently pressed.
       */
      private suspend fun AwaitPointerEventScope.consumeUntilUp() {
          do {
              val event = awaitPointerEvent()
              event.changes.fastForEach { it.consume() }
          } while (event.changes.fastAny { it.pressed })
      }

      /**
       * Waits for [ViewConfiguration.doubleTapTimeoutMillis] for a second press event. If a second press
       * event is received before the time out, it is returned or `null` is returned if no second press is
       * received.
       */
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 246
    endLine: 280
    sha256: 9bb88e048d1e6c4d2c61ed16518840392738dcdc028963ed1507ca5e18926c2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private suspend fun AwaitPointerEventScope.awaitSecondDown(
          firstUp: PointerInputChange
      ): PointerInputChange? =
          withTimeoutOrNull(viewConfiguration.doubleTapTimeoutMillis) {
              val minUptime = firstUp.uptimeMillis + viewConfiguration.doubleTapMinTimeMillis
              var change: PointerInputChange
              // The second tap doesn't count if it happens before DoubleTapMinTime of the first tap
              do {
                  change = awaitFirstDown()
              } while (change.uptimeMillis < minUptime)
              change
          }

      /**
       * Shortcut for cases when we only need to get press/click logic, as for cases without long press
       * and double click we don't require channelling or any other complications.
       *
       * Each function parameter receives an [Offset] representing the position relative to the containing
       * element. The [Offset] can be outside the actual bounds of the element itself meaning the numbers
       * can be negative or larger than the element bounds if the touch target is smaller than the
       * [ViewConfiguration.minimumTouchTargetSize].
       */
      internal suspend fun PointerInputScope.detectTapAndPress(
          onPress: suspend PressGestureScope.(Offset) -> Unit = NoPressGesture,
          onTap: ((Offset) -> Unit)? = null,
      ) {
          val pressScope = PressGestureScopeImpl(this)
          coroutineScope {
              awaitEachGesture {
                  val resetJob = launch(start = CoroutineStart.UNDISPATCHED) { pressScope.reset() }

                  val down = awaitFirstDown().also { it.consume() }

                  if (onPress !== NoPressGesture) {
                      launchAwaitingReset(resetJob) { pressScope.onPress(down.position) }
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 281
    endLine: 315
    sha256: 2bfa0261defe95af93689c1e90c8c5ede675e7c3d22bbde6115865e039a679af
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }

                  val up = waitForUpOrCancellation()
                  if (up == null) {
                      launchAwaitingReset(resetJob) {
                          // tap-up was canceled
                          pressScope.cancel()
                      }
                  } else {
                      up.consume()
                      launchAwaitingReset(resetJob) { pressScope.release() }
                      onTap?.invoke(up.position)
                  }
              }
          }
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with PointerEventPass instead.",
          level = DeprecationLevel.HIDDEN,
      )
      public suspend fun AwaitPointerEventScope.awaitFirstDown(
          requireUnconsumed: Boolean = true
      ): PointerInputChange =
          awaitFirstDown(requireUnconsumed = requireUnconsumed, pass = PointerEventPass.Main)

      /**
       * Reads events until the first down is received in the given [pass]. If [requireUnconsumed] is
       * `true` and the first down is already consumed in the pass, that gesture is ignored.
       */
      public suspend fun AwaitPointerEventScope.awaitFirstDown(
          requireUnconsumed: Boolean = true,
          pass: PointerEventPass = PointerEventPass.Main,
      ): PointerInputChange {
          return awaitFirstDownImpl(
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 316
    endLine: 350
    sha256: 64a70420bd4780486fa8326a26a55a1caf07891c39a38d4aa1f71c2cdef80e45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              requireUnconsumed = requireUnconsumed,
              pass = pass,
              onlyPrimaryMouseButton = firstDownRefersToPrimaryMouseButtonOnly(),
          )
      }

      // TODO(b/384562201): Remove once [awaitFirstDown] will be aligned for all platforms and have this
      // behavior.
      internal suspend fun AwaitPointerEventScope.awaitPrimaryFirstDown(
          requireUnconsumed: Boolean = true,
          pass: PointerEventPass = PointerEventPass.Main,
      ): PointerInputChange {
          return awaitFirstDownImpl(
              requireUnconsumed = requireUnconsumed,
              pass = pass,
              onlyPrimaryMouseButton = true,
          )
      }

      private suspend fun AwaitPointerEventScope.awaitFirstDownImpl(
          requireUnconsumed: Boolean = true,
          pass: PointerEventPass = PointerEventPass.Main,
          onlyPrimaryMouseButton: Boolean,
      ): PointerInputChange {
          var event: PointerEvent
          do {
              event = awaitPointerEvent(pass)
          } while (!event.isChangedToDown(requireUnconsumed, onlyPrimaryMouseButton))
          return event.changes[0]
      }

      /**
       * Whether [AwaitPointerEventScope.awaitFirstDown], for mouse events, responds only to the primary
       * mouse button being pressed. The behavior currently differs between Android and Desktop, and
       * eventually this needs to be aligned (b/384562201).
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 351
    endLine: 385
    sha256: 4eed7c66d665c79d6ec7e22a373f104d307047719eb76370a492286e3c66b529
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      internal expect fun firstDownRefersToPrimaryMouseButtonOnly(): Boolean

      internal fun PointerEvent.isChangedToDown(
          requireUnconsumed: Boolean,
          onlyPrimaryMouseButton: Boolean = firstDownRefersToPrimaryMouseButtonOnly(),
      ): Boolean {
          val onlyPrimaryButtonCausesDown =
              onlyPrimaryMouseButton && changes.fastAll { it.type == PointerType.Mouse }
          if (onlyPrimaryButtonCausesDown && !buttons.isPrimaryPressed) return false

          return changes.fastAll {
              if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed()
          }
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with PointerEventPass instead.",
          level = DeprecationLevel.HIDDEN,
      )
      public suspend fun AwaitPointerEventScope.waitForUpOrCancellation(): PointerInputChange? =
          waitForUpOrCancellation(PointerEventPass.Main)

      /**
       * Whether the event is considered a deep press, and should trigger long click before the timeout
       * has been reached.
       */
      internal expect val PointerEvent.isDeepPress: Boolean

      /**
       * Reads events in the given [pass] until all pointers are up or the gesture was canceled. The
       * gesture is considered canceled when a pointer leaves the event region, a position change has been
       * consumed or a pointer down change event was already consumed in the given pass. If the gesture
       * was not canceled, the final up change is returned or `null` if the event was canceled.
       */
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 36
    endLine: 70
    sha256: 3e30dc559833bf4f4720eac1275eda5e941610fe22f4cc597c43e0cc97c5023d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.util.fastAll
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastForEach
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.coroutineScope
      import kotlinx.coroutines.launch
      import kotlinx.coroutines.sync.Mutex

      /**
       * Receiver scope for [detectTapGestures]'s `onPress` lambda. This offers two methods to allow
       * waiting for the press to be released.
       */
      @JvmDefaultWithCompatibility
      public interface PressGestureScope : Density {
          /**
           * Waits for the press to be released before returning. If the gesture was canceled by motion
           * being consumed by another gesture, [GestureCancellationException] will be thrown.
           */
          public suspend fun awaitRelease()

          /**
           * Waits for the press to be released before returning. If the press was released, `true` is
           * returned, or if the gesture was canceled by motion being consumed by another gesture, `false`
           * is returned.
           */
          public suspend fun tryAwaitRelease(): Boolean
      }

      private val NoPressGesture: suspend PressGestureScope.(Offset) -> Unit = {}

      /**
       * Detects tap, double-tap, and long press gestures and calls [onTap], [onDoubleTap], and
       * [onLongPress], respectively, when detected. [onPress] is called when the press is detected and
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 386
    endLine: 420
    sha256: a19076970352c9eff7dc00be7080a485feb1c0375f47ca173229b50008aad610
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public suspend fun AwaitPointerEventScope.waitForUpOrCancellation(
          pass: PointerEventPass = PointerEventPass.Main
      ): PointerInputChange? {
          while (true) {
              val event = awaitPointerEvent(pass)
              if (event.changes.fastAll { it.changedToUp() }) {
                  // All pointers are up
                  return event.changes[0]
              }

              if (
                  event.changes.fastAny { it.isConsumed || it.isOutOfBounds(size, extendedTouchPadding) }
              ) {
                  return null // Canceled
              }

              // Check for cancel by position consumption. We can look on the Final pass of the
              // existing pointer event because it comes after the pass we checked above.
              val consumeCheck = awaitPointerEvent(PointerEventPass.Final)
              if (consumeCheck.changes.fastAny { it.isConsumed }) {
                  return null
              }
          }
      }

      /**
       * Reads events in the given [pass] until all pointers are up or the gesture was canceled. The
       * gesture is considered canceled when a pointer leaves the event region, a position change has been
       * consumed or a pointer down change event was already consumed in the given pass. If the gesture
       * was not canceled, the final up change is returned or `null` if the event was canceled.
       */
      internal suspend fun AwaitPointerEventScope.waitForLongPress(
          pass: PointerEventPass = PointerEventPass.Main
      ): LongPressResult {
          var result: LongPressResult = LongPressResult.Canceled
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 421
    endLine: 455
    sha256: e3354abddb57b302272a9a85288552a48a06666626b5cde5e9e8c272eeb55f35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          try {
              withTimeout(viewConfiguration.longPressTimeoutMillis) {
                  while (true) {
                      val event = awaitPointerEvent(pass)
                      if (event.changes.fastAll { it.changedToUp() }) {
                          // All pointers are up
                          result = LongPressResult.Released(event.changes[0])
                          break
                      }

                      if (event.isDeepPress) {
                          result = LongPressResult.Success
                          break
                      }

                      if (
                          event.changes.fastAny {
                              it.isConsumed || it.isOutOfBounds(size, extendedTouchPadding)
                          }
                      ) {
                          result = LongPressResult.Canceled
                          break
                      }

                      // Check for cancel by position consumption. We can look on the Final pass of the
                      // existing pointer event because it comes after the pass we checked above.
                      val consumeCheck = awaitPointerEvent(PointerEventPass.Final)
                      if (consumeCheck.changes.fastAny { it.isConsumed }) {
                          result = LongPressResult.Canceled
                          break
                      }
                  }
              }
          } catch (_: PointerEventTimeoutCancellationException) {
              return LongPressResult.Success
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 456
    endLine: 490
    sha256: d00a37b2e8ffcaab7214070408b27aa61ee505ad40175f9a85201079ce1e077f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
          return result
      }

      internal sealed class LongPressResult {
          /** Long press was triggered */
          object Success : LongPressResult()

          /** All pointers were released without long press being triggered */
          class Released(val finalUpChange: PointerInputChange) : LongPressResult()

          /** The gesture was canceled */
          object Canceled : LongPressResult()
      }

      /**
       * Launch a coroutine in [this] [CoroutineScope] with the specified [start]. Await the [resetJob]
       * and then execute the [block]. [start] will be [CoroutineStart.UNDISPATCHED].
       *
       * In some cases, coroutine cancellation of the reset job might still be processing when we are
       * already processing an up or cancel pointer event. We need to wait for the reset job to cancel and
       * complete so it can clean up properly (e.g. unlock the underlying mutex)
       */
      @OptIn(ExperimentalFoundationApi::class)
      private fun CoroutineScope.launchAwaitingReset(
          resetJob: Job,
          start: CoroutineStart = CoroutineStart.UNDISPATCHED,
          block: suspend CoroutineScope.() -> Unit,
      ): Job =
          launch(start = start) {
              resetJob.join()
              block()
          }

      /** [detectTapGestures]'s implementation of [PressGestureScope]. */
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 491
    endLine: 525
    sha256: 18f536c3c8cd578002c226007c850fb45198deda2715286d6303e3feb0d32945
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      internal class PressGestureScopeImpl(density: Density) : PressGestureScope, Density by density {
          private var isReleased = false
          private var isCanceled = false
          private val mutex = Mutex(locked = false)

          /** Called when a gesture has been canceled. */
          fun cancel() {
              isCanceled = true
              if (mutex.isLocked) {
                  mutex.unlock()
              }
          }

          /** Called when all pointers are up. */
          fun release() {
              isReleased = true
              if (mutex.isLocked) {
                  mutex.unlock()
              }
          }

          /** Called when a new gesture has started. */
          suspend fun reset() {
              mutex.lock()
              isReleased = false
              isCanceled = false
          }

          override suspend fun awaitRelease() {
              if (!tryAwaitRelease()) {
                  throw GestureCancellationException("The press gesture was canceled.")
              }
          }

          override suspend fun tryAwaitRelease(): Boolean {
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 526
    endLine: 533
    sha256: 69dca5b681c1b707273144240aaaadef67b8320089ebfb6819b0d3ecc234a1e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              if (!isReleased && !isCanceled) {
                  mutex.lock()
                  mutex.unlock()
              }
              return isReleased
          }
      }
  - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt
    startLine: 71
    endLine: 105
    sha256: a645ec6211a84869f2ac02e9871699103aac4b74956d51f02ab5ca8b8707b960
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the [PressGestureScope.tryAwaitRelease] and [PressGestureScope.awaitRelease] can be used to
       * detect when pointers have released or the gesture was canceled. The first pointer down and final
       * pointer up are consumed, and in the case of long press, all changes after the long press is
       * detected are consumed.
       *
       * Each function parameter receives an [Offset] representing the position relative to the containing
       * element. The [Offset] can be outside the actual bounds of the element itself meaning the numbers
       * can be negative or larger than the element bounds if the touch target is smaller than the
       * [ViewConfiguration.minimumTouchTargetSize].
       *
       * When [onDoubleTap] is provided, the tap gesture is detected only after the
       * [ViewConfiguration.doubleTapMinTimeMillis] has passed and [onDoubleTap] is called if the second
       * tap is started before [ViewConfiguration.doubleTapTimeoutMillis]. If [onDoubleTap] is not
       * provided, then [onTap] is called when the pointer up has been received.
       *
       * After the initial [onPress], if the pointer moves out of the input area, the position change is
       * consumed, or another gesture consumes the down or up events, the gestures are considered
       * canceled. That means [onDoubleTap], [onLongPress], and [onTap] will not be called after a gesture
       * has been canceled.
       *
       * If the first down event is consumed somewhere else, the entire gesture will be skipped, including
       * [onPress].
       */
      public suspend fun PointerInputScope.detectTapGestures(
          onDoubleTap: ((Offset) -> Unit)? = null,
          onLongPress: ((Offset) -> Unit)? = null,
          onPress: suspend PressGestureScope.(Offset) -> Unit = NoPressGesture,
          onTap: ((Offset) -> Unit)? = null,
      ): Unit = coroutineScope {
          // special signal to indicate to the sending side that it shouldn't intercept and consume
          // cancel/up events as we're only require down events
          val pressScope = PressGestureScopeImpl(this@detectTapGestures)

          awaitEachGesture {
              processTapGesture(
compose:
  id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.gestures
  sections:
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-1
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-106
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
        - androidx.compose.foundation.gestures.detectTapGestures
        - androidx.compose.foundation.gestures.awaitFirstDown
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-141
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.gestures.waitForUpOrCancellation
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-176
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.gestures.waitForUpOrCancellation
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-211
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-246
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
        - androidx.compose.foundation.gestures.awaitFirstDown
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-281
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.gestures.awaitFirstDown
        - androidx.compose.foundation.gestures.waitForUpOrCancellation
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-316
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.gestures.awaitFirstDown
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-351
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.gestures.waitForUpOrCancellation
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-36
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-386
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 386–420)
      aliases:
        - androidx.compose.foundation.gestures.waitForUpOrCancellation
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-421
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-456
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 456–490)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-491
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 491–525)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-526
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 526–533)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71
      title: androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.gestures.PressGestureScope
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.gestures TapGestureDetector.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 1–35)

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

package androidx.compose.foundation.gestures

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.pointer.AwaitPointerEventScope
import androidx.compose.ui.input.pointer.PointerEvent
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerEventTimeoutCancellationException
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.PointerInputScope
import androidx.compose.ui.input.pointer.PointerType
import androidx.compose.ui.input.pointer.changedToDown
import androidx.compose.ui.input.pointer.changedToDownIgnoreConsumed
import androidx.compose.ui.input.pointer.changedToUp
import androidx.compose.ui.input.pointer.isOutOfBounds
import androidx.compose.ui.input.pointer.isPrimaryPressed
import androidx.compose.ui.platform.ViewConfiguration
import androidx.compose.ui.unit.Density

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 106–140)

            scope = this@coroutineScope,
            pressScope = pressScope,
            onDoubleTap = onDoubleTap,
            onLongPress = onLongPress,
            onPress = onPress,
            onTap = onTap,
        )
    }
}

/**
 * Detects a single tap, double-tap, and long press gesture and calls [onTap], [onDoubleTap], and
 * [onLongPress], respectively, when detected. This should be called in a loop such as
 * [awaitEachGesture] to continually listen for multiple gestures.
 *
 * @see detectTapGestures
 */
internal suspend fun AwaitPointerEventScope.processTapGesture(
    scope: CoroutineScope,
    pressScope: PressGestureScopeImpl,
    onDoubleTap: ((Offset) -> Unit)?,
    onLongPress: ((Offset) -> Unit)?,
    onPress: suspend PressGestureScope.(Offset) -> Unit,
    onTap: ((Offset) -> Unit)?,
) {
    val down = awaitFirstDown()
    down.consume()

    var resetJob = scope.launch(start = CoroutineStart.UNDISPATCHED) { pressScope.reset() }
    if (onPress !== NoPressGesture)
        scope.launchAwaitingReset(resetJob) { pressScope.onPress(down.position) }
    val upOrCancel: PointerInputChange?
    val cancelOrReleaseJob: Job?

    // wait for first tap up or long press

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 141–175)

    if (onLongPress == null) {
        upOrCancel = waitForUpOrCancellation()
    } else {
        upOrCancel =
            when (val longPressResult = waitForLongPress()) {
                LongPressResult.Success -> {
                    onLongPress.invoke(down.position)
                    consumeUntilUp()
                    scope.launchAwaitingReset(resetJob) { pressScope.release() }
                    // End the current gesture
                    return
                }

                is LongPressResult.Released -> longPressResult.finalUpChange
                is LongPressResult.Canceled -> null
            }
    }

    if (upOrCancel == null) {
        cancelOrReleaseJob =
            scope.launchAwaitingReset(resetJob) {
                // tap-up was canceled
                pressScope.cancel()
            }
    } else {
        upOrCancel.consume()
        cancelOrReleaseJob = scope.launchAwaitingReset(resetJob) { pressScope.release() }
    }

    if (upOrCancel != null) {
        // tap was successful.
        if (onDoubleTap == null) {
            onTap?.invoke(upOrCancel.position) // no need to check for double-tap.
        } else {
            // check for second tap

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 176–210)

            val secondDown = awaitSecondDown(upOrCancel)

            if (secondDown == null) {
                onTap?.invoke(upOrCancel.position) // no valid second tap started
            } else {
                // Second tap down detected
                resetJob =
                    scope.launch(start = CoroutineStart.UNDISPATCHED) {
                        cancelOrReleaseJob.join()
                        pressScope.reset()
                    }
                if (onPress !== NoPressGesture) {
                    scope.launchAwaitingReset(resetJob) { pressScope.onPress(secondDown.position) }
                }

                // Might have a long second press as the second tap
                val secondUp =
                    if (onLongPress == null) {
                        waitForUpOrCancellation()
                    } else {
                        when (val longPressResult = waitForLongPress()) {
                            LongPressResult.Success -> {
                                // The first tap was valid, but the second tap is a long press -
                                // we
                                // intentionally do not invoke onClick() for the first tap,
                                // since the 'main'
                                // gesture here is a long press, which canceled the double tap
                                // / tap.

                                // notify for the long press
                                onLongPress.invoke(secondDown.position)
                                consumeUntilUp()

                                scope.launchAwaitingReset(resetJob) { pressScope.release() }
                                return

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 211–245)

                            }

                            is LongPressResult.Released -> longPressResult.finalUpChange
                            is LongPressResult.Canceled -> null
                        }
                    }
                if (secondUp != null) {
                    secondUp.consume()
                    scope.launchAwaitingReset(resetJob) { pressScope.release() }
                    onDoubleTap(secondUp.position)
                } else {
                    scope.launchAwaitingReset(resetJob) { pressScope.cancel() }
                    onTap?.invoke(upOrCancel.position)
                }
            }
        }
    }
}

/**
 * Consumes all pointer events until nothing is pressed and then returns. This method assumes that
 * something is currently pressed.
 */
private suspend fun AwaitPointerEventScope.consumeUntilUp() {
    do {
        val event = awaitPointerEvent()
        event.changes.fastForEach { it.consume() }
    } while (event.changes.fastAny { it.pressed })
}

/**
 * Waits for [ViewConfiguration.doubleTapTimeoutMillis] for a second press event. If a second press
 * event is received before the time out, it is returned or `null` is returned if no second press is
 * received.
 */

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 246–280)

private suspend fun AwaitPointerEventScope.awaitSecondDown(
    firstUp: PointerInputChange
): PointerInputChange? =
    withTimeoutOrNull(viewConfiguration.doubleTapTimeoutMillis) {
        val minUptime = firstUp.uptimeMillis + viewConfiguration.doubleTapMinTimeMillis
        var change: PointerInputChange
        // The second tap doesn't count if it happens before DoubleTapMinTime of the first tap
        do {
            change = awaitFirstDown()
        } while (change.uptimeMillis < minUptime)
        change
    }

/**
 * Shortcut for cases when we only need to get press/click logic, as for cases without long press
 * and double click we don't require channelling or any other complications.
 *
 * Each function parameter receives an [Offset] representing the position relative to the containing
 * element. The [Offset] can be outside the actual bounds of the element itself meaning the numbers
 * can be negative or larger than the element bounds if the touch target is smaller than the
 * [ViewConfiguration.minimumTouchTargetSize].
 */
internal suspend fun PointerInputScope.detectTapAndPress(
    onPress: suspend PressGestureScope.(Offset) -> Unit = NoPressGesture,
    onTap: ((Offset) -> Unit)? = null,
) {
    val pressScope = PressGestureScopeImpl(this)
    coroutineScope {
        awaitEachGesture {
            val resetJob = launch(start = CoroutineStart.UNDISPATCHED) { pressScope.reset() }

            val down = awaitFirstDown().also { it.consume() }

            if (onPress !== NoPressGesture) {
                launchAwaitingReset(resetJob) { pressScope.onPress(down.position) }

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 281–315)

            }

            val up = waitForUpOrCancellation()
            if (up == null) {
                launchAwaitingReset(resetJob) {
                    // tap-up was canceled
                    pressScope.cancel()
                }
            } else {
                up.consume()
                launchAwaitingReset(resetJob) { pressScope.release() }
                onTap?.invoke(up.position)
            }
        }
    }
}

@Deprecated(
    "Maintained for binary compatibility. Use version with PointerEventPass instead.",
    level = DeprecationLevel.HIDDEN,
)
public suspend fun AwaitPointerEventScope.awaitFirstDown(
    requireUnconsumed: Boolean = true
): PointerInputChange =
    awaitFirstDown(requireUnconsumed = requireUnconsumed, pass = PointerEventPass.Main)

/**
 * Reads events until the first down is received in the given [pass]. If [requireUnconsumed] is
 * `true` and the first down is already consumed in the pass, that gesture is ignored.
 */
public suspend fun AwaitPointerEventScope.awaitFirstDown(
    requireUnconsumed: Boolean = true,
    pass: PointerEventPass = PointerEventPass.Main,
): PointerInputChange {
    return awaitFirstDownImpl(

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 316–350)

        requireUnconsumed = requireUnconsumed,
        pass = pass,
        onlyPrimaryMouseButton = firstDownRefersToPrimaryMouseButtonOnly(),
    )
}

// TODO(b/384562201): Remove once [awaitFirstDown] will be aligned for all platforms and have this
// behavior.
internal suspend fun AwaitPointerEventScope.awaitPrimaryFirstDown(
    requireUnconsumed: Boolean = true,
    pass: PointerEventPass = PointerEventPass.Main,
): PointerInputChange {
    return awaitFirstDownImpl(
        requireUnconsumed = requireUnconsumed,
        pass = pass,
        onlyPrimaryMouseButton = true,
    )
}

private suspend fun AwaitPointerEventScope.awaitFirstDownImpl(
    requireUnconsumed: Boolean = true,
    pass: PointerEventPass = PointerEventPass.Main,
    onlyPrimaryMouseButton: Boolean,
): PointerInputChange {
    var event: PointerEvent
    do {
        event = awaitPointerEvent(pass)
    } while (!event.isChangedToDown(requireUnconsumed, onlyPrimaryMouseButton))
    return event.changes[0]
}

/**
 * Whether [AwaitPointerEventScope.awaitFirstDown], for mouse events, responds only to the primary
 * mouse button being pressed. The behavior currently differs between Android and Desktop, and
 * eventually this needs to be aligned (b/384562201).

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 351–385)

 */
internal expect fun firstDownRefersToPrimaryMouseButtonOnly(): Boolean

internal fun PointerEvent.isChangedToDown(
    requireUnconsumed: Boolean,
    onlyPrimaryMouseButton: Boolean = firstDownRefersToPrimaryMouseButtonOnly(),
): Boolean {
    val onlyPrimaryButtonCausesDown =
        onlyPrimaryMouseButton && changes.fastAll { it.type == PointerType.Mouse }
    if (onlyPrimaryButtonCausesDown && !buttons.isPrimaryPressed) return false

    return changes.fastAll {
        if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed()
    }
}

@Deprecated(
    "Maintained for binary compatibility. Use version with PointerEventPass instead.",
    level = DeprecationLevel.HIDDEN,
)
public suspend fun AwaitPointerEventScope.waitForUpOrCancellation(): PointerInputChange? =
    waitForUpOrCancellation(PointerEventPass.Main)

/**
 * Whether the event is considered a deep press, and should trigger long click before the timeout
 * has been reached.
 */
internal expect val PointerEvent.isDeepPress: Boolean

/**
 * Reads events in the given [pass] until all pointers are up or the gesture was canceled. The
 * gesture is considered canceled when a pointer leaves the event region, a position change has been
 * consumed or a pointer down change event was already consumed in the given pass. If the gesture
 * was not canceled, the final up change is returned or `null` if the event was canceled.
 */

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 36–70)

import androidx.compose.ui.util.fastAll
import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastForEach
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.Job
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex

/**
 * Receiver scope for [detectTapGestures]'s `onPress` lambda. This offers two methods to allow
 * waiting for the press to be released.
 */
@JvmDefaultWithCompatibility
public interface PressGestureScope : Density {
    /**
     * Waits for the press to be released before returning. If the gesture was canceled by motion
     * being consumed by another gesture, [GestureCancellationException] will be thrown.
     */
    public suspend fun awaitRelease()

    /**
     * Waits for the press to be released before returning. If the press was released, `true` is
     * returned, or if the gesture was canceled by motion being consumed by another gesture, `false`
     * is returned.
     */
    public suspend fun tryAwaitRelease(): Boolean
}

private val NoPressGesture: suspend PressGestureScope.(Offset) -> Unit = {}

/**
 * Detects tap, double-tap, and long press gestures and calls [onTap], [onDoubleTap], and
 * [onLongPress], respectively, when detected. [onPress] is called when the press is detected and

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 386–420)

public suspend fun AwaitPointerEventScope.waitForUpOrCancellation(
    pass: PointerEventPass = PointerEventPass.Main
): PointerInputChange? {
    while (true) {
        val event = awaitPointerEvent(pass)
        if (event.changes.fastAll { it.changedToUp() }) {
            // All pointers are up
            return event.changes[0]
        }

        if (
            event.changes.fastAny { it.isConsumed || it.isOutOfBounds(size, extendedTouchPadding) }
        ) {
            return null // Canceled
        }

        // Check for cancel by position consumption. We can look on the Final pass of the
        // existing pointer event because it comes after the pass we checked above.
        val consumeCheck = awaitPointerEvent(PointerEventPass.Final)
        if (consumeCheck.changes.fastAny { it.isConsumed }) {
            return null
        }
    }
}

/**
 * Reads events in the given [pass] until all pointers are up or the gesture was canceled. The
 * gesture is considered canceled when a pointer leaves the event region, a position change has been
 * consumed or a pointer down change event was already consumed in the given pass. If the gesture
 * was not canceled, the final up change is returned or `null` if the event was canceled.
 */
internal suspend fun AwaitPointerEventScope.waitForLongPress(
    pass: PointerEventPass = PointerEventPass.Main
): LongPressResult {
    var result: LongPressResult = LongPressResult.Canceled

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 421–455)

    try {
        withTimeout(viewConfiguration.longPressTimeoutMillis) {
            while (true) {
                val event = awaitPointerEvent(pass)
                if (event.changes.fastAll { it.changedToUp() }) {
                    // All pointers are up
                    result = LongPressResult.Released(event.changes[0])
                    break
                }

                if (event.isDeepPress) {
                    result = LongPressResult.Success
                    break
                }

                if (
                    event.changes.fastAny {
                        it.isConsumed || it.isOutOfBounds(size, extendedTouchPadding)
                    }
                ) {
                    result = LongPressResult.Canceled
                    break
                }

                // Check for cancel by position consumption. We can look on the Final pass of the
                // existing pointer event because it comes after the pass we checked above.
                val consumeCheck = awaitPointerEvent(PointerEventPass.Final)
                if (consumeCheck.changes.fastAny { it.isConsumed }) {
                    result = LongPressResult.Canceled
                    break
                }
            }
        }
    } catch (_: PointerEventTimeoutCancellationException) {
        return LongPressResult.Success

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 456–490)

    }
    return result
}

internal sealed class LongPressResult {
    /** Long press was triggered */
    object Success : LongPressResult()

    /** All pointers were released without long press being triggered */
    class Released(val finalUpChange: PointerInputChange) : LongPressResult()

    /** The gesture was canceled */
    object Canceled : LongPressResult()
}

/**
 * Launch a coroutine in [this] [CoroutineScope] with the specified [start]. Await the [resetJob]
 * and then execute the [block]. [start] will be [CoroutineStart.UNDISPATCHED].
 *
 * In some cases, coroutine cancellation of the reset job might still be processing when we are
 * already processing an up or cancel pointer event. We need to wait for the reset job to cancel and
 * complete so it can clean up properly (e.g. unlock the underlying mutex)
 */
@OptIn(ExperimentalFoundationApi::class)
private fun CoroutineScope.launchAwaitingReset(
    resetJob: Job,
    start: CoroutineStart = CoroutineStart.UNDISPATCHED,
    block: suspend CoroutineScope.() -> Unit,
): Job =
    launch(start = start) {
        resetJob.join()
        block()
    }

/** [detectTapGestures]'s implementation of [PressGestureScope]. */

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 491–525)

internal class PressGestureScopeImpl(density: Density) : PressGestureScope, Density by density {
    private var isReleased = false
    private var isCanceled = false
    private val mutex = Mutex(locked = false)

    /** Called when a gesture has been canceled. */
    fun cancel() {
        isCanceled = true
        if (mutex.isLocked) {
            mutex.unlock()
        }
    }

    /** Called when all pointers are up. */
    fun release() {
        isReleased = true
        if (mutex.isLocked) {
            mutex.unlock()
        }
    }

    /** Called when a new gesture has started. */
    suspend fun reset() {
        mutex.lock()
        isReleased = false
        isCanceled = false
    }

    override suspend fun awaitRelease() {
        if (!tryAwaitRelease()) {
            throw GestureCancellationException("The press gesture was canceled.")
        }
    }

    override suspend fun tryAwaitRelease(): Boolean {

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 526–533)

        if (!isReleased && !isCanceled) {
            mutex.lock()
            mutex.unlock()
        }
        return isReleased
    }
}


Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)

## androidx.compose.foundation.gestures TapGestureDetector.kt source (lines 71–105)

 * the [PressGestureScope.tryAwaitRelease] and [PressGestureScope.awaitRelease] can be used to
 * detect when pointers have released or the gesture was canceled. The first pointer down and final
 * pointer up are consumed, and in the case of long press, all changes after the long press is
 * detected are consumed.
 *
 * Each function parameter receives an [Offset] representing the position relative to the containing
 * element. The [Offset] can be outside the actual bounds of the element itself meaning the numbers
 * can be negative or larger than the element bounds if the touch target is smaller than the
 * [ViewConfiguration.minimumTouchTargetSize].
 *
 * When [onDoubleTap] is provided, the tap gesture is detected only after the
 * [ViewConfiguration.doubleTapMinTimeMillis] has passed and [onDoubleTap] is called if the second
 * tap is started before [ViewConfiguration.doubleTapTimeoutMillis]. If [onDoubleTap] is not
 * provided, then [onTap] is called when the pointer up has been received.
 *
 * After the initial [onPress], if the pointer moves out of the input area, the position change is
 * consumed, or another gesture consumes the down or up events, the gestures are considered
 * canceled. That means [onDoubleTap], [onLongPress], and [onTap] will not be called after a gesture
 * has been canceled.
 *
 * If the first down event is consumed somewhere else, the entire gesture will be skipped, including
 * [onPress].
 */
public suspend fun PointerInputScope.detectTapGestures(
    onDoubleTap: ((Offset) -> Unit)? = null,
    onLongPress: ((Offset) -> Unit)? = null,
    onPress: suspend PressGestureScope.(Offset) -> Unit = NoPressGesture,
    onTap: ((Offset) -> Unit)? = null,
): Unit = coroutineScope {
    // special signal to indicate to the sending side that it shouldn't intercept and consume
    // cancel/up events as we're only require down events
    val pressScope = PressGestureScopeImpl(this@detectTapGestures)

    awaitEachGesture {
        processTapGesture(

Sources: [live-androidx-foundation-foundation-foundation-gestures-tapgesturedetector-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/TapGestureDetector.kt)
