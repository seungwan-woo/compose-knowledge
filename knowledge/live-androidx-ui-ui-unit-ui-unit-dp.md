---
type: reference
title: androidx.compose.ui.unit Dp.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 1
    endLine: 35
    sha256: 7b8d1a320560e107594ccadbe4ba2ddb271b950bb9ab011ee39b8ab678511846
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2018 The Android Open Source Project
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
      @file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

      package androidx.compose.ui.unit

      // Note: Throughout this file, arithmetic operations and factory methods append `+ 0f` to Float
      // values to normalize `-0f` to `0f`. This ensures that negative zero (-0.0f) does not break value
      // class equality and hashCode contracts. In the future, this can be changed to modify compareTo,
      // equals, and hashCode. Currently, only compareTo can be overridden.

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.isSpecified
      import androidx.compose.ui.unit.Dp.Companion.Hairline
      import androidx.compose.ui.util.fastIsFinite
      import androidx.compose.ui.util.lerp
      import androidx.compose.ui.util.packFloats
      import androidx.compose.ui.util.unpackFloat1
      import androidx.compose.ui.util.unpackFloat2
      import kotlin.jvm.JvmInline
      import kotlin.math.max
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 106
    endLine: 140
    sha256: 4fde2366e121e1f7127df45a9362ea264df6dc091a2948bc6c6fd06067f7c897
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  get() = Dp(0f)

              /** Infinite dp dimension. */
              @Stable
              public val Infinity: Dp
                  get() = Dp(Float.POSITIVE_INFINITY)

              /**
               * Constant that means unspecified Dp. Instead of comparing a [Dp] value to this constant,
               * consider using [isSpecified] and [isUnspecified] instead.
               */
              @Stable
              public val Unspecified: Dp
                  get() = Dp(Float.NaN)
          }
      }

      /** `false` when this is [Dp.Unspecified]. */
      @Stable
      public inline val Dp.isSpecified: Boolean
          get() = !value.isNaN()

      /** `true` when this is [Dp.Unspecified]. */
      @Stable
      public inline val Dp.isUnspecified: Boolean
          get() = value.isNaN()

      /**
       * If this [Dp] [isSpecified] then this is returned, otherwise [block] is executed and its result is
       * returned.
       */
      public inline fun Dp.takeOrElse(block: () -> Dp): Dp = if (isSpecified) this else block()

      /** Create a [Dp] using an [Int]: val left = 10 val x = left.dp // -- or -- val y = 10.dp */
      @Stable
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 141
    endLine: 175
    sha256: 8572bcd2ea2aa46888e2b028cdcbcfa18d00b7bdd49aba4a634cd90dc0edfdf1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public inline val Int.dp: Dp
          get() = Dp(this.toFloat())

      /** Create a [Dp] using a [Double]: val left = 10.0 val x = left.dp // -- or -- val y = 10.0.dp */
      @Stable
      public inline val Double.dp: Dp
          // +0f to normalize -0f
          get() = Dp(this.toFloat() + 0f)

      /** Create a [Dp] using a [Float]: val left = 10f val x = left.dp // -- or -- val y = 10f.dp */
      @Stable
      public inline val Float.dp: Dp
          // +0f to normalize -0f
          get() = Dp(this + 0f)

      // +0f to normalize -0f
      @Stable public inline operator fun Float.times(other: Dp): Dp = Dp((this * other.value) + 0f)

      // +0f to normalize -0f
      @Stable
      public inline operator fun Double.times(other: Dp): Dp = Dp((this.toFloat() * other.value) + 0f)

      // +0f to normalize -0f
      @Stable public inline operator fun Int.times(other: Dp): Dp = Dp((this * other.value) + 0f)

      @Stable public inline fun min(a: Dp, b: Dp): Dp = Dp(min(a.value, b.value))

      @Stable public inline fun max(a: Dp, b: Dp): Dp = Dp(max(a.value, b.value))

      /**
       * Ensures that this value lies in the specified range [minimumValue]..[maximumValue].
       *
       * @return this value if it's in the range, or [minimumValue] if this value is less than
       *   [minimumValue], or [maximumValue] if this value is greater than [maximumValue].
       */
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 176
    endLine: 210
    sha256: c22d7380a7f0698b400a176cb1d099831afa84d48248de9ed623d9b63c282f51
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Stable
      public inline fun Dp.coerceIn(minimumValue: Dp, maximumValue: Dp): Dp =
          Dp(value.coerceIn(minimumValue.value, maximumValue.value))

      /**
       * Ensures that this value is not less than the specified [minimumValue].
       *
       * @return this value if it's greater than or equal to the [minimumValue] or the [minimumValue]
       *   otherwise.
       */
      @Stable
      public inline fun Dp.coerceAtLeast(minimumValue: Dp): Dp =
          Dp(value.coerceAtLeast(minimumValue.value))

      /**
       * Ensures that this value is not greater than the specified [maximumValue].
       *
       * @return this value if it's less than or equal to the [maximumValue] or the [maximumValue]
       *   otherwise.
       */
      @Stable
      public inline fun Dp.coerceAtMost(maximumValue: Dp): Dp = Dp(value.coerceAtMost(maximumValue.value))

      /** Return `true` when it is finite or `false` when it is [Dp.Infinity] */
      @Stable
      public inline val Dp.isFinite: Boolean
          get() = value.fastIsFinite()

      /**
       * Linearly interpolate between two [Dp]s.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
       * meaning that the interpolation has finished, returning [stop] (or something equivalent to
       * [stop]), and values in between meaning that the interpolation is at the relevant point on the
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 211
    endLine: 245
    sha256: 1b4ec634660b1d5e65312b0acb02a75274a1550b826fa60afcdf4430160139d5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
       * negative values and values greater than 1.0 are valid.
       */
      @Stable
      public fun lerp(start: Dp, stop: Dp, fraction: Float): Dp {
          // +0f to normalize -0f
          return Dp(lerp(start.value, stop.value, fraction) + 0f)
      }

      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      // Structures using Dp
      // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

      /** Constructs a [DpOffset] from [x] and [y] position [Dp] values. */
      @Stable public inline fun DpOffset(x: Dp, y: Dp): DpOffset = DpOffset(packFloats(x.value, y.value))

      /**
       * A two-dimensional offset using [Dp] for units.
       *
       * To create a [DpOffset], call the top-level function that accepts an x/y pair of coordinates:
       * ```
       * val offset = DpOffset(x, y)
       * ```
       *
       * The primary constructor of [DpOffset] is intended to be used with the [packedValue] property to
       * allow storing offsets in arrays or collections of primitives without boxing.
       *
       * @param packedValue [Long] value encoding the [x] and [y] components of the [DpOffset]. Encoded
       *   values can be obtained by using the [packedValue] property of existing [DpOffset] instances.
       */
      @Immutable
      @JvmInline
      public value class DpOffset(public val packedValue: Long) {
          /** The horizontal aspect of the offset in [Dp] */
          @Stable
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 246
    endLine: 280
    sha256: 28341b7d49c06377dbfdd3d04dd00b6d01f8a46ead3871bc031b1266f08d455c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          public val x: Dp
              get() = unpackFloat1(packedValue).dp

          /** The vertical aspect of the offset in [Dp] */
          @Stable
          public val y: Dp
              get() = unpackFloat2(packedValue).dp

          /** Returns a copy of this [DpOffset] instance optionally overriding the x or y parameter */
          public fun copy(x: Dp = this.x, y: Dp = this.y): DpOffset =
              DpOffset(packFloats(x.value, y.value))

          /** Subtract a [DpOffset] from another one. */
          @Stable
          public operator fun minus(other: DpOffset): DpOffset =
              DpOffset(packFloats((x - other.x).value, (y - other.y).value))

          /** Add a [DpOffset] to another one. */
          @Stable
          public operator fun plus(other: DpOffset): DpOffset =
              DpOffset(packFloats((x + other.x).value, (y + other.y).value))

          @Stable
          public override fun toString(): String =
              if (isSpecified) {
                  "($x, $y)"
              } else {
                  "DpOffset.Unspecified"
              }

          public companion object {
              /** A [DpOffset] with 0 DP [x] and 0 DP [y] values. */
              public val Zero: DpOffset
                  get() = DpOffset(0x0L)
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 281
    endLine: 315
    sha256: d1453dd9e585ddc85e7dc3f784ff8693e776296d1444881ef01cfb568a36e0cd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              /**
               * Represents an offset whose [x] and [y] are unspecified. This is usually a replacement for
               * `null` when a primitive value is desired. Access to [x] or [y] on an unspecified offset
               * is not allowed.
               */
              public val Unspecified: DpOffset
                  get() = DpOffset(0x7fc00000_7fc00000L)
          }
      }

      /** `false` when this is [DpOffset.Unspecified]. */
      @Stable
      public inline val DpOffset.isSpecified: Boolean
          get() = packedValue != 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

      /** `true` when this is [DpOffset.Unspecified]. */
      @Stable
      public inline val DpOffset.isUnspecified: Boolean
          get() = packedValue == 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

      /**
       * If this [DpOffset]&nbsp;[isSpecified] then this is returned, otherwise [block] is executed and
       * its result is returned.
       */
      public inline fun DpOffset.takeOrElse(block: () -> DpOffset): DpOffset =
          if (isSpecified) this else block()

      /**
       * Linearly interpolate between two [DpOffset]s.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
       * meaning that the interpolation has finished, returning [stop] (or something equivalent to
       * [stop]), and values in between meaning that the interpolation is at the relevant point on the
       * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 316
    endLine: 350
    sha256: 4c74f04aa9ccca4030434d2f331a4551d371f54d6b669209477d88b52f041b71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * negative values and values greater than 1.0 are valid.
       */
      @Stable
      public fun lerp(start: DpOffset, stop: DpOffset, fraction: Float): DpOffset =
          DpOffset(
              packFloats(lerp(start.x, stop.x, fraction).value, lerp(start.y, stop.y, fraction).value)
          )

      /** Constructs a [DpSize] from [width] and [height] [Dp] values. */
      @Stable
      public fun DpSize(width: Dp, height: Dp): DpSize = DpSize(packFloats(width.value, height.value))

      /** A two-dimensional Size using [Dp] for units */
      @Immutable
      @JvmInline
      public value class DpSize internal constructor(@PublishedApi internal val packedValue: Long) {
          /** The horizontal aspect of the Size in [Dp] */
          @Stable
          public val width: Dp
              get() = unpackFloat1(packedValue).dp

          /** The vertical aspect of the Size in [Dp] */
          @Stable
          public val height: Dp
              get() = unpackFloat2(packedValue).dp

          /**
           * Returns a copy of this [DpSize] instance optionally overriding the width or height parameter
           */
          public fun copy(width: Dp = this.width, height: Dp = this.height): DpSize =
              DpSize(packFloats(width.value, height.value))

          /** Subtract a [DpSize] from another one. */
          @Stable
          public operator fun minus(other: DpSize): DpSize =
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 351
    endLine: 385
    sha256: b659da3c0a88bf73bc4d8a30b18d84ea3c0b17b80efeaf5c8740b299bf1d825d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              DpSize(packFloats((width - other.width).value, (height - other.height).value))

          /** Add a [DpSize] to another one. */
          @Stable
          public operator fun plus(other: DpSize): DpSize =
              DpSize(packFloats((width + other.width).value, (height + other.height).value))

          @Stable public inline operator fun component1(): Dp = width

          @Stable public inline operator fun component2(): Dp = height

          @Stable
          public operator fun times(other: Int): DpSize =
              DpSize(packFloats((width * other).value, (height * other).value))

          @Stable
          public operator fun times(other: Float): DpSize =
              DpSize(packFloats((width * other).value, (height * other).value))

          @Stable
          public operator fun div(other: Int): DpSize =
              DpSize(packFloats((width / other).value, (height / other).value))

          @Stable
          public operator fun div(other: Float): DpSize =
              DpSize(packFloats((width / other).value, (height / other).value))

          @Stable
          public override fun toString(): String =
              if (isSpecified) {
                  "$width x $height"
              } else {
                  "DpSize.Unspecified"
              }
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 36
    endLine: 70
    sha256: 87e4bcd881aa7de09b636ba870dd1f04f90ad063a5394a520f1abf180ab1d28a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import kotlin.math.min

      /**
       * Dimension value representing device-independent pixels (dp). Component APIs specify their
       * dimensions such as line thickness in DP with Dp objects. Hairline (1 pixel) thickness may be
       * specified with [Hairline], a dimension that take up no space. Dp are normally defined using [dp],
       * which can be applied to [Int], [Double], and [Float].
       *
       * @sample androidx.compose.ui.unit.samples.DpSample
       *
       * Drawing and Layout are done in pixels. To retrieve the pixel size of a Dp, use [Density.toPx]:
       *
       * @sample androidx.compose.ui.unit.samples.ToPxSample
       */
      @Immutable
      @JvmInline
      public value class Dp
      /**
       * Constructs a new [Dp] value. Use [Float.dp] instead to avoid problems with comparing `-0.0.dp`
       * and `0.dp`. While the floating point values are treated the same, if the value passed to the
       * constructor is `-0f`, the [Dp] value will not be considered equal to `0.dp`. When `-0f.dp` is
       * used, the value will be constructed in a way that avoids the problem.
       */
      public constructor(public val value: Float) : Comparable<Dp> {
          /** Add two [Dp]s together. */
          @Stable public inline operator fun plus(other: Dp): Dp = Dp((this.value + other.value) + 0f)

          /** Subtract a Dp from another one. */
          @Stable public inline operator fun minus(other: Dp): Dp = Dp((this.value - other.value) + 0f)

          /** This is the same as multiplying the Dp by -1.0. */
          // +0f to normalize -0f
          @Stable public inline operator fun unaryMinus(): Dp = Dp(-value + 0f)

          /** Divide a Dp by a scalar. */
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 386
    endLine: 420
    sha256: 284916f10d64de3b5269d08d3ebb6b51b432d2502a438a350daf818c1e8b9817
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public companion object {
              /** A [DpSize] with 0 DP [width] and 0 DP [height] values. */
              public val Zero: DpSize
                  get() = DpSize(0x0L)

              /**
               * A size whose [width] and [height] are unspecified. This is usually a replacement for
               * `null` when a primitive value is desired. Access to [width] or [height] on an unspecified
               * size is not allowed.
               */
              public val Unspecified: DpSize
                  get() = DpSize(0x7fc00000_7fc00000L)
          }
      }

      /** `false` when this is [DpSize.Unspecified]. */
      @Stable
      public inline val DpSize.isSpecified: Boolean
          get() = packedValue != 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

      /** `true` when this is [DpSize.Unspecified]. */
      @Stable
      public inline val DpSize.isUnspecified: Boolean
          get() = packedValue == 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

      /**
       * If this [DpSize]&nbsp;[isSpecified] then this is returned, otherwise [block] is executed and its
       * result is returned.
       */
      public inline fun DpSize.takeOrElse(block: () -> DpSize): DpSize =
          if (isSpecified) this else block()

      /** Returns the [DpOffset] of the center of the rect from the point of [0, 0] with this [DpSize]. */
      @Stable
      public val DpSize.center: DpOffset
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 421
    endLine: 455
    sha256: e9d6cd7f66d436f72814c2f7fc14449c0c7c2c42958b6d513f2b479479944e6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          get() = DpOffset(packFloats((width / 2f).value, (height / 2f).value))

      @Stable public inline operator fun Int.times(size: DpSize): DpSize = size * this

      @Stable public inline operator fun Float.times(size: DpSize): DpSize = size * this

      /**
       * Linearly interpolate between two [DpSize]s.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start], 1.0 meaning that the interpolation has
       * finished, returning [stop], and values in between meaning that the interpolation is at the
       * relevant point on the timeline between [start] and [stop]. The interpolation can be extrapolated
       * beyond 0.0 and 1.0, so negative values and values greater than 1.0 are valid.
       */
      @Stable
      public fun lerp(start: DpSize, stop: DpSize, fraction: Float): DpSize =
          DpSize(
              packFloats(
                  lerp(start.width, stop.width, fraction).value,
                  lerp(start.height, stop.height, fraction).value,
              )
          )

      /** A four dimensional bounds using [Dp] for units */
      @Immutable
      @Suppress("DataClassDefinition")
      public data class DpRect(
          @Stable public val left: Dp,
          @Stable public val top: Dp,
          @Stable public val right: Dp,
          @Stable public val bottom: Dp,
      ) {
          /** Constructs a [DpRect] from the top-left [origin] and the width and height in [size]. */
          public constructor(
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 456
    endLine: 477
    sha256: c4cca0737554f3a3f1d994e56a9e325cb8137e429ba1a9896b19a32045118484
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              origin: DpOffset,
              size: DpSize,
          ) : this(origin.x, origin.y, origin.x + size.width, origin.y + size.height)

          public companion object
      }

      /** A width of this Bounds in [Dp]. */
      @Stable
      public inline val DpRect.width: Dp
          get() = right - left

      /** A height of this Bounds in [Dp]. */
      @Stable
      public inline val DpRect.height: Dp
          get() = bottom - top

      /** Returns the size of the [DpRect]. */
      @Stable
      public inline val DpRect.size: DpSize
          get() = DpSize(width, height)
  - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt
    startLine: 71
    endLine: 105
    sha256: cb6c9d324d79551b05da4f989e319b653b08e6426cd930d4d273871531396496
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // +0f to normalize -0f
          @Stable public inline operator fun div(other: Float): Dp = Dp((value / other) + 0f)

          // +0f to normalize -0f
          @Stable public inline operator fun div(other: Int): Dp = Dp((value / other) + 0f)

          /** Divide by another Dp to get a scalar. */
          @Stable public inline operator fun div(other: Dp): Float = value / other.value

          /** Multiply a Dp by a scalar. */
          // +0f to normalize -0f
          @Stable public inline operator fun times(other: Float): Dp = Dp((value * other) + 0f)

          // +0f to normalize -0f
          @Stable public inline operator fun times(other: Int): Dp = Dp((value * other) + 0f)

          /** Support comparing Dimensions with comparison operators. */
          @OptIn(ExperimentalUnitApi::class)
          @Stable
          public override /* TODO: inline */  operator fun compareTo(other: Dp): Int =
              // Unspecified values should compare false against all other values. This always sets
              // them as comparing == 0, but the equality check fails, so Unspecified < 1.dp == false
              // and 1.dp < Unspecified == false
              if (value.isNaN() || other.value.isNaN()) 0 else value.compareTo(other.value)

          @Stable
          public override fun toString(): String = if (isUnspecified) "Dp.Unspecified" else "$value.dp"

          public companion object {
              /**
               * A dimension used to represent a hairline drawing element. Hairline elements take up no
               * space, but will draw a single pixel, independent of the device's resolution and density.
               */
              @Stable
              public val Hairline: Dp
compose:
  id: live-androidx-ui-ui-unit-ui-unit-dp
  artifact: androidx.compose.ui:ui-unit
  fqn: androidx.compose.ui.unit
  sections:
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-1
      title: androidx.compose.ui.unit Dp.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-106
      title: androidx.compose.ui.unit Dp.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.takeOrElse
        - androidx.compose.ui.unit.dp
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-141
      title: androidx.compose.ui.unit Dp.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.dp
        - androidx.compose.ui.unit.times
        - androidx.compose.ui.unit.min
        - androidx.compose.ui.unit.max
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-176
      title: androidx.compose.ui.unit Dp.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.coerceIn
        - androidx.compose.ui.unit.coerceAtLeast
        - androidx.compose.ui.unit.coerceAtMost
        - androidx.compose.ui.unit.isFinite
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-211
      title: androidx.compose.ui.unit Dp.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.lerp
        - androidx.compose.ui.unit.DpOffset
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-246
      title: androidx.compose.ui.unit Dp.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.dp
        - androidx.compose.ui.unit.DpOffset
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-281
      title: androidx.compose.ui.unit Dp.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.takeOrElse
        - androidx.compose.ui.unit.DpOffset
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-316
      title: androidx.compose.ui.unit Dp.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.dp
        - androidx.compose.ui.unit.lerp
        - androidx.compose.ui.unit.DpOffset
        - androidx.compose.ui.unit.DpSize
        - androidx.compose.ui.unit.width
        - androidx.compose.ui.unit.height
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-351
      title: androidx.compose.ui.unit Dp.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.times
        - androidx.compose.ui.unit.DpSize
        - androidx.compose.ui.unit.width
        - androidx.compose.ui.unit.height
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-36
      title: androidx.compose.ui.unit Dp.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.dp
        - androidx.compose.ui.unit.size
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-386
      title: androidx.compose.ui.unit Dp.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.takeOrElse
        - androidx.compose.ui.unit.DpOffset
        - androidx.compose.ui.unit.DpSize
        - androidx.compose.ui.unit.center
        - androidx.compose.ui.unit.width
        - androidx.compose.ui.unit.height
        - androidx.compose.ui.unit.size
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-421
      title: androidx.compose.ui.unit Dp.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.times
        - androidx.compose.ui.unit.lerp
        - androidx.compose.ui.unit.DpOffset
        - androidx.compose.ui.unit.DpSize
        - androidx.compose.ui.unit.DpRect
        - androidx.compose.ui.unit.width
        - androidx.compose.ui.unit.height
        - androidx.compose.ui.unit.size
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-456
      title: androidx.compose.ui.unit Dp.kt source (lines 456–477)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.DpOffset
        - androidx.compose.ui.unit.DpSize
        - androidx.compose.ui.unit.DpRect
        - androidx.compose.ui.unit.width
        - androidx.compose.ui.unit.height
        - androidx.compose.ui.unit.size
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-dp-lines-71
      title: androidx.compose.ui.unit Dp.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.unit.Dp
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.dp
        - androidx.compose.ui.unit.times
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-dp-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.unit Dp.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt

## androidx.compose.ui.unit Dp.kt source (lines 1–35)

/*
 * Copyright 2018 The Android Open Source Project
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
@file:Suppress("NOTHING_TO_INLINE", "KotlinRedundantDiagnosticSuppress")

package androidx.compose.ui.unit

// Note: Throughout this file, arithmetic operations and factory methods append `+ 0f` to Float
// values to normalize `-0f` to `0f`. This ensures that negative zero (-0.0f) does not break value
// class equality and hashCode contracts. In the future, this can be changed to modify compareTo,
// equals, and hashCode. Currently, only compareTo can be overridden.

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.isSpecified
import androidx.compose.ui.unit.Dp.Companion.Hairline
import androidx.compose.ui.util.fastIsFinite
import androidx.compose.ui.util.lerp
import androidx.compose.ui.util.packFloats
import androidx.compose.ui.util.unpackFloat1
import androidx.compose.ui.util.unpackFloat2
import kotlin.jvm.JvmInline
import kotlin.math.max

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 106–140)

            get() = Dp(0f)

        /** Infinite dp dimension. */
        @Stable
        public val Infinity: Dp
            get() = Dp(Float.POSITIVE_INFINITY)

        /**
         * Constant that means unspecified Dp. Instead of comparing a [Dp] value to this constant,
         * consider using [isSpecified] and [isUnspecified] instead.
         */
        @Stable
        public val Unspecified: Dp
            get() = Dp(Float.NaN)
    }
}

