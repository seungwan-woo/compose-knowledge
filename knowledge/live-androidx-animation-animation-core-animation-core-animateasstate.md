---
type: reference
title: androidx.compose.animation.core AnimateAsState.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 1
    endLine: 35
    sha256: ffb13d650b7afa9681560ad13e92c849037a2252346ef199c971f49e80ed52f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2026 The Android Open Source Project
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

      import androidx.compose.animation.core.tooling.AnimateValueAsStateToolingHandle
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.SideEffect
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.referentialEqualityPolicy
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberCoroutineScope
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import kotlinx.coroutines.CoroutineScope
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 106
    endLine: 140
    sha256: 26b71e9bf6bc132a486f289eea1dab7952362c2120759d1fc76251c0f35cfc47
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * parameter types such as [Float], [Color][androidx.compose.ui.graphics.Color], [Offset], etc. When
       * the provided [targetValue] is changed, the animation will run automatically. If there is already
       * an animation in-flight when [targetValue] changes, the on-going animation will adjust course to
       * animate towards the new target value.
       *
       * [animateDpAsState] returns a [State] object. The value of the state object will continuously be
       * updated by the animation until the animation finishes.
       *
       * Note, [animateDpAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * @sample androidx.compose.animation.core.samples.DpAnimationSample
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateDpAsState(
          targetValue: Dp,
          animationSpec: AnimationSpec<Dp> = dpDefaultSpring,
          label: String = "DpAnimation",
          finishedListener: ((Dp) -> Unit)? = null,
      ): State<Dp> {
          return animateValueAsState(
              targetValue,
              Dp.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 141
    endLine: 175
    sha256: 0fd5d524be26cfa04841105dd17db6a7da7695d5b0bba5516a979861f8047ec7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private val dpDefaultSpring = spring<Dp>(visibilityThreshold = Dp.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [Size]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateSizeAsState] returns a [State] object. The value of the state object will continuously be
       * updated by the animation until the animation finishes.
       *
       * Note, [animateSizeAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       *     val size: Size by animateSizeAsState(
       *         if (selected) Size(20f, 20f) else Size(10f, 10f))
       *
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateSizeAsState(
          targetValue: Size,
          animationSpec: AnimationSpec<Size> = sizeDefaultSpring,
          label: String = "SizeAnimation",
          finishedListener: ((Size) -> Unit)? = null,
      ): State<Size> {
          return animateValueAsState(
              targetValue,
              Size.VectorConverter,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 176
    endLine: 210
    sha256: ce05171201b30fb9b7b4ea749df38e4b684d1bf6e4457f88ab0d440a263782fc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val sizeDefaultSpring = spring(visibilityThreshold = Size.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [Offset]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Float],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateOffsetAsState] returns a [State] object. The value of the state object will continuously
       * be updated by the animation until the animation finishes.
       *
       * Note, [animateOffsetAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * @sample androidx.compose.animation.core.samples.AnimateOffsetSample
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateOffsetAsState(
          targetValue: Offset,
          animationSpec: AnimationSpec<Offset> = offsetDefaultSpring,
          label: String = "OffsetAnimation",
          finishedListener: ((Offset) -> Unit)? = null,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 211
    endLine: 245
    sha256: f8585a5c07820bdaebd0267cf97c545730214617e91bb6a1453c2147d5ff077c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): State<Offset> {
          return animateValueAsState(
              targetValue,
              Offset.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val offsetDefaultSpring = spring(visibilityThreshold = Offset.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [Rect]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateRectAsState] returns a [State] object. The value of the state object will continuously be
       * updated by the animation until the animation finishes.
       *
       * Note, [animateRectAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * val bounds: Rect by animateRectAsState( if (enabled) Rect(0f, 0f, 100f, 100f) else Rect(8f, 8f,
       * 80f, 80f))
       *
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 246
    endLine: 280
    sha256: 8f9da0f80a736a7a9a3d4e25274473d4e0fd7aec6e1f934229b5610c86675a75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun animateRectAsState(
          targetValue: Rect,
          animationSpec: AnimationSpec<Rect> = rectDefaultSpring,
          label: String = "RectAnimation",
          finishedListener: ((Rect) -> Unit)? = null,
      ): State<Rect> {
          return animateValueAsState(
              targetValue,
              Rect.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val rectDefaultSpring = spring(visibilityThreshold = Rect.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [Int]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateIntAsState] returns a [State] object. The value of the state object will continuously be
       * updated by the animation until the animation finishes.
       *
       * Note, [animateIntAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 281
    endLine: 315
    sha256: 0bc2a96b30cd007596c3e5e14a9068d18ad46aa98feeec50a86a146efc197bd3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateIntAsState(
          targetValue: Int,
          animationSpec: AnimationSpec<Int> = intDefaultSpring,
          label: String = "IntAnimation",
          finishedListener: ((Int) -> Unit)? = null,
      ): State<Int> {
          return animateValueAsState(
              targetValue,
              Int.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val intDefaultSpring = spring(visibilityThreshold = Int.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [IntOffset]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateIntOffsetAsState] returns a [State] object. The value of the state object will
       * continuously be updated by the animation until the animation finishes.
       *
       * Note, [animateIntOffsetAsState] cannot be canceled/stopped without removing this composable
       * function from the tree. See [Animatable] for cancelable animations.
       *
       * @sample androidx.compose.animation.core.samples.AnimateOffsetSample
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 316
    endLine: 350
    sha256: 2a43c0d5bbf708982a822f5582787137d8af1c6a01351d28f6ff2aac6a3e3d96
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateIntOffsetAsState(
          targetValue: IntOffset,
          animationSpec: AnimationSpec<IntOffset> = intOffsetDefaultSpring,
          label: String = "IntOffsetAnimation",
          finishedListener: ((IntOffset) -> Unit)? = null,
      ): State<IntOffset> {
          return animateValueAsState(
              targetValue,
              IntOffset.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val intOffsetDefaultSpring = spring(visibilityThreshold = IntOffset.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for [IntSize]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateIntSizeAsState] returns a [State] object. The value of the state object will continuously
       * be updated by the animation until the animation finishes.
       *
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 351
    endLine: 385
    sha256: 244f4b187119883ea524b6774398c1a8f8611b73980c8d0d555348fa60cb7152
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Note, [animateIntSizeAsState] cannot be canceled/stopped without removing this composable
       * function from the tree. See [Animatable] for cancelable animations.
       *
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun animateIntSizeAsState(
          targetValue: IntSize,
          animationSpec: AnimationSpec<IntSize> = intSizeDefaultSpring,
          label: String = "IntSizeAnimation",
          finishedListener: ((IntSize) -> Unit)? = null,
      ): State<IntSize> {
          return animateValueAsState(
              targetValue,
              IntSize.VectorConverter,
              animationSpec,
              label = label,
              finishedListener = finishedListener,
          )
      }

      private val intSizeDefaultSpring = spring(visibilityThreshold = IntSize.VisibilityThreshold)

      /**
       * Fire-and-forget animation function for any value. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 36
    endLine: 70
    sha256: df1269edbc8d8c892db0a1bf29249a4bfad5badff1eca57e764f4a12aa9f7583
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.launch

      private val defaultAnimation = spring<Float>()

      private const val DefaultFloatVisibilityThreshold = 0.01f

      /**
       * Fire-and-forget animation function for [Float]. This Composable function is overloaded for
       * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
       * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
       * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
       * course to animate towards the new target value.
       *
       * [animateFloatAsState] returns a [State] object. The value of the state object will continuously
       * be updated by the animation until the animation finishes.
       *
       * Note, [animateFloatAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * [visibilityThreshold] can be used to define when the animation value is considered close enough
       * to the [targetValue] to finish. By default, the [visibilityThreshold] in the [animationSpec] will
       * be respected. If a non-default [visibilityThreshold] is provided, it will override the visibility
       * threshold in the [animationSpec] if it's a [SpringSpec].
       *
       * @sample androidx.compose.animation.core.samples.AlphaAnimationSample
       * @param targetValue Target value of the animation
       * @param animationSpec The animation that will be used to change the value through time. [spring]
       *   will be used by default.
       * @param visibilityThreshold An optional threshold for deciding when the animation value is
       *   considered close enough to the targetValue.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 386
    endLine: 420
    sha256: 561c5cf758d4b4b206db570beb07b1c5fa3d2f562434bfe18fa5f2eff3b6a73e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [animateValueAsState] returns a [State] object. The value of the state object will continuously
       * be updated by the animation until the animation finishes.
       *
       * Note, [animateValueAsState] cannot be canceled/stopped without removing this composable function
       * from the tree. See [Animatable] for cancelable animations.
       *
       * @sample androidx.compose.animation.core.samples.ArbitraryValueTypeTransitionSample
       *
       *   data class MySize(val width: Dp, val height: Dp)
       *
       * @param targetValue Target value of the animation
       * @param typeConverter A [TwoWayConverter] to convert from the animation value from and to an
       *   [AnimationVector]
       * @param animationSpec The animation that will be used to change the value through time. Physics
       *   animation will be used by default.
       * @param visibilityThreshold An optional threshold to define when the animation value can be
       *   considered close enough to the targetValue to end the animation.
       * @param label An optional label to differentiate from other animations in Android Studio.
       * @param finishedListener An optional end listener to get notified when the animation is finished.
       * @return A [State] object, the value of which is updated by animation.
       */
      @Composable
      public fun <T, V : AnimationVector> animateValueAsState(
          targetValue: T,
          typeConverter: TwoWayConverter<T, V>,
          animationSpec: AnimationSpec<T> = remember { spring() },
          visibilityThreshold: T? = null,
          label: String = "ValueAnimation",
          finishedListener: ((T) -> Unit)? = null,
      ): State<T> {
          val coroutineScope = rememberCoroutineScope()
          var updating = true
          val state = remember {
              AnimateAsState(
                      targetValue,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 421
    endLine: 455
    sha256: 86318aad084806d9d8199549926b0021c1f57ad5492950d16daf36c33fe8000a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      typeConverter,
                      animationSpec,
                      visibilityThreshold,
                      label,
                      finishedListener,
                      coroutineScope,
                  )
                  .also { updating = false }
          }

          // Avoid calling state.update on initial composition.
          if (updating) {
              SideEffect {
                  state.update(
                      targetValue,
                      typeConverter,
                      animationSpec,
                      visibilityThreshold,
                      label,
                      finishedListener,
                  )
              }
          }

          return state
      }

      private class AnimateAsState<T, V : AnimationVector>(
          initialValue: T,
          typeConverter: TwoWayConverter<T, V>,
          animationSpec: AnimationSpec<T>,
          visibilityThreshold: T?,
          label: String,
          var finishedListener: ((T) -> Unit)?,
          private val coroutineScope: CoroutineScope,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 456
    endLine: 490
    sha256: 2cb5f741882d44a2cd7693b166e0c7ef18ca881bba81446d3c1e360ae40fd970
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ) : State<T>, AnimateValueAsStateToolingHandle<T, V> {
          override var animatable = Animatable(initialValue, typeConverter, visibilityThreshold, label)
          override var animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
          private var job: Job? = null

          private var valueState: State<T> by
              mutableStateOf(animatable.asState(), referentialEqualityPolicy())

          override fun setToolingOverrideState(toolingOverrideState: State<T>?) {
              this.valueState = toolingOverrideState ?: animatable.asState()
          }

          override val value: T
              get() = valueState.value

          fun update(
              target: T,
              typeConverter: TwoWayConverter<T, V>,
              animationSpec: AnimationSpec<T>,
              visibilityThreshold: T?,
              label: String,
              finishedListener: ((T) -> Unit)?,
          ) {
              var restartAnimation = false
              var isInterrupted = false
              if (animatable.typeConverter !== typeConverter || animatable.label != label) {
                  val oldAnimatable = animatable
                  isInterrupted = oldAnimatable.isRunning
                  val newAnimatable =
                      Animatable(oldAnimatable.value, typeConverter, visibilityThreshold, label)
                  animatable = newAnimatable
                  if (valueState === oldAnimatable.asState()) {
                      valueState = newAnimatable.asState()
                  }
                  restartAnimation = true
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 491
    endLine: 525
    sha256: fcfd99d9c5292625af52817774d1eb1d2fa8b97b20a43cdf25953908e2238515
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              if (target != animatable.targetValue) {
                  isInterrupted = isInterrupted || animatable.isRunning
                  restartAnimation = true
              }

              this.animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
              this.finishedListener = finishedListener

              if (restartAnimation) {
                  restartAnimation(target, this.animationSpec, isInterrupted)
              }
          }

          private fun restartAnimation(
              newTarget: T,
              animSpec: AnimationSpec<T>,
              isInterrupted: Boolean,
          ) {
              if (job != null) {
                  job?.cancel()
              }
              if (animatable.targetValue == newTarget) return

              val specToUse =
                  if (animSpec is InterruptionAwareAnimationSpec<T>) {
                      if (isInterrupted) animSpec.interruptionSpec else animSpec.animationSpec
                  } else {
                      animSpec
                  }

              job =
                  coroutineScope.launch(
                      // undispatched to allow for continuous progress when target changes every frame
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 526
    endLine: 560
    sha256: e7225cdb68012e53df676f07eee88db5abf0c4b4d6146f60ebfe6df02d09da46
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      start = CoroutineStart.UNDISPATCHED
                  ) {
                      animatable.animateTo(newTarget, specToUse)
                      finishedListener?.invoke(animatable.value)
                  }
          }

          private fun resolveAnimationSpec(
              spec: AnimationSpec<T>,
              visibilityThreshold: T?,
          ): AnimationSpec<T> = spec.run {
              if (
                  visibilityThreshold != null &&
                      this is SpringSpec &&
                      this.visibilityThreshold != visibilityThreshold
              ) {
                  spring(dampingRatio, stiffness, visibilityThreshold)
              } else {
                  this
              }
          }
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateFloatAsState(
          targetValue: Float,
          animationSpec: AnimationSpec<Float> = defaultAnimation,
          visibilityThreshold: Float = 0.01f,
          finishedListener: ((Float) -> Unit)? = null,
      ): State<Float> =
          animateFloatAsState(
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 561
    endLine: 595
    sha256: 8c796d7a5052b21d34a3a4f141dfc8a0a4f1328cbd2e6f135585bed3eb586d19
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              targetValue,
              animationSpec,
              visibilityThreshold,
              finishedListener = finishedListener,
          )

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateDpAsState(
          targetValue: Dp,
          animationSpec: AnimationSpec<Dp> = dpDefaultSpring,
          finishedListener: ((Dp) -> Unit)? = null,
      ): State<Dp> {
          return animateValueAsState(
              targetValue,
              Dp.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateSizeAsState(
          targetValue: Size,
          animationSpec: AnimationSpec<Size> = sizeDefaultSpring,
          finishedListener: ((Size) -> Unit)? = null,
      ): State<Size> {
          return animateValueAsState(
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 596
    endLine: 630
    sha256: 9af0dedec1a695341c6ccd5a7bd56d08d6f411b708df0b8e1014556b605e6212
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              targetValue,
              Size.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateOffsetAsState(
          targetValue: Offset,
          animationSpec: AnimationSpec<Offset> = offsetDefaultSpring,
          finishedListener: ((Offset) -> Unit)? = null,
      ): State<Offset> {
          return animateValueAsState(
              targetValue,
              Offset.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateRectAsState(
          targetValue: Rect,
          animationSpec: AnimationSpec<Rect> = rectDefaultSpring,
          finishedListener: ((Rect) -> Unit)? = null,
      ): State<Rect> {
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 631
    endLine: 665
    sha256: 761d2aec99f6211988bcba2cb90d86e020b0616526f9c6d20f85f4b49203795f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          return animateValueAsState(
              targetValue,
              Rect.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateIntAsState(
          targetValue: Int,
          animationSpec: AnimationSpec<Int> = intDefaultSpring,
          finishedListener: ((Int) -> Unit)? = null,
      ): State<Int> {
          return animateValueAsState(
              targetValue,
              Int.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateIntOffsetAsState(
          targetValue: IntOffset,
          animationSpec: AnimationSpec<IntOffset> = intOffsetDefaultSpring,
          finishedListener: ((IntOffset) -> Unit)? = null,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 666
    endLine: 700
    sha256: 02aadf3659e53d74a0084bab599ec4fc02850b1b913336c30e7e118332184e02
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ): State<IntOffset> {
          return animateValueAsState(
              targetValue,
              IntOffset.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun animateIntSizeAsState(
          targetValue: IntSize,
          animationSpec: AnimationSpec<IntSize> = intSizeDefaultSpring,
          finishedListener: ((IntSize) -> Unit)? = null,
      ): State<IntSize> {
          return animateValueAsState(
              targetValue,
              IntSize.VectorConverter,
              animationSpec,
              finishedListener = finishedListener,
          )
      }

      @Deprecated(
          "animate*AsState APIs now have a new label parameter added.",
          level = DeprecationLevel.HIDDEN,
      )
      @Composable
      public fun <T, V : AnimationVector> animateValueAsState(
          targetValue: T,
          typeConverter: TwoWayConverter<T, V>,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 701
    endLine: 713
    sha256: e9a7174558f0da5c33aa5d605cf8041c4591d829af87619040f7f90229dece71
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          animationSpec: AnimationSpec<T> = remember { spring() },
          visibilityThreshold: T? = null,
          finishedListener: ((T) -> Unit)? = null,
      ): State<T> =
          animateValueAsState(
              targetValue = targetValue,
              typeConverter = typeConverter,
              animationSpec = animationSpec,
              visibilityThreshold = visibilityThreshold,
              label = "ValueAnimation",
              finishedListener = finishedListener,
          )
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 71
    endLine: 105
    sha256: 3d3e33fe139c7c561150e359f727893d4740ef25f89d5d0803022903120d2a82
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      @Composable
      public fun animateFloatAsState(
          targetValue: Float,
          animationSpec: AnimationSpec<Float> = defaultAnimation,
          visibilityThreshold: Float = DefaultFloatVisibilityThreshold,
          label: String = "FloatAnimation",
          finishedListener: ((Float) -> Unit)? = null,
      ): State<Float> {
          val resolvedAnimSpec =
              if (
                  animationSpec === defaultAnimation &&
                      visibilityThreshold != DefaultFloatVisibilityThreshold
              ) {
                  remember(visibilityThreshold) { spring(visibilityThreshold = visibilityThreshold) }
              } else {
                  animationSpec
              }
          return animateValueAsState(
              targetValue,
              Float.VectorConverter,
              resolvedAnimSpec,
              /*
               * We use the default visibility threshold if it's not the default value.
               * If it's the default value, we pass null to animateValueAsState so it doesn't
               * override the visibility threshold in the animationSpec.
               */
              if (visibilityThreshold == DefaultFloatVisibilityThreshold) null else visibilityThreshold,
              label,
              finishedListener,
          )
      }

      /**
       * Fire-and-forget animation function for [Dp]. This Composable function is overloaded for different
compose:
  id: live-androidx-animation-animation-core-animation-core-animateasstate
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-1
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-106
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 106–140)
      aliases:
        - androidx.compose.animation.core.animateDpAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-141
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.animateSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-176
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 176–210)
      aliases:
        - androidx.compose.animation.core.animateOffsetAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-211
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.animateRectAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-246
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 246–280)
      aliases:
        - androidx.compose.animation.core.animateRectAsState
        - androidx.compose.animation.core.animateIntAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-281
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 281–315)
      aliases:
        - androidx.compose.animation.core.animateIntAsState
        - androidx.compose.animation.core.animateIntOffsetAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-316
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 316–350)
      aliases:
        - androidx.compose.animation.core.animateIntOffsetAsState
        - androidx.compose.animation.core.animateIntSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-351
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 351–385)
      aliases:
        - androidx.compose.animation.core.animateIntSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-36
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.animateFloatAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-386
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 386–420)
      aliases:
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-386-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-421
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-421-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-456
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-456-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-491
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-491-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-526
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 526–560)
      aliases:
        - androidx.compose.animation.core.animateFloatAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-561
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 561–595)
      aliases:
        - androidx.compose.animation.core.animateDpAsState
        - androidx.compose.animation.core.animateSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-561-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-596
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 596–630)
      aliases:
        - androidx.compose.animation.core.animateOffsetAsState
        - androidx.compose.animation.core.animateRectAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-596-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-631
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 631–665)
      aliases:
        - androidx.compose.animation.core.animateIntAsState
        - androidx.compose.animation.core.animateIntOffsetAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-666
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 666–700)
      aliases:
        - androidx.compose.animation.core.animateIntSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-701
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 701–713)
      aliases:
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-701-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-71
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 71–105)
      aliases:
        - androidx.compose.animation.core.animateFloatAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-71-source
      relatedIds: []
---

# androidx.compose.animation.core AnimateAsState.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt

## androidx.compose.animation.core AnimateAsState.kt source (lines 1–35)

/*
 * Copyright 2026 The Android Open Source Project
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

import androidx.compose.animation.core.tooling.AnimateValueAsStateToolingHandle
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.referentialEqualityPolicy
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import kotlinx.coroutines.CoroutineScope

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 106–140)

 * parameter types such as [Float], [Color][androidx.compose.ui.graphics.Color], [Offset], etc. When
 * the provided [targetValue] is changed, the animation will run automatically. If there is already
 * an animation in-flight when [targetValue] changes, the on-going animation will adjust course to
 * animate towards the new target value.
 *
 * [animateDpAsState] returns a [State] object. The value of the state object will continuously be
 * updated by the animation until the animation finishes.
 *
 * Note, [animateDpAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * @sample androidx.compose.animation.core.samples.DpAnimationSample
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateDpAsState(
    targetValue: Dp,
    animationSpec: AnimationSpec<Dp> = dpDefaultSpring,
    label: String = "DpAnimation",
    finishedListener: ((Dp) -> Unit)? = null,
): State<Dp> {
    return animateValueAsState(
        targetValue,
        Dp.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}


Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 141–175)

private val dpDefaultSpring = spring<Dp>(visibilityThreshold = Dp.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [Size]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateSizeAsState] returns a [State] object. The value of the state object will continuously be
 * updated by the animation until the animation finishes.
 *
 * Note, [animateSizeAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 *     val size: Size by animateSizeAsState(
 *         if (selected) Size(20f, 20f) else Size(10f, 10f))
 *
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateSizeAsState(
    targetValue: Size,
    animationSpec: AnimationSpec<Size> = sizeDefaultSpring,
    label: String = "SizeAnimation",
    finishedListener: ((Size) -> Unit)? = null,
): State<Size> {
    return animateValueAsState(
        targetValue,
        Size.VectorConverter,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 176–210)

        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val sizeDefaultSpring = spring(visibilityThreshold = Size.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [Offset]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Float],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateOffsetAsState] returns a [State] object. The value of the state object will continuously
 * be updated by the animation until the animation finishes.
 *
 * Note, [animateOffsetAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * @sample androidx.compose.animation.core.samples.AnimateOffsetSample
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateOffsetAsState(
    targetValue: Offset,
    animationSpec: AnimationSpec<Offset> = offsetDefaultSpring,
    label: String = "OffsetAnimation",
    finishedListener: ((Offset) -> Unit)? = null,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 211–245)

): State<Offset> {
    return animateValueAsState(
        targetValue,
        Offset.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val offsetDefaultSpring = spring(visibilityThreshold = Offset.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [Rect]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateRectAsState] returns a [State] object. The value of the state object will continuously be
 * updated by the animation until the animation finishes.
 *
 * Note, [animateRectAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * val bounds: Rect by animateRectAsState( if (enabled) Rect(0f, 0f, 100f, 100f) else Rect(8f, 8f,
 * 80f, 80f))
 *
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 246–280)

@Composable
public fun animateRectAsState(
    targetValue: Rect,
    animationSpec: AnimationSpec<Rect> = rectDefaultSpring,
    label: String = "RectAnimation",
    finishedListener: ((Rect) -> Unit)? = null,
): State<Rect> {
    return animateValueAsState(
        targetValue,
        Rect.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val rectDefaultSpring = spring(visibilityThreshold = Rect.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [Int]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateIntAsState] returns a [State] object. The value of the state object will continuously be
 * updated by the animation until the animation finishes.
 *
 * Note, [animateIntAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 281–315)

 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateIntAsState(
    targetValue: Int,
    animationSpec: AnimationSpec<Int> = intDefaultSpring,
    label: String = "IntAnimation",
    finishedListener: ((Int) -> Unit)? = null,
): State<Int> {
    return animateValueAsState(
        targetValue,
        Int.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val intDefaultSpring = spring(visibilityThreshold = Int.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [IntOffset]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateIntOffsetAsState] returns a [State] object. The value of the state object will
 * continuously be updated by the animation until the animation finishes.
 *
 * Note, [animateIntOffsetAsState] cannot be canceled/stopped without removing this composable
 * function from the tree. See [Animatable] for cancelable animations.
 *
 * @sample androidx.compose.animation.core.samples.AnimateOffsetSample

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 316–350)

 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateIntOffsetAsState(
    targetValue: IntOffset,
    animationSpec: AnimationSpec<IntOffset> = intOffsetDefaultSpring,
    label: String = "IntOffsetAnimation",
    finishedListener: ((IntOffset) -> Unit)? = null,
): State<IntOffset> {
    return animateValueAsState(
        targetValue,
        IntOffset.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val intOffsetDefaultSpring = spring(visibilityThreshold = IntOffset.VisibilityThreshold)

/**
 * Fire-and-forget animation function for [IntSize]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateIntSizeAsState] returns a [State] object. The value of the state object will continuously
 * be updated by the animation until the animation finishes.
 *

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 351–385)

 * Note, [animateIntSizeAsState] cannot be canceled/stopped without removing this composable
 * function from the tree. See [Animatable] for cancelable animations.
 *
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun animateIntSizeAsState(
    targetValue: IntSize,
    animationSpec: AnimationSpec<IntSize> = intSizeDefaultSpring,
    label: String = "IntSizeAnimation",
    finishedListener: ((IntSize) -> Unit)? = null,
): State<IntSize> {
    return animateValueAsState(
        targetValue,
        IntSize.VectorConverter,
        animationSpec,
        label = label,
        finishedListener = finishedListener,
    )
}

private val intSizeDefaultSpring = spring(visibilityThreshold = IntSize.VisibilityThreshold)

/**
 * Fire-and-forget animation function for any value. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 36–70)

import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch

private val defaultAnimation = spring<Float>()

private const val DefaultFloatVisibilityThreshold = 0.01f

/**
 * Fire-and-forget animation function for [Float]. This Composable function is overloaded for
 * different parameter types such as [Dp], [Color][androidx.compose.ui.graphics.Color], [Offset],
 * etc. When the provided [targetValue] is changed, the animation will run automatically. If there
 * is already an animation in-flight when [targetValue] changes, the on-going animation will adjust
 * course to animate towards the new target value.
 *
 * [animateFloatAsState] returns a [State] object. The value of the state object will continuously
 * be updated by the animation until the animation finishes.
 *
 * Note, [animateFloatAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * [visibilityThreshold] can be used to define when the animation value is considered close enough
 * to the [targetValue] to finish. By default, the [visibilityThreshold] in the [animationSpec] will
 * be respected. If a non-default [visibilityThreshold] is provided, it will override the visibility
 * threshold in the [animationSpec] if it's a [SpringSpec].
 *
 * @sample androidx.compose.animation.core.samples.AlphaAnimationSample
 * @param targetValue Target value of the animation
 * @param animationSpec The animation that will be used to change the value through time. [spring]
 *   will be used by default.
 * @param visibilityThreshold An optional threshold for deciding when the animation value is
 *   considered close enough to the targetValue.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 386–420)

 * [animateValueAsState] returns a [State] object. The value of the state object will continuously
 * be updated by the animation until the animation finishes.
 *
 * Note, [animateValueAsState] cannot be canceled/stopped without removing this composable function
 * from the tree. See [Animatable] for cancelable animations.
 *
 * @sample androidx.compose.animation.core.samples.ArbitraryValueTypeTransitionSample
 *
 *   data class MySize(val width: Dp, val height: Dp)
 *
 * @param targetValue Target value of the animation
 * @param typeConverter A [TwoWayConverter] to convert from the animation value from and to an
 *   [AnimationVector]
 * @param animationSpec The animation that will be used to change the value through time. Physics
 *   animation will be used by default.
 * @param visibilityThreshold An optional threshold to define when the animation value can be
 *   considered close enough to the targetValue to end the animation.
 * @param label An optional label to differentiate from other animations in Android Studio.
 * @param finishedListener An optional end listener to get notified when the animation is finished.
 * @return A [State] object, the value of which is updated by animation.
 */
@Composable
public fun <T, V : AnimationVector> animateValueAsState(
    targetValue: T,
    typeConverter: TwoWayConverter<T, V>,
    animationSpec: AnimationSpec<T> = remember { spring() },
    visibilityThreshold: T? = null,
    label: String = "ValueAnimation",
    finishedListener: ((T) -> Unit)? = null,
): State<T> {
    val coroutineScope = rememberCoroutineScope()
    var updating = true
    val state = remember {
        AnimateAsState(
                targetValue,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 421–455)

                typeConverter,
                animationSpec,
                visibilityThreshold,
                label,
                finishedListener,
                coroutineScope,
            )
            .also { updating = false }
    }

    // Avoid calling state.update on initial composition.
    if (updating) {
        SideEffect {
            state.update(
                targetValue,
                typeConverter,
                animationSpec,
                visibilityThreshold,
                label,
                finishedListener,
            )
        }
    }

    return state
}

private class AnimateAsState<T, V : AnimationVector>(
    initialValue: T,
    typeConverter: TwoWayConverter<T, V>,
    animationSpec: AnimationSpec<T>,
    visibilityThreshold: T?,
    label: String,
    var finishedListener: ((T) -> Unit)?,
    private val coroutineScope: CoroutineScope,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 456–490)

) : State<T>, AnimateValueAsStateToolingHandle<T, V> {
    override var animatable = Animatable(initialValue, typeConverter, visibilityThreshold, label)
    override var animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
    private var job: Job? = null

    private var valueState: State<T> by
        mutableStateOf(animatable.asState(), referentialEqualityPolicy())

    override fun setToolingOverrideState(toolingOverrideState: State<T>?) {
        this.valueState = toolingOverrideState ?: animatable.asState()
    }

    override val value: T
        get() = valueState.value

    fun update(
        target: T,
        typeConverter: TwoWayConverter<T, V>,
        animationSpec: AnimationSpec<T>,
        visibilityThreshold: T?,
        label: String,
        finishedListener: ((T) -> Unit)?,
    ) {
        var restartAnimation = false
        var isInterrupted = false
        if (animatable.typeConverter !== typeConverter || animatable.label != label) {
            val oldAnimatable = animatable
            isInterrupted = oldAnimatable.isRunning
            val newAnimatable =
                Animatable(oldAnimatable.value, typeConverter, visibilityThreshold, label)
            animatable = newAnimatable
            if (valueState === oldAnimatable.asState()) {
                valueState = newAnimatable.asState()
            }
            restartAnimation = true

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 491–525)

        }

        if (target != animatable.targetValue) {
            isInterrupted = isInterrupted || animatable.isRunning
            restartAnimation = true
        }

        this.animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
        this.finishedListener = finishedListener

        if (restartAnimation) {
            restartAnimation(target, this.animationSpec, isInterrupted)
        }
    }

    private fun restartAnimation(
        newTarget: T,
        animSpec: AnimationSpec<T>,
        isInterrupted: Boolean,
    ) {
        if (job != null) {
            job?.cancel()
        }
        if (animatable.targetValue == newTarget) return

        val specToUse =
            if (animSpec is InterruptionAwareAnimationSpec<T>) {
                if (isInterrupted) animSpec.interruptionSpec else animSpec.animationSpec
            } else {
                animSpec
            }

        job =
            coroutineScope.launch(
                // undispatched to allow for continuous progress when target changes every frame

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 526–560)

                start = CoroutineStart.UNDISPATCHED
            ) {
                animatable.animateTo(newTarget, specToUse)
                finishedListener?.invoke(animatable.value)
            }
    }

    private fun resolveAnimationSpec(
        spec: AnimationSpec<T>,
        visibilityThreshold: T?,
    ): AnimationSpec<T> = spec.run {
        if (
            visibilityThreshold != null &&
                this is SpringSpec &&
                this.visibilityThreshold != visibilityThreshold
        ) {
            spring(dampingRatio, stiffness, visibilityThreshold)
        } else {
            this
        }
    }
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateFloatAsState(
    targetValue: Float,
    animationSpec: AnimationSpec<Float> = defaultAnimation,
    visibilityThreshold: Float = 0.01f,
    finishedListener: ((Float) -> Unit)? = null,
): State<Float> =
    animateFloatAsState(

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 561–595)

        targetValue,
        animationSpec,
        visibilityThreshold,
        finishedListener = finishedListener,
    )

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateDpAsState(
    targetValue: Dp,
    animationSpec: AnimationSpec<Dp> = dpDefaultSpring,
    finishedListener: ((Dp) -> Unit)? = null,
): State<Dp> {
    return animateValueAsState(
        targetValue,
        Dp.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateSizeAsState(
    targetValue: Size,
    animationSpec: AnimationSpec<Size> = sizeDefaultSpring,
    finishedListener: ((Size) -> Unit)? = null,
): State<Size> {
    return animateValueAsState(

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 596–630)

        targetValue,
        Size.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateOffsetAsState(
    targetValue: Offset,
    animationSpec: AnimationSpec<Offset> = offsetDefaultSpring,
    finishedListener: ((Offset) -> Unit)? = null,
): State<Offset> {
    return animateValueAsState(
        targetValue,
        Offset.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateRectAsState(
    targetValue: Rect,
    animationSpec: AnimationSpec<Rect> = rectDefaultSpring,
    finishedListener: ((Rect) -> Unit)? = null,
): State<Rect> {

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 631–665)

    return animateValueAsState(
        targetValue,
        Rect.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateIntAsState(
    targetValue: Int,
    animationSpec: AnimationSpec<Int> = intDefaultSpring,
    finishedListener: ((Int) -> Unit)? = null,
): State<Int> {
    return animateValueAsState(
        targetValue,
        Int.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateIntOffsetAsState(
    targetValue: IntOffset,
    animationSpec: AnimationSpec<IntOffset> = intOffsetDefaultSpring,
    finishedListener: ((IntOffset) -> Unit)? = null,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 666–700)

): State<IntOffset> {
    return animateValueAsState(
        targetValue,
        IntOffset.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun animateIntSizeAsState(
    targetValue: IntSize,
    animationSpec: AnimationSpec<IntSize> = intSizeDefaultSpring,
    finishedListener: ((IntSize) -> Unit)? = null,
): State<IntSize> {
    return animateValueAsState(
        targetValue,
        IntSize.VectorConverter,
        animationSpec,
        finishedListener = finishedListener,
    )
}

@Deprecated(
    "animate*AsState APIs now have a new label parameter added.",
    level = DeprecationLevel.HIDDEN,
)
@Composable
public fun <T, V : AnimationVector> animateValueAsState(
    targetValue: T,
    typeConverter: TwoWayConverter<T, V>,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 701–713)

    animationSpec: AnimationSpec<T> = remember { spring() },
    visibilityThreshold: T? = null,
    finishedListener: ((T) -> Unit)? = null,
): State<T> =
    animateValueAsState(
        targetValue = targetValue,
        typeConverter = typeConverter,
        animationSpec = animationSpec,
        visibilityThreshold = visibilityThreshold,
        label = "ValueAnimation",
        finishedListener = finishedListener,
    )


Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 71–105)

 */
@Composable
public fun animateFloatAsState(
    targetValue: Float,
    animationSpec: AnimationSpec<Float> = defaultAnimation,
    visibilityThreshold: Float = DefaultFloatVisibilityThreshold,
    label: String = "FloatAnimation",
    finishedListener: ((Float) -> Unit)? = null,
): State<Float> {
    val resolvedAnimSpec =
        if (
            animationSpec === defaultAnimation &&
                visibilityThreshold != DefaultFloatVisibilityThreshold
        ) {
            remember(visibilityThreshold) { spring(visibilityThreshold = visibilityThreshold) }
        } else {
            animationSpec
        }
    return animateValueAsState(
        targetValue,
        Float.VectorConverter,
        resolvedAnimSpec,
        /*
         * We use the default visibility threshold if it's not the default value.
         * If it's the default value, we pass null to animateValueAsState so it doesn't
         * override the visibility threshold in the animationSpec.
         */
        if (visibilityThreshold == DefaultFloatVisibilityThreshold) null else visibilityThreshold,
        label,
        finishedListener,
    )
}

/**
 * Fire-and-forget animation function for [Dp]. This Composable function is overloaded for different

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/2cda5a0d3a6aa54cac15f6a0ca1c7ea65b4665ab/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)
