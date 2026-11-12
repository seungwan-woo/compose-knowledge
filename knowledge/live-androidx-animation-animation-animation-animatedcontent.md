---
type: reference
title: androidx.compose.animation AnimatedContent.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1
    endLine: 35
    sha256: 9058327612135a03dbc5ca3aad2648ff82d2db1d2917c7bbd233efc8c582d956
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
      @file:OptIn(InternalAnimationApi::class)

      package androidx.compose.animation

      import androidx.collection.mutableScatterMapOf
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Down
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.End
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Left
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Right
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Start
      import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Up
      import androidx.compose.animation.core.AnimationVector2D
      import androidx.compose.animation.core.DeferredTransition
      import androidx.compose.animation.core.DeferredTransitionState
      import androidx.compose.animation.core.FiniteAnimationSpec
      import androidx.compose.animation.core.InternalAnimationApi
      import androidx.compose.animation.core.Spring
      import androidx.compose.animation.core.Transition
      import androidx.compose.animation.core.VectorConverter
      import androidx.compose.animation.core.VisibilityThreshold
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1010-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1010
    endLine: 1036
    sha256: b20bded9fb0cb5bfd40dfc5cb9cfdd1db247a366d44fbdaf911e8a3fb7f360a3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * When [Transition.targetState] changes, content for both new and previous targetState will be
       * looked up through the [content] lambda. They will go through a [ContentTransform] so that the new
       * target content can be animated in while the initial content animates out. Meanwhile the container
       * will animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
       * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
       *
       * If [Transition.targetState] is expected to mutate frequently and not all mutations should be
       * treated as target state change, consider defining a mapping between [Transition.targetState] and
       * a key in [contentKey]. As a result, transitions will be triggered when the resulting key changes.
       * In other words, there will be no animation when switching between [Transition.targetState]s that
       * share the same key. By default, the key will be the same as the targetState object.
       *
       * @param modifier is applied to the Layout created by [AnimatedContent], which houses all the
       *   animating contents.
       * @param transitionSpec specifies the enter/exit animations, as well as size animation (if
       *   applicable). By default, a [fadeIn] and [scaleIn] will be used for the entering content, and
       *   [fadeOut] for the exiting content. The [ContentTransform] returned by [transitionSpec] can be
       *   created using [togetherWith] with [EnterTransition] and [ExitTransition].
       * @param contentAlignment specifies the alignment of the animated content. By default, it'll be
       *   aligned to the top start of the container.
       * @param contentKey A key to identify the content.
       * @param mutableTransformSpec A specification to control an optional manual transformation during
       *   the deferred phase (e.g., for predictive back gestures) before the main transition begins. This
       *   is only active if the [Transition] was created using [rememberDeferredTransition] with
       *   [DeferredTransitionState]. By default, this returns `null`, meaning no manual transformations
       *   are applied and properties remain at the transition's initial values during the deferred phase.
       *
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1037-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1037
    endLine: 1071
    sha256: 8365c785e5cd7da9b5afaa6e87eb2b44b66d9495a736db2d8db487b7c68f24c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   **Lifecycle:** The deferred phase starts when [DeferredTransitionState.defer] is called. It
       *   ends and the automatic transition begins when [DeferredTransitionState.animateTo] is called.
       *
       *   **Transformations:** During this phase, you can manually manipulate the entering and exiting
       *   content's transformations (via [MutableContentTransform]). When a [MutableContentTransform] is
       *   provided, properties that are not manually set default to their resting values during the
       *   deferred phase.
       *
       * **Handoff:** Once the transition starts, the manually applied transformations are seamlessly
       * handed off to the configured [transitionSpec]. For exiting content, a "sustain unless specified"
       * policy is applied: if an exit transition (e.g. `fadeOut`) is specified, the hand-off will animate
       * towards the target value of that transition. However, if no exit transition is specified for a
       * given property (e.g. `slideOut` is missing), that property will sustain its last manual value
       * until the entire transition completes.
       *
       * *Note:* While in the deferred phase, entering content remains in the [EnterExitState.PreEnter]
       * state, and exiting content remains in the [EnterExitState.Visible] state.
       *
       * @param content The composable function to render the content for a given state.
       * @sample androidx.compose.animation.samples.DeferredAnimatedContentSample
       * @sample androidx.compose.animation.samples.TransitionExtensionAnimatedContentSample
       * @see ContentTransform
       * @see AnimatedContentScope
       */
      @Composable
      public fun <S> DeferredTransition<S>.DeferredAnimatedContent(
          modifier: Modifier = Modifier,
          transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
              AnimatedContentDefaults.ContentTransform
          },
          contentAlignment: Alignment = Alignment.TopStart,
          contentKey: (targetState: S) -> Any? = { it },
          mutableTransformSpec: AnimatedContentTransitionScope<S>.() -> MutableContentTransform? = {
              null
          },
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 106
    endLine: 140
    sha256: 9d7d4d8b61743f96c995f14e19d22882876838b93b9398c7ed01af1007c54eac
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * As a result, transitions will be triggered when the resulting key changes. In other words, there
       * will be no animation when switching between [targetState]s that share the same key. By default,
       * the key will be the same as the targetState object.
       *
       * By default, the [ContentTransform] will be a delayed [fadeIn] of the target content and a delayed
       * [scaleIn] [togetherWith] a [fadeOut] of the initial content, using a [SizeTransform] to animate
       * any size change of the content. This behavior can be customized using [transitionSpec]. If
       * desired, different [ContentTransform]s can be defined for different pairs of initial content and
       * target content.
       *
       * [AnimatedContent] displays only the content for [targetState] when not animating. However, during
       * the transient content transform, there will be more than one set of content present in the
       * [AnimatedContent] container. It may be sometimes desired to define the positional relationship
       * among the different content and the overlap. This can be achieved by defining [contentAlignment]
       * and [zOrder][ContentTransform.targetContentZIndex]. By default, [contentAlignment] aligns all
       * content to [Alignment.TopStart], and the `zIndex` for all the content is 0f. __Note__: The target
       * content will always be placed last, therefore it will be on top of all the other content unless
       * zIndex is specified.
       *
       * Different content in [AnimatedContent] will have access to their own [AnimatedContentScope]. This
       * allows content to define more local enter/exit transitions via
       * [AnimatedContentScope.animateEnterExit] and [AnimatedContentScope.transition]. These custom
       * enter/exit animations will be triggered as the content enters/leaves the container.
       *
       * [label] is an optional parameter to differentiate from other animations in Android Studio.
       *
       * @sample androidx.compose.animation.samples.SimpleAnimatedContentSample
       *
       * Below is an example of customizing [transitionSpec] to imply a spatial relationship between the
       * content for different states:
       *
       * @sample androidx.compose.animation.samples.AnimateIncrementDecrementSample
       * @see ContentTransform
       * @see AnimatedContentScope
       */
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1072-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1072
    endLine: 1106
    sha256: 456a48b0842791781a932b7737724e30c1466024a56b93c12f057385d1c2d12e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
      ) {
          AnimatedContentImpl(
              modifier = modifier,
              transitionSpec = transitionSpec,
              contentAlignment = contentAlignment,
              contentKey = contentKey,
              mutableTransformSpec = mutableTransformSpec,
              content = content,
          )
      }

      @Composable
      internal fun <S> Transition<S>.AnimatedContentImpl(
          modifier: Modifier = Modifier,
          transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
              AnimatedContentDefaults.ContentTransform
          },
          contentAlignment: Alignment = Alignment.TopStart,
          contentKey: (targetState: S) -> Any? = { it },
          mutableTransformSpec: AnimatedContentTransitionScope<S>.() -> MutableContentTransform? = {
              null
          },
          content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
      ) {
          val layoutDirection = LocalLayoutDirection.current
          val rootScope =
              remember(this) {
                  AnimatedContentTransitionScopeImpl(this, contentAlignment, layoutDirection)
              }
          // TODO: remove screen as soon as they are animated out
          val currentlyVisible = remember(this) { mutableStateListOf(currentState) }
          val contentMap =
              remember(this, pendingTargetState) { mutableScatterMapOf<S, @Composable() () -> Unit>() }
          // This is needed for tooling because it could change currentState directly,
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1107-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1107
    endLine: 1141
    sha256: a015f56871495f73831a2b9568a5980df8f3a49ab493aa5913113cea1e89ecd1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // as opposed to changing target only. When that happens we need to clear all the
          // visible content and only display the content for the new current state and target state.
          if (!currentlyVisible.contains(currentState)) {
              currentlyVisible.clear()
              currentlyVisible.add(currentState)
          }
          animatedContentDebug {
              "Composing AnimatedContent. targetState: $targetState, currentState: ${currentState},"
          }
          if (currentState == targetState && pendingTargetState == null) {
              if (currentlyVisible.size != 1 || currentlyVisible[0] != currentState) {
                  currentlyVisible.clear()
                  currentlyVisible.add(currentState)
              }
              if (contentMap.size != 1 || contentMap.containsKey(currentState)) {
                  contentMap.clear()
              }
              // TODO: Do we want to support changing contentAlignment amid animation?
              rootScope.contentAlignment = contentAlignment
              rootScope.layoutDirection = layoutDirection
          }

          pendingTargetState?.let { pendingTargetState ->
              if (pendingTargetState != currentState) {
                  val pendingKey = contentKey(pendingTargetState)
                  if (pendingKey != contentKey(targetState)) {
                      // Replace the target with the same key if any
                      val id = currentlyVisible.indexOfFirst { contentKey(it) == pendingKey }
                      if (id == -1) {
                          currentlyVisible.add(pendingTargetState)
                      } else if (currentlyVisible[id] != pendingTargetState) {
                          currentlyVisible[id] = pendingTargetState
                      }
                  }
              }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1142-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1142
    endLine: 1176
    sha256: 407ac1892cf26414fd7c458e3049698f81253d61a6f3c715c77cc56091e90ae3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }

          // Currently visible list always keeps the targetState at the end of the list, unless it's
          // already in the list in the case of interruption. This makes the composable associated with
          // the targetState get placed last, so the target composable will be displayed on top of
          // content associated with other states, unless zIndex is specified.
          if (currentState != targetState) {
              val id = currentlyVisible.indexOfFirst { contentKey(it) == contentKey(targetState) }
              if (id == -1) {
                  animatedContentDebug {
                      "Added new targetState: $targetState, " + "contentKey: ${contentKey(targetState)}"
                  }
                  currentlyVisible.add(targetState)
              } else if (currentlyVisible[id] != targetState || id != currentlyVisible.size - 1) {
                  if (targetState != currentlyVisible[id]) {
                      animatedContentDebug {
                          "Replaced state: ${currentlyVisible[id]} with targetState: $targetState, " +
                              "due to the same contentKey: ${contentKey(targetState)}"
                      }
                  }
                  currentlyVisible.removeAt(id)
                  currentlyVisible.add(targetState)
              }
          }

          val localPendingTargetState = pendingTargetState
          val pendingScope =
              remember(localPendingTargetState) {
                  localPendingTargetState?.let {
                      PendingAnimatedContentTransitionScope(
                          delegate = rootScope,
                          overrideInitialState = this@AnimatedContentImpl.targetState,
                          overrideTargetState = it,
                      )
                  }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1177-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1177
    endLine: 1211
    sha256: 2a580dc6c25f9b990fd17b6e8b747a4038343e5c5cc34d7a0eb1f3ca4976e035
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              }
          val mutableContentTransformData =
              remember(pendingScope, mutableTransformSpec) {
                  pendingScope?.run {
                      if (contentKey(initialState) != contentKey(targetState)) {
                          mutableTransformSpec()
                      } else {
                          MutableContentTransform()
                      }
                  }
              }
          if (
              targetState !in contentMap ||
                  currentState !in contentMap ||
                  (localPendingTargetState != null && localPendingTargetState !in contentMap)
          ) {
              contentMap.clear()
              currentlyVisible.toList().fastForEach { stateForContent ->
                  contentMap[stateForContent] = {
                      val specOnEnter =
                          remember(stateForContent == pendingTargetState) {
                              if (stateForContent == pendingTargetState && pendingScope != null) {
                                  pendingScope.transitionSpec()
                              } else if (
                                  stateForContent != segment.initialState &&
                                      stateForContent != segment.targetState
                              ) {
                                  PendingAnimatedContentTransitionScope(
                                          rootScope,
                                          segment.initialState,
                                          stateForContent,
                                      )
                                      .transitionSpec()
                              } else {
                                  rootScope.transitionSpec()
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1212-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1212
    endLine: 1246
    sha256: 5973cb9de56f97a44b22ff52b895042fb3926e729827d7eeb5e47b46902c4564
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              }
                          }
                      // NOTE: enter and exit for this AnimatedVisibility will be using different spec,
                      // naturally.
                      val exit =
                          remember(
                              segment.targetState == stateForContent,
                              stateForContent == pendingTargetState,
                          ) {
                              if (
                                  segment.targetState == stateForContent ||
                                      (stateForContent == pendingTargetState && pendingScope != null)
                              ) {
                                  ExitTransition.None
                              } else if (
                                  stateForContent != segment.initialState &&
                                      stateForContent != segment.targetState
                              ) {
                                  PendingAnimatedContentTransitionScope(
                                          rootScope,
                                          stateForContent,
                                          segment.initialState,
                                      )
                                      .transitionSpec()
                                      .initialContentExit
                              } else {
                                  rootScope.transitionSpec().initialContentExit
                              }
                          }
                      val childData = remember {
                          AnimatedContentTransitionScopeImpl.ChildData(stateForContent == targetState)
                      }
                      // TODO: Will need a custom impl of this to: 1) get the signal for when
                      // the animation is finished, 2) get the target size properly
                      AnimatedEnterExitImpl(
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1247-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1247
    endLine: 1281
    sha256: 11f816742ba2ec9b55c6ec993068ce9a9e313624d349eeb51ecb6ac712d1da55
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          this@AnimatedContentImpl,
                          { it == stateForContent },
                          enter = specOnEnter.targetContentEnter,
                          exit = exit,
                          modifier =
                              ZIndexModifierElement(specOnEnter.targetContentZIndex, stateForContent)
                                  .then(
                                      childData.apply {
                                          isTarget = stateForContent == targetState
                                          val contentKey = contentKey(stateForContent)
                                          isPendingTarget =
                                              localPendingTargetState != null &&
                                                  contentKey == contentKey(localPendingTargetState) &&
                                                  contentKey != contentKey(targetState) &&
                                                  contentKey != contentKey(currentState)
                                      }
                                  ),
                          shouldDisposeBlock = { currentState, targetState ->
                              currentState == EnterExitState.PostExit &&
                                  targetState == EnterExitState.PostExit &&
                                  !exit.config.hold
                          },
                          mutableTransformData =
                              mutableContentTransformData?.let { transform ->
                                  when (stateForContent) {
                                      pendingTargetState -> transform.targetTransform
                                      targetState -> transform.initialTransform
                                      else -> null
                                  }
                              },
                          forceVisible =
                              this@AnimatedContentImpl is DeferredTransition &&
                                  currentlyVisible.indexOf(stateForContent).let { index ->
                                      index >= 0 &&
                                          index >= currentlyVisible.size - MaxInterruptionRetention
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1282-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1282
    endLine: 1316
    sha256: d2ee7d85a2f8a8f764aac612b7a6b6d982d7e63b877e44f7fa8f9043ed5192e9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  },
                      ) {
                          // TODO: Should Transition.AnimatedVisibility have an end listener?
                          DisposableEffect(this, stateForContent) {
                              onDispose {
                                  currentlyVisible.remove(stateForContent)
                                  rootScope.targetSizeMap.remove(stateForContent)
                              }
                          }
                          rootScope.targetSizeMap[stateForContent] =
                              (this as AnimatedVisibilityScopeImpl).targetSize
                          with(remember { AnimatedContentScopeImpl(this) }) { content(stateForContent) }
                      }
                  }
              }
          }
          val contentTransform =
              remember(pendingScope, rootScope, segment) {
                  transitionSpec(pendingScope ?: rootScope).also {
                      animatedContentDebug { "transitionSpec changed to ${it.toDebugString()}" }
                  }
              }
          val sizeModifier = rootScope.createSizeAnimationModifier(contentTransform)
          Layout(
              modifier = modifier.then(sizeModifier),
              content = {
                  currentlyVisible.toList().fastForEach {
                      key(contentKey(it)) { contentMap[it]?.invoke() }
                  }
              },
              measurePolicy = remember { AnimatedContentMeasurePolicy(rootScope) },
          )
      }

      private class AnimatedContentMeasurePolicy(val rootScope: AnimatedContentTransitionScopeImpl<*>) :
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1317-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1317
    endLine: 1351
    sha256: 301d8e4f2a630d5ee0f888944b50aa03fc97aa4a17aa6346d471155f49e1cc5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          MeasurePolicy {

          // Temporary state used to pass data from measure to the corresponding placement block in the
          // same frame. These are separated for lookahead and approach passes to avoid state pollution
          // between passes. References are not cleared after placement because placement can be invoked
          // multiple times without a new measure pass.
          private var lookaheadPlaceables: Array<Placeable?>? = null
          private var approachPlaceables: Array<Placeable?>? = null
          private var lookaheadMaxWidth: Int = 0
          private var approachMaxWidth: Int = 0
          private var lookaheadMaxHeight: Int = 0
          private var approachMaxHeight: Int = 0

          private val lookaheadPlacementBlock: Placeable.PlacementScope.() -> Unit = {
              val placeables = lookaheadPlaceables!!
              val maxWidth = lookaheadMaxWidth
              val maxHeight = lookaheadMaxHeight

              for (placeable in placeables) {
                  placeable?.let {
                      val offset =
                          rootScope.contentAlignment.align(
                              IntSize(it.width, it.height),
                              IntSize(maxWidth, maxHeight),
                              LayoutDirection.Ltr,
                          )
                      it.place(offset.x, offset.y)
                  }
              }
          }

          private val approachPlacementBlock: Placeable.PlacementScope.() -> Unit = {
              val placeables = approachPlaceables!!
              val maxWidth = approachMaxWidth
              val maxHeight = approachMaxHeight
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1352-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1352
    endLine: 1386
    sha256: c2368253512c879706c4a8936212783edf14f5b8af9249c1c67b59eba4ac18a4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              for (placeable in placeables) {
                  placeable?.let {
                      val offset =
                          rootScope.contentAlignment.align(
                              IntSize(it.width, it.height),
                              IntSize(maxWidth, maxHeight),
                              LayoutDirection.Ltr,
                          )
                      it.place(offset.x, offset.y)
                  }
              }
          }

          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              rootScope.contentAlignment // Trigger read in measure to force remeasure on alignment change
              val placeables = arrayOfNulls<Placeable>(measurables.size)
              var targetSize = IntSize.Zero
              // Measure the target composable first (but place it on top unless zIndex is specified)
              measurables.fastForEachIndexed { index, measurable ->
                  if (
                      (measurable.parentData as? AnimatedContentTransitionScopeImpl.ChildData)
                          ?.isTarget == true
                  ) {
                      placeables[index] =
                          measurable.measure(constraints).also {
                              targetSize = IntSize(it.width, it.height)
                          }
                  }
              }
              // Measure the non-target composables after target, since these have no impact on
              // container size in the size animation.
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1387-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1387
    endLine: 1421
    sha256: 7dd8ef87fa0376fdd599c986c366a48a367779fa338f7e564a7060dfa8df8ce1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              measurables.fastForEachIndexed { index, measurable ->
                  if (placeables[index] == null) {
                      placeables[index] = measurable.measure(constraints)
                  }
              }
              val (maxWidth, maxHeight) =
                  if (isLookingAhead) {
                      targetSize.width to targetSize.height
                  } else {
                      var maxW = 0
                      var maxH = 0

                      // Single loop for both width and height
                      for (i in placeables.indices) {
                          val placeable = placeables[i] ?: continue // Skip nulls immediately

                          val data =
                              measurables[i].parentData as? AnimatedContentTransitionScopeImpl.ChildData
                          if (data?.isPendingTarget != true) {
                              if (placeable.width > maxW) maxW = placeable.width
                              if (placeable.height > maxH) maxH = placeable.height
                          }
                      }
                      maxW to maxH
                  }
              if (!isLookingAhead) {
                  // update currently measured size only during approach
                  rootScope.measuredSize = IntSize(maxWidth, maxHeight)

                  // Position the children.
                  approachPlaceables = placeables
                  approachMaxWidth = maxWidth
                  approachMaxHeight = maxHeight
                  return layout(maxWidth, maxHeight, placementBlock = approachPlacementBlock)
              } else {
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 141
    endLine: 175
    sha256: 720b17a6857d004ca04d56049be0db834752a1184e25e4e1d02a692de9c6140b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Composable
      public fun <S> AnimatedContent(
          targetState: S,
          modifier: Modifier = Modifier,
          transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
              AnimatedContentDefaults.ContentTransform
          },
          contentAlignment: Alignment = Alignment.TopStart,
          label: String = "AnimatedContent",
          contentKey: (targetState: S) -> Any? = { it },
          content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
      ) {
          val transition = updateTransition(targetState = targetState, label = label)
          transition.AnimatedContent(
              modifier,
              transitionSpec,
              contentAlignment,
              contentKey,
              content = content,
          )
      }

      /**
       * [ContentTransform] defines how the target content (i.e. content associated with target state)
       * enters [AnimatedContent] and how the initial content disappears.
       *
       * [targetContentEnter] defines the enter transition for the content associated with the new target
       * state. It can be a combination of [fadeIn], [slideIn]/[slideInHorizontally]
       * /[slideInVertically]/[AnimatedContentTransitionScope.slideIntoContainer], and expand. Similarly,
       * [initialContentExit] supports a combination of [ExitTransition] for animating out the initial
       * content (i.e. outgoing content). If the initial content and target content are of different size,
       * the [sizeTransform] will be triggered unless it's explicitly set to `null`.
       * [AnimatedContentTransitionScope.slideIntoContainer] and
       * [AnimatedContentTransitionScope.slideOutOfContainer] can provide container-size-aware sliding in
       * from the edge of the container, or sliding out to the edge of the container.
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1422-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1422
    endLine: 1456
    sha256: f4dfd9b7a9966118aae745bfcee5a43a24618260582b2d1ed8b99caef11b5333
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  // Position the children.
                  lookaheadPlaceables = placeables
                  lookaheadMaxWidth = maxWidth
                  lookaheadMaxHeight = maxHeight
                  return layout(maxWidth, maxHeight, placementBlock = lookaheadPlacementBlock)
              }
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastMaxOfOrNull { it.minIntrinsicWidth(height) } ?: 0

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) = measurables.fastMaxOfOrNull { it.minIntrinsicHeight(width) } ?: 0

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastMaxOfOrNull { it.maxIntrinsicWidth(height) } ?: 0

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ) = measurables.fastMaxOfOrNull { it.maxIntrinsicHeight(width) } ?: 0
      }

      /**
       * A [ModifierNodeElement] that creates and updates a [ZIndexModifierNode] to apply z-index to the
       * content in [AnimatedContent]. This is used to avoid multiple allocations of `Modifier.layout`
       * lambdas.
       */
      private class ZIndexModifierElement(val zIndex: Float, val stateForContent: Any?) :
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1457-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1457
    endLine: 1491
    sha256: bdaf1d610919d09556f1b412f4ce95ebda8bd781ca7a55f0b7bb5ddf342507cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ModifierNodeElement<ZIndexModifierNode>() {
          override fun create(): ZIndexModifierNode = ZIndexModifierNode(zIndex, stateForContent)

          override fun update(node: ZIndexModifierNode) {
              node.zIndex = zIndex
              node.stateForContent = stateForContent
          }

          override fun equals(other: Any?): Boolean =
              other is ZIndexModifierElement &&
                  other.zIndex == zIndex &&
                  other.stateForContent == stateForContent

          override fun hashCode(): Int {
              var result = zIndex.hashCode()
              result = 31 * result + (stateForContent?.hashCode() ?: 0)
              return result
          }

          override fun InspectorInfo.inspectableProperties() {
              name = "targetContentZIndex"
              properties["zIndex"] = zIndex
              properties["stateForContent"] = stateForContent
          }
      }

      /**
       * A [LayoutModifierNode] that applies the specified [zIndex] during placement. This avoids
       * allocating a lambda on every placement pass.
       */
      private class ZIndexModifierNode(var zIndex: Float, var stateForContent: Any?) :
          LayoutModifierNode, Modifier.Node() {
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-1492-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 1492
    endLine: 1502
    sha256: d3085d3bfa99e74b2b3e2344157ca047bae24c4cd861fe4cd4f6a9eb297680f0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          ): MeasureResult {
              val placeable = measurable.measure(constraints)
              return layout(placeable.width, placeable.height) {
                  animatedContentDebug {
                      "Placing content for state: $stateForContent at zIndex = $zIndex"
                  }
                  placeable.place(0, 0, zIndex = zIndex)
              }
          }
      }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 176
    endLine: 210
    sha256: 1ba4e2099448be6dcc5b315cfbc970ffc21da27250889e8c0c83933a91e73948
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * [ContentTransform] supports the zIndex definition when the content enters the [AnimatedContent]
       * container via [targetContentZIndex]. By default, all content has a `0f` zIndex. Among content
       * with the same zIndex, the incoming target content will be on top, as it will be placed last.
       * However, this may not always be desired. zIndex can be specified to change that order. The
       * content with higher zIndex guarantee to be placed on top of content with lower zIndex.
       *
       * [sizeTransform] manages the expanding and shrinking of the container if there is any size change
       * as new content enters the [AnimatedContent] and old content leaves. Unlike [AnimatedVisibility],
       * for [AnimatedContent] it is generally more predictable to manage the size of the container using
       * [SizeTransform] than influencing the size using [expandIn]/[expandHorizontally]/[shrinkOut], etc
       * for each content. By default, [spring] will be used to animate any size change, and
       * [AnimatedContent] will be clipped to the animated size. Both can be customized by supplying a
       * different [SizeTransform]. If no size animation is desired, [sizeTransform] can be set to `null`.
       *
       * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
       * @see SizeTransform
       * @see EnterTransition
       * @see ExitTransition
       * @see AnimatedContent
       */
      public class ContentTransform(
          public val targetContentEnter: EnterTransition,
          public val initialContentExit: ExitTransition,
          targetContentZIndex: Float = 0f,
          sizeTransform: SizeTransform? = AnimatedContentDefaults.SizeTransform,
      ) {
          /**
           * This describes the zIndex of the new target content as it enters the container. It defaults
           * to 0f. Content with higher zIndex will be drawn over lower `zIndex`ed content. Among content
           * with the same index, the target content will be placed on top.
           */
          public var targetContentZIndex: Float by mutableFloatStateOf(targetContentZIndex)

          /**
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 211
    endLine: 245
    sha256: 7d94b1989f53b8c4aa7484e049cec31f94241980a884063edc12850c42c8fb4e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [sizeTransform] manages the expanding and shrinking of the container if there is any size
           * change as new content enters the [AnimatedContent] and old content leaves. By default,
           * [spring] will be used to animate any size change, and [AnimatedContent] will be clipped to
           * the animated size. Both can be customized by supplying a different [SizeTransform]. If no
           * size animation is desired, [sizeTransform] can be set to `null`.
           */
          public var sizeTransform: SizeTransform? = sizeTransform
              internal set
      }

      internal fun ContentTransform.toDebugString(): String {
          return "ContentTransform(targetContentEnter=$targetContentEnter, " +
              "initialContentExit=$initialContentExit, " +
              "targetContentZIndex=$targetContentZIndex, " +
              "sizeTransform=$sizeTransform)"
      }

      /**
       * This creates a [SizeTransform] with the provided [clip] and [sizeAnimationSpec]. By default,
       * [clip] will be true. This means during the size animation, the content will be clipped to the
       * animated size. [sizeAnimationSpec] defaults to return a [spring] animation.
       *
       * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
       */
      public fun SizeTransform(
          clip: Boolean = true,
          sizeAnimationSpec: (initialSize: IntSize, targetSize: IntSize) -> FiniteAnimationSpec<IntSize> =
              { _, _ ->
                  AnimatedContentDefaults.SizeAnimationSpec
              },
      ): SizeTransform = SizeTransformImpl(clip, sizeAnimationSpec)

      /**
       * [SizeTransform] defines how to transform from one size to another when the size of the content
       * changes. When [clip] is true, the content will be clipped to the animation size.
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 246
    endLine: 280
    sha256: b69dc223a27c4a08c2bab653157a6a7c505f79ebc8ea11f91a8ddd45d7dc7973
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * [createAnimationSpec] specifies the animation spec for the size animation based on the initial
       * and target size.
       *
       * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
       */
      public interface SizeTransform {
          /** Whether the content should be clipped using the animated size. */
          public val clip: Boolean

          /**
           * This allows [FiniteAnimationSpec] to be defined based on the [initialSize] before the size
           * animation and the [targetSize] of the animation.
           */
          public fun createAnimationSpec(
              initialSize: IntSize,
              targetSize: IntSize,
          ): FiniteAnimationSpec<IntSize>
      }

      /** Private implementation of SizeTransform interface. */
      private class SizeTransformImpl(
          override val clip: Boolean = true,
          val sizeAnimationSpec:
              (initialSize: IntSize, targetSize: IntSize) -> FiniteAnimationSpec<IntSize>,
      ) : SizeTransform {
          override fun createAnimationSpec(
              initialSize: IntSize,
              targetSize: IntSize,
          ): FiniteAnimationSpec<IntSize> = sizeAnimationSpec(initialSize, targetSize)

          override fun toString(): String {
              return "SizeTransform(clip=$clip)"
          }
      }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 281
    endLine: 315
    sha256: 6a21b3804ce96d24b8d5cb8dbc65b7ce139f114c08538803610056de30fbcdbb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /**
       * This creates a [ContentTransform] using the provided [EnterTransition] and [exit], where the
       * enter and exit transition will be running simultaneously. For example:
       *
       * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
       */
      public infix fun EnterTransition.togetherWith(exit: ExitTransition): ContentTransform =
          ContentTransform(this, exit)

      /** Contains default values used throughout [AnimatedContent]. */
      public object AnimatedContentDefaults {
          /** Default animation spec used for size animation in [SizeTransform]. */
          public val SizeAnimationSpec: FiniteAnimationSpec<IntSize> =
              spring(
                  stiffness = Spring.StiffnessMediumLow,
                  visibilityThreshold = IntSize.VisibilityThreshold,
              )

          /** Default [SizeTransform] used in [ContentTransform]. */
          public val SizeTransform: SizeTransform = SizeTransform()

          /** Default [ContentTransform] used in [AnimatedContent] if none is specified. */
          public val ContentTransform: ContentTransform =
              (fadeIn(animationSpec = tween(220, delayMillis = 90)) +
                      scaleIn(initialScale = 0.92f, animationSpec = tween(220, delayMillis = 90)))
                  .togetherWith(fadeOut(animationSpec = tween(90)))
      }

      @Deprecated(
          "Infix fun EnterTransition.with(ExitTransition) has been renamed to togetherWith",
          ReplaceWith("togetherWith(exit)"),
          level = DeprecationLevel.HIDDEN,
      )
      public infix fun EnterTransition.with(exit: ExitTransition): ContentTransform =
          ContentTransform(this, exit)
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 316
    endLine: 350
    sha256: 1d51568c4775c8ee7444f5b709eb82486ee211cc0aff6e0c1bed7ba5a679c9c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * [AnimatedContentTransitionScope] provides functions that are convenient and only applicable in
       * the context of [AnimatedContent], such as [slideIntoContainer] and [slideOutOfContainer].
       */
      public sealed interface AnimatedContentTransitionScope<S> : Transition.Segment<S> {
          /**
           * Customizes the [SizeTransform] of a given [ContentTransform]. For example:
           *
           * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
           */
          public infix fun ContentTransform.using(sizeTransform: SizeTransform?): ContentTransform

          /**
           * [SlideDirection] defines the direction of the slide in/out for [slideIntoContainer] and
           * [slideOutOfContainer]. The supported directions are: [Left], [Right], [Up] and [Down].
           */
          @Immutable
          @kotlin.jvm.JvmInline
          public value class SlideDirection internal constructor(private val value: Int) {
              public companion object {
                  public val Left: SlideDirection
                      get() = SlideDirection(0)

                  public val Right: SlideDirection
                      get() = SlideDirection(1)

                  public val Up: SlideDirection
                      get() = SlideDirection(2)

                  public val Down: SlideDirection
                      get() = SlideDirection(3)

                  public val Start: SlideDirection
                      get() = SlideDirection(4)
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 351
    endLine: 385
    sha256: 7fc28a1c8b6f9211b92c05fea7b9a105de83c276993b42f6ac6d1a519beb8c3a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                  public val End: SlideDirection
                      get() = SlideDirection(5)
              }

              override fun toString(): String {
                  return when (this) {
                      Left -> "Left"
                      Right -> "Right"
                      Up -> "Up"
                      Down -> "Down"
                      Start -> "Start"
                      End -> "End"
                      else -> "Invalid"
                  }
              }
          }

          /**
           * This defines a horizontal/vertical slide-in that is specific to [AnimatedContent] from the
           * edge of the container. The offset amount is dynamically calculated based on the current size
           * of the [AnimatedContent] and its content alignment. This offset (may be positive or negative
           * based on the direction of the slide) is then passed to [initialOffset]. By default,
           * [initialOffset] will be using the offset calculated from the system to slide the content in.
           * [slideIntoContainer] is a convenient alternative to [slideInHorizontally] and
           * [slideInVertically] when the incoming and outgoing content differ in size. Otherwise, it
           * would be equivalent to [slideInHorizontally] and [slideInVertically] with an offset of the
           * full width/height.
           *
           * [towards] specifies the slide direction. Content can be slided into the container towards
           * [SlideDirection.Left], [SlideDirection.Right], [SlideDirection.Up] and [SlideDirection.Down].
           *
           * [animationSpec] defines the animation that will be used to animate the slide-in.
           *
           * @sample androidx.compose.animation.samples.SlideIntoContainerSample
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 36
    endLine: 70
    sha256: 0eb2d64925feb985fa7d4d3ccf56d8a2d71df775560ccf07f75c89338b165632
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.animation.core.createDeferredAnimation
      import androidx.compose.animation.core.rememberDeferredTransition
      import androidx.compose.animation.core.spring
      import androidx.compose.animation.core.tween
      import androidx.compose.animation.core.updateTransition
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.DisposableEffect
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.key
      import androidx.compose.runtime.mutableFloatStateOf
      import androidx.compose.runtime.mutableStateListOf
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clipToBounds
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.ParentDataModifier
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.LocalLayoutDirection
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 386
    endLine: 420
    sha256: 9b35bd979c9c81b4ea02a210cb2e82d3d512d16cc2a711bfd6fb61d4733c31b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @see AnimatedContent
           * @see slideInHorizontally
           * @see slideInVertically
           */
          public fun slideIntoContainer(
              towards: SlideDirection,
              animationSpec: FiniteAnimationSpec<IntOffset> =
                  spring(visibilityThreshold = IntOffset.VisibilityThreshold),
              initialOffset: (offsetForFullSlide: Int) -> Int = { it },
          ): EnterTransition

          /**
           * This defines a horizontal/vertical exit transition to completely slide out of the
           * [AnimatedContent] container. The offset amount is dynamically calculated based on the current
           * size of the [AnimatedContent] and the new target size. This offset gets passed to
           * [targetOffset] lambda. By default, [targetOffset] uses this offset as is, but it can be
           * customized to slide a distance based on the offset. [slideOutOfContainer] is a convenient
           * alternative to [slideOutHorizontally] and [slideOutVertically] when the incoming and outgoing
           * content differ in size. Otherwise, it would be equivalent to [slideOutHorizontally] and
           * [slideOutVertically] with an offset of the full width/height.
           *
           * [towards] specifies the slide direction. Content can be slided out of the container towards
           * [SlideDirection.Left], [SlideDirection.Right], [SlideDirection.Up] and [SlideDirection.Down].
           *
           * [animationSpec] defines the animation that will be used to animate the slide-out.
           *
           * @sample androidx.compose.animation.samples.SlideIntoContainerSample
           * @see AnimatedContent
           * @see slideOutHorizontally
           * @see slideOutVertically
           */
          public fun slideOutOfContainer(
              towards: SlideDirection,
              animationSpec: FiniteAnimationSpec<IntOffset> =
                  spring(visibilityThreshold = IntOffset.VisibilityThreshold),
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 421
    endLine: 455
    sha256: b731ba678474647ece0f93e124987a7ab6882510ae96d09953087a3ae5b038d8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              targetOffset: (offsetForFullSlide: Int) -> Int = { it },
          ): ExitTransition

          /**
           * [KeepUntilTransitionsFinished] defers the disposal of the exiting content till both enter and
           * exit transitions have finished. It can be combined with other [ExitTransition]s using
           * [+][ExitTransition.plus].
           *
           * **Important**: [KeepUntilTransitionsFinished] works the best when the
           * [zIndex][ContentTransform.targetContentZIndex] for the incoming and outgoing content are
           * specified. Otherwise, if the content gets interrupted from entering and switching to exiting
           * using [KeepUntilTransitionsFinished], the holding pattern may render exiting content on top
           * of the entering content, unless the z-order is specified.
           *
           * @sample androidx.compose.animation.samples.SlideIntoContainerSample
           */
          @Suppress("EXTENSION_SHADOWED_BY_MEMBER")
          public val ExitTransition.Companion.KeepUntilTransitionsFinished: ExitTransition
              get() = KeepUntilTransitionsFinished

          /** This returns the [Alignment] specified on [AnimatedContent]. */
          public val contentAlignment: Alignment
      }

      internal class PendingAnimatedContentTransitionScope<S>(
          delegate: AnimatedContentTransitionScope<S>,
          val overrideInitialState: S,
          val overrideTargetState: S,
      ) : AnimatedContentTransitionScope<S> by delegate {
          override val initialState: S
              get() = overrideInitialState

          override val targetState: S
              get() = overrideTargetState
      }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 456
    endLine: 490
    sha256: b2c3701f077f900f96a5903bcc3c0b42d9b40cce5d8483c4b6e5f6af89e12938
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      internal class AnimatedContentTransitionScopeImpl<S>
      internal constructor(
          internal val transition: Transition<S>,
          override var contentAlignment: Alignment,
          internal var layoutDirection: LayoutDirection,
      ) : AnimatedContentTransitionScope<S> {
          /** Initial state of a Transition Segment. This is the state that transition starts from. */
          override val initialState: S
              @Suppress("UnknownNullness") get() = transition.segment.initialState

          /** Target state of a Transition Segment. This is the state that transition will end on. */
          override val targetState: S
              @Suppress("UnknownNullness") get() = transition.segment.targetState

          /**
           * Customizes the [SizeTransform] of a given [ContentTransform]. For example:
           *
           * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
           */
          override infix fun ContentTransform.using(sizeTransform: SizeTransform?) =
              this.apply { this.sizeTransform = sizeTransform }

          /**
           * This defines a horizontal/vertical slide-in that is specific to [AnimatedContent] from the
           * edge of the container. The offset amount is dynamically calculated based on the current size
           * of the [AnimatedContent] and its content alignment. This offset (may be positive or negative
           * based on the direction of the slide) is then passed to [initialOffset]. By default,
           * [initialOffset] will be using the offset calculated from the system to slide the content in.
           * [slideIntoContainer] is a convenient alternative to [slideInHorizontally] and
           * [slideInVertically] when the incoming and outgoing content differ in size. Otherwise, it
           * would be equivalent to [slideInHorizontally] and [slideInVertically] with an offset of the
           * full width/height.
           *
           * [towards] specifies the slide direction. Content can be slided into the container towards
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 491
    endLine: 525
    sha256: 5aa9d2b21507407de475b1b5ea51a81d7399b0df67a6034c8998c98c527aa4f2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [AnimatedContentTransitionScope.SlideDirection.Left],
           * [AnimatedContentTransitionScope.SlideDirection.Right],
           * [AnimatedContentTransitionScope.SlideDirection.Up] and
           * [AnimatedContentTransitionScope.SlideDirection.Down].
           *
           * [animationSpec] defines the animation that will be used to animate the slide-in.
           *
           * @sample androidx.compose.animation.samples.SlideIntoContainerSample
           * @see AnimatedContent
           * @see slideInHorizontally
           * @see slideInVertically
           */
          override fun slideIntoContainer(
              towards: AnimatedContentTransitionScope.SlideDirection,
              animationSpec: FiniteAnimationSpec<IntOffset>,
              initialOffset: (offsetForFullSlide: Int) -> Int,
          ): EnterTransition =
              when {
                  towards.isLeft ->
                      slideInHorizontally(animationSpec) {
                          initialOffset.invoke(
                              currentSize.width - calculateOffset(IntSize(it, it), currentSize).x
                          )
                      }
                  towards.isRight ->
                      slideInHorizontally(animationSpec) {
                          initialOffset.invoke(-calculateOffset(IntSize(it, it), currentSize).x - it)
                      }
                  towards == Up ->
                      slideInVertically(animationSpec) {
                          initialOffset.invoke(
                              currentSize.height - calculateOffset(IntSize(it, it), currentSize).y
                          )
                      }
                  towards == Down ->
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 526
    endLine: 560
    sha256: ac0a96eed6078f63bc4f7ec06290f366343c745e2984781ffaf81f6b784ed86d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      slideInVertically(animationSpec) {
                          initialOffset.invoke(-calculateOffset(IntSize(it, it), currentSize).y - it)
                      }
                  else -> EnterTransition.None
              }

          private val AnimatedContentTransitionScope.SlideDirection.isLeft: Boolean
              get() {
                  return this == Left ||
                      this == Start && layoutDirection == LayoutDirection.Ltr ||
                      this == End && layoutDirection == LayoutDirection.Rtl
              }

          private val AnimatedContentTransitionScope.SlideDirection.isRight: Boolean
              get() {
                  return this == Right ||
                      this == Start && layoutDirection == LayoutDirection.Rtl ||
                      this == End && layoutDirection == LayoutDirection.Ltr
              }

          private fun calculateOffset(fullSize: IntSize, currentSize: IntSize): IntOffset {
              return contentAlignment.align(fullSize, currentSize, LayoutDirection.Ltr)
          }

          /**
           * This defines a horizontal/vertical exit transition to completely slide out of the
           * [AnimatedContent] container. The offset amount is dynamically calculated based on the current
           * size of the [AnimatedContent] and the new target size. This offset gets passed to
           * [targetOffset] lambda. By default, [targetOffset] uses this offset as is, but it can be
           * customized to slide a distance based on the offset. [slideOutOfContainer] is a convenient
           * alternative to [slideOutHorizontally] and [slideOutVertically] when the incoming and outgoing
           * content differ in size. Otherwise, it would be equivalent to [slideOutHorizontally] and
           * [slideOutVertically] with an offset of the full width/height.
           *
           * [towards] specifies the slide direction. Content can be slided out of the container towards
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 561
    endLine: 595
    sha256: e7c5d582f5688ff34bd09684a399c272cf8f0ebece271e8f0d316b98951780c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [AnimatedContentTransitionScope.SlideDirection.Left],
           * [AnimatedContentTransitionScope.SlideDirection.Right],
           * [AnimatedContentTransitionScope.SlideDirection.Up] and
           * [AnimatedContentTransitionScope.SlideDirection.Down].
           *
           * [animationSpec] defines the animation that will be used to animate the slide-out.
           *
           * @sample androidx.compose.animation.samples.SlideIntoContainerSample
           * @see AnimatedContent
           * @see slideOutHorizontally
           * @see slideOutVertically
           */
          override fun slideOutOfContainer(
              towards: AnimatedContentTransitionScope.SlideDirection,
              animationSpec: FiniteAnimationSpec<IntOffset>,
              targetOffset: (offsetForFullSlide: Int) -> Int,
          ): ExitTransition {
              return when {
                  // Note: targetSize could be 0 for empty composables
                  towards.isLeft ->
                      slideOutHorizontally(animationSpec) {
                          val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                          targetOffset.invoke(-calculateOffset(IntSize(it, it), targetSize).x - it)
                      }
                  towards.isRight ->
                      slideOutHorizontally(animationSpec) {
                          val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                          targetOffset.invoke(
                              -calculateOffset(IntSize(it, it), targetSize).x + targetSize.width
                          )
                      }
                  towards == Up ->
                      slideOutVertically(animationSpec) {
                          val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                          targetOffset.invoke(-calculateOffset(IntSize(it, it), targetSize).y - it)
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 596
    endLine: 630
    sha256: ea024342de6fe95f1c06f622086aa8e8f17da460e17c5d5d05fa53a11e78f797
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      }
                  towards == Down ->
                      slideOutVertically(animationSpec) {
                          val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                          targetOffset.invoke(
                              -calculateOffset(IntSize(it, it), targetSize).y + targetSize.height
                          )
                      }
                  else -> ExitTransition.None
              }
          }

          internal var measuredSize: IntSize by mutableStateOf(IntSize.Zero)
          internal val targetSizeMap = mutableScatterMapOf<S, State<IntSize>>()
          internal var animatedSize: State<IntSize>? = null

          // Current size of the container. If there's any size animation, the current size will be
          // read from the animation value, otherwise we'll use the current
          private val currentSize: IntSize
              get() = animatedSize?.value ?: measuredSize

          @Suppress("ComposableModifierFactory", "ModifierFactoryExtensionFunction")
          @Composable
          internal fun createSizeAnimationModifier(contentTransform: ContentTransform): Modifier {
              var shouldAnimateSize by remember(this) { mutableStateOf(false) }
              val sizeTransform = rememberUpdatedState(contentTransform.sizeTransform)
              if (transition.currentState == transition.targetState) {
                  shouldAnimateSize = false
              } else {
                  // TODO: CurrentSize is only relevant to enter/exit transition, not so much for sizeAnim
                  if (sizeTransform.value != null) {
                      shouldAnimateSize = true
                  }
              }
              val sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 631
    endLine: 665
    sha256: 1be354c969f5da4a918b62d96a4f0b1e75f211329c159ea9fa85700027103c2b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              return if (shouldAnimateSize) {
                      sizeAnimation = transition.createDeferredAnimation(IntSize.VectorConverter)
                      remember(sizeAnimation) {
                          (if (sizeTransform.value?.clip == false) Modifier else Modifier.clipToBounds())
                      }
                  } else {
                      sizeAnimation = null
                      animatedSize = null
                      Modifier
                  }
                  .then(
                      // Keep the SizeModifier in the chain and switch between active animating and
                      // passive
                      // observing based on sizeAnimation's value
                      SizeModifierElement(sizeAnimation, sizeTransform, this)
                  )
          }

          // This helps track the target measurable without affecting the placement order. Target
          // measurable needs to be measured first but placed last.
          internal class ChildData(isTarget: Boolean) : ParentDataModifier {
              // isTarget is read during measure. It is necessary to make this a MutableState
              // such that when the target changes, measure is triggered
              var isTarget by mutableStateOf(isTarget)
              var isPendingTarget by mutableStateOf(false)

              override fun Density.modifyParentData(parentData: Any?): Any {
                  return this@ChildData
              }
          }

          private class SizeModifierElement<S>(
              val sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?,
              val sizeTransform: State<SizeTransform?>,
              val scope: AnimatedContentTransitionScopeImpl<S>,
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 666
    endLine: 700
    sha256: d52e84bedd71e9786ff93cff112d799c212e3bb66842675c066b4dab7dd7bc58
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ) : ModifierNodeElement<SizeModifierNode<S>>() {
              override fun create(): SizeModifierNode<S> {
                  return SizeModifierNode(sizeAnimation, sizeTransform, scope)
              }

              override fun hashCode(): Int {
                  return (31 * scope.hashCode() + sizeAnimation.hashCode()) * 31 +
                      sizeTransform.hashCode()
              }

              override fun equals(other: Any?): Boolean {
                  return other is SizeModifierElement<*> &&
                      other.sizeAnimation == sizeAnimation &&
                      other.sizeTransform == sizeTransform
              }

              override fun update(node: SizeModifierNode<S>) {
                  node.sizeAnimation = sizeAnimation
                  node.sizeTransform = sizeTransform
                  node.scope = scope
              }

              override fun InspectorInfo.inspectableProperties() {
                  name = "sizeTransform"
                  properties["sizeAnimation"] = sizeAnimation
                  properties["sizeTransform"] = sizeTransform
                  properties["scope"] = scope
              }
          }

          private class SizeModifierNode<S>(
              var sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?,
              var sizeTransform: State<SizeTransform?>,
              var scope: AnimatedContentTransitionScopeImpl<S>,
          ) : LayoutModifierNodeWithPassThroughIntrinsics() {
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 701
    endLine: 735
    sha256: 01e92ce1e269860bb9816b4beaaf36c31b1773ca184620f62ff4189cdd0e00e3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              /**
               * Temporary state used to pass data from [measure] to the corresponding placement block in
               * the same frame. These are separated for lookahead and approach passes to avoid state
               * pollution between passes. References are NOT cleared after placement because placement
               * can be invoked multiple times without a new measure pass. Should not be used elsewhere.
               */
              private var lookaheadPlaceable: Placeable? = null
              private var approachPlaceable: Placeable? = null
              private var lookaheadSize: IntSize = IntSize.Zero
              private var approachSize: IntSize = IntSize.Zero

              private val lookaheadPlacementBlock: Placeable.PlacementScope.() -> Unit = {
                  val placeable = lookaheadPlaceable!!
                  val measuredSize = lookaheadSize
                  val offset =
                      scope.contentAlignment.align(
                          IntSize(placeable.width, placeable.height),
                          measuredSize,
                          LayoutDirection.Ltr,
                      )
                  placeable.place(offset)
              }

              private val approachPlacementBlock: Placeable.PlacementScope.() -> Unit = {
                  val placeable = approachPlaceable!!
                  val measuredSize = approachSize
                  val offset =
                      scope.contentAlignment.align(
                          IntSize(placeable.width, placeable.height),
                          measuredSize,
                          LayoutDirection.Ltr,
                      )
                  placeable.place(offset)
              }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 71
    endLine: 105
    sha256: 50f1b1dc7cf92882a21e385838e701ba6f56945fefa95ac738483f03d257f60f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastForEachIndexed
      import androidx.compose.ui.util.fastMaxOfOrNull

      internal const val AnimatedContentDebug = false

      private inline fun animatedContentDebug(message: () -> String) {
          if (AnimatedContentDebug) {
              println("AnimatedContent, ${message()}")
          }
      }

      /**
       * [AnimatedContent] is a container that automatically animates its content when [targetState]
       * changes. Its [content] for different target states is defined in a mapping between a target state
       * and a composable function.
       *
       * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
       * account in deciding what composable function to return as the content for that state. This is
       * critical to ensure a successful lookup of all the incoming and outgoing content during content
       * transform.
       *
       * When [targetState] changes, content for both new and previous targetState will be looked up
       * through the [content] lambda. They will go through a [ContentTransform] so that the new target
       * content can be animated in while the initial content animates out. Meanwhile the container will
       * animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
       * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
       *
       * If [targetState] is expected to mutate frequently and not all mutations should be treated as
       * target state change, consider defining a mapping between [targetState] and a key in [contentKey].
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 736
    endLine: 770
    sha256: a70da745288ba9a668985adeb41c60547dc6bf387ab0dc784c655236def6c19f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              // This is used to track the on-going size change so that when the target state changes,
              // we always start from the last seen size to the new target size to ensure continuity.
              private var lastSize: IntSize = UnspecifiedSize

              private fun lastContinuousSizeOrDefault(default: IntSize) =
                  if (lastSize == UnspecifiedSize) default else lastSize

              override fun onReset() {
                  super.onReset()
                  lastSize = UnspecifiedSize
              }

              override fun MeasureScope.measure(
                  measurable: Measurable,
                  constraints: Constraints,
              ): MeasureResult {
                  val placeable = measurable.measure(constraints)
                  val measuredSize: IntSize
                  if (isLookingAhead) {
                      measuredSize = IntSize(placeable.width, placeable.height)
                  } else if (sizeAnimation == null) {
                      // Observing mode
                      measuredSize = IntSize(placeable.width, placeable.height)
                      lastSize = IntSize(placeable.width, placeable.height)
                  } else {
                      val currentSize = IntSize(placeable.width, placeable.height)
                      val size =
                          sizeAnimation!!.animate(
                              transitionSpec = {
                                  val initial =
                                      if (initialState == scope.initialState) {
                                          lastContinuousSizeOrDefault(currentSize)
                                      } else {
                                          scope.targetSizeMap[initialState]?.value ?: IntSize.Zero
                                      }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-771-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 771
    endLine: 805
    sha256: 95edcdb91ac26a5ab4f6bfbf49e28c7b4cb443f124c3af3eac7f7f370a61d25c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  val target = scope.targetSizeMap[targetState]?.value ?: IntSize.Zero
                                  sizeTransform.value?.createAnimationSpec(initial, target)
                                      ?: AnimatedContentDefaults.SizeAnimationSpec
                              }
                          ) {
                              // Animate from the approach size to the lookahead size.
                              if (it == scope.initialState) {
                                  lastContinuousSizeOrDefault(currentSize)
                              } else {
                                  scope.targetSizeMap[it]?.value ?: IntSize.Zero
                              }
                          }
                      scope.animatedSize = size
                      measuredSize = size.value
                      lastSize = size.value
                  }
                  if (isLookingAhead) {
                      lookaheadPlaceable = placeable
                      lookaheadSize = measuredSize
                      return layout(
                          measuredSize.width,
                          measuredSize.height,
                          placementBlock = lookaheadPlacementBlock,
                      )
                  } else {
                      approachPlaceable = placeable
                      approachSize = measuredSize
                      return layout(
                          measuredSize.width,
                          measuredSize.height,
                          placementBlock = approachPlacementBlock,
                      )
                  }
              }
          }
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-806-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 806
    endLine: 840
    sha256: 52a1ca9e7d8db917a3dcbef7f3b5989ad54bf7547ef8645976d5c806a1b2fde0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      private val UnspecifiedSize: IntSize
          get() = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)

      /**
       * The maximum number of interrupted states to keep in the composition tree at once.
       *
       * This limit is only applied to [DeferredTransition] based [AnimatedContent]. It ensures that the
       * most recent states in a transition chain (e.g. A -> B -> C) stay visible and finish their exit
       * animations gracefully, while preventing an infinite "pile-up" of scenes in the composition tree
       * during rapid interruptions.
       */
      private const val MaxInterruptionRetention = 3

      /**
       * An object that allows manual manipulation of both entering and exiting content during the
       * deferred phase (initiated by [DeferredTransitionState.defer]) of an [AnimatedContent] transition.
       *
       * Use [initialContentTransform] to define transformations for the exiting (initial) content,
       * [targetContentTransform] for the entering (target) content, and [sharedElementProgress] to
       * interpolate detached shared elements between their initial and target bounds.
       *
       * @param initialTransform The [MutableTransform] applied to the exiting (initial) content.
       * @param targetTransform The [MutableTransform] applied to the entering (target) content.
       * @see MutableTransform
       */
      public class MutableContentTransform(
          internal val initialTransform: MutableTransform,
          internal val targetTransform: MutableTransform,
      ) {
          @PublishedApi
          internal constructor(
              initialVeilMatchParentSize: Boolean,
              targetVeilMatchParentSize: Boolean,
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-841-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 841
    endLine: 875
    sha256: a5407a114f61582cacee02f124a6a2a531f2b44671865d73d881c5704ff4239f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              initialOffsetVelocityProvider: (() -> Offset)?,
              targetOffsetVelocityProvider: (() -> Offset)?,
          ) : this(
              initialTransform =
                  MutableTransform(initialVeilMatchParentSize, initialOffsetVelocityProvider),
              targetTransform = MutableTransform(targetVeilMatchParentSize, targetOffsetVelocityProvider),
          )

          /**
           * Define the manual transformation to apply to the exiting content during the deferred phase.
           *
           * @param block A lambda that applies transformations to the provided [TransformScope].
           */
          public fun initialContentTransform(block: TransformScope.(fullSize: IntSize) -> Unit) {
              initialTransform.update(block)
          }

          /**
           * Define the manual transformation to apply to the entering content during the deferred phase.
           *
           * @param block A lambda that applies transformations to the provided [TransformScope].
           */
          public fun targetContentTransform(block: TransformScope.(fullSize: IntSize) -> Unit) {
              targetTransform.update(block)
          }

          /**
           * Configures the interpolation progress for shared elements configured with
           * [SharedTransitionScope.DeferredTransitionBehavior.SeekToTarget] via
           * [SharedTransitionScope.SharedContentConfig.deferredTransitionBehavior].
           *
           * During the deferred phase, these shared elements interpolate their bounds between their
           * initial (`0f`) and target (`1f`) bounds based on [progress] (clamped to `0f..1f`), rather
           * than remaining at their initial bounds (`0f`).
           *
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-876-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 876
    endLine: 910
    sha256: b664675b403e3dee5626560d510786035ea772ec889d87a4edd603cd335598cd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param progress lambda returning the current interpolation progress between `0f` and `1f`
           */
          public fun sharedElementProgress(progress: () -> Float) {
              initialTransform.sharedElementProgress(progress)
              targetTransform.sharedElementProgress(progress)
          }
      }

      /**
       * Creates a [MutableContentTransform] and applies the provided configuration [block].
       *
       * @param initialVeilMatchParentSize Whether the initial content's veil should match the parent
       *   size.
       * @param targetVeilMatchParentSize Whether the target content's veil should match the parent size.
       * @param initialOffsetVelocityProvider The velocity of the offset change for the exiting content in
       *   pixels/sec. If `null`, the system will automatically calculate the velocity based on
       *   [TransformScope.offset] changes during the deferred phase.
       * @param targetOffsetVelocityProvider The velocity of the offset change for the entering content in
       *   pixels/sec. If `null`, the system will automatically calculate the velocity based on
       *   [TransformScope.offset] changes during the deferred phase.
       * @param block A configuration block to set up the transformations for initial and target content.
       */
      public inline fun MutableContentTransform(
          initialVeilMatchParentSize: Boolean = false,
          targetVeilMatchParentSize: Boolean = false,
          noinline initialOffsetVelocityProvider: (() -> Offset)? = null,
          noinline targetOffsetVelocityProvider: (() -> Offset)? = null,
          block: MutableContentTransform.() -> Unit = {},
      ): MutableContentTransform =
          MutableContentTransform(
                  initialVeilMatchParentSize = initialVeilMatchParentSize,
                  targetVeilMatchParentSize = targetVeilMatchParentSize,
                  initialOffsetVelocityProvider = initialOffsetVelocityProvider,
                  targetOffsetVelocityProvider = targetOffsetVelocityProvider,
              )
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-911-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 911
    endLine: 945
    sha256: d443c1a281b5af77ee98042f76c0411c262db3b663da1553f4308c3c4aa9e1c4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              .apply(block)

      /**
       * Receiver scope for content lambda for AnimatedContent. In this scope,
       * [transition][AnimatedVisibilityScope.transition] can be used to observe the state of the
       * transition, or to add more enter/exit transition for the content.
       */
      public sealed interface AnimatedContentScope : AnimatedVisibilityScope

      private class AnimatedContentScopeImpl
      internal constructor(animatedVisibilityScope: AnimatedVisibilityScope) :
          AnimatedContentScope, AnimatedVisibilityScope by animatedVisibilityScope

      /**
       * [AnimatedContent] is a container that automatically animates its content when
       * [Transition.targetState] changes. Its [content] for different target states is defined in a
       * mapping between a target state and a composable function.
       *
       * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
       * account in deciding what composable function to return as the content for that state. This is
       * critical to ensure a successful lookup of all the incoming and outgoing content during content
       * transform.
       *
       * When [Transition.targetState] changes, content for both new and previous targetState will be
       * looked up through the [content] lambda. They will go through a [ContentTransform] so that the new
       * target content can be animated in while the initial content animates out. Meanwhile the container
       * will animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
       * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
       *
       * If [Transition.targetState] is expected to mutate frequently and not all mutations should be
       * treated as target state change, consider defining a mapping between [Transition.targetState] and
       * a key in [contentKey]. As a result, transitions will be triggered when the resulting key changes.
       * In other words, there will be no animation when switching between [Transition.targetState]s that
       * share the same key. By default, the key will be the same as the targetState object.
       *
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-946-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 946
    endLine: 974
    sha256: c7c2e2f1b7736e88942a2cec7c75d4efa59e8637924295c519b8f6af2c3a5315
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * By default, the [ContentTransform] will be a delayed [fadeIn] of the target content and a delayed
       * [scaleIn] [togetherWith] a [fadeOut] of the initial content, using a [SizeTransform] to animate
       * any size change of the content. This behavior can be customized using [transitionSpec]. If
       * desired, different [ContentTransform]s can be defined for different pairs of initial content and
       * target content.
       *
       * [AnimatedContent] displays only the content for [Transition.targetState] when not animating.
       * However, during the transient content transform, there will be more than one sets of content
       * present in the [AnimatedContent] container. It may be sometimes desired to define the positional
       * relationship among different content and the style of overlap. This can be achieved by defining
       * [contentAlignment] and [zOrder][ContentTransform.targetContentZIndex]. By default,
       * [contentAlignment] aligns all content to [Alignment.TopStart], and the `zIndex` for all the
       * content is 0f. __Note__: The target content will always be placed last, therefore it will be on
       * top of all the other content unless zIndex is specified.
       *
       * Different content in [AnimatedContent] will have access to their own [AnimatedContentScope]. This
       * allows content to define more local enter/exit transitions via
       * [AnimatedContentScope.animateEnterExit] and [AnimatedContentScope.transition]. These custom
       * enter/exit animations will be triggered as the content enters/leaves the container.
       *
       * @param modifier is applied to the Layout created by [AnimatedContent], which houses all the
       *   animating contents.
       * @param transitionSpec specifies the enter/exit animations, as well as size animation (if
       *   applicable). By default, a [fadeIn] and [scaleIn] will be used for the entering content, and
       *   [fadeOut] for the exiting content. The [ContentTransform] returned by [transitionSpec] can be
       *   created using [togetherWith] with [EnterTransition] and [ExitTransition].
       * @param contentAlignment specifies the alignment of the animated content. By default, it'll be
       *   aligned to the top start of the container.
       * @param contentKey A key to identify the content.
  - id: live-androidx-animation-animation-animation-animatedcontent-lines-975-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt
    startLine: 975
    endLine: 1009
    sha256: 38fea51f3553c3af988dd61c1830b2f183c0f86f25c1d34233fe5f86df9714b1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param content The composable function to render the content for a given state.
       * @sample androidx.compose.animation.samples.TransitionExtensionAnimatedContentSample
       * @see ContentTransform
       * @see AnimatedContentScope
       */
      @Composable
      public fun <S> Transition<S>.AnimatedContent(
          modifier: Modifier = Modifier,
          transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
              AnimatedContentDefaults.ContentTransform
          },
          contentAlignment: Alignment = Alignment.TopStart,
          contentKey: (targetState: S) -> Any? = { it },
          content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
      ) {
          AnimatedContentImpl(
              modifier = modifier,
              transitionSpec = transitionSpec,
              contentAlignment = contentAlignment,
              contentKey = contentKey,
              mutableTransformSpec = { null },
              content = content,
          )
      }

      /**
       * [AnimatedContent] is a container that automatically animates its content when
       * [Transition.targetState] changes. Its [content] for different target states is defined in a
       * mapping between a target state and a composable function.
       *
       * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
       * account in deciding what composable function to return as the content for that state. This is
       * critical to ensure a successful lookup of all the incoming and outgoing content during content
       * transform.
       *
compose:
  id: live-androidx-animation-animation-animation-animatedcontent
  artifact: androidx.compose.animation:animation
  fqn: androidx.compose.animation
  sections:
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1
      title: androidx.compose.animation AnimatedContent.kt source (lines 1–35)
      aliases:
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1010
      title: androidx.compose.animation AnimatedContent.kt source (lines 1010–1036)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.togetherWith
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1010-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1037
      title: androidx.compose.animation AnimatedContent.kt source (lines 1037–1071)
      aliases:
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.AnimatedContentTransitionScope
        - androidx.compose.animation.MutableContentTransform
        - androidx.compose.animation.AnimatedContentScope
        - androidx.compose.animation.DeferredAnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1037-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-106
      title: androidx.compose.animation AnimatedContent.kt source (lines 106–140)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.togetherWith
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-106-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1072
      title: androidx.compose.animation AnimatedContent.kt source (lines 1072–1106)
      aliases:
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.AnimatedContentTransitionScope
        - androidx.compose.animation.MutableContentTransform
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1072-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1107
      title: androidx.compose.animation AnimatedContent.kt source (lines 1107–1141)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1107-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1142
      title: androidx.compose.animation AnimatedContent.kt source (lines 1142–1176)
      aliases:
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1142-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1177
      title: androidx.compose.animation AnimatedContent.kt source (lines 1177–1211)
      aliases:
        - androidx.compose.animation.MutableContentTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1177-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1212
      title: androidx.compose.animation AnimatedContent.kt source (lines 1212–1246)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1212-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1247
      title: androidx.compose.animation AnimatedContent.kt source (lines 1247–1281)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1247-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1282
      title: androidx.compose.animation AnimatedContent.kt source (lines 1282–1316)
      aliases:
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1282-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1317
      title: androidx.compose.animation AnimatedContent.kt source (lines 1317–1351)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1317-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1352
      title: androidx.compose.animation AnimatedContent.kt source (lines 1352–1386)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1352-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1387
      title: androidx.compose.animation AnimatedContent.kt source (lines 1387–1421)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1387-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-141
      title: androidx.compose.animation AnimatedContent.kt source (lines 141–175)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.with
        - androidx.compose.animation.AnimatedContentTransitionScope
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-141-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1422
      title: androidx.compose.animation AnimatedContent.kt source (lines 1422–1456)
      aliases:
        - androidx.compose.animation.AnimatedContent
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1422-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1457
      title: androidx.compose.animation AnimatedContent.kt source (lines 1457–1491)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1457-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-1492
      title: androidx.compose.animation AnimatedContent.kt source (lines 1492–1502)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-1492-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-176
      title: androidx.compose.animation AnimatedContent.kt source (lines 176–210)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-176-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-211
      title: androidx.compose.animation AnimatedContent.kt source (lines 211–245)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-211-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-246
      title: androidx.compose.animation AnimatedContent.kt source (lines 246–280)
      aliases:
        - androidx.compose.animation.SizeTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-246-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-281
      title: androidx.compose.animation AnimatedContent.kt source (lines 281–315)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.togetherWith
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-281-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-316
      title: androidx.compose.animation AnimatedContent.kt source (lines 316–350)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-316-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-351
      title: androidx.compose.animation AnimatedContent.kt source (lines 351–385)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-351-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-36
      title: androidx.compose.animation AnimatedContent.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-36-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-386
      title: androidx.compose.animation AnimatedContent.kt source (lines 386–420)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-386-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-421
      title: androidx.compose.animation AnimatedContent.kt source (lines 421–455)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.with
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-421-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-456
      title: androidx.compose.animation AnimatedContent.kt source (lines 456–490)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.with
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-456-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-491
      title: androidx.compose.animation AnimatedContent.kt source (lines 491–525)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-491-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-526
      title: androidx.compose.animation AnimatedContent.kt source (lines 526–560)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.with
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-526-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-561
      title: androidx.compose.animation AnimatedContent.kt source (lines 561–595)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.AnimatedContentTransitionScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-561-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-596
      title: androidx.compose.animation AnimatedContent.kt source (lines 596–630)
      aliases:
        - androidx.compose.animation.ContentTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-596-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-631
      title: androidx.compose.animation AnimatedContent.kt source (lines 631–665)
      aliases:
        - androidx.compose.animation.SizeTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-631-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-666
      title: androidx.compose.animation AnimatedContent.kt source (lines 666–700)
      aliases:
        - androidx.compose.animation.SizeTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-666-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-701
      title: androidx.compose.animation AnimatedContent.kt source (lines 701–735)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-701-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-71
      title: androidx.compose.animation AnimatedContent.kt source (lines 71–105)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-71-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-736
      title: androidx.compose.animation AnimatedContent.kt source (lines 736–770)
      aliases: []
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-736-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-771
      title: androidx.compose.animation AnimatedContent.kt source (lines 771–805)
      aliases:
        - androidx.compose.animation.AnimatedContentDefaults
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-771-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-806
      title: androidx.compose.animation AnimatedContent.kt source (lines 806–840)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.MutableContentTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-806-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-841
      title: androidx.compose.animation AnimatedContent.kt source (lines 841–875)
      aliases:
        - androidx.compose.animation.with
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-841-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-876
      title: androidx.compose.animation AnimatedContent.kt source (lines 876–910)
      aliases:
        - androidx.compose.animation.MutableContentTransform
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-876-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-911
      title: androidx.compose.animation AnimatedContent.kt source (lines 911–945)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-911-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-946
      title: androidx.compose.animation AnimatedContent.kt source (lines 946–974)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.SizeTransform
        - androidx.compose.animation.togetherWith
        - androidx.compose.animation.with
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-946-source
      relatedIds: []
    - id: live-androidx-animation-animation-animation-animatedcontent-lines-975
      title: androidx.compose.animation AnimatedContent.kt source (lines 975–1009)
      aliases:
        - androidx.compose.animation.AnimatedContent
        - androidx.compose.animation.ContentTransform
        - androidx.compose.animation.AnimatedContentDefaults
        - androidx.compose.animation.AnimatedContentTransitionScope
        - androidx.compose.animation.AnimatedContentScope
      requires:
        - artifact: androidx.compose.animation:animation
          version: null
      sourceIds:
        - live-androidx-animation-animation-animation-animatedcontent-lines-975-source
      relatedIds: []
---

# androidx.compose.animation AnimatedContent.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt

## androidx.compose.animation AnimatedContent.kt source (lines 1–35)

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
@file:OptIn(InternalAnimationApi::class)

package androidx.compose.animation

import androidx.collection.mutableScatterMapOf
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Down
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.End
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Left
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Right
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Start
import androidx.compose.animation.AnimatedContentTransitionScope.SlideDirection.Companion.Up
import androidx.compose.animation.core.AnimationVector2D
import androidx.compose.animation.core.DeferredTransition
import androidx.compose.animation.core.DeferredTransitionState
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.animation.core.InternalAnimationApi
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.Transition
import androidx.compose.animation.core.VectorConverter
import androidx.compose.animation.core.VisibilityThreshold

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1010–1036)

 * When [Transition.targetState] changes, content for both new and previous targetState will be
 * looked up through the [content] lambda. They will go through a [ContentTransform] so that the new
 * target content can be animated in while the initial content animates out. Meanwhile the container
 * will animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
 * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
 *
 * If [Transition.targetState] is expected to mutate frequently and not all mutations should be
 * treated as target state change, consider defining a mapping between [Transition.targetState] and
 * a key in [contentKey]. As a result, transitions will be triggered when the resulting key changes.
 * In other words, there will be no animation when switching between [Transition.targetState]s that
 * share the same key. By default, the key will be the same as the targetState object.
 *
 * @param modifier is applied to the Layout created by [AnimatedContent], which houses all the
 *   animating contents.
 * @param transitionSpec specifies the enter/exit animations, as well as size animation (if
 *   applicable). By default, a [fadeIn] and [scaleIn] will be used for the entering content, and
 *   [fadeOut] for the exiting content. The [ContentTransform] returned by [transitionSpec] can be
 *   created using [togetherWith] with [EnterTransition] and [ExitTransition].
 * @param contentAlignment specifies the alignment of the animated content. By default, it'll be
 *   aligned to the top start of the container.
 * @param contentKey A key to identify the content.
 * @param mutableTransformSpec A specification to control an optional manual transformation during
 *   the deferred phase (e.g., for predictive back gestures) before the main transition begins. This
 *   is only active if the [Transition] was created using [rememberDeferredTransition] with
 *   [DeferredTransitionState]. By default, this returns `null`, meaning no manual transformations
 *   are applied and properties remain at the transition's initial values during the deferred phase.
 *

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1010-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1037–1071)

 *   **Lifecycle:** The deferred phase starts when [DeferredTransitionState.defer] is called. It
 *   ends and the automatic transition begins when [DeferredTransitionState.animateTo] is called.
 *
 *   **Transformations:** During this phase, you can manually manipulate the entering and exiting
 *   content's transformations (via [MutableContentTransform]). When a [MutableContentTransform] is
 *   provided, properties that are not manually set default to their resting values during the
 *   deferred phase.
 *
 * **Handoff:** Once the transition starts, the manually applied transformations are seamlessly
 * handed off to the configured [transitionSpec]. For exiting content, a "sustain unless specified"
 * policy is applied: if an exit transition (e.g. `fadeOut`) is specified, the hand-off will animate
 * towards the target value of that transition. However, if no exit transition is specified for a
 * given property (e.g. `slideOut` is missing), that property will sustain its last manual value
 * until the entire transition completes.
 *
 * *Note:* While in the deferred phase, entering content remains in the [EnterExitState.PreEnter]
 * state, and exiting content remains in the [EnterExitState.Visible] state.
 *
 * @param content The composable function to render the content for a given state.
 * @sample androidx.compose.animation.samples.DeferredAnimatedContentSample
 * @sample androidx.compose.animation.samples.TransitionExtensionAnimatedContentSample
 * @see ContentTransform
 * @see AnimatedContentScope
 */
@Composable
public fun <S> DeferredTransition<S>.DeferredAnimatedContent(
    modifier: Modifier = Modifier,
    transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
        AnimatedContentDefaults.ContentTransform
    },
    contentAlignment: Alignment = Alignment.TopStart,
    contentKey: (targetState: S) -> Any? = { it },
    mutableTransformSpec: AnimatedContentTransitionScope<S>.() -> MutableContentTransform? = {
        null
    },

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1037-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 106–140)

 * As a result, transitions will be triggered when the resulting key changes. In other words, there
 * will be no animation when switching between [targetState]s that share the same key. By default,
 * the key will be the same as the targetState object.
 *
 * By default, the [ContentTransform] will be a delayed [fadeIn] of the target content and a delayed
 * [scaleIn] [togetherWith] a [fadeOut] of the initial content, using a [SizeTransform] to animate
 * any size change of the content. This behavior can be customized using [transitionSpec]. If
 * desired, different [ContentTransform]s can be defined for different pairs of initial content and
 * target content.
 *
 * [AnimatedContent] displays only the content for [targetState] when not animating. However, during
 * the transient content transform, there will be more than one set of content present in the
 * [AnimatedContent] container. It may be sometimes desired to define the positional relationship
 * among the different content and the overlap. This can be achieved by defining [contentAlignment]
 * and [zOrder][ContentTransform.targetContentZIndex]. By default, [contentAlignment] aligns all
 * content to [Alignment.TopStart], and the `zIndex` for all the content is 0f. __Note__: The target
 * content will always be placed last, therefore it will be on top of all the other content unless
 * zIndex is specified.
 *
 * Different content in [AnimatedContent] will have access to their own [AnimatedContentScope]. This
 * allows content to define more local enter/exit transitions via
 * [AnimatedContentScope.animateEnterExit] and [AnimatedContentScope.transition]. These custom
 * enter/exit animations will be triggered as the content enters/leaves the container.
 *
 * [label] is an optional parameter to differentiate from other animations in Android Studio.
 *
 * @sample androidx.compose.animation.samples.SimpleAnimatedContentSample
 *
 * Below is an example of customizing [transitionSpec] to imply a spatial relationship between the
 * content for different states:
 *
 * @sample androidx.compose.animation.samples.AnimateIncrementDecrementSample
 * @see ContentTransform
 * @see AnimatedContentScope
 */

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1072–1106)

    content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
) {
    AnimatedContentImpl(
        modifier = modifier,
        transitionSpec = transitionSpec,
        contentAlignment = contentAlignment,
        contentKey = contentKey,
        mutableTransformSpec = mutableTransformSpec,
        content = content,
    )
}

