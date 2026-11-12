---
type: reference
title: Style text
description: "Public source: https://developer.android.com/develop/ui/compose/text/style-text"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-text-style-text-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#additional-resources
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 4ebebfd98fc2a503899159b1f2f9ae836ac6a10e1aed2658817a92ec6cac7b8e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Brushing Up on Compose Text Coloring

      Animating brush Text coloring in Compose

      Support multiple links in a single string of text
  - id: live-compose-guide-text-style-text-apply-brush-to-span-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#apply-brush-to-span
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 6c2d2264664c63fbe890d42740b775a25637454d80ba6cbf6b05c1a209313be4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you only want to apply a brush to parts of your text, use buildAnnotatedString and the SpanStyle API, along with your brush and gradient of choice.

      Text(
          text = buildAnnotatedString {
              append("Do not allow people to dim your shine\n")
              withStyle(
                  SpanStyle(
                      brush = Brush.linearGradient(
                          colors = rainbowColors
                      )
                  )
              ) {
                  append("because they are blinded.")
              }
              append("\nTell them to put some sunglasses on.")
          }
      )TextSnippets.kt

      Figure 4.

      Using a default brush with

      linearGradient

      as a style for

      Text

      .
  - id: live-compose-guide-text-style-text-apply-marquee-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#apply-marquee
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 2310537d45aa15c9514ac0604e236f0683000821456f4086d963dfeaa1b013b3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      You can apply the basicMarquee modifier to any composable to produce an animated scrolling effect. The marquee effect occurs if the content is too wide to fit in the available constraints. By default, basicMarquee has certain configurations (such as velocity and initial delay) set, but you can modify these parameters to customize the effect.

      The following snippet implements a basic marquee effect on a Text composable:

      @Composable
      fun BasicMarqueeSample() {
          // Marquee only animates when the content doesn't fit in the max width.
          Column(Modifier.width(400.dp)) {
              Text(
                  "Learn about why it's great to use Jetpack Compose",
                  modifier = Modifier.basicMarquee(),
                  fontSize = 50.sp
              )
          }
      }TextSnippets.kt

      Figure 6. The basicMarquee modifier applied to text.
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
  - id: live-compose-guide-text-style-text-brush-integrations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#brush-integrations
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: a88d09e458a0204a479084b051cb9acd346f7dd88c75a48357360900b5409eb5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Since you can use Brush alongside both TextStyle and SpanStyle, integration with TextField and buildAnnotatedString is seamless.

      For more information about using the brush API within a TextField, see Style input with Brush API.
  - id: live-compose-guide-text-style-text-brush-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#brush
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 98a3a8a3fabee8954e94a7e8cf6db878e7ede9a6741d8052221d2d6c37581017
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: To enable more advanced text styling, you can use the Brush API with TextStyle and SpanStyle. In any place where you would typically use TextStyle or SpanStyle, you can now also use Brush.
  - id: live-compose-guide-text-style-text-change-color-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#change-color
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 80e7f22d1fdbf54e44640afee70cc91366e01753db472648ff714105669b4cbe
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      @Composable
      fun BlueText() {
          Text("Hello World", color = Color.Blue)
      }TextSnippets.kt
  - id: live-compose-guide-text-style-text-change-size-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#change-size
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 1320d04b92636dd63da49306682919238381d0cd401b1075aa26bb4d3456f7d1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      @Composable
      fun BigText() {
          Text("Hello World", fontSize = 30.sp)
      }TextSnippets.kt
  - id: live-compose-guide-text-style-text-common-stylings-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#common-stylings
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: cf2e138cebfa65deb983d42cacee010827613217a0dae23c632f4c973332f414
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The following sections describe common ways to style your text.
  - id: live-compose-guide-text-style-text-display-html-with-links-in-text-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#display_html_with_links_in_text
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 16240a919cddb20e3f275a4b6ab3e6100a32342a446e9682a2e65ba678a4c869
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Use AnnotatedString.fromHtml() to display HTML-formatted text with clickable links in your Jetpack Compose application. This function converts a string with HTML tags into an AnnotatedString, allowing for styling and link handling.
  - id: live-compose-guide-text-style-text-example-html-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#example%3A-html
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 8c18a26210325bd344abe4eab9165c7cbc5f70d970f6f9d8c41cf104243e7544
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This snippet renders HTML-formatted text with a link, applying specific styling to the link:

      @Composable
      fun AnnotatedHtmlStringWithLink(
          modifier: Modifier = Modifier,
          htmlText: String = """
             <h1>Jetpack Compose</h1>
             <p>
                 Build <b>better apps</b> faster with <a href="https://www.android.com">Jetpack Compose</a>
             </p>
          """.trimIndent()
      ) {
          Text(
              AnnotatedString.fromHtml(
                  htmlText,
                  linkStyles = TextLinkStyles(
                      style = SpanStyle(
                          textDecoration = TextDecoration.Underline,
                          fontStyle = FontStyle.Italic,
                          color = Color.Blue
                      )
                  )
              ),
              modifier
          )
      }HtmlStyling.kt
  - id: live-compose-guide-text-style-text-italic-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#italic
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 31c47e3a5ea8a1b1c5996ecc9f89e83423f16862769a9690bdce52376882ee9d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use the fontStyle parameter to italicize text (or set another FontStyle).

      @Composable
      fun ItalicText() {
          Text("Hello World", fontStyle = FontStyle.Italic)
      }TextSnippets.kt
  - id: live-compose-guide-text-style-text-key-points-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#key-points
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 42c0a7e3950743b1914fe252bacd99d3806519818b9098b7218a083af19bba96
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      AnnotatedString.fromHtml() converts the htmlText string into an AnnotatedString. The linkStyles parameter customizes link appearance.

      TextLinkStyles defines the style for links within the HTML. SpanStyle sets text decoration, font style, and color for the links.

      The Text composable displays the resulting AnnotatedString.
  - id: live-compose-guide-text-style-text-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#main-content
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: cd9fc728a42aadf2cd273a7e075c2ff09777aa45bdc8bf7c136e25c3e0197326
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The Text composable has multiple optional parameters to style its content. Below, we’ve listed parameters that cover the most common use cases with text. For all the parameters of Text, see the Compose Text source code.

      Whenever you set one of these parameters, you’re applying the style to the whole text value. If you need to apply multiple styles within the same line or paragraphs, see the section on multiple inline styles.
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
  - id: live-compose-guide-text-style-text-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#recommended_for_you
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 2899ef6c4b7121c4b9b348d3eb43ff1c8de8a15b17705fa5f1b70d55476535db
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Style paragraph

      Material Design 2 in Compose

      Graphics Modifiers
  - id: live-compose-guide-text-style-text-result-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#result
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: c0d9653029ca1f5e51bd91321ecc60309c0c0a96019df7739fe3418fde411dc3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This snippet enables "Jetpack Compose" as a clickable link, styled with blue color, underlined, and italicized:

      Figure 2.

      A heading and paragraph, where 'Jetpack Compose' in the paragraph is a clickable, styled link.
  - id: live-compose-guide-text-style-text-shadow-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#shadow
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 3b1942d2d6645498c3b3322f48b8246b347ee8ad63e242093db1fae3b036559c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The style parameter lets you set an object of type TextStyle and configure multiple parameters, for example shadow. Shadow receives a color for the shadow, the offset, or where it is located in respect of the Text and the blur radius which is how blurry it looks.

      @Composable
      fun TextShadow() {
          val offset = Offset(5.0f, 10.0f)
          Text(
              text = "Hello world!",
              style = TextStyle(
                  fontSize = 24.sp,
                  shadow = Shadow(
                      color = Color.Blue, offset = offset, blurRadius = 3f
                  )
              )
          )
      }TextSnippets.kt
  - id: live-compose-guide-text-style-text-text-opacity-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#text-opacity
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 6caeeec1dea05be482f05149bd1c3d12d6587fcb2a58f4e9c3c757aa0e068577
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To adjust the opacity of a particular span of text, use SpanStyle's optional alpha parameter. Use the same brush for both parts of a text, and change the alpha parameter in the corresponding span. In the code sample, the first span of text displays at half opacity (alpha =.5f) while the second displays at full opacity (alpha = 1f).

      val brush = Brush.linearGradient(colors = rainbowColors)

      buildAnnotatedString {
          withStyle(
              SpanStyle(
                  brush = brush, alpha = .5f
              )
          ) {
              append("Text in ")
          }
          withStyle(
              SpanStyle(
                  brush = brush, alpha = 1f
              )
          ) {
              append("Compose ❤️")
          }
      }TextSnippets.kt

      Figure 5.

      Using

      buildAnnotatedString

      and

      SpanStyle

      ’s alpha parameter, along with

      linearGradient

      to add opacity to a span of text.
  - id: live-compose-guide-text-style-text-use-brush-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/text/style-text#use-brush
    revision: web:compose-guide-text-style-text:content@sha256:345b8f8e25f016107195fac0ee0a3919280064ee83c8fdafdc2b2661fa05f531
    sha256: 0ad4fc38926d7d3f89276764c83d54d37ee5cf484304ea42ba18d226252203b3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Configure your text using a built-in brush within TextStyle. For example, you can configure a linearGradient brush to your text as follows:

      val gradientColors = listOf(Cyan, LightBlue, Purple /*...*/)

      Text(
          text = text,
          style = TextStyle(
              brush = Brush.linearGradient(
                  colors = gradientColors
              )
          )
      )TextSnippets.kt

      Figure 3.

      Using Brush API’s

      linearGradient

      function with a defined list of colors.

      You are not limited to this particular color scheme or style of coloring. While we have provided a simple example to highlight, use any of the built-in brushes or even just a SolidColor to enhance your text.
