---
type: reference
title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 1
    endLine: 35
    sha256: f644bc769e2a894d044fdebca07be8e98c33a85c55fdb1ae2bae5b9167346353
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2022 The Android Open Source Project
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

      package androidx.compose.foundation.lazy.grid

      import androidx.compose.foundation.OverscrollEffect
      import androidx.compose.foundation.gestures.FlingBehavior
      import androidx.compose.foundation.gestures.ScrollableDefaults
      import androidx.compose.foundation.internal.requirePrecondition
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.lazy.layout.LazyLayoutCacheWindow
      import androidx.compose.foundation.rememberOverscrollEffect
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 106
    endLine: 140
    sha256: 6a6aa7b8b0129dce99fb88d1b460b2f020f4d41a350031242fba49668ef94c87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
      }

      /**
       * A lazy vertical grid layout. It composes only visible rows of the grid.
       *
       * Sample:
       *
       * @sample androidx.compose.foundation.samples.LazyVerticalGridSample
       *
       * Sample with custom item spans:
       *
       * @sample androidx.compose.foundation.samples.LazyVerticalGridSpanSample
       * @param columns describes the count and the size of the grid's columns, see [GridCells] doc for
       *   more information
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding specify a padding around the whole content
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items will be
       *   laid out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
       *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
       *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
       *   (bottom).
       * @param verticalArrangement The vertical arrangement of the layout's children
       * @param horizontalArrangement The horizontal arrangement of the layout's children
       * @param flingBehavior logic describing fling behavior
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param content the [LazyGridScope] which describes the content
       */
      @Composable
      @Deprecated("Use the non-deprecated overload", level = DeprecationLevel.HIDDEN)
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 141
    endLine: 175
    sha256: 3e89ff8b1d203ab03505166153a598acb82821863cf015e189f6e0af8522a8c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun LazyVerticalGrid(
          columns: GridCells,
          modifier: Modifier = Modifier,
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          content: LazyGridScope.() -> Unit,
      ) {
          LazyVerticalGrid(
              columns = columns,
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              verticalArrangement = verticalArrangement,
              horizontalArrangement = horizontalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = LazyGridDefaults.cacheWindow(state),
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyVerticalGrid(
          columns: GridCells,
          modifier: Modifier = Modifier,
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 176
    endLine: 210
    sha256: ad91cd0f8031d049ada13b09984b5c7754f88cf290827b20666365f839aad00e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          content: LazyGridScope.() -> Unit,
      ) {
          LazyVerticalGrid(
              columns = columns,
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              verticalArrangement = verticalArrangement,
              horizontalArrangement = horizontalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = rememberOverscrollEffect(),
              content = content,
          )
      }

      /**
       * A lazy horizontal grid layout. It composes only visible columns of the grid.
       *
       * Sample:
       *
       * @sample androidx.compose.foundation.samples.LazyHorizontalGridSample
       *
       * Sample with custom item spans:
       *
       * @sample androidx.compose.foundation.samples.LazyHorizontalGridSpanSample
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 211
    endLine: 244
    sha256: 13dba9fa8731c2c3da292e10f3ffbe7cd640b66e55709af45dcc0bd57fd105af
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Sample with custom cache window:
       *
       * @sample androidx.compose.foundation.samples.LazyGridCacheWindowSample
       * @param rows a class describing how cells form rows, see [GridCells] doc for more information
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding specify a padding around the whole content
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
       *   out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
       *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
       *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
       * @param verticalArrangement The vertical arrangement of the layout's children
       * @param horizontalArrangement The horizontal arrangement of the layout's children
       * @param flingBehavior logic describing fling behavior
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
       *   prefetch and retain items. The default cache window does not cache items while the user is not
       *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
       *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
       *   when scrolling back and forth.
       * @param content the [LazyGridScope] which describes the content
       */
      @Composable
      public fun LazyHorizontalGrid(
          rows: GridCells,
          modifier: Modifier = Modifier,
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-245-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 245
    endLine: 279
    sha256: 13b9a75910ca75de7d10ab66e0975e0f8fa75ebd327dbf94651b4738da0ed0cb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalArrangement: Arrangement.Vertical = Arrangement.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          cacheWindow: LazyLayoutCacheWindow = LazyGridDefaults.cacheWindow(state),
          content: LazyGridScope.() -> Unit,
      ) {
          LazyGrid(
              slots = rememberRowHeightSums(rows, verticalArrangement),
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              isVertical = false,
              horizontalArrangement = horizontalArrangement,
              verticalArrangement = verticalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = cacheWindow,
              content = content,
          )
      }

      /**
       * A lazy horizontal grid layout. It composes only visible columns of the grid.
       *
       * Sample:
       *
       * @sample androidx.compose.foundation.samples.LazyHorizontalGridSample
       *
       * Sample with custom item spans:
       *
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-280-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 280
    endLine: 312
    sha256: 7c18bdcbb6a1d5978c9d4d743cb558c80a79410c62f4cf01ea84d3a54138d91b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.foundation.samples.LazyHorizontalGridSpanSample
       * @param rows a class describing how cells form rows, see [GridCells] doc for more information
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding specify a padding around the whole content
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
       *   out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
       *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
       *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
       * @param verticalArrangement The vertical arrangement of the layout's children
       * @param horizontalArrangement The horizontal arrangement of the layout's children
       * @param flingBehavior logic describing fling behavior
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param content the [LazyGridScope] which describes the content
       */
      @Composable
      @Deprecated("Use the non-deprecated overload", level = DeprecationLevel.HIDDEN)
      public fun LazyHorizontalGrid(
          rows: GridCells,
          modifier: Modifier = Modifier,
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalArrangement: Arrangement.Vertical = Arrangement.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-313-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 313
    endLine: 347
    sha256: 3e80a25a5df089ab758d8a0c63e36903f089738f4820c0d1deb24cbe3a06de2f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          content: LazyGridScope.() -> Unit,
      ) {
          LazyHorizontalGrid(
              rows = rows,
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              horizontalArrangement = horizontalArrangement,
              verticalArrangement = verticalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = LazyGridDefaults.cacheWindow(state),
              content = content,
          )
      }

      @Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun LazyHorizontalGrid(
          rows: GridCells,
          modifier: Modifier = Modifier,
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          horizontalArrangement: Arrangement.Horizontal =
              if (!reverseLayout) Arrangement.Start else Arrangement.End,
          verticalArrangement: Arrangement.Vertical = Arrangement.Top,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          content: LazyGridScope.() -> Unit,
      ) {
          LazyHorizontalGrid(
              rows = rows,
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-348-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 348
    endLine: 382
    sha256: 3fc7f3ecf68cdd45360dce60283c9f1f327a21b2934262e2ec4b2b802e5c34fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              horizontalArrangement = horizontalArrangement,
              verticalArrangement = verticalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = rememberOverscrollEffect(),
              content = content,
          )
      }

      /** Returns prefix sums of column widths. */
      @Composable
      private fun rememberColumnWidthSums(
          columns: GridCells,
          horizontalArrangement: Arrangement.Horizontal,
      ) =
          remember<LazyGridSlotsProvider>(columns, horizontalArrangement) {
              GridSlotCache { constraints ->
                  requirePrecondition(constraints.maxWidth != Constraints.Infinity) {
                      "LazyVerticalGrid's width should be bound by parent."
                  }

                  val gridWidth = constraints.maxWidth
                  with(columns) {
                      calculateCrossAxisCellSizes(gridWidth, horizontalArrangement.spacing.roundToPx())
                          .toIntArray()
                          .let { sizes ->
                              val positions = IntArray(sizes.size)
                              with(horizontalArrangement) {
                                  arrange(gridWidth, sizes, LayoutDirection.Ltr, positions)
                              }
                              LazyGridSlots(sizes, positions)
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 36
    endLine: 70
    sha256: 0e2afd7a719cf6a0c993001e3e1ac1679c87167b785befc2208e494399eaaf4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * A lazy vertical grid layout. It composes only visible rows of the grid.
       *
       * Sample:
       *
       * @sample androidx.compose.foundation.samples.LazyVerticalGridSample
       *
       * Sample with custom item spans:
       *
       * @sample androidx.compose.foundation.samples.LazyVerticalGridSpanSample
       *
       * Sample with custom cache window:
       *
       * @sample androidx.compose.foundation.samples.LazyGridCacheWindowSample
       * @param columns describes the count and the size of the grid's columns, see [GridCells] doc for
       *   more information
       * @param modifier the modifier to apply to this layout
       * @param state the state object to be used to control or observe the list's state
       * @param contentPadding specify a padding around the whole content
       * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items will be
       *   laid out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
       *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
       *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
       *   (bottom).
       * @param verticalArrangement The vertical arrangement of the layout's children
       * @param horizontalArrangement The horizontal arrangement of the layout's children
       * @param flingBehavior logic describing fling behavior
       * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
       *   allowed. You can still scroll programmatically using the state even when it is disabled.
       * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
       *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
       *   need to use Modifier.overscroll separately.
       * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
       *   prefetch and retain items. The default cache window does not cache items while the user is not
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-383-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 383
    endLine: 417
    sha256: b818705efe9d9d3a32499e75833276cd9f5029c95c16eae06d677795048c6b3c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                  }
              }
          }

      /** Returns prefix sums of row heights. */
      @Composable
      private fun rememberRowHeightSums(rows: GridCells, verticalArrangement: Arrangement.Vertical) =
          remember<LazyGridSlotsProvider>(rows, verticalArrangement) {
              GridSlotCache { constraints ->
                  requirePrecondition(constraints.maxHeight != Constraints.Infinity) {
                      "LazyHorizontalGrid's height should be bound by parent."
                  }

                  val gridHeight = constraints.maxHeight
                  with(rows) {
                      calculateCrossAxisCellSizes(gridHeight, verticalArrangement.spacing.roundToPx())
                          .toIntArray()
                          .let { sizes ->
                              val positions = IntArray(sizes.size)
                              with(verticalArrangement) { arrange(gridHeight, sizes, positions) }
                              LazyGridSlots(sizes, positions)
                          }
                  }
              }
          }

      // Note: Implementing function interface is prohibited in K/JS (class A: () -> Unit)
      // therefore we workaround this limitation by inheriting a fun interface instead
      internal fun interface LazyGridSlotsProvider {
          fun invoke(density: Density, constraints: Constraints): LazyGridSlots
      }

      /** measurement cache to avoid recalculating row/column sizes on each scroll. */
      private class GridSlotCache(private val calculation: Density.(Constraints) -> LazyGridSlots) :
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-418-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 418
    endLine: 452
    sha256: bdd1bf82dcd1c1783836196e4043c40c703f0721cb35acb0971300cfcfa62028
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          LazyGridSlotsProvider {
          private var cachedConstraints = Constraints()
          private var cachedDensity: Float = 0f
          private var cachedSizes: LazyGridSlots? = null

          override fun invoke(density: Density, constraints: Constraints): LazyGridSlots {
              with(density) {
                  if (
                      cachedSizes != null &&
                          cachedConstraints == constraints &&
                          cachedDensity == this.density
                  ) {
                      return cachedSizes!!
                  }

                  cachedConstraints = constraints
                  cachedDensity = this.density
                  return calculation(constraints).also { cachedSizes = it }
              }
          }
      }

      /**
       * This class describes the count and the sizes of columns in vertical grids, or rows in horizontal
       * grids.
       */
      @Stable
      public interface GridCells {
          /**
           * Calculates the number of cells and their cross axis size based on [availableSize] and
           * [spacing].
           *
           * For example, in vertical grids, [spacing] is passed from the grid's [Arrangement.Horizontal].
           * The [Arrangement.Horizontal] will also be used to arrange items in a row if the grid is wider
           * than the calculated sum of columns.
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-453-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 453
    endLine: 487
    sha256: 18d059003b5448112e85232bb51aebc98dc8fa9fa94437206aa66545131e7cad
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * Note that the calculated cross axis sizes will be considered in an RTL-aware manner -- if the
           * grid is vertical and the layout direction is RTL, the first width in the returned list will
           * correspond to the rightmost column.
           *
           * @param availableSize available size on cross axis, e.g. width of [LazyVerticalGrid].
           * @param spacing cross axis spacing, e.g. horizontal spacing for [LazyVerticalGrid]. The
           *   spacing is passed from the corresponding [Arrangement] param of the lazy grid.
           */
          public fun Density.calculateCrossAxisCellSizes(availableSize: Int, spacing: Int): List<Int>

          /**
           * Defines a grid with fixed number of rows or columns.
           *
           * For example, for the vertical [LazyVerticalGrid] Fixed(3) would mean that there are 3 columns
           * 1/3 of the parent width.
           */
          public class Fixed(private val count: Int) : GridCells {
              init {
                  requirePrecondition(count > 0) { "Provided count should be larger than zero" }
              }

              override fun Density.calculateCrossAxisCellSizes(
                  availableSize: Int,
                  spacing: Int,
              ): List<Int> {
                  return calculateCellsCrossAxisSizeImpl(availableSize, count, spacing)
              }

              override fun hashCode(): Int {
                  return -count // Different sign from Adaptive.
              }

              override fun equals(other: Any?): Boolean {
                  return other is Fixed && count == other.count
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-488-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 488
    endLine: 522
    sha256: 79b70371da8d9a81d30bcfb7779117ea18334164b8f1d7ebd155f71aa6c8119c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          /**
           * Defines a grid with as many rows or columns as possible on the condition that every cell has
           * at least [minSize] space and all extra space distributed evenly.
           *
           * For example, for the vertical [LazyVerticalGrid] Adaptive(20.dp) would mean that there will
           * be as many columns as possible and every column will be at least 20.dp and all the columns
           * will have equal width. If the screen is 88.dp wide then there will be 4 columns 22.dp each.
           */
          public class Adaptive(private val minSize: Dp) : GridCells {
              init {
                  requirePrecondition(minSize > 0.dp) { "Provided min size should be larger than zero." }
              }

              override fun Density.calculateCrossAxisCellSizes(
                  availableSize: Int,
                  spacing: Int,
              ): List<Int> {
                  val count = maxOf((availableSize + spacing) / (minSize.roundToPx() + spacing), 1)
                  return calculateCellsCrossAxisSizeImpl(availableSize, count, spacing)
              }

              override fun hashCode(): Int {
                  return minSize.hashCode()
              }

              override fun equals(other: Any?): Boolean {
                  return other is Adaptive && minSize == other.minSize
              }
          }

          /**
           * Defines a grid with as many rows or columns as possible on the condition that every cell
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-523-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 523
    endLine: 557
    sha256: e62a6289fbb05ea645fec116429e446008b02dacc4a8fed47f15b10477bd177d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * takes exactly [size] space. The remaining space will be arranged through [LazyGrid]
           * arrangements on corresponding axis. If [size] is larger than container size, the cell will be
           * size to match the container.
           *
           * For example, for the vertical [LazyGrid] FixedSize(20.dp) would mean that there will be as
           * many columns as possible and every column will be exactly 20.dp. If the screen is 88.dp wide
           * tne there will be 4 columns 20.dp each with remaining 8.dp distributed through
           * [Arrangement.Horizontal].
           */
          public class FixedSize(private val size: Dp) : GridCells {
              init {
                  requirePrecondition(size > 0.dp) { "Provided size should be larger than zero." }
              }

              override fun Density.calculateCrossAxisCellSizes(
                  availableSize: Int,
                  spacing: Int,
              ): List<Int> {
                  val cellSize = size.roundToPx()
                  return if (cellSize + spacing < availableSize + spacing) {
                      val cellCount = (availableSize + spacing) / (cellSize + spacing)
                      List(cellCount) { cellSize }
                  } else {
                      List(1) { availableSize }
                  }
              }

              override fun hashCode(): Int {
                  return size.hashCode()
              }

              override fun equals(other: Any?): Boolean {
                  return other is FixedSize && size == other.size
              }
          }
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-558-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 558
    endLine: 592
    sha256: cf67fc2ee412156de4f3fa4a0066fe94851b7807b2534d0eda6784e43f2546c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      private fun calculateCellsCrossAxisSizeImpl(
          gridSize: Int,
          slotCount: Int,
          spacing: Int,
      ): List<Int> {
          val gridSizeWithoutSpacing = gridSize - spacing * (slotCount - 1)
          val slotSize = gridSizeWithoutSpacing / slotCount
          val remainingPixels = gridSizeWithoutSpacing % slotCount
          return List(slotCount) { slotSize + if (it < remainingPixels) 1 else 0 }
      }

      /** Receiver scope which is used by [LazyVerticalGrid]. */
      @LazyGridScopeMarker
      public sealed interface LazyGridScope {
          /**
           * Adds a single item to the scope.
           *
           * @param key a stable and unique key representing the item. Using the same key for multiple
           *   items in the grid is not allowed. Type of the key should be saveable via Bundle on Android.
           *   If null is passed the position in the grid will represent the key. When you specify the key
           *   the scroll position will be maintained based on the key, which means if you add/remove
           *   items before the current visible item the item with the given key will be kept as the first
           *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
           * @param span the span of the item. Default is 1x1. It is good practice to leave it `null` when
           *   this matches the intended behavior, as providing a custom implementation impacts
           *   performance
           * @param contentType the type of the content of this item. The item compositions of the same
           *   type could be reused more efficiently. Note that null is a valid type and items of such
           *   type will be considered compatible.
           * @param content the content of the item
           */
          public fun item(
              key: Any? = null,
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-593-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 593
    endLine: 627
    sha256: feb11dce5ba31d84071453887ad4c747f4cccd932b62c1de9ee78c68146ed233
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              span: (LazyGridItemSpanScope.() -> GridItemSpan)? = null,
              contentType: Any? = null,
              content: @Composable LazyGridItemScope.() -> Unit,
          )

          /**
           * Adds a [count] of items.
           *
           * @param count the items count
           * @param key a factory of stable and unique keys representing the item. Using the same key for
           *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
           *   Android. If null is passed the position in the grid will represent the key. When you
           *   specify the key the scroll position will be maintained based on the key, which means if you
           *   add/remove items before the current visible item the item with the given key will be kept
           *   as the first visible one.This can be overridden by calling
           *   [LazyGridState.requestScrollToItem].
           * @param span define custom spans for the items. Default is 1x1. It is good practice to leave
           *   it `null` when this matches the intended behavior, as providing a custom implementation
           *   impacts performance
           * @param contentType a factory of the content types for the item. The item compositions of the
           *   same type could be reused more efficiently. Note that null is a valid type and items of
           *   such type will be considered compatible.
           * @param itemContent the content displayed by a single item
           */
          public fun items(
              count: Int,
              key: ((index: Int) -> Any)? = null,
              span: (LazyGridItemSpanScope.(index: Int) -> GridItemSpan)? = null,
              contentType: (index: Int) -> Any? = { null },
              itemContent: @Composable LazyGridItemScope.(index: Int) -> Unit,
          )

          /**
           * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
           * will remain pinned until the next header will take its place. Sticky Headers are full span
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-628-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 628
    endLine: 662
    sha256: eb26d533e1433560480a028ae8def0e4a2c6a84ea01d6798cd88ba691e06b6f0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * items, that is, they will occupy [LazyGridItemSpanScope.maxLineSpan].
           *
           * @sample androidx.compose.foundation.samples.StickyHeaderGridSample
           * @param key a stable and unique key representing the item. Using the same key for multiple
           *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
           *   If null is passed the position in the list will represent the key. When you specify the key
           *   the scroll position will be maintained based on the key, which means if you add/remove
           *   items before the current visible item the item with the given key will be kept as the first
           *   visible one. This can be overridden by calling 'requestScrollToItem' on the
           *   'LazyGridState'.
           * @param contentType the type of the content of this item. The item compositions of the same
           *   type could be reused more efficiently. Note that null is a valid type and items of such
           *   type will be considered compatible.
           * @param content the content of the header. The header index is provided, this is the item
           *   position within the total set of items in this lazy list (the global index).
           */
          public fun stickyHeader(
              key: Any? = null,
              contentType: Any? = null,
              content: @Composable LazyGridItemScope.(Int) -> Unit,
          )
      }

      /**
       * Adds a list of items.
       *
       * @param items the data list
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the grid will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
       * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
       *   `null` when this matches the intended behavior, as providing a custom implementation impacts
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-663-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 663
    endLine: 697
    sha256: 8c4550cf901a2b8bf95ebf1e19949505a49dd56e101d23e81631c3053756ecf1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   performance
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyGridScope.items(
          items: List<T>,
          noinline key: ((item: T) -> Any)? = null,
          noinline span: (LazyGridItemSpanScope.(item: T) -> GridItemSpan)? = null,
          noinline contentType: (item: T) -> Any? = { null },
          crossinline itemContent: @Composable LazyGridItemScope.(item: T) -> Unit,
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(items[index]) } else null,
              span =
                  if (span != null) {
                      { span(items[it]) }
                  } else null,
              contentType = { index: Int -> contentType(items[index]) },
          ) {
              itemContent(items[it])
          }

      /**
       * Adds a list of items where the content of an item is aware of its index.
       *
       * @param items the data list
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the grid will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-698-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 698
    endLine: 732
    sha256: e34f655562536123371d89c8c4d6913be1a08f3bf2fa2321332241edce0c6e72
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
       *   `null` when this matches the intended behavior, as providing a custom implementation impacts
       *   performance
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyGridScope.itemsIndexed(
          items: List<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          noinline span: (LazyGridItemSpanScope.(index: Int, item: T) -> GridItemSpan)? = null,
          crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
          crossinline itemContent: @Composable LazyGridItemScope.(index: Int, item: T) -> Unit,
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(index, items[index]) } else null,
              span =
                  if (span != null) {
                      { span(it, items[it]) }
                  } else null,
              contentType = { index -> contentType(index, items[index]) },
          ) {
              itemContent(it, items[it])
          }

      /**
       * Adds an array of items.
       *
       * @param items the data array
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
       *   Android. If null is passed the position in the grid will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 71
    endLine: 105
    sha256: 554a0be4eaa2df95e0fe5d364c9363f543c19a4461a20a3240b0b36967baaffc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
       *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
       *   when scrolling back and forth.
       * @param content the [LazyGridScope] which describes the content
       */
      @Composable
      public fun LazyVerticalGrid(
          columns: GridCells,
          modifier: Modifier = Modifier,
          state: LazyGridState = rememberLazyGridState(),
          contentPadding: PaddingValues = PaddingValues(0.dp),
          reverseLayout: Boolean = false,
          verticalArrangement: Arrangement.Vertical =
              if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
          horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
          flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
          userScrollEnabled: Boolean = true,
          overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
          cacheWindow: LazyLayoutCacheWindow = LazyGridDefaults.cacheWindow(state),
          content: LazyGridScope.() -> Unit,
      ) {
          LazyGrid(
              slots = rememberColumnWidthSums(columns, horizontalArrangement),
              modifier = modifier,
              state = state,
              contentPadding = contentPadding,
              reverseLayout = reverseLayout,
              isVertical = true,
              horizontalArrangement = horizontalArrangement,
              verticalArrangement = verticalArrangement,
              flingBehavior = flingBehavior,
              userScrollEnabled = userScrollEnabled,
              overscrollEffect = overscrollEffect,
              cacheWindow = cacheWindow,
              content = content,
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-733-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 733
    endLine: 767
    sha256: 17077e1eae1ae6118e49d4e7a76598d150ce1166510071d050d0731efbdcd65e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one.This can be overridden by calling [LazyGridState.requestScrollToItem].
       * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
       *   `null` when this matches the intended behavior, as providing a custom implementation impacts
       *   performance
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyGridScope.items(
          items: Array<T>,
          noinline key: ((item: T) -> Any)? = null,
          noinline span: (LazyGridItemSpanScope.(item: T) -> GridItemSpan)? = null,
          noinline contentType: (item: T) -> Any? = { null },
          crossinline itemContent: @Composable LazyGridItemScope.(item: T) -> Unit,
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(items[index]) } else null,
              span =
                  if (span != null) {
                      { span(items[it]) }
                  } else null,
              contentType = { index: Int -> contentType(items[index]) },
          ) {
              itemContent(items[it])
          }

      /**
       * Adds an array of items where the content of an item is aware of its index.
       *
       * @param items the data array
       * @param key a factory of stable and unique keys representing the item. Using the same key for
       *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
  - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-768-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt
    startLine: 768
    endLine: 798
    sha256: 9f522789a602347cda30c0d290768f36d3a3a6d56f7a98cf720fb50fa85b5794
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       *   Android. If null is passed the position in the grid will represent the key. When you specify
       *   the key the scroll position will be maintained based on the key, which means if you add/remove
       *   items before the current visible item the item with the given key will be kept as the first
       *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
       * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
       *   `null` when this matches the intended behavior, as providing a custom implementation impacts
       *   performance
       * @param contentType a factory of the content types for the item. The item compositions of the same
       *   type could be reused more efficiently. Note that null is a valid type and items of such type
       *   will be considered compatible.
       * @param itemContent the content displayed by a single item
       */
      public inline fun <T> LazyGridScope.itemsIndexed(
          items: Array<T>,
          noinline key: ((index: Int, item: T) -> Any)? = null,
          noinline span: (LazyGridItemSpanScope.(index: Int, item: T) -> GridItemSpan)? = null,
          crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
          crossinline itemContent: @Composable LazyGridItemScope.(index: Int, item: T) -> Unit,
      ): Unit =
          items(
              count = items.size,
              key = if (key != null) { index: Int -> key(index, items[index]) } else null,
              span =
                  if (span != null) {
                      { span(it, items[it]) }
                  } else null,
              contentType = { index -> contentType(index, items[index]) },
          ) {
              itemContent(it, items[it])
          }
compose:
  id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.lazy.grid
  sections:
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-1
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-106
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-141
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-176
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.LazyGridScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-211
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 211–244)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-245
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 245–279)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyGridScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-245-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-280
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 280–312)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-280-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-313
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 313–347)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-313-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-348
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 348–382)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-348-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-36
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-383
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 383–417)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyHorizontalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-383-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-418
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 418–452)
      aliases:
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-418-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-453
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 453–487)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-453-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-488
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 488–522)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-488-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-523
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 523–557)
      aliases:
        - androidx.compose.foundation.lazy.grid.GridCells
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-523-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-558
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 558–592)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-558-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-593
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 593–627)
      aliases:
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-593-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-628
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 628–662)
      aliases:
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-628-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-663
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 663–697)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-663-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-698
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 698–732)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
        - androidx.compose.foundation.lazy.grid.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-698-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-71
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyVerticalGrid
        - androidx.compose.foundation.lazy.grid.GridCells
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-733
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 733–767)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-733-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-768
      title: androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 768–798)
      aliases:
        - androidx.compose.foundation.lazy.grid.LazyGridScope
        - androidx.compose.foundation.lazy.grid.items
        - androidx.compose.foundation.lazy.grid.itemsIndexed
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-768-source
      relatedIds: []
