---
type: reference
title: androidx.compose.ui.graphics Color.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 1
    endLine: 35
    sha256: 16548d75d2d9d4dd15412bd31afa006378723d3046b3a72b799bad516a4ccd7a
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

      import androidx.annotation.ColorInt
      import androidx.annotation.FloatRange
      import androidx.annotation.IntRange
      import androidx.annotation.Size
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.graphics.colorspace.ColorModel
      import androidx.compose.ui.graphics.colorspace.ColorSpace
      import androidx.compose.ui.graphics.colorspace.ColorSpaces
      import androidx.compose.ui.graphics.colorspace.Rgb
      import androidx.compose.ui.graphics.colorspace.connect
      import androidx.compose.ui.util.fastCoerceIn
      import androidx.compose.ui.util.lerp
      import kotlin.math.max
      import kotlin.math.min

      /**
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 106
    endLine: 140
    sha256: d32adb59ad1c57ef04c59cebf8c78176f177e5d1569839ea336c5a45d5468a03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the limitations of half-precision float values, please refer to the documentation of the
       * [Float16] class.
       *
       * The values returned by these methods depend on the color space encoded in the color long. The
       * values are however typically in the `[0..1]` range for RGB colors. Please refer to the
       * documentation of the various [color spaces][ColorSpaces] for the exact ranges.
       */
      @Immutable
      @kotlin.jvm.JvmInline
      public value class Color(public val value: ULong) {
          /**
           * Returns this color's color space.
           *
           * @return A non-null instance of [ColorSpace]
           */
          @Stable
          public val colorSpace: ColorSpace
              get() = ColorSpaces.getColorSpace((value and 0x3fUL).toInt())

          /**
           * Converts this color from its color space to the specified color space. The conversion is done
           * using the default rendering intent as specified by [ColorSpace.connect].
           *
           * @param colorSpace The destination color space, cannot be null
           * @return A non-null color instance in the specified color space
           */
          public fun convert(colorSpace: ColorSpace): Color {
              // If the destination color space is the same as this color's color space,
              // the connector we get will be the identity connector
              val connector = this.colorSpace.connect(colorSpace)
              return connector.transformToColor(this)
          }

          /**
           * Returns the value of the red component in the range defined by this color's color space (see
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 141
    endLine: 175
    sha256: 66b52da6dd75d14b60a9a3014580119e0ba80792f24e4685021c4ebb7eb0e123
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
           *
           * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the first component
           * of the ColorSpace.
           *
           * @see alpha
           * @see blue
           * @see green
           */
          @Stable
          public val red: Float
              get() {
                  return if ((value and 0x3fUL) == 0UL) {
                      ((value shr 48) and 0xffUL).toFloat() / 255.0f
                  } else {
                      halfToFloat(((value shr 48) and 0xffffUL).toShort())
                  }
              }

          /**
           * Returns the value of the green component in the range defined by this color's color space
           * (see [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
           *
           * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the second
           * component of the ColorSpace.
           *
           * @see alpha
           * @see red
           * @see blue
           */
          @Stable
          public val green: Float
              get() {
                  return if ((value and 0x3fUL) == 0UL) {
                      ((value shr 40) and 0xffUL).toFloat() / 255.0f
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 176
    endLine: 210
    sha256: 232824573f1fcb466d3979421513bdaf74b94f9305b85035657e61350246e2c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      halfToFloat(((value shr 32) and 0xffffUL).toShort())
                  }
              }

          /**
           * Returns the value of the blue component in the range defined by this color's color space (see
           * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
           *
           * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the third component
           * of the ColorSpace.
           *
           * @see alpha
           * @see red
           * @see green
           */
          @Stable
          public val blue: Float
              get() {
                  return if ((value and 0x3fUL) == 0UL) {
                      ((value shr 32) and 0xffUL).toFloat() / 255.0f
                  } else {
                      halfToFloat(((value shr 16) and 0xffffUL).toShort())
                  }
              }

          /**
           * Returns the value of the alpha component in the range `[0..1]`.
           *
           * @see red
           * @see green
           * @see blue
           */
          @Stable
          public val alpha: Float
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 211
    endLine: 245
    sha256: cd35dbdc6426605c3b1b5139319168627eb5a02fbe04e5776a1682405ad93ef7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              get() {
                  return if ((value and 0x3fUL) == 0UL) {
                      ((value shr 56) and 0xffUL).toFloat() / 255.0f
                  } else {
                      ((value shr 6) and 0x3ffUL).toFloat() / 1023.0f
                  }
              }

          @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component1(): Float = red

          @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component2(): Float = green

          @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component3(): Float = blue

          @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component4(): Float = alpha

          @Suppress("NOTHING_TO_INLINE")
          @Stable
          public inline operator fun component5(): ColorSpace = colorSpace

          /**
           * Copies the existing color, changing only the provided values. The [ColorSpace][colorSpace] of
           * the returned [Color] is the same as this [colorSpace].
           */
          @Stable
          public fun copy(
              alpha: Float = this.alpha,
              red: Float = this.red,
              green: Float = this.green,
              blue: Float = this.blue,
          ): Color =
              Color(red = red, green = green, blue = blue, alpha = alpha, colorSpace = this.colorSpace)

          /**
           * Returns a string representation of the object. This method returns a string equal to the
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 246
    endLine: 280
    sha256: ffb1795be0614db4b73c7102768ec3c9e9058597c3f9363b1bafa739902bd14f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * value of:
           *
           *     "Color($r, $g, $b, $a, ${colorSpace.name})"
           *
           * For instance, the string representation of opaque black in the sRGB color space is equal to
           * the following value:
           *
           *     Color(0.0, 0.0, 0.0, 1.0, sRGB IEC61966-2.1)
           *
           * @return A non-null string representation of the object
           */
          override fun toString(): String {
              return "Color($red, $green, $blue, $alpha, ${colorSpace.name})"
          }

          public companion object {
              @Stable
              public val Black: Color
                  get() = Color(0xFF000000)

              @Stable
              public val DarkGray: Color
                  get() = Color(0xFF444444)

              @Stable
              public val Gray: Color
                  get() = Color(0xFF888888)

              @Stable
              public val LightGray: Color
                  get() = Color(0xFFCCCCCC)

              @Stable
              public val White: Color
                  get() = Color(0xFFFFFFFF)
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 281
    endLine: 315
    sha256: d39b1e75e4f43ccaca94c22b996eff70ec97dd2ac965fd36bd0ded3b34325d45
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              @Stable
              public val Red: Color
                  get() = Color(0xFFFF0000)

              @Stable
              public val Green: Color
                  get() = Color(0xFF00FF00)

              @Stable
              public val Blue: Color
                  get() = Color(0xFF0000FF)

              @Stable
              public val Yellow: Color
                  get() = Color(0xFFFFFF00)

              @Stable
              public val Cyan: Color
                  get() = Color(0xFF00FFFF)

              @Stable
              public val Magenta: Color
                  get() = Color(0xFFFF00FF)

              @Stable
              public val Transparent: Color
                  get() = Color(0x00000000)

              /**
               * Because Color is an inline class, this represents an unset value without having to box
               * the Color. It will be treated as [Transparent] when drawn. A Color can compare with
               * [Unspecified] for equality or use [isUnspecified] to check for the unset value or
               * [isSpecified] for any color that isn't [Unspecified].
               */
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 316
    endLine: 350
    sha256: 3047663a6edb91c336dc14278a22e70e48c79cd683e405305c447a7e985f7466
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              @Stable
              public val Unspecified: Color
                  get() = Color(0f, 0f, 0f, 0f, ColorSpaces.Unspecified)

              /**
               * Return a [Color] from [hue], [saturation], and [value] (HSV representation).
               *
               * @param hue The color value in the range (0..360), where 0 is red, 120 is green, and 240
               *   is blue
               * @param saturation The amount of [hue] represented in the color in the range (0..1), where
               *   0 has no color and 1 is fully saturated.
               * @param alpha Alpha channel to apply to the computed color
               * @param value The strength of the color, where 0 is black.
               * @param colorSpace The RGB color space used to calculate the Color from the HSV values.
               */
              public fun hsv(
                  hue: Float,
                  saturation: Float,
                  value: Float,
                  alpha: Float = 1f,
                  colorSpace: Rgb = ColorSpaces.Srgb,
              ): Color {
                  requirePrecondition(hue in 0f..360f && saturation in 0f..1f && value in 0f..1f) {
                      "HSV ($hue, $saturation, $value) must be in range (0..360, 0..1, 0..1)"
                  }
                  val red = hsvToRgbComponent(5, hue, saturation, value)
                  val green = hsvToRgbComponent(3, hue, saturation, value)
                  val blue = hsvToRgbComponent(1, hue, saturation, value)
                  return Color(red, green, blue, alpha, colorSpace)
              }

              private fun hsvToRgbComponent(n: Int, h: Float, s: Float, v: Float): Float {
                  val k = (n.toFloat() + h / 60f) % 6f
                  return v - (v * s * max(0f, minOf(k, 4 - k, 1f)))
              }
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 351
    endLine: 385
    sha256: 8e77495904474f30187799c0401ba85f85876b62ca594dd43c3632ac40d34b87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /**
               * Return a [Color] from [hue], [saturation], and [lightness] (HSL representation).
               *
               * @param hue The color value in the range (0..360), where 0 is red, 120 is green, and 240
               *   is blue
               * @param saturation The amount of [hue] represented in the color in the range (0..1), where
               *   0 has no color and 1 is fully saturated.
               * @param lightness A range of (0..1) where 0 is black, 0.5 is fully colored, and 1 is
               *   white.
               * @param alpha Alpha channel to apply to the computed color
               * @param colorSpace The RGB color space used to calculate the Color from the HSL values.
               */
              public fun hsl(
                  hue: Float,
                  saturation: Float,
                  lightness: Float,
                  alpha: Float = 1f,
                  colorSpace: Rgb = ColorSpaces.Srgb,
              ): Color {
                  requirePrecondition(hue in 0f..360f && saturation in 0f..1f && lightness in 0f..1f) {
                      "HSL ($hue, $saturation, $lightness) must be in range (0..360, 0..1, 0..1)"
                  }
                  val red = hslToRgbComponent(0, hue, saturation, lightness)
                  val green = hslToRgbComponent(8, hue, saturation, lightness)
                  val blue = hslToRgbComponent(4, hue, saturation, lightness)
                  return Color(red, green, blue, alpha, colorSpace)
              }

              private fun hslToRgbComponent(n: Int, h: Float, s: Float, l: Float): Float {
                  val k = (n.toFloat() + h / 30f) % 12f
                  val a = s * min(l, 1f - l)
                  return l - a * max(-1f, minOf(k - 3, 9 - k, 1f))
              }
          }
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 36
    endLine: 70
    sha256: 7a3b55e4eee486e78e6058d9e7e2b7dbce285fc8c55913c18282cfc7fedeaf7a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The `Color` class contains color information to be used while painting in [Canvas]. `Color`
       * supports [ColorSpace]s with 3 [components][ColorSpace.componentCount], plus one for [alpha].
       *
       * ### Creating
       *
       * `Color` can be created with one of these methods:
       *
       *     // from 4 separate [Float] components. Alpha and ColorSpace are optional
       *     val rgbaWhiteFloat = Color(red = 1f, green = 1f, blue = 1f, alpha = 1f,
       *         ColorSpace.get(ColorSpaces.Srgb))
       *     // from a 32-bit SRGB color integer
       *     val fromIntWhite = Color(android.graphics.Color.WHITE)
       *     val fromLongBlue = Color(0xFF0000FF)
       *     // from SRGB integer component values. Alpha is optional
       *     val rgbaWhiteInt = Color(red = 0xFF, green = 0xFF, blue = 0xFF, alpha = 0xFF)
       *
       * ### Representation
       *
       * A `Color` always defines a color using 4 components packed in a single 64 bit long value. One of
       * these components is always alpha while the other three components depend on the color space's
       * [color model][ColorModel]. The most common color model is the [RGB][ColorModel.Rgb] model in
       * which the components represent red, green, and blue values.
       *
       * **Component ranges:** the ranges defined in the tables below indicate the ranges that can be
       * encoded in a color long. They do not represent the actual ranges as they may differ per color
       * space. For instance, the RGB components of a color in the [Display P3][ColorSpaces.DisplayP3]
       * color space use the `[0..1]` range. Please refer to the documentation of the various
       * [color spaces][ColorSpaces] to find their respective ranges.
       *
       * **Alpha range:** while alpha is encoded in a color long using a 10 bit integer (thus using a
       * range of `[0..1023]`), it is converted to and from `[0..1]` float values when decoding and
       * encoding color longs.
       *
       * **sRGB color space:** for compatibility reasons and ease of use, `Color` encoded
       * [sRGB][ColorSpaces.Srgb] colors do not use the same encoding as other color longs.
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 386
    endLine: 420
    sha256: d58001badb1ab216f0572f3b56adc0099f8faf13490e383da49467caaf77de96
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      // Same as Color.Unspecified.packedValue, but avoids a getstatic
      @PublishedApi internal const val UnspecifiedColor: ULong = 0x10UL

      /**
       * Create a [Color] by passing individual [red], [green], [blue], [alpha], and [colorSpace]
       * components. The default [color space][ColorSpace] is [sRGB][ColorSpaces.Srgb] and the default
       * [alpha] is `1.0` (opaque).
       *
       * If the [red], [green], or [blue] values are outside of the range defined by [colorSpace] (see
       * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue], these values get clamped appropriately to
       * be within range.
       *
       * @throws IllegalArgumentException If [colorSpace] does not have [ColorSpace.componentCount] equal
       *   to 3.
       * @throws IllegalArgumentException If [colorSpace] has an [ColorSpace.id] set to
       *   [ColorSpace.MinId].
       */
      @Stable
      public fun Color(
          red: Float,
          green: Float,
          blue: Float,
          alpha: Float = 1f,
          colorSpace: ColorSpace = ColorSpaces.Srgb,
      ): Color {
          if (colorSpace.isSrgb) {
              val argb =
                  (((alpha.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 24) or
                      ((red.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 16) or
                      ((green.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 8) or
                      (blue.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt())
              return Color(argb.toULong() shl 32)
          }
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 421
    endLine: 455
    sha256: 13692101a51f89542aa5e3188498b1d1225eec05b7b72675ba3475c13a941e35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          requirePrecondition(colorSpace.componentCount == 3) {
              "Color only works with ColorSpaces with 3 components"
          }

          val id = colorSpace.id
          requirePrecondition(id != ColorSpace.MinId) {
              "Unknown color space, please use a color space in ColorSpaces"
          }

          val r = floatToHalf(red.fastCoerceIn(colorSpace.getMinValue(0), colorSpace.getMaxValue(0)))
          val g = floatToHalf(green.fastCoerceIn(colorSpace.getMinValue(1), colorSpace.getMaxValue(1)))
          val b = floatToHalf(blue.fastCoerceIn(colorSpace.getMinValue(2), colorSpace.getMaxValue(2)))
          val a = (alpha.fastCoerceIn(0.0f, 1.0f) * 1023.0f + 0.5f).toInt()

          return Color(
              (((r.toLong() and 0xffffL) shl 48) or
                      ((g.toLong() and 0xffffL) shl 32) or
                      ((b.toLong() and 0xffffL) shl 16) or
                      ((a.toLong() and 0x03ffL) shl 6) or
                      (id.toLong() and 0x003fL))
                  .toULong()
          )
      }

      /**
       * Create a [Color] by passing individual [red], [green], [blue], [alpha], and [colorSpace]
       * components. This function is equivalent to [Color] but doesn't perform any check/validation of
       * the parameters. It is meant to be used when the color space and values are known to be valid by
       * construction, for instance when lerping colors.
       */
      @Stable
      internal fun UncheckedColor(
          red: Float,
          green: Float,
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 456
    endLine: 490
    sha256: 955b763f83baf130d9b328fbc446e04b30437e5adff0cf4fd882242f1518de14
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          blue: Float,
          alpha: Float = 1f,
          colorSpace: ColorSpace = ColorSpaces.Srgb,
      ): Color {
          if (colorSpace.isSrgb) {
              val argb =
                  (((alpha * 255.0f + 0.5f).toInt() shl 24) or
                      ((red * 255.0f + 0.5f).toInt() shl 16) or
                      ((green * 255.0f + 0.5f).toInt() shl 8) or
                      (blue * 255.0f + 0.5f).toInt())
              return Color(argb.toULong() shl 32)
          }

          val r = floatToHalf(red)
          val g = floatToHalf(green)
          val b = floatToHalf(blue)

          val a = (max(0.0f, min(alpha, 1.0f)) * 1023.0f + 0.5f).toInt()

          val id = colorSpace.id

          return Color(
              (((r.toLong() and 0xffffL) shl 48) or
                      ((g.toLong() and 0xffffL) shl 32) or
                      ((b.toLong() and 0xffffL) shl 16) or
                      ((a.toLong() and 0x03ffL) shl 6) or
                      (id.toLong() and 0x003fL))
                  .toULong()
          )
      }

      /**
       * Creates a new [Color] instance from an ARGB color int. The resulting color is in the
       * [sRGB][ColorSpaces.Srgb] color space.
       *
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 491
    endLine: 525
    sha256: e2b065c72c6d68d58053d86ecf7756c27608d483d5fd42f7bbda84222778c5f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param color The ARGB color int to create a <code>Color</code> from.
       * @return A non-null instance of {@link Color}
       */
      @Stable
      public fun Color(@ColorInt color: Int): Color {
          return Color(color.toULong() shl 32)
      }

      /**
       * Creates a new [Color] instance from an ARGB color int. The resulting color is in the
       * [sRGB][ColorSpaces.Srgb] color space. This is useful for specifying colors with alpha greater
       * than 0x80 in numeric form without using [Long.toInt]:
       *
       *     val color = Color(0xFF000080)
       *
       * @param color The 32-bit ARGB color int to create a <code>Color</code> from
       * @return A non-null instance of {@link Color}
       */
      @Stable
      public fun Color(color: Long): Color {
          return Color((color shl 32).toULong())
      }

      /**
       * Creates a new [Color] instance from an ARGB color components. The resulting color is in the
       * [sRGB][ColorSpaces.Srgb] color space. The default alpha value is `0xFF` (opaque).
       *
       * @param red The red component of the color, between 0 and 255.
       * @param green The green component of the color, between 0 and 255.
       * @param blue The blue component of the color, between 0 and 255.
       * @param alpha The alpha component of the color, between 0 and 255.
       * @return A non-null instance of {@link Color}
       */
      @Stable
      public fun Color(
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 526
    endLine: 560
    sha256: a843ad5e616e24c727533771424a48e685d5a7858b408b4a037ae3e8a0f807b4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @IntRange(from = 0, to = 0xFF) red: Int,
          @IntRange(from = 0, to = 0xFF) green: Int,
          @IntRange(from = 0, to = 0xFF) blue: Int,
          @IntRange(from = 0, to = 0xFF) alpha: Int = 0xFF,
      ): Color {
          val color =
              ((alpha and 0xFF) shl 24) or
                  ((red and 0xFF) shl 16) or
                  ((green and 0xFF) shl 8) or
                  (blue and 0xFF)
          return Color(color)
      }

      /**
       * Linear interpolate between two [Colors][Color], [start] and [stop] with [fraction] fraction
       * between the two. The [ColorSpace] of the result is always the [ColorSpace][Color.colorSpace] of
       * [stop]. [fraction] should be between 0 and 1, inclusive. Interpolation is done in the
       * [ColorSpaces.Oklab] color space.
       */
      @Stable
      public fun lerp(
          start: Color,
          stop: Color,
          @FloatRange(from = 0.0, to = 1.0) fraction: Float,
      ): Color {
          val colorSpace = ColorSpaces.Oklab
          val startColor = start.convert(colorSpace)
          val endColor = stop.convert(colorSpace)

          val startAlpha = startColor.alpha
          val startL = startColor.red
          val startA = startColor.green
          val startB = startColor.blue

          val endAlpha = endColor.alpha
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 561
    endLine: 595
    sha256: 182d8ea5f7b17956e3f5b83b472387e1023e94ab0142df2303bc39cbb0c956ec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          val endL = endColor.red
          val endA = endColor.green
          val endB = endColor.blue

          // We need to clamp the input fraction since over/undershoot easing curves
          // can yield fractions outside of the 0..1 range, which would in turn cause
          // Lab/alpha values to be outside of the valid color range.
          // Clamping the fraction is cheaper than clamping all 4 components separately.
          val t = fraction.fastCoerceIn(0.0f, 1.0f)
          val interpolated =
              UncheckedColor(
                  lerp(startL, endL, t),
                  lerp(startA, endA, t),
                  lerp(startB, endB, t),
                  lerp(startAlpha, endAlpha, t),
                  colorSpace,
              )
          return interpolated.convert(stop.colorSpace)
      }

      /**
       * Composites [this] color on top of [background] using the Porter-Duff 'source over' mode.
       *
       * Both [this] and [background] must not be pre-multiplied, and the resulting color will also not be
       * pre-multiplied.
       *
       * The [ColorSpace] of the result is always the [ColorSpace][Color.colorSpace] of [background].
       *
       * @return the [Color] representing [this] composited on top of [background], converted to the color
       *   space of [background].
       */
      @Stable
      public fun Color.compositeOver(background: Color): Color {
          val fg = this.convert(background.colorSpace)
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 596
    endLine: 630
    sha256: d2ab1f51030325258ed826372dec71aca01ecea4a0f645f4f0e27ee48160dd2b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val bgA = background.alpha
          val fgA = fg.alpha
          val a = fgA + (bgA * (1f - fgA))

          val r = compositeComponent(fg.red, background.red, fgA, bgA, a)
          val g = compositeComponent(fg.green, background.green, fgA, bgA, a)
          val b = compositeComponent(fg.blue, background.blue, fgA, bgA, a)

          return UncheckedColor(r, g, b, a, background.colorSpace)
      }

      /**
       * Composites the given [foreground component][fgC] over the [background component][bgC], with
       * foreground and background alphas of [fgA] and [bgA] respectively.
       *
       * This uses a pre-calculated composite destination alpha of [a] for efficiency.
       */
      @Suppress("NOTHING_TO_INLINE")
      private inline fun compositeComponent(fgC: Float, bgC: Float, fgA: Float, bgA: Float, a: Float) =
          if (a == 0f) 0f else ((fgC * fgA) + ((bgC * bgA) * (1f - fgA))) / a

      /**
       * Returns this color's components as a new array. The last element of the array is always the alpha
       * component.
       *
       * @return A new, non-null array whose size is 4
       */
      @Size(value = 4)
      private fun Color.getComponents(): FloatArray = floatArrayOf(red, green, blue, alpha)

      /**
       * Returns the relative luminance of this color.
       *
       * Based on the formula for relative luminance defined in WCAG 2.0, W3C Recommendation 11
       * December 2008.
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 631
    endLine: 665
    sha256: 58fd9e0865ce44d88cb890a57bfb8251120be6c31fa84dec1c403cefab9e369d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @return A value between 0 (darkest black) and 1 (lightest white)
       * @throws IllegalArgumentException If the this color's color space does not use the
       *   [RGB][ColorModel.Rgb] color model
       */
      @Stable
      public fun Color.luminance(): Float {
          val colorSpace = colorSpace
          requirePrecondition(colorSpace.model == ColorModel.Rgb) {
              "The specified color must be encoded in an RGB color space. " +
                  "The supplied color space is ${colorSpace.model}"
          }

          val eotf = (colorSpace as Rgb).eotfFunc
          val r = eotf(red.toDouble())
          val g = eotf(green.toDouble())
          val b = eotf(blue.toDouble())

          return (((0.2126 * r) + (0.7152 * g) + (0.0722 * b)).toFloat()).fastCoerceIn(0.0f, 1.0f)
      }

      /**
       * Converts this color to an ARGB color int. A color int is always in the [sRGB][ColorSpaces.Srgb]
       * color space. This implies a color space conversion is applied if needed.
       *
       * @return An ARGB color in the sRGB color space
       */
      @Stable
      @ColorInt
      public fun Color.toArgb(): Int {
          return (convert(ColorSpaces.Srgb).value shr 32).toInt()
      }

      /** `false` when this is [Color.Unspecified]. */
      @Stable
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 666
    endLine: 691
    sha256: 9a17db1d746fc7b802befc02a02460d4f28e21102a89bc742a06ce3ccf157cf0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      public inline val Color.isSpecified: Boolean
          get() = value != UnspecifiedColor

      /** `true` when this is [Color.Unspecified]. */
      @Stable
      public inline val Color.isUnspecified: Boolean
          get() = value == UnspecifiedColor

      /**
       * If this color [isSpecified] then this is returned, otherwise [block] is executed and its result
       * is returned.
       */
      public inline fun Color.takeOrElse(block: () -> Color): Color = if (isSpecified) this else block()

      /**
       * Alternative to `() -> Color` that's useful for avoiding boxing.
       *
       * Can be used as:
       *
       * fun nonBoxedArgs(color: ColorProducer?)
       */
      public fun interface ColorProducer {
          /** Return the color */
          public operator fun invoke(): Color
      }
  - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
    startLine: 71
    endLine: 105
    sha256: 34637037b53b81c0a538c4639dea38875adb68d1c10e41908b42bbabdd21034c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * ```
       * | Component | Name        | Size    | Range                 |
       * |-----------|-------------|---------|-----------------------|
       * | [RGB][ColorSpace.Model.Rgb] color model                   |
       * | R         | Red         | 16 bits | `[-65504.0, 65504.0]` |
       * | G         | Green       | 16 bits | `[-65504.0, 65504.0]` |
       * | B         | Blue        | 16 bits | `[-65504.0, 65504.0]` |
       * | A         | Alpha       | 10 bits | `[0..1023]`           |
       * |           | Color space | 6 bits  | `[0..63]`             |
       * | [SRGB][ColorSpaces.Srgb] color space                      |
       * | A         | Alpha       | 8 bits  | `[0..255]`            |
       * | R         | Red         | 8 bits  | `[0..255]`            |
       * | G         | Green       | 8 bits  | `[0..255]`            |
       * | B         | Blue        | 8 bits  | `[0..255]`            |
       * | X         | Unused      | 32 bits | `[0]`                 |
       * | [XYZ][ColorSpace.Model.Xyz] color model                   |
       * | X         | X           | 16 bits | `[-65504.0, 65504.0]` |
       * | Y         | Y           | 16 bits | `[-65504.0, 65504.0]` |
       * | Z         | Z           | 16 bits | `[-65504.0, 65504.0]` |
       * | A         | Alpha       | 10 bits | `[0..1023]`           |
       * |           | Color space | 6 bits  | `[0..63]`             |
       * | [Lab][ColorSpace.Model.Lab] color model                   |
       * | L         | L           | 16 bits | `[-65504.0, 65504.0]` |
       * | a         | a           | 16 bits | `[-65504.0, 65504.0]` |
       * | b         | b           | 16 bits | `[-65504.0, 65504.0]` |
       * | A         | Alpha       | 10 bits | `[0..1023]`           |
       * |           | Color space | 6 bits  | `[0..63]`             |
       * ```
       *
       * The components in this table are listed in encoding order, which is why color longs in the RGB
       * model are called RGBA colors (even if this doesn't quite hold for the special case of sRGB
       * colors).
       *
       * The color encoding relies on half-precision float values (fp16). If you wish to know more about
compose:
  id: live-androidx-ui-ui-graphics-ui-graphics-color
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-1
      title: androidx.compose.ui.graphics Color.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-106
      title: androidx.compose.ui.graphics Color.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-141
      title: androidx.compose.ui.graphics Color.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-176
      title: androidx.compose.ui.graphics Color.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-211
      title: androidx.compose.ui.graphics Color.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-246
      title: androidx.compose.ui.graphics Color.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-281
      title: androidx.compose.ui.graphics Color.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.isSpecified
        - androidx.compose.ui.graphics.isUnspecified
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-316
      title: androidx.compose.ui.graphics Color.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-351
      title: androidx.compose.ui.graphics Color.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-36
      title: androidx.compose.ui.graphics Color.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-386
      title: androidx.compose.ui.graphics Color.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-421
      title: androidx.compose.ui.graphics Color.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-456
      title: androidx.compose.ui.graphics Color.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-491
      title: androidx.compose.ui.graphics Color.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-526
      title: androidx.compose.ui.graphics Color.kt source (lines 526–560)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.lerp
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-561
      title: androidx.compose.ui.graphics Color.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.lerp
        - androidx.compose.ui.graphics.compositeOver
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-596
      title: androidx.compose.ui.graphics Color.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.luminance
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-631
      title: androidx.compose.ui.graphics Color.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.luminance
        - androidx.compose.ui.graphics.toArgb
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-666
      title: androidx.compose.ui.graphics Color.kt source (lines 666–691)
      aliases:
        - androidx.compose.ui.graphics.Color
        - androidx.compose.ui.graphics.isSpecified
        - androidx.compose.ui.graphics.isUnspecified
        - androidx.compose.ui.graphics.takeOrElse
        - androidx.compose.ui.graphics.ColorProducer
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-graphics-ui-graphics-color-lines-71
      title: androidx.compose.ui.graphics Color.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.graphics.Color
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-androidx-ui-ui-graphics-ui-graphics-color-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.graphics Color.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt

## androidx.compose.ui.graphics Color.kt source (lines 1–35)

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

import androidx.annotation.ColorInt
import androidx.annotation.FloatRange
import androidx.annotation.IntRange
import androidx.annotation.Size
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.colorspace.ColorModel
import androidx.compose.ui.graphics.colorspace.ColorSpace
import androidx.compose.ui.graphics.colorspace.ColorSpaces
import androidx.compose.ui.graphics.colorspace.Rgb
import androidx.compose.ui.graphics.colorspace.connect
import androidx.compose.ui.util.fastCoerceIn
import androidx.compose.ui.util.lerp
import kotlin.math.max
import kotlin.math.min

/**

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 106–140)

 * the limitations of half-precision float values, please refer to the documentation of the
 * [Float16] class.
 *
 * The values returned by these methods depend on the color space encoded in the color long. The
 * values are however typically in the `[0..1]` range for RGB colors. Please refer to the
 * documentation of the various [color spaces][ColorSpaces] for the exact ranges.
 */
@Immutable
@kotlin.jvm.JvmInline
public value class Color(public val value: ULong) {
    /**
     * Returns this color's color space.
     *
     * @return A non-null instance of [ColorSpace]
     */
    @Stable
    public val colorSpace: ColorSpace
        get() = ColorSpaces.getColorSpace((value and 0x3fUL).toInt())

    /**
     * Converts this color from its color space to the specified color space. The conversion is done
     * using the default rendering intent as specified by [ColorSpace.connect].
     *
     * @param colorSpace The destination color space, cannot be null
     * @return A non-null color instance in the specified color space
     */
    public fun convert(colorSpace: ColorSpace): Color {
        // If the destination color space is the same as this color's color space,
        // the connector we get will be the identity connector
        val connector = this.colorSpace.connect(colorSpace)
        return connector.transformToColor(this)
    }

    /**
     * Returns the value of the red component in the range defined by this color's color space (see

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 141–175)

     * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
     *
     * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the first component
     * of the ColorSpace.
     *
     * @see alpha
     * @see blue
     * @see green
     */
    @Stable
    public val red: Float
        get() {
            return if ((value and 0x3fUL) == 0UL) {
                ((value shr 48) and 0xffUL).toFloat() / 255.0f
            } else {
                halfToFloat(((value shr 48) and 0xffffUL).toShort())
            }
        }

    /**
     * Returns the value of the green component in the range defined by this color's color space
     * (see [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
     *
     * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the second
     * component of the ColorSpace.
     *
     * @see alpha
     * @see red
     * @see blue
     */
    @Stable
    public val green: Float
        get() {
            return if ((value and 0x3fUL) == 0UL) {
                ((value shr 40) and 0xffUL).toFloat() / 255.0f

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 176–210)

            } else {
                halfToFloat(((value shr 32) and 0xffffUL).toShort())
            }
        }

    /**
     * Returns the value of the blue component in the range defined by this color's color space (see
     * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue]).
     *
     * If this color's color model is not [RGB][ColorModel.Rgb], calling this is the third component
     * of the ColorSpace.
     *
     * @see alpha
     * @see red
     * @see green
     */
    @Stable
    public val blue: Float
        get() {
            return if ((value and 0x3fUL) == 0UL) {
                ((value shr 32) and 0xffUL).toFloat() / 255.0f
            } else {
                halfToFloat(((value shr 16) and 0xffffUL).toShort())
            }
        }

    /**
     * Returns the value of the alpha component in the range `[0..1]`.
     *
     * @see red
     * @see green
     * @see blue
     */
    @Stable
    public val alpha: Float

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 211–245)

        get() {
            return if ((value and 0x3fUL) == 0UL) {
                ((value shr 56) and 0xffUL).toFloat() / 255.0f
            } else {
                ((value shr 6) and 0x3ffUL).toFloat() / 1023.0f
            }
        }

    @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component1(): Float = red

    @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component2(): Float = green

    @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component3(): Float = blue

    @Suppress("NOTHING_TO_INLINE") @Stable public inline operator fun component4(): Float = alpha

    @Suppress("NOTHING_TO_INLINE")
    @Stable
    public inline operator fun component5(): ColorSpace = colorSpace

    /**
     * Copies the existing color, changing only the provided values. The [ColorSpace][colorSpace] of
     * the returned [Color] is the same as this [colorSpace].
     */
    @Stable
    public fun copy(
        alpha: Float = this.alpha,
        red: Float = this.red,
        green: Float = this.green,
        blue: Float = this.blue,
    ): Color =
        Color(red = red, green = green, blue = blue, alpha = alpha, colorSpace = this.colorSpace)

    /**
     * Returns a string representation of the object. This method returns a string equal to the

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 246–280)

     * value of:
     *
     *     "Color($r, $g, $b, $a, ${colorSpace.name})"
     *
     * For instance, the string representation of opaque black in the sRGB color space is equal to
     * the following value:
     *
     *     Color(0.0, 0.0, 0.0, 1.0, sRGB IEC61966-2.1)
     *
     * @return A non-null string representation of the object
     */
    override fun toString(): String {
        return "Color($red, $green, $blue, $alpha, ${colorSpace.name})"
    }

    public companion object {
        @Stable
        public val Black: Color
            get() = Color(0xFF000000)

        @Stable
        public val DarkGray: Color
            get() = Color(0xFF444444)

        @Stable
        public val Gray: Color
            get() = Color(0xFF888888)

        @Stable
        public val LightGray: Color
            get() = Color(0xFFCCCCCC)

        @Stable
        public val White: Color
            get() = Color(0xFFFFFFFF)

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 281–315)


        @Stable
        public val Red: Color
            get() = Color(0xFFFF0000)

        @Stable
        public val Green: Color
            get() = Color(0xFF00FF00)

        @Stable
        public val Blue: Color
            get() = Color(0xFF0000FF)

        @Stable
        public val Yellow: Color
            get() = Color(0xFFFFFF00)

        @Stable
        public val Cyan: Color
            get() = Color(0xFF00FFFF)

        @Stable
        public val Magenta: Color
            get() = Color(0xFFFF00FF)

        @Stable
        public val Transparent: Color
            get() = Color(0x00000000)

        /**
         * Because Color is an inline class, this represents an unset value without having to box
         * the Color. It will be treated as [Transparent] when drawn. A Color can compare with
         * [Unspecified] for equality or use [isUnspecified] to check for the unset value or
         * [isSpecified] for any color that isn't [Unspecified].
         */

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 316–350)

        @Stable
        public val Unspecified: Color
            get() = Color(0f, 0f, 0f, 0f, ColorSpaces.Unspecified)

        /**
         * Return a [Color] from [hue], [saturation], and [value] (HSV representation).
         *
         * @param hue The color value in the range (0..360), where 0 is red, 120 is green, and 240
         *   is blue
         * @param saturation The amount of [hue] represented in the color in the range (0..1), where
         *   0 has no color and 1 is fully saturated.
         * @param alpha Alpha channel to apply to the computed color
         * @param value The strength of the color, where 0 is black.
         * @param colorSpace The RGB color space used to calculate the Color from the HSV values.
         */
        public fun hsv(
            hue: Float,
            saturation: Float,
            value: Float,
            alpha: Float = 1f,
            colorSpace: Rgb = ColorSpaces.Srgb,
        ): Color {
            requirePrecondition(hue in 0f..360f && saturation in 0f..1f && value in 0f..1f) {
                "HSV ($hue, $saturation, $value) must be in range (0..360, 0..1, 0..1)"
            }
            val red = hsvToRgbComponent(5, hue, saturation, value)
            val green = hsvToRgbComponent(3, hue, saturation, value)
            val blue = hsvToRgbComponent(1, hue, saturation, value)
            return Color(red, green, blue, alpha, colorSpace)
        }

        private fun hsvToRgbComponent(n: Int, h: Float, s: Float, v: Float): Float {
            val k = (n.toFloat() + h / 60f) % 6f
            return v - (v * s * max(0f, minOf(k, 4 - k, 1f)))
        }

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 351–385)


        /**
         * Return a [Color] from [hue], [saturation], and [lightness] (HSL representation).
         *
         * @param hue The color value in the range (0..360), where 0 is red, 120 is green, and 240
         *   is blue
         * @param saturation The amount of [hue] represented in the color in the range (0..1), where
         *   0 has no color and 1 is fully saturated.
         * @param lightness A range of (0..1) where 0 is black, 0.5 is fully colored, and 1 is
         *   white.
         * @param alpha Alpha channel to apply to the computed color
         * @param colorSpace The RGB color space used to calculate the Color from the HSL values.
         */
        public fun hsl(
            hue: Float,
            saturation: Float,
            lightness: Float,
            alpha: Float = 1f,
            colorSpace: Rgb = ColorSpaces.Srgb,
        ): Color {
            requirePrecondition(hue in 0f..360f && saturation in 0f..1f && lightness in 0f..1f) {
                "HSL ($hue, $saturation, $lightness) must be in range (0..360, 0..1, 0..1)"
            }
            val red = hslToRgbComponent(0, hue, saturation, lightness)
            val green = hslToRgbComponent(8, hue, saturation, lightness)
            val blue = hslToRgbComponent(4, hue, saturation, lightness)
            return Color(red, green, blue, alpha, colorSpace)
        }

        private fun hslToRgbComponent(n: Int, h: Float, s: Float, l: Float): Float {
            val k = (n.toFloat() + h / 30f) % 12f
            val a = s * min(l, 1f - l)
            return l - a * max(-1f, minOf(k - 3, 9 - k, 1f))
        }
    }

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 36–70)

 * The `Color` class contains color information to be used while painting in [Canvas]. `Color`
 * supports [ColorSpace]s with 3 [components][ColorSpace.componentCount], plus one for [alpha].
 *
 * ### Creating
 *
 * `Color` can be created with one of these methods:
 *
 *     // from 4 separate [Float] components. Alpha and ColorSpace are optional
 *     val rgbaWhiteFloat = Color(red = 1f, green = 1f, blue = 1f, alpha = 1f,
 *         ColorSpace.get(ColorSpaces.Srgb))
 *     // from a 32-bit SRGB color integer
 *     val fromIntWhite = Color(android.graphics.Color.WHITE)
 *     val fromLongBlue = Color(0xFF0000FF)
 *     // from SRGB integer component values. Alpha is optional
 *     val rgbaWhiteInt = Color(red = 0xFF, green = 0xFF, blue = 0xFF, alpha = 0xFF)
 *
 * ### Representation
 *
 * A `Color` always defines a color using 4 components packed in a single 64 bit long value. One of
 * these components is always alpha while the other three components depend on the color space's
 * [color model][ColorModel]. The most common color model is the [RGB][ColorModel.Rgb] model in
 * which the components represent red, green, and blue values.
 *
 * **Component ranges:** the ranges defined in the tables below indicate the ranges that can be
 * encoded in a color long. They do not represent the actual ranges as they may differ per color
 * space. For instance, the RGB components of a color in the [Display P3][ColorSpaces.DisplayP3]
 * color space use the `[0..1]` range. Please refer to the documentation of the various
 * [color spaces][ColorSpaces] to find their respective ranges.
 *
 * **Alpha range:** while alpha is encoded in a color long using a 10 bit integer (thus using a
 * range of `[0..1023]`), it is converted to and from `[0..1]` float values when decoding and
 * encoding color longs.
 *
 * **sRGB color space:** for compatibility reasons and ease of use, `Color` encoded
 * [sRGB][ColorSpaces.Srgb] colors do not use the same encoding as other color longs.

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 386–420)

}