/** `false` when this is [Dp.Unspecified]. */
@Stable
public inline val Dp.isSpecified: Boolean
    get() = !value.isNaN()

/** `true` when this is [Dp.Unspecified]. */
@Stable
public inline val Dp.isUnspecified: Boolean
    get() = value.isNaN()

/**
 * If this [Dp] [isSpecified] then this is returned, otherwise [block] is executed and its result is
 * returned.
 */
public inline fun Dp.takeOrElse(block: () -> Dp): Dp = if (isSpecified) this else block()

/** Create a [Dp] using an [Int]: val left = 10 val x = left.dp // -- or -- val y = 10.dp */
@Stable

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 141–175)

public inline val Int.dp: Dp
    get() = Dp(this.toFloat())

/** Create a [Dp] using a [Double]: val left = 10.0 val x = left.dp // -- or -- val y = 10.0.dp */
@Stable
public inline val Double.dp: Dp
    // +0f to normalize -0f
    get() = Dp(this.toFloat() + 0f)

/** Create a [Dp] using a [Float]: val left = 10f val x = left.dp // -- or -- val y = 10f.dp */
@Stable
public inline val Float.dp: Dp
    // +0f to normalize -0f
    get() = Dp(this + 0f)

// +0f to normalize -0f
@Stable public inline operator fun Float.times(other: Dp): Dp = Dp((this * other.value) + 0f)

