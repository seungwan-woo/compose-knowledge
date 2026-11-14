---
type: reference
title: "Guidance: Choose alpha compositing with overlap semantics in mind"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-auto
    revision: web:compose-guide-graphics-draw-modifiers:content@sha256:0246959fd0ac24a0273356acfab99572ef7be51262c54c8609d584bb8e0f504c
    sha256: 6c3f6c9a0b1df3dcc8095bb934be04504681cd0bc9e4bc210297fe9a4a28928c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: The compositing strategy is determined by the rest of the graphicsLayer parameters. It renders the layer into an offscreen buffer if alpha is less than 1.0f or a RenderEffect is set. Whenever the alpha is less than 1f, a compositing layer is created automatically to render the contents and then draw this offscreen buffer to the destination with the corresponding alpha. Setting a RenderEffect or overscroll always renders content into an offscreen buffer regardless of the CompositingStrategy set.
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
compose:
  id: guide-alpha-compositing-tradeoffs
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.graphics.CompositingStrategy
  sections:
    - id: guide-alpha-compositing-tradeoffs
      title: "Guidance: Choose alpha compositing with overlap semantics in mind"
      aliases:
        - androidx.compose.ui.graphics.CompositingStrategy
        - androidx.compose.ui.graphics.graphicsLayer
        - CompositingStrategy.Auto
        - CompositingStrategy.ModulateAlpha
        - offscreen buffer
        - alpha compositing
        - 알파 합성
        - 오프스크린 버퍼
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source
        - live-compose-guide-graphics-draw-modifiers-modulatealpha-source
      relatedIds:
        - live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto
        - live-compose-guide-graphics-draw-modifiers-modulatealpha
---

# Guidance: Choose alpha compositing with overlap semantics in mind

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose alpha compositing with overlap semantics in mind

Guidance: Account for offscreen rendering when using graphicsLayer alpha: CompositingStrategy.Auto creates an offscreen buffer when alpha is below 1. For content known not to overlap, ModulateAlpha applies alpha to individual drawing instructions and can avoid that buffer. Limitation: ModulateAlpha can change the appearance of overlapping content, so it is not a universal substitution. RenderEffect still requires offscreen rendering; Auto also documents offscreen rendering for overscroll regardless of the selected strategy.

Sources: [live-compose-guide-graphics-draw-modifiers-compositing-strategy-auto-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#compositing-strategy-auto), [live-compose-guide-graphics-draw-modifiers-modulatealpha-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#modulatealpha)