@Composable
internal fun <S> Transition<S>.AnimatedContentImpl(
    modifier: Modifier = Modifier,
    transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
        AnimatedContentDefaults.ContentTransform
    },
    contentAlignment: Alignment = Alignment.TopStart,
    contentKey: (targetState: S) -> Any? = { it },
    mutableTransformSpec: AnimatedContentTransitionScope<S>.() -> MutableContentTransform? = {
        null
    },
    content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
) {
    val layoutDirection = LocalLayoutDirection.current
    val rootScope =
        remember(this) {
            AnimatedContentTransitionScopeImpl(this, contentAlignment, layoutDirection)
        }
    // TODO: remove screen as soon as they are animated out
    val currentlyVisible = remember(this) { mutableStateListOf(currentState) }
    val contentMap =
        remember(this, pendingTargetState) { mutableScatterMapOf<S, @Composable() () -> Unit>() }
    // This is needed for tooling because it could change currentState directly,

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1072-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1107–1141)

    // as opposed to changing target only. When that happens we need to clear all the
    // visible content and only display the content for the new current state and target state.
    if (!currentlyVisible.contains(currentState)) {
        currentlyVisible.clear()
        currentlyVisible.add(currentState)
    }
    animatedContentDebug {
        "Composing AnimatedContent. targetState: $targetState, currentState: ${currentState},"
    }
    if (currentState == targetState && pendingTargetState == null) {
        if (currentlyVisible.size != 1 || currentlyVisible[0] != currentState) {
            currentlyVisible.clear()
            currentlyVisible.add(currentState)
        }
        if (contentMap.size != 1 || contentMap.containsKey(currentState)) {
            contentMap.clear()
        }
        // TODO: Do we want to support changing contentAlignment amid animation?
        rootScope.contentAlignment = contentAlignment
        rootScope.layoutDirection = layoutDirection
    }

    pendingTargetState?.let { pendingTargetState ->
        if (pendingTargetState != currentState) {
            val pendingKey = contentKey(pendingTargetState)
            if (pendingKey != contentKey(targetState)) {
                // Replace the target with the same key if any
                val id = currentlyVisible.indexOfFirst { contentKey(it) == pendingKey }
                if (id == -1) {
                    currentlyVisible.add(pendingTargetState)
                } else if (currentlyVisible[id] != pendingTargetState) {
                    currentlyVisible[id] = pendingTargetState
                }
            }
        }

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1107-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1142–1176)

    }

    // Currently visible list always keeps the targetState at the end of the list, unless it's
    // already in the list in the case of interruption. This makes the composable associated with
    // the targetState get placed last, so the target composable will be displayed on top of
    // content associated with other states, unless zIndex is specified.
    if (currentState != targetState) {
        val id = currentlyVisible.indexOfFirst { contentKey(it) == contentKey(targetState) }
        if (id == -1) {
            animatedContentDebug {
                "Added new targetState: $targetState, " + "contentKey: ${contentKey(targetState)}"
            }
            currentlyVisible.add(targetState)
        } else if (currentlyVisible[id] != targetState || id != currentlyVisible.size - 1) {
            if (targetState != currentlyVisible[id]) {
                animatedContentDebug {
                    "Replaced state: ${currentlyVisible[id]} with targetState: $targetState, " +
                        "due to the same contentKey: ${contentKey(targetState)}"
                }
            }
            currentlyVisible.removeAt(id)
            currentlyVisible.add(targetState)
        }
    }

    val localPendingTargetState = pendingTargetState
    val pendingScope =
        remember(localPendingTargetState) {
            localPendingTargetState?.let {
                PendingAnimatedContentTransitionScope(
                    delegate = rootScope,
                    overrideInitialState = this@AnimatedContentImpl.targetState,
                    overrideTargetState = it,
                )
            }

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1142-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1177–1211)

        }
    val mutableContentTransformData =
        remember(pendingScope, mutableTransformSpec) {
            pendingScope?.run {
                if (contentKey(initialState) != contentKey(targetState)) {
                    mutableTransformSpec()
                } else {
                    MutableContentTransform()
                }
            }
        }
    if (
        targetState !in contentMap ||
            currentState !in contentMap ||
            (localPendingTargetState != null && localPendingTargetState !in contentMap)
    ) {
        contentMap.clear()
        currentlyVisible.toList().fastForEach { stateForContent ->
            contentMap[stateForContent] = {
                val specOnEnter =
                    remember(stateForContent == pendingTargetState) {
                        if (stateForContent == pendingTargetState && pendingScope != null) {
                            pendingScope.transitionSpec()
                        } else if (
                            stateForContent != segment.initialState &&
                                stateForContent != segment.targetState
                        ) {
                            PendingAnimatedContentTransitionScope(
                                    rootScope,
                                    segment.initialState,
                                    stateForContent,
                                )
                                .transitionSpec()
                        } else {
                            rootScope.transitionSpec()

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1177-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1212–1246)

                        }
                    }
                // NOTE: enter and exit for this AnimatedVisibility will be using different spec,
                // naturally.
                val exit =
                    remember(
                        segment.targetState == stateForContent,
                        stateForContent == pendingTargetState,
                    ) {
                        if (
                            segment.targetState == stateForContent ||
                                (stateForContent == pendingTargetState && pendingScope != null)
                        ) {
                            ExitTransition.None
                        } else if (
                            stateForContent != segment.initialState &&
                                stateForContent != segment.targetState
                        ) {
                            PendingAnimatedContentTransitionScope(
                                    rootScope,
                                    stateForContent,
                                    segment.initialState,
                                )
                                .transitionSpec()
                                .initialContentExit
                        } else {
                            rootScope.transitionSpec().initialContentExit
                        }
                    }
                val childData = remember {
                    AnimatedContentTransitionScopeImpl.ChildData(stateForContent == targetState)
                }
                // TODO: Will need a custom impl of this to: 1) get the signal for when
                // the animation is finished, 2) get the target size properly
                AnimatedEnterExitImpl(

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1212-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1247–1281)

                    this@AnimatedContentImpl,
                    { it == stateForContent },
                    enter = specOnEnter.targetContentEnter,
                    exit = exit,
                    modifier =
                        ZIndexModifierElement(specOnEnter.targetContentZIndex, stateForContent)
                            .then(
                                childData.apply {
                                    isTarget = stateForContent == targetState
                                    val contentKey = contentKey(stateForContent)
                                    isPendingTarget =
                                        localPendingTargetState != null &&
                                            contentKey == contentKey(localPendingTargetState) &&
                                            contentKey != contentKey(targetState) &&
                                            contentKey != contentKey(currentState)
                                }
                            ),
                    shouldDisposeBlock = { currentState, targetState ->
                        currentState == EnterExitState.PostExit &&
                            targetState == EnterExitState.PostExit &&
                            !exit.config.hold
                    },
                    mutableTransformData =
                        mutableContentTransformData?.let { transform ->
                            when (stateForContent) {
                                pendingTargetState -> transform.targetTransform
                                targetState -> transform.initialTransform
                                else -> null
                            }
                        },
                    forceVisible =
                        this@AnimatedContentImpl is DeferredTransition &&
                            currentlyVisible.indexOf(stateForContent).let { index ->
                                index >= 0 &&
                                    index >= currentlyVisible.size - MaxInterruptionRetention

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1247-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1282–1316)

                            },
                ) {
                    // TODO: Should Transition.AnimatedVisibility have an end listener?
                    DisposableEffect(this, stateForContent) {
                        onDispose {
                            currentlyVisible.remove(stateForContent)
                            rootScope.targetSizeMap.remove(stateForContent)
                        }
                    }
                    rootScope.targetSizeMap[stateForContent] =
                        (this as AnimatedVisibilityScopeImpl).targetSize
                    with(remember { AnimatedContentScopeImpl(this) }) { content(stateForContent) }
                }
            }
        }
    }
    val contentTransform =
        remember(pendingScope, rootScope, segment) {
            transitionSpec(pendingScope ?: rootScope).also {
                animatedContentDebug { "transitionSpec changed to ${it.toDebugString()}" }
            }
        }
    val sizeModifier = rootScope.createSizeAnimationModifier(contentTransform)
    Layout(
        modifier = modifier.then(sizeModifier),
        content = {
            currentlyVisible.toList().fastForEach {
                key(contentKey(it)) { contentMap[it]?.invoke() }
            }
        },
        measurePolicy = remember { AnimatedContentMeasurePolicy(rootScope) },
    )
}

