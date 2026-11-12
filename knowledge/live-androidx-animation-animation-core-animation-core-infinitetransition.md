---
type: reference
title: androidx.compose.animation.core InfiniteTransition.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 1
    endLine: 35
    sha256: 8bde6ab0faf2d17303bdd7f870b8544c63aff55d35c0ce4666d07ed77a5e48f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2021 The Android Open Source Project
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

      import androidx.collection.mutableObjectListOf
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.DisposableEffect
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.SideEffect
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
      import androidx.compose.runtime.snapshotFlow
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.unit.Dp
      import kotlinx.coroutines.flow.first

      /**
       * Creates a [InfiniteTransition] that runs infinite child animations. Child animations can be added
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 106
    endLine: 140
    sha256: b31a372923456c69f9aa0249f20527c119ff4d88c09f652fbf161469c8598979
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              internal fun updateValues(
                  initialValue: T,
                  targetValue: T,
                  animationSpec: AnimationSpec<T>,
              ) {
                  this.initialValue = initialValue
                  this.targetValue = targetValue
                  this.animationSpec = animationSpec
                  // Create a new animation if anything (i.e. initial/target) has changed
                  // TODO: Consider providing some continuity maybe?
                  animation =
                      TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue)
                  refreshChildNeeded = true
                  isFinished = false
                  startOnTheNextFrame = true
              }

              /** Set play time for the [animation]. */
              internal fun onPlayTimeChanged(playTimeNanos: Long) {
                  refreshChildNeeded = false
                  if (startOnTheNextFrame) {
                      startOnTheNextFrame = false
                      playTimeNanosOffset = playTimeNanos
                  }
                  val playTime = playTimeNanos - playTimeNanosOffset
                  value = animation.getValueFromNanos(playTime)
                  isFinished = animation.isFinishedFromNanos(playTime)
              }

              internal fun skipToEnd() {
                  value = animation.targetValue
                  startOnTheNextFrame = true
              }

              internal fun reset() {
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 141
    endLine: 175
    sha256: afabec7aceaeec33d5e21af411aadef6aec25303c695bc49663ae6af27bfac25
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  startOnTheNextFrame = true
              }
          }

          private val _animations = mutableObjectListOf<TransitionAnimationState<*, *>>()
          private var refreshChildNeeded by mutableStateOf(false)
          private var startTimeNanos = AnimationConstants.UnspecifiedTime
          private var isRunning by mutableStateOf(true)

          /** List of [TransitionAnimationState]s that are in a [InfiniteTransition]. */
          public val animations: List<TransitionAnimationState<*, *>>
              @Suppress("AsCollectionCall") // Public API requires a List.
              get() = _animations.asMutableList()

          internal fun addAnimation(animation: TransitionAnimationState<*, *>) {
              _animations.add(animation)
              refreshChildNeeded = true
          }

          internal fun removeAnimation(animation: TransitionAnimationState<*, *>) {
              _animations.remove(animation)
          }

          @Suppress("ComposableNaming")
          @Composable
          internal fun run() {
              val toolingOverride = remember { mutableStateOf<State<Long>?>(null) }
              if (isRunning || refreshChildNeeded) {
                  LaunchedEffect(this) {
                      var durationScale = 1f
                      // Restart every time duration scale changes
                      while (true) {
                          withInfiniteAnimationFrameNanos {
                              val currentTimeNanos = toolingOverride.value?.value ?: it
                              if (
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 176
    endLine: 210
    sha256: 427df7002e5867703109292afaed0f28007a1322eac09dbb99f4eb57a2573c44
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  startTimeNanos == AnimationConstants.UnspecifiedTime ||
                                      durationScale != coroutineContext.durationScale
                              ) {
                                  startTimeNanos = it
                                  _animations.forEach { it.reset() }
                                  durationScale = coroutineContext.durationScale
                              }
                              if (durationScale == 0f) {
                                  // Finish right away
                                  _animations.forEach { it.skipToEnd() }
                              } else {
                                  val playTimeNanos =
                                      ((currentTimeNanos - startTimeNanos) / durationScale).toLong()
                                  onFrame(playTimeNanos)
                              }
                          }
                          // Suspend until duration scale is non-zero
                          if (durationScale == 0f) {
                              snapshotFlow { coroutineContext.durationScale }.first { it > 0f }
                          }
                      }
                  }
              }
          }

          private fun onFrame(playTimeNanos: Long) {
              var allFinished = true
              // Pulse new playtime
              _animations.forEach {
                  if (!it.isFinished) {
                      it.onPlayTimeChanged(playTimeNanos)
                  }
                  // Check isFinished flag again after the animation pulse
                  if (!it.isFinished) {
                      allFinished = false
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 211
    endLine: 245
    sha256: 786a7a8dbc680f238f2228a8c9e9b86df90577f766b3c2bcc7bdb35aebeea4ea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }
              isRunning = !allFinished
          }
      }

      /**
       * Creates an animation of type [T] that runs infinitely as a part of the given
       * [InfiniteTransition]. Any data type can be animated so long as it can be converted from and to an
       * [AnimationVector]. This conversion needs to be provided as a [typeConverter]. Some examples of
       * such [TwoWayConverter] are: [Int.VectorConverter][Int.Companion.VectorConverter],
       * [Dp.VectorConverter][Dp.Companion.VectorConverter],
       * [Size.VectorConverter][Size.Companion.VectorConverter], etc
       *
       * Once the animation is created, it will run from [initialValue] to [targetValue] and repeat.
       * Depending on the [RepeatMode] of the provided [animationSpec], the animation could either restart
       * after each iteration (i.e. [RepeatMode.Restart]), or reverse after each iteration (i.e .
       * [RepeatMode.Reverse]).
       *
       * If [initialValue] or [targetValue] is changed at any point during the animation, the animation
       * will be restarted with the new [initialValue] and [targetValue]. __Note__: this means continuity
       * will *not* be preserved.
       *
       * A [label] for differentiating this animation from others in android studio.
       *
       * @sample androidx.compose.animation.core.samples.InfiniteTransitionAnimateValueSample
       * @see [InfiniteTransition.animateFloat]
       * @see [androidx.compose.animation.animateColor]
       */
      @Composable
      public fun <T, V : AnimationVector> InfiniteTransition.animateValue(
          initialValue: T,
          targetValue: T,
          typeConverter: TwoWayConverter<T, V>,
          animationSpec: InfiniteRepeatableSpec<T>,
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 246
    endLine: 280
    sha256: 1e62efaed31fbc4f1207b26509d94baa0b24e317d8cadac77cf748b4cc36fde4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          label: String = "ValueAnimation",
      ): State<T> {
          val transitionAnimation = remember {
              TransitionAnimationState(initialValue, targetValue, typeConverter, animationSpec, label)
          }

          SideEffect {
              if (
                  initialValue != transitionAnimation.initialValue ||
                      targetValue != transitionAnimation.targetValue
              ) {
                  transitionAnimation.updateValues(
                      initialValue = initialValue,
                      targetValue = targetValue,
                      animationSpec = animationSpec,
                  )
              }
          }

          DisposableEffect(transitionAnimation) {
              addAnimation(transitionAnimation)
              onDispose { removeAnimation(transitionAnimation) }
          }
          return transitionAnimation
      }

      /**
       * Creates an animation of Float type that runs infinitely as a part of the given
       * [InfiniteTransition].
       *
       * Once the animation is created, it will run from [initialValue] to [targetValue] and repeat.
       * Depending on the [RepeatMode] of the provided [animationSpec], the animation could either restart
       * after each iteration (i.e. [RepeatMode.Restart]), or reverse after each iteration (i.e .
       * [RepeatMode.Reverse]).
       *
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 281
    endLine: 315
    sha256: 1baeaddf46d59081d3a2ee6b77dc4aa4e9f938b4adc619cecba77917721a6054
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If [initialValue] or [targetValue] is changed at any point during the animation, the animation
       * will be restarted with the new [initialValue] and [targetValue]. __Note__: this means continuity
       * will *not* be preserved.
       *
       * A [label] for differentiating this animation from others in android studio.
       *
       * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
       * @see [InfiniteTransition.animateValue]
       * @see [androidx.compose.animation.animateColor]
       */
      @Composable
      public fun InfiniteTransition.animateFloat(
          initialValue: Float,
          targetValue: Float,
          animationSpec: InfiniteRepeatableSpec<Float>,
          label: String = "FloatAnimation",
      ): State<Float> =
          animateValue(initialValue, targetValue, Float.VectorConverter, animationSpec, label)

      @Deprecated(
          "rememberInfiniteTransition APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun rememberInfiniteTransition(): InfiniteTransition {
          return rememberInfiniteTransition("InfiniteTransition")
      }

      @Deprecated(
          "animateValue APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun <T, V : AnimationVector> InfiniteTransition.animateValue(
          initialValue: T,
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 316
    endLine: 346
    sha256: 95086a365bb3f29b35a80516729921234d27b89fb6964e8f90d8ee2a4212034f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          targetValue: T,
          typeConverter: TwoWayConverter<T, V>,
          animationSpec: InfiniteRepeatableSpec<T>,
      ): State<T> {
          return animateValue(
              initialValue = initialValue,
              targetValue = targetValue,
              typeConverter = typeConverter,
              animationSpec = animationSpec,
              label = "ValueAnimation",
          )
      }

      @Deprecated(
          "animateFloat APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun InfiniteTransition.animateFloat(
          initialValue: Float,
          targetValue: Float,
          animationSpec: InfiniteRepeatableSpec<Float>,
      ): State<Float> {
          return animateFloat(
              initialValue = initialValue,
              targetValue = targetValue,
              animationSpec = animationSpec,
              label = "FloatAnimation",
          )
      }
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 36
    endLine: 70
    sha256: 7ee6f7d68378335dec694c8e84013cd8559f011fa6c3bf583df681c7929595a8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * using [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
       * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue]. Child animations will
       * start running as soon as they enter the composition, and will not stop until they are removed
       * from the composition.
       *
       * @param label A label for differentiating this animation from others in android studio.
       * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
       */
      @Composable
      public fun rememberInfiniteTransition(label: String = "InfiniteTransition"): InfiniteTransition {
          val infiniteTransition = remember { InfiniteTransition(label) }
          infiniteTransition.run()
          return infiniteTransition
      }

      /**
       * [InfiniteTransition] is responsible for running child animations. Child animations can be added
       * using [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
       * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue]. Child animations will
       * start running as soon as they enter the composition, and will not stop until they are removed
       * from the composition.
       *
       * @param label A label for differentiating this animation from others in android studio.
       * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
       */
      public class InfiniteTransition internal constructor(public val label: String) {

          /**
           * Each animation created using
           * [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
           * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue] is represented as a
           * [TransitionAnimationState] in [InfiniteTransition]. [typeConverter] converts the animation
           * value from/to an [AnimationVector]. [label] differentiates this animation from others in
           * android studio.
           */
  - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt
    startLine: 71
    endLine: 105
    sha256: bc1d8734c9d01b3fdfbab3d9f1339a79764b63ca14e586b5a6e57dfe829a960d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public inner class TransitionAnimationState<T, V : AnimationVector>
          internal constructor(
              internal var initialValue: T,
              internal var targetValue: T,
              public val typeConverter: TwoWayConverter<T, V>,
              animationSpec: AnimationSpec<T>,
              public val label: String,
          ) : State<T> {
              override var value: T by mutableStateOf(initialValue)
                  internal set

              /** [AnimationSpec] that is used for current animation run. */
              public var animationSpec: AnimationSpec<T> = animationSpec
                  private set

              /**
               * All the animation configurations including initial value/velocity & target value for
               * animating from [initialValue] to [targetValue] are captured in [animation].
               */
              public var animation: TargetBasedAnimation<T, V> =
                  TargetBasedAnimation(this.animationSpec, typeConverter, initialValue, targetValue)
                  internal set

              // This is used to signal parent for less work in a normal running mode, but in seeking
              // this is ignored since time can go both ways.
              internal var isFinished = false

              // If animation is refreshed during the run, start the new animation in the next frame
              private var startOnTheNextFrame = false

              // When the animation changes, it needs to start from playtime 0 again, offsetting from
              // parent's playtime to achieve that.
              private var playTimeNanosOffset = 0L

              // This gets called when the initial/target value changes, which should be a rare case.
compose:
  id: live-androidx-animation-animation-core-animation-core-infinitetransition
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-1
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 1–35)
      aliases:
        - androidx.compose.animation.core.InfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-106
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 106–140)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-141
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.InfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-176
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 176–210)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-211
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.InfiniteTransition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-246
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 246–280)
      aliases:
        - androidx.compose.animation.core.InfiniteTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-281
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 281–315)
      aliases:
        - androidx.compose.animation.core.rememberInfiniteTransition
        - androidx.compose.animation.core.InfiniteTransition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-316
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 316–346)
      aliases:
        - androidx.compose.animation.core.InfiniteTransition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-36
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.rememberInfiniteTransition
        - androidx.compose.animation.core.InfiniteTransition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-infinitetransition-lines-71
      title: androidx.compose.animation.core InfiniteTransition.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-infinitetransition-lines-71-source
      relatedIds: []
