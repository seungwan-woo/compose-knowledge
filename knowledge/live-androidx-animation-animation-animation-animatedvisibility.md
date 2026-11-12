---
type: reference
title: androidx.compose.animation AnimatedVisibility.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 1
    endLine: 35
    sha256: d24c382a9bbf2abbe31ade680a3bd3b2e671efbbafe2565d85c861db4f2e4830
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

      package androidx.compose.animation

      import androidx.compose.animation.EnterExitState.PostExit
      import androidx.compose.animation.EnterExitState.PreEnter
      import androidx.compose.animation.EnterExitState.Visible
      import androidx.compose.animation.core.DeferredTransition
      import androidx.compose.animation.core.DeferredTransitionState
      import androidx.compose.animation.core.InternalAnimationApi
      import androidx.compose.animation.core.MutableTransitionState
      import androidx.compose.animation.core.Transition
      import androidx.compose.animation.core.createChildTransition
      import androidx.compose.animation.core.rememberDeferredTransition
      import androidx.compose.animation.core.rememberTransition
      import androidx.compose.animation.core.updateTransition
      import androidx.compose.animation.internal.JvmDefaultWithCompatibility
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.ColumnScope
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-134-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 134
    endLine: 162
    sha256: 39d210ed0addb3f0f5924fdf99ab034eb0b189bd18822cb5911d1b8c1fd5e41f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * [RowScope.AnimatedVisibility] composable animates the appearance and disappearance of its content
       * when the [AnimatedVisibility] is in a [Row]. The default animations are tailored specific to the
       * [Row] layout. See more details below.
       *
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale, and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * The default [enter] and [exit] transition is configured based on the horizontal layout of a
       * [Row]. [enter] defaults to a combination of fading in and expanding the content horizontally.
       * (The end of the content will be the leading edge as the content expands to its full width.) And
       * [exit] defaults to shrinking the content horizontally with the end of the content being the
       * leading edge while fading out. The expanding and shrinking will likely also animate the parent
       * and siblings in the row since they rely on the size of appearing/disappearing content.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-163-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 163
    endLine: 197
    sha256: 692fffe9f2d9e6120b1b8e01c006cf85a58528cc6a3ff0a066f775505a97facd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
       * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
       * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
       *
       * Here's an example of using [RowScope.AnimatedVisibility] in a [Row]:
       *
       * @sample androidx.compose.animation.samples.AnimatedFloatingActionButton
       * @param visible defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
       *   horizontally by default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
       *   horizontally by default
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on the value of [visible]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibility
       * @see ColumnScope.AnimatedVisibility
       * @see AnimatedVisibilityScope
       */
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-198-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 198
    endLine: 232
    sha256: efc66ddc4d08826fcf18f68da8d5ad62d39d780381d2e79079915209bb70dc16
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun RowScope.AnimatedVisibility(
          visible: Boolean,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandHorizontally(),
          exit: ExitTransition = fadeOut() + shrinkHorizontally(),
          label: String = "AnimatedVisibility",
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = updateTransition(visible, label)
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * [ColumnScope.AnimatedVisibility] composable animates the appearance and disappearance of its
       * content when the [AnimatedVisibility] is in a [Column]. The default animations are tailored
       * specific to the [Column] layout. See more details below.
       *
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * The default [enter] and [exit] transition is configured based on the vertical layout of a
       * [Column]. [enter] defaults to a combination of fading in and expanding the content vertically.
       * (The bottom of the content will be the leading edge as the content expands to its full height.)
       * And the [exit] defaults to shrinking the content vertically with the bottom of the content being
       * the leading edge while fading out. The expanding and shrinking will likely also animate the
       * parent and siblings in the column since they rely on the size of appearing/disappearing content.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-233-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 233
    endLine: 267
    sha256: dae9221704b1df8983c3e7b6d122ed4da615853cc927044e7d1768b2d6110e02
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
       * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
       * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
       *
       * Here's an example of using [ColumnScope.AnimatedVisibility] in a [Column]:
       *
       * @sample androidx.compose.animation.samples.ColumnAnimatedVisibilitySample
       * @param visible defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
       *   vertically by default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
       *   vertically by default
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on the value of [visible]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-268-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 268
    endLine: 302
    sha256: 73e66f9b58483ed5086b638c8d0a093292251baa8a20378287fa666d57d1a5c0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see AnimatedVisibility
       * @see AnimatedVisibilityScope
       */
      @Composable
      public fun ColumnScope.AnimatedVisibility(
          visible: Boolean,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandVertically(),
          exit: ExitTransition = fadeOut() + shrinkVertically(),
          label: String = "AnimatedVisibility",
          content: @Composable AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = updateTransition(visible, label)
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * [EnterExitState] contains the three states that are involved in the enter and exit transition of
       * [AnimatedVisibility]. More specifically, [PreEnter] and [Visible] defines the initial and target
       * state of an *enter* transition, whereas [Visible] and [PostExit] are the initial and target state
       * of an *exit* transition.
       *
       * See blow for an example of custom enter/exit animation in [AnimatedVisibility] using
       * `Transition<EnterExitState>` (i.e. [AnimatedVisibilityScope.transition]):
       *
       * @sample androidx.compose.animation.samples.AnimatedVisibilityWithBooleanVisibleParamNoReceiver
       * @see AnimatedVisibility
       */
      public enum class EnterExitState {
          /** The initial state of a custom enter animation in [AnimatedVisibility].. */
          PreEnter,

          /**
           * The `Visible` state is the target state of a custom *enter* animation, also the initial state
           * of a custom *exit* animation in [AnimatedVisibility].
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-303-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 303
    endLine: 336
    sha256: c3fc4de78151e8fbf19b6f908422ad4aa55fa094a5dec90d56ff02b50c45b157
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          Visible,

          /** Target state of a custom *exit* animation in [AnimatedVisibility]. */
          PostExit,
      }

      /**
       * [AnimatedVisibility] composable animates the appearance and disappearance of its content, as
       * [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The [visibleState]
       * can also be used to observe the state of [AnimatedVisibility]. For example: `visibleState.isIdle`
       * indicates whether all the animations have finished in [AnimatedVisibility], and
       * `visibleState.currentState` returns the initial state of the current animations.
       *
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-337-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 337
    endLine: 371
    sha256: 4074fc23d442d0f645fbbab4f7929b58a21e3244d4e9a3d146aadfa86bbf5927
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
       *
       * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
       * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
       * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also
       * animate the parent and siblings if they rely on the size of appearing/disappearing content. When
       * the [AnimatedVisibility] composable is put in a [Row] or a [Column], the default enter and exit
       * transitions are tailored to that particular container. See [RowScope.AnimatedVisibility] and
       * [ColumnScope.AnimatedVisibility] for details.
       *
       * @sample androidx.compose.animation.samples.AnimatedVisibilityLazyColumnSample
       * @param visibleState defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding by
       *   default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking by
       *   default
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on the value of [visibleState]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibility
       * @see Transition.AnimatedVisibility
       * @see AnimatedVisibilityScope
       */
      @Composable
      public fun AnimatedVisibility(
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 36
    endLine: 70
    sha256: 63fa1af864598ef779ca88279736e8c97840a531b4cf8755236aa47665013e67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.computedStateOf
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.key
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.composed
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.platform.debugInspectorInfo
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastMap
      import androidx.compose.ui.util.fastMaxOfOrDefault
      import kotlin.math.max

      /**
       * [AnimatedVisibility] composable animates the appearance and disappearance of its content, as
       * [visible] value changes. Different [EnterTransition]s and [ExitTransition]s can be defined in
       * [enter] and [exit] for the appearance and disappearance animation. There are 4 types of
       * [EnterTransition] and [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter
       * transitions can be combined using `+`. Same for exit transitions. The order of the combination
       * does not matter, as the transition animations will start simultaneously. See [EnterTransition]
       * and [ExitTransition] for details on the three types of transition.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-372-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 372
    endLine: 404
    sha256: 4abc5db8390564843c1c3b0e0243b01782804e39d236c781400ce61c7c10f23a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          visibleState: MutableTransitionState<Boolean>,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandIn(),
          exit: ExitTransition = fadeOut() + shrinkOut(),
          label: String = "AnimatedVisibility",
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = rememberTransition(visibleState, label)
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * [RowScope.AnimatedVisibility] composable animates the appearance and disappearance of its content
       * as [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The default
       * [enter] and [exit] transitions are tailored specific to the [Row] layout. See more details below.
       * The [visibleState] can also be used to observe the state of [AnimatedVisibility]. For example:
       * `visibleState.isIdle` indicates whether all the animations have finished in [AnimatedVisibility],
       * and `visibleState.currentState` returns the initial state of the current animations.
       *
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * The default [enter] and [exit] transition is configured based on the horizontal layout of a
       * [Row]. [enter] defaults to a combination of fading in and expanding the content horizontally.
       * (The end of the content will be the leading edge as the content expands to its full width.) And
       * [exit] defaults to shrinking the content horizontally with the end of the content being the
       * leading edge while fading out. The expanding and shrinking will likely also animate the parent
       * and siblings in the row since they rely on the size of appearing/disappearing content.
       *
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-405-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 405
    endLine: 439
    sha256: 4942e0bbeaf789e6b3bc42e44001b4c133c3cb859a489ad76d3cd98a18165db3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
       *
       * @param visibleState defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
       *   vertically by default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
       *   vertically by default
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on the value of [visibleState]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibility
       * @see Transition.AnimatedVisibility
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-440-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 440
    endLine: 474
    sha256: 4fe62a8044bff1fc11e35a74377ed85b2a6c066dad0dbb9553865e9f793b03da
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @see AnimatedVisibilityScope
       */
      @Composable
      public fun RowScope.AnimatedVisibility(
          visibleState: MutableTransitionState<Boolean>,
          modifier: Modifier = Modifier,
          enter: EnterTransition = expandHorizontally() + fadeIn(),
          exit: ExitTransition = shrinkHorizontally() + fadeOut(),
          label: String = "AnimatedVisibility",
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = rememberTransition(visibleState, label)
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * [ColumnScope.AnimatedVisibility] composable animates the appearance and disappearance of its
       * content as [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The
       * default [enter] and [exit] transitions are tailored specific to the [Column] layout. See more
       * details below. The [visibleState] can also be used to observe the state of [AnimatedVisibility].
       * For example: `visibleState.isIdle` indicates whether all the animations have finished in
       * [AnimatedVisibility], and `visibleState.currentState` returns the initial state of the current
       * animations.
       *
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * The default [enter] and [exit] transition is configured based on the vertical layout of a
       * [Column]. [enter] defaults to a combination of fading in and expanding the content vertically.
       * (The bottom of the content will be the leading edge as the content expands to its full height.)
       * And the [exit] defaults to shrinking the content vertically with the bottom of the content being
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-475-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 475
    endLine: 503
    sha256: 69380d0f6cc510b1fa557369d1ad192a40f2b83185495910ac02a615dfb0d9c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * the leading edge while fading out. The expanding and shrinking will likely also animate the
       * parent and siblings in the column since they rely on the size of appearing/disappearing content.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
       *
       * @sample androidx.compose.animation.samples.AVColumnScopeWithMutableTransitionState
       * @param visibleState defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
       *   vertically by default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
       *   vertically by default
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-504-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 504
    endLine: 538
    sha256: 1c9a26135bb63ee88cd64ec2e9d7fee6bbc08b70f9075f5786b7579aee0d6793
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on of [visibleState]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibility
       * @see Transition.AnimatedVisibility
       * @see AnimatedVisibilityScope
       */
      @Composable
      public fun ColumnScope.AnimatedVisibility(
          visibleState: MutableTransitionState<Boolean>,
          modifier: Modifier = Modifier,
          enter: EnterTransition = expandVertically() + fadeIn(),
          exit: ExitTransition = shrinkVertically() + fadeOut(),
          label: String = "AnimatedVisibility",
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = rememberTransition(visibleState, label)
          AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
      }

      /**
       * This extension function creates an [AnimatedVisibility] composable as a child Transition of the
       * given Transition. This means: 1) the enter/exit transition is now triggered by the provided
       * [Transition]'s [targetState][Transition.targetState] change. When the targetState changes, the
       * visibility will be derived using the [visible] lambda and [Transition.targetState]. 2) The
       * enter/exit transitions, as well as any custom enter/exit animations defined in
       * [AnimatedVisibility] are now hoisted to the parent Transition. The parent Transition will wait
       * for all of them to finish before it considers itself finished (i.e. [Transition.currentState] =
       * [Transition.targetState]), and subsequently removes the content in the exit case.
       *
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-539-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 539
    endLine: 567
    sha256: a69e61bc0e51ebaa0d83b6bbafbd15504d72bf59135fca9f4495ef2f1af148a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
       * appearance and disappearance animation. There are 4 types of [EnterTransition] and
       * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
       * using `+`. Same for exit transitions. The order of the combination does not matter, as the
       * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
       * details on the three types of transition.
       *
       * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
       * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
       * These custom animations will be running along side of the built-in animations specified in
       * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
       * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
       * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
       * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
       * animations have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed.
       *
       * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
       * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
       * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-568-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 568
    endLine: 602
    sha256: aa852335e830fde2bee45f200c7cdb6bcc5eeb443ff409601d534263b3880b2a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * animate the parent and siblings if they rely on the size of appearing/disappearing content.
       *
       * @sample androidx.compose.animation.samples.AddAnimatedVisibilityToGenericTransitionSample
       * @param visible defines whether the content should be visible based on transition state T
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
       *   vertically by default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
       *   vertically by default
       * @param content Content to appear or disappear based on the visibility derived from the
       *   [Transition.targetState] and the provided [visible] lambda
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibilityScope
       * @see Transition.AnimatedVisibility
       */
      @Composable
      public fun <T> Transition<T>.AnimatedVisibility(
          visible: (T) -> Boolean,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandIn(),
          exit: ExitTransition = shrinkOut() + fadeOut(),
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ): Unit =
          AnimatedVisibilityImpl(
              transition = this,
              visible = visible,
              modifier = modifier,
              enter = enter,
              exit = exit,
              mutableTransform = null,
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-603-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 603
    endLine: 635
    sha256: 18d70a22cc9c38aa06b1323656e196e247b1a88dad6d8090a87175794c396124
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              content = content,
          )

      /**
       * [AnimatedVisibility] can be used to animate the appearance and disappearance of its content as
       * the [Transition] state changes.
       *
       * [visible] defines whether the content should be visible based on transition state T.
       *
       * [modifier] modifier for the [Layout] created to contain the [content]
       *
       * [enter] EnterTransition(s) used for the appearing animation, fading in while expanding vertically
       * by default
       *
       * [exit] ExitTransition(s) used for the disappearing animation, fading out while shrinking
       * vertically by default
       *
       * [mutableTransform] A block to control the visual transformations during the deferred phase (e.g.,
       * for predictive back gestures) before the main transition begins. This is only active if the
       * [Transition] was created using [rememberDeferredTransition] with [DeferredTransitionState]. By
       * default, this is `null`, meaning no manual transformations are applied and properties remain at
       * the transition's initial values during the deferred phase. This phase starts when
       * [DeferredTransitionState.defer] is called and ends when [DeferredTransitionState.animateTo] is
       * called to start the automatic transition. During this phase, you can manually manipulate the
       * content's transformations (like [TransformScope.alpha], [TransformScope.scale],
       * [TransformScope.offset], and [TransformScope.veil]). When a [MutableTransform] is provided,
       * properties that are not manually set default to their resting values during the deferred phase.
       * Once the transition starts, the manually applied transformations are handed off to the configured
       * [enter] and [exit] transitions. For exiting content, a "sustain unless specified" policy is
       * applied: if an exit transition (e.g. `fadeOut`) is specified, the hand-off will animate towards
       * the target value of that transition. However, if no exit transition is specified for a given
       * property (e.g. `slideOut` is missing), that property will sustain its last manual value until the
       * entire transition completes. While in the deferred phase, entering content remains in the
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-636-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 636
    endLine: 670
    sha256: 4e1bc48ec5804e764f4d6187103fc8bd412159f97c28e43d0ceb1a2f96c75546
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [EnterExitState.PreEnter] state, and exiting content remains in the [EnterExitState.Visible]
       * state.
       *
       * @sample androidx.compose.animation.samples.DeferredAnimatedVisibilitySample
       *
       * [content] Content to appear or disappear based on the visibility derived from the
       * [Transition.targetState] and the provided [visible] lambda
       *
       * @sample androidx.compose.animation.samples.AddAnimatedVisibilityToGenericTransitionSample
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibilityScope
       */
      @Composable
      public fun <T> DeferredTransition<T>.DeferredAnimatedVisibility(
          visible: (T) -> Boolean,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandIn(),
          exit: ExitTransition = shrinkOut() + fadeOut(),
          mutableTransform: MutableTransform? = null,
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          AnimatedVisibilityImpl(
              transition = this,
              visible = visible,
              modifier = modifier,
              enter = enter,
              exit = exit,
              mutableTransform = mutableTransform,
              content = content,
          )
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-671-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 671
    endLine: 705
    sha256: 1c70b123ae62a114c6e5c2607fc8974e67fb10268b22fc5a3452998aaddb5841
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      /**
       * This is the scope for the content of [AnimatedVisibility]. In this scope, direct and indirect
       * children of [AnimatedVisibility] will be able to define their own enter/exit transitions using
       * the built-in options via [Modifier.animateEnterExit]. They will also be able define custom
       * enter/exit animations using the [transition] object. [AnimatedVisibility] will ensure both custom
       * and built-in enter/exit animations finish before it considers itself idle, and subsequently
       * removes its content in the case of exit.
       *
       * __Note:__ Custom enter/exit animations that are created *independent* of the
       * [AnimatedVisibilityScope.transition] will have no guarantee to finish when exiting, as
       * [AnimatedVisibility] would have no visibility of such animations.
       *
       * @sample androidx.compose.animation.samples.AVScopeAnimateEnterExit
       */
      @JvmDefaultWithCompatibility
      public interface AnimatedVisibilityScope {
          /**
           * [transition] allows custom enter/exit animations to be specified. It will run simultaneously
           * with the built-in enter/exit transitions specified in [AnimatedVisibility].
           */
          public val transition: Transition<EnterExitState>

          /**
           * [animateEnterExit] modifier can be used for any direct or indirect children of
           * [AnimatedVisibility] to create a different enter/exit animation than what's specified in
           * [AnimatedVisibility]. The visual effect of these children will be a combination of the
           * [AnimatedVisibility]'s animation and their own enter/exit animations.
           *
           * [enter] and [exit] defines different [EnterTransition]s and [ExitTransition]s that will be
           * used for the appearance and disappearance animation. There are 4 types of [EnterTransition]
           * and [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be
           * combined using `+`. Same for exit transitions. The order of the combination does not matter,
           * as the transition animations will start simultaneously. See [EnterTransition] and
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-706-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 706
    endLine: 740
    sha256: b7a68718bea4075d984df4691682112d16313e94aca689abf495c06889f3c670
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
           * [ExitTransition] for details on the three types of transition.
           *
           * By default, the enter transition will be a [fadeIn] of the content. And the exit transition
           * will be fading out the content using [fadeOut].
           *
           * In some cases it may be desirable to have [AnimatedVisibility] apply no animation at all for
           * enter and/or exit, such that children of [AnimatedVisibility] can each have their distinct
           * animations. To achieve this, [EnterTransition.None] and/or [ExitTransition.None] can be used
           * for [AnimatedVisibility].
           *
           * @sample androidx.compose.animation.samples.AnimateEnterExitPartialContent
           */
          public fun Modifier.animateEnterExit(
              enter: EnterTransition = fadeIn(),
              exit: ExitTransition = fadeOut(),
              label: String = "animateEnterExit",
          ): Modifier =
              composed(
                  inspectorInfo =
                      debugInspectorInfo {
                          name = "animateEnterExit"
                          properties["enter"] = enter
                          properties["exit"] = exit
                          properties["label"] = label
                      }
              ) {
                  this.then(
                      transition.createEnterExitModifier(
                          updateEnterExitModifierState(transition, enter, exit),
                          label = label,
                      )
                  )
              }
      }
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 71
    endLine: 98
    sha256: 6f02d7f8a92154b54977530cfaa6ee35db75eb9b1973fe6625c8e4a01c754277
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
       * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
       * [AnimatedVisibilityScope.transition]). See the second sample code snippet below for example.
       * These custom animations will be running alongside of the built-in animations specified in [enter]
       * and [exit]. In cases where the enter/exit animation needs to be completely customized, [enter]
       * and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as needed.
       * [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it considers
       * itself idle. [content] will only be removed after all the (built-in and custom) exit animations
       * have finished.
       *
       * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
       * determined by the largest width and largest height of the children. All children will be aligned
       * to the top start of the [Layout].
       *
       * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
       * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
       * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
       * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
       *
       * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
       * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
       * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also
       * animate the parent and siblings if they rely on the size of appearing/disappearing content. When
       * the [AnimatedVisibility] composable is put in a [Row] or a [Column], the default enter and exit
       * transitions are tailored to that particular container. See [RowScope.AnimatedVisibility] and
       * [ColumnScope.AnimatedVisibility] for details.
       *
       * Here are two examples of [AnimatedVisibility]: one using the built-in enter/exit transition, the
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-741-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 741
    endLine: 775
    sha256: 5416a3f4eaa33a7afdcc6e10efd1035e0b4f09e20db8b3bf2c3dbd10ba322d80
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      internal class AnimatedVisibilityScopeImpl
      internal constructor(override var transition: Transition<EnterExitState>) :
          AnimatedVisibilityScope {
          internal val targetSize = mutableStateOf(IntSize.Zero)
      }

      /**
       * RowScope and ColumnScope AnimatedVisibility extensions and AnimatedVisibility without a receiver
       * converge here. AnimatedVisibilityImpl sets up 2 things: 1) It adds a modifier to report 0 size in
       * lookahead when animating out. 2) It sets up a criteria for when content should be disposed.
       */
      @Composable
      internal fun <T> AnimatedVisibilityImpl(
          transition: Transition<T>,
          visible: (T) -> Boolean,
          modifier: Modifier,
          enter: EnterTransition,
          exit: ExitTransition,
          mutableTransform: MutableTransform? = null,
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          AnimatedEnterExitImpl(
              transition = transition,
              visible = visible,
              modifier =
                  modifier.layout { measurable, constraints ->
                      val placeable = measurable.measure(constraints)
                      val (w, h) =
                          if (isLookingAhead && !visible(transition.targetState)) {
                              IntSize.Zero
                          } else {
                              IntSize(placeable.width, placeable.height)
                          }
                      layout(w, h) { placeable.place(0, 0) }
                  },
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-776-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 776
    endLine: 810
    sha256: a5a0248fcdf910017af050f88b2c4d045cfe17ae988b47f967b0c0528169b755
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              enter = enter,
              exit = exit,
              shouldDisposeBlock = { current, target -> current == target && target == PostExit },
              mutableTransformData = mutableTransform,
              content = content,
          )
      }

      /** Observes lookahead size. */
      internal fun interface OnLookaheadMeasured {
          fun invoke(size: IntSize)
      }

      @OptIn(InternalAnimationApi::class)
      @Composable
      internal fun <T> AnimatedEnterExitImpl(
          transition: Transition<T>,
          visible: (T) -> Boolean,
          modifier: Modifier,
          enter: EnterTransition,
          exit: ExitTransition,
          shouldDisposeBlock: (EnterExitState, EnterExitState) -> Boolean,
          onLookaheadMeasured: OnLookaheadMeasured? = null,
          mutableTransformData: MutableTransform? = null,
          forceVisible: Boolean = false,
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val localPendingTargetState = transition.pendingTargetState

          if (
              forceVisible ||
                  visible(transition.targetState) ||
                  visible(transition.currentState) ||
                  (localPendingTargetState != null && visible(localPendingTargetState)) ||
                  transition.isSeeking ||
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-811-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 811
    endLine: 845
    sha256: ad0e16b4e5e18ff1af6d076ac288f545bf83a79c78ecfa62f1feb3321d99e6dc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  transition.hasInitialValueAnimations
          ) {
              val childTransition =
                  transition.createChildTransition(label = "EnterExitTransition") {
                      transition.targetEnterExit(visible, it)
                  }

              // Hoist the active enter/exit tracking to this scope to survive the temporary disposal
              // of the Layout and its modifiers when an exit transition finishes. If an interruption
              // occurs (e.g. A -> B -> A) after the layout for A has been removed, the hoisted
              // tracking preserves the original exit boundaries. Without this, the tracking would
              // re-initialize with the new parameters (which could be ExitTransition.None in
              // AnimatedContent), causing the animation to lose its start/end values and snap.
              val modifierState =
                  updateEnterExitModifierState(childTransition, enter, exit, mutableTransformData)

              val shouldDisposeAfterExit by
                  remember(childTransition, shouldDisposeBlock) {
                      computedStateOf {
                          childTransition.exitFinished &&
                              shouldDisposeBlock(
                                  childTransition.currentState,
                                  childTransition.targetState,
                              )
                      }
                  }

              if (!childTransition.exitFinished || !shouldDisposeAfterExit) {
                  val scope = remember(childTransition) { AnimatedVisibilityScopeImpl(childTransition) }
                  Layout(
                      content = { scope.content() },
                      modifier =
                          modifier.then(
                              childTransition
                                  .createEnterExitModifier(
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-846-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 846
    endLine: 880
    sha256: 753af6c809c02ac50cdda4a5c78cebb7aab19ca5253d91348c8b5fef2d81c053
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      modifierState,
                                      provideTransformState = transition is DeferredTransition<*>,
                                      label = "Built-in",
                                  )
                                  .then(
                                      if (onLookaheadMeasured != null) {
                                          Modifier.layout { measurable, constraints ->
                                              measurable.measure(constraints).run {
                                                  if (isLookingAhead) {
                                                      onLookaheadMeasured.invoke(IntSize(width, height))
                                                  }
                                                  layout(width, height) { place(0, 0) }
                                              }
                                          }
                                      } else Modifier
                                  )
                          ),
                      measurePolicy = remember { AnimatedEnterExitMeasurePolicy(scope) },
                  )
              }
          }
      }

      private val Transition<EnterExitState>.exitFinished
          get() = currentState == PostExit && targetState == PostExit

      private class AnimatedEnterExitMeasurePolicy(val scope: AnimatedVisibilityScopeImpl) :
          MeasurePolicy {
          var hasLookaheadOccurred = false

          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              var maxWidth = 0
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-881-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 881
    endLine: 915
    sha256: 092a07ab0611fddfd316a7c97343c37b6bf907f223752e4642e6953749d66ef5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              var maxHeight = 0
              val placeables = measurables.fastMap {
                  it.measure(constraints).apply {
                      maxWidth = max(maxWidth, width)
                      maxHeight = max(maxHeight, height)
                  }
              }
              // Position the children.
              if (isLookingAhead) {
                  hasLookaheadOccurred = true
                  scope.targetSize.value = IntSize(maxWidth, maxHeight)
              } else if (!hasLookaheadOccurred) {
                  // Not in lookahead scope.
                  scope.targetSize.value = IntSize(maxWidth, maxHeight)
              }
              return layout(maxWidth, maxHeight) { placeables.fastForEach { it.place(0, 0) } }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastMaxOfOrDefault(0) { it.minIntrinsicWidth(height) }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) = measurables.fastMaxOfOrDefault(0) { it.minIntrinsicHeight(width) }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastMaxOfOrDefault(0) { it.maxIntrinsicWidth(height) }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-916-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 916
    endLine: 950
    sha256: 61075b2846912ebd973978309d45cb0e333a95a8e9e3cd50c14219d567cfb41d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              width: Int,
          ) = measurables.fastMaxOfOrDefault(0) { it.maxIntrinsicHeight(width) }
      }

      // This converts Boolean visible to EnterExitState
      @Composable
      internal fun <T> Transition<T>.targetEnterExit(
          visible: (T) -> Boolean,
          targetState: T,
      ): EnterExitState =
          key(this) {
              if (this.isSeeking) {
                  if (visible(targetState)) {
                      Visible
                  } else {
                      if (visible(this.currentState)) {
                          PostExit
                      } else {
                          PreEnter
                      }
                  }
              } else {
                  val hasBeenVisible = remember { mutableStateOf(false) }
                  val localPendingTargetState = pendingTargetState

                  if (
                      visible(currentState) ||
                          (localPendingTargetState != null && visible(localPendingTargetState))
                  ) {
                      hasBeenVisible.value = true
                  }

                  if (visible(targetState)) {
                      EnterExitState.Visible
                  } else if (localPendingTargetState != null && visible(localPendingTargetState)) {
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-951-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 951
    endLine: 959
    sha256: 3ea191a703c8afd12d013626cc9b628ff8f395c9e589c71a1c749ad7e1ca7f3e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      EnterExitState.PreEnter
                  } else if (hasBeenVisible.value) {
                      EnterExitState.PostExit
                  } else {
                      EnterExitState.PreEnter
                  }
              }
          }
  - id: live-androidx-animation-animation-animation-animatedvisibility-lines-99-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt
    startLine: 99
    endLine: 133
    sha256: 311087f2bbe5a26afb090084e13ae648fb099fa758282c9f7a4110b6d6fef70e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * other using a custom enter/exit animation.
       *
       * @sample androidx.compose.animation.samples.FullyLoadedTransition
       *
       * The example blow shows how a custom enter/exit animation can be created using the Transition
       * object (i.e. Transition<EnterExitState>) from [AnimatedVisibilityScope].
       *
       * @sample androidx.compose.animation.samples.AnimatedVisibilityWithBooleanVisibleParamNoReceiver
       * @param visible defines whether the content should be visible
       * @param modifier modifier for the [Layout] created to contain the [content]
       * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding by
       *   default
       * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking by
       *   default
       * @param label A label to differentiate from other animations in Android Studio animation preview.
       * @param content Content to appear or disappear based on the value of [visible]
       * @see EnterTransition
       * @see ExitTransition
       * @see fadeIn
       * @see expandIn
       * @see fadeOut
       * @see shrinkOut
       * @see AnimatedVisibilityScope
       * @see CapturedAnimatedVisibility
       */
      @Composable
      public fun AnimatedVisibility(
          visible: Boolean,
          modifier: Modifier = Modifier,
          enter: EnterTransition = fadeIn() + expandIn(),
          exit: ExitTransition = shrinkOut() + fadeOut(),
          label: String = "AnimatedVisibility",
          content: @Composable() AnimatedVisibilityScope.() -> Unit,
      ) {
          val transition = updateTransition(visible, label)
compose:
  id: live-androidx-animation-animation-animation-animatedvisibility
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation
  sections:
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-1
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-134
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 134–162)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-134-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-163
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 163–197)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-163-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-198
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 198–232)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-198-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-233
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 233–267)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-233-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-268
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 268–302)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-268-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-303
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 303–336)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-303-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-337
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 337–371)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-337-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-36
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-372
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 372–404)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-372-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-405
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 405–439)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-405-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-440
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 440–474)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-440-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-475
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 475–503)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-475-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-504
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 504–538)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-504-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-539
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 539–567)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-539-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-568
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 568–602)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-568-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-603
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 603–635)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-603-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-636
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 636–670)
      aliases:
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.DeferredAnimatedVisibility
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-636-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-671
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 671–705)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-671-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-706
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 706–740)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-706-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-71
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 71–98)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-71-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-741
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 741–775)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-741-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-776
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 776–810)
      aliases:
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-776-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-811
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 811–845)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-811-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-846
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 846–880)
      aliases:
        - androidx.compose.animation.EnterExitState
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-846-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-881
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 881–915)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-881-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-916
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 916–950)
      aliases:
        - androidx.compose.animation.EnterExitState
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-916-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-951
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 951–959)
      aliases:
        - androidx.compose.animation.EnterExitState
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-951-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedvisibility-lines-99
      title: androidx.compose.animation AnimatedVisibility.kt source (lines 99–133)
      aliases:
        - androidx.compose.animation.AnimatedVisibility
        - androidx.compose.animation.EnterExitState
        - androidx.compose.animation.AnimatedVisibilityScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedvisibility-lines-99-source
      relatedIds: []