compose:
  id: live-compose-guide-text-style-text
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text
  sections:
    - id: live-compose-guide-text-style-text-additional-resources
      title: Additional resources
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-apply-brush-to-span
      title: Apply a brush to a span of text
      aliases:
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.buildAnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-apply-brush-to-span-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-apply-marquee
      title: Apply marquee effect to text
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-apply-marquee-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-bold
      title: Make text bold
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-bold-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-brush
      title: Enable advanced styling with Brush
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-brush-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-brush-integrations
      title: Integrations
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.buildAnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-brush-integrations-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-change-color
      title: Change text color
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-change-color-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-change-size
      title: Change text size
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-change-size-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-common-stylings
      title: Common text stylings
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-common-stylings-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-display-html-with-links-in-text
      title: Display HTML with links in text
      aliases:
        - androidx.compose.ui.text.AnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-display-html-with-links-in-text-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-example-html
      title: "Example: HTML with styled link"
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-example-html-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-italic
      title: Make text italic
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-italic-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-key-points
      title: Key points about the code
      aliases:
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.SpanStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-key-points-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-main-content-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-multiple-styles
      title: Add multiple styles in text
      aliases:
        - androidx.compose.ui.text.TextStyle
        - androidx.compose.ui.text.AnnotatedString
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.ParagraphStyle
        - androidx.compose.ui.text.buildAnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-multiple-styles-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-result
      title: Result
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-result-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-shadow
      title: Add shadow
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-shadow-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-text-opacity
      title: Opacity in a span of text
      aliases:
        - androidx.compose.ui.text.SpanStyle
        - androidx.compose.ui.text.buildAnnotatedString
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-text-opacity-source
      relatedIds: []
    - id: live-compose-guide-text-style-text-use-brush
      title: Use a brush for text styling
      aliases:
        - androidx.compose.ui.text.TextStyle
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
      sourceIds:
        - live-compose-guide-text-style-text-use-brush-source
      relatedIds: []
