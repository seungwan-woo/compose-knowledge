---
type: reference
title: androidx.compose.ui.text ParagraphStyle.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 1
    endLine: 35
    sha256: d3f0b3e29063fbf6f496c6418048f326eaea026b924e580f60e6eec2faece8bd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
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
      import androidx.compose.ui.text.internal.checkPrecondition
      import androidx.compose.ui.text.style.Hyphens
      import androidx.compose.ui.text.style.LineBreak
      import androidx.compose.ui.text.style.LineHeightStyle
      import androidx.compose.ui.text.style.TextAlign
      import androidx.compose.ui.text.style.TextDirection
      import androidx.compose.ui.text.style.TextIndent
      import androidx.compose.ui.text.style.TextMotion
      import androidx.compose.ui.text.style.lerp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.TextUnit
      import androidx.compose.ui.unit.isSpecified
      import androidx.compose.ui.unit.isUnspecified
      import kotlin.jvm.JvmName
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 106
    endLine: 140
    sha256: ef572959c04972512a61a987b944895fa985da156ab6ce425ac64a6ea1c39dd4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
          public constructor(
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformParagraphStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
              textMotion: TextMotion? = null,
          ) : this(
              textAlign = textAlign ?: TextAlign.Unspecified,
              textDirection = textDirection ?: TextDirection.Unspecified,
              lineHeight = lineHeight,
              textIndent = textIndent,
              platformStyle = platformStyle,
              lineHeightStyle = lineHeightStyle,
              lineBreak = lineBreak ?: LineBreak.Unspecified,
              hyphens = hyphens ?: Hyphens.Unspecified,
              textMotion = textMotion,
          )

          @Deprecated(
              "ParagraphStyle constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
          ) : this(
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 141
    endLine: 175
    sha256: b420a33270effe9a9721cd6ddc62d83424ba22d003d5b2a2dcdfa4aa5abdaca3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              textAlign = textAlign ?: TextAlign.Unspecified,
              textDirection = textDirection ?: TextDirection.Unspecified,
              lineHeight = lineHeight,
              textIndent = textIndent,
              platformStyle = null,
              lineHeightStyle = null,
              lineBreak = LineBreak.Unspecified,
              hyphens = Hyphens.Unspecified,
              textMotion = null,
          )

          @Deprecated(
              "ParagraphStyle constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "constructors.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformParagraphStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
          ) : this(
              textAlign = textAlign ?: TextAlign.Unspecified,
              textDirection = textDirection ?: TextDirection.Unspecified,
              lineHeight = lineHeight,
              textIndent = textIndent,
              platformStyle = platformStyle,
              lineHeightStyle = lineHeightStyle,
              lineBreak = LineBreak.Unspecified,
              hyphens = Hyphens.Unspecified,
              textMotion = null,
          )
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 176
    endLine: 210
    sha256: d7e944e379e9d6206882ff648c53f412e4688079a653668b7139365e8c5a8044
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          @Deprecated(
              "ParagraphStyle constructors that do not take new stable parameters " +
                  "like LineBreak, Hyphens, TextMotion are deprecated. Please use the new stable " +
                  "constructors.",
              level = DeprecationLevel.HIDDEN,
          )
          public constructor(
              textAlign: TextAlign? = null,
              textDirection: TextDirection? = null,
              lineHeight: TextUnit = TextUnit.Unspecified,
              textIndent: TextIndent? = null,
              platformStyle: PlatformParagraphStyle? = null,
              lineHeightStyle: LineHeightStyle? = null,
              lineBreak: LineBreak? = null,
              hyphens: Hyphens? = null,
          ) : this(
              textAlign = textAlign ?: TextAlign.Unspecified,
              textDirection = textDirection ?: TextDirection.Unspecified,
              lineHeight = lineHeight,
              textIndent = textIndent,
              platformStyle = platformStyle,
              lineHeightStyle = lineHeightStyle,
              lineBreak = lineBreak ?: LineBreak.Unspecified,
              hyphens = hyphens ?: Hyphens.Unspecified,
              textMotion = null,
          )

          init {
              if (lineHeight != TextUnit.Unspecified) {
                  // Since we are checking if it's negative, no need to convert Sp into Px at this point.
                  checkPrecondition(lineHeight.value >= 0f) {
                      "lineHeight can't be negative (${lineHeight.value})"
                  }
              }
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 211
    endLine: 245
    sha256: acdb414d81f1bd4932f637a6827902ff3903b18d6203f6b24f53736f8c169723
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          /**
           * Returns a new paragraph style that is a combination of this style and the given [other]
           * style.
           *
           * If the given paragraph style is null, returns this paragraph style.
           *
           * @param other style to merge
           */
          @Stable
          public fun merge(other: ParagraphStyle? = null): ParagraphStyle {
              if (other == null) return this

              return fastMerge(
                  textAlign = other.textAlign,
                  textDirection = other.textDirection,
                  lineHeight = other.lineHeight,
                  textIndent = other.textIndent,
                  platformStyle = other.platformStyle,
                  lineHeightStyle = other.lineHeightStyle,
                  lineBreak = other.lineBreak,
                  hyphens = other.hyphens,
                  textMotion = other.textMotion,
              )
          }

          /** Plus operator overload that applies a [merge]. */
          @Stable public operator fun plus(other: ParagraphStyle): ParagraphStyle = this.merge(other)

          @Deprecated(
              "ParagraphStyle copy constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 246
    endLine: 280
    sha256: a6ee60aa9377eb26401839abe9290b530a4800a9940242a8d6143a84dd91b31c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          )
          public fun copy(
              textAlign: TextAlign? = this.textAlign,
              textDirection: TextDirection? = this.textDirection,
              lineHeight: TextUnit = this.lineHeight,
              textIndent: TextIndent? = this.textIndent,
          ): ParagraphStyle {
              return ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = this.platformStyle,
                  lineHeightStyle = this.lineHeightStyle,
                  lineBreak = this.lineBreak,
                  hyphens = this.hyphens,
                  textMotion = this.textMotion,
              )
          }

          @Deprecated(
              "ParagraphStyle copy constructors that do not take new stable parameters " +
                  "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              textAlign: TextAlign? = this.textAlign,
              textDirection: TextDirection? = this.textDirection,
              lineHeight: TextUnit = this.lineHeight,
              textIndent: TextIndent? = this.textIndent,
              platformStyle: PlatformParagraphStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
          ): ParagraphStyle {
              return ParagraphStyle(
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 281
    endLine: 315
    sha256: ca94b0f32a0990f935f711fb1fce50ccff2975ce44140a6df4e9664fe6818c81
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = this.lineBreak,
                  hyphens = this.hyphens,
                  textMotion = this.textMotion,
              )
          }

          @Deprecated(
              "ParagraphStyle copy constructors that do not take new stable parameters " +
                  "like LineBreak, Hyphens, TextMotion are deprecated. Please use the new stable " +
                  "copy constructor.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              textAlign: TextAlign? = this.textAlign,
              textDirection: TextDirection? = this.textDirection,
              lineHeight: TextUnit = this.lineHeight,
              textIndent: TextIndent? = this.textIndent,
              platformStyle: PlatformParagraphStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
              lineBreak: LineBreak? = this.lineBreak,
              hyphens: Hyphens? = this.hyphens,
          ): ParagraphStyle {
              return ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle,
                  lineHeightStyle = lineHeightStyle,
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 316
    endLine: 350
    sha256: 367573d76cdfe3728b1ed3c7fb37aa3098dd38f80cd012b326698e7a3824c82d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  lineBreak = lineBreak ?: LineBreak.Unspecified,
                  hyphens = hyphens ?: Hyphens.Unspecified,
                  textMotion = this.textMotion,
              )
          }

          @Deprecated(
              "ParagraphStyle copy constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              textAlign: TextAlign? = this.textAlign,
              textDirection: TextDirection? = this.textDirection,
              lineHeight: TextUnit = this.lineHeight,
              textIndent: TextIndent? = this.textIndent,
              platformStyle: PlatformParagraphStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
              lineBreak: LineBreak? = this.lineBreak,
              hyphens: Hyphens? = this.hyphens,
              textMotion: TextMotion? = this.textMotion,
          ): ParagraphStyle {
              return ParagraphStyle(
                  textAlign = textAlign ?: TextAlign.Unspecified,
                  textDirection = textDirection ?: TextDirection.Unspecified,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak ?: LineBreak.Unspecified,
                  hyphens = hyphens ?: Hyphens.Unspecified,
                  textMotion = textMotion,
              )
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 351
    endLine: 385
    sha256: bfa45340d133abb265f8c5c93487a12db9e3f91b358725d9a848da89f525abcc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          public fun copy(
              textAlign: TextAlign = this.textAlign,
              textDirection: TextDirection = this.textDirection,
              lineHeight: TextUnit = this.lineHeight,
              textIndent: TextIndent? = this.textIndent,
              platformStyle: PlatformParagraphStyle? = this.platformStyle,
              lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
              lineBreak: LineBreak = this.lineBreak,
              hyphens: Hyphens = this.hyphens,
              textMotion: TextMotion? = this.textMotion,
          ): ParagraphStyle {
              return ParagraphStyle(
                  textAlign = textAlign,
                  textDirection = textDirection,
                  lineHeight = lineHeight,
                  textIndent = textIndent,
                  platformStyle = platformStyle,
                  lineHeightStyle = lineHeightStyle,
                  lineBreak = lineBreak,
                  hyphens = hyphens,
                  textMotion = textMotion,
              )
          }

          public override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ParagraphStyle) return false

              if (textAlign != other.textAlign) return false
              if (textDirection != other.textDirection) return false
              if (lineHeight != other.lineHeight) return false
              if (textIndent != other.textIndent) return false
              if (platformStyle != other.platformStyle) return false
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 36
    endLine: 70
    sha256: 47d99400950770d9a8e24ea7719db0f872338fbb95127f45c412f6fd68ab9e2b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private val DefaultLineHeight = TextUnit.Unspecified

      /**
       * Paragraph styling configuration.
       *
       * Defines styling parameters that apply to a whole paragraph (e.g., alignment, line height).
       *
       * In contrast to [SpanStyle] which applies at character level, [ParagraphStyle] separates the
       * marked text into a new paragraph, as if a line feed character was inserted.
       *
       * @sample androidx.compose.ui.text.samples.ParagraphStyleSample
       * @sample androidx.compose.ui.text.samples.ParagraphStyleAnnotatedStringsSample
       * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushParagraphStyleSample
       * @param textAlign alignment of the text within the lines of the paragraph.
       * @param textDirection algorithm used to resolve the final text direction: Left To Right or Right
       *   To Left.
       * @param lineHeight line height
       * @param textIndent paragraph indentation
       * @param platformStyle platform-specific parameters
       * @param lineHeightStyle line height distribution configuration
       * @param lineBreak line breaking rules.
       * @param hyphens hyphenation configuration.
       * @param textMotion character placement optimization.
       * @see Paragraph
       * @see AnnotatedString
       * @see SpanStyle
       * @see TextStyle
       */
      @Immutable
      public class ParagraphStyle(
          public val textAlign: TextAlign = TextAlign.Unspecified,
          public val textDirection: TextDirection = TextDirection.Unspecified,
          public val lineHeight: TextUnit = TextUnit.Unspecified,
          public val textIndent: TextIndent? = null,
          public val platformStyle: PlatformParagraphStyle? = null,
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 386
    endLine: 420
    sha256: 00db7188960fd2a3de60f8acf0eff153ae1b127d7cc9e211f9ff0adda5c2f754
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (lineHeightStyle != other.lineHeightStyle) return false
              if (lineBreak != other.lineBreak) return false
              if (hyphens != other.hyphens) return false
              if (textMotion != other.textMotion) return false

              return true
          }

          public override fun hashCode(): Int {
              var result = textAlign.hashCode()
              result = 31 * result + textDirection.hashCode()
              result = 31 * result + lineHeight.hashCode()
              result = 31 * result + (textIndent?.hashCode() ?: 0)
              result = 31 * result + (platformStyle?.hashCode() ?: 0)
              result = 31 * result + (lineHeightStyle?.hashCode() ?: 0)
              result = 31 * result + lineBreak.hashCode()
              result = 31 * result + hyphens.hashCode()
              result = 31 * result + (textMotion?.hashCode() ?: 0)
              return result
          }

          public override fun toString(): String {
              return "ParagraphStyle(" +
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
      }
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 421
    endLine: 455
    sha256: fd4059f5f2f9bb3657bac52b861a525cc483795b302e328fe8d24eb6dfe9275f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * Interpolate between two [ParagraphStyle]s.
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
      @Stable
      public fun lerp(start: ParagraphStyle, stop: ParagraphStyle, fraction: Float): ParagraphStyle {
          return ParagraphStyle(
              textAlign = lerpDiscrete(start.textAlign, stop.textAlign, fraction),
              textDirection = lerpDiscrete(start.textDirection, stop.textDirection, fraction),
              lineHeight = lerpTextUnitInheritable(start.lineHeight, stop.lineHeight, fraction),
              textIndent =
                  lerp(start.textIndent ?: TextIndent.None, stop.textIndent ?: TextIndent.None, fraction),
              platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
              lineHeightStyle = lerpDiscrete(start.lineHeightStyle, stop.lineHeightStyle, fraction),
              lineBreak = lerpDiscrete(start.lineBreak, stop.lineBreak, fraction),
              hyphens = lerpDiscrete(start.hyphens, stop.hyphens, fraction),
              textMotion = lerpDiscrete(start.textMotion, stop.textMotion, fraction),
          )
      }

      private fun lerpPlatformStyle(
          start: PlatformParagraphStyle?,
          stop: PlatformParagraphStyle?,
          fraction: Float,
      ): PlatformParagraphStyle? {
          if (start == null && stop == null) return null
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 456
    endLine: 490
    sha256: f54a2b735049b8aba2cd9cd74ab9b81f2504ce8491ba08beeb4b997b1c4621f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val startNonNull = start ?: PlatformParagraphStyle.Default
          val stopNonNull = stop ?: PlatformParagraphStyle.Default
          return lerp(startNonNull, stopNonNull, fraction)
      }

      internal fun resolveParagraphStyleDefaults(style: ParagraphStyle, direction: LayoutDirection) =
          ParagraphStyle(
              textAlign =
                  if (style.textAlign == TextAlign.Unspecified) TextAlign.Start else style.textAlign,
              textDirection = resolveTextDirection(direction, style.textDirection),
              lineHeight = if (style.lineHeight.isUnspecified) DefaultLineHeight else style.lineHeight,
              textIndent = style.textIndent ?: TextIndent.None,
              platformStyle = style.platformStyle,
              lineHeightStyle = style.lineHeightStyle,
              lineBreak =
                  if (style.lineBreak == LineBreak.Unspecified) LineBreak.Simple else style.lineBreak,
              hyphens = if (style.hyphens == Hyphens.Unspecified) Hyphens.None else style.hyphens,
              textMotion = style.textMotion ?: TextMotion.Static,
          )

      internal fun ParagraphStyle.fastMerge(
          textAlign: TextAlign,
          textDirection: TextDirection,
          lineHeight: TextUnit,
          textIndent: TextIndent?,
          platformStyle: PlatformParagraphStyle?,
          lineHeightStyle: LineHeightStyle?,
          lineBreak: LineBreak,
          hyphens: Hyphens,
          textMotion: TextMotion?,
      ): ParagraphStyle {
          // prioritize the parameters to Text in diffs here
          /** textAlign: TextAlign? lineHeight: TextUnit */

          // any new vals should do a pre-merge check here
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 491
    endLine: 525
    sha256: e335f4f623f76a0cb82a6e9d4be0fda6f4af7b3c16fbba60807e8f682eaf3f5a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val requiresAlloc =
              textAlign != TextAlign.Unspecified && textAlign != this.textAlign ||
                  lineHeight.isSpecified && lineHeight != this.lineHeight ||
                  textIndent != null && textIndent != this.textIndent ||
                  textDirection != TextDirection.Unspecified && textDirection != this.textDirection ||
                  platformStyle != null && platformStyle != this.platformStyle ||
                  lineHeightStyle != null && lineHeightStyle != this.lineHeightStyle ||
                  lineBreak != LineBreak.Unspecified && lineBreak != this.lineBreak ||
                  hyphens != Hyphens.Unspecified && hyphens != this.hyphens ||
                  textMotion != null && textMotion != this.textMotion

          if (!requiresAlloc) {
              return this
          }

          return ParagraphStyle(
              lineHeight =
                  if (lineHeight.isUnspecified) {
                      this.lineHeight
                  } else {
                      lineHeight
                  },
              textIndent = textIndent ?: this.textIndent,
              textAlign = if (textAlign != TextAlign.Unspecified) textAlign else this.textAlign,
              textDirection =
                  if (textDirection != TextDirection.Unspecified) textDirection else this.textDirection,
              platformStyle = mergePlatformStyle(platformStyle),
              lineHeightStyle = lineHeightStyle ?: this.lineHeightStyle,
              lineBreak = if (lineBreak != LineBreak.Unspecified) lineBreak else this.lineBreak,
              hyphens = if (hyphens != Hyphens.Unspecified) hyphens else this.hyphens,
              textMotion = textMotion ?: this.textMotion,
          )
      }

      private fun ParagraphStyle.mergePlatformStyle(
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 526
    endLine: 532
    sha256: 95b8f2574b1654576a8bef222a62f51e75c012f295351848890652a5fcf6fcee
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          other: PlatformParagraphStyle?
      ): PlatformParagraphStyle? {
          if (platformStyle == null) return other
          if (other == null) return platformStyle
          return platformStyle.merge(other)
      }
  - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt
    startLine: 71
    endLine: 105
    sha256: 0d54356c961014ce1e58238a9d01d20bf3add14f070ce6b5864522b4da7a3d75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val lineHeightStyle: LineHeightStyle? = null,
          public val lineBreak: LineBreak = LineBreak.Unspecified,
          public val hyphens: Hyphens = Hyphens.Unspecified,
          public val textMotion: TextMotion? = null,
      ) : AnnotatedString.Annotation {
          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getTextAlign-buA522U") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_textAlign: TextAlign?
              get() = this.textAlign

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getTextDirection-mmuk1to") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_textDirection: TextDirection?
              get() = this.textDirection

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getHyphens-EaSxIns") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_hyphens: Hyphens?
              get() = this.hyphens

          @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
          @get:JvmName("getLineBreak-LgCVezo") // b/320819734
          @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
          public val deprecated_boxing_lineBreak: LineBreak?
              get() = this.lineBreak

          @Deprecated(
              "ParagraphStyle constructors that take nullable TextAlign, " +
                  "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
                  "where these parameters are non-nullable. Null value has been replaced by a special " +
                  "Unspecified object for performance reason.",
              level = DeprecationLevel.HIDDEN,
compose:
  id: live-androidx-ui-ui-text-ui-text-paragraphstyle
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-1
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-1-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-106
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 106–140)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-106-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-141
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 141–175)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-141-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-176
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 176–210)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-176-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-211
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 211–245)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-211-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-246
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 246–280)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-246-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-281
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 281–315)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-281-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-316
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 316–350)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-316-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-351
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 351–385)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-351-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-36
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 36–70)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-36-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-386
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 386–420)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-386-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-421
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 421–455)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-421-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-456
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 456–490)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
        - androidx.compose.ui.text.lerp
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-456-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-491
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 491–525)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-491-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-526
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 526–532)
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-526-source
      relatedIds: []
    - id: live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-71
      title: androidx.compose.ui.text ParagraphStyle.kt source (lines 71–105)
      aliases:
        - androidx.compose.ui.text.ParagraphStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-71-source
      relatedIds: []
