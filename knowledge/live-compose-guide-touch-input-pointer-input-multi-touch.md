---
type: reference
title: "Multitouch: Panning, zooming, rotating"
description: "Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-touch-input-pointer-input-multi-touch-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch#main-content
    revision: web:compose-guide-touch-input-pointer-input-multi-touch:content@sha256:135355fab6c346847a3a817f712a3826f9abf65178c95a4e5ab70d8cd53ac462
    sha256: 6d9cfb6f3dc97045fd3eab22d5ef9e7b1531e6b742a1a75cb34de217a989e612
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To detect multitouch gestures used for panning, zooming and rotating, you can use the transformable modifier. This modifier does not transform elements by itself, it only detects the gestures.

      @Composable
      private fun TransformableSample() {
          // set up all transformation states
          var scale by remember { mutableFloatStateOf(1f) }
          var rotation by remember { mutableFloatStateOf(0f) }
          var offset by remember { mutableStateOf(Offset.Zero) }
          val state = rememberTransformableState { zoomChange, offsetChange, rotationChange ->
              scale *= zoomChange
              rotation += rotationChange
              offset += offsetChange
          }
          Box(
              Modifier
                  // apply other transformations like rotation and zoom
                  // on the pizza slice emoji
                  .graphicsLayer(
                      scaleX = scale,
                      scaleY = scale,
                      rotationZ = rotation,
                      translationX = offset.x,
                      translationY = offset.y
                  )
                  // add transformable to listen to multitouch transformation events
                  // after offset
                  .transformable(state = state)
                  .background(Color.Blue)
                  .fillMaxSize()
          )
      }GesturesSnippets.kt

      If you need to combine zooming, panning and rotation with other gestures, you can use the PointerInputScope.detectTransformGestures detector.
  - id: live-compose-guide-touch-input-pointer-input-multi-touch-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch#recommended_for_you
    revision: web:compose-guide-touch-input-pointer-input-multi-touch:content@sha256:135355fab6c346847a3a817f712a3826f9abf65178c95a4e5ab70d8cd53ac462
    sha256: d0769458eb8f3e0b3052475366bf820961be69931a434d94b1ab2a36290a5a10
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Understand gestures
compose:
  id: live-compose-guide-touch-input-pointer-input-multi-touch
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-touch-input-pointer-input-multi-touch-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.gestures.transformable
        - androidx.compose.foundation.gestures.rememberTransformableState
        - androidx.compose.foundation.gestures.detectTransformGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-multi-touch-main-content-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-multi-touch-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-multi-touch-recommended-for-you-source
      relatedIds: []
---

# Multitouch: Panning, zooming, rotating

Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch

## Introduction

To detect multitouch gestures used for panning, zooming and rotating, you can use the transformable modifier. This modifier does not transform elements by itself, it only detects the gestures.

@Composable
private fun TransformableSample() {
    // set up all transformation states
    var scale by remember { mutableFloatStateOf(1f) }
    var rotation by remember { mutableFloatStateOf(0f) }
    var offset by remember { mutableStateOf(Offset.Zero) }
    val state = rememberTransformableState { zoomChange, offsetChange, rotationChange ->
        scale *= zoomChange
        rotation += rotationChange
        offset += offsetChange
    }
    Box(
        Modifier
            // apply other transformations like rotation and zoom
            // on the pizza slice emoji
            .graphicsLayer(
                scaleX = scale,
                scaleY = scale,
                rotationZ = rotation,
                translationX = offset.x,
                translationY = offset.y
            )
            // add transformable to listen to multitouch transformation events
            // after offset
            .transformable(state = state)
            .background(Color.Blue)
            .fillMaxSize()
    )
}GesturesSnippets.kt

If you need to combine zooming, panning and rotation with other gestures, you can use the PointerInputScope.detectTransformGestures detector.

Sources: [live-compose-guide-touch-input-pointer-input-multi-touch-main-content-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Understand gestures

Sources: [live-compose-guide-touch-input-pointer-input-multi-touch-recommended-for-you-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/multi-touch#recommended_for_you)
