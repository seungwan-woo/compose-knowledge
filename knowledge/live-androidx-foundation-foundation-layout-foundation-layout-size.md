---
type: reference
title: androidx.compose.foundation.layout Size.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1
    endLine: 35
    sha256: 8047acd8c1b879f396772e8fc318d676ac02e5a7e5b88aeb0877b62ed1c3f353
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

      import androidx.annotation.FloatRange
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.ParentDataModifierNode
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1016
    endLine: 1050
    sha256: f3e0fc6e475a0b6a1ae68757b3bb8973ccd436e25798339dcf9fd29e8060e4e1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return true
          }

          override fun hashCode(): Int {
              var result = direction.hashCode()
              result = 31 * result + unbounded.hashCode()
              result = 31 * result + align.hashCode()
              return result
          }

          @Suppress("ModifierFactoryExtensionFunction", "ModifierFactoryReturnType")
          companion object {
              @Stable
              fun width(align: Alignment.Horizontal, unbounded: Boolean) =
                  WrapContentElement(
                      direction = Direction.Horizontal,
                      unbounded = unbounded,
                      alignmentCallback = { size, layoutDirection ->
                          IntOffset(align.align(0, size.width, layoutDirection), 0)
                      },
                      align,
                      inspectorName = "wrapContentWidth",
                  )

              @Stable
              fun height(align: Alignment.Vertical, unbounded: Boolean) =
                  WrapContentElement(
                      direction = Direction.Vertical,
                      unbounded = unbounded,
                      alignmentCallback = { size, _ -> IntOffset(0, align.align(0, size.height)) },
                      align,
                      inspectorName = "wrapContentHeight",
                  )

              @Stable
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1051
    endLine: 1085
    sha256: e55952803e8bb054c9930f133192381ff03c04939266f9782df19f7f8f4b9382
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fun size(align: Alignment, unbounded: Boolean) =
                  WrapContentElement(
                      direction = Direction.Both,
                      unbounded = unbounded,
                      alignmentCallback = { size, layoutDirection ->
                          align.align(IntSize.Zero, size, layoutDirection)
                      },
                      align,
                      inspectorName = "wrapContentSize",
                  )
          }
      }

      private class WrapContentNode(
          var direction: Direction,
          var unbounded: Boolean,
          var alignmentCallback: (IntSize, LayoutDirection) -> IntOffset,
      ) : LayoutModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val wrappedConstraints =
                  Constraints(
                      minWidth = if (direction != Direction.Vertical) 0 else constraints.minWidth,
                      minHeight = if (direction != Direction.Horizontal) 0 else constraints.minHeight,
                      maxWidth =
                          if (direction != Direction.Vertical && unbounded) {
                              Constraints.Infinity
                          } else {
                              constraints.maxWidth
                          },
                      maxHeight =
                          if (direction != Direction.Horizontal && unbounded) {
                              Constraints.Infinity
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 106
    endLine: 140
    sha256: 7a204d94c17e65182b70ac0334465db96824fa4c8032f165e1163cfe98fc2518
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * For a modifier that sets the size of the content regardless of the incoming constraints, see
       * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
       * [heightIn] or [sizeIn] to set a preferred size range.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifier
       */
      @Stable
      public fun Modifier.size(size: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = size,
                  maxWidth = size,
                  minHeight = size,
                  maxHeight = size,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "size"
                          value = size
                      },
              )
          )

      /**
       * Declare the preferred size of the content to be exactly [width]dp by [height]dp. The incoming
       * measurement [Constraints] may override this value, forcing the content to be either smaller or
       * larger.
       *
       * For a modifier that sets the size of the content regardless of the incoming constraints, see
       * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
       * [heightIn] or [sizeIn] to set a preferred size range.
       *
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1086
    endLine: 1120
    sha256: e2d5d690428444463a32af65e6d59d38bc9d61b1ef0de8ce06bb3fa88dadb26d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          } else {
                              constraints.maxHeight
                          },
                  )
              val placeable = measurable.measure(wrappedConstraints)
              val wrapperWidth = placeable.width.coerceIn(constraints.minWidth, constraints.maxWidth)
              val wrapperHeight = placeable.height.coerceIn(constraints.minHeight, constraints.maxHeight)
              return layout(wrapperWidth, wrapperHeight) {
                  val position =
                      alignmentCallback(
                          IntSize(wrapperWidth - placeable.width, wrapperHeight - placeable.height),
                          layoutDirection,
                      )
                  placeable.place(position)
              }
          }

          private fun childMaxHeight(height: Int): Int =
              if ((direction == Direction.Vertical || direction == Direction.Both) && unbounded) {
                  Constraints.Infinity
              } else {
                  height
              }

          private fun childMaxWidth(width: Int): Int =
              if ((direction == Direction.Horizontal || direction == Direction.Both) && unbounded) {
                  Constraints.Infinity
              } else {
                  width
              }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int = measurable.minIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1121
    endLine: 1155
    sha256: 0cbdf0fda28a7a481d6f7fa15a20f128ec7cdf7de3c1f5642a951c67d5293041
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int = measurable.maxIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = measurable.minIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = measurable.maxIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)
      }

      private class UnspecifiedConstraintsElement(
          val minWidth: Dp = Dp.Unspecified,
          val minHeight: Dp = Dp.Unspecified,
      ) : ModifierNodeElement<UnspecifiedConstraintsNode>() {
          override fun create(): UnspecifiedConstraintsNode =
              UnspecifiedConstraintsNode(minWidth = minWidth, minHeight = minHeight)

          override fun update(node: UnspecifiedConstraintsNode) {
              node.minWidth = minWidth
              node.minHeight = minHeight
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "defaultMinSize"
              properties["minWidth"] = minWidth
              properties["minHeight"] = minHeight
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1156
    endLine: 1190
    sha256: 3df23ffbab86f746534de22acf4ba32d6a7c10aa6544c1307d1f0c82666de554
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          override fun equals(other: Any?): Boolean {
              if (other !is UnspecifiedConstraintsElement) return false
              return minWidth == other.minWidth && minHeight == other.minHeight
          }

          override fun hashCode() = minWidth.hashCode() * 31 + minHeight.hashCode()
      }

      private class UnspecifiedConstraintsNode(
          var minWidth: Dp = Dp.Unspecified,
          var minHeight: Dp = Dp.Unspecified,
      ) : LayoutModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val wrappedConstraints =
                  Constraints(
                      if (minWidth.isSpecified && constraints.minWidth == 0) {
                          minWidth.roundToPx().fastCoerceIn(0, constraints.maxWidth)
                      } else {
                          constraints.minWidth
                      },
                      constraints.maxWidth,
                      if (minHeight.isSpecified && constraints.minHeight == 0) {
                          minHeight.roundToPx().fastCoerceIn(0, constraints.maxHeight)
                      } else {
                          constraints.minHeight
                      },
                      constraints.maxHeight,
                  )
              val placeable = measurable.measure(wrappedConstraints)
              return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1191
    endLine: 1225
    sha256: 0332cfbce23692bc81e0d960ad2f0ca9e75ab18287c7df76cfaadd6274caef74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ) =
              measurable
                  .minIntrinsicWidth(height)
                  .fastCoerceAtLeast(if (minWidth.isSpecified) minWidth.roundToPx() else 0)

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ) =
              measurable
                  .maxIntrinsicWidth(height)
                  .fastCoerceAtLeast(if (minWidth.isSpecified) minWidth.roundToPx() else 0)

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ) =
              measurable
                  .minIntrinsicHeight(width)
                  .fastCoerceAtLeast(if (minHeight.isSpecified) minHeight.roundToPx() else 0)

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ) =
              measurable
                  .maxIntrinsicHeight(width)
                  .fastCoerceAtLeast(if (minHeight.isSpecified) minHeight.roundToPx() else 0)
      }

      internal enum class Direction {
          Vertical,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 1226
    endLine: 1239
    sha256: 5d76d061d1c5ba1e72d5e695d04b6d4b3b469836d426f485e9ad17fe3f119693
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          Horizontal,
          Both,
      }

      internal interface FillModifierParentData {
          var fillHorizontalFraction: Float
          var fillVerticalFraction: Float
      }

      internal class FillParentData(
          override var fillHorizontalFraction: Float = 0f,
          override var fillVerticalFraction: Float = 0f,
      ) : FillModifierParentData
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 141
    endLine: 175
    sha256: 8e64a3c5d5fccd9b26f8960afab1426c4f54729e263c4881e25980a861d583db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifier
       */
      @Stable
      public fun Modifier.size(width: Dp, height: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = width,
                  maxWidth = width,
                  minHeight = height,
                  maxHeight = height,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "size"
                          properties["width"] = width
                          properties["height"] = height
                      },
              )
          )

      /**
       * Declare the preferred size of the content to be exactly [size]. The incoming measurement
       * [Constraints] may override this value, forcing the content to be either smaller or larger.
       *
       * For a modifier that sets the size of the content regardless of the incoming constraints, see
       * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
       * [heightIn] or [sizeIn] to set a preferred size range.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifierWithDpSize
       */
      @Stable public fun Modifier.size(size: DpSize): Modifier = size(size.width, size.height)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 176
    endLine: 210
    sha256: d8f4203335f8fbc3af88b087a124f68d9ebf9bc0fc88ffc9ef6c00d692bf9384
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Constrain the width of the content to be between [min]dp and [max]dp as permitted by the incoming
       * measurement [Constraints]. If the incoming constraints are more restrictive the requested size
       * will obey the incoming constraints and attempt to be as close as possible to the preferred size.
       */
      @Stable
      public fun Modifier.widthIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
          this.then(
              SizeElement(
                  minWidth = min,
                  maxWidth = max,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "widthIn"
                          properties["min"] = min
                          properties["max"] = max
                      },
              )
          )

      /**
       * Constrain the height of the content to be between [min]dp and [max]dp as permitted by the
       * incoming measurement [Constraints]. If the incoming constraints are more restrictive the
       * requested size will obey the incoming constraints and attempt to be as close as possible to the
       * preferred size.
       */
      @Stable
      public fun Modifier.heightIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
          this.then(
              SizeElement(
                  minHeight = min,
                  maxHeight = max,
                  enforceIncoming = true,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 211
    endLine: 245
    sha256: 23194cc8975e267b9b9cfa61a1ec1635deacf2f758d16d94dc919bdbdcb66f90
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "heightIn"
                          properties["min"] = min
                          properties["max"] = max
                      },
              )
          )

      /**
       * Constrain the width of the content to be between [minWidth]dp and [maxWidth]dp and the height of
       * the content to be between [minHeight]dp and [maxHeight]dp as permitted by the incoming
       * measurement [Constraints]. If the incoming constraints are more restrictive the requested size
       * will obey the incoming constraints and attempt to be as close as possible to the preferred size.
       */
      @Stable
      public fun Modifier.sizeIn(
          minWidth: Dp = Dp.Unspecified,
          minHeight: Dp = Dp.Unspecified,
          maxWidth: Dp = Dp.Unspecified,
          maxHeight: Dp = Dp.Unspecified,
      ): Modifier =
          this.then(
              SizeElement(
                  minWidth = minWidth,
                  minHeight = minHeight,
                  maxWidth = maxWidth,
                  maxHeight = maxHeight,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "sizeIn"
                          properties["minWidth"] = minWidth
                          properties["minHeight"] = minHeight
                          properties["maxWidth"] = maxWidth
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 246
    endLine: 280
    sha256: dd4cc85350d90c661869bfe65a0943644be5a855f6bf5c5026c3871dd78b55f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          properties["maxHeight"] = maxHeight
                      },
              )
          )

      /**
       * Declare the width of the content to be exactly [width]dp. The incoming measurement [Constraints]
       * will not override this value. If the content chooses a size that does not satisfy the incoming
       * [Constraints], the parent layout will be reported a size coerced in the [Constraints], and the
       * position of the content will be automatically offset to be centered on the space assigned to the
       * child by the parent layout under the assumption that [Constraints] were respected.
       *
       * See [requiredWidthIn] and [requiredSizeIn] to set a size range. See [width] to set a preferred
       * width, which is only respected when the incoming constraints allow it.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleRequiredWidthModifier
       */
      @Stable
      public fun Modifier.requiredWidth(width: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = width,
                  maxWidth = width,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredWidth"
                          value = width
                      },
              )
          )

      /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 281
    endLine: 315
    sha256: 0dbf453f40c22aaae96277cabb06f05b4d40d4761e8bd102679a038a9d142a15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Declare the height of the content to be exactly [height]dp. The incoming measurement
       * [Constraints] will not override this value. If the content chooses a size that does not satisfy
       * the incoming [Constraints], the parent layout will be reported a size coerced in the
       * [Constraints], and the position of the content will be automatically offset to be centered on the
       * space assigned to the child by the parent layout under the assumption that [Constraints] were
       * respected.
       *
       * See [requiredHeightIn] and [requiredSizeIn] to set a size range. See [height] to set a preferred
       * height, which is only respected when the incoming constraints allow it.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleRequiredHeightModifier
       */
      @Stable
      public fun Modifier.requiredHeight(height: Dp): Modifier =
          this.then(
              SizeElement(
                  minHeight = height,
                  maxHeight = height,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredHeight"
                          value = height
                      },
              )
          )

      /**
       * Declare the size of the content to be exactly [size]dp width and height. The incoming measurement
       * [Constraints] will not override this value. If the content chooses a size that does not satisfy
       * the incoming [Constraints], the parent layout will be reported a size coerced in the
       * [Constraints], and the position of the content will be automatically offset to be centered on the
       * space assigned to the child by the parent layout under the assumption that [Constraints] were
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 316
    endLine: 350
    sha256: 90645cf5206badb3cf64f2968e537e66adfbd4b7391a0819257e00329469018e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * respected.
       *
       * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only
       * respected when the incoming constraints allow it.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleRequiredSizeModifier
       */
      @Stable
      public fun Modifier.requiredSize(size: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = size,
                  maxWidth = size,
                  minHeight = size,
                  maxHeight = size,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredSize"
                          value = size
                      },
              )
          )

      /**
       * Declare the size of the content to be exactly [width]dp and [height]dp. The incoming measurement
       * [Constraints] will not override this value. If the content chooses a size that does not satisfy
       * the incoming [Constraints], the parent layout will be reported a size coerced in the
       * [Constraints], and the position of the content will be automatically offset to be centered on the
       * space assigned to the child by the parent layout under the assumption that [Constraints] were
       * respected.
       *
       * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 351
    endLine: 385
    sha256: aa30f954e34f274b5192fd0be7a49512bd66c58940ae2c8db5257bcd91aef78f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * respected when the incoming constraints allow it.
       */
      @Stable
      public fun Modifier.requiredSize(width: Dp, height: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = width,
                  maxWidth = width,
                  minHeight = height,
                  maxHeight = height,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredSize"
                          properties["width"] = width
                          properties["height"] = height
                      },
              )
          )

      /**
       * Declare the size of the content to be exactly [size]. The incoming measurement [Constraints] will
       * not override this value. If the content chooses a size that does not satisfy the incoming
       * [Constraints], the parent layout will be reported a size coerced in the [Constraints], and the
       * position of the content will be automatically offset to be centered on the space assigned to the
       * child by the parent layout under the assumption that [Constraints] were respected.
       *
       * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only
       * respected when the incoming constraints allow it.
       */
      @Stable
      public fun Modifier.requiredSize(size: DpSize): Modifier = requiredSize(size.width, size.height)

      /**
       * Constrain the width of the content to be between [min]dp and [max]dp. If the content chooses a
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 36
    endLine: 70
    sha256: da38e4c70fdff4ed9a0f8b76e7b0388faba6feeda7dee2284646b2605411c9d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.DpSize
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.constrain
      import androidx.compose.ui.unit.constrainHeight
      import androidx.compose.ui.unit.constrainWidth
      import androidx.compose.ui.unit.isSpecified
      import androidx.compose.ui.util.fastCoerceAtLeast
      import androidx.compose.ui.util.fastCoerceAtMost
      import androidx.compose.ui.util.fastCoerceIn
      import androidx.compose.ui.util.fastRoundToInt

      /**
       * Declare the preferred width of the content to be exactly [width]dp. The incoming measurement
       * [Constraints] may override this value, forcing the content to be either smaller or larger.
       *
       * For a modifier that sets the width of the content regardless of the incoming constraints see
       * [Modifier.requiredWidth]. See [height] or [size] to set other preferred dimensions. See
       * [widthIn], [heightIn] or [sizeIn] to set a preferred size range.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleWidthModifier
       */
      @Stable
      public fun Modifier.width(width: Dp): Modifier =
          this.then(
              SizeElement(
                  minWidth = width,
                  maxWidth = width,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "width"
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 386
    endLine: 420
    sha256: 59abf1494a75d5b0f377924d4678712bc4ad4318640b75255e5f9430b7429653
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * size that does not satisfy the incoming [Constraints], the parent layout will be reported a size
       * coerced in the [Constraints], and the position of the content will be automatically offset to be
       * centered on the space assigned to the child by the parent layout under the assumption that
       * [Constraints] were respected.
       */
      @Stable
      public fun Modifier.requiredWidthIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
          this.then(
              SizeElement(
                  minWidth = min,
                  maxWidth = max,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredWidthIn"
                          properties["min"] = min
                          properties["max"] = max
                      },
              )
          )

      /**
       * Constrain the height of the content to be between [min]dp and [max]dp. If the content chooses a
       * size that does not satisfy the incoming [Constraints], the parent layout will be reported a size
       * coerced in the [Constraints], and the position of the content will be automatically offset to be
       * centered on the space assigned to the child by the parent layout under the assumption that
       * [Constraints] were respected.
       */
      @Stable
      public fun Modifier.requiredHeightIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
          this.then(
              SizeElement(
                  minHeight = min,
                  maxHeight = max,
                  enforceIncoming = false,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 421
    endLine: 455
    sha256: 453bd4a0b7dacfcc2c8841bd956dcf191aef4139196a775b5a7859439cfd549e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredHeightIn"
                          properties["min"] = min
                          properties["max"] = max
                      },
              )
          )

      /**
       * Constrain the width of the content to be between [minWidth]dp and [maxWidth]dp, and the height of
       * the content to be between [minHeight]dp and [maxHeight]dp. If the content chooses a size that
       * does not satisfy the incoming [Constraints], the parent layout will be reported a size coerced in
       * the [Constraints], and the position of the content will be automatically offset to be centered on
       * the space assigned to the child by the parent layout under the assumption that [Constraints] were
       * respected.
       */
      @Stable
      public fun Modifier.requiredSizeIn(
          minWidth: Dp = Dp.Unspecified,
          minHeight: Dp = Dp.Unspecified,
          maxWidth: Dp = Dp.Unspecified,
          maxHeight: Dp = Dp.Unspecified,
      ): Modifier =
          this.then(
              SizeElement(
                  minWidth = minWidth,
                  minHeight = minHeight,
                  maxWidth = maxWidth,
                  maxHeight = maxHeight,
                  enforceIncoming = false,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "requiredSizeIn"
                          properties["minWidth"] = minWidth
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 456
    endLine: 490
    sha256: e9f1cc2255b24b834e745091af4a4abbe17c9e4f3aaaf60c7d6a02b45b86426a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          properties["minHeight"] = minHeight
                          properties["maxWidth"] = maxWidth
                          properties["maxHeight"] = maxHeight
                      },
              )
          )

      /**
       * Have the content fill (possibly only partially) the [Constraints.maxWidth] of the incoming
       * measurement constraints, by setting the [minimum width][Constraints.minWidth] and the
       * [maximum width][Constraints.maxWidth] to be equal to the [maximum width][Constraints.maxWidth]
       * multiplied by [fraction]. Note that, by default, the [fraction] is 1, so the modifier will make
       * the content fill the whole available width. If the incoming maximum width is
       * [Constraints.Infinity] this modifier will have no effect.
       *
       * @param fraction The fraction of the maximum width to use, between `0` and `1`, inclusive.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleFillWidthModifier
       * @sample androidx.compose.foundation.layout.samples.FillHalfWidthModifier
       */
      @Stable
      public fun Modifier.fillMaxWidth(@FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f): Modifier =
          this.then(if (fraction == 1f) FillWholeMaxWidth else FillElement.width(fraction))

      private val FillWholeMaxWidth = FillElement.width(1f)

      /**
       * Have the content fill (possibly only partially) the [Constraints.maxHeight] of the incoming
       * measurement constraints, by setting the [minimum height][Constraints.minHeight] and the
       * [maximum height][Constraints.maxHeight] to be equal to the
       * [maximum height][Constraints.maxHeight] multiplied by [fraction]. Note that, by default, the
       * [fraction] is 1, so the modifier will make the content fill the whole available height. If the
       * incoming maximum height is [Constraints.Infinity] this modifier will have no effect.
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 491
    endLine: 525
    sha256: 1afda0234564229846f66dd494c5b2f49cc9ca1df040af8c792567a1b92e8ec4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param fraction The fraction of the maximum height to use, between `0` and `1`, inclusive.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleFillHeightModifier
       * @sample androidx.compose.foundation.layout.samples.FillHalfHeightModifier
       */
      @Stable
      public fun Modifier.fillMaxHeight(
          @FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f
      ): Modifier = this.then(if (fraction == 1f) FillWholeMaxHeight else FillElement.height(fraction))

      private val FillWholeMaxHeight = FillElement.height(1f)

      /**
       * Have the content fill (possibly only partially) the [Constraints.maxWidth] and
       * [Constraints.maxHeight] of the incoming measurement constraints, by setting the
       * [minimum width][Constraints.minWidth] and the [maximum width][Constraints.maxWidth] to be equal
       * to the [maximum width][Constraints.maxWidth] multiplied by [fraction], as well as the
       * [minimum height][Constraints.minHeight] and the [maximum height][Constraints.minHeight] to be
       * equal to the [maximum height][Constraints.maxHeight] multiplied by [fraction]. Note that, by
       * default, the [fraction] is 1, so the modifier will make the content fill the whole available
       * space. If the incoming maximum width or height is [Constraints.Infinity] this modifier will have
       * no effect in that dimension.
       *
       * @param fraction The fraction of the maximum size to use, between `0` and `1`, inclusive.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleFillModifier
       * @sample androidx.compose.foundation.layout.samples.FillHalfSizeModifier
       */
      @Stable
      public fun Modifier.fillMaxSize(@FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f): Modifier =
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 526
    endLine: 560
    sha256: ad50591854a94a8f3b78e7777a5f7aff4d7eaf2f7555cbedb1615bd92838c98b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          this.then(if (fraction == 1f) FillWholeMaxSize else FillElement.size(fraction))

      private val FillWholeMaxSize = FillElement.size(1f)

      /**
       * Allow the content to measure at its desired width without regard for the incoming measurement
       * [minimum width constraint][Constraints.minWidth], and, if [unbounded] is true, also without
       * regard for the incoming measurement [maximum width constraint][Constraints.maxWidth]. If the
       * content's measured size is smaller than the minimum width constraint, [align] it within that
       * minimum width space. If the content's measured size is larger than the maximum width constraint
       * (only possible when [unbounded] is true), [align] over the maximum width space.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentHorizontallyAlignedModifier
       */
      @Stable
      public fun Modifier.wrapContentWidth(
          align: Alignment.Horizontal = Alignment.CenterHorizontally,
          unbounded: Boolean = false,
      ): Modifier =
          this.then(
              if (align == Alignment.CenterHorizontally && !unbounded) {
                  WrapContentWidthCenter
              } else if (align == Alignment.Start && !unbounded) {
                  WrapContentWidthStart
              } else {
                  WrapContentElement.width(align, unbounded)
              }
          )

      private val WrapContentWidthCenter = WrapContentElement.width(Alignment.CenterHorizontally, false)
      private val WrapContentWidthStart = WrapContentElement.width(Alignment.Start, false)

      /**
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 561
    endLine: 595
    sha256: 7c3fb81b96e6969f6fe0523c74b55002ad71209dc0b7faa3c3d9c65ea6b44b54
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Allow the content to measure at its desired height without regard for the incoming measurement
       * [minimum height constraint][Constraints.minHeight], and, if [unbounded] is true, also without
       * regard for the incoming measurement [maximum height constraint][Constraints.maxHeight]. If the
       * content's measured size is smaller than the minimum height constraint, [align] it within that
       * minimum height space. If the content's measured size is larger than the maximum height constraint
       * (only possible when [unbounded] is true), [align] over the maximum height space.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentVerticallyAlignedModifier
       */
      @Stable
      public fun Modifier.wrapContentHeight(
          align: Alignment.Vertical = Alignment.CenterVertically,
          unbounded: Boolean = false,
      ): Modifier =
          this.then(
              if (align == Alignment.CenterVertically && !unbounded) {
                  WrapContentHeightCenter
              } else if (align == Alignment.Top && !unbounded) {
                  WrapContentHeightTop
              } else {
                  WrapContentElement.height(align, unbounded)
              }
          )

      private val WrapContentHeightCenter = WrapContentElement.height(Alignment.CenterVertically, false)
      private val WrapContentHeightTop = WrapContentElement.height(Alignment.Top, false)

      /**
       * Allow the content to measure at its desired size without regard for the incoming measurement
       * [minimum width][Constraints.minWidth] or [minimum height][Constraints.minHeight] constraints,
       * and, if [unbounded] is true, also without regard for the incoming maximum constraints. If the
       * content's measured size is smaller than the minimum size constraint, [align] it within that
       * minimum sized space. If the content's measured size is larger than the maximum size constraint
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 596
    endLine: 630
    sha256: 12e5c31740923d813e3e53f29822eee9e743020456832953ac5664f8fcaf59ce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * (only possible when [unbounded] is true), [align] within the maximum space.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentAlignedModifier
       */
      @Stable
      public fun Modifier.wrapContentSize(
          align: Alignment = Alignment.Center,
          unbounded: Boolean = false,
      ): Modifier =
          this.then(
              if (align == Alignment.Center && !unbounded) {
                  WrapContentSizeCenter
              } else if (align == Alignment.TopStart && !unbounded) {
                  WrapContentSizeTopStart
              } else {
                  WrapContentElement.size(align, unbounded)
              }
          )

      private val WrapContentSizeCenter = WrapContentElement.size(Alignment.Center, false)
      private val WrapContentSizeTopStart = WrapContentElement.size(Alignment.TopStart, false)

      /**
       * Constrain the size of the wrapped layout only when it would be otherwise unconstrained: the
       * [minWidth] and [minHeight] constraints are only applied when the incoming corresponding
       * constraint is `0`. The modifier can be used, for example, to define a default min size of a
       * component, while still allowing it to be overidden with smaller min sizes across usages.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.DefaultMinSizeSample
       */
      @Stable
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 631
    endLine: 665
    sha256: 0f0c03ce184b1bf40c7f276bb24ca9e18ed51914da45f9ecaf4edc82e1f53ac3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun Modifier.defaultMinSize(
          minWidth: Dp = Dp.Unspecified,
          minHeight: Dp = Dp.Unspecified,
      ): Modifier = this.then(UnspecifiedConstraintsElement(minWidth = minWidth, minHeight = minHeight))

      private class FillElement(
          private val direction: Direction,
          private val fraction: Float,
          private val inspectorName: String,
      ) : ModifierNodeElement<FillNode>() {
          override fun create(): FillNode = FillNode(direction = direction, fraction = fraction)

          override fun update(node: FillNode) {
              node.direction = direction
              node.fraction = fraction
          }

          override fun InspectorInfo.inspectableProperties() {
              name = inspectorName
              properties["fraction"] = fraction
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is FillElement) return false

              if (direction != other.direction) return false
              if (fraction != other.fraction) return false

              return true
          }

          override fun hashCode(): Int {
              var result = direction.hashCode()
              result = 31 * result + fraction.hashCode()
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 666
    endLine: 700
    sha256: 89a24bf7453cccb8ee14d8531070213181ccaa8be0f748a28a569b6df00a3e9b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return result
          }

          @Suppress("ModifierFactoryExtensionFunction", "ModifierFactoryReturnType")
          companion object {
              @Stable
              fun width(fraction: Float) =
                  FillElement(
                      direction = Direction.Horizontal,
                      fraction = fraction,
                      inspectorName = "fillMaxWidth",
                  )

              @Stable
              fun height(fraction: Float) =
                  FillElement(
                      direction = Direction.Vertical,
                      fraction = fraction,
                      inspectorName = "fillMaxHeight",
                  )

              @Stable
              fun size(fraction: Float) =
                  FillElement(
                      direction = Direction.Both,
                      fraction = fraction,
                      inspectorName = "fillMaxSize",
                  )
          }
      }

      private class FillNode(var direction: Direction, var fraction: Float) :
          LayoutModifierNode, ParentDataModifierNode, Modifier.Node() {

          override fun Density.modifyParentData(parentData: Any?): Any {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 701
    endLine: 735
    sha256: eec57f6362670282d4aad0ff6b9be68631b5c9adea15ed1a90c3e0e557db8888
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val data =
                  parentData as? FillModifierParentData
                      ?: if (parentData == null) FillParentData() else return parentData
              if (direction == Direction.Horizontal || direction == Direction.Both) {
                  data.fillHorizontalFraction = fraction
              }
              if (direction == Direction.Vertical || direction == Direction.Both) {
                  data.fillVerticalFraction = fraction
              }
              return data
          }

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val minWidth: Int
              val maxWidth: Int
              if (constraints.hasBoundedWidth && direction != Direction.Vertical) {
                  val width =
                      (constraints.maxWidth * fraction)
                          .fastRoundToInt()
                          .fastCoerceIn(constraints.minWidth, constraints.maxWidth)
                  minWidth = width
                  maxWidth = width
              } else {
                  minWidth = constraints.minWidth
                  maxWidth = constraints.maxWidth
              }
              val minHeight: Int
              val maxHeight: Int
              if (constraints.hasBoundedHeight && direction != Direction.Horizontal) {
                  val height =
                      (constraints.maxHeight * fraction)
                          .fastRoundToInt()
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 71
    endLine: 105
    sha256: cf8c5c04214b25d8f0fd53eb07079631bfc2439fc1cebd557e330910c990d632
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          value = width
                      },
              )
          )

      /**
       * Declare the preferred height of the content to be exactly [height]dp. The incoming measurement
       * [Constraints] may override this value, forcing the content to be either smaller or larger.
       *
       * For a modifier that sets the height of the content regardless of the incoming constraints see
       * [Modifier.requiredHeight]. See [width] or [size] to set other preferred dimensions. See
       * [widthIn], [heightIn] or [sizeIn] to set a preferred size range.
       *
       * Example usage:
       *
       * @sample androidx.compose.foundation.layout.samples.SimpleHeightModifier
       */
      @Stable
      public fun Modifier.height(height: Dp): Modifier =
          this.then(
              SizeElement(
                  minHeight = height,
                  maxHeight = height,
                  enforceIncoming = true,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "height"
                          value = height
                      },
              )
          )

      /**
       * Declare the preferred size of the content to be exactly [size]dp square. The incoming measurement
       * [Constraints] may override this value, forcing the content to be either smaller or larger.
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 736
    endLine: 770
    sha256: 3ef3410f9f20cac982c35e6c8d3c57f2250d41a5b20f1e7a32b2c91d92e299a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          .fastCoerceIn(constraints.minHeight, constraints.maxHeight)
                  minHeight = height
                  maxHeight = height
              } else {
                  minHeight = constraints.minHeight
                  maxHeight = constraints.maxHeight
              }
              val placeable = measurable.measure(Constraints(minWidth, maxWidth, minHeight, maxHeight))

              return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
          }

          private fun childMaxHeight(height: Int): Int =
              if (
                  height != Constraints.Infinity &&
                      (direction == Direction.Vertical || direction == Direction.Both)
              ) {
                  (height * fraction).fastRoundToInt().fastCoerceIn(0, height)
              } else {
                  height
              }

          private fun childMaxWidth(width: Int): Int =
              if (
                  width != Constraints.Infinity &&
                      (direction == Direction.Horizontal || direction == Direction.Both)
              ) {
                  (width * fraction).fastRoundToInt().fastCoerceIn(0, width)
              } else {
                  width
              }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 771
    endLine: 805
    sha256: 09cd341bfa577ef7f3f92487fea208b9506f49f9507ab2496fa173e7bcc68460
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          ): Int = measurable.minIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int = measurable.maxIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = measurable.minIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = measurable.maxIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)
      }

      private class SizeElement(
          private val minWidth: Dp = Dp.Unspecified,
          private val minHeight: Dp = Dp.Unspecified,
          private val maxWidth: Dp = Dp.Unspecified,
          private val maxHeight: Dp = Dp.Unspecified,
          private val enforceIncoming: Boolean,
          private val inspectorInfo: InspectorInfo.() -> Unit,
      ) : ModifierNodeElement<SizeNode>() {
          override fun create(): SizeNode =
              SizeNode(
                  minWidth = minWidth,
                  minHeight = minHeight,
                  maxWidth = maxWidth,
                  maxHeight = maxHeight,
                  enforceIncoming = enforceIncoming,
              )
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 806
    endLine: 840
    sha256: 9abab533e7a57dc3cdb0ece90314c5847e420b1b75c95e655c71c8452ac3fdfe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          override fun update(node: SizeNode) {
              node.minWidth = minWidth
              node.minHeight = minHeight
              node.maxWidth = maxWidth
              node.maxHeight = maxHeight
              node.enforceIncoming = enforceIncoming
          }

          override fun InspectorInfo.inspectableProperties() {
              inspectorInfo()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SizeElement) return false

              if (minWidth != other.minWidth) return false
              if (minHeight != other.minHeight) return false
              if (maxWidth != other.maxWidth) return false
              if (maxHeight != other.maxHeight) return false
              if (enforceIncoming != other.enforceIncoming) return false

              return true
          }

          override fun hashCode(): Int {
              var result = minWidth.hashCode()
              result = 31 * result + minHeight.hashCode()
              result = 31 * result + maxWidth.hashCode()
              result = 31 * result + maxHeight.hashCode()
              result = 31 * result + enforceIncoming.hashCode()
              return result
          }
      }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 841
    endLine: 875
    sha256: 9d5be752d86da0332daa918e82794995a1d564866c051382f1bc604af4c29d86
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private class SizeNode(
          var minWidth: Dp = Dp.Unspecified,
          var minHeight: Dp = Dp.Unspecified,
          var maxWidth: Dp = Dp.Unspecified,
          var maxHeight: Dp = Dp.Unspecified,
          var enforceIncoming: Boolean,
      ) : LayoutModifierNode, Modifier.Node() {
          private val Density.targetConstraints: Constraints
              get() {
                  val maxWidth =
                      if (maxWidth.isSpecified) {
                          maxWidth.roundToPx().fastCoerceAtLeast(0)
                      } else {
                          Constraints.Infinity
                      }
                  val maxHeight =
                      if (maxHeight.isSpecified) {
                          maxHeight.roundToPx().fastCoerceAtLeast(0)
                      } else {
                          Constraints.Infinity
                      }
                  val minWidth =
                      if (minWidth.isSpecified) {
                          minWidth.roundToPx().fastCoerceIn(0, maxWidth).let {
                              if (it != Constraints.Infinity) it else 0
                          }
                      } else {
                          0
                      }
                  val minHeight =
                      if (minHeight.isSpecified) {
                          minHeight.roundToPx().fastCoerceIn(0, maxHeight).let {
                              if (it != Constraints.Infinity) it else 0
                          }
                      } else {
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 876
    endLine: 910
    sha256: 01d11b73004e0881fc480ea53eda6867fd94f5ff5392392faef2c525dfbc1b5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          0
                      }
                  return Constraints(
                      minWidth = minWidth,
                      minHeight = minHeight,
                      maxWidth = maxWidth,
                      maxHeight = maxHeight,
                  )
              }

          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val wrappedConstraints = targetConstraints.let { targetConstraints ->
                  if (enforceIncoming) {
                      constraints.constrain(targetConstraints)
                  } else {
                      val resolvedMinWidth =
                          if (minWidth.isSpecified) {
                              targetConstraints.minWidth
                          } else {
                              constraints.minWidth.fastCoerceAtMost(targetConstraints.maxWidth)
                          }
                      val resolvedMaxWidth =
                          if (maxWidth.isSpecified) {
                              targetConstraints.maxWidth
                          } else {
                              constraints.maxWidth.fastCoerceAtLeast(targetConstraints.minWidth)
                          }
                      val resolvedMinHeight =
                          if (minHeight.isSpecified) {
                              targetConstraints.minHeight
                          } else {
                              constraints.minHeight.fastCoerceAtMost(targetConstraints.maxHeight)
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 911
    endLine: 945
    sha256: 47242e95453a8b8b010e12ce13eec762b7f1717cdb1a0506e354ec8f22dce96a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      val resolvedMaxHeight =
                          if (maxHeight.isSpecified) {
                              targetConstraints.maxHeight
                          } else {
                              constraints.maxHeight.fastCoerceAtLeast(targetConstraints.minHeight)
                          }
                      Constraints(
                          resolvedMinWidth,
                          resolvedMaxWidth,
                          resolvedMinHeight,
                          resolvedMaxHeight,
                      )
                  }
              }
              val placeable = measurable.measure(wrappedConstraints)
              return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val constraints = targetConstraints
              return if (constraints.hasFixedWidth) {
                  constraints.maxWidth
              } else {
                  val childHeight = if (enforceIncoming) height else constraints.constrainHeight(height)
                  constraints.constrainWidth(measurable.minIntrinsicWidth(childHeight))
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 946
    endLine: 980
    sha256: 4997558e3ebec436f889d206614123f0259a7e88669b0f5fba06179a1a6cbdb0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): Int {
              val constraints = targetConstraints
              return if (constraints.hasFixedHeight) {
                  constraints.maxHeight
              } else {
                  val childWidth = if (enforceIncoming) width else constraints.constrainWidth(width)
                  constraints.constrainHeight(measurable.minIntrinsicHeight(childWidth))
              }
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int {
              val constraints = targetConstraints
              return if (constraints.hasFixedWidth) {
                  constraints.maxWidth
              } else {
                  val childHeight = if (enforceIncoming) height else constraints.constrainHeight(height)
                  constraints.constrainWidth(measurable.maxIntrinsicWidth(childHeight))
              }
          }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int {
              val constraints = targetConstraints
              return if (constraints.hasFixedHeight) {
                  constraints.maxHeight
              } else {
                  val childWidth = if (enforceIncoming) width else constraints.constrainWidth(width)
                  constraints.constrainHeight(measurable.maxIntrinsicHeight(childWidth))
              }
          }
  - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt
    startLine: 981
    endLine: 1015
    sha256: 092f230976ff7d78480133bc024b085b28eb2d06fcff0096857391462306b22c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      }

      private class WrapContentElement(
          private val direction: Direction,
          private val unbounded: Boolean,
          private val alignmentCallback: (IntSize, LayoutDirection) -> IntOffset,
          private val align: Any, // only used for equals and hashcode
          private val inspectorName: String,
      ) : ModifierNodeElement<WrapContentNode>() {
          override fun create(): WrapContentNode =
              WrapContentNode(direction, unbounded, alignmentCallback)

          override fun update(node: WrapContentNode) {
              node.direction = direction
              node.unbounded = unbounded
              node.alignmentCallback = alignmentCallback
          }

          override fun InspectorInfo.inspectableProperties() {
              name = inspectorName
              properties["align"] = align
              properties["unbounded"] = unbounded
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other === null) return false
              if (this::class != other::class) return false

              other as WrapContentElement

              if (direction != other.direction) return false
              if (unbounded != other.unbounded) return false
              if (align != other.align) return false
compose:
  id: live-androidx-foundation-foundation-layout-foundation-layout-size
  artifact: androidx.compose.foundation:foundation-layout
  fqn: androidx.compose.foundation.layout
  sections:
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1
      title: androidx.compose.foundation.layout Size.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1016
      title: androidx.compose.foundation.layout Size.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.wrapContentWidth
        - androidx.compose.foundation.layout.wrapContentHeight
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1016-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1051
      title: androidx.compose.foundation.layout Size.kt source (lines 1051–1085)
      aliases:
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.wrapContentSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1051-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-106
      title: androidx.compose.foundation.layout Size.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.widthIn
        - androidx.compose.foundation.layout.heightIn
        - androidx.compose.foundation.layout.sizeIn
        - androidx.compose.foundation.layout.requiredSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1086
      title: androidx.compose.foundation.layout Size.kt source (lines 1086–1120)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1086-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1121
      title: androidx.compose.foundation.layout Size.kt source (lines 1121–1155)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.defaultMinSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1121-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1156
      title: androidx.compose.foundation.layout Size.kt source (lines 1156–1190)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1156-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1191
      title: androidx.compose.foundation.layout Size.kt source (lines 1191–1225)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1191-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1226
      title: androidx.compose.foundation.layout Size.kt source (lines 1226–1239)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1226-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-141
      title: androidx.compose.foundation.layout Size.kt source (lines 141–175)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.widthIn
        - androidx.compose.foundation.layout.heightIn
        - androidx.compose.foundation.layout.sizeIn
        - androidx.compose.foundation.layout.requiredSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-176
      title: androidx.compose.foundation.layout Size.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.widthIn
        - androidx.compose.foundation.layout.heightIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-211
      title: androidx.compose.foundation.layout Size.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.heightIn
        - androidx.compose.foundation.layout.sizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-246
      title: androidx.compose.foundation.layout Size.kt source (lines 246–280)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredWidth
        - androidx.compose.foundation.layout.requiredWidthIn
        - androidx.compose.foundation.layout.requiredSizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-281
      title: androidx.compose.foundation.layout Size.kt source (lines 281–315)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredHeight
        - androidx.compose.foundation.layout.requiredHeightIn
        - androidx.compose.foundation.layout.requiredSizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-316
      title: androidx.compose.foundation.layout Size.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredSize
        - androidx.compose.foundation.layout.requiredSizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-351
      title: androidx.compose.foundation.layout Size.kt source (lines 351–385)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredSize
        - androidx.compose.foundation.layout.requiredSizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-36
      title: androidx.compose.foundation.layout Size.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.widthIn
        - androidx.compose.foundation.layout.heightIn
        - androidx.compose.foundation.layout.sizeIn
        - androidx.compose.foundation.layout.requiredWidth
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-386
      title: androidx.compose.foundation.layout Size.kt source (lines 386–420)
      aliases:
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredWidthIn
        - androidx.compose.foundation.layout.requiredHeightIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-421
      title: androidx.compose.foundation.layout Size.kt source (lines 421–455)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.requiredHeightIn
        - androidx.compose.foundation.layout.requiredSizeIn
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-456
      title: androidx.compose.foundation.layout Size.kt source (lines 456–490)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.fillMaxWidth
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-491
      title: androidx.compose.foundation.layout Size.kt source (lines 491–525)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.fillMaxHeight
        - androidx.compose.foundation.layout.fillMaxSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-526
      title: androidx.compose.foundation.layout Size.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.wrapContentWidth
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-561
      title: androidx.compose.foundation.layout Size.kt source (lines 561–595)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.wrapContentHeight
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-596
      title: androidx.compose.foundation.layout Size.kt source (lines 596–630)
      aliases:
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.wrapContentSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-631
      title: androidx.compose.foundation.layout Size.kt source (lines 631–665)
      aliases:
        - androidx.compose.foundation.layout.defaultMinSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-631-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-666
      title: androidx.compose.foundation.layout Size.kt source (lines 666–700)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.fillMaxWidth
        - androidx.compose.foundation.layout.fillMaxHeight
        - androidx.compose.foundation.layout.fillMaxSize
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-666-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-701
      title: androidx.compose.foundation.layout Size.kt source (lines 701–735)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-701-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-71
      title: androidx.compose.foundation.layout Size.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
        - androidx.compose.foundation.layout.size
        - androidx.compose.foundation.layout.widthIn
        - androidx.compose.foundation.layout.heightIn
        - androidx.compose.foundation.layout.sizeIn
        - androidx.compose.foundation.layout.requiredHeight
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-736
      title: androidx.compose.foundation.layout Size.kt source (lines 736–770)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-736-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-771
      title: androidx.compose.foundation.layout Size.kt source (lines 771–805)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-771-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-806
      title: androidx.compose.foundation.layout Size.kt source (lines 806–840)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-806-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-841
      title: androidx.compose.foundation.layout Size.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-841-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-876
      title: androidx.compose.foundation.layout Size.kt source (lines 876–910)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-876-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-911
      title: androidx.compose.foundation.layout Size.kt source (lines 911–945)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-911-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-946
      title: androidx.compose.foundation.layout Size.kt source (lines 946–980)
      aliases:
        - androidx.compose.foundation.layout.width
        - androidx.compose.foundation.layout.height
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-946-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-layout-foundation-layout-size-lines-981
      title: androidx.compose.foundation.layout Size.kt source (lines 981–1015)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation-layout
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-layout-foundation-layout-size-lines-981-source
      relatedIds: []
---

# androidx.compose.foundation.layout Size.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt

## androidx.compose.foundation.layout Size.kt source (lines 1–35)

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

import androidx.annotation.FloatRange
import androidx.compose.runtime.Stable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.ParentDataModifierNode
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1016–1050)

        return true
    }

    override fun hashCode(): Int {
        var result = direction.hashCode()
        result = 31 * result + unbounded.hashCode()
        result = 31 * result + align.hashCode()
        return result
    }

    @Suppress("ModifierFactoryExtensionFunction", "ModifierFactoryReturnType")
    companion object {
        @Stable
        fun width(align: Alignment.Horizontal, unbounded: Boolean) =
            WrapContentElement(
                direction = Direction.Horizontal,
                unbounded = unbounded,
                alignmentCallback = { size, layoutDirection ->
                    IntOffset(align.align(0, size.width, layoutDirection), 0)
                },
                align,
                inspectorName = "wrapContentWidth",
            )

        @Stable
        fun height(align: Alignment.Vertical, unbounded: Boolean) =
            WrapContentElement(
                direction = Direction.Vertical,
                unbounded = unbounded,
                alignmentCallback = { size, _ -> IntOffset(0, align.align(0, size.height)) },
                align,
                inspectorName = "wrapContentHeight",
            )

        @Stable

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1051–1085)

        fun size(align: Alignment, unbounded: Boolean) =
            WrapContentElement(
                direction = Direction.Both,
                unbounded = unbounded,
                alignmentCallback = { size, layoutDirection ->
                    align.align(IntSize.Zero, size, layoutDirection)
                },
                align,
                inspectorName = "wrapContentSize",
            )
    }
}

private class WrapContentNode(
    var direction: Direction,
    var unbounded: Boolean,
    var alignmentCallback: (IntSize, LayoutDirection) -> IntOffset,
) : LayoutModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val wrappedConstraints =
            Constraints(
                minWidth = if (direction != Direction.Vertical) 0 else constraints.minWidth,
                minHeight = if (direction != Direction.Horizontal) 0 else constraints.minHeight,
                maxWidth =
                    if (direction != Direction.Vertical && unbounded) {
                        Constraints.Infinity
                    } else {
                        constraints.maxWidth
                    },
                maxHeight =
                    if (direction != Direction.Horizontal && unbounded) {
                        Constraints.Infinity

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 106–140)

 *
 * For a modifier that sets the size of the content regardless of the incoming constraints, see
 * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
 * [heightIn] or [sizeIn] to set a preferred size range.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifier
 */
