---
type: reference
title: androidx.compose.foundation Scroll.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 1
    endLine: 35
    sha256: 10141fbf7aa234535dcb2c465da03e356e6c843ade6f0110d21297f80a2bfb53
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

      import androidx.compose.animation.core.AnimationSpec
      import androidx.compose.animation.core.SpringSpec
      import androidx.compose.foundation.ScrollState.Companion.Saver
      import androidx.compose.foundation.gestures.FlingBehavior
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.ScrollScope
      import androidx.compose.foundation.gestures.ScrollableDefaults
      import androidx.compose.foundation.gestures.ScrollableState
      import androidx.compose.foundation.gestures.animateScrollBy
      import androidx.compose.foundation.gestures.scrollBy
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.annotation.FrequentlyChangingValue
      import androidx.compose.runtime.computedStateOf
      import androidx.compose.runtime.getValue
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 106
    endLine: 140
    sha256: 0dd9ceaa1bda59cd6bb2ab0757b0ba869dda89348c3c40b4032790c38a90fc83
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }

          /**
           * Size of the viewport on the scrollable axis, or 0 if still unknown. Note that this value is
           * only populated after the first measure pass.
           */
          public var viewportSize: Int by mutableIntStateOf(0)
              internal set

          /**
           * [InteractionSource] that will be used to dispatch drag events when this list is being
           * dragged. If you want to know whether the fling (or smooth scroll) is in progress, use
           * [isScrollInProgress].
           */
          public val interactionSource: InteractionSource
              get() = internalInteractionSource

          /**
           * Size of the content along the scrollable axis, or 0 if still unknown. Note that this value is
           * only populated after the first measure pass.
           */
          internal var contentSize by mutableIntStateOf(0)

          /**
           * Whether the direction of scrolling is reversed. Note that this value is only populated after
           * the first measure pass.
           */
          internal var reverseScrolling by mutableStateOf(false)

          internal val internalInteractionSource: MutableInteractionSource = MutableInteractionSource()

          private var _maxValueState = mutableIntStateOf(Int.MAX_VALUE)

          /**
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 141
    endLine: 175
    sha256: 6e4866e704e253c13f95662fb1f3940085a0808748b9e60b90c9075782128335
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           * We receive scroll events in floats but represent the scroll position in ints so we have to
           * manually accumulate the fractional part of the scroll to not completely ignore it.
           */
          private var accumulator: Float = 0f

          private val scrollableState = ScrollableState {
              val absolute = (value + it + accumulator)
              val newValue = absolute.coerceIn(0f, maxValue.toFloat())
              val changed = absolute != newValue
              val consumed = newValue - value
              val consumedInt = consumed.fastRoundToInt()
              value += consumedInt
              accumulator = consumed - consumedInt

              // Avoid floating-point rounding error
              if (changed) consumed else it
          }

          private val _scrollIndicatorState =
              object : ScrollIndicatorState {
                  override val scrollOffset: Int
                      get() = if (reverseScrolling) maxValue - value else value

                  override val contentSize: Int
                      get() = this@ScrollState.contentSize

                  override val viewportSize: Int
                      get() = this@ScrollState.viewportSize
              }

          override suspend fun scroll(
              scrollPriority: MutatePriority,
              block: suspend ScrollScope.() -> Unit,
          ): Unit = scrollableState.scroll(scrollPriority, block)
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 176
    endLine: 210
    sha256: 5068d7034758edc9da99f69519108b61359da859693d8a6a468b841ac76272ef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun dispatchRawDelta(delta: Float): Float = scrollableState.dispatchRawDelta(delta)

          override val isScrollInProgress: Boolean
              get() = scrollableState.isScrollInProgress

          override val canScrollForward: Boolean by computedStateOf { value < maxValue }

          override val canScrollBackward: Boolean by computedStateOf { value > 0 }

          @get:Suppress("GetterSetterNames")
          override val lastScrolledForward: Boolean
              get() = scrollableState.lastScrolledForward

          @get:Suppress("GetterSetterNames")
          override val lastScrolledBackward: Boolean
              get() = scrollableState.lastScrolledBackward

          override val scrollIndicatorState: ScrollIndicatorState?
              get() = _scrollIndicatorState

          /**
           * Scroll to position in pixels with animation.
           *
           * @param value target value in pixels to smooth scroll to, value will be coerced to
           *   0..maxPosition
           * @param animationSpec animation curve for smooth scroll animation
           */
          public suspend fun animateScrollTo(
              value: Int,
              animationSpec: AnimationSpec<Float> = SpringSpec(),
          ) {
              this.animateScrollBy((value - this.value).toFloat(), animationSpec)
          }

          /**
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 211
    endLine: 245
    sha256: 48a0cfda8a1dc2d84da8f305f8cd17b4f340dc60576e8ffe58ecfeb48722c653
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Instantly jump to the given position in pixels.
           *
           * Cancels the currently running scroll, if any, and suspends until the cancellation is
           * complete.
           *
           * @param value number of pixels to scroll by
           * @return the amount of scroll consumed
           * @see animateScrollTo for an animated version
           */
          public suspend fun scrollTo(value: Int): Float = this.scrollBy((value - this.value).toFloat())

          public companion object {
              /** The default [Saver] implementation for [ScrollState]. */
              public val Saver: Saver<ScrollState, *> =
                  Saver(save = { it.value }, restore = { ScrollState(it) })
          }
      }

      /**
       * Modify element to allow to scroll vertically when height of the content is bigger than max
       * constraints allow.
       *
       * @sample androidx.compose.foundation.samples.VerticalScrollExample
       *
       * In order to use this modifier, you need to create and own [ScrollState]
       *
       * See the other overload in order to provide a custom [OverscrollEffect]
       *
       * @param state state of the scroll
       * @param enabled whether or not scrolling via touch input is enabled
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
       *   will mean bottom, when `false`, 0 [ScrollState.value] will mean top
       * @see [rememberScrollState]
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 246
    endLine: 280
    sha256: 7272fbab4a17525dc8ceaeb59f5359e825af3649be64a01d33d0428474e4e77d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun Modifier.verticalScroll(
          state: ScrollState,
          enabled: Boolean = true,
          flingBehavior: FlingBehavior? = null,
          reverseScrolling: Boolean = false,
      ): Modifier =
          scroll(
              state = state,
              isScrollable = enabled,
              reverseScrolling = reverseScrolling,
              flingBehavior = flingBehavior,
              isVertical = true,
              useLocalOverscrollFactory = true,
          )

      /**
       * Modify element to allow to scroll vertically when height of the content is bigger than max
       * constraints allow.
       *
       * @sample androidx.compose.foundation.samples.VerticalScrollExample
       *
       * In order to use this modifier, you need to create and own [ScrollState]
       *
       * @param state state of the scroll
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   modifier. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param enabled whether or not scrolling via touch input is enabled
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
       *   will mean bottom, when `false`, 0 [ScrollState.value] will mean top
       * @see [rememberScrollState]
       */
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 281
    endLine: 315
    sha256: 644fb26f651f8a0c4edc54c7e0ea651bd8e438f54b8d8082d8c7b9278067cf51
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun Modifier.verticalScroll(
          state: ScrollState,
          overscrollEffect: OverscrollEffect?,
          enabled: Boolean = true,
          flingBehavior: FlingBehavior? = null,
          reverseScrolling: Boolean = false,
      ): Modifier =
          scroll(
              state = state,
              isScrollable = enabled,
              reverseScrolling = reverseScrolling,
              flingBehavior = flingBehavior,
              isVertical = true,
              useLocalOverscrollFactory = false,
              overscrollEffect = overscrollEffect,
          )

      /**
       * Modify element to allow to scroll horizontally when width of the content is bigger than max
       * constraints allow.
       *
       * @sample androidx.compose.foundation.samples.HorizontalScrollSample
       *
       * In order to use this modifier, you need to create and own [ScrollState]
       *
       * See the other overload in order to provide a custom [OverscrollEffect]
       *
       * @param state state of the scroll
       * @param enabled whether or not scrolling via touch input is enabled
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
       *   will mean right, when `false`, 0 [ScrollState.value] will mean left
       * @see [rememberScrollState]
       */
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 316
    endLine: 350
    sha256: e6fa957ff5d242161df85e4a4aaa7e532c185a6ba162954aa643ae04ced3eb6e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun Modifier.horizontalScroll(
          state: ScrollState,
          enabled: Boolean = true,
          flingBehavior: FlingBehavior? = null,
          reverseScrolling: Boolean = false,
      ): Modifier =
          scroll(
              state = state,
              isScrollable = enabled,
              reverseScrolling = reverseScrolling,
              flingBehavior = flingBehavior,
              isVertical = false,
              useLocalOverscrollFactory = true,
          )

      /**
       * Modify element to allow to scroll horizontally when width of the content is bigger than max
       * constraints allow.
       *
       * @sample androidx.compose.foundation.samples.HorizontalScrollSample
       *
       * In order to use this modifier, you need to create and own [ScrollState]
       *
       * @param state state of the scroll
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   modifier. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param enabled whether or not scrolling via touch input is enabled
       * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
       *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
       * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
       *   will mean right, when `false`, 0 [ScrollState.value] will mean left
       * @see [rememberScrollState]
       */
      public fun Modifier.horizontalScroll(
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 351
    endLine: 385
    sha256: a96826aeced617ad212ae297de4bf5acc17f0f34a6c0d81b9263aa1c41d43684
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          state: ScrollState,
          overscrollEffect: OverscrollEffect?,
          enabled: Boolean = true,
          flingBehavior: FlingBehavior? = null,
          reverseScrolling: Boolean = false,
      ): Modifier =
          scroll(
              state = state,
              isScrollable = enabled,
              reverseScrolling = reverseScrolling,
              flingBehavior = flingBehavior,
              isVertical = false,
              useLocalOverscrollFactory = false,
              overscrollEffect = overscrollEffect,
          )

      private fun Modifier.scroll(
          state: ScrollState,
          reverseScrolling: Boolean,
          flingBehavior: FlingBehavior?,
          isScrollable: Boolean,
          isVertical: Boolean,
          useLocalOverscrollFactory: Boolean,
          overscrollEffect: OverscrollEffect? = null,
      ): Modifier {
          val orientation = if (isVertical) Orientation.Vertical else Orientation.Horizontal
          val scrollableArea =
              if (useLocalOverscrollFactory) {
                  scrollableArea(
                      state = state,
                      orientation = orientation,
                      interactionSource = state.internalInteractionSource,
                      enabled = isScrollable,
                      reverseScrolling = reverseScrolling,
                      flingBehavior = flingBehavior,
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 36
    endLine: 70
    sha256: d157a7ae7021cec4a9c33d1041b231579cc2387be8ea4ec17b66ad07e74eb60e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.mutableIntStateOf
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.saveable.Saver
      import androidx.compose.runtime.saveable.rememberSaveable
      import androidx.compose.runtime.setValue
      import androidx.compose.runtime.snapshots.Snapshot
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.SemanticsModifierNode
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.semantics.ScrollAxisRange
      import androidx.compose.ui.semantics.SemanticsPropertyReceiver
      import androidx.compose.ui.semantics.horizontalScrollAxisRange
      import androidx.compose.ui.semantics.isTraversalGroup
      import androidx.compose.ui.semantics.verticalScrollAxisRange
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.util.fastCoerceIn
      import androidx.compose.ui.util.fastRoundToInt

      /**
       * Create and [remember] the [ScrollState] based on the currently appropriate scroll configuration
       * to allow changing scroll position or observing scroll behavior.
       *
       * Learn how to control the state of [Modifier.verticalScroll] or [Modifier.horizontalScroll]:
       *
       * @sample androidx.compose.foundation.samples.ControlledScrollableRowSample
       * @param initial initial scroller position to start with
       */
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 386
    endLine: 420
    sha256: 6859f330443b8493429ba1b77ca71149a77161494ecc57c377b241827b782db5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              } else {
                  scrollableArea(
                      state = state,
                      orientation = orientation,
                      overscrollEffect = overscrollEffect,
                      interactionSource = state.internalInteractionSource,
                      enabled = isScrollable,
                      reverseScrolling = reverseScrolling,
                      flingBehavior = flingBehavior,
                  )
              }
          return scrollableArea.then(ScrollingLayoutElement(state, reverseScrolling, isVertical))
      }

      internal class ScrollingLayoutElement(
          val scrollState: ScrollState,
          val reverseScrolling: Boolean,
          val isVertical: Boolean,
      ) : ModifierNodeElement<ScrollNode>() {
          override fun create(): ScrollNode {
              return ScrollNode(
                  state = scrollState,
                  reverseScrolling = reverseScrolling,
                  isVertical = isVertical,
              )
          }

          override fun update(node: ScrollNode) {
              node.state = scrollState
              node.reverseScrolling = reverseScrolling
              node.isVertical = isVertical
          }

          override fun hashCode(): Int {
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 421
    endLine: 455
    sha256: 2336040afe8753e0ccdac0166b023fdbf88dd42bdc14817820cea0cdd6e8cebd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              var result = scrollState.hashCode()
              result = 31 * result + reverseScrolling.hashCode()
              result = 31 * result + isVertical.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              if (other !is ScrollingLayoutElement) return false
              return scrollState == other.scrollState &&
                  reverseScrolling == other.reverseScrolling &&
                  isVertical == other.isVertical
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "scroll"
              properties["state"] = scrollState
              properties["reverseScrolling"] = reverseScrolling
              properties["isVertical"] = isVertical
          }
      }

      internal class ScrollNode(
          var state: ScrollState,
          var reverseScrolling: Boolean,
          var isVertical: Boolean,
      ) : LayoutModifierNode, SemanticsModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              checkScrollableContainerConstraints(
                  constraints,
                  if (isVertical) Orientation.Vertical else Orientation.Horizontal,
              )
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 456
    endLine: 490
    sha256: 3b306b110030ba07fd4a30a5beb320a3db38e519eb161986ea78f6dec37a6139
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val childConstraints =
                  constraints.copy(
                      maxHeight = if (isVertical) Constraints.Infinity else constraints.maxHeight,
                      maxWidth = if (isVertical) constraints.maxWidth else Constraints.Infinity,
                  )
              val placeable = measurable.measure(childConstraints)
              val width = placeable.width.coerceAtMost(constraints.maxWidth)
              val height = placeable.height.coerceAtMost(constraints.maxHeight)
              val scrollHeight = placeable.height - height
              val scrollWidth = placeable.width - width
              val side = if (isVertical) scrollHeight else scrollWidth
              // The max value must be updated before returning from the measure block so that any other
              // chained RemeasurementModifiers that try to perform scrolling based on the new
              // measurements inside onRemeasured are able to scroll to the new max based on the newly-
              // measured size.
              state.maxValue = side
              state.viewportSize = if (isVertical) height else width
              state.contentSize = if (isVertical) placeable.height else placeable.width
              state.reverseScrolling = reverseScrolling
              return layout(width, height) {
                  val scroll = state.value.fastCoerceIn(0, side)
                  val absScroll = if (reverseScrolling) scroll - side else -scroll
                  val xOffset = if (isVertical) 0 else absScroll
                  val yOffset = if (isVertical) absScroll else 0

                  // Tagging as direct manipulation, such that consumers of this offset can decide whether
                  // to exclude this offset on their coordinates calculation. Such as whether an
                  // `approachLayout` will animate it or directly apply the offset without animation.
                  withMotionFrameOfReferencePlacement {
                      placeable.placeRelativeWithLayer(xOffset, yOffset)
                  }
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 491
    endLine: 525
    sha256: 86c1d24915bcafee951a529174266fe5e92057c1542b9307a3ae2d56630a8929
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              return measurable.minIntrinsicWidth(if (isVertical) Constraints.Infinity else height)
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              return measurable.minIntrinsicHeight(if (isVertical) width else Constraints.Infinity)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              return measurable.maxIntrinsicWidth(if (isVertical) Constraints.Infinity else height)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              return measurable.maxIntrinsicHeight(if (isVertical) width else Constraints.Infinity)
          }

          override fun SemanticsPropertyReceiver.applySemantics() {
              isTraversalGroup = true
              val accessibilityScrollState =
                  ScrollAxisRange(
                      value = { state.value.toFloat() },
                      maxValue = { state.maxValue.toFloat() },
                      reverseScrolling = reverseScrolling,
                  )
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 526
    endLine: 533
    sha256: 052642768716cd35c802c941c6cb7930dc1634f38ea3d34b78888d42b564c09d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              if (isVertical) {
                  this.verticalScrollAxisRange = accessibilityScrollState
              } else {
                  this.horizontalScrollAxisRange = accessibilityScrollState
              }
          }
      }
  - id: live-androidx-foundation-foundation-foundation-scroll-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt
    startLine: 71
    endLine: 105
    sha256: c1497f658d60d36f41fb87c671ff630e66006863abb744a0768e63ce9775c655
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun rememberScrollState(initial: Int = 0): ScrollState {
          return rememberSaveable(saver = ScrollState.Saver) { ScrollState(initial = initial) }
      }

      /**
       * State of the scroll. Allows the developer to change the scroll position or get current state by
       * calling methods on this object. To be hosted and passed to [Modifier.verticalScroll] or
       * [Modifier.horizontalScroll]
       *
       * To create and automatically remember [ScrollState] with default parameters use
       * [rememberScrollState].
       *
       * Learn how to control the state of [Modifier.verticalScroll] or [Modifier.horizontalScroll]:
       *
       * @sample androidx.compose.foundation.samples.ControlledScrollableRowSample
       * @param initial value of the scroll
       */
      @Stable
      public class ScrollState(initial: Int) : ScrollableState {

          /** current scroll position value in pixels */
          @get:FrequentlyChangingValue
          public var value: Int by mutableIntStateOf(initial)
              private set

          /** maximum bound for [value], or [Int.MAX_VALUE] if still unknown */
          public var maxValue: Int
              get() = _maxValueState.intValue
              internal set(newMax) {
                  _maxValueState.intValue = newMax
                  Snapshot.withoutReadObservation {
                      if (value > newMax) {
                          value = newMax
                      }
compose:
  id: live-androidx-foundation-foundation-foundation-scroll
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-1
      title: androidx.compose.foundation Scroll.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-106
      title: androidx.compose.foundation Scroll.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-141
      title: androidx.compose.foundation Scroll.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.ScrollState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-176
      title: androidx.compose.foundation Scroll.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-211
      title: androidx.compose.foundation Scroll.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.ScrollState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-246
      title: androidx.compose.foundation Scroll.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.verticalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-281
      title: androidx.compose.foundation Scroll.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.verticalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-316
      title: androidx.compose.foundation Scroll.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.horizontalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-351
      title: androidx.compose.foundation Scroll.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.ScrollState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-36
      title: androidx.compose.foundation Scroll.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.verticalScroll
        - androidx.compose.foundation.horizontalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-386
      title: androidx.compose.foundation Scroll.kt source (lines 386–420)
      aliases:
        - androidx.compose.foundation.ScrollState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-421
      title: androidx.compose.foundation Scroll.kt source (lines 421–455)
      aliases:
        - androidx.compose.foundation.ScrollState
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-456
      title: androidx.compose.foundation Scroll.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-491
      title: androidx.compose.foundation Scroll.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-526
      title: androidx.compose.foundation Scroll.kt source (lines 526–533)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-scroll-lines-71
      title: androidx.compose.foundation Scroll.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.rememberScrollState
        - androidx.compose.foundation.ScrollState
        - androidx.compose.foundation.verticalScroll
        - androidx.compose.foundation.horizontalScroll
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-scroll-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation Scroll.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt

## androidx.compose.foundation Scroll.kt source (lines 1–35)

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

import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.SpringSpec
import androidx.compose.foundation.ScrollState.Companion.Saver
import androidx.compose.foundation.gestures.FlingBehavior
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.ScrollScope
import androidx.compose.foundation.gestures.ScrollableDefaults
import androidx.compose.foundation.gestures.ScrollableState
import androidx.compose.foundation.gestures.animateScrollBy
import androidx.compose.foundation.gestures.scrollBy
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.annotation.FrequentlyChangingValue
import androidx.compose.runtime.computedStateOf
import androidx.compose.runtime.getValue

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 106–140)

            }
        }

    /**
     * Size of the viewport on the scrollable axis, or 0 if still unknown. Note that this value is
     * only populated after the first measure pass.
     */
    public var viewportSize: Int by mutableIntStateOf(0)
        internal set

    /**
     * [InteractionSource] that will be used to dispatch drag events when this list is being
     * dragged. If you want to know whether the fling (or smooth scroll) is in progress, use
     * [isScrollInProgress].
     */
    public val interactionSource: InteractionSource
        get() = internalInteractionSource

    /**
     * Size of the content along the scrollable axis, or 0 if still unknown. Note that this value is
     * only populated after the first measure pass.
     */
    internal var contentSize by mutableIntStateOf(0)

    /**
     * Whether the direction of scrolling is reversed. Note that this value is only populated after
     * the first measure pass.
     */
    internal var reverseScrolling by mutableStateOf(false)

    internal val internalInteractionSource: MutableInteractionSource = MutableInteractionSource()

    private var _maxValueState = mutableIntStateOf(Int.MAX_VALUE)

    /**

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 141–175)

     * We receive scroll events in floats but represent the scroll position in ints so we have to
     * manually accumulate the fractional part of the scroll to not completely ignore it.
     */
    private var accumulator: Float = 0f

    private val scrollableState = ScrollableState {
        val absolute = (value + it + accumulator)
        val newValue = absolute.coerceIn(0f, maxValue.toFloat())
        val changed = absolute != newValue
        val consumed = newValue - value
        val consumedInt = consumed.fastRoundToInt()
        value += consumedInt
        accumulator = consumed - consumedInt

        // Avoid floating-point rounding error
        if (changed) consumed else it
    }

    private val _scrollIndicatorState =
        object : ScrollIndicatorState {
            override val scrollOffset: Int
                get() = if (reverseScrolling) maxValue - value else value

            override val contentSize: Int
                get() = this@ScrollState.contentSize

            override val viewportSize: Int
                get() = this@ScrollState.viewportSize
        }

    override suspend fun scroll(
        scrollPriority: MutatePriority,
        block: suspend ScrollScope.() -> Unit,
    ): Unit = scrollableState.scroll(scrollPriority, block)


Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 176–210)

    override fun dispatchRawDelta(delta: Float): Float = scrollableState.dispatchRawDelta(delta)

    override val isScrollInProgress: Boolean
        get() = scrollableState.isScrollInProgress

    override val canScrollForward: Boolean by computedStateOf { value < maxValue }

    override val canScrollBackward: Boolean by computedStateOf { value > 0 }

    @get:Suppress("GetterSetterNames")
    override val lastScrolledForward: Boolean
        get() = scrollableState.lastScrolledForward

    @get:Suppress("GetterSetterNames")
    override val lastScrolledBackward: Boolean
        get() = scrollableState.lastScrolledBackward

    override val scrollIndicatorState: ScrollIndicatorState?
        get() = _scrollIndicatorState

    /**
     * Scroll to position in pixels with animation.
     *
     * @param value target value in pixels to smooth scroll to, value will be coerced to
     *   0..maxPosition
     * @param animationSpec animation curve for smooth scroll animation
     */
    public suspend fun animateScrollTo(
        value: Int,
        animationSpec: AnimationSpec<Float> = SpringSpec(),
    ) {
        this.animateScrollBy((value - this.value).toFloat(), animationSpec)
    }

    /**

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 211–245)

     * Instantly jump to the given position in pixels.
     *
     * Cancels the currently running scroll, if any, and suspends until the cancellation is
     * complete.
     *
     * @param value number of pixels to scroll by
     * @return the amount of scroll consumed
     * @see animateScrollTo for an animated version
     */
    public suspend fun scrollTo(value: Int): Float = this.scrollBy((value - this.value).toFloat())

    public companion object {
        /** The default [Saver] implementation for [ScrollState]. */
        public val Saver: Saver<ScrollState, *> =
            Saver(save = { it.value }, restore = { ScrollState(it) })
    }
}

