---
type: reference
title: androidx.compose.foundation.layout Arrangement.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 1
    endLine: 35
    sha256: 1a4e3cc42de2a913b1a8a231b07dd5ec6949dffe6de360da10bf5286ec0cd49c
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

      import androidx.compose.foundation.layout.internal.JvmDefaultWithCompatibility
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.util.fastRoundToInt
      import kotlin.math.min

      /**
       * Used to specify the arrangement of the layout's children in layouts like [Row] or [Column] in the
       * main axis direction (horizontal and vertical, respectively).
       *
       * Below is an illustration of different horizontal arrangements in [Row]s: ![Row
       * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/row_arrangement_visualization.gif)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 106
    endLine: 140
    sha256: 68d1b1d7582bb9983d8763553fc447a59463a17da258137cfbc24663db48651f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * horizontal axis (left if the layout direction is LTR, right otherwise). Visually: 123#### for
           * LTR and ####321.
           */
          @Stable
          public val Start: Horizontal =
              object : Horizontal {
                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
                          placeLeftOrTop(sizes, outPositions, reverseInput = false)
                      } else {
                          placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = true)
                      }

                  override fun toString() = "Arrangement#Start"
              }

          /**
           * Place children horizontally such that they are as close as possible to the end of the main
           * axis. Visually: ####123 for LTR and 321#### for RTL.
           */
          @Stable
          public val End: Horizontal =
              object : Horizontal {
                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 141
    endLine: 175
    sha256: b629439e641633c0c60bfe953d56f9eefeaa744f431913f06aee47ba60c55ebb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)
                      } else {
                          placeLeftOrTop(sizes, outPositions, reverseInput = true)
                      }

                  override fun toString() = "Arrangement#End"
              }

          /**
           * Place children vertically such that they are as close as possible to the top of the main
           * axis. Visually: (top) 123#### (bottom)
           */
          @Stable
          public val Top: Vertical =
              object : Vertical {
                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeLeftOrTop(sizes, outPositions, reverseInput = false)

                  override fun toString() = "Arrangement#Top"
              }

          /**
           * Place children vertically such that they are as close as possible to the bottom of the main
           * axis. Visually: (top) ####123 (bottom)
           */
          @Stable
          public val Bottom: Vertical =
              object : Vertical {
                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)

                  override fun toString() = "Arrangement#Bottom"
              }

          /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 176
    endLine: 210
    sha256: 0824e658b7c8d44a3ab88cd7d65ecb304f61bd7020a625c4cded6d3146b88da3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Place children such that they are as close as possible to the middle of the main axis.
           * Visually: ##123## for LTR and ##321## for RTL.
           */
          @Stable
          public val Center: HorizontalOrVertical =
              object : HorizontalOrVertical {
                  override val spacing = 0.dp

                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
                          placeCenter(totalSize, sizes, outPositions, reverseInput = false)
                      } else {
                          placeCenter(totalSize, sizes, outPositions, reverseInput = true)
                      }

                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeCenter(totalSize, sizes, outPositions, reverseInput = false)

                  override fun toString() = "Arrangement#Center"
              }

          /**
           * Place children such that they are spaced evenly across the main axis, including free space
           * before the first child and after the last child. Visually: #1#2#3# for LTR and #3#2#1# for
           * RTL.
           */
          @Stable
          public val SpaceEvenly: HorizontalOrVertical =
              object : HorizontalOrVertical {
                  override val spacing = 0.dp
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 211
    endLine: 245
    sha256: b775917a88874ac232c68e2dd22a4ec2faac269ed8015bbd9bb7a98b2ca0a832
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
                          placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)
                      } else {
                          placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = true)
                      }

                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)

                  override fun toString() = "Arrangement#SpaceEvenly"
              }

          /**
           * Place children such that they are spaced evenly across the main axis, without free space
           * before the first child or after the last child. Visually: 1##2##3 for LTR or 3##2##1 for RTL.
           */
          @Stable
          public val SpaceBetween: HorizontalOrVertical =
              object : HorizontalOrVertical {
                  override val spacing = 0.dp

                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 246
    endLine: 280
    sha256: 6904cb44f40eb15ab4f924b3bed118064b3b5cd2e1777f9ee2f3918960fb37fe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)
                      } else {
                          placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = true)
                      }

                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)

                  override fun toString() = "Arrangement#SpaceBetween"
              }

          /**
           * Place children such that they are spaced evenly across the main axis, including free space
           * before the first child and after the last child, but half the amount of space existing
           * otherwise between two consecutive children. Visually: #1##2##3# for LTR and #3##2##1# for RTL
           */
          @Stable
          public val SpaceAround: HorizontalOrVertical =
              object : HorizontalOrVertical {
                  override val spacing = 0.dp

                  override fun Density.arrange(
                      totalSize: Int,
                      sizes: IntArray,
                      layoutDirection: LayoutDirection,
                      outPositions: IntArray,
                  ) =
                      if (layoutDirection == LayoutDirection.Ltr) {
                          placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)
                      } else {
                          placeSpaceAround(totalSize, sizes, outPositions, reverseInput = true)
                      }

                  override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                      placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 281
    endLine: 315
    sha256: bf2448ffcf9bd885c48b84e56054878e5472e0fec8637fd71becaef5017f23e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  override fun toString() = "Arrangement#SpaceAround"
              }

          /**
           * Place children such that each two adjacent ones are spaced by a fixed [space] distance across
           * the main axis. The spacing will be subtracted from the available space that the children can
           * occupy. The [space] can be negative, in which case children will overlap.
           *
           * To change alignment of the spaced children horizontally or vertically, use [spacedBy]
           * overloads with `alignment` parameter.
           *
           * @param space The space between adjacent children.
           */
          @Stable
          public fun spacedBy(space: Dp): HorizontalOrVertical =
              SpacedAligned(space, true) { size, layoutDirection ->
                  Alignment.Start.align(0, size, layoutDirection)
              }

          /**
           * Place children horizontally such that each two adjacent ones are spaced by a fixed [space]
           * distance. The spacing will be subtracted from the available width that the children can
           * occupy. An [alignment] can be specified to align the spaced children horizontally inside the
           * parent, in case there is empty width remaining. The [space] can be negative, in which case
           * children will overlap.
           *
           * @param space The space between adjacent children.
           * @param alignment The alignment of the spaced children inside the parent.
           */
          @Stable
          public fun spacedBy(space: Dp, alignment: Alignment.Horizontal): Horizontal =
              SpacedAligned(space, true) { size, layoutDirection ->
                  alignment.align(0, size, layoutDirection)
              }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 316
    endLine: 350
    sha256: f1782b03ef0df60a2e857a2f2d330414f796c31e089a0fbdaad574ba168f54c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Place children vertically such that each two adjacent ones are spaced by a fixed [space]
           * distance. The spacing will be subtracted from the available height that the children can
           * occupy. An [alignment] can be specified to align the spaced children vertically inside the
           * parent, in case there is empty height remaining. The [space] can be negative, in which case
           * children will overlap.
           *
           * @param space The space between adjacent children.
           * @param alignment The alignment of the spaced children inside the parent.
           */
          @Stable
          public fun spacedBy(space: Dp, alignment: Alignment.Vertical): Vertical =
              SpacedAligned(space, false) { size, _ -> alignment.align(0, size) }

          /**
           * Place children horizontally one next to the other and align the obtained group according to
           * an [alignment].
           *
           * @param alignment The alignment of the children inside the parent.
           */
          @Stable
          public fun aligned(alignment: Alignment.Horizontal): Horizontal =
              SpacedAligned(0.dp, true) { size, layoutDirection ->
                  alignment.align(0, size, layoutDirection)
              }

          /**
           * Place children vertically one next to the other and align the obtained group according to an
           * [alignment].
           *
           * @param alignment The alignment of the children inside the parent.
           */
          @Stable
          public fun aligned(alignment: Alignment.Vertical): Vertical =
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 351
    endLine: 385
    sha256: eafdb72ea5cd880457d13e1f9b0a15e2ecebdfe6bb9ad4f0a1835e17e97a3d71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              SpacedAligned(0.dp, false) { size, _ -> alignment.align(0, size) }

          @Immutable
          public object Absolute {
              /**
               * Place children horizontally such that they are as close as possible to the left edge of
               * the [Row].
               *
               * Unlike [Arrangement.Start], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * Visually: 123####
               */
              @Stable
              public val Left: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeLeftOrTop(sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#Left"
                  }

              /**
               * Place children such that they are as close as possible to the middle of the [Row].
               *
               * Unlike [Arrangement.Center], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * Visually: ##123##
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 36
    endLine: 70
    sha256: 8995879b0b22d9f02f5178b1128ad0a0cf691dad4032a4532f8476ea196f2ef6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Different vertical arrangements in [Column]s: ![Column
       * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/column_arrangement_visualization.gif)
       */
      @Immutable
      public object Arrangement {
          /**
           * Used to specify the horizontal arrangement of the layout's children in layouts like [Row].
           */
          @Stable
          @JvmDefaultWithCompatibility
          public interface Horizontal {
              /** Spacing that should be added between any two adjacent layout children. */
              public val spacing: Dp
                  get() = 0.dp

              /**
               * Horizontally places the layout children.
               *
               * @param totalSize Available space that can be occupied by the children, in pixels.
               * @param sizes An array of sizes of all children, in pixels.
               * @param layoutDirection A layout direction, left-to-right or right-to-left, of the parent
               *   layout that should be taken into account when determining positions of the children.
               * @param outPositions An array of the size of [sizes] that returns the calculated positions
               *   relative to the left, in pixels.
               */
              public fun Density.arrange(
                  totalSize: Int,
                  sizes: IntArray,
                  layoutDirection: LayoutDirection,
                  outPositions: IntArray,
              )
          }

          /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 386
    endLine: 420
    sha256: 4bfd76627358bc0d364735f1335bfe29c29744855cdd6fbc41086caf52c586ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               */
              @Stable
              public val Center: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeCenter(totalSize, sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#Center"
                  }

              /**
               * Place children horizontally such that they are as close as possible to the right edge of
               * the [Row].
               *
               * Unlike [Arrangement.End], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * Visually: ####123
               */
              @Stable
              public val Right: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#Right"
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 421
    endLine: 455
    sha256: e6cd88cc0817a304c2132b260a2e6f9cf7b3e635579040405ea02b5d8b274107
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }

              /**
               * Place children such that they are spaced evenly across the main axis, without free space
               * before the first child or after the last child.
               *
               * Unlike [Arrangement.SpaceBetween], when the layout direction is RTL, the children will
               * not be mirrored and as such children will appear in the order they are composed inside
               * the [Row].
               *
               * Visually: 1##2##3
               */
              @Stable
              public val SpaceBetween: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#SpaceBetween"
                  }

              /**
               * Place children such that they are spaced evenly across the main axis, including free
               * space before the first child and after the last child.
               *
               * Unlike [Arrangement.SpaceEvenly], when the layout direction is RTL, the children will not
               * be mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * Visually: #1#2#3#
               */
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 456
    endLine: 490
    sha256: 5a56263485109fc6ad6062a559d4b373edeedb7e2017c32a64fc4f9fe1f27c65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              @Stable
              public val SpaceEvenly: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#SpaceEvenly"
                  }

              /**
               * Place children such that they are spaced evenly horizontally, including free space before
               * the first child and after the last child, but half the amount of space existing otherwise
               * between two consecutive children.
               *
               * Unlike [Arrangement.SpaceAround], when the layout direction is RTL, the children will not
               * be mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * Visually: #1##2##3##4#
               */
              @Stable
              public val SpaceAround: Horizontal =
                  object : Horizontal {
                      override fun Density.arrange(
                          totalSize: Int,
                          sizes: IntArray,
                          layoutDirection: LayoutDirection,
                          outPositions: IntArray,
                      ) = placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)

                      override fun toString() = "AbsoluteArrangement#SpaceAround"
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 491
    endLine: 525
    sha256: 273f7cbc062cf0a70c18a44b58379a5bffbbb682d8e8e042381a760dcbde3bdd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  }

              /**
               * Place children such that each two adjacent ones are spaced by a fixed [space] distance
               * across the main axis. The spacing will be subtracted from the available space that the
               * children can occupy.
               *
               * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * @param space The space between adjacent children.
               */
              @Stable
              public fun spacedBy(space: Dp): HorizontalOrVertical = SpacedAligned(space, false, null)

              /**
               * Place children horizontally such that each two adjacent ones are spaced by a fixed
               * [space] distance. The spacing will be subtracted from the available width that the
               * children can occupy. An [alignment] can be specified to align the spaced children
               * horizontally inside the parent, in case there is empty width remaining.
               *
               * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * @param space The space between adjacent children.
               * @param alignment The alignment of the spaced children inside the parent.
               */
              @Stable
              public fun spacedBy(space: Dp, alignment: Alignment.Horizontal): Horizontal =
                  SpacedAligned(space, false) { size, layoutDirection ->
                      alignment.align(0, size, layoutDirection)
                  }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 526
    endLine: 560
    sha256: 0051ab939a08a56b2cd16e9de2fa7e3a8a34b4eaaa83304f74b46aaab882956e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /**
               * Place children vertically such that each two adjacent ones are spaced by a fixed [space]
               * distance. The spacing will be subtracted from the available height that the children can
               * occupy. An [alignment] can be specified to align the spaced children vertically inside
               * the parent, in case there is empty height remaining.
               *
               * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * @param space The space between adjacent children.
               * @param alignment The alignment of the spaced children inside the parent.
               */
              @Stable
              public fun spacedBy(space: Dp, alignment: Alignment.Vertical): Vertical =
                  SpacedAligned(space, false) { size, _ -> alignment.align(0, size) }

              /**
               * Place children horizontally one next to the other and align the obtained group according
               * to an [alignment].
               *
               * Unlike [Arrangement.aligned], when the layout direction is RTL, the children will not be
               * mirrored and as such children will appear in the order they are composed inside the
               * [Row].
               *
               * @param alignment The alignment of the children inside the parent.
               */
              @Stable
              public fun aligned(alignment: Alignment.Horizontal): Horizontal =
                  SpacedAligned(0.dp, false) { size, layoutDirection ->
                      alignment.align(0, size, layoutDirection)
                  }
          }

          /** Calculator for SpacedAligned alignment to avoid primitive boxing. */
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 561
    endLine: 595
    sha256: df2217f75877ade723a9d8c5faee15a30391d6c775d2488430d3144184f72c16
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal fun interface SpacingAlignmentCalculator {
              fun align(size: Int, layoutDirection: LayoutDirection): Int
          }

          /**
           * Arrangement with spacing between adjacent children and alignment for the spaced group. Should
           * not be instantiated directly, use [spacedBy] instead.
           */
          @Immutable
          internal data class SpacedAligned(
              val space: Dp,
              val rtlMirror: Boolean,
              val alignment: SpacingAlignmentCalculator?,
          ) : HorizontalOrVertical {

              override val spacing = space

              override fun Density.arrange(
                  totalSize: Int,
                  sizes: IntArray,
                  layoutDirection: LayoutDirection,
                  outPositions: IntArray,
              ) {
                  if (sizes.isEmpty()) return
                  val spacePx = space.roundToPx()
                  val isRtl = rtlMirror && layoutDirection == LayoutDirection.Rtl
                  var lastSpace = 0
                  var freeSpace = totalSize
                  if (isRtl) {
                      sizes.forEachIndexed { index, it ->
                          outPositions[index] = maxOf(0, freeSpace - it)
                          lastSpace = min(spacePx, outPositions[index])
                          freeSpace = outPositions[index] - lastSpace
                      }
                      freeSpace += lastSpace
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 596
    endLine: 630
    sha256: 978123b5c65f65811b1d898685c0190c170f8c8deb7919e1a42e1c5f9cf9d268
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      var occupied = 0
                      sizes.forEachIndexed { index, it ->
                          outPositions[index] = min(occupied, totalSize - it)
                          lastSpace = min(spacePx, totalSize - outPositions[index] - it)
                          occupied = outPositions[index] + it + lastSpace
                      }
                      occupied -= lastSpace
                      freeSpace = totalSize - occupied
                  }

                  if (alignment != null && freeSpace > 0) {
                      val groupPosition = alignment.align(freeSpace, layoutDirection)

                      // LTR items are packed at the start (0), so shifting by groupPosition is correct.
                      // RTL items are packed at the end (remainingSpace), so shift relative to that.
                      val offset = if (isRtl) groupPosition - freeSpace else groupPosition

                      if (offset != 0) {
                          for (index in outPositions.indices) {
                              outPositions[index] += offset
                          }
                      }
                  }
              }

              override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                  arrange(totalSize, sizes, LayoutDirection.Ltr, outPositions)

              override fun toString() =
                  "${if (rtlMirror) "" else "Absolute"}Arrangement#spacedAligned($space, $alignment)"
          }

          internal fun placeRightOrBottom(
              totalSize: Int,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 631
    endLine: 665
    sha256: 1784df65860eaa49ec2f135f254ab6a1f9937d43edac67be258a8ef3f0bdae6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              size: IntArray,
              outPosition: IntArray,
              reverseInput: Boolean,
          ) {
              val consumedSize = size.fold(0) { a, b -> a + b }
              var current = totalSize - consumedSize
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current
                  current += it
              }
          }

          internal fun placeLeftOrTop(size: IntArray, outPosition: IntArray, reverseInput: Boolean) {
              var current = 0
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current
                  current += it
              }
          }

          internal fun placeCenter(
              totalSize: Int,
              size: IntArray,
              outPosition: IntArray,
              reverseInput: Boolean,
          ) {
              val consumedSize = size.fold(0) { a, b -> a + b }
              var current = (totalSize - consumedSize).toFloat() / 2
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current.fastRoundToInt()
                  current += it.toFloat()
              }
          }

          internal fun placeSpaceEvenly(
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 666
    endLine: 700
    sha256: 88c2f1ecc23ee4ccd7e3dd997a59fee324836fa60f00dd9ba811b78735831b15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              totalSize: Int,
              size: IntArray,
              outPosition: IntArray,
              reverseInput: Boolean,
          ) {
              val consumedSize = size.fold(0) { a, b -> a + b }
              val gapSize = (totalSize - consumedSize).toFloat() / (size.size + 1)
              var current = gapSize
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current.fastRoundToInt()
                  current += it.toFloat() + gapSize
              }
          }

          internal fun placeSpaceBetween(
              totalSize: Int,
              size: IntArray,
              outPosition: IntArray,
              reverseInput: Boolean,
          ) {
              if (size.isEmpty()) return

              val consumedSize = size.fold(0) { a, b -> a + b }
              val noOfGaps = maxOf(size.lastIndex, 1)
              val gapSize = (totalSize - consumedSize).toFloat() / noOfGaps

              var current = 0f
              if (reverseInput && size.size == 1) {
                  // If the layout direction is right-to-left and there is only one gap,
                  // we start current with the gap size. That forces the single item to be right-aligned.
                  current = gapSize
              }
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current.fastRoundToInt()
                  current += it.toFloat() + gapSize
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 701
    endLine: 734
    sha256: dd7442060963648d637c282167df1ae723cc913d523cad80ad10d740e4596fbd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              }
          }

          internal fun placeSpaceAround(
              totalSize: Int,
              size: IntArray,
              outPosition: IntArray,
              reverseInput: Boolean,
          ) {
              val consumedSize = size.fold(0) { a, b -> a + b }
              val gapSize =
                  if (size.isNotEmpty()) {
                      (totalSize - consumedSize).toFloat() / size.size
                  } else {
                      0f
                  }
              var current = gapSize / 2
              size.forEachIndexed(reverseInput) { index, it ->
                  outPosition[index] = current.fastRoundToInt()
                  current += it.toFloat() + gapSize
              }
          }

          private inline fun IntArray.forEachIndexed(reversed: Boolean, action: (Int, Int) -> Unit) {
              if (!reversed) {
                  forEachIndexed(action)
              } else {
                  for (i in (size - 1) downTo 0) {
                      action(i, get(i))
                  }
              }
          }
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt
    startLine: 71
    endLine: 105
    sha256: 78536eb45141adcc515b3c424910820fedb11597a639e82e5ed66225a3c87f19
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Used to specify the vertical arrangement of the layout's children in layouts like [Column].
           */
          @Stable
          @JvmDefaultWithCompatibility
          public interface Vertical {
              /** Spacing that should be added between any two adjacent layout children. */
              public val spacing: Dp
                  get() = 0.dp

              /**
               * Vertically places the layout children.
               *
               * @param totalSize Available space that can be occupied by the children, in pixels.
               * @param sizes An array of sizes of all children, in pixels.
               * @param outPositions An array of the size of [sizes] that returns the calculated positions
               *   relative to the top, in pixels.
               */
              public fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray)
          }

          /**
           * Used to specify the horizontal arrangement of the layout's children in horizontal layouts
           * like [Row], or the vertical arrangement of the layout's children in vertical layouts like
           * [Column].
           */
          @Stable
          @JvmDefaultWithCompatibility
          public interface HorizontalOrVertical : Horizontal, Vertical {
              /** Spacing that should be added between any two adjacent layout children. */
              override val spacing: Dp
                  get() = 0.dp
          }

          /**
           * Place children horizontally such that they are as close as possible to the beginning of the
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-1
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-106
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-141
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-176
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-211
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-246
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-281
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-316
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-351
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-36
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-386
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 386–420)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-421
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 421–455)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-456
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 456–490)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-491
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 491–525)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-526
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-561
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 561–595)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-596
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 596–630)
      aliases:
        - androidx.compose.foundation.layout.Arrangement
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-631
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 631–665)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-631-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-666
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-666-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-701
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 701–734)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-701-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-71
      title: androidx.compose.foundation.layout Arrangement.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.layout Arrangement.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt

## androidx.compose.foundation.layout Arrangement.kt source (lines 1–35)

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

import androidx.compose.foundation.layout.internal.JvmDefaultWithCompatibility
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Alignment
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.fastRoundToInt
import kotlin.math.min

/**
 * Used to specify the arrangement of the layout's children in layouts like [Row] or [Column] in the
 * main axis direction (horizontal and vertical, respectively).
 *
 * Below is an illustration of different horizontal arrangements in [Row]s: ![Row
 * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/row_arrangement_visualization.gif)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 106–140)

     * horizontal axis (left if the layout direction is LTR, right otherwise). Visually: 123#### for
     * LTR and ####321.
     */
    @Stable
    public val Start: Horizontal =
        object : Horizontal {
            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {
                    placeLeftOrTop(sizes, outPositions, reverseInput = false)
                } else {
                    placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = true)
                }

            override fun toString() = "Arrangement#Start"
        }

    /**
     * Place children horizontally such that they are as close as possible to the end of the main
     * axis. Visually: ####123 for LTR and 321#### for RTL.
     */
    @Stable
    public val End: Horizontal =
        object : Horizontal {
            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 141–175)

                    placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)
                } else {
                    placeLeftOrTop(sizes, outPositions, reverseInput = true)
                }

            override fun toString() = "Arrangement#End"
        }

    /**
     * Place children vertically such that they are as close as possible to the top of the main
     * axis. Visually: (top) 123#### (bottom)
     */
    @Stable
    public val Top: Vertical =
        object : Vertical {
            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeLeftOrTop(sizes, outPositions, reverseInput = false)

            override fun toString() = "Arrangement#Top"
        }

    /**
     * Place children vertically such that they are as close as possible to the bottom of the main
     * axis. Visually: (top) ####123 (bottom)
     */
    @Stable
    public val Bottom: Vertical =
        object : Vertical {
            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)

            override fun toString() = "Arrangement#Bottom"
        }

    /**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 176–210)

     * Place children such that they are as close as possible to the middle of the main axis.
     * Visually: ##123## for LTR and ##321## for RTL.
     */
    @Stable
    public val Center: HorizontalOrVertical =
        object : HorizontalOrVertical {
            override val spacing = 0.dp

            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {
                    placeCenter(totalSize, sizes, outPositions, reverseInput = false)
                } else {
                    placeCenter(totalSize, sizes, outPositions, reverseInput = true)
                }

            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeCenter(totalSize, sizes, outPositions, reverseInput = false)

            override fun toString() = "Arrangement#Center"
        }

    /**
     * Place children such that they are spaced evenly across the main axis, including free space
     * before the first child and after the last child. Visually: #1#2#3# for LTR and #3#2#1# for
     * RTL.
     */
    @Stable
    public val SpaceEvenly: HorizontalOrVertical =
        object : HorizontalOrVertical {
            override val spacing = 0.dp

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 211–245)


            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {
                    placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)
                } else {
                    placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = true)
                }

            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)

            override fun toString() = "Arrangement#SpaceEvenly"
        }

    /**
     * Place children such that they are spaced evenly across the main axis, without free space
     * before the first child or after the last child. Visually: 1##2##3 for LTR or 3##2##1 for RTL.
     */
    @Stable
    public val SpaceBetween: HorizontalOrVertical =
        object : HorizontalOrVertical {
            override val spacing = 0.dp

            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 246–280)

                    placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)
                } else {
                    placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = true)
                }

            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)

            override fun toString() = "Arrangement#SpaceBetween"
        }

    /**
     * Place children such that they are spaced evenly across the main axis, including free space
     * before the first child and after the last child, but half the amount of space existing
     * otherwise between two consecutive children. Visually: #1##2##3# for LTR and #3##2##1# for RTL
     */
    @Stable
    public val SpaceAround: HorizontalOrVertical =
        object : HorizontalOrVertical {
            override val spacing = 0.dp

            override fun Density.arrange(
                totalSize: Int,
                sizes: IntArray,
                layoutDirection: LayoutDirection,
                outPositions: IntArray,
            ) =
                if (layoutDirection == LayoutDirection.Ltr) {
                    placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)
                } else {
                    placeSpaceAround(totalSize, sizes, outPositions, reverseInput = true)
                }

            override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
                placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 281–315)


            override fun toString() = "Arrangement#SpaceAround"
        }

    /**
     * Place children such that each two adjacent ones are spaced by a fixed [space] distance across
     * the main axis. The spacing will be subtracted from the available space that the children can
     * occupy. The [space] can be negative, in which case children will overlap.
     *
     * To change alignment of the spaced children horizontally or vertically, use [spacedBy]
     * overloads with `alignment` parameter.
     *
     * @param space The space between adjacent children.
     */
    @Stable
    public fun spacedBy(space: Dp): HorizontalOrVertical =
        SpacedAligned(space, true) { size, layoutDirection ->
            Alignment.Start.align(0, size, layoutDirection)
        }

    /**
     * Place children horizontally such that each two adjacent ones are spaced by a fixed [space]
     * distance. The spacing will be subtracted from the available width that the children can
     * occupy. An [alignment] can be specified to align the spaced children horizontally inside the
     * parent, in case there is empty width remaining. The [space] can be negative, in which case
     * children will overlap.
     *
     * @param space The space between adjacent children.
     * @param alignment The alignment of the spaced children inside the parent.
     */
    @Stable
    public fun spacedBy(space: Dp, alignment: Alignment.Horizontal): Horizontal =
        SpacedAligned(space, true) { size, layoutDirection ->
            alignment.align(0, size, layoutDirection)
        }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 316–350)


    /**
     * Place children vertically such that each two adjacent ones are spaced by a fixed [space]
     * distance. The spacing will be subtracted from the available height that the children can
     * occupy. An [alignment] can be specified to align the spaced children vertically inside the
     * parent, in case there is empty height remaining. The [space] can be negative, in which case
     * children will overlap.
     *
     * @param space The space between adjacent children.
     * @param alignment The alignment of the spaced children inside the parent.
     */
    @Stable
    public fun spacedBy(space: Dp, alignment: Alignment.Vertical): Vertical =
        SpacedAligned(space, false) { size, _ -> alignment.align(0, size) }

    /**
     * Place children horizontally one next to the other and align the obtained group according to
     * an [alignment].
     *
     * @param alignment The alignment of the children inside the parent.
     */
    @Stable
    public fun aligned(alignment: Alignment.Horizontal): Horizontal =
        SpacedAligned(0.dp, true) { size, layoutDirection ->
            alignment.align(0, size, layoutDirection)
        }

    /**
     * Place children vertically one next to the other and align the obtained group according to an
     * [alignment].
     *
     * @param alignment The alignment of the children inside the parent.
     */
    @Stable
    public fun aligned(alignment: Alignment.Vertical): Vertical =

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 351–385)

        SpacedAligned(0.dp, false) { size, _ -> alignment.align(0, size) }

    @Immutable
    public object Absolute {
        /**
         * Place children horizontally such that they are as close as possible to the left edge of
         * the [Row].
         *
         * Unlike [Arrangement.Start], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * Visually: 123####
         */
        @Stable
        public val Left: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeLeftOrTop(sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#Left"
            }

        /**
         * Place children such that they are as close as possible to the middle of the [Row].
         *
         * Unlike [Arrangement.Center], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * Visually: ##123##

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 36–70)

 *
 * Different vertical arrangements in [Column]s: ![Column
 * arrangements](https://developer.android.com/images/reference/androidx/compose/foundation/layout/column_arrangement_visualization.gif)
 */
@Immutable
public object Arrangement {
    /**
     * Used to specify the horizontal arrangement of the layout's children in layouts like [Row].
     */
    @Stable
    @JvmDefaultWithCompatibility
    public interface Horizontal {
        /** Spacing that should be added between any two adjacent layout children. */
        public val spacing: Dp
            get() = 0.dp

        /**
         * Horizontally places the layout children.
         *
         * @param totalSize Available space that can be occupied by the children, in pixels.
         * @param sizes An array of sizes of all children, in pixels.
         * @param layoutDirection A layout direction, left-to-right or right-to-left, of the parent
         *   layout that should be taken into account when determining positions of the children.
         * @param outPositions An array of the size of [sizes] that returns the calculated positions
         *   relative to the left, in pixels.
         */
        public fun Density.arrange(
            totalSize: Int,
            sizes: IntArray,
            layoutDirection: LayoutDirection,
            outPositions: IntArray,
        )
    }

    /**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 386–420)

         */
        @Stable
        public val Center: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeCenter(totalSize, sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#Center"
            }

        /**
         * Place children horizontally such that they are as close as possible to the right edge of
         * the [Row].
         *
         * Unlike [Arrangement.End], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * Visually: ####123
         */
        @Stable
        public val Right: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeRightOrBottom(totalSize, sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#Right"

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 421–455)

            }

        /**
         * Place children such that they are spaced evenly across the main axis, without free space
         * before the first child or after the last child.
         *
         * Unlike [Arrangement.SpaceBetween], when the layout direction is RTL, the children will
         * not be mirrored and as such children will appear in the order they are composed inside
         * the [Row].
         *
         * Visually: 1##2##3
         */
        @Stable
        public val SpaceBetween: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeSpaceBetween(totalSize, sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#SpaceBetween"
            }

        /**
         * Place children such that they are spaced evenly across the main axis, including free
         * space before the first child and after the last child.
         *
         * Unlike [Arrangement.SpaceEvenly], when the layout direction is RTL, the children will not
         * be mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * Visually: #1#2#3#
         */

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 456–490)

        @Stable
        public val SpaceEvenly: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeSpaceEvenly(totalSize, sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#SpaceEvenly"
            }

        /**
         * Place children such that they are spaced evenly horizontally, including free space before
         * the first child and after the last child, but half the amount of space existing otherwise
         * between two consecutive children.
         *
         * Unlike [Arrangement.SpaceAround], when the layout direction is RTL, the children will not
         * be mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * Visually: #1##2##3##4#
         */
        @Stable
        public val SpaceAround: Horizontal =
            object : Horizontal {
                override fun Density.arrange(
                    totalSize: Int,
                    sizes: IntArray,
                    layoutDirection: LayoutDirection,
                    outPositions: IntArray,
                ) = placeSpaceAround(totalSize, sizes, outPositions, reverseInput = false)

                override fun toString() = "AbsoluteArrangement#SpaceAround"

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 491–525)

            }

        /**
         * Place children such that each two adjacent ones are spaced by a fixed [space] distance
         * across the main axis. The spacing will be subtracted from the available space that the
         * children can occupy.
         *
         * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * @param space The space between adjacent children.
         */
        @Stable
        public fun spacedBy(space: Dp): HorizontalOrVertical = SpacedAligned(space, false, null)

        /**
         * Place children horizontally such that each two adjacent ones are spaced by a fixed
         * [space] distance. The spacing will be subtracted from the available width that the
         * children can occupy. An [alignment] can be specified to align the spaced children
         * horizontally inside the parent, in case there is empty width remaining.
         *
         * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * @param space The space between adjacent children.
         * @param alignment The alignment of the spaced children inside the parent.
         */
        @Stable
        public fun spacedBy(space: Dp, alignment: Alignment.Horizontal): Horizontal =
            SpacedAligned(space, false) { size, layoutDirection ->
                alignment.align(0, size, layoutDirection)
            }


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 526–560)

        /**
         * Place children vertically such that each two adjacent ones are spaced by a fixed [space]
         * distance. The spacing will be subtracted from the available height that the children can
         * occupy. An [alignment] can be specified to align the spaced children vertically inside
         * the parent, in case there is empty height remaining.
         *
         * Unlike [Arrangement.spacedBy], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * @param space The space between adjacent children.
         * @param alignment The alignment of the spaced children inside the parent.
         */
        @Stable
        public fun spacedBy(space: Dp, alignment: Alignment.Vertical): Vertical =
            SpacedAligned(space, false) { size, _ -> alignment.align(0, size) }

        /**
         * Place children horizontally one next to the other and align the obtained group according
         * to an [alignment].
         *
         * Unlike [Arrangement.aligned], when the layout direction is RTL, the children will not be
         * mirrored and as such children will appear in the order they are composed inside the
         * [Row].
         *
         * @param alignment The alignment of the children inside the parent.
         */
        @Stable
        public fun aligned(alignment: Alignment.Horizontal): Horizontal =
            SpacedAligned(0.dp, false) { size, layoutDirection ->
                alignment.align(0, size, layoutDirection)
            }
    }

    /** Calculator for SpacedAligned alignment to avoid primitive boxing. */

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 561–595)

    internal fun interface SpacingAlignmentCalculator {
        fun align(size: Int, layoutDirection: LayoutDirection): Int
    }

    /**
     * Arrangement with spacing between adjacent children and alignment for the spaced group. Should
     * not be instantiated directly, use [spacedBy] instead.
     */
    @Immutable
    internal data class SpacedAligned(
        val space: Dp,
        val rtlMirror: Boolean,
        val alignment: SpacingAlignmentCalculator?,
    ) : HorizontalOrVertical {

        override val spacing = space

        override fun Density.arrange(
            totalSize: Int,
            sizes: IntArray,
            layoutDirection: LayoutDirection,
            outPositions: IntArray,
        ) {
            if (sizes.isEmpty()) return
            val spacePx = space.roundToPx()
            val isRtl = rtlMirror && layoutDirection == LayoutDirection.Rtl
            var lastSpace = 0
            var freeSpace = totalSize
            if (isRtl) {
                sizes.forEachIndexed { index, it ->
                    outPositions[index] = maxOf(0, freeSpace - it)
                    lastSpace = min(spacePx, outPositions[index])
                    freeSpace = outPositions[index] - lastSpace
                }
                freeSpace += lastSpace

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 596–630)

            } else {
                var occupied = 0
                sizes.forEachIndexed { index, it ->
                    outPositions[index] = min(occupied, totalSize - it)
                    lastSpace = min(spacePx, totalSize - outPositions[index] - it)
                    occupied = outPositions[index] + it + lastSpace
                }
                occupied -= lastSpace
                freeSpace = totalSize - occupied
            }

            if (alignment != null && freeSpace > 0) {
                val groupPosition = alignment.align(freeSpace, layoutDirection)

                // LTR items are packed at the start (0), so shifting by groupPosition is correct.
                // RTL items are packed at the end (remainingSpace), so shift relative to that.
                val offset = if (isRtl) groupPosition - freeSpace else groupPosition

                if (offset != 0) {
                    for (index in outPositions.indices) {
                        outPositions[index] += offset
                    }
                }
            }
        }

        override fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray) =
            arrange(totalSize, sizes, LayoutDirection.Ltr, outPositions)

        override fun toString() =
            "${if (rtlMirror) "" else "Absolute"}Arrangement#spacedAligned($space, $alignment)"
    }

    internal fun placeRightOrBottom(
        totalSize: Int,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 631–665)

        size: IntArray,
        outPosition: IntArray,
        reverseInput: Boolean,
    ) {
        val consumedSize = size.fold(0) { a, b -> a + b }
        var current = totalSize - consumedSize
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current
            current += it
        }
    }

    internal fun placeLeftOrTop(size: IntArray, outPosition: IntArray, reverseInput: Boolean) {
        var current = 0
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current
            current += it
        }
    }

    internal fun placeCenter(
        totalSize: Int,
        size: IntArray,
        outPosition: IntArray,
        reverseInput: Boolean,
    ) {
        val consumedSize = size.fold(0) { a, b -> a + b }
        var current = (totalSize - consumedSize).toFloat() / 2
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current.fastRoundToInt()
            current += it.toFloat()
        }
    }

    internal fun placeSpaceEvenly(

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 666–700)

        totalSize: Int,
        size: IntArray,
        outPosition: IntArray,
        reverseInput: Boolean,
    ) {
        val consumedSize = size.fold(0) { a, b -> a + b }
        val gapSize = (totalSize - consumedSize).toFloat() / (size.size + 1)
        var current = gapSize
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current.fastRoundToInt()
            current += it.toFloat() + gapSize
        }
    }

    internal fun placeSpaceBetween(
        totalSize: Int,
        size: IntArray,
        outPosition: IntArray,
        reverseInput: Boolean,
    ) {
        if (size.isEmpty()) return

        val consumedSize = size.fold(0) { a, b -> a + b }
        val noOfGaps = maxOf(size.lastIndex, 1)
        val gapSize = (totalSize - consumedSize).toFloat() / noOfGaps

        var current = 0f
        if (reverseInput && size.size == 1) {
            // If the layout direction is right-to-left and there is only one gap,
            // we start current with the gap size. That forces the single item to be right-aligned.
            current = gapSize
        }
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current.fastRoundToInt()
            current += it.toFloat() + gapSize

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 701–734)

        }
    }

    internal fun placeSpaceAround(
        totalSize: Int,
        size: IntArray,
        outPosition: IntArray,
        reverseInput: Boolean,
    ) {
        val consumedSize = size.fold(0) { a, b -> a + b }
        val gapSize =
            if (size.isNotEmpty()) {
                (totalSize - consumedSize).toFloat() / size.size
            } else {
                0f
            }
        var current = gapSize / 2
        size.forEachIndexed(reverseInput) { index, it ->
            outPosition[index] = current.fastRoundToInt()
            current += it.toFloat() + gapSize
        }
    }

    private inline fun IntArray.forEachIndexed(reversed: Boolean, action: (Int, Int) -> Unit) {
        if (!reversed) {
            forEachIndexed(action)
        } else {
            for (i in (size - 1) downTo 0) {
                action(i, get(i))
            }
        }
    }
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)