// Same as Color.Unspecified.packedValue, but avoids a getstatic
@PublishedApi internal const val UnspecifiedColor: ULong = 0x10UL

/**
 * Create a [Color] by passing individual [red], [green], [blue], [alpha], and [colorSpace]
 * components. The default [color space][ColorSpace] is [sRGB][ColorSpaces.Srgb] and the default
 * [alpha] is `1.0` (opaque).
 *
 * If the [red], [green], or [blue] values are outside of the range defined by [colorSpace] (see
 * [ColorSpace.getMinValue] and [ColorSpace.getMaxValue], these values get clamped appropriately to
 * be within range.
 *
 * @throws IllegalArgumentException If [colorSpace] does not have [ColorSpace.componentCount] equal
 *   to 3.
 * @throws IllegalArgumentException If [colorSpace] has an [ColorSpace.id] set to
 *   [ColorSpace.MinId].
 */
@Stable
public fun Color(
    red: Float,
    green: Float,
    blue: Float,
    alpha: Float = 1f,
    colorSpace: ColorSpace = ColorSpaces.Srgb,
): Color {
    if (colorSpace.isSrgb) {
        val argb =
            (((alpha.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 24) or
                ((red.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 16) or
                ((green.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt() shl 8) or
                (blue.fastCoerceIn(0.0f, 1.0f) * 255.0f + 0.5f).toInt())
        return Color(argb.toULong() shl 32)
    }

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 421–455)


    requirePrecondition(colorSpace.componentCount == 3) {
        "Color only works with ColorSpaces with 3 components"
    }

    val id = colorSpace.id
    requirePrecondition(id != ColorSpace.MinId) {
        "Unknown color space, please use a color space in ColorSpaces"
    }

    val r = floatToHalf(red.fastCoerceIn(colorSpace.getMinValue(0), colorSpace.getMaxValue(0)))
    val g = floatToHalf(green.fastCoerceIn(colorSpace.getMinValue(1), colorSpace.getMaxValue(1)))
    val b = floatToHalf(blue.fastCoerceIn(colorSpace.getMinValue(2), colorSpace.getMaxValue(2)))
    val a = (alpha.fastCoerceIn(0.0f, 1.0f) * 1023.0f + 0.5f).toInt()

    return Color(
        (((r.toLong() and 0xffffL) shl 48) or
                ((g.toLong() and 0xffffL) shl 32) or
                ((b.toLong() and 0xffffL) shl 16) or
                ((a.toLong() and 0x03ffL) shl 6) or
                (id.toLong() and 0x003fL))
            .toULong()
    )
}

/**
 * Create a [Color] by passing individual [red], [green], [blue], [alpha], and [colorSpace]
 * components. This function is equivalent to [Color] but doesn't perform any check/validation of
 * the parameters. It is meant to be used when the color space and values are known to be valid by
 * construction, for instance when lerping colors.
 */
@Stable
internal fun UncheckedColor(
    red: Float,
    green: Float,

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 456–490)

    blue: Float,
    alpha: Float = 1f,
    colorSpace: ColorSpace = ColorSpaces.Srgb,
): Color {
    if (colorSpace.isSrgb) {
        val argb =
            (((alpha * 255.0f + 0.5f).toInt() shl 24) or
                ((red * 255.0f + 0.5f).toInt() shl 16) or
                ((green * 255.0f + 0.5f).toInt() shl 8) or
                (blue * 255.0f + 0.5f).toInt())
        return Color(argb.toULong() shl 32)
    }

    val r = floatToHalf(red)
    val g = floatToHalf(green)
    val b = floatToHalf(blue)

    val a = (max(0.0f, min(alpha, 1.0f)) * 1023.0f + 0.5f).toInt()

    val id = colorSpace.id

    return Color(
        (((r.toLong() and 0xffffL) shl 48) or
                ((g.toLong() and 0xffffL) shl 32) or
                ((b.toLong() and 0xffffL) shl 16) or
                ((a.toLong() and 0x03ffL) shl 6) or
                (id.toLong() and 0x003fL))
            .toULong()
    )
}

/**
 * Creates a new [Color] instance from an ARGB color int. The resulting color is in the
 * [sRGB][ColorSpaces.Srgb] color space.
 *

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 491–525)

 * @param color The ARGB color int to create a <code>Color</code> from.
 * @return A non-null instance of {@link Color}
 */
@Stable
public fun Color(@ColorInt color: Int): Color {
    return Color(color.toULong() shl 32)
}

/**
 * Creates a new [Color] instance from an ARGB color int. The resulting color is in the
 * [sRGB][ColorSpaces.Srgb] color space. This is useful for specifying colors with alpha greater
 * than 0x80 in numeric form without using [Long.toInt]:
 *
 *     val color = Color(0xFF000080)
 *
 * @param color The 32-bit ARGB color int to create a <code>Color</code> from
 * @return A non-null instance of {@link Color}
 */
@Stable
public fun Color(color: Long): Color {
    return Color((color shl 32).toULong())
}

/**
 * Creates a new [Color] instance from an ARGB color components. The resulting color is in the
 * [sRGB][ColorSpaces.Srgb] color space. The default alpha value is `0xFF` (opaque).
 *
 * @param red The red component of the color, between 0 and 255.
 * @param green The green component of the color, between 0 and 255.
 * @param blue The blue component of the color, between 0 and 255.
 * @param alpha The alpha component of the color, between 0 and 255.
 * @return A non-null instance of {@link Color}
 */
@Stable
public fun Color(

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 526–560)

    @IntRange(from = 0, to = 0xFF) red: Int,
    @IntRange(from = 0, to = 0xFF) green: Int,
    @IntRange(from = 0, to = 0xFF) blue: Int,
    @IntRange(from = 0, to = 0xFF) alpha: Int = 0xFF,
): Color {
    val color =
        ((alpha and 0xFF) shl 24) or
            ((red and 0xFF) shl 16) or
            ((green and 0xFF) shl 8) or
            (blue and 0xFF)
    return Color(color)
}

