---
type: reference
title: androidx.compose.ui.text SpanStyle.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1
    endLine: 35
    sha256: f5a6f45c3cd66d5a3edb63beb118dc89155e760df75e1d555f8e4f7fe93f7b41
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

      package androidx.compose.ui.text

      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.graphics.Brush
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shadow
      import androidx.compose.ui.graphics.SolidColor
      import androidx.compose.ui.graphics.drawscope.DrawStyle
      import androidx.compose.ui.graphics.drawscope.Fill
      import androidx.compose.ui.graphics.isSpecified
      import androidx.compose.ui.graphics.isUnspecified
      import androidx.compose.ui.graphics.lerp
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.font.FontStyle
      import androidx.compose.ui.text.font.FontSynthesis
      import androidx.compose.ui.text.font.FontWeight
      import androidx.compose.ui.text.font.lerp
      import androidx.compose.ui.text.intl.LocaleList
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1006-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1006
    endLine: 1040
    sha256: b5f446fb1dfb375383a597343a211782ade1b5904ca28e465979a5e0deb89fb7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (legacySpanStyle != null) {
                      legacySpanStyle.fontStyle != null
                  } else {
                      bits and HAS_FONT_STYLE != 0
                  }

          internal val hasFontSynthesis: Boolean
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.fontSynthesis != null
                  } else {
                      bits and FONT_SYNTHESIS_MASK != 0
                  }

          internal fun copyFontAttributes(): SpanStyle {
              if (legacySpanStyle != null) {
                  return SpanStyle(
                      LegacySpanStyle(
                          fontFamily = legacySpanStyle.fontFamily,
                          fontWeight = legacySpanStyle.fontWeight,
                          fontStyle = legacySpanStyle.fontStyle,
                          fontSynthesis = legacySpanStyle.fontSynthesis,
                      )
                  )
              }
              return SpanStyle(
                  colorXor = 0L,
                  bits = bits and (FONT_STYLE_MASK or FONT_SYNTHESIS_MASK),
                  extras = null,
                  fontSize = TextUnit.Unspecified,
                  letterSpacing = TextUnit.Unspecified,
                  fontWeight = fontWeight,
                  fontFamily = fontFamily,
              )
          }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1041-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1041
    endLine: 1075
    sha256: 3f526f34a3ca54d2a7a1927f22e0ea7aa1c5055d5af967362ffa9f7309b3e9ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          internal val hasTextDecoration: Boolean
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.textDecoration != null
                  } else {
                      bits and TEXT_DECORATION_MASK != 0
                  }

          internal val hasTextGeometricTransform: Boolean
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.textGeometricTransform != null
                  } else {
                      bits and HAS_GEOMETRIC_TRANSFORM != 0
                  }

          internal val hasBaselineShift: Boolean
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.baselineShift != null
                  } else {
                      bits and HAS_BASELINE_SHIFT != 0
                  }

          /** True if a field that changes glyph size or spacing is set. */
          internal val hasMetricAffectingAttributes: Boolean
              get() {
                  if (legacySpanStyle != null) return legacySpanStyle.hasMetricAffectingAttributes()
                  if (
                      bits and METRIC_BITS != 0 ||
                          fontSize.isSpecified ||
                          letterSpacing.isSpecified ||
                          fontWeight != null ||
                          fontFamily != null
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 106
    endLine: 140
    sha256: 2afd3c5ebe67437ae65bab208fef4db7a348f7c5262f258b350770860c1421c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param baselineShift Vertical text baseline offset, or null if unset.
       * @param textGeometricTransform Geometric transformation (horizontal scale and skew) for text.
       * @param localeList Locale list for text rendering, or null if unset.
       * @param background Background color behind the text characters.
       * @param shadow Blur and offset shadow effect drawn behind text, or null if unset.
       * @param drawStyle Stroke or fill drawing configuration, or null if unset.
       * @param platformStyle Platform-specific span styling configuration, or null if unset.
       */
      @Immutable
      internal class SpanStyleExtras(
          @JvmField val brush: Brush?,
          @JvmField val alpha: Float,
          @JvmField val fontFeatureSettings: String?,
          val baselineShift: BaselineShift?,
          @JvmField val textGeometricTransform: TextGeometricTransform?,
          @JvmField val localeList: LocaleList?,
          val background: Color,
          @JvmField val shadow: Shadow?,
          @JvmField val drawStyle: DrawStyle?,
          @JvmField val platformStyle: PlatformSpanStyle? = null,
      ) {
          /**
           * Checks if this instance's extra attributes match the given parameter values.
           *
           * Reference comparison (`===`) is used for heap objects ([brush], [fontFeatureSettings],
           * [textGeometricTransform], [localeList], [shadow], [drawStyle], and [platformStyle]). Value
           * equality is used for value classes ([baselineShift] and [background]), and [Float.compareTo]
           * for [alpha].
           *
           * Returns `true` when all attributes match, allowing callers to reuse this instance and avoid
           * allocating a new [SpanStyleExtras] object.
           */
          fun matches(
              brush: Brush?,
              alpha: Float,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1076-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1076
    endLine: 1110
    sha256: 7281679af80f5d84d421c5b73abae81b64361e381c10e239a218596821a655c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  ) {
                      return true
                  }
                  val extras = extras ?: return false
                  val shift = extras.baselineShift
                  return extras.localeList != null || (shift != null && shift.isApplicable)
              }

          @Suppress("NOTHING_TO_INLINE")
          internal inline fun isPackedDefault(): Boolean =
              colorXor == 0L &&
                  bits == 0 &&
                  fontSize.isUnspecified &&
                  letterSpacing.isUnspecified &&
                  fontWeight == null &&
                  fontFamily == null

          internal fun isDefault(): Boolean {
              if (legacySpanStyle != null) {
                  return legacySpanStyle === DefaultLegacySpanStyle ||
                      legacySpanStyle == DefaultLegacySpanStyle
              }
              return isPackedDefault()
          }

          /**
           * Returns a new span style that is a combination of this style and the given [other] style.
           *
           * [other] span style's null or inherit properties are replaced with the non-null properties of
           * this span style. Another way to think of it is that the "missing" properties of the [other]
           * style are _filled_ by the properties of this style.
           *
           * If the given span style is null, returns this span style.
           *
           * @param other style to merge
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1111-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1111
    endLine: 1145
    sha256: d0511fcede69e117e4e344d7ece36f64ed46210942b280778f01dd91598cd42e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Stable
          public fun merge(other: SpanStyle? = null): SpanStyle {
              if (other == null || other === this) return this
              if (legacySpanStyle != null) return mergeLegacy(other)
              if (other.isPackedDefault()) return this
              if (isPackedDefault()) return other
              val thisBits = bits
              val otherBits = other.bits
              var colorXor = mergeSpanColorXor(colorXor, other.colorXor)
              val bits = mergeSpanBits(thisBits, otherBits)
              val fontSize = if (other.fontSize.isSpecified) other.fontSize else fontSize
              val letterSpacing =
                  if (other.letterSpacing.isSpecified) other.letterSpacing else letterSpacing
              val fontWeight = other.fontWeight ?: fontWeight
              val fontFamily = other.fontFamily ?: fontFamily
              val thisExtras = extras
              val otherExtras = other.extras
              var extras: SpanStyleExtras? = null
              if ((thisBits or otherBits) and SPAN_HAS_EXTRAS != 0) {
                  // A field set in `other` wins, even when its value is a preset that needs no extras.
                  val thisBrush = thisExtras?.brush
                  val otherBrush = otherExtras?.brush
                  // Like TextForegroundStyle.merge (b/230787077): a color never replaces a brush.
                  val brush = otherBrush ?: thisBrush
                  val alpha =
                      when {
                          otherBrush != null && !otherExtras.alpha.isNaN() -> otherExtras.alpha
                          thisBrush != null -> thisExtras.alpha
                          else -> Float.NaN
                      }
                  if (brush != null) colorXor = 0L
                  val fontFeatureSettings =
                      if (otherBits and HAS_FONT_FEATURES != 0) otherExtras?.fontFeatureSettings
                      else thisExtras?.fontFeatureSettings
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1146-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1146
    endLine: 1180
    sha256: f2e3b703d8c37321c4dd418fc468a45668495e878d1d86beba9b79788eac43d3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val baselineShift =
                      if (otherBits and HAS_BASELINE_SHIFT != 0) otherExtras?.baselineShift
                      else thisExtras?.baselineShift
                  val textGeometricTransform =
                      if (otherBits and HAS_GEOMETRIC_TRANSFORM != 0) {
                          otherExtras?.textGeometricTransform
                      } else {
                          thisExtras?.textGeometricTransform
                      }
                  val localeList = otherExtras?.localeList ?: thisExtras?.localeList
                  val backgroundSource =
                      if (otherBits and HAS_BACKGROUND != 0) otherExtras else thisExtras
                  // Not `?.background`: a nullable Color would be boxed.
                  val background =
                      if (backgroundSource == null) Color.Unspecified else backgroundSource.background
                  val shadow =
                      if (otherBits and HAS_SHADOW != 0) otherExtras?.shadow else thisExtras?.shadow
                  val drawStyle =
                      if (otherBits and HAS_DRAW_STYLE != 0) otherExtras?.drawStyle
                      else thisExtras?.drawStyle
                  val platformStyle =
                      mergeNormalizedPlatformStyle(
                          thisBits,
                          thisExtras?.platformStyle,
                          otherBits,
                          otherExtras?.platformStyle,
                      )
                  extras =
                      when {
                          thisExtras != null &&
                              thisExtras.matches(
                                  brush,
                                  alpha,
                                  fontFeatureSettings,
                                  baselineShift,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1181-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1181
    endLine: 1215
    sha256: 887d724041358acf92809323f6ad0342826ae39fef7d3ead763d33cc58722930
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  textGeometricTransform,
                                  localeList,
                                  background,
                                  shadow,
                                  drawStyle,
                                  platformStyle,
                              ) -> thisExtras
                          otherExtras != null &&
                              otherExtras.matches(
                                  brush,
                                  alpha,
                                  fontFeatureSettings,
                                  baselineShift,
                                  textGeometricTransform,
                                  localeList,
                                  background,
                                  shadow,
                                  drawStyle,
                                  platformStyle,
                              ) -> otherExtras
                          else ->
                              createSpanStyleExtras(
                                  brush,
                                  alpha,
                                  fontFeatureSettings,
                                  baselineShift,
                                  textGeometricTransform,
                                  localeList,
                                  background,
                                  shadow,
                                  drawStyle,
                                  platformStyle,
                              )
                      }
              }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1216-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1216
    endLine: 1250
    sha256: ece4c394084c006ac2fcb9b5bba1dfb9d59f8bdc25a6cd81e7660abb5671c7ce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
                  return this
              }
              if (other.sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
                  return other
              }
              return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
          }

          private fun mergeLegacy(other: SpanStyle): SpanStyle {
              val legacy = legacySpanStyle!!
              val mergedLegacy = legacy.merge(other.legacySpanStyle)
              if (mergedLegacy === legacy) return this
              if (mergedLegacy === other.legacySpanStyle) return other
              return SpanStyle(mergedLegacy)
          }

          /**
           * Merges raw [SpanStyle] arguments onto `this`.
           *
           * A color-only merge, the common case from `TextStyle.merge(color = ...)`, makes at most one
           * object.
           */
          internal fun fastMerge(
              color: Color,
              brush: Brush?,
              alpha: Float,
              fontSize: TextUnit,
              fontWeight: FontWeight?,
              fontStyle: FontStyle?,
              fontSynthesis: FontSynthesis?,
              fontFamily: FontFamily?,
              fontFeatureSettings: String?,
              letterSpacing: TextUnit,
              baselineShift: BaselineShift?,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1251-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1251
    endLine: 1285
    sha256: 086cab1620e934b692fbf2b82a68508941b638b3078af083cee836d3f80d46f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              textGeometricTransform: TextGeometricTransform?,
              localeList: LocaleList?,
              background: Color,
              textDecoration: TextDecoration?,
              shadow: Shadow?,
              platformStyle: PlatformSpanStyle?,
              drawStyle: DrawStyle?,
          ): SpanStyle {
              if (legacySpanStyle != null) {
                  return fastMergeLegacy(
                      color,
                      brush,
                      alpha,
                      fontSize,
                      fontWeight,
                      fontStyle,
                      fontSynthesis,
                      fontFamily,
                      fontFeatureSettings,
                      letterSpacing,
                      baselineShift,
                      textGeometricTransform,
                      localeList,
                      background,
                      textDecoration,
                      shadow,
                      platformStyle,
                      drawStyle,
                  )
              }
              // prioritize the parameters to Text in diffs here
              /**
               * color: Color fontSize: TextUnit fontStyle: FontStyle? fontWeight: FontWeight? fontFamily:
               * FontFamily? letterSpacing: TextUnit textDecoration: TextDecoration? textAlign: TextAlign?
               * lineHeight: TextUnit
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1286-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1286
    endLine: 1320
    sha256: c52ec964653be58464a20dffc50e8b6484a7766809f63e05276988c2455df2c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               */
              // any new vals should do a pre-merge check here
              // ref check for font-family, since we don't want to compare lists in fast path
              // then compare the remaining params, for potential non-Text merges
              // Fast path for callers (such as BasicText / Material Text) that only override `color`
              // (or pass all default/unspecified span arguments). Avoids running the full 10-field
              // bit-pack, mask expansion, and extras merge when no other span property is set.
              val onlyColorMayChange =
                  brush == null &&
                      fontSize.isUnspecified &&
                      fontWeight == null &&
                      fontStyle == null &&
                      fontSynthesis == null &&
                      fontFamily == null &&
                      fontFeatureSettings == null &&
                      letterSpacing.isUnspecified &&
                      baselineShift == null &&
                      textGeometricTransform == null &&
                      localeList == null &&
                      background.isUnspecified &&
                      textDecoration == null &&
                      shadow == null &&
                      platformStyle == null &&
                      drawStyle == null
              if (onlyColorMayChange) {
                  val otherColorXor = packSpanColorXor(color)
                  if (otherColorXor == 0L || otherColorXor == colorXor || extras?.brush != null) {
                      return this
                  }
                  return SpanStyle(
                      otherColorXor,
                      bits,
                      extras,
                      this.fontSize,
                      this.letterSpacing,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1321-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1321
    endLine: 1355
    sha256: 7dc2aa55f50273c54e5560ac75827075c817fc686fa933fcac158511fc9f4e32
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      this.fontWeight,
                      this.fontFamily,
                  )
              }
              val otherColorXor =
                  when (brush) {
                      null -> packSpanColorXor(color)
                      is SolidColor -> packSpanColorXor(brush.value.modulate(alpha))
                      else -> 0L
                  }
              val shaderBrush = if (brush is SolidColor) null else brush
              val otherBits =
                  packSpanStyleBits(
                      fontStyle,
                      fontSynthesis,
                      fontFeatureSettings,
                      textGeometricTransform,
                      background,
                      textDecoration,
                      shadow,
                      platformStyle,
                      drawStyle,
                      baselineShift,
                  )
              val thisBits = this.bits
              val extras =
                  if (
                      (thisBits or otherBits) and (SPAN_HAS_EXTRAS or ONE_BIT_FIELDS) == 0 &&
                          shaderBrush == null &&
                          localeList == null
                  ) {
                      null
                  } else {
                      mergeSpanStyleExtras(
                          this.extras,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1356-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1356
    endLine: 1390
    sha256: 6e33b8cfec3a1ffaafbede18e4d751bd53b04684876588aecd12cd9ad9745cd1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          shaderBrush,
                          alpha,
                          fontFeatureSettings,
                          baselineShift,
                          textGeometricTransform,
                          localeList,
                          background,
                          shadow,
                          drawStyle,
                          platformStyle,
                          thisBits,
                      )
                  }
              val colorXor =
                  if (extras?.brush != null) 0L else mergeSpanColorXor(this.colorXor, otherColorXor)
              val bits = mergeSpanBits(thisBits, otherBits)
              val mergedFontSize = if (fontSize.isSpecified) fontSize else this.fontSize
              val mergedLetterSpacing =
                  if (letterSpacing.isSpecified) letterSpacing else this.letterSpacing
              val mergedFontWeight = fontWeight ?: this.fontWeight
              val mergedFontFamily = fontFamily ?: this.fontFamily
              if (
                  sameAs(
                      colorXor,
                      bits,
                      extras,
                      mergedFontSize,
                      mergedLetterSpacing,
                      mergedFontWeight,
                      mergedFontFamily,
                  )
              ) {
                  // we're done
                  return this
              }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1391-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1391
    endLine: 1425
    sha256: 15553d6080aee4fecad56a4c0b8f8d0b0526172275bb8783945b56e4e9b5f1a6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return SpanStyle(
                  colorXor,
                  bits,
                  extras,
                  mergedFontSize,
                  mergedLetterSpacing,
                  mergedFontWeight,
                  mergedFontFamily,
              )
          }

          private fun fastMergeLegacy(
              color: Color,
              brush: Brush?,
              alpha: Float,
              fontSize: TextUnit,
              fontWeight: FontWeight?,
              fontStyle: FontStyle?,
              fontSynthesis: FontSynthesis?,
              fontFamily: FontFamily?,
              fontFeatureSettings: String?,
              letterSpacing: TextUnit,
              baselineShift: BaselineShift?,
              textGeometricTransform: TextGeometricTransform?,
              localeList: LocaleList?,
              background: Color,
              textDecoration: TextDecoration?,
              shadow: Shadow?,
              platformStyle: PlatformSpanStyle?,
              drawStyle: DrawStyle?,
          ): SpanStyle {
              val legacy = legacySpanStyle!!
              val merged =
                  legacy.fastMerge(
                      color = color,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 141
    endLine: 175
    sha256: 75e8ff234158c3417c9e2135f3880e2db3cd834731358d9956c1e631cb343bea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fontFeatureSettings: String?,
              baselineShift: BaselineShift?,
              textGeometricTransform: TextGeometricTransform?,
              localeList: LocaleList?,
              background: Color,
              shadow: Shadow?,
              drawStyle: DrawStyle?,
              platformStyle: PlatformSpanStyle? = null,
          ): Boolean =
              this.brush === brush &&
                  this.alpha.compareTo(alpha) == 0 &&
                  this.fontFeatureSettings === fontFeatureSettings &&
                  this.baselineShift == baselineShift &&
                  this.textGeometricTransform === textGeometricTransform &&
                  this.localeList === localeList &&
                  this.background.value == background.value &&
                  this.shadow === shadow &&
                  this.drawStyle === drawStyle &&
                  this.platformStyle === platformStyle

          /**
           * Checks if the layout-affecting attributes ([fontFeatureSettings], [baselineShift],
           * [textGeometricTransform], [localeList], [background], and [platformStyle]) match between this
           * instance and [other].
           *
           * If [other] is null, checks that all layout-affecting attributes in this instance are unset.
           */
          fun hasSameLayoutAttributes(other: SpanStyleExtras?): Boolean =
              if (other == null) {
                  fontFeatureSettings == null &&
                      baselineShift == null &&
                      textGeometricTransform == null &&
                      localeList == null &&
                      background.isUnspecified &&
                      platformStyle == null
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1426-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1426
    endLine: 1460
    sha256: 946caad28f2fced4cd936c717e33fb2ce115550d7c2951eaeecb90c0d858d9d6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      brush = brush,
                      alpha = alpha,
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      fontStyle = fontStyle,
                      fontSynthesis = fontSynthesis,
                      fontFamily = fontFamily,
                      fontFeatureSettings = fontFeatureSettings,
                      letterSpacing = letterSpacing,
                      baselineShift = baselineShift,
                      textGeometricTransform = textGeometricTransform,
                      localeList = localeList,
                      background = background,
                      textDecoration = textDecoration,
                      shadow = shadow,
                      platformStyle = platformStyle,
                      drawStyle = drawStyle,
                  )
              return if (merged === legacy) this else SpanStyle(merged)
          }

          /**
           * Returns a [SpanStyle] with all unset (`null` or `Unspecified`) fields set to their layout and
           * draw defaults (see [resolveSpanStyleDefaults]). Returns `this` if all fields are set.
           */
          internal fun withResolvedDefaults(): SpanStyle {
              if (legacySpanStyle != null) {
                  return SpanStyle(resolveLegacySpanStyleDefaults(legacySpanStyle))
              }
              var extras = extras
              val shift = extras?.baselineShift
              if (shift != null && shift.multiplier.isNaN()) {
                  // BaselineShift.Unspecified resolves to None, which the bits hold on their own.
                  extras =
                      createSpanStyleExtras(
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1461-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1461
    endLine: 1495
    sha256: 58b8c4c49d25ad75369c560fe4ec3f187087a9000f30539955c035dbe69d00a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          extras.brush,
                          extras.alpha,
                          extras.fontFeatureSettings,
                          /* baselineShift = */ null,
                          extras.textGeometricTransform,
                          extras.localeList,
                          extras.background,
                          extras.shadow,
                          extras.drawStyle,
                          extras.platformStyle,
                      )
              }
              val colorXor = if (colorXor != 0L || extras?.brush != null) colorXor else DEFAULT_COLOR_XOR
              val bits = resolveSpanBits(bits)
              val fontSize = if (fontSize.isUnspecified) DefaultFontSize else fontSize
              val letterSpacing = if (letterSpacing.isUnspecified) DefaultLetterSpacing else letterSpacing
              val fontWeight = fontWeight ?: FontWeight.Normal
              val fontFamily = fontFamily ?: FontFamily.Default
              if (sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
                  return this
              }
              return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
          }

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: SpanStyle): SpanStyle = this.merge(other)

          @Deprecated(
              "SpanStyle copy constructors that do not take new stable parameters " +
                  "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.color,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1496-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1496
    endLine: 1530
    sha256: 9c1bcc21deab7d49529953006b37a6df24c4a487d8e2ee4878c815a07ced0982
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fontSize: TextUnit = this.fontSize,
              fontWeight: FontWeight? = this.fontWeight,
              fontStyle: FontStyle? = this.fontStyle,
              fontSynthesis: FontSynthesis? = this.fontSynthesis,
              fontFamily: FontFamily? = this.fontFamily,
              fontFeatureSettings: String? = this.fontFeatureSettings,
              letterSpacing: TextUnit = this.letterSpacing,
              baselineShift: BaselineShift? = this.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
              localeList: LocaleList? = this.localeList,
              background: Color = this.background,
              textDecoration: TextDecoration? = this.textDecoration,
              shadow: Shadow? = this.shadow,
          ): SpanStyle {
              return copy(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = this.platformStyle,
                  drawStyle = this.drawStyle,
              )
          }

          @Deprecated(
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1531-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1531
    endLine: 1565
    sha256: 0ac23bd460113465fe21ca4cb539eee970e31518d1227e6db87f4dd86cc2b61c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              "SpanStyle copy constructors that do not take new stable parameters " +
                  "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.color,
              fontSize: TextUnit = this.fontSize,
              fontWeight: FontWeight? = this.fontWeight,
              fontStyle: FontStyle? = this.fontStyle,
              fontSynthesis: FontSynthesis? = this.fontSynthesis,
              fontFamily: FontFamily? = this.fontFamily,
              fontFeatureSettings: String? = this.fontFeatureSettings,
              letterSpacing: TextUnit = this.letterSpacing,
              baselineShift: BaselineShift? = this.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
              localeList: LocaleList? = this.localeList,
              background: Color = this.background,
              textDecoration: TextDecoration? = this.textDecoration,
              shadow: Shadow? = this.shadow,
              platformStyle: PlatformSpanStyle? = this.platformStyle,
          ): SpanStyle {
              return copy(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1566-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1566
    endLine: 1600
    sha256: 4bb8e5363dd81c1753f28cb27525652caa80676d63390b9704866136693638f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = platformStyle,
                  drawStyle = this.drawStyle,
              )
          }

          public fun copy(
              color: Color = this.color,
              fontSize: TextUnit = this.fontSize,
              fontWeight: FontWeight? = this.fontWeight,
              fontStyle: FontStyle? = this.fontStyle,
              fontSynthesis: FontSynthesis? = this.fontSynthesis,
              fontFamily: FontFamily? = this.fontFamily,
              fontFeatureSettings: String? = this.fontFeatureSettings,
              letterSpacing: TextUnit = this.letterSpacing,
              baselineShift: BaselineShift? = this.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
              localeList: LocaleList? = this.localeList,
              background: Color = this.background,
              textDecoration: TextDecoration? = this.textDecoration,
              shadow: Shadow? = this.shadow,
              platformStyle: PlatformSpanStyle? = this.platformStyle,
              drawStyle: DrawStyle? = this.drawStyle,
          ): SpanStyle {
              if (legacySpanStyle != null) {
                  return SpanStyle(
                      legacySpanStyle.copy(
                          color = color,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1601-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1601
    endLine: 1635
    sha256: 59017f42320d76688dab08333b31563fcc88a7c2ffc5d66c709d634f4b727700
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          letterSpacing = letterSpacing,
                          baselineShift = baselineShift,
                          textGeometricTransform = textGeometricTransform,
                          localeList = localeList,
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle,
                          drawStyle = drawStyle,
                      )
                  )
              }
              val extras = extras
              val keepBrush = extras?.brush != null && color == this.color
              return createSpanStyle(
                  color = color,
                  brush = if (keepBrush) extras.brush else null,
                  alpha = if (keepBrush) extras.alpha else Float.NaN,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = platformStyle,
                  drawStyle = drawStyle,
              )
          }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1636-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1636
    endLine: 1670
    sha256: 417ffec632b2d26bc4ec6f1b146fcea5a806915df6c962b4dc0be7c00832118e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          public fun copy(
              brush: Brush?,
              alpha: Float = this.alpha,
              fontSize: TextUnit = this.fontSize,
              fontWeight: FontWeight? = this.fontWeight,
              fontStyle: FontStyle? = this.fontStyle,
              fontSynthesis: FontSynthesis? = this.fontSynthesis,
              fontFamily: FontFamily? = this.fontFamily,
              fontFeatureSettings: String? = this.fontFeatureSettings,
              letterSpacing: TextUnit = this.letterSpacing,
              baselineShift: BaselineShift? = this.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
              localeList: LocaleList? = this.localeList,
              background: Color = this.background,
              textDecoration: TextDecoration? = this.textDecoration,
              shadow: Shadow? = this.shadow,
              platformStyle: PlatformSpanStyle? = this.platformStyle,
              drawStyle: DrawStyle? = this.drawStyle,
          ): SpanStyle {
              if (legacySpanStyle != null) {
                  return SpanStyle(
                      legacySpanStyle.copy(
                          brush = brush,
                          alpha = alpha,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
                          letterSpacing = letterSpacing,
                          baselineShift = baselineShift,
                          textGeometricTransform = textGeometricTransform,
                          localeList = localeList,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1671-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1671
    endLine: 1705
    sha256: 061f338282f46dae21fda8f8f778bf53080ad51d54676b07c9f07bd5f42e6f3e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle,
                          drawStyle = drawStyle,
                      )
                  )
              }
              return createSpanStyle(
                  color = Color.Unspecified,
                  brush = brush,
                  alpha = alpha,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = platformStyle,
                  drawStyle = drawStyle,
              )
          }

          public override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SpanStyle) return false
              return hasSameLayoutAffectingAttributes(other) && hasSameNonLayoutAttributes(other)
          }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1706-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1706
    endLine: 1740
    sha256: aa9ec19f644d2dca6786adca77eb3f8a69c375bc456c75702f66a507340df5fe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          internal fun hasSameLayoutAffectingAttributes(other: SpanStyle): Boolean {
              if (this === other) return true
              if (legacySpanStyle != null) {
                  return legacySpanStyle.hasSameLayoutAffectingAttributes(other.legacySpanStyle!!)
              }
              if ((bits xor other.bits) and LAYOUT_BITS != 0) return false
              if (fontSize != other.fontSize || letterSpacing != other.letterSpacing) return false
              if (fontWeight != other.fontWeight || fontFamily != other.fontFamily) return false
              val thisExtras = extras
              val otherExtras = other.extras
              if (thisExtras === otherExtras) return true
              return thisExtras?.hasSameLayoutAttributes(otherExtras)
                  ?: otherExtras!!.hasSameLayoutAttributes(/* other= */ null)
          }

          internal fun hasSameNonLayoutAttributes(other: SpanStyle): Boolean {
              if (legacySpanStyle != null) {
                  return legacySpanStyle.hasSameNonLayoutAttributes(other.legacySpanStyle!!)
              }
              if (colorXor != other.colorXor) return false
              if ((bits xor other.bits) and NON_LAYOUT_BITS != 0) return false
              val thisExtras = extras
              val otherExtras = other.extras
              if (thisExtras === otherExtras) return true
              return thisExtras?.hasSameNonLayoutAttributes(otherExtras)
                  ?: otherExtras!!.hasSameNonLayoutAttributes(/* other= */ null)
          }

          public override fun hashCode(): Int {
              if (legacySpanStyle != null) return legacySpanStyle.hashCode()
              var result = mixLongHash(colorXor)
              result = 31 * result + (bits and NON_LAYOUT_BITS)
              result = 31 * result + hashCodeLayoutAffectingAttributes()
              result = 31 * result + (extras?.hashCodeNonLayoutAttributes() ?: 0)
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1741-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1741
    endLine: 1775
    sha256: 6533a85e93698b4ab4c1696d9f3c44ffcf30537010e18fa910bcdd1ba33df269
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return murmurFinalize32(result)
          }

          internal fun hashCodeLayoutAffectingAttributes(): Int {
              if (legacySpanStyle != null) return legacySpanStyle.hashCodeLayoutAffectingAttributes()
              var result = bits and LAYOUT_BITS
              result = 31 * result + mixLongHash(fontSize)
              result = 31 * result + mixLongHash(letterSpacing)
              result = 31 * result + (fontWeight?.hashCode() ?: 0)
              result = 31 * result + (fontFamily?.hashCode() ?: 0)
              result = 31 * result + (extras?.hashCodeLayoutAffectingAttributes() ?: 0)
              return murmurFinalize32(result)
          }

          /**
           * Helper used by [merge], [fastMerge], and [withResolvedDefaults] to check if the new parts
           * match `this` (or `other`) before making a new [SpanStyle] object.
           *
           * Unlike [equals] (which checks two [SpanStyle] objects with `==`), [sameAs]:
           * 1. Takes raw parts so callers can reuse an old [SpanStyle] object without making a new one
           *    first.
           * 2. Clears bit 0 ([SPAN_HAS_EXTRAS]) on `this.bits`. [mergeSpanBits], [packSpanStyleBits], and
           *    [resolveSpanBits] return raw field bits with bit 0 cleared, while [SpanStyle] sets
           *    [SPAN_HAS_EXTRAS] when `extras != null`.
           * 3. Uses `===` on [extras], [fontWeight], and [fontFamily] since callers reuse old objects
           *    when their fields do not change.
           */
          private fun sameAs(
              colorXor: Long,
              bits: Int,
              extras: SpanStyleExtras?,
              fontSize: TextUnit,
              letterSpacing: TextUnit,
              fontWeight: FontWeight?,
              fontFamily: FontFamily?,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 176
    endLine: 210
    sha256: e85a13a108cd3b56eb85206992e1a663715edb34d7ecbcba71c031d3f8439e8d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  fontFeatureSettings == other.fontFeatureSettings &&
                      baselineShift == other.baselineShift &&
                      textGeometricTransform == other.textGeometricTransform &&
                      localeList == other.localeList &&
                      background == other.background &&
                      platformStyle == other.platformStyle
              }

          /**
           * Checks if the non-layout (draw-only) attributes ([brush], [alpha], [shadow], and [drawStyle])
           * match between this instance and [other].
           *
           * If [other] is null, checks that all non-layout attributes in this instance are unset.
           */
          fun hasSameNonLayoutAttributes(other: SpanStyleExtras?): Boolean =
              if (other == null) {
                  brush == null && shadow == null && drawStyle == null
              } else {
                  brush == other.brush &&
                      alpha.compareTo(other.alpha) == 0 &&
                      shadow == other.shadow &&
                      drawStyle == other.drawStyle
              }

          /**
           * Computes the combined hash code for all layout-affecting attributes in this extras container.
           */
          fun hashCodeLayoutAffectingAttributes(): Int {
              var result = fontFeatureSettings?.hashCode() ?: 0
              result = 31 * result + (baselineShift?.hashCode() ?: 0)
              result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
              result = 31 * result + (localeList?.hashCode() ?: 0)
              result = 31 * result + mixLongHash(packSpanColorXor(background))
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1776-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1776
    endLine: 1810
    sha256: 1b242205d149bd895e444d306d52236c7e3de25298cb0968b447f5fd25caeee1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): Boolean =
              this.bits and SPAN_HAS_EXTRAS.inv() == bits &&
                  this.colorXor == colorXor &&
                  this.extras === extras &&
                  this.fontSize == fontSize &&
                  this.letterSpacing == letterSpacing &&
                  this.fontWeight === fontWeight &&
                  this.fontFamily === fontFamily

          public override fun toString(): String {
              if (legacySpanStyle != null) return legacySpanStyle.toString()
              return "SpanStyle(" +
                  "color=$color, " +
                  "brush=$brush, " +
                  "alpha=$alpha, " +
                  "fontSize=$fontSize, " +
                  "fontWeight=$fontWeight, " +
                  "fontStyle=$fontStyle, " +
                  "fontSynthesis=$fontSynthesis, " +
                  "fontFamily=$fontFamily, " +
                  "fontFeatureSettings=$fontFeatureSettings, " +
                  "letterSpacing=$letterSpacing, " +
                  "baselineShift=$baselineShift, " +
                  "textGeometricTransform=$textGeometricTransform, " +
                  "localeList=$localeList, " +
                  "background=$background, " +
                  "textDecoration=$textDecoration, " +
                  "shadow=$shadow, " +
                  "platformStyle=$platformStyle, " +
                  "drawStyle=$drawStyle" +
                  ")"
          }
      }

      // SpanStyle.bits layout, low bit first. A zero field means "unset". Multi-bit fields in bits 3..8
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1811-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1811
    endLine: 1845
    sha256: f2aa920e10d5d647be12800591cfa2e6349e065ddef1757068f69a13fb9ef1c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      // and 15..16 store an odd code, so their low bit doubles as "set", and merge builds their field
      // mask with a single multiply.
      //   0      has extras (matches `extras != null`)
      //   1      baselineShift set; BaselineShift.None unless extras has one
      //   3..5   fontSynthesis    (value shl 1) or 1, for None, Weight, Style, All
      //   6..8   textDecoration   (mask shl 1) or 1, for None, Underline, LineThrough, both
      //   9      platformStyle set; PlatformSpanStyle.Default unless extras has one
      //   10     fontFeatureSettings set; "" unless extras has the string
      //   11     textGeometricTransform set; None unless extras has one
      //   12     background set; Transparent unless extras has a color
      //   13     shadow set; Shadow.None unless extras has one
      //   14     drawStyle set; Fill unless extras has one
      //   15..16 fontStyle        (value shl 1) or 1, for Normal (0 -> 1) and Italic (1 -> 3)
      private const val SPAN_HAS_EXTRAS = 1
      private const val TWO_BIT_FIELD_MASK = 0x3
      private const val THREE_BIT_FIELD_MASK = 0x7
      private const val HAS_BASELINE_SHIFT = 1 shl 1
      private const val FONT_SYNTHESIS_SHIFT = 3
      private const val FONT_SYNTHESIS_MASK = THREE_BIT_FIELD_MASK shl FONT_SYNTHESIS_SHIFT
      private const val FONT_SYNTHESIS_VALUE_BITS = 2
      private const val FONT_SYNTHESIS_MAX_RAW = (1 shl FONT_SYNTHESIS_VALUE_BITS) - 1
      private const val TEXT_DECORATION_SHIFT = 6
      private const val TEXT_DECORATION_MASK = THREE_BIT_FIELD_MASK shl TEXT_DECORATION_SHIFT
      private const val TEXT_DECORATION_VALUE_BITS = 2
      private const val TEXT_DECORATION_MAX_RAW = (1 shl TEXT_DECORATION_VALUE_BITS) - 1
      private const val HAS_PLATFORM_STYLE = 1 shl 9
      private const val HAS_FONT_FEATURES = 1 shl 10
      private const val HAS_GEOMETRIC_TRANSFORM = 1 shl 11
      private const val HAS_BACKGROUND = 1 shl 12
      private const val HAS_SHADOW = 1 shl 13
      private const val HAS_DRAW_STYLE = 1 shl 14
      private const val FONT_STYLE_SHIFT = 15
      private const val FONT_STYLE_MASK = TWO_BIT_FIELD_MASK shl FONT_STYLE_SHIFT
      private const val FONT_STYLE_VALUE_BITS = 1
      private const val FONT_STYLE_MAX_RAW = (1 shl FONT_STYLE_VALUE_BITS) - 1
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1846-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1846
    endLine: 1880
    sha256: ddf56797b0e9877dd16f72684009da1218f813a5240c4c746fd0820ae2dca4bd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private const val HAS_FONT_STYLE = 1 shl FONT_STYLE_SHIFT
      private const val FONT_STYLE_IS_ITALIC = 1 shl (FONT_STYLE_SHIFT + 1)

      // Bits cleared by SpanStyleSaver because drawStyle and platformStyle are not persisted by Saver,
      // and SPAN_HAS_EXTRAS is recomputed from extras != null on restore.
      internal const val UNSAVED_SPAN_BITS = HAS_DRAW_STYLE or HAS_PLATFORM_STYLE or SPAN_HAS_EXTRAS

      private const val TWO_BIT_LOW_BITS = 1 shl FONT_STYLE_SHIFT
      private const val THREE_BIT_LOW_BITS = (1 shl FONT_SYNTHESIS_SHIFT) or (1 shl TEXT_DECORATION_SHIFT)
      private const val ONE_BIT_FIELDS =
          HAS_BASELINE_SHIFT or
              HAS_PLATFORM_STYLE or
              HAS_FONT_FEATURES or
              HAS_GEOMETRIC_TRANSFORM or
              HAS_BACKGROUND or
              HAS_SHADOW or
              HAS_DRAW_STYLE
      private const val NON_LAYOUT_BITS = TEXT_DECORATION_MASK or HAS_SHADOW or HAS_DRAW_STYLE
      private const val LAYOUT_BITS = (NON_LAYOUT_BITS or SPAN_HAS_EXTRAS).inv()
      private const val METRIC_BITS =
          FONT_STYLE_MASK or FONT_SYNTHESIS_MASK or HAS_FONT_FEATURES or HAS_GEOMETRIC_TRANSFORM

      private const val UNSPECIFIED_COLOR_BITS = 0x10L
      // Color.Black is 0xFF000000 in the top 32 bits.
      private const val DEFAULT_COLOR_XOR = (0xFF00_0000L shl 32) xor UNSPECIFIED_COLOR_BITS

      // Fails with `Division by zero` if FontStyle.MAX_FONT_STYLE_VALUE exceeds FONT_STYLE_MAX_RAW (1).
      // Widen FONT_STYLE_VALUE_BITS and FONT_STYLE_MASK if a new FontStyle value is added.
      @Suppress("unused")
      private const val CHECK_FONT_STYLE_CAPACITY =
          1 / (1 - ((FONT_STYLE_MAX_RAW - FontStyle.MAX_FONT_STYLE_VALUE) ushr 31))

      // Fails with `Division by zero` if FontSynthesis.MAX_FONT_SYNTHESIS_MASK exceeds
      // FONT_SYNTHESIS_MAX_RAW (3).
      // Widen FONT_SYNTHESIS_VALUE_BITS and FONT_SYNTHESIS_MASK if a new FontSynthesis flag is added.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1881-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1881
    endLine: 1915
    sha256: b1465a73eb42aa92b7d24b0cdb59cf3abe1b90ba599bad2a6ffeb978ee9e265e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Suppress("unused")
      private const val CHECK_FONT_SYNTHESIS_CAPACITY =
          1 / (1 - ((FONT_SYNTHESIS_MAX_RAW - FontSynthesis.MAX_FONT_SYNTHESIS_MASK) ushr 31))

      // Fails with `Division by zero` if TextDecoration.MAX_TEXT_DECORATION_MASK exceeds
      // TEXT_DECORATION_MAX_RAW (3).
      // Widen TEXT_DECORATION_VALUE_BITS and TEXT_DECORATION_MASK if a new TextDecoration flag is added.
      @Suppress("unused")
      private const val CHECK_TEXT_DECORATION_CAPACITY =
          1 / (1 - ((TEXT_DECORATION_MAX_RAW - TextDecoration.MAX_TEXT_DECORATION_MASK) ushr 31))

      /**
       * Maps [color] into `SpanStyle.colorXor` form (`color.value.toLong() xor UNSPECIFIED_COLOR_BITS`).
       * `0L` means [Color.Unspecified] (unset), and any other `Long` is a set [Color] (such as
       * `Color.Transparent`, whose `0UL` bits map to `UNSPECIFIED_COLOR_BITS = 0x10L`).
       */
      @Suppress("NOTHING_TO_INLINE")
      internal inline fun packSpanColorXor(color: Color): Long =
          color.value.toLong() xor UNSPECIFIED_COLOR_BITS

      /** Mixes a [TextUnit]'s type and raw float bits with [GOLDEN_RATIO_64] and folds to 32 bits. */
      @Suppress("NOTHING_TO_INLINE")
      internal inline fun mixLongHash(unit: TextUnit): Int {
          val type = if (unit.isSp) 1 else if (unit.isEm) 2 else 0
          return mixLongHash(packInts(type, unit.value.toRawBits()))
      }

      /**
       * Returns [other] when [other] is a set color (`other != 0L`). Returns [base] when [other] is unset
       * (`other == 0L`).
       */
      @Suppress("NOTHING_TO_INLINE")
      private inline fun mergeSpanColorXor(base: Long, other: Long): Long {
          // `(other or -other)` has sign bit 63 set iff `other != 0L`, so arithmetic `shr 63` produces
          // `-1L` (`0xFFFF_FFFF_FFFF_FFFFL`) when `other != 0L` and `0L` when `other == 0L`.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1916-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1916
    endLine: 1950
    sha256: 9ed74124bd09dfefb86daeeb1c7ece48680cd4ada66eab4436e32c301d503ba5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val mask = (other or -other) shr 63
          return (base and mask.inv()) or (other and mask)
      }

      /**
       * Merges [other] onto [base] across all packed [SpanStyle] fields in one SWAR pass:
       * - 2-bit odd-code field ([SpanStyle.fontStyle]): grabs low bit via [TWO_BIT_LOW_BITS] and scales
       *   by [TWO_BIT_FIELD_MASK] (`0x3` = `0b11`).
       * - 3-bit odd-code fields ([SpanStyle.fontSynthesis], [SpanStyle.textDecoration]): grabs low bits
       *   via [THREE_BIT_LOW_BITS] and scales by [THREE_BIT_FIELD_MASK] (`0x7` = `0b111`).
       * - 1-bit set flags ([ONE_BIT_FIELDS]): used as their own mask.
       */
      @Suppress("NOTHING_TO_INLINE")
      private inline fun mergeSpanBits(base: Int, other: Int): Int {
          val mask =
              ((other and TWO_BIT_LOW_BITS) * TWO_BIT_FIELD_MASK) or
                  ((other and THREE_BIT_LOW_BITS) * THREE_BIT_FIELD_MASK) or
                  (other and ONE_BIT_FIELDS)
          return ((base and mask.inv()) or (other and mask)) and SPAN_HAS_EXTRAS.inv()
      }

      /**
       * Resolves all unset fields in [bits] to their [resolveSpanStyleDefaults] defaults:
       * - All 1-bit preset flags except [HAS_PLATFORM_STYLE] become set (resolving unset fields to `""`,
       *   [BaselineShift.None], [TextGeometricTransform.None], [Color.Transparent], [Shadow.None], and
       *   [Fill]).
       * - [HAS_FONT_STYLE] is set, resolving an unset `0` (`0b00`) in bits `15..16` to [FontStyle.Normal]
       *   (`0b01`) while preserving [FontStyle.Italic] (`0b11`).
       * - Unset [SpanStyle.fontSynthesis] resolves to [FontSynthesis.All] (`0b111` at
       *   [FONT_SYNTHESIS_SHIFT]).
       * - Unset [SpanStyle.textDecoration] resolves to [TextDecoration.None] (`0b001` at
       *   [TEXT_DECORATION_SHIFT]).
       */
      internal fun resolveSpanBits(bits: Int): Int {
          // platformStyle has no default, so it stays as it is. Unset fontStyle has bits 15..16 == 0,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1951-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1951
    endLine: 1985
    sha256: 877141174ab0c38786f7ab56ec8b8b63200eaedfabdebb06bcb13d1e7e6f9dee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // so setting HAS_FONT_STYLE resolves it to FontStyle.Normal (0b01) while preserving Italic
          // (0b11).
          var resolved =
              (bits and SPAN_HAS_EXTRAS.inv()) or
                  (ONE_BIT_FIELDS and HAS_PLATFORM_STYLE.inv()) or
                  HAS_FONT_STYLE
          if (bits and FONT_SYNTHESIS_MASK == 0) resolved = resolved or FONT_SYNTHESIS_MASK
          if (bits and TEXT_DECORATION_MASK == 0) resolved = resolved or (1 shl TEXT_DECORATION_SHIFT)
          return resolved
      }

      /**
       * Packs [SpanStyle] properties into the 32-bit `SpanStyle.bits` word (leaving bit 0 /
       * [SPAN_HAS_EXTRAS] as `0`).
       */
      internal fun packSpanStyleBits(
          fontStyle: FontStyle?,
          fontSynthesis: FontSynthesis?,
          fontFeatureSettings: String?,
          textGeometricTransform: TextGeometricTransform?,
          background: Color,
          textDecoration: TextDecoration?,
          shadow: Shadow?,
          platformStyle: PlatformSpanStyle?,
          drawStyle: DrawStyle?,
          baselineShift: BaselineShift?,
      ): Int {
          var bits = 0
          // FontStyle.value is in 0..MAX_FONT_STYLE_VALUE (0 = Normal, 1 = Italic); validated by
          // FontStyle's constructor and locked at compile time by CHECK_FONT_STYLE_CAPACITY.
          if (fontStyle != null) {
              bits = (((fontStyle.value and FONT_STYLE_MAX_RAW) shl 1) or 1) shl FONT_STYLE_SHIFT
          }
          // FontSynthesis.value is in 0..MAX_FONT_SYNTHESIS_MASK (0b00..0b11); capacity is locked by
          // CHECK_FONT_SYNTHESIS_CAPACITY and tested by StyleDomainLockTest.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1986-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1986
    endLine: 2020
    sha256: d0a382f1be2c12b6c56c0ed31bfa285f1dd6dc2d0d0be9610ae3ba461e268ceb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          if (fontSynthesis != null) {
              bits =
                  bits or
                      ((((fontSynthesis.value and FONT_SYNTHESIS_MAX_RAW) shl 1) or 1) shl
                          FONT_SYNTHESIS_SHIFT)
          }
          // TextDecoration.mask is in 0..MAX_TEXT_DECORATION_MASK (0b00..0b11); capacity is locked by
          // CHECK_TEXT_DECORATION_CAPACITY and tested by StyleDomainLockTest.
          if (textDecoration != null) {
              bits =
                  bits or
                      ((((textDecoration.mask and TEXT_DECORATION_MAX_RAW) shl 1) or 1) shl
                          TEXT_DECORATION_SHIFT)
          }
          if (platformStyle != null) bits = bits or HAS_PLATFORM_STYLE
          if (fontFeatureSettings != null) bits = bits or HAS_FONT_FEATURES
          if (textGeometricTransform != null) bits = bits or HAS_GEOMETRIC_TRANSFORM
          if (background.isSpecified) bits = bits or HAS_BACKGROUND
          if (shadow != null) bits = bits or HAS_SHADOW
          if (drawStyle != null) bits = bits or HAS_DRAW_STYLE
          if (baselineShift != null) bits = bits or HAS_BASELINE_SHIFT
          return bits
      }

      /**
       * Strips preset values from rare [SpanStyle] fields that live in `SpanStyle.bits` (`""`,
       * [BaselineShift.None] with `+0.0f` bits, [TextGeometricTransform.None], [Color.Transparent],
       * [Shadow.None], [Fill], [PlatformSpanStyle.Default]). Makes a [SpanStyleExtras] object only if a
       * custom field or [brush]/[localeList] remains.
       */
      internal fun createSpanStyleExtras(
          brush: Brush?,
          alpha: Float,
          fontFeatureSettings: String?,
          baselineShift: BaselineShift?,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2021-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2021
    endLine: 2055
    sha256: a9e0fe188979a14d677f28bf55434409a3331e09385bddac455d24c1c6705c27
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          textGeometricTransform: TextGeometricTransform?,
          localeList: LocaleList?,
          background: Color,
          shadow: Shadow?,
          drawStyle: DrawStyle?,
          platformStyle: PlatformSpanStyle? = null,
      ): SpanStyleExtras? {
          val normalizedFontFeatures =
              if (fontFeatureSettings == null || fontFeatureSettings.isEmpty()) null
              else fontFeatureSettings
          val normalizedBaselineShift =
              if (baselineShift == null || baselineShift.multiplier.toRawBits() == 0) null
              else baselineShift
          val normalizedTransform =
              if (
                  textGeometricTransform == null || textGeometricTransform == TextGeometricTransform.None
              ) {
                  null
              } else {
                  textGeometricTransform
              }
          val normalizedBackground =
              if (background == Color.Transparent) Color.Unspecified else background
          val normalizedShadow = if (shadow == null || shadow == Shadow.None) null else shadow
          val normalizedDrawStyle = if (drawStyle == null || drawStyle === Fill) null else drawStyle
          val normalizedPlatform =
              if (platformStyle == null || platformStyle == PlatformSpanStyle.Default) null
              else platformStyle
          if (
              brush == null &&
                  normalizedFontFeatures == null &&
                  normalizedBaselineShift == null &&
                  normalizedTransform == null &&
                  localeList == null &&
                  normalizedBackground.isUnspecified &&
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2056-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2056
    endLine: 2090
    sha256: 926f66415a3c4bf2ebeeeaa307835e9e40c77071f320d95cc5e23eb66e23786e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  normalizedShadow == null &&
                  normalizedDrawStyle == null &&
                  normalizedPlatform == null
          ) {
              return null
          }
          return SpanStyleExtras(
              brush,
              if (brush == null) Float.NaN else alpha,
              normalizedFontFeatures,
              normalizedBaselineShift,
              normalizedTransform,
              localeList,
              normalizedBackground,
              normalizedShadow,
              normalizedDrawStyle,
              normalizedPlatform,
          )
      }

      /**
       * Merges `this` and `other` [PlatformSpanStyle]s and normalizes [PlatformSpanStyle.Default] to
       * `null` for [SpanStyleExtras.platformStyle].
       */
      private fun mergeNormalizedPlatformStyle(
          thisBits: Int,
          thisPlatformStyle: PlatformSpanStyle?,
          otherBits: Int,
          otherPlatformStyle: PlatformSpanStyle?,
      ): PlatformSpanStyle? {
          if (thisPlatformStyle == null && otherPlatformStyle == null) return null
          val base =
              thisPlatformStyle
                  ?: if (thisBits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
          val other =
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2091-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2091
    endLine: 2125
    sha256: b78157c1bbd43af553f915dfbac4af1291bd70b735f407096d81813aea65355c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              otherPlatformStyle
                  ?: if (otherBits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
          val merged = if (base == null) other else if (other == null) base else base.merge(other)
          return if (merged == null || merged == PlatformSpanStyle.Default) null else merged
      }

      /**
       * Merges rare [SpanStyle] fields onto [thisExtras]. Maps preset values to `null` or
       * [Color.Unspecified] and reuses [thisExtras] when all fields match.
       */
      internal fun mergeSpanStyleExtras(
          thisExtras: SpanStyleExtras?,
          otherBrush: Brush?,
          otherAlpha: Float,
          fontFeatureSettings: String?,
          baselineShift: BaselineShift?,
          textGeometricTransform: TextGeometricTransform?,
          localeList: LocaleList?,
          background: Color,
          shadow: Shadow?,
          drawStyle: DrawStyle?,
          platformStyle: PlatformSpanStyle? = null,
          thisBits: Int = 0,
      ): SpanStyleExtras? {
          val thisBrush = thisExtras?.brush
          val brush = otherBrush ?: thisBrush
          val alpha =
              when {
                  otherBrush != null && !otherAlpha.isNaN() -> otherAlpha
                  thisBrush != null -> thisExtras.alpha
                  else -> Float.NaN
              }
          val mergedFontFeatures =
              if (fontFeatureSettings == null) thisExtras?.fontFeatureSettings
              else if (fontFeatureSettings.isEmpty()) null else fontFeatureSettings
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 211
    endLine: 245
    sha256: 0502241a65774b6c0d5dacec3263d980607e5ff0e1093246e1f1b1f5a1eb793c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return result
          }

          /**
           * Computes the combined hash code for all non-layout (draw-only) attributes in this extras
           * container.
           */
          fun hashCodeNonLayoutAttributes(): Int {
              var result = brush?.hashCode() ?: 0
              result = 31 * result + if (brush != null) alpha.hashCode() else 0
              result = 31 * result + (shadow?.hashCode() ?: 0)
              result = 31 * result + (drawStyle?.hashCode() ?: 0)
              return result
          }

          /**
           * Checks structural equality between this extras container and [other] by comparing both layout
           * and non-layout attributes.
           */
          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is SpanStyleExtras) return false
              return hasSameLayoutAttributes(other) && hasSameNonLayoutAttributes(other)
          }

          /** Returns a combined hash code mixing both layout and non-layout attribute hash values. */
          override fun hashCode(): Int =
              31 * hashCodeLayoutAffectingAttributes() + hashCodeNonLayoutAttributes()
      }

      /**
       * Styling configuration that applies at the character level.
       *
       * Use [SpanStyle] to configure character-level styles such as text color, font size, font family,
       * background color, and text decorations.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2126-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2126
    endLine: 2160
    sha256: 56ccc3d0499a31d76f8ca2318129db0fbeb9c3a08523a3cd4ab8cc14a50d8c87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val mergedBaselineShift =
              if (baselineShift == null) thisExtras?.baselineShift
              else if (baselineShift.multiplier.toRawBits() == 0) null else baselineShift
          val mergedTransform =
              if (textGeometricTransform == null) thisExtras?.textGeometricTransform
              else if (textGeometricTransform == TextGeometricTransform.None) null
              else textGeometricTransform
          val mergedLocaleList = localeList ?: thisExtras?.localeList
          val mergedBackground =
              if (background.isSpecified) {
                  if (background == Color.Transparent) Color.Unspecified else background
              } else if (thisExtras == null) {
                  Color.Unspecified
              } else {
                  thisExtras.background
              }
          val mergedShadow =
              if (shadow == null) thisExtras?.shadow else if (shadow == Shadow.None) null else shadow
          val mergedDrawStyle =
              if (drawStyle == null) thisExtras?.drawStyle
              else if (drawStyle === Fill) null else drawStyle
          val normalizedOtherPlatform =
              if (platformStyle == null || platformStyle == PlatformSpanStyle.Default) null
              else platformStyle
          val mergedPlatformStyle =
              mergeNormalizedPlatformStyle(
                  thisBits,
                  thisExtras?.platformStyle,
                  if (platformStyle != null) HAS_PLATFORM_STYLE else 0,
                  normalizedOtherPlatform,
              )
          if (
              thisExtras != null &&
                  thisExtras.matches(
                      brush,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2161-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2161
    endLine: 2195
    sha256: dabf7543460b9210ab804cc5668c9e42a4bdc10fcc20a2eee101c60e3e694717
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      alpha,
                      mergedFontFeatures,
                      mergedBaselineShift,
                      mergedTransform,
                      mergedLocaleList,
                      mergedBackground,
                      mergedShadow,
                      mergedDrawStyle,
                      mergedPlatformStyle,
                  )
          ) {
              return thisExtras
          }
          if (
              brush == null &&
                  mergedFontFeatures == null &&
                  mergedBaselineShift == null &&
                  mergedTransform == null &&
                  mergedLocaleList == null &&
                  mergedBackground.isUnspecified &&
                  mergedShadow == null &&
                  mergedDrawStyle == null &&
                  mergedPlatformStyle == null
          ) {
              return null
          }
          return SpanStyleExtras(
              brush,
              if (brush == null) Float.NaN else alpha,
              mergedFontFeatures,
              mergedBaselineShift,
              mergedTransform,
              mergedLocaleList,
              mergedBackground,
              mergedShadow,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2196-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2196
    endLine: 2230
    sha256: c494ef9e7e39bf5168d89baf21667be98c51d70d6fbd00ab860e96f7d0612c22
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              mergedDrawStyle,
              mergedPlatformStyle,
          )
      }

      /** Builds a [SpanStyle], or returns [BoxedStyleValues.DefaultSpanStyle] when nothing is set. */
      internal fun createSpanStyle(
          color: Color = Color.Unspecified,
          brush: Brush? = null,
          alpha: Float = Float.NaN,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontWeight: FontWeight? = null,
          fontStyle: FontStyle? = null,
          fontSynthesis: FontSynthesis? = null,
          fontFamily: FontFamily? = null,
          fontFeatureSettings: String? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          baselineShift: BaselineShift? = null,
          textGeometricTransform: TextGeometricTransform? = null,
          localeList: LocaleList? = null,
          background: Color = Color.Unspecified,
          textDecoration: TextDecoration? = null,
          shadow: Shadow? = null,
          platformStyle: PlatformSpanStyle? = null,
          drawStyle: DrawStyle? = null,
      ): SpanStyle {
          if (!PackedTextStylesLatch.isEnabled) {
              return createLegacySpanStyle(
                  color,
                  brush,
                  alpha,
                  fontSize,
                  fontWeight,
                  fontStyle,
                  fontSynthesis,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2231-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2231
    endLine: 2265
    sha256: 0f85a668ec67800f8ce7407e271a3e7fa4827b22db02a0ef2cf0f60356220c2f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  fontFamily,
                  fontFeatureSettings,
                  letterSpacing,
                  baselineShift,
                  textGeometricTransform,
                  localeList,
                  background,
                  textDecoration,
                  shadow,
                  platformStyle,
                  drawStyle,
              )
          }
          // A SolidColor brush is stored as a color, like TextForegroundStyle.from does.
          val colorXor =
              when (brush) {
                  null -> packSpanColorXor(color)
                  is SolidColor -> packSpanColorXor(brush.value.modulate(alpha))
                  else -> 0L
              }
          val shaderBrush = if (brush is SolidColor) null else brush
          val bits =
              packSpanStyleBits(
                  fontStyle,
                  fontSynthesis,
                  fontFeatureSettings,
                  textGeometricTransform,
                  background,
                  textDecoration,
                  shadow,
                  platformStyle,
                  drawStyle,
                  baselineShift,
              )
          val extras =
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2266-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2266
    endLine: 2300
    sha256: 3ae09345c1a6f2688cb9a50fdc77dad68c893c6ee26de601c340b161b099a2ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (bits and ONE_BIT_FIELDS == 0 && shaderBrush == null && localeList == null) {
                  null
              } else {
                  createSpanStyleExtras(
                      shaderBrush,
                      alpha,
                      fontFeatureSettings,
                      baselineShift,
                      textGeometricTransform,
                      localeList,
                      background,
                      shadow,
                      drawStyle,
                      platformStyle,
                  )
              }
          if (
              colorXor == 0L &&
                  bits == 0 &&
                  extras == null &&
                  fontSize.isUnspecified &&
                  letterSpacing.isUnspecified &&
                  fontWeight == null &&
                  fontFamily == null
          ) {
              return BoxedStyleValues.DefaultSpanStyle
          }
          return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
      }

      private fun createLegacySpanStyle(
          color: Color,
          brush: Brush?,
          alpha: Float,
          fontSize: TextUnit,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2301-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2301
    endLine: 2335
    sha256: 1d1fc540a1d0d4623e11e604a6bda6584d6f9baf21909f8408c60f2f76ddd657
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          fontWeight: FontWeight?,
          fontStyle: FontStyle?,
          fontSynthesis: FontSynthesis?,
          fontFamily: FontFamily?,
          fontFeatureSettings: String?,
          letterSpacing: TextUnit,
          baselineShift: BaselineShift?,
          textGeometricTransform: TextGeometricTransform?,
          localeList: LocaleList?,
          background: Color,
          textDecoration: TextDecoration?,
          shadow: Shadow?,
          platformStyle: PlatformSpanStyle?,
          drawStyle: DrawStyle?,
      ): SpanStyle =
          SpanStyle(
              if (brush != null) {
                  LegacySpanStyle(
                      brush = brush,
                      alpha = alpha,
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      fontStyle = fontStyle,
                      fontSynthesis = fontSynthesis,
                      fontFamily = fontFamily,
                      fontFeatureSettings = fontFeatureSettings,
                      letterSpacing = letterSpacing,
                      baselineShift = baselineShift,
                      textGeometricTransform = textGeometricTransform,
                      localeList = localeList,
                      background = background,
                      textDecoration = textDecoration,
                      shadow = shadow,
                      platformStyle = platformStyle,
                      drawStyle = drawStyle,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2336-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2336
    endLine: 2370
    sha256: 64cb14e2e099f1577cd4402538d2c0c0b8285c2d8cfc6262180e38e74f810443
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              } else {
                  LegacySpanStyle(
                      color = color,
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      fontStyle = fontStyle,
                      fontSynthesis = fontSynthesis,
                      fontFamily = fontFamily,
                      fontFeatureSettings = fontFeatureSettings,
                      letterSpacing = letterSpacing,
                      baselineShift = baselineShift,
                      textGeometricTransform = textGeometricTransform,
                      localeList = localeList,
                      background = background,
                      textDecoration = textDecoration,
                      shadow = shadow,
                      platformStyle = platformStyle,
                      drawStyle = drawStyle,
                  )
              }
          )

      /** Fills in all unset fields. Reuses one object for the default style. */
      internal fun resolveSpanStyleDefaults(style: SpanStyle): SpanStyle {
          if (style.legacySpanStyle != null) {
              return SpanStyle(resolveLegacySpanStyleDefaults(style.legacySpanStyle))
          }
          return if (style.isPackedDefault()) BoxedStyleValues.ResolvedDefaultSpanStyle
          else style.withResolvedDefaults()
      }

      /**
       * @param a An sp value. Maybe [TextUnit.Unspecified]
       * @param b An sp value. Maybe [TextUnit.Unspecified]
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2371-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2371
    endLine: 2405
    sha256: 17d1067bf53c92d49aad48c9ba67c5c85f42c230a8c78a35ceea58b793e0bf43
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      internal fun lerpTextUnitInheritable(a: TextUnit, b: TextUnit, t: Float): TextUnit {
          // Not lerpDiscrete: a generic call would box both TextUnits.
          if (a.isUnspecified || b.isUnspecified) return if (t < 0.5f) a else b
          return lerp(a, b, t)
      }

      /**
       * Lerp between two values that cannot be transitioned. Returns [a] if [fraction] is smaller than
       * 0.5 otherwise [b].
       */
      internal fun <T> lerpDiscrete(a: T, b: T, fraction: Float): T = if (fraction < 0.5) a else b

      /**
       * Interpolate between two span styles.
       *
       * This will not work well if the styles don't set the same fields.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
       * meaning that the interpolation has finished, returning [stop] (or something equivalent to
       * [stop]), and values in between meaning that the interpolation is at the relevant point on the
       * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
       * negative values and values greater than 1.0 are valid.
       */
      public fun lerp(start: SpanStyle, stop: SpanStyle, fraction: Float): SpanStyle {
          if (start.legacySpanStyle != null) {
              return SpanStyle(lerp(start.legacySpanStyle, stop.legacySpanStyle!!, fraction))
          }
          val startBrush = start.brush
          val stopBrush = stop.brush
          // Same rules as lerp(TextForegroundStyle): blend two colors, or blend the alpha of two
          // brushes, else jump from one to the other.
          val discreteStyleResolved = if (fraction < 0.5f) start else stop
          val startWeight = start.fontWeight ?: FontWeight.Normal
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2406-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2406
    endLine: 2440
    sha256: f4a94df6cc7fdfc3263563919cf05c7ab6d531a6619a16a59837fe168d409e6d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val stopWeight = stop.fontWeight ?: FontWeight.Normal
          val startShift = start.baselineShiftOrNone
          val stopShift = stop.baselineShiftOrNone
          val startTransform = start.extras?.textGeometricTransform ?: TextGeometricTransform.None
          val stopTransform = stop.extras?.textGeometricTransform ?: TextGeometricTransform.None
          return createSpanStyle(
              color =
                  if (startBrush == null && stopBrush == null) {
                      lerp(start.color, stop.color, fraction)
                  } else {
                      discreteStyleResolved.color
                  },
              brush = discreteStyleResolved.brush,
              alpha =
                  if (startBrush != null && stopBrush != null) {
                      lerp(start.alpha, stop.alpha, fraction)
                  } else {
                      discreteStyleResolved.alpha
                  },
              fontSize = lerpTextUnitInheritable(start.fontSize, stop.fontSize, fraction),
              fontWeight =
                  if (startWeight == stopWeight) startWeight else lerp(startWeight, stopWeight, fraction),
              fontStyle = discreteStyleResolved.fontStyle,
              fontSynthesis = discreteStyleResolved.fontSynthesis,
              fontFamily = discreteStyleResolved.fontFamily,
              fontFeatureSettings = discreteStyleResolved.fontFeatureSettings,
              letterSpacing = lerpTextUnitInheritable(start.letterSpacing, stop.letterSpacing, fraction),
              baselineShift =
                  if (startShift == stopShift) {
                      start.baselineShift ?: stop.baselineShift ?: BoxedStyleValues.NoneBaselineShift
                  } else {
                      lerp(startShift, stopShift, fraction)
                  },
              textGeometricTransform =
                  if (startTransform == stopTransform) {
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2441-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2441
    endLine: 2475
    sha256: 9257537c7c02cc0ae9a7952c9317d58c9f891decae781076bd31eb6bd4c410cd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      startTransform
                  } else {
                      lerp(startTransform, stopTransform, fraction)
                  },
              localeList = discreteStyleResolved.localeList,
              background = lerp(start.background, stop.background, fraction),
              textDecoration = discreteStyleResolved.textDecoration,
              shadow = nullSafeLerp(start.shadow, stop.shadow, fraction),
              platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
              drawStyle = discreteStyleResolved.drawStyle,
          )
      }

      /**
       * Linearly interpolates between two [Shadow]s.
       *
       * If one of the shadows is null, it is treated as a transparent shadow. If both are null, null is
       * returned.
       */
      internal fun nullSafeLerp(lhs: Shadow?, rhs: Shadow?, fraction: Float): Shadow? {
          if (lhs == null && rhs == null) {
              return null
          }
          if (lhs == null) {
              return lerp(rhs!!.dropAlpha(), rhs, fraction)
          }
          if (rhs == null) {
              return lerp(lhs, lhs.dropAlpha(), fraction)
          }
          return lerp(lhs, rhs, fraction)
      }

      private fun Shadow.dropAlpha(): Shadow = copy(color = color.copy(alpha = 0f))

      private fun lerpPlatformStyle(
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 246
    endLine: 280
    sha256: e56a2d70afca1e4e8fd4d75a71c8578dad20e4479814e6adec7147a579143b9f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
       *
       * @sample androidx.compose.ui.text.samples.SpanStyleSample
       * @sample androidx.compose.ui.text.samples.SpanStyleBrushSample
       * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
       * @see AnnotatedString
       * @see TextStyle
       * @see ParagraphStyle
       */
      @Immutable
      public class SpanStyle : AnnotatedString.Annotation {
          // The fill to draw text, a unified representation of Color and Brush.
          /**
           * Text [Color] stored as `color.value.toLong() xor UNSPECIFIED_COLOR_BITS`. [Color.Unspecified]
           * (`0x10UL`) maps to `0L`, and `mergeSpanColorXor` checks for a set color via `(other or
           * -other) shr 63`. When [brush] is a `ShaderBrush`, [colorXor] is `0L`.
           */
          @JvmField internal val colorXor: Long

          /**
           * 32-bit packed word for [SpanStyle] enum, bitmask, flag, and preset fields.
           *
           * ### Bit Layout (`bits 0..31`, LSB first)
           *
           * ```
           *  31                    17 16   15  14  13  12  11  10   9 8      6 5      3   2   1   0
           * +------------------------+-------+---+---+---+---+---+---+--------+--------+---+---+---+
           * |      unused (0)        |fontSty|drw|shd|bg |tgt|ffs|plt|textDeco|fontSynt| - |bs |ext|
           * +------------------------+-------+---+---+---+---+---+---+--------+--------+---+---+---+
           *  <------- 15 bits ------> 2 bits   1   1   1   1   1   1   3 bits   3 bits   1   1   1
           *                           <-2b-->                         <- 3b -> <- 3b ->
           * ```
           *
           * |Bits    |Width|Field / Meaning                                                                              |
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2476-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 2476
    endLine: 2485
    sha256: ae079fc884f17ab0e7a6889014a598eb9a2dd169e83af7345b008db1165ac711
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          start: PlatformSpanStyle?,
          stop: PlatformSpanStyle?,
          fraction: Float,
      ): PlatformSpanStyle? {
          if (start == null && stop == null) return null
          val startNonNull = start ?: PlatformSpanStyle.Default
          val stopNonNull = stop ?: PlatformSpanStyle.Default
          return lerp(startNonNull, stopNonNull, fraction)
      }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 281
    endLine: 305
    sha256: 36212b4e5e2b29b80775385c50b28f629fd92e2c9628dfced5cc111fa6c5e843
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * |--------|-----|---------------------------------------------------------------------------------------------|
           * |`0`     |1    |[SPAN_HAS_EXTRAS]: `1` iff [extras] `!= null` (enforced by internal constructor)             |
           * |`1`     |1    |[HAS_BASELINE_SHIFT]: `1` if set ([BaselineShift.None] when `extras.baselineShift` is null)  |
           * |`2`     |1    |Unused (`0`)                                                                                 |
           * |`3..5`  |3    |[fontSynthesis]: `0` = null, else `((value and 0x3) shl 1) or 1`                             |
           * |`6..8`  |3    |[textDecoration]: `0` = null, else `((mask and 0x3) shl 1) or 1`                             |
           * |`9`     |1    |[HAS_PLATFORM_STYLE]: `1` if set ([PlatformSpanStyle.Default] if no extras)                  |
           * |`10`    |1    |[HAS_FONT_FEATURES]: `1` if set (`""` when `extras.fontFeatureSettings` is null)             |
           * |`11`    |1    |[HAS_GEOMETRIC_TRANSFORM]: `1` if set ([TextGeometricTransform.None] if no extras)           |
           * |`12`    |1    |[HAS_BACKGROUND]: `1` if set ([Color.Transparent] when `extras.background` unset)            |
           * |`13`    |1    |[HAS_SHADOW]: `1` if set ([Shadow.None] when `extras.shadow` is null)                        |
           * |`14`    |1    |[HAS_DRAW_STYLE]: `1` if set ([Fill] when `extras.drawStyle` is null)                        |
           * |`15..16`|2    |[fontStyle]: `0` = null, `1` (`0b01`) = [FontStyle.Normal], `3` (`0b11`) = [FontStyle.Italic]|
           * |`17..31`|15   |Unused (`0`)                                                                                 |
           *
           * ### Odd-Code Rule & SWAR Merge
           * Fields in bits `3..8` ([fontSynthesis], [textDecoration]) and bits `15..16` ([fontStyle])
           * store `0` when unset and an **odd** code (`(raw shl 1) or 1`) when set. Their low bit acts as
           * the set flag, and [mergeSpanBits] scales that bit into a full mask via `* TWO_BIT_FIELD_MASK`
           * (`0x3`) and `* THREE_BIT_FIELD_MASK` (`0x7`).
           */
          internal val bits: Int

          /**
           * Rare span fields ([brush], [alpha], [fontFeatureSettings], [baselineShift],
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-306-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 306
    endLine: 340
    sha256: bc5cb46633cf48345cd36236e61904672c6528531fba4363b042f8922787d0df
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [textGeometricTransform], [localeList], [background], [shadow], [drawStyle],
           * [platformStyle]). Stays `null` when all rare fields are unset or match their bit presets.
           */
          @JvmField internal val extras: SpanStyleExtras?
          internal val legacySpanStyle: LegacySpanStyle?

          /** Glyph size. If [TextUnit.Unspecified], inherits size from parent or default style. */
          public val fontSize: TextUnit

          /**
           * Amount of space (in SP or EM) to add between letters. If [TextUnit.Unspecified], inherits
           * from parent.
           */
          public val letterSpacing: TextUnit

          /** Typeface thickness (e.g., bold). */
          public val fontWeight: FontWeight?

          /** Font family for rendering. */
          public val fontFamily: FontFamily?

          internal constructor(
              colorXor: Long,
              bits: Int,
              extras: SpanStyleExtras?,
              fontSize: TextUnit,
              letterSpacing: TextUnit,
              fontWeight: FontWeight?,
              fontFamily: FontFamily?,
          ) {
              this.colorXor = colorXor
              this.bits = if (extras == null) bits and SPAN_HAS_EXTRAS.inv() else bits or SPAN_HAS_EXTRAS
              this.extras = extras
              this.legacySpanStyle = null
              this.fontSize = fontSize
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-341-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 341
    endLine: 375
    sha256: 9f891bf36ad6988ea3b999d7ddd64220b5f8fcb59ccdb3d42e790292478e292b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              this.letterSpacing = letterSpacing
              this.fontWeight = fontWeight
              this.fontFamily = fontFamily
          }

          internal constructor(legacySpanStyle: LegacySpanStyle) {
              this.colorXor = 0L
              this.bits = 0
              this.extras = null
              this.legacySpanStyle = if (PackedTextStylesLatch.isEnabled) null else legacySpanStyle
              this.fontSize = legacySpanStyle.fontSize
              this.letterSpacing = legacySpanStyle.letterSpacing
              this.fontWeight = legacySpanStyle.fontWeight
              this.fontFamily = legacySpanStyle.fontFamily
          }

          /**
           * Styling configuration for a text span. This configuration only allows character level
           * styling, in order to set paragraph level styling such as line height, or text alignment
           * please see [ParagraphStyle].
           *
           * @sample androidx.compose.ui.text.samples.SpanStyleSample
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
           * @param color The text color.
           * @param fontSize The size of glyphs (in logical pixels) to use when painting the text. This
           *   may be [TextUnit.Unspecified] for inheriting from another [SpanStyle].
           * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
           * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
           * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
           *   or style cannot be found in the provided font family.
           * @param fontFamily The font family to be used when rendering the text.
           * @param fontFeatureSettings The advanced typography settings provided by font. The format is
           *   the same as the CSS font-feature-settings attribute:
           *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
           * @param letterSpacing The amount of space (in em) to add between each letter.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 36
    endLine: 70
    sha256: c154a282dcaf32fac65349b88081a6c802cec71fc9730c7520377235ee2f66eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.style.BaselineShift
      import androidx.compose.ui.text.style.TextDecoration
      import androidx.compose.ui.text.style.TextForegroundStyle
      import androidx.compose.ui.text.style.TextGeometricTransform
      import androidx.compose.ui.text.style.isApplicable
      import androidx.compose.ui.text.style.lerp
      import androidx.compose.ui.text.style.modulate
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.TextUnit
      import androidx.compose.ui.unit.isSpecified
      import androidx.compose.ui.unit.isUnspecified
      import androidx.compose.ui.unit.lerp
      import androidx.compose.ui.unit.sp
      import androidx.compose.ui.util.lerp
      import androidx.compose.ui.util.packInts
      import kotlin.jvm.JvmField

      /** The default font size if none is specified. */
      private val DefaultFontSize = 14.sp
      // TODO(nona): Introduce TextUnit.Original for representing "do not change the original result".
      //  Need to distinguish from Inherit.
      private val DefaultLetterSpacing = 0.sp

      /** Cached values for `FontStyle` and `FontSynthesis` getters, plus default styles. */
      internal object BoxedStyleValues {
          val NormalFontStyle: FontStyle? = FontStyle.Normal
          val ItalicFontStyle: FontStyle? = FontStyle.Italic
          val NoneFontSynthesis: FontSynthesis? = FontSynthesis.None
          val WeightFontSynthesis: FontSynthesis? = FontSynthesis.Weight
          val StyleFontSynthesis: FontSynthesis? = FontSynthesis.Style
          val AllFontSynthesis: FontSynthesis? = FontSynthesis.All
          val NoneBaselineShift: BaselineShift? = BaselineShift.None
          // Pre-allocated combined Underline + LineThrough instance; TextDecoration only caches the
          // single-flag constants on its companion object.
          @JvmField
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-376-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 376
    endLine: 410
    sha256: 660d89bdf32f1280f1e0751c57214e6050e771340b8ac40250a11fb3ad32789d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param baselineShift The amount by which the text is shifted up from the current baseline.
           * @param textGeometricTransform The geometric transformation applied the text.
           * @param localeList The locale list used to select region-specific glyphs.
           * @param background The background color for the text.
           * @param textDecoration The decorations to paint on the text (e.g., an underline).
           * @param shadow The shadow effect applied on the text.
           * @see AnnotatedString
           * @see TextStyle
           * @see ParagraphStyle
           */
          @Deprecated(
              "SpanStyle constructors that do not take new stable parameters " +
                  "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
                  "constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              color: Color = Color.Unspecified,
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
          ) : this(
              color = color,
              fontSize = fontSize,
              fontWeight = fontWeight,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-411-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 411
    endLine: 445
    sha256: c48f3196d4b57bd761c72362d42e8a773dfb70c74ad3b170d4f60a687afba873
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fontStyle = fontStyle,
              fontSynthesis = fontSynthesis,
              fontFamily = fontFamily,
              fontFeatureSettings = fontFeatureSettings,
              letterSpacing = letterSpacing,
              baselineShift = baselineShift,
              textGeometricTransform = textGeometricTransform,
              localeList = localeList,
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = null,
              drawStyle = null,
          )

          /**
           * Styling configuration for a text span. This configuration only allows character level
           * styling, in order to set paragraph level styling such as line height, or text alignment
           * please see [ParagraphStyle].
           *
           * @sample androidx.compose.ui.text.samples.SpanStyleSample
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
           * @param color The color to draw the text.
           * @param fontSize The size of glyphs (in logical pixels) to use when painting the text. This
           *   may be [TextUnit.Unspecified] for inheriting from another [SpanStyle].
           * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
           * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
           * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
           *   or style cannot be found in the provided font family.
           * @param fontFamily The font family to be used when rendering the text.
           * @param fontFeatureSettings The advanced typography settings provided by font. The format is
           *   the same as the CSS font-feature-settings attribute:
           *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
           * @param letterSpacing The amount of space (in em) to add between each letter.
           * @param baselineShift The amount by which the text is shifted up from the current baseline.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-446-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 446
    endLine: 480
    sha256: e2db710541f254a8b122657d4721968fabed29968bb6605e3193f4b8c47c7183
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param textGeometricTransform The geometric transformation applied the text.
           * @param localeList The locale list used to select region-specific glyphs.
           * @param background The background color for the text.
           * @param textDecoration The decorations to paint on the text (e.g., an underline).
           * @param shadow The shadow effect applied on the text.
           * @param platformStyle Platform specific [SpanStyle] parameters.
           * @see AnnotatedString
           * @see TextStyle
           * @see ParagraphStyle
           */
          @Deprecated(
              "SpanStyle constructors that do not take new stable parameters " +
                  "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
                  "constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              color: Color = Color.Unspecified,
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              platformStyle: PlatformSpanStyle? = null,
          ) : this(
              color = color,
              fontSize = fontSize,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-481-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 481
    endLine: 515
    sha256: 7cbb5fe9046dce8f1a6412c6e14067005aba649c607556cfd8eb28b7b02a8515
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fontWeight = fontWeight,
              fontStyle = fontStyle,
              fontSynthesis = fontSynthesis,
              fontFamily = fontFamily,
              fontFeatureSettings = fontFeatureSettings,
              letterSpacing = letterSpacing,
              baselineShift = baselineShift,
              textGeometricTransform = textGeometricTransform,
              localeList = localeList,
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = platformStyle,
              drawStyle = null,
          )

          /**
           * Styling configuration for text spans.
           *
           * Configures character-level styles such as text color, font size, font family, background
           * color, and text decorations.
           *
           * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
           *
           * @sample androidx.compose.ui.text.samples.SpanStyleSample
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
           * @sample androidx.compose.ui.text.samples.BaselineShiftSample
           * @param color color to apply to the text
           * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
           *   style.
           * @param fontWeight typeface thickness (e.g., bold)
           * @param fontStyle typeface variant (e.g., italic)
           * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style
           *   is missing in [fontFamily]
           * @param fontFamily font family for rendering
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-516-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 516
    endLine: 550
    sha256: d94a18c32122565a81250dd4957416b6caf91b0903c7aa127abf19ba30209953
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
           * @param letterSpacing amount of space (in SP or EM) to add between letters. If
           *   [TextUnit.Unspecified], inherits from parent.
           * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or
           *   subscript)
           * @param textGeometricTransform geometric transformation to apply
           * @param localeList locale list for region-specific glyphs
           * @param background color of background rectangle covering entire line height from start to end
           * @param textDecoration decorations (e.g., underline)
           * @param shadow shadow effect
           * @param platformStyle platform-specific parameters
           * @param drawStyle drawing style (fill or stroke)
           * @see AnnotatedString
           * @see TextStyle
           * @see ParagraphStyle
           */
          public constructor(
              color: Color = Color.Unspecified,
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              platformStyle: PlatformSpanStyle? = null,
              drawStyle: DrawStyle? = null,
          ) {
              if (PackedTextStylesLatch.isEnabled) {
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-551-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 551
    endLine: 585
    sha256: 8027dc6ad09a9edd36b947cc028b8696833a6c996addbc12ca5758b547a5faae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val extras =
                      createSpanStyleExtras(
                          /* brush = */ null,
                          Float.NaN,
                          fontFeatureSettings,
                          baselineShift,
                          textGeometricTransform,
                          localeList,
                          background,
                          shadow,
                          drawStyle,
                          platformStyle,
                      )
                  val rawBits =
                      packSpanStyleBits(
                          fontStyle,
                          fontSynthesis,
                          fontFeatureSettings,
                          textGeometricTransform,
                          background,
                          textDecoration,
                          shadow,
                          platformStyle,
                          drawStyle,
                          baselineShift,
                      )
                  this.colorXor = packSpanColorXor(color)
                  this.bits =
                      if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                      else rawBits or SPAN_HAS_EXTRAS
                  this.extras = extras
                  this.legacySpanStyle = null
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-586-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 586
    endLine: 620
    sha256: 8f0aef456e424dc56177a2560be766f6b7e04648d07493aeabede1c0f72af03a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  this.fontFamily = fontFamily
              } else {
                  this.colorXor = 0L
                  this.bits = 0
                  this.extras = null
                  this.legacySpanStyle =
                      LegacySpanStyle(
                          color = color,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
                          letterSpacing = letterSpacing,
                          baselineShift = baselineShift,
                          textGeometricTransform = textGeometricTransform,
                          localeList = localeList,
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle,
                          drawStyle = drawStyle,
                      )
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
                  this.fontFamily = fontFamily
              }
          }

          /**
           * Styling configuration for text spans.
           *
           * Configures character-level styles such as text brush, opacity, font size, font family,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-621-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 621
    endLine: 655
    sha256: 910ff20afb69eb0d715574fc7ee8d016df8ee6285d5a06118b6ab7e187ba783b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * background color, and text decorations.
           *
           * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
           *
           * @sample androidx.compose.ui.text.samples.SpanStyleBrushSample
           * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
           * @sample androidx.compose.ui.text.samples.BaselineShiftSample
           * @param brush [Brush] for painting text, null for unspecified
           * @param alpha opacity applied to [brush] (0.0 to 1.0)
           * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
           *   style.
           * @param fontWeight typeface thickness (e.g., bold)
           * @param fontStyle typeface variant (e.g., italic)
           * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style
           *   is missing in [fontFamily]
           * @param fontFamily font family for rendering
           * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
           * @param letterSpacing amount of space (in SP or EM) to add between letters. If
           *   [TextUnit.Unspecified], inherits from parent.
           * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or
           *   subscript)
           * @param textGeometricTransform geometric transformation to apply
           * @param localeList locale list for region-specific glyphs
           * @param background color of background rectangle covering entire line height from start to end
           * @param textDecoration decorations (e.g., underline)
           * @param shadow shadow effect
           * @param platformStyle platform-specific parameters
           * @param drawStyle drawing style (fill or stroke)
           * @see AnnotatedString
           * @see TextStyle
           * @see ParagraphStyle
           */
          public constructor(
              brush: Brush?,
              alpha: Float = Float.NaN,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-656-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 656
    endLine: 690
    sha256: 8f690c975f7d3273c7060af90030212c8eef7217287cbf04ad8b3a5802c384f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              platformStyle: PlatformSpanStyle? = null,
              drawStyle: DrawStyle? = null,
          ) {
              if (PackedTextStylesLatch.isEnabled) {
                  val extras =
                      createSpanStyleExtras(
                          if (brush is SolidColor) /* brush= */ null else brush,
                          alpha,
                          fontFeatureSettings,
                          baselineShift,
                          textGeometricTransform,
                          localeList,
                          background,
                          shadow,
                          drawStyle,
                          platformStyle,
                      )
                  val rawBits =
                      packSpanStyleBits(
                          fontStyle,
                          fontSynthesis,
                          fontFeatureSettings,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-691-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 691
    endLine: 725
    sha256: 808610a24e5712fa495ec6f46093c93b79bf56341062cbaf27d4d8518b1309d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          textGeometricTransform,
                          background,
                          textDecoration,
                          shadow,
                          platformStyle,
                          drawStyle,
                          baselineShift,
                      )
                  this.colorXor =
                      if (brush is SolidColor) packSpanColorXor(brush.value.modulate(alpha)) else 0L
                  this.bits =
                      if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                      else rawBits or SPAN_HAS_EXTRAS
                  this.extras = extras
                  this.legacySpanStyle = null
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
                  this.fontFamily = fontFamily
              } else {
                  this.colorXor = 0L
                  this.bits = 0
                  this.extras = null
                  this.legacySpanStyle =
                      LegacySpanStyle(
                          brush = brush,
                          alpha = alpha,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
                          letterSpacing = letterSpacing,
                          baselineShift = baselineShift,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 71
    endLine: 105
    sha256: ba080c9de4a4e50282a00f551fbf592ce4bdca1e3b7ae5f50d91d33520979a03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal val CombinedTextDecoration: TextDecoration =
              TextDecoration.Underline + TextDecoration.LineThrough
          @JvmField
          internal val DefaultSpanStyle: SpanStyle =
              if (PackedTextStylesLatch.isEnabled) {
                  SpanStyle(
                      colorXor = 0L,
                      bits = 0,
                      extras = null,
                      fontSize = TextUnit.Unspecified,
                      letterSpacing = TextUnit.Unspecified,
                      fontWeight = null,
                      fontFamily = null,
                  )
              } else {
                  SpanStyle(DefaultLegacySpanStyle)
              }
          @JvmField
          internal val ResolvedDefaultSpanStyle: SpanStyle = DefaultSpanStyle.withResolvedDefaults()
          @JvmField
          internal val ResolvedDefaultParagraphStyleLtr: ParagraphStyle =
              DefaultParagraphStyle.withResolvedDefaults(LayoutDirection.Ltr)
          @JvmField
          internal val ResolvedDefaultParagraphStyleRtl: ParagraphStyle =
              DefaultParagraphStyle.withResolvedDefaults(LayoutDirection.Rtl)
      }

      /**
       * Rare [SpanStyle] fields that do not fit in the packed bits. Holds [Brush], [fontFeatureSettings],
       * [BaselineShift], [TextGeometricTransform], [LocaleList], [background], [Shadow], [DrawStyle], or
       * [PlatformSpanStyle] when set to a custom value.
       *
       * @param brush Shader or gradient brush used to draw text, or null if using a solid color.
       * @param alpha Opacity applied to [brush], or [Float.NaN] when unset.
       * @param fontFeatureSettings OpenType font feature settings string, or null if unset.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-726-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 726
    endLine: 760
    sha256: 3ea785f207d60eafb32a75e6a4e8693afb94ea523725c5bd996a826e8eddf5b3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          textGeometricTransform = textGeometricTransform,
                          localeList = localeList,
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle,
                          drawStyle = drawStyle,
                      )
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
                  this.fontFamily = fontFamily
              }
          }

          // Not called. The old primary constructor took a TextForegroundStyle with defaults, and
          // its synthetic public `$default` overload is part of the binary API.
          @Suppress("unused")
          internal constructor(
              textForegroundStyle: TextForegroundStyle,
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              platformStyle: PlatformSpanStyle? = null,
              drawStyle: DrawStyle? = null,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-761-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 761
    endLine: 795
    sha256: 5ed1501afeb3a67ae265ed57bdee82d539fe2eb956cd24b9d6ca2ca351d9141e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              val brush = textForegroundStyle.brush
              if (PackedTextStylesLatch.isEnabled) {
                  val extras =
                      createSpanStyleExtras(
                          if (brush is SolidColor) null else brush,
                          if (brush != null) textForegroundStyle.alpha else Float.NaN,
                          fontFeatureSettings,
                          baselineShift,
                          textGeometricTransform,
                          localeList,
                          background,
                          shadow,
                          drawStyle,
                          platformStyle,
                      )
                  val rawBits =
                      packSpanStyleBits(
                          fontStyle,
                          fontSynthesis,
                          fontFeatureSettings,
                          textGeometricTransform,
                          background,
                          textDecoration,
                          shadow,
                          platformStyle,
                          drawStyle,
                          baselineShift,
                      )
                  this.colorXor =
                      if (brush != null) {
                          if (brush is SolidColor) {
                              packSpanColorXor(brush.value.modulate(textForegroundStyle.alpha))
                          } else {
                              0L
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-796-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 796
    endLine: 830
    sha256: 601e2a42ef5c72639fd104024afcf99e30d75a3b065e01b0773a543997abe881
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      } else {
                          packSpanColorXor(textForegroundStyle.color)
                      }
                  this.bits =
                      if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                      else rawBits or SPAN_HAS_EXTRAS
                  this.extras = extras
                  this.legacySpanStyle = null
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
                  this.fontFamily = fontFamily
              } else {
                  this.colorXor = 0L
                  this.bits = 0
                  this.extras = null
                  this.legacySpanStyle =
                      LegacySpanStyle(
                          textForegroundStyle = textForegroundStyle,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
                          letterSpacing = letterSpacing,
                          baselineShift = baselineShift,
                          textGeometricTransform = textGeometricTransform,
                          localeList = localeList,
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle,
                          drawStyle = drawStyle,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-831-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 831
    endLine: 865
    sha256: 622bd463367b0f1386bf716acc2c844f5ea0c60d21e885c262aea994ba7001ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      )
                  this.fontSize = fontSize
                  this.letterSpacing = letterSpacing
                  this.fontWeight = fontWeight
                  this.fontFamily = fontFamily
              }
          }

          /** Color to draw text. */
          public val color: Color
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.color
                  } else {
                      Color((colorXor xor UNSPECIFIED_COLOR_BITS).toULong())
                  }

          /** Brush to draw text. If not null, overrides [color]. */
          public val brush: Brush?
              get() = if (legacySpanStyle != null) legacySpanStyle.brush else extras?.brush

          /**
           * Opacity of text. This value is either provided along side Brush, or via alpha channel in
           * color.
           */
          public val alpha: Float
              get() {
                  if (legacySpanStyle != null) return legacySpanStyle.alpha
                  val extras = extras
                  if (extras != null && extras.brush != null) return extras.alpha
                  return if (colorXor == 0L) Float.NaN else color.alpha
              }

          /** Typeface variant (e.g., italic). */
          public val fontStyle: FontStyle?
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-866-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 866
    endLine: 900
    sha256: 608201c944d803205be8e9c17d32cc49b9b7f0984cb8fd0b4fb437da2733aabb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              get() {
                  if (legacySpanStyle != null) return legacySpanStyle.fontStyle
                  val bits = bits
                  if (bits and HAS_FONT_STYLE == 0) return null
                  // `FontStyle` is an `@JvmInline value class`, so returning `FontStyle?` requires a
                  // boxed wrapper object on the JVM. Returning the pre-boxed singletons from
                  // `BoxedStyleValues` avoids allocating a new `FontStyle` box on every getter call.
                  return if (bits and FONT_STYLE_IS_ITALIC == 0) {
                      BoxedStyleValues.NormalFontStyle
                  } else {
                      BoxedStyleValues.ItalicFontStyle
                  }
              }

          /**
           * Font synthesis rules to fallback to bold/italic if the requested style is missing in
           * [fontFamily].
           */
          public val fontSynthesis: FontSynthesis?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.fontSynthesis
                  } else if (bits and FONT_SYNTHESIS_MASK == 0) {
                      null
                  } else {
                      // The code is (value shl 1) or 1, so the value is the code without its low bit.
                      // Like `fontStyle`, returns pre-boxed `BoxedStyleValues` singletons to avoid
                      // value-class boxing allocations when returning nullable `FontSynthesis?`.
                      when ((bits and FONT_SYNTHESIS_MASK) ushr (FONT_SYNTHESIS_SHIFT + 1)) {
                          0 -> BoxedStyleValues.NoneFontSynthesis
                          1 -> BoxedStyleValues.WeightFontSynthesis
                          2 -> BoxedStyleValues.StyleFontSynthesis
                          else -> BoxedStyleValues.AllFontSynthesis
                      }
                  }
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-901-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 901
    endLine: 935
    sha256: e2c3fc68fdc4a0034d38caff374df66e144b8df2ebc4bb0ea08e264ab6338e8a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Advanced font features in CSS format (e.g., "smcp" for small caps). */
          public val fontFeatureSettings: String?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.fontFeatureSettings
                  } else {
                      extras?.fontFeatureSettings ?: if (bits and HAS_FONT_FEATURES != 0) "" else null
                  }

          /** Vertical shift amount from the baseline (e.g., for superscript or subscript). */
          public val baselineShift: BaselineShift?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.baselineShift
                  } else {
                      extras?.baselineShift
                          ?: if (bits and HAS_BASELINE_SHIFT != 0) {
                              BoxedStyleValues.NoneBaselineShift
                          } else {
                              null
                          }
                  }

          internal val baselineShiftOrNone: BaselineShift
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.baselineShift ?: BaselineShift.None
                  } else {
                      extras?.baselineShift ?: BaselineShift.None
                  }

          /** Geometric transformation to apply. */
          public val textGeometricTransform: TextGeometricTransform?
              get() =
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-936-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 936
    endLine: 970
    sha256: 4d0917b3059ee158344c23b62cdc308a460bc21798b0733d3fda25c7e5dd2840
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (legacySpanStyle != null) {
                      legacySpanStyle.textGeometricTransform
                  } else {
                      extras?.textGeometricTransform
                          ?: if (hasTextGeometricTransform) TextGeometricTransform.None else null
                  }

          /** Locale list for region-specific glyphs. */
          public val localeList: LocaleList?
              get() = if (legacySpanStyle != null) legacySpanStyle.localeList else extras?.localeList

          /** Color of background rectangle covering entire line height from start to end. */
          public val background: Color
              get() {
                  if (legacySpanStyle != null) return legacySpanStyle.background
                  val extras = extras
                  // Non-transparent background colors are stored in `extras.background`. A transparent
                  // background (`Color.Transparent`) is encoded via `HAS_BACKGROUND` alone so that common
                  // resolved styles (which default `background` to `Color.Transparent`) do not allocate
                  // a `SpanStyleExtras` sidecar.
                  if (extras != null && extras.background.isSpecified) return extras.background
                  return if (bits and HAS_BACKGROUND != 0) Color.Transparent else Color.Unspecified
              }

          /** Decorations (e.g., underline). */
          public val textDecoration: TextDecoration?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.textDecoration
                  } else if (bits and TEXT_DECORATION_MASK == 0) {
                      null
                  } else {
                      when ((bits and TEXT_DECORATION_MASK) ushr (TEXT_DECORATION_SHIFT + 1)) {
                          0 -> TextDecoration.None
                          1 -> TextDecoration.Underline
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-971-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 971
    endLine: 1005
    sha256: c1f20381f824ef9d7e9a17bc4a9d78317e89cea3676a91ea199c9683afaed360
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          2 -> TextDecoration.LineThrough
                          else -> BoxedStyleValues.CombinedTextDecoration
                      }
                  }

          /** Shadow effect. */
          public val shadow: Shadow?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.shadow
                  } else {
                      extras?.shadow ?: if (bits and HAS_SHADOW != 0) Shadow.None else null
                  }

          /** Platform-specific parameters. */
          public val platformStyle: PlatformSpanStyle?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.platformStyle
                  } else {
                      extras?.platformStyle
                          ?: if (bits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
                  }

          /** Drawing style (fill or stroke). */
          public val drawStyle: DrawStyle?
              get() =
                  if (legacySpanStyle != null) {
                      legacySpanStyle.drawStyle
                  } else {
                      extras?.drawStyle ?: if (bits and HAS_DRAW_STYLE != 0) Fill else null
                  }

          internal val hasFontStyle: Boolean
              get() =
compose:
  id: live-androidx-ui-ui-text-ui-text-spanstyle
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1006
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1006–1040)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1006-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1041
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1041–1075)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1041-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-106
      title: androidx.compose.ui.text SpanStyle.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1076
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1076–1110)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1076-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1111
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1111–1145)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1111-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1146
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1146–1180)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1146-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1181
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1181–1215)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1181-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1216
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1216–1250)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1216-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1251
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1251–1285)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1251-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1286
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1286–1320)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1286-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1321
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1321–1355)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1321-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1356
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1356–1390)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1356-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1391
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1391–1425)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1391-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-141
      title: androidx.compose.ui.text SpanStyle.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1426
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1426–1460)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1426-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1461
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1461–1495)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1461-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1496
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1496–1530)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1496-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1531
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1531–1565)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1531-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1566
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1566–1600)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1566-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1601
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1601–1635)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1601-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1636
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1636–1670)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1636-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1671
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1671–1705)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1671-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1706
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1706–1740)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1706-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1741
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1741–1775)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1741-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-176
      title: androidx.compose.ui.text SpanStyle.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1776
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1776–1810)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1776-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1811
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1811–1845)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1811-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1846
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1846–1880)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1846-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1881
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1881–1915)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1881-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1916
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1916–1950)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1916-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1951
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1951–1985)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1951-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-1986
      title: androidx.compose.ui.text SpanStyle.kt source (lines 1986–2020)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-1986-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2021
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2021–2055)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2021-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2056
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2056–2090)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2056-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2091
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2091–2125)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2091-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-211
      title: androidx.compose.ui.text SpanStyle.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2126
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2126–2160)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2126-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2161
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2161–2195)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2161-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2196
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2196–2230)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2196-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2231
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2231–2265)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2231-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2266
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2266–2300)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2266-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2301
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2301–2335)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2301-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2336
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2336–2370)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2336-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2371
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2371–2405)
      aliases:
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2371-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2406
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2406–2440)
      aliases:
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2406-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2441
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2441–2475)
      aliases:
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2441-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-246
      title: androidx.compose.ui.text SpanStyle.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-2476
      title: androidx.compose.ui.text SpanStyle.kt source (lines 2476–2485)
      aliases:
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-2476-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-281
      title: androidx.compose.ui.text SpanStyle.kt source (lines 281–305)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-306
      title: androidx.compose.ui.text SpanStyle.kt source (lines 306–340)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-306-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-341
      title: androidx.compose.ui.text SpanStyle.kt source (lines 341–375)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-341-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-36
      title: androidx.compose.ui.text SpanStyle.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-376
      title: androidx.compose.ui.text SpanStyle.kt source (lines 376–410)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-376-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-411
      title: androidx.compose.ui.text SpanStyle.kt source (lines 411–445)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-411-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-446
      title: androidx.compose.ui.text SpanStyle.kt source (lines 446–480)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-446-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-481
      title: androidx.compose.ui.text SpanStyle.kt source (lines 481–515)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-481-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-516
      title: androidx.compose.ui.text SpanStyle.kt source (lines 516–550)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-516-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-551
      title: androidx.compose.ui.text SpanStyle.kt source (lines 551–585)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-551-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-586
      title: androidx.compose.ui.text SpanStyle.kt source (lines 586–620)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-586-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-621
      title: androidx.compose.ui.text SpanStyle.kt source (lines 621–655)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-621-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-656
      title: androidx.compose.ui.text SpanStyle.kt source (lines 656–690)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-656-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-691
      title: androidx.compose.ui.text SpanStyle.kt source (lines 691–725)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-691-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-71
      title: androidx.compose.ui.text SpanStyle.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-726
      title: androidx.compose.ui.text SpanStyle.kt source (lines 726–760)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-726-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-761
      title: androidx.compose.ui.text SpanStyle.kt source (lines 761–795)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-761-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-796
      title: androidx.compose.ui.text SpanStyle.kt source (lines 796–830)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-796-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-831
      title: androidx.compose.ui.text SpanStyle.kt source (lines 831–865)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-831-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-866
      title: androidx.compose.ui.text SpanStyle.kt source (lines 866–900)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-866-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-901
      title: androidx.compose.ui.text SpanStyle.kt source (lines 901–935)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-901-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-936
      title: androidx.compose.ui.text SpanStyle.kt source (lines 936–970)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-936-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-971
      title: androidx.compose.ui.text SpanStyle.kt source (lines 971–1005)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-971-source
      relatedIds: []
