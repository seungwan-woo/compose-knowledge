---
type: reference
title: Gesture and animation
description: "Public source: https://developer.android.com/develop/ui/compose/animation/advanced"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-animation-advanced-main-content-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/advanced#main-content
    revision: web:compose-guide-animation-advanced:content@sha256:1fa9d7400b45f6c0476625b6ac76073f56ade62a4dfb85e241997156b5137a40
    sha256: 52b1d7fb617ef90e8c38725b352db5430fdd0710ee705e22c93330c956c6a941
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      event, we stop the Animatable by the stop method so that any ongoing animation is intercepted.

      During a drag event, we use snapTo to update the Animatable value with the value calculated from touch events. For fling, Compose provides VelocityTracker to record drag events and calculate velocity. The velocity can be fed directly to animateDecay for the fling animation. When we want to slide the offset value back to the original position, we specify the target offset value of 0f with the animateTo method.

      fun Modifier.swipeToDismiss(
          onDismissed: () -> Unit
      ): Modifier = composed {
          val offsetX = remember { Animatable(0f) }
          pointerInput(Unit) {
              // Used to calculate fling decay.
              val decay = splineBasedDecay<Float>(this)
              // Use suspend functions for touch events and the Animatable.
              coroutineScope {
                  while (true) {
                      val velocityTracker = VelocityTracker()
                      // Stop any ongoing animation.
                      offsetX.stop()
                      awaitPointerEventScope {
                          // Detect a touch down event.
                          val pointerId = awaitFirstDown().id

                          horizontalDrag(pointerId) { change ->
                              // Update the animation value with touch events.
                              launch {
                                  offsetX.snapTo(
                                      offsetX.value + change.positionChange().x
                                  )
                              }
                              velocityTracker.addPosition(
                                  change.uptimeMillis,
                                  change.position
                              )
                          }
                      }
                      // No longer receiving touch events. Prepare the animation.
                      val velocity = velocityTracker.calculateVelocity().x
                      val targetOffsetX = decay.calculateTargetValue(
                          offsetX.value,
                          velocity
                      )
                      // The animation stops when it reaches the bounds.
                      offsetX.updateBounds(
                          lowerBound = -size.width.toFloat(),
                          upperBound =
  - id: live-compose-guide-animation-advanced-main-content-3-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/advanced#main-content
    revision: web:compose-guide-animation-advanced:content@sha256:1fa9d7400b45f6c0476625b6ac76073f56ade62a4dfb85e241997156b5137a40
    sha256: 3b3a5e9da5c37f51708f1b2c39376d681bd8de1015947c73b00fe9ce0709c91d
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      size.width.toFloat()
                      )
                      launch {
                          if (targetOffsetX.absoluteValue <= size.width) {
                              // Not enough velocity; Slide back.
                              offsetX.animateTo(
                                  targetValue = 0f,
                                  initialVelocity = velocity
                              )
                          } else {
                              // The element was swiped away.
                              offsetX.animateDecay(velocity, decay)
                              onDismissed()
                          }
                      }
                  }
              }
          }
              .offset { IntOffset(offsetX.value.roundToInt(), 0) }
      }AdvancedAnimationSnippets.kt
  - id: live-compose-guide-animation-advanced-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/advanced#main-content
    revision: web:compose-guide-animation-advanced:content@sha256:1fa9d7400b45f6c0476625b6ac76073f56ade62a4dfb85e241997156b5137a40
    sha256: 9169e60f87af5b6895747fee4969e6bc3241e83346c95aae04e73177ba01b345
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      There are several things we have to take into consideration when we are working with touch events and animations, compared to when we are working with animations alone. First of all, we might need to interrupt an ongoing animation when touch events begin as user interaction should have the highest priority.

      In the following example, we use an Animatable to represent the offset position of a circle component. Touch events are processed with the pointerInput modifier. When we detect a new tap event, we call animateTo to animate the offset value to the tap position. A tap event can happen during the animation too, and in that case, animateTo interrupts the ongoing animation and starts the animation to the new target position while maintaining the velocity of the interrupted animation.

      @Composable
      fun Gesture() {
          val offset = remember { Animatable(Offset(0f, 0f), Offset.VectorConverter) }
          Box(
              modifier = Modifier
                  .fillMaxSize()
                  .pointerInput(Unit) {
                      coroutineScope {
                          while (true) {
                              // Detect a tap event and obtain its position.
                              awaitPointerEventScope {
                                  val position = awaitFirstDown().position

                                  launch {
                                      // Animate to the tap position.
                                      offset.animateTo(position)
                                  }
                              }
                          }
                      }
                  }
          ) {
              Circle(modifier = Modifier.offset { offset.value.toIntOffset() })
          }
      }

      private fun Offset.toIntOffset() = IntOffset(x.roundToInt(), y.roundToInt())AdvancedAnimationSnippets.kt

      Another frequent pattern is we need to synchronize animation values with values coming from touch events, such as drag. In the following example, we see "swipe to dismiss" implemented as a Modifier (rather than using the SwipeToDismiss composable). The horizontal offset of the element is represented as an Animatable. This API has a characteristic useful in gesture animation. Its value can be changed by touch events as well as the animation. When we receive a touch down
  - id: live-compose-guide-animation-advanced-recommended-for-you-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/advanced#recommended_for_you
    revision: web:compose-guide-animation-advanced:content@sha256:1fa9d7400b45f6c0476625b6ac76073f56ade62a4dfb85e241997156b5137a40
    sha256: bb5a9e4f18d0078f7289d4bdbb2632c1b5ae74796146b8fded2682136c0cacad
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Note: link text is displayed when JavaScript is off

      Value-based animations

      Drag, swipe, and fling

      Understand gestures