/**
 * Linear interpolate between two [Colors][Color], [start] and [stop] with [fraction] fraction
 * between the two. The [ColorSpace] of the result is always the [ColorSpace][Color.colorSpace] of
 * [stop]. [fraction] should be between 0 and 1, inclusive. Interpolation is done in the
 * [ColorSpaces.Oklab] color space.
 */
@Stable
public fun lerp(
    start: Color,
    stop: Color,
    @FloatRange(from = 0.0, to = 1.0) fraction: Float,
): Color {
    val colorSpace = ColorSpaces.Oklab
    val startColor = start.convert(colorSpace)
    val endColor = stop.convert(colorSpace)

    val startAlpha = startColor.alpha
    val startL = startColor.red
    val startA = startColor.green
    val startB = startColor.blue

    val endAlpha = endColor.alpha

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 561–595)

    val endL = endColor.red
    val endA = endColor.green
    val endB = endColor.blue

    // We need to clamp the input fraction since over/undershoot easing curves
    // can yield fractions outside of the 0..1 range, which would in turn cause
    // Lab/alpha values to be outside of the valid color range.
    // Clamping the fraction is cheaper than clamping all 4 components separately.
    val t = fraction.fastCoerceIn(0.0f, 1.0f)
    val interpolated =
        UncheckedColor(
            lerp(startL, endL, t),
            lerp(startA, endA, t),
            lerp(startB, endB, t),
            lerp(startAlpha, endAlpha, t),
            colorSpace,
        )
    return interpolated.convert(stop.colorSpace)
}

