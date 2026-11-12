---
type: reference
title: androidx.compose.material3 Text.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-text-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 1
    endLine: 35
    sha256: 1945acffe34fb3d8eae10cfb326f6022bab50a7ac185ced77f08ec00713bf780
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2021 The Android Open Source Project
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

      package androidx.compose.material3

      import androidx.compose.foundation.text.BasicText
      import androidx.compose.foundation.text.InlineTextContent
      import androidx.compose.foundation.text.TextAutoSize
      import androidx.compose.material3.tokens.DefaultTextStyle
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.ProvidableCompositionLocal
      import androidx.compose.runtime.compositionLocalOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.structuralEqualityPolicy
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.ColorProducer
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.text.AnnotatedString
      import androidx.compose.ui.text.AnnotatedString.Range
      import androidx.compose.ui.text.LinkAnnotation
  - id: live-androidx-material3-material3-material3-text-lines-134-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 134
    endLine: 168
    sha256: ed6522ad8d54c88f08335e104efba4e74ec9b2e18735e48371e9665552b2ab95
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      fontWeight = fontWeight,
                      textAlign = textAlign ?: TextAlign.Unspecified,
                      lineHeight = lineHeight,
                      fontFamily = fontFamily,
                      textDecoration = textDecoration,
                      fontStyle = fontStyle,
                      letterSpacing = letterSpacing,
                  ),
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
              autoSize = autoSize,
          )
      }

      /**
       * High level element that displays text and provides semantics / accessibility information.
       *
       * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
       * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
       * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
       * attributes you want to override.
       *
       * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
       * precedence is as follows:
       * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
       *   this parameter will always be used.
       * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
       *   from [style] will be used instead.
       *
       * @param text the text to be displayed
       * @param modifier the [Modifier] to be applied to this layout node
       * @param color the [ColorProducer] that returns a [Color]. Useful when providing a color value that
  - id: live-androidx-material3-material3-material3-text-lines-169-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 169
    endLine: 196
    sha256: ef922e167bfe01c409caa4ed3f0c3cd9eabe3aecccffe624f5c370780fc640be
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   changes frequently without needing to recompose. Overrides the text color provided in [style]
       * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
       *   fits in the available space and lays the text out with this size. This performs multiple layout
       *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
       *   through [fontSize] and [style]. See [TextAutoSize].
       * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
       *   [TextStyle.fontStyle].
       * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing the amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
       * @param textDecoration the decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign the alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow how visual overflow should be handled.
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param onTextLayout callback that is executed when a new text layout is calculated. A
  - id: live-androidx-material3-material3-material3-text-lines-197-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 197
    endLine: 231
    sha256: 2171ff6ef39edd4c21149e04a8e56669ec30bd3d9cacc102f4269d19b32c9cca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style style configuration for the text such as color, font, line height etc.
       */
      @Composable
      public fun Text(
          text: String,
          color: ColorProducer,
          modifier: Modifier = Modifier,
          autoSize: TextAutoSize? = null,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          style: TextStyle = LocalTextStyle.current,
      ) {

          BasicText(
              text = text,
              modifier = modifier,
              style =
                  style.merge(
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      textAlign = textAlign ?: TextAlign.Unspecified,
  - id: live-androidx-material3-material3-material3-text-lines-232-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 232
    endLine: 266
    sha256: 68a6088f5cf975b437863cf4ef23b276458b301a57f0cbaac649b3d4698b9049
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      lineHeight = lineHeight,
                      fontFamily = fontFamily,
                      textDecoration = textDecoration,
                      fontStyle = fontStyle,
                      letterSpacing = letterSpacing,
                  ),
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
              color = color,
              autoSize = autoSize,
          )
      }

      /**
       * High level element that displays text and provides semantics / accessibility information.
       *
       * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
       * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
       * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
       * attributes you want to override.
       *
       * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
       * precedence is as follows:
       * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
       *   this parameter will always be used.
       * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
       *   from [style] will be used instead.
       *
       * Additionally, for [color], if [color] is not set, and [style] does not have a color, then
       * [LocalContentColor] will be used.
       *
       * See an example of displaying text with links where links apply the styling from the theme:
  - id: live-androidx-material3-material3-material3-text-lines-267-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 267
    endLine: 296
    sha256: 7463b814be0d6d275ccdb285b1ab5f14ff6640150533215f0bae078f8be2e696
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.material3.samples.TextWithLinks
       * @param text the text to be displayed
       * @param modifier the [Modifier] to be applied to this layout node
       * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
       *   this will be [LocalContentColor].
       * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
       *   fits in the available space and lays the text out with this size. This performs multiple layout
       *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
       *   through [fontSize] and [style]. See [TextAutoSize].
       * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
       *   [TextStyle.fontStyle].
       * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing the amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
       * @param textDecoration the decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign the alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow how visual overflow should be handled.
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
  - id: live-androidx-material3-material3-material3-text-lines-297-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 297
    endLine: 331
    sha256: 8ffad9500c7e48fe17c270721a9567795c328f2e0415a586713f63199511798b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param inlineContent a map storing composables that replaces certain ranges of the text, used to
       *   insert composables into text layout. See [InlineTextContent].
       * @param onTextLayout callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style style configuration for the text such as color, font, line height etc.
       */
      @Composable
      public fun Text(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          autoSize: TextAutoSize? = null,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          val textColor = color.takeOrElse { style.color.takeOrElse { LocalContentColor.current } }
          val linkStyles = rememberTextLinkStyles()
          val textWithMaterialLinkStyles =
  - id: live-androidx-material3-material3-material3-text-lines-332-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 332
    endLine: 366
    sha256: cabdd0a1db18ad01be7966f1e7dab0d05b4ec65859a77447775d1f0d246f4b07
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              remember(text, linkStyles) { createTextWithLinkStyles(text, linkStyles) }

          BasicText(
              text = textWithMaterialLinkStyles,
              modifier = modifier,
              style =
                  style.merge(
                      color = textColor,
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      textAlign = textAlign ?: TextAlign.Unspecified,
                      lineHeight = lineHeight,
                      fontFamily = fontFamily,
                      textDecoration = textDecoration,
                      fontStyle = fontStyle,
                      letterSpacing = letterSpacing,
                  ),
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
              inlineContent = inlineContent,
              autoSize = autoSize,
          )
      }

      /**
       * High level element that displays text and provides semantics / accessibility information.
       *
       * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
       * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
       * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
       * attributes you want to override.
       *
  - id: live-androidx-material3-material3-material3-text-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 36
    endLine: 70
    sha256: 0038a97721f2f28a20d6413078852767dfdf047844802901184ccc16b175b3d6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.Paragraph
      import androidx.compose.ui.text.SpanStyle
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextLinkStyles
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.font.FontStyle
      import androidx.compose.ui.text.font.FontWeight
      import androidx.compose.ui.text.style.TextAlign
      import androidx.compose.ui.text.style.TextDecoration
      import androidx.compose.ui.text.style.TextOverflow
      import androidx.compose.ui.unit.TextUnit

      /**
       * High level element that displays text and provides semantics / accessibility information.
       *
       * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
       * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
       * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
       * attributes you want to override.
       *
       * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
       * precedence is as follows:
       * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
       *   this parameter will always be used.
       * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
       *   from [style] will be used instead.
       *
       * Additionally, for [color], if [color] is not set, and [style] does not have a color, then
       * [LocalContentColor] will be used.
       *
       * @param text the text to be displayed
       * @param modifier the [Modifier] to be applied to this layout node
       * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
       *   this will be [LocalContentColor].
  - id: live-androidx-material3-material3-material3-text-lines-367-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 367
    endLine: 398
    sha256: 351e8c226b12a62b2356443a42318f937208ed7760dbb4f5fdafe12abccd8913
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
       * precedence is as follows:
       * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
       *   this parameter will always be used.
       * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
       *   from [style] will be used instead.
       *
       * See an example of displaying text with links where links apply the styling from the theme:
       *
       * @sample androidx.compose.material3.samples.TextWithLinks
       * @param text the text to be displayed
       * @param modifier the [Modifier] to be applied to this layout node
       * @param color the [ColorProducer] that returns a [Color]. Useful when providing a color value that
       *   changes frequently without needing to recompose. Overrides the text color provided in [style]
       * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
       *   fits in the available space and lays the text out with this size. This performs multiple layout
       *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
       *   through [fontSize] and [style]. See [TextAutoSize].
       * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
       *   [TextStyle.fontStyle].
       * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing the amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
       * @param textDecoration the decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign the alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow how visual overflow should be handled.
  - id: live-androidx-material3-material3-material3-text-lines-399-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 399
    endLine: 433
    sha256: f471f13a239bbc4f0465af37ad651923bd20f01fb70e3d785aa6a70f603ba3a6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param inlineContent a map storing composables that replaces certain ranges of the text, used to
       *   insert composables into text layout. See [InlineTextContent].
       * @param onTextLayout callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style style configuration for the text such as color, font, line height etc.
       */
      @Composable
      public fun Text(
          text: AnnotatedString,
          color: ColorProducer,
          modifier: Modifier = Modifier,
          autoSize: TextAutoSize? = null,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
  - id: live-androidx-material3-material3-material3-text-lines-434-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 434
    endLine: 468
    sha256: ad851c0d7b5c2da959a18f1c62797aa1db7644b061fc1c5a162e06847b23e01e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          val linkStyles = rememberTextLinkStyles()
          val textWithMaterialLinkStyles =
              remember(text, linkStyles) { createTextWithLinkStyles(text, linkStyles) }

          BasicText(
              text = textWithMaterialLinkStyles,
              modifier = modifier,
              style =
                  style.merge(
                      fontSize = fontSize,
                      fontWeight = fontWeight,
                      textAlign = textAlign ?: TextAlign.Unspecified,
                      lineHeight = lineHeight,
                      fontFamily = fontFamily,
                      textDecoration = textDecoration,
                      fontStyle = fontStyle,
                      letterSpacing = letterSpacing,
                  ),
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
              inlineContent = inlineContent,
              color = color,
              autoSize = autoSize,
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with autoSize instead",
          level = DeprecationLevel.HIDDEN,
  - id: live-androidx-material3-material3-material3-text-lines-469-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 469
    endLine: 503
    sha256: ba803c53de3e000863fee66d0d7a230c238f5d15106f26e3c7f024152829f17d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      )
      @Composable
      public fun Text(
          text: String,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          style: TextStyle = LocalTextStyle.current,
      ): Unit =
          Text(
              text = text,
              modifier = modifier,
              color = color,
              fontSize = fontSize,
              fontStyle = fontStyle,
              fontWeight = fontWeight,
              fontFamily = fontFamily,
              letterSpacing = letterSpacing,
              textDecoration = textDecoration,
              textAlign = textAlign,
              lineHeight = lineHeight,
              overflow = overflow,
              softWrap = softWrap,
  - id: live-androidx-material3-material3-material3-text-lines-504-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 504
    endLine: 538
    sha256: 890e05cc122ae90b76113c3541edf2668e5a4f40be22a989b678c35165a1755c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              maxLines = maxLines,
              minLines = minLines,
              onTextLayout = onTextLayout,
              style = style,
              autoSize = null,
          )

      @Deprecated(
          "Maintained for binary compatibility. Use version with autoSize instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun Text(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ): Unit =
          Text(
              text = text,
              modifier = modifier,
  - id: live-androidx-material3-material3-material3-text-lines-539-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 539
    endLine: 573
    sha256: f779864eb06a85d71d161b65cb5cb707300374b4853be2e950450db8e27706b7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              color = color,
              fontSize = fontSize,
              fontStyle = fontStyle,
              fontWeight = fontWeight,
              fontFamily = fontFamily,
              letterSpacing = letterSpacing,
              textDecoration = textDecoration,
              textAlign = textAlign,
              lineHeight = lineHeight,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
              inlineContent = inlineContent,
              onTextLayout = onTextLayout,
              style = style,
              autoSize = null,
          )

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun Text(
          text: String,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
  - id: live-androidx-material3-material3-material3-text-lines-574-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 574
    endLine: 608
    sha256: 377192f82444c03854d585805641e24200afed24986d8f7e4d61c17f0a165e2b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          Text(
              text = text,
              modifier = modifier,
              color = color,
              fontSize = fontSize,
              fontStyle = fontStyle,
              fontWeight = fontWeight,
              fontFamily = fontFamily,
              letterSpacing = letterSpacing,
              textDecoration = textDecoration,
              textAlign = textAlign,
              lineHeight = lineHeight,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = 1,
              onTextLayout = onTextLayout,
              style = style,
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun Text(
          text: AnnotatedString,
  - id: live-androidx-material3-material3-material3-text-lines-609-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 609
    endLine: 643
    sha256: 04a736d9d91298cf1a359b01d2bf93565e6beaafa6701f056c77acfe6afcc743
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          Text(
              text = text,
              modifier = modifier,
              color = color,
              fontSize = fontSize,
              fontStyle = fontStyle,
              fontWeight = fontWeight,
              fontFamily = fontFamily,
              letterSpacing = letterSpacing,
              textDecoration = textDecoration,
              textAlign = textAlign,
              lineHeight = lineHeight,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = 1,
              inlineContent = inlineContent,
              onTextLayout = onTextLayout,
  - id: live-androidx-material3-material3-material3-text-lines-644-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 644
    endLine: 678
    sha256: 02ca9c9af01744a86e0adca03c55ad008f1a3290d6d1724628e799e0196912f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              style = style,
          )
      }

      /**
       * CompositionLocal containing the preferred [TextStyle] that will be used by [Text] components by
       * default. To set the value for this CompositionLocal, see [ProvideTextStyle] which will merge any
       * missing [TextStyle] properties with the existing [TextStyle] set in this CompositionLocal.
       *
       * @see ProvideTextStyle
       */
      public val LocalTextStyle: ProvidableCompositionLocal<TextStyle> =
          compositionLocalOf(structuralEqualityPolicy()) { DefaultTextStyle }

      // TODO(b/156598010): remove this and replace with fold definition on the backing CompositionLocal
      /**
       * This function is used to set the current value of [LocalTextStyle], merging the given style with
       * the current style values for any missing attributes. Any [Text] components included in this
       * component's [content] will be styled with this style unless styled explicitly.
       *
       * @see LocalTextStyle
       */
      @Composable
      public fun ProvideTextStyle(value: TextStyle, content: @Composable () -> Unit) {
          val mergedStyle = LocalTextStyle.current.merge(value)
          CompositionLocalProvider(LocalTextStyle provides mergedStyle, content = content)
      }

      @Suppress("UNCHECKED_CAST")
      private fun createTextWithLinkStyles(
          text: AnnotatedString,
          linkStyles: TextLinkStyles,
      ): AnnotatedString = text.mapAnnotations { range ->
          val link = range.item
          when {
  - id: live-androidx-material3-material3-material3-text-lines-679-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 679
    endLine: 696
    sha256: b05b076e8efb191888e628646f79a43f31964a4ce056089d089505b8b796be01
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              link is LinkAnnotation.Url && link.styles == null ->
                  (range as Range<LinkAnnotation.Url>).copy(link.copy(styles = linkStyles))
              link is LinkAnnotation.Clickable && link.styles == null ->
                  (range as Range<LinkAnnotation.Clickable>).copy(link.copy(styles = linkStyles))
              else -> range
          }
      }

      @Composable
      private fun rememberTextLinkStyles(): TextLinkStyles {
          val primaryColor = MaterialTheme.colorScheme.primary
          return remember(primaryColor) {
              TextLinkStyles(
                  style = SpanStyle(color = primaryColor, textDecoration = TextDecoration.Underline)
              )
          }
      }
  - id: live-androidx-material3-material3-material3-text-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 71
    endLine: 98
    sha256: accaa1fa350f44f8f964f7f17b02f48469eca2a9e07f17202b8ad729f030c055
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
       *   fits in the available space and lays the text out with this size. This performs multiple layout
       *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
       *   through [fontSize] and [style]. See [TextAutoSize].
       * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
       *   [TextStyle.fontStyle].
       * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing the amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
       * @param textDecoration the decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign the alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow how visual overflow should be handled.
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param onTextLayout callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
  - id: live-androidx-material3-material3-material3-text-lines-99-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt
    startLine: 99
    endLine: 133
    sha256: 9f90fd176da7ebfe77ecb8240aab722cb83bbb98cdb9be92e34c03f9ec44d10e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style style configuration for the text such as color, font, line height etc.
       */
      @Composable
      public fun Text(
          text: String,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          autoSize: TextAutoSize? = null,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
          letterSpacing: TextUnit = TextUnit.Unspecified,
          textDecoration: TextDecoration? = null,
          textAlign: TextAlign? = null,
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          style: TextStyle = LocalTextStyle.current,
      ) {

          val textColor = color.takeOrElse { style.color.takeOrElse { LocalContentColor.current } }

          BasicText(
              text = text,
              modifier = modifier,
              style =
                  style.merge(
                      color = textColor,
                      fontSize = fontSize,
compose:
  id: live-androidx-material3-material3-material3-text
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-text-lines-1
      title: androidx.compose.material3 Text.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-134
      title: androidx.compose.material3 Text.kt source (lines 134–168)
      aliases:
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-134-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-169
      title: androidx.compose.material3 Text.kt source (lines 169–196)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-169-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-197
      title: androidx.compose.material3 Text.kt source (lines 197–231)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-197-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-232
      title: androidx.compose.material3 Text.kt source (lines 232–266)
      aliases:
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-232-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-267
      title: androidx.compose.material3 Text.kt source (lines 267–296)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-267-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-297
      title: androidx.compose.material3 Text.kt source (lines 297–331)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-297-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-332
      title: androidx.compose.material3 Text.kt source (lines 332–366)
      aliases:
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-332-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-36
      title: androidx.compose.material3 Text.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-367
      title: androidx.compose.material3 Text.kt source (lines 367–398)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-367-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-399
      title: androidx.compose.material3 Text.kt source (lines 399–433)
      aliases:
        - androidx.compose.material3.Text
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-399-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-434
      title: androidx.compose.material3 Text.kt source (lines 434–468)
      aliases:
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-434-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-469
      title: androidx.compose.material3 Text.kt source (lines 469–503)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-469-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-504
      title: androidx.compose.material3 Text.kt source (lines 504–538)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-504-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-539
      title: androidx.compose.material3 Text.kt source (lines 539–573)
      aliases:
        - androidx.compose.material3.Text
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-539-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-574
      title: androidx.compose.material3 Text.kt source (lines 574–608)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-574-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-609
      title: androidx.compose.material3 Text.kt source (lines 609–643)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-609-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-644
      title: androidx.compose.material3 Text.kt source (lines 644–678)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
        - androidx.compose.material3.ProvideTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-644-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-679
      title: androidx.compose.material3 Text.kt source (lines 679–696)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-679-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-71
      title: androidx.compose.material3 Text.kt source (lines 71–98)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-text-lines-99
      title: androidx.compose.material3 Text.kt source (lines 99–133)
      aliases:
        - androidx.compose.material3.Text
        - androidx.compose.material3.LocalTextStyle
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-text-lines-99-source
      relatedIds: []
---

# androidx.compose.material3 Text.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt

## androidx.compose.material3 Text.kt source (lines 1–35)

/*
 * Copyright 2021 The Android Open Source Project
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

package androidx.compose.material3

import androidx.compose.foundation.text.BasicText
import androidx.compose.foundation.text.InlineTextContent
import androidx.compose.foundation.text.TextAutoSize
import androidx.compose.material3.tokens.DefaultTextStyle
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.structuralEqualityPolicy
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorProducer
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.AnnotatedString.Range
import androidx.compose.ui.text.LinkAnnotation

Sources: [live-androidx-material3-material3-material3-text-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 134–168)

                fontWeight = fontWeight,
                textAlign = textAlign ?: TextAlign.Unspecified,
                lineHeight = lineHeight,
                fontFamily = fontFamily,
                textDecoration = textDecoration,
                fontStyle = fontStyle,
                letterSpacing = letterSpacing,
            ),
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,
        autoSize = autoSize,
    )
}

/**
 * High level element that displays text and provides semantics / accessibility information.
 *
 * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
 * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
 * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
 * attributes you want to override.
 *
 * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
 * precedence is as follows:
 * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
 *   this parameter will always be used.
 * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
 *   from [style] will be used instead.
 *
 * @param text the text to be displayed
 * @param modifier the [Modifier] to be applied to this layout node
 * @param color the [ColorProducer] that returns a [Color]. Useful when providing a color value that

Sources: [live-androidx-material3-material3-material3-text-lines-134-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 169–196)

 *   changes frequently without needing to recompose. Overrides the text color provided in [style]
 * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
 *   fits in the available space and lays the text out with this size. This performs multiple layout
 *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
 *   through [fontSize] and [style]. See [TextAutoSize].
 * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
 *   [TextStyle.fontStyle].
 * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing the amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].
 * @param textDecoration the decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign the alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow how visual overflow should be handled.
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param onTextLayout callback that is executed when a new text layout is calculated. A

Sources: [live-androidx-material3-material3-material3-text-lines-169-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 197–231)

 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style style configuration for the text such as color, font, line height etc.
 */
@Composable
public fun Text(
    text: String,
    color: ColorProducer,
    modifier: Modifier = Modifier,
    autoSize: TextAutoSize? = null,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    style: TextStyle = LocalTextStyle.current,
) {

    BasicText(
        text = text,
        modifier = modifier,
        style =
            style.merge(
                fontSize = fontSize,
                fontWeight = fontWeight,
                textAlign = textAlign ?: TextAlign.Unspecified,

Sources: [live-androidx-material3-material3-material3-text-lines-197-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 232–266)

                lineHeight = lineHeight,
                fontFamily = fontFamily,
                textDecoration = textDecoration,
                fontStyle = fontStyle,
                letterSpacing = letterSpacing,
            ),
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,
        color = color,
        autoSize = autoSize,
    )
}

/**
 * High level element that displays text and provides semantics / accessibility information.
 *
 * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
 * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
 * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
 * attributes you want to override.
 *
 * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
 * precedence is as follows:
 * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
 *   this parameter will always be used.
 * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
 *   from [style] will be used instead.
 *
 * Additionally, for [color], if [color] is not set, and [style] does not have a color, then
 * [LocalContentColor] will be used.
 *
 * See an example of displaying text with links where links apply the styling from the theme:

Sources: [live-androidx-material3-material3-material3-text-lines-232-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 267–296)

 *
 * @sample androidx.compose.material3.samples.TextWithLinks
 * @param text the text to be displayed
 * @param modifier the [Modifier] to be applied to this layout node
 * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
 *   this will be [LocalContentColor].
 * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
 *   fits in the available space and lays the text out with this size. This performs multiple layout
 *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
 *   through [fontSize] and [style]. See [TextAutoSize].
 * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
 *   [TextStyle.fontStyle].
 * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing the amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].
 * @param textDecoration the decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign the alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow how visual overflow should be handled.
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].

Sources: [live-androidx-material3-material3-material3-text-lines-267-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 297–331)

 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param inlineContent a map storing composables that replaces certain ranges of the text, used to
 *   insert composables into text layout. See [InlineTextContent].
 * @param onTextLayout callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style style configuration for the text such as color, font, line height etc.
 */
@Composable
public fun Text(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    autoSize: TextAutoSize? = null,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    val textColor = color.takeOrElse { style.color.takeOrElse { LocalContentColor.current } }
    val linkStyles = rememberTextLinkStyles()
    val textWithMaterialLinkStyles =

Sources: [live-androidx-material3-material3-material3-text-lines-297-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 332–366)

        remember(text, linkStyles) { createTextWithLinkStyles(text, linkStyles) }

    BasicText(
        text = textWithMaterialLinkStyles,
        modifier = modifier,
        style =
            style.merge(
                color = textColor,
                fontSize = fontSize,
                fontWeight = fontWeight,
                textAlign = textAlign ?: TextAlign.Unspecified,
                lineHeight = lineHeight,
                fontFamily = fontFamily,
                textDecoration = textDecoration,
                fontStyle = fontStyle,
                letterSpacing = letterSpacing,
            ),
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,
        inlineContent = inlineContent,
        autoSize = autoSize,
    )
}

/**
 * High level element that displays text and provides semantics / accessibility information.
 *
 * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
 * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
 * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
 * attributes you want to override.
 *

Sources: [live-androidx-material3-material3-material3-text-lines-332-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 36–70)

import androidx.compose.ui.text.Paragraph
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextLinkStyles
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.TextUnit

/**
 * High level element that displays text and provides semantics / accessibility information.
 *
 * The default [style] uses the [LocalTextStyle] provided by the [MaterialTheme] / components. If
 * you are setting your own style, you may want to consider first retrieving [LocalTextStyle], and
 * using [TextStyle.copy] to keep any theme defined attributes, only modifying the specific
 * attributes you want to override.
 *
 * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
 * precedence is as follows:
 * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
 *   this parameter will always be used.
 * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
 *   from [style] will be used instead.
 *
 * Additionally, for [color], if [color] is not set, and [style] does not have a color, then
 * [LocalContentColor] will be used.
 *
 * @param text the text to be displayed
 * @param modifier the [Modifier] to be applied to this layout node
 * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
 *   this will be [LocalContentColor].

Sources: [live-androidx-material3-material3-material3-text-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 367–398)

 * For ease of use, commonly used parameters from [TextStyle] are also present here. The order of
 * precedence is as follows:
 * - If a parameter is explicitly set here (i.e, it is _not_ `null` or [TextUnit.Unspecified]), then
 *   this parameter will always be used.
 * - If a parameter is _not_ set, (`null` or [TextUnit.Unspecified]), then the corresponding value
 *   from [style] will be used instead.
 *
 * See an example of displaying text with links where links apply the styling from the theme:
 *
 * @sample androidx.compose.material3.samples.TextWithLinks
 * @param text the text to be displayed
 * @param modifier the [Modifier] to be applied to this layout node
 * @param color the [ColorProducer] that returns a [Color]. Useful when providing a color value that
 *   changes frequently without needing to recompose. Overrides the text color provided in [style]
 * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
 *   fits in the available space and lays the text out with this size. This performs multiple layout
 *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
 *   through [fontSize] and [style]. See [TextAutoSize].
 * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
 *   [TextStyle.fontStyle].
 * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing the amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].
 * @param textDecoration the decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign the alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow how visual overflow should be handled.

Sources: [live-androidx-material3-material3-material3-text-lines-367-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 399–433)

 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param inlineContent a map storing composables that replaces certain ranges of the text, used to
 *   insert composables into text layout. See [InlineTextContent].
 * @param onTextLayout callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style style configuration for the text such as color, font, line height etc.
 */
@Composable
public fun Text(
    text: AnnotatedString,
    color: ColorProducer,
    modifier: Modifier = Modifier,
    autoSize: TextAutoSize? = null,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),

Sources: [live-androidx-material3-material3-material3-text-lines-399-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 434–468)

    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    val linkStyles = rememberTextLinkStyles()
    val textWithMaterialLinkStyles =
        remember(text, linkStyles) { createTextWithLinkStyles(text, linkStyles) }

    BasicText(
        text = textWithMaterialLinkStyles,
        modifier = modifier,
        style =
            style.merge(
                fontSize = fontSize,
                fontWeight = fontWeight,
                textAlign = textAlign ?: TextAlign.Unspecified,
                lineHeight = lineHeight,
                fontFamily = fontFamily,
                textDecoration = textDecoration,
                fontStyle = fontStyle,
                letterSpacing = letterSpacing,
            ),
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,
        inlineContent = inlineContent,
        color = color,
        autoSize = autoSize,
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with autoSize instead",
    level = DeprecationLevel.HIDDEN,

Sources: [live-androidx-material3-material3-material3-text-lines-434-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 469–503)

)
@Composable
public fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    style: TextStyle = LocalTextStyle.current,
): Unit =
    Text(
        text = text,
        modifier = modifier,
        color = color,
        fontSize = fontSize,
        fontStyle = fontStyle,
        fontWeight = fontWeight,
        fontFamily = fontFamily,
        letterSpacing = letterSpacing,
        textDecoration = textDecoration,
        textAlign = textAlign,
        lineHeight = lineHeight,
        overflow = overflow,
        softWrap = softWrap,

Sources: [live-androidx-material3-material3-material3-text-lines-469-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 504–538)

        maxLines = maxLines,
        minLines = minLines,
        onTextLayout = onTextLayout,
        style = style,
        autoSize = null,
    )

@Deprecated(
    "Maintained for binary compatibility. Use version with autoSize instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun Text(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
): Unit =
    Text(
        text = text,
        modifier = modifier,

Sources: [live-androidx-material3-material3-material3-text-lines-504-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 539–573)

        color = color,
        fontSize = fontSize,
        fontStyle = fontStyle,
        fontWeight = fontWeight,
        fontFamily = fontFamily,
        letterSpacing = letterSpacing,
        textDecoration = textDecoration,
        textAlign = textAlign,
        lineHeight = lineHeight,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,
        inlineContent = inlineContent,
        onTextLayout = onTextLayout,
        style = style,
        autoSize = null,
    )

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,

Sources: [live-androidx-material3-material3-material3-text-lines-539-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 574–608)

    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    Text(
        text = text,
        modifier = modifier,
        color = color,
        fontSize = fontSize,
        fontStyle = fontStyle,
        fontWeight = fontWeight,
        fontFamily = fontFamily,
        letterSpacing = letterSpacing,
        textDecoration = textDecoration,
        textAlign = textAlign,
        lineHeight = lineHeight,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = 1,
        onTextLayout = onTextLayout,
        style = style,
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun Text(
    text: AnnotatedString,

Sources: [live-androidx-material3-material3-material3-text-lines-574-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 609–643)

    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    Text(
        text = text,
        modifier = modifier,
        color = color,
        fontSize = fontSize,
        fontStyle = fontStyle,
        fontWeight = fontWeight,
        fontFamily = fontFamily,
        letterSpacing = letterSpacing,
        textDecoration = textDecoration,
        textAlign = textAlign,
        lineHeight = lineHeight,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = 1,
        inlineContent = inlineContent,
        onTextLayout = onTextLayout,

Sources: [live-androidx-material3-material3-material3-text-lines-609-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 644–678)

        style = style,
    )
}

/**
 * CompositionLocal containing the preferred [TextStyle] that will be used by [Text] components by
 * default. To set the value for this CompositionLocal, see [ProvideTextStyle] which will merge any
 * missing [TextStyle] properties with the existing [TextStyle] set in this CompositionLocal.
 *
 * @see ProvideTextStyle
 */
public val LocalTextStyle: ProvidableCompositionLocal<TextStyle> =
    compositionLocalOf(structuralEqualityPolicy()) { DefaultTextStyle }

// TODO(b/156598010): remove this and replace with fold definition on the backing CompositionLocal
/**
 * This function is used to set the current value of [LocalTextStyle], merging the given style with
 * the current style values for any missing attributes. Any [Text] components included in this
 * component's [content] will be styled with this style unless styled explicitly.
 *
 * @see LocalTextStyle
 */
@Composable
public fun ProvideTextStyle(value: TextStyle, content: @Composable () -> Unit) {
    val mergedStyle = LocalTextStyle.current.merge(value)
    CompositionLocalProvider(LocalTextStyle provides mergedStyle, content = content)
}

@Suppress("UNCHECKED_CAST")
private fun createTextWithLinkStyles(
    text: AnnotatedString,
    linkStyles: TextLinkStyles,
): AnnotatedString = text.mapAnnotations { range ->
    val link = range.item
    when {

Sources: [live-androidx-material3-material3-material3-text-lines-644-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 679–696)

        link is LinkAnnotation.Url && link.styles == null ->
            (range as Range<LinkAnnotation.Url>).copy(link.copy(styles = linkStyles))
        link is LinkAnnotation.Clickable && link.styles == null ->
            (range as Range<LinkAnnotation.Clickable>).copy(link.copy(styles = linkStyles))
        else -> range
    }
}

@Composable
private fun rememberTextLinkStyles(): TextLinkStyles {
    val primaryColor = MaterialTheme.colorScheme.primary
    return remember(primaryColor) {
        TextLinkStyles(
            style = SpanStyle(color = primaryColor, textDecoration = TextDecoration.Underline)
        )
    }
}


Sources: [live-androidx-material3-material3-material3-text-lines-679-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 71–98)

 * @param autoSize Enable auto sizing for this text composable. Finds the biggest font size that
 *   fits in the available space and lays the text out with this size. This performs multiple layout
 *   passes and can be slower than using a fixed font size. This takes precedence over sizes defined
 *   through [fontSize] and [style]. See [TextAutoSize].
 * @param fontSize the size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle the typeface variant to use when drawing the letters (e.g., italic). See
 *   [TextStyle.fontStyle].
 * @param fontWeight the typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily the font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing the amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].
 * @param textDecoration the decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign the alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow how visual overflow should be handled.
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param onTextLayout callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the

Sources: [live-androidx-material3-material3-material3-text-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)

## androidx.compose.material3 Text.kt source (lines 99–133)

 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style style configuration for the text such as color, font, line height etc.
 */
@Composable
public fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    autoSize: TextAutoSize? = null,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,
    letterSpacing: TextUnit = TextUnit.Unspecified,
    textDecoration: TextDecoration? = null,
    textAlign: TextAlign? = null,
    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    style: TextStyle = LocalTextStyle.current,
) {

    val textColor = color.takeOrElse { style.color.takeOrElse { LocalContentColor.current } }

    BasicText(
        text = text,
        modifier = modifier,
        style =
            style.merge(
                color = textColor,
                fontSize = fontSize,

Sources: [live-androidx-material3-material3-material3-text-lines-99-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Text.kt)
