---
type: reference
title: androidx.compose.ui.unit TextUnit.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 1
    endLine: 35
    sha256: 6c65c4ab4dabf297e5f57a90ff9a4e1b8897ab049a4cfd8db5c3b0af1b2023ef
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
      @file:Suppress("NOTHING_TO_INLINE")

      package androidx.compose.ui.unit

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.isSpecified
      import androidx.compose.ui.util.floatFromBits
      import androidx.compose.ui.util.lerp

      /**
       * We encode the unit information and float value into the single 64-bit long integer. The higher
       * 32bit represents the metadata of this value and lower 32bit represents the bit representation of
       * the float value. Currently lower 8bits in the metadata bits are used for unit information.
       *
       * Bits
       *
       * ```
       * |-------|-------|-------|-------|-------|-------|-------|-------|
       *                                  FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF: Float Value
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 106
    endLine: 140
    sha256: 97d94c84f2f4eafc5d99028c74be993924c04d64be80f62c834d9254bacd3ca8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun div(other: Float): TextUnit {
              checkArithmetic(this)
              return pack(rawType, value / other)
          }

          /**
           * Divide a [TextUnit] by a scalar.
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun div(other: Double): TextUnit {
              checkArithmetic(this)
              return pack(rawType, (value / other).toFloat())
          }

          /**
           * Divide a [TextUnit] by a scalar.
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun div(other: Int): TextUnit {
              checkArithmetic(this)
              return pack(rawType, value / other)
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 141
    endLine: 175
    sha256: 5adb8ce6bf69533fc298c329ce993a83333b6606f1f4ecc16b7d92d87db08dab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Multiply a [TextUnit] by a scalar.
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun times(other: Float): TextUnit {
              checkArithmetic(this)
              return pack(rawType, value * other)
          }

          /**
           * Multiply a [TextUnit] by a scalar.
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun times(other: Double): TextUnit {
              checkArithmetic(this)
              return pack(rawType, (value * other).toFloat())
          }

          /**
           * Multiply a [TextUnit] by a scalar.
           *
           * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
           * result of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 176
    endLine: 210
    sha256: f6d9e9640bbe1ab2c97131804c76d19cd9195ecd1b620b3c55431eaa04ba69d2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public inline operator fun times(other: Int): TextUnit {
              checkArithmetic(this)
              return pack(rawType, value * other)
          }

          /**
           * Support comparing Dimensions with comparison operators.
           *
           * @return 0 if this [TextUnit] equals to the [other], a negative number if it's less than the
           *   [other], or a positive number if it's greater than the [other].
           * @throws IllegalArgumentException if this [TextUnit] and the [other] has different
           *   [TextUnitType]s or either of the two has the [TextUnitType] equals to
           *   [TextUnitType.Unspecified].
           */
          public inline operator fun compareTo(other: TextUnit): Int {
              checkArithmetic(this, other)
              return value.compareTo(other.value)
          }

          public override fun toString(): String {
              return when (type) {
                  TextUnitType.Unspecified -> "Unspecified"
                  TextUnitType.Sp -> "$value.sp"
                  TextUnitType.Em -> "$value.em"
                  else -> "Invalid"
              }
          }

          public companion object {
              internal val TextUnitTypes =
                  arrayOf(TextUnitType.Unspecified, TextUnitType.Sp, TextUnitType.Em)

              /**
               * A special [TextUnit] instance for representing inheriting from parent value.
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 211
    endLine: 245
    sha256: 7ee60533f4f740907026edcd1835af32ae9debaa0dec4c922b95e4ccb2ff08cb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *
               * Notice that performing arithmetic operations on [Unspecified] may result in an
               * [IllegalArgumentException].
               */
              @Stable
              public val Unspecified: TextUnit
                  get() = pack(UNIT_TYPE_UNSPECIFIED, Float.NaN)
          }

          /**
           * A helper function for getting underlying type information in raw bits.
           *
           * Use [TextUnit.type] in public places.
           */
          @PublishedApi
          internal val rawType: Long
              get() = packedValue and UNIT_MASK

          /** A type information of this TextUnit. */
          public val type: TextUnitType
              get() = TextUnitTypes[(rawType ushr 32).toInt()]

          /** True if this is a SP unit type. */
          public val isSp: Boolean
              get() = rawType == UNIT_TYPE_SP

          /** True if this is a EM unit type. */
          public val isEm: Boolean
              get() = rawType == UNIT_TYPE_EM

          /**
           * Returns the value of this [TextUnit].
           *
           * For example, the value of 3.sp equals to 3, and value of 5.em equals to 5. The value of
           * [TextUnit]s whose [TextUnitType] is [TextUnitType.Unspecified] is undefined.
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 246
    endLine: 280
    sha256: 80ec706ee9010617cc1fa76bd4d191df6b966f75010ffd7a30c2b7bccd686d37
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public val value: Float
              get() = floatFromBits((packedValue and 0xFFFF_FFFFL).toInt())
      }

      /** `false` when this is [TextUnit.Unspecified]. */
      @Stable
      public inline val TextUnit.isSpecified: Boolean
          get() = !isUnspecified

      /** `true` when this is [TextUnit.Unspecified]. */
      @Stable
      public inline val TextUnit.isUnspecified: Boolean
          get() = rawType == 0x0L // UNIT_TYPE_UNSPECIFIED

      /**
       * If this [TextUnit] [isSpecified] then this is returned, otherwise [block] is executed and its
       * result is returned.
       */
      public inline fun TextUnit.takeOrElse(block: () -> TextUnit): TextUnit =
          if (isSpecified) this else block()

      /** Creates a SP unit [TextUnit] */
      @Stable
      public val Float.sp: TextUnit
          get() = pack(UNIT_TYPE_SP, this)

      /** Creates an EM unit [TextUnit] */
      @Stable
      public val Float.em: TextUnit
          get() = pack(UNIT_TYPE_EM, this)

      /** Creates a SP unit [TextUnit] */
      @Stable
      public val Double.sp: TextUnit
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 281
    endLine: 315
    sha256: 3234dfba3fcdfe9f02c3bd5a08361cdab9f3d9ba3a5b6d598bd191805157589c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          get() = pack(UNIT_TYPE_SP, this.toFloat())

      /** Creates an EM unit [TextUnit] */
      @Stable
      public val Double.em: TextUnit
          get() = pack(UNIT_TYPE_EM, this.toFloat())

      /** Creates a SP unit [TextUnit] */
      @Stable
      public val Int.sp: TextUnit
          get() = pack(UNIT_TYPE_SP, this.toFloat())

      /** Creates an EM unit [TextUnit] */
      @Stable
      public val Int.em: TextUnit
          get() = pack(UNIT_TYPE_EM, this.toFloat())

      /**
       * Multiply a [TextUnit] by a scalar.
       *
       * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
       * of this operation is the same unit type of the given one.
       */
      @Stable
      public inline operator fun Float.times(other: TextUnit): TextUnit {
          checkArithmetic(other)
          return pack(other.rawType, this * other.value)
      }

      /**
       * Multiply a [TextUnit] by a scalar.
       *
       * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
       * of this operation is the same unit type of the given one.
       */
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 316
    endLine: 350
    sha256: 1a2a17397d06e39d78002d84808015e54ee947acce90ce2cba32d35da616ac5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      @Stable
      public inline operator fun Double.times(other: TextUnit): TextUnit {
          checkArithmetic(other)
          return pack(other.rawType, this.toFloat() * other.value)
      }

      /**
       * Multiply a [TextUnit] by a scalar.
       *
       * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
       * of this operation is the same unit type of the given one.
       */
      @Stable
      public inline operator fun Int.times(other: TextUnit): TextUnit {
          checkArithmetic(other)
          return pack(other.rawType, this * other.value)
      }

      @PublishedApi
      internal fun pack(unitType: Long, v: Float): TextUnit =
          TextUnit(unitType or (v.toRawBits().toLong() and 0xFFFF_FFFFL))

      @PublishedApi
      internal fun checkArithmetic(a: TextUnit) {
          requirePrecondition(!a.isUnspecified) { "Cannot perform operation for Unspecified type." }
      }

      @PublishedApi
      internal fun checkArithmetic(a: TextUnit, b: TextUnit) {
          requirePrecondition(!a.isUnspecified && !b.isUnspecified) {
              "Cannot perform operation for Unspecified type."
          }
          requirePrecondition(a.type == b.type) { "Cannot perform operation for ${a.type} and ${b.type}" }
      }
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 351
    endLine: 379
    sha256: d5750cabdf6bba7354b4cc72eba29f1858e47cb8df753405c5081de88991f5f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      @PublishedApi
      internal fun checkArithmetic(a: TextUnit, b: TextUnit, c: TextUnit) {
          requirePrecondition(!a.isUnspecified && !b.isUnspecified && !c.isUnspecified) {
              "Cannot perform operation for Unspecified type."
          }
          requirePrecondition(a.type == b.type && b.type == c.type) {
              "Cannot perform operation for ${a.type} and ${b.type}"
          }
      }

      /**
       * Linearly interpolate between two [TextUnit]s.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
       * meaning that the interpolation has finished, returning [stop] (or something equivalent to
       * [stop]), and values in between meaning that the interpolation is at the relevant point on the
       * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
       * negative values and values greater than 1.0 are valid.
       *
       * @throws IllegalArgumentException if [start] and [stop] have different [TextUnitType]s, or either
       *   of the two has its [TextUnitType] equal to [TextUnitType.Unspecified].
       */
      @Stable
      public fun lerp(start: TextUnit, stop: TextUnit, fraction: Float): TextUnit {
          checkArithmetic(start, stop)
          return pack(start.rawType, lerp(start.value, stop.value, fraction))
      }
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 36
    endLine: 70
    sha256: 4b31425f6670ae0fa62c9cfae91f2b1ec3e876090cb4efdeb5588485a2e90d6e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *                          UUUUUUUU                                : Unit Information
       *  XXXXXXXXXXXXXXXXXXXXXXXX                                        : Unused bits
       * ```
       */
      private const val UNIT_MASK = 0xFFL shl 32 // 0xFF_0000_0000
      private const val UNIT_TYPE_UNSPECIFIED = 0x00L shl 32 // 0x00_0000_0000
      private const val UNIT_TYPE_SP = 0x01L shl 32 // 0x01_0000_0000
      private const val UNIT_TYPE_EM = 0x02L shl 32 // 0x02_0000_0000

      /** An enum class defining for type of [TextUnit]. */
      @kotlin.jvm.JvmInline
      public value class TextUnitType(internal val type: Long) {
          public override fun toString(): String {
              return when (this) {
                  Unspecified -> "Unspecified"
                  Sp -> "Sp"
                  Em -> "Em"
                  else -> "Invalid"
              }
          }

          public companion object {
              public val Unspecified: TextUnitType
                  get() = TextUnitType(UNIT_TYPE_UNSPECIFIED)

              public val Sp: TextUnitType
                  get() = TextUnitType(UNIT_TYPE_SP)

              public val Em: TextUnitType
                  get() = TextUnitType(UNIT_TYPE_EM)
          }
      }

      /**
       * Construct a new TextUnit.
  - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt
    startLine: 71
    endLine: 105
    sha256: 5106438f7507b8f22823981e4a411c9faaaca299a79296359462b3dcefedcfbc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param value of the dimension
       * @param type dimension
       */
      public fun TextUnit(value: Float, type: TextUnitType): TextUnit = pack(type.type, value)

      /**
       * The unit used for text related dimension value.
       *
       * This unit can hold either scaled pixels (SP), relative font size (EM) and special unit
       * Unspecified for indicating inheriting from other style or using the default value. It can be
       * created with [sp] or [em]. (e.g. 15.sp or 18.em) which can be applied to [Int], [Double], and
       * [Float].
       *
       * Note that do not store this value in your persistent storage or send to another process since the
       * internal representation may be changed in future.
       */
      @Immutable
      @kotlin.jvm.JvmInline
      public value class TextUnit internal constructor(internal val packedValue: Long) {
          /**
           * This is the same as multiplying the [TextUnit] by -1.0.
           *
           * This operation works only if the operand is not equal to [TextUnit.Unspecified]. The result
           * of this operation is the same unit type of the given one.
           *
           * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
           */
          public inline operator fun unaryMinus(): TextUnit {
              checkArithmetic(this)
              return pack(rawType, -value)
          }

          /**
           * Divide a [TextUnit] by a scalar.
compose:
  id: live-androidx-ui-ui-unit-ui-unit-textunit
  artifact: androidx.compose.ui:ui-unit
  fqn: androidx.compose.ui.unit
  sections:
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-1
      title: androidx.compose.ui.unit TextUnit.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-106
      title: androidx.compose.ui.unit TextUnit.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-141
      title: androidx.compose.ui.unit TextUnit.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.times
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-176
      title: androidx.compose.ui.unit TextUnit.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.sp
        - androidx.compose.ui.unit.em
        - androidx.compose.ui.unit.times
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-211
      title: androidx.compose.ui.unit TextUnit.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.sp
        - androidx.compose.ui.unit.em
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-246
      title: androidx.compose.ui.unit TextUnit.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.isSpecified
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.takeOrElse
        - androidx.compose.ui.unit.sp
        - androidx.compose.ui.unit.em
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-281
      title: androidx.compose.ui.unit TextUnit.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.sp
        - androidx.compose.ui.unit.em
        - androidx.compose.ui.unit.times
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-316
      title: androidx.compose.ui.unit TextUnit.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.times
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-351
      title: androidx.compose.ui.unit TextUnit.kt source (lines 351–379)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.isUnspecified
        - androidx.compose.ui.unit.lerp
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-36
      title: androidx.compose.ui.unit TextUnit.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-unit-ui-unit-textunit-lines-71
      title: androidx.compose.ui.unit TextUnit.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.unit.TextUnitType
        - androidx.compose.ui.unit.TextUnit
        - androidx.compose.ui.unit.sp
        - androidx.compose.ui.unit.em
      requires:
        - artifact: androidx.compose.ui:ui-unit
          version: null
      sourceIds:
        - live-androidx-ui-ui-unit-ui-unit-textunit-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.unit TextUnit.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt

## androidx.compose.ui.unit TextUnit.kt source (lines 1–35)

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
@file:Suppress("NOTHING_TO_INLINE")

package androidx.compose.ui.unit

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.isSpecified
import androidx.compose.ui.util.floatFromBits
import androidx.compose.ui.util.lerp

/**
 * We encode the unit information and float value into the single 64-bit long integer. The higher
 * 32bit represents the metadata of this value and lower 32bit represents the bit representation of
 * the float value. Currently lower 8bits in the metadata bits are used for unit information.
 *
 * Bits
 *
 * ```
 * |-------|-------|-------|-------|-------|-------|-------|-------|
 *                                  FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF: Float Value

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 106–140)

     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun div(other: Float): TextUnit {
        checkArithmetic(this)
        return pack(rawType, value / other)
    }

    /**
     * Divide a [TextUnit] by a scalar.
     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun div(other: Double): TextUnit {
        checkArithmetic(this)
        return pack(rawType, (value / other).toFloat())
    }

    /**
     * Divide a [TextUnit] by a scalar.
     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun div(other: Int): TextUnit {
        checkArithmetic(this)
        return pack(rawType, value / other)

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 141–175)

    }

    /**
     * Multiply a [TextUnit] by a scalar.
     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun times(other: Float): TextUnit {
        checkArithmetic(this)
        return pack(rawType, value * other)
    }

    /**
     * Multiply a [TextUnit] by a scalar.
     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun times(other: Double): TextUnit {
        checkArithmetic(this)
        return pack(rawType, (value * other).toFloat())
    }

    /**
     * Multiply a [TextUnit] by a scalar.
     *
     * This operation works only if the left operand is not equal to [TextUnit.Unspecified]. The
     * result of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 176–210)

     */
    public inline operator fun times(other: Int): TextUnit {
        checkArithmetic(this)
        return pack(rawType, value * other)
    }

    /**
     * Support comparing Dimensions with comparison operators.
     *
     * @return 0 if this [TextUnit] equals to the [other], a negative number if it's less than the
     *   [other], or a positive number if it's greater than the [other].
     * @throws IllegalArgumentException if this [TextUnit] and the [other] has different
     *   [TextUnitType]s or either of the two has the [TextUnitType] equals to
     *   [TextUnitType.Unspecified].
     */
    public inline operator fun compareTo(other: TextUnit): Int {
        checkArithmetic(this, other)
        return value.compareTo(other.value)
    }

    public override fun toString(): String {
        return when (type) {
            TextUnitType.Unspecified -> "Unspecified"
            TextUnitType.Sp -> "$value.sp"
            TextUnitType.Em -> "$value.em"
            else -> "Invalid"
        }
    }

    public companion object {
        internal val TextUnitTypes =
            arrayOf(TextUnitType.Unspecified, TextUnitType.Sp, TextUnitType.Em)

        /**
         * A special [TextUnit] instance for representing inheriting from parent value.

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 211–245)

         *
         * Notice that performing arithmetic operations on [Unspecified] may result in an
         * [IllegalArgumentException].
         */
        @Stable
        public val Unspecified: TextUnit
            get() = pack(UNIT_TYPE_UNSPECIFIED, Float.NaN)
    }

    /**
     * A helper function for getting underlying type information in raw bits.
     *
     * Use [TextUnit.type] in public places.
     */
    @PublishedApi
    internal val rawType: Long
        get() = packedValue and UNIT_MASK

    /** A type information of this TextUnit. */
    public val type: TextUnitType
        get() = TextUnitTypes[(rawType ushr 32).toInt()]

    /** True if this is a SP unit type. */
    public val isSp: Boolean
        get() = rawType == UNIT_TYPE_SP

    /** True if this is a EM unit type. */
    public val isEm: Boolean
        get() = rawType == UNIT_TYPE_EM

    /**
     * Returns the value of this [TextUnit].
     *
     * For example, the value of 3.sp equals to 3, and value of 5.em equals to 5. The value of
     * [TextUnit]s whose [TextUnitType] is [TextUnitType.Unspecified] is undefined.

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 246–280)

     */
    public val value: Float
        get() = floatFromBits((packedValue and 0xFFFF_FFFFL).toInt())
}

