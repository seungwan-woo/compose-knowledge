---
type: reference
title: androidx.compose.animation.core AnimationSpec.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 1
    endLine: 35
    sha256: 665c7768a1587990147021d44d731609165dda5835b1cb8d102fd3fdc035da23
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

      import androidx.annotation.FloatRange
      import androidx.annotation.IntRange
      import androidx.collection.MutableIntList
      import androidx.collection.MutableIntObjectMap
      import androidx.collection.emptyIntObjectMap
      import androidx.collection.intListOf
      import androidx.collection.mutableIntObjectMapOf
      import androidx.compose.animation.core.AnimationConstants.DefaultDurationMillis
      import androidx.compose.animation.core.ArcMode.Companion.ArcBelow
      import androidx.compose.animation.core.ArcMode.Companion.ArcLinear
      import androidx.compose.animation.core.KeyframesSpec.KeyframesSpecConfig
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.util.fastRoundToInt
      import kotlin.math.abs
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 1016
    endLine: 1050
    sha256: 4005529ea00fb47b5dcb40b538e9f942b16aa82cdbf3efe1b7a46632b1b9e2b6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      @Stable
      public fun <T> infiniteRepeatable(
          animation: DurationBasedAnimationSpec<T>,
          repeatMode: RepeatMode = RepeatMode.Restart,
          initialStartOffset: StartOffset = StartOffset(0),
      ): InfiniteRepeatableSpec<T> = InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset)

      @Stable
      @Deprecated(
          level = DeprecationLevel.HIDDEN,
          message =
              "This method has been deprecated in favor of the infinite repeatable function that" +
                  " accepts start offset.",
      )
      public fun <T> infiniteRepeatable(
          animation: DurationBasedAnimationSpec<T>,
          repeatMode: RepeatMode = RepeatMode.Restart,
      ): InfiniteRepeatableSpec<T> = InfiniteRepeatableSpec(animation, repeatMode, StartOffset(0))

      /**
       * Creates a Snap animation for immediately switching the animating value to the end value.
       *
       * @param delayMillis the number of milliseconds to wait before the animation runs. 0 by default.
       */
      @Stable public fun <T> snap(delayMillis: Int = 0): SnapSpec<T> = SnapSpec<T>(delayMillis)

      /**
       * Returns an [AnimationSpec] that is the same as [animationSpec] with a delay of [startDelayNanos].
       */
      @Stable
      internal fun <T> delayed(animationSpec: AnimationSpec<T>, startDelayNanos: Long): AnimationSpec<T> =
          StartDelayAnimationSpec(animationSpec, startDelayNanos)

      /**
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 1051
    endLine: 1085
    sha256: e82bc7e1864db641129cdbb5076e52a5f04bfb79795df74aa56b8c7334cf5391
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * A [VectorizedAnimationSpec] that wraps [vectorizedAnimationSpec], giving it a start delay of
       * [startDelayNanos].
       */
      @Immutable
      private class StartDelayVectorizedAnimationSpec<V : AnimationVector>(
          val vectorizedAnimationSpec: VectorizedAnimationSpec<V>,
          val startDelayNanos: Long,
      ) : VectorizedAnimationSpec<V> {
          override val isInfinite: Boolean
              get() = vectorizedAnimationSpec.isInfinite

          override fun getDurationNanos(initialValue: V, targetValue: V, initialVelocity: V): Long =
              vectorizedAnimationSpec.getDurationNanos(
                  initialValue = initialValue,
                  targetValue = targetValue,
                  initialVelocity = initialVelocity,
              ) + startDelayNanos

          override fun getVelocityFromNanos(
              playTimeNanos: Long,
              initialValue: V,
              targetValue: V,
              initialVelocity: V,
          ): V =
              if (playTimeNanos < startDelayNanos) {
                  initialVelocity
              } else {
                  vectorizedAnimationSpec.getVelocityFromNanos(
                      playTimeNanos = playTimeNanos - startDelayNanos,
                      initialValue = initialValue,
                      targetValue = targetValue,
                      initialVelocity = initialVelocity,
                  )
              }
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 106
    endLine: 140
    sha256: 2b6f3f7aa0a9605d367f5f7b74c3d5c55ef92c40a82c78b339e238ba9803fb56
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun equals(other: Any?): Boolean =
              if (other is TweenSpec<*>) {
                  other.durationMillis == this.durationMillis &&
                      other.delay == this.delay &&
                      other.easing == this.easing
              } else {
                  false
              }

          override fun hashCode(): Int {
              return (durationMillis * 31 + easing.hashCode()) * 31 + delay
          }
      }

      /**
       * This describes [AnimationSpec]s that are based on a fixed duration, such as [KeyframesSpec],
       * [TweenSpec], and [SnapSpec]. These duration based specs can repeated when put into a
       * [RepeatableSpec].
       */
      public interface DurationBasedAnimationSpec<T> : FiniteAnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedDurationBasedAnimationSpec<V>
      }

      /**
       * A [FiniteAnimationSpec] that uses [animationSpec] for uninterrupted animations and switches to
       * [interruptionSpec] when a [Transition], [animateValueAsState], or [Animatable.animateTo]
       * animation is interrupted mid-flight.
       *
       * When a [Transition] is interrupted mid-flight, most [FiniteAnimationSpec] implementations (such
       * as [TweenSpec] or [KeyframesSpec], which ignore initial velocity) fall back to a default
       * [SpringSpec] to avoid abrupt velocity discontinuities. Wrapping a spec in
       * [InterruptionAwareAnimationSpec] overrides this fallback so [Transition] instead uses
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 1086
    endLine: 1120
    sha256: d141fd368290ce136ea2b2c8bfc409311be29d9420ec11aa27b4ccd188d8c874
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun getValueFromNanos(
              playTimeNanos: Long,
              initialValue: V,
              targetValue: V,
              initialVelocity: V,
          ): V =
              if (playTimeNanos < startDelayNanos) {
                  initialValue
              } else {
                  vectorizedAnimationSpec.getValueFromNanos(
                      playTimeNanos = playTimeNanos - startDelayNanos,
                      initialValue = initialValue,
                      targetValue = targetValue,
                      initialVelocity = initialVelocity,
                  )
              }

          override fun hashCode(): Int {
              return 31 * vectorizedAnimationSpec.hashCode() + startDelayNanos.hashCode()
          }

          override fun equals(other: Any?): Boolean {
              if (other !is StartDelayVectorizedAnimationSpec<*>) {
                  return false
              }
              return other.startDelayNanos == startDelayNanos &&
                  other.vectorizedAnimationSpec == vectorizedAnimationSpec
          }
      }

      /** An [AnimationSpec] that wraps [animationSpec], giving it a start delay of [startDelayNanos]. */
      @Immutable
      private class StartDelayAnimationSpec<T>(
          val animationSpec: AnimationSpec<T>,
          val startDelayNanos: Long,
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 1121
    endLine: 1140
    sha256: a04b682c584ac8603ab1be21017d1beba624699a8bf8ccd57d9a3f1d4c7b97c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      ) : AnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedAnimationSpec<V> {
              val vecSpec = animationSpec.vectorize(converter)
              return StartDelayVectorizedAnimationSpec(vecSpec, startDelayNanos)
          }

          override fun hashCode(): Int {
              return 31 * animationSpec.hashCode() + startDelayNanos.hashCode()
          }

          override fun equals(other: Any?): Boolean {
              if (other !is StartDelayAnimationSpec<*>) {
                  return false
              }
              return other.startDelayNanos == startDelayNanos && other.animationSpec == animationSpec
          }
      }
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 141
    endLine: 175
    sha256: 711f391c7169861935d26662984f6d0f8172e2cda558ad1e2af5b0a1d9ea5488
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [interruptionSpec] (which defaults to [animationSpec]) and passes the current in-flight value and
       * velocity to it. Similarly, when used with [Animatable.animateTo] or `animate*AsState` APIs (such
       * as [animateFloatAsState] or [animateValueAsState]), [animationSpec] is used when starting from
       * rest and [interruptionSpec] is used when the target value changes while an animation is already
       * in-flight.
       *
       * @sample androidx.compose.animation.core.samples.InterruptionAwareAnimationSpecSample
       * @property animationSpec the [FiniteAnimationSpec] used when starting an animation from rest.
       * @property interruptionSpec the [FiniteAnimationSpec] used when an animation is interrupted
       *   mid-flight. Defaults to [animationSpec].
       * @see SpringSpec
       * @see FiniteAnimationSpec
       * @see Transition
       * @see animateValueAsState
       * @see Animatable.animateTo
       */
      @Immutable
      public class InterruptionAwareAnimationSpec<T>(
          public val animationSpec: FiniteAnimationSpec<T>,
          public val interruptionSpec: FiniteAnimationSpec<T> = animationSpec,
      ) : FiniteAnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedFiniteAnimationSpec<V> = animationSpec.vectorize(converter)

          override fun equals(other: Any?): Boolean =
              other is InterruptionAwareAnimationSpec<*> &&
                  other.animationSpec == animationSpec &&
                  other.interruptionSpec == interruptionSpec

          override fun hashCode(): Int = animationSpec.hashCode() * 31 + interruptionSpec.hashCode()
      }

      /**
       * Creates a [SpringSpec] that uses the given spring constants (i.e. [dampingRatio] and [stiffness].
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 176
    endLine: 210
    sha256: 9af823f9698aa5e45b6450f5cd385d9b8d8c9675348b708e25814c3369d4f767
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * The optional [visibilityThreshold] defines when the animation should be considered to be visually
       * close enough to round off to its target.
       *
       * @param dampingRatio damping ratio of the spring. [Spring.DampingRatioNoBouncy] by default.
       * @param stiffness stiffness of the spring. [Spring.StiffnessMedium] by default.
       * @param visibilityThreshold specifies the visibility threshold
       */
      // TODO: annotate damping/stiffness with FloatRange
      @Immutable
      public class SpringSpec<T>(
          public val dampingRatio: Float = Spring.DampingRatioNoBouncy,
          public val stiffness: Float = Spring.StiffnessMedium,
          public val visibilityThreshold: T? = null,
      ) : FiniteAnimationSpec<T> {

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedSpringSpec<V> =
              VectorizedSpringSpec(dampingRatio, stiffness, converter.convert(visibilityThreshold))

          override fun equals(other: Any?): Boolean =
              if (other is SpringSpec<*>) {
                  other.dampingRatio == this.dampingRatio &&
                      other.stiffness == this.stiffness &&
                      other.visibilityThreshold == this.visibilityThreshold
              } else {
                  false
              }

          override fun hashCode(): Int =
              (visibilityThreshold.hashCode() * 31 + dampingRatio.hashCode()) * 31 + stiffness.hashCode()
      }

      private fun <T, V : AnimationVector> TwoWayConverter<T, V>.convert(data: T?): V? {
          if (data == null) {
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 211
    endLine: 245
    sha256: 1a8ef76331527205377dea89201bdf409784b8fc067223a98419ca926d0aa1d5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return null
          } else {
              return convertToVector(data)
          }
      }

      /**
       * [DurationBasedAnimationSpec] that interpolates 2-dimensional values using arcs of quarter of an
       * Ellipse.
       *
       * To interpolate with [keyframes] use [KeyframesSpecConfig.using] with an [ArcMode].
       *
       * &nbsp;
       *
       * As such, it's recommended that [ArcAnimationSpec] is only used for positional values such as:
       * [Offset], [IntOffset] or [androidx.compose.ui.unit.DpOffset].
       *
       * &nbsp;
       *
       * The orientation of the arc is indicated by the given [mode].
       *
       * Do note, that if the target value being animated only changes in one dimension, you'll only be
       * able to get a linear curve.
       *
       * Similarly, one-dimensional values will always only interpolate on a linear curve.
       *
       * @param mode Orientation of the arc.
       * @param durationMillis Duration of the animation. [DefaultDurationMillis] by default.
       * @param delayMillis Time the animation waits before starting. 0 by default.
       * @param easing [Easing] applied on the animation curve. [FastOutSlowInEasing] by default.
       * @sample androidx.compose.animation.core.samples.OffsetArcAnimationSpec
       * @see ArcMode
       * @see keyframes
       */
      @ExperimentalAnimationSpecApi
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 246
    endLine: 280
    sha256: 0f912a3a8e8808c82603094cd6f211400432e009501b2b671cdd483cdaeff5eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Immutable
      public class ArcAnimationSpec<T>(
          public val mode: ArcMode = ArcBelow,
          public val durationMillis: Int = DefaultDurationMillis,
          public val delayMillis: Int = 0,
          public val easing: Easing = FastOutSlowInEasing, // Same default as tween()
      ) : DurationBasedAnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedDurationBasedAnimationSpec<V> =
              VectorizedKeyframesSpec(
                  timestamps = intListOf(0, durationMillis),
                  keyframes = emptyIntObjectMap(),
                  durationMillis = durationMillis,
                  delayMillis = delayMillis,
                  defaultEasing = easing,
                  initialArcMode = mode,
              )

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ArcAnimationSpec<*>) return false

              if (mode != other.mode) return false
              if (durationMillis != other.durationMillis) return false
              if (delayMillis != other.delayMillis) return false
              return easing == other.easing
          }

          override fun hashCode(): Int {
              var result = mode.hashCode()
              result = 31 * result + durationMillis
              result = 31 * result + delayMillis
              result = 31 * result + easing.hashCode()
              return result
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 281
    endLine: 315
    sha256: ad449dcaa2a9bfaee7a47a0c4420fe1650e43448e8b34713ea5577bdf80b21c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      /**
       * This class defines the two types of [StartOffset]: [StartOffsetType.Delay] and
       * [StartOffsetType.FastForward]. [StartOffsetType.Delay] delays the start of the animation, whereas
       * [StartOffsetType.FastForward] starts the animation right away from a given play time in the
       * animation.
       *
       * @see repeatable
       * @see infiniteRepeatable
       * @see StartOffset
       */
      @kotlin.jvm.JvmInline
      public value class StartOffsetType private constructor(internal val value: Int) {
          public companion object {
              /** Delays the start of the animation. */
              public val Delay: StartOffsetType
                  get() = StartOffsetType(-1)

              /** Fast forwards the animation to a given play time, and starts it immediately. */
              public val FastForward: StartOffsetType
                  get() = StartOffsetType(1)
          }
      }

      /**
       * This class defines a start offset for [repeatable] and [infiniteRepeatable]. There are two types
       * of start offsets: [StartOffsetType.Delay] and [StartOffsetType.FastForward].
       * [StartOffsetType.Delay] delays the start of the animation, whereas [StartOffsetType.FastForward]
       * fast forwards the animation to a given play time and starts it right away.
       *
       * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
       */
      // This is an inline of Long so that when adding a StartOffset param to the end of constructor
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 316
    endLine: 350
    sha256: eae74216c92d09232ddf9ba72818271b158aa64c8b1c3daa507f80a56c790cd6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      // param list, it won't be confused with/clash with the mask param generated by constructors.
      @kotlin.jvm.JvmInline
      public value class StartOffset private constructor(internal val value: Long) {
          /**
           * This creates a start offset for [repeatable] and [infiniteRepeatable]. [offsetType] can be
           * either of the following: [StartOffsetType.Delay] and [StartOffsetType.FastForward].
           * [offsetType] defaults to [StartOffsetType.Delay].
           *
           * [StartOffsetType.Delay] delays the start of the animation by [offsetMillis], whereas
           * [StartOffsetType.FastForward] starts the animation right away from [offsetMillis] in the
           * animation.
           */
          public constructor(
              offsetMillis: Int,
              offsetType: StartOffsetType = StartOffsetType.Delay,
          ) : this((offsetMillis * offsetType.value).toLong())

          /** Returns the number of milliseconds to offset the start of the animation. */
          public val offsetMillis: Int
              get() = abs(this.value.toInt())

          /** Returns the offset type of the provided [StartOffset]. */
          public val offsetType: StartOffsetType
              get() =
                  when (this.value > 0) {
                      true -> StartOffsetType.FastForward
                      false -> StartOffsetType.Delay
                  }
      }

      /**
       * [RepeatableSpec] takes another [DurationBasedAnimationSpec] and plays it [iterations] times. For
       * creating infinitely repeating animation spec, consider using [InfiniteRepeatableSpec].
       *
       * __Note__: When repeating in the [RepeatMode.Reverse] mode, it's highly recommended to have an
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 351
    endLine: 385
    sha256: 9cfa454bf06e1ba00be5672803e0e10109ac81fca41c05aff212c36819272a09
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * __odd__ number of iterations. Otherwise, the animation may jump to the end value when it finishes
       * the last iteration.
       *
       * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
       * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
       * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
       *
       * @param iterations the count of iterations. Should be at least 1.
       * @param animation the [AnimationSpec] to be repeated
       * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
       *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
       * @param initialStartOffset offsets the start of the animation
       * @see repeatable
       * @see InfiniteRepeatableSpec
       * @see infiniteRepeatable
       */
      @Immutable
      public class RepeatableSpec<T>(
          public val iterations: Int,
          public val animation: DurationBasedAnimationSpec<T>,
          public val repeatMode: RepeatMode = RepeatMode.Restart,
          public val initialStartOffset: StartOffset = StartOffset(0),
      ) : FiniteAnimationSpec<T> {

          @Deprecated(level = DeprecationLevel.HIDDEN, message = "This constructor has been deprecated")
          public constructor(
              iterations: Int,
              animation: DurationBasedAnimationSpec<T>,
              repeatMode: RepeatMode = RepeatMode.Restart,
          ) : this(iterations, animation, repeatMode, StartOffset(0))

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedFiniteAnimationSpec<V> {
              return VectorizedRepeatableSpec(
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 36
    endLine: 70
    sha256: 07d5d1c5384b1a55fbb29886512c7c8382e7fdfe1892d1142567a262e6baa2d6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      public object AnimationConstants {
          /** The default duration used in [VectorizedAnimationSpec]s and [AnimationSpec]. */
          public const val DefaultDurationMillis: Int = 300

          /** The value that is used when the animation time is not yet set. */
          public const val UnspecifiedTime: Long = Long.MIN_VALUE
      }

      /**
       * [AnimationSpec] stores the specification of an animation, including 1) the data type to be
       * animated, and 2) the animation configuration (i.e. [VectorizedAnimationSpec]) that will be used
       * once the data (of type [T]) has been converted to [AnimationVector].
       *
       * Any type [T] can be animated by the system as long as a [TwoWayConverter] is supplied to convert
       * the data type [T] from and to an [AnimationVector]. There are a number of converters available
       * out of the box. For example, to animate [androidx.compose.ui.unit.IntOffset] the system uses
       * [IntOffset.VectorConverter][IntOffset.Companion.VectorConverter] to convert the object to
       * [AnimationVector2D], so that both x and y dimensions are animated independently with separate
       * velocity tracking. This enables multidimensional objects to be animated in a true
       * multi-dimensional way. It is particularly useful for smoothly handling animation interruptions
       * (such as when the target changes during the animation).
       */
      public interface AnimationSpec<T> {
          /**
           * Creates a [VectorizedAnimationSpec] with the given [TwoWayConverter].
           *
           * The underlying animation system operates on [AnimationVector]s. [T] will be converted to
           * [AnimationVector] to animate. [VectorizedAnimationSpec] describes how the converted
           * [AnimationVector] should be animated. E.g. The animation could simply interpolate between the
           * start and end values (i.e.[TweenSpec]), or apply spring physics to produce the motion (i.e.
           * [SpringSpec]), etc)
           *
           * @param converter converts the type [T] from and to [AnimationVector] type
           */
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 386
    endLine: 420
    sha256: fd060de682de37b99b0ea9d1758ea985e1f24b3d1680b2e62df17502df3454f4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  iterations,
                  animation.vectorize(converter),
                  repeatMode,
                  initialStartOffset,
              )
          }

          override fun equals(other: Any?): Boolean =
              if (other is RepeatableSpec<*>) {
                  other.iterations == this.iterations &&
                      other.animation == this.animation &&
                      other.repeatMode == this.repeatMode &&
                      other.initialStartOffset == this.initialStartOffset
              } else {
                  false
              }

          override fun hashCode(): Int {
              return ((iterations * 31 + animation.hashCode()) * 31 + repeatMode.hashCode()) * 31 +
                  initialStartOffset.hashCode()
          }
      }

      /**
       * [InfiniteRepeatableSpec] repeats the provided [animation] infinite amount of times. It will never
       * naturally finish. This means the animation will only be stopped via some form of manual
       * cancellation. When used with transition or other animation composables, the infinite animations
       * will stop when the composable is removed from the compose tree.
       *
       * For non-infinite repeating animations, consider [RepeatableSpec].
       *
       * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
       * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
       * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
       *
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 421
    endLine: 455
    sha256: 26282f4e174ef99b1d7009165a001ac0bb7490f317aa90982e9a4d84e7691a39
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
       * @param animation the [AnimationSpec] to be repeated
       * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
       *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
       * @param initialStartOffset offsets the start of the animation
       * @see infiniteRepeatable
       */
      // TODO: Consider supporting repeating spring specs
      @OptIn(ExperimentalAnimationSpecApi::class)
      public class InfiniteRepeatableSpec<T>(
          public val animation: DurationBasedAnimationSpec<T>,
          public val repeatMode: RepeatMode = RepeatMode.Restart,
          public val initialStartOffset: StartOffset = StartOffset(0),
      ) : AnimationSpec<T> {

          @Deprecated(level = DeprecationLevel.HIDDEN, message = "This constructor has been deprecated")
          public constructor(
              animation: DurationBasedAnimationSpec<T>,
              repeatMode: RepeatMode = RepeatMode.Restart,
          ) : this(animation, repeatMode, StartOffset(0))

          init {
              // Checking if the animation has 0-duration. If so, it would result in an infinite
              // loop for infinite animations.
              val isZeroDuration =
                  when (animation) {
                      is TweenSpec -> animation.durationMillis == 0 && animation.delay == 0
                      is SnapSpec -> animation.delay == 0
                      is KeyframesSpec ->
                          animation.config.durationMillis == 0 && animation.config.delayMillis == 0
                      is KeyframesWithSplineSpec ->
                          animation.config.durationMillis == 0 && animation.config.delayMillis == 0
                      is ArcAnimationSpec -> animation.durationMillis == 0 && animation.delayMillis == 0
                      else -> false
                  }
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 456
    endLine: 490
    sha256: 1e4830a75f7a65eab39da1dc5df34421300211b9380aa3762061b889b4ee0f81
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (isZeroDuration) {
                  throw IllegalArgumentException(
                      "Animation to be infinitely repeated cannot have a" + " 0-duration"
                  )
              }
          }

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedAnimationSpec<V> {
              return VectorizedInfiniteRepeatableSpec(
                  animation.vectorize(converter),
                  repeatMode,
                  initialStartOffset,
              )
          }

          override fun equals(other: Any?): Boolean =
              if (other is InfiniteRepeatableSpec<*>) {
                  other.animation == this.animation &&
                      other.repeatMode == this.repeatMode &&
                      other.initialStartOffset == this.initialStartOffset
              } else {
                  false
              }

          override fun hashCode(): Int {
              return (animation.hashCode() * 31 + repeatMode.hashCode()) * 31 +
                  initialStartOffset.hashCode()
          }
      }

      /** Repeat mode for [RepeatableSpec] and [VectorizedRepeatableSpec]. */
      public enum class RepeatMode {
          /** [Restart] will restart the animation and animate from the start value to the end value. */
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 491
    endLine: 525
    sha256: 5361aa898082863cc7adebe4850dda6e0ac8e595fe2bbd934190bf5241c77669
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          Restart,

          /** [Reverse] will reverse the last iteration as the animation repeats. */
          Reverse,
      }

      /**
       * [SnapSpec] describes a jump-cut type of animation. It immediately snaps the animating value to
       * the end value.
       *
       * @param delay the amount of time (in milliseconds) that the animation should wait before it
       *   starts. Defaults to 0.
       */
      @Immutable
      public class SnapSpec<T>(public val delay: Int = 0) : DurationBasedAnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedDurationBasedAnimationSpec<V> = VectorizedSnapSpec(delay)

          override fun equals(other: Any?): Boolean =
              if (other is SnapSpec<*>) {
                  other.delay == this.delay
              } else {
                  false
              }

          override fun hashCode(): Int {
              return delay
          }
      }

      /** Shared configuration class used as DSL for keyframe based animations. */
      public sealed class KeyframesSpecBaseConfig<T, E : KeyframeBaseEntity<T>> {
          /**
           * Duration of the animation in milliseconds. The minimum is `0` and defaults to
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 526
    endLine: 560
    sha256: b0e0d8f8edaa6ffdb53266ef19eabfb2fe9a88c8e7cc85a20cf3ea0258b3bccd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [DefaultDurationMillis]
           */
          @get:IntRange(from = 0L)
          @setparam:IntRange(from = 0L)
          public var durationMillis: Int = DefaultDurationMillis

          /**
           * The amount of time that the animation should be delayed. The minimum is `0` and defaults
           * to 0.
           */
          @get:IntRange(from = 0L) @setparam:IntRange(from = 0L) public var delayMillis: Int = 0

          internal val keyframes = mutableIntObjectMapOf<E>()

          /** Method used to delegate instantiation of [E] to implementing classes. */
          internal abstract fun createEntityFor(value: T): E

          /**
           * Adds a keyframe so that animation value will be [this] at time: [timeStamp]. For example:
           *
           * @sample androidx.compose.animation.core.samples.floatAtSample
           * @param timeStamp The time in the during when animation should reach value: [this], with a
           *   minimum value of `0`.
           * @return an instance of [E] so a custom [Easing] can be added by the [using] method.
           */
          // needed as `open` to guarantee binary compatibility in KeyframesSpecConfig
          public open infix fun T.at(@IntRange(from = 0) timeStamp: Int): E {
              val entity = createEntityFor(this)
              keyframes[timeStamp] = entity
              return entity
          }

          /**
           * Adds a keyframe so that the animation value will be the value specified at a fraction of the
           * total [durationMillis] set. It's recommended that you always set [durationMillis] before
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 561
    endLine: 595
    sha256: 1c1aa641beb834c1e703b553c8dd6e2a632839c6d3cb7aa5e87d07badfc0eaa6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * calling [atFraction]. For example:
           *
           * @sample androidx.compose.animation.core.samples.floatAtFractionSample
           * @param fraction The fraction when the animation should reach specified value.
           * @return an instance of [E] so a custom [Easing] can be added by the [using] method
           */
          // needed as `open` to guarantee binary compatibility in KeyframesSpecConfig
          public open infix fun T.atFraction(@FloatRange(from = 0.0, to = 1.0) fraction: Float): E {
              return at((durationMillis * fraction).fastRoundToInt())
          }

          /**
           * Adds an [Easing] for the interval started with the just provided timestamp. For example: 0f
           * at 50 using LinearEasing
           *
           * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
           * @param easing [Easing] to be used for the next interval.
           * @return the same [E] instance so that other implementations can expand on the builder pattern
           */
          public infix fun E.using(easing: Easing): E {
              this.easing = easing
              return this
          }
      }

      /** Base holder class for building a keyframes animation. */
      public sealed class KeyframeBaseEntity<T>(internal val value: T, internal var easing: Easing) {
          internal fun <V : AnimationVector> toPair(convertToVector: (T) -> V) =
              convertToVector.invoke(value) to easing
      }

      /**
       * [KeyframesSpec] creates a [VectorizedKeyframesSpec] animation.
       *
       * [VectorizedKeyframesSpec] animates based on the values defined at different timestamps in the
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 596
    endLine: 630
    sha256: d78082d5a29451a1a4ffa9b0d0d822d2987d4d02467127b23069fe1cd23c12a7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * duration of the animation (i.e. different keyframes). Each keyframe can be defined using
       * [KeyframesSpecConfig.at]. [VectorizedKeyframesSpec] allows very specific animation definitions
       * with a precision to millisecond.
       *
       * @sample androidx.compose.animation.core.samples.FloatKeyframesBuilder
       *
       * For each interval, you may provide a custom [Easing] by use of the [KeyframesSpecConfig.using]
       * function.
       *
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
       *
       * By default, values are animated linearly from one interval to the next (similar to [tween]),
       * however for 2-dimensional values you may animate them using arcs of quarter of an Ellipse with
       * [KeyframesSpecConfig.using] and [ArcMode]:
       *
       * @sample androidx.compose.animation.core.samples.OffsetKeyframesWithArcsBuilder
       *
       * If instead, you wish to have a smooth curvy animation across all intervals, consider using
       * [KeyframesWithSplineSpec].
       */
      @Immutable
      public class KeyframesSpec<T>(public val config: KeyframesSpecConfig<T>) :
          DurationBasedAnimationSpec<T> {

          /**
           * [KeyframesSpecConfig] stores a mutable configuration of the key frames, including
           * [durationMillis], [delayMillis], and all the key frames. Each key frame defines what the
           * animation value should be at a particular time. Once the key frames are fully configured, the
           * [KeyframesSpecConfig] can be used to create a [KeyframesSpec].
           *
           * @sample androidx.compose.animation.core.samples.KeyframesBuilderForPosition
           * @see keyframes
           */
          public class KeyframesSpecConfig<T> : KeyframesSpecBaseConfig<T, KeyframeEntity<T>>() {
              @OptIn(ExperimentalAnimationSpecApi::class)
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 631
    endLine: 665
    sha256: 6e48907e64d5d32c397d629ace02a39296a092329823de1e514ad368deeec302
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              override fun createEntityFor(value: T): KeyframeEntity<T> = KeyframeEntity(value)

              /**
               * Adds a keyframe so that animation value will be [this] at time: [timeStamp]. For example:
               * 0.8f at 150 // ms
               *
               * @param timeStamp The time in the during when animation should reach value: [this], with a
               *   minimum value of `0`.
               * @return an [KeyframeEntity] so a custom [Easing] can be added by [with] method.
               */
              // TODO: Need a IntRange equivalent annotation
              // overrides `at` for binary compatibility. It should explicitly return KeyframeEntity.
              override infix fun T.at(@IntRange(from = 0) timeStamp: Int): KeyframeEntity<T> {
                  @OptIn(ExperimentalAnimationSpecApi::class)
                  return KeyframeEntity(this).also { keyframes[timeStamp] = it }
              }

              /**
               * Adds a keyframe so that the animation value will be the value specified at a fraction of
               * the total [durationMillis] set. For example: 0.8f atFraction 0.50f // half of the overall
               * duration set
               *
               * @param fraction The fraction when the animation should reach specified value.
               * @return an [KeyframeEntity] so a custom [Easing] can be added by [with] method
               */
              // overrides `atFraction` for binary compatibility. It should explicitly return
              // KeyframeEntity.
              override infix fun T.atFraction(
                  @FloatRange(from = 0.0, to = 1.0) fraction: Float
              ): KeyframeEntity<T> {
                  return at((durationMillis * fraction).fastRoundToInt())
              }

              /**
               * Adds an [Easing] for the interval started with the just provided timestamp. For example:
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 666
    endLine: 700
    sha256: f8ed76c01bc96093633cd9510ec7bb4322ac5f302e8c279d6bd5a3e1b5a4b19f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * 0f at 50 with LinearEasing
               *
               * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
               * @param easing [Easing] to be used for the next interval.
               * @return the same [KeyframeEntity] instance so that other implementations can expand on
               *   the builder pattern
               */
              @Deprecated(
                  message =
                      "Use version that returns an instance of the entity so it can be re-used" +
                          " in other keyframe builders.",
                  replaceWith = ReplaceWith("this using easing"), // Expected usage pattern
              )
              public infix fun KeyframeEntity<T>.with(easing: Easing) {
                  this.easing = easing
              }

              /**
               * [ArcMode] applied from this keyframe to the next.
               *
               * Note that arc modes are meant for objects with even dimensions (such as [Offset] and its
               * variants). Where each value pair is animated as an arc. So, if the object has odd
               * dimensions the last value will always animate linearly.
               *
               * &nbsp;
               *
               * The order of each value in an object with multiple dimensions is given by the applied
               * vector converter in [KeyframesSpec.vectorize].
               *
               * E.g.: [RectToVector] assigns its values as `[left, top, right, bottom]` so the pairs of
               * dimensions animated as arcs are: `[left, top]` and `[right, bottom]`.
               */
              public infix fun KeyframeEntity<T>.using(arcMode: ArcMode): KeyframeEntity<T> {
                  this.arcMode = arcMode
                  return this
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 701
    endLine: 735
    sha256: d24d113dd70c7361bcb6d87c1232f6a5b1549630b49fedf5ea92cae5c126b027
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          }

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedKeyframesSpec<V> {
              // Max capacity is +2 to account for when the start/end timestamps are not included
              val timestamps = MutableIntList(config.keyframes.size + 2)
              val timeToInfoMap =
                  MutableIntObjectMap<VectorizedKeyframeSpecElementInfo<V>>(config.keyframes.size)
              config.keyframes.forEach { key, value ->
                  timestamps.add(key)
                  timeToInfoMap[key] =
                      VectorizedKeyframeSpecElementInfo(
                          vectorValue = converter.convertToVector(value.value),
                          easing = value.easing,
                          arcMode = value.arcMode,
                      )
              }

              if (!config.keyframes.contains(0)) {
                  timestamps.add(0, 0)
              }
              if (!config.keyframes.contains(config.durationMillis)) {
                  timestamps.add(config.durationMillis)
              }
              timestamps.sort()

              return VectorizedKeyframesSpec(
                  timestamps = timestamps,
                  keyframes = timeToInfoMap,
                  durationMillis = config.durationMillis,
                  delayMillis = config.delayMillis,
                  defaultEasing = LinearEasing,
                  initialArcMode = ArcLinear,
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 71
    endLine: 105
    sha256: bbecd8ebc5d998ba6b76da067742487a519fa8cd3e9040a674adc01944617bb4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedAnimationSpec<V>
      }

      /**
       * [FiniteAnimationSpec] is the interface that all non-infinite [AnimationSpec]s implement,
       * including: [TweenSpec], [SpringSpec], [KeyframesSpec], [RepeatableSpec], [SnapSpec], etc. By
       * definition, [InfiniteRepeatableSpec] __does not__ implement this interface.
       *
       * @see [InfiniteRepeatableSpec]
       */
      public interface FiniteAnimationSpec<T> : AnimationSpec<T> {
          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedFiniteAnimationSpec<V>
      }

      /**
       * Creates a TweenSpec configured with the given duration, delay, and easing curve.
       *
       * @param durationMillis duration of the [VectorizedTweenSpec] animation.
       * @param delay the number of milliseconds the animation waits before starting, 0 by default.
       * @param easing the easing curve used by the animation. [FastOutSlowInEasing] by default.
       */
      @Immutable
      public class TweenSpec<T>(
          public val durationMillis: Int = DefaultDurationMillis,
          public val delay: Int = 0,
          public val easing: Easing = FastOutSlowInEasing,
      ) : DurationBasedAnimationSpec<T> {

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedTweenSpec<V> = VectorizedTweenSpec<V>(durationMillis, delay, easing)
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 736
    endLine: 770
    sha256: 5c40de65a9e48b18e4a9cbd224ef2d7e6768a0232e0189805f52e6e2a5e73ed2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
          }

          /** Holder class for building a keyframes animation. */
          public class KeyframeEntity<T>
          internal constructor(
              value: T,
              easing: Easing = LinearEasing,
              internal var arcMode: ArcMode = ArcMode.ArcLinear,
          ) : KeyframeBaseEntity<T>(value = value, easing = easing) {

              override fun equals(other: Any?): Boolean {
                  if (other === this) return true
                  if (other !is KeyframeEntity<*>) return false

                  return other.value == value && other.easing == easing && other.arcMode == arcMode
              }

              override fun hashCode(): Int {
                  var result = value?.hashCode() ?: 0
                  result = 31 * result + arcMode.hashCode()
                  result = 31 * result + easing.hashCode()
                  return result
              }
          }
      }

      /**
       * [KeyframesWithSplineSpec] creates a keyframe based [DurationBasedAnimationSpec] using the
       * Monotone cubic Hermite spline to interpolate between the values in [config].
       *
       * [KeyframesWithSplineSpec] may be used to animate any n-dimensional values, but you'll likely use
       * it most to animate positional 2D values such as [Offset]. For example:
       *
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForOffsetWithSplines
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 771
    endLine: 805
    sha256: 6b70521683c0a23206418ff8ab667b049e4645aa9d4d0d836b9c0eb5a6436849
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * You may also provide a [periodicBias] value (between 0f and 1f) to make a periodic spline.
       * Periodic splines adjust the initial and final velocity to be the same. This is useful to create
       * smooth repeatable animations. Such as an infinite pulsating animation:
       *
       * @sample androidx.compose.animation.core.samples.PeriodicKeyframesWithSplines
       *
       * The [periodicBias] value (from 0.0 to 1.0) indicates how much of the original starting and final
       * velocity are modified to achieve periodicity:
       * - 0f: Modifies only the starting velocity to match the final velocity
       * - 1f: Modifies only the final velocity to match the starting velocity
       * - 0.5f: Modifies both velocities equally, picking the average between the two
       *
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForIntOffsetWithSplines
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForDpOffsetWithSplines
       * @see keyframesWithSpline
       */
      @Immutable
      public class KeyframesWithSplineSpec<T>(public val config: KeyframesWithSplineSpecConfig<T>) :
          DurationBasedAnimationSpec<T> {

          // Periodic bias property, NaN by default. Only meant to be set by secondary constructor
          private var periodicBias: Float = Float.NaN

          /**
           * Constructor that returns a periodic spline implementation.
           *
           * @param config Keyframe configuration of the spline, should contain the set of values,
           *   timestamps and easing curves to animate through.
           * @param periodicBias A value from 0f to 1f, indicating how much the starting or ending
           *   velocities are modified respectively to achieve periodicity.
           */
          public constructor(
              config: KeyframesWithSplineSpecConfig<T>,
              @FloatRange(0.0, 1.0) periodicBias: Float,
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 806
    endLine: 840
    sha256: a4ed5ee3875aca2e88c7fd28dc2a72627f0e349d4cfa43eab483d7f886ba05fc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) : this(config) {
              this.periodicBias = periodicBias
          }

          /**
           * Keyframe configuration class for [KeyframesWithSplineSpec].
           *
           * Since [keyframesWithSpline] uses the values across all the given intervals to calculate the
           * shape of the animation, [KeyframesWithSplineSpecConfig] does not allow setting a specific
           * [ArcMode] between intervals (compared to [KeyframesSpecConfig] used for [keyframes]).
           */
          public class KeyframesWithSplineSpecConfig<T> :
              KeyframesSpecBaseConfig<T, KeyframesSpec.KeyframeEntity<T>>() {

              override fun createEntityFor(value: T): KeyframesSpec.KeyframeEntity<T> =
                  KeyframesSpec.KeyframeEntity(value)
          }

          override fun <V : AnimationVector> vectorize(
              converter: TwoWayConverter<T, V>
          ): VectorizedDurationBasedAnimationSpec<V> {
              // Allocate so that we don't resize the list even if the initial/last timestamps are missing
              val keyframes = config.keyframes
              val timestamps = MutableIntList(keyframes.size + 2)
              val timeToVectorMap = MutableIntObjectMap<Pair<V, Easing>>(keyframes.size)
              keyframes.forEach { key, value ->
                  timestamps.add(key)
                  timeToVectorMap[key] = Pair(converter.convertToVector(value.value), value.easing)
              }
              if (!keyframes.contains(0)) {
                  timestamps.add(0, 0)
              }
              if (!keyframes.contains(config.durationMillis)) {
                  timestamps.add(config.durationMillis)
              }
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 841
    endLine: 875
    sha256: 8b99ba8897447f282cec5e4aac87814d57b7ba2530d6f8d4c6abe82257bc6820
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              timestamps.sort()
              return VectorizedMonoSplineKeyframesSpec(
                  timestamps = timestamps,
                  keyframes = timeToVectorMap,
                  durationMillis = config.durationMillis,
                  delayMillis = config.delayMillis,
                  periodicBias = periodicBias,
              )
          }
      }

      /**
       * Creates a [TweenSpec] configured with the given duration, delay and easing curve.
       *
       * @param durationMillis duration of the animation spec
       * @param delayMillis the amount of time in milliseconds that animation waits before starting
       * @param easing the easing curve that will be used to interpolate between start and end
       */
      @Stable
      public fun <T> tween(
          durationMillis: Int = DefaultDurationMillis,
          delayMillis: Int = 0,
          easing: Easing = FastOutSlowInEasing,
      ): TweenSpec<T> = TweenSpec(durationMillis, delayMillis, easing)

      /**
       * Creates a [SpringSpec] that uses the given spring constants (i.e. [dampingRatio] and [stiffness].
       * The optional [visibilityThreshold] defines when the animation should be considered to be visually
       * close enough to round off to its target.
       *
       * @param dampingRatio damping ratio of the spring. [Spring.DampingRatioNoBouncy] by default.
       * @param stiffness stiffness of the spring. [Spring.StiffnessMedium] by default.
       * @param visibilityThreshold optionally specifies the visibility threshold.
       */
      @Stable
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 876
    endLine: 910
    sha256: ba27279db5178e698d8dc1e3e68157ac060c1d23da25a4aeeac896cd7054da5c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun <T> spring(
          dampingRatio: Float = Spring.DampingRatioNoBouncy,
          stiffness: Float = Spring.StiffnessMedium,
          visibilityThreshold: T? = null,
      ): SpringSpec<T> = SpringSpec(dampingRatio, stiffness, visibilityThreshold)

      /**
       * Creates a [KeyframesSpec] animation, initialized with [init]. For example:
       *
       * @sample androidx.compose.animation.core.samples.FloatKeyframesBuilderInline
       *
       * Keyframes can also be associated with a particular [Easing] function:
       *
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
       *
       * Values can be animated using arcs of quarter of an Ellipse with [KeyframesSpecConfig.using] and
       * [ArcMode]:
       *
       * @sample androidx.compose.animation.core.samples.OffsetKeyframesWithArcsBuilder
       *
       * For a smooth, curvy animation across all the intervals in the keyframes, consider using
       * [keyframesWithSpline] instead.
       *
       * @param init Initialization function for the [KeyframesSpec] animation
       * @see KeyframesSpec.KeyframesSpecConfig
       */
      @Stable
      public fun <T> keyframes(init: KeyframesSpecConfig<T>.() -> Unit): KeyframesSpec<T> {
          return KeyframesSpec(KeyframesSpecConfig<T>().apply(init))
      }

      /**
       * Creates a [KeyframesWithSplineSpec] animation, initialized with [init].
       *
       * For more details on implementation, see [KeyframesWithSplineSpec].
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 911
    endLine: 945
    sha256: 50badbeb89aebda9d0c21697d5452c47b7967cbe23faf85567660e05ad24356f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * Use overload that takes a [Float] parameter to use periodic splines.
       *
       * Example:
       *
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForOffsetWithSplines
       * @param init Initialization function for the [KeyframesWithSplineSpec] animation
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForIntOffsetWithSplines
       * @sample androidx.compose.animation.core.samples.KeyframesBuilderForDpOffsetWithSplines
       * @see KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig
       */
      public fun <T> keyframesWithSpline(
          init: KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>.() -> Unit
      ): KeyframesWithSplineSpec<T> =
          KeyframesWithSplineSpec(
              config = KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>().apply(init)
          )

      /**
       * Creates a *periodic* [KeyframesWithSplineSpec] animation, initialized with [init].
       *
       * Use overload without [periodicBias] parameter for the non-periodic implementation.
       *
       * A periodic spline is one such that the starting and ending velocities are equal. This makes them
       * useful to create smooth repeatable animations. Such as an infinite pulsating animation:
       *
       * @sample androidx.compose.animation.core.samples.PeriodicKeyframesWithSplines
       *
       * The [periodicBias] value (from 0.0 to 1.0) indicates how much of the original starting and final
       * velocity are modified to achieve periodicity:
       * - 0f: Modifies only the starting velocity to match the final velocity
       * - 1f: Modifies only the final velocity to match the starting velocity
       * - 0.5f: Modifies both velocities equally, picking the average between the two
       *
       * @param periodicBias A value from 0f to 1f, indicating how much the starting or ending velocities
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 946
    endLine: 980
    sha256: 1d9d77cc8401b1ef34fb9bf20a5ea6ece40e90072ef5aca55749b7c266a44181
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   are modified respectively to achieve periodicity.
       * @param init Initialization function for the [KeyframesWithSplineSpec] animation
       * @see KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig
       */
      public fun <T> keyframesWithSpline(
          @FloatRange(0.0, 1.0) periodicBias: Float,
          init: KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>.() -> Unit,
      ): KeyframesWithSplineSpec<T> =
          KeyframesWithSplineSpec(
              config = KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>().apply(init),
              periodicBias = periodicBias,
          )

      /**
       * Creates a [RepeatableSpec] that plays a [DurationBasedAnimationSpec] (e.g. [TweenSpec],
       * [KeyframesSpec]) the amount of iterations specified by [iterations].
       *
       * The iteration count describes the amount of times the animation will run. 1 means no repeat.
       * Recommend [infiniteRepeatable] for creating an infinity repeating animation.
       *
       * __Note__: When repeating in the [RepeatMode.Reverse] mode, it's highly recommended to have an
       * __odd__ number of iterations. Otherwise, the animation may jump to the end value when it finishes
       * the last iteration.
       *
       * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
       * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
       * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
       *
       * @param iterations the total count of iterations, should be greater than 1 to repeat.
       * @param animation animation that will be repeated
       * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
       *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
       * @param initialStartOffset offsets the start of the animation
       */
      @Stable
  - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt
    startLine: 981
    endLine: 1015
    sha256: 3521df6142274113389114478aee25ee3d9cd836051c6c2b09afa16a0fb13fb4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public fun <T> repeatable(
          iterations: Int,
          animation: DurationBasedAnimationSpec<T>,
          repeatMode: RepeatMode = RepeatMode.Restart,
          initialStartOffset: StartOffset = StartOffset(0),
      ): RepeatableSpec<T> = RepeatableSpec(iterations, animation, repeatMode, initialStartOffset)

      @Stable
      @Deprecated(
          level = DeprecationLevel.HIDDEN,
          message =
              "This method has been deprecated in favor of the repeatable function that accepts" +
                  " start offset.",
      )
      public fun <T> repeatable(
          iterations: Int,
          animation: DurationBasedAnimationSpec<T>,
          repeatMode: RepeatMode = RepeatMode.Restart,
      ): RepeatableSpec<T> = RepeatableSpec(iterations, animation, repeatMode, StartOffset(0))

      /**
       * Creates a [InfiniteRepeatableSpec] that plays a [DurationBasedAnimationSpec] (e.g. [TweenSpec],
       * [KeyframesSpec]) infinite amount of iterations.
       *
       * For non-infinitely repeating animations, consider [repeatable].
       *
       * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
       * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
       * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
       *
       * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
       * @param animation animation that will be repeated
       * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
       *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
       * @param initialStartOffset offsets the start of the animation
compose:
  id: live-androidx-animation-animation-core-animation-core-animationspec
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1016
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.SnapSpec
        - androidx.compose.animation.core.repeatable
        - androidx.compose.animation.core.infiniteRepeatable
        - androidx.compose.animation.core.snap
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-1016-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1051
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 1051–1085)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-1051-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-106
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 106–140)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.FiniteAnimationSpec
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.InterruptionAwareAnimationSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.SnapSpec
        - androidx.compose.animation.core.KeyframesSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1086
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 1086–1120)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-1086-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-1121
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 1121–1140)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-1121-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-141
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.FiniteAnimationSpec
        - androidx.compose.animation.core.InterruptionAwareAnimationSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.spring
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-176
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 176–210)
      aliases:
        - androidx.compose.animation.core.FiniteAnimationSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.spring
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-211
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.ArcAnimationSpec
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-246
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 246–280)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.ArcAnimationSpec
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-281
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 281–315)
      aliases:
        - androidx.compose.animation.core.StartOffsetType
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.repeatable
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-316
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 316–350)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.StartOffsetType
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.repeatable
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-351
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 351–385)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.FiniteAnimationSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.repeatable
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-36
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.AnimationConstants
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.spring
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-386
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 386–420)
      aliases:
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-386-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-421
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 421–455)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.ArcAnimationSpec
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.SnapSpec
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.spring
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-421-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-456
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 456–490)
      aliases:
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-456-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-491
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 491–525)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.SnapSpec
        - androidx.compose.animation.core.KeyframesSpecBaseConfig
        - androidx.compose.animation.core.KeyframeBaseEntity
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-491-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-526
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 526–560)
      aliases:
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-526-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-561
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 561–595)
      aliases:
        - androidx.compose.animation.core.KeyframeBaseEntity
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-561-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-596
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 596–630)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.KeyframesSpecBaseConfig
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-596-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-631
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 631–665)
      aliases:
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-631-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-666
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 666–700)
      aliases:
        - androidx.compose.animation.core.KeyframesSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-666-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-701
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 701–735)
      aliases:
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-701-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-71
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 71–105)
      aliases:
        - androidx.compose.animation.core.AnimationSpec
        - androidx.compose.animation.core.FiniteAnimationSpec
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.SnapSpec
        - androidx.compose.animation.core.KeyframesSpec
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-71-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-736
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 736–770)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.KeyframeBaseEntity
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-736-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-771
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 771–805)
      aliases:
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.keyframesWithSpline
        - androidx.compose.animation.core.repeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-771-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-806
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 806–840)
      aliases:
        - androidx.compose.animation.core.KeyframesSpecBaseConfig
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.keyframes
        - androidx.compose.animation.core.keyframesWithSpline
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-806-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-841
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 841–875)
      aliases:
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.tween
        - androidx.compose.animation.core.spring
        - androidx.compose.animation.core.keyframes
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-841-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-876
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 876–910)
      aliases:
        - androidx.compose.animation.core.SpringSpec
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.spring
        - androidx.compose.animation.core.keyframes
        - androidx.compose.animation.core.keyframesWithSpline
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-876-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-911
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 911–945)
      aliases:
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.keyframesWithSpline
        - androidx.compose.animation.core.repeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-911-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-946
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 946–980)
      aliases:
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.KeyframesWithSplineSpec
        - androidx.compose.animation.core.keyframesWithSpline
        - androidx.compose.animation.core.infiniteRepeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-946-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animationspec-lines-981
      title: androidx.compose.animation.core AnimationSpec.kt source (lines 981–1015)
      aliases:
        - androidx.compose.animation.core.TweenSpec
        - androidx.compose.animation.core.DurationBasedAnimationSpec
        - androidx.compose.animation.core.StartOffset
        - androidx.compose.animation.core.RepeatableSpec
        - androidx.compose.animation.core.InfiniteRepeatableSpec
        - androidx.compose.animation.core.RepeatMode
        - androidx.compose.animation.core.KeyframesSpec
        - androidx.compose.animation.core.repeatable
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animationspec-lines-981-source
      relatedIds: []
---

# androidx.compose.animation.core AnimationSpec.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt

## androidx.compose.animation.core AnimationSpec.kt source (lines 1–35)

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

import androidx.annotation.FloatRange
import androidx.annotation.IntRange
import androidx.collection.MutableIntList
import androidx.collection.MutableIntObjectMap
import androidx.collection.emptyIntObjectMap
import androidx.collection.intListOf
import androidx.collection.mutableIntObjectMapOf
import androidx.compose.animation.core.AnimationConstants.DefaultDurationMillis
import androidx.compose.animation.core.ArcMode.Companion.ArcBelow
import androidx.compose.animation.core.ArcMode.Companion.ArcLinear
import androidx.compose.animation.core.KeyframesSpec.KeyframesSpecConfig
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.util.fastRoundToInt
import kotlin.math.abs

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 1016–1050)

 */
@Stable
public fun <T> infiniteRepeatable(
    animation: DurationBasedAnimationSpec<T>,
    repeatMode: RepeatMode = RepeatMode.Restart,
    initialStartOffset: StartOffset = StartOffset(0),
): InfiniteRepeatableSpec<T> = InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset)

@Stable
@Deprecated(
    level = DeprecationLevel.HIDDEN,
    message =
        "This method has been deprecated in favor of the infinite repeatable function that" +
            " accepts start offset.",
)
public fun <T> infiniteRepeatable(
    animation: DurationBasedAnimationSpec<T>,
    repeatMode: RepeatMode = RepeatMode.Restart,
): InfiniteRepeatableSpec<T> = InfiniteRepeatableSpec(animation, repeatMode, StartOffset(0))

/**
 * Creates a Snap animation for immediately switching the animating value to the end value.
 *
 * @param delayMillis the number of milliseconds to wait before the animation runs. 0 by default.
 */
@Stable public fun <T> snap(delayMillis: Int = 0): SnapSpec<T> = SnapSpec<T>(delayMillis)

/**
 * Returns an [AnimationSpec] that is the same as [animationSpec] with a delay of [startDelayNanos].
 */
@Stable
internal fun <T> delayed(animationSpec: AnimationSpec<T>, startDelayNanos: Long): AnimationSpec<T> =
    StartDelayAnimationSpec(animationSpec, startDelayNanos)

/**

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 1051–1085)

 * A [VectorizedAnimationSpec] that wraps [vectorizedAnimationSpec], giving it a start delay of
 * [startDelayNanos].
 */
@Immutable
private class StartDelayVectorizedAnimationSpec<V : AnimationVector>(
    val vectorizedAnimationSpec: VectorizedAnimationSpec<V>,
    val startDelayNanos: Long,
) : VectorizedAnimationSpec<V> {
    override val isInfinite: Boolean
        get() = vectorizedAnimationSpec.isInfinite

    override fun getDurationNanos(initialValue: V, targetValue: V, initialVelocity: V): Long =
        vectorizedAnimationSpec.getDurationNanos(
            initialValue = initialValue,
            targetValue = targetValue,
            initialVelocity = initialVelocity,
        ) + startDelayNanos

    override fun getVelocityFromNanos(
        playTimeNanos: Long,
        initialValue: V,
        targetValue: V,
        initialVelocity: V,
    ): V =
        if (playTimeNanos < startDelayNanos) {
            initialVelocity
        } else {
            vectorizedAnimationSpec.getVelocityFromNanos(
                playTimeNanos = playTimeNanos - startDelayNanos,
                initialValue = initialValue,
                targetValue = targetValue,
                initialVelocity = initialVelocity,
            )
        }


Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 106–140)


    override fun equals(other: Any?): Boolean =
        if (other is TweenSpec<*>) {
            other.durationMillis == this.durationMillis &&
                other.delay == this.delay &&
                other.easing == this.easing
        } else {
            false
        }

    override fun hashCode(): Int {
        return (durationMillis * 31 + easing.hashCode()) * 31 + delay
    }
}

/**
 * This describes [AnimationSpec]s that are based on a fixed duration, such as [KeyframesSpec],
 * [TweenSpec], and [SnapSpec]. These duration based specs can repeated when put into a
 * [RepeatableSpec].
 */
public interface DurationBasedAnimationSpec<T> : FiniteAnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedDurationBasedAnimationSpec<V>
}