@Stable
public fun Modifier.size(size: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = size,
            maxWidth = size,
            minHeight = size,
            maxHeight = size,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "size"
                    value = size
                },
        )
    )

/**
 * Declare the preferred size of the content to be exactly [width]dp by [height]dp. The incoming
 * measurement [Constraints] may override this value, forcing the content to be either smaller or
 * larger.
 *
 * For a modifier that sets the size of the content regardless of the incoming constraints, see
 * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
 * [heightIn] or [sizeIn] to set a preferred size range.
 *

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1086–1120)

                    } else {
                        constraints.maxHeight
                    },
            )
        val placeable = measurable.measure(wrappedConstraints)
        val wrapperWidth = placeable.width.coerceIn(constraints.minWidth, constraints.maxWidth)
        val wrapperHeight = placeable.height.coerceIn(constraints.minHeight, constraints.maxHeight)
        return layout(wrapperWidth, wrapperHeight) {
            val position =
                alignmentCallback(
                    IntSize(wrapperWidth - placeable.width, wrapperHeight - placeable.height),
                    layoutDirection,
                )
            placeable.place(position)
        }
    }

    private fun childMaxHeight(height: Int): Int =
        if ((direction == Direction.Vertical || direction == Direction.Both) && unbounded) {
            Constraints.Infinity
        } else {
            height
        }

    private fun childMaxWidth(width: Int): Int =
        if ((direction == Direction.Horizontal || direction == Direction.Both) && unbounded) {
            Constraints.Infinity
        } else {
            width
        }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int = measurable.minIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1121–1155)


    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int = measurable.maxIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = measurable.minIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = measurable.maxIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)
}

private class UnspecifiedConstraintsElement(
    val minWidth: Dp = Dp.Unspecified,
    val minHeight: Dp = Dp.Unspecified,
) : ModifierNodeElement<UnspecifiedConstraintsNode>() {
    override fun create(): UnspecifiedConstraintsNode =
        UnspecifiedConstraintsNode(minWidth = minWidth, minHeight = minHeight)

    override fun update(node: UnspecifiedConstraintsNode) {
        node.minWidth = minWidth
        node.minHeight = minHeight
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "defaultMinSize"
        properties["minWidth"] = minWidth
        properties["minHeight"] = minHeight
    }


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1156–1190)

    override fun equals(other: Any?): Boolean {
        if (other !is UnspecifiedConstraintsElement) return false
        return minWidth == other.minWidth && minHeight == other.minHeight
    }

    override fun hashCode() = minWidth.hashCode() * 31 + minHeight.hashCode()
}

private class UnspecifiedConstraintsNode(
    var minWidth: Dp = Dp.Unspecified,
    var minHeight: Dp = Dp.Unspecified,
) : LayoutModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val wrappedConstraints =
            Constraints(
                if (minWidth.isSpecified && constraints.minWidth == 0) {
                    minWidth.roundToPx().fastCoerceIn(0, constraints.maxWidth)
                } else {
                    constraints.minWidth
                },
                constraints.maxWidth,
                if (minHeight.isSpecified && constraints.minHeight == 0) {
                    minHeight.roundToPx().fastCoerceIn(0, constraints.maxHeight)
                } else {
                    constraints.minHeight
                },
                constraints.maxHeight,
            )
        val placeable = measurable.measure(wrappedConstraints)
        return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
    }


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1191–1225)

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ) =
        measurable
            .minIntrinsicWidth(height)
            .fastCoerceAtLeast(if (minWidth.isSpecified) minWidth.roundToPx() else 0)

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ) =
        measurable
            .maxIntrinsicWidth(height)
            .fastCoerceAtLeast(if (minWidth.isSpecified) minWidth.roundToPx() else 0)

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ) =
        measurable
            .minIntrinsicHeight(width)
            .fastCoerceAtLeast(if (minHeight.isSpecified) minHeight.roundToPx() else 0)

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ) =
        measurable
            .maxIntrinsicHeight(width)
            .fastCoerceAtLeast(if (minHeight.isSpecified) minHeight.roundToPx() else 0)
}

internal enum class Direction {
    Vertical,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 1226–1239)

    Horizontal,
    Both,
}

internal interface FillModifierParentData {
    var fillHorizontalFraction: Float
    var fillVerticalFraction: Float
}

internal class FillParentData(
    override var fillHorizontalFraction: Float = 0f,
    override var fillVerticalFraction: Float = 0f,
) : FillModifierParentData


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 141–175)

 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifier
 */
