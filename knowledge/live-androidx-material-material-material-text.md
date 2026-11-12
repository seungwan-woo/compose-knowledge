---
type: reference
title: androidx.compose.material Text.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material-material-material-text-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 1
    endLine: 35
    sha256: 92b712bcff7aefc97ad3cc4d99b8695b2b810a78f24dd50617b7f851cbf7e456
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

      package androidx.compose.material

      import androidx.compose.foundation.text.BasicText
      import androidx.compose.foundation.text.InlineTextContent
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.compositionLocalOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.structuralEqualityPolicy
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.isSpecified
      import androidx.compose.ui.text.AnnotatedString
      import androidx.compose.ui.text.AnnotatedString.Range
      import androidx.compose.ui.text.LinkAnnotation
      import androidx.compose.ui.text.Paragraph
      import androidx.compose.ui.text.SpanStyle
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextLinkStyles
  - id: live-androidx-material-material-material-text-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 106
    endLine: 140
    sha256: 8e79036d58b5d9b37947d0a4b6116ab811212a3c563f4cfd50443cf517964b77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          // TL:DR: profile before you change any line of code in this method
          //
          // The call to LocalContentAlpha.current looks like it can be avoided by only calling it in the
          // last else block but, in 1.5, this causes a control flow group to be created because it would
          // be a conditional call to a composable function. The call is currently made unconditionally
          // since the call to LocalContentAlpha.current does not create a group (it is a read-only
          // composable) and looking up the value in the composition locals map is currently faster than
          // creating a group to avoid it.
          //
          // Similar notes regarding lambda allocations. It appears there's a path to optimize for
          // zero-allocations in the style-provided color route, but this either introduces a group or a
          // box depending on how it's coded. It's also possible that allocating a final ColorProducer
          // subclass with no capture may be a successful optimization, but it appeared slower in initial
          // profiling.
          //
          // If changing ANY LINE OF CODE, please confirm that it's faster or the same speed using
          // profilers and benchmarks.
          val localContentColor = LocalContentColor.current
          val localContentAlpha = LocalContentAlpha.current
          val overrideColorOrUnspecified: Color =
              if (color.isSpecified) {
                  color
              } else if (style.color.isSpecified) {
                  style.color
  - id: live-androidx-material-material-material-text-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 141
    endLine: 175
    sha256: 7c9cfd2a847032a3ef13a5aff418350f054e6c20530a3c87716edc9c583329e4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  localContentColor.copy(localContentAlpha)
              }

          BasicText(
              text = text,
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
              color = { overrideColorOrUnspecified },
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun Text(
          text: String,
          modifier: Modifier = Modifier,
  - id: live-androidx-material-material-material-text-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 176
    endLine: 210
    sha256: e5cf738523f66d69a8d4d0c10ef7cf423fd10ad1544697e9be1315321aed0637
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          Text(
              text,
              modifier,
              color,
              fontSize,
              fontStyle,
              fontWeight,
              fontFamily,
              letterSpacing,
              textDecoration,
              textAlign,
              lineHeight,
              overflow,
              softWrap,
              maxLines,
              1,
              onTextLayout,
              style,
          )
      }
  - id: live-androidx-material-material-material-text-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 211
    endLine: 245
    sha256: 6f537d02a886bd8cfb9fea2c6da05162520b0ee7f21d86be25ac65229e370a53
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
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
       * [LocalContentColor] will be used with an alpha of [LocalContentAlpha]- this allows this [Text] or
       * element containing this [Text] to adapt to different background colors and still maintain
       * contrast and accessibility.
       *
       * See an example of displaying text with links where links apply the styling from the theme:
       *
       * @sample androidx.compose.material.samples.TextWithLinks
       * @param text The text to be displayed.
       * @param modifier [Modifier] to apply to this layout node.
       * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
       *   this will be [LocalContentColor].
       * @param fontSize The size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic). See
       *   [TextStyle.fontStyle].
       * @param fontWeight The typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily The font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing The amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
  - id: live-androidx-material-material-material-text-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 246
    endLine: 280
    sha256: 70c74c44e3eac10739008e2ccee812ae59d83a65345c3912d7627dcd2968edab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param textDecoration The decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign The alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow How visual overflow should be handled.
       * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param inlineContent A map store composables that replaces certain ranges of the text. It's used
       *   to insert composables into text layout. Check [InlineTextContent] for more information.
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style Style configuration for the text such as color, font, line height etc.
       */
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
  - id: live-androidx-material-material-material-text-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 281
    endLine: 315
    sha256: 2dadad849cb90b3938a6ee7177d80c9c377f957331b89c741f6be0002f4dd60f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          lineHeight: TextUnit = TextUnit.Unspecified,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          // TL:DR: profile before you change any line of code in this method
          //
          // The call to LocalContentAlpha.current looks like it can be avoided by only calling it in the
          // last else block but, in 1.5, this causes a control flow group to be created because it would
          // be a conditional call to a composable function. The call is currently made unconditionally
          // since the call to LocalContentAlpha.current does not create a group (it is a read-only
          // composable) and looking up the value in the composition locals map is currently faster than
          // creating a group to avoid it.
          //
          // Similar notes regarding lambda allocations. It appears there's a path to optimize for
          // zero-allocations in the style-provided color route, but this either introduces a group or a
          // box depending on how it's coded. It's also possible that allocating a final ColorProducer
          // subclass with no capture may be a successful optimization, but it appeared slower in initial
          // profiling.
          //
          // If changing ANY LINE OF CODE, please confirm that it's faster or the same speed using
          // profilers and benchmarks.
          val localContentColor = LocalContentColor.current
          val localContentAlpha = LocalContentAlpha.current
          val overrideColorOrUnspecified =
              if (color.isSpecified) {
                  color
              } else if (style.color.isSpecified) {
                  style.color
              } else {
                  localContentColor.copy(localContentAlpha)
  - id: live-androidx-material-material-material-text-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 316
    endLine: 350
    sha256: b8a005d93f54487da2988059fbb6d2438fc3dfa77b058aafa0f37737963bd24b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

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
              color = { overrideColorOrUnspecified },
          )
      }

      @Deprecated(
          "Maintained for binary compatibility. Use version with minLines instead",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
  - id: live-androidx-material-material-material-text-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 351
    endLine: 385
    sha256: a3fbd4e50d294c1e417e30e941092ed3e181ff21cf10cd758c8373fc13f0199f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          onTextLayout: (TextLayoutResult) -> Unit = {},
          style: TextStyle = LocalTextStyle.current,
      ) {
          Text(
              text,
              modifier,
              color,
              fontSize,
              fontStyle,
              fontWeight,
              fontFamily,
              letterSpacing,
              textDecoration,
              textAlign,
              lineHeight,
              overflow,
              softWrap,
              maxLines,
              1,
  - id: live-androidx-material-material-material-text-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 36
    endLine: 70
    sha256: 69d9abf63f0f18846360295bc59b4022ef39faa49427cf1ca3d1e37cd05f13a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
       * [LocalContentColor] will be used with an alpha of [LocalContentAlpha]- this allows this [Text] or
       * element containing this [Text] to adapt to different background colors and still maintain
       * contrast and accessibility.
       *
       * @param text The text to be displayed.
       * @param modifier [Modifier] to apply to this layout node.
       * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
       *   this will be [LocalContentColor].
       * @param fontSize The size of glyphs to use when painting the text. See [TextStyle.fontSize].
       * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic). See
  - id: live-androidx-material-material-material-text-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 386
    endLine: 420
    sha256: 27e82fafd0b7e6124388b51873b802ca18d273e0d7e9cf4783d0aade3d06da56
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              inlineContent,
              onTextLayout,
              style,
          )
      }

      /**
       * CompositionLocal containing the preferred [TextStyle] that will be used by [Text] components by
       * default. To set the value for this CompositionLocal, see [ProvideTextStyle] which will merge any
       * missing [TextStyle] properties with the existing [TextStyle] set in this CompositionLocal.
       *
       * @see ProvideTextStyle
       */
      public val LocalTextStyle: androidx.compose.runtime.ProvidableCompositionLocal<TextStyle> =
          compositionLocalOf(structuralEqualityPolicy()) { DefaultTextStyle }

      // TODO: b/156598010 remove this and replace with fold definition on the backing CompositionLocal
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
  - id: live-androidx-material-material-material-text-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 421
    endLine: 440
    sha256: 9584960276aeffc161a66a2a208e345f7cdedc29b01985fb5bd4be6162991e03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          val link = range.item
          when {
              link is LinkAnnotation.Url && link.styles == null ->
                  (range as Range<LinkAnnotation.Url>).copy(link.copy(styles = linkStyles))
              link is LinkAnnotation.Clickable && link.styles == null ->
                  (range as Range<LinkAnnotation.Clickable>).copy(link.copy(styles = linkStyles))
              else -> range
          }
      }

      @Composable
      private fun rememberTextLinkStyles(): TextLinkStyles {
          val primaryColor = MaterialTheme.colors.primary
          return remember(primaryColor) {
              TextLinkStyles(
                  style = SpanStyle(color = primaryColor, textDecoration = TextDecoration.Underline)
              )
          }
      }
  - id: live-androidx-material-material-material-text-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt
    startLine: 71
    endLine: 105
    sha256: 88fdef218f7b40c0ae1f66a93e4f1f9d8ce0c90eb0feade6bf26a6c14cfef25d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   [TextStyle.fontStyle].
       * @param fontWeight The typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
       * @param fontFamily The font family to be used when rendering the text. See [TextStyle.fontFamily].
       * @param letterSpacing The amount of space to add between each letter. See
       *   [TextStyle.letterSpacing].
       * @param textDecoration The decorations to paint on the text (e.g., an underline). See
       *   [TextStyle.textDecoration].
       * @param textAlign The alignment of the text within the lines of the paragraph. See
       *   [TextStyle.textAlign].
       * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
       *   [TextStyle.lineHeight].
       * @param overflow How visual overflow should be handled.
       * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param style Style configuration for the text such as color, font, line height etc.
       */
      @Composable
      public fun Text(
          text: String,
          modifier: Modifier = Modifier,
          color: Color = Color.Unspecified,
          fontSize: TextUnit = TextUnit.Unspecified,
          fontStyle: FontStyle? = null,
          fontWeight: FontWeight? = null,
          fontFamily: FontFamily? = null,
compose:
  id: live-androidx-material-material-material-text
  artifact: androidx.compose.material:material
  fqn: androidx.compose.material
  sections:
    - id: live-androidx-material-material-material-text-lines-1
      title: androidx.compose.material Text.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-1-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-106
      title: androidx.compose.material Text.kt source (lines 106–140)
      aliases:
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-106-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-141
      title: androidx.compose.material Text.kt source (lines 141–175)
      aliases:
        - androidx.compose.material.Text
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-141-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-176
      title: androidx.compose.material Text.kt source (lines 176–210)
      aliases:
        - androidx.compose.material.Text
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-176-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-211
      title: androidx.compose.material Text.kt source (lines 211–245)
      aliases:
        - androidx.compose.material.Text
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-211-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-246
      title: androidx.compose.material Text.kt source (lines 246–280)
      aliases:
        - androidx.compose.material.Text
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-246-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-281
      title: androidx.compose.material Text.kt source (lines 281–315)
      aliases:
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-281-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-316
      title: androidx.compose.material Text.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-316-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-351
      title: androidx.compose.material Text.kt source (lines 351–385)
      aliases:
        - androidx.compose.material.Text
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-351-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-36
      title: androidx.compose.material Text.kt source (lines 36–70)
      aliases:
        - androidx.compose.material.Text
        - androidx.compose.material.LocalTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-36-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-386
      title: androidx.compose.material Text.kt source (lines 386–420)
      aliases:
        - androidx.compose.material.Text
        - androidx.compose.material.LocalTextStyle
        - androidx.compose.material.ProvideTextStyle
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-386-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-421
      title: androidx.compose.material Text.kt source (lines 421–440)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-421-source
      relatedIds: []
    - id: live-androidx-material-material-material-text-lines-71
      title: androidx.compose.material Text.kt source (lines 71–105)
      aliases:
        - androidx.compose.material.Text
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-text-lines-71-source
      relatedIds: []
---

# androidx.compose.material Text.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt

## androidx.compose.material Text.kt source (lines 1–35)

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

package androidx.compose.material

import androidx.compose.foundation.text.BasicText
import androidx.compose.foundation.text.InlineTextContent
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.structuralEqualityPolicy
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.isSpecified
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.AnnotatedString.Range
import androidx.compose.ui.text.LinkAnnotation
import androidx.compose.ui.text.Paragraph
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextLinkStyles

Sources: [live-androidx-material-material-material-text-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 106–140)

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
    // TL:DR: profile before you change any line of code in this method
    //
    // The call to LocalContentAlpha.current looks like it can be avoided by only calling it in the
    // last else block but, in 1.5, this causes a control flow group to be created because it would
    // be a conditional call to a composable function. The call is currently made unconditionally
    // since the call to LocalContentAlpha.current does not create a group (it is a read-only
    // composable) and looking up the value in the composition locals map is currently faster than
    // creating a group to avoid it.
    //
    // Similar notes regarding lambda allocations. It appears there's a path to optimize for
    // zero-allocations in the style-provided color route, but this either introduces a group or a
    // box depending on how it's coded. It's also possible that allocating a final ColorProducer
    // subclass with no capture may be a successful optimization, but it appeared slower in initial
    // profiling.
    //
    // If changing ANY LINE OF CODE, please confirm that it's faster or the same speed using
    // profilers and benchmarks.
    val localContentColor = LocalContentColor.current
    val localContentAlpha = LocalContentAlpha.current
    val overrideColorOrUnspecified: Color =
        if (color.isSpecified) {
            color
        } else if (style.color.isSpecified) {
            style.color

Sources: [live-androidx-material-material-material-text-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 141–175)

        } else {
            localContentColor.copy(localContentAlpha)
        }

    BasicText(
        text = text,
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
        color = { overrideColorOrUnspecified },
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun Text(
    text: String,
    modifier: Modifier = Modifier,

Sources: [live-androidx-material-material-material-text-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 176–210)

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
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    Text(
        text,
        modifier,
        color,
        fontSize,
        fontStyle,
        fontWeight,
        fontFamily,
        letterSpacing,
        textDecoration,
        textAlign,
        lineHeight,
        overflow,
        softWrap,
        maxLines,
        1,
        onTextLayout,
        style,
    )
}

Sources: [live-androidx-material-material-material-text-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 211–245)


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
 * [LocalContentColor] will be used with an alpha of [LocalContentAlpha]- this allows this [Text] or
 * element containing this [Text] to adapt to different background colors and still maintain
 * contrast and accessibility.
 *
 * See an example of displaying text with links where links apply the styling from the theme:
 *
 * @sample androidx.compose.material.samples.TextWithLinks
 * @param text The text to be displayed.
 * @param modifier [Modifier] to apply to this layout node.
 * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
 *   this will be [LocalContentColor].
 * @param fontSize The size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic). See
 *   [TextStyle.fontStyle].
 * @param fontWeight The typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily The font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing The amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].

