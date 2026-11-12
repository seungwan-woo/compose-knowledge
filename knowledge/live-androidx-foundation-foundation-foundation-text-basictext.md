---
type: reference
title: androidx.compose.foundation.text BasicText.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 1
    endLine: 35
    sha256: 1b1d5f9a18ee66e091aebc4dbdd01ab8fcf142804bb16cf69132a74c5462e94e
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

      package androidx.compose.foundation.text

      import androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringElement
      import androidx.compose.foundation.text.modifiers.SelectionController
      import androidx.compose.foundation.text.modifiers.TextAnnotatedStringElement
      import androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode
      import androidx.compose.foundation.text.modifiers.TextStringSimpleElement
      import androidx.compose.foundation.text.modifiers.hasLinks
      import androidx.compose.foundation.text.selection.LocalSelectionRegistrar
      import androidx.compose.foundation.text.selection.LocalTextSelectionColors
      import androidx.compose.foundation.text.selection.SelectionRegistrar
      import androidx.compose.foundation.text.selection.hasSelection
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.NonRestartableComposable
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.saveable.Saver
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 106
    endLine: 140
    sha256: d3f15dc071638ce72a5169b486bb9c6a1391a02331d1a950f87776fda93b386d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (selectionRegistrar != null) {
                  val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
                  val selectableId =
                      rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                          selectionRegistrar.nextSelectableId()
                      }
                  remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                      SelectionController(
                          selectableId = selectableId,
                          selectionRegistrar = selectionRegistrar,
                          backgroundSelectionColor = backgroundSelectionColor,
                      )
                  }
              } else {
                  null
              }

          val fontFamilyResolver = LocalFontFamilyResolver.current
          val localeList = LocalLocaleList.current

          BackgroundTextMeasurement(
              text = text,
              style = style,
              fontFamilyResolver = fontFamilyResolver,
              defaultLocaleList = localeList,
              softWrap = softWrap,
          )

          val finalModifier =
              if (selectionController != null || onTextLayout != null || autoSize != null) {
                  modifier.textModifier(
                      AnnotatedString(text = text),
                      style = style,
                      onTextLayout = onTextLayout,
                      overflow = overflow,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 141
    endLine: 175
    sha256: b174821dec0717272e890520e6f800bd5ce223d03c5572658aa2e9380bdf8889
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      softWrap = softWrap,
                      maxLines = maxLines,
                      minLines = minLines,
                      fontFamilyResolver = fontFamilyResolver,
                      defaultLocaleList = localeList,
                      placeholders = null,
                      onPlaceholderLayout = null,
                      selectionController = selectionController,
                      color = color,
                      onShowTranslation = null,
                      autoSize = autoSize,
                  )
              } else {
                  modifier then
                      TextStringSimpleElement(
                          text = text,
                          style = style,
                          fontFamilyResolver = fontFamilyResolver,
                          defaultLocaleList = localeList,
                          overflow = overflow,
                          softWrap = softWrap,
                          maxLines = maxLines,
                          minLines = minLines,
                          color = color,
                      )
              }
          Layout(finalModifier, EmptyMeasurePolicy)
      }

      /**
       * Displays text with semantics and accessibility information.
       *
       * For theme integration, use Material [androidx.compose.material3.Text].
       *
       * @param text text to display
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 176
    endLine: 210
    sha256: c566872a8aabf2d2fe906ac9debb41898269ac6b5be2f0d2ceac42dc86db2812
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier for this layout
       * @param style configuration
       * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
       *   parameter contains paragraph information, size, baselines, and other details. Use this callback
       *   to add decoration or functionality, such as drawing selection
       * @param overflow handling visual overflow
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow]
       * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
       *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
       * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
       * @param inlineContent map storing [InlineTextContent] composables that replace specified ranges of
       *   text, embedding them in the layout
       * @param color to override style color
       * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
       *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
       *   defined in [style]
       * @sample androidx.compose.foundation.samples.TextAutoSizeBasicTextSample
       */
      @Composable
      public fun BasicText(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          color: ColorProducer? = null,
          autoSize: TextAutoSize? = null,
      ) {
          validateMinMaxLines(minLines = minLines, maxLines = maxLines)
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 211
    endLine: 245
    sha256: 445a0bf25be2b46ee09c224f5ce7e4bb15e87e0e8c14432976ade1a1811efbec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val selectionRegistrar = LocalSelectionRegistrar.current
          val selectionController =
              if (selectionRegistrar != null) {
                  val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
                  val selectableId =
                      rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                          selectionRegistrar.nextSelectableId()
                      }
                  remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                      SelectionController(
                          selectableId = selectableId,
                          selectionRegistrar = selectionRegistrar,
                          backgroundSelectionColor = backgroundSelectionColor,
                      )
                  }
              } else {
                  null
              }
          val hasInlineContent = text.hasInlineContent()
          val hasLinks = text.hasLinks()

          val fontFamilyResolver = LocalFontFamilyResolver.current
          val localeList = LocalLocaleList.current

          if (!hasInlineContent && !hasLinks) {
              BackgroundTextMeasurement(
                  text = text,
                  style = style,
                  fontFamilyResolver = fontFamilyResolver,
                  defaultLocaleList = localeList,
                  placeholders = null,
                  softWrap = softWrap,
              )

              // this is the same as text: String, use all the early exits
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 246
    endLine: 280
    sha256: ded71e8a18876213c1d3d31f645ded8066c7a0767a26cb2258ca25ed4f842bd6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              Layout(
                  modifier =
                      modifier.textModifier(
                          text = text,
                          style = style,
                          onTextLayout = onTextLayout,
                          overflow = overflow,
                          softWrap = softWrap,
                          maxLines = maxLines,
                          minLines = minLines,
                          fontFamilyResolver = fontFamilyResolver,
                          defaultLocaleList = localeList,
                          placeholders = null,
                          onPlaceholderLayout = null,
                          selectionController = selectionController,
                          color = color,
                          onShowTranslation = null,
                          autoSize = autoSize,
                      ),
                  EmptyMeasurePolicy,
              )
          } else {
              // takes into account text substitution (for translation) that is happening inside the
              // TextAnnotatedStringNode
              var displayedText by remember(text) { mutableStateOf(text) }

              LayoutWithLinksAndInlineContent(
                  modifier = modifier,
                  text = displayedText,
                  onTextLayout = onTextLayout,
                  hasInlineContent = hasInlineContent,
                  inlineContent = inlineContent,
                  style = style,
                  overflow = overflow,
                  softWrap = softWrap,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 281
    endLine: 315
    sha256: ed1021f0ebeca571ee32194586da5ad97a1993f5c8d2f3f2e8bd311f5bf49e61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  maxLines = maxLines,
                  minLines = minLines,
                  fontFamilyResolver = fontFamilyResolver,
                  defaultLocaleList = localeList,
                  selectionController = selectionController,
                  color = color,
                  onShowTranslation = { substitutionValue ->
                      displayedText =
                          if (substitutionValue.isShowingSubstitution) {
                              substitutionValue.substitution
                          } else {
                              substitutionValue.original
                          }
                  },
                  autoSize = autoSize,
              )
          }
      }

      /**
       * Displays text with style resolved dynamically from a lambda.
       *
       * For theme integration, use Material [androidx.compose.material3.Text].
       *
       * Use this overload when style depends on state and changes frequently. Using a lambda prevents
       * full recomposition when the style changes, deferring evaluation to the layout phase:
       * - State reads within [styleProvider] are observed during measurement and trigger a measure pass
       *   when invalidated, skipping recomposition.
       * - Changes to layout-affecting attributes recalculate text layout and invalidate drawing, whereas
       *   changes to draw-only attributes reuse the cached text layout and invalidate drawing.
       *
       * @param text text to display
       * @param styleProvider lambda with [TextStyleScope] receiver configuring text attributes
       * @param modifier for this layout
       * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 316
    endLine: 350
    sha256: dbc53fba601faa868fe79155d0c4bc22fc2bfc9b803f543d9389fb674003611e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   parameter contains paragraph information, size, baselines, and other details. Use this callback
       *   to add decoration or functionality, such as drawing selection. Note that when using this
       *   overload, [TextLayoutResult.layoutInput]'s [TextStyle] is not guaranteed to contain the real
       *   draw attributes configured in [styleProvider]
       * @param overflow handling visual overflow
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow]
       * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
       *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
       * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
       * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
       *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
       *   defined in [styleProvider]
       */
      @Composable
      public fun BasicText(
          text: String,
          styleProvider: TextStyleScope.() -> Unit,
          modifier: Modifier = Modifier,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          autoSize: TextAutoSize? = null,
      ) {
          validateMinMaxLines(minLines = minLines, maxLines = maxLines)
          val selectionRegistrar = LocalSelectionRegistrar.current
          val selectionController =
              if (selectionRegistrar != null) {
                  val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
                  val selectableId =
                      rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                          selectionRegistrar.nextSelectableId()
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 351
    endLine: 385
    sha256: 158bb1ce9c88789d9f0d3b3e351461a9a5cc7997fb2e4738024c0b94d3108377
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                      SelectionController(
                          selectableId = selectableId,
                          selectionRegistrar = selectionRegistrar,
                          backgroundSelectionColor = backgroundSelectionColor,
                      )
                  }
              } else {
                  null
              }

          val fontFamilyResolver = LocalFontFamilyResolver.current
          val localeList = LocalLocaleList.current

          val finalModifier =
              if (selectionController != null || onTextLayout != null || autoSize != null) {
                  modifier.textModifier(
                      AnnotatedString(text = text),
                      styleProvider = styleProvider,
                      onTextLayout = onTextLayout,
                      overflow = overflow,
                      softWrap = softWrap,
                      maxLines = maxLines,
                      minLines = minLines,
                      fontFamilyResolver = fontFamilyResolver,
                      defaultLocaleList = localeList,
                      placeholders = null,
                      onPlaceholderLayout = null,
                      selectionController = selectionController,
                      onShowTranslation = null,
                      autoSize = autoSize,
                  )
              } else {
                  modifier then
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 36
    endLine: 70
    sha256: 563acd3fbd7ec4378ea633e38fffd468e48719ff937fe53a735b0504dd11ef23
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.saveable.rememberSaveable
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.graphics.ColorProducer
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.platform.LocalFontFamilyResolver
      import androidx.compose.ui.platform.LocalLocaleList
      import androidx.compose.ui.text.AnnotatedString
      import androidx.compose.ui.text.Placeholder
      import androidx.compose.ui.text.TextLayoutResult
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.text.TextStyleScope
      import androidx.compose.ui.text.font.FontFamily
      import androidx.compose.ui.text.intl.LocaleList
      import androidx.compose.ui.text.style.TextOverflow
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Constraints.Companion.fitPrioritizingWidth
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.util.fastFilter
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastMapIndexedNotNull
      import androidx.compose.ui.util.fastRoundToInt
      import kotlin.math.floor

      /**
       * Displays text with semantics and accessibility information.
       *
       * For theme integration, use Material [androidx.compose.material3.Text].
       *
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 386
    endLine: 420
    sha256: 2966b198dbe97fa6cd73ee04c77e8f41c0f148183ba7a0232d64c05ef2bfadae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      TextStringSimpleElement(
                          text = text,
                          styleProvider = styleProvider,
                          fontFamilyResolver = fontFamilyResolver,
                          defaultLocaleList = localeList,
                          overflow = overflow,
                          softWrap = softWrap,
                          maxLines = maxLines,
                          minLines = minLines,
                      )
              }
          Layout(finalModifier, EmptyMeasurePolicy)
      }

      /**
       * Displays text with style resolved dynamically from a lambda.
       *
       * For theme integration, use Material [androidx.compose.material3.Text].
       *
       * Use this overload when style depends on state and changes frequently. Using a lambda prevents
       * full recomposition when the style changes, deferring evaluation to the layout phase:
       * - State reads within [styleProvider] are observed during measurement and trigger a measure pass
       *   when invalidated, skipping recomposition.
       * - Changes to layout-affecting attributes recalculate text layout and invalidate drawing, whereas
       *   changes to draw-only attributes reuse the cached text layout and invalidate drawing.
       *
       * @param text text to display
       * @param styleProvider lambda with [TextStyleScope] receiver configuring text attributes
       * @param modifier for this layout
       * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
       *   parameter contains paragraph information, size, baselines, and other details. Use this callback
       *   to add decoration or functionality, such as drawing selection. Note that when using this
       *   overload, [TextLayoutResult.layoutInput]'s [TextStyle] is not guaranteed to contain the real
       *   draw attributes configured in [styleProvider]
       * @param overflow handling visual overflow
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 421
    endLine: 455
    sha256: aeb67b6ee5767f392aeef5c46e378e9ab3e9f6dc5503d6221c5afea25e344f37
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow]
       * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
       *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
       * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
       * @param inlineContent map storing [InlineTextContent] composables that replace specified ranges of
       *   text, embedding them in the layout
       * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
       *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
       *   defined in [styleProvider]
       */
      @Composable
      public fun BasicText(
          text: AnnotatedString,
          styleProvider: TextStyleScope.() -> Unit,
          modifier: Modifier = Modifier,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          autoSize: TextAutoSize? = null,
      ) {
          validateMinMaxLines(minLines = minLines, maxLines = maxLines)
          val selectionRegistrar = LocalSelectionRegistrar.current
          val selectionController =
              if (selectionRegistrar != null) {
                  val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
                  val selectableId =
                      rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                          selectionRegistrar.nextSelectableId()
                      }
                  remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 456
    endLine: 490
    sha256: f5fd37b1b1c0b243b36114f200b26f39c16ce5b9e256591291c6f41a9195f73b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      SelectionController(
                          selectableId = selectableId,
                          selectionRegistrar = selectionRegistrar,
                          backgroundSelectionColor = backgroundSelectionColor,
                      )
                  }
              } else {
                  null
              }
          val hasInlineContent = text.hasInlineContent()
          val hasLinks = text.hasLinks()

          val fontFamilyResolver = LocalFontFamilyResolver.current
          val localeList = LocalLocaleList.current

          if (!hasInlineContent && !hasLinks) {
              // this is the same as text: String, use all the early exits
              Layout(
                  modifier =
                      modifier.textModifier(
                          text = text,
                          styleProvider = styleProvider,
                          onTextLayout = onTextLayout,
                          overflow = overflow,
                          softWrap = softWrap,
                          maxLines = maxLines,
                          minLines = minLines,
                          fontFamilyResolver = fontFamilyResolver,
                          defaultLocaleList = localeList,
                          placeholders = null,
                          onPlaceholderLayout = null,
                          selectionController = selectionController,
                          onShowTranslation = null,
                          autoSize = autoSize,
                      ),
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 491
    endLine: 525
    sha256: 6f24f1b7c540be1cd805bd81a46a734ae39b187b013e5bf2e000a974613da869
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  EmptyMeasurePolicy,
              )
          } else {
              // takes into account text substitution (for translation) that is happening inside the
              // TextAnnotatedStringNode
              var displayedText by remember(text) { mutableStateOf(text) }

              LayoutWithLinksAndInlineContent(
                  modifier = modifier,
                  text = displayedText,
                  onTextLayout = onTextLayout,
                  hasInlineContent = hasInlineContent,
                  inlineContent = inlineContent,
                  styleProvider = styleProvider,
                  overflow = overflow,
                  softWrap = softWrap,
                  maxLines = maxLines,
                  minLines = minLines,
                  fontFamilyResolver = fontFamilyResolver,
                  defaultLocaleList = localeList,
                  selectionController = selectionController,
                  onShowTranslation = { substitutionValue ->
                      displayedText =
                          if (substitutionValue.isShowingSubstitution) {
                              substitutionValue.substitution
                          } else {
                              substitutionValue.original
                          }
                  },
                  autoSize = autoSize,
              )
          }
      }

      /**
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 526
    endLine: 560
    sha256: b93f9f752d7e27a2fe1614eebdab91151fb4c47f6d833486f1079e31f63e5493
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Basic element that displays text and provides semantics / accessibility information. Typically
       * you will instead want to use [androidx.compose.material.Text], which is a higher level Text
       * element that contains semantics and consumes style information from a theme.
       *
       * @param text The text to be displayed.
       * @param modifier [Modifier] to apply to this layout node.
       * @param style Style configuration for the text such as color, font, line height etc.
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
       * @param overflow How visual overflow should be handled.
       * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow].
       * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
       *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
       *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
       * @param minLines The minimum height in terms of minimum number of visible lines. It is required
       *   that 1 <= [minLines] <= [maxLines].
       * @param color Overrides the text color provided in [style]
       */
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: String,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          color: ColorProducer? = null,
      ) {
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 561
    endLine: 594
    sha256: 4027c2506c6e1927e333c9ed619dd4362d8a812b3a2adb111c3cb5f7c635e3dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color)
      }

      /**
       * Basic element that displays text and provides semantics / accessibility information. Typically
       * you will instead want to use [androidx.compose.material.Text], which is a higher level Text
       * element that contains semantics and consumes style information from a theme.
       *
       * @param text The text to be displayed.
       * @param modifier [Modifier] to apply to this layout node.
       * @param style Style configuration for the text such as color, font, line height etc.
       * @param onTextLayout Callback that is executed when a new text layout is calculated. A
       *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
       *   text, baselines and other details. The callback can be used to add additional decoration or
       *   functionality to the text. For example, to draw selection around the text.
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
       * @param color Overrides the text color provided in [style]
       */
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-595-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 595
    endLine: 629
    sha256: 66717308a36095344df16ae4627868a9a47b32ab785ea93e273235821bb73c25
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          color: ColorProducer? = null,
      ) {
          BasicText(
              text,
              modifier,
              style,
              onTextLayout,
              overflow,
              softWrap,
              maxLines,
              minLines,
              inlineContent,
              color,
          )
      }

      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: String,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
      ) {
          BasicText(
              text = text,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-630-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 630
    endLine: 664
    sha256: a04119cc8505bc0bc78cfae6f564e971df7e3c9d8d445d7ee30fca6b301103a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              modifier = modifier,
              style = style,
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              minLines = 1,
              maxLines = maxLines,
          )
      }

      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
      ) {
          BasicText(
              text = text,
              modifier = modifier,
              style = style,
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = 1,
              inlineContent = inlineContent,
          )
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-665-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 665
    endLine: 699
    sha256: 65b911e90e5a7c166c4a69db1501db2bd3416c17364433bd338c9a9c5a5e4bae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: String,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
      ): Unit = BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines)

      @Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BasicText(
          text: AnnotatedString,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
      ): Unit =
          BasicText(
              text = text,
              modifier = modifier,
              style = style,
              onTextLayout = onTextLayout,
              overflow = overflow,
              softWrap = softWrap,
              maxLines = maxLines,
              minLines = minLines,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-700-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 700
    endLine: 734
    sha256: 09ea66e396c6e3c6132864e85658e1340aa4fde1835b8467dcf306d1113dd6db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              inlineContent = inlineContent,
          )

      /** A custom saver that won't save if no selection is active. */
      private fun selectionIdSaver(selectionRegistrar: SelectionRegistrar?) =
          Saver<Long, Long>(
              save = { if (selectionRegistrar.hasSelection(it)) it else null },
              restore = { it },
          )

      private object EmptyMeasurePolicy : MeasurePolicy {
          private val placementBlock: Placeable.PlacementScope.() -> Unit = {}

          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              return layout(constraints.maxWidth, constraints.maxHeight, placementBlock = placementBlock)
          }
      }

      /** Measure policy for inline content and links */
      private class TextMeasurePolicy(
          private val shouldMeasureLinks: () -> Boolean,
          private val placements: () -> List<Rect?>?,
      ) : MeasurePolicy {
          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              // inline content
              val inlineContentMeasurables = measurables.fastFilter {
                  it.parentData !is TextRangeLayoutParentData
              }
              val inlineContentToPlace =
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 71
    endLine: 105
    sha256: 6c62fa096540c61600e665724958d5fc1140622a713c5d963fd4ffa502040f77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param text text to display
       * @param modifier for this layout
       * @param style configuration
       * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
       *   parameter contains paragraph information, size, baselines, and other details. Use this callback
       *   to add decoration or functionality, such as drawing selection
       * @param overflow handling visual overflow
       * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
       *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
       *   space, which may cause it to clip or overflow according to [overflow]
       * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
       *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
       * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
       * @param color to override style color
       * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
       *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
       *   defined in [style]
       * @sample androidx.compose.foundation.samples.TextAutoSizeBasicTextSample
       */
      @Composable
      public fun BasicText(
          text: String,
          modifier: Modifier = Modifier,
          style: TextStyle = TextStyle.Default,
          onTextLayout: ((TextLayoutResult) -> Unit)? = null,
          overflow: TextOverflow = TextOverflow.Clip,
          softWrap: Boolean = true,
          maxLines: Int = Int.MAX_VALUE,
          minLines: Int = 1,
          color: ColorProducer? = null,
          autoSize: TextAutoSize? = null,
      ) {
          validateMinMaxLines(minLines = minLines, maxLines = maxLines)
          val selectionRegistrar = LocalSelectionRegistrar.current
          val selectionController =
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-735-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 735
    endLine: 769
    sha256: 5900649d969593426ab0bfa727be2513d359e7e8954926e467440f0553727e75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                  placements()?.fastMapIndexedNotNull { index, rect ->
                      // PlaceholderRect will be null if it's ellipsized. In that case, the corresponding
                      // inline children won't be measured or placed.
                      rect?.let {
                          Pair(
                              inlineContentMeasurables[index].measure(
                                  Constraints(
                                      maxWidth = floor(it.width).toInt(),
                                      maxHeight = floor(it.height).toInt(),
                                  )
                              ),
                              IntOffset(it.left.fastRoundToInt(), it.top.fastRoundToInt()),
                          )
                      }
                  }

              // links
              val linksMeasurables = measurables.fastFilter { it.parentData is TextRangeLayoutParentData }
              val linksToPlace =
                  measureWithTextRangeMeasureConstraints(
                      measurables = linksMeasurables,
                      shouldMeasureLinks = shouldMeasureLinks,
                  )

              return layout(constraints.maxWidth, constraints.maxHeight) {
                  // inline content
                  inlineContentToPlace?.fastForEach { (placeable, position) -> placeable.place(position) }
                  // links
                  linksToPlace?.fastForEach { (placeable, measureResult) ->
                      placeable.place(measureResult?.invoke() ?: IntOffset.Zero)
                  }
              }
          }
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-770-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 770
    endLine: 804
    sha256: f30b2656d33cd189d95713c11aa25f8f08cc82462b36d58e5dbe4abd9785350c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /** Measure policy for links only */
      private class LinksTextMeasurePolicy(private val shouldMeasureLinks: () -> Boolean) :
          MeasurePolicy {
          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              return layout(constraints.maxWidth, constraints.maxHeight) {
                  val linksToPlace =
                      measureWithTextRangeMeasureConstraints(
                          measurables = measurables,
                          shouldMeasureLinks = shouldMeasureLinks,
                      )
                  linksToPlace?.fastForEach { (placeable, measureResult) ->
                      placeable.place(measureResult?.invoke() ?: IntOffset.Zero)
                  }
              }
          }
      }

      private fun measureWithTextRangeMeasureConstraints(
          measurables: List<Measurable>,
          shouldMeasureLinks: () -> Boolean,
      ): List<Pair<Placeable, (() -> IntOffset)?>>? {
          return if (shouldMeasureLinks()) {
              val textRangeLayoutMeasureScope = TextRangeLayoutMeasureScope()
              measurables.fastMapIndexedNotNull { _, measurable ->
                  val rangeMeasurePolicy =
                      (measurable.parentData as TextRangeLayoutParentData).measurePolicy
                  val rangeMeasureResult =
                      with(rangeMeasurePolicy) { textRangeLayoutMeasureScope.measure() }
                  val placeable =
                      measurable.measure(
                          fitPrioritizingWidth(
                              minWidth = rangeMeasureResult.width,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 805
    endLine: 839
    sha256: 71655f679b6dc5291a84031331d433a5ff77dcc4c1710bc3d450df719eb5d9ae
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              maxWidth = rangeMeasureResult.width,
                              minHeight = rangeMeasureResult.height,
                              maxHeight = rangeMeasureResult.height,
                          )
                      )
                  Pair(placeable, rangeMeasureResult.place)
              }
          } else {
              null
          }
      }

      private fun Modifier.textModifier(
          text: AnnotatedString,
          style: TextStyle? = null,
          styleProvider: (TextStyleScope.() -> Unit)? = null,
          onTextLayout: ((TextLayoutResult) -> Unit)?,
          overflow: TextOverflow,
          softWrap: Boolean,
          maxLines: Int,
          minLines: Int,
          fontFamilyResolver: FontFamily.Resolver,
          defaultLocaleList: LocaleList,
          placeholders: List<AnnotatedString.Range<Placeholder>>?,
          onPlaceholderLayout: ((List<Rect?>) -> Unit)?,
          selectionController: SelectionController?,
          color: ColorProducer? = null,
          onShowTranslation: ((TextAnnotatedStringNode.TextSubstitutionValue) -> Unit)?,
          autoSize: TextAutoSize?,
      ): Modifier {
          if (selectionController == null) {
              val staticTextModifier =
                  TextAnnotatedStringElement(
                      text = text,
                      style = style,
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 840
    endLine: 874
    sha256: aee62539f21e92409730e6a21b966ded2d8433f54e4d844aaff294f0ed3b74eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      styleProvider = styleProvider,
                      fontFamilyResolver = fontFamilyResolver,
                      defaultLocaleList = defaultLocaleList,
                      onTextLayout = onTextLayout,
                      overflow = overflow,
                      softWrap = softWrap,
                      maxLines = maxLines,
                      minLines = minLines,
                      placeholders = placeholders,
                      onPlaceholderLayout = onPlaceholderLayout,
                      selectionController = null,
                      color = color,
                      autoSize = autoSize,
                      onShowTranslation = onShowTranslation,
                  )
              return this then Modifier /* selection position */ then staticTextModifier
          } else {
              val selectableTextModifier =
                  SelectableTextAnnotatedStringElement(
                      text = text,
                      style = style,
                      styleProvider = styleProvider,
                      fontFamilyResolver = fontFamilyResolver,
                      defaultLocaleList = defaultLocaleList,
                      onTextLayout = onTextLayout,
                      overflow = overflow,
                      softWrap = softWrap,
                      maxLines = maxLines,
                      minLines = minLines,
                      placeholders = placeholders,
                      onPlaceholderLayout = onPlaceholderLayout,
                      selectionController = selectionController,
                      color = color,
                      autoSize = autoSize,
                  )
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 875
    endLine: 909
    sha256: 422041dd27cd7534597e9352ea34a789718e629d071b4789c1085b910245bd82
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return this then selectionController.modifier then selectableTextModifier
          }
      }

      @Composable
      private fun LayoutWithLinksAndInlineContent(
          modifier: Modifier,
          text: AnnotatedString,
          onTextLayout: ((TextLayoutResult) -> Unit)?,
          hasInlineContent: Boolean,
          inlineContent: Map<String, InlineTextContent> = mapOf(),
          style: TextStyle? = null,
          styleProvider: (TextStyleScope.() -> Unit)? = null,
          overflow: TextOverflow,
          softWrap: Boolean,
          maxLines: Int,
          minLines: Int,
          fontFamilyResolver: FontFamily.Resolver,
          defaultLocaleList: LocaleList,
          selectionController: SelectionController?,
          color: ColorProducer? = null,
          onShowTranslation: ((TextAnnotatedStringNode.TextSubstitutionValue) -> Unit)?,
          autoSize: TextAutoSize?,
      ) {
          val textScope =
              if (text.hasLinks()) {
                  remember(text) { TextLinkScope(text) }
              } else null

          // only adds additional span styles to the existing link annotations, doesn't semantically
          // change the text
          val styledText: () -> AnnotatedString =
              if (text.hasLinks()) {
                  remember(text, textScope) { { textScope?.applyAnnotators() ?: text } }
              } else {
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-910-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 910
    endLine: 944
    sha256: e3cabf0369feb3fc67a30bc93596987a34a0271d0dcea5325c7f93b0b235688f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  { text }
              }

          // do the inline content allocs
          val (placeholders, inlineComposables) =
              if (hasInlineContent) {
                  text.resolveInlineContent(inlineContent = inlineContent)
              } else Pair(null, null)

          val measuredPlaceholderPositions =
              if (hasInlineContent) {
                  remember<MutableState<List<Rect?>?>> { mutableStateOf(null) }
              } else null

          val onPlaceholderLayout: ((List<Rect?>) -> Unit)? =
              if (hasInlineContent) {
                  { measuredPlaceholderPositions?.value = it }
              } else null

          if (style != null) {
              BackgroundTextMeasurement(
                  text = text,
                  style = style,
                  fontFamilyResolver = fontFamilyResolver,
                  defaultLocaleList = defaultLocaleList,
                  placeholders = placeholders,
                  softWrap = softWrap,
              )
          }

          Layout(
              content = {
                  textScope?.LinksComposables()
                  inlineComposables?.let { InlineChildren(text = text, inlineContents = it) }
              },
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-945-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 945
    endLine: 979
    sha256: 7909dcef8b07a200e75634d8ed848180a9eceeaf00b0398ad95b91798e82a26d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              modifier =
                  modifier.textModifier(
                      text = styledText(),
                      style = style,
                      styleProvider = styleProvider,
                      onTextLayout = {
                          textScope?.textLayoutResult = it
                          onTextLayout?.invoke(it)
                      },
                      overflow = overflow,
                      softWrap = softWrap,
                      maxLines = maxLines,
                      minLines = minLines,
                      fontFamilyResolver = fontFamilyResolver,
                      defaultLocaleList = defaultLocaleList,
                      placeholders = placeholders,
                      onPlaceholderLayout = onPlaceholderLayout,
                      selectionController = selectionController,
                      color = color,
                      onShowTranslation = onShowTranslation,
                      autoSize = autoSize,
                  ),
              measurePolicy =
                  if (!hasInlineContent) {
                      LinksTextMeasurePolicy(
                          shouldMeasureLinks = { textScope?.let { it.shouldMeasureLinks() } ?: false }
                      )
                  } else {
                      TextMeasurePolicy(
                          shouldMeasureLinks = { textScope?.let { it.shouldMeasureLinks() } ?: false },
                          placements = { measuredPlaceholderPositions?.value },
                      )
                  },
          )
      }
  - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-980-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt
    startLine: 980
    endLine: 1009
    sha256: b2fcf7a81657f97e4e7f6af621660969bd1666f3fb006e685af3f9df2461a138
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      /**
       * This function pre-measures the text on Android platform to warm the platform text layout cache in
       * a background thread before the actual text layout begins.
       */
      @Composable
      @NonRestartableComposable
      internal expect fun BackgroundTextMeasurement(
          text: String,
          style: TextStyle,
          fontFamilyResolver: FontFamily.Resolver,
          defaultLocaleList: LocaleList,
          softWrap: Boolean,
      )

      /**
       * This function pre-measures the text on Android platform to warm the platform text layout cache in
       * a background thread before the actual text layout begins.
       */
      @Composable
      @NonRestartableComposable
      internal expect fun BackgroundTextMeasurement(
          text: AnnotatedString,
          style: TextStyle,
          fontFamilyResolver: FontFamily.Resolver,
          defaultLocaleList: LocaleList,
          placeholders: List<AnnotatedString.Range<Placeholder>>?,
          softWrap: Boolean,
      )
