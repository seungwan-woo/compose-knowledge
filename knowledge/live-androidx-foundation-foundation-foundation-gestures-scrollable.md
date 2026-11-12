---
type: reference
title: androidx.compose.foundation.gestures Scrollable.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 1
    endLine: 35
    sha256: b35f471a635d55e3c4137e55f2c26feb148dc73b73bc716a5ce1803aac145e58
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

      import androidx.compose.animation.core.animate
      import androidx.compose.foundation.ExperimentalFoundationApi
      import androidx.compose.foundation.LocalOverscrollFactory
      import androidx.compose.foundation.MutatePriority
      import androidx.compose.foundation.OverscrollEffect
      import androidx.compose.foundation.gestures.Orientation.Horizontal
      import androidx.compose.foundation.gestures.Orientation.Vertical
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.relocation.BringIntoViewResponderNode
      import androidx.compose.foundation.rememberOverscrollEffect
      import androidx.compose.foundation.rememberPlatformOverscrollEffect
      import androidx.compose.foundation.scrollableArea
      import androidx.compose.foundation.verticalScroll
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.focus.FocusTargetModifierNode
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 106
    endLine: 140
    sha256: ab06224806822a0d30aaf4be966c905e3d6d73c8f99380cf0fc3aad2e2b3e9a8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              orientation = orientation,
              enabled = enabled,
              reverseDirection = reverseDirection,
              flingBehavior = flingBehavior,
              interactionSource = interactionSource,
              overscrollEffect = null,
          )

      /**
       * Configure touch scrolling and flinging for the UI element in a single [Orientation].
       *
       * Users should update their state themselves using default [ScrollableState] and its
       * `consumeScrollDelta` callback or by implementing [ScrollableState] interface manually and reflect
       * their own state in UI when using this component.
       *
       * `scrollable` is a low-level modifier that handles low-level scrolling input gestures, without
       * other behaviors commonly used for scrollable containers. For building scrollable containers, see
       * [androidx.compose.foundation.scrollableArea]. `scrollableArea` clips its content to its bounds,
       * renders overscroll, and adjusts the direction of scroll gestures to ensure that the content moves
       * with the user's gestures. See also [androidx.compose.foundation.verticalScroll] and
       * [androidx.compose.foundation.horizontalScroll] for high-level scrollable containers that handle
       * layout and move the content as the user scrolls.
       *
       * If you don't need to have fling or nested scroll support, but want to make component simply
       * draggable, consider using [draggable].
       *
       * This overload provides the access to [OverscrollEffect] that defines the behavior of the
       * over-scrolling logic. Use [androidx.compose.foundation.rememberOverscrollEffect] to create an
       * instance of the current provided overscroll implementation. Note: compared to other APIs that
       * accept [overscrollEffect] such as [scrollableArea] and [verticalScroll], `scrollable` does not
       * render the overscroll, it only provides events. Manually add
       * [androidx.compose.foundation.overscroll] to render the overscroll or use other APIs.
       *
       * @sample androidx.compose.foundation.samples.ScrollableSample
       * @param state [ScrollableState] state of the scrollable. Defines how scroll events will be
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 141
    endLine: 175
    sha256: 6e6ba63824a5eef0134772904fe3e0ead2c8eadd094999286f7f3aeeb52ea3e8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   interpreted by the user land logic and contains useful information about ongoing events.
       * @param orientation orientation of the scrolling
       * @param overscrollEffect effect to which the deltas will be fed when the scrollable have some
       *   scrolling delta left. Pass `null` for no overscroll. If you pass an effect you should also
       *   apply [androidx.compose.foundation.overscroll] modifier.
       * @param enabled whether scrolling is enabled
       * @param reverseDirection reverse the direction of the scroll, so top-to-bottom scroll will behave
       *   like bottom to top and left to right will behave like right to left.
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param interactionSource [MutableInteractionSource] that will be used to emit drag events when
       *   this scrollable is being dragged.
       * @param bringIntoViewSpec The configuration that this scrollable should use to perform scrolling
       *   when scroll requests are received from the focus system. If null is provided the system will
       *   use the behavior provided by [LocalBringIntoViewSpec] which by default has a platform-dependent
       *   implementation.
       */
      @Stable
      public fun Modifier.scrollable(
          state: ScrollableState,
          orientation: Orientation,
          overscrollEffect: OverscrollEffect?,
          enabled: Boolean = true,
          reverseDirection: Boolean = false,
          flingBehavior: FlingBehavior? = null,
          interactionSource: MutableInteractionSource? = null,
          bringIntoViewSpec: BringIntoViewSpec? = null,
      ): Modifier =
          this then
              ScrollableElement(
                  state,
                  orientation,
                  overscrollEffect,
                  enabled,
                  reverseDirection,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 176
    endLine: 210
    sha256: 439311272d34d406f5fdfce0872d3b3fa5bcfc769f5b7cbebbc0d7e67396c8e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  flingBehavior,
                  interactionSource,
                  bringIntoViewSpec,
              )

      private class ScrollableElement(
          val state: ScrollableState,
          val orientation: Orientation,
          val overscrollEffect: OverscrollEffect?,
          val enabled: Boolean,
          val reverseDirection: Boolean,
          val flingBehavior: FlingBehavior?,
          val interactionSource: MutableInteractionSource?,
          val bringIntoViewSpec: BringIntoViewSpec?,
      ) : ModifierNodeElement<ScrollableNode>() {
          override fun create(): ScrollableNode {
              return ScrollableNode(
                  state,
                  overscrollEffect,
                  flingBehavior,
                  orientation,
                  enabled,
                  reverseDirection,
                  interactionSource,
                  bringIntoViewSpec,
              )
          }

          override fun update(node: ScrollableNode) {
              node.update(
                  state,
                  orientation,
                  overscrollEffect,
                  enabled,
                  reverseDirection,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 211
    endLine: 245
    sha256: ca5d038a4e59a976a795fa4226af896e9f80c60926c4e9b466c430f33073856e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  flingBehavior,
                  interactionSource,
                  bringIntoViewSpec,
              )
          }

          override fun hashCode(): Int {
              var result = state.hashCode()
              result = 31 * result + orientation.hashCode()
              result = 31 * result + overscrollEffect.hashCode()
              result = 31 * result + enabled.hashCode()
              result = 31 * result + reverseDirection.hashCode()
              result = 31 * result + flingBehavior.hashCode()
              result = 31 * result + interactionSource.hashCode()
              result = 31 * result + bringIntoViewSpec.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true

              if (other !is ScrollableElement) return false

              if (state != other.state) return false
              if (orientation != other.orientation) return false
              if (overscrollEffect != other.overscrollEffect) return false
              if (enabled != other.enabled) return false
              if (reverseDirection != other.reverseDirection) return false
              if (flingBehavior != other.flingBehavior) return false
              if (interactionSource != other.interactionSource) return false
              if (bringIntoViewSpec != other.bringIntoViewSpec) return false

              return true
          }
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 246
    endLine: 280
    sha256: 56a75aabd2e4db1377e8268f4518b82e32237d09f821003c4559bbd0b09e7a4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun InspectorInfo.inspectableProperties() {
              name = "scrollable"
              properties["orientation"] = orientation
              properties["state"] = state
              properties["overscrollEffect"] = overscrollEffect
              properties["enabled"] = enabled
              properties["reverseDirection"] = reverseDirection
              properties["flingBehavior"] = flingBehavior
              properties["interactionSource"] = interactionSource
              properties["bringIntoViewSpec"] = bringIntoViewSpec
          }
      }

      @OptIn(ExperimentalFoundationApi::class)
      internal class ScrollableNode(
          state: ScrollableState,
          overscrollEffect: OverscrollEffect?,
          flingBehavior: FlingBehavior?,
          orientation: Orientation,
          enabled: Boolean,
          reverseDirection: Boolean,
          interactionSource: MutableInteractionSource?,
          bringIntoViewSpec: BringIntoViewSpec?,
      ) :
          AbstractScrollableNode(
              overscrollEffect = overscrollEffect,
              flingBehavior = flingBehavior,
              enabled = enabled,
              interactionSource = interactionSource,
              orientation = orientation,
          ),
          KeyInputModifierNode,
          OnScrollChangedDispatcher {

          // Placeholder fling behavior, we'll initialize it when the density is available.
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 281
    endLine: 315
    sha256: bc2ff6d7d9ac68741dfd4acffa06bbbad0bccac5c103d1a8e65432dd2df4bdda
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override val defaultFlingBehavior = platformScrollableDefaultFlingBehavior()

          override val scrollLogic =
              ScrollingLogic(
                  scrollableState = state,
                  orientation = orientation,
                  overscrollEffect = overscrollEffect,
                  reverseDirection = reverseDirection,
                  flingBehavior = flingBehavior ?: defaultFlingBehavior,
                  nestedScrollDispatcher = nestedScrollDispatcher,
                  onScrollChangedDispatcher = this,
                  isScrollableNodeAttached = { isAttached },
              )

          override val nestedScrollConnection =
              ScrollableNestedScrollConnection(enabled = enabled, scrollingLogic = scrollLogic)

          private val focusTargetModifierNode =
              delegate(FocusTargetModifierNode(focusability = Focusability.Never))

          private val contentInViewNode =
              delegate(
                  ContentInViewNode(
                      orientation = orientation,
                      scrollingLogic = scrollLogic,
                      reverseDirection = reverseDirection,
                      bringIntoViewSpec = bringIntoViewSpec,
                      getFocusedRect = { focusTargetModifierNode.getFocusedRect() },
                  )
              )

          override fun createMouseWheelScrollingLogic() =
              MouseWheel1DScrollingLogic(
                  scrollingLogic = scrollLogic,
                  scrollConfig = platformScrollConfig(),
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 316
    endLine: 350
    sha256: ebb5e66fd47bbe2c5497a2e6585f1d1ba4d9d4ea75995332bcbfb54a69cd5702
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  onScrollStopped = ::onMouseWheelScrollStopped,
                  density = requireDensity(),
              )

          override fun createTrackpadScrollingLogic() =
              Trackpad1DScrollingLogic(
                  scrollingLogic = scrollLogic,
                  onScrollStopped = ::onTrackpadScrollStopped,
                  density = requireDensity(),
              )

          init {
              // Must be called here because in AbstractScrollableNode.init nestedScrollConnection hasn't
              // been created yet
              initializeNestedScrollingDelegation()

              /** Focus scrolling */
              delegate(BringIntoViewResponderNode(contentInViewNode))
          }

          override fun dispatchScrollDeltaInfo(delta: Offset) {
              if (!isAttached) return
              dispatchOnScrollChanged(delta)
          }

          override suspend fun drag(
              forEachDelta: suspend ((dragDelta: DragEvent.DragDelta) -> Unit) -> Unit
          ) {
              with(scrollLogic) {
                  scroll(scrollPriority = MutatePriority.UserInput) {
                      forEachDelta {
                          // Indirect pointer Events should be reverted to account for the reverse we
                          // do in Scrollable. Regular touchscreen events are inverted in scrollable, but
                          // that shouldn't happen for indirect pointer events, so we cancel the reverse
                          // here.
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 351
    endLine: 385
    sha256: 0d3c6fd505493cf902470d511b9dee8a5ad9de68efde38454faf4107fb96770d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          val invertIndirectPointer = if (it.isIndirectPointerEvent) -1f else 1f
                          scrollByWithOverscroll(
                              it.delta.singleAxisOffset() * invertIndirectPointer,
                              source = UserInput,
                          )
                      }
                  }
              }
          }

          override fun onDragStopped(event: DragEvent.DragStopped) {
              if (!isAttached) return
              nestedScrollDispatcher.coroutineScope.launch {
                  // Indirect pointer Events should be reverted to account for the reverse we
                  // do in Scrollable. Regular touchscreen events are inverted in scrollable, but
                  // that shouldn't happen for indirect pointer events, so we cancel the reverse
                  // here.
                  val invertIndirectPointer = if (event.isIndirectPointerEvent) -1f else 1f
                  scrollLogic.onScrollStopped(
                      event.velocity * invertIndirectPointer,
                      isMouseWheel = false,
                  )
              }
          }

          private fun onMouseWheelScrollStopped(velocity: Velocity) {
              nestedScrollDispatcher.coroutineScope.launch {
                  scrollLogic.onScrollStopped(velocity, isMouseWheel = true)
              }
          }

          private fun onTrackpadScrollStopped(velocity: Velocity) {
              nestedScrollDispatcher.coroutineScope.launch {
                  scrollLogic.onScrollStopped(velocity, isMouseWheel = false)
              }
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 36
    endLine: 70
    sha256: 328a5378f9126f217e429ebaaa5ec9c7a70cbd87ed1cf3d7eb3be9d0f9658ed3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.focus.Focusability
      import androidx.compose.ui.focus.getFocusedRect
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.input.key.Key
      import androidx.compose.ui.input.key.KeyEvent
      import androidx.compose.ui.input.key.KeyEventType
      import androidx.compose.ui.input.key.KeyInputModifierNode
      import androidx.compose.ui.input.key.isCtrlPressed
      import androidx.compose.ui.input.key.key
      import androidx.compose.ui.input.key.type
      import androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher
      import androidx.compose.ui.input.nestedscroll.NestedScrollSource
      import androidx.compose.ui.input.nestedscroll.NestedScrollSource.Companion.SideEffect
      import androidx.compose.ui.input.nestedscroll.NestedScrollSource.Companion.UserInput
      import androidx.compose.ui.input.pointer.PointerEvent
      import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
      import androidx.compose.ui.node.DelegatableNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.dispatchOnScrollChanged
      import androidx.compose.ui.node.requireDensity
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.Velocity
      import kotlin.math.absoluteValue
      import kotlinx.coroutines.launch

      /**
       * Configure touch scrolling and flinging for the UI element in a single [Orientation].
       *
       * Users should update their state themselves using default [ScrollableState] and its
       * `consumeScrollDelta` callback or by implementing [ScrollableState] interface manually and reflect
       * their own state in UI when using this component.
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 386
    endLine: 420
    sha256: 0e51d1c42eb9fbb6a5361f723086dd43f7e8138780c1da80570e71eb09f3b1df
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          fun update(
              state: ScrollableState,
              orientation: Orientation,
              overscrollEffect: OverscrollEffect?,
              enabled: Boolean,
              reverseDirection: Boolean,
              flingBehavior: FlingBehavior?,
              interactionSource: MutableInteractionSource?,
              bringIntoViewSpec: BringIntoViewSpec?,
          ) {
              update(
                  enabled = enabled,
                  overscrollEffect = overscrollEffect,
                  flingBehavior = flingBehavior,
              )

              // a new fling behavior was set, change the resolved one.
              val resolvedFlingBehavior = flingBehavior ?: defaultFlingBehavior
              val resetPointerInputHandling =
                  scrollLogic.update(
                      scrollableState = state,
                      orientation = orientation,
                      overscrollEffect = overscrollEffect,
                      reverseDirection = reverseDirection,
                      flingBehavior = resolvedFlingBehavior,
                      nestedScrollDispatcher = nestedScrollDispatcher,
                  )
              contentInViewNode.update(orientation, reverseDirection, bringIntoViewSpec)

              // update DragGestureNode
              update(
                  canDrag = CanDragCalculation,
                  enabled = enabled,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 421
    endLine: 455
    sha256: 2b4b03e2f65e768865a477d530e14e1e4f66dbbe02a58062558971791f9e2120
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  interactionSource = interactionSource,
                  orientation = if (scrollLogic.isVertical()) Vertical else Horizontal,
                  shouldResetPointerInputHandling = resetPointerInputHandling,
              )
          }

          // Key handler for Page up/down scrolling behavior.
          override fun onKeyEvent(event: KeyEvent): Boolean {
              return if (
                  enabled &&
                      (event.key == Key.PageDown || event.key == Key.PageUp) &&
                      (event.type == KeyEventType.KeyDown) &&
                      (!event.isCtrlPressed)
              ) {

                  val scrollAmount: Offset =
                      if (scrollLogic.isVertical()) {
                          val viewportHeight = contentInViewNode.viewportSizeOrZero.height

                          val yAmount =
                              if (event.key == Key.PageUp) {
                                  viewportHeight.toFloat()
                              } else {
                                  -viewportHeight.toFloat()
                              }

                          Offset(0f, yAmount)
                      } else {
                          val viewportWidth = contentInViewNode.viewportSizeOrZero.width

                          val xAmount =
                              if (event.key == Key.PageUp) {
                                  viewportWidth.toFloat()
                              } else {
                                  -viewportWidth.toFloat()
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 456
    endLine: 490
    sha256: 9a269bc9b94dcb0ff19445b62b785892f36cec7357c9cca34d2a2e5a575c70df
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                              }

                          Offset(xAmount, 0f)
                      }

                  // A coroutine is launched for every individual scroll event in the
                  // larger scroll gesture. If we see degradation in the future (that is,
                  // a fast scroll gesture on a slow device causes UI jank [not seen up to
                  // this point]), we can switch to a more efficient solution where we
                  // lazily launch one coroutine (with the first event) and use a Channel
                  // to communicate the scroll amount to the UI thread.
                  coroutineScope.launch {
                      scrollLogic.scroll(scrollPriority = MutatePriority.UserInput) {
                          scrollBy(offset = scrollAmount, source = UserInput)
                      }
                  }
                  true
              } else {
                  false
              }
          }

          override fun onPreKeyEvent(event: KeyEvent) = false

          override suspend fun semanticsScrollBy(offset: Offset, dispatchNestedScroll: Boolean): Offset {
              return scrollLogic.semanticsScrollBy(offset, dispatchNestedScroll)
          }
      }

      /** Contains the default values used by [scrollable] */
      public object ScrollableDefaults {

          /** Create and remember default [FlingBehavior] that will represent a natural fling curve. */
          @Composable public fun flingBehavior(): FlingBehavior = rememberPlatformDefaultFlingBehavior()
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 491
    endLine: 525
    sha256: 555f8399c05f7f8179b248bb06955c321f9b1b2bbdcf09318e2d914ba68a2171
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Returns a remembered [OverscrollEffect] created from the current value of
           * [LocalOverscrollFactory].
           *
           * This API has been deprecated, and replaced with [rememberOverscrollEffect]
           */
          @Deprecated(
              "This API has been replaced with rememberOverscrollEffect, which queries theme provided OverscrollFactory values instead of the 'platform default' without customization.",
              replaceWith =
                  ReplaceWith(
                      "rememberOverscrollEffect()",
                      "androidx.compose.foundation.rememberOverscrollEffect",
                  ),
          )
          @Composable
          public fun overscrollEffect(): OverscrollEffect {
              return rememberPlatformOverscrollEffect() ?: NoOpOverscrollEffect
          }

          private object NoOpOverscrollEffect : OverscrollEffect {
              override fun applyToScroll(
                  delta: Offset,
                  source: NestedScrollSource,
                  performScroll: (Offset) -> Offset,
              ): Offset = performScroll(delta)

              override suspend fun applyToFling(
                  velocity: Velocity,
                  performFling: suspend (Velocity) -> Velocity,
              ) {
                  performFling(velocity)
              }

              override val isInProgress: Boolean
                  get() = false
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 526
    endLine: 560
    sha256: b238abaa84649abc30db65f574252a1080191af4aa600c76e6defe6f29a3cd9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              override val node: DelegatableNode
                  get() = object : Modifier.Node() {}
          }

          /**
           * Calculates the final `reverseDirection` value for a scrollable component.
           *
           * This is a helper function used by [androidx.compose.foundation.scrollableArea] to determine
           * whether to reverse the direction of scroll input. The goal is to provide a "natural"
           * scrolling experience where content moves with the user's gesture, while also accounting for
           * the [layoutDirection].
           *
           * The logic is as follows:
           * 1. To achieve "natural" scrolling (content moves with the gesture), scroll deltas are
           *    inverted. This function returns `true` by default when `reverseScrolling` is `false`.
           * 2. In a Right-to-Left (`Rtl`) context with a `Horizontal` orientation, the direction is
           *    flipped an additional time to maintain the natural feel, as the content is laid out from
           *    right to left.
           *
           * @param layoutDirection current layout direction (e.g., from [LocalLayoutDirection])
           * @param orientation orientation of scroll
           * @param reverseScrolling whether scrolling direction should be reversed
           * @return `true` if scroll direction should be reversed, `false` otherwise.
           */
          public fun reverseDirection(
              layoutDirection: LayoutDirection,
              orientation: Orientation,
              reverseScrolling: Boolean,
          ): Boolean {
              // A finger moves with the content, not with the viewport. Therefore,
              // always reverse once to have "natural" gesture that goes reversed to layout
              var reverseDirection = !reverseScrolling
              // But if rtl and horizontal, things move the other way around
              val isRtl = layoutDirection == LayoutDirection.Rtl
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 561
    endLine: 595
    sha256: ab5f93be3bb1f7fe06089e3089a976982b6966bf808c7b59149f9be73148c166
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (isRtl && orientation != Vertical) {
                  reverseDirection = !reverseDirection
              }
              return reverseDirection
          }
      }

      internal interface ScrollConfig {

          /** Enables animated transition of scroll on mouse wheel events. */
          val isSmoothScrollingEnabled: Boolean
              get() = true

          fun isPreciseWheelScroll(event: PointerEvent): Boolean = false

          fun Density.calculateMouseWheelScroll(event: PointerEvent, bounds: IntSize): Offset
      }

      internal expect fun CompositionLocalConsumerModifierNode.platformScrollConfig(): ScrollConfig

      /**
       * Holds all scrolling-related logic: controls nested scrolling, flinging, overscroll, and delta
       * dispatching.
       */
      internal class ScrollingLogic(
          var scrollableState: ScrollableState,
          private var overscrollEffect: OverscrollEffect?,
          private var flingBehavior: FlingBehavior,
          var orientation: Orientation,
          var reverseDirection: Boolean,
          private var nestedScrollDispatcher: NestedScrollDispatcher,
          private var onScrollChangedDispatcher: OnScrollChangedDispatcher,
          private val isScrollableNodeAttached: () -> Boolean,
      ) : ScrollLogic {
          // specifies if this scrollable node is currently flinging
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 596
    endLine: 630
    sha256: 247a88a75770ead24dea1e31cef48fa4eb0070c6d00d7a856d4087b898ef1f8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override var isFlinging = false
              private set

          fun Float.toOffset(): Offset =
              when {
                  this == 0f -> Offset.Zero
                  orientation == Horizontal -> Offset(this, 0f)
                  else -> Offset(0f, this)
              }

          fun Offset.singleAxisOffset(): Offset =
              if (orientation == Horizontal) copy(y = 0f) else copy(x = 0f)

          fun Offset.toFloat(): Float = if (orientation == Horizontal) this.x else this.y

          private fun Velocity.toFloat(): Float = if (orientation == Horizontal) this.x else this.y

          private fun Velocity.singleAxisVelocity(): Velocity =
              if (orientation == Horizontal) copy(y = 0f) else copy(x = 0f)

          private fun Velocity.update(newValue: Float): Velocity =
              if (orientation == Horizontal) copy(x = newValue) else copy(y = newValue)

          fun Float.reverseIfNeeded(): Float = if (reverseDirection) this * -1 else this

          fun Offset.reverseIfNeeded(): Offset = if (reverseDirection) this * -1f else this

          private var latestScrollSource = UserInput
          private var outerStateScope = NoOpScrollScope

          private val nestedScrollScope =
              object : NestedScrollScope {
                  override fun scrollBy(
                      offset: Offset,
                      source: NestedScrollSource,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 631
    endLine: 665
    sha256: d188721a72ed9330afae1a3a9a4fbac60b57bfead876d59fc0cdb5faa1585920
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      dispatchNestedScroll: Boolean,
                  ): Offset {
                      return with(outerStateScope) { performScroll(offset, source, dispatchNestedScroll) }
                  }

                  override fun scrollByWithOverscroll(
                      offset: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      latestScrollSource = source
                      val overscroll = overscrollEffect
                      return if (overscroll != null && shouldDispatchOverscroll) {
                          overscroll.applyToScroll(offset, latestScrollSource, performScrollForOverscroll)
                      } else {
                          with(outerStateScope) { performScroll(offset, source) }
                      }
                  }
              }

          private val performScrollForOverscroll: (Offset) -> Offset = { delta ->
              with(outerStateScope) { performScroll(delta, latestScrollSource) }
          }

          @OptIn(ExperimentalFoundationApi::class)
          private fun ScrollScope.performScroll(
              delta: Offset,
              source: NestedScrollSource,
              dispatchNestedScroll: Boolean = true,
          ): Offset {
              val consumedByPreScroll =
                  if (dispatchNestedScroll) {
                      nestedScrollDispatcher.dispatchPreScroll(delta, source)
                  } else {
                      Offset.Zero
                  }
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 666
    endLine: 700
    sha256: 43e880c9635e8eceb5a1c699554c0d77dcce20815a9b74bd62d3d8b1688d20c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              val scrollAvailableAfterPreScroll = delta - consumedByPreScroll

              val singleAxisDeltaForSelfScroll =
                  scrollAvailableAfterPreScroll.singleAxisOffset().reverseIfNeeded().toFloat()

              // Consume on a single axis.
              val consumedBySelfScroll =
                  scrollBy(singleAxisDeltaForSelfScroll).toOffset().reverseIfNeeded()

              // Trigger on scroll changed callback
              onScrollChangedDispatcher.dispatchScrollDeltaInfo(consumedBySelfScroll)

              val deltaAvailableAfterScroll = scrollAvailableAfterPreScroll - consumedBySelfScroll
              val consumedByPostScroll =
                  if (dispatchNestedScroll) {
                      nestedScrollDispatcher.dispatchPostScroll(
                          consumedBySelfScroll,
                          deltaAvailableAfterScroll,
                          source,
                      )
                  } else {
                      Offset.Zero
                  }
              return consumedByPreScroll + consumedBySelfScroll + consumedByPostScroll
          }

          private val shouldDispatchOverscroll
              get() =
                  scrollableState.canScrollForward ||
                      scrollableState.canScrollBackward ||
                      overscrollEffect?.isInProgress == true

          override fun performRawScroll(scroll: Offset): Offset {
              return if (scrollableState.isScrollInProgress) {
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 701
    endLine: 735
    sha256: 6aba59f89d3cc66d8db82367643219700415566c3612df4726d80a13e7402715
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  Offset.Zero
              } else {
                  dispatchRawDelta(scroll)
              }
          }

          private fun dispatchRawDelta(scroll: Offset): Offset {
              return scrollableState
                  .dispatchRawDelta(scroll.toFloat().reverseIfNeeded())
                  .reverseIfNeeded()
                  .toOffset()
          }

          suspend fun onScrollStopped(initialVelocity: Velocity, isMouseWheel: Boolean) {
              if (isMouseWheel && !flingBehavior.shouldBeTriggeredByMouseWheel) {
                  return
              }
              val availableVelocity = initialVelocity.singleAxisVelocity()

              val performFling: suspend (Velocity) -> Velocity = { velocity ->
                  val preConsumedByParent = nestedScrollDispatcher.dispatchPreFling(velocity)
                  val available = velocity - preConsumedByParent

                  val velocityLeft = doFlingAnimation(available)

                  val consumedPost =
                      nestedScrollDispatcher.dispatchPostFling((available - velocityLeft), velocityLeft)
                  val totalLeft = velocityLeft - consumedPost
                  velocity - totalLeft
              }

              val overscroll = overscrollEffect
              if (overscroll != null && shouldDispatchOverscroll) {
                  overscroll.applyToFling(availableVelocity, performFling)
              } else {
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 71
    endLine: 105
    sha256: 1e76cf5935ebefeb26194f9c7fb5f7a35f276ec64ab9e1ecb73f5bf542cf689f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * `scrollable` is a low-level modifier that handles low-level scrolling input gestures, without
       * other behaviors commonly used for scrollable containers. For building scrollable containers, see
       * [androidx.compose.foundation.scrollableArea]. `scrollableArea` clips its content to its bounds,
       * renders overscroll, and adjusts the direction of scroll gestures to ensure that the content moves
       * with the user's gestures. See also [androidx.compose.foundation.verticalScroll] and
       * [androidx.compose.foundation.horizontalScroll] for high-level scrollable containers that handle
       * layout and move the content as the user scrolls.
       *
       * If you don't need to have fling or nested scroll support, but want to make component simply
       * draggable, consider using [draggable].
       *
       * @sample androidx.compose.foundation.samples.ScrollableSample
       * @param state [ScrollableState] state of the scrollable. Defines how scroll events will be
       *   interpreted by the user land logic and contains useful information about ongoing events.
       * @param orientation orientation of the scrolling
       * @param enabled whether scrolling is enabled
       * @param reverseDirection reverse the direction of the scroll, so top-to-bottom scroll will behave
       *   like bottom to top and left to right will behave like right to left.
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param interactionSource [MutableInteractionSource] that will be used to emit drag events when
       *   this scrollable is being dragged.
       */
      @Stable
      public fun Modifier.scrollable(
          state: ScrollableState,
          orientation: Orientation,
          enabled: Boolean = true,
          reverseDirection: Boolean = false,
          flingBehavior: FlingBehavior? = null,
          interactionSource: MutableInteractionSource? = null,
      ): Modifier =
          scrollable(
              state = state,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 736
    endLine: 770
    sha256: bbd62e1018c4f89f1734acaef6fab33523749d36a6b639d50612985305af573e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  performFling(availableVelocity)
              }
          }

          @OptIn(ExperimentalFoundationApi::class)
          override suspend fun doFlingAnimation(available: Velocity): Velocity {
              var result: Velocity = available
              isFlinging = true
              try {
                  scroll(scrollPriority = MutatePriority.Default) {
                      val nestedScrollScope = this
                      val reverseScope =
                          object : ScrollScope {
                              override fun scrollBy(pixels: Float): Float {
                                  // Fling has hit the bounds or node left composition,
                                  // cancel it to allow continuation. This will conclude this node's
                                  // fling, allowing the onPostFling signal to be called with the leftover
                                  // velocity from the fling animation. Any nested scroll node above will
                                  // be able to pick up the leftover velocity and continue the fling.
                                  if (
                                      pixels.absoluteValue != 0.0f && !isScrollableNodeAttached.invoke()
                                  ) {
                                      throw FlingCancellationException()
                                  }

                                  return nestedScrollScope
                                      .scrollByWithOverscroll(
                                          offset = pixels.toOffset().reverseIfNeeded(),
                                          source = SideEffect,
                                      )
                                      .toFloat()
                                      .reverseIfNeeded()
                              }
                          }
                      with(reverseScope) {
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 771
    endLine: 805
    sha256: 1cc36868bb1d4335d59957e38eaf047bc768a689f918ceb6154a55bf07bc8512
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          with(flingBehavior) {
                              result =
                                  result.update(
                                      performFling(available.toFloat().reverseIfNeeded())
                                          .reverseIfNeeded()
                                  )
                          }
                      }
                  }
              } finally {
                  isFlinging = false
              }

              return result
          }

          override fun shouldScrollImmediately(): Boolean {
              return scrollableState.isScrollInProgress || overscrollEffect?.isInProgress ?: false
          }

          /** Opens a scrolling session with nested scrolling and overscroll support. */
          override suspend fun scroll(
              scrollPriority: MutatePriority,
              block: suspend NestedScrollScope.() -> Unit,
          ) {
              scrollableState.scroll(scrollPriority) {
                  outerStateScope = this
                  block.invoke(nestedScrollScope)
              }
          }

          /** @return true if the pointer input should be reset */
          fun update(
              scrollableState: ScrollableState,
              orientation: Orientation,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 806
    endLine: 840
    sha256: 9bdaeeea359ceb4131065a7ba6eeb10044d4eae6d0ce79a6d9e98f646a8cd578
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              overscrollEffect: OverscrollEffect?,
              reverseDirection: Boolean,
              flingBehavior: FlingBehavior,
              nestedScrollDispatcher: NestedScrollDispatcher,
          ): Boolean {
              var resetPointerInputHandling = false
              if (this.scrollableState != scrollableState) {
                  this.scrollableState = scrollableState
                  resetPointerInputHandling = true
              }
              this.overscrollEffect = overscrollEffect
              if (this.orientation != orientation) {
                  this.orientation = orientation
                  resetPointerInputHandling = true
              }
              if (this.reverseDirection != reverseDirection) {
                  this.reverseDirection = reverseDirection
                  resetPointerInputHandling = true
              }
              this.flingBehavior = flingBehavior
              this.nestedScrollDispatcher = nestedScrollDispatcher
              return resetPointerInputHandling
          }

          fun isVertical(): Boolean = orientation == Vertical
      }

      private val NoOpScrollScope: ScrollScope =
          object : ScrollScope {
              override fun scrollBy(pixels: Float): Float = pixels
          }

      /** Interface to allow re-use across Scrollable and Scrollable2D. */
      internal interface ScrollLogic {
          val isFlinging: Boolean
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 841
    endLine: 875
    sha256: 7a5c75cac826ad754ca480f840ff24fc44a4074dc13858aea79327564858471c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          fun performRawScroll(scroll: Offset): Offset

          suspend fun doFlingAnimation(available: Velocity): Velocity

          fun shouldScrollImmediately(): Boolean

          /** Opens a scrolling session with nested scrolling and overscroll support. */
          suspend fun scroll(
              scrollPriority: MutatePriority = MutatePriority.Default,
              block: suspend NestedScrollScope.() -> Unit,
          )
      }

      /**
       * This method returns [ScrollableDefaultFlingBehavior] whose density will be managed by the
       * [ScrollableElement] because it's not created inside [Composable] context. This is different from
       * [rememberPlatformDefaultFlingBehavior] which creates [FlingBehavior] whose density depends on
       * [androidx.compose.ui.platform.LocalDensity] and is automatically resolved.
       */
      internal expect fun platformScrollableDefaultFlingBehavior(): ScrollableDefaultFlingBehavior

      /**
       * Create and remember default [FlingBehavior] that will represent natural platform fling decay
       * behavior.
       */
      @Composable internal expect fun rememberPlatformDefaultFlingBehavior(): FlingBehavior

      /**
       * Scroll deltas originating from the semantics system. Should be dispatched as an animation driven
       * event.
       */
      private suspend fun ScrollingLogic.semanticsScrollBy(
          offset: Offset,
          dispatchNestedScroll: Boolean,
  - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt
    startLine: 876
    endLine: 898
    sha256: 268f4d96228dc5644e32b5596c3a91d11991c11fa18aff3458c1187b63ec230b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ): Offset {
          var previousValue = 0f
          scroll(scrollPriority = MutatePriority.Default) {
              animate(0f, offset.toFloat()) { currentValue, _ ->
                  val delta = currentValue - previousValue
                  val consumed =
                      scrollBy(
                              offset = delta.reverseIfNeeded().toOffset(),
                              source = UserInput,
                              dispatchNestedScroll = dispatchNestedScroll,
                          )
                          .toFloat()
                          .reverseIfNeeded()
                  previousValue += consumed
              }
          }
          return previousValue.toOffset()
      }

      internal interface OnScrollChangedDispatcher {
          fun dispatchScrollDeltaInfo(delta: Offset)
      }
compose:
  id: live-androidx-foundation-foundation-foundation-gestures-scrollable
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.gestures
  sections:
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-1
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-106
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-141
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
        - androidx.compose.foundation.gestures.ScrollableDefaults
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-176
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-211
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-246
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-281
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-316
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-351
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-36
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-386
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-421
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-456
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 456–490)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
        - androidx.compose.foundation.gestures.ScrollableDefaults
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-491
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-526
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-561
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 561–595)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-596
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-631
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 631–665)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-631-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-666
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-666-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-701
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-701-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-71
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.gestures.scrollable
        - androidx.compose.foundation.gestures.ScrollableDefaults
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-736
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-736-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-771
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 771–805)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-771-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-806
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 806–840)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-806-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-841
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-841-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-876
      title: androidx.compose.foundation.gestures Scrollable.kt source (lines 876–898)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-876-source
      relatedIds: []