---

# androidx.compose.animation AnimatedVisibility.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt

## androidx.compose.animation AnimatedVisibility.kt source (lines 1–35)

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

package androidx.compose.animation

import androidx.compose.animation.EnterExitState.PostExit
import androidx.compose.animation.EnterExitState.PreEnter
import androidx.compose.animation.EnterExitState.Visible
import androidx.compose.animation.core.DeferredTransition
import androidx.compose.animation.core.DeferredTransitionState
import androidx.compose.animation.core.InternalAnimationApi
import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.animation.core.Transition
import androidx.compose.animation.core.createChildTransition
import androidx.compose.animation.core.rememberDeferredTransition
import androidx.compose.animation.core.rememberTransition
import androidx.compose.animation.core.updateTransition
import androidx.compose.animation.internal.JvmDefaultWithCompatibility
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 134–162)

    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * [RowScope.AnimatedVisibility] composable animates the appearance and disappearance of its content
 * when the [AnimatedVisibility] is in a [Row]. The default animations are tailored specific to the
 * [Row] layout. See more details below.
 *
 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale, and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * The default [enter] and [exit] transition is configured based on the horizontal layout of a
 * [Row]. [enter] defaults to a combination of fading in and expanding the content horizontally.
 * (The end of the content will be the leading edge as the content expands to its full width.) And
 * [exit] defaults to shrinking the content horizontally with the end of the content being the
 * leading edge while fading out. The expanding and shrinking will likely also animate the parent
 * and siblings in the row since they rely on the size of appearing/disappearing content.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-134-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 163–197)

 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
 * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
 * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
 *
 * Here's an example of using [RowScope.AnimatedVisibility] in a [Row]:
 *
 * @sample androidx.compose.animation.samples.AnimatedFloatingActionButton
 * @param visible defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
 *   horizontally by default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
 *   horizontally by default
 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on the value of [visible]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibility
 * @see ColumnScope.AnimatedVisibility
 * @see AnimatedVisibilityScope
 */

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-163-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 198–232)

