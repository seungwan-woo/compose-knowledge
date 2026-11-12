---
type: reference
title: androidx.compose.ui.draw DrawModifier.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 1
    endLine: 35
    sha256: b3ef13acd309dcd62f648447051a407cc806ebe3c403081a7e2c75069af9eca7
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

      package androidx.compose.ui.draw

      import androidx.collection.MutableObjectList
      import androidx.collection.mutableObjectListOf
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.graphics.Canvas
      import androidx.compose.ui.graphics.GraphicsContext
      import androidx.compose.ui.graphics.drawscope.ContentDrawScope
      import androidx.compose.ui.graphics.drawscope.DrawScope
      import androidx.compose.ui.graphics.layer.GraphicsLayer
      import androidx.compose.ui.graphics.shadow.DropShadowPainter
      import androidx.compose.ui.graphics.shadow.InnerShadowPainter
      import androidx.compose.ui.graphics.shadow.ShadowContext
      import androidx.compose.ui.internal.JvmDefaultWithCompatibility
      import androidx.compose.ui.internal.checkPrecondition
      import androidx.compose.ui.internal.checkPreconditionNotNull
      import androidx.compose.ui.node.DrawModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 106
    endLine: 140
    sha256: 3cad85233308eeca91798e2add7446f5d1be0b4ae9a7dbccd2bf4ab0a65197fa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              properties["onDraw"] = onDraw
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is DrawBehindElement) return false

              if (onDraw !== other.onDraw) return false

              return true
          }

          override fun hashCode(): Int {
              return onDraw.hashCode()
          }
      }

      internal class DrawBackgroundModifier(var onDraw: DrawScope.() -> Unit) :
          Modifier.Node(), DrawModifierNode {

          override fun ContentDrawScope.draw() {
              onDraw()
              drawContent()
          }
      }

      /**
       * Draw into a [DrawScope] with content that is persisted across draw calls as long as the size of
       * the drawing area is the same or any state objects that are read have not changed. In the event
       * that the drawing area changes, or the underlying state values that are being read change, this
       * method is invoked again to recreate objects to be used during drawing
       *
       * For example, a [androidx.compose.ui.graphics.LinearGradient] that is to occupy the full bounds of
       * the drawing area can be created once the size has been defined and referenced for subsequent draw
       * calls without having to re-allocate.
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 141
    endLine: 175
    sha256: f4afca87ba43faf95f2516a4cdfeb2598c45dfa6c74ed3f35501bb9c98194a9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.ui.samples.DrawWithCacheModifierSample
       * @sample androidx.compose.ui.samples.DrawWithCacheModifierStateParameterSample
       * @sample androidx.compose.ui.samples.DrawWithCacheContentSample
       */
      public fun Modifier.drawWithCache(onBuildDrawCache: CacheDrawScope.() -> DrawResult): Modifier =
          this then DrawWithCacheElement(onBuildDrawCache)

      private class DrawWithCacheElement(val onBuildDrawCache: CacheDrawScope.() -> DrawResult) :
          ModifierNodeElement<CacheDrawModifierNodeImpl>() {
          override fun create(): CacheDrawModifierNodeImpl {
              return CacheDrawModifierNodeImpl(CacheDrawScope(), onBuildDrawCache)
          }

          override fun update(node: CacheDrawModifierNodeImpl) {
              node.block = onBuildDrawCache
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "drawWithCache"
              properties["onBuildDrawCache"] = onBuildDrawCache
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is DrawWithCacheElement) return false

              if (onBuildDrawCache !== other.onBuildDrawCache) return false

              return true
          }

          override fun hashCode(): Int {
              return onBuildDrawCache.hashCode()
          }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 176
    endLine: 210
    sha256: 9c83d21362f010f8b57d9378e45b5ca3105256b6da3fa56e05f29df8f1b4ff4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      public fun CacheDrawModifierNode(
          onBuildDrawCache: CacheDrawScope.() -> DrawResult
      ): CacheDrawModifierNode {
          return CacheDrawModifierNodeImpl(CacheDrawScope(), onBuildDrawCache)
      }

      /**
       * Expands on the [androidx.compose.ui.node.DrawModifierNode] by adding the ability to invalidate
       * the draw cache for changes in things like shapes and bitmaps (see Modifier.border for a usage
       * examples).
       */
      public sealed interface CacheDrawModifierNode : DrawModifierNode {
          public fun invalidateDrawCache()
      }

      /**
       * Wrapper [GraphicsContext] implementation that maintains a list of the [GraphicsLayer] instances
       * that were created through this instance so it can release only those [GraphicsLayer]s when it is
       * disposed of within the corresponding Modifier is disposed
       */
      private class ScopedGraphicsContext : GraphicsContext {

          private var allocatedGraphicsLayers: MutableObjectList<GraphicsLayer>? = null

          var graphicsContext: GraphicsContext? = null
              set(value) {
                  releaseGraphicsLayers()
                  field = value
              }

          override fun createGraphicsLayer(): GraphicsLayer {
              val gContext = graphicsContext
              checkPrecondition(gContext != null) { "GraphicsContext not provided" }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 211
    endLine: 245
    sha256: f445bab89cb6ae0114134e9fb54609d85225dd3654543ba429c35de3674a62f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              val layer = gContext.createGraphicsLayer()
              val layers = allocatedGraphicsLayers
              if (layers == null) {
                  mutableObjectListOf(layer).also { allocatedGraphicsLayers = it }
              } else {
                  layers.add(layer)
              }

              return layer
          }

          override fun releaseGraphicsLayer(layer: GraphicsLayer) {
              graphicsContext?.releaseGraphicsLayer(layer)
          }

          override val shadowContext: ShadowContext
              get() {
                  val gContext = graphicsContext
                  checkPrecondition(gContext != null) { "GraphicsContext not provided" }
                  return gContext.shadowContext
              }

          fun releaseGraphicsLayers() {
              allocatedGraphicsLayers?.let { layers ->
                  layers.forEach { layer -> releaseGraphicsLayer(layer) }
                  layers.clear()
              }
          }
      }

      private class CacheDrawModifierNodeImpl(
          private val cacheDrawScope: CacheDrawScope,
          block: CacheDrawScope.() -> DrawResult,
      ) : Modifier.Node(), CacheDrawModifierNode, ObserverModifierNode, BuildDrawCacheParams {
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 246
    endLine: 280
    sha256: 96dac228ce2af44f1c6e02b9039aa070807146892bea9545fe1d8695339828ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          private var isCacheValid = false
          private var cachedGraphicsContext: ScopedGraphicsContext? = null

          var block: CacheDrawScope.() -> DrawResult = block
              set(value) {
                  field = value
                  invalidateDrawCache()
              }

          init {
              cacheDrawScope.cacheParams = this
              cacheDrawScope.graphicsContextProvider = { graphicsContext }
          }

          override val density: Density
              get() = requireDensity()

          override val layoutDirection: LayoutDirection
              get() = requireLayoutDirection()

          override val size: Size
              get() = requireCoordinator(Nodes.Draw).size.toSize()

          val graphicsContext: GraphicsContext
              get() {
                  var localGraphicsContext = cachedGraphicsContext
                  if (localGraphicsContext == null) {
                      localGraphicsContext = ScopedGraphicsContext().also { cachedGraphicsContext = it }
                  }
                  if (localGraphicsContext.graphicsContext == null) {
                      localGraphicsContext.graphicsContext = requireGraphicsContext()
                  }
                  return localGraphicsContext
              }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 281
    endLine: 315
    sha256: f71c8b11599b634224a57e7446c162e46cdadcfebffe656706a4364ad3111422
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun onDetach() {
              super.onDetach()
              cachedGraphicsContext?.releaseGraphicsLayers()
          }

          override fun onReset() {
              super.onReset()
              invalidateDrawCache()
          }

          override fun onMeasureResultChanged() {
              invalidateDrawCache()
          }

          override fun onObservedReadsChanged() {
              invalidateDrawCache()
          }

          override fun invalidateDrawCache() {
              // Release all previously allocated graphics layers to the recycling pool
              // if a layer is needed in a subsequent draw, it will be obtained from the pool again and
              // reused
              cachedGraphicsContext?.releaseGraphicsLayers()
              isCacheValid = false
              cacheDrawScope.drawResult = null
              invalidateDraw()
          }

          override fun onDensityChange() {
              invalidateDrawCache()
          }

          override fun onLayoutDirectionChange() {
              invalidateDrawCache()
          }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 316
    endLine: 350
    sha256: 8f462ef558e63ff3bb8033b016c4269315f1391f166706fab4d146d444638487
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          private fun getOrBuildCachedDrawBlock(contentDrawScope: ContentDrawScope): DrawResult {
              if (!isCacheValid) {
                  cacheDrawScope.apply {
                      drawResult = null
                      this.contentDrawScope = contentDrawScope
                      observeReads { block() }
                      checkPreconditionNotNull(drawResult) {
                          "DrawResult not defined, did you forget to call onDraw?"
                      }
                  }
                  isCacheValid = true
              }
              return cacheDrawScope.drawResult!!
          }

          override fun ContentDrawScope.draw() {
              getOrBuildCachedDrawBlock(this).block(this)
          }
      }

      /**
       * Handle to a drawing environment that enables caching of content based on the resolved size.
       * Consumers define parameters and refer to them in the captured draw callback provided in
       * [onDrawBehind] or [onDrawWithContent].
       *
       * [onDrawBehind] will draw behind the layout's drawing contents however, [onDrawWithContent] will
       * provide the ability to draw before or after the layout's contents
       */
      public class CacheDrawScope internal constructor() : Density {
          internal var cacheParams: BuildDrawCacheParams = EmptyBuildDrawCacheParams
          internal var drawResult: DrawResult? = null
          internal var contentDrawScope: ContentDrawScope? = null
          internal var graphicsContextProvider: (() -> GraphicsContext)? = null
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 351
    endLine: 385
    sha256: 392abfc90a6334c356d63ac29f427c07bab0d80a71797f8d4490dac2a437fe99
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** Provides the dimensions of the current drawing environment */
          public val size: Size
              get() = cacheParams.size

          /** Provides the [LayoutDirection]. */
          public val layoutDirection: LayoutDirection
              get() = cacheParams.layoutDirection

          /**
           * Returns a managed [GraphicsLayer] instance. This [GraphicsLayer] maybe newly created or
           * return a previously allocated instance. Consumers are not expected to release this instance
           * as it is automatically recycled upon invalidation of the CacheDrawScope and released when the
           * [DrawCacheModifier] is detached.
           */
          public fun obtainGraphicsLayer(): GraphicsLayer =
              graphicsContextProvider!!.invoke().createGraphicsLayer()

          /**
           * Returns the [ShadowContext] used to create [InnerShadowPainter] and [DropShadowPainter] to
           * render inner and drop shadows respectively
           */
          public fun obtainShadowContext(): ShadowContext =
              graphicsContextProvider!!.invoke().shadowContext

          /**
           * Record the drawing commands into the [GraphicsLayer] with the [Density], [LayoutDirection]
           * and [Size] are given from the provided [CacheDrawScope]
           */
          public fun GraphicsLayer.record(
              density: Density = this@CacheDrawScope,
              layoutDirection: LayoutDirection = this@CacheDrawScope.layoutDirection,
              size: IntSize = this@CacheDrawScope.size.toIntSize(),
              block: ContentDrawScope.() -> Unit,
          ) {
              val scope = contentDrawScope!!
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 36
    endLine: 70
    sha256: aab6bedf211a3ea00baed237259d5fb63a020c1c2d1c84d791aeb731d3e3a264
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.node.Nodes
      import androidx.compose.ui.node.ObserverModifierNode
      import androidx.compose.ui.node.invalidateDraw
      import androidx.compose.ui.node.observeReads
      import androidx.compose.ui.node.requireCoordinator
      import androidx.compose.ui.node.requireDensity
      import androidx.compose.ui.node.requireGraphicsContext
      import androidx.compose.ui.node.requireLayoutDirection
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.toIntSize
      import androidx.compose.ui.unit.toSize

      /** A [Modifier.Element] that draws into the space of the layout. */
      @JvmDefaultWithCompatibility
      public interface DrawModifier : Modifier.Element {

          public fun ContentDrawScope.draw()
      }

      /**
       * [DrawModifier] implementation that supports building a cache of objects to be referenced across
       * draw calls
       */
      @JvmDefaultWithCompatibility
      public interface DrawCacheModifier : DrawModifier {

          /**
           * Callback invoked to re-build objects to be re-used across draw calls. This is useful to
           * conditionally recreate objects only if the size of the drawing environment changes, or if
           * state parameters that are inputs to objects change. This method is guaranteed to be called
           * before [DrawModifier.draw].
           *
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 386
    endLine: 420
    sha256: f4f6661f7a11957207044cc114c4b8f25e1aa8509bae99f0701ebdbeda123e33
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              with(scope) {
                  val prevDensity = drawContext.density
                  val prevLayoutDirection = drawContext.layoutDirection
                  record(size) {
                      drawContext.apply {
                          this.density = density
                          this.layoutDirection = layoutDirection
                      }
                      try {
                          block(scope)
                      } finally {
                          drawContext.apply {
                              this.density = prevDensity
                              this.layoutDirection = prevLayoutDirection
                          }
                      }
                  }
              }
          }

          /** Issue drawing commands to be executed before the layout content is drawn */
          public fun onDrawBehind(block: DrawScope.() -> Unit): DrawResult = onDrawWithContent {
              block()
              drawContent()
          }

          /** Issue drawing commands before or after the layout's drawing contents */
          public fun onDrawWithContent(block: ContentDrawScope.() -> Unit): DrawResult {
              return DrawResult(block).also { drawResult = it }
          }

          public override val density: Float
              get() = cacheParams.density.density

          public override val fontScale: Float
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 421
    endLine: 455
    sha256: 6ed36cc047e24fc516e74b85fc2bcb13f70548fc5a48fbc47c363629bc2528b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              get() = cacheParams.density.fontScale
      }

      private object EmptyBuildDrawCacheParams : BuildDrawCacheParams {
          override val size: Size = Size.Unspecified
          override val layoutDirection: LayoutDirection = LayoutDirection.Ltr
          override val density: Density = Density(1f, 1f)
      }

      /**
       * Holder to a callback to be invoked during draw operations. This lambda captures and reuses
       * parameters defined within the CacheDrawScope receiver scope lambda.
       */
      public class DrawResult internal constructor(internal var block: ContentDrawScope.() -> Unit)

      /**
       * Creates a [DrawModifier] that allows the developer to draw before or after the layout's contents.
       * It also allows the modifier to adjust the layout's canvas.
       */
      public fun Modifier.drawWithContent(onDraw: ContentDrawScope.() -> Unit): Modifier =
          this then DrawWithContentElement(onDraw)

      private class DrawWithContentElement(val onDraw: ContentDrawScope.() -> Unit) :
          ModifierNodeElement<DrawWithContentModifier>() {
          override fun create() = DrawWithContentModifier(onDraw)

          override fun update(node: DrawWithContentModifier) {
              node.onDraw = onDraw
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "drawWithContent"
              properties["onDraw"] = onDraw
          }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 456
    endLine: 477
    sha256: 9b25a00edf91d0310a0b8c8ee1d3667f45ed1d97c343a48fd7055f31db04f56d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is DrawWithContentElement) return false

              if (onDraw !== other.onDraw) return false

              return true
          }

          override fun hashCode(): Int {
              return onDraw.hashCode()
          }
      }

      private class DrawWithContentModifier(var onDraw: ContentDrawScope.() -> Unit) :
          Modifier.Node(), DrawModifierNode {

          override fun ContentDrawScope.draw() {
              onDraw()
          }
      }
  - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt
    startLine: 71
    endLine: 105
    sha256: de32733e52251c9cd9cab05870aec0bce97cc00847f96b56e8ae884ef63551b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param params The params to be used to build the cache.
           */
          public fun onBuildCache(params: BuildDrawCacheParams)
      }

      /**
       * The set of parameters which could be used to build the drawing cache.
       *
       * @see DrawCacheModifier.onBuildCache
       */
      public interface BuildDrawCacheParams {
          /** The current size of the drawing environment */
          public val size: Size

          /** The current layout direction. */
          public val layoutDirection: LayoutDirection

          /** The current screen density to provide the ability to convert between */
          public val density: Density
      }

      /** Draw into a [Canvas] behind the modified content. */
      public fun Modifier.drawBehind(onDraw: DrawScope.() -> Unit): Modifier =
          this then DrawBehindElement(onDraw)

      private class DrawBehindElement(val onDraw: DrawScope.() -> Unit) :
          ModifierNodeElement<DrawBackgroundModifier>() {
          override fun create() = DrawBackgroundModifier(onDraw)

          override fun update(node: DrawBackgroundModifier) {
              node.onDraw = onDraw
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "drawBehind"
compose:
  id: live-androidx-ui-ui-ui-draw-drawmodifier
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.draw
  sections:
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-1
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-106
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-141
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.draw.drawWithCache
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-176
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.draw.CacheDrawModifierNode
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-211
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.draw.BuildDrawCacheParams
        - androidx.compose.ui.draw.CacheDrawModifierNode
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-246
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-281
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-316
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.draw.BuildDrawCacheParams
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-351
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.draw.DrawCacheModifier
        - androidx.compose.ui.draw.CacheDrawScope
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-36
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.draw.DrawModifier
        - androidx.compose.ui.draw.DrawCacheModifier
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-386
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.draw.DrawResult
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-421
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.draw.DrawModifier
        - androidx.compose.ui.draw.BuildDrawCacheParams
        - androidx.compose.ui.draw.CacheDrawScope
        - androidx.compose.ui.draw.DrawResult
        - androidx.compose.ui.draw.drawWithContent
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-456
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 456–477)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-ui-draw-drawmodifier-lines-71
      title: androidx.compose.ui.draw DrawModifier.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.draw.DrawCacheModifier
        - androidx.compose.ui.draw.BuildDrawCacheParams
        - androidx.compose.ui.draw.drawBehind
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-androidx-ui-ui-ui-draw-drawmodifier-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.draw DrawModifier.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt

## androidx.compose.ui.draw DrawModifier.kt source (lines 1–35)

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

package androidx.compose.ui.draw

import androidx.collection.MutableObjectList
import androidx.collection.mutableObjectListOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Canvas
import androidx.compose.ui.graphics.GraphicsContext
import androidx.compose.ui.graphics.drawscope.ContentDrawScope
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.layer.GraphicsLayer
import androidx.compose.ui.graphics.shadow.DropShadowPainter
import androidx.compose.ui.graphics.shadow.InnerShadowPainter
import androidx.compose.ui.graphics.shadow.ShadowContext
import androidx.compose.ui.internal.JvmDefaultWithCompatibility
import androidx.compose.ui.internal.checkPrecondition
import androidx.compose.ui.internal.checkPreconditionNotNull
import androidx.compose.ui.node.DrawModifierNode
import androidx.compose.ui.node.ModifierNodeElement

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 106–140)

        properties["onDraw"] = onDraw
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is DrawBehindElement) return false

        if (onDraw !== other.onDraw) return false

        return true
    }

    override fun hashCode(): Int {
        return onDraw.hashCode()
    }
}