---

# androidx.compose.animation.core InfiniteTransition.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt

## androidx.compose.animation.core InfiniteTransition.kt source (lines 1–35)

/*
 * Copyright 2021 The Android Open Source Project
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

import androidx.collection.mutableObjectListOf
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.unit.Dp
import kotlinx.coroutines.flow.first

/**
 * Creates a [InfiniteTransition] that runs infinite child animations. Child animations can be added

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 106–140)

        internal fun updateValues(
            initialValue: T,
            targetValue: T,
            animationSpec: AnimationSpec<T>,
        ) {
            this.initialValue = initialValue
            this.targetValue = targetValue
            this.animationSpec = animationSpec
            // Create a new animation if anything (i.e. initial/target) has changed
            // TODO: Consider providing some continuity maybe?
            animation =
                TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue)
            refreshChildNeeded = true
            isFinished = false
            startOnTheNextFrame = true
        }

        /** Set play time for the [animation]. */
        internal fun onPlayTimeChanged(playTimeNanos: Long) {
            refreshChildNeeded = false
            if (startOnTheNextFrame) {
                startOnTheNextFrame = false
                playTimeNanosOffset = playTimeNanos
            }
            val playTime = playTimeNanos - playTimeNanosOffset
            value = animation.getValueFromNanos(playTime)
            isFinished = animation.isFinishedFromNanos(playTime)
        }

        internal fun skipToEnd() {
            value = animation.targetValue
            startOnTheNextFrame = true
        }

        internal fun reset() {

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 141–175)

            startOnTheNextFrame = true
        }
    }

    private val _animations = mutableObjectListOf<TransitionAnimationState<*, *>>()
    private var refreshChildNeeded by mutableStateOf(false)
    private var startTimeNanos = AnimationConstants.UnspecifiedTime
    private var isRunning by mutableStateOf(true)

    /** List of [TransitionAnimationState]s that are in a [InfiniteTransition]. */
    public val animations: List<TransitionAnimationState<*, *>>
        @Suppress("AsCollectionCall") // Public API requires a List.
        get() = _animations.asMutableList()

    internal fun addAnimation(animation: TransitionAnimationState<*, *>) {
        _animations.add(animation)
        refreshChildNeeded = true
    }

    internal fun removeAnimation(animation: TransitionAnimationState<*, *>) {
        _animations.remove(animation)
    }

    @Suppress("ComposableNaming")
    @Composable
    internal fun run() {
        val toolingOverride = remember { mutableStateOf<State<Long>?>(null) }
        if (isRunning || refreshChildNeeded) {
            LaunchedEffect(this) {
                var durationScale = 1f
                // Restart every time duration scale changes
                while (true) {
                    withInfiniteAnimationFrameNanos {
                        val currentTimeNanos = toolingOverride.value?.value ?: it
                        if (

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 176–210)

                            startTimeNanos == AnimationConstants.UnspecifiedTime ||
                                durationScale != coroutineContext.durationScale
                        ) {
                            startTimeNanos = it
                            _animations.forEach { it.reset() }
                            durationScale = coroutineContext.durationScale
                        }
                        if (durationScale == 0f) {
                            // Finish right away
                            _animations.forEach { it.skipToEnd() }
                        } else {
                            val playTimeNanos =
                                ((currentTimeNanos - startTimeNanos) / durationScale).toLong()
                            onFrame(playTimeNanos)
                        }
                    }
                    // Suspend until duration scale is non-zero
                    if (durationScale == 0f) {
                        snapshotFlow { coroutineContext.durationScale }.first { it > 0f }
                    }
                }
            }
        }
    }

    private fun onFrame(playTimeNanos: Long) {
        var allFinished = true
        // Pulse new playtime
        _animations.forEach {
            if (!it.isFinished) {
                it.onPlayTimeChanged(playTimeNanos)
            }
            // Check isFinished flag again after the animation pulse
            if (!it.isFinished) {
                allFinished = false

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 211–245)

            }
        }
        isRunning = !allFinished
    }
}

