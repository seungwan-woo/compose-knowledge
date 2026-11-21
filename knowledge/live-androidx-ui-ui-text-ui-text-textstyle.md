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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1008-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1008
    endLine: 1042
    sha256: b256149b4fe8fbff3213d345e9ae828d224168cd38e3d3078446f3645d1bf1cc
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
                      ),
                  paragraphStyle =
                      createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1043-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1043
    endLine: 1077
    sha256: 3eae6d49ff3c116792637c23213a8aa9cd64e59234dac58f18e338d7e6fbb2b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  spanStyle =
                      // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                      this.spanStyle.copy(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 106
    endLine: 140
    sha256: d85ce9533cbffe29a057189365ef2bdfc9ec2427ee9302ac4fd850988cff384a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              shadow: Shadow? = null,
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
          ) : this(
              createSpanStyle(
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
                  platformStyle = null,
                  drawStyle = null,
              ),
              createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1078-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1078
    endLine: 1112
    sha256: 8436b05587ed3dcc65da092804990886cc6028e83653b197983f5aee2056678d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = this.drawStyle,
                      ),
                  paragraphStyle =
                      createParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak ?: LineBreak.Unspecified,
                          hyphens = hyphens ?: Hyphens.Unspecified,
                          textMotion = this.textMotion,
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1113-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1113
    endLine: 1147
    sha256: 7591590582e36409e0cfdc286b0694eb5b7b9ca70cf494183ea5879827a96d4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              hyphens: Hyphens? = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
                      // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                      this.spanStyle.copy(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1148-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1148
    endLine: 1182
    sha256: aef259755c446641d8dbbb331129abd78858135cd148def095530874505cbdbf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          background = background,
                          textDecoration = textDecoration,
                          shadow = shadow,
                          platformStyle = platformStyle?.spanStyle,
                          drawStyle = drawStyle,
                      ),
                  paragraphStyle =
                      createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1183-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1183
    endLine: 1217
    sha256: 50c7540006ad56a3f046f68a6fea08f2a0e656a44bed3e1cbe4bb998897cd7ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  spanStyle =
                      // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                      this.spanStyle.copy(
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
                  paragraphStyle =
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1218-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1218
    endLine: 1252
    sha256: df3b10f2b38c0807ae3cd4c2ae9627b3d411c366815feb30ade946c87737f07a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1253-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1253
    endLine: 1287
    sha256: c3bc3747315216d6304651f8b52cf0a9516cc9d5e85a7d9b734b1a0995ada42f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              hyphens: Hyphens? = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
                      createSpanStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1288-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1288
    endLine: 1322
    sha256: 729afffea4eabc8e0d996915615ea31ada1e9c9f4049fc5987d0366a926eb7e1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  paragraphStyle =
                      createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1323-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1323
    endLine: 1357
    sha256: 2cdb511239e9647884d273fc35c7d3af39c0d5e05f08d049f606bb91d6eb225a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              lineHeight: TextUnit = this.paragraphStyle.lineHeight,
              textIndent: TextIndent? = this.paragraphStyle.textIndent,
              platformStyle: PlatformTextStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
              lineBreak: LineBreak = this.paragraphStyle.lineBreak,
              hyphens: Hyphens = this.paragraphStyle.hyphens,
              textMotion: TextMotion? = this.paragraphStyle.textMotion,
          ): TextStyle {
              return TextStyle(
                  spanStyle =
                      createSpanStyle(
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
                      createParagraphStyle(
                          textAlign = textAlign,
                          textDirection = textDirection,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1358-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1358
    endLine: 1392
    sha256: 68a21ab7d416339d37f751e4bfae3c88d86b47fa6c8b7a58febcc59c6d0c25b3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          platformStyle = platformStyle?.paragraphStyle,
                          lineHeightStyle = lineHeightStyle,
                          lineBreak = lineBreak,
                          hyphens = hyphens,
                          textMotion = textMotion,
                      ),
                  platformStyle = platformStyle,
              )
          }

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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1393-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1393
    endLine: 1427
    sha256: 14849d73fd693a223def8cd32417f4905efa8856681b9c41511a5e7f0b964b9e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** The typeface variant to use when drawing the letters (e.g., italic). */
          public val fontStyle: FontStyle?
              get() = this.spanStyle.fontStyle

          /**
           * Whether to synthesize font weight and/or style when the requested weight or style cannot be
           * found in the provided font family.
           */
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 141
    endLine: 175
    sha256: 3f2bf582c960771b758c4bce8bcb92f894fd7e4f25edd171a0184d946d892d1e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              createSpanStyle(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1428-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1428
    endLine: 1462
    sha256: ed59ab53530357bb92d9de7a6a75069fc38a9d10ddd9de5cbe489f3c1f6c5b89
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** The locale list used to select region-specific glyphs. */
          public val localeList: LocaleList?
              get() = this.spanStyle.localeList

          /** The background color for the text. */
          public val background: Color
              get() = this.spanStyle.background

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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1463-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1463
    endLine: 1497
    sha256: aacd401fedf6e36747d66e75def48d6d6e12305a7c402be4f16454933377e8b7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public val textDirection: TextDirection
              get() = this.paragraphStyle.textDirection

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getTextDirection-mmuk1to") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_textDirection: TextDirection?
              get() = this.textDirection

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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1498-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1498
    endLine: 1532
    sha256: f55fd064dd11df6c7d260b33728b6d16389a418c56d1dc34aac469a3f08f9d05
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_hyphens: Hyphens?
              get() = this.hyphens

          /** The line breaking configuration of the paragraph. */
          public val lineBreak: LineBreak
              get() = this.paragraphStyle.lineBreak

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
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
              if (!PackedTextStylesLatch.isEnabled && platformStyle != other.platformStyle) return false

              return true
          }

          /**
           * Returns true if text layout affecting attributes between this TextStyle and other are the
           * same.
           *
           * The attributes that do not require a layout change are color, textDecoration and shadow.
           *
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1533-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1533
    endLine: 1567
    sha256: 5c47d639e4dc880043e29580e112d963e8b6b27c60d836d7f4e5dc50c8f077d0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Majority of attributes change text layout, and examples are line height, font properties,
           * font size, locale etc.
           *
           * This function can be used to identify if a new text layout is required for a given TextStyle.
           *
           * @param other The TextStyle to compare to.
           */
          public fun hasSameLayoutAffectingAttributes(other: TextStyle): Boolean {
              return (this === other) ||
                  (paragraphStyle == other.paragraphStyle &&
                      spanStyle.hasSameLayoutAffectingAttributes(other.spanStyle))
          }

          public fun hasSameDrawAffectingAttributes(other: TextStyle): Boolean {
              return (this === other) || (spanStyle.hasSameNonLayoutAttributes(other.spanStyle))
          }

          override fun hashCode(): Int {
              var result = spanStyle.hashCode()
              result = 31 * result + paragraphStyle.hashCode()
              // When PackedTextStylesLatch is enabled, platformStyle is strictly derived from
              // spanStyle.platformStyle and paragraphStyle.platformStyle, which are already folded
              // into spanStyle and paragraphStyle packed hashes.
              if (!PackedTextStylesLatch.isEnabled) {
                  result = 31 * result + (platformStyle?.hashCode() ?: 0)
              }
              return result
          }

          internal fun hashCodeLayoutAffectingAttributes(): Int {
              var result = spanStyle.hashCodeLayoutAffectingAttributes()
              result = 31 * result + paragraphStyle.hashCode()
              // When PackedTextStylesLatch is enabled, platformStyle is strictly a function of
              // (spanStyle.platformStyle, paragraphStyle.platformStyle), which are already hashed via
              // SpanStyle.LAYOUT_BITS (HAS_PLATFORM_STYLE) and ParagraphStyle.bits (PLATFORM_STYLE_MASK).
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1568-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1568
    endLine: 1602
    sha256: 29fbfbc10872514d1ef2a2123fc596ca02b9835fac600d890f117e46e3da7bfb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // Any future PlatformTextStyle-only field added to TextStyle must also update
              // hasSameLayoutAffectingAttributes and hashCodeLayoutAffectingAttributes.
              if (!PackedTextStylesLatch.isEnabled) {
                  result = 31 * result + (platformStyle?.hashCode() ?: 0)
              }
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1603-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1603
    endLine: 1637
    sha256: f032a157c47dfc06ad83d42c9edc4e145ec473fe0697ffe4fff8742d6e930264
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       */
      public fun lerp(start: TextStyle, stop: TextStyle, fraction: Float): TextStyle {
          val lerpedSpan = lerp(start.toSpanStyle(), stop.toSpanStyle(), fraction)
          val lerpedPara = lerp(start.toParagraphStyle(), stop.toParagraphStyle(), fraction)
          if (!PackedTextStylesLatch.isEnabled) {
              return TextStyle(spanStyle = lerpedSpan, paragraphStyle = lerpedPara)
          }
          return TextStyle(
              spanStyle = lerpedSpan,
              paragraphStyle = lerpedPara,
              platformStyle =
                  selectOrCreatePlatformStyle(
                      spanStyle = lerpedSpan,
                      paragraphStyle = lerpedPara,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1638-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1638
    endLine: 1672
    sha256: 6c7709821adedaed1a8f67317f1764bac0d5fca1e2c1e059326e9462bf2e23ef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      primaryCandidate = if (fraction < 0.5f) start.platformStyle else stop.platformStyle,
                      secondaryCandidate =
                          if (fraction < 0.5f) stop.platformStyle else start.platformStyle,
                  ),
          )
      }

      private object ResolvedDefaultTextStyles {
          @JvmField
          val Ltr =
              TextStyle(
                  BoxedStyleValues.ResolvedDefaultSpanStyle,
                  BoxedStyleValues.ResolvedDefaultParagraphStyleLtr,
              )

          @JvmField
          val Rtl =
              TextStyle(
                  BoxedStyleValues.ResolvedDefaultSpanStyle,
                  BoxedStyleValues.ResolvedDefaultParagraphStyleRtl,
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
      public fun resolveDefaults(style: TextStyle, direction: LayoutDirection): TextStyle {
          if (!PackedTextStylesLatch.isEnabled) {
              return TextStyle(
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1673-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1673
    endLine: 1707
    sha256: 98ad787606afec290fd940412cbdb8744f6a20004a8758bd4e5752ba70fafb7c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  spanStyle = resolveSpanStyleDefaults(style.spanStyle),
                  paragraphStyle = resolveParagraphStyleDefaults(style.paragraphStyle, direction),
                  platformStyle = style.platformStyle,
              )
          }
          if (style === TextStyle.Default) {
              return if (direction == LayoutDirection.Ltr) {
                  ResolvedDefaultTextStyles.Ltr
              } else {
                  ResolvedDefaultTextStyles.Rtl
              }
          }
          val resolvedSpan = resolveSpanStyleDefaults(style.spanStyle)
          val resolvedPara = resolveParagraphStyleDefaults(style.paragraphStyle, direction)
          if (resolvedSpan === style.spanStyle && resolvedPara === style.paragraphStyle) {
              return style
          }
          if (resolvedSpan === BoxedStyleValues.ResolvedDefaultSpanStyle && style.platformStyle == null) {
              if (
                  direction == LayoutDirection.Ltr &&
                      resolvedPara === BoxedStyleValues.ResolvedDefaultParagraphStyleLtr
              ) {
                  return ResolvedDefaultTextStyles.Ltr
              }
              if (
                  direction == LayoutDirection.Rtl &&
                      resolvedPara === BoxedStyleValues.ResolvedDefaultParagraphStyleRtl
              ) {
                  return ResolvedDefaultTextStyles.Rtl
              }
          }
          return TextStyle(
              spanStyle = resolvedSpan,
              paragraphStyle = resolvedPara,
              platformStyle = style.platformStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1708-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1708
    endLine: 1742
    sha256: 42441c7cca621b2e0ed7af47f81049c26a4aceb66b41d87fe1dda8e56e6338ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
      }

      /** If [textDirection] is null returns a [TextDirection] based on [layoutDirection]. */
      internal fun resolveTextDirection(
          layoutDirection: LayoutDirection,
          textDirection: TextDirection,
      ): TextDirection {
          // Each arm uses an inner if-else (single reference compare against LayoutDirection.Ltr) rather
          // than compound `when` conditions, which would emit extra branch targets and repeated loads.
          return when (textDirection) {
              TextDirection.Content ->
                  if (layoutDirection == LayoutDirection.Ltr) {
                      TextDirection.ContentOrLtr
                  } else {
                      TextDirection.ContentOrRtl
                  }
              TextDirection.Unspecified ->
                  if (layoutDirection == LayoutDirection.Ltr) {
                      TextDirection.Ltr
                  } else {
                      TextDirection.Rtl
                  }
              else -> textDirection
          }
      }

      private fun selectOrCreatePlatformStyle(
          spanStyle: SpanStyle,
          paragraphStyle: ParagraphStyle,
          primaryCandidate: PlatformTextStyle?,
          secondaryCandidate: PlatformTextStyle?,
      ): PlatformTextStyle? {
          if (primaryCandidate == null && secondaryCandidate == null) return null
          val spanPlatform = spanStyle.platformStyle
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1743-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 1743
    endLine: 1766
    sha256: 396c0f482a284af08f4d15197919478e19619507e86da63660b8e1050b347f4c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          val paraPlatform = paragraphStyle.platformStyle
          if (spanPlatform == null && paraPlatform == null) return null
          return when {
              primaryCandidate != null &&
                  spanPlatform == primaryCandidate.spanStyle &&
                  paraPlatform == primaryCandidate.paragraphStyle -> primaryCandidate
              secondaryCandidate != null &&
                  spanPlatform == secondaryCandidate.spanStyle &&
                  paraPlatform == secondaryCandidate.paragraphStyle -> secondaryCandidate
              else -> createPlatformTextStyleInternal(spanPlatform, paraPlatform)
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
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 176
    endLine: 210
    sha256: 85b8a53b34d218dadff985ac28e98f47c47495e8c531e984d892866d50988114
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
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = null,
              ),
              createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 211
    endLine: 237
    sha256: ce94f5eea4f14d767af50df6e844560a756b806daf8180569ed97be453c220ad
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-238-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 238
    endLine: 272
    sha256: c232b7ec5e01d8080412daa3b16af2f3d4740e21d1249ad0fe312a407b019b24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              createSpanStyle(
                  color = color,
                  fontSize = fontSize,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-273-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 273
    endLine: 307
    sha256: cb1dedfab48aa00b56b46af9e6391f362a3801e7d50cfb65ea3f6e61a965b7c4
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
                  platformStyle = platformStyle?.spanStyle,
              ),
              createParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle?.paragraphStyle,
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-308-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 308
    endLine: 342
    sha256: 71e9441e73d3298d511b3466d254f44f016b49a8e7f428a2765b971cc3ac2743
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
              textMotion: TextMotion? = null,
          ) : this(
              createSpanStyle(
                  color = color,
                  fontSize = fontSize,
                  fontWeight = fontWeight,
                  fontStyle = fontStyle,
                  fontSynthesis = fontSynthesis,
                  fontFamily = fontFamily,
                  fontFeatureSettings = fontFeatureSettings,
                  letterSpacing = letterSpacing,
                  baselineShift = baselineShift,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-343-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 343
    endLine: 377
    sha256: 3d0dbd988e328dc9f90f74328807afdb0dffdd6a97f26ed33b721924fb2bee42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  textGeometricTransform = textGeometricTransform,
                  localeList = localeList,
                  background = background,
                  textDecoration = textDecoration,
                  shadow = shadow,
                  platformStyle = platformStyle?.spanStyle,
                  drawStyle = drawStyle,
              ),
              createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 36
    endLine: 70
    sha256: 03fa864329beeac00adbf56dbe29b8b88a9fcd5d66eaca5a6e6ff5f232c67d9c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.style.TextDirection
      import androidx.compose.ui.text.style.TextGeometricTransform
      import androidx.compose.ui.text.style.TextIndent
      import androidx.compose.ui.text.style.TextMotion
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.TextUnit
      import kotlin.jvm.JvmField
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
          platformStyle: PlatformTextStyle? = null,
      ) {
          public val platformStyle: PlatformTextStyle? =
              if (
                  platformStyle != null &&
                      PackedTextStylesLatch.isEnabled &&
                      platformStyle.spanStyle == null &&
                      platformStyle.paragraphStyle == null
              ) {
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-378-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 378
    endLine: 412
    sha256: 4e5925de9fddca96f5f5def499282da8aac455551fef4b39817af58fca70cd42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-413-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 413
    endLine: 447
    sha256: 2025212639e96db349a9d2549026217b2262407883cf6b64d3724bfeba067d95
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              createSpanStyle(
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
              createParagraphStyle(
                  textAlign = textAlign,
                  textDirection = textDirection,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-448-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 448
    endLine: 482
    sha256: 349f76b72869075f38dcf19d55d2996760440c8981d90c460a2ca046189d35d6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-483-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 483
    endLine: 517
    sha256: 57ca5f70a45bcf4a2618863f7235c5d347c790d30cd9aac5451801621558e246
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-518-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 518
    endLine: 552
    sha256: 46a97559ab3f18ac699e0f1ce6edc96e79fbbcbf15554b2ff7b086928065e1b7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) : this(
              createSpanStyle(
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
              createParagraphStyle(
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-553-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 553
    endLine: 587
    sha256: ab1e2b644dcc88c9f948fb10c618ac7cdaccc2fc7d008816771e57fd84012658
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              createSpanStyle(
                  brush = brush,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-588-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 588
    endLine: 622
    sha256: 84c7e7e957730e1fcec9d07375efd7c9ee2d1af95f35d495e51b8f7332d52fcd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
              createParagraphStyle(
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
          )

          @Stable public fun toSpanStyle(): SpanStyle = spanStyle

          @Stable public fun toParagraphStyle(): ParagraphStyle = paragraphStyle
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-623-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 623
    endLine: 657
    sha256: 6cccceb0f17014560b27b873136dd9e88a0ab90705e36ce481329427aff0d1f6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              if (!PackedTextStylesLatch.isEnabled) return mergeLegacy(other)
              if (other == null || other === Default || other === this) return this
              if (this === Default) return other
              val mergedSpan = spanStyle.merge(other.spanStyle)
              val mergedPara = paragraphStyle.merge(other.paragraphStyle)
              if (mergedSpan === spanStyle && mergedPara === paragraphStyle) return this
              if (mergedSpan === other.spanStyle && mergedPara === other.paragraphStyle) return other
              return TextStyle(
                  spanStyle = mergedSpan,
                  paragraphStyle = mergedPara,
                  platformStyle = mergePlatformStyle(mergedSpan, mergedPara, other.platformStyle),
              )
          }

          private fun mergeLegacy(other: TextStyle?): TextStyle {
              if (other == null || other == Default) return this
              return TextStyle(
                  spanStyle = toSpanStyle().merge(other.toSpanStyle()),
                  paragraphStyle = toParagraphStyle().merge(other.toParagraphStyle()),
              )
          }

          private fun mergePlatformStyle(
              mergedSpan: SpanStyle,
              mergedPara: ParagraphStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-658-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 658
    endLine: 692
    sha256: ad5b436c560a2f8864e4afebaa6abd69b1af0be2297ab654ed5dc9733a6da102
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              otherPlatform: PlatformTextStyle?,
          ): PlatformTextStyle? =
              selectOrCreatePlatformStyle(
                  spanStyle = mergedSpan,
                  paragraphStyle = mergedPara,
                  primaryCandidate = otherPlatform,
                  secondaryCandidate = this.platformStyle,
              )

          /**
           * Merges this style with individual styling parameters.
           *
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-693-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 693
    endLine: 727
    sha256: 85172cb30e3e3d716ac3804e9f68a6c2d104443b34d0d7e25638b34c95704fe7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 71
    endLine: 105
    sha256: d24458198cdddaae39fe7ab33d8015e16abc8e286b95fcf41cd393cedd590a55
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  null
              } else {
                  platformStyle
              }

          internal constructor(
              spanStyle: SpanStyle,
              paragraphStyle: ParagraphStyle,
          ) : this(
              spanStyle = spanStyle,
              paragraphStyle = paragraphStyle,
              platformStyle =
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-728-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 728
    endLine: 762
    sha256: 96c2ce2a7324bb28508248035561ce415ef3a3e8f36ad9c0ed28be94203a7b1f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                      hyphens = hyphens,
                      textMotion = textMotion,
                  )
              if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) {
                  return this
              }
              if (!PackedTextStylesLatch.isEnabled) {
                  return TextStyle(mergedSpanStyle, mergedParagraphStyle)
              }
              return TextStyle(
                  spanStyle = mergedSpanStyle,
                  paragraphStyle = mergedParagraphStyle,
                  platformStyle =
                      mergePlatformStyle(mergedSpanStyle, mergedParagraphStyle, platformStyle),
              )
          }

          @Deprecated(
              "merge that takes nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-763-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 763
    endLine: 797
    sha256: f02fb93418801591dd6b67f986aa783b3b69eface1cb5758dfff862a6e831821
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-798-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 798
    endLine: 832
    sha256: 82ad5b485a7c51b133a4a22c6ca527bff443a48db11dc211b77fa442e3c2b4e0
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
                      lineBreak = lineBreak ?: LineBreak.Unspecified,
                      hyphens = hyphens ?: Hyphens.Unspecified,
                      textMotion = textMotion,
                  )
              if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) {
                  return this
              }
              if (!PackedTextStylesLatch.isEnabled) {
                  return TextStyle(mergedSpanStyle, mergedParagraphStyle)
              }
              return TextStyle(
                  spanStyle = mergedSpanStyle,
                  paragraphStyle = mergedParagraphStyle,
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-833-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 833
    endLine: 867
    sha256: a7cd4ca978143c5801740887a99c29165407cd69bb6ede6f5b410a6101b9ca8a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  platformStyle =
                      mergePlatformStyle(mergedSpanStyle, mergedParagraphStyle, platformStyle),
              )
          }

          /**
           * Returns a new text style that is a combination of this style and the given [other] style.
           *
           * @see merge
           */
          @Stable
          public fun merge(other: SpanStyle): TextStyle {
              if (!PackedTextStylesLatch.isEnabled) {
                  return TextStyle(spanStyle = spanStyle.merge(other), paragraphStyle = paragraphStyle)
              }
              val mergedSpan = spanStyle.merge(other)
              if (mergedSpan === spanStyle) return this
              val mergedPlatform =
                  if (
                      other.platformStyle == null || mergedSpan.platformStyle == spanStyle.platformStyle
                  ) {
                      this.platformStyle
                  } else {
                      createPlatformTextStyleInternal(
                          mergedSpan.platformStyle,
                          paragraphStyle.platformStyle,
                      )
                  }
              return TextStyle(
                  spanStyle = mergedSpan,
                  paragraphStyle = paragraphStyle,
                  platformStyle = mergedPlatform,
              )
          }
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-868-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 868
    endLine: 902
    sha256: 15bf759b8ee929ac95eb4bd7bdb32918a55e634450f8e7e26d9deb6ccc8b6e67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /**
           * Returns a new text style that is a combination of this style and the given [other] style.
           *
           * @see merge
           */
          @Stable
          public fun merge(other: ParagraphStyle): TextStyle {
              if (!PackedTextStylesLatch.isEnabled) {
                  return TextStyle(spanStyle = spanStyle, paragraphStyle = paragraphStyle.merge(other))
              }
              val mergedPara = paragraphStyle.merge(other)
              if (mergedPara === paragraphStyle) return this
              val mergedPlatform =
                  if (
                      other.platformStyle == null ||
                          mergedPara.platformStyle == paragraphStyle.platformStyle
                  ) {
                      this.platformStyle
                  } else {
                      createPlatformTextStyleInternal(
                          spanStyle.platformStyle,
                          mergedPara.platformStyle,
                      )
                  }
              return TextStyle(
                  spanStyle = spanStyle,
                  paragraphStyle = mergedPara,
                  platformStyle = mergedPlatform,
              )
          }

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: TextStyle): TextStyle = this.merge(other)

          /** Plus operator overload that applies a [merge]. */
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-903-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 903
    endLine: 937
    sha256: 0151703080fb4c96327ae8b8ee82e8e430e968dcd833781b99e1b9e4ca63bd59
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  spanStyle =
                      // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                      this.spanStyle.copy(
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-938-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 938
    endLine: 972
    sha256: 68fe29c1562f0420883755e7a5a9e50ed9449d488b45cdb5bff9a6929d77e963
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                      ),
                  paragraphStyle =
                      createParagraphStyle(
                          textAlign = textAlign ?: TextAlign.Unspecified,
                          textDirection = textDirection ?: TextDirection.Unspecified,
                          lineHeight = lineHeight,
                          textIndent = textIndent,
                          platformStyle = this.paragraphStyle.platformStyle,
                          lineHeightStyle = this.lineHeightStyle,
                          lineBreak = this.lineBreak,
                          hyphens = this.hyphens,
                          textMotion = this.textMotion,
                      ),
                  platformStyle = this.platformStyle,
              )
          }

          @Deprecated(
              "TextStyle copy constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "copy constructor.",
  - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-973-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    revision: 9f2d8dbb1abcac474493625d39046a7d76e2fb22
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt
    startLine: 973
    endLine: 1007
    sha256: 92c9b3b8b02b3a2b4807d2672d28a0907c91fe6b83e1e2915078960e2e8a0a78
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                      // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                      this.spanStyle.copy(
                          color = color,
                          fontSize = fontSize,
                          fontWeight = fontWeight,
                          fontStyle = fontStyle,
                          fontSynthesis = fontSynthesis,
                          fontFamily = fontFamily,
                          fontFeatureSettings = fontFeatureSettings,
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
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1008
      title: androidx.compose.ui.text TextStyle.kt source (lines 1008–1042)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1008-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1043
      title: androidx.compose.ui.text TextStyle.kt source (lines 1043–1077)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1043-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-106
      title: androidx.compose.ui.text TextStyle.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1078
      title: androidx.compose.ui.text TextStyle.kt source (lines 1078–1112)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1078-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1113
      title: androidx.compose.ui.text TextStyle.kt source (lines 1113–1147)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1113-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1148
      title: androidx.compose.ui.text TextStyle.kt source (lines 1148–1182)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1148-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1183
      title: androidx.compose.ui.text TextStyle.kt source (lines 1183–1217)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1183-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1218
      title: androidx.compose.ui.text TextStyle.kt source (lines 1218–1252)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1218-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1253
      title: androidx.compose.ui.text TextStyle.kt source (lines 1253–1287)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1253-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1288
      title: androidx.compose.ui.text TextStyle.kt source (lines 1288–1322)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1288-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1323
      title: androidx.compose.ui.text TextStyle.kt source (lines 1323–1357)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1323-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1358
      title: androidx.compose.ui.text TextStyle.kt source (lines 1358–1392)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1358-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1393
      title: androidx.compose.ui.text TextStyle.kt source (lines 1393–1427)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1393-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-141
      title: androidx.compose.ui.text TextStyle.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1428
      title: androidx.compose.ui.text TextStyle.kt source (lines 1428–1462)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1428-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1463
      title: androidx.compose.ui.text TextStyle.kt source (lines 1463–1497)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1463-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1498
      title: androidx.compose.ui.text TextStyle.kt source (lines 1498–1532)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1498-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1533
      title: androidx.compose.ui.text TextStyle.kt source (lines 1533–1567)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1533-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1568
      title: androidx.compose.ui.text TextStyle.kt source (lines 1568–1602)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1568-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1603
      title: androidx.compose.ui.text TextStyle.kt source (lines 1603–1637)
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1603-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1638
      title: androidx.compose.ui.text TextStyle.kt source (lines 1638–1672)
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.resolveDefaults
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1638-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1673
      title: androidx.compose.ui.text TextStyle.kt source (lines 1673–1707)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1673-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1708
      title: androidx.compose.ui.text TextStyle.kt source (lines 1708–1742)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1708-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-1743
      title: androidx.compose.ui.text TextStyle.kt source (lines 1743–1766)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-1743-source
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
      title: androidx.compose.ui.text TextStyle.kt source (lines 211–237)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-238
      title: androidx.compose.ui.text TextStyle.kt source (lines 238–272)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-238-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-273
      title: androidx.compose.ui.text TextStyle.kt source (lines 273–307)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-273-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-308
      title: androidx.compose.ui.text TextStyle.kt source (lines 308–342)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-308-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-343
      title: androidx.compose.ui.text TextStyle.kt source (lines 343–377)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-343-source
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
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-378
      title: androidx.compose.ui.text TextStyle.kt source (lines 378–412)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-378-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-413
      title: androidx.compose.ui.text TextStyle.kt source (lines 413–447)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-413-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-448
      title: androidx.compose.ui.text TextStyle.kt source (lines 448–482)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-448-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-483
      title: androidx.compose.ui.text TextStyle.kt source (lines 483–517)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-483-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-518
      title: androidx.compose.ui.text TextStyle.kt source (lines 518–552)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-518-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-553
      title: androidx.compose.ui.text TextStyle.kt source (lines 553–587)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-553-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-588
      title: androidx.compose.ui.text TextStyle.kt source (lines 588–622)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-588-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-623
      title: androidx.compose.ui.text TextStyle.kt source (lines 623–657)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-623-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-658
      title: androidx.compose.ui.text TextStyle.kt source (lines 658–692)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-658-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-693
      title: androidx.compose.ui.text TextStyle.kt source (lines 693–727)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-693-source
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
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-728
      title: androidx.compose.ui.text TextStyle.kt source (lines 728–762)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-728-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-763
      title: androidx.compose.ui.text TextStyle.kt source (lines 763–797)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-763-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-798
      title: androidx.compose.ui.text TextStyle.kt source (lines 798–832)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-798-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-833
      title: androidx.compose.ui.text TextStyle.kt source (lines 833–867)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-833-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-868
      title: androidx.compose.ui.text TextStyle.kt source (lines 868–902)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-868-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-903
      title: androidx.compose.ui.text TextStyle.kt source (lines 903–937)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-903-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-938
      title: androidx.compose.ui.text TextStyle.kt source (lines 938–972)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-938-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-textstyle-lines-973
      title: androidx.compose.ui.text TextStyle.kt source (lines 973–1007)
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-textstyle-lines-973-source
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

## androidx.compose.ui.text TextStyle.kt source (lines 1008–1042)

                    letterSpacing = letterSpacing,
                    baselineShift = baselineShift,
                    textGeometricTransform = textGeometricTransform,
                    localeList = localeList,
                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle?.spanStyle,
                ),
            paragraphStyle =
                createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1008-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1043–1077)

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
            spanStyle =
                // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                this.spanStyle.copy(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1043-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 106–140)

        shadow: Shadow? = null,
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
    ) : this(
        createSpanStyle(
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
            platformStyle = null,
            drawStyle = null,
        ),
        createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1078–1112)

                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = this.drawStyle,
                ),
            paragraphStyle =
                createParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak ?: LineBreak.Unspecified,
                    hyphens = hyphens ?: Hyphens.Unspecified,
                    textMotion = this.textMotion,
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1078-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1113–1147)

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
        hyphens: Hyphens? = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(
            spanStyle =
                // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                this.spanStyle.copy(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1113-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1148–1182)

                    background = background,
                    textDecoration = textDecoration,
                    shadow = shadow,
                    platformStyle = platformStyle?.spanStyle,
                    drawStyle = drawStyle,
                ),
            paragraphStyle =
                createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1148-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1183–1217)

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
            spanStyle =
                // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                this.spanStyle.copy(
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
            paragraphStyle =

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1183-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1218–1252)

                createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1218-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1253–1287)

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
        hyphens: Hyphens? = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(
            spanStyle =
                createSpanStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1253-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1288–1322)

            paragraphStyle =
                createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1288-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1323–1357)

        lineHeight: TextUnit = this.paragraphStyle.lineHeight,
        textIndent: TextIndent? = this.paragraphStyle.textIndent,
        platformStyle: PlatformTextStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.paragraphStyle.lineHeightStyle,
        lineBreak: LineBreak = this.paragraphStyle.lineBreak,
        hyphens: Hyphens = this.paragraphStyle.hyphens,
        textMotion: TextMotion? = this.paragraphStyle.textMotion,
    ): TextStyle {
        return TextStyle(
            spanStyle =
                createSpanStyle(
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
                createParagraphStyle(
                    textAlign = textAlign,
                    textDirection = textDirection,
                    lineHeight = lineHeight,
                    textIndent = textIndent,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1323-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1358–1392)

                    platformStyle = platformStyle?.paragraphStyle,
                    lineHeightStyle = lineHeightStyle,
                    lineBreak = lineBreak,
                    hyphens = hyphens,
                    textMotion = textMotion,
                ),
            platformStyle = platformStyle,
        )
    }

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1358-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1393–1427)


    /** The typeface variant to use when drawing the letters (e.g., italic). */
    public val fontStyle: FontStyle?
        get() = this.spanStyle.fontStyle

    /**
     * Whether to synthesize font weight and/or style when the requested weight or style cannot be
     * found in the provided font family.
     */
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1393-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 141–175)

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
        createSpanStyle(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1428–1462)


    /** The locale list used to select region-specific glyphs. */
    public val localeList: LocaleList?
        get() = this.spanStyle.localeList

    /** The background color for the text. */
    public val background: Color
        get() = this.spanStyle.background

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1428-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1463–1497)

     */
    public val textDirection: TextDirection
        get() = this.paragraphStyle.textDirection

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getTextDirection-mmuk1to") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_textDirection: TextDirection?
        get() = this.textDirection

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1463-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1498–1532)

    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_hyphens: Hyphens?
        get() = this.hyphens

    /** The line breaking configuration of the paragraph. */
    public val lineBreak: LineBreak
        get() = this.paragraphStyle.lineBreak

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
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
        if (!PackedTextStylesLatch.isEnabled && platformStyle != other.platformStyle) return false

        return true
    }

    /**
     * Returns true if text layout affecting attributes between this TextStyle and other are the
     * same.
     *
     * The attributes that do not require a layout change are color, textDecoration and shadow.
     *

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1498-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1533–1567)

     * Majority of attributes change text layout, and examples are line height, font properties,
     * font size, locale etc.
     *
     * This function can be used to identify if a new text layout is required for a given TextStyle.
     *
     * @param other The TextStyle to compare to.
     */
    public fun hasSameLayoutAffectingAttributes(other: TextStyle): Boolean {
        return (this === other) ||
            (paragraphStyle == other.paragraphStyle &&
                spanStyle.hasSameLayoutAffectingAttributes(other.spanStyle))
    }

    public fun hasSameDrawAffectingAttributes(other: TextStyle): Boolean {
        return (this === other) || (spanStyle.hasSameNonLayoutAttributes(other.spanStyle))
    }

    override fun hashCode(): Int {
        var result = spanStyle.hashCode()
        result = 31 * result + paragraphStyle.hashCode()
        // When PackedTextStylesLatch is enabled, platformStyle is strictly derived from
        // spanStyle.platformStyle and paragraphStyle.platformStyle, which are already folded
        // into spanStyle and paragraphStyle packed hashes.
        if (!PackedTextStylesLatch.isEnabled) {
            result = 31 * result + (platformStyle?.hashCode() ?: 0)
        }
        return result
    }

    internal fun hashCodeLayoutAffectingAttributes(): Int {
        var result = spanStyle.hashCodeLayoutAffectingAttributes()
        result = 31 * result + paragraphStyle.hashCode()
        // When PackedTextStylesLatch is enabled, platformStyle is strictly a function of
        // (spanStyle.platformStyle, paragraphStyle.platformStyle), which are already hashed via
        // SpanStyle.LAYOUT_BITS (HAS_PLATFORM_STYLE) and ParagraphStyle.bits (PLATFORM_STYLE_MASK).

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1533-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1568–1602)

        // Any future PlatformTextStyle-only field added to TextStyle must also update
        // hasSameLayoutAffectingAttributes and hashCodeLayoutAffectingAttributes.
        if (!PackedTextStylesLatch.isEnabled) {
            result = 31 * result + (platformStyle?.hashCode() ?: 0)
        }
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1568-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1603–1637)

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
 */
