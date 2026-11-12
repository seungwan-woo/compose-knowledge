---
type: reference
title: "Guidance: Launch independent Animatable values concurrently"
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
  - id: live-compose-guide-animation-quick-guide-concurrent-animations-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/animation/quick-guide#concurrent-animations
    revision: web:compose-guide-animation-quick-guide:content@sha256:497af5614f61ed325c7b4d9731d701ae7ea379ac7fcbbc99c23230792855673e
    sha256: 0fc49ed18a547ccb7c3fe5f5e0683b5cd75c9c43e0e953942c3665c84cced52c
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Figure 15.

      Diagram indicating how concurrent animations progress, all at the same time.

      Use the coroutine APIs (Animatable#animateTo() or animate), or the Transition API to achieve concurrent animations. If you use multiple launch functions in a coroutine context, it launches the animations at the same time:

      val alphaAnimation = remember { Animatable(0f) }
      val yAnimation = remember { Animatable(0f) }

      LaunchedEffect("animationKey") {
          launch {
              alphaAnimation.animateTo(1f)
          }
          launch {
              yAnimation.animateTo(100f)
          }
      }AnimationQuickGuide.kt

      You could use the updateTransition API to use the same state to drive many different property animations at the same time. The following example animates two properties controlled by a state change, rect and borderWidth:

      var currentState by remember { mutableStateOf(BoxState.Collapsed) }
      val transition = updateTransition(currentState, label = "transition")

      val rect by transition.animateRect(label = "rect") { state ->
          when (state) {
              BoxState.Collapsed -> Rect(0f, 0f, 100f, 100f)
              BoxState.Expanded -> Rect(100f, 100f, 300f, 300f)
          }
      }
      val borderWidth by transition.animateDp(label = "borderWidth") { state ->
          when (state) {
              BoxState.Collapsed -> 1.dp
              BoxState.Expanded -> 0.dp
          }
      }AnimationQuickGuide.kt
compose:
  id: guide-animatable-concurrent-children
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-concurrent-children
      title: "Guidance: Launch independent Animatable values concurrently"
      aliases:
        - androidx.compose.animation.core.Animatable.animateTo
        - parallel animations
        - concurrent animations
        - launch animation coroutines
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-compose-guide-animation-quick-guide-concurrent-animations-source
        - live-androidx-animation-animation-core-animation-core-animatable-lines-176-source
      relatedIds:
        - live-compose-guide-animation-quick-guide-concurrent-animations
        - live-androidx-animation-animation-core-animation-core-animatable-lines-176
---

# Guidance: Launch independent Animatable values concurrently

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Launch independent Animatable values concurrently

Guidance: To animate independent values at the same time, launch one child coroutine per Animatable inside the same effect or coroutine scope, for example launch { alpha.animateTo(1f) } and launch { offset.animateTo(100f) }. Limitation: consecutive animateTo calls without launch run sequentially; launching two animations on the same Animatable does not run both because a new animation cancels the previous one.

Sources: [live-compose-guide-animation-quick-guide-concurrent-animations-source](https://developer.android.com/develop/ui/compose/animation/quick-guide#concurrent-animations), [live-androidx-animation-animation-core-animation-core-animatable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