/**
 * Creates an animation of type [T] that runs infinitely as a part of the given
 * [InfiniteTransition]. Any data type can be animated so long as it can be converted from and to an
 * [AnimationVector]. This conversion needs to be provided as a [typeConverter]. Some examples of
 * such [TwoWayConverter] are: [Int.VectorConverter][Int.Companion.VectorConverter],
 * [Dp.VectorConverter][Dp.Companion.VectorConverter],
 * [Size.VectorConverter][Size.Companion.VectorConverter], etc
 *
 * Once the animation is created, it will run from [initialValue] to [targetValue] and repeat.
 * Depending on the [RepeatMode] of the provided [animationSpec], the animation could either restart
 * after each iteration (i.e. [RepeatMode.Restart]), or reverse after each iteration (i.e .
 * [RepeatMode.Reverse]).
 *
 * If [initialValue] or [targetValue] is changed at any point during the animation, the animation
 * will be restarted with the new [initialValue] and [targetValue]. __Note__: this means continuity
 * will *not* be preserved.
 *
 * A [label] for differentiating this animation from others in android studio.
 *
 * @sample androidx.compose.animation.core.samples.InfiniteTransitionAnimateValueSample
 * @see [InfiniteTransition.animateFloat]
 * @see [androidx.compose.animation.animateColor]
 */
