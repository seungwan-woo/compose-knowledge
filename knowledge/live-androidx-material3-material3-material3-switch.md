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
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 1
    endLine: 35
    sha256: eeec5021ea842542a989892e7cf69b6b3de8a1bf69ff0ac63d9f865cbff23b1a
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
      import androidx.compose.foundation.background
      import androidx.compose.foundation.border
      import androidx.compose.foundation.gestures.AnchoredDraggableDefaults
      import androidx.compose.foundation.gestures.AnchoredDraggableState
      import androidx.compose.foundation.gestures.DraggableAnchors
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.anchoredDraggable
      import androidx.compose.foundation.gestures.animateTo
      import androidx.compose.foundation.indication
      import androidx.compose.foundation.interaction.DragInteraction
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.InteractionSource
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.interaction.PressInteraction
  - id: live-androidx-material3-material3-material3-switch-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 106
    endLine: 140
    sha256: e6fca60c01a1648f4ed459bccaab2afe9cbb7a7fc3a74562e1751d223f4fe781
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
      private fun SwitchImpl(
          modifier: Modifier,
          onCheckedChange: ((Boolean) -> Unit)?,
          checked: Boolean,
          enabled: Boolean,
          thumbContent: (@Composable () -> Unit)?,
          thumbShape: Shape,
  - id: live-androidx-material3-material3-material3-switch-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 141
    endLine: 175
    sha256: c482e3d46cc27ae60243c6b9ddcf001e577991660b1a57808c4a88302b37b865
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              snapshotFlow { anchoredDraggableState.settledValue }
                  .collectLatest { newValue ->
                      if (currentChecked != newValue) {
                          currentOnCheckedChange?.invoke(newValue)
                          forceAnimationCheck = !forceAnimationCheck
                      }
                  }
  - id: live-androidx-material3-material3-material3-switch-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 176
    endLine: 210
    sha256: ddecf46f2fb5acbe9c2ceebf2a2f07db7bbe291ef5e1c302b82c622956ad84cc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
          LaunchedEffect(checked, forceAnimationCheck) {
              if (checked != anchoredDraggableState.settledValue) {
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
                  Modifier.anchoredDraggable(
                      state = anchoredDraggableState,
                      orientation = Orientation.Horizontal,
                      enabled = enabled,
                      interactionSource = interactionSource,
                      flingBehavior =
                          AnchoredDraggableDefaults.flingBehavior(
                              state = anchoredDraggableState,
                              animationSpec = animationSpec,
                          ),
                  )
  - id: live-androidx-material3-material3-material3-switch-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 211
    endLine: 245
    sha256: a0a56e0c4b7b6a3339a877994e7ea2cffe37fad27cf5d85db7c37c7d34095560
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 246
    endLine: 280
    sha256: 9303f0a4bcbe32bc12857809a4a25422b05ffdeb42e0f7d9e7682cba18ea46c3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 281
    endLine: 315
    sha256: 2cf7a5e0a3244a163a78aecc7008a1c8d5ab160ef861d09dde0d5f7f05ea49a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
  - id: live-androidx-material3-material3-material3-switch-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 316
    endLine: 350
    sha256: 84a91f4883fd679748a9cf64f50e22637ec07228c6eea1d101ec0db62d15c7c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 351
    endLine: 385
    sha256: 6a7e8d936207b92a2a1443e143ab2d913fa8f497adac121f9e349cb83fa76dc3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 36
    endLine: 70
    sha256: cd07fdf1b11be6e94ced1ed010cb7672bb048695fa5929b5f4c4248404d7f0e4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
  - id: live-androidx-material3-material3-material3-switch-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 386
    endLine: 420
    sha256: aab027ae4e1e426e208c56392f9b14f59e2a7f31be16d4e3102afd4feb7ce522
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 421
    endLine: 455
    sha256: bc53e3621fb2d6db1cb151b0f4b0885c7ac7e2bb84787bb618e354dfa2d2cadf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
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
  - id: live-androidx-material3-material3-material3-switch-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 456
    endLine: 490
    sha256: 688c4fbe891ebcbbfc8ef73dde00459f31f44c3f5c689ce8428a8316fec9559e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 491
    endLine: 525
    sha256: 2a9981fe237d6dc82fa86ac146c95c8a6489b371751a54fa4de95c77082f61aa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 526
    endLine: 560
    sha256: 9d018068d6c788a4a9f640ab26c4ccf3b19c05d27a50d742b9b1c617b2538c4d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 561
    endLine: 595
    sha256: f8fb3c08a2c3d65087db2b14ff4b78e5a1f8f42d9a3bbe02607c994f5e55b61e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 596
    endLine: 630
    sha256: 8a7a338de18e4709deb5f95119474fafe2caca76e4b5f1179b249afef8fd3d1d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-material3-material3-switch-lines-631-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 631
    endLine: 665
    sha256: b3659fc934c8bc383899f7b85c9f34f03d0cbda3c7c5ffbf7276ab21a61aff5d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
                  uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
                  disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
                  disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
                  disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },
                  disabledCheckedIconColor.takeOrElse { this.disabledCheckedIconColor },
                  disabledUncheckedThumbColor.takeOrElse { this.disabledUncheckedThumbColor },
                  disabledUncheckedTrackColor.takeOrElse { this.disabledUncheckedTrackColor },
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
  - id: live-androidx-material3-material3-material3-switch-lines-666-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 666
    endLine: 700
    sha256: 539f7b17456390a02200baa8008fb9aa75a982ade1ffc6e45a27aad840f28a3f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (checked) checkedTrackColor else uncheckedTrackColor
              } else {
                  if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
              }

          /**
           * Represents the color used for the switch's border, depending on [enabled] and [checked].
           *
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
  - id: live-androidx-material3-material3-material3-switch-lines-701-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 701
    endLine: 735
    sha256: de9e9b08f8da2515259e33e2ed5eabeffb31d8d86ecd7ac937a77712db71b295
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (other == null || other !is SwitchColors) return false

              if (checkedThumbColor != other.checkedThumbColor) return false
              if (checkedTrackColor != other.checkedTrackColor) return false
              if (checkedBorderColor != other.checkedBorderColor) return false
              if (checkedIconColor != other.checkedIconColor) return false
              if (uncheckedThumbColor != other.uncheckedThumbColor) return false
              if (uncheckedTrackColor != other.uncheckedTrackColor) return false
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
  - id: live-androidx-material3-material3-material3-switch-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 71
    endLine: 105
    sha256: 873cdc78f15defcd330e5b4f0c570663f8353147495cc260faa2a3335e3198e2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.unit.dp
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
       *   different states. See [SwitchDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this switch. You can use this to change the switch's appearance or
       *   preview the switch in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       */
      @Composable
  - id: live-androidx-material3-material3-material3-switch-lines-736-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 75856eb147ebe0f9b37f5aa3ae3023d023fd54ce
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 736
    endLine: 754
    sha256: 609af6438860e74005a1b3e00aa72ea5b8b2f9911ff0791d931f0675f564292d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              result = 31 * result + disabledUncheckedThumbColor.hashCode()
              result = 31 * result + disabledUncheckedTrackColor.hashCode()
              result = 31 * result + disabledUncheckedBorderColor.hashCode()
              result = 31 * result + disabledUncheckedIconColor.hashCode()
              return result
          }
      }

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
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-456
      title: androidx.compose.material3 Switch.kt source (lines 456–490)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-491
      title: androidx.compose.material3 Switch.kt source (lines 491–525)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-526
      title: androidx.compose.material3 Switch.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-561
      title: androidx.compose.material3 Switch.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-596
      title: androidx.compose.material3 Switch.kt source (lines 596–630)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-631
      title: androidx.compose.material3 Switch.kt source (lines 631–665)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-631-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-666
      title: androidx.compose.material3 Switch.kt source (lines 666–700)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-666-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-701
      title: androidx.compose.material3 Switch.kt source (lines 701–735)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-701-source
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
    - id: live-androidx-material3-material3-material3-switch-lines-736
      title: androidx.compose.material3 Switch.kt source (lines 736–754)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-736-source
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
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.gestures.AnchoredDraggableDefaults
import androidx.compose.foundation.gestures.AnchoredDraggableState
import androidx.compose.foundation.gestures.DraggableAnchors
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.anchoredDraggable
import androidx.compose.foundation.gestures.animateTo
import androidx.compose.foundation.indication
import androidx.compose.foundation.interaction.DragInteraction
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.InteractionSource
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.PressInteraction

