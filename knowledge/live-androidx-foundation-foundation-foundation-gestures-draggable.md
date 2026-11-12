---
type: reference
title: androidx.compose.foundation.gestures Draggable.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1
    endLine: 35
    sha256: df87bbe243b93e1a78709d382e227731e56d3c467c2bffbff3e3a61230fd23db
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

      package androidx.compose.foundation.gestures

      import androidx.annotation.FloatRange
      import androidx.collection.LongSparseArray
      import androidx.compose.foundation.ComposeFoundationFlags
      import androidx.compose.foundation.ComposeFoundationFlags.isDraggableInitialPassConsumptionFixEnabled
      import androidx.compose.foundation.ComposeFoundationFlags.isDraggableZeroDeltaConsumptionEnabled
      import androidx.compose.foundation.ExperimentalFoundationApi
      import androidx.compose.foundation.GestureConnection
      import androidx.compose.foundation.GestureState
      import androidx.compose.foundation.MutatePriority
      import androidx.compose.foundation.MutatorMutex
      import androidx.compose.foundation.gestureNode
      import androidx.compose.foundation.gestures.DragEvent.DragCancelled
      import androidx.compose.foundation.gestures.DragEvent.DragDelta
      import androidx.compose.foundation.gestures.DragEvent.DragStarted
      import androidx.compose.foundation.gestures.DragEvent.DragStopped
      import androidx.compose.foundation.interaction.DragInteraction
      import androidx.compose.foundation.interaction.MutableInteractionSource
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1012-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1012
    endLine: 1046
    sha256: dc9a264ffb2584864a63aa67e9056b846946cf816ea86f869cf25b918ad1d5df
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              /**
                               * We will only yield to any parent if the current node has less priority
                               * based on the angle of the gesture.
                               */
                              if (
                                  !isDragAngleAlignedWithSelfOrientation &&
                                      hasDragAngleAlignedWithParentOrientation
                              ) {
                                  state.verifyConsumptionInFinalPass = true
                              } else {
                                  dragEvent.consume()
                                  sendDragStart(state.initialDown!!, dragEvent, postSlopOffset)
                                  sendDragEvent(dragEvent, postSlopOffset)
                                  moveToDraggingState(dragEvent.id, hasStartedDragImmediately = false)
                              }
                          } else {
                              state.verifyConsumptionInFinalPass = true
                              // touch slop was not crossed, accumulate pre slop deltas
                              dragAccumulator += dragEvent.positionChangeIgnoreConsumed()
                          }
                      }
                  } else {
                      // This draggable "lost" the event as it was consumed by someone else, enter the
                      // gesture pickup state if the feature is enabled.
                      // Someone consumed this gesture, move this to the await pickup state.
                      moveToAwaitGesturePickupState(
                          requireNotNull(state.initialDown) {
                              "AwaitTouchSlop.initialDown was not initialized"
                          },
                          state.pointerId,
                          requireNotNull(touchSlopDetector) {
                              "AwaitTouchSlop.touchSlopDetector was not initialized"
                          },
                      )
                  }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1047-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1047
    endLine: 1081
    sha256: f98ffe9fdac31743ef1be5bb535c8b695a4cf5351229cf3aade2d1433d99f32e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              /**
               * This checks 2 cases: 1) A parent consumed in the main pass and this child can only see
               * that consumption during the final pass. 2) The parent actually consumed during the final
               * pass.
               */
              if (pass == PointerEventPass.Final && state.verifyConsumptionInFinalPass) {
                  if (dragEvent.isConsumed) {
                      // This draggable "lost" the event as it was consumed by someone else, enter the
                      // gesture pickup state if the feature is enabled.
                      // Someone consumed this gesture, move this to the await pickup state.
                      moveToAwaitGesturePickupState(
                          requireNotNull(state.initialDown) {
                              "AwaitTouchSlop.initialDown was not initialized"
                          },
                          state.pointerId,
                          requireNotNull(touchSlopDetector) {
                              "AwaitTouchSlop.touchSlopDetector was not initialized"
                          },
                      )
                  } else {
                      /**
                       * Self and nobody consumed dragEvent. We will only get here if self didn't consume
                       * in the main pass OR if self wasn't interested during the main pass. In this case
                       * we remain in the awaitTouchSlop state and wait for more information (events).
                       */
                      state.verifyConsumptionInFinalPass = false
                  }
              }
          }

          private fun processAwaitGesturePickup(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 106
    endLine: 140
    sha256: f02a5061750feeec7b7d8a082e26cd6283d7813b174403ec01e46809418bfb33
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param block to perform drag in
           */
          public suspend fun drag(
              dragPriority: MutatePriority = MutatePriority.Default,
              block: suspend DragScope.() -> Unit,
          )

          /**
           * Dispatch drag delta in pixels avoiding all drag related priority mechanisms.
           *
           * **NOTE:** unlike [drag], dispatching any delta with this method will bypass scrolling of any
           * priority. This method will also ignore `reverseDirection` and other parameters set in
           * [draggable].
           *
           * This method is used internally for low level operations, allowing implementers of
           * [DraggableState] influence the consumption as suits them, e.g. introduce nested scrolling.
           * Manually dispatching delta via this method will likely result in a bad user experience, you
           * must prefer [drag] method over this one.
           *
           * @param delta amount of scroll dispatched in the nested drag process
           */
          public fun dispatchRawDelta(delta: Float)
      }

      /** Scope used for suspending drag blocks */
      public interface DragScope {
          /** Attempts to drag by [pixels] px. */
          public fun dragBy(pixels: Float)
      }

      /**
       * Default implementation of [DraggableState] interface that allows to pass a simple action that
       * will be invoked when the drag occurs.
       *
       * This is the simplest way to set up a [draggable] modifier. When constructing this
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1082-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1082
    endLine: 1116
    sha256: 7c2dadba3dd09b638f7552a7409d52f648ea7b3b68dbe005a5212263f5571bbc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              state: DragDetectionState.AwaitGesturePickup,
          ) {
              /**
               * Drag pickup only happens during the final pass so we're sure nobody else was interested
               * in this gesture.
               */
              if (pass != PointerEventPass.Final) return
              val hasUnconsumedDrag = pointerEvent.changes.fastAll { !it.isConsumed }
              val hasDownPointers = pointerEvent.changes.fastAny { it.pressed }
              // all pointers are up, reset
              if (!hasDownPointers || pointerEvent.changes.isEmpty()) {
                  moveToAwaitDownState()
              } else if (hasUnconsumedDrag) {
                  // has pointers down with unconsumed events, a chance to pick up this gesture,
                  // move to the touch slop detection phase
                  val initialPositionChange =
                      pointerEvent.changes.first().position - state.initialDown!!.position

                  // await touch slop again, using the initial down as starting point.
                  // For most cases this should return immediately since we probably moved
                  // far enough from the initial down event.
                  moveToAwaitTouchSlopState(
                      requireNotNull(state.initialDown) {
                          "AwaitGesturePickup.initialDown was not initialized."
                      },
                      state.pointerId,
                      initialPositionChange,
                  )
              }
          }

          private fun processDraggingState(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              state: DragDetectionState.Dragging,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1117-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1117
    endLine: 1151
    sha256: 62d1c8c22cc930d60c75fe63abec5b8d80a3f8714d044c2aad5bc84ebaa1c3af
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              if (isDraggableInitialPassConsumptionFixEnabled) {
                  if (pass == PointerEventPass.Initial && state.hasStartedDragImmediately) {
                      val pointer = state.pointerId
                      val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
                      if (!dragEvent.isConsumed) {
                          dragEvent.consume()
                          state.consumedOnInitial = true
                      }
                      return
                  }

                  if (pass != PointerEventPass.Main) return

                  val pointer = state.pointerId
                  val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
                  val wasConsumedOnInitial = state.consumedOnInitial
                  val isConsumedByOther = dragEvent.isConsumed && !wasConsumedOnInitial
                  state.consumedOnInitial = false
                  if (dragEvent.changedToUpIgnoreConsumed()) {
                      val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                      if (otherDown == null) {
                          // This is the last "up"
                          if (!isConsumedByOther && dragEvent.changedToUpIgnoreConsumed()) {
                              sendDragStopped(dragEvent)
                          } else {
                              sendDragCancelled()
                          }
                          moveToAwaitDownState()
                      } else {
                          state.pointerId = otherDown.id
                      }
                  } else {
                      if (isConsumedByOther) {
                          sendDragCancelled()
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1152-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1152
    endLine: 1186
    sha256: 6b1c3dba098a196ceb6faa2777bfd876e880bb6383b29ee9b85277e116e3ea4d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      } else {
                          if (isDraggableZeroDeltaConsumptionEnabled) {
                              val positionChange =
                                  if (wasConsumedOnInitial) dragEvent.positionChangeIgnoreConsumed()
                                  else dragEvent.positionChange()
                              sendDragEvent(dragEvent, positionChange)
                              dragEvent.consume()
                          } else {
                              val positionChange = dragEvent.positionChangeIgnoreConsumed()

                              /**
                               * During the gesture pickup we can pickup events at any direction so
                               * disable the orientation lock.
                               */
                              val motionChange = positionChange.getDistance()
                              if (motionChange != 0.0f) {
                                  val effectivePositionChange =
                                      if (wasConsumedOnInitial) dragEvent.positionChangeIgnoreConsumed()
                                      else dragEvent.positionChange()
                                  sendDragEvent(dragEvent, effectivePositionChange)
                                  dragEvent.consume()
                              }
                          }
                      }
                  }
              } else {
                  if (pass != PointerEventPass.Main) return

                  val pointer = state.pointerId
                  val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
                  if (dragEvent.changedToUpIgnoreConsumed()) {
                      val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                      if (otherDown == null) {
                          // This is the last "up"
                          if (!dragEvent.isConsumed && dragEvent.changedToUpIgnoreConsumed()) {
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1187-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1187
    endLine: 1221
    sha256: ccd353e83c27ba4fbeb5d8bd9e04434703e55707f6376b404c35a5ee457a2044
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                              sendDragStopped(dragEvent)
                          } else {
                              sendDragCancelled()
                          }
                          moveToAwaitDownState()
                      } else {
                          state.pointerId = otherDown.id
                      }
                  } else {
                      if (dragEvent.isConsumed) {
                          sendDragCancelled()
                      } else {
                          if (isDraggableZeroDeltaConsumptionEnabled) {
                              val positionChange = dragEvent.positionChange()
                              sendDragEvent(dragEvent, positionChange)
                              dragEvent.consume()
                          } else {
                              val positionChange = dragEvent.positionChangeIgnoreConsumed()

                              /**
                               * During the gesture pickup we can pickup events at any direction so
                               * disable the orientation lock.
                               */
                              val motionChange = positionChange.getDistance()
                              if (motionChange != 0.0f) {
                                  val positionChange = dragEvent.positionChange()
                                  sendDragEvent(dragEvent, positionChange)
                                  dragEvent.consume()
                              }
                          }
                      }
                  }
              }
          }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1222-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1222
    endLine: 1256
    sha256: 9d647cbc382f743c826f6f928d0b6f9387cc50f2b9ed0d7a161c41aea5c1bb99
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private fun sendDragStart(
              down: PointerInputChange,
              slopTriggerChange: PointerInputChange,
              overSlopOffset: Offset,
          ) {
              if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  if (velocityTracker == null) velocityTracker = VelocityTracker()
                  requireVelocityTracker().addPointerInputChange(down)
              }
              val dragStartedOffset = slopTriggerChange.position - overSlopOffset
              if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                  // the drag start event offset is the down event + touch slop value
                  // or in this case the event that triggered the touch slop minus
                  // the post slop offset
                  nodeOffset = Offset.Zero // restart node offset
              } else if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  // Otherwise the root offset is tracked for the whole gesture, starting at the initial
                  // down, so resetting it here would discard the movement observed before touch slop
                  // was crossed.
                  resetRootOffset()
              }
              if (canDrag(down.type)) {
                  if (!isListeningForEvents) {
                      if (channel == null) {
                          channel = Channel(capacity = Channel.UNLIMITED)
                      }
                      startListeningForEvents()
                  }
                  if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                      previousPositionOnScreen = requireLayoutCoordinates().positionOnScreen()
                  } else if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                      previousRootPositionOnScreen =
                          requireLayoutCoordinates().findRootCoordinates().positionOnScreen()
                  }
                  requireChannel().trySend(DragStarted(dragStartedOffset))
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1257-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1257
    endLine: 1291
    sha256: a5da17c5dbe497d41aa60374bd62bbded7b4b22427e1f842c32097f41147c736
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          private fun sendDragEvent(change: PointerInputChange, dragAmount: Offset) {
              dragAccumulator += dragAmount
              if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                      val currentPositionOnScreen = node.requireLayoutCoordinates().positionOnScreen()
                      // container changed positions
                      if (
                          previousPositionOnScreen != Offset.Unspecified &&
                              currentPositionOnScreen != previousPositionOnScreen
                      ) {
                          val delta = currentPositionOnScreen - previousPositionOnScreen
                          nodeOffset += delta
                      }
                      previousPositionOnScreen = currentPositionOnScreen
                      requireVelocityTracker().addPointerInputChange(event = change, offset = nodeOffset)
                  } else {
                      updateRootOffset()
                      requireVelocityTracker().addPointerInputChange(change, rootOffset)
                  }
              }
              requireChannel().trySend(DragDelta(dragAmount, false))
          }

          private fun sendDragStopped(change: PointerInputChange) {
              val maximumVelocity = currentValueOf(LocalViewConfiguration).maximumFlingVelocity
              val velocity =
                  if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                      velocityTrackerMulti
                          ?.get(change.id.value)
                          ?.calculateVelocity(Velocity(maximumVelocity, maximumVelocity)) ?: Velocity.Zero
                  } else {
                      requireVelocityTracker().addPointerInputChange(change)
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1292-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1292
    endLine: 1326
    sha256: 6a9e97db52ee54dfd277d3231f0f522ee8f6640b69cf188d0698285ffb147200
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      requireVelocityTracker()
                          .calculateVelocity(Velocity(maximumVelocity, maximumVelocity))
                          .also { requireVelocityTracker().resetTracking() }
                  }
              requireChannel().trySend(DragStopped(velocity.toValidVelocity(), false))
              isListeningForPointerInputEvents = false
          }

          private fun sendDragCancelled() {
              requireChannel().trySend(DragCancelled)
          }

          fun onDragEvent(event: DragEvent) {
              if (event is DragStarted && !isListeningForEvents) {
                  isListeningForEvents = true
                  startListeningForEvents()
              }
              requireChannel().trySend(event)
          }
      }

      private class DefaultDraggableState(val onDelta: (Float) -> Unit) : DraggableState {

          private val dragScope: DragScope =
              object : DragScope {
                  override fun dragBy(pixels: Float): Unit = onDelta(pixels)
              }

          private val scrollMutex = MutatorMutex()

          override suspend fun drag(
              dragPriority: MutatePriority,
              block: suspend DragScope.() -> Unit,
          ): Unit = coroutineScope { scrollMutex.mutateWith(dragScope, dragPriority, block) }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1327-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1327
    endLine: 1361
    sha256: 2bb50d895a7fd195117486facf10efe41af5c060fc59fdc2b529779c05d1eedb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun dispatchRawDelta(delta: Float) {
              return onDelta(delta)
          }
      }

      internal sealed class DragEvent {
          class DragStarted(val startPoint: Offset) : DragEvent()

          class DragStopped(val velocity: Velocity, val isIndirectPointerEvent: Boolean) : DragEvent()

          object DragCancelled : DragEvent()

          class DragDelta(val delta: Offset, val isIndirectPointerEvent: Boolean) : DragEvent()
      }

      internal fun Offset.toFloat(orientation: Orientation) =
          if (orientation == Orientation.Vertical) this.y else this.x

      private fun Velocity.toFloat(orientation: Orientation) =
          if (orientation == Orientation.Vertical) this.y else this.x

      internal fun Velocity.toValidVelocity() =
          Velocity(if (this.x.isNaN()) 0f else this.x, if (this.y.isNaN()) 0f else this.y)

      private val NoOpOnDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit = {}
      private val NoOpOnDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit = {}

      private sealed class DragDetectionState {
          /**
           * Starter state for any drag gesture cycle. At this state we're waiting for a Down event to
           * indicate that a drag gesture may start. Since drag gesture start at the initial pass we have
           * the option to indicate if we consumed the event during the initial pass using
           * [consumedOnInitial]. We also save the [awaitTouchSlop] between passes so we don't call the
           * [DragGestureNode.startDragImmediately] as often.
           */
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1362-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1362
    endLine: 1396
    sha256: 9a6afa0fc612e9ae281dd76f8f480e6757d95a249b86f498713f37c2697dcb87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          class AwaitDown(
              var awaitTouchSlop: AwaitTouchSlop = AwaitTouchSlop.NotInitialized,
              var consumedOnInitial: Boolean = false,
              var hasSeenInitialEvent: Boolean = false,
          ) : DragDetectionState() {

              enum class AwaitTouchSlop {
                  Yes,
                  No,
                  NotInitialized,
              }
          }

          /**
           * If drag should wait for touch slop, after the initial down recognition we move to this state.
           * Here we will collect drag events until touch slop is crossed.
           */
          class AwaitTouchSlop(
              var initialDown: PointerInputChange? = null,
              var pointerId: PointerId = PointerId(Long.MAX_VALUE),
              var verifyConsumptionInFinalPass: Boolean = false,
          ) : DragDetectionState()

          /**
           * Alternative state that implements the gesture pick up feature. If a draggable loses an event
           * because someone else consumed it, it can still pick it up later if the consumer "gives up" on
           * that gesture. Once a gesture is lost the draggable will pass on to this state until all
           * fingers are up.
           */
          class AwaitGesturePickup(
              var initialDown: PointerInputChange? = null,
              var pointerId: PointerId = PointerId(Long.MAX_VALUE),
              var touchSlopDetector: TouchSlopDetector? = null,
          ) : DragDetectionState()
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1397-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1397
    endLine: 1431
    sha256: 7aebf7b685a346e0c4e71c40d60fb62d065655dce011dc1471faada55ec3a032
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** State where dragging is happening. */
          class Dragging(
              var pointerId: PointerId = PointerId(Long.MAX_VALUE),
              var consumedOnInitial: Boolean = false,
              var hasStartedDragImmediately: Boolean = false,
          ) : DragDetectionState()
      }

      /** A specialized [GestureConnection] to allow high level coordination between drag gestures. */
      internal interface DraggableGestureConnection : GestureConnection {

          /**
           * The orientation on which this connection recognizes events. If null this means this is a
           * 2-dimensional draggable.
           */
          val orientation: Orientation?
      }

      internal fun DelegatableNode.traverseParentDraggableGestures(
          block: (DraggableGestureConnection) -> Boolean
      ) {
          traverseAncestorGestures {
              if (it is DraggableGestureConnection) {
                  block(it)
              } else {
                  true
              }
          }
      }

      /**
       * We compare the angle's gesture [dragAngle] with the angle represented here to show that a node is
       * aligned with a given gesture. We also traverse the tree and compare the angle of aligment of the
       * parents when run against this angle criteria. An angle is aligned when it is with an angle range
       * for [orientation]. This allows for multi-orientation dragging hierarchies to coordinate and let
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 141
    endLine: 175
    sha256: c32327c40ef93d329d5fceaf02d84c1c207d45d074f0fbe1e18b30e4cf7b832e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [DraggableState], you must provide a [onDelta] lambda, which will be invoked whenever drag
       * happens (by gesture input or a custom [DraggableState.drag] call) with the delta in pixels.
       *
       * If you are creating [DraggableState] in composition, consider using [rememberDraggableState].
       *
       * @param onDelta callback invoked when drag occurs. The callback receives the delta in pixels.
       */
      public fun DraggableState(onDelta: (Float) -> Unit): DraggableState = DefaultDraggableState(onDelta)

      /**
       * Create and remember default implementation of [DraggableState] interface that allows to pass a
       * simple action that will be invoked when the drag occurs.
       *
       * This is the simplest way to set up a [draggable] modifier. When constructing this
       * [DraggableState], you must provide a [onDelta] lambda, which will be invoked whenever drag
       * happens (by gesture input or a custom [DraggableState.drag] call) with the delta in pixels.
       *
       * @param onDelta callback invoked when drag occurs. The callback receives the delta in pixels.
       */
      @Composable
      public fun rememberDraggableState(onDelta: (Float) -> Unit): DraggableState {
          val onDeltaState = rememberUpdatedState(onDelta)
          return remember { DraggableState { onDeltaState.value.invoke(it) } }
      }

      /**
       * Configure touch dragging for the UI element in a single [Orientation]. The drag distance reported
       * to [DraggableState], allowing users to react on the drag delta and update their state.
       *
       * The common usecase for this component is when you need to be able to drag something inside the
       * component on the screen and represent this state via one float value
       *
       * If you need to control the whole dragging flow, consider using [pointerInput] instead with the
       * helper functions like [detectDragGestures].
       *
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1432-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1432
    endLine: 1465
    sha256: 1d8ed5dab25e07b4887143f8012f7cb2fb938b98a309c3b8b7726df1e048cdb8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the component that matches the direction the user is dragging to process the gesture, even if the
       * user has crossed touch slop in both directions.
       *
       * The behavior will change from the regular hierarchical (pointer input) behavior when a node is
       * not aligned but one of its parent is. This means the gesture performed up until now will not
       * trigger the angle bound of the current node (is aligned with [orientation], but will trigger the
       * angle bound of one of its parents. Here are a few examples:
       *
       * Example 1: Gesture is mostly horizontal (the angle of the gesture is < 30). In the case where we
       * have a vertical detector as a parent and a horizontal detector as a child. The horizontal
       * detector is aligned because the angle of the gesture is smaller than [HorizontalAngleUpperBounds]
       * so the horizontal detector wins.
       *
       * Example 2: Gesture is mostly vertical (the angle of the gesture is > 30 and < 90). In the case
       * where we have a vertical detector as a parent and a horizontal detector as a child. The
       * horizontal detector is not aligned because the angle of the gesture is larger than
       * [HorizontalAngleUpperBounds]. The vertical detector is aligned because the gesture angle is
       * smaller than [VerticalAngleUpperBounds] and larger than [HorizontalAngleUpperBounds]. The
       * vertical takes over.
       *
       * Example 3: In the case where we have a parent vertical detector and a 2D child. The 2D child will
       * be aligned since it cares about both angles.
       *
       * Example 4: For cases where we have detectors on the same direction we will never find a case
       * where the inner one is not aligned whilst the outer one is aligned so the previous behavior
       * remains.
       *
       * Example 5: When the parent is a horizontal detector and the child is vertical. Whichever crosses
       * the touch slop first wins: If the parent crosses the touch slop first, the child loses the
       * gesture if the child crosses first, the child will be aligned in the gesture so it wins. Note
       * that if the gesture is fully horizontal, it means the parent will cross the touch slop first.
       */
      private fun isDragAngleAlignedWithOrientation(
          orientation: Orientation,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1466-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1466
    endLine: 1500
    sha256: a34cc9f35d2db45948064a87fcdec1524246abaca7391eb6f4e23cecb3ed16d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @FloatRange(from = 0.0, to = 90.0) dragAngle: Float,
      ): Boolean =
          if (orientation == Orientation.Horizontal) {
              dragAngle <= HorizontalAngleUpperBounds
          } else {
              dragAngle > HorizontalAngleUpperBounds && dragAngle <= VerticalAngleUpperBounds
          }

      private const val HorizontalAngleUpperBounds = 30
      private const val VerticalAngleUpperBounds = 90

      /**
       * Returns true if any pointer in the event changed to down, provided there are no other active
       * pressed pointers that did not change to down.
       *
       * This is used instead of [PointerEvent.isChangedToDown] to allow touch gestures to start even when
       * a persistent non-pressed pointer (like a trackpad hover pointer) is present in the same event,
       * while still ignoring new down events if there is already an active touch gesture.
       */
      internal fun PointerEvent.isAnyChangedToDown(
          requireUnconsumed: Boolean,
          onlyPrimaryMouseButton: Boolean = firstDownRefersToPrimaryMouseButtonOnly(),
      ): Boolean {
          val onlyPrimaryButtonCausesDown =
              onlyPrimaryMouseButton && changes.fastAll { it.type == PointerType.Mouse }
          if (onlyPrimaryButtonCausesDown && !buttons.isPrimaryPressed) return false

          // Check if there are any other pressed pointers that did not change to down.
          // If so, we ignore this event to match the old behavior where all pressed pointers
          // must have changed to down (i.e. we don't start on ACTION_POINTER_DOWN if another
          // pointer is already active).
          val hasOtherActivePressedPointer = changes.fastAny {
              it.pressed &&
                  !(if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed())
          }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1501-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 1501
    endLine: 1506
    sha256: 664f9f58344171910672a96e9b3c49b52abb5016138fcfc36692c815e9428f69
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          if (hasOtherActivePressedPointer) return false
          return changes.fastAny {
              if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed()
          }
      }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 176
    endLine: 206
    sha256: 202be28bdef4a912d14e1c3eed55e97a8e60d5b92a597cdab7754e97e11265d3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If you want to enable dragging in 2 dimensions, consider using [draggable2D].
       *
       * If you are implementing scroll/fling behavior, consider using [scrollable].
       *
       * @sample androidx.compose.foundation.samples.DraggableSample
       * @param state [DraggableState] state of the draggable. Defines how drag events will be interpreted
       *   by the user land logic.
       * @param orientation orientation of the drag
       * @param enabled whether or not drag is enabled
       * @param interactionSource [MutableInteractionSource] that will be used to emit
       *   [DragInteraction.Start] when this draggable is being dragged.
       * @param startDragImmediately when set to true, draggable will start dragging immediately and
       *   prevent other gesture detectors from reacting to "down" events (in order to block composed
       *   press-based gestures). This is intended to allow end users to "catch" an animating widget by
       *   pressing on it. It's useful to set it when value you're dragging is settling / animating.
       * @param onDragStarted callback that will be invoked when drag is about to start at the starting
       *   position, allowing user to suspend and perform preparation for drag, if desired. This suspend
       *   function is invoked with the draggable scope, allowing for async processing, if desired. Note
       *   that the scope used here is the one provided by the draggable node, for long running work that
       *   needs to outlast the modifier being in the composition you should use a scope that fits the
       *   lifecycle needed.
       * @param onDragStopped callback that will be invoked when drag is finished, allowing the user to
       *   react on velocity and process it. This suspend function is invoked with the draggable scope,
       *   allowing for async processing, if desired. Note that the scope used here is the one provided by
       *   the draggable node, for long running work that needs to outlast the modifier being in the
       *   composition you should use a scope that fits the lifecycle needed.
       * @param reverseDirection reverse the direction of the scroll, so top to bottom scroll will behave
       *   like bottom to top and left to right will behave like right to left.
       */
      @Stable
      public fun Modifier.draggable(
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-207-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 207
    endLine: 241
    sha256: fe08d669efcbc3781a5eeabd87f681ad7c5846c20b9b2f8d5ddc8c2cd97a8609
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          state: DraggableState,
          orientation: Orientation,
          enabled: Boolean = true,
          interactionSource: MutableInteractionSource? = null,
          startDragImmediately: Boolean = false,
          onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit = NoOpOnDragStarted,
          onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit = NoOpOnDragStopped,
          reverseDirection: Boolean = false,
      ): Modifier =
          this then
              DraggableElement(
                  state = state,
                  orientation = orientation,
                  enabled = enabled,
                  interactionSource = interactionSource,
                  startDragImmediately = startDragImmediately,
                  onDragStarted = onDragStarted,
                  onDragStopped = onDragStopped,
                  reverseDirection = reverseDirection,
              )

      internal class DraggableElement(
          private val state: DraggableState,
          private val orientation: Orientation,
          private val enabled: Boolean,
          private val interactionSource: MutableInteractionSource?,
          private val startDragImmediately: Boolean,
          private val onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
          private val onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
          private val reverseDirection: Boolean,
      ) : ModifierNodeElement<DraggableNode>() {
          override fun create(): DraggableNode =
              DraggableNode(
                  state,
                  CanDrag,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-242-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 242
    endLine: 276
    sha256: 0acad4cf15dc1cc885204257da1e73470b1296c39a7931560664592fbf312c10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  orientation,
                  enabled,
                  interactionSource,
                  startDragImmediately,
                  onDragStarted,
                  onDragStopped,
                  reverseDirection,
              )

          override fun update(node: DraggableNode) {
              node.update(
                  state,
                  CanDrag,
                  orientation,
                  enabled,
                  interactionSource,
                  startDragImmediately,
                  onDragStarted,
                  onDragStopped,
                  reverseDirection,
              )
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as DraggableElement

              if (state != other.state) return false
              if (orientation != other.orientation) return false
              if (enabled != other.enabled) return false
              if (interactionSource != other.interactionSource) return false
              if (startDragImmediately != other.startDragImmediately) return false
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-277-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 277
    endLine: 311
    sha256: ea2120fe712459298a070161d8506906430621b18c9852b40b777b078098c597
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (onDragStarted != other.onDragStarted) return false
              if (onDragStopped != other.onDragStopped) return false
              if (reverseDirection != other.reverseDirection) return false

              return true
          }

          override fun hashCode(): Int {
              var result = state.hashCode()
              result = 31 * result + orientation.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + (interactionSource?.hashCode() ?: 0)
              result = 31 * result + startDragImmediately.hashCode()
              result = 31 * result + onDragStarted.hashCode()
              result = 31 * result + onDragStopped.hashCode()
              result = 31 * result + reverseDirection.hashCode()
              return result
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "draggable"
              properties["orientation"] = orientation
              properties["enabled"] = enabled
              properties["reverseDirection"] = reverseDirection
              properties["interactionSource"] = interactionSource
              properties["startDragImmediately"] = startDragImmediately
              properties["onDragStarted"] = onDragStarted
              properties["onDragStopped"] = onDragStopped
              properties["state"] = state
          }

          companion object {
              val CanDrag: (PointerType) -> Boolean = { true }
          }
      }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-312-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 312
    endLine: 346
    sha256: e07fd2ab992f57542b54139775022cbe5ea172f02f6353a802b0321654a3f8d1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      internal class DraggableNode(
          private var state: DraggableState,
          canDrag: (PointerType) -> Boolean,
          orientation: Orientation,
          enabled: Boolean,
          interactionSource: MutableInteractionSource?,
          private var startDragImmediately: Boolean,
          private var onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
          private var onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
          private var reverseDirection: Boolean,
      ) :
          DragGestureNode(
              canDrag = canDrag,
              enabled = enabled,
              interactionSource = interactionSource,
              orientation = orientation,
          ) {

          override suspend fun drag(forEachDelta: suspend ((dragDelta: DragDelta) -> Unit) -> Unit) {
              val orientation = orientation ?: return
              state.drag(MutatePriority.UserInput) {
                  forEachDelta { dragDelta ->
                      dragBy(dragDelta.delta.reverseIfNeeded().toFloat(orientation))
                  }
              }
          }

          override fun onDragStarted(startedPosition: Offset) {
              if (!isAttached || onDragStarted == NoOpOnDragStarted) return
              coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                  this@DraggableNode.onDragStarted(this, startedPosition)
              }
          }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-347-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 347
    endLine: 381
    sha256: efe2df9023027bda386657a18e3981e81daf3dc1dda1cb4e81e5f9eaca2ae85e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun onDragStopped(event: DragStopped) {
              if (!isAttached || onDragStopped == NoOpOnDragStopped) return
              val orientation = orientation ?: return
              coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                  this@DraggableNode.onDragStopped(
                      this,
                      event.velocity.reverseIfNeeded().toFloat(orientation),
                  )
              }
          }

          override fun startDragImmediately(): Boolean = startDragImmediately

          fun update(
              state: DraggableState,
              canDrag: (PointerType) -> Boolean,
              orientation: Orientation,
              enabled: Boolean,
              interactionSource: MutableInteractionSource?,
              startDragImmediately: Boolean,
              onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
              onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
              reverseDirection: Boolean,
          ) {
              var resetPointerInputHandling = false
              if (this.state != state) {
                  this.state = state
                  resetPointerInputHandling = true
              }
              if (this.reverseDirection != reverseDirection) {
                  this.reverseDirection = reverseDirection
                  resetPointerInputHandling = true
              }

              this.onDragStarted = onDragStarted
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 36
    endLine: 70
    sha256: 874ea666eb566cc92d83ad6a32c6eebb002aea7819ae36227a5ebb66a6507e56
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
      import androidx.compose.foundation.traverseAncestorGestures
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.isSpecified
      import androidx.compose.ui.input.indirect.IndirectPointerEvent
      import androidx.compose.ui.input.indirect.IndirectPointerInputModifierNode
      import androidx.compose.ui.input.pointer.PointerEvent
      import androidx.compose.ui.input.pointer.PointerEventPass
      import androidx.compose.ui.input.pointer.PointerId
      import androidx.compose.ui.input.pointer.PointerInputChange
      import androidx.compose.ui.input.pointer.PointerType
      import androidx.compose.ui.input.pointer.changedToDown
      import androidx.compose.ui.input.pointer.changedToDownIgnoreConsumed
      import androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
      import androidx.compose.ui.input.pointer.isPrimaryPressed
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.input.pointer.positionChange
      import androidx.compose.ui.input.pointer.positionChangeIgnoreConsumed
      import androidx.compose.ui.input.pointer.util.VelocityTracker
      import androidx.compose.ui.input.pointer.util.addPointerInputChange
      import androidx.compose.ui.layout.findRootCoordinates
      import androidx.compose.ui.layout.positionOnScreen
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatableNode
      import androidx.compose.ui.node.DelegatingNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.PointerInputModifierNode
      import androidx.compose.ui.node.currentValueOf
      import androidx.compose.ui.node.requireLayoutCoordinates
      import androidx.compose.ui.platform.InspectorInfo
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-382-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 382
    endLine: 416
    sha256: ac9592b4d493c838b2578b3bd3ffc01392cc34ead52203a7cfd55ebb1e9ca353
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              this.onDragStopped = onDragStopped
              this.startDragImmediately = startDragImmediately

              update(canDrag, enabled, interactionSource, orientation, resetPointerInputHandling)
          }

          private fun Velocity.reverseIfNeeded() = if (reverseDirection) this * -1f else this * 1f

          private fun Offset.reverseIfNeeded() = if (reverseDirection) this * -1f else this * 1f
      }

      /** A node that performs drag gesture recognition and event propagation. */
      @OptIn(ExperimentalFoundationApi::class)
      internal abstract class DragGestureNode(
          canDrag: (PointerType) -> Boolean,
          enabled: Boolean,
          interactionSource: MutableInteractionSource?,
          override var orientation: Orientation?,
      ) :
          DelegatingNode(),
          PointerInputModifierNode,
          IndirectPointerInputModifierNode,
          CompositionLocalConsumerModifierNode,
          DraggableGestureConnection {

          var canDrag = canDrag
              private set

          var enabled = enabled
              private set

          protected var interactionSource = interactionSource
              private set

          // Use wrapper lambdas here to make sure that if these properties are updated while we suspend,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-417-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 417
    endLine: 451
    sha256: 4545c0aaaa1bb52edff08aebc6b15e7136079f6a71524e7711cea0bbf357ba7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // we point to the new reference when we invoke them. startDragImmediately is a lambda since we
          // need the most recent value passed to it from Scrollable.
          private val _canDrag: (PointerType) -> Boolean = { this.canDrag(it) }
          private var channel: Channel<DragEvent>? = null
          private var dragInteraction: DragInteraction.Start? = null
          internal var isListeningForEvents = false
          internal var isListeningForPointerInputEvents = false

          /** Store non-initialized states for re-use */
          private var _awaitDownState: DragDetectionState.AwaitDown? = null

          private var dragAccumulator = Offset.Zero

          private var pointerInputGestureNode: DelegatableNode? = null

          private var indirectTouchGestureNode: DelegatableNode? = null

          private val awaitDownState: DragDetectionState.AwaitDown
              get() = _awaitDownState ?: DragDetectionState.AwaitDown().also { _awaitDownState = it }

          private var _draggingState: DragDetectionState.Dragging? = null
          private val draggingState: DragDetectionState.Dragging
              get() = _draggingState ?: DragDetectionState.Dragging().also { _draggingState = it }

          private var _awaitTouchSlopState: DragDetectionState.AwaitTouchSlop? = null
          private val awaitTouchSlopState: DragDetectionState.AwaitTouchSlop
              get() =
                  _awaitTouchSlopState
                      ?: DragDetectionState.AwaitTouchSlop().also { _awaitTouchSlopState = it }

          private var _awaitGesturePickupState: DragDetectionState.AwaitGesturePickup? = null
          private val awaitGesturePickupState: DragDetectionState.AwaitGesturePickup
              get() =
                  _awaitGesturePickupState
                      ?: DragDetectionState.AwaitGesturePickup().also { _awaitGesturePickupState = it }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-452-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 452
    endLine: 486
    sha256: f2166cbd91d7a4b3c3f7c3b85006f6a222c45247ccbbad7cac475208a137e898
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          private var currentDragState: DragDetectionState? = null

          private var velocityTracker: VelocityTracker? = null
          private var previousPositionOnScreen = Offset.Unspecified
          private var rootOffset = Offset.Zero
          private var previousRootPositionOnScreen = Offset.Unspecified
          private var velocityTrackerMulti: LongSparseArray<VelocityTracker>? = null
          private var touchSlopDetector: TouchSlopDetector? = null
          private var indirectPointerInputDragCycleDetector: IndirectPointerInputDragCycleDetector? = null

          /**
           * Accumulated position offset of this [Modifier.Node] that happened during a drag cycle. This
           * is used to correct the pointer input events that are added to the Velocity Tracker. If this
           * Node is static during the drag cycle, nothing will happen. On the other hand, if the position
           * of this node changes during the drag cycle, we need to correct the Pointer Input used for the
           * drag events, this is because Velocity Tracker doesn't have the knowledge about changes in the
           * position of the container that uses it, and because each Pointer Input event is related to
           * the container's root.
           */
          private var nodeOffset = Offset.Zero

          /**
           * Responsible for the dragging behavior between the start and the end of the drag. It
           * continually invokes `forEachDelta` to process incoming events. In return, `forEachDelta`
           * calls `dragBy` method to process each individual delta.
           */
          abstract suspend fun drag(forEachDelta: suspend ((dragDelta: DragDelta) -> Unit) -> Unit)

          /**
           * Passes the action needed when a drag starts. This gives the ability to pass the desired
           * behavior from other nodes implementing AbstractDraggableNode
           */
          abstract fun onDragStarted(startedPosition: Offset)
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-487-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 487
    endLine: 521
    sha256: 2249d39fc9536cdfa5b30dda150adbe029ccdcd68ec38dcf2c0a1ce704d6ed45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Passes the action needed when a drag stops. This gives the ability to pass the desired
           * behavior from other nodes implementing AbstractDraggableNode
           */
          abstract fun onDragStopped(event: DragStopped)

          /**
           * If touch slop recognition should be skipped. If this is true, this node will start
           * recognizing drag events immediately without waiting for touch slop.
           */
          abstract fun startDragImmediately(): Boolean

          private fun requireVelocityTracker(): VelocityTracker =
              requireNotNull(velocityTracker) { "Velocity Tracker not initialized." }

          private fun requireChannel(): Channel<DragEvent> =
              requireNotNull(channel) { "Events channel not initialized." }

          private fun requireTouchSlopDetector(): TouchSlopDetector =
              requireNotNull(touchSlopDetector) { "Touch slop detector not initialized." }

          @OptIn(ExperimentalFoundationApi::class)
          private fun startListeningForEvents() {
              isListeningForEvents = true

              if (channel == null) {
                  channel = Channel(capacity = Channel.UNLIMITED)
              }

              /**
               * To preserve the original behavior we had (before the Modifier.Node migration) we need to
               * scope the DragStopped and DragCancel methods to the node's coroutine scope instead of
               * using the one provided by the pointer input modifier, this is to ensure that even when
               * the pointer input scope is reset we will continue any coroutine scope scope that we
               * started from these methods while the pointer input scope was active.
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-522-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 522
    endLine: 556
    sha256: 0a0941859bae2144bdb4f223861808188a6fa7ac4b46ff9c251f17cb2441b3bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               */
              coroutineScope.launch {
                  while (isActive) {
                      var event = channel?.receive()
                      if (event !is DragStarted) continue
                      processDragStart(event)
                      try {
                          drag { processDelta ->
                              while (event !is DragStopped && event !is DragCancelled) {
                                  (event as? DragDelta)?.let(processDelta)
                                  event = channel?.receive()
                              }
                          }
                          if (event is DragStopped) {
                              processDragStop(event as DragStopped)
                          } else if (event is DragCancelled) {
                              processDragCancel()
                          }
                      } catch (c: CancellationException) {
                          processDragCancel()
                      }
                  }
              }
          }

          override val gestureState: GestureState
              get() =
                  if (enabled) {
                      when (val state = currentDragState) {
                          is DragDetectionState.AwaitDown ->
                              if (state.hasSeenInitialEvent) GestureState.Waiting else GestureState.Idle
                          is DragDetectionState.AwaitTouchSlop -> GestureState.Waiting
                          is DragDetectionState.AwaitGesturePickup -> GestureState.Waiting
                          is DragDetectionState.Dragging -> GestureState.Recognized
                          else -> GestureState.Idle
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-557-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 557
    endLine: 591
    sha256: 491e9910913d14566d2638d813f2f3390980c7fbd43130280fdb76ba3c26aebe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  } else {
                      GestureState.Idle
                  }

          override fun onDetach() {
              isListeningForEvents = false
              disposeInteractionSource()
              if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                  nodeOffset = Offset.Zero
              } else {
                  resetRootOffset()
              }

              resetGestureNodes()
          }

          protected fun initializePointerInputGestureCoordination() {
              if (pointerInputGestureNode == null) {
                  pointerInputGestureNode = delegate(gestureNode(this))
              }
          }

          protected fun initializeIndirectTouchGestureCoordination() {
              if (indirectTouchGestureNode == null) {
                  indirectTouchGestureNode =
                      delegate(
                          gestureNode(indirectPointerInputDragCycleDetector as DraggableGestureConnection)
                      )
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          override fun onPointerEvent(
              pointerEvent: PointerEvent,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-592-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 592
    endLine: 626
    sha256: 5ada435b7618a50ee60b9423f01ff33e5b525d924869421b14b3b96a47d2b960
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              pass: PointerEventPass,
              bounds: IntSize,
          ) {
              isListeningForPointerInputEvents = true
              if (enabled) {
                  initializePointerInputGestureCoordination()
                  // initialize current state
                  if (currentDragState == null) currentDragState = awaitDownState
                  processRawPointerEvent(pointerEvent, pass)
              }
          }

          override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
              if (enabled) {
                  if (indirectPointerInputDragCycleDetector == null) {
                      indirectPointerInputDragCycleDetector = IndirectPointerInputDragCycleDetector(this)
                  }
                  initializeIndirectTouchGestureCoordination()
                  indirectPointerInputDragCycleDetector?.processIndirectPointerInputEvent(event, pass)
              }
          }

          override fun onCancelIndirectPointerInput() {
              indirectPointerInputDragCycleDetector?.resetDragDetectionState()
          }

          override fun onCancelPointerInput() {
              if (isListeningForPointerInputEvents) resetDragDetectionState()
              isListeningForPointerInputEvents = false
          }

          private suspend fun processDragStart(event: DragStarted) {
              dragInteraction?.let { oldInteraction ->
                  interactionSource?.emit(DragInteraction.Cancel(oldInteraction))
              }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-627-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 627
    endLine: 661
    sha256: c335c13aa35dbc840c6a285872b6934295f1acd4251335361e4c4d35673e935c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val interaction = DragInteraction.Start()
              interactionSource?.emit(interaction)
              dragInteraction = interaction
              onDragStarted(event.startPoint)
          }

          private suspend fun processDragStop(event: DragStopped) {
              dragInteraction?.let { interaction ->
                  interactionSource?.emit(DragInteraction.Stop(interaction))
                  dragInteraction = null
              }
              onDragStopped(event)
          }

          private suspend fun processDragCancel() {
              dragInteraction?.let { interaction ->
                  interactionSource?.emit(DragInteraction.Cancel(interaction))
                  dragInteraction = null
              }
              onDragStopped(DragStopped(Velocity.Zero, isIndirectPointerEvent = false))
          }

          fun disposeInteractionSource() {
              dragInteraction?.let { interaction ->
                  interactionSource?.tryEmit(DragInteraction.Cancel(interaction))
                  dragInteraction = null
              }
          }

          fun update(
              canDrag: (PointerType) -> Boolean = this.canDrag,
              enabled: Boolean = this.enabled,
              interactionSource: MutableInteractionSource? = this.interactionSource,
              orientation: Orientation? = this.orientation,
              shouldResetPointerInputHandling: Boolean = false,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-662-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 662
    endLine: 696
    sha256: 1acbd672ce55aa89f652edaaca5d2ea8050791f1c8f477111497f153ed663f48
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              var resetPointerInputHandling = shouldResetPointerInputHandling

              this.canDrag = canDrag
              if (this.enabled != enabled) {
                  this.enabled = enabled
                  if (!enabled) {
                      resetGestureNodes()
                      disposeInteractionSource()
                      indirectPointerInputDragCycleDetector = null
                  }
                  resetPointerInputHandling = true
              }
              if (this.interactionSource != interactionSource) {
                  disposeInteractionSource()
                  this.interactionSource = interactionSource
              }

              if (this.orientation != orientation) {
                  this.orientation = orientation
                  resetPointerInputHandling = true
              }

              if (resetPointerInputHandling) {
                  if (isListeningForPointerInputEvents) resetDragDetectionState()
                  indirectPointerInputDragCycleDetector?.resetDragDetectionState()
              }
          }

          private fun processRawPointerEvent(pointerEvent: PointerEvent, pass: PointerEventPass) {
              if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  if (pass == PointerEventPass.Main) preProcessVelocity(pointerEvent)
              }
              when (
                  val state = requireNotNull(currentDragState) { "currentDragState should not be null" }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-697-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 697
    endLine: 731
    sha256: a8995819223275842e80cf6fe7cad105c54c479da1ea078289f230c29456fecf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ) {
                  is DragDetectionState.AwaitDown -> processInitialDownState(pointerEvent, pass, state)
                  is DragDetectionState.AwaitTouchSlop -> processAwaitTouchSlop(pointerEvent, pass, state)
                  is DragDetectionState.AwaitGesturePickup ->
                      processAwaitGesturePickup(pointerEvent, pass, state)
                  is DragDetectionState.Dragging -> processDraggingState(pointerEvent, pass, state)
              }
              if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  if (pass == PointerEventPass.Main) postProcessVelocity(pointerEvent)
              }
          }

          private fun preProcessVelocity(pointerEvent: PointerEvent) {
              var trackers = velocityTrackerMulti
              if (trackers == null) {
                  trackers = LongSparseArray()
                  velocityTrackerMulti = trackers
              }
              if (trackers.isEmpty()) {
                  // No pointer is being tracked yet, so this is the start of a new gesture and the
                  // offset accumulated during the previous one is no longer relevant.
                  resetRootOffset()
              }
              pointerEvent.changes.fastForEach {
                  if (trackers[it.id.value] == null) {
                      trackers.append(it.id.value, VelocityTracker())
                  }
              }

              if (ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                  updateRootOffset()
              }
              pointerEvent.changes.fastForEach {
                  trackers[it.id.value]!!.addPointerInputChange(it, rootOffset)
              }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 71
    endLine: 105
    sha256: 90a725c5c4dda2e8486954595ebf6eb8e03e873c09c868b5960fe0af61779ea0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.platform.LocalViewConfiguration
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.Velocity
      import androidx.compose.ui.util.fastAll
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastFirstOrNull
      import androidx.compose.ui.util.fastForEach
      import kotlin.coroutines.cancellation.CancellationException
      import kotlin.math.PI
      import kotlin.math.absoluteValue
      import kotlin.math.atan2
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.channels.Channel
      import kotlinx.coroutines.coroutineScope
      import kotlinx.coroutines.isActive
      import kotlinx.coroutines.launch

      /**
       * State of [draggable]. Allows for a granular control of how deltas are consumed by the user as
       * well as to write custom drag methods using [drag] suspend function.
       */
      @JvmDefaultWithCompatibility
      public interface DraggableState {
          /**
           * Call this function to take control of drag logic.
           *
           * All actions that change the logical drag position must be performed within a [drag] block
           * (even if they don't call any other methods on this object) in order to guarantee that mutual
           * exclusion is enforced.
           *
           * If [drag] is called from elsewhere with the [dragPriority] higher or equal to ongoing drag,
           * ongoing drag will be canceled.
           *
           * @param dragPriority of the drag operation
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-732-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 732
    endLine: 766
    sha256: 986af67dd5536f9c94ab0a3155fb901d7aa2a9d21b47a0c7048ea27d9cfd306b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Accumulates into [rootOffset] how much the root moved on screen since the previous pointer
           * event.
           *
           * Positions of a [PointerInputChange] are expressed relative to the root, so whenever the root
           * itself moves on screen (e.g. the hosting `View` is translated), a pointer that physically
           * stayed in place reports a different position. Adding [rootOffset] to those positions cancels
           * out that movement, keeping the data fed to the velocity trackers in a stable coordinate
           * space.
           */
          private fun updateRootOffset() {
              val currentRootPositionOnScreen =
                  requireLayoutCoordinates().findRootCoordinates().positionOnScreen()
              if (
                  previousRootPositionOnScreen != Offset.Unspecified &&
                      currentRootPositionOnScreen != previousRootPositionOnScreen
              ) {
                  rootOffset += currentRootPositionOnScreen - previousRootPositionOnScreen
              }
              previousRootPositionOnScreen = currentRootPositionOnScreen
          }

          private fun resetRootOffset() {
              rootOffset = Offset.Zero
              previousRootPositionOnScreen = Offset.Unspecified
          }

          private fun postProcessVelocity(pointerEvent: PointerEvent) {
              pointerEvent.changes.fastForEach {
                  if (it.changedToUpIgnoreConsumed()) {
                      velocityTrackerMulti?.remove(it.id.value)
                  }
              }
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-767-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 767
    endLine: 801
    sha256: 431ef4ad22444c8dd7df2872409d32a467b48f8eb2a788812827b0d23246222a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          private fun resetGestureNodes() {
              indirectTouchGestureNode?.let { undelegate(it) }
              pointerInputGestureNode?.let { undelegate(it) }
              indirectTouchGestureNode = null
              pointerInputGestureNode = null
          }

          private fun resetDragDetectionState() {
              moveToAwaitDownState()
              if (isListeningForEvents) sendDragCancelled()
              if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                  velocityTrackerMulti = null
              } else {
                  velocityTracker = null
              }
          }

          private fun moveToAwaitTouchSlopState(
              initialDown: PointerInputChange,
              pointerId: PointerId,
              initialTouchSlopPositionChange: Offset = Offset.Zero,
              verifyConsumptionInFinalPass: Boolean = false,
          ) {
              currentDragState = awaitTouchSlopState.apply {
                  this.initialDown = initialDown
                  this.pointerId = pointerId
                  if (touchSlopDetector == null) {
                      touchSlopDetector = TouchSlopDetector(orientation)
                  } else {
                      touchSlopDetector?.orientation = orientation
                      touchSlopDetector?.reset(initialTouchSlopPositionChange)
                  }
                  this.verifyConsumptionInFinalPass = verifyConsumptionInFinalPass
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-802-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 802
    endLine: 836
    sha256: c4752585de33593a6ae70d786384988dd6c4ed8a03fcd7fc6673d858f21bd5d7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          private fun moveToDraggingState(pointerId: PointerId, hasStartedDragImmediately: Boolean) {
              currentDragState = draggingState.apply {
                  this.pointerId = pointerId
                  this.consumedOnInitial = false
                  this.hasStartedDragImmediately = hasStartedDragImmediately
              }
          }

          private fun moveToAwaitDownState() {
              dragAccumulator = Offset.Zero
              currentDragState = awaitDownState.apply {
                  awaitTouchSlop = DragDetectionState.AwaitDown.AwaitTouchSlop.NotInitialized
                  consumedOnInitial = false
                  hasSeenInitialEvent = false
              }
          }

          private fun moveToAwaitGesturePickupState(
              initialDown: PointerInputChange,
              pointerId: PointerId,
              touchSlopDetector: TouchSlopDetector,
          ) {
              currentDragState = awaitGesturePickupState.apply {
                  this.initialDown = initialDown
                  this.pointerId = pointerId
                  this.touchSlopDetector = touchSlopDetector.also { it.reset() }
              }
          }

          private fun processInitialDownState(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-837-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 837
    endLine: 871
    sha256: 91c909ec64d5586b2589443e8f06b6329b32b1c9e92ce1ddd217f29d7f617492
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              state: DragDetectionState.AwaitDown,
          ) {
              /** Wait for a down event in any pass. */
              if (pointerEvent.changes.isEmpty()) return
              // We use isAnyChangedToDown instead of isChangedToDown to handle cases where a
              // persistent pointer (like a trackpad hover pointer) co-exists with a new touch
              // pointer in the same event. If we used isChangedToDown (which requires all
              // pointers to change to down), the touch gesture would be ignored because the
              // hover pointer didn't change to down.
              if (!pointerEvent.isAnyChangedToDown(requireUnconsumed = false)) return
              val firstDown =
                  pointerEvent.changes.fastFirstOrNull { it.changedToDownIgnoreConsumed() } ?: return
              val awaitTouchSlop =
                  when (state.awaitTouchSlop) {
                      DragDetectionState.AwaitDown.AwaitTouchSlop.NotInitialized -> {
                          if (!startDragImmediately()) {
                              DragDetectionState.AwaitDown.AwaitTouchSlop.Yes
                          } else {
                              DragDetectionState.AwaitDown.AwaitTouchSlop.No
                          }
                      }

                      else -> state.awaitTouchSlop
                  }

              // update the touch slop in the current state
              state.awaitTouchSlop = awaitTouchSlop

              if (pass == PointerEventPass.Initial) {
                  // If we shouldn't await touch slop, we consume the event immediately.
                  if (awaitTouchSlop == DragDetectionState.AwaitDown.AwaitTouchSlop.No) {
                      firstDown.consume()

                      // Change state properties so we dispatch only later, this aligns with the previous
                      // behavior where dispatching only happened during the main pass
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-872-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 872
    endLine: 906
    sha256: c4da4345237de4b627dafd355d34eae81a8a0ee150a5e47e8f5048ef08de9a14
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      state.consumedOnInitial = true
                  }
                  // Draggable should start reporting that is waiting for touch slop as soon as it gets
                  // the first down event.
                  state.hasSeenInitialEvent = true
              }

              if (pass == PointerEventPass.Main) {
                  /**
                   * At this point we detected a Down event, if we should await the slop we move to the
                   * next state. If we shouldn't await the slop and we already consumed the event we
                   * dispatch the drag start events and start the dragging state.
                   */
                  if (awaitTouchSlop == DragDetectionState.AwaitDown.AwaitTouchSlop.Yes) {
                      moveToAwaitTouchSlopState(firstDown, firstDown.id)
                  } else if (state.consumedOnInitial) {
                      sendDragStart(firstDown, firstDown, Offset.Zero)
                      sendDragEvent(firstDown, Offset.Zero)
                      moveToDraggingState(firstDown.id, hasStartedDragImmediately = true)
                  }
              }
          }

          private fun processAwaitTouchSlop(
              pointerEvent: PointerEvent,
              pass: PointerEventPass,
              state: DragDetectionState.AwaitTouchSlop,
          ) {
              /** Slop detection only cares about the main and final passes */
              if (pass == PointerEventPass.Initial) return
              val eventFromPointerId = pointerEvent.changes.fastFirstOrNull { it.id == state.pointerId }

              /**
               * We lost this pointer, try to replace it. This is to cover the case where multiple
               * pointers were down, but the original one we tracked (state.pointerId) is no longer down,
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-907-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 907
    endLine: 941
    sha256: 1972cc4d352af2ad2faf0f5633bbfecf704378b53ac4d25cfbcfb39ce71eb7a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * try to move tracking to a different pointer
               */
              val dragEvent =
                  if (eventFromPointerId == null) {
                      val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                      if (otherDown == null) {
                          // There are no other pointers down, reset the state
                          moveToAwaitDownState()
                          return
                      } else {
                          // a new pointer was found, update the current state.
                          state.pointerId = otherDown.id
                      }
                      otherDown
                  } else {
                      eventFromPointerId
                  }

              /**
               * Slop detection routines happens during the Main pass. Do we have unconsumed events for
               * this pointer?
               */
              if (pass == PointerEventPass.Main) {
                  if (!dragEvent.isConsumed) {
                      if (dragEvent.changedToUpIgnoreConsumed()) {
                          /** The pointer lifted, look for another pointer */
                          val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                          if (otherDown == null) {
                              // There are no other pointers down, reset the state
                              moveToAwaitDownState()
                          } else {
                              // a new pointer was found, update the current state.
                              state.pointerId = otherDown.id
                          }
                      } else {
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-942-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 942
    endLine: 976
    sha256: f4d1690a4bce3889fbb96f4874e8049f29e292943918f68d19c66f4aadac09fb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          // this is a regular event (MOVE)
                          val touchSlop =
                              currentValueOf(LocalViewConfiguration).pointerSlop(dragEvent.type)

                          // add data to the slop detector
                          val postSlopOffset =
                              requireTouchSlopDetector()
                                  .getPostSlopOffset(dragEvent.positionChangeIgnoreConsumed(), touchSlop)
                          /**
                           * Here we use the [gestureNode] and [GestureConnection] APIs to make a decision
                           * about this gesture. At this point we have all the triggers to start
                           * recognizing a gesture in this current
                           * [androidx.compose.foundation.gestures.DragGestureNode]. This is the moment
                           * that touch slop is recognized here in this node. During this time, before we
                           * start consuming drag events we will decide to start recognizing in this node
                           * or to allow the parent to take over. See below for chosen criteria.
                           */
                          if (postSlopOffset.isSpecified) {
                              val delta = dragEvent.positionChange()

                              dragAccumulator += delta

                              /**
                               * Represents the angle of the start of this gesture (the user intention).
                               * For simplicity this uses the absolute gesture coordinates meaning an
                               * angle between 0 and 90 will be used.
                               */
                              val gestureAngle =
                                  atan2(
                                      x = dragAccumulator.x.absoluteValue,
                                      y = dragAccumulator.y.absoluteValue,
                                  ) * (180.0f / PI).toFloat()

                              /**
                               * Represents the alignment of this gesture's accumulated delta until now
  - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-977-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt
    startLine: 977
    endLine: 1011
    sha256: 7dfa6f42ba922adf2721aa867868465461f73bdb0a356a9983c1b7d8dc33101f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                               * and this node's orientation.
                               *
                               * 2D children (orientation is null) have higher priority
                               */
                              val isDragAngleAlignedWithSelfOrientation =
                                  if (orientation == null) {
                                      true
                                  } else {
                                      isDragAngleAlignedWithOrientation(orientation!!, gestureAngle)
                                  }

                              /**
                               * The alignment of the parent follows the criteria:
                               * 1) The parent is a drag gesture component (DragGestureConnection)
                               * 2) The parent is in a waiting state.
                               * 3) The parent has an angle aligment with the offsets accumulated so far.
                               */
                              var hasDragAngleAlignedWithParentOrientation = false
                              traverseParentDraggableGestures { coordinator ->
                                  val isParentWaiting = coordinator.gestureState == GestureState.Waiting
                                  val isDragAngleAlignedWithParentOrientation =
                                      if (coordinator.orientation == null) {
                                          false
                                      } else {
                                          isDragAngleAlignedWithOrientation(
                                              coordinator.orientation!!,
                                              gestureAngle,
                                          )
                                      }
                                  hasDragAngleAlignedWithParentOrientation =
                                      hasDragAngleAlignedWithParentOrientation ||
                                          isParentWaiting && isDragAngleAlignedWithParentOrientation
                                  !hasDragAngleAlignedWithParentOrientation
                              }
compose:
  id: live-androidx-foundation-foundation-foundation-gestures-draggable
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.gestures
  sections:
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1012
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1012–1046)
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1012-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1047
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1047–1081)
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1047-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-106
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
        - androidx.compose.foundation.gestures.DragScope
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1082
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1082–1116)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1082-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1117
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1117–1151)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1117-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1152
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1152–1186)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1152-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1187
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1187–1221)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1187-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1222
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1222–1256)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1222-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1257
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1257–1291)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1257-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1292
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1292–1326)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
        - androidx.compose.foundation.gestures.DragScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1292-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1327
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1327–1361)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1327-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1362
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1362–1396)
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1362-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1397
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1397–1431)
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1397-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-141
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
        - androidx.compose.foundation.gestures.rememberDraggableState
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1432
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1432–1465)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1432-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1466
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1466–1500)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1466-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1501
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 1501–1506)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1501-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-176
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 176–206)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-207
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 207–241)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-207-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-242
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 242–276)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-242-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-277
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 277–311)
      aliases:
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-277-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-312
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 312–346)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-312-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-347
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 347–381)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-347-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-36
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-382
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 382–416)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-382-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-417
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 417–451)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-417-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-452
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 452–486)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-452-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-487
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 487–521)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-487-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-522
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 522–556)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-522-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-557
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 557–591)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-557-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-592
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 592–626)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-592-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-627
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 627–661)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-627-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-662
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 662–696)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-662-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-697
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 697–731)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-697-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-71
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.gestures.DraggableState
        - androidx.compose.foundation.gestures.draggable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-732
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 732–766)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-732-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-767
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 767–801)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-767-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-802
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 802–836)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-802-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-837
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 837–871)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-837-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-872
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 872–906)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-872-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-907
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 907–941)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-907-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-942
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 942–976)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-942-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-draggable-lines-977
      title: androidx.compose.foundation.gestures Draggable.kt source (lines 977–1011)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-draggable-lines-977-source
      relatedIds: []
