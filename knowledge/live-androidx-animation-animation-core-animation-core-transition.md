---
type: reference
title: androidx.compose.animation.core Transition.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1
    endLine: 35
    sha256: 13697f7a90e777712b44e91ffcc15d50dc28b398595d160eac56637a66edf2c6
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

      @file:OptIn(InternalAnimationApi::class)

      package androidx.compose.animation.core

      import androidx.annotation.FloatRange
      import androidx.annotation.RestrictTo
      import androidx.collection.MutableObjectList
      import androidx.compose.animation.core.internal.JvmDefaultWithCompatibility
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.DisposableEffect
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.derivedStateOf
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableFloatStateOf
      import androidx.compose.runtime.mutableLongStateOf
      import androidx.compose.runtime.mutableStateListOf
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1016-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1016
    endLine: 1050
    sha256: c639edcfa3f94bb7a8a6bd6c005cfcc2330ba1f785a816901bae793b612bcc9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  transition.updatePendingTarget(transitionState.pendingTargetState)
              }
          }
          DisposableEffect(transition) {
              onDispose {
                  // Clean up on the way out, to ensure the observers are not stuck in an in-between
                  // state.
                  transition.onDisposed()
              }
          }
          return transition
      }

      /**
       * Creates a [Transition] and puts it in the [currentState][MutableTransitionState.currentState] of
       * the provided [transitionState]. Whenever the [targetState][MutableTransitionState.targetState] of
       * the [transitionState] changes, the [Transition] will animate to the new target state.
       *
       * __Remember__: The provided [transitionState] needs to be [remember]ed.
       *
       * Compared to the [rememberTransition] variant that takes a targetState, this function supports a
       * different initial state than the first targetState. Here is an example:
       *
       * @sample androidx.compose.animation.core.samples.InitialStateSample
       *
       * In most cases, it is recommended to reuse the same [transitionState] that is [remember]ed, such
       * that [Transition] preserves continuity when [targetState][MutableTransitionState.targetState] is
       * changed. However, in some rare cases it is more critical to immediately *snap* to a state change
       * (e.g. in response to a user interaction). This can be achieved by creating a new
       * [transitionState]:
       *
       * @sample androidx.compose.animation.core.samples.DoubleTapToLikeSample
       */
      @Deprecated(
          "Use rememberTransition() instead",
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1051-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1051
    endLine: 1085
    sha256: 46923668b5e8256181f0d1b147b8e78d84d20e45672f131ae233df8e8874813a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          replaceWith = ReplaceWith("rememberTransition(transitionState, label)"),
      )
      @Composable
      public fun <T> updateTransition(
          transitionState: MutableTransitionState<T>,
          label: String? = null,
      ): Transition<T> {
          val state: TransitionState<T> = transitionState
          return rememberTransition(state, label)
      }

      /**
       * [Transition] manages all the child animations on a state level. Child animations can be created
       * in a declarative way using [Transition.animateFloat], [Transition.animateValue],
       * [animateColor][androidx.compose.animation.animateColor] etc. When the [targetState] changes,
       * [Transition] will automatically start or adjust course for all its child animations to animate to
       * the new target values defined for each animation.
       *
       * After arriving at [targetState], [Transition] will be triggered to run if any child animation
       * changes its target value (due to their dynamic target calculation logic, such as theme-dependent
       * values).
       *
       * @sample androidx.compose.animation.core.samples.GestureAnimationSample
       * @see rememberTransition
       * @see Transition.animateFloat
       * @see Transition.animateValue
       * @see androidx.compose.animation.animateColor
       */
      // TODO: Support creating Transition outside of composition and support imperative use of Transition
      @Stable
      public sealed class Transition<S>
      protected constructor(
          private val transitionState: TransitionState<S>,
          @Suppress("BanRestrictTo")
          @get:RestrictTo(RestrictTo.Scope.LIBRARY)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 106
    endLine: 140
    sha256: 7cdc47a6fec707459011d71fbafc7e25b66095371c1ae84e719c43c0178cf6bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * target.
       *
       * While in the deferred phase (initiated by [defer]), the transition holds the new target as a
       * [pendingTargetState]. The actual [targetState] remains unchanged, keeping the transition in its
       * current visual state. Once [animateTo] is called, the [pendingTargetState] is cleared and the
       * transition proceeds to the new [targetState], triggering its automatic animations.
       *
       * @param initialState The initial state of the transition.
       * @sample androidx.compose.animation.core.samples.DeferredTransitionSample
       */
      public class DeferredTransitionState<S>(initialState: S) : TransitionState<S>() {
          override var currentState: S by mutableStateOf(initialState)

          override var targetState: S by mutableStateOf(initialState)

          /**
           * The target state that the transition will eventually animate to once the deferred phase ends.
           *
           * This value is set when [defer] is called and cleared when [animateTo] is called, at which
           * point [targetState] will be updated to the new state.
           */
          public var pendingTargetState: S? by mutableStateOf(null)
              internal set

          /**
           * Updates the [pendingTargetState] and initiates the deferred phase.
           *
           * During this phase, the transition's [targetState] remains unchanged, keeping the transition
           * in its current visual state. However, the new target is exposed via [pendingTargetState],
           * signaling to transition-aware components that a state change is pending. They can then use
           * this information to perform early setup or apply custom logic for the pending state before
           * the automatic transition is eventually started via [animateTo].
           *
           * If [defer] is called while an animation is already in progress (i.e., [currentState] !=
           * [targetState]), the animation will continue toward its current [targetState] while
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1086-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1086
    endLine: 1120
    sha256: fc28e01b9b93a846fb1a9482aab70b989c496ac9729583e58b06bf858e80bd9d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val parentTransition: Transition<*>?,
          label: String? = null,
      ) {
          private val _rawLabel: String? = label

          /** An optional label for differentiating different transitions in Android Studio. */
          public val label: String?
              get() {
                  val parent = parentTransition
                  val parentLabel = parent?.label
                  return when {
                      parentLabel != null && _rawLabel != null -> "$parentLabel > $_rawLabel"
                      parentLabel != null -> parentLabel
                      else -> _rawLabel
                  }
              }

          /**
           * Current state of the transition. This will always be the initialState of the transition until
           * the transition is finished. Once the transition is finished, [currentState] will be set to
           * [targetState]. [currentState] is backed by a [MutableState].
           */
          public val currentState: S
              get() = transitionState.currentState

          /**
           * Target state of the transition. This will be read by all child animations to determine their
           * most up-to-date target values.
           */
          public var targetState: S by mutableStateOf(currentState)
              internal set

          /**
           * Pending target state of the transition. This is the state that the transition is waiting to
           * animate to. It is non-null only when a deferred update is in progress.
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1121-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1121
    endLine: 1155
    sha256: a884a22def41ef45cab67dab08f9eeceb6440b5f0291ea473e399e056bd8f983
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public var pendingTargetState: S? by mutableStateOf(null)
              private set

          @PublishedApi
          internal fun updatePendingTarget(value: S?) {
              val previousPending = pendingTargetState
              val wasPendingCleared =
                  previousPending != null && value == null && this.targetState == currentState
              pendingTargetState = value
              if (wasPendingCleared) {
                  segment = SegmentImpl(previousPending, targetState)
                  // This handles the case where a deferred phase is interrupted by an
                  // animateTo(original state) call. By setting the currentState to the
                  // pendingTargetState, the transition system picks up any manual transformations
                  // from the deferred phase and seamlessly animates them back to the original state.
                  // If no transformations were made during the deferred phase, it will immediately
                  // settle.
                  transitionState.currentState = previousPending
                  if (!isRunning) {
                      updateChildrenNeeded = true
                  }
                  _animations.toList().fastForEach { it.resetAnimation() }
              }
          }

          /**
           * [segment] contains the initial state and the target state of the currently on-going
           * transition.
           */
          public var segment: Segment<S> by mutableStateOf(SegmentImpl(currentState, currentState))
              private set

          /** Indicates whether there is any animation running in the transition. */
          public val isRunning: Boolean
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1156-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1156
    endLine: 1190
    sha256: 22298c1f31c14baf11b9858f1817115a18570490abb1ffbb1535f19948bc7293
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              get() = startTimeNanos != AnimationConstants.UnspecifiedTime

          private var _playTimeNanos by mutableLongStateOf(0L)

          /**
           * Play time in nano-seconds. [playTimeNanos] is always non-negative. It starts from 0L at the
           * beginning of the transition and increment until all child animations have finished.
           */
          @Suppress("BanRestrictTo")
          @get:RestrictTo(RestrictTo.Scope.LIBRARY)
          @set:RestrictTo(RestrictTo.Scope.LIBRARY)
          public var playTimeNanos: Long
              get() {
                  return parentTransition?.playTimeNanos ?: _playTimeNanos
              }
              set(value) {
                  if (parentTransition == null) {
                      _playTimeNanos = value
                  }
              }

          // startTimeNanos is in real frame time nanos for the root transition and
          // scaled frame time for child transitions (as offset from the root start)
          internal var startTimeNanos by mutableLongStateOf(AnimationConstants.UnspecifiedTime)

          // This gets calculated every time child is updated/added
          private var updateChildrenNeeded: Boolean by mutableStateOf(false)

          private val _animations = mutableStateListOf<TransitionAnimationState<*, *>>()
          private val _transitions = mutableStateListOf<Transition<*>>()

          /** List of child transitions in a [Transition]. */
          public val transitions: List<Transition<*>>
              get() = _transitions
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1191-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1191
    endLine: 1225
    sha256: 1550a6438b411c64ed141ee97101bd0a54e49cd1b28b6680680eb67c60d280cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** List of [TransitionAnimationState]s that are in a [Transition]. */
          public val animations: List<TransitionAnimationState<*, *>>
              get() = _animations

          // Seeking related
          @Suppress("BanRestrictTo")
          @get:RestrictTo(RestrictTo.Scope.LIBRARY)
          @set:RestrictTo(RestrictTo.Scope.LIBRARY)
          public var isSeeking: Boolean by mutableStateOf(false)
              internal set

          internal var lastSeekedTimeNanos = 0L

          /**
           * Used internally to know when a [SeekableTransitionState] is animating initial values after
           * [SeekableTransitionState.animateTo] or [SeekableTransitionState.seekTo] has redirected a
           * transition prior to it completing. This is important for knowing when child transitions must
           * be maintained after a parent target state has changed, but the child target state hasn't
           * changed.
           */
          @get:Suppress("GetterSetterNames") // Don't care about Java name for this property
          @InternalAnimationApi
          public val hasInitialValueAnimations: Boolean
              get() =
                  _animations.toList().fastAny { it.initialValueState != null } ||
                      _transitions.toList().fastAny { it.hasInitialValueAnimations }

          /**
           * Total duration of the [Transition], accounting for all the animations and child transitions
           * defined on the [Transition].
           *
           * Note: The total duration is subject to change as more animations/child transitions get added
           * to [Transition]. It's strongly recommended to query this *after* all the animations in the
           * [Transition] are set up.
           */
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1226-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1226
    endLine: 1260
    sha256: b59b3a080922f90b0b678ef626bd2a7b6a55f33a975b3f0b3cdd68b66bfdc50a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val totalDurationNanos: Long by derivedStateOf { calculateTotalDurationNanos() }

          private fun calculateTotalDurationNanos(): Long {
              var maxDurationNanos = 0L
              _animations.toList().fastForEach {
                  maxDurationNanos = max(maxDurationNanos, it.durationNanos)
              }
              _transitions.toList().fastForEach {
                  maxDurationNanos = max(maxDurationNanos, it.calculateTotalDurationNanos())
              }
              return maxDurationNanos
          }

          @OptIn(InternalAnimationApi::class)
          internal fun onFrame(frameTimeNanos: Long, durationScale: Float) {
              if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
                  onTransitionStart(frameTimeNanos)
              }

              val deltaT = frameTimeNanos - startTimeNanos
              val scaledPlayTimeNanos =
                  if (durationScale <= 0f || durationScale.isNaN()) {
                      deltaT
                  } else {
                      (deltaT / durationScale.toDouble()).roundToLong()
                  }
              playTimeNanos = scaledPlayTimeNanos
              onFrame(scaledPlayTimeNanos, durationScale <= 0f || durationScale.isNaN())
          }

          internal fun onFrame(scaledPlayTimeNanos: Long, scaleToEnd: Boolean) {
              if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
                  onTransitionStart(scaledPlayTimeNanos)
              } else if (!transitionState.isRunning) {
                  transitionState.isRunning = true
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1261-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1261
    endLine: 1295
    sha256: d3646bd27fd83fc19c2292179c4e8fc371309e721c47e6bb0295abca2ee9de80
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
              updateChildrenNeeded = false

              var allFinished = true
              // Pulse new playtime
              _animations.toList().fastForEach {
                  if (!it.isFinished) {
                      it.onPlayTimeChanged(scaledPlayTimeNanos, scaleToEnd)
                  }
                  // Check isFinished flag again after the animation pulse
                  if (!it.isFinished) {
                      allFinished = false
                  }
              }
              _transitions.toList().fastForEach {
                  if (it.targetState != it.currentState) {
                      it.onFrame(scaledPlayTimeNanos, scaleToEnd)
                  }
                  if (it.targetState != it.currentState) {
                      allFinished = false
                  }
              }
              if (allFinished) {
                  onTransitionEnd()
              }
          }

          init {
              transitionState.transitionConfigured(this)
          }

          // onTransitionStart and onTransitionEnd are symmetric. Both are called from onFrame
          internal fun onTransitionStart(frameTimeNanos: Long) {
              startTimeNanos = frameTimeNanos
              transitionState.isRunning = true
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1296-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1296
    endLine: 1330
    sha256: 45049c8d428b9bd7590658993abc4cf311ff58357e7ff7fa327b9d6a36083197
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          // Called when the Transition is being disposed to clean up any state
          internal fun onDisposed() {
              onTransitionEnd()
              transitionState.transitionRemoved()
          }

          // onTransitionStart and onTransitionEnd are symmetric. Both are called from onFrame
          @OptIn(InternalAnimationApi::class)
          internal fun onTransitionEnd() {
              startTimeNanos = AnimationConstants.UnspecifiedTime
              if (
                  transitionState is MutableTransitionState || transitionState is DeferredTransitionState
              ) {
                  transitionState.currentState = targetState
              }
              playTimeNanos = 0
              transitionState.isRunning = false
              _transitions.toList().fastForEach { it.onTransitionEnd() }
          }

          /**
           * This allows tools to set the transition (between initial and target state) to a specific
           * [playTimeNanos].
           *
           * Note: This function is intended for tooling use only.
           *
           * __Caveat:__ Once [initialState] or [targetState] changes, it needs to take a whole
           * composition pass for all the animations and child transitions to recompose with the new
           * [initialState] and [targetState]. Subsequently all the animations will be updated to the
           * given play time.
           *
           * __Caveat:__ This function puts [Transition] in a manual playtime setting mode. From then on
           * the [Transition] will not resume normal animation runs.
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1331-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1331
    endLine: 1365
    sha256: 00960a43e1836ae6f55bc1663b2bc5a8e211bd272eee582542a40f57e4931d43
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          @Suppress("BanRestrictTo")
          @RestrictTo(RestrictTo.Scope.LIBRARY_GROUP_PREFIX)
          @OptIn(InternalAnimationApi::class)
          @JvmName("seek")
          public fun setPlaytimeAfterInitialAndTargetStateEstablished(
              initialState: S,
              targetState: S,
              playTimeNanos: Long,
          ) {
              // Reset running state
              startTimeNanos = AnimationConstants.UnspecifiedTime
              transitionState.isRunning = false
              if (!isSeeking || this.currentState != initialState || this.targetState != targetState) {
                  // Reset all child animations
                  if (
                      currentState != initialState &&
                          (transitionState is MutableTransitionState ||
                              transitionState is DeferredTransitionState)
                  ) {
                      transitionState.currentState = initialState
                  }
                  this.targetState = targetState
                  isSeeking = true
                  segment = SegmentImpl(initialState, targetState)
              }

              _transitions.toList().fastForEach {
                  @Suppress("UNCHECKED_CAST")
                  (it as Transition<Any>).let {
                      if (it.isSeeking) {
                          it.setPlaytimeAfterInitialAndTargetStateEstablished(
                              it.currentState,
                              it.targetState,
                              playTimeNanos,
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1366-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1366
    endLine: 1400
    sha256: ea68883d3a78ebcf90bf7833c462574f7235c310f5df16a7272acaf14946ed97
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                          )
                      }
                  }
              }

              _animations.toList().fastForEach { it.seekTo(playTimeNanos) }
              lastSeekedTimeNanos = playTimeNanos
          }

          internal fun addTransition(transition: Transition<*>) = _transitions.add(transition)

          internal fun removeTransition(transition: Transition<*>) = _transitions.remove(transition)

          internal fun addAnimation(animation: TransitionAnimationState<*, *>) =
              _animations.add(animation)

          internal fun removeAnimation(animation: TransitionAnimationState<*, *>) {
              _animations.remove(animation)
          }

          // This target state should only be used to modify "mutableState"s, as it could potentially
          // roll back. The
          internal fun updateTarget(targetState: S) {
              // This is needed because child animations rely on this target state and the state pair to
              // update their animation specs
              val currentTargetState = this.targetState
              if (currentTargetState != targetState) {
                  // Starting state should be the "next" state when waypoints are impl'ed
                  segment = SegmentImpl(currentTargetState, targetState)
                  transitionState.currentState = currentTargetState
                  this.targetState = targetState
                  if (!isRunning) {
                      updateChildrenNeeded = true
                  }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1401-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1401
    endLine: 1435
    sha256: 17b6bc2068f084b205380e00b7b5cbc3896dcf60d7a5ad27274a160179bbb3b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  // If target state is changed, reset all the animations to be re-created in the
                  // next frame w/ their new target value. Child animations target values are updated in
                  // the side effect that may not have happened when this function in invoked.
                  // Copying to a list to avoid ConcurrentModificationException since resetAnimation()
                  // can modify the animations list. This operation is trivial with SnapshotStateList.
                  @Suppress("ListIterator") val animations = animations.toList()
                  animations.fastForEach { it.resetAnimation() }
              }
          }

          // This should only be called if PlayTime comes from clock directly, instead of from a parent
          // Transition.
          @Suppress("ComposableNaming")
          @Composable
          internal fun animateTo(targetState: S) {
              if (!isSeeking) {
                  updateTarget(targetState)
                  // target != currentState adds the effect into the tree in the same frame as
                  // target change.
                  val runFrameLoop by
                      remember(this) {
                          derivedStateOf {
                              this.targetState != currentState || isRunning || updateChildrenNeeded
                          }
                      }
                  if (runFrameLoop) {
                      // We're using a composition-obtained scope + DisposableEffect here to give us
                      // control over coroutine dispatching
                      val coroutineScope = rememberCoroutineScope()
                      DisposableEffect(coroutineScope, this) {
                          // Launch the coroutine undispatched so the block is executed in the current
                          // frame. This is important as this initializes the state.
                          coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                              val durationScale = coroutineContext.durationScale
                              while (isActive) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 141
    endLine: 175
    sha256: ba32e2270f1e494a3aaf9984335951374fd856b08bcd9d4c34348f620f8548ac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [pendingTargetState] is set. This allows components to respond to the pending state early,
           * potentially concurrently with the ongoing animation.
           *
           * @param targetState The state the transition should eventually animate to.
           */
          public fun defer(targetState: S) {
              if (this.targetState == targetState) {
                  pendingTargetState = null
              } else {
                  pendingTargetState = targetState
              }
          }

          /**
           * Clears the [pendingTargetState] and updates the [targetState] to the provided [targetState],
           * ending the deferred phase and starting the automatic transition animation.
           *
           * Note: The [targetState] provided here does not need to match the previous
           * [pendingTargetState]. If a different state is provided, the transition will animate directly
           * to this new state, bypassing the previously deferred target.
           *
           * @param targetState The final target state for the transition.
           */
          public fun animateTo(targetState: S) {
              pendingTargetState = null
              this.targetState = targetState
          }

          override fun transitionConfigured(transition: Transition<S>) {}

          override fun transitionRemoved() {}
      }

      /**
       * A [Transition] that supports a deferred phase, created via [rememberDeferredTransition].
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1436-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1436
    endLine: 1470
    sha256: 6b60e09f00d71196dbbc1146a3c2ed634aee91d31afae27b3967014968a3e571
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  withFrameNanos {
                                      // This check is very important, as isSeeking may be changed
                                      // off-band between the last check in composition and this callback
                                      // which happens in the animation callback the next frame.
                                      if (!isSeeking) {
                                          onFrame(it / AnimationDebugDurationScale, durationScale)
                                      }
                                  }
                              }
                          }
                          onDispose {}
                      }
                  }
              }
          }

          /**
           * Used by [SeekableTransitionState] to seek the current transition animation to
           * [playTimeNanos].
           */
          internal fun seekAnimations(playTimeNanos: Long) {
              if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
                  startTimeNanos = playTimeNanos
              }
              this.playTimeNanos = playTimeNanos
              updateChildrenNeeded = false

              // Pulse new playtime
              _animations.toList().fastForEach { it.seekTo(playTimeNanos) }
              _transitions.toList().fastForEach {
                  if (it.targetState != it.currentState) {
                      it.seekAnimations(playTimeNanos)
                  }
              }
          }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1471-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1471
    endLine: 1505
    sha256: c46f505be4627e04befcd1ec4e2985c83c2938d33e421cba98fbb9ec0b2e71ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /**
           * Changes the existing animations to be initial value animations. An existing animation was
           * interrupted, so the current animation is used only for the initial values. The current
           * animation is then changed to an unchanging animation that is only moved by the initial value.
           */
          internal fun setInitialAnimations(
              animationState: SeekableTransitionState.SeekingAnimationState
          ) {
              _animations.toList().fastForEach { it.setInitialValueAnimation(animationState) }
              _transitions.toList().fastForEach { it.setInitialAnimations(animationState) }
          }

          /**
           * Clears all animations. The state has been forced directly to a new value and the animations
           * are no longer valid.
           */
          internal fun resetAnimationFraction(fraction: Float) {
              _animations.toList().fastForEach { it.resetAnimationValue(fraction) }
              _transitions.toList().fastForEach { it.resetAnimationFraction(fraction) }
          }

          /** Clears all initial value animations. */
          internal fun clearInitialAnimations() {
              _animations.toList().fastForEach { it.clearInitialAnimation() }
              _transitions.toList().fastForEach { it.clearInitialAnimations() }
          }

          /**
           * Changes the progress of the initial value.
           *
           * @return true if the animationState is animating anything or false if it isn't animating
           *   anything.
           */
          internal fun updateInitialValues() {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1506-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1506
    endLine: 1540
    sha256: 279087782b1d72559f81687ba7e334cbb7999b7cd56f7511f01c29e15159f242
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              _animations.toList().fastForEach { it.updateInitialValue() }
              _transitions.toList().fastForEach { it.updateInitialValues() }
          }

          override fun toString(): String {
              return animations.fastFold("Transition animation values: ") { acc, anim -> "$acc$anim, " }
          }

          @OptIn(InternalAnimationApi::class)
          private fun onChildAnimationUpdated() {
              updateChildrenNeeded = true
              if (isSeeking) {
                  // Update total duration
                  var maxDurationNanos = 0L
                  _animations.toList().fastForEach {
                      maxDurationNanos = max(maxDurationNanos, it.durationNanos)
                      it.seekTo(lastSeekedTimeNanos)
                  }
                  // TODO: Is update duration the only thing that needs to be done during seeking to
                  //  accommodate update children?
                  updateChildrenNeeded = false
              }
          }

          /**
           * Each animation created using [animateFloat], [animateDp], etc is represented as a
           * [TransitionAnimationState] in [Transition].
           */
          @Stable
          public inner class TransitionAnimationState<T, V : AnimationVector>
          internal constructor(
              initialValue: T,
              initialVelocityVector: V,
              public val typeConverter: TwoWayConverter<T, V>,
              public val label: String,
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1541-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1541
    endLine: 1575
    sha256: 5a5ea0dc5803b1221e3a294cf12f932e4136e36cf0431a0d5063da9c4e5c1590
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) : State<T> {

              // Changed during composition, may rollback
              private var targetValue: T by mutableStateOf(initialValue)

              private val defaultSpring = spring<T>()

              /**
               * [AnimationSpec] that is used for current animation run. This can change when
               * [targetState] changes.
               */
              public var animationSpec: FiniteAnimationSpec<T> by mutableStateOf(defaultSpring)
                  private set

              /**
               * All the animation configurations including initial value/velocity & target value for
               * animating from [currentState] to [targetState] are captured in [animation].
               */
              public var animation: TargetBasedAnimation<T, V> by
                  mutableStateOf(
                      TargetBasedAnimation(
                          animationSpec,
                          typeConverter,
                          initialValue,
                          targetValue,
                          initialVelocityVector,
                      )
                  )
                  private set

              internal var initialValueState: SeekableTransitionState.SeekingAnimationState? = null
              private var initialValueAnimation: TargetBasedAnimation<T, V>? = null

              internal var isFinished: Boolean by mutableStateOf(true)
              internal var resetSnapValue by mutableFloatStateOf(NoReset)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1576
    endLine: 1610
    sha256: f075ace33809a247c2301bf597211cc490cdbf03752bc9dd6af820efe857f315
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /**
               * When the target state has changed, but the target value remains the same, the initial
               * value animation completely controls the animated value. When this flag is `true`, the
               * [animation] can be ignored and only the [initialValueState] is needed to determine the
               * value. When this is `false`, if there is an [initialValueState], it is used only for
               * adjusting the initial value of [animation].
               */
              private var useOnlyInitialValue = false

              // Changed during animation, no concerns of rolling back
              override var value: T by mutableStateOf(initialValue)
                  internal set

              private var velocityVector: V = initialVelocityVector
              internal var durationNanos by mutableLongStateOf(animation.durationNanos)

              private var isSeeking = false

              internal fun onPlayTimeChanged(playTimeNanos: Long, scaleToEnd: Boolean) {
                  val playTime = if (scaleToEnd) animation.durationNanos else playTimeNanos
                  value = animation.getValueFromNanos(playTime)
                  velocityVector = animation.getVelocityVectorFromNanos(playTime)
                  if (animation.isFinishedFromNanos(playTime)) {
                      isFinished = true
                  }
              }

              internal fun seekTo(playTimeNanos: Long) {
                  if (resetSnapValue != NoReset) {
                      return
                  }
                  isSeeking = true // SeekableTransitionState won't use interrupted animation spec
                  if (animation.targetValue == animation.initialValue) {
                      // This is likely an interrupted animation and the initial value is changing, but
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1611-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1611
    endLine: 1645
    sha256: 48d872e24b9ec960b13b049e9e656c9487f36530a561736ecf1954436aaaa361
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // the target value remained the same. The initial value animation has the target
                      // value, so only the initial value animation is changing the value.
                      value = animation.targetValue
                  } else {
                      // TODO: unlikely but need to double check that animation returns the correct values
                      // when play time is way past their durations.
                      value = animation.getValueFromNanos(playTimeNanos)
                      velocityVector = animation.getVelocityVectorFromNanos(playTimeNanos)
                  }
              }

              /**
               * Updates the initial value animation. When a SeekableTransitionState transition is
               * interrupted, the ongoing animation is moved to changing the initial value. The starting
               * point of the animation is then animated toward the value that would be set at the target
               * state, while the current value is controlled by seeking or animation.
               */
              internal fun updateInitialValue() {
                  val animState = initialValueState ?: return
                  val animation = initialValueAnimation ?: return

                  val initialPlayTimeNanos =
                      (
                          // Single-precision floating point is not sufficient here as it only has about 7
                          // decimal digits of precision. We are dealing with nanos which has at least 9
                          // decimal digits in most cases.
                          animState.durationNanos * animState.value.toDouble())
                          .roundToLong()
                  val initialValue = animation.getValueFromNanos(initialPlayTimeNanos)
                  if (useOnlyInitialValue) {
                      this.animation.mutableTargetValue = initialValue
                  }
                  this.animation.mutableInitialValue = initialValue
                  durationNanos = this.animation.durationNanos
                  if (resetSnapValue == ResetNoSnap || useOnlyInitialValue) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1646-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1646
    endLine: 1680
    sha256: c0d80dd9aecf6a05a8021ebe0c06730137673c8245c50f27980eba9fe2a6dc61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      value = initialValue
                  } else {
                      seekTo(playTimeNanos)
                  }
                  if (initialPlayTimeNanos >= animState.durationNanos) {
                      initialValueState = null
                      initialValueAnimation = null
                  } else {
                      animState.isComplete = false
                  }
              }

              private val interruptionSpec: FiniteAnimationSpec<T>

              init {
                  val visibilityThreshold: T? =
                      defaultVisibilityThresholdFor(typeConverter)?.let {
                          val vector = typeConverter.convertToVector(initialValue)
                          for (id in 0 until vector.size) {
                              vector[id] = it
                          }
                          typeConverter.convertFromVector(vector)
                      }
                  interruptionSpec = spring(visibilityThreshold = visibilityThreshold)
              }

              private fun updateAnimation(initialValue: T = value, isInterrupted: Boolean = false) {
                  if (initialValueAnimation?.targetValue == targetValue) {
                      // This animation didn't change the target value, so let the initial value animation
                      // take care of it.
                      animation =
                          TargetBasedAnimation(
                              interruptionSpec,
                              typeConverter,
                              initialValue,
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1681-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1681
    endLine: 1715
    sha256: 169b2711aefc60461be90478bc6ea79062c4d1a5b0628651498d781037b9b337
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              initialValue,
                              velocityVector.newInstance(), // 0 velocity
                          )
                      useOnlyInitialValue = true
                      durationNanos = animation.durationNanos
                      return
                  }
                  val currentSpec = animationSpec
                  val specWithoutDelay =
                      if (isInterrupted && !isSeeking) {
                          // When interrupted, use the default spring, unless the spec is also a spring
                          // or specifies its own interruption spec.
                          when (currentSpec) {
                              is SpringSpec<*> -> currentSpec
                              is InterruptionAwareAnimationSpec<T> -> currentSpec.interruptionSpec
                              else -> interruptionSpec
                          }
                      } else {
                          currentSpec
                      }
                  val spec =
                      if (playTimeNanos <= 0L) {
                          specWithoutDelay
                      } else {
                          delayed(specWithoutDelay, playTimeNanos)
                      }
                  animation =
                      TargetBasedAnimation(spec, typeConverter, initialValue, targetValue, velocityVector)
                  durationNanos = animation.durationNanos
                  useOnlyInitialValue = false
                  onChildAnimationUpdated()
              }

              internal fun resetAnimation() {
                  resetSnapValue = ResetNoSnap
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1716-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1716
    endLine: 1750
    sha256: 817b162b94422dcffa78844f0f698c4ce0301e852ccc67fcacf186411d7a2b69
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }

              /**
               * Forces the value to the given fraction or reset value. If [fraction] is
               * [ResetAnimationSnapCurrent] or [ResetAnimationSnapTarget], the animated values are
               * directly moved to the start or end of the animation.
               */
              internal fun resetAnimationValue(fraction: Float) {
                  if (fraction == ResetAnimationSnapCurrent || fraction == ResetAnimationSnapTarget) {
                      val initAnim = initialValueAnimation
                      if (initAnim != null) {
                          animation.mutableInitialValue = initAnim.targetValue
                          initialValueState = null
                          initialValueAnimation = null
                      }

                      val animationValue =
                          if (fraction == ResetAnimationSnapCurrent) {
                              animation.initialValue
                          } else {
                              animation.targetValue
                          }
                      animation.mutableInitialValue = animationValue
                      animation.mutableTargetValue = animationValue
                      value = animationValue
                      durationNanos = animation.durationNanos
                  } else {
                      resetSnapValue = fraction
                  }
              }

              internal fun setInitialValueAnimation(
                  animationState: SeekableTransitionState.SeekingAnimationState
              ) {
                  if (animation.targetValue != animation.initialValue) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1751-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1751
    endLine: 1785
    sha256: 20226d9b509be79f1e2111f9130ab1abf38323356f124bb83535a06c8f9997cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // Continue the animation from the current position to the target
                      initialValueAnimation = animation
                      initialValueState = animationState
                  }
                  animation =
                      TargetBasedAnimation(
                          interruptionSpec,
                          typeConverter,
                          value,
                          value,
                          velocityVector.newInstance(), // 0 velocity
                      )
                  durationNanos = animation.durationNanos
                  useOnlyInitialValue = true
              }

              internal fun clearInitialAnimation() {
                  initialValueAnimation = null
                  initialValueState = null
                  useOnlyInitialValue = false
              }

              override fun toString(): String {
                  return "current value: $value, target: $targetValue, spec: $animationSpec"
              }

              // This gets called *during* composition
              @OptIn(InternalAnimationApi::class)
              internal fun updateTargetValue(
                  targetValue: T,
                  animationSpec: FiniteAnimationSpec<T>,
                  forcedInitialValue: T? = null,
                  forcedInitialVelocity: V? = null,
              ) {
                  if (useOnlyInitialValue && targetValue == initialValueAnimation?.targetValue) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 176
    endLine: 210
    sha256: b2d4ed0e1d6d8fa4d014f8e12a3084c782691fa843d75fb71ef275e94596ac49
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * [DeferredTransition] extends the standard [Transition] to allow manual manipulation of
       * transformation properties before the automatic transition begins. This is particularly useful for
       * coordinating multi-stage animations like predictive back gestures.
       */
      @Stable
      public class DeferredTransition<S>
      internal constructor(transitionState: DeferredTransitionState<S>, label: String? = null) :
          Transition<S>(transitionState, null, label)

      /**
       * Creates and remembers a [DeferredTransition] for a given [DeferredTransitionState].
       *
       * A [DeferredTransition] allows for a two-stage state update:
       * 1. **Deferred Phase:** Initiated by [DeferredTransitionState.defer]. The transition's
       *    `targetState` remains unchanged, while the new target is exposed via `pendingTargetState`.
       *    This allows higher-level components to implement custom behavior (e.g., manual gesture
       *    tracking) while the automatic transition is "held".
       * 2. **Automatic Phase:** Initiated by [DeferredTransitionState.animateTo]. The
       *    `pendingTargetState` is cleared and `targetState` is updated, starting the automatic
       *    transition animations.
       *
       * @param transitionState The [DeferredTransitionState] that manages the current and target states.
       * @param label An optional label for the transition to be displayed in Android Studio's Animation
       *   Preview.
       * @return A [DeferredTransition] that will update whenever [transitionState] changes.
       * @sample androidx.compose.animation.core.samples.DeferredTransitionSample
       */
      @Composable
      public fun <T> rememberDeferredTransition(
          transitionState: DeferredTransitionState<T>,
          label: String? = null,
      ): DeferredTransition<T> {
          return rememberTransition(transitionState as TransitionState<T>, label) as DeferredTransition<T>
      }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1786-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1786
    endLine: 1820
    sha256: df022ff81e7be06f3a9812325789eed70f94a743f919109992e96b36a781dd42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      return // we're already animating to the target value through the initial value
                  }
                  if (
                      this.targetValue == targetValue &&
                          resetSnapValue == NoReset &&
                          (forcedInitialValue == null || forcedInitialValue == animation.initialValue)
                  ) {
                      return // nothing to change. Just continue the existing animation.
                  }
                  this.targetValue = targetValue
                  this.animationSpec = animationSpec
                  val initialValue =
                      forcedInitialValue
                          ?: if (resetSnapValue == ResetAnimationSnap) targetValue else value
                  if (forcedInitialValue != null) {
                      value = initialValue
                      if (forcedInitialVelocity != null) {
                          velocityVector = forcedInitialVelocity
                      }
                  }
                  updateAnimation(initialValue, isInterrupted = !isFinished && forcedInitialValue == null)
                  isFinished = resetSnapValue == ResetAnimationSnap
                  // This is needed because the target change could happen during a transition
                  if (resetSnapValue >= 0f) {
                      val duration = animation.durationNanos
                      value = animation.getValueFromNanos((duration * resetSnapValue).toLong())
                  } else if (resetSnapValue == ResetAnimationSnap) {
                      value = targetValue
                  }
                  useOnlyInitialValue = false
                  resetSnapValue = NoReset
              }

              // This gets called *during* composition
              internal fun updateInitialAndTargetValue(
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1821-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1821
    endLine: 1855
    sha256: 6756bd00a5246912e217fe1b84cb9dfb93a2f3705bb244e69a80e2533bdc815c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  initialValue: T,
                  targetValue: T,
                  animationSpec: FiniteAnimationSpec<T>,
              ) {
                  this.targetValue = targetValue
                  this.animationSpec = animationSpec
                  if (animation.initialValue == initialValue && animation.targetValue == targetValue) {
                      return
                  }
                  updateAnimation(initialValue)
              }
          }

          private class SegmentImpl<S>(override val initialState: S, override val targetState: S) :
              Segment<S> {
              override fun equals(other: Any?): Boolean {
                  return other is Segment<*> &&
                      initialState == other.initialState &&
                      targetState == other.targetState
              }

              override fun hashCode(): Int {
                  return initialState.hashCode() * 31 + targetState.hashCode()
              }
          }

          /**
           * [Segment] holds [initialState] and [targetState], which are the beginning and end of a
           * transition. These states will be used to obtain the animation spec that will be used for this
           * transition from the child animations.
           */
          @JvmDefaultWithCompatibility
          public interface Segment<S> {
              /** Initial state of a Transition Segment. This is the state that transition starts from. */
              public val initialState: S
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1856-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1856
    endLine: 1890
    sha256: ec4f75f1f1be2e2e36438f53216e8a74130d060257e9202d912a791d34330ed8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /** Target state of a Transition Segment. This is the state that transition will end on. */
              public val targetState: S

              /**
               * Returns whether the provided state matches the [initialState] && the provided
               * [targetState] matches [Segment.targetState].
               */
              public infix fun S.isTransitioningTo(targetState: S): Boolean {
                  return this == initialState && targetState == this@Segment.targetState
              }
          }

          /**
           * [DeferredAnimation] can be constructed using [Transition.createDeferredAnimation] during
           * composition and initialized later. It is useful for animations, the target values for which
           * are unknown at composition time (e.g. layout size/position, etc).
           *
           * Once a [DeferredAnimation] is created, it can be configured and updated as needed using
           * [DeferredAnimation.animate] method.
           */
          @Suppress("BanRestrictTo")
          @RestrictTo(RestrictTo.Scope.LIBRARY)
          public inner class DeferredAnimation<T, V : AnimationVector>
          internal constructor(
              public val typeConverter: TwoWayConverter<T, V>,
              public val label: String,
          ) {
              internal var data: DeferredAnimationData<T, V>? by mutableStateOf(null)

              internal inner class DeferredAnimationData<T, V : AnimationVector>(
                  val animation: Transition<S>.TransitionAnimationState<T, V>,
                  var transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
                  var targetValueByState: (state: S) -> T,
              ) : State<T> {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1891-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1891
    endLine: 1925
    sha256: b823190a6b11ab0a5362f5171d16ae132804e65c075319a9bc367113e3ab0267
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  fun updateAnimationStates(
                      segment: Segment<S>,
                      forcedInitialValue: T? = null,
                      forcedInitialVelocity: V? = null,
                  ) {
                      val targetValue = targetValueByState(segment.targetState)
                      if (isSeeking) {
                          val initialValue = targetValueByState(segment.initialState)
                          // In the case of seeking, we also need to update initial value as needed
                          animation.updateInitialAndTargetValue(
                              initialValue,
                              targetValue,
                              segment.transitionSpec(),
                          )
                      } else {
                          animation.updateTargetValue(
                              targetValue,
                              segment.transitionSpec(),
                              forcedInitialValue,
                              forcedInitialVelocity,
                          )
                      }
                  }

                  override val value: T
                      get() {
                          updateAnimationStates(segment)
                          return animation.value
                      }
              }

              /**
               * [DeferredAnimation] allows the animation setup to be deferred until a later time after
               * composition. [animate] can be used to set up a [DeferredAnimation]. Like other Transition
               * animations such as [Transition.animateFloat], [DeferredAnimation] also expects
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1926-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1926
    endLine: 1960
    sha256: 4b473a66d9b853e91b63c65ab5db4f84555a9a368ee4b9a5cef1fddac6dc662b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               * [transitionSpec] and [targetValueByState] for the mapping from target state to animation
               * spec and target value, respectively.
               */
              public fun animate(
                  transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
                  targetValueByState: (state: S) -> T,
              ): State<T> = animate(transitionSpec, null, null, targetValueByState)

              /**
               * [DeferredAnimation] allows the animation setup to be deferred until a later time after
               * composition. [animate] can be used to set up a [DeferredAnimation]. Like other Transition
               * animations such as [Transition.animateFloat], [DeferredAnimation] also expects
               * [transitionSpec] and [targetValueByState] for the mapping from target state to animation
               * spec and target value, respectively.
               *
               * This overload of [animate] also allows forcing an initial value and/or velocity for the
               * animation, which is useful for handoff from a manual deferred phase to the automatic
               * transition phase.
               *
               * @param transitionSpec mapping from segment to animation spec
               * @param forcedInitialValue optional initial value to use for the animation, instead of the
               *   current value
               * @param forcedInitialVelocity optional initial velocity to use for the animation
               * @param targetValueByState mapping from target state to target value
               */
              public fun animate(
                  transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
                  forcedInitialValue: T? = null,
                  forcedInitialVelocity: V? = null,
                  targetValueByState: (state: S) -> T,
              ): State<T> {
                  val animData: DeferredAnimationData<T, V> =
                      data
                          ?: DeferredAnimationData(
                                  TransitionAnimationState(
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1961-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1961
    endLine: 1995
    sha256: 9ffb312d46cb3cddcd1479407b3980ef76ef3b9c240f5a6f10bb8f29a6b189a2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      targetValueByState(currentState),
                                      typeConverter.createZeroVectorFrom(
                                          targetValueByState(currentState)
                                      ),
                                      typeConverter,
                                      label,
                                  ),
                                  transitionSpec,
                                  targetValueByState,
                              )
                              .apply {
                                  data = this
                                  addAnimation(this.animation)
                              }
                  return animData.apply {
                      // Update animtion data with the latest mapping
                      this.targetValueByState = targetValueByState
                      this.transitionSpec = transitionSpec

                      updateAnimationStates(segment, forcedInitialValue, forcedInitialVelocity)
                  }
              }

              internal fun setupSeeking() {
                  data?.apply {
                      animation.updateInitialAndTargetValue(
                          targetValueByState(segment.initialState),
                          targetValueByState(segment.targetState),
                          segment.transitionSpec(),
                      )
                  }
              }
          }

          internal fun removeAnimation(deferredAnimation: DeferredAnimation<*, *>) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-1996-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 1996
    endLine: 2030
    sha256: 6f15201c43b50d24f6ff3798fbd7a938b8f4a781f825e0a511af2eaad72ac678
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              deferredAnimation.data?.animation?.let { removeAnimation(it) }
          }
      }

      @PublishedApi
      internal class TransitionInstance<S>(
          transitionState: TransitionState<S>,
          parentTransition: Transition<*>?,
          label: String? = null,
      ) : Transition<S>(transitionState, parentTransition, label) {

          @PublishedApi
          internal constructor(
              transitionState: TransitionState<S>,
              label: String? = null,
          ) : this(transitionState, null, label)

          internal constructor(
              initialState: S,
              label: String?,
          ) : this(MutableTransitionState(initialState), null, label)

          @PublishedApi
          internal constructor(
              transitionState: MutableTransitionState<S>,
              label: String? = null,
          ) : this(transitionState as TransitionState<S>, null, label)
      }

      // When a TransitionAnimation doesn't need to be reset
      private const val NoReset = -1f

      // When the animation needs to be changed because of a target update
      private const val ResetNoSnap = -2f
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2031-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2031
    endLine: 2065
    sha256: 5f94b8934b6d5559bfce1ce7e88a4dbfea024bade71dfbe797b0d34279d3a50f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      // When the animation should be reset to have the same start and end value
      private const val ResetAnimationSnap = -3f

      // Snap to the current state and set the initial and target values to the same thing
      private const val ResetAnimationSnapCurrent = -4f

      // Snap to the target state and set the initial and target values to the same thing
      private const val ResetAnimationSnapTarget = -5f

      /**
       * This creates a [Transition.DeferredAnimation], which will not animate until it is set up using
       * [Transition.DeferredAnimation.animate]. Once the animation is set up, it will animate from the
       * [currentState][Transition.currentState] to [targetState][Transition.targetState]. If the
       * [Transition] has already arrived at its target state at the time when the animation added, there
       * will be no animation.
       *
       * @param typeConverter A converter to convert any value of type [T] from/to an [AnimationVector]
       * @param label A label for differentiating this animation from others in android studio.
       */
      @Suppress("BanRestrictTo")
      @RestrictTo(RestrictTo.Scope.LIBRARY)
      @Composable
      public fun <S, T, V : AnimationVector> Transition<S>.createDeferredAnimation(
          typeConverter: TwoWayConverter<T, V>,
          label: String = "DeferredAnimation",
      ): Transition<S>.DeferredAnimation<T, V> {
          val lazyAnim = remember(this) { DeferredAnimation(typeConverter, label) }
          DisposableEffect(lazyAnim) { onDispose { removeAnimation(lazyAnim) } }
          if (isSeeking) {
              lazyAnim.setupSeeking()
          }
          return lazyAnim
      }

      /**
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2066-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2066
    endLine: 2100
    sha256: cfb3e113ef5eeb15d62026409285c75651ab8f935b1a58bef544c3759ea22ee7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [createChildTransition] creates a child Transition based on the mapping between parent state to
       * child state provided in [transformToChildState]. This serves the following purposes:
       * 1) Hoist the child transition state into parent transition. Therefore the parent Transition will
       *    be aware of whether there's any on-going animation due to the same target state change. This
       *    will further allow sequential animation to be set up when all animations have finished.
       * 2) Separation of concerns. The child transition can respresent a much more simplified state
       *    transition when, for example, mapping from an enum parent state to a Boolean visible state for
       *    passing further down the compose tree. The child composables hence can be designed around
       *    handling a more simple and a more relevant state change.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @sample androidx.compose.animation.core.samples.CreateChildTransitionSample
       */
      @Composable
      public inline fun <S, T> Transition<S>.createChildTransition(
          label: String = "ChildTransition",
          transformToChildState: @Composable (parentState: S) -> T,
      ): Transition<T> {
          val initialParentState = remember(this) { this.currentState }
          val initialState = transformToChildState(if (isSeeking) currentState else initialParentState)
          val targetState = transformToChildState(this.targetState)
          val childTransition = createChildTransitionInternal(initialState, targetState, label)
          if (!isSeeking) {
              val pendingTargetState = pendingTargetState?.let { transformToChildState(it) }
              childTransition.updatePendingTarget(pendingTargetState)
          }
          return childTransition
      }

      @PublishedApi
      @Composable
      internal fun <S, T> Transition<S>.createChildTransitionInternal(
          initialState: T,
          targetState: T,
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2101-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2101
    endLine: 2135
    sha256: 8f887d9d98e69c7fc50f22917a4b70d53db291fe21afb84e64c744bc871c1fb5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          childLabel: String,
      ): Transition<T> {
          val transition =
              remember(this) {
                  TransitionInstance(MutableTransitionState(initialState), this, childLabel)
              }

          DisposableEffect(transition) {
              addTransition(transition)
              onDispose { removeTransition(transition) }
          }

          if (isSeeking) {
              transition.setPlaytimeAfterInitialAndTargetStateEstablished(
                  initialState,
                  targetState,
                  this.lastSeekedTimeNanos,
              )
          } else {
              transition.updateTarget(targetState)
              transition.isSeeking = false
          }
          return transition
      }

      /**
       * Creates an animation of type [T] as a part of the given [Transition]. This means the states of
       * this animation will be managed by the [Transition]. [typeConverter] will be used to convert
       * between type [T] and [AnimationVector] so that the animation system knows how to animate it.
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 211
    endLine: 245
    sha256: a3b6194b6a8ed62386d497d3502e0b1eb2fd0d84f5612bb35e2e57c743dc605f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      internal const val AnimationDebugDurationScale = 1

      /**
       * Use with [rememberTransition] to create a [Transition] that can be dynamically targeted with
       * [MutableTransitionState] or seekable with [SeekableTransitionState].
       */
      public sealed class TransitionState<S> {
          /**
           * Current state of the transition. If there is an active transition, [currentState] and
           * [targetState] are different.
           */
          public abstract var currentState: S
              internal set

          /**
           * Target state of the transition. If this is the same as [currentState], no transition is
           * active.
           */
          public abstract var targetState: S
              internal set

          // Updated from Transition
          internal var isRunning: Boolean by mutableStateOf(false)

          internal abstract fun transitionConfigured(transition: Transition<S>)

          internal abstract fun transitionRemoved()
      }

      /**
       * This is used to prevent exhaustive `when` from limiting the use of [TransitionState] to only
       * [MutableState] and [SeekableTransitionState]. The developer must always have an `else`. It is
       * unlikely to be a concern, but this will alleviate any worries about expanding the subclasses of
       * [TransitionState].
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2136-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2136
    endLine: 2170
    sha256: c71eb54363002bd96a30e0392b94c8458c56e1d0bb324431589db46c599386f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       * @see updateTransition
       * @see rememberTransition
       * @see Transition.animateFloat
       * @see androidx.compose.animation.animateColor
       */
      @Composable
      public inline fun <S, T, V : AnimationVector> Transition<S>.animateValue(
          typeConverter: TwoWayConverter<T, V>,
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<T> = {
              spring()
          },
          label: String = "ValueAnimation",
          targetValueByState: @Composable (state: S) -> T,
      ): State<T> {

          val initialState =
              if (!isSeeking) {
                  // For non-seeking use cases, we can avoid reading currentState frequently by querying
                  // it only once when initializing TransitionAnimation.
                  remember(this) { Snapshot.withoutReadObservation { currentState } }
              } else {
                  currentState
              }
          val initialValue = targetValueByState(initialState)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2171-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2171
    endLine: 2205
    sha256: 3fd783484391fe565be86d14301d026689fe8375e3e6e52a0fb4c8af6b55940e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          // `targetState` is changed in composition in rememberTransition before consumed here. Due to
          // b/393642162, this consumption will cause a 2nd recomposition, meaning this read will cause
          // recomposition for both the first and second frame of the animation. As a temporary
          // workaround, `derivedStateOf` is added here to avoid recomposing when the state value is the
          // same.
          val targetValue = targetValueByState(remember(this) { derivedStateOf { targetState } }.value)
          val animationSpec = transitionSpec(remember(this) { derivedStateOf { segment } }.value)

          return createTransitionAnimation(initialValue, targetValue, animationSpec, typeConverter, label)
      }

      @PublishedApi
      @Composable
      internal fun <S, T, V : AnimationVector> Transition<S>.createTransitionAnimation(
          initialValue: T,
          targetValue: T,
          animationSpec: FiniteAnimationSpec<T>,
          typeConverter: TwoWayConverter<T, V>,
          label: String,
      ): State<T> {
          val transitionAnimation =
              remember(this) {
                  // Remember currently observes state reads in its calculation lambda, which leads to
                  // recomposition on some state changes even though the lambda will not be invoked again.
                  // Tracked at b/392921611. Until this is fixed, we need to explicitly disable state
                  // observation in remember.
                  Snapshot.withoutReadObservation {
                      // Initialize the animation state to initialState value, so if it's added during a
                      // transition run, it'll participate in the animation.
                      // This is preferred because it's easy to opt out - Simply adding new animation once
                      // currentState == targetState would opt out.
                      TransitionAnimationState(
                          initialValue,
                          typeConverter.createZeroVectorFrom(targetValue),
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2206-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2206
    endLine: 2240
    sha256: a0e4b4c5d0c67e30f8daec79a3733e1eb43035f0f9911fa28219d2f5196c96f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          typeConverter,
                          label,
                      )
                  }
              }
          UpdateInitialAndTargetValues(transitionAnimation, initialValue, targetValue, animationSpec)

          DisposableEffect(transitionAnimation) {
              addAnimation(transitionAnimation)
              onDispose { removeAnimation(transitionAnimation) }
          }
          return transitionAnimation
      }

      // This composable function is needed to contain recompositions caused by reads of the internal
      // animation states to an internal recomposition scope. Without this function, the caller of
      // animateValue gets recomposed when an animation starts.
      @Composable
      private fun <S, T, V : AnimationVector> Transition<S>.UpdateInitialAndTargetValues(
          transitionAnimation: Transition<S>.TransitionAnimationState<T, V>,
          initialValue: T,
          targetValue: T,
          animationSpec: FiniteAnimationSpec<T>,
      ) {
          if (isSeeking) {
              // In the case of seeking, we also need to update initial value as needed
              transitionAnimation.updateInitialAndTargetValue(initialValue, targetValue, animationSpec)
          } else {
              transitionAnimation.updateTargetValue(targetValue, animationSpec)
          }
      }

      // TODO: Remove noinline when b/174814083 is fixed.
      /**
       * Creates a Float animation as a part of the given [Transition]. This means the states of this
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2241-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2241
    endLine: 2275
    sha256: 5ca9fbca49f8bc3807c4152cafb2c680c0f40c2d8ab2d014d9cfda34844727dd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * @sample androidx.compose.animation.core.samples.AnimateFloatSample
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       * @see rememberTransition
       * @see updateTransition
       * @see Transition.animateValue
       * @see androidx.compose.animation.animateColor
       */
      @Composable
      public inline fun <S> Transition<S>.animateFloat(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Float> = {
              spring()
          },
          label: String = "FloatAnimation",
          targetValueByState: @Composable (state: S) -> Float,
      ): State<Float> = animateValue(Float.VectorConverter, transitionSpec, label, targetValueByState)

      /**
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2276-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2276
    endLine: 2310
    sha256: 9fb4d02936128b44e9d12bb099d422909b157976db3a231dae489b401b51c0b6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Creates a [Dp] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateDp(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Dp> = {
              spring(visibilityThreshold = Dp.VisibilityThreshold)
          },
          label: String = "DpAnimation",
          targetValueByState: @Composable (state: S) -> Dp,
      ): State<Dp> = animateValue(Dp.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates an [Offset] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2311-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2311
    endLine: 2345
    sha256: a9a9161f9cab5017bceb8725c941b802692d4d2abef0d7720e46597ba0d652cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateOffset(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Offset> = {
              spring(visibilityThreshold = Offset.VisibilityThreshold)
          },
          label: String = "OffsetAnimation",
          targetValueByState: @Composable (state: S) -> Offset,
      ): State<Offset> = animateValue(Offset.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates a [Size] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2346-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2346
    endLine: 2380
    sha256: 7f14e0c358f7c64032c3a81098da957345cdd61b358c7fad9a38f67e3acdb1e5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateSize(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Size> = {
              spring(visibilityThreshold = Size.VisibilityThreshold)
          },
          label: String = "SizeAnimation",
          targetValueByState: @Composable (state: S) -> Size,
      ): State<Size> = animateValue(Size.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates a [IntOffset] animation as a part of the given [Transition]. This means the states of
       * this animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2381-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2381
    endLine: 2415
    sha256: 9457a778f5b2bc41f90aea76935ee3e990450b8c38deed9cfa270442cf65400f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateIntOffset(
          noinline transitionSpec:
              @Composable
              Transition.Segment<S>.() -> FiniteAnimationSpec<IntOffset> =
              {
                  spring(visibilityThreshold = IntOffset(1, 1))
              },
          label: String = "IntOffsetAnimation",
          targetValueByState: @Composable (state: S) -> IntOffset,
      ): State<IntOffset> =
          animateValue(IntOffset.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates a [Int] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2416-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2416
    endLine: 2450
    sha256: d2a4e67ca9ddc0c4d273d11e796dcba7c4ed9a7a58c62d02b6713ff96c2235f6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateInt(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Int> = {
              spring(visibilityThreshold = 1)
          },
          label: String = "IntAnimation",
          targetValueByState: @Composable (state: S) -> Int,
      ): State<Int> = animateValue(Int.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates a [IntSize] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2451-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2451
    endLine: 2485
    sha256: 9fdc33a43addcfbc5488150073750b54165e7f786bda0c69c77b92a80ae9190c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public inline fun <S> Transition<S>.animateIntSize(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<IntSize> =
              {
                  spring(visibilityThreshold = IntSize(1, 1))
              },
          label: String = "IntSizeAnimation",
          targetValueByState: @Composable (state: S) -> IntSize,
      ): State<IntSize> = animateValue(IntSize.VectorConverter, transitionSpec, label, targetValueByState)

      /**
       * Creates a [Rect] animation as a part of the given [Transition]. This means the states of this
       * animation will be managed by the [Transition].
       *
       * [targetValueByState] is used as a mapping from a target state to the target value of this
       * animation. [Transition] will be using this mapping to determine what value to target this
       * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
       * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
       * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
       * [Transition] will start running again to ensure this animation reaches its new target smoothly.
       *
       * An optional [transitionSpec] can be provided to specify (potentially different) animation for
       * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
       * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
       * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
       * destinations.
       *
       * [label] is used to differentiate from other animations in the same transition in Android Studio.
       *
       * @return A [State] object, the value of which is updated by animation
       */
      @Composable
      public inline fun <S> Transition<S>.animateRect(
          noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Rect> = {
              spring(visibilityThreshold = Rect.VisibilityThreshold)
          },
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 246
    endLine: 280
    sha256: d81c4cd395ea6081014ba55db8ce60ae8ba4f1fb3ca607f5d3caac02dcf350f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       */
      private class PreventExhaustiveWhenTransitionState : TransitionState<Any?>() {
          override var currentState: Any?
              get() = null
              set(_) {}

          override var targetState: Any?
              get() = null
              set(_) {}

          override fun transitionConfigured(transition: Transition<Any?>) {}

          override fun transitionRemoved() {}
      }

      /**
       * MutableTransitionState contains two fields: [currentState] and [targetState]. [currentState] is
       * initialized to the provided initialState, and can only be mutated by a [Transition].
       * [targetState] is also initialized to initialState. It can be mutated to alter the course of a
       * transition animation that is created with the [MutableTransitionState] using
       * [rememberTransition]. Both [currentState] and [targetState] are backed by a [State] object.
       *
       * @sample androidx.compose.animation.core.samples.InitialStateSample
       * @see rememberTransition
       */
      public class MutableTransitionState<S>(initialState: S) : TransitionState<S>() {
          /**
           * Current state of the transition. [currentState] is initialized to the initialState that the
           * [MutableTransitionState] is constructed with.
           *
           * It will be updated by the Transition that is created with this [MutableTransitionState] when
           * the transition arrives at a new state.
           */
          override var currentState: S by mutableStateOf(initialState)
              internal set
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-2486-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 2486
    endLine: 2489
    sha256: dc9389c9cc55d4f1b30e0e1d2ed673bdb9ba33336b941d1c86626e8704dd66e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          label: String = "RectAnimation",
          targetValueByState: @Composable (state: S) -> Rect,
      ): State<Rect> = animateValue(Rect.VectorConverter, transitionSpec, label, targetValueByState)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 281
    endLine: 315
    sha256: 32b254f3a1b5132f1858da9ddd8e528d25410b9518f97acbb3f709c7df1a0928
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          /**
           * Target state of the transition. [targetState] is initialized to the initialState that the
           * [MutableTransitionState] is constructed with.
           *
           * It can be updated to a new state at any time. When that happens, the [Transition] that is
           * created with this [MutableTransitionState] will update its [Transition.targetState] to the
           * same and subsequently starts a transition animation to animate from the current values to the
           * new target.
           */
          override var targetState: S by mutableStateOf(initialState)
              public set

          /**
           * [isIdle] returns whether the transition has finished running. This will return false once the
           * [targetState] has been set to a different value than [currentState].
           *
           * @sample androidx.compose.animation.core.samples.TransitionStateIsIdleSample
           */
          public val isIdle: Boolean
              get() = (currentState == targetState) && !isRunning

          override fun transitionConfigured(transition: Transition<S>) {}

          override fun transitionRemoved() {}
      }

      /**
       * Lambda to call [SeekableTransitionState.onTotalDurationChanged] when the
       * [Transition.totalDurationNanos] has changed.
       */
      private val SeekableTransitionStateTotalDurationChanged: (SeekableTransitionState<*>) -> Unit = {
          it.onTotalDurationChanged()
      }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 316
    endLine: 350
    sha256: 642914c3bcebf2f980d1dc9385c0ad9a0730850feb3de71fedaf57d0fc27dfd0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /**
       * A [TransitionState] that can manipulate the progress of the [Transition] by seeking with [seekTo]
       * or animating with [animateTo].
       *
       * A [SeekableTransitionState] can only be used with one [Transition] instance. Once assigned, it
       * cannot be reassigned to a different [Transition] instance.
       *
       * @sample androidx.compose.animation.core.samples.SeekingAnimationSample
       */
      public class SeekableTransitionState<S>(initialState: S) : TransitionState<S>() {
          override var targetState: S by mutableStateOf(initialState)
              internal set

          override var currentState: S by mutableStateOf(initialState)
              internal set

          /**
           * The value of [targetState] that the composition knows about. Seeking cannot progress until
           * the composition's target state matches [targetState].
           */
          internal var composedTargetState = initialState

          /**
           * The Transition that this is associated with. SeekableTransitionState can only be used with
           * one Transition.
           */
          private var transition: Transition<S>? = null

          // Used for seekToFraction calculations to avoid allocation
          internal var totalDurationNanos = 0L

          private val recalculateTotalDurationNanos: () -> Unit = {
              totalDurationNanos = transition?.totalDurationNanos ?: 0L
          }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 351
    endLine: 385
    sha256: 14cd7917f43c76802c0adbd3baa08325f2b4ca1739cdbbf2ac3cb61928b83783
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          internal var snapshotStateObserver: SnapshotStateObserver? = null
              set(value) {
                  if (field != value) {
                      field?.clear(this)
                      field?.stop()
                      field = value
                      value?.start()
                      observeTotalDuration()
                  }
              }

          /**
           * The progress of the transition from [currentState] to [targetState] as a fraction of the
           * entire duration.
           *
           * If [targetState] and [currentState] are the same, [fraction] will be 0.
           */
          @get:FloatRange(from = 0.0, to = 1.0)
          public var fraction: Float by mutableFloatStateOf(0f)
              private set

          /** The continuation used when waiting for a composition. */
          internal var compositionContinuation: CancellableContinuation<S>? = null

          /**
           * Used to lock the [compositionContinuation] while modifying or checking its value. Also used
           * for locking the [composedTargetState].
           */
          internal val compositionContinuationMutex = Mutex()

          /** Used to prevent [snapTo], [seekTo], and [animateTo] from running simultaneously. */
          private val mutatorMutex = MutatorMutex()

          /**
           * When the animation is running, this contains the most recent frame time. When the animation
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 36
    endLine: 70
    sha256: bb2fe5cefa6c2255bf0400190a644ccfcdd1173f6d98244d8fe50622831fdb6b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberCoroutineScope
      import androidx.compose.runtime.setValue
      import androidx.compose.runtime.snapshots.Snapshot
      import androidx.compose.runtime.snapshots.SnapshotStateObserver
      import androidx.compose.runtime.withFrameNanos
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.util.fastAny
      import androidx.compose.ui.util.fastFold
      import androidx.compose.ui.util.fastForEach
      import kotlin.coroutines.coroutineContext
      import kotlin.coroutines.resume
      import kotlin.jvm.JvmName
      import kotlin.math.max
      import kotlin.math.roundToLong
      import kotlinx.coroutines.CancellableContinuation
      import kotlinx.coroutines.CancellationException
      import kotlinx.coroutines.CoroutineStart
      import kotlinx.coroutines.coroutineScope
      import kotlinx.coroutines.isActive
      import kotlinx.coroutines.launch
      import kotlinx.coroutines.suspendCancellableCoroutine
      import kotlinx.coroutines.sync.Mutex
      import kotlinx.coroutines.sync.withLock

      /**
       * This sets up a [Transition], and updates it with the target provided by [targetState]. When
       * [targetState] changes, [Transition] will run all of its child animations towards their target
       * values specified for the new [targetState]. Child animations can be dynamically added using
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 386
    endLine: 420
    sha256: 429777245a3849d48a0f99edae5f71b392deda34f8d7f40cb4128b4aa31317ce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * has stopped, this is [AnimationConstants.UnspecifiedTime].
           */
          private var lastFrameTimeNanos: Long = AnimationConstants.UnspecifiedTime

          /**
           * List of animation of initial values. The list should be empty when [seekTo], [snapTo], or
           * [animateTo] completes successfully.
           */
          private val initialValueAnimations = MutableObjectList<SeekingAnimationState>()

          /**
           * When [animateTo] is executing, this is non-null, providing the information being used to
           * animate its value. This will be null while seeking or after [snapTo].
           */
          private var currentAnimation: SeekingAnimationState? = null

          /** Lambda instance used for capturing the first frame of an animation. */
          private val firstFrameLambda: (Long) -> Unit = { frameTimeNanos ->
              lastFrameTimeNanos = frameTimeNanos
          }

          /**
           * Used in [animateOneFrameLambda], the duration scale must be set immediately prior to invoking
           * [withFrameNanos] with [animateOneFrameLambda].
           */
          private var durationScale: Float = 0f

          /**
           * True when the next animation frame is the first frame following
           * [waitForCompositionAfterTargetStateChange], so that main-thread time spent composing and
           * laying out the new target state does not advance the animation by multiple frames at once.
           */
          private var isFirstFrameAfterTargetStateComposition: Boolean = false

          /** Lambda instance used for animating a single frame within [withFrameNanos]. */
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 421
    endLine: 455
    sha256: a3212c127ec1d8c8691f0db24c09c8dd096f1496f3d1b4e5907b51fb67201416
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          private val animateOneFrameLambda: (Long) -> Unit = { frameTimeNanos ->
              val rawDelta =
                  if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                      0L
                  } else {
                      frameTimeNanos - lastFrameTimeNanos
                  }
              val delta =
                  if (isFirstFrameAfterTargetStateComposition) {
                      isFirstFrameAfterTargetStateComposition = false
                      rawDelta.coerceAtMost(MaxFirstFrameDeltaNanos)
                  } else {
                      rawDelta
                  }
              lastFrameTimeNanos = frameTimeNanos
              val deltaPlayTimeNanos =
                  if (durationScale <= 0f || durationScale.isNaN()) {
                      0L
                  } else {
                      (delta / durationScale.toDouble()).roundToLong()
                  }
              if (initialValueAnimations.isNotEmpty()) {
                  initialValueAnimations.forEach { animation ->
                      // updateInitialValues will set to false if the animation isn't
                      // complete
                      recalculateAnimationValue(animation, deltaPlayTimeNanos)
                      animation.isComplete = true
                  }
                  transition?.updateInitialValues()
                  initialValueAnimations.removeIf { it.isComplete }
              }
              val currentAnimation = currentAnimation
              if (currentAnimation != null) {
                  currentAnimation.durationNanos = totalDurationNanos
                  recalculateAnimationValue(currentAnimation, deltaPlayTimeNanos)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 456
    endLine: 490
    sha256: a424ebb25177b32580e9b2e213e0f05749451f86d57706312fb12c144ab4bb5b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  fraction = currentAnimation.value
                  if (currentAnimation.value == 1f) {
                      this@SeekableTransitionState.currentAnimation = null // all done!
                  }
                  seekToFraction()
              }
          }

          /**
           * Stops all animations, including the initial value animations and sets the [fraction] to `1`.
           */
          private fun endAllAnimations() {
              transition?.clearInitialAnimations()
              initialValueAnimations.clear()
              val current = currentAnimation
              if (current != null) {
                  currentAnimation = null
                  fraction = 1f
                  seekToFraction()
              }
          }

          /**
           * Starts the animation. It will advance both the currently-running animation and initial value
           * animations. If the previous animation was stopped ([seekTo] or [snapTo] or no previous
           * animation was running), then it will require one frame to capture the frame time before the
           * animation starts.
           */
          private suspend fun runAnimations() {
              if (initialValueAnimations.isEmpty() && currentAnimation == null) {
                  // nothing to animate
                  return
              }
              val durationScale = coroutineContext.durationScale
              if (durationScale <= 0f || durationScale.isNaN()) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 491
    endLine: 525
    sha256: c6bf7aab3ae0a3cc1b1cfbf6474c9a93b48bff322f3042643985ad0d10f699b8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  endAllAnimations()
                  lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                  isFirstFrameAfterTargetStateComposition = false
                  return
              }
              if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                  // have to capture one frame to get the start time
                  withFrameNanos(firstFrameLambda)
              }
              while (initialValueAnimations.isNotEmpty() || currentAnimation != null) {
                  animateOneFrame()
              }
              lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
              isFirstFrameAfterTargetStateComposition = false
          }

          /**
           * Does one frame of work. If there is no previous animation, then it will capture the
           * [lastFrameTimeNanos]. If there was a previous animation, it will advance by one frame.
           */
          private suspend fun doOneFrame() {
              if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                  // have to capture one frame to get the start time
                  withFrameNanos(firstFrameLambda)
              } else {
                  animateOneFrame()
              }
          }

          /** Advances all animations by one frame. */
          private suspend fun animateOneFrame() {
              val durationScale = coroutineContext.durationScale
              if (durationScale <= 0f || durationScale.isNaN()) {
                  endAllAnimations()
              } else {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 526
    endLine: 560
    sha256: e68b237234acf92d229805df10651897daaf488352c3a07e403edcf1175730bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  this@SeekableTransitionState.durationScale = durationScale
                  if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                      withFrameNanos(firstFrameLambda)
                  } else {
                      withFrameNanos(animateOneFrameLambda)
                  }
              }
          }

          /**
           * Calculates the [SeekingAnimationState.value] based on the [deltaPlayTimeNanos]. It uses the
           * animation spec if one is provided, or the progress of the total duration if not. This method
           * does not account for duration scale.
           */
          private fun recalculateAnimationValue(
              animation: SeekingAnimationState,
              deltaPlayTimeNanos: Long,
          ) {
              val playTimeNanos = animation.progressNanos + deltaPlayTimeNanos
              animation.progressNanos = playTimeNanos
              val durationNanos = animation.animationSpecDuration
              if (durationNanos <= 0L || playTimeNanos >= durationNanos) {
                  animation.value = 1f
              } else {
                  val animationSpec = animation.animationSpec
                  val newValue =
                      if (animationSpec != null) {
                          animationSpec
                              .getValueFromNanos(
                                  playTimeNanos,
                                  animation.start,
                                  Target1,
                                  animation.initialVelocity ?: ZeroVelocity,
                              )[0]
                      } else {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 561
    endLine: 595
    sha256: eb1dc9aee2118a7d848e1562ea19064670e3d050aac34beb8f27ae70d0116c5b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          lerp(animation.start[0], 1f, playTimeNanos.toFloat() / durationNanos)
                      }
                  animation.value = if (newValue.isNaN()) 1f else newValue.coerceIn(0f, 1f)
              }
          }

          /**
           * Sets [currentState] and [targetState] to `targetState` and snaps all values to those at that
           * state. The transition will not have any animations running after running [snapTo].
           *
           * This can have a similar effect as [seekTo]. However, [seekTo] moves the [currentState] to the
           * former [targetState] and animates the initial values of the animations from the current
           * values to those at [currentState]. [seekTo] also allows the developer to move the state
           * between any fraction between [currentState] and [targetState], while [snapTo] moves all state
           * to [targetState] without any further seeking allowed.
           *
           * @sample androidx.compose.animation.core.samples.SnapToSample
           * @see animateTo
           */
          public suspend fun snapTo(targetState: S) {
              val transition = transition ?: return
              if (
                  currentState == targetState && this@SeekableTransitionState.targetState == targetState
              ) {
                  return // nothing to change
              }
              mutatorMutex.mutate {
                  endAllAnimations()
                  lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                  isFirstFrameAfterTargetStateComposition = false
                  fraction = 0f
                  val fraction =
                      when (targetState) {
                          currentState -> ResetAnimationSnapCurrent
                          this@SeekableTransitionState.targetState -> ResetAnimationSnapTarget
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 596
    endLine: 630
    sha256: 2153865c07ada6b7dcc80475409e6a5c1197007aed5a6cf1684b17798f6886a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          else -> ResetAnimationSnap
                      }
                  transition.updateTarget(targetState)
                  transition.playTimeNanos = 0L
                  this@SeekableTransitionState.targetState = targetState
                  this@SeekableTransitionState.fraction = 0f
                  currentState = targetState
                  transition.resetAnimationFraction(fraction)
                  if (fraction == ResetAnimationSnap) {
                      // completely changed the value, so we have to wait for a composition to have
                      // the correct animation values
                      waitForCompositionAfterTargetStateChange()
                  }
                  transition.onTransitionEnd()
              }
          }

          /**
           * Starts seeking the transition to [targetState] with [fraction] used to indicate the progress
           * towards [targetState]. If the previous `targetState` was already [targetState] then [seekTo]
           * only stops any current animation towards that state and snaps the fraction to the new value.
           * Otherwise, the [currentState] is changed to the former `targetState` and `targetState` is
           * changed to [targetState] and an animation is started, moving the start values towards the
           * former `targetState`. This will return when the initial values have reached `currentState`
           * and the [fraction] has been reached.
           *
           * [snapTo] also allows the developer to change the state, but does not animate any values.
           * Instead, it instantly moves all values to those at the new [targetState].
           *
           * @sample androidx.compose.animation.core.samples.SeekToSample
           * @see animateTo
           */
          public suspend fun seekTo(
              @FloatRange(from = 0.0, to = 1.0) fraction: Float,
              targetState: S = this.targetState,
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 631
    endLine: 665
    sha256: 9bfcf2a2c8b84ec7ada28c43dd5e270f5b274e057146f58ae6c20c8a90da67dc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) {
              requirePrecondition(fraction in 0f..1f) {
                  "Expecting fraction between 0 and 1. Got $fraction"
              }
              val transition = transition ?: return
              val oldTargetState = this@SeekableTransitionState.targetState
              mutatorMutex.mutate {
                  coroutineScope {
                      if (targetState != oldTargetState) {
                          moveAnimationToInitialState()
                      } else {
                          currentAnimation = null
                          if (currentState == targetState) {
                              return@coroutineScope // Can't seek when current state is target state
                          }
                      }
                      if (targetState != oldTargetState) {
                          // Change the target _and_ the fraction
                          transition.updateTarget(targetState)
                          transition.playTimeNanos = 0L
                          this@SeekableTransitionState.targetState = targetState
                          transition.resetAnimationFraction(fraction)
                      }
                      this@SeekableTransitionState.fraction = fraction
                      if (initialValueAnimations.isNotEmpty()) {
                          launch { runAnimations() }
                      } else {
                          lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                          isFirstFrameAfterTargetStateComposition = false
                      }
                      waitForCompositionAfterTargetStateChange()
                      seekToFraction()
                  }
              }
          }
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 666
    endLine: 700
    sha256: ac5a41bea306e1b48aabdf197fc1edecbb5c7a392aabf507a76a4e58df936f62
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          /** Wait for composition to set up the target values */
          private suspend fun waitForCompositionAfterTargetStateChange() {
              val expectedState = targetState
              compositionContinuationMutex.lock()
              if (expectedState == composedTargetState) {
                  compositionContinuationMutex.unlock()
              } else {
                  val state = suspendCancellableCoroutine { continuation ->
                      compositionContinuation = continuation
                      compositionContinuationMutex.unlock()
                  }
                  if (state != expectedState) {
                      lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                      throw CancellationException(
                          "snapTo() was canceled because state was changed to " +
                              "$state instead of $expectedState"
                      )
                  }
              }
          }

          /**
           * Waits for composition, irrespective of whether the target state has changed or not. This is
           * important for when we're waiting for the currentState to change.
           */
          private suspend fun waitForComposition() {
              val expectedState = targetState
              compositionContinuationMutex.lock()
              val state = suspendCancellableCoroutine { continuation ->
                  compositionContinuation = continuation
                  compositionContinuationMutex.unlock()
              }
              if (state != expectedState) {
                  lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 701
    endLine: 735
    sha256: 97754d80aba52c9ac6b093ec4009283dacef2be6409a4c5a091d9eacb56092c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  throw CancellationException("targetState while waiting for composition")
              }
          }

          /** Change the animatedInitialFraction to use the animatedFraction, if it needs to be used. */
          private fun moveAnimationToInitialState() {
              val transition = transition ?: return
              val animation =
                  currentAnimation
                      ?: if (totalDurationNanos <= 0 || fraction == 1f || currentState == targetState) {
                          null
                      } else {
                          SeekingAnimationState().also {
                              it.value = fraction
                              val totalDurationNanos = totalDurationNanos
                              it.durationNanos = totalDurationNanos
                              it.animationSpecDuration =
                                  (totalDurationNanos * (1.0 - fraction)).roundToLong()
                              it.start[0] = fraction
                          }
                      }
              if (animation != null) {
                  animation.durationNanos = totalDurationNanos
                  initialValueAnimations += animation
                  transition.setInitialAnimations(animation)
              }
              currentAnimation = null
          }

          /**
           * Updates the current `targetState` to [targetState] and begins an animation to the new state.
           * If the current `targetState` is the same as [targetState] then the current transition
           * animation is continued. If a previous transition was interrupted, [currentState] is changed
           * to the former `targetState` and the start values are animated toward the former
           * `targetState`.
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 71
    endLine: 105
    sha256: 772478cf3f8b65000ca74b3764063ccbeed143db802f2b11c6a2d244ba3dce0d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [Transition.animateFloat], [animateColor][ androidx.compose.animation.animateColor],
       * [Transition.animateValue], etc.
       *
       * [label] is used to differentiate different transitions in Android Studio.
       *
       * __Note__: There is another [rememberTransition] overload that accepts a [MutableTransitionState].
       * The difference between the two is that the [MutableTransitionState] variant: 1) supports a
       * different initial state than target state (This would allow a transition to start as soon as it
       * enters composition.) 2) can be recreated to intentionally trigger a re-start of the transition.
       *
       * @sample androidx.compose.animation.core.samples.GestureAnimationSample
       * @return a [Transition] object, to which animations can be added.
       * @see Transition
       * @see Transition.animateFloat
       * @see Transition.animateValue
       */
      @Composable
      public fun <T> updateTransition(targetState: T, label: String? = null): Transition<T> {
          val transition = remember { TransitionInstance(targetState, label = label) }
          transition.animateTo(targetState)
          DisposableEffect(transition) {
              onDispose {
                  // Clean up on the way out, to ensure the observers are not stuck in an in-between
                  // state.
                  transition.onDisposed()
              }
          }
          return transition
      }

      /**
       * A [TransitionState] that supports a deferred phase before the automatic transition begins.
       *
       * This state is designed for scenarios where a transition should be held in an intermediate,
       * manually-controlled state (e.g., during a predictive back gesture) before proceeding to its final
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 736
    endLine: 770
    sha256: 92ee4a8dd880c057d6a28ac751a14d72f96d6b52df9dbe367932b8f5eb0531c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * Upon completion of the animation, [currentState] will be changed to [targetState].
           *
           * @param targetState The state to animate towards.
           * @param animationSpec If provided, is used to animate the animation fraction. If `null`, the
           *   transition is linearly traversed based on the duration of the transition.
           */
          @Suppress("DocumentExceptions")
          public suspend fun animateTo(
              targetState: S = this.targetState,
              animationSpec: FiniteAnimationSpec<Float>? = null,
          ) {
              val transition = transition ?: return
              mutatorMutex.mutate {
                  coroutineScope {
                      val oldTargetState = this@SeekableTransitionState.targetState
                      if (targetState != oldTargetState) {
                          moveAnimationToInitialState()
                          fraction = 0f
                          transition.updateTarget(targetState)
                          transition.playTimeNanos = 0L
                          currentState = oldTargetState
                          this@SeekableTransitionState.targetState = targetState
                      }
                      val composedTargetState = compositionContinuationMutex.withLock {
                          composedTargetState
                      }
                      if (targetState != composedTargetState) {
                          val wasRunning = lastFrameTimeNanos != AnimationConstants.UnspecifiedTime
                          doOneFrame() // We have to wait a frame for the composition, so continue
                          // Now we shouldn't skip a frame while waiting for composition
                          waitForCompositionAfterTargetStateChange()
                          @OptIn(ExperimentalAnimationCoreApi::class)
                          if (
                              ComposeAnimationCoreFlags
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 771
    endLine: 805
    sha256: 090abbffb691c9b1f5fa4e57800676248612a821c846df88fd9b064340551e12
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  .isSeekableTransitionStateStartAfterLayoutEnabled && !wasRunning
                          ) {
                              isFirstFrameAfterTargetStateComposition = true
                          }
                      }
                      if (currentState != targetState) {
                          if (fraction < 1f) {
                              val runningAnimation = currentAnimation
                              val newSpec = animationSpec?.vectorize(Float.VectorConverter)
                              if (runningAnimation == null || newSpec != runningAnimation.animationSpec) {
                                  // If there is a running animation, it has changed
                                  val oldSpec = runningAnimation?.animationSpec
                                  val oldVelocity: AnimationVector1D
                                  if (oldSpec != null) {
                                      oldVelocity =
                                          oldSpec.getVelocityFromNanos(
                                              playTimeNanos = runningAnimation.progressNanos,
                                              initialValue = runningAnimation.start,
                                              targetValue = Target1,
                                              initialVelocity =
                                                  runningAnimation.initialVelocity ?: ZeroVelocity,
                                          )
                                  } else if (
                                      runningAnimation == null || runningAnimation.progressNanos == 0L
                                  ) {
                                      oldVelocity = ZeroVelocity
                                  } else {
                                      val oldDurationNanos = runningAnimation.durationNanos
                                      val oldDuration =
                                          if (oldDurationNanos == AnimationConstants.UnspecifiedTime) {
                                              totalDurationNanos
                                          } else {
                                              oldDurationNanos
                                          } / (1000f * MillisToNanos)
                                      if (oldDuration <= 0L) {
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 806
    endLine: 840
    sha256: bfd637e178087389cfec1b1ed9190d3e4b5891a2ed04dd13e4318ff861a9fe24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                          oldVelocity = ZeroVelocity
                                      } else {
                                          oldVelocity = AnimationVector1D(1f / oldDuration)
                                      }
                                  }
                                  val newAnimation = runningAnimation ?: SeekingAnimationState()
                                  newAnimation.animationSpec = newSpec
                                  newAnimation.isComplete = false
                                  newAnimation.value = fraction
                                  newAnimation.start[0] = fraction
                                  newAnimation.durationNanos = totalDurationNanos
                                  newAnimation.progressNanos = 0L
                                  newAnimation.initialVelocity = oldVelocity
                                  newAnimation.animationSpecDuration =
                                      newSpec?.getDurationNanos(
                                          initialValue = newAnimation.start,
                                          targetValue = Target1,
                                          initialVelocity = oldVelocity,
                                      ) ?: (totalDurationNanos * (1.0 - fraction)).roundToLong()
                                  currentAnimation = newAnimation
                              }
                          }
                          runAnimations()
                          currentState = targetState
                          fraction = 0f
                          transition.onTransitionEnd()
                          waitForComposition()
                      }
                  }
              }
          }

          override fun transitionConfigured(transition: Transition<S>) {
              checkPrecondition(this.transition == null || transition == this.transition) {
                  "An instance of SeekableTransitionState has been used in different Transitions. " +
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 841
    endLine: 875
    sha256: 4aba046a772f395494fa8fa31d8c94071d71ae0a3dac083963e7af6bcd034e15
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      "Previous instance: ${this.transition}, new instance: $transition"
              }
              this.transition = transition
          }

          override fun transitionRemoved() {
              this.transition = null
              snapshotStateObserver?.clear(this)
          }

          internal fun observeTotalDuration() {
              snapshotStateObserver?.observeReads(
                  scope = this,
                  onValueChangedForScope = SeekableTransitionStateTotalDurationChanged,
                  block = recalculateTotalDurationNanos,
              )
          }

          internal fun onTotalDurationChanged() {
              val previousTotalDurationNanos = totalDurationNanos
              observeTotalDuration()
              if (previousTotalDurationNanos != totalDurationNanos) {
                  val animation = currentAnimation
                  if (animation != null) {
                      if (animation.progressNanos > totalDurationNanos) {
                          endAllAnimations()
                      } else {
                          animation.durationNanos = totalDurationNanos
                          if (animation.animationSpec == null) {
                              animation.animationSpecDuration =
                                  ((1.0 - animation.start[0]) * totalDurationNanos).roundToLong()
                          }
                      }
                  } else if (totalDurationNanos != 0L) {
                      // seekTo() called with a fraction. If an animation is running, we can just wait
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 876
    endLine: 910
    sha256: 7f4ac9aaab94e9fb6b2a43e1dfac44e3222d7ee3a96d09b20fb791dc01786812
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      // for the animation to change the value. The fraction may not be the best way
                      // to advance a regular animation.
                      seekToFraction()
                  }
              }
          }

          private fun seekToFraction() {
              val transition = transition ?: return
              val playTimeNanos = (fraction.toDouble() * transition.totalDurationNanos).roundToLong()
              transition.seekAnimations(playTimeNanos)
          }

          /**
           * Contains the state for a running animation. This can be the current animation from
           * [animateTo] or an initial value animation.
           */
          internal class SeekingAnimationState {
              // The current progress with respect to the animationSpec if it exists or
              // durationNanos if animationSpec is null
              var progressNanos: Long = 0L

              // The AnimationSpec used in this animation, or null if it is a linear animation with
              // duration of durationNanos
              var animationSpec: VectorizedAnimationSpec<AnimationVector1D>? = null

              // Used by initial value animations to mark when the animation should continue
              var isComplete = false

              // The current fraction of the animation
              var value: Float = 0f

              // The start value of the animation
              var start: AnimationVector1D = AnimationVector1D(0f)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 911
    endLine: 945
    sha256: 058c92654915a22952399d355c867f483b78b8936b5c9b8f585ae6f420de2fa0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // The initial velocity of the animation
              var initialVelocity: AnimationVector1D? = null

              // The total duration of the transition's animations. This is the totalDurationNanos
              // at the time that this was created for initial value animations. Note that this can
              // be different from the animationSpec's duration.
              var durationNanos: Long = 0L

              // The total duration of the animationSpec. This is kept cached because Spring
              // animations can take time to calculate their durations
              var animationSpecDuration: Long = 0L

              override fun toString(): String {
                  return "progress nanos: $progressNanos, animationSpec: $animationSpec," +
                      " isComplete: $isComplete, value: $value, start: $start," +
                      " initialVelocity: $initialVelocity, durationNanos: $durationNanos," +
                      " animationSpecDuration: $animationSpecDuration"
              }
          }

          private companion object {
              // AnimationVector1D with 0 value, kept so that we don't have to allocate unnecessarily
              val ZeroVelocity = AnimationVector1D(0f)

              // AnimationVector1D with 1 value, used as the target value of 1f
              val Target1 = AnimationVector1D(1f)

              // Maximum frame delta (1/60s in nanoseconds, ~16.67ms) allowed on the first frame after
              // composing and laying out a new target state when starting from idle, preventing expensive
              // first-frame composition/layout from skipping initial animation frames.
              private const val MaxFirstFrameDeltaNanos = 16_666_667L
          }
      }

      /**
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 946
    endLine: 980
    sha256: c5ce9eae6b06aa95aee96a811b65d21780a1ea01c64c0494801733605a52a403
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Creates a [Transition] and puts it in the [currentState][TransitionState.currentState] of the
       * provided [transitionState]. If the [TransitionState.targetState] changes, the [Transition] will
       * change where it will animate to.
       *
       * __Remember__: The provided [transitionState] needs to be [remember]ed.
       *
       * Compared to [updateTransition] that takes a targetState, this function supports a different
       * initial state than the first targetState. Here is an example:
       *
       * @sample androidx.compose.animation.core.samples.InitialStateSample
       *
       * In most cases, it is recommended to reuse the same [transitionState] that is [remember]ed, such
       * that [Transition] preserves continuity when [targetState][MutableTransitionState.targetState] is
       * changed. However, in some rare cases it is more critical to immediately *snap* to a state change
       * (e.g. in response to a user interaction). This can be achieved by creating a new
       * [transitionState]:
       *
       * @sample androidx.compose.animation.core.samples.DoubleTapToLikeSample
       */
      @Composable
      public fun <T> rememberTransition(
          transitionState: TransitionState<T>,
          label: String? = null,
      ): Transition<T> {
          val transition =
              remember(transitionState) {
                  // Remember currently observes state reads in its calculation lambda, which leads to
                  // recomposition on some state changes even though the lambda will not be invoked again.
                  // Tracked at b/392921611. Until this is fixed, we need to explicitly disable state
                  // observation in remember.
                  Snapshot.withoutReadObservation {
                      if (transitionState is DeferredTransitionState) {
                          DeferredTransition(transitionState, label)
                      } else {
                          TransitionInstance(transitionState, label)
  - id: live-androidx-animation-animation-core-animation-core-transition-lines-981-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt
    startLine: 981
    endLine: 1015
    sha256: 8de5af782aa760878130a0fd0cdcad021bdd0d0262cbe7e9ad209dcebc5b72c9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  }
              }
          if (transitionState is SeekableTransitionState) {
              val coroutineScope = rememberCoroutineScope()
              DisposableEffect(coroutineScope) {
                  val thread = getCurrentThread()
                  val snapshotStateObserver = SnapshotStateObserver {
                      if (thread === getCurrentThread()) {
                          it()
                      } else {
                          coroutineScope.launch { it() }
                      }
                  }
                  transitionState.snapshotStateObserver = snapshotStateObserver
                  onDispose { transitionState.snapshotStateObserver = null }
              }
              val targetState = transitionState.targetState
              LaunchedEffect(transitionState.currentState, targetState) {
                  transitionState.observeTotalDuration()
                  transitionState.compositionContinuationMutex.withLock {
                      @OptIn(ExperimentalAnimationCoreApi::class)
                      if (
                          !ComposeAnimationCoreFlags.isSeekableTransitionStateStartAfterLayoutEnabled ||
                              targetState == transitionState.targetState
                      ) {
                          transitionState.composedTargetState = transitionState.targetState
                          transitionState.compositionContinuation?.resume(transitionState.targetState)
                          transitionState.compositionContinuation = null
                      }
                  }
              }
          } else {
              transition.animateTo(transitionState.targetState)
              if (transitionState is DeferredTransitionState) {
compose:
  id: live-androidx-animation-animation-core-animation-core-transition
  artifact: androidx.compose.animation:animation-core
  fqn: androidx.compose.animation.core
  sections:
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1
      title: androidx.compose.animation.core Transition.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1016
      title: androidx.compose.animation.core Transition.kt source (lines 1016–1050)
      aliases:
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1016-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1051
      title: androidx.compose.animation.core Transition.kt source (lines 1051–1085)
      aliases:
        - androidx.compose.animation.core.updateTransition
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1051-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-106
      title: androidx.compose.animation.core Transition.kt source (lines 106–140)
      aliases:
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.TransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1086
      title: androidx.compose.animation.core Transition.kt source (lines 1086–1120)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1086-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1121
      title: androidx.compose.animation.core Transition.kt source (lines 1121–1155)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1121-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1156
      title: androidx.compose.animation.core Transition.kt source (lines 1156–1190)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1156-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1191
      title: androidx.compose.animation.core Transition.kt source (lines 1191–1225)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1191-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1226
      title: androidx.compose.animation.core Transition.kt source (lines 1226–1260)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1226-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1261
      title: androidx.compose.animation.core Transition.kt source (lines 1261–1295)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1261-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1296
      title: androidx.compose.animation.core Transition.kt source (lines 1296–1330)
      aliases:
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1296-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1331
      title: androidx.compose.animation.core Transition.kt source (lines 1331–1365)
      aliases:
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1331-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1366
      title: androidx.compose.animation.core Transition.kt source (lines 1366–1400)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1366-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1401
      title: androidx.compose.animation.core Transition.kt source (lines 1401–1435)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1401-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-141
      title: androidx.compose.animation.core Transition.kt source (lines 141–175)
      aliases:
        - androidx.compose.animation.core.rememberDeferredTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1436
      title: androidx.compose.animation.core Transition.kt source (lines 1436–1470)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1436-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1471
      title: androidx.compose.animation.core Transition.kt source (lines 1471–1505)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1471-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1506
      title: androidx.compose.animation.core Transition.kt source (lines 1506–1540)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateFloat
        - androidx.compose.animation.core.animateDp
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1506-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1541
      title: androidx.compose.animation.core Transition.kt source (lines 1541–1575)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1541-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1576
      title: androidx.compose.animation.core Transition.kt source (lines 1576–1610)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1576-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1611
      title: androidx.compose.animation.core Transition.kt source (lines 1611–1645)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1611-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1646
      title: androidx.compose.animation.core Transition.kt source (lines 1646–1680)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1646-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1681
      title: androidx.compose.animation.core Transition.kt source (lines 1681–1715)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1681-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1716
      title: androidx.compose.animation.core Transition.kt source (lines 1716–1750)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1716-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1751
      title: androidx.compose.animation.core Transition.kt source (lines 1751–1785)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1751-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-176
      title: androidx.compose.animation.core Transition.kt source (lines 176–210)
      aliases:
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.DeferredTransition
        - androidx.compose.animation.core.rememberDeferredTransition
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1786
      title: androidx.compose.animation.core Transition.kt source (lines 1786–1820)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1786-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1821
      title: androidx.compose.animation.core Transition.kt source (lines 1821–1855)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1821-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1856
      title: androidx.compose.animation.core Transition.kt source (lines 1856–1890)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.createDeferredAnimation
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1856-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1891
      title: androidx.compose.animation.core Transition.kt source (lines 1891–1925)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1891-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1926
      title: androidx.compose.animation.core Transition.kt source (lines 1926–1960)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1926-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1961
      title: androidx.compose.animation.core Transition.kt source (lines 1961–1995)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1961-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-1996
      title: androidx.compose.animation.core Transition.kt source (lines 1996–2030)
      aliases:
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-1996-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2031
      title: androidx.compose.animation.core Transition.kt source (lines 2031–2065)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.createDeferredAnimation
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2031-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2066
      title: androidx.compose.animation.core Transition.kt source (lines 2066–2100)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.createChildTransition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2066-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2101
      title: androidx.compose.animation.core Transition.kt source (lines 2101–2135)
      aliases:
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2101-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-211
      title: androidx.compose.animation.core Transition.kt source (lines 211–245)
      aliases:
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.SeekableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2136
      title: androidx.compose.animation.core Transition.kt source (lines 2136–2170)
      aliases:
        - androidx.compose.animation.core.updateTransition
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2136-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2171
      title: androidx.compose.animation.core Transition.kt source (lines 2171–2205)
      aliases:
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2171-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2206
      title: androidx.compose.animation.core Transition.kt source (lines 2206–2240)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2206-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2241
      title: androidx.compose.animation.core Transition.kt source (lines 2241–2275)
      aliases:
        - androidx.compose.animation.core.updateTransition
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2241-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2276
      title: androidx.compose.animation.core Transition.kt source (lines 2276–2310)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateDp
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2276-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2311
      title: androidx.compose.animation.core Transition.kt source (lines 2311–2345)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateOffset
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2311-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2346
      title: androidx.compose.animation.core Transition.kt source (lines 2346–2380)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateSize
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2346-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2381
      title: androidx.compose.animation.core Transition.kt source (lines 2381–2415)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateIntOffset
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2381-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2416
      title: androidx.compose.animation.core Transition.kt source (lines 2416–2450)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateInt
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2416-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2451
      title: androidx.compose.animation.core Transition.kt source (lines 2451–2485)
      aliases:
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateIntSize
        - androidx.compose.animation.core.animateRect
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2451-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-246
      title: androidx.compose.animation.core Transition.kt source (lines 246–280)
      aliases:
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-2486
      title: androidx.compose.animation.core Transition.kt source (lines 2486–2489)
      aliases:
        - androidx.compose.animation.core.animateValue
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-2486-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-281
      title: androidx.compose.animation.core Transition.kt source (lines 281–315)
      aliases:
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.SeekableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-316
      title: androidx.compose.animation.core Transition.kt source (lines 316–350)
      aliases:
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.SeekableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-351
      title: androidx.compose.animation.core Transition.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-36
      title: androidx.compose.animation.core Transition.kt source (lines 36–70)
      aliases:
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-386
      title: androidx.compose.animation.core Transition.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-386-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-421
      title: androidx.compose.animation.core Transition.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-421-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-456
      title: androidx.compose.animation.core Transition.kt source (lines 456–490)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-456-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-491
      title: androidx.compose.animation.core Transition.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-491-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-526
      title: androidx.compose.animation.core Transition.kt source (lines 526–560)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-526-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-561
      title: androidx.compose.animation.core Transition.kt source (lines 561–595)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-561-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-596
      title: androidx.compose.animation.core Transition.kt source (lines 596–630)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-596-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-631
      title: androidx.compose.animation.core Transition.kt source (lines 631–665)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-631-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-666
      title: androidx.compose.animation.core Transition.kt source (lines 666–700)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-666-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-701
      title: androidx.compose.animation.core Transition.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-701-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-71
      title: androidx.compose.animation.core Transition.kt source (lines 71–105)
      aliases:
        - androidx.compose.animation.core.updateTransition
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
        - androidx.compose.animation.core.animateValue
        - androidx.compose.animation.core.animateFloat
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-71-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-736
      title: androidx.compose.animation.core Transition.kt source (lines 736–770)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-736-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-771
      title: androidx.compose.animation.core Transition.kt source (lines 771–805)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-771-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-806
      title: androidx.compose.animation.core Transition.kt source (lines 806–840)
      aliases:
        - androidx.compose.animation.core.SeekableTransitionState
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-806-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-841
      title: androidx.compose.animation.core Transition.kt source (lines 841–875)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-841-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-876
      title: androidx.compose.animation.core Transition.kt source (lines 876–910)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-876-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-911
      title: androidx.compose.animation.core Transition.kt source (lines 911–945)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-911-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-946
      title: androidx.compose.animation.core Transition.kt source (lines 946–980)
      aliases:
        - androidx.compose.animation.core.updateTransition
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.DeferredTransition
        - androidx.compose.animation.core.TransitionState
        - androidx.compose.animation.core.MutableTransitionState
        - androidx.compose.animation.core.rememberTransition
        - androidx.compose.animation.core.Transition
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-946-source
      relatedIds: []
    - id: live-androidx-animation-animation-core-animation-core-transition-lines-981
      title: androidx.compose.animation.core Transition.kt source (lines 981–1015)
      aliases:
        - androidx.compose.animation.core.DeferredTransitionState
        - androidx.compose.animation.core.SeekableTransitionState
      requires:
        - artifact: androidx.compose.animation:animation-core
          version: null
      sourceIds:
        - live-androidx-animation-animation-core-animation-core-transition-lines-981-source
      relatedIds: []
---

# androidx.compose.animation.core Transition.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt

## androidx.compose.animation.core Transition.kt source (lines 1–35)

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

@file:OptIn(InternalAnimationApi::class)

package androidx.compose.animation.core

import androidx.annotation.FloatRange
import androidx.annotation.RestrictTo
import androidx.collection.MutableObjectList
import androidx.compose.animation.core.internal.JvmDefaultWithCompatibility
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateListOf

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1016–1050)

            transition.updatePendingTarget(transitionState.pendingTargetState)
        }
    }
    DisposableEffect(transition) {
        onDispose {
            // Clean up on the way out, to ensure the observers are not stuck in an in-between
            // state.
            transition.onDisposed()
        }
    }
    return transition
}