/** `false` when this is [TextUnit.Unspecified]. */
@Stable
public inline val TextUnit.isSpecified: Boolean
    get() = !isUnspecified

/** `true` when this is [TextUnit.Unspecified]. */
@Stable
public inline val TextUnit.isUnspecified: Boolean
    get() = rawType == 0x0L // UNIT_TYPE_UNSPECIFIED

/**
 * If this [TextUnit] [isSpecified] then this is returned, otherwise [block] is executed and its
 * result is returned.
 */
public inline fun TextUnit.takeOrElse(block: () -> TextUnit): TextUnit =
    if (isSpecified) this else block()

/** Creates a SP unit [TextUnit] */
@Stable
public val Float.sp: TextUnit
    get() = pack(UNIT_TYPE_SP, this)

/** Creates an EM unit [TextUnit] */
@Stable
public val Float.em: TextUnit
    get() = pack(UNIT_TYPE_EM, this)

/** Creates a SP unit [TextUnit] */
@Stable
public val Double.sp: TextUnit

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 281–315)

    get() = pack(UNIT_TYPE_SP, this.toFloat())

/** Creates an EM unit [TextUnit] */
@Stable
public val Double.em: TextUnit
    get() = pack(UNIT_TYPE_EM, this.toFloat())

/** Creates a SP unit [TextUnit] */
@Stable
public val Int.sp: TextUnit
    get() = pack(UNIT_TYPE_SP, this.toFloat())

