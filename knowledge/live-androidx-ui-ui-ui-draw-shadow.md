---
type: reference
title: androidx.compose.ui.draw Shadow.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 1
    endLine: 35
    sha256: 2f92e1e69236eb60abef58a73b1a3cbfacbe20a93e6a2464b925a85a9f853c4a
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

      package androidx.compose.ui.draw

      import androidx.compose.runtime.Stable
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.BlendMode
      import androidx.compose.ui.graphics.BlockGraphicsLayerModifier
      import androidx.compose.ui.graphics.Brush
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.DefaultShadowColor
      import androidx.compose.ui.graphics.GraphicsLayerScope
      import androidx.compose.ui.graphics.RectangleShape
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.drawscope.ContentDrawScope
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.graphics.isSpecified
      import androidx.compose.ui.graphics.shadow.DropShadowPainter
      import androidx.compose.ui.graphics.shadow.InnerShadowPainter
      import androidx.compose.ui.graphics.shadow.Shadow
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 106
    endLine: 140
    sha256: b1cb3050196d9bc83c8762b6192dce78041498c82db7867544c6bfc445597fa8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see graphicsLayer
       *
       * Example usage:
       */
      @Stable
      public fun Modifier.shadow(
          elevation: Dp,
          shape: Shape = RectangleShape,
          clip: Boolean = elevation > 0.dp,
          ambientColor: Color = DefaultShadowColor,
          spotColor: Color = DefaultShadowColor,
      ): Modifier =
          if (elevation > 0.dp || clip) {
              this then ShadowGraphicsLayerElement(elevation, shape, clip, ambientColor, spotColor)
          } else {
              this
          }

      /**
       * Draws a drop shadow behind the rest of the content with the geometry specified by the given shape
       * and the shadow properties defined by the [Shadow]. This is different than [Modifier.shadow] as
       * this does not introduce a graphicsLayer to render elevation based shadows. This shadow is
       * rendered without a single light source and will render consistently regardless of the on screen
       * position of the content.
       *
       * @param shape Geometry of the shadow
       * @param shadow Properties of the shadow like radius, spread, offset, and fill properties like the
       *   color or brush
       * @sample androidx.compose.ui.samples.DropShadowSample
       */
      @Stable
      public fun Modifier.dropShadow(shape: Shape, shadow: Shadow): Modifier =
          this then SimpleDropShadowElement(shape, shadow)

      /**
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 141
    endLine: 175
    sha256: 18589e5b3c49ffd46f97b1f660fb43983dcdb0bd0746da7edb8c967148baca57
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Draws a drop shadow behind the rest of the content with the geometry specified by the given shape
       * and the shadow properties defined the [DropShadowScope]. This is different than [Modifier.shadow]
       * as this does not introduce a graphicsLayer to render elevation based shadows. This shadow is
       * rendered without a single light source and will render consistently regardless of the on screen
       * position of the content. This is similar to [Modifier.dropShadow] except that specification of
       * drop shadow parameters is done with the lambda with [DropShadowScope] allows for more efficient
       * transformations for animated use cases without recomposition.
       *
       * @param shape Geometry of the shadow
       * @param block [DropShadowScope] block where shadow properties are defined
       * @sample androidx.compose.ui.samples.DropShadowSample
       */
      @Stable
      public fun Modifier.dropShadow(shape: Shape, block: DropShadowScope.() -> Unit): Modifier =
          this then BlockDropShadowElement(shape, block)

      /**
       * Draws an inner shadow on top of the rest of the content with the geometry specified by the given
       * shape and the shadow properties defined by the [Shadow]. This is different than [Modifier.shadow]
       * as this does not introduce a graphicsLayer to render elevation based shadows. Additionally this
       * shadow will render only within the geometry and can be used to provide a recessed like visual
       * effect. This shadow is rendered without a single light source and will render consistently
       * regardless of the on screen position of the content.
       *
       * @param shape Geometry of the shadow
       * @param shadow Properties of the shadow like radius, spread, offset, and fill properties like the
       *   color or brush
       * @sample androidx.compose.ui.samples.InnerShadowSample
       */
      @Stable
      public fun Modifier.innerShadow(shape: Shape, shadow: Shadow): Modifier =
          this then SimpleInnerShadowElement(shape, shadow)

      /**
       * Draws an inner shadow behind the rest of the content with the geometry specified by the given
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 176
    endLine: 210
    sha256: a2b8aeca4d90ab6921f92484eefb45cf0dab972007fb25a1ead297ba31e9e8b7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * shape and the shadow properties defined the [InnerShadowScope]. This is different than
       * [Modifier.shadow] as this does not introduce a graphicsLayer to render elevation based shadows.
       * This shadow is rendered without a single light source and will render consistently regardless of
       * the on screen position of the content. This is similar to [Modifier.innerShadow] except that
       * specification of inner shadow parameters is done with the lambda with [InnerShadowScope] allows
       * for more efficient transformations for animated use cases without recomposition.
       *
       * @param shape Geometry of the shadow
       * @param block [InnerShadowScope] block where shadow properties are defined
       * @sample androidx.compose.ui.samples.InnerShadowSample
       */
      @Stable
      public fun Modifier.innerShadow(shape: Shape, block: InnerShadowScope.() -> Unit): Modifier =
          this then BlockInnerShadowElement(shape, block)

      // Note because we are merging the offset properties into the scoped interface for configuration
      // the DropShadow parameters for optimal animations to that avoid recomposition, the exposed
      // receiver scope for InnerShadow and DropShadow are more or less identical.
      // InnerShadow exposes offset parameters as changes to the offset itself require regeneration of the
      // shadow, however, an offset on a DropShadow just translates the shadow content itself.
      // Expose a base [ShadowScope] interface with different interfaces for Drop/Inner shadows for
      // to support future changes of parameters that are supported in one or the other but not both

      /**
       * Scope that provides the capability to configure the properties of a drop shadow in order to
       * support efficient transformations without recomposition
       */
      @JvmDefaultWithCompatibility public interface DropShadowScope : ShadowScope

      /**
       * Scope that provides the capability to configure the properties of an inner shadow in order to
       * support efficient transformations without recomposition
       */
      @JvmDefaultWithCompatibility public interface InnerShadowScope : ShadowScope
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 211
    endLine: 245
    sha256: b337c78ba82a0cceaac359e2fae870af7049a6970870cf2554e35235c8ed5688
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /**
       * Scope that can be used to define properties to render either a drop shadow or inner shadow. This
       * includes the [radius], [spread], [color], [brush], [alpha], [blendMode], and [offset] parameters.
       */
      @JvmDefaultWithCompatibility
      public interface ShadowScope : Density {

          /** Blur radius of the shadow, in pixels. Defaults to 0. */
          public var radius: Float

          /** Spread parameter that adds to the size of the shadow, in pixels. Defaults to 0. */
          public var spread: Float

          /**
           * Color of the shadow, Defaults to [Color.Black]. Attempts to provide Color.Unspecified will
           * fallback to rendering with [Color.Black]. This parameter is consumed if [brush] is null.
           */
          public var color: Color

          /** The brush to use for the shadow. If null, the color parameter is consumed instead */
          public var brush: Brush?

          /** Opacity of the shadow. Defaults to 1f indicating a fully opaque shadow */
          public var alpha: Float

          /** Blending algorithm used by the shadow. Defaults to [BlendMode.SrcOver] */
          public var blendMode: BlendMode

          /** Offset of the shadow. Defaults to [Offset.Zero]. */
          public var offset: Offset
      }

      internal class BlockDropShadowElement(val shape: Shape, val block: DropShadowScope.() -> Unit) :
          ModifierNodeElement<BlockDropShadowNode>() {
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 246
    endLine: 280
    sha256: 0e2efd77238e3b86cacfe14be53794029e8e3bad5dbe40af76eeda4c695199bc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun create(): BlockDropShadowNode = BlockDropShadowNode(shape, block)

          override fun update(node: BlockDropShadowNode) {
              node.update(shape, block)
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "dropShadow"
              properties["shape"] = shape
              properties["block"] = block
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is BlockDropShadowElement) return false

              if (shape != other.shape) return false
              if (block !== other.block) return false

              return true
          }

          override fun hashCode() = 31 * shape.hashCode() + block.hashCode()
      }

      internal data class SimpleDropShadowElement(val shape: Shape, val shadow: Shadow) :
          ModifierNodeElement<SimpleDropShadowNode>() {

          override fun create(): SimpleDropShadowNode = SimpleDropShadowNode(shape, shadow)

          override fun update(node: SimpleDropShadowNode) {
              node.update(shape, shadow)
          }

          override fun InspectorInfo.inspectableProperties() {
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 281
    endLine: 315
    sha256: 617026e2bfe0d5c84581a5b533ad1e6a6929c562660ead45bf1fe87a97bbef95
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              name = "dropShadow"
              properties["shape"] = shape
              properties["dropShadow"] = shadow
          }
      }

      /**
       * DropShadow ModifierNode implementation that leverages an immutable DropShadow and offset. This is
       * useful for use cases where the shadow itself is not animated
       */
      internal class SimpleDropShadowNode(private var shape: Shape, private var shadow: Shadow) :
          DrawModifierNode, Modifier.Node(), ObserverModifierNode {

          private var shadowPainter: DropShadowPainter? = null

          fun update(shape: Shape, shadow: Shadow) {
              val painterInvalidated = this.shape != shape || this.shadow != shadow
              if (painterInvalidated) {
                  shadowPainter = null
              }
              this.shape = shape
              this.shadow = shadow
          }

          private fun obtainPainter(): DropShadowPainter =
              shadowPainter
                  ?: requireGraphicsContext().shadowContext.createDropShadowPainter(shape, shadow).also {
                      shadowPainter = it
                  }

          override fun ContentDrawScope.draw() {
              with(obtainPainter()) { draw(size) }
              drawContent()
          }
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 316
    endLine: 350
    sha256: 31fb438545e420a5a319f856e8671cfdce0ef8109a032c9a1781e4373d6cfc2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun onObservedReadsChanged() {
              shadowPainter = null
              invalidateDraw()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is SimpleDropShadowNode) return false

              if (shape != other.shape) return false
              if (shadow != other.shadow) return false

              return true
          }

          override fun hashCode(): Int {
              var result = shape.hashCode()
              result = 31 * result + shadow.hashCode()
              return result
          }
      }

      internal data class SimpleInnerShadowElement(val shape: Shape, val shadow: Shadow) :
          ModifierNodeElement<SimpleInnerShadowNode>() {

          override fun create(): SimpleInnerShadowNode = SimpleInnerShadowNode(shape, shadow)

          override fun update(node: SimpleInnerShadowNode) {
              node.update(shape, shadow)
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "innerShadow"
              properties["shape"] = shape
              properties["innerShadow"] = shadow
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 351
    endLine: 385
    sha256: 6354d054c033dc933fc6c296843819a79fefa309ad07910f36e1ed24fb19691a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      /**
       * InnerShadow ModifierNode implementation that leverages an immutable InnerShadow and offset. This
       * is useful for use cases where the shadow itself is not animated
       */
      internal class SimpleInnerShadowNode(private var shape: Shape, private var shadow: Shadow) :
          DrawModifierNode, Modifier.Node(), ObserverModifierNode {

          private var innerShadowPainter: InnerShadowPainter? = null

          fun update(shape: Shape, shadow: Shadow) {
              val painterInvalidated = this.shape != shape || this.shadow != shadow
              if (painterInvalidated) {
                  innerShadowPainter = null
              }
              this.shape = shape
              this.shadow = shadow
          }

          private fun obtainPainter(): InnerShadowPainter =
              innerShadowPainter
                  ?: requireGraphicsContext().shadowContext.createInnerShadowPainter(shape, shadow).also {
                      innerShadowPainter = it
                  }

          override fun ContentDrawScope.draw() {
              with(obtainPainter()) { draw(size) }
              drawContent()
          }

          override fun onObservedReadsChanged() {
              innerShadowPainter = null
              invalidateDraw()
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 36
    endLine: 70
    sha256: b542436010c697b4361a6f401c54bf5f2bbef0e2c7e13052e9a92fe04ed1e6ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.node.DrawModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.ObserverModifierNode
      import androidx.compose.ui.node.invalidateDraw
      import androidx.compose.ui.node.observeReads
      import androidx.compose.ui.node.requireDensity
      import androidx.compose.ui.node.requireGraphicsContext
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.DpOffset
      import androidx.compose.ui.unit.dp

      /**
       * Creates a [graphicsLayer] that draws a shadow. The [elevation] defines the visual depth of the
       * physical object. The physical object has a shape specified by [shape].
       *
       * If the passed [shape] is concave the shadow will not be drawn on Android versions less than 10.
       *
       * Note that [elevation] is only affecting the shadow size and doesn't change the drawing order. Use
       * a [androidx.compose.ui.zIndex] modifier if you want to draw the elements with larger [elevation]
       * after all the elements with a smaller one.
       *
       * Usage of this API renders this composable into a separate graphics layer
       *
       * @param elevation The elevation for the shadow in pixels
       * @param shape Defines a shape of the physical object
       * @param clip When active, the content drawing clips to the shape.
       * @sample androidx.compose.ui.samples.ShadowSample
       * @see graphicsLayer
       *
       * Example usage:
       */
      @Deprecated(
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 386
    endLine: 420
    sha256: 1aa1fb9087e96365ee8b57a0d76ebe89bcce0b9d77ce6b34a26ce2591a83d5d9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || this::class != other::class) return false

              other as SimpleInnerShadowNode

              if (shape != other.shape) return false
              if (shadow != other.shadow) return false

              return true
          }

          override fun hashCode(): Int {
              var result = shape.hashCode()
              result = 31 * result + shadow.hashCode()
              return result
          }
      }

      /** Resets all shadow properties to their default values */
      private fun ShadowScope.resetShadow() {
          this.radius = 0f
          this.spread = 0f
          this.offset = Offset.Zero
          this.color = Color.Black
          this.brush = null
          this.alpha = 1f
          this.blendMode = BlendMode.SrcOver
      }

      internal class BlockInnerShadowElement(val shape: Shape, val block: InnerShadowScope.() -> Unit) :
          ModifierNodeElement<BlockInnerShadowNode>() {
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 421
    endLine: 455
    sha256: 6d6de4efaa4ec12ce52e832d78fdd8b752dcab849610b9fd84bb44b1fb022225
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun create(): BlockInnerShadowNode = BlockInnerShadowNode(shape, block)

          override fun update(node: BlockInnerShadowNode) {
              node.update(shape, block)
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "innerShadow"
              properties["shape"] = shape
              properties["block"] = block
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is BlockInnerShadowElement) return false

              if (shape != other.shape) return false
              if (block !== other.block) return false

              return true
          }

          override fun hashCode() = 31 * shape.hashCode() + block.hashCode()
      }

      /**
       * InnerShadow ModifierNode implementation that leverages a receiver scope for mutable inner shadow
       * properties. This is useful for use cases where the shadow itself is animated and minimizing
       * recompositions is desired.
       */
      internal class BlockInnerShadowNode(shape: Shape, block: InnerShadowScope.() -> Unit) :
          DrawModifierNode, Modifier.Node(), ObserverModifierNode, InnerShadowScope {

          private var densityObject: Density? = null
          private var targetShadow: Shadow? = null
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 456
    endLine: 490
    sha256: 4a41891c244fb0bd90da6ebf747e3f64c995788483d03d3ec68679f70f058eb5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private var shadowPainter: InnerShadowPainter? = null
          private var blockRead = false

          private var shape: Shape = shape
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          private var block: InnerShadowScope.() -> Unit = block
              set(value) {
                  if (field !== value) {
                      field = value
                      blockRead = false
                      invalidateDraw()
                  }
              }

          override val density: Float
              get() = densityObject?.density ?: 1f

          override val fontScale: Float
              get() = densityObject?.fontScale ?: 1f

          override var radius: Float = 0f
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var spread: Float = 0f
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 491
    endLine: 525
    sha256: 780955279114a863d39c031e8f168ed8a4e46b77dceffdc6cb78b68fa95d9872
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var offset: Offset = Offset.Zero
              set(value) {
                  if (field != value) {
                      field = value
                      // Unlike the DropShadow ModifierNode implementation, changes to the offset of an
                      // inner shadow require the shadow to be recreated
                      invalidateShadow()
                  }
              }

          override var color: Color = Color.Black
              set(value) {
                  val target =
                      if (value.isSpecified) {
                          value
                      } else {
                          Color.Black
                      }
                  if (field != target) {
                      field = target
                      invalidateShadow()
                  }
              }

          override var brush: Brush? = null
              set(value) {
                  if (field != value) {
                      field = value
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 526
    endLine: 560
    sha256: 6a5cd98a5f0d867639203281eb449081857fef46f8eca14586787b1f2d779435
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      invalidateShadow()
                  }
              }

          override var alpha: Float = 1f
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var blendMode: BlendMode = BlendMode.SrcOver
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override fun onAttach() {
              super.onAttach()
              updateDensity()
          }

          override fun onDensityChange() {
              if (isAttached) updateDensity()
          }

          private fun updateDensity() {
              val newDensity = requireDensity()
              if (densityObject != newDensity) {
                  densityObject = newDensity
                  blockRead = false
                  invalidateShadow()
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 561
    endLine: 595
    sha256: 122c85c904f943b587b907cda4172c444f52ec23477bba3b83cbea6c2de1754b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          fun update(shape: Shape, block: InnerShadowScope.() -> Unit) {
              this.shape = shape
              this.block = block
          }

          override fun ContentDrawScope.draw() {
              with(obtainPainter()) { draw(size) }
              drawContent()
          }

          private fun obtainPainter(): InnerShadowPainter {
              if (!blockRead) {
                  blockRead = true
                  resetShadow()
                  observeReads { block(this) }
              }
              var shadow = targetShadow
              var painter = shadowPainter
              val tmpBrush = brush
              val radiusDp = radius.toDp()
              val spreadDp = spread.toDp()
              val dpOffset = DpOffset(offset.x.toDp(), offset.y.toDp())
              if (
                  painter == null ||
                      shadow == null ||
                      shadow.radius != radiusDp ||
                      shadow.spread != spreadDp ||
                      shadow.color != color ||
                      shadow.brush != tmpBrush ||
                      shadow.alpha != alpha ||
                      shadow.blendMode != blendMode ||
                      shadow.offset != dpOffset
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 596
    endLine: 630
    sha256: b90dc4ccc0da9346d6dbfe41863f52ff3465032ad782841c811e0c078aeed4a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ) {
                  shadow =
                      if (tmpBrush != null) {
                              Shadow(radiusDp, tmpBrush, spreadDp, dpOffset, alpha, blendMode)
                          } else {
                              Shadow(radiusDp, color, spreadDp, dpOffset, alpha, blendMode)
                          }
                          .also { targetShadow = it }
                  painter =
                      requireGraphicsContext()
                          .shadowContext
                          .createInnerShadowPainter(shape, shadow)
                          .also { shadowPainter = it }
              }
              return painter
          }

          override fun onObservedReadsChanged() {
              blockRead = false
              invalidateShadow()
          }

          private fun invalidateShadow() {
              targetShadow = null
              shadowPainter = null
              invalidateDraw()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is BlockInnerShadowNode) return false

              if (alpha != other.alpha) return false
              if (shape != other.shape) return false
              if (block !== other.block) return false
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 631
    endLine: 665
    sha256: 54b210db5217d9ca7be54cb3f5348739061b462aeee4dd27e4c28b37dc3c9ea1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (radius != other.radius) return false
              if (spread != other.spread) return false
              if (offset != other.offset) return false
              if (color != other.color) return false
              if (brush != other.brush) return false
              if (blendMode != other.blendMode) return false

              return true
          }

          override fun hashCode(): Int {
              var result = alpha.hashCode()
              result = 31 * result + shape.hashCode()
              result = 31 * result + block.hashCode()
              result = 31 * result + radius.hashCode()
              result = 31 * result + spread.hashCode()
              result = 31 * result + offset.hashCode()
              result = 31 * result + color.hashCode()
              result = 31 * result + (brush?.hashCode() ?: 0)
              result = 31 * result + blendMode.hashCode()
              return result
          }
      }

      /**
       * DropShadow ModifierNode implementation that leverages a receiver scope for mutable drop shadow
       * properties and translation offset. This is useful for use cases where the shadow itself is
       * animated and minimizing recompositions is desired.
       */
      internal class BlockDropShadowNode(shape: Shape, block: DropShadowScope.() -> Unit) :
          DrawModifierNode, Modifier.Node(), ObserverModifierNode, DropShadowScope {

          private var densityObject: Density? = null
          private var targetShadow: Shadow? = null
          private var shadowPainter: DropShadowPainter? = null
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 666
    endLine: 700
    sha256: 1ad1e1dc13848bccae081189bb483e14cb6456d8560e3d700dbea64f903c3453
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private var blockRead = false

          private var shape: Shape = shape
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          private var block: DropShadowScope.() -> Unit = block
              set(value) {
                  if (field !== value) {
                      field = value
                      blockRead = false
                      invalidateDraw()
                  }
              }

          override val density: Float
              get() = densityObject?.density ?: 1f

          override val fontScale: Float
              get() = densityObject?.fontScale ?: 1f

          override var radius: Float = 0f
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var spread: Float = 0f
              set(value) {
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 701
    endLine: 735
    sha256: b0e1febc31b846154f8efaeaf4a630c46252cdae2a2bffe7d8ddb8fc829309a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var offset: Offset = Offset.Zero
              set(value) {
                  if (field != value) {
                      field = value
                      // Note changes to offset do not require the shadow to be recreated, however, the
                      // shadow needs to be redrawn with the updated offset
                      invalidateDraw()
                  }
              }

          override var color: Color = Color.Black
              set(value) {
                  val target =
                      if (value.isSpecified) {
                          value
                      } else {
                          Color.Black
                      }
                  if (field != target) {
                      field = target
                      invalidateShadow()
                  }
              }

          override var brush: Brush? = null
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 71
    endLine: 105
    sha256: cba600fd28039519bc29ab4190820eddfbf755f41e86b4aa858939d0151f7b37
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          "Replace with shadow which accepts ambientColor and spotColor parameters",
          ReplaceWith(
              "Modifier.shadow(elevation, shape, clip, DefaultShadowColor, DefaultShadowColor)",
              "androidx.compose.ui.draw",
          ),
          DeprecationLevel.HIDDEN,
      )
      @Stable
      public fun Modifier.shadow(
          elevation: Dp,
          shape: Shape = RectangleShape,
          clip: Boolean = elevation > 0.dp,
      ): Modifier = shadow(elevation, shape, clip, DefaultShadowColor, DefaultShadowColor)

      /**
       * Creates a [graphicsLayer] that draws a shadow. The [elevation] defines the visual depth of the
       * physical object. The physical object has a shape specified by [shape].
       *
       * If the passed [shape] is concave the shadow will not be drawn on Android versions less than 10.
       *
       * Note that [elevation] is only affecting the shadow size and doesn't change the drawing order. Use
       * a [androidx.compose.ui.zIndex] modifier if you want to draw the elements with larger [elevation]
       * after all the elements with a smaller one.
       *
       * Note that this parameter is only supported on Android 9 (Pie) and above. On older versions, this
       * property always returns [Color.Black] and setting new values is ignored.
       *
       * Usage of this API renders this composable into a separate graphics layer
       *
       * @param elevation The elevation for the shadow in pixels
       * @param shape Defines a shape of the physical object
       * @param clip When active, the content drawing clips to the shape.
       * @param ambientColor Color of the ambient shadow drawn when [elevation] > 0f
       * @param spotColor Color of the spot shadow that is drawn when [elevation] > 0f
       * @sample androidx.compose.ui.samples.ShadowSample
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 736
    endLine: 770
    sha256: e82164984042aa354423a4b225b783dfb75a4228e2be0910d496ed79e95b0997
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }

          override var alpha: Float = 1f
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override var blendMode: BlendMode = BlendMode.SrcOver
              set(value) {
                  if (field != value) {
                      field = value
                      invalidateShadow()
                  }
              }

          override fun onAttach() {
              super.onAttach()
              updateDensity()
          }

          override fun onDensityChange() {
              if (isAttached) updateDensity()
          }

          private fun updateDensity() {
              val newDensity = requireDensity()
              if (densityObject != newDensity) {
                  densityObject = newDensity
                  blockRead = false
                  invalidateShadow()
              }
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 771
    endLine: 805
    sha256: ddf4d6a3998182afb2ded368b691812d345199e517c4b34e129ec101281a6b7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          fun update(shape: Shape, block: DropShadowScope.() -> Unit) {
              this.shape = shape
              this.block = block
          }

          override fun ContentDrawScope.draw() {
              with(obtainPainter()) { draw(size) }
              drawContent()
          }

          private fun obtainPainter(): DropShadowPainter {
              if (!blockRead) {
                  blockRead = true
                  resetShadow()
                  observeReads { block() }
              }
              var shadow = targetShadow
              var painter = shadowPainter
              val tmpBrush = brush
              val radiusDp = radius.toDp()
              val spreadDp = spread.toDp()
              val dpOffset = DpOffset(offset.x.toDp(), offset.y.toDp())
              if (
                  painter == null ||
                      shadow == null ||
                      shadow.radius != radiusDp ||
                      shadow.spread != spreadDp ||
                      shadow.color != color ||
                      shadow.brush != tmpBrush ||
                      shadow.alpha != alpha ||
                      shadow.blendMode != blendMode ||
                      shadow.offset != dpOffset
              ) {
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 806
    endLine: 840
    sha256: c3972ac5a07d7e364d68ff8994818d2ba116b1bf9d146392056bb6e5e7ef6f80
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  shadow =
                      if (tmpBrush != null) {
                              Shadow(radiusDp, tmpBrush, spreadDp, dpOffset, alpha, blendMode)
                          } else {
                              Shadow(radiusDp, color, spreadDp, dpOffset, alpha, blendMode)
                          }
                          .also { targetShadow = it }
                  painter =
                      requireGraphicsContext().shadowContext.createDropShadowPainter(shape, shadow).also {
                          shadowPainter = it
                      }
              }
              return painter
          }

          override fun onObservedReadsChanged() {
              blockRead = false
              invalidateShadow()
          }

          private fun invalidateShadow() {
              targetShadow = null
              shadowPainter = null
              invalidateDraw()
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is BlockDropShadowNode) return false

              if (alpha != other.alpha) return false
              if (shape != other.shape) return false
              if (block !== other.block) return false
              if (radius != other.radius) return false
              if (spread != other.spread) return false
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 841
    endLine: 875
    sha256: 86da30c1be05319087e4da0cb93078189a77c01686b3dd87d61867e432689a6b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (offset != other.offset) return false
              if (color != other.color) return false
              if (brush != other.brush) return false
              if (blendMode != other.blendMode) return false

              return true
          }

          override fun hashCode(): Int {
              var result = alpha.hashCode()
              result = 31 * result + shape.hashCode()
              result = 31 * result + block.hashCode()
              result = 31 * result + radius.hashCode()
              result = 31 * result + spread.hashCode()
              result = 31 * result + offset.hashCode()
              result = 31 * result + color.hashCode()
              result = 31 * result + (brush?.hashCode() ?: 0)
              result = 31 * result + blendMode.hashCode()
              return result
          }
      }

      internal data class ShadowGraphicsLayerElement(
          val elevation: Dp,
          val shape: Shape,
          val clip: Boolean,
          val ambientColor: Color,
          val spotColor: Color,
      ) : ModifierNodeElement<BlockGraphicsLayerModifier>() {

          private fun createBlock(): GraphicsLayerScope.() -> Unit = {
              this.shadowElevation = this@ShadowGraphicsLayerElement.elevation.toPx()
              this.shape = this@ShadowGraphicsLayerElement.shape
              this.clip = this@ShadowGraphicsLayerElement.clip
              this.ambientShadowColor = this@ShadowGraphicsLayerElement.ambientColor
  - id: live-androidx-ui-ui-ui-draw-shadow-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt
    startLine: 876
    endLine: 895
    sha256: 7bf02de7051b1c5058473fbcbbf20c8adfe14b23d773ac422dfa0313f7554213
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              this.spotShadowColor = this@ShadowGraphicsLayerElement.spotColor
          }

          override fun create() = BlockGraphicsLayerModifier(createBlock())

          override fun update(node: BlockGraphicsLayerModifier) {
              node.layerBlock = createBlock()
              node.invalidateLayerBlock()
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "shadow"
              properties["elevation"] = elevation
              properties["shape"] = shape
              properties["clip"] = clip
              properties["ambientColor"] = ambientColor
              properties["spotColor"] = spotColor
          }
      }
compose:
  id: live-androidx-ui-ui-ui-draw-shadow
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.draw
  sections:
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-1
      title: androidx.compose.ui.draw Shadow.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-106
      title: androidx.compose.ui.draw Shadow.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.dropShadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-141
      title: androidx.compose.ui.draw Shadow.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.dropShadow
        - androidx.compose.ui.draw.innerShadow
        - androidx.compose.ui.draw.DropShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-176
      title: androidx.compose.ui.draw Shadow.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.innerShadow
        - androidx.compose.ui.draw.DropShadowScope
        - androidx.compose.ui.draw.InnerShadowScope
        - androidx.compose.ui.draw.ShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-211
      title: androidx.compose.ui.draw Shadow.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.DropShadowScope
        - androidx.compose.ui.draw.ShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-246
      title: androidx.compose.ui.draw Shadow.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.dropShadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-281
      title: androidx.compose.ui.draw Shadow.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.dropShadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-316
      title: androidx.compose.ui.draw Shadow.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.innerShadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-351
      title: androidx.compose.ui.draw Shadow.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-36
      title: androidx.compose.ui.draw Shadow.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-386
      title: androidx.compose.ui.draw Shadow.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.InnerShadowScope
        - androidx.compose.ui.draw.ShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-421
      title: androidx.compose.ui.draw Shadow.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.innerShadow
        - androidx.compose.ui.draw.InnerShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-456
      title: androidx.compose.ui.draw Shadow.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.draw.InnerShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-491
      title: androidx.compose.ui.draw Shadow.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-526
      title: androidx.compose.ui.draw Shadow.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-561
      title: androidx.compose.ui.draw Shadow.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.InnerShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-596
      title: androidx.compose.ui.draw Shadow.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-631
      title: androidx.compose.ui.draw Shadow.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.DropShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-666
      title: androidx.compose.ui.draw Shadow.kt source (lines 666–700)
      aliases:
        - androidx.compose.ui.draw.DropShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-701
      title: androidx.compose.ui.draw Shadow.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-71
      title: androidx.compose.ui.draw Shadow.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-736
      title: androidx.compose.ui.draw Shadow.kt source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-771
      title: androidx.compose.ui.draw Shadow.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.draw.shadow
        - androidx.compose.ui.draw.DropShadowScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-806
      title: androidx.compose.ui.draw Shadow.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-841
      title: androidx.compose.ui.draw Shadow.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-shadow-lines-876
      title: androidx.compose.ui.draw Shadow.kt source (lines 876–895)
      aliases:
        - androidx.compose.ui.draw.shadow
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-shadow-lines-876-source
      relatedIds: []
---

# androidx.compose.ui.draw Shadow.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt

## androidx.compose.ui.draw Shadow.kt source (lines 1–35)

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

package androidx.compose.ui.draw

import androidx.compose.runtime.Stable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.BlockGraphicsLayerModifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.DefaultShadowColor
import androidx.compose.ui.graphics.GraphicsLayerScope
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.drawscope.ContentDrawScope
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.isSpecified
import androidx.compose.ui.graphics.shadow.DropShadowPainter
import androidx.compose.ui.graphics.shadow.InnerShadowPainter
import androidx.compose.ui.graphics.shadow.Shadow

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 106–140)

 * @see graphicsLayer
 *
 * Example usage:
 */
@Stable
public fun Modifier.shadow(
    elevation: Dp,
    shape: Shape = RectangleShape,
    clip: Boolean = elevation > 0.dp,
    ambientColor: Color = DefaultShadowColor,
    spotColor: Color = DefaultShadowColor,
): Modifier =
    if (elevation > 0.dp || clip) {
        this then ShadowGraphicsLayerElement(elevation, shape, clip, ambientColor, spotColor)
    } else {
        this
    }

/**
 * Draws a drop shadow behind the rest of the content with the geometry specified by the given shape
 * and the shadow properties defined by the [Shadow]. This is different than [Modifier.shadow] as
 * this does not introduce a graphicsLayer to render elevation based shadows. This shadow is
 * rendered without a single light source and will render consistently regardless of the on screen
 * position of the content.
 *
 * @param shape Geometry of the shadow
 * @param shadow Properties of the shadow like radius, spread, offset, and fill properties like the
 *   color or brush
 * @sample androidx.compose.ui.samples.DropShadowSample
 */
@Stable
public fun Modifier.dropShadow(shape: Shape, shadow: Shadow): Modifier =
    this then SimpleDropShadowElement(shape, shadow)

/**

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 141–175)

 * Draws a drop shadow behind the rest of the content with the geometry specified by the given shape
 * and the shadow properties defined the [DropShadowScope]. This is different than [Modifier.shadow]
 * as this does not introduce a graphicsLayer to render elevation based shadows. This shadow is
 * rendered without a single light source and will render consistently regardless of the on screen
 * position of the content. This is similar to [Modifier.dropShadow] except that specification of
 * drop shadow parameters is done with the lambda with [DropShadowScope] allows for more efficient
 * transformations for animated use cases without recomposition.
 *
 * @param shape Geometry of the shadow
 * @param block [DropShadowScope] block where shadow properties are defined
 * @sample androidx.compose.ui.samples.DropShadowSample
 */
@Stable
public fun Modifier.dropShadow(shape: Shape, block: DropShadowScope.() -> Unit): Modifier =
    this then BlockDropShadowElement(shape, block)

/**
 * Draws an inner shadow on top of the rest of the content with the geometry specified by the given
 * shape and the shadow properties defined by the [Shadow]. This is different than [Modifier.shadow]
 * as this does not introduce a graphicsLayer to render elevation based shadows. Additionally this
 * shadow will render only within the geometry and can be used to provide a recessed like visual
 * effect. This shadow is rendered without a single light source and will render consistently
 * regardless of the on screen position of the content.
 *
 * @param shape Geometry of the shadow
 * @param shadow Properties of the shadow like radius, spread, offset, and fill properties like the
 *   color or brush
 * @sample androidx.compose.ui.samples.InnerShadowSample
 */
@Stable
public fun Modifier.innerShadow(shape: Shape, shadow: Shadow): Modifier =
    this then SimpleInnerShadowElement(shape, shadow)

/**
 * Draws an inner shadow behind the rest of the content with the geometry specified by the given

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 176–210)

 * shape and the shadow properties defined the [InnerShadowScope]. This is different than
 * [Modifier.shadow] as this does not introduce a graphicsLayer to render elevation based shadows.
 * This shadow is rendered without a single light source and will render consistently regardless of
 * the on screen position of the content. This is similar to [Modifier.innerShadow] except that
 * specification of inner shadow parameters is done with the lambda with [InnerShadowScope] allows
 * for more efficient transformations for animated use cases without recomposition.
 *
 * @param shape Geometry of the shadow
 * @param block [InnerShadowScope] block where shadow properties are defined
 * @sample androidx.compose.ui.samples.InnerShadowSample
 */
@Stable
public fun Modifier.innerShadow(shape: Shape, block: InnerShadowScope.() -> Unit): Modifier =
    this then BlockInnerShadowElement(shape, block)

// Note because we are merging the offset properties into the scoped interface for configuration
// the DropShadow parameters for optimal animations to that avoid recomposition, the exposed
// receiver scope for InnerShadow and DropShadow are more or less identical.
// InnerShadow exposes offset parameters as changes to the offset itself require regeneration of the
// shadow, however, an offset on a DropShadow just translates the shadow content itself.
// Expose a base [ShadowScope] interface with different interfaces for Drop/Inner shadows for
// to support future changes of parameters that are supported in one or the other but not both

/**
 * Scope that provides the capability to configure the properties of a drop shadow in order to
 * support efficient transformations without recomposition
 */
@JvmDefaultWithCompatibility public interface DropShadowScope : ShadowScope

/**
 * Scope that provides the capability to configure the properties of an inner shadow in order to
 * support efficient transformations without recomposition
 */
@JvmDefaultWithCompatibility public interface InnerShadowScope : ShadowScope


Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 211–245)

/**
 * Scope that can be used to define properties to render either a drop shadow or inner shadow. This
 * includes the [radius], [spread], [color], [brush], [alpha], [blendMode], and [offset] parameters.
 */
@JvmDefaultWithCompatibility
public interface ShadowScope : Density {

    /** Blur radius of the shadow, in pixels. Defaults to 0. */
    public var radius: Float

    /** Spread parameter that adds to the size of the shadow, in pixels. Defaults to 0. */
    public var spread: Float

    /**
     * Color of the shadow, Defaults to [Color.Black]. Attempts to provide Color.Unspecified will
     * fallback to rendering with [Color.Black]. This parameter is consumed if [brush] is null.
     */
    public var color: Color

    /** The brush to use for the shadow. If null, the color parameter is consumed instead */
    public var brush: Brush?

    /** Opacity of the shadow. Defaults to 1f indicating a fully opaque shadow */
    public var alpha: Float

    /** Blending algorithm used by the shadow. Defaults to [BlendMode.SrcOver] */
    public var blendMode: BlendMode

    /** Offset of the shadow. Defaults to [Offset.Zero]. */
    public var offset: Offset
}

internal class BlockDropShadowElement(val shape: Shape, val block: DropShadowScope.() -> Unit) :
    ModifierNodeElement<BlockDropShadowNode>() {


Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 246–280)

    override fun create(): BlockDropShadowNode = BlockDropShadowNode(shape, block)

    override fun update(node: BlockDropShadowNode) {
        node.update(shape, block)
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "dropShadow"
        properties["shape"] = shape
        properties["block"] = block
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is BlockDropShadowElement) return false

        if (shape != other.shape) return false
        if (block !== other.block) return false

        return true
    }

    override fun hashCode() = 31 * shape.hashCode() + block.hashCode()
}