compose:
  id: live-androidx-foundation-foundation-foundation-text-basictext
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.text
  sections:
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-1
      title: androidx.compose.foundation.text BasicText.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-1-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-106
      title: androidx.compose.foundation.text BasicText.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-106-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-141
      title: androidx.compose.foundation.text BasicText.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-141-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-176
      title: androidx.compose.foundation.text BasicText.kt source (lines 176–210)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-176-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-211
      title: androidx.compose.foundation.text BasicText.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-211-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-246
      title: androidx.compose.foundation.text BasicText.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-246-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-281
      title: androidx.compose.foundation.text BasicText.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-281-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-316
      title: androidx.compose.foundation.text BasicText.kt source (lines 316–350)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-316-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-351
      title: androidx.compose.foundation.text BasicText.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-351-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-36
      title: androidx.compose.foundation.text BasicText.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-36-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-386
      title: androidx.compose.foundation.text BasicText.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-386-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-421
      title: androidx.compose.foundation.text BasicText.kt source (lines 421–455)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-421-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-456
      title: androidx.compose.foundation.text BasicText.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-456-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-491
      title: androidx.compose.foundation.text BasicText.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-491-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-526
      title: androidx.compose.foundation.text BasicText.kt source (lines 526–560)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-526-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-561
      title: androidx.compose.foundation.text BasicText.kt source (lines 561–594)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-561-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-595
      title: androidx.compose.foundation.text BasicText.kt source (lines 595–629)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-595-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-630
      title: androidx.compose.foundation.text BasicText.kt source (lines 630–664)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-630-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-665
      title: androidx.compose.foundation.text BasicText.kt source (lines 665–699)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-665-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-700
      title: androidx.compose.foundation.text BasicText.kt source (lines 700–734)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-700-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-71
      title: androidx.compose.foundation.text BasicText.kt source (lines 71–105)
      aliases:
        - androidx.compose.foundation.text.BasicText
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-71-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-735
      title: androidx.compose.foundation.text BasicText.kt source (lines 735–769)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-735-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-770
      title: androidx.compose.foundation.text BasicText.kt source (lines 770–804)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-770-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-805
      title: androidx.compose.foundation.text BasicText.kt source (lines 805–839)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-805-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-840
      title: androidx.compose.foundation.text BasicText.kt source (lines 840–874)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-840-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-875
      title: androidx.compose.foundation.text BasicText.kt source (lines 875–909)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-875-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-910
      title: androidx.compose.foundation.text BasicText.kt source (lines 910–944)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-910-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-945
      title: androidx.compose.foundation.text BasicText.kt source (lines 945–979)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-945-source
      relatedIds: []
    - id: live-androidx-foundation-foundation-foundation-text-basictext-lines-980
      title: androidx.compose.foundation.text BasicText.kt source (lines 980–1009)
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-androidx-foundation-foundation-foundation-text-basictext-lines-980-source
      relatedIds: []