@Stable
public fun Modifier.size(width: Dp, height: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = width,
            maxWidth = width,
            minHeight = height,
            maxHeight = height,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "size"
                    properties["width"] = width
                    properties["height"] = height
                },
        )
    )

/**
 * Declare the preferred size of the content to be exactly [size]. The incoming measurement
 * [Constraints] may override this value, forcing the content to be either smaller or larger.
 *
 * For a modifier that sets the size of the content regardless of the incoming constraints, see
 * [Modifier.requiredSize]. See [width] or [height] to set width or height alone. See [widthIn],
 * [heightIn] or [sizeIn] to set a preferred size range.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleSizeModifierWithDpSize
 */
@Stable public fun Modifier.size(size: DpSize): Modifier = size(size.width, size.height)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 176–210)


/**
 * Constrain the width of the content to be between [min]dp and [max]dp as permitted by the incoming
 * measurement [Constraints]. If the incoming constraints are more restrictive the requested size
 * will obey the incoming constraints and attempt to be as close as possible to the preferred size.
 */
@Stable
public fun Modifier.widthIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
    this.then(
        SizeElement(
            minWidth = min,
            maxWidth = max,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "widthIn"
                    properties["min"] = min
                    properties["max"] = max
                },
        )
    )

/**
 * Constrain the height of the content to be between [min]dp and [max]dp as permitted by the
 * incoming measurement [Constraints]. If the incoming constraints are more restrictive the
 * requested size will obey the incoming constraints and attempt to be as close as possible to the
 * preferred size.
 */
