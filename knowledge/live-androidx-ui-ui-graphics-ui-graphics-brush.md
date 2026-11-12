---
type: reference
title: androidx.compose.ui.graphics Brush.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 1
    endLine: 35
    sha256: e687ba57a3263b55d88c59766eb024b6b78278c16cf6b5a831e1df4c11349288
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

      package androidx.compose.ui.graphics

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.geometry.center
      import androidx.compose.ui.geometry.isFinite
      import androidx.compose.ui.geometry.isSpecified
      import androidx.compose.ui.geometry.isUnspecified
      import androidx.compose.ui.geometry.lerp
      import androidx.compose.ui.graphics.Brush.Companion.verticalGradient
      import androidx.compose.ui.util.fastIsFinite
      import androidx.compose.ui.util.fastMap
      import androidx.compose.ui.util.lerp
      import kotlin.math.abs

      @Immutable
      public sealed class Brush {
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 106
    endLine: 140
    sha256: dbbbaeb388385478cdd695d51fd0d7d62d08d4a2f0ff509a9fc9978f78b9dadd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *   to position at the far right and bottom of the drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun linearGradient(
                  colors: List<Color>,
                  start: Offset = Offset.Zero,
                  end: Offset = Offset.Infinite,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  LinearGradient(
                      colors = colors,
                      stops = null,
                      start = start,
                      end = end,
                      tileMode = tileMode,
                  )

              /**
               * Creates a horizontal gradient with the given colors evenly dispersed within the gradient
               *
               * Ex:
               * ```
               *  Brush.horizontalGradient(
               *      listOf(Color.Red, Color.Green, Color.Blue),
               *      startX = 10.0f,
               *      endX = 20.0f
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.HorizontalGradientSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colors colors Colors to be rendered as part of the gradient
               * @param startX Starting x position of the horizontal gradient. Defaults to 0 which
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 141
    endLine: 175
    sha256: d712f4405a622c497229ee5ef89953e75344a1d3c324dac0799d81a13376949a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *   represents the left of the drawing area
               * @param endX Ending x position of the horizontal gradient. Defaults to
               *   [Float.POSITIVE_INFINITY] which indicates the right of the specified drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun horizontalGradient(
                  colors: List<Color>,
                  startX: Float = 0.0f,
                  endX: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush = linearGradient(colors, Offset(startX, 0.0f), Offset(endX, 0.0f), tileMode)

              /**
               * Creates a horizontal gradient with the given colors dispersed at the provided offset
               * defined in the colorstop pair.
               *
               * Ex:
               * ```
               *  Brush.horizontalGradient(
               *      0.0f to Color.Red,
               *      0.3f to Color.Green,
               *      1.0f to Color.Blue,
               *      startX = 0.0f,
               *      endX = 100.0f
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.HorizontalGradientColorStopSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
               *   the vertical gradient
               * @param startX Starting x position of the horizontal gradient. Defaults to 0 which
               *   represents the left of the drawing area
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 176
    endLine: 210
    sha256: 26cfff32ccd523c67c5a608cea8e4bc9e0e68632b6f8c0f5aef071dc99181fef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @param endX Ending x position of the horizontal gradient. Defaults to
               *   [Float.POSITIVE_INFINITY] which indicates the right of the specified drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun horizontalGradient(
                  vararg colorStops: Pair<Float, Color>,
                  startX: Float = 0.0f,
                  endX: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  linearGradient(
                      *colorStops,
                      start = Offset(startX, 0.0f),
                      end = Offset(endX, 0.0f),
                      tileMode = tileMode,
                  )

              /**
               * Creates a vertical gradient with the given colors evenly dispersed within the gradient
               * Ex:
               * ```
               *  Brush.verticalGradient(
               *      listOf(Color.Red, Color.Green, Color.Blue),
               *      startY = 0.0f,
               *      endY = 100.0f
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.VerticalGradientSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colors colors Colors to be rendered as part of the gradient
               * @param startY Starting y position of the vertical gradient. Defaults to 0 which
               *   represents the top of the drawing area
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 211
    endLine: 245
    sha256: 3ca87ced3f3217499650ab0783bc957f93ddd289fd9ec41f50fd8a99d18f87ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @param endY Ending y position of the vertical gradient. Defaults to
               *   [Float.POSITIVE_INFINITY] which indicates the bottom of the specified drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun verticalGradient(
                  colors: List<Color>,
                  startY: Float = 0.0f,
                  endY: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush = linearGradient(colors, Offset(0.0f, startY), Offset(0.0f, endY), tileMode)

              /**
               * Creates a vertical gradient with the given colors at the provided offset defined in the
               * [Pair<Float, Color>]
               *
               * Ex:
               * ```
               *  Brush.verticalGradient(
               *      0.1f to Color.Red,
               *      0.3f to Color.Green,
               *      0.5f to Color.Blue,
               *      startY = 0.0f,
               *      endY = 100.0f
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.VerticalGradientColorStopSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
               *   the vertical gradient
               * @param startY Starting y position of the vertical gradient. Defaults to 0 which
               *   represents the top of the drawing area
               * @param endY Ending y position of the vertical gradient. Defaults to
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 246
    endLine: 280
    sha256: c2840eb0a616b3f11fcd8c69bf1b8862eda0668ed9838cf438568c2c9a4e1413
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *   [Float.POSITIVE_INFINITY] which indicates the bottom of the specified drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun verticalGradient(
                  vararg colorStops: Pair<Float, Color>,
                  startY: Float = 0f,
                  endY: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  linearGradient(
                      *colorStops,
                      start = Offset(0.0f, startY),
                      end = Offset(0.0f, endY),
                      tileMode = tileMode,
                  )

              /**
               * Creates a radial gradient with the given colors at the provided offset defined in the
               * colorstop pair.
               *
               * ```
               * Brush.radialGradient(
               *      0.0f to Color.Red,
               *      0.3f to Color.Green,
               *      1.0f to Color.Blue,
               *      center = Offset(side1 / 2.0f, side2 / 2.0f),
               *      radius = side1 / 2.0f,
               *      tileMode = TileMode.Repeated
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.RadialBrushColorStopSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 281
    endLine: 315
    sha256: 6791cf84e72ba181d9f911c3cb07c6e18e4b50d8ac43e7e0972f583b1242ffb6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
               *   the radial gradient
               * @param center Center position of the radial gradient circle. If this is set to
               *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
               *   radial gradient. [Float.POSITIVE_INFINITY] can be used for either [Offset.x] or
               *   [Offset.y] to indicate the far right or far bottom of the drawing area respectively.
               * @param radius Radius for the radial gradient. Defaults to positive infinity to indicate
               *   the largest radius that can fit within the bounds of the drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun radialGradient(
                  vararg colorStops: Pair<Float, Color>,
                  center: Offset = Offset.Unspecified,
                  radius: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  RadialGradient(
                      colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                      stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                      center = center,
                      radius = radius,
                      tileMode = tileMode,
                  )

              /**
               * Creates a radial gradient with the given colors evenly dispersed within the gradient
               *
               * ```
               * Brush.radialGradient(
               *      listOf(Color.Red, Color.Green, Color.Blue),
               *      center = Offset(side1 / 2.0f, side2 / 2.0f),
               *      radius = side1 / 2.0f,
               *      tileMode = TileMode.Repeated
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 316
    endLine: 350
    sha256: 1f83d84a98c41fa3b6bea0ad4cb30f47259ca018055a71b01cc92fa13dc7adc3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.RadialBrushSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colors Colors to be rendered as part of the gradient
               * @param center Center position of the radial gradient circle. If this is set to
               *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
               *   radial gradient. [Float.POSITIVE_INFINITY] can be used for either [Offset.x] or
               *   [Offset.y] to indicate the far right or far bottom of the drawing area respectively.
               * @param radius Radius for the radial gradient. Defaults to positive infinity to indicate
               *   the largest radius that can fit within the bounds of the drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun radialGradient(
                  colors: List<Color>,
                  center: Offset = Offset.Unspecified,
                  radius: Float = Float.POSITIVE_INFINITY,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  RadialGradient(
                      colors = colors,
                      stops = null,
                      center = center,
                      radius = radius,
                      tileMode = tileMode,
                  )

              /**
               * Creates a sweep gradient with the given colors dispersed around the center with offsets
               * defined in each colorstop pair. The sweep begins relative to 3 o'clock and continues
               * clockwise until it reaches the starting position again.
               *
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 351
    endLine: 385
    sha256: cdcbddc7678619c1fddc04fe7c57cdcce3172a5249b6f4cd775ca4dbfa467a29
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * Ex:
               * ```
               *  Brush.sweepGradient(
               *      0.0f to Color.Red,
               *      0.3f to Color.Green,
               *      1.0f to Color.Blue,
               *      center = Offset(0.0f, 100.0f)
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.SweepGradientColorStopSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
               *   the sweep gradient
               * @param center Center position of the sweep gradient circle. If this is set to
               *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
               *   sweep gradient
               */
              @Stable
              public fun sweepGradient(
                  vararg colorStops: Pair<Float, Color>,
                  center: Offset = Offset.Unspecified,
              ): Brush =
                  SweepGradient(
                      colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                      stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                      center = center,
                  )

              /**
               * Creates a sweep gradient with the given colors dispersed evenly around the center. The
               * sweep begins relative to 3 o'clock and continues clockwise until it reaches the starting
               * position again.
               *
               * Ex:
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 36
    endLine: 70
    sha256: 7bbb9cc185be6acba2e8f146e254a96ae7fa9fbb74382e200bf794efce74885c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Return the intrinsic size of the [Brush]. If the there is no intrinsic size (i.e. filling
           * bounds with an arbitrary color) return [Size.Unspecified]. If there is no intrinsic size in a
           * single dimension, return [Size] with [Float.NaN] in the desired dimension.
           */
          public open val intrinsicSize: Size = Size.Unspecified

          public abstract fun applyTo(size: Size, p: Paint, alpha: Float)

          public companion object {

              /**
               * Creates a linear gradient with the provided colors along the given start and end
               * coordinates. The colors are dispersed at the provided offset defined in the colorstop
               * pair.
               *
               * ```
               *  Brush.linearGradient(
               *      0.0f to Color.Red,
               *      0.3f to Color.Green,
               *      1.0f to Color.Blue,
               *      start = Offset(0.0f, 50.0f),
               *      end = Offset(0.0f, 100.0f)
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.LinearGradientColorStopSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colorStops Colors and their offset in the gradient area
               * @param start Starting position of the linear gradient. This can be set to [Offset.Zero]
               *   to position at the far left and top of the drawing area
               * @param end Ending position of the linear gradient. This can be set to [Offset.Infinite]
               *   to position at the far right and bottom of the drawing area
               * @param tileMode Determines the behavior for how the shader is to fill a region outside
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 386
    endLine: 420
    sha256: 4dad0a5dfdfb15fe159bd0fd9090f813dbf56503f29951376aa1f04c44c6893c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
               * ```
               *  Brush.sweepGradient(
               *      listOf(Color.Red, Color.Green, Color.Blue),
               *      center = Offset(10.0f, 20.0f)
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.SweepGradientSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colors List of colors to fill the sweep gradient
               * @param center Center position of the sweep gradient circle. If this is set to
               *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
               *   sweep gradient
               */
              @Stable
              public fun sweepGradient(colors: List<Color>, center: Offset = Offset.Unspecified): Brush =
                  SweepGradient(colors = colors, stops = null, center = center)

              /**
               * Creates a composited result between 2 [Brush] instances and the specified BlendMode. The
               * specified destination and source [Brush] inputs will be consumed as the source and
               * destination images for the corresponding blending algorithm.
               *
               * @sample androidx.compose.ui.graphics.samples.CompositeShaderSample
               * @param dstBrush ShaderBrush used as the destination content
               * @param srcBrush ShaderBrush used as the source content
               * @param blendMode BlendMode used to composite the source against the destination shader
               * @see BlendMode
               */
              @Stable
              public fun composite(dstBrush: Brush, srcBrush: Brush, blendMode: BlendMode): Brush =
                  CompositeShaderBrush(dstBrush.toShaderBrush(), srcBrush.toShaderBrush(), blendMode)
          }
      }
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 421
    endLine: 455
    sha256: 71518a8ce6c1436dc062b9486bed5ef992f3e484a2d9d38f77c48a2584494d33
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      internal fun Brush.toShaderBrush(): ShaderBrush =
          when (this) {
              is ShaderBrush -> this
              is SolidColor -> verticalGradient(listOf(value, value)) as ShaderBrush
          }

      @Immutable
      public class SolidColor(public val value: Color) : Brush(), Interpolatable {
          override fun applyTo(size: Size, p: Paint, alpha: Float) {
              p.alpha = DefaultAlpha
              p.color =
                  if (alpha != DefaultAlpha) {
                      value.copy(alpha = value.alpha * alpha)
                  } else {
                      value
                  }
              if (p.shader != null) p.shader = null
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SolidColor) return false
              if (value != other.value) return false

              return true
          }

          override fun hashCode(): Int {
              return value.hashCode()
          }

          override fun toString(): String {
              return "SolidColor(value=$value)"
          }
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 456
    endLine: 490
    sha256: bb93b74ff07f99a50e8c1a512f9f305936d3c46e0d827aa15d8ab9b28751f999
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun lerp(other: Any?, t: Float): Any? {
              var other = other
              if (other == null) {
                  other = SolidColor(Color.Transparent)
              }
              if (other is SolidColor) {
                  return SolidColor(lerp(value, other.value, t))
              }
              return null
          }
      }

      /** Brush implementation used to apply a linear gradient on a given [Paint] */
      @Immutable
      public class LinearGradient
      internal constructor(
          @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
          @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
          internal val start: Offset,
          internal val end: Offset,
          internal val tileMode: TileMode = TileMode.Clamp,
      ) : ShaderBrush(), Interpolatable {

          override val intrinsicSize: Size
              get() =
                  Size(
                      if (start.x.isFinite() && end.x.isFinite()) abs(start.x - end.x) else Float.NaN,
                      if (start.y.isFinite() && end.y.isFinite()) abs(start.y - end.y) else Float.NaN,
                  )

          override fun createShader(size: Size): Shader {
              val startX = if (start.x == Float.POSITIVE_INFINITY) size.width else start.x
              val startY = if (start.y == Float.POSITIVE_INFINITY) size.height else start.y
              val endX = if (end.x == Float.POSITIVE_INFINITY) size.width else end.x
              val endY = if (end.y == Float.POSITIVE_INFINITY) size.height else end.y
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 491
    endLine: 525
    sha256: fc99ee5f209b2ff9f730c7ee3a4bc7cf51bc1e52f71209397a494fa311a36bc1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return LinearGradientShader(
                  colors = colors,
                  colorStops = stops,
                  from = Offset(startX, startY),
                  to = Offset(endX, endY),
                  tileMode = tileMode,
              )
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is LinearGradient) return false

              if (colors != other.colors) return false
              if (stops != other.stops) return false
              if (start != other.start) return false
              if (end != other.end) return false
              if (tileMode != other.tileMode) return false

              return true
          }

          override fun hashCode(): Int {
              var result = colors.hashCode()
              result = 31 * result + (stops?.hashCode() ?: 0)
              result = 31 * result + start.hashCode()
              result = 31 * result + end.hashCode()
              result = 31 * result + tileMode.hashCode()
              return result
          }

          override fun toString(): String {
              val startValue = if (start.isFinite) "start=$start, " else ""
              val endValue = if (end.isFinite) "end=$end, " else ""
              return "LinearGradient(colors=$colors, " +
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 526
    endLine: 560
    sha256: 7099e9481bfafe27045bdcdf854b25203522d5ab6c6c56e576cad5912fd2b1aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  "stops=$stops, " +
                  startValue +
                  endValue +
                  "tileMode=$tileMode)"
          }

          override fun lerp(other: Any?, t: Float): Any? {
              var other: Any? = other
              if (other == null) {
                  other = SolidColor(Color.Transparent)
              }
              if (other is SolidColor) {
                  // if it's a solid color, it means the entire shape is filled in solid. We want to
                  // create a LinearGradient that creates a similar visual effect, so that we can lerp
                  // between it and the target gradient without causing visual jumps
                  other =
                      LinearGradient(
                          colors = colors.fastMap { other.value },
                          stops = stops, // use the same color stops
                          start = start,
                          end = end,
                          tileMode = tileMode,
                      )
              }
              if (other is LinearGradient) {
                  return LinearGradient(
                      colors = lerpColorList(colors, other.colors, t),
                      stops = lerpNullableFloatList(stops, other.stops, t),
                      start = lerpSafe(start, other.start, t),
                      end = lerpSafe(end, other.end, t),
                      tileMode = if (t < 0.5f) tileMode else other.tileMode,
                  )
              }
              return null
          }
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 561
    endLine: 595
    sha256: 501e07e32ede5fd0545bfafc8e9dc14305a53fcbdcdd475ef0f3f2f5f4ff3b08
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /** Brush implementation used to apply a radial gradient on a given [Paint] */
      @Immutable
      public class RadialGradient
      internal constructor(
          @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
          @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
          internal val center: Offset,
          internal val radius: Float,
          internal val tileMode: TileMode = TileMode.Clamp,
      ) : ShaderBrush(), Interpolatable {

          override val intrinsicSize: Size
              get() =
                  if (radius.fastIsFinite()) {
                      Size(radius * 2, radius * 2)
                  } else {
                      Size.Unspecified
                  }

          override fun createShader(size: Size): Shader {
              val centerX: Float
              val centerY: Float
              if (center.isUnspecified) {
                  val drawCenter = size.center
                  centerX = drawCenter.x
                  centerY = drawCenter.y
              } else {
                  centerX = if (center.x == Float.POSITIVE_INFINITY) size.width else center.x
                  centerY = if (center.y == Float.POSITIVE_INFINITY) size.height else center.y
              }

              return RadialGradientShader(
                  colors = colors,
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 596
    endLine: 630
    sha256: e21387cfe1dc651d320d3783b609d2e51cd63a344e93e82a0cbd3cfd6574f646
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  colorStops = stops,
                  center = Offset(centerX, centerY),
                  radius = if (radius == Float.POSITIVE_INFINITY) size.minDimension / 2 else radius,
                  tileMode = tileMode,
              )
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is RadialGradient) return false

              if (colors != other.colors) return false
              if (stops != other.stops) return false
              if (center != other.center) return false
              if (radius != other.radius) return false
              if (tileMode != other.tileMode) return false

              return true
          }

          override fun hashCode(): Int {
              var result = colors.hashCode()
              result = 31 * result + (stops?.hashCode() ?: 0)
              result = 31 * result + center.hashCode()
              result = 31 * result + radius.hashCode()
              result = 31 * result + tileMode.hashCode()
              return result
          }

          override fun toString(): String {
              val centerValue = if (center.isSpecified) "center=$center, " else ""
              val radiusValue = if (radius.fastIsFinite()) "radius=$radius, " else ""
              return "RadialGradient(" +
                  "colors=$colors, " +
                  "stops=$stops, " +
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 631
    endLine: 665
    sha256: a8986d20b4de2a7bec02cbcd9471b0e9973b2d49fcafae1ca0bb75a529e54335
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  centerValue +
                  radiusValue +
                  "tileMode=$tileMode)"
          }

          override fun lerp(other: Any?, t: Float): Any? {
              var other: Any? = other
              if (other == null) {
                  other = SolidColor(Color.Transparent)
              }
              if (other is SolidColor) {
                  // if it's a solid color, it means the entire shape is filled in solid. We want to
                  // create a RadialGradient that creates a similar visual effect, so that we can lerp
                  // between it and the target gradient without causing visual jumps
                  other =
                      RadialGradient(
                          colors = colors.fastMap { other.value },
                          stops = stops, // use the same color stops
                          center = center,
                          radius = radius,
                          tileMode = tileMode,
                      )
              }
              if (other is RadialGradient) {
                  return RadialGradient(
                      colors = lerpColorList(colors, other.colors, t),
                      stops = lerpNullableFloatList(stops, other.stops, t),
                      center = lerp(center, other.center, t),
                      radius = lerp(radius, other.radius, t),
                      tileMode = if (t < 0.5f) tileMode else other.tileMode,
                  )
              }
              return null
          }
      }
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 666
    endLine: 700
    sha256: 3229f15deb6382e6e9d49466d49232db5651df9ddeeae1948078fd79df8c4cd7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      @Suppress("PrimitiveInCollection")
      internal fun lerpColorList(left: List<Color>, right: List<Color>, t: Float): List<Color> {
          return List(maxOf(left.size, right.size)) {
              val l = minOf(it, left.size - 1)
              val r = minOf(it, right.size - 1)
              lerp(left[l], right[r], t)
          }
      }

      @Suppress("PrimitiveInCollection")
      internal fun lerpNullableFloatList(
          left: List<Float>?,
          right: List<Float>?,
          t: Float,
      ): List<Float>? {
          if (right == null || left == null) return null
          return lerpFloatList(left, right, t)
      }

      @Suppress("PrimitiveInCollection")
      internal fun lerpFloatList(left: List<Float>, right: List<Float>, t: Float): List<Float> {
          return List(maxOf(left.size, right.size)) {
              val l = minOf(it, left.size - 1)
              val r = minOf(it, right.size - 1)
              lerp(left[l], right[r], t)
          }
      }

      internal fun lerpSafe(left: Offset, right: Offset, t: Float): Offset {
          return if (left.isFinite && right.isFinite) lerp(left, right, t)
          else if (t < 0.5f) left else right
      }

      /**
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 701
    endLine: 735
    sha256: b8afcb657bb2899ab97fff60e5e2c389419b1f53dd97d2feb1ad0a42255aed43
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Creates a composited result between 2 ShaderBrushes and the specified BlendMode. The specified
       * destination and source Shader inputs will be consumed as the source and destination images for
       * the corresponding blending algorithm.
       *
       * @param dstBrush ShaderBrush used as the destination content
       * @param srcBrush ShaderBrush used as the source content
       * @param blendMode BlendMode used to composite the source against the destination shader
       * @see BlendMode
       */
      @Immutable
      internal class CompositeShaderBrush(
          val dstBrush: ShaderBrush,
          val srcBrush: ShaderBrush,
          val blendMode: BlendMode,
      ) : ShaderBrush() {

          override fun createShader(size: Size): Shader =
              CompositeShader(dstBrush.createShader(size), srcBrush.createShader(size), blendMode)

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is CompositeShaderBrush) return false

              if (dstBrush != other.dstBrush) return false
              if (srcBrush != other.srcBrush) return false
              if (blendMode != other.blendMode) return false

              return true
          }

          override fun hashCode(): Int {
              var result = dstBrush.hashCode()
              result = 31 * result + srcBrush.hashCode()
              result = 31 * result + blendMode.hashCode()
              return result
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 71
    endLine: 105
    sha256: 4ce6f2ad3088e99da6353f906fdf2b9d541c005ea0faf1546a18842314fc9559
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
               */
              @Stable
              public fun linearGradient(
                  vararg colorStops: Pair<Float, Color>,
                  start: Offset = Offset.Zero,
                  end: Offset = Offset.Infinite,
                  tileMode: TileMode = TileMode.Clamp,
              ): Brush =
                  LinearGradient(
                      colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                      stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                      start = start,
                      end = end,
                      tileMode = tileMode,
                  )

              /**
               * Creates a linear gradient with the provided colors along the given start and end
               * coordinates. The colors are
               *
               * ```
               *  Brush.linearGradient(
               *      listOf(Color.Red, Color.Green, Color.Blue),
               *      start = Offset(0.0f, 50.0f),
               *      end = Offset(0.0f, 100.0f)
               * )
               * ```
               *
               * @sample androidx.compose.ui.graphics.samples.LinearGradientSample
               * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
               * @param colors Colors to be rendered as part of the gradient
               * @param start Starting position of the linear gradient. This can be set to [Offset.Zero]
               *   to position at the far left and top of the drawing area
               * @param end Ending position of the linear gradient. This can be set to [Offset.Infinite]
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 736
    endLine: 770
    sha256: 8ad45ba79b957240b78397bb221f6e7d63ed79ec592346b9be192a2ec9097cfc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          override fun toString(): String {
              return "CompositeShaderBrush(dstBrush=$dstBrush, srcBrush=$srcBrush, blendMode=$blendMode)"
          }
      }

      /** Brush implementation used to apply a sweep gradient on a given [Paint] */
      @Immutable
      public class SweepGradient
      internal constructor(
          internal val center: Offset,
          @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
          @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
      ) : ShaderBrush(), Interpolatable {

          override fun createShader(size: Size): Shader =
              SweepGradientShader(
                  if (center.isUnspecified) {
                      size.center
                  } else {
                      Offset(
                          if (center.x == Float.POSITIVE_INFINITY) size.width else center.x,
                          if (center.y == Float.POSITIVE_INFINITY) size.height else center.y,
                      )
                  },
                  colors,
                  stops,
              )

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SweepGradient) return false

              if (center != other.center) return false
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 771
    endLine: 805
    sha256: fd10037de6d66cd1ab72861d52cdb2118159534e416797e0e1716bca5a521434
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (colors != other.colors) return false
              if (stops != other.stops) return false

              return true
          }

          override fun hashCode(): Int {
              var result = center.hashCode()
              result = 31 * result + colors.hashCode()
              result = 31 * result + (stops?.hashCode() ?: 0)
              return result
          }

          override fun toString(): String {
              val centerValue = if (center.isSpecified) "center=$center, " else ""
              return "SweepGradient(" + centerValue + "colors=$colors, stops=$stops)"
          }

          override fun lerp(other: Any?, t: Float): Any? {
              var other: Any? = other
              if (other == null) {
                  other = SolidColor(Color.Transparent)
              }
              if (other is SolidColor) {
                  other =
                      SweepGradient(
                          center = center,
                          colors = colors.fastMap { other.value },
                          stops = stops,
                      )
              }
              if (other is SweepGradient) {
                  return SweepGradient(
                      center = lerp(center, other.center, t),
                      colors = lerpColorList(colors, other.colors, t),
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 806
    endLine: 840
    sha256: 2a7248c238fb376985ee903c6aed9ebcbff1a68ce51db86a076438ac7f173862
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      stops = lerpNullableFloatList(stops, other.stops, t),
                  )
              }
              return null
          }
      }

      /**
       * Convenience method to create a ShaderBrush that always returns the same shader instance
       * regardless of size
       */
      public fun ShaderBrush(shader: Shader): ShaderBrush =
          object : ShaderBrush() {

              /** Create a shader based on the given size that represents the current drawing area */
              override fun createShader(size: Size): Shader = shader
          }

      /**
       * Brush implementation that wraps and applies a the provided shader to a [Paint] The shader can be
       * lazily created based on a given size, or provided directly as a parameter
       */
      @Immutable
      public abstract class ShaderBrush() : Brush() {

          private var internalTransformShader: TransformShader? = null
          private var createdSize = Size.Unspecified

          /** A transformation matrix for the shader. */
          public var transform: Matrix? = null
              set(value) {
                  field = value
                  internalTransformShader?.transform(value)
              }
  - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt
    startLine: 841
    endLine: 872
    sha256: d6912a851be52b9f6fa6928f701f8db75f444e8db31655d49a8317feac1095aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          public abstract fun createShader(size: Size): Shader

          private fun obtainTransformShader(): TransformShader =
              internalTransformShader ?: TransformShader().also { internalTransformShader = it }

          final override fun applyTo(size: Size, p: Paint, alpha: Float) {
              var transformShader = internalTransformShader
              if (transformShader == null || createdSize != size) {
                  if (size.isEmpty()) {
                      transformShader = null
                      internalTransformShader = null
                      createdSize = Size.Unspecified
                  } else {
                      transformShader =
                          obtainTransformShader().apply {
                              if (transform != null) {
                                  transform(transform)
                              }
                              shader = createShader(size)
                          }
                      internalTransformShader = transformShader
                      createdSize = size
                  }
              }
              if (p.color != Color.Black) p.color = Color.Black
              // Note that [transformShader.shader] might not be equal to returned object from
              // [createShader] function.
              if (p.shader != transformShader?.shader) p.shader = transformShader?.shader
              if (p.alpha != alpha) p.alpha = alpha
          }
      }