// +0f to normalize -0f
@Stable
public inline operator fun Double.times(other: Dp): Dp = Dp((this.toFloat() * other.value) + 0f)

// +0f to normalize -0f
@Stable public inline operator fun Int.times(other: Dp): Dp = Dp((this * other.value) + 0f)

@Stable public inline fun min(a: Dp, b: Dp): Dp = Dp(min(a.value, b.value))

@Stable public inline fun max(a: Dp, b: Dp): Dp = Dp(max(a.value, b.value))

/**
 * Ensures that this value lies in the specified range [minimumValue]..[maximumValue].
 *
 * @return this value if it's in the range, or [minimumValue] if this value is less than
 *   [minimumValue], or [maximumValue] if this value is greater than [maximumValue].
 */

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 176–210)

@Stable
public inline fun Dp.coerceIn(minimumValue: Dp, maximumValue: Dp): Dp =
    Dp(value.coerceIn(minimumValue.value, maximumValue.value))

/**
 * Ensures that this value is not less than the specified [minimumValue].
 *
 * @return this value if it's greater than or equal to the [minimumValue] or the [minimumValue]
 *   otherwise.
 */
@Stable
public inline fun Dp.coerceAtLeast(minimumValue: Dp): Dp =
    Dp(value.coerceAtLeast(minimumValue.value))