---

# androidx.compose.ui.text SpanStyle.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt

## androidx.compose.ui.text SpanStyle.kt source (lines 1–35)

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

package androidx.compose.ui.text

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.drawscope.DrawStyle
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.isSpecified
import androidx.compose.ui.graphics.isUnspecified
import androidx.compose.ui.graphics.lerp
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontSynthesis
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.font.lerp
import androidx.compose.ui.text.intl.LocaleList

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1006–1040)

            if (legacySpanStyle != null) {
                legacySpanStyle.fontStyle != null
            } else {
                bits and HAS_FONT_STYLE != 0
            }

    internal val hasFontSynthesis: Boolean
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.fontSynthesis != null
            } else {
                bits and FONT_SYNTHESIS_MASK != 0
            }

    internal fun copyFontAttributes(): SpanStyle {
        if (legacySpanStyle != null) {
            return SpanStyle(
                LegacySpanStyle(
                    fontFamily = legacySpanStyle.fontFamily,
                    fontWeight = legacySpanStyle.fontWeight,
                    fontStyle = legacySpanStyle.fontStyle,
                    fontSynthesis = legacySpanStyle.fontSynthesis,
                )
            )
        }
        return SpanStyle(
            colorXor = 0L,
            bits = bits and (FONT_STYLE_MASK or FONT_SYNTHESIS_MASK),
            extras = null,
            fontSize = TextUnit.Unspecified,
            letterSpacing = TextUnit.Unspecified,
            fontWeight = fontWeight,
            fontFamily = fontFamily,
        )
    }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1006-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1041–1075)


    internal val hasTextDecoration: Boolean
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.textDecoration != null
            } else {
                bits and TEXT_DECORATION_MASK != 0
            }

    internal val hasTextGeometricTransform: Boolean
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.textGeometricTransform != null
            } else {
                bits and HAS_GEOMETRIC_TRANSFORM != 0
            }

    internal val hasBaselineShift: Boolean
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.baselineShift != null
            } else {
                bits and HAS_BASELINE_SHIFT != 0
            }

    /** True if a field that changes glyph size or spacing is set. */
    internal val hasMetricAffectingAttributes: Boolean
        get() {
            if (legacySpanStyle != null) return legacySpanStyle.hasMetricAffectingAttributes()
            if (
                bits and METRIC_BITS != 0 ||
                    fontSize.isSpecified ||
                    letterSpacing.isSpecified ||
                    fontWeight != null ||
                    fontFamily != null

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1041-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 106–140)

 * @param baselineShift Vertical text baseline offset, or null if unset.
 * @param textGeometricTransform Geometric transformation (horizontal scale and skew) for text.
 * @param localeList Locale list for text rendering, or null if unset.
 * @param background Background color behind the text characters.
 * @param shadow Blur and offset shadow effect drawn behind text, or null if unset.
 * @param drawStyle Stroke or fill drawing configuration, or null if unset.
 * @param platformStyle Platform-specific span styling configuration, or null if unset.
 */
@Immutable
internal class SpanStyleExtras(
    @JvmField val brush: Brush?,
    @JvmField val alpha: Float,
    @JvmField val fontFeatureSettings: String?,
    val baselineShift: BaselineShift?,
    @JvmField val textGeometricTransform: TextGeometricTransform?,
    @JvmField val localeList: LocaleList?,
    val background: Color,
    @JvmField val shadow: Shadow?,
    @JvmField val drawStyle: DrawStyle?,
    @JvmField val platformStyle: PlatformSpanStyle? = null,
) {
    /**
     * Checks if this instance's extra attributes match the given parameter values.
     *
     * Reference comparison (`===`) is used for heap objects ([brush], [fontFeatureSettings],
     * [textGeometricTransform], [localeList], [shadow], [drawStyle], and [platformStyle]). Value
     * equality is used for value classes ([baselineShift] and [background]), and [Float.compareTo]
     * for [alpha].
     *
     * Returns `true` when all attributes match, allowing callers to reuse this instance and avoid
     * allocating a new [SpanStyleExtras] object.
     */
    fun matches(
        brush: Brush?,
        alpha: Float,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1076–1110)

            ) {
                return true
            }
            val extras = extras ?: return false
            val shift = extras.baselineShift
            return extras.localeList != null || (shift != null && shift.isApplicable)
        }

    @Suppress("NOTHING_TO_INLINE")
    internal inline fun isPackedDefault(): Boolean =
        colorXor == 0L &&
            bits == 0 &&
            fontSize.isUnspecified &&
            letterSpacing.isUnspecified &&
            fontWeight == null &&
            fontFamily == null

    internal fun isDefault(): Boolean {
        if (legacySpanStyle != null) {
            return legacySpanStyle === DefaultLegacySpanStyle ||
                legacySpanStyle == DefaultLegacySpanStyle
        }
        return isPackedDefault()
    }

    /**
     * Returns a new span style that is a combination of this style and the given [other] style.
     *
     * [other] span style's null or inherit properties are replaced with the non-null properties of
     * this span style. Another way to think of it is that the "missing" properties of the [other]
     * style are _filled_ by the properties of this style.
     *
     * If the given span style is null, returns this span style.
     *
     * @param other style to merge

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1076-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1111–1145)

     */
    @Stable
    public fun merge(other: SpanStyle? = null): SpanStyle {
        if (other == null || other === this) return this
        if (legacySpanStyle != null) return mergeLegacy(other)
        if (other.isPackedDefault()) return this
        if (isPackedDefault()) return other
        val thisBits = bits
        val otherBits = other.bits
        var colorXor = mergeSpanColorXor(colorXor, other.colorXor)
        val bits = mergeSpanBits(thisBits, otherBits)
        val fontSize = if (other.fontSize.isSpecified) other.fontSize else fontSize
        val letterSpacing =
            if (other.letterSpacing.isSpecified) other.letterSpacing else letterSpacing
        val fontWeight = other.fontWeight ?: fontWeight
        val fontFamily = other.fontFamily ?: fontFamily
        val thisExtras = extras
        val otherExtras = other.extras
        var extras: SpanStyleExtras? = null
        if ((thisBits or otherBits) and SPAN_HAS_EXTRAS != 0) {
            // A field set in `other` wins, even when its value is a preset that needs no extras.
            val thisBrush = thisExtras?.brush
            val otherBrush = otherExtras?.brush
            // Like TextForegroundStyle.merge (b/230787077): a color never replaces a brush.
            val brush = otherBrush ?: thisBrush
            val alpha =
                when {
                    otherBrush != null && !otherExtras.alpha.isNaN() -> otherExtras.alpha
                    thisBrush != null -> thisExtras.alpha
                    else -> Float.NaN
                }
            if (brush != null) colorXor = 0L
            val fontFeatureSettings =
                if (otherBits and HAS_FONT_FEATURES != 0) otherExtras?.fontFeatureSettings
                else thisExtras?.fontFeatureSettings

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1111-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1146–1180)

            val baselineShift =
                if (otherBits and HAS_BASELINE_SHIFT != 0) otherExtras?.baselineShift
                else thisExtras?.baselineShift
            val textGeometricTransform =
                if (otherBits and HAS_GEOMETRIC_TRANSFORM != 0) {
                    otherExtras?.textGeometricTransform
                } else {
                    thisExtras?.textGeometricTransform
                }
            val localeList = otherExtras?.localeList ?: thisExtras?.localeList
            val backgroundSource =
                if (otherBits and HAS_BACKGROUND != 0) otherExtras else thisExtras
            // Not `?.background`: a nullable Color would be boxed.
            val background =
                if (backgroundSource == null) Color.Unspecified else backgroundSource.background
            val shadow =
                if (otherBits and HAS_SHADOW != 0) otherExtras?.shadow else thisExtras?.shadow
            val drawStyle =
                if (otherBits and HAS_DRAW_STYLE != 0) otherExtras?.drawStyle
                else thisExtras?.drawStyle
            val platformStyle =
                mergeNormalizedPlatformStyle(
                    thisBits,
                    thisExtras?.platformStyle,
                    otherBits,
                    otherExtras?.platformStyle,
                )
            extras =
                when {
                    thisExtras != null &&
                        thisExtras.matches(
                            brush,
                            alpha,
                            fontFeatureSettings,
                            baselineShift,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1146-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1181–1215)

                            textGeometricTransform,
                            localeList,
                            background,
                            shadow,
                            drawStyle,
                            platformStyle,
                        ) -> thisExtras
                    otherExtras != null &&
                        otherExtras.matches(
                            brush,
                            alpha,
                            fontFeatureSettings,
                            baselineShift,
                            textGeometricTransform,
                            localeList,
                            background,
                            shadow,
                            drawStyle,
                            platformStyle,
                        ) -> otherExtras
                    else ->
                        createSpanStyleExtras(
                            brush,
                            alpha,
                            fontFeatureSettings,
                            baselineShift,
                            textGeometricTransform,
                            localeList,
                            background,
                            shadow,
                            drawStyle,
                            platformStyle,
                        )
                }
        }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1181-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1216–1250)

        if (sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
            return this
        }
        if (other.sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
            return other
        }
        return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
    }

    private fun mergeLegacy(other: SpanStyle): SpanStyle {
        val legacy = legacySpanStyle!!
        val mergedLegacy = legacy.merge(other.legacySpanStyle)
        if (mergedLegacy === legacy) return this
        if (mergedLegacy === other.legacySpanStyle) return other
        return SpanStyle(mergedLegacy)
    }

    /**
     * Merges raw [SpanStyle] arguments onto `this`.
     *
     * A color-only merge, the common case from `TextStyle.merge(color = ...)`, makes at most one
     * object.
     */
    internal fun fastMerge(
        color: Color,
        brush: Brush?,
        alpha: Float,
        fontSize: TextUnit,
        fontWeight: FontWeight?,
        fontStyle: FontStyle?,
        fontSynthesis: FontSynthesis?,
        fontFamily: FontFamily?,
        fontFeatureSettings: String?,
        letterSpacing: TextUnit,
        baselineShift: BaselineShift?,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1216-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1251–1285)

        textGeometricTransform: TextGeometricTransform?,
        localeList: LocaleList?,
        background: Color,
        textDecoration: TextDecoration?,
        shadow: Shadow?,
        platformStyle: PlatformSpanStyle?,
        drawStyle: DrawStyle?,
    ): SpanStyle {
        if (legacySpanStyle != null) {
            return fastMergeLegacy(
                color,
                brush,
                alpha,
                fontSize,
                fontWeight,
                fontStyle,
                fontSynthesis,
                fontFamily,
                fontFeatureSettings,
                letterSpacing,
                baselineShift,
                textGeometricTransform,
                localeList,
                background,
                textDecoration,
                shadow,
                platformStyle,
                drawStyle,
            )
        }
        // prioritize the parameters to Text in diffs here
        /**
         * color: Color fontSize: TextUnit fontStyle: FontStyle? fontWeight: FontWeight? fontFamily:
         * FontFamily? letterSpacing: TextUnit textDecoration: TextDecoration? textAlign: TextAlign?
         * lineHeight: TextUnit

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1251-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1286–1320)

         */
        // any new vals should do a pre-merge check here
        // ref check for font-family, since we don't want to compare lists in fast path
        // then compare the remaining params, for potential non-Text merges
        // Fast path for callers (such as BasicText / Material Text) that only override `color`
        // (or pass all default/unspecified span arguments). Avoids running the full 10-field
        // bit-pack, mask expansion, and extras merge when no other span property is set.
        val onlyColorMayChange =
            brush == null &&
                fontSize.isUnspecified &&
                fontWeight == null &&
                fontStyle == null &&
                fontSynthesis == null &&
                fontFamily == null &&
                fontFeatureSettings == null &&
                letterSpacing.isUnspecified &&
                baselineShift == null &&
                textGeometricTransform == null &&
                localeList == null &&
                background.isUnspecified &&
                textDecoration == null &&
                shadow == null &&
                platformStyle == null &&
                drawStyle == null
        if (onlyColorMayChange) {
            val otherColorXor = packSpanColorXor(color)
            if (otherColorXor == 0L || otherColorXor == colorXor || extras?.brush != null) {
                return this
            }
            return SpanStyle(
                otherColorXor,
                bits,
                extras,
                this.fontSize,
                this.letterSpacing,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1286-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1321–1355)

                this.fontWeight,
                this.fontFamily,
            )
        }
        val otherColorXor =
            when (brush) {
                null -> packSpanColorXor(color)
                is SolidColor -> packSpanColorXor(brush.value.modulate(alpha))
                else -> 0L
            }
        val shaderBrush = if (brush is SolidColor) null else brush
        val otherBits =
            packSpanStyleBits(
                fontStyle,
                fontSynthesis,
                fontFeatureSettings,
                textGeometricTransform,
                background,
                textDecoration,
                shadow,
                platformStyle,
                drawStyle,
                baselineShift,
            )
        val thisBits = this.bits
        val extras =
            if (
                (thisBits or otherBits) and (SPAN_HAS_EXTRAS or ONE_BIT_FIELDS) == 0 &&
                    shaderBrush == null &&
                    localeList == null
            ) {
                null
            } else {
                mergeSpanStyleExtras(
                    this.extras,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1321-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1356–1390)

                    shaderBrush,
                    alpha,
                    fontFeatureSettings,
                    baselineShift,
                    textGeometricTransform,
                    localeList,
                    background,
                    shadow,
                    drawStyle,
                    platformStyle,
                    thisBits,
                )
            }
        val colorXor =
            if (extras?.brush != null) 0L else mergeSpanColorXor(this.colorXor, otherColorXor)
        val bits = mergeSpanBits(thisBits, otherBits)
        val mergedFontSize = if (fontSize.isSpecified) fontSize else this.fontSize
        val mergedLetterSpacing =
            if (letterSpacing.isSpecified) letterSpacing else this.letterSpacing
        val mergedFontWeight = fontWeight ?: this.fontWeight
        val mergedFontFamily = fontFamily ?: this.fontFamily
        if (
            sameAs(
                colorXor,
                bits,
                extras,
                mergedFontSize,
                mergedLetterSpacing,
                mergedFontWeight,
                mergedFontFamily,
            )
        ) {
            // we're done
            return this
        }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1356-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1391–1425)

        return SpanStyle(
            colorXor,
            bits,
            extras,
            mergedFontSize,
            mergedLetterSpacing,
            mergedFontWeight,
            mergedFontFamily,
        )
    }

    private fun fastMergeLegacy(
        color: Color,
        brush: Brush?,
        alpha: Float,
        fontSize: TextUnit,
        fontWeight: FontWeight?,
        fontStyle: FontStyle?,
        fontSynthesis: FontSynthesis?,
        fontFamily: FontFamily?,
        fontFeatureSettings: String?,
        letterSpacing: TextUnit,
        baselineShift: BaselineShift?,
        textGeometricTransform: TextGeometricTransform?,
        localeList: LocaleList?,
        background: Color,
        textDecoration: TextDecoration?,
        shadow: Shadow?,
        platformStyle: PlatformSpanStyle?,
        drawStyle: DrawStyle?,
    ): SpanStyle {
        val legacy = legacySpanStyle!!
        val merged =
            legacy.fastMerge(
                color = color,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1391-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 141–175)

        fontFeatureSettings: String?,
        baselineShift: BaselineShift?,
        textGeometricTransform: TextGeometricTransform?,
        localeList: LocaleList?,
        background: Color,
        shadow: Shadow?,
        drawStyle: DrawStyle?,
        platformStyle: PlatformSpanStyle? = null,
    ): Boolean =
        this.brush === brush &&
            this.alpha.compareTo(alpha) == 0 &&
            this.fontFeatureSettings === fontFeatureSettings &&
            this.baselineShift == baselineShift &&
            this.textGeometricTransform === textGeometricTransform &&
            this.localeList === localeList &&
            this.background.value == background.value &&
            this.shadow === shadow &&
            this.drawStyle === drawStyle &&
            this.platformStyle === platformStyle

    /**
     * Checks if the layout-affecting attributes ([fontFeatureSettings], [baselineShift],
     * [textGeometricTransform], [localeList], [background], and [platformStyle]) match between this
     * instance and [other].
     *
     * If [other] is null, checks that all layout-affecting attributes in this instance are unset.
     */
    fun hasSameLayoutAttributes(other: SpanStyleExtras?): Boolean =
        if (other == null) {
            fontFeatureSettings == null &&
                baselineShift == null &&
                textGeometricTransform == null &&
                localeList == null &&
                background.isUnspecified &&
                platformStyle == null

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1426–1460)

                brush = brush,
                alpha = alpha,
                fontSize = fontSize,
                fontWeight = fontWeight,
                fontStyle = fontStyle,
                fontSynthesis = fontSynthesis,
                fontFamily = fontFamily,
                fontFeatureSettings = fontFeatureSettings,
                letterSpacing = letterSpacing,
                baselineShift = baselineShift,
                textGeometricTransform = textGeometricTransform,
                localeList = localeList,
                background = background,
                textDecoration = textDecoration,
                shadow = shadow,
                platformStyle = platformStyle,
                drawStyle = drawStyle,
            )
        return if (merged === legacy) this else SpanStyle(merged)
    }

    /**
     * Returns a [SpanStyle] with all unset (`null` or `Unspecified`) fields set to their layout and
     * draw defaults (see [resolveSpanStyleDefaults]). Returns `this` if all fields are set.
     */
    internal fun withResolvedDefaults(): SpanStyle {
        if (legacySpanStyle != null) {
            return SpanStyle(resolveLegacySpanStyleDefaults(legacySpanStyle))
        }
        var extras = extras
        val shift = extras?.baselineShift
        if (shift != null && shift.multiplier.isNaN()) {
            // BaselineShift.Unspecified resolves to None, which the bits hold on their own.
            extras =
                createSpanStyleExtras(

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1426-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1461–1495)

                    extras.brush,
                    extras.alpha,
                    extras.fontFeatureSettings,
                    /* baselineShift = */ null,
                    extras.textGeometricTransform,
                    extras.localeList,
                    extras.background,
                    extras.shadow,
                    extras.drawStyle,
                    extras.platformStyle,
                )
        }
        val colorXor = if (colorXor != 0L || extras?.brush != null) colorXor else DEFAULT_COLOR_XOR
        val bits = resolveSpanBits(bits)
        val fontSize = if (fontSize.isUnspecified) DefaultFontSize else fontSize
        val letterSpacing = if (letterSpacing.isUnspecified) DefaultLetterSpacing else letterSpacing
        val fontWeight = fontWeight ?: FontWeight.Normal
        val fontFamily = fontFamily ?: FontFamily.Default
        if (sameAs(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)) {
            return this
        }
        return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
    }

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: SpanStyle): SpanStyle = this.merge(other)

    @Deprecated(
        "SpanStyle copy constructors that do not take new stable parameters " +
            "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.color,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1461-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1496–1530)

        fontSize: TextUnit = this.fontSize,
        fontWeight: FontWeight? = this.fontWeight,
        fontStyle: FontStyle? = this.fontStyle,
        fontSynthesis: FontSynthesis? = this.fontSynthesis,
        fontFamily: FontFamily? = this.fontFamily,
        fontFeatureSettings: String? = this.fontFeatureSettings,
        letterSpacing: TextUnit = this.letterSpacing,
        baselineShift: BaselineShift? = this.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
        localeList: LocaleList? = this.localeList,
        background: Color = this.background,
        textDecoration: TextDecoration? = this.textDecoration,
        shadow: Shadow? = this.shadow,
    ): SpanStyle {
        return copy(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,
            letterSpacing = letterSpacing,
            baselineShift = baselineShift,
            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,
            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = this.platformStyle,
            drawStyle = this.drawStyle,
        )
    }

    @Deprecated(

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1496-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1531–1565)

        "SpanStyle copy constructors that do not take new stable parameters " +
            "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.color,
        fontSize: TextUnit = this.fontSize,
        fontWeight: FontWeight? = this.fontWeight,
        fontStyle: FontStyle? = this.fontStyle,
        fontSynthesis: FontSynthesis? = this.fontSynthesis,
        fontFamily: FontFamily? = this.fontFamily,
        fontFeatureSettings: String? = this.fontFeatureSettings,
        letterSpacing: TextUnit = this.letterSpacing,
        baselineShift: BaselineShift? = this.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
        localeList: LocaleList? = this.localeList,
        background: Color = this.background,
        textDecoration: TextDecoration? = this.textDecoration,
        shadow: Shadow? = this.shadow,
        platformStyle: PlatformSpanStyle? = this.platformStyle,
    ): SpanStyle {
        return copy(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,
            letterSpacing = letterSpacing,
            baselineShift = baselineShift,
            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1531-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1566–1600)

            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = platformStyle,
            drawStyle = this.drawStyle,
        )
    }

    public fun copy(
        color: Color = this.color,
        fontSize: TextUnit = this.fontSize,
        fontWeight: FontWeight? = this.fontWeight,
        fontStyle: FontStyle? = this.fontStyle,
        fontSynthesis: FontSynthesis? = this.fontSynthesis,
        fontFamily: FontFamily? = this.fontFamily,
        fontFeatureSettings: String? = this.fontFeatureSettings,
        letterSpacing: TextUnit = this.letterSpacing,
        baselineShift: BaselineShift? = this.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
        localeList: LocaleList? = this.localeList,
        background: Color = this.background,
        textDecoration: TextDecoration? = this.textDecoration,
        shadow: Shadow? = this.shadow,
        platformStyle: PlatformSpanStyle? = this.platformStyle,
        drawStyle: DrawStyle? = this.drawStyle,
    ): SpanStyle {
        if (legacySpanStyle != null) {
            return SpanStyle(
                legacySpanStyle.copy(
                    color = color,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1566-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1601–1635)

                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,
                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,
                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle,
                    drawStyle = drawStyle,
                )
            )
        }
        val extras = extras
        val keepBrush = extras?.brush != null && color == this.color
        return createSpanStyle(
            color = color,
            brush = if (keepBrush) extras.brush else null,
            alpha = if (keepBrush) extras.alpha else Float.NaN,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,
            letterSpacing = letterSpacing,
            baselineShift = baselineShift,
            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,
            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = platformStyle,
            drawStyle = drawStyle,
        )
    }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1601-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1636–1670)


    public fun copy(
        brush: Brush?,
        alpha: Float = this.alpha,
        fontSize: TextUnit = this.fontSize,
        fontWeight: FontWeight? = this.fontWeight,
        fontStyle: FontStyle? = this.fontStyle,
        fontSynthesis: FontSynthesis? = this.fontSynthesis,
        fontFamily: FontFamily? = this.fontFamily,
        fontFeatureSettings: String? = this.fontFeatureSettings,
        letterSpacing: TextUnit = this.letterSpacing,
        baselineShift: BaselineShift? = this.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.textGeometricTransform,
        localeList: LocaleList? = this.localeList,
        background: Color = this.background,
        textDecoration: TextDecoration? = this.textDecoration,
        shadow: Shadow? = this.shadow,
        platformStyle: PlatformSpanStyle? = this.platformStyle,
        drawStyle: DrawStyle? = this.drawStyle,
    ): SpanStyle {
        if (legacySpanStyle != null) {
            return SpanStyle(
                legacySpanStyle.copy(
                    brush = brush,
                    alpha = alpha,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,
                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,
                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1636-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1671–1705)

                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle,
                    drawStyle = drawStyle,
                )
            )
        }
        return createSpanStyle(
            color = Color.Unspecified,
            brush = brush,
            alpha = alpha,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,
            letterSpacing = letterSpacing,
            baselineShift = baselineShift,
            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,
            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = platformStyle,
            drawStyle = drawStyle,
        )
    }

    public override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SpanStyle) return false
        return hasSameLayoutAffectingAttributes(other) && hasSameNonLayoutAttributes(other)
    }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1671-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1706–1740)


    internal fun hasSameLayoutAffectingAttributes(other: SpanStyle): Boolean {
        if (this === other) return true
        if (legacySpanStyle != null) {
            return legacySpanStyle.hasSameLayoutAffectingAttributes(other.legacySpanStyle!!)
        }
        if ((bits xor other.bits) and LAYOUT_BITS != 0) return false
        if (fontSize != other.fontSize || letterSpacing != other.letterSpacing) return false
        if (fontWeight != other.fontWeight || fontFamily != other.fontFamily) return false
        val thisExtras = extras
        val otherExtras = other.extras
        if (thisExtras === otherExtras) return true
        return thisExtras?.hasSameLayoutAttributes(otherExtras)
            ?: otherExtras!!.hasSameLayoutAttributes(/* other= */ null)
    }

    internal fun hasSameNonLayoutAttributes(other: SpanStyle): Boolean {
        if (legacySpanStyle != null) {
            return legacySpanStyle.hasSameNonLayoutAttributes(other.legacySpanStyle!!)
        }
        if (colorXor != other.colorXor) return false
        if ((bits xor other.bits) and NON_LAYOUT_BITS != 0) return false
        val thisExtras = extras
        val otherExtras = other.extras
        if (thisExtras === otherExtras) return true
        return thisExtras?.hasSameNonLayoutAttributes(otherExtras)
            ?: otherExtras!!.hasSameNonLayoutAttributes(/* other= */ null)
    }

    public override fun hashCode(): Int {
        if (legacySpanStyle != null) return legacySpanStyle.hashCode()
        var result = mixLongHash(colorXor)
        result = 31 * result + (bits and NON_LAYOUT_BITS)
        result = 31 * result + hashCodeLayoutAffectingAttributes()
        result = 31 * result + (extras?.hashCodeNonLayoutAttributes() ?: 0)

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1706-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1741–1775)

        return murmurFinalize32(result)
    }

    internal fun hashCodeLayoutAffectingAttributes(): Int {
        if (legacySpanStyle != null) return legacySpanStyle.hashCodeLayoutAffectingAttributes()
        var result = bits and LAYOUT_BITS
        result = 31 * result + mixLongHash(fontSize)
        result = 31 * result + mixLongHash(letterSpacing)
        result = 31 * result + (fontWeight?.hashCode() ?: 0)
        result = 31 * result + (fontFamily?.hashCode() ?: 0)
        result = 31 * result + (extras?.hashCodeLayoutAffectingAttributes() ?: 0)
        return murmurFinalize32(result)
    }

    /**
     * Helper used by [merge], [fastMerge], and [withResolvedDefaults] to check if the new parts
     * match `this` (or `other`) before making a new [SpanStyle] object.
     *
     * Unlike [equals] (which checks two [SpanStyle] objects with `==`), [sameAs]:
     * 1. Takes raw parts so callers can reuse an old [SpanStyle] object without making a new one
     *    first.
     * 2. Clears bit 0 ([SPAN_HAS_EXTRAS]) on `this.bits`. [mergeSpanBits], [packSpanStyleBits], and
     *    [resolveSpanBits] return raw field bits with bit 0 cleared, while [SpanStyle] sets
     *    [SPAN_HAS_EXTRAS] when `extras != null`.
     * 3. Uses `===` on [extras], [fontWeight], and [fontFamily] since callers reuse old objects
     *    when their fields do not change.
     */
    private fun sameAs(
        colorXor: Long,
        bits: Int,
        extras: SpanStyleExtras?,
        fontSize: TextUnit,
        letterSpacing: TextUnit,
        fontWeight: FontWeight?,
        fontFamily: FontFamily?,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1741-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 176–210)

        } else {
            fontFeatureSettings == other.fontFeatureSettings &&
                baselineShift == other.baselineShift &&
                textGeometricTransform == other.textGeometricTransform &&
                localeList == other.localeList &&
                background == other.background &&
                platformStyle == other.platformStyle
        }

    /**
     * Checks if the non-layout (draw-only) attributes ([brush], [alpha], [shadow], and [drawStyle])
     * match between this instance and [other].
     *
     * If [other] is null, checks that all non-layout attributes in this instance are unset.
     */
    fun hasSameNonLayoutAttributes(other: SpanStyleExtras?): Boolean =
        if (other == null) {
            brush == null && shadow == null && drawStyle == null
        } else {
            brush == other.brush &&
                alpha.compareTo(other.alpha) == 0 &&
                shadow == other.shadow &&
                drawStyle == other.drawStyle
        }

    /**
     * Computes the combined hash code for all layout-affecting attributes in this extras container.
     */
    fun hashCodeLayoutAffectingAttributes(): Int {
        var result = fontFeatureSettings?.hashCode() ?: 0
        result = 31 * result + (baselineShift?.hashCode() ?: 0)
        result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
        result = 31 * result + (localeList?.hashCode() ?: 0)
        result = 31 * result + mixLongHash(packSpanColorXor(background))
        result = 31 * result + (platformStyle?.hashCode() ?: 0)

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1776–1810)

    ): Boolean =
        this.bits and SPAN_HAS_EXTRAS.inv() == bits &&
            this.colorXor == colorXor &&
            this.extras === extras &&
            this.fontSize == fontSize &&
            this.letterSpacing == letterSpacing &&
            this.fontWeight === fontWeight &&
            this.fontFamily === fontFamily

    public override fun toString(): String {
        if (legacySpanStyle != null) return legacySpanStyle.toString()
        return "SpanStyle(" +
            "color=$color, " +
            "brush=$brush, " +
            "alpha=$alpha, " +
            "fontSize=$fontSize, " +
            "fontWeight=$fontWeight, " +
            "fontStyle=$fontStyle, " +
            "fontSynthesis=$fontSynthesis, " +
            "fontFamily=$fontFamily, " +
            "fontFeatureSettings=$fontFeatureSettings, " +
            "letterSpacing=$letterSpacing, " +
            "baselineShift=$baselineShift, " +
            "textGeometricTransform=$textGeometricTransform, " +
            "localeList=$localeList, " +
            "background=$background, " +
            "textDecoration=$textDecoration, " +
            "shadow=$shadow, " +
            "platformStyle=$platformStyle, " +
            "drawStyle=$drawStyle" +
            ")"
    }
}