/**
 * Creates a [Transition] and puts it in the [currentState][MutableTransitionState.currentState] of
 * the provided [transitionState]. Whenever the [targetState][MutableTransitionState.targetState] of
 * the [transitionState] changes, the [Transition] will animate to the new target state.
 *
 * __Remember__: The provided [transitionState] needs to be [remember]ed.
 *
 * Compared to the [rememberTransition] variant that takes a targetState, this function supports a
 * different initial state than the first targetState. Here is an example:
 *
 * @sample androidx.compose.animation.core.samples.InitialStateSample
 *
 * In most cases, it is recommended to reuse the same [transitionState] that is [remember]ed, such
 * that [Transition] preserves continuity when [targetState][MutableTransitionState.targetState] is
 * changed. However, in some rare cases it is more critical to immediately *snap* to a state change
 * (e.g. in response to a user interaction). This can be achieved by creating a new
 * [transitionState]:
 *
 * @sample androidx.compose.animation.core.samples.DoubleTapToLikeSample
 */
@Deprecated(
    "Use rememberTransition() instead",

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1016-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1051–1085)

    replaceWith = ReplaceWith("rememberTransition(transitionState, label)"),
)
@Composable
public fun <T> updateTransition(
    transitionState: MutableTransitionState<T>,
    label: String? = null,
): Transition<T> {
    val state: TransitionState<T> = transitionState
    return rememberTransition(state, label)
}

