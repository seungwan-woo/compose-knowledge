---
type: reference
title: androidx.compose.foundation.layout Row.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 1
    endLine: 35
    sha256: a9a00917183f83b556b6aedcef4960b37c520deb6b9606597b1405bb18f23364
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

      package androidx.compose.foundation.layout

      import androidx.annotation.FloatRange
      import androidx.compose.foundation.layout.internal.JvmDefaultWithCompatibility
      import androidx.compose.foundation.layout.internal.requirePrecondition
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.layout.FirstBaseline
      import androidx.compose.ui.layout.HorizontalAlignmentLine
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.LastBaseline
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-105-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 105
    endLine: 139
    sha256: aaf44f2fec1e564f2a38defa69dee8834138ca31ec29bc7968feaf020269cf60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
      }

      /** MeasureBlocks to use when horizontalArrangement and verticalAlignment are not provided. */
      @PublishedApi
      internal val DefaultRowMeasurePolicy: MeasurePolicy =
          RowMeasurePolicy(horizontalArrangement = Arrangement.Start, verticalAlignment = Alignment.Top)

      @PublishedApi
      @Composable
      internal fun rowMeasurePolicy(
          horizontalArrangement: Arrangement.Horizontal,
          verticalAlignment: Alignment.Vertical,
      ): MeasurePolicy =
          if (horizontalArrangement == Arrangement.Start && verticalAlignment == Alignment.Top) {
              DefaultRowMeasurePolicy
          } else {
              remember(horizontalArrangement, verticalAlignment) {
                  RowMeasurePolicy(
                      horizontalArrangement = horizontalArrangement,
                      verticalAlignment = verticalAlignment,
                  )
              }
          }

      internal data class RowMeasurePolicy(
          private val horizontalArrangement: Arrangement.Horizontal,
          private val verticalAlignment: Alignment.Vertical,
      ) : MeasurePolicy, RowColumnMeasurePolicy {
          override fun Placeable.mainAxisSize() = width

          override fun Placeable.crossAxisSize() = height

          override fun MeasureScope.measure(
              measurables: List<Measurable>,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-140-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 140
    endLine: 174
    sha256: 35c95de087cdccaa1b2df0d4f61f59d5e04d23c50b7e09fa6f355afcf9bee017
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              constraints: Constraints,
          ): MeasureResult {
              return measure(
                  constraints.minWidth,
                  constraints.minHeight,
                  constraints.maxWidth,
                  constraints.maxHeight,
                  horizontalArrangement.spacing.roundToPx(),
                  this,
                  measurables,
                  arrayOfNulls(measurables.size),
                  0,
                  measurables.size,
              )
          }

          override fun populateMainAxisPositions(
              mainAxisLayoutSize: Int,
              childrenMainAxisSize: IntArray,
              mainAxisPositions: IntArray,
              measureScope: MeasureScope,
          ) {
              with(horizontalArrangement) {
                  measureScope.arrange(
                      mainAxisLayoutSize,
                      childrenMainAxisSize,
                      measureScope.layoutDirection,
                      mainAxisPositions,
                  )
              }
          }

          override fun placeHelper(
              placeables: Array<Placeable?>,
              measureScope: MeasureScope,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-175-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 175
    endLine: 209
    sha256: 9957565ca98b9364f42d958f2ef4dc4e32e856094f4811e7e684a4dab8f64cfe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              beforeCrossAxisAlignmentLine: Int,
              mainAxisPositions: IntArray,
              mainAxisLayoutSize: Int,
              crossAxisLayoutSize: Int,
              crossAxisOffset: IntArray?,
              currentLineIndex: Int,
              startIndex: Int,
              endIndex: Int,
          ): MeasureResult {
              return with(measureScope) {
                  layout(mainAxisLayoutSize, crossAxisLayoutSize) {
                      placeables.forEachIndexed { i, placeable ->
                          val crossAxisPosition =
                              getCrossAxisPosition(
                                  placeable!!,
                                  placeable.rowColumnParentData,
                                  crossAxisLayoutSize,
                                  beforeCrossAxisAlignmentLine,
                              )
                          placeable.place(mainAxisPositions[i], crossAxisPosition)
                      }
                  }
              }
          }

          override fun createConstraints(
              mainAxisMin: Int,
              crossAxisMin: Int,
              mainAxisMax: Int,
              crossAxisMax: Int,
              isPrioritizing: Boolean,
          ): Constraints {
              return createRowConstraints(
                  isPrioritizing,
                  mainAxisMin,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-210-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 210
    endLine: 244
    sha256: dca09d4325aa424a16b8d18cb68133b2a5774a4392e971c30bd9f14639815704
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  crossAxisMin,
                  mainAxisMax,
                  crossAxisMax,
              )
          }

          private fun getCrossAxisPosition(
              placeable: Placeable,
              parentData: RowColumnParentData?,
              crossAxisLayoutSize: Int,
              beforeCrossAxisAlignmentLine: Int,
          ): Int {
              val childCrossAlignment = parentData?.crossAxisAlignment
              return childCrossAlignment?.align(
                  size = crossAxisLayoutSize,
                  itemCrossAxisSize = placeable.crossAxisSize(),
                  layoutDirection = LayoutDirection.Ltr,
                  placeable = placeable,
                  beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine,
              ) ?: verticalAlignment.align(placeable.crossAxisSize(), crossAxisLayoutSize)
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) =
              IntrinsicMeasureBlocks.HorizontalMinWidth(
                  measurables,
                  height,
                  horizontalArrangement.spacing.roundToPx(),
              )

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-245-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 245
    endLine: 279
    sha256: 09a722ab103dfeb16d0cd83ae776ffc4c34f051f85c173a643ae1757c4289b75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) =
              IntrinsicMeasureBlocks.HorizontalMinHeight(
                  measurables,
                  width,
                  horizontalArrangement.spacing.roundToPx(),
              )

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) =
              IntrinsicMeasureBlocks.HorizontalMaxWidth(
                  measurables,
                  height,
                  horizontalArrangement.spacing.roundToPx(),
              )

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) =
              IntrinsicMeasureBlocks.HorizontalMaxHeight(
                  measurables,
                  width,
                  horizontalArrangement.spacing.roundToPx(),
              )
      }

      internal fun createRowConstraints(
          isPrioritizing: Boolean,
          mainAxisMin: Int,
          crossAxisMin: Int,
          mainAxisMax: Int,
          crossAxisMax: Int,
      ): Constraints {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-280-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 280
    endLine: 314
    sha256: 6ae9d7cbe80358208ba79b3be1352b87fea53ea14f1978097aa2ccd36652eafc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return if (!isPrioritizing) {
              Constraints(
                  maxWidth = mainAxisMax,
                  maxHeight = crossAxisMax,
                  minWidth = mainAxisMin,
                  minHeight = crossAxisMin,
              )
          } else {
              Constraints.fitPrioritizingWidth(
                  maxWidth = mainAxisMax,
                  maxHeight = crossAxisMax,
                  minWidth = mainAxisMin,
                  minHeight = crossAxisMin,
              )
          }
      }

      /** Scope for the children of [Row]. */
      @LayoutScopeMarker
      @Immutable
      @JvmDefaultWithCompatibility
      public interface RowScope {
          /**
           * Size the element's width proportional to its [weight] relative to other weighted sibling
           * elements in the [Row]. The parent will divide the horizontal space remaining after measuring
           * unweighted child elements and distribute it according to this weight. When [fill] is true,
           * the element will be forced to occupy the whole width allocated to it. Otherwise, the element
           * is allowed to be smaller - this will result in [Row] being smaller, as the unused allocated
           * width will not be redistributed to other siblings.
           *
           * @param weight The proportional width to give to this element, as related to the total of all
           *   weighted siblings. Must be positive.
           * @param fill When `true`, the element will occupy the whole width allocated.
           */
          @Stable
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-315-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 315
    endLine: 349
    sha256: 004352a19e10cac340f7b8936d219a0b1d2e5a61f98544000a758a7ab226478b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public fun Modifier.weight(
              @FloatRange(from = 0.0, fromInclusive = false) weight: Float,
              fill: Boolean = true,
          ): Modifier

          /**
           * Align the element vertically within the [Row]. This alignment will have priority over the
           * [Row]'s `verticalAlignment` parameter.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleAlignInRow
           */
          @Stable public fun Modifier.align(alignment: Alignment.Vertical): Modifier

          /**
           * Position the element vertically such that its [alignmentLine] aligns with sibling elements
           * also configured to `alignBy`. `alignBy` is a form of [align], so both modifiers will not work
           * together if specified for the same layout. `alignBy` can be used to align two layouts by
           * baseline inside a [Row], using `alignBy(FirstBaseline)`. Within a [Row], all components with
           * `alignBy` will align vertically using the specified [HorizontalAlignmentLine]s or values
           * provided using the other `alignBy` overload, forming a sibling group. At least one element of
           * the sibling group will be placed as it had [Alignment.Top] align in [Row], and the alignment
           * of the other siblings will be then determined such that the alignment lines coincide. Note
           * that if only one element in a [Row] has the `alignBy` modifier specified the element will be
           * positioned as if it had [Alignment.Top] align.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
           * @see alignByBaseline
           */
          @Stable public fun Modifier.alignBy(alignmentLine: HorizontalAlignmentLine): Modifier

          /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-350-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 350
    endLine: 384
    sha256: aabca9c01f219eebc9bf1f308c00ec8afb8140742a9186094fddefbbccc51968
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Position the element vertically such that its first baseline aligns with sibling elements
           * also configured to `alignByBaseline` or `alignBy`. This modifier is a form of [align], so
           * both modifiers will not work together if specified for the same layout. `alignByBaseline` is
           * a particular case of `alignBy`. See `alignBy` for more details.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
           * @see alignBy
           */
          @Stable public fun Modifier.alignByBaseline(): Modifier

          /**
           * Position the element vertically such that the alignment line for the content as determined by
           * [alignmentLineBlock] aligns with sibling elements also configured to `alignBy`. `alignBy` is
           * a form of [align], so both modifiers will not work together if specified for the same layout.
           * Within a [Row], all components with `alignBy` will align vertically using the specified
           * [HorizontalAlignmentLine]s or values obtained from [alignmentLineBlock], forming a sibling
           * group. At least one element of the sibling group will be placed as it had [Alignment.Top]
           * align in [Row], and the alignment of the other siblings will be then determined such that the
           * alignment lines coincide. Note that if only one element in a [Row] has the `alignBy` modifier
           * specified the element will be positioned as if it had [Alignment.Top] align.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
           */
          @Stable public fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int): Modifier
      }

      @PublishedApi
      internal object RowScopeInstance : RowScope {
          @Stable
          override fun Modifier.weight(weight: Float, fill: Boolean): Modifier {
              requirePrecondition(weight > 0.0) { "invalid weight; must be greater than zero" }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 36
    endLine: 69
    sha256: 7b47510caee83d984a7a7cb1e16339ae09f68c479e965ff0bd36f5b5024f9fc7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Measured
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.LayoutDirection

      /**
       * A layout composable that places its children in a horizontal sequence. For a layout composable
       * that places its children in a vertical sequence, see [Column]. Note that by default items do not
       * scroll; see `Modifier.horizontalScroll` to add this behavior. For a horizontally scrollable list
       * that only composes and lays out the currently visible items see `LazyRow`.
       *
       * The [Row] layout is able to assign children widths according to their weights provided using the
       * [RowScope.weight] modifier. If a child is not provided a weight, it will be asked for its
       * preferred width before the sizes of the children with weights are calculated proportionally to
       * their weight based on the remaining available space. Note that if the [Row] is horizontally
       * scrollable or part of a horizontally scrollable container, any provided weights will be
       * disregarded as the remaining available space will be infinite.
       *
       * When none of its children have weights, a [Row] will be as small as possible to fit its children
       * one next to the other. In order to change the width of the [Row], use the [Modifier.width]
       * modifiers; e.g. to make it fill the available width [Modifier.fillMaxWidth] can be used. If at
       * least one child of a [Row] has a [weight][RowScope.weight], the [Row] will fill the available
       * width, so there is no need for [Modifier.fillMaxWidth]. However, if [Row]'s size should be
       * limited, the [Modifier.width] or [Modifier.size] layout modifiers should be applied.
       *
       * When the size of the [Row] is larger than the sum of its children sizes, a
       * [horizontalArrangement] can be specified to define the positioning of the children inside the
       * [Row]. See [Arrangement] for available positioning behaviors; a custom arrangement can also be
       * defined using the constructor of [Arrangement]. Below is an illustration of different horizontal
       * arrangements:
       *
       * ![Row
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-385-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 385
    endLine: 411
    sha256: ff130555972b5257280ba3e241fcaf416a8f31e3c8c448d089bdec4498ec5503
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              return this.then(
                  LayoutWeightElement(
                      // Coerce Float.POSITIVE_INFINITY to Float.MAX_VALUE to avoid errors
                      weight = weight.coerceAtMost(Float.MAX_VALUE),
                      fill = fill,
                  )
              )
          }

          @Stable
          override fun Modifier.align(alignment: Alignment.Vertical) =
              this.then(VerticalAlignElement(alignment))

          @Stable
          override fun Modifier.alignBy(alignmentLine: HorizontalAlignmentLine) =
              this.then(WithAlignmentLineElement(alignmentLine = alignmentLine))

          @Stable override fun Modifier.alignByBaseline() = alignBy(FirstBaseline)

          override fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int) =
              this.then(
                  WithAlignmentLineBlockElement(
                      block = AlignmentLineProviderBlock { alignmentLineBlock(it) }
                  )
              )
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-70-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt
    startLine: 70
    endLine: 104
    sha256: d4b39a031702c8aca94213a83c84cfb1acea8fca2b99dd3fc8034cacd58b8674
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/row_arrangement_visualization.gif)
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleRow
       *
       * Note that if two or more Text components are placed in a [Row], normally they should be aligned
       * by their first baselines. [Row] as a general purpose container does not do it automatically so
       * developers need to handle this manually. This is achieved by adding a [RowScope.alignByBaseline]
       * modifier to every such Text component. By default this modifier aligns by [FirstBaseline]. If,
       * however, you need to align Texts by [LastBaseline] for example, use a more general
       * [RowScope.alignBy] modifier.
       *
       * See example of using Texts inside the Row:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
       * @param modifier The modifier to be applied to the Row.
       * @param horizontalArrangement The horizontal arrangement of the layout's children.
       * @param verticalAlignment The vertical alignment of the layout's children.
       * @param content The content of the Row
       * @see Column
       * @see [androidx.compose.foundation.lazy.LazyRow]
       */
      @Composable
      public inline fun Row(
          modifier: Modifier = Modifier,
          horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
          verticalAlignment: Alignment.Vertical = Alignment.Top,
          content: @Composable RowScope.() -> Unit,
      ) {
          val measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment)
          Layout(
              content = { RowScopeInstance.content() },
              measurePolicy = measurePolicy,
              modifier = modifier,
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-row
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-1
      title: androidx.compose.foundation.layout Row.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-105
      title: androidx.compose.foundation.layout Row.kt source (lines 105–139)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-105-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-140
      title: androidx.compose.foundation.layout Row.kt source (lines 140–174)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-140-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-175
      title: androidx.compose.foundation.layout Row.kt source (lines 175–209)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-175-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-210
      title: androidx.compose.foundation.layout Row.kt source (lines 210–244)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-210-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-245
      title: androidx.compose.foundation.layout Row.kt source (lines 245–279)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-245-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-280
      title: androidx.compose.foundation.layout Row.kt source (lines 280–314)
      aliases:
        - androidx.compose.foundation.layout.Row
        - androidx.compose.foundation.layout.RowScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-280-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-315
      title: androidx.compose.foundation.layout Row.kt source (lines 315–349)
      aliases:
        - androidx.compose.foundation.layout.Row
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-315-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-350
      title: androidx.compose.foundation.layout Row.kt source (lines 350–384)
      aliases:
        - androidx.compose.foundation.layout.Row
        - androidx.compose.foundation.layout.RowScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-350-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-36
      title: androidx.compose.foundation.layout Row.kt source (lines 36–69)
      aliases:
        - androidx.compose.foundation.layout.Row
        - androidx.compose.foundation.layout.RowScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-385
      title: androidx.compose.foundation.layout Row.kt source (lines 385–411)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-385-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-row-lines-70
      title: androidx.compose.foundation.layout Row.kt source (lines 70–104)
      aliases:
        - androidx.compose.foundation.layout.Row
        - androidx.compose.foundation.layout.RowScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-row-lines-70-source
      relatedIds: []
---

# androidx.compose.foundation.layout Row.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt

## androidx.compose.foundation.layout Row.kt source (lines 1–35)

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

package androidx.compose.foundation.layout

import androidx.annotation.FloatRange
import androidx.compose.foundation.layout.internal.JvmDefaultWithCompatibility
import androidx.compose.foundation.layout.internal.requirePrecondition
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.FirstBaseline
import androidx.compose.ui.layout.HorizontalAlignmentLine
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.LastBaseline
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 105–139)

    )
}