---

# Style text

Public source: https://developer.android.com/develop/ui/compose/text/style-text

## Additional resources

Brushing Up on Compose Text Coloring

Animating brush Text coloring in Compose

Support multiple links in a single string of text

Sources: [live-compose-guide-text-style-text-additional-resources-source](https://developer.android.com/develop/ui/compose/text/style-text#additional-resources)

## Apply a brush to a span of text

If you only want to apply a brush to parts of your text, use buildAnnotatedString and the SpanStyle API, along with your brush and gradient of choice.

Text(
    text = buildAnnotatedString {
        append("Do not allow people to dim your shine\n")
        withStyle(
            SpanStyle(
                brush = Brush.linearGradient(
                    colors = rainbowColors
                )
            )
        ) {
            append("because they are blinded.")
        }
        append("\nTell them to put some sunglasses on.")
    }
)TextSnippets.kt

Figure 4.

Using a default brush with

linearGradient

as a style for

Text

.

Sources: [live-compose-guide-text-style-text-apply-brush-to-span-source](https://developer.android.com/develop/ui/compose/text/style-text#apply-brush-to-span)

## Apply marquee effect to text

You can apply the basicMarquee modifier to any composable to produce an animated scrolling effect. The marquee effect occurs if the content is too wide to fit in the available constraints. By default, basicMarquee has certain configurations (such as velocity and initial delay) set, but you can modify these parameters to customize the effect.

The following snippet implements a basic marquee effect on a Text composable:

@Composable
fun BasicMarqueeSample() {
    // Marquee only animates when the content doesn't fit in the max width.
    Column(Modifier.width(400.dp)) {
        Text(
            "Learn about why it's great to use Jetpack Compose",
            modifier = Modifier.basicMarquee(),
            fontSize = 50.sp
        )
    }
}TextSnippets.kt

Figure 6. The basicMarquee modifier applied to text.

Sources: [live-compose-guide-text-style-text-apply-marquee-source](https://developer.android.com/develop/ui/compose/text/style-text#apply-marquee)

## Make text bold

Use the fontWeight parameter to bold text (or set another FontWeight).

@Composable
fun BoldText() {
    Text("Hello World", fontWeight = FontWeight.Bold)
}TextSnippets.kt

Sources: [live-compose-guide-text-style-text-bold-source](https://developer.android.com/develop/ui/compose/text/style-text#bold)

## Enable advanced styling with Brush

To enable more advanced text styling, you can use the Brush API with TextStyle and SpanStyle. In any place where you would typically use TextStyle or SpanStyle, you can now also use Brush.

Sources: [live-compose-guide-text-style-text-brush-source](https://developer.android.com/develop/ui/compose/text/style-text#brush)

## Integrations

Since you can use Brush alongside both TextStyle and SpanStyle, integration with TextField and buildAnnotatedString is seamless.

For more information about using the brush API within a TextField, see Style input with Brush API.

Sources: [live-compose-guide-text-style-text-brush-integrations-source](https://developer.android.com/develop/ui/compose/text/style-text#brush-integrations)

## Change text color

@Composable
fun BlueText() {
    Text("Hello World", color = Color.Blue)
}TextSnippets.kt

Sources: [live-compose-guide-text-style-text-change-color-source](https://developer.android.com/develop/ui/compose/text/style-text#change-color)

## Change text size

@Composable
fun BigText() {
    Text("Hello World", fontSize = 30.sp)
}TextSnippets.kt

Sources: [live-compose-guide-text-style-text-change-size-source](https://developer.android.com/develop/ui/compose/text/style-text#change-size)

## Common text stylings

The following sections describe common ways to style your text.

Sources: [live-compose-guide-text-style-text-common-stylings-source](https://developer.android.com/develop/ui/compose/text/style-text#common-stylings)

## Display HTML with links in text

Use AnnotatedString.fromHtml() to display HTML-formatted text with clickable links in your Jetpack Compose application. This function converts a string with HTML tags into an AnnotatedString, allowing for styling and link handling.

Sources: [live-compose-guide-text-style-text-display-html-with-links-in-text-source](https://developer.android.com/develop/ui/compose/text/style-text#display_html_with_links_in_text)

## Example: HTML with styled link

This snippet renders HTML-formatted text with a link, applying specific styling to the link:

@Composable
fun AnnotatedHtmlStringWithLink(
    modifier: Modifier = Modifier,
    htmlText: String = """
       <h1>Jetpack Compose</h1>
       <p>
           Build <b>better apps</b> faster with <a href="https://www.android.com">Jetpack Compose</a>
       </p>
    """.trimIndent()
) {
    Text(
        AnnotatedString.fromHtml(
            htmlText,
            linkStyles = TextLinkStyles(
                style = SpanStyle(
                    textDecoration = TextDecoration.Underline,
                    fontStyle = FontStyle.Italic,
                    color = Color.Blue
                )
            )
        ),
        modifier
    )
}HtmlStyling.kt

Sources: [live-compose-guide-text-style-text-example-html-source](https://developer.android.com/develop/ui/compose/text/style-text#example%3A-html)

## Make text italic

Use the fontStyle parameter to italicize text (or set another FontStyle).

@Composable
fun ItalicText() {
    Text("Hello World", fontStyle = FontStyle.Italic)
}TextSnippets.kt

Sources: [live-compose-guide-text-style-text-italic-source](https://developer.android.com/develop/ui/compose/text/style-text#italic)

## Key points about the code

AnnotatedString.fromHtml() converts the htmlText string into an AnnotatedString. The linkStyles parameter customizes link appearance.

TextLinkStyles defines the style for links within the HTML. SpanStyle sets text decoration, font style, and color for the links.

The Text composable displays the resulting AnnotatedString.

Sources: [live-compose-guide-text-style-text-key-points-source](https://developer.android.com/develop/ui/compose/text/style-text#key-points)

## Introduction

The Text composable has multiple optional parameters to style its content. Below, we’ve listed parameters that cover the most common use cases with text. For all the parameters of Text, see the Compose Text source code.

Whenever you set one of these parameters, you’re applying the style to the whole text value. If you need to apply multiple styles within the same line or paragraphs, see the section on multiple inline styles.

Sources: [live-compose-guide-text-style-text-main-content-source](https://developer.android.com/develop/ui/compose/text/style-text#main-content)

## Add multiple styles in text

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

Sources: [live-compose-guide-text-style-text-multiple-styles-source](https://developer.android.com/develop/ui/compose/text/style-text#multiple-styles)

## Recommended for you

Note: link text is displayed when JavaScript is off

Style paragraph

Material Design 2 in Compose

Graphics Modifiers

Sources: [live-compose-guide-text-style-text-recommended-for-you-source](https://developer.android.com/develop/ui/compose/text/style-text#recommended_for_you)

## Result

This snippet enables "Jetpack Compose" as a clickable link, styled with blue color, underlined, and italicized:

Figure 2.

A heading and paragraph, where 'Jetpack Compose' in the paragraph is a clickable, styled link.

Sources: [live-compose-guide-text-style-text-result-source](https://developer.android.com/develop/ui/compose/text/style-text#result)

## Add shadow

The style parameter lets you set an object of type TextStyle and configure multiple parameters, for example shadow. Shadow receives a color for the shadow, the offset, or where it is located in respect of the Text and the blur radius which is how blurry it looks.

@Composable
fun TextShadow() {
    val offset = Offset(5.0f, 10.0f)
    Text(
        text = "Hello world!",
        style = TextStyle(
            fontSize = 24.sp,
            shadow = Shadow(
                color = Color.Blue, offset = offset, blurRadius = 3f
            )
        )
    )
}TextSnippets.kt

Sources: [live-compose-guide-text-style-text-shadow-source](https://developer.android.com/develop/ui/compose/text/style-text#shadow)

## Opacity in a span of text

To adjust the opacity of a particular span of text, use SpanStyle's optional alpha parameter. Use the same brush for both parts of a text, and change the alpha parameter in the corresponding span. In the code sample, the first span of text displays at half opacity (alpha =.5f) while the second displays at full opacity (alpha = 1f).

val brush = Brush.linearGradient(colors = rainbowColors)

buildAnnotatedString {
    withStyle(
        SpanStyle(
            brush = brush, alpha = .5f
        )
    ) {
        append("Text in ")
    }
    withStyle(
        SpanStyle(
            brush = brush, alpha = 1f
        )
    ) {
        append("Compose ❤️")
    }
}TextSnippets.kt

Figure 5.

Using

buildAnnotatedString

and

SpanStyle

’s alpha parameter, along with

linearGradient

to add opacity to a span of text.

Sources: [live-compose-guide-text-style-text-text-opacity-source](https://developer.android.com/develop/ui/compose/text/style-text#text-opacity)

## Use a brush for text styling

Configure your text using a built-in brush within TextStyle. For example, you can configure a linearGradient brush to your text as follows:

val gradientColors = listOf(Cyan, LightBlue, Purple /*...*/)

Text(
    text = text,
    style = TextStyle(
        brush = Brush.linearGradient(
            colors = gradientColors
        )
    )
)TextSnippets.kt

Figure 3.

Using Brush API’s

linearGradient

function with a defined list of colors.

You are not limited to this particular color scheme or style of coloring. While we have provided a simple example to highlight, use any of the built-in brushes or even just a SolidColor to enhance your text.

Sources: [live-compose-guide-text-style-text-use-brush-source](https://developer.android.com/develop/ui/compose/text/style-text#use-brush)