Sources: [live-androidx-material-material-material-text-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 246–280)

 * @param textDecoration The decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign The alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow How visual overflow should be handled.
 * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param inlineContent A map store composables that replaces certain ranges of the text. It's used
 *   to insert composables into text layout. Check [InlineTextContent] for more information.
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style Style configuration for the text such as color, font, line height etc.
 */
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

Sources: [live-androidx-material-material-material-text-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 281–315)

    lineHeight: TextUnit = TextUnit.Unspecified,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    // TL:DR: profile before you change any line of code in this method
    //
    // The call to LocalContentAlpha.current looks like it can be avoided by only calling it in the
    // last else block but, in 1.5, this causes a control flow group to be created because it would
    // be a conditional call to a composable function. The call is currently made unconditionally
    // since the call to LocalContentAlpha.current does not create a group (it is a read-only
    // composable) and looking up the value in the composition locals map is currently faster than
    // creating a group to avoid it.
    //
    // Similar notes regarding lambda allocations. It appears there's a path to optimize for
    // zero-allocations in the style-provided color route, but this either introduces a group or a
    // box depending on how it's coded. It's also possible that allocating a final ColorProducer
    // subclass with no capture may be a successful optimization, but it appeared slower in initial
    // profiling.
    //
    // If changing ANY LINE OF CODE, please confirm that it's faster or the same speed using
    // profilers and benchmarks.
    val localContentColor = LocalContentColor.current
    val localContentAlpha = LocalContentAlpha.current
    val overrideColorOrUnspecified =
        if (color.isSpecified) {
            color
        } else if (style.color.isSpecified) {
            style.color
        } else {
            localContentColor.copy(localContentAlpha)

Sources: [live-androidx-material-material-material-text-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 316–350)

        }

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
        color = { overrideColorOrUnspecified },
    )
}