---

# androidx.compose.foundation.text BasicText.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt

## androidx.compose.foundation.text BasicText.kt source (lines 1–35)

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

package androidx.compose.foundation.text

import androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringElement
import androidx.compose.foundation.text.modifiers.SelectionController
import androidx.compose.foundation.text.modifiers.TextAnnotatedStringElement
import androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode
import androidx.compose.foundation.text.modifiers.TextStringSimpleElement
import androidx.compose.foundation.text.modifiers.hasLinks
import androidx.compose.foundation.text.selection.LocalSelectionRegistrar
import androidx.compose.foundation.text.selection.LocalTextSelectionColors
import androidx.compose.foundation.text.selection.SelectionRegistrar
import androidx.compose.foundation.text.selection.hasSelection
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.NonRestartableComposable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.Saver

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 106–140)

        if (selectionRegistrar != null) {
            val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
            val selectableId =
                rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                    selectionRegistrar.nextSelectableId()
                }
            remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                SelectionController(
                    selectableId = selectableId,
                    selectionRegistrar = selectionRegistrar,
                    backgroundSelectionColor = backgroundSelectionColor,
                )
            }
        } else {
            null
        }

    val fontFamilyResolver = LocalFontFamilyResolver.current
    val localeList = LocalLocaleList.current

    BackgroundTextMeasurement(
        text = text,
        style = style,
        fontFamilyResolver = fontFamilyResolver,
        defaultLocaleList = localeList,
        softWrap = softWrap,
    )

    val finalModifier =
        if (selectionController != null || onTextLayout != null || autoSize != null) {
            modifier.textModifier(
                AnnotatedString(text = text),
                style = style,
                onTextLayout = onTextLayout,
                overflow = overflow,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 141–175)

                softWrap = softWrap,
                maxLines = maxLines,
                minLines = minLines,
                fontFamilyResolver = fontFamilyResolver,
                defaultLocaleList = localeList,
                placeholders = null,
                onPlaceholderLayout = null,
                selectionController = selectionController,
                color = color,
                onShowTranslation = null,
                autoSize = autoSize,
            )
        } else {
            modifier then
                TextStringSimpleElement(
                    text = text,
                    style = style,
                    fontFamilyResolver = fontFamilyResolver,
                    defaultLocaleList = localeList,
                    overflow = overflow,
                    softWrap = softWrap,
                    maxLines = maxLines,
                    minLines = minLines,
                    color = color,
                )
        }
    Layout(finalModifier, EmptyMeasurePolicy)
}

