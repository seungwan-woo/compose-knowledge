---
type: reference
title: androidx.compose.ui.text TextStyle.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1
    endLine: 35
    sha256: 3fb91246bb726896d690f0ae27cdc1e18d3e96eaeede1af31dc06d92ca2ea0a3
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
      import androidx.compose.ui.graphics.drawscope.DrawStyle
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.font.FontStyle
      import androidx.compose.ui.text.font.FontSynthesis
      import androidx.compose.ui.text.font.FontWeight
      import androidx.compose.ui.text.intl.LocaleList
      import androidx.compose.ui.text.style.BaselineShift
      import androidx.compose.ui.text.style.Hyphens
      import androidx.compose.ui.text.style.LineBreak
      import androidx.compose.ui.text.style.LineHeightStyle
      import androidx.compose.ui.text.style.TextAlign
      import androidx.compose.ui.text.style.TextDecoration
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1016
    endLine: 1050
    sha256: 290589cfe94a97e4325fe5b9a47d5bd1eb3a04f68a19239f150ffe4ba9e08a41
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      ),
                  platformStyle = platformStyle,
              )
          }

          @Deprecated(
              "copy constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.spanStyle.color,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              drawStyle: DrawStyle? = this.spanStyle.drawStyle,
              textAlign: TextAlign? = this.paragraphStyle.textAlign,
              textDirection: TextDirection? = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak? = this.paragraphStyle.lineBreak,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1051
    endLine: 1085
    sha256: eb3624e235ef3d95a735d41a1c88d3103f79fb6eaf20cf84b8e286150d1b77b3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              hyphens: Hyphens? = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
                      SpanStyle(
                          textForegroundStyle =
                              if (color == this.spanStyle.color) {
                                  spanStyle.textForegroundStyle
                              } else {
                                  TextForegroundStyle.from(color)
                              },
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 106
    endLine: 140
    sha256: d9b577d562e8d530846be8369647ddce1ebbd982155994d90ffef32c58fec05a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              ),
              ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = null,
                  lineHeightStyle = null,
                  lineBreak = LineBreak.Unspecified,
                  hyphens = Hyphens.Unspecified,
                  textMotion = null,
              ),
              platformStyle = null,
          )

          @Deprecated(
              "TextStyle constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              color: Color = Color.Unspecified,
              fontSize: TextUnit = TextUnit.Unspecified,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1086
    endLine: 1120
    sha256: ecf995d84cae52ec3ff33a18d9245fa28480580e8925125ece16b3101ab6c344
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak ?: LineBreak.Unspecified,
                          hyphens = hyphens ?: Hyphens.Unspecified,
                          textMotion = textMotion,
                      ),
                  platformStyle = platformStyle,
              )
          }

          public fun copy(
              color: Color = this.spanStyle.color,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              drawStyle: DrawStyle? = this.spanStyle.drawStyle,
              textAlign: TextAlign = this.paragraphStyle.textAlign,
              textDirection: TextDirection = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak = this.paragraphStyle.lineBreak,
              hyphens: Hyphens = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1121
    endLine: 1155
    sha256: 8a65c80876e0720ce030a4b50ed1ce01c5673b5bc8ce4de80fe9af245c8f8e00
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return TextStyle(
                  spanStyle =
                      SpanStyle(
                          textForegroundStyle =
                              if (color == this.spanStyle.color) {
                                  spanStyle.textForegroundStyle
                              } else {
                                  TextForegroundStyle.from(color)
                              },
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign,
                          textDirection = textDirection,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak,
                          hyphens = hyphens,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1156
    endLine: 1190
    sha256: 6a374e496bc9383df3ff67d049e3a18e4d9bda8405340c957b746c514d01dddb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          textMotion = textMotion,
                      ),
                  platformStyle = platformStyle,
              )
          }

          @Deprecated(
              "copy constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              brush: Brush?,
              alpha: Float = this.spanStyle.alpha,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              drawStyle: DrawStyle? = this.spanStyle.drawStyle,
              textAlign: TextAlign? = this.paragraphStyle.textAlign,
              textDirection: TextDirection? = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1191
    endLine: 1225
    sha256: 1a943b069d96bb23f13fdd18972ac55dea28763834abd84088686db36206a1bd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak? = this.paragraphStyle.lineBreak,
              hyphens: Hyphens? = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
                      SpanStyle(
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak ?: LineBreak.Unspecified,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1226
    endLine: 1260
    sha256: 38a4bfed88cfb4c9e9f7ebd974edd933458c78acdf316fb252fa400a7c0b2fe9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          hyphens = hyphens ?: Hyphens.Unspecified,
                          textMotion = textMotion,
                      ),
                  platformStyle = platformStyle,
              )
          }

          public fun copy(
              brush: Brush?,
              alpha: Float = this.spanStyle.alpha,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              drawStyle: DrawStyle? = this.spanStyle.drawStyle,
              textAlign: TextAlign = this.paragraphStyle.textAlign,
              textDirection: TextDirection = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak = this.paragraphStyle.lineBreak,
              hyphens: Hyphens = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1261-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1261
    endLine: 1295
    sha256: e4a9ec6349845e4bd1c897776c4629f9b088c4d5027df985bbd2e645451b3209
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  spanStyle =
                      SpanStyle(
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign,
                          textDirection = textDirection,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak,
                          hyphens = hyphens,
                          textMotion = textMotion,
                      ),
                  platformStyle = platformStyle,
              )
          }
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1296-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1296
    endLine: 1330
    sha256: 5057c27038aa55a7211d7dd50034e67f69bb6035995514b03875febe54a712ec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** The brush to use when drawing text. If not null, overrides [color]. */
          public val brush: Brush?
              get() = this.spanStyle.brush

          /** The text color. */
          public val color: Color
              get() = this.spanStyle.color

          /**
           * Opacity of text. This value is either provided along side Brush, or via alpha channel in
           * color.
           */
          public val alpha: Float
              get() = this.spanStyle.alpha

          /**
           * The size of glyphs to use when painting the text. This may be [TextUnit.Unspecified] for
           * inheriting from another [TextStyle].
           */
          public val fontSize: TextUnit
              get() = this.spanStyle.fontSize

          /** The typeface thickness to use when painting the text (e.g., bold). */
          public val fontWeight: FontWeight?
              get() = this.spanStyle.fontWeight

          /** The typeface variant to use when drawing the letters (e.g., italic). */
          public val fontStyle: FontStyle?
              get() = this.spanStyle.fontStyle

          /**
           * Whether to synthesize font weight and/or style when the requested weight or style cannot be
           * found in the provided font family.
           */
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1331-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1331
    endLine: 1365
    sha256: 945257ce6e883b09fadb46363e3616ac5adc188a10e15d1064f30b988c9c1ded
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          public val fontSynthesis: FontSynthesis?
              get() = this.spanStyle.fontSynthesis

          /** The font family to be used when rendering the text. */
          public val fontFamily: FontFamily?
              get() = this.spanStyle.fontFamily

          /**
           * The advanced typography settings provided by font. The format is the same as the CSS
           * font-feature-settings attribute:
           * https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
           */
          public val fontFeatureSettings: String?
              get() = this.spanStyle.fontFeatureSettings

          /** The amount of space to add between each letter. */
          public val letterSpacing: TextUnit
              get() = this.spanStyle.letterSpacing

          /** The amount by which the text is shifted up from the current baseline. */
          public val baselineShift: BaselineShift?
              get() = this.spanStyle.baselineShift

          /** The geometric transformation applied the text. */
          public val textGeometricTransform: TextGeometricTransform?
              get() = this.spanStyle.textGeometricTransform

          /** The locale list used to select region-specific glyphs. */
          public val localeList: LocaleList?
              get() = this.spanStyle.localeList

          /** The background color for the text. */
          public val background: Color
              get() = this.spanStyle.background
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1366-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1366
    endLine: 1400
    sha256: 5e3d022b1fca1ccf343f66628f285b85a8d0564211bfba4b7c8fa707a8c650e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** The decorations to paint on the text (e.g., an underline). */
          public val textDecoration: TextDecoration?
              get() = this.spanStyle.textDecoration

          /** The shadow effect applied on the text. */
          public val shadow: Shadow?
              get() = this.spanStyle.shadow

          /** Drawing style of text, whether fill in the text while drawing or stroke around the edges. */
          public val drawStyle: DrawStyle?
              get() = this.spanStyle.drawStyle

          /** The alignment of the text within the lines of the paragraph. */
          public val textAlign: TextAlign
              get() = this.paragraphStyle.textAlign

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getTextAlign-buA522U") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_textAlign: TextAlign?
              get() = this.textAlign

          /**
           * The algorithm to be used to resolve the final text and paragraph direction: Left To Right or
           * Right To Left. If no value is provided the system will use the [LayoutDirection] as the
           * primary signal.
           */
          public val textDirection: TextDirection
              get() = this.paragraphStyle.textDirection

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getTextDirection-mmuk1to") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_textDirection: TextDirection?
              get() = this.textDirection
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1401-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1401
    endLine: 1435
    sha256: 99f577e8df5c4be99f607b2a1a57f744a79d2cd225f272bd913dbf0a851894ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. */
          public val lineHeight: TextUnit
              get() = this.paragraphStyle.lineHeight

          /** The indentation of the paragraph. */
          public val textIndent: TextIndent?
              get() = this.paragraphStyle.textIndent

          /**
           * The configuration for line height such as vertical alignment of the line, whether to apply
           * additional space as a result of line height to top of first line top and bottom of last line.
           *
           * The configuration is applied only when a [lineHeight] is defined.
           *
           * When null, [LineHeightStyle.Default] is used.
           */
          public val lineHeightStyle: LineHeightStyle?
              get() = this.paragraphStyle.lineHeightStyle

          /** The hyphens configuration of the paragraph. */
          public val hyphens: Hyphens
              get() = this.paragraphStyle.hyphens

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getHyphens-EaSxIns") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_hyphens: Hyphens?
              get() = this.hyphens

          /** The line breaking configuration of the paragraph. */
          public val lineBreak: LineBreak
              get() = this.paragraphStyle.lineBreak

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 141
    endLine: 175
    sha256: 8cf17907d06d4b64df52832696d7602570ccddbf51ad9203278b85cfd1d29418
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
          ) : this(
              SpanStyle(
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
                  platformStyle = platformStyle?.spanStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1436-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1436
    endLine: 1470
    sha256: 661017b3508e5b81443623235d0a35682ac62e26d42564d20a08b0550973350c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @get:JvmName("getLineBreak-LgCVezo") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_lineBreak: LineBreak?
              get() = this.lineBreak

          /** Text character placement configuration, whether to optimize for animated or static text. */
          public val textMotion: TextMotion?
              get() = this.paragraphStyle.textMotion

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is TextStyle) return false

              if (spanStyle != other.spanStyle) return false
              if (paragraphStyle != other.paragraphStyle) return false
              if (platformStyle != other.platformStyle) return false

              return true
          }

          /**
           * Returns true if text layout affecting attributes between this TextStyle and other are the
           * same.
           *
           * The attributes that do not require a layout change are color, textDecoration and shadow.
           *
           * Majority of attributes change text layout, and examples are line height, font properties,
           * font size, locale etc.
           *
           * This function can be used to identify if a new text layout is required for a given TextStyle.
           *
           * @param other The TextStyle to compare to.
           */
          public fun hasSameLayoutAffectingAttributes(other: TextStyle): Boolean {
              return (this === other) ||
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1471-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1471
    endLine: 1505
    sha256: 19a75b8ceede614e203f99c63ab8726c2173d7338fde6f1979bddbc72ef950f2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  (paragraphStyle == other.paragraphStyle &&
                      spanStyle.hasSameLayoutAffectingAttributes(other.spanStyle))
          }

          public fun hasSameDrawAffectingAttributes(other: TextStyle): Boolean {
              return (this === other) || (spanStyle.hasSameNonLayoutAttributes(other.spanStyle))
          }

          override fun hashCode(): Int {
              var result = spanStyle.hashCode()
              result = 31 * result + paragraphStyle.hashCode()
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
              return result
          }

          internal fun hashCodeLayoutAffectingAttributes(): Int {
              var result = spanStyle.hashCodeLayoutAffectingAttributes()
              result = 31 * result + paragraphStyle.hashCode()
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
              return result
          }

          override fun toString(): String {
              return "TextStyle(" +
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1506-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1506
    endLine: 1540
    sha256: 093b93779af5a8c03172e972b25faf4303d2db39bd70c043305d5d3011904d10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  "textGeometricTransform=$textGeometricTransform, " +
                  "localeList=$localeList, " +
                  "background=$background, " +
                  "textDecoration=$textDecoration, " +
                  "shadow=$shadow, " +
                  "drawStyle=$drawStyle, " +
                  "textAlign=$textAlign, " +
                  "textDirection=$textDirection, " +
                  "lineHeight=$lineHeight, " +
                  "textIndent=$textIndent, " +
                  "platformStyle=$platformStyle, " +
                  "lineHeightStyle=$lineHeightStyle, " +
                  "lineBreak=$lineBreak, " +
                  "hyphens=$hyphens, " +
                  "textMotion=$textMotion" +
                  ")"
          }

          public companion object {
              /** Constant for default text style. */
              @Stable public val Default: TextStyle = TextStyle()
          }
      }

      /**
       * Interpolate between two text styles.
       *
       * This will not work well if the styles don't set the same fields.
       *
       * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
       * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
       * meaning that the interpolation has finished, returning [stop] (or something equivalent to
       * [stop]), and values in between meaning that the interpolation is at the relevant point on the
       * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
       * negative values and values greater than 1.0 are valid.
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1541-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1541
    endLine: 1575
    sha256: 36d62624a1815ebb1f0e181a8f03957c494abd863082e3ad2fb779a60de27431
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      public fun lerp(start: TextStyle, stop: TextStyle, fraction: Float): TextStyle {
          return TextStyle(
              spanStyle = lerp(start.toSpanStyle(), stop.toSpanStyle(), fraction),
              paragraphStyle = lerp(start.toParagraphStyle(), stop.toParagraphStyle(), fraction),
          )
      }

      /**
       * Fills missing values in TextStyle with default values and resolve [TextDirection].
       *
       * This function will fill all null or [TextUnit.Unspecified] field with actual values.
       *
       * @param style a text style to be resolved
       * @param direction a layout direction to be used for resolving text layout direction algorithm
       * @return resolved text style.
       */
      public fun resolveDefaults(style: TextStyle, direction: LayoutDirection): TextStyle =
          TextStyle(
              spanStyle = resolveSpanStyleDefaults(style.spanStyle),
              paragraphStyle = resolveParagraphStyleDefaults(style.paragraphStyle, direction),
              platformStyle = style.platformStyle,
          )

      /** If [textDirection] is null returns a [TextDirection] based on [layoutDirection]. */
      internal fun resolveTextDirection(
          layoutDirection: LayoutDirection,
          textDirection: TextDirection,
      ): TextDirection {
          return when (textDirection) {
              TextDirection.Content ->
                  when (layoutDirection) {
                      LayoutDirection.Ltr -> TextDirection.ContentOrLtr
                      LayoutDirection.Rtl -> TextDirection.ContentOrRtl
                  }
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1576
    endLine: 1595
    sha256: ceeb7868dd0406a8e269fd7459c7a6d70d3f7adf017e426749c634ae54a699ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              TextDirection.Unspecified ->
                  when (layoutDirection) {
                      LayoutDirection.Ltr -> TextDirection.Ltr
                      LayoutDirection.Rtl -> TextDirection.Rtl
                  }
              else -> textDirection
          }
      }

      private fun createPlatformTextStyleInternal(
          platformSpanStyle: PlatformSpanStyle?,
          platformParagraphStyle: PlatformParagraphStyle?,
      ): PlatformTextStyle? {
          return if (platformSpanStyle == null && platformParagraphStyle == null) {
              null
          } else {
              createPlatformTextStyle(platformSpanStyle, platformParagraphStyle)
          }
      }
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 176
    endLine: 210
    sha256: c27260992c294224f916bb0c1ad9b9b17e82dcf5c1eb511302d21e2a81729d74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  drawStyle = null,
              ),
              ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = LineBreak.Unspecified,
                  hyphens = Hyphens.Unspecified,
                  textMotion = null,
              ),
              platformStyle = platformStyle,
          )

          /**
           * Styling configuration for a `Text`.
           *
           * @sample androidx.compose.ui.text.samples.TextStyleSample
           * @param color The text color.
           * @param fontSize The size of glyphs to use when painting the text. This may be
           *   [TextUnit.Unspecified] for inheriting from another [TextStyle].
           * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
           * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
           * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
           *   or style cannot be found in the provided font family.
           * @param fontFamily The font family to be used when rendering the text.
           * @param fontFeatureSettings The advanced typography settings provided by font. The format is
           *   the same as the CSS font-feature-settings attribute:
           *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
           * @param letterSpacing The amount of space to add between each letter.
           * @param baselineShift The amount by which the text is shifted up from the current baseline.
           * @param textGeometricTransform The geometric transformation applied the text.
           * @param localeList The locale list used to select region-specific glyphs.
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 211
    endLine: 245
    sha256: 55caf7dbde1dc476ce81be963b2c8fe963d77955ab46ed9c915a6bbad5fa34eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param background The background color for the text.
           * @param textDecoration The decorations to paint on the text (e.g., an underline).
           * @param shadow The shadow effect applied on the text.
           * @param textAlign The alignment of the text within the lines of the paragraph.
           * @param textDirection The algorithm to be used to resolve the final text and paragraph
           *   direction: Left To Right or Right To Left. If no value is provided the system will use the
           *   [LayoutDirection] as the primary signal.
           * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM.
           * @param textIndent The indentation of the paragraph.
           * @param platformStyle Platform specific [TextStyle] parameters.
           * @param lineHeightStyle the configuration for line height such as vertical alignment of the
           *   line, whether to apply additional space as a result of line height to top of first line top
           *   and bottom of last line. The configuration is applied only when a [lineHeight] is defined.
           *   When null, [LineHeightStyle.Default] is used.
           * @param lineBreak The line breaking configuration for the text.
           * @param hyphens The configuration of hyphenation.
           */
          @Deprecated(
              "TextStyle constructors that do not take new stable parameters " +
                  "like TextMotion are deprecated. Please use the new stable " +
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 246
    endLine: 280
    sha256: 621e1e6984ce49b026ca24a29bea3870bb00788f46f026800af431489bdad56d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
          ) : this(
              SpanStyle(
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
                  platformStyle = platformStyle?.spanStyle,
              ),
              ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 281
    endLine: 315
    sha256: c30f8a9c6946d3e9f4a47f5f3900c2c491de2b626a7ef44de3d4d76c3d69de4f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak ?: LineBreak.Unspecified,
                  hyphens = hyphens ?: Hyphens.Unspecified,
              ),
              platformStyle = platformStyle,
          )

          @Deprecated(
              "TextStyle constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
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
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 316
    endLine: 350
    sha256: 7fee1d94674691195fdd02e8d266c2f6e0df51755a5df54d112ce315930ab721
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
              textMotion: TextMotion? = null,
          ) : this(
              SpanStyle(
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
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = drawStyle,
              ),
              ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak ?: LineBreak.Unspecified,
                  hyphens = hyphens ?: Hyphens.Unspecified,
                  textMotion = textMotion,
              ),
              platformStyle = platformStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 351
    endLine: 385
    sha256: ba860c9104501258e44c86e436fcf63ec2a52451b3bc157e21c021609fd3abd9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )

          /**
           * Styling configuration for text.
           *
           * @sample androidx.compose.ui.text.samples.TextStyleSample
           * @param color color to apply to the text
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
           * @param drawStyle drawing style (fill or stroke)
           * @param textAlign alignment of the text within the lines of the paragraph.
           * @param textDirection [TextDirection] direction resolution algorithm, defaults to
           *   [LayoutDirection] signal
           * @param lineHeight line height
           * @param textIndent paragraph indentation
           * @param platformStyle platform-specific parameters
           * @param lineHeightStyle line height distribution configuration
           * @param lineBreak line breaking rules
           * @param hyphens hyphenation configuration.
           * @param textMotion [TextMotion] character placement optimization
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 36
    endLine: 70
    sha256: 3ef5a3b6e49894abc607c6125dd1d61b1a3debf1d06d79495513d36672689073
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.style.TextDirection
      import androidx.compose.ui.text.style.TextForegroundStyle
      import androidx.compose.ui.text.style.TextGeometricTransform
      import androidx.compose.ui.text.style.TextIndent
      import androidx.compose.ui.text.style.TextMotion
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.TextUnit
      import kotlin.jvm.JvmName

      /**
       * Styling configuration for text.
       *
       * @sample androidx.compose.ui.text.samples.TextStyleSample
       * @sample androidx.compose.ui.text.samples.TextStyleBrushSample
       * @param platformStyle platform specific [TextStyle] parameters
       * @see AnnotatedString
       * @see SpanStyle
       * @see ParagraphStyle
       */
      // Maintainer note: When adding a new constructor or copy parameter, make sure to add a test case to
      // TextStyleInvalidationTest to ensure the correct phase(s) get invalidated.
      @Immutable
      public class TextStyle
      internal constructor(
          internal val spanStyle: SpanStyle,
          internal val paragraphStyle: ParagraphStyle,
          public val platformStyle: PlatformTextStyle? = null,
      ) {
          internal constructor(
              spanStyle: SpanStyle,
              paragraphStyle: ParagraphStyle,
          ) : this(
              spanStyle = spanStyle,
              paragraphStyle = paragraphStyle,
              platformStyle =
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 386
    endLine: 420
    sha256: ec61e03e2abb17670a377b9ecb156f47a7cc887a03c0ce04db24669ccb08dc50
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign = TextAlign.Unspecified,
              textDirection: TextDirection = TextDirection.Unspecified,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak = LineBreak.Unspecified,
              hyphens: Hyphens = Hyphens.Unspecified,
              textMotion: TextMotion? = null,
          ) : this(
              SpanStyle(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 421
    endLine: 455
    sha256: 899aa686b0875ad43a448917e15c3463db092fe183f73a01e83acada5efa7e1f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = drawStyle,
              ),
              ParagraphStyle(
                  textAlign = textAlign,
                  textDirection = textDirection,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak,
                  hyphens = hyphens,
                  textMotion = textMotion,
              ),
              platformStyle = platformStyle,
          )

          /**
           * Styling configuration for text.
           *
           * @sample androidx.compose.ui.text.samples.TextStyleBrushSample
           * @param brush [Brush] for painting text, null for unspecified
           * @param alpha opacity applied to [brush] (0.0 to 1.0)
           * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
           *   style.
           * @param fontWeight typeface thickness (e.g., bold)
           * @param fontStyle typeface variant (e.g., italic)
           * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 456
    endLine: 490
    sha256: ee8ba1c09c7afb0d81ec861544a2e9e181492bef3456eb78c66d78125329aca7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
           * @param drawStyle drawing style (fill or stroke)
           * @param textAlign alignment of the text within the lines of the paragraph.
           * @param textDirection [TextDirection] direction resolution algorithm, defaults to
           *   [LayoutDirection] signal
           * @param lineHeight line height
           * @param textIndent paragraph indentation
           * @param platformStyle platform-specific parameters
           * @param lineHeightStyle line height distribution configuration
           * @param lineBreak line breaking rules
           * @param hyphens hyphenation configuration.
           * @param textMotion [TextMotion] character placement optimization
           */
          public constructor(
              brush: Brush?,
              alpha: Float = Float.NaN,
              fontSize: TextUnit = TextUnit.Unspecified,
              fontWeight: FontWeight? = null,
              fontStyle: FontStyle? = null,
              fontSynthesis: FontSynthesis? = null,
              fontFamily: FontFamily? = null,
              fontFeatureSettings: String? = null,
              letterSpacing: TextUnit = TextUnit.Unspecified,
              baselineShift: BaselineShift? = null,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 491
    endLine: 525
    sha256: 2b03995e4bf86be3356c997e68eb3298442cc019dc713f9c9095a05884c0b649
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              textGeometricTransform: TextGeometricTransform? = null,
              localeList: LocaleList? = null,
              background: Color = Color.Unspecified,
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign = TextAlign.Unspecified,
              textDirection: TextDirection = TextDirection.Unspecified,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak = LineBreak.Unspecified,
              hyphens: Hyphens = Hyphens.Unspecified,
              textMotion: TextMotion? = null,
          ) : this(
              SpanStyle(
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
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = drawStyle,
              ),
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 526
    endLine: 560
    sha256: ba6cf3dc0c055c503798e1bfba19337b4699e7432de966b78ce78498af592242
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ParagraphStyle(
                  textAlign = textAlign,
                  textDirection = textDirection,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak,
                  hyphens = hyphens,
                  textMotion = textMotion,
              ),
              platformStyle = platformStyle,
          )

          @Deprecated(
              "TextStyle constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              brush: Brush?,
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 561
    endLine: 595
    sha256: 60259440f615801594a19e36b0ed225bab84fa915bfb5a1fe29d5ae528fc797f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              textDecoration: TextDecoration? = null,
              shadow: Shadow? = null,
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformTextStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
              textMotion: TextMotion? = null,
          ) : this(
              SpanStyle(
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
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = drawStyle,
              ),
              ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 596
    endLine: 630
    sha256: c1b1f2d2ce3506014141d52170b6ad40e417973cf8c88b93ff7a2787de80cad6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak ?: LineBreak.Unspecified,
                  hyphens = hyphens ?: Hyphens.Unspecified,
                  textMotion = textMotion,
              ),
              platformStyle = platformStyle,
          )

          @Stable public fun toSpanStyle(): SpanStyle = spanStyle

          @Stable public fun toParagraphStyle(): ParagraphStyle = paragraphStyle

          /**
           * Merges this style with [other].
           *
           * Properties of [other] take precedence when they are not unspecified (e.g.
           * [Color.Unspecified]). Returns this if [other] is null or [TextStyle.Default].
           *
           * @param other style to merge
           */
          @Stable
          public fun merge(other: TextStyle? = null): TextStyle {
              if (other == null || other == Default) return this
              return TextStyle(
                  spanStyle = toSpanStyle().merge(other.toSpanStyle()),
                  paragraphStyle = toParagraphStyle().merge(other.toParagraphStyle()),
              )
          }

          /**
           * Merges this style with individual styling parameters.
           *
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 631
    endLine: 665
    sha256: b6813d9de164f250ea8338b590f6b3643f218471f4107f0d410fab8b30ff7515
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Similar to [merge] but avoids allocation if parameters are default.
           *
           * Always use this method over the [merge] (taking [TextStyle]) overload when you do not already
           * have a [TextStyle] allocated. Prefer this over [copy] when building a theming system and
           * applying styling information to a specific usage.
           *
           * Example:
           * - `this.color` = [Color.Unspecified], param `color` = [Color.Red] -> result [Color.Red]
           * - `this.color` = [Color.Red], param `color` = [Color.Unspecified] -> result [Color.Red]
           * - `this.color` = [Color.Red], param `color` = [Color.Blue] -> result [Color.Blue]
           *
           * @see merge
           */
          @Stable
          public fun merge(
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
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign = TextAlign.Unspecified,
              textDirection: TextDirection = TextDirection.Unspecified,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              lineHeightStyle: LineHeightStyle? = null,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 666
    endLine: 700
    sha256: 95fadeb33fbbd8db07b29b6ab9761cb9c90f1c003a65f158fdaf93c6a5c67688
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lineBreak: LineBreak = LineBreak.Unspecified,
              hyphens: Hyphens = Hyphens.Unspecified,
              platformStyle: PlatformTextStyle? = null,
              textMotion: TextMotion? = null,
          ): TextStyle {
              val mergedSpanStyle: SpanStyle =
                  spanStyle.fastMerge(
                      color = color,
                      brush = null,
                      alpha = Float.NaN,
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
                      platformStyle = platformStyle?.spanStyle,
                      drawStyle = drawStyle,
                  )
              val mergedParagraphStyle: ParagraphStyle =
                  paragraphStyle.fastMerge(
                      textAlign = textAlign,
                      textDirection = textDirection,
                      lineHeight = lineHeight,
                      textIndent = textIndent,
                      platformStyle = platformStyle?.paragraphStyle,
                      lineHeightStyle = lineHeightStyle,
                      lineBreak = lineBreak,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 701
    endLine: 735
    sha256: 2b98d4175d5c7f35178766c76b674e1b7d6643e71f8b57f750bf9c60cfeb516c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      hyphens = hyphens,
                      textMotion = textMotion,
                  )
              if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) return this
              return TextStyle(mergedSpanStyle, mergedParagraphStyle)
          }

          @Deprecated(
              "merge that takes nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
          )
          @Stable
          public fun merge(
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
              drawStyle: DrawStyle? = null,
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 71
    endLine: 105
    sha256: 4827b7388f545bbe85fa2de9c524a8d0e5a531b0a9fc3a2d160d7309776a125e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  createPlatformTextStyleInternal(spanStyle.platformStyle, paragraphStyle.platformStyle),
          )

          @Deprecated(
              "TextStyle constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
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
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
          ) : this(
              SpanStyle(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 736
    endLine: 770
    sha256: d86d77905c823a0f26449299b23d58d4248d62f76f252221235aaf8a1e1809d5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
              platformStyle: PlatformTextStyle? = null,
              textMotion: TextMotion? = null,
          ): TextStyle {
              val mergedSpanStyle: SpanStyle =
                  spanStyle.fastMerge(
                      color = color,
                      brush = null,
                      alpha = Float.NaN,
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
                      platformStyle = platformStyle?.spanStyle,
                      drawStyle = drawStyle,
                  )
              val mergedParagraphStyle: ParagraphStyle =
                  paragraphStyle.fastMerge(
                      textAlign = textAlign ?: TextAlign.Unspecified,
                      textDirection = textDirection ?: TextDirection.Unspecified,
                      lineHeight = lineHeight,
                      textIndent = textIndent,
                      platformStyle = platformStyle?.paragraphStyle,
                      lineHeightStyle = lineHeightStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 771
    endLine: 805
    sha256: 4fbbacab25b9eebbac05463fe2cac3cee02778eb577523442652c4cff0bfb6e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      lineBreak = lineBreak ?: LineBreak.Unspecified,
                      hyphens = hyphens ?: Hyphens.Unspecified,
                      textMotion = textMotion,
                  )
              if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) return this
              return TextStyle(mergedSpanStyle, mergedParagraphStyle)
          }

          /**
           * Returns a new text style that is a combination of this style and the given [other] style.
           *
           * @see merge
           */
          @Stable
          public fun merge(other: SpanStyle): TextStyle {
              return TextStyle(
                  spanStyle = toSpanStyle().merge(other),
                  paragraphStyle = toParagraphStyle(),
              )
          }

          /**
           * Returns a new text style that is a combination of this style and the given [other] style.
           *
           * @see merge
           */
          @Stable
          public fun merge(other: ParagraphStyle): TextStyle {
              return TextStyle(
                  spanStyle = toSpanStyle(),
                  paragraphStyle = toParagraphStyle().merge(other),
              )
          }

          /** Plus operator overload that applies a [merge]. */
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 806
    endLine: 840
    sha256: 5f9350127a8507cf6b31e846ae31179d21bb4d0f6615dd5a99c4cd158805a2e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Stable public operator fun plus(other: TextStyle): TextStyle = this.merge(other)

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: ParagraphStyle): TextStyle = this.merge(other)

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: SpanStyle): TextStyle = this.merge(other)

          @Deprecated(
              "TextStyle copy constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.spanStyle.color,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              textAlign: TextAlign? = this.paragraphStyle.textAlign,
              textDirection: TextDirection? = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
          ): TextStyle {
              return TextStyle(
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 841
    endLine: 875
    sha256: d128b0db53012102d78f31d839eb4dafbabe34697bf18a86630f598579190402
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  spanStyle =
                      SpanStyle(
                          textForegroundStyle =
                              if (color == this.spanStyle.color) {
                                  spanStyle.textForegroundStyle
                              } else {
                                  TextForegroundStyle.from(color)
                              },
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
                          platformStyle = this.spanStyle.platformStyle,
                          drawStyle = this.spanStyle.drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = this.paragraphStyle.platformStyle,
                          lineHeightStyle = this.lineHeightStyle,
                          lineBreak = this.lineBreak,
                          hyphens = this.hyphens,
                          textMotion = this.textMotion,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 876
    endLine: 910
    sha256: a4644e65cd8fd71a5787cd45a7890c08130839dc097213d56c13da3be7131166
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      ),
                  platformStyle = this.platformStyle,
              )
          }

          @Deprecated(
              "TextStyle copy constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.spanStyle.color,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              textAlign: TextAlign? = this.paragraphStyle.textAlign,
              textDirection: TextDirection? = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 911
    endLine: 945
    sha256: e3d0d4003c4a948f7c6caa4fdf71970135579f8175ecdfe7be49b365d0acd668
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      SpanStyle(
                          textForegroundStyle =
                              if (color == this.spanStyle.color) {
                                  spanStyle.textForegroundStyle
                              } else {
                                  TextForegroundStyle.from(color)
                              },
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = this.spanStyle.drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = this.lineBreak,
                          hyphens = this.hyphens,
                          textMotion = this.textMotion,
                      ),
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 946
    endLine: 980
    sha256: b386be40bcf54f21505394d9f389bc6814ea5c00aa93e13cb5de021fd6795112
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  platformStyle = platformStyle,
              )
          }

          @Deprecated(
              "TextStyle copy constructors that do not take new stable parameters " +
                  "like LineBreak, Hyphens, and TextMotion are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              color: Color = this.spanStyle.color,
              fontSize: TextUnit = this.spanStyle.fontSize,
              fontWeight: FontWeight? = this.spanStyle.fontWeight,
              fontStyle: FontStyle? = this.spanStyle.fontStyle,
              fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
              fontFamily: FontFamily? = this.spanStyle.fontFamily,
              fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
              letterSpacing: TextUnit = this.spanStyle.letterSpacing,
              baselineShift: BaselineShift? = this.spanStyle.baselineShift,
              textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
              localeList: LocaleList? = this.spanStyle.localeList,
              background: Color = this.spanStyle.background,
              textDecoration: TextDecoration? = this.spanStyle.textDecoration,
              shadow: Shadow? = this.spanStyle.shadow,
              textAlign: TextAlign? = this.paragraphStyle.textAlign,
              textDirection: TextDirection? = this.paragraphStyle.textDirection,
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak? = this.paragraphStyle.lineBreak,
              hyphens: Hyphens? = this.paragraphStyle.hyphens,
          ): TextStyle {
              return TextStyle(
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 981
    endLine: 1015
    sha256: ab4b62378e5a82db0279def62437037856ff5571a37d565823d43031668795c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  spanStyle =
                      SpanStyle(
                          textForegroundStyle =
                              if (color == this.spanStyle.color) {
                                  spanStyle.textForegroundStyle
                              } else {
                                  TextForegroundStyle.from(color)
                              },
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
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = this.drawStyle,
                      ),
                  paragraphStyle =
                      ParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak ?: LineBreak.Unspecified,
                          hyphens = hyphens ?: Hyphens.Unspecified,
                          textMotion = this.textMotion,
compose:
  id: live-androidx-ui-ui-text-ui-text-textstyle
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1
      title: androidx.compose.ui.text TextStyle.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1016
      title: androidx.compose.ui.text TextStyle.kt source (lines 1016–1050)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1016-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1051
      title: androidx.compose.ui.text TextStyle.kt source (lines 1051–1085)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1051-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-106
      title: androidx.compose.ui.text TextStyle.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1086
      title: androidx.compose.ui.text TextStyle.kt source (lines 1086–1120)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1086-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1121
      title: androidx.compose.ui.text TextStyle.kt source (lines 1121–1155)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1121-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1156
      title: androidx.compose.ui.text TextStyle.kt source (lines 1156–1190)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1156-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1191
      title: androidx.compose.ui.text TextStyle.kt source (lines 1191–1225)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1191-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1226
      title: androidx.compose.ui.text TextStyle.kt source (lines 1226–1260)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1226-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1261
      title: androidx.compose.ui.text TextStyle.kt source (lines 1261–1295)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1261-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1296
      title: androidx.compose.ui.text TextStyle.kt source (lines 1296–1330)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1296-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1331
      title: androidx.compose.ui.text TextStyle.kt source (lines 1331–1365)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1331-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1366
      title: androidx.compose.ui.text TextStyle.kt source (lines 1366–1400)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1366-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1401
      title: androidx.compose.ui.text TextStyle.kt source (lines 1401–1435)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1401-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-141
      title: androidx.compose.ui.text TextStyle.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1436
      title: androidx.compose.ui.text TextStyle.kt source (lines 1436–1470)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1436-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1471
      title: androidx.compose.ui.text TextStyle.kt source (lines 1471–1505)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1471-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1506
      title: androidx.compose.ui.text TextStyle.kt source (lines 1506–1540)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1506-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1541
      title: androidx.compose.ui.text TextStyle.kt source (lines 1541–1575)
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.lerp
        - androidx.compose.ui.text.resolveDefaults
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1541-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1576
      title: androidx.compose.ui.text TextStyle.kt source (lines 1576–1595)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1576-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-176
      title: androidx.compose.ui.text TextStyle.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-211
      title: androidx.compose.ui.text TextStyle.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-246
      title: androidx.compose.ui.text TextStyle.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-281
      title: androidx.compose.ui.text TextStyle.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-316
      title: androidx.compose.ui.text TextStyle.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-351
      title: androidx.compose.ui.text TextStyle.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-36
      title: androidx.compose.ui.text TextStyle.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-386
      title: androidx.compose.ui.text TextStyle.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-421
      title: androidx.compose.ui.text TextStyle.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-456
      title: androidx.compose.ui.text TextStyle.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-491
      title: androidx.compose.ui.text TextStyle.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-526
      title: androidx.compose.ui.text TextStyle.kt source (lines 526–560)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-561
      title: androidx.compose.ui.text TextStyle.kt source (lines 561–595)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-596
      title: androidx.compose.ui.text TextStyle.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-631
      title: androidx.compose.ui.text TextStyle.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-666
      title: androidx.compose.ui.text TextStyle.kt source (lines 666–700)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-701
      title: androidx.compose.ui.text TextStyle.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-701-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-71
      title: androidx.compose.ui.text TextStyle.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-71-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-736
      title: androidx.compose.ui.text TextStyle.kt source (lines 736–770)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-771
      title: androidx.compose.ui.text TextStyle.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-806
      title: androidx.compose.ui.text TextStyle.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-841
      title: androidx.compose.ui.text TextStyle.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-876
      title: androidx.compose.ui.text TextStyle.kt source (lines 876–910)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-876-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-911
      title: androidx.compose.ui.text TextStyle.kt source (lines 911–945)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-911-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-946
      title: androidx.compose.ui.text TextStyle.kt source (lines 946–980)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-946-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-981
      title: androidx.compose.ui.text TextStyle.kt source (lines 981–1015)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-981-source
      relatedIds: []
---

# androidx.compose.ui.text TextStyle.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt

## androidx.compose.ui.text TextStyle.kt source (lines 1–35)

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
import androidx.compose.ui.graphics.drawscope.DrawStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontSynthesis
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.intl.LocaleList
import androidx.compose.ui.text.style.BaselineShift
import androidx.compose.ui.text.style.Hyphens
import androidx.compose.ui.text.style.LineBreak
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1016–1050)

                ),
            platformStyle = platformStyle,
        )
    }

    @Deprecated(
        "copy constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.spanStyle.color,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        drawStyle: DrawStyle? = this.spanStyle.drawStyle,
        textAlign: TextAlign? = this.paragraphStyle.textAlign,
        textDirection: TextDirection? = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak? = this.paragraphStyle.lineBreak,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1051–1085)

        hyphens: Hyphens? = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(
            spanStyle =
                SpanStyle(
                    textForegroundStyle =
                        if (color == this.spanStyle.color) {
                            spanStyle.textForegroundStyle
                        } else {
                            TextForegroundStyle.from(color)
                        },
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 106–140)

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
        ),
        ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = null,
            lineHeightStyle = null,
            lineBreak = LineBreak.Unspecified,
            hyphens = Hyphens.Unspecified,
            textMotion = null,
        ),
        platformStyle = null,
    )

    @Deprecated(
        "TextStyle constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        color: Color = Color.Unspecified,
        fontSize: TextUnit = TextUnit.Unspecified,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1086–1120)

                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak ?: LineBreak.Unspecified,
                    hyphens = hyphens ?: Hyphens.Unspecified,
                    textMotion = textMotion,
                ),
            platformStyle = platformStyle,
        )
    }

    public fun copy(
        color: Color = this.spanStyle.color,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        drawStyle: DrawStyle? = this.spanStyle.drawStyle,
        textAlign: TextAlign = this.paragraphStyle.textAlign,
        textDirection: TextDirection = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak = this.paragraphStyle.lineBreak,
        hyphens: Hyphens = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1121–1155)

        return TextStyle(
            spanStyle =
                SpanStyle(
                    textForegroundStyle =
                        if (color == this.spanStyle.color) {
                            spanStyle.textForegroundStyle
                        } else {
                            TextForegroundStyle.from(color)
                        },
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign,
                    textDirection = textDirection,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak,
                    hyphens = hyphens,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1156–1190)

                    textMotion = textMotion,
                ),
            platformStyle = platformStyle,
        )
    }

    @Deprecated(
        "copy constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        brush: Brush?,
        alpha: Float = this.spanStyle.alpha,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        drawStyle: DrawStyle? = this.spanStyle.drawStyle,
        textAlign: TextAlign? = this.paragraphStyle.textAlign,
        textDirection: TextDirection? = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1191–1225)

        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak? = this.paragraphStyle.lineBreak,
        hyphens: Hyphens? = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(
            spanStyle =
                SpanStyle(
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak ?: LineBreak.Unspecified,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1226–1260)

                    hyphens = hyphens ?: Hyphens.Unspecified,
                    textMotion = textMotion,
                ),
            platformStyle = platformStyle,
        )
    }

    public fun copy(
        brush: Brush?,
        alpha: Float = this.spanStyle.alpha,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        drawStyle: DrawStyle? = this.spanStyle.drawStyle,
        textAlign: TextAlign = this.paragraphStyle.textAlign,
        textDirection: TextDirection = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak = this.paragraphStyle.lineBreak,
        hyphens: Hyphens = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1261–1295)

            spanStyle =
                SpanStyle(
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign,
                    textDirection = textDirection,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak,
                    hyphens = hyphens,
                    textMotion = textMotion,
                ),
            platformStyle = platformStyle,
        )
    }

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1261-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1296–1330)


    /** The brush to use when drawing text. If not null, overrides [color]. */
    public val brush: Brush?
        get() = this.spanStyle.brush

    /** The text color. */
    public val color: Color
        get() = this.spanStyle.color

    /**
     * Opacity of text. This value is either provided along side Brush, or via alpha channel in
     * color.
     */
    public val alpha: Float
        get() = this.spanStyle.alpha

    /**
     * The size of glyphs to use when painting the text. This may be [TextUnit.Unspecified] for
     * inheriting from another [TextStyle].
     */
    public val fontSize: TextUnit
        get() = this.spanStyle.fontSize

    /** The typeface thickness to use when painting the text (e.g., bold). */
    public val fontWeight: FontWeight?
        get() = this.spanStyle.fontWeight

    /** The typeface variant to use when drawing the letters (e.g., italic). */
    public val fontStyle: FontStyle?
        get() = this.spanStyle.fontStyle

    /**
     * Whether to synthesize font weight and/or style when the requested weight or style cannot be
     * found in the provided font family.
     */

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1296-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1331–1365)

    public val fontSynthesis: FontSynthesis?
        get() = this.spanStyle.fontSynthesis

    /** The font family to be used when rendering the text. */
    public val fontFamily: FontFamily?
        get() = this.spanStyle.fontFamily

    /**
     * The advanced typography settings provided by font. The format is the same as the CSS
     * font-feature-settings attribute:
     * https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     */
    public val fontFeatureSettings: String?
        get() = this.spanStyle.fontFeatureSettings

    /** The amount of space to add between each letter. */
    public val letterSpacing: TextUnit
        get() = this.spanStyle.letterSpacing

    /** The amount by which the text is shifted up from the current baseline. */
    public val baselineShift: BaselineShift?
        get() = this.spanStyle.baselineShift

    /** The geometric transformation applied the text. */
    public val textGeometricTransform: TextGeometricTransform?
        get() = this.spanStyle.textGeometricTransform

    /** The locale list used to select region-specific glyphs. */
    public val localeList: LocaleList?
        get() = this.spanStyle.localeList

    /** The background color for the text. */
    public val background: Color
        get() = this.spanStyle.background


Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1331-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1366–1400)

    /** The decorations to paint on the text (e.g., an underline). */
    public val textDecoration: TextDecoration?
        get() = this.spanStyle.textDecoration

    /** The shadow effect applied on the text. */
    public val shadow: Shadow?
        get() = this.spanStyle.shadow

    /** Drawing style of text, whether fill in the text while drawing or stroke around the edges. */
    public val drawStyle: DrawStyle?
        get() = this.spanStyle.drawStyle

    /** The alignment of the text within the lines of the paragraph. */
    public val textAlign: TextAlign
        get() = this.paragraphStyle.textAlign

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getTextAlign-buA522U") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_textAlign: TextAlign?
        get() = this.textAlign

    /**
     * The algorithm to be used to resolve the final text and paragraph direction: Left To Right or
     * Right To Left. If no value is provided the system will use the [LayoutDirection] as the
     * primary signal.
     */
    public val textDirection: TextDirection
        get() = this.paragraphStyle.textDirection

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getTextDirection-mmuk1to") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_textDirection: TextDirection?
        get() = this.textDirection

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1366-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1401–1435)


    /** Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. */
    public val lineHeight: TextUnit
        get() = this.paragraphStyle.lineHeight

    /** The indentation of the paragraph. */
    public val textIndent: TextIndent?
        get() = this.paragraphStyle.textIndent

    /**
     * The configuration for line height such as vertical alignment of the line, whether to apply
     * additional space as a result of line height to top of first line top and bottom of last line.
     *
     * The configuration is applied only when a [lineHeight] is defined.
     *
     * When null, [LineHeightStyle.Default] is used.
     */
    public val lineHeightStyle: LineHeightStyle?
        get() = this.paragraphStyle.lineHeightStyle

    /** The hyphens configuration of the paragraph. */
    public val hyphens: Hyphens
        get() = this.paragraphStyle.hyphens

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getHyphens-EaSxIns") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_hyphens: Hyphens?
        get() = this.hyphens

    /** The line breaking configuration of the paragraph. */
    public val lineBreak: LineBreak
        get() = this.paragraphStyle.lineBreak

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1401-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 141–175)

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
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
    ) : this(
        SpanStyle(
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
            platformStyle = platformStyle?.spanStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1436–1470)

    @get:JvmName("getLineBreak-LgCVezo") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_lineBreak: LineBreak?
        get() = this.lineBreak

    /** Text character placement configuration, whether to optimize for animated or static text. */
    public val textMotion: TextMotion?
        get() = this.paragraphStyle.textMotion

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is TextStyle) return false

        if (spanStyle != other.spanStyle) return false
        if (paragraphStyle != other.paragraphStyle) return false
        if (platformStyle != other.platformStyle) return false

        return true
    }

    /**
     * Returns true if text layout affecting attributes between this TextStyle and other are the
     * same.
     *
     * The attributes that do not require a layout change are color, textDecoration and shadow.
     *
     * Majority of attributes change text layout, and examples are line height, font properties,
     * font size, locale etc.
     *
     * This function can be used to identify if a new text layout is required for a given TextStyle.
     *
     * @param other The TextStyle to compare to.
     */
    public fun hasSameLayoutAffectingAttributes(other: TextStyle): Boolean {
        return (this === other) ||

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1436-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1471–1505)

            (paragraphStyle == other.paragraphStyle &&
                spanStyle.hasSameLayoutAffectingAttributes(other.spanStyle))
    }

    public fun hasSameDrawAffectingAttributes(other: TextStyle): Boolean {
        return (this === other) || (spanStyle.hasSameNonLayoutAttributes(other.spanStyle))
    }

    override fun hashCode(): Int {
        var result = spanStyle.hashCode()
        result = 31 * result + paragraphStyle.hashCode()
        result = 31 * result + (platformStyle?.hashCode() ?: 0)
        return result
    }

    internal fun hashCodeLayoutAffectingAttributes(): Int {
        var result = spanStyle.hashCodeLayoutAffectingAttributes()
        result = 31 * result + paragraphStyle.hashCode()
        result = 31 * result + (platformStyle?.hashCode() ?: 0)
        return result
    }

    override fun toString(): String {
        return "TextStyle(" +
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1471-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1506–1540)

            "textGeometricTransform=$textGeometricTransform, " +
            "localeList=$localeList, " +
            "background=$background, " +
            "textDecoration=$textDecoration, " +
            "shadow=$shadow, " +
            "drawStyle=$drawStyle, " +
            "textAlign=$textAlign, " +
            "textDirection=$textDirection, " +
            "lineHeight=$lineHeight, " +
            "textIndent=$textIndent, " +
            "platformStyle=$platformStyle, " +
            "lineHeightStyle=$lineHeightStyle, " +
            "lineBreak=$lineBreak, " +
            "hyphens=$hyphens, " +
            "textMotion=$textMotion" +
            ")"
    }

    public companion object {
        /** Constant for default text style. */
        @Stable public val Default: TextStyle = TextStyle()
    }
}