/**
 * A [FiniteAnimationSpec] that uses [animationSpec] for uninterrupted animations and switches to
 * [interruptionSpec] when a [Transition], [animateValueAsState], or [Animatable.animateTo]
 * animation is interrupted mid-flight.
 *
 * When a [Transition] is interrupted mid-flight, most [FiniteAnimationSpec] implementations (such
 * as [TweenSpec] or [KeyframesSpec], which ignore initial velocity) fall back to a default
 * [SpringSpec] to avoid abrupt velocity discontinuities. Wrapping a spec in
 * [InterruptionAwareAnimationSpec] overrides this fallback so [Transition] instead uses

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 1086–1120)

    override fun getValueFromNanos(
        playTimeNanos: Long,
        initialValue: V,
        targetValue: V,
        initialVelocity: V,
    ): V =
        if (playTimeNanos < startDelayNanos) {
            initialValue
        } else {
            vectorizedAnimationSpec.getValueFromNanos(
                playTimeNanos = playTimeNanos - startDelayNanos,
                initialValue = initialValue,
                targetValue = targetValue,
                initialVelocity = initialVelocity,
            )
        }

    override fun hashCode(): Int {
        return 31 * vectorizedAnimationSpec.hashCode() + startDelayNanos.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        if (other !is StartDelayVectorizedAnimationSpec<*>) {
            return false
        }
        return other.startDelayNanos == startDelayNanos &&
            other.vectorizedAnimationSpec == vectorizedAnimationSpec
    }
}

/** An [AnimationSpec] that wraps [animationSpec], giving it a start delay of [startDelayNanos]. */
@Immutable
private class StartDelayAnimationSpec<T>(
    val animationSpec: AnimationSpec<T>,
    val startDelayNanos: Long,

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 1121–1140)

) : AnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedAnimationSpec<V> {
        val vecSpec = animationSpec.vectorize(converter)
        return StartDelayVectorizedAnimationSpec(vecSpec, startDelayNanos)
    }

    override fun hashCode(): Int {
        return 31 * animationSpec.hashCode() + startDelayNanos.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        if (other !is StartDelayAnimationSpec<*>) {
            return false
        }
        return other.startDelayNanos == startDelayNanos && other.animationSpec == animationSpec
    }
}


Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 141–175)

 * [interruptionSpec] (which defaults to [animationSpec]) and passes the current in-flight value and
 * velocity to it. Similarly, when used with [Animatable.animateTo] or `animate*AsState` APIs (such
 * as [animateFloatAsState] or [animateValueAsState]), [animationSpec] is used when starting from
 * rest and [interruptionSpec] is used when the target value changes while an animation is already
 * in-flight.
 *
 * @sample androidx.compose.animation.core.samples.InterruptionAwareAnimationSpecSample
 * @property animationSpec the [FiniteAnimationSpec] used when starting an animation from rest.
 * @property interruptionSpec the [FiniteAnimationSpec] used when an animation is interrupted
 *   mid-flight. Defaults to [animationSpec].
 * @see SpringSpec
 * @see FiniteAnimationSpec
 * @see Transition
 * @see animateValueAsState
 * @see Animatable.animateTo
 */