@Stable
public fun Modifier.heightIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
    this.then(
        SizeElement(
            minHeight = min,
            maxHeight = max,
            enforceIncoming = true,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 211–245)

            inspectorInfo =
                debugInspectorInfo {
                    name = "heightIn"
                    properties["min"] = min
                    properties["max"] = max
                },
        )
    )

/**
 * Constrain the width of the content to be between [minWidth]dp and [maxWidth]dp and the height of
 * the content to be between [minHeight]dp and [maxHeight]dp as permitted by the incoming
 * measurement [Constraints]. If the incoming constraints are more restrictive the requested size
 * will obey the incoming constraints and attempt to be as close as possible to the preferred size.
 */
@Stable
public fun Modifier.sizeIn(
    minWidth: Dp = Dp.Unspecified,
    minHeight: Dp = Dp.Unspecified,
    maxWidth: Dp = Dp.Unspecified,
    maxHeight: Dp = Dp.Unspecified,
): Modifier =
    this.then(
        SizeElement(
            minWidth = minWidth,
            minHeight = minHeight,
            maxWidth = maxWidth,
            maxHeight = maxHeight,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "sizeIn"
                    properties["minWidth"] = minWidth
                    properties["minHeight"] = minHeight
                    properties["maxWidth"] = maxWidth

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 246–280)

                    properties["maxHeight"] = maxHeight
                },
        )
    )

