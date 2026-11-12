---
type: reference
title: "Brush: gradients and shaders"
description: "Public source: https://developer.android.com/develop/ui/compose/graphics/draw/brush"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-graphics-draw-brush-additional-resources-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#additional-resources
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 11453ea70cdeb9deff101e1cf8229d269a6b3c7b5d18e58d8dd76278360f2b68
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      For more examples of using Brush in Compose, check out the following resources:

      Animating brush Text coloring in Compose 🖌️

      Custom Graphics and Layouts in Compose - Android Dev Summit 2022

      JetLagged Sample - RuntimeShader Brush
  - id: live-compose-guide-graphics-draw-brush-agsl-runtimeshader-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#agsl-runtimeshader
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 3349e5de448e41b63449ac4c2c2a18a78c6e5d300a348c11fc34b3d48421ca57
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      .fillMaxWidth()
                  .height(200.dp)
          )
      }BrushExampleSnippets.kt

      Running this, you can see the following rendered on screen:

      Figure 7

      : Custom AGSL Shader running in Compose

      It's worth noting that you can do a lot more with shaders than just gradients, as it's all math-based calculations. For more information on AGSL, check out the AGSL documentation.
  - id: live-compose-guide-graphics-draw-brush-agsl-runtimeshader-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#agsl-runtimeshader
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 52113be5b923f1c9e030759b65af07dbe9f142b2ec0e6908e8fd5762899e866c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      AGSL offers a subset of GLSL Shader capabilities. Shaders can be written in AGSL and used with a Brush in Compose.

      To create a Shader brush, first define the Shader as AGSL shader string:

      @Language("AGSL")
      val CUSTOM_SHADER = """
          uniform float2 resolution;
          layout(color) uniform half4 color;
          layout(color) uniform half4 color2;

          half4 main(in float2 fragCoord) {
              float2 uv = fragCoord/resolution.xy;

              float mixValue = distance(uv, vec2(0, 1));
              return mix(color, color2, mixValue);
          }
      """.trimIndent()BrushExampleSnippets.kt

      The shader above takes two input colors, calculates the distance from the bottom left (vec2(0, 1)) of the drawing area and does a mix between the two colors based on the distance. This produces a gradient effect.

      Then, create the Shader Brush, and set the uniforms for resolution - the size of the drawing area, and the color and color2 you want to use as input to your custom gradient:

      val Coral = Color(0xFFF3A397)
      val LightYellow = Color(0xFFF8EE94)

      @RequiresApi(Build.VERSION_CODES.TIRAMISU)
      @Composable
      @Preview
      fun ShaderBrushExample() {
          Box(
              modifier = Modifier
                  .drawWithCache {
                      val shader = RuntimeShader(CUSTOM_SHADER)
                      val shaderBrush = ShaderBrush(shader)
                      shader.setFloatUniform("resolution", size.width, size.height)
                      onDrawBehind {
                          shader.setColorUniform(
                              "color",
                              android.graphics.Color.valueOf(
                                  LightYellow.red, LightYellow.green,
                                  LightYellow
                                      .blue,
                                  LightYellow.alpha
                              )
                          )
                          shader.setColorUniform(
                              "color2",
                              android.graphics.Color.valueOf(
                                  Coral.red,
                                  Coral.green,
                                  Coral.blue,
                                  Coral.alpha
                              )
                          )
                          drawRect(shaderBrush)
                      }
                  }
  - id: live-compose-guide-graphics-draw-brush-brush-size-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#brush-size
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 2fe26946bf73fc45f917edca6d4609ee2953578bfe7b8a02c4a4d41523c9a42c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      / 2f,
                  colorStops = listOf(0f, 0.95f)
              )
          }
      }

      Box(
          modifier = Modifier
              .fillMaxSize()
              .background(largeRadialGradient)
      )BrushExampleSnippets.kt

      Figure 5

      : Bigger radius on radial gradient, based on size of area

      It is worth noting that the actual size that is passed into the creation of the shader is determined from where it is invoked. By default, Brush will reallocate its Shader internally if the size is different from the last creation of the Brush, or if a state object used in creation of the shader has changed.

      The following code creates the shader three different times with different sizes, as the size of the drawing area changes:

      val colorStops = arrayOf(
          0.0f to Color.Yellow,
          0.2f to Color.Red,
          1f to Color.Blue
      )
      val brush = Brush.horizontalGradient(colorStops = colorStops)
      Box(
          modifier = Modifier
              .requiredSize(200.dp)
              .drawBehind {
                  drawRect(brush = brush) // will allocate a shader to occupy the 200 x 200 dp drawing area
                  inset(10f) {
            /* Will allocate a shader to occupy the 180 x 180 dp drawing area as the
             inset scope reduces the drawing  area by 10 pixels on the left, top, right,
            bottom sides */
                      drawRect(brush = brush)
                      inset(5f) {
              /* will allocate a shader to occupy the 170 x 170 dp drawing area as the
               inset scope reduces the  drawing area by 5 pixels on the left, top,
               right, bottom sides */
                          drawRect(brush = brush)
                      }
                  }
              }
      )BrushExampleSnippets.kt
  - id: live-compose-guide-graphics-draw-brush-brush-size-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#brush-size
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 0bded85d9db59d26e3010bdb0be92880702932459e536ca4d370cf4eaffba39a
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      If you know the size of the area in which your brush will be drawn, you can set the tile endX as we’ve seen above in the TileMode section. If you are in a DrawScope, you can use its size property to get the size of the area.

      If you don't know the size of your drawing area (for example if the Brush is assigned to Text), you can extend Shader and utilize the size of the drawing area in the createShader function.

      In this example, divide the size by 4 to repeat the pattern 4 times:

      val listColors = listOf(Color.Yellow, Color.Red, Color.Blue)
      val customBrush = remember {
          object : ShaderBrush() {
              override fun createShader(size: Size): Shader {
                  return LinearGradientShader(
                      colors = listColors,
                      from = Offset.Zero,
                      to = Offset(size.width / 4f, 0f),
                      tileMode = TileMode.Mirror
                  )
              }
          }
      }
      Box(
          modifier = Modifier
              .requiredSize(200.dp)
              .background(customBrush)
      )BrushExampleSnippets.kt

      Figure 3

      : Shader size divided by 4

      You can also change the brush size of any other gradient, such as radial gradients. If you don't specify a size and center, the gradient will occupy the full bounds of the DrawScope, and the center of the radial gradient defaults to the center of the DrawScope bounds. This results in the radial gradient's center appearing as the center of the smaller dimension (either width or height):

      Box(
          modifier = Modifier
              .fillMaxSize()
              .background(
                  Brush.radialGradient(
                      listOf(Color(0xFF2be4dc), Color(0xFF243484))
                  )
              )
      )BrushExampleSnippets.kt

      Figure 4

      : Radial Gradient set without size changes

      When the radial gradient is changed to set the radius size to the max dimension, you can see that it produces a better radial gradient effect:

      val largeRadialGradient = object : ShaderBrush() {
          override fun createShader(size: Size): Shader {
              val biggerDimension = maxOf(size.height, size.width)
              return RadialGradientShader(
                  colors = listOf(Color(0xFF2be4dc), Color(0xFF243484)),
                  center = size.center,
                  radius = biggerDimension
  - id: live-compose-guide-graphics-draw-brush-color-stops-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#color-stops
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 3957e4e0c3757068e66b8c9afa04182de5fae721e4e67ee25f6d274cbb990263
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To customize how the colors appear in the gradient, you can tweak the colorStops value for each one. colorStops should be specified as a fraction, between 0 and 1. Values greater than 1 will result in those colors not rendering as part of the gradient.

      You can configure the color stops to have different amounts, such as less or more of one color:

      val colorStops = arrayOf(
          0.0f to Color.Yellow,
          0.2f to Color.Red,
          1f to Color.Blue
      )
      Box(
          modifier = Modifier
              .requiredSize(200.dp)
              .background(Brush.horizontalGradient(colorStops = colorStops))
      )BrushExampleSnippets.kt

      The colors are dispersed at the provided offset as defined in the colorStop pair, less yellow than red and blue.

      Figure 2

      : Brush configured with different color stops
  - id: live-compose-guide-graphics-draw-brush-gradient-brushes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#gradient-brushes
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: fa3e0edfbce56dfa12eb0042e53f718cd1a7516e5e953ad0ba932d25ce868ba6
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are many built-in gradient brushes that can be used to achieve different gradient effects. These brushes allow you to specify the list of colors that you would like to create a gradient from.

      A list of available gradient brushes and their corresponding output:

      Gradient Brush Type Output Brush.horizontalGradient(colorList) Brush.linearGradient(colorList) Brush.verticalGradient(colorList) Brush.sweepGradient(colorList) Note: To get a smooth transition between colors - set the last color to the start color. Brush.radialGradient(colorList)
  - id: live-compose-guide-graphics-draw-brush-image-as-brush-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#image-as-brush
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 9800c402be4e22fd53b9c2e615c098b0ebe4dd1bb35441607ae70459acf142eb
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To use an ImageBitmap as a Brush, load up the image as an ImageBitmap, and create an ImageShader brush:

      val imageBrush =
          ShaderBrush(ImageShader(ImageBitmap.imageResource(id = R.drawable.dog)))

      // Use ImageShader Brush with background
      Box(
          modifier = Modifier
              .requiredSize(200.dp)
              .background(imageBrush)
      )

      // Use ImageShader Brush with TextStyle
      Text(
          text = "Hello Android!",
          style = TextStyle(
              brush = imageBrush,
              fontWeight = FontWeight.ExtraBold,
              fontSize = 36.sp
          )
      )

      // Use ImageShader Brush with DrawScope#drawCircle()
      Canvas(onDraw = {
          drawCircle(imageBrush)
      }, modifier = Modifier.size(200.dp))BrushExampleSnippets.kt

      The Brush is applied to a few different types of drawing: a background, the Text and Canvas. This outputs the following:

      Figure 6

      : Using ImageShader Brush to draw a background, draw Text and draw a Circle

      Notice that the text is now also rendered using the ImageBitmap to paint the pixels for the text.
  - id: live-compose-guide-graphics-draw-brush-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#main-content
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 3360e3cf77385ef25b0bc1badb8efd36dc8098f5c48069314ee882920e1796be
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      A Brush in Compose describes how something is drawn on screen: it determines the color(s) that are drawn in the drawing area (i.e. a circle, square, path). There are a few built-in Brushes that are useful for drawing, such as LinearGradient, RadialGradient or a plain SolidColor brush.

      Brushes can be used with Modifier.background(), TextStyle, or DrawScope draw calls to apply the painting style to the content being drawn.

      For example, a horizontal gradient brush can be applied to drawing a circle in DrawScope:

      val brush = Brush.horizontalGradient(listOf(Color.Red, Color.Blue))
      Canvas(
          modifier = Modifier.size(200.dp),
          onDraw = {
              drawCircle(brush)
          }
      )BrushExampleSnippets.kt

      Figure 1

      : Circle drawn with Horizontal Gradient
  - id: live-compose-guide-graphics-draw-brush-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#recommended_for_you
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: 57ee4677f1c57963718cdebfc2db42f11d99a9fb72ecb49e22d0bdc3be26383b
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Graphics Modifiers

      Graphics in Compose

      Style text
  - id: live-compose-guide-graphics-draw-brush-tilemode-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/brush#tilemode
    revision: web:compose-guide-graphics-draw-brush:content@sha256:9503f86d737e31dfdfece36d73671923ee843a6ff17d829d284a39fcd5657151
    sha256: e662fd5a561edf9ded6fa05707ad0d28fafc2d34f692848306c80c80fa60affc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Each gradient brush has the option to set a TileMode on it. You may not notice the TileMode if you haven’t set a start and end for the gradient, as it’ll default to fill the whole area. A TileMode will only tile the gradient if the size of the area is bigger than the Brush size.

      The following code will repeat the gradient pattern 4 times, since the endX is set to 50.dp and the size is set to 200.dp:

      val listColors = listOf(Color.Yellow, Color.Red, Color.Blue)
      val tileSize = with(LocalDensity.current) {
          50.dp.toPx()
      }
      Box(
          modifier = Modifier
              .requiredSize(200.dp)
              .background(
                  Brush.horizontalGradient(
                      listColors,
                      endX = tileSize,
                      tileMode = TileMode.Repeated
                  )
              )
      )BrushExampleSnippets.kt

      Here is a table detailing what the different Tile Modes do for the HorizontalGradient example above:

      TileMode Output TileMode.Repeated: Edge is repeated from last color to first. TileMode.Mirror: Edge is mirrored from last color to first. TileMode.Clamp: Edge is clamped to the final color. It’ll then paint the closest color for the rest of the region. TileMode.Decal: Render only up to the size of the bounds. TileMode.Decal leverages transparent black to sample content outside the original bounds whereas TileMode.Clamp samples the edge color.

      TileMode works in a similar way for the other directional gradients, the difference being the direction that the repetition occurs.
compose:
  id: live-compose-guide-graphics-draw-brush
  artifact: androidx.compose.ui:ui-graphics
  fqn: androidx.compose.ui.graphics
  sections:
    - id: live-compose-guide-graphics-draw-brush-additional-resources
      title: Additional resources
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-additional-resources-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-agsl-runtimeshader
      title: AGSL RuntimeShader brush
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-agsl-runtimeshader-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-agsl-runtimeshader-2
      title: AGSL RuntimeShader brush
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-agsl-runtimeshader-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-brush-size
      title: Change brush Size
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.TileMode
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-brush-size-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-brush-size-2
      title: Change brush Size
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-brush-size-2-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-color-stops
      title: Change distribution of colors with colorStops
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-color-stops-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-gradient-brushes
      title: Gradient brushes
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-gradient-brushes-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-image-as-brush
      title: Use an image as a brush
      aliases:
        - androidx.compose.ui.graphics.Brush
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-image-as-brush-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-main-content
      title: Introduction
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.SolidColor
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-main-content-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-graphics-draw-brush-tilemode
      title: Repeat a pattern with TileMode
      aliases:
        - androidx.compose.ui.graphics.Brush
        - androidx.compose.ui.graphics.TileMode
      requires:
        - artifact: androidx.compose.ui:ui-graphics
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-brush-tilemode-source
      relatedIds: []
---

# Brush: gradients and shaders

Public source: https://developer.android.com/develop/ui/compose/graphics/draw/brush

## Additional resources

For more examples of using Brush in Compose, check out the following resources:

Animating brush Text coloring in Compose 🖌️

Custom Graphics and Layouts in Compose - Android Dev Summit 2022

JetLagged Sample - RuntimeShader Brush

Sources: [live-compose-guide-graphics-draw-brush-additional-resources-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#additional-resources)

## AGSL RuntimeShader brush

AGSL offers a subset of GLSL Shader capabilities. Shaders can be written in AGSL and used with a Brush in Compose.

To create a Shader brush, first define the Shader as AGSL shader string:

@Language("AGSL")
val CUSTOM_SHADER = """
    uniform float2 resolution;
    layout(color) uniform half4 color;
    layout(color) uniform half4 color2;

    half4 main(in float2 fragCoord) {
        float2 uv = fragCoord/resolution.xy;

        float mixValue = distance(uv, vec2(0, 1));
        return mix(color, color2, mixValue);
    }
""".trimIndent()BrushExampleSnippets.kt

The shader above takes two input colors, calculates the distance from the bottom left (vec2(0, 1)) of the drawing area and does a mix between the two colors based on the distance. This produces a gradient effect.

Then, create the Shader Brush, and set the uniforms for resolution - the size of the drawing area, and the color and color2 you want to use as input to your custom gradient:

val Coral = Color(0xFFF3A397)
val LightYellow = Color(0xFFF8EE94)

@RequiresApi(Build.VERSION_CODES.TIRAMISU)
@Composable
@Preview
fun ShaderBrushExample() {
    Box(
        modifier = Modifier
            .drawWithCache {
                val shader = RuntimeShader(CUSTOM_SHADER)
                val shaderBrush = ShaderBrush(shader)
                shader.setFloatUniform("resolution", size.width, size.height)
                onDrawBehind {
                    shader.setColorUniform(
                        "color",
                        android.graphics.Color.valueOf(
                            LightYellow.red, LightYellow.green,
                            LightYellow
                                .blue,
                            LightYellow.alpha
                        )
                    )
                    shader.setColorUniform(
                        "color2",
                        android.graphics.Color.valueOf(
                            Coral.red,
                            Coral.green,
                            Coral.blue,
                            Coral.alpha
                        )
                    )
                    drawRect(shaderBrush)
                }
            }

Sources: [live-compose-guide-graphics-draw-brush-agsl-runtimeshader-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#agsl-runtimeshader)

## AGSL RuntimeShader brush

.fillMaxWidth()
            .height(200.dp)
    )
}BrushExampleSnippets.kt

Running this, you can see the following rendered on screen:

Figure 7

: Custom AGSL Shader running in Compose

It's worth noting that you can do a lot more with shaders than just gradients, as it's all math-based calculations. For more information on AGSL, check out the AGSL documentation.

Sources: [live-compose-guide-graphics-draw-brush-agsl-runtimeshader-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#agsl-runtimeshader)

## Change brush Size

If you know the size of the area in which your brush will be drawn, you can set the tile endX as we’ve seen above in the TileMode section. If you are in a DrawScope, you can use its size property to get the size of the area.

If you don't know the size of your drawing area (for example if the Brush is assigned to Text), you can extend Shader and utilize the size of the drawing area in the createShader function.

In this example, divide the size by 4 to repeat the pattern 4 times:

val listColors = listOf(Color.Yellow, Color.Red, Color.Blue)
val customBrush = remember {
    object : ShaderBrush() {
        override fun createShader(size: Size): Shader {
            return LinearGradientShader(
                colors = listColors,
                from = Offset.Zero,
                to = Offset(size.width / 4f, 0f),
                tileMode = TileMode.Mirror
            )
        }
    }
}
Box(
    modifier = Modifier
        .requiredSize(200.dp)
        .background(customBrush)
)BrushExampleSnippets.kt

Figure 3

: Shader size divided by 4

You can also change the brush size of any other gradient, such as radial gradients. If you don't specify a size and center, the gradient will occupy the full bounds of the DrawScope, and the center of the radial gradient defaults to the center of the DrawScope bounds. This results in the radial gradient's center appearing as the center of the smaller dimension (either width or height):

Box(
    modifier = Modifier
        .fillMaxSize()
        .background(
            Brush.radialGradient(
                listOf(Color(0xFF2be4dc), Color(0xFF243484))
            )
        )
)BrushExampleSnippets.kt

Figure 4

: Radial Gradient set without size changes

When the radial gradient is changed to set the radius size to the max dimension, you can see that it produces a better radial gradient effect:

val largeRadialGradient = object : ShaderBrush() {
    override fun createShader(size: Size): Shader {
        val biggerDimension = maxOf(size.height, size.width)
        return RadialGradientShader(
            colors = listOf(Color(0xFF2be4dc), Color(0xFF243484)),
            center = size.center,
            radius = biggerDimension

Sources: [live-compose-guide-graphics-draw-brush-brush-size-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#brush-size)

## Change brush Size

/ 2f,
            colorStops = listOf(0f, 0.95f)
        )
    }
}

Box(
    modifier = Modifier
        .fillMaxSize()
        .background(largeRadialGradient)
)BrushExampleSnippets.kt

Figure 5

: Bigger radius on radial gradient, based on size of area

It is worth noting that the actual size that is passed into the creation of the shader is determined from where it is invoked. By default, Brush will reallocate its Shader internally if the size is different from the last creation of the Brush, or if a state object used in creation of the shader has changed.

The following code creates the shader three different times with different sizes, as the size of the drawing area changes:

val colorStops = arrayOf(
    0.0f to Color.Yellow,
    0.2f to Color.Red,
    1f to Color.Blue
)
val brush = Brush.horizontalGradient(colorStops = colorStops)
Box(
    modifier = Modifier
        .requiredSize(200.dp)
        .drawBehind {
            drawRect(brush = brush) // will allocate a shader to occupy the 200 x 200 dp drawing area
            inset(10f) {
      /* Will allocate a shader to occupy the 180 x 180 dp drawing area as the
       inset scope reduces the drawing  area by 10 pixels on the left, top, right,
      bottom sides */
                drawRect(brush = brush)
                inset(5f) {
        /* will allocate a shader to occupy the 170 x 170 dp drawing area as the
         inset scope reduces the  drawing area by 5 pixels on the left, top,
         right, bottom sides */
                    drawRect(brush = brush)
                }
            }
        }
)BrushExampleSnippets.kt

Sources: [live-compose-guide-graphics-draw-brush-brush-size-2-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#brush-size)

## Change distribution of colors with colorStops

To customize how the colors appear in the gradient, you can tweak the colorStops value for each one. colorStops should be specified as a fraction, between 0 and 1. Values greater than 1 will result in those colors not rendering as part of the gradient.

You can configure the color stops to have different amounts, such as less or more of one color:

val colorStops = arrayOf(
    0.0f to Color.Yellow,
    0.2f to Color.Red,
    1f to Color.Blue
)
Box(
    modifier = Modifier
        .requiredSize(200.dp)
        .background(Brush.horizontalGradient(colorStops = colorStops))
)BrushExampleSnippets.kt

The colors are dispersed at the provided offset as defined in the colorStop pair, less yellow than red and blue.

Figure 2

: Brush configured with different color stops

Sources: [live-compose-guide-graphics-draw-brush-color-stops-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#color-stops)

## Gradient brushes

There are many built-in gradient brushes that can be used to achieve different gradient effects. These brushes allow you to specify the list of colors that you would like to create a gradient from.

A list of available gradient brushes and their corresponding output:

Gradient Brush Type Output Brush.horizontalGradient(colorList) Brush.linearGradient(colorList) Brush.verticalGradient(colorList) Brush.sweepGradient(colorList) Note: To get a smooth transition between colors - set the last color to the start color. Brush.radialGradient(colorList)

Sources: [live-compose-guide-graphics-draw-brush-gradient-brushes-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#gradient-brushes)

## Use an image as a brush

To use an ImageBitmap as a Brush, load up the image as an ImageBitmap, and create an ImageShader brush:

val imageBrush =
    ShaderBrush(ImageShader(ImageBitmap.imageResource(id = R.drawable.dog)))

// Use ImageShader Brush with background
Box(
    modifier = Modifier
        .requiredSize(200.dp)
        .background(imageBrush)
)

// Use ImageShader Brush with TextStyle
Text(
    text = "Hello Android!",
    style = TextStyle(
        brush = imageBrush,
        fontWeight = FontWeight.ExtraBold,
        fontSize = 36.sp
    )
)

// Use ImageShader Brush with DrawScope#drawCircle()
Canvas(onDraw = {
    drawCircle(imageBrush)
}, modifier = Modifier.size(200.dp))BrushExampleSnippets.kt

The Brush is applied to a few different types of drawing: a background, the Text and Canvas. This outputs the following:

Figure 6

: Using ImageShader Brush to draw a background, draw Text and draw a Circle

Notice that the text is now also rendered using the ImageBitmap to paint the pixels for the text.

Sources: [live-compose-guide-graphics-draw-brush-image-as-brush-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#image-as-brush)

## Introduction

A Brush in Compose describes how something is drawn on screen: it determines the color(s) that are drawn in the drawing area (i.e. a circle, square, path). There are a few built-in Brushes that are useful for drawing, such as LinearGradient, RadialGradient or a plain SolidColor brush.

Brushes can be used with Modifier.background(), TextStyle, or DrawScope draw calls to apply the painting style to the content being drawn.

For example, a horizontal gradient brush can be applied to drawing a circle in DrawScope:

val brush = Brush.horizontalGradient(listOf(Color.Red, Color.Blue))
Canvas(
    modifier = Modifier.size(200.dp),
    onDraw = {
        drawCircle(brush)
    }
)BrushExampleSnippets.kt

Figure 1

: Circle drawn with Horizontal Gradient

Sources: [live-compose-guide-graphics-draw-brush-main-content-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Graphics Modifiers

Graphics in Compose

Style text

Sources: [live-compose-guide-graphics-draw-brush-recommended-for-you-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#recommended_for_you)

## Repeat a pattern with TileMode

Each gradient brush has the option to set a TileMode on it. You may not notice the TileMode if you haven’t set a start and end for the gradient, as it’ll default to fill the whole area. A TileMode will only tile the gradient if the size of the area is bigger than the Brush size.

The following code will repeat the gradient pattern 4 times, since the endX is set to 50.dp and the size is set to 200.dp:

val listColors = listOf(Color.Yellow, Color.Red, Color.Blue)
val tileSize = with(LocalDensity.current) {
    50.dp.toPx()
}
Box(
    modifier = Modifier
        .requiredSize(200.dp)
        .background(
            Brush.horizontalGradient(
                listColors,
                endX = tileSize,
                tileMode = TileMode.Repeated
            )
        )
)BrushExampleSnippets.kt

Here is a table detailing what the different Tile Modes do for the HorizontalGradient example above:

TileMode Output TileMode.Repeated: Edge is repeated from last color to first. TileMode.Mirror: Edge is mirrored from last color to first. TileMode.Clamp: Edge is clamped to the final color. It’ll then paint the closest color for the rest of the region. TileMode.Decal: Render only up to the size of the bounds. TileMode.Decal leverages transparent black to sample content outside the original bounds whereas TileMode.Clamp samples the edge color.

TileMode works in a similar way for the other directional gradients, the difference being the direction that the repetition occurs.

Sources: [live-compose-guide-graphics-draw-brush-tilemode-source](https://developer.android.com/develop/ui/compose/graphics/draw/brush#tilemode)