/** MeasureBlocks to use when horizontalArrangement and verticalAlignment are not provided. */
@PublishedApi
internal val DefaultRowMeasurePolicy: MeasurePolicy =
    RowMeasurePolicy(horizontalArrangement = Arrangement.Start, verticalAlignment = Alignment.Top)

@PublishedApi
@Composable
internal fun rowMeasurePolicy(
    horizontalArrangement: Arrangement.Horizontal,
    verticalAlignment: Alignment.Vertical,
): MeasurePolicy =
    if (horizontalArrangement == Arrangement.Start && verticalAlignment == Alignment.Top) {
        DefaultRowMeasurePolicy
    } else {
        remember(horizontalArrangement, verticalAlignment) {
            RowMeasurePolicy(
                horizontalArrangement = horizontalArrangement,
                verticalAlignment = verticalAlignment,
            )
        }
    }

internal data class RowMeasurePolicy(
    private val horizontalArrangement: Arrangement.Horizontal,
    private val verticalAlignment: Alignment.Vertical,
) : MeasurePolicy, RowColumnMeasurePolicy {
    override fun Placeable.mainAxisSize() = width

    override fun Placeable.crossAxisSize() = height

    override fun MeasureScope.measure(
        measurables: List<Measurable>,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-105-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 140–174)

        constraints: Constraints,
    ): MeasureResult {
        return measure(
            constraints.minWidth,
            constraints.minHeight,
            constraints.maxWidth,
            constraints.maxHeight,
            horizontalArrangement.spacing.roundToPx(),
            this,
            measurables,
            arrayOfNulls(measurables.size),
            0,
            measurables.size,
        )
    }

    override fun populateMainAxisPositions(
        mainAxisLayoutSize: Int,
        childrenMainAxisSize: IntArray,
        mainAxisPositions: IntArray,
        measureScope: MeasureScope,
    ) {
        with(horizontalArrangement) {
            measureScope.arrange(
                mainAxisLayoutSize,
                childrenMainAxisSize,
                measureScope.layoutDirection,
                mainAxisPositions,
            )
        }
    }

    override fun placeHelper(
        placeables: Array<Placeable?>,
        measureScope: MeasureScope,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-140-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 175–209)

        beforeCrossAxisAlignmentLine: Int,
        mainAxisPositions: IntArray,
        mainAxisLayoutSize: Int,
        crossAxisLayoutSize: Int,
        crossAxisOffset: IntArray?,
        currentLineIndex: Int,
        startIndex: Int,
        endIndex: Int,
    ): MeasureResult {
        return with(measureScope) {
            layout(mainAxisLayoutSize, crossAxisLayoutSize) {
                placeables.forEachIndexed { i, placeable ->
                    val crossAxisPosition =
                        getCrossAxisPosition(
                            placeable!!,
                            placeable.rowColumnParentData,
                            crossAxisLayoutSize,
                            beforeCrossAxisAlignmentLine,
                        )
                    placeable.place(mainAxisPositions[i], crossAxisPosition)
                }
            }
        }
    }

    override fun createConstraints(
        mainAxisMin: Int,
        crossAxisMin: Int,
        mainAxisMax: Int,
        crossAxisMax: Int,
        isPrioritizing: Boolean,
    ): Constraints {
        return createRowConstraints(
            isPrioritizing,
            mainAxisMin,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-175-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 210–244)

            crossAxisMin,
            mainAxisMax,
            crossAxisMax,
        )
    }

    private fun getCrossAxisPosition(
        placeable: Placeable,
        parentData: RowColumnParentData?,
        crossAxisLayoutSize: Int,
        beforeCrossAxisAlignmentLine: Int,
    ): Int {
        val childCrossAlignment = parentData?.crossAxisAlignment
        return childCrossAlignment?.align(
            size = crossAxisLayoutSize,
            itemCrossAxisSize = placeable.crossAxisSize(),
            layoutDirection = LayoutDirection.Ltr,
            placeable = placeable,
            beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine,
        ) ?: verticalAlignment.align(placeable.crossAxisSize(), crossAxisLayoutSize)
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) =
        IntrinsicMeasureBlocks.HorizontalMinWidth(
            measurables,
            height,
            horizontalArrangement.spacing.roundToPx(),
        )

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-210-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 245–279)

    ) =
        IntrinsicMeasureBlocks.HorizontalMinHeight(
            measurables,
            width,
            horizontalArrangement.spacing.roundToPx(),
        )

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) =
        IntrinsicMeasureBlocks.HorizontalMaxWidth(
            measurables,
            height,
            horizontalArrangement.spacing.roundToPx(),
        )

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) =
        IntrinsicMeasureBlocks.HorizontalMaxHeight(
            measurables,
            width,
            horizontalArrangement.spacing.roundToPx(),
        )
}