compose:
  id: live-androidx-ui-ui-graphics-ui-graphics-brush
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-1
      title: androidx.compose.ui.graphics Brush.kt source (lines 1–35)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-106
      title: androidx.compose.ui.graphics Brush.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.LinearGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-141
      title: androidx.compose.ui.graphics Brush.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-176
      title: androidx.compose.ui.graphics Brush.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-211
      title: androidx.compose.ui.graphics Brush.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-246
      title: androidx.compose.ui.graphics Brush.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-281
      title: androidx.compose.ui.graphics Brush.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.RadialGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-316
      title: androidx.compose.ui.graphics Brush.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.RadialGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-351
      title: androidx.compose.ui.graphics Brush.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SweepGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-36
      title: androidx.compose.ui.graphics Brush.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-386
      title: androidx.compose.ui.graphics Brush.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SweepGradient
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-421
      title: androidx.compose.ui.graphics Brush.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SolidColor
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-456
      title: androidx.compose.ui.graphics Brush.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SolidColor
        - androidx.compose.ui.graphics.LinearGradient
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-491
      title: androidx.compose.ui.graphics Brush.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.graphics.LinearGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-526
      title: androidx.compose.ui.graphics Brush.kt source (lines 526–560)
      aliases:
        - androidx.compose.ui.graphics.SolidColor
        - androidx.compose.ui.graphics.LinearGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-561
      title: androidx.compose.ui.graphics Brush.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.RadialGradient
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-596
      title: androidx.compose.ui.graphics Brush.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.graphics.RadialGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-631
      title: androidx.compose.ui.graphics Brush.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.graphics.SolidColor
        - androidx.compose.ui.graphics.RadialGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-666
      title: androidx.compose.ui.graphics Brush.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-701
      title: androidx.compose.ui.graphics Brush.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-71
      title: androidx.compose.ui.graphics Brush.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.LinearGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-736
      title: androidx.compose.ui.graphics Brush.kt source (lines 736–770)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SweepGradient
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-771
      title: androidx.compose.ui.graphics Brush.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.graphics.SolidColor
        - androidx.compose.ui.graphics.SweepGradient
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-806
      title: androidx.compose.ui.graphics Brush.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.ShaderBrush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-brush-lines-841
      title: androidx.compose.ui.graphics Brush.kt source (lines 841–872)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-brush-lines-841-source
      relatedIds: []