---

# androidx.compose.foundation.gestures Draggable.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt

## androidx.compose.foundation.gestures Draggable.kt source (lines 1–35)

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

package androidx.compose.foundation.gestures

import androidx.annotation.FloatRange
import androidx.collection.LongSparseArray
import androidx.compose.foundation.ComposeFoundationFlags
import androidx.compose.foundation.ComposeFoundationFlags.isDraggableInitialPassConsumptionFixEnabled
import androidx.compose.foundation.ComposeFoundationFlags.isDraggableZeroDeltaConsumptionEnabled
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.GestureConnection
import androidx.compose.foundation.GestureState
import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.MutatorMutex
import androidx.compose.foundation.gestureNode
import androidx.compose.foundation.gestures.DragEvent.DragCancelled
import androidx.compose.foundation.gestures.DragEvent.DragDelta
import androidx.compose.foundation.gestures.DragEvent.DragStarted
import androidx.compose.foundation.gestures.DragEvent.DragStopped
import androidx.compose.foundation.interaction.DragInteraction
import androidx.compose.foundation.interaction.MutableInteractionSource

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1012–1046)

                        /**
                         * We will only yield to any parent if the current node has less priority
                         * based on the angle of the gesture.
                         */
                        if (
                            !isDragAngleAlignedWithSelfOrientation &&
                                hasDragAngleAlignedWithParentOrientation
                        ) {
                            state.verifyConsumptionInFinalPass = true
                        } else {
                            dragEvent.consume()
                            sendDragStart(state.initialDown!!, dragEvent, postSlopOffset)
                            sendDragEvent(dragEvent, postSlopOffset)
                            moveToDraggingState(dragEvent.id, hasStartedDragImmediately = false)
                        }
                    } else {
                        state.verifyConsumptionInFinalPass = true
                        // touch slop was not crossed, accumulate pre slop deltas
                        dragAccumulator += dragEvent.positionChangeIgnoreConsumed()
                    }
                }
            } else {
                // This draggable "lost" the event as it was consumed by someone else, enter the
                // gesture pickup state if the feature is enabled.
                // Someone consumed this gesture, move this to the await pickup state.
                moveToAwaitGesturePickupState(
                    requireNotNull(state.initialDown) {
                        "AwaitTouchSlop.initialDown was not initialized"
                    },
                    state.pointerId,
                    requireNotNull(touchSlopDetector) {
                        "AwaitTouchSlop.touchSlopDetector was not initialized"
                    },
                )
            }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1012-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1047–1081)

        }

        /**
         * This checks 2 cases: 1) A parent consumed in the main pass and this child can only see
         * that consumption during the final pass. 2) The parent actually consumed during the final
         * pass.
         */
        if (pass == PointerEventPass.Final && state.verifyConsumptionInFinalPass) {
            if (dragEvent.isConsumed) {
                // This draggable "lost" the event as it was consumed by someone else, enter the
                // gesture pickup state if the feature is enabled.
                // Someone consumed this gesture, move this to the await pickup state.
                moveToAwaitGesturePickupState(
                    requireNotNull(state.initialDown) {
                        "AwaitTouchSlop.initialDown was not initialized"
                    },
                    state.pointerId,
                    requireNotNull(touchSlopDetector) {
                        "AwaitTouchSlop.touchSlopDetector was not initialized"
                    },
                )
            } else {
                /**
                 * Self and nobody consumed dragEvent. We will only get here if self didn't consume
                 * in the main pass OR if self wasn't interested during the main pass. In this case
                 * we remain in the awaitTouchSlop state and wait for more information (events).
                 */
                state.verifyConsumptionInFinalPass = false
            }
        }
    }

    private fun processAwaitGesturePickup(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1047-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 106–140)

     * @param block to perform drag in
     */
    public suspend fun drag(
        dragPriority: MutatePriority = MutatePriority.Default,
        block: suspend DragScope.() -> Unit,
    )

    /**
     * Dispatch drag delta in pixels avoiding all drag related priority mechanisms.
     *
     * **NOTE:** unlike [drag], dispatching any delta with this method will bypass scrolling of any
     * priority. This method will also ignore `reverseDirection` and other parameters set in
     * [draggable].
     *
     * This method is used internally for low level operations, allowing implementers of
     * [DraggableState] influence the consumption as suits them, e.g. introduce nested scrolling.
     * Manually dispatching delta via this method will likely result in a bad user experience, you
     * must prefer [drag] method over this one.
     *
     * @param delta amount of scroll dispatched in the nested drag process
     */
    public fun dispatchRawDelta(delta: Float)
}