/** Creates an EM unit [TextUnit] */
@Stable
public val Int.em: TextUnit
    get() = pack(UNIT_TYPE_EM, this.toFloat())

/**
 * Multiply a [TextUnit] by a scalar.
 *
 * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
 * of this operation is the same unit type of the given one.
 */
@Stable
public inline operator fun Float.times(other: TextUnit): TextUnit {
    checkArithmetic(other)
    return pack(other.rawType, this * other.value)
}

/**
 * Multiply a [TextUnit] by a scalar.
 *
 * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
 * of this operation is the same unit type of the given one.
 */

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 316–350)

@Stable
public inline operator fun Double.times(other: TextUnit): TextUnit {
    checkArithmetic(other)
    return pack(other.rawType, this.toFloat() * other.value)
}

/**
 * Multiply a [TextUnit] by a scalar.
 *
 * This operation works only if the right operand is not equal to [TextUnit.Unspecified]. The result
 * of this operation is the same unit type of the given one.
 */
@Stable
public inline operator fun Int.times(other: TextUnit): TextUnit {
    checkArithmetic(other)
    return pack(other.rawType, this * other.value)
}

@PublishedApi
internal fun pack(unitType: Long, v: Float): TextUnit =
    TextUnit(unitType or (v.toRawBits().toLong() and 0xFFFF_FFFFL))