---

# androidx.compose.foundation.lazy.grid LazyGridDsl.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 1–35)

/*
 * Copyright 2022 The Android Open Source Project
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

package androidx.compose.foundation.lazy.grid

import androidx.compose.foundation.OverscrollEffect
import androidx.compose.foundation.gestures.FlingBehavior
import androidx.compose.foundation.gestures.ScrollableDefaults
import androidx.compose.foundation.internal.requirePrecondition
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.lazy.layout.LazyLayoutCacheWindow
import androidx.compose.foundation.rememberOverscrollEffect
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 106–140)

    )
}

/**
 * A lazy vertical grid layout. It composes only visible rows of the grid.
 *
 * Sample:
 *
 * @sample androidx.compose.foundation.samples.LazyVerticalGridSample
 *
 * Sample with custom item spans:
 *
 * @sample androidx.compose.foundation.samples.LazyVerticalGridSpanSample
 * @param columns describes the count and the size of the grid's columns, see [GridCells] doc for
 *   more information
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding specify a padding around the whole content
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items will be
 *   laid out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
 *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
 *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
 *   (bottom).
 * @param verticalArrangement The vertical arrangement of the layout's children
 * @param horizontalArrangement The horizontal arrangement of the layout's children
 * @param flingBehavior logic describing fling behavior
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param content the [LazyGridScope] which describes the content
 */