/** Scope used for suspending drag blocks */
public interface DragScope {
    /** Attempts to drag by [pixels] px. */
    public fun dragBy(pixels: Float)
}

/**
 * Default implementation of [DraggableState] interface that allows to pass a simple action that
 * will be invoked when the drag occurs.
 *
 * This is the simplest way to set up a [draggable] modifier. When constructing this

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1082–1116)

        state: DragDetectionState.AwaitGesturePickup,
    ) {
        /**
         * Drag pickup only happens during the final pass so we're sure nobody else was interested
         * in this gesture.
         */
        if (pass != PointerEventPass.Final) return
        val hasUnconsumedDrag = pointerEvent.changes.fastAll { !it.isConsumed }
        val hasDownPointers = pointerEvent.changes.fastAny { it.pressed }
        // all pointers are up, reset
        if (!hasDownPointers || pointerEvent.changes.isEmpty()) {
            moveToAwaitDownState()
        } else if (hasUnconsumedDrag) {
            // has pointers down with unconsumed events, a chance to pick up this gesture,
            // move to the touch slop detection phase
            val initialPositionChange =
                pointerEvent.changes.first().position - state.initialDown!!.position

            // await touch slop again, using the initial down as starting point.
            // For most cases this should return immediately since we probably moved
            // far enough from the initial down event.
            moveToAwaitTouchSlopState(
                requireNotNull(state.initialDown) {
                    "AwaitGesturePickup.initialDown was not initialized."
                },
                state.pointerId,
                initialPositionChange,
            )
        }
    }

    private fun processDraggingState(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        state: DragDetectionState.Dragging,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1082-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1117–1151)

    ) {
        if (isDraggableInitialPassConsumptionFixEnabled) {
            if (pass == PointerEventPass.Initial && state.hasStartedDragImmediately) {
                val pointer = state.pointerId
                val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
                if (!dragEvent.isConsumed) {
                    dragEvent.consume()
                    state.consumedOnInitial = true
                }
                return
            }

            if (pass != PointerEventPass.Main) return

            val pointer = state.pointerId
            val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
            val wasConsumedOnInitial = state.consumedOnInitial
            val isConsumedByOther = dragEvent.isConsumed && !wasConsumedOnInitial
            state.consumedOnInitial = false
            if (dragEvent.changedToUpIgnoreConsumed()) {
                val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                if (otherDown == null) {
                    // This is the last "up"
                    if (!isConsumedByOther && dragEvent.changedToUpIgnoreConsumed()) {
                        sendDragStopped(dragEvent)
                    } else {
                        sendDragCancelled()
                    }
                    moveToAwaitDownState()
                } else {
                    state.pointerId = otherDown.id
                }
            } else {
                if (isConsumedByOther) {
                    sendDragCancelled()

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1117-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1152–1186)

                } else {
                    if (isDraggableZeroDeltaConsumptionEnabled) {
                        val positionChange =
                            if (wasConsumedOnInitial) dragEvent.positionChangeIgnoreConsumed()
                            else dragEvent.positionChange()
                        sendDragEvent(dragEvent, positionChange)
                        dragEvent.consume()
                    } else {
                        val positionChange = dragEvent.positionChangeIgnoreConsumed()

                        /**
                         * During the gesture pickup we can pickup events at any direction so
                         * disable the orientation lock.
                         */
                        val motionChange = positionChange.getDistance()
                        if (motionChange != 0.0f) {
                            val effectivePositionChange =
                                if (wasConsumedOnInitial) dragEvent.positionChangeIgnoreConsumed()
                                else dragEvent.positionChange()
                            sendDragEvent(dragEvent, effectivePositionChange)
                            dragEvent.consume()
                        }
                    }
                }
            }
        } else {
            if (pass != PointerEventPass.Main) return

            val pointer = state.pointerId
            val dragEvent = pointerEvent.changes.fastFirstOrNull { it.id == pointer } ?: return
            if (dragEvent.changedToUpIgnoreConsumed()) {
                val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                if (otherDown == null) {
                    // This is the last "up"
                    if (!dragEvent.isConsumed && dragEvent.changedToUpIgnoreConsumed()) {

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1152-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1187–1221)

                        sendDragStopped(dragEvent)
                    } else {
                        sendDragCancelled()
                    }
                    moveToAwaitDownState()
                } else {
                    state.pointerId = otherDown.id
                }
            } else {
                if (dragEvent.isConsumed) {
                    sendDragCancelled()
                } else {
                    if (isDraggableZeroDeltaConsumptionEnabled) {
                        val positionChange = dragEvent.positionChange()
                        sendDragEvent(dragEvent, positionChange)
                        dragEvent.consume()
                    } else {
                        val positionChange = dragEvent.positionChangeIgnoreConsumed()

                        /**
                         * During the gesture pickup we can pickup events at any direction so
                         * disable the orientation lock.
                         */
                        val motionChange = positionChange.getDistance()
                        if (motionChange != 0.0f) {
                            val positionChange = dragEvent.positionChange()
                            sendDragEvent(dragEvent, positionChange)
                            dragEvent.consume()
                        }
                    }
                }
            }
        }
    }


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1187-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1222–1256)

    private fun sendDragStart(
        down: PointerInputChange,
        slopTriggerChange: PointerInputChange,
        overSlopOffset: Offset,
    ) {
        if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            if (velocityTracker == null) velocityTracker = VelocityTracker()
            requireVelocityTracker().addPointerInputChange(down)
        }
        val dragStartedOffset = slopTriggerChange.position - overSlopOffset
        if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
            // the drag start event offset is the down event + touch slop value
            // or in this case the event that triggered the touch slop minus
            // the post slop offset
            nodeOffset = Offset.Zero // restart node offset
        } else if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            // Otherwise the root offset is tracked for the whole gesture, starting at the initial
            // down, so resetting it here would discard the movement observed before touch slop
            // was crossed.
            resetRootOffset()
        }
        if (canDrag(down.type)) {
            if (!isListeningForEvents) {
                if (channel == null) {
                    channel = Channel(capacity = Channel.UNLIMITED)
                }
                startListeningForEvents()
            }
            if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                previousPositionOnScreen = requireLayoutCoordinates().positionOnScreen()
            } else if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                previousRootPositionOnScreen =
                    requireLayoutCoordinates().findRootCoordinates().positionOnScreen()
            }
            requireChannel().trySend(DragStarted(dragStartedOffset))

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1222-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1257–1291)

        }
    }

    private fun sendDragEvent(change: PointerInputChange, dragAmount: Offset) {
        dragAccumulator += dragAmount
        if (!ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
                val currentPositionOnScreen = node.requireLayoutCoordinates().positionOnScreen()
                // container changed positions
                if (
                    previousPositionOnScreen != Offset.Unspecified &&
                        currentPositionOnScreen != previousPositionOnScreen
                ) {
                    val delta = currentPositionOnScreen - previousPositionOnScreen
                    nodeOffset += delta
                }
                previousPositionOnScreen = currentPositionOnScreen
                requireVelocityTracker().addPointerInputChange(event = change, offset = nodeOffset)
            } else {
                updateRootOffset()
                requireVelocityTracker().addPointerInputChange(change, rootOffset)
            }
        }
        requireChannel().trySend(DragDelta(dragAmount, false))
    }

    private fun sendDragStopped(change: PointerInputChange) {
        val maximumVelocity = currentValueOf(LocalViewConfiguration).maximumFlingVelocity
        val velocity =
            if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
                velocityTrackerMulti
                    ?.get(change.id.value)
                    ?.calculateVelocity(Velocity(maximumVelocity, maximumVelocity)) ?: Velocity.Zero
            } else {
                requireVelocityTracker().addPointerInputChange(change)

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1257-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1292–1326)

                requireVelocityTracker()
                    .calculateVelocity(Velocity(maximumVelocity, maximumVelocity))
                    .also { requireVelocityTracker().resetTracking() }
            }
        requireChannel().trySend(DragStopped(velocity.toValidVelocity(), false))
        isListeningForPointerInputEvents = false
    }

    private fun sendDragCancelled() {
        requireChannel().trySend(DragCancelled)
    }

    fun onDragEvent(event: DragEvent) {
        if (event is DragStarted && !isListeningForEvents) {
            isListeningForEvents = true
            startListeningForEvents()
        }
        requireChannel().trySend(event)
    }
}