---

# androidx.compose.foundation.gestures Scrollable.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt

## androidx.compose.foundation.gestures Scrollable.kt source (lines 1–35)

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

import androidx.compose.animation.core.animate
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.LocalOverscrollFactory
import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.OverscrollEffect
import androidx.compose.foundation.gestures.Orientation.Horizontal
import androidx.compose.foundation.gestures.Orientation.Vertical
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.relocation.BringIntoViewResponderNode
import androidx.compose.foundation.rememberOverscrollEffect
import androidx.compose.foundation.rememberPlatformOverscrollEffect
import androidx.compose.foundation.scrollableArea
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.focus.FocusTargetModifierNode

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 106–140)

        orientation = orientation,
        enabled = enabled,
        reverseDirection = reverseDirection,
        flingBehavior = flingBehavior,
        interactionSource = interactionSource,
        overscrollEffect = null,
    )

/**
 * Configure touch scrolling and flinging for the UI element in a single [Orientation].
 *
 * Users should update their state themselves using default [ScrollableState] and its
 * `consumeScrollDelta` callback or by implementing [ScrollableState] interface manually and reflect
 * their own state in UI when using this component.
 *
 * `scrollable` is a low-level modifier that handles low-level scrolling input gestures, without
 * other behaviors commonly used for scrollable containers. For building scrollable containers, see
 * [androidx.compose.foundation.scrollableArea]. `scrollableArea` clips its content to its bounds,
 * renders overscroll, and adjusts the direction of scroll gestures to ensure that the content moves
 * with the user's gestures. See also [androidx.compose.foundation.verticalScroll] and
 * [androidx.compose.foundation.horizontalScroll] for high-level scrollable containers that handle
 * layout and move the content as the user scrolls.
 *
 * If you don't need to have fling or nested scroll support, but want to make component simply
 * draggable, consider using [draggable].
 *
 * This overload provides the access to [OverscrollEffect] that defines the behavior of the
 * over-scrolling logic. Use [androidx.compose.foundation.rememberOverscrollEffect] to create an
 * instance of the current provided overscroll implementation. Note: compared to other APIs that
 * accept [overscrollEffect] such as [scrollableArea] and [verticalScroll], `scrollable` does not
 * render the overscroll, it only provides events. Manually add
 * [androidx.compose.foundation.overscroll] to render the overscroll or use other APIs.
 *
 * @sample androidx.compose.foundation.samples.ScrollableSample
 * @param state [ScrollableState] state of the scrollable. Defines how scroll events will be

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 141–175)

 *   interpreted by the user land logic and contains useful information about ongoing events.
 * @param orientation orientation of the scrolling
 * @param overscrollEffect effect to which the deltas will be fed when the scrollable have some
 *   scrolling delta left. Pass `null` for no overscroll. If you pass an effect you should also
 *   apply [androidx.compose.foundation.overscroll] modifier.
 * @param enabled whether scrolling is enabled
 * @param reverseDirection reverse the direction of the scroll, so top-to-bottom scroll will behave
 *   like bottom to top and left to right will behave like right to left.
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param interactionSource [MutableInteractionSource] that will be used to emit drag events when
 *   this scrollable is being dragged.
 * @param bringIntoViewSpec The configuration that this scrollable should use to perform scrolling
 *   when scroll requests are received from the focus system. If null is provided the system will
 *   use the behavior provided by [LocalBringIntoViewSpec] which by default has a platform-dependent
 *   implementation.
 */
