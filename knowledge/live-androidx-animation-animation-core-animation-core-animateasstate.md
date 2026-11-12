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
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 1
    endLine: 35
    sha256: cf9b9298ab03836bb70be683c14a1f2cd4220779075f447b513841a12aa4b16d
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
      import kotlinx.coroutines.CoroutineStart
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 106
    endLine: 140
    sha256: 7f4a43d6561242e75cc18334db39f23901202e6f6ce8ea4950c878a2e826fa74
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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

      private val dpDefaultSpring = spring<Dp>(visibilityThreshold = Dp.VisibilityThreshold)
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 141
    endLine: 175
    sha256: 6bf202aa2338884405f751a74bff1540fcbba5222ab11ef42ffc59d8eeb5aa77
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
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
              animationSpec,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 176
    endLine: 210
    sha256: d9c2161f9797c5fc287829b29be2441aff248ccd4b3e2a1336b74ca6f886f371
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
      ): State<Offset> {
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 211
    endLine: 245
    sha256: 7a40b7ebdbf29ce06db777d19a4c5a36e3c4ac7914091d1ece31c6f89598939a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
      @Composable
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 246
    endLine: 280
    sha256: b8c681926570af8cd2086ca7bd9d3a0e37319af4d355ac080bc6cceab13138f1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
       * @param finishedListener An optional end listener to get notified when the animation is finished.
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 281
    endLine: 315
    sha256: 7881c994bdea0088eb76178e3393e74c26b6ffeff06c95c5c24a9c8420636c6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       * @param targetValue Target value of the animation
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 316
    endLine: 350
    sha256: 741d8fe62592efeffb1ebd53ace1ad41bfa401d18c3acc333781bc0712042dbd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       * Note, [animateIntSizeAsState] cannot be canceled/stopped without removing this composable
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 351
    endLine: 385
    sha256: 62622c587f0f8e47c9c9954e3fe685982e0a5a45de04f7196f7e905fc6999ac2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       * [animateValueAsState] returns a [State] object. The value of the state object will continuously
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 36
    endLine: 70
    sha256: 799cc0ae1e82633e713faed4108730876d7c7b9d314249a3f3c4882445a8f939
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
       */
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 386
    endLine: 420
    sha256: 50e34371175fe8e9db9a3197200f5c302856c5d99da0f4d81ea76f3af062a6c5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                      typeConverter,
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 421
    endLine: 455
    sha256: 921a45dc608a82d1a815f5dff7bfc6020634b862e2ec3e683e1b868a4367a34a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
      ) : State<T>, AnimateValueAsStateToolingHandle<T, V> {
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 456
    endLine: 490
    sha256: 0d84ed790ad62fc3f03c6e1616c7ef69430f3b09557bec1571f5afe5b35be5c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override var animatable = Animatable(initialValue, typeConverter, visibilityThreshold, label)
          override var animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
          private var job: Job? = null

          private var toolingOverride: State<T>? by mutableStateOf(null)

          override fun setToolingOverrideState(toolingOverrideState: State<T>?) {
              this.toolingOverride = toolingOverrideState
          }

          override val value: T
              get() = toolingOverride?.value ?: animatable.value

          fun update(
              target: T,
              typeConverter: TwoWayConverter<T, V>,
              animationSpec: AnimationSpec<T>,
              visibilityThreshold: T?,
              label: String,
              finishedListener: ((T) -> Unit)?,
          ) {
              var restartAnimation = false
              if (animatable.typeConverter !== typeConverter || animatable.label != label) {
                  animatable = Animatable(animatable.value, typeConverter, visibilityThreshold, label)
                  restartAnimation = true
              }

              if (target != animatable.targetValue) {
                  restartAnimation = true
              }

              this.animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
              this.finishedListener = finishedListener

              if (restartAnimation) {
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 491
    endLine: 525
    sha256: c63f6aaf1acc07bf958ba6655bd37358411112d8d23c0a5e5cbf0ee49683bb4c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  restartAnimation(target, this.animationSpec)
              }
          }

          private fun restartAnimation(newTarget: T, animSpec: AnimationSpec<T>) {
              val isInterrupted = animatable.isRunning
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
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 526
    endLine: 560
    sha256: f5dc4edb9c229997c2b371ad8a2bcbf7ac77efc51e4cc5536e3cc15d08873e01
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 561
    endLine: 595
    sha256: 56807dc01cc1a1a38dc70eff816fb50a0fe54678a710dabbe61e3e964e5e7ac3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 596
    endLine: 630
    sha256: 068e951f61c8a108343626d66b4244eec3cce2952fdf8035ce47f8b84711b2e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 631
    endLine: 665
    sha256: 74be57f6c9ab49228941d0bbc271dac820331d591c573f1b871ac546f69e0d1f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 666
    endLine: 699
    sha256: 8d6e9840e274254f331eb305188e74260dedca91b260a0a1f0dae9ad9c7b17de
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
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
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt
    startLine: 71
    endLine: 105
    sha256: 83ba5312d7e1cddc3e18b6dc47fec9c2b8efac356a945e1a369abf7207e6a7f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
       * parameter types such as [Float], [Color][androidx.compose.ui.graphics.Color], [Offset], etc. When
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
        - androidx.compose.animation.core.animateDpAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-561
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 561–595)
      aliases:
        - androidx.compose.animation.core.animateSizeAsState
        - androidx.compose.animation.core.animateOffsetAsState
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
        - androidx.compose.animation.core.animateRectAsState
        - androidx.compose.animation.core.animateIntAsState
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
        - androidx.compose.animation.core.animateIntOffsetAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-animateasstate-lines-666
      title: androidx.compose.animation.core AnimateAsState.kt source (lines 666–699)
      aliases:
        - androidx.compose.animation.core.animateIntSizeAsState
        - androidx.compose.animation.core.animateValueAsState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source
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
import kotlinx.coroutines.CoroutineStart

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 106–140)

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