/**
 * Declare the width of the content to be exactly [width]dp. The incoming measurement [Constraints]
 * will not override this value. If the content chooses a size that does not satisfy the incoming
 * [Constraints], the parent layout will be reported a size coerced in the [Constraints], and the
 * position of the content will be automatically offset to be centered on the space assigned to the
 * child by the parent layout under the assumption that [Constraints] were respected.
 *
 * See [requiredWidthIn] and [requiredSizeIn] to set a size range. See [width] to set a preferred
 * width, which is only respected when the incoming constraints allow it.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleRequiredWidthModifier
 */
@Stable
public fun Modifier.requiredWidth(width: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = width,
            maxWidth = width,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredWidth"
                    value = width
                },
        )
    )

/**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 281–315)

 * Declare the height of the content to be exactly [height]dp. The incoming measurement
 * [Constraints] will not override this value. If the content chooses a size that does not satisfy
 * the incoming [Constraints], the parent layout will be reported a size coerced in the
 * [Constraints], and the position of the content will be automatically offset to be centered on the
 * space assigned to the child by the parent layout under the assumption that [Constraints] were
 * respected.
 *
 * See [requiredHeightIn] and [requiredSizeIn] to set a size range. See [height] to set a preferred
 * height, which is only respected when the incoming constraints allow it.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleRequiredHeightModifier
 */