/**
 * Displays text with semantics and accessibility information.
 *
 * For theme integration, use Material [androidx.compose.material3.Text].
 *
 * @param text text to display

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 176–210)

 * @param modifier for this layout
 * @param style configuration
 * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
 *   parameter contains paragraph information, size, baselines, and other details. Use this callback
 *   to add decoration or functionality, such as drawing selection
 * @param overflow handling visual overflow
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow]
 * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
 *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
 * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
 * @param inlineContent map storing [InlineTextContent] composables that replace specified ranges of
 *   text, embedding them in the layout
 * @param color to override style color
 * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
 *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
 *   defined in [style]
 * @sample androidx.compose.foundation.samples.TextAutoSizeBasicTextSample
 */
@Composable
public fun BasicText(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    color: ColorProducer? = null,
    autoSize: TextAutoSize? = null,
) {
    validateMinMaxLines(minLines = minLines, maxLines = maxLines)

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 211–245)

    val selectionRegistrar = LocalSelectionRegistrar.current
    val selectionController =
        if (selectionRegistrar != null) {
            val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
            val selectableId =
                rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                    selectionRegistrar.nextSelectableId()
                }
            remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                SelectionController(
                    selectableId = selectableId,
                    selectionRegistrar = selectionRegistrar,
                    backgroundSelectionColor = backgroundSelectionColor,
                )
            }
        } else {
            null
        }
    val hasInlineContent = text.hasInlineContent()
    val hasLinks = text.hasLinks()

    val fontFamilyResolver = LocalFontFamilyResolver.current
    val localeList = LocalLocaleList.current

    if (!hasInlineContent && !hasLinks) {
        BackgroundTextMeasurement(
            text = text,
            style = style,
            fontFamilyResolver = fontFamilyResolver,
            defaultLocaleList = localeList,
            placeholders = null,
            softWrap = softWrap,
        )

        // this is the same as text: String, use all the early exits

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 246–280)

        Layout(
            modifier =
                modifier.textModifier(
                    text = text,
                    style = style,
                    onTextLayout = onTextLayout,
                    overflow = overflow,
                    softWrap = softWrap,
                    maxLines = maxLines,
                    minLines = minLines,
                    fontFamilyResolver = fontFamilyResolver,
                    defaultLocaleList = localeList,
                    placeholders = null,
                    onPlaceholderLayout = null,
                    selectionController = selectionController,
                    color = color,
                    onShowTranslation = null,
                    autoSize = autoSize,
                ),
            EmptyMeasurePolicy,
        )
    } else {
        // takes into account text substitution (for translation) that is happening inside the
        // TextAnnotatedStringNode
        var displayedText by remember(text) { mutableStateOf(text) }

        LayoutWithLinksAndInlineContent(
            modifier = modifier,
            text = displayedText,
            onTextLayout = onTextLayout,
            hasInlineContent = hasInlineContent,
            inlineContent = inlineContent,
            style = style,
            overflow = overflow,
            softWrap = softWrap,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 281–315)

            maxLines = maxLines,
            minLines = minLines,
            fontFamilyResolver = fontFamilyResolver,
            defaultLocaleList = localeList,
            selectionController = selectionController,
            color = color,
            onShowTranslation = { substitutionValue ->
                displayedText =
                    if (substitutionValue.isShowingSubstitution) {
                        substitutionValue.substitution
                    } else {
                        substitutionValue.original
                    }
            },
            autoSize = autoSize,
        )
    }
}