/**
 * Interpolate between two text styles.
 *
 * This will not work well if the styles don't set the same fields.
 *
 * The [fraction] argument represents position on the timeline, with 0.0 meaning that the
 * interpolation has not started, returning [start] (or something equivalent to [start]), 1.0
 * meaning that the interpolation has finished, returning [stop] (or something equivalent to
 * [stop]), and values in between meaning that the interpolation is at the relevant point on the
 * timeline between [start] and [stop]. The interpolation can be extrapolated beyond 0.0 and 1.0, so
 * negative values and values greater than 1.0 are valid.

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1506-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1541–1575)

 */
public fun lerp(start: TextStyle, stop: TextStyle, fraction: Float): TextStyle {
    return TextStyle(
        spanStyle = lerp(start.toSpanStyle(), stop.toSpanStyle(), fraction),
        paragraphStyle = lerp(start.toParagraphStyle(), stop.toParagraphStyle(), fraction),
    )
}

/**
 * Fills missing values in TextStyle with default values and resolve [TextDirection].
 *
 * This function will fill all null or [TextUnit.Unspecified] field with actual values.
 *
 * @param style a text style to be resolved
 * @param direction a layout direction to be used for resolving text layout direction algorithm
 * @return resolved text style.
 */
public fun resolveDefaults(style: TextStyle, direction: LayoutDirection): TextStyle =
    TextStyle(
        spanStyle = resolveSpanStyleDefaults(style.spanStyle),
        paragraphStyle = resolveParagraphStyleDefaults(style.paragraphStyle, direction),
        platformStyle = style.platformStyle,
    )