private class AnimatedContentMeasurePolicy(val rootScope: AnimatedContentTransitionScopeImpl<*>) :

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1282-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1317–1351)

    MeasurePolicy {

    // Temporary state used to pass data from measure to the corresponding placement block in the
    // same frame. These are separated for lookahead and approach passes to avoid state pollution
    // between passes. References are not cleared after placement because placement can be invoked
    // multiple times without a new measure pass.
    private var lookaheadPlaceables: Array<Placeable?>? = null
    private var approachPlaceables: Array<Placeable?>? = null
    private var lookaheadMaxWidth: Int = 0
    private var approachMaxWidth: Int = 0
    private var lookaheadMaxHeight: Int = 0
    private var approachMaxHeight: Int = 0

    private val lookaheadPlacementBlock: Placeable.PlacementScope.() -> Unit = {
        val placeables = lookaheadPlaceables!!
        val maxWidth = lookaheadMaxWidth
        val maxHeight = lookaheadMaxHeight

        for (placeable in placeables) {
            placeable?.let {
                val offset =
                    rootScope.contentAlignment.align(
                        IntSize(it.width, it.height),
                        IntSize(maxWidth, maxHeight),
                        LayoutDirection.Ltr,
                    )
                it.place(offset.x, offset.y)
            }
        }
    }

    private val approachPlacementBlock: Placeable.PlacementScope.() -> Unit = {
        val placeables = approachPlaceables!!
        val maxWidth = approachMaxWidth
        val maxHeight = approachMaxHeight

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1317-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1352–1386)


        for (placeable in placeables) {
            placeable?.let {
                val offset =
                    rootScope.contentAlignment.align(
                        IntSize(it.width, it.height),
                        IntSize(maxWidth, maxHeight),
                        LayoutDirection.Ltr,
                    )
                it.place(offset.x, offset.y)
            }
        }
    }

    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        rootScope.contentAlignment // Trigger read in measure to force remeasure on alignment change
        val placeables = arrayOfNulls<Placeable>(measurables.size)
        var targetSize = IntSize.Zero
        // Measure the target composable first (but place it on top unless zIndex is specified)
        measurables.fastForEachIndexed { index, measurable ->
            if (
                (measurable.parentData as? AnimatedContentTransitionScopeImpl.ChildData)
                    ?.isTarget == true
            ) {
                placeables[index] =
                    measurable.measure(constraints).also {
                        targetSize = IntSize(it.width, it.height)
                    }
            }
        }
        // Measure the non-target composables after target, since these have no impact on
        // container size in the size animation.

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1352-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1387–1421)

        measurables.fastForEachIndexed { index, measurable ->
            if (placeables[index] == null) {
                placeables[index] = measurable.measure(constraints)
            }
        }
        val (maxWidth, maxHeight) =
            if (isLookingAhead) {
                targetSize.width to targetSize.height
            } else {
                var maxW = 0
                var maxH = 0

                // Single loop for both width and height
                for (i in placeables.indices) {
                    val placeable = placeables[i] ?: continue // Skip nulls immediately

                    val data =
                        measurables[i].parentData as? AnimatedContentTransitionScopeImpl.ChildData
                    if (data?.isPendingTarget != true) {
                        if (placeable.width > maxW) maxW = placeable.width
                        if (placeable.height > maxH) maxH = placeable.height
                    }
                }
                maxW to maxH
            }
        if (!isLookingAhead) {
            // update currently measured size only during approach
            rootScope.measuredSize = IntSize(maxWidth, maxHeight)

            // Position the children.
            approachPlaceables = placeables
            approachMaxWidth = maxWidth
            approachMaxHeight = maxHeight
            return layout(maxWidth, maxHeight, placementBlock = approachPlacementBlock)
        } else {

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1387-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 141–175)

