---
type: reference
title: androidx.compose.foundation Clickable.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1
    endLine: 35
    sha256: 5f771f421cd413624542b69239355d57ea6729588419d31749e763985eaad90d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
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

      package androidx.compose.foundation

      import androidx.annotation.CallSuper
      import androidx.annotation.EmptySuper
      import androidx.collection.mutableLongObjectMapOf
      import androidx.compose.foundation.gestures.changedToDownIgnoreConsumed
      import androidx.compose.foundation.gestures.isChangedToDown
      import androidx.compose.foundation.gestures.isDeepPress
      import androidx.compose.foundation.interaction.HoverInteraction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.internal.requirePrecondition
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.composed
      import androidx.compose.ui.focus.Focusability
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.hapticfeedback.HapticFeedback
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1015-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1015
    endLine: 1049
    sha256: 4a414200b88e10770af400b7028b336dae08eac805c5d2abc9159d15afd34dd3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          private fun cancelInput(indirectPointer: Boolean) {
              // Don't cancel pointer events when cancelling indirect events (because of losing focus for
              // example), and vice versa.
              if (indirectPointer) {
                  indirectDownEvent = null
              } else {
                  downEvent = null
              }
              handlePressInteractionCancel(indirectPointer = indirectPointer)
              gestureState = GestureState.Idle
          }

          fun update(
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
              enabled: Boolean,
              onClickLabel: String?,
              role: Role?,
              onClick: () -> Unit,
          ) {
              // enabled and onClick are captured inside callbacks, not as an input to detectTapGestures,
              // so no need to reset pointer input handling when they change
              updateCommon(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1050-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1050
    endLine: 1084
    sha256: dd1dc9cf2d9e562d633b2509010e24e751981eae3a049fdc4489f38dc5abe490
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          final override fun onClickKeyDownEvent(event: KeyEvent) = false

          final override fun onClickKeyUpEvent(event: KeyEvent): Boolean {
              performClick()
              return true
          }
      }

      private class CombinedClickableNode(
          onClick: () -> Unit,
          private var onLongClickLabel: String?,
          private var onLongClick: (() -> Unit)?,
          private var onDoubleClick: (() -> Unit)?,
          var hapticFeedbackEnabled: Boolean,
          interactionSource: MutableInteractionSource?,
          indicationNodeFactory: IndicationNodeFactory?,
          useLocalIndication: Boolean,
          enabled: Boolean,
          onClickLabel: String?,
          role: Role?,
      ) :
          CompositionLocalConsumerModifierNode,
          AbstractClickableNode(
              interactionSource = interactionSource,
              indicationNodeFactory = indicationNodeFactory,
              useLocalIndication = useLocalIndication,
              enabled = enabled,
              onClickLabel = onClickLabel,
              role = role,
              onClick = onClick,
          ) {
          class DoubleKeyClickState(val job: Job) {
              var doubleTapMinTimeMillisElapsed: Boolean = false
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 106
    endLine: 140
    sha256: 49f5588802b7686e831aef90881087a4f4ff6cbb600007fa0050e0ae7b9c0c66
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
       *   disabled for accessibility services
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onClick will be called when user clicks on the element
       */
      @Deprecated(
          message =
              "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
          level = DeprecationLevel.HIDDEN,
      )
      public fun Modifier.clickable(
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onClick: () -> Unit,
      ): Modifier =
          composed(
              inspectorInfo =
                  debugInspectorInfo {
                      name = "clickable"
                      properties["enabled"] = enabled
                      properties["onClickLabel"] = onClickLabel
                      properties["role"] = role
                      properties["onClick"] = onClick
                  }
          ) {
              val localIndication = LocalIndication.current
              val interactionSource =
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1085-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1085
    endLine: 1119
    sha256: 64396dcd3be122924f066165ec91615a6570fc84d6a1804c8826301e77a9d3b8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          private val longKeyPressJobs = mutableLongObjectMapOf<Job>()
          private val doubleKeyClickStates = mutableLongObjectMapOf<DoubleKeyClickState>()
          private var downEvent: PointerInputChange? = null
          private var longPressJob: Job? = null
          private var tapJob: Job? = null
          private var isSecondTap = false
          private var longPressTriggered = false
          private var firstTapUpTime = -1L
          private var ignoreNextUp = false

          private var indirectDownEvent: IndirectPointerInputChange? = null
          private var indirectLongPressJob: Job? = null
          private var indirectTapJob: Job? = null
          private var indirectIsSecondTap = false
          private var indirectLongPressTriggered = false
          private var indirectFirstTapUpTime = -1L
          private var indirectIgnoreNextUp = false

          @OptIn(ExperimentalFoundationApi::class)
          override fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
          ) {
              super.onPointerEvent(pointerEvent, pass, bounds)

              if (pass == PointerEventPass.Main) {
                  if (downEvent == null) {
                      if (pointerEvent.isChangedToDown(requireUnconsumed = true)) {
                          handleDownEvent(pointerEvent.changes[0])
                      }
                  } else {
                      if (pointerEvent.isDeepPress) {
                          handleDeepPress()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1120-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1120
    endLine: 1154
    sha256: 3f349bf83ecadbd259729bcf75050f9fb447b31b36a1e5252de870d2e92d7f1e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }

                      if (longPressTriggered) {
                          // This branch specifically handles the case where the long press callback has
                          // already been invoked.
                          if (pointerEvent.changes.fastAll { it.changedToUpIgnoreConsumed() }) {
                              // A long press already fired its callback and all the pointers are up. We
                              // must reset our state even if the up event was already consumed by a
                              // child.
                              val up = pointerEvent.changes[0]
                              up.consume()
                              handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = downEvent!!)
                          } else {
                              // Once a long press has triggered, consume every event until pointers are
                              // up.
                              pointerEvent.changes.fastForEach { it.consume() }
                          }
                          return
                      }

                      if (pointerEvent.changes.fastAll { it.changedToUp() }) {
                          // All pointers are up
                          val up = pointerEvent.changes[0]
                          up.consume()
                          handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = downEvent!!)
                      } else {
                          // Other events need to be checked for consumption / bounds related
                          // cancellation.
                          handleNonUpEventIfNeeded(pointerEvent, bounds)
                      }
                  }
              } else if (pass == PointerEventPass.Final) {
                  checkForCancellation(pointerEvent)
              }
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1155-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1155
    endLine: 1189
    sha256: 05d04db3605dfca448b01dd1e0b9e086a9ed08f671228d364238e3e35893ac4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
              super.onIndirectPointerEvent(event, pass)
              if (pass == PointerEventPass.Main) {
                  if (indirectDownEvent == null) {
                      if (event.changes.fastAny { it.changedToDownIgnoreConsumed() }) {
                          handleDownEvent(event.changes[0])
                      }
                  } else {
                      if (indirectLongPressTriggered) {
                          // This branch specifically handles the case where the long press callback has
                          // already been invoked.
                          if (event.changes.fastAll { it.changedToUpIgnoreConsumed() }) {
                              // A long press already fired its callback and all the pointers are up. We
                              // must reset our state even if the up event was already consumed by a
                              // child.
                              val up = event.changes[0]
                              up.consume()
                              handleUpEvent(
                                  uptimeMillis = up.uptimeMillis,
                                  downChange = indirectDownEvent!!,
                              )
                          } else {
                              // Once a long press has triggered, consume every event until pointers are
                              // up
                              event.changes.fastForEach { it.consume() }
                          }
                          return
                      }

                      if (event.changes.fastAll { it.changedToUp() }) {
                          // All pointers are up
                          val up = event.changes[0]
                          up.consume()
                          handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = indirectDownEvent!!)
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1190-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1190
    endLine: 1224
    sha256: 8c60408966ed43eeab60b920bc899ea89f65c32175b17aa7a8e046551b558313
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      } else {
                          // Other events need to be checked for consumption / exceeding touch slop
                          handleNonUpEventIfNeeded(event)
                      }
                  }
              } else if (pass == PointerEventPass.Final) {
                  checkForCancellation(event)
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun handleDownEvent(down: PointerInputChange) {
              down.consume()
              this.downEvent = down

              if (enabled) {
                  if (tapJob?.isActive == true) {
                      val minTime = currentValueOf(LocalViewConfiguration).doubleTapMinTimeMillis
                      if (down.uptimeMillis - firstTapUpTime < minTime) {
                          ignoreNextUp = true
                          // Ignore this down event, don't check for long press / emit press
                          // interactions
                          return
                      } else {
                          isSecondTap = true
                          tapJob?.cancel()
                          tapJob = null
                      }
                  }
                  longPressTriggered = false

                  handlePressInteractionStart(down)

                  if (onLongClick != null) {
                      longPressJob = coroutineScope.launch {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1225-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1225
    endLine: 1259
    sha256: 63366360bdaf4d974722fab2a2f6f3a11cdf7da3516c72346c35c4bd914e3766
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                          onLongClick?.invoke()
                          if (hapticFeedbackEnabled) {
                              currentValueOf(LocalHapticFeedback)
                                  .performHapticFeedback(HapticFeedbackType.LongPress)
                          }
                          longPressTriggered = true
                          tapJob?.cancel()
                          tapJob = null
                          longPressJob = null
                      }
                  }
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun handleDownEvent(down: IndirectPointerInputChange) {
              down.consume()
              this.indirectDownEvent = down

              if (enabled) {
                  if (indirectTapJob?.isActive == true) {
                      val minTime = currentValueOf(LocalViewConfiguration).doubleTapMinTimeMillis
                      if (down.uptimeMillis - indirectFirstTapUpTime < minTime) {
                          indirectIgnoreNextUp = true
                          // Ignore this down event, don't check for long press / emit press
                          // interactions
                          return
                      } else {
                          indirectIsSecondTap = true
                          indirectTapJob?.cancel()
                          indirectTapJob = null
                      }
                  }
                  indirectLongPressTriggered = false
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1260-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1260
    endLine: 1294
    sha256: 5d5e0429b031761313d06cac5b6e31ef3881bc234810b983153f6bce35d9afe3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  handlePressInteractionStart(down)

                  if (onLongClick != null) {
                      indirectLongPressJob = coroutineScope.launch {
                          delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                          onLongClick?.invoke()
                          if (hapticFeedbackEnabled) {
                              currentValueOf(LocalHapticFeedback)
                                  .performHapticFeedback(HapticFeedbackType.LongPress)
                          }
                          indirectLongPressTriggered = true
                          indirectTapJob?.cancel()
                          indirectTapJob = null
                          indirectLongPressJob = null
                      }
                  }
              }
          }

          private fun handleUpEvent(uptimeMillis: Long, downChange: PointerInputChange) {
              if (enabled && !ignoreNextUp) {
                  handlePressInteractionRelease(downChange.position, indirectPointer = false)
                  firstTapUpTime = uptimeMillis // store uptime for double tap check
                  if (!longPressTriggered) {
                      if (isSecondTap) {
                          onDoubleClick?.invoke()
                      } else {
                          if (onDoubleClick != null) {
                              // Play the click sound immediately, even if it later becomes a double click
                              playClickSound()
                              tapJob = coroutineScope.launch {
                                  delay(currentValueOf(LocalViewConfiguration).doubleTapTimeoutMillis)
                                  // Only call onClick() since we already played the sound
                                  onClick()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1295-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1295
    endLine: 1329
    sha256: 67da3176716088f4289113283fa8c8b52d1c45537dbe4dc323daa193d89ebef2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  tapJob = null
                              }
                          } else {
                              performClick()
                          }
                      }
                  }
              }
              this.downEvent = null
              ignoreNextUp = false
              isSecondTap = false
              longPressJob?.cancel()
              longPressJob = null
              longPressTriggered = false
          }

          private fun handleUpEvent(uptimeMillis: Long, downChange: IndirectPointerInputChange) {
              if (enabled && !indirectIgnoreNextUp) {
                  handlePressInteractionRelease(downChange.position, indirectPointer = true)
                  indirectFirstTapUpTime = uptimeMillis // store uptime for double tap check
                  if (!indirectLongPressTriggered) {
                      if (indirectIsSecondTap) {
                          onDoubleClick?.invoke()
                      } else {
                          if (onDoubleClick != null) {
                              // Play the click sound immediately, even if it later becomes a double click
                              playClickSound()
                              indirectTapJob = coroutineScope.launch {
                                  delay(currentValueOf(LocalViewConfiguration).doubleTapTimeoutMillis)
                                  // Only call onClick() since we already played the sound
                                  onClick()
                                  indirectTapJob = null
                              }
                          } else {
                              performClick()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1330-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1330
    endLine: 1364
    sha256: 1db5b4024984609833c9702b03deed3a05ef489c8a1c4cf11536f5bdaf47aeb1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      }
                  }
              }
              this.indirectDownEvent = null
              indirectIgnoreNextUp = false
              indirectIsSecondTap = false
              indirectLongPressJob?.cancel()
              indirectLongPressJob = null
              indirectLongPressTriggered = false
          }

          private fun handleNonUpEventIfNeeded(pointerEvent: PointerEvent, bounds: IntSize) {
              val touchPadding = getExtendedTouchPadding(bounds)
              if (
                  pointerEvent.changes.fastAny { change ->
                      change.isConsumed || change.isOutOfBounds(bounds, touchPadding)
                  }
              ) {
                  cancelInput(indirectPointer = false)
              }
          }

          private fun handleNonUpEventIfNeeded(indirectPointerEvent: IndirectPointerEvent) {
              val touchSlop = currentValueOf(LocalViewConfiguration).touchSlop
              if (
                  indirectPointerEvent.changes.fastAny { change ->
                      val distanceFromPress = change.position - indirectDownEvent!!.position
                      val isOutOfBounds = abs(distanceFromPress.getDistance()) > touchSlop
                      change.isConsumed || isOutOfBounds
                  }
              ) {
                  cancelInput(indirectPointer = true)
              }
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1365-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1365
    endLine: 1399
    sha256: 5153f4081c6d91ef81ee4832bb3a86f5f95dc9d568673bcd1953af01241446f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          private fun handleDeepPress() {
              if (!longPressTriggered && enabled && onLongClick != null) {
                  longPressJob?.cancel()
                  longPressJob = null
                  onLongClick?.invoke()
                  if (hapticFeedbackEnabled) {
                      currentValueOf(LocalHapticFeedback)
                          .performHapticFeedback(HapticFeedbackType.LongPress)
                  }
                  longPressTriggered = true
              }
          }

          private fun checkForCancellation(pointerEvent: PointerEvent) {
              if (downEvent != null && !longPressTriggered) {
                  // Check for cancel by position consumption. We can look on the Final pass of the
                  // existing pointer event because it comes after the pass we checked above. We ignore
                  // cases where the long press has already triggered, as in this case we will consume
                  // events ourselves until the pointer is released.
                  if (pointerEvent.changes.fastAny { it.isConsumed && it != downEvent }) {
                      // Canceled
                      cancelInput(indirectPointer = false)
                  }
              }
          }

          private fun checkForCancellation(indirectPointerEvent: IndirectPointerEvent) {
              if (indirectDownEvent != null && !indirectLongPressTriggered) {
                  // Check for cancel by position consumption. We can look on the Final pass of the
                  // existing pointer event because it comes after the pass we checked above. We ignore
                  // cases where the long press has already triggered, as in this case we will consume
                  // events ourselves until the pointer is released.
                  if (indirectPointerEvent.changes.fastAny { it.isConsumed && it != indirectDownEvent }) {
                      // Canceled
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1400-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1400
    endLine: 1434
    sha256: 237782cb9ee33f1b596d9c71d35dd65039f15ea2492b693478d4cd2bb65e28b4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      cancelInput(indirectPointer = true)
                  }
              }
          }

          override fun onCancelPointerInput() {
              super.onCancelPointerInput()
              cancelInput(indirectPointer = false)
          }

          override fun onCancelIndirectPointerInput() {
              cancelInput(indirectPointer = true)
          }

          private fun cancelInput(indirectPointer: Boolean) {
              if (indirectPointer) {
                  indirectDownEvent = null
                  indirectLongPressJob?.cancel()
                  indirectLongPressJob = null
                  indirectTapJob?.cancel()
                  indirectTapJob = null
                  indirectIsSecondTap = false
                  indirectLongPressTriggered = false
                  indirectFirstTapUpTime = -1L
                  indirectIgnoreNextUp = false
              } else {
                  downEvent = null
                  longPressJob?.cancel()
                  longPressJob = null
                  tapJob?.cancel()
                  tapJob = null
                  isSecondTap = false
                  longPressTriggered = false
                  firstTapUpTime = -1L
                  ignoreNextUp = false
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 141
    endLine: 175
    sha256: 3f7742e32bf0cf6b685e01641ce1eac6a71ec4175ff3e7ddef3d439ce2e9a850
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (localIndication is IndicationNodeFactory) {
                      // We can fast path here as it will be created inside clickable lazily
                      null
                  } else {
                      // We need an interaction source to pass between the indication modifier and
                      // clickable, so
                      // by creating here we avoid another composed down the line
                      remember { MutableInteractionSource() }
                  }
              Modifier.clickable(
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  onClick = onClick,
                  role = role,
                  indication = localIndication,
                  interactionSource = interactionSource,
              )
          }

      /**
       * Configure component to receive clicks via input or accessibility "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds and show a default
       * indication when it's pressed.
       *
       * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
       * explicitly provide an [Indication] instance. Note that this overload only supports
       * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
       * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
       * support [Indication] instances that are not [IndicationNodeFactory].
       *
       * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
       * only when needed. This reduces the performance cost of clickable during composition, as creating
       * the [indication] can be delayed until there is an incoming
       * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1435-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1435
    endLine: 1469
    sha256: b175efa98b446863f8a8299e6933c7765264e7d1433db2fa0e4551cd3fab2e34
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
              handlePressInteractionCancel(indirectPointer)
          }

          fun update(
              onClick: () -> Unit,
              onLongClickLabel: String?,
              onLongClick: (() -> Unit)?,
              onDoubleClick: (() -> Unit)?,
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
              enabled: Boolean,
              onClickLabel: String?,
              role: Role?,
          ) {
              var resetPointerInputHandling = false

              // onClick is captured inside a callback, not as an input to detectTapGestures,
              // so no need to reset pointer input handling

              if (this.onLongClickLabel != onLongClickLabel) {
                  this.onLongClickLabel = onLongClickLabel
                  invalidateSemantics()
              }

              // We capture onLongClick and onDoubleClick inside the callback, so if the lambda changes
              // value we don't want to reset input handling - only reset if they go from not-defined to
              // defined, and vice versa, as that is what is captured in the parameter to
              // detectTapGestures.
              if ((this.onLongClick == null) != (onLongClick == null)) {
                  // Adding or removing longClick should cancel any existing press interactions
                  disposeInteractions()
                  // Adding or removing longClick should add / remove the corresponding property
                  invalidateSemantics()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1470-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1470
    endLine: 1504
    sha256: 0244b9db27e35e2b4d07076c44fe381c2b6e333bf43522a360215dfe9fcfa7a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  resetPointerInputHandling = true
              }

              this.onLongClick = onLongClick

              if ((this.onDoubleClick == null) != (onDoubleClick == null)) {
                  resetPointerInputHandling = true
              }
              this.onDoubleClick = onDoubleClick

              // enabled is captured as a parameter to detectTapGestures, so we need to restart detecting
              // gestures if it changes.
              if (this.enabled != enabled) {
                  resetPointerInputHandling = true
                  // Updating is handled inside updateCommon
              }

              updateCommon(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )

              if (resetPointerInputHandling) {
                  cancelInput(indirectPointer = false)
                  cancelInput(indirectPointer = true)
              }
          }

          override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
              if (onLongClick != null) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1505-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1505
    endLine: 1539
    sha256: fcc6e3cc59d53950bfca5546cfe82894ae45200d903b8140974d918273cbb42c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  onLongClick(
                      action = {
                          onLongClick?.invoke()
                          true
                      },
                      label = onLongClickLabel,
                  )
              }
          }

          override fun onClickKeyDownEvent(event: KeyEvent): Boolean {
              val keyCode = event.key.keyCode
              var handledByLongClick = false
              if (onLongClick != null) {
                  if (longKeyPressJobs[keyCode] == null) {
                      longKeyPressJobs[keyCode] = coroutineScope.launch {
                          delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                          onLongClick?.invoke()
                      }
                      handledByLongClick = true
                  }
              }
              val doubleClickState = doubleKeyClickStates[keyCode]
              // This is the second down event, so it might be a double click
              if (doubleClickState != null) {
                  // Within the allowed timeout, so check if this is above the minimum time needed for
                  // a double click
                  if (doubleClickState.job.isActive) {
                      doubleClickState.job.cancel()
                      // If the second down was before the minimum double tap time, don't track this as
                      // a double click. Instead, we need to invoke onClick for the previous click, since
                      // that is now counted as a standalone click instead of the first of a double click.
                      if (!doubleClickState.doubleTapMinTimeMillisElapsed) {
                          // Only call onClick() since we already played the sound
                          onClick()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1540-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1540
    endLine: 1574
    sha256: ce188944a5efb6b4f353c2ed213883f9364f485c881d0418054bc63a91e9b8ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          doubleKeyClickStates.remove(keyCode)
                      }
                  } else {
                      // We already invoked onClick because we passed the timeout, so stop tracking this
                      // as a double click
                      doubleKeyClickStates.remove(keyCode)
                  }
              }
              return handledByLongClick
          }

          override fun onClickKeyUpEvent(event: KeyEvent): Boolean {
              val keyCode = event.key.keyCode
              var longClickInvoked = false
              if (longKeyPressJobs[keyCode] != null) {
                  longKeyPressJobs[keyCode]?.let {
                      if (it.isActive) {
                          it.cancel()
                      } else {
                          // If we already passed the timeout, we invoked long click already, and so
                          // we shouldn't invoke onClick in this case
                          longClickInvoked = true
                      }
                  }
                  longKeyPressJobs.remove(keyCode)
              }
              if (onDoubleClick != null) {
                  when {
                      // First click
                      doubleKeyClickStates[keyCode] == null -> {
                          // We only track the second click if the first click was not a long click
                          if (!longClickInvoked) {
                              // Play the click sound immediately, even if it later becomes a double click
                              playClickSound()
                              doubleKeyClickStates[keyCode] =
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1575-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1575
    endLine: 1609
    sha256: a34b84a2f506eda593afa7af5f19adc7ccc82d7766566daada265bd08c663263
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  DoubleKeyClickState(
                                      coroutineScope.launch {
                                          val configuration = currentValueOf(LocalViewConfiguration)
                                          val minTime = configuration.doubleTapMinTimeMillis
                                          val timeout = configuration.doubleTapTimeoutMillis
                                          delay(minTime)
                                          doubleKeyClickStates[keyCode]?.doubleTapMinTimeMillisElapsed =
                                              true
                                          // Delay the remainder until we are at timeout
                                          delay(timeout - minTime)
                                          // If there was no second key press after the timeout, invoke
                                          // onClick as normal. Only call onClick() since we already
                                          // played
                                          // the sound
                                          onClick()
                                      }
                                  )
                          }
                      }
                      // Second click
                      else -> {
                          // Invoke onDoubleClick if the second click was not a long click
                          if (!longClickInvoked) {
                              onDoubleClick?.invoke()
                          }
                          doubleKeyClickStates.remove(keyCode)
                      }
                  }
              } else {
                  if (!longClickInvoked) {
                      performClick()
                  }
              }
              return true
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1610-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1610
    endLine: 1644
    sha256: d7b8bc09a9fac39e25b82253db5727ff3b8b2e1f46bc3d60b3b6b58af194aad8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun onCancelKeyInput() {
              resetKeyPressState()
          }

          override fun onReset() {
              super.onReset()
              resetKeyPressState()
          }

          private fun resetKeyPressState() {
              longKeyPressJobs.apply {
                  forEachValue { it.cancel() }
                  clear()
              }
              doubleKeyClickStates.apply {
                  forEachValue { it.job.cancel() }
                  clear()
              }
          }
      }

      internal abstract class AbstractClickableNode(
          private var interactionSource: MutableInteractionSource?,
          private var indicationNodeFactory: IndicationNodeFactory?,
          private var useLocalIndication: Boolean,
          enabled: Boolean,
          private var onClickLabel: String?,
          private var role: Role?,
          onClick: () -> Unit,
      ) :
          DelegatingNode(),
          PointerInputModifierNode,
          KeyInputModifierNode,
          SemanticsModifierNode,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1645-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1645
    endLine: 1679
    sha256: 94f968a446f55d44a51782657220694d33da148c12a49b45f2896f515d73d69b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          CompositionLocalConsumerModifierNode,
          ObserverModifierNode,
          IndirectPointerInputModifierNode,
          GestureConnection {
          protected var enabled = enabled
              private set

          protected var onClick = onClick
              private set

          final override val shouldAutoInvalidate: Boolean = false

          private val focusableNode: FocusableNode =
              FocusableNode(
                  interactionSource,
                  focusability = Focusability.SystemDefined,
                  onFocusChange = ::onFocusChange,
              )

          private var localIndicationNodeFactory: IndicationNodeFactory? = null

          private var gestureNode: DelegatableNode? = null

          override var gestureState: GestureState = GestureState.Idle

          private var indicationNode: DelegatableNode? = null

          private var pressInteraction: PressInteraction.Press? = null
          private var hoverInteraction: HoverInteraction.Enter? = null
          private val currentKeyPressInteractions = mutableLongObjectMapOf<PressInteraction.Press>()
          private var centerOffset: Offset = Offset.Zero

          private var indirectPointerPressInteraction: PressInteraction.Press? = null
          private var indirectPointerEventPressPosition: Offset? = null
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1680-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1680
    endLine: 1714
    sha256: d80fe2c6114de549088ad887c6d200f13334d51d4f4d42555c4a54cc8624e7db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // Track separately from interactionSource, as we will create our own internal
          // InteractionSource if needed
          private var userProvidedInteractionSource: MutableInteractionSource? = interactionSource

          private var lazilyCreateIndication = shouldLazilyCreateIndication()

          private fun shouldLazilyCreateIndication() = userProvidedInteractionSource == null

          protected fun playClickSound() {
              currentValueOf(LocalSoundEffect)?.playClickSound()
          }

          protected fun performClick() {
              playClickSound()
              onClick()
          }

          open fun SemanticsPropertyReceiver.applyAdditionalSemantics() {}

          protected fun updateCommon(
              interactionSource: MutableInteractionSource?,
              indicationNodeFactory: IndicationNodeFactory?,
              useLocalIndication: Boolean,
              enabled: Boolean,
              onClickLabel: String?,
              role: Role?,
              onClick: () -> Unit,
          ) {
              var isIndicationNodeDirty = false
              // Compare against userProvidedInteractionSource, as we will create a new InteractionSource
              // lazily if the userProvidedInteractionSource is null, and assign it to interactionSource
              if (userProvidedInteractionSource != interactionSource) {
                  disposeInteractions()
                  userProvidedInteractionSource = interactionSource
                  this.interactionSource = interactionSource
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1715-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1715
    endLine: 1749
    sha256: b9744c2a1c7fca0793affd4834ffaa19c07be80051474a6bb0e12b64536b6059
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  isIndicationNodeDirty = true
              }
              if (this.indicationNodeFactory != indicationNodeFactory) {
                  this.indicationNodeFactory = indicationNodeFactory
                  isIndicationNodeDirty = true
              }
              if (this.useLocalIndication != useLocalIndication) {
                  this.useLocalIndication = useLocalIndication
                  if (useLocalIndication) {
                      // Need to update localIndicationNodeFactory, and start observing changes
                      onObservedReadsChanged()
                  }
                  isIndicationNodeDirty = true
              }
              if (this.enabled != enabled) {
                  if (enabled) {
                      delegate(focusableNode)
                  } else {
                      // TODO: Should we remove indicationNode? Previously we always emitted indication
                      undelegate(focusableNode)
                      disposeInteractions()
                  }
                  invalidateSemantics()
                  if (!enabled) {
                      gestureNode?.let { undelegate(it) }
                      gestureNode = null
                      gestureState = GestureState.Idle
                  }
                  this.enabled = enabled
              }
              if (this.onClickLabel != onClickLabel) {
                  this.onClickLabel = onClickLabel
                  invalidateSemantics()
              }
              if (this.role != role) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1750-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1750
    endLine: 1784
    sha256: 17eb4d251c1aeebbdeeb93fc70157c3e484e6497aa0e2e36cd7c49f2cdaed022
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  this.role = role
                  invalidateSemantics()
              }
              this.onClick = onClick
              if (lazilyCreateIndication != shouldLazilyCreateIndication()) {
                  lazilyCreateIndication = shouldLazilyCreateIndication()
                  // If we are no longer lazily creating the node, and we haven't created the node yet,
                  // create it
                  if (!lazilyCreateIndication && indicationNode == null) isIndicationNodeDirty = true
              }
              // Create / recreate indication node
              if (isIndicationNodeDirty) {
                  recreateIndicationIfNeeded()
              }
              focusableNode.update(this.interactionSource)
          }

          protected fun getExtendedTouchPadding(size: IntSize): Size {
              // copied from SuspendingPointerInputModifierNodeImpl.extendedTouchPadding:
              // TODO expose this as a new public api available outside of suspending apis b/422396609
              val minimumTouchTargetSizeDp = currentValueOf(LocalViewConfiguration).minimumTouchTargetSize
              val minimumTouchTargetSize = with(requireDensity()) { minimumTouchTargetSizeDp.toSize() }
              val horizontal = max(0f, minimumTouchTargetSize.width - size.width) / 2f
              val vertical = max(0f, minimumTouchTargetSize.height - size.height) / 2f
              return Size(horizontal, vertical)
          }

          @CallSuper
          override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
              initializeIndicationAndInteractionSourceIfNeeded()
              if (enabled) {
                  initializeGestureCoordination()
              }
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 176
    endLine: 210
    sha256: 0e8d7a44996dff1346e810e32a594503b4d6ca6e29e00a3d93c00caca4e161f0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [MutableInteractionSource] and you are never using it outside of clickable, it is recommended to
       * instead provide `null` to enable lazy creation. If you need the [Indication] to be created
       * eagerly, provide a remembered [MutableInteractionSource].
       *
       * If you need to support double click or long click alongside the single click, consider using
       * [combinedClickable].
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
       *   disabled for accessibility services
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param onClick will be called when user clicks on the element
       */
      public fun Modifier.clickable(
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          interactionSource: MutableInteractionSource? = null,
          onClick: () -> Unit,
      ): Modifier {
          return this.then(
              ClickableElement(
                  interactionSource = interactionSource,
                  indicationNodeFactory = null,
                  useLocalIndication = true,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1785-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1785
    endLine: 1819
    sha256: 5d89b1598c3c24d2a19dc6eef746c992849e30f5cee04dbbd21376744e34ec9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          final override fun onAttach() {
              onObservedReadsChanged()
              if (!lazilyCreateIndication) {
                  initializeIndicationAndInteractionSourceIfNeeded()
              }
              if (enabled) {
                  delegate(focusableNode)
              }
          }

          override fun onObservedReadsChanged() {
              if (useLocalIndication) {
                  observeReads {
                      val indication = currentValueOf(LocalIndication)
                      requirePrecondition(indication is IndicationNodeFactory) {
                          unsupportedIndicationExceptionMessage(indication)
                      }
                      val previousFactory = localIndicationNodeFactory
                      localIndicationNodeFactory = indication
                      // If we are changing from a non-null factory to a different factory, recreate
                      // indication if needed
                      if (previousFactory != null && localIndicationNodeFactory != previousFactory) {
                          recreateIndicationIfNeeded()
                      }
                  }
              }
          }

          final override fun onDetach() {
              disposeInteractions()
              // If we lazily created an interaction source, reset it in case we are reused / moved. Note
              // that we need to do it here instead of onReset() - since onReset won't be called in the
              // movableContent case but we still want to dispose for that case
              if (userProvidedInteractionSource == null) {
                  interactionSource = null
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1820-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1820
    endLine: 1854
    sha256: 8077dc67db06399eaa7e53c979501457788c8d18343c864bae4cc78a7357fb5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
              // Remove indication in case we are reused / moved - we will create a new node when needed
              indicationNode?.let { undelegate(it) }
              indicationNode = null

              gestureNode?.let { undelegate(it) }
              gestureNode = null
          }

          protected fun disposeInteractions() {
              interactionSource?.let { interactionSource ->
                  pressInteraction?.let { oldValue ->
                      val interaction = PressInteraction.Cancel(oldValue)
                      interactionSource.tryEmit(interaction)
                  }
                  indirectPointerPressInteraction?.let { oldValue ->
                      val interaction = PressInteraction.Cancel(oldValue)
                      interactionSource.tryEmit(interaction)
                  }
                  hoverInteraction?.let { oldValue ->
                      val interaction = HoverInteraction.Exit(oldValue)
                      interactionSource.tryEmit(interaction)
                  }
                  currentKeyPressInteractions.forEachValue {
                      interactionSource.tryEmit(PressInteraction.Cancel(it))
                  }
              }
              pressInteraction = null
              indirectPointerPressInteraction = null
              indirectPointerEventPressPosition = null
              hoverInteraction = null
              currentKeyPressInteractions.clear()
          }

          private fun onFocusChange(isFocused: Boolean) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1855-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1855
    endLine: 1889
    sha256: 8c850473d6d04dabfac90808f3b993c1c7b5d711ce6915b45097d639bc2ce3eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (isFocused) {
                  initializeIndicationAndInteractionSourceIfNeeded()
              } else {
                  // If we are no longer focused while we are tracking existing key presses, we need to
                  // clear them and cancel the presses.
                  if (interactionSource != null) {
                      currentKeyPressInteractions.forEachValue {
                          coroutineScope.launch { interactionSource?.emit(PressInteraction.Cancel(it)) }
                      }
                      indirectPointerPressInteraction?.let {
                          coroutineScope.launch { interactionSource?.emit(PressInteraction.Cancel(it)) }
                      }
                  }
                  currentKeyPressInteractions.clear()
                  indirectPointerPressInteraction = null
                  onCancelKeyInput()
              }
          }

          private fun recreateIndicationIfNeeded() {
              // If we already created a node lazily, or we are not lazily creating the node, create
              if (indicationNode != null || !lazilyCreateIndication) {
                  indicationNode?.let { undelegate(it) }
                  indicationNode = null
                  initializeIndicationAndInteractionSourceIfNeeded()
              }
          }

          private fun initializeIndicationAndInteractionSourceIfNeeded() {
              // We have already created the node, no need to do any work
              if (indicationNode != null) return
              val indicationFactory =
                  if (useLocalIndication) localIndicationNodeFactory else indicationNodeFactory
              indicationFactory?.let { factory ->
                  if (interactionSource == null) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1890-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1890
    endLine: 1924
    sha256: 23843f74a6f3f67d0ed4ca1ff7fb5b7cdc9d1ec8b8d35bb2c0e7b555c08e23f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      interactionSource = MutableInteractionSource()
                  }
                  focusableNode.update(interactionSource)
                  val node = factory.create(interactionSource!!)
                  delegate(node)
                  indicationNode = node
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun initializeGestureCoordination() {
              if (gestureNode == null) {
                  gestureNode = delegate(gestureNode(this))
              }
          }

          @CallSuper
          override fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
          ) {
              centerOffset = bounds.center.toOffset()
              initializeIndicationAndInteractionSourceIfNeeded()
              if (enabled) {
                  initializeGestureCoordination()
                  if (pass == PointerEventPass.Main) {
                      when (pointerEvent.type) {
                          PointerEventType.Enter -> coroutineScope.launch { emitHoverEnter() }
                          PointerEventType.Exit -> coroutineScope.launch { emitHoverExit() }
                      }
                  }
              }
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1925-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1925
    endLine: 1959
    sha256: ae5c1f2c01cdfacc035b0f24f6a3d11df8934e049bac62864da8e1578d2480c0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @CallSuper
          override fun onCancelPointerInput() {
              // Press cancellation is handled as part of detecting presses
              interactionSource?.let { interactionSource ->
                  hoverInteraction?.let { oldValue ->
                      val interaction = HoverInteraction.Exit(oldValue)
                      interactionSource.tryEmit(interaction)
                  }
              }
              hoverInteraction = null
          }

          final override fun onKeyEvent(event: KeyEvent): Boolean {
              // Key events usually require focus, but if a focused child does not handle the KeyEvent,
              // the event can bubble up without this clickable ever being focused, and hence without
              // this being initialized through the focus path
              initializeIndicationAndInteractionSourceIfNeeded()
              val keyCode = event.key.keyCode
              return when {
                  enabled && event.isPress -> {
                      // If the key already exists in the map, keyEvent is a repeat event.
                      // We ignore it as we only want to emit an interaction for the initial key press.
                      var wasInteractionHandled = false
                      if (!currentKeyPressInteractions.containsKey(keyCode)) {
                          val press = PressInteraction.Press(centerOffset)
                          currentKeyPressInteractions[keyCode] = press
                          // Even if the interactionSource is null, we still want to intercept the presses
                          // so we always track them above, and return true
                          if (interactionSource != null) {
                              coroutineScope.launch { interactionSource?.emit(press) }
                          }
                          wasInteractionHandled = true
                      }
                      onClickKeyDownEvent(event) || wasInteractionHandled
                  }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1960-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1960
    endLine: 1994
    sha256: 4dedfe652040ae2afa7f5defb3a1424db56bb511f78cbfb2b01b18de7410abdf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  enabled && event.isClick -> {
                      val press = currentKeyPressInteractions.remove(keyCode)
                      if (press != null) {
                          if (interactionSource != null) {
                              coroutineScope.launch {
                                  interactionSource?.emit(PressInteraction.Release(press))
                              }
                          }
                          // Don't invoke onClick if we were not pressed - this could happen if we became
                          // focused after the down event, or if the node was reused after the down event.
                          onClickKeyUpEvent(event)
                      }
                      // Only consume if we were previously pressed for this key event
                      press != null
                  }

                  else -> false
              }
          }

          protected abstract fun onClickKeyDownEvent(event: KeyEvent): Boolean

          protected abstract fun onClickKeyUpEvent(event: KeyEvent): Boolean

          /**
           * Called when focus is lost, to allow cleaning up and resetting the state for ongoing key
           * presses
           */
          @EmptySuper protected open fun onCancelKeyInput() {}

          final override fun onPreKeyEvent(event: KeyEvent) = false

          final override val shouldMergeDescendantSemantics: Boolean
              get() = true
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-1995-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 1995
    endLine: 2029
    sha256: 3cc9ef3f091edc12745aaf53f26349e619a1f5642772be9a7c7b6f9ef4cbe6ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          final override fun SemanticsPropertyReceiver.applySemantics() {
              if (this@AbstractClickableNode.role != null) {
                  role = this@AbstractClickableNode.role!!
              }
              onClick(
                  action = {
                      performClick()
                      true
                  },
                  label = onClickLabel,
              )
              if (enabled) {
                  with(focusableNode) { applySemantics() }
              } else {
                  disabled()
              }
              applyAdditionalSemantics()
          }

          private var delayJob: Job? = null

          /** Handles emitting a [PressInteraction.Press]. */
          protected fun handlePressInteractionStart(event: IndirectPointerInputChange) {
              interactionSource?.let { interactionSource ->
                  val press = PressInteraction.Press(event.position)
                  if (delayPressInteraction()) {
                      delayJob = coroutineScope.launch {
                          delay(TapIndicationDelay)
                          interactionSource.emit(press)
                          indirectPointerPressInteraction = press
                      }
                  } else {
                      indirectPointerPressInteraction = press
                      coroutineScope.launch { interactionSource.emit(press) }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-2030-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 2030
    endLine: 2064
    sha256: 096c0410beb9c330b31d7337b69c9534b22d81543b17023b2f0da17a1b2ce885
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }
          }

          protected fun handlePressInteractionStart(event: PointerInputChange) {
              interactionSource?.let { interactionSource ->
                  val press = PressInteraction.Press(event.position)
                  if (delayPressInteraction()) {
                      delayJob = coroutineScope.launch {
                          delay(TapIndicationDelay)
                          interactionSource.emit(press)
                          pressInteraction = press
                      }
                  } else {
                      pressInteraction = press
                      coroutineScope.launch { interactionSource.emit(press) }
                  }
              }
          }

          /**
           * Handles emitting a [PressInteraction.Release].
           *
           * @param offset offset of the press
           * @param indirectPointer whether the source of this press was indirect pointer. False for
           *   pointer input.
           */
          protected fun handlePressInteractionRelease(offset: Offset, indirectPointer: Boolean) {
              interactionSource?.let { interactionSource ->
                  // To resolve b/414319919 it is important that we capture a reference to `delayJob`
                  // outside the coroutine block - when the CPU is busy we can end up handling
                  // press-release-press before the coroutine starts to execute, which means we can launch
                  // two jobs and mutate delayJob twice. At the time this function is called, delayJob
                  // points to the correct corresponding press event, so we just reference this instance
                  // to make sure that there is no issue if coroutines are executed after the next set of
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-2065-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 2065
    endLine: 2099
    sha256: 2a4973a4d08ad5f08e5a8bb8f269ef466cf808eeca513f508e3b8db801b01a60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  // gestures have been processed.
                  val job = delayJob
                  if (job?.isActive == true) {
                      // Immediately cancel the job to avoid a race condition from coroutine launching -
                      // if we wait until inside the launch to cancel it could be executed after the job
                      // is no longer active. An alternative approach would be to launch with
                      // start = CoroutineStart.UNDISPATCHED, but it is more reasonable to cancel
                      // outside the coroutine in any case.
                      job.cancel()
                      coroutineScope.launch {
                          // Wait for cancelling the job to finish if needed
                          job.join()
                          // The press released successfully, before the timeout duration - emit the press
                          // interaction instantly.
                          val press = PressInteraction.Press(offset)
                          val release = PressInteraction.Release(press)
                          interactionSource.emit(press)
                          interactionSource.emit(release)
                      }
                  } else {
                      val interaction =
                          if (indirectPointer) indirectPointerPressInteraction else pressInteraction
                      interaction?.let {
                          coroutineScope.launch {
                              // Important that we capture `interaction` outside the `launch`, rather than
                              // referring to it in here - the underlying fields are mutable and could
                              // change by the time this coroutine is executed
                              val endInteraction = PressInteraction.Release(it)
                              interactionSource.emit(endInteraction)
                          }
                      }
                  }
                  if (indirectPointer) {
                      indirectPointerPressInteraction = null
                  } else {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-2100-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 2100
    endLine: 2134
    sha256: 4eb1b66b13562cbd967b5225f0742e4e0dc3761a6a33583f1b7d5d93d3fcf02b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      pressInteraction = null
                  }
              }
          }

          /**
           * Handles emitting a [PressInteraction.Cancel].
           *
           * @param indirectPointer whether the source of this press was indirect pointer. False for
           *   pointer input.
           */
          protected fun handlePressInteractionCancel(indirectPointer: Boolean) {
              interactionSource?.let { interactionSource ->
                  if (delayJob?.isActive == true) {
                      // We didn't finish sending the press, and we are cancelled, so we don't emit
                      // any interaction.
                      delayJob?.cancel()
                  } else {
                      val interaction =
                          if (indirectPointer) indirectPointerPressInteraction else pressInteraction
                      interaction?.let {
                          val endInteraction = PressInteraction.Cancel(it)
                          // If this is being called from inside onDetach(), we are still attached, but
                          // the scope will be cancelled soon after - so the launch {} might not even
                          // start before it is cancelled. We don't want to use
                          // CoroutineStart.UNDISPATCHED, or always call tryEmit() as this will break
                          // other timing / cause some events to be missed for other cases. Instead just
                          // make sure we call tryEmit if we cancel the scope, before we finish emitting.
                          val handler =
                              coroutineScope.coroutineContext[Job]?.invokeOnCompletion {
                                  interactionSource.tryEmit(endInteraction)
                              }
                          coroutineScope.launch {
                              interactionSource.emit(endInteraction)
                              handler?.dispose()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 211
    endLine: 245
    sha256: 845f0a4ed8ba70774c385bd3cb919fcfb5f82b3d1b14e2788c70d448105c89e3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )
          )
      }

      /**
       * Configure component to receive clicks via input or accessibility "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds and show an indication as
       * specified in [indication] parameter.
       *
       * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
       * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
       * This reduces the performance cost of clickable during composition, as creating the [indication]
       * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
       * If you are only passing a remembered [MutableInteractionSource] and you are never using it
       * outside of clickable, it is recommended to instead provide `null` to enable lazy creation. If you
       * need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
       *
       * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
       * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
       * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
       * cannot be lazily created inside clickable.
       *
       * If you need to support double click or long click alongside the single click, consider using
       * [combinedClickable].
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-2135-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 2135
    endLine: 2169
    sha256: f661612deeb58bceeaba9f8ad2efebfd2cfd9033db352d9a70a669e296504e8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                          }
                      }
                  }
                  if (indirectPointer) {
                      indirectPointerPressInteraction = null
                  } else {
                      pressInteraction = null
                  }
              }
          }

          private fun delayPressInteraction(): Boolean =
              hasWaitingParent() || isComposeRootInScrollableContainer()

          private fun emitHoverEnter() {
              if (hoverInteraction == null) {
                  val interaction = HoverInteraction.Enter()
                  interactionSource?.let { interactionSource ->
                      coroutineScope.launch { interactionSource.emit(interaction) }
                  }
                  hoverInteraction = interaction
              }
          }

          private fun emitHoverExit() {
              hoverInteraction?.let { oldValue ->
                  val interaction = HoverInteraction.Exit(oldValue)
                  interactionSource?.let { interactionSource ->
                      coroutineScope.launch { interactionSource.emit(interaction) }
                  }
                  hoverInteraction = null
              }
          }
      }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-2170-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 2170
    endLine: 2194
    sha256: ea9f687a4b221244afab0c0ad778e179d7377459790e5cef9b25d3844888b9fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      internal fun DelegatingNode.hasWaitingParent(): Boolean {
          var gestureConnection: GestureConnection? = null
          traverseAncestorGestures { coordinator ->
              if (coordinator.gestureState == GestureState.Waiting) {
                  gestureConnection = coordinator
                  false
              } else {
                  true
              }
          }
          return gestureConnection != null
      }

      private fun unsupportedIndicationExceptionMessage(indication: Indication): String {
          return "clickable only supports IndicationNodeFactory instances provided to LocalIndication, " +
              "but Indication was provided instead. Either migrate the Indication implementation to " +
              "implement IndicationNodeFactory, or use the other clickable overload that takes an " +
              "Indication parameter, and explicitly pass LocalIndication.current there. The Indication" +
              " instance provided here was: $indication"
      }

      private fun IndirectPointerInputChange.changedToUp() = !isConsumed && previousPressed && !pressed

      private fun IndirectPointerInputChange.changedToUpIgnoreConsumed() = previousPressed && !pressed
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 246
    endLine: 280
    sha256: b08c3dec12bd08d87fc747855883aab27e0c04cda406e1fbbfccca0b749cef8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param indication indication to be shown when modified element is pressed. By default, indication
       *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
       *   [LocalIndication] to show theme default
       * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
       *   disabled for accessibility services
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onClick will be called when user clicks on the element
       */
      public fun Modifier.clickable(
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onClick: () -> Unit,
      ): Modifier =
          clickableWithIndicationIfNeeded(
              interactionSource = interactionSource,
              indication = indication,
          ) { intSource, indicationNodeFactory ->
              ClickableElement(
                  interactionSource = intSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = false,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 281
    endLine: 315
    sha256: fda51525e64dcced5020afe413a48d480a463d3b27a8fdb815d31f14b75ba9c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

      /**
       * Configure component to receive clicks, double clicks and long clicks via input or accessibility
       * "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds.
       *
       * If you need only click handling, and no double or long clicks, consider using [clickable]
       *
       * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
       * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
       * the other overload.
       *
       * If you are only creating this combinedClickable modifier inside composition, consider using the
       * other overload and explicitly passing `LocalIndication.current` for improved performance. For
       * more information see the documentation on the other overload.
       *
       * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
       * input will be aborted.
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
       *   [onDoubleClick] won't be invoked
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
       * @param onLongClick will be called when user long presses on the element
       * @param onDoubleClick will be called when user double clicks on the element
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 316
    endLine: 350
    sha256: b9d232c0e00aadf39821aebed4cd4afdad8f4ed23b4cb4862a9097f70567181c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
       * @param onClick will be called when user clicks on the element
       */
      @Deprecated(
          message =
              "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
          level = DeprecationLevel.HIDDEN,
      )
      public fun Modifier.combinedClickable(
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onLongClickLabel: String? = null,
          onLongClick: (() -> Unit)? = null,
          onDoubleClick: (() -> Unit)? = null,
          hapticFeedbackEnabled: Boolean = true,
          onClick: () -> Unit,
      ): Modifier =
          composed(
              inspectorInfo =
                  debugInspectorInfo {
                      name = "combinedClickable"
                      properties["enabled"] = enabled
                      properties["onClickLabel"] = onClickLabel
                      properties["role"] = role
                      properties["onClick"] = onClick
                      properties["onDoubleClick"] = onDoubleClick
                      properties["onLongClick"] = onLongClick
                      properties["onLongClickLabel"] = onLongClickLabel
                      properties["hapticFeedbackEnabled"] = hapticFeedbackEnabled
                  }
          ) {
              val localIndication = LocalIndication.current
              val interactionSource =
                  if (localIndication is IndicationNodeFactory) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 351
    endLine: 385
    sha256: bd4f317471d2370a604597d3186a8695f787fbddff7d22d482ace507ba732515
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // We can fast path here as it will be created inside clickable lazily
                      null
                  } else {
                      // We need an interaction source to pass between the indication modifier and
                      // clickable, so
                      // by creating here we avoid another composed down the line
                      remember { MutableInteractionSource() }
                  }
              Modifier.combinedClickable(
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
                  onDoubleClick = onDoubleClick,
                  onClick = onClick,
                  role = role,
                  indication = localIndication,
                  interactionSource = interactionSource,
                  hapticFeedbackEnabled = hapticFeedbackEnabled,
              )
          }

      /**
       * Configure component to receive clicks, double clicks and long clicks via input or accessibility
       * "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds.
       *
       * If you need only click handling, and no double or long clicks, consider using [clickable]
       *
       * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
       * explicitly provide an [Indication] instance. Note that this overload only supports
       * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
       * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
       * support [Indication] instances that are not [IndicationNodeFactory].
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 36
    endLine: 70
    sha256: cedad55191c5750b2ab4510653f8f2a0023f6e8f42923b03ddd31bb61fec9c33
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.hapticfeedback.HapticFeedbackType
      import androidx.compose.ui.input.indirect.IndirectPointerEvent
      import androidx.compose.ui.input.indirect.IndirectPointerInputChange
      import androidx.compose.ui.input.indirect.IndirectPointerInputModifierNode
      import androidx.compose.ui.input.key.Key
      import androidx.compose.ui.input.key.KeyEvent
      import androidx.compose.ui.input.key.KeyEventType.Companion.KeyDown
      import androidx.compose.ui.input.key.KeyEventType.Companion.KeyUp
      import androidx.compose.ui.input.key.KeyInputModifierNode
      import androidx.compose.ui.input.key.key
      import androidx.compose.ui.input.key.type
      import androidx.compose.ui.input.pointer.PointerEvent
      import androidx.compose.ui.input.pointer.PointerEventPass
      import androidx.compose.ui.input.pointer.PointerEventType
      import androidx.compose.ui.input.pointer.PointerInputChange
      import androidx.compose.ui.input.pointer.changedToUp
      import androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
      import androidx.compose.ui.input.pointer.isOutOfBounds
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatableNode
      import androidx.compose.ui.node.DelegatingNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.ObserverModifierNode
      import androidx.compose.ui.node.PointerInputModifierNode
      import androidx.compose.ui.node.SemanticsModifierNode
      import androidx.compose.ui.node.currentValueOf
      import androidx.compose.ui.node.invalidateSemantics
      import androidx.compose.ui.node.observeReads
      import androidx.compose.ui.node.requireDensity
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.LocalHapticFeedback
      import androidx.compose.ui.platform.LocalSoundEffect
      import androidx.compose.ui.platform.LocalViewConfiguration
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.semantics.Role
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 386
    endLine: 419
    sha256: be18b1a324f7afa6dec24913331e85d0005ef5e3482ff0da92088e1cf79f9fe8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
       * only when needed. This reduces the performance cost of combinedClickable during composition, as
       * creating the [indication] can be delayed until there is an incoming
       * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
       * [MutableInteractionSource] and you are never using it outside of combinedClickable, it is
       * recommended to instead provide `null` to enable lazy creation. If you need the [Indication] to be
       * created eagerly, provide a remembered [MutableInteractionSource].
       *
       * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
       * input will be aborted.
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
       *   [onDoubleClick] won't be invoked
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
       * @param onLongClick will be called when user long presses on the element
       * @param onDoubleClick will be called when user double clicks on the element
       * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
       * @param interactionSource [MutableInteractionSource] that will be used to dispatch
       *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param onClick will be called when user clicks on the element
       */
      public fun Modifier.combinedClickable(
          enabled: Boolean = true,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-420-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 420
    endLine: 454
    sha256: 66aa60bab1e8faf17b7b124bc2be6cd90c062a4c2c4b06f5816f1d687fa3d364
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onClickLabel: String? = null,
          role: Role? = null,
          onLongClickLabel: String? = null,
          onLongClick: (() -> Unit)? = null,
          onDoubleClick: (() -> Unit)? = null,
          hapticFeedbackEnabled: Boolean = true,
          interactionSource: MutableInteractionSource? = null,
          onClick: () -> Unit,
      ): Modifier {
          return this.then(
              CombinedClickableElement(
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
                  onDoubleClick = onDoubleClick,
                  onClick = onClick,
                  role = role,
                  interactionSource = interactionSource,
                  indicationNodeFactory = null,
                  useLocalIndication = true,
                  hapticFeedbackEnabled = hapticFeedbackEnabled,
              )
          )
      }

      @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      public fun Modifier.combinedClickable(
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onLongClickLabel: String? = null,
          onLongClick: (() -> Unit)? = null,
          onDoubleClick: (() -> Unit)? = null,
          onClick: () -> Unit,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-455-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 455
    endLine: 489
    sha256: b36d02c7473b14460f8d60d5a88eddd68e2ca67239e04077f686d09592874201
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): Modifier =
          composed(
              inspectorInfo =
                  debugInspectorInfo {
                      name = "combinedClickable"
                      properties["enabled"] = enabled
                      properties["onClickLabel"] = onClickLabel
                      properties["role"] = role
                      properties["onClick"] = onClick
                      properties["onDoubleClick"] = onDoubleClick
                      properties["onLongClick"] = onLongClick
                      properties["onLongClickLabel"] = onLongClickLabel
                  }
          ) {
              val localIndication = LocalIndication.current
              val interactionSource =
                  if (localIndication is IndicationNodeFactory) {
                      // We can fast path here as it will be created inside clickable lazily
                      null
                  } else {
                      // We need an interaction source to pass between the indication modifier and
                      // clickable, so
                      // by creating here we avoid another composed down the line
                      remember { MutableInteractionSource() }
                  }
              Modifier.combinedClickable(
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
                  onDoubleClick = onDoubleClick,
                  onClick = onClick,
                  role = role,
                  indication = localIndication,
                  interactionSource = interactionSource,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-490-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 490
    endLine: 524
    sha256: 286849b9a4b76f24523ab2d968b57e45093163dbcb991a9007f25cd9fb72ebdf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  hapticFeedbackEnabled = true,
              )
          }

      /**
       * Configure component to receive clicks, double clicks and long clicks via input or accessibility
       * "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds.
       *
       * If you need only click handling, and no double or long clicks, consider using [clickable].
       *
       * Add this modifier to the element to make it clickable within its bounds.
       *
       * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
       * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
       * This reduces the performance cost of clickable during composition, as creating the [indication]
       * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
       * If you are only passing a remembered [MutableInteractionSource] and you are never using it
       * outside of clickable, it is recommended to instead provide `null` to enable lazy creation. If you
       * need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
       *
       * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
       * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
       * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
       * cannot be lazily created inside clickable.
       *
       * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
       * input will be aborted.
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
       * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
       * not need to do this when removing a composable because Compose guarantees it completes via the
       * snapshot state system.)
       *
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-525-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 525
    endLine: 559
    sha256: 8a166e3999883168be3b514c61a631c0953e233e0b46dab0ac272a3fc4d745de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.foundation.samples.ClickableSample
       * @param interactionSource [MutableInteractionSource] that will be used to emit
       *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
       *   [MutableInteractionSource] will be created if needed.
       * @param indication indication to be shown when modified element is pressed. By default, indication
       *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
       *   [LocalIndication] to show theme default
       * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
       *   [onDoubleClick] won't be invoked
       * @param onClickLabel semantic / accessibility label for the [onClick] action
       * @param role the type of user interface element. Accessibility services might use this to describe
       *   the element or do customizations
       * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
       * @param onLongClick will be called when user long presses on the element
       * @param onDoubleClick will be called when user double clicks on the element
       * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
       * @param onClick will be called when user clicks on the element
       */
      public fun Modifier.combinedClickable(
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onLongClickLabel: String? = null,
          onLongClick: (() -> Unit)? = null,
          onDoubleClick: (() -> Unit)? = null,
          hapticFeedbackEnabled: Boolean = true,
          onClick: () -> Unit,
      ): Modifier =
          clickableWithIndicationIfNeeded(
              interactionSource = interactionSource,
              indication = indication,
          ) { intSource, indicationNodeFactory ->
              CombinedClickableElement(
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-560-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 560
    endLine: 594
    sha256: 4b89be83768928f9f2bb98ca023ce6c6dc41fdcc3634312775f86dbf4ddac0c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  interactionSource = intSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = false,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
                  onDoubleClick = onDoubleClick,
                  hapticFeedbackEnabled = hapticFeedbackEnabled,
              )
          }

      @Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      public fun Modifier.combinedClickable(
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          enabled: Boolean = true,
          onClickLabel: String? = null,
          role: Role? = null,
          onLongClickLabel: String? = null,
          onLongClick: (() -> Unit)? = null,
          onDoubleClick: (() -> Unit)? = null,
          onClick: () -> Unit,
      ): Modifier =
          clickableWithIndicationIfNeeded(
              interactionSource = interactionSource,
              indication = indication,
          ) { intSource, indicationNodeFactory ->
              CombinedClickableElement(
                  interactionSource = intSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = false,
                  enabled = enabled,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-595-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 595
    endLine: 629
    sha256: 51cfc60b20e804a5269e41fe9f5a2f745ca4a84191165fae0bd717d4198820c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
                  onDoubleClick = onDoubleClick,
                  hapticFeedbackEnabled = true,
              )
          }

      /**
       * Utility Modifier factory that handles edge cases for [interactionSource], and [indication].
       * [createClickable] is the lambda that creates the actual clickable element, which will be chained
       * with [Modifier.indication] if needed.
       */
      internal inline fun Modifier.clickableWithIndicationIfNeeded(
          interactionSource: MutableInteractionSource?,
          indication: Indication?,
          crossinline createClickable: (MutableInteractionSource?, IndicationNodeFactory?) -> Modifier,
      ): Modifier {
          return this.then(
              when {
                  // Fast path - indication is managed internally
                  indication is IndicationNodeFactory -> createClickable(interactionSource, indication)
                  // Fast path - no need for indication
                  indication == null -> createClickable(interactionSource, null)
                  // Non-null Indication (not IndicationNodeFactory) with a non-null InteractionSource
                  interactionSource != null ->
                      Modifier.indication(interactionSource, indication)
                          .then(createClickable(interactionSource, null))
                  // Non-null Indication (not IndicationNodeFactory) with a null InteractionSource, so we
                  // need
                  // to use composed to create an InteractionSource that can be shared. This should be a
                  // rare
                  // code path and can only be hit from new callers.
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-630-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 630
    endLine: 664
    sha256: cec8593bdf6848b2c6a494134a432794c1bd8d4d5c022b629de40f6338deda27
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  else ->
                      Modifier.composed {
                          val newInteractionSource = remember { MutableInteractionSource() }
                          Modifier.indication(newInteractionSource, indication)
                              .then(createClickable(newInteractionSource, null))
                      }
              }
          )
      }

      /**
       * How long to wait before appearing 'pressed' (emitting [PressInteraction.Press]) - if a touch down
       * will quickly become a drag / scroll, this timeout means that we don't show a press effect.
       */
      internal expect val TapIndicationDelay: Long

      /**
       * Returns whether the root Compose layout node is hosted in a scrollable container outside of
       * Compose. On Android this will be whether the root View is in a scrollable ViewGroup, as even if
       * nothing in the Compose part of the hierarchy is scrollable, if the View itself is in a scrollable
       * container, we still want to delay presses in case presses in Compose convert to a scroll outside
       * of Compose.
       */
      internal expect fun DelegatableNode.isComposeRootInScrollableContainer(): Boolean

      /**
       * Whether the specified [KeyEvent] should trigger a press for a clickable component, i.e. whether
       * it is associated with a press of an enter key or dpad centre.
       */
      private val KeyEvent.isPress: Boolean
          get() = type == KeyDown && isEnter

      /**
       * Whether the specified [KeyEvent] should trigger a click for a clickable component, i.e. whether
       * it is associated with a release of an enter key or dpad centre.
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-665-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 665
    endLine: 699
    sha256: 24c1f9eac5f1bf9df926c9871af15ec7766b4bd946a1cb3cca70c2361019b57e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       */
      private val KeyEvent.isClick: Boolean
          get() = type == KeyUp && isEnter

      private val KeyEvent.isEnter: Boolean
          get() =
              when (key) {
                  Key.DirectionCenter,
                  Key.Enter,
                  Key.NumPadEnter,
                  Key.Spacebar -> true

                  else -> false
              }

      private class ClickableElement(
          private val interactionSource: MutableInteractionSource?,
          private val indicationNodeFactory: IndicationNodeFactory?,
          private val useLocalIndication: Boolean,
          private val enabled: Boolean,
          private val onClickLabel: String?,
          private val role: Role?,
          private val onClick: () -> Unit,
      ) : ModifierNodeElement<ClickableNode>() {
          override fun create() =
              ClickableNode(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-700-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 700
    endLine: 734
    sha256: b5dfe6afcf72b467e3fc0d8741393851d10ae62fd41ce78517327acfce7287f7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun update(node: ClickableNode) {
              node.update(
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
                  onClick = onClick,
              )
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "clickable"
              properties["enabled"] = enabled
              properties["onClick"] = onClick
              properties["onClickLabel"] = onClickLabel
              properties["role"] = role
              properties["interactionSource"] = interactionSource
              properties["indicationNodeFactory"] = indicationNodeFactory
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as ClickableElement

              if (interactionSource != other.interactionSource) return false
              if (indicationNodeFactory != other.indicationNodeFactory) return false
              if (useLocalIndication != other.useLocalIndication) return false
              if (enabled != other.enabled) return false
              if (onClickLabel != other.onClickLabel) return false
              if (role != other.role) return false
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 71
    endLine: 105
    sha256: ab083708c4c07e7db7a2bb0015ff918919e8672eefc3c94498a193e2fcdd84d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.semantics.SemanticsPropertyReceiver
      import androidx.compose.ui.semantics.disabled
      import androidx.compose.ui.semantics.onClick
      import androidx.compose.ui.semantics.onLongClick
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.center
      import androidx.compose.ui.unit.toOffset
      import androidx.compose.ui.util.fastAll
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastForEach
      import kotlin.math.abs
      import kotlin.math.max
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.delay
      import kotlinx.coroutines.launch

      /**
       * Configure component to receive clicks via input or accessibility "click" event.
       *
       * Add this modifier to the element to make it clickable within its bounds and show a default
       * indication when it's pressed.
       *
       * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
       * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
       * the other overload.
       *
       * If you are only creating this clickable modifier inside composition, consider using the other
       * overload and explicitly passing `LocalIndication.current` for improved performance. For more
       * information see the documentation on the other overload.
       *
       * If you need to support double click or long click alongside the single click, consider using
       * [combinedClickable].
       *
       * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-735-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 735
    endLine: 769
    sha256: 3fe53d29607062491134a4f6b56bcd77845961dcf10cdd9f8c666e58c1ae17bb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (onClick !== other.onClick) return false

              return true
          }

          override fun hashCode(): Int {
              var result = (interactionSource?.hashCode() ?: 0)
              result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
              result = 31 * result + useLocalIndication.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + (onClickLabel?.hashCode() ?: 0)
              result = 31 * result + (role?.hashCode() ?: 0)
              result = 31 * result + onClick.hashCode()
              return result
          }
      }

      private class CombinedClickableElement(
          private val interactionSource: MutableInteractionSource?,
          private val indicationNodeFactory: IndicationNodeFactory?,
          private val useLocalIndication: Boolean,
          private val enabled: Boolean,
          private val onClickLabel: String?,
          private val role: Role?,
          private val onClick: () -> Unit,
          private val onLongClickLabel: String?,
          private val onLongClick: (() -> Unit)?,
          private val onDoubleClick: (() -> Unit)?,
          private val hapticFeedbackEnabled: Boolean,
      ) : ModifierNodeElement<CombinedClickableNode>() {
          override fun create() =
              CombinedClickableNode(
                  onClick = onClick,
                  onLongClickLabel = onLongClickLabel,
                  onLongClick = onLongClick,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-770-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 770
    endLine: 804
    sha256: 4a9366ed1559e6ac73b3b65cc812d6747b20bfca0684f68068c947e95f895258
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  onDoubleClick = onDoubleClick,
                  hapticFeedbackEnabled = hapticFeedbackEnabled,
                  interactionSource = interactionSource,
                  indicationNodeFactory = indicationNodeFactory,
                  useLocalIndication = useLocalIndication,
                  enabled = enabled,
                  onClickLabel = onClickLabel,
                  role = role,
              )

          override fun update(node: CombinedClickableNode) {
              node.hapticFeedbackEnabled = hapticFeedbackEnabled
              node.update(
                  onClick,
                  onLongClickLabel,
                  onLongClick,
                  onDoubleClick,
                  interactionSource,
                  indicationNodeFactory,
                  useLocalIndication,
                  enabled,
                  onClickLabel,
                  role,
              )
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "combinedClickable"
              properties["indicationNodeFactory"] = indicationNodeFactory
              properties["interactionSource"] = interactionSource
              properties["enabled"] = enabled
              properties["onClickLabel"] = onClickLabel
              properties["role"] = role
              properties["onClick"] = onClick
              properties["onDoubleClick"] = onDoubleClick
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 805
    endLine: 839
    sha256: cfd35f408eb90c136778ee465ecbd69110e0a2b565b1b0f7e84533b0161bd8db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              properties["onLongClick"] = onLongClick
              properties["onLongClickLabel"] = onLongClickLabel
              properties["hapticFeedbackEnabled"] = hapticFeedbackEnabled
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as CombinedClickableElement

              if (interactionSource != other.interactionSource) return false
              if (indicationNodeFactory != other.indicationNodeFactory) return false
              if (useLocalIndication != other.useLocalIndication) return false
              if (enabled != other.enabled) return false
              if (onClickLabel != other.onClickLabel) return false
              if (role != other.role) return false
              if (onClick !== other.onClick) return false
              if (onLongClickLabel != other.onLongClickLabel) return false
              if (onLongClick !== other.onLongClick) return false
              if (onDoubleClick !== other.onDoubleClick) return false
              if (hapticFeedbackEnabled != other.hapticFeedbackEnabled) return false

              return true
          }

          override fun hashCode(): Int {
              var result = (interactionSource?.hashCode() ?: 0)
              result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
              result = 31 * result + useLocalIndication.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + (onClickLabel?.hashCode() ?: 0)
              result = 31 * result + (role?.hashCode() ?: 0)
              result = 31 * result + onClick.hashCode()
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 840
    endLine: 874
    sha256: a17cb3d465a6b58d9e7a47388533b930ecbe60c8d468c81a6922b13eb3090c62
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + (onLongClickLabel?.hashCode() ?: 0)
              result = 31 * result + (onLongClick?.hashCode() ?: 0)
              result = 31 * result + (onDoubleClick?.hashCode() ?: 0)
              result = 31 * result + hapticFeedbackEnabled.hashCode()
              return result
          }
      }

      internal open class ClickableNode(
          interactionSource: MutableInteractionSource?,
          indicationNodeFactory: IndicationNodeFactory?,
          useLocalIndication: Boolean,
          enabled: Boolean,
          onClickLabel: String?,
          role: Role?,
          onClick: () -> Unit,
      ) :
          AbstractClickableNode(
              interactionSource = interactionSource,
              indicationNodeFactory = indicationNodeFactory,
              useLocalIndication = useLocalIndication,
              enabled = enabled,
              onClickLabel = onClickLabel,
              role = role,
              onClick = onClick,
          ) {

          private var downEvent: PointerInputChange? = null
          private var indirectDownEvent: IndirectPointerInputChange? = null

          @OptIn(ExperimentalFoundationApi::class)
          override fun onPointerEvent(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              bounds: IntSize,
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 875
    endLine: 909
    sha256: a56737661d96e5c1dc98d111dfabb0e60033c1dd2187c2f7d249389fac7b7f24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              super.onPointerEvent(pointerEvent, pass, bounds)
              if (pass == PointerEventPass.Main) {
                  if (downEvent == null) {
                      if (pointerEvent.isChangedToDown(requireUnconsumed = true)) {
                          handleDownEvent(pointerEvent.changes[0])
                      }
                  } else {
                      if (pointerEvent.changes.fastAll { it.changedToUp() }) {
                          // All pointers are up
                          handleUpEvent(pointerEvent.changes[0])
                      } else {
                          // Other events need to be checked for consumption / bounds related
                          // cancellation.
                          handleNonUpEventIfNeeded(pointerEvent, bounds)
                      }
                  }
              } else if (pass == PointerEventPass.Final) {
                  checkForCancellation(pointerEvent)
                  // The first final pass after the click was recognized, reset.
                  if (gestureState == GestureState.Recognized) {
                      gestureState = GestureState.Idle
                  }
              }
          }

          override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
              super.onIndirectPointerEvent(event, pass)
              if (pass == PointerEventPass.Main) {
                  if (indirectDownEvent == null) {
                      if (event.changes.fastAny { it.changedToDownIgnoreConsumed() }) {
                          handleDownEvent(event.changes[0])
                      }
                  } else {
                      if (event.changes.fastAll { it.changedToUp() }) {
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-910-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 910
    endLine: 944
    sha256: 7370b70935fcd4e255eb315b7da2863b2b6de7dbc6a3a501e0b4ed6c9cb68128
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          // All pointers are up
                          handleUpEvent(event.changes[0])
                      } else {
                          // Other events need to be checked for consumption / exceeding touch slop
                          handleNonUpEventIfNeeded(event)
                      }
                  }
              } else if (pass == PointerEventPass.Final) {
                  checkForCancellation(event)
                  // The first final pass after the click was recognized, reset.
                  if (gestureState == GestureState.Recognized) {
                      gestureState = GestureState.Idle
                  }
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun handleDownEvent(down: PointerInputChange) {
              down.consume()
              this.downEvent = down
              if (enabled) {
                  gestureState = GestureState.Waiting
                  handlePressInteractionStart(down)
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun handleDownEvent(down: IndirectPointerInputChange) {
              down.consume()
              this.indirectDownEvent = down
              if (enabled) {
                  gestureState = GestureState.Waiting
                  handlePressInteractionStart(down)
              }
          }
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-945-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 945
    endLine: 979
    sha256: 1cc512d70433e6b9cc505782f1c3276ef7a91023ec4cebac52bde472c3d11dae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          private fun handleUpEvent(up: PointerInputChange) {
              up.consume()
              if (enabled) {
                  gestureState = GestureState.Recognized
                  handlePressInteractionRelease(downEvent!!.position, indirectPointer = false)
                  performClick()
              }
              this.downEvent = null
          }

          private fun handleUpEvent(up: IndirectPointerInputChange) {
              up.consume()
              if (enabled) {
                  gestureState = GestureState.Recognized
                  handlePressInteractionRelease(indirectDownEvent!!.position, indirectPointer = true)
                  performClick()
              }
              this.indirectDownEvent = null
          }

          private fun handleNonUpEventIfNeeded(pointerEvent: PointerEvent, bounds: IntSize) {
              val touchPadding = getExtendedTouchPadding(bounds)
              if (
                  pointerEvent.changes.fastAny { it.isConsumed || it.isOutOfBounds(bounds, touchPadding) }
              ) {
                  cancelInput(indirectPointer = false)
              }
          }

          private fun handleNonUpEventIfNeeded(indirectPointerEvent: IndirectPointerEvent) {
              val touchSlop = currentValueOf(LocalViewConfiguration).touchSlop
              if (
                  indirectPointerEvent.changes.fastAny {
                      val distanceFromPress = it.position - indirectDownEvent!!.position
  - id: live-androidx-foundation-foundation-foundation-clickable-lines-980-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt
    startLine: 980
    endLine: 1014
    sha256: ab7da76d70e4e9bc16ec685e9d36ffb1ac0368e9446a5172d8b9db5827f15d32
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      val isOutOfBounds = abs(distanceFromPress.getDistance()) > touchSlop
                      it.isConsumed || isOutOfBounds
                  }
              ) {
                  cancelInput(indirectPointer = true)
              }
          }

          private fun checkForCancellation(pointerEvent: PointerEvent) {
              if (downEvent != null) {
                  // Check for cancel by position consumption. We can look on the Final pass of the
                  // existing pointer event because it comes after the pass we checked above.
                  if (pointerEvent.changes.fastAny { it.isConsumed && it != downEvent }) {
                      cancelInput(indirectPointer = false)
                  }
              }
          }

          private fun checkForCancellation(indirectPointerEvent: IndirectPointerEvent) {
              if (indirectDownEvent != null) {
                  // Check for cancel by position consumption. We can look on the Final pass of the
                  // existing pointer event because it comes after the pass we checked above.
                  if (indirectPointerEvent.changes.fastAny { it.isConsumed && it != indirectDownEvent }) {
                      cancelInput(indirectPointer = true)
                  }
              }
          }

          override fun onCancelPointerInput() {
              super.onCancelPointerInput()
              cancelInput(indirectPointer = false)
          }

          override fun onCancelIndirectPointerInput() {
              cancelInput(indirectPointer = true)
compose:
  id: live-androidx-foundation-foundation-foundation-clickable
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1
      title: androidx.compose.foundation Clickable.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1015
      title: androidx.compose.foundation Clickable.kt source (lines 1015–1049)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1015-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1050
      title: androidx.compose.foundation Clickable.kt source (lines 1050–1084)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1050-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-106
      title: androidx.compose.foundation Clickable.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1085
      title: androidx.compose.foundation Clickable.kt source (lines 1085–1119)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1085-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1120
      title: androidx.compose.foundation Clickable.kt source (lines 1120–1154)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1120-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1155
      title: androidx.compose.foundation Clickable.kt source (lines 1155–1189)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1155-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1190
      title: androidx.compose.foundation Clickable.kt source (lines 1190–1224)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1190-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1225
      title: androidx.compose.foundation Clickable.kt source (lines 1225–1259)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1225-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1260
      title: androidx.compose.foundation Clickable.kt source (lines 1260–1294)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1260-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1295
      title: androidx.compose.foundation Clickable.kt source (lines 1295–1329)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1295-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1330
      title: androidx.compose.foundation Clickable.kt source (lines 1330–1364)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1330-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1365
      title: androidx.compose.foundation Clickable.kt source (lines 1365–1399)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1365-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1400
      title: androidx.compose.foundation Clickable.kt source (lines 1400–1434)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1400-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-141
      title: androidx.compose.foundation Clickable.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1435
      title: androidx.compose.foundation Clickable.kt source (lines 1435–1469)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1435-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1470
      title: androidx.compose.foundation Clickable.kt source (lines 1470–1504)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1470-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1505
      title: androidx.compose.foundation Clickable.kt source (lines 1505–1539)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1505-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1540
      title: androidx.compose.foundation Clickable.kt source (lines 1540–1574)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1540-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1575
      title: androidx.compose.foundation Clickable.kt source (lines 1575–1609)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1575-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1610
      title: androidx.compose.foundation Clickable.kt source (lines 1610–1644)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1610-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1645
      title: androidx.compose.foundation Clickable.kt source (lines 1645–1679)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1645-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1680
      title: androidx.compose.foundation Clickable.kt source (lines 1680–1714)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1680-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1715
      title: androidx.compose.foundation Clickable.kt source (lines 1715–1749)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1715-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1750
      title: androidx.compose.foundation Clickable.kt source (lines 1750–1784)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1750-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-176
      title: androidx.compose.foundation Clickable.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1785
      title: androidx.compose.foundation Clickable.kt source (lines 1785–1819)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1785-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1820
      title: androidx.compose.foundation Clickable.kt source (lines 1820–1854)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1820-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1855
      title: androidx.compose.foundation Clickable.kt source (lines 1855–1889)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1855-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1890
      title: androidx.compose.foundation Clickable.kt source (lines 1890–1924)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1890-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1925
      title: androidx.compose.foundation Clickable.kt source (lines 1925–1959)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1925-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1960
      title: androidx.compose.foundation Clickable.kt source (lines 1960–1994)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1960-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-1995
      title: androidx.compose.foundation Clickable.kt source (lines 1995–2029)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-1995-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-2030
      title: androidx.compose.foundation Clickable.kt source (lines 2030–2064)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-2030-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-2065
      title: androidx.compose.foundation Clickable.kt source (lines 2065–2099)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-2065-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-2100
      title: androidx.compose.foundation Clickable.kt source (lines 2100–2134)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-2100-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-211
      title: androidx.compose.foundation Clickable.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-2135
      title: androidx.compose.foundation Clickable.kt source (lines 2135–2169)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-2135-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-2170
      title: androidx.compose.foundation Clickable.kt source (lines 2170–2194)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-2170-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-246
      title: androidx.compose.foundation Clickable.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-281
      title: androidx.compose.foundation Clickable.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-316
      title: androidx.compose.foundation Clickable.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-351
      title: androidx.compose.foundation Clickable.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-36
      title: androidx.compose.foundation Clickable.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-386
      title: androidx.compose.foundation Clickable.kt source (lines 386–419)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-420
      title: androidx.compose.foundation Clickable.kt source (lines 420–454)
      aliases:
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-420-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-455
      title: androidx.compose.foundation Clickable.kt source (lines 455–489)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-455-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-490
      title: androidx.compose.foundation Clickable.kt source (lines 490–524)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-490-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-525
      title: androidx.compose.foundation Clickable.kt source (lines 525–559)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-525-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-560
      title: androidx.compose.foundation Clickable.kt source (lines 560–594)
      aliases:
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-560-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-595
      title: androidx.compose.foundation Clickable.kt source (lines 595–629)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-595-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-630
      title: androidx.compose.foundation Clickable.kt source (lines 630–664)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-630-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-665
      title: androidx.compose.foundation Clickable.kt source (lines 665–699)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-665-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-700
      title: androidx.compose.foundation Clickable.kt source (lines 700–734)
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-700-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-71
      title: androidx.compose.foundation Clickable.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-735
      title: androidx.compose.foundation Clickable.kt source (lines 735–769)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-735-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-770
      title: androidx.compose.foundation Clickable.kt source (lines 770–804)
      aliases:
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-770-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-805
      title: androidx.compose.foundation Clickable.kt source (lines 805–839)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-805-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-840
      title: androidx.compose.foundation Clickable.kt source (lines 840–874)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-840-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-875
      title: androidx.compose.foundation Clickable.kt source (lines 875–909)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-875-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-910
      title: androidx.compose.foundation Clickable.kt source (lines 910–944)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-910-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-945
      title: androidx.compose.foundation Clickable.kt source (lines 945–979)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-945-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-clickable-lines-980
      title: androidx.compose.foundation Clickable.kt source (lines 980–1014)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-clickable-lines-980-source
      relatedIds: []
---

# androidx.compose.foundation Clickable.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt

## androidx.compose.foundation Clickable.kt source (lines 1–35)

/*
 * Copyright 2019 The Android Open Source Project
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

package androidx.compose.foundation

import androidx.annotation.CallSuper
import androidx.annotation.EmptySuper
import androidx.collection.mutableLongObjectMapOf
import androidx.compose.foundation.gestures.changedToDownIgnoreConsumed
import androidx.compose.foundation.gestures.isChangedToDown
import androidx.compose.foundation.gestures.isDeepPress
import androidx.compose.foundation.interaction.HoverInteraction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.internal.requirePrecondition
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.focus.Focusability
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.hapticfeedback.HapticFeedback

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1015–1049)

    }

    private fun cancelInput(indirectPointer: Boolean) {
        // Don't cancel pointer events when cancelling indirect events (because of losing focus for
        // example), and vice versa.
        if (indirectPointer) {
            indirectDownEvent = null
        } else {
            downEvent = null
        }
        handlePressInteractionCancel(indirectPointer = indirectPointer)
        gestureState = GestureState.Idle
    }

    fun update(
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,
        enabled: Boolean,
        onClickLabel: String?,
        role: Role?,
        onClick: () -> Unit,
    ) {
        // enabled and onClick are captured inside callbacks, not as an input to detectTapGestures,
        // so no need to reset pointer input handling when they change
        updateCommon(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1015-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1050–1084)


    final override fun onClickKeyDownEvent(event: KeyEvent) = false

    final override fun onClickKeyUpEvent(event: KeyEvent): Boolean {
        performClick()
        return true
    }
}

private class CombinedClickableNode(
    onClick: () -> Unit,
    private var onLongClickLabel: String?,
    private var onLongClick: (() -> Unit)?,
    private var onDoubleClick: (() -> Unit)?,
    var hapticFeedbackEnabled: Boolean,
    interactionSource: MutableInteractionSource?,
    indicationNodeFactory: IndicationNodeFactory?,
    useLocalIndication: Boolean,
    enabled: Boolean,
    onClickLabel: String?,
    role: Role?,
) :
    CompositionLocalConsumerModifierNode,
    AbstractClickableNode(
        interactionSource = interactionSource,
        indicationNodeFactory = indicationNodeFactory,
        useLocalIndication = useLocalIndication,
        enabled = enabled,
        onClickLabel = onClickLabel,
        role = role,
        onClick = onClick,
    ) {
    class DoubleKeyClickState(val job: Job) {
        var doubleTapMinTimeMillisElapsed: Boolean = false
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1050-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 106–140)

 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *
 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
 *   disabled for accessibility services
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onClick will be called when user clicks on the element
 */
@Deprecated(
    message =
        "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
    level = DeprecationLevel.HIDDEN,
)
public fun Modifier.clickable(
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onClick: () -> Unit,
): Modifier =
    composed(
        inspectorInfo =
            debugInspectorInfo {
                name = "clickable"
                properties["enabled"] = enabled
                properties["onClickLabel"] = onClickLabel
                properties["role"] = role
                properties["onClick"] = onClick
            }
    ) {
        val localIndication = LocalIndication.current
        val interactionSource =

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1085–1119)


    private val longKeyPressJobs = mutableLongObjectMapOf<Job>()
    private val doubleKeyClickStates = mutableLongObjectMapOf<DoubleKeyClickState>()
    private var downEvent: PointerInputChange? = null
    private var longPressJob: Job? = null
    private var tapJob: Job? = null
    private var isSecondTap = false
    private var longPressTriggered = false
    private var firstTapUpTime = -1L
    private var ignoreNextUp = false

    private var indirectDownEvent: IndirectPointerInputChange? = null
    private var indirectLongPressJob: Job? = null
    private var indirectTapJob: Job? = null
    private var indirectIsSecondTap = false
    private var indirectLongPressTriggered = false
    private var indirectFirstTapUpTime = -1L
    private var indirectIgnoreNextUp = false

    @OptIn(ExperimentalFoundationApi::class)
    override fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,
    ) {
        super.onPointerEvent(pointerEvent, pass, bounds)

        if (pass == PointerEventPass.Main) {
            if (downEvent == null) {
                if (pointerEvent.isChangedToDown(requireUnconsumed = true)) {
                    handleDownEvent(pointerEvent.changes[0])
                }
            } else {
                if (pointerEvent.isDeepPress) {
                    handleDeepPress()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1085-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1120–1154)

                }

                if (longPressTriggered) {
                    // This branch specifically handles the case where the long press callback has
                    // already been invoked.
                    if (pointerEvent.changes.fastAll { it.changedToUpIgnoreConsumed() }) {
                        // A long press already fired its callback and all the pointers are up. We
                        // must reset our state even if the up event was already consumed by a
                        // child.
                        val up = pointerEvent.changes[0]
                        up.consume()
                        handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = downEvent!!)
                    } else {
                        // Once a long press has triggered, consume every event until pointers are
                        // up.
                        pointerEvent.changes.fastForEach { it.consume() }
                    }
                    return
                }

                if (pointerEvent.changes.fastAll { it.changedToUp() }) {
                    // All pointers are up
                    val up = pointerEvent.changes[0]
                    up.consume()
                    handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = downEvent!!)
                } else {
                    // Other events need to be checked for consumption / bounds related
                    // cancellation.
                    handleNonUpEventIfNeeded(pointerEvent, bounds)
                }
            }
        } else if (pass == PointerEventPass.Final) {
            checkForCancellation(pointerEvent)
        }
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1120-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1155–1189)


    override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
        super.onIndirectPointerEvent(event, pass)
        if (pass == PointerEventPass.Main) {
            if (indirectDownEvent == null) {
                if (event.changes.fastAny { it.changedToDownIgnoreConsumed() }) {
                    handleDownEvent(event.changes[0])
                }
            } else {
                if (indirectLongPressTriggered) {
                    // This branch specifically handles the case where the long press callback has
                    // already been invoked.
                    if (event.changes.fastAll { it.changedToUpIgnoreConsumed() }) {
                        // A long press already fired its callback and all the pointers are up. We
                        // must reset our state even if the up event was already consumed by a
                        // child.
                        val up = event.changes[0]
                        up.consume()
                        handleUpEvent(
                            uptimeMillis = up.uptimeMillis,
                            downChange = indirectDownEvent!!,
                        )
                    } else {
                        // Once a long press has triggered, consume every event until pointers are
                        // up
                        event.changes.fastForEach { it.consume() }
                    }
                    return
                }

                if (event.changes.fastAll { it.changedToUp() }) {
                    // All pointers are up
                    val up = event.changes[0]
                    up.consume()
                    handleUpEvent(uptimeMillis = up.uptimeMillis, downChange = indirectDownEvent!!)

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1155-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1190–1224)

                } else {
                    // Other events need to be checked for consumption / exceeding touch slop
                    handleNonUpEventIfNeeded(event)
                }
            }
        } else if (pass == PointerEventPass.Final) {
            checkForCancellation(event)
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun handleDownEvent(down: PointerInputChange) {
        down.consume()
        this.downEvent = down

        if (enabled) {
            if (tapJob?.isActive == true) {
                val minTime = currentValueOf(LocalViewConfiguration).doubleTapMinTimeMillis
                if (down.uptimeMillis - firstTapUpTime < minTime) {
                    ignoreNextUp = true
                    // Ignore this down event, don't check for long press / emit press
                    // interactions
                    return
                } else {
                    isSecondTap = true
                    tapJob?.cancel()
                    tapJob = null
                }
            }
            longPressTriggered = false

            handlePressInteractionStart(down)

            if (onLongClick != null) {
                longPressJob = coroutineScope.launch {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1190-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1225–1259)

                    delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                    onLongClick?.invoke()
                    if (hapticFeedbackEnabled) {
                        currentValueOf(LocalHapticFeedback)
                            .performHapticFeedback(HapticFeedbackType.LongPress)
                    }
                    longPressTriggered = true
                    tapJob?.cancel()
                    tapJob = null
                    longPressJob = null
                }
            }
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun handleDownEvent(down: IndirectPointerInputChange) {
        down.consume()
        this.indirectDownEvent = down

        if (enabled) {
            if (indirectTapJob?.isActive == true) {
                val minTime = currentValueOf(LocalViewConfiguration).doubleTapMinTimeMillis
                if (down.uptimeMillis - indirectFirstTapUpTime < minTime) {
                    indirectIgnoreNextUp = true
                    // Ignore this down event, don't check for long press / emit press
                    // interactions
                    return
                } else {
                    indirectIsSecondTap = true
                    indirectTapJob?.cancel()
                    indirectTapJob = null
                }
            }
            indirectLongPressTriggered = false

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1225-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1260–1294)


            handlePressInteractionStart(down)

            if (onLongClick != null) {
                indirectLongPressJob = coroutineScope.launch {
                    delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                    onLongClick?.invoke()
                    if (hapticFeedbackEnabled) {
                        currentValueOf(LocalHapticFeedback)
                            .performHapticFeedback(HapticFeedbackType.LongPress)
                    }
                    indirectLongPressTriggered = true
                    indirectTapJob?.cancel()
                    indirectTapJob = null
                    indirectLongPressJob = null
                }
            }
        }
    }

    private fun handleUpEvent(uptimeMillis: Long, downChange: PointerInputChange) {
        if (enabled && !ignoreNextUp) {
            handlePressInteractionRelease(downChange.position, indirectPointer = false)
            firstTapUpTime = uptimeMillis // store uptime for double tap check
            if (!longPressTriggered) {
                if (isSecondTap) {
                    onDoubleClick?.invoke()
                } else {
                    if (onDoubleClick != null) {
                        // Play the click sound immediately, even if it later becomes a double click
                        playClickSound()
                        tapJob = coroutineScope.launch {
                            delay(currentValueOf(LocalViewConfiguration).doubleTapTimeoutMillis)
                            // Only call onClick() since we already played the sound
                            onClick()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1260-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1295–1329)

                            tapJob = null
                        }
                    } else {
                        performClick()
                    }
                }
            }
        }
        this.downEvent = null
        ignoreNextUp = false
        isSecondTap = false
        longPressJob?.cancel()
        longPressJob = null
        longPressTriggered = false
    }

    private fun handleUpEvent(uptimeMillis: Long, downChange: IndirectPointerInputChange) {
        if (enabled && !indirectIgnoreNextUp) {
            handlePressInteractionRelease(downChange.position, indirectPointer = true)
            indirectFirstTapUpTime = uptimeMillis // store uptime for double tap check
            if (!indirectLongPressTriggered) {
                if (indirectIsSecondTap) {
                    onDoubleClick?.invoke()
                } else {
                    if (onDoubleClick != null) {
                        // Play the click sound immediately, even if it later becomes a double click
                        playClickSound()
                        indirectTapJob = coroutineScope.launch {
                            delay(currentValueOf(LocalViewConfiguration).doubleTapTimeoutMillis)
                            // Only call onClick() since we already played the sound
                            onClick()
                            indirectTapJob = null
                        }
                    } else {
                        performClick()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1295-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1330–1364)

                    }
                }
            }
        }
        this.indirectDownEvent = null
        indirectIgnoreNextUp = false
        indirectIsSecondTap = false
        indirectLongPressJob?.cancel()
        indirectLongPressJob = null
        indirectLongPressTriggered = false
    }

    private fun handleNonUpEventIfNeeded(pointerEvent: PointerEvent, bounds: IntSize) {
        val touchPadding = getExtendedTouchPadding(bounds)
        if (
            pointerEvent.changes.fastAny { change ->
                change.isConsumed || change.isOutOfBounds(bounds, touchPadding)
            }
        ) {
            cancelInput(indirectPointer = false)
        }
    }

    private fun handleNonUpEventIfNeeded(indirectPointerEvent: IndirectPointerEvent) {
        val touchSlop = currentValueOf(LocalViewConfiguration).touchSlop
        if (
            indirectPointerEvent.changes.fastAny { change ->
                val distanceFromPress = change.position - indirectDownEvent!!.position
                val isOutOfBounds = abs(distanceFromPress.getDistance()) > touchSlop
                change.isConsumed || isOutOfBounds
            }
        ) {
            cancelInput(indirectPointer = true)
        }
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1330-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1365–1399)


    private fun handleDeepPress() {
        if (!longPressTriggered && enabled && onLongClick != null) {
            longPressJob?.cancel()
            longPressJob = null
            onLongClick?.invoke()
            if (hapticFeedbackEnabled) {
                currentValueOf(LocalHapticFeedback)
                    .performHapticFeedback(HapticFeedbackType.LongPress)
            }
            longPressTriggered = true
        }
    }

    private fun checkForCancellation(pointerEvent: PointerEvent) {
        if (downEvent != null && !longPressTriggered) {
            // Check for cancel by position consumption. We can look on the Final pass of the
            // existing pointer event because it comes after the pass we checked above. We ignore
            // cases where the long press has already triggered, as in this case we will consume
            // events ourselves until the pointer is released.
            if (pointerEvent.changes.fastAny { it.isConsumed && it != downEvent }) {
                // Canceled
                cancelInput(indirectPointer = false)
            }
        }
    }

    private fun checkForCancellation(indirectPointerEvent: IndirectPointerEvent) {
        if (indirectDownEvent != null && !indirectLongPressTriggered) {
            // Check for cancel by position consumption. We can look on the Final pass of the
            // existing pointer event because it comes after the pass we checked above. We ignore
            // cases where the long press has already triggered, as in this case we will consume
            // events ourselves until the pointer is released.
            if (indirectPointerEvent.changes.fastAny { it.isConsumed && it != indirectDownEvent }) {
                // Canceled

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1365-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1400–1434)

                cancelInput(indirectPointer = true)
            }
        }
    }

    override fun onCancelPointerInput() {
        super.onCancelPointerInput()
        cancelInput(indirectPointer = false)
    }

    override fun onCancelIndirectPointerInput() {
        cancelInput(indirectPointer = true)
    }

    private fun cancelInput(indirectPointer: Boolean) {
        if (indirectPointer) {
            indirectDownEvent = null
            indirectLongPressJob?.cancel()
            indirectLongPressJob = null
            indirectTapJob?.cancel()
            indirectTapJob = null
            indirectIsSecondTap = false
            indirectLongPressTriggered = false
            indirectFirstTapUpTime = -1L
            indirectIgnoreNextUp = false
        } else {
            downEvent = null
            longPressJob?.cancel()
            longPressJob = null
            tapJob?.cancel()
            tapJob = null
            isSecondTap = false
            longPressTriggered = false
            firstTapUpTime = -1L
            ignoreNextUp = false

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1400-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 141–175)

            if (localIndication is IndicationNodeFactory) {
                // We can fast path here as it will be created inside clickable lazily
                null
            } else {
                // We need an interaction source to pass between the indication modifier and
                // clickable, so
                // by creating here we avoid another composed down the line
                remember { MutableInteractionSource() }
            }
        Modifier.clickable(
            enabled = enabled,
            onClickLabel = onClickLabel,
            onClick = onClick,
            role = role,
            indication = localIndication,
            interactionSource = interactionSource,
        )
    }

/**
 * Configure component to receive clicks via input or accessibility "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds and show a default
 * indication when it's pressed.
 *
 * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
 * explicitly provide an [Indication] instance. Note that this overload only supports
 * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
 * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
 * support [Indication] instances that are not [IndicationNodeFactory].
 *
 * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
 * only when needed. This reduces the performance cost of clickable during composition, as creating
 * the [indication] can be delayed until there is an incoming
 * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1435–1469)

        }
        handlePressInteractionCancel(indirectPointer)
    }

    fun update(
        onClick: () -> Unit,
        onLongClickLabel: String?,
        onLongClick: (() -> Unit)?,
        onDoubleClick: (() -> Unit)?,
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,
        enabled: Boolean,
        onClickLabel: String?,
        role: Role?,
    ) {
        var resetPointerInputHandling = false

        // onClick is captured inside a callback, not as an input to detectTapGestures,
        // so no need to reset pointer input handling

        if (this.onLongClickLabel != onLongClickLabel) {
            this.onLongClickLabel = onLongClickLabel
            invalidateSemantics()
        }

        // We capture onLongClick and onDoubleClick inside the callback, so if the lambda changes
        // value we don't want to reset input handling - only reset if they go from not-defined to
        // defined, and vice versa, as that is what is captured in the parameter to
        // detectTapGestures.
        if ((this.onLongClick == null) != (onLongClick == null)) {
            // Adding or removing longClick should cancel any existing press interactions
            disposeInteractions()
            // Adding or removing longClick should add / remove the corresponding property
            invalidateSemantics()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1435-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1470–1504)

            resetPointerInputHandling = true
        }

        this.onLongClick = onLongClick

        if ((this.onDoubleClick == null) != (onDoubleClick == null)) {
            resetPointerInputHandling = true
        }
        this.onDoubleClick = onDoubleClick

        // enabled is captured as a parameter to detectTapGestures, so we need to restart detecting
        // gestures if it changes.
        if (this.enabled != enabled) {
            resetPointerInputHandling = true
            // Updating is handled inside updateCommon
        }

        updateCommon(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )

        if (resetPointerInputHandling) {
            cancelInput(indirectPointer = false)
            cancelInput(indirectPointer = true)
        }
    }

    override fun SemanticsPropertyReceiver.applyAdditionalSemantics() {
        if (onLongClick != null) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1470-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1505–1539)

            onLongClick(
                action = {
                    onLongClick?.invoke()
                    true
                },
                label = onLongClickLabel,
            )
        }
    }

    override fun onClickKeyDownEvent(event: KeyEvent): Boolean {
        val keyCode = event.key.keyCode
        var handledByLongClick = false
        if (onLongClick != null) {
            if (longKeyPressJobs[keyCode] == null) {
                longKeyPressJobs[keyCode] = coroutineScope.launch {
                    delay(currentValueOf(LocalViewConfiguration).longPressTimeoutMillis)
                    onLongClick?.invoke()
                }
                handledByLongClick = true
            }
        }
        val doubleClickState = doubleKeyClickStates[keyCode]
        // This is the second down event, so it might be a double click
        if (doubleClickState != null) {
            // Within the allowed timeout, so check if this is above the minimum time needed for
            // a double click
            if (doubleClickState.job.isActive) {
                doubleClickState.job.cancel()
                // If the second down was before the minimum double tap time, don't track this as
                // a double click. Instead, we need to invoke onClick for the previous click, since
                // that is now counted as a standalone click instead of the first of a double click.
                if (!doubleClickState.doubleTapMinTimeMillisElapsed) {
                    // Only call onClick() since we already played the sound
                    onClick()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1505-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1540–1574)

                    doubleKeyClickStates.remove(keyCode)
                }
            } else {
                // We already invoked onClick because we passed the timeout, so stop tracking this
                // as a double click
                doubleKeyClickStates.remove(keyCode)
            }
        }
        return handledByLongClick
    }

    override fun onClickKeyUpEvent(event: KeyEvent): Boolean {
        val keyCode = event.key.keyCode
        var longClickInvoked = false
        if (longKeyPressJobs[keyCode] != null) {
            longKeyPressJobs[keyCode]?.let {
                if (it.isActive) {
                    it.cancel()
                } else {
                    // If we already passed the timeout, we invoked long click already, and so
                    // we shouldn't invoke onClick in this case
                    longClickInvoked = true
                }
            }
            longKeyPressJobs.remove(keyCode)
        }
        if (onDoubleClick != null) {
            when {
                // First click
                doubleKeyClickStates[keyCode] == null -> {
                    // We only track the second click if the first click was not a long click
                    if (!longClickInvoked) {
                        // Play the click sound immediately, even if it later becomes a double click
                        playClickSound()
                        doubleKeyClickStates[keyCode] =

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1540-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1575–1609)

                            DoubleKeyClickState(
                                coroutineScope.launch {
                                    val configuration = currentValueOf(LocalViewConfiguration)
                                    val minTime = configuration.doubleTapMinTimeMillis
                                    val timeout = configuration.doubleTapTimeoutMillis
                                    delay(minTime)
                                    doubleKeyClickStates[keyCode]?.doubleTapMinTimeMillisElapsed =
                                        true
                                    // Delay the remainder until we are at timeout
                                    delay(timeout - minTime)
                                    // If there was no second key press after the timeout, invoke
                                    // onClick as normal. Only call onClick() since we already
                                    // played
                                    // the sound
                                    onClick()
                                }
                            )
                    }
                }
                // Second click
                else -> {
                    // Invoke onDoubleClick if the second click was not a long click
                    if (!longClickInvoked) {
                        onDoubleClick?.invoke()
                    }
                    doubleKeyClickStates.remove(keyCode)
                }
            }
        } else {
            if (!longClickInvoked) {
                performClick()
            }
        }
        return true
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1575-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1610–1644)


    override fun onCancelKeyInput() {
        resetKeyPressState()
    }

    override fun onReset() {
        super.onReset()
        resetKeyPressState()
    }

    private fun resetKeyPressState() {
        longKeyPressJobs.apply {
            forEachValue { it.cancel() }
            clear()
        }
        doubleKeyClickStates.apply {
            forEachValue { it.job.cancel() }
            clear()
        }
    }
}

internal abstract class AbstractClickableNode(
    private var interactionSource: MutableInteractionSource?,
    private var indicationNodeFactory: IndicationNodeFactory?,
    private var useLocalIndication: Boolean,
    enabled: Boolean,
    private var onClickLabel: String?,
    private var role: Role?,
    onClick: () -> Unit,
) :
    DelegatingNode(),
    PointerInputModifierNode,
    KeyInputModifierNode,
    SemanticsModifierNode,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1610-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1645–1679)

    CompositionLocalConsumerModifierNode,
    ObserverModifierNode,
    IndirectPointerInputModifierNode,
    GestureConnection {
    protected var enabled = enabled
        private set

    protected var onClick = onClick
        private set

    final override val shouldAutoInvalidate: Boolean = false

    private val focusableNode: FocusableNode =
        FocusableNode(
            interactionSource,
            focusability = Focusability.SystemDefined,
            onFocusChange = ::onFocusChange,
        )

    private var localIndicationNodeFactory: IndicationNodeFactory? = null

    private var gestureNode: DelegatableNode? = null

    override var gestureState: GestureState = GestureState.Idle

    private var indicationNode: DelegatableNode? = null

    private var pressInteraction: PressInteraction.Press? = null
    private var hoverInteraction: HoverInteraction.Enter? = null
    private val currentKeyPressInteractions = mutableLongObjectMapOf<PressInteraction.Press>()
    private var centerOffset: Offset = Offset.Zero

    private var indirectPointerPressInteraction: PressInteraction.Press? = null
    private var indirectPointerEventPressPosition: Offset? = null


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1645-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1680–1714)

    // Track separately from interactionSource, as we will create our own internal
    // InteractionSource if needed
    private var userProvidedInteractionSource: MutableInteractionSource? = interactionSource

    private var lazilyCreateIndication = shouldLazilyCreateIndication()

    private fun shouldLazilyCreateIndication() = userProvidedInteractionSource == null

    protected fun playClickSound() {
        currentValueOf(LocalSoundEffect)?.playClickSound()
    }

    protected fun performClick() {
        playClickSound()
        onClick()
    }

    open fun SemanticsPropertyReceiver.applyAdditionalSemantics() {}

    protected fun updateCommon(
        interactionSource: MutableInteractionSource?,
        indicationNodeFactory: IndicationNodeFactory?,
        useLocalIndication: Boolean,
        enabled: Boolean,
        onClickLabel: String?,
        role: Role?,
        onClick: () -> Unit,
    ) {
        var isIndicationNodeDirty = false
        // Compare against userProvidedInteractionSource, as we will create a new InteractionSource
        // lazily if the userProvidedInteractionSource is null, and assign it to interactionSource
        if (userProvidedInteractionSource != interactionSource) {
            disposeInteractions()
            userProvidedInteractionSource = interactionSource
            this.interactionSource = interactionSource

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1680-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1715–1749)

            isIndicationNodeDirty = true
        }
        if (this.indicationNodeFactory != indicationNodeFactory) {
            this.indicationNodeFactory = indicationNodeFactory
            isIndicationNodeDirty = true
        }
        if (this.useLocalIndication != useLocalIndication) {
            this.useLocalIndication = useLocalIndication
            if (useLocalIndication) {
                // Need to update localIndicationNodeFactory, and start observing changes
                onObservedReadsChanged()
            }
            isIndicationNodeDirty = true
        }
        if (this.enabled != enabled) {
            if (enabled) {
                delegate(focusableNode)
            } else {
                // TODO: Should we remove indicationNode? Previously we always emitted indication
                undelegate(focusableNode)
                disposeInteractions()
            }
            invalidateSemantics()
            if (!enabled) {
                gestureNode?.let { undelegate(it) }
                gestureNode = null
                gestureState = GestureState.Idle
            }
            this.enabled = enabled
        }
        if (this.onClickLabel != onClickLabel) {
            this.onClickLabel = onClickLabel
            invalidateSemantics()
        }
        if (this.role != role) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1715-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1750–1784)

            this.role = role
            invalidateSemantics()
        }
        this.onClick = onClick
        if (lazilyCreateIndication != shouldLazilyCreateIndication()) {
            lazilyCreateIndication = shouldLazilyCreateIndication()
            // If we are no longer lazily creating the node, and we haven't created the node yet,
            // create it
            if (!lazilyCreateIndication && indicationNode == null) isIndicationNodeDirty = true
        }
        // Create / recreate indication node
        if (isIndicationNodeDirty) {
            recreateIndicationIfNeeded()
        }
        focusableNode.update(this.interactionSource)
    }

    protected fun getExtendedTouchPadding(size: IntSize): Size {
        // copied from SuspendingPointerInputModifierNodeImpl.extendedTouchPadding:
        // TODO expose this as a new public api available outside of suspending apis b/422396609
        val minimumTouchTargetSizeDp = currentValueOf(LocalViewConfiguration).minimumTouchTargetSize
        val minimumTouchTargetSize = with(requireDensity()) { minimumTouchTargetSizeDp.toSize() }
        val horizontal = max(0f, minimumTouchTargetSize.width - size.width) / 2f
        val vertical = max(0f, minimumTouchTargetSize.height - size.height) / 2f
        return Size(horizontal, vertical)
    }

    @CallSuper
    override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
        initializeIndicationAndInteractionSourceIfNeeded()
        if (enabled) {
            initializeGestureCoordination()
        }
    }


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1750-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 176–210)

 * [MutableInteractionSource] and you are never using it outside of clickable, it is recommended to
 * instead provide `null` to enable lazy creation. If you need the [Indication] to be created
 * eagerly, provide a remembered [MutableInteractionSource].
 *
 * If you need to support double click or long click alongside the single click, consider using
 * [combinedClickable].
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *
 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
 *   disabled for accessibility services
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param onClick will be called when user clicks on the element
 */
public fun Modifier.clickable(
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    interactionSource: MutableInteractionSource? = null,
    onClick: () -> Unit,
): Modifier {
    return this.then(
        ClickableElement(
            interactionSource = interactionSource,
            indicationNodeFactory = null,
            useLocalIndication = true,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1785–1819)

    final override fun onAttach() {
        onObservedReadsChanged()
        if (!lazilyCreateIndication) {
            initializeIndicationAndInteractionSourceIfNeeded()
        }
        if (enabled) {
            delegate(focusableNode)
        }
    }

    override fun onObservedReadsChanged() {
        if (useLocalIndication) {
            observeReads {
                val indication = currentValueOf(LocalIndication)
                requirePrecondition(indication is IndicationNodeFactory) {
                    unsupportedIndicationExceptionMessage(indication)
                }
                val previousFactory = localIndicationNodeFactory
                localIndicationNodeFactory = indication
                // If we are changing from a non-null factory to a different factory, recreate
                // indication if needed
                if (previousFactory != null && localIndicationNodeFactory != previousFactory) {
                    recreateIndicationIfNeeded()
                }
            }
        }
    }

    final override fun onDetach() {
        disposeInteractions()
        // If we lazily created an interaction source, reset it in case we are reused / moved. Note
        // that we need to do it here instead of onReset() - since onReset won't be called in the
        // movableContent case but we still want to dispose for that case
        if (userProvidedInteractionSource == null) {
            interactionSource = null

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1785-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1820–1854)

        }
        // Remove indication in case we are reused / moved - we will create a new node when needed
        indicationNode?.let { undelegate(it) }
        indicationNode = null

        gestureNode?.let { undelegate(it) }
        gestureNode = null
    }

    protected fun disposeInteractions() {
        interactionSource?.let { interactionSource ->
            pressInteraction?.let { oldValue ->
                val interaction = PressInteraction.Cancel(oldValue)
                interactionSource.tryEmit(interaction)
            }
            indirectPointerPressInteraction?.let { oldValue ->
                val interaction = PressInteraction.Cancel(oldValue)
                interactionSource.tryEmit(interaction)
            }
            hoverInteraction?.let { oldValue ->
                val interaction = HoverInteraction.Exit(oldValue)
                interactionSource.tryEmit(interaction)
            }
            currentKeyPressInteractions.forEachValue {
                interactionSource.tryEmit(PressInteraction.Cancel(it))
            }
        }
        pressInteraction = null
        indirectPointerPressInteraction = null
        indirectPointerEventPressPosition = null
        hoverInteraction = null
        currentKeyPressInteractions.clear()
    }

    private fun onFocusChange(isFocused: Boolean) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1820-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1855–1889)

        if (isFocused) {
            initializeIndicationAndInteractionSourceIfNeeded()
        } else {
            // If we are no longer focused while we are tracking existing key presses, we need to
            // clear them and cancel the presses.
            if (interactionSource != null) {
                currentKeyPressInteractions.forEachValue {
                    coroutineScope.launch { interactionSource?.emit(PressInteraction.Cancel(it)) }
                }
                indirectPointerPressInteraction?.let {
                    coroutineScope.launch { interactionSource?.emit(PressInteraction.Cancel(it)) }
                }
            }
            currentKeyPressInteractions.clear()
            indirectPointerPressInteraction = null
            onCancelKeyInput()
        }
    }

    private fun recreateIndicationIfNeeded() {
        // If we already created a node lazily, or we are not lazily creating the node, create
        if (indicationNode != null || !lazilyCreateIndication) {
            indicationNode?.let { undelegate(it) }
            indicationNode = null
            initializeIndicationAndInteractionSourceIfNeeded()
        }
    }

    private fun initializeIndicationAndInteractionSourceIfNeeded() {
        // We have already created the node, no need to do any work
        if (indicationNode != null) return
        val indicationFactory =
            if (useLocalIndication) localIndicationNodeFactory else indicationNodeFactory
        indicationFactory?.let { factory ->
            if (interactionSource == null) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1855-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1890–1924)

                interactionSource = MutableInteractionSource()
            }
            focusableNode.update(interactionSource)
            val node = factory.create(interactionSource!!)
            delegate(node)
            indicationNode = node
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun initializeGestureCoordination() {
        if (gestureNode == null) {
            gestureNode = delegate(gestureNode(this))
        }
    }

    @CallSuper
    override fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,
    ) {
        centerOffset = bounds.center.toOffset()
        initializeIndicationAndInteractionSourceIfNeeded()
        if (enabled) {
            initializeGestureCoordination()
            if (pass == PointerEventPass.Main) {
                when (pointerEvent.type) {
                    PointerEventType.Enter -> coroutineScope.launch { emitHoverEnter() }
                    PointerEventType.Exit -> coroutineScope.launch { emitHoverExit() }
                }
            }
        }
    }


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1890-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1925–1959)

    @CallSuper
    override fun onCancelPointerInput() {
        // Press cancellation is handled as part of detecting presses
        interactionSource?.let { interactionSource ->
            hoverInteraction?.let { oldValue ->
                val interaction = HoverInteraction.Exit(oldValue)
                interactionSource.tryEmit(interaction)
            }
        }
        hoverInteraction = null
    }

    final override fun onKeyEvent(event: KeyEvent): Boolean {
        // Key events usually require focus, but if a focused child does not handle the KeyEvent,
        // the event can bubble up without this clickable ever being focused, and hence without
        // this being initialized through the focus path
        initializeIndicationAndInteractionSourceIfNeeded()
        val keyCode = event.key.keyCode
        return when {
            enabled && event.isPress -> {
                // If the key already exists in the map, keyEvent is a repeat event.
                // We ignore it as we only want to emit an interaction for the initial key press.
                var wasInteractionHandled = false
                if (!currentKeyPressInteractions.containsKey(keyCode)) {
                    val press = PressInteraction.Press(centerOffset)
                    currentKeyPressInteractions[keyCode] = press
                    // Even if the interactionSource is null, we still want to intercept the presses
                    // so we always track them above, and return true
                    if (interactionSource != null) {
                        coroutineScope.launch { interactionSource?.emit(press) }
                    }
                    wasInteractionHandled = true
                }
                onClickKeyDownEvent(event) || wasInteractionHandled
            }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1925-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1960–1994)


            enabled && event.isClick -> {
                val press = currentKeyPressInteractions.remove(keyCode)
                if (press != null) {
                    if (interactionSource != null) {
                        coroutineScope.launch {
                            interactionSource?.emit(PressInteraction.Release(press))
                        }
                    }
                    // Don't invoke onClick if we were not pressed - this could happen if we became
                    // focused after the down event, or if the node was reused after the down event.
                    onClickKeyUpEvent(event)
                }
                // Only consume if we were previously pressed for this key event
                press != null
            }

            else -> false
        }
    }

    protected abstract fun onClickKeyDownEvent(event: KeyEvent): Boolean

    protected abstract fun onClickKeyUpEvent(event: KeyEvent): Boolean

    /**
     * Called when focus is lost, to allow cleaning up and resetting the state for ongoing key
     * presses
     */
    @EmptySuper protected open fun onCancelKeyInput() {}

    final override fun onPreKeyEvent(event: KeyEvent) = false

    final override val shouldMergeDescendantSemantics: Boolean
        get() = true

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1960-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 1995–2029)


    final override fun SemanticsPropertyReceiver.applySemantics() {
        if (this@AbstractClickableNode.role != null) {
            role = this@AbstractClickableNode.role!!
        }
        onClick(
            action = {
                performClick()
                true
            },
            label = onClickLabel,
        )
        if (enabled) {
            with(focusableNode) { applySemantics() }
        } else {
            disabled()
        }
        applyAdditionalSemantics()
    }

    private var delayJob: Job? = null

    /** Handles emitting a [PressInteraction.Press]. */
    protected fun handlePressInteractionStart(event: IndirectPointerInputChange) {
        interactionSource?.let { interactionSource ->
            val press = PressInteraction.Press(event.position)
            if (delayPressInteraction()) {
                delayJob = coroutineScope.launch {
                    delay(TapIndicationDelay)
                    interactionSource.emit(press)
                    indirectPointerPressInteraction = press
                }
            } else {
                indirectPointerPressInteraction = press
                coroutineScope.launch { interactionSource.emit(press) }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-1995-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 2030–2064)

            }
        }
    }

    protected fun handlePressInteractionStart(event: PointerInputChange) {
        interactionSource?.let { interactionSource ->
            val press = PressInteraction.Press(event.position)
            if (delayPressInteraction()) {
                delayJob = coroutineScope.launch {
                    delay(TapIndicationDelay)
                    interactionSource.emit(press)
                    pressInteraction = press
                }
            } else {
                pressInteraction = press
                coroutineScope.launch { interactionSource.emit(press) }
            }
        }
    }

    /**
     * Handles emitting a [PressInteraction.Release].
     *
     * @param offset offset of the press
     * @param indirectPointer whether the source of this press was indirect pointer. False for
     *   pointer input.
     */
    protected fun handlePressInteractionRelease(offset: Offset, indirectPointer: Boolean) {
        interactionSource?.let { interactionSource ->
            // To resolve b/414319919 it is important that we capture a reference to `delayJob`
            // outside the coroutine block - when the CPU is busy we can end up handling
            // press-release-press before the coroutine starts to execute, which means we can launch
            // two jobs and mutate delayJob twice. At the time this function is called, delayJob
            // points to the correct corresponding press event, so we just reference this instance
            // to make sure that there is no issue if coroutines are executed after the next set of

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-2030-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 2065–2099)

            // gestures have been processed.
            val job = delayJob
            if (job?.isActive == true) {
                // Immediately cancel the job to avoid a race condition from coroutine launching -
                // if we wait until inside the launch to cancel it could be executed after the job
                // is no longer active. An alternative approach would be to launch with
                // start = CoroutineStart.UNDISPATCHED, but it is more reasonable to cancel
                // outside the coroutine in any case.
                job.cancel()
                coroutineScope.launch {
                    // Wait for cancelling the job to finish if needed
                    job.join()
                    // The press released successfully, before the timeout duration - emit the press
                    // interaction instantly.
                    val press = PressInteraction.Press(offset)
                    val release = PressInteraction.Release(press)
                    interactionSource.emit(press)
                    interactionSource.emit(release)
                }
            } else {
                val interaction =
                    if (indirectPointer) indirectPointerPressInteraction else pressInteraction
                interaction?.let {
                    coroutineScope.launch {
                        // Important that we capture `interaction` outside the `launch`, rather than
                        // referring to it in here - the underlying fields are mutable and could
                        // change by the time this coroutine is executed
                        val endInteraction = PressInteraction.Release(it)
                        interactionSource.emit(endInteraction)
                    }
                }
            }
            if (indirectPointer) {
                indirectPointerPressInteraction = null
            } else {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-2065-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 2100–2134)

                pressInteraction = null
            }
        }
    }

    /**
     * Handles emitting a [PressInteraction.Cancel].
     *
     * @param indirectPointer whether the source of this press was indirect pointer. False for
     *   pointer input.
     */
    protected fun handlePressInteractionCancel(indirectPointer: Boolean) {
        interactionSource?.let { interactionSource ->
            if (delayJob?.isActive == true) {
                // We didn't finish sending the press, and we are cancelled, so we don't emit
                // any interaction.
                delayJob?.cancel()
            } else {
                val interaction =
                    if (indirectPointer) indirectPointerPressInteraction else pressInteraction
                interaction?.let {
                    val endInteraction = PressInteraction.Cancel(it)
                    // If this is being called from inside onDetach(), we are still attached, but
                    // the scope will be cancelled soon after - so the launch {} might not even
                    // start before it is cancelled. We don't want to use
                    // CoroutineStart.UNDISPATCHED, or always call tryEmit() as this will break
                    // other timing / cause some events to be missed for other cases. Instead just
                    // make sure we call tryEmit if we cancel the scope, before we finish emitting.
                    val handler =
                        coroutineScope.coroutineContext[Job]?.invokeOnCompletion {
                            interactionSource.tryEmit(endInteraction)
                        }
                    coroutineScope.launch {
                        interactionSource.emit(endInteraction)
                        handler?.dispose()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-2100-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 211–245)

            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )
    )
}

/**
 * Configure component to receive clicks via input or accessibility "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds and show an indication as
 * specified in [indication] parameter.
 *
 * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
 * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
 * This reduces the performance cost of clickable during composition, as creating the [indication]
 * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
 * If you are only passing a remembered [MutableInteractionSource] and you are never using it
 * outside of clickable, it is recommended to instead provide `null` to enable lazy creation. If you
 * need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
 *
 * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
 * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
 * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
 * cannot be lazily created inside clickable.
 *
 * If you need to support double click or long click alongside the single click, consider using
 * [combinedClickable].
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 2135–2169)

                    }
                }
            }
            if (indirectPointer) {
                indirectPointerPressInteraction = null
            } else {
                pressInteraction = null
            }
        }
    }

    private fun delayPressInteraction(): Boolean =
        hasWaitingParent() || isComposeRootInScrollableContainer()

    private fun emitHoverEnter() {
        if (hoverInteraction == null) {
            val interaction = HoverInteraction.Enter()
            interactionSource?.let { interactionSource ->
                coroutineScope.launch { interactionSource.emit(interaction) }
            }
            hoverInteraction = interaction
        }
    }

    private fun emitHoverExit() {
        hoverInteraction?.let { oldValue ->
            val interaction = HoverInteraction.Exit(oldValue)
            interactionSource?.let { interactionSource ->
                coroutineScope.launch { interactionSource.emit(interaction) }
            }
            hoverInteraction = null
        }
    }
}


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-2135-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 2170–2194)

internal fun DelegatingNode.hasWaitingParent(): Boolean {
    var gestureConnection: GestureConnection? = null
    traverseAncestorGestures { coordinator ->
        if (coordinator.gestureState == GestureState.Waiting) {
            gestureConnection = coordinator
            false
        } else {
            true
        }
    }
    return gestureConnection != null
}

private fun unsupportedIndicationExceptionMessage(indication: Indication): String {
    return "clickable only supports IndicationNodeFactory instances provided to LocalIndication, " +
        "but Indication was provided instead. Either migrate the Indication implementation to " +
        "implement IndicationNodeFactory, or use the other clickable overload that takes an " +
        "Indication parameter, and explicitly pass LocalIndication.current there. The Indication" +
        " instance provided here was: $indication"
}

private fun IndirectPointerInputChange.changedToUp() = !isConsumed && previousPressed && !pressed

private fun IndirectPointerInputChange.changedToUpIgnoreConsumed() = previousPressed && !pressed


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-2170-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 246–280)

 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param indication indication to be shown when modified element is pressed. By default, indication
 *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
 *   [LocalIndication] to show theme default
 * @param enabled Controls the enabled state. When `false`, [onClick], and this modifier will appear
 *   disabled for accessibility services
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onClick will be called when user clicks on the element
 */
public fun Modifier.clickable(
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onClick: () -> Unit,
): Modifier =
    clickableWithIndicationIfNeeded(
        interactionSource = interactionSource,
        indication = indication,
    ) { intSource, indicationNodeFactory ->
        ClickableElement(
            interactionSource = intSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = false,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 281–315)

    }

/**
 * Configure component to receive clicks, double clicks and long clicks via input or accessibility
 * "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds.
 *
 * If you need only click handling, and no double or long clicks, consider using [clickable]
 *
 * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
 * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
 * the other overload.
 *
 * If you are only creating this combinedClickable modifier inside composition, consider using the
 * other overload and explicitly passing `LocalIndication.current` for improved performance. For
 * more information see the documentation on the other overload.
 *
 * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
 * input will be aborted.
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *
 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
 *   [onDoubleClick] won't be invoked
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
 * @param onLongClick will be called when user long presses on the element
 * @param onDoubleClick will be called when user double clicks on the element

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 316–350)

 * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
 * @param onClick will be called when user clicks on the element
 */
@Deprecated(
    message =
        "Replaced with new overload that only supports IndicationNodeFactory instances inside LocalIndication, and does not use composed",
    level = DeprecationLevel.HIDDEN,
)
public fun Modifier.combinedClickable(
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onLongClickLabel: String? = null,
    onLongClick: (() -> Unit)? = null,
    onDoubleClick: (() -> Unit)? = null,
    hapticFeedbackEnabled: Boolean = true,
    onClick: () -> Unit,
): Modifier =
    composed(
        inspectorInfo =
            debugInspectorInfo {
                name = "combinedClickable"
                properties["enabled"] = enabled
                properties["onClickLabel"] = onClickLabel
                properties["role"] = role
                properties["onClick"] = onClick
                properties["onDoubleClick"] = onDoubleClick
                properties["onLongClick"] = onLongClick
                properties["onLongClickLabel"] = onLongClickLabel
                properties["hapticFeedbackEnabled"] = hapticFeedbackEnabled
            }
    ) {
        val localIndication = LocalIndication.current
        val interactionSource =
            if (localIndication is IndicationNodeFactory) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 351–385)

                // We can fast path here as it will be created inside clickable lazily
                null
            } else {
                // We need an interaction source to pass between the indication modifier and
                // clickable, so
                // by creating here we avoid another composed down the line
                remember { MutableInteractionSource() }
            }
        Modifier.combinedClickable(
            enabled = enabled,
            onClickLabel = onClickLabel,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,
            onDoubleClick = onDoubleClick,
            onClick = onClick,
            role = role,
            indication = localIndication,
            interactionSource = interactionSource,
            hapticFeedbackEnabled = hapticFeedbackEnabled,
        )
    }

/**
 * Configure component to receive clicks, double clicks and long clicks via input or accessibility
 * "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds.
 *
 * If you need only click handling, and no double or long clicks, consider using [clickable]
 *
 * This overload will use the [Indication] from [LocalIndication]. Use the other overload to
 * explicitly provide an [Indication] instance. Note that this overload only supports
 * [IndicationNodeFactory] instances provided through [LocalIndication] - it is strongly recommended
 * to migrate to [IndicationNodeFactory], but you can use the other overload if you still need to
 * support [Indication] instances that are not [IndicationNodeFactory].

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 36–70)

import androidx.compose.ui.hapticfeedback.HapticFeedbackType
import androidx.compose.ui.input.indirect.IndirectPointerEvent
import androidx.compose.ui.input.indirect.IndirectPointerInputChange
import androidx.compose.ui.input.indirect.IndirectPointerInputModifierNode
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEvent
import androidx.compose.ui.input.key.KeyEventType.Companion.KeyDown
import androidx.compose.ui.input.key.KeyEventType.Companion.KeyUp
import androidx.compose.ui.input.key.KeyInputModifierNode
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.type
import androidx.compose.ui.input.pointer.PointerEvent
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerEventType
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.changedToUp
import androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
import androidx.compose.ui.input.pointer.isOutOfBounds
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatableNode
import androidx.compose.ui.node.DelegatingNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.ObserverModifierNode
import androidx.compose.ui.node.PointerInputModifierNode
import androidx.compose.ui.node.SemanticsModifierNode
import androidx.compose.ui.node.currentValueOf
import androidx.compose.ui.node.invalidateSemantics
import androidx.compose.ui.node.observeReads
import androidx.compose.ui.node.requireDensity
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.platform.LocalSoundEffect
import androidx.compose.ui.platform.LocalViewConfiguration
import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.semantics.Role

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 386–419)

 *
 * If [interactionSource] is `null`, an internal [MutableInteractionSource] will be lazily created
 * only when needed. This reduces the performance cost of combinedClickable during composition, as
 * creating the [indication] can be delayed until there is an incoming
 * [androidx.compose.foundation.interaction.Interaction]. If you are only passing a remembered
 * [MutableInteractionSource] and you are never using it outside of combinedClickable, it is
 * recommended to instead provide `null` to enable lazy creation. If you need the [Indication] to be
 * created eagerly, provide a remembered [MutableInteractionSource].
 *
 * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
 * input will be aborted.
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *
 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
 *   [onDoubleClick] won't be invoked
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
 * @param onLongClick will be called when user long presses on the element
 * @param onDoubleClick will be called when user double clicks on the element
 * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
 * @param interactionSource [MutableInteractionSource] that will be used to dispatch
 *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param onClick will be called when user clicks on the element
 */
public fun Modifier.combinedClickable(
    enabled: Boolean = true,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 420–454)

    onClickLabel: String? = null,
    role: Role? = null,
    onLongClickLabel: String? = null,
    onLongClick: (() -> Unit)? = null,
    onDoubleClick: (() -> Unit)? = null,
    hapticFeedbackEnabled: Boolean = true,
    interactionSource: MutableInteractionSource? = null,
    onClick: () -> Unit,
): Modifier {
    return this.then(
        CombinedClickableElement(
            enabled = enabled,
            onClickLabel = onClickLabel,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,
            onDoubleClick = onDoubleClick,
            onClick = onClick,
            role = role,
            interactionSource = interactionSource,
            indicationNodeFactory = null,
            useLocalIndication = true,
            hapticFeedbackEnabled = hapticFeedbackEnabled,
        )
    )
}

@Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
public fun Modifier.combinedClickable(
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onLongClickLabel: String? = null,
    onLongClick: (() -> Unit)? = null,
    onDoubleClick: (() -> Unit)? = null,
    onClick: () -> Unit,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-420-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 455–489)

): Modifier =
    composed(
        inspectorInfo =
            debugInspectorInfo {
                name = "combinedClickable"
                properties["enabled"] = enabled
                properties["onClickLabel"] = onClickLabel
                properties["role"] = role
                properties["onClick"] = onClick
                properties["onDoubleClick"] = onDoubleClick
                properties["onLongClick"] = onLongClick
                properties["onLongClickLabel"] = onLongClickLabel
            }
    ) {
        val localIndication = LocalIndication.current
        val interactionSource =
            if (localIndication is IndicationNodeFactory) {
                // We can fast path here as it will be created inside clickable lazily
                null
            } else {
                // We need an interaction source to pass between the indication modifier and
                // clickable, so
                // by creating here we avoid another composed down the line
                remember { MutableInteractionSource() }
            }
        Modifier.combinedClickable(
            enabled = enabled,
            onClickLabel = onClickLabel,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,
            onDoubleClick = onDoubleClick,
            onClick = onClick,
            role = role,
            indication = localIndication,
            interactionSource = interactionSource,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-455-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 490–524)

            hapticFeedbackEnabled = true,
        )
    }