@Stable
public fun Modifier.scrollable(
    state: ScrollableState,
    orientation: Orientation,
    overscrollEffect: OverscrollEffect?,
    enabled: Boolean = true,
    reverseDirection: Boolean = false,
    flingBehavior: FlingBehavior? = null,
    interactionSource: MutableInteractionSource? = null,
    bringIntoViewSpec: BringIntoViewSpec? = null,
): Modifier =
    this then
        ScrollableElement(
            state,
            orientation,
            overscrollEffect,
            enabled,
            reverseDirection,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 176–210)

            flingBehavior,
            interactionSource,
            bringIntoViewSpec,
        )

private class ScrollableElement(
    val state: ScrollableState,
    val orientation: Orientation,
    val overscrollEffect: OverscrollEffect?,
    val enabled: Boolean,
    val reverseDirection: Boolean,
    val flingBehavior: FlingBehavior?,
    val interactionSource: MutableInteractionSource?,
    val bringIntoViewSpec: BringIntoViewSpec?,
) : ModifierNodeElement<ScrollableNode>() {
    override fun create(): ScrollableNode {
        return ScrollableNode(
            state,
            overscrollEffect,
            flingBehavior,
            orientation,
            enabled,
            reverseDirection,
            interactionSource,
            bringIntoViewSpec,
        )
    }

    override fun update(node: ScrollableNode) {
        node.update(
            state,
            orientation,
            overscrollEffect,
            enabled,
            reverseDirection,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 211–245)

            flingBehavior,
            interactionSource,
            bringIntoViewSpec,
        )
    }

    override fun hashCode(): Int {
        var result = state.hashCode()
        result = 31 * result + orientation.hashCode()
        result = 31 * result + overscrollEffect.hashCode()
        result = 31 * result + enabled.hashCode()
        result = 31 * result + reverseDirection.hashCode()
        result = 31 * result + flingBehavior.hashCode()
        result = 31 * result + interactionSource.hashCode()
        result = 31 * result + bringIntoViewSpec.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true

        if (other !is ScrollableElement) return false

        if (state != other.state) return false
        if (orientation != other.orientation) return false
        if (overscrollEffect != other.overscrollEffect) return false
        if (enabled != other.enabled) return false
        if (reverseDirection != other.reverseDirection) return false
        if (flingBehavior != other.flingBehavior) return false
        if (interactionSource != other.interactionSource) return false
        if (bringIntoViewSpec != other.bringIntoViewSpec) return false

        return true
    }


Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 246–280)

    override fun InspectorInfo.inspectableProperties() {
        name = "scrollable"
        properties["orientation"] = orientation
        properties["state"] = state
        properties["overscrollEffect"] = overscrollEffect
        properties["enabled"] = enabled
        properties["reverseDirection"] = reverseDirection
        properties["flingBehavior"] = flingBehavior
        properties["interactionSource"] = interactionSource
        properties["bringIntoViewSpec"] = bringIntoViewSpec
    }
}

