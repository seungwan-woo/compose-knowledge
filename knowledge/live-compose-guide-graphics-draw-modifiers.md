---
type: reference
title: Graphics modifiers
description: "Public source: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-graphics-draw-modifiers-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#additional-resources
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 0fea359d85533fc70dbb09ef6d979bbbe907d7875fa1b6f0a28515cb9f21c232
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For more examples using graphicsLayer and custom drawing, check out the following resources:

      Making Jellyfish move in Compose

      ADS 2022 Layouts and Graphics in Compose
  - id: live-compose-guide-graphics-draw-modifiers-composable-to-bitmap-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#composable-to-bitmap
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 76e7f2a8b5e2b64403b83770a8b72a348201adb488d1164ef809a85536bc8a90
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A common use case is to create a Bitmap from a composable. To copy the contents of your composable to a Bitmap, create a GraphicsLayer using rememberGraphicsLayer().

      Redirect the drawing commands to the new layer using drawWithContent() and graphicsLayer.record{}. Then draw the layer in the visible canvas using drawLayer:

      val coroutineScope = rememberCoroutineScope()
      val graphicsLayer = rememberGraphicsLayer()
      Box(
          modifier = Modifier
              .drawWithContent {
                  // call record to capture the content in the graphics layer
                  graphicsLayer.record {
                      // draw the contents of the composable into the graphics layer
                      this@drawWithContent.drawContent()
                  }
                  // draw the graphics layer on the visible canvas
                  drawLayer(graphicsLayer)
              }
              .clickable {
                  coroutineScope.launch {
                      val bitmap = graphicsLayer.toImageBitmap()
                      // do something with the newly acquired bitmap
                  }
              }
              .background(Color.White)
      ) {
          Text("Hello Android", fontSize = 26.sp)
      }AdvancedGraphicsSnippets.kt

      You can save the bitmap to disk and share it. For more details, see the full example snippet. Be sure to check for on device permissions before trying to save to disk.
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-auto
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 6c3f6c9a0b1df3dcc8095bb934be04504681cd0bc9e4bc210297fe9a4a28928c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The compositing strategy is determined by the rest of the graphicsLayer parameters. It renders the layer into an offscreen buffer if alpha is less than 1.0f or a RenderEffect is set. Whenever the alpha is less than 1f, a compositing layer is created automatically to render the contents and then draw this offscreen buffer to the destination with the corresponding alpha. Setting a RenderEffect or overscroll always renders content into an offscreen buffer regardless of the CompositingStrategy set.
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 859a75ca0af5f726bbfb3a62b28c944b224ebc3f687045caf451f201e4de0f5a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      0.8f,
                          center = Offset(
                              x = size.width - dotSize,
                              y = size.height - dotSize
                          )
                      )
                  }
              }
      )GraphicsModifiersSnippets.kt

      By setting the CompositingStrategy to Offscreen, it creates an offscreen texture to execute the commands to (applying the BlendMode only to the contents of this composable). It then renders it on top of what is already rendered on screen, not affecting the content already drawn.

      Figure 12

      : Modifier.drawWithContent on an Image showing a circle indication, with the BlendMode.Clear and CompositingStrategy.Offscreen inside app

      If you didn't use CompositingStrategy.Offscreen, the results of applying BlendMode.Clear clears all the pixels in the destination, regardless of what was already set - leaving the window's rendering buffer (black) visible. Many of the BlendModes that involve alpha won't work as expected without an offscreen buffer. Note the black ring around the red circle indicator:

      Figure 13

      : Modifier.drawWithContent on an Image showing a circle indication, with the BlendMode.Clear and no CompositingStrategy set

      To understand this a bit further: if the app had a translucent window background, and you did not use the CompositingStrategy.Offscreen, the BlendMode would interact with the whole app. It would clear all of the pixels to show the app or wallpaper underneath, as in this example:

      Figure 14

      : No CompositingStrategy set and using BlendMode.Clear with an app that has a translucent window background. Notice how the pink wallpaper is shown through the area around the red status circle.

      It's worth noting that when using CompositingStrategy.Offscreen, an offscreen texture that is the size of the drawing area is created and rendered back on screen. Any drawing commands that are done with this strategy, are by default be clipped to this region. The following code snippet illustrates the differences when switching to using offscreen textures:

      @Composable
      fun CompositingStrategyExamples() {
          Column(
              modifier = Modifier
                  .fillMaxSize()
                  .wrapContentSize(Alignment.Center)
          ) {
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 693cd5c73222f02637a90173871750c38e1108739fc9a2660d8fda8c6d68a2d5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      // Does not clip content even with a graphics layer usage here. By default, graphicsLayer
              // does not allocate + rasterize content into a separate layer but instead is used
              // for isolation. That is draw invalidations made outside of this graphicsLayer will not
              // re-record the drawing instructions in this composable as they have not changed
              Canvas(
                  modifier = Modifier
                      .graphicsLayer()
                      .size(100.dp) // Note size of 100 dp here
                      .border(2.dp, color = Color.Blue)
              ) {
                  // ... and drawing a size of 200 dp here outside the bounds
                  drawRect(color = Color.Magenta, size = Size(200.dp.toPx(), 200.dp.toPx()))
              }

              Spacer(modifier = Modifier.size(300.dp))

              /* Clips content as alpha usage here creates an offscreen buffer to rasterize content
              into first then draws to the original destination */
              Canvas(
                  modifier = Modifier
                      // force to an offscreen buffer
                      .graphicsLayer(compositingStrategy = CompositingStrategy.Offscreen)
                      .size(100.dp) // Note size of 100 dp here
                      .border(2.dp, color = Color.Blue)
              ) {
                  /* ... and drawing a size of 200 dp. However, because of the CompositingStrategy.Offscreen usage above, the
                  content gets clipped */
                  drawRect(color = Color.Red, size = Size(200.dp.toPx(), 200.dp.toPx()))
              }
          }
      }GraphicsModifiersSnippets.kt

      Figure 15

      : CompositingStrategy.Auto versus CompositingStrategy.Offscreen - offscreen clips to the region, where auto doesn't
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: ec6ef4e7dd6476ad157567428b8aa35b4b5a53e3fc1ddfc95035bf9200d3aba1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      The contents of the composable are always rasterized to an offscreen texture or bitmap before rendering to the destination. This is useful for applying BlendMode operations to mask content, and for performance when rendering complex sets of drawing instructions.

      An example of using CompositingStrategy.Offscreen is with BlendModes. In the following example, say you want to remove parts of an Image composable by issuing a draw command that uses BlendMode.Clear. If you don't set the compositingStrategy to CompositingStrategy.Offscreen, the BlendMode interacts with all the background content.

      Image(
          painter = painterResource(id = R.drawable.dog),
          contentDescription = "Dog",
          contentScale = ContentScale.Crop,
          modifier = Modifier
              .size(120.dp)
              .aspectRatio(1f)
              .background(
                  Brush.linearGradient(
                      listOf(
                          Color(0xFFC5E1A5),
                          Color(0xFF80DEEA)
                      )
                  )
              )
              .padding(8.dp)
              .graphicsLayer {
                  compositingStrategy = CompositingStrategy.Offscreen
              }
              .drawWithCache {
                  val path = Path()
                  path.addOval(
                      Rect(
                          topLeft = Offset.Zero,
                          bottomRight = Offset(size.width, size.height)
                      )
                  )
                  onDrawWithContent {
                      clipPath(path) {
                          // this draws the actual image - if you don't call drawContent, it wont
                          // render anything
                          this@onDrawWithContent.drawContent()
                      }
                      val dotSize = size.width / 8f
                      // Clip a white border for the content
                      drawCircle(
                          Color.Black,
                          radius = dotSize,
                          center = Offset(
                              x = size.width - dotSize,
                              y = size.height - dotSize
                          ),
                          blendMode = BlendMode.Clear
                      )
                      // draw the red circle indication
                      drawCircle(
                          Color(0xFFEF5350), radius = dotSize *
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 2ccd6c4dd42bd4ecb20c68ef5bb9722bd19086e5e0f66feb0ba734fd028f5fb5
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Working with alpha and transparency is not always as straightforward as changing a single alpha value. In addition to changing an alpha, there is also the option to set a CompositingStrategy on a graphicsLayer. A CompositingStrategy determines how the content of the composable is composited (put together) with the other content already drawn on screen.

      The different strategies are:
  - id: live-compose-guide-graphics-draw-modifiers-custom-drawing-modifier-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#custom-drawing-modifier
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 06ef3b2450884122fe08abef702ce4ab50b43c427bb6ef730ff603f7930e4b47
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To create your own custom modifier, implement the DrawModifier interface. This gives you access to a ContentDrawScope, which is the same as what is exposed when using Modifier.drawWithContent(). You can then extract common drawing operations to custom drawing modifiers to clean up the code and provide convenient wrappers; for example, Modifier.background() is a convenient DrawModifier.

      For example, if you wanted to implement a Modifier that vertically flips content, you can create one as follows:

      class FlippedModifier : DrawModifier {
          override fun ContentDrawScope.draw() {
              scale(1f, -1f) {
                  this@draw.drawContent()
              }
          }
      }

      fun Modifier.flipped() = this.then(FlippedModifier())GraphicsModifiersSnippets.kt

      Then use this flipped modifier applied on Text:

      Text(
          "Hello Compose!",
          modifier = Modifier
              .flipped()
      )GraphicsModifiersSnippets.kt

      Figure 17

      : Custom Flipped Modifier on Text
  - id: live-compose-guide-graphics-draw-modifiers-drawbehind-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawbehind
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 6b436e3ea70a0890f16ff05e44f4236f909fc9e0ded74362dc78c0b843f7efb7
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.drawBehind lets you perform DrawScope operations behind the composable content that is drawn on screen. If you take a look at the implementation of Canvas, you might notice that it is just a convenient wrapper around Modifier.drawBehind.

      To draw a rounded rectangle behind Text:

      Text(
          "Hello Compose!",
          modifier = Modifier
              .drawBehind {
                  drawRoundRect(
                      Color(0xFFBBAAEE),
                      cornerRadius = CornerRadius(10.dp.toPx())
                  )
              }
              .padding(4.dp)
      )GraphicsModifiersSnippets.kt

      Which produces the following result:

      Figure 2

      : Text and a background drawn using Modifier.drawBehind
  - id: live-compose-guide-graphics-draw-modifiers-drawing-modifiers-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawing-modifiers
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: b4eae67c7c21d74f7ffc8b99fb3bf634df705956f84760306bc7e11b867b5f7d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      All drawing commands are done with a drawing modifier in Compose. There are three main drawing modifiers in Compose:

      drawWithContent

      drawBehind

      drawWithCache

      The base modifier for drawing is drawWithContent, where you can decide the drawing order of your Composable and the drawing commands issued inside the modifier. drawBehind is a convenient wrapper around drawWithContent which has the drawing order set to behind the content of the composable. drawWithCache calls either onDrawBehind or onDrawWithContent inside of it - and provides a mechanism for caching the objects created in them.
  - id: live-compose-guide-graphics-draw-modifiers-drawwithcache-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawwithcache
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 58696d56f30ec882608d9754ab54b94b7114ac0e784733cd0ef1217bcaa5e823
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.drawWithCache keeps the objects that are created inside of it cached. The objects are cached as long as the size of the drawing area is the same, or any state objects that are read have not changed. This modifier is useful for improving performance of drawing calls as it avoids the need to reallocate objects (such as: Brush, Shader, Path etc.) that are created on draw.

      Alternatively, you could also cache objects using remember, outside of the modifier. However, this is not always possible as you don't always have access to the composition. It can be more performant to use drawWithCache if the objects are only used for drawing.

      For example, if you create a Brush to draw a gradient behind a Text, using drawWithCache caches the Brush object until the size of the drawing area changes:

      Text(
          "Hello Compose!",
          modifier = Modifier
              .drawWithCache {
                  val brush = Brush.linearGradient(
                      listOf(
                          Color(0xFF9E82F0),
                          Color(0xFF42A5F5)
                      )
                  )
                  onDrawBehind {
                      drawRoundRect(
                          brush,
                          cornerRadius = CornerRadius(10.dp.toPx())
                      )
                  }
              }
      )GraphicsModifiersSnippets.kt

      Figure 3

      : Caching the Brush object with drawWithCache
  - id: live-compose-guide-graphics-draw-modifiers-drawwithcontent-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawwithcontent
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 3adf5e4db2791f7ff7b0c1c5cb44208bde33d0010a158f0fa10cc2847cbb7c6a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.drawWithContent lets you execute DrawScope operations before or after the content of the composable. Be sure to call drawContent to then render the actual content of the composable. With this modifier, you can decide the order of operations, if you want your content to be drawn before or after your custom drawing operations.

      For example, if you wished to render a radial gradient on top of your content to create a flashlight keyhole effect on the UI, you could do the following:

      var pointerOffset by remember {
          mutableStateOf(Offset(0f, 0f))
      }
      Column(
          modifier = Modifier
              .fillMaxSize()
              .pointerInput("dragging") {
                  detectDragGestures { change, dragAmount ->
                      pointerOffset += dragAmount
                  }
              }
              .onSizeChanged {
                  pointerOffset = Offset(it.width / 2f, it.height / 2f)
              }
              .drawWithContent {
                  drawContent()
                  // draws a fully black area with a small keyhole at pointerOffset that’ll show part of the UI.
                  drawRect(
                      Brush.radialGradient(
                          listOf(Color.Transparent, Color.Black),
                          center = pointerOffset,
                          radius = 100.dp.toPx(),
                      )
                  )
              }
      ) {
          // Your composables here
      }GraphicsModifiersSnippets.kt

      Figure 1

      : Modifier.drawWithContent used on top of a Composable to create a flashlight type UI experience.
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-alpha-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-alpha
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 1f6d496bc935f9614993ac233f83beb9b015915de2b9c1ca3e06cfc429e096bc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.graphicsLayer can be used to set an alpha (opacity) for the whole layer. 1.0f is fully opaque and 0.0f is invisible.

      Image(
          painter = painterResource(id = R.drawable.sunset),
          contentDescription = "clock",
          modifier = Modifier
              .graphicsLayer {
                  this.alpha = 0.5f
              }
      )GraphicsModifiersSnippets.kt

      Figure 11

      : Image with alpha applied
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-clip-shape
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 29501000ce9c10e1ecd87d5e52e6beeb3e5c46a4b862c32245f1cbf17723f52e
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      )
      }GraphicsModifiersSnippets.kt

      Figure 10

      : Clip applied on top of graphicsLayer transformation
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-clip-shape
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: d389a2b0b58a1aba0653aa49f808cacd2a319f40f86191d0a99d7717310787b4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Shape specifies the outline that the content clips to when clip = true. In this example, we set two boxes to have two different clips - one using graphicsLayer clip variable, and the other using the convenient wrapper Modifier.clip.

      Column(modifier = Modifier.padding(16.dp)) {
          Box(
              modifier = Modifier
                  .size(200.dp)
                  .graphicsLayer {
                      clip = true
                      shape = CircleShape
                  }
                  .background(Color(0xFFF06292))
          ) {
              Text(
                  "Hello Compose",
                  style = TextStyle(color = Color.Black, fontSize = 46.sp),
                  modifier = Modifier.align(Alignment.Center)
              )
          }
          Box(
              modifier = Modifier
                  .size(200.dp)
                  .clip(CircleShape)
                  .background(Color(0xFF4DB6AC))
          )
      }GraphicsModifiersSnippets.kt

      The contents of the first box (the text saying 'Hello Compose') are clipped to the circle shape:

      Figure 8

      : Clip applied to Box composable

      If you then apply a translationY to the top pink circle, you see that the bounds of the Composable are still the same, but the circle draws underneath the bottom circle (and outside of its bounds).

      Figure 9

      : Clip applied with translationY, and red border for outline

      To clip the composable to the region it's drawn in, you can add another Modifier.clip(RectangleShape) at the start of the modifier chain. The content then remains inside of the original bounds.

      Column(modifier = Modifier.padding(16.dp)) {
          Box(
              modifier = Modifier
                  .clip(RectangleShape)
                  .size(200.dp)
                  .border(2.dp, Color.Black)
                  .graphicsLayer {
                      clip = true
                      shape = CircleShape
                      translationY = 50.dp.toPx()
                  }
                  .background(Color(0xFFF06292))
          ) {
              Text(
                  "Hello Compose",
                  style = TextStyle(color = Color.Black, fontSize = 46.sp),
                  modifier = Modifier.align(Alignment.Center)
              )
          }

          Box(
              modifier = Modifier
                  .size(200.dp)
                  .clip(RoundedCornerShape(500.dp))
                  .background(Color(0xFF4DB6AC))
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-layer-outsets-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-layer-outsets
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 0cb20a06fece240c486f19454b8286cdb5768afc51a5a75f5043c7b1f7f20772
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      When a composable is drawn into an offscreen buffer (for example, when alpha is less than 1.0f, a RenderEffect is set, or CompositingStrategy.Offscreen is used), the offscreen texture defaults to the composable's measured layout bounds. Any drawing or shadow inside the layer that extends outside the composable's layout bounds (such as an outer glow drawn with Modifier.dropShadow) is implicitly clipped at the boundary of the offscreen buffer.

      Instead of adding Modifier.padding() (which shifts the layout measurement of adjacent UI elements), pass LayerOutsets to the outsets parameter of Modifier.graphicsLayer. This expands the offscreen buffer's visual bounds on each side without altering the composable's measured layout size. Note that LayerOutsets does not expand the layer's clip shape or shadow bounds, which remain based on the composable's original measured size (so keep clip = false on the graphicsLayer to avoid clipping to the original bounds):

      Box(
          modifier = Modifier
              .size(
                  width = 140.dp,
                  height = 56.dp
              )
              .graphicsLayer(
                  alpha = 0.5f,
                  outsets = LayerOutsets(24.dp),
                  clip = false
              )
              .dropShadow(
                  shape = pillShape,
                  shadow = Shadow(radius = 24.dp, color = Color.Cyan)
              )
              .background(color = Color(0xFF141824), shape = pillShape),
          contentAlignment = Alignment.Center
      ) {
          Text(
              text = "✨ Glow",
              color = Color.White,
              fontSize = 18.sp
          )
      }GraphicsModifiersSnippets.kt

      Figure 17

      : Offscreen layer outer glow without

      LayerOutsets

      (top, clipped at the composable's rectangular layout bounds) versus with

      LayerOutsets(24.dp)

      (bottom, unclipped)
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-origin-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-origin
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 8f4511eacabdacdc67e602edf4f5b12b001087ef401c9c34d1075c18ed036d90
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A transformOrigin can be specified. It is then used as the point from which transformations take place. All the examples so far have used TransformOrigin.Center, which is at (0.5f, 0.5f). If you specify the origin at (0f, 0f), the transformations then start from the top-left corner of the composable.

      If you change the origin with a rotationZ transformation, you can see that the item rotates around the top left of the composable:

      Image(
          painter = painterResource(id = R.drawable.sunset),
          contentDescription = "Sunset",
          modifier = Modifier
              .graphicsLayer {
                  this.transformOrigin = TransformOrigin(0f, 0f)
                  this.rotationX = 90f
                  this.rotationY = 275f
                  this.rotationZ = 180f
              }
      )GraphicsModifiersSnippets.kt

      Figure 7

      : Rotation applied with TransformOrigin set to 0f, 0f
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-rotate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-rotate
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 569304765ed49b3a1d82061c39812dc5097ee31cbbc1ad9e7af2adc46bf3ae41
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Set rotationX to rotate horizontally, rotationY to rotate vertically and rotationZ to rotate on the Z axis (standard rotation). This value is specified in degrees (0-360).

      Image(
          painter = painterResource(id = R.drawable.sunset),
          contentDescription = "Sunset",
          modifier = Modifier
              .graphicsLayer {
                  this.rotationX = 90f
                  this.rotationY = 275f
                  this.rotationZ = 180f
              }
      )GraphicsModifiersSnippets.kt

      Figure 6

      : rotationX, rotationY and rotationZ set on Image by Modifier.graphicsLayer
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-scale-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-scale
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 53888915384bffabb98fbb4b9bdea4d91dfb2887d7f94acb7ab37c42d645e0f4
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      scaleX and scaleY enlarges or shrinks content in the horizontal or vertical direction, respectively. A value of 1.0f indicates no change in scale, a value of 0.5f means half of the dimension.

      Image(
          painter = painterResource(id = R.drawable.sunset),
          contentDescription = "Sunset",
          modifier = Modifier
              .graphicsLayer {
                  this.scaleX = 1.2f
                  this.scaleY = 0.8f
              }
      )GraphicsModifiersSnippets.kt

      Figure 4

      : scaleX and scaleY applied to an Image composable
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-transformations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-transformations
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: db5956a7c9b1b83e1885f7e23661e39345f2916d87250ed16f70f75a706151c6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.graphicsLayer provides isolation for its drawing instructions; for example, various transformations can be applied using Modifier.graphicsLayer. These can be animated or modified without needing to re-execute the drawing lambda.

      Modifier.graphicsLayer does not change the measured size or placement of your composable, as it only affects the draw phase. This means that your composable might overlap others if it ends up drawing outside of its layout bounds.

      The following transformations can be applied with this modifier:
  - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-translate-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-translate
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 17862a4ae8a70911c9f9025a849a8a3f2db85dd5c6f8cceaf4ee647899410cdb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      translationX and translationY can be changed with graphicsLayer, translationX moves the composable left or right. translationY moves the composable up or down.

      Image(
          painter = painterResource(id = R.drawable.sunset),
          contentDescription = "Sunset",
          modifier = Modifier
              .graphicsLayer {
                  this.translationX = 100.dp.toPx()
                  this.translationY = 10.dp.toPx()
              }
      )GraphicsModifiersSnippets.kt

      Figure 5

      : translationX and translationY applied to Image with Modifier.graphicsLayer
  - id: live-compose-guide-graphics-draw-modifiers-graphicslayer-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphicsLayer
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: cb968dd381c1f3897a0ec5eb017f11fd0b64e26723e04e1ae718dd5e505adbc6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Modifier.graphicsLayer is a modifier that makes the content of the composable draw into a draw layer. A layer provides a few different functions, such as:

      Isolation for its drawing instructions (similar to RenderNode). Drawing instructions captured as part of a layer can be re-issued efficiently by the rendering pipeline without re-executing application code.

      Transformations that apply to all the drawing instructions contained within a layer.

      Rasterization for composition capabilities. When a layer is rasterized, its drawing instructions are executed and the output is captured into an offscreen buffer. Compositing such a buffer for subsequent frames is faster than executing the individual instructions, but it will behave as a bitmap when transforms like scaling or rotation are applied.
  - id: live-compose-guide-graphics-draw-modifiers-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#main-content
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 376ff166f5fbb21e36e34f4b5c8ec571b5a06148cadf5e528901498a31a121d1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: In addition to the Canvas composable, Compose has several useful graphics Modifiers which aid in drawing custom content. These modifiers are useful because they can be applied to any composable.
  - id: live-compose-guide-graphics-draw-modifiers-modulatealpha-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#modulatealpha
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 5fe7cb231e63aa25948301573919568941148beee57d818b911b2314c950b710
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      .background(Color(0xFF0A0E14))
                  .padding(48.dp),
              verticalArrangement = Arrangement.spacedBy(48.dp),
              horizontalAlignment = Alignment.CenterHorizontally
          ) {
              val pillShape = RoundedCornerShape(percent = 50)

              // Without outsets: alpha = 0.5f creates an offscreen buffer that clips the 24.dp glow
              Box(
                  modifier = Modifier
                      .size(
                          width = 140.dp,
                          height = 56.dp
                      )
                      .graphicsLayer(
                          alpha = 0.5f,
                          clip = false
                      )
                      .dropShadow(
                          shape = pillShape,
                          shadow = Shadow(radius = 24.dp, color = Color.Cyan)
                      )
                      .background(color = Color(0xFF141824), shape = pillShape),
                  contentAlignment = Alignment.Center
              ) {
                  Text(
                      text = "✨ Glow",
                      color = Color.White,
                      fontSize = 18.sp
                  )
              }

              Box(
                  modifier = Modifier
                      .size(
                          width = 140.dp,
                          height = 56.dp
                      )
                      .graphicsLayer(
                          alpha = 0.5f,
                          outsets = LayerOutsets(24.dp),
                          clip = false
                      )
                      .dropShadow(
                          shape = pillShape,
                          shadow = Shadow(radius = 24.dp, color = Color.Cyan)
                      )
                      .background(color = Color(0xFF141824), shape = pillShape),
                  contentAlignment = Alignment.Center
              ) {
                  Text(
                      text = "✨ Glow",
                      color = Color.White,
                      fontSize = 18.sp
                  )
              }
          }
      }


      val Purple = Color(0xFF7E57C2)
      val Yellow = Color(0xFFFFCA28)
      val Red = Color(0xFFEF5350)GraphicsModifiersSnippets.kt

      Figure 16

      : ModulateAlpha applies the alpha set to each individual draw command
  - id: live-compose-guide-graphics-draw-modifiers-modulatealpha-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#modulatealpha
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: bb69d2d2adbfa4aecb22d95360d6a59c4d37f61811456cc90f8274f5a9054dcc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      This composition strategy modulates the alpha for each of the drawing instructions recorded within the graphicsLayer. It won't create an offscreen buffer for alpha less than 1.0f unless a RenderEffect is set, so it can be more efficient for alpha rendering. However, it can provide different results for overlapping content. For use cases where it is known in advance that content is not overlapping, this can provide better performance than CompositingStrategy.Auto with alpha values less than 1.

      The following example demonstrates different composition strategies - applying different alphas to different parts of the composables, and applying a Modulate strategy:

      @Preview
      @Composable
      fun CompositingStrategy_ModulateAlpha() {
          Column(
              modifier = Modifier
                  .fillMaxSize()
                  .padding(32.dp)
          ) {
              // Base drawing, no alpha applied
              Canvas(
                  modifier = Modifier.size(200.dp)
              ) {
                  drawSquares()
              }

              Spacer(modifier = Modifier.size(36.dp))

              // Alpha 0.5f applied to whole composable
              Canvas(
                  modifier = Modifier
                      .size(200.dp)
                      .graphicsLayer {
                          alpha = 0.5f
                      }
              ) {
                  drawSquares()
              }
              Spacer(modifier = Modifier.size(36.dp))

              // 0.75f alpha applied to each draw call when using ModulateAlpha
              Canvas(
                  modifier = Modifier
                      .size(200.dp)
                      .graphicsLayer {
                          compositingStrategy = CompositingStrategy.ModulateAlpha
                          alpha = 0.75f
                      }
              ) {
                  drawSquares()
              }
          }
      }

      private fun DrawScope.drawSquares() {

          val size = Size(100.dp.toPx(), 100.dp.toPx())
          drawRect(color = Red, size = size)
          drawRect(
              color = Purple, size = size,
              topLeft = Offset(size.width / 4f, size.height / 4f)
          )
          drawRect(
              color = Yellow, size = size,
              topLeft = Offset(size.width / 4f * 2f, size.height / 4f * 2f)
          )
      }

      @Preview
      @Composable
      fun ModifierGraphicsLayerOutsets() {
          Column(
              modifier = Modifier
  - id: live-compose-guide-graphics-draw-modifiers-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#recommended_for_you
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: f6284201b85ce87442ee3774a4664922e92de1cb69ca08c006f9daa43c504723
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Graphics in Compose

      Customize an image {:#customize-image}

      Kotlin for Jetpack Compose
compose:
  id: live-compose-guide-graphics-draw-modifiers
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.draw
  sections:
    - id: live-compose-guide-graphics-draw-modifiers-additional-resources
      title: Additional resources
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-composable-to-bitmap
      title: Write contents of a composable to a bitmap
      aliases:
        - androidx.compose.ui.draw.drawWithContent
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-composable-to-bitmap-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy
      title: Compositing strategy
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto
      title: Auto (default)
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen
      title: Offscreen
      aliases:
        - androidx.compose.ui.draw.drawWithCache
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-2
      title: Offscreen
      aliases:
        - androidx.compose.ui.draw.drawWithContent
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-3
      title: Offscreen
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-3-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-custom-drawing-modifier
      title: Custom drawing modifier
      aliases:
        - androidx.compose.ui.draw.drawWithContent
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-custom-drawing-modifier-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-drawbehind
      title: "Modifier.drawBehind: Drawing behind a composable"
      aliases:
        - androidx.compose.ui.draw.drawBehind
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-drawbehind-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-drawing-modifiers
      title: Drawing modifiers
      aliases:
        - androidx.compose.ui.draw.drawWithContent
        - androidx.compose.ui.draw.drawBehind
        - androidx.compose.ui.draw.drawWithCache
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-drawing-modifiers-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-drawwithcache
      title: "Modifier.drawWithCache: Drawing and caching draw objects"
      aliases:
        - androidx.compose.ui.draw.drawWithCache
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-drawwithcache-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-drawwithcontent
      title: "Modifier.drawWithContent: Choose drawing order"
      aliases:
        - androidx.compose.ui.draw.drawWithContent
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-drawwithcontent-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-alpha
      title: Alpha
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-alpha-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape
      title: Clip and Shape
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-2
      title: Clip and Shape
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-layer-outsets
      title: Layer outsets
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-layer-outsets-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-origin
      title: Origin
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-origin-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-rotate
      title: Rotation
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-rotate-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-scale
      title: Scale - increase size
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-scale-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-transformations
      title: Transformations
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-transformations-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphics-modifier-translate
      title: Translation
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphics-modifier-translate-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-graphicslayer
      title: "Modifier.graphicsLayer: Apply transformations to composables"
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-graphicslayer-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-main-content-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-modulatealpha
      title: ModulateAlpha
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
        - androidx.compose.ui.graphics.CompositingStrategy
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-modulatealpha-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-modulatealpha-2
      title: ModulateAlpha
      aliases:
        - androidx.compose.ui.graphics.graphicsLayer
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-modulatealpha-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-modifiers-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-recommended-for-you-source
      relatedIds: []
---

# Graphics modifiers

Public source: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers

## Additional resources

For more examples using graphicsLayer and custom drawing, check out the following resources:

Making Jellyfish move in Compose

ADS 2022 Layouts and Graphics in Compose

Sources: [live-compose-guide-graphics-draw-modifiers-additional-resources-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#additional-resources)

## Write contents of a composable to a bitmap

A common use case is to create a Bitmap from a composable. To copy the contents of your composable to a Bitmap, create a GraphicsLayer using rememberGraphicsLayer().

Redirect the drawing commands to the new layer using drawWithContent() and graphicsLayer.record{}. Then draw the layer in the visible canvas using drawLayer:

val coroutineScope = rememberCoroutineScope()
val graphicsLayer = rememberGraphicsLayer()
Box(
    modifier = Modifier
        .drawWithContent {
            // call record to capture the content in the graphics layer
            graphicsLayer.record {
                // draw the contents of the composable into the graphics layer
                this@drawWithContent.drawContent()
            }
            // draw the graphics layer on the visible canvas
            drawLayer(graphicsLayer)
        }
        .clickable {
            coroutineScope.launch {
                val bitmap = graphicsLayer.toImageBitmap()
                // do something with the newly acquired bitmap
            }
        }
        .background(Color.White)
) {
    Text("Hello Android", fontSize = 26.sp)
}AdvancedGraphicsSnippets.kt

You can save the bitmap to disk and share it. For more details, see the full example snippet. Be sure to check for on device permissions before trying to save to disk.

Sources: [live-compose-guide-graphics-draw-modifiers-composable-to-bitmap-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#composable-to-bitmap)

## Compositing strategy

Working with alpha and transparency is not always as straightforward as changing a single alpha value. In addition to changing an alpha, there is also the option to set a CompositingStrategy on a graphicsLayer. A CompositingStrategy determines how the content of the composable is composited (put together) with the other content already drawn on screen.

The different strategies are:

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy)

## Auto (default)

The compositing strategy is determined by the rest of the graphicsLayer parameters. It renders the layer into an offscreen buffer if alpha is less than 1.0f or a RenderEffect is set. Whenever the alpha is less than 1f, a compositing layer is created automatically to render the contents and then draw this offscreen buffer to the destination with the corresponding alpha. Setting a RenderEffect or overscroll always renders content into an offscreen buffer regardless of the CompositingStrategy set.

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-auto)

## Offscreen

The contents of the composable are always rasterized to an offscreen texture or bitmap before rendering to the destination. This is useful for applying BlendMode operations to mask content, and for performance when rendering complex sets of drawing instructions.

An example of using CompositingStrategy.Offscreen is with BlendModes. In the following example, say you want to remove parts of an Image composable by issuing a draw command that uses BlendMode.Clear. If you don't set the compositingStrategy to CompositingStrategy.Offscreen, the BlendMode interacts with all the background content.

Image(
    painter = painterResource(id = R.drawable.dog),
    contentDescription = "Dog",
    contentScale = ContentScale.Crop,
    modifier = Modifier
        .size(120.dp)
        .aspectRatio(1f)
        .background(
            Brush.linearGradient(
                listOf(
                    Color(0xFFC5E1A5),
                    Color(0xFF80DEEA)
                )
            )
        )
        .padding(8.dp)
        .graphicsLayer {
            compositingStrategy = CompositingStrategy.Offscreen
        }
        .drawWithCache {
            val path = Path()
            path.addOval(
                Rect(
                    topLeft = Offset.Zero,
                    bottomRight = Offset(size.width, size.height)
                )
            )
            onDrawWithContent {
                clipPath(path) {
                    // this draws the actual image - if you don't call drawContent, it wont
                    // render anything
                    this@onDrawWithContent.drawContent()
                }
                val dotSize = size.width / 8f
                // Clip a white border for the content
                drawCircle(
                    Color.Black,
                    radius = dotSize,
                    center = Offset(
                        x = size.width - dotSize,
                        y = size.height - dotSize
                    ),
                    blendMode = BlendMode.Clear
                )
                // draw the red circle indication
                drawCircle(
                    Color(0xFFEF5350), radius = dotSize *

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen)

## Offscreen

0.8f,
                    center = Offset(
                        x = size.width - dotSize,
                        y = size.height - dotSize
                    )
                )
            }
        }
)GraphicsModifiersSnippets.kt

By setting the CompositingStrategy to Offscreen, it creates an offscreen texture to execute the commands to (applying the BlendMode only to the contents of this composable). It then renders it on top of what is already rendered on screen, not affecting the content already drawn.

Figure 12

: Modifier.drawWithContent on an Image showing a circle indication, with the BlendMode.Clear and CompositingStrategy.Offscreen inside app

If you didn't use CompositingStrategy.Offscreen, the results of applying BlendMode.Clear clears all the pixels in the destination, regardless of what was already set - leaving the window's rendering buffer (black) visible. Many of the BlendModes that involve alpha won't work as expected without an offscreen buffer. Note the black ring around the red circle indicator:

Figure 13

: Modifier.drawWithContent on an Image showing a circle indication, with the BlendMode.Clear and no CompositingStrategy set

To understand this a bit further: if the app had a translucent window background, and you did not use the CompositingStrategy.Offscreen, the BlendMode would interact with the whole app. It would clear all of the pixels to show the app or wallpaper underneath, as in this example:

Figure 14

: No CompositingStrategy set and using BlendMode.Clear with an app that has a translucent window background. Notice how the pink wallpaper is shown through the area around the red status circle.

It's worth noting that when using CompositingStrategy.Offscreen, an offscreen texture that is the size of the drawing area is created and rendered back on screen. Any drawing commands that are done with this strategy, are by default be clipped to this region. The following code snippet illustrates the differences when switching to using offscreen textures:

@Composable
fun CompositingStrategyExamples() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .wrapContentSize(Alignment.Center)
    ) {

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen)

## Offscreen

// Does not clip content even with a graphics layer usage here. By default, graphicsLayer
        // does not allocate + rasterize content into a separate layer but instead is used
        // for isolation. That is draw invalidations made outside of this graphicsLayer will not
        // re-record the drawing instructions in this composable as they have not changed
        Canvas(
            modifier = Modifier
                .graphicsLayer()
                .size(100.dp) // Note size of 100 dp here
                .border(2.dp, color = Color.Blue)
        ) {
            // ... and drawing a size of 200 dp here outside the bounds
            drawRect(color = Color.Magenta, size = Size(200.dp.toPx(), 200.dp.toPx()))
        }

        Spacer(modifier = Modifier.size(300.dp))

        /* Clips content as alpha usage here creates an offscreen buffer to rasterize content
        into first then draws to the original destination */
        Canvas(
            modifier = Modifier
                // force to an offscreen buffer
                .graphicsLayer(compositingStrategy = CompositingStrategy.Offscreen)
                .size(100.dp) // Note size of 100 dp here
                .border(2.dp, color = Color.Blue)
        ) {
            /* ... and drawing a size of 200 dp. However, because of the CompositingStrategy.Offscreen usage above, the
            content gets clipped */
            drawRect(color = Color.Red, size = Size(200.dp.toPx(), 200.dp.toPx()))
        }
    }
}GraphicsModifiersSnippets.kt

Figure 15

: CompositingStrategy.Auto versus CompositingStrategy.Offscreen - offscreen clips to the region, where auto doesn't

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-offscreen-3-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-offscreen)

## Custom drawing modifier

To create your own custom modifier, implement the DrawModifier interface. This gives you access to a ContentDrawScope, which is the same as what is exposed when using Modifier.drawWithContent(). You can then extract common drawing operations to custom drawing modifiers to clean up the code and provide convenient wrappers; for example, Modifier.background() is a convenient DrawModifier.

For example, if you wanted to implement a Modifier that vertically flips content, you can create one as follows:

class FlippedModifier : DrawModifier {
    override fun ContentDrawScope.draw() {
        scale(1f, -1f) {
            this@draw.drawContent()
        }
    }
}

fun Modifier.flipped() = this.then(FlippedModifier())GraphicsModifiersSnippets.kt

Then use this flipped modifier applied on Text:

Text(
    "Hello Compose!",
    modifier = Modifier
        .flipped()
)GraphicsModifiersSnippets.kt

Figure 17

: Custom Flipped Modifier on Text

Sources: [live-compose-guide-graphics-draw-modifiers-custom-drawing-modifier-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#custom-drawing-modifier)

## Modifier.drawBehind: Drawing behind a composable

Modifier.drawBehind lets you perform DrawScope operations behind the composable content that is drawn on screen. If you take a look at the implementation of Canvas, you might notice that it is just a convenient wrapper around Modifier.drawBehind.

To draw a rounded rectangle behind Text:

Text(
    "Hello Compose!",
    modifier = Modifier
        .drawBehind {
            drawRoundRect(
                Color(0xFFBBAAEE),
                cornerRadius = CornerRadius(10.dp.toPx())
            )
        }
        .padding(4.dp)
)GraphicsModifiersSnippets.kt

Which produces the following result:

Figure 2

: Text and a background drawn using Modifier.drawBehind

Sources: [live-compose-guide-graphics-draw-modifiers-drawbehind-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawbehind)

## Drawing modifiers

All drawing commands are done with a drawing modifier in Compose. There are three main drawing modifiers in Compose:

drawWithContent

drawBehind

drawWithCache

The base modifier for drawing is drawWithContent, where you can decide the drawing order of your Composable and the drawing commands issued inside the modifier. drawBehind is a convenient wrapper around drawWithContent which has the drawing order set to behind the content of the composable. drawWithCache calls either onDrawBehind or onDrawWithContent inside of it - and provides a mechanism for caching the objects created in them.

Sources: [live-compose-guide-graphics-draw-modifiers-drawing-modifiers-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawing-modifiers)

## Modifier.drawWithCache: Drawing and caching draw objects

Modifier.drawWithCache keeps the objects that are created inside of it cached. The objects are cached as long as the size of the drawing area is the same, or any state objects that are read have not changed. This modifier is useful for improving performance of drawing calls as it avoids the need to reallocate objects (such as: Brush, Shader, Path etc.) that are created on draw.

Alternatively, you could also cache objects using remember, outside of the modifier. However, this is not always possible as you don't always have access to the composition. It can be more performant to use drawWithCache if the objects are only used for drawing.

For example, if you create a Brush to draw a gradient behind a Text, using drawWithCache caches the Brush object until the size of the drawing area changes:

Text(
    "Hello Compose!",
    modifier = Modifier
        .drawWithCache {
            val brush = Brush.linearGradient(
                listOf(
                    Color(0xFF9E82F0),
                    Color(0xFF42A5F5)
                )
            )
            onDrawBehind {
                drawRoundRect(
                    brush,
                    cornerRadius = CornerRadius(10.dp.toPx())
                )
            }
        }
)GraphicsModifiersSnippets.kt

Figure 3

: Caching the Brush object with drawWithCache

Sources: [live-compose-guide-graphics-draw-modifiers-drawwithcache-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawwithcache)

## Modifier.drawWithContent: Choose drawing order

Modifier.drawWithContent lets you execute DrawScope operations before or after the content of the composable. Be sure to call drawContent to then render the actual content of the composable. With this modifier, you can decide the order of operations, if you want your content to be drawn before or after your custom drawing operations.

For example, if you wished to render a radial gradient on top of your content to create a flashlight keyhole effect on the UI, you could do the following:

var pointerOffset by remember {
    mutableStateOf(Offset(0f, 0f))
}
Column(
    modifier = Modifier
        .fillMaxSize()
        .pointerInput("dragging") {
            detectDragGestures { change, dragAmount ->
                pointerOffset += dragAmount
            }
        }
        .onSizeChanged {
            pointerOffset = Offset(it.width / 2f, it.height / 2f)
        }
        .drawWithContent {
            drawContent()
            // draws a fully black area with a small keyhole at pointerOffset that’ll show part of the UI.
            drawRect(
                Brush.radialGradient(
                    listOf(Color.Transparent, Color.Black),
                    center = pointerOffset,
                    radius = 100.dp.toPx(),
                )
            )
        }
) {
    // Your composables here
}GraphicsModifiersSnippets.kt

Figure 1

: Modifier.drawWithContent used on top of a Composable to create a flashlight type UI experience.

Sources: [live-compose-guide-graphics-draw-modifiers-drawwithcontent-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawwithcontent)

## Alpha

Modifier.graphicsLayer can be used to set an alpha (opacity) for the whole layer. 1.0f is fully opaque and 0.0f is invisible.

Image(
    painter = painterResource(id = R.drawable.sunset),
    contentDescription = "clock",
    modifier = Modifier
        .graphicsLayer {
            this.alpha = 0.5f
        }
)GraphicsModifiersSnippets.kt

Figure 11

: Image with alpha applied

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-alpha-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-alpha)

## Clip and Shape

Shape specifies the outline that the content clips to when clip = true. In this example, we set two boxes to have two different clips - one using graphicsLayer clip variable, and the other using the convenient wrapper Modifier.clip.

Column(modifier = Modifier.padding(16.dp)) {
    Box(
        modifier = Modifier
            .size(200.dp)
            .graphicsLayer {
                clip = true
                shape = CircleShape
            }
            .background(Color(0xFFF06292))
    ) {
        Text(
            "Hello Compose",
            style = TextStyle(color = Color.Black, fontSize = 46.sp),
            modifier = Modifier.align(Alignment.Center)
        )
    }
    Box(
        modifier = Modifier
            .size(200.dp)
            .clip(CircleShape)
            .background(Color(0xFF4DB6AC))
    )
}GraphicsModifiersSnippets.kt

The contents of the first box (the text saying 'Hello Compose') are clipped to the circle shape:

Figure 8

: Clip applied to Box composable

If you then apply a translationY to the top pink circle, you see that the bounds of the Composable are still the same, but the circle draws underneath the bottom circle (and outside of its bounds).

Figure 9

: Clip applied with translationY, and red border for outline

To clip the composable to the region it's drawn in, you can add another Modifier.clip(RectangleShape) at the start of the modifier chain. The content then remains inside of the original bounds.

Column(modifier = Modifier.padding(16.dp)) {
    Box(
        modifier = Modifier
            .clip(RectangleShape)
            .size(200.dp)
            .border(2.dp, Color.Black)
            .graphicsLayer {
                clip = true
                shape = CircleShape
                translationY = 50.dp.toPx()
            }
            .background(Color(0xFFF06292))
    ) {
        Text(
            "Hello Compose",
            style = TextStyle(color = Color.Black, fontSize = 46.sp),
            modifier = Modifier.align(Alignment.Center)
        )
    }

    Box(
        modifier = Modifier
            .size(200.dp)
            .clip(RoundedCornerShape(500.dp))
            .background(Color(0xFF4DB6AC))

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-clip-shape)

## Clip and Shape

)
}GraphicsModifiersSnippets.kt