@Stable
public fun Modifier.requiredHeight(height: Dp): Modifier =
    this.then(
        SizeElement(
            minHeight = height,
            maxHeight = height,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredHeight"
                    value = height
                },
        )
    )

/**
 * Declare the size of the content to be exactly [size]dp width and height. The incoming measurement
 * [Constraints] will not override this value. If the content chooses a size that does not satisfy
 * the incoming [Constraints], the parent layout will be reported a size coerced in the
 * [Constraints], and the position of the content will be automatically offset to be centered on the
 * space assigned to the child by the parent layout under the assumption that [Constraints] were

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 316–350)

 * respected.
 *
 * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only
 * respected when the incoming constraints allow it.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleRequiredSizeModifier
 */
@Stable
public fun Modifier.requiredSize(size: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = size,
            maxWidth = size,
            minHeight = size,
            maxHeight = size,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredSize"
                    value = size
                },
        )
    )

/**
 * Declare the size of the content to be exactly [width]dp and [height]dp. The incoming measurement
 * [Constraints] will not override this value. If the content chooses a size that does not satisfy
 * the incoming [Constraints], the parent layout will be reported a size coerced in the
 * [Constraints], and the position of the content will be automatically offset to be centered on the
 * space assigned to the child by the parent layout under the assumption that [Constraints] were
 * respected.
 *
 * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 351–385)

 * respected when the incoming constraints allow it.
 */
@Stable
public fun Modifier.requiredSize(width: Dp, height: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = width,
            maxWidth = width,
            minHeight = height,
            maxHeight = height,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredSize"
                    properties["width"] = width
                    properties["height"] = height
                },
        )
    )

/**
 * Declare the size of the content to be exactly [size]. The incoming measurement [Constraints] will
 * not override this value. If the content chooses a size that does not satisfy the incoming
 * [Constraints], the parent layout will be reported a size coerced in the [Constraints], and the
 * position of the content will be automatically offset to be centered on the space assigned to the
 * child by the parent layout under the assumption that [Constraints] were respected.
 *
 * See [requiredSizeIn] to set a size range. See [size] to set a preferred size, which is only
 * respected when the incoming constraints allow it.
 */
@Stable
public fun Modifier.requiredSize(size: DpSize): Modifier = requiredSize(size.width, size.height)

/**
 * Constrain the width of the content to be between [min]dp and [max]dp. If the content chooses a

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 36–70)

import androidx.compose.ui.unit.DpSize
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.constrain
import androidx.compose.ui.unit.constrainHeight
import androidx.compose.ui.unit.constrainWidth
import androidx.compose.ui.unit.isSpecified
import androidx.compose.ui.util.fastCoerceAtLeast
import androidx.compose.ui.util.fastCoerceAtMost
import androidx.compose.ui.util.fastCoerceIn
import androidx.compose.ui.util.fastRoundToInt

/**
 * Declare the preferred width of the content to be exactly [width]dp. The incoming measurement
 * [Constraints] may override this value, forcing the content to be either smaller or larger.
 *
 * For a modifier that sets the width of the content regardless of the incoming constraints see
 * [Modifier.requiredWidth]. See [height] or [size] to set other preferred dimensions. See
 * [widthIn], [heightIn] or [sizeIn] to set a preferred size range.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleWidthModifier
 */
@Stable
public fun Modifier.width(width: Dp): Modifier =
    this.then(
        SizeElement(
            minWidth = width,
            maxWidth = width,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "width"

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 386–420)

 * size that does not satisfy the incoming [Constraints], the parent layout will be reported a size
 * coerced in the [Constraints], and the position of the content will be automatically offset to be
 * centered on the space assigned to the child by the parent layout under the assumption that
 * [Constraints] were respected.
 */
@Stable
public fun Modifier.requiredWidthIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
    this.then(
        SizeElement(
            minWidth = min,
            maxWidth = max,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredWidthIn"
                    properties["min"] = min
                    properties["max"] = max
                },
        )
    )

/**
 * Constrain the height of the content to be between [min]dp and [max]dp. If the content chooses a
 * size that does not satisfy the incoming [Constraints], the parent layout will be reported a size
 * coerced in the [Constraints], and the position of the content will be automatically offset to be
 * centered on the space assigned to the child by the parent layout under the assumption that
 * [Constraints] were respected.
 */
