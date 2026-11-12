---
type: reference
title: androidx.compose.foundation.layout Column.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 1
    endLine: 35
    sha256: 40d75bc5877147352c203c2aa0bf6f762ba54284895da804fd37466f066b2fe6
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
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Measured
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-104-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 104
    endLine: 138
    sha256: 91a635e6476ddb652ca334a15529e32930fc5c2de5ee1bf4c4a8ff5983648768
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      internal fun columnMeasurePolicy(
          verticalArrangement: Arrangement.Vertical,
          horizontalAlignment: Alignment.Horizontal,
      ): MeasurePolicy =
          if (verticalArrangement == Arrangement.Top && horizontalAlignment == Alignment.Start) {
              DefaultColumnMeasurePolicy
          } else {
              remember(verticalArrangement, horizontalAlignment) {
                  ColumnMeasurePolicy(
                      verticalArrangement = verticalArrangement,
                      horizontalAlignment = horizontalAlignment,
                  )
              }
          }

      internal data class ColumnMeasurePolicy(
          private val verticalArrangement: Arrangement.Vertical,
          private val horizontalAlignment: Alignment.Horizontal,
      ) : MeasurePolicy, RowColumnMeasurePolicy {

          override fun Placeable.mainAxisSize(): Int = height

          override fun Placeable.crossAxisSize(): Int = width

          override fun populateMainAxisPositions(
              mainAxisLayoutSize: Int,
              childrenMainAxisSize: IntArray,
              mainAxisPositions: IntArray,
              measureScope: MeasureScope,
          ) {
              with(verticalArrangement) {
                  measureScope.arrange(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions)
              }
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-139-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 139
    endLine: 173
    sha256: b19da5ce21891823debbfd5b321951b9fdd16dffce46b4bff69deeef9e032a86
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun placeHelper(
              placeables: Array<Placeable?>,
              measureScope: MeasureScope,
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
                  layout(crossAxisLayoutSize, mainAxisLayoutSize) {
                      placeables.forEachIndexed { i, placeable ->
                          val crossAxisPosition =
                              getCrossAxisPosition(
                                  placeable!!,
                                  placeable.rowColumnParentData,
                                  crossAxisLayoutSize,
                                  beforeCrossAxisAlignmentLine,
                                  measureScope.layoutDirection,
                              )
                          placeable.place(crossAxisPosition, mainAxisPositions[i])
                      }
                  }
              }
          }

          private fun getCrossAxisPosition(
              placeable: Placeable,
              parentData: RowColumnParentData?,
              crossAxisLayoutSize: Int,
              beforeCrossAxisAlignmentLine: Int,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-174-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 174
    endLine: 208
    sha256: 0aa6a942020b44e6d53a04567d608659197a7304005ba18b6dc7b9003162e27f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              layoutDirection: LayoutDirection,
          ): Int {
              val childCrossAlignment = parentData?.crossAxisAlignment
              return childCrossAlignment?.align(
                  size = crossAxisLayoutSize,
                  itemCrossAxisSize = placeable.crossAxisSize(),
                  layoutDirection = layoutDirection,
                  placeable = placeable,
                  beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine,
              )
                  ?: horizontalAlignment.align(
                      placeable.crossAxisSize(),
                      crossAxisLayoutSize,
                      layoutDirection,
                  )
          }

          override fun createConstraints(
              mainAxisMin: Int,
              crossAxisMin: Int,
              mainAxisMax: Int,
              crossAxisMax: Int,
              isPrioritizing: Boolean,
          ): Constraints {
              return createColumnConstraints(
                  isPrioritizing,
                  mainAxisMin,
                  crossAxisMin,
                  mainAxisMax,
                  crossAxisMax,
              )
          }

          override fun MeasureScope.measure(
              measurables: List<Measurable>,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-209-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 209
    endLine: 243
    sha256: 2707df5ce429aaefc16e097dd9b83935ec3a07d3c56ed5d9b22d82313fcf7e2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              constraints: Constraints,
          ): MeasureResult {
              return measure(
                  constraints.minHeight,
                  constraints.minWidth,
                  constraints.maxHeight,
                  constraints.maxWidth,
                  verticalArrangement.spacing.roundToPx(),
                  this,
                  measurables,
                  arrayOfNulls(measurables.size),
                  0,
                  measurables.size,
              )
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) =
              IntrinsicMeasureBlocks.VerticalMinWidth(
                  measurables,
                  height,
                  verticalArrangement.spacing.roundToPx(),
              )

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) =
              IntrinsicMeasureBlocks.VerticalMinHeight(
                  measurables,
                  width,
                  verticalArrangement.spacing.roundToPx(),
              )
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-244-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 244
    endLine: 278
    sha256: 5ea9074470542610a65cfe9ce4fd76932e49007c7557926fbe0661c3dcb04b9b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) =
              IntrinsicMeasureBlocks.VerticalMaxWidth(
                  measurables,
                  height,
                  verticalArrangement.spacing.roundToPx(),
              )

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) =
              IntrinsicMeasureBlocks.VerticalMaxHeight(
                  measurables,
                  width,
                  verticalArrangement.spacing.roundToPx(),
              )
      }

      internal fun createColumnConstraints(
          isPrioritizing: Boolean,
          mainAxisMin: Int,
          crossAxisMin: Int,
          mainAxisMax: Int,
          crossAxisMax: Int,
      ): Constraints {
          return if (!isPrioritizing) {
              Constraints(
                  minHeight = mainAxisMin,
                  minWidth = crossAxisMin,
                  maxHeight = mainAxisMax,
                  maxWidth = crossAxisMax,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-279-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 279
    endLine: 313
    sha256: 6ebd106ac030566bc2d07cde0fd87a7ca177cd2dafbda48cc6defe99c2f9f892
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
          } else {
              Constraints.fitPrioritizingHeight(
                  minHeight = mainAxisMin,
                  minWidth = crossAxisMin,
                  maxHeight = mainAxisMax,
                  maxWidth = crossAxisMax,
              )
          }
      }

      /** Scope for the children of [Column]. */
      @LayoutScopeMarker
      @Immutable
      @JvmDefaultWithCompatibility
      public interface ColumnScope {
          /**
           * Size the element's height proportional to its [weight] relative to other weighted sibling
           * elements in the [Column]. The parent will divide the vertical space remaining after measuring
           * unweighted child elements and distribute it according to this weight. When [fill] is true,
           * the element will be forced to occupy the whole height allocated to it. Otherwise, the element
           * is allowed to be smaller - this will result in [Column] being smaller, as the unused
           * allocated height will not be redistributed to other siblings.
           *
           * In a [FlowColumn], when a weight is applied to an item, the item is scaled based on the
           * number of weighted items that fall on the column it was placed in.
           *
           * @param weight The proportional height to give to this element, as related to the total of all
           *   weighted siblings. Must be positive.
           * @param fill When `true`, the element will occupy the whole height allocated.
           * @sample androidx.compose.foundation.layout.samples.SimpleColumn
           */
          @Stable
          public fun Modifier.weight(
              @FloatRange(from = 0.0, fromInclusive = false) weight: Float,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-314-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 314
    endLine: 348
    sha256: 531d774881653474f094fc3b1a6368a519c453d3d551ff90429d0f40f4aff170
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fill: Boolean = true,
          ): Modifier

          /**
           * Align the element horizontally within the [Column]. This alignment will have priority over
           * the [Column]'s `horizontalAlignment` parameter.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleAlignInColumn
           */
          @Stable public fun Modifier.align(alignment: Alignment.Horizontal): Modifier

          /**
           * Position the element horizontally such that its [alignmentLine] aligns with sibling elements
           * also configured to [alignBy]. [alignBy] is a form of [align], so both modifiers will not work
           * together if specified for the same layout. Within a [Column], all components with [alignBy]
           * will align horizontally using the specified [VerticalAlignmentLine]s or values provided using
           * the other [alignBy] overload, forming a sibling group. At least one element of the sibling
           * group will be placed as it had [Alignment.Start] align in [Column], and the alignment of the
           * other siblings will be then determined such that the alignment lines coincide. Note that if
           * only one element in a [Column] has the [alignBy] modifier specified the element will be
           * positioned as if it had [Alignment.Start] align.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleRelativeToSiblingsInColumn
           */
          @Stable public fun Modifier.alignBy(alignmentLine: VerticalAlignmentLine): Modifier

          /**
           * Position the element horizontally such that the alignment line for the content as determined
           * by [alignmentLineBlock] aligns with sibling elements also configured to [alignBy]. [alignBy]
           * is a form of [align], so both modifiers will not work together if specified for the same
           * layout. Within a [Column], all components with [alignBy] will align horizontally using the
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-349-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 349
    endLine: 383
    sha256: 6bbcd12dc81376d8153b6218340af52e0193a7738fc7e78a6cc322eed17c18bb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * specified [VerticalAlignmentLine]s or values obtained from [alignmentLineBlock], forming a
           * sibling group. At least one element of the sibling group will be placed as it had
           * [Alignment.Start] align in [Column], and the alignment of the other siblings will be then
           * determined such that the alignment lines coincide. Note that if only one element in a
           * [Column] has the [alignBy] modifier specified the element will be positioned as if it had
           * [Alignment.Start] align.
           *
           * Example usage:
           *
           * @sample androidx.compose.foundation.layout.samples.SimpleRelativeToSiblings
           */
          @Stable public fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int): Modifier
      }

      @PublishedApi
      internal object ColumnScopeInstance : ColumnScope {
          @Stable
          override fun Modifier.weight(weight: Float, fill: Boolean): Modifier {
              requirePrecondition(weight > 0.0) { "invalid weight; must be greater than zero" }
              return this.then(
                  LayoutWeightElement(
                      // Coerce Float.POSITIVE_INFINITY to Float.MAX_VALUE to avoid errors
                      weight = weight.coerceAtMost(Float.MAX_VALUE),
                      fill = fill,
                  )
              )
          }

          @Stable
          override fun Modifier.align(alignment: Alignment.Horizontal) =
              this.then(HorizontalAlignElement(horizontal = alignment))

          @Stable
          override fun Modifier.alignBy(alignmentLine: VerticalAlignmentLine) =
              this.then(WithAlignmentLineElement(alignmentLine = alignmentLine))
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 36
    endLine: 68
    sha256: 529367b29bdcc673ec3661d8915519552647e3c2ea4b48e2a16539454e90db17
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.layout.VerticalAlignmentLine
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.LayoutDirection

      /**
       * A layout composable that places its children in a vertical sequence. For a layout composable that
       * places its children in a horizontal sequence, see [Row]. Note that by default items do not
       * scroll; see `Modifier.verticalScroll` to add this behavior. For a vertically scrollable list that
       * only composes and lays out the currently visible items see `LazyColumn`.
       *
       * The [Column] layout is able to assign children heights according to their weights provided using
       * the [ColumnScope.weight] modifier. If a child is not provided a weight, it will be asked for its
       * preferred height before the sizes of the children with weights are calculated proportionally to
       * their weight based on the remaining available space. Note that if the [Column] is vertically
       * scrollable or part of a vertically scrollable container, any provided weights will be disregarded
       * as the remaining available space will be infinite.
       *
       * When none of its children have weights, a [Column] will be as small as possible to fit its
       * children one on top of the other. In order to change the height of the [Column], use the
       * [Modifier.height] modifiers; e.g. to make it fill the available height [Modifier.fillMaxHeight]
       * can be used. If at least one child of a [Column] has a [weight][ColumnScope.weight], the [Column]
       * will fill the available height, so there is no need for [Modifier.fillMaxHeight]. However, if
       * [Column]'s size should be limited, the [Modifier.height] or [Modifier.size] layout modifiers
       * should be applied.
       *
       * When the size of the [Column] is larger than the sum of its children sizes, a
       * [verticalArrangement] can be specified to define the positioning of the children inside the
       * [Column]. See [Arrangement] for available positioning behaviors; a custom arrangement can also be
       * defined using the constructor of [Arrangement]. Below is an illustration of different vertical
       * arrangements:
       *
       * ![Column
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-384-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 384
    endLine: 393
    sha256: 3f150877787daaaac955fa3960c6ddc4740f6c4307c259eaaa275eb6b3d2a3b8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          @Stable
          override fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int) =
              this.then(
                  WithAlignmentLineBlockElement(
                      block = AlignmentLineProviderBlock { alignmentLineBlock(it) }
                  )
              )
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-69-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt
    startLine: 69
    endLine: 103
    sha256: ab6975ae0dc4ee7cb5f80c5c114a775cf0e29a94df40563673a57fc921471243
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/column_arrangement_visualization.gif)
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleColumn
       * @param modifier The modifier to be applied to the Column.
       * @param verticalArrangement The vertical arrangement of the layout's children.
       * @param horizontalAlignment The horizontal alignment of the layout's children.
       * @param content The content of the Column
       * @see Row
       * @see [androidx.compose.foundation.lazy.LazyColumn]
       */
      @Composable
      public inline fun Column(
          modifier: Modifier = Modifier,
          verticalArrangement: Arrangement.Vertical = Arrangement.Top,
          horizontalAlignment: Alignment.Horizontal = Alignment.Start,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          val measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment)
          Layout(
              content = { ColumnScopeInstance.content() },
              measurePolicy = measurePolicy,
              modifier = modifier,
          )
      }

      @PublishedApi
      internal val DefaultColumnMeasurePolicy: MeasurePolicy =
          ColumnMeasurePolicy(
              verticalArrangement = Arrangement.Top,
              horizontalAlignment = Alignment.Start,
          )

      @PublishedApi
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-column
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-1
      title: androidx.compose.foundation.layout Column.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-104
      title: androidx.compose.foundation.layout Column.kt source (lines 104–138)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-104-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-139
      title: androidx.compose.foundation.layout Column.kt source (lines 139–173)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-139-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-174
      title: androidx.compose.foundation.layout Column.kt source (lines 174–208)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-174-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-209
      title: androidx.compose.foundation.layout Column.kt source (lines 209–243)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-209-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-244
      title: androidx.compose.foundation.layout Column.kt source (lines 244–278)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-244-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-279
      title: androidx.compose.foundation.layout Column.kt source (lines 279–313)
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.ColumnScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-279-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-314
      title: androidx.compose.foundation.layout Column.kt source (lines 314–348)
      aliases:
        - androidx.compose.foundation.layout.Column
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-314-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-349
      title: androidx.compose.foundation.layout Column.kt source (lines 349–383)
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.ColumnScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-349-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-36
      title: androidx.compose.foundation.layout Column.kt source (lines 36–68)
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.ColumnScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-384
      title: androidx.compose.foundation.layout Column.kt source (lines 384–393)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-384-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-column-lines-69
      title: androidx.compose.foundation.layout Column.kt source (lines 69–103)
      aliases:
        - androidx.compose.foundation.layout.Column
        - androidx.compose.foundation.layout.ColumnScope
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-column-lines-69-source
      relatedIds: []