// SpanStyle.bits layout, low bit first. A zero field means "unset". Multi-bit fields in bits 3..8

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1776-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1811–1845)

// and 15..16 store an odd code, so their low bit doubles as "set", and merge builds their field
// mask with a single multiply.
//   0      has extras (matches `extras != null`)
//   1      baselineShift set; BaselineShift.None unless extras has one
//   3..5   fontSynthesis    (value shl 1) or 1, for None, Weight, Style, All
//   6..8   textDecoration   (mask shl 1) or 1, for None, Underline, LineThrough, both
//   9      platformStyle set; PlatformSpanStyle.Default unless extras has one
//   10     fontFeatureSettings set; "" unless extras has the string
//   11     textGeometricTransform set; None unless extras has one
//   12     background set; Transparent unless extras has a color
//   13     shadow set; Shadow.None unless extras has one
//   14     drawStyle set; Fill unless extras has one
//   15..16 fontStyle        (value shl 1) or 1, for Normal (0 -> 1) and Italic (1 -> 3)
private const val SPAN_HAS_EXTRAS = 1
private const val TWO_BIT_FIELD_MASK = 0x3
private const val THREE_BIT_FIELD_MASK = 0x7
private const val HAS_BASELINE_SHIFT = 1 shl 1
private const val FONT_SYNTHESIS_SHIFT = 3
private const val FONT_SYNTHESIS_MASK = THREE_BIT_FIELD_MASK shl FONT_SYNTHESIS_SHIFT
private const val FONT_SYNTHESIS_VALUE_BITS = 2
private const val FONT_SYNTHESIS_MAX_RAW = (1 shl FONT_SYNTHESIS_VALUE_BITS) - 1
private const val TEXT_DECORATION_SHIFT = 6
private const val TEXT_DECORATION_MASK = THREE_BIT_FIELD_MASK shl TEXT_DECORATION_SHIFT
private const val TEXT_DECORATION_VALUE_BITS = 2
private const val TEXT_DECORATION_MAX_RAW = (1 shl TEXT_DECORATION_VALUE_BITS) - 1
private const val HAS_PLATFORM_STYLE = 1 shl 9
private const val HAS_FONT_FEATURES = 1 shl 10
private const val HAS_GEOMETRIC_TRANSFORM = 1 shl 11
private const val HAS_BACKGROUND = 1 shl 12
private const val HAS_SHADOW = 1 shl 13
private const val HAS_DRAW_STYLE = 1 shl 14
private const val FONT_STYLE_SHIFT = 15
private const val FONT_STYLE_MASK = TWO_BIT_FIELD_MASK shl FONT_STYLE_SHIFT
private const val FONT_STYLE_VALUE_BITS = 1
private const val FONT_STYLE_MAX_RAW = (1 shl FONT_STYLE_VALUE_BITS) - 1

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1811-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1846–1880)