/** If [textDirection] is null returns a [TextDirection] based on [layoutDirection]. */
internal fun resolveTextDirection(
    layoutDirection: LayoutDirection,
    textDirection: TextDirection,
): TextDirection {
    return when (textDirection) {
        TextDirection.Content ->
            when (layoutDirection) {
                LayoutDirection.Ltr -> TextDirection.ContentOrLtr
                LayoutDirection.Rtl -> TextDirection.ContentOrRtl
            }

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1541-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1576–1595)

        TextDirection.Unspecified ->
            when (layoutDirection) {
                LayoutDirection.Ltr -> TextDirection.Ltr
                LayoutDirection.Rtl -> TextDirection.Rtl
            }
        else -> textDirection
    }
}

private fun createPlatformTextStyleInternal(
    platformSpanStyle: PlatformSpanStyle?,
    platformParagraphStyle: PlatformParagraphStyle?,
): PlatformTextStyle? {
    return if (platformSpanStyle == null && platformParagraphStyle == null) {
        null
    } else {
        createPlatformTextStyle(platformSpanStyle, platformParagraphStyle)
    }
}


Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1576-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 176–210)

            drawStyle = null,
        ),
        ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = LineBreak.Unspecified,
            hyphens = Hyphens.Unspecified,
            textMotion = null,
        ),
        platformStyle = platformStyle,
    )

    /**
     * Styling configuration for a `Text`.
     *
     * @sample androidx.compose.ui.text.samples.TextStyleSample
     * @param color The text color.
     * @param fontSize The size of glyphs to use when painting the text. This may be
     *   [TextUnit.Unspecified] for inheriting from another [TextStyle].
     * @param fontWeight The typeface thickness to use when painting the text (e.g., bold).
     * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic).
     * @param fontSynthesis Whether to synthesize font weight and/or style when the requested weight
     *   or style cannot be found in the provided font family.
     * @param fontFamily The font family to be used when rendering the text.
     * @param fontFeatureSettings The advanced typography settings provided by font. The format is
     *   the same as the CSS font-feature-settings attribute:
     *   https://www.w3.org/TR/css-fonts-3/#font-feature-settings-prop
     * @param letterSpacing The amount of space to add between each letter.
     * @param baselineShift The amount by which the text is shifted up from the current baseline.
     * @param textGeometricTransform The geometric transformation applied the text.
     * @param localeList The locale list used to select region-specific glyphs.

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 211–245)

     * @param background The background color for the text.
     * @param textDecoration The decorations to paint on the text (e.g., an underline).
     * @param shadow The shadow effect applied on the text.
     * @param textAlign The alignment of the text within the lines of the paragraph.
     * @param textDirection The algorithm to be used to resolve the final text and paragraph
     *   direction: Left To Right or Right To Left. If no value is provided the system will use the
     *   [LayoutDirection] as the primary signal.
     * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM.
     * @param textIndent The indentation of the paragraph.
     * @param platformStyle Platform specific [TextStyle] parameters.
     * @param lineHeightStyle the configuration for line height such as vertical alignment of the
     *   line, whether to apply additional space as a result of line height to top of first line top
     *   and bottom of last line. The configuration is applied only when a [lineHeight] is defined.
     *   When null, [LineHeightStyle.Default] is used.
     * @param lineBreak The line breaking configuration for the text.
     * @param hyphens The configuration of hyphenation.
     */
    @Deprecated(
        "TextStyle constructors that do not take new stable parameters " +
            "like TextMotion are deprecated. Please use the new stable " +
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 246–280)

        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
    ) : this(
        SpanStyle(
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
            platformStyle = platformStyle?.spanStyle,
        ),
        ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 281–315)

            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak ?: LineBreak.Unspecified,
            hyphens = hyphens ?: Hyphens.Unspecified,
        ),
        platformStyle = platformStyle,
    )

    @Deprecated(
        "TextStyle constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
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
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 316–350)

        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
        textMotion: TextMotion? = null,
    ) : this(
        SpanStyle(
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
            platformStyle = platformStyle?.spanStyle,
            drawStyle = drawStyle,
        ),
        ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak ?: LineBreak.Unspecified,
            hyphens = hyphens ?: Hyphens.Unspecified,
            textMotion = textMotion,
        ),
        platformStyle = platformStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 351–385)

    )

    /**
     * Styling configuration for text.
     *
     * @sample androidx.compose.ui.text.samples.TextStyleSample
     * @param color color to apply to the text
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
     * @param drawStyle drawing style (fill or stroke)
     * @param textAlign alignment of the text within the lines of the paragraph.
     * @param textDirection [TextDirection] direction resolution algorithm, defaults to
     *   [LayoutDirection] signal
     * @param lineHeight line height
     * @param textIndent paragraph indentation
     * @param platformStyle platform-specific parameters
     * @param lineHeightStyle line height distribution configuration
     * @param lineBreak line breaking rules
     * @param hyphens hyphenation configuration.
     * @param textMotion [TextMotion] character placement optimization

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 36–70)

import androidx.compose.ui.text.style.TextDirection
import androidx.compose.ui.text.style.TextForegroundStyle
import androidx.compose.ui.text.style.TextGeometricTransform
import androidx.compose.ui.text.style.TextIndent
import androidx.compose.ui.text.style.TextMotion
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.TextUnit
import kotlin.jvm.JvmName

/**
 * Styling configuration for text.
 *
 * @sample androidx.compose.ui.text.samples.TextStyleSample
 * @sample androidx.compose.ui.text.samples.TextStyleBrushSample
 * @param platformStyle platform specific [TextStyle] parameters
 * @see AnnotatedString
 * @see SpanStyle
 * @see ParagraphStyle
 */