@OptIn(ExperimentalFoundationApi::class)
internal class ScrollableNode(
    state: ScrollableState,
    overscrollEffect: OverscrollEffect?,
    flingBehavior: FlingBehavior?,
    orientation: Orientation,
    enabled: Boolean,
    reverseDirection: Boolean,
    interactionSource: MutableInteractionSource?,
    bringIntoViewSpec: BringIntoViewSpec?,
) :
    AbstractScrollableNode(
        overscrollEffect = overscrollEffect,
        flingBehavior = flingBehavior,
        enabled = enabled,
        interactionSource = interactionSource,
        orientation = orientation,
    ),
    KeyInputModifierNode,
    OnScrollChangedDispatcher {

    // Placeholder fling behavior, we'll initialize it when the density is available.

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 281–315)

    override val defaultFlingBehavior = platformScrollableDefaultFlingBehavior()

    override val scrollLogic =
        ScrollingLogic(
            scrollableState = state,
            orientation = orientation,
            overscrollEffect = overscrollEffect,
            reverseDirection = reverseDirection,
            flingBehavior = flingBehavior ?: defaultFlingBehavior,
            nestedScrollDispatcher = nestedScrollDispatcher,
            onScrollChangedDispatcher = this,
            isScrollableNodeAttached = { isAttached },
        )

    override val nestedScrollConnection =
        ScrollableNestedScrollConnection(enabled = enabled, scrollingLogic = scrollLogic)

    private val focusTargetModifierNode =
        delegate(FocusTargetModifierNode(focusability = Focusability.Never))

    private val contentInViewNode =
        delegate(
            ContentInViewNode(
                orientation = orientation,
                scrollingLogic = scrollLogic,
                reverseDirection = reverseDirection,
                bringIntoViewSpec = bringIntoViewSpec,
                getFocusedRect = { focusTargetModifierNode.getFocusedRect() },
            )
        )

    override fun createMouseWheelScrollingLogic() =
        MouseWheel1DScrollingLogic(
            scrollingLogic = scrollLogic,
            scrollConfig = platformScrollConfig(),

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 316–350)

            onScrollStopped = ::onMouseWheelScrollStopped,
            density = requireDensity(),
        )

    override fun createTrackpadScrollingLogic() =
        Trackpad1DScrollingLogic(
            scrollingLogic = scrollLogic,
            onScrollStopped = ::onTrackpadScrollStopped,
            density = requireDensity(),
        )

    init {
        // Must be called here because in AbstractScrollableNode.init nestedScrollConnection hasn't
        // been created yet
        initializeNestedScrollingDelegation()

        /** Focus scrolling */
        delegate(BringIntoViewResponderNode(contentInViewNode))
    }

    override fun dispatchScrollDeltaInfo(delta: Offset) {
        if (!isAttached) return
        dispatchOnScrollChanged(delta)
    }

    override suspend fun drag(
        forEachDelta: suspend ((dragDelta: DragEvent.DragDelta) -> Unit) -> Unit
    ) {
        with(scrollLogic) {
            scroll(scrollPriority = MutatePriority.UserInput) {
                forEachDelta {
                    // Indirect pointer Events should be reverted to account for the reverse we
                    // do in Scrollable. Regular touchscreen events are inverted in scrollable, but
                    // that shouldn't happen for indirect pointer events, so we cancel the reverse
                    // here.

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 351–385)

                    val invertIndirectPointer = if (it.isIndirectPointerEvent) -1f else 1f
                    scrollByWithOverscroll(
                        it.delta.singleAxisOffset() * invertIndirectPointer,
                        source = UserInput,
                    )
                }
            }
        }
    }

    override fun onDragStopped(event: DragEvent.DragStopped) {
        if (!isAttached) return
        nestedScrollDispatcher.coroutineScope.launch {
            // Indirect pointer Events should be reverted to account for the reverse we
            // do in Scrollable. Regular touchscreen events are inverted in scrollable, but
            // that shouldn't happen for indirect pointer events, so we cancel the reverse
            // here.
            val invertIndirectPointer = if (event.isIndirectPointerEvent) -1f else 1f
            scrollLogic.onScrollStopped(
                event.velocity * invertIndirectPointer,
                isMouseWheel = false,
            )
        }
    }

    private fun onMouseWheelScrollStopped(velocity: Velocity) {
        nestedScrollDispatcher.coroutineScope.launch {
            scrollLogic.onScrollStopped(velocity, isMouseWheel = true)
        }
    }

    private fun onTrackpadScrollStopped(velocity: Velocity) {
        nestedScrollDispatcher.coroutineScope.launch {
            scrollLogic.onScrollStopped(velocity, isMouseWheel = false)
        }

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 36–70)

