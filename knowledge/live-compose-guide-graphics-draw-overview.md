---
type: reference
title: Graphics in Compose
description: "Public source: https://developer.android.com/develop/ui/compose/graphics/draw/overview"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-graphics-draw-overview-accessing-canvas-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#accessing-canvas
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: cc8289e7adacdfe1a3ca05fb599eeb7521ce4634b1c26141b0224445c91973f4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      With DrawScope, you don't have direct access to a Canvas object. You can use DrawScope.drawIntoCanvas() to get access to the Canvas object itself that you can call functions on.

      For example, if you have a custom Drawable that you'd like to draw onto the canvas, you can access the canvas and call Drawable#draw(), passing in the Canvas object:

      val drawable = ShapeDrawable(OvalShape())
      Spacer(
          modifier = Modifier
              .drawWithContent {
                  drawIntoCanvas { canvas ->
                      drawable.setBounds(0, 0, size.width.toInt(), size.height.toInt())
                      drawable.draw(canvas.nativeCanvas)
                  }
              }
              .fillMaxSize()
      )CanvasSnippets.kt

      Figure 13

      . Accessing canvas to draw a

      Drawable

      .
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
  - id: live-compose-guide-graphics-draw-overview-basic-transformations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-transformations
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 171ac96c33df9b23361e9caa46d2d80c3b8c5a2e13b3f4785dd0011d6554b5de
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: DrawScope offers transformations to change where or how the drawing commands are executed.
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
  - id: live-compose-guide-graphics-draw-overview-draw-basic-shapes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-basic-shapes
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 1024997084ba08d943f164b025d273abe3eb7de31cb30da514985abaaf3a02b4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are many shape drawing functions on DrawScope. To draw a shape, use one of the predefined draw functions, such as drawCircle:

      val purpleColor = Color(0xFFBA68C8)
      Canvas(
          modifier = Modifier
              .fillMaxSize()
              .padding(16.dp),
          onDraw = {
              drawCircle(purpleColor)
          }
      )CanvasSnippets.kt

      API Output drawCircle() drawRect() drawRoundedRect() drawLine() drawOval() drawArc() drawPoints()
  - id: live-compose-guide-graphics-draw-overview-draw-image-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-image
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: a962b9eb48b7666f9e817f19556c538ac33afa4f3caa10d43f32809b71de8741
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To draw an ImageBitmap with DrawScope, load up the image using ImageBitmap.imageResource() and then call drawImage:

      val dogImage = ImageBitmap.imageResource(id = R.drawable.dog)

      Canvas(modifier = Modifier.fillMaxSize(), onDraw = {
          drawImage(dogImage)
      })CanvasSnippets.kt

      Figure 11

      . Drawing an

      ImageBitmap

      on Canvas.
  - id: live-compose-guide-graphics-draw-overview-draw-path-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-path
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 4b6a9ea0cf3c480e293d912807a266c5d8232e05e21abc9b61d408332c8984b4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A path is a series of mathematical instructions that result in a drawing once executed. DrawScope can draw a path using the DrawScope.drawPath() method.

      For example, say you wanted to draw a triangle. You can generate a path with functions such as lineTo() and moveTo() using the size of the drawing area. Then, call drawPath() with this newly created path to get a triangle.

      Spacer(
          modifier = Modifier
              .drawWithCache {
                  val path = Path()
                  path.moveTo(0f, 0f)
                  path.lineTo(size.width / 2f, size.height / 2f)
                  path.lineTo(size.width, 0f)
                  path.close()
                  onDrawBehind {
                      drawPath(path, Color.Magenta, style = Stroke(width = 10f))
                  }
              }
              .fillMaxSize()
      )CanvasSnippets.kt

      Figure 12

      . Creating and drawing a

      Path

      in Compose.
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
  - id: live-compose-guide-graphics-draw-overview-inset-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#inset
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 82baea4e4c049c2cc6458f9fd44528b64543ca21a25dec66ac1032fb6ee80468
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use DrawScope.inset() to adjust the default parameters of the current DrawScope, changing the drawing boundaries and translating the drawings accordingly:

      Canvas(modifier = Modifier.fillMaxSize()) {
          val canvasQuadrantSize = size / 2F
          inset(horizontal = 50f, vertical = 30f) {
              drawRect(color = Color.Green, size = canvasQuadrantSize)
          }
      }CanvasSnippets.kt

      This code effectively adds padding to the drawing commands:

      Figure 6

      . Applying an inset to drawing commands.
  - id: live-compose-guide-graphics-draw-overview-learn-more-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#learn-more
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 96ba7b3c9cf867873295b19dfdc32c4e0f8d7e1beb0854febb5b6dd790346588
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For more information on Drawing in Compose, take a look at the following resources:

      Graphics Modifiers - Learn about the different types of drawing modifiers.

      Brush - Learn how to customize the painting of your content.

      Custom Layouts and Graphics in Compose - Android Dev Summit 2022 - Learn how to build a custom UI in Compose with Layouts and Graphics.

      JetLagged Sample - Compose Sample that shows how to draw a custom graph.
  - id: live-compose-guide-graphics-draw-overview-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#main-content
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 03c6d5a36c3ce7f6769bbdb38cfd62680d0f87b352a0dac8af88ab7fbda6f75b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: Many apps need to be able to precisely control exactly what's drawn on the screen. This might be as small as putting a box or a circle on the screen in just the right place, or it might be an elaborate arrangement of graphic elements in many different styles.
  - id: live-compose-guide-graphics-draw-overview-measure-text-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#measure-text
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 9386b350fa099d8122d0b77c22f5a1fc7e2546056b496acfa8fbd617ecd5ab1b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      18.sp)
                      )

                  onDrawBehind {
                      drawRect(pinkColor, size = measuredText.size.toSize())
                      drawText(measuredText)
                  }
              }
              .fillMaxSize()
      )CanvasSnippets.kt

      The text is now drawn in the constraints with an ellipsis at the end:

      Figure 10

      .

      TextOverflow.Ellipsis

      with fixed constraints on measuring text.
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
  - id: live-compose-guide-graphics-draw-overview-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#recommended_for_you
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: bb6e893617f2a3bb59ddc628a5ab0cc3076edaaa737f987615ca90c9c6c25b6a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Graphics Modifiers

      Graphics in Compose

      Alignment lines in Jetpack Compose
  - id: live-compose-guide-graphics-draw-overview-rotate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#rotate
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: b95abaeb2a4dadecc544894d47eb561d52e533ca06b3fbcc8a81cc0d671565fc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use DrawScope.rotate() to rotate your drawing operations around a pivot point. For example, the following code rotates a rectangle 45 degrees:

      Canvas(modifier = Modifier.fillMaxSize()) {
          rotate(degrees = 45F) {
              drawRect(
                  color = Color.Gray,
                  topLeft = Offset(x = size.width / 3F, y = size.height / 3F),
                  size = size / 3F
              )
          }
      }CanvasSnippets.kt

      Figure 5

      . We use

      rotate()

      to apply a rotation to the current drawing scope, which rotates the rectangle by 45 degrees.
  - id: live-compose-guide-graphics-draw-overview-scale-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#scale
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 0d3486dd64e081b5d83c455a112d37fb33d4165b9330e7dd67cfd9e99db17e47
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use DrawScope.scale() to increase the size of your drawing operations by a factor. Operations like scale() apply to all drawing operations within the corresponding lambda. For example, the following code increases the scaleX 10 times and scaleY 15 times:

      Canvas(modifier = Modifier.fillMaxSize()) {
          scale(scaleX = 10f, scaleY = 15f) {
              drawCircle(Color.Blue, radius = 20.dp.toPx())
          }
      }CanvasSnippets.kt

      Figure 3

      . Applying a scale operation to a circle on Canvas.
  - id: live-compose-guide-graphics-draw-overview-translate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/overview#translate
    revision: web:compose-guide-graphics-draw-overview:content@sha256:cec2ce02c71ff0a12de892ae22efad0143f5aad195a6f510e4d089d35f9dfd1f
    sha256: 06e1214adb2406b151d708b9ff7162888026ddf0db4925a351fb5ceac856cd9c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Use DrawScope.translate() to move your drawing operations up, down, left, or right. For example, the following code moves the drawing 100 px to the right and 300 px up:

      Canvas(modifier = Modifier.fillMaxSize()) {
          translate(left = 100f, top = -300f) {
              drawCircle(Color.Blue, radius = 200.dp.toPx())
          }
      }CanvasSnippets.kt

      Figure 4

      . Applying a translate operation to a circle on Canvas.