---

# androidx.compose.ui.graphics Brush.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt

## androidx.compose.ui.graphics Brush.kt source (lines 1–35)

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

package androidx.compose.ui.graphics

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.geometry.center
import androidx.compose.ui.geometry.isFinite
import androidx.compose.ui.geometry.isSpecified
import androidx.compose.ui.geometry.isUnspecified
import androidx.compose.ui.geometry.lerp
import androidx.compose.ui.graphics.Brush.Companion.verticalGradient
import androidx.compose.ui.util.fastIsFinite
import androidx.compose.ui.util.fastMap
import androidx.compose.ui.util.lerp
import kotlin.math.abs

@Immutable
public sealed class Brush {

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 106–140)

         *   to position at the far right and bottom of the drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun linearGradient(
            colors: List<Color>,
            start: Offset = Offset.Zero,
            end: Offset = Offset.Infinite,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            LinearGradient(
                colors = colors,
                stops = null,
                start = start,
                end = end,
                tileMode = tileMode,
            )

        /**
         * Creates a horizontal gradient with the given colors evenly dispersed within the gradient
         *
         * Ex:
         * ```
         *  Brush.horizontalGradient(
         *      listOf(Color.Red, Color.Green, Color.Blue),
         *      startX = 10.0f,
         *      endX = 20.0f
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.HorizontalGradientSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colors colors Colors to be rendered as part of the gradient
         * @param startX Starting x position of the horizontal gradient. Defaults to 0 which

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 141–175)

         *   represents the left of the drawing area
         * @param endX Ending x position of the horizontal gradient. Defaults to
         *   [Float.POSITIVE_INFINITY] which indicates the right of the specified drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun horizontalGradient(
            colors: List<Color>,
            startX: Float = 0.0f,
            endX: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush = linearGradient(colors, Offset(startX, 0.0f), Offset(endX, 0.0f), tileMode)

        /**
         * Creates a horizontal gradient with the given colors dispersed at the provided offset
         * defined in the colorstop pair.
         *
         * Ex:
         * ```
         *  Brush.horizontalGradient(
         *      0.0f to Color.Red,
         *      0.3f to Color.Green,
         *      1.0f to Color.Blue,
         *      startX = 0.0f,
         *      endX = 100.0f
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.HorizontalGradientColorStopSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
         *   the vertical gradient
         * @param startX Starting x position of the horizontal gradient. Defaults to 0 which
         *   represents the left of the drawing area

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 176–210)

         * @param endX Ending x position of the horizontal gradient. Defaults to
         *   [Float.POSITIVE_INFINITY] which indicates the right of the specified drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun horizontalGradient(
            vararg colorStops: Pair<Float, Color>,
            startX: Float = 0.0f,
            endX: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            linearGradient(
                *colorStops,
                start = Offset(startX, 0.0f),
                end = Offset(endX, 0.0f),
                tileMode = tileMode,
            )

        /**
         * Creates a vertical gradient with the given colors evenly dispersed within the gradient
         * Ex:
         * ```
         *  Brush.verticalGradient(
         *      listOf(Color.Red, Color.Green, Color.Blue),
         *      startY = 0.0f,
         *      endY = 100.0f
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.VerticalGradientSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colors colors Colors to be rendered as part of the gradient
         * @param startY Starting y position of the vertical gradient. Defaults to 0 which
         *   represents the top of the drawing area

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 211–245)

         * @param endY Ending y position of the vertical gradient. Defaults to
         *   [Float.POSITIVE_INFINITY] which indicates the bottom of the specified drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun verticalGradient(
            colors: List<Color>,
            startY: Float = 0.0f,
            endY: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush = linearGradient(colors, Offset(0.0f, startY), Offset(0.0f, endY), tileMode)

        /**
         * Creates a vertical gradient with the given colors at the provided offset defined in the
         * [Pair<Float, Color>]
         *
         * Ex:
         * ```
         *  Brush.verticalGradient(
         *      0.1f to Color.Red,
         *      0.3f to Color.Green,
         *      0.5f to Color.Blue,
         *      startY = 0.0f,
         *      endY = 100.0f
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.VerticalGradientColorStopSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
         *   the vertical gradient
         * @param startY Starting y position of the vertical gradient. Defaults to 0 which
         *   represents the top of the drawing area
         * @param endY Ending y position of the vertical gradient. Defaults to

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 246–280)

         *   [Float.POSITIVE_INFINITY] which indicates the bottom of the specified drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun verticalGradient(
            vararg colorStops: Pair<Float, Color>,
            startY: Float = 0f,
            endY: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            linearGradient(
                *colorStops,
                start = Offset(0.0f, startY),
                end = Offset(0.0f, endY),
                tileMode = tileMode,
            )

        /**
         * Creates a radial gradient with the given colors at the provided offset defined in the
         * colorstop pair.
         *
         * ```
         * Brush.radialGradient(
         *      0.0f to Color.Red,
         *      0.3f to Color.Green,
         *      1.0f to Color.Blue,
         *      center = Offset(side1 / 2.0f, side2 / 2.0f),
         *      radius = side1 / 2.0f,
         *      tileMode = TileMode.Repeated
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.RadialBrushColorStopSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 281–315)

         * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
         *   the radial gradient
         * @param center Center position of the radial gradient circle. If this is set to
         *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
         *   radial gradient. [Float.POSITIVE_INFINITY] can be used for either [Offset.x] or
         *   [Offset.y] to indicate the far right or far bottom of the drawing area respectively.
         * @param radius Radius for the radial gradient. Defaults to positive infinity to indicate
         *   the largest radius that can fit within the bounds of the drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun radialGradient(
            vararg colorStops: Pair<Float, Color>,
            center: Offset = Offset.Unspecified,
            radius: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            RadialGradient(
                colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                center = center,
                radius = radius,
                tileMode = tileMode,
            )

        /**
         * Creates a radial gradient with the given colors evenly dispersed within the gradient
         *
         * ```
         * Brush.radialGradient(
         *      listOf(Color.Red, Color.Green, Color.Blue),
         *      center = Offset(side1 / 2.0f, side2 / 2.0f),
         *      radius = side1 / 2.0f,
         *      tileMode = TileMode.Repeated

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 316–350)

         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.RadialBrushSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colors Colors to be rendered as part of the gradient
         * @param center Center position of the radial gradient circle. If this is set to
         *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
         *   radial gradient. [Float.POSITIVE_INFINITY] can be used for either [Offset.x] or
         *   [Offset.y] to indicate the far right or far bottom of the drawing area respectively.
         * @param radius Radius for the radial gradient. Defaults to positive infinity to indicate
         *   the largest radius that can fit within the bounds of the drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside
         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun radialGradient(
            colors: List<Color>,
            center: Offset = Offset.Unspecified,
            radius: Float = Float.POSITIVE_INFINITY,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            RadialGradient(
                colors = colors,
                stops = null,
                center = center,
                radius = radius,
                tileMode = tileMode,
            )

        /**
         * Creates a sweep gradient with the given colors dispersed around the center with offsets
         * defined in each colorstop pair. The sweep begins relative to 3 o'clock and continues
         * clockwise until it reaches the starting position again.
         *

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 351–385)

         * Ex:
         * ```
         *  Brush.sweepGradient(
         *      0.0f to Color.Red,
         *      0.3f to Color.Green,
         *      1.0f to Color.Blue,
         *      center = Offset(0.0f, 100.0f)
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.SweepGradientColorStopSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colorStops Colors and offsets to determine how the colors are dispersed throughout
         *   the sweep gradient
         * @param center Center position of the sweep gradient circle. If this is set to
         *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
         *   sweep gradient
         */
        @Stable
        public fun sweepGradient(
            vararg colorStops: Pair<Float, Color>,
            center: Offset = Offset.Unspecified,
        ): Brush =
            SweepGradient(
                colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                center = center,
            )

        /**
         * Creates a sweep gradient with the given colors dispersed evenly around the center. The
         * sweep begins relative to 3 o'clock and continues clockwise until it reaches the starting
         * position again.
         *
         * Ex:

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 36–70)


    /**
     * Return the intrinsic size of the [Brush]. If the there is no intrinsic size (i.e. filling
     * bounds with an arbitrary color) return [Size.Unspecified]. If there is no intrinsic size in a
     * single dimension, return [Size] with [Float.NaN] in the desired dimension.
     */
    public open val intrinsicSize: Size = Size.Unspecified

    public abstract fun applyTo(size: Size, p: Paint, alpha: Float)

    public companion object {

        /**
         * Creates a linear gradient with the provided colors along the given start and end
         * coordinates. The colors are dispersed at the provided offset defined in the colorstop
         * pair.
         *
         * ```
         *  Brush.linearGradient(
         *      0.0f to Color.Red,
         *      0.3f to Color.Green,
         *      1.0f to Color.Blue,
         *      start = Offset(0.0f, 50.0f),
         *      end = Offset(0.0f, 100.0f)
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.LinearGradientColorStopSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colorStops Colors and their offset in the gradient area
         * @param start Starting position of the linear gradient. This can be set to [Offset.Zero]
         *   to position at the far left and top of the drawing area
         * @param end Ending position of the linear gradient. This can be set to [Offset.Infinite]
         *   to position at the far right and bottom of the drawing area
         * @param tileMode Determines the behavior for how the shader is to fill a region outside

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 386–420)

         * ```
         *  Brush.sweepGradient(
         *      listOf(Color.Red, Color.Green, Color.Blue),
         *      center = Offset(10.0f, 20.0f)
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.SweepGradientSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colors List of colors to fill the sweep gradient
         * @param center Center position of the sweep gradient circle. If this is set to
         *   [Offset.Unspecified] then the center of the drawing area is used as the center for the
         *   sweep gradient
         */
        @Stable
        public fun sweepGradient(colors: List<Color>, center: Offset = Offset.Unspecified): Brush =
            SweepGradient(colors = colors, stops = null, center = center)

        /**
         * Creates a composited result between 2 [Brush] instances and the specified BlendMode. The
         * specified destination and source [Brush] inputs will be consumed as the source and
         * destination images for the corresponding blending algorithm.
         *
         * @sample androidx.compose.ui.graphics.samples.CompositeShaderSample
         * @param dstBrush ShaderBrush used as the destination content
         * @param srcBrush ShaderBrush used as the source content
         * @param blendMode BlendMode used to composite the source against the destination shader
         * @see BlendMode
         */
        @Stable
        public fun composite(dstBrush: Brush, srcBrush: Brush, blendMode: BlendMode): Brush =
            CompositeShaderBrush(dstBrush.toShaderBrush(), srcBrush.toShaderBrush(), blendMode)
    }
}


Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 421–455)