internal data class SimpleDropShadowElement(val shape: Shape, val shadow: Shadow) :
    ModifierNodeElement<SimpleDropShadowNode>() {

    override fun create(): SimpleDropShadowNode = SimpleDropShadowNode(shape, shadow)

    override fun update(node: SimpleDropShadowNode) {
        node.update(shape, shadow)
    }

    override fun InspectorInfo.inspectableProperties() {

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 281–315)

        name = "dropShadow"
        properties["shape"] = shape
        properties["dropShadow"] = shadow
    }
}

/**
 * DropShadow ModifierNode implementation that leverages an immutable DropShadow and offset. This is
 * useful for use cases where the shadow itself is not animated
 */
internal class SimpleDropShadowNode(private var shape: Shape, private var shadow: Shadow) :
    DrawModifierNode, Modifier.Node(), ObserverModifierNode {

    private var shadowPainter: DropShadowPainter? = null

    fun update(shape: Shape, shadow: Shadow) {
        val painterInvalidated = this.shape != shape || this.shadow != shadow
        if (painterInvalidated) {
            shadowPainter = null
        }
        this.shape = shape
        this.shadow = shadow
    }

    private fun obtainPainter(): DropShadowPainter =
        shadowPainter
            ?: requireGraphicsContext().shadowContext.createDropShadowPainter(shape, shadow).also {
                shadowPainter = it
            }

    override fun ContentDrawScope.draw() {
        with(obtainPainter()) { draw(size) }
        drawContent()
    }


Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 316–350)

    override fun onObservedReadsChanged() {
        shadowPainter = null
        invalidateDraw()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is SimpleDropShadowNode) return false

        if (shape != other.shape) return false
        if (shadow != other.shadow) return false

        return true
    }

    override fun hashCode(): Int {
        var result = shape.hashCode()
        result = 31 * result + shadow.hashCode()
        return result
    }
}

