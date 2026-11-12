---
type: reference
title: androidx.compose.ui Alignment.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-alignment-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 1
    endLine: 35
    sha256: ffdb24743a41f8f0c286709d5c7b03abbea5f918ed9f1fe77aacd5ae103f5ad2
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

      package androidx.compose.ui

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.util.fastRoundToInt

      /**
       * An interface to calculate the position of a sized box inside an available space. [Alignment] is
       * often used to define the alignment of a layout inside a parent layout.
       *
       * @see AbsoluteAlignment
       * @see BiasAlignment
       * @see BiasAbsoluteAlignment
       */
      @Stable
      public fun interface Alignment {
  - id: live-androidx-ui-ui-ui-alignment-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 106
    endLine: 140
    sha256: 00457a6b1336e595d8ee76e178e0e553794f7692f4efbd1700acbb3c2b7f6a65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              @Stable public val End: Horizontal = BiasAlignment.Horizontal(1f)
          }
      }

      private class CombinedAlignment(
          private val horizontal: Alignment.Horizontal,
          private val vertical: Alignment.Vertical,
      ) : Alignment {
          override fun align(size: IntSize, space: IntSize, layoutDirection: LayoutDirection): IntOffset {
              val x = horizontal.align(size.width, space.width, layoutDirection)
              val y = vertical.align(size.height, space.height)
              return IntOffset(x, y)
          }
      }

      /** A collection of common [Alignment]s unaware of the layout direction. */
      public object AbsoluteAlignment {
          // 2D AbsoluteAlignments.
          @Stable public val TopLeft: Alignment = BiasAbsoluteAlignment(-1f, -1f)
          @Stable public val TopRight: Alignment = BiasAbsoluteAlignment(1f, -1f)
          @Stable public val CenterLeft: Alignment = BiasAbsoluteAlignment(-1f, 0f)
          @Stable public val CenterRight: Alignment = BiasAbsoluteAlignment(1f, 0f)
          @Stable public val BottomLeft: Alignment = BiasAbsoluteAlignment(-1f, 1f)
          @Stable public val BottomRight: Alignment = BiasAbsoluteAlignment(1f, 1f)

          // 1D BiasAbsoluteAlignment.Horizontals.
          @Stable public val Left: Alignment.Horizontal = BiasAbsoluteAlignment.Horizontal(-1f)
          @Stable public val Right: Alignment.Horizontal = BiasAbsoluteAlignment.Horizontal(1f)
      }

      /**
       * An [Alignment] specified by bias: for example, a bias of -1 represents alignment to the
       * start/top, a bias of 0 will represent centering, and a bias of 1 will represent end/bottom. Any
       * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained alignment
       * will position the aligned size fully inside the available space, while outside the range it will
  - id: live-androidx-ui-ui-ui-alignment-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 141
    endLine: 175
    sha256: 2ddbdd3c1fa792d02dac440aeb0f89136f641c971d6fbb89b19db7edcecb6bb3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the aligned size will be positioned partially or completely outside.
       *
       * @see BiasAbsoluteAlignment
       * @see Alignment
       */
      @Immutable
      @Suppress("DataClassDefinition")
      public data class BiasAlignment(val horizontalBias: Float, val verticalBias: Float) : Alignment {
          public override fun align(
              size: IntSize,
              space: IntSize,
              layoutDirection: LayoutDirection,
          ): IntOffset {
              // Convert to Px first and only round at the end, to avoid rounding twice while calculating
              // the new positions
              val centerX = (space.width - size.width).toFloat() / 2f
              val centerY = (space.height - size.height).toFloat() / 2f
              val resolvedHorizontalBias =
                  if (layoutDirection == LayoutDirection.Ltr) {
                      horizontalBias
                  } else {
                      -1 * horizontalBias
                  }

              val x = centerX * (1 + resolvedHorizontalBias)
              val y = centerY * (1 + verticalBias)
              return IntOffset(x.fastRoundToInt(), y.fastRoundToInt())
          }

          /**
           * An [Alignment.Horizontal] specified by bias: for example, a bias of -1 represents alignment
           * to the start, a bias of 0 will represent centering, and a bias of 1 will represent end. Any
           * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
           * alignment will position the aligned size fully inside the available space, while outside the
           * range it will the aligned size will be positioned partially or completely outside.
  - id: live-androidx-ui-ui-ui-alignment-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 176
    endLine: 210
    sha256: 34370c5e603f23114eb8f732b58d6b401a74c5c69af4b1aaaf8ccecb13cae7fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * @see BiasAbsoluteAlignment.Horizontal
           * @see Vertical
           */
          @Immutable
          @Suppress("DataClassDefinition")
          public data class Horizontal(val bias: Float) : Alignment.Horizontal {
              public override fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int {
                  // Convert to Px first and only round at the end, to avoid rounding twice while
                  // calculating the new positions
                  val center = (space - size).toFloat() / 2f
                  val resolvedBias = if (layoutDirection == LayoutDirection.Ltr) bias else -1 * bias
                  return (center * (1 + resolvedBias)).fastRoundToInt()
              }

              public override fun plus(other: Alignment.Vertical): Alignment {
                  return when (other) {
                      is Vertical -> BiasAlignment(bias, other.bias)
                      else -> super.plus(other)
                  }
              }
          }

          /**
           * An [Alignment.Vertical] specified by bias: for example, a bias of -1 represents alignment to
           * the top, a bias of 0 will represent centering, and a bias of 1 will represent bottom. Any
           * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
           * alignment will position the aligned size fully inside the available space, while outside the
           * range it will the aligned size will be positioned partially or completely outside.
           *
           * @see Horizontal
           */
          @Immutable
          @Suppress("DataClassDefinition")
          public data class Vertical(val bias: Float) : Alignment.Vertical {
  - id: live-androidx-ui-ui-ui-alignment-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 211
    endLine: 245
    sha256: 1439709ac9044ffd0b728688506abd1b241e983bf9ce96bd3360a307aa3856f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              public override fun align(size: Int, space: Int): Int {
                  // Convert to Px first and only round at the end, to avoid rounding twice while
                  // calculating the new positions
                  val center = (space - size).toFloat() / 2f
                  return (center * (1 + bias)).fastRoundToInt()
              }

              public override fun plus(other: Alignment.Horizontal): Alignment {
                  return when (other) {
                      is Horizontal -> BiasAlignment(other.bias, bias)
                      is BiasAbsoluteAlignment.Horizontal -> BiasAbsoluteAlignment(other.bias, bias)
                      else -> super.plus(other)
                  }
              }
          }
      }

      /**
       * An [Alignment] specified by bias: for example, a bias of -1 represents alignment to the left/top,
       * a bias of 0 will represent centering, and a bias of 1 will represent right/bottom. Any value can
       * be specified to obtain an alignment. Inside the [-1, 1] range, the obtained alignment will
       * position the aligned size fully inside the available space, while outside the range it will the
       * aligned size will be positioned partially or completely outside.
       *
       * @see AbsoluteAlignment
       * @see Alignment
       */
      @Immutable
      @Suppress("DataClassDefinition")
      public data class BiasAbsoluteAlignment(val horizontalBias: Float, val verticalBias: Float) :
          Alignment {
          /**
           * Returns the position of a 2D point in a container of a given size, according to this
           * [BiasAbsoluteAlignment]. The position will not be mirrored in Rtl context.
           */
  - id: live-androidx-ui-ui-ui-alignment-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 246
    endLine: 280
    sha256: 78d312ef80f3c3f9e820f8c5fa433c8e3e48f2e14f8ad3984de855b3253c6c81
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public override fun align(
              size: IntSize,
              space: IntSize,
              layoutDirection: LayoutDirection,
          ): IntOffset {
              // Convert to Px first and only round at the end, to avoid rounding twice while calculating
              // the new positions
              val remaining = IntSize(space.width - size.width, space.height - size.height)
              val centerX = remaining.width.toFloat() / 2f
              val centerY = remaining.height.toFloat() / 2f

              val x = centerX * (1 + horizontalBias)
              val y = centerY * (1 + verticalBias)
              return IntOffset(x.fastRoundToInt(), y.fastRoundToInt())
          }

          /**
           * An [Alignment.Horizontal] specified by bias: for example, a bias of -1 represents alignment
           * to the left, a bias of 0 will represent centering, and a bias of 1 will represent right. Any
           * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
           * alignment will position the aligned size fully inside the available space, while outside the
           * range it will the aligned size will be positioned partially or completely outside.
           *
           * @see BiasAlignment.Horizontal
           */
          @Immutable
          @Suppress("DataClassDefinition")
          public data class Horizontal(val bias: Float) : Alignment.Horizontal {
              /**
               * Returns the position of a 2D point in a container of a given size, according to this
               * [BiasAbsoluteAlignment.Horizontal]. This position will not be mirrored in Rtl context.
               */
              public override fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int {
                  // Convert to Px first and only round at the end, to avoid rounding twice while
                  // calculating the new positions
  - id: live-androidx-ui-ui-ui-alignment-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 281
    endLine: 293
    sha256: 6bee1ec9b4df12e58b26b1cc308bcde6596998702f622ebdffb9e14f5961375d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  val center = (space - size).toFloat() / 2f
                  return (center * (1 + bias)).fastRoundToInt()
              }

              public override fun plus(other: Alignment.Vertical): Alignment {
                  return when (other) {
                      is BiasAlignment.Vertical -> BiasAbsoluteAlignment(bias, other.bias)
                      else -> super.plus(other)
                  }
              }
          }
      }
  - id: live-androidx-ui-ui-ui-alignment-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 36
    endLine: 70
    sha256: aa3b1dd2c1970dff521675d4aafe5c42dbe0c3e43d4bc468328c8b1258abeb64
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Calculates the position of a box of size [size] relative to the top left corner of an area of
           * size [space]. The returned offset can be negative or larger than `space - size`, meaning that
           * the box will be positioned partially or completely outside the area.
           */
          public fun align(size: IntSize, space: IntSize, layoutDirection: LayoutDirection): IntOffset

          /**
           * An interface to calculate the position of box of a certain width inside an available width.
           * [Alignment.Horizontal] is often used to define the horizontal alignment of a layout inside a
           * parent layout.
           */
          @Stable
          public fun interface Horizontal {
              /**
               * Calculates the horizontal position of a box of width [size] relative to the left side of
               * an area of width [space]. The returned offset can be negative or larger than `space -
               * size` meaning that the box will be positioned partially or completely outside the area.
               */
              public fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int

              /**
               * Combine this instance's horizontal alignment with [other]'s vertical alignment to create
               * an [Alignment].
               */
              public operator fun plus(other: Vertical): Alignment = CombinedAlignment(this, other)
          }

          /**
           * An interface to calculate the position of a box of a certain height inside an available
           * height. [Alignment.Vertical] is often used to define the vertical alignment of a layout
           * inside a parent layout.
           */
          @Stable
          public fun interface Vertical {
  - id: live-androidx-ui-ui-ui-alignment-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt
    startLine: 71
    endLine: 105
    sha256: 15308ab72e2cf72599b26a1d1fcf40512a283b65ad82adf8adc2de813666c786
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /**
               * Calculates the vertical position of a box of height [size] relative to the top edge of an
               * area of height [space]. The returned offset can be negative or larger than `space - size`
               * meaning that the box will be positioned partially or completely outside the area.
               */
              public fun align(size: Int, space: Int): Int

              /**
               * Combine this instance's vertical alignment with [other]'s horizontal alignment to create
               * an [Alignment].
               */
              public operator fun plus(other: Horizontal): Alignment = CombinedAlignment(other, this)
          }

          /** A collection of common [Alignment]s aware of layout direction. */
          public companion object {
              // 2D Alignments.
              @Stable public val TopStart: Alignment = BiasAlignment(-1f, -1f)
              @Stable public val TopCenter: Alignment = BiasAlignment(0f, -1f)
              @Stable public val TopEnd: Alignment = BiasAlignment(1f, -1f)
              @Stable public val CenterStart: Alignment = BiasAlignment(-1f, 0f)
              @Stable public val Center: Alignment = BiasAlignment(0f, 0f)
              @Stable public val CenterEnd: Alignment = BiasAlignment(1f, 0f)
              @Stable public val BottomStart: Alignment = BiasAlignment(-1f, 1f)
              @Stable public val BottomCenter: Alignment = BiasAlignment(0f, 1f)
              @Stable public val BottomEnd: Alignment = BiasAlignment(1f, 1f)

              // 1D Alignment.Verticals.
              @Stable public val Top: Vertical = BiasAlignment.Vertical(-1f)
              @Stable public val CenterVertically: Vertical = BiasAlignment.Vertical(0f)
              @Stable public val Bottom: Vertical = BiasAlignment.Vertical(1f)

              // 1D Alignment.Horizontals.
              @Stable public val Start: Horizontal = BiasAlignment.Horizontal(-1f)
              @Stable public val CenterHorizontally: Horizontal = BiasAlignment.Horizontal(0f)
compose:
  id: live-androidx-ui-ui-ui-alignment
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui
  sections:
    - id: live-androidx-ui-ui-ui-alignment-lines-1
      title: androidx.compose.ui Alignment.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.AbsoluteAlignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-106
      title: androidx.compose.ui Alignment.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.AbsoluteAlignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-141
      title: androidx.compose.ui Alignment.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-176
      title: androidx.compose.ui Alignment.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-211
      title: androidx.compose.ui Alignment.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.AbsoluteAlignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-246
      title: androidx.compose.ui Alignment.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-281
      title: androidx.compose.ui Alignment.kt source (lines 281–293)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.BiasAlignment
        - androidx.compose.ui.BiasAbsoluteAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-36
      title: androidx.compose.ui Alignment.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.Alignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-alignment-lines-71
      title: androidx.compose.ui Alignment.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.Alignment
        - androidx.compose.ui.BiasAlignment
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-alignment-lines-71-source
      relatedIds: []
---

# androidx.compose.ui Alignment.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt

## androidx.compose.ui Alignment.kt source (lines 1–35)

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

package androidx.compose.ui

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.util.fastRoundToInt

/**
 * An interface to calculate the position of a sized box inside an available space. [Alignment] is
 * often used to define the alignment of a layout inside a parent layout.
 *
 * @see AbsoluteAlignment
 * @see BiasAlignment
 * @see BiasAbsoluteAlignment
 */
@Stable
public fun interface Alignment {

Sources: [live-androidx-ui-ui-ui-alignment-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 106–140)

        @Stable public val End: Horizontal = BiasAlignment.Horizontal(1f)
    }
}