/**
 * Composites [this] color on top of [background] using the Porter-Duff 'source over' mode.
 *
 * Both [this] and [background] must not be pre-multiplied, and the resulting color will also not be
 * pre-multiplied.
 *
 * The [ColorSpace] of the result is always the [ColorSpace][Color.colorSpace] of [background].
 *
 * @return the [Color] representing [this] composited on top of [background], converted to the color
 *   space of [background].
 */
@Stable
public fun Color.compositeOver(background: Color): Color {
    val fg = this.convert(background.colorSpace)


Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 596–630)

    val bgA = background.alpha
    val fgA = fg.alpha
    val a = fgA + (bgA * (1f - fgA))

    val r = compositeComponent(fg.red, background.red, fgA, bgA, a)
    val g = compositeComponent(fg.green, background.green, fgA, bgA, a)
    val b = compositeComponent(fg.blue, background.blue, fgA, bgA, a)

    return UncheckedColor(r, g, b, a, background.colorSpace)
}

/**
 * Composites the given [foreground component][fgC] over the [background component][bgC], with
 * foreground and background alphas of [fgA] and [bgA] respectively.
 *
 * This uses a pre-calculated composite destination alpha of [a] for efficiency.
 */
@Suppress("NOTHING_TO_INLINE")
private inline fun compositeComponent(fgC: Float, bgC: Float, fgA: Float, bgA: Float, a: Float) =
    if (a == 0f) 0f else ((fgC * fgA) + ((bgC * bgA) * (1f - fgA))) / a