internal class DrawBackgroundModifier(var onDraw: DrawScope.() -> Unit) :
    Modifier.Node(), DrawModifierNode {

    override fun ContentDrawScope.draw() {
        onDraw()
        drawContent()
    }
}

/**
 * Draw into a [DrawScope] with content that is persisted across draw calls as long as the size of
 * the drawing area is the same or any state objects that are read have not changed. In the event
 * that the drawing area changes, or the underlying state values that are being read change, this
 * method is invoked again to recreate objects to be used during drawing
 *
 * For example, a [androidx.compose.ui.graphics.LinearGradient] that is to occupy the full bounds of
 * the drawing area can be created once the size has been defined and referenced for subsequent draw
 * calls without having to re-allocate.

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 141–175)

 *
 * @sample androidx.compose.ui.samples.DrawWithCacheModifierSample
 * @sample androidx.compose.ui.samples.DrawWithCacheModifierStateParameterSample
 * @sample androidx.compose.ui.samples.DrawWithCacheContentSample
 */
public fun Modifier.drawWithCache(onBuildDrawCache: CacheDrawScope.() -> DrawResult): Modifier =
    this then DrawWithCacheElement(onBuildDrawCache)

private class DrawWithCacheElement(val onBuildDrawCache: CacheDrawScope.() -> DrawResult) :
    ModifierNodeElement<CacheDrawModifierNodeImpl>() {
    override fun create(): CacheDrawModifierNodeImpl {
        return CacheDrawModifierNodeImpl(CacheDrawScope(), onBuildDrawCache)
    }

    override fun update(node: CacheDrawModifierNodeImpl) {
        node.block = onBuildDrawCache
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "drawWithCache"
        properties["onBuildDrawCache"] = onBuildDrawCache
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is DrawWithCacheElement) return false

        if (onBuildDrawCache !== other.onBuildDrawCache) return false

        return true
    }

    override fun hashCode(): Int {
        return onBuildDrawCache.hashCode()
    }

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 176–210)

}