---

# androidx.compose.foundation.layout Column.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt

## androidx.compose.foundation.layout Column.kt source (lines 1–35)

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
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Measured

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 104–138)

@Composable
internal fun columnMeasurePolicy(
    verticalArrangement: Arrangement.Vertical,
    horizontalAlignment: Alignment.Horizontal,
): MeasurePolicy =
    if (verticalArrangement == Arrangement.Top && horizontalAlignment == Alignment.Start) {
        DefaultColumnMeasurePolicy
    } else {
        remember(verticalArrangement, horizontalAlignment) {
            ColumnMeasurePolicy(
                verticalArrangement = verticalArrangement,
                horizontalAlignment = horizontalAlignment,
            )
        }
    }

internal data class ColumnMeasurePolicy(
    private val verticalArrangement: Arrangement.Vertical,
    private val horizontalAlignment: Alignment.Horizontal,
) : MeasurePolicy, RowColumnMeasurePolicy {

    override fun Placeable.mainAxisSize(): Int = height

    override fun Placeable.crossAxisSize(): Int = width

    override fun populateMainAxisPositions(
        mainAxisLayoutSize: Int,
        childrenMainAxisSize: IntArray,
        mainAxisPositions: IntArray,
        measureScope: MeasureScope,
    ) {
        with(verticalArrangement) {
            measureScope.arrange(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions)
        }
    }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-104-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 139–173)


    override fun placeHelper(
        placeables: Array<Placeable?>,
        measureScope: MeasureScope,
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
            layout(crossAxisLayoutSize, mainAxisLayoutSize) {
                placeables.forEachIndexed { i, placeable ->
                    val crossAxisPosition =
                        getCrossAxisPosition(
                            placeable!!,
                            placeable.rowColumnParentData,
                            crossAxisLayoutSize,
                            beforeCrossAxisAlignmentLine,
                            measureScope.layoutDirection,
                        )
                    placeable.place(crossAxisPosition, mainAxisPositions[i])
                }
            }
        }
    }

    private fun getCrossAxisPosition(
        placeable: Placeable,
        parentData: RowColumnParentData?,
        crossAxisLayoutSize: Int,
        beforeCrossAxisAlignmentLine: Int,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-139-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 174–208)

        layoutDirection: LayoutDirection,
    ): Int {
        val childCrossAlignment = parentData?.crossAxisAlignment
        return childCrossAlignment?.align(
            size = crossAxisLayoutSize,
            itemCrossAxisSize = placeable.crossAxisSize(),
            layoutDirection = layoutDirection,
            placeable = placeable,
            beforeCrossAxisAlignmentLine = beforeCrossAxisAlignmentLine,
        )
            ?: horizontalAlignment.align(
                placeable.crossAxisSize(),
                crossAxisLayoutSize,
                layoutDirection,
            )
    }

    override fun createConstraints(
        mainAxisMin: Int,
        crossAxisMin: Int,
        mainAxisMax: Int,
        crossAxisMax: Int,
        isPrioritizing: Boolean,
    ): Constraints {
        return createColumnConstraints(
            isPrioritizing,
            mainAxisMin,
            crossAxisMin,
            mainAxisMax,
            crossAxisMax,
        )
    }

    override fun MeasureScope.measure(
        measurables: List<Measurable>,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-174-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 209–243)

        constraints: Constraints,
    ): MeasureResult {
        return measure(
            constraints.minHeight,
            constraints.minWidth,
            constraints.maxHeight,
            constraints.maxWidth,
            verticalArrangement.spacing.roundToPx(),
            this,
            measurables,
            arrayOfNulls(measurables.size),
            0,
            measurables.size,
        )
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) =
        IntrinsicMeasureBlocks.VerticalMinWidth(
            measurables,
            height,
            verticalArrangement.spacing.roundToPx(),
        )

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) =
        IntrinsicMeasureBlocks.VerticalMinHeight(
            measurables,
            width,
            verticalArrangement.spacing.roundToPx(),
        )

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-209-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 244–278)


    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) =
        IntrinsicMeasureBlocks.VerticalMaxWidth(
            measurables,
            height,
            verticalArrangement.spacing.roundToPx(),
        )

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) =
        IntrinsicMeasureBlocks.VerticalMaxHeight(
            measurables,
            width,
            verticalArrangement.spacing.roundToPx(),
        )
}