/**
 * Returns this color's components as a new array. The last element of the array is always the alpha
 * component.
 *
 * @return A new, non-null array whose size is 4
 */
@Size(value = 4)
private fun Color.getComponents(): FloatArray = floatArrayOf(red, green, blue, alpha)

/**
 * Returns the relative luminance of this color.
 *
 * Based on the formula for relative luminance defined in WCAG 2.0, W3C Recommendation 11
 * December 2008.

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 631–665)

 *
 * @return A value between 0 (darkest black) and 1 (lightest white)
 * @throws IllegalArgumentException If the this color's color space does not use the
 *   [RGB][ColorModel.Rgb] color model
 */
@Stable
public fun Color.luminance(): Float {
    val colorSpace = colorSpace
    requirePrecondition(colorSpace.model == ColorModel.Rgb) {
        "The specified color must be encoded in an RGB color space. " +
            "The supplied color space is ${colorSpace.model}"
    }

    val eotf = (colorSpace as Rgb).eotfFunc
    val r = eotf(red.toDouble())
    val g = eotf(green.toDouble())
    val b = eotf(blue.toDouble())

    return (((0.2126 * r) + (0.7152 * g) + (0.0722 * b)).toFloat()).fastCoerceIn(0.0f, 1.0f)
}

/**
 * Converts this color to an ARGB color int. A color int is always in the [sRGB][ColorSpaces.Srgb]
 * color space. This implies a color space conversion is applied if needed.
 *
 * @return An ARGB color in the sRGB color space
 */