internal data class SimpleInnerShadowElement(val shape: Shape, val shadow: Shadow) :
    ModifierNodeElement<SimpleInnerShadowNode>() {

    override fun create(): SimpleInnerShadowNode = SimpleInnerShadowNode(shape, shadow)

    override fun update(node: SimpleInnerShadowNode) {
        node.update(shape, shadow)
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "innerShadow"
        properties["shape"] = shape
        properties["innerShadow"] = shadow

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 351–385)

    }
}

/**
 * InnerShadow ModifierNode implementation that leverages an immutable InnerShadow and offset. This
 * is useful for use cases where the shadow itself is not animated
 */
internal class SimpleInnerShadowNode(private var shape: Shape, private var shadow: Shadow) :
    DrawModifierNode, Modifier.Node(), ObserverModifierNode {

    private var innerShadowPainter: InnerShadowPainter? = null

    fun update(shape: Shape, shadow: Shadow) {
        val painterInvalidated = this.shape != shape || this.shadow != shadow
        if (painterInvalidated) {
            innerShadowPainter = null
        }
        this.shape = shape
        this.shadow = shadow
    }

    private fun obtainPainter(): InnerShadowPainter =
        innerShadowPainter
            ?: requireGraphicsContext().shadowContext.createInnerShadowPainter(shape, shadow).also {
                innerShadowPainter = it
            }

    override fun ContentDrawScope.draw() {
        with(obtainPainter()) { draw(size) }
        drawContent()
    }

    override fun onObservedReadsChanged() {
        innerShadowPainter = null
        invalidateDraw()

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 36–70)

import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.node.DrawModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.ObserverModifierNode
import androidx.compose.ui.node.invalidateDraw
import androidx.compose.ui.node.observeReads
import androidx.compose.ui.node.requireDensity
import androidx.compose.ui.node.requireGraphicsContext
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.DpOffset
import androidx.compose.ui.unit.dp

/**
 * Creates a [graphicsLayer] that draws a shadow. The [elevation] defines the visual depth of the
 * physical object. The physical object has a shape specified by [shape].
 *
 * If the passed [shape] is concave the shadow will not be drawn on Android versions less than 10.
 *
 * Note that [elevation] is only affecting the shadow size and doesn't change the drawing order. Use
 * a [androidx.compose.ui.zIndex] modifier if you want to draw the elements with larger [elevation]
 * after all the elements with a smaller one.
 *
 * Usage of this API renders this composable into a separate graphics layer
 *
 * @param elevation The elevation for the shadow in pixels
 * @param shape Defines a shape of the physical object
 * @param clip When active, the content drawing clips to the shape.
 * @sample androidx.compose.ui.samples.ShadowSample
 * @see graphicsLayer
 *
 * Example usage:
 */
@Deprecated(

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 386–420)

    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as SimpleInnerShadowNode

        if (shape != other.shape) return false
        if (shadow != other.shadow) return false

        return true
    }

    override fun hashCode(): Int {
        var result = shape.hashCode()
        result = 31 * result + shadow.hashCode()
        return result
    }
}