/**
 * [Transition] manages all the child animations on a state level. Child animations can be created
 * in a declarative way using [Transition.animateFloat], [Transition.animateValue],
 * [animateColor][androidx.compose.animation.animateColor] etc. When the [targetState] changes,
 * [Transition] will automatically start or adjust course for all its child animations to animate to
 * the new target values defined for each animation.
 *
 * After arriving at [targetState], [Transition] will be triggered to run if any child animation
 * changes its target value (due to their dynamic target calculation logic, such as theme-dependent
 * values).
 *
 * @sample androidx.compose.animation.core.samples.GestureAnimationSample
 * @see rememberTransition
 * @see Transition.animateFloat
 * @see Transition.animateValue
 * @see androidx.compose.animation.animateColor
 */
// TODO: Support creating Transition outside of composition and support imperative use of Transition
@Stable
public sealed class Transition<S>
protected constructor(
    private val transitionState: TransitionState<S>,
    @Suppress("BanRestrictTo")
    @get:RestrictTo(RestrictTo.Scope.LIBRARY)

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1051-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 106–140)

 * target.
 *
 * While in the deferred phase (initiated by [defer]), the transition holds the new target as a
 * [pendingTargetState]. The actual [targetState] remains unchanged, keeping the transition in its
 * current visual state. Once [animateTo] is called, the [pendingTargetState] is cleared and the
 * transition proceeds to the new [targetState], triggering its automatic animations.
 *
 * @param initialState The initial state of the transition.
 * @sample androidx.compose.animation.core.samples.DeferredTransitionSample
 */