/**
 * Ensures that this value is not greater than the specified [maximumValue].
 *
 * @return this value if it's less than or equal to the [maximumValue] or the [maximumValue]
 *   otherwise.
 */
@Stable
public inline fun Dp.coerceAtMost(maximumValue: Dp): Dp = Dp(value.coerceAtMost(maximumValue.value))

/** Return `true` when it is finite or `false` when it is [Dp.Infinity] */
@Stable
public inline val Dp.isFinite: Boolean
    get() = value.fastIsFinite()

/**
 * Linearly interpolate between two [Dp]s.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
 * meaning that the interpolation has finished, returning [stop] (or something equivalent to
 * [stop]), and values in between meaning that the interpolation is at the relevant point on the

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 211–245)

 * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
 * negative values and values greater than 1.0 are valid.
 */
@Stable
public fun lerp(start: Dp, stop: Dp, fraction: Float): Dp {
    // +0f to normalize -0f
    return Dp(lerp(start.value, stop.value, fraction) + 0f)
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Structures using Dp
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/** Constructs a [DpOffset] from [x] and [y] position [Dp] values. */
@Stable public inline fun DpOffset(x: Dp, y: Dp): DpOffset = DpOffset(packFloats(x.value, y.value))

/**
 * A two-dimensional offset using [Dp] for units.
 *
 * To create a [DpOffset], call the top-level function that accepts an x/y pair of coordinates:
 * ```
 * val offset = DpOffset(x, y)
 * ```
 *
 * The primary constructor of [DpOffset] is intended to be used with the [packedValue] property to
 * allow storing offsets in arrays or collections of primitives without boxing.
 *
 * @param packedValue [Long] value encoding the [x] and [y] components of the [DpOffset]. Encoded
 *   values can be obtained by using the [packedValue] property of existing [DpOffset] instances.
 */
@Immutable
@JvmInline
public value class DpOffset(public val packedValue: Long) {
    /** The horizontal aspect of the offset in [Dp] */
    @Stable

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 246–280)

    public val x: Dp
        get() = unpackFloat1(packedValue).dp

    /** The vertical aspect of the offset in [Dp] */
    @Stable
    public val y: Dp
        get() = unpackFloat2(packedValue).dp

    /** Returns a copy of this [DpOffset] instance optionally overriding the x or y parameter */
    public fun copy(x: Dp = this.x, y: Dp = this.y): DpOffset =
        DpOffset(packFloats(x.value, y.value))

    /** Subtract a [DpOffset] from another one. */
    @Stable
    public operator fun minus(other: DpOffset): DpOffset =
        DpOffset(packFloats((x - other.x).value, (y - other.y).value))

    /** Add a [DpOffset] to another one. */
    @Stable
    public operator fun plus(other: DpOffset): DpOffset =
        DpOffset(packFloats((x + other.x).value, (y + other.y).value))

    @Stable
    public override fun toString(): String =
        if (isSpecified) {
            "($x, $y)"
        } else {
            "DpOffset.Unspecified"
        }

    public companion object {
        /** A [DpOffset] with 0 DP [x] and 0 DP [y] values. */
        public val Zero: DpOffset
            get() = DpOffset(0x0L)


Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 281–315)

        /**
         * Represents an offset whose [x] and [y] are unspecified. This is usually a replacement for
         * `null` when a primitive value is desired. Access to [x] or [y] on an unspecified offset
         * is not allowed.
         */
        public val Unspecified: DpOffset
            get() = DpOffset(0x7fc00000_7fc00000L)
    }
}