@Composable
@Deprecated("Use the non-deprecated overload", level = DeprecationLevel.HIDDEN)

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 141–175)

public fun LazyVerticalGrid(
    columns: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    content: LazyGridScope.() -> Unit,
) {
    LazyVerticalGrid(
        columns = columns,
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        verticalArrangement = verticalArrangement,
        horizontalArrangement = horizontalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = LazyGridDefaults.cacheWindow(state),
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyVerticalGrid(
    columns: GridCells,
    modifier: Modifier = Modifier,

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 176–210)

    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    content: LazyGridScope.() -> Unit,
) {
    LazyVerticalGrid(
        columns = columns,
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        verticalArrangement = verticalArrangement,
        horizontalArrangement = horizontalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = rememberOverscrollEffect(),
        content = content,
    )
}

/**
 * A lazy horizontal grid layout. It composes only visible columns of the grid.
 *
 * Sample:
 *
 * @sample androidx.compose.foundation.samples.LazyHorizontalGridSample
 *
 * Sample with custom item spans:
 *
 * @sample androidx.compose.foundation.samples.LazyHorizontalGridSpanSample

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 211–244)

 *
 * Sample with custom cache window:
 *
 * @sample androidx.compose.foundation.samples.LazyGridCacheWindowSample
 * @param rows a class describing how cells form rows, see [GridCells] doc for more information
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding specify a padding around the whole content
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
 *   out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
 *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
 *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
 * @param verticalArrangement The vertical arrangement of the layout's children
 * @param horizontalArrangement The horizontal arrangement of the layout's children
 * @param flingBehavior logic describing fling behavior
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
 *   prefetch and retain items. The default cache window does not cache items while the user is not
 *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
 *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
 *   when scrolling back and forth.
 * @param content the [LazyGridScope] which describes the content
 */
@Composable
public fun LazyHorizontalGrid(
    rows: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 245–279)

    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    cacheWindow: LazyLayoutCacheWindow = LazyGridDefaults.cacheWindow(state),
    content: LazyGridScope.() -> Unit,
) {
    LazyGrid(
        slots = rememberRowHeightSums(rows, verticalArrangement),
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        isVertical = false,
        horizontalArrangement = horizontalArrangement,
        verticalArrangement = verticalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = cacheWindow,
        content = content,
    )
}