@Composable
public fun <S> AnimatedContent(
    targetState: S,
    modifier: Modifier = Modifier,
    transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
        AnimatedContentDefaults.ContentTransform
    },
    contentAlignment: Alignment = Alignment.TopStart,
    label: String = "AnimatedContent",
    contentKey: (targetState: S) -> Any? = { it },
    content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
) {
    val transition = updateTransition(targetState = targetState, label = label)
    transition.AnimatedContent(
        modifier,
        transitionSpec,
        contentAlignment,
        contentKey,
        content = content,
    )
}

/**
 * [ContentTransform] defines how the target content (i.e. content associated with target state)
 * enters [AnimatedContent] and how the initial content disappears.
 *
 * [targetContentEnter] defines the enter transition for the content associated with the new target
 * state. It can be a combination of [fadeIn], [slideIn]/[slideInHorizontally]
 * /[slideInVertically]/[AnimatedContentTransitionScope.slideIntoContainer], and expand. Similarly,
 * [initialContentExit] supports a combination of [ExitTransition] for animating out the initial
 * content (i.e. outgoing content). If the initial content and target content are of different size,
 * the [sizeTransform] will be triggered unless it's explicitly set to `null`.
 * [AnimatedContentTransitionScope.slideIntoContainer] and
 * [AnimatedContentTransitionScope.slideOutOfContainer] can provide container-size-aware sliding in
 * from the edge of the container, or sliding out to the edge of the container.

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1422–1456)

            // Position the children.
            lookaheadPlaceables = placeables
            lookaheadMaxWidth = maxWidth
            lookaheadMaxHeight = maxHeight
            return layout(maxWidth, maxHeight, placementBlock = lookaheadPlacementBlock)
        }
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastMaxOfOrNull { it.minIntrinsicWidth(height) } ?: 0

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) = measurables.fastMaxOfOrNull { it.minIntrinsicHeight(width) } ?: 0

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastMaxOfOrNull { it.maxIntrinsicWidth(height) } ?: 0

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ) = measurables.fastMaxOfOrNull { it.maxIntrinsicHeight(width) } ?: 0
}

/**
 * A [ModifierNodeElement] that creates and updates a [ZIndexModifierNode] to apply z-index to the
 * content in [AnimatedContent]. This is used to avoid multiple allocations of `Modifier.layout`
 * lambdas.
 */