@Composable
public fun RowScope.AnimatedVisibility(
    visible: Boolean,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandHorizontally(),
    exit: ExitTransition = fadeOut() + shrinkHorizontally(),
    label: String = "AnimatedVisibility",
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val transition = updateTransition(visible, label)
    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * [ColumnScope.AnimatedVisibility] composable animates the appearance and disappearance of its
 * content when the [AnimatedVisibility] is in a [Column]. The default animations are tailored
 * specific to the [Column] layout. See more details below.
 *
 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * The default [enter] and [exit] transition is configured based on the vertical layout of a
 * [Column]. [enter] defaults to a combination of fading in and expanding the content vertically.
 * (The bottom of the content will be the leading edge as the content expands to its full height.)
 * And the [exit] defaults to shrinking the content vertically with the bottom of the content being
 * the leading edge while fading out. The expanding and shrinking will likely also animate the
 * parent and siblings in the column since they rely on the size of appearing/disappearing content.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-198-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 233–267)

 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
 * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
 * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
 *
 * Here's an example of using [ColumnScope.AnimatedVisibility] in a [Column]:
 *
 * @sample androidx.compose.animation.samples.ColumnAnimatedVisibilitySample
 * @param visible defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
 *   vertically by default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
 *   vertically by default
 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on the value of [visible]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-233-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 268–302)

 * @see AnimatedVisibility
 * @see AnimatedVisibilityScope
 */
