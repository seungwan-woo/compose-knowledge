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
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 1
    endLine: 35
    sha256: c5604e5d9395bc12859a8c1428fd1a2adc7b464a7805f78b31e2bd1f435bfdb8
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
      import androidx.compose.ui.graphics.drawscope.Fill
      import androidx.compose.ui.graphics.isSpecified
      import androidx.compose.ui.graphics.lerp
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.font.FontStyle
      import androidx.compose.ui.text.font.FontSynthesis
      import androidx.compose.ui.text.font.FontWeight
      import androidx.compose.ui.text.font.lerp
      import androidx.compose.ui.text.intl.LocaleList
      import androidx.compose.ui.text.style.BaselineShift
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 106
    endLine: 140
    sha256: 5077cb9b3fa491954663dc73029670c1e3553ac74c7e19a09232e397e6975630
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val localeList: LocaleList? = null,
          public val background: Color = Color.Unspecified,
          public val textDecoration: TextDecoration? = null,
          public val shadow: Shadow? = null,
          public val platformStyle: PlatformSpanStyle? = null,
          public val drawStyle: DrawStyle? = null,
      ) : AnnotatedString.Annotation {

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
           * @param baselineShift The amount by which the text is shifted up from the current baseline.
           * @param textGeometricTransform The geometric transformation applied the text.
           * @param localeList The locale list used to select region-specific glyphs.
           * @param background The background color for the text.
           * @param textDecoration The decorations to paint on the text (e.g., an underline).
           * @param shadow The shadow effect applied on the text.
           * @see AnnotatedString
           * @see TextStyle
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 141
    endLine: 175
    sha256: 7884675e14cca9387272863c9ea7fc6eb2c69d203bdfb270ec88ed7a4a3894c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              textForegroundStyle = TextForegroundStyle.from(color),
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 176
    endLine: 210
    sha256: df824c0c73f789ca033151d4dc22c35ebd8846c6bac6b07457dadaea070bc814
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = null,
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
           * @param textGeometricTransform The geometric transformation applied the text.
           * @param localeList The locale list used to select region-specific glyphs.
           * @param background The background color for the text.
           * @param textDecoration The decorations to paint on the text (e.g., an underline).
           * @param shadow The shadow effect applied on the text.
           * @param platformStyle Platform specific [SpanStyle] parameters.
           * @see AnnotatedString
           * @see TextStyle
           * @see ParagraphStyle
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 211
    endLine: 245
    sha256: f6430d651614349be380a9039db7128700bb192073d24fe900a362dc45ad9bcd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              textForegroundStyle = TextForegroundStyle.from(color),
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 246
    endLine: 280
    sha256: 176a9da4fcfb75ee4af3f2083fc1b807857a4e916f08d0b5e334e86accd0c045
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = platformStyle,
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 281
    endLine: 315
    sha256: 63cc75c71ccefa430d3381921c94e8b86beb20a3fa22c5e3d8d1efffd0fc6fbe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          ) : this(
              textForegroundStyle = TextForegroundStyle.from(color),
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 316
    endLine: 350
    sha256: 9d8d93831dbcb078ef765bf77651bbca033fa3176366905a320c99de959bb8a2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = platformStyle,
              drawStyle = drawStyle,
          )

          /**
           * Styling configuration for text spans.
           *
           * Configures character-level styles such as text brush, opacity, font size, font family,
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 351
    endLine: 385
    sha256: b20425743248b38acacf0dcae7579d6c9a21ace4a00793a8296aed8e2debc0b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          ) : this(
              textForegroundStyle = TextForegroundStyle.from(brush, alpha),
              fontSize = fontSize,
              fontWeight = fontWeight,
              fontStyle = fontStyle,
              fontSynthesis = fontSynthesis,
              fontFamily = fontFamily,
              fontFeatureSettings = fontFeatureSettings,
              letterSpacing = letterSpacing,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 36
    endLine: 70
    sha256: 5ea175ca3f22cb4e2946f077b05f8a2a61a2ab42a87f1e62792b7fa4a92e0b10
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.text.style.TextDecoration
      import androidx.compose.ui.text.style.TextForegroundStyle
      import androidx.compose.ui.text.style.TextGeometricTransform
      import androidx.compose.ui.text.style.lerp
      import androidx.compose.ui.text.style.takeOrElse
      import androidx.compose.ui.unit.TextUnit
      import androidx.compose.ui.unit.isSpecified
      import androidx.compose.ui.unit.isUnspecified
      import androidx.compose.ui.unit.lerp
      import androidx.compose.ui.unit.sp

      /** The default font size if none is specified. */
      private val DefaultFontSize = 14.sp
      private val DefaultLetterSpacing = 0.sp
      private val DefaultBackgroundColor = Color.Transparent
      // TODO(nona): Introduce TextUnit.Original for representing "do not change the original result".
      //  Need to distinguish from Inherit.
      private val DefaultColor = Color.Black
      private val DefaultColorForegroundStyle = TextForegroundStyle.from(DefaultColor)

      /**
       * Styling configuration that applies at the character level.
       *
       * Use [SpanStyle] to configure character-level styles such as text color, font size, font family,
       * background color, and text decorations.
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 386
    endLine: 420
    sha256: 2c899fb4914c5f5a6732a227bc1306703774dff8a14b263a948befa5c4c33be0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              baselineShift = baselineShift,
              textGeometricTransform = textGeometricTransform,
              localeList = localeList,
              background = background,
              textDecoration = textDecoration,
              shadow = shadow,
              platformStyle = platformStyle,
              drawStyle = drawStyle,
          )

          /** Color to draw text. */
          public val color: Color
              get() = this.textForegroundStyle.color

          /** Brush to draw text. If not null, overrides [color]. */
          public val brush: Brush?
              get() = this.textForegroundStyle.brush

          /**
           * Opacity of text. This value is either provided along side Brush, or via alpha channel in
           * color.
           */
          public val alpha: Float
              get() = this.textForegroundStyle.alpha

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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 421
    endLine: 455
    sha256: 3f13c19c8564b960238b296b392eaaa12e95db479e719bb0c0faef4a925167d2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Stable
          public fun merge(other: SpanStyle? = null): SpanStyle {
              if (other == null) return this
              return fastMerge(
                  color = other.textForegroundStyle.color,
                  brush = other.textForegroundStyle.brush,
                  alpha = other.textForegroundStyle.alpha,
                  fontSize = other.fontSize,
                  fontWeight = other.fontWeight,
                  fontStyle = other.fontStyle,
                  fontSynthesis = other.fontSynthesis,
                  fontFamily = other.fontFamily,
                  fontFeatureSettings = other.fontFeatureSettings,
                  letterSpacing = other.letterSpacing,
                  baselineShift = other.baselineShift,
                  textGeometricTransform = other.textGeometricTransform,
                  localeList = other.localeList,
                  background = other.background,
                  textDecoration = other.textDecoration,
                  shadow = other.shadow,
                  platformStyle = other.platformStyle,
                  drawStyle = other.drawStyle,
              )
          }

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: SpanStyle): SpanStyle = this.merge(other)

          @Deprecated(
              "SpanStyle copy constructors that do not take new stable parameters " +
                  "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 456
    endLine: 490
    sha256: 6f9242e90ae92376a56bd652a0baac1d17b90472e052917bb4a477eba136c140
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          ): SpanStyle {
              return SpanStyle(
                  textForegroundStyle =
                      if (color == this.color) {
                          textForegroundStyle
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 491
    endLine: 525
    sha256: 393acfb39b425f304f56d44330049270fb93bef497a02d80f563e2f0bff95c50
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  shadow = shadow,
                  platformStyle = this.platformStyle,
                  drawStyle = this.drawStyle,
              )
          }

          @Deprecated(
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
              return SpanStyle(
                  textForegroundStyle =
                      if (color == this.color) {
                          textForegroundStyle
                      } else {
                          TextForegroundStyle.from(color)
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 526
    endLine: 560
    sha256: 59d4c2bb734dfca20687b5d3072601782db98f76134e524dcfe4cfc2c4f0f3a3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  platformStyle = platformStyle,
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 561
    endLine: 595
    sha256: afcb5f53bce1991f5d4190ed2eeae069d7152a2e94e2dc6e3b86b42520253a27
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): SpanStyle {
              return SpanStyle(
                  textForegroundStyle =
                      if (color == this.color) {
                          textForegroundStyle
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
                  platformStyle = platformStyle,
                  drawStyle = drawStyle,
              )
          }

          public fun copy(
              brush: Brush?,
              alpha: Float = this.alpha,
              fontSize: TextUnit = this.fontSize,
              fontWeight: FontWeight? = this.fontWeight,
              fontStyle: FontStyle? = this.fontStyle,
              fontSynthesis: FontSynthesis? = this.fontSynthesis,
              fontFamily: FontFamily? = this.fontFamily,
              fontFeatureSettings: String? = this.fontFeatureSettings,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 596
    endLine: 630
    sha256: 42501e9cc8174221b920dfd565e7b53fa3c2ba96ea5736c72fc47105605c5ef8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              return SpanStyle(
                  textForegroundStyle = TextForegroundStyle.from(brush, alpha),
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
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 631
    endLine: 665
    sha256: b7dd56da3faed78af3136657afdaee3ec28305547e9154bfb66e49309132ae0e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          internal fun hasSameLayoutAffectingAttributes(other: SpanStyle): Boolean {
              if (this === other) return true
              if (fontSize != other.fontSize) return false
              if (fontWeight != other.fontWeight) return false
              if (fontStyle != other.fontStyle) return false
              if (fontSynthesis != other.fontSynthesis) return false
              if (fontFamily != other.fontFamily) return false
              if (fontFeatureSettings != other.fontFeatureSettings) return false
              if (letterSpacing != other.letterSpacing) return false
              if (baselineShift != other.baselineShift) return false
              if (textGeometricTransform != other.textGeometricTransform) return false
              if (localeList != other.localeList) return false
              if (background != other.background) return false
              if (platformStyle != other.platformStyle) return false
              return true
          }

          internal fun hasSameNonLayoutAttributes(other: SpanStyle): Boolean {
              if (textForegroundStyle != other.textForegroundStyle) return false
              if (textDecoration != other.textDecoration) return false
              if (shadow != other.shadow) return false
              if (drawStyle != other.drawStyle) return false
              return true
          }

          public override fun hashCode(): Int {
              var result = color.hashCode()
              result = 31 * result + brush.hashCode()
              result = 31 * result + alpha.hashCode()
              result = 31 * result + fontSize.hashCode()
              result = 31 * result + (fontWeight?.hashCode() ?: 0)
              result = 31 * result + (fontStyle?.hashCode() ?: 0)
              result = 31 * result + (fontSynthesis?.hashCode() ?: 0)
              result = 31 * result + (fontFamily?.hashCode() ?: 0)
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 666
    endLine: 700
    sha256: c598caa3cabc98a8b063c6b833ab416c1d675db885d23457131b14090f2117a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + (fontFeatureSettings?.hashCode() ?: 0)
              result = 31 * result + letterSpacing.hashCode()
              result = 31 * result + (baselineShift?.hashCode() ?: 0)
              result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
              result = 31 * result + (localeList?.hashCode() ?: 0)
              result = 31 * result + background.hashCode()
              result = 31 * result + (textDecoration?.hashCode() ?: 0)
              result = 31 * result + (shadow?.hashCode() ?: 0)
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
              result = 31 * result + (drawStyle?.hashCode() ?: 0)
              return result
          }

          internal fun hashCodeLayoutAffectingAttributes(): Int {
              var result = fontSize.hashCode()
              result = 31 * result + (fontWeight?.hashCode() ?: 0)
              result = 31 * result + (fontStyle?.hashCode() ?: 0)
              result = 31 * result + (fontSynthesis?.hashCode() ?: 0)
              result = 31 * result + (fontFamily?.hashCode() ?: 0)
              result = 31 * result + (fontFeatureSettings?.hashCode() ?: 0)
              result = 31 * result + letterSpacing.hashCode()
              result = 31 * result + (baselineShift?.hashCode() ?: 0)
              result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
              result = 31 * result + (localeList?.hashCode() ?: 0)
              result = 31 * result + background.hashCode()
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
              return result
          }

          public override fun toString(): String {
              return "SpanStyle(" +
                  "color=$color, " +
                  "brush=$brush, " +
                  "alpha=$alpha, " +
                  "fontSize=$fontSize, " +
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 701
    endLine: 735
    sha256: eba91b61b4c497200f3fe297baad6de76d2c2d77528ec86f08858e727cf939ee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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

      /**
       * @param a An sp value. Maybe [TextUnit.Unspecified]
       * @param b An sp value. Maybe [TextUnit.Unspecified]
       */
      internal fun lerpTextUnitInheritable(a: TextUnit, b: TextUnit, t: Float): TextUnit {
          if (a.isUnspecified || b.isUnspecified) return lerpDiscrete(a, b, t)
          return lerp(a, b, t)
      }

      /**
       * Lerp between two values that cannot be transitioned. Returns [a] if [fraction] is smaller than
       * 0.5 otherwise [b].
       */
      internal fun <T> lerpDiscrete(a: T, b: T, fraction: Float): T = if (fraction < 0.5) a else b

      /**
       * Interpolate between two span styles.
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 71
    endLine: 105
    sha256: a9f363cb8d75d40241a53182d70b6d51fb1c02f318a3bd18d094152080f75b70
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Immutable
      public class SpanStyle
      /**
       * @param textForegroundStyle style to apply to the text
       * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
       *   style.
       * @param fontWeight typeface thickness (e.g., bold)
       * @param fontStyle typeface variant (e.g., italic)
       * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style is
       *   missing in [fontFamily]
       * @param fontFamily font family for rendering
       * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
       * @param letterSpacing amount of space (in SP or EM) to add between letters. If
       *   [TextUnit.Unspecified], inherits from parent.
       * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or subscript)
       * @param textGeometricTransform geometric transformation to apply
       * @param localeList locale list for region-specific glyphs
       * @param background color of background rectangle covering entire line height from start to end
       * @param textDecoration decorations (e.g., underline)
       * @param shadow shadow effect
       * @param platformStyle platform-specific parameters
       * @param drawStyle drawing style (fill or stroke)
       */
      internal constructor(
          // The fill to draw text, a unified representation of Color and Brush.
          internal val textForegroundStyle: TextForegroundStyle,
          public val fontSize: TextUnit = TextUnit.Unspecified,
          public val fontWeight: FontWeight? = null,
          public val fontStyle: FontStyle? = null,
          public val fontSynthesis: FontSynthesis? = null,
          public val fontFamily: FontFamily? = null,
          public val fontFeatureSettings: String? = null,
          public val letterSpacing: TextUnit = TextUnit.Unspecified,
          public val baselineShift: BaselineShift? = null,
          public val textGeometricTransform: TextGeometricTransform? = null,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 736
    endLine: 770
    sha256: 68d47078bcb150dcc632aa89bd32c7ec5353df0b0e5b5f8269610a7103857564
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          return SpanStyle(
              textForegroundStyle = lerp(start.textForegroundStyle, stop.textForegroundStyle, fraction),
              fontFamily = lerpDiscrete(start.fontFamily, stop.fontFamily, fraction),
              fontSize = lerpTextUnitInheritable(start.fontSize, stop.fontSize, fraction),
              fontWeight =
                  lerp(
                      start.fontWeight ?: FontWeight.Normal,
                      stop.fontWeight ?: FontWeight.Normal,
                      fraction,
                  ),
              fontStyle = lerpDiscrete(start.fontStyle, stop.fontStyle, fraction),
              fontSynthesis = lerpDiscrete(start.fontSynthesis, stop.fontSynthesis, fraction),
              fontFeatureSettings =
                  lerpDiscrete(start.fontFeatureSettings, stop.fontFeatureSettings, fraction),
              letterSpacing = lerpTextUnitInheritable(start.letterSpacing, stop.letterSpacing, fraction),
              baselineShift =
                  lerp(
                      start.baselineShift ?: BaselineShift(0f),
                      stop.baselineShift ?: BaselineShift(0f),
                      fraction,
                  ),
              textGeometricTransform =
                  lerp(
                      start.textGeometricTransform ?: TextGeometricTransform.None,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 771
    endLine: 805
    sha256: 35889be56f21347aedab31c6f1655cb87246f239f8f86264d8389bd947559ded
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      stop.textGeometricTransform ?: TextGeometricTransform.None,
                      fraction,
                  ),
              localeList = lerpDiscrete(start.localeList, stop.localeList, fraction),
              background = lerp(start.background, stop.background, fraction),
              textDecoration = lerpDiscrete(start.textDecoration, stop.textDecoration, fraction),
              shadow = nullSafeLerp(start.shadow, stop.shadow, fraction),
              platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
              drawStyle = lerpDiscrete(start.drawStyle, stop.drawStyle, fraction),
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

      /** Returns a copy of this [Shadow] with its alpha component set to 0f. */
      private fun Shadow.dropAlpha(): Shadow = copy(color = color.copy(alpha = 0f))

      private fun lerpPlatformStyle(
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 806
    endLine: 840
    sha256: 12164c13b5e77dd2944b84c18eca487245a34e2c917ab05866c3853f5e2fae8b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          start: PlatformSpanStyle?,
          stop: PlatformSpanStyle?,
          fraction: Float,
      ): PlatformSpanStyle? {
          if (start == null && stop == null) return null
          val startNonNull = start ?: PlatformSpanStyle.Default
          val stopNonNull = stop ?: PlatformSpanStyle.Default
          return lerp(startNonNull, stopNonNull, fraction)
      }

      internal fun resolveSpanStyleDefaults(style: SpanStyle) =
          SpanStyle(
              textForegroundStyle = style.textForegroundStyle.takeOrElse { DefaultColorForegroundStyle },
              fontSize = if (style.fontSize.isUnspecified) DefaultFontSize else style.fontSize,
              fontWeight = style.fontWeight ?: FontWeight.Normal,
              fontStyle = style.fontStyle ?: FontStyle.Normal,
              fontSynthesis = style.fontSynthesis ?: FontSynthesis.All,
              fontFamily = style.fontFamily ?: FontFamily.Default,
              fontFeatureSettings = style.fontFeatureSettings ?: "",
              letterSpacing =
                  if (style.letterSpacing.isUnspecified) {
                      DefaultLetterSpacing
                  } else {
                      style.letterSpacing
                  },
              baselineShift =
                  (style.baselineShift ?: BaselineShift.None).takeOrElse { BaselineShift.None },
              textGeometricTransform = style.textGeometricTransform ?: TextGeometricTransform.None,
              localeList = style.localeList,
              background = style.background.takeOrElse { DefaultBackgroundColor },
              textDecoration = style.textDecoration ?: TextDecoration.None,
              shadow = style.shadow ?: Shadow.None,
              platformStyle = style.platformStyle,
              drawStyle = style.drawStyle ?: Fill,
          )
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 841
    endLine: 875
    sha256: 8fc72872b6dcff6fb5235a8303e68ecf1b183b17b8917f6b412a5e4ded990c89
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      internal fun SpanStyle.fastMerge(
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
          // prioritize the parameters to Text in diffs here
          /**
           * color: Color fontSize: TextUnit fontStyle: FontStyle? fontWeight: FontWeight? fontFamily:
           * FontFamily? letterSpacing: TextUnit textDecoration: TextDecoration? textAlign: TextAlign?
           * lineHeight: TextUnit
           */

          // any new vals should do a pre-merge check here
          val requiresAlloc =
              fontSize.isSpecified && fontSize != this.fontSize ||
                  brush == null && color.isSpecified && color != textForegroundStyle.color ||
                  fontStyle != null && fontStyle != this.fontStyle ||
                  fontWeight != null && fontWeight != this.fontWeight ||
                  // ref check for font-family, since we don't want to compare lists in fast path
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 876
    endLine: 910
    sha256: 5d118adbc8031ef7872d667731325120cfee70737037b087bf99b2b6234a001f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  fontFamily != null && fontFamily !== this.fontFamily ||
                  letterSpacing.isSpecified && letterSpacing != this.letterSpacing ||
                  textDecoration != null && textDecoration != this.textDecoration ||
                  // then compare the remaining params, for potential non-Text merges
                  brush != textForegroundStyle.brush ||
                  brush != null && alpha != this.textForegroundStyle.alpha ||
                  fontSynthesis != null && fontSynthesis != this.fontSynthesis ||
                  fontFeatureSettings != null && fontFeatureSettings != this.fontFeatureSettings ||
                  baselineShift != null && baselineShift != this.baselineShift ||
                  textGeometricTransform != null &&
                      textGeometricTransform != this.textGeometricTransform ||
                  localeList != null && localeList != this.localeList ||
                  background.isSpecified && background != this.background ||
                  shadow != null && shadow != this.shadow ||
                  platformStyle != null && platformStyle != this.platformStyle ||
                  drawStyle != null && drawStyle != this.drawStyle

          if (!requiresAlloc) {
              // we're done
              return this
          }

          val otherTextForegroundStyle =
              if (brush != null) {
                  TextForegroundStyle.from(brush, alpha)
              } else {
                  TextForegroundStyle.from(color)
              }

          return SpanStyle(
              textForegroundStyle = textForegroundStyle.merge(otherTextForegroundStyle),
              fontFamily = fontFamily ?: this.fontFamily,
              fontSize = if (!fontSize.isUnspecified) fontSize else this.fontSize,
              fontWeight = fontWeight ?: this.fontWeight,
              fontStyle = fontStyle ?: this.fontStyle,
  - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt
    startLine: 911
    endLine: 935
    sha256: f70b6533c6be643385912e28c7107abf64103024b3cc1b1839de48ac7d4cfde1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              fontSynthesis = fontSynthesis ?: this.fontSynthesis,
              fontFeatureSettings = fontFeatureSettings ?: this.fontFeatureSettings,
              letterSpacing =
                  if (!letterSpacing.isUnspecified) {
                      letterSpacing
                  } else {
                      this.letterSpacing
                  },
              baselineShift = baselineShift ?: this.baselineShift,
              textGeometricTransform = textGeometricTransform ?: this.textGeometricTransform,
              localeList = localeList ?: this.localeList,
              background = background.takeOrElse { this.background },
              textDecoration = textDecoration ?: this.textDecoration,
              shadow = shadow ?: this.shadow,
              platformStyle = mergePlatformStyle(platformStyle),
              drawStyle = drawStyle ?: this.drawStyle,
          )
      }

      private fun SpanStyle.mergePlatformStyle(other: PlatformSpanStyle?): PlatformSpanStyle? {
          if (platformStyle == null) return other
          if (other == null) return platformStyle
          return platformStyle.merge(other)
      }
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
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-106
      title: androidx.compose.ui.text SpanStyle.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-141
      title: androidx.compose.ui.text SpanStyle.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-176
      title: androidx.compose.ui.text SpanStyle.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source
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
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-246
      title: androidx.compose.ui.text SpanStyle.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-281
      title: androidx.compose.ui.text SpanStyle.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-316
      title: androidx.compose.ui.text SpanStyle.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-351
      title: androidx.compose.ui.text SpanStyle.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-36
      title: androidx.compose.ui.text SpanStyle.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-386
      title: androidx.compose.ui.text SpanStyle.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-421
      title: androidx.compose.ui.text SpanStyle.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-456
      title: androidx.compose.ui.text SpanStyle.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-491
      title: androidx.compose.ui.text SpanStyle.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-526
      title: androidx.compose.ui.text SpanStyle.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-561
      title: androidx.compose.ui.text SpanStyle.kt source (lines 561–595)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-561-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-596
      title: androidx.compose.ui.text SpanStyle.kt source (lines 596–630)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-596-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-631
      title: androidx.compose.ui.text SpanStyle.kt source (lines 631–665)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-631-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-666
      title: androidx.compose.ui.text SpanStyle.kt source (lines 666–700)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-666-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-701
      title: androidx.compose.ui.text SpanStyle.kt source (lines 701–735)
      aliases:
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-701-source
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
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-736
      title: androidx.compose.ui.text SpanStyle.kt source (lines 736–770)
      aliases:
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-736-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-771
      title: androidx.compose.ui.text SpanStyle.kt source (lines 771–805)
      aliases:
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-771-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-806
      title: androidx.compose.ui.text SpanStyle.kt source (lines 806–840)
      aliases:
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-806-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-841
      title: androidx.compose.ui.text SpanStyle.kt source (lines 841–875)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-841-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-876
      title: androidx.compose.ui.text SpanStyle.kt source (lines 876–910)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-876-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-spanstyle-lines-911
      title: androidx.compose.ui.text SpanStyle.kt source (lines 911–935)
      aliases:
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-spanstyle-lines-911-source
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
import androidx.compose.ui.graphics.drawscope.DrawStyle
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.isSpecified
import androidx.compose.ui.graphics.lerp
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontSynthesis
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.font.lerp
import androidx.compose.ui.text.intl.LocaleList
import androidx.compose.ui.text.style.BaselineShift

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 106–140)

    public val localeList: LocaleList? = null,
    public val background: Color = Color.Unspecified,
    public val textDecoration: TextDecoration? = null,
    public val shadow: Shadow? = null,
    public val platformStyle: PlatformSpanStyle? = null,
    public val drawStyle: DrawStyle? = null,
) : AnnotatedString.Annotation {

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
     * @param baselineShift The amount by which the text is shifted up from the current baseline.
     * @param textGeometricTransform The geometric transformation applied the text.
     * @param localeList The locale list used to select region-specific glyphs.
     * @param background The background color for the text.
     * @param textDecoration The decorations to paint on the text (e.g., an underline).
     * @param shadow The shadow effect applied on the text.
     * @see AnnotatedString
     * @see TextStyle

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 141–175)

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
        textForegroundStyle = TextForegroundStyle.from(color),
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 176–210)

        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = null,
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
     * @param textGeometricTransform The geometric transformation applied the text.
     * @param localeList The locale list used to select region-specific glyphs.
     * @param background The background color for the text.
     * @param textDecoration The decorations to paint on the text (e.g., an underline).
     * @param shadow The shadow effect applied on the text.
     * @param platformStyle Platform specific [SpanStyle] parameters.
     * @see AnnotatedString
     * @see TextStyle
     * @see ParagraphStyle

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 211–245)

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
        textForegroundStyle = TextForegroundStyle.from(color),
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 246–280)

        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = platformStyle,
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 281–315)

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
    ) : this(
        textForegroundStyle = TextForegroundStyle.from(color),
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 316–350)

        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = platformStyle,
        drawStyle = drawStyle,
    )

    /**
     * Styling configuration for text spans.
     *
     * Configures character-level styles such as text brush, opacity, font size, font family,
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 351–385)

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
    ) : this(
        textForegroundStyle = TextForegroundStyle.from(brush, alpha),
        fontSize = fontSize,
        fontWeight = fontWeight,
        fontStyle = fontStyle,
        fontSynthesis = fontSynthesis,
        fontFamily = fontFamily,
        fontFeatureSettings = fontFeatureSettings,
        letterSpacing = letterSpacing,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 36–70)

import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.style.TextForegroundStyle
import androidx.compose.ui.text.style.TextGeometricTransform
import androidx.compose.ui.text.style.lerp
import androidx.compose.ui.text.style.takeOrElse
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.isSpecified
import androidx.compose.ui.unit.isUnspecified
import androidx.compose.ui.unit.lerp
import androidx.compose.ui.unit.sp

/** The default font size if none is specified. */
private val DefaultFontSize = 14.sp
private val DefaultLetterSpacing = 0.sp
private val DefaultBackgroundColor = Color.Transparent
// TODO(nona): Introduce TextUnit.Original for representing "do not change the original result".
//  Need to distinguish from Inherit.
private val DefaultColor = Color.Black
private val DefaultColorForegroundStyle = TextForegroundStyle.from(DefaultColor)

/**
 * Styling configuration that applies at the character level.
 *
 * Use [SpanStyle] to configure character-level styles such as text color, font size, font family,
 * background color, and text decorations.
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 386–420)

        baselineShift = baselineShift,
        textGeometricTransform = textGeometricTransform,
        localeList = localeList,
        background = background,
        textDecoration = textDecoration,
        shadow = shadow,
        platformStyle = platformStyle,
        drawStyle = drawStyle,
    )

    /** Color to draw text. */
    public val color: Color
        get() = this.textForegroundStyle.color

    /** Brush to draw text. If not null, overrides [color]. */
    public val brush: Brush?
        get() = this.textForegroundStyle.brush

    /**
     * Opacity of text. This value is either provided along side Brush, or via alpha channel in
     * color.
     */
    public val alpha: Float
        get() = this.textForegroundStyle.alpha

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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 421–455)

     */
    @Stable
    public fun merge(other: SpanStyle? = null): SpanStyle {
        if (other == null) return this
        return fastMerge(
            color = other.textForegroundStyle.color,
            brush = other.textForegroundStyle.brush,
            alpha = other.textForegroundStyle.alpha,
            fontSize = other.fontSize,
            fontWeight = other.fontWeight,
            fontStyle = other.fontStyle,
            fontSynthesis = other.fontSynthesis,
            fontFamily = other.fontFamily,
            fontFeatureSettings = other.fontFeatureSettings,
            letterSpacing = other.letterSpacing,
            baselineShift = other.baselineShift,
            textGeometricTransform = other.textGeometricTransform,
            localeList = other.localeList,
            background = other.background,
            textDecoration = other.textDecoration,
            shadow = other.shadow,
            platformStyle = other.platformStyle,
            drawStyle = other.drawStyle,
        )
    }

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: SpanStyle): SpanStyle = this.merge(other)

    @Deprecated(
        "SpanStyle copy constructors that do not take new stable parameters " +
            "like PlatformStyle, DrawStyle are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 456–490)

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
    ): SpanStyle {
        return SpanStyle(
            textForegroundStyle =
                if (color == this.color) {
                    textForegroundStyle
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 491–525)

            shadow = shadow,
            platformStyle = this.platformStyle,
            drawStyle = this.drawStyle,
        )
    }

    @Deprecated(
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
        return SpanStyle(
            textForegroundStyle =
                if (color == this.color) {
                    textForegroundStyle
                } else {
                    TextForegroundStyle.from(color)

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 526–560)

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
            platformStyle = platformStyle,
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 561–595)

    ): SpanStyle {
        return SpanStyle(
            textForegroundStyle =
                if (color == this.color) {
                    textForegroundStyle
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
            platformStyle = platformStyle,
            drawStyle = drawStyle,
        )
    }

    public fun copy(
        brush: Brush?,
        alpha: Float = this.alpha,
        fontSize: TextUnit = this.fontSize,
        fontWeight: FontWeight? = this.fontWeight,
        fontStyle: FontStyle? = this.fontStyle,
        fontSynthesis: FontSynthesis? = this.fontSynthesis,
        fontFamily: FontFamily? = this.fontFamily,
        fontFeatureSettings: String? = this.fontFeatureSettings,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 596–630)

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
        return SpanStyle(
            textForegroundStyle = TextForegroundStyle.from(brush, alpha),
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

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 631–665)


    internal fun hasSameLayoutAffectingAttributes(other: SpanStyle): Boolean {
        if (this === other) return true
        if (fontSize != other.fontSize) return false
        if (fontWeight != other.fontWeight) return false
        if (fontStyle != other.fontStyle) return false
        if (fontSynthesis != other.fontSynthesis) return false
        if (fontFamily != other.fontFamily) return false
        if (fontFeatureSettings != other.fontFeatureSettings) return false
        if (letterSpacing != other.letterSpacing) return false
        if (baselineShift != other.baselineShift) return false
        if (textGeometricTransform != other.textGeometricTransform) return false
        if (localeList != other.localeList) return false
        if (background != other.background) return false
        if (platformStyle != other.platformStyle) return false
        return true
    }

    internal fun hasSameNonLayoutAttributes(other: SpanStyle): Boolean {
        if (textForegroundStyle != other.textForegroundStyle) return false
        if (textDecoration != other.textDecoration) return false
        if (shadow != other.shadow) return false
        if (drawStyle != other.drawStyle) return false
        return true
    }

    public override fun hashCode(): Int {
        var result = color.hashCode()
        result = 31 * result + brush.hashCode()
        result = 31 * result + alpha.hashCode()
        result = 31 * result + fontSize.hashCode()
        result = 31 * result + (fontWeight?.hashCode() ?: 0)
        result = 31 * result + (fontStyle?.hashCode() ?: 0)
        result = 31 * result + (fontSynthesis?.hashCode() ?: 0)
        result = 31 * result + (fontFamily?.hashCode() ?: 0)

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 666–700)

        result = 31 * result + (fontFeatureSettings?.hashCode() ?: 0)
        result = 31 * result + letterSpacing.hashCode()
        result = 31 * result + (baselineShift?.hashCode() ?: 0)
        result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
        result = 31 * result + (localeList?.hashCode() ?: 0)
        result = 31 * result + background.hashCode()
        result = 31 * result + (textDecoration?.hashCode() ?: 0)
        result = 31 * result + (shadow?.hashCode() ?: 0)
        result = 31 * result + (platformStyle?.hashCode() ?: 0)
        result = 31 * result + (drawStyle?.hashCode() ?: 0)
        return result
    }

    internal fun hashCodeLayoutAffectingAttributes(): Int {
        var result = fontSize.hashCode()
        result = 31 * result + (fontWeight?.hashCode() ?: 0)
        result = 31 * result + (fontStyle?.hashCode() ?: 0)
        result = 31 * result + (fontSynthesis?.hashCode() ?: 0)
        result = 31 * result + (fontFamily?.hashCode() ?: 0)
        result = 31 * result + (fontFeatureSettings?.hashCode() ?: 0)
        result = 31 * result + letterSpacing.hashCode()
        result = 31 * result + (baselineShift?.hashCode() ?: 0)
        result = 31 * result + (textGeometricTransform?.hashCode() ?: 0)
        result = 31 * result + (localeList?.hashCode() ?: 0)
        result = 31 * result + background.hashCode()
        result = 31 * result + (platformStyle?.hashCode() ?: 0)
        return result
    }

    public override fun toString(): String {
        return "SpanStyle(" +
            "color=$color, " +
            "brush=$brush, " +
            "alpha=$alpha, " +
            "fontSize=$fontSize, " +

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 701–735)

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