import androidx.compose.ui.focus.Focusability
import androidx.compose.ui.focus.getFocusedRect
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEvent
import androidx.compose.ui.input.key.KeyEventType
import androidx.compose.ui.input.key.KeyInputModifierNode
import androidx.compose.ui.input.key.isCtrlPressed
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.type
import androidx.compose.ui.input.nestedscroll.NestedScrollDispatcher
import androidx.compose.ui.input.nestedscroll.NestedScrollSource
import androidx.compose.ui.input.nestedscroll.NestedScrollSource.Companion.SideEffect
import androidx.compose.ui.input.nestedscroll.NestedScrollSource.Companion.UserInput
import androidx.compose.ui.input.pointer.PointerEvent
import androidx.compose.ui.node.CompositionLocalConsumerModifierNode
import androidx.compose.ui.node.DelegatableNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.dispatchOnScrollChanged
import androidx.compose.ui.node.requireDensity
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.Velocity
import kotlin.math.absoluteValue
import kotlinx.coroutines.launch

/**
 * Configure touch scrolling and flinging for the UI element in a single [Orientation].
 *
 * Users should update their state themselves using default [ScrollableState] and its
 * `consumeScrollDelta` callback or by implementing [ScrollableState] interface manually and reflect
 * their own state in UI when using this component.

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 386–420)

    }

    fun update(
        state: ScrollableState,
        orientation: Orientation,
        overscrollEffect: OverscrollEffect?,
        enabled: Boolean,
        reverseDirection: Boolean,
        flingBehavior: FlingBehavior?,
        interactionSource: MutableInteractionSource?,
        bringIntoViewSpec: BringIntoViewSpec?,
    ) {
        update(
            enabled = enabled,
            overscrollEffect = overscrollEffect,
            flingBehavior = flingBehavior,
        )

        // a new fling behavior was set, change the resolved one.
        val resolvedFlingBehavior = flingBehavior ?: defaultFlingBehavior
        val resetPointerInputHandling =
            scrollLogic.update(
                scrollableState = state,
                orientation = orientation,
                overscrollEffect = overscrollEffect,
                reverseDirection = reverseDirection,
                flingBehavior = resolvedFlingBehavior,
                nestedScrollDispatcher = nestedScrollDispatcher,
            )
        contentInViewNode.update(orientation, reverseDirection, bringIntoViewSpec)

        // update DragGestureNode
        update(
            canDrag = CanDragCalculation,
            enabled = enabled,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 421–455)

            interactionSource = interactionSource,
            orientation = if (scrollLogic.isVertical()) Vertical else Horizontal,
            shouldResetPointerInputHandling = resetPointerInputHandling,
        )
    }

    // Key handler for Page up/down scrolling behavior.
    override fun onKeyEvent(event: KeyEvent): Boolean {
        return if (
            enabled &&
                (event.key == Key.PageDown || event.key == Key.PageUp) &&
                (event.type == KeyEventType.KeyDown) &&
                (!event.isCtrlPressed)
        ) {

            val scrollAmount: Offset =
                if (scrollLogic.isVertical()) {
                    val viewportHeight = contentInViewNode.viewportSizeOrZero.height

                    val yAmount =
                        if (event.key == Key.PageUp) {
                            viewportHeight.toFloat()
                        } else {
                            -viewportHeight.toFloat()
                        }

                    Offset(0f, yAmount)
                } else {
                    val viewportWidth = contentInViewNode.viewportSizeOrZero.width

                    val xAmount =
                        if (event.key == Key.PageUp) {
                            viewportWidth.toFloat()
                        } else {
                            -viewportWidth.toFloat()

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 456–490)

                        }

                    Offset(xAmount, 0f)
                }

            // A coroutine is launched for every individual scroll event in the
            // larger scroll gesture. If we see degradation in the future (that is,
            // a fast scroll gesture on a slow device causes UI jank [not seen up to
            // this point]), we can switch to a more efficient solution where we
            // lazily launch one coroutine (with the first event) and use a Channel
            // to communicate the scroll amount to the UI thread.
            coroutineScope.launch {
                scrollLogic.scroll(scrollPriority = MutatePriority.UserInput) {
                    scrollBy(offset = scrollAmount, source = UserInput)
                }
            }
            true
        } else {
            false
        }
    }

    override fun onPreKeyEvent(event: KeyEvent) = false

    override suspend fun semanticsScrollBy(offset: Offset, dispatchNestedScroll: Boolean): Offset {
        return scrollLogic.semanticsScrollBy(offset, dispatchNestedScroll)
    }
}

/** Contains the default values used by [scrollable] */
public object ScrollableDefaults {