public fun CacheDrawModifierNode(
    onBuildDrawCache: CacheDrawScope.() -> DrawResult
): CacheDrawModifierNode {
    return CacheDrawModifierNodeImpl(CacheDrawScope(), onBuildDrawCache)
}

/**
 * Expands on the [androidx.compose.ui.node.DrawModifierNode] by adding the ability to invalidate
 * the draw cache for changes in things like shapes and bitmaps (see Modifier.border for a usage
 * examples).
 */
public sealed interface CacheDrawModifierNode : DrawModifierNode {
    public fun invalidateDrawCache()
}

/**
 * Wrapper [GraphicsContext] implementation that maintains a list of the [GraphicsLayer] instances
 * that were created through this instance so it can release only those [GraphicsLayer]s when it is
 * disposed of within the corresponding Modifier is disposed
 */
private class ScopedGraphicsContext : GraphicsContext {

    private var allocatedGraphicsLayers: MutableObjectList<GraphicsLayer>? = null

    var graphicsContext: GraphicsContext? = null
        set(value) {
            releaseGraphicsLayers()
            field = value
        }

    override fun createGraphicsLayer(): GraphicsLayer {
        val gContext = graphicsContext
        checkPrecondition(gContext != null) { "GraphicsContext not provided" }

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 211–245)