compose:
  id: live-compose-guide-animation-advanced
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: live-compose-guide-animation-advanced-main-content
      title: Introduction
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-advanced-main-content-source
      relatedIds: []
    - id: live-compose-guide-animation-advanced-main-content-2
      title: Introduction
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-advanced-main-content-2-source
      relatedIds: []
    - id: live-compose-guide-animation-advanced-main-content-3
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-advanced-main-content-3-source
      relatedIds: []
    - id: live-compose-guide-animation-advanced-recommended-for-you
      title: Recommended for you
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-advanced-recommended-for-you-source
      relatedIds: []
---

# Gesture and animation

Public source: https://developer.android.com/develop/ui/compose/animation/advanced

## Introduction

There are several things we have to take into consideration when we are working with touch events and animations, compared to when we are working with animations alone. First of all, we might need to interrupt an ongoing animation when touch events begin as user interaction should have the highest priority.

In the following example, we use an Animatable to represent the offset position of a circle component. Touch events are processed with the pointerInput modifier. When we detect a new tap event, we call animateTo to animate the offset value to the tap position. A tap event can happen during the animation too, and in that case, animateTo interrupts the ongoing animation and starts the animation to the new target position while maintaining the velocity of the interrupted animation.

@Composable
fun Gesture() {
    val offset = remember { Animatable(Offset(0f, 0f), Offset.VectorConverter) }
    Box(
        modifier = Modifier
            .fillMaxSize()
            .pointerInput(Unit) {
                coroutineScope {
                    while (true) {
                        // Detect a tap event and obtain its position.
                        awaitPointerEventScope {
                            val position = awaitFirstDown().position

                            launch {
                                // Animate to the tap position.
                                offset.animateTo(position)
                            }
                        }
                    }
                }
            }
    ) {
        Circle(modifier = Modifier.offset { offset.value.toIntOffset() })
    }
}

private fun Offset.toIntOffset() = IntOffset(x.roundToInt(), y.roundToInt())AdvancedAnimationSnippets.kt

Another frequent pattern is we need to synchronize animation values with values coming from touch events, such as drag. In the following example, we see "swipe to dismiss" implemented as a Modifier (rather than using the SwipeToDismiss composable). The horizontal offset of the element is represented as an Animatable. This API has a characteristic useful in gesture animation. Its value can be changed by touch events as well as the animation. When we receive a touch down

Sources: [live-compose-guide-animation-advanced-main-content-source](https://developer.android.com/develop/ui/compose/animation/advanced#main-content)

## Introduction

event, we stop the Animatable by the stop method so that any ongoing animation is intercepted.

During a drag event, we use snapTo to update the Animatable value with the value calculated from touch events. For fling, Compose provides VelocityTracker to record drag events and calculate velocity. The velocity can be fed directly to animateDecay for the fling animation. When we want to slide the offset value back to the original position, we specify the target offset value of 0f with the animateTo method.

fun Modifier.swipeToDismiss(
    onDismissed: () -> Unit
): Modifier = composed {
    val offsetX = remember { Animatable(0f) }
    pointerInput(Unit) {
        // Used to calculate fling decay.
        val decay = splineBasedDecay<Float>(this)
        // Use suspend functions for touch events and the Animatable.
        coroutineScope {
            while (true) {
                val velocityTracker = VelocityTracker()
                // Stop any ongoing animation.
                offsetX.stop()
                awaitPointerEventScope {
                    // Detect a touch down event.
                    val pointerId = awaitFirstDown().id

                    horizontalDrag(pointerId) { change ->
                        // Update the animation value with touch events.
                        launch {
                            offsetX.snapTo(
                                offsetX.value + change.positionChange().x
                            )
                        }
                        velocityTracker.addPosition(
                            change.uptimeMillis,
                            change.position
                        )
                    }
                }
                // No longer receiving touch events. Prepare the animation.
                val velocity = velocityTracker.calculateVelocity().x
                val targetOffsetX = decay.calculateTargetValue(
                    offsetX.value,
                    velocity
                )
                // The animation stops when it reaches the bounds.
                offsetX.updateBounds(
                    lowerBound = -size.width.toFloat(),
                    upperBound =

Sources: [live-compose-guide-animation-advanced-main-content-2-source](https://developer.android.com/develop/ui/compose/animation/advanced#main-content)

## Introduction

size.width.toFloat()
                )
                launch {
                    if (targetOffsetX.absoluteValue <= size.width) {
                        // Not enough velocity; Slide back.
                        offsetX.animateTo(
                            targetValue = 0f,
                            initialVelocity = velocity
                        )
                    } else {
                        // The element was swiped away.
                        offsetX.animateDecay(velocity, decay)
                        onDismissed()
                    }
                }
            }
        }
    }
        .offset { IntOffset(offsetX.value.roundToInt(), 0) }
}AdvancedAnimationSnippets.kt

Sources: [live-compose-guide-animation-advanced-main-content-3-source](https://developer.android.com/develop/ui/compose/animation/advanced#main-content)

## Recommended for you

Note: link text is displayed when JavaScript is off

Value-based animations

Drag, swipe, and fling

Understand gestures

Sources: [live-compose-guide-animation-advanced-recommended-for-you-source](https://developer.android.com/develop/ui/compose/animation/advanced#recommended_for_you)