    /** Create and remember default [FlingBehavior] that will represent a natural fling curve. */
    @Composable public fun flingBehavior(): FlingBehavior = rememberPlatformDefaultFlingBehavior()


Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 491–525)

    /**
     * Returns a remembered [OverscrollEffect] created from the current value of
     * [LocalOverscrollFactory].
     *
     * This API has been deprecated, and replaced with [rememberOverscrollEffect]
     */
    @Deprecated(
        "This API has been replaced with rememberOverscrollEffect, which queries theme provided OverscrollFactory values instead of the 'platform default' without customization.",
        replaceWith =
            ReplaceWith(
                "rememberOverscrollEffect()",
                "androidx.compose.foundation.rememberOverscrollEffect",
            ),
    )
    @Composable
    public fun overscrollEffect(): OverscrollEffect {
        return rememberPlatformOverscrollEffect() ?: NoOpOverscrollEffect
    }

    private object NoOpOverscrollEffect : OverscrollEffect {
        override fun applyToScroll(
            delta: Offset,
            source: NestedScrollSource,
            performScroll: (Offset) -> Offset,
        ): Offset = performScroll(delta)

        override suspend fun applyToFling(
            velocity: Velocity,
            performFling: suspend (Velocity) -> Velocity,
        ) {
            performFling(velocity)
        }

        override val isInProgress: Boolean
            get() = false

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 526–560)


        override val node: DelegatableNode
            get() = object : Modifier.Node() {}
    }

    /**
     * Calculates the final `reverseDirection` value for a scrollable component.
     *
     * This is a helper function used by [androidx.compose.foundation.scrollableArea] to determine
     * whether to reverse the direction of scroll input. The goal is to provide a "natural"
     * scrolling experience where content moves with the user's gesture, while also accounting for
     * the [layoutDirection].
     *
     * The logic is as follows:
     * 1. To achieve "natural" scrolling (content moves with the gesture), scroll deltas are
     *    inverted. This function returns `true` by default when `reverseScrolling` is `false`.
     * 2. In a Right-to-Left (`Rtl`) context with a `Horizontal` orientation, the direction is
     *    flipped an additional time to maintain the natural feel, as the content is laid out from
     *    right to left.
     *
     * @param layoutDirection current layout direction (e.g., from [LocalLayoutDirection])
     * @param orientation orientation of scroll
     * @param reverseScrolling whether scrolling direction should be reversed
     * @return `true` if scroll direction should be reversed, `false` otherwise.
     */
    public fun reverseDirection(
        layoutDirection: LayoutDirection,
        orientation: Orientation,
        reverseScrolling: Boolean,
    ): Boolean {
        // A finger moves with the content, not with the viewport. Therefore,
        // always reverse once to have "natural" gesture that goes reversed to layout
        var reverseDirection = !reverseScrolling
        // But if rtl and horizontal, things move the other way around
        val isRtl = layoutDirection == LayoutDirection.Rtl

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 561–595)

        if (isRtl && orientation != Vertical) {
            reverseDirection = !reverseDirection
        }
        return reverseDirection
    }
}