private class DefaultDraggableState(val onDelta: (Float) -> Unit) : DraggableState {

    private val dragScope: DragScope =
        object : DragScope {
            override fun dragBy(pixels: Float): Unit = onDelta(pixels)
        }

    private val scrollMutex = MutatorMutex()

    override suspend fun drag(
        dragPriority: MutatePriority,
        block: suspend DragScope.() -> Unit,
    ): Unit = coroutineScope { scrollMutex.mutateWith(dragScope, dragPriority, block) }


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1292-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1327–1361)

    override fun dispatchRawDelta(delta: Float) {
        return onDelta(delta)
    }
}

internal sealed class DragEvent {
    class DragStarted(val startPoint: Offset) : DragEvent()

    class DragStopped(val velocity: Velocity, val isIndirectPointerEvent: Boolean) : DragEvent()

    object DragCancelled : DragEvent()

    class DragDelta(val delta: Offset, val isIndirectPointerEvent: Boolean) : DragEvent()
}

internal fun Offset.toFloat(orientation: Orientation) =
    if (orientation == Orientation.Vertical) this.y else this.x

private fun Velocity.toFloat(orientation: Orientation) =
    if (orientation == Orientation.Vertical) this.y else this.x

internal fun Velocity.toValidVelocity() =
    Velocity(if (this.x.isNaN()) 0f else this.x, if (this.y.isNaN()) 0f else this.y)