/**
 * @param a An sp value. Maybe [TextUnit.Unspecified]
 * @param b An sp value. Maybe [TextUnit.Unspecified]
 */
internal fun lerpTextUnitInheritable(a: TextUnit, b: TextUnit, t: Float): TextUnit {
    if (a.isUnspecified || b.isUnspecified) return lerpDiscrete(a, b, t)
    return lerp(a, b, t)
}

/**
 * Lerp between two values that cannot be transitioned. Returns [a] if [fraction] is smaller than
 * 0.5 otherwise [b].
 */
internal fun <T> lerpDiscrete(a: T, b: T, fraction: Float): T = if (fraction < 0.5) a else b

/**
 * Interpolate between two span styles.

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 71–105)

@Immutable
public class SpanStyle
/**
 * @param textForegroundStyle style to apply to the text
 * @param fontSize glyph size. If [TextUnit.Unspecified], inherits size from parent or default
 *   style.
 * @param fontWeight typeface thickness (e.g., bold)
 * @param fontStyle typeface variant (e.g., italic)
 * @param fontSynthesis font synthesis rules to fallback to bold/italic if the requested style is
 *   missing in [fontFamily]
 * @param fontFamily font family for rendering
 * @param fontFeatureSettings advanced font features in CSS format (e.g., "smcp" for small caps)
 * @param letterSpacing amount of space (in SP or EM) to add between letters. If
 *   [TextUnit.Unspecified], inherits from parent.
 * @param baselineShift vertical shift amount from the baseline (e.g., for superscript or subscript)
 * @param textGeometricTransform geometric transformation to apply
 * @param localeList locale list for region-specific glyphs
 * @param background color of background rectangle covering entire line height from start to end
 * @param textDecoration decorations (e.g., underline)
 * @param shadow shadow effect
 * @param platformStyle platform-specific parameters
 * @param drawStyle drawing style (fill or stroke)
 */
