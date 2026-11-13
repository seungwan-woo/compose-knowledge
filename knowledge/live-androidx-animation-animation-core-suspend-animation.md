---
type: reference
title: Suspend animation source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-suspend-animation-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 1
    endLine: 35
    sha256: 915db2c7aceec47b65d7f42fbb9c329cbd4923f97fae24ede547d7b79eddfe9f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2020 The Android Open Source Project
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

      import androidx.compose.runtime.withFrameNanos
      import androidx.compose.ui.MotionDurationScale
      import kotlin.coroutines.CoroutineContext
      import kotlin.coroutines.coroutineContext
      import kotlinx.coroutines.CancellationException

      /**
       * Target based animation that animates from the given [initialValue] towards the [targetValue],
       * with an optional [initialVelocity]. By default, a [spring] will be used for the animation. An
       * alternative [animationSpec] can be provided to replace the default [spring].
       *
       * This is a convenient method for Float animation. If there's a need to access more info related to
       * the animation such as start time, target, etc, consider using [AnimationState.animateTo]. To
       * animate non-[Float] data types, consider the [animate] overload/variant for generic types.
       *
       * @param initialValue The initial value to animate from.
       * @param targetValue The target value to animate to.
  - id: live-androidx-animation-animation-core-suspend-animation-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 106
    endLine: 140
    sha256: 2282eb2f146e018dd715824c29e09a6819842acf0e04c7724703583e81ef0d3b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  animationSpec = animationSpec,
                  initialValue = initialValue,
                  targetValue = targetValue,
                  typeConverter = typeConverter,
                  initialVelocityVector = initialVelocityVector,
              )
          AnimationState(typeConverter, initialValue, initialVelocityVector).animate(anim) {
              block(value, typeConverter.convertFromVector(velocityVector))
          }
      }

      /**
       * Target based animation that takes the value and velocity from the [AnimationState] as the
       * starting condition, and animate to the [targetValue], using the [animationSpec]. During the
       * animation, the given [AnimationState] will be updated with the up-to-date value/velocity, frame
       * time, etc.
       *
       * @param targetValue The target value that the animation will animate to.
       * @param animationSpec The animation configuration that will be used. [spring] by default.
       * @param sequentialAnimation Indicates whether the animation should use the
       *   [AnimationState.lastFrameTimeNanos] as the starting time (if true), or start in a new frame. By
       *   default, [sequentialAnimation] is false, to start the animation in a few frame. In cases where
       *   an on-going animation is interrupted and a new animation is started to carry over the momentum,
       *   using the interruption time (captured in [AnimationState.lastFrameTimeNanos]) creates a
       *   smoother animation.
       * @param block Will be invoked on every frame, and the [AnimationScope] will be checked against
       *   cancellation before the animation continues. To cancel the animation from the [block], simply
       *   call [AnimationScope.cancelAnimation]. After [AnimationScope.cancelAnimation] is called,
       *   [block] will not be invoked again. The animation loop will exit after the [block] returns. All
       *   the animation related info can be accessed via [AnimationScope].
       * @sample androidx.compose.animation.core.samples.animateToOnAnimationState
       */
      public suspend fun <T, V : AnimationVector> AnimationState<T, V>.animateTo(
          targetValue: T,
          animationSpec: AnimationSpec<T> = spring(),
  - id: live-androidx-animation-animation-core-suspend-animation-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 141
    endLine: 175
    sha256: 61113157b99d8ac90c16624a30aa2deb3f921ad5c9542c8f4b33bf67f49a42db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          sequentialAnimation: Boolean = false,
          block: AnimationScope<T, V>.() -> Unit = {},
      ) {
          val anim =
              TargetBasedAnimation(
                  animationSpec = animationSpec,
                  initialValue = value,
                  targetValue = targetValue,
                  typeConverter = typeConverter,
                  initialVelocityVector = velocityVector,
              )
          animate(
              anim,
              if (sequentialAnimation) lastFrameTimeNanos else AnimationConstants.UnspecifiedTime,
              block,
          )
      }

      /**
       * Decay animation that slows down from the current velocity and value captured in [AnimationState]
       * until the velocity reaches 0. During the animation, the given [AnimationState] will be updated
       * with the up-to-date value/velocity, frame time, etc. This is often used to animate the result of
       * a fling gesture.
       *
       * @param animationSpec Defines the decay animation that will be used for this animation. Some
       *   options for [animationSpec] include:
       *   [splineBasedDecay][androidx.compose.animation.splineBasedDecay] and [exponentialDecay].
       * @param sequentialAnimation Indicates whether the animation should use the
       *   [AnimationState.lastFrameTimeNanos] as the starting time (if true), or start in a new frame. By
       *   default, [sequentialAnimation] is false, to start the animation in a few frame. In cases where
       *   an on-going animation is interrupted and a new animation is started to carry over the momentum,
       *   using the interruption time (captured in [AnimationState.lastFrameTimeNanos]) creates a
       *   smoother animation.
       * @param block will be invoked on every frame during the animation, and the [AnimationScope] will
       *   be checked against cancellation before the animation continues. To cancel the animation from
  - id: live-androidx-animation-animation-core-suspend-animation-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 176
    endLine: 210
    sha256: 42171bbf1de6fab3227d2e9508094bb47b0b40d5c0a04fc49ce32ffdff4fb5a3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   the [block], simply call [AnimationScope.cancelAnimation]. After
       *   [AnimationScope.cancelAnimation] is called, [block] will not be invoked again. The animation
       *   loop will exit after the [block] returns. All the animation related info can be accessed via
       *   [AnimationScope].
       */
      public suspend fun <T, V : AnimationVector> AnimationState<T, V>.animateDecay(
          animationSpec: DecayAnimationSpec<T>,
          sequentialAnimation: Boolean = false,
          block: AnimationScope<T, V>.() -> Unit = {},
      ) {
          val anim =
              DecayAnimation<T, V>(
                  animationSpec = animationSpec,
                  initialValue = value,
                  initialVelocityVector = velocityVector,
                  typeConverter = typeConverter,
              )
          animate(
              anim,
              if (sequentialAnimation) lastFrameTimeNanos else AnimationConstants.UnspecifiedTime,
              block,
          )
      }

      /**
       * This animation function runs the animation defined in the given [animation] from start to finish.
       * During the animation, the [AnimationState] will be updated with the up-to-date value/velocity,
       * frame time, etc.
       *
       * For [Animation]s that use [AnimationSpec], consider using these more convenient APIs: [animate],
       * [AnimationState.animateTo], [animateDecay], [AnimationState.animateDecay].
       *
       * @param startTimeNanos If provided, it will be used as the time that the animation was started. By
       *   default, [startTimeNanos] is [AnimationConstants.UnspecifiedTime], meaning the animation will
       *   start in the next frame.
  - id: live-androidx-animation-animation-core-suspend-animation-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 211
    endLine: 245
    sha256: 9835f04c9e181336fb45b4ce53a1f9b3a589c5c70530a164df2da3021c6189bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param block Will be invoked on every frame, and the [AnimationScope] will be checked against
       *   cancellation before the animation continues. To cancel the animation from the [block], simply
       *   call [AnimationScope.cancelAnimation]. After [AnimationScope.cancelAnimation] is called,
       *   [block] will not be invoked again. The animation loop will exit after the [block] returns. All
       *   the animation related info can be accessed via [AnimationScope].
       */
      // TODO: This method uses AnimationState and Animation at the same time, it's potentially confusing
      //  as to which is the source of truth for initial value/velocity. Consider letting [Animation] have
      //  some suspend fun differently.
      internal suspend fun <T, V : AnimationVector> AnimationState<T, V>.animate(
          animation: Animation<T, V>,
          startTimeNanos: Long = AnimationConstants.UnspecifiedTime,
          block: AnimationScope<T, V>.() -> Unit = {},
      ) {
          val initialValue = animation.getValueFromNanos(0)
          val initialVelocityVector = animation.getVelocityVectorFromNanos(0)
          var lateInitScope: AnimationScope<T, V>? = null
          try {
              if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
                  val durationScale = coroutineContext.durationScale
                  animation.callWithFrameNanos {
                      lateInitScope =
                          AnimationScope(
                                  initialValue = initialValue,
                                  typeConverter = animation.typeConverter,
                                  initialVelocityVector = initialVelocityVector,
                                  lastFrameTimeNanos = it,
                                  targetValue = animation.targetValue,
                                  startTimeNanos = it,
                                  isRunning = true,
                                  onCancel = { isRunning = false },
                              )
                              .apply {
                                  // First frame
                                  doAnimationFrameWithScale(
  - id: live-androidx-animation-animation-core-suspend-animation-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 246
    endLine: 280
    sha256: 03f2ed5a264fc1b66c86a92c961d7f9483e82b5bd52307bd26fa67d74f222d20
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      it,
                                      durationScale,
                                      animation,
                                      this@animate,
                                      block,
                                  )
                              }
                  }
              } else {
                  lateInitScope =
                      AnimationScope(
                              initialValue = initialValue,
                              typeConverter = animation.typeConverter,
                              initialVelocityVector = initialVelocityVector,
                              lastFrameTimeNanos = startTimeNanos,
                              targetValue = animation.targetValue,
                              startTimeNanos = startTimeNanos,
                              isRunning = true,
                              onCancel = { isRunning = false },
                          )
                          .apply {
                              // First frame
                              doAnimationFrameWithScale(
                                  startTimeNanos,
                                  coroutineContext.durationScale,
                                  animation,
                                  this@animate,
                                  block,
                              )
                          }
              }
              // Subsequent frames
              while (lateInitScope!!.isRunning) {
                  val durationScale = coroutineContext.durationScale
                  animation.callWithFrameNanos {
  - id: live-androidx-animation-animation-core-suspend-animation-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 281
    endLine: 315
    sha256: def4fe122e6f8ef73a753bf457aef88e064bcbae541a067b38cf1778155f8641
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      lateInitScope!!.doAnimationFrameWithScale(it, durationScale, animation, this, block)
                  }
              }
              // End of animation
          } catch (e: CancellationException) {
              lateInitScope?.isRunning = false
              if (lateInitScope?.lastFrameTimeNanos == lastFrameTimeNanos) {
                  // There hasn't been another animation.
                  isRunning = false
              }
              throw e
          }
      }

      /**
       * Calls the [finite][withFrameNanos] or [infinite][withInfiniteAnimationFrameNanos] variant of
       * `withFrameNanos`, depending on the value of [Animation.isInfinite].
       */
      private suspend fun <R, T, V : AnimationVector> Animation<T, V>.callWithFrameNanos(
          onFrame: (frameTimeNanos: Long) -> R
      ): R {
          return if (isInfinite) {
              withInfiniteAnimationFrameNanos(onFrame)
          } else {
              withFrameNanos { onFrame.invoke(it / AnimationDebugDurationScale) }
          }
      }

      internal val CoroutineContext.durationScale: Float
          get() {
              val scale = this[MotionDurationScale]?.scaleFactor ?: 1f
              checkPrecondition(scale >= 0f) { "negative scale factor" }
              return scale
          }
  - id: live-androidx-animation-animation-core-suspend-animation-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 316
    endLine: 350
    sha256: db4fffee1d26febae27e672ace803e06f22b9e0c8ed8a6a1f9153bd4490c0fef
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      internal fun <T, V : AnimationVector> AnimationScope<T, V>.updateState(
          state: AnimationState<T, V>
      ) {
          state.value = value
          state.velocityVector.copyFrom(velocityVector)
          state.finishedTimeNanos = finishedTimeNanos
          state.lastFrameTimeNanos = lastFrameTimeNanos
          state.isRunning = isRunning
      }

      private fun <T, V : AnimationVector> AnimationScope<T, V>.doAnimationFrameWithScale(
          frameTimeNanos: Long,
          durationScale: Float,
          anim: Animation<T, V>,
          state: AnimationState<T, V>,
          block: AnimationScope<T, V>.() -> Unit,
      ) {
          val playTimeNanos =
              if (durationScale == 0f) {
                  anim.durationNanos
              } else {
                  ((frameTimeNanos - startTimeNanos) / durationScale).toLong()
              }
          doAnimationFrame(frameTimeNanos, playTimeNanos, anim, state, block)
      }

      // Impl detail, invoked every frame.
      private fun <T, V : AnimationVector> AnimationScope<T, V>.doAnimationFrame(
          frameTimeNanos: Long,
          playTimeNanos: Long,
          anim: Animation<T, V>,
          state: AnimationState<T, V>,
          block: AnimationScope<T, V>.() -> Unit,
      ) {
          lastFrameTimeNanos = frameTimeNanos
  - id: live-androidx-animation-animation-core-suspend-animation-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 351
    endLine: 363
    sha256: 49deff1fa6f1e2ecee053c71d98b502be65f0b5f3418955fa5582f0e6e7ed797
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          value = anim.getValueFromNanos(playTimeNanos)
          velocityVector = anim.getVelocityVectorFromNanos(playTimeNanos)
          val isLastFrame = anim.isFinishedFromNanos(playTimeNanos)
          if (isLastFrame) {
              // TODO: This could probably be a little more granular
              // TODO: end time isn't necessarily last frame time
              finishedTimeNanos = lastFrameTimeNanos
              isRunning = false
          }
          updateState(state)
          block()
      }
  - id: live-androidx-animation-animation-core-suspend-animation-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 36
    endLine: 70
    sha256: b81f35485f073c21a3fe6895a9d9adb7a55e8c790de04d980fd92c4c697cf811
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param initialVelocity The velocity to use for the animation. 0f by default.
       * @param animationSpec The animation configuration that will be used. [spring] by default.
       * @param block Will be invoked on every frame with the current value and velocity of the animation
       *   for that frame.
       * @sample androidx.compose.animation.core.samples.suspendAnimateFloatVariant
       * @see AnimationState.animateTo
       */
      public suspend fun animate(
          initialValue: Float,
          targetValue: Float,
          initialVelocity: Float = 0f,
          animationSpec: AnimationSpec<Float> = spring(),
          block: (value: Float, velocity: Float) -> Unit,
      ) {
          animate(Float.VectorConverter, initialValue, targetValue, initialVelocity, animationSpec, block)
      }

      /**
       * Decay animation that slows down from the given [initialVelocity] starting at [initialValue] until
       * the velocity reaches 0. This is often used after a fling gesture.
       *
       * This is a convenient method for decay animation. If there's a need to access more info related to
       * the animation such as start time, target, etc, consider using [AnimationState.animateDecay].
       *
       * @param initialValue The initial value to animate from.
       * @param initialVelocity The initial velocity of the animation.
       * @param animationSpec Defines the decay animation that will be used for this animation. Some
       *   options for this [animationSpec] include:
       *   [splineBasedDecay][androidx.compose.animation.splineBasedDecay] and [exponentialDecay].
       * @param block Will be invoked on each animation frame with up-to-date value and velocity.
       * @see AnimationState.animateDecay
       */
      public suspend fun animateDecay(
          initialValue: Float,
          initialVelocity: Float,
  - id: live-androidx-animation-animation-core-suspend-animation-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt
    startLine: 71
    endLine: 105
    sha256: d265c6aa3d7b221a95103df0b7529c269b98ab9641eff479ca4dad8e913bea12
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          animationSpec: FloatDecayAnimationSpec,
          block: (value: Float, velocity: Float) -> Unit,
      ) {
          val anim = DecayAnimation(animationSpec, initialValue, initialVelocity)
          AnimationState(initialValue, initialVelocity).animate(anim) {
              block(value, velocityVector.value)
          }
      }

      /**
       * Target based animation for animating any data type [T], so long as [T] can be converted to an
       * [AnimationVector] using [typeConverter]. The animation will start from the [initialValue] and
       * animate to the [targetValue] value. The [initialVelocity] will be derived from an all-0
       * [AnimationVector] unless specified. [animationSpec] can be provided to create a specific look and
       * feel for the animation. By default, a [spring] will be used.
       *
       * This is a convenient method for target-based animation. If there's a need to access more info
       * related to the animation such as start time, target, etc, consider using
       * [AnimationState.animateTo].
       *
       * @see AnimationState.animateTo
       */
      public suspend fun <T, V : AnimationVector> animate(
          typeConverter: TwoWayConverter<T, V>,
          initialValue: T,
          targetValue: T,
          initialVelocity: T? = null,
          animationSpec: AnimationSpec<T> = spring(),
          block: (value: T, velocity: T) -> Unit,
      ) {
          val initialVelocityVector =
              initialVelocity?.let { typeConverter.convertToVector(it) }
                  ?: typeConverter.convertToVector(initialValue).newInstance()
          val anim =
              TargetBasedAnimation(
compose:
  id: live-androidx-animation-animation-core-suspend-animation
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core.AnimationState
  sections:
    - id: live-androidx-animation-animation-core-suspend-animation-lines-1
      title: Suspend animation source (lines 1–35)
      aliases:
        - androidx.compose.animation.core.AnimationState
        - androidx.compose.animation.core.animateTo
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-106
      title: Suspend animation source (lines 106–140)
      aliases:
        - androidx.compose.animation.core.AnimationState
        - androidx.compose.animation.core.animateTo
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-141
      title: Suspend animation source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.AnimationState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-176
      title: Suspend animation source (lines 176–210)
      aliases:
        - androidx.compose.animation.core.AnimationState
        - androidx.compose.animation.core.animateTo
        - androidx.compose.animation.core.animateDecay
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-211
      title: Suspend animation source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.AnimationState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-246
      title: Suspend animation source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-281
      title: Suspend animation source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-316
      title: Suspend animation source (lines 316–350)
      aliases:
        - androidx.compose.animation.core.AnimationState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-351
      title: Suspend animation source (lines 351–363)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-36
      title: Suspend animation source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.AnimationState
        - androidx.compose.animation.core.animateTo
        - androidx.compose.animation.core.animateDecay
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-suspend-animation-lines-71
      title: Suspend animation source (lines 71–105)
      aliases:
        - androidx.compose.animation.core.AnimationState
        - androidx.compose.animation.core.animateTo
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-suspend-animation-lines-71-source
      relatedIds: []
---

# Suspend animation source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt

## Suspend animation source (lines 1–35)

/*
 * Copyright 2020 The Android Open Source Project
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

import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.MotionDurationScale
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.coroutineContext
import kotlinx.coroutines.CancellationException

/**
 * Target based animation that animates from the given [initialValue] towards the [targetValue],
 * with an optional [initialVelocity]. By default, a [spring] will be used for the animation. An
 * alternative [animationSpec] can be provided to replace the default [spring].
 *
 * This is a convenient method for Float animation. If there's a need to access more info related to
 * the animation such as start time, target, etc, consider using [AnimationState.animateTo]. To
 * animate non-[Float] data types, consider the [animate] overload/variant for generic types.
 *
 * @param initialValue The initial value to animate from.
 * @param targetValue The target value to animate to.

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 106–140)

            animationSpec = animationSpec,
            initialValue = initialValue,
            targetValue = targetValue,
            typeConverter = typeConverter,
            initialVelocityVector = initialVelocityVector,
        )
    AnimationState(typeConverter, initialValue, initialVelocityVector).animate(anim) {
        block(value, typeConverter.convertFromVector(velocityVector))
    }
}

/**
 * Target based animation that takes the value and velocity from the [AnimationState] as the
 * starting condition, and animate to the [targetValue], using the [animationSpec]. During the
 * animation, the given [AnimationState] will be updated with the up-to-date value/velocity, frame
 * time, etc.
 *
 * @param targetValue The target value that the animation will animate to.
 * @param animationSpec The animation configuration that will be used. [spring] by default.
 * @param sequentialAnimation Indicates whether the animation should use the
 *   [AnimationState.lastFrameTimeNanos] as the starting time (if true), or start in a new frame. By
 *   default, [sequentialAnimation] is false, to start the animation in a few frame. In cases where
 *   an on-going animation is interrupted and a new animation is started to carry over the momentum,
 *   using the interruption time (captured in [AnimationState.lastFrameTimeNanos]) creates a
 *   smoother animation.
 * @param block Will be invoked on every frame, and the [AnimationScope] will be checked against
 *   cancellation before the animation continues. To cancel the animation from the [block], simply
 *   call [AnimationScope.cancelAnimation]. After [AnimationScope.cancelAnimation] is called,
 *   [block] will not be invoked again. The animation loop will exit after the [block] returns. All
 *   the animation related info can be accessed via [AnimationScope].
 * @sample androidx.compose.animation.core.samples.animateToOnAnimationState
 */
public suspend fun <T, V : AnimationVector> AnimationState<T, V>.animateTo(
    targetValue: T,
    animationSpec: AnimationSpec<T> = spring(),

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 141–175)

    sequentialAnimation: Boolean = false,
    block: AnimationScope<T, V>.() -> Unit = {},
) {
    val anim =
        TargetBasedAnimation(
            animationSpec = animationSpec,
            initialValue = value,
            targetValue = targetValue,
            typeConverter = typeConverter,
            initialVelocityVector = velocityVector,
        )
    animate(
        anim,
        if (sequentialAnimation) lastFrameTimeNanos else AnimationConstants.UnspecifiedTime,
        block,
    )
}

/**
 * Decay animation that slows down from the current velocity and value captured in [AnimationState]
 * until the velocity reaches 0. During the animation, the given [AnimationState] will be updated
 * with the up-to-date value/velocity, frame time, etc. This is often used to animate the result of
 * a fling gesture.
 *
 * @param animationSpec Defines the decay animation that will be used for this animation. Some
 *   options for [animationSpec] include:
 *   [splineBasedDecay][androidx.compose.animation.splineBasedDecay] and [exponentialDecay].
 * @param sequentialAnimation Indicates whether the animation should use the
 *   [AnimationState.lastFrameTimeNanos] as the starting time (if true), or start in a new frame. By
 *   default, [sequentialAnimation] is false, to start the animation in a few frame. In cases where
 *   an on-going animation is interrupted and a new animation is started to carry over the momentum,
 *   using the interruption time (captured in [AnimationState.lastFrameTimeNanos]) creates a
 *   smoother animation.
 * @param block will be invoked on every frame during the animation, and the [AnimationScope] will
 *   be checked against cancellation before the animation continues. To cancel the animation from

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 176–210)

 *   the [block], simply call [AnimationScope.cancelAnimation]. After
 *   [AnimationScope.cancelAnimation] is called, [block] will not be invoked again. The animation
 *   loop will exit after the [block] returns. All the animation related info can be accessed via
 *   [AnimationScope].
 */
public suspend fun <T, V : AnimationVector> AnimationState<T, V>.animateDecay(
    animationSpec: DecayAnimationSpec<T>,
    sequentialAnimation: Boolean = false,
    block: AnimationScope<T, V>.() -> Unit = {},
) {
    val anim =
        DecayAnimation<T, V>(
            animationSpec = animationSpec,
            initialValue = value,
            initialVelocityVector = velocityVector,
            typeConverter = typeConverter,
        )
    animate(
        anim,
        if (sequentialAnimation) lastFrameTimeNanos else AnimationConstants.UnspecifiedTime,
        block,
    )
}

/**
 * This animation function runs the animation defined in the given [animation] from start to finish.
 * During the animation, the [AnimationState] will be updated with the up-to-date value/velocity,
 * frame time, etc.
 *
 * For [Animation]s that use [AnimationSpec], consider using these more convenient APIs: [animate],
 * [AnimationState.animateTo], [animateDecay], [AnimationState.animateDecay].
 *
 * @param startTimeNanos If provided, it will be used as the time that the animation was started. By
 *   default, [startTimeNanos] is [AnimationConstants.UnspecifiedTime], meaning the animation will
 *   start in the next frame.

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 211–245)

 * @param block Will be invoked on every frame, and the [AnimationScope] will be checked against
 *   cancellation before the animation continues. To cancel the animation from the [block], simply
 *   call [AnimationScope.cancelAnimation]. After [AnimationScope.cancelAnimation] is called,
 *   [block] will not be invoked again. The animation loop will exit after the [block] returns. All
 *   the animation related info can be accessed via [AnimationScope].
 */
// TODO: This method uses AnimationState and Animation at the same time, it's potentially confusing
//  as to which is the source of truth for initial value/velocity. Consider letting [Animation] have
//  some suspend fun differently.
internal suspend fun <T, V : AnimationVector> AnimationState<T, V>.animate(
    animation: Animation<T, V>,
    startTimeNanos: Long = AnimationConstants.UnspecifiedTime,
    block: AnimationScope<T, V>.() -> Unit = {},
) {
    val initialValue = animation.getValueFromNanos(0)
    val initialVelocityVector = animation.getVelocityVectorFromNanos(0)
    var lateInitScope: AnimationScope<T, V>? = null
    try {
        if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
            val durationScale = coroutineContext.durationScale
            animation.callWithFrameNanos {
                lateInitScope =
                    AnimationScope(
                            initialValue = initialValue,
                            typeConverter = animation.typeConverter,
                            initialVelocityVector = initialVelocityVector,
                            lastFrameTimeNanos = it,
                            targetValue = animation.targetValue,
                            startTimeNanos = it,
                            isRunning = true,
                            onCancel = { isRunning = false },
                        )
                        .apply {
                            // First frame
                            doAnimationFrameWithScale(

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 246–280)

                                it,
                                durationScale,
                                animation,
                                this@animate,
                                block,
                            )
                        }
            }
        } else {
            lateInitScope =
                AnimationScope(
                        initialValue = initialValue,
                        typeConverter = animation.typeConverter,
                        initialVelocityVector = initialVelocityVector,
                        lastFrameTimeNanos = startTimeNanos,
                        targetValue = animation.targetValue,
                        startTimeNanos = startTimeNanos,
                        isRunning = true,
                        onCancel = { isRunning = false },
                    )
                    .apply {
                        // First frame
                        doAnimationFrameWithScale(
                            startTimeNanos,
                            coroutineContext.durationScale,
                            animation,
                            this@animate,
                            block,
                        )
                    }
        }
        // Subsequent frames
        while (lateInitScope!!.isRunning) {
            val durationScale = coroutineContext.durationScale
            animation.callWithFrameNanos {

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 281–315)

                lateInitScope!!.doAnimationFrameWithScale(it, durationScale, animation, this, block)
            }
        }
        // End of animation
    } catch (e: CancellationException) {
        lateInitScope?.isRunning = false
        if (lateInitScope?.lastFrameTimeNanos == lastFrameTimeNanos) {
            // There hasn't been another animation.
            isRunning = false
        }
        throw e
    }
}