public class DeferredTransitionState<S>(initialState: S) : TransitionState<S>() {
    override var currentState: S by mutableStateOf(initialState)

    override var targetState: S by mutableStateOf(initialState)

    /**
     * The target state that the transition will eventually animate to once the deferred phase ends.
     *
     * This value is set when [defer] is called and cleared when [animateTo] is called, at which
     * point [targetState] will be updated to the new state.
     */
    public var pendingTargetState: S? by mutableStateOf(null)
        internal set

    /**
     * Updates the [pendingTargetState] and initiates the deferred phase.
     *
     * During this phase, the transition's [targetState] remains unchanged, keeping the transition
     * in its current visual state. However, the new target is exposed via [pendingTargetState],
     * signaling to transition-aware components that a state change is pending. They can then use
     * this information to perform early setup or apply custom logic for the pending state before
     * the automatic transition is eventually started via [animateTo].
     *
     * If [defer] is called while an animation is already in progress (i.e., [currentState] !=
     * [targetState]), the animation will continue toward its current [targetState] while

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1086–1120)

    public val parentTransition: Transition<*>?,
    label: String? = null,
) {
    private val _rawLabel: String? = label

    /** An optional label for differentiating different transitions in Android Studio. */
    public val label: String?
        get() {
            val parent = parentTransition
            val parentLabel = parent?.label
            return when {
                parentLabel != null && _rawLabel != null -> "$parentLabel > $_rawLabel"
                parentLabel != null -> parentLabel
                else -> _rawLabel
            }
        }

