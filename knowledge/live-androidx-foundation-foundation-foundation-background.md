---
type: reference
title: androidx.compose.foundation Background.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-background-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 1
    endLine: 35
    sha256: 15d0b37fbc476e60f74bbe0034a673c87ad3084218b3d4edd5ac38f19356f471
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

      import androidx.annotation.FloatRange
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.graphics.Brush
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.ColorProducer
      import androidx.compose.ui.graphics.Outline
      import androidx.compose.ui.graphics.RectangleShape
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.graphics.drawOutline
      import androidx.compose.ui.graphics.drawscope.ContentDrawScope
      import androidx.compose.ui.graphics.isSpecified
      import androidx.compose.ui.node.DrawModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.ObserverModifierNode
  - id: live-androidx-foundation-foundation-foundation-background-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 106
    endLine: 140
    sha256: da598e42a26fb3c3e52d37d82a262827df66554794062f2b98539eefcfc36f8e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private val alpha: Float,
          private val shape: Shape,
          private val inspectorInfo: InspectorInfo.() -> Unit,
      ) : ModifierNodeElement<BackgroundNode>() {
          override fun create(): BackgroundNode {
              return BackgroundNode(color, brush, alpha, shape)
          }

          override fun update(node: BackgroundNode) {
              node.color = color
              node.brush = brush
              node.alpha = alpha
              if (node.shape != shape) {
                  node.shape = shape
                  node.invalidateSemantics()
              }
              node.invalidateDraw()
          }

          override fun InspectorInfo.inspectableProperties() {
              inspectorInfo()
          }

          override fun hashCode(): Int {
              var result = color.hashCode()
              result = 31 * result + (brush?.hashCode() ?: 0)
              result = 31 * result + alpha.hashCode()
              result = 31 * result + shape.hashCode()
              return result
          }

          override fun equals(other: Any?): Boolean {
              val otherModifier = other as? BackgroundElement ?: return false
              return color == otherModifier.color &&
                  brush == otherModifier.brush &&
  - id: live-androidx-foundation-foundation-foundation-background-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 141
    endLine: 175
    sha256: 9c9a9efc207054fde48f4de22efcf1f160e6ee539a49614da3e5c9bb21688b58
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  alpha == otherModifier.alpha &&
                  shape == otherModifier.shape
          }
      }

      private class BackgroundNode(
          var color: Color,
          var brush: Brush?,
          var alpha: Float,
          var shape: Shape,
      ) : DrawModifierNode, Modifier.Node(), ObserverModifierNode, SemanticsModifierNode {

          override val shouldAutoInvalidate = false
          override val isImportantForBounds = false

          // Naively cache outline calculation if input parameters are the same, we manually observe
          // reads inside shape#createOutline separately
          private var lastSize: Size = Size.Unspecified
          private var lastLayoutDirection: LayoutDirection? = null
          private var lastOutline: Outline? = null
          private var lastShape: Shape? = null
          private var tmpOutline: Outline? = null

          override fun ContentDrawScope.draw() {
              if (shape === RectangleShape) {
                  // shortcut to avoid Outline calculation and allocation
                  drawRect()
              } else {
                  drawOutline()
              }
              drawContent()
          }

          override fun onObservedReadsChanged() {
              // Reset cached properties
  - id: live-androidx-foundation-foundation-foundation-background-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 176
    endLine: 210
    sha256: a7dd7af33087d152ab3aadb16d9c428a3e8c7e389a66a0772cfd4189f285dc02
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lastSize = Size.Unspecified
              lastLayoutDirection = null
              lastOutline = null
              lastShape = null
              // Invalidate draw so we build the cache again - this is needed because observeReads within
              // the draw scope obscures the state reads from the draw scope's observer
              invalidateDraw()
          }

          private fun ContentDrawScope.drawRect() {
              if (color != Color.Unspecified) drawRect(color = color)
              brush?.let { drawRect(brush = it, alpha = alpha) }
          }

          private fun ContentDrawScope.drawOutline() {
              val outline = getOutline()
              if (color != Color.Unspecified) drawOutline(outline, color = color)
              brush?.let { drawOutline(outline, brush = it, alpha = alpha) }
          }

          private fun ContentDrawScope.getOutline(): Outline {
              val outline: Outline?
              if (size == lastSize && layoutDirection == lastLayoutDirection && lastShape == shape) {
                  outline = lastOutline!!
              } else {
                  // Manually observe reads so we can directly invalidate the outline when it changes
                  // Use tmpOutline to avoid creating an object reference to local var outline
                  observeReads { tmpOutline = shape.createOutline(size, layoutDirection, this) }
                  outline = tmpOutline
                  tmpOutline = null
              }
              lastOutline = outline
              lastSize = size
              lastLayoutDirection = layoutDirection
              lastShape = shape
  - id: live-androidx-foundation-foundation-foundation-background-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 211
    endLine: 237
    sha256: 9d2ece334d85c5864f362eb983ec18195bcb03f8f973c393b3e102eb7179ac14
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              return outline!!
          }

          override fun SemanticsPropertyReceiver.applySemantics() {
              this.shape = this@BackgroundNode.shape
              this.backgroundColor = ColorProducer {
                  val bgColor = determineBackgroundColor()
                  if (bgColor.isSpecified) {
                      bgColor.copy(alpha = bgColor.alpha * this@BackgroundNode.alpha)
                  } else {
                      bgColor
                  }
              }
          }

          private fun determineBackgroundColor(): Color {
              (brush as? SolidColor)?.let {
                  return it.value
              }

              // The brush could be a gradient or a shader; no way to provide a singular color.
              if (brush != null) return Color.Unspecified

              return color
          }
      }
  - id: live-androidx-foundation-foundation-foundation-background-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 36
    endLine: 70
    sha256: 38b6631b7b763e2c39b1fcd31bc14c8193ddecace91bcfaa366e42b4b43fe811
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.node.SemanticsModifierNode
      import androidx.compose.ui.node.invalidateDraw
      import androidx.compose.ui.node.invalidateSemantics
      import androidx.compose.ui.node.observeReads
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.semantics.SemanticsPropertyReceiver
      import androidx.compose.ui.semantics.backgroundColor
      import androidx.compose.ui.semantics.shape
      import androidx.compose.ui.unit.LayoutDirection

      /**
       * Draws [shape] with a solid [color] behind the content.
       *
       * @sample androidx.compose.foundation.samples.DrawBackgroundColor
       * @param color color to paint background with
       * @param shape desired shape of the background
       */
      @Stable
      public fun Modifier.background(color: Color, shape: Shape = RectangleShape): Modifier {
          val alpha = 1.0f // for solid colors
          return this.then(
              BackgroundElement(
                  color = color,
                  shape = shape,
                  alpha = alpha,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "background"
                          value = color
                          properties["color"] = color
                          properties["shape"] = shape
                      },
              )
          )
  - id: live-androidx-foundation-foundation-foundation-background-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt
    startLine: 71
    endLine: 105
    sha256: 890cd11cee8e26c4b30174b1d13b8def51bbbbbfbed77afac760dc6a08d4b22a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * Draws [shape] with [brush] behind the content.
       *
       * @sample androidx.compose.foundation.samples.DrawBackgroundShapedBrush
       * @param brush brush to paint background with
       * @param shape desired shape of the background
       * @param alpha Opacity to be applied to the [brush], with `0` being completely transparent and `1`
       *   being completely opaque. The value must be between `0` and `1`.
       */
      @Stable
      public fun Modifier.background(
          brush: Brush,
          shape: Shape = RectangleShape,
          @FloatRange(from = 0.0, to = 1.0) alpha: Float = 1.0f,
      ): Modifier =
          this.then(
              BackgroundElement(
                  brush = brush,
                  alpha = alpha,
                  shape = shape,
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "background"
                          properties["alpha"] = alpha
                          properties["brush"] = brush
                          properties["shape"] = shape
                      },
              )
          )

      private class BackgroundElement(
          private val color: Color = Color.Unspecified,
          private val brush: Brush? = null,
compose:
  id: live-androidx-foundation-foundation-foundation-background
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-androidx-foundation-foundation-foundation-background-lines-1
      title: androidx.compose.foundation Background.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-106
      title: androidx.compose.foundation Background.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-141
      title: androidx.compose.foundation Background.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-176
      title: androidx.compose.foundation Background.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-211
      title: androidx.compose.foundation Background.kt source (lines 211–237)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-36
      title: androidx.compose.foundation Background.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.background
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-background-lines-71
      title: androidx.compose.foundation Background.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.background
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-background-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation Background.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt

## androidx.compose.foundation Background.kt source (lines 1–35)

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

import androidx.annotation.FloatRange
import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorProducer
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.drawOutline
import androidx.compose.ui.graphics.drawscope.ContentDrawScope
import androidx.compose.ui.graphics.isSpecified
import androidx.compose.ui.node.DrawModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.ObserverModifierNode

Sources: [live-androidx-foundation-foundation-foundation-background-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 106–140)

    private val alpha: Float,
    private val shape: Shape,
    private val inspectorInfo: InspectorInfo.() -> Unit,
) : ModifierNodeElement<BackgroundNode>() {
    override fun create(): BackgroundNode {
        return BackgroundNode(color, brush, alpha, shape)
    }

    override fun update(node: BackgroundNode) {
        node.color = color
        node.brush = brush
        node.alpha = alpha
        if (node.shape != shape) {
            node.shape = shape
            node.invalidateSemantics()
        }
        node.invalidateDraw()
    }

    override fun InspectorInfo.inspectableProperties() {
        inspectorInfo()
    }

    override fun hashCode(): Int {
        var result = color.hashCode()
        result = 31 * result + (brush?.hashCode() ?: 0)
        result = 31 * result + alpha.hashCode()
        result = 31 * result + shape.hashCode()
        return result
    }

    override fun equals(other: Any?): Boolean {
        val otherModifier = other as? BackgroundElement ?: return false
        return color == otherModifier.color &&
            brush == otherModifier.brush &&

Sources: [live-androidx-foundation-foundation-foundation-background-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 141–175)

            alpha == otherModifier.alpha &&
            shape == otherModifier.shape
    }
}