private class ZIndexModifierElement(val zIndex: Float, val stateForContent: Any?) :

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1422-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1457–1491)

    ModifierNodeElement<ZIndexModifierNode>() {
    override fun create(): ZIndexModifierNode = ZIndexModifierNode(zIndex, stateForContent)

    override fun update(node: ZIndexModifierNode) {
        node.zIndex = zIndex
        node.stateForContent = stateForContent
    }

    override fun equals(other: Any?): Boolean =
        other is ZIndexModifierElement &&
            other.zIndex == zIndex &&
            other.stateForContent == stateForContent

    override fun hashCode(): Int {
        var result = zIndex.hashCode()
        result = 31 * result + (stateForContent?.hashCode() ?: 0)
        return result
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "targetContentZIndex"
        properties["zIndex"] = zIndex
        properties["stateForContent"] = stateForContent
    }
}

/**
 * A [LayoutModifierNode] that applies the specified [zIndex] during placement. This avoids
 * allocating a lambda on every placement pass.
 */
private class ZIndexModifierNode(var zIndex: Float, var stateForContent: Any?) :
    LayoutModifierNode, Modifier.Node() {
    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1457-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 1492–1502)

    ): MeasureResult {
        val placeable = measurable.measure(constraints)
        return layout(placeable.width, placeable.height) {
            animatedContentDebug {
                "Placing content for state: $stateForContent at zIndex = $zIndex"
            }
            placeable.place(0, 0, zIndex = zIndex)
        }
    }
}


Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-1492-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 176–210)

 *
 * [ContentTransform] supports the zIndex definition when the content enters the [AnimatedContent]
 * container via [targetContentZIndex]. By default, all content has a `0f` zIndex. Among content
 * with the same zIndex, the incoming target content will be on top, as it will be placed last.
 * However, this may not always be desired. zIndex can be specified to change that order. The
 * content with higher zIndex guarantee to be placed on top of content with lower zIndex.
 *
 * [sizeTransform] manages the expanding and shrinking of the container if there is any size change
 * as new content enters the [AnimatedContent] and old content leaves. Unlike [AnimatedVisibility],
 * for [AnimatedContent] it is generally more predictable to manage the size of the container using
 * [SizeTransform] than influencing the size using [expandIn]/[expandHorizontally]/[shrinkOut], etc
 * for each content. By default, [spring] will be used to animate any size change, and
 * [AnimatedContent] will be clipped to the animated size. Both can be customized by supplying a
 * different [SizeTransform]. If no size animation is desired, [sizeTransform] can be set to `null`.
 *
 * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
 * @see SizeTransform
 * @see EnterTransition
 * @see ExitTransition
 * @see AnimatedContent
 */
