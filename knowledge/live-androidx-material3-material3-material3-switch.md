---
type: reference
title: androidx.compose.material3 Switch.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-switch-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 1
    endLine: 35
    sha256: c9759c4efa9fa4a8bf3094257d6694ea809272140f46943f545416bcf13c5bd2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2022 The Android Open Source Project
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

      package androidx.compose.material3

      import androidx.compose.animation.core.Animatable
      import androidx.compose.animation.core.AnimationVector1D
      import androidx.compose.animation.core.FiniteAnimationSpec
      import androidx.compose.foundation.MutatePriority
      import androidx.compose.foundation.background
      import androidx.compose.foundation.border
      import androidx.compose.foundation.gestures.AnchoredDraggableDefaults
      import androidx.compose.foundation.gestures.AnchoredDraggableState
      import androidx.compose.foundation.gestures.DragScope
      import androidx.compose.foundation.gestures.DraggableAnchors
      import androidx.compose.foundation.gestures.DraggableState
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.ScrollScope
      import androidx.compose.foundation.gestures.animateTo
      import androidx.compose.foundation.gestures.draggable
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.DragInteraction
  - id: live-androidx-material3-material3-material3-switch-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 106
    endLine: 140
    sha256: 0b123facad2656423b281ebe8ab0e562d46f52f196508cb974917cbec66ddc5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   different states. See [SwitchDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this switch. You can use this to change the switch's appearance or
       *   preview the switch in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       */
      @Composable
      @Suppress("ComposableLambdaParameterNaming", "ComposableLambdaParameterPosition")
      public fun Switch(
          checked: Boolean,
          onCheckedChange: ((Boolean) -> Unit)?,
          modifier: Modifier = Modifier,
          thumbContent: (@Composable () -> Unit)? = null,
          enabled: Boolean = true,
          colors: SwitchColors = SwitchDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          SwitchImpl(
              modifier = modifier,
              onCheckedChange = onCheckedChange,
              checked = checked,
              enabled = enabled,
              thumbContent = thumbContent,
              thumbShape = SwitchTokens.HandleShape.value,
              trackShape = SwitchTokens.TrackShape.value,
              thumbColor = colors.thumbColor(enabled, checked),
              iconColor = colors.iconColor(enabled, checked),
              trackColor = colors.trackColor(enabled, checked),
              borderColor = colors.borderColor(enabled, checked),
              interactionSource = interactionSource,
          )
      }

      @Composable
      @Suppress("ComposableLambdaParameterNaming", "ComposableLambdaParameterPosition")
  - id: live-androidx-material3-material3-material3-switch-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 141
    endLine: 175
    sha256: 907e8931c07c5189ef99d1493c4bfd085f6f292fa0d4a18fe261ee61b0ca1e42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      private fun SwitchImpl(
          modifier: Modifier,
          onCheckedChange: ((Boolean) -> Unit)?,
          checked: Boolean,
          enabled: Boolean,
          thumbContent: (@Composable () -> Unit)?,
          thumbShape: Shape,
          trackShape: Shape,
          thumbColor: Color,
          iconColor: Color,
          trackColor: Color,
          borderColor: Color,
          interactionSource: MutableInteractionSource?,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

          // TODO Load the motionScheme tokens from the component tokens file
          val animationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
          val thumbTravelPx = with(LocalDensity.current) { (SwitchWidth - SwitchHeight).toPx() }
          var forceAnimationCheck by remember { mutableStateOf(false) }
          val anchoredDraggableState =
              remember(thumbTravelPx) {
                  AnchoredDraggableState(
                      initialValue = checked,
                      anchors =
                          DraggableAnchors {
                              false at 0f
                              true at thumbTravelPx
                          },
                  )
              }
          val currentOnCheckedChange by rememberUpdatedState(onCheckedChange)
          val currentChecked by rememberUpdatedState(checked)
          LaunchedEffect(anchoredDraggableState) {
  - id: live-androidx-material3-material3-material3-switch-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 176
    endLine: 210
    sha256: a15f50d0aa411b465820f91d3438ddb13d59573bf2542ec92ac425beda36acbb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              snapshotFlow { anchoredDraggableState.settledValue }
                  .collectLatest { newValue ->
                      if (currentChecked != newValue) {
                          currentOnCheckedChange?.invoke(newValue)
                          forceAnimationCheck = !forceAnimationCheck
                      }
                  }
          }
          LaunchedEffect(checked, forceAnimationCheck) {
              val targetOffset = anchoredDraggableState.anchors.positionOf(checked)
              if (
                  checked != anchoredDraggableState.settledValue ||
                      (!targetOffset.isNaN() && anchoredDraggableState.offset != targetOffset)
              ) {
                  anchoredDraggableState.animateTo(checked, animationSpec)
              }
          }

          val toggleableModifier =
              if (onCheckedChange != null) {
                  Modifier.minimumInteractiveComponentSize()
                      .toggleable(
                          value = checked,
                          onValueChange = onCheckedChange,
                          enabled = enabled,
                          role = Role.Switch,
                          interactionSource = interactionSource,
                          indication = null,
                      )
              } else {
                  Modifier
              }

          val dragModifier =
              if (onCheckedChange != null) {
  - id: live-androidx-material3-material3-material3-switch-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 211
    endLine: 245
    sha256: 04a85ab688f73a0f6bc3722829ad57e5cbfc65fe70e1be9cc99bf053c2e0fee8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  val flingBehavior =
                      AnchoredDraggableDefaults.flingBehavior(
                          state = anchoredDraggableState,
                          animationSpec = animationSpec,
                      )
                  val draggableState =
                      remember(anchoredDraggableState) {
                          object : DraggableState {
                              override fun dispatchRawDelta(delta: Float) {
                                  anchoredDraggableState.dispatchRawDelta(delta)
                              }

                              override suspend fun drag(
                                  dragPriority: MutatePriority,
                                  block: suspend DragScope.() -> Unit,
                              ) {
                                  anchoredDraggableState.anchoredDrag(dragPriority) {
                                      val dragScope =
                                          object : DragScope {
                                              override fun dragBy(pixels: Float) {
                                                  anchoredDraggableState.dispatchRawDelta(pixels)
                                              }
                                          }
                                      dragScope.block()
                                  }
                              }
                          }
                      }
                  val onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit =
                      remember(anchoredDraggableState, flingBehavior) {
                          { velocity ->
                              anchoredDraggableState.anchoredDrag {
                                  val scrollScope =
                                      object : ScrollScope {
                                          override fun scrollBy(pixels: Float): Float {
  - id: live-androidx-material3-material3-material3-switch-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 246
    endLine: 280
    sha256: ae9af3a33da0f36358fdaffd0ca016e07e7d9eacd6f8cb30a006fe4a3d4348a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              return anchoredDraggableState.dispatchRawDelta(pixels)
                                          }
                                      }
                                  with(flingBehavior) { scrollScope.performFling(velocity) }
                              }
                          }
                      }
                  Modifier.draggable(
                      state = draggableState,
                      orientation = Orientation.Horizontal,
                      enabled = enabled,
                      interactionSource = interactionSource,
                      startDragImmediately = false,
                      reverseDirection = LocalLayoutDirection.current == LayoutDirection.Rtl,
                      onDragStopped = onDragStopped,
                  )
              } else {
                  Modifier
              }

          val useInsetRing =
              LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
          val focusRingModifier =
              if (useInsetRing) {
                  Modifier.indication(
                      interactionSource = interactionSource,
                      indication =
                          ripple(
                              focusRingShape = trackShape,
                              enablePressIndication = false,
                              enableFocusIndication = true,
                              enableDragIndication = false,
                              enableHoverIndication = false,
                          ),
                  )
  - id: live-androidx-material3-material3-material3-switch-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 281
    endLine: 315
    sha256: 0e01eda9762138aea488e5243d738a713c205e5a74b4be2c57d19289586dc1e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  Modifier
              }

          Box(
              modifier
                  .then(toggleableModifier)
                  .then(dragModifier)
                  .wrapContentSize(Alignment.Center)
                  .requiredSize(SwitchWidth, SwitchHeight)
                  .border(TrackOutlineWidth, borderColor, trackShape)
                  .background(trackColor, trackShape)
                  .then(focusRingModifier)
          ) {
              Box(
                  modifier =
                      Modifier.align(Alignment.CenterStart)
                          .then(
                              ThumbElement(
                                  interactionSource = interactionSource,
                                  checked = checked,
                                  anchoredDraggableState = anchoredDraggableState,
                                  animationSpec = animationSpec,
                              )
                          )
                          .indication(
                              interactionSource = interactionSource,
                              indication =
                                  ripple(
                                      bounded = false,
                                      radius = SwitchTokens.StateLayerSize / 2,
                                      enableFocusIndication = !useInsetRing,
                                  ),
                          )
                          .background(thumbColor, thumbShape),
  - id: live-androidx-material3-material3-material3-switch-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 316
    endLine: 350
    sha256: a440750c7960e06128b9e8cce90703e5d26128f7d239e6ff8195793beb2253aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  contentAlignment = Alignment.Center,
              ) {
                  if (thumbContent != null) {
                      CompositionLocalProvider(
                          LocalContentColor provides iconColor,
                          content = thumbContent,
                      )
                  }
              }
          }
      }

      private data class ThumbElement(
          val interactionSource: InteractionSource,
          val checked: Boolean,
          val anchoredDraggableState: AnchoredDraggableState<Boolean>,
          val animationSpec: FiniteAnimationSpec<Float>,
      ) : ModifierNodeElement<ThumbNode>() {
          override fun create() =
              ThumbNode(interactionSource, checked, anchoredDraggableState, animationSpec)

          override fun update(node: ThumbNode) {
              val interactionSourceChanged = node.interactionSource != interactionSource
              node.interactionSource = interactionSource
              if (interactionSourceChanged) {
                  node.restartInteractionCollection()
              }
              if (node.checked != checked || node.anchoredDraggableState != anchoredDraggableState) {
                  node.invalidateMeasurement()
              }
              node.checked = checked
              node.anchoredDraggableState = anchoredDraggableState
              node.animationSpec = animationSpec
              node.update()
          }
  - id: live-androidx-material3-material3-material3-switch-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 351
    endLine: 385
    sha256: b82b0f33cc78cd058b38b9c72befce9c2493d33738acdcf5bca8c3a1f0879387
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
      
          override fun InspectorInfo.inspectableProperties() {
              name = "switchThumb"
              properties["interactionSource"] = interactionSource
              properties["checked"] = checked
              properties["animationSpec"] = animationSpec
          }
      }

      private class ThumbNode(
          var interactionSource: InteractionSource,
          var checked: Boolean,
          var anchoredDraggableState: AnchoredDraggableState<Boolean>,
          var animationSpec: FiniteAnimationSpec<Float>,
      ) : Modifier.Node(), LayoutModifierNode {

          override val shouldAutoInvalidate: Boolean
              get() = false

          private var isPressed = false
          private var isDragged = false
          private var interactionCollectionJob: Job? = null
          private var sizeAnim: Animatable<Float, AnimationVector1D>? = null
          private var initialSize: Float = Float.NaN

          override fun onAttach() {
              restartInteractionCollection()
          }

          override fun onDetach() {
              super.onDetach()
              isPressed = false
              isDragged = false
          }
  - id: live-androidx-material3-material3-material3-switch-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 36
    endLine: 70
    sha256: 7d9a32ec19fef68725b796c2f172f3e745f8cd1e99a31f6ccd4d76cddf9e50a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.requiredSize
      import androidx.compose.foundation.layout.wrapContentSize
      import androidx.compose.foundation.selection.toggleable
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.material3.tokens.SwitchTokens
      import androidx.compose.material3.tokens.SwitchTokens.TrackOutlineWidth
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.LaunchedEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.runtime.setValue
      import androidx.compose.runtime.snapshotFlow
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.compositeOver
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.node.LayoutModifierNode
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.node.invalidateMeasurement
      import androidx.compose.ui.platform.InspectorInfo
  - id: live-androidx-material3-material3-material3-switch-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 386
    endLine: 420
    sha256: 30daff01662350f51c4087d5c354c27326ea7bf3a2522151f7a3c87a923e0649
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          fun restartInteractionCollection() {
              interactionCollectionJob?.cancel()
              isPressed = false
              isDragged = false
              if (!isAttached) return
              interactionCollectionJob = coroutineScope.launch {
                  var pressCount = 0
                  var dragCount = 0
                  interactionSource.interactions.collect { interaction ->
                      when (interaction) {
                          is PressInteraction.Press -> pressCount++
                          is PressInteraction.Release -> pressCount--
                          is PressInteraction.Cancel -> pressCount--
                          is DragInteraction.Start -> dragCount++
                          is DragInteraction.Stop -> dragCount--
                          is DragInteraction.Cancel -> dragCount--
                      }
                      val pressed = pressCount > 0
                      val dragged = dragCount > 0
                      if (isPressed != pressed || isDragged != dragged) {
                          isPressed = pressed
                          isDragged = dragged
                          invalidateMeasurement()
                      }
                  }
              }
          }

          override fun onReset() {
              super.onReset()
              sizeAnim = null
              initialSize = Float.NaN
              isPressed = false
              isDragged = false
          }
  - id: live-androidx-material3-material3-material3-switch-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 421
    endLine: 455
    sha256: b46bb1de2c7fc25fa57803ac6bdcdb02114c8eacd3a5b8b1de2e609cdb9c92f8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun MeasureScope.measure(
              measurable: Measurable,
              constraints: Constraints,
          ): MeasureResult {
              val hasContent =
                  measurable.maxIntrinsicHeight(constraints.maxWidth) != 0 &&
                      measurable.maxIntrinsicWidth(constraints.maxHeight) != 0
              val size =
                  when {
                      isPressed || isDragged -> SwitchTokens.PressedHandleWidth
                      hasContent || checked -> ThumbDiameter
                      else -> UncheckedThumbDiameter
                  }.toPx()

              if (sizeAnim == null && !initialSize.isNaN()) {
                  sizeAnim = Animatable(initialSize)
              }
              val actualSize = (sizeAnim?.value ?: size).toInt().coerceAtLeast(0)
              val placeable = measurable.measure(Constraints.fixed(actualSize, actualSize))

              if (sizeAnim?.targetValue != size) {
                  coroutineScope.launch { sizeAnim?.animateTo(size, animationSpec) }
              }

              if (initialSize.isNaN()) {
                  initialSize = size
              }

              val minCenterX = (SwitchHeight / 2f).toPx()
              val fallbackTravel = (SwitchWidth - SwitchHeight).toPx()

              return layout(actualSize, actualSize) {
                  val dragOffset =
                      if (!anchoredDraggableState.offset.isNaN()) {
  - id: live-androidx-material3-material3-material3-switch-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 456
    endLine: 490
    sha256: be93fa8dfcc336380f2bb89e98d8f70135f3c0a78d8cc25265c1bcdc2133b7e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          anchoredDraggableState.offset
                      } else {
                          if (checked) fallbackTravel else 0f
                      }
                  val currentThumbSize = sizeAnim?.value ?: size
                  val leftOffset = minCenterX + dragOffset - currentThumbSize / 2f
                  placeable.placeRelative(leftOffset.toInt(), 0)
              }
          }

          fun update() {
              if (sizeAnim == null && !initialSize.isNaN()) {
                  sizeAnim = Animatable(initialSize)
              }
          }
      }

      /** Contains the default values used by [Switch] */
      public object SwitchDefaults {
          /**
           * Creates a [SwitchColors] that represents the different colors used in a [Switch] in different
           * states.
           */
          @Composable public fun colors(): SwitchColors = MaterialTheme.colorScheme.defaultSwitchColors

          /**
           * Creates a [SwitchColors] that represents the different colors used in a [Switch] in different
           * states.
           *
           * @param checkedThumbColor the color used for the thumb when enabled and checked
           * @param checkedTrackColor the color used for the track when enabled and checked
           * @param checkedBorderColor the color used for the border when enabled and checked
           * @param checkedIconColor the color used for the icon when enabled and checked
           * @param uncheckedThumbColor the color used for the thumb when enabled and unchecked
           * @param uncheckedTrackColor the color used for the track when enabled and unchecked
  - id: live-androidx-material3-material3-material3-switch-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 491
    endLine: 521
    sha256: 226873f83376d318bc74988125f57c5cd03ae344487ab8262f3e610d3206f71c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param uncheckedBorderColor the color used for the border when enabled and unchecked
           * @param uncheckedIconColor the color used for the icon when enabled and unchecked
           * @param disabledCheckedThumbColor the color used for the thumb when disabled and checked
           * @param disabledCheckedTrackColor the color used for the track when disabled and checked
           * @param disabledCheckedBorderColor the color used for the border when disabled and checked
           * @param disabledCheckedIconColor the color used for the icon when disabled and checked
           * @param disabledUncheckedThumbColor the color used for the thumb when disabled and unchecked
           * @param disabledUncheckedTrackColor the color used for the track when disabled and unchecked
           * @param disabledUncheckedBorderColor the color used for the border when disabled and unchecked
           * @param disabledUncheckedIconColor the color used for the icon when disabled and unchecked
           */
          @Composable
          public fun colors(
              checkedThumbColor: Color = SwitchTokens.SelectedHandleColor.value,
              checkedTrackColor: Color = SwitchTokens.SelectedTrackColor.value,
              checkedBorderColor: Color = Color.Transparent,
              checkedIconColor: Color = SwitchTokens.SelectedIconColor.value,
              uncheckedThumbColor: Color = SwitchTokens.UnselectedHandleColor.value,
              uncheckedTrackColor: Color = SwitchTokens.UnselectedTrackColor.value,
              uncheckedBorderColor: Color = SwitchTokens.UnselectedFocusTrackOutlineColor.value,
              uncheckedIconColor: Color = SwitchTokens.UnselectedIconColor.value,
              disabledCheckedThumbColor: Color =
                  SwitchTokens.DisabledSelectedHandleColor.value
                      .copy(alpha = SwitchTokens.DisabledSelectedHandleOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledCheckedTrackColor: Color =
                  SwitchTokens.DisabledSelectedTrackColor.value
                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledCheckedBorderColor: Color = Color.Transparent,
              disabledCheckedIconColor: Color =
  - id: live-androidx-material3-material3-material3-switch-lines-522-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 522
    endLine: 556
    sha256: 15a3d80a500e13ff3452e9104db862ed8d97678f9b73ef9e4b5746eb73954f7d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  SwitchTokens.DisabledSelectedIconColor.value
                      .copy(alpha = SwitchTokens.DisabledSelectedIconOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledUncheckedThumbColor: Color =
                  SwitchTokens.DisabledUnselectedHandleColor.value
                      .copy(alpha = SwitchTokens.DisabledUnselectedHandleOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledUncheckedTrackColor: Color =
                  SwitchTokens.DisabledUnselectedTrackColor.value
                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledUncheckedBorderColor: Color =
                  SwitchTokens.DisabledUnselectedTrackOutlineColor.value
                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
              disabledUncheckedIconColor: Color =
                  SwitchTokens.DisabledUnselectedIconColor.value
                      .copy(alpha = SwitchTokens.DisabledUnselectedIconOpacity)
                      .compositeOver(MaterialTheme.colorScheme.surface),
          ): SwitchColors =
              SwitchColors(
                  checkedThumbColor = checkedThumbColor,
                  checkedTrackColor = checkedTrackColor,
                  checkedBorderColor = checkedBorderColor,
                  checkedIconColor = checkedIconColor,
                  uncheckedThumbColor = uncheckedThumbColor,
                  uncheckedTrackColor = uncheckedTrackColor,
                  uncheckedBorderColor = uncheckedBorderColor,
                  uncheckedIconColor = uncheckedIconColor,
                  disabledCheckedThumbColor = disabledCheckedThumbColor,
                  disabledCheckedTrackColor = disabledCheckedTrackColor,
                  disabledCheckedBorderColor = disabledCheckedBorderColor,
                  disabledCheckedIconColor = disabledCheckedIconColor,
                  disabledUncheckedThumbColor = disabledUncheckedThumbColor,
                  disabledUncheckedTrackColor = disabledUncheckedTrackColor,
  - id: live-androidx-material3-material3-material3-switch-lines-557-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 557
    endLine: 589
    sha256: b7387e28ea5df594711f0f2788537ea985007182790a7605f7282c02bcdf5e24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  disabledUncheckedBorderColor = disabledUncheckedBorderColor,
                  disabledUncheckedIconColor = disabledUncheckedIconColor,
              )

          internal val ColorScheme.defaultSwitchColors: SwitchColors
              get() {
                  return defaultSwitchColorsCached
                      ?: SwitchColors(
                              checkedThumbColor = fromToken(SwitchTokens.SelectedHandleColor),
                              checkedTrackColor = fromToken(SwitchTokens.SelectedTrackColor),
                              checkedBorderColor = Color.Transparent,
                              checkedIconColor = fromToken(SwitchTokens.SelectedIconColor),
                              uncheckedThumbColor = fromToken(SwitchTokens.UnselectedHandleColor),
                              uncheckedTrackColor = fromToken(SwitchTokens.UnselectedTrackColor),
                              uncheckedBorderColor =
                                  fromToken(SwitchTokens.UnselectedFocusTrackOutlineColor),
                              uncheckedIconColor = fromToken(SwitchTokens.UnselectedIconColor),
                              disabledCheckedThumbColor =
                                  fromToken(SwitchTokens.DisabledSelectedHandleColor)
                                      .copy(alpha = SwitchTokens.DisabledSelectedHandleOpacity)
                                      .compositeOver(surface),
                              disabledCheckedTrackColor =
                                  fromToken(SwitchTokens.DisabledSelectedTrackColor)
                                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                      .compositeOver(surface),
                              disabledCheckedBorderColor = Color.Transparent,
                              disabledCheckedIconColor =
                                  fromToken(SwitchTokens.DisabledSelectedIconColor)
                                      .copy(alpha = SwitchTokens.DisabledSelectedIconOpacity)
                                      .compositeOver(surface),
                              disabledUncheckedThumbColor =
                                  fromToken(SwitchTokens.DisabledUnselectedHandleColor)
                                      .copy(alpha = SwitchTokens.DisabledUnselectedHandleOpacity)
  - id: live-androidx-material3-material3-material3-switch-lines-590-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 590
    endLine: 624
    sha256: d9a2daf81035d63b0d5a84472470fb326afc2fa5c2b70eb9a0cdf05a9a293711
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      .compositeOver(surface),
                              disabledUncheckedTrackColor =
                                  fromToken(SwitchTokens.DisabledUnselectedTrackColor)
                                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                      .compositeOver(surface),
                              disabledUncheckedBorderColor =
                                  fromToken(SwitchTokens.DisabledUnselectedTrackOutlineColor)
                                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                      .compositeOver(surface),
                              disabledUncheckedIconColor =
                                  fromToken(SwitchTokens.DisabledUnselectedIconColor)
                                      .copy(alpha = SwitchTokens.DisabledUnselectedIconOpacity)
                                      .compositeOver(surface),
                          )
                          .also { defaultSwitchColorsCached = it }
              }

          /** Icon size to use for `thumbContent` */
          public val IconSize: Dp = 16.dp
      }

      /**
       * Represents the colors used by a [Switch] in different states
       *
       * @param checkedThumbColor the color used for the thumb when enabled and checked
       * @param checkedTrackColor the color used for the track when enabled and checked
       * @param checkedBorderColor the color used for the border when enabled and checked
       * @param checkedIconColor the color used for the icon when enabled and checked
       * @param uncheckedThumbColor the color used for the thumb when enabled and unchecked
       * @param uncheckedTrackColor the color used for the track when enabled and unchecked
       * @param uncheckedBorderColor the color used for the border when enabled and unchecked
       * @param uncheckedIconColor the color used for the icon when enabled and unchecked
       * @param disabledCheckedThumbColor the color used for the thumb when disabled and checked
       * @param disabledCheckedTrackColor the color used for the track when disabled and checked
       * @param disabledCheckedBorderColor the color used for the border when disabled and checked
  - id: live-androidx-material3-material3-material3-switch-lines-625-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 625
    endLine: 659
    sha256: 505b2cc0677d7c2a21263b0c430fde057b46d6e04ae539feac8fd0e8621e64ca
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param disabledCheckedIconColor the color used for the icon when disabled and checked
       * @param disabledUncheckedThumbColor the color used for the thumb when disabled and unchecked
       * @param disabledUncheckedTrackColor the color used for the track when disabled and unchecked
       * @param disabledUncheckedBorderColor the color used for the border when disabled and unchecked
       * @param disabledUncheckedIconColor the color used for the icon when disabled and unchecked
       * @constructor create an instance with arbitrary colors. See [SwitchDefaults.colors] for the
       *   default implementation that follows Material specifications.
       */
      @Immutable
      public class SwitchColors
      public constructor(
          public val checkedThumbColor: Color,
          public val checkedTrackColor: Color,
          public val checkedBorderColor: Color,
          public val checkedIconColor: Color,
          public val uncheckedThumbColor: Color,
          public val uncheckedTrackColor: Color,
          public val uncheckedBorderColor: Color,
          public val uncheckedIconColor: Color,
          public val disabledCheckedThumbColor: Color,
          public val disabledCheckedTrackColor: Color,
          public val disabledCheckedBorderColor: Color,
          public val disabledCheckedIconColor: Color,
          public val disabledUncheckedThumbColor: Color,
          public val disabledUncheckedTrackColor: Color,
          public val disabledUncheckedBorderColor: Color,
          public val disabledUncheckedIconColor: Color,
      ) {
          /**
           * Returns a copy of this SwitchColors, optionally overriding some of the values. This uses the
           * Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              checkedThumbColor: Color = this.checkedThumbColor,
              checkedTrackColor: Color = this.checkedTrackColor,
  - id: live-androidx-material3-material3-material3-switch-lines-660-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 660
    endLine: 689
    sha256: 941698be2fc80625d9c3ec4002db4b4ed3ccb09ffee585d5a1655e6714451cb1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              checkedBorderColor: Color = this.checkedBorderColor,
              checkedIconColor: Color = this.checkedIconColor,
              uncheckedThumbColor: Color = this.uncheckedThumbColor,
              uncheckedTrackColor: Color = this.uncheckedTrackColor,
              uncheckedBorderColor: Color = this.uncheckedBorderColor,
              uncheckedIconColor: Color = this.uncheckedIconColor,
              disabledCheckedThumbColor: Color = this.disabledCheckedThumbColor,
              disabledCheckedTrackColor: Color = this.disabledCheckedTrackColor,
              disabledCheckedBorderColor: Color = this.disabledCheckedBorderColor,
              disabledCheckedIconColor: Color = this.disabledCheckedIconColor,
              disabledUncheckedThumbColor: Color = this.disabledUncheckedThumbColor,
              disabledUncheckedTrackColor: Color = this.disabledUncheckedTrackColor,
              disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
              disabledUncheckedIconColor: Color = this.disabledUncheckedIconColor,
          ): SwitchColors =
              SwitchColors(
                  checkedThumbColor.takeOrElse { this.checkedThumbColor },
                  checkedTrackColor.takeOrElse { this.checkedTrackColor },
                  checkedBorderColor.takeOrElse { this.checkedBorderColor },
                  checkedIconColor.takeOrElse { this.checkedIconColor },
                  uncheckedThumbColor.takeOrElse { this.uncheckedThumbColor },
                  uncheckedTrackColor.takeOrElse { this.uncheckedTrackColor },
                  uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
                  uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
                  disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
                  disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
                  disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },
                  disabledCheckedIconColor.takeOrElse { this.disabledCheckedIconColor },
                  disabledUncheckedThumbColor.takeOrElse { this.disabledUncheckedThumbColor },
                  disabledUncheckedTrackColor.takeOrElse { this.disabledUncheckedTrackColor },
  - id: live-androidx-material3-material3-material3-switch-lines-690-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 690
    endLine: 724
    sha256: 3a64d80023ad802c6c2a6afac4fb91e9cb77751b192bc12777de2338e93fc70f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
                  disabledUncheckedIconColor.takeOrElse { this.disabledUncheckedIconColor },
              )

          /**
           * Represents the color used for the switch's thumb, depending on [enabled] and [checked].
           *
           * @param enabled whether the [Switch] is enabled or not
           * @param checked whether the [Switch] is checked or not
           */
          @Stable
          internal fun thumbColor(enabled: Boolean, checked: Boolean): Color =
              if (enabled) {
                  if (checked) checkedThumbColor else uncheckedThumbColor
              } else {
                  if (checked) disabledCheckedThumbColor else disabledUncheckedThumbColor
              }

          /**
           * Represents the color used for the switch's track, depending on [enabled] and [checked].
           *
           * @param enabled whether the [Switch] is enabled or not
           * @param checked whether the [Switch] is checked or not
           */
          @Stable
          internal fun trackColor(enabled: Boolean, checked: Boolean): Color =
              if (enabled) {
                  if (checked) checkedTrackColor else uncheckedTrackColor
              } else {
                  if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
              }

          /**
           * Represents the color used for the switch's border, depending on [enabled] and [checked].
           *
  - id: live-androidx-material3-material3-material3-switch-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 71
    endLine: 105
    sha256: 0be0abab131402432df8f1df20ec75f156ab657648440fb9cccd81525db9c536
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.LocalLayoutDirection
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import kotlinx.coroutines.CoroutineScope
      import kotlinx.coroutines.Job
      import kotlinx.coroutines.flow.collectLatest
      import kotlinx.coroutines.launch

      /**
       * [Material Design switch](https://m3.material.io/components/switch)
       *
       * Switches toggle the state of a single item on or off.
       *
       * ![Switch
       * image](https://developer.android.com/images/reference/androidx/compose/material3/switch.png)
       *
       * @sample androidx.compose.material3.samples.SwitchSample
       *
       * Switch can be used with a custom icon via [thumbContent] parameter
       *
       * @sample androidx.compose.material3.samples.SwitchWithThumbIconSample
       * @param checked whether or not this switch is checked
       * @param onCheckedChange called when this switch is clicked. If `null`, then this switch will not
       *   be interactable, unless something else handles its input events and updates its state.
       * @param modifier the [Modifier] to be applied to this switch
       * @param thumbContent content that will be drawn inside the thumb, expected to measure
       *   [SwitchDefaults.IconSize]
       * @param enabled controls the enabled state of this switch. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [SwitchColors] that will be used to resolve the colors used for this switch in
  - id: live-androidx-material3-material3-material3-switch-lines-725-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 725
    endLine: 759
    sha256: 766346b96afe110e16fa9b76457e89e926d06a791b89a402e285c2496d833160
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param enabled whether the [Switch] is enabled or not
           * @param checked whether the [Switch] is checked or not
           */
          @Stable
          internal fun borderColor(enabled: Boolean, checked: Boolean): Color =
              if (enabled) {
                  if (checked) checkedBorderColor else uncheckedBorderColor
              } else {
                  if (checked) disabledCheckedBorderColor else disabledUncheckedBorderColor
              }

          /**
           * Represents the content color passed to the icon if used
           *
           * @param enabled whether the [Switch] is enabled or not
           * @param checked whether the [Switch] is checked or not
           */
          @Stable
          internal fun iconColor(enabled: Boolean, checked: Boolean): Color =
              if (enabled) {
                  if (checked) checkedIconColor else uncheckedIconColor
              } else {
                  if (checked) disabledCheckedIconColor else disabledUncheckedIconColor
              }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is SwitchColors) return false

              if (checkedThumbColor != other.checkedThumbColor) return false
              if (checkedTrackColor != other.checkedTrackColor) return false
              if (checkedBorderColor != other.checkedBorderColor) return false
              if (checkedIconColor != other.checkedIconColor) return false
              if (uncheckedThumbColor != other.uncheckedThumbColor) return false
              if (uncheckedTrackColor != other.uncheckedTrackColor) return false
  - id: live-androidx-material3-material3-material3-switch-lines-760-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 760
    endLine: 794
    sha256: 57d2b116a6397833bf4694b8e222a8982b413899476450ca0ec1a083ae41b068
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              if (uncheckedBorderColor != other.uncheckedBorderColor) return false
              if (uncheckedIconColor != other.uncheckedIconColor) return false
              if (disabledCheckedThumbColor != other.disabledCheckedThumbColor) return false
              if (disabledCheckedTrackColor != other.disabledCheckedTrackColor) return false
              if (disabledCheckedBorderColor != other.disabledCheckedBorderColor) return false
              if (disabledCheckedIconColor != other.disabledCheckedIconColor) return false
              if (disabledUncheckedThumbColor != other.disabledUncheckedThumbColor) return false
              if (disabledUncheckedTrackColor != other.disabledUncheckedTrackColor) return false
              if (disabledUncheckedBorderColor != other.disabledUncheckedBorderColor) return false
              if (disabledUncheckedIconColor != other.disabledUncheckedIconColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = checkedThumbColor.hashCode()
              result = 31 * result + checkedTrackColor.hashCode()
              result = 31 * result + checkedBorderColor.hashCode()
              result = 31 * result + checkedIconColor.hashCode()
              result = 31 * result + uncheckedThumbColor.hashCode()
              result = 31 * result + uncheckedTrackColor.hashCode()
              result = 31 * result + uncheckedBorderColor.hashCode()
              result = 31 * result + uncheckedIconColor.hashCode()
              result = 31 * result + disabledCheckedThumbColor.hashCode()
              result = 31 * result + disabledCheckedTrackColor.hashCode()
              result = 31 * result + disabledCheckedBorderColor.hashCode()
              result = 31 * result + disabledCheckedIconColor.hashCode()
              result = 31 * result + disabledUncheckedThumbColor.hashCode()
              result = 31 * result + disabledUncheckedTrackColor.hashCode()
              result = 31 * result + disabledUncheckedBorderColor.hashCode()
              result = 31 * result + disabledUncheckedIconColor.hashCode()
              return result
          }
      }
  - id: live-androidx-material3-material3-material3-switch-lines-795-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 7de187e988b71fd9873f023b55a7a6bddfd8b779
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 795
    endLine: 805
    sha256: 133426b76fb9e20e4365fe57e1f57f87b4f554b29a0a783b1a0cac2fa9bfd470
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      /* @VisibleForTesting */
      internal val ThumbDiameter
          get() = SwitchTokens.SelectedHandleWidth
      internal val UncheckedThumbDiameter
          get() = SwitchTokens.UnselectedHandleWidth

      private val SwitchWidth
          get() = SwitchTokens.TrackWidth
      private val SwitchHeight
          get() = SwitchTokens.TrackHeight
compose:
  id: live-androidx-material3-material3-material3-switch
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-switch-lines-1
      title: androidx.compose.material3 Switch.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-106
      title: androidx.compose.material3 Switch.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-141
      title: androidx.compose.material3 Switch.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-176
      title: androidx.compose.material3 Switch.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-211
      title: androidx.compose.material3 Switch.kt source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-246
      title: androidx.compose.material3 Switch.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-281
      title: androidx.compose.material3 Switch.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-316
      title: androidx.compose.material3 Switch.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-351
      title: androidx.compose.material3 Switch.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-36
      title: androidx.compose.material3 Switch.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-386
      title: androidx.compose.material3 Switch.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-421
      title: androidx.compose.material3 Switch.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-456
      title: androidx.compose.material3 Switch.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-491
      title: androidx.compose.material3 Switch.kt source (lines 491–521)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-522
      title: androidx.compose.material3 Switch.kt source (lines 522–556)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-522-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-557
      title: androidx.compose.material3 Switch.kt source (lines 557–589)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-557-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-590
      title: androidx.compose.material3 Switch.kt source (lines 590–624)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-590-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-625
      title: androidx.compose.material3 Switch.kt source (lines 625–659)
      aliases:
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-625-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-660
      title: androidx.compose.material3 Switch.kt source (lines 660–689)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-660-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-690
      title: androidx.compose.material3 Switch.kt source (lines 690–724)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-690-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-71
      title: androidx.compose.material3 Switch.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-725
      title: androidx.compose.material3 Switch.kt source (lines 725–759)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-725-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-760
      title: androidx.compose.material3 Switch.kt source (lines 760–794)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-760-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-795
      title: androidx.compose.material3 Switch.kt source (lines 795–805)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-795-source
      relatedIds: []
---

# androidx.compose.material3 Switch.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt

## androidx.compose.material3 Switch.kt source (lines 1–35)

/*
 * Copyright 2022 The Android Open Source Project
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

package androidx.compose.material3

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.AnimationVector1D
import androidx.compose.animation.core.FiniteAnimationSpec
import androidx.compose.foundation.MutatePriority
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.gestures.AnchoredDraggableDefaults
import androidx.compose.foundation.gestures.AnchoredDraggableState
import androidx.compose.foundation.gestures.DragScope
import androidx.compose.foundation.gestures.DraggableAnchors
import androidx.compose.foundation.gestures.DraggableState
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.ScrollScope
import androidx.compose.foundation.gestures.animateTo
import androidx.compose.foundation.gestures.draggable
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.DragInteraction

Sources: [live-androidx-material3-material3-material3-switch-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 106–140)

 *   different states. See [SwitchDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this switch. You can use this to change the switch's appearance or
 *   preview the switch in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 */
@Composable
@Suppress("ComposableLambdaParameterNaming", "ComposableLambdaParameterPosition")
public fun Switch(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier,
    thumbContent: (@Composable () -> Unit)? = null,
    enabled: Boolean = true,
    colors: SwitchColors = SwitchDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    SwitchImpl(
        modifier = modifier,
        onCheckedChange = onCheckedChange,
        checked = checked,
        enabled = enabled,
        thumbContent = thumbContent,
        thumbShape = SwitchTokens.HandleShape.value,
        trackShape = SwitchTokens.TrackShape.value,
        thumbColor = colors.thumbColor(enabled, checked),
        iconColor = colors.iconColor(enabled, checked),
        trackColor = colors.trackColor(enabled, checked),
        borderColor = colors.borderColor(enabled, checked),
        interactionSource = interactionSource,
    )
}

@Composable
@Suppress("ComposableLambdaParameterNaming", "ComposableLambdaParameterPosition")

Sources: [live-androidx-material3-material3-material3-switch-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 141–175)

private fun SwitchImpl(
    modifier: Modifier,
    onCheckedChange: ((Boolean) -> Unit)?,
    checked: Boolean,
    enabled: Boolean,
    thumbContent: (@Composable () -> Unit)?,
    thumbShape: Shape,
    trackShape: Shape,
    thumbColor: Color,
    iconColor: Color,
    trackColor: Color,
    borderColor: Color,
    interactionSource: MutableInteractionSource?,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

    // TODO Load the motionScheme tokens from the component tokens file
    val animationSpec = MotionSchemeKeyTokens.FastSpatial.value<Float>()
    val thumbTravelPx = with(LocalDensity.current) { (SwitchWidth - SwitchHeight).toPx() }
    var forceAnimationCheck by remember { mutableStateOf(false) }
    val anchoredDraggableState =
        remember(thumbTravelPx) {
            AnchoredDraggableState(
                initialValue = checked,
                anchors =
                    DraggableAnchors {
                        false at 0f
                        true at thumbTravelPx
                    },
            )
        }
    val currentOnCheckedChange by rememberUpdatedState(onCheckedChange)
    val currentChecked by rememberUpdatedState(checked)
    LaunchedEffect(anchoredDraggableState) {

Sources: [live-androidx-material3-material3-material3-switch-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 176–210)

        snapshotFlow { anchoredDraggableState.settledValue }
            .collectLatest { newValue ->
                if (currentChecked != newValue) {
                    currentOnCheckedChange?.invoke(newValue)
                    forceAnimationCheck = !forceAnimationCheck
                }
            }
    }
    LaunchedEffect(checked, forceAnimationCheck) {
        val targetOffset = anchoredDraggableState.anchors.positionOf(checked)
        if (
            checked != anchoredDraggableState.settledValue ||
                (!targetOffset.isNaN() && anchoredDraggableState.offset != targetOffset)
        ) {
            anchoredDraggableState.animateTo(checked, animationSpec)
        }
    }

    val toggleableModifier =
        if (onCheckedChange != null) {
            Modifier.minimumInteractiveComponentSize()
                .toggleable(
                    value = checked,
                    onValueChange = onCheckedChange,
                    enabled = enabled,
                    role = Role.Switch,
                    interactionSource = interactionSource,
                    indication = null,
                )
        } else {
            Modifier
        }

    val dragModifier =
        if (onCheckedChange != null) {

Sources: [live-androidx-material3-material3-material3-switch-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 211–245)

            val flingBehavior =
                AnchoredDraggableDefaults.flingBehavior(
                    state = anchoredDraggableState,
                    animationSpec = animationSpec,
                )
            val draggableState =
                remember(anchoredDraggableState) {
                    object : DraggableState {
                        override fun dispatchRawDelta(delta: Float) {
                            anchoredDraggableState.dispatchRawDelta(delta)
                        }

                        override suspend fun drag(
                            dragPriority: MutatePriority,
                            block: suspend DragScope.() -> Unit,
                        ) {
                            anchoredDraggableState.anchoredDrag(dragPriority) {
                                val dragScope =
                                    object : DragScope {
                                        override fun dragBy(pixels: Float) {
                                            anchoredDraggableState.dispatchRawDelta(pixels)
                                        }
                                    }
                                dragScope.block()
                            }
                        }
                    }
                }
            val onDragStopped: suspend CoroutineScope.(velocity: Float) -> Unit =
                remember(anchoredDraggableState, flingBehavior) {
                    { velocity ->
                        anchoredDraggableState.anchoredDrag {
                            val scrollScope =
                                object : ScrollScope {
                                    override fun scrollBy(pixels: Float): Float {

Sources: [live-androidx-material3-material3-material3-switch-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 246–280)

                                        return anchoredDraggableState.dispatchRawDelta(pixels)
                                    }
                                }
                            with(flingBehavior) { scrollScope.performFling(velocity) }
                        }
                    }
                }
            Modifier.draggable(
                state = draggableState,
                orientation = Orientation.Horizontal,
                enabled = enabled,
                interactionSource = interactionSource,
                startDragImmediately = false,
                reverseDirection = LocalLayoutDirection.current == LayoutDirection.Rtl,
                onDragStopped = onDragStopped,
            )
        } else {
            Modifier
        }

    val useInsetRing =
        LocalRippleThemeConfiguration.current.focus is RippleThemeConfiguration.Focus.InsetRing
    val focusRingModifier =
        if (useInsetRing) {
            Modifier.indication(
                interactionSource = interactionSource,
                indication =
                    ripple(
                        focusRingShape = trackShape,
                        enablePressIndication = false,
                        enableFocusIndication = true,
                        enableDragIndication = false,
                        enableHoverIndication = false,
                    ),
            )

Sources: [live-androidx-material3-material3-material3-switch-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 281–315)

        } else {
            Modifier
        }

    Box(
        modifier
            .then(toggleableModifier)
            .then(dragModifier)
            .wrapContentSize(Alignment.Center)
            .requiredSize(SwitchWidth, SwitchHeight)
            .border(TrackOutlineWidth, borderColor, trackShape)
            .background(trackColor, trackShape)
            .then(focusRingModifier)
    ) {
        Box(
            modifier =
                Modifier.align(Alignment.CenterStart)
                    .then(
                        ThumbElement(
                            interactionSource = interactionSource,
                            checked = checked,
                            anchoredDraggableState = anchoredDraggableState,
                            animationSpec = animationSpec,
                        )
                    )
                    .indication(
                        interactionSource = interactionSource,
                        indication =
                            ripple(
                                bounded = false,
                                radius = SwitchTokens.StateLayerSize / 2,
                                enableFocusIndication = !useInsetRing,
                            ),
                    )
                    .background(thumbColor, thumbShape),

Sources: [live-androidx-material3-material3-material3-switch-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 316–350)

            contentAlignment = Alignment.Center,
        ) {
            if (thumbContent != null) {
                CompositionLocalProvider(
                    LocalContentColor provides iconColor,
                    content = thumbContent,
                )
            }
        }
    }
}

private data class ThumbElement(
    val interactionSource: InteractionSource,
    val checked: Boolean,
    val anchoredDraggableState: AnchoredDraggableState<Boolean>,
    val animationSpec: FiniteAnimationSpec<Float>,
) : ModifierNodeElement<ThumbNode>() {
    override fun create() =
        ThumbNode(interactionSource, checked, anchoredDraggableState, animationSpec)

    override fun update(node: ThumbNode) {
        val interactionSourceChanged = node.interactionSource != interactionSource
        node.interactionSource = interactionSource
        if (interactionSourceChanged) {
            node.restartInteractionCollection()
        }
        if (node.checked != checked || node.anchoredDraggableState != anchoredDraggableState) {
            node.invalidateMeasurement()
        }
        node.checked = checked
        node.anchoredDraggableState = anchoredDraggableState
        node.animationSpec = animationSpec
        node.update()
    }

Sources: [live-androidx-material3-material3-material3-switch-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 351–385)


    override fun InspectorInfo.inspectableProperties() {
        name = "switchThumb"
        properties["interactionSource"] = interactionSource
        properties["checked"] = checked
        properties["animationSpec"] = animationSpec
    }
}

private class ThumbNode(
    var interactionSource: InteractionSource,
    var checked: Boolean,
    var anchoredDraggableState: AnchoredDraggableState<Boolean>,
    var animationSpec: FiniteAnimationSpec<Float>,
) : Modifier.Node(), LayoutModifierNode {

    override val shouldAutoInvalidate: Boolean
        get() = false

    private var isPressed = false
    private var isDragged = false
    private var interactionCollectionJob: Job? = null
    private var sizeAnim: Animatable<Float, AnimationVector1D>? = null
    private var initialSize: Float = Float.NaN

    override fun onAttach() {
        restartInteractionCollection()
    }

    override fun onDetach() {
        super.onDetach()
        isPressed = false
        isDragged = false
    }


Sources: [live-androidx-material3-material3-material3-switch-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 36–70)

import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.selection.toggleable
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.material3.tokens.SwitchTokens
import androidx.compose.material3.tokens.SwitchTokens.TrackOutlineWidth
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.compositeOver
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.node.LayoutModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.invalidateMeasurement
import androidx.compose.ui.platform.InspectorInfo

Sources: [live-androidx-material3-material3-material3-switch-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 386–420)

    fun restartInteractionCollection() {
        interactionCollectionJob?.cancel()
        isPressed = false
        isDragged = false
        if (!isAttached) return
        interactionCollectionJob = coroutineScope.launch {
            var pressCount = 0
            var dragCount = 0
            interactionSource.interactions.collect { interaction ->
                when (interaction) {
                    is PressInteraction.Press -> pressCount++
                    is PressInteraction.Release -> pressCount--
                    is PressInteraction.Cancel -> pressCount--
                    is DragInteraction.Start -> dragCount++
                    is DragInteraction.Stop -> dragCount--
                    is DragInteraction.Cancel -> dragCount--
                }
                val pressed = pressCount > 0
                val dragged = dragCount > 0
                if (isPressed != pressed || isDragged != dragged) {
                    isPressed = pressed
                    isDragged = dragged
                    invalidateMeasurement()
                }
            }
        }
    }

    override fun onReset() {
        super.onReset()
        sizeAnim = null
        initialSize = Float.NaN
        isPressed = false
        isDragged = false
    }

Sources: [live-androidx-material3-material3-material3-switch-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 421–455)


    override fun MeasureScope.measure(
        measurable: Measurable,
        constraints: Constraints,
    ): MeasureResult {
        val hasContent =
            measurable.maxIntrinsicHeight(constraints.maxWidth) != 0 &&
                measurable.maxIntrinsicWidth(constraints.maxHeight) != 0
        val size =
            when {
                isPressed || isDragged -> SwitchTokens.PressedHandleWidth
                hasContent || checked -> ThumbDiameter
                else -> UncheckedThumbDiameter
            }.toPx()

        if (sizeAnim == null && !initialSize.isNaN()) {
            sizeAnim = Animatable(initialSize)
        }
        val actualSize = (sizeAnim?.value ?: size).toInt().coerceAtLeast(0)
        val placeable = measurable.measure(Constraints.fixed(actualSize, actualSize))

        if (sizeAnim?.targetValue != size) {
            coroutineScope.launch { sizeAnim?.animateTo(size, animationSpec) }
        }

        if (initialSize.isNaN()) {
            initialSize = size
        }

        val minCenterX = (SwitchHeight / 2f).toPx()
        val fallbackTravel = (SwitchWidth - SwitchHeight).toPx()

        return layout(actualSize, actualSize) {
            val dragOffset =
                if (!anchoredDraggableState.offset.isNaN()) {

Sources: [live-androidx-material3-material3-material3-switch-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 456–490)

                    anchoredDraggableState.offset
                } else {
                    if (checked) fallbackTravel else 0f
                }
            val currentThumbSize = sizeAnim?.value ?: size
            val leftOffset = minCenterX + dragOffset - currentThumbSize / 2f
            placeable.placeRelative(leftOffset.toInt(), 0)
        }
    }

    fun update() {
        if (sizeAnim == null && !initialSize.isNaN()) {
            sizeAnim = Animatable(initialSize)
        }
    }
}

/** Contains the default values used by [Switch] */
public object SwitchDefaults {
    /**
     * Creates a [SwitchColors] that represents the different colors used in a [Switch] in different
     * states.
     */
    @Composable public fun colors(): SwitchColors = MaterialTheme.colorScheme.defaultSwitchColors

    /**
     * Creates a [SwitchColors] that represents the different colors used in a [Switch] in different
     * states.
     *
     * @param checkedThumbColor the color used for the thumb when enabled and checked
     * @param checkedTrackColor the color used for the track when enabled and checked
     * @param checkedBorderColor the color used for the border when enabled and checked
     * @param checkedIconColor the color used for the icon when enabled and checked
     * @param uncheckedThumbColor the color used for the thumb when enabled and unchecked
     * @param uncheckedTrackColor the color used for the track when enabled and unchecked

Sources: [live-androidx-material3-material3-material3-switch-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 491–521)

     * @param uncheckedBorderColor the color used for the border when enabled and unchecked
     * @param uncheckedIconColor the color used for the icon when enabled and unchecked
     * @param disabledCheckedThumbColor the color used for the thumb when disabled and checked
     * @param disabledCheckedTrackColor the color used for the track when disabled and checked
     * @param disabledCheckedBorderColor the color used for the border when disabled and checked
     * @param disabledCheckedIconColor the color used for the icon when disabled and checked
     * @param disabledUncheckedThumbColor the color used for the thumb when disabled and unchecked
     * @param disabledUncheckedTrackColor the color used for the track when disabled and unchecked
     * @param disabledUncheckedBorderColor the color used for the border when disabled and unchecked
     * @param disabledUncheckedIconColor the color used for the icon when disabled and unchecked
     */
    @Composable
    public fun colors(
        checkedThumbColor: Color = SwitchTokens.SelectedHandleColor.value,
        checkedTrackColor: Color = SwitchTokens.SelectedTrackColor.value,
        checkedBorderColor: Color = Color.Transparent,
        checkedIconColor: Color = SwitchTokens.SelectedIconColor.value,
        uncheckedThumbColor: Color = SwitchTokens.UnselectedHandleColor.value,
        uncheckedTrackColor: Color = SwitchTokens.UnselectedTrackColor.value,
        uncheckedBorderColor: Color = SwitchTokens.UnselectedFocusTrackOutlineColor.value,
        uncheckedIconColor: Color = SwitchTokens.UnselectedIconColor.value,
        disabledCheckedThumbColor: Color =
            SwitchTokens.DisabledSelectedHandleColor.value
                .copy(alpha = SwitchTokens.DisabledSelectedHandleOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledCheckedTrackColor: Color =
            SwitchTokens.DisabledSelectedTrackColor.value
                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledCheckedBorderColor: Color = Color.Transparent,
        disabledCheckedIconColor: Color =

Sources: [live-androidx-material3-material3-material3-switch-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 522–556)

            SwitchTokens.DisabledSelectedIconColor.value
                .copy(alpha = SwitchTokens.DisabledSelectedIconOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledUncheckedThumbColor: Color =
            SwitchTokens.DisabledUnselectedHandleColor.value
                .copy(alpha = SwitchTokens.DisabledUnselectedHandleOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledUncheckedTrackColor: Color =
            SwitchTokens.DisabledUnselectedTrackColor.value
                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledUncheckedBorderColor: Color =
            SwitchTokens.DisabledUnselectedTrackOutlineColor.value
                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
        disabledUncheckedIconColor: Color =
            SwitchTokens.DisabledUnselectedIconColor.value
                .copy(alpha = SwitchTokens.DisabledUnselectedIconOpacity)
                .compositeOver(MaterialTheme.colorScheme.surface),
    ): SwitchColors =
        SwitchColors(
            checkedThumbColor = checkedThumbColor,
            checkedTrackColor = checkedTrackColor,
            checkedBorderColor = checkedBorderColor,
            checkedIconColor = checkedIconColor,
            uncheckedThumbColor = uncheckedThumbColor,
            uncheckedTrackColor = uncheckedTrackColor,
            uncheckedBorderColor = uncheckedBorderColor,
            uncheckedIconColor = uncheckedIconColor,
            disabledCheckedThumbColor = disabledCheckedThumbColor,
            disabledCheckedTrackColor = disabledCheckedTrackColor,
            disabledCheckedBorderColor = disabledCheckedBorderColor,
            disabledCheckedIconColor = disabledCheckedIconColor,
            disabledUncheckedThumbColor = disabledUncheckedThumbColor,
            disabledUncheckedTrackColor = disabledUncheckedTrackColor,

Sources: [live-androidx-material3-material3-material3-switch-lines-522-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 557–589)

            disabledUncheckedBorderColor = disabledUncheckedBorderColor,
            disabledUncheckedIconColor = disabledUncheckedIconColor,
        )

    internal val ColorScheme.defaultSwitchColors: SwitchColors
        get() {
            return defaultSwitchColorsCached
                ?: SwitchColors(
                        checkedThumbColor = fromToken(SwitchTokens.SelectedHandleColor),
                        checkedTrackColor = fromToken(SwitchTokens.SelectedTrackColor),
                        checkedBorderColor = Color.Transparent,
                        checkedIconColor = fromToken(SwitchTokens.SelectedIconColor),
                        uncheckedThumbColor = fromToken(SwitchTokens.UnselectedHandleColor),
                        uncheckedTrackColor = fromToken(SwitchTokens.UnselectedTrackColor),
                        uncheckedBorderColor =
                            fromToken(SwitchTokens.UnselectedFocusTrackOutlineColor),
                        uncheckedIconColor = fromToken(SwitchTokens.UnselectedIconColor),
                        disabledCheckedThumbColor =
                            fromToken(SwitchTokens.DisabledSelectedHandleColor)
                                .copy(alpha = SwitchTokens.DisabledSelectedHandleOpacity)
                                .compositeOver(surface),
                        disabledCheckedTrackColor =
                            fromToken(SwitchTokens.DisabledSelectedTrackColor)
                                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                .compositeOver(surface),
                        disabledCheckedBorderColor = Color.Transparent,
                        disabledCheckedIconColor =
                            fromToken(SwitchTokens.DisabledSelectedIconColor)
                                .copy(alpha = SwitchTokens.DisabledSelectedIconOpacity)
                                .compositeOver(surface),
                        disabledUncheckedThumbColor =
                            fromToken(SwitchTokens.DisabledUnselectedHandleColor)
                                .copy(alpha = SwitchTokens.DisabledUnselectedHandleOpacity)

Sources: [live-androidx-material3-material3-material3-switch-lines-557-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 590–624)

                                .compositeOver(surface),
                        disabledUncheckedTrackColor =
                            fromToken(SwitchTokens.DisabledUnselectedTrackColor)
                                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                .compositeOver(surface),
                        disabledUncheckedBorderColor =
                            fromToken(SwitchTokens.DisabledUnselectedTrackOutlineColor)
                                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                .compositeOver(surface),
                        disabledUncheckedIconColor =
                            fromToken(SwitchTokens.DisabledUnselectedIconColor)
                                .copy(alpha = SwitchTokens.DisabledUnselectedIconOpacity)
                                .compositeOver(surface),
                    )
                    .also { defaultSwitchColorsCached = it }
        }

    /** Icon size to use for `thumbContent` */
    public val IconSize: Dp = 16.dp
}

/**
 * Represents the colors used by a [Switch] in different states
 *
 * @param checkedThumbColor the color used for the thumb when enabled and checked
 * @param checkedTrackColor the color used for the track when enabled and checked
 * @param checkedBorderColor the color used for the border when enabled and checked
 * @param checkedIconColor the color used for the icon when enabled and checked
 * @param uncheckedThumbColor the color used for the thumb when enabled and unchecked
 * @param uncheckedTrackColor the color used for the track when enabled and unchecked
 * @param uncheckedBorderColor the color used for the border when enabled and unchecked
 * @param uncheckedIconColor the color used for the icon when enabled and unchecked
 * @param disabledCheckedThumbColor the color used for the thumb when disabled and checked
 * @param disabledCheckedTrackColor the color used for the track when disabled and checked
 * @param disabledCheckedBorderColor the color used for the border when disabled and checked

Sources: [live-androidx-material3-material3-material3-switch-lines-590-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 625–659)

 * @param disabledCheckedIconColor the color used for the icon when disabled and checked
 * @param disabledUncheckedThumbColor the color used for the thumb when disabled and unchecked
 * @param disabledUncheckedTrackColor the color used for the track when disabled and unchecked
 * @param disabledUncheckedBorderColor the color used for the border when disabled and unchecked
 * @param disabledUncheckedIconColor the color used for the icon when disabled and unchecked
 * @constructor create an instance with arbitrary colors. See [SwitchDefaults.colors] for the
 *   default implementation that follows Material specifications.
 */
@Immutable
public class SwitchColors
public constructor(
    public val checkedThumbColor: Color,
    public val checkedTrackColor: Color,
    public val checkedBorderColor: Color,
    public val checkedIconColor: Color,
    public val uncheckedThumbColor: Color,
    public val uncheckedTrackColor: Color,
    public val uncheckedBorderColor: Color,
    public val uncheckedIconColor: Color,
    public val disabledCheckedThumbColor: Color,
    public val disabledCheckedTrackColor: Color,
    public val disabledCheckedBorderColor: Color,
    public val disabledCheckedIconColor: Color,
    public val disabledUncheckedThumbColor: Color,
    public val disabledUncheckedTrackColor: Color,
    public val disabledUncheckedBorderColor: Color,
    public val disabledUncheckedIconColor: Color,
) {
    /**
     * Returns a copy of this SwitchColors, optionally overriding some of the values. This uses the
     * Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        checkedThumbColor: Color = this.checkedThumbColor,
        checkedTrackColor: Color = this.checkedTrackColor,

Sources: [live-androidx-material3-material3-material3-switch-lines-625-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 660–689)

        checkedBorderColor: Color = this.checkedBorderColor,
        checkedIconColor: Color = this.checkedIconColor,
        uncheckedThumbColor: Color = this.uncheckedThumbColor,
        uncheckedTrackColor: Color = this.uncheckedTrackColor,
        uncheckedBorderColor: Color = this.uncheckedBorderColor,
        uncheckedIconColor: Color = this.uncheckedIconColor,
        disabledCheckedThumbColor: Color = this.disabledCheckedThumbColor,
        disabledCheckedTrackColor: Color = this.disabledCheckedTrackColor,
        disabledCheckedBorderColor: Color = this.disabledCheckedBorderColor,
        disabledCheckedIconColor: Color = this.disabledCheckedIconColor,
        disabledUncheckedThumbColor: Color = this.disabledUncheckedThumbColor,
        disabledUncheckedTrackColor: Color = this.disabledUncheckedTrackColor,
        disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
        disabledUncheckedIconColor: Color = this.disabledUncheckedIconColor,
    ): SwitchColors =
        SwitchColors(
            checkedThumbColor.takeOrElse { this.checkedThumbColor },
            checkedTrackColor.takeOrElse { this.checkedTrackColor },
            checkedBorderColor.takeOrElse { this.checkedBorderColor },
            checkedIconColor.takeOrElse { this.checkedIconColor },
            uncheckedThumbColor.takeOrElse { this.uncheckedThumbColor },
            uncheckedTrackColor.takeOrElse { this.uncheckedTrackColor },
            uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
            uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
            disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
            disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
            disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },
            disabledCheckedIconColor.takeOrElse { this.disabledCheckedIconColor },
            disabledUncheckedThumbColor.takeOrElse { this.disabledUncheckedThumbColor },
            disabledUncheckedTrackColor.takeOrElse { this.disabledUncheckedTrackColor },

Sources: [live-androidx-material3-material3-material3-switch-lines-660-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 690–724)

            disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
            disabledUncheckedIconColor.takeOrElse { this.disabledUncheckedIconColor },
        )

    /**
     * Represents the color used for the switch's thumb, depending on [enabled] and [checked].
     *
     * @param enabled whether the [Switch] is enabled or not
     * @param checked whether the [Switch] is checked or not
     */
    @Stable
    internal fun thumbColor(enabled: Boolean, checked: Boolean): Color =
        if (enabled) {
            if (checked) checkedThumbColor else uncheckedThumbColor
        } else {
            if (checked) disabledCheckedThumbColor else disabledUncheckedThumbColor
        }

    /**
     * Represents the color used for the switch's track, depending on [enabled] and [checked].
     *
     * @param enabled whether the [Switch] is enabled or not
     * @param checked whether the [Switch] is checked or not
     */
    @Stable
    internal fun trackColor(enabled: Boolean, checked: Boolean): Color =
        if (enabled) {
            if (checked) checkedTrackColor else uncheckedTrackColor
        } else {
            if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
        }

    /**
     * Represents the color used for the switch's border, depending on [enabled] and [checked].
     *

Sources: [live-androidx-material3-material3-material3-switch-lines-690-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 71–105)

import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.launch

/**
 * [Material Design switch](https://m3.material.io/components/switch)
 *
 * Switches toggle the state of a single item on or off.
 *
 * ![Switch
 * image](https://developer.android.com/images/reference/androidx/compose/material3/switch.png)
 *
 * @sample androidx.compose.material3.samples.SwitchSample
 *
 * Switch can be used with a custom icon via [thumbContent] parameter
 *
 * @sample androidx.compose.material3.samples.SwitchWithThumbIconSample
 * @param checked whether or not this switch is checked
 * @param onCheckedChange called when this switch is clicked. If `null`, then this switch will not
 *   be interactable, unless something else handles its input events and updates its state.
 * @param modifier the [Modifier] to be applied to this switch
 * @param thumbContent content that will be drawn inside the thumb, expected to measure
 *   [SwitchDefaults.IconSize]
 * @param enabled controls the enabled state of this switch. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [SwitchColors] that will be used to resolve the colors used for this switch in

Sources: [live-androidx-material3-material3-material3-switch-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 725–759)

     * @param enabled whether the [Switch] is enabled or not
     * @param checked whether the [Switch] is checked or not
     */
    @Stable
    internal fun borderColor(enabled: Boolean, checked: Boolean): Color =
        if (enabled) {
            if (checked) checkedBorderColor else uncheckedBorderColor
        } else {
            if (checked) disabledCheckedBorderColor else disabledUncheckedBorderColor
        }

    /**
     * Represents the content color passed to the icon if used
     *
     * @param enabled whether the [Switch] is enabled or not
     * @param checked whether the [Switch] is checked or not
     */
    @Stable
    internal fun iconColor(enabled: Boolean, checked: Boolean): Color =
        if (enabled) {
            if (checked) checkedIconColor else uncheckedIconColor
        } else {
            if (checked) disabledCheckedIconColor else disabledUncheckedIconColor
        }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is SwitchColors) return false

        if (checkedThumbColor != other.checkedThumbColor) return false
        if (checkedTrackColor != other.checkedTrackColor) return false
        if (checkedBorderColor != other.checkedBorderColor) return false
        if (checkedIconColor != other.checkedIconColor) return false
        if (uncheckedThumbColor != other.uncheckedThumbColor) return false
        if (uncheckedTrackColor != other.uncheckedTrackColor) return false

Sources: [live-androidx-material3-material3-material3-switch-lines-725-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 760–794)

        if (uncheckedBorderColor != other.uncheckedBorderColor) return false
        if (uncheckedIconColor != other.uncheckedIconColor) return false
        if (disabledCheckedThumbColor != other.disabledCheckedThumbColor) return false
        if (disabledCheckedTrackColor != other.disabledCheckedTrackColor) return false
        if (disabledCheckedBorderColor != other.disabledCheckedBorderColor) return false
        if (disabledCheckedIconColor != other.disabledCheckedIconColor) return false
        if (disabledUncheckedThumbColor != other.disabledUncheckedThumbColor) return false
        if (disabledUncheckedTrackColor != other.disabledUncheckedTrackColor) return false
        if (disabledUncheckedBorderColor != other.disabledUncheckedBorderColor) return false
        if (disabledUncheckedIconColor != other.disabledUncheckedIconColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = checkedThumbColor.hashCode()
        result = 31 * result + checkedTrackColor.hashCode()
        result = 31 * result + checkedBorderColor.hashCode()
        result = 31 * result + checkedIconColor.hashCode()
        result = 31 * result + uncheckedThumbColor.hashCode()
        result = 31 * result + uncheckedTrackColor.hashCode()
        result = 31 * result + uncheckedBorderColor.hashCode()
        result = 31 * result + uncheckedIconColor.hashCode()
        result = 31 * result + disabledCheckedThumbColor.hashCode()
        result = 31 * result + disabledCheckedTrackColor.hashCode()
        result = 31 * result + disabledCheckedBorderColor.hashCode()
        result = 31 * result + disabledCheckedIconColor.hashCode()
        result = 31 * result + disabledUncheckedThumbColor.hashCode()
        result = 31 * result + disabledUncheckedTrackColor.hashCode()
        result = 31 * result + disabledUncheckedBorderColor.hashCode()
        result = 31 * result + disabledUncheckedIconColor.hashCode()
        return result
    }
}


Sources: [live-androidx-material3-material3-material3-switch-lines-760-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 795–805)

/* @VisibleForTesting */
internal val ThumbDiameter
    get() = SwitchTokens.SelectedHandleWidth
internal val UncheckedThumbDiameter
    get() = SwitchTokens.UnselectedHandleWidth

private val SwitchWidth
    get() = SwitchTokens.TrackWidth
private val SwitchHeight
    get() = SwitchTokens.TrackHeight


Sources: [live-androidx-material3-material3-material3-switch-lines-795-source](https://android.googlesource.com/platform/frameworks/support/+/7de187e988b71fd9873f023b55a7a6bddfd8b779/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)