@Deprecated(
    "Maintained for binary compatibility. Use version with minLines instead",
    level = DeprecationLevel.HIDDEN,
)
@Composable

Sources: [live-androidx-material-material-material-text-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 351–385)

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
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    onTextLayout: (TextLayoutResult) -> Unit = {},
    style: TextStyle = LocalTextStyle.current,
) {
    Text(
        text,
        modifier,
        color,
        fontSize,
        fontStyle,
        fontWeight,
        fontFamily,
        letterSpacing,
        textDecoration,
        textAlign,
        lineHeight,
        overflow,
        softWrap,
        maxLines,
        1,

Sources: [live-androidx-material-material-material-text-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 36–70)

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
 * [LocalContentColor] will be used with an alpha of [LocalContentAlpha]- this allows this [Text] or
 * element containing this [Text] to adapt to different background colors and still maintain
 * contrast and accessibility.
 *
 * @param text The text to be displayed.
 * @param modifier [Modifier] to apply to this layout node.
 * @param color [Color] to apply to the text. If [Color.Unspecified], and [style] has no color set,
 *   this will be [LocalContentColor].
 * @param fontSize The size of glyphs to use when painting the text. See [TextStyle.fontSize].
 * @param fontStyle The typeface variant to use when drawing the letters (e.g., italic). See

Sources: [live-androidx-material-material-material-text-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 386–420)

        inlineContent,
        onTextLayout,
        style,
    )
}