/**
 * Calls the [finite][withFrameNanos] or [infinite][withInfiniteAnimationFrameNanos] variant of
 * `withFrameNanos`, depending on the value of [Animation.isInfinite].
 */
private suspend fun <R, T, V : AnimationVector> Animation<T, V>.callWithFrameNanos(
    onFrame: (frameTimeNanos: Long) -> R
): R {
    return if (isInfinite) {
        withInfiniteAnimationFrameNanos(onFrame)
    } else {
        withFrameNanos { onFrame.invoke(it / AnimationDebugDurationScale) }
    }
}

internal val CoroutineContext.durationScale: Float
    get() {
        val scale = this[MotionDurationScale]?.scaleFactor ?: 1f
        checkPrecondition(scale >= 0f) { "negative scale factor" }
        return scale
    }


Sources: [live-androidx-animation-animation-core-suspend-animation-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 316–350)

internal fun <T, V : AnimationVector> AnimationScope<T, V>.updateState(
    state: AnimationState<T, V>
) {
    state.value = value
    state.velocityVector.copyFrom(velocityVector)
    state.finishedTimeNanos = finishedTimeNanos
    state.lastFrameTimeNanos = lastFrameTimeNanos
    state.isRunning = isRunning
}

private fun <T, V : AnimationVector> AnimationScope<T, V>.doAnimationFrameWithScale(
    frameTimeNanos: Long,
    durationScale: Float,
    anim: Animation<T, V>,
    state: AnimationState<T, V>,
    block: AnimationScope<T, V>.() -> Unit,
) {
    val playTimeNanos =
        if (durationScale == 0f) {
            anim.durationNanos
        } else {
            ((frameTimeNanos - startTimeNanos) / durationScale).toLong()
        }
    doAnimationFrame(frameTimeNanos, playTimeNanos, anim, state, block)
}