/** `false` when this is [DpOffset.Unspecified]. */
@Stable
public inline val DpOffset.isSpecified: Boolean
    get() = packedValue != 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

/** `true` when this is [DpOffset.Unspecified]. */
@Stable
public inline val DpOffset.isUnspecified: Boolean
    get() = packedValue == 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

/**
 * If this [DpOffset]&nbsp;[isSpecified] then this is returned, otherwise [block] is executed and
 * its result is returned.
 */
public inline fun DpOffset.takeOrElse(block: () -> DpOffset): DpOffset =
    if (isSpecified) this else block()

/**
 * Linearly interpolate between two [DpOffset]s.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
 * meaning that the interpolation has finished, returning [stop] (or something equivalent to
 * [stop]), and values in between meaning that the interpolation is at the relevant point on the
 * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 316–350)

 * negative values and values greater than 1.0 are valid.
 */
@Stable
public fun lerp(start: DpOffset, stop: DpOffset, fraction: Float): DpOffset =
    DpOffset(
        packFloats(lerp(start.x, stop.x, fraction).value, lerp(start.y, stop.y, fraction).value)
    )

/** Constructs a [DpSize] from [width] and [height] [Dp] values. */
@Stable
public fun DpSize(width: Dp, height: Dp): DpSize = DpSize(packFloats(width.value, height.value))