/**
 * A lazy horizontal grid layout. It composes only visible columns of the grid.
 *
 * Sample:
 *
 * @sample androidx.compose.foundation.samples.LazyHorizontalGridSample
 *
 * Sample with custom item spans:
 *

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-245-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 280–312)

 * @sample androidx.compose.foundation.samples.LazyHorizontalGridSpanSample
 * @param rows a class describing how cells form rows, see [GridCells] doc for more information
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding specify a padding around the whole content
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items are laid
 *   out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
 *   scrolled to the end. Note that [reverseLayout] does not change the behavior of
 *   [horizontalArrangement], e.g. with [Arrangement.Start] [123###] becomes [321###].
 * @param verticalArrangement The vertical arrangement of the layout's children
 * @param horizontalArrangement The horizontal arrangement of the layout's children
 * @param flingBehavior logic describing fling behavior
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param content the [LazyGridScope] which describes the content
 */
@Composable
@Deprecated("Use the non-deprecated overload", level = DeprecationLevel.HIDDEN)
public fun LazyHorizontalGrid(
    rows: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-280-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 313–347)

    content: LazyGridScope.() -> Unit,
) {
    LazyHorizontalGrid(
        rows = rows,
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        horizontalArrangement = horizontalArrangement,
        verticalArrangement = verticalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = LazyGridDefaults.cacheWindow(state),
        content = content,
    )
}

