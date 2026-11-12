---
type: reference
title: "Guidance: Cache drawing objects with drawWithCache"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-cache-drawing-objects
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.draw.drawWithCache
  sections:
    - id: guide-cache-drawing-objects
      title: "Guidance: Cache drawing objects with drawWithCache"
      aliases:
        - androidx.compose.ui.draw.drawWithCache
        - androidx.compose.ui.draw.CacheDrawScope.onDrawBehind
        - drawing object cache
        - brush allocation
        - 그리기 캐시
        - 브러시 재사용
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
      sourceIds:
        - live-compose-guide-graphics-draw-modifiers-drawwithcache-source
      relatedIds:
        - live-compose-guide-graphics-draw-modifiers-drawwithcache
---

# Guidance: Cache drawing objects with drawWithCache

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Cache drawing objects with drawWithCache

Guidance: Create reusable drawing objects such as Brush, Shader, or Path inside drawWithCache to avoid reallocating them on each draw. For example, create a gradient Brush in the cache block and draw with it from onDrawBehind. Objects used only for drawing can be cached here even where composition-based remember is unavailable. Limitation: this cache depends on the drawing area size and state read by the cache block; it is not a permanent cache across changes to those inputs.

Sources: [live-compose-guide-graphics-draw-modifiers-drawwithcache-source](https://developer.android.com/develop/ui/compose/graphics/draw/modifiers#drawwithcache)