internal constructor(
    // The fill to draw text, a unified representation of Color and Brush.
    internal val textForegroundStyle: TextForegroundStyle,
    public val fontSize: TextUnit = TextUnit.Unspecified,
    public val fontWeight: FontWeight? = null,
    public val fontStyle: FontStyle? = null,
    public val fontSynthesis: FontSynthesis? = null,
    public val fontFamily: FontFamily? = null,
    public val fontFeatureSettings: String? = null,
    public val letterSpacing: TextUnit = TextUnit.Unspecified,
    public val baselineShift: BaselineShift? = null,
    public val textGeometricTransform: TextGeometricTransform? = null,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 736–770)

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
    return SpanStyle(
        textForegroundStyle = lerp(start.textForegroundStyle, stop.textForegroundStyle, fraction),
        fontFamily = lerpDiscrete(start.fontFamily, stop.fontFamily, fraction),
        fontSize = lerpTextUnitInheritable(start.fontSize, stop.fontSize, fraction),
        fontWeight =
            lerp(
                start.fontWeight ?: FontWeight.Normal,
                stop.fontWeight ?: FontWeight.Normal,
                fraction,
            ),
        fontStyle = lerpDiscrete(start.fontStyle, stop.fontStyle, fraction),
        fontSynthesis = lerpDiscrete(start.fontSynthesis, stop.fontSynthesis, fraction),
        fontFeatureSettings =
            lerpDiscrete(start.fontFeatureSettings, stop.fontFeatureSettings, fraction),
        letterSpacing = lerpTextUnitInheritable(start.letterSpacing, stop.letterSpacing, fraction),
        baselineShift =
            lerp(
                start.baselineShift ?: BaselineShift(0f),
                stop.baselineShift ?: BaselineShift(0f),
                fraction,
            ),
        textGeometricTransform =
            lerp(
                start.textGeometricTransform ?: TextGeometricTransform.None,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 771–805)

                stop.textGeometricTransform ?: TextGeometricTransform.None,
                fraction,
            ),
        localeList = lerpDiscrete(start.localeList, stop.localeList, fraction),
        background = lerp(start.background, stop.background, fraction),
        textDecoration = lerpDiscrete(start.textDecoration, stop.textDecoration, fraction),
        shadow = nullSafeLerp(start.shadow, stop.shadow, fraction),
        platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
        drawStyle = lerpDiscrete(start.drawStyle, stop.drawStyle, fraction),
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