/** Resets all shadow properties to their default values */
private fun ShadowScope.resetShadow() {
    this.radius = 0f
    this.spread = 0f
    this.offset = Offset.Zero
    this.color = Color.Black
    this.brush = null
    this.alpha = 1f
    this.blendMode = BlendMode.SrcOver
}

internal class BlockInnerShadowElement(val shape: Shape, val block: InnerShadowScope.() -> Unit) :
    ModifierNodeElement<BlockInnerShadowNode>() {


Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 421–455)

    override fun create(): BlockInnerShadowNode = BlockInnerShadowNode(shape, block)

    override fun update(node: BlockInnerShadowNode) {
        node.update(shape, block)
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "innerShadow"
        properties["shape"] = shape
        properties["block"] = block
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is BlockInnerShadowElement) return false

        if (shape != other.shape) return false
        if (block !== other.block) return false

        return true
    }

    override fun hashCode() = 31 * shape.hashCode() + block.hashCode()
}

/**
 * InnerShadow ModifierNode implementation that leverages a receiver scope for mutable inner shadow
 * properties. This is useful for use cases where the shadow itself is animated and minimizing
 * recompositions is desired.
 */
internal class BlockInnerShadowNode(shape: Shape, block: InnerShadowScope.() -> Unit) :
    DrawModifierNode, Modifier.Node(), ObserverModifierNode, InnerShadowScope {

    private var densityObject: Density? = null
    private var targetShadow: Shadow? = null

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 456–490)

    private var shadowPainter: InnerShadowPainter? = null
    private var blockRead = false

    private var shape: Shape = shape
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    private var block: InnerShadowScope.() -> Unit = block
        set(value) {
            if (field !== value) {
                field = value
                blockRead = false
                invalidateDraw()
            }
        }

    override val density: Float
        get() = densityObject?.density ?: 1f

    override val fontScale: Float
        get() = densityObject?.fontScale ?: 1f

    override var radius: Float = 0f
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var spread: Float = 0f

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 491–525)

        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var offset: Offset = Offset.Zero
        set(value) {
            if (field != value) {
                field = value
                // Unlike the DropShadow ModifierNode implementation, changes to the offset of an
                // inner shadow require the shadow to be recreated
                invalidateShadow()
            }
        }

    override var color: Color = Color.Black
        set(value) {
            val target =
                if (value.isSpecified) {
                    value
                } else {
                    Color.Black
                }
            if (field != target) {
                field = target
                invalidateShadow()
            }
        }

    override var brush: Brush? = null
        set(value) {
            if (field != value) {
                field = value

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 526–560)

                invalidateShadow()
            }
        }

    override var alpha: Float = 1f
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var blendMode: BlendMode = BlendMode.SrcOver
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override fun onAttach() {
        super.onAttach()
        updateDensity()
    }

    override fun onDensityChange() {
        if (isAttached) updateDensity()
    }

    private fun updateDensity() {
        val newDensity = requireDensity()
        if (densityObject != newDensity) {
            densityObject = newDensity
            blockRead = false
            invalidateShadow()

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 561–595)

        }
    }

    fun update(shape: Shape, block: InnerShadowScope.() -> Unit) {
        this.shape = shape
        this.block = block
    }

    override fun ContentDrawScope.draw() {
        with(obtainPainter()) { draw(size) }
        drawContent()
    }

    private fun obtainPainter(): InnerShadowPainter {
        if (!blockRead) {
            blockRead = true
            resetShadow()
            observeReads { block(this) }
        }
        var shadow = targetShadow
        var painter = shadowPainter
        val tmpBrush = brush
        val radiusDp = radius.toDp()
        val spreadDp = spread.toDp()
        val dpOffset = DpOffset(offset.x.toDp(), offset.y.toDp())
        if (
            painter == null ||
                shadow == null ||
                shadow.radius != radiusDp ||
                shadow.spread != spreadDp ||
                shadow.color != color ||
                shadow.brush != tmpBrush ||
                shadow.alpha != alpha ||
                shadow.blendMode != blendMode ||
                shadow.offset != dpOffset

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 596–630)

        ) {
            shadow =
                if (tmpBrush != null) {
                        Shadow(radiusDp, tmpBrush, spreadDp, dpOffset, alpha, blendMode)
                    } else {
                        Shadow(radiusDp, color, spreadDp, dpOffset, alpha, blendMode)
                    }
                    .also { targetShadow = it }
            painter =
                requireGraphicsContext()
                    .shadowContext
                    .createInnerShadowPainter(shape, shadow)
                    .also { shadowPainter = it }
        }
        return painter
    }

    override fun onObservedReadsChanged() {
        blockRead = false
        invalidateShadow()
    }

    private fun invalidateShadow() {
        targetShadow = null
        shadowPainter = null
        invalidateDraw()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is BlockInnerShadowNode) return false

        if (alpha != other.alpha) return false
        if (shape != other.shape) return false
        if (block !== other.block) return false

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 631–665)

        if (radius != other.radius) return false
        if (spread != other.spread) return false
        if (offset != other.offset) return false
        if (color != other.color) return false
        if (brush != other.brush) return false
        if (blendMode != other.blendMode) return false

        return true
    }

    override fun hashCode(): Int {
        var result = alpha.hashCode()
        result = 31 * result + shape.hashCode()
        result = 31 * result + block.hashCode()
        result = 31 * result + radius.hashCode()
        result = 31 * result + spread.hashCode()
        result = 31 * result + offset.hashCode()
        result = 31 * result + color.hashCode()
        result = 31 * result + (brush?.hashCode() ?: 0)
        result = 31 * result + blendMode.hashCode()
        return result
    }
}