public fun lerp(start: TextStyle, stop: TextStyle, fraction: Float): TextStyle {
    val lerpedSpan = lerp(start.toSpanStyle(), stop.toSpanStyle(), fraction)
    val lerpedPara = lerp(start.toParagraphStyle(), stop.toParagraphStyle(), fraction)
    if (!PackedTextStylesLatch.isEnabled) {
        return TextStyle(spanStyle = lerpedSpan, paragraphStyle = lerpedPara)
    }
    return TextStyle(
        spanStyle = lerpedSpan,
        paragraphStyle = lerpedPara,
        platformStyle =
            selectOrCreatePlatformStyle(
                spanStyle = lerpedSpan,
                paragraphStyle = lerpedPara,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1603-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1638–1672)

                primaryCandidate = if (fraction < 0.5f) start.platformStyle else stop.platformStyle,
                secondaryCandidate =
                    if (fraction < 0.5f) stop.platformStyle else start.platformStyle,
            ),
    )
}

private object ResolvedDefaultTextStyles {
    @JvmField
    val Ltr =
        TextStyle(
            BoxedStyleValues.ResolvedDefaultSpanStyle,
            BoxedStyleValues.ResolvedDefaultParagraphStyleLtr,
        )

    @JvmField
    val Rtl =
        TextStyle(
            BoxedStyleValues.ResolvedDefaultSpanStyle,
            BoxedStyleValues.ResolvedDefaultParagraphStyleRtl,
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
public fun resolveDefaults(style: TextStyle, direction: LayoutDirection): TextStyle {
    if (!PackedTextStylesLatch.isEnabled) {
        return TextStyle(

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1638-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1673–1707)

            spanStyle = resolveSpanStyleDefaults(style.spanStyle),
            paragraphStyle = resolveParagraphStyleDefaults(style.paragraphStyle, direction),
            platformStyle = style.platformStyle,
        )
    }
    if (style === TextStyle.Default) {
        return if (direction == LayoutDirection.Ltr) {
            ResolvedDefaultTextStyles.Ltr
        } else {
            ResolvedDefaultTextStyles.Rtl
        }
    }
    val resolvedSpan = resolveSpanStyleDefaults(style.spanStyle)
    val resolvedPara = resolveParagraphStyleDefaults(style.paragraphStyle, direction)
    if (resolvedSpan === style.spanStyle && resolvedPara === style.paragraphStyle) {
        return style
    }
    if (resolvedSpan === BoxedStyleValues.ResolvedDefaultSpanStyle && style.platformStyle == null) {
        if (
            direction == LayoutDirection.Ltr &&
                resolvedPara === BoxedStyleValues.ResolvedDefaultParagraphStyleLtr
        ) {
            return ResolvedDefaultTextStyles.Ltr
        }
        if (
            direction == LayoutDirection.Rtl &&
                resolvedPara === BoxedStyleValues.ResolvedDefaultParagraphStyleRtl
        ) {
            return ResolvedDefaultTextStyles.Rtl
        }
    }
    return TextStyle(
        spanStyle = resolvedSpan,
        paragraphStyle = resolvedPara,
        platformStyle = style.platformStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1673-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1708–1742)

    )
}

