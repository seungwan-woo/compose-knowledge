---
type: reference
title: "Guidance: Measure text before sizing its drawn background"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-graphics-draw-overview-draw-text-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-text
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 74c383ba71528079f4587c537d39830a515ef3349979b2c1896b20b067432528
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To draw text in Compose, you can typically use the Text composable. However, if you are in a DrawScope or you want to draw your text manually with customization, you can use the DrawScope.drawText() method.

      To draw text, create a TextMeasurer using rememberTextMeasurer and call drawText with the measurer:

      val textMeasurer = rememberTextMeasurer()

      Canvas(modifier = Modifier.fillMaxSize()) {
          drawText(textMeasurer, "Hello")
      }CanvasSnippets.kt

      Figure 8

      . Drawing text on Canvas.
  - id: live-compose-guide-graphics-draw-overview-measure-text-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#measure-text
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 96655ea5adb2466dd065ab8306ddb53569d323069d9bd2b61e7d41dc0e84efa3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Drawing text works a bit differently from other drawing commands. Normally, you give the drawing command the size (width and height) to draw the shape/image as. With text, there are a few parameters that control the size of the rendered text, such as font size, font, ligatures, and letter spacing.

      With Compose, you can use a TextMeasurer to get access to the measured size of text, depending on the above factors. If you want to draw a background behind the text, you can use the measured information to get the size of the area that the text takes up:

      val textMeasurer = rememberTextMeasurer()

      Spacer(
          modifier = Modifier
              .drawWithCache {
                  val measuredText =
                      textMeasurer.measure(
                          AnnotatedString(longTextSample),
                          constraints = Constraints.fixedWidth((size.width * 2f / 3f).toInt()),
                          style = TextStyle(fontSize = 18.sp)
                      )

                  onDrawBehind {
                      drawRect(pinkColor, size = measuredText.size.toSize())
                      drawText(measuredText)
                  }
              }
              .fillMaxSize()
      )CanvasSnippets.kt

      This code snippet produces a pink background on the text:

      Figure 9

      . Multi-line text taking up ⅔ size of the full area, with a background rectangle.

      Adjusting the constraints, font size, or any property that affects measured size results in a new size reported. You can set a fixed size for both the width and height, and the text then follows the set TextOverflow. For example, the following code renders text in ⅓ of the height and ⅓ of the width of the composable area, and sets the TextOverflow to TextOverflow.Ellipsis:

      val textMeasurer = rememberTextMeasurer()

      Spacer(
          modifier = Modifier
              .drawWithCache {
                  val measuredText =
                      textMeasurer.measure(
                          AnnotatedString(longTextSample),
                          constraints = Constraints.fixed(
                              width = (size.width / 3f).toInt(),
                              height = (size.height / 3f).toInt()
                          ),
                          overflow = TextOverflow.Ellipsis,
                          style = TextStyle(fontSize =
compose:
  id: guide-measure-text-for-canvas
  artifact: androidx.compose.ui:ui-text
  fqn: androidx.compose.ui.text.TextMeasurer
  sections:
    - id: guide-measure-text-for-canvas
      title: "Guidance: Measure text before sizing its drawn background"
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.ui.text.rememberTextMeasurer
        - androidx.compose.ui.text.TextMeasurer
        - androidx.compose.ui.text.drawText
        - canvas text measurement
        - 텍스트 측정
        - 캔버스 텍스트
      requires:
        - artifact: androidx.compose.ui:ui-text
          version: null
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-draw-text-source
        - live-compose-guide-graphics-draw-overview-measure-text-source
      relatedIds:
        - live-compose-guide-graphics-draw-overview-draw-text
        - live-compose-guide-graphics-draw-overview-measure-text
---

# Guidance: Measure text before sizing its drawn background

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Measure text before sizing its drawn background

Guidance: For manually drawn text, use rememberTextMeasurer and drawText. Measure with the intended constraints and TextStyle, then use the measured size for a matching background rectangle before drawing the text result. This accounts for text-specific sizing factors such as font size, ligatures, and letter spacing. Limitation: changing constraints, font size, or other measurement-affecting properties changes the reported size. Fixed width and height can be paired with TextOverflow.Ellipsis to constrain displayed text.

Sources: [live-compose-guide-graphics-draw-overview-draw-text-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-text), [live-compose-guide-graphics-draw-overview-measure-text-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#measure-text)