private class CombinedAlignment(
    private val horizontal: Alignment.Horizontal,
    private val vertical: Alignment.Vertical,
) : Alignment {
    override fun align(size: IntSize, space: IntSize, layoutDirection: LayoutDirection): IntOffset {
        val x = horizontal.align(size.width, space.width, layoutDirection)
        val y = vertical.align(size.height, space.height)
        return IntOffset(x, y)
    }
}

/** A collection of common [Alignment]s unaware of the layout direction. */
public object AbsoluteAlignment {
    // 2D AbsoluteAlignments.
    @Stable public val TopLeft: Alignment = BiasAbsoluteAlignment(-1f, -1f)
    @Stable public val TopRight: Alignment = BiasAbsoluteAlignment(1f, -1f)
    @Stable public val CenterLeft: Alignment = BiasAbsoluteAlignment(-1f, 0f)
    @Stable public val CenterRight: Alignment = BiasAbsoluteAlignment(1f, 0f)
    @Stable public val BottomLeft: Alignment = BiasAbsoluteAlignment(-1f, 1f)
    @Stable public val BottomRight: Alignment = BiasAbsoluteAlignment(1f, 1f)

    // 1D BiasAbsoluteAlignment.Horizontals.
    @Stable public val Left: Alignment.Horizontal = BiasAbsoluteAlignment.Horizontal(-1f)
    @Stable public val Right: Alignment.Horizontal = BiasAbsoluteAlignment.Horizontal(1f)
}