internal fun Brush.toShaderBrush(): ShaderBrush =
    when (this) {
        is ShaderBrush -> this
        is SolidColor -> verticalGradient(listOf(value, value)) as ShaderBrush
    }

@Immutable
public class SolidColor(public val value: Color) : Brush(), Interpolatable {
    override fun applyTo(size: Size, p: Paint, alpha: Float) {
        p.alpha = DefaultAlpha
        p.color =
            if (alpha != DefaultAlpha) {
                value.copy(alpha = value.alpha * alpha)
            } else {
                value
            }
        if (p.shader != null) p.shader = null
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SolidColor) return false
        if (value != other.value) return false

        return true
    }

    override fun hashCode(): Int {
        return value.hashCode()
    }

    override fun toString(): String {
        return "SolidColor(value=$value)"
    }


Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 456–490)

    override fun lerp(other: Any?, t: Float): Any? {
        var other = other
        if (other == null) {
            other = SolidColor(Color.Transparent)
        }
        if (other is SolidColor) {
            return SolidColor(lerp(value, other.value, t))
        }
        return null
    }
}

/** Brush implementation used to apply a linear gradient on a given [Paint] */
@Immutable
public class LinearGradient
internal constructor(
    @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
    @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
    internal val start: Offset,
    internal val end: Offset,
    internal val tileMode: TileMode = TileMode.Clamp,
) : ShaderBrush(), Interpolatable {

    override val intrinsicSize: Size
        get() =
            Size(
                if (start.x.isFinite() && end.x.isFinite()) abs(start.x - end.x) else Float.NaN,
                if (start.y.isFinite() && end.y.isFinite()) abs(start.y - end.y) else Float.NaN,
            )

    override fun createShader(size: Size): Shader {
        val startX = if (start.x == Float.POSITIVE_INFINITY) size.width else start.x
        val startY = if (start.y == Float.POSITIVE_INFINITY) size.height else start.y
        val endX = if (end.x == Float.POSITIVE_INFINITY) size.width else end.x
        val endY = if (end.y == Float.POSITIVE_INFINITY) size.height else end.y

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 491–525)

        return LinearGradientShader(
            colors = colors,
            colorStops = stops,
            from = Offset(startX, startY),
            to = Offset(endX, endY),
            tileMode = tileMode,
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is LinearGradient) return false

        if (colors != other.colors) return false
        if (stops != other.stops) return false
        if (start != other.start) return false
        if (end != other.end) return false
        if (tileMode != other.tileMode) return false

        return true
    }

    override fun hashCode(): Int {
        var result = colors.hashCode()
        result = 31 * result + (stops?.hashCode() ?: 0)
        result = 31 * result + start.hashCode()
        result = 31 * result + end.hashCode()
        result = 31 * result + tileMode.hashCode()
        return result
    }

    override fun toString(): String {
        val startValue = if (start.isFinite) "start=$start, " else ""
        val endValue = if (end.isFinite) "end=$end, " else ""
        return "LinearGradient(colors=$colors, " +

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 526–560)

            "stops=$stops, " +
            startValue +
            endValue +
            "tileMode=$tileMode)"
    }

    override fun lerp(other: Any?, t: Float): Any? {
        var other: Any? = other
        if (other == null) {
            other = SolidColor(Color.Transparent)
        }
        if (other is SolidColor) {
            // if it's a solid color, it means the entire shape is filled in solid. We want to
            // create a LinearGradient that creates a similar visual effect, so that we can lerp
            // between it and the target gradient without causing visual jumps
            other =
                LinearGradient(
                    colors = colors.fastMap { other.value },
                    stops = stops, // use the same color stops
                    start = start,
                    end = end,
                    tileMode = tileMode,
                )
        }
        if (other is LinearGradient) {
            return LinearGradient(
                colors = lerpColorList(colors, other.colors, t),
                stops = lerpNullableFloatList(stops, other.stops, t),
                start = lerpSafe(start, other.start, t),
                end = lerpSafe(end, other.end, t),
                tileMode = if (t < 0.5f) tileMode else other.tileMode,
            )
        }
        return null
    }

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 561–595)

}