@Composable
public fun ColumnScope.AnimatedVisibility(
    visible: Boolean,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandVertically(),
    exit: ExitTransition = fadeOut() + shrinkVertically(),
    label: String = "AnimatedVisibility",
    content: @Composable AnimatedVisibilityScope.() -> Unit,
) {
    val transition = updateTransition(visible, label)
    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * [EnterExitState] contains the three states that are involved in the enter and exit transition of
 * [AnimatedVisibility]. More specifically, [PreEnter] and [Visible] defines the initial and target
 * state of an *enter* transition, whereas [Visible] and [PostExit] are the initial and target state
 * of an *exit* transition.
 *
 * See blow for an example of custom enter/exit animation in [AnimatedVisibility] using
 * `Transition<EnterExitState>` (i.e. [AnimatedVisibilityScope.transition]):
 *
 * @sample androidx.compose.animation.samples.AnimatedVisibilityWithBooleanVisibleParamNoReceiver
 * @see AnimatedVisibility
 */
public enum class EnterExitState {
    /** The initial state of a custom enter animation in [AnimatedVisibility].. */
    PreEnter,

    /**
     * The `Visible` state is the target state of a custom *enter* animation, also the initial state
     * of a custom *exit* animation in [AnimatedVisibility].

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-268-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 303–336)

     */
    Visible,

    /** Target state of a custom *exit* animation in [AnimatedVisibility]. */
    PostExit,
}

/**
 * [AnimatedVisibility] composable animates the appearance and disappearance of its content, as
 * [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The [visibleState]
 * can also be used to observe the state of [AnimatedVisibility]. For example: `visibleState.isIdle`
 * indicates whether all the animations have finished in [AnimatedVisibility], and
 * `visibleState.currentState` returns the initial state of the current animations.
 *
 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-303-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 337–371)

 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
 *
 * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
 * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
 * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also
 * animate the parent and siblings if they rely on the size of appearing/disappearing content. When
 * the [AnimatedVisibility] composable is put in a [Row] or a [Column], the default enter and exit
 * transitions are tailored to that particular container. See [RowScope.AnimatedVisibility] and
 * [ColumnScope.AnimatedVisibility] for details.
 *
 * @sample androidx.compose.animation.samples.AnimatedVisibilityLazyColumnSample
 * @param visibleState defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding by
 *   default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking by
 *   default
 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on the value of [visibleState]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibility
 * @see Transition.AnimatedVisibility
 * @see AnimatedVisibilityScope
 */
@Composable
public fun AnimatedVisibility(

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-337-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 36–70)

import androidx.compose.runtime.Composable
import androidx.compose.runtime.computedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.layout
import androidx.compose.ui.platform.debugInspectorInfo
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastMap
import androidx.compose.ui.util.fastMaxOfOrDefault
import kotlin.math.max

/**
 * [AnimatedVisibility] composable animates the appearance and disappearance of its content, as
 * [visible] value changes. Different [EnterTransition]s and [ExitTransition]s can be defined in
 * [enter] and [exit] for the appearance and disappearance animation. There are 4 types of
 * [EnterTransition] and [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter
 * transitions can be combined using `+`. Same for exit transitions. The order of the combination
 * does not matter, as the transition animations will start simultaneously. See [EnterTransition]
 * and [ExitTransition] for details on the three types of transition.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 372–404)

    visibleState: MutableTransitionState<Boolean>,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandIn(),
    exit: ExitTransition = fadeOut() + shrinkOut(),
    label: String = "AnimatedVisibility",
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val transition = rememberTransition(visibleState, label)
    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * [RowScope.AnimatedVisibility] composable animates the appearance and disappearance of its content
 * as [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The default
 * [enter] and [exit] transitions are tailored specific to the [Row] layout. See more details below.
 * The [visibleState] can also be used to observe the state of [AnimatedVisibility]. For example:
 * `visibleState.isIdle` indicates whether all the animations have finished in [AnimatedVisibility],
 * and `visibleState.currentState` returns the initial state of the current animations.
 *
 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * The default [enter] and [exit] transition is configured based on the horizontal layout of a
 * [Row]. [enter] defaults to a combination of fading in and expanding the content horizontally.
 * (The end of the content will be the leading edge as the content expands to its full width.) And
 * [exit] defaults to shrinking the content horizontally with the end of the content being the
 * leading edge while fading out. The expanding and shrinking will likely also animate the parent
 * and siblings in the row since they rely on the size of appearing/disappearing content.
 *

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-372-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 405–439)

 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
 *
 * @param visibleState defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
 *   vertically by default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
 *   vertically by default
 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on the value of [visibleState]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibility
 * @see Transition.AnimatedVisibility

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-405-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 440–474)

 * @see AnimatedVisibilityScope
 */
@Composable
public fun RowScope.AnimatedVisibility(
    visibleState: MutableTransitionState<Boolean>,
    modifier: Modifier = Modifier,
    enter: EnterTransition = expandHorizontally() + fadeIn(),
    exit: ExitTransition = shrinkHorizontally() + fadeOut(),
    label: String = "AnimatedVisibility",
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val transition = rememberTransition(visibleState, label)
    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * [ColumnScope.AnimatedVisibility] composable animates the appearance and disappearance of its
 * content as [visibleState]'s [targetState][MutableTransitionState.targetState] changes. The
 * default [enter] and [exit] transitions are tailored specific to the [Column] layout. See more
 * details below. The [visibleState] can also be used to observe the state of [AnimatedVisibility].
 * For example: `visibleState.isIdle` indicates whether all the animations have finished in
 * [AnimatedVisibility], and `visibleState.currentState` returns the initial state of the current
 * animations.
 *
 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * The default [enter] and [exit] transition is configured based on the vertical layout of a
 * [Column]. [enter] defaults to a combination of fading in and expanding the content vertically.
 * (The bottom of the content will be the leading edge as the content expands to its full height.)
 * And the [exit] defaults to shrinking the content vertically with the bottom of the content being

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-440-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 475–503)

 * the leading edge while fading out. The expanding and shrinking will likely also animate the
 * parent and siblings in the column since they rely on the size of appearing/disappearing content.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. Both `currentState` and `targetState` will be `false` for [visibleState].
 *
 * @sample androidx.compose.animation.samples.AVColumnScopeWithMutableTransitionState
 * @param visibleState defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
 *   vertically by default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
 *   vertically by default

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-475-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 504–538)

 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on of [visibleState]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibility
 * @see Transition.AnimatedVisibility
 * @see AnimatedVisibilityScope
 */