/**
 * DropShadow ModifierNode implementation that leverages a receiver scope for mutable drop shadow
 * properties and translation offset. This is useful for use cases where the shadow itself is
 * animated and minimizing recompositions is desired.
 */
internal class BlockDropShadowNode(shape: Shape, block: DropShadowScope.() -> Unit) :
    DrawModifierNode, Modifier.Node(), ObserverModifierNode, DropShadowScope {

    private var densityObject: Density? = null
    private var targetShadow: Shadow? = null
    private var shadowPainter: DropShadowPainter? = null

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 666–700)

    private var blockRead = false

    private var shape: Shape = shape
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    private var block: DropShadowScope.() -> Unit = block
        set(value) {
            if (field !== value) {
                field = value
                blockRead = false
                invalidateDraw()
            }
        }

    override val density: Float
        get() = densityObject?.density ?: 1f

    override val fontScale: Float
        get() = densityObject?.fontScale ?: 1f

    override var radius: Float = 0f
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var spread: Float = 0f
        set(value) {

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 701–735)

            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var offset: Offset = Offset.Zero
        set(value) {
            if (field != value) {
                field = value
                // Note changes to offset do not require the shadow to be recreated, however, the
                // shadow needs to be redrawn with the updated offset
                invalidateDraw()
            }
        }

    override var color: Color = Color.Black
        set(value) {
            val target =
                if (value.isSpecified) {
                    value
                } else {
                    Color.Black
                }
            if (field != target) {
                field = target
                invalidateShadow()
            }
        }

    override var brush: Brush? = null
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 71–105)

    "Replace with shadow which accepts ambientColor and spotColor parameters",
    ReplaceWith(
        "Modifier.shadow(elevation, shape, clip, DefaultShadowColor, DefaultShadowColor)",
        "androidx.compose.ui.draw",
    ),
    DeprecationLevel.HIDDEN,
)
@Stable
public fun Modifier.shadow(
    elevation: Dp,
    shape: Shape = RectangleShape,
    clip: Boolean = elevation > 0.dp,
): Modifier = shadow(elevation, shape, clip, DefaultShadowColor, DefaultShadowColor)