/** If [textDirection] is null returns a [TextDirection] based on [layoutDirection]. */
internal fun resolveTextDirection(
    layoutDirection: LayoutDirection,
    textDirection: TextDirection,
): TextDirection {
    // Each arm uses an inner if-else (single reference compare against LayoutDirection.Ltr) rather
    // than compound `when` conditions, which would emit extra branch targets and repeated loads.
    return when (textDirection) {
        TextDirection.Content ->
            if (layoutDirection == LayoutDirection.Ltr) {
                TextDirection.ContentOrLtr
            } else {
                TextDirection.ContentOrRtl
            }
        TextDirection.Unspecified ->
            if (layoutDirection == LayoutDirection.Ltr) {
                TextDirection.Ltr
            } else {
                TextDirection.Rtl
            }
        else -> textDirection
    }
}

private fun selectOrCreatePlatformStyle(
    spanStyle: SpanStyle,
    paragraphStyle: ParagraphStyle,
    primaryCandidate: PlatformTextStyle?,
    secondaryCandidate: PlatformTextStyle?,
): PlatformTextStyle? {
    if (primaryCandidate == null && secondaryCandidate == null) return null
    val spanPlatform = spanStyle.platformStyle

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1708-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 1743–1766)

    val paraPlatform = paragraphStyle.platformStyle
    if (spanPlatform == null && paraPlatform == null) return null
    return when {
        primaryCandidate != null &&
            spanPlatform == primaryCandidate.spanStyle &&
            paraPlatform == primaryCandidate.paragraphStyle -> primaryCandidate
        secondaryCandidate != null &&
            spanPlatform == secondaryCandidate.spanStyle &&
            paraPlatform == secondaryCandidate.paragraphStyle -> secondaryCandidate
        else -> createPlatformTextStyleInternal(spanPlatform, paraPlatform)
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


Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-1743-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 176–210)

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
            drawStyle = null,
        ),
        createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 211–237)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 238–272)

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
        createSpanStyle(
            color = color,
            fontSize = fontSize,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-238-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 273–307)

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
        createParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle?.paragraphStyle,
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-273-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 308–342)

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
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
        textMotion: TextMotion? = null,
    ) : this(
        createSpanStyle(
            color = color,
            fontSize = fontSize,
            fontWeight = fontWeight,
            fontStyle = fontStyle,
            fontSynthesis = fontSynthesis,
            fontFamily = fontFamily,
            fontFeatureSettings = fontFeatureSettings,
            letterSpacing = letterSpacing,
            baselineShift = baselineShift,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-308-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 343–377)

            textGeometricTransform = textGeometricTransform,
            localeList = localeList,
            background = background,
            textDecoration = textDecoration,
            shadow = shadow,
            platformStyle = platformStyle?.spanStyle,
            drawStyle = drawStyle,
        ),
        createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-343-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 36–70)