/**
 * Modify element to allow to scroll vertically when height of the content is bigger than max
 * constraints allow.
 *
 * @sample androidx.compose.foundation.samples.VerticalScrollExample
 *
 * In order to use this modifier, you need to create and own [ScrollState]
 *
 * See the other overload in order to provide a custom [OverscrollEffect]
 *
 * @param state state of the scroll
 * @param enabled whether or not scrolling via touch input is enabled
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
 *   will mean bottom, when `false`, 0 [ScrollState.value] will mean top
 * @see [rememberScrollState]

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 246–280)

 */
public fun Modifier.verticalScroll(
    state: ScrollState,
    enabled: Boolean = true,
    flingBehavior: FlingBehavior? = null,
    reverseScrolling: Boolean = false,
): Modifier =
    scroll(
        state = state,
        isScrollable = enabled,
        reverseScrolling = reverseScrolling,
        flingBehavior = flingBehavior,
        isVertical = true,
        useLocalOverscrollFactory = true,
    )

/**
 * Modify element to allow to scroll vertically when height of the content is bigger than max
 * constraints allow.
 *
 * @sample androidx.compose.foundation.samples.VerticalScrollExample
 *
 * In order to use this modifier, you need to create and own [ScrollState]
 *
 * @param state state of the scroll
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   modifier. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param enabled whether or not scrolling via touch input is enabled
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
 *   will mean bottom, when `false`, 0 [ScrollState.value] will mean top
 * @see [rememberScrollState]
 */

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 281–315)