/** Brush implementation used to apply a radial gradient on a given [Paint] */
@Immutable
public class RadialGradient
internal constructor(
    @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
    @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
    internal val center: Offset,
    internal val radius: Float,
    internal val tileMode: TileMode = TileMode.Clamp,
) : ShaderBrush(), Interpolatable {

    override val intrinsicSize: Size
        get() =
            if (radius.fastIsFinite()) {
                Size(radius * 2, radius * 2)
            } else {
                Size.Unspecified
            }

    override fun createShader(size: Size): Shader {
        val centerX: Float
        val centerY: Float
        if (center.isUnspecified) {
            val drawCenter = size.center
            centerX = drawCenter.x
            centerY = drawCenter.y
        } else {
            centerX = if (center.x == Float.POSITIVE_INFINITY) size.width else center.x
            centerY = if (center.y == Float.POSITIVE_INFINITY) size.height else center.y
        }

        return RadialGradientShader(
            colors = colors,

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 596–630)

            colorStops = stops,
            center = Offset(centerX, centerY),
            radius = if (radius == Float.POSITIVE_INFINITY) size.minDimension / 2 else radius,
            tileMode = tileMode,
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is RadialGradient) return false

        if (colors != other.colors) return false
        if (stops != other.stops) return false
        if (center != other.center) return false
        if (radius != other.radius) return false
        if (tileMode != other.tileMode) return false

        return true
    }

    override fun hashCode(): Int {
        var result = colors.hashCode()
        result = 31 * result + (stops?.hashCode() ?: 0)
        result = 31 * result + center.hashCode()
        result = 31 * result + radius.hashCode()
        result = 31 * result + tileMode.hashCode()
        return result
    }

    override fun toString(): String {
        val centerValue = if (center.isSpecified) "center=$center, " else ""
        val radiusValue = if (radius.fastIsFinite()) "radius=$radius, " else ""
        return "RadialGradient(" +
            "colors=$colors, " +
            "stops=$stops, " +

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 631–665)

            centerValue +
            radiusValue +
            "tileMode=$tileMode)"
    }

    override fun lerp(other: Any?, t: Float): Any? {
        var other: Any? = other
        if (other == null) {
            other = SolidColor(Color.Transparent)
        }
        if (other is SolidColor) {
            // if it's a solid color, it means the entire shape is filled in solid. We want to
            // create a RadialGradient that creates a similar visual effect, so that we can lerp
            // between it and the target gradient without causing visual jumps
            other =
                RadialGradient(
                    colors = colors.fastMap { other.value },
                    stops = stops, // use the same color stops
                    center = center,
                    radius = radius,
                    tileMode = tileMode,
                )
        }
        if (other is RadialGradient) {
            return RadialGradient(
                colors = lerpColorList(colors, other.colors, t),
                stops = lerpNullableFloatList(stops, other.stops, t),
                center = lerp(center, other.center, t),
                radius = lerp(radius, other.radius, t),
                tileMode = if (t < 0.5f) tileMode else other.tileMode,
            )
        }
        return null
    }
}

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 666–700)