@Stable
@ColorInt
public fun Color.toArgb(): Int {
    return (convert(ColorSpaces.Srgb).value shr 32).toInt()
}

/** `false` when this is [Color.Unspecified]. */
@Stable

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 666–691)

public inline val Color.isSpecified: Boolean
    get() = value != UnspecifiedColor

/** `true` when this is [Color.Unspecified]. */
@Stable
public inline val Color.isUnspecified: Boolean
    get() = value == UnspecifiedColor

/**
 * If this color [isSpecified] then this is returned, otherwise [block] is executed and its result
 * is returned.
 */
public inline fun Color.takeOrElse(block: () -> Color): Color = if (isSpecified) this else block()

/**
 * Alternative to `() -> Color` that's useful for avoiding boxing.
 *
 * Can be used as:
 *
 * fun nonBoxedArgs(color: ColorProducer?)
 */
public fun interface ColorProducer {
    /** Return the color */
    public operator fun invoke(): Color
}


Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)

## androidx.compose.ui.graphics Color.kt source (lines 71–105)

 *
 * ```
 * | Component | Name        | Size    | Range                 |
 * |-----------|-------------|---------|-----------------------|
 * | [RGB][ColorSpace.Model.Rgb] color model                   |
 * | R         | Red         | 16 bits | `[-65504.0, 65504.0]` |
 * | G         | Green       | 16 bits | `[-65504.0, 65504.0]` |
 * | B         | Blue        | 16 bits | `[-65504.0, 65504.0]` |
 * | A         | Alpha       | 10 bits | `[0..1023]`           |
 * |           | Color space | 6 bits  | `[0..63]`             |
 * | [SRGB][ColorSpaces.Srgb] color space                      |
 * | A         | Alpha       | 8 bits  | `[0..255]`            |
 * | R         | Red         | 8 bits  | `[0..255]`            |
 * | G         | Green       | 8 bits  | `[0..255]`            |
 * | B         | Blue        | 8 bits  | `[0..255]`            |
 * | X         | Unused      | 32 bits | `[0]`                 |
 * | [XYZ][ColorSpace.Model.Xyz] color model                   |
 * | X         | X           | 16 bits | `[-65504.0, 65504.0]` |
 * | Y         | Y           | 16 bits | `[-65504.0, 65504.0]` |
 * | Z         | Z           | 16 bits | `[-65504.0, 65504.0]` |
 * | A         | Alpha       | 10 bits | `[0..1023]`           |
 * |           | Color space | 6 bits  | `[0..63]`             |
 * | [Lab][ColorSpace.Model.Lab] color model                   |
 * | L         | L           | 16 bits | `[-65504.0, 65504.0]` |
 * | a         | a           | 16 bits | `[-65504.0, 65504.0]` |
 * | b         | b           | 16 bits | `[-65504.0, 65504.0]` |
 * | A         | Alpha       | 10 bits | `[0..1023]`           |
 * |           | Color space | 6 bits  | `[0..63]`             |
 * ```
 *
 * The components in this table are listed in encoding order, which is why color longs in the RGB
 * model are called RGBA colors (even if this doesn't quite hold for the special case of sRGB
 * colors).
 *
 * The color encoding relies on half-precision float values (fp16). If you wish to know more about

Sources: [live-androidx-ui-ui-graphics-ui-graphics-color-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt)