/** Returns a copy of this [Shadow] with its alpha component set to 0f. */
private fun Shadow.dropAlpha(): Shadow = copy(color = color.copy(alpha = 0f))

private fun lerpPlatformStyle(

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 806–840)

    start: PlatformSpanStyle?,
    stop: PlatformSpanStyle?,
    fraction: Float,
): PlatformSpanStyle? {
    if (start == null && stop == null) return null
    val startNonNull = start ?: PlatformSpanStyle.Default
    val stopNonNull = stop ?: PlatformSpanStyle.Default
    return lerp(startNonNull, stopNonNull, fraction)
}

internal fun resolveSpanStyleDefaults(style: SpanStyle) =
    SpanStyle(
        textForegroundStyle = style.textForegroundStyle.takeOrElse { DefaultColorForegroundStyle },
        fontSize = if (style.fontSize.isUnspecified) DefaultFontSize else style.fontSize,
        fontWeight = style.fontWeight ?: FontWeight.Normal,
        fontStyle = style.fontStyle ?: FontStyle.Normal,
        fontSynthesis = style.fontSynthesis ?: FontSynthesis.All,
        fontFamily = style.fontFamily ?: FontFamily.Default,
        fontFeatureSettings = style.fontFeatureSettings ?: "",
        letterSpacing =
            if (style.letterSpacing.isUnspecified) {
                DefaultLetterSpacing
            } else {
                style.letterSpacing
            },
        baselineShift =
            (style.baselineShift ?: BaselineShift.None).takeOrElse { BaselineShift.None },
        textGeometricTransform = style.textGeometricTransform ?: TextGeometricTransform.None,
        localeList = style.localeList,
        background = style.background.takeOrElse { DefaultBackgroundColor },
        textDecoration = style.textDecoration ?: TextDecoration.None,
        shadow = style.shadow ?: Shadow.None,
        platformStyle = style.platformStyle,
        drawStyle = style.drawStyle ?: Fill,
    )

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 841–875)