        val layer = gContext.createGraphicsLayer()
        val layers = allocatedGraphicsLayers
        if (layers == null) {
            mutableObjectListOf(layer).also { allocatedGraphicsLayers = it }
        } else {
            layers.add(layer)
        }

        return layer
    }

    override fun releaseGraphicsLayer(layer: GraphicsLayer) {
        graphicsContext?.releaseGraphicsLayer(layer)
    }

    override val shadowContext: ShadowContext
        get() {
            val gContext = graphicsContext
            checkPrecondition(gContext != null) { "GraphicsContext not provided" }
            return gContext.shadowContext
        }

    fun releaseGraphicsLayers() {
        allocatedGraphicsLayers?.let { layers ->
            layers.forEach { layer -> releaseGraphicsLayer(layer) }
            layers.clear()
        }
    }
}

private class CacheDrawModifierNodeImpl(
    private val cacheDrawScope: CacheDrawScope,
    block: CacheDrawScope.() -> DrawResult,
) : Modifier.Node(), CacheDrawModifierNode, ObserverModifierNode, BuildDrawCacheParams {


Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 246–280)

    private var isCacheValid = false
    private var cachedGraphicsContext: ScopedGraphicsContext? = null

    var block: CacheDrawScope.() -> DrawResult = block
        set(value) {
            field = value
            invalidateDrawCache()
        }

    init {
        cacheDrawScope.cacheParams = this
        cacheDrawScope.graphicsContextProvider = { graphicsContext }
    }

    override val density: Density
        get() = requireDensity()

    override val layoutDirection: LayoutDirection
        get() = requireLayoutDirection()

    override val size: Size
        get() = requireCoordinator(Nodes.Draw).size.toSize()

    val graphicsContext: GraphicsContext
        get() {
            var localGraphicsContext = cachedGraphicsContext
            if (localGraphicsContext == null) {
                localGraphicsContext = ScopedGraphicsContext().also { cachedGraphicsContext = it }
            }
            if (localGraphicsContext.graphicsContext == null) {
                localGraphicsContext.graphicsContext = requireGraphicsContext()
            }
            return localGraphicsContext
        }


Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 281–315)

    override fun onDetach() {
        super.onDetach()
        cachedGraphicsContext?.releaseGraphicsLayers()
    }

    override fun onReset() {
        super.onReset()
        invalidateDrawCache()
    }

    override fun onMeasureResultChanged() {
        invalidateDrawCache()
    }

    override fun onObservedReadsChanged() {
        invalidateDrawCache()
    }

    override fun invalidateDrawCache() {
        // Release all previously allocated graphics layers to the recycling pool
        // if a layer is needed in a subsequent draw, it will be obtained from the pool again and
        // reused
        cachedGraphicsContext?.releaseGraphicsLayers()
        isCacheValid = false
        cacheDrawScope.drawResult = null
        invalidateDraw()
    }

    override fun onDensityChange() {
        invalidateDrawCache()
    }

    override fun onLayoutDirectionChange() {
        invalidateDrawCache()
    }

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 316–350)


    private fun getOrBuildCachedDrawBlock(contentDrawScope: ContentDrawScope): DrawResult {
        if (!isCacheValid) {
            cacheDrawScope.apply {
                drawResult = null
                this.contentDrawScope = contentDrawScope
                observeReads { block() }
                checkPreconditionNotNull(drawResult) {
                    "DrawResult not defined, did you forget to call onDraw?"
                }
            }
            isCacheValid = true
        }
        return cacheDrawScope.drawResult!!
    }

    override fun ContentDrawScope.draw() {
        getOrBuildCachedDrawBlock(this).block(this)
    }
}