/**
 * Configure component to receive clicks, double clicks and long clicks via input or accessibility
 * "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds.
 *
 * If you need only click handling, and no double or long clicks, consider using [clickable].
 *
 * Add this modifier to the element to make it clickable within its bounds.
 *
 * If [interactionSource] is `null`, and [indication] is an [IndicationNodeFactory], an internal
 * [MutableInteractionSource] will be lazily created along with the [indication] only when needed.
 * This reduces the performance cost of clickable during composition, as creating the [indication]
 * can be delayed until there is an incoming [androidx.compose.foundation.interaction.Interaction].
 * If you are only passing a remembered [MutableInteractionSource] and you are never using it
 * outside of clickable, it is recommended to instead provide `null` to enable lazy creation. If you
 * need [indication] to be created eagerly, provide a remembered [MutableInteractionSource].
 *
 * If [indication] is _not_ an [IndicationNodeFactory], and instead implements the deprecated
 * [Indication.rememberUpdatedInstance] method, you should explicitly pass a remembered
 * [MutableInteractionSource] as a parameter for [interactionSource] instead of `null`, as this
 * cannot be lazily created inside clickable.
 *
 * Note, if the modifier instance gets re-used between a key down and key up events, the ongoing
 * input will be aborted.
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a
 * `post { }` block to guarantee the event dispatch completes before executing the removal. (You do
 * not need to do this when removing a composable because Compose guarantees it completes via the
 * snapshot state system.)
 *

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-490-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 525–559)

 * @sample androidx.compose.foundation.samples.ClickableSample
 * @param interactionSource [MutableInteractionSource] that will be used to emit
 *   [PressInteraction.Press] when this clickable is pressed. If `null`, an internal
 *   [MutableInteractionSource] will be created if needed.
 * @param indication indication to be shown when modified element is pressed. By default, indication
 *   from [LocalIndication] will be used. Pass `null` to show no indication, or current value from
 *   [LocalIndication] to show theme default
 * @param enabled Controls the enabled state. When `false`, [onClick], [onLongClick] or
 *   [onDoubleClick] won't be invoked
 * @param onClickLabel semantic / accessibility label for the [onClick] action
 * @param role the type of user interface element. Accessibility services might use this to describe
 *   the element or do customizations
 * @param onLongClickLabel semantic / accessibility label for the [onLongClick] action
 * @param onLongClick will be called when user long presses on the element
 * @param onDoubleClick will be called when user double clicks on the element
 * @param hapticFeedbackEnabled whether to use the default [HapticFeedback] behavior
 * @param onClick will be called when user clicks on the element
 */