private val NoOpOnDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit = {}
private val NoOpOnDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit = {}

private sealed class DragDetectionState {
    /**
     * Starter state for any drag gesture cycle. At this state we're waiting for a Down event to
     * indicate that a drag gesture may start. Since drag gesture start at the initial pass we have
     * the option to indicate if we consumed the event during the initial pass using
     * [consumedOnInitial]. We also save the [awaitTouchSlop] between passes so we don't call the
     * [DragGestureNode.startDragImmediately] as often.
     */

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1327-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1362–1396)

    class AwaitDown(
        var awaitTouchSlop: AwaitTouchSlop = AwaitTouchSlop.NotInitialized,
        var consumedOnInitial: Boolean = false,
        var hasSeenInitialEvent: Boolean = false,
    ) : DragDetectionState() {

        enum class AwaitTouchSlop {
            Yes,
            No,
            NotInitialized,
        }
    }

    /**
     * If drag should wait for touch slop, after the initial down recognition we move to this state.
     * Here we will collect drag events until touch slop is crossed.
     */
    class AwaitTouchSlop(
        var initialDown: PointerInputChange? = null,
        var pointerId: PointerId = PointerId(Long.MAX_VALUE),
        var verifyConsumptionInFinalPass: Boolean = false,
    ) : DragDetectionState()

    /**
     * Alternative state that implements the gesture pick up feature. If a draggable loses an event
     * because someone else consumed it, it can still pick it up later if the consumer "gives up" on
     * that gesture. Once a gesture is lost the draggable will pass on to this state until all
     * fingers are up.
     */
    class AwaitGesturePickup(
        var initialDown: PointerInputChange? = null,
        var pointerId: PointerId = PointerId(Long.MAX_VALUE),
        var touchSlopDetector: TouchSlopDetector? = null,
    ) : DragDetectionState()


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1362-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1397–1431)

    /** State where dragging is happening. */
    class Dragging(
        var pointerId: PointerId = PointerId(Long.MAX_VALUE),
        var consumedOnInitial: Boolean = false,
        var hasStartedDragImmediately: Boolean = false,
    ) : DragDetectionState()
}