Sources: [live-androidx-material3-material3-material3-switch-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 106–140)

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
private fun SwitchImpl(
    modifier: Modifier,
    onCheckedChange: ((Boolean) -> Unit)?,
    checked: Boolean,
    enabled: Boolean,
    thumbContent: (@Composable () -> Unit)?,
    thumbShape: Shape,

Sources: [live-androidx-material3-material3-material3-switch-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 141–175)

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
        snapshotFlow { anchoredDraggableState.settledValue }
            .collectLatest { newValue ->
                if (currentChecked != newValue) {
                    currentOnCheckedChange?.invoke(newValue)
                    forceAnimationCheck = !forceAnimationCheck
                }
            }

Sources: [live-androidx-material3-material3-material3-switch-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 176–210)

    }
    LaunchedEffect(checked, forceAnimationCheck) {
        if (checked != anchoredDraggableState.settledValue) {
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
            Modifier.anchoredDraggable(
                state = anchoredDraggableState,
                orientation = Orientation.Horizontal,
                enabled = enabled,
                interactionSource = interactionSource,
                flingBehavior =
                    AnchoredDraggableDefaults.flingBehavior(
                        state = anchoredDraggableState,
                        animationSpec = animationSpec,
                    ),
            )

Sources: [live-androidx-material3-material3-material3-switch-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 211–245)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 246–280)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 281–315)

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