    /**
     * Current state of the transition. This will always be the initialState of the transition until
     * the transition is finished. Once the transition is finished, [currentState] will be set to
     * [targetState]. [currentState] is backed by a [MutableState].
     */
    public val currentState: S
        get() = transitionState.currentState

    /**
     * Target state of the transition. This will be read by all child animations to determine their
     * most up-to-date target values.
     */
    public var targetState: S by mutableStateOf(currentState)
        internal set

    /**
     * Pending target state of the transition. This is the state that the transition is waiting to
     * animate to. It is non-null only when a deferred update is in progress.

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1086-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1121–1155)

     */
    public var pendingTargetState: S? by mutableStateOf(null)
        private set

    @PublishedApi
    internal fun updatePendingTarget(value: S?) {
        val previousPending = pendingTargetState
        val wasPendingCleared =
            previousPending != null && value == null && this.targetState == currentState
        pendingTargetState = value
        if (wasPendingCleared) {
            segment = SegmentImpl(previousPending, targetState)
            // This handles the case where a deferred phase is interrupted by an
            // animateTo(original state) call. By setting the currentState to the
            // pendingTargetState, the transition system picks up any manual transformations
            // from the deferred phase and seamlessly animates them back to the original state.
            // If no transformations were made during the deferred phase, it will immediately
            // settle.
            transitionState.currentState = previousPending
            if (!isRunning) {
                updateChildrenNeeded = true
            }
            _animations.toList().fastForEach { it.resetAnimation() }
        }
    }

    /**
     * [segment] contains the initial state and the target state of the currently on-going
     * transition.
     */
    public var segment: Segment<S> by mutableStateOf(SegmentImpl(currentState, currentState))
        private set

