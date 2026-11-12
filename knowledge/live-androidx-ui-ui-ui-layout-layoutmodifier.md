---
type: reference
title: androidx.compose.ui.layout LayoutModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 1
    endLine: 35
    sha256: 168c1b4263bf716c49df5134d4dd559eb779345fbcb1e6a355a5f04c5a65d7de
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

      package androidx.compose.ui.layout

      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.GraphicsLayerScope
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize

      /**
       * A [Modifier.Element] that changes how its wrapped content is measured and laid out. It has the
       * same measurement and layout functionality as the [androidx.compose.ui.layout.Layout] component,
       * while wrapping exactly one layout due to it being a modifier. In contrast, the
       * [androidx.compose.ui.layout.Layout] component is used to define the layout behavior of multiple
       * children.
       *
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 106
    endLine: 140
    sha256: a7f093cce5eeb676cfd5b7abd66324087e8f0fe089f6983fe15767095c4f7dda
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              modifier: LayoutModifier,
              intrinsicMeasureScope: IntrinsicMeasureScope,
              intrinsicMeasurable: IntrinsicMeasurable,
              w: Int,
          ): Int {
              val measurable =
                  DefaultIntrinsicMeasurable(
                      intrinsicMeasurable,
                      IntrinsicMinMax.Min,
                      IntrinsicWidthHeight.Height,
                  )
              val constraints = Constraints(maxWidth = w)
              val layoutResult =
                  with(modifier) {
                      IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                          .measure(measurable, constraints)
                  }
              return layoutResult.height
          }

          fun maxWidth(
              modifier: LayoutModifier,
              intrinsicMeasureScope: IntrinsicMeasureScope,
              intrinsicMeasurable: IntrinsicMeasurable,
              h: Int,
          ): Int {
              val measurable =
                  DefaultIntrinsicMeasurable(
                      intrinsicMeasurable,
                      IntrinsicMinMax.Max,
                      IntrinsicWidthHeight.Width,
                  )
              val constraints = Constraints(maxHeight = h)
              val layoutResult =
                  with(modifier) {
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 141
    endLine: 175
    sha256: f15e7bbc3c7a8ed781d78a47ee1d50b91d5c3872376cae7a81f613473cbffaef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                          .measure(measurable, constraints)
                  }
              return layoutResult.width
          }

          fun maxHeight(
              modifier: LayoutModifier,
              intrinsicMeasureScope: IntrinsicMeasureScope,
              intrinsicMeasurable: IntrinsicMeasurable,
              w: Int,
          ): Int {
              val measurable =
                  DefaultIntrinsicMeasurable(
                      intrinsicMeasurable,
                      IntrinsicMinMax.Max,
                      IntrinsicWidthHeight.Height,
                  )
              val constraints = Constraints(maxWidth = w)
              val layoutResult =
                  with(modifier) {
                      IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                          .measure(measurable, constraints)
                  }
              return layoutResult.height
          }

          private class DefaultIntrinsicMeasurable(
              val measurable: IntrinsicMeasurable,
              val minMax: IntrinsicMinMax,
              val widthHeight: IntrinsicWidthHeight,
          ) : Measurable {
              override val parentData: Any?
                  get() = measurable.parentData
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 176
    endLine: 210
    sha256: 9dc051dbf628959f32f5b0a288d89446dcde7184eb99d5532f87f44873288945
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              override fun measure(constraints: Constraints): Placeable {
                  if (widthHeight == IntrinsicWidthHeight.Width) {
                      val width =
                          if (minMax == IntrinsicMinMax.Max) {
                              measurable.maxIntrinsicWidth(constraints.maxHeight)
                          } else {
                              measurable.minIntrinsicWidth(constraints.maxHeight)
                          }
                      val height =
                          if (constraints.hasBoundedHeight) constraints.maxHeight else LargeDimension
                      return EmptyPlaceable(width, height)
                  }
                  val height =
                      if (minMax == IntrinsicMinMax.Max) {
                          measurable.maxIntrinsicHeight(constraints.maxWidth)
                      } else {
                          measurable.minIntrinsicHeight(constraints.maxWidth)
                      }
                  val width = if (constraints.hasBoundedWidth) constraints.maxWidth else LargeDimension
                  return EmptyPlaceable(width, height)
              }

              override fun minIntrinsicWidth(height: Int): Int {
                  return measurable.minIntrinsicWidth(height)
              }

              override fun maxIntrinsicWidth(height: Int): Int {
                  return measurable.maxIntrinsicWidth(height)
              }

              override fun minIntrinsicHeight(width: Int): Int {
                  return measurable.minIntrinsicHeight(width)
              }

              override fun maxIntrinsicHeight(width: Int): Int {
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 211
    endLine: 245
    sha256: 956a5c7156d060b5accde700b4237f9f2dfff6bbaf80a4baf358131209da3c9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  return measurable.maxIntrinsicHeight(width)
              }
          }

          private class EmptyPlaceable(width: Int, height: Int) : Placeable() {
              init {
                  measuredSize = IntSize(width, height)
              }

              override fun get(alignmentLine: AlignmentLine): Int = AlignmentLine.Unspecified

              override fun placeAt(
                  position: IntOffset,
                  zIndex: Float,
                  layerBlock: (GraphicsLayerScope.() -> Unit)?,
              ) {}
          }

          private enum class IntrinsicMinMax {
              Min,
              Max,
          }

          private enum class IntrinsicWidthHeight {
              Width,
              Height,
          }
      }

      /**
       * Creates a [LayoutModifier] that allows changing how the wrapped element is measured and laid out.
       *
       * This is a convenience API of creating a custom [LayoutModifier] modifier, without having to
       * create a class or an object that implements the [LayoutModifier] interface. The intrinsic
       * measurements follow the default logic provided by the [LayoutModifier].
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 246
    endLine: 280
    sha256: 9114ef2fe645aaf8c8e370300f6899b68e23ce0b74fa3a99e1eaa20088576eec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Example usage:
       *
       * @sample androidx.compose.ui.samples.ConvenienceLayoutModifierSample
       * @see androidx.compose.ui.layout.LayoutModifier
       */
      public fun Modifier.layout(
          measure: MeasureScope.(Measurable, Constraints) -> MeasureResult
      ): Modifier = this then LayoutElement(measure)

      private class LayoutElement(val measure: MeasureScope.(Measurable, Constraints) -> MeasureResult) :
          ModifierNodeElement<LayoutModifierImpl>() {
          override fun create() = LayoutModifierImpl(measure)

          override fun update(node: LayoutModifierImpl) {
              node.measureBlock = measure
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "layout"
              properties["measure"] = measure
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is LayoutElement) return false

              if (measure !== other.measure) return false

              return true
          }

          override fun hashCode(): Int {
              return measure.hashCode()
          }
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 281
    endLine: 293
    sha256: cb0ba2d14ab6d3310250394899c6a2a9662ea4bf55b560fb5ee055d298956c3d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      }

      internal class LayoutModifierImpl(
          var measureBlock: MeasureScope.(Measurable, Constraints) -> MeasureResult
      ) : LayoutModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(measurable: Measurable, constraints: Constraints) =
              measureBlock(measurable, constraints)

          override fun toString(): String {
              return "LayoutModifierImpl(measureBlock=$measureBlock)"
          }
      }
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 36
    endLine: 70
    sha256: 5e6df61790c98f649f05c53276efc3c9a453acf011afa95f78dc455172852e5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.ui.samples.LayoutModifierSample
       * @see androidx.compose.ui.layout.Layout
       */
      @JvmDefaultWithCompatibility
      public interface LayoutModifier : Modifier.Element {
          /**
           * The function used to measure the modifier. The [measurable] corresponds to the wrapped
           * content, and it can be measured with the desired constraints according to the logic of the
           * [LayoutModifier]. The modifier needs to choose its own size, which can depend on the size
           * chosen by the wrapped content (the obtained [Placeable]), if the wrapped content was
           * measured. The size needs to be returned as part of a [MeasureResult], alongside the placement
           * logic of the [Placeable], which defines how the wrapped content should be positioned inside
           * the [LayoutModifier]. A convenient way to create the [MeasureResult] is to use the
           * [MeasureScope.layout] factory function.
           *
           * A [LayoutModifier] uses the same measurement and layout concepts and principles as a
           * [Layout], the only difference is that they apply to exactly one child. For a more detailed
           * explanation of measurement and layout, see [MeasurePolicy].
           */
          public fun MeasureScope.measure(measurable: Measurable, constraints: Constraints): MeasureResult

          /** The function used to calculate [IntrinsicMeasurable.minIntrinsicWidth]. */
          public fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int = MeasuringIntrinsics.minWidth(this@LayoutModifier, this, measurable, height)

          /** The lambda used to calculate [IntrinsicMeasurable.minIntrinsicHeight]. */
          public fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = MeasuringIntrinsics.minHeight(this@LayoutModifier, this, measurable, width)

          /** The function used to calculate [IntrinsicMeasurable.maxIntrinsicWidth]. */
          public fun IntrinsicMeasureScope.maxIntrinsicWidth(
  - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt
    startLine: 71
    endLine: 105
    sha256: 43b533bee819737938a1c991f32936c93b7556f197e309322be3a8aafdf03ae9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              measurable: IntrinsicMeasurable,
              height: Int,
          ): Int = MeasuringIntrinsics.maxWidth(this@LayoutModifier, this, measurable, height)

          /** The lambda used to calculate [IntrinsicMeasurable.maxIntrinsicHeight]. */
          public fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurable: IntrinsicMeasurable,
              width: Int,
          ): Int = MeasuringIntrinsics.maxHeight(this@LayoutModifier, this, measurable, width)
      }

      // TODO(popam): deduplicate from the copy-pasted logic of Layout.kt without making it public
      private object MeasuringIntrinsics {
          fun minWidth(
              modifier: LayoutModifier,
              intrinsicMeasureScope: IntrinsicMeasureScope,
              intrinsicMeasurable: IntrinsicMeasurable,
              h: Int,
          ): Int {
              val measurable =
                  DefaultIntrinsicMeasurable(
                      intrinsicMeasurable,
                      IntrinsicMinMax.Min,
                      IntrinsicWidthHeight.Width,
                  )
              val constraints = Constraints(maxHeight = h)
              val layoutResult =
                  with(modifier) {
                      IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                          .measure(measurable, constraints)
                  }
              return layoutResult.width
          }

          fun minHeight(
compose:
  id: live-androidx-ui-ui-ui-layout-layoutmodifier
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.layout
  sections:
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-1
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.layout.layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-106
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-141
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-176
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-211
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-246
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
        - androidx.compose.ui.layout.layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-281
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 281–293)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-36
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
        - androidx.compose.ui.layout.layout
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-layout-layoutmodifier-lines-71
      title: androidx.compose.ui.layout LayoutModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.layout.LayoutModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-layout-layoutmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.layout LayoutModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt

## androidx.compose.ui.layout LayoutModifier.kt source (lines 1–35)

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

package androidx.compose.ui.layout

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.GraphicsLayerScope
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize

/**
 * A [Modifier.Element] that changes how its wrapped content is measured and laid out. It has the
 * same measurement and layout functionality as the [androidx.compose.ui.layout.Layout] component,
 * while wrapping exactly one layout due to it being a modifier. In contrast, the
 * [androidx.compose.ui.layout.Layout] component is used to define the layout behavior of multiple
 * children.
 *

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 106–140)

        modifier: LayoutModifier,
        intrinsicMeasureScope: IntrinsicMeasureScope,
        intrinsicMeasurable: IntrinsicMeasurable,
        w: Int,
    ): Int {
        val measurable =
            DefaultIntrinsicMeasurable(
                intrinsicMeasurable,
                IntrinsicMinMax.Min,
                IntrinsicWidthHeight.Height,
            )
        val constraints = Constraints(maxWidth = w)
        val layoutResult =
            with(modifier) {
                IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                    .measure(measurable, constraints)
            }
        return layoutResult.height
    }

    fun maxWidth(
        modifier: LayoutModifier,
        intrinsicMeasureScope: IntrinsicMeasureScope,
        intrinsicMeasurable: IntrinsicMeasurable,
        h: Int,
    ): Int {
        val measurable =
            DefaultIntrinsicMeasurable(
                intrinsicMeasurable,
                IntrinsicMinMax.Max,
                IntrinsicWidthHeight.Width,
            )
        val constraints = Constraints(maxHeight = h)
        val layoutResult =
            with(modifier) {

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 141–175)

                IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                    .measure(measurable, constraints)
            }
        return layoutResult.width
    }

    fun maxHeight(
        modifier: LayoutModifier,
        intrinsicMeasureScope: IntrinsicMeasureScope,
        intrinsicMeasurable: IntrinsicMeasurable,
        w: Int,
    ): Int {
        val measurable =
            DefaultIntrinsicMeasurable(
                intrinsicMeasurable,
                IntrinsicMinMax.Max,
                IntrinsicWidthHeight.Height,
            )
        val constraints = Constraints(maxWidth = w)
        val layoutResult =
            with(modifier) {
                IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                    .measure(measurable, constraints)
            }
        return layoutResult.height
    }

    private class DefaultIntrinsicMeasurable(
        val measurable: IntrinsicMeasurable,
        val minMax: IntrinsicMinMax,
        val widthHeight: IntrinsicWidthHeight,
    ) : Measurable {
        override val parentData: Any?
            get() = measurable.parentData


Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 176–210)

        override fun measure(constraints: Constraints): Placeable {
            if (widthHeight == IntrinsicWidthHeight.Width) {
                val width =
                    if (minMax == IntrinsicMinMax.Max) {
                        measurable.maxIntrinsicWidth(constraints.maxHeight)
                    } else {
                        measurable.minIntrinsicWidth(constraints.maxHeight)
                    }
                val height =
                    if (constraints.hasBoundedHeight) constraints.maxHeight else LargeDimension
                return EmptyPlaceable(width, height)
            }
            val height =
                if (minMax == IntrinsicMinMax.Max) {
                    measurable.maxIntrinsicHeight(constraints.maxWidth)
                } else {
                    measurable.minIntrinsicHeight(constraints.maxWidth)
                }
            val width = if (constraints.hasBoundedWidth) constraints.maxWidth else LargeDimension
            return EmptyPlaceable(width, height)
        }

        override fun minIntrinsicWidth(height: Int): Int {
            return measurable.minIntrinsicWidth(height)
        }

        override fun maxIntrinsicWidth(height: Int): Int {
            return measurable.maxIntrinsicWidth(height)
        }

        override fun minIntrinsicHeight(width: Int): Int {
            return measurable.minIntrinsicHeight(width)
        }

        override fun maxIntrinsicHeight(width: Int): Int {

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 211–245)

            return measurable.maxIntrinsicHeight(width)
        }
    }

    private class EmptyPlaceable(width: Int, height: Int) : Placeable() {
        init {
            measuredSize = IntSize(width, height)
        }

        override fun get(alignmentLine: AlignmentLine): Int = AlignmentLine.Unspecified

        override fun placeAt(
            position: IntOffset,
            zIndex: Float,
            layerBlock: (GraphicsLayerScope.() -> Unit)?,
        ) {}
    }

    private enum class IntrinsicMinMax {
        Min,
        Max,
    }

    private enum class IntrinsicWidthHeight {
        Width,
        Height,
    }
}

/**
 * Creates a [LayoutModifier] that allows changing how the wrapped element is measured and laid out.
 *
 * This is a convenience API of creating a custom [LayoutModifier] modifier, without having to
 * create a class or an object that implements the [LayoutModifier] interface. The intrinsic
 * measurements follow the default logic provided by the [LayoutModifier].

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 246–280)

 *
 * Example usage:
 *
 * @sample androidx.compose.ui.samples.ConvenienceLayoutModifierSample
 * @see androidx.compose.ui.layout.LayoutModifier
 */
public fun Modifier.layout(
    measure: MeasureScope.(Measurable, Constraints) -> MeasureResult
): Modifier = this then LayoutElement(measure)

private class LayoutElement(val measure: MeasureScope.(Measurable, Constraints) -> MeasureResult) :
    ModifierNodeElement<LayoutModifierImpl>() {
    override fun create() = LayoutModifierImpl(measure)

    override fun update(node: LayoutModifierImpl) {
        node.measureBlock = measure
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "layout"
        properties["measure"] = measure
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is LayoutElement) return false

        if (measure !== other.measure) return false

        return true
    }

    override fun hashCode(): Int {
        return measure.hashCode()
    }

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 281–293)

}

