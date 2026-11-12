---
type: reference
title: "Guidance: Hand animation control to touch and back to fling"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
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
compose:
  id: guide-animatable-gesture-fling
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-gesture-fling
      title: "Guidance: Hand animation control to touch and back to fling"
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.Animatable.snapTo
        - androidx.compose.ui.input.pointer.util.VelocityTracker
        - gesture animation cancellation
        - drag then fling
        - interrupt animation on touch
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-advanced-main-content-2-source
        - live-compose-guide-animation-advanced-main-content-3-source
      relatedIds:
        - live-compose-guide-animation-advanced-main-content-2
        - live-compose-guide-animation-advanced-main-content-3
---

# Guidance: Hand animation control to touch and back to fling

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Hand animation control to touch and back to fling

Guidance: For custom drag animation, hand control to touch by stopping the ongoing Animatable animation, update drag values with snapTo, and collect samples with VelocityTracker. On release, pass measured velocity to animateDecay for a fling or animateTo the resting position. Launch animation work so gesture handling can continue. Limitation: this is a conceptual handoff, not a production gesture loop. Verify stop placement for each new gesture; immediately stopping a newly launched release animation would cancel the intended fling.

Sources: [live-compose-guide-animation-advanced-main-content-2-source](https://developer.android.com/develop/ui/compose/animation/advanced#main-content), [live-compose-guide-animation-advanced-main-content-3-source](https://developer.android.com/develop/ui/compose/animation/advanced#main-content)