/** A two-dimensional Size using [Dp] for units */
@Immutable
@JvmInline
public value class DpSize internal constructor(@PublishedApi internal val packedValue: Long) {
    /** The horizontal aspect of the Size in [Dp] */
    @Stable
    public val width: Dp
        get() = unpackFloat1(packedValue).dp

    /** The vertical aspect of the Size in [Dp] */
    @Stable
    public val height: Dp
        get() = unpackFloat2(packedValue).dp

    /**
     * Returns a copy of this [DpSize] instance optionally overriding the width or height parameter
     */
    public fun copy(width: Dp = this.width, height: Dp = this.height): DpSize =
        DpSize(packFloats(width.value, height.value))

    /** Subtract a [DpSize] from another one. */
    @Stable
    public operator fun minus(other: DpSize): DpSize =

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 351–385)

        DpSize(packFloats((width - other.width).value, (height - other.height).value))

    /** Add a [DpSize] to another one. */
    @Stable
    public operator fun plus(other: DpSize): DpSize =
        DpSize(packFloats((width + other.width).value, (height + other.height).value))

    @Stable public inline operator fun component1(): Dp = width

    @Stable public inline operator fun component2(): Dp = height

    @Stable
    public operator fun times(other: Int): DpSize =
        DpSize(packFloats((width * other).value, (height * other).value))

    @Stable
    public operator fun times(other: Float): DpSize =
        DpSize(packFloats((width * other).value, (height * other).value))

    @Stable
    public operator fun div(other: Int): DpSize =
        DpSize(packFloats((width / other).value, (height / other).value))

    @Stable
    public operator fun div(other: Float): DpSize =
        DpSize(packFloats((width / other).value, (height / other).value))

    @Stable
    public override fun toString(): String =
        if (isSpecified) {
            "$width x $height"
        } else {
            "DpSize.Unspecified"
        }


Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 36–70)

