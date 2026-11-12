---
type: reference
title: "Guidance: Carry decay momentum through AnimationResult"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 246
    endLine: 280
    sha256: aff2f89e4d72e3d2f766c991a8980fc818bf58c0ed5a615e0741df421b9dfc21
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              return runAnimation(anim, initialVelocity, block)
          }

          /**
           * Start a decay animation (i.e. an animation that *slows down* from the given [initialVelocity]
           * starting at current [Animatable.value] until the velocity reaches 0. If there's already an
           * ongoing animation, the animation in-flight will be immediately cancelled. Decay animation is
           * often used after a fling gesture.
           *
           * [animationSpec] defines the decay animation that will be used for this animation. Some
           * options for this [animationSpec] include: [splineBasedDecay][androidx.compose
           * .animation.splineBasedDecay] and [exponentialDecay]. [block] will be invoked on each
           * animation frame.
           *
           * Returns an [AnimationResult] object, that contains the [reason][AnimationEndReason] for
           * ending the animation, and an end state of the animation. The reason for ending the animation
           * will be [Finished] if the animation finishes successfully without any interruption. If the
           * animation reaches the either [lowerBound] or [upperBound] in any dimension, the animation
           * will end with [BoundReached] being the end reason.
           *
           * If the animation gets interrupted by 1) another call to start an animation (i.e.
           * [animateTo]/[animateDecay]), 2) [Animatable.stop], or 3)[Animatable.snapTo], the canceled
           * animation will throw a [CancellationException] as the job gets canceled. As a result, all the
           * subsequent work in the caller's coroutine will be canceled. This is often the desired
           * behavior. If there's any cleanup that needs to be done when an animation gets canceled,
           * consider starting the animation in a `try-catch` block.
           *
           * __Note__, once the animation ends, its velocity will be reset to 0. If there's a need to
           * continue the momentum before the animation gets interrupted or reaches the bound, it's
           * recommended to use the velocity in the returned [AnimationResult.endState] to start another
           * animation.
           *
           * @sample androidx.compose.animation.core.samples.AnimatableDecayAndAnimateToSample
           */
compose:
  id: guide-animatable-decay-velocity-handoff
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-decay-velocity-handoff
      title: "Guidance: Carry decay momentum through AnimationResult"
      aliases:
        - androidx.compose.animation.core.Animatable.animateDecay
        - androidx.compose.animation.core.AnimationResult.endState
        - fling velocity handoff
        - BoundReached
        - animation momentum
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-246-source
      relatedIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-246
---

# Guidance: Carry decay momentum through AnimationResult

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Carry decay momentum through AnimationResult

Guidance: Feed a fling velocity to Animatable.animateDecay and use its returned AnimationResult.endState.velocity when a following animation should preserve momentum after reaching a bound. Inspect endReason to distinguish Finished from BoundReached. Limitation: Animatable.velocity resets to zero when the animation ends; an externally canceled animation throws CancellationException instead of completing the normal return path.

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