Figure 10

: Clip applied on top of graphicsLayer transformation

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-clip-shape-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-clip-shape)

## Layer outsets

When a composable is drawn into an offscreen buffer (for example, when alpha is less than 1.0f, a RenderEffect is set, or CompositingStrategy.Offscreen is used), the offscreen texture defaults to the composable's measured layout bounds. Any drawing or shadow inside the layer that extends outside the composable's layout bounds (such as an outer glow drawn with Modifier.dropShadow) is implicitly clipped at the boundary of the offscreen buffer.

Instead of adding Modifier.padding() (which shifts the layout measurement of adjacent UI elements), pass LayerOutsets to the outsets parameter of Modifier.graphicsLayer. This expands the offscreen buffer's visual bounds on each side without altering the composable's measured layout size. Note that LayerOutsets does not expand the layer's clip shape or shadow bounds, which remain based on the composable's original measured size (so keep clip = false on the graphicsLayer to avoid clipping to the original bounds):

Box(
    modifier = Modifier
        .size(
            width = 140.dp,
            height = 56.dp
        )
        .graphicsLayer(
            alpha = 0.5f,
            outsets = LayerOutsets(24.dp),
            clip = false
        )
        .dropShadow(
            shape = pillShape,
            shadow = Shadow(radius = 24.dp, color = Color.Cyan)
        )
        .background(color = Color(0xFF141824), shape = pillShape),
    contentAlignment = Alignment.Center
) {
    Text(
        text = "✨ Glow",
        color = Color.White,
        fontSize = 18.sp
    )
}GraphicsModifiersSnippets.kt

