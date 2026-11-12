---
type: reference
title: "Guidance: Combine drawing transforms inside Foundation Canvas"
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
  - id: live-compose-guide-graphics-draw-overview-multiple-transformations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#multiple-transformations
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: e1960c6aaef0ecad32349dd04626764ebfc3b6a5bbe730fb9a4dd70510493ec2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To apply multiple transformations to your drawings, use the DrawScope.withTransform() function, which creates and applies a single transformation that combines all your desired changes. Using withTransform() is more efficient than making nested calls to individual transformations, because all the transformations are performed together in a single operation, instead of Compose needing to calculate and save each of the nested transformations.

      For example, the following code applies both a translation and a rotation to the rectangle:

      Canvas(modifier = Modifier.fillMaxSize()) {
          withTransform({
              translate(left = size.width / 5F)
              rotate(degrees = 45F)
          }) {
              drawRect(
                  color = Color.Gray,
                  topLeft = Offset(x = size.width / 3F, y = size.height / 3F),
                  size = size / 3F
              )
          }
      }CanvasSnippets.kt

      Figure 7

      . Use

      withTransform

      to apply both a rotation and a translation, rotating the rectangle and shifting it to the left.
compose:
  id: guide-foundation-canvas-transforms
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.Canvas
  sections:
    - id: guide-foundation-canvas-transforms
      title: "Guidance: Combine drawing transforms inside Foundation Canvas"
      aliases:
        - androidx.compose.foundation.Canvas
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.ui.graphics.drawscope.withTransform
        - canvas transform
        - translate rotate drawing
        - 파운데이션 캔버스
        - 그리기 변환
        - 이동 회전
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-basic-drawing-source
        - live-compose-guide-graphics-draw-overview-multiple-transformations-source
      relatedIds:
        - live-compose-guide-graphics-draw-overview-basic-drawing
        - live-compose-guide-graphics-draw-overview-multiple-transformations
---

# Guidance: Combine drawing transforms inside Foundation Canvas

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Combine drawing transforms inside Foundation Canvas

Guidance: Use the Foundation Canvas composable when you need a layout element devoted to custom drawing; it wraps Modifier.drawBehind and exposes DrawScope drawing operations. Inside its drawing block, use withTransform to combine changes such as translation and rotation before issuing drawRect. This combines transformations in one operation instead of calculating and saving separately nested transformations. Limitation: place the drawing commands inside the withTransform content block to draw them with that combined transformation, as in the translated and rotated rectangle example.

Sources: [live-compose-guide-graphics-draw-overview-basic-drawing-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing), [live-compose-guide-graphics-draw-overview-multiple-transformations-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#multiple-transformations)