public fun Modifier.combinedClickable(
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onLongClickLabel: String? = null,
    onLongClick: (() -> Unit)? = null,
    onDoubleClick: (() -> Unit)? = null,
    hapticFeedbackEnabled: Boolean = true,
    onClick: () -> Unit,
): Modifier =
    clickableWithIndicationIfNeeded(
        interactionSource = interactionSource,
        indication = indication,
    ) { intSource, indicationNodeFactory ->
        CombinedClickableElement(

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-525-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 560–594)

            interactionSource = intSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = false,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,
            onDoubleClick = onDoubleClick,
            hapticFeedbackEnabled = hapticFeedbackEnabled,
        )
    }

@Deprecated(message = "Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
public fun Modifier.combinedClickable(
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    enabled: Boolean = true,
    onClickLabel: String? = null,
    role: Role? = null,
    onLongClickLabel: String? = null,
    onLongClick: (() -> Unit)? = null,
    onDoubleClick: (() -> Unit)? = null,
    onClick: () -> Unit,
): Modifier =
    clickableWithIndicationIfNeeded(
        interactionSource = interactionSource,
        indication = indication,
    ) { intSource, indicationNodeFactory ->
        CombinedClickableElement(
            interactionSource = intSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = false,
            enabled = enabled,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-560-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 595–629)

            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,
            onDoubleClick = onDoubleClick,
            hapticFeedbackEnabled = true,
        )
    }