public fun Modifier.verticalScroll(
    state: ScrollState,
    overscrollEffect: OverscrollEffect?,
    enabled: Boolean = true,
    flingBehavior: FlingBehavior? = null,
    reverseScrolling: Boolean = false,
): Modifier =
    scroll(
        state = state,
        isScrollable = enabled,
        reverseScrolling = reverseScrolling,
        flingBehavior = flingBehavior,
        isVertical = true,
        useLocalOverscrollFactory = false,
        overscrollEffect = overscrollEffect,
    )

/**
 * Modify element to allow to scroll horizontally when width of the content is bigger than max
 * constraints allow.
 *
 * @sample androidx.compose.foundation.samples.HorizontalScrollSample
 *
 * In order to use this modifier, you need to create and own [ScrollState]
 *
 * See the other overload in order to provide a custom [OverscrollEffect]
 *
 * @param state state of the scroll
 * @param enabled whether or not scrolling via touch input is enabled
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
 *   will mean right, when `false`, 0 [ScrollState.value] will mean left
 * @see [rememberScrollState]
 */

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 316–350)

public fun Modifier.horizontalScroll(
    state: ScrollState,
    enabled: Boolean = true,
    flingBehavior: FlingBehavior? = null,
    reverseScrolling: Boolean = false,
): Modifier =
    scroll(
        state = state,
        isScrollable = enabled,
        reverseScrolling = reverseScrolling,
        flingBehavior = flingBehavior,
        isVertical = false,
        useLocalOverscrollFactory = true,
    )