/**
 * An [Alignment] specified by bias: for example, a bias of -1 represents alignment to the
 * start/top, a bias of 0 will represent centering, and a bias of 1 will represent end/bottom. Any
 * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained alignment
 * will position the aligned size fully inside the available space, while outside the range it will

Sources: [live-androidx-ui-ui-ui-alignment-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 141–175)

 * the aligned size will be positioned partially or completely outside.
 *
 * @see BiasAbsoluteAlignment
 * @see Alignment
 */
@Immutable
@Suppress("DataClassDefinition")
public data class BiasAlignment(val horizontalBias: Float, val verticalBias: Float) : Alignment {
    public override fun align(
        size: IntSize,
        space: IntSize,
        layoutDirection: LayoutDirection,
    ): IntOffset {
        // Convert to Px first and only round at the end, to avoid rounding twice while calculating
        // the new positions
        val centerX = (space.width - size.width).toFloat() / 2f
        val centerY = (space.height - size.height).toFloat() / 2f
        val resolvedHorizontalBias =
            if (layoutDirection == LayoutDirection.Ltr) {
                horizontalBias
            } else {
                -1 * horizontalBias
            }

        val x = centerX * (1 + resolvedHorizontalBias)
        val y = centerY * (1 + verticalBias)
        return IntOffset(x.fastRoundToInt(), y.fastRoundToInt())
    }