/**
 * Utility Modifier factory that handles edge cases for [interactionSource], and [indication].
 * [createClickable] is the lambda that creates the actual clickable element, which will be chained
 * with [Modifier.indication] if needed.
 */
internal inline fun Modifier.clickableWithIndicationIfNeeded(
    interactionSource: MutableInteractionSource?,
    indication: Indication?,
    crossinline createClickable: (MutableInteractionSource?, IndicationNodeFactory?) -> Modifier,
): Modifier {
    return this.then(
        when {
            // Fast path - indication is managed internally
            indication is IndicationNodeFactory -> createClickable(interactionSource, indication)
            // Fast path - no need for indication
            indication == null -> createClickable(interactionSource, null)
            // Non-null Indication (not IndicationNodeFactory) with a non-null InteractionSource
            interactionSource != null ->
                Modifier.indication(interactionSource, indication)
                    .then(createClickable(interactionSource, null))
            // Non-null Indication (not IndicationNodeFactory) with a null InteractionSource, so we
            // need
            // to use composed to create an InteractionSource that can be shared. This should be a
            // rare
            // code path and can only be hit from new callers.

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-595-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 630–664)

            else ->
                Modifier.composed {
                    val newInteractionSource = remember { MutableInteractionSource() }
                    Modifier.indication(newInteractionSource, indication)
                        .then(createClickable(newInteractionSource, null))
                }
        }
    )
}