/**
 * Displays text with style resolved dynamically from a lambda.
 *
 * For theme integration, use Material [androidx.compose.material3.Text].
 *
 * Use this overload when style depends on state and changes frequently. Using a lambda prevents
 * full recomposition when the style changes, deferring evaluation to the layout phase:
 * - State reads within [styleProvider] are observed during measurement and trigger a measure pass
 *   when invalidated, skipping recomposition.
 * - Changes to layout-affecting attributes recalculate text layout and invalidate drawing, whereas
 *   changes to draw-only attributes reuse the cached text layout and invalidate drawing.
 *
 * @param text text to display
 * @param styleProvider lambda with [TextStyleScope] receiver configuring text attributes
 * @param modifier for this layout
 * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 316–350)

 *   parameter contains paragraph information, size, baselines, and other details. Use this callback
 *   to add decoration or functionality, such as drawing selection. Note that when using this
 *   overload, [TextLayoutResult.layoutInput]'s [TextStyle] is not guaranteed to contain the real
 *   draw attributes configured in [styleProvider]
 * @param overflow handling visual overflow
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow]
 * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
 *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
 * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
 * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
 *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
 *   defined in [styleProvider]
 */
@Composable
public fun BasicText(
    text: String,
    styleProvider: TextStyleScope.() -> Unit,
    modifier: Modifier = Modifier,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    autoSize: TextAutoSize? = null,
) {
    validateMinMaxLines(minLines = minLines, maxLines = maxLines)
    val selectionRegistrar = LocalSelectionRegistrar.current
    val selectionController =
        if (selectionRegistrar != null) {
            val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
            val selectableId =
                rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                    selectionRegistrar.nextSelectableId()

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 351–385)

                }
            remember(selectableId, selectionRegistrar, backgroundSelectionColor) {
                SelectionController(
                    selectableId = selectableId,
                    selectionRegistrar = selectionRegistrar,
                    backgroundSelectionColor = backgroundSelectionColor,
                )
            }
        } else {
            null
        }

    val fontFamilyResolver = LocalFontFamilyResolver.current
    val localeList = LocalLocaleList.current

    val finalModifier =
        if (selectionController != null || onTextLayout != null || autoSize != null) {
            modifier.textModifier(
                AnnotatedString(text = text),
                styleProvider = styleProvider,
                onTextLayout = onTextLayout,
                overflow = overflow,
                softWrap = softWrap,
                maxLines = maxLines,
                minLines = minLines,
                fontFamilyResolver = fontFamilyResolver,
                defaultLocaleList = localeList,
                placeholders = null,
                onPlaceholderLayout = null,
                selectionController = selectionController,
                onShowTranslation = null,
                autoSize = autoSize,
            )
        } else {
            modifier then

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 36–70)