## androidx.compose.foundation.layout Arrangement.kt source (lines 71–105)

     * Used to specify the vertical arrangement of the layout's children in layouts like [Column].
     */
    @Stable
    @JvmDefaultWithCompatibility
    public interface Vertical {
        /** Spacing that should be added between any two adjacent layout children. */
        public val spacing: Dp
            get() = 0.dp

        /**
         * Vertically places the layout children.
         *
         * @param totalSize Available space that can be occupied by the children, in pixels.
         * @param sizes An array of sizes of all children, in pixels.
         * @param outPositions An array of the size of [sizes] that returns the calculated positions
         *   relative to the top, in pixels.
         */
        public fun Density.arrange(totalSize: Int, sizes: IntArray, outPositions: IntArray)
    }

    /**
     * Used to specify the horizontal arrangement of the layout's children in horizontal layouts
     * like [Row], or the vertical arrangement of the layout's children in vertical layouts like
     * [Column].
     */
    @Stable
    @JvmDefaultWithCompatibility
    public interface HorizontalOrVertical : Horizontal, Vertical {
        /** Spacing that should be added between any two adjacent layout children. */
        override val spacing: Dp
            get() = 0.dp
    }

    /**
     * Place children horizontally such that they are as close as possible to the beginning of the

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-arrangement-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Arrangement.kt)