/**
 * Handle to a drawing environment that enables caching of content based on the resolved size.
 * Consumers define parameters and refer to them in the captured draw callback provided in
 * [onDrawBehind] or [onDrawWithContent].
 *
 * [onDrawBehind] will draw behind the layout's drawing contents however, [onDrawWithContent] will
 * provide the ability to draw before or after the layout's contents
 */
public class CacheDrawScope internal constructor() : Density {
    internal var cacheParams: BuildDrawCacheParams = EmptyBuildDrawCacheParams
    internal var drawResult: DrawResult? = null
    internal var contentDrawScope: ContentDrawScope? = null
    internal var graphicsContextProvider: (() -> GraphicsContext)? = null


Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 351–385)

    /** Provides the dimensions of the current drawing environment */
    public val size: Size
        get() = cacheParams.size

    /** Provides the [LayoutDirection]. */
    public val layoutDirection: LayoutDirection
        get() = cacheParams.layoutDirection

    /**
     * Returns a managed [GraphicsLayer] instance. This [GraphicsLayer] maybe newly created or
     * return a previously allocated instance. Consumers are not expected to release this instance
     * as it is automatically recycled upon invalidation of the CacheDrawScope and released when the
     * [DrawCacheModifier] is detached.
     */
    public fun obtainGraphicsLayer(): GraphicsLayer =
        graphicsContextProvider!!.invoke().createGraphicsLayer()

    /**
     * Returns the [ShadowContext] used to create [InnerShadowPainter] and [DropShadowPainter] to
     * render inner and drop shadows respectively
     */
    public fun obtainShadowContext(): ShadowContext =
        graphicsContextProvider!!.invoke().shadowContext

    /**
     * Record the drawing commands into the [GraphicsLayer] with the [Density], [LayoutDirection]
     * and [Size] are given from the provided [CacheDrawScope]
     */
    public fun GraphicsLayer.record(
        density: Density = this@CacheDrawScope,
        layoutDirection: LayoutDirection = this@CacheDrawScope.layoutDirection,
        size: IntSize = this@CacheDrawScope.size.toIntSize(),
        block: ContentDrawScope.() -> Unit,
    ) {
        val scope = contentDrawScope!!

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 36–70)