@Immutable
public class InterruptionAwareAnimationSpec<T>(
    public val animationSpec: FiniteAnimationSpec<T>,
    public val interruptionSpec: FiniteAnimationSpec<T> = animationSpec,
) : FiniteAnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedFiniteAnimationSpec<V> = animationSpec.vectorize(converter)

    override fun equals(other: Any?): Boolean =
        other is InterruptionAwareAnimationSpec<*> &&
            other.animationSpec == animationSpec &&
            other.interruptionSpec == interruptionSpec

    override fun hashCode(): Int = animationSpec.hashCode() * 31 + interruptionSpec.hashCode()
}

/**
 * Creates a [SpringSpec] that uses the given spring constants (i.e. [dampingRatio] and [stiffness].

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 176–210)

 * The optional [visibilityThreshold] defines when the animation should be considered to be visually
 * close enough to round off to its target.
 *
 * @param dampingRatio damping ratio of the spring. [Spring.DampingRatioNoBouncy] by default.
 * @param stiffness stiffness of the spring. [Spring.StiffnessMedium] by default.
 * @param visibilityThreshold specifies the visibility threshold
 */
// TODO: annotate damping/stiffness with FloatRange
@Immutable
public class SpringSpec<T>(
    public val dampingRatio: Float = Spring.DampingRatioNoBouncy,
    public val stiffness: Float = Spring.StiffnessMedium,
    public val visibilityThreshold: T? = null,
) : FiniteAnimationSpec<T> {

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedSpringSpec<V> =
        VectorizedSpringSpec(dampingRatio, stiffness, converter.convert(visibilityThreshold))

    override fun equals(other: Any?): Boolean =
        if (other is SpringSpec<*>) {
            other.dampingRatio == this.dampingRatio &&
                other.stiffness == this.stiffness &&
                other.visibilityThreshold == this.visibilityThreshold
        } else {
            false
        }

    override fun hashCode(): Int =
        (visibilityThreshold.hashCode() * 31 + dampingRatio.hashCode()) * 31 + stiffness.hashCode()
}