// Impl detail, invoked every frame.
private fun <T, V : AnimationVector> AnimationScope<T, V>.doAnimationFrame(
    frameTimeNanos: Long,
    playTimeNanos: Long,
    anim: Animation<T, V>,
    state: AnimationState<T, V>,
    block: AnimationScope<T, V>.() -> Unit,
) {
    lastFrameTimeNanos = frameTimeNanos

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 351–363)

    value = anim.getValueFromNanos(playTimeNanos)
    velocityVector = anim.getVelocityVectorFromNanos(playTimeNanos)
    val isLastFrame = anim.isFinishedFromNanos(playTimeNanos)
    if (isLastFrame) {
        // TODO: This could probably be a little more granular
        // TODO: end time isn't necessarily last frame time
        finishedTimeNanos = lastFrameTimeNanos
        isRunning = false
    }
    updateState(state)
    block()
}


Sources: [live-androidx-animation-animation-core-suspend-animation-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 36–70)

 * @param initialVelocity The velocity to use for the animation. 0f by default.
 * @param animationSpec The animation configuration that will be used. [spring] by default.
 * @param block Will be invoked on every frame with the current value and velocity of the animation
 *   for that frame.
 * @sample androidx.compose.animation.core.samples.suspendAnimateFloatVariant
 * @see AnimationState.animateTo
 */