---

# androidx.compose.ui.text ParagraphStyle.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt

## androidx.compose.ui.text ParagraphStyle.kt source (lines 1–35)

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
import androidx.compose.ui.text.internal.checkPrecondition
import androidx.compose.ui.text.style.Hyphens
import androidx.compose.ui.text.style.LineBreak
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDirection
import androidx.compose.ui.text.style.TextIndent
import androidx.compose.ui.text.style.TextMotion
import androidx.compose.ui.text.style.lerp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.isSpecified
import androidx.compose.ui.unit.isUnspecified
import kotlin.jvm.JvmName


Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 106–140)

    )
    public constructor(
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformParagraphStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
        textMotion: TextMotion? = null,
    ) : this(
        textAlign = textAlign ?: TextAlign.Unspecified,
        textDirection = textDirection ?: TextDirection.Unspecified,
        lineHeight = lineHeight,
        textIndent = textIndent,
        platformStyle = platformStyle,
        lineHeightStyle = lineHeightStyle,
        lineBreak = lineBreak ?: LineBreak.Unspecified,
        hyphens = hyphens ?: Hyphens.Unspecified,
        textMotion = textMotion,
    )

    @Deprecated(
        "ParagraphStyle constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
    ) : this(

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 141–175)

        textAlign = textAlign ?: TextAlign.Unspecified,
        textDirection = textDirection ?: TextDirection.Unspecified,
        lineHeight = lineHeight,
        textIndent = textIndent,
        platformStyle = null,
        lineHeightStyle = null,
        lineBreak = LineBreak.Unspecified,
        hyphens = Hyphens.Unspecified,
        textMotion = null,
    )

    @Deprecated(
        "ParagraphStyle constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "constructors.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformParagraphStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
    ) : this(
        textAlign = textAlign ?: TextAlign.Unspecified,
        textDirection = textDirection ?: TextDirection.Unspecified,
        lineHeight = lineHeight,
        textIndent = textIndent,
        platformStyle = platformStyle,
        lineHeightStyle = lineHeightStyle,
        lineBreak = LineBreak.Unspecified,
        hyphens = Hyphens.Unspecified,
        textMotion = null,
    )

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 176–210)


    @Deprecated(
        "ParagraphStyle constructors that do not take new stable parameters " +
            "like LineBreak, Hyphens, TextMotion are deprecated. Please use the new stable " +
            "constructors.",
        level = DeprecationLevel.HIDDEN,
    )
    public constructor(
        textAlign: TextAlign? = null,
        textDirection: TextDirection? = null,
        lineHeight: TextUnit = TextUnit.Unspecified,
        textIndent: TextIndent? = null,
        platformStyle: PlatformParagraphStyle? = null,
        lineHeightStyle: LineHeightStyle? = null,
        lineBreak: LineBreak? = null,
        hyphens: Hyphens? = null,
    ) : this(
        textAlign = textAlign ?: TextAlign.Unspecified,
        textDirection = textDirection ?: TextDirection.Unspecified,
        lineHeight = lineHeight,
        textIndent = textIndent,
        platformStyle = platformStyle,
        lineHeightStyle = lineHeightStyle,
        lineBreak = lineBreak ?: LineBreak.Unspecified,
        hyphens = hyphens ?: Hyphens.Unspecified,
        textMotion = null,
    )

    init {
        if (lineHeight != TextUnit.Unspecified) {
            // Since we are checking if it's negative, no need to convert Sp into Px at this point.
            checkPrecondition(lineHeight.value >= 0f) {
                "lineHeight can't be negative (${lineHeight.value})"
            }
        }

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 211–245)

    }

    /**
     * Returns a new paragraph style that is a combination of this style and the given [other]
     * style.
     *
     * If the given paragraph style is null, returns this paragraph style.
     *
     * @param other style to merge
     */
    @Stable
    public fun merge(other: ParagraphStyle? = null): ParagraphStyle {
        if (other == null) return this

        return fastMerge(
            textAlign = other.textAlign,
            textDirection = other.textDirection,
            lineHeight = other.lineHeight,
            textIndent = other.textIndent,
            platformStyle = other.platformStyle,
            lineHeightStyle = other.lineHeightStyle,
            lineBreak = other.lineBreak,
            hyphens = other.hyphens,
            textMotion = other.textMotion,
        )
    }

    /** Plus operator overload that applies a [merge]. */
    @Stable public operator fun plus(other: ParagraphStyle): ParagraphStyle = this.merge(other)

    @Deprecated(
        "ParagraphStyle copy constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 246–280)

    )
    public fun copy(
        textAlign: TextAlign? = this.textAlign,
        textDirection: TextDirection? = this.textDirection,
        lineHeight: TextUnit = this.lineHeight,
        textIndent: TextIndent? = this.textIndent,
    ): ParagraphStyle {
        return ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = this.platformStyle,
            lineHeightStyle = this.lineHeightStyle,
            lineBreak = this.lineBreak,
            hyphens = this.hyphens,
            textMotion = this.textMotion,
        )
    }

    @Deprecated(
        "ParagraphStyle copy constructors that do not take new stable parameters " +
            "like LineHeightStyle, LineBreak, Hyphens are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        textAlign: TextAlign? = this.textAlign,
        textDirection: TextDirection? = this.textDirection,
        lineHeight: TextUnit = this.lineHeight,
        textIndent: TextIndent? = this.textIndent,
        platformStyle: PlatformParagraphStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
    ): ParagraphStyle {
        return ParagraphStyle(

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 281–315)

            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = this.lineBreak,
            hyphens = this.hyphens,
            textMotion = this.textMotion,
        )
    }

    @Deprecated(
        "ParagraphStyle copy constructors that do not take new stable parameters " +
            "like LineBreak, Hyphens, TextMotion are deprecated. Please use the new stable " +
            "copy constructor.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        textAlign: TextAlign? = this.textAlign,
        textDirection: TextDirection? = this.textDirection,
        lineHeight: TextUnit = this.lineHeight,
        textIndent: TextIndent? = this.textIndent,
        platformStyle: PlatformParagraphStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
        lineBreak: LineBreak? = this.lineBreak,
        hyphens: Hyphens? = this.hyphens,
    ): ParagraphStyle {
        return ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle,
            lineHeightStyle = lineHeightStyle,

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 316–350)

            lineBreak = lineBreak ?: LineBreak.Unspecified,
            hyphens = hyphens ?: Hyphens.Unspecified,
            textMotion = this.textMotion,
        )
    }

    @Deprecated(
        "ParagraphStyle copy constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        textAlign: TextAlign? = this.textAlign,
        textDirection: TextDirection? = this.textDirection,
        lineHeight: TextUnit = this.lineHeight,
        textIndent: TextIndent? = this.textIndent,
        platformStyle: PlatformParagraphStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
        lineBreak: LineBreak? = this.lineBreak,
        hyphens: Hyphens? = this.hyphens,
        textMotion: TextMotion? = this.textMotion,
    ): ParagraphStyle {
        return ParagraphStyle(
            textAlign = textAlign ?: TextAlign.Unspecified,
            textDirection = textDirection ?: TextDirection.Unspecified,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak ?: LineBreak.Unspecified,
            hyphens = hyphens ?: Hyphens.Unspecified,
            textMotion = textMotion,
        )

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 351–385)

    }

    public fun copy(
        textAlign: TextAlign = this.textAlign,
        textDirection: TextDirection = this.textDirection,
        lineHeight: TextUnit = this.lineHeight,
        textIndent: TextIndent? = this.textIndent,
        platformStyle: PlatformParagraphStyle? = this.platformStyle,
        lineHeightStyle: LineHeightStyle? = this.lineHeightStyle,
        lineBreak: LineBreak = this.lineBreak,
        hyphens: Hyphens = this.hyphens,
        textMotion: TextMotion? = this.textMotion,
    ): ParagraphStyle {
        return ParagraphStyle(
            textAlign = textAlign,
            textDirection = textDirection,
            lineHeight = lineHeight,
            textIndent = textIndent,
            platformStyle = platformStyle,
            lineHeightStyle = lineHeightStyle,
            lineBreak = lineBreak,
            hyphens = hyphens,
            textMotion = textMotion,
        )
    }

    public override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ParagraphStyle) return false

        if (textAlign != other.textAlign) return false
        if (textDirection != other.textDirection) return false
        if (lineHeight != other.lineHeight) return false
        if (textIndent != other.textIndent) return false
        if (platformStyle != other.platformStyle) return false

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 36–70)