private fun <T, V : AnimationVector> TwoWayConverter<T, V>.convert(data: T?): V? {
    if (data == null) {

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 211–245)

        return null
    } else {
        return convertToVector(data)
    }
}

/**
 * [DurationBasedAnimationSpec] that interpolates 2-dimensional values using arcs of quarter of an
 * Ellipse.
 *
 * To interpolate with [keyframes] use [KeyframesSpecConfig.using] with an [ArcMode].
 *
 * &nbsp;
 *
 * As such, it's recommended that [ArcAnimationSpec] is only used for positional values such as:
 * [Offset], [IntOffset] or [androidx.compose.ui.unit.DpOffset].
 *
 * &nbsp;
 *
 * The orientation of the arc is indicated by the given [mode].
 *
 * Do note, that if the target value being animated only changes in one dimension, you'll only be
 * able to get a linear curve.
 *
 * Similarly, one-dimensional values will always only interpolate on a linear curve.
 *
 * @param mode Orientation of the arc.
 * @param durationMillis Duration of the animation. [DefaultDurationMillis] by default.
 * @param delayMillis Time the animation waits before starting. 0 by default.
 * @param easing [Easing] applied on the animation curve. [FastOutSlowInEasing] by default.
 * @sample androidx.compose.animation.core.samples.OffsetArcAnimationSpec
 * @see ArcMode
 * @see keyframes
 */