@Composable
public fun <T, V : AnimationVector> InfiniteTransition.animateValue(
    initialValue: T,
    targetValue: T,
    typeConverter: TwoWayConverter<T, V>,
    animationSpec: InfiniteRepeatableSpec<T>,

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 246–280)

    label: String = "ValueAnimation",
): State<T> {
    val transitionAnimation = remember {
        TransitionAnimationState(initialValue, targetValue, typeConverter, animationSpec, label)
    }

    SideEffect {
        if (
            initialValue != transitionAnimation.initialValue ||
                targetValue != transitionAnimation.targetValue
        ) {
            transitionAnimation.updateValues(
                initialValue = initialValue,
                targetValue = targetValue,
                animationSpec = animationSpec,
            )
        }
    }

    DisposableEffect(transitionAnimation) {
        addAnimation(transitionAnimation)
        onDispose { removeAnimation(transitionAnimation) }
    }
    return transitionAnimation
}

/**
 * Creates an animation of Float type that runs infinitely as a part of the given
 * [InfiniteTransition].
 *
 * Once the animation is created, it will run from [initialValue] to [targetValue] and repeat.
 * Depending on the [RepeatMode] of the provided [animationSpec], the animation could either restart
 * after each iteration (i.e. [RepeatMode.Restart]), or reverse after each iteration (i.e .
 * [RepeatMode.Reverse]).
 *

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 281–315)

 * If [initialValue] or [targetValue] is changed at any point during the animation, the animation
 * will be restarted with the new [initialValue] and [targetValue]. __Note__: this means continuity
 * will *not* be preserved.
 *
 * A [label] for differentiating this animation from others in android studio.
 *
 * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
 * @see [InfiniteTransition.animateValue]
 * @see [androidx.compose.animation.animateColor]
 */