internal fun SpanStyle.fastMerge(
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
    // prioritize the parameters to Text in diffs here
    /**
     * color: Color fontSize: TextUnit fontStyle: FontStyle? fontWeight: FontWeight? fontFamily:
     * FontFamily? letterSpacing: TextUnit textDecoration: TextDecoration? textAlign: TextAlign?
     * lineHeight: TextUnit
     */

    // any new vals should do a pre-merge check here
    val requiresAlloc =
        fontSize.isSpecified && fontSize != this.fontSize ||
            brush == null && color.isSpecified && color != textForegroundStyle.color ||
            fontStyle != null && fontStyle != this.fontStyle ||
            fontWeight != null && fontWeight != this.fontWeight ||
            // ref check for font-family, since we don't want to compare lists in fast path

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 876–910)

            fontFamily != null && fontFamily !== this.fontFamily ||
            letterSpacing.isSpecified && letterSpacing != this.letterSpacing ||
            textDecoration != null && textDecoration != this.textDecoration ||
            // then compare the remaining params, for potential non-Text merges
            brush != textForegroundStyle.brush ||
            brush != null && alpha != this.textForegroundStyle.alpha ||
            fontSynthesis != null && fontSynthesis != this.fontSynthesis ||
            fontFeatureSettings != null && fontFeatureSettings != this.fontFeatureSettings ||
            baselineShift != null && baselineShift != this.baselineShift ||
            textGeometricTransform != null &&
                textGeometricTransform != this.textGeometricTransform ||
            localeList != null && localeList != this.localeList ||
            background.isSpecified && background != this.background ||
            shadow != null && shadow != this.shadow ||
            platformStyle != null && platformStyle != this.platformStyle ||
            drawStyle != null && drawStyle != this.drawStyle

    if (!requiresAlloc) {
        // we're done
        return this
    }

    val otherTextForegroundStyle =
        if (brush != null) {
            TextForegroundStyle.from(brush, alpha)
        } else {
            TextForegroundStyle.from(color)
        }

    return SpanStyle(
        textForegroundStyle = textForegroundStyle.merge(otherTextForegroundStyle),
        fontFamily = fontFamily ?: this.fontFamily,
        fontSize = if (!fontSize.isUnspecified) fontSize else this.fontSize,
        fontWeight = fontWeight ?: this.fontWeight,
        fontStyle = fontStyle ?: this.fontStyle,

Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)

## androidx.compose.ui.text SpanStyle.kt source (lines 911–935)

        fontSynthesis = fontSynthesis ?: this.fontSynthesis,
        fontFeatureSettings = fontFeatureSettings ?: this.fontFeatureSettings,
        letterSpacing =
            if (!letterSpacing.isUnspecified) {
                letterSpacing
            } else {
                this.letterSpacing
            },
        baselineShift = baselineShift ?: this.baselineShift,
        textGeometricTransform = textGeometricTransform ?: this.textGeometricTransform,
        localeList = localeList ?: this.localeList,
        background = background.takeOrElse { this.background },
        textDecoration = textDecoration ?: this.textDecoration,
        shadow = shadow ?: this.shadow,
        platformStyle = mergePlatformStyle(platformStyle),
        drawStyle = drawStyle ?: this.drawStyle,
    )
}

private fun SpanStyle.mergePlatformStyle(other: PlatformSpanStyle?): PlatformSpanStyle? {
    if (platformStyle == null) return other
    if (other == null) return platformStyle
    return platformStyle.merge(other)
}


Sources: [live-androidx-ui-ui-text-ui-text-spanstyle-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/SpanStyle.kt)