private const val HAS_FONT_STYLE = 1 shl FONT_STYLE_SHIFT
private const val FONT_STYLE_IS_ITALIC = 1 shl (FONT_STYLE_SHIFT + 1)

// Bits cleared by SpanStyleSaver because drawStyle and platformStyle are not persisted by Saver,
// and SPAN_HAS_EXTRAS is recomputed from extras != null on restore.
internal const val UNSAVED_SPAN_BITS = HAS_DRAW_STYLE or HAS_PLATFORM_STYLE or SPAN_HAS_EXTRAS

private const val TWO_BIT_LOW_BITS = 1 shl FONT_STYLE_SHIFT
private const val THREE_BIT_LOW_BITS = (1 shl FONT_SYNTHESIS_SHIFT) or (1 shl TEXT_DECORATION_SHIFT)
private const val ONE_BIT_FIELDS =
    HAS_BASELINE_SHIFT or
        HAS_PLATFORM_STYLE or
        HAS_FONT_FEATURES or
        HAS_GEOMETRIC_TRANSFORM or
        HAS_BACKGROUND or
        HAS_SHADOW or
        HAS_DRAW_STYLE
private const val NON_LAYOUT_BITS = TEXT_DECORATION_MASK or HAS_SHADOW or HAS_DRAW_STYLE
private const val LAYOUT_BITS = (NON_LAYOUT_BITS or SPAN_HAS_EXTRAS).inv()
private const val METRIC_BITS =
    FONT_STYLE_MASK or FONT_SYNTHESIS_MASK or HAS_FONT_FEATURES or HAS_GEOMETRIC_TRANSFORM