internal class LayoutModifierImpl(
    var measureBlock: MeasureScope.(Measurable, Constraints) -> MeasureResult
) : LayoutModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(measurable: Measurable, constraints: Constraints) =
        measureBlock(measurable, constraints)

    override fun toString(): String {
        return "LayoutModifierImpl(measureBlock=$measureBlock)"
    }
}


Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 36–70)

 * @sample androidx.compose.ui.samples.LayoutModifierSample
 * @see androidx.compose.ui.layout.Layout
 */
@JvmDefaultWithCompatibility
public interface LayoutModifier : Modifier.Element {
    /**
     * The function used to measure the modifier. The [measurable] corresponds to the wrapped
     * content, and it can be measured with the desired constraints according to the logic of the
     * [LayoutModifier]. The modifier needs to choose its own size, which can depend on the size
     * chosen by the wrapped content (the obtained [Placeable]), if the wrapped content was
     * measured. The size needs to be returned as part of a [MeasureResult], alongside the placement
     * logic of the [Placeable], which defines how the wrapped content should be positioned inside
     * the [LayoutModifier]. A convenient way to create the [MeasureResult] is to use the
     * [MeasureScope.layout] factory function.
     *
     * A [LayoutModifier] uses the same measurement and layout concepts and principles as a
     * [Layout], the only difference is that they apply to exactly one child. For a more detailed
     * explanation of measurement and layout, see [MeasurePolicy].
     */
    public fun MeasureScope.measure(measurable: Measurable, constraints: Constraints): MeasureResult