internal interface ScrollConfig {

    /** Enables animated transition of scroll on mouse wheel events. */
    val isSmoothScrollingEnabled: Boolean
        get() = true

    fun isPreciseWheelScroll(event: PointerEvent): Boolean = false

    fun Density.calculateMouseWheelScroll(event: PointerEvent, bounds: IntSize): Offset
}

internal expect fun CompositionLocalConsumerModifierNode.platformScrollConfig(): ScrollConfig

/**
 * Holds all scrolling-related logic: controls nested scrolling, flinging, overscroll, and delta
 * dispatching.
 */
internal class ScrollingLogic(
    var scrollableState: ScrollableState,
    private var overscrollEffect: OverscrollEffect?,
    private var flingBehavior: FlingBehavior,
    var orientation: Orientation,
    var reverseDirection: Boolean,
    private var nestedScrollDispatcher: NestedScrollDispatcher,
    private var onScrollChangedDispatcher: OnScrollChangedDispatcher,
    private val isScrollableNodeAttached: () -> Boolean,
) : ScrollLogic {
    // specifies if this scrollable node is currently flinging

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 596–630)

    override var isFlinging = false
        private set

    fun Float.toOffset(): Offset =
        when {
            this == 0f -> Offset.Zero
            orientation == Horizontal -> Offset(this, 0f)
            else -> Offset(0f, this)
        }

    fun Offset.singleAxisOffset(): Offset =
        if (orientation == Horizontal) copy(y = 0f) else copy(x = 0f)

    fun Offset.toFloat(): Float = if (orientation == Horizontal) this.x else this.y

    private fun Velocity.toFloat(): Float = if (orientation == Horizontal) this.x else this.y

    private fun Velocity.singleAxisVelocity(): Velocity =
        if (orientation == Horizontal) copy(y = 0f) else copy(x = 0f)

    private fun Velocity.update(newValue: Float): Velocity =
        if (orientation == Horizontal) copy(x = newValue) else copy(y = newValue)

    fun Float.reverseIfNeeded(): Float = if (reverseDirection) this * -1 else this

    fun Offset.reverseIfNeeded(): Offset = if (reverseDirection) this * -1f else this

    private var latestScrollSource = UserInput
    private var outerStateScope = NoOpScrollScope

    private val nestedScrollScope =
        object : NestedScrollScope {
            override fun scrollBy(
                offset: Offset,
                source: NestedScrollSource,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 631–665)

                dispatchNestedScroll: Boolean,
            ): Offset {
                return with(outerStateScope) { performScroll(offset, source, dispatchNestedScroll) }
            }

            override fun scrollByWithOverscroll(
                offset: Offset,
                source: NestedScrollSource,
            ): Offset {
                latestScrollSource = source
                val overscroll = overscrollEffect
                return if (overscroll != null && shouldDispatchOverscroll) {
                    overscroll.applyToScroll(offset, latestScrollSource, performScrollForOverscroll)
                } else {
                    with(outerStateScope) { performScroll(offset, source) }
                }
            }
        }

    private val performScrollForOverscroll: (Offset) -> Offset = { delta ->
        with(outerStateScope) { performScroll(delta, latestScrollSource) }
    }

    @OptIn(ExperimentalFoundationApi::class)
    private fun ScrollScope.performScroll(
        delta: Offset,
        source: NestedScrollSource,
        dispatchNestedScroll: Boolean = true,
    ): Offset {
        val consumedByPreScroll =
            if (dispatchNestedScroll) {
                nestedScrollDispatcher.dispatchPreScroll(delta, source)
            } else {
                Offset.Zero
            }

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 666–700)


        val scrollAvailableAfterPreScroll = delta - consumedByPreScroll

        val singleAxisDeltaForSelfScroll =
            scrollAvailableAfterPreScroll.singleAxisOffset().reverseIfNeeded().toFloat()

        // Consume on a single axis.
        val consumedBySelfScroll =
            scrollBy(singleAxisDeltaForSelfScroll).toOffset().reverseIfNeeded()

        // Trigger on scroll changed callback
        onScrollChangedDispatcher.dispatchScrollDeltaInfo(consumedBySelfScroll)

        val deltaAvailableAfterScroll = scrollAvailableAfterPreScroll - consumedBySelfScroll
        val consumedByPostScroll =
            if (dispatchNestedScroll) {
                nestedScrollDispatcher.dispatchPostScroll(
                    consumedBySelfScroll,
                    deltaAvailableAfterScroll,
                    source,
                )
            } else {
                Offset.Zero
            }
        return consumedByPreScroll + consumedBySelfScroll + consumedByPostScroll
    }

    private val shouldDispatchOverscroll
        get() =
            scrollableState.canScrollForward ||
                scrollableState.canScrollBackward ||
                overscrollEffect?.isInProgress == true

    override fun performRawScroll(scroll: Offset): Offset {
        return if (scrollableState.isScrollInProgress) {

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 701–735)

            Offset.Zero
        } else {
            dispatchRawDelta(scroll)
        }
    }

    private fun dispatchRawDelta(scroll: Offset): Offset {
        return scrollableState
            .dispatchRawDelta(scroll.toFloat().reverseIfNeeded())
            .reverseIfNeeded()
            .toOffset()
    }

    suspend fun onScrollStopped(initialVelocity: Velocity, isMouseWheel: Boolean) {
        if (isMouseWheel && !flingBehavior.shouldBeTriggeredByMouseWheel) {
            return
        }
        val availableVelocity = initialVelocity.singleAxisVelocity()

        val performFling: suspend (Velocity) -> Velocity = { velocity ->
            val preConsumedByParent = nestedScrollDispatcher.dispatchPreFling(velocity)
            val available = velocity - preConsumedByParent

            val velocityLeft = doFlingAnimation(available)

            val consumedPost =
                nestedScrollDispatcher.dispatchPostFling((available - velocityLeft), velocityLeft)
            val totalLeft = velocityLeft - consumedPost
            velocity - totalLeft
        }

        val overscroll = overscrollEffect
        if (overscroll != null && shouldDispatchOverscroll) {
            overscroll.applyToFling(availableVelocity, performFling)
        } else {

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 71–105)

 *
 * `scrollable` is a low-level modifier that handles low-level scrolling input gestures, without
 * other behaviors commonly used for scrollable containers. For building scrollable containers, see
 * [androidx.compose.foundation.scrollableArea]. `scrollableArea` clips its content to its bounds,
 * renders overscroll, and adjusts the direction of scroll gestures to ensure that the content moves
 * with the user's gestures. See also [androidx.compose.foundation.verticalScroll] and
 * [androidx.compose.foundation.horizontalScroll] for high-level scrollable containers that handle
 * layout and move the content as the user scrolls.
 *
 * If you don't need to have fling or nested scroll support, but want to make component simply
 * draggable, consider using [draggable].
 *
 * @sample androidx.compose.foundation.samples.ScrollableSample
 * @param state [ScrollableState] state of the scrollable. Defines how scroll events will be
 *   interpreted by the user land logic and contains useful information about ongoing events.
 * @param orientation orientation of the scrolling
 * @param enabled whether scrolling is enabled
 * @param reverseDirection reverse the direction of the scroll, so top-to-bottom scroll will behave
 *   like bottom to top and left to right will behave like right to left.
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param interactionSource [MutableInteractionSource] that will be used to emit drag events when
 *   this scrollable is being dragged.
 */
@Stable
public fun Modifier.scrollable(
    state: ScrollableState,
    orientation: Orientation,
    enabled: Boolean = true,
    reverseDirection: Boolean = false,
    flingBehavior: FlingBehavior? = null,
    interactionSource: MutableInteractionSource? = null,
): Modifier =
    scrollable(
        state = state,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 736–770)

            performFling(availableVelocity)
        }
    }

    @OptIn(ExperimentalFoundationApi::class)
    override suspend fun doFlingAnimation(available: Velocity): Velocity {
        var result: Velocity = available
        isFlinging = true
        try {
            scroll(scrollPriority = MutatePriority.Default) {
                val nestedScrollScope = this
                val reverseScope =
                    object : ScrollScope {
                        override fun scrollBy(pixels: Float): Float {
                            // Fling has hit the bounds or node left composition,
                            // cancel it to allow continuation. This will conclude this node's
                            // fling, allowing the onPostFling signal to be called with the leftover
                            // velocity from the fling animation. Any nested scroll node above will
                            // be able to pick up the leftover velocity and continue the fling.
                            if (
                                pixels.absoluteValue != 0.0f && !isScrollableNodeAttached.invoke()
                            ) {
                                throw FlingCancellationException()
                            }

                            return nestedScrollScope
                                .scrollByWithOverscroll(
                                    offset = pixels.toOffset().reverseIfNeeded(),
                                    source = SideEffect,
                                )
                                .toFloat()
                                .reverseIfNeeded()
                        }
                    }
                with(reverseScope) {

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 771–805)

                    with(flingBehavior) {
                        result =
                            result.update(
                                performFling(available.toFloat().reverseIfNeeded())
                                    .reverseIfNeeded()
                            )
                    }
                }
            }
        } finally {
            isFlinging = false
        }

        return result
    }

    override fun shouldScrollImmediately(): Boolean {
        return scrollableState.isScrollInProgress || overscrollEffect?.isInProgress ?: false
    }

    /** Opens a scrolling session with nested scrolling and overscroll support. */
    override suspend fun scroll(
        scrollPriority: MutatePriority,
        block: suspend NestedScrollScope.() -> Unit,
    ) {
        scrollableState.scroll(scrollPriority) {
            outerStateScope = this
            block.invoke(nestedScrollScope)
        }
    }

    /** @return true if the pointer input should be reset */
    fun update(
        scrollableState: ScrollableState,
        orientation: Orientation,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 806–840)

        overscrollEffect: OverscrollEffect?,
        reverseDirection: Boolean,
        flingBehavior: FlingBehavior,
        nestedScrollDispatcher: NestedScrollDispatcher,
    ): Boolean {
        var resetPointerInputHandling = false
        if (this.scrollableState != scrollableState) {
            this.scrollableState = scrollableState
            resetPointerInputHandling = true
        }
        this.overscrollEffect = overscrollEffect
        if (this.orientation != orientation) {
            this.orientation = orientation
            resetPointerInputHandling = true
        }
        if (this.reverseDirection != reverseDirection) {
            this.reverseDirection = reverseDirection
            resetPointerInputHandling = true
        }
        this.flingBehavior = flingBehavior
        this.nestedScrollDispatcher = nestedScrollDispatcher
        return resetPointerInputHandling
    }

    fun isVertical(): Boolean = orientation == Vertical
}