@Suppress("PrimitiveInCollection")
internal fun lerpColorList(left: List<Color>, right: List<Color>, t: Float): List<Color> {
    return List(maxOf(left.size, right.size)) {
        val l = minOf(it, left.size - 1)
        val r = minOf(it, right.size - 1)
        lerp(left[l], right[r], t)
    }
}

@Suppress("PrimitiveInCollection")
internal fun lerpNullableFloatList(
    left: List<Float>?,
    right: List<Float>?,
    t: Float,
): List<Float>? {
    if (right == null || left == null) return null
    return lerpFloatList(left, right, t)
}

@Suppress("PrimitiveInCollection")
internal fun lerpFloatList(left: List<Float>, right: List<Float>, t: Float): List<Float> {
    return List(maxOf(left.size, right.size)) {
        val l = minOf(it, left.size - 1)
        val r = minOf(it, right.size - 1)
        lerp(left[l], right[r], t)
    }
}

internal fun lerpSafe(left: Offset, right: Offset, t: Float): Offset {
    return if (left.isFinite && right.isFinite) lerp(left, right, t)
    else if (t < 0.5f) left else right
}

/**

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 701–735)

 * Creates a composited result between 2 ShaderBrushes and the specified BlendMode. The specified
 * destination and source Shader inputs will be consumed as the source and destination images for
 * the corresponding blending algorithm.
 *
 * @param dstBrush ShaderBrush used as the destination content
 * @param srcBrush ShaderBrush used as the source content
 * @param blendMode BlendMode used to composite the source against the destination shader
 * @see BlendMode
 */