    /** The function used to calculate [IntrinsicMeasurable.minIntrinsicWidth]. */
    public fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int = MeasuringIntrinsics.minWidth(this@LayoutModifier, this, measurable, height)

    /** The lambda used to calculate [IntrinsicMeasurable.minIntrinsicHeight]. */
    public fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = MeasuringIntrinsics.minHeight(this@LayoutModifier, this, measurable, width)

    /** The function used to calculate [IntrinsicMeasurable.maxIntrinsicWidth]. */
    public fun IntrinsicMeasureScope.maxIntrinsicWidth(

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)

## androidx.compose.ui.layout LayoutModifier.kt source (lines 71–105)

        measurable: IntrinsicMeasurable,
        height: Int,
    ): Int = MeasuringIntrinsics.maxWidth(this@LayoutModifier, this, measurable, height)

    /** The lambda used to calculate [IntrinsicMeasurable.maxIntrinsicHeight]. */
    public fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurable: IntrinsicMeasurable,
        width: Int,
    ): Int = MeasuringIntrinsics.maxHeight(this@LayoutModifier, this, measurable, width)
}

// TODO(popam): deduplicate from the copy-pasted logic of Layout.kt without making it public
private object MeasuringIntrinsics {
    fun minWidth(
        modifier: LayoutModifier,
        intrinsicMeasureScope: IntrinsicMeasureScope,
        intrinsicMeasurable: IntrinsicMeasurable,
        h: Int,
    ): Int {
        val measurable =
            DefaultIntrinsicMeasurable(
                intrinsicMeasurable,
                IntrinsicMinMax.Min,
                IntrinsicWidthHeight.Width,
            )
        val constraints = Constraints(maxHeight = h)
        val layoutResult =
            with(modifier) {
                IntrinsicsMeasureScope(intrinsicMeasureScope, intrinsicMeasureScope.layoutDirection)
                    .measure(measurable, constraints)
            }
        return layoutResult.width
    }

    fun minHeight(

Sources: [live-androidx-ui-ui-ui-layout-layoutmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/layout/LayoutModifier.kt)
