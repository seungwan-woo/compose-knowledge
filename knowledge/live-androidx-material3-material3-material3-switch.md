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
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 1
    endLine: 35
    sha256: f339a8f6858f0378199b4a659fd13dd4dc8cd1c074f97dd0e70db647c26e36c2
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
      import androidx.compose.animation.core.SnapSpec
      import androidx.compose.foundation.background
      import androidx.compose.foundation.border
      import androidx.compose.foundation.indication
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
  - id: live-androidx-material3-material3-material3-switch-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 106
    endLine: 140
    sha256: 692f172bdd35f0dd3487ae361239586209ce70f8fd1764306ab289f2a89826a5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          trackShape: Shape,
          thumbColor: Color,
          iconColor: Color,
          trackColor: Color,
          borderColor: Color,
          interactionSource: MutableInteractionSource?,
      ) {
          @Suppress("NAME_SHADOWING")
          val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

          // TODO: Add Swipeable modifier b/223797571
          val toggleableModifier =
              if (onCheckedChange != null) {
                  Modifier.minimumInteractiveComponentSize()
                      .toggleable(
  - id: live-androidx-material3-material3-material3-switch-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 141
    endLine: 175
    sha256: b557fe0eac0413aa716fe320a6baf0d46b497f41fc14340d1b92d7aae0785449
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  .wrapContentSize(Alignment.Center)
                  .requiredSize(SwitchWidth, SwitchHeight)
  - id: live-androidx-material3-material3-material3-switch-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 176
    endLine: 210
    sha256: 605809de62fe5c90d4e085113816eb14d8fff7f2df1eedc085e6dc46a6a6b62d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                                  // TODO Load the motionScheme tokens from the component tokens file
                                  animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),
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
  - id: live-androidx-material3-material3-material3-switch-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 211
    endLine: 245
    sha256: 2e4df5263564fc8f90e588a34cc0b41bf02da26641c6b5c94fadc6dedb574132
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      }

      private data class ThumbElement(
          val interactionSource: InteractionSource,
          val checked: Boolean,
          val animationSpec: FiniteAnimationSpec<Float>,
      ) : ModifierNodeElement<ThumbNode>() {
          override fun create() = ThumbNode(interactionSource, checked, animationSpec)

          override fun update(node: ThumbNode) {
              node.interactionSource = interactionSource
              if (node.checked != checked) {
                  node.invalidateMeasurement()
              }
              node.checked = checked
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
          var animationSpec: FiniteAnimationSpec<Float>,
      ) : Modifier.Node(), LayoutModifierNode {

          override val shouldAutoInvalidate: Boolean
              get() = false
  - id: live-androidx-material3-material3-material3-switch-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 246
    endLine: 280
    sha256: a60cb1f3a863af560fc10a7dccc2cbdab41f275ea17b931cf213f60f4c9fab1d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          private var isPressed = false
          private var offsetAnim: Animatable<Float, AnimationVector1D>? = null
          private var sizeAnim: Animatable<Float, AnimationVector1D>? = null
          private var initialOffset: Float = Float.NaN
          private var initialSize: Float = Float.NaN

          override fun onAttach() {
              coroutineScope.launch {
                  var pressCount = 0
                  interactionSource.interactions.collect { interaction ->
                      when (interaction) {
                          is PressInteraction.Press -> pressCount++
                          is PressInteraction.Release -> pressCount--
                          is PressInteraction.Cancel -> pressCount--
                      }
                      val pressed = pressCount > 0
                      if (isPressed != pressed) {
                          isPressed = pressed
                          invalidateMeasurement()
                      }
                  }
              }
          }

          override fun onReset() {
              super.onReset()
              offsetAnim = null
              sizeAnim = null
              initialSize = Float.NaN
              initialOffset = Float.NaN
          }

          override fun MeasureScope.measure(
              measurable: Measurable,
  - id: live-androidx-material3-material3-material3-switch-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 281
    endLine: 315
    sha256: c7125d7716aadcb75663aa219f931cb2d243c50c9b1a28bedca3747e6ac326e0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              constraints: Constraints,
          ): MeasureResult {
              val hasContent =
                  measurable.maxIntrinsicHeight(constraints.maxWidth) != 0 &&
                      measurable.maxIntrinsicWidth(constraints.maxHeight) != 0
              val size =
                  when {
                      isPressed -> SwitchTokens.PressedHandleWidth
                      hasContent || checked -> ThumbDiameter
                      else -> UncheckedThumbDiameter
                  }.toPx()

              val actualSize = (sizeAnim?.value ?: size).toInt()
              val placeable = measurable.measure(Constraints.fixed(actualSize, actualSize))
              val thumbPaddingStart = (SwitchHeight - size.toDp()) / 2f
              val minBound = thumbPaddingStart.toPx()
              val thumbPathLength = (SwitchWidth - ThumbDiameter) - ThumbPadding
              val maxBound = thumbPathLength.toPx()
              val offset =
                  when {
                      isPressed && checked -> maxBound - TrackOutlineWidth.toPx()
                      isPressed && !checked -> TrackOutlineWidth.toPx()
                      checked -> maxBound
                      else -> minBound
                  }

              if (sizeAnim?.targetValue != size) {
                  coroutineScope.launch {
                      sizeAnim?.animateTo(size, if (isPressed) SnapSpec else animationSpec)
                  }
              }

              if (offsetAnim?.targetValue != offset) {
                  coroutineScope.launch {
                      offsetAnim?.animateTo(offset, if (isPressed) SnapSpec else animationSpec)
  - id: live-androidx-material3-material3-material3-switch-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 316
    endLine: 350
    sha256: 57fbe6e53a60eec5fd1bcf417811d33f2278bd7fd2859314f77cb15e7ff65e7c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }
              }

              if (initialSize.isNaN() && initialOffset.isNaN()) {
                  initialSize = size
                  initialOffset = offset
              }

              return layout(actualSize, actualSize) {
                  placeable.placeRelative(offsetAnim?.value?.toInt() ?: offset.toInt(), 0)
              }
          }

          fun update() {
              if (sizeAnim == null && !initialSize.isNaN()) {
                  sizeAnim = Animatable(initialSize)
              }

              if (offsetAnim == null && !initialOffset.isNaN()) offsetAnim = Animatable(initialOffset)
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
  - id: live-androidx-material3-material3-material3-switch-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 351
    endLine: 378
    sha256: 6427fce4814e747938c8586da848aef5f6cccaf99c3c1b5d581cde35488f085c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              checkedIconColor: Color = SwitchTokens.SelectedIconColor.value,
              uncheckedThumbColor: Color = SwitchTokens.UnselectedHandleColor.value,
              uncheckedTrackColor: Color = SwitchTokens.UnselectedTrackColor.value,
              uncheckedBorderColor: Color = SwitchTokens.UnselectedFocusTrackOutlineColor.value,
              uncheckedIconColor: Color = SwitchTokens.UnselectedIconColor.value,
              disabledCheckedThumbColor: Color =
                  SwitchTokens.DisabledSelectedHandleColor.value
  - id: live-androidx-material3-material3-material3-switch-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 36
    endLine: 70
    sha256: 67c03616a54d7e57240d242e673afc859ef17e9eec4b52e31c82eeaf53a7fd46
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.material3.tokens.SwitchTokens.TrackOutlineWidth
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.remember
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
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp
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
  - id: live-androidx-material3-material3-material3-switch-lines-379-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 379
    endLine: 413
    sha256: ea6b8a55f4dd1929f403d95e774c86e9beabf1edb28a8d445c899bccc88112a8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              SwitchColors(
                  checkedThumbColor = checkedThumbColor,
                  checkedTrackColor = checkedTrackColor,
                  checkedBorderColor = checkedBorderColor,
                  checkedIconColor = checkedIconColor,
                  uncheckedThumbColor = uncheckedThumbColor,
                  uncheckedTrackColor = uncheckedTrackColor,
  - id: live-androidx-material3-material3-material3-switch-lines-414-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 414
    endLine: 447
    sha256: a40a5eb1227041606b5d751353b94b803fdbda91a2c3ef35fbbb8b5321eaf139
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                                      .compositeOver(surface),
                              disabledCheckedTrackColor =
                                  fromToken(SwitchTokens.DisabledSelectedTrackColor)
                                      .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                      .compositeOver(surface),
                              disabledCheckedBorderColor = Color.Transparent,
  - id: live-androidx-material3-material3-material3-switch-lines-448-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 448
    endLine: 482
    sha256: 8ba93bea29818388341819b944aba370e6e6c8b5d465f0eddc3cc21515244337
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
       * Represents the colors used by a [Switch] in different states
       *
       * @param checkedThumbColor the color used for the thumb when enabled and checked
       * @param checkedTrackColor the color used for the track when enabled and checked
       * @param checkedBorderColor the color used for the border when enabled and checked
       * @param checkedIconColor the color used for the icon when enabled and checked
  - id: live-androidx-material3-material3-material3-switch-lines-483-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 483
    endLine: 517
    sha256: 19c409eecc06467ee34d0634e815fedea89ac221656ba22721bd709d917d4ad3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
          public val disabledCheckedIconColor: Color,
          public val disabledUncheckedThumbColor: Color,
          public val disabledUncheckedTrackColor: Color,
          public val disabledUncheckedBorderColor: Color,
          public val disabledUncheckedIconColor: Color,
      ) {
  - id: live-androidx-material3-material3-material3-switch-lines-518-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 518
    endLine: 551
    sha256: be2674aadf029c12a77f477f923983b37c9c80a9db58bd0059af5d347bfea245
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                  uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
                  uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
                  disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
                  disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
                  disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },
  - id: live-androidx-material3-material3-material3-switch-lines-552-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 552
    endLine: 586
    sha256: 7c30b992d8d11bcd86bdbe0e11f0f4efea9acb586b953b569e83188421fcaf79
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
                  if (checked) checkedTrackColor else uncheckedTrackColor
              } else {
                  if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
              }
  - id: live-androidx-material3-material3-material3-switch-lines-587-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 587
    endLine: 621
    sha256: 5c99bc6ea748e729de338c93bd15be1b3b080bef9b53de8091534e40e84bb5da
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              if (other == null || other !is SwitchColors) return false

              if (checkedThumbColor != other.checkedThumbColor) return false
              if (checkedTrackColor != other.checkedTrackColor) return false
              if (checkedBorderColor != other.checkedBorderColor) return false
  - id: live-androidx-material3-material3-material3-switch-lines-622-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 622
    endLine: 656
    sha256: e44c9d5987fc51e4e4eb4d2eaaf0d58db091fe182f6bd5db8e91da0f00865403
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
              result = 31 * result + disabledUncheckedThumbColor.hashCode()
              result = 31 * result + disabledUncheckedTrackColor.hashCode()
              result = 31 * result + disabledUncheckedBorderColor.hashCode()
              result = 31 * result + disabledUncheckedIconColor.hashCode()
              return result
  - id: live-androidx-material3-material3-material3-switch-lines-657-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 657
    endLine: 672
    sha256: b748fdaaa15fe95d87dc57e51249d82075fa45b462a42c8d423e81d2694d695b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
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
      private val ThumbPadding = (SwitchHeight - ThumbDiameter) / 2
      private val SnapSpec = SnapSpec<Float>()
  - id: live-androidx-material3-material3-material3-switch-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt
    startLine: 71
    endLine: 105
    sha256: f219b93d93253655a3cc111714667d6c8a76da106aff5b1c298dcf5f8eeae67a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-141
      title: androidx.compose.material3 Switch.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-176
      title: androidx.compose.material3 Switch.kt source (lines 176–210)
      aliases: []
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
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-351
      title: androidx.compose.material3 Switch.kt source (lines 351–378)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-36
      title: androidx.compose.material3 Switch.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-379
      title: androidx.compose.material3 Switch.kt source (lines 379–413)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-379-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-414
      title: androidx.compose.material3 Switch.kt source (lines 414–447)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-414-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-448
      title: androidx.compose.material3 Switch.kt source (lines 448–482)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-448-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-483
      title: androidx.compose.material3 Switch.kt source (lines 483–517)
      aliases:
        - androidx.compose.material3.SwitchDefaults
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-483-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-518
      title: androidx.compose.material3 Switch.kt source (lines 518–551)
      aliases:
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-518-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-552
      title: androidx.compose.material3 Switch.kt source (lines 552–586)
      aliases:
        - androidx.compose.material3.Switch
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-552-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-587
      title: androidx.compose.material3 Switch.kt source (lines 587–621)
      aliases:
        - androidx.compose.material3.Switch
        - androidx.compose.material3.SwitchColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-587-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-622
      title: androidx.compose.material3 Switch.kt source (lines 622–656)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-622-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-switch-lines-657
      title: androidx.compose.material3 Switch.kt source (lines 657–672)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-switch-lines-657-source
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
import androidx.compose.animation.core.SnapSpec
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.indication
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

Sources: [live-androidx-material3-material3-material3-switch-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 106–140)

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
    trackShape: Shape,
    thumbColor: Color,
    iconColor: Color,
    trackColor: Color,
    borderColor: Color,
    interactionSource: MutableInteractionSource?,
) {
    @Suppress("NAME_SHADOWING")
    val interactionSource = interactionSource ?: remember { MutableInteractionSource() }

    // TODO: Add Swipeable modifier b/223797571
    val toggleableModifier =
        if (onCheckedChange != null) {
            Modifier.minimumInteractiveComponentSize()
                .toggleable(

Sources: [live-androidx-material3-material3-material3-switch-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 141–175)

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
            .wrapContentSize(Alignment.Center)
            .requiredSize(SwitchWidth, SwitchHeight)

Sources: [live-androidx-material3-material3-material3-switch-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 176–210)

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
                            // TODO Load the motionScheme tokens from the component tokens file
                            animationSpec = MotionSchemeKeyTokens.FastSpatial.value(),
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

Sources: [live-androidx-material3-material3-material3-switch-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 211–245)

}

private data class ThumbElement(
    val interactionSource: InteractionSource,
    val checked: Boolean,
    val animationSpec: FiniteAnimationSpec<Float>,
) : ModifierNodeElement<ThumbNode>() {
    override fun create() = ThumbNode(interactionSource, checked, animationSpec)

    override fun update(node: ThumbNode) {
        node.interactionSource = interactionSource
        if (node.checked != checked) {
            node.invalidateMeasurement()
        }
        node.checked = checked
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
    var animationSpec: FiniteAnimationSpec<Float>,
) : Modifier.Node(), LayoutModifierNode {

    override val shouldAutoInvalidate: Boolean
        get() = false

Sources: [live-androidx-material3-material3-material3-switch-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 246–280)


    private var isPressed = false
    private var offsetAnim: Animatable<Float, AnimationVector1D>? = null
    private var sizeAnim: Animatable<Float, AnimationVector1D>? = null
    private var initialOffset: Float = Float.NaN
    private var initialSize: Float = Float.NaN

    override fun onAttach() {
        coroutineScope.launch {
            var pressCount = 0
            interactionSource.interactions.collect { interaction ->
                when (interaction) {
                    is PressInteraction.Press -> pressCount++
                    is PressInteraction.Release -> pressCount--
                    is PressInteraction.Cancel -> pressCount--
                }
                val pressed = pressCount > 0
                if (isPressed != pressed) {
                    isPressed = pressed
                    invalidateMeasurement()
                }
            }
        }
    }

    override fun onReset() {
        super.onReset()
        offsetAnim = null
        sizeAnim = null
        initialSize = Float.NaN
        initialOffset = Float.NaN
    }

    override fun MeasureScope.measure(
        measurable: Measurable,

Sources: [live-androidx-material3-material3-material3-switch-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 281–315)

        constraints: Constraints,
    ): MeasureResult {
        val hasContent =
            measurable.maxIntrinsicHeight(constraints.maxWidth) != 0 &&
                measurable.maxIntrinsicWidth(constraints.maxHeight) != 0
        val size =
            when {
                isPressed -> SwitchTokens.PressedHandleWidth
                hasContent || checked -> ThumbDiameter
                else -> UncheckedThumbDiameter
            }.toPx()

        val actualSize = (sizeAnim?.value ?: size).toInt()
        val placeable = measurable.measure(Constraints.fixed(actualSize, actualSize))
        val thumbPaddingStart = (SwitchHeight - size.toDp()) / 2f
        val minBound = thumbPaddingStart.toPx()
        val thumbPathLength = (SwitchWidth - ThumbDiameter) - ThumbPadding
        val maxBound = thumbPathLength.toPx()
        val offset =
            when {
                isPressed && checked -> maxBound - TrackOutlineWidth.toPx()
                isPressed && !checked -> TrackOutlineWidth.toPx()
                checked -> maxBound
                else -> minBound
            }

        if (sizeAnim?.targetValue != size) {
            coroutineScope.launch {
                sizeAnim?.animateTo(size, if (isPressed) SnapSpec else animationSpec)
            }
        }

        if (offsetAnim?.targetValue != offset) {
            coroutineScope.launch {
                offsetAnim?.animateTo(offset, if (isPressed) SnapSpec else animationSpec)

Sources: [live-androidx-material3-material3-material3-switch-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 316–350)

            }
        }

        if (initialSize.isNaN() && initialOffset.isNaN()) {
            initialSize = size
            initialOffset = offset
        }

        return layout(actualSize, actualSize) {
            placeable.placeRelative(offsetAnim?.value?.toInt() ?: offset.toInt(), 0)
        }
    }

    fun update() {
        if (sizeAnim == null && !initialSize.isNaN()) {
            sizeAnim = Animatable(initialSize)
        }

        if (offsetAnim == null && !initialOffset.isNaN()) offsetAnim = Animatable(initialOffset)
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

Sources: [live-androidx-material3-material3-material3-switch-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 351–378)

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
        checkedIconColor: Color = SwitchTokens.SelectedIconColor.value,
        uncheckedThumbColor: Color = SwitchTokens.UnselectedHandleColor.value,
        uncheckedTrackColor: Color = SwitchTokens.UnselectedTrackColor.value,
        uncheckedBorderColor: Color = SwitchTokens.UnselectedFocusTrackOutlineColor.value,
        uncheckedIconColor: Color = SwitchTokens.UnselectedIconColor.value,
        disabledCheckedThumbColor: Color =
            SwitchTokens.DisabledSelectedHandleColor.value

Sources: [live-androidx-material3-material3-material3-switch-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 36–70)

import androidx.compose.material3.tokens.SwitchTokens.TrackOutlineWidth
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.remember
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
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
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

Sources: [live-androidx-material3-material3-material3-switch-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 379–413)

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
        SwitchColors(
            checkedThumbColor = checkedThumbColor,
            checkedTrackColor = checkedTrackColor,
            checkedBorderColor = checkedBorderColor,
            checkedIconColor = checkedIconColor,
            uncheckedThumbColor = uncheckedThumbColor,
            uncheckedTrackColor = uncheckedTrackColor,

Sources: [live-androidx-material3-material3-material3-switch-lines-379-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 414–447)

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
                                .compositeOver(surface),
                        disabledCheckedTrackColor =
                            fromToken(SwitchTokens.DisabledSelectedTrackColor)
                                .copy(alpha = SwitchTokens.DisabledTrackOpacity)
                                .compositeOver(surface),
                        disabledCheckedBorderColor = Color.Transparent,

Sources: [live-androidx-material3-material3-material3-switch-lines-414-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 448–482)

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
 * Represents the colors used by a [Switch] in different states
 *
 * @param checkedThumbColor the color used for the thumb when enabled and checked
 * @param checkedTrackColor the color used for the track when enabled and checked
 * @param checkedBorderColor the color used for the border when enabled and checked
 * @param checkedIconColor the color used for the icon when enabled and checked

Sources: [live-androidx-material3-material3-material3-switch-lines-448-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 483–517)

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
    public val disabledCheckedIconColor: Color,
    public val disabledUncheckedThumbColor: Color,
    public val disabledUncheckedTrackColor: Color,
    public val disabledUncheckedBorderColor: Color,
    public val disabledUncheckedIconColor: Color,
) {

Sources: [live-androidx-material3-material3-material3-switch-lines-483-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 518–551)

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
            uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
            uncheckedIconColor.takeOrElse { this.uncheckedIconColor },
            disabledCheckedThumbColor.takeOrElse { this.disabledCheckedThumbColor },
            disabledCheckedTrackColor.takeOrElse { this.disabledCheckedTrackColor },
            disabledCheckedBorderColor.takeOrElse { this.disabledCheckedBorderColor },

Sources: [live-androidx-material3-material3-material3-switch-lines-518-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 552–586)

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
            if (checked) checkedTrackColor else uncheckedTrackColor
        } else {
            if (checked) disabledCheckedTrackColor else disabledUncheckedTrackColor
        }


Sources: [live-androidx-material3-material3-material3-switch-lines-552-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 587–621)

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
        if (other == null || other !is SwitchColors) return false

        if (checkedThumbColor != other.checkedThumbColor) return false
        if (checkedTrackColor != other.checkedTrackColor) return false
        if (checkedBorderColor != other.checkedBorderColor) return false

Sources: [live-androidx-material3-material3-material3-switch-lines-587-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 622–656)

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
        result = 31 * result + disabledUncheckedThumbColor.hashCode()
        result = 31 * result + disabledUncheckedTrackColor.hashCode()
        result = 31 * result + disabledUncheckedBorderColor.hashCode()
        result = 31 * result + disabledUncheckedIconColor.hashCode()
        return result

Sources: [live-androidx-material3-material3-material3-switch-lines-622-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 657–672)

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
private val ThumbPadding = (SwitchHeight - ThumbDiameter) / 2
private val SnapSpec = SnapSpec<Float>()


Sources: [live-androidx-material3-material3-material3-switch-lines-657-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)

## androidx.compose.material3 Switch.kt source (lines 71–105)

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

Sources: [live-androidx-material3-material3-material3-switch-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Switch.kt)
