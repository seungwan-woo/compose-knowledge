---
type: reference
title: androidx.compose.material3 Checkbox.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-checkbox-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 1
    endLine: 35
    sha256: 962df9d5e0d280d289e231fed80621800a407ab97d58cb20a6ba6e2f496dd0f3
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

      package androidx.compose.material3

      import androidx.compose.animation.animateColorAsState
      import androidx.compose.animation.core.AnimationSpec
      import androidx.compose.animation.core.animateFloat
      import androidx.compose.animation.core.snap
      import androidx.compose.animation.core.updateTransition
      import androidx.compose.foundation.Canvas
      import androidx.compose.foundation.interaction.Interaction
      import androidx.compose.foundation.interaction.MutableInteractionSource
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.requiredSize
      import androidx.compose.foundation.layout.wrapContentSize
      import androidx.compose.foundation.selection.triStateToggleable
      import androidx.compose.foundation.shape.RoundedCornerShape
      import androidx.compose.material3.tokens.CheckboxTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
  - id: live-androidx-material3-material3-material3-checkbox-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 106
    endLine: 140
    sha256: 11cfb91bca59cc06ff61c54eb0af6d3ab8b78e7b4c4ba63c614ea38f1931d532
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design checkbox](https://m3.material.io/components/checkbox/overview)
       *
       * Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on
       * or off.
       *
       * ![Checkbox
       * image](https://developer.android.com/images/reference/androidx/compose/material3/checkbox.png)
       *
       * This Checkbox function offers greater flexibility in visual customization. Using the [Stroke]
       * parameters, you can control the appearance of both the checkmark and the box that surrounds it.
       *
       * A sample of a `Checkbox` that uses a [Stroke] with rounded [StrokeCap] and
       * [androidx.compose.ui.graphics.StrokeJoin]:
       *
       * @sample androidx.compose.material3.samples.CheckboxRoundedStrokesSample
       * @param checked whether this checkbox is checked or unchecked
       * @param onCheckedChange called when this checkbox is clicked. If `null`, then this checkbox will
       *   not be interactable, unless something else handles its input events and updates its state.
       * @param checkmarkStroke stroke for the checkmark.
       * @param outlineStroke stroke for the checkmark's box outline. Note that this stroke is applied
       *   when drawing the outline's rounded rectangle, so attributions such as
       *   [androidx.compose.ui.graphics.StrokeJoin] will be ignored.
       * @param modifier the [Modifier] to be applied to this checkbox
       * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
  - id: live-androidx-material3-material3-material3-checkbox-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 141
    endLine: 175
    sha256: e1a50d0333b2687a1c20510bdc23feeabb6d9b76614381e875f93b51b74d026e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   different states. See [CheckboxDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
       *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @see [TriStateCheckbox] if you require support for an indeterminate state.
       */
      @Composable
      public fun Checkbox(
          checked: Boolean,
          onCheckedChange: ((Boolean) -> Unit)?,
          checkmarkStroke: Stroke,
          outlineStroke: Stroke,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: CheckboxColors = CheckboxDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          CheckboxImpl(
              state = ToggleableState(checked),
              onClick = wrapOnCheckedChange(checked, onCheckedChange),
              checkmarkStroke = checkmarkStroke,
              outlineStroke = outlineStroke,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design checkbox](https://m3.material.io/components/checkbox/guidelines)
       *
       * Checkboxes can have a parent-child relationship with other checkboxes. When the parent checkbox
       * is checked, all child checkboxes are checked. If a parent checkbox is unchecked, all child
  - id: live-androidx-material3-material3-material3-checkbox-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 176
    endLine: 210
    sha256: 608c8fb55d1ae5ee77b164564de64efb10aa49f9f64b6fc50075cdf1f3e9f831
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * checkboxes are unchecked. If some, but not all, child checkboxes are checked, the parent checkbox
       * becomes an indeterminate checkbox.
       *
       * ![Checkbox
       * image](https://developer.android.com/images/reference/androidx/compose/material3/indeterminate-checkbox.png)
       *
       * @sample androidx.compose.material3.samples.TriStateCheckboxSample
       * @param state whether this checkbox is checked, unchecked, or in an indeterminate state
       * @param onClick called when this checkbox is clicked. If `null`, then this checkbox will not be
       *   interactable, unless something else handles its input events and updates its [state].
       * @param modifier the [Modifier] to be applied to this checkbox
       * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
       *   different states. See [CheckboxDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
       *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @see [Checkbox] if you want a simple component that represents Boolean state
       */
      @Composable
      public fun TriStateCheckbox(
          state: ToggleableState,
          onClick: (() -> Unit)?,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: CheckboxColors = CheckboxDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          CheckboxImpl(
              state = state,
              onClick = onClick,
              checkmarkStroke = null,
  - id: live-androidx-material3-material3-material3-checkbox-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 211
    endLine: 245
    sha256: 76e700a3d7ccf0aa64504e9052b1eec2f48a89b926d75732ce5c35361c85f78d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              outlineStroke = null,
              modifier = modifier,
              enabled = enabled,
              colors = colors,
              interactionSource = interactionSource,
          )
      }

      /**
       * [Material Design checkbox](https://m3.material.io/components/checkbox/guidelines)
       *
       * Checkboxes can have a parent-child relationship with other checkboxes. When the parent checkbox
       * is checked, all child checkboxes are checked. If a parent checkbox is unchecked, all child
       * checkboxes are unchecked. If some, but not all, child checkboxes are checked, the parent checkbox
       * becomes an indeterminate checkbox.
       *
       * ![Checkbox
       * image](https://developer.android.com/images/reference/androidx/compose/material3/indeterminate-checkbox.png)
       *
       * This Checkbox function offers greater flexibility in visual customization. Using the [Stroke]
       * parameters, you can control the appearance of both the checkmark and the box that surrounds it.
       *
       * A sample of a `TriStateCheckbox` that uses a [Stroke] with rounded [StrokeCap] and
       * [androidx.compose.ui.graphics.StrokeJoin]:
       *
       * @sample androidx.compose.material3.samples.TriStateCheckboxRoundedStrokesSample
       * @param state whether this checkbox is checked, unchecked, or in an indeterminate state
       * @param onClick called when this checkbox is clicked. If `null`, then this checkbox will not be
       *   interactable, unless something else handles its input events and updates its [state].
       * @param checkmarkStroke stroke for the checkmark.
       * @param outlineStroke stroke for the checkmark's box outline. Note that this stroke is applied
       *   when drawing the outline's rounded rectangle, so attributions such as
       *   [androidx.compose.ui.graphics.StrokeJoin] will be ignored.
       * @param modifier the [Modifier] to be applied to this checkbox
       * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
  - id: live-androidx-material3-material3-material3-checkbox-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 246
    endLine: 280
    sha256: bf10de98f5764a76f7f81f5cfa6fb6a3c7e4d0ded740b784b0c0a13c032ae8a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
       *   different states. See [CheckboxDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
       *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @see [Checkbox] if you want a simple component that represents Boolean state
       */
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun TriStateCheckbox(
          state: ToggleableState,
          onClick: (() -> Unit)?,
          checkmarkStroke: Stroke,
          outlineStroke: Stroke,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: CheckboxColors = CheckboxDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          CheckboxImpl(
              enabled = enabled,
              state = state,
              modifier = modifier,
              colors = colors,
              checkmarkStroke = checkmarkStroke,
              outlineStroke = outlineStroke,
              onClick = onClick,
              interactionSource = interactionSource,
          )
      }

      /** Defaults used in [Checkbox] and [TriStateCheckbox]. */
  - id: live-androidx-material3-material3-material3-checkbox-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 281
    endLine: 315
    sha256: cf160d3a0212e0da2af56e526cfc3bb1ca6eaa3b130ea94829cb19c5aea02cfc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      public object CheckboxDefaults {
          /**
           * Creates a [CheckboxColors] that will animate between the provided colors according to the
           * Material specification.
           */
          @Composable
          public fun colors(): CheckboxColors = MaterialTheme.colorScheme.defaultCheckboxColors

          /**
           * Creates a [CheckboxColors] that will animate between the provided colors according to the
           * Material specification.
           *
           * @param checkedColor the color that will be used for the border and box when checked
           * @param uncheckedColor color that will be used for the border when unchecked. By default, the
           *   inner box is transparent when unchecked.
           * @param checkmarkColor color that will be used for the checkmark when checked
           * @param disabledCheckedColor color that will be used for the box and border when disabled and
           *   checked
           * @param disabledUncheckedColor color that will be used for the border when disabled and
           *   unchecked. By default, the inner box is transparent when unchecked.
           * @param disabledIndeterminateColor color that will be used for the box and border in a
           *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state
           */
          @Composable
          public fun colors(
              checkedColor: Color = Color.Unspecified,
              uncheckedColor: Color = Color.Unspecified,
              checkmarkColor: Color = Color.Unspecified,
              disabledCheckedColor: Color = Color.Unspecified,
              disabledUncheckedColor: Color = Color.Unspecified,
              disabledIndeterminateColor: Color = Color.Unspecified,
          ): CheckboxColors =
              MaterialTheme.colorScheme.defaultCheckboxColors.copy(
                  checkedCheckmarkColor = checkmarkColor,
                  uncheckedCheckmarkColor = Color.Transparent,
  - id: live-androidx-material3-material3-material3-checkbox-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 316
    endLine: 350
    sha256: de662956dc2574e090aea105e5a53ca3674ce6c434277c1a1b6311c59510c6a9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  disabledCheckmarkColor = checkmarkColor,
                  checkedBoxColor = checkedColor,
                  uncheckedBoxColor = Color.Transparent,
                  disabledCheckedBoxColor = disabledCheckedColor,
                  disabledUncheckedBoxColor = Color.Transparent,
                  disabledIndeterminateBoxColor = disabledIndeterminateColor,
                  checkedBorderColor = checkedColor,
                  uncheckedBorderColor = uncheckedColor,
                  disabledBorderColor = disabledCheckedColor,
                  disabledUncheckedBorderColor = disabledUncheckedColor,
                  disabledIndeterminateBorderColor = disabledIndeterminateColor,
              )

          /**
           * Creates a [CheckboxColors] that will animate between the provided colors according to the
           * Material specification.
           *
           * @param checkedCheckmarkColor color that will be used for the checkmark when checked
           * @param uncheckedCheckmarkColor color that will be used for the checkmark when unchecked
           * @param disabledCheckmarkColor color that will be used for the checkmark when disabled
           * @param checkedBoxColor the color that will be used for the box when checked
           * @param uncheckedBoxColor color that will be used for the box when unchecked
           * @param disabledCheckedBoxColor color that will be used for the box when disabled and checked
           * @param disabledUncheckedBoxColor color that will be used for the box when disabled and
           *   unchecked
           * @param disabledIndeterminateBoxColor color that will be used for the box and border in a
           *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state.
           * @param checkedBorderColor color that will be used for the border when checked
           * @param uncheckedBorderColor color that will be used for the border when unchecked
           * @param disabledBorderColor color that will be used for the border when disabled and checked
           * @param disabledUncheckedBorderColor color that will be used for the border when disabled and
           *   unchecked
           * @param disabledIndeterminateBorderColor color that will be used for the border when disabled
           *   and in an [ToggleableState.Indeterminate] state.
           */
  - id: live-androidx-material3-material3-material3-checkbox-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 351
    endLine: 385
    sha256: e1f038ca8b2687ed49d58b4c7ef0fb5b9218db1afe582fc8ae866bb1bff24421
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Composable
          public fun colors(
              checkedCheckmarkColor: Color = Color.Unspecified,
              uncheckedCheckmarkColor: Color = Color.Unspecified,
              disabledCheckmarkColor: Color = Color.Unspecified,
              checkedBoxColor: Color = Color.Unspecified,
              uncheckedBoxColor: Color = Color.Unspecified,
              disabledCheckedBoxColor: Color = Color.Unspecified,
              disabledUncheckedBoxColor: Color = Color.Unspecified,
              disabledIndeterminateBoxColor: Color = Color.Unspecified,
              checkedBorderColor: Color = Color.Unspecified,
              uncheckedBorderColor: Color = Color.Unspecified,
              disabledBorderColor: Color = Color.Unspecified,
              disabledUncheckedBorderColor: Color = Color.Unspecified,
              disabledIndeterminateBorderColor: Color = Color.Unspecified,
          ): CheckboxColors =
              MaterialTheme.colorScheme.defaultCheckboxColors.copy(
                  checkedCheckmarkColor = checkedCheckmarkColor,
                  uncheckedCheckmarkColor = uncheckedCheckmarkColor,
                  disabledCheckmarkColor = disabledCheckmarkColor,
                  checkedBoxColor = checkedBoxColor,
                  uncheckedBoxColor = uncheckedBoxColor,
                  disabledCheckedBoxColor = disabledCheckedBoxColor,
                  disabledUncheckedBoxColor = disabledUncheckedBoxColor,
                  disabledIndeterminateBoxColor = disabledIndeterminateBoxColor,
                  checkedBorderColor = checkedBorderColor,
                  uncheckedBorderColor = uncheckedBorderColor,
                  disabledBorderColor = disabledBorderColor,
                  disabledUncheckedBorderColor = disabledUncheckedBorderColor,
                  disabledIndeterminateBorderColor = disabledIndeterminateBorderColor,
              )

          internal val ColorScheme.defaultCheckboxColors: CheckboxColors
              get() {
                  return defaultCheckboxColorsCached
  - id: live-androidx-material3-material3-material3-checkbox-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 36
    endLine: 70
    sha256: 5962cc7af66b98c0157a45e49b82bc02bbc8879ea3cd3cf65bbd6bd31eb3f593
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.rememberUpdatedState
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.geometry.CornerRadius
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.geometry.Size
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Path
      import androidx.compose.ui.graphics.PathMeasure
      import androidx.compose.ui.graphics.StrokeCap
      import androidx.compose.ui.graphics.drawscope.DrawScope
      import androidx.compose.ui.graphics.drawscope.Fill
      import androidx.compose.ui.graphics.drawscope.Stroke
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.state.ToggleableState
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.util.lerp
      import kotlin.math.floor
      import kotlin.math.max

      /**
       * [Material Design checkbox](https://m3.material.io/components/checkbox/overview)
       *
       * Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on
       * or off.
       *
       * ![Checkbox
       * image](https://developer.android.com/images/reference/androidx/compose/material3/checkbox.png)
       *
       * Simple Checkbox sample:
  - id: live-androidx-material3-material3-material3-checkbox-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 386
    endLine: 416
    sha256: 61ab839ff0ab11f88cfb64db1f99dcc7e8c553265241ee928313f2d58a76ca2d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      ?: CheckboxColors(
                              checkedCheckmarkColor = fromToken(CheckboxTokens.SelectedIconColor),
                              uncheckedCheckmarkColor = Color.Transparent,
                              disabledCheckmarkColor =
                                  fromToken(CheckboxTokens.SelectedDisabledIconColor),
                              checkedBoxColor = fromToken(CheckboxTokens.SelectedContainerColor),
                              uncheckedBoxColor = Color.Transparent,
                              disabledCheckedBoxColor =
                                  fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                      .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                              disabledUncheckedBoxColor = Color.Transparent,
                              disabledIndeterminateBoxColor =
                                  fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                      .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                              checkedBorderColor = fromToken(CheckboxTokens.SelectedContainerColor),
                              uncheckedBorderColor = fromToken(CheckboxTokens.UnselectedOutlineColor),
                              disabledBorderColor =
                                  fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                      .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                              disabledUncheckedBorderColor =
                                  fromToken(CheckboxTokens.UnselectedDisabledOutlineColor)
                                      .copy(alpha = CheckboxTokens.UnselectedDisabledContainerOpacity),
                              disabledIndeterminateBorderColor =
                                  fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                      .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                          )
                          .also { defaultCheckboxColorsCached = it }
              }

          /**
           * The default stroke width for a [Checkbox]. This width will be used for the checkmark when the
  - id: live-androidx-material3-material3-material3-checkbox-lines-417-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 417
    endLine: 451
    sha256: b499503baccd1f987110a7c2170a58e5ff321c36066ca63c186561ed63707be6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * `Checkbox` is in a checked or indeterminate states, or for the outline when it's unchecked.
           */
          public val StrokeWidth: Dp = 2.dp
      }

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      private fun CheckboxImpl(
          modifier: Modifier,
          enabled: Boolean,
          state: ToggleableState,
          colors: CheckboxColors,
          checkmarkStroke: Stroke?,
          outlineStroke: Stroke?,
          onClick: (() -> Unit)?,
          interactionSource: MutableInteractionSource?,
      ) {
          val isCheckboxStylingFixEnabled = ComposeMaterial3Flags.isCheckboxStylingFixEnabled
          CheckboxImpl(
              enabled = enabled,
              state = state,
              modifier = modifier,
              checkmarkColor =
                  if (isCheckboxStylingFixEnabled) {
                      colors.checkmarkColor(enabled, state)
                  } else {
                      colors.checkmarkColor(state)
                  },
              boxColor = colors.boxColor(enabled, state),
              borderColor = colors.borderColor(enabled, state),
              rippleColor =
                  if (isCheckboxStylingFixEnabled) {
                      colors.indicatorColor(state)
                  } else {
                      Color.Unspecified
  - id: live-androidx-material3-material3-material3-checkbox-lines-452-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 452
    endLine: 486
    sha256: d4f71a28302ec5b0a0abb83c3da1d499d049b2e8f9e29b6bbba95396088a2ac3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  },
              checkmarkStroke = checkmarkStroke,
              outlineStroke = outlineStroke,
              containerSize =
                  if (isCheckboxStylingFixEnabled) {
                      CheckboxTokens.ContainerSize
                  } else {
                      CheckboxSize
                  },
              padding =
                  if (isCheckboxStylingFixEnabled) {
                      Dp.Unspecified
                  } else {
                      CheckboxDefaultPadding
                  },
              onClick = onClick,
              interactionSource = interactionSource,
          )
      }

      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      private fun CheckboxImpl(
          enabled: Boolean,
          state: ToggleableState,
          modifier: Modifier,
          checkmarkColor: Color,
          boxColor: Color,
          borderColor: Color,
          rippleColor: Color,
          checkmarkStroke: Stroke?,
          outlineStroke: Stroke?,
          containerSize: Dp,
          padding: Dp,
          onClick: (() -> Unit)?,
  - id: live-androidx-material3-material3-material3-checkbox-lines-487-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 487
    endLine: 521
    sha256: cc17aec44f8248389c6f88a1ee185973f4d015fd7f1e8f089009408314042943
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          interactionSource: MutableInteractionSource?,
      ) {
          val indication =
              ripple(
                  bounded = false,
                  radius = CheckboxTokens.StateLayerSize / 2,
                  color = rippleColor,
                  focusRingShape = RoundedCornerShape(25),
              )

          val canvasModifier =
              modifier
                  .then(
                      if (onClick != null) {
                          Modifier.minimumInteractiveComponentSize()
                      } else {
                          Modifier
                      }
                  )
                  .then(
                      if (onClick != null) {
                          Modifier.triStateToggleable(
                              state = state,
                              onClick = onClick,
                              enabled = enabled,
                              role = Role.Checkbox,
                              interactionSource = interactionSource,
                              indication = indication,
                          )
                      } else {
                          Modifier
                      }
                  )
                  .then(
                      if (padding == Dp.Unspecified) {
  - id: live-androidx-material3-material3-material3-checkbox-lines-522-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 522
    endLine: 556
    sha256: 7936cf57035909e6f2b4113861a7eb4c32b3cf0ef6de8a2bc02bf0d73d6242a2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          Modifier
                      } else {
                          Modifier.padding(padding)
                      }
                  )
                  .wrapContentSize(Alignment.Center)
                  .requiredSize(containerSize)

          val transition = updateTransition(state)
          val defaultAnimationSpec = MotionSchemeKeyTokens.DefaultSpatial.value<Float>()
          val checkDrawFraction =
              transition.animateFloat(
                  transitionSpec = {
                      when {
                          // TODO Load the motionScheme tokens from the component tokens file
                          initialState == ToggleableState.Off -> defaultAnimationSpec
                          targetState == ToggleableState.Off -> snap(delayMillis = SnapAnimationDelay)
                          else -> defaultAnimationSpec
                      }
                  }
              ) {
                  when (it) {
                      ToggleableState.On -> 1f
                      ToggleableState.Off -> 0f
                      ToggleableState.Indeterminate -> 1f
                  }
              }

          val checkCenterGravitationShiftFraction =
              transition.animateFloat(
                  transitionSpec = {
                      when {
                          // TODO Load the motionScheme tokens from the component tokens file
                          initialState == ToggleableState.Off -> snap()
                          targetState == ToggleableState.Off -> snap(delayMillis = SnapAnimationDelay)
  - id: live-androidx-material3-material3-material3-checkbox-lines-557-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 557
    endLine: 591
    sha256: 1f2ff1aa8787671b425ffc1e1de2afc88e5aa96a083e422064f92e0e1ec069a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          else -> defaultAnimationSpec
                      }
                  }
              ) {
                  when (it) {
                      ToggleableState.On -> 0f
                      ToggleableState.Off -> 0f
                      ToggleableState.Indeterminate -> 1f
                  }
              }
          val checkCache = remember { CheckDrawingCache() }
          val colorAnimationSpec = colorAnimationSpecForState(state)
          val animatedCheckboxColor by animateColorAsState(checkmarkColor, colorAnimationSpec)
          val animatedBoxColor by
              if (enabled) {
                  animateColorAsState(boxColor, colorAnimationSpec)
              } else {
                  // If not enabled 'snap' to the disabled state, as there should be no animations between
                  // enabled / disabled.
                  rememberUpdatedState(boxColor)
              }
          val animatedBorderColor by
              if (enabled) {
                  animateColorAsState(borderColor, colorAnimationSpec)
              } else {
                  // If not enabled 'snap' to the disabled state, as there should be no animations between
                  // enabled / disabled.
                  rememberUpdatedState(borderColor)
              }
          val strokeWidthPx =
              if (outlineStroke == null || checkmarkStroke == null) {
                  with(LocalDensity.current) { floor(CheckboxDefaults.StrokeWidth.toPx()) }
              } else {
                  0f
              }
  - id: live-androidx-material3-material3-material3-checkbox-lines-592-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 592
    endLine: 626
    sha256: f10b8b6847a114f770ac0007736448c64835a8f24f59dc8b2c666381b03f7eb8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          Canvas(canvasModifier) {
              drawBox(
                  boxColor = animatedBoxColor,
                  borderColor = animatedBorderColor,
                  radius = RadiusSize.toPx(),
                  stroke = outlineStroke ?: Stroke(width = strokeWidthPx),
              )
              drawCheck(
                  checkColor = animatedCheckboxColor,
                  checkFraction = checkDrawFraction.value,
                  crossCenterGravitation = checkCenterGravitationShiftFraction.value,
                  stroke = checkmarkStroke ?: Stroke(width = strokeWidthPx, cap = StrokeCap.Square),
                  drawingCache = checkCache,
              )
          }
      }

      private fun DrawScope.drawBox(boxColor: Color, borderColor: Color, radius: Float, stroke: Stroke) {
          val halfStrokeWidth = stroke.width / 2.0f
          val checkboxSize = size.width
          if (boxColor == borderColor) {
              drawRoundRect(
                  boxColor,
                  size = Size(checkboxSize, checkboxSize),
                  cornerRadius = CornerRadius(radius),
                  style = Fill,
              )
          } else {
              drawRoundRect(
                  boxColor,
                  topLeft = Offset(stroke.width, stroke.width),
                  size = Size(checkboxSize - stroke.width * 2, checkboxSize - stroke.width * 2),
                  cornerRadius = CornerRadius(max(0f, radius - stroke.width)),
                  style = Fill,
  - id: live-androidx-material3-material3-material3-checkbox-lines-627-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 627
    endLine: 661
    sha256: 2f25cbc7c6f6ab7f0dab1633adb13e22042893aa40eb826fe9777ba9ab344712
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
              drawRoundRect(
                  borderColor,
                  topLeft = Offset(halfStrokeWidth, halfStrokeWidth),
                  size = Size(checkboxSize - stroke.width, checkboxSize - stroke.width),
                  cornerRadius = CornerRadius(radius - halfStrokeWidth),
                  style = stroke,
              )
          }
      }

      @OptIn(ExperimentalMaterial3Api::class)
      private fun DrawScope.drawCheck(
          checkColor: Color,
          checkFraction: Float,
          crossCenterGravitation: Float,
          stroke: Stroke,
          drawingCache: CheckDrawingCache,
      ) {
          val isCheckboxStylingFixEnabled = ComposeMaterial3Flags.isCheckboxStylingFixEnabled
          val width = size.width
          val checkCrossX = 0.4f
          val checkCrossY = if (isCheckboxStylingFixEnabled) 0.65f else 0.7f
          val leftX = if (isCheckboxStylingFixEnabled) 0.25f else 0.2f
          val leftY = 0.5f
          val rightX = if (isCheckboxStylingFixEnabled) 0.75f else 0.8f
          val rightY = 0.3f

          val gravitatedCrossX = lerp(checkCrossX, 0.5f, crossCenterGravitation)
          val gravitatedCrossY = lerp(checkCrossY, 0.5f, crossCenterGravitation)
          // gravitate only Y for end to achieve center line
          val gravitatedLeftY = lerp(leftY, 0.5f, crossCenterGravitation)
          val gravitatedRightY = lerp(rightY, 0.5f, crossCenterGravitation)

          with(drawingCache) {
  - id: live-androidx-material3-material3-material3-checkbox-lines-662-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 662
    endLine: 696
    sha256: 2166b19b8eae35be62711bae8597b37e4e64020b5e80967d9584782a5b0d6613
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              checkPath.rewind()
              checkPath.moveTo(width * leftX, width * gravitatedLeftY)
              checkPath.lineTo(width * gravitatedCrossX, width * gravitatedCrossY)
              checkPath.lineTo(width * rightX, width * gravitatedRightY)
              // TODO: replace with proper declarative non-android alternative when ready (b/158188351)
              pathMeasure.setPath(checkPath, false)
              pathToDraw.rewind()
              pathMeasure.getSegment(0f, pathMeasure.length * checkFraction, pathToDraw, true)
          }
          drawPath(drawingCache.pathToDraw, checkColor, style = stroke)
      }

      @Immutable
      private class CheckDrawingCache(
          val checkPath: Path = Path(),
          val pathMeasure: PathMeasure = PathMeasure(),
          val pathToDraw: Path = Path(),
      )

      /**
       * Represents the colors used by the three different sections (checkmark, box, and border) of a
       * [Checkbox] or [TriStateCheckbox] in different states.
       *
       * @param checkedCheckmarkColor color that will be used for the checkmark when checked
       * @param uncheckedCheckmarkColor color that will be used for the checkmark when unchecked
       * @param checkedBoxColor the color that will be used for the box when checked
       * @param uncheckedBoxColor color that will be used for the box when unchecked
       * @param disabledCheckedBoxColor color that will be used for the box when disabled and checked
       * @param disabledUncheckedBoxColor color that will be used for the box when disabled and unchecked
       * @param disabledIndeterminateBoxColor color that will be used for the box and border in a
       *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state.
       * @param checkedBorderColor color that will be used for the border when checked
       * @param uncheckedBorderColor color that will be used for the border when unchecked
       * @param disabledBorderColor color that will be used for the border when disabled and checked
       * @param disabledUncheckedBorderColor color that will be used for the border when disabled and
  - id: live-androidx-material3-material3-material3-checkbox-lines-697-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 697
    endLine: 731
    sha256: 1c2ffad9bea7fc4e72fa6a98d7e8d51854455b70b22fb03bbb12781e424fd43a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   unchecked
       * @param disabledIndeterminateBorderColor color that will be used for the border when disabled and
       *   in an [ToggleableState.Indeterminate] state.
       * @param disabledCheckmarkColor color that will be used for the checkmark when disabled
       * @constructor create an instance with arbitrary colors, see [CheckboxDefaults.colors] for the
       *   default implementation that follows Material specifications.
       */
      @Immutable
      public class CheckboxColors
      public constructor(
          public val checkedCheckmarkColor: Color,
          public val uncheckedCheckmarkColor: Color,
          public val checkedBoxColor: Color,
          public val uncheckedBoxColor: Color,
          public val disabledCheckedBoxColor: Color,
          public val disabledUncheckedBoxColor: Color,
          public val disabledIndeterminateBoxColor: Color,
          public val checkedBorderColor: Color,
          public val uncheckedBorderColor: Color,
          public val disabledBorderColor: Color,
          public val disabledUncheckedBorderColor: Color,
          public val disabledIndeterminateBorderColor: Color,
          public val disabledCheckmarkColor: Color,
      ) {
          @Deprecated(
              message =
                  "This constructor is deprecated. Use the primary constructor that includes 'disabledCheckmarkColor'",
              level = DeprecationLevel.WARNING,
          )
          public constructor(
              checkedCheckmarkColor: Color,
              uncheckedCheckmarkColor: Color,
              checkedBoxColor: Color,
              uncheckedBoxColor: Color,
              disabledCheckedBoxColor: Color,
  - id: live-androidx-material3-material3-material3-checkbox-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 71
    endLine: 105
    sha256: 43abb6aabaeff6a418acfe642b80cd1f4c767ef78e01d930b548e6b209f7ac86
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.material3.samples.CheckboxSample
       *
       * Combined Checkbox with Text sample:
       *
       * @sample androidx.compose.material3.samples.CheckboxWithTextSample
       * @param checked whether this checkbox is checked or unchecked
       * @param onCheckedChange called when this checkbox is clicked. If `null`, then this checkbox will
       *   not be interactable, unless something else handles its input events and updates its state.
       * @param modifier the [Modifier] to be applied to this checkbox
       * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
       *   respond to user input, and it will appear visually disabled and disabled to accessibility
       *   services.
       * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
       *   different states. See [CheckboxDefaults.colors].
       * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
       *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
       *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
       *   still happen internally.
       * @see [TriStateCheckbox] if you require support for an indeterminate state.
       */
      @Composable
      public fun Checkbox(
          checked: Boolean,
          onCheckedChange: ((Boolean) -> Unit)?,
          modifier: Modifier = Modifier,
          enabled: Boolean = true,
          colors: CheckboxColors = CheckboxDefaults.colors(),
          interactionSource: MutableInteractionSource? = null,
      ) {
          CheckboxImpl(
              state = ToggleableState(checked),
              onClick = wrapOnCheckedChange(checked, onCheckedChange),
              checkmarkStroke = null,
              outlineStroke = null,
  - id: live-androidx-material3-material3-material3-checkbox-lines-732-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 732
    endLine: 766
    sha256: 314adff03ae85ccf276128a17cbbec1a99debfec2fa5fcc25e4593ff41fa1a27
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              disabledUncheckedBoxColor: Color,
              disabledIndeterminateBoxColor: Color,
              checkedBorderColor: Color,
              uncheckedBorderColor: Color,
              disabledBorderColor: Color,
              disabledUncheckedBorderColor: Color,
              disabledIndeterminateBorderColor: Color,
          ) : this(
              checkedCheckmarkColor = checkedCheckmarkColor,
              uncheckedCheckmarkColor = uncheckedCheckmarkColor,
              checkedBoxColor = checkedBoxColor,
              uncheckedBoxColor = uncheckedBoxColor,
              disabledCheckedBoxColor = disabledCheckedBoxColor,
              disabledUncheckedBoxColor = disabledUncheckedBoxColor,
              disabledIndeterminateBoxColor = disabledIndeterminateBoxColor,
              checkedBorderColor = checkedBorderColor,
              uncheckedBorderColor = uncheckedBorderColor,
              disabledBorderColor = disabledBorderColor,
              disabledUncheckedBorderColor = disabledUncheckedBorderColor,
              disabledIndeterminateBorderColor = disabledIndeterminateBorderColor,
              disabledCheckmarkColor = checkedCheckmarkColor,
          )

          /**
           * Returns a copy of this CheckboxColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          @Deprecated(
              message =
                  "This function is deprecated. Use 'copy' that includes 'disabledCheckmarkColor' instead",
              level = DeprecationLevel.HIDDEN,
          )
          public fun copy(
              checkedCheckmarkColor: Color = this.checkedCheckmarkColor,
              uncheckedCheckmarkColor: Color = this.uncheckedCheckmarkColor,
  - id: live-androidx-material3-material3-material3-checkbox-lines-767-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 767
    endLine: 799
    sha256: 8ab2577aa6c2f11dcd3d5415856aa61cb4dd546a0a3161e31da545b4d110d575
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              checkedBoxColor: Color = this.checkedBoxColor,
              uncheckedBoxColor: Color = this.uncheckedBoxColor,
              disabledCheckedBoxColor: Color = this.disabledCheckedBoxColor,
              disabledUncheckedBoxColor: Color = this.disabledUncheckedBoxColor,
              disabledIndeterminateBoxColor: Color = this.disabledIndeterminateBoxColor,
              checkedBorderColor: Color = this.checkedBorderColor,
              uncheckedBorderColor: Color = this.uncheckedBorderColor,
              disabledBorderColor: Color = this.disabledBorderColor,
              disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
              disabledIndeterminateBorderColor: Color = this.disabledIndeterminateBorderColor,
          ): CheckboxColors =
              CheckboxColors(
                  checkedCheckmarkColor = checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
                  uncheckedCheckmarkColor =
                      uncheckedCheckmarkColor.takeOrElse { this.uncheckedCheckmarkColor },
                  checkedBoxColor = checkedBoxColor.takeOrElse { this.checkedBoxColor },
                  uncheckedBoxColor = uncheckedBoxColor.takeOrElse { this.uncheckedBoxColor },
                  disabledCheckedBoxColor =
                      disabledCheckedBoxColor.takeOrElse { this.disabledCheckedBoxColor },
                  disabledUncheckedBoxColor =
                      disabledUncheckedBoxColor.takeOrElse { this.disabledUncheckedBoxColor },
                  disabledIndeterminateBoxColor =
                      disabledIndeterminateBoxColor.takeOrElse { this.disabledIndeterminateBoxColor },
                  checkedBorderColor = checkedBorderColor.takeOrElse { this.checkedBorderColor },
                  uncheckedBorderColor = uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
                  disabledBorderColor = disabledBorderColor.takeOrElse { this.disabledBorderColor },
                  disabledUncheckedBorderColor =
                      disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
                  disabledIndeterminateBorderColor =
                      disabledIndeterminateBorderColor.takeOrElse {
                          this.disabledIndeterminateBorderColor
                      },
                  disabledCheckmarkColor =
  - id: live-androidx-material3-material3-material3-checkbox-lines-800-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 800
    endLine: 834
    sha256: 22c0f74a26925439fb7a44fb8b34dfb8a1709027aa79ab5fdc8c18a0d60503ce
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
              )

          /**
           * Returns a copy of this CheckboxColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              checkedCheckmarkColor: Color = this.checkedCheckmarkColor,
              uncheckedCheckmarkColor: Color = this.uncheckedCheckmarkColor,
              checkedBoxColor: Color = this.checkedBoxColor,
              uncheckedBoxColor: Color = this.uncheckedBoxColor,
              disabledCheckedBoxColor: Color = this.disabledCheckedBoxColor,
              disabledUncheckedBoxColor: Color = this.disabledUncheckedBoxColor,
              disabledIndeterminateBoxColor: Color = this.disabledIndeterminateBoxColor,
              checkedBorderColor: Color = this.checkedBorderColor,
              uncheckedBorderColor: Color = this.uncheckedBorderColor,
              disabledBorderColor: Color = this.disabledBorderColor,
              disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
              disabledIndeterminateBorderColor: Color = this.disabledIndeterminateBorderColor,
              disabledCheckmarkColor: Color = this.disabledCheckmarkColor,
          ): CheckboxColors =
              CheckboxColors(
                  checkedCheckmarkColor = checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
                  uncheckedCheckmarkColor =
                      uncheckedCheckmarkColor.takeOrElse { this.uncheckedCheckmarkColor },
                  checkedBoxColor = checkedBoxColor.takeOrElse { this.checkedBoxColor },
                  uncheckedBoxColor = uncheckedBoxColor.takeOrElse { this.uncheckedBoxColor },
                  disabledCheckedBoxColor =
                      disabledCheckedBoxColor.takeOrElse { this.disabledCheckedBoxColor },
                  disabledUncheckedBoxColor =
                      disabledUncheckedBoxColor.takeOrElse { this.disabledUncheckedBoxColor },
                  disabledIndeterminateBoxColor =
                      disabledIndeterminateBoxColor.takeOrElse { this.disabledIndeterminateBoxColor },
                  checkedBorderColor = checkedBorderColor.takeOrElse { this.checkedBorderColor },
  - id: live-androidx-material3-material3-material3-checkbox-lines-835-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 835
    endLine: 869
    sha256: 1f954ce7023edca709cbec17537bfb221519ba9121fa5b476c99ad2f6fcd4fd7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  uncheckedBorderColor = uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
                  disabledBorderColor = disabledBorderColor.takeOrElse { this.disabledBorderColor },
                  disabledUncheckedBorderColor =
                      disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
                  disabledIndeterminateBorderColor =
                      disabledIndeterminateBorderColor.takeOrElse {
                          this.disabledIndeterminateBorderColor
                      },
                  disabledCheckmarkColor =
                      disabledCheckmarkColor.takeOrElse { this.disabledCheckmarkColor },
              )

          /**
           * Represents the color used for the checkbox container's background indication, depending on
           * [state].
           *
           * @param state the [ToggleableState] of the checkbox
           */
          internal fun indicatorColor(state: ToggleableState): Color =
              if (state == ToggleableState.Off) {
                  uncheckedBoxColor
              } else {
                  checkedBoxColor
              }

          /**
           * Represents the color used for the checkmark inside the checkbox, depending on [enabled] and
           * [state].
           *
           * @param enabled whether the checkbox is enabled or not
           * @param state the [ToggleableState] of the checkbox
           */
          internal fun checkmarkColor(enabled: Boolean, state: ToggleableState): Color =
              if (enabled) {
                  if (state == ToggleableState.Off) {
  - id: live-androidx-material3-material3-material3-checkbox-lines-870-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 870
    endLine: 904
    sha256: dd898fb0ade7b2893cd860a116ccbedde6579dbf80ec96788aceb63005fd5c9b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      uncheckedCheckmarkColor
                  } else {
                      checkedCheckmarkColor
                  }
              } else {
                  disabledCheckmarkColor
              }

          /**
           * Represents the color used for the checkmark inside the checkbox, depending on [state].
           *
           * @param state the [ToggleableState] of the checkbox
           */
          internal fun checkmarkColor(state: ToggleableState): Color {
              return if (state == ToggleableState.Off) {
                  uncheckedCheckmarkColor
              } else {
                  checkedCheckmarkColor
              }
          }

          /**
           * Represents the color used for the box (background) of the checkbox, depending on [enabled]
           * and [state].
           *
           * @param enabled whether the checkbox is enabled or not
           * @param state the [ToggleableState] of the checkbox
           */
          internal fun boxColor(enabled: Boolean, state: ToggleableState): Color =
              if (enabled) {
                  when (state) {
                      ToggleableState.On,
                      ToggleableState.Indeterminate -> checkedBoxColor
                      ToggleableState.Off -> uncheckedBoxColor
                  }
  - id: live-androidx-material3-material3-material3-checkbox-lines-905-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 905
    endLine: 939
    sha256: 1dadf0be588b12d123b2290275a976f1d907307e2ba5726f3bacd62d14ba2d11
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              } else {
                  when (state) {
                      ToggleableState.On -> disabledCheckedBoxColor
                      ToggleableState.Indeterminate -> disabledIndeterminateBoxColor
                      ToggleableState.Off -> disabledUncheckedBoxColor
                  }
              }

          /**
           * Represents the color used for the border of the checkbox, depending on [enabled] and [state].
           *
           * @param enabled whether the checkbox is enabled or not
           * @param state the [ToggleableState] of the checkbox
           */
          internal fun borderColor(enabled: Boolean, state: ToggleableState): Color =
              if (enabled) {
                  when (state) {
                      ToggleableState.On,
                      ToggleableState.Indeterminate -> checkedBorderColor
                      ToggleableState.Off -> uncheckedBorderColor
                  }
              } else {
                  when (state) {
                      ToggleableState.Indeterminate -> disabledIndeterminateBorderColor
                      ToggleableState.On -> disabledBorderColor
                      ToggleableState.Off -> disabledUncheckedBorderColor
                  }
              }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is CheckboxColors) return false

              if (checkedCheckmarkColor != other.checkedCheckmarkColor) return false
              if (uncheckedCheckmarkColor != other.uncheckedCheckmarkColor) return false
  - id: live-androidx-material3-material3-material3-checkbox-lines-940-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 940
    endLine: 974
    sha256: fad235cb56af3fce5dc0e2ac7f9d6ab66556ad5657ff63a77d6896c61835e25a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              if (disabledCheckmarkColor != other.disabledCheckmarkColor) return false
              if (checkedBoxColor != other.checkedBoxColor) return false
              if (uncheckedBoxColor != other.uncheckedBoxColor) return false
              if (disabledCheckedBoxColor != other.disabledCheckedBoxColor) return false
              if (disabledUncheckedBoxColor != other.disabledUncheckedBoxColor) return false
              if (disabledIndeterminateBoxColor != other.disabledIndeterminateBoxColor) return false
              if (checkedBorderColor != other.checkedBorderColor) return false
              if (uncheckedBorderColor != other.uncheckedBorderColor) return false
              if (disabledBorderColor != other.disabledBorderColor) return false
              if (disabledUncheckedBorderColor != other.disabledUncheckedBorderColor) return false
              if (disabledIndeterminateBorderColor != other.disabledIndeterminateBorderColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = checkedCheckmarkColor.hashCode()
              result = 31 * result + uncheckedCheckmarkColor.hashCode()
              result = 31 * result + disabledCheckmarkColor.hashCode()
              result = 31 * result + checkedBoxColor.hashCode()
              result = 31 * result + uncheckedBoxColor.hashCode()
              result = 31 * result + disabledCheckedBoxColor.hashCode()
              result = 31 * result + disabledUncheckedBoxColor.hashCode()
              result = 31 * result + disabledIndeterminateBoxColor.hashCode()
              result = 31 * result + checkedBorderColor.hashCode()
              result = 31 * result + uncheckedBorderColor.hashCode()
              result = 31 * result + disabledBorderColor.hashCode()
              result = 31 * result + disabledUncheckedBorderColor.hashCode()
              result = 31 * result + disabledIndeterminateBorderColor.hashCode()
              return result
          }
      }

      /** Returns the color [AnimationSpec] for the given state. */
      @Composable
  - id: live-androidx-material3-material3-material3-checkbox-lines-975-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt
    startLine: 975
    endLine: 1005
    sha256: fdf6d0c0709e9a444da05bfab4aaf1b3a3cea5ca0ff990f1ea3f89f4ac2d17a5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      private fun colorAnimationSpecForState(state: ToggleableState): AnimationSpec<Color> {
          // TODO Load the motionScheme tokens from the component tokens file
          return if (state == ToggleableState.Off) {
              // Box out
              MotionSchemeKeyTokens.FastEffects.value()
          } else {
              // Box in
              MotionSchemeKeyTokens.DefaultEffects.value()
          }
      }

      private fun wrapOnCheckedChange(
          checked: Boolean,
          onCheckedChange: ((Boolean) -> Unit)?,
      ): (() -> Unit)? =
          if (onCheckedChange != null) {
              { onCheckedChange(!checked) }
          } else {
              null
          }

      private const val SnapAnimationDelay = 100

      // TODO(b/188529841): Update the padding and size when the Checkbox spec is finalized.
      private val CheckboxDefaultPadding
          get() = 2.dp
      private val CheckboxSize
          get() = 20.dp
      private val RadiusSize
          get() = 2.dp
compose:
  id: live-androidx-material3-material3-material3-checkbox
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-checkbox-lines-1
      title: androidx.compose.material3 Checkbox.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-106
      title: androidx.compose.material3 Checkbox.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-141
      title: androidx.compose.material3 Checkbox.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-176
      title: androidx.compose.material3 Checkbox.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-211
      title: androidx.compose.material3 Checkbox.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-246
      title: androidx.compose.material3 Checkbox.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-281
      title: androidx.compose.material3 Checkbox.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-316
      title: androidx.compose.material3 Checkbox.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-351
      title: androidx.compose.material3 Checkbox.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-36
      title: androidx.compose.material3 Checkbox.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Checkbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-386
      title: androidx.compose.material3 Checkbox.kt source (lines 386–416)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-417
      title: androidx.compose.material3 Checkbox.kt source (lines 417–451)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-417-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-452
      title: androidx.compose.material3 Checkbox.kt source (lines 452–486)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-452-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-487
      title: androidx.compose.material3 Checkbox.kt source (lines 487–521)
      aliases:
        - androidx.compose.material3.Checkbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-487-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-522
      title: androidx.compose.material3 Checkbox.kt source (lines 522–556)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-522-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-557
      title: androidx.compose.material3 Checkbox.kt source (lines 557–591)
      aliases:
        - androidx.compose.material3.CheckboxDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-557-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-592
      title: androidx.compose.material3 Checkbox.kt source (lines 592–626)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-592-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-627
      title: androidx.compose.material3 Checkbox.kt source (lines 627–661)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-627-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-662
      title: androidx.compose.material3 Checkbox.kt source (lines 662–696)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-662-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-697
      title: androidx.compose.material3 Checkbox.kt source (lines 697–731)
      aliases:
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-697-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-71
      title: androidx.compose.material3 Checkbox.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Checkbox
        - androidx.compose.material3.TriStateCheckbox
        - androidx.compose.material3.CheckboxDefaults
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-732
      title: androidx.compose.material3 Checkbox.kt source (lines 732–766)
      aliases:
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-732-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-767
      title: androidx.compose.material3 Checkbox.kt source (lines 767–799)
      aliases:
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-767-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-800
      title: androidx.compose.material3 Checkbox.kt source (lines 800–834)
      aliases:
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-800-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-835
      title: androidx.compose.material3 Checkbox.kt source (lines 835–869)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-835-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-870
      title: androidx.compose.material3 Checkbox.kt source (lines 870–904)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-870-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-905
      title: androidx.compose.material3 Checkbox.kt source (lines 905–939)
      aliases:
        - androidx.compose.material3.CheckboxColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-905-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-940
      title: androidx.compose.material3 Checkbox.kt source (lines 940–974)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-940-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-checkbox-lines-975
      title: androidx.compose.material3 Checkbox.kt source (lines 975–1005)
      aliases:
        - androidx.compose.material3.Checkbox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-checkbox-lines-975-source
      relatedIds: []
---

# androidx.compose.material3 Checkbox.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt

## androidx.compose.material3 Checkbox.kt source (lines 1–35)

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

package androidx.compose.material3

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.AnimationSpec
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.snap
import androidx.compose.animation.core.updateTransition
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.interaction.Interaction
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.requiredSize
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.selection.triStateToggleable
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.tokens.CheckboxTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable

Sources: [live-androidx-material3-material3-material3-checkbox-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 106–140)

        modifier = modifier,
        enabled = enabled,
        colors = colors,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design checkbox](https://m3.material.io/components/checkbox/overview)
 *
 * Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on
 * or off.
 *
 * ![Checkbox
 * image](https://developer.android.com/images/reference/androidx/compose/material3/checkbox.png)
 *
 * This Checkbox function offers greater flexibility in visual customization. Using the [Stroke]
 * parameters, you can control the appearance of both the checkmark and the box that surrounds it.
 *
 * A sample of a `Checkbox` that uses a [Stroke] with rounded [StrokeCap] and
 * [androidx.compose.ui.graphics.StrokeJoin]:
 *
 * @sample androidx.compose.material3.samples.CheckboxRoundedStrokesSample
 * @param checked whether this checkbox is checked or unchecked
 * @param onCheckedChange called when this checkbox is clicked. If `null`, then this checkbox will
 *   not be interactable, unless something else handles its input events and updates its state.
 * @param checkmarkStroke stroke for the checkmark.
 * @param outlineStroke stroke for the checkmark's box outline. Note that this stroke is applied
 *   when drawing the outline's rounded rectangle, so attributions such as
 *   [androidx.compose.ui.graphics.StrokeJoin] will be ignored.
 * @param modifier the [Modifier] to be applied to this checkbox
 * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in

Sources: [live-androidx-material3-material3-material3-checkbox-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 141–175)

 *   different states. See [CheckboxDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
 *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @see [TriStateCheckbox] if you require support for an indeterminate state.
 */
@Composable
public fun Checkbox(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    checkmarkStroke: Stroke,
    outlineStroke: Stroke,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: CheckboxColors = CheckboxDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    CheckboxImpl(
        state = ToggleableState(checked),
        onClick = wrapOnCheckedChange(checked, onCheckedChange),
        checkmarkStroke = checkmarkStroke,
        outlineStroke = outlineStroke,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design checkbox](https://m3.material.io/components/checkbox/guidelines)
 *
 * Checkboxes can have a parent-child relationship with other checkboxes. When the parent checkbox
 * is checked, all child checkboxes are checked. If a parent checkbox is unchecked, all child

Sources: [live-androidx-material3-material3-material3-checkbox-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 176–210)

 * checkboxes are unchecked. If some, but not all, child checkboxes are checked, the parent checkbox
 * becomes an indeterminate checkbox.
 *
 * ![Checkbox
 * image](https://developer.android.com/images/reference/androidx/compose/material3/indeterminate-checkbox.png)
 *
 * @sample androidx.compose.material3.samples.TriStateCheckboxSample
 * @param state whether this checkbox is checked, unchecked, or in an indeterminate state
 * @param onClick called when this checkbox is clicked. If `null`, then this checkbox will not be
 *   interactable, unless something else handles its input events and updates its [state].
 * @param modifier the [Modifier] to be applied to this checkbox
 * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
 *   different states. See [CheckboxDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
 *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @see [Checkbox] if you want a simple component that represents Boolean state
 */
@Composable
public fun TriStateCheckbox(
    state: ToggleableState,
    onClick: (() -> Unit)?,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: CheckboxColors = CheckboxDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    CheckboxImpl(
        state = state,
        onClick = onClick,
        checkmarkStroke = null,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 211–245)

        outlineStroke = null,
        modifier = modifier,
        enabled = enabled,
        colors = colors,
        interactionSource = interactionSource,
    )
}

/**
 * [Material Design checkbox](https://m3.material.io/components/checkbox/guidelines)
 *
 * Checkboxes can have a parent-child relationship with other checkboxes. When the parent checkbox
 * is checked, all child checkboxes are checked. If a parent checkbox is unchecked, all child
 * checkboxes are unchecked. If some, but not all, child checkboxes are checked, the parent checkbox
 * becomes an indeterminate checkbox.
 *
 * ![Checkbox
 * image](https://developer.android.com/images/reference/androidx/compose/material3/indeterminate-checkbox.png)
 *
 * This Checkbox function offers greater flexibility in visual customization. Using the [Stroke]
 * parameters, you can control the appearance of both the checkmark and the box that surrounds it.
 *
 * A sample of a `TriStateCheckbox` that uses a [Stroke] with rounded [StrokeCap] and
 * [androidx.compose.ui.graphics.StrokeJoin]:
 *
 * @sample androidx.compose.material3.samples.TriStateCheckboxRoundedStrokesSample
 * @param state whether this checkbox is checked, unchecked, or in an indeterminate state
 * @param onClick called when this checkbox is clicked. If `null`, then this checkbox will not be
 *   interactable, unless something else handles its input events and updates its [state].
 * @param checkmarkStroke stroke for the checkmark.
 * @param outlineStroke stroke for the checkmark's box outline. Note that this stroke is applied
 *   when drawing the outline's rounded rectangle, so attributions such as
 *   [androidx.compose.ui.graphics.StrokeJoin] will be ignored.
 * @param modifier the [Modifier] to be applied to this checkbox
 * @param enabled controls the enabled state of this checkbox. When `false`, this component will not

Sources: [live-androidx-material3-material3-material3-checkbox-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 246–280)

 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
 *   different states. See [CheckboxDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
 *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @see [Checkbox] if you want a simple component that represents Boolean state
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun TriStateCheckbox(
    state: ToggleableState,
    onClick: (() -> Unit)?,
    checkmarkStroke: Stroke,
    outlineStroke: Stroke,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: CheckboxColors = CheckboxDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    CheckboxImpl(
        enabled = enabled,
        state = state,
        modifier = modifier,
        colors = colors,
        checkmarkStroke = checkmarkStroke,
        outlineStroke = outlineStroke,
        onClick = onClick,
        interactionSource = interactionSource,
    )
}

/** Defaults used in [Checkbox] and [TriStateCheckbox]. */

Sources: [live-androidx-material3-material3-material3-checkbox-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 281–315)

public object CheckboxDefaults {
    /**
     * Creates a [CheckboxColors] that will animate between the provided colors according to the
     * Material specification.
     */
    @Composable
    public fun colors(): CheckboxColors = MaterialTheme.colorScheme.defaultCheckboxColors

    /**
     * Creates a [CheckboxColors] that will animate between the provided colors according to the
     * Material specification.
     *
     * @param checkedColor the color that will be used for the border and box when checked
     * @param uncheckedColor color that will be used for the border when unchecked. By default, the
     *   inner box is transparent when unchecked.
     * @param checkmarkColor color that will be used for the checkmark when checked
     * @param disabledCheckedColor color that will be used for the box and border when disabled and
     *   checked
     * @param disabledUncheckedColor color that will be used for the border when disabled and
     *   unchecked. By default, the inner box is transparent when unchecked.
     * @param disabledIndeterminateColor color that will be used for the box and border in a
     *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state
     */
    @Composable
    public fun colors(
        checkedColor: Color = Color.Unspecified,
        uncheckedColor: Color = Color.Unspecified,
        checkmarkColor: Color = Color.Unspecified,
        disabledCheckedColor: Color = Color.Unspecified,
        disabledUncheckedColor: Color = Color.Unspecified,
        disabledIndeterminateColor: Color = Color.Unspecified,
    ): CheckboxColors =
        MaterialTheme.colorScheme.defaultCheckboxColors.copy(
            checkedCheckmarkColor = checkmarkColor,
            uncheckedCheckmarkColor = Color.Transparent,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 316–350)

            disabledCheckmarkColor = checkmarkColor,
            checkedBoxColor = checkedColor,
            uncheckedBoxColor = Color.Transparent,
            disabledCheckedBoxColor = disabledCheckedColor,
            disabledUncheckedBoxColor = Color.Transparent,
            disabledIndeterminateBoxColor = disabledIndeterminateColor,
            checkedBorderColor = checkedColor,
            uncheckedBorderColor = uncheckedColor,
            disabledBorderColor = disabledCheckedColor,
            disabledUncheckedBorderColor = disabledUncheckedColor,
            disabledIndeterminateBorderColor = disabledIndeterminateColor,
        )

    /**
     * Creates a [CheckboxColors] that will animate between the provided colors according to the
     * Material specification.
     *
     * @param checkedCheckmarkColor color that will be used for the checkmark when checked
     * @param uncheckedCheckmarkColor color that will be used for the checkmark when unchecked
     * @param disabledCheckmarkColor color that will be used for the checkmark when disabled
     * @param checkedBoxColor the color that will be used for the box when checked
     * @param uncheckedBoxColor color that will be used for the box when unchecked
     * @param disabledCheckedBoxColor color that will be used for the box when disabled and checked
     * @param disabledUncheckedBoxColor color that will be used for the box when disabled and
     *   unchecked
     * @param disabledIndeterminateBoxColor color that will be used for the box and border in a
     *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state.
     * @param checkedBorderColor color that will be used for the border when checked
     * @param uncheckedBorderColor color that will be used for the border when unchecked
     * @param disabledBorderColor color that will be used for the border when disabled and checked
     * @param disabledUncheckedBorderColor color that will be used for the border when disabled and
     *   unchecked
     * @param disabledIndeterminateBorderColor color that will be used for the border when disabled
     *   and in an [ToggleableState.Indeterminate] state.
     */

Sources: [live-androidx-material3-material3-material3-checkbox-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 351–385)

    @Composable
    public fun colors(
        checkedCheckmarkColor: Color = Color.Unspecified,
        uncheckedCheckmarkColor: Color = Color.Unspecified,
        disabledCheckmarkColor: Color = Color.Unspecified,
        checkedBoxColor: Color = Color.Unspecified,
        uncheckedBoxColor: Color = Color.Unspecified,
        disabledCheckedBoxColor: Color = Color.Unspecified,
        disabledUncheckedBoxColor: Color = Color.Unspecified,
        disabledIndeterminateBoxColor: Color = Color.Unspecified,
        checkedBorderColor: Color = Color.Unspecified,
        uncheckedBorderColor: Color = Color.Unspecified,
        disabledBorderColor: Color = Color.Unspecified,
        disabledUncheckedBorderColor: Color = Color.Unspecified,
        disabledIndeterminateBorderColor: Color = Color.Unspecified,
    ): CheckboxColors =
        MaterialTheme.colorScheme.defaultCheckboxColors.copy(
            checkedCheckmarkColor = checkedCheckmarkColor,
            uncheckedCheckmarkColor = uncheckedCheckmarkColor,
            disabledCheckmarkColor = disabledCheckmarkColor,
            checkedBoxColor = checkedBoxColor,
            uncheckedBoxColor = uncheckedBoxColor,
            disabledCheckedBoxColor = disabledCheckedBoxColor,
            disabledUncheckedBoxColor = disabledUncheckedBoxColor,
            disabledIndeterminateBoxColor = disabledIndeterminateBoxColor,
            checkedBorderColor = checkedBorderColor,
            uncheckedBorderColor = uncheckedBorderColor,
            disabledBorderColor = disabledBorderColor,
            disabledUncheckedBorderColor = disabledUncheckedBorderColor,
            disabledIndeterminateBorderColor = disabledIndeterminateBorderColor,
        )

    internal val ColorScheme.defaultCheckboxColors: CheckboxColors
        get() {
            return defaultCheckboxColorsCached

Sources: [live-androidx-material3-material3-material3-checkbox-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 36–70)

import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.PathMeasure
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.state.ToggleableState
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.lerp
import kotlin.math.floor
import kotlin.math.max

/**
 * [Material Design checkbox](https://m3.material.io/components/checkbox/overview)
 *
 * Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on
 * or off.
 *
 * ![Checkbox
 * image](https://developer.android.com/images/reference/androidx/compose/material3/checkbox.png)
 *
 * Simple Checkbox sample:

Sources: [live-androidx-material3-material3-material3-checkbox-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 386–416)

                ?: CheckboxColors(
                        checkedCheckmarkColor = fromToken(CheckboxTokens.SelectedIconColor),
                        uncheckedCheckmarkColor = Color.Transparent,
                        disabledCheckmarkColor =
                            fromToken(CheckboxTokens.SelectedDisabledIconColor),
                        checkedBoxColor = fromToken(CheckboxTokens.SelectedContainerColor),
                        uncheckedBoxColor = Color.Transparent,
                        disabledCheckedBoxColor =
                            fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                        disabledUncheckedBoxColor = Color.Transparent,
                        disabledIndeterminateBoxColor =
                            fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                        checkedBorderColor = fromToken(CheckboxTokens.SelectedContainerColor),
                        uncheckedBorderColor = fromToken(CheckboxTokens.UnselectedOutlineColor),
                        disabledBorderColor =
                            fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                        disabledUncheckedBorderColor =
                            fromToken(CheckboxTokens.UnselectedDisabledOutlineColor)
                                .copy(alpha = CheckboxTokens.UnselectedDisabledContainerOpacity),
                        disabledIndeterminateBorderColor =
                            fromToken(CheckboxTokens.SelectedDisabledContainerColor)
                                .copy(alpha = CheckboxTokens.SelectedDisabledContainerOpacity),
                    )
                    .also { defaultCheckboxColorsCached = it }
        }

    /**
     * The default stroke width for a [Checkbox]. This width will be used for the checkmark when the

Sources: [live-androidx-material3-material3-material3-checkbox-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 417–451)

     * `Checkbox` is in a checked or indeterminate states, or for the outline when it's unchecked.
     */
    public val StrokeWidth: Dp = 2.dp
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun CheckboxImpl(
    modifier: Modifier,
    enabled: Boolean,
    state: ToggleableState,
    colors: CheckboxColors,
    checkmarkStroke: Stroke?,
    outlineStroke: Stroke?,
    onClick: (() -> Unit)?,
    interactionSource: MutableInteractionSource?,
) {
    val isCheckboxStylingFixEnabled = ComposeMaterial3Flags.isCheckboxStylingFixEnabled
    CheckboxImpl(
        enabled = enabled,
        state = state,
        modifier = modifier,
        checkmarkColor =
            if (isCheckboxStylingFixEnabled) {
                colors.checkmarkColor(enabled, state)
            } else {
                colors.checkmarkColor(state)
            },
        boxColor = colors.boxColor(enabled, state),
        borderColor = colors.borderColor(enabled, state),
        rippleColor =
            if (isCheckboxStylingFixEnabled) {
                colors.indicatorColor(state)
            } else {
                Color.Unspecified

Sources: [live-androidx-material3-material3-material3-checkbox-lines-417-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 452–486)

            },
        checkmarkStroke = checkmarkStroke,
        outlineStroke = outlineStroke,
        containerSize =
            if (isCheckboxStylingFixEnabled) {
                CheckboxTokens.ContainerSize
            } else {
                CheckboxSize
            },
        padding =
            if (isCheckboxStylingFixEnabled) {
                Dp.Unspecified
            } else {
                CheckboxDefaultPadding
            },
        onClick = onClick,
        interactionSource = interactionSource,
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun CheckboxImpl(
    enabled: Boolean,
    state: ToggleableState,
    modifier: Modifier,
    checkmarkColor: Color,
    boxColor: Color,
    borderColor: Color,
    rippleColor: Color,
    checkmarkStroke: Stroke?,
    outlineStroke: Stroke?,
    containerSize: Dp,
    padding: Dp,
    onClick: (() -> Unit)?,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-452-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 487–521)

    interactionSource: MutableInteractionSource?,
) {
    val indication =
        ripple(
            bounded = false,
            radius = CheckboxTokens.StateLayerSize / 2,
            color = rippleColor,
            focusRingShape = RoundedCornerShape(25),
        )

    val canvasModifier =
        modifier
            .then(
                if (onClick != null) {
                    Modifier.minimumInteractiveComponentSize()
                } else {
                    Modifier
                }
            )
            .then(
                if (onClick != null) {
                    Modifier.triStateToggleable(
                        state = state,
                        onClick = onClick,
                        enabled = enabled,
                        role = Role.Checkbox,
                        interactionSource = interactionSource,
                        indication = indication,
                    )
                } else {
                    Modifier
                }
            )
            .then(
                if (padding == Dp.Unspecified) {

Sources: [live-androidx-material3-material3-material3-checkbox-lines-487-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 522–556)

                    Modifier
                } else {
                    Modifier.padding(padding)
                }
            )
            .wrapContentSize(Alignment.Center)
            .requiredSize(containerSize)

    val transition = updateTransition(state)
    val defaultAnimationSpec = MotionSchemeKeyTokens.DefaultSpatial.value<Float>()
    val checkDrawFraction =
        transition.animateFloat(
            transitionSpec = {
                when {
                    // TODO Load the motionScheme tokens from the component tokens file
                    initialState == ToggleableState.Off -> defaultAnimationSpec
                    targetState == ToggleableState.Off -> snap(delayMillis = SnapAnimationDelay)
                    else -> defaultAnimationSpec
                }
            }
        ) {
            when (it) {
                ToggleableState.On -> 1f
                ToggleableState.Off -> 0f
                ToggleableState.Indeterminate -> 1f
            }
        }

    val checkCenterGravitationShiftFraction =
        transition.animateFloat(
            transitionSpec = {
                when {
                    // TODO Load the motionScheme tokens from the component tokens file
                    initialState == ToggleableState.Off -> snap()
                    targetState == ToggleableState.Off -> snap(delayMillis = SnapAnimationDelay)

Sources: [live-androidx-material3-material3-material3-checkbox-lines-522-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 557–591)

                    else -> defaultAnimationSpec
                }
            }
        ) {
            when (it) {
                ToggleableState.On -> 0f
                ToggleableState.Off -> 0f
                ToggleableState.Indeterminate -> 1f
            }
        }
    val checkCache = remember { CheckDrawingCache() }
    val colorAnimationSpec = colorAnimationSpecForState(state)
    val animatedCheckboxColor by animateColorAsState(checkmarkColor, colorAnimationSpec)
    val animatedBoxColor by
        if (enabled) {
            animateColorAsState(boxColor, colorAnimationSpec)
        } else {
            // If not enabled 'snap' to the disabled state, as there should be no animations between
            // enabled / disabled.
            rememberUpdatedState(boxColor)
        }
    val animatedBorderColor by
        if (enabled) {
            animateColorAsState(borderColor, colorAnimationSpec)
        } else {
            // If not enabled 'snap' to the disabled state, as there should be no animations between
            // enabled / disabled.
            rememberUpdatedState(borderColor)
        }
    val strokeWidthPx =
        if (outlineStroke == null || checkmarkStroke == null) {
            with(LocalDensity.current) { floor(CheckboxDefaults.StrokeWidth.toPx()) }
        } else {
            0f
        }

Sources: [live-androidx-material3-material3-material3-checkbox-lines-557-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 592–626)


    Canvas(canvasModifier) {
        drawBox(
            boxColor = animatedBoxColor,
            borderColor = animatedBorderColor,
            radius = RadiusSize.toPx(),
            stroke = outlineStroke ?: Stroke(width = strokeWidthPx),
        )
        drawCheck(
            checkColor = animatedCheckboxColor,
            checkFraction = checkDrawFraction.value,
            crossCenterGravitation = checkCenterGravitationShiftFraction.value,
            stroke = checkmarkStroke ?: Stroke(width = strokeWidthPx, cap = StrokeCap.Square),
            drawingCache = checkCache,
        )
    }
}

private fun DrawScope.drawBox(boxColor: Color, borderColor: Color, radius: Float, stroke: Stroke) {
    val halfStrokeWidth = stroke.width / 2.0f
    val checkboxSize = size.width
    if (boxColor == borderColor) {
        drawRoundRect(
            boxColor,
            size = Size(checkboxSize, checkboxSize),
            cornerRadius = CornerRadius(radius),
            style = Fill,
        )
    } else {
        drawRoundRect(
            boxColor,
            topLeft = Offset(stroke.width, stroke.width),
            size = Size(checkboxSize - stroke.width * 2, checkboxSize - stroke.width * 2),
            cornerRadius = CornerRadius(max(0f, radius - stroke.width)),
            style = Fill,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-592-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 627–661)

        )
        drawRoundRect(
            borderColor,
            topLeft = Offset(halfStrokeWidth, halfStrokeWidth),
            size = Size(checkboxSize - stroke.width, checkboxSize - stroke.width),
            cornerRadius = CornerRadius(radius - halfStrokeWidth),
            style = stroke,
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
private fun DrawScope.drawCheck(
    checkColor: Color,
    checkFraction: Float,
    crossCenterGravitation: Float,
    stroke: Stroke,
    drawingCache: CheckDrawingCache,
) {
    val isCheckboxStylingFixEnabled = ComposeMaterial3Flags.isCheckboxStylingFixEnabled
    val width = size.width
    val checkCrossX = 0.4f
    val checkCrossY = if (isCheckboxStylingFixEnabled) 0.65f else 0.7f
    val leftX = if (isCheckboxStylingFixEnabled) 0.25f else 0.2f
    val leftY = 0.5f
    val rightX = if (isCheckboxStylingFixEnabled) 0.75f else 0.8f
    val rightY = 0.3f

    val gravitatedCrossX = lerp(checkCrossX, 0.5f, crossCenterGravitation)
    val gravitatedCrossY = lerp(checkCrossY, 0.5f, crossCenterGravitation)
    // gravitate only Y for end to achieve center line
    val gravitatedLeftY = lerp(leftY, 0.5f, crossCenterGravitation)
    val gravitatedRightY = lerp(rightY, 0.5f, crossCenterGravitation)

    with(drawingCache) {

Sources: [live-androidx-material3-material3-material3-checkbox-lines-627-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 662–696)

        checkPath.rewind()
        checkPath.moveTo(width * leftX, width * gravitatedLeftY)
        checkPath.lineTo(width * gravitatedCrossX, width * gravitatedCrossY)
        checkPath.lineTo(width * rightX, width * gravitatedRightY)
        // TODO: replace with proper declarative non-android alternative when ready (b/158188351)
        pathMeasure.setPath(checkPath, false)
        pathToDraw.rewind()
        pathMeasure.getSegment(0f, pathMeasure.length * checkFraction, pathToDraw, true)
    }
    drawPath(drawingCache.pathToDraw, checkColor, style = stroke)
}

@Immutable
private class CheckDrawingCache(
    val checkPath: Path = Path(),
    val pathMeasure: PathMeasure = PathMeasure(),
    val pathToDraw: Path = Path(),
)

/**
 * Represents the colors used by the three different sections (checkmark, box, and border) of a
 * [Checkbox] or [TriStateCheckbox] in different states.
 *
 * @param checkedCheckmarkColor color that will be used for the checkmark when checked
 * @param uncheckedCheckmarkColor color that will be used for the checkmark when unchecked
 * @param checkedBoxColor the color that will be used for the box when checked
 * @param uncheckedBoxColor color that will be used for the box when unchecked
 * @param disabledCheckedBoxColor color that will be used for the box when disabled and checked
 * @param disabledUncheckedBoxColor color that will be used for the box when disabled and unchecked
 * @param disabledIndeterminateBoxColor color that will be used for the box and border in a
 *   [TriStateCheckbox] when disabled AND in an [ToggleableState.Indeterminate] state.
 * @param checkedBorderColor color that will be used for the border when checked
 * @param uncheckedBorderColor color that will be used for the border when unchecked
 * @param disabledBorderColor color that will be used for the border when disabled and checked
 * @param disabledUncheckedBorderColor color that will be used for the border when disabled and

Sources: [live-androidx-material3-material3-material3-checkbox-lines-662-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 697–731)

 *   unchecked
 * @param disabledIndeterminateBorderColor color that will be used for the border when disabled and
 *   in an [ToggleableState.Indeterminate] state.
 * @param disabledCheckmarkColor color that will be used for the checkmark when disabled
 * @constructor create an instance with arbitrary colors, see [CheckboxDefaults.colors] for the
 *   default implementation that follows Material specifications.
 */
@Immutable
public class CheckboxColors
public constructor(
    public val checkedCheckmarkColor: Color,
    public val uncheckedCheckmarkColor: Color,
    public val checkedBoxColor: Color,
    public val uncheckedBoxColor: Color,
    public val disabledCheckedBoxColor: Color,
    public val disabledUncheckedBoxColor: Color,
    public val disabledIndeterminateBoxColor: Color,
    public val checkedBorderColor: Color,
    public val uncheckedBorderColor: Color,
    public val disabledBorderColor: Color,
    public val disabledUncheckedBorderColor: Color,
    public val disabledIndeterminateBorderColor: Color,
    public val disabledCheckmarkColor: Color,
) {
    @Deprecated(
        message =
            "This constructor is deprecated. Use the primary constructor that includes 'disabledCheckmarkColor'",
        level = DeprecationLevel.WARNING,
    )
    public constructor(
        checkedCheckmarkColor: Color,
        uncheckedCheckmarkColor: Color,
        checkedBoxColor: Color,
        uncheckedBoxColor: Color,
        disabledCheckedBoxColor: Color,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-697-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 71–105)

 *
 * @sample androidx.compose.material3.samples.CheckboxSample
 *
 * Combined Checkbox with Text sample:
 *
 * @sample androidx.compose.material3.samples.CheckboxWithTextSample
 * @param checked whether this checkbox is checked or unchecked
 * @param onCheckedChange called when this checkbox is clicked. If `null`, then this checkbox will
 *   not be interactable, unless something else handles its input events and updates its state.
 * @param modifier the [Modifier] to be applied to this checkbox
 * @param enabled controls the enabled state of this checkbox. When `false`, this component will not
 *   respond to user input, and it will appear visually disabled and disabled to accessibility
 *   services.
 * @param colors [CheckboxColors] that will be used to resolve the colors used for this checkbox in
 *   different states. See [CheckboxDefaults.colors].
 * @param interactionSource an optional hoisted [MutableInteractionSource] for observing and
 *   emitting [Interaction]s for this checkbox. You can use this to change the checkbox's appearance
 *   or preview the checkbox in different states. Note that if `null` is provided, interactions will
 *   still happen internally.
 * @see [TriStateCheckbox] if you require support for an indeterminate state.
 */
@Composable
public fun Checkbox(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: CheckboxColors = CheckboxDefaults.colors(),
    interactionSource: MutableInteractionSource? = null,
) {
    CheckboxImpl(
        state = ToggleableState(checked),
        onClick = wrapOnCheckedChange(checked, onCheckedChange),
        checkmarkStroke = null,
        outlineStroke = null,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 732–766)

        disabledUncheckedBoxColor: Color,
        disabledIndeterminateBoxColor: Color,
        checkedBorderColor: Color,
        uncheckedBorderColor: Color,
        disabledBorderColor: Color,
        disabledUncheckedBorderColor: Color,
        disabledIndeterminateBorderColor: Color,
    ) : this(
        checkedCheckmarkColor = checkedCheckmarkColor,
        uncheckedCheckmarkColor = uncheckedCheckmarkColor,
        checkedBoxColor = checkedBoxColor,
        uncheckedBoxColor = uncheckedBoxColor,
        disabledCheckedBoxColor = disabledCheckedBoxColor,
        disabledUncheckedBoxColor = disabledUncheckedBoxColor,
        disabledIndeterminateBoxColor = disabledIndeterminateBoxColor,
        checkedBorderColor = checkedBorderColor,
        uncheckedBorderColor = uncheckedBorderColor,
        disabledBorderColor = disabledBorderColor,
        disabledUncheckedBorderColor = disabledUncheckedBorderColor,
        disabledIndeterminateBorderColor = disabledIndeterminateBorderColor,
        disabledCheckmarkColor = checkedCheckmarkColor,
    )

    /**
     * Returns a copy of this CheckboxColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    @Deprecated(
        message =
            "This function is deprecated. Use 'copy' that includes 'disabledCheckmarkColor' instead",
        level = DeprecationLevel.HIDDEN,
    )
    public fun copy(
        checkedCheckmarkColor: Color = this.checkedCheckmarkColor,
        uncheckedCheckmarkColor: Color = this.uncheckedCheckmarkColor,

Sources: [live-androidx-material3-material3-material3-checkbox-lines-732-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 767–799)

        checkedBoxColor: Color = this.checkedBoxColor,
        uncheckedBoxColor: Color = this.uncheckedBoxColor,
        disabledCheckedBoxColor: Color = this.disabledCheckedBoxColor,
        disabledUncheckedBoxColor: Color = this.disabledUncheckedBoxColor,
        disabledIndeterminateBoxColor: Color = this.disabledIndeterminateBoxColor,
        checkedBorderColor: Color = this.checkedBorderColor,
        uncheckedBorderColor: Color = this.uncheckedBorderColor,
        disabledBorderColor: Color = this.disabledBorderColor,
        disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
        disabledIndeterminateBorderColor: Color = this.disabledIndeterminateBorderColor,
    ): CheckboxColors =
        CheckboxColors(
            checkedCheckmarkColor = checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
            uncheckedCheckmarkColor =
                uncheckedCheckmarkColor.takeOrElse { this.uncheckedCheckmarkColor },
            checkedBoxColor = checkedBoxColor.takeOrElse { this.checkedBoxColor },
            uncheckedBoxColor = uncheckedBoxColor.takeOrElse { this.uncheckedBoxColor },
            disabledCheckedBoxColor =
                disabledCheckedBoxColor.takeOrElse { this.disabledCheckedBoxColor },
            disabledUncheckedBoxColor =
                disabledUncheckedBoxColor.takeOrElse { this.disabledUncheckedBoxColor },
            disabledIndeterminateBoxColor =
                disabledIndeterminateBoxColor.takeOrElse { this.disabledIndeterminateBoxColor },
            checkedBorderColor = checkedBorderColor.takeOrElse { this.checkedBorderColor },
            uncheckedBorderColor = uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
            disabledBorderColor = disabledBorderColor.takeOrElse { this.disabledBorderColor },
            disabledUncheckedBorderColor =
                disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
            disabledIndeterminateBorderColor =
                disabledIndeterminateBorderColor.takeOrElse {
                    this.disabledIndeterminateBorderColor
                },
            disabledCheckmarkColor =

Sources: [live-androidx-material3-material3-material3-checkbox-lines-767-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 800–834)

                checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
        )

    /**
     * Returns a copy of this CheckboxColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        checkedCheckmarkColor: Color = this.checkedCheckmarkColor,
        uncheckedCheckmarkColor: Color = this.uncheckedCheckmarkColor,
        checkedBoxColor: Color = this.checkedBoxColor,
        uncheckedBoxColor: Color = this.uncheckedBoxColor,
        disabledCheckedBoxColor: Color = this.disabledCheckedBoxColor,
        disabledUncheckedBoxColor: Color = this.disabledUncheckedBoxColor,
        disabledIndeterminateBoxColor: Color = this.disabledIndeterminateBoxColor,
        checkedBorderColor: Color = this.checkedBorderColor,
        uncheckedBorderColor: Color = this.uncheckedBorderColor,
        disabledBorderColor: Color = this.disabledBorderColor,
        disabledUncheckedBorderColor: Color = this.disabledUncheckedBorderColor,
        disabledIndeterminateBorderColor: Color = this.disabledIndeterminateBorderColor,
        disabledCheckmarkColor: Color = this.disabledCheckmarkColor,
    ): CheckboxColors =
        CheckboxColors(
            checkedCheckmarkColor = checkedCheckmarkColor.takeOrElse { this.checkedCheckmarkColor },
            uncheckedCheckmarkColor =
                uncheckedCheckmarkColor.takeOrElse { this.uncheckedCheckmarkColor },
            checkedBoxColor = checkedBoxColor.takeOrElse { this.checkedBoxColor },
            uncheckedBoxColor = uncheckedBoxColor.takeOrElse { this.uncheckedBoxColor },
            disabledCheckedBoxColor =
                disabledCheckedBoxColor.takeOrElse { this.disabledCheckedBoxColor },
            disabledUncheckedBoxColor =
                disabledUncheckedBoxColor.takeOrElse { this.disabledUncheckedBoxColor },
            disabledIndeterminateBoxColor =
                disabledIndeterminateBoxColor.takeOrElse { this.disabledIndeterminateBoxColor },
            checkedBorderColor = checkedBorderColor.takeOrElse { this.checkedBorderColor },

Sources: [live-androidx-material3-material3-material3-checkbox-lines-800-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 835–869)

            uncheckedBorderColor = uncheckedBorderColor.takeOrElse { this.uncheckedBorderColor },
            disabledBorderColor = disabledBorderColor.takeOrElse { this.disabledBorderColor },
            disabledUncheckedBorderColor =
                disabledUncheckedBorderColor.takeOrElse { this.disabledUncheckedBorderColor },
            disabledIndeterminateBorderColor =
                disabledIndeterminateBorderColor.takeOrElse {
                    this.disabledIndeterminateBorderColor
                },
            disabledCheckmarkColor =
                disabledCheckmarkColor.takeOrElse { this.disabledCheckmarkColor },
        )

    /**
     * Represents the color used for the checkbox container's background indication, depending on
     * [state].
     *
     * @param state the [ToggleableState] of the checkbox
     */
    internal fun indicatorColor(state: ToggleableState): Color =
        if (state == ToggleableState.Off) {
            uncheckedBoxColor
        } else {
            checkedBoxColor
        }

    /**
     * Represents the color used for the checkmark inside the checkbox, depending on [enabled] and
     * [state].
     *
     * @param enabled whether the checkbox is enabled or not
     * @param state the [ToggleableState] of the checkbox
     */
    internal fun checkmarkColor(enabled: Boolean, state: ToggleableState): Color =
        if (enabled) {
            if (state == ToggleableState.Off) {

Sources: [live-androidx-material3-material3-material3-checkbox-lines-835-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 870–904)

                uncheckedCheckmarkColor
            } else {
                checkedCheckmarkColor
            }
        } else {
            disabledCheckmarkColor
        }

    /**
     * Represents the color used for the checkmark inside the checkbox, depending on [state].
     *
     * @param state the [ToggleableState] of the checkbox
     */
    internal fun checkmarkColor(state: ToggleableState): Color {
        return if (state == ToggleableState.Off) {
            uncheckedCheckmarkColor
        } else {
            checkedCheckmarkColor
        }
    }

    /**
     * Represents the color used for the box (background) of the checkbox, depending on [enabled]
     * and [state].
     *
     * @param enabled whether the checkbox is enabled or not
     * @param state the [ToggleableState] of the checkbox
     */
    internal fun boxColor(enabled: Boolean, state: ToggleableState): Color =
        if (enabled) {
            when (state) {
                ToggleableState.On,
                ToggleableState.Indeterminate -> checkedBoxColor
                ToggleableState.Off -> uncheckedBoxColor
            }

Sources: [live-androidx-material3-material3-material3-checkbox-lines-870-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 905–939)

        } else {
            when (state) {
                ToggleableState.On -> disabledCheckedBoxColor
                ToggleableState.Indeterminate -> disabledIndeterminateBoxColor
                ToggleableState.Off -> disabledUncheckedBoxColor
            }
        }

    /**
     * Represents the color used for the border of the checkbox, depending on [enabled] and [state].
     *
     * @param enabled whether the checkbox is enabled or not
     * @param state the [ToggleableState] of the checkbox
     */
    internal fun borderColor(enabled: Boolean, state: ToggleableState): Color =
        if (enabled) {
            when (state) {
                ToggleableState.On,
                ToggleableState.Indeterminate -> checkedBorderColor
                ToggleableState.Off -> uncheckedBorderColor
            }
        } else {
            when (state) {
                ToggleableState.Indeterminate -> disabledIndeterminateBorderColor
                ToggleableState.On -> disabledBorderColor
                ToggleableState.Off -> disabledUncheckedBorderColor
            }
        }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is CheckboxColors) return false

        if (checkedCheckmarkColor != other.checkedCheckmarkColor) return false
        if (uncheckedCheckmarkColor != other.uncheckedCheckmarkColor) return false

Sources: [live-androidx-material3-material3-material3-checkbox-lines-905-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 940–974)

        if (disabledCheckmarkColor != other.disabledCheckmarkColor) return false
        if (checkedBoxColor != other.checkedBoxColor) return false
        if (uncheckedBoxColor != other.uncheckedBoxColor) return false
        if (disabledCheckedBoxColor != other.disabledCheckedBoxColor) return false
        if (disabledUncheckedBoxColor != other.disabledUncheckedBoxColor) return false
        if (disabledIndeterminateBoxColor != other.disabledIndeterminateBoxColor) return false
        if (checkedBorderColor != other.checkedBorderColor) return false
        if (uncheckedBorderColor != other.uncheckedBorderColor) return false
        if (disabledBorderColor != other.disabledBorderColor) return false
        if (disabledUncheckedBorderColor != other.disabledUncheckedBorderColor) return false
        if (disabledIndeterminateBorderColor != other.disabledIndeterminateBorderColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = checkedCheckmarkColor.hashCode()
        result = 31 * result + uncheckedCheckmarkColor.hashCode()
        result = 31 * result + disabledCheckmarkColor.hashCode()
        result = 31 * result + checkedBoxColor.hashCode()
        result = 31 * result + uncheckedBoxColor.hashCode()
        result = 31 * result + disabledCheckedBoxColor.hashCode()
        result = 31 * result + disabledUncheckedBoxColor.hashCode()
        result = 31 * result + disabledIndeterminateBoxColor.hashCode()
        result = 31 * result + checkedBorderColor.hashCode()
        result = 31 * result + uncheckedBorderColor.hashCode()
        result = 31 * result + disabledBorderColor.hashCode()
        result = 31 * result + disabledUncheckedBorderColor.hashCode()
        result = 31 * result + disabledIndeterminateBorderColor.hashCode()
        return result
    }
}

/** Returns the color [AnimationSpec] for the given state. */
@Composable

Sources: [live-androidx-material3-material3-material3-checkbox-lines-940-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)

## androidx.compose.material3 Checkbox.kt source (lines 975–1005)

private fun colorAnimationSpecForState(state: ToggleableState): AnimationSpec<Color> {
    // TODO Load the motionScheme tokens from the component tokens file
    return if (state == ToggleableState.Off) {
        // Box out
        MotionSchemeKeyTokens.FastEffects.value()
    } else {
        // Box in
        MotionSchemeKeyTokens.DefaultEffects.value()
    }
}

private fun wrapOnCheckedChange(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
): (() -> Unit)? =
    if (onCheckedChange != null) {
        { onCheckedChange(!checked) }
    } else {
        null
    }

private const val SnapAnimationDelay = 100

// TODO(b/188529841): Update the padding and size when the Checkbox spec is finalized.
private val CheckboxDefaultPadding
    get() = 2.dp
private val CheckboxSize
    get() = 20.dp
private val RadiusSize
    get() = 2.dp


Sources: [live-androidx-material3-material3-material3-checkbox-lines-975-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Checkbox.kt)