private const val UNSPECIFIED_COLOR_BITS = 0x10L
// Color.Black is 0xFF000000 in the top 32 bits.
private const val DEFAULT_COLOR_XOR = (0xFF00_0000L shl 32) xor UNSPECIFIED_COLOR_BITS

// Fails with `Division by zero` if FontStyle.MAX_FONT_STYLE_VALUE exceeds FONT_STYLE_MAX_RAW (1).
// Widen FONT_STYLE_VALUE_BITS and FONT_STYLE_MASK if a new FontStyle value is added.
@Suppress("unused")
private const val CHECK_FONT_STYLE_CAPACITY =
    1 / (1 - ((FONT_STYLE_MAX_RAW - FontStyle.MAX_FONT_STYLE_VALUE) ushr 31))

// Fails with `Division by zero` if FontSynthesis.MAX_FONT_SYNTHESIS_MASK exceeds
// FONT_SYNTHESIS_MAX_RAW (3).
// Widen FONT_SYNTHESIS_VALUE_BITS and FONT_SYNTHESIS_MASK if a new FontSynthesis flag is added.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1846-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1881–1915)

@Suppress("unused")
private const val CHECK_FONT_SYNTHESIS_CAPACITY =
    1 / (1 - ((FONT_SYNTHESIS_MAX_RAW - FontSynthesis.MAX_FONT_SYNTHESIS_MASK) ushr 31))