@ExperimentalAnimationSpecApi

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 246–280)

@Immutable
public class ArcAnimationSpec<T>(
    public val mode: ArcMode = ArcBelow,
    public val durationMillis: Int = DefaultDurationMillis,
    public val delayMillis: Int = 0,
    public val easing: Easing = FastOutSlowInEasing, // Same default as tween()
) : DurationBasedAnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedDurationBasedAnimationSpec<V> =
        VectorizedKeyframesSpec(
            timestamps = intListOf(0, durationMillis),
            keyframes = emptyIntObjectMap(),
            durationMillis = durationMillis,
            delayMillis = delayMillis,
            defaultEasing = easing,
            initialArcMode = mode,
        )

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ArcAnimationSpec<*>) return false

        if (mode != other.mode) return false
        if (durationMillis != other.durationMillis) return false
        if (delayMillis != other.delayMillis) return false
        return easing == other.easing
    }

    override fun hashCode(): Int {
        var result = mode.hashCode()
        result = 31 * result + durationMillis
        result = 31 * result + delayMillis
        result = 31 * result + easing.hashCode()
        return result

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 281–315)

    }
}

/**
 * This class defines the two types of [StartOffset]: [StartOffsetType.Delay] and
 * [StartOffsetType.FastForward]. [StartOffsetType.Delay] delays the start of the animation, whereas
 * [StartOffsetType.FastForward] starts the animation right away from a given play time in the
 * animation.
 *
 * @see repeatable
 * @see infiniteRepeatable
 * @see StartOffset
 */