Figure 17

: Offscreen layer outer glow without

LayerOutsets

(top, clipped at the composable's rectangular layout bounds) versus with

LayerOutsets(24.dp)

(bottom, unclipped)

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-layer-outsets-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-layer-outsets)

## Origin

A transformOrigin can be specified. It is then used as the point from which transformations take place. All the examples so far have used TransformOrigin.Center, which is at (0.5f, 0.5f). If you specify the origin at (0f, 0f), the transformations then start from the top-left corner of the composable.

If you change the origin with a rotationZ transformation, you can see that the item rotates around the top left of the composable:

Image(
    painter = painterResource(id = R.drawable.sunset),
    contentDescription = "Sunset",
    modifier = Modifier
        .graphicsLayer {
            this.transformOrigin = TransformOrigin(0f, 0f)
            this.rotationX = 90f
            this.rotationY = 275f
            this.rotationZ = 180f
        }
)GraphicsModifiersSnippets.kt

Figure 7

: Rotation applied with TransformOrigin set to 0f, 0f

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-origin-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-origin)

## Rotation

Set rotationX to rotate horizontally, rotationY to rotate vertically and rotationZ to rotate on the Z axis (standard rotation). This value is specified in degrees (0-360).

Image(
    painter = painterResource(id = R.drawable.sunset),
    contentDescription = "Sunset",
    modifier = Modifier
        .graphicsLayer {
            this.rotationX = 90f
            this.rotationY = 275f
            this.rotationZ = 180f
        }
)GraphicsModifiersSnippets.kt