import androidx.compose.ui.node.Nodes
import androidx.compose.ui.node.ObserverModifierNode
import androidx.compose.ui.node.invalidateDraw
import androidx.compose.ui.node.observeReads
import androidx.compose.ui.node.requireCoordinator
import androidx.compose.ui.node.requireDensity
import androidx.compose.ui.node.requireGraphicsContext
import androidx.compose.ui.node.requireLayoutDirection
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.toIntSize
import androidx.compose.ui.unit.toSize

/** A [Modifier.Element] that draws into the space of the layout. */
@JvmDefaultWithCompatibility
public interface DrawModifier : Modifier.Element {

    public fun ContentDrawScope.draw()
}

/**
 * [DrawModifier] implementation that supports building a cache of objects to be referenced across
 * draw calls
 */
@JvmDefaultWithCompatibility
public interface DrawCacheModifier : DrawModifier {

    /**
     * Callback invoked to re-build objects to be re-used across draw calls. This is useful to
     * conditionally recreate objects only if the size of the drawing environment changes, or if
     * state parameters that are inputs to objects change. This method is guaranteed to be called
     * before [DrawModifier.draw].
     *

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 386–420)

        with(scope) {
            val prevDensity = drawContext.density
            val prevLayoutDirection = drawContext.layoutDirection
            record(size) {
                drawContext.apply {
                    this.density = density
                    this.layoutDirection = layoutDirection
                }
                try {
                    block(scope)
                } finally {
                    drawContext.apply {
                        this.density = prevDensity
                        this.layoutDirection = prevLayoutDirection
                    }
                }
            }
        }
    }

    /** Issue drawing commands to be executed before the layout content is drawn */
    public fun onDrawBehind(block: DrawScope.() -> Unit): DrawResult = onDrawWithContent {
        block()
        drawContent()
    }