@kotlin.jvm.JvmInline
public value class StartOffsetType private constructor(internal val value: Int) {
    public companion object {
        /** Delays the start of the animation. */
        public val Delay: StartOffsetType
            get() = StartOffsetType(-1)

        /** Fast forwards the animation to a given play time, and starts it immediately. */
        public val FastForward: StartOffsetType
            get() = StartOffsetType(1)
    }
}

/**
 * This class defines a start offset for [repeatable] and [infiniteRepeatable]. There are two types
 * of start offsets: [StartOffsetType.Delay] and [StartOffsetType.FastForward].
 * [StartOffsetType.Delay] delays the start of the animation, whereas [StartOffsetType.FastForward]
 * fast forwards the animation to a given play time and starts it right away.
 *
 * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
 */
// This is an inline of Long so that when adding a StartOffset param to the end of constructor

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 316–350)

// param list, it won't be confused with/clash with the mask param generated by constructors.
@kotlin.jvm.JvmInline
public value class StartOffset private constructor(internal val value: Long) {
    /**
     * This creates a start offset for [repeatable] and [infiniteRepeatable]. [offsetType] can be
     * either of the following: [StartOffsetType.Delay] and [StartOffsetType.FastForward].
     * [offsetType] defaults to [StartOffsetType.Delay].
     *
     * [StartOffsetType.Delay] delays the start of the animation by [offsetMillis], whereas
     * [StartOffsetType.FastForward] starts the animation right away from [offsetMillis] in the
     * animation.
     */
    public constructor(
        offsetMillis: Int,
        offsetType: StartOffsetType = StartOffsetType.Delay,
    ) : this((offsetMillis * offsetType.value).toLong())

    /** Returns the number of milliseconds to offset the start of the animation. */
    public val offsetMillis: Int
        get() = abs(this.value.toInt())

    /** Returns the offset type of the provided [StartOffset]. */
    public val offsetType: StartOffsetType
        get() =
            when (this.value > 0) {
                true -> StartOffsetType.FastForward
                false -> StartOffsetType.Delay
            }
}

/**
 * [RepeatableSpec] takes another [DurationBasedAnimationSpec] and plays it [iterations] times. For
 * creating infinitely repeating animation spec, consider using [InfiniteRepeatableSpec].
 *
 * __Note__: When repeating in the [RepeatMode.Reverse] mode, it's highly recommended to have an

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 351–385)

 * __odd__ number of iterations. Otherwise, the animation may jump to the end value when it finishes
 * the last iteration.
 *
 * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
 * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
 * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
 *
 * @param iterations the count of iterations. Should be at least 1.
 * @param animation the [AnimationSpec] to be repeated
 * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
 *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
 * @param initialStartOffset offsets the start of the animation
 * @see repeatable
 * @see InfiniteRepeatableSpec
 * @see infiniteRepeatable
 */
@Immutable
public class RepeatableSpec<T>(
    public val iterations: Int,
    public val animation: DurationBasedAnimationSpec<T>,
    public val repeatMode: RepeatMode = RepeatMode.Restart,
    public val initialStartOffset: StartOffset = StartOffset(0),
) : FiniteAnimationSpec<T> {

    @Deprecated(level = DeprecationLevel.HIDDEN, message = "This constructor has been deprecated")
    public constructor(
        iterations: Int,
        animation: DurationBasedAnimationSpec<T>,
        repeatMode: RepeatMode = RepeatMode.Restart,
    ) : this(iterations, animation, repeatMode, StartOffset(0))

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedFiniteAnimationSpec<V> {
        return VectorizedRepeatableSpec(

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 36–70)


public object AnimationConstants {
    /** The default duration used in [VectorizedAnimationSpec]s and [AnimationSpec]. */
    public const val DefaultDurationMillis: Int = 300

    /** The value that is used when the animation time is not yet set. */
    public const val UnspecifiedTime: Long = Long.MIN_VALUE
}

/**
 * [AnimationSpec] stores the specification of an animation, including 1) the data type to be
 * animated, and 2) the animation configuration (i.e. [VectorizedAnimationSpec]) that will be used
 * once the data (of type [T]) has been converted to [AnimationVector].
 *
 * Any type [T] can be animated by the system as long as a [TwoWayConverter] is supplied to convert
 * the data type [T] from and to an [AnimationVector]. There are a number of converters available
 * out of the box. For example, to animate [androidx.compose.ui.unit.IntOffset] the system uses
 * [IntOffset.VectorConverter][IntOffset.Companion.VectorConverter] to convert the object to
 * [AnimationVector2D], so that both x and y dimensions are animated independently with separate
 * velocity tracking. This enables multidimensional objects to be animated in a true
 * multi-dimensional way. It is particularly useful for smoothly handling animation interruptions
 * (such as when the target changes during the animation).
 */
public interface AnimationSpec<T> {
    /**
     * Creates a [VectorizedAnimationSpec] with the given [TwoWayConverter].
     *
     * The underlying animation system operates on [AnimationVector]s. [T] will be converted to
     * [AnimationVector] to animate. [VectorizedAnimationSpec] describes how the converted
     * [AnimationVector] should be animated. E.g. The animation could simply interpolate between the
     * start and end values (i.e.[TweenSpec]), or apply spring physics to produce the motion (i.e.
     * [SpringSpec]), etc)
     *
     * @param converter converts the type [T] from and to [AnimationVector] type
     */

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 386–420)

            iterations,
            animation.vectorize(converter),
            repeatMode,
            initialStartOffset,
        )
    }

    override fun equals(other: Any?): Boolean =
        if (other is RepeatableSpec<*>) {
            other.iterations == this.iterations &&
                other.animation == this.animation &&
                other.repeatMode == this.repeatMode &&
                other.initialStartOffset == this.initialStartOffset
        } else {
            false
        }

    override fun hashCode(): Int {
        return ((iterations * 31 + animation.hashCode()) * 31 + repeatMode.hashCode()) * 31 +
            initialStartOffset.hashCode()
    }
}

/**
 * [InfiniteRepeatableSpec] repeats the provided [animation] infinite amount of times. It will never
 * naturally finish. This means the animation will only be stopped via some form of manual
 * cancellation. When used with transition or other animation composables, the infinite animations
 * will stop when the composable is removed from the compose tree.
 *
 * For non-infinite repeating animations, consider [RepeatableSpec].
 *
 * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
 * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
 * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
 *

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 421–455)

 * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
 * @param animation the [AnimationSpec] to be repeated
 * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
 *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
 * @param initialStartOffset offsets the start of the animation
 * @see infiniteRepeatable
 */
