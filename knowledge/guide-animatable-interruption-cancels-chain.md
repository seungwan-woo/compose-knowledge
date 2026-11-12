---
type: reference
title: "Guidance: Treat Animatable interruption as coroutine cancellation"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 176
    endLine: 210
    sha256: 9b428a94859341e8801af1bc9d201fa249a36aee0ec74a6a773fe19546e2be03
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          "provided lower bound: $lowerBoundVector is greater than upper bound " +
                          "$upperBoundVector on index $i"
                  }
              }
              // After the correctness check:
              this.lowerBoundVector = lowerBoundVector
              this.upperBoundVector = upperBoundVector

              this.upperBound = upperBound
              this.lowerBound = lowerBound
              if (!isRunning) {
                  val clampedValue = clampToBounds(value)
                  if (clampedValue != value) {
                      this.internalState.value = clampedValue
                  }
              }
          }

          /**
           * Starts an animation to animate from [value] to the provided [targetValue]. If there is
           * already an animation in-flight, this method will cancel the ongoing animation before starting
           * a new animation continuing the current [value] and [velocity]. It's recommended to set the
           * optional [initialVelocity] only when [animateTo] is used immediately after a fling. In most
           * of the other cases, altering velocity would result in visual discontinuity.
           *
           * The animation will use the provided [animationSpec] to animate the value towards the
           * [targetValue]. When no [animationSpec] is specified, a [spring] will be used. [block] will be
           * invoked on each animation frame.
           *
           * Returns an [AnimationResult] object. It contains: 1) the reason for ending the animation,
           * and 2) an end state of the animation. The reason for ending the animation can be either of
           * the following two:
           * - [Finished], when the animation finishes successfully without any interruption,
           * - [BoundReached] If the animation reaches the either [lowerBound] or [upperBound] in any
           *   dimension, the animation will end with [BoundReached] being the end reason.
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
compose:
  id: guide-animatable-interruption-cancels-chain
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-interruption-cancels-chain
      title: "Guidance: Treat Animatable interruption as coroutine cancellation"
      aliases:
        - androidx.compose.animation.core.Animatable.animateTo
        - androidx.compose.animation.core.Animatable.animateDecay
        - animation CancellationException
        - animation completion callback
        - interrupted animation cleanup
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-211-source
        - live-androidx-animation-animation-core-animation-core-animatable-lines-176-source
      relatedIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-211
        - live-androidx-animation-animation-core-animation-core-animatable-lines-176
---

# Guidance: Treat Animatable interruption as coroutine cancellation

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Treat Animatable interruption as coroutine cancellation

Guidance: An Animatable animation interrupted by animateTo, animateDecay, stop, or snapTo throws CancellationException, so later statements in that caller do not execute normally. Ordinary post-call work runs on a normal return, which can be Finished or BoundReached. Check the returned endReason == Finished before work that requires reaching the target. Limitation: neither interruption nor a normal BoundReached return is successful target completion; a statement after animateTo alone does not distinguish them.

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt), [live-androidx-animation-animation-core-animation-core-animatable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