internal fun createColumnConstraints(
    isPrioritizing: Boolean,
    mainAxisMin: Int,
    crossAxisMin: Int,
    mainAxisMax: Int,
    crossAxisMax: Int,
): Constraints {
    return if (!isPrioritizing) {
        Constraints(
            minHeight = mainAxisMin,
            minWidth = crossAxisMin,
            maxHeight = mainAxisMax,
            maxWidth = crossAxisMax,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-244-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 279–313)

        )
    } else {
        Constraints.fitPrioritizingHeight(
            minHeight = mainAxisMin,
            minWidth = crossAxisMin,
            maxHeight = mainAxisMax,
            maxWidth = crossAxisMax,
        )
    }
}

/** Scope for the children of [Column]. */
@LayoutScopeMarker
@Immutable
@JvmDefaultWithCompatibility
public interface ColumnScope {
    /**
     * Size the element's height proportional to its [weight] relative to other weighted sibling
     * elements in the [Column]. The parent will divide the vertical space remaining after measuring
     * unweighted child elements and distribute it according to this weight. When [fill] is true,
     * the element will be forced to occupy the whole height allocated to it. Otherwise, the element
     * is allowed to be smaller - this will result in [Column] being smaller, as the unused
     * allocated height will not be redistributed to other siblings.
     *
     * In a [FlowColumn], when a weight is applied to an item, the item is scaled based on the
     * number of weighted items that fall on the column it was placed in.
     *
     * @param weight The proportional height to give to this element, as related to the total of all
     *   weighted siblings. Must be positive.
     * @param fill When `true`, the element will occupy the whole height allocated.
     * @sample androidx.compose.foundation.layout.samples.SimpleColumn
     */
    @Stable
    public fun Modifier.weight(
        @FloatRange(from = 0.0, fromInclusive = false) weight: Float,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-279-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 314–348)