/** A specialized [GestureConnection] to allow high level coordination between drag gestures. */
internal interface DraggableGestureConnection : GestureConnection {

    /**
     * The orientation on which this connection recognizes events. If null this means this is a
     * 2-dimensional draggable.
     */
    val orientation: Orientation?
}

internal fun DelegatableNode.traverseParentDraggableGestures(
    block: (DraggableGestureConnection) -> Boolean
) {
    traverseAncestorGestures {
        if (it is DraggableGestureConnection) {
            block(it)
        } else {
            true
        }
    }
}

/**
 * We compare the angle's gesture [dragAngle] with the angle represented here to show that a node is
 * aligned with a given gesture. We also traverse the tree and compare the angle of aligment of the
 * parents when run against this angle criteria. An angle is aligned when it is with an angle range
 * for [orientation]. This allows for multi-orientation dragging hierarchies to coordinate and let

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1397-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 141–175)

 * [DraggableState], you must provide a [onDelta] lambda, which will be invoked whenever drag
 * happens (by gesture input or a custom [DraggableState.drag] call) with the delta in pixels.
 *
 * If you are creating [DraggableState] in composition, consider using [rememberDraggableState].
 *
 * @param onDelta callback invoked when drag occurs. The callback receives the delta in pixels.
 */
public fun DraggableState(onDelta: (Float) -> Unit): DraggableState = DefaultDraggableState(onDelta)

/**
 * Create and remember default implementation of [DraggableState] interface that allows to pass a
 * simple action that will be invoked when the drag occurs.
 *
 * This is the simplest way to set up a [draggable] modifier. When constructing this
 * [DraggableState], you must provide a [onDelta] lambda, which will be invoked whenever drag
 * happens (by gesture input or a custom [DraggableState.drag] call) with the delta in pixels.
 *
 * @param onDelta callback invoked when drag occurs. The callback receives the delta in pixels.
 */
@Composable
public fun rememberDraggableState(onDelta: (Float) -> Unit): DraggableState {
    val onDeltaState = rememberUpdatedState(onDelta)
    return remember { DraggableState { onDeltaState.value.invoke(it) } }
}

/**
 * Configure touch dragging for the UI element in a single [Orientation]. The drag distance reported
 * to [DraggableState], allowing users to react on the drag delta and update their state.
 *
 * The common usecase for this component is when you need to be able to drag something inside the
 * component on the screen and represent this state via one float value
 *
 * If you need to control the whole dragging flow, consider using [pointerInput] instead with the
 * helper functions like [detectDragGestures].
 *

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1432–1465)

 * the component that matches the direction the user is dragging to process the gesture, even if the
 * user has crossed touch slop in both directions.
 *
 * The behavior will change from the regular hierarchical (pointer input) behavior when a node is
 * not aligned but one of its parent is. This means the gesture performed up until now will not
 * trigger the angle bound of the current node (is aligned with [orientation], but will trigger the
 * angle bound of one of its parents. Here are a few examples:
 *
 * Example 1: Gesture is mostly horizontal (the angle of the gesture is < 30). In the case where we
 * have a vertical detector as a parent and a horizontal detector as a child. The horizontal
 * detector is aligned because the angle of the gesture is smaller than [HorizontalAngleUpperBounds]
 * so the horizontal detector wins.
 *
 * Example 2: Gesture is mostly vertical (the angle of the gesture is > 30 and < 90). In the case
 * where we have a vertical detector as a parent and a horizontal detector as a child. The
 * horizontal detector is not aligned because the angle of the gesture is larger than
 * [HorizontalAngleUpperBounds]. The vertical detector is aligned because the gesture angle is
 * smaller than [VerticalAngleUpperBounds] and larger than [HorizontalAngleUpperBounds]. The
 * vertical takes over.
 *
 * Example 3: In the case where we have a parent vertical detector and a 2D child. The 2D child will
 * be aligned since it cares about both angles.
 *
 * Example 4: For cases where we have detectors on the same direction we will never find a case
 * where the inner one is not aligned whilst the outer one is aligned so the previous behavior
 * remains.
 *
 * Example 5: When the parent is a horizontal detector and the child is vertical. Whichever crosses
 * the touch slop first wins: If the parent crosses the touch slop first, the child loses the
 * gesture if the child crosses first, the child will be aligned in the gesture so it wins. Note
 * that if the gesture is fully horizontal, it means the parent will cross the touch slop first.
 */
private fun isDragAngleAlignedWithOrientation(
    orientation: Orientation,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1432-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1466–1500)

    @FloatRange(from = 0.0, to = 90.0) dragAngle: Float,
): Boolean =
    if (orientation == Orientation.Horizontal) {
        dragAngle <= HorizontalAngleUpperBounds
    } else {
        dragAngle > HorizontalAngleUpperBounds && dragAngle <= VerticalAngleUpperBounds
    }

private const val HorizontalAngleUpperBounds = 30
private const val VerticalAngleUpperBounds = 90

/**
 * Returns true if any pointer in the event changed to down, provided there are no other active
 * pressed pointers that did not change to down.
 *
 * This is used instead of [PointerEvent.isChangedToDown] to allow touch gestures to start even when
 * a persistent non-pressed pointer (like a trackpad hover pointer) is present in the same event,
 * while still ignoring new down events if there is already an active touch gesture.
 */
internal fun PointerEvent.isAnyChangedToDown(
    requireUnconsumed: Boolean,
    onlyPrimaryMouseButton: Boolean = firstDownRefersToPrimaryMouseButtonOnly(),
): Boolean {
    val onlyPrimaryButtonCausesDown =
        onlyPrimaryMouseButton && changes.fastAll { it.type == PointerType.Mouse }
    if (onlyPrimaryButtonCausesDown && !buttons.isPrimaryPressed) return false

    // Check if there are any other pressed pointers that did not change to down.
    // If so, we ignore this event to match the old behavior where all pressed pointers
    // must have changed to down (i.e. we don't start on ACTION_POINTER_DOWN if another
    // pointer is already active).
    val hasOtherActivePressedPointer = changes.fastAny {
        it.pressed &&
            !(if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed())
    }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1466-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 1501–1506)

    if (hasOtherActivePressedPointer) return false
    return changes.fastAny {
        if (requireUnconsumed) it.changedToDown() else it.changedToDownIgnoreConsumed()
    }
}


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-1501-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 176–206)

 * If you want to enable dragging in 2 dimensions, consider using [draggable2D].
 *
 * If you are implementing scroll/fling behavior, consider using [scrollable].
 *
 * @sample androidx.compose.foundation.samples.DraggableSample
 * @param state [DraggableState] state of the draggable. Defines how drag events will be interpreted
 *   by the user land logic.
 * @param orientation orientation of the drag
 * @param enabled whether or not drag is enabled
 * @param interactionSource [MutableInteractionSource] that will be used to emit
 *   [DragInteraction.Start] when this draggable is being dragged.
 * @param startDragImmediately when set to true, draggable will start dragging immediately and
 *   prevent other gesture detectors from reacting to "down" events (in order to block composed
 *   press-based gestures). This is intended to allow end users to "catch" an animating widget by
 *   pressing on it. It's useful to set it when value you're dragging is settling / animating.
 * @param onDragStarted callback that will be invoked when drag is about to start at the starting
 *   position, allowing user to suspend and perform preparation for drag, if desired. This suspend
 *   function is invoked with the draggable scope, allowing for async processing, if desired. Note
 *   that the scope used here is the one provided by the draggable node, for long running work that
 *   needs to outlast the modifier being in the composition you should use a scope that fits the
 *   lifecycle needed.
 * @param onDragStopped callback that will be invoked when drag is finished, allowing the user to
 *   react on velocity and process it. This suspend function is invoked with the draggable scope,
 *   allowing for async processing, if desired. Note that the scope used here is the one provided by
 *   the draggable node, for long running work that needs to outlast the modifier being in the
 *   composition you should use a scope that fits the lifecycle needed.
 * @param reverseDirection reverse the direction of the scroll, so top to bottom scroll will behave
 *   like bottom to top and left to right will behave like right to left.
 */
@Stable
public fun Modifier.draggable(

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 207–241)

    state: DraggableState,
    orientation: Orientation,
    enabled: Boolean = true,
    interactionSource: MutableInteractionSource? = null,
    startDragImmediately: Boolean = false,
    onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit = NoOpOnDragStarted,
    onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit = NoOpOnDragStopped,
    reverseDirection: Boolean = false,
): Modifier =
    this then
        DraggableElement(
            state = state,
            orientation = orientation,
            enabled = enabled,
            interactionSource = interactionSource,
            startDragImmediately = startDragImmediately,
            onDragStarted = onDragStarted,
            onDragStopped = onDragStopped,
            reverseDirection = reverseDirection,
        )

