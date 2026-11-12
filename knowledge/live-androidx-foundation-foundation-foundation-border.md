---
type: reference
title: androidx.compose.foundation Border.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-border-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 1
    endLine: 35
    sha256: f32e977f0d304527ff36382ebefcd72ec7a348fee2aa7d0630d3eb9b25d9e3e0
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

      package androidx.compose.foundation

      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.CacheDrawModifierNode
      import androidx.compose.ui.draw.CacheDrawScope
      import androidx.compose.ui.draw.DrawResult
      import androidx.compose.ui.geometry.CornerRadius
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.RoundRect
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.geometry.isSimple
      import androidx.compose.ui.graphics.BlendMode
      import androidx.compose.ui.graphics.Brush
      import androidx.compose.ui.graphics.ClipOp
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.ColorFilter
      import androidx.compose.ui.graphics.ImageBitmap
      import androidx.compose.ui.graphics.ImageBitmapConfig
  - id: live-androidx-foundation-foundation-foundation-border-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 106
    endLine: 140
    sha256: 176dc02fbfdadc1a288124faf4989388e3eab5a41db3feb9509f08158cb4a1c5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (ComposeFoundationFlags.isNewBorderImplementationEnabled)
                  BorderModifierNodeElement(width, brush, shape)
              else OldBorderModifierNodeElement(width, brush, shape)

      internal class BorderModifierNodeElement(val width: Dp, val brush: Brush, val shape: Shape) :
          ModifierNodeElement<BorderModifierNode>() {
          override fun create() = BorderModifierNode(width, brush, shape)

          override fun update(node: BorderModifierNode) {
              node.width = width
              node.brush = brush
              node.shape = shape
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "border"
              properties["width"] = width
              if (brush is SolidColor) {
                  properties["color"] = brush.value
                  value = brush.value
              } else {
                  properties["brush"] = brush
              }
              properties["shape"] = shape
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is BorderModifierNodeElement) return false

              if (width != other.width) return false
              if (brush != other.brush) return false
              if (shape != other.shape) return false

              return true
  - id: live-androidx-foundation-foundation-foundation-border-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 141
    endLine: 175
    sha256: a99517e68c19916b9d6288ee071ab17e0fb30ef1e8379824d6e6e2421ae5a486
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          override fun hashCode(): Int {
              var result = width.hashCode()
              result = 31 * result + brush.hashCode()
              result = 31 * result + shape.hashCode()
              return result
          }
      }

      internal class BorderModifierNode(
          widthParameter: Dp,
          brushParameter: Brush,
          shapeParameter: Shape,
      ) : Modifier.Node(), DrawModifierNode, SemanticsModifierNode {

          override val shouldAutoInvalidate: Boolean = false
          override val isImportantForBounds = false

          private var borderLayer: GraphicsLayer? = null
          private val borderRenderer = BorderRenderer {
              borderLayer ?: requireGraphicsContext().createGraphicsLayer().also { borderLayer = it }
          }

          var width = widthParameter
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateDraw()
                  }
              }

          var brush = brushParameter
              set(value) {
                  if (field != value) {
  - id: live-androidx-foundation-foundation-foundation-border-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 176
    endLine: 210
    sha256: d21fe33b070cf8394d1e63afd9e055a2a358f052bec69dd2f272d39491dbdf04
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      field = value
                      invalidateDraw()
                  }
              }

          var shape = shapeParameter
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateDraw()
                      invalidateSemantics()
                  }
              }

          override fun ContentDrawScope.draw() {
              drawContent()
              val outline = shape.createOutline(size, layoutDirection, this)
              borderRenderer.drawBorder(
                  drawScope = this,
                  width = width,
                  brush = brush,
                  outline = outline,
              )
          }

          override fun SemanticsPropertyReceiver.applySemantics() {
              shape = this@BorderModifierNode.shape
          }

          override fun onDetach() {
              borderLayer?.let {
                  requireGraphicsContext().releaseGraphicsLayer(it)
                  borderLayer = null
              }
          }
  - id: live-androidx-foundation-foundation-foundation-border-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 211
    endLine: 245
    sha256: 05c5d467f752f8aa18ddc77aea9f755ab8aff46e08073d9424ad37064bcc08b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      }

      internal class OldBorderModifierNodeElement(val width: Dp, val brush: Brush, val shape: Shape) :
          ModifierNodeElement<OldBorderModifierNode>() {
          override fun create() = OldBorderModifierNode(width, brush, shape)

          override fun update(node: OldBorderModifierNode) {
              node.width = width
              node.brush = brush
              node.shape = shape
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "border"
              properties["width"] = width
              if (brush is SolidColor) {
                  properties["color"] = brush.value
                  value = brush.value
              } else {
                  properties["brush"] = brush
              }
              properties["shape"] = shape
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is OldBorderModifierNodeElement) return false

              if (width != other.width) return false
              if (brush != other.brush) return false
              if (shape != other.shape) return false

              return true
          }
  - id: live-androidx-foundation-foundation-foundation-border-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 246
    endLine: 280
    sha256: 2328e38bbf5fcd8ef629e06be984236c7a89f93651528346b5027aa21ef1bd07
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun hashCode(): Int {
              var result = width.hashCode()
              result = 31 * result + brush.hashCode()
              result = 31 * result + shape.hashCode()
              return result
          }
      }

      internal class OldBorderModifierNode(
          widthParameter: Dp,
          brushParameter: Brush,
          shapeParameter: Shape,
      ) : DelegatingNode(), SemanticsModifierNode {

          override val shouldAutoInvalidate: Boolean = false
          override val isImportantForBounds = false

          // BorderCache object that is lazily allocated depending on the type of shape
          // This object is only used for generic shapes and rounded rectangles with different corner
          // radius sizes.
          // Note: Extension functions that use BorderCache are part of this class.
          private var borderCache: BorderCache? = null

          var width = widthParameter
              set(value) {
                  if (field != value) {
                      field = value
                      drawWithCacheModifierNode.invalidateDrawCache()
                  }
              }

          var brush = brushParameter
              set(value) {
                  if (field != value) {
                      field = value
  - id: live-androidx-foundation-foundation-foundation-border-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 281
    endLine: 315
    sha256: 6664c967b0631648e1f394762ffa36530c4219e3dbe07e689cbb19cb22a69df4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      drawWithCacheModifierNode.invalidateDrawCache()
                  }
              }

          var shape = shapeParameter
              set(value) {
                  if (field != value) {
                      field = value
                      drawWithCacheModifierNode.invalidateDrawCache()
                      invalidateSemantics()
                  }
              }

          private val drawWithCacheModifierNode =
              delegate(
                  CacheDrawModifierNode {
                      val hasValidBorderParams = width.toPx() >= 0f && size.minDimension > 0f
                      if (!hasValidBorderParams) {
                          drawContentWithoutBorder()
                      } else {
                          val strokeWidthPx =
                              min(
                                  if (width == Dp.Hairline) 1f else ceil(width.toPx()),
                                  ceil(size.minDimension / 2),
                              )
                          val halfStroke = strokeWidthPx / 2
                          val topLeft = Offset(halfStroke, halfStroke)
                          val borderSize = Size(size.width - strokeWidthPx, size.height - strokeWidthPx)
                          // The stroke is larger than the drawing area so just draw a full shape instead
                          val fillArea = (strokeWidthPx * 2) > size.minDimension
                          when (val outline = shape.createOutline(size, layoutDirection, this)) {
                              is Outline.Generic ->
                                  drawGenericBorder(brush, outline, fillArea, strokeWidthPx)
                              is Outline.Rounded ->
                                  drawRoundRectBorder(
  - id: live-androidx-foundation-foundation-foundation-border-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 316
    endLine: 350
    sha256: ab1fd68cdba06d2739752380ae97915f7ebd886ea73ca6ea39ebb08190a8ca37
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      brush,
                                      outline,
                                      topLeft,
                                      borderSize,
                                      fillArea,
                                      strokeWidthPx,
                                  )
                              is Outline.Rectangle ->
                                  drawRectBorder(brush, topLeft, borderSize, fillArea, strokeWidthPx)
                          }
                      }
                  }
              )

          /**
           * Border implementation for generic paths. Note it is possible to be given paths that do not
           * make sense in the context of a border (ex. a figure 8 path or a non-enclosed shape) We do not
           * handle that here as we expect developers to give us enclosed, non-overlapping paths.
           */
          private fun CacheDrawScope.drawGenericBorder(
              brush: Brush,
              outline: Outline.Generic,
              fillArea: Boolean,
              strokeWidth: Float,
          ): DrawResult =
              if (fillArea) {
                  onDrawWithContent {
                      drawContent()
                      drawPath(outline.path, brush = brush)
                  }
              } else {
                  // Optimization, if we are only drawing a solid color border, we only need an alpha8
                  // mask as we can draw the mask with a tint.
                  // Otherwise we need to allocate a full ImageBitmap and draw it normally
                  val config: ImageBitmapConfig
  - id: live-androidx-foundation-foundation-foundation-border-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 351
    endLine: 385
    sha256: a45ba05c844f9ccd5139f6c909e24ff0ae8579226c4834a8cfc8b08c273b1ad1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val colorFilter: ColorFilter?
                  if (brush is SolidColor) {
                      config = ImageBitmapConfig.Alpha8
                      // The brush is drawn into the mask with the corresponding color including the
                      // alpha channel so when we tint we should not apply the alpha as it would end up
                      // modulating it twice
                      colorFilter = ColorFilter.tint(brush.value.copy(alpha = 1f))
                  } else {
                      config = ImageBitmapConfig.Argb8888
                      colorFilter = null
                  }

                  val pathBounds = outline.path.getBounds()
                  // Create a mask path that includes a rectangle with the original path cut out of it.
                  // Note: borderCache is part of the class that defines this extension function.
                  if (borderCache == null) {
                      borderCache = BorderCache()
                  }
                  val maskPath =
                      borderCache!!.obtainPath().apply {
                          reset()
                          addRect(pathBounds)
                          op(this, outline.path, PathOperation.Difference)
                      }

                  val cacheImageBitmap: ImageBitmap
                  val pathBoundsSize =
                      IntSize(ceil(pathBounds.width).toInt(), ceil(pathBounds.height).toInt())
                  with(borderCache!!) {
                      // Draw into offscreen bitmap with the size of the path
                      // We need to draw into this intermediate bitmap to act as a layer
                      // and make sure that the clearing logic does not generate underdraw
                      // into the target we are rendering into
                      cacheImageBitmap =
                          drawBorderCache(pathBoundsSize, config) {
  - id: live-androidx-foundation-foundation-foundation-border-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 36
    endLine: 70
    sha256: fd6c9e00ab1ca511d3181049a4873b594b398ce88d433719007353abf4c6e8cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.graphics.Outline
      import androidx.compose.ui.graphics.Path
      import androidx.compose.ui.graphics.PathOperation
      import androidx.compose.ui.graphics.RectangleShape
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.graphics.drawscope.CanvasDrawScope
      import androidx.compose.ui.graphics.drawscope.ContentDrawScope
      import androidx.compose.ui.graphics.drawscope.DrawScope
      import androidx.compose.ui.graphics.drawscope.Fill
      import androidx.compose.ui.graphics.drawscope.Stroke
      import androidx.compose.ui.graphics.drawscope.clipRect
      import androidx.compose.ui.graphics.drawscope.scale
      import androidx.compose.ui.graphics.drawscope.translate
      import androidx.compose.ui.graphics.layer.GraphicsLayer
      import androidx.compose.ui.node.DelegatingNode
      import androidx.compose.ui.node.DrawModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.SemanticsModifierNode
      import androidx.compose.ui.node.invalidateDraw
      import androidx.compose.ui.node.invalidateSemantics
      import androidx.compose.ui.node.requireGraphicsContext
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.semantics.SemanticsPropertyReceiver
      import androidx.compose.ui.semantics.shape
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.toSize
      import kotlin.math.ceil
      import kotlin.math.max
      import kotlin.math.min

      /**
       * Modify element to add border with appearance specified with a [border] and a [shape] and clip it.
       *
  - id: live-androidx-foundation-foundation-foundation-border-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 386
    endLine: 420
    sha256: 351380fed47a9f8572a3eaa22b5e107d63d0d1f6fa1b53e780e6186337b9f309
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              // Paths can have offsets, so translate to keep the drawn path
                              // within the bounds of the mask bitmap
                              translate(-pathBounds.left, -pathBounds.top) {
                                  // Draw the path with a stroke width twice the provided value.
                                  // Because strokes are centered, this will draw both and inner and
                                  // outer stroke with the desired stroke width
                                  drawPath(
                                      path = outline.path,
                                      brush = brush,
                                      style = Stroke(strokeWidth * 2),
                                  )

                                  // Scale the canvas slightly to cover the background that may be visible
                                  // after clearing the outer stroke
                                  scale((size.width + 1) / size.width, (size.height + 1) / size.height) {
                                      // Remove the outer stroke by clearing the inverted mask path
                                      drawPath(
                                          path = maskPath,
                                          brush = brush,
                                          blendMode = BlendMode.Clear,
                                      )
                                  }
                              }
                          }
                  }

                  onDrawWithContent {
                      drawContent()
                      translate(pathBounds.left, pathBounds.top) {
                          drawImage(cacheImageBitmap, srcSize = pathBoundsSize, colorFilter = colorFilter)
                      }
                  }
              }

          /** Border implementation for simple rounded rects and those with different corner radii */
  - id: live-androidx-foundation-foundation-foundation-border-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 421
    endLine: 455
    sha256: 9106419833173a783c5cc11da036683d9d4f2ed0faba454be35f1bcbc1990993
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private fun CacheDrawScope.drawRoundRectBorder(
              brush: Brush,
              outline: Outline.Rounded,
              topLeft: Offset,
              borderSize: Size,
              fillArea: Boolean,
              strokeWidth: Float,
          ): DrawResult {
              return if (outline.roundRect.isSimple) {
                  val cornerRadius = outline.roundRect.topLeftCornerRadius
                  val halfStroke = strokeWidth / 2
                  val borderStroke = Stroke(strokeWidth)
                  onDrawWithContent {
                      drawContent()
                      when {
                          fillArea -> {
                              // If the drawing area is smaller than the stroke being drawn
                              // drawn all around it just draw a filled in rounded rect
                              drawRoundRect(brush, cornerRadius = cornerRadius)
                          }
                          cornerRadius.x < halfStroke -> {
                              // If the corner radius is smaller than half of the stroke width
                              // then the interior curvature of the stroke will be a sharp edge
                              // In this case just draw a normal filled in rounded rect with the
                              // desired corner radius but clipping out the interior rectangle
                              clipRect(
                                  strokeWidth,
                                  strokeWidth,
                                  size.width - strokeWidth,
                                  size.height - strokeWidth,
                                  clipOp = ClipOp.Difference,
                              ) {
                                  drawRoundRect(brush, cornerRadius = cornerRadius)
                              }
                          }
  - id: live-androidx-foundation-foundation-foundation-border-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 456
    endLine: 490
    sha256: 5ed36f7589e0b4403ee109cafa26631c86ca6baf8b8c30be1e6845232876d20d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                          else -> {
                              // Otherwise draw a stroked rounded rect with the corner radius
                              // shrunk by half of the stroke width. This will ensure that the
                              // outer curvature of the rounded rectangle will have the desired
                              // corner radius.
                              drawRoundRect(
                                  brush = brush,
                                  topLeft = topLeft,
                                  size = borderSize,
                                  cornerRadius = cornerRadius.shrink(halfStroke),
                                  style = borderStroke,
                              )
                          }
                      }
                  }
              } else {
                  // Note: borderCache is part of the class that defines this extension function.
                  if (borderCache == null) {
                      borderCache = BorderCache()
                  }
                  val path = borderCache!!.obtainPath()
                  val roundedRectPath =
                      createRoundRectPath(path, outline.roundRect, strokeWidth, fillArea)
                  onDrawWithContent {
                      drawContent()
                      drawPath(roundedRectPath, brush = brush)
                  }
              }
          }

          override fun SemanticsPropertyReceiver.applySemantics() {
              shape = this@OldBorderModifierNode.shape
          }
      }
  - id: live-androidx-foundation-foundation-foundation-border-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 491
    endLine: 525
    sha256: eccaaabf200b8e8f036697d46332d83f8bdec67e72bb80c24324fc18aaf3f5f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * Helper object that handles lazily allocating and re-using objects to render the border into an
       * offscreen ImageBitmap
       */
      private data class BorderCache(
          private var imageBitmap: ImageBitmap? = null,
          private var canvas: androidx.compose.ui.graphics.Canvas? = null,
          private var canvasDrawScope: CanvasDrawScope? = null,
          private var borderPath: Path? = null,
      ) {
          inline fun CacheDrawScope.drawBorderCache(
              borderSize: IntSize,
              config: ImageBitmapConfig,
              block: DrawScope.() -> Unit,
          ): ImageBitmap {

              var targetImageBitmap = imageBitmap
              var targetCanvas = canvas
              // If we previously had allocated a full Argb888 ImageBitmap but are only requiring
              // an alpha mask, just re-use the same ImageBitmap instead of allocating a new one
              val compatibleConfig =
                  targetImageBitmap?.config == ImageBitmapConfig.Argb8888 ||
                      config == targetImageBitmap?.config
              if (
                  targetImageBitmap == null ||
                      targetCanvas == null ||
                      size.width > targetImageBitmap.width ||
                      size.height > targetImageBitmap.height ||
                      !compatibleConfig
              ) {
                  targetImageBitmap =
                      ImageBitmap(borderSize.width, borderSize.height, config = config).also {
                          imageBitmap = it
                      }
                  targetCanvas =
  - id: live-androidx-foundation-foundation-foundation-border-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 526
    endLine: 560
    sha256: 3d1d4247e125153f5ecafcbf985176fdf50388553aa4f4934ba9e3b371a2a403
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      androidx.compose.ui.graphics.Canvas(targetImageBitmap).also { canvas = it }
              }

              val targetDrawScope = canvasDrawScope ?: CanvasDrawScope().also { canvasDrawScope = it }
              val drawSize = borderSize.toSize()
              targetDrawScope.draw(this, layoutDirection, targetCanvas, drawSize) {
                  // Clear the previously rendered portion within this ImageBitmap as we could
                  // be re-using it
                  drawRect(color = Color.Black, size = drawSize, blendMode = BlendMode.Clear)
                  block()
              }
              targetImageBitmap.prepareToDraw()
              return targetImageBitmap
          }

          fun obtainPath(): Path = borderPath ?: Path().also { borderPath = it }
      }

      /**
       * Border implementation for invalid parameters that just draws the content as the given border
       * parameters are infeasible (ex. negative border width)
       */
      private fun CacheDrawScope.drawContentWithoutBorder(): DrawResult = onDrawWithContent {
          drawContent()
      }

      /** Border implementation for rectangular borders */
      private fun CacheDrawScope.drawRectBorder(
          brush: Brush,
          topLeft: Offset,
          borderSize: Size,
          fillArea: Boolean,
          strokeWidthPx: Float,
      ): DrawResult {
          // If we are drawing a rectangular stroke, just offset it by half the stroke
  - id: live-androidx-foundation-foundation-foundation-border-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 561
    endLine: 595
    sha256: 5f9262e77db55f1b380645918bb5852be72946a033e31c5f80838b183f2ec08c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // width as strokes are always drawn centered on their geometry.
          // If the border is larger than the drawing area, just fill the area with a
          // solid rectangle
          val rectTopLeft = if (fillArea) Offset.Zero else topLeft
          val size = if (fillArea) size else borderSize
          val style = if (fillArea) Fill else Stroke(strokeWidthPx)
          return onDrawWithContent {
              drawContent()
              drawRect(brush = brush, topLeft = rectTopLeft, size = size, style = style)
          }
      }

      /**
       * Helper method that creates a round rect with the inner region removed by the given stroke width
       */
      private fun createRoundRectPath(
          targetPath: Path,
          roundedRect: RoundRect,
          strokeWidth: Float,
          fillArea: Boolean,
      ): Path = targetPath.apply {
          reset()
          addRoundRect(roundedRect)
          if (!fillArea) {
              val insetPath =
                  Path().apply { addRoundRect(createInsetRoundedRect(strokeWidth, roundedRect)) }
              op(this, insetPath, PathOperation.Difference)
          }
      }

      @OptIn(ExperimentalFoundationApi::class)
      private fun createInsetRoundedRect(widthPx: Float, roundedRect: RoundRect): RoundRect {
          return if (ComposeFoundationFlags.isRoundedRectangleBorderRenderingFixEnabled) {
              RoundRect(
                  left = roundedRect.left + widthPx,
  - id: live-androidx-foundation-foundation-foundation-border-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 596
    endLine: 624
    sha256: 5ce73ddc1235e61b6ca1c6d06e7e4cfe96a4e0f075d4d328668d2bd1de6498d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  top = roundedRect.top + widthPx,
                  right = roundedRect.right - widthPx,
                  bottom = roundedRect.bottom - widthPx,
                  topLeftCornerRadius = roundedRect.topLeftCornerRadius.shrink(widthPx),
                  topRightCornerRadius = roundedRect.topRightCornerRadius.shrink(widthPx),
                  bottomLeftCornerRadius = roundedRect.bottomLeftCornerRadius.shrink(widthPx),
                  bottomRightCornerRadius = roundedRect.bottomRightCornerRadius.shrink(widthPx),
              )
          } else {
              RoundRect(
                  left = widthPx,
                  top = widthPx,
                  right = roundedRect.width - widthPx,
                  bottom = roundedRect.height - widthPx,
                  topLeftCornerRadius = roundedRect.topLeftCornerRadius.shrink(widthPx),
                  topRightCornerRadius = roundedRect.topRightCornerRadius.shrink(widthPx),
                  bottomLeftCornerRadius = roundedRect.bottomLeftCornerRadius.shrink(widthPx),
                  bottomRightCornerRadius = roundedRect.bottomRightCornerRadius.shrink(widthPx),
              )
          }
      }

      /**
       * Helper method to shrink the corner radius by the given value, clamping to 0 if the resultant
       * corner radius would be negative
       */
      private fun CornerRadius.shrink(value: Float): CornerRadius =
          CornerRadius(max(0f, this.x - value), max(0f, this.y - value))
  - id: live-androidx-foundation-foundation-foundation-border-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt
    startLine: 71
    endLine: 105
    sha256: 53e3e6cefc70149bcc351c017e7082c334316530cad380ae7c5efbf8598027f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.foundation.samples.BorderSample
       * @param border [BorderStroke] class that specifies border appearance, such as size and color
       * @param shape shape of the border
       */
      @Stable
      public fun Modifier.border(border: BorderStroke, shape: Shape = RectangleShape): Modifier =
          border(width = border.width, brush = border.brush, shape = shape)

      /**
       * Modify element to add border with appearance specified with a [width], a [color] and a [shape]
       * and clip it.
       *
       * @sample androidx.compose.foundation.samples.BorderSampleWithDataClass
       * @param width width of the border. Use [Dp.Hairline] for a hairline border.
       * @param color color to paint the border with
       * @param shape shape of the border
       */
      @Stable
      public fun Modifier.border(width: Dp, color: Color, shape: Shape = RectangleShape): Modifier =
          border(width, SolidColor(color), shape)

      /**
       * Modify element to add border with appearance specified with a [width], a [brush] and a [shape]
       * and clip it.
       *
       * @sample androidx.compose.foundation.samples.BorderSampleWithBrush
       * @sample androidx.compose.foundation.samples.BorderSampleWithDynamicData
       * @param width width of the border. Use [Dp.Hairline] for a hairline border.
       * @param brush brush to paint the border with
       * @param shape shape of the border
       */
      @OptIn(ExperimentalFoundationApi::class)
      @Stable
      public fun Modifier.border(width: Dp, brush: Brush, shape: Shape): Modifier =
          this then
compose:
  id: live-androidx-foundation-foundation-foundation-border
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-androidx-foundation-foundation-foundation-border-lines-1
      title: androidx.compose.foundation Border.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-106
      title: androidx.compose.foundation Border.kt source (lines 106–140)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-141
      title: androidx.compose.foundation Border.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-176
      title: androidx.compose.foundation Border.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-211
      title: androidx.compose.foundation Border.kt source (lines 211–245)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-246
      title: androidx.compose.foundation Border.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-281
      title: androidx.compose.foundation Border.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-316
      title: androidx.compose.foundation Border.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-351
      title: androidx.compose.foundation Border.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-36
      title: androidx.compose.foundation Border.kt source (lines 36–70)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-386
      title: androidx.compose.foundation Border.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-421
      title: androidx.compose.foundation Border.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-456
      title: androidx.compose.foundation Border.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-491
      title: androidx.compose.foundation Border.kt source (lines 491–525)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-526
      title: androidx.compose.foundation Border.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-561
      title: androidx.compose.foundation Border.kt source (lines 561–595)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-596
      title: androidx.compose.foundation Border.kt source (lines 596–624)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-596-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-border-lines-71
      title: androidx.compose.foundation Border.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.border
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-border-lines-71-source
      relatedIds: []
---

# androidx.compose.foundation Border.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt

## androidx.compose.foundation Border.kt source (lines 1–35)

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

package androidx.compose.foundation

import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.CacheDrawModifierNode
import androidx.compose.ui.draw.CacheDrawScope
import androidx.compose.ui.draw.DrawResult
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.RoundRect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.geometry.isSimple
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.ClipOp
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.ImageBitmapConfig

Sources: [live-androidx-foundation-foundation-foundation-border-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 106–140)

        if (ComposeFoundationFlags.isNewBorderImplementationEnabled)
            BorderModifierNodeElement(width, brush, shape)
        else OldBorderModifierNodeElement(width, brush, shape)

internal class BorderModifierNodeElement(val width: Dp, val brush: Brush, val shape: Shape) :
    ModifierNodeElement<BorderModifierNode>() {
    override fun create() = BorderModifierNode(width, brush, shape)

    override fun update(node: BorderModifierNode) {
        node.width = width
        node.brush = brush
        node.shape = shape
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "border"
        properties["width"] = width
        if (brush is SolidColor) {
            properties["color"] = brush.value
            value = brush.value
        } else {
            properties["brush"] = brush
        }
        properties["shape"] = shape
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is BorderModifierNodeElement) return false

        if (width != other.width) return false
        if (brush != other.brush) return false
        if (shape != other.shape) return false

        return true

Sources: [live-androidx-foundation-foundation-foundation-border-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 141–175)

    }

    override fun hashCode(): Int {
        var result = width.hashCode()
        result = 31 * result + brush.hashCode()
        result = 31 * result + shape.hashCode()
        return result
    }
}

internal class BorderModifierNode(
    widthParameter: Dp,
    brushParameter: Brush,
    shapeParameter: Shape,
) : Modifier.Node(), DrawModifierNode, SemanticsModifierNode {

    override val shouldAutoInvalidate: Boolean = false
    override val isImportantForBounds = false

    private var borderLayer: GraphicsLayer? = null
    private val borderRenderer = BorderRenderer {
        borderLayer ?: requireGraphicsContext().createGraphicsLayer().also { borderLayer = it }
    }

    var width = widthParameter
        set(value) {
            if (field != value) {
                field = value
                invalidateDraw()
            }
        }

    var brush = brushParameter
        set(value) {
            if (field != value) {

Sources: [live-androidx-foundation-foundation-foundation-border-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 176–210)

                field = value
                invalidateDraw()
            }
        }

    var shape = shapeParameter
        set(value) {
            if (field != value) {
                field = value
                invalidateDraw()
                invalidateSemantics()
            }
        }

    override fun ContentDrawScope.draw() {
        drawContent()
        val outline = shape.createOutline(size, layoutDirection, this)
        borderRenderer.drawBorder(
            drawScope = this,
            width = width,
            brush = brush,
            outline = outline,
        )
    }

    override fun SemanticsPropertyReceiver.applySemantics() {
        shape = this@BorderModifierNode.shape
    }

    override fun onDetach() {
        borderLayer?.let {
            requireGraphicsContext().releaseGraphicsLayer(it)
            borderLayer = null
        }
    }

Sources: [live-androidx-foundation-foundation-foundation-border-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 211–245)

}

internal class OldBorderModifierNodeElement(val width: Dp, val brush: Brush, val shape: Shape) :
    ModifierNodeElement<OldBorderModifierNode>() {
    override fun create() = OldBorderModifierNode(width, brush, shape)

    override fun update(node: OldBorderModifierNode) {
        node.width = width
        node.brush = brush
        node.shape = shape
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "border"
        properties["width"] = width
        if (brush is SolidColor) {
            properties["color"] = brush.value
            value = brush.value
        } else {
            properties["brush"] = brush
        }
        properties["shape"] = shape
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is OldBorderModifierNodeElement) return false

        if (width != other.width) return false
        if (brush != other.brush) return false
        if (shape != other.shape) return false

        return true
    }


Sources: [live-androidx-foundation-foundation-foundation-border-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 246–280)

    override fun hashCode(): Int {
        var result = width.hashCode()
        result = 31 * result + brush.hashCode()
        result = 31 * result + shape.hashCode()
        return result
    }
}

internal class OldBorderModifierNode(
    widthParameter: Dp,
    brushParameter: Brush,
    shapeParameter: Shape,
) : DelegatingNode(), SemanticsModifierNode {

    override val shouldAutoInvalidate: Boolean = false
    override val isImportantForBounds = false

    // BorderCache object that is lazily allocated depending on the type of shape
    // This object is only used for generic shapes and rounded rectangles with different corner
    // radius sizes.
    // Note: Extension functions that use BorderCache are part of this class.
    private var borderCache: BorderCache? = null

    var width = widthParameter
        set(value) {
            if (field != value) {
                field = value
                drawWithCacheModifierNode.invalidateDrawCache()
            }
        }

    var brush = brushParameter
        set(value) {
            if (field != value) {
                field = value

Sources: [live-androidx-foundation-foundation-foundation-border-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 281–315)

                drawWithCacheModifierNode.invalidateDrawCache()
            }
        }

    var shape = shapeParameter
        set(value) {
            if (field != value) {
                field = value
                drawWithCacheModifierNode.invalidateDrawCache()
                invalidateSemantics()
            }
        }

    private val drawWithCacheModifierNode =
        delegate(
            CacheDrawModifierNode {
                val hasValidBorderParams = width.toPx() >= 0f && size.minDimension > 0f
                if (!hasValidBorderParams) {
                    drawContentWithoutBorder()
                } else {
                    val strokeWidthPx =
                        min(
                            if (width == Dp.Hairline) 1f else ceil(width.toPx()),
                            ceil(size.minDimension / 2),
                        )
                    val halfStroke = strokeWidthPx / 2
                    val topLeft = Offset(halfStroke, halfStroke)
                    val borderSize = Size(size.width - strokeWidthPx, size.height - strokeWidthPx)
                    // The stroke is larger than the drawing area so just draw a full shape instead
                    val fillArea = (strokeWidthPx * 2) > size.minDimension
                    when (val outline = shape.createOutline(size, layoutDirection, this)) {
                        is Outline.Generic ->
                            drawGenericBorder(brush, outline, fillArea, strokeWidthPx)
                        is Outline.Rounded ->
                            drawRoundRectBorder(

Sources: [live-androidx-foundation-foundation-foundation-border-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 316–350)

                                brush,
                                outline,
                                topLeft,
                                borderSize,
                                fillArea,
                                strokeWidthPx,
                            )
                        is Outline.Rectangle ->
                            drawRectBorder(brush, topLeft, borderSize, fillArea, strokeWidthPx)
                    }
                }
            }
        )

    /**
     * Border implementation for generic paths. Note it is possible to be given paths that do not
     * make sense in the context of a border (ex. a figure 8 path or a non-enclosed shape) We do not
     * handle that here as we expect developers to give us enclosed, non-overlapping paths.
     */
    private fun CacheDrawScope.drawGenericBorder(
        brush: Brush,
        outline: Outline.Generic,
        fillArea: Boolean,
        strokeWidth: Float,
    ): DrawResult =
        if (fillArea) {
            onDrawWithContent {
                drawContent()
                drawPath(outline.path, brush = brush)
            }
        } else {
            // Optimization, if we are only drawing a solid color border, we only need an alpha8
            // mask as we can draw the mask with a tint.
            // Otherwise we need to allocate a full ImageBitmap and draw it normally
            val config: ImageBitmapConfig

Sources: [live-androidx-foundation-foundation-foundation-border-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 351–385)

            val colorFilter: ColorFilter?
            if (brush is SolidColor) {
                config = ImageBitmapConfig.Alpha8
                // The brush is drawn into the mask with the corresponding color including the
                // alpha channel so when we tint we should not apply the alpha as it would end up
                // modulating it twice
                colorFilter = ColorFilter.tint(brush.value.copy(alpha = 1f))
            } else {
                config = ImageBitmapConfig.Argb8888
                colorFilter = null
            }

            val pathBounds = outline.path.getBounds()
            // Create a mask path that includes a rectangle with the original path cut out of it.
            // Note: borderCache is part of the class that defines this extension function.
            if (borderCache == null) {
                borderCache = BorderCache()
            }
            val maskPath =
                borderCache!!.obtainPath().apply {
                    reset()
                    addRect(pathBounds)
                    op(this, outline.path, PathOperation.Difference)
                }

            val cacheImageBitmap: ImageBitmap
            val pathBoundsSize =
                IntSize(ceil(pathBounds.width).toInt(), ceil(pathBounds.height).toInt())
            with(borderCache!!) {
                // Draw into offscreen bitmap with the size of the path
                // We need to draw into this intermediate bitmap to act as a layer
                // and make sure that the clearing logic does not generate underdraw
                // into the target we are rendering into
                cacheImageBitmap =
                    drawBorderCache(pathBoundsSize, config) {

Sources: [live-androidx-foundation-foundation-foundation-border-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 36–70)

import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathOperation
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.drawscope.CanvasDrawScope
import androidx.compose.ui.graphics.drawscope.ContentDrawScope
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.clipRect
import androidx.compose.ui.graphics.drawscope.scale
import androidx.compose.ui.graphics.drawscope.translate
import androidx.compose.ui.graphics.layer.GraphicsLayer
import androidx.compose.ui.node.DelegatingNode
import androidx.compose.ui.node.DrawModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.SemanticsModifierNode
import androidx.compose.ui.node.invalidateDraw
import androidx.compose.ui.node.invalidateSemantics
import androidx.compose.ui.node.requireGraphicsContext
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.semantics.SemanticsPropertyReceiver
import androidx.compose.ui.semantics.shape
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.toSize
import kotlin.math.ceil
import kotlin.math.max
import kotlin.math.min

/**
 * Modify element to add border with appearance specified with a [border] and a [shape] and clip it.
 *

Sources: [live-androidx-foundation-foundation-foundation-border-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 386–420)

                        // Paths can have offsets, so translate to keep the drawn path
                        // within the bounds of the mask bitmap
                        translate(-pathBounds.left, -pathBounds.top) {
                            // Draw the path with a stroke width twice the provided value.
                            // Because strokes are centered, this will draw both and inner and
                            // outer stroke with the desired stroke width
                            drawPath(
                                path = outline.path,
                                brush = brush,
                                style = Stroke(strokeWidth * 2),
                            )

                            // Scale the canvas slightly to cover the background that may be visible
                            // after clearing the outer stroke
                            scale((size.width + 1) / size.width, (size.height + 1) / size.height) {
                                // Remove the outer stroke by clearing the inverted mask path
                                drawPath(
                                    path = maskPath,
                                    brush = brush,
                                    blendMode = BlendMode.Clear,
                                )
                            }
                        }
                    }
            }

            onDrawWithContent {
                drawContent()
                translate(pathBounds.left, pathBounds.top) {
                    drawImage(cacheImageBitmap, srcSize = pathBoundsSize, colorFilter = colorFilter)
                }
            }
        }

    /** Border implementation for simple rounded rects and those with different corner radii */

Sources: [live-androidx-foundation-foundation-foundation-border-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 421–455)

    private fun CacheDrawScope.drawRoundRectBorder(
        brush: Brush,
        outline: Outline.Rounded,
        topLeft: Offset,
        borderSize: Size,
        fillArea: Boolean,
        strokeWidth: Float,
    ): DrawResult {
        return if (outline.roundRect.isSimple) {
            val cornerRadius = outline.roundRect.topLeftCornerRadius
            val halfStroke = strokeWidth / 2
            val borderStroke = Stroke(strokeWidth)
            onDrawWithContent {
                drawContent()
                when {
                    fillArea -> {
                        // If the drawing area is smaller than the stroke being drawn
                        // drawn all around it just draw a filled in rounded rect
                        drawRoundRect(brush, cornerRadius = cornerRadius)
                    }
                    cornerRadius.x < halfStroke -> {
                        // If the corner radius is smaller than half of the stroke width
                        // then the interior curvature of the stroke will be a sharp edge
                        // In this case just draw a normal filled in rounded rect with the
                        // desired corner radius but clipping out the interior rectangle
                        clipRect(
                            strokeWidth,
                            strokeWidth,
                            size.width - strokeWidth,
                            size.height - strokeWidth,
                            clipOp = ClipOp.Difference,
                        ) {
                            drawRoundRect(brush, cornerRadius = cornerRadius)
                        }
                    }

Sources: [live-androidx-foundation-foundation-foundation-border-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 456–490)

                    else -> {
                        // Otherwise draw a stroked rounded rect with the corner radius
                        // shrunk by half of the stroke width. This will ensure that the
                        // outer curvature of the rounded rectangle will have the desired
                        // corner radius.
                        drawRoundRect(
                            brush = brush,
                            topLeft = topLeft,
                            size = borderSize,
                            cornerRadius = cornerRadius.shrink(halfStroke),
                            style = borderStroke,
                        )
                    }
                }
            }
        } else {
            // Note: borderCache is part of the class that defines this extension function.
            if (borderCache == null) {
                borderCache = BorderCache()
            }
            val path = borderCache!!.obtainPath()
            val roundedRectPath =
                createRoundRectPath(path, outline.roundRect, strokeWidth, fillArea)
            onDrawWithContent {
                drawContent()
                drawPath(roundedRectPath, brush = brush)
            }
        }
    }

    override fun SemanticsPropertyReceiver.applySemantics() {
        shape = this@OldBorderModifierNode.shape
    }
}


Sources: [live-androidx-foundation-foundation-foundation-border-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 491–525)

/**
 * Helper object that handles lazily allocating and re-using objects to render the border into an
 * offscreen ImageBitmap
 */
private data class BorderCache(
    private var imageBitmap: ImageBitmap? = null,
    private var canvas: androidx.compose.ui.graphics.Canvas? = null,
    private var canvasDrawScope: CanvasDrawScope? = null,
    private var borderPath: Path? = null,
) {
    inline fun CacheDrawScope.drawBorderCache(
        borderSize: IntSize,
        config: ImageBitmapConfig,
        block: DrawScope.() -> Unit,
    ): ImageBitmap {

        var targetImageBitmap = imageBitmap
        var targetCanvas = canvas
        // If we previously had allocated a full Argb888 ImageBitmap but are only requiring
        // an alpha mask, just re-use the same ImageBitmap instead of allocating a new one
        val compatibleConfig =
            targetImageBitmap?.config == ImageBitmapConfig.Argb8888 ||
                config == targetImageBitmap?.config
        if (
            targetImageBitmap == null ||
                targetCanvas == null ||
                size.width > targetImageBitmap.width ||
                size.height > targetImageBitmap.height ||
                !compatibleConfig
        ) {
            targetImageBitmap =
                ImageBitmap(borderSize.width, borderSize.height, config = config).also {
                    imageBitmap = it
                }
            targetCanvas =

Sources: [live-androidx-foundation-foundation-foundation-border-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 526–560)

                androidx.compose.ui.graphics.Canvas(targetImageBitmap).also { canvas = it }
        }

        val targetDrawScope = canvasDrawScope ?: CanvasDrawScope().also { canvasDrawScope = it }
        val drawSize = borderSize.toSize()
        targetDrawScope.draw(this, layoutDirection, targetCanvas, drawSize) {
            // Clear the previously rendered portion within this ImageBitmap as we could
            // be re-using it
            drawRect(color = Color.Black, size = drawSize, blendMode = BlendMode.Clear)
            block()
        }
        targetImageBitmap.prepareToDraw()
        return targetImageBitmap
    }

    fun obtainPath(): Path = borderPath ?: Path().also { borderPath = it }
}

/**
 * Border implementation for invalid parameters that just draws the content as the given border
 * parameters are infeasible (ex. negative border width)
 */
private fun CacheDrawScope.drawContentWithoutBorder(): DrawResult = onDrawWithContent {
    drawContent()
}

/** Border implementation for rectangular borders */
private fun CacheDrawScope.drawRectBorder(
    brush: Brush,
    topLeft: Offset,
    borderSize: Size,
    fillArea: Boolean,
    strokeWidthPx: Float,
): DrawResult {
    // If we are drawing a rectangular stroke, just offset it by half the stroke

Sources: [live-androidx-foundation-foundation-foundation-border-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 561–595)

    // width as strokes are always drawn centered on their geometry.
    // If the border is larger than the drawing area, just fill the area with a
    // solid rectangle
    val rectTopLeft = if (fillArea) Offset.Zero else topLeft
    val size = if (fillArea) size else borderSize
    val style = if (fillArea) Fill else Stroke(strokeWidthPx)
    return onDrawWithContent {
        drawContent()
        drawRect(brush = brush, topLeft = rectTopLeft, size = size, style = style)
    }
}

/**
 * Helper method that creates a round rect with the inner region removed by the given stroke width
 */
private fun createRoundRectPath(
    targetPath: Path,
    roundedRect: RoundRect,
    strokeWidth: Float,
    fillArea: Boolean,
): Path = targetPath.apply {
    reset()
    addRoundRect(roundedRect)
    if (!fillArea) {
        val insetPath =
            Path().apply { addRoundRect(createInsetRoundedRect(strokeWidth, roundedRect)) }
        op(this, insetPath, PathOperation.Difference)
    }
}

@OptIn(ExperimentalFoundationApi::class)
private fun createInsetRoundedRect(widthPx: Float, roundedRect: RoundRect): RoundRect {
    return if (ComposeFoundationFlags.isRoundedRectangleBorderRenderingFixEnabled) {
        RoundRect(
            left = roundedRect.left + widthPx,

Sources: [live-androidx-foundation-foundation-foundation-border-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 596–624)

            top = roundedRect.top + widthPx,
            right = roundedRect.right - widthPx,
            bottom = roundedRect.bottom - widthPx,
            topLeftCornerRadius = roundedRect.topLeftCornerRadius.shrink(widthPx),
            topRightCornerRadius = roundedRect.topRightCornerRadius.shrink(widthPx),
            bottomLeftCornerRadius = roundedRect.bottomLeftCornerRadius.shrink(widthPx),
            bottomRightCornerRadius = roundedRect.bottomRightCornerRadius.shrink(widthPx),
        )
    } else {
        RoundRect(
            left = widthPx,
            top = widthPx,
            right = roundedRect.width - widthPx,
            bottom = roundedRect.height - widthPx,
            topLeftCornerRadius = roundedRect.topLeftCornerRadius.shrink(widthPx),
            topRightCornerRadius = roundedRect.topRightCornerRadius.shrink(widthPx),
            bottomLeftCornerRadius = roundedRect.bottomLeftCornerRadius.shrink(widthPx),
            bottomRightCornerRadius = roundedRect.bottomRightCornerRadius.shrink(widthPx),
        )
    }
}

/**
 * Helper method to shrink the corner radius by the given value, clamping to 0 if the resultant
 * corner radius would be negative
 */
private fun CornerRadius.shrink(value: Float): CornerRadius =
    CornerRadius(max(0f, this.x - value), max(0f, this.y - value))


Sources: [live-androidx-foundation-foundation-foundation-border-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)

## androidx.compose.foundation Border.kt source (lines 71–105)

 * @sample androidx.compose.foundation.samples.BorderSample
 * @param border [BorderStroke] class that specifies border appearance, such as size and color
 * @param shape shape of the border
 */
@Stable
public fun Modifier.border(border: BorderStroke, shape: Shape = RectangleShape): Modifier =
    border(width = border.width, brush = border.brush, shape = shape)

/**
 * Modify element to add border with appearance specified with a [width], a [color] and a [shape]
 * and clip it.
 *
 * @sample androidx.compose.foundation.samples.BorderSampleWithDataClass
 * @param width width of the border. Use [Dp.Hairline] for a hairline border.
 * @param color color to paint the border with
 * @param shape shape of the border
 */
@Stable
public fun Modifier.border(width: Dp, color: Color, shape: Shape = RectangleShape): Modifier =
    border(width, SolidColor(color), shape)

/**
 * Modify element to add border with appearance specified with a [width], a [brush] and a [shape]
 * and clip it.
 *
 * @sample androidx.compose.foundation.samples.BorderSampleWithBrush
 * @sample androidx.compose.foundation.samples.BorderSampleWithDynamicData
 * @param width width of the border. Use [Dp.Hairline] for a hairline border.
 * @param brush brush to paint the border with
 * @param shape shape of the border
 */
@OptIn(ExperimentalFoundationApi::class)
@Stable
public fun Modifier.border(width: Dp, brush: Brush, shape: Shape): Modifier =
    this then

Sources: [live-androidx-foundation-foundation-foundation-border-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/Border.kt)