private val NoOpScrollScope: ScrollScope =
    object : ScrollScope {
        override fun scrollBy(pixels: Float): Float = pixels
    }

/** Interface to allow re-use across Scrollable and Scrollable2D. */
internal interface ScrollLogic {
    val isFlinging: Boolean

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 841–875)


    fun performRawScroll(scroll: Offset): Offset

    suspend fun doFlingAnimation(available: Velocity): Velocity

    fun shouldScrollImmediately(): Boolean

    /** Opens a scrolling session with nested scrolling and overscroll support. */
    suspend fun scroll(
        scrollPriority: MutatePriority = MutatePriority.Default,
        block: suspend NestedScrollScope.() -> Unit,
    )
}

/**
 * This method returns [ScrollableDefaultFlingBehavior] whose density will be managed by the
 * [ScrollableElement] because it's not created inside [Composable] context. This is different from
 * [rememberPlatformDefaultFlingBehavior] which creates [FlingBehavior] whose density depends on
 * [androidx.compose.ui.platform.LocalDensity] and is automatically resolved.
 */
internal expect fun platformScrollableDefaultFlingBehavior(): ScrollableDefaultFlingBehavior

/**
 * Create and remember default [FlingBehavior] that will represent natural platform fling decay
 * behavior.
 */
@Composable internal expect fun rememberPlatformDefaultFlingBehavior(): FlingBehavior

/**
 * Scroll deltas originating from the semantics system. Should be dispatched as an animation driven
 * event.
 */
private suspend fun ScrollingLogic.semanticsScrollBy(
    offset: Offset,
    dispatchNestedScroll: Boolean,

Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)

## androidx.compose.foundation.gestures Scrollable.kt source (lines 876–898)

): Offset {
    var previousValue = 0f
    scroll(scrollPriority = MutatePriority.Default) {
        animate(0f, offset.toFloat()) { currentValue, _ ->
            val delta = currentValue - previousValue
            val consumed =
                scrollBy(
                        offset = delta.reverseIfNeeded().toOffset(),
                        source = UserInput,
                        dispatchNestedScroll = dispatchNestedScroll,
                    )
                    .toFloat()
                    .reverseIfNeeded()
            previousValue += consumed
        }
    }
    return previousValue.toOffset()
}

internal interface OnScrollChangedDispatcher {
    fun dispatchScrollDeltaInfo(delta: Offset)
}


Sources: [live-androidx-foundation-foundation-foundation-gestures-scrollable-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/gestures/Scrollable.kt)