@Composable
public fun InfiniteTransition.animateFloat(
    initialValue: Float,
    targetValue: Float,
    animationSpec: InfiniteRepeatableSpec<Float>,
    label: String = "FloatAnimation",
): State<Float> =
    animateValue(initialValue, targetValue, Float.VectorConverter, animationSpec, label)

@Deprecated(
    "rememberInfiniteTransition APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun rememberInfiniteTransition(): InfiniteTransition {
    return rememberInfiniteTransition("InfiniteTransition")
}

@Deprecated(
    "animateValue APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun <T, V : AnimationVector> InfiniteTransition.animateValue(
    initialValue: T,

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 316–346)

    targetValue: T,
    typeConverter: TwoWayConverter<T, V>,
    animationSpec: InfiniteRepeatableSpec<T>,
): State<T> {
    return animateValue(
        initialValue = initialValue,
        targetValue = targetValue,
        typeConverter = typeConverter,
        animationSpec = animationSpec,
        label = "ValueAnimation",
    )
}

@Deprecated(
    "animateFloat APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun InfiniteTransition.animateFloat(
    initialValue: Float,
    targetValue: Float,
    animationSpec: InfiniteRepeatableSpec<Float>,
): State<Float> {
    return animateFloat(
        initialValue = initialValue,
        targetValue = targetValue,
        animationSpec = animationSpec,
        label = "FloatAnimation",
    )
}


Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 36–70)

 * using [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
 * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue]. Child animations will
 * start running as soon as they enter the composition, and will not stop until they are removed
 * from the composition.
 *
 * @param label A label for differentiating this animation from others in android studio.
 * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
 */