@PublishedApi
internal fun checkArithmetic(a: TextUnit) {
    requirePrecondition(!a.isUnspecified) { "Cannot perform operation for Unspecified type." }
}

@PublishedApi
internal fun checkArithmetic(a: TextUnit, b: TextUnit) {
    requirePrecondition(!a.isUnspecified && !b.isUnspecified) {
        "Cannot perform operation for Unspecified type."
    }
    requirePrecondition(a.type == b.type) { "Cannot perform operation for ${a.type} and ${b.type}" }
}


Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 351–379)

@PublishedApi
internal fun checkArithmetic(a: TextUnit, b: TextUnit, c: TextUnit) {
    requirePrecondition(!a.isUnspecified && !b.isUnspecified && !c.isUnspecified) {
        "Cannot perform operation for Unspecified type."
    }
    requirePrecondition(a.type == b.type && b.type == c.type) {
        "Cannot perform operation for ${a.type} and ${b.type}"
    }
}

/**
 * Linearly interpolate between two [TextUnit]s.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
 * meaning that the interpolation has finished, returning [stop] (or something equivalent to
 * [stop]), and values in between meaning that the interpolation is at the relevant point on the
 * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
 * negative values and values greater than 1.0 are valid.
 *
 * @throws IllegalArgumentException if [start] and [stop] have different [TextUnitType]s, or either
 *   of the two has its [TextUnitType] equal to [TextUnitType.Unspecified].
 */