@Deprecated("Use the non deprecated overload", level = DeprecationLevel.HIDDEN)
@Composable
public fun LazyHorizontalGrid(
    rows: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    horizontalArrangement: Arrangement.Horizontal =
        if (!reverseLayout) Arrangement.Start else Arrangement.End,
    verticalArrangement: Arrangement.Vertical = Arrangement.Top,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    content: LazyGridScope.() -> Unit,
) {
    LazyHorizontalGrid(
        rows = rows,

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-313-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 348–382)

        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        horizontalArrangement = horizontalArrangement,
        verticalArrangement = verticalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = rememberOverscrollEffect(),
        content = content,
    )
}

/** Returns prefix sums of column widths. */
@Composable
private fun rememberColumnWidthSums(
    columns: GridCells,
    horizontalArrangement: Arrangement.Horizontal,
) =
    remember<LazyGridSlotsProvider>(columns, horizontalArrangement) {
        GridSlotCache { constraints ->
            requirePrecondition(constraints.maxWidth != Constraints.Infinity) {
                "LazyVerticalGrid's width should be bound by parent."
            }

            val gridWidth = constraints.maxWidth
            with(columns) {
                calculateCrossAxisCellSizes(gridWidth, horizontalArrangement.spacing.roundToPx())
                    .toIntArray()
                    .let { sizes ->
                        val positions = IntArray(sizes.size)
                        with(horizontalArrangement) {
                            arrange(gridWidth, sizes, LayoutDirection.Ltr, positions)
                        }
                        LazyGridSlots(sizes, positions)

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-348-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 36–70)


/**
 * A lazy vertical grid layout. It composes only visible rows of the grid.
 *
 * Sample:
 *
 * @sample androidx.compose.foundation.samples.LazyVerticalGridSample
 *
 * Sample with custom item spans:
 *
 * @sample androidx.compose.foundation.samples.LazyVerticalGridSpanSample
 *
 * Sample with custom cache window:
 *
 * @sample androidx.compose.foundation.samples.LazyGridCacheWindowSample
 * @param columns describes the count and the size of the grid's columns, see [GridCells] doc for
 *   more information
 * @param modifier the modifier to apply to this layout
 * @param state the state object to be used to control or observe the list's state
 * @param contentPadding specify a padding around the whole content
 * @param reverseLayout reverse the direction of scrolling and layout. When `true`, items will be
 *   laid out in the reverse order and [LazyGridState.firstVisibleItemIndex] == 0 means that grid is
 *   scrolled to the bottom. Note that [reverseLayout] does not change the behavior of
 *   [verticalArrangement], e.g. with [Arrangement.Top] (top) 123### (bottom) becomes (top) 321###
 *   (bottom).
 * @param verticalArrangement The vertical arrangement of the layout's children
 * @param horizontalArrangement The horizontal arrangement of the layout's children
 * @param flingBehavior logic describing fling behavior
 * @param userScrollEnabled whether the scrolling via the user gestures or accessibility actions is
 *   allowed. You can still scroll programmatically using the state even when it is disabled.
 * @param overscrollEffect the [OverscrollEffect] that will be used to render overscroll for this
 *   layout. Note that the [OverscrollEffect.node] will be applied internally as well - you do not
 *   need to use Modifier.overscroll separately.
 * @param cacheWindow [LazyLayoutCacheWindow] configuring the area ahead and behind the viewport to
 *   prefetch and retain items. The default cache window does not cache items while the user is not

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 383–417)

                    }
            }
        }
    }

/** Returns prefix sums of row heights. */
@Composable
private fun rememberRowHeightSums(rows: GridCells, verticalArrangement: Arrangement.Vertical) =
    remember<LazyGridSlotsProvider>(rows, verticalArrangement) {
        GridSlotCache { constraints ->
            requirePrecondition(constraints.maxHeight != Constraints.Infinity) {
                "LazyHorizontalGrid's height should be bound by parent."
            }

            val gridHeight = constraints.maxHeight
            with(rows) {
                calculateCrossAxisCellSizes(gridHeight, verticalArrangement.spacing.roundToPx())
                    .toIntArray()
                    .let { sizes ->
                        val positions = IntArray(sizes.size)
                        with(verticalArrangement) { arrange(gridHeight, sizes, positions) }
                        LazyGridSlots(sizes, positions)
                    }
            }
        }
    }

// Note: Implementing function interface is prohibited in K/JS (class A: () -> Unit)
// therefore we workaround this limitation by inheriting a fun interface instead
internal fun interface LazyGridSlotsProvider {
    fun invoke(density: Density, constraints: Constraints): LazyGridSlots
}

/** measurement cache to avoid recalculating row/column sizes on each scroll. */
private class GridSlotCache(private val calculation: Density.(Constraints) -> LazyGridSlots) :

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-383-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 418–452)

    LazyGridSlotsProvider {
    private var cachedConstraints = Constraints()
    private var cachedDensity: Float = 0f
    private var cachedSizes: LazyGridSlots? = null

    override fun invoke(density: Density, constraints: Constraints): LazyGridSlots {
        with(density) {
            if (
                cachedSizes != null &&
                    cachedConstraints == constraints &&
                    cachedDensity == this.density
            ) {
                return cachedSizes!!
            }

            cachedConstraints = constraints
            cachedDensity = this.density
            return calculation(constraints).also { cachedSizes = it }
        }
    }
}

/**
 * This class describes the count and the sizes of columns in vertical grids, or rows in horizontal
 * grids.
 */
@Stable
public interface GridCells {
    /**
     * Calculates the number of cells and their cross axis size based on [availableSize] and
     * [spacing].
     *
     * For example, in vertical grids, [spacing] is passed from the grid's [Arrangement.Horizontal].
     * The [Arrangement.Horizontal] will also be used to arrange items in a row if the grid is wider
     * than the calculated sum of columns.

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-418-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 453–487)

     *
     * Note that the calculated cross axis sizes will be considered in an RTL-aware manner -- if the
     * grid is vertical and the layout direction is RTL, the first width in the returned list will
     * correspond to the rightmost column.
     *
     * @param availableSize available size on cross axis, e.g. width of [LazyVerticalGrid].
     * @param spacing cross axis spacing, e.g. horizontal spacing for [LazyVerticalGrid]. The
     *   spacing is passed from the corresponding [Arrangement] param of the lazy grid.
     */
    public fun Density.calculateCrossAxisCellSizes(availableSize: Int, spacing: Int): List<Int>

    /**
     * Defines a grid with fixed number of rows or columns.
     *
     * For example, for the vertical [LazyVerticalGrid] Fixed(3) would mean that there are 3 columns
     * 1/3 of the parent width.
     */
    public class Fixed(private val count: Int) : GridCells {
        init {
            requirePrecondition(count > 0) { "Provided count should be larger than zero" }
        }

        override fun Density.calculateCrossAxisCellSizes(
            availableSize: Int,
            spacing: Int,
        ): List<Int> {
            return calculateCellsCrossAxisSizeImpl(availableSize, count, spacing)
        }

        override fun hashCode(): Int {
            return -count // Different sign from Adaptive.
        }

        override fun equals(other: Any?): Boolean {
            return other is Fixed && count == other.count

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-453-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 488–522)

        }
    }

    /**
     * Defines a grid with as many rows or columns as possible on the condition that every cell has
     * at least [minSize] space and all extra space distributed evenly.
     *
     * For example, for the vertical [LazyVerticalGrid] Adaptive(20.dp) would mean that there will
     * be as many columns as possible and every column will be at least 20.dp and all the columns
     * will have equal width. If the screen is 88.dp wide then there will be 4 columns 22.dp each.
     */
    public class Adaptive(private val minSize: Dp) : GridCells {
        init {
            requirePrecondition(minSize > 0.dp) { "Provided min size should be larger than zero." }
        }

        override fun Density.calculateCrossAxisCellSizes(
            availableSize: Int,
            spacing: Int,
        ): List<Int> {
            val count = maxOf((availableSize + spacing) / (minSize.roundToPx() + spacing), 1)
            return calculateCellsCrossAxisSizeImpl(availableSize, count, spacing)
        }

        override fun hashCode(): Int {
            return minSize.hashCode()
        }

        override fun equals(other: Any?): Boolean {
            return other is Adaptive && minSize == other.minSize
        }
    }

    /**
     * Defines a grid with as many rows or columns as possible on the condition that every cell

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-488-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 523–557)

     * takes exactly [size] space. The remaining space will be arranged through [LazyGrid]
     * arrangements on corresponding axis. If [size] is larger than container size, the cell will be
     * size to match the container.
     *
     * For example, for the vertical [LazyGrid] FixedSize(20.dp) would mean that there will be as
     * many columns as possible and every column will be exactly 20.dp. If the screen is 88.dp wide
     * tne there will be 4 columns 20.dp each with remaining 8.dp distributed through
     * [Arrangement.Horizontal].
     */
    public class FixedSize(private val size: Dp) : GridCells {
        init {
            requirePrecondition(size > 0.dp) { "Provided size should be larger than zero." }
        }

        override fun Density.calculateCrossAxisCellSizes(
            availableSize: Int,
            spacing: Int,
        ): List<Int> {
            val cellSize = size.roundToPx()
            return if (cellSize + spacing < availableSize + spacing) {
                val cellCount = (availableSize + spacing) / (cellSize + spacing)
                List(cellCount) { cellSize }
            } else {
                List(1) { availableSize }
            }
        }

        override fun hashCode(): Int {
            return size.hashCode()
        }

        override fun equals(other: Any?): Boolean {
            return other is FixedSize && size == other.size
        }
    }

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-523-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 558–592)

}

