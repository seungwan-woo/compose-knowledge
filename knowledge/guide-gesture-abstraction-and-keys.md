---
type: reference
title: "Guidance: Choose a gesture abstraction and key custom handlers"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-custom
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: d9cf73e0d2ba7c10ab8aa78797bc4c435c650d738be5feaf399d974c8c107fa0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Not every gesture is implemented with an out-of-the-box gesture modifier. For example, you cannot use a modifier to react to a drag after long-press, a control-click, or a three-finger tap. Instead, you can write your own gesture handler to identify these custom gestures. You can create a gesture handler with the pointerInput modifier, which gives you access to the raw pointer events.

      The following code listens to raw pointer events:

      @Composable
      private fun LogPointerEvents(filter: PointerEventType? = null) {
          var log by remember { mutableStateOf("") }
          Column {
              Text(log)
              Box(
                  Modifier
                      .size(100.dp)
                      .background(Color.Red)
                      .pointerInput(filter) {
                          awaitPointerEventScope {
                              while (true) {
                                  val event = awaitPointerEvent()
                                  // handle pointer event
                                  if (filter == null || event.type == filter) {
                                      log = "${event.type}, ${event.changes.first().position}"
                                  }
                              }
                          }
                      }
              )
          }
      }UnderstandGesturesSnippets.kt

      If you break this snippet up, the core components are:

      The pointerInput modifier. You pass it one or more keys. When the value of one of those keys changes, the modifier content lambda is re-executed. The sample passes an optional filter to the composable. If the value of that filter changes, the pointer event handler should be re-executed to make sure the right events are logged.

      awaitPointerEventScope creates a coroutine scope that can be used to wait for pointer events.

      awaitPointerEvent suspends the coroutine until a next pointer event occurs.

      Although listening to raw input events is powerful, it is also complex to write a custom gesture based on this raw data. To simplify the creation of custom gestures, many utility methods are available.
  - id: live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#different-levels
    revision: web:compose-guide-touch-input-pointer-input-understand-gestures:content@sha256:1552875e2d6e089ff7b812d2722de7e1616239abf9d6d98dea6f8540f21b042a
    sha256: 0862db596e3f9ca7f5fe7684b98b159f4c0cd397f73696702ac3d48a405c6112
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Jetpack Compose provides different levels of abstraction for handling gestures. On the top level is component support. Composables like Button automatically include gesture support. To add gesture support to custom components, you can add gesture modifiers like clickable to arbitrary composables. Finally, if you need a custom gesture, you can use the pointerInput modifier.

      As a rule, build on the highest level of abstraction that offers the functionality you need. This way, you benefit from the best practices included in the layer. For example, Button contains more semantic information, used for accessibility, than clickable, which contains more information than a raw pointerInput implementation.
compose:
  id: guide-gesture-abstraction-and-keys
  artifact: androidx.compose.foundation:foundation
  fqn: androidx.compose.foundation.clickable
  sections:
    - id: guide-gesture-abstraction-and-keys
      title: "Guidance: Choose a gesture abstraction and key custom handlers"
      aliases:
        - androidx.compose.foundation.clickable
        - androidx.compose.ui.input.pointer.pointerInput
        - androidx.compose.ui.input.pointer.PointerInputScope.awaitPointerEventScope
        - custom gestures
        - pointer input keys
        - 제스처 처리
        - 포인터 입력
      requires:
        - artifact: androidx.compose.foundation:foundation
          version: null
      sourceIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source
        - live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source
      relatedIds:
        - live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels
        - live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom
---

# Guidance: Choose a gesture abstraction and key custom handlers

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose a gesture abstraction and key custom handlers

Guidance: Use the highest gesture abstraction that supports the interaction: a component such as Button, then a gesture modifier such as clickable, then pointerInput for custom gestures. Higher layers include more semantics for accessibility. A pointerInput handler can await raw events with awaitPointerEventScope and awaitPointerEvent; pass keys for inputs whose changes should re-execute the handler. Limitation: raw event handling is complex and carries less semantic information than the higher-level component or gesture modifier.

Sources: [live-compose-guide-touch-input-pointer-input-understand-gestures-different-levels-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#different-levels), [live-compose-guide-touch-input-pointer-input-understand-gestures-add-custom-source](https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures#add-custom)