@Stable
public fun Modifier.requiredHeightIn(min: Dp = Dp.Unspecified, max: Dp = Dp.Unspecified): Modifier =
    this.then(
        SizeElement(
            minHeight = min,
            maxHeight = max,
            enforceIncoming = false,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 421–455)

            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredHeightIn"
                    properties["min"] = min
                    properties["max"] = max
                },
        )
    )

/**
 * Constrain the width of the content to be between [minWidth]dp and [maxWidth]dp, and the height of
 * the content to be between [minHeight]dp and [maxHeight]dp. If the content chooses a size that
 * does not satisfy the incoming [Constraints], the parent layout will be reported a size coerced in
 * the [Constraints], and the position of the content will be automatically offset to be centered on
 * the space assigned to the child by the parent layout under the assumption that [Constraints] were
 * respected.
 */
@Stable
public fun Modifier.requiredSizeIn(
    minWidth: Dp = Dp.Unspecified,
    minHeight: Dp = Dp.Unspecified,
    maxWidth: Dp = Dp.Unspecified,
    maxHeight: Dp = Dp.Unspecified,
): Modifier =
    this.then(
        SizeElement(
            minWidth = minWidth,
            minHeight = minHeight,
            maxWidth = maxWidth,
            maxHeight = maxHeight,
            enforceIncoming = false,
            inspectorInfo =
                debugInspectorInfo {
                    name = "requiredSizeIn"
                    properties["minWidth"] = minWidth

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 456–490)

                    properties["minHeight"] = minHeight
                    properties["maxWidth"] = maxWidth
                    properties["maxHeight"] = maxHeight
                },
        )
    )

/**
 * Have the content fill (possibly only partially) the [Constraints.maxWidth] of the incoming
 * measurement constraints, by setting the [minimum width][Constraints.minWidth] and the
 * [maximum width][Constraints.maxWidth] to be equal to the [maximum width][Constraints.maxWidth]
 * multiplied by [fraction]. Note that, by default, the [fraction] is 1, so the modifier will make
 * the content fill the whole available width. If the incoming maximum width is
 * [Constraints.Infinity] this modifier will have no effect.
 *
 * @param fraction The fraction of the maximum width to use, between `0` and `1`, inclusive.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleFillWidthModifier
 * @sample androidx.compose.foundation.layout.samples.FillHalfWidthModifier
 */
@Stable
public fun Modifier.fillMaxWidth(@FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f): Modifier =
    this.then(if (fraction == 1f) FillWholeMaxWidth else FillElement.width(fraction))

private val FillWholeMaxWidth = FillElement.width(1f)

/**
 * Have the content fill (possibly only partially) the [Constraints.maxHeight] of the incoming
 * measurement constraints, by setting the [minimum height][Constraints.minHeight] and the
 * [maximum height][Constraints.maxHeight] to be equal to the
 * [maximum height][Constraints.maxHeight] multiplied by [fraction]. Note that, by default, the
 * [fraction] is 1, so the modifier will make the content fill the whole available height. If the
 * incoming maximum height is [Constraints.Infinity] this modifier will have no effect.

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 491–525)

 *
 * @param fraction The fraction of the maximum height to use, between `0` and `1`, inclusive.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleFillHeightModifier
 * @sample androidx.compose.foundation.layout.samples.FillHalfHeightModifier
 */
@Stable
public fun Modifier.fillMaxHeight(
    @FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f
): Modifier = this.then(if (fraction == 1f) FillWholeMaxHeight else FillElement.height(fraction))

private val FillWholeMaxHeight = FillElement.height(1f)

/**
 * Have the content fill (possibly only partially) the [Constraints.maxWidth] and
 * [Constraints.maxHeight] of the incoming measurement constraints, by setting the
 * [minimum width][Constraints.minWidth] and the [maximum width][Constraints.maxWidth] to be equal
 * to the [maximum width][Constraints.maxWidth] multiplied by [fraction], as well as the
 * [minimum height][Constraints.minHeight] and the [maximum height][Constraints.minHeight] to be
 * equal to the [maximum height][Constraints.maxHeight] multiplied by [fraction]. Note that, by
 * default, the [fraction] is 1, so the modifier will make the content fill the whole available
 * space. If the incoming maximum width or height is [Constraints.Infinity] this modifier will have
 * no effect in that dimension.
 *
 * @param fraction The fraction of the maximum size to use, between `0` and `1`, inclusive.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleFillModifier
 * @sample androidx.compose.foundation.layout.samples.FillHalfSizeModifier
 */
@Stable
public fun Modifier.fillMaxSize(@FloatRange(from = 0.0, to = 1.0) fraction: Float = 1f): Modifier =

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 526–560)

    this.then(if (fraction == 1f) FillWholeMaxSize else FillElement.size(fraction))

private val FillWholeMaxSize = FillElement.size(1f)

/**
 * Allow the content to measure at its desired width without regard for the incoming measurement
 * [minimum width constraint][Constraints.minWidth], and, if [unbounded] is true, also without
 * regard for the incoming measurement [maximum width constraint][Constraints.maxWidth]. If the
 * content's measured size is smaller than the minimum width constraint, [align] it within that
 * minimum width space. If the content's measured size is larger than the maximum width constraint
 * (only possible when [unbounded] is true), [align] over the maximum width space.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentHorizontallyAlignedModifier
 */
@Stable
public fun Modifier.wrapContentWidth(
    align: Alignment.Horizontal = Alignment.CenterHorizontally,
    unbounded: Boolean = false,
): Modifier =
    this.then(
        if (align == Alignment.CenterHorizontally && !unbounded) {
            WrapContentWidthCenter
        } else if (align == Alignment.Start && !unbounded) {
            WrapContentWidthStart
        } else {
            WrapContentElement.width(align, unbounded)
        }
    )

private val WrapContentWidthCenter = WrapContentElement.width(Alignment.CenterHorizontally, false)
private val WrapContentWidthStart = WrapContentElement.width(Alignment.Start, false)

/**

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 561–595)

 * Allow the content to measure at its desired height without regard for the incoming measurement
 * [minimum height constraint][Constraints.minHeight], and, if [unbounded] is true, also without
 * regard for the incoming measurement [maximum height constraint][Constraints.maxHeight]. If the
 * content's measured size is smaller than the minimum height constraint, [align] it within that
 * minimum height space. If the content's measured size is larger than the maximum height constraint
 * (only possible when [unbounded] is true), [align] over the maximum height space.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentVerticallyAlignedModifier
 */
@Stable
public fun Modifier.wrapContentHeight(
    align: Alignment.Vertical = Alignment.CenterVertically,
    unbounded: Boolean = false,
): Modifier =
    this.then(
        if (align == Alignment.CenterVertically && !unbounded) {
            WrapContentHeightCenter
        } else if (align == Alignment.Top && !unbounded) {
            WrapContentHeightTop
        } else {
            WrapContentElement.height(align, unbounded)
        }
    )

private val WrapContentHeightCenter = WrapContentElement.height(Alignment.CenterVertically, false)
private val WrapContentHeightTop = WrapContentElement.height(Alignment.Top, false)

/**
 * Allow the content to measure at its desired size without regard for the incoming measurement
 * [minimum width][Constraints.minWidth] or [minimum height][Constraints.minHeight] constraints,
 * and, if [unbounded] is true, also without regard for the incoming maximum constraints. If the
 * content's measured size is smaller than the minimum size constraint, [align] it within that
 * minimum sized space. If the content's measured size is larger than the maximum size constraint

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 596–630)

 * (only possible when [unbounded] is true), [align] within the maximum space.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleWrapContentAlignedModifier
 */
@Stable
public fun Modifier.wrapContentSize(
    align: Alignment = Alignment.Center,
    unbounded: Boolean = false,
): Modifier =
    this.then(
        if (align == Alignment.Center && !unbounded) {
            WrapContentSizeCenter
        } else if (align == Alignment.TopStart && !unbounded) {
            WrapContentSizeTopStart
        } else {
            WrapContentElement.size(align, unbounded)
        }
    )

private val WrapContentSizeCenter = WrapContentElement.size(Alignment.Center, false)
private val WrapContentSizeTopStart = WrapContentElement.size(Alignment.TopStart, false)

/**
 * Constrain the size of the wrapped layout only when it would be otherwise unconstrained: the
 * [minWidth] and [minHeight] constraints are only applied when the incoming corresponding
 * constraint is `0`. The modifier can be used, for example, to define a default min size of a
 * component, while still allowing it to be overidden with smaller min sizes across usages.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.DefaultMinSizeSample
 */
@Stable

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 631–665)

public fun Modifier.defaultMinSize(
    minWidth: Dp = Dp.Unspecified,
    minHeight: Dp = Dp.Unspecified,
): Modifier = this.then(UnspecifiedConstraintsElement(minWidth = minWidth, minHeight = minHeight))

private class FillElement(
    private val direction: Direction,
    private val fraction: Float,
    private val inspectorName: String,
) : ModifierNodeElement<FillNode>() {
    override fun create(): FillNode = FillNode(direction = direction, fraction = fraction)

    override fun update(node: FillNode) {
        node.direction = direction
        node.fraction = fraction
    }

    override fun InspectorInfo.inspectableProperties() {
        name = inspectorName
        properties["fraction"] = fraction
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is FillElement) return false

        if (direction != other.direction) return false
        if (fraction != other.fraction) return false

        return true
    }

    override fun hashCode(): Int {
        var result = direction.hashCode()
        result = 31 * result + fraction.hashCode()

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 666–700)

        return result
    }

    @Suppress("ModifierFactoryExtensionFunction", "ModifierFactoryReturnType")
    companion object {
        @Stable
        fun width(fraction: Float) =
            FillElement(
                direction = Direction.Horizontal,
                fraction = fraction,
                inspectorName = "fillMaxWidth",
            )

        @Stable
        fun height(fraction: Float) =
            FillElement(
                direction = Direction.Vertical,
                fraction = fraction,
                inspectorName = "fillMaxHeight",
            )

        @Stable
        fun size(fraction: Float) =
            FillElement(
                direction = Direction.Both,
                fraction = fraction,
                inspectorName = "fillMaxSize",
            )
    }
}