import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.ColorProducer
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.platform.LocalFontFamilyResolver
import androidx.compose.ui.platform.LocalLocaleList
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.Placeholder
import androidx.compose.ui.text.TextLayoutResult
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.TextStyleScope
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.intl.LocaleList
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Constraints.Companion.fitPrioritizingWidth
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.util.fastFilter
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastMapIndexedNotNull
import androidx.compose.ui.util.fastRoundToInt
import kotlin.math.floor

/**
 * Displays text with semantics and accessibility information.
 *
 * For theme integration, use Material [androidx.compose.material3.Text].
 *

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 386–420)

                TextStringSimpleElement(
                    text = text,
                    styleProvider = styleProvider,
                    fontFamilyResolver = fontFamilyResolver,
                    defaultLocaleList = localeList,
                    overflow = overflow,
                    softWrap = softWrap,
                    maxLines = maxLines,
                    minLines = minLines,
                )
        }
    Layout(finalModifier, EmptyMeasurePolicy)
}

/**
 * Displays text with style resolved dynamically from a lambda.
 *
 * For theme integration, use Material [androidx.compose.material3.Text].
 *
 * Use this overload when style depends on state and changes frequently. Using a lambda prevents
 * full recomposition when the style changes, deferring evaluation to the layout phase:
 * - State reads within [styleProvider] are observed during measurement and trigger a measure pass
 *   when invalidated, skipping recomposition.
 * - Changes to layout-affecting attributes recalculate text layout and invalidate drawing, whereas
 *   changes to draw-only attributes reuse the cached text layout and invalidate drawing.
 *
 * @param text text to display
 * @param styleProvider lambda with [TextStyleScope] receiver configuring text attributes
 * @param modifier for this layout
 * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
 *   parameter contains paragraph information, size, baselines, and other details. Use this callback
 *   to add decoration or functionality, such as drawing selection. Note that when using this
 *   overload, [TextLayoutResult.layoutInput]'s [TextStyle] is not guaranteed to contain the real
 *   draw attributes configured in [styleProvider]
 * @param overflow handling visual overflow

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 421–455)

 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow]
 * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
 *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
 * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
 * @param inlineContent map storing [InlineTextContent] composables that replace specified ranges of
 *   text, embedding them in the layout
 * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
 *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
 *   defined in [styleProvider]
 */
@Composable
public fun BasicText(
    text: AnnotatedString,
    styleProvider: TextStyleScope.() -> Unit,
    modifier: Modifier = Modifier,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    autoSize: TextAutoSize? = null,
) {
    validateMinMaxLines(minLines = minLines, maxLines = maxLines)
    val selectionRegistrar = LocalSelectionRegistrar.current
    val selectionController =
        if (selectionRegistrar != null) {
            val backgroundSelectionColor = LocalTextSelectionColors.current.backgroundColor
            val selectableId =
                rememberSaveable(selectionRegistrar, saver = selectionIdSaver(selectionRegistrar)) {
                    selectionRegistrar.nextSelectableId()
                }
            remember(selectableId, selectionRegistrar, backgroundSelectionColor) {

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 456–490)

                SelectionController(
                    selectableId = selectableId,
                    selectionRegistrar = selectionRegistrar,
                    backgroundSelectionColor = backgroundSelectionColor,
                )
            }
        } else {
            null
        }
    val hasInlineContent = text.hasInlineContent()
    val hasLinks = text.hasLinks()

    val fontFamilyResolver = LocalFontFamilyResolver.current
    val localeList = LocalLocaleList.current

    if (!hasInlineContent && !hasLinks) {
        // this is the same as text: String, use all the early exits
        Layout(
            modifier =
                modifier.textModifier(
                    text = text,
                    styleProvider = styleProvider,
                    onTextLayout = onTextLayout,
                    overflow = overflow,
                    softWrap = softWrap,
                    maxLines = maxLines,
                    minLines = minLines,
                    fontFamilyResolver = fontFamilyResolver,
                    defaultLocaleList = localeList,
                    placeholders = null,
                    onPlaceholderLayout = null,
                    selectionController = selectionController,
                    onShowTranslation = null,
                    autoSize = autoSize,
                ),

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 491–525)

            EmptyMeasurePolicy,
        )
    } else {
        // takes into account text substitution (for translation) that is happening inside the
        // TextAnnotatedStringNode
        var displayedText by remember(text) { mutableStateOf(text) }

        LayoutWithLinksAndInlineContent(
            modifier = modifier,
            text = displayedText,
            onTextLayout = onTextLayout,
            hasInlineContent = hasInlineContent,
            inlineContent = inlineContent,
            styleProvider = styleProvider,
            overflow = overflow,
            softWrap = softWrap,
            maxLines = maxLines,
            minLines = minLines,
            fontFamilyResolver = fontFamilyResolver,
            defaultLocaleList = localeList,
            selectionController = selectionController,
            onShowTranslation = { substitutionValue ->
                displayedText =
                    if (substitutionValue.isShowingSubstitution) {
                        substitutionValue.substitution
                    } else {
                        substitutionValue.original
                    }
            },
            autoSize = autoSize,
        )
    }
}