private class BackgroundNode(
    var color: Color,
    var brush: Brush?,
    var alpha: Float,
    var shape: Shape,
) : DrawModifierNode, Modifier.Node(), ObserverModifierNode, SemanticsModifierNode {

    override val shouldAutoInvalidate = false
    override val isImportantForBounds = false

    // Naively cache outline calculation if input parameters are the same, we manually observe
    // reads inside shape#createOutline separately
    private var lastSize: Size = Size.Unspecified
    private var lastLayoutDirection: LayoutDirection? = null
    private var lastOutline: Outline? = null
    private var lastShape: Shape? = null
    private var tmpOutline: Outline? = null

    override fun ContentDrawScope.draw() {
        if (shape === RectangleShape) {
            // shortcut to avoid Outline calculation and allocation
            drawRect()
        } else {
            drawOutline()
        }
        drawContent()
    }

    override fun onObservedReadsChanged() {
        // Reset cached properties

Sources: [live-androidx-foundation-foundation-foundation-background-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 176–210)

        lastSize = Size.Unspecified
        lastLayoutDirection = null
        lastOutline = null
        lastShape = null
        // Invalidate draw so we build the cache again - this is needed because observeReads within
        // the draw scope obscures the state reads from the draw scope's observer
        invalidateDraw()
    }

    private fun ContentDrawScope.drawRect() {
        if (color != Color.Unspecified) drawRect(color = color)
        brush?.let { drawRect(brush = it, alpha = alpha) }
    }

    private fun ContentDrawScope.drawOutline() {
        val outline = getOutline()
        if (color != Color.Unspecified) drawOutline(outline, color = color)
        brush?.let { drawOutline(outline, brush = it, alpha = alpha) }
    }

    private fun ContentDrawScope.getOutline(): Outline {
        val outline: Outline?
        if (size == lastSize && layoutDirection == lastLayoutDirection && lastShape == shape) {
            outline = lastOutline!!
        } else {
            // Manually observe reads so we can directly invalidate the outline when it changes
            // Use tmpOutline to avoid creating an object reference to local var outline
            observeReads { tmpOutline = shape.createOutline(size, layoutDirection, this) }
            outline = tmpOutline
            tmpOutline = null
        }
        lastOutline = outline
        lastSize = size
        lastLayoutDirection = layoutDirection
        lastShape = shape

Sources: [live-androidx-foundation-foundation-foundation-background-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 211–237)

        return outline!!
    }

    override fun SemanticsPropertyReceiver.applySemantics() {
        this.shape = this@BackgroundNode.shape
        this.backgroundColor = ColorProducer {
            val bgColor = determineBackgroundColor()
            if (bgColor.isSpecified) {
                bgColor.copy(alpha = bgColor.alpha * this@BackgroundNode.alpha)
            } else {
                bgColor
            }
        }
    }

    private fun determineBackgroundColor(): Color {
        (brush as? SolidColor)?.let {
            return it.value
        }

        // The brush could be a gradient or a shader; no way to provide a singular color.
        if (brush != null) return Color.Unspecified

        return color
    }
}