/**
 * CompositionLocal containing the preferred [TextStyle] that will be used by [Text] components by
 * default. To set the value for this CompositionLocal, see [ProvideTextStyle] which will merge any
 * missing [TextStyle] properties with the existing [TextStyle] set in this CompositionLocal.
 *
 * @see ProvideTextStyle
 */
public val LocalTextStyle: androidx.compose.runtime.ProvidableCompositionLocal<TextStyle> =
    compositionLocalOf(structuralEqualityPolicy()) { DefaultTextStyle }

// TODO: b/156598010 remove this and replace with fold definition on the backing CompositionLocal
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

Sources: [live-androidx-material-material-material-text-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 421–440)

    val link = range.item
    when {
        link is LinkAnnotation.Url && link.styles == null ->
            (range as Range<LinkAnnotation.Url>).copy(link.copy(styles = linkStyles))
        link is LinkAnnotation.Clickable && link.styles == null ->
            (range as Range<LinkAnnotation.Clickable>).copy(link.copy(styles = linkStyles))
        else -> range
    }
}

@Composable
private fun rememberTextLinkStyles(): TextLinkStyles {
    val primaryColor = MaterialTheme.colors.primary
    return remember(primaryColor) {
        TextLinkStyles(
            style = SpanStyle(color = primaryColor, textDecoration = TextDecoration.Underline)
        )
    }
}


Sources: [live-androidx-material-material-material-text-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)

## androidx.compose.material Text.kt source (lines 71–105)

 *   [TextStyle.fontStyle].
 * @param fontWeight The typeface thickness to use when painting the text (e.g., [FontWeight.Bold]).
 * @param fontFamily The font family to be used when rendering the text. See [TextStyle.fontFamily].
 * @param letterSpacing The amount of space to add between each letter. See
 *   [TextStyle.letterSpacing].
 * @param textDecoration The decorations to paint on the text (e.g., an underline). See
 *   [TextStyle.textDecoration].
 * @param textAlign The alignment of the text within the lines of the paragraph. See
 *   [TextStyle.textAlign].
 * @param lineHeight Line height for the [Paragraph] in [TextUnit] unit, e.g. SP or EM. See
 *   [TextStyle.lineHeight].
 * @param overflow How visual overflow should be handled.
 * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param style Style configuration for the text such as color, font, line height etc.
 */
@Composable
public fun Text(
    text: String,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified,
    fontSize: TextUnit = TextUnit.Unspecified,
    fontStyle: FontStyle? = null,
    fontWeight: FontWeight? = null,
    fontFamily: FontFamily? = null,

Sources: [live-androidx-material-material-material-text-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Text.kt)