/**
 * Modify element to allow to scroll horizontally when width of the content is bigger than max
 * constraints allow.
 *
 * @sample androidx.compose.foundation.samples.HorizontalScrollSample
 *
 * In order to use this modifier, you need to create and own [ScrollState]
 *
 * @param state state of the scroll
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   modifier. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param enabled whether or not scrolling via touch input is enabled
 * @param flingBehavior logic describing fling behavior when drag has finished with velocity. If
 *   `null`, default from [ScrollableDefaults.flingBehavior] will be used.
 * @param reverseScrolling reverse the direction of scrolling, when `true`, 0 [ScrollState.value]
 *   will mean right, when `false`, 0 [ScrollState.value] will mean left
 * @see [rememberScrollState]
 */
public fun Modifier.horizontalScroll(

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 351–385)

    state: ScrollState,
    overscrollEffect: OverscrollEffect?,
    enabled: Boolean = true,
    flingBehavior: FlingBehavior? = null,
    reverseScrolling: Boolean = false,
): Modifier =
    scroll(
        state = state,
        isScrollable = enabled,
        reverseScrolling = reverseScrolling,
        flingBehavior = flingBehavior,
        isVertical = false,
        useLocalOverscrollFactory = false,
        overscrollEffect = overscrollEffect,
    )