    /**
     * An [Alignment.Horizontal] specified by bias: for example, a bias of -1 represents alignment
     * to the start, a bias of 0 will represent centering, and a bias of 1 will represent end. Any
     * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
     * alignment will position the aligned size fully inside the available space, while outside the
     * range it will the aligned size will be positioned partially or completely outside.

Sources: [live-androidx-ui-ui-ui-alignment-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 176–210)

     *
     * @see BiasAbsoluteAlignment.Horizontal
     * @see Vertical
     */
    @Immutable
    @Suppress("DataClassDefinition")
    public data class Horizontal(val bias: Float) : Alignment.Horizontal {
        public override fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int {
            // Convert to Px first and only round at the end, to avoid rounding twice while
            // calculating the new positions
            val center = (space - size).toFloat() / 2f
            val resolvedBias = if (layoutDirection == LayoutDirection.Ltr) bias else -1 * bias
            return (center * (1 + resolvedBias)).fastRoundToInt()
        }

        public override fun plus(other: Alignment.Vertical): Alignment {
            return when (other) {
                is Vertical -> BiasAlignment(bias, other.bias)
                else -> super.plus(other)
            }
        }
    }

    /**
     * An [Alignment.Vertical] specified by bias: for example, a bias of -1 represents alignment to
     * the top, a bias of 0 will represent centering, and a bias of 1 will represent bottom. Any
     * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
     * alignment will position the aligned size fully inside the available space, while outside the
     * range it will the aligned size will be positioned partially or completely outside.
     *
     * @see Horizontal
     */
    @Immutable
    @Suppress("DataClassDefinition")
    public data class Vertical(val bias: Float) : Alignment.Vertical {

Sources: [live-androidx-ui-ui-ui-alignment-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 211–245)

