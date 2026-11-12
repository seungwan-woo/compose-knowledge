---
type: reference
title: Animatable source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 1
    endLine: 35
    sha256: aa272155dc0a2d71668b17a459e42e9681464d79dac8344e65dac2adfed4fad9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *      http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */

      package androidx.compose.animation.core

      import androidx.compose.animation.core.AnimationEndReason.BoundReached
      import androidx.compose.animation.core.AnimationEndReason.Finished
      import androidx.compose.runtime.State
      import androidx.compose.runtime.annotation.RememberInComposition
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.setValue
      import kotlinx.coroutines.CancellationException

      /**
       * [Animatable] is a value holder that automatically animates its value when the value is changed
       * via [animateTo]. If [animateTo] is invoked during an ongoing value change animation, a new
       * animation will transition [Animatable] from its current value (i.e. value at the point of
       * interruption) to the new [targetValue]. This ensures that the value change is __always__
       * continuous using [animateTo]. If a [spring] animation (e.g. default animation) is used with
       * [animateTo], the velocity change will guarantee to be continuous as well.
       *
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 106
    endLine: 140
    sha256: e2728f3322ac4dd05244ef60633bf47679dcad74a737a85f320d6bb48059c6da
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public var lowerBound: T? = null
              private set

          /**
           * Upper bound of the animation, null by default (meaning no upper bound). Bounds can be changed
           * using [updateBounds].
           *
           * Animation will stop as soon as *any* dimension specified in [upperBound] is reached. For
           * example: For an Animatable<Offset> with an [upperBound] set to Offset(100f, 200f), when the
           * [value].x exceeds 100f *or* [value].y exceeds 200f, the animation will stop.
           */
          public var upperBound: T? = null
              private set

          private val mutatorMutex = MutatorMutex()
          internal val defaultSpringSpec: SpringSpec<T> =
              SpringSpec(visibilityThreshold = visibilityThreshold)

          @Suppress("UNCHECKED_CAST")
          private val negativeInfinityBounds: V =
              when (velocityVector) {
                  is AnimationVector1D -> negativeInfinityBounds1D
                  is AnimationVector2D -> negativeInfinityBounds2D
                  is AnimationVector3D -> negativeInfinityBounds3D
                  else -> negativeInfinityBounds4D
              }
                  as V

          @Suppress("UNCHECKED_CAST")
          private val positiveInfinityBounds =
              when (velocityVector) {
                  is AnimationVector1D -> positiveInfinityBounds1D
                  is AnimationVector2D -> positiveInfinityBounds2D
                  is AnimationVector3D -> positiveInfinityBounds3D
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 141
    endLine: 175
    sha256: 1773f80360613ebbcce4e93f2432f7539612ec90b0e67923e8e808b72168127e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  else -> positiveInfinityBounds4D
              }
                  as V

          private var lowerBoundVector: V = negativeInfinityBounds
          private var upperBoundVector: V = positiveInfinityBounds

          /**
           * Updates either [lowerBound] or [upperBound], or both. This will update
           * [Animatable.lowerBound] and/or [Animatable.upperBound] accordingly after a check to ensure
           * the provided [lowerBound] is no greater than [upperBound] in any dimension.
           *
           * Setting the bounds will immediate clamp the [value], only if the animation isn't running. For
           * the on-going animation, the value at the next frame update will be checked against the
           * bounds. If the value reaches the bound, then the animation will end with [BoundReached] end
           * reason.
           *
           * @param lowerBound lower bound of the animation. Defaults to the [Animatable.lowerBound] that
           *   is currently set.
           * @param upperBound upper bound of the animation. Defaults to the [Animatable.upperBound] that
           *   is currently set.
           * @throws [IllegalStateException] if the [lowerBound] is greater than [upperBound] in any
           *   dimension.
           */
          public fun updateBounds(lowerBound: T? = this.lowerBound, upperBound: T? = this.upperBound) {
              val lowerBoundVector =
                  lowerBound?.run { typeConverter.convertToVector(this) } ?: negativeInfinityBounds

              val upperBoundVector =
                  upperBound?.run { typeConverter.convertToVector(this) } ?: positiveInfinityBounds

              for (i in 0 until lowerBoundVector.size) {
                  // TODO: is this check too aggressive?
                  checkPrecondition(lowerBoundVector[i] <= upperBoundVector[i]) {
                      "Lower bound must be no greater than upper bound on *all* dimensions. The " +
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
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 281
    endLine: 315
    sha256: 67d8706913c3c9cf011faf499bdb040f8b4d5d6863d9f0f3a3ef1195368e5437
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public suspend fun animateDecay(
              initialVelocity: T,
              animationSpec: DecayAnimationSpec<T>,
              block: (Animatable<T, V>.() -> Unit)? = null,
          ): AnimationResult<T, V> {
              val anim =
                  DecayAnimation(
                      animationSpec = animationSpec,
                      initialValue = value,
                      initialVelocityVector = typeConverter.convertToVector(initialVelocity),
                      typeConverter = typeConverter,
                  )
              return runAnimation(anim, initialVelocity, block)
          }

          // All the different types of animation code paths eventually converge to this method.
          private suspend fun runAnimation(
              animation: Animation<T, V>,
              initialVelocity: T,
              block: (Animatable<T, V>.() -> Unit)?,
          ): AnimationResult<T, V> {

              // Store the start time before it's reset during job cancellation.
              val startTime = internalState.lastFrameTimeNanos
              return mutatorMutex.mutate {
                  try {
                      internalState.velocityVector = typeConverter.convertToVector(initialVelocity)
                      targetValue = animation.targetValue
                      isRunning = true

                      val endState =
                          internalState.copy(finishedTimeNanos = AnimationConstants.UnspecifiedTime)
                      var clampingNeeded = false
                      endState.animate(animation, startTime) {
                          updateState(internalState)
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 316
    endLine: 350
    sha256: 873c9b78e5c649ae4f01e9bf99962b030522da222adfb67294acb4bd92d9b9c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          val clamped = clampToBounds(value)
                          if (clamped != value) {
                              internalState.value = clamped
                              endState.value = clamped
                              block?.invoke(this@Animatable)
                              cancelAnimation()
                              clampingNeeded = true
                          } else {
                              block?.invoke(this@Animatable)
                          }
                      }
                      val endReason = if (clampingNeeded) BoundReached else Finished
                      endAnimation()
                      AnimationResult(endState, endReason)
                  } catch (e: CancellationException) {
                      // Clean up internal states first, then throw.
                      endAnimation()
                      throw e
                  }
              }
          }

          private fun clampToBounds(value: T): T {
              if (
                  lowerBoundVector == negativeInfinityBounds && upperBoundVector == positiveInfinityBounds
              ) {
                  // Expect this to be the most common use case
                  return value
              }
              val valueVector = typeConverter.convertToVector(value)
              var clamped = false
              for (i in 0 until valueVector.size) {
                  if (valueVector[i] < lowerBoundVector[i] || valueVector[i] > upperBoundVector[i]) {
                      clamped = true
                      valueVector[i] = valueVector[i].coerceIn(lowerBoundVector[i], upperBoundVector[i])
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
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 36
    endLine: 70
    sha256: 379ed76c6b2f6e13bc1b09c490d51cb6fd1ed8e8f75461d26221060bb165faa1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Unlike [AnimationState], [Animatable] ensures *mutual exclusiveness* on its animations. To
       * achieve this, when a new animation is started via [animateTo] (or [animateDecay]), any ongoing
       * animation will be canceled via a [CancellationException].
       *
       * @sample androidx.compose.animation.core.samples.AnimatableAnimateToGenericsType
       * @param initialValue initial value of the animatable value holder
       * @param typeConverter A two-way converter that converts the given type [T] from and to
       *   [AnimationVector]
       * @param visibilityThreshold Threshold at which the animation may round off to its target value.
       * @param label An optional label for differentiating this animation from others in android studio.
       * @see animateTo
       * @see animateDecay
       */
      @Suppress("NotCloseable")
      public class Animatable<T, V : AnimationVector>
      @RememberInComposition
      constructor(
          initialValue: T,
          public val typeConverter: TwoWayConverter<T, V>,
          private val visibilityThreshold: T? = null,
          public val label: String = "Animatable",
      ) {

          @Deprecated(
              "Maintained for binary compatibility",
              replaceWith =
                  ReplaceWith(
                      "Animatable(initialValue, typeConverter, visibilityThreshold, \"Animatable\")"
                  ),
              DeprecationLevel.HIDDEN,
          )
          public constructor(
              initialValue: T,
              typeConverter: TwoWayConverter<T, V>,
              visibilityThreshold: T? = null,
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
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 421
    endLine: 455
    sha256: 433ab6e1e09d3af317c9d2a09d26c2b6c483aecb1380bcb624dc5251b0fdfc15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * This [Animatable] function creates a float value holder that automatically animates its value
       * when the value is changed via [animateTo]. [Animatable] supports value change during an ongoing
       * value change animation. When that happens, a new animation will transition [Animatable] from its
       * current value (i.e. value at the point of interruption) to the new target. This ensures that the
       * value change is *always* continuous using [animateTo]. If [spring] animation (i.e. default
       * animation) is used with [animateTo], the velocity change will be guaranteed to be continuous as
       * well.
       *
       * Unlike [AnimationState], [Animatable] ensures mutual exclusiveness on its animation. To do so,
       * when a new animation is started via [animateTo] (or [animateDecay]), any ongoing animation job
       * will be cancelled.
       *
       * @sample androidx.compose.animation.core.samples.AnimatableFadeIn
       * @param initialValue initial value of the animatable value holder
       * @param visibilityThreshold Threshold at which the animation may round off to its target value.
       *   [Spring.DefaultDisplacementThreshold] by default.
       */
      @RememberInComposition
      public fun Animatable(
          initialValue: Float,
          visibilityThreshold: Float = Spring.DefaultDisplacementThreshold,
      ): Animatable<Float, AnimationVector1D> =
          Animatable(initialValue, Float.VectorConverter, visibilityThreshold)

      // TODO: Consider some version of @Composable fun<T, V: AnimationVector> Animatable<T, V>.animateTo
      /**
       * AnimationResult contains information about an animation at the end of the animation. [endState]
       * captures the value/velocity/frame time, etc of the animation at its last frame. It can be useful
       * for starting another animation to continue the velocity from the previously interrupted
       * animation. [endReason] describes why the animation ended, it could be either of the following:
       * - [Finished], when the animation finishes successfully without any interruption
       * - [BoundReached] If the animation reaches the either [lowerBound][Animatable.lowerBound] or
       *   [upperBound][Animatable.upperBound] in any dimension, the animation will end with
       *   [BoundReached] being the end reason.
       *
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 456
    endLine: 490
    sha256: 628dac06e0964cdab9485f247260d861b277c0b672270f0ff390dbbf7d3f180d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.animation.core.samples.AnimatableAnimationResultSample
       */
      public class AnimationResult<T, V : AnimationVector>(
          /**
           * The state of the animation in its last frame before it's canceled or reset. This captures the
           * animation value/velocity/frame time, etc at the point of interruption, or before the velocity
           * is reset when the animation finishes successfully.
           */
          public val endState: AnimationState<T, V>,
          /**
           * The reason why the animation has ended. Could be either of the following:
           * - [Finished], when the animation finishes successfully without any interruption
           * - [BoundReached] If the animation reaches the either [lowerBound][Animatable.lowerBound] or
           *   [upperBound][Animatable.upperBound] in any dimension, the animation will end with
           *   [BoundReached] being the end reason.
           */
          public val endReason: AnimationEndReason,
      ) {
          override fun toString(): String = "AnimationResult(endReason=$endReason, endState=$endState)"
      }

      private val positiveInfinityBounds1D = AnimationVector(Float.POSITIVE_INFINITY)
      private val positiveInfinityBounds2D =
          AnimationVector(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY)
      private val positiveInfinityBounds3D =
          AnimationVector(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY)
      private val positiveInfinityBounds4D =
          AnimationVector(
              Float.POSITIVE_INFINITY,
              Float.POSITIVE_INFINITY,
              Float.POSITIVE_INFINITY,
              Float.POSITIVE_INFINITY,
          )

      private val negativeInfinityBounds1D = AnimationVector(Float.NEGATIVE_INFINITY)
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 491
    endLine: 502
    sha256: 7c5d4ddbdb9858f864629bda80aa2b4b6d8f830e345566f7f4fa545623275eb3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      private val negativeInfinityBounds2D =
          AnimationVector(Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY)
      private val negativeInfinityBounds3D =
          AnimationVector(Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY)
      private val negativeInfinityBounds4D =
          AnimationVector(
              Float.NEGATIVE_INFINITY,
              Float.NEGATIVE_INFINITY,
              Float.NEGATIVE_INFINITY,
              Float.NEGATIVE_INFINITY,
          )
  - id: live-androidx-animation-animation-core-animation-core-animatable-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    revision: c395005ece1a96fa54b051898031ab98a90323e9
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt
    startLine: 71
    endLine: 105
    sha256: 7d79d886b676b5bba249a041a4c30f9b876aa5f01576192a8de6e00756de0a0c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) : this(initialValue, typeConverter, visibilityThreshold, "Animatable")

          internal val internalState =
              AnimationState(typeConverter = typeConverter, initialValue = initialValue)

          /** Current value of the animation. */
          public val value: T
              get() = internalState.value

          /** Velocity vector of the animation (in the form of [AnimationVector]. */
          public val velocityVector: V
              get() = internalState.velocityVector

          /** Returns the velocity, converted from [velocityVector]. */
          public val velocity: T
              get() = typeConverter.convertFromVector(velocityVector)

          /** Indicates whether the animation is running. */
          public var isRunning: Boolean by mutableStateOf(false)
              private set

          /**
           * The target of the current animation. If the animation finishes un-interrupted, it will reach
           * this target value.
           */
          public var targetValue: T by mutableStateOf(initialValue)
              private set

          /**
           * Lower bound of the animation, null by default (meaning no lower bound). Bounds can be changed
           * using [updateBounds].
           *
           * Animation will stop as soon as *any* dimension specified in [lowerBound] is reached. For
           * example: For an Animatable<Offset> with an [lowerBound] set to Offset(100f, 200f), when the
           * [value].x drops below 100f *or* [value].y drops below 200f, the animation will stop.
compose:
  id: live-androidx-animation-animation-core-animation-core-animatable
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.Animatable
  sections:
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-1
      title: Animatable source (lines 1–35)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-106
      title: Animatable source (lines 106–140)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-141
      title: Animatable source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-176
      title: Animatable source (lines 176–210)
      aliases:
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-211
      title: Animatable source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-246
      title: Animatable source (lines 246–280)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-281
      title: Animatable source (lines 281–315)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-316
      title: Animatable source (lines 316–350)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-351
      title: Animatable source (lines 351–385)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-36
      title: Animatable source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-386
      title: Animatable source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-386-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-421
      title: Animatable source (lines 421–455)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-421-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-456
      title: Animatable source (lines 456–490)
      aliases:
        - androidx.compose.animation.core.Animatable
        - androidx.compose.animation.core.AnimationResult
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-456-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-491
      title: Animatable source (lines 491–502)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-491-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animatable-lines-71
      title: Animatable source (lines 71–105)
      aliases:
        - androidx.compose.animation.core.Animatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animatable-lines-71-source
      relatedIds: []
---

# Animatable source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt

## Animatable source (lines 1–35)

/*
 * Copyright 2019 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package androidx.compose.animation.core

import androidx.compose.animation.core.AnimationEndReason.BoundReached
import androidx.compose.animation.core.AnimationEndReason.Finished
import androidx.compose.runtime.State
import androidx.compose.runtime.annotation.RememberInComposition
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.coroutines.CancellationException

/**
 * [Animatable] is a value holder that automatically animates its value when the value is changed
 * via [animateTo]. If [animateTo] is invoked during an ongoing value change animation, a new
 * animation will transition [Animatable] from its current value (i.e. value at the point of
 * interruption) to the new [targetValue]. This ensures that the value change is __always__
 * continuous using [animateTo]. If a [spring] animation (e.g. default animation) is used with
 * [animateTo], the velocity change will guarantee to be continuous as well.
 *

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 106–140)

     */
    public var lowerBound: T? = null
        private set

    /**
     * Upper bound of the animation, null by default (meaning no upper bound). Bounds can be changed
     * using [updateBounds].
     *
     * Animation will stop as soon as *any* dimension specified in [upperBound] is reached. For
     * example: For an Animatable<Offset> with an [upperBound] set to Offset(100f, 200f), when the
     * [value].x exceeds 100f *or* [value].y exceeds 200f, the animation will stop.
     */
    public var upperBound: T? = null
        private set

    private val mutatorMutex = MutatorMutex()
    internal val defaultSpringSpec: SpringSpec<T> =
        SpringSpec(visibilityThreshold = visibilityThreshold)

    @Suppress("UNCHECKED_CAST")
    private val negativeInfinityBounds: V =
        when (velocityVector) {
            is AnimationVector1D -> negativeInfinityBounds1D
            is AnimationVector2D -> negativeInfinityBounds2D
            is AnimationVector3D -> negativeInfinityBounds3D
            else -> negativeInfinityBounds4D
        }
            as V

    @Suppress("UNCHECKED_CAST")
    private val positiveInfinityBounds =
        when (velocityVector) {
            is AnimationVector1D -> positiveInfinityBounds1D
            is AnimationVector2D -> positiveInfinityBounds2D
            is AnimationVector3D -> positiveInfinityBounds3D

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 141–175)

            else -> positiveInfinityBounds4D
        }
            as V

    private var lowerBoundVector: V = negativeInfinityBounds
    private var upperBoundVector: V = positiveInfinityBounds

    /**
     * Updates either [lowerBound] or [upperBound], or both. This will update
     * [Animatable.lowerBound] and/or [Animatable.upperBound] accordingly after a check to ensure
     * the provided [lowerBound] is no greater than [upperBound] in any dimension.
     *
     * Setting the bounds will immediate clamp the [value], only if the animation isn't running. For
     * the on-going animation, the value at the next frame update will be checked against the
     * bounds. If the value reaches the bound, then the animation will end with [BoundReached] end
     * reason.
     *
     * @param lowerBound lower bound of the animation. Defaults to the [Animatable.lowerBound] that
     *   is currently set.
     * @param upperBound upper bound of the animation. Defaults to the [Animatable.upperBound] that
     *   is currently set.
     * @throws [IllegalStateException] if the [lowerBound] is greater than [upperBound] in any
     *   dimension.
     */
    public fun updateBounds(lowerBound: T? = this.lowerBound, upperBound: T? = this.upperBound) {
        val lowerBoundVector =
            lowerBound?.run { typeConverter.convertToVector(this) } ?: negativeInfinityBounds

        val upperBoundVector =
            upperBound?.run { typeConverter.convertToVector(this) } ?: positiveInfinityBounds

        for (i in 0 until lowerBoundVector.size) {
            // TODO: is this check too aggressive?
            checkPrecondition(lowerBoundVector[i] <= upperBoundVector[i]) {
                "Lower bound must be no greater than upper bound on *all* dimensions. The " +

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 176–210)

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

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 211–245)

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

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 246–280)

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

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 281–315)

    public suspend fun animateDecay(
        initialVelocity: T,
        animationSpec: DecayAnimationSpec<T>,
        block: (Animatable<T, V>.() -> Unit)? = null,
    ): AnimationResult<T, V> {
        val anim =
            DecayAnimation(
                animationSpec = animationSpec,
                initialValue = value,
                initialVelocityVector = typeConverter.convertToVector(initialVelocity),
                typeConverter = typeConverter,
            )
        return runAnimation(anim, initialVelocity, block)
    }

    // All the different types of animation code paths eventually converge to this method.
    private suspend fun runAnimation(
        animation: Animation<T, V>,
        initialVelocity: T,
        block: (Animatable<T, V>.() -> Unit)?,
    ): AnimationResult<T, V> {

        // Store the start time before it's reset during job cancellation.
        val startTime = internalState.lastFrameTimeNanos
        return mutatorMutex.mutate {
            try {
                internalState.velocityVector = typeConverter.convertToVector(initialVelocity)
                targetValue = animation.targetValue
                isRunning = true

                val endState =
                    internalState.copy(finishedTimeNanos = AnimationConstants.UnspecifiedTime)
                var clampingNeeded = false
                endState.animate(animation, startTime) {
                    updateState(internalState)

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 316–350)

                    val clamped = clampToBounds(value)
                    if (clamped != value) {
                        internalState.value = clamped
                        endState.value = clamped
                        block?.invoke(this@Animatable)
                        cancelAnimation()
                        clampingNeeded = true
                    } else {
                        block?.invoke(this@Animatable)
                    }
                }
                val endReason = if (clampingNeeded) BoundReached else Finished
                endAnimation()
                AnimationResult(endState, endReason)
            } catch (e: CancellationException) {
                // Clean up internal states first, then throw.
                endAnimation()
                throw e
            }
        }
    }

    private fun clampToBounds(value: T): T {
        if (
            lowerBoundVector == negativeInfinityBounds && upperBoundVector == positiveInfinityBounds
        ) {
            // Expect this to be the most common use case
            return value
        }
        val valueVector = typeConverter.convertToVector(value)
        var clamped = false
        for (i in 0 until valueVector.size) {
            if (valueVector[i] < lowerBoundVector[i] || valueVector[i] > upperBoundVector[i]) {
                clamped = true
                valueVector[i] = valueVector[i].coerceIn(lowerBoundVector[i], upperBoundVector[i])

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 351–385)

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

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 36–70)

 * Unlike [AnimationState], [Animatable] ensures *mutual exclusiveness* on its animations. To
 * achieve this, when a new animation is started via [animateTo] (or [animateDecay]), any ongoing
 * animation will be canceled via a [CancellationException].
 *
 * @sample androidx.compose.animation.core.samples.AnimatableAnimateToGenericsType
 * @param initialValue initial value of the animatable value holder
 * @param typeConverter A two-way converter that converts the given type [T] from and to
 *   [AnimationVector]
 * @param visibilityThreshold Threshold at which the animation may round off to its target value.
 * @param label An optional label for differentiating this animation from others in android studio.
 * @see animateTo
 * @see animateDecay
 */
@Suppress("NotCloseable")
public class Animatable<T, V : AnimationVector>
@RememberInComposition
constructor(
    initialValue: T,
    public val typeConverter: TwoWayConverter<T, V>,
    private val visibilityThreshold: T? = null,
    public val label: String = "Animatable",
) {

    @Deprecated(
        "Maintained for binary compatibility",
        replaceWith =
            ReplaceWith(
                "Animatable(initialValue, typeConverter, visibilityThreshold, \"Animatable\")"
            ),
        DeprecationLevel.HIDDEN,
    )
    public constructor(
        initialValue: T,
        typeConverter: TwoWayConverter<T, V>,
        visibilityThreshold: T? = null,

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 386–420)

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

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 421–455)

 * This [Animatable] function creates a float value holder that automatically animates its value
 * when the value is changed via [animateTo]. [Animatable] supports value change during an ongoing
 * value change animation. When that happens, a new animation will transition [Animatable] from its
 * current value (i.e. value at the point of interruption) to the new target. This ensures that the
 * value change is *always* continuous using [animateTo]. If [spring] animation (i.e. default
 * animation) is used with [animateTo], the velocity change will be guaranteed to be continuous as
 * well.
 *
 * Unlike [AnimationState], [Animatable] ensures mutual exclusiveness on its animation. To do so,
 * when a new animation is started via [animateTo] (or [animateDecay]), any ongoing animation job
 * will be cancelled.
 *
 * @sample androidx.compose.animation.core.samples.AnimatableFadeIn
 * @param initialValue initial value of the animatable value holder
 * @param visibilityThreshold Threshold at which the animation may round off to its target value.
 *   [Spring.DefaultDisplacementThreshold] by default.
 */
@RememberInComposition
public fun Animatable(
    initialValue: Float,
    visibilityThreshold: Float = Spring.DefaultDisplacementThreshold,
): Animatable<Float, AnimationVector1D> =
    Animatable(initialValue, Float.VectorConverter, visibilityThreshold)

// TODO: Consider some version of @Composable fun<T, V: AnimationVector> Animatable<T, V>.animateTo
/**
 * AnimationResult contains information about an animation at the end of the animation. [endState]
 * captures the value/velocity/frame time, etc of the animation at its last frame. It can be useful
 * for starting another animation to continue the velocity from the previously interrupted
 * animation. [endReason] describes why the animation ended, it could be either of the following:
 * - [Finished], when the animation finishes successfully without any interruption
 * - [BoundReached] If the animation reaches the either [lowerBound][Animatable.lowerBound] or
 *   [upperBound][Animatable.upperBound] in any dimension, the animation will end with
 *   [BoundReached] being the end reason.
 *

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 456–490)

 * @sample androidx.compose.animation.core.samples.AnimatableAnimationResultSample
 */
public class AnimationResult<T, V : AnimationVector>(
    /**
     * The state of the animation in its last frame before it's canceled or reset. This captures the
     * animation value/velocity/frame time, etc at the point of interruption, or before the velocity
     * is reset when the animation finishes successfully.
     */
    public val endState: AnimationState<T, V>,
    /**
     * The reason why the animation has ended. Could be either of the following:
     * - [Finished], when the animation finishes successfully without any interruption
     * - [BoundReached] If the animation reaches the either [lowerBound][Animatable.lowerBound] or
     *   [upperBound][Animatable.upperBound] in any dimension, the animation will end with
     *   [BoundReached] being the end reason.
     */
    public val endReason: AnimationEndReason,
) {
    override fun toString(): String = "AnimationResult(endReason=$endReason, endState=$endState)"
}

private val positiveInfinityBounds1D = AnimationVector(Float.POSITIVE_INFINITY)
private val positiveInfinityBounds2D =
    AnimationVector(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY)
private val positiveInfinityBounds3D =
    AnimationVector(Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY, Float.POSITIVE_INFINITY)
private val positiveInfinityBounds4D =
    AnimationVector(
        Float.POSITIVE_INFINITY,
        Float.POSITIVE_INFINITY,
        Float.POSITIVE_INFINITY,
        Float.POSITIVE_INFINITY,
    )

private val negativeInfinityBounds1D = AnimationVector(Float.NEGATIVE_INFINITY)

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 491–502)

private val negativeInfinityBounds2D =
    AnimationVector(Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY)
private val negativeInfinityBounds3D =
    AnimationVector(Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY, Float.NEGATIVE_INFINITY)
private val negativeInfinityBounds4D =
    AnimationVector(
        Float.NEGATIVE_INFINITY,
        Float.NEGATIVE_INFINITY,
        Float.NEGATIVE_INFINITY,
        Float.NEGATIVE_INFINITY,
    )


Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)

## Animatable source (lines 71–105)

    ) : this(initialValue, typeConverter, visibilityThreshold, "Animatable")

    internal val internalState =
        AnimationState(typeConverter = typeConverter, initialValue = initialValue)

    /** Current value of the animation. */
    public val value: T
        get() = internalState.value

    /** Velocity vector of the animation (in the form of [AnimationVector]. */
    public val velocityVector: V
        get() = internalState.velocityVector

    /** Returns the velocity, converted from [velocityVector]. */
    public val velocity: T
        get() = typeConverter.convertFromVector(velocityVector)

    /** Indicates whether the animation is running. */
    public var isRunning: Boolean by mutableStateOf(false)
        private set

    /**
     * The target of the current animation. If the animation finishes un-interrupted, it will reach
     * this target value.
     */
    public var targetValue: T by mutableStateOf(initialValue)
        private set

    /**
     * Lower bound of the animation, null by default (meaning no lower bound). Bounds can be changed
     * using [updateBounds].
     *
     * Animation will stop as soon as *any* dimension specified in [lowerBound] is reached. For
     * example: For an Animatable<Offset> with an [lowerBound] set to Offset(100f, 200f), when the
     * [value].x drops below 100f *or* [value].y drops below 200f, the animation will stop.

Sources: [live-androidx-animation-animation-core-animation-core-animatable-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/c395005ece1a96fa54b051898031ab98a90323e9/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Animatable.kt)