@Immutable
internal class CompositeShaderBrush(
    val dstBrush: ShaderBrush,
    val srcBrush: ShaderBrush,
    val blendMode: BlendMode,
) : ShaderBrush() {

    override fun createShader(size: Size): Shader =
        CompositeShader(dstBrush.createShader(size), srcBrush.createShader(size), blendMode)

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is CompositeShaderBrush) return false

        if (dstBrush != other.dstBrush) return false
        if (srcBrush != other.srcBrush) return false
        if (blendMode != other.blendMode) return false

        return true
    }

    override fun hashCode(): Int {
        var result = dstBrush.hashCode()
        result = 31 * result + srcBrush.hashCode()
        result = 31 * result + blendMode.hashCode()
        return result

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 71–105)

         *   its bounds. Defaults to [TileMode.Clamp] to repeat the edge pixels
         */
        @Stable
        public fun linearGradient(
            vararg colorStops: Pair<Float, Color>,
            start: Offset = Offset.Zero,
            end: Offset = Offset.Infinite,
            tileMode: TileMode = TileMode.Clamp,
        ): Brush =
            LinearGradient(
                colors = List<Color>(colorStops.size) { i -> colorStops[i].second },
                stops = List<Float>(colorStops.size) { i -> colorStops[i].first },
                start = start,
                end = end,
                tileMode = tileMode,
            )

        /**
         * Creates a linear gradient with the provided colors along the given start and end
         * coordinates. The colors are
         *
         * ```
         *  Brush.linearGradient(
         *      listOf(Color.Red, Color.Green, Color.Blue),
         *      start = Offset(0.0f, 50.0f),
         *      end = Offset(0.0f, 100.0f)
         * )
         * ```
         *
         * @sample androidx.compose.ui.graphics.samples.LinearGradientSample
         * @sample androidx.compose.ui.graphics.samples.GradientBrushSample
         * @param colors Colors to be rendered as part of the gradient
         * @param start Starting position of the linear gradient. This can be set to [Offset.Zero]
         *   to position at the far left and top of the drawing area
         * @param end Ending position of the linear gradient. This can be set to [Offset.Infinite]

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 736–770)

    }

    override fun toString(): String {
        return "CompositeShaderBrush(dstBrush=$dstBrush, srcBrush=$srcBrush, blendMode=$blendMode)"
    }
}

/** Brush implementation used to apply a sweep gradient on a given [Paint] */
@Immutable
public class SweepGradient
internal constructor(
    internal val center: Offset,
    @Suppress("PrimitiveInCollection") internal val colors: List<Color>,
    @Suppress("PrimitiveInCollection") internal val stops: List<Float>? = null,
) : ShaderBrush(), Interpolatable {

    override fun createShader(size: Size): Shader =
        SweepGradientShader(
            if (center.isUnspecified) {
                size.center
            } else {
                Offset(
                    if (center.x == Float.POSITIVE_INFINITY) size.width else center.x,
                    if (center.y == Float.POSITIVE_INFINITY) size.height else center.y,
                )
            },
            colors,
            stops,
        )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SweepGradient) return false

        if (center != other.center) return false

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 771–805)

        if (colors != other.colors) return false
        if (stops != other.stops) return false

        return true
    }

    override fun hashCode(): Int {
        var result = center.hashCode()
        result = 31 * result + colors.hashCode()
        result = 31 * result + (stops?.hashCode() ?: 0)
        return result
    }

    override fun toString(): String {
        val centerValue = if (center.isSpecified) "center=$center, " else ""
        return "SweepGradient(" + centerValue + "colors=$colors, stops=$stops)"
    }

    override fun lerp(other: Any?, t: Float): Any? {
        var other: Any? = other
        if (other == null) {
            other = SolidColor(Color.Transparent)
        }
        if (other is SolidColor) {
            other =
                SweepGradient(
                    center = center,
                    colors = colors.fastMap { other.value },
                    stops = stops,
                )
        }
        if (other is SweepGradient) {
            return SweepGradient(
                center = lerp(center, other.center, t),
                colors = lerpColorList(colors, other.colors, t),

Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 806–840)

                stops = lerpNullableFloatList(stops, other.stops, t),
            )
        }
        return null
    }
}