import androidx.compose.ui.text.style.TextDirection
import androidx.compose.ui.text.style.TextGeometricTransform
import androidx.compose.ui.text.style.TextIndent
import androidx.compose.ui.text.style.TextMotion
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.TextUnit
import kotlin.jvm.JvmField
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
    platformStyle: PlatformTextStyle? = null,
) {
    public val platformStyle: PlatformTextStyle? =
        if (
            platformStyle != null &&
                PackedTextStylesLatch.isEnabled &&
                platformStyle.spanStyle == null &&
                platformStyle.paragraphStyle == null
        ) {

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 378–412)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-378-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 413–447)

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
        createSpanStyle(
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
        createParagraphStyle(
            textAlign = textAlign,
            textDirection = textDirection,
            lineHeight = lineHeight,
            textIndent = textIndent,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-413-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 448–482)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-448-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 483–517)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-483-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 518–552)

    ) : this(
        createSpanStyle(
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
        createParagraphStyle(
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-518-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 553–587)

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
        createSpanStyle(
            brush = brush,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-553-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 588–622)

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
        createParagraphStyle(
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
    )

    @Stable public fun toSpanStyle(): SpanStyle = spanStyle

    @Stable public fun toParagraphStyle(): ParagraphStyle = paragraphStyle


Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-588-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 623–657)

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
        if (!PackedTextStylesLatch.isEnabled) return mergeLegacy(other)
        if (other == null || other === Default || other === this) return this
        if (this === Default) return other
        val mergedSpan = spanStyle.merge(other.spanStyle)
        val mergedPara = paragraphStyle.merge(other.paragraphStyle)
        if (mergedSpan === spanStyle && mergedPara === paragraphStyle) return this
        if (mergedSpan === other.spanStyle && mergedPara === other.paragraphStyle) return other
        return TextStyle(
            spanStyle = mergedSpan,
            paragraphStyle = mergedPara,
            platformStyle = mergePlatformStyle(mergedSpan, mergedPara, other.platformStyle),
        )
    }

    private fun mergeLegacy(other: TextStyle?): TextStyle {
        if (other == null || other == Default) return this
        return TextStyle(
            spanStyle = toSpanStyle().merge(other.toSpanStyle()),
            paragraphStyle = toParagraphStyle().merge(other.toParagraphStyle()),
        )
    }

    private fun mergePlatformStyle(
        mergedSpan: SpanStyle,
        mergedPara: ParagraphStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-623-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 658–692)

        otherPlatform: PlatformTextStyle?,
    ): PlatformTextStyle? =
        selectOrCreatePlatformStyle(
            spanStyle = mergedSpan,
            paragraphStyle = mergedPara,
            primaryCandidate = otherPlatform,
            secondaryCandidate = this.platformStyle,
        )

    /**
     * Merges this style with individual styling parameters.
     *
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-658-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 693–727)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-693-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 71–105)

            null
        } else {
            platformStyle
        }

    internal constructor(
        spanStyle: SpanStyle,
        paragraphStyle: ParagraphStyle,
    ) : this(
        spanStyle = spanStyle,
        paragraphStyle = paragraphStyle,
        platformStyle =
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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 728–762)

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
                hyphens = hyphens,
                textMotion = textMotion,
            )
        if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) {
            return this
        }
        if (!PackedTextStylesLatch.isEnabled) {
            return TextStyle(mergedSpanStyle, mergedParagraphStyle)
        }
        return TextStyle(
            spanStyle = mergedSpanStyle,
            paragraphStyle = mergedParagraphStyle,
            platformStyle =
                mergePlatformStyle(mergedSpanStyle, mergedParagraphStyle, platformStyle),
        )
    }

    @Deprecated(
        "merge that takes nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-728-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 763–797)

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

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-763-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 798–832)

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
                lineBreak = lineBreak ?: LineBreak.Unspecified,
                hyphens = hyphens ?: Hyphens.Unspecified,
                textMotion = textMotion,
            )
        if (spanStyle === mergedSpanStyle && paragraphStyle === mergedParagraphStyle) {
            return this
        }
        if (!PackedTextStylesLatch.isEnabled) {
            return TextStyle(mergedSpanStyle, mergedParagraphStyle)
        }
        return TextStyle(
            spanStyle = mergedSpanStyle,
            paragraphStyle = mergedParagraphStyle,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-798-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 833–867)

            platformStyle =
                mergePlatformStyle(mergedSpanStyle, mergedParagraphStyle, platformStyle),
        )
    }

    /**
     * Returns a new text style that is a combination of this style and the given [other] style.
     *
     * @see merge
     */
    @Stable
    public fun merge(other: SpanStyle): TextStyle {
        if (!PackedTextStylesLatch.isEnabled) {
            return TextStyle(spanStyle = spanStyle.merge(other), paragraphStyle = paragraphStyle)
        }
        val mergedSpan = spanStyle.merge(other)
        if (mergedSpan === spanStyle) return this
        val mergedPlatform =
            if (
                other.platformStyle == null || mergedSpan.platformStyle == spanStyle.platformStyle
            ) {
                this.platformStyle
            } else {
                createPlatformTextStyleInternal(
                    mergedSpan.platformStyle,
                    paragraphStyle.platformStyle,
                )
            }
        return TextStyle(
            spanStyle = mergedSpan,
            paragraphStyle = paragraphStyle,
            platformStyle = mergedPlatform,
        )
    }


Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-833-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 868–902)

    /**
     * Returns a new text style that is a combination of this style and the given [other] style.
     *
     * @see merge
     */
    @Stable
    public fun merge(other: ParagraphStyle): TextStyle {
        if (!PackedTextStylesLatch.isEnabled) {
            return TextStyle(spanStyle = spanStyle, paragraphStyle = paragraphStyle.merge(other))
        }
        val mergedPara = paragraphStyle.merge(other)
        if (mergedPara === paragraphStyle) return this
        val mergedPlatform =
            if (
                other.platformStyle == null ||
                    mergedPara.platformStyle == paragraphStyle.platformStyle
            ) {
                this.platformStyle
            } else {
                createPlatformTextStyleInternal(
                    spanStyle.platformStyle,
                    mergedPara.platformStyle,
                )
            }
        return TextStyle(
            spanStyle = spanStyle,
            paragraphStyle = mergedPara,
            platformStyle = mergedPlatform,
        )
    }

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: TextStyle): TextStyle = this.merge(other)

    /** Plus operator overload that applies a [merge]. */

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-868-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 903–937)

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
            spanStyle =
                // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                this.spanStyle.copy(

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-903-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 938–972)

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
                ),
            paragraphStyle =
                createParagraphStyle(
                    textAlign = textAlign ?: TextAlign.Unspecified,
                    textDirection = textDirection ?: TextDirection.Unspecified,
                    lineHeight = lineHeight,
                    textIndent = textIndent,
                    platformStyle = this.paragraphStyle.platformStyle,
                    lineHeightStyle = this.lineHeightStyle,
                    lineBreak = this.lineBreak,
                    hyphens = this.hyphens,
                    textMotion = this.textMotion,
                ),
            platformStyle = this.platformStyle,
        )
    }

    @Deprecated(
        "TextStyle copy constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "copy constructor.",

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-938-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)

## androidx.compose.ui.text TextStyle.kt source (lines 973–1007)

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
                // SpanStyle.copy preserves existing brush when color == this.spanStyle.color.
                this.spanStyle.copy(
                    color = color,
                    fontSize = fontSize,
                    fontWeight = fontWeight,
                    fontStyle = fontStyle,
                    fontSynthesis = fontSynthesis,
                    fontFamily = fontFamily,
                    fontFeatureSettings = fontFeatureSettings,

Sources: [live-androidx-ui-ui-text-ui-text-textstyle-lines-973-source](https://android.googlesource.com/platform/frameworks/support/+/9f2d8dbb1abcac474493625d39046a7d76e2fb22/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/TextStyle.kt)