import kotlin.math.min

/**
 * Dimension value representing device-independent pixels (dp). Component APIs specify their
 * dimensions such as line thickness in DP with Dp objects. Hairline (1 pixel) thickness may be
 * specified with [Hairline], a dimension that take up no space. Dp are normally defined using [dp],
 * which can be applied to [Int], [Double], and [Float].
 *
 * @sample androidx.compose.ui.unit.samples.DpSample
 *
 * Drawing and Layout are done in pixels. To retrieve the pixel size of a Dp, use [Density.toPx]:
 *
 * @sample androidx.compose.ui.unit.samples.ToPxSample
 */
@Immutable
@JvmInline
public value class Dp
/**
 * Constructs a new [Dp] value. Use [Float.dp] instead to avoid problems with comparing `-0.0.dp`
 * and `0.dp`. While the floating point values are treated the same, if the value passed to the
 * constructor is `-0f`, the [Dp] value will not be considered equal to `0.dp`. When `-0f.dp` is
 * used, the value will be constructed in a way that avoids the problem.
 */
public constructor(public val value: Float) : Comparable<Dp> {
    /** Add two [Dp]s together. */
    @Stable public inline operator fun plus(other: Dp): Dp = Dp((this.value + other.value) + 0f)

    /** Subtract a Dp from another one. */
    @Stable public inline operator fun minus(other: Dp): Dp = Dp((this.value - other.value) + 0f)

    /** This is the same as multiplying the Dp by -1.0. */
    // +0f to normalize -0f
    @Stable public inline operator fun unaryMinus(): Dp = Dp(-value + 0f)

    /** Divide a Dp by a scalar. */

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 386–420)

    public companion object {
        /** A [DpSize] with 0 DP [width] and 0 DP [height] values. */
        public val Zero: DpSize
            get() = DpSize(0x0L)

        /**
         * A size whose [width] and [height] are unspecified. This is usually a replacement for
         * `null` when a primitive value is desired. Access to [width] or [height] on an unspecified
         * size is not allowed.
         */
        public val Unspecified: DpSize
            get() = DpSize(0x7fc00000_7fc00000L)
    }
}