public suspend fun animate(
    initialValue: Float,
    targetValue: Float,
    initialVelocity: Float = 0f,
    animationSpec: AnimationSpec<Float> = spring(),
    block: (value: Float, velocity: Float) -> Unit,
) {
    animate(Float.VectorConverter, initialValue, targetValue, initialVelocity, animationSpec, block)
}

/**
 * Decay animation that slows down from the given [initialVelocity] starting at [initialValue] until
 * the velocity reaches 0. This is often used after a fling gesture.
 *
 * This is a convenient method for decay animation. If there's a need to access more info related to
 * the animation such as start time, target, etc, consider using [AnimationState.animateDecay].
 *
 * @param initialValue The initial value to animate from.
 * @param initialVelocity The initial velocity of the animation.
 * @param animationSpec Defines the decay animation that will be used for this animation. Some
 *   options for this [animationSpec] include:
 *   [splineBasedDecay][androidx.compose.animation.splineBasedDecay] and [exponentialDecay].
 * @param block Will be invoked on each animation frame with up-to-date value and velocity.
 * @see AnimationState.animateDecay
 */
public suspend fun animateDecay(
    initialValue: Float,
    initialVelocity: Float,

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)

## Suspend animation source (lines 71–105)

    animationSpec: FloatDecayAnimationSpec,
    block: (value: Float, velocity: Float) -> Unit,
) {
    val anim = DecayAnimation(animationSpec, initialValue, initialVelocity)
    AnimationState(initialValue, initialVelocity).animate(anim) {
        block(value, velocityVector.value)
    }
}

/**
 * Target based animation for animating any data type [T], so long as [T] can be converted to an
 * [AnimationVector] using [typeConverter]. The animation will start from the [initialValue] and
 * animate to the [targetValue] value. The [initialVelocity] will be derived from an all-0
 * [AnimationVector] unless specified. [animationSpec] can be provided to create a specific look and
 * feel for the animation. By default, a [spring] will be used.
 *
 * This is a convenient method for target-based animation. If there's a need to access more info
 * related to the animation such as start time, target, etc, consider using
 * [AnimationState.animateTo].
 *
 * @see AnimationState.animateTo
 */
public suspend fun <T, V : AnimationVector> animate(
    typeConverter: TwoWayConverter<T, V>,
    initialValue: T,
    targetValue: T,
    initialVelocity: T? = null,
    animationSpec: AnimationSpec<T> = spring(),
    block: (value: T, velocity: T) -> Unit,
) {
    val initialVelocityVector =
        initialVelocity?.let { typeConverter.convertToVector(it) }
            ?: typeConverter.convertToVector(initialValue).newInstance()
    val anim =
        TargetBasedAnimation(

Sources: [live-androidx-animation-animation-core-suspend-animation-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/SuspendAnimation.kt)