private class FillNode(var direction: Direction, var fraction: Float) :
    LayoutModifierNode, ParentDataModifierNode, Modifier.Node() {

    override fun Density.modifyParentData(parentData: Any?): Any {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 701–735)

        val data =
            parentData as? FillModifierParentData
                ?: if (parentData == null) FillParentData() else return parentData
        if (direction == Direction.Horizontal || direction == Direction.Both) {
            data.fillHorizontalFraction = fraction
        }
        if (direction == Direction.Vertical || direction == Direction.Both) {
            data.fillVerticalFraction = fraction
        }
        return data
    }

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val minWidth: Int
        val maxWidth: Int
        if (constraints.hasBoundedWidth && direction != Direction.Vertical) {
            val width =
                (constraints.maxWidth * fraction)
                    .fastRoundToInt()
                    .fastCoerceIn(constraints.minWidth, constraints.maxWidth)
            minWidth = width
            maxWidth = width
        } else {
            minWidth = constraints.minWidth
            maxWidth = constraints.maxWidth
        }
        val minHeight: Int
        val maxHeight: Int
        if (constraints.hasBoundedHeight && direction != Direction.Horizontal) {
            val height =
                (constraints.maxHeight * fraction)
                    .fastRoundToInt()

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 71–105)

                    value = width
                },
        )
    )

/**
 * Declare the preferred height of the content to be exactly [height]dp. The incoming measurement
 * [Constraints] may override this value, forcing the content to be either smaller or larger.
 *
 * For a modifier that sets the height of the content regardless of the incoming constraints see
 * [Modifier.requiredHeight]. See [width] or [size] to set other preferred dimensions. See
 * [widthIn], [heightIn] or [sizeIn] to set a preferred size range.
 *
 * Example usage:
 *
 * @sample androidx.compose.foundation.layout.samples.SimpleHeightModifier
 */
@Stable
public fun Modifier.height(height: Dp): Modifier =
    this.then(
        SizeElement(
            minHeight = height,
            maxHeight = height,
            enforceIncoming = true,
            inspectorInfo =
                debugInspectorInfo {
                    name = "height"
                    value = height
                },
        )
    )

/**
 * Declare the preferred size of the content to be exactly [size]dp square. The incoming measurement
 * [Constraints] may override this value, forcing the content to be either smaller or larger.

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 736–770)

                    .fastCoerceIn(constraints.minHeight, constraints.maxHeight)
            minHeight = height
            maxHeight = height
        } else {
            minHeight = constraints.minHeight
            maxHeight = constraints.maxHeight
        }
        val placeable = measurable.measure(Constraints(minWidth, maxWidth, minHeight, maxHeight))

        return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
    }

    private fun childMaxHeight(height: Int): Int =
        if (
            height != Constraints.Infinity &&
                (direction == Direction.Vertical || direction == Direction.Both)
        ) {
            (height * fraction).fastRoundToInt().fastCoerceIn(0, height)
        } else {
            height
        }

    private fun childMaxWidth(width: Int): Int =
        if (
            width != Constraints.Infinity &&
                (direction == Direction.Horizontal || direction == Direction.Both)
        ) {
            (width * fraction).fastRoundToInt().fastCoerceIn(0, width)
        } else {
            width
        }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 771–805)

    ): Int = measurable.minIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int = measurable.maxIntrinsicWidth(childMaxHeight(height)).fastCoerceAtLeast(0)

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = measurable.minIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = measurable.maxIntrinsicHeight(childMaxWidth(width)).fastCoerceAtLeast(0)
}

private class SizeElement(
    private val minWidth: Dp = Dp.Unspecified,
    private val minHeight: Dp = Dp.Unspecified,
    private val maxWidth: Dp = Dp.Unspecified,
    private val maxHeight: Dp = Dp.Unspecified,
    private val enforceIncoming: Boolean,
    private val inspectorInfo: InspectorInfo.() -> Unit,
) : ModifierNodeElement<SizeNode>() {
    override fun create(): SizeNode =
        SizeNode(
            minWidth = minWidth,
            minHeight = minHeight,
            maxWidth = maxWidth,
            maxHeight = maxHeight,
            enforceIncoming = enforceIncoming,
        )


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 806–840)

    override fun update(node: SizeNode) {
        node.minWidth = minWidth
        node.minHeight = minHeight
        node.maxWidth = maxWidth
        node.maxHeight = maxHeight
        node.enforceIncoming = enforceIncoming
    }

    override fun InspectorInfo.inspectableProperties() {
        inspectorInfo()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SizeElement) return false

        if (minWidth != other.minWidth) return false
        if (minHeight != other.minHeight) return false
        if (maxWidth != other.maxWidth) return false
        if (maxHeight != other.maxHeight) return false
        if (enforceIncoming != other.enforceIncoming) return false

        return true
    }

    override fun hashCode(): Int {
        var result = minWidth.hashCode()
        result = 31 * result + minHeight.hashCode()
        result = 31 * result + maxWidth.hashCode()
        result = 31 * result + maxHeight.hashCode()
        result = 31 * result + enforceIncoming.hashCode()
        return result
    }
}


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 841–875)

private class SizeNode(
    var minWidth: Dp = Dp.Unspecified,
    var minHeight: Dp = Dp.Unspecified,
    var maxWidth: Dp = Dp.Unspecified,
    var maxHeight: Dp = Dp.Unspecified,
    var enforceIncoming: Boolean,
) : LayoutModifierNode, Modifier.Node() {
    private val Density.targetConstraints: Constraints
        get() {
            val maxWidth =
                if (maxWidth.isSpecified) {
                    maxWidth.roundToPx().fastCoerceAtLeast(0)
                } else {
                    Constraints.Infinity
                }
            val maxHeight =
                if (maxHeight.isSpecified) {
                    maxHeight.roundToPx().fastCoerceAtLeast(0)
                } else {
                    Constraints.Infinity
                }
            val minWidth =
                if (minWidth.isSpecified) {
                    minWidth.roundToPx().fastCoerceIn(0, maxWidth).let {
                        if (it != Constraints.Infinity) it else 0
                    }
                } else {
                    0
                }
            val minHeight =
                if (minHeight.isSpecified) {
                    minHeight.roundToPx().fastCoerceIn(0, maxHeight).let {
                        if (it != Constraints.Infinity) it else 0
                    }
                } else {

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 876–910)

                    0
                }
            return Constraints(
                minWidth = minWidth,
                minHeight = minHeight,
                maxWidth = maxWidth,
                maxHeight = maxHeight,
            )
        }

    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val wrappedConstraints = targetConstraints.let { targetConstraints ->
            if (enforceIncoming) {
                constraints.constrain(targetConstraints)
            } else {
                val resolvedMinWidth =
                    if (minWidth.isSpecified) {
                        targetConstraints.minWidth
                    } else {
                        constraints.minWidth.fastCoerceAtMost(targetConstraints.maxWidth)
                    }
                val resolvedMaxWidth =
                    if (maxWidth.isSpecified) {
                        targetConstraints.maxWidth
                    } else {
                        constraints.maxWidth.fastCoerceAtLeast(targetConstraints.minWidth)
                    }
                val resolvedMinHeight =
                    if (minHeight.isSpecified) {
                        targetConstraints.minHeight
                    } else {
                        constraints.minHeight.fastCoerceAtMost(targetConstraints.maxHeight)

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 911–945)

                    }
                val resolvedMaxHeight =
                    if (maxHeight.isSpecified) {
                        targetConstraints.maxHeight
                    } else {
                        constraints.maxHeight.fastCoerceAtLeast(targetConstraints.minHeight)
                    }
                Constraints(
                    resolvedMinWidth,
                    resolvedMaxWidth,
                    resolvedMinHeight,
                    resolvedMaxHeight,
                )
            }
        }
        val placeable = measurable.measure(wrappedConstraints)
        return layout(placeable.width, placeable.height) { placeable.placeRelative(0, 0) }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val constraints = targetConstraints
        return if (constraints.hasFixedWidth) {
            constraints.maxWidth
        } else {
            val childHeight = if (enforceIncoming) height else constraints.constrainHeight(height)
            constraints.constrainWidth(measurable.minIntrinsicWidth(childHeight))
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 946–980)

    ): Int {
        val constraints = targetConstraints
        return if (constraints.hasFixedHeight) {
            constraints.maxHeight
        } else {
            val childWidth = if (enforceIncoming) width else constraints.constrainWidth(width)
            constraints.constrainHeight(measurable.minIntrinsicHeight(childWidth))
        }
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int {
        val constraints = targetConstraints
        return if (constraints.hasFixedWidth) {
            constraints.maxWidth
        } else {
            val childHeight = if (enforceIncoming) height else constraints.constrainHeight(height)
            constraints.constrainWidth(measurable.maxIntrinsicWidth(childHeight))
        }
    }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int {
        val constraints = targetConstraints
        return if (constraints.hasFixedHeight) {
            constraints.maxHeight
        } else {
            val childWidth = if (enforceIncoming) width else constraints.constrainWidth(width)
            constraints.constrainHeight(measurable.maxIntrinsicHeight(childWidth))
        }
    }

Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)

## androidx.compose.foundation.layout Size.kt source (lines 981–1015)

}

private class WrapContentElement(
    private val direction: Direction,
    private val unbounded: Boolean,
    private val alignmentCallback: (IntSize, LayoutDirection) -> IntOffset,
    private val align: Any, // only used for equals and hashcode
    private val inspectorName: String,
) : ModifierNodeElement<WrapContentNode>() {
    override fun create(): WrapContentNode =
        WrapContentNode(direction, unbounded, alignmentCallback)

    override fun update(node: WrapContentNode) {
        node.direction = direction
        node.unbounded = unbounded
        node.alignmentCallback = alignmentCallback
    }

    override fun InspectorInfo.inspectableProperties() {
        name = inspectorName
        properties["align"] = align
        properties["unbounded"] = unbounded
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other === null) return false
        if (this::class != other::class) return false

        other as WrapContentElement

        if (direction != other.direction) return false
        if (unbounded != other.unbounded) return false
        if (align != other.align) return false


Sources: [live-androidx-foundation-foundation-layout-foundation-layout-size-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation-layout/src/commonMain/kotlin/androidx/compose/foundation/layout/Size.kt)