@Composable
public fun ColumnScope.AnimatedVisibility(
    visibleState: MutableTransitionState<Boolean>,
    modifier: Modifier = Modifier,
    enter: EnterTransition = expandVertically() + fadeIn(),
    exit: ExitTransition = shrinkVertically() + fadeOut(),
    label: String = "AnimatedVisibility",
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val transition = rememberTransition(visibleState, label)
    AnimatedVisibilityImpl(transition, { it }, modifier, enter, exit, content = content)
}

/**
 * This extension function creates an [AnimatedVisibility] composable as a child Transition of the
 * given Transition. This means: 1) the enter/exit transition is now triggered by the provided
 * [Transition]'s [targetState][Transition.targetState] change. When the targetState changes, the
 * visibility will be derived using the [visible] lambda and [Transition.targetState]. 2) The
 * enter/exit transitions, as well as any custom enter/exit animations defined in
 * [AnimatedVisibility] are now hoisted to the parent Transition. The parent Transition will wait
 * for all of them to finish before it considers itself finished (i.e. [Transition.currentState] =
 * [Transition.targetState]), and subsequently removes the content in the exit case.
 *

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-504-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 539–567)

 * Different [EnterTransition]s and [ExitTransition]s can be defined in [enter] and [exit] for the
 * appearance and disappearance animation. There are 4 types of [EnterTransition] and
 * [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be combined
 * using `+`. Same for exit transitions. The order of the combination does not matter, as the
 * transition animations will start simultaneously. See [EnterTransition] and [ExitTransition] for
 * details on the three types of transition.
 *
 * Aside from these three types of [EnterTransition] and [ExitTransition], [AnimatedVisibility] also
 * supports custom enter/exit animations. Some use cases may benefit from custom enter/exit
 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See [EnterExitState] for an example of custom animations.
 * These custom animations will be running along side of the built-in animations specified in
 * [enter] and [exit]. In cases where the enter/exit animation needs to be completely customized,
 * [enter] and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as
 * needed. [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it
 * considers itself idle. [content] will only be removed after all the (built-in and custom) exit
 * animations have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed.
 *
 * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
 * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
 * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-539-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 568–602)

 * animate the parent and siblings if they rely on the size of appearing/disappearing content.
 *
 * @sample androidx.compose.animation.samples.AddAnimatedVisibilityToGenericTransitionSample
 * @param visible defines whether the content should be visible based on transition state T
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding
 *   vertically by default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking
 *   vertically by default
 * @param content Content to appear or disappear based on the visibility derived from the
 *   [Transition.targetState] and the provided [visible] lambda
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibilityScope
 * @see Transition.AnimatedVisibility
 */