/**

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 526–560)

 * Basic element that displays text and provides semantics / accessibility information. Typically
 * you will instead want to use [androidx.compose.material.Text], which is a higher level Text
 * element that contains semantics and consumes style information from a theme.
 *
 * @param text The text to be displayed.
 * @param modifier [Modifier] to apply to this layout node.
 * @param style Style configuration for the text such as color, font, line height etc.
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
 * @param overflow How visual overflow should be handled.
 * @param softWrap Whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow].
 * @param maxLines An optional maximum number of lines for the text to span, wrapping if necessary.
 *   If the text exceeds the given number of lines, it will be truncated according to [overflow] and
 *   [softWrap]. It is required that 1 <= [minLines] <= [maxLines].
 * @param minLines The minimum height in terms of minimum number of visible lines. It is required
 *   that 1 <= [minLines] <= [maxLines].
 * @param color Overrides the text color provided in [style]
 */
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: String,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    color: ColorProducer? = null,
) {

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 561–594)

    BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color)
}

/**
 * Basic element that displays text and provides semantics / accessibility information. Typically
 * you will instead want to use [androidx.compose.material.Text], which is a higher level Text
 * element that contains semantics and consumes style information from a theme.
 *
 * @param text The text to be displayed.
 * @param modifier [Modifier] to apply to this layout node.
 * @param style Style configuration for the text such as color, font, line height etc.
 * @param onTextLayout Callback that is executed when a new text layout is calculated. A
 *   [TextLayoutResult] object that callback provides contains paragraph information, size of the
 *   text, baselines and other details. The callback can be used to add additional decoration or
 *   functionality to the text. For example, to draw selection around the text.
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
 * @param color Overrides the text color provided in [style]
 */
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 595–629)

    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    color: ColorProducer? = null,
) {
    BasicText(
        text,
        modifier,
        style,
        onTextLayout,
        overflow,
        softWrap,
        maxLines,
        minLines,
        inlineContent,
        color,
    )
}

@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: String,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
) {
    BasicText(
        text = text,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-595-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 630–664)

        modifier = modifier,
        style = style,
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        minLines = 1,
        maxLines = maxLines,
    )
}

@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
) {
    BasicText(
        text = text,
        modifier = modifier,
        style = style,
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = 1,
        inlineContent = inlineContent,
    )
}


Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-630-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 665–699)

@Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: String,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
): Unit = BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines)

@Deprecated("Maintained for binary compat", level = DeprecationLevel.HIDDEN)
@Composable
public fun BasicText(
    text: AnnotatedString,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
): Unit =
    BasicText(
        text = text,
        modifier = modifier,
        style = style,
        onTextLayout = onTextLayout,
        overflow = overflow,
        softWrap = softWrap,
        maxLines = maxLines,
        minLines = minLines,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-665-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 700–734)

        inlineContent = inlineContent,
    )

/** A custom saver that won't save if no selection is active. */
private fun selectionIdSaver(selectionRegistrar: SelectionRegistrar?) =
    Saver<Long, Long>(
        save = { if (selectionRegistrar.hasSelection(it)) it else null },
        restore = { it },
    )

private object EmptyMeasurePolicy : MeasurePolicy {
    private val placementBlock: Placeable.PlacementScope.() -> Unit = {}

    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        return layout(constraints.maxWidth, constraints.maxHeight, placementBlock = placementBlock)
    }
}

/** Measure policy for inline content and links */
private class TextMeasurePolicy(
    private val shouldMeasureLinks: () -> Boolean,
    private val placements: () -> List<Rect?>?,
) : MeasurePolicy {
    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        // inline content
        val inlineContentMeasurables = measurables.fastFilter {
            it.parentData !is TextRangeLayoutParentData
        }
        val inlineContentToPlace =

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-700-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 71–105)

 * @param text text to display
 * @param modifier for this layout
 * @param style configuration
 * @param onTextLayout callback run when a new text layout is calculated. The [TextLayoutResult]
 *   parameter contains paragraph information, size, baselines, and other details. Use this callback
 *   to add decoration or functionality, such as drawing selection
 * @param overflow handling visual overflow
 * @param softWrap whether to wrap text at soft line breaks. When true, wraps text to the next line
 *   when it exceeds layout bounds. When false, positions text as if there was unlimited horizontal
 *   space, which may cause it to clip or overflow according to [overflow]
 * @param maxLines maximum number of visible lines. If the text exceeds this value, it is truncated
 *   according to [overflow] and [softWrap]. Requires 1 <= [minLines] <= [maxLines]
 * @param minLines minimum number of visible lines. Requires 1 <= [minLines] <= [maxLines]
 * @param color to override style color
 * @param autoSize configuration for automatic font size adjustment to fit available space. Warning:
 *   Auto-sizing runs multiple layout passes and may affect performance. Takes precedence over sizes
 *   defined in [style]
 * @sample androidx.compose.foundation.samples.TextAutoSizeBasicTextSample
 */
@Composable
public fun BasicText(
    text: String,
    modifier: Modifier = Modifier,
    style: TextStyle = TextStyle.Default,
    onTextLayout: ((TextLayoutResult) -> Unit)? = null,
    overflow: TextOverflow = TextOverflow.Clip,
    softWrap: Boolean = true,
    maxLines: Int = Int.MAX_VALUE,
    minLines: Int = 1,
    color: ColorProducer? = null,
    autoSize: TextAutoSize? = null,
) {
    validateMinMaxLines(minLines = minLines, maxLines = maxLines)
    val selectionRegistrar = LocalSelectionRegistrar.current
    val selectionController =

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 735–769)

            placements()?.fastMapIndexedNotNull { index, rect ->
                // PlaceholderRect will be null if it's ellipsized. In that case, the corresponding
                // inline children won't be measured or placed.
                rect?.let {
                    Pair(
                        inlineContentMeasurables[index].measure(
                            Constraints(
                                maxWidth = floor(it.width).toInt(),
                                maxHeight = floor(it.height).toInt(),
                            )
                        ),
                        IntOffset(it.left.fastRoundToInt(), it.top.fastRoundToInt()),
                    )
                }
            }

        // links
        val linksMeasurables = measurables.fastFilter { it.parentData is TextRangeLayoutParentData }
        val linksToPlace =
            measureWithTextRangeMeasureConstraints(
                measurables = linksMeasurables,
                shouldMeasureLinks = shouldMeasureLinks,
            )

        return layout(constraints.maxWidth, constraints.maxHeight) {
            // inline content
            inlineContentToPlace?.fastForEach { (placeable, position) -> placeable.place(position) }
            // links
            linksToPlace?.fastForEach { (placeable, measureResult) ->
                placeable.place(measureResult?.invoke() ?: IntOffset.Zero)
            }
        }
    }
}


Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-735-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 770–804)

/** Measure policy for links only */
private class LinksTextMeasurePolicy(private val shouldMeasureLinks: () -> Boolean) :
    MeasurePolicy {
    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        return layout(constraints.maxWidth, constraints.maxHeight) {
            val linksToPlace =
                measureWithTextRangeMeasureConstraints(
                    measurables = measurables,
                    shouldMeasureLinks = shouldMeasureLinks,
                )
            linksToPlace?.fastForEach { (placeable, measureResult) ->
                placeable.place(measureResult?.invoke() ?: IntOffset.Zero)
            }
        }
    }
}