    /** Indicates whether there is any animation running in the transition. */
    public val isRunning: Boolean

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1121-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1156–1190)

        get() = startTimeNanos != AnimationConstants.UnspecifiedTime

    private var _playTimeNanos by mutableLongStateOf(0L)

    /**
     * Play time in nano-seconds. [playTimeNanos] is always non-negative. It starts from 0L at the
     * beginning of the transition and increment until all child animations have finished.
     */
    @Suppress("BanRestrictTo")
    @get:RestrictTo(RestrictTo.Scope.LIBRARY)
    @set:RestrictTo(RestrictTo.Scope.LIBRARY)
    public var playTimeNanos: Long
        get() {
            return parentTransition?.playTimeNanos ?: _playTimeNanos
        }
        set(value) {
            if (parentTransition == null) {
                _playTimeNanos = value
            }
        }

    // startTimeNanos is in real frame time nanos for the root transition and
    // scaled frame time for child transitions (as offset from the root start)
    internal var startTimeNanos by mutableLongStateOf(AnimationConstants.UnspecifiedTime)

    // This gets calculated every time child is updated/added
    private var updateChildrenNeeded: Boolean by mutableStateOf(false)

    private val _animations = mutableStateListOf<TransitionAnimationState<*, *>>()
    private val _transitions = mutableStateListOf<Transition<*>>()

    /** List of child transitions in a [Transition]. */
    public val transitions: List<Transition<*>>
        get() = _transitions


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1156-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1191–1225)

    /** List of [TransitionAnimationState]s that are in a [Transition]. */
    public val animations: List<TransitionAnimationState<*, *>>
        get() = _animations

    // Seeking related
    @Suppress("BanRestrictTo")
    @get:RestrictTo(RestrictTo.Scope.LIBRARY)
    @set:RestrictTo(RestrictTo.Scope.LIBRARY)
    public var isSeeking: Boolean by mutableStateOf(false)
        internal set

    internal var lastSeekedTimeNanos = 0L

    /**
     * Used internally to know when a [SeekableTransitionState] is animating initial values after
     * [SeekableTransitionState.animateTo] or [SeekableTransitionState.seekTo] has redirected a
     * transition prior to it completing. This is important for knowing when child transitions must
     * be maintained after a parent target state has changed, but the child target state hasn't
     * changed.
     */
    @get:Suppress("GetterSetterNames") // Don't care about Java name for this property
    @InternalAnimationApi
    public val hasInitialValueAnimations: Boolean
        get() =
            _animations.toList().fastAny { it.initialValueState != null } ||
                _transitions.toList().fastAny { it.hasInitialValueAnimations }

    /**
     * Total duration of the [Transition], accounting for all the animations and child transitions
     * defined on the [Transition].
     *
     * Note: The total duration is subject to change as more animations/child transitions get added
     * to [Transition]. It's strongly recommended to query this *after* all the animations in the
     * [Transition] are set up.
     */

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1191-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1226–1260)

    public val totalDurationNanos: Long by derivedStateOf { calculateTotalDurationNanos() }

    private fun calculateTotalDurationNanos(): Long {
        var maxDurationNanos = 0L
        _animations.toList().fastForEach {
            maxDurationNanos = max(maxDurationNanos, it.durationNanos)
        }
        _transitions.toList().fastForEach {
            maxDurationNanos = max(maxDurationNanos, it.calculateTotalDurationNanos())
        }
        return maxDurationNanos
    }

    @OptIn(InternalAnimationApi::class)
    internal fun onFrame(frameTimeNanos: Long, durationScale: Float) {
        if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
            onTransitionStart(frameTimeNanos)
        }

        val deltaT = frameTimeNanos - startTimeNanos
        val scaledPlayTimeNanos =
            if (durationScale <= 0f || durationScale.isNaN()) {
                deltaT
            } else {
                (deltaT / durationScale.toDouble()).roundToLong()
            }
        playTimeNanos = scaledPlayTimeNanos
        onFrame(scaledPlayTimeNanos, durationScale <= 0f || durationScale.isNaN())
    }

    internal fun onFrame(scaledPlayTimeNanos: Long, scaleToEnd: Boolean) {
        if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
            onTransitionStart(scaledPlayTimeNanos)
        } else if (!transitionState.isRunning) {
            transitionState.isRunning = true

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1226-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1261–1295)

        }
        updateChildrenNeeded = false

        var allFinished = true
        // Pulse new playtime
        _animations.toList().fastForEach {
            if (!it.isFinished) {
                it.onPlayTimeChanged(scaledPlayTimeNanos, scaleToEnd)
            }
            // Check isFinished flag again after the animation pulse
            if (!it.isFinished) {
                allFinished = false
            }
        }
        _transitions.toList().fastForEach {
            if (it.targetState != it.currentState) {
                it.onFrame(scaledPlayTimeNanos, scaleToEnd)
            }
            if (it.targetState != it.currentState) {
                allFinished = false
            }
        }
        if (allFinished) {
            onTransitionEnd()
        }
    }

    init {
        transitionState.transitionConfigured(this)
    }

    // onTransitionStart and onTransitionEnd are symmetric. Both are called from onFrame
    internal fun onTransitionStart(frameTimeNanos: Long) {
        startTimeNanos = frameTimeNanos
        transitionState.isRunning = true

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1261-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1296–1330)

    }

    // Called when the Transition is being disposed to clean up any state
    internal fun onDisposed() {
        onTransitionEnd()
        transitionState.transitionRemoved()
    }

    // onTransitionStart and onTransitionEnd are symmetric. Both are called from onFrame
    @OptIn(InternalAnimationApi::class)
    internal fun onTransitionEnd() {
        startTimeNanos = AnimationConstants.UnspecifiedTime
        if (
            transitionState is MutableTransitionState || transitionState is DeferredTransitionState
        ) {
            transitionState.currentState = targetState
        }
        playTimeNanos = 0
        transitionState.isRunning = false
        _transitions.toList().fastForEach { it.onTransitionEnd() }
    }

    /**
     * This allows tools to set the transition (between initial and target state) to a specific
     * [playTimeNanos].
     *
     * Note: This function is intended for tooling use only.
     *
     * __Caveat:__ Once [initialState] or [targetState] changes, it needs to take a whole
     * composition pass for all the animations and child transitions to recompose with the new
     * [initialState] and [targetState]. Subsequently all the animations will be updated to the
     * given play time.
     *
     * __Caveat:__ This function puts [Transition] in a manual playtime setting mode. From then on
     * the [Transition] will not resume normal animation runs.

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1296-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1331–1365)

     */
    @Suppress("BanRestrictTo")
    @RestrictTo(RestrictTo.Scope.LIBRARY_GROUP_PREFIX)
    @OptIn(InternalAnimationApi::class)
    @JvmName("seek")
    public fun setPlaytimeAfterInitialAndTargetStateEstablished(
        initialState: S,
        targetState: S,
        playTimeNanos: Long,
    ) {
        // Reset running state
        startTimeNanos = AnimationConstants.UnspecifiedTime
        transitionState.isRunning = false
        if (!isSeeking || this.currentState != initialState || this.targetState != targetState) {
            // Reset all child animations
            if (
                currentState != initialState &&
                    (transitionState is MutableTransitionState ||
                        transitionState is DeferredTransitionState)
            ) {
                transitionState.currentState = initialState
            }
            this.targetState = targetState
            isSeeking = true
            segment = SegmentImpl(initialState, targetState)
        }

        _transitions.toList().fastForEach {
            @Suppress("UNCHECKED_CAST")
            (it as Transition<Any>).let {
                if (it.isSeeking) {
                    it.setPlaytimeAfterInitialAndTargetStateEstablished(
                        it.currentState,
                        it.targetState,
                        playTimeNanos,

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1331-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1366–1400)

                    )
                }
            }
        }

        _animations.toList().fastForEach { it.seekTo(playTimeNanos) }
        lastSeekedTimeNanos = playTimeNanos
    }

    internal fun addTransition(transition: Transition<*>) = _transitions.add(transition)

    internal fun removeTransition(transition: Transition<*>) = _transitions.remove(transition)

    internal fun addAnimation(animation: TransitionAnimationState<*, *>) =
        _animations.add(animation)

    internal fun removeAnimation(animation: TransitionAnimationState<*, *>) {
        _animations.remove(animation)
    }

    // This target state should only be used to modify "mutableState"s, as it could potentially
    // roll back. The
    internal fun updateTarget(targetState: S) {
        // This is needed because child animations rely on this target state and the state pair to
        // update their animation specs
        val currentTargetState = this.targetState
        if (currentTargetState != targetState) {
            // Starting state should be the "next" state when waypoints are impl'ed
            segment = SegmentImpl(currentTargetState, targetState)
            transitionState.currentState = currentTargetState
            this.targetState = targetState
            if (!isRunning) {
                updateChildrenNeeded = true
            }


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1366-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1401–1435)

            // If target state is changed, reset all the animations to be re-created in the
            // next frame w/ their new target value. Child animations target values are updated in
            // the side effect that may not have happened when this function in invoked.
            // Copying to a list to avoid ConcurrentModificationException since resetAnimation()
            // can modify the animations list. This operation is trivial with SnapshotStateList.
            @Suppress("ListIterator") val animations = animations.toList()
            animations.fastForEach { it.resetAnimation() }
        }
    }

    // This should only be called if PlayTime comes from clock directly, instead of from a parent
    // Transition.
    @Suppress("ComposableNaming")
    @Composable
    internal fun animateTo(targetState: S) {
        if (!isSeeking) {
            updateTarget(targetState)
            // target != currentState adds the effect into the tree in the same frame as
            // target change.
            val runFrameLoop by
                remember(this) {
                    derivedStateOf {
                        this.targetState != currentState || isRunning || updateChildrenNeeded
                    }
                }
            if (runFrameLoop) {
                // We're using a composition-obtained scope + DisposableEffect here to give us
                // control over coroutine dispatching
                val coroutineScope = rememberCoroutineScope()
                DisposableEffect(coroutineScope, this) {
                    // Launch the coroutine undispatched so the block is executed in the current
                    // frame. This is important as this initializes the state.
                    coroutineScope.launch(start = CoroutineStart.UNDISPATCHED) {
                        val durationScale = coroutineContext.durationScale
                        while (isActive) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1401-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 141–175)

     * [pendingTargetState] is set. This allows components to respond to the pending state early,
     * potentially concurrently with the ongoing animation.
     *
     * @param targetState The state the transition should eventually animate to.
     */
    public fun defer(targetState: S) {
        if (this.targetState == targetState) {
            pendingTargetState = null
        } else {
            pendingTargetState = targetState
        }
    }

    /**
     * Clears the [pendingTargetState] and updates the [targetState] to the provided [targetState],
     * ending the deferred phase and starting the automatic transition animation.
     *
     * Note: The [targetState] provided here does not need to match the previous
     * [pendingTargetState]. If a different state is provided, the transition will animate directly
     * to this new state, bypassing the previously deferred target.
     *
     * @param targetState The final target state for the transition.
     */
    public fun animateTo(targetState: S) {
        pendingTargetState = null
        this.targetState = targetState
    }

    override fun transitionConfigured(transition: Transition<S>) {}

    override fun transitionRemoved() {}
}

/**
 * A [Transition] that supports a deferred phase, created via [rememberDeferredTransition].

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1436–1470)

                            withFrameNanos {
                                // This check is very important, as isSeeking may be changed
                                // off-band between the last check in composition and this callback
                                // which happens in the animation callback the next frame.
                                if (!isSeeking) {
                                    onFrame(it / AnimationDebugDurationScale, durationScale)
                                }
                            }
                        }
                    }
                    onDispose {}
                }
            }
        }
    }

    /**
     * Used by [SeekableTransitionState] to seek the current transition animation to
     * [playTimeNanos].
     */
    internal fun seekAnimations(playTimeNanos: Long) {
        if (startTimeNanos == AnimationConstants.UnspecifiedTime) {
            startTimeNanos = playTimeNanos
        }
        this.playTimeNanos = playTimeNanos
        updateChildrenNeeded = false

        // Pulse new playtime
        _animations.toList().fastForEach { it.seekTo(playTimeNanos) }
        _transitions.toList().fastForEach {
            if (it.targetState != it.currentState) {
                it.seekAnimations(playTimeNanos)
            }
        }
    }

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1436-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1471–1505)


    /**
     * Changes the existing animations to be initial value animations. An existing animation was
     * interrupted, so the current animation is used only for the initial values. The current
     * animation is then changed to an unchanging animation that is only moved by the initial value.
     */
    internal fun setInitialAnimations(
        animationState: SeekableTransitionState.SeekingAnimationState
    ) {
        _animations.toList().fastForEach { it.setInitialValueAnimation(animationState) }
        _transitions.toList().fastForEach { it.setInitialAnimations(animationState) }
    }

    /**
     * Clears all animations. The state has been forced directly to a new value and the animations
     * are no longer valid.
     */
    internal fun resetAnimationFraction(fraction: Float) {
        _animations.toList().fastForEach { it.resetAnimationValue(fraction) }
        _transitions.toList().fastForEach { it.resetAnimationFraction(fraction) }
    }

    /** Clears all initial value animations. */
    internal fun clearInitialAnimations() {
        _animations.toList().fastForEach { it.clearInitialAnimation() }
        _transitions.toList().fastForEach { it.clearInitialAnimations() }
    }

    /**
     * Changes the progress of the initial value.
     *
     * @return true if the animationState is animating anything or false if it isn't animating
     *   anything.
     */
    internal fun updateInitialValues() {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1471-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1506–1540)

        _animations.toList().fastForEach { it.updateInitialValue() }
        _transitions.toList().fastForEach { it.updateInitialValues() }
    }

    override fun toString(): String {
        return animations.fastFold("Transition animation values: ") { acc, anim -> "$acc$anim, " }
    }

    @OptIn(InternalAnimationApi::class)
    private fun onChildAnimationUpdated() {
        updateChildrenNeeded = true
        if (isSeeking) {
            // Update total duration
            var maxDurationNanos = 0L
            _animations.toList().fastForEach {
                maxDurationNanos = max(maxDurationNanos, it.durationNanos)
                it.seekTo(lastSeekedTimeNanos)
            }
            // TODO: Is update duration the only thing that needs to be done during seeking to
            //  accommodate update children?
            updateChildrenNeeded = false
        }
    }

    /**
     * Each animation created using [animateFloat], [animateDp], etc is represented as a
     * [TransitionAnimationState] in [Transition].
     */
    @Stable
    public inner class TransitionAnimationState<T, V : AnimationVector>
    internal constructor(
        initialValue: T,
        initialVelocityVector: V,
        public val typeConverter: TwoWayConverter<T, V>,
        public val label: String,

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1506-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1541–1575)

    ) : State<T> {

        // Changed during composition, may rollback
        private var targetValue: T by mutableStateOf(initialValue)

        private val defaultSpring = spring<T>()

        /**
         * [AnimationSpec] that is used for current animation run. This can change when
         * [targetState] changes.
         */
        public var animationSpec: FiniteAnimationSpec<T> by mutableStateOf(defaultSpring)
            private set

        /**
         * All the animation configurations including initial value/velocity & target value for
         * animating from [currentState] to [targetState] are captured in [animation].
         */
        public var animation: TargetBasedAnimation<T, V> by
            mutableStateOf(
                TargetBasedAnimation(
                    animationSpec,
                    typeConverter,
                    initialValue,
                    targetValue,
                    initialVelocityVector,
                )
            )
            private set

        internal var initialValueState: SeekableTransitionState.SeekingAnimationState? = null
        private var initialValueAnimation: TargetBasedAnimation<T, V>? = null

        internal var isFinished: Boolean by mutableStateOf(true)
        internal var resetSnapValue by mutableFloatStateOf(NoReset)

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1541-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1576–1610)


        /**
         * When the target state has changed, but the target value remains the same, the initial
         * value animation completely controls the animated value. When this flag is `true`, the
         * [animation] can be ignored and only the [initialValueState] is needed to determine the
         * value. When this is `false`, if there is an [initialValueState], it is used only for
         * adjusting the initial value of [animation].
         */
        private var useOnlyInitialValue = false

        // Changed during animation, no concerns of rolling back
        override var value: T by mutableStateOf(initialValue)
            internal set

        private var velocityVector: V = initialVelocityVector
        internal var durationNanos by mutableLongStateOf(animation.durationNanos)

        private var isSeeking = false

        internal fun onPlayTimeChanged(playTimeNanos: Long, scaleToEnd: Boolean) {
            val playTime = if (scaleToEnd) animation.durationNanos else playTimeNanos
            value = animation.getValueFromNanos(playTime)
            velocityVector = animation.getVelocityVectorFromNanos(playTime)
            if (animation.isFinishedFromNanos(playTime)) {
                isFinished = true
            }
        }

        internal fun seekTo(playTimeNanos: Long) {
            if (resetSnapValue != NoReset) {
                return
            }
            isSeeking = true // SeekableTransitionState won't use interrupted animation spec
            if (animation.targetValue == animation.initialValue) {
                // This is likely an interrupted animation and the initial value is changing, but

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1576-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1611–1645)

                // the target value remained the same. The initial value animation has the target
                // value, so only the initial value animation is changing the value.
                value = animation.targetValue
            } else {
                // TODO: unlikely but need to double check that animation returns the correct values
                // when play time is way past their durations.
                value = animation.getValueFromNanos(playTimeNanos)
                velocityVector = animation.getVelocityVectorFromNanos(playTimeNanos)
            }
        }

        /**
         * Updates the initial value animation. When a SeekableTransitionState transition is
         * interrupted, the ongoing animation is moved to changing the initial value. The starting
         * point of the animation is then animated toward the value that would be set at the target
         * state, while the current value is controlled by seeking or animation.
         */
        internal fun updateInitialValue() {
            val animState = initialValueState ?: return
            val animation = initialValueAnimation ?: return

            val initialPlayTimeNanos =
                (
                    // Single-precision floating point is not sufficient here as it only has about 7
                    // decimal digits of precision. We are dealing with nanos which has at least 9
                    // decimal digits in most cases.
                    animState.durationNanos * animState.value.toDouble())
                    .roundToLong()
            val initialValue = animation.getValueFromNanos(initialPlayTimeNanos)
            if (useOnlyInitialValue) {
                this.animation.mutableTargetValue = initialValue
            }
            this.animation.mutableInitialValue = initialValue
            durationNanos = this.animation.durationNanos
            if (resetSnapValue == ResetNoSnap || useOnlyInitialValue) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1611-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1646–1680)

                value = initialValue
            } else {
                seekTo(playTimeNanos)
            }
            if (initialPlayTimeNanos >= animState.durationNanos) {
                initialValueState = null
                initialValueAnimation = null
            } else {
                animState.isComplete = false
            }
        }

        private val interruptionSpec: FiniteAnimationSpec<T>

        init {
            val visibilityThreshold: T? =
                defaultVisibilityThresholdFor(typeConverter)?.let {
                    val vector = typeConverter.convertToVector(initialValue)
                    for (id in 0 until vector.size) {
                        vector[id] = it
                    }
                    typeConverter.convertFromVector(vector)
                }
            interruptionSpec = spring(visibilityThreshold = visibilityThreshold)
        }

        private fun updateAnimation(initialValue: T = value, isInterrupted: Boolean = false) {
            if (initialValueAnimation?.targetValue == targetValue) {
                // This animation didn't change the target value, so let the initial value animation
                // take care of it.
                animation =
                    TargetBasedAnimation(
                        interruptionSpec,
                        typeConverter,
                        initialValue,

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1646-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1681–1715)

                        initialValue,
                        velocityVector.newInstance(), // 0 velocity
                    )
                useOnlyInitialValue = true
                durationNanos = animation.durationNanos
                return
            }
            val currentSpec = animationSpec
            val specWithoutDelay =
                if (isInterrupted && !isSeeking) {
                    // When interrupted, use the default spring, unless the spec is also a spring
                    // or specifies its own interruption spec.
                    when (currentSpec) {
                        is SpringSpec<*> -> currentSpec
                        is InterruptionAwareAnimationSpec<T> -> currentSpec.interruptionSpec
                        else -> interruptionSpec
                    }
                } else {
                    currentSpec
                }
            val spec =
                if (playTimeNanos <= 0L) {
                    specWithoutDelay
                } else {
                    delayed(specWithoutDelay, playTimeNanos)
                }
            animation =
                TargetBasedAnimation(spec, typeConverter, initialValue, targetValue, velocityVector)
            durationNanos = animation.durationNanos
            useOnlyInitialValue = false
            onChildAnimationUpdated()
        }

        internal fun resetAnimation() {
            resetSnapValue = ResetNoSnap

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1681-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1716–1750)

        }

        /**
         * Forces the value to the given fraction or reset value. If [fraction] is
         * [ResetAnimationSnapCurrent] or [ResetAnimationSnapTarget], the animated values are
         * directly moved to the start or end of the animation.
         */
        internal fun resetAnimationValue(fraction: Float) {
            if (fraction == ResetAnimationSnapCurrent || fraction == ResetAnimationSnapTarget) {
                val initAnim = initialValueAnimation
                if (initAnim != null) {
                    animation.mutableInitialValue = initAnim.targetValue
                    initialValueState = null
                    initialValueAnimation = null
                }

                val animationValue =
                    if (fraction == ResetAnimationSnapCurrent) {
                        animation.initialValue
                    } else {
                        animation.targetValue
                    }
                animation.mutableInitialValue = animationValue
                animation.mutableTargetValue = animationValue
                value = animationValue
                durationNanos = animation.durationNanos
            } else {
                resetSnapValue = fraction
            }
        }

        internal fun setInitialValueAnimation(
            animationState: SeekableTransitionState.SeekingAnimationState
        ) {
            if (animation.targetValue != animation.initialValue) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1716-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1751–1785)

                // Continue the animation from the current position to the target
                initialValueAnimation = animation
                initialValueState = animationState
            }
            animation =
                TargetBasedAnimation(
                    interruptionSpec,
                    typeConverter,
                    value,
                    value,
                    velocityVector.newInstance(), // 0 velocity
                )
            durationNanos = animation.durationNanos
            useOnlyInitialValue = true
        }

        internal fun clearInitialAnimation() {
            initialValueAnimation = null
            initialValueState = null
            useOnlyInitialValue = false
        }

        override fun toString(): String {
            return "current value: $value, target: $targetValue, spec: $animationSpec"
        }

        // This gets called *during* composition
        @OptIn(InternalAnimationApi::class)
        internal fun updateTargetValue(
            targetValue: T,
            animationSpec: FiniteAnimationSpec<T>,
            forcedInitialValue: T? = null,
            forcedInitialVelocity: V? = null,
        ) {
            if (useOnlyInitialValue && targetValue == initialValueAnimation?.targetValue) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1751-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 176–210)

 *
 * [DeferredTransition] extends the standard [Transition] to allow manual manipulation of
 * transformation properties before the automatic transition begins. This is particularly useful for
 * coordinating multi-stage animations like predictive back gestures.
 */
@Stable
public class DeferredTransition<S>
internal constructor(transitionState: DeferredTransitionState<S>, label: String? = null) :
    Transition<S>(transitionState, null, label)

/**
 * Creates and remembers a [DeferredTransition] for a given [DeferredTransitionState].
 *
 * A [DeferredTransition] allows for a two-stage state update:
 * 1. **Deferred Phase:** Initiated by [DeferredTransitionState.defer]. The transition's
 *    `targetState` remains unchanged, while the new target is exposed via `pendingTargetState`.
 *    This allows higher-level components to implement custom behavior (e.g., manual gesture
 *    tracking) while the automatic transition is "held".
 * 2. **Automatic Phase:** Initiated by [DeferredTransitionState.animateTo]. The
 *    `pendingTargetState` is cleared and `targetState` is updated, starting the automatic
 *    transition animations.
 *
 * @param transitionState The [DeferredTransitionState] that manages the current and target states.
 * @param label An optional label for the transition to be displayed in Android Studio's Animation
 *   Preview.
 * @return A [DeferredTransition] that will update whenever [transitionState] changes.
 * @sample androidx.compose.animation.core.samples.DeferredTransitionSample
 */
@Composable
public fun <T> rememberDeferredTransition(
    transitionState: DeferredTransitionState<T>,
    label: String? = null,
): DeferredTransition<T> {
    return rememberTransition(transitionState as TransitionState<T>, label) as DeferredTransition<T>
}

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1786–1820)

                return // we're already animating to the target value through the initial value
            }
            if (
                this.targetValue == targetValue &&
                    resetSnapValue == NoReset &&
                    (forcedInitialValue == null || forcedInitialValue == animation.initialValue)
            ) {
                return // nothing to change. Just continue the existing animation.
            }
            this.targetValue = targetValue
            this.animationSpec = animationSpec
            val initialValue =
                forcedInitialValue
                    ?: if (resetSnapValue == ResetAnimationSnap) targetValue else value
            if (forcedInitialValue != null) {
                value = initialValue
                if (forcedInitialVelocity != null) {
                    velocityVector = forcedInitialVelocity
                }
            }
            updateAnimation(initialValue, isInterrupted = !isFinished && forcedInitialValue == null)
            isFinished = resetSnapValue == ResetAnimationSnap
            // This is needed because the target change could happen during a transition
            if (resetSnapValue >= 0f) {
                val duration = animation.durationNanos
                value = animation.getValueFromNanos((duration * resetSnapValue).toLong())
            } else if (resetSnapValue == ResetAnimationSnap) {
                value = targetValue
            }
            useOnlyInitialValue = false
            resetSnapValue = NoReset
        }

        // This gets called *during* composition
        internal fun updateInitialAndTargetValue(

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1786-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1821–1855)

            initialValue: T,
            targetValue: T,
            animationSpec: FiniteAnimationSpec<T>,
        ) {
            this.targetValue = targetValue
            this.animationSpec = animationSpec
            if (animation.initialValue == initialValue && animation.targetValue == targetValue) {
                return
            }
            updateAnimation(initialValue)
        }
    }

    private class SegmentImpl<S>(override val initialState: S, override val targetState: S) :
        Segment<S> {
        override fun equals(other: Any?): Boolean {
            return other is Segment<*> &&
                initialState == other.initialState &&
                targetState == other.targetState
        }

        override fun hashCode(): Int {
            return initialState.hashCode() * 31 + targetState.hashCode()
        }
    }

    /**
     * [Segment] holds [initialState] and [targetState], which are the beginning and end of a
     * transition. These states will be used to obtain the animation spec that will be used for this
     * transition from the child animations.
     */
    @JvmDefaultWithCompatibility
    public interface Segment<S> {
        /** Initial state of a Transition Segment. This is the state that transition starts from. */
        public val initialState: S

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1821-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1856–1890)


        /** Target state of a Transition Segment. This is the state that transition will end on. */
        public val targetState: S

        /**
         * Returns whether the provided state matches the [initialState] && the provided
         * [targetState] matches [Segment.targetState].
         */
        public infix fun S.isTransitioningTo(targetState: S): Boolean {
            return this == initialState && targetState == this@Segment.targetState
        }
    }

    /**
     * [DeferredAnimation] can be constructed using [Transition.createDeferredAnimation] during
     * composition and initialized later. It is useful for animations, the target values for which
     * are unknown at composition time (e.g. layout size/position, etc).
     *
     * Once a [DeferredAnimation] is created, it can be configured and updated as needed using
     * [DeferredAnimation.animate] method.
     */
    @Suppress("BanRestrictTo")
    @RestrictTo(RestrictTo.Scope.LIBRARY)
    public inner class DeferredAnimation<T, V : AnimationVector>
    internal constructor(
        public val typeConverter: TwoWayConverter<T, V>,
        public val label: String,
    ) {
        internal var data: DeferredAnimationData<T, V>? by mutableStateOf(null)

        internal inner class DeferredAnimationData<T, V : AnimationVector>(
            val animation: Transition<S>.TransitionAnimationState<T, V>,
            var transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
            var targetValueByState: (state: S) -> T,
        ) : State<T> {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1856-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1891–1925)

            fun updateAnimationStates(
                segment: Segment<S>,
                forcedInitialValue: T? = null,
                forcedInitialVelocity: V? = null,
            ) {
                val targetValue = targetValueByState(segment.targetState)
                if (isSeeking) {
                    val initialValue = targetValueByState(segment.initialState)
                    // In the case of seeking, we also need to update initial value as needed
                    animation.updateInitialAndTargetValue(
                        initialValue,
                        targetValue,
                        segment.transitionSpec(),
                    )
                } else {
                    animation.updateTargetValue(
                        targetValue,
                        segment.transitionSpec(),
                        forcedInitialValue,
                        forcedInitialVelocity,
                    )
                }
            }

            override val value: T
                get() {
                    updateAnimationStates(segment)
                    return animation.value
                }
        }

        /**
         * [DeferredAnimation] allows the animation setup to be deferred until a later time after
         * composition. [animate] can be used to set up a [DeferredAnimation]. Like other Transition
         * animations such as [Transition.animateFloat], [DeferredAnimation] also expects

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1891-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1926–1960)

         * [transitionSpec] and [targetValueByState] for the mapping from target state to animation
         * spec and target value, respectively.
         */
        public fun animate(
            transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
            targetValueByState: (state: S) -> T,
        ): State<T> = animate(transitionSpec, null, null, targetValueByState)

        /**
         * [DeferredAnimation] allows the animation setup to be deferred until a later time after
         * composition. [animate] can be used to set up a [DeferredAnimation]. Like other Transition
         * animations such as [Transition.animateFloat], [DeferredAnimation] also expects
         * [transitionSpec] and [targetValueByState] for the mapping from target state to animation
         * spec and target value, respectively.
         *
         * This overload of [animate] also allows forcing an initial value and/or velocity for the
         * animation, which is useful for handoff from a manual deferred phase to the automatic
         * transition phase.
         *
         * @param transitionSpec mapping from segment to animation spec
         * @param forcedInitialValue optional initial value to use for the animation, instead of the
         *   current value
         * @param forcedInitialVelocity optional initial velocity to use for the animation
         * @param targetValueByState mapping from target state to target value
         */
        public fun animate(
            transitionSpec: Segment<S>.() -> FiniteAnimationSpec<T>,
            forcedInitialValue: T? = null,
            forcedInitialVelocity: V? = null,
            targetValueByState: (state: S) -> T,
        ): State<T> {
            val animData: DeferredAnimationData<T, V> =
                data
                    ?: DeferredAnimationData(
                            TransitionAnimationState(

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1926-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1961–1995)

                                targetValueByState(currentState),
                                typeConverter.createZeroVectorFrom(
                                    targetValueByState(currentState)
                                ),
                                typeConverter,
                                label,
                            ),
                            transitionSpec,
                            targetValueByState,
                        )
                        .apply {
                            data = this
                            addAnimation(this.animation)
                        }
            return animData.apply {
                // Update animtion data with the latest mapping
                this.targetValueByState = targetValueByState
                this.transitionSpec = transitionSpec

                updateAnimationStates(segment, forcedInitialValue, forcedInitialVelocity)
            }
        }

        internal fun setupSeeking() {
            data?.apply {
                animation.updateInitialAndTargetValue(
                    targetValueByState(segment.initialState),
                    targetValueByState(segment.targetState),
                    segment.transitionSpec(),
                )
            }
        }
    }

    internal fun removeAnimation(deferredAnimation: DeferredAnimation<*, *>) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1961-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 1996–2030)

        deferredAnimation.data?.animation?.let { removeAnimation(it) }
    }
}