/**
 * How long to wait before appearing 'pressed' (emitting [PressInteraction.Press]) - if a touch down
 * will quickly become a drag / scroll, this timeout means that we don't show a press effect.
 */
internal expect val TapIndicationDelay: Long

/**
 * Returns whether the root Compose layout node is hosted in a scrollable container outside of
 * Compose. On Android this will be whether the root View is in a scrollable ViewGroup, as even if
 * nothing in the Compose part of the hierarchy is scrollable, if the View itself is in a scrollable
 * container, we still want to delay presses in case presses in Compose convert to a scroll outside
 * of Compose.
 */
internal expect fun DelegatableNode.isComposeRootInScrollableContainer(): Boolean

/**
 * Whether the specified [KeyEvent] should trigger a press for a clickable component, i.e. whether
 * it is associated with a press of an enter key or dpad centre.
 */
private val KeyEvent.isPress: Boolean
    get() = type == KeyDown && isEnter

/**
 * Whether the specified [KeyEvent] should trigger a click for a clickable component, i.e. whether
 * it is associated with a release of an enter key or dpad centre.

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-630-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 665–699)

 */
private val KeyEvent.isClick: Boolean
    get() = type == KeyUp && isEnter

private val KeyEvent.isEnter: Boolean
    get() =
        when (key) {
            Key.DirectionCenter,
            Key.Enter,
            Key.NumPadEnter,
            Key.Spacebar -> true

            else -> false
        }