// Maintainer note: When adding a new constructor or copy parameter, make sure to add a test case to
// TextStyleInvalidationTest to ensure the correct phase(s) get invalidated.
@Immutable
public class TextStyle
internal constructor(
    internal val spanStyle: SpanStyle,
    internal val paragraphStyle: ParagraphStyle,
    public val platformStyle: PlatformTextStyle? = null,
) {
    internal constructor(
        spanStyle: SpanStyle,
        paragraphStyle: ParagraphStyle,
    ) : this(
        spanStyle = spanStyle,
        paragraphStyle = paragraphStyle,
        platformStyle =

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 386–420)

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
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign = TextAlign.Unspecified,
        textDirection: TextDirection = TextDirection.Unspecified,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak = LineBreak.Unspecified,
        hyphens: Hyphens = Hyphens.Unspecified,
        textMotion: TextMotion? = null,
    ) : this(
        SpanStyle(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 421–455)

            letterSpacing = letterSpacing,
            baselineShift = baselineShift,
            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,
            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = platformStyle?.spanStyle,
            drawStyle = drawStyle,
        ),
        ParagraphStyle(
            textAlign = textAlign,
            textDirection = textDirection,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak,
            hyphens = hyphens,
            textMotion = textMotion,
        ),
        platformStyle = platformStyle,
    )

    /**
     * Styling configuration for text.
     *
     * @sample androidx.compose.ui.text.samples.TextStyleBrushSample
     * @param brush [Brush] for painting text, null for unspecified
     * @param alpha opacity applied to [brush] (0.0 to 1.0)
     * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
     *   style.
     * @param fontWeight typeface thickness (e.g., bold)
     * @param fontStyle typeface variant (e.g., italic)
     * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 456–490)

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
     * @param drawStyle drawing style (fill or stroke)
     * @param textAlign alignment of the text within the lines of the paragraph.
     * @param textDirection [TextDirection] direction resolution algorithm, defaults to
     *   [LayoutDirection] signal
     * @param lineHeight line height
     * @param textIndent paragraph indentation
     * @param platformStyle platform-specific parameters
     * @param lineHeightStyle line height distribution configuration
     * @param lineBreak line breaking rules
     * @param hyphens hyphenation configuration.
     * @param textMotion [TextMotion] character placement optimization
     */
    public constructor(
        brush: Brush?,
        alpha: Float = Float.NaN,
        fontSize: TextUnit = TextUnit.Unspecified,
        fontWeight: FontWeight? = null,
        fontStyle: FontStyle? = null,
        fontSynthesis: FontSynthesis? = null,
        fontFamily: FontFamily? = null,
        fontFeatureSettings: String? = null,
        letterSpacing: TextUnit = TextUnit.Unspecified,
        baselineShift: BaselineShift? = null,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 491–525)

        textGeometricTransform: TextGeometricTransform? = null,
        localeList: LocaleList? = null,
        background: Color = Color.Unspecified,
        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign = TextAlign.Unspecified,
        textDirection: TextDirection = TextDirection.Unspecified,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak = LineBreak.Unspecified,
        hyphens: Hyphens = Hyphens.Unspecified,
        textMotion: TextMotion? = null,
    ) : this(
        SpanStyle(
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
            platformStyle = platformStyle?.spanStyle,
            drawStyle = drawStyle,
        ),

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 526–560)

        ParagraphStyle(
            textAlign = textAlign,
            textDirection = textDirection,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak,
            hyphens = hyphens,
            textMotion = textMotion,
        ),
        platformStyle = platformStyle,
    )

    @Deprecated(
        "TextStyle constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        brush: Brush?,
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 561–595)

        textDecoration: TextDecoration? = null,
        shadow: Shadow? = null,
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformTextStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
        textMotion: TextMotion? = null,
    ) : this(
        SpanStyle(
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
            platformStyle = platformStyle?.spanStyle,
            drawStyle = drawStyle,
        ),
        ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 596–630)

            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak ?: LineBreak.Unspecified,
            hyphens = hyphens ?: Hyphens.Unspecified,
            textMotion = textMotion,
        ),
        platformStyle = platformStyle,
    )

    @Stable public fun toSpanStyle(): SpanStyle = spanStyle

    @Stable public fun toParagraphStyle(): ParagraphStyle = paragraphStyle

    /**
     * Merges this style with [other].
     *
     * Properties of [other] take precedence when they are not unspecified (e.g.
     * [Color.Unspecified]). Returns this if [other] is null or [TextStyle.Default].
     *
     * @param other style to merge
     */
    @Stable
    public fun merge(other: TextStyle? = null): TextStyle {
        if (other == null || other == Default) return this
        return TextStyle(
            spanStyle = toSpanStyle().merge(other.toSpanStyle()),
            paragraphStyle = toParagraphStyle().merge(other.toParagraphStyle()),
        )
    }

    /**
     * Merges this style with individual styling parameters.
     *

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 631–665)

     * Similar to [merge] but avoids allocation if parameters are default.
     *
     * Always use this method over the [merge] (taking [TextStyle]) overload when you do not already
     * have a [TextStyle] allocated. Prefer this over [copy] when building a theming system and
     * applying styling information to a specific usage.
     *
     * Example:
     * - `this.color` = [Color.Unspecified], param `color` = [Color.Red] -> result [Color.Red]
     * - `this.color` = [Color.Red], param `color` = [Color.Unspecified] -> result [Color.Red]
     * - `this.color` = [Color.Red], param `color` = [Color.Blue] -> result [Color.Blue]
     *
     * @see merge
     */
    @Stable
    public fun merge(
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
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign = TextAlign.Unspecified,
        textDirection: TextDirection = TextDirection.Unspecified,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        lineHeightStyle: LineHeightStyle? = null,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 666–700)

        lineBreak: LineBreak = LineBreak.Unspecified,
        hyphens: Hyphens = Hyphens.Unspecified,
        platformStyle: PlatformTextStyle? = null,
        textMotion: TextMotion? = null,
    ): TextStyle {
        val mergedSpanStyle: SpanStyle =
            spanStyle.fastMerge(
                color = color,
                brush = null,
                alpha = Float.NaN,
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
                platformStyle = platformStyle?.spanStyle,
                drawStyle = drawStyle,
            )
        val mergedParagraphStyle: ParagraphStyle =
            paragraphStyle.fastMerge(
                textAlign = textAlign,
                textDirection = textDirection,
                lineHeight = lineHeight,
                textIndent = textIndent,
                platformStyle = platformStyle?.paragraphStyle,
                lineHeightStyle = lineHeightStyle,
                lineBreak = lineBreak,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 701–735)

                hyphens = hyphens,
                textMotion = textMotion,
            )
        if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) return this
        return TextStyle(mergedSpanStyle, mergedParagraphStyle)
    }

    @Deprecated(
        "merge that takes nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,
    )
    @Stable
    public fun merge(
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
        drawStyle: DrawStyle? = null,
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 71–105)

            createPlatformTextStyleInternal(spanStyle.platformStyle, paragraphStyle.platformStyle),
    )

    @Deprecated(
        "TextStyle constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
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
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
    ) : this(
        SpanStyle(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 736–770)

        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
        platformStyle: PlatformTextStyle? = null,
        textMotion: TextMotion? = null,
    ): TextStyle {
        val mergedSpanStyle: SpanStyle =
            spanStyle.fastMerge(
                color = color,
                brush = null,
                alpha = Float.NaN,
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
                platformStyle = platformStyle?.spanStyle,
                drawStyle = drawStyle,
            )
        val mergedParagraphStyle: ParagraphStyle =
            paragraphStyle.fastMerge(
                textAlign = textAlign ?: TextAlign.Unspecified,
                textDirection = textDirection ?: TextDirection.Unspecified,
                lineHeight = lineHeight,
                textIndent = textIndent,
                platformStyle = platformStyle?.paragraphStyle,
                lineHeightStyle = lineHeightStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 771–805)

                lineBreak = lineBreak ?: LineBreak.Unspecified,
                hyphens = hyphens ?: Hyphens.Unspecified,
                textMotion = textMotion,
            )
        if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) return this
        return TextStyle(mergedSpanStyle, mergedParagraphStyle)
    }

    /**
     * Returns a new text style that is a combination of this style and the given [other] style.
     *
     * @see merge
     */
    @Stable
    public fun merge(other: SpanStyle): TextStyle {
        return TextStyle(
            spanStyle = toSpanStyle().merge(other),
            paragraphStyle = toParagraphStyle(),
        )
    }

    /**
     * Returns a new text style that is a combination of this style and the given [other] style.
     *
     * @see merge
     */
    @Stable
    public fun merge(other: ParagraphStyle): TextStyle {
        return TextStyle(
            spanStyle = toSpanStyle(),
            paragraphStyle = toParagraphStyle().merge(other),
        )
    }

    /** Plus operator overload that applies a [merge]. */

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 806–840)

    @Stable public operator fun plus(other: TextStyle): TextStyle = this.merge(other)

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: ParagraphStyle): TextStyle = this.merge(other)

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: SpanStyle): TextStyle = this.merge(other)

    @Deprecated(
        "TextStyle copy constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.spanStyle.color,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        textAlign: TextAlign? = this.paragraphStyle.textAlign,
        textDirection: TextDirection? = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
    ): TextStyle {
        return TextStyle(

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 841–875)

            spanStyle =
                SpanStyle(
                    textForegroundStyle =
                        if (color == this.spanStyle.color) {
                            spanStyle.textForegroundStyle
                        } else {
                            TextForegroundStyle.from(color)
                        },
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
                    platformStyle = this.spanStyle.platformStyle,
                    drawStyle = this.spanStyle.drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = this.paragraphStyle.platformStyle,
                    lineHeightStyle = this.lineHeightStyle,
                    lineBreak = this.lineBreak,
                    hyphens = this.hyphens,
                    textMotion = this.textMotion,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 876–910)

                ),
            platformStyle = this.platformStyle,
        )
    }

    @Deprecated(
        "TextStyle copy constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.spanStyle.color,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        textAlign: TextAlign? = this.paragraphStyle.textAlign,
        textDirection: TextDirection? = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
    ): TextStyle {
        return TextStyle(
            spanStyle =

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 911–945)

                SpanStyle(
                    textForegroundStyle =
                        if (color == this.spanStyle.color) {
                            spanStyle.textForegroundStyle
                        } else {
                            TextForegroundStyle.from(color)
                        },
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = this.spanStyle.drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = this.lineBreak,
                    hyphens = this.hyphens,
                    textMotion = this.textMotion,
                ),

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 946–980)

            platformStyle = platformStyle,
        )
    }

    @Deprecated(
        "TextStyle copy constructors that do not take new stable parameters " +
            "like LineBreak, Hyphens, and TextMotion are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        color: Color = this.spanStyle.color,
        fontSize: TextUnit = this.spanStyle.fontSize,
        fontWeight: FontWeight? = this.spanStyle.fontWeight,
        fontStyle: FontStyle? = this.spanStyle.fontStyle,
        fontSynthesis: FontSynthesis? = this.spanStyle.fontSynthesis,
        fontFamily: FontFamily? = this.spanStyle.fontFamily,
        fontFeatureSettings: String? = this.spanStyle.fontFeatureSettings,
        letterSpacing: TextUnit = this.spanStyle.letterSpacing,
        baselineShift: BaselineShift? = this.spanStyle.baselineShift,
        textGeometricTransform: TextGeometricTransform? = this.spanStyle.textGeometricTransform,
        localeList: LocaleList? = this.spanStyle.localeList,
        background: Color = this.spanStyle.background,
        textDecoration: TextDecoration? = this.spanStyle.textDecoration,
        shadow: Shadow? = this.spanStyle.shadow,
        textAlign: TextAlign? = this.paragraphStyle.textAlign,
        textDirection: TextDirection? = this.paragraphStyle.textDirection,
        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak? = this.paragraphStyle.lineBreak,
        hyphens: Hyphens? = this.paragraphStyle.hyphens,
    ): TextStyle {
        return TextStyle(

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 981–1015)

            spanStyle =
                SpanStyle(
                    textForegroundStyle =
                        if (color == this.spanStyle.color) {
                            spanStyle.textForegroundStyle
                        } else {
                            TextForegroundStyle.from(color)
                        },
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
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = this.drawStyle,
                ),
            paragraphStyle =
                ParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak ?: LineBreak.Unspecified,
                    hyphens = hyphens ?: Hyphens.Unspecified,
                    textMotion = this.textMotion,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)