internal fun createRowConstraints(
    isPrioritizing: Boolean,
    mainAxisMin: Int,
    crossAxisMin: Int,
    mainAxisMax: Int,
    crossAxisMax: Int,
): Constraints {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-245-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 280–314)

    return if (!isPrioritizing) {
        Constraints(
            maxWidth = mainAxisMax,
            maxHeight = crossAxisMax,
            minWidth = mainAxisMin,
            minHeight = crossAxisMin,
        )
    } else {
        Constraints.fitPrioritizingWidth(
            maxWidth = mainAxisMax,
            maxHeight = crossAxisMax,
            minWidth = mainAxisMin,
            minHeight = crossAxisMin,
        )
    }
}

/** Scope for the children of [Row]. */
@LayoutScopeMarker
@Immutable
@JvmDefaultWithCompatibility
public interface RowScope {
    /**
     * Size the element's width proportional to its [weight] relative to other weighted sibling
     * elements in the [Row]. The parent will divide the horizontal space remaining after measuring
     * unweighted child elements and distribute it according to this weight. When [fill] is true,
     * the element will be forced to occupy the whole width allocated to it. Otherwise, the element
     * is allowed to be smaller - this will result in [Row] being smaller, as the unused allocated
     * width will not be redistributed to other siblings.
     *
     * @param weight The proportional width to give to this element, as related to the total of all
     *   weighted siblings. Must be positive.
     * @param fill When `true`, the element will occupy the whole width allocated.
     */
    @Stable

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-280-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 315–349)

    public fun Modifier.weight(
        @FloatRange(from = 0.0, fromInclusive = false) weight: Float,
        fill: Boolean = true,
    ): Modifier

    /**
     * Align the element vertically within the [Row]. This alignment will have priority over the
     * [Row]'s `verticalAlignment` parameter.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleAlignInRow
     */
    @Stable public fun Modifier.align(alignment: Alignment.Vertical): Modifier

    /**
     * Position the element vertically such that its [alignmentLine] aligns with sibling elements
     * also configured to `alignBy`. `alignBy` is a form of [align], so both modifiers will not work
     * together if specified for the same layout. `alignBy` can be used to align two layouts by
     * baseline inside a [Row], using `alignBy(FirstBaseline)`. Within a [Row], all components with
     * `alignBy` will align vertically using the specified [HorizontalAlignmentLine]s or values
     * provided using the other `alignBy` overload, forming a sibling group. At least one element of
     * the sibling group will be placed as it had [Alignment.Top] align in [Row], and the alignment
     * of the other siblings will be then determined such that the alignment lines coincide. Note
     * that if only one element in a [Row] has the `alignBy` modifier specified the element will be
     * positioned as if it had [Alignment.Top] align.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
     * @see alignByBaseline
     */
    @Stable public fun Modifier.alignBy(alignmentLine: HorizontalAlignmentLine): Modifier

    /**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-315-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 350–384)

     * Position the element vertically such that its first baseline aligns with sibling elements
     * also configured to `alignByBaseline` or `alignBy`. This modifier is a form of [align], so
     * both modifiers will not work together if specified for the same layout. `alignByBaseline` is
     * a particular case of `alignBy`. See `alignBy` for more details.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
     * @see alignBy
     */
    @Stable public fun Modifier.alignByBaseline(): Modifier

    /**
     * Position the element vertically such that the alignment line for the content as determined by
     * [alignmentLineBlock] aligns with sibling elements also configured to `alignBy`. `alignBy` is
     * a form of [align], so both modifiers will not work together if specified for the same layout.
     * Within a [Row], all components with `alignBy` will align vertically using the specified
     * [HorizontalAlignmentLine]s or values obtained from [alignmentLineBlock], forming a sibling
     * group. At least one element of the sibling group will be placed as it had [Alignment.Top]
     * align in [Row], and the alignment of the other siblings will be then determined such that the
     * alignment lines coincide. Note that if only one element in a [Row] has the `alignBy` modifier
     * specified the element will be positioned as if it had [Alignment.Top] align.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
     */
    @Stable public fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int): Modifier
}