private fun Modifier.scroll(
    state: ScrollState,
    reverseScrolling: Boolean,
    flingBehavior: FlingBehavior?,
    isScrollable: Boolean,
    isVertical: Boolean,
    useLocalOverscrollFactory: Boolean,
    overscrollEffect: OverscrollEffect? = null,
): Modifier {
    val orientation = if (isVertical) Orientation.Vertical else Orientation.Horizontal
    val scrollableArea =
        if (useLocalOverscrollFactory) {
            scrollableArea(
                state = state,
                orientation = orientation,
                interactionSource = state.internalInteractionSource,
                enabled = isScrollable,
                reverseScrolling = reverseScrolling,
                flingBehavior = flingBehavior,

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 36–70)

import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.Saver
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.SemanticsModifierNode
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.semantics.ScrollAxisRange
import androidx.compose.ui.semantics.SemanticsPropertyReceiver
import androidx.compose.ui.semantics.horizontalScrollAxisRange
import androidx.compose.ui.semantics.isTraversalGroup
import androidx.compose.ui.semantics.verticalScrollAxisRange
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.util.fastCoerceIn
import androidx.compose.ui.util.fastRoundToInt

/**
 * Create and [remember] the [ScrollState] based on the currently appropriate scroll configuration
 * to allow changing scroll position or observing scroll behavior.
 *
 * Learn how to control the state of [Modifier.verticalScroll] or [Modifier.horizontalScroll]:
 *
 * @sample androidx.compose.foundation.samples.ControlledScrollableRowSample
 * @param initial initial scroller position to start with
 */

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 386–420)

            )
        } else {
            scrollableArea(
                state = state,
                orientation = orientation,
                overscrollEffect = overscrollEffect,
                interactionSource = state.internalInteractionSource,
                enabled = isScrollable,
                reverseScrolling = reverseScrolling,
                flingBehavior = flingBehavior,
            )
        }
    return scrollableArea.then(ScrollingLayoutElement(state, reverseScrolling, isVertical))
}