private val dpDefaultSpring = spring<Dp>(visibilityThreshold = Dp.VisibilityThreshold)

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 141–175)


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
        animationSpec,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 176–210)

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
): State<Offset> {

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 211–245)

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
@Composable

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 246–280)

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
 * @param finishedListener An optional end listener to get notified when the animation is finished.

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 281–315)

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
 * @param targetValue Target value of the animation

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 316–350)

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
 * Note, [animateIntSizeAsState] cannot be canceled/stopped without removing this composable

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 351–385)

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
 * [animateValueAsState] returns a [State] object. The value of the state object will continuously

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 36–70)

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
 */

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 386–420)

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
                typeConverter,

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 421–455)

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
) : State<T>, AnimateValueAsStateToolingHandle<T, V> {

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 456–490)

    override var animatable = Animatable(initialValue, typeConverter, visibilityThreshold, label)
    override var animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
    private var job: Job? = null

    private var toolingOverride: State<T>? by mutableStateOf(null)

    override fun setToolingOverrideState(toolingOverrideState: State<T>?) {
        this.toolingOverride = toolingOverrideState
    }

    override val value: T
        get() = toolingOverride?.value ?: animatable.value

    fun update(
        target: T,
        typeConverter: TwoWayConverter<T, V>,
        animationSpec: AnimationSpec<T>,
        visibilityThreshold: T?,
        label: String,
        finishedListener: ((T) -> Unit)?,
    ) {
        var restartAnimation = false
        if (animatable.typeConverter !== typeConverter || animatable.label != label) {
            animatable = Animatable(animatable.value, typeConverter, visibilityThreshold, label)
            restartAnimation = true
        }

        if (target != animatable.targetValue) {
            restartAnimation = true
        }

        this.animationSpec = resolveAnimationSpec(animationSpec, visibilityThreshold)
        this.finishedListener = finishedListener

        if (restartAnimation) {

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 491–525)

            restartAnimation(target, this.animationSpec)
        }
    }

    private fun restartAnimation(newTarget: T, animSpec: AnimationSpec<T>) {
        val isInterrupted = animatable.isRunning
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

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 526–560)

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

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 561–595)

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

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 596–630)

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

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 631–665)

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

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 666–699)

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


Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)

## androidx.compose.animation.core AnimateAsState.kt source (lines 71–105)

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
 * parameter types such as [Float], [Color][androidx.compose.ui.graphics.Color], [Offset], etc. When

Sources: [live-androidx-animation-animation-core-animation-core-animateasstate-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/AnimateAsState.kt)