Figure 6

: rotationX, rotationY and rotationZ set on Image by Modifier.graphicsLayer

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-rotate-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-rotate)

## Scale - increase size

scaleX and scaleY enlarges or shrinks content in the horizontal or vertical direction, respectively. A value of 1.0f indicates no change in scale, a value of 0.5f means half of the dimension.

Image(
    painter = painterResource(id = R.drawable.sunset),
    contentDescription = "Sunset",
    modifier = Modifier
        .graphicsLayer {
            this.scaleX = 1.2f
            this.scaleY = 0.8f
        }
)GraphicsModifiersSnippets.kt

Figure 4

: scaleX and scaleY applied to an Image composable

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-scale-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-scale)

## Transformations

Modifier.graphicsLayer provides isolation for its drawing instructions; for example, various transformations can be applied using Modifier.graphicsLayer. These can be animated or modified without needing to re-execute the drawing lambda.

Modifier.graphicsLayer does not change the measured size or placement of your composable, as it only affects the draw phase. This means that your composable might overlap others if it ends up drawing outside of its layout bounds.

The following transformations can be applied with this modifier:

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-transformations-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-transformations)

## Translation

translationX and translationY can be changed with graphicsLayer, translationX moves the composable left or right. translationY moves the composable up or down.

Image(
    painter = painterResource(id = R.drawable.sunset),
    contentDescription = "Sunset",
    modifier = Modifier
        .graphicsLayer {
            this.translationX = 100.dp.toPx()
            this.translationY = 10.dp.toPx()
        }
)GraphicsModifiersSnippets.kt