// Fails with `Division by zero` if TextDecoration.MAX_TEXT_DECORATION_MASK exceeds
// TEXT_DECORATION_MAX_RAW (3).
// Widen TEXT_DECORATION_VALUE_BITS and TEXT_DECORATION_MASK if a new TextDecoration flag is added.
@Suppress("unused")
private const val CHECK_TEXT_DECORATION_CAPACITY =
    1 / (1 - ((TEXT_DECORATION_MAX_RAW - TextDecoration.MAX_TEXT_DECORATION_MASK) ushr 31))

/**
 * Maps [color] into `SpanStyle.colorXor` form (`color.value.toLong() xor UNSPECIFIED_COLOR_BITS`).
 * `0L` means [Color.Unspecified] (unset), and any other `Long` is a set [Color] (such as
 * `Color.Transparent`, whose `0UL` bits map to `UNSPECIFIED_COLOR_BITS = 0x10L`).
 */
@Suppress("NOTHING_TO_INLINE")
internal inline fun packSpanColorXor(color: Color): Long =
    color.value.toLong() xor UNSPECIFIED_COLOR_BITS

/** Mixes a [TextUnit]'s type and raw float bits with [GOLDEN_RATIO_64] and folds to 32 bits. */
@Suppress("NOTHING_TO_INLINE")
internal inline fun mixLongHash(unit: TextUnit): Int {
    val type = if (unit.isSp) 1 else if (unit.isEm) 2 else 0
    return mixLongHash(packInts(type, unit.value.toRawBits()))
}

/**
 * Returns [other] when [other] is a set color (`other != 0L`). Returns [base] when [other] is unset
 * (`other == 0L`).
 */
@Suppress("NOTHING_TO_INLINE")
private inline fun mergeSpanColorXor(base: Long, other: Long): Long {
    // `(other or -other)` has sign bit 63 set iff `other != 0L`, so arithmetic `shr 63` produces
    // `-1L` (`0xFFFF_FFFF_FFFF_FFFFL`) when `other != 0L` and `0L` when `other == 0L`.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1881-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1916–1950)

    val mask = (other or -other) shr 63
    return (base and mask.inv()) or (other and mask)
}

/**
 * Merges [other] onto [base] across all packed [SpanStyle] fields in one SWAR pass:
 * - 2-bit odd-code field ([SpanStyle.fontStyle]): grabs low bit via [TWO_BIT_LOW_BITS] and scales
 *   by [TWO_BIT_FIELD_MASK] (`0x3` = `0b11`).
 * - 3-bit odd-code fields ([SpanStyle.fontSynthesis], [SpanStyle.textDecoration]): grabs low bits
 *   via [THREE_BIT_LOW_BITS] and scales by [THREE_BIT_FIELD_MASK] (`0x7` = `0b111`).
 * - 1-bit set flags ([ONE_BIT_FIELDS]): used as their own mask.
 */
@Suppress("NOTHING_TO_INLINE")
private inline fun mergeSpanBits(base: Int, other: Int): Int {
    val mask =
        ((other and TWO_BIT_LOW_BITS) * TWO_BIT_FIELD_MASK) or
            ((other and THREE_BIT_LOW_BITS) * THREE_BIT_FIELD_MASK) or
            (other and ONE_BIT_FIELDS)
    return ((base and mask.inv()) or (other and mask)) and SPAN_HAS_EXTRAS.inv()
}

/**
 * Resolves all unset fields in [bits] to their [resolveSpanStyleDefaults] defaults:
 * - All 1-bit preset flags except [HAS_PLATFORM_STYLE] become set (resolving unset fields to `""`,
 *   [BaselineShift.None], [TextGeometricTransform.None], [Color.Transparent], [Shadow.None], and
 *   [Fill]).
 * - [HAS_FONT_STYLE] is set, resolving an unset `0` (`0b00`) in bits `15..16` to [FontStyle.Normal]
 *   (`0b01`) while preserving [FontStyle.Italic] (`0b11`).
 * - Unset [SpanStyle.fontSynthesis] resolves to [FontSynthesis.All] (`0b111` at
 *   [FONT_SYNTHESIS_SHIFT]).
 * - Unset [SpanStyle.textDecoration] resolves to [TextDecoration.None] (`0b001` at
 *   [TEXT_DECORATION_SHIFT]).
 */
