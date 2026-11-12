---
type: reference
title: androidx.compose.foundation.layout Padding.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 1
    endLine: 35
    sha256: 2cea852aa13167d19a74def51fe9acd949ca4defe13199ce384a29a02e66626c
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

      package androidx.compose.foundation.layout

      import androidx.compose.foundation.layout.PaddingValues.Absolute
      import androidx.compose.foundation.layout.internal.requirePrecondition
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.coerceAtLeast
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 106
    endLine: 140
    sha256: 1eeaeb07a93783739a56542bc4088731d6239da7a29c5fac15d1089c917ae763
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Apply [all] dp of additional space along each edge of the content, left, top, right and bottom.
       * Padding is applied before content measurement and takes precedence; content may only be as large
       * as the remaining space.
       *
       * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
       * [Modifier.offset].
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.PaddingAllModifier
       */
      @Stable
      public fun Modifier.padding(all: Dp): Modifier =
          this then
              PaddingElement(
                  start = all,
                  top = all,
                  end = all,
                  bottom = all,
                  rtlAware = true,
                  inspectorInfo = {
                      name = "padding"
                      value = all
                  },
              )

      /**
       * Apply [PaddingValues] to the component as additional space along each edge of the content's left,
       * top, right and bottom. Padding is applied before content measurement and takes precedence;
       * content may only be as large as the remaining space.
       *
       * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
       * [Modifier.offset].
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 141
    endLine: 175
    sha256: b57e9daf0b5d038935c441853d2b05d7e95067553b40b37656c803738f920da4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.PaddingValuesModifier
       */
      @Stable
      public fun Modifier.padding(paddingValues: PaddingValues): Modifier =
          this then
              PaddingValuesElement(
                  paddingValues = paddingValues,
                  inspectorInfo = {
                      name = "padding"
                      properties["paddingValues"] = paddingValues
                  },
              )

      /**
       * Apply additional space along each edge of the content in [Dp]: [left], [top], [right] and
       * [bottom]. These paddings are applied without regard to the current [LayoutDirection], see
       * [padding] to apply relative paddings. Padding is applied before content measurement and takes
       * precedence; content may only be as large as the remaining space.
       *
       * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
       * [Modifier.offset].
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.AbsolutePaddingModifier
       */
      @Stable
      public fun Modifier.absolutePadding(
          left: Dp = 0.dp,
          top: Dp = 0.dp,
          right: Dp = 0.dp,
          bottom: Dp = 0.dp,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 176
    endLine: 210
    sha256: 0b46419bad9d45ddcf3298536edc4d48241ec81f152b4fda6257aca91c4c104f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ): Modifier =
          this then
              (PaddingElement(
                  start = left,
                  top = top,
                  end = right,
                  bottom = bottom,
                  rtlAware = false,
                  inspectorInfo = {
                      name = "absolutePadding"
                      properties["left"] = left
                      properties["top"] = top
                      properties["right"] = right
                      properties["bottom"] = bottom
                  },
              ))

      /**
       * Describes a padding to be applied along the edges inside a box. See the [PaddingValues] factories
       * and [Absolute] for convenient ways to build [PaddingValues].
       */
      @Stable
      public interface PaddingValues {
          /** The padding to be applied along the left edge inside a box. */
          public fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp

          /** The padding to be applied along the top edge inside a box. */
          public fun calculateTopPadding(): Dp

          /** The padding to be applied along the right edge inside a box. */
          public fun calculateRightPadding(layoutDirection: LayoutDirection): Dp

          /** The padding to be applied along the bottom edge inside a box. */
          public fun calculateBottomPadding(): Dp
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 211
    endLine: 245
    sha256: 7d839612eabb335a0f54cb951d6a3bd65b6c9006bdf600d05c4f38f4adbeab33
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** Describes an absolute (RTL unaware) padding to be applied along the edges inside a box. */
          @Immutable
          public class Absolute(
              @Stable private val left: Dp = 0.dp,
              @Stable private val top: Dp = 0.dp,
              @Stable private val right: Dp = 0.dp,
              @Stable private val bottom: Dp = 0.dp,
          ) : PaddingValues {

              init {
                  requirePrecondition(
                      (left.value >= 0f) and
                          (top.value >= 0f) and
                          (right.value >= 0f) and
                          (bottom.value >= 0f)
                  ) {
                      "Padding must be non-negative"
                  }
              }

              override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp = left

              override fun calculateTopPadding(): Dp = top

              override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp = right

              override fun calculateBottomPadding(): Dp = bottom

              override fun equals(other: Any?): Boolean {
                  if (other !is Absolute) return false
                  return left == other.left &&
                      top == other.top &&
                      right == other.right &&
                      bottom == other.bottom
              }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 246
    endLine: 280
    sha256: ced8a30b6c07adeb9669e381270667504f4d728ebbb1c9e21a570daf789cc115
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              override fun hashCode(): Int =
                  ((left.hashCode() * 31 + top.hashCode()) * 31 + right.hashCode()) * 31 +
                      bottom.hashCode()

              override fun toString(): String =
                  "PaddingValues.Absolute(left=$left, top=$top, right=$right, bottom=$bottom)"
          }

          public companion object {
              /** PaddingValues with all values `0.dp`. */
              @Stable @get:Stable public val Zero: PaddingValues = Absolute()
          }
      }

      /** Adds two [PaddingValues] together. */
      @Stable
      public operator fun PaddingValues.plus(other: PaddingValues): PaddingValues =
          object : PaddingValues {
              override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
                  this@plus.calculateLeftPadding(layoutDirection) +
                      other.calculateLeftPadding(layoutDirection)

              override fun calculateTopPadding(): Dp =
                  this@plus.calculateTopPadding() + other.calculateTopPadding()

              override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
                  this@plus.calculateRightPadding(layoutDirection) +
                      other.calculateRightPadding(layoutDirection)

              override fun calculateBottomPadding(): Dp =
                  this@plus.calculateBottomPadding() + other.calculateBottomPadding()
          }

      /** Subtracts a [PaddingValues] from another one and ensures that the result is non-negative. */
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 281
    endLine: 315
    sha256: c7a1eb96409d56b469adbefae16ff2df5d881c5d4e489a16e2c396af3ec8a834
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Stable
      public operator fun PaddingValues.minus(other: PaddingValues): PaddingValues =
          object : PaddingValues {
              override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
                  (this@minus.calculateLeftPadding(layoutDirection) -
                          other.calculateLeftPadding(layoutDirection))
                      .coerceAtLeast(0.dp)

              override fun calculateTopPadding(): Dp =
                  (this@minus.calculateTopPadding() - other.calculateTopPadding()).coerceAtLeast(0.dp)

              override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
                  (this@minus.calculateRightPadding(layoutDirection) -
                          other.calculateRightPadding(layoutDirection))
                      .coerceAtLeast(0.dp)

              override fun calculateBottomPadding(): Dp =
                  (this@minus.calculateBottomPadding() - other.calculateBottomPadding()).coerceAtLeast(
                      0.dp
                  )
          }

      /**
       * The padding to be applied along the start edge inside a box: along the left edge if the layout
       * direction is LTR, or along the right edge for RTL.
       */
      @Stable
      public fun PaddingValues.calculateStartPadding(layoutDirection: LayoutDirection): Dp =
          if (layoutDirection == LayoutDirection.Ltr) {
              calculateLeftPadding(layoutDirection)
          } else {
              calculateRightPadding(layoutDirection)
          }

      /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 316
    endLine: 350
    sha256: c5e7ce84261ac70d9e39fe46ec10996872841bceb70efe7e5c775214fe5baee8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * The padding to be applied along the end edge inside a box: along the right edge if the layout
       * direction is LTR, or along the left edge for RTL.
       */
      @Stable
      public fun PaddingValues.calculateEndPadding(layoutDirection: LayoutDirection): Dp =
          if (layoutDirection == LayoutDirection.Ltr) {
              calculateRightPadding(layoutDirection)
          } else {
              calculateLeftPadding(layoutDirection)
          }

      /** Creates a padding of [all] dp along all 4 edges. */
      @Stable public fun PaddingValues(all: Dp): PaddingValues = PaddingValuesImpl(all, all, all, all)

      /**
       * Creates a padding of [horizontal] dp along the left and right edges, and of [vertical] dp along
       * the top and bottom edges.
       */
      @Stable
      public fun PaddingValues(horizontal: Dp = 0.dp, vertical: Dp = 0.dp): PaddingValues =
          PaddingValuesImpl(horizontal, vertical, horizontal, vertical)

      /**
       * Creates a padding to be applied along the edges inside a box. In LTR contexts [start] will be
       * applied along the left edge and [end] will be applied along the right edge. In RTL contexts,
       * [start] will correspond to the right edge and [end] to the left.
       */
      @Stable
      public fun PaddingValues(
          start: Dp = 0.dp,
          top: Dp = 0.dp,
          end: Dp = 0.dp,
          bottom: Dp = 0.dp,
      ): PaddingValues = PaddingValuesImpl(start, top, end, bottom)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 351
    endLine: 385
    sha256: 65f6be1468b0e590d76204440dbd443cb3eeb3e7e2132eaccdb88b49bc0a13dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Immutable
      internal class PaddingValuesImpl(
          @Stable val start: Dp = 0.dp,
          @Stable val top: Dp = 0.dp,
          @Stable val end: Dp = 0.dp,
          @Stable val bottom: Dp = 0.dp,
      ) : PaddingValues {

          init {
              requirePrecondition(
                  (start.value >= 0f) and (top.value >= 0f) and (end.value >= 0f) and (bottom.value >= 0f)
              ) {
                  "Padding must be non-negative"
              }
          }

          override fun calculateLeftPadding(layoutDirection: LayoutDirection) =
              if (layoutDirection == LayoutDirection.Ltr) start else end

          override fun calculateTopPadding() = top

          override fun calculateRightPadding(layoutDirection: LayoutDirection) =
              if (layoutDirection == LayoutDirection.Ltr) end else start

          override fun calculateBottomPadding() = bottom

          override fun equals(other: Any?): Boolean {
              if (other !is PaddingValuesImpl) return false
              return start == other.start &&
                  top == other.top &&
                  end == other.end &&
                  bottom == other.bottom
          }

          override fun hashCode() =
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 36
    endLine: 70
    sha256: 64de6e643ee3517a5c6204231bd2f8a35e7f95d586f3d2426038f874bdd7fa09
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.constrainHeight
      import androidx.compose.ui.unit.constrainWidth
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.isUnspecified
      import androidx.compose.ui.unit.offset
      import androidx.compose.ui.util.fastCoerceAtLeast

      /**
       * Apply additional space along each edge of the content in [Dp]: [start], [top], [end] and
       * [bottom]. The start and end edges will be determined by the current [LayoutDirection]. Padding is
       * applied before content measurement and takes precedence; content may only be as large as the
       * remaining space.
       *
       * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
       * [Modifier.offset].
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.PaddingModifier
       */
      @Stable
      public fun Modifier.padding(
          start: Dp = 0.dp,
          top: Dp = 0.dp,
          end: Dp = 0.dp,
          bottom: Dp = 0.dp,
      ): Modifier =
          this then
              PaddingElement(
                  start = start,
                  top = top,
                  end = end,
                  bottom = bottom,
                  rtlAware = true,
                  inspectorInfo = {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 386
    endLine: 420
    sha256: 24c3721c143687c8712ec856e04a3365972a689dd75a1f928d4f72548e9def13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ((start.hashCode() * 31 + top.hashCode()) * 31 + end.hashCode()) * 31 + bottom.hashCode()

          override fun toString() = "PaddingValues(start=$start, top=$top, end=$end, bottom=$bottom)"
      }

      private class PaddingElement(
          var start: Dp = 0.dp,
          var top: Dp = 0.dp,
          var end: Dp = 0.dp,
          var bottom: Dp = 0.dp,
          var rtlAware: Boolean,
          val inspectorInfo: InspectorInfo.() -> Unit,
      ) : ModifierNodeElement<PaddingNode>() {

          init {
              requirePrecondition(
                  (start.value >= 0f || start.isUnspecified) and
                      (top.value >= 0f || top.isUnspecified) and
                      (end.value >= 0f || end.isUnspecified) and
                      (bottom.value >= 0f || bottom.isUnspecified)
              ) {
                  "Padding must be non-negative"
              }
          }

          override fun create(): PaddingNode {
              return PaddingNode(start, top, end, bottom, rtlAware)
          }

          override fun update(node: PaddingNode) {
              node.start = start
              node.top = top
              node.end = end
              node.bottom = bottom
              node.rtlAware = rtlAware
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 421
    endLine: 455
    sha256: cce0b352e926e38d36fe007910608f073fddb43e46221fa48b510152532ccc4a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          override fun hashCode(): Int {
              var result = start.hashCode()
              result = 31 * result + top.hashCode()
              result = 31 * result + end.hashCode()
              result = 31 * result + bottom.hashCode()
              result = 31 * result + rtlAware.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              val otherModifierElement = other as? PaddingElement ?: return false
              return start == otherModifierElement.start &&
                  top == otherModifierElement.top &&
                  end == otherModifierElement.end &&
                  bottom == otherModifierElement.bottom &&
                  rtlAware == otherModifierElement.rtlAware
          }

          override fun InspectorInfo.inspectableProperties() {
              inspectorInfo()
          }
      }

      private class PaddingNode(
          var start: Dp = 0.dp,
          var top: Dp = 0.dp,
          var end: Dp = 0.dp,
          var bottom: Dp = 0.dp,
          var rtlAware: Boolean,
      ) : LayoutModifierNode, Modifier.Node() {

          override fun MeasureScope.measure(
              measurable: Measurable,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 456
    endLine: 490
    sha256: d40c14774c6b44f5562fbf5f9fac77d474f1bd6847d9672e5be72b43ca693564
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              constraints: Constraints,
          ): MeasureResult {

              val horizontal = start.roundToPx() + end.roundToPx()
              val vertical = top.roundToPx() + bottom.roundToPx()

              val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

              val width = constraints.constrainWidth(placeable.width + horizontal)
              val height = constraints.constrainHeight(placeable.height + vertical)
              return layout(width, height) {
                  if (rtlAware) {
                      placeable.placeRelative(start.roundToPx(), top.roundToPx())
                  } else {
                      placeable.place(start.roundToPx(), top.roundToPx())
                  }
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val horizontal = start.roundToPx() + end.roundToPx()
              val vertical = top.roundToPx() + bottom.roundToPx()
              val childHeight =
                  if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
              return (measurable.minIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              val horizontal = start.roundToPx() + end.roundToPx()
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 491
    endLine: 525
    sha256: 5a3c10099d355cf147b67e8a5c2a0a3674186a62f1884ccbd0796c03c911f8c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val vertical = top.roundToPx() + bottom.roundToPx()
              val childWidth =
                  if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
              return (measurable.minIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val horizontal = start.roundToPx() + end.roundToPx()
              val vertical = top.roundToPx() + bottom.roundToPx()
              val childHeight =
                  if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
              return (measurable.maxIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              val horizontal = start.roundToPx() + end.roundToPx()
              val vertical = top.roundToPx() + bottom.roundToPx()
              val childWidth =
                  if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
              return (measurable.maxIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
          }
      }

      private class PaddingValuesElement(
          val paddingValues: PaddingValues,
          val inspectorInfo: InspectorInfo.() -> Unit,
      ) : ModifierNodeElement<PaddingValuesModifier>() {
          override fun create(): PaddingValuesModifier {
              return PaddingValuesModifier(paddingValues)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 526
    endLine: 560
    sha256: a9fa1e634cb067881e2a76cd2e3609656bef14665743ccb56932cf1408066edc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          override fun update(node: PaddingValuesModifier) {
              node.paddingValues = paddingValues
          }

          override fun hashCode(): Int = paddingValues.hashCode()

          override fun equals(other: Any?): Boolean {
              val otherElement = other as? PaddingValuesElement ?: return false
              return paddingValues == otherElement.paddingValues
          }

          override fun InspectorInfo.inspectableProperties() {
              inspectorInfo()
          }
      }

      private class PaddingValuesModifier(var paddingValues: PaddingValues) :
          LayoutModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val leftPadding = paddingValues.calculateLeftPadding(layoutDirection)
              val topPadding = paddingValues.calculateTopPadding()
              val rightPadding = paddingValues.calculateRightPadding(layoutDirection)
              val bottomPadding = paddingValues.calculateBottomPadding()

              requirePrecondition(
                  (leftPadding >= 0.dp) and
                      (topPadding >= 0.dp) and
                      (rightPadding >= 0.dp) and
                      (bottomPadding >= 0.dp)
              ) {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 561
    endLine: 595
    sha256: 856eda9b09dd86e9b14bda083998d6ef4b7894934a1c51da8a344b0bc6a059dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  "Padding must be non-negative"
              }

              val roundedLeftPadding = leftPadding.roundToPx()
              val horizontal = roundedLeftPadding + rightPadding.roundToPx()

              val roundedTopPadding = topPadding.roundToPx()
              val vertical = roundedTopPadding + bottomPadding.roundToPx()

              val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

              val width = constraints.constrainWidth(placeable.width + horizontal)
              val height = constraints.constrainHeight(placeable.height + vertical)
              return layout(width, height) { placeable.place(roundedLeftPadding, roundedTopPadding) }
          }

          private fun IntrinsicMeasureScope.checkAndCalculateHorizontalVerticalPadding(): Pair<Int, Int> {
              val leftPadding = paddingValues.calculateLeftPadding(layoutDirection)
              val topPadding = paddingValues.calculateTopPadding()
              val rightPadding = paddingValues.calculateRightPadding(layoutDirection)
              val bottomPadding = paddingValues.calculateBottomPadding()

              requirePrecondition(
                  (leftPadding >= 0.dp) and
                      (topPadding >= 0.dp) and
                      (rightPadding >= 0.dp) and
                      (bottomPadding >= 0.dp)
              ) {
                  "Padding must be non-negative"
              }

              val horizontal = leftPadding.roundToPx() + rightPadding.roundToPx()
              val vertical = topPadding.roundToPx() + bottomPadding.roundToPx()
              return horizontal to vertical
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 596
    endLine: 630
    sha256: ed937812f2e46ed838bb8083fca6a085e2043c173a5fe8504755d569adb203cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
              val childHeight =
                  if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
              return (measurable.minIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
              val childWidth =
                  if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
              return (measurable.minIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
              val childHeight =
                  if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
              return (measurable.maxIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
          }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 631
    endLine: 637
    sha256: 1c75f47911d4bdd7f955c15e279bc462b9d1b3d44e2d4137528aade4b6aa6d60
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
              val childWidth =
                  if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
              return (measurable.maxIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
          }
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt
    startLine: 71
    endLine: 105
    sha256: 1249b4b53d521c130dac15fbd1d62c36634231ed0d9d8f0e16a8297bb0588a7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      name = "padding"
                      properties["start"] = start
                      properties["top"] = top
                      properties["end"] = end
                      properties["bottom"] = bottom
                  },
              )

      /**
       * Apply [horizontal] dp space along the left and right edges of the content, and [vertical] dp
       * space along the top and bottom edges. Padding is applied before content measurement and takes
       * precedence; content may only be as large as the remaining space.
       *
       * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
       * [Modifier.offset].
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SymmetricPaddingModifier
       */
      @Stable
      public fun Modifier.padding(horizontal: Dp = 0.dp, vertical: Dp = 0.dp): Modifier =
          this then
              PaddingElement(
                  start = horizontal,
                  top = vertical,
                  end = horizontal,
                  bottom = vertical,
                  rtlAware = true,
                  inspectorInfo = {
                      name = "padding"
                      properties["horizontal"] = horizontal
                      properties["vertical"] = vertical
                  },
              )
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-padding
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-1
      title: androidx.compose.foundation.layout Padding.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-106
      title: androidx.compose.foundation.layout Padding.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-141
      title: androidx.compose.foundation.layout Padding.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.absolutePadding
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-176
      title: androidx.compose.foundation.layout Padding.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.absolutePadding
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-211
      title: androidx.compose.foundation.layout Padding.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-246
      title: androidx.compose.foundation.layout Padding.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.layout.PaddingValues
        - androidx.compose.foundation.layout.plus
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-281
      title: androidx.compose.foundation.layout Padding.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.PaddingValues
        - androidx.compose.foundation.layout.minus
        - androidx.compose.foundation.layout.calculateStartPadding
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-316
      title: androidx.compose.foundation.layout Padding.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.layout.padding
        - androidx.compose.foundation.layout.PaddingValues
        - androidx.compose.foundation.layout.calculateEndPadding
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-351
      title: androidx.compose.foundation.layout Padding.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-36
      title: androidx.compose.foundation.layout Padding.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.layout.padding
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-386
      title: androidx.compose.foundation.layout Padding.kt source (lines 386–420)
      aliases:
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-421
      title: androidx.compose.foundation.layout Padding.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-456
      title: androidx.compose.foundation.layout Padding.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-491
      title: androidx.compose.foundation.layout Padding.kt source (lines 491–525)
      aliases:
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-526
      title: androidx.compose.foundation.layout Padding.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.layout.PaddingValues
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-561
      title: androidx.compose.foundation.layout Padding.kt source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-596
      title: androidx.compose.foundation.layout Padding.kt source (lines 596–630)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-631
      title: androidx.compose.foundation.layout Padding.kt source (lines 631–637)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-631-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-71
      title: androidx.compose.foundation.layout Padding.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.layout.padding
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation.layout Padding.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt

## androidx.compose.foundation.layout Padding.kt source (lines 1–35)

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

package androidx.compose.foundation.layout

import androidx.compose.foundation.layout.PaddingValues.Absolute
import androidx.compose.foundation.layout.internal.requirePrecondition
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.coerceAtLeast

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 106–140)


/**
 * Apply [all] dp of additional space along each edge of the content, left, top, right and bottom.
 * Padding is applied before content measurement and takes precedence; content may only be as large
 * as the remaining space.
 *
 * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
 * [Modifier.offset].
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.PaddingAllModifier
 */
@Stable
public fun Modifier.padding(all: Dp): Modifier =
    this then
        PaddingElement(
            start = all,
            top = all,
            end = all,
            bottom = all,
            rtlAware = true,
            inspectorInfo = {
                name = "padding"
                value = all
            },
        )

/**
 * Apply [PaddingValues] to the component as additional space along each edge of the content's left,
 * top, right and bottom. Padding is applied before content measurement and takes precedence;
 * content may only be as large as the remaining space.
 *
 * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
 * [Modifier.offset].

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 141–175)

 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.PaddingValuesModifier
 */
@Stable
public fun Modifier.padding(paddingValues: PaddingValues): Modifier =
    this then
        PaddingValuesElement(
            paddingValues = paddingValues,
            inspectorInfo = {
                name = "padding"
                properties["paddingValues"] = paddingValues
            },
        )

/**
 * Apply additional space along each edge of the content in [Dp]: [left], [top], [right] and
 * [bottom]. These paddings are applied without regard to the current [LayoutDirection], see
 * [padding] to apply relative paddings. Padding is applied before content measurement and takes
 * precedence; content may only be as large as the remaining space.
 *
 * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
 * [Modifier.offset].
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.AbsolutePaddingModifier
 */
@Stable
public fun Modifier.absolutePadding(
    left: Dp = 0.dp,
    top: Dp = 0.dp,
    right: Dp = 0.dp,
    bottom: Dp = 0.dp,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 176–210)

): Modifier =
    this then
        (PaddingElement(
            start = left,
            top = top,
            end = right,
            bottom = bottom,
            rtlAware = false,
            inspectorInfo = {
                name = "absolutePadding"
                properties["left"] = left
                properties["top"] = top
                properties["right"] = right
                properties["bottom"] = bottom
            },
        ))

/**
 * Describes a padding to be applied along the edges inside a box. See the [PaddingValues] factories
 * and [Absolute] for convenient ways to build [PaddingValues].
 */
@Stable
public interface PaddingValues {
    /** The padding to be applied along the left edge inside a box. */
    public fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp

    /** The padding to be applied along the top edge inside a box. */
    public fun calculateTopPadding(): Dp

    /** The padding to be applied along the right edge inside a box. */
    public fun calculateRightPadding(layoutDirection: LayoutDirection): Dp

    /** The padding to be applied along the bottom edge inside a box. */
    public fun calculateBottomPadding(): Dp


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 211–245)

    /** Describes an absolute (RTL unaware) padding to be applied along the edges inside a box. */
    @Immutable
    public class Absolute(
        @Stable private val left: Dp = 0.dp,
        @Stable private val top: Dp = 0.dp,
        @Stable private val right: Dp = 0.dp,
        @Stable private val bottom: Dp = 0.dp,
    ) : PaddingValues {

        init {
            requirePrecondition(
                (left.value >= 0f) and
                    (top.value >= 0f) and
                    (right.value >= 0f) and
                    (bottom.value >= 0f)
            ) {
                "Padding must be non-negative"
            }
        }

        override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp = left

        override fun calculateTopPadding(): Dp = top

        override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp = right

        override fun calculateBottomPadding(): Dp = bottom

        override fun equals(other: Any?): Boolean {
            if (other !is Absolute) return false
            return left == other.left &&
                top == other.top &&
                right == other.right &&
                bottom == other.bottom
        }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 246–280)


        override fun hashCode(): Int =
            ((left.hashCode() * 31 + top.hashCode()) * 31 + right.hashCode()) * 31 +
                bottom.hashCode()

        override fun toString(): String =
            "PaddingValues.Absolute(left=$left, top=$top, right=$right, bottom=$bottom)"
    }

    public companion object {
        /** PaddingValues with all values `0.dp`. */
        @Stable @get:Stable public val Zero: PaddingValues = Absolute()
    }
}

/** Adds two [PaddingValues] together. */
@Stable
public operator fun PaddingValues.plus(other: PaddingValues): PaddingValues =
    object : PaddingValues {
        override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
            this@plus.calculateLeftPadding(layoutDirection) +
                other.calculateLeftPadding(layoutDirection)

        override fun calculateTopPadding(): Dp =
            this@plus.calculateTopPadding() + other.calculateTopPadding()

        override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
            this@plus.calculateRightPadding(layoutDirection) +
                other.calculateRightPadding(layoutDirection)

        override fun calculateBottomPadding(): Dp =
            this@plus.calculateBottomPadding() + other.calculateBottomPadding()
    }

/** Subtracts a [PaddingValues] from another one and ensures that the result is non-negative. */

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 281–315)

@Stable
public operator fun PaddingValues.minus(other: PaddingValues): PaddingValues =
    object : PaddingValues {
        override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
            (this@minus.calculateLeftPadding(layoutDirection) -
                    other.calculateLeftPadding(layoutDirection))
                .coerceAtLeast(0.dp)

        override fun calculateTopPadding(): Dp =
            (this@minus.calculateTopPadding() - other.calculateTopPadding()).coerceAtLeast(0.dp)

        override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
            (this@minus.calculateRightPadding(layoutDirection) -
                    other.calculateRightPadding(layoutDirection))
                .coerceAtLeast(0.dp)

        override fun calculateBottomPadding(): Dp =
            (this@minus.calculateBottomPadding() - other.calculateBottomPadding()).coerceAtLeast(
                0.dp
            )
    }

/**
 * The padding to be applied along the start edge inside a box: along the left edge if the layout
 * direction is LTR, or along the right edge for RTL.
 */
@Stable
public fun PaddingValues.calculateStartPadding(layoutDirection: LayoutDirection): Dp =
    if (layoutDirection == LayoutDirection.Ltr) {
        calculateLeftPadding(layoutDirection)
    } else {
        calculateRightPadding(layoutDirection)
    }

/**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 316–350)

 * The padding to be applied along the end edge inside a box: along the right edge if the layout
 * direction is LTR, or along the left edge for RTL.
 */
@Stable
public fun PaddingValues.calculateEndPadding(layoutDirection: LayoutDirection): Dp =
    if (layoutDirection == LayoutDirection.Ltr) {
        calculateRightPadding(layoutDirection)
    } else {
        calculateLeftPadding(layoutDirection)
    }

/** Creates a padding of [all] dp along all 4 edges. */
@Stable public fun PaddingValues(all: Dp): PaddingValues = PaddingValuesImpl(all, all, all, all)

/**
 * Creates a padding of [horizontal] dp along the left and right edges, and of [vertical] dp along
 * the top and bottom edges.
 */
@Stable
public fun PaddingValues(horizontal: Dp = 0.dp, vertical: Dp = 0.dp): PaddingValues =
    PaddingValuesImpl(horizontal, vertical, horizontal, vertical)

/**
 * Creates a padding to be applied along the edges inside a box. In LTR contexts [start] will be
 * applied along the left edge and [end] will be applied along the right edge. In RTL contexts,
 * [start] will correspond to the right edge and [end] to the left.
 */
@Stable
public fun PaddingValues(
    start: Dp = 0.dp,
    top: Dp = 0.dp,
    end: Dp = 0.dp,
    bottom: Dp = 0.dp,
): PaddingValues = PaddingValuesImpl(start, top, end, bottom)


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 351–385)

@Immutable
internal class PaddingValuesImpl(
    @Stable val start: Dp = 0.dp,
    @Stable val top: Dp = 0.dp,
    @Stable val end: Dp = 0.dp,
    @Stable val bottom: Dp = 0.dp,
) : PaddingValues {

    init {
        requirePrecondition(
            (start.value >= 0f) and (top.value >= 0f) and (end.value >= 0f) and (bottom.value >= 0f)
        ) {
            "Padding must be non-negative"
        }
    }

    override fun calculateLeftPadding(layoutDirection: LayoutDirection) =
        if (layoutDirection == LayoutDirection.Ltr) start else end

    override fun calculateTopPadding() = top

    override fun calculateRightPadding(layoutDirection: LayoutDirection) =
        if (layoutDirection == LayoutDirection.Ltr) end else start

    override fun calculateBottomPadding() = bottom

    override fun equals(other: Any?): Boolean {
        if (other !is PaddingValuesImpl) return false
        return start == other.start &&
            top == other.top &&
            end == other.end &&
            bottom == other.bottom
    }

    override fun hashCode() =

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 36–70)

import androidx.compose.ui.unit.constrainHeight
import androidx.compose.ui.unit.constrainWidth
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.isUnspecified
import androidx.compose.ui.unit.offset
import androidx.compose.ui.util.fastCoerceAtLeast

/**
 * Apply additional space along each edge of the content in [Dp]: [start], [top], [end] and
 * [bottom]. The start and end edges will be determined by the current [LayoutDirection]. Padding is
 * applied before content measurement and takes precedence; content may only be as large as the
 * remaining space.
 *
 * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
 * [Modifier.offset].
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.PaddingModifier
 */
@Stable
public fun Modifier.padding(
    start: Dp = 0.dp,
    top: Dp = 0.dp,
    end: Dp = 0.dp,
    bottom: Dp = 0.dp,
): Modifier =
    this then
        PaddingElement(
            start = start,
            top = top,
            end = end,
            bottom = bottom,
            rtlAware = true,
            inspectorInfo = {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 386–420)

        ((start.hashCode() * 31 + top.hashCode()) * 31 + end.hashCode()) * 31 + bottom.hashCode()

    override fun toString() = "PaddingValues(start=$start, top=$top, end=$end, bottom=$bottom)"
}

private class PaddingElement(
    var start: Dp = 0.dp,
    var top: Dp = 0.dp,
    var end: Dp = 0.dp,
    var bottom: Dp = 0.dp,
    var rtlAware: Boolean,
    val inspectorInfo: InspectorInfo.() -> Unit,
) : ModifierNodeElement<PaddingNode>() {

    init {
        requirePrecondition(
            (start.value >= 0f || start.isUnspecified) and
                (top.value >= 0f || top.isUnspecified) and
                (end.value >= 0f || end.isUnspecified) and
                (bottom.value >= 0f || bottom.isUnspecified)
        ) {
            "Padding must be non-negative"
        }
    }

    override fun create(): PaddingNode {
        return PaddingNode(start, top, end, bottom, rtlAware)
    }

    override fun update(node: PaddingNode) {
        node.start = start
        node.top = top
        node.end = end
        node.bottom = bottom
        node.rtlAware = rtlAware

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 421–455)

    }

    override fun hashCode(): Int {
        var result = start.hashCode()
        result = 31 * result + top.hashCode()
        result = 31 * result + end.hashCode()
        result = 31 * result + bottom.hashCode()
        result = 31 * result + rtlAware.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        val otherModifierElement = other as? PaddingElement ?: return false
        return start == otherModifierElement.start &&
            top == otherModifierElement.top &&
            end == otherModifierElement.end &&
            bottom == otherModifierElement.bottom &&
            rtlAware == otherModifierElement.rtlAware
    }

    override fun InspectorInfo.inspectableProperties() {
        inspectorInfo()
    }
}

private class PaddingNode(
    var start: Dp = 0.dp,
    var top: Dp = 0.dp,
    var end: Dp = 0.dp,
    var bottom: Dp = 0.dp,
    var rtlAware: Boolean,
) : LayoutModifierNode, Modifier.Node() {

    override fun MeasureScope.measure(
        measurable: Measurable,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 456–490)

        constraints: Constraints,
    ): MeasureResult {

        val horizontal = start.roundToPx() + end.roundToPx()
        val vertical = top.roundToPx() + bottom.roundToPx()

        val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

        val width = constraints.constrainWidth(placeable.width + horizontal)
        val height = constraints.constrainHeight(placeable.height + vertical)
        return layout(width, height) {
            if (rtlAware) {
                placeable.placeRelative(start.roundToPx(), top.roundToPx())
            } else {
                placeable.place(start.roundToPx(), top.roundToPx())
            }
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val horizontal = start.roundToPx() + end.roundToPx()
        val vertical = top.roundToPx() + bottom.roundToPx()
        val childHeight =
            if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
        return (measurable.minIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        val horizontal = start.roundToPx() + end.roundToPx()

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 491–525)

        val vertical = top.roundToPx() + bottom.roundToPx()
        val childWidth =
            if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
        return (measurable.minIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val horizontal = start.roundToPx() + end.roundToPx()
        val vertical = top.roundToPx() + bottom.roundToPx()
        val childHeight =
            if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
        return (measurable.maxIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        val horizontal = start.roundToPx() + end.roundToPx()
        val vertical = top.roundToPx() + bottom.roundToPx()
        val childWidth =
            if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
        return (measurable.maxIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
    }
}

private class PaddingValuesElement(
    val paddingValues: PaddingValues,
    val inspectorInfo: InspectorInfo.() -> Unit,
) : ModifierNodeElement<PaddingValuesModifier>() {
    override fun create(): PaddingValuesModifier {
        return PaddingValuesModifier(paddingValues)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 526–560)

    }

    override fun update(node: PaddingValuesModifier) {
        node.paddingValues = paddingValues
    }

    override fun hashCode(): Int = paddingValues.hashCode()

    override fun equals(other: Any?): Boolean {
        val otherElement = other as? PaddingValuesElement ?: return false
        return paddingValues == otherElement.paddingValues
    }

    override fun InspectorInfo.inspectableProperties() {
        inspectorInfo()
    }
}

private class PaddingValuesModifier(var paddingValues: PaddingValues) :
    LayoutModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val leftPadding = paddingValues.calculateLeftPadding(layoutDirection)
        val topPadding = paddingValues.calculateTopPadding()
        val rightPadding = paddingValues.calculateRightPadding(layoutDirection)
        val bottomPadding = paddingValues.calculateBottomPadding()

        requirePrecondition(
            (leftPadding >= 0.dp) and
                (topPadding >= 0.dp) and
                (rightPadding >= 0.dp) and
                (bottomPadding >= 0.dp)
        ) {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 561–595)

            "Padding must be non-negative"
        }

        val roundedLeftPadding = leftPadding.roundToPx()
        val horizontal = roundedLeftPadding + rightPadding.roundToPx()

        val roundedTopPadding = topPadding.roundToPx()
        val vertical = roundedTopPadding + bottomPadding.roundToPx()

        val placeable = measurable.measure(constraints.offset(-horizontal, -vertical))

        val width = constraints.constrainWidth(placeable.width + horizontal)
        val height = constraints.constrainHeight(placeable.height + vertical)
        return layout(width, height) { placeable.place(roundedLeftPadding, roundedTopPadding) }
    }

    private fun IntrinsicMeasureScope.checkAndCalculateHorizontalVerticalPadding(): Pair<Int, Int> {
        val leftPadding = paddingValues.calculateLeftPadding(layoutDirection)
        val topPadding = paddingValues.calculateTopPadding()
        val rightPadding = paddingValues.calculateRightPadding(layoutDirection)
        val bottomPadding = paddingValues.calculateBottomPadding()

        requirePrecondition(
            (leftPadding >= 0.dp) and
                (topPadding >= 0.dp) and
                (rightPadding >= 0.dp) and
                (bottomPadding >= 0.dp)
        ) {
            "Padding must be non-negative"
        }

        val horizontal = leftPadding.roundToPx() + rightPadding.roundToPx()
        val vertical = topPadding.roundToPx() + bottomPadding.roundToPx()
        return horizontal to vertical
    }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 596–630)


    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
        val childHeight =
            if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
        return (measurable.minIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
        val childWidth =
            if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
        return (measurable.minIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
        val childHeight =
            if (height == Constraints.Infinity) height else (height - vertical).fastCoerceAtLeast(0)
        return (measurable.maxIntrinsicWidth(childHeight) + horizontal).fastCoerceAtLeast(0)
    }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 631–637)

        val (horizontal, vertical) = checkAndCalculateHorizontalVerticalPadding()
        val childWidth =
            if (width == Constraints.Infinity) width else (width - horizontal).fastCoerceAtLeast(0)
        return (measurable.maxIntrinsicHeight(childWidth) + vertical).fastCoerceAtLeast(0)
    }
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)

## androidx.compose.foundation.layout Padding.kt source (lines 71–105)

                name = "padding"
                properties["start"] = start
                properties["top"] = top
                properties["end"] = end
                properties["bottom"] = bottom
            },
        )

/**
 * Apply [horizontal] dp space along the left and right edges of the content, and [vertical] dp
 * space along the top and bottom edges. Padding is applied before content measurement and takes
 * precedence; content may only be as large as the remaining space.
 *
 * Negative padding is not permitted — it will cause [IllegalArgumentException]. See
 * [Modifier.offset].
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SymmetricPaddingModifier
 */
@Stable
public fun Modifier.padding(horizontal: Dp = 0.dp, vertical: Dp = 0.dp): Modifier =
    this then
        PaddingElement(
            start = horizontal,
            top = vertical,
            end = horizontal,
            bottom = vertical,
            rtlAware = true,
            inspectorInfo = {
                name = "padding"
                properties["horizontal"] = horizontal
                properties["vertical"] = vertical
            },
        )

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-padding-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Padding.kt)