Figure 5

: translationX and translationY applied to Image with Modifier.graphicsLayer

Sources: [live-compose-guide-graphics-draw-modifiers-graphics-modifier-translate-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphics-modifier-translate)

## Modifier.graphicsLayer: Apply transformations to composables

Modifier.graphicsLayer is a modifier that makes the content of the composable draw into a draw layer. A layer provides a few different functions, such as:

Isolation for its drawing instructions (similar to RenderNode). Drawing instructions captured as part of a layer can be re-issued efficiently by the rendering pipeline without re-executing application code.

Transformations that apply to all the drawing instructions contained within a layer.

Rasterization for composition capabilities. When a layer is rasterized, its drawing instructions are executed and the output is captured into an offscreen buffer. Compositing such a buffer for subsequent frames is faster than executing the individual instructions, but it will behave as a bitmap when transforms like scaling or rotation are applied.

Sources: [live-compose-guide-graphics-draw-modifiers-graphicslayer-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#graphicsLayer)

## Introduction

In addition to the Canvas composable, Compose has several useful graphics Modifiers which aid in drawing custom content. These modifiers are useful because they can be applied to any composable.

Sources: [live-compose-guide-graphics-draw-modifiers-main-content-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#main-content)

## ModulateAlpha

This composition strategy modulates the alpha for each of the drawing instructions recorded within the graphicsLayer. It won't create an offscreen buffer for alpha less than 1.0f unless a RenderEffect is set, so it can be more efficient for alpha rendering. However, it can provide different results for overlapping content. For use cases where it is known in advance that content is not overlapping, this can provide better performance than CompositingStrategy.Auto with alpha values less than 1.

The following example demonstrates different composition strategies - applying different alphas to different parts of the composables, and applying a Modulate strategy:

@Preview
@Composable
fun CompositingStrategy_ModulateAlpha() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(32.dp)
    ) {
        // Base drawing, no alpha applied
        Canvas(
            modifier = Modifier.size(200.dp)
        ) {
            drawSquares()
        }

        Spacer(modifier = Modifier.size(36.dp))

        // Alpha 0.5f applied to whole composable
        Canvas(
            modifier = Modifier
                .size(200.dp)
                .graphicsLayer {
                    alpha = 0.5f
                }
        ) {
            drawSquares()
        }
        Spacer(modifier = Modifier.size(36.dp))

        // 0.75f alpha applied to each draw call when using ModulateAlpha
        Canvas(
            modifier = Modifier
                .size(200.dp)
                .graphicsLayer {
                    compositingStrategy = CompositingStrategy.ModulateAlpha
                    alpha = 0.75f
                }
        ) {
            drawSquares()
        }
    }
}

