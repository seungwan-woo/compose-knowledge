---
type: reference
title: "Guidance: Sequence animations with suspending calls"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 211
    endLine: 245
    sha256: 85b519c4d6d2a65beee7cbf0c59bc5fa2e4012a2de5335aa5d7064ec7cdf2189
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * If the animation gets interrupted by 1) another call to start an animation (i.e.
           * [animateTo]/[animateDecay]), 2) [Animatable.stop], or 3)[Animatable.snapTo], the canceled
           * animation will throw a [CancellationException] as the job gets canceled. As a result, all the
           * subsequent work in the caller's coroutine will be canceled. This is often the desired
           * behavior. If there's any cleanup that needs to be done when an animation gets canceled,
           * consider starting the animation in a `try-catch` block.
           *
           * __Note__: once the animation ends, its velocity will be reset to 0. The animation state at
           * the point of interruption/reaching bound is captured in the returned [AnimationResult]. If
           * there's a need to continue the momentum that the animation had before it was interrupted or
           * reached the bound, it's recommended to use the velocity in the returned
           * [AnimationResult.endState] to start another animation.
           *
           * @sample androidx.compose.animation.core.samples.AnimatableFadeIn
           */
          public suspend fun animateTo(
              targetValue: T,
              animationSpec: AnimationSpec<T> = defaultSpringSpec,
              initialVelocity: T = velocity,
              block: (Animatable<T, V>.() -> Unit)? = null,
          ): AnimationResult<T, V> {
              val specToUse =
                  if (animationSpec is InterruptionAwareAnimationSpec<T>) {
                      if (isRunning) animationSpec.interruptionSpec else animationSpec.animationSpec
                  } else {
                      animationSpec
                  }
              val anim =
                  TargetBasedAnimation(
                      animationSpec = specToUse,
                      initialValue = value,
                      targetValue = targetValue,
                      typeConverter = typeConverter,
                      initialVelocity = initialVelocity,
  - id: live-compose-guide-animation-quick-guide-sequential-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#sequential-animations
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: ba8e335fc274f4104b1c7f94fb3e62073a452f2171916941a6046bd1a9a7a023
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 14.

      Diagram indicating how a sequential animation progresses, one by one.

      Use the Animatable coroutine APIs to perform sequential or concurrent animations. Calling animateTo on the Animatable one after the other causes each animation to wait for the previous animations to finish before proceeding. This is because it is a suspend function.

      val alphaAnimation = remember { Animatable(0f) }
      val yAnimation = remember { Animatable(0f) }

      LaunchedEffect("animationKey") {
          alphaAnimation.animateTo(1f)
          yAnimation.animateTo(100f)
          yAnimation.animateTo(500f, animationSpec = tween(100))
      }AnimationQuickGuide.kt
compose:
  id: guide-animatable-sequential-suspend
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-sequential-suspend
      title: "Guidance: Sequence animations with suspending calls"
      aliases:
        - androidx.compose.animation.core.Animatable.animateTo
        - sequential animations
        - await animation completion
        - animation choreography
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-sequential-animations-source
        - live-androidx-animation-animation-core-animation-core-animatable-lines-211-source
      relatedIds:
        - live-compose-guide-animation-quick-guide-sequential-animations
        - live-androidx-animation-animation-core-animation-core-animatable-lines-211
---

# Guidance: Sequence animations with suspending calls

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Sequence animations with suspending calls

Guidance: To run animations one after another, call Animatable.animateTo sequentially in one coroutine: alpha.animateTo(1f), then offset.animateTo(100f). Each call suspends until that animation finishes before the next starts. Limitation: moving each call into launch changes the ordering to concurrent execution; interruption can also cancel the coroutine before later steps run.

Sources: [live-compose-guide-animation-quick-guide-sequential-animations-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#sequential-animations), [live-androidx-animation-animation-core-animation-core-animatable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