private val DefaultLineHeight = TextUnit.Unspecified

/**
 * Paragraph styling configuration.
 *
 * Defines styling parameters that apply to a whole paragraph (e.g., alignment, line height).
 *
 * In contrast to [SpanStyle] which applies at character level, [ParagraphStyle] separates the
 * marked text into a new paragraph, as if a line feed character was inserted.
 *
 * @sample androidx.compose.ui.text.samples.ParagraphStyleSample
 * @sample androidx.compose.ui.text.samples.ParagraphStyleAnnotatedStringsSample
 * @sample androidx.compose.ui.text.samples.AnnotatedStringBuilderPushParagraphStyleSample
 * @param textAlign alignment of the text within the lines of the paragraph.
 * @param textDirection algorithm used to resolve the final text direction: Left To Right or Right
 *   To Left.
 * @param lineHeight line height
 * @param textIndent paragraph indentation
 * @param platformStyle platform-specific parameters
 * @param lineHeightStyle line height distribution configuration
 * @param lineBreak line breaking rules.
 * @param hyphens hyphenation configuration.
 * @param textMotion character placement optimization.
 * @see Paragraph
 * @see AnnotatedString
 * @see SpanStyle
 * @see TextStyle
 */
@Immutable
public class ParagraphStyle(
    public val textAlign: TextAlign = TextAlign.Unspecified,
    public val textDirection: TextDirection = TextDirection.Unspecified,
    public val lineHeight: TextUnit = TextUnit.Unspecified,
    public val textIndent: TextIndent? = null,
    public val platformStyle: PlatformParagraphStyle? = null,

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 386–420)

        if (lineHeightStyle != other.lineHeightStyle) return false
        if (lineBreak != other.lineBreak) return false
        if (hyphens != other.hyphens) return false
        if (textMotion != other.textMotion) return false

        return true
    }

    public override fun hashCode(): Int {
        var result = textAlign.hashCode()
        result = 31 * result + textDirection.hashCode()
        result = 31 * result + lineHeight.hashCode()
        result = 31 * result + (textIndent?.hashCode() ?: 0)
        result = 31 * result + (platformStyle?.hashCode() ?: 0)
        result = 31 * result + (lineHeightStyle?.hashCode() ?: 0)
        result = 31 * result + lineBreak.hashCode()
        result = 31 * result + hyphens.hashCode()
        result = 31 * result + (textMotion?.hashCode() ?: 0)
        return result
    }

    public override fun toString(): String {
        return "ParagraphStyle(" +
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
}

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 421–455)