private fun DrawScope.drawSquares() {

    val size = Size(100.dp.toPx(), 100.dp.toPx())
    drawRect(color = Red, size = size)
    drawRect(
        color = Purple, size = size,
        topLeft = Offset(size.width / 4f, size.height / 4f)
    )
    drawRect(
        color = Yellow, size = size,
        topLeft = Offset(size.width / 4f * 2f, size.height / 4f * 2f)
    )
}

@Preview
@Composable
fun ModifierGraphicsLayerOutsets() {
    Column(
        modifier = Modifier

Sources: [live-compose-guide-graphics-draw-modifiers-modulatealpha-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#modulatealpha)

## ModulateAlpha

.background(Color(0xFF0A0E14))
            .padding(48.dp),
        verticalArrangement = Arrangement.spacedBy(48.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        val pillShape = RoundedCornerShape(percent = 50)

        // Without outsets: alpha = 0.5f creates an offscreen buffer that clips the 24.dp glow
        Box(
            modifier = Modifier
                .size(
                    width = 140.dp,
                    height = 56.dp
                )
                .graphicsLayer(
                    alpha = 0.5f,
                    clip = false
                )
                .dropShadow(
                    shape = pillShape,
                    shadow = Shadow(radius = 24.dp, color = Color.Cyan)
                )
                .background(color = Color(0xFF141824), shape = pillShape),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = "✨ Glow",
                color = Color.White,
                fontSize = 18.sp
            )
        }

        Box(
            modifier = Modifier
                .size(
                    width = 140.dp,
                    height = 56.dp
                )
                .graphicsLayer(
                    alpha = 0.5f,
                    outsets = LayerOutsets(24.dp),
                    clip = false
                )
                .dropShadow(
                    shape = pillShape,
                    shadow = Shadow(radius = 24.dp, color = Color.Cyan)
                )
                .background(color = Color(0xFF141824), shape = pillShape),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = "✨ Glow",
                color = Color.White,
                fontSize = 18.sp
            )
        }
    }
}


val Purple = Color(0xFF7E57C2)
val Yellow = Color(0xFFFFCA28)
val Red = Color(0xFFEF5350)GraphicsModifiersSnippets.kt

Figure 16

: ModulateAlpha applies the alpha set to each individual draw command

Sources: [live-compose-guide-graphics-draw-modifiers-modulatealpha-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#modulatealpha)

## Recommended for you

Note: link text is displayed when JavaScript is off

Graphics in Compose

Customize an image {:#customize-image}

Kotlin for Jetpack Compose

Sources: [live-compose-guide-graphics-draw-modifiers-recommended-for-you-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#recommended_for_you)