compose:
  id: live-compose-guide-graphics-draw-overview
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-compose-guide-graphics-draw-overview-accessing-canvas
      title: Accessing Canvas object
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-accessing-canvas-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-basic-drawing
      title: Basic drawing with modifiers and DrawScope
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-basic-drawing-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-basic-transformations
      title: Basic transformations
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-basic-transformations-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-coordinate-system
      title: Coordinate system
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-coordinate-system-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-draw-basic-shapes
      title: Draw basic shapes
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-draw-basic-shapes-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-draw-image
      title: Draw image
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-draw-image-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-draw-path
      title: Draw path
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-draw-path-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-draw-text
      title: Draw text
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
        - androidx.compose.ui.text.TextMeasurer
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-draw-text-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-inset
      title: Inset
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-inset-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-learn-more
      title: Learn more
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-learn-more-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-main-content-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-measure-text
      title: Measure text
      aliases:
        - androidx.compose.ui.text.TextMeasurer
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-measure-text-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-measure-text-2
      title: Measure text
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-measure-text-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-multiple-transformations
      title: Multiple transformations
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-multiple-transformations-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-rotate
      title: Rotate
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-rotate-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-scale
      title: Scale
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-scale-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-overview-translate
      title: Translate
      aliases:
        - androidx.compose.ui.graphics.drawscope.DrawScope
        - androidx.compose.foundation.Canvas
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-overview-translate-source
      relatedIds: []