Sources: [live-androidx-material3-material3-material3-switch-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 316–350)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 351–385)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 36–70)

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
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp

Sources: [live-androidx-material3-material3-material3-switch-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 386–420)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 421–455)


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

Sources: [live-androidx-material3-material3-material3-switch-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 456–490)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 491–525)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 526–560)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 561–595)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 596–630)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 631–665)

            uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
            uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
            disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
            disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
            disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },
            disabledCheckedIconColor.takeOrElse { this.disabledCheckedIconColor },
            disabledUncheckedThumbColor.takeOrElse { this.disabledUncheckedThumbColor },
            disabledUncheckedTrackColor.takeOrElse { this.disabledUncheckedTrackColor },
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

Sources: [live-androidx-material3-material3-material3-switch-lines-631-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 666–700)

            if (checked) checkedTrackColor else uncheckedTrackColor
        } else {
            if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
        }

    /**
     * Represents the color used for the switch's border, depending on [enabled] and [checked].
     *
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

Sources: [live-androidx-material3-material3-material3-switch-lines-666-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 701–735)

        if (other == null || other !is SwitchColors) return false

        if (checkedThumbColor != other.checkedThumbColor) return false
        if (checkedTrackColor != other.checkedTrackColor) return false
        if (checkedBorderColor != other.checkedBorderColor) return false
        if (checkedIconColor != other.checkedIconColor) return false
        if (uncheckedThumbColor != other.uncheckedThumbColor) return false
        if (uncheckedTrackColor != other.uncheckedTrackColor) return false
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

Sources: [live-androidx-material3-material3-material3-switch-lines-701-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 71–105)

import androidx.compose.ui.unit.dp
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
 *   different states. See [SwitchDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this switch. You can use this to change the switch's appearance or
 *   preview the switch in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 */
@Composable

Sources: [live-androidx-material3-material3-material3-switch-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 736–754)

        result = 31 * result + disabledUncheckedThumbColor.hashCode()
        result = 31 * result + disabledUncheckedTrackColor.hashCode()
        result = 31 * result + disabledUncheckedBorderColor.hashCode()
        result = 31 * result + disabledUncheckedIconColor.hashCode()
        return result
    }
}

/* @VisibleForTesting */
internal val ThumbDiameter
    get() = SwitchTokens.SelectedHandleWidth
internal val UncheckedThumbDiameter
    get() = SwitchTokens.UnselectedHandleWidth

private val SwitchWidth
    get() = SwitchTokens.TrackWidth
private val SwitchHeight
    get() = SwitchTokens.TrackHeight


Sources: [live-androidx-material3-material3-material3-switch-lines-736-source](https://android.googlesource.com/platform/frameworks/support/+/75856eb147ebe0f9b37f5aa3ae3023d023fd54ce/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)
