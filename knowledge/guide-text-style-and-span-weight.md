---
type: reference
title: "Guidance: Apply font weight to whole text or individual spans"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-text-style-text-bold-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#bold
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: e150982148dac36973f296ad5a90fa09253a18d2089781d5c881df939972bc48
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the fontWeight parameter to bold text (or set another FontWeight).

      @Composable
      fun BoldText() {
          Text("Hello World", fontWeight = FontWeight.Bold)
      }TextSnippets.kt
  - id: live-compose-guide-text-style-text-multiple-styles-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#multiple-styles
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 582b4d390743592df297839860090ec60ba6b41291b2c53538962d0bd148f96b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To set different styles within the same Text composable, use an AnnotatedString, a string that can be annotated with styles of arbitrary annotations.

      AnnotatedString is a data class containing:

      A Text value

      A List of SpanStyleRange, equivalent to inline styling with position range within the text value

      A List of ParagraphStyleRange, specifying text alignment, text direction, line height, and text indent styling

      TextStyle is for use in the Text composable, whereas SpanStyle and ParagraphStyle is for use in AnnotatedString. For more information about multiple styles in a paragraph, see Add multiple styles in a paragraph.

      AnnotatedString has a type-safe builder to make it easier to create: buildAnnotatedString.

      @Composable
      fun MultipleStylesInText() {
          Text(
              buildAnnotatedString {
                  withStyle(style = SpanStyle(color = Color.Blue)) {
                      append("H")
                  }
                  append("ello ")

                  withStyle(style = SpanStyle(fontWeight = FontWeight.Bold, color = Color.Red)) {
                      append("W")
                  }
                  append("orld")
              }
          )
      }TextSnippets.kt
compose:
  id: guide-text-style-and-span-weight
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text.TextStyle
  sections:
    - id: guide-text-style-and-span-weight
      title: "Guidance: Apply font weight to whole text or individual spans"
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.ParagraphStyle
        - androidx.compose.ui.text.font.FontWeight
        - androidx.compose.ui.text.buildAnnotatedString
        - fontWeight
        - bold text
        - 텍스트 스타일
        - 글자 굵기
        - 부분 스타일
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-bold-source
        - live-compose-guide-text-style-text-multiple-styles-source
      relatedIds:
        - live-compose-guide-text-style-text-bold
        - live-compose-guide-text-style-text-multiple-styles
---

# Guidance: Apply font weight to whole text or individual spans

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Apply font weight to whole text or individual spans

Guidance: Set Text fontWeight to FontWeight.Bold, or another FontWeight, to style its text. For different styles within one Text, build an AnnotatedString and wrap selected appended ranges with withStyle(SpanStyle(...)); the example makes one letter bold and red while leaving surrounding letters outside that span. TextStyle is for Text, while SpanStyle and ParagraphStyle belong in AnnotatedString. Limitation: use SpanStyle for inline ranges and ParagraphStyle for paragraph properties such as alignment, direction, line height, and indent.

Sources: [live-compose-guide-text-style-text-bold-source](https://developer.android.com/develop/ui/compose/text/style-text#bold), [live-compose-guide-text-style-text-multiple-styles-source](https://developer.android.com/develop/ui/compose/text/style-text#multiple-styles)