public class ContentTransform(
    public val targetContentEnter: EnterTransition,
    public val initialContentExit: ExitTransition,
    targetContentZIndex: Float = 0f,
    sizeTransform: SizeTransform? = AnimatedContentDefaults.SizeTransform,
) {
    /**
     * This describes the zIndex of the new target content as it enters the container. It defaults
     * to 0f. Content with higher zIndex will be drawn over lower `zIndex`ed content. Among content
     * with the same index, the target content will be placed on top.
     */
    public var targetContentZIndex: Float by mutableFloatStateOf(targetContentZIndex)

    /**

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 211–245)

     * [sizeTransform] manages the expanding and shrinking of the container if there is any size
     * change as new content enters the [AnimatedContent] and old content leaves. By default,
     * [spring] will be used to animate any size change, and [AnimatedContent] will be clipped to
     * the animated size. Both can be customized by supplying a different [SizeTransform]. If no
     * size animation is desired, [sizeTransform] can be set to `null`.
     */
    public var sizeTransform: SizeTransform? = sizeTransform
        internal set
}

internal fun ContentTransform.toDebugString(): String {
    return "ContentTransform(targetContentEnter=$targetContentEnter, " +
        "initialContentExit=$initialContentExit, " +
        "targetContentZIndex=$targetContentZIndex, " +
        "sizeTransform=$sizeTransform)"
}

/**
 * This creates a [SizeTransform] with the provided [clip] and [sizeAnimationSpec]. By default,
 * [clip] will be true. This means during the size animation, the content will be clipped to the
 * animated size. [sizeAnimationSpec] defaults to return a [spring] animation.
 *
 * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
 */
public fun SizeTransform(
    clip: Boolean = true,
    sizeAnimationSpec: (initialSize: IntSize, targetSize: IntSize) -> FiniteAnimationSpec<IntSize> =
        { _, _ ->
            AnimatedContentDefaults.SizeAnimationSpec
        },
): SizeTransform = SizeTransformImpl(clip, sizeAnimationSpec)

/**
 * [SizeTransform] defines how to transform from one size to another when the size of the content
 * changes. When [clip] is true, the content will be clipped to the animation size.

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 246–280)

 * [createAnimationSpec] specifies the animation spec for the size animation based on the initial
 * and target size.
 *
 * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
 */
public interface SizeTransform {
    /** Whether the content should be clipped using the animated size. */
    public val clip: Boolean

    /**
     * This allows [FiniteAnimationSpec] to be defined based on the [initialSize] before the size
     * animation and the [targetSize] of the animation.
     */
    public fun createAnimationSpec(
        initialSize: IntSize,
        targetSize: IntSize,
    ): FiniteAnimationSpec<IntSize>
}