@PublishedApi
internal class TransitionInstance<S>(
    transitionState: TransitionState<S>,
    parentTransition: Transition<*>?,
    label: String? = null,
) : Transition<S>(transitionState, parentTransition, label) {

    @PublishedApi
    internal constructor(
        transitionState: TransitionState<S>,
        label: String? = null,
    ) : this(transitionState, null, label)

    internal constructor(
        initialState: S,
        label: String?,
    ) : this(MutableTransitionState(initialState), null, label)

    @PublishedApi
    internal constructor(
        transitionState: MutableTransitionState<S>,
        label: String? = null,
    ) : this(transitionState as TransitionState<S>, null, label)
}

// When a TransitionAnimation doesn't need to be reset
private const val NoReset = -1f

// When the animation needs to be changed because of a target update
private const val ResetNoSnap = -2f


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-1996-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2031–2065)

// When the animation should be reset to have the same start and end value
private const val ResetAnimationSnap = -3f

// Snap to the current state and set the initial and target values to the same thing
private const val ResetAnimationSnapCurrent = -4f

// Snap to the target state and set the initial and target values to the same thing
private const val ResetAnimationSnapTarget = -5f

/**
 * This creates a [Transition.DeferredAnimation], which will not animate until it is set up using
 * [Transition.DeferredAnimation.animate]. Once the animation is set up, it will animate from the
 * [currentState][Transition.currentState] to [targetState][Transition.targetState]. If the
 * [Transition] has already arrived at its target state at the time when the animation added, there
 * will be no animation.
 *
 * @param typeConverter A converter to convert any value of type [T] from/to an [AnimationVector]
 * @param label A label for differentiating this animation from others in android studio.
 */
@Suppress("BanRestrictTo")
@RestrictTo(RestrictTo.Scope.LIBRARY)
@Composable
public fun <S, T, V : AnimationVector> Transition<S>.createDeferredAnimation(
    typeConverter: TwoWayConverter<T, V>,
    label: String = "DeferredAnimation",
): Transition<S>.DeferredAnimation<T, V> {
    val lazyAnim = remember(this) { DeferredAnimation(typeConverter, label) }
    DisposableEffect(lazyAnim) { onDispose { removeAnimation(lazyAnim) } }
    if (isSeeking) {
        lazyAnim.setupSeeking()
    }
    return lazyAnim
}

/**

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2031-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2066–2100)

 * [createChildTransition] creates a child Transition based on the mapping between parent state to
 * child state provided in [transformToChildState]. This serves the following purposes:
 * 1) Hoist the child transition state into parent transition. Therefore the parent Transition will
 *    be aware of whether there's any on-going animation due to the same target state change. This
 *    will further allow sequential animation to be set up when all animations have finished.
 * 2) Separation of concerns. The child transition can respresent a much more simplified state
 *    transition when, for example, mapping from an enum parent state to a Boolean visible state for
 *    passing further down the compose tree. The child composables hence can be designed around
 *    handling a more simple and a more relevant state change.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @sample androidx.compose.animation.core.samples.CreateChildTransitionSample
 */
@Composable
public inline fun <S, T> Transition<S>.createChildTransition(
    label: String = "ChildTransition",
    transformToChildState: @Composable (parentState: S) -> T,
): Transition<T> {
    val initialParentState = remember(this) { this.currentState }
    val initialState = transformToChildState(if (isSeeking) currentState else initialParentState)
    val targetState = transformToChildState(this.targetState)
    val childTransition = createChildTransitionInternal(initialState, targetState, label)
    if (!isSeeking) {
        val pendingTargetState = pendingTargetState?.let { transformToChildState(it) }
        childTransition.updatePendingTarget(pendingTargetState)
    }
    return childTransition
}

@PublishedApi
@Composable
internal fun <S, T> Transition<S>.createChildTransitionInternal(
    initialState: T,
    targetState: T,

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2066-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2101–2135)

    childLabel: String,
): Transition<T> {
    val transition =
        remember(this) {
            TransitionInstance(MutableTransitionState(initialState), this, childLabel)
        }

    DisposableEffect(transition) {
        addTransition(transition)
        onDispose { removeTransition(transition) }
    }

    if (isSeeking) {
        transition.setPlaytimeAfterInitialAndTargetStateEstablished(
            initialState,
            targetState,
            this.lastSeekedTimeNanos,
        )
    } else {
        transition.updateTarget(targetState)
        transition.isSeeking = false
    }
    return transition
}

/**
 * Creates an animation of type [T] as a part of the given [Transition]. This means the states of
 * this animation will be managed by the [Transition]. [typeConverter] will be used to convert
 * between type [T] and [AnimationVector] so that the animation system knows how to animate it.
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2101-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 211–245)


internal const val AnimationDebugDurationScale = 1

/**
 * Use with [rememberTransition] to create a [Transition] that can be dynamically targeted with
 * [MutableTransitionState] or seekable with [SeekableTransitionState].
 */
public sealed class TransitionState<S> {
    /**
     * Current state of the transition. If there is an active transition, [currentState] and
     * [targetState] are different.
     */
    public abstract var currentState: S
        internal set

    /**
     * Target state of the transition. If this is the same as [currentState], no transition is
     * active.
     */
    public abstract var targetState: S
        internal set

    // Updated from Transition
    internal var isRunning: Boolean by mutableStateOf(false)

    internal abstract fun transitionConfigured(transition: Transition<S>)

    internal abstract fun transitionRemoved()
}

/**
 * This is used to prevent exhaustive `when` from limiting the use of [TransitionState] to only
 * [MutableState] and [SeekableTransitionState]. The developer must always have an `else`. It is
 * unlikely to be a concern, but this will alleviate any worries about expanding the subclasses of
 * [TransitionState].

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2136–2170)

 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 * @see updateTransition
 * @see rememberTransition
 * @see Transition.animateFloat
 * @see androidx.compose.animation.animateColor
 */
@Composable
public inline fun <S, T, V : AnimationVector> Transition<S>.animateValue(
    typeConverter: TwoWayConverter<T, V>,
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<T> = {
        spring()
    },
    label: String = "ValueAnimation",
    targetValueByState: @Composable (state: S) -> T,
): State<T> {

    val initialState =
        if (!isSeeking) {
            // For non-seeking use cases, we can avoid reading currentState frequently by querying
            // it only once when initializing TransitionAnimation.
            remember(this) { Snapshot.withoutReadObservation { currentState } }
        } else {
            currentState
        }
    val initialValue = targetValueByState(initialState)

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2136-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2171–2205)


    // `targetState` is changed in composition in rememberTransition before consumed here. Due to
    // b/393642162, this consumption will cause a 2nd recomposition, meaning this read will cause
    // recomposition for both the first and second frame of the animation. As a temporary
    // workaround, `derivedStateOf` is added here to avoid recomposing when the state value is the
    // same.
    val targetValue = targetValueByState(remember(this) { derivedStateOf { targetState } }.value)
    val animationSpec = transitionSpec(remember(this) { derivedStateOf { segment } }.value)

    return createTransitionAnimation(initialValue, targetValue, animationSpec, typeConverter, label)
}

@PublishedApi
@Composable
internal fun <S, T, V : AnimationVector> Transition<S>.createTransitionAnimation(
    initialValue: T,
    targetValue: T,
    animationSpec: FiniteAnimationSpec<T>,
    typeConverter: TwoWayConverter<T, V>,
    label: String,
): State<T> {
    val transitionAnimation =
        remember(this) {
            // Remember currently observes state reads in its calculation lambda, which leads to
            // recomposition on some state changes even though the lambda will not be invoked again.
            // Tracked at b/392921611. Until this is fixed, we need to explicitly disable state
            // observation in remember.
            Snapshot.withoutReadObservation {
                // Initialize the animation state to initialState value, so if it's added during a
                // transition run, it'll participate in the animation.
                // This is preferred because it's easy to opt out - Simply adding new animation once
                // currentState == targetState would opt out.
                TransitionAnimationState(
                    initialValue,
                    typeConverter.createZeroVectorFrom(targetValue),

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2171-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2206–2240)

                    typeConverter,
                    label,
                )
            }
        }
    UpdateInitialAndTargetValues(transitionAnimation, initialValue, targetValue, animationSpec)

    DisposableEffect(transitionAnimation) {
        addAnimation(transitionAnimation)
        onDispose { removeAnimation(transitionAnimation) }
    }
    return transitionAnimation
}

// This composable function is needed to contain recompositions caused by reads of the internal
// animation states to an internal recomposition scope. Without this function, the caller of
// animateValue gets recomposed when an animation starts.
@Composable
private fun <S, T, V : AnimationVector> Transition<S>.UpdateInitialAndTargetValues(
    transitionAnimation: Transition<S>.TransitionAnimationState<T, V>,
    initialValue: T,
    targetValue: T,
    animationSpec: FiniteAnimationSpec<T>,
) {
    if (isSeeking) {
        // In the case of seeking, we also need to update initial value as needed
        transitionAnimation.updateInitialAndTargetValue(initialValue, targetValue, animationSpec)
    } else {
        transitionAnimation.updateTargetValue(targetValue, animationSpec)
    }
}

// TODO: Remove noinline when b/174814083 is fixed.
/**
 * Creates a Float animation as a part of the given [Transition]. This means the states of this

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2206-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2241–2275)

 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * @sample androidx.compose.animation.core.samples.AnimateFloatSample
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 * @see rememberTransition
 * @see updateTransition
 * @see Transition.animateValue
 * @see androidx.compose.animation.animateColor
 */
@Composable
public inline fun <S> Transition<S>.animateFloat(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Float> = {
        spring()
    },
    label: String = "FloatAnimation",
    targetValueByState: @Composable (state: S) -> Float,
): State<Float> = animateValue(Float.VectorConverter, transitionSpec, label, targetValueByState)

/**

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2241-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2276–2310)

 * Creates a [Dp] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateDp(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Dp> = {
        spring(visibilityThreshold = Dp.VisibilityThreshold)
    },
    label: String = "DpAnimation",
    targetValueByState: @Composable (state: S) -> Dp,
): State<Dp> = animateValue(Dp.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates an [Offset] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2276-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2311–2345)

 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateOffset(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Offset> = {
        spring(visibilityThreshold = Offset.VisibilityThreshold)
    },
    label: String = "OffsetAnimation",
    targetValueByState: @Composable (state: S) -> Offset,
): State<Offset> = animateValue(Offset.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates a [Size] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2311-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2346–2380)

 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateSize(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Size> = {
        spring(visibilityThreshold = Size.VisibilityThreshold)
    },
    label: String = "SizeAnimation",
    targetValueByState: @Composable (state: S) -> Size,
): State<Size> = animateValue(Size.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates a [IntOffset] animation as a part of the given [Transition]. This means the states of
 * this animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2346-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2381–2415)

 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateIntOffset(
    noinline transitionSpec:
        @Composable
        Transition.Segment<S>.() -> FiniteAnimationSpec<IntOffset> =
        {
            spring(visibilityThreshold = IntOffset(1, 1))
        },
    label: String = "IntOffsetAnimation",
    targetValueByState: @Composable (state: S) -> IntOffset,
): State<IntOffset> =
    animateValue(IntOffset.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates a [Int] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2381-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2416–2450)

 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateInt(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Int> = {
        spring(visibilityThreshold = 1)
    },
    label: String = "IntAnimation",
    targetValueByState: @Composable (state: S) -> Int,
): State<Int> = animateValue(Int.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates a [IntSize] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2416-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2451–2485)

public inline fun <S> Transition<S>.animateIntSize(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<IntSize> =
        {
            spring(visibilityThreshold = IntSize(1, 1))
        },
    label: String = "IntSizeAnimation",
    targetValueByState: @Composable (state: S) -> IntSize,
): State<IntSize> = animateValue(IntSize.VectorConverter, transitionSpec, label, targetValueByState)

/**
 * Creates a [Rect] animation as a part of the given [Transition]. This means the states of this
 * animation will be managed by the [Transition].
 *
 * [targetValueByState] is used as a mapping from a target state to the target value of this
 * animation. [Transition] will be using this mapping to determine what value to target this
 * animation towards. __Note__ that [targetValueByState] is a composable function. This means the
 * mapping function could access states, CompositionLocals, themes, etc. If the targetValue changes
 * outside of a [Transition] run (i.e. when the [Transition] already reached its targetState), the
 * [Transition] will start running again to ensure this animation reaches its new target smoothly.
 *
 * An optional [transitionSpec] can be provided to specify (potentially different) animation for
 * each pair of initialState and targetState. [FiniteAnimationSpec] includes any non-infinite
 * animation, such as [tween], [spring], [keyframes] and even [repeatable], but not
 * [infiniteRepeatable]. By default, [transitionSpec] uses a [spring] animation for all transition
 * destinations.
 *
 * [label] is used to differentiate from other animations in the same transition in Android Studio.
 *
 * @return A [State] object, the value of which is updated by animation
 */
@Composable
public inline fun <S> Transition<S>.animateRect(
    noinline transitionSpec: @Composable Transition.Segment<S>.() -> FiniteAnimationSpec<Rect> = {
        spring(visibilityThreshold = Rect.VisibilityThreshold)
    },

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2451-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 246–280)

 */
private class PreventExhaustiveWhenTransitionState : TransitionState<Any?>() {
    override var currentState: Any?
        get() = null
        set(_) {}

    override var targetState: Any?
        get() = null
        set(_) {}

    override fun transitionConfigured(transition: Transition<Any?>) {}

    override fun transitionRemoved() {}
}

/**
 * MutableTransitionState contains two fields: [currentState] and [targetState]. [currentState] is
 * initialized to the provided initialState, and can only be mutated by a [Transition].
 * [targetState] is also initialized to initialState. It can be mutated to alter the course of a
 * transition animation that is created with the [MutableTransitionState] using
 * [rememberTransition]. Both [currentState] and [targetState] are backed by a [State] object.
 *
 * @sample androidx.compose.animation.core.samples.InitialStateSample
 * @see rememberTransition
 */
public class MutableTransitionState<S>(initialState: S) : TransitionState<S>() {
    /**
     * Current state of the transition. [currentState] is initialized to the initialState that the
     * [MutableTransitionState] is constructed with.
     *
     * It will be updated by the Transition that is created with this [MutableTransitionState] when
     * the transition arrives at a new state.
     */
    override var currentState: S by mutableStateOf(initialState)
        internal set

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 2486–2489)

    label: String = "RectAnimation",
    targetValueByState: @Composable (state: S) -> Rect,
): State<Rect> = animateValue(Rect.VectorConverter, transitionSpec, label, targetValueByState)


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-2486-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 281–315)


    /**
     * Target state of the transition. [targetState] is initialized to the initialState that the
     * [MutableTransitionState] is constructed with.
     *
     * It can be updated to a new state at any time. When that happens, the [Transition] that is
     * created with this [MutableTransitionState] will update its [Transition.targetState] to the
     * same and subsequently starts a transition animation to animate from the current values to the
     * new target.
     */
    override var targetState: S by mutableStateOf(initialState)
        public set

    /**
     * [isIdle] returns whether the transition has finished running. This will return false once the
     * [targetState] has been set to a different value than [currentState].
     *
     * @sample androidx.compose.animation.core.samples.TransitionStateIsIdleSample
     */
    public val isIdle: Boolean
        get() = (currentState == targetState) && !isRunning

    override fun transitionConfigured(transition: Transition<S>) {}

    override fun transitionRemoved() {}
}

/**
 * Lambda to call [SeekableTransitionState.onTotalDurationChanged] when the
 * [Transition.totalDurationNanos] has changed.
 */
private val SeekableTransitionStateTotalDurationChanged: (SeekableTransitionState<*>) -> Unit = {
    it.onTotalDurationChanged()
}


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 316–350)

/**
 * A [TransitionState] that can manipulate the progress of the [Transition] by seeking with [seekTo]
 * or animating with [animateTo].
 *
 * A [SeekableTransitionState] can only be used with one [Transition] instance. Once assigned, it
 * cannot be reassigned to a different [Transition] instance.
 *
 * @sample androidx.compose.animation.core.samples.SeekingAnimationSample
 */
public class SeekableTransitionState<S>(initialState: S) : TransitionState<S>() {
    override var targetState: S by mutableStateOf(initialState)
        internal set

    override var currentState: S by mutableStateOf(initialState)
        internal set

    /**
     * The value of [targetState] that the composition knows about. Seeking cannot progress until
     * the composition's target state matches [targetState].
     */
    internal var composedTargetState = initialState

    /**
     * The Transition that this is associated with. SeekableTransitionState can only be used with
     * one Transition.
     */
    private var transition: Transition<S>? = null

    // Used for seekToFraction calculations to avoid allocation
    internal var totalDurationNanos = 0L