    /** Issue drawing commands before or after the layout's drawing contents */
    public fun onDrawWithContent(block: ContentDrawScope.() -> Unit): DrawResult {
        return DrawResult(block).also { drawResult = it }
    }

    public override val density: Float
        get() = cacheParams.density.density

    public override val fontScale: Float

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 421–455)

        get() = cacheParams.density.fontScale
}

private object EmptyBuildDrawCacheParams : BuildDrawCacheParams {
    override val size: Size = Size.Unspecified
    override val layoutDirection: LayoutDirection = LayoutDirection.Ltr
    override val density: Density = Density(1f, 1f)
}

/**
 * Holder to a callback to be invoked during draw operations. This lambda captures and reuses
 * parameters defined within the CacheDrawScope receiver scope lambda.
 */
public class DrawResult internal constructor(internal var block: ContentDrawScope.() -> Unit)

/**
 * Creates a [DrawModifier] that allows the developer to draw before or after the layout's contents.
 * It also allows the modifier to adjust the layout's canvas.
 */
public fun Modifier.drawWithContent(onDraw: ContentDrawScope.() -> Unit): Modifier =
    this then DrawWithContentElement(onDraw)

private class DrawWithContentElement(val onDraw: ContentDrawScope.() -> Unit) :
    ModifierNodeElement<DrawWithContentModifier>() {
    override fun create() = DrawWithContentModifier(onDraw)

    override fun update(node: DrawWithContentModifier) {
        node.onDraw = onDraw
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "drawWithContent"
        properties["onDraw"] = onDraw
    }


Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 456–477)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is DrawWithContentElement) return false

        if (onDraw !== other.onDraw) return false

        return true
    }

    override fun hashCode(): Int {
        return onDraw.hashCode()
    }
}