        public override fun align(size: Int, space: Int): Int {
            // Convert to Px first and only round at the end, to avoid rounding twice while
            // calculating the new positions
            val center = (space - size).toFloat() / 2f
            return (center * (1 + bias)).fastRoundToInt()
        }

        public override fun plus(other: Alignment.Horizontal): Alignment {
            return when (other) {
                is Horizontal -> BiasAlignment(other.bias, bias)
                is BiasAbsoluteAlignment.Horizontal -> BiasAbsoluteAlignment(other.bias, bias)
                else -> super.plus(other)
            }
        }
    }
}

/**
 * An [Alignment] specified by bias: for example, a bias of -1 represents alignment to the left/top,
 * a bias of 0 will represent centering, and a bias of 1 will represent right/bottom. Any value can
 * be specified to obtain an alignment. Inside the [-1, 1] range, the obtained alignment will
 * position the aligned size fully inside the available space, while outside the range it will the
 * aligned size will be positioned partially or completely outside.
 *
 * @see AbsoluteAlignment
 * @see Alignment
 */
@Immutable
@Suppress("DataClassDefinition")
public data class BiasAbsoluteAlignment(val horizontalBias: Float, val verticalBias: Float) :
    Alignment {
    /**
     * Returns the position of a 2D point in a container of a given size, according to this
     * [BiasAbsoluteAlignment]. The position will not be mirrored in Rtl context.
     */

Sources: [live-androidx-ui-ui-ui-alignment-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 246–280)

    public override fun align(
        size: IntSize,
        space: IntSize,
        layoutDirection: LayoutDirection,
    ): IntOffset {
        // Convert to Px first and only round at the end, to avoid rounding twice while calculating
        // the new positions
        val remaining = IntSize(space.width - size.width, space.height - size.height)
        val centerX = remaining.width.toFloat() / 2f
        val centerY = remaining.height.toFloat() / 2f

        val x = centerX * (1 + horizontalBias)
        val y = centerY * (1 + verticalBias)
        return IntOffset(x.fastRoundToInt(), y.fastRoundToInt())
    }

    /**
     * An [Alignment.Horizontal] specified by bias: for example, a bias of -1 represents alignment
     * to the left, a bias of 0 will represent centering, and a bias of 1 will represent right. Any
     * value can be specified to obtain an alignment. Inside the [-1, 1] range, the obtained
     * alignment will position the aligned size fully inside the available space, while outside the
     * range it will the aligned size will be positioned partially or completely outside.
     *
     * @see BiasAlignment.Horizontal
     */
    @Immutable
    @Suppress("DataClassDefinition")
    public data class Horizontal(val bias: Float) : Alignment.Horizontal {
        /**
         * Returns the position of a 2D point in a container of a given size, according to this
         * [BiasAbsoluteAlignment.Horizontal]. This position will not be mirrored in Rtl context.
         */
        public override fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int {
            // Convert to Px first and only round at the end, to avoid rounding twice while
            // calculating the new positions

Sources: [live-androidx-ui-ui-ui-alignment-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 281–293)

            val center = (space - size).toFloat() / 2f
            return (center * (1 + bias)).fastRoundToInt()
        }

        public override fun plus(other: Alignment.Vertical): Alignment {
            return when (other) {
                is BiasAlignment.Vertical -> BiasAbsoluteAlignment(bias, other.bias)
                else -> super.plus(other)
            }
        }
    }
}


