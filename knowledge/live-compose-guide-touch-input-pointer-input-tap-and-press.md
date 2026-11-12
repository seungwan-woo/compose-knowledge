---
type: reference
title: Tap and press
description: "Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-dismiss-composable-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#dismiss-composable
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: 93b21d301f192f53770fd8d4e8c7a49d9e8bfbbf1d13e8282b0df54cb0ca3442
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      In the examples above, clickable and combinedClickable add useful functionality to your composables. They show a visual indication on interaction, respond to hovering, and include focus, keyboard, and accessibility support. But this extra behavior is not always desirable.

      Let's look at the image detail screen. The background should be semi-transparent and the user should be able to tap that background to dismiss the detail screen:

      In this case, that background should not have any visual indication on interaction, should not respond to hovering, should not be focusable, and its response to keyboard and accessibility events differ from that of a typical composable. Instead of trying to adapt the clickable behavior, you can drop down to a lower abstraction level and directly use the pointerInput modifier in combination with the detectTapGestures method:

      @Composable
      private fun Scrim(onClose: () -> Unit, modifier: Modifier = Modifier) {
          val strClose = stringResource(R.string.close)
          Box(
              modifier
                  // handle pointer input
                  .pointerInput(onClose) { detectTapGestures { onClose() } }
                  // handle accessibility services
                  .semantics(mergeDescendants = true) {
                      contentDescription = strClose
                      onClick {
                          onClose()
                          true
                      }
                  }
                  // handle physical keyboard input
                  .onKeyEvent {
                      if (it.key == Key.Escape) {
                          onClose()
                          true
                      } else {
                          false
                      }
                  }
                  // draw scrim
                  .background(Color.DarkGray.copy(alpha = 0.75f))
          )
      }TapAndPress.kt

      As the key of the pointerInput modifier you pass the onClose lambda. This automatically re-executes the lambda, making sure the right callback is called when the user taps the scrim.
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-double-tap-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#double-tap
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: 238d6c5d88d17a4051d7023bebd4dad902b0cda5db5f16f7bde3bbe8e8dd91b3
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Sometimes clickable and combinedClickable do not include enough information to respond to the interaction in the correct way. For example, composables might need access to the position within the composable's bounds where the interaction took place.

      Let's look at the image detail screen again. A best practice is to make it possible to zoom in on the image by double tapping:

      As you can see in the video, zooming in occurs around the position of the tap event. The result is different when we zoom in on the left part of the image versus the right part. We can use the pointerInput modifier in combination with the detectTapGestures to incorporate the tap position into our calculation:

      var zoomed by remember { mutableStateOf(false) }
      var zoomOffset by remember { mutableStateOf(Offset.Zero) }
      Image(
          painter = rememberAsyncImagePainter(model = photo.highResUrl),
          contentDescription = null,
          modifier = modifier
              .pointerInput(Unit) {
                  detectTapGestures(
                      onDoubleTap = { tapOffset ->
                          zoomOffset = if (zoomed) Offset.Zero else
                              calculateOffset(tapOffset, size)
                          zoomed = !zoomed
                      }
                  )
              }
              .graphicsLayer {
                  scaleX = if (zoomed) 2f else 1f
                  scaleY = if (zoomed) 2f else 1f
                  translationX = zoomOffset.x
                  translationY = zoomOffset.y
              }
      )TapAndPress.kt
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-long-press-show-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#long-press-show
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: 7963989314ff22626598cdbf69a6eb83909d7c28d1e4459fc1b20b7c0209739c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      combinedClickable lets you add double tap or long-press behavior in addition to normal click behavior. You can use combinedClickable to show a context menu when a user touches and holds a grid image:

      var contextMenuPhotoId by rememberSaveable { mutableStateOf<Int?>(null) }
      val haptics = LocalHapticFeedback.current
      LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 128.dp)) {
          items(photos, { it.id }) { photo ->
              ImageItem(
                  photo,
                  Modifier
                      .combinedClickable(
                          onClick = { activePhotoId = photo.id },
                          onLongClick = {
                              haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                              contextMenuPhotoId = photo.id
                          },
                          onLongClickLabel = stringResource(R.string.open_context_menu)
                      )
              )
          }
      }
      if (contextMenuPhotoId != null) {
          PhotoActionsSheet(
              photo = photos.first { it.id == contextMenuPhotoId },
              onDismissSheet = { contextMenuPhotoId = null }
          )
      }TapAndPress.kt

      As a best practice, you should include haptic feedback when the user long-presses elements, which is why the snippet includes the performHapticFeedback invocation.
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#main-content
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: 7a7ad653a5f29a57b60605783a1ed1d8145d004311d5a5b1d37e3504b7d5dca1
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Many composables have built-in support for taps or clicks and include an onClick lambda. For example, you can create a clickable Surface that includes all Material Design behavior appropriate for interaction with surfaces:

      Surface(onClick = { /* handle click */ }) {
          Text("Click me!", Modifier.padding(24.dp))
      }TapAndPress.kt

      But clicks are not the only way a user can interact with composables. This page focuses on gestures that involve a single pointer, where the position of that pointer is not significant for the handling of that event. The following table lists these types of gestures:

      Gesture Description Tap (or click) Pointer goes down and then up Double tap Pointer goes down, up, down, up Long-press Pointer goes down, and is held for a longer time Press Pointer goes down
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#recommended_for_you
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: 1023b4f84e8675424e380e40b37aff044c220af66611bd3897b0ac3cf3a3a2dc
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Understand gestures

      Material Design 2 in Compose

      Kotlin for Jetpack Compose
  - id: live-compose-guide-touch-input-pointer-input-tap-and-press-respond-tap-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#respond-tap
    revision: web:compose-guide-touch-input-pointer-input-tap-and-press:content@sha256:71542c15fb624e6fb6cc5a4131bb8620b26e72cc4aa18e8b9888492590582d20
    sha256: c0f8f31e0128a0e109f3295f7f8b95d8f8d6a1fd6fbae46ae0ab0c9c313d44ed
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      clickable is a commonly used modifier that makes a composable react to taps or clicks. This modifier also adds additional features, such as support for focus, mouse and stylus hovering, and a customizable visual indication when pressed. The modifier responds to "clicks" in the widest sense of the word-- not only with mouse or finger, but also click events through keyboard input or when using accessibility services.

      Imagine a grid of images, where an image shows full-screen when a user clicks on it:

      You can add the clickable modifier to each item in the grid to implement this behavior:

      @Composable
      private fun ImageGrid(photos: List<Photo>) {
          var activePhotoId by rememberSaveable { mutableStateOf<Int?>(null) }
          LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 128.dp)) {
              items(photos, { it.id }) { photo ->
                  ImageItem(
                      photo,
                      Modifier.clickable { activePhotoId = photo.id }
                  )
              }
          }
          if (activePhotoId != null) {
              FullScreenImage(
                  photo = photos.first { it.id == activePhotoId },
                  onDismiss = { activePhotoId = null }
              )
          }
      }TapAndPress.kt

      The clickable modifier also adds additional behavior:

      interactionSource and indication, which draw a ripple by default when a user taps the composable. Learn how to customize these on the Handling user interactions page.

      Allows accessibility services to interact with the element by setting the semantics information.

      Supports keyboard or joystick interaction by allowing focus and pressing Enter or the center of the d-pad to interact.

      Make the element hoverable, so it responds to the mouse or stylus hovering over it.