internal class ScrollingLayoutElement(
    val scrollState: ScrollState,
    val reverseScrolling: Boolean,
    val isVertical: Boolean,
) : ModifierNodeElement<ScrollNode>() {
    override fun create(): ScrollNode {
        return ScrollNode(
            state = scrollState,
            reverseScrolling = reverseScrolling,
            isVertical = isVertical,
        )
    }

    override fun update(node: ScrollNode) {
        node.state = scrollState
        node.reverseScrolling = reverseScrolling
        node.isVertical = isVertical
    }

    override fun hashCode(): Int {

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 421–455)

        var result = scrollState.hashCode()
        result = 31 * result + reverseScrolling.hashCode()
        result = 31 * result + isVertical.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        if (other !is ScrollingLayoutElement) return false
        return scrollState == other.scrollState &&
            reverseScrolling == other.reverseScrolling &&
            isVertical == other.isVertical
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "scroll"
        properties["state"] = scrollState
        properties["reverseScrolling"] = reverseScrolling
        properties["isVertical"] = isVertical
    }
}

internal class ScrollNode(
    var state: ScrollState,
    var reverseScrolling: Boolean,
    var isVertical: Boolean,
) : LayoutModifierNode, SemanticsModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        checkScrollableContainerConstraints(
            constraints,
            if (isVertical) Orientation.Vertical else Orientation.Horizontal,
        )


Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 456–490)

        val childConstraints =
            constraints.copy(
                maxHeight = if (isVertical) Constraints.Infinity else constraints.maxHeight,
                maxWidth = if (isVertical) constraints.maxWidth else Constraints.Infinity,
            )
        val placeable = measurable.measure(childConstraints)
        val width = placeable.width.coerceAtMost(constraints.maxWidth)
        val height = placeable.height.coerceAtMost(constraints.maxHeight)
        val scrollHeight = placeable.height - height
        val scrollWidth = placeable.width - width
        val side = if (isVertical) scrollHeight else scrollWidth
        // The max value must be updated before returning from the measure block so that any other
        // chained RemeasurementModifiers that try to perform scrolling based on the new
        // measurements inside onRemeasured are able to scroll to the new max based on the newly-
        // measured size.
        state.maxValue = side
        state.viewportSize = if (isVertical) height else width
        state.contentSize = if (isVertical) placeable.height else placeable.width
        state.reverseScrolling = reverseScrolling
        return layout(width, height) {
            val scroll = state.value.fastCoerceIn(0, side)
            val absScroll = if (reverseScrolling) scroll - side else -scroll
            val xOffset = if (isVertical) 0 else absScroll
            val yOffset = if (isVertical) absScroll else 0

            // Tagging as direct manipulation, such that consumers of this offset can decide whether
            // to exclude this offset on their coordinates calculation. Such as whether an
            // `approachLayout` will animate it or directly apply the offset without animation.
            withMotionFrameOfReferencePlacement {
                placeable.placeRelativeWithLayer(xOffset, yOffset)
            }
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 491–525)

        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        return measurable.minIntrinsicWidth(if (isVertical) Constraints.Infinity else height)
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        return measurable.minIntrinsicHeight(if (isVertical) width else Constraints.Infinity)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        return measurable.maxIntrinsicWidth(if (isVertical) Constraints.Infinity else height)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        return measurable.maxIntrinsicHeight(if (isVertical) width else Constraints.Infinity)
    }

    override fun SemanticsPropertyReceiver.applySemantics() {
        isTraversalGroup = true
        val accessibilityScrollState =
            ScrollAxisRange(
                value = { state.value.toFloat() },
                maxValue = { state.maxValue.toFloat() },
                reverseScrolling = reverseScrolling,
            )

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 526–533)

        if (isVertical) {
            this.verticalScrollAxisRange = accessibilityScrollState
        } else {
            this.horizontalScrollAxisRange = accessibilityScrollState
        }
    }
}


Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)