private fun measureWithTextRangeMeasureConstraints(
    measurables: List<Measurable>,
    shouldMeasureLinks: () -> Boolean,
): List<Pair<Placeable, (() -> IntOffset)?>>? {
    return if (shouldMeasureLinks()) {
        val textRangeLayoutMeasureScope = TextRangeLayoutMeasureScope()
        measurables.fastMapIndexedNotNull { _, measurable ->
            val rangeMeasurePolicy =
                (measurable.parentData as TextRangeLayoutParentData).measurePolicy
            val rangeMeasureResult =
                with(rangeMeasurePolicy) { textRangeLayoutMeasureScope.measure() }
            val placeable =
                measurable.measure(
                    fitPrioritizingWidth(
                        minWidth = rangeMeasureResult.width,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-770-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 805–839)

                        maxWidth = rangeMeasureResult.width,
                        minHeight = rangeMeasureResult.height,
                        maxHeight = rangeMeasureResult.height,
                    )
                )
            Pair(placeable, rangeMeasureResult.place)
        }
    } else {
        null
    }
}

private fun Modifier.textModifier(
    text: AnnotatedString,
    style: TextStyle? = null,
    styleProvider: (TextStyleScope.() -> Unit)? = null,
    onTextLayout: ((TextLayoutResult) -> Unit)?,
    overflow: TextOverflow,
    softWrap: Boolean,
    maxLines: Int,
    minLines: Int,
    fontFamilyResolver: FontFamily.Resolver,
    defaultLocaleList: LocaleList,
    placeholders: List<AnnotatedString.Range<Placeholder>>?,
    onPlaceholderLayout: ((List<Rect?>) -> Unit)?,
    selectionController: SelectionController?,
    color: ColorProducer? = null,
    onShowTranslation: ((TextAnnotatedStringNode.TextSubstitutionValue) -> Unit)?,
    autoSize: TextAutoSize?,
): Modifier {
    if (selectionController == null) {
        val staticTextModifier =
            TextAnnotatedStringElement(
                text = text,
                style = style,

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 840–874)

                styleProvider = styleProvider,
                fontFamilyResolver = fontFamilyResolver,
                defaultLocaleList = defaultLocaleList,
                onTextLayout = onTextLayout,
                overflow = overflow,
                softWrap = softWrap,
                maxLines = maxLines,
                minLines = minLines,
                placeholders = placeholders,
                onPlaceholderLayout = onPlaceholderLayout,
                selectionController = null,
                color = color,
                autoSize = autoSize,
                onShowTranslation = onShowTranslation,
            )
        return this then Modifier /* selection position */ then staticTextModifier
    } else {
        val selectableTextModifier =
            SelectableTextAnnotatedStringElement(
                text = text,
                style = style,
                styleProvider = styleProvider,
                fontFamilyResolver = fontFamilyResolver,
                defaultLocaleList = defaultLocaleList,
                onTextLayout = onTextLayout,
                overflow = overflow,
                softWrap = softWrap,
                maxLines = maxLines,
                minLines = minLines,
                placeholders = placeholders,
                onPlaceholderLayout = onPlaceholderLayout,
                selectionController = selectionController,
                color = color,
                autoSize = autoSize,
            )

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 875–909)

        return this then selectionController.modifier then selectableTextModifier
    }
}

@Composable
private fun LayoutWithLinksAndInlineContent(
    modifier: Modifier,
    text: AnnotatedString,
    onTextLayout: ((TextLayoutResult) -> Unit)?,
    hasInlineContent: Boolean,
    inlineContent: Map<String, InlineTextContent> = mapOf(),
    style: TextStyle? = null,
    styleProvider: (TextStyleScope.() -> Unit)? = null,
    overflow: TextOverflow,
    softWrap: Boolean,
    maxLines: Int,
    minLines: Int,
    fontFamilyResolver: FontFamily.Resolver,
    defaultLocaleList: LocaleList,
    selectionController: SelectionController?,
    color: ColorProducer? = null,
    onShowTranslation: ((TextAnnotatedStringNode.TextSubstitutionValue) -> Unit)?,
    autoSize: TextAutoSize?,
) {
    val textScope =
        if (text.hasLinks()) {
            remember(text) { TextLinkScope(text) }
        } else null

    // only adds additional span styles to the existing link annotations, doesn't semantically
    // change the text
    val styledText: () -> AnnotatedString =
        if (text.hasLinks()) {
            remember(text, textScope) { { textScope?.applyAnnotators() ?: text } }
        } else {

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 910–944)

            { text }
        }

    // do the inline content allocs
    val (placeholders, inlineComposables) =
        if (hasInlineContent) {
            text.resolveInlineContent(inlineContent = inlineContent)
        } else Pair(null, null)

    val measuredPlaceholderPositions =
        if (hasInlineContent) {
            remember<MutableState<List<Rect?>?>> { mutableStateOf(null) }
        } else null

    val onPlaceholderLayout: ((List<Rect?>) -> Unit)? =
        if (hasInlineContent) {
            { measuredPlaceholderPositions?.value = it }
        } else null

    if (style != null) {
        BackgroundTextMeasurement(
            text = text,
            style = style,
            fontFamilyResolver = fontFamilyResolver,
            defaultLocaleList = defaultLocaleList,
            placeholders = placeholders,
            softWrap = softWrap,
        )
    }

    Layout(
        content = {
            textScope?.LinksComposables()
            inlineComposables?.let { InlineChildren(text = text, inlineContents = it) }
        },

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-910-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 945–979)

        modifier =
            modifier.textModifier(
                text = styledText(),
                style = style,
                styleProvider = styleProvider,
                onTextLayout = {
                    textScope?.textLayoutResult = it
                    onTextLayout?.invoke(it)
                },
                overflow = overflow,
                softWrap = softWrap,
                maxLines = maxLines,
                minLines = minLines,
                fontFamilyResolver = fontFamilyResolver,
                defaultLocaleList = defaultLocaleList,
                placeholders = placeholders,
                onPlaceholderLayout = onPlaceholderLayout,
                selectionController = selectionController,
                color = color,
                onShowTranslation = onShowTranslation,
                autoSize = autoSize,
            ),
        measurePolicy =
            if (!hasInlineContent) {
                LinksTextMeasurePolicy(
                    shouldMeasureLinks = { textScope?.let { it.shouldMeasureLinks() } ?: false }
                )
            } else {
                TextMeasurePolicy(
                    shouldMeasureLinks = { textScope?.let { it.shouldMeasureLinks() } ?: false },
                    placements = { measuredPlaceholderPositions?.value },
                )
            },
    )
}

Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-945-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)

## androidx.compose.foundation.text BasicText.kt source (lines 980–1009)


/**
 * This function pre-measures the text on Android platform to warm the platform text layout cache in
 * a background thread before the actual text layout begins.
 */
@Composable
@NonRestartableComposable
internal expect fun BackgroundTextMeasurement(
    text: String,
    style: TextStyle,
    fontFamilyResolver: FontFamily.Resolver,
    defaultLocaleList: LocaleList,
    softWrap: Boolean,
)

/**
 * This function pre-measures the text on Android platform to warm the platform text layout cache in
 * a background thread before the actual text layout begins.
 */
@Composable
@NonRestartableComposable
internal expect fun BackgroundTextMeasurement(
    text: AnnotatedString,
    style: TextStyle,
    fontFamilyResolver: FontFamily.Resolver,
    defaultLocaleList: LocaleList,
    placeholders: List<AnnotatedString.Range<Placeholder>>?,
    softWrap: Boolean,
)


Sources: [live-androidx-foundation-foundation-foundation-text-basictext-lines-980-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/foundation/foundation/src/commonMain/kotlin/androidx/compose/foundation/text/BasicText.kt)