/**
 * Interpolate between two [ParagraphStyle]s.
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
@Stable
public fun lerp(start: ParagraphStyle, stop: ParagraphStyle, fraction: Float): ParagraphStyle {
    return ParagraphStyle(
        textAlign = lerpDiscrete(start.textAlign, stop.textAlign, fraction),
        textDirection = lerpDiscrete(start.textDirection, stop.textDirection, fraction),
        lineHeight = lerpTextUnitInheritable(start.lineHeight, stop.lineHeight, fraction),
        textIndent =
            lerp(start.textIndent ?: TextIndent.None, stop.textIndent ?: TextIndent.None, fraction),
        platformStyle = lerpPlatformStyle(start.platformStyle, stop.platformStyle, fraction),
        lineHeightStyle = lerpDiscrete(start.lineHeightStyle, stop.lineHeightStyle, fraction),
        lineBreak = lerpDiscrete(start.lineBreak, stop.lineBreak, fraction),
        hyphens = lerpDiscrete(start.hyphens, stop.hyphens, fraction),
        textMotion = lerpDiscrete(start.textMotion, stop.textMotion, fraction),
    )
}

private fun lerpPlatformStyle(
    start: PlatformParagraphStyle?,
    stop: PlatformParagraphStyle?,
    fraction: Float,
): PlatformParagraphStyle? {
    if (start == null && stop == null) return null

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 456–490)

    val startNonNull = start ?: PlatformParagraphStyle.Default
    val stopNonNull = stop ?: PlatformParagraphStyle.Default
    return lerp(startNonNull, stopNonNull, fraction)
}

internal fun resolveParagraphStyleDefaults(style: ParagraphStyle, direction: LayoutDirection) =
    ParagraphStyle(
        textAlign =
            if (style.textAlign == TextAlign.Unspecified) TextAlign.Start else style.textAlign,
        textDirection = resolveTextDirection(direction, style.textDirection),
        lineHeight = if (style.lineHeight.isUnspecified) DefaultLineHeight else style.lineHeight,
        textIndent = style.textIndent ?: TextIndent.None,
        platformStyle = style.platformStyle,
        lineHeightStyle = style.lineHeightStyle,
        lineBreak =
            if (style.lineBreak == LineBreak.Unspecified) LineBreak.Simple else style.lineBreak,
        hyphens = if (style.hyphens == Hyphens.Unspecified) Hyphens.None else style.hyphens,
        textMotion = style.textMotion ?: TextMotion.Static,
    )

internal fun ParagraphStyle.fastMerge(
    textAlign: TextAlign,
    textDirection: TextDirection,
    lineHeight: TextUnit,
    textIndent: TextIndent?,
    platformStyle: PlatformParagraphStyle?,
    lineHeightStyle: LineHeightStyle?,
    lineBreak: LineBreak,
    hyphens: Hyphens,
    textMotion: TextMotion?,
): ParagraphStyle {
    // prioritize the parameters to Text in diffs here
    /** textAlign: TextAlign? lineHeight: TextUnit */

    // any new vals should do a pre-merge check here

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 491–525)

    val requiresAlloc =
        textAlign != TextAlign.Unspecified && textAlign != this.textAlign ||
            lineHeight.isSpecified && lineHeight != this.lineHeight ||
            textIndent != null && textIndent != this.textIndent ||
            textDirection != TextDirection.Unspecified && textDirection != this.textDirection ||
            platformStyle != null && platformStyle != this.platformStyle ||
            lineHeightStyle != null && lineHeightStyle != this.lineHeightStyle ||
            lineBreak != LineBreak.Unspecified && lineBreak != this.lineBreak ||
            hyphens != Hyphens.Unspecified && hyphens != this.hyphens ||
            textMotion != null && textMotion != this.textMotion

    if (!requiresAlloc) {
        return this
    }

    return ParagraphStyle(
        lineHeight =
            if (lineHeight.isUnspecified) {
                this.lineHeight
            } else {
                lineHeight
            },
        textIndent = textIndent ?: this.textIndent,
        textAlign = if (textAlign != TextAlign.Unspecified) textAlign else this.textAlign,
        textDirection =
            if (textDirection != TextDirection.Unspecified) textDirection else this.textDirection,
        platformStyle = mergePlatformStyle(platformStyle),
        lineHeightStyle = lineHeightStyle ?: this.lineHeightStyle,
        lineBreak = if (lineBreak != LineBreak.Unspecified) lineBreak else this.lineBreak,
        hyphens = if (hyphens != Hyphens.Unspecified) hyphens else this.hyphens,
        textMotion = textMotion ?: this.textMotion,
    )
}