/**
 * Creates a [graphicsLayer] that draws a shadow. The [elevation] defines the visual depth of the
 * physical object. The physical object has a shape specified by [shape].
 *
 * If the passed [shape] is concave the shadow will not be drawn on Android versions less than 10.
 *
 * Note that [elevation] is only affecting the shadow size and doesn't change the drawing order. Use
 * a [androidx.compose.ui.zIndex] modifier if you want to draw the elements with larger [elevation]
 * after all the elements with a smaller one.
 *
 * Note that this parameter is only supported on Android 9 (Pie) and above. On older versions, this
 * property always returns [Color.Black] and setting new values is ignored.
 *
 * Usage of this API renders this composable into a separate graphics layer
 *
 * @param elevation The elevation for the shadow in pixels
 * @param shape Defines a shape of the physical object
 * @param clip When active, the content drawing clips to the shape.
 * @param ambientColor Color of the ambient shadow drawn when [elevation] > 0f
 * @param spotColor Color of the spot shadow that is drawn when [elevation] > 0f
 * @sample androidx.compose.ui.samples.ShadowSample

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 736–770)

            }
        }

    override var alpha: Float = 1f
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override var blendMode: BlendMode = BlendMode.SrcOver
        set(value) {
            if (field != value) {
                field = value
                invalidateShadow()
            }
        }

    override fun onAttach() {
        super.onAttach()
        updateDensity()
    }

    override fun onDensityChange() {
        if (isAttached) updateDensity()
    }

    private fun updateDensity() {
        val newDensity = requireDensity()
        if (densityObject != newDensity) {
            densityObject = newDensity
            blockRead = false
            invalidateShadow()
        }

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 771–805)

    }

    fun update(shape: Shape, block: DropShadowScope.() -> Unit) {
        this.shape = shape
        this.block = block
    }

    override fun ContentDrawScope.draw() {
        with(obtainPainter()) { draw(size) }
        drawContent()
    }

    private fun obtainPainter(): DropShadowPainter {
        if (!blockRead) {
            blockRead = true
            resetShadow()
            observeReads { block() }
        }
        var shadow = targetShadow
        var painter = shadowPainter
        val tmpBrush = brush
        val radiusDp = radius.toDp()
        val spreadDp = spread.toDp()
        val dpOffset = DpOffset(offset.x.toDp(), offset.y.toDp())
        if (
            painter == null ||
                shadow == null ||
                shadow.radius != radiusDp ||
                shadow.spread != spreadDp ||
                shadow.color != color ||
                shadow.brush != tmpBrush ||
                shadow.alpha != alpha ||
                shadow.blendMode != blendMode ||
                shadow.offset != dpOffset
        ) {

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 806–840)

            shadow =
                if (tmpBrush != null) {
                        Shadow(radiusDp, tmpBrush, spreadDp, dpOffset, alpha, blendMode)
                    } else {
                        Shadow(radiusDp, color, spreadDp, dpOffset, alpha, blendMode)
                    }
                    .also { targetShadow = it }
            painter =
                requireGraphicsContext().shadowContext.createDropShadowPainter(shape, shadow).also {
                    shadowPainter = it
                }
        }
        return painter
    }

    override fun onObservedReadsChanged() {
        blockRead = false
        invalidateShadow()
    }

    private fun invalidateShadow() {
        targetShadow = null
        shadowPainter = null
        invalidateDraw()
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is BlockDropShadowNode) return false

        if (alpha != other.alpha) return false
        if (shape != other.shape) return false
        if (block !== other.block) return false
        if (radius != other.radius) return false
        if (spread != other.spread) return false

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 841–875)

        if (offset != other.offset) return false
        if (color != other.color) return false
        if (brush != other.brush) return false
        if (blendMode != other.blendMode) return false

        return true
    }

    override fun hashCode(): Int {
        var result = alpha.hashCode()
        result = 31 * result + shape.hashCode()
        result = 31 * result + block.hashCode()
        result = 31 * result + radius.hashCode()
        result = 31 * result + spread.hashCode()
        result = 31 * result + offset.hashCode()
        result = 31 * result + color.hashCode()
        result = 31 * result + (brush?.hashCode() ?: 0)
        result = 31 * result + blendMode.hashCode()
        return result
    }
}

internal data class ShadowGraphicsLayerElement(
    val elevation: Dp,
    val shape: Shape,
    val clip: Boolean,
    val ambientColor: Color,
    val spotColor: Color,
) : ModifierNodeElement<BlockGraphicsLayerModifier>() {

    private fun createBlock(): GraphicsLayerScope.() -> Unit = {
        this.shadowElevation = this@ShadowGraphicsLayerElement.elevation.toPx()
        this.shape = this@ShadowGraphicsLayerElement.shape
        this.clip = this@ShadowGraphicsLayerElement.clip
        this.ambientShadowColor = this@ShadowGraphicsLayerElement.ambientColor

Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)

## androidx.compose.ui.draw Shadow.kt source (lines 876–895)

        this.spotShadowColor = this@ShadowGraphicsLayerElement.spotColor
    }

    override fun create() = BlockGraphicsLayerModifier(createBlock())

    override fun update(node: BlockGraphicsLayerModifier) {
        node.layerBlock = createBlock()
        node.invalidateLayerBlock()
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "shadow"
        properties["elevation"] = elevation
        properties["shape"] = shape
        properties["clip"] = clip
        properties["ambientColor"] = ambientColor
        properties["spotColor"] = spotColor
    }
}


Sources: [live-androidx-ui-ui-ui-draw-shadow-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/Shadow.kt)