@Composable
public fun <T> Transition<T>.AnimatedVisibility(
    visible: (T) -> Boolean,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandIn(),
    exit: ExitTransition = shrinkOut() + fadeOut(),
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
): Unit =
    AnimatedVisibilityImpl(
        transition = this,
        visible = visible,
        modifier = modifier,
        enter = enter,
        exit = exit,
        mutableTransform = null,

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-568-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 603–635)

        content = content,
    )

/**
 * [AnimatedVisibility] can be used to animate the appearance and disappearance of its content as
 * the [Transition] state changes.
 *
 * [visible] defines whether the content should be visible based on transition state T.
 *
 * [modifier] modifier for the [Layout] created to contain the [content]
 *
 * [enter] EnterTransition(s) used for the appearing animation, fading in while expanding vertically
 * by default
 *
 * [exit] ExitTransition(s) used for the disappearing animation, fading out while shrinking
 * vertically by default
 *
 * [mutableTransform] A block to control the visual transformations during the deferred phase (e.g.,
 * for predictive back gestures) before the main transition begins. This is only active if the
 * [Transition] was created using [rememberDeferredTransition] with [DeferredTransitionState]. By
 * default, this is `null`, meaning no manual transformations are applied and properties remain at
 * the transition's initial values during the deferred phase. This phase starts when
 * [DeferredTransitionState.defer] is called and ends when [DeferredTransitionState.animateTo] is
 * called to start the automatic transition. During this phase, you can manually manipulate the
 * content's transformations (like [TransformScope.alpha], [TransformScope.scale],
 * [TransformScope.offset], and [TransformScope.veil]). When a [MutableTransform] is provided,
 * properties that are not manually set default to their resting values during the deferred phase.
 * Once the transition starts, the manually applied transformations are handed off to the configured
 * [enter] and [exit] transitions. For exiting content, a "sustain unless specified" policy is
 * applied: if an exit transition (e.g. `fadeOut`) is specified, the hand-off will animate towards
 * the target value of that transition. However, if no exit transition is specified for a given
 * property (e.g. `slideOut` is missing), that property will sustain its last manual value until the
 * entire transition completes. While in the deferred phase, entering content remains in the

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-603-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 636–670)

 * [EnterExitState.PreEnter] state, and exiting content remains in the [EnterExitState.Visible]
 * state.
 *
 * @sample androidx.compose.animation.samples.DeferredAnimatedVisibilitySample
 *
 * [content] Content to appear or disappear based on the visibility derived from the
 * [Transition.targetState] and the provided [visible] lambda
 *
 * @sample androidx.compose.animation.samples.AddAnimatedVisibilityToGenericTransitionSample
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibilityScope
 */