    private val recalculateTotalDurationNanos: () -> Unit = {
        totalDurationNanos = transition?.totalDurationNanos ?: 0L
    }


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 351–385)

    internal var snapshotStateObserver: SnapshotStateObserver? = null
        set(value) {
            if (field != value) {
                field?.clear(this)
                field?.stop()
                field = value
                value?.start()
                observeTotalDuration()
            }
        }

    /**
     * The progress of the transition from [currentState] to [targetState] as a fraction of the
     * entire duration.
     *
     * If [targetState] and [currentState] are the same, [fraction] will be 0.
     */
    @get:FloatRange(from = 0.0, to = 1.0)
    public var fraction: Float by mutableFloatStateOf(0f)
        private set

    /** The continuation used when waiting for a composition. */
    internal var compositionContinuation: CancellableContinuation<S>? = null

    /**
     * Used to lock the [compositionContinuation] while modifying or checking its value. Also used
     * for locking the [composedTargetState].
     */
    internal val compositionContinuationMutex = Mutex()

    /** Used to prevent [snapTo], [seekTo], and [animateTo] from running simultaneously. */
    private val mutatorMutex = MutatorMutex()

    /**
     * When the animation is running, this contains the most recent frame time. When the animation

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 36–70)

import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshots.Snapshot
import androidx.compose.runtime.snapshots.SnapshotStateObserver
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.fastAny
import androidx.compose.ui.util.fastFold
import androidx.compose.ui.util.fastForEach
import kotlin.coroutines.coroutineContext
import kotlin.coroutines.resume
import kotlin.jvm.JvmName
import kotlin.math.max
import kotlin.math.roundToLong
import kotlinx.coroutines.CancellableContinuation
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineStart
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.isActive
import kotlinx.coroutines.launch
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock

/**
 * This sets up a [Transition], and updates it with the target provided by [targetState]. When
 * [targetState] changes, [Transition] will run all of its child animations towards their target
 * values specified for the new [targetState]. Child animations can be dynamically added using

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 386–420)

     * has stopped, this is [AnimationConstants.UnspecifiedTime].
     */
    private var lastFrameTimeNanos: Long = AnimationConstants.UnspecifiedTime

    /**
     * List of animation of initial values. The list should be empty when [seekTo], [snapTo], or
     * [animateTo] completes successfully.
     */
    private val initialValueAnimations = MutableObjectList<SeekingAnimationState>()

    /**
     * When [animateTo] is executing, this is non-null, providing the information being used to
     * animate its value. This will be null while seeking or after [snapTo].
     */
    private var currentAnimation: SeekingAnimationState? = null

    /** Lambda instance used for capturing the first frame of an animation. */
    private val firstFrameLambda: (Long) -> Unit = { frameTimeNanos ->
        lastFrameTimeNanos = frameTimeNanos
    }

    /**
     * Used in [animateOneFrameLambda], the duration scale must be set immediately prior to invoking
     * [withFrameNanos] with [animateOneFrameLambda].
     */
    private var durationScale: Float = 0f

    /**
     * True when the next animation frame is the first frame following
     * [waitForCompositionAfterTargetStateChange], so that main-thread time spent composing and
     * laying out the new target state does not advance the animation by multiple frames at once.
     */
    private var isFirstFrameAfterTargetStateComposition: Boolean = false

    /** Lambda instance used for animating a single frame within [withFrameNanos]. */

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 421–455)

    private val animateOneFrameLambda: (Long) -> Unit = { frameTimeNanos ->
        val rawDelta =
            if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                0L
            } else {
                frameTimeNanos - lastFrameTimeNanos
            }
        val delta =
            if (isFirstFrameAfterTargetStateComposition) {
                isFirstFrameAfterTargetStateComposition = false
                rawDelta.coerceAtMost(MaxFirstFrameDeltaNanos)
            } else {
                rawDelta
            }
        lastFrameTimeNanos = frameTimeNanos
        val deltaPlayTimeNanos =
            if (durationScale <= 0f || durationScale.isNaN()) {
                0L
            } else {
                (delta / durationScale.toDouble()).roundToLong()
            }
        if (initialValueAnimations.isNotEmpty()) {
            initialValueAnimations.forEach { animation ->
                // updateInitialValues will set to false if the animation isn't
                // complete
                recalculateAnimationValue(animation, deltaPlayTimeNanos)
                animation.isComplete = true
            }
            transition?.updateInitialValues()
            initialValueAnimations.removeIf { it.isComplete }
        }
        val currentAnimation = currentAnimation
        if (currentAnimation != null) {
            currentAnimation.durationNanos = totalDurationNanos
            recalculateAnimationValue(currentAnimation, deltaPlayTimeNanos)

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 456–490)

            fraction = currentAnimation.value
            if (currentAnimation.value == 1f) {
                this@SeekableTransitionState.currentAnimation = null // all done!
            }
            seekToFraction()
        }
    }

    /**
     * Stops all animations, including the initial value animations and sets the [fraction] to `1`.
     */
    private fun endAllAnimations() {
        transition?.clearInitialAnimations()
        initialValueAnimations.clear()
        val current = currentAnimation
        if (current != null) {
            currentAnimation = null
            fraction = 1f
            seekToFraction()
        }
    }

    /**
     * Starts the animation. It will advance both the currently-running animation and initial value
     * animations. If the previous animation was stopped ([seekTo] or [snapTo] or no previous
     * animation was running), then it will require one frame to capture the frame time before the
     * animation starts.
     */
    private suspend fun runAnimations() {
        if (initialValueAnimations.isEmpty() && currentAnimation == null) {
            // nothing to animate
            return
        }
        val durationScale = coroutineContext.durationScale
        if (durationScale <= 0f || durationScale.isNaN()) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 491–525)

            endAllAnimations()
            lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
            isFirstFrameAfterTargetStateComposition = false
            return
        }
        if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
            // have to capture one frame to get the start time
            withFrameNanos(firstFrameLambda)
        }
        while (initialValueAnimations.isNotEmpty() || currentAnimation != null) {
            animateOneFrame()
        }
        lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
        isFirstFrameAfterTargetStateComposition = false
    }

    /**
     * Does one frame of work. If there is no previous animation, then it will capture the
     * [lastFrameTimeNanos]. If there was a previous animation, it will advance by one frame.
     */
    private suspend fun doOneFrame() {
        if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
            // have to capture one frame to get the start time
            withFrameNanos(firstFrameLambda)
        } else {
            animateOneFrame()
        }
    }

    /** Advances all animations by one frame. */
    private suspend fun animateOneFrame() {
        val durationScale = coroutineContext.durationScale
        if (durationScale <= 0f || durationScale.isNaN()) {
            endAllAnimations()
        } else {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 526–560)

            this@SeekableTransitionState.durationScale = durationScale
            if (lastFrameTimeNanos == AnimationConstants.UnspecifiedTime) {
                withFrameNanos(firstFrameLambda)
            } else {
                withFrameNanos(animateOneFrameLambda)
            }
        }
    }

    /**
     * Calculates the [SeekingAnimationState.value] based on the [deltaPlayTimeNanos]. It uses the
     * animation spec if one is provided, or the progress of the total duration if not. This method
     * does not account for duration scale.
     */
    private fun recalculateAnimationValue(
        animation: SeekingAnimationState,
        deltaPlayTimeNanos: Long,
    ) {
        val playTimeNanos = animation.progressNanos + deltaPlayTimeNanos
        animation.progressNanos = playTimeNanos
        val durationNanos = animation.animationSpecDuration
        if (durationNanos <= 0L || playTimeNanos >= durationNanos) {
            animation.value = 1f
        } else {
            val animationSpec = animation.animationSpec
            val newValue =
                if (animationSpec != null) {
                    animationSpec
                        .getValueFromNanos(
                            playTimeNanos,
                            animation.start,
                            Target1,
                            animation.initialVelocity ?: ZeroVelocity,
                        )[0]
                } else {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 561–595)

                    lerp(animation.start[0], 1f, playTimeNanos.toFloat() / durationNanos)
                }
            animation.value = if (newValue.isNaN()) 1f else newValue.coerceIn(0f, 1f)
        }
    }

    /**
     * Sets [currentState] and [targetState] to `targetState` and snaps all values to those at that
     * state. The transition will not have any animations running after running [snapTo].
     *
     * This can have a similar effect as [seekTo]. However, [seekTo] moves the [currentState] to the
     * former [targetState] and animates the initial values of the animations from the current
     * values to those at [currentState]. [seekTo] also allows the developer to move the state
     * between any fraction between [currentState] and [targetState], while [snapTo] moves all state
     * to [targetState] without any further seeking allowed.
     *
     * @sample androidx.compose.animation.core.samples.SnapToSample
     * @see animateTo
     */
    public suspend fun snapTo(targetState: S) {
        val transition = transition ?: return
        if (
            currentState == targetState && this@SeekableTransitionState.targetState == targetState
        ) {
            return // nothing to change
        }
        mutatorMutex.mutate {
            endAllAnimations()
            lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
            isFirstFrameAfterTargetStateComposition = false
            fraction = 0f
            val fraction =
                when (targetState) {
                    currentState -> ResetAnimationSnapCurrent
                    this@SeekableTransitionState.targetState -> ResetAnimationSnapTarget

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 596–630)

                    else -> ResetAnimationSnap
                }
            transition.updateTarget(targetState)
            transition.playTimeNanos = 0L
            this@SeekableTransitionState.targetState = targetState
            this@SeekableTransitionState.fraction = 0f
            currentState = targetState
            transition.resetAnimationFraction(fraction)
            if (fraction == ResetAnimationSnap) {
                // completely changed the value, so we have to wait for a composition to have
                // the correct animation values
                waitForCompositionAfterTargetStateChange()
            }
            transition.onTransitionEnd()
        }
    }

    /**
     * Starts seeking the transition to [targetState] with [fraction] used to indicate the progress
     * towards [targetState]. If the previous `targetState` was already [targetState] then [seekTo]
     * only stops any current animation towards that state and snaps the fraction to the new value.
     * Otherwise, the [currentState] is changed to the former `targetState` and `targetState` is
     * changed to [targetState] and an animation is started, moving the start values towards the
     * former `targetState`. This will return when the initial values have reached `currentState`
     * and the [fraction] has been reached.
     *
     * [snapTo] also allows the developer to change the state, but does not animate any values.
     * Instead, it instantly moves all values to those at the new [targetState].
     *
     * @sample androidx.compose.animation.core.samples.SeekToSample
     * @see animateTo
     */
    public suspend fun seekTo(
        @FloatRange(from = 0.0, to = 1.0) fraction: Float,
        targetState: S = this.targetState,

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 631–665)

    ) {
        requirePrecondition(fraction in 0f..1f) {
            "Expecting fraction between 0 and 1. Got $fraction"
        }
        val transition = transition ?: return
        val oldTargetState = this@SeekableTransitionState.targetState
        mutatorMutex.mutate {
            coroutineScope {
                if (targetState != oldTargetState) {
                    moveAnimationToInitialState()
                } else {
                    currentAnimation = null
                    if (currentState == targetState) {
                        return@coroutineScope // Can't seek when current state is target state
                    }
                }
                if (targetState != oldTargetState) {
                    // Change the target _and_ the fraction
                    transition.updateTarget(targetState)
                    transition.playTimeNanos = 0L
                    this@SeekableTransitionState.targetState = targetState
                    transition.resetAnimationFraction(fraction)
                }
                this@SeekableTransitionState.fraction = fraction
                if (initialValueAnimations.isNotEmpty()) {
                    launch { runAnimations() }
                } else {
                    lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                    isFirstFrameAfterTargetStateComposition = false
                }
                waitForCompositionAfterTargetStateChange()
                seekToFraction()
            }
        }
    }

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 666–700)


    /** Wait for composition to set up the target values */
    private suspend fun waitForCompositionAfterTargetStateChange() {
        val expectedState = targetState
        compositionContinuationMutex.lock()
        if (expectedState == composedTargetState) {
            compositionContinuationMutex.unlock()
        } else {
            val state = suspendCancellableCoroutine { continuation ->
                compositionContinuation = continuation
                compositionContinuationMutex.unlock()
            }
            if (state != expectedState) {
                lastFrameTimeNanos = AnimationConstants.UnspecifiedTime
                throw CancellationException(
                    "snapTo() was canceled because state was changed to " +
                        "$state instead of $expectedState"
                )
            }
        }
    }

    /**
     * Waits for composition, irrespective of whether the target state has changed or not. This is
     * important for when we're waiting for the currentState to change.
     */
    private suspend fun waitForComposition() {
        val expectedState = targetState
        compositionContinuationMutex.lock()
        val state = suspendCancellableCoroutine { continuation ->
            compositionContinuation = continuation
            compositionContinuationMutex.unlock()
        }
        if (state != expectedState) {
            lastFrameTimeNanos = AnimationConstants.UnspecifiedTime

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 701–735)

            throw CancellationException("targetState while waiting for composition")
        }
    }

    /** Change the animatedInitialFraction to use the animatedFraction, if it needs to be used. */
    private fun moveAnimationToInitialState() {
        val transition = transition ?: return
        val animation =
            currentAnimation
                ?: if (totalDurationNanos <= 0 || fraction == 1f || currentState == targetState) {
                    null
                } else {
                    SeekingAnimationState().also {
                        it.value = fraction
                        val totalDurationNanos = totalDurationNanos
                        it.durationNanos = totalDurationNanos
                        it.animationSpecDuration =
                            (totalDurationNanos * (1.0 - fraction)).roundToLong()
                        it.start[0] = fraction
                    }
                }
        if (animation != null) {
            animation.durationNanos = totalDurationNanos
            initialValueAnimations += animation
            transition.setInitialAnimations(animation)
        }
        currentAnimation = null
    }

    /**
     * Updates the current `targetState` to [targetState] and begins an animation to the new state.
     * If the current `targetState` is the same as [targetState] then the current transition
     * animation is continued. If a previous transition was interrupted, [currentState] is changed
     * to the former `targetState` and the start values are animated toward the former
     * `targetState`.

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 71–105)

 * [Transition.animateFloat], [animateColor][ androidx.compose.animation.animateColor],
 * [Transition.animateValue], etc.
 *
 * [label] is used to differentiate different transitions in Android Studio.
 *
 * __Note__: There is another [rememberTransition] overload that accepts a [MutableTransitionState].
 * The difference between the two is that the [MutableTransitionState] variant: 1) supports a
 * different initial state than target state (This would allow a transition to start as soon as it
 * enters composition.) 2) can be recreated to intentionally trigger a re-start of the transition.
 *
 * @sample androidx.compose.animation.core.samples.GestureAnimationSample
 * @return a [Transition] object, to which animations can be added.
 * @see Transition
 * @see Transition.animateFloat
 * @see Transition.animateValue
 */
@Composable
public fun <T> updateTransition(targetState: T, label: String? = null): Transition<T> {
    val transition = remember { TransitionInstance(targetState, label = label) }
    transition.animateTo(targetState)
    DisposableEffect(transition) {
        onDispose {
            // Clean up on the way out, to ensure the observers are not stuck in an in-between
            // state.
            transition.onDisposed()
        }
    }
    return transition
}

/**
 * A [TransitionState] that supports a deferred phase before the automatic transition begins.
 *
 * This state is designed for scenarios where a transition should be held in an intermediate,
 * manually-controlled state (e.g., during a predictive back gesture) before proceeding to its final

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 736–770)

     *
     * Upon completion of the animation, [currentState] will be changed to [targetState].
     *
     * @param targetState The state to animate towards.
     * @param animationSpec If provided, is used to animate the animation fraction. If `null`, the
     *   transition is linearly traversed based on the duration of the transition.
     */
    @Suppress("DocumentExceptions")
    public suspend fun animateTo(
        targetState: S = this.targetState,
        animationSpec: FiniteAnimationSpec<Float>? = null,
    ) {
        val transition = transition ?: return
        mutatorMutex.mutate {
            coroutineScope {
                val oldTargetState = this@SeekableTransitionState.targetState
                if (targetState != oldTargetState) {
                    moveAnimationToInitialState()
                    fraction = 0f
                    transition.updateTarget(targetState)
                    transition.playTimeNanos = 0L
                    currentState = oldTargetState
                    this@SeekableTransitionState.targetState = targetState
                }
                val composedTargetState = compositionContinuationMutex.withLock {
                    composedTargetState
                }
                if (targetState != composedTargetState) {
                    val wasRunning = lastFrameTimeNanos != AnimationConstants.UnspecifiedTime
                    doOneFrame() // We have to wait a frame for the composition, so continue
                    // Now we shouldn't skip a frame while waiting for composition
                    waitForCompositionAfterTargetStateChange()
                    @OptIn(ExperimentalAnimationCoreApi::class)
                    if (
                        ComposeAnimationCoreFlags

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 771–805)

                            .isSeekableTransitionStateStartAfterLayoutEnabled && !wasRunning
                    ) {
                        isFirstFrameAfterTargetStateComposition = true
                    }
                }
                if (currentState != targetState) {
                    if (fraction < 1f) {
                        val runningAnimation = currentAnimation
                        val newSpec = animationSpec?.vectorize(Float.VectorConverter)
                        if (runningAnimation == null || newSpec != runningAnimation.animationSpec) {
                            // If there is a running animation, it has changed
                            val oldSpec = runningAnimation?.animationSpec
                            val oldVelocity: AnimationVector1D
                            if (oldSpec != null) {
                                oldVelocity =
                                    oldSpec.getVelocityFromNanos(
                                        playTimeNanos = runningAnimation.progressNanos,
                                        initialValue = runningAnimation.start,
                                        targetValue = Target1,
                                        initialVelocity =
                                            runningAnimation.initialVelocity ?: ZeroVelocity,
                                    )
                            } else if (
                                runningAnimation == null || runningAnimation.progressNanos == 0L
                            ) {
                                oldVelocity = ZeroVelocity
                            } else {
                                val oldDurationNanos = runningAnimation.durationNanos
                                val oldDuration =
                                    if (oldDurationNanos == AnimationConstants.UnspecifiedTime) {
                                        totalDurationNanos
                                    } else {
                                        oldDurationNanos
                                    } / (1000f * MillisToNanos)
                                if (oldDuration <= 0L) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 806–840)

                                    oldVelocity = ZeroVelocity
                                } else {
                                    oldVelocity = AnimationVector1D(1f / oldDuration)
                                }
                            }
                            val newAnimation = runningAnimation ?: SeekingAnimationState()
                            newAnimation.animationSpec = newSpec
                            newAnimation.isComplete = false
                            newAnimation.value = fraction
                            newAnimation.start[0] = fraction
                            newAnimation.durationNanos = totalDurationNanos
                            newAnimation.progressNanos = 0L
                            newAnimation.initialVelocity = oldVelocity
                            newAnimation.animationSpecDuration =
                                newSpec?.getDurationNanos(
                                    initialValue = newAnimation.start,
                                    targetValue = Target1,
                                    initialVelocity = oldVelocity,
                                ) ?: (totalDurationNanos * (1.0 - fraction)).roundToLong()
                            currentAnimation = newAnimation
                        }
                    }
                    runAnimations()
                    currentState = targetState
                    fraction = 0f
                    transition.onTransitionEnd()
                    waitForComposition()
                }
            }
        }
    }

    override fun transitionConfigured(transition: Transition<S>) {
        checkPrecondition(this.transition == null || transition == this.transition) {
            "An instance of SeekableTransitionState has been used in different Transitions. " +

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 841–875)

                "Previous instance: ${this.transition}, new instance: $transition"
        }
        this.transition = transition
    }

    override fun transitionRemoved() {
        this.transition = null
        snapshotStateObserver?.clear(this)
    }

    internal fun observeTotalDuration() {
        snapshotStateObserver?.observeReads(
            scope = this,
            onValueChangedForScope = SeekableTransitionStateTotalDurationChanged,
            block = recalculateTotalDurationNanos,
        )
    }

    internal fun onTotalDurationChanged() {
        val previousTotalDurationNanos = totalDurationNanos
        observeTotalDuration()
        if (previousTotalDurationNanos != totalDurationNanos) {
            val animation = currentAnimation
            if (animation != null) {
                if (animation.progressNanos > totalDurationNanos) {
                    endAllAnimations()
                } else {
                    animation.durationNanos = totalDurationNanos
                    if (animation.animationSpec == null) {
                        animation.animationSpecDuration =
                            ((1.0 - animation.start[0]) * totalDurationNanos).roundToLong()
                    }
                }
            } else if (totalDurationNanos != 0L) {
                // seekTo() called with a fraction. If an animation is running, we can just wait

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 876–910)

                // for the animation to change the value. The fraction may not be the best way
                // to advance a regular animation.
                seekToFraction()
            }
        }
    }

    private fun seekToFraction() {
        val transition = transition ?: return
        val playTimeNanos = (fraction.toDouble() * transition.totalDurationNanos).roundToLong()
        transition.seekAnimations(playTimeNanos)
    }

    /**
     * Contains the state for a running animation. This can be the current animation from
     * [animateTo] or an initial value animation.
     */
    internal class SeekingAnimationState {
        // The current progress with respect to the animationSpec if it exists or
        // durationNanos if animationSpec is null
        var progressNanos: Long = 0L

        // The AnimationSpec used in this animation, or null if it is a linear animation with
        // duration of durationNanos
        var animationSpec: VectorizedAnimationSpec<AnimationVector1D>? = null

        // Used by initial value animations to mark when the animation should continue
        var isComplete = false

        // The current fraction of the animation
        var value: Float = 0f

        // The start value of the animation
        var start: AnimationVector1D = AnimationVector1D(0f)


Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 911–945)

        // The initial velocity of the animation
        var initialVelocity: AnimationVector1D? = null

        // The total duration of the transition's animations. This is the totalDurationNanos
        // at the time that this was created for initial value animations. Note that this can
        // be different from the animationSpec's duration.
        var durationNanos: Long = 0L

        // The total duration of the animationSpec. This is kept cached because Spring
        // animations can take time to calculate their durations
        var animationSpecDuration: Long = 0L

        override fun toString(): String {
            return "progress nanos: $progressNanos, animationSpec: $animationSpec," +
                " isComplete: $isComplete, value: $value, start: $start," +
                " initialVelocity: $initialVelocity, durationNanos: $durationNanos," +
                " animationSpecDuration: $animationSpecDuration"
        }
    }

    private companion object {
        // AnimationVector1D with 0 value, kept so that we don't have to allocate unnecessarily
        val ZeroVelocity = AnimationVector1D(0f)

        // AnimationVector1D with 1 value, used as the target value of 1f
        val Target1 = AnimationVector1D(1f)

        // Maximum frame delta (1/60s in nanoseconds, ~16.67ms) allowed on the first frame after
        // composing and laying out a new target state when starting from idle, preventing expensive
        // first-frame composition/layout from skipping initial animation frames.
        private const val MaxFirstFrameDeltaNanos = 16_666_667L
    }
}

/**

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 946–980)

 * Creates a [Transition] and puts it in the [currentState][TransitionState.currentState] of the
 * provided [transitionState]. If the [TransitionState.targetState] changes, the [Transition] will
 * change where it will animate to.
 *
 * __Remember__: The provided [transitionState] needs to be [remember]ed.
 *
 * Compared to [updateTransition] that takes a targetState, this function supports a different
 * initial state than the first targetState. Here is an example:
 *
 * @sample androidx.compose.animation.core.samples.InitialStateSample
 *
 * In most cases, it is recommended to reuse the same [transitionState] that is [remember]ed, such
 * that [Transition] preserves continuity when [targetState][MutableTransitionState.targetState] is
 * changed. However, in some rare cases it is more critical to immediately *snap* to a state change
 * (e.g. in response to a user interaction). This can be achieved by creating a new
 * [transitionState]:
 *
 * @sample androidx.compose.animation.core.samples.DoubleTapToLikeSample
 */
@Composable
public fun <T> rememberTransition(
    transitionState: TransitionState<T>,
    label: String? = null,
): Transition<T> {
    val transition =
        remember(transitionState) {
            // Remember currently observes state reads in its calculation lambda, which leads to
            // recomposition on some state changes even though the lambda will not be invoked again.
            // Tracked at b/392921611. Until this is fixed, we need to explicitly disable state
            // observation in remember.
            Snapshot.withoutReadObservation {
                if (transitionState is DeferredTransitionState) {
                    DeferredTransition(transitionState, label)
                } else {
                    TransitionInstance(transitionState, label)

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)

## androidx.compose.animation.core Transition.kt source (lines 981–1015)

                }
            }
        }
    if (transitionState is SeekableTransitionState) {
        val coroutineScope = rememberCoroutineScope()
        DisposableEffect(coroutineScope) {
            val thread = getCurrentThread()
            val snapshotStateObserver = SnapshotStateObserver {
                if (thread === getCurrentThread()) {
                    it()
                } else {
                    coroutineScope.launch { it() }
                }
            }
            transitionState.snapshotStateObserver = snapshotStateObserver
            onDispose { transitionState.snapshotStateObserver = null }
        }
        val targetState = transitionState.targetState
        LaunchedEffect(transitionState.currentState, targetState) {
            transitionState.observeTotalDuration()
            transitionState.compositionContinuationMutex.withLock {
                @OptIn(ExperimentalAnimationCoreApi::class)
                if (
                    !ComposeAnimationCoreFlags.isSeekableTransitionStateStartAfterLayoutEnabled ||
                        targetState == transitionState.targetState
                ) {
                    transitionState.composedTargetState = transitionState.targetState
                    transitionState.compositionContinuation?.resume(transitionState.targetState)
                    transitionState.compositionContinuation = null
                }
            }
        }
    } else {
        transition.animateTo(transitionState.targetState)
        if (transitionState is DeferredTransitionState) {

Sources: [live-androidx-animation-animation-core-animation-core-transition-lines-981-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/animation/animation-core/src/commonMain/kotlin/androidx/compose/animation/core/Transition.kt)