internal fun resolveSpanBits(bits: Int): Int {
    // platformStyle has no default, so it stays as it is. Unset fontStyle has bits 15..16 == 0,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1916-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1951–1985)

    // so setting HAS_FONT_STYLE resolves it to FontStyle.Normal (0b01) while preserving Italic
    // (0b11).
    var resolved =
        (bits and SPAN_HAS_EXTRAS.inv()) or
            (ONE_BIT_FIELDS and HAS_PLATFORM_STYLE.inv()) or
            HAS_FONT_STYLE
    if (bits and FONT_SYNTHESIS_MASK == 0) resolved = resolved or FONT_SYNTHESIS_MASK
    if (bits and TEXT_DECORATION_MASK == 0) resolved = resolved or (1 shl TEXT_DECORATION_SHIFT)
    return resolved
}

/**
 * Packs [SpanStyle] properties into the 32-bit `SpanStyle.bits` word (leaving bit 0 /
 * [SPAN_HAS_EXTRAS] as `0`).
 */
internal fun packSpanStyleBits(
    fontStyle: FontStyle?,
    fontSynthesis: FontSynthesis?,
    fontFeatureSettings: String?,
    textGeometricTransform: TextGeometricTransform?,
    background: Color,
    textDecoration: TextDecoration?,
    shadow: Shadow?,
    platformStyle: PlatformSpanStyle?,
    drawStyle: DrawStyle?,
    baselineShift: BaselineShift?,
): Int {
    var bits = 0
    // FontStyle.value is in 0..MAX_FONT_STYLE_VALUE (0 = Normal, 1 = Italic); validated by
    // FontStyle's constructor and locked at compile time by CHECK_FONT_STYLE_CAPACITY.
    if (fontStyle != null) {
        bits = (((fontStyle.value and FONT_STYLE_MAX_RAW) shl 1) or 1) shl FONT_STYLE_SHIFT
    }
    // FontSynthesis.value is in 0..MAX_FONT_SYNTHESIS_MASK (0b00..0b11); capacity is locked by
    // CHECK_FONT_SYNTHESIS_CAPACITY and tested by StyleDomainLockTest.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1951-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 1986–2020)

    if (fontSynthesis != null) {
        bits =
            bits or
                ((((fontSynthesis.value and FONT_SYNTHESIS_MAX_RAW) shl 1) or 1) shl
                    FONT_SYNTHESIS_SHIFT)
    }
    // TextDecoration.mask is in 0..MAX_TEXT_DECORATION_MASK (0b00..0b11); capacity is locked by
    // CHECK_TEXT_DECORATION_CAPACITY and tested by StyleDomainLockTest.
    if (textDecoration != null) {
        bits =
            bits or
                ((((textDecoration.mask and TEXT_DECORATION_MAX_RAW) shl 1) or 1) shl
                    TEXT_DECORATION_SHIFT)
    }
    if (platformStyle != null) bits = bits or HAS_PLATFORM_STYLE
    if (fontFeatureSettings != null) bits = bits or HAS_FONT_FEATURES
    if (textGeometricTransform != null) bits = bits or HAS_GEOMETRIC_TRANSFORM
    if (background.isSpecified) bits = bits or HAS_BACKGROUND
    if (shadow != null) bits = bits or HAS_SHADOW
    if (drawStyle != null) bits = bits or HAS_DRAW_STYLE
    if (baselineShift != null) bits = bits or HAS_BASELINE_SHIFT
    return bits
}

/**
 * Strips preset values from rare [SpanStyle] fields that live in `SpanStyle.bits` (`""`,
 * [BaselineShift.None] with `+0.0f` bits, [TextGeometricTransform.None], [Color.Transparent],
 * [Shadow.None], [Fill], [PlatformSpanStyle.Default]). Makes a [SpanStyleExtras] object only if a
 * custom field or [brush]/[localeList] remains.
 */
internal fun createSpanStyleExtras(
    brush: Brush?,
    alpha: Float,
    fontFeatureSettings: String?,
    baselineShift: BaselineShift?,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1986-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2021–2055)

    textGeometricTransform: TextGeometricTransform?,
    localeList: LocaleList?,
    background: Color,
    shadow: Shadow?,
    drawStyle: DrawStyle?,
    platformStyle: PlatformSpanStyle? = null,
): SpanStyleExtras? {
    val normalizedFontFeatures =
        if (fontFeatureSettings == null || fontFeatureSettings.isEmpty()) null
        else fontFeatureSettings
    val normalizedBaselineShift =
        if (baselineShift == null || baselineShift.multiplier.toRawBits() == 0) null
        else baselineShift
    val normalizedTransform =
        if (
            textGeometricTransform == null || textGeometricTransform == TextGeometricTransform.None
        ) {
            null
        } else {
            textGeometricTransform
        }
    val normalizedBackground =
        if (background == Color.Transparent) Color.Unspecified else background
    val normalizedShadow = if (shadow == null || shadow == Shadow.None) null else shadow
    val normalizedDrawStyle = if (drawStyle == null || drawStyle === Fill) null else drawStyle
    val normalizedPlatform =
        if (platformStyle == null || platformStyle == PlatformSpanStyle.Default) null
        else platformStyle
    if (
        brush == null &&
            normalizedFontFeatures == null &&
            normalizedBaselineShift == null &&
            normalizedTransform == null &&
            localeList == null &&
            normalizedBackground.isUnspecified &&

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2021-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2056–2090)

            normalizedShadow == null &&
            normalizedDrawStyle == null &&
            normalizedPlatform == null
    ) {
        return null
    }
    return SpanStyleExtras(
        brush,
        if (brush == null) Float.NaN else alpha,
        normalizedFontFeatures,
        normalizedBaselineShift,
        normalizedTransform,
        localeList,
        normalizedBackground,
        normalizedShadow,
        normalizedDrawStyle,
        normalizedPlatform,
    )
}

/**
 * Merges `this` and `other` [PlatformSpanStyle]s and normalizes [PlatformSpanStyle.Default] to
 * `null` for [SpanStyleExtras.platformStyle].
 */
private fun mergeNormalizedPlatformStyle(
    thisBits: Int,
    thisPlatformStyle: PlatformSpanStyle?,
    otherBits: Int,
    otherPlatformStyle: PlatformSpanStyle?,
): PlatformSpanStyle? {
    if (thisPlatformStyle == null && otherPlatformStyle == null) return null
    val base =
        thisPlatformStyle
            ?: if (thisBits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
    val other =

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2056-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2091–2125)

        otherPlatformStyle
            ?: if (otherBits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
    val merged = if (base == null) other else if (other == null) base else base.merge(other)
    return if (merged == null || merged == PlatformSpanStyle.Default) null else merged
}

/**
 * Merges rare [SpanStyle] fields onto [thisExtras]. Maps preset values to `null` or
 * [Color.Unspecified] and reuses [thisExtras] when all fields match.
 */
internal fun mergeSpanStyleExtras(
    thisExtras: SpanStyleExtras?,
    otherBrush: Brush?,
    otherAlpha: Float,
    fontFeatureSettings: String?,
    baselineShift: BaselineShift?,
    textGeometricTransform: TextGeometricTransform?,
    localeList: LocaleList?,
    background: Color,
    shadow: Shadow?,
    drawStyle: DrawStyle?,
    platformStyle: PlatformSpanStyle? = null,
    thisBits: Int = 0,
): SpanStyleExtras? {
    val thisBrush = thisExtras?.brush
    val brush = otherBrush ?: thisBrush
    val alpha =
        when {
            otherBrush != null && !otherAlpha.isNaN() -> otherAlpha
            thisBrush != null -> thisExtras.alpha
            else -> Float.NaN
        }
    val mergedFontFeatures =
        if (fontFeatureSettings == null) thisExtras?.fontFeatureSettings
        else if (fontFeatureSettings.isEmpty()) null else fontFeatureSettings

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2091-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 211–245)

        return result
    }

    /**
     * Computes the combined hash code for all non-layout (draw-only) attributes in this extras
     * container.
     */
    fun hashCodeNonLayoutAttributes(): Int {
        var result = brush?.hashCode() ?: 0
        result = 31 * result + if (brush != null) alpha.hashCode() else 0
        result = 31 * result + (shadow?.hashCode() ?: 0)
        result = 31 * result + (drawStyle?.hashCode() ?: 0)
        return result
    }

    /**
     * Checks structural equality between this extras container and [other] by comparing both layout
     * and non-layout attributes.
     */
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is SpanStyleExtras) return false
        return hasSameLayoutAttributes(other) && hasSameNonLayoutAttributes(other)
    }

    /** Returns a combined hash code mixing both layout and non-layout attribute hash values. */
    override fun hashCode(): Int =
        31 * hashCodeLayoutAffectingAttributes() + hashCodeNonLayoutAttributes()
}

/**
 * Styling configuration that applies at the character level.
 *
 * Use [SpanStyle] to configure character-level styles such as text color, font size, font family,
 * background color, and text decorations.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2126–2160)

    val mergedBaselineShift =
        if (baselineShift == null) thisExtras?.baselineShift
        else if (baselineShift.multiplier.toRawBits() == 0) null else baselineShift
    val mergedTransform =
        if (textGeometricTransform == null) thisExtras?.textGeometricTransform
        else if (textGeometricTransform == TextGeometricTransform.None) null
        else textGeometricTransform
    val mergedLocaleList = localeList ?: thisExtras?.localeList
    val mergedBackground =
        if (background.isSpecified) {
            if (background == Color.Transparent) Color.Unspecified else background
        } else if (thisExtras == null) {
            Color.Unspecified
        } else {
            thisExtras.background
        }
    val mergedShadow =
        if (shadow == null) thisExtras?.shadow else if (shadow == Shadow.None) null else shadow
    val mergedDrawStyle =
        if (drawStyle == null) thisExtras?.drawStyle
        else if (drawStyle === Fill) null else drawStyle
    val normalizedOtherPlatform =
        if (platformStyle == null || platformStyle == PlatformSpanStyle.Default) null
        else platformStyle
    val mergedPlatformStyle =
        mergeNormalizedPlatformStyle(
            thisBits,
            thisExtras?.platformStyle,
            if (platformStyle != null) HAS_PLATFORM_STYLE else 0,
            normalizedOtherPlatform,
        )
    if (
        thisExtras != null &&
            thisExtras.matches(
                brush,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2126-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2161–2195)

                alpha,
                mergedFontFeatures,
                mergedBaselineShift,
                mergedTransform,
                mergedLocaleList,
                mergedBackground,
                mergedShadow,
                mergedDrawStyle,
                mergedPlatformStyle,
            )
    ) {
        return thisExtras
    }
    if (
        brush == null &&
            mergedFontFeatures == null &&
            mergedBaselineShift == null &&
            mergedTransform == null &&
            mergedLocaleList == null &&
            mergedBackground.isUnspecified &&
            mergedShadow == null &&
            mergedDrawStyle == null &&
            mergedPlatformStyle == null
    ) {
        return null
    }
    return SpanStyleExtras(
        brush,
        if (brush == null) Float.NaN else alpha,
        mergedFontFeatures,
        mergedBaselineShift,
        mergedTransform,
        mergedLocaleList,
        mergedBackground,
        mergedShadow,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2161-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2196–2230)

        mergedDrawStyle,
        mergedPlatformStyle,
    )
}

/** Builds a [SpanStyle], or returns [BoxedStyleValues.DefaultSpanStyle] when nothing is set. */
internal fun createSpanStyle(
    color: Color = Color.Unspecified,
    brush: Brush? = null,
    alpha: Float = Float.NaN,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontWeight: FontWeight? = null,
    fontStyle: FontStyle? = null,
    fontSynthesis: FontSynthesis? = null,
    fontFamily: FontFamily? = null,
    fontFeatureSettings: String? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    baselineShift: BaselineShift? = null,
    textGeometricTransform: TextGeometricTransform? = null,
    localeList: LocaleList? = null,
    background: Color = Color.Unspecified,
    textDecoration: TextDecoration? = null,
    shadow: Shadow? = null,
    platformStyle: PlatformSpanStyle? = null,
    drawStyle: DrawStyle? = null,
): SpanStyle {
    if (!PackedTextStylesLatch.isEnabled) {
        return createLegacySpanStyle(
            color,
            brush,
            alpha,
            fontSize,
            fontWeight,
            fontStyle,
            fontSynthesis,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2196-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2231–2265)

            fontFamily,
            fontFeatureSettings,
            letterSpacing,
            baselineShift,
            textGeometricTransform,
            localeList,
            background,
            textDecoration,
            shadow,
            platformStyle,
            drawStyle,
        )
    }
    // A SolidColor brush is stored as a color, like TextForegroundStyle.from does.
    val colorXor =
        when (brush) {
            null -> packSpanColorXor(color)
            is SolidColor -> packSpanColorXor(brush.value.modulate(alpha))
            else -> 0L
        }
    val shaderBrush = if (brush is SolidColor) null else brush
    val bits =
        packSpanStyleBits(
            fontStyle,
            fontSynthesis,
            fontFeatureSettings,
            textGeometricTransform,
            background,
            textDecoration,
            shadow,
            platformStyle,
            drawStyle,
            baselineShift,
        )
    val extras =

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2231-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2266–2300)

        if (bits and ONE_BIT_FIELDS == 0 && shaderBrush == null && localeList == null) {
            null
        } else {
            createSpanStyleExtras(
                shaderBrush,
                alpha,
                fontFeatureSettings,
                baselineShift,
                textGeometricTransform,
                localeList,
                background,
                shadow,
                drawStyle,
                platformStyle,
            )
        }
    if (
        colorXor == 0L &&
            bits == 0 &&
            extras == null &&
            fontSize.isUnspecified &&
            letterSpacing.isUnspecified &&
            fontWeight == null &&
            fontFamily == null
    ) {
        return BoxedStyleValues.DefaultSpanStyle
    }
    return SpanStyle(colorXor, bits, extras, fontSize, letterSpacing, fontWeight, fontFamily)
}

private fun createLegacySpanStyle(
    color: Color,
    brush: Brush?,
    alpha: Float,
    fontSize: TextUnit,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2266-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2301–2335)

    fontWeight: FontWeight?,
    fontStyle: FontStyle?,
    fontSynthesis: FontSynthesis?,
    fontFamily: FontFamily?,
    fontFeatureSettings: String?,
    letterSpacing: TextUnit,
    baselineShift: BaselineShift?,
    textGeometricTransform: TextGeometricTransform?,
    localeList: LocaleList?,
    background: Color,
    textDecoration: TextDecoration?,
    shadow: Shadow?,
    platformStyle: PlatformSpanStyle?,
    drawStyle: DrawStyle?,
): SpanStyle =
    SpanStyle(
        if (brush != null) {
            LegacySpanStyle(
                brush = brush,
                alpha = alpha,
                fontSize = fontSize,
                fontWeight = fontWeight,
                fontStyle = fontStyle,
                fontSynthesis = fontSynthesis,
                fontFamily = fontFamily,
                fontFeatureSettings = fontFeatureSettings,
                letterSpacing = letterSpacing,
                baselineShift = baselineShift,
                textGeometricTransform = textGeometricTransform,
                localeList = localeList,
                background = background,
                textDecoration = textDecoration,
                shadow = shadow,
                platformStyle = platformStyle,
                drawStyle = drawStyle,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2301-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2336–2370)

            )
        } else {
            LegacySpanStyle(
                color = color,
                fontSize = fontSize,
                fontWeight = fontWeight,
                fontStyle = fontStyle,
                fontSynthesis = fontSynthesis,
                fontFamily = fontFamily,
                fontFeatureSettings = fontFeatureSettings,
                letterSpacing = letterSpacing,
                baselineShift = baselineShift,
                textGeometricTransform = textGeometricTransform,
                localeList = localeList,
                background = background,
                textDecoration = textDecoration,
                shadow = shadow,
                platformStyle = platformStyle,
                drawStyle = drawStyle,
            )
        }
    )

/** Fills in all unset fields. Reuses one object for the default style. */
internal fun resolveSpanStyleDefaults(style: SpanStyle): SpanStyle {
    if (style.legacySpanStyle != null) {
        return SpanStyle(resolveLegacySpanStyleDefaults(style.legacySpanStyle))
    }
    return if (style.isPackedDefault()) BoxedStyleValues.ResolvedDefaultSpanStyle
    else style.withResolvedDefaults()
}

/**
 * @param a An sp value. Maybe [TextUnit.Unspecified]
 * @param b An sp value. Maybe [TextUnit.Unspecified]

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2336-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2371–2405)

 */
internal fun lerpTextUnitInheritable(a: TextUnit, b: TextUnit, t: Float): TextUnit {
    // Not lerpDiscrete: a generic call would box both TextUnits.
    if (a.isUnspecified || b.isUnspecified) return if (t < 0.5f) a else b
    return lerp(a, b, t)
}

/**
 * Lerp between two values that cannot be transitioned. Returns [a] if [fraction] is smaller than
 * 0.5 otherwise [b].
 */
internal fun <T> lerpDiscrete(a: T, b: T, fraction: Float): T = if (fraction < 0.5) a else b

/**
 * Interpolate between two span styles.
 *
 * This will not work well if the styles don't set the same fields.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
 * meaning that the interpolation has finished, returning [stop] (or something equivalent to
 * [stop]), and values in between meaning that the interpolation is at the relevant point on the
 * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
 * negative values and values greater than 1.0 are valid.
 */
public fun lerp(start: SpanStyle, stop: SpanStyle, fraction: Float): SpanStyle {
    if (start.legacySpanStyle != null) {
        return SpanStyle(lerp(start.legacySpanStyle, stop.legacySpanStyle!!, fraction))
    }
    val startBrush = start.brush
    val stopBrush = stop.brush
    // Same rules as lerp(TextForegroundStyle): blend two colors, or blend the alpha of two
    // brushes, else jump from one to the other.
    val discreteStyleResolved = if (fraction < 0.5f) start else stop
    val startWeight = start.fontWeight ?: FontWeight.Normal

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2371-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2406–2440)

    val stopWeight = stop.fontWeight ?: FontWeight.Normal
    val startShift = start.baselineShiftOrNone
    val stopShift = stop.baselineShiftOrNone
    val startTransform = start.extras?.textGeometricTransform ?: TextGeometricTransform.None
    val stopTransform = stop.extras?.textGeometricTransform ?: TextGeometricTransform.None
    return createSpanStyle(
        color =
            if (startBrush == null && stopBrush == null) {
                lerp(start.color, stop.color, fraction)
            } else {
                discreteStyleResolved.color
            },
        brush = discreteStyleResolved.brush,
        alpha =
            if (startBrush != null && stopBrush != null) {
                lerp(start.alpha, stop.alpha, fraction)
            } else {
                discreteStyleResolved.alpha
            },
        fontSize = lerpTextUnitInheritable(start.fontSize, stop.fontSize, fraction),
        fontWeight =
            if (startWeight == stopWeight) startWeight else lerp(startWeight, stopWeight, fraction),
        fontStyle = discreteStyleResolved.fontStyle,
        fontSynthesis = discreteStyleResolved.fontSynthesis,
        fontFamily = discreteStyleResolved.fontFamily,
        fontFeatureSettings = discreteStyleResolved.fontFeatureSettings,
        letterSpacing = lerpTextUnitInheritable(start.letterSpacing, stop.letterSpacing, fraction),
        baselineShift =
            if (startShift == stopShift) {
                start.baselineShift ?: stop.baselineShift ?: BoxedStyleValues.NoneBaselineShift
            } else {
                lerp(startShift, stopShift, fraction)
            },
        textGeometricTransform =
            if (startTransform == stopTransform) {

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2406-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2441–2475)

                startTransform
            } else {
                lerp(startTransform, stopTransform, fraction)
            },
        localeList = discreteStyleResolved.localeList,
        background = lerp(start.background, stop.background, fraction),
        textDecoration = discreteStyleResolved.textDecoration,
        shadow = nullSafeLerp(start.shadow, stop.shadow, fraction),
        platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
        drawStyle = discreteStyleResolved.drawStyle,
    )
}

/**
 * Linearly interpolates between two [Shadow]s.
 *
 * If one of the shadows is null, it is treated as a transparent shadow. If both are null, null is
 * returned.
 */
internal fun nullSafeLerp(lhs: Shadow?, rhs: Shadow?, fraction: Float): Shadow? {
    if (lhs == null && rhs == null) {
        return null
    }
    if (lhs == null) {
        return lerp(rhs!!.dropAlpha(), rhs, fraction)
    }
    if (rhs == null) {
        return lerp(lhs, lhs.dropAlpha(), fraction)
    }
    return lerp(lhs, rhs, fraction)
}

private fun Shadow.dropAlpha(): Shadow = copy(color = color.copy(alpha = 0f))

private fun lerpPlatformStyle(

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2441-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 246–280)

 *
 * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
 *
 * @sample androidx.compose.ui.text.samples.SpanStyleSample
 * @sample androidx.compose.ui.text.samples.SpanStyleBrushSample
 * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
 * @see AnnotatedString
 * @see TextStyle
 * @see ParagraphStyle
 */
@Immutable
public class SpanStyle : AnnotatedString.Annotation {
    // The fill to draw text, a unified representation of Color and Brush.
    /**
     * Text [Color] stored as `color.value.toLong() xor UNSPECIFIED_COLOR_BITS`. [Color.Unspecified]
     * (`0x10UL`) maps to `0L`, and `mergeSpanColorXor` checks for a set color via `(other or
     * -other) shr 63`. When [brush] is a `ShaderBrush`, [colorXor] is `0L`.
     */
    @JvmField internal val colorXor: Long

    /**
     * 32-bit packed word for [SpanStyle] enum, bitmask, flag, and preset fields.
     *
     * ### Bit Layout (`bits 0..31`, LSB first)
     *
     * ```
     *  31                    17 16   15  14  13  12  11  10   9 8      6 5      3   2   1   0
     * +------------------------+-------+---+---+---+---+---+---+--------+--------+---+---+---+
     * |      unused (0)        |fontSty|drw|shd|bg |tgt|ffs|plt|textDeco|fontSynt| - |bs |ext|
     * +------------------------+-------+---+---+---+---+---+---+--------+--------+---+---+---+
     *  <------- 15 bits ------> 2 bits   1   1   1   1   1   1   3 bits   3 bits   1   1   1
     *                           <-2b-->                         <- 3b -> <- 3b ->
     * ```
     *
     * |Bits    |Width|Field / Meaning                                                                              |

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 2476–2485)

    start: PlatformSpanStyle?,
    stop: PlatformSpanStyle?,
    fraction: Float,
): PlatformSpanStyle? {
    if (start == null && stop == null) return null
    val startNonNull = start ?: PlatformSpanStyle.Default
    val stopNonNull = stop ?: PlatformSpanStyle.Default
    return lerp(startNonNull, stopNonNull, fraction)
}


Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-2476-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 281–305)

     * |--------|-----|---------------------------------------------------------------------------------------------|
     * |`0`     |1    |[SPAN_HAS_EXTRAS]: `1` iff [extras] `!= null` (enforced by internal constructor)             |
     * |`1`     |1    |[HAS_BASELINE_SHIFT]: `1` if set ([BaselineShift.None] when `extras.baselineShift` is null)  |
     * |`2`     |1    |Unused (`0`)                                                                                 |
     * |`3..5`  |3    |[fontSynthesis]: `0` = null, else `((value and 0x3) shl 1) or 1`                             |
     * |`6..8`  |3    |[textDecoration]: `0` = null, else `((mask and 0x3) shl 1) or 1`                             |
     * |`9`     |1    |[HAS_PLATFORM_STYLE]: `1` if set ([PlatformSpanStyle.Default] if no extras)                  |
     * |`10`    |1    |[HAS_FONT_FEATURES]: `1` if set (`""` when `extras.fontFeatureSettings` is null)             |
     * |`11`    |1    |[HAS_GEOMETRIC_TRANSFORM]: `1` if set ([TextGeometricTransform.None] if no extras)           |
     * |`12`    |1    |[HAS_BACKGROUND]: `1` if set ([Color.Transparent] when `extras.background` unset)            |
     * |`13`    |1    |[HAS_SHADOW]: `1` if set ([Shadow.None] when `extras.shadow` is null)                        |
     * |`14`    |1    |[HAS_DRAW_STYLE]: `1` if set ([Fill] when `extras.drawStyle` is null)                        |
     * |`15..16`|2    |[fontStyle]: `0` = null, `1` (`0b01`) = [FontStyle.Normal], `3` (`0b11`) = [FontStyle.Italic]|
     * |`17..31`|15   |Unused (`0`)                                                                                 |
     *
     * ### Odd-Code Rule & SWAR Merge
     * Fields in bits `3..8` ([fontSynthesis], [textDecoration]) and bits `15..16` ([fontStyle])
     * store `0` when unset and an **odd** code (`(raw shl 1) or 1`) when set. Their low bit acts as
     * the set flag, and [mergeSpanBits] scales that bit into a full mask via `* TWO_BIT_FIELD_MASK`
     * (`0x3`) and `* THREE_BIT_FIELD_MASK` (`0x7`).
     */
    internal val bits: Int