## androidx.compose.foundation Scroll.kt source (lines 71–105)

@Composable
public fun rememberScrollState(initial: Int = 0): ScrollState {
    return rememberSaveable(saver = ScrollState.Saver) { ScrollState(initial = initial) }
}

/**
 * State of the scroll. Allows the developer to change the scroll position or get current state by
 * calling methods on this object. To be hosted and passed to [Modifier.verticalScroll] or
 * [Modifier.horizontalScroll]
 *
 * To create and automatically remember [ScrollState] with default parameters use
 * [rememberScrollState].
 *
 * Learn how to control the state of [Modifier.verticalScroll] or [Modifier.horizontalScroll]:
 *
 * @sample androidx.compose.foundation.samples.ControlledScrollableRowSample
 * @param initial value of the scroll
 */
@Stable
public class ScrollState(initial: Int) : ScrollableState {

    /** current scroll position value in pixels */
    @get:FrequentlyChangingValue
    public var value: Int by mutableIntStateOf(initial)
        private set

    /** maximum bound for [value], or [Int.MAX_VALUE] if still unknown */
    public var maxValue: Int
        get() = _maxValueState.intValue
        internal set(newMax) {
            _maxValueState.intValue = newMax
            Snapshot.withoutReadObservation {
                if (value > newMax) {
                    value = newMax
                }

Sources: [live-androidx-foundation-foundation-foundation-scroll-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Scroll.kt)