private fun ParagraphStyle.mergePlatformStyle(

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 526–532)

    other: PlatformParagraphStyle?
): PlatformParagraphStyle? {
    if (platformStyle == null) return other
    if (other == null) return platformStyle
    return platformStyle.merge(other)
}


Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)

## androidx.compose.ui.text ParagraphStyle.kt source (lines 71–105)

    public val lineHeightStyle: LineHeightStyle? = null,
    public val lineBreak: LineBreak = LineBreak.Unspecified,
    public val hyphens: Hyphens = Hyphens.Unspecified,
    public val textMotion: TextMotion? = null,
) : AnnotatedString.Annotation {
    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getTextAlign-buA522U") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_textAlign: TextAlign?
        get() = this.textAlign

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getTextDirection-mmuk1to") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_textDirection: TextDirection?
        get() = this.textDirection

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getHyphens-EaSxIns") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_hyphens: Hyphens?
        get() = this.hyphens

    @Deprecated("Kept for backwards compatibility.", level = DeprecationLevel.WARNING)
    @get:JvmName("getLineBreak-LgCVezo") // b/320819734
    @Suppress("unused", "RedundantNullableReturnType", "PropertyName")
    public val deprecated_boxing_lineBreak: LineBreak?
        get() = this.lineBreak

    @Deprecated(
        "ParagraphStyle constructors that take nullable TextAlign, " +
            "TextDirection, LineBreak, and Hyphens are deprecated. Please use a new constructor " +
            "where these parameters are non-nullable. Null value has been replaced by a special " +
            "Unspecified object for performance reason.",
        level = DeprecationLevel.HIDDEN,

Sources: [live-androidx-ui-ui-text-ui-text-paragraphstyle-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/ui/ui-text/src/commonMain/kotlin/androidx/compose/ui/text/ParagraphStyle.kt)