compose:
  id: live-compose-guide-touch-input-pointer-input-tap-and-press
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation
  sections:
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-dismiss-composable
      title: Dismiss a composable by tapping a scrim
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-dismiss-composable-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-double-tap
      title: Double tap to zoom
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.foundation.combinedClickable
        - androidx.compose.foundation.gestures.detectTapGestures
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-double-tap-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-long-press-show
      title: Long-press to show a contextual context menu
      aliases:
        - androidx.compose.foundation.combinedClickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-long-press-show-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-main-content
      title: Introduction
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-main-content-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-recommended-for-you-source
      relatedIds: []
    - id: live-compose-guide-touch-input-pointer-input-tap-and-press-respond-tap
      title: Respond to tap or click
      aliases:
        - androidx.compose.foundation.clickable
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-tap-and-press-respond-tap-source
      relatedIds: []
---

# Tap and press

Public source: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press

## Dismiss a composable by tapping a scrim

In the examples above, clickable and combinedClickable add useful functionality to your composables. They show a visual indication on interaction, respond to hovering, and include focus, keyboard, and accessibility support. But this extra behavior is not always desirable.

Let's look at the image detail screen. The background should be semi-transparent and the user should be able to tap that background to dismiss the detail screen:

In this case, that background should not have any visual indication on interaction, should not respond to hovering, should not be focusable, and its response to keyboard and accessibility events differ from that of a typical composable. Instead of trying to adapt the clickable behavior, you can drop down to a lower abstraction level and directly use the pointerInput modifier in combination with the detectTapGestures method:

@Composable
private fun Scrim(onClose: () -> Unit, modifier: Modifier = Modifier) {
    val strClose = stringResource(R.string.close)
    Box(
        modifier
            // handle pointer input
            .pointerInput(onClose) { detectTapGestures { onClose() } }
            // handle accessibility services
            .semantics(mergeDescendants = true) {
                contentDescription = strClose
                onClick {
                    onClose()
                    true
                }
            }
            // handle physical keyboard input
            .onKeyEvent {
                if (it.key == Key.Escape) {
                    onClose()
                    true
                } else {
                    false
                }
            }
            // draw scrim
            .background(Color.DarkGray.copy(alpha = 0.75f))
    )
}TapAndPress.kt

As the key of the pointerInput modifier you pass the onClose lambda. This automatically re-executes the lambda, making sure the right callback is called when the user taps the scrim.

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-dismiss-composable-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#dismiss-composable)