/** Private implementation of SizeTransform interface. */
private class SizeTransformImpl(
    override val clip: Boolean = true,
    val sizeAnimationSpec:
        (initialSize: IntSize, targetSize: IntSize) -> FiniteAnimationSpec<IntSize>,
) : SizeTransform {
    override fun createAnimationSpec(
        initialSize: IntSize,
        targetSize: IntSize,
    ): FiniteAnimationSpec<IntSize> = sizeAnimationSpec(initialSize, targetSize)

    override fun toString(): String {
        return "SizeTransform(clip=$clip)"
    }
}


Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 281–315)

/**
 * This creates a [ContentTransform] using the provided [EnterTransition] and [exit], where the
 * enter and exit transition will be running simultaneously. For example:
 *
 * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
 */
public infix fun EnterTransition.togetherWith(exit: ExitTransition): ContentTransform =
    ContentTransform(this, exit)

/** Contains default values used throughout [AnimatedContent]. */
public object AnimatedContentDefaults {
    /** Default animation spec used for size animation in [SizeTransform]. */
    public val SizeAnimationSpec: FiniteAnimationSpec<IntSize> =
        spring(
            stiffness = Spring.StiffnessMediumLow,
            visibilityThreshold = IntSize.VisibilityThreshold,
        )

    /** Default [SizeTransform] used in [ContentTransform]. */
    public val SizeTransform: SizeTransform = SizeTransform()

    /** Default [ContentTransform] used in [AnimatedContent] if none is specified. */
    public val ContentTransform: ContentTransform =
        (fadeIn(animationSpec = tween(220, delayMillis = 90)) +
                scaleIn(initialScale = 0.92f, animationSpec = tween(220, delayMillis = 90)))
            .togetherWith(fadeOut(animationSpec = tween(90)))
}

@Deprecated(
    "Infix fun EnterTransition.with(ExitTransition) has been renamed to togetherWith",
    ReplaceWith("togetherWith(exit)"),
    level = DeprecationLevel.HIDDEN,
)
public infix fun EnterTransition.with(exit: ExitTransition): ContentTransform =
    ContentTransform(this, exit)

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 316–350)


/**
 * [AnimatedContentTransitionScope] provides functions that are convenient and only applicable in
 * the context of [AnimatedContent], such as [slideIntoContainer] and [slideOutOfContainer].
 */
public sealed interface AnimatedContentTransitionScope<S> : Transition.Segment<S> {
    /**
     * Customizes the [SizeTransform] of a given [ContentTransform]. For example:
     *
     * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
     */
    public infix fun ContentTransform.using(sizeTransform: SizeTransform?): ContentTransform

    /**
     * [SlideDirection] defines the direction of the slide in/out for [slideIntoContainer] and
     * [slideOutOfContainer]. The supported directions are: [Left], [Right], [Up] and [Down].
     */
    @Immutable
    @kotlin.jvm.JvmInline
    public value class SlideDirection internal constructor(private val value: Int) {
        public companion object {
            public val Left: SlideDirection
                get() = SlideDirection(0)

            public val Right: SlideDirection
                get() = SlideDirection(1)

            public val Up: SlideDirection
                get() = SlideDirection(2)

            public val Down: SlideDirection
                get() = SlideDirection(3)

            public val Start: SlideDirection
                get() = SlideDirection(4)

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 351–385)


            public val End: SlideDirection
                get() = SlideDirection(5)
        }

        override fun toString(): String {
            return when (this) {
                Left -> "Left"
                Right -> "Right"
                Up -> "Up"
                Down -> "Down"
                Start -> "Start"
                End -> "End"
                else -> "Invalid"
            }
        }
    }

    /**
     * This defines a horizontal/vertical slide-in that is specific to [AnimatedContent] from the
     * edge of the container. The offset amount is dynamically calculated based on the current size
     * of the [AnimatedContent] and its content alignment. This offset (may be positive or negative
     * based on the direction of the slide) is then passed to [initialOffset]. By default,
     * [initialOffset] will be using the offset calculated from the system to slide the content in.
     * [slideIntoContainer] is a convenient alternative to [slideInHorizontally] and
     * [slideInVertically] when the incoming and outgoing content differ in size. Otherwise, it
     * would be equivalent to [slideInHorizontally] and [slideInVertically] with an offset of the
     * full width/height.
     *
     * [towards] specifies the slide direction. Content can be slided into the container towards
     * [SlideDirection.Left], [SlideDirection.Right], [SlideDirection.Up] and [SlideDirection.Down].
     *
     * [animationSpec] defines the animation that will be used to animate the slide-in.
     *
     * @sample androidx.compose.animation.samples.SlideIntoContainerSample

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 36–70)

import androidx.compose.animation.core.createDeferredAnimation
import androidx.compose.animation.core.rememberDeferredTransition
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.animation.core.updateTransition
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.ParentDataModifier
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.layout.layout
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.LocalLayoutDirection

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 386–420)

     * @see AnimatedContent
     * @see slideInHorizontally
     * @see slideInVertically
     */
    public fun slideIntoContainer(
        towards: SlideDirection,
        animationSpec: FiniteAnimationSpec<IntOffset> =
            spring(visibilityThreshold = IntOffset.VisibilityThreshold),
        initialOffset: (offsetForFullSlide: Int) -> Int = { it },
    ): EnterTransition

    /**
     * This defines a horizontal/vertical exit transition to completely slide out of the
     * [AnimatedContent] container. The offset amount is dynamically calculated based on the current
     * size of the [AnimatedContent] and the new target size. This offset gets passed to
     * [targetOffset] lambda. By default, [targetOffset] uses this offset as is, but it can be
     * customized to slide a distance based on the offset. [slideOutOfContainer] is a convenient
     * alternative to [slideOutHorizontally] and [slideOutVertically] when the incoming and outgoing
     * content differ in size. Otherwise, it would be equivalent to [slideOutHorizontally] and
     * [slideOutVertically] with an offset of the full width/height.
     *
     * [towards] specifies the slide direction. Content can be slided out of the container towards
     * [SlideDirection.Left], [SlideDirection.Right], [SlideDirection.Up] and [SlideDirection.Down].
     *
     * [animationSpec] defines the animation that will be used to animate the slide-out.
     *
     * @sample androidx.compose.animation.samples.SlideIntoContainerSample
     * @see AnimatedContent
     * @see slideOutHorizontally
     * @see slideOutVertically
     */
    public fun slideOutOfContainer(
        towards: SlideDirection,
        animationSpec: FiniteAnimationSpec<IntOffset> =
            spring(visibilityThreshold = IntOffset.VisibilityThreshold),

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 421–455)

        targetOffset: (offsetForFullSlide: Int) -> Int = { it },
    ): ExitTransition

    /**
     * [KeepUntilTransitionsFinished] defers the disposal of the exiting content till both enter and
     * exit transitions have finished. It can be combined with other [ExitTransition]s using
     * [+][ExitTransition.plus].
     *
     * **Important**: [KeepUntilTransitionsFinished] works the best when the
     * [zIndex][ContentTransform.targetContentZIndex] for the incoming and outgoing content are
     * specified. Otherwise, if the content gets interrupted from entering and switching to exiting
     * using [KeepUntilTransitionsFinished], the holding pattern may render exiting content on top
     * of the entering content, unless the z-order is specified.
     *
     * @sample androidx.compose.animation.samples.SlideIntoContainerSample
     */
    @Suppress("EXTENSION_SHADOWED_BY_MEMBER")
    public val ExitTransition.Companion.KeepUntilTransitionsFinished: ExitTransition
        get() = KeepUntilTransitionsFinished

    /** This returns the [Alignment] specified on [AnimatedContent]. */
    public val contentAlignment: Alignment
}

internal class PendingAnimatedContentTransitionScope<S>(
    delegate: AnimatedContentTransitionScope<S>,
    val overrideInitialState: S,
    val overrideTargetState: S,
) : AnimatedContentTransitionScope<S> by delegate {
    override val initialState: S
        get() = overrideInitialState

    override val targetState: S
        get() = overrideTargetState
}

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 456–490)


internal class AnimatedContentTransitionScopeImpl<S>
internal constructor(
    internal val transition: Transition<S>,
    override var contentAlignment: Alignment,
    internal var layoutDirection: LayoutDirection,
) : AnimatedContentTransitionScope<S> {
    /** Initial state of a Transition Segment. This is the state that transition starts from. */
    override val initialState: S
        @Suppress("UnknownNullness") get() = transition.segment.initialState

    /** Target state of a Transition Segment. This is the state that transition will end on. */
    override val targetState: S
        @Suppress("UnknownNullness") get() = transition.segment.targetState

    /**
     * Customizes the [SizeTransform] of a given [ContentTransform]. For example:
     *
     * @sample androidx.compose.animation.samples.AnimatedContentTransitionSpecSample
     */
    override infix fun ContentTransform.using(sizeTransform: SizeTransform?) =
        this.apply { this.sizeTransform = sizeTransform }

    /**
     * This defines a horizontal/vertical slide-in that is specific to [AnimatedContent] from the
     * edge of the container. The offset amount is dynamically calculated based on the current size
     * of the [AnimatedContent] and its content alignment. This offset (may be positive or negative
     * based on the direction of the slide) is then passed to [initialOffset]. By default,
     * [initialOffset] will be using the offset calculated from the system to slide the content in.
     * [slideIntoContainer] is a convenient alternative to [slideInHorizontally] and
     * [slideInVertically] when the incoming and outgoing content differ in size. Otherwise, it
     * would be equivalent to [slideInHorizontally] and [slideInVertically] with an offset of the
     * full width/height.
     *
     * [towards] specifies the slide direction. Content can be slided into the container towards

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 491–525)

     * [AnimatedContentTransitionScope.SlideDirection.Left],
     * [AnimatedContentTransitionScope.SlideDirection.Right],
     * [AnimatedContentTransitionScope.SlideDirection.Up] and
     * [AnimatedContentTransitionScope.SlideDirection.Down].
     *
     * [animationSpec] defines the animation that will be used to animate the slide-in.
     *
     * @sample androidx.compose.animation.samples.SlideIntoContainerSample
     * @see AnimatedContent
     * @see slideInHorizontally
     * @see slideInVertically
     */
    override fun slideIntoContainer(
        towards: AnimatedContentTransitionScope.SlideDirection,
        animationSpec: FiniteAnimationSpec<IntOffset>,
        initialOffset: (offsetForFullSlide: Int) -> Int,
    ): EnterTransition =
        when {
            towards.isLeft ->
                slideInHorizontally(animationSpec) {
                    initialOffset.invoke(
                        currentSize.width - calculateOffset(IntSize(it, it), currentSize).x
                    )
                }
            towards.isRight ->
                slideInHorizontally(animationSpec) {
                    initialOffset.invoke(-calculateOffset(IntSize(it, it), currentSize).x - it)
                }
            towards == Up ->
                slideInVertically(animationSpec) {
                    initialOffset.invoke(
                        currentSize.height - calculateOffset(IntSize(it, it), currentSize).y
                    )
                }
            towards == Down ->

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 526–560)

                slideInVertically(animationSpec) {
                    initialOffset.invoke(-calculateOffset(IntSize(it, it), currentSize).y - it)
                }
            else -> EnterTransition.None
        }

    private val AnimatedContentTransitionScope.SlideDirection.isLeft: Boolean
        get() {
            return this == Left ||
                this == Start && layoutDirection == LayoutDirection.Ltr ||
                this == End && layoutDirection == LayoutDirection.Rtl
        }

    private val AnimatedContentTransitionScope.SlideDirection.isRight: Boolean
        get() {
            return this == Right ||
                this == Start && layoutDirection == LayoutDirection.Rtl ||
                this == End && layoutDirection == LayoutDirection.Ltr
        }

    private fun calculateOffset(fullSize: IntSize, currentSize: IntSize): IntOffset {
        return contentAlignment.align(fullSize, currentSize, LayoutDirection.Ltr)
    }

    /**
     * This defines a horizontal/vertical exit transition to completely slide out of the
     * [AnimatedContent] container. The offset amount is dynamically calculated based on the current
     * size of the [AnimatedContent] and the new target size. This offset gets passed to
     * [targetOffset] lambda. By default, [targetOffset] uses this offset as is, but it can be
     * customized to slide a distance based on the offset. [slideOutOfContainer] is a convenient
     * alternative to [slideOutHorizontally] and [slideOutVertically] when the incoming and outgoing
     * content differ in size. Otherwise, it would be equivalent to [slideOutHorizontally] and
     * [slideOutVertically] with an offset of the full width/height.
     *
     * [towards] specifies the slide direction. Content can be slided out of the container towards

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 561–595)

     * [AnimatedContentTransitionScope.SlideDirection.Left],
     * [AnimatedContentTransitionScope.SlideDirection.Right],
     * [AnimatedContentTransitionScope.SlideDirection.Up] and
     * [AnimatedContentTransitionScope.SlideDirection.Down].
     *
     * [animationSpec] defines the animation that will be used to animate the slide-out.
     *
     * @sample androidx.compose.animation.samples.SlideIntoContainerSample
     * @see AnimatedContent
     * @see slideOutHorizontally
     * @see slideOutVertically
     */
    override fun slideOutOfContainer(
        towards: AnimatedContentTransitionScope.SlideDirection,
        animationSpec: FiniteAnimationSpec<IntOffset>,
        targetOffset: (offsetForFullSlide: Int) -> Int,
    ): ExitTransition {
        return when {
            // Note: targetSize could be 0 for empty composables
            towards.isLeft ->
                slideOutHorizontally(animationSpec) {
                    val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                    targetOffset.invoke(-calculateOffset(IntSize(it, it), targetSize).x - it)
                }
            towards.isRight ->
                slideOutHorizontally(animationSpec) {
                    val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                    targetOffset.invoke(
                        -calculateOffset(IntSize(it, it), targetSize).x + targetSize.width
                    )
                }
            towards == Up ->
                slideOutVertically(animationSpec) {
                    val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                    targetOffset.invoke(-calculateOffset(IntSize(it, it), targetSize).y - it)

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 596–630)

                }
            towards == Down ->
                slideOutVertically(animationSpec) {
                    val targetSize = targetSizeMap[transition.targetState]?.value ?: IntSize.Zero
                    targetOffset.invoke(
                        -calculateOffset(IntSize(it, it), targetSize).y + targetSize.height
                    )
                }
            else -> ExitTransition.None
        }
    }

    internal var measuredSize: IntSize by mutableStateOf(IntSize.Zero)
    internal val targetSizeMap = mutableScatterMapOf<S, State<IntSize>>()
    internal var animatedSize: State<IntSize>? = null

    // Current size of the container. If there's any size animation, the current size will be
    // read from the animation value, otherwise we'll use the current
    private val currentSize: IntSize
        get() = animatedSize?.value ?: measuredSize

    @Suppress("ComposableModifierFactory", "ModifierFactoryExtensionFunction")
    @Composable
    internal fun createSizeAnimationModifier(contentTransform: ContentTransform): Modifier {
        var shouldAnimateSize by remember(this) { mutableStateOf(false) }
        val sizeTransform = rememberUpdatedState(contentTransform.sizeTransform)
        if (transition.currentState == transition.targetState) {
            shouldAnimateSize = false
        } else {
            // TODO: CurrentSize is only relevant to enter/exit transition, not so much for sizeAnim
            if (sizeTransform.value != null) {
                shouldAnimateSize = true
            }
        }
        val sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 631–665)

        return if (shouldAnimateSize) {
                sizeAnimation = transition.createDeferredAnimation(IntSize.VectorConverter)
                remember(sizeAnimation) {
                    (if (sizeTransform.value?.clip == false) Modifier else Modifier.clipToBounds())
                }
            } else {
                sizeAnimation = null
                animatedSize = null
                Modifier
            }
            .then(
                // Keep the SizeModifier in the chain and switch between active animating and
                // passive
                // observing based on sizeAnimation's value
                SizeModifierElement(sizeAnimation, sizeTransform, this)
            )
    }

    // This helps track the target measurable without affecting the placement order. Target
    // measurable needs to be measured first but placed last.
    internal class ChildData(isTarget: Boolean) : ParentDataModifier {
        // isTarget is read during measure. It is necessary to make this a MutableState
        // such that when the target changes, measure is triggered
        var isTarget by mutableStateOf(isTarget)
        var isPendingTarget by mutableStateOf(false)

        override fun Density.modifyParentData(parentData: Any?): Any {
            return this@ChildData
        }
    }

    private class SizeModifierElement<S>(
        val sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?,
        val sizeTransform: State<SizeTransform?>,
        val scope: AnimatedContentTransitionScopeImpl<S>,

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 666–700)

    ) : ModifierNodeElement<SizeModifierNode<S>>() {
        override fun create(): SizeModifierNode<S> {
            return SizeModifierNode(sizeAnimation, sizeTransform, scope)
        }

        override fun hashCode(): Int {
            return (31 * scope.hashCode() + sizeAnimation.hashCode()) * 31 +
                sizeTransform.hashCode()
        }

        override fun equals(other: Any?): Boolean {
            return other is SizeModifierElement<*> &&
                other.sizeAnimation == sizeAnimation &&
                other.sizeTransform == sizeTransform
        }

        override fun update(node: SizeModifierNode<S>) {
            node.sizeAnimation = sizeAnimation
            node.sizeTransform = sizeTransform
            node.scope = scope
        }

        override fun InspectorInfo.inspectableProperties() {
            name = "sizeTransform"
            properties["sizeAnimation"] = sizeAnimation
            properties["sizeTransform"] = sizeTransform
            properties["scope"] = scope
        }
    }

    private class SizeModifierNode<S>(
        var sizeAnimation: Transition<S>.DeferredAnimation<IntSize, AnimationVector2D>?,
        var sizeTransform: State<SizeTransform?>,
        var scope: AnimatedContentTransitionScopeImpl<S>,
    ) : LayoutModifierNodeWithPassThroughIntrinsics() {

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 701–735)


        /**
         * Temporary state used to pass data from [measure] to the corresponding placement block in
         * the same frame. These are separated for lookahead and approach passes to avoid state
         * pollution between passes. References are NOT cleared after placement because placement
         * can be invoked multiple times without a new measure pass. Should not be used elsewhere.
         */
        private var lookaheadPlaceable: Placeable? = null
        private var approachPlaceable: Placeable? = null
        private var lookaheadSize: IntSize = IntSize.Zero
        private var approachSize: IntSize = IntSize.Zero

        private val lookaheadPlacementBlock: Placeable.PlacementScope.() -> Unit = {
            val placeable = lookaheadPlaceable!!
            val measuredSize = lookaheadSize
            val offset =
                scope.contentAlignment.align(
                    IntSize(placeable.width, placeable.height),
                    measuredSize,
                    LayoutDirection.Ltr,
                )
            placeable.place(offset)
        }

        private val approachPlacementBlock: Placeable.PlacementScope.() -> Unit = {
            val placeable = approachPlaceable!!
            val measuredSize = approachSize
            val offset =
                scope.contentAlignment.align(
                    IntSize(placeable.width, placeable.height),
                    measuredSize,
                    LayoutDirection.Ltr,
                )
            placeable.place(offset)
        }

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 71–105)