internal class DraggableElement(
    private val state: DraggableState,
    private val orientation: Orientation,
    private val enabled: Boolean,
    private val interactionSource: MutableInteractionSource?,
    private val startDragImmediately: Boolean,
    private val onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
    private val onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
    private val reverseDirection: Boolean,
) : ModifierNodeElement<DraggableNode>() {
    override fun create(): DraggableNode =
        DraggableNode(
            state,
            CanDrag,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-207-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 242–276)

            orientation,
            enabled,
            interactionSource,
            startDragImmediately,
            onDragStarted,
            onDragStopped,
            reverseDirection,
        )

    override fun update(node: DraggableNode) {
        node.update(
            state,
            CanDrag,
            orientation,
            enabled,
            interactionSource,
            startDragImmediately,
            onDragStarted,
            onDragStopped,
            reverseDirection,
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as DraggableElement

        if (state != other.state) return false
        if (orientation != other.orientation) return false
        if (enabled != other.enabled) return false
        if (interactionSource != other.interactionSource) return false
        if (startDragImmediately != other.startDragImmediately) return false

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-242-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 277–311)

        if (onDragStarted != other.onDragStarted) return false
        if (onDragStopped != other.onDragStopped) return false
        if (reverseDirection != other.reverseDirection) return false

        return true
    }

    override fun hashCode(): Int {
        var result = state.hashCode()
        result = 31 * result + orientation.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + (interactionSource?.hashCode() ?: 0)
        result = 31 * result + startDragImmediately.hashCode()
        result = 31 * result + onDragStarted.hashCode()
        result = 31 * result + onDragStopped.hashCode()
        result = 31 * result + reverseDirection.hashCode()
        return result
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "draggable"
        properties["orientation"] = orientation
        properties["enabled"] = enabled
        properties["reverseDirection"] = reverseDirection
        properties["interactionSource"] = interactionSource
        properties["startDragImmediately"] = startDragImmediately
        properties["onDragStarted"] = onDragStarted
        properties["onDragStopped"] = onDragStopped
        properties["state"] = state
    }

    companion object {
        val CanDrag: (PointerType) -> Boolean = { true }
    }
}

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-277-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 312–346)


internal class DraggableNode(
    private var state: DraggableState,
    canDrag: (PointerType) -> Boolean,
    orientation: Orientation,
    enabled: Boolean,
    interactionSource: MutableInteractionSource?,
    private var startDragImmediately: Boolean,
    private var onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
    private var onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
    private var reverseDirection: Boolean,
) :
    DragGestureNode(
        canDrag = canDrag,
        enabled = enabled,
        interactionSource = interactionSource,
        orientation = orientation,
    ) {

    override suspend fun drag(forEachDelta: suspend ((dragDelta: DragDelta) -> Unit) -> Unit) {
        val orientation = orientation ?: return
        state.drag(MutatePriority.UserInput) {
            forEachDelta { dragDelta ->
                dragBy(dragDelta.delta.reverseIfNeeded().toFloat(orientation))
            }
        }
    }

    override fun onDragStarted(startedPosition: Offset) {
        if (!isAttached || onDragStarted == NoOpOnDragStarted) return
        coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
            this@DraggableNode.onDragStarted(this, startedPosition)
        }
    }


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-312-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 347–381)

    override fun onDragStopped(event: DragStopped) {
        if (!isAttached || onDragStopped == NoOpOnDragStopped) return
        val orientation = orientation ?: return
        coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
            this@DraggableNode.onDragStopped(
                this,
                event.velocity.reverseIfNeeded().toFloat(orientation),
            )
        }
    }

    override fun startDragImmediately(): Boolean = startDragImmediately

    fun update(
        state: DraggableState,
        canDrag: (PointerType) -> Boolean,
        orientation: Orientation,
        enabled: Boolean,
        interactionSource: MutableInteractionSource?,
        startDragImmediately: Boolean,
        onDragStarted: suspend CoroutineScope.(startedPosition: Offset) -> Unit,
        onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit,
        reverseDirection: Boolean,
    ) {
        var resetPointerInputHandling = false
        if (this.state != state) {
            this.state = state
            resetPointerInputHandling = true
        }
        if (this.reverseDirection != reverseDirection) {
            this.reverseDirection = reverseDirection
            resetPointerInputHandling = true
        }

        this.onDragStarted = onDragStarted

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-347-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 36–70)

import androidx.compose.foundation.internal.JvmDefaultWithCompatibility
import androidx.compose.foundation.traverseAncestorGestures
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.isSpecified
import androidx.compose.ui.input.indirect.IndirectPointerEvent
import androidx.compose.ui.input.indirect.IndirectPointerInputModifierNode
import androidx.compose.ui.input.pointer.PointerEvent
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.PointerId
import androidx.compose.ui.input.pointer.PointerInputChange
import androidx.compose.ui.input.pointer.PointerType
import androidx.compose.ui.input.pointer.changedToDown
import androidx.compose.ui.input.pointer.changedToDownIgnoreConsumed
import androidx.compose.ui.input.pointer.changedToUpIgnoreConsumed
import androidx.compose.ui.input.pointer.isPrimaryPressed
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.input.pointer.positionChange
import androidx.compose.ui.input.pointer.positionChangeIgnoreConsumed
import androidx.compose.ui.input.pointer.util.VelocityTracker
import androidx.compose.ui.input.pointer.util.addPointerInputChange
import androidx.compose.ui.layout.findRootCoordinates
import androidx.compose.ui.layout.positionOnScreen
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatableNode
import androidx.compose.ui.node.DelegatingNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.PointerInputModifierNode
import androidx.compose.ui.node.currentValueOf
import androidx.compose.ui.node.requireLayoutCoordinates
import androidx.compose.ui.platform.InspectorInfo

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 382–416)

        this.onDragStopped = onDragStopped
        this.startDragImmediately = startDragImmediately

        update(canDrag, enabled, interactionSource, orientation, resetPointerInputHandling)
    }

    private fun Velocity.reverseIfNeeded() = if (reverseDirection) this * -1f else this * 1f

    private fun Offset.reverseIfNeeded() = if (reverseDirection) this * -1f else this * 1f
}

/** A node that performs drag gesture recognition and event propagation. */
@OptIn(ExperimentalFoundationApi::class)
internal abstract class DragGestureNode(
    canDrag: (PointerType) -> Boolean,
    enabled: Boolean,
    interactionSource: MutableInteractionSource?,
    override var orientation: Orientation?,
) :
    DelegatingNode(),
    PointerInputModifierNode,
    IndirectPointerInputModifierNode,
    CompositionLocalConsumerModifierNode,
    DraggableGestureConnection {

    var canDrag = canDrag
        private set

    var enabled = enabled
        private set

    protected var interactionSource = interactionSource
        private set

    // Use wrapper lambdas here to make sure that if these properties are updated while we suspend,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-382-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 417–451)

    // we point to the new reference when we invoke them. startDragImmediately is a lambda since we
    // need the most recent value passed to it from Scrollable.
    private val _canDrag: (PointerType) -> Boolean = { this.canDrag(it) }
    private var channel: Channel<DragEvent>? = null
    private var dragInteraction: DragInteraction.Start? = null
    internal var isListeningForEvents = false
    internal var isListeningForPointerInputEvents = false

    /** Store non-initialized states for re-use */
    private var _awaitDownState: DragDetectionState.AwaitDown? = null

    private var dragAccumulator = Offset.Zero

    private var pointerInputGestureNode: DelegatableNode? = null

    private var indirectTouchGestureNode: DelegatableNode? = null

    private val awaitDownState: DragDetectionState.AwaitDown
        get() = _awaitDownState ?: DragDetectionState.AwaitDown().also { _awaitDownState = it }

    private var _draggingState: DragDetectionState.Dragging? = null
    private val draggingState: DragDetectionState.Dragging
        get() = _draggingState ?: DragDetectionState.Dragging().also { _draggingState = it }

    private var _awaitTouchSlopState: DragDetectionState.AwaitTouchSlop? = null
    private val awaitTouchSlopState: DragDetectionState.AwaitTouchSlop
        get() =
            _awaitTouchSlopState
                ?: DragDetectionState.AwaitTouchSlop().also { _awaitTouchSlopState = it }

    private var _awaitGesturePickupState: DragDetectionState.AwaitGesturePickup? = null
    private val awaitGesturePickupState: DragDetectionState.AwaitGesturePickup
        get() =
            _awaitGesturePickupState
                ?: DragDetectionState.AwaitGesturePickup().also { _awaitGesturePickupState = it }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-417-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 452–486)


    private var currentDragState: DragDetectionState? = null

    private var velocityTracker: VelocityTracker? = null
    private var previousPositionOnScreen = Offset.Unspecified
    private var rootOffset = Offset.Zero
    private var previousRootPositionOnScreen = Offset.Unspecified
    private var velocityTrackerMulti: LongSparseArray<VelocityTracker>? = null
    private var touchSlopDetector: TouchSlopDetector? = null
    private var indirectPointerInputDragCycleDetector: IndirectPointerInputDragCycleDetector? = null

    /**
     * Accumulated position offset of this [Modifier.Node] that happened during a drag cycle. This
     * is used to correct the pointer input events that are added to the Velocity Tracker. If this
     * Node is static during the drag cycle, nothing will happen. On the other hand, if the position
     * of this node changes during the drag cycle, we need to correct the Pointer Input used for the
     * drag events, this is because Velocity Tracker doesn't have the knowledge about changes in the
     * position of the container that uses it, and because each Pointer Input event is related to
     * the container's root.
     */
    private var nodeOffset = Offset.Zero

    /**
     * Responsible for the dragging behavior between the start and the end of the drag. It
     * continually invokes `forEachDelta` to process incoming events. In return, `forEachDelta`
     * calls `dragBy` method to process each individual delta.
     */
    abstract suspend fun drag(forEachDelta: suspend ((dragDelta: DragDelta) -> Unit) -> Unit)

    /**
     * Passes the action needed when a drag starts. This gives the ability to pass the desired
     * behavior from other nodes implementing AbstractDraggableNode
     */
    abstract fun onDragStarted(startedPosition: Offset)


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-452-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 487–521)

    /**
     * Passes the action needed when a drag stops. This gives the ability to pass the desired
     * behavior from other nodes implementing AbstractDraggableNode
     */
    abstract fun onDragStopped(event: DragStopped)

    /**
     * If touch slop recognition should be skipped. If this is true, this node will start
     * recognizing drag events immediately without waiting for touch slop.
     */
    abstract fun startDragImmediately(): Boolean

    private fun requireVelocityTracker(): VelocityTracker =
        requireNotNull(velocityTracker) { "Velocity Tracker not initialized." }

    private fun requireChannel(): Channel<DragEvent> =
        requireNotNull(channel) { "Events channel not initialized." }

    private fun requireTouchSlopDetector(): TouchSlopDetector =
        requireNotNull(touchSlopDetector) { "Touch slop detector not initialized." }

    @OptIn(ExperimentalFoundationApi::class)
    private fun startListeningForEvents() {
        isListeningForEvents = true

        if (channel == null) {
            channel = Channel(capacity = Channel.UNLIMITED)
        }

        /**
         * To preserve the original behavior we had (before the Modifier.Node migration) we need to
         * scope the DragStopped and DragCancel methods to the node's coroutine scope instead of
         * using the one provided by the pointer input modifier, this is to ensure that even when
         * the pointer input scope is reset we will continue any coroutine scope scope that we
         * started from these methods while the pointer input scope was active.

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-487-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 522–556)

         */
        coroutineScope.launch {
            while (isActive) {
                var event = channel?.receive()
                if (event !is DragStarted) continue
                processDragStart(event)
                try {
                    drag { processDelta ->
                        while (event !is DragStopped && event !is DragCancelled) {
                            (event as? DragDelta)?.let(processDelta)
                            event = channel?.receive()
                        }
                    }
                    if (event is DragStopped) {
                        processDragStop(event as DragStopped)
                    } else if (event is DragCancelled) {
                        processDragCancel()
                    }
                } catch (c: CancellationException) {
                    processDragCancel()
                }
            }
        }
    }

    override val gestureState: GestureState
        get() =
            if (enabled) {
                when (val state = currentDragState) {
                    is DragDetectionState.AwaitDown ->
                        if (state.hasSeenInitialEvent) GestureState.Waiting else GestureState.Idle
                    is DragDetectionState.AwaitTouchSlop -> GestureState.Waiting
                    is DragDetectionState.AwaitGesturePickup -> GestureState.Waiting
                    is DragDetectionState.Dragging -> GestureState.Recognized
                    else -> GestureState.Idle

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-522-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 557–591)

                }
            } else {
                GestureState.Idle
            }

    override fun onDetach() {
        isListeningForEvents = false
        disposeInteractionSource()
        if (!ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
            nodeOffset = Offset.Zero
        } else {
            resetRootOffset()
        }

        resetGestureNodes()
    }

    protected fun initializePointerInputGestureCoordination() {
        if (pointerInputGestureNode == null) {
            pointerInputGestureNode = delegate(gestureNode(this))
        }
    }

    protected fun initializeIndirectTouchGestureCoordination() {
        if (indirectTouchGestureNode == null) {
            indirectTouchGestureNode =
                delegate(
                    gestureNode(indirectPointerInputDragCycleDetector as DraggableGestureConnection)
                )
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    override fun onPointerEvent(
        pointerEvent: PointerEvent,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-557-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 592–626)

        pass: PointerEventPass,
        bounds: IntSize,
    ) {
        isListeningForPointerInputEvents = true
        if (enabled) {
            initializePointerInputGestureCoordination()
            // initialize current state
            if (currentDragState == null) currentDragState = awaitDownState
            processRawPointerEvent(pointerEvent, pass)
        }
    }

    override fun onIndirectPointerEvent(event: IndirectPointerEvent, pass: PointerEventPass) {
        if (enabled) {
            if (indirectPointerInputDragCycleDetector == null) {
                indirectPointerInputDragCycleDetector = IndirectPointerInputDragCycleDetector(this)
            }
            initializeIndirectTouchGestureCoordination()
            indirectPointerInputDragCycleDetector?.processIndirectPointerInputEvent(event, pass)
        }
    }

    override fun onCancelIndirectPointerInput() {
        indirectPointerInputDragCycleDetector?.resetDragDetectionState()
    }

    override fun onCancelPointerInput() {
        if (isListeningForPointerInputEvents) resetDragDetectionState()
        isListeningForPointerInputEvents = false
    }

    private suspend fun processDragStart(event: DragStarted) {
        dragInteraction?.let { oldInteraction ->
            interactionSource?.emit(DragInteraction.Cancel(oldInteraction))
        }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-592-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 627–661)

        val interaction = DragInteraction.Start()
        interactionSource?.emit(interaction)
        dragInteraction = interaction
        onDragStarted(event.startPoint)
    }

    private suspend fun processDragStop(event: DragStopped) {
        dragInteraction?.let { interaction ->
            interactionSource?.emit(DragInteraction.Stop(interaction))
            dragInteraction = null
        }
        onDragStopped(event)
    }

    private suspend fun processDragCancel() {
        dragInteraction?.let { interaction ->
            interactionSource?.emit(DragInteraction.Cancel(interaction))
            dragInteraction = null
        }
        onDragStopped(DragStopped(Velocity.Zero, isIndirectPointerEvent = false))
    }

    fun disposeInteractionSource() {
        dragInteraction?.let { interaction ->
            interactionSource?.tryEmit(DragInteraction.Cancel(interaction))
            dragInteraction = null
        }
    }

    fun update(
        canDrag: (PointerType) -> Boolean = this.canDrag,
        enabled: Boolean = this.enabled,
        interactionSource: MutableInteractionSource? = this.interactionSource,
        orientation: Orientation? = this.orientation,
        shouldResetPointerInputHandling: Boolean = false,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-627-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 662–696)

    ) {
        var resetPointerInputHandling = shouldResetPointerInputHandling

        this.canDrag = canDrag
        if (this.enabled != enabled) {
            this.enabled = enabled
            if (!enabled) {
                resetGestureNodes()
                disposeInteractionSource()
                indirectPointerInputDragCycleDetector = null
            }
            resetPointerInputHandling = true
        }
        if (this.interactionSource != interactionSource) {
            disposeInteractionSource()
            this.interactionSource = interactionSource
        }

        if (this.orientation != orientation) {
            this.orientation = orientation
            resetPointerInputHandling = true
        }

        if (resetPointerInputHandling) {
            if (isListeningForPointerInputEvents) resetDragDetectionState()
            indirectPointerInputDragCycleDetector?.resetDragDetectionState()
        }
    }

    private fun processRawPointerEvent(pointerEvent: PointerEvent, pass: PointerEventPass) {
        if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            if (pass == PointerEventPass.Main) preProcessVelocity(pointerEvent)
        }
        when (
            val state = requireNotNull(currentDragState) { "currentDragState should not be null" }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-662-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 697–731)

        ) {
            is DragDetectionState.AwaitDown -> processInitialDownState(pointerEvent, pass, state)
            is DragDetectionState.AwaitTouchSlop -> processAwaitTouchSlop(pointerEvent, pass, state)
            is DragDetectionState.AwaitGesturePickup ->
                processAwaitGesturePickup(pointerEvent, pass, state)
            is DragDetectionState.Dragging -> processDraggingState(pointerEvent, pass, state)
        }
        if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            if (pass == PointerEventPass.Main) postProcessVelocity(pointerEvent)
        }
    }

    private fun preProcessVelocity(pointerEvent: PointerEvent) {
        var trackers = velocityTrackerMulti
        if (trackers == null) {
            trackers = LongSparseArray()
            velocityTrackerMulti = trackers
        }
        if (trackers.isEmpty()) {
            // No pointer is being tracked yet, so this is the start of a new gesture and the
            // offset accumulated during the previous one is no longer relevant.
            resetRootOffset()
        }
        pointerEvent.changes.fastForEach {
            if (trackers[it.id.value] == null) {
                trackers.append(it.id.value, VelocityTracker())
            }
        }

        if (ComposeFoundationFlags.isDragNodeOffsetDoubleCountingFixEnabled) {
            updateRootOffset()
        }
        pointerEvent.changes.fastForEach {
            trackers[it.id.value]!!.addPointerInputChange(it, rootOffset)
        }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-697-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 71–105)