private fun calculateCellsCrossAxisSizeImpl(
    gridSize: Int,
    slotCount: Int,
    spacing: Int,
): List<Int> {
    val gridSizeWithoutSpacing = gridSize - spacing * (slotCount - 1)
    val slotSize = gridSizeWithoutSpacing / slotCount
    val remainingPixels = gridSizeWithoutSpacing % slotCount
    return List(slotCount) { slotSize + if (it < remainingPixels) 1 else 0 }
}

/** Receiver scope which is used by [LazyVerticalGrid]. */
@LazyGridScopeMarker
public sealed interface LazyGridScope {
    /**
     * Adds a single item to the scope.
     *
     * @param key a stable and unique key representing the item. Using the same key for multiple
     *   items in the grid is not allowed. Type of the key should be saveable via Bundle on Android.
     *   If null is passed the position in the grid will represent the key. When you specify the key
     *   the scroll position will be maintained based on the key, which means if you add/remove
     *   items before the current visible item the item with the given key will be kept as the first
     *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
     * @param span the span of the item. Default is 1x1. It is good practice to leave it `null` when
     *   this matches the intended behavior, as providing a custom implementation impacts
     *   performance
     * @param contentType the type of the content of this item. The item compositions of the same
     *   type could be reused more efficiently. Note that null is a valid type and items of such
     *   type will be considered compatible.
     * @param content the content of the item
     */
    public fun item(
        key: Any? = null,

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-558-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 593–627)