private class ClickableElement(
    private val interactionSource: MutableInteractionSource?,
    private val indicationNodeFactory: IndicationNodeFactory?,
    private val useLocalIndication: Boolean,
    private val enabled: Boolean,
    private val onClickLabel: String?,
    private val role: Role?,
    private val onClick: () -> Unit,
) : ModifierNodeElement<ClickableNode>() {
    override fun create() =
        ClickableNode(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )


Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-665-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 700–734)

    override fun update(node: ClickableNode) {
        node.update(
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
            onClick = onClick,
        )
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "clickable"
        properties["enabled"] = enabled
        properties["onClick"] = onClick
        properties["onClickLabel"] = onClickLabel
        properties["role"] = role
        properties["interactionSource"] = interactionSource
        properties["indicationNodeFactory"] = indicationNodeFactory
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as ClickableElement

        if (interactionSource != other.interactionSource) return false
        if (indicationNodeFactory != other.indicationNodeFactory) return false
        if (useLocalIndication != other.useLocalIndication) return false
        if (enabled != other.enabled) return false
        if (onClickLabel != other.onClickLabel) return false
        if (role != other.role) return false

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-700-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 71–105)

import androidx.compose.ui.semantics.SemanticsPropertyReceiver
import androidx.compose.ui.semantics.disabled
import androidx.compose.ui.semantics.onClick
import androidx.compose.ui.semantics.onLongClick
import androidx.compose.ui.semantics.role
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.center
import androidx.compose.ui.unit.toOffset
import androidx.compose.ui.util.fastAll
import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastForEach
import kotlin.math.abs
import kotlin.math.max
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

