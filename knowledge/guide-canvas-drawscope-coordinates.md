---
type: reference
title: "Guidance: Draw with Canvas and DrawScope coordinates"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-graphics-draw-overview-basic-drawing-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: cb1be0cea3b9ceb0e394e47190fab0d8936720ece7569299b3beda527133db55
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The core way to draw something custom in Compose is with modifiers, such as Modifier.drawWithContent, Modifier.drawBehind, and Modifier.drawWithCache.

      For example, to draw something behind your composable, you can use the drawBehind modifier to start executing drawing commands:

      Spacer(
          modifier = Modifier
              .fillMaxSize()
              .drawBehind {
                  // this = DrawScope
              }
      )CanvasSnippets.kt

      If all you need is a composable that draws, you can use the Canvas composable. The Canvas composable is a convenient wrapper around Modifier.drawBehind. You place the Canvas in your layout the same way you would with any other Compose UI element. Within the Canvas, you can draw elements with precise control over their style and location.

      All drawing modifiers expose a DrawScope, a scoped drawing environment that maintains its own state. This lets you set the parameters for a group of graphical elements. The DrawScope provides several useful fields, like size, a Size object specifying the current dimensions of the DrawScope.

      To draw something, you can use one of the many draw functions on DrawScope. For example, the following code draws a rectangle in the top left corner of the screen:

      Canvas(modifier = Modifier.fillMaxSize()) {
          val canvasQuadrantSize = size / 2F
          drawRect(
              color = Color.Magenta,
              size = canvasQuadrantSize
          )
      }CanvasSnippets.kt

      Figure 1

      . Rectangle drawn using Canvas in Compose.

      To learn more about different drawing modifiers, see the Graphics Modifiers documentation.
  - id: live-compose-guide-graphics-draw-overview-coordinate-system-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#coordinate-system
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 66194210847f0bf9066a807e7e3acc020c396c21a576abd06e2bc016cf6dc554
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To draw something on screen, you need to know the offset (x and y) and size of your item. With many of the draw methods on DrawScope, the position and size are provided by default parameter values. The default parameters generally position the item at the [0, 0] point on the canvas, and provide a default size that fills the entire drawing area, as in the example above - you can see the rectangle is positioned in the top left. To adjust the size and position of your item, you need to understand the coordinate system in Compose.

      The origin of the coordinate system ([0,0]) is at the top leftmost pixel in the drawing area. x increases as it moves right and y increases as it moves downwards.

      Figure 2

      . Drawing coordinate system / drawing grid.

      For example, if you want to draw a diagonal line from the top-right corner of the canvas area to the bottom-left corner, you can use the DrawScope.drawLine() function, and specify a start and end offset with the corresponding x and y positions:

      Canvas(modifier = Modifier.fillMaxSize()) {
          val canvasWidth = size.width
          val canvasHeight = size.height
          drawLine(
              start = Offset(x = canvasWidth, y = 0f),
              end = Offset(x = 0f, y = canvasHeight),
              color = Color.Blue
          )
      }CanvasSnippets.kt
compose:
  id: guide-canvas-drawscope-coordinates
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics.drawscope.DrawScope
  sections:
    - id: guide-canvas-drawscope-coordinates
      title: "Guidance: Draw with Canvas and DrawScope coordinates"
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
        - androidx.compose.ui.draw.drawBehind
        - canvas coordinates
        - custom drawing
        - 캔버스 좌표
        - 커스텀 그리기
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-basic-drawing-source
        - live-compose-guide-graphics-draw-overview-coordinate-system-source
      relatedIds:
        - live-compose-guide-graphics-draw-overview-basic-drawing
        - live-compose-guide-graphics-draw-overview-coordinate-system
---

# Guidance: Draw with Canvas and DrawScope coordinates

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Draw with Canvas and DrawScope coordinates

Guidance: Use drawing modifiers for custom rendering, or Canvas when the composable primarily draws. Canvas wraps Modifier.drawBehind, and drawing modifiers expose DrawScope with drawing functions and the current size. Use that size to position shapes within the drawing area. The origin is its top-left pixel: x increases rightward and y downward. Limitation: defaults on many draw methods place content at [0, 0] and fill the drawing area; provide positions and sizes when the desired geometry differs.

Sources: [live-compose-guide-graphics-draw-overview-basic-drawing-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing), [live-compose-guide-graphics-draw-overview-coordinate-system-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#coordinate-system)