Sources: [live-androidx-ui-ui-ui-alignment-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 36–70)

    /**
     * Calculates the position of a box of size [size] relative to the top left corner of an area of
     * size [space]. The returned offset can be negative or larger than `space - size`, meaning that
     * the box will be positioned partially or completely outside the area.
     */
    public fun align(size: IntSize, space: IntSize, layoutDirection: LayoutDirection): IntOffset

    /**
     * An interface to calculate the position of box of a certain width inside an available width.
     * [Alignment.Horizontal] is often used to define the horizontal alignment of a layout inside a
     * parent layout.
     */
    @Stable
    public fun interface Horizontal {
        /**
         * Calculates the horizontal position of a box of width [size] relative to the left side of
         * an area of width [space]. The returned offset can be negative or larger than `space -
         * size` meaning that the box will be positioned partially or completely outside the area.
         */
        public fun align(size: Int, space: Int, layoutDirection: LayoutDirection): Int

        /**
         * Combine this instance's horizontal alignment with [other]'s vertical alignment to create
         * an [Alignment].
         */
        public operator fun plus(other: Vertical): Alignment = CombinedAlignment(this, other)
    }

    /**
     * An interface to calculate the position of a box of a certain height inside an available
     * height. [Alignment.Vertical] is often used to define the vertical alignment of a layout
     * inside a parent layout.
     */
    @Stable
    public fun interface Vertical {

Sources: [live-androidx-ui-ui-ui-alignment-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)

## androidx.compose.ui Alignment.kt source (lines 71–105)

        /**
         * Calculates the vertical position of a box of height [size] relative to the top edge of an
         * area of height [space]. The returned offset can be negative or larger than `space - size`
         * meaning that the box will be positioned partially or completely outside the area.
         */
        public fun align(size: Int, space: Int): Int

        /**
         * Combine this instance's vertical alignment with [other]'s horizontal alignment to create
         * an [Alignment].
         */
        public operator fun plus(other: Horizontal): Alignment = CombinedAlignment(other, this)
    }

    /** A collection of common [Alignment]s aware of layout direction. */
    public companion object {
        // 2D Alignments.
        @Stable public val TopStart: Alignment = BiasAlignment(-1f, -1f)
        @Stable public val TopCenter: Alignment = BiasAlignment(0f, -1f)
        @Stable public val TopEnd: Alignment = BiasAlignment(1f, -1f)
        @Stable public val CenterStart: Alignment = BiasAlignment(-1f, 0f)
        @Stable public val Center: Alignment = BiasAlignment(0f, 0f)
        @Stable public val CenterEnd: Alignment = BiasAlignment(1f, 0f)
        @Stable public val BottomStart: Alignment = BiasAlignment(-1f, 1f)
        @Stable public val BottomCenter: Alignment = BiasAlignment(0f, 1f)
        @Stable public val BottomEnd: Alignment = BiasAlignment(1f, 1f)

        // 1D Alignment.Verticals.
        @Stable public val Top: Vertical = BiasAlignment.Vertical(-1f)
        @Stable public val CenterVertically: Vertical = BiasAlignment.Vertical(0f)
        @Stable public val Bottom: Vertical = BiasAlignment.Vertical(1f)

        // 1D Alignment.Horizontals.
        @Stable public val Start: Horizontal = BiasAlignment.Horizontal(-1f)
        @Stable public val CenterHorizontally: Horizontal = BiasAlignment.Horizontal(0f)

Sources: [live-androidx-ui-ui-ui-alignment-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/Alignment.kt)