        span: (LazyGridItemSpanScope.() -> GridItemSpan)? = null,
        contentType: Any? = null,
        content: @Composable LazyGridItemScope.() -> Unit,
    )

    /**
     * Adds a [count] of items.
     *
     * @param count the items count
     * @param key a factory of stable and unique keys representing the item. Using the same key for
     *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
     *   Android. If null is passed the position in the grid will represent the key. When you
     *   specify the key the scroll position will be maintained based on the key, which means if you
     *   add/remove items before the current visible item the item with the given key will be kept
     *   as the first visible one.This can be overridden by calling
     *   [LazyGridState.requestScrollToItem].
     * @param span define custom spans for the items. Default is 1x1. It is good practice to leave
     *   it `null` when this matches the intended behavior, as providing a custom implementation
     *   impacts performance
     * @param contentType a factory of the content types for the item. The item compositions of the
     *   same type could be reused more efficiently. Note that null is a valid type and items of
     *   such type will be considered compatible.
     * @param itemContent the content displayed by a single item
     */
    public fun items(
        count: Int,
        key: ((index: Int) -> Any)? = null,
        span: (LazyGridItemSpanScope.(index: Int) -> GridItemSpan)? = null,
        contentType: (index: Int) -> Any? = { null },
        itemContent: @Composable LazyGridItemScope.(index: Int) -> Unit,
    )

    /**
     * Adds a sticky header item, which will remain pinned even when scrolling after it. The header
     * will remain pinned until the next header will take its place. Sticky Headers are full span

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-593-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 628–662)

     * items, that is, they will occupy [LazyGridItemSpanScope.maxLineSpan].
     *
     * @sample androidx.compose.foundation.samples.StickyHeaderGridSample
     * @param key a stable and unique key representing the item. Using the same key for multiple
     *   items in the list is not allowed. Type of the key should be saveable via Bundle on Android.
     *   If null is passed the position in the list will represent the key. When you specify the key
     *   the scroll position will be maintained based on the key, which means if you add/remove
     *   items before the current visible item the item with the given key will be kept as the first
     *   visible one. This can be overridden by calling 'requestScrollToItem' on the
     *   'LazyGridState'.
     * @param contentType the type of the content of this item. The item compositions of the same
     *   type could be reused more efficiently. Note that null is a valid type and items of such
     *   type will be considered compatible.
     * @param content the content of the header. The header index is provided, this is the item
     *   position within the total set of items in this lazy list (the global index).
     */
    public fun stickyHeader(
        key: Any? = null,
        contentType: Any? = null,
        content: @Composable LazyGridItemScope.(Int) -> Unit,
    )
}