// TODO: Consider supporting repeating spring specs
@OptIn(ExperimentalAnimationSpecApi::class)
public class InfiniteRepeatableSpec<T>(
    public val animation: DurationBasedAnimationSpec<T>,
    public val repeatMode: RepeatMode = RepeatMode.Restart,
    public val initialStartOffset: StartOffset = StartOffset(0),
) : AnimationSpec<T> {

    @Deprecated(level = DeprecationLevel.HIDDEN, message = "This constructor has been deprecated")
    public constructor(
        animation: DurationBasedAnimationSpec<T>,
        repeatMode: RepeatMode = RepeatMode.Restart,
    ) : this(animation, repeatMode, StartOffset(0))

    init {
        // Checking if the animation has 0-duration. If so, it would result in an infinite
        // loop for infinite animations.
        val isZeroDuration =
            when (animation) {
                is TweenSpec -> animation.durationMillis == 0 && animation.delay == 0
                is SnapSpec -> animation.delay == 0
                is KeyframesSpec ->
                    animation.config.durationMillis == 0 && animation.config.delayMillis == 0
                is KeyframesWithSplineSpec ->
                    animation.config.durationMillis == 0 && animation.config.delayMillis == 0
                is ArcAnimationSpec -> animation.durationMillis == 0 && animation.delayMillis == 0
                else -> false
            }

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 456–490)

        if (isZeroDuration) {
            throw IllegalArgumentException(
                "Animation to be infinitely repeated cannot have a" + " 0-duration"
            )
        }
    }

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedAnimationSpec<V> {
        return VectorizedInfiniteRepeatableSpec(
            animation.vectorize(converter),
            repeatMode,
            initialStartOffset,
        )
    }

    override fun equals(other: Any?): Boolean =
        if (other is InfiniteRepeatableSpec<*>) {
            other.animation == this.animation &&
                other.repeatMode == this.repeatMode &&
                other.initialStartOffset == this.initialStartOffset
        } else {
            false
        }

    override fun hashCode(): Int {
        return (animation.hashCode() * 31 + repeatMode.hashCode()) * 31 +
            initialStartOffset.hashCode()
    }
}

/** Repeat mode for [RepeatableSpec] and [VectorizedRepeatableSpec]. */
public enum class RepeatMode {
    /** [Restart] will restart the animation and animate from the start value to the end value. */

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 491–525)

    Restart,

    /** [Reverse] will reverse the last iteration as the animation repeats. */
    Reverse,
}

/**
 * [SnapSpec] describes a jump-cut type of animation. It immediately snaps the animating value to
 * the end value.
 *
 * @param delay the amount of time (in milliseconds) that the animation should wait before it
 *   starts. Defaults to 0.
 */
@Immutable
public class SnapSpec<T>(public val delay: Int = 0) : DurationBasedAnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedDurationBasedAnimationSpec<V> = VectorizedSnapSpec(delay)

    override fun equals(other: Any?): Boolean =
        if (other is SnapSpec<*>) {
            other.delay == this.delay
        } else {
            false
        }

    override fun hashCode(): Int {
        return delay
    }
}

/** Shared configuration class used as DSL for keyframe based animations. */
public sealed class KeyframesSpecBaseConfig<T, E : KeyframeBaseEntity<T>> {
    /**
     * Duration of the animation in milliseconds. The minimum is `0` and defaults to

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 526–560)

     * [DefaultDurationMillis]
     */
    @get:IntRange(from = 0L)
    @setparam:IntRange(from = 0L)
    public var durationMillis: Int = DefaultDurationMillis

    /**
     * The amount of time that the animation should be delayed. The minimum is `0` and defaults
     * to 0.
     */
    @get:IntRange(from = 0L) @setparam:IntRange(from = 0L) public var delayMillis: Int = 0

    internal val keyframes = mutableIntObjectMapOf<E>()

    /** Method used to delegate instantiation of [E] to implementing classes. */
    internal abstract fun createEntityFor(value: T): E

    /**
     * Adds a keyframe so that animation value will be [this] at time: [timeStamp]. For example:
     *
     * @sample androidx.compose.animation.core.samples.floatAtSample
     * @param timeStamp The time in the during when animation should reach value: [this], with a
     *   minimum value of `0`.
     * @return an instance of [E] so a custom [Easing] can be added by the [using] method.
     */
    // needed as `open` to guarantee binary compatibility in KeyframesSpecConfig
    public open infix fun T.at(@IntRange(from = 0) timeStamp: Int): E {
        val entity = createEntityFor(this)
        keyframes[timeStamp] = entity
        return entity
    }

    /**
     * Adds a keyframe so that the animation value will be the value specified at a fraction of the
     * total [durationMillis] set. It's recommended that you always set [durationMillis] before

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 561–595)

     * calling [atFraction]. For example:
     *
     * @sample androidx.compose.animation.core.samples.floatAtFractionSample
     * @param fraction The fraction when the animation should reach specified value.
     * @return an instance of [E] so a custom [Easing] can be added by the [using] method
     */
    // needed as `open` to guarantee binary compatibility in KeyframesSpecConfig
    public open infix fun T.atFraction(@FloatRange(from = 0.0, to = 1.0) fraction: Float): E {
        return at((durationMillis * fraction).fastRoundToInt())
    }

    /**
     * Adds an [Easing] for the interval started with the just provided timestamp. For example: 0f
     * at 50 using LinearEasing
     *
     * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
     * @param easing [Easing] to be used for the next interval.
     * @return the same [E] instance so that other implementations can expand on the builder pattern
     */
    public infix fun E.using(easing: Easing): E {
        this.easing = easing
        return this
    }
}

/** Base holder class for building a keyframes animation. */
public sealed class KeyframeBaseEntity<T>(internal val value: T, internal var easing: Easing) {
    internal fun <V : AnimationVector> toPair(convertToVector: (T) -> V) =
        convertToVector.invoke(value) to easing
}

/**
 * [KeyframesSpec] creates a [VectorizedKeyframesSpec] animation.
 *
 * [VectorizedKeyframesSpec] animates based on the values defined at different timestamps in the

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 596–630)

 * duration of the animation (i.e. different keyframes). Each keyframe can be defined using
 * [KeyframesSpecConfig.at]. [VectorizedKeyframesSpec] allows very specific animation definitions
 * with a precision to millisecond.
 *
 * @sample androidx.compose.animation.core.samples.FloatKeyframesBuilder
 *
 * For each interval, you may provide a custom [Easing] by use of the [KeyframesSpecConfig.using]
 * function.
 *
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
 *
 * By default, values are animated linearly from one interval to the next (similar to [tween]),
 * however for 2-dimensional values you may animate them using arcs of quarter of an Ellipse with
 * [KeyframesSpecConfig.using] and [ArcMode]:
 *
 * @sample androidx.compose.animation.core.samples.OffsetKeyframesWithArcsBuilder
 *
 * If instead, you wish to have a smooth curvy animation across all intervals, consider using
 * [KeyframesWithSplineSpec].
 */
@Immutable
public class KeyframesSpec<T>(public val config: KeyframesSpecConfig<T>) :
    DurationBasedAnimationSpec<T> {

    /**
     * [KeyframesSpecConfig] stores a mutable configuration of the key frames, including
     * [durationMillis], [delayMillis], and all the key frames. Each key frame defines what the
     * animation value should be at a particular time. Once the key frames are fully configured, the
     * [KeyframesSpecConfig] can be used to create a [KeyframesSpec].
     *
     * @sample androidx.compose.animation.core.samples.KeyframesBuilderForPosition
     * @see keyframes
     */
    public class KeyframesSpecConfig<T> : KeyframesSpecBaseConfig<T, KeyframeEntity<T>>() {
        @OptIn(ExperimentalAnimationSpecApi::class)

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 631–665)

        override fun createEntityFor(value: T): KeyframeEntity<T> = KeyframeEntity(value)

        /**
         * Adds a keyframe so that animation value will be [this] at time: [timeStamp]. For example:
         * 0.8f at 150 // ms
         *
         * @param timeStamp The time in the during when animation should reach value: [this], with a
         *   minimum value of `0`.
         * @return an [KeyframeEntity] so a custom [Easing] can be added by [with] method.
         */
        // TODO: Need a IntRange equivalent annotation
        // overrides `at` for binary compatibility. It should explicitly return KeyframeEntity.
        override infix fun T.at(@IntRange(from = 0) timeStamp: Int): KeyframeEntity<T> {
            @OptIn(ExperimentalAnimationSpecApi::class)
            return KeyframeEntity(this).also { keyframes[timeStamp] = it }
        }

        /**
         * Adds a keyframe so that the animation value will be the value specified at a fraction of
         * the total [durationMillis] set. For example: 0.8f atFraction 0.50f // half of the overall
         * duration set
         *
         * @param fraction The fraction when the animation should reach specified value.
         * @return an [KeyframeEntity] so a custom [Easing] can be added by [with] method
         */
        // overrides `atFraction` for binary compatibility. It should explicitly return
        // KeyframeEntity.
        override infix fun T.atFraction(
            @FloatRange(from = 0.0, to = 1.0) fraction: Float
        ): KeyframeEntity<T> {
            return at((durationMillis * fraction).fastRoundToInt())
        }

        /**
         * Adds an [Easing] for the interval started with the just provided timestamp. For example:

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 666–700)

         * 0f at 50 with LinearEasing
         *
         * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
         * @param easing [Easing] to be used for the next interval.
         * @return the same [KeyframeEntity] instance so that other implementations can expand on
         *   the builder pattern
         */
        @Deprecated(
            message =
                "Use version that returns an instance of the entity so it can be re-used" +
                    " in other keyframe builders.",
            replaceWith = ReplaceWith("this using easing"), // Expected usage pattern
        )
        public infix fun KeyframeEntity<T>.with(easing: Easing) {
            this.easing = easing
        }

        /**
         * [ArcMode] applied from this keyframe to the next.
         *
         * Note that arc modes are meant for objects with even dimensions (such as [Offset] and its
         * variants). Where each value pair is animated as an arc. So, if the object has odd
         * dimensions the last value will always animate linearly.
         *
         * &nbsp;
         *
         * The order of each value in an object with multiple dimensions is given by the applied
         * vector converter in [KeyframesSpec.vectorize].
         *
         * E.g.: [RectToVector] assigns its values as `[left, top, right, bottom]` so the pairs of
         * dimensions animated as arcs are: `[left, top]` and `[right, bottom]`.
         */
        public infix fun KeyframeEntity<T>.using(arcMode: ArcMode): KeyframeEntity<T> {
            this.arcMode = arcMode
            return this

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 701–735)

        }
    }

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedKeyframesSpec<V> {
        // Max capacity is +2 to account for when the start/end timestamps are not included
        val timestamps = MutableIntList(config.keyframes.size + 2)
        val timeToInfoMap =
            MutableIntObjectMap<VectorizedKeyframeSpecElementInfo<V>>(config.keyframes.size)
        config.keyframes.forEach { key, value ->
            timestamps.add(key)
            timeToInfoMap[key] =
                VectorizedKeyframeSpecElementInfo(
                    vectorValue = converter.convertToVector(value.value),
                    easing = value.easing,
                    arcMode = value.arcMode,
                )
        }

        if (!config.keyframes.contains(0)) {
            timestamps.add(0, 0)
        }
        if (!config.keyframes.contains(config.durationMillis)) {
            timestamps.add(config.durationMillis)
        }
        timestamps.sort()

        return VectorizedKeyframesSpec(
            timestamps = timestamps,
            keyframes = timeToInfoMap,
            durationMillis = config.durationMillis,
            delayMillis = config.delayMillis,
            defaultEasing = LinearEasing,
            initialArcMode = ArcLinear,

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 71–105)

    public fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedAnimationSpec<V>
}

/**
 * [FiniteAnimationSpec] is the interface that all non-infinite [AnimationSpec]s implement,
 * including: [TweenSpec], [SpringSpec], [KeyframesSpec], [RepeatableSpec], [SnapSpec], etc. By
 * definition, [InfiniteRepeatableSpec] __does not__ implement this interface.
 *
 * @see [InfiniteRepeatableSpec]
 */
public interface FiniteAnimationSpec<T> : AnimationSpec<T> {
    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedFiniteAnimationSpec<V>
}

/**
 * Creates a TweenSpec configured with the given duration, delay, and easing curve.
 *
 * @param durationMillis duration of the [VectorizedTweenSpec] animation.
 * @param delay the number of milliseconds the animation waits before starting, 0 by default.
 * @param easing the easing curve used by the animation. [FastOutSlowInEasing] by default.
 */