@Composable
public fun rememberInfiniteTransition(label: String = "InfiniteTransition"): InfiniteTransition {
    val infiniteTransition = remember { InfiniteTransition(label) }
    infiniteTransition.run()
    return infiniteTransition
}

/**
 * [InfiniteTransition] is responsible for running child animations. Child animations can be added
 * using [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
 * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue]. Child animations will
 * start running as soon as they enter the composition, and will not stop until they are removed
 * from the composition.
 *
 * @param label A label for differentiating this animation from others in android studio.
 * @sample androidx.compose.animation.core.samples.InfiniteTransitionSample
 */
public class InfiniteTransition internal constructor(public val label: String) {

    /**
     * Each animation created using
     * [InfiniteTransition.animateColor][androidx.compose.animation.animateColor],
     * [InfiniteTransition.animateFloat], or [InfiniteTransition.animateValue] is represented as a
     * [TransitionAnimationState] in [InfiniteTransition]. [typeConverter] converts the animation
     * value from/to an [AnimationVector]. [label] differentiates this animation from others in
     * android studio.
     */

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)

## androidx.compose.animation.core InfiniteTransition.kt source (lines 71–105)

    public inner class TransitionAnimationState<T, V : AnimationVector>
    internal constructor(
        internal var initialValue: T,
        internal var targetValue: T,
        public val typeConverter: TwoWayConverter<T, V>,
        animationSpec: AnimationSpec<T>,
        public val label: String,
    ) : State<T> {
        override var value: T by mutableStateOf(initialValue)
            internal set

        /** [AnimationSpec] that is used for current animation run. */
        public var animationSpec: AnimationSpec<T> = animationSpec
            private set

        /**
         * All the animation configurations including initial value/velocity & target value for
         * animating from [initialValue] to [targetValue] are captured in [animation].
         */
        public var animation: TargetBasedAnimation<T, V> =
            TargetBasedAnimation(this.animationSpec, typeConverter, initialValue, targetValue)
            internal set

        // This is used to signal parent for less work in a normal running mode, but in seeking
        // this is ignored since time can go both ways.
        internal var isFinished = false

        // If animation is refreshed during the run, start the new animation in the next frame
        private var startOnTheNextFrame = false

        // When the animation changes, it needs to start from playtime 0 again, offsetting from
        // parent's playtime to achieve that.
        private var playTimeNanosOffset = 0L

        // This gets called when the initial/target value changes, which should be a rare case.

Sources: [live-androidx-animation-animation-core-animation-core-infinitetransition-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/InfiniteTransition.kt)