@Composable
public fun <T> DeferredTransition<T>.DeferredAnimatedVisibility(
    visible: (T) -> Boolean,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandIn(),
    exit: ExitTransition = shrinkOut() + fadeOut(),
    mutableTransform: MutableTransform? = null,
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    AnimatedVisibilityImpl(
        transition = this,
        visible = visible,
        modifier = modifier,
        enter = enter,
        exit = exit,
        mutableTransform = mutableTransform,
        content = content,
    )

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-636-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 671–705)

}

/**
 * This is the scope for the content of [AnimatedVisibility]. In this scope, direct and indirect
 * children of [AnimatedVisibility] will be able to define their own enter/exit transitions using
 * the built-in options via [Modifier.animateEnterExit]. They will also be able define custom
 * enter/exit animations using the [transition] object. [AnimatedVisibility] will ensure both custom
 * and built-in enter/exit animations finish before it considers itself idle, and subsequently
 * removes its content in the case of exit.
 *
 * __Note:__ Custom enter/exit animations that are created *independent* of the
 * [AnimatedVisibilityScope.transition] will have no guarantee to finish when exiting, as
 * [AnimatedVisibility] would have no visibility of such animations.
 *
 * @sample androidx.compose.animation.samples.AVScopeAnimateEnterExit
 */
@JvmDefaultWithCompatibility
public interface AnimatedVisibilityScope {
    /**
     * [transition] allows custom enter/exit animations to be specified. It will run simultaneously
     * with the built-in enter/exit transitions specified in [AnimatedVisibility].
     */
    public val transition: Transition<EnterExitState>

    /**
     * [animateEnterExit] modifier can be used for any direct or indirect children of
     * [AnimatedVisibility] to create a different enter/exit animation than what's specified in
     * [AnimatedVisibility]. The visual effect of these children will be a combination of the
     * [AnimatedVisibility]'s animation and their own enter/exit animations.
     *
     * [enter] and [exit] defines different [EnterTransition]s and [ExitTransition]s that will be
     * used for the appearance and disappearance animation. There are 4 types of [EnterTransition]
     * and [ExitTransition]: Fade, Expand/Shrink, Scale and Slide. The enter transitions can be
     * combined using `+`. Same for exit transitions. The order of the combination does not matter,
     * as the transition animations will start simultaneously. See [EnterTransition] and

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-671-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 706–740)

     * [ExitTransition] for details on the three types of transition.
     *
     * By default, the enter transition will be a [fadeIn] of the content. And the exit transition
     * will be fading out the content using [fadeOut].
     *
     * In some cases it may be desirable to have [AnimatedVisibility] apply no animation at all for
     * enter and/or exit, such that children of [AnimatedVisibility] can each have their distinct
     * animations. To achieve this, [EnterTransition.None] and/or [ExitTransition.None] can be used
     * for [AnimatedVisibility].
     *
     * @sample androidx.compose.animation.samples.AnimateEnterExitPartialContent
     */
    public fun Modifier.animateEnterExit(
        enter: EnterTransition = fadeIn(),
        exit: ExitTransition = fadeOut(),
        label: String = "animateEnterExit",
    ): Modifier =
        composed(
            inspectorInfo =
                debugInspectorInfo {
                    name = "animateEnterExit"
                    properties["enter"] = enter
                    properties["exit"] = exit
                    properties["label"] = label
                }
        ) {
            this.then(
                transition.createEnterExitModifier(
                    updateEnterExitModifierState(transition, enter, exit),
                    label = label,
                )
            )
        }
}


Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-706-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 71–98)

 * animations on shape, scale, color, etc. Custom enter/exit animations can be created using the
 * `Transition<EnterExitState>` object from the [AnimatedVisibilityScope] (i.e.
 * [AnimatedVisibilityScope.transition]). See the second sample code snippet below for example.
 * These custom animations will be running alongside of the built-in animations specified in [enter]
 * and [exit]. In cases where the enter/exit animation needs to be completely customized, [enter]
 * and/or [exit] can be specified as [EnterTransition.None] and/or [ExitTransition.None] as needed.
 * [AnimatedVisibility] will wait until *all* of enter/exit animations to finish before it considers
 * itself idle. [content] will only be removed after all the (built-in and custom) exit animations
 * have finished.
 *
 * [AnimatedVisibility] creates a custom [Layout] for its content. The size of the custom layout is
 * determined by the largest width and largest height of the children. All children will be aligned
 * to the top start of the [Layout].
 *
 * __Note__: Once the exit transition is finished, the [content] composable will be removed from the
 * tree, and disposed. If there's a need to observe the state change of the enter/exit transition
 * and follow up additional action (e.g. remove data, sequential animation, etc), consider the
 * AnimatedVisibility API variant that takes a [MutableTransitionState] parameter.
 *
 * By default, the enter transition will be a combination of [fadeIn] and [expandIn] of the content
 * from the bottom end. And the exit transition will be shrinking the content towards the bottom end
 * while fading out (i.e. [fadeOut] + [shrinkOut]). The expanding and shrinking will likely also
 * animate the parent and siblings if they rely on the size of appearing/disappearing content. When
 * the [AnimatedVisibility] composable is put in a [Row] or a [Column], the default enter and exit
 * transitions are tailored to that particular container. See [RowScope.AnimatedVisibility] and
 * [ColumnScope.AnimatedVisibility] for details.
 *
 * Here are two examples of [AnimatedVisibility]: one using the built-in enter/exit transition, the

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 741–775)

internal class AnimatedVisibilityScopeImpl
internal constructor(override var transition: Transition<EnterExitState>) :
    AnimatedVisibilityScope {
    internal val targetSize = mutableStateOf(IntSize.Zero)
}

/**
 * RowScope and ColumnScope AnimatedVisibility extensions and AnimatedVisibility without a receiver
 * converge here. AnimatedVisibilityImpl sets up 2 things: 1) It adds a modifier to report 0 size in
 * lookahead when animating out. 2) It sets up a criteria for when content should be disposed.
 */