/**
 * Configure component to receive clicks via input or accessibility "click" event.
 *
 * Add this modifier to the element to make it clickable within its bounds and show a default
 * indication when it's pressed.
 *
 * This version has no [MutableInteractionSource] or [Indication] parameters, the default indication
 * from [LocalIndication] will be used. To specify [MutableInteractionSource] or [Indication], use
 * the other overload.
 *
 * If you are only creating this clickable modifier inside composition, consider using the other
 * overload and explicitly passing `LocalIndication.current` for improved performance. For more
 * information see the documentation on the other overload.
 *
 * If you need to support double click or long click alongside the single click, consider using
 * [combinedClickable].
 *
 * ***Note*** Any removal operations on Android Views from `clickable` should wrap `onClick` in a

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 735–769)

        if (onClick !== other.onClick) return false

        return true
    }

    override fun hashCode(): Int {
        var result = (interactionSource?.hashCode() ?: 0)
        result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
        result = 31 * result + useLocalIndication.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + (onClickLabel?.hashCode() ?: 0)
        result = 31 * result + (role?.hashCode() ?: 0)
        result = 31 * result + onClick.hashCode()
        return result
    }
}

private class CombinedClickableElement(
    private val interactionSource: MutableInteractionSource?,
    private val indicationNodeFactory: IndicationNodeFactory?,
    private val useLocalIndication: Boolean,
    private val enabled: Boolean,
    private val onClickLabel: String?,
    private val role: Role?,
    private val onClick: () -> Unit,
    private val onLongClickLabel: String?,
    private val onLongClick: (() -> Unit)?,
    private val onDoubleClick: (() -> Unit)?,
    private val hapticFeedbackEnabled: Boolean,
) : ModifierNodeElement<CombinedClickableNode>() {
    override fun create() =
        CombinedClickableNode(
            onClick = onClick,
            onLongClickLabel = onLongClickLabel,
            onLongClick = onLongClick,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-735-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 770–804)

            onDoubleClick = onDoubleClick,
            hapticFeedbackEnabled = hapticFeedbackEnabled,
            interactionSource = interactionSource,
            indicationNodeFactory = indicationNodeFactory,
            useLocalIndication = useLocalIndication,
            enabled = enabled,
            onClickLabel = onClickLabel,
            role = role,
        )

    override fun update(node: CombinedClickableNode) {
        node.hapticFeedbackEnabled = hapticFeedbackEnabled
        node.update(
            onClick,
            onLongClickLabel,
            onLongClick,
            onDoubleClick,
            interactionSource,
            indicationNodeFactory,
            useLocalIndication,
            enabled,
            onClickLabel,
            role,
        )
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "combinedClickable"
        properties["indicationNodeFactory"] = indicationNodeFactory
        properties["interactionSource"] = interactionSource
        properties["enabled"] = enabled
        properties["onClickLabel"] = onClickLabel
        properties["role"] = role
        properties["onClick"] = onClick
        properties["onDoubleClick"] = onDoubleClick

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-770-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 805–839)

        properties["onLongClick"] = onLongClick
        properties["onLongClickLabel"] = onLongClickLabel
        properties["hapticFeedbackEnabled"] = hapticFeedbackEnabled
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as CombinedClickableElement

        if (interactionSource != other.interactionSource) return false
        if (indicationNodeFactory != other.indicationNodeFactory) return false
        if (useLocalIndication != other.useLocalIndication) return false
        if (enabled != other.enabled) return false
        if (onClickLabel != other.onClickLabel) return false
        if (role != other.role) return false
        if (onClick !== other.onClick) return false
        if (onLongClickLabel != other.onLongClickLabel) return false
        if (onLongClick !== other.onLongClick) return false
        if (onDoubleClick !== other.onDoubleClick) return false
        if (hapticFeedbackEnabled != other.hapticFeedbackEnabled) return false

        return true
    }

    override fun hashCode(): Int {
        var result = (interactionSource?.hashCode() ?: 0)
        result = 31 * result + (indicationNodeFactory?.hashCode() ?: 0)
        result = 31 * result + useLocalIndication.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + (onClickLabel?.hashCode() ?: 0)
        result = 31 * result + (role?.hashCode() ?: 0)
        result = 31 * result + onClick.hashCode()

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 840–874)

        result = 31 * result + (onLongClickLabel?.hashCode() ?: 0)
        result = 31 * result + (onLongClick?.hashCode() ?: 0)
        result = 31 * result + (onDoubleClick?.hashCode() ?: 0)
        result = 31 * result + hapticFeedbackEnabled.hashCode()
        return result
    }
}

internal open class ClickableNode(
    interactionSource: MutableInteractionSource?,
    indicationNodeFactory: IndicationNodeFactory?,
    useLocalIndication: Boolean,
    enabled: Boolean,
    onClickLabel: String?,
    role: Role?,
    onClick: () -> Unit,
) :
    AbstractClickableNode(
        interactionSource = interactionSource,
        indicationNodeFactory = indicationNodeFactory,
        useLocalIndication = useLocalIndication,
        enabled = enabled,
        onClickLabel = onClickLabel,
        role = role,
        onClick = onClick,
    ) {

    private var downEvent: PointerInputChange? = null
    private var indirectDownEvent: IndirectPointerInputChange? = null

    @OptIn(ExperimentalFoundationApi::class)
    override fun onPointerEvent(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        bounds: IntSize,

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 875–909)

    ) {
        super.onPointerEvent(pointerEvent, pass, bounds)
        if (pass == PointerEventPass.Main) {
            if (downEvent == null) {
                if (pointerEvent.isChangedToDown(requireUnconsumed = true)) {
                    handleDownEvent(pointerEvent.changes[0])
                }
            } else {
                if (pointerEvent.changes.fastAll { it.changedToUp() }) {
                    // All pointers are up
                    handleUpEvent(pointerEvent.changes[0])
                } else {
                    // Other events need to be checked for consumption / bounds related
                    // cancellation.
                    handleNonUpEventIfNeeded(pointerEvent, bounds)
                }
            }
        } else if (pass == PointerEventPass.Final) {
            checkForCancellation(pointerEvent)
            // The first final pass after the click was recognized, reset.
            if (gestureState == GestureState.Recognized) {
                gestureState = GestureState.Idle
            }
        }
    }

    override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
        super.onIndirectPointerEvent(event, pass)
        if (pass == PointerEventPass.Main) {
            if (indirectDownEvent == null) {
                if (event.changes.fastAny { it.changedToDownIgnoreConsumed() }) {
                    handleDownEvent(event.changes[0])
                }
            } else {
                if (event.changes.fastAll { it.changedToUp() }) {

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 910–944)

                    // All pointers are up
                    handleUpEvent(event.changes[0])
                } else {
                    // Other events need to be checked for consumption / exceeding touch slop
                    handleNonUpEventIfNeeded(event)
                }
            }
        } else if (pass == PointerEventPass.Final) {
            checkForCancellation(event)
            // The first final pass after the click was recognized, reset.
            if (gestureState == GestureState.Recognized) {
                gestureState = GestureState.Idle
            }
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun handleDownEvent(down: PointerInputChange) {
        down.consume()
        this.downEvent = down
        if (enabled) {
            gestureState = GestureState.Waiting
            handlePressInteractionStart(down)
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun handleDownEvent(down: IndirectPointerInputChange) {
        down.consume()
        this.indirectDownEvent = down
        if (enabled) {
            gestureState = GestureState.Waiting
            handlePressInteractionStart(down)
        }
    }

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-910-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 945–979)


    private fun handleUpEvent(up: PointerInputChange) {
        up.consume()
        if (enabled) {
            gestureState = GestureState.Recognized
            handlePressInteractionRelease(downEvent!!.position, indirectPointer = false)
            performClick()
        }
        this.downEvent = null
    }

    private fun handleUpEvent(up: IndirectPointerInputChange) {
        up.consume()
        if (enabled) {
            gestureState = GestureState.Recognized
            handlePressInteractionRelease(indirectDownEvent!!.position, indirectPointer = true)
            performClick()
        }
        this.indirectDownEvent = null
    }

    private fun handleNonUpEventIfNeeded(pointerEvent: PointerEvent, bounds: IntSize) {
        val touchPadding = getExtendedTouchPadding(bounds)
        if (
            pointerEvent.changes.fastAny { it.isConsumed || it.isOutOfBounds(bounds, touchPadding) }
        ) {
            cancelInput(indirectPointer = false)
        }
    }

    private fun handleNonUpEventIfNeeded(indirectPointerEvent: IndirectPointerEvent) {
        val touchSlop = currentValueOf(LocalViewConfiguration).touchSlop
        if (
            indirectPointerEvent.changes.fastAny {
                val distanceFromPress = it.position - indirectDownEvent!!.position

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-945-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)

## androidx.compose.foundation Clickable.kt source (lines 980–1014)

                val isOutOfBounds = abs(distanceFromPress.getDistance()) > touchSlop
                it.isConsumed || isOutOfBounds
            }
        ) {
            cancelInput(indirectPointer = true)
        }
    }

    private fun checkForCancellation(pointerEvent: PointerEvent) {
        if (downEvent != null) {
            // Check for cancel by position consumption. We can look on the Final pass of the
            // existing pointer event because it comes after the pass we checked above.
            if (pointerEvent.changes.fastAny { it.isConsumed && it != downEvent }) {
                cancelInput(indirectPointer = false)
            }
        }
    }

    private fun checkForCancellation(indirectPointerEvent: IndirectPointerEvent) {
        if (indirectDownEvent != null) {
            // Check for cancel by position consumption. We can look on the Final pass of the
            // existing pointer event because it comes after the pass we checked above.
            if (indirectPointerEvent.changes.fastAny { it.isConsumed && it != indirectDownEvent }) {
                cancelInput(indirectPointer = true)
            }
        }
    }

    override fun onCancelPointerInput() {
        super.onCancelPointerInput()
        cancelInput(indirectPointer = false)
    }

    override fun onCancelIndirectPointerInput() {
        cancelInput(indirectPointer = true)

Sources: [live-androidx-foundation-foundation-foundation-clickable-lines-980-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Clickable.kt)