/**
 * Adds a list of items.
 *
 * @param items the data list
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the grid will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
 * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
 *   `null` when this matches the intended behavior, as providing a custom implementation impacts

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-628-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 663–697)

 *   performance
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyGridScope.items(
    items: List<T>,
    noinline key: ((item: T) -> Any)? = null,
    noinline span: (LazyGridItemSpanScope.(item: T) -> GridItemSpan)? = null,
    noinline contentType: (item: T) -> Any? = { null },
    crossinline itemContent: @Composable LazyGridItemScope.(item: T) -> Unit,
): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(items[index]) } else null,
        span =
            if (span != null) {
                { span(items[it]) }
            } else null,
        contentType = { index: Int -> contentType(items[index]) },
    ) {
        itemContent(items[it])
    }

/**
 * Adds a list of items where the content of an item is aware of its index.
 *
 * @param items the data list
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the grid will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-663-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 698–732)

 * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
 *   `null` when this matches the intended behavior, as providing a custom implementation impacts
 *   performance
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyGridScope.itemsIndexed(
    items: List<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    noinline span: (LazyGridItemSpanScope.(index: Int, item: T) -> GridItemSpan)? = null,
    crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
    crossinline itemContent: @Composable LazyGridItemScope.(index: Int, item: T) -> Unit,
): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(index, items[index]) } else null,
        span =
            if (span != null) {
                { span(it, items[it]) }
            } else null,
        contentType = { index -> contentType(index, items[index]) },
    ) {
        itemContent(it, items[it])
    }

/**
 * Adds an array of items.
 *
 * @param items the data array
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on
 *   Android. If null is passed the position in the grid will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-698-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 71–105)

 *   scrolling. Override this to tune scrolling performance, such as increasing the ahead window to
 *   reduce frame drops during scrolling or adding a behind window to retain recently visible items
 *   when scrolling back and forth.
 * @param content the [LazyGridScope] which describes the content
 */
@Composable
public fun LazyVerticalGrid(
    columns: GridCells,
    modifier: Modifier = Modifier,
    state: LazyGridState = rememberLazyGridState(),
    contentPadding: PaddingValues = PaddingValues(0.dp),
    reverseLayout: Boolean = false,
    verticalArrangement: Arrangement.Vertical =
        if (!reverseLayout) Arrangement.Top else Arrangement.Bottom,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.Start,
    flingBehavior: FlingBehavior = ScrollableDefaults.flingBehavior(),
    userScrollEnabled: Boolean = true,
    overscrollEffect: OverscrollEffect? = rememberOverscrollEffect(),
    cacheWindow: LazyLayoutCacheWindow = LazyGridDefaults.cacheWindow(state),
    content: LazyGridScope.() -> Unit,
) {
    LazyGrid(
        slots = rememberColumnWidthSums(columns, horizontalArrangement),
        modifier = modifier,
        state = state,
        contentPadding = contentPadding,
        reverseLayout = reverseLayout,
        isVertical = true,
        horizontalArrangement = horizontalArrangement,
        verticalArrangement = verticalArrangement,
        flingBehavior = flingBehavior,
        userScrollEnabled = userScrollEnabled,
        overscrollEffect = overscrollEffect,
        cacheWindow = cacheWindow,
        content = content,

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 733–767)

 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one.This can be overridden by calling [LazyGridState.requestScrollToItem].
 * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
 *   `null` when this matches the intended behavior, as providing a custom implementation impacts
 *   performance
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyGridScope.items(
    items: Array<T>,
    noinline key: ((item: T) -> Any)? = null,
    noinline span: (LazyGridItemSpanScope.(item: T) -> GridItemSpan)? = null,
    noinline contentType: (item: T) -> Any? = { null },
    crossinline itemContent: @Composable LazyGridItemScope.(item: T) -> Unit,
): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(items[index]) } else null,
        span =
            if (span != null) {
                { span(items[it]) }
            } else null,
        contentType = { index: Int -> contentType(items[index]) },
    ) {
        itemContent(items[it])
    }

/**
 * Adds an array of items where the content of an item is aware of its index.
 *
 * @param items the data array
 * @param key a factory of stable and unique keys representing the item. Using the same key for
 *   multiple items in the grid is not allowed. Type of the key should be saveable via Bundle on

Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-733-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)

## androidx.compose.foundation.lazy.grid LazyGridDsl.kt source (lines 768–798)

 *   Android. If null is passed the position in the grid will represent the key. When you specify
 *   the key the scroll position will be maintained based on the key, which means if you add/remove
 *   items before the current visible item the item with the given key will be kept as the first
 *   visible one. This can be overridden by calling [LazyGridState.requestScrollToItem].
 * @param span define custom spans for the items. Default is 1x1. It is good practice to leave it
 *   `null` when this matches the intended behavior, as providing a custom implementation impacts
 *   performance
 * @param contentType a factory of the content types for the item. The item compositions of the same
 *   type could be reused more efficiently. Note that null is a valid type and items of such type
 *   will be considered compatible.
 * @param itemContent the content displayed by a single item
 */
public inline fun <T> LazyGridScope.itemsIndexed(
    items: Array<T>,
    noinline key: ((index: Int, item: T) -> Any)? = null,
    noinline span: (LazyGridItemSpanScope.(index: Int, item: T) -> GridItemSpan)? = null,
    crossinline contentType: (index: Int, item: T) -> Any? = { _, _ -> null },
    crossinline itemContent: @Composable LazyGridItemScope.(index: Int, item: T) -> Unit,
): Unit =
    items(
        count = items.size,
        key = if (key != null) { index: Int -> key(index, items[index]) } else null,
        span =
            if (span != null) {
                { span(it, items[it]) }
            } else null,
        contentType = { index -> contentType(index, items[index]) },
    ) {
        itemContent(it, items[it])
    }


Sources: [live-androidx-foundation-foundation-foundation-lazy-grid-lazygriddsl-lines-768-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/lazy/grid/LazyGridDsl.kt)