@Stable
public fun lerp(start: TextUnit, stop: TextUnit, fraction: Float): TextUnit {
    checkArithmetic(start, stop)
    return pack(start.rawType, lerp(start.value, stop.value, fraction))
}


Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 36–70)

 *                          UUUUUUUU                                : Unit Information
 *  XXXXXXXXXXXXXXXXXXXXXXXX                                        : Unused bits
 * ```
 */
private const val UNIT_MASK = 0xFFL shl 32 // 0xFF_0000_0000
private const val UNIT_TYPE_UNSPECIFIED = 0x00L shl 32 // 0x00_0000_0000
private const val UNIT_TYPE_SP = 0x01L shl 32 // 0x01_0000_0000
private const val UNIT_TYPE_EM = 0x02L shl 32 // 0x02_0000_0000

/** An enum class defining for type of [TextUnit]. */
@kotlin.jvm.JvmInline
public value class TextUnitType(internal val type: Long) {
    public override fun toString(): String {
        return when (this) {
            Unspecified -> "Unspecified"
            Sp -> "Sp"
            Em -> "Em"
            else -> "Invalid"
        }
    }

    public companion object {
        public val Unspecified: TextUnitType
            get() = TextUnitType(UNIT_TYPE_UNSPECIFIED)

        public val Sp: TextUnitType
            get() = TextUnitType(UNIT_TYPE_SP)

        public val Em: TextUnitType
            get() = TextUnitType(UNIT_TYPE_EM)
    }
}

/**
 * Construct a new TextUnit.

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)

## androidx.compose.ui.unit TextUnit.kt source (lines 71–105)

 *
 * @param value of the dimension
 * @param type dimension
 */
public fun TextUnit(value: Float, type: TextUnitType): TextUnit = pack(type.type, value)

/**
 * The unit used for text related dimension value.
 *
 * This unit can hold either scaled pixels (SP), relative font size (EM) and special unit
 * Unspecified for indicating inheriting from other style or using the default value. It can be
 * created with [sp] or [em]. (e.g. 15.sp or 18.em) which can be applied to [Int], [Double], and
 * [Float].
 *
 * Note that do not store this value in your persistent storage or send to another process since the
 * internal representation may be changed in future.
 */
@Immutable
@kotlin.jvm.JvmInline
public value class TextUnit internal constructor(internal val packedValue: Long) {
    /**
     * This is the same as multiplying the [TextUnit] by -1.0.
     *
     * This operation works only if the operand is not equal to [TextUnit.Unspecified]. The result
     * of this operation is the same unit type of the given one.
     *
     * @throws IllegalArgumentException if this [TextUnit]'s type is [TextUnitType.Unspecified].
     */
    public inline operator fun unaryMinus(): TextUnit {
        checkArithmetic(this)
        return pack(rawType, -value)
    }

    /**
     * Divide a [TextUnit] by a scalar.

Sources: [live-androidx-ui-ui-unit-ui-unit-textunit-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-unit/src/commonMain/kotlin/androidx/compose/ui/unit/TextUnit.kt)