    /**
     * Rare span fields ([brush], [alpha], [fontFeatureSettings], [baselineShift],

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 306–340)

     * [textGeometricTransform], [localeList], [background], [shadow], [drawStyle],
     * [platformStyle]). Stays `null` when all rare fields are unset or match their bit presets.
     */
    @JvmField internal val extras: SpanStyleExtras?
    internal val legacySpanStyle: LegacySpanStyle?

    /** Glyph size. If [TextUnit.Unspecified], inherits size from parent or default style. */
    public val fontSize: TextUnit

    /**
     * Amount of space (in SP or EM) to add between letters. If [TextUnit.Unspecified], inherits
     * from parent.
     */
    public val letterSpacing: TextUnit

    /** Typeface thickness (e.g., bold). */
    public val fontWeight: FontWeight?

    /** Font family for rendering. */
    public val fontFamily: FontFamily?

    internal constructor(
        colorXor: Long,
        bits: Int,
        extras: SpanStyleExtras?,
        fontSize: TextUnit,
        letterSpacing: TextUnit,
        fontWeight: FontWeight?,
        fontFamily: FontFamily?,
    ) {
        this.colorXor = colorXor
        this.bits = if (extras == null) bits and SPAN_HAS_EXTRAS.inv() else bits or SPAN_HAS_EXTRAS
        this.extras = extras
        this.legacySpanStyle = null
        this.fontSize = fontSize

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-306-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 341–375)

        this.letterSpacing = letterSpacing
        this.fontWeight = fontWeight
        this.fontFamily = fontFamily
    }

    internal constructor(legacySpanStyle: LegacySpanStyle) {
        this.colorXor = 0L
        this.bits = 0
        this.extras = null
        this.legacySpanStyle = if (PackedTextStylesLatch.isEnabled) null else legacySpanStyle
        this.fontSize = legacySpanStyle.fontSize
        this.letterSpacing = legacySpanStyle.letterSpacing
        this.fontWeight = legacySpanStyle.fontWeight
        this.fontFamily = legacySpanStyle.fontFamily
    }

    /**
     * Styling configuration for a text span. This configuration only allows character level
     * styling, in order to set paragraph level styling such as line height, or text alignment
     * please see [ParagraphStyle].
     *
     * @sample androidx.compose.ui.text.samples.SpanStyleSample
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
     * @param color The text color.
     * @param fontSize The size of glyphs (in logical pixels) to use when painting the text. This
     *   may be [TextUnit.Unspecified] for inheriting from another [SpanStyle].
     * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
     * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
     * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
     *   or style cannot be found in the provided font family.
     * @param fontFamily The font family to be used when rendering the text.
     * @param fontFeatureSettings The advanced typography settings provided by font. The format is
     *   the same as the CSS font-feature-settings attribute:
     *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     * @param letterSpacing The amount of space (in em) to add between each letter.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-341-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 36–70)

import androidx.compose.ui.text.style.BaselineShift
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextForegroundStyle
import androidx.compose.ui.text.style.TextGeometricTransform
import androidx.compose.ui.text.style.isApplicable
import androidx.compose.ui.text.style.lerp
import androidx.compose.ui.text.style.modulate
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.isSpecified
import androidx.compose.ui.unit.isUnspecified
import androidx.compose.ui.unit.lerp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.util.lerp
import androidx.compose.ui.util.packInts
import kotlin.jvm.JvmField

/** The default font size if none is specified. */
private val DefaultFontSize = 14.sp
// TODO(nona): Introduce TextUnit.Original for representing "do not change the original result".
//  Need to distinguish from Inherit.
private val DefaultLetterSpacing = 0.sp

/** Cached values for `FontStyle` and `FontSynthesis` getters, plus default styles. */
internal object BoxedStyleValues {
    val NormalFontStyle: FontStyle? = FontStyle.Normal
    val ItalicFontStyle: FontStyle? = FontStyle.Italic
    val NoneFontSynthesis: FontSynthesis? = FontSynthesis.None
    val WeightFontSynthesis: FontSynthesis? = FontSynthesis.Weight
    val StyleFontSynthesis: FontSynthesis? = FontSynthesis.Style
    val AllFontSynthesis: FontSynthesis? = FontSynthesis.All
    val NoneBaselineShift: BaselineShift? = BaselineShift.None
    // Pre-allocated combined Underline + LineThrough instance; TextDecoration only caches the
    // single-flag constants on its companion object.
    @JvmField

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 376–410)

     * @param baselineShift The amount by which the text is shifted up from the current baseline.
     * @param textGeometricTransform The geometric transformation applied the text.
     * @param localeList The locale list used to select region-specific glyphs.
     * @param background The background color for the text.
     * @param textDecoration The decorations to paint on the text (e.g., an underline).
     * @param shadow The shadow effect applied on the text.
     * @see AnnotatedString
     * @see TextStyle
     * @see ParagraphStyle
     */
    @Deprecated(
        "SpanStyle constructors that do not take new stable parameters " +
            "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
            "constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        color: Color = Color.Unspecified,
        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,
        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
    ) : this(
        color = color,
        fontSize = fontSize,
        fontWeight = fontWeight,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-376-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 411–445)

        fontStyle = fontStyle,
        fontSynthesis = fontSynthesis,
        fontFamily = fontFamily,
        fontFeatureSettings = fontFeatureSettings,
        letterSpacing = letterSpacing,
        baselineShift = baselineShift,
        textGeometricTransform = textGeometricTransform,
        localeList = localeList,
        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = null,
        drawStyle = null,
    )

    /**
     * Styling configuration for a text span. This configuration only allows character level
     * styling, in order to set paragraph level styling such as line height, or text alignment
     * please see [ParagraphStyle].
     *
     * @sample androidx.compose.ui.text.samples.SpanStyleSample
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
     * @param color The color to draw the text.
     * @param fontSize The size of glyphs (in logical pixels) to use when painting the text. This
     *   may be [TextUnit.Unspecified] for inheriting from another [SpanStyle].
     * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
     * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
     * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
     *   or style cannot be found in the provided font family.
     * @param fontFamily The font family to be used when rendering the text.
     * @param fontFeatureSettings The advanced typography settings provided by font. The format is
     *   the same as the CSS font-feature-settings attribute:
     *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     * @param letterSpacing The amount of space (in em) to add between each letter.
     * @param baselineShift The amount by which the text is shifted up from the current baseline.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-411-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 446–480)

     * @param textGeometricTransform The geometric transformation applied the text.
     * @param localeList The locale list used to select region-specific glyphs.
     * @param background The background color for the text.
     * @param textDecoration The decorations to paint on the text (e.g., an underline).
     * @param shadow The shadow effect applied on the text.
     * @param platformStyle Platform specific [SpanStyle] parameters.
     * @see AnnotatedString
     * @see TextStyle
     * @see ParagraphStyle
     */
    @Deprecated(
        "SpanStyle constructors that do not take new stable parameters " +
            "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
            "constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        color: Color = Color.Unspecified,
        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,
        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        platformStyle: PlatformSpanStyle? = null,
    ) : this(
        color = color,
        fontSize = fontSize,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-446-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 481–515)

        fontWeight = fontWeight,
        fontStyle = fontStyle,
        fontSynthesis = fontSynthesis,
        fontFamily = fontFamily,
        fontFeatureSettings = fontFeatureSettings,
        letterSpacing = letterSpacing,
        baselineShift = baselineShift,
        textGeometricTransform = textGeometricTransform,
        localeList = localeList,
        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = platformStyle,
        drawStyle = null,
    )

    /**
     * Styling configuration for text spans.
     *
     * Configures character-level styles such as text color, font size, font family, background
     * color, and text decorations.
     *
     * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
     *
     * @sample androidx.compose.ui.text.samples.SpanStyleSample
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
     * @sample androidx.compose.ui.text.samples.BaselineShiftSample
     * @param color color to apply to the text
     * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
     *   style.
     * @param fontWeight typeface thickness (e.g., bold)
     * @param fontStyle typeface variant (e.g., italic)
     * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style
     *   is missing in [fontFamily]
     * @param fontFamily font family for rendering

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-481-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 516–550)

     * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
     * @param letterSpacing amount of space (in SP or EM) to add between letters. If
     *   [TextUnit.Unspecified], inherits from parent.
     * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or
     *   subscript)
     * @param textGeometricTransform geometric transformation to apply
     * @param localeList locale list for region-specific glyphs
     * @param background color of background rectangle covering entire line height from start to end
     * @param textDecoration decorations (e.g., underline)
     * @param shadow shadow effect
     * @param platformStyle platform-specific parameters
     * @param drawStyle drawing style (fill or stroke)
     * @see AnnotatedString
     * @see TextStyle
     * @see ParagraphStyle
     */
    public constructor(
        color: Color = Color.Unspecified,
        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,
        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        platformStyle: PlatformSpanStyle? = null,
        drawStyle: DrawStyle? = null,
    ) {
        if (PackedTextStylesLatch.isEnabled) {

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-516-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 551–585)

            val extras =
                createSpanStyleExtras(
                    /* brush = */ null,
                    Float.NaN,
                    fontFeatureSettings,
                    baselineShift,
                    textGeometricTransform,
                    localeList,
                    background,
                    shadow,
                    drawStyle,
                    platformStyle,
                )
            val rawBits =
                packSpanStyleBits(
                    fontStyle,
                    fontSynthesis,
                    fontFeatureSettings,
                    textGeometricTransform,
                    background,
                    textDecoration,
                    shadow,
                    platformStyle,
                    drawStyle,
                    baselineShift,
                )
            this.colorXor = packSpanColorXor(color)
            this.bits =
                if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                else rawBits or SPAN_HAS_EXTRAS
            this.extras = extras
            this.legacySpanStyle = null
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-551-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 586–620)

            this.fontFamily = fontFamily
        } else {
            this.colorXor = 0L
            this.bits = 0
            this.extras = null
            this.legacySpanStyle =
                LegacySpanStyle(
                    color = color,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,
                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,
                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,
                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle,
                    drawStyle = drawStyle,
                )
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight
            this.fontFamily = fontFamily
        }
    }

    /**
     * Styling configuration for text spans.
     *
     * Configures character-level styles such as text brush, opacity, font size, font family,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-586-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 621–655)

     * background color, and text decorations.
     *
     * For paragraph-level styling (e.g., alignment, line height), see [ParagraphStyle].
     *
     * @sample androidx.compose.ui.text.samples.SpanStyleBrushSample
     * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderSample
     * @sample androidx.compose.ui.text.samples.BaselineShiftSample
     * @param brush [Brush] for painting text, null for unspecified
     * @param alpha opacity applied to [brush] (0.0 to 1.0)
     * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
     *   style.
     * @param fontWeight typeface thickness (e.g., bold)
     * @param fontStyle typeface variant (e.g., italic)
     * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style
     *   is missing in [fontFamily]
     * @param fontFamily font family for rendering
     * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
     * @param letterSpacing amount of space (in SP or EM) to add between letters. If
     *   [TextUnit.Unspecified], inherits from parent.
     * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or
     *   subscript)
     * @param textGeometricTransform geometric transformation to apply
     * @param localeList locale list for region-specific glyphs
     * @param background color of background rectangle covering entire line height from start to end
     * @param textDecoration decorations (e.g., underline)
     * @param shadow shadow effect
     * @param platformStyle platform-specific parameters
     * @param drawStyle drawing style (fill or stroke)
     * @see AnnotatedString
     * @see TextStyle
     * @see ParagraphStyle
     */
    public constructor(
        brush: Brush?,
        alpha: Float = Float.NaN,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-621-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 656–690)

        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,
        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        platformStyle: PlatformSpanStyle? = null,
        drawStyle: DrawStyle? = null,
    ) {
        if (PackedTextStylesLatch.isEnabled) {
            val extras =
                createSpanStyleExtras(
                    if (brush is SolidColor) /* brush= */ null else brush,
                    alpha,
                    fontFeatureSettings,
                    baselineShift,
                    textGeometricTransform,
                    localeList,
                    background,
                    shadow,
                    drawStyle,
                    platformStyle,
                )
            val rawBits =
                packSpanStyleBits(
                    fontStyle,
                    fontSynthesis,
                    fontFeatureSettings,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-656-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 691–725)

                    textGeometricTransform,
                    background,
                    textDecoration,
                    shadow,
                    platformStyle,
                    drawStyle,
                    baselineShift,
                )
            this.colorXor =
                if (brush is SolidColor) packSpanColorXor(brush.value.modulate(alpha)) else 0L
            this.bits =
                if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                else rawBits or SPAN_HAS_EXTRAS
            this.extras = extras
            this.legacySpanStyle = null
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight
            this.fontFamily = fontFamily
        } else {
            this.colorXor = 0L
            this.bits = 0
            this.extras = null
            this.legacySpanStyle =
                LegacySpanStyle(
                    brush = brush,
                    alpha = alpha,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,
                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-691-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 71–105)

    internal val CombinedTextDecoration: TextDecoration =
        TextDecoration.Underline + TextDecoration.LineThrough
    @JvmField
    internal val DefaultSpanStyle: SpanStyle =
        if (PackedTextStylesLatch.isEnabled) {
            SpanStyle(
                colorXor = 0L,
                bits = 0,
                extras = null,
                fontSize = TextUnit.Unspecified,
                letterSpacing = TextUnit.Unspecified,
                fontWeight = null,
                fontFamily = null,
            )
        } else {
            SpanStyle(DefaultLegacySpanStyle)
        }
    @JvmField
    internal val ResolvedDefaultSpanStyle: SpanStyle = DefaultSpanStyle.withResolvedDefaults()
    @JvmField
    internal val ResolvedDefaultParagraphStyleLtr: ParagraphStyle =
        DefaultParagraphStyle.withResolvedDefaults(LayoutDirection.Ltr)
    @JvmField
    internal val ResolvedDefaultParagraphStyleRtl: ParagraphStyle =
        DefaultParagraphStyle.withResolvedDefaults(LayoutDirection.Rtl)
}

/**
 * Rare [SpanStyle] fields that do not fit in the packed bits. Holds [Brush], [fontFeatureSettings],
 * [BaselineShift], [TextGeometricTransform], [LocaleList], [background], [Shadow], [DrawStyle], or
 * [PlatformSpanStyle] when set to a custom value.
 *
 * @param brush Shader or gradient brush used to draw text, or null if using a solid color.
 * @param alpha Opacity applied to [brush], or [Float.NaN] when unset.
 * @param fontFeatureSettings OpenType font feature settings string, or null if unset.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 726–760)

                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,
                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle,
                    drawStyle = drawStyle,
                )
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight
            this.fontFamily = fontFamily
        }
    }

    // Not called. The old primary constructor took a TextForegroundStyle with defaults, and
    // its synthetic public `$default` overload is part of the binary API.
    @Suppress("unused")
    internal constructor(
        textForegroundStyle: TextForegroundStyle,
        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,
        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        platformStyle: PlatformSpanStyle? = null,
        drawStyle: DrawStyle? = null,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-726-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 761–795)

    ) {
        val brush = textForegroundStyle.brush
        if (PackedTextStylesLatch.isEnabled) {
            val extras =
                createSpanStyleExtras(
                    if (brush is SolidColor) null else brush,
                    if (brush != null) textForegroundStyle.alpha else Float.NaN,
                    fontFeatureSettings,
                    baselineShift,
                    textGeometricTransform,
                    localeList,
                    background,
                    shadow,
                    drawStyle,
                    platformStyle,
                )
            val rawBits =
                packSpanStyleBits(
                    fontStyle,
                    fontSynthesis,
                    fontFeatureSettings,
                    textGeometricTransform,
                    background,
                    textDecoration,
                    shadow,
                    platformStyle,
                    drawStyle,
                    baselineShift,
                )
            this.colorXor =
                if (brush != null) {
                    if (brush is SolidColor) {
                        packSpanColorXor(brush.value.modulate(textForegroundStyle.alpha))
                    } else {
                        0L

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-761-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 796–830)

                    }
                } else {
                    packSpanColorXor(textForegroundStyle.color)
                }
            this.bits =
                if (extras == null) rawBits and SPAN_HAS_EXTRAS.inv()
                else rawBits or SPAN_HAS_EXTRAS
            this.extras = extras
            this.legacySpanStyle = null
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight
            this.fontFamily = fontFamily
        } else {
            this.colorXor = 0L
            this.bits = 0
            this.extras = null
            this.legacySpanStyle =
                LegacySpanStyle(
                    textForegroundStyle = textForegroundStyle,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,
                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,
                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,
                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle,
                    drawStyle = drawStyle,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-796-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 831–865)

                )
            this.fontSize = fontSize
            this.letterSpacing = letterSpacing
            this.fontWeight = fontWeight
            this.fontFamily = fontFamily
        }
    }

    /** Color to draw text. */
    public val color: Color
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.color
            } else {
                Color((colorXor xor UNSPECIFIED_COLOR_BITS).toULong())
            }

    /** Brush to draw text. If not null, overrides [color]. */
    public val brush: Brush?
        get() = if (legacySpanStyle != null) legacySpanStyle.brush else extras?.brush

    /**
     * Opacity of text. This value is either provided along side Brush, or via alpha channel in
     * color.
     */
    public val alpha: Float
        get() {
            if (legacySpanStyle != null) return legacySpanStyle.alpha
            val extras = extras
            if (extras != null && extras.brush != null) return extras.alpha
            return if (colorXor == 0L) Float.NaN else color.alpha
        }

    /** Typeface variant (e.g., italic). */
    public val fontStyle: FontStyle?

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-831-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 866–900)

        get() {
            if (legacySpanStyle != null) return legacySpanStyle.fontStyle
            val bits = bits
            if (bits and HAS_FONT_STYLE == 0) return null
            // `FontStyle` is an `@JvmInline value class`, so returning `FontStyle?` requires a
            // boxed wrapper object on the JVM. Returning the pre-boxed singletons from
            // `BoxedStyleValues` avoids allocating a new `FontStyle` box on every getter call.
            return if (bits and FONT_STYLE_IS_ITALIC == 0) {
                BoxedStyleValues.NormalFontStyle
            } else {
                BoxedStyleValues.ItalicFontStyle
            }
        }

    /**
     * Font synthesis rules to fallback to bold/italic if the requested style is missing in
     * [fontFamily].
     */
    public val fontSynthesis: FontSynthesis?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.fontSynthesis
            } else if (bits and FONT_SYNTHESIS_MASK == 0) {
                null
            } else {
                // The code is (value shl 1) or 1, so the value is the code without its low bit.
                // Like `fontStyle`, returns pre-boxed `BoxedStyleValues` singletons to avoid
                // value-class boxing allocations when returning nullable `FontSynthesis?`.
                when ((bits and FONT_SYNTHESIS_MASK) ushr (FONT_SYNTHESIS_SHIFT + 1)) {
                    0 -> BoxedStyleValues.NoneFontSynthesis
                    1 -> BoxedStyleValues.WeightFontSynthesis
                    2 -> BoxedStyleValues.StyleFontSynthesis
                    else -> BoxedStyleValues.AllFontSynthesis
                }
            }

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-866-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 901–935)


    /** Advanced font features in CSS format (e.g., "smcp" for small caps). */
    public val fontFeatureSettings: String?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.fontFeatureSettings
            } else {
                extras?.fontFeatureSettings ?: if (bits and HAS_FONT_FEATURES != 0) "" else null
            }

    /** Vertical shift amount from the baseline (e.g., for superscript or subscript). */
    public val baselineShift: BaselineShift?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.baselineShift
            } else {
                extras?.baselineShift
                    ?: if (bits and HAS_BASELINE_SHIFT != 0) {
                        BoxedStyleValues.NoneBaselineShift
                    } else {
                        null
                    }
            }

    internal val baselineShiftOrNone: BaselineShift
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.baselineShift ?: BaselineShift.None
            } else {
                extras?.baselineShift ?: BaselineShift.None
            }

    /** Geometric transformation to apply. */
    public val textGeometricTransform: TextGeometricTransform?
        get() =

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-901-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 936–970)

            if (legacySpanStyle != null) {
                legacySpanStyle.textGeometricTransform
            } else {
                extras?.textGeometricTransform
                    ?: if (hasTextGeometricTransform) TextGeometricTransform.None else null
            }

    /** Locale list for region-specific glyphs. */
    public val localeList: LocaleList?
        get() = if (legacySpanStyle != null) legacySpanStyle.localeList else extras?.localeList

    /** Color of background rectangle covering entire line height from start to end. */
    public val background: Color
        get() {
            if (legacySpanStyle != null) return legacySpanStyle.background
            val extras = extras
            // Non-transparent background colors are stored in `extras.background`. A transparent
            // background (`Color.Transparent`) is encoded via `HAS_BACKGROUND` alone so that common
            // resolved styles (which default `background` to `Color.Transparent`) do not allocate
            // a `SpanStyleExtras` sidecar.
            if (extras != null && extras.background.isSpecified) return extras.background
            return if (bits and HAS_BACKGROUND != 0) Color.Transparent else Color.Unspecified
        }

    /** Decorations (e.g., underline). */
    public val textDecoration: TextDecoration?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.textDecoration
            } else if (bits and TEXT_DECORATION_MASK == 0) {
                null
            } else {
                when ((bits and TEXT_DECORATION_MASK) ushr (TEXT_DECORATION_SHIFT + 1)) {
                    0 -> TextDecoration.None
                    1 -> TextDecoration.Underline

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-936-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 971–1005)

                    2 -> TextDecoration.LineThrough
                    else -> BoxedStyleValues.CombinedTextDecoration
                }
            }

    /** Shadow effect. */
    public val shadow: Shadow?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.shadow
            } else {
                extras?.shadow ?: if (bits and HAS_SHADOW != 0) Shadow.None else null
            }

    /** Platform-specific parameters. */
    public val platformStyle: PlatformSpanStyle?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.platformStyle
            } else {
                extras?.platformStyle
                    ?: if (bits and HAS_PLATFORM_STYLE != 0) PlatformSpanStyle.Default else null
            }

    /** Drawing style (fill or stroke). */
    public val drawStyle: DrawStyle?
        get() =
            if (legacySpanStyle != null) {
                legacySpanStyle.drawStyle
            } else {
                extras?.drawStyle ?: if (bits and HAS_DRAW_STYLE != 0) Fill else null
            }

    internal val hasFontStyle: Boolean
        get() =

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-971-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)