@Composable
internal fun <T> AnimatedVisibilityImpl(
    transition: Transition<T>,
    visible: (T) -> Boolean,
    modifier: Modifier,
    enter: EnterTransition,
    exit: ExitTransition,
    mutableTransform: MutableTransform? = null,
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    AnimatedEnterExitImpl(
        transition = transition,
        visible = visible,
        modifier =
            modifier.layout { measurable, constraints ->
                val placeable = measurable.measure(constraints)
                val (w, h) =
                    if (isLookingAhead && !visible(transition.targetState)) {
                        IntSize.Zero
                    } else {
                        IntSize(placeable.width, placeable.height)
                    }
                layout(w, h) { placeable.place(0, 0) }
            },

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-741-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 776–810)

        enter = enter,
        exit = exit,
        shouldDisposeBlock = { current, target -> current == target && target == PostExit },
        mutableTransformData = mutableTransform,
        content = content,
    )
}

/** Observes lookahead size. */
internal fun interface OnLookaheadMeasured {
    fun invoke(size: IntSize)
}

@OptIn(InternalAnimationApi::class)
@Composable
internal fun <T> AnimatedEnterExitImpl(
    transition: Transition<T>,
    visible: (T) -> Boolean,
    modifier: Modifier,
    enter: EnterTransition,
    exit: ExitTransition,
    shouldDisposeBlock: (EnterExitState, EnterExitState) -> Boolean,
    onLookaheadMeasured: OnLookaheadMeasured? = null,
    mutableTransformData: MutableTransform? = null,
    forceVisible: Boolean = false,
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val localPendingTargetState = transition.pendingTargetState

    if (
        forceVisible ||
            visible(transition.targetState) ||
            visible(transition.currentState) ||
            (localPendingTargetState != null && visible(localPendingTargetState)) ||
            transition.isSeeking ||

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-776-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 811–845)

            transition.hasInitialValueAnimations
    ) {
        val childTransition =
            transition.createChildTransition(label = "EnterExitTransition") {
                transition.targetEnterExit(visible, it)
            }

        // Hoist the active enter/exit tracking to this scope to survive the temporary disposal
        // of the Layout and its modifiers when an exit transition finishes. If an interruption
        // occurs (e.g. A -> B -> A) after the layout for A has been removed, the hoisted
        // tracking preserves the original exit boundaries. Without this, the tracking would
        // re-initialize with the new parameters (which could be ExitTransition.None in
        // AnimatedContent), causing the animation to lose its start/end values and snap.
        val modifierState =
            updateEnterExitModifierState(childTransition, enter, exit, mutableTransformData)

        val shouldDisposeAfterExit by
            remember(childTransition, shouldDisposeBlock) {
                computedStateOf {
                    childTransition.exitFinished &&
                        shouldDisposeBlock(
                            childTransition.currentState,
                            childTransition.targetState,
                        )
                }
            }

        if (!childTransition.exitFinished || !shouldDisposeAfterExit) {
            val scope = remember(childTransition) { AnimatedVisibilityScopeImpl(childTransition) }
            Layout(
                content = { scope.content() },
                modifier =
                    modifier.then(
                        childTransition
                            .createEnterExitModifier(

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-811-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 846–880)

                                modifierState,
                                provideTransformState = transition is DeferredTransition<*>,
                                label = "Built-in",
                            )
                            .then(
                                if (onLookaheadMeasured != null) {
                                    Modifier.layout { measurable, constraints ->
                                        measurable.measure(constraints).run {
                                            if (isLookingAhead) {
                                                onLookaheadMeasured.invoke(IntSize(width, height))
                                            }
                                            layout(width, height) { place(0, 0) }
                                        }
                                    }
                                } else Modifier
                            )
                    ),
                measurePolicy = remember { AnimatedEnterExitMeasurePolicy(scope) },
            )
        }
    }
}

private val Transition<EnterExitState>.exitFinished
    get() = currentState == PostExit && targetState == PostExit

private class AnimatedEnterExitMeasurePolicy(val scope: AnimatedVisibilityScopeImpl) :
    MeasurePolicy {
    var hasLookaheadOccurred = false

    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        var maxWidth = 0

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-846-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 881–915)

        var maxHeight = 0
        val placeables = measurables.fastMap {
            it.measure(constraints).apply {
                maxWidth = max(maxWidth, width)
                maxHeight = max(maxHeight, height)
            }
        }
        // Position the children.
        if (isLookingAhead) {
            hasLookaheadOccurred = true
            scope.targetSize.value = IntSize(maxWidth, maxHeight)
        } else if (!hasLookaheadOccurred) {
            // Not in lookahead scope.
            scope.targetSize.value = IntSize(maxWidth, maxHeight)
        }
        return layout(maxWidth, maxHeight) { placeables.fastForEach { it.place(0, 0) } }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastMaxOfOrDefault(0) { it.minIntrinsicWidth(height) }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) = measurables.fastMaxOfOrDefault(0) { it.minIntrinsicHeight(width) }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastMaxOfOrDefault(0) { it.maxIntrinsicWidth(height) }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-881-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 916–950)

        width: Int,
    ) = measurables.fastMaxOfOrDefault(0) { it.maxIntrinsicHeight(width) }
}

// This converts Boolean visible to EnterExitState
@Composable
internal fun <T> Transition<T>.targetEnterExit(
    visible: (T) -> Boolean,
    targetState: T,
): EnterExitState =
    key(this) {
        if (this.isSeeking) {
            if (visible(targetState)) {
                Visible
            } else {
                if (visible(this.currentState)) {
                    PostExit
                } else {
                    PreEnter
                }
            }
        } else {
            val hasBeenVisible = remember { mutableStateOf(false) }
            val localPendingTargetState = pendingTargetState

            if (
                visible(currentState) ||
                    (localPendingTargetState != null && visible(localPendingTargetState))
            ) {
                hasBeenVisible.value = true
            }

            if (visible(targetState)) {
                EnterExitState.Visible
            } else if (localPendingTargetState != null && visible(localPendingTargetState)) {

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-916-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 951–959)

                EnterExitState.PreEnter
            } else if (hasBeenVisible.value) {
                EnterExitState.PostExit
            } else {
                EnterExitState.PreEnter
            }
        }
    }


Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-951-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)

## androidx.compose.animation AnimatedVisibility.kt source (lines 99–133)

 * other using a custom enter/exit animation.
 *
 * @sample androidx.compose.animation.samples.FullyLoadedTransition
 *
 * The example blow shows how a custom enter/exit animation can be created using the Transition
 * object (i.e. Transition<EnterExitState>) from [AnimatedVisibilityScope].
 *
 * @sample androidx.compose.animation.samples.AnimatedVisibilityWithBooleanVisibleParamNoReceiver
 * @param visible defines whether the content should be visible
 * @param modifier modifier for the [Layout] created to contain the [content]
 * @param enter EnterTransition(s) used for the appearing animation, fading in while expanding by
 *   default
 * @param exit ExitTransition(s) used for the disappearing animation, fading out while shrinking by
 *   default
 * @param label A label to differentiate from other animations in Android Studio animation preview.
 * @param content Content to appear or disappear based on the value of [visible]
 * @see EnterTransition
 * @see ExitTransition
 * @see fadeIn
 * @see expandIn
 * @see fadeOut
 * @see shrinkOut
 * @see AnimatedVisibilityScope
 * @see CapturedAnimatedVisibility
 */
@Composable
public fun AnimatedVisibility(
    visible: Boolean,
    modifier: Modifier = Modifier,
    enter: EnterTransition = fadeIn() + expandIn(),
    exit: ExitTransition = shrinkOut() + fadeOut(),
    label: String = "AnimatedVisibility",
    content: @Composable() AnimatedVisibilityScope.() -> Unit,
) {
    val transition = updateTransition(visible, label)

Sources: [live-androidx-animation-animation-animation-animatedvisibility-lines-99-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedVisibility.kt)