@PublishedApi
internal object RowScopeInstance : RowScope {
    @Stable
    override fun Modifier.weight(weight: Float, fill: Boolean): Modifier {
        requirePrecondition(weight > 0.0) { "invalid weight; must be greater than zero" }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-350-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 36–69)

import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Measured
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.LayoutDirection

/**
 * A layout composable that places its children in a horizontal sequence. For a layout composable
 * that places its children in a vertical sequence, see [Column]. Note that by default items do not
 * scroll; see `Modifier.horizontalScroll` to add this behavior. For a horizontally scrollable list
 * that only composes and lays out the currently visible items see `LazyRow`.
 *
 * The [Row] layout is able to assign children widths according to their weights provided using the
 * [RowScope.weight] modifier. If a child is not provided a weight, it will be asked for its
 * preferred width before the sizes of the children with weights are calculated proportionally to
 * their weight based on the remaining available space. Note that if the [Row] is horizontally
 * scrollable or part of a horizontally scrollable container, any provided weights will be
 * disregarded as the remaining available space will be infinite.
 *
 * When none of its children have weights, a [Row] will be as small as possible to fit its children
 * one next to the other. In order to change the width of the [Row], use the [Modifier.width]
 * modifiers; e.g. to make it fill the available width [Modifier.fillMaxWidth] can be used. If at
 * least one child of a [Row] has a [weight][RowScope.weight], the [Row] will fill the available
 * width, so there is no need for [Modifier.fillMaxWidth]. However, if [Row]'s size should be
 * limited, the [Modifier.width] or [Modifier.size] layout modifiers should be applied.
 *
 * When the size of the [Row] is larger than the sum of its children sizes, a
 * [horizontalArrangement] can be specified to define the positioning of the children inside the
 * [Row]. See [Arrangement] for available positioning behaviors; a custom arrangement can also be
 * defined using the constructor of [Arrangement]. Below is an illustration of different horizontal
 * arrangements:
 *
 * ![Row

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 385–411)

        return this.then(
            LayoutWeightElement(
                // Coerce Float.POSITIVE_INFINITY to Float.MAX_VALUE to avoid errors
                weight = weight.coerceAtMost(Float.MAX_VALUE),
                fill = fill,
            )
        )
    }

    @Stable
    override fun Modifier.align(alignment: Alignment.Vertical) =
        this.then(VerticalAlignElement(alignment))

    @Stable
    override fun Modifier.alignBy(alignmentLine: HorizontalAlignmentLine) =
        this.then(WithAlignmentLineElement(alignmentLine = alignmentLine))

    @Stable override fun Modifier.alignByBaseline() = alignBy(FirstBaseline)

    override fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int) =
        this.then(
            WithAlignmentLineBlockElement(
                block = AlignmentLineProviderBlock { alignmentLineBlock(it) }
            )
        )
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-385-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)

## androidx.compose.foundation.layout Row.kt source (lines 70–104)

 * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/row_arrangement_visualization.gif)
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleRow
 *
 * Note that if two or more Text components are placed in a [Row], normally they should be aligned
 * by their first baselines. [Row] as a general purpose container does not do it automatically so
 * developers need to handle this manually. This is achieved by adding a [RowScope.alignByBaseline]
 * modifier to every such Text component. By default this modifier aligns by [FirstBaseline]. If,
 * however, you need to align Texts by [LastBaseline] for example, use a more general
 * [RowScope.alignBy] modifier.
 *
 * See example of using Texts inside the Row:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleAlignByInRow
 * @param modifier The modifier to be applied to the Row.
 * @param horizontalArrangement The horizontal arrangement of the layout's children.
 * @param verticalAlignment The vertical alignment of the layout's children.
 * @param content The content of the Row
 * @see Column
 * @see [androidx.compose.foundation.lazy.LazyRow]
 */
@Composable
public inline fun Row(
    modifier: Modifier = Modifier,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    verticalAlignment: Alignment.Vertical = Alignment.Top,
    content: @Composable RowScope.() -> Unit,
) {
    val measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment)
    Layout(
        content = { RowScopeInstance.content() },
        measurePolicy = measurePolicy,
        modifier = modifier,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-row-lines-70-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Row.kt)