## Double tap to zoom

Sometimes clickable and combinedClickable do not include enough information to respond to the interaction in the correct way. For example, composables might need access to the position within the composable's bounds where the interaction took place.

Let's look at the image detail screen again. A best practice is to make it possible to zoom in on the image by double tapping:

As you can see in the video, zooming in occurs around the position of the tap event. The result is different when we zoom in on the left part of the image versus the right part. We can use the pointerInput modifier in combination with the detectTapGestures to incorporate the tap position into our calculation:

var zoomed by remember { mutableStateOf(false) }
var zoomOffset by remember { mutableStateOf(Offset.Zero) }
Image(
    painter = rememberAsyncImagePainter(model = photo.highResUrl),
    contentDescription = null,
    modifier = modifier
        .pointerInput(Unit) {
            detectTapGestures(
                onDoubleTap = { tapOffset ->
                    zoomOffset = if (zoomed) Offset.Zero else
                        calculateOffset(tapOffset, size)
                    zoomed = !zoomed
                }
            )
        }
        .graphicsLayer {
            scaleX = if (zoomed) 2f else 1f
            scaleY = if (zoomed) 2f else 1f
            translationX = zoomOffset.x
            translationY = zoomOffset.y
        }
)TapAndPress.kt

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-double-tap-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#double-tap)

## Long-press to show a contextual context menu

combinedClickable lets you add double tap or long-press behavior in addition to normal click behavior. You can use combinedClickable to show a context menu when a user touches and holds a grid image:

var contextMenuPhotoId by rememberSaveable { mutableStateOf<Int?>(null) }
val haptics = LocalHapticFeedback.current
LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 128.dp)) {
    items(photos, { it.id }) { photo ->
        ImageItem(
            photo,
            Modifier
                .combinedClickable(
                    onClick = { activePhotoId = photo.id },
                    onLongClick = {
                        haptics.performHapticFeedback(HapticFeedbackType.LongPress)
                        contextMenuPhotoId = photo.id
                    },
                    onLongClickLabel = stringResource(R.string.open_context_menu)
                )
        )
    }
}
if (contextMenuPhotoId != null) {
    PhotoActionsSheet(
        photo = photos.first { it.id == contextMenuPhotoId },
        onDismissSheet = { contextMenuPhotoId = null }
    )
}TapAndPress.kt

As a best practice, you should include haptic feedback when the user long-presses elements, which is why the snippet includes the performHapticFeedback invocation.

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-long-press-show-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#long-press-show)

## Introduction

Many composables have built-in support for taps or clicks and include an onClick lambda. For example, you can create a clickable Surface that includes all Material Design behavior appropriate for interaction with surfaces:

Surface(onClick = { /* handle click */ }) {
    Text("Click me!", Modifier.padding(24.dp))
}TapAndPress.kt

But clicks are not the only way a user can interact with composables. This page focuses on gestures that involve a single pointer, where the position of that pointer is not significant for the handling of that event. The following table lists these types of gestures:

Gesture Description Tap (or click) Pointer goes down and then up Double tap Pointer goes down, up, down, up Long-press Pointer goes down, and is held for a longer time Press Pointer goes down

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-main-content-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Understand gestures

Material Design 2 in Compose

Kotlin for Jetpack Compose

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-recommended-for-you-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#recommended_for_you)

## Respond to tap or click

clickable is a commonly used modifier that makes a composable react to taps or clicks. This modifier also adds additional features, such as support for focus, mouse and stylus hovering, and a customizable visual indication when pressed. The modifier responds to "clicks" in the widest sense of the word-- not only with mouse or finger, but also click events through keyboard input or when using accessibility services.

Imagine a grid of images, where an image shows full-screen when a user clicks on it:

You can add the clickable modifier to each item in the grid to implement this behavior:

@Composable
private fun ImageGrid(photos: List<Photo>) {
    var activePhotoId by rememberSaveable { mutableStateOf<Int?>(null) }
    LazyVerticalGrid(columns = GridCells.Adaptive(minSize = 128.dp)) {
        items(photos, { it.id }) { photo ->
            ImageItem(
                photo,
                Modifier.clickable { activePhotoId = photo.id }
            )
        }
    }
    if (activePhotoId != null) {
        FullScreenImage(
            photo = photos.first { it.id == activePhotoId },
            onDismiss = { activePhotoId = null }
        )
    }
}TapAndPress.kt

The clickable modifier also adds additional behavior:

interactionSource and indication, which draw a ripple by default when a user taps the composable. Learn how to customize these on the Handling user interactions page.

Allows accessibility services to interact with the element by setting the semantics information.

Supports keyboard or joystick interaction by allowing focus and pressing Enter or the center of the d-pad to interact.

Make the element hoverable, so it responds to the mouse or stylus hovering over it.

Sources: [live-compose-guide-touch-input-pointer-input-tap-and-press-respond-tap-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/tap-and-press#respond-tap)