        fill: Boolean = true,
    ): Modifier

    /**
     * Align the element horizontally within the [Column]. This alignment will have priority over
     * the [Column]'s `horizontalAlignment` parameter.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleAlignInColumn
     */
    @Stable public fun Modifier.align(alignment: Alignment.Horizontal): Modifier

    /**
     * Position the element horizontally such that its [alignmentLine] aligns with sibling elements
     * also configured to [alignBy]. [alignBy] is a form of [align], so both modifiers will not work
     * together if specified for the same layout. Within a [Column], all components with [alignBy]
     * will align horizontally using the specified [VerticalAlignmentLine]s or values provided using
     * the other [alignBy] overload, forming a sibling group. At least one element of the sibling
     * group will be placed as it had [Alignment.Start] align in [Column], and the alignment of the
     * other siblings will be then determined such that the alignment lines coincide. Note that if
     * only one element in a [Column] has the [alignBy] modifier specified the element will be
     * positioned as if it had [Alignment.Start] align.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleRelativeToSiblingsInColumn
     */
    @Stable public fun Modifier.alignBy(alignmentLine: VerticalAlignmentLine): Modifier

    /**
     * Position the element horizontally such that the alignment line for the content as determined
     * by [alignmentLineBlock] aligns with sibling elements also configured to [alignBy]. [alignBy]
     * is a form of [align], so both modifiers will not work together if specified for the same
     * layout. Within a [Column], all components with [alignBy] will align horizontally using the

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-314-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 349–383)

     * specified [VerticalAlignmentLine]s or values obtained from [alignmentLineBlock], forming a
     * sibling group. At least one element of the sibling group will be placed as it had
     * [Alignment.Start] align in [Column], and the alignment of the other siblings will be then
     * determined such that the alignment lines coincide. Note that if only one element in a
     * [Column] has the [alignBy] modifier specified the element will be positioned as if it had
     * [Alignment.Start] align.
     *
     * Example usage:
     *
     * @sample androidx.compose.foundation.layout.samples.SimpleRelativeToSiblings
     */
    @Stable public fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int): Modifier
}