---

# Graphics in Compose

Public source: https://developer.android.com/develop/ui/compose/graphics/draw/overview

## Accessing Canvas object

With DrawScope, you don't have direct access to a Canvas object. You can use DrawScope.drawIntoCanvas() to get access to the Canvas object itself that you can call functions on.

For example, if you have a custom Drawable that you'd like to draw onto the canvas, you can access the canvas and call Drawable#draw(), passing in the Canvas object:

val drawable = ShapeDrawable(OvalShape())
Spacer(
    modifier = Modifier
        .drawWithContent {
            drawIntoCanvas { canvas ->
                drawable.setBounds(0, 0, size.width.toInt(), size.height.toInt())
                drawable.draw(canvas.nativeCanvas)
            }
        }
        .fillMaxSize()
)CanvasSnippets.kt

Figure 13

. Accessing canvas to draw a

Drawable

.

Sources: [live-compose-guide-graphics-draw-overview-accessing-canvas-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#accessing-canvas)

## Basic drawing with modifiers and DrawScope

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

Sources: [live-compose-guide-graphics-draw-overview-basic-drawing-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-drawing)

## Basic transformations

DrawScope offers transformations to change where or how the drawing commands are executed.

Sources: [live-compose-guide-graphics-draw-overview-basic-transformations-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#basic-transformations)

## Coordinate system

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

Sources: [live-compose-guide-graphics-draw-overview-coordinate-system-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#coordinate-system)

## Draw basic shapes

There are many shape drawing functions on DrawScope. To draw a shape, use one of the predefined draw functions, such as drawCircle:

val purpleColor = Color(0xFFBA68C8)
Canvas(
    modifier = Modifier
        .fillMaxSize()
        .padding(16.dp),
    onDraw = {
        drawCircle(purpleColor)
    }
)CanvasSnippets.kt

API Output drawCircle() drawRect() drawRoundedRect() drawLine() drawOval() drawArc() drawPoints()

Sources: [live-compose-guide-graphics-draw-overview-draw-basic-shapes-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-basic-shapes)

## Draw image

To draw an ImageBitmap with DrawScope, load up the image using ImageBitmap.imageResource() and then call drawImage:

val dogImage = ImageBitmap.imageResource(id = R.drawable.dog)

Canvas(modifier = Modifier.fillMaxSize(), onDraw = {
    drawImage(dogImage)
})CanvasSnippets.kt

Figure 11

. Drawing an

ImageBitmap

on Canvas.

Sources: [live-compose-guide-graphics-draw-overview-draw-image-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-image)

## Draw path

A path is a series of mathematical instructions that result in a drawing once executed. DrawScope can draw a path using the DrawScope.drawPath() method.

For example, say you wanted to draw a triangle. You can generate a path with functions such as lineTo() and moveTo() using the size of the drawing area. Then, call drawPath() with this newly created path to get a triangle.

Spacer(
    modifier = Modifier
        .drawWithCache {
            val path = Path()
            path.moveTo(0f, 0f)
            path.lineTo(size.width / 2f, size.height / 2f)
            path.lineTo(size.width, 0f)
            path.close()
            onDrawBehind {
                drawPath(path, Color.Magenta, style = Stroke(width = 10f))
            }
        }
        .fillMaxSize()
)CanvasSnippets.kt

Figure 12

. Creating and drawing a

Path

in Compose.

Sources: [live-compose-guide-graphics-draw-overview-draw-path-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-path)

## Draw text

To draw text in Compose, you can typically use the Text composable. However, if you are in a DrawScope or you want to draw your text manually with customization, you can use the DrawScope.drawText() method.

To draw text, create a TextMeasurer using rememberTextMeasurer and call drawText with the measurer:

val textMeasurer = rememberTextMeasurer()

Canvas(modifier = Modifier.fillMaxSize()) {
    drawText(textMeasurer, "Hello")
}CanvasSnippets.kt

Figure 8

. Drawing text on Canvas.

Sources: [live-compose-guide-graphics-draw-overview-draw-text-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#draw-text)

## Inset

Use DrawScope.inset() to adjust the default parameters of the current DrawScope, changing the drawing boundaries and translating the drawings accordingly:

Canvas(modifier = Modifier.fillMaxSize()) {
    val canvasQuadrantSize = size / 2F
    inset(horizontal = 50f, vertical = 30f) {
        drawRect(color = Color.Green, size = canvasQuadrantSize)
    }
}CanvasSnippets.kt

This code effectively adds padding to the drawing commands:

Figure 6

. Applying an inset to drawing commands.

Sources: [live-compose-guide-graphics-draw-overview-inset-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#inset)

## Learn more

For more information on Drawing in Compose, take a look at the following resources:

Graphics Modifiers - Learn about the different types of drawing modifiers.

Brush - Learn how to customize the painting of your content.

Custom Layouts and Graphics in Compose - Android Dev Summit 2022 - Learn how to build a custom UI in Compose with Layouts and Graphics.

JetLagged Sample - Compose Sample that shows how to draw a custom graph.

Sources: [live-compose-guide-graphics-draw-overview-learn-more-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#learn-more)

## Introduction

Many apps need to be able to precisely control exactly what's drawn on the screen. This might be as small as putting a box or a circle on the screen in just the right place, or it might be an elaborate arrangement of graphic elements in many different styles.

Sources: [live-compose-guide-graphics-draw-overview-main-content-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#main-content)

## Measure text

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

Sources: [live-compose-guide-graphics-draw-overview-measure-text-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#measure-text)

## Measure text

18.sp)
                )

            onDrawBehind {
                drawRect(pinkColor, size = measuredText.size.toSize())
                drawText(measuredText)
            }
        }
        .fillMaxSize()
)CanvasSnippets.kt

The text is now drawn in the constraints with an ellipsis at the end:

Figure 10

.

TextOverflow.Ellipsis

with fixed constraints on measuring text.

Sources: [live-compose-guide-graphics-draw-overview-measure-text-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#measure-text)

## Multiple transformations

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

Sources: [live-compose-guide-graphics-draw-overview-multiple-transformations-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#multiple-transformations)

## Recommended for you

Note: link text is displayed when JavaScript is off

Graphics Modifiers

Graphics in Compose

Alignment lines in Jetpack Compose

Sources: [live-compose-guide-graphics-draw-overview-recommended-for-you-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#recommended_for_you)

## Rotate

Use DrawScope.rotate() to rotate your drawing operations around a pivot point. For example, the following code rotates a rectangle 45 degrees:

Canvas(modifier = Modifier.fillMaxSize()) {
    rotate(degrees = 45F) {
        drawRect(
            color = Color.Gray,
            topLeft = Offset(x = size.width / 3F, y = size.height / 3F),
            size = size / 3F
        )
    }
}CanvasSnippets.kt

Figure 5

. We use

rotate()

to apply a rotation to the current drawing scope, which rotates the rectangle by 45 degrees.

Sources: [live-compose-guide-graphics-draw-overview-rotate-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#rotate)

## Scale

Use DrawScope.scale() to increase the size of your drawing operations by a factor. Operations like scale() apply to all drawing operations within the corresponding lambda. For example, the following code increases the scaleX 10 times and scaleY 15 times:

Canvas(modifier = Modifier.fillMaxSize()) {
    scale(scaleX = 10f, scaleY = 15f) {
        drawCircle(Color.Blue, radius = 20.dp.toPx())
    }
}CanvasSnippets.kt

Figure 3

. Applying a scale operation to a circle on Canvas.

Sources: [live-compose-guide-graphics-draw-overview-scale-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#scale)

## Translate

Use DrawScope.translate() to move your drawing operations up, down, left, or right. For example, the following code moves the drawing 100 px to the right and 300 px up:

Canvas(modifier = Modifier.fillMaxSize()) {
    translate(left = 100f, top = -300f) {
        drawCircle(Color.Blue, radius = 200.dp.toPx())
    }
}CanvasSnippets.kt

Figure 4

. Applying a translate operation to a circle on Canvas.

Sources: [live-compose-guide-graphics-draw-overview-translate-source](https://developer.android.com/develop/ui/compose/graphics/draw/overview#translate)