Sources: [live-androidx-foundation-foundation-foundation-background-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 36–70)

import androidx.compose.ui.node.SemanticsModifierNode
import androidx.compose.ui.node.invalidateDraw
import androidx.compose.ui.node.invalidateSemantics
import androidx.compose.ui.node.observeReads
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.semantics.SemanticsPropertyReceiver
import androidx.compose.ui.semantics.backgroundColor
import androidx.compose.ui.semantics.shape
import androidx.compose.ui.unit.LayoutDirection

/**
 * Draws [shape] with a solid [color] behind the content.
 *
 * @sample androidx.compose.foundation.samples.DrawBackgroundColor
 * @param color color to paint background with
 * @param shape desired shape of the background
 */
@Stable
public fun Modifier.background(color: Color, shape: Shape = RectangleShape): Modifier {
    val alpha = 1.0f // for solid colors
    return this.then(
        BackgroundElement(
            color = color,
            shape = shape,
            alpha = alpha,
            inspectorInfo =
                debugInspectorInfo {
                    name = "background"
                    value = color
                    properties["color"] = color
                    properties["shape"] = shape
                },
        )
    )

Sources: [live-androidx-foundation-foundation-foundation-background-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)

## androidx.compose.foundation Background.kt source (lines 71–105)

}

/**
 * Draws [shape] with [brush] behind the content.
 *
 * @sample androidx.compose.foundation.samples.DrawBackgroundShapedBrush
 * @param brush brush to paint background with
 * @param shape desired shape of the background
 * @param alpha Opacity to be applied to the [brush], with `0` being completely transparent and `1`
 *   being completely opaque. The value must be between `0` and `1`.
 */
@Stable
public fun Modifier.background(
    brush: Brush,
    shape: Shape = RectangleShape,
    @FloatRange(from = 0.0, to = 1.0) alpha: Float = 1.0f,
): Modifier =
    this.then(
        BackgroundElement(
            brush = brush,
            alpha = alpha,
            shape = shape,
            inspectorInfo =
                debugInspectorInfo {
                    name = "background"
                    properties["alpha"] = alpha
                    properties["brush"] = brush
                    properties["shape"] = shape
                },
        )
    )

private class BackgroundElement(
    private val color: Color = Color.Unspecified,
    private val brush: Brush? = null,

Sources: [live-androidx-foundation-foundation-foundation-background-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Background.kt)
