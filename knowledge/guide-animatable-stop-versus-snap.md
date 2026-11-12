---
type: reference
title: "Guidance: Choose stop or snapTo for immediate control"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 351
    endLine: 385
    sha256: e4c6e2a7f207655dbd414548c4840a29b8559bbc6b33c69d28bc129c6c52d1e8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }
              if (clamped) {
                  return typeConverter.convertFromVector(valueVector)
              } else {
                  return value
              }
          }

          private fun endAnimation() {
              // Reset velocity
              internalState.apply {
                  velocityVector.reset()
                  lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
              }
              isRunning = false
          }

          /**
           * Sets the current value to the target value, without any animation. This will also cancel any
           * on-going animation with a [CancellationException]. This function will return *after*
           * canceling any on-going animation and updating the [Animatable.value] and
           * [Animatable.targetValue] to the provided [targetValue].
           *
           * __Note__: If the [lowerBound] or [upperBound] is specified, the provided [targetValue] will
           * be clamped to the bounds to ensure [Animatable.value] is always within bounds.
           *
           * See [animateTo] and [animateDecay] for more details about animation being canceled.
           *
           * @param targetValue The new target value to set [value] to.
           * @see animateTo
           * @see animateDecay
           * @see stop
           */
          public suspend fun snapTo(targetValue: T) {
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 386
    endLine: 420
    sha256: 75163b679190d3a25b4342ca3276645c9b4e104440c8357779c5e084c946d904
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              mutatorMutex.mutate {
                  endAnimation()
                  val clampedValue = clampToBounds(targetValue)
                  internalState.value = clampedValue
                  this.targetValue = clampedValue
              }
          }

          /**
           * Stops any on-going animation with a [CancellationException].
           *
           * This function will not return until the ongoing animation has been canceled (if any). Note,
           * [stop] function does **not** skip the animation value to its target value. Rather the
           * animation will be stopped in its track. Consider [snapTo] if it's desired to not only stop
           * the animation but also snap the [value] to a given value.
           *
           * See [animateTo] and [animateDecay] for more details about animation being canceled.
           *
           * @see animateTo
           * @see animateDecay
           * @see snapTo
           */
          public suspend fun stop() {
              mutatorMutex.mutate { endAnimation() }
          }

          /**
           * Returns a [State] representing the current [value] of this animation. This allows hoisting
           * the animation's current value without causing unnecessary recompositions when the value
           * changes.
           */
          public fun asState(): State<T> = internalState
      }

      /**
compose:
  id: guide-animatable-stop-versus-snap
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: guide-animatable-stop-versus-snap
      title: "Guidance: Choose stop or snapTo for immediate control"
      aliases:
        - androidx.compose.animation.core.Animatable.stop
        - androidx.compose.animation.core.Animatable.snapTo
        - stop animation at current value
        - snap animation immediately
        - cancel running animation
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-351-source
        - live-androidx-animation-animation-core-animation-core-animatable-lines-386-source
      relatedIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-351
        - live-androidx-animation-animation-core-animation-core-animatable-lines-386
---

# Guidance: Choose stop or snapTo for immediate control

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Choose stop or snapTo for immediate control

Guidance: Use Animatable.stop() to cancel an animation and keep its current value. Use snapTo(value) to cancel it and immediately set the current value and target. Both suspend until the cancellation work completes. Limitation: stop does not jump to the old target, and snapTo clamps the requested value when bounds are configured; both cancel the interrupted animation with CancellationException.

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt), [live-androidx-animation-animation-core-animation-core-animatable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