/** `false` when this is [DpSize.Unspecified]. */
@Stable
public inline val DpSize.isSpecified: Boolean
    get() = packedValue != 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

/** `true` when this is [DpSize.Unspecified]. */
@Stable
public inline val DpSize.isUnspecified: Boolean
    get() = packedValue == 0x7fc00000_7fc00000L // Keep UnspecifiedPackedFloats internal

/**
 * If this [DpSize]&nbsp;[isSpecified] then this is returned, otherwise [block] is executed and its
 * result is returned.
 */
public inline fun DpSize.takeOrElse(block: () -> DpSize): DpSize =
    if (isSpecified) this else block()

/** Returns the [DpOffset] of the center of the rect from the point of [0, 0] with this [DpSize]. */
@Stable
public val DpSize.center: DpOffset

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 421–455)

    get() = DpOffset(packFloats((width / 2f).value, (height / 2f).value))

@Stable public inline operator fun Int.times(size: DpSize): DpSize = size * this

@Stable public inline operator fun Float.times(size: DpSize): DpSize = size * this

/**
 * Linearly interpolate between two [DpSize]s.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start], 1.0 meaning that the interpolation has
 * finished, returning [stop], and values in between meaning that the interpolation is at the
 * relevant point on the timeline between [start] and [stop]. The interpolation can be extrapolated
 * beyond 0.0 and 1.0, so negative values and values greater than 1.0 are valid.
 */
@Stable
public fun lerp(start: DpSize, stop: DpSize, fraction: Float): DpSize =
    DpSize(
        packFloats(
            lerp(start.width, stop.width, fraction).value,
            lerp(start.height, stop.height, fraction).value,
        )
    )

/** A four dimensional bounds using [Dp] for units */
@Immutable
@Suppress("DataClassDefinition")
public data class DpRect(
    @Stable public val left: Dp,
    @Stable public val top: Dp,
    @Stable public val right: Dp,
    @Stable public val bottom: Dp,
) {
    /** Constructs a [DpRect] from the top-left [origin] and the width and height in [size]. */
    public constructor(

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 456–477)

        origin: DpOffset,
        size: DpSize,
    ) : this(origin.x, origin.y, origin.x + size.width, origin.y + size.height)

    public companion object
}

/** A width of this Bounds in [Dp]. */
@Stable
public inline val DpRect.width: Dp
    get() = right - left

/** A height of this Bounds in [Dp]. */
@Stable
public inline val DpRect.height: Dp
    get() = bottom - top

/** Returns the size of the [DpRect]. */
@Stable
public inline val DpRect.size: DpSize
    get() = DpSize(width, height)


Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)

## androidx.compose.ui.unit Dp.kt source (lines 71–105)

    // +0f to normalize -0f
    @Stable public inline operator fun div(other: Float): Dp = Dp((value / other) + 0f)

    // +0f to normalize -0f
    @Stable public inline operator fun div(other: Int): Dp = Dp((value / other) + 0f)

    /** Divide by another Dp to get a scalar. */
    @Stable public inline operator fun div(other: Dp): Float = value / other.value

    /** Multiply a Dp by a scalar. */
    // +0f to normalize -0f
    @Stable public inline operator fun times(other: Float): Dp = Dp((value * other) + 0f)

    // +0f to normalize -0f
    @Stable public inline operator fun times(other: Int): Dp = Dp((value * other) + 0f)

    /** Support comparing Dimensions with comparison operators. */
    @OptIn(ExperimentalUnitApi::class)
    @Stable
    public override /* TODO: inline */  operator fun compareTo(other: Dp): Int =
        // Unspecified values should compare false against all other values. This always sets
        // them as comparing == 0, but the equality check fails, so Unspecified < 1.dp == false
        // and 1.dp < Unspecified == false
        if (value.isNaN() || other.value.isNaN()) 0 else value.compareTo(other.value)

    @Stable
    public override fun toString(): String = if (isUnspecified) "Dp.Unspecified" else "$value.dp"

    public companion object {
        /**
         * A dimension used to represent a hairline drawing element. Hairline elements take up no
         * space, but will draw a single pixel, independent of the device's resolution and density.
         */
        @Stable
        public val Hairline: Dp

Sources: [live-androidx-ui-ui-unit-ui-unit-dp-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/Dp.kt)