import androidx.compose.ui.platform.LocalViewConfiguration
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.Velocity
import androidx.compose.ui.util.fastAll
import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastFirstOrNull
import androidx.compose.ui.util.fastForEach
import kotlin.coroutines.cancellation.CancellationException
import kotlin.math.PI
import kotlin.math.absoluteValue
import kotlin.math.atan2
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch

/**
 * State of [draggable]. Allows for a granular control of how deltas are consumed by the user as
 * well as to write custom drag methods using [drag] suspend function.
 */
@JvmDefaultWithCompatibility
public interface DraggableState {
    /**
     * Call this function to take control of drag logic.
     *
     * All actions that change the logical drag position must be performed within a [drag] block
     * (even if they don't call any other methods on this object) in order to guarantee that mutual
     * exclusion is enforced.
     *
     * If [drag] is called from elsewhere with the [dragPriority] higher or equal to ongoing drag,
     * ongoing drag will be canceled.
     *
     * @param dragPriority of the drag operation

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 732–766)

    }

    /**
     * Accumulates into [rootOffset] how much the root moved on screen since the previous pointer
     * event.
     *
     * Positions of a [PointerInputChange] are expressed relative to the root, so whenever the root
     * itself moves on screen (e.g. the hosting `View` is translated), a pointer that physically
     * stayed in place reports a different position. Adding [rootOffset] to those positions cancels
     * out that movement, keeping the data fed to the velocity trackers in a stable coordinate
     * space.
     */
    private fun updateRootOffset() {
        val currentRootPositionOnScreen =
            requireLayoutCoordinates().findRootCoordinates().positionOnScreen()
        if (
            previousRootPositionOnScreen != Offset.Unspecified &&
                currentRootPositionOnScreen != previousRootPositionOnScreen
        ) {
            rootOffset += currentRootPositionOnScreen - previousRootPositionOnScreen
        }
        previousRootPositionOnScreen = currentRootPositionOnScreen
    }

    private fun resetRootOffset() {
        rootOffset = Offset.Zero
        previousRootPositionOnScreen = Offset.Unspecified
    }

    private fun postProcessVelocity(pointerEvent: PointerEvent) {
        pointerEvent.changes.fastForEach {
            if (it.changedToUpIgnoreConsumed()) {
                velocityTrackerMulti?.remove(it.id.value)
            }
        }

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-732-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 767–801)

    }

    private fun resetGestureNodes() {
        indirectTouchGestureNode?.let { undelegate(it) }
        pointerInputGestureNode?.let { undelegate(it) }
        indirectTouchGestureNode = null
        pointerInputGestureNode = null
    }

    private fun resetDragDetectionState() {
        moveToAwaitDownState()
        if (isListeningForEvents) sendDragCancelled()
        if (ComposeFoundationFlags.isDraggableVelocityTrackerFixEnabled) {
            velocityTrackerMulti = null
        } else {
            velocityTracker = null
        }
    }

    private fun moveToAwaitTouchSlopState(
        initialDown: PointerInputChange,
        pointerId: PointerId,
        initialTouchSlopPositionChange: Offset = Offset.Zero,
        verifyConsumptionInFinalPass: Boolean = false,
    ) {
        currentDragState = awaitTouchSlopState.apply {
            this.initialDown = initialDown
            this.pointerId = pointerId
            if (touchSlopDetector == null) {
                touchSlopDetector = TouchSlopDetector(orientation)
            } else {
                touchSlopDetector?.orientation = orientation
                touchSlopDetector?.reset(initialTouchSlopPositionChange)
            }
            this.verifyConsumptionInFinalPass = verifyConsumptionInFinalPass

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-767-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 802–836)

        }
    }

    private fun moveToDraggingState(pointerId: PointerId, hasStartedDragImmediately: Boolean) {
        currentDragState = draggingState.apply {
            this.pointerId = pointerId
            this.consumedOnInitial = false
            this.hasStartedDragImmediately = hasStartedDragImmediately
        }
    }

    private fun moveToAwaitDownState() {
        dragAccumulator = Offset.Zero
        currentDragState = awaitDownState.apply {
            awaitTouchSlop = DragDetectionState.AwaitDown.AwaitTouchSlop.NotInitialized
            consumedOnInitial = false
            hasSeenInitialEvent = false
        }
    }

    private fun moveToAwaitGesturePickupState(
        initialDown: PointerInputChange,
        pointerId: PointerId,
        touchSlopDetector: TouchSlopDetector,
    ) {
        currentDragState = awaitGesturePickupState.apply {
            this.initialDown = initialDown
            this.pointerId = pointerId
            this.touchSlopDetector = touchSlopDetector.also { it.reset() }
        }
    }

    private fun processInitialDownState(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-802-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 837–871)

        state: DragDetectionState.AwaitDown,
    ) {
        /** Wait for a down event in any pass. */
        if (pointerEvent.changes.isEmpty()) return
        // We use isAnyChangedToDown instead of isChangedToDown to handle cases where a
        // persistent pointer (like a trackpad hover pointer) co-exists with a new touch
        // pointer in the same event. If we used isChangedToDown (which requires all
        // pointers to change to down), the touch gesture would be ignored because the
        // hover pointer didn't change to down.
        if (!pointerEvent.isAnyChangedToDown(requireUnconsumed = false)) return
        val firstDown =
            pointerEvent.changes.fastFirstOrNull { it.changedToDownIgnoreConsumed() } ?: return
        val awaitTouchSlop =
            when (state.awaitTouchSlop) {
                DragDetectionState.AwaitDown.AwaitTouchSlop.NotInitialized -> {
                    if (!startDragImmediately()) {
                        DragDetectionState.AwaitDown.AwaitTouchSlop.Yes
                    } else {
                        DragDetectionState.AwaitDown.AwaitTouchSlop.No
                    }
                }

                else -> state.awaitTouchSlop
            }

        // update the touch slop in the current state
        state.awaitTouchSlop = awaitTouchSlop

        if (pass == PointerEventPass.Initial) {
            // If we shouldn't await touch slop, we consume the event immediately.
            if (awaitTouchSlop == DragDetectionState.AwaitDown.AwaitTouchSlop.No) {
                firstDown.consume()

                // Change state properties so we dispatch only later, this aligns with the previous
                // behavior where dispatching only happened during the main pass

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-837-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 872–906)

                state.consumedOnInitial = true
            }
            // Draggable should start reporting that is waiting for touch slop as soon as it gets
            // the first down event.
            state.hasSeenInitialEvent = true
        }

        if (pass == PointerEventPass.Main) {
            /**
             * At this point we detected a Down event, if we should await the slop we move to the
             * next state. If we shouldn't await the slop and we already consumed the event we
             * dispatch the drag start events and start the dragging state.
             */
            if (awaitTouchSlop == DragDetectionState.AwaitDown.AwaitTouchSlop.Yes) {
                moveToAwaitTouchSlopState(firstDown, firstDown.id)
            } else if (state.consumedOnInitial) {
                sendDragStart(firstDown, firstDown, Offset.Zero)
                sendDragEvent(firstDown, Offset.Zero)
                moveToDraggingState(firstDown.id, hasStartedDragImmediately = true)
            }
        }
    }

    private fun processAwaitTouchSlop(
        pointerEvent: PointerEvent,
        pass: PointerEventPass,
        state: DragDetectionState.AwaitTouchSlop,
    ) {
        /** Slop detection only cares about the main and final passes */
        if (pass == PointerEventPass.Initial) return
        val eventFromPointerId = pointerEvent.changes.fastFirstOrNull { it.id == state.pointerId }

        /**
         * We lost this pointer, try to replace it. This is to cover the case where multiple
         * pointers were down, but the original one we tracked (state.pointerId) is no longer down,

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-872-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 907–941)

         * try to move tracking to a different pointer
         */
        val dragEvent =
            if (eventFromPointerId == null) {
                val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                if (otherDown == null) {
                    // There are no other pointers down, reset the state
                    moveToAwaitDownState()
                    return
                } else {
                    // a new pointer was found, update the current state.
                    state.pointerId = otherDown.id
                }
                otherDown
            } else {
                eventFromPointerId
            }

        /**
         * Slop detection routines happens during the Main pass. Do we have unconsumed events for
         * this pointer?
         */
        if (pass == PointerEventPass.Main) {
            if (!dragEvent.isConsumed) {
                if (dragEvent.changedToUpIgnoreConsumed()) {
                    /** The pointer lifted, look for another pointer */
                    val otherDown = pointerEvent.changes.fastFirstOrNull { it.pressed }
                    if (otherDown == null) {
                        // There are no other pointers down, reset the state
                        moveToAwaitDownState()
                    } else {
                        // a new pointer was found, update the current state.
                        state.pointerId = otherDown.id
                    }
                } else {

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-907-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 942–976)

                    // this is a regular event (MOVE)
                    val touchSlop =
                        currentValueOf(LocalViewConfiguration).pointerSlop(dragEvent.type)

                    // add data to the slop detector
                    val postSlopOffset =
                        requireTouchSlopDetector()
                            .getPostSlopOffset(dragEvent.positionChangeIgnoreConsumed(), touchSlop)
                    /**
                     * Here we use the [gestureNode] and [GestureConnection] APIs to make a decision
                     * about this gesture. At this point we have all the triggers to start
                     * recognizing a gesture in this current
                     * [androidx.compose.foundation.gestures.DragGestureNode]. This is the moment
                     * that touch slop is recognized here in this node. During this time, before we
                     * start consuming drag events we will decide to start recognizing in this node
                     * or to allow the parent to take over. See below for chosen criteria.
                     */
                    if (postSlopOffset.isSpecified) {
                        val delta = dragEvent.positionChange()

                        dragAccumulator += delta

                        /**
                         * Represents the angle of the start of this gesture (the user intention).
                         * For simplicity this uses the absolute gesture coordinates meaning an
                         * angle between 0 and 90 will be used.
                         */
                        val gestureAngle =
                            atan2(
                                x = dragAccumulator.x.absoluteValue,
                                y = dragAccumulator.y.absoluteValue,
                            ) * (180.0f / PI).toFloat()

                        /**
                         * Represents the alignment of this gesture's accumulated delta until now

Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-942-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)

## androidx.compose.foundation.gestures Draggable.kt source (lines 977–1011)

                         * and this node's orientation.
                         *
                         * 2D children (orientation is null) have higher priority
                         */
                        val isDragAngleAlignedWithSelfOrientation =
                            if (orientation == null) {
                                true
                            } else {
                                isDragAngleAlignedWithOrientation(orientation!!, gestureAngle)
                            }

                        /**
                         * The alignment of the parent follows the criteria:
                         * 1) The parent is a drag gesture component (DragGestureConnection)
                         * 2) The parent is in a waiting state.
                         * 3) The parent has an angle aligment with the offsets accumulated so far.
                         */
                        var hasDragAngleAlignedWithParentOrientation = false
                        traverseParentDraggableGestures { coordinator ->
                            val isParentWaiting = coordinator.gestureState == GestureState.Waiting
                            val isDragAngleAlignedWithParentOrientation =
                                if (coordinator.orientation == null) {
                                    false
                                } else {
                                    isDragAngleAlignedWithOrientation(
                                        coordinator.orientation!!,
                                        gestureAngle,
                                    )
                                }
                            hasDragAngleAlignedWithParentOrientation =
                                hasDragAngleAlignedWithParentOrientation ||
                                    isParentWaiting && isDragAngleAlignedWithParentOrientation
                            !hasDragAngleAlignedWithParentOrientation
                        }


Sources: [live-androidx-foundation-foundation-foundation-gestures-draggable-lines-977-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Draggable.kt)