/**
 * Convenience method to create a ShaderBrush that always returns the same shader instance
 * regardless of size
 */
public fun ShaderBrush(shader: Shader): ShaderBrush =
    object : ShaderBrush() {

        /** Create a shader based on the given size that represents the current drawing area */
        override fun createShader(size: Size): Shader = shader
    }

/**
 * Brush implementation that wraps and applies a the provided shader to a [Paint] The shader can be
 * lazily created based on a given size, or provided directly as a parameter
 */
@Immutable
public abstract class ShaderBrush() : Brush() {

    private var internalTransformShader: TransformShader? = null
    private var createdSize = Size.Unspecified

    /** A transformation matrix for the shader. */
    public var transform: Matrix? = null
        set(value) {
            field = value
            internalTransformShader?.transform(value)
        }


Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)

## androidx.compose.ui.graphics Brush.kt source (lines 841–872)

    public abstract fun createShader(size: Size): Shader

    private fun obtainTransformShader(): TransformShader =
        internalTransformShader ?: TransformShader().also { internalTransformShader = it }

    final override fun applyTo(size: Size, p: Paint, alpha: Float) {
        var transformShader = internalTransformShader
        if (transformShader == null || createdSize != size) {
            if (size.isEmpty()) {
                transformShader = null
                internalTransformShader = null
                createdSize = Size.Unspecified
            } else {
                transformShader =
                    obtainTransformShader().apply {
                        if (transform != null) {
                            transform(transform)
                        }
                        shader = createShader(size)
                    }
                internalTransformShader = transformShader
                createdSize = size
            }
        }
        if (p.color != Color.Black) p.color = Color.Black
        // Note that [transformShader.shader] might not be equal to returned object from
        // [createShader] function.
        if (p.shader != transformShader?.shader) p.shader = transformShader?.shader
        if (p.alpha != alpha) p.alpha = alpha
    }
}


Sources: [live-androidx-ui-ui-graphics-ui-graphics-brush-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Brush.kt)