private class DrawWithContentModifier(var onDraw: ContentDrawScope.() -> Unit) :
    Modifier.Node(), DrawModifierNode {

    override fun ContentDrawScope.draw() {
        onDraw()
    }
}


Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)

## androidx.compose.ui.draw DrawModifier.kt source (lines 71–105)

     * @param params The params to be used to build the cache.
     */
    public fun onBuildCache(params: BuildDrawCacheParams)
}

/**
 * The set of parameters which could be used to build the drawing cache.
 *
 * @see DrawCacheModifier.onBuildCache
 */
public interface BuildDrawCacheParams {
    /** The current size of the drawing environment */
    public val size: Size

    /** The current layout direction. */
    public val layoutDirection: LayoutDirection

    /** The current screen density to provide the ability to convert between */
    public val density: Density
}

/** Draw into a [Canvas] behind the modified content. */
public fun Modifier.drawBehind(onDraw: DrawScope.() -> Unit): Modifier =
    this then DrawBehindElement(onDraw)

private class DrawBehindElement(val onDraw: DrawScope.() -> Unit) :
    ModifierNodeElement<DrawBackgroundModifier>() {
    override fun create() = DrawBackgroundModifier(onDraw)

    override fun update(node: DrawBackgroundModifier) {
        node.onDraw = onDraw
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "drawBehind"

Sources: [live-androidx-ui-ui-ui-draw-drawmodifier-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/draw/DrawModifier.kt)