@PublishedApi
internal object ColumnScopeInstance : ColumnScope {
    @Stable
    override fun Modifier.weight(weight: Float, fill: Boolean): Modifier {
        requirePrecondition(weight > 0.0) { "invalid weight; must be greater than zero" }
        return this.then(
            LayoutWeightElement(
                // Coerce Float.POSITIVE_INFINITY to Float.MAX_VALUE to avoid errors
                weight = weight.coerceAtMost(Float.MAX_VALUE),
                fill = fill,
            )
        )
    }

    @Stable
    override fun Modifier.align(alignment: Alignment.Horizontal) =
        this.then(HorizontalAlignElement(horizontal = alignment))

    @Stable
    override fun Modifier.alignBy(alignmentLine: VerticalAlignmentLine) =
        this.then(WithAlignmentLineElement(alignmentLine = alignmentLine))

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-349-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 36–68)

import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.layout.VerticalAlignmentLine
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.LayoutDirection

/**
 * A layout composable that places its children in a vertical sequence. For a layout composable that
 * places its children in a horizontal sequence, see [Row]. Note that by default items do not
 * scroll; see `Modifier.verticalScroll` to add this behavior. For a vertically scrollable list that
 * only composes and lays out the currently visible items see `LazyColumn`.
 *
 * The [Column] layout is able to assign children heights according to their weights provided using
 * the [ColumnScope.weight] modifier. If a child is not provided a weight, it will be asked for its
 * preferred height before the sizes of the children with weights are calculated proportionally to
 * their weight based on the remaining available space. Note that if the [Column] is vertically
 * scrollable or part of a vertically scrollable container, any provided weights will be disregarded
 * as the remaining available space will be infinite.
 *
 * When none of its children have weights, a [Column] will be as small as possible to fit its
 * children one on top of the other. In order to change the height of the [Column], use the
 * [Modifier.height] modifiers; e.g. to make it fill the available height [Modifier.fillMaxHeight]
 * can be used. If at least one child of a [Column] has a [weight][ColumnScope.weight], the [Column]
 * will fill the available height, so there is no need for [Modifier.fillMaxHeight]. However, if
 * [Column]'s size should be limited, the [Modifier.height] or [Modifier.size] layout modifiers
 * should be applied.
 *
 * When the size of the [Column] is larger than the sum of its children sizes, a
 * [verticalArrangement] can be specified to define the positioning of the children inside the
 * [Column]. See [Arrangement] for available positioning behaviors; a custom arrangement can also be
 * defined using the constructor of [Arrangement]. Below is an illustration of different vertical
 * arrangements:
 *
 * ![Column

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 384–393)


    @Stable
    override fun Modifier.alignBy(alignmentLineBlock: (Measured) -> Int) =
        this.then(
            WithAlignmentLineBlockElement(
                block = AlignmentLineProviderBlock { alignmentLineBlock(it) }
            )
        )
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-384-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)

## androidx.compose.foundation.layout Column.kt source (lines 69–103)

 * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/column_arrangement_visualization.gif)
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleColumn
 * @param modifier The modifier to be applied to the Column.
 * @param verticalArrangement The vertical arrangement of the layout's children.
 * @param horizontalAlignment The horizontal alignment of the layout's children.
 * @param content The content of the Column
 * @see Row
 * @see [androidx.compose.foundation.lazy.LazyColumn]
 */
@Composable
public inline fun Column(
    modifier: Modifier = Modifier,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    horizontalAlignment: Alignment.Horizontal = Alignment.Start,
    content: @Composable ColumnScope.() -> Unit,
) {
    val measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment)
    Layout(
        content = { ColumnScopeInstance.content() },
        measurePolicy = measurePolicy,
        modifier = modifier,
    )
}

@PublishedApi
internal val DefaultColumnMeasurePolicy: MeasurePolicy =
    ColumnMeasurePolicy(
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.Start,
    )

@PublishedApi

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-column-lines-69-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Column.kt)