import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastForEachIndexed
import androidx.compose.ui.util.fastMaxOfOrNull

internal const val AnimatedContentDebug = false

private inline fun animatedContentDebug(message: () -> String) {
    if (AnimatedContentDebug) {
        println("AnimatedContent, ${message()}")
    }
}

/**
 * [AnimatedContent] is a container that automatically animates its content when [targetState]
 * changes. Its [content] for different target states is defined in a mapping between a target state
 * and a composable function.
 *
 * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
 * account in deciding what composable function to return as the content for that state. This is
 * critical to ensure a successful lookup of all the incoming and outgoing content during content
 * transform.
 *
 * When [targetState] changes, content for both new and previous targetState will be looked up
 * through the [content] lambda. They will go through a [ContentTransform] so that the new target
 * content can be animated in while the initial content animates out. Meanwhile the container will
 * animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
 * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
 *
 * If [targetState] is expected to mutate frequently and not all mutations should be treated as
 * target state change, consider defining a mapping between [targetState] and a key in [contentKey].

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 736–770)

        // This is used to track the on-going size change so that when the target state changes,
        // we always start from the last seen size to the new target size to ensure continuity.
        private var lastSize: IntSize = UnspecifiedSize

        private fun lastContinuousSizeOrDefault(default: IntSize) =
            if (lastSize == UnspecifiedSize) default else lastSize

        override fun onReset() {
            super.onReset()
            lastSize = UnspecifiedSize
        }

        override fun MeasureScope.measure(
            measurable: Measurable,
            constraints: Constraints,
        ): MeasureResult {
            val placeable = measurable.measure(constraints)
            val measuredSize: IntSize
            if (isLookingAhead) {
                measuredSize = IntSize(placeable.width, placeable.height)
            } else if (sizeAnimation == null) {
                // Observing mode
                measuredSize = IntSize(placeable.width, placeable.height)
                lastSize = IntSize(placeable.width, placeable.height)
            } else {
                val currentSize = IntSize(placeable.width, placeable.height)
                val size =
                    sizeAnimation!!.animate(
                        transitionSpec = {
                            val initial =
                                if (initialState == scope.initialState) {
                                    lastContinuousSizeOrDefault(currentSize)
                                } else {
                                    scope.targetSizeMap[initialState]?.value ?: IntSize.Zero
                                }

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 771–805)

                            val target = scope.targetSizeMap[targetState]?.value ?: IntSize.Zero
                            sizeTransform.value?.createAnimationSpec(initial, target)
                                ?: AnimatedContentDefaults.SizeAnimationSpec
                        }
                    ) {
                        // Animate from the approach size to the lookahead size.
                        if (it == scope.initialState) {
                            lastContinuousSizeOrDefault(currentSize)
                        } else {
                            scope.targetSizeMap[it]?.value ?: IntSize.Zero
                        }
                    }
                scope.animatedSize = size
                measuredSize = size.value
                lastSize = size.value
            }
            if (isLookingAhead) {
                lookaheadPlaceable = placeable
                lookaheadSize = measuredSize
                return layout(
                    measuredSize.width,
                    measuredSize.height,
                    placementBlock = lookaheadPlacementBlock,
                )
            } else {
                approachPlaceable = placeable
                approachSize = measuredSize
                return layout(
                    measuredSize.width,
                    measuredSize.height,
                    placementBlock = approachPlacementBlock,
                )
            }
        }
    }

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-771-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 806–840)

}

private val UnspecifiedSize: IntSize
    get() = IntSize(Int.MIN_VALUE, Int.MIN_VALUE)

/**
 * The maximum number of interrupted states to keep in the composition tree at once.
 *
 * This limit is only applied to [DeferredTransition] based [AnimatedContent]. It ensures that the
 * most recent states in a transition chain (e.g. A -> B -> C) stay visible and finish their exit
 * animations gracefully, while preventing an infinite "pile-up" of scenes in the composition tree
 * during rapid interruptions.
 */
private const val MaxInterruptionRetention = 3

/**
 * An object that allows manual manipulation of both entering and exiting content during the
 * deferred phase (initiated by [DeferredTransitionState.defer]) of an [AnimatedContent] transition.
 *
 * Use [initialContentTransform] to define transformations for the exiting (initial) content,
 * [targetContentTransform] for the entering (target) content, and [sharedElementProgress] to
 * interpolate detached shared elements between their initial and target bounds.
 *
 * @param initialTransform The [MutableTransform] applied to the exiting (initial) content.
 * @param targetTransform The [MutableTransform] applied to the entering (target) content.
 * @see MutableTransform
 */
public class MutableContentTransform(
    internal val initialTransform: MutableTransform,
    internal val targetTransform: MutableTransform,
) {
    @PublishedApi
    internal constructor(
        initialVeilMatchParentSize: Boolean,
        targetVeilMatchParentSize: Boolean,

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-806-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 841–875)

        initialOffsetVelocityProvider: (() -> Offset)?,
        targetOffsetVelocityProvider: (() -> Offset)?,
    ) : this(
        initialTransform =
            MutableTransform(initialVeilMatchParentSize, initialOffsetVelocityProvider),
        targetTransform = MutableTransform(targetVeilMatchParentSize, targetOffsetVelocityProvider),
    )

    /**
     * Define the manual transformation to apply to the exiting content during the deferred phase.
     *
     * @param block A lambda that applies transformations to the provided [TransformScope].
     */
    public fun initialContentTransform(block: TransformScope.(fullSize: IntSize) -> Unit) {
        initialTransform.update(block)
    }

    /**
     * Define the manual transformation to apply to the entering content during the deferred phase.
     *
     * @param block A lambda that applies transformations to the provided [TransformScope].
     */
    public fun targetContentTransform(block: TransformScope.(fullSize: IntSize) -> Unit) {
        targetTransform.update(block)
    }

    /**
     * Configures the interpolation progress for shared elements configured with
     * [SharedTransitionScope.DeferredTransitionBehavior.SeekToTarget] via
     * [SharedTransitionScope.SharedContentConfig.deferredTransitionBehavior].
     *
     * During the deferred phase, these shared elements interpolate their bounds between their
     * initial (`0f`) and target (`1f`) bounds based on [progress] (clamped to `0f..1f`), rather
     * than remaining at their initial bounds (`0f`).
     *

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-841-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 876–910)

     * @param progress lambda returning the current interpolation progress between `0f` and `1f`
     */
    public fun sharedElementProgress(progress: () -> Float) {
        initialTransform.sharedElementProgress(progress)
        targetTransform.sharedElementProgress(progress)
    }
}

/**
 * Creates a [MutableContentTransform] and applies the provided configuration [block].
 *
 * @param initialVeilMatchParentSize Whether the initial content's veil should match the parent
 *   size.
 * @param targetVeilMatchParentSize Whether the target content's veil should match the parent size.
 * @param initialOffsetVelocityProvider The velocity of the offset change for the exiting content in
 *   pixels/sec. If `null`, the system will automatically calculate the velocity based on
 *   [TransformScope.offset] changes during the deferred phase.
 * @param targetOffsetVelocityProvider The velocity of the offset change for the entering content in
 *   pixels/sec. If `null`, the system will automatically calculate the velocity based on
 *   [TransformScope.offset] changes during the deferred phase.
 * @param block A configuration block to set up the transformations for initial and target content.
 */
public inline fun MutableContentTransform(
    initialVeilMatchParentSize: Boolean = false,
    targetVeilMatchParentSize: Boolean = false,
    noinline initialOffsetVelocityProvider: (() -> Offset)? = null,
    noinline targetOffsetVelocityProvider: (() -> Offset)? = null,
    block: MutableContentTransform.() -> Unit = {},
): MutableContentTransform =
    MutableContentTransform(
            initialVeilMatchParentSize = initialVeilMatchParentSize,
            targetVeilMatchParentSize = targetVeilMatchParentSize,
            initialOffsetVelocityProvider = initialOffsetVelocityProvider,
            targetOffsetVelocityProvider = targetOffsetVelocityProvider,
        )

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-876-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 911–945)

        .apply(block)

/**
 * Receiver scope for content lambda for AnimatedContent. In this scope,
 * [transition][AnimatedVisibilityScope.transition] can be used to observe the state of the
 * transition, or to add more enter/exit transition for the content.
 */
public sealed interface AnimatedContentScope : AnimatedVisibilityScope

private class AnimatedContentScopeImpl
internal constructor(animatedVisibilityScope: AnimatedVisibilityScope) :
    AnimatedContentScope, AnimatedVisibilityScope by animatedVisibilityScope

/**
 * [AnimatedContent] is a container that automatically animates its content when
 * [Transition.targetState] changes. Its [content] for different target states is defined in a
 * mapping between a target state and a composable function.
 *
 * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
 * account in deciding what composable function to return as the content for that state. This is
 * critical to ensure a successful lookup of all the incoming and outgoing content during content
 * transform.
 *
 * When [Transition.targetState] changes, content for both new and previous targetState will be
 * looked up through the [content] lambda. They will go through a [ContentTransform] so that the new
 * target content can be animated in while the initial content animates out. Meanwhile the container
 * will animate its size as needed to accommodate the new content, unless [SizeTransform] is set to
 * `null`. Once the [ContentTransform] is finished, the outgoing content will be disposed.
 *
 * If [Transition.targetState] is expected to mutate frequently and not all mutations should be
 * treated as target state change, consider defining a mapping between [Transition.targetState] and
 * a key in [contentKey]. As a result, transitions will be triggered when the resulting key changes.
 * In other words, there will be no animation when switching between [Transition.targetState]s that
 * share the same key. By default, the key will be the same as the targetState object.
 *

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-911-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 946–974)

 * By default, the [ContentTransform] will be a delayed [fadeIn] of the target content and a delayed
 * [scaleIn] [togetherWith] a [fadeOut] of the initial content, using a [SizeTransform] to animate
 * any size change of the content. This behavior can be customized using [transitionSpec]. If
 * desired, different [ContentTransform]s can be defined for different pairs of initial content and
 * target content.
 *
 * [AnimatedContent] displays only the content for [Transition.targetState] when not animating.
 * However, during the transient content transform, there will be more than one sets of content
 * present in the [AnimatedContent] container. It may be sometimes desired to define the positional
 * relationship among different content and the style of overlap. This can be achieved by defining
 * [contentAlignment] and [zOrder][ContentTransform.targetContentZIndex]. By default,
 * [contentAlignment] aligns all content to [Alignment.TopStart], and the `zIndex` for all the
 * content is 0f. __Note__: The target content will always be placed last, therefore it will be on
 * top of all the other content unless zIndex is specified.
 *
 * Different content in [AnimatedContent] will have access to their own [AnimatedContentScope]. This
 * allows content to define more local enter/exit transitions via
 * [AnimatedContentScope.animateEnterExit] and [AnimatedContentScope.transition]. These custom
 * enter/exit animations will be triggered as the content enters/leaves the container.
 *
 * @param modifier is applied to the Layout created by [AnimatedContent], which houses all the
 *   animating contents.
 * @param transitionSpec specifies the enter/exit animations, as well as size animation (if
 *   applicable). By default, a [fadeIn] and [scaleIn] will be used for the entering content, and
 *   [fadeOut] for the exiting content. The [ContentTransform] returned by [transitionSpec] can be
 *   created using [togetherWith] with [EnterTransition] and [ExitTransition].
 * @param contentAlignment specifies the alignment of the animated content. By default, it'll be
 *   aligned to the top start of the container.
 * @param contentKey A key to identify the content.

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-946-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)

## androidx.compose.animation AnimatedContent.kt source (lines 975–1009)

 * @param content The composable function to render the content for a given state.
 * @sample androidx.compose.animation.samples.TransitionExtensionAnimatedContentSample
 * @see ContentTransform
 * @see AnimatedContentScope
 */
@Composable
public fun <S> Transition<S>.AnimatedContent(
    modifier: Modifier = Modifier,
    transitionSpec: AnimatedContentTransitionScope<S>.() -> ContentTransform = {
        AnimatedContentDefaults.ContentTransform
    },
    contentAlignment: Alignment = Alignment.TopStart,
    contentKey: (targetState: S) -> Any? = { it },
    content: @Composable() AnimatedContentScope.(targetState: S) -> Unit,
) {
    AnimatedContentImpl(
        modifier = modifier,
        transitionSpec = transitionSpec,
        contentAlignment = contentAlignment,
        contentKey = contentKey,
        mutableTransformSpec = { null },
        content = content,
    )
}

/**
 * [AnimatedContent] is a container that automatically animates its content when
 * [Transition.targetState] changes. Its [content] for different target states is defined in a
 * mapping between a target state and a composable function.
 *
 * **IMPORTANT**: The targetState parameter for the [content] lambda should *always* be taken into
 * account in deciding what composable function to return as the content for that state. This is
 * critical to ensure a successful lookup of all the incoming and outgoing content during content
 * transform.
 *

Sources: [live-androidx-animation-animation-animation-animatedcontent-lines-975-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/animation/animation/src/commonMain/kotlin/androidx/compose/animation/AnimatedContent.kt)