@Immutable
public class TweenSpec<T>(
    public val durationMillis: Int = DefaultDurationMillis,
    public val delay: Int = 0,
    public val easing: Easing = FastOutSlowInEasing,
) : DurationBasedAnimationSpec<T> {

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedTweenSpec<V> = VectorizedTweenSpec<V>(durationMillis, delay, easing)

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 736–770)

        )
    }

    /** Holder class for building a keyframes animation. */
    public class KeyframeEntity<T>
    internal constructor(
        value: T,
        easing: Easing = LinearEasing,
        internal var arcMode: ArcMode = ArcMode.ArcLinear,
    ) : KeyframeBaseEntity<T>(value = value, easing = easing) {

        override fun equals(other: Any?): Boolean {
            if (other === this) return true
            if (other !is KeyframeEntity<*>) return false

            return other.value == value && other.easing == easing && other.arcMode == arcMode
        }

        override fun hashCode(): Int {
            var result = value?.hashCode() ?: 0
            result = 31 * result + arcMode.hashCode()
            result = 31 * result + easing.hashCode()
            return result
        }
    }
}

/**
 * [KeyframesWithSplineSpec] creates a keyframe based [DurationBasedAnimationSpec] using the
 * Monotone cubic Hermite spline to interpolate between the values in [config].
 *
 * [KeyframesWithSplineSpec] may be used to animate any n-dimensional values, but you'll likely use
 * it most to animate positional 2D values such as [Offset]. For example:
 *
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForOffsetWithSplines

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 771–805)

 *
 * You may also provide a [periodicBias] value (between 0f and 1f) to make a periodic spline.
 * Periodic splines adjust the initial and final velocity to be the same. This is useful to create
 * smooth repeatable animations. Such as an infinite pulsating animation:
 *
 * @sample androidx.compose.animation.core.samples.PeriodicKeyframesWithSplines
 *
 * The [periodicBias] value (from 0.0 to 1.0) indicates how much of the original starting and final
 * velocity are modified to achieve periodicity:
 * - 0f: Modifies only the starting velocity to match the final velocity
 * - 1f: Modifies only the final velocity to match the starting velocity
 * - 0.5f: Modifies both velocities equally, picking the average between the two
 *
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForIntOffsetWithSplines
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForDpOffsetWithSplines
 * @see keyframesWithSpline
 */
@Immutable
public class KeyframesWithSplineSpec<T>(public val config: KeyframesWithSplineSpecConfig<T>) :
    DurationBasedAnimationSpec<T> {

    // Periodic bias property, NaN by default. Only meant to be set by secondary constructor
    private var periodicBias: Float = Float.NaN

    /**
     * Constructor that returns a periodic spline implementation.
     *
     * @param config Keyframe configuration of the spline, should contain the set of values,
     *   timestamps and easing curves to animate through.
     * @param periodicBias A value from 0f to 1f, indicating how much the starting or ending
     *   velocities are modified respectively to achieve periodicity.
     */
    public constructor(
        config: KeyframesWithSplineSpecConfig<T>,
        @FloatRange(0.0, 1.0) periodicBias: Float,

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 806–840)

    ) : this(config) {
        this.periodicBias = periodicBias
    }

    /**
     * Keyframe configuration class for [KeyframesWithSplineSpec].
     *
     * Since [keyframesWithSpline] uses the values across all the given intervals to calculate the
     * shape of the animation, [KeyframesWithSplineSpecConfig] does not allow setting a specific
     * [ArcMode] between intervals (compared to [KeyframesSpecConfig] used for [keyframes]).
     */
    public class KeyframesWithSplineSpecConfig<T> :
        KeyframesSpecBaseConfig<T, KeyframesSpec.KeyframeEntity<T>>() {

        override fun createEntityFor(value: T): KeyframesSpec.KeyframeEntity<T> =
            KeyframesSpec.KeyframeEntity(value)
    }

    override fun <V : AnimationVector> vectorize(
        converter: TwoWayConverter<T, V>
    ): VectorizedDurationBasedAnimationSpec<V> {
        // Allocate so that we don't resize the list even if the initial/last timestamps are missing
        val keyframes = config.keyframes
        val timestamps = MutableIntList(keyframes.size + 2)
        val timeToVectorMap = MutableIntObjectMap<Pair<V, Easing>>(keyframes.size)
        keyframes.forEach { key, value ->
            timestamps.add(key)
            timeToVectorMap[key] = Pair(converter.convertToVector(value.value), value.easing)
        }
        if (!keyframes.contains(0)) {
            timestamps.add(0, 0)
        }
        if (!keyframes.contains(config.durationMillis)) {
            timestamps.add(config.durationMillis)
        }

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 841–875)

        timestamps.sort()
        return VectorizedMonoSplineKeyframesSpec(
            timestamps = timestamps,
            keyframes = timeToVectorMap,
            durationMillis = config.durationMillis,
            delayMillis = config.delayMillis,
            periodicBias = periodicBias,
        )
    }
}

/**
 * Creates a [TweenSpec] configured with the given duration, delay and easing curve.
 *
 * @param durationMillis duration of the animation spec
 * @param delayMillis the amount of time in milliseconds that animation waits before starting
 * @param easing the easing curve that will be used to interpolate between start and end
 */
@Stable
public fun <T> tween(
    durationMillis: Int = DefaultDurationMillis,
    delayMillis: Int = 0,
    easing: Easing = FastOutSlowInEasing,
): TweenSpec<T> = TweenSpec(durationMillis, delayMillis, easing)

/**
 * Creates a [SpringSpec] that uses the given spring constants (i.e. [dampingRatio] and [stiffness].
 * The optional [visibilityThreshold] defines when the animation should be considered to be visually
 * close enough to round off to its target.
 *
 * @param dampingRatio damping ratio of the spring. [Spring.DampingRatioNoBouncy] by default.
 * @param stiffness stiffness of the spring. [Spring.StiffnessMedium] by default.
 * @param visibilityThreshold optionally specifies the visibility threshold.
 */
@Stable

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 876–910)

public fun <T> spring(
    dampingRatio: Float = Spring.DampingRatioNoBouncy,
    stiffness: Float = Spring.StiffnessMedium,
    visibilityThreshold: T? = null,
): SpringSpec<T> = SpringSpec(dampingRatio, stiffness, visibilityThreshold)

/**
 * Creates a [KeyframesSpec] animation, initialized with [init]. For example:
 *
 * @sample androidx.compose.animation.core.samples.FloatKeyframesBuilderInline
 *
 * Keyframes can also be associated with a particular [Easing] function:
 *
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderWithEasing
 *
 * Values can be animated using arcs of quarter of an Ellipse with [KeyframesSpecConfig.using] and
 * [ArcMode]:
 *
 * @sample androidx.compose.animation.core.samples.OffsetKeyframesWithArcsBuilder
 *
 * For a smooth, curvy animation across all the intervals in the keyframes, consider using
 * [keyframesWithSpline] instead.
 *
 * @param init Initialization function for the [KeyframesSpec] animation
 * @see KeyframesSpec.KeyframesSpecConfig
 */
@Stable
public fun <T> keyframes(init: KeyframesSpecConfig<T>.() -> Unit): KeyframesSpec<T> {
    return KeyframesSpec(KeyframesSpecConfig<T>().apply(init))
}

/**
 * Creates a [KeyframesWithSplineSpec] animation, initialized with [init].
 *
 * For more details on implementation, see [KeyframesWithSplineSpec].

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 911–945)

 *
 * Use overload that takes a [Float] parameter to use periodic splines.
 *
 * Example:
 *
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForOffsetWithSplines
 * @param init Initialization function for the [KeyframesWithSplineSpec] animation
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForIntOffsetWithSplines
 * @sample androidx.compose.animation.core.samples.KeyframesBuilderForDpOffsetWithSplines
 * @see KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig
 */
public fun <T> keyframesWithSpline(
    init: KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>.() -> Unit
): KeyframesWithSplineSpec<T> =
    KeyframesWithSplineSpec(
        config = KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>().apply(init)
    )

/**
 * Creates a *periodic* [KeyframesWithSplineSpec] animation, initialized with [init].
 *
 * Use overload without [periodicBias] parameter for the non-periodic implementation.
 *
 * A periodic spline is one such that the starting and ending velocities are equal. This makes them
 * useful to create smooth repeatable animations. Such as an infinite pulsating animation:
 *
 * @sample androidx.compose.animation.core.samples.PeriodicKeyframesWithSplines
 *
 * The [periodicBias] value (from 0.0 to 1.0) indicates how much of the original starting and final
 * velocity are modified to achieve periodicity:
 * - 0f: Modifies only the starting velocity to match the final velocity
 * - 1f: Modifies only the final velocity to match the starting velocity
 * - 0.5f: Modifies both velocities equally, picking the average between the two
 *
 * @param periodicBias A value from 0f to 1f, indicating how much the starting or ending velocities

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 946–980)

 *   are modified respectively to achieve periodicity.
 * @param init Initialization function for the [KeyframesWithSplineSpec] animation
 * @see KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig
 */
public fun <T> keyframesWithSpline(
    @FloatRange(0.0, 1.0) periodicBias: Float,
    init: KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>.() -> Unit,
): KeyframesWithSplineSpec<T> =
    KeyframesWithSplineSpec(
        config = KeyframesWithSplineSpec.KeyframesWithSplineSpecConfig<T>().apply(init),
        periodicBias = periodicBias,
    )

/**
 * Creates a [RepeatableSpec] that plays a [DurationBasedAnimationSpec] (e.g. [TweenSpec],
 * [KeyframesSpec]) the amount of iterations specified by [iterations].
 *
 * The iteration count describes the amount of times the animation will run. 1 means no repeat.
 * Recommend [infiniteRepeatable] for creating an infinity repeating animation.
 *
 * __Note__: When repeating in the [RepeatMode.Reverse] mode, it's highly recommended to have an
 * __odd__ number of iterations. Otherwise, the animation may jump to the end value when it finishes
 * the last iteration.
 *
 * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
 * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
 * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
 *
 * @param iterations the total count of iterations, should be greater than 1 to repeat.
 * @param animation animation that will be repeated
 * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
 *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
 * @param initialStartOffset offsets the start of the animation
 */
@Stable

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)

## androidx.compose.animation.core AnimationSpec.kt source (lines 981–1015)

public fun <T> repeatable(
    iterations: Int,
    animation: DurationBasedAnimationSpec<T>,
    repeatMode: RepeatMode = RepeatMode.Restart,
    initialStartOffset: StartOffset = StartOffset(0),
): RepeatableSpec<T> = RepeatableSpec(iterations, animation, repeatMode, initialStartOffset)

@Stable
@Deprecated(
    level = DeprecationLevel.HIDDEN,
    message =
        "This method has been deprecated in favor of the repeatable function that accepts" +
            " start offset.",
)
public fun <T> repeatable(
    iterations: Int,
    animation: DurationBasedAnimationSpec<T>,
    repeatMode: RepeatMode = RepeatMode.Restart,
): RepeatableSpec<T> = RepeatableSpec(iterations, animation, repeatMode, StartOffset(0))

/**
 * Creates a [InfiniteRepeatableSpec] that plays a [DurationBasedAnimationSpec] (e.g. [TweenSpec],
 * [KeyframesSpec]) infinite amount of iterations.
 *
 * For non-infinitely repeating animations, consider [repeatable].
 *
 * [initialStartOffset] can be used to either delay the start of the animation or to fast forward
 * the animation to a given play time. This start offset will **not** be repeated, whereas the delay
 * in the [animation] (if any) will be repeated. By default, the amount of offset is 0.
 *
 * @sample androidx.compose.animation.core.samples.InfiniteProgressIndicator
 * @param animation animation that will be repeated
 * @param repeatMode whether animation should repeat by starting from the beginning (i.e.
 *   [RepeatMode.Restart]) or from the end (i.e. [RepeatMode.Reverse])
 * @param initialStartOffset offsets the start of the animation

Sources: [live-androidx-animation-animation-core-animation-core-animationspec-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimationSpec.kt)
