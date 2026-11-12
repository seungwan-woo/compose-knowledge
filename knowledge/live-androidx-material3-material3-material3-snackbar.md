---
type: reference
title: androidx.compose.material3 Snackbar.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-snackbar-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 1
    endLine: 35
    sha256: 1b9384f17a6a7b21253235d01309fddbd623a6ab675bc6bdf7653f660bdf4ef1
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

      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.fillMaxWidth
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.paddingFromBaseline
      import androidx.compose.foundation.layout.widthIn
      import androidx.compose.material3.internal.Icons
      import androidx.compose.material3.internal.Strings
      import androidx.compose.material3.internal.getString
      import androidx.compose.material3.tokens.SnackbarTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
  - id: live-androidx-material3-material3-material3-snackbar-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 106
    endLine: 140
    sha256: 27ecf821b1a3b5e1493788bb4d022d9622765e7c9f9b7d9e6e6f72b610134400
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape = SnackbarDefaults.shape,
          containerColor: Color = SnackbarDefaults.color,
          contentColor: Color = SnackbarDefaults.contentColor,
          actionContentColor: Color = SnackbarDefaults.actionContentColor,
          dismissActionContentColor: Color = SnackbarDefaults.dismissActionContentColor,
          content: @Composable () -> Unit,
      ) {
          Surface(
              modifier = modifier,
              shape = shape,
              color = containerColor,
              contentColor = contentColor,
              shadowElevation = SnackbarTokens.ContainerElevation,
          ) {
              val textStyle = SnackbarTokens.SupportingTextFont.value
              val actionTextStyle = SnackbarTokens.ActionLabelTextFont.value
              CompositionLocalProvider(LocalTextStyle provides textStyle) {
                  when {
                      actionOnNewLine && action != null ->
                          if (ComposeMaterial3Flags.isSnackbarStylingFixEnabled) {
                              NewLineButtonSnackbar(
                                  text = content,
                                  action = action,
                                  dismissAction = dismissAction,
                                  actionTextStyle = actionTextStyle,
                                  actionContentColor = actionContentColor,
                                  dismissActionContentColor = dismissActionContentColor,
                              )
                          } else {
                              LegacyNewLineButtonSnackbar(
                                  text = content,
                                  action = action,
                                  dismissAction = dismissAction,
                                  actionTextStyle = actionTextStyle,
                                  actionContentColor = actionContentColor,
  - id: live-androidx-material3-material3-material3-snackbar-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 141
    endLine: 175
    sha256: 2acec9fcfb2b8c3831b5df7251d5b18b4fe6e7f5465eca3b49dd2cbba95c6e5a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                  dismissActionContentColor = dismissActionContentColor,
                              )
                          }

                      else ->
                          if (ComposeMaterial3Flags.isSnackbarStylingFixEnabled) {
                              OneRowSnackbar(
                                  text = content,
                                  action = action,
                                  dismissAction = dismissAction,
                                  actionTextStyle = actionTextStyle,
                                  actionTextColor = actionContentColor,
                                  dismissActionColor = dismissActionContentColor,
                              )
                          } else {
                              LegacyOneRowSnackbar(
                                  text = content,
                                  action = action,
                                  dismissAction = dismissAction,
                                  actionTextStyle = actionTextStyle,
                                  actionTextColor = actionContentColor,
                                  dismissActionColor = dismissActionContentColor,
                              )
                          }
                  }
              }
          }
      }

      /**
       * [Material Design snackbar](https://m3.material.io/components/snackbar/overview)
       *
       * Snackbars provide brief messages about app processes at the bottom of the screen.
       *
       * ![Snackbar
  - id: live-androidx-material3-material3-material3-snackbar-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 176
    endLine: 210
    sha256: e4023beeb34c1132d073f9a737dc1c4427350d228e390b44dc8889a5adc058f9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * image](https://developer.android.com/images/reference/androidx/compose/material3/snackbar.png)
       *
       * Snackbars inform users of a process that an app has performed or will perform. They appear
       * temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and
       * they don’t require user input to disappear.
       *
       * A Snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.
       *
       * Snackbars with an action should not timeout or self-dismiss until the user performs another
       * action. Here, moving the keyboard focus indicator to navigate through interactive elements in a
       * page is not considered an action.
       *
       * This version of snackbar is designed to work with [SnackbarData] provided by the [SnackbarHost],
       * which is usually used inside of the [Scaffold].
       *
       * This components provides only the visuals of the Snackbar. If you need to show a Snackbar with
       * defaults on the screen, use [SnackbarHostState.showSnackbar]:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
       *
       * If you want to customize appearance of the Snackbar, you can pass your own version as a child of
       * the [SnackbarHost] to the [Scaffold]:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithCustomSnackbar
       *
       * When a [SnackbarData.visuals] sets the Snackbar's duration as [SnackbarDuration.Indefinite], it's
       * recommended to display an additional close affordance action. See
       * [SnackbarVisuals.withDismissAction]:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithIndefiniteSnackbar
       * @param snackbarData data about the current snackbar showing via [SnackbarHostState]
       * @param modifier the [Modifier] to be applied to this snackbar
       * @param actionOnNewLine whether or not action should be put on a separate line. Recommended for
       *   action with long action text.
       * @param shape defines the shape of this snackbar's container
  - id: live-androidx-material3-material3-material3-snackbar-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 211
    endLine: 245
    sha256: a0da3784daab2cd8fc1bac0069b549da6458a94f573eee0e10dd4355eed805a8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param containerColor the color used for the background of this snackbar. Use [Color.Transparent]
       *   to have no color.
       * @param contentColor the preferred color for content inside this snackbar
       * @param actionColor the color of the snackbar's action
       * @param actionContentColor the preferred content color for the optional action inside this
       *   snackbar. See [SnackbarVisuals.actionLabel].
       * @param dismissActionContentColor the preferred content color for the optional dismiss action
       *   inside this snackbar. See [SnackbarVisuals.withDismissAction].
       */
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun Snackbar(
          snackbarData: SnackbarData,
          modifier: Modifier = Modifier,
          actionOnNewLine: Boolean = false,
          shape: Shape = SnackbarDefaults.shape,
          containerColor: Color = SnackbarDefaults.color,
          contentColor: Color = SnackbarDefaults.contentColor,
          actionColor: Color = SnackbarDefaults.actionColor,
          actionContentColor: Color = SnackbarDefaults.actionContentColor,
          dismissActionContentColor: Color = SnackbarDefaults.dismissActionContentColor,
      ) {
          val actionLabel = snackbarData.visuals.actionLabel
          val actionComposable: (@Composable () -> Unit)? =
              if (actionLabel != null) {
                  @Composable {
                      TextButton(
                          colors = ButtonDefaults.textButtonColors(contentColor = actionColor),
                          onClick = { snackbarData.performAction() },
                          content = { Text(actionLabel) },
                      )
                  }
              } else {
                  null
              }
  - id: live-androidx-material3-material3-material3-snackbar-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 246
    endLine: 280
    sha256: 54020e474015d1c526fbfbc80c17efc2423fb3cd85e11686b5cf2130cd89b158
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val dismissActionComposable: (@Composable () -> Unit)? =
              if (snackbarData.visuals.withDismissAction) {
                  @Composable {
                      val contentDescription = getString(Strings.SnackbarDismiss)
                      TooltipBox(
                          positionProvider =
                              TooltipDefaults.rememberTooltipPositionProvider(
                                  TooltipAnchorPosition.Above
                              ),
                          tooltip = {
                              PlainTooltipInternal(contentDescription) { Text(contentDescription) }
                          },
                          state = rememberTooltipState(),
                      ) {
                          IconButton(
                              onClick = { snackbarData.dismiss() },
                              content = {
                                  Icon(Icons.Filled.Close, contentDescription = contentDescription)
                              },
                          )
                      }
                  }
              } else {
                  null
              }
          Snackbar(
              modifier = modifier.padding(12.dp),
              action = actionComposable,
              dismissAction = dismissActionComposable,
              actionOnNewLine = actionOnNewLine,
              shape = shape,
              containerColor = containerColor,
              contentColor = contentColor,
              actionContentColor = actionContentColor,
              dismissActionContentColor = dismissActionContentColor,
  - id: live-androidx-material3-material3-material3-snackbar-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 281
    endLine: 315
    sha256: 1184ab7b59e342c0e227553a1685c706e99e7d90d6858d5cc00b0ca55ef6c55f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              content = { Text(snackbarData.visuals.message) },
          )
      }

      @Composable
      private fun NewLineButtonSnackbar(
          text: @Composable () -> Unit,
          action: @Composable () -> Unit,
          dismissAction: @Composable (() -> Unit)?,
          actionTextStyle: TextStyle,
          actionContentColor: Color,
          dismissActionContentColor: Color,
      ) {
          Column(
              modifier =
                  Modifier.widthIn(max = ContainerMaxWidth)
                      .fillMaxWidth()
                      .padding(start = HorizontalSpacing)
          ) {
              Box(
                  modifier =
                      Modifier.fillMaxWidth()
                          .padding(vertical = SnackbarVerticalPadding)
                          .padding(end = HorizontalSpacing)
              ) {
                  text()
              }

              Row(
                  modifier =
                      Modifier.align(Alignment.End)
                          .padding(
                              bottom = ActionButtonBottomPadding,
                              end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp,
                          ),
  - id: live-androidx-material3-material3-material3-snackbar-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 316
    endLine: 350
    sha256: 5a59622abe297c57c4369488435973bdb42570d2af2dc6623114010906eb8472
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  verticalAlignment = Alignment.CenterVertically,
              ) {
                  CompositionLocalProvider(
                      LocalContentColor provides actionContentColor,
                      LocalTextStyle provides actionTextStyle,
                      content = action,
                  )
                  if (dismissAction != null) {
                      CompositionLocalProvider(
                          LocalContentColor provides dismissActionContentColor,
                          content = dismissAction,
                      )
                  }
              }
          }
      }

      @Composable
      private fun LegacyNewLineButtonSnackbar(
          text: @Composable () -> Unit,
          action: @Composable () -> Unit,
          dismissAction: @Composable (() -> Unit)?,
          actionTextStyle: TextStyle,
          actionContentColor: Color,
          dismissActionContentColor: Color,
      ) {
          Column(
              modifier =
                  Modifier
                      // Fill max width, up to ContainerMaxWidth.
                      .widthIn(max = ContainerMaxWidth)
                      .fillMaxWidth()
                      .padding(start = HorizontalSpacing, bottom = SeparateButtonExtraY)
          ) {
              Box(
  - id: live-androidx-material3-material3-material3-snackbar-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 351
    endLine: 385
    sha256: 830a6004abd1ba9acd53cd98aaa9f0c9d3dca8b77da181c399b8f0e7b1c52601
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  Modifier.paddingFromBaseline(HeightToFirstLine, LongButtonVerticalOffset)
                      .padding(end = HorizontalSpacingButtonSide)
              ) {
                  text()
              }

              Box(
                  Modifier.align(Alignment.End)
                      .padding(end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp)
              ) {
                  Row {
                      CompositionLocalProvider(
                          LocalContentColor provides actionContentColor,
                          LocalTextStyle provides actionTextStyle,
                          content = action,
                      )
                      if (dismissAction != null) {
                          CompositionLocalProvider(
                              LocalContentColor provides dismissActionContentColor,
                              content = dismissAction,
                          )
                      }
                  }
              }
          }
      }

      @Composable
      private fun LegacyOneRowSnackbar(
          text: @Composable () -> Unit,
          action: @Composable (() -> Unit)?,
          dismissAction: @Composable (() -> Unit)?,
          actionTextStyle: TextStyle,
          actionTextColor: Color,
          dismissActionColor: Color,
  - id: live-androidx-material3-material3-material3-snackbar-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 36
    endLine: 70
    sha256: 58b16c9331845be2eb27a4acb06ba9557808f0eede203239820034df74a0bf67
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.AlignmentLine
      import androidx.compose.ui.layout.FirstBaseline
      import androidx.compose.ui.layout.LastBaseline
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.layoutId
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.util.fastFirst
      import androidx.compose.ui.util.fastFirstOrNull
      import kotlin.math.max
      import kotlin.math.min

      /**
       * [Material Design snackbar](https://m3.material.io/components/snackbar/overview)
       *
       * Snackbars provide brief messages about app processes at the bottom of the screen.
       *
       * ![Snackbar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/snackbar.png)
       *
       * Snackbars inform users of a process that an app has performed or will perform. They appear
       * temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and
       * they don’t require user input to disappear.
       *
       * A Snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.
       *
       * Snackbars with an action should not timeout or self-dismiss until the user performs another
       * action. Here, moving the keyboard focus indicator to navigate through interactive elements in a
       * page is not considered an action.
       *
       * This component provides only the visuals of the Snackbar. If you need to show a Snackbar with
       * defaults on the screen, use [SnackbarHostState.showSnackbar]:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
       *
  - id: live-androidx-material3-material3-material3-snackbar-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 386
    endLine: 420
    sha256: f6f55f886c4f60e6701e23ff05087e8b657c9bb83aaa32a1dc299d2cdecffff8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      ) {
          val textTag = "text"
          val actionTag = "action"
          val dismissActionTag = "dismissAction"
          Layout(
              {
                  Box(Modifier.layoutId(textTag).padding(vertical = LegacySnackbarVerticalPadding)) {
                      text()
                  }
                  if (action != null) {
                      Box(Modifier.layoutId(actionTag)) {
                          CompositionLocalProvider(
                              LocalContentColor provides actionTextColor,
                              LocalTextStyle provides actionTextStyle,
                              content = action,
                          )
                      }
                  }
                  if (dismissAction != null) {
                      Box(Modifier.layoutId(dismissActionTag)) {
                          CompositionLocalProvider(
                              LocalContentColor provides dismissActionColor,
                              content = dismissAction,
                          )
                      }
                  }
              },
              modifier =
                  Modifier.padding(
                      start = HorizontalSpacing,
                      end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp,
                  ),
          ) { measurables, constraints ->
              val containerWidth = min(constraints.maxWidth, ContainerMaxWidth.roundToPx())
              val actionButtonPlaceable =
  - id: live-androidx-material3-material3-material3-snackbar-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 421
    endLine: 455
    sha256: 6d752e794e6222aad945ef546d32e15ad14752d200058e714d4f6ddf772b049c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  measurables.fastFirstOrNull { it.layoutId == actionTag }?.measure(constraints)
              val dismissButtonPlaceable =
                  measurables.fastFirstOrNull { it.layoutId == dismissActionTag }?.measure(constraints)
              val actionButtonWidth = actionButtonPlaceable?.width ?: 0
              val actionButtonHeight = actionButtonPlaceable?.height ?: 0
              val dismissButtonWidth = dismissButtonPlaceable?.width ?: 0
              val dismissButtonHeight = dismissButtonPlaceable?.height ?: 0
              val extraSpacingWidth = if (dismissButtonWidth == 0) TextEndExtraSpacing.roundToPx() else 0
              val textMaxWidth =
                  (containerWidth - actionButtonWidth - dismissButtonWidth - extraSpacingWidth)
                      .coerceAtLeast(constraints.minWidth)
              val textPlaceable =
                  measurables
                      .fastFirst { it.layoutId == textTag }
                      .measure(constraints.copy(minHeight = 0, maxWidth = textMaxWidth))

              val firstTextBaseline = textPlaceable[FirstBaseline]
              val lastTextBaseline = textPlaceable[LastBaseline]
              val hasText =
                  firstTextBaseline != AlignmentLine.Unspecified &&
                      lastTextBaseline != AlignmentLine.Unspecified
              val isOneLine = firstTextBaseline == lastTextBaseline || !hasText
              val dismissButtonPlaceX = containerWidth - dismissButtonWidth
              val actionButtonPlaceX = dismissButtonPlaceX - actionButtonWidth

              val textPlaceY: Int
              val containerHeight: Int
              val actionButtonPlaceY: Int
              if (isOneLine) {
                  val minContainerHeight = SnackbarTokens.SingleLineContainerHeight.roundToPx()
                  val contentHeight = max(actionButtonHeight, dismissButtonHeight)
                  containerHeight = max(minContainerHeight, contentHeight)
                  textPlaceY = (containerHeight - textPlaceable.height) / 2
                  actionButtonPlaceY =
                      if (actionButtonPlaceable != null) {
  - id: live-androidx-material3-material3-material3-snackbar-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 456
    endLine: 490
    sha256: 63a446681d2b1322b7f85432d690c7e6e2fadcc2d510be9bca4a9f3c2a4116a7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          actionButtonPlaceable[FirstBaseline].let {
                              if (it != AlignmentLine.Unspecified) {
                                  textPlaceY + firstTextBaseline - it
                              } else {
                                  0
                              }
                          }
                      } else {
                          0
                      }
              } else {
                  val baselineOffset = HeightToFirstLine.roundToPx()
                  textPlaceY = baselineOffset - firstTextBaseline
                  val minContainerHeight = SnackbarTokens.TwoLinesContainerHeight.roundToPx()
                  val contentHeight = textPlaceY + textPlaceable.height
                  containerHeight = max(minContainerHeight, contentHeight)
                  actionButtonPlaceY =
                      if (actionButtonPlaceable != null) {
                          (containerHeight - actionButtonPlaceable.height) / 2
                      } else {
                          0
                      }
              }
              val dismissButtonPlaceY =
                  if (dismissButtonPlaceable != null) {
                      (containerHeight - dismissButtonPlaceable.height) / 2
                  } else {
                      0
                  }

              layout(containerWidth, containerHeight) {
                  textPlaceable.placeRelative(0, textPlaceY)
                  actionButtonPlaceable?.placeRelative(actionButtonPlaceX, actionButtonPlaceY)
                  dismissButtonPlaceable?.placeRelative(dismissButtonPlaceX, dismissButtonPlaceY)
              }
  - id: live-androidx-material3-material3-material3-snackbar-lines-491-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 491
    endLine: 525
    sha256: 7cc5dec78bdf364bcd80a24dc0f6fbc96683eff6c41f006f6b83b9daa655f112
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      @Composable
      private fun OneRowSnackbar(
          text: @Composable () -> Unit,
          action: @Composable (() -> Unit)?,
          dismissAction: @Composable (() -> Unit)?,
          actionTextStyle: TextStyle,
          actionTextColor: Color,
          dismissActionColor: Color,
      ) {
          val textTag = "text"
          val actionTag = "action"
          val dismissActionTag = "dismissAction"
          Layout(
              {
                  Box(Modifier.layoutId(textTag).padding(vertical = SnackbarVerticalPadding)) { text() }
                  if (action != null) {
                      Box(Modifier.layoutId(actionTag)) {
                          CompositionLocalProvider(
                              LocalContentColor provides actionTextColor,
                              LocalTextStyle provides actionTextStyle,
                              content = action,
                          )
                      }
                  }
                  if (dismissAction != null) {
                      Box(Modifier.layoutId(dismissActionTag)) {
                          CompositionLocalProvider(
                              LocalContentColor provides dismissActionColor,
                              content = dismissAction,
                          )
                      }
                  }
  - id: live-androidx-material3-material3-material3-snackbar-lines-526-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 526
    endLine: 560
    sha256: b91c7b26b7bfdb936bf1e23315d71c14c5676300548807acd8cd1153777615be
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              },
              modifier =
                  Modifier.padding(
                      start = HorizontalSpacing,
                      end = if (dismissAction == null) TextEndExtraSpacing else 0.dp,
                  ),
          ) { measurables, constraints ->
              val minContainerHeight = SnackbarTokens.SingleLineContainerHeight.roundToPx()
              val containerWidth = min(constraints.maxWidth, ContainerMaxWidth.roundToPx())
              val actionButtonPlaceable =
                  measurables.fastFirstOrNull { it.layoutId == actionTag }?.measure(constraints)
              val dismissButtonPlaceable =
                  measurables.fastFirstOrNull { it.layoutId == dismissActionTag }?.measure(constraints)
              val actionButtonWidth = actionButtonPlaceable?.width ?: 0
              val dismissButtonWidth = dismissButtonPlaceable?.width ?: 0

              val extraSpacingWidth = if (dismissButtonWidth == 0) TextEndExtraSpacing.roundToPx() else 0
              val textMaxWidth =
                  (containerWidth - actionButtonWidth - dismissButtonWidth - extraSpacingWidth)
                      .coerceAtLeast(constraints.minWidth)
              val textPlaceable =
                  measurables
                      .fastFirst { it.layoutId == textTag }
                      .measure(constraints.copy(minHeight = 0, maxWidth = textMaxWidth))

              val containerHeight =
                  maxOf(
                      minContainerHeight,
                      textPlaceable.height,
                      actionButtonPlaceable?.height ?: 0,
                      dismissButtonPlaceable?.height ?: 0,
                  )

              val dismissButtonPlaceX = containerWidth - dismissButtonWidth
              val actionButtonPlaceX = dismissButtonPlaceX - actionButtonWidth
  - id: live-androidx-material3-material3-material3-snackbar-lines-561-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 561
    endLine: 595
    sha256: 0f74650a563b45ae0f87ec5d7910c16418f88ff6229d57d940073909338b4af2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
              layout(containerWidth, containerHeight) {
                  textPlaceable.placeRelative(0, (containerHeight - textPlaceable.height) / 2)
                  actionButtonPlaceable?.placeRelative(
                      actionButtonPlaceX,
                      (containerHeight - actionButtonPlaceable.height) / 2,
                  )
                  dismissButtonPlaceable?.placeRelative(
                      dismissButtonPlaceX,
                      (containerHeight - dismissButtonPlaceable.height) / 2,
                  )
              }
          }
      }

      /** Contains the default values used for [Snackbar]. */
      public object SnackbarDefaults {
          /** Default shape of a snackbar. */
          public val shape: Shape
              @Composable get() = SnackbarTokens.ContainerShape.value

          /** Default color of a snackbar. */
          public val color: Color
              @Composable get() = SnackbarTokens.ContainerColor.value

          /** Default content color of a snackbar. */
          public val contentColor: Color
              @Composable get() = SnackbarTokens.SupportingTextColor.value

          /** Default action color of a snackbar. */
          public val actionColor: Color
              @Composable get() = SnackbarTokens.ActionLabelTextColor.value

          /** Default action content color of a snackbar. */
          public val actionContentColor: Color
  - id: live-androidx-material3-material3-material3-snackbar-lines-596-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 596
    endLine: 623
    sha256: fdeb4118f8caeace9dd83b7548455cad92a8fb7eb2d2e51b8981a3d6ed91c3eb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              @Composable get() = SnackbarTokens.ActionLabelTextColor.value

          /** Default dismiss action content color of a snackbar. */
          public val dismissActionContentColor: Color
              @Composable get() = SnackbarTokens.IconColor.value
      }

      private val ContainerMaxWidth
          get() = 600.dp
      private val HeightToFirstLine
          get() = 30.dp
      private val HorizontalSpacing
          get() = 16.dp
      private val HorizontalSpacingButtonSide
          get() = 8.dp
      private val SeparateButtonExtraY
          get() = 2.dp
      private val LegacySnackbarVerticalPadding
          get() = 6.dp
      private val TextEndExtraSpacing
          get() = 8.dp
      private val LongButtonVerticalOffset
          get() = 12.dp
      private val SnackbarVerticalPadding
          get() = 14.dp
      private val ActionButtonBottomPadding
          get() = 4.dp
  - id: live-androidx-material3-material3-material3-snackbar-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt
    startLine: 71
    endLine: 105
    sha256: 43028290d3bb99ab05c6f352e409933f12b4e5f45a58e26212e0344bd560b11c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * If you want to customize appearance of the Snackbar, you can pass your own version as a child of
       * the [SnackbarHost] to the [Scaffold]:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithCustomSnackbar
       *
       * For a multiline sample following the Material recommended spec of a maximum of 2 lines, see:
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithMultilineSnackbar
       * @param modifier the [Modifier] to be applied to this snackbar
       * @param action action / button component to add as an action to the snackbar. Consider using
       *   [ColorScheme.inversePrimary] as the color for the action, if you do not have a predefined color
       *   you wish to use instead.
       * @param dismissAction action / button component to add as an additional close affordance action
       *   when a snackbar is non self-dismissive. Consider using [ColorScheme.inverseOnSurface] as the
       *   color for the action, if you do not have a predefined color you wish to use instead.
       * @param actionOnNewLine whether or not action should be put on a separate line. Recommended for
       *   action with long action text.
       * @param shape defines the shape of this snackbar's container
       * @param containerColor the color used for the background of this snackbar. Use [Color.Transparent]
       *   to have no color.
       * @param contentColor the preferred color for content inside this snackbar
       * @param actionContentColor the preferred content color for the optional [action] inside this
       *   snackbar
       * @param dismissActionContentColor the preferred content color for the optional [dismissAction]
       *   inside this snackbar
       * @param content content to show information about a process that an app has performed or will
       *   perform
       */
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun Snackbar(
          modifier: Modifier = Modifier,
          action: @Composable (() -> Unit)? = null,
          dismissAction: @Composable (() -> Unit)? = null,
          actionOnNewLine: Boolean = false,
compose:
  id: live-androidx-material3-material3-material3-snackbar
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-snackbar-lines-1
      title: androidx.compose.material3 Snackbar.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-106
      title: androidx.compose.material3 Snackbar.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.SnackbarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-141
      title: androidx.compose.material3 Snackbar.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-176
      title: androidx.compose.material3 Snackbar.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-211
      title: androidx.compose.material3 Snackbar.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.Snackbar
        - androidx.compose.material3.SnackbarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-246
      title: androidx.compose.material3 Snackbar.kt source (lines 246–280)
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-281
      title: androidx.compose.material3 Snackbar.kt source (lines 281–315)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-316
      title: androidx.compose.material3 Snackbar.kt source (lines 316–350)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-351
      title: androidx.compose.material3 Snackbar.kt source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-36
      title: androidx.compose.material3 Snackbar.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-386
      title: androidx.compose.material3 Snackbar.kt source (lines 386–420)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-421
      title: androidx.compose.material3 Snackbar.kt source (lines 421–455)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-456
      title: androidx.compose.material3 Snackbar.kt source (lines 456–490)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-491
      title: androidx.compose.material3 Snackbar.kt source (lines 491–525)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-491-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-526
      title: androidx.compose.material3 Snackbar.kt source (lines 526–560)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-526-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-561
      title: androidx.compose.material3 Snackbar.kt source (lines 561–595)
      aliases:
        - androidx.compose.material3.Snackbar
        - androidx.compose.material3.SnackbarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-561-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-596
      title: androidx.compose.material3 Snackbar.kt source (lines 596–623)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-596-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-snackbar-lines-71
      title: androidx.compose.material3 Snackbar.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Snackbar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-snackbar-lines-71-source
      relatedIds: []
---

# androidx.compose.material3 Snackbar.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt

## androidx.compose.material3 Snackbar.kt source (lines 1–35)

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

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.paddingFromBaseline
import androidx.compose.foundation.layout.widthIn
import androidx.compose.material3.internal.Icons
import androidx.compose.material3.internal.Strings
import androidx.compose.material3.internal.getString
import androidx.compose.material3.tokens.SnackbarTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape

Sources: [live-androidx-material3-material3-material3-snackbar-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 106–140)

    shape: Shape = SnackbarDefaults.shape,
    containerColor: Color = SnackbarDefaults.color,
    contentColor: Color = SnackbarDefaults.contentColor,
    actionContentColor: Color = SnackbarDefaults.actionContentColor,
    dismissActionContentColor: Color = SnackbarDefaults.dismissActionContentColor,
    content: @Composable () -> Unit,
) {
    Surface(
        modifier = modifier,
        shape = shape,
        color = containerColor,
        contentColor = contentColor,
        shadowElevation = SnackbarTokens.ContainerElevation,
    ) {
        val textStyle = SnackbarTokens.SupportingTextFont.value
        val actionTextStyle = SnackbarTokens.ActionLabelTextFont.value
        CompositionLocalProvider(LocalTextStyle provides textStyle) {
            when {
                actionOnNewLine && action != null ->
                    if (ComposeMaterial3Flags.isSnackbarStylingFixEnabled) {
                        NewLineButtonSnackbar(
                            text = content,
                            action = action,
                            dismissAction = dismissAction,
                            actionTextStyle = actionTextStyle,
                            actionContentColor = actionContentColor,
                            dismissActionContentColor = dismissActionContentColor,
                        )
                    } else {
                        LegacyNewLineButtonSnackbar(
                            text = content,
                            action = action,
                            dismissAction = dismissAction,
                            actionTextStyle = actionTextStyle,
                            actionContentColor = actionContentColor,

Sources: [live-androidx-material3-material3-material3-snackbar-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 141–175)

                            dismissActionContentColor = dismissActionContentColor,
                        )
                    }

                else ->
                    if (ComposeMaterial3Flags.isSnackbarStylingFixEnabled) {
                        OneRowSnackbar(
                            text = content,
                            action = action,
                            dismissAction = dismissAction,
                            actionTextStyle = actionTextStyle,
                            actionTextColor = actionContentColor,
                            dismissActionColor = dismissActionContentColor,
                        )
                    } else {
                        LegacyOneRowSnackbar(
                            text = content,
                            action = action,
                            dismissAction = dismissAction,
                            actionTextStyle = actionTextStyle,
                            actionTextColor = actionContentColor,
                            dismissActionColor = dismissActionContentColor,
                        )
                    }
            }
        }
    }
}

/**
 * [Material Design snackbar](https://m3.material.io/components/snackbar/overview)
 *
 * Snackbars provide brief messages about app processes at the bottom of the screen.
 *
 * ![Snackbar

Sources: [live-androidx-material3-material3-material3-snackbar-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 176–210)

 * image](https://developer.android.com/images/reference/androidx/compose/material3/snackbar.png)
 *
 * Snackbars inform users of a process that an app has performed or will perform. They appear
 * temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and
 * they don’t require user input to disappear.
 *
 * A Snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.
 *
 * Snackbars with an action should not timeout or self-dismiss until the user performs another
 * action. Here, moving the keyboard focus indicator to navigate through interactive elements in a
 * page is not considered an action.
 *
 * This version of snackbar is designed to work with [SnackbarData] provided by the [SnackbarHost],
 * which is usually used inside of the [Scaffold].
 *
 * This components provides only the visuals of the Snackbar. If you need to show a Snackbar with
 * defaults on the screen, use [SnackbarHostState.showSnackbar]:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
 *
 * If you want to customize appearance of the Snackbar, you can pass your own version as a child of
 * the [SnackbarHost] to the [Scaffold]:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithCustomSnackbar
 *
 * When a [SnackbarData.visuals] sets the Snackbar's duration as [SnackbarDuration.Indefinite], it's
 * recommended to display an additional close affordance action. See
 * [SnackbarVisuals.withDismissAction]:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithIndefiniteSnackbar
 * @param snackbarData data about the current snackbar showing via [SnackbarHostState]
 * @param modifier the [Modifier] to be applied to this snackbar
 * @param actionOnNewLine whether or not action should be put on a separate line. Recommended for
 *   action with long action text.
 * @param shape defines the shape of this snackbar's container

Sources: [live-androidx-material3-material3-material3-snackbar-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 211–245)

 * @param containerColor the color used for the background of this snackbar. Use [Color.Transparent]
 *   to have no color.
 * @param contentColor the preferred color for content inside this snackbar
 * @param actionColor the color of the snackbar's action
 * @param actionContentColor the preferred content color for the optional action inside this
 *   snackbar. See [SnackbarVisuals.actionLabel].
 * @param dismissActionContentColor the preferred content color for the optional dismiss action
 *   inside this snackbar. See [SnackbarVisuals.withDismissAction].
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun Snackbar(
    snackbarData: SnackbarData,
    modifier: Modifier = Modifier,
    actionOnNewLine: Boolean = false,
    shape: Shape = SnackbarDefaults.shape,
    containerColor: Color = SnackbarDefaults.color,
    contentColor: Color = SnackbarDefaults.contentColor,
    actionColor: Color = SnackbarDefaults.actionColor,
    actionContentColor: Color = SnackbarDefaults.actionContentColor,
    dismissActionContentColor: Color = SnackbarDefaults.dismissActionContentColor,
) {
    val actionLabel = snackbarData.visuals.actionLabel
    val actionComposable: (@Composable () -> Unit)? =
        if (actionLabel != null) {
            @Composable {
                TextButton(
                    colors = ButtonDefaults.textButtonColors(contentColor = actionColor),
                    onClick = { snackbarData.performAction() },
                    content = { Text(actionLabel) },
                )
            }
        } else {
            null
        }

Sources: [live-androidx-material3-material3-material3-snackbar-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 246–280)

    val dismissActionComposable: (@Composable () -> Unit)? =
        if (snackbarData.visuals.withDismissAction) {
            @Composable {
                val contentDescription = getString(Strings.SnackbarDismiss)
                TooltipBox(
                    positionProvider =
                        TooltipDefaults.rememberTooltipPositionProvider(
                            TooltipAnchorPosition.Above
                        ),
                    tooltip = {
                        PlainTooltipInternal(contentDescription) { Text(contentDescription) }
                    },
                    state = rememberTooltipState(),
                ) {
                    IconButton(
                        onClick = { snackbarData.dismiss() },
                        content = {
                            Icon(Icons.Filled.Close, contentDescription = contentDescription)
                        },
                    )
                }
            }
        } else {
            null
        }
    Snackbar(
        modifier = modifier.padding(12.dp),
        action = actionComposable,
        dismissAction = dismissActionComposable,
        actionOnNewLine = actionOnNewLine,
        shape = shape,
        containerColor = containerColor,
        contentColor = contentColor,
        actionContentColor = actionContentColor,
        dismissActionContentColor = dismissActionContentColor,

Sources: [live-androidx-material3-material3-material3-snackbar-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 281–315)

        content = { Text(snackbarData.visuals.message) },
    )
}

@Composable
private fun NewLineButtonSnackbar(
    text: @Composable () -> Unit,
    action: @Composable () -> Unit,
    dismissAction: @Composable (() -> Unit)?,
    actionTextStyle: TextStyle,
    actionContentColor: Color,
    dismissActionContentColor: Color,
) {
    Column(
        modifier =
            Modifier.widthIn(max = ContainerMaxWidth)
                .fillMaxWidth()
                .padding(start = HorizontalSpacing)
    ) {
        Box(
            modifier =
                Modifier.fillMaxWidth()
                    .padding(vertical = SnackbarVerticalPadding)
                    .padding(end = HorizontalSpacing)
        ) {
            text()
        }

        Row(
            modifier =
                Modifier.align(Alignment.End)
                    .padding(
                        bottom = ActionButtonBottomPadding,
                        end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp,
                    ),

Sources: [live-androidx-material3-material3-material3-snackbar-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 316–350)

            verticalAlignment = Alignment.CenterVertically,
        ) {
            CompositionLocalProvider(
                LocalContentColor provides actionContentColor,
                LocalTextStyle provides actionTextStyle,
                content = action,
            )
            if (dismissAction != null) {
                CompositionLocalProvider(
                    LocalContentColor provides dismissActionContentColor,
                    content = dismissAction,
                )
            }
        }
    }
}

@Composable
private fun LegacyNewLineButtonSnackbar(
    text: @Composable () -> Unit,
    action: @Composable () -> Unit,
    dismissAction: @Composable (() -> Unit)?,
    actionTextStyle: TextStyle,
    actionContentColor: Color,
    dismissActionContentColor: Color,
) {
    Column(
        modifier =
            Modifier
                // Fill max width, up to ContainerMaxWidth.
                .widthIn(max = ContainerMaxWidth)
                .fillMaxWidth()
                .padding(start = HorizontalSpacing, bottom = SeparateButtonExtraY)
    ) {
        Box(

Sources: [live-androidx-material3-material3-material3-snackbar-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 351–385)

            Modifier.paddingFromBaseline(HeightToFirstLine, LongButtonVerticalOffset)
                .padding(end = HorizontalSpacingButtonSide)
        ) {
            text()
        }

        Box(
            Modifier.align(Alignment.End)
                .padding(end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp)
        ) {
            Row {
                CompositionLocalProvider(
                    LocalContentColor provides actionContentColor,
                    LocalTextStyle provides actionTextStyle,
                    content = action,
                )
                if (dismissAction != null) {
                    CompositionLocalProvider(
                        LocalContentColor provides dismissActionContentColor,
                        content = dismissAction,
                    )
                }
            }
        }
    }
}

@Composable
private fun LegacyOneRowSnackbar(
    text: @Composable () -> Unit,
    action: @Composable (() -> Unit)?,
    dismissAction: @Composable (() -> Unit)?,
    actionTextStyle: TextStyle,
    actionTextColor: Color,
    dismissActionColor: Color,

Sources: [live-androidx-material3-material3-material3-snackbar-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 36–70)

import androidx.compose.ui.layout.AlignmentLine
import androidx.compose.ui.layout.FirstBaseline
import androidx.compose.ui.layout.LastBaseline
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.util.fastFirst
import androidx.compose.ui.util.fastFirstOrNull
import kotlin.math.max
import kotlin.math.min

/**
 * [Material Design snackbar](https://m3.material.io/components/snackbar/overview)
 *
 * Snackbars provide brief messages about app processes at the bottom of the screen.
 *
 * ![Snackbar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/snackbar.png)
 *
 * Snackbars inform users of a process that an app has performed or will perform. They appear
 * temporarily, towards the bottom of the screen. They shouldn’t interrupt the user experience, and
 * they don’t require user input to disappear.
 *
 * A Snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.
 *
 * Snackbars with an action should not timeout or self-dismiss until the user performs another
 * action. Here, moving the keyboard focus indicator to navigate through interactive elements in a
 * page is not considered an action.
 *
 * This component provides only the visuals of the Snackbar. If you need to show a Snackbar with
 * defaults on the screen, use [SnackbarHostState.showSnackbar]:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
 *

Sources: [live-androidx-material3-material3-material3-snackbar-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 386–420)

) {
    val textTag = "text"
    val actionTag = "action"
    val dismissActionTag = "dismissAction"
    Layout(
        {
            Box(Modifier.layoutId(textTag).padding(vertical = LegacySnackbarVerticalPadding)) {
                text()
            }
            if (action != null) {
                Box(Modifier.layoutId(actionTag)) {
                    CompositionLocalProvider(
                        LocalContentColor provides actionTextColor,
                        LocalTextStyle provides actionTextStyle,
                        content = action,
                    )
                }
            }
            if (dismissAction != null) {
                Box(Modifier.layoutId(dismissActionTag)) {
                    CompositionLocalProvider(
                        LocalContentColor provides dismissActionColor,
                        content = dismissAction,
                    )
                }
            }
        },
        modifier =
            Modifier.padding(
                start = HorizontalSpacing,
                end = if (dismissAction == null) HorizontalSpacingButtonSide else 0.dp,
            ),
    ) { measurables, constraints ->
        val containerWidth = min(constraints.maxWidth, ContainerMaxWidth.roundToPx())
        val actionButtonPlaceable =

Sources: [live-androidx-material3-material3-material3-snackbar-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 421–455)

            measurables.fastFirstOrNull { it.layoutId == actionTag }?.measure(constraints)
        val dismissButtonPlaceable =
            measurables.fastFirstOrNull { it.layoutId == dismissActionTag }?.measure(constraints)
        val actionButtonWidth = actionButtonPlaceable?.width ?: 0
        val actionButtonHeight = actionButtonPlaceable?.height ?: 0
        val dismissButtonWidth = dismissButtonPlaceable?.width ?: 0
        val dismissButtonHeight = dismissButtonPlaceable?.height ?: 0
        val extraSpacingWidth = if (dismissButtonWidth == 0) TextEndExtraSpacing.roundToPx() else 0
        val textMaxWidth =
            (containerWidth - actionButtonWidth - dismissButtonWidth - extraSpacingWidth)
                .coerceAtLeast(constraints.minWidth)
        val textPlaceable =
            measurables
                .fastFirst { it.layoutId == textTag }
                .measure(constraints.copy(minHeight = 0, maxWidth = textMaxWidth))

        val firstTextBaseline = textPlaceable[FirstBaseline]
        val lastTextBaseline = textPlaceable[LastBaseline]
        val hasText =
            firstTextBaseline != AlignmentLine.Unspecified &&
                lastTextBaseline != AlignmentLine.Unspecified
        val isOneLine = firstTextBaseline == lastTextBaseline || !hasText
        val dismissButtonPlaceX = containerWidth - dismissButtonWidth
        val actionButtonPlaceX = dismissButtonPlaceX - actionButtonWidth

        val textPlaceY: Int
        val containerHeight: Int
        val actionButtonPlaceY: Int
        if (isOneLine) {
            val minContainerHeight = SnackbarTokens.SingleLineContainerHeight.roundToPx()
            val contentHeight = max(actionButtonHeight, dismissButtonHeight)
            containerHeight = max(minContainerHeight, contentHeight)
            textPlaceY = (containerHeight - textPlaceable.height) / 2
            actionButtonPlaceY =
                if (actionButtonPlaceable != null) {

Sources: [live-androidx-material3-material3-material3-snackbar-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 456–490)

                    actionButtonPlaceable[FirstBaseline].let {
                        if (it != AlignmentLine.Unspecified) {
                            textPlaceY + firstTextBaseline - it
                        } else {
                            0
                        }
                    }
                } else {
                    0
                }
        } else {
            val baselineOffset = HeightToFirstLine.roundToPx()
            textPlaceY = baselineOffset - firstTextBaseline
            val minContainerHeight = SnackbarTokens.TwoLinesContainerHeight.roundToPx()
            val contentHeight = textPlaceY + textPlaceable.height
            containerHeight = max(minContainerHeight, contentHeight)
            actionButtonPlaceY =
                if (actionButtonPlaceable != null) {
                    (containerHeight - actionButtonPlaceable.height) / 2
                } else {
                    0
                }
        }
        val dismissButtonPlaceY =
            if (dismissButtonPlaceable != null) {
                (containerHeight - dismissButtonPlaceable.height) / 2
            } else {
                0
            }

        layout(containerWidth, containerHeight) {
            textPlaceable.placeRelative(0, textPlaceY)
            actionButtonPlaceable?.placeRelative(actionButtonPlaceX, actionButtonPlaceY)
            dismissButtonPlaceable?.placeRelative(dismissButtonPlaceX, dismissButtonPlaceY)
        }

Sources: [live-androidx-material3-material3-material3-snackbar-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 491–525)

    }
}

@Composable
private fun OneRowSnackbar(
    text: @Composable () -> Unit,
    action: @Composable (() -> Unit)?,
    dismissAction: @Composable (() -> Unit)?,
    actionTextStyle: TextStyle,
    actionTextColor: Color,
    dismissActionColor: Color,
) {
    val textTag = "text"
    val actionTag = "action"
    val dismissActionTag = "dismissAction"
    Layout(
        {
            Box(Modifier.layoutId(textTag).padding(vertical = SnackbarVerticalPadding)) { text() }
            if (action != null) {
                Box(Modifier.layoutId(actionTag)) {
                    CompositionLocalProvider(
                        LocalContentColor provides actionTextColor,
                        LocalTextStyle provides actionTextStyle,
                        content = action,
                    )
                }
            }
            if (dismissAction != null) {
                Box(Modifier.layoutId(dismissActionTag)) {
                    CompositionLocalProvider(
                        LocalContentColor provides dismissActionColor,
                        content = dismissAction,
                    )
                }
            }

Sources: [live-androidx-material3-material3-material3-snackbar-lines-491-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 526–560)

        },
        modifier =
            Modifier.padding(
                start = HorizontalSpacing,
                end = if (dismissAction == null) TextEndExtraSpacing else 0.dp,
            ),
    ) { measurables, constraints ->
        val minContainerHeight = SnackbarTokens.SingleLineContainerHeight.roundToPx()
        val containerWidth = min(constraints.maxWidth, ContainerMaxWidth.roundToPx())
        val actionButtonPlaceable =
            measurables.fastFirstOrNull { it.layoutId == actionTag }?.measure(constraints)
        val dismissButtonPlaceable =
            measurables.fastFirstOrNull { it.layoutId == dismissActionTag }?.measure(constraints)
        val actionButtonWidth = actionButtonPlaceable?.width ?: 0
        val dismissButtonWidth = dismissButtonPlaceable?.width ?: 0

        val extraSpacingWidth = if (dismissButtonWidth == 0) TextEndExtraSpacing.roundToPx() else 0
        val textMaxWidth =
            (containerWidth - actionButtonWidth - dismissButtonWidth - extraSpacingWidth)
                .coerceAtLeast(constraints.minWidth)
        val textPlaceable =
            measurables
                .fastFirst { it.layoutId == textTag }
                .measure(constraints.copy(minHeight = 0, maxWidth = textMaxWidth))

        val containerHeight =
            maxOf(
                minContainerHeight,
                textPlaceable.height,
                actionButtonPlaceable?.height ?: 0,
                dismissButtonPlaceable?.height ?: 0,
            )

        val dismissButtonPlaceX = containerWidth - dismissButtonWidth
        val actionButtonPlaceX = dismissButtonPlaceX - actionButtonWidth

Sources: [live-androidx-material3-material3-material3-snackbar-lines-526-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 561–595)


        layout(containerWidth, containerHeight) {
            textPlaceable.placeRelative(0, (containerHeight - textPlaceable.height) / 2)
            actionButtonPlaceable?.placeRelative(
                actionButtonPlaceX,
                (containerHeight - actionButtonPlaceable.height) / 2,
            )
            dismissButtonPlaceable?.placeRelative(
                dismissButtonPlaceX,
                (containerHeight - dismissButtonPlaceable.height) / 2,
            )
        }
    }
}

/** Contains the default values used for [Snackbar]. */
public object SnackbarDefaults {
    /** Default shape of a snackbar. */
    public val shape: Shape
        @Composable get() = SnackbarTokens.ContainerShape.value

    /** Default color of a snackbar. */
    public val color: Color
        @Composable get() = SnackbarTokens.ContainerColor.value

    /** Default content color of a snackbar. */
    public val contentColor: Color
        @Composable get() = SnackbarTokens.SupportingTextColor.value

    /** Default action color of a snackbar. */
    public val actionColor: Color
        @Composable get() = SnackbarTokens.ActionLabelTextColor.value

    /** Default action content color of a snackbar. */
    public val actionContentColor: Color

Sources: [live-androidx-material3-material3-material3-snackbar-lines-561-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 596–623)

        @Composable get() = SnackbarTokens.ActionLabelTextColor.value

    /** Default dismiss action content color of a snackbar. */
    public val dismissActionContentColor: Color
        @Composable get() = SnackbarTokens.IconColor.value
}

private val ContainerMaxWidth
    get() = 600.dp
private val HeightToFirstLine
    get() = 30.dp
private val HorizontalSpacing
    get() = 16.dp
private val HorizontalSpacingButtonSide
    get() = 8.dp
private val SeparateButtonExtraY
    get() = 2.dp
private val LegacySnackbarVerticalPadding
    get() = 6.dp
private val TextEndExtraSpacing
    get() = 8.dp
private val LongButtonVerticalOffset
    get() = 12.dp
private val SnackbarVerticalPadding
    get() = 14.dp
private val ActionButtonBottomPadding
    get() = 4.dp


Sources: [live-androidx-material3-material3-material3-snackbar-lines-596-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)

## androidx.compose.material3 Snackbar.kt source (lines 71–105)

 * If you want to customize appearance of the Snackbar, you can pass your own version as a child of
 * the [SnackbarHost] to the [Scaffold]:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithCustomSnackbar
 *
 * For a multiline sample following the Material recommended spec of a maximum of 2 lines, see:
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithMultilineSnackbar
 * @param modifier the [Modifier] to be applied to this snackbar
 * @param action action / button component to add as an action to the snackbar. Consider using
 *   [ColorScheme.inversePrimary] as the color for the action, if you do not have a predefined color
 *   you wish to use instead.
 * @param dismissAction action / button component to add as an additional close affordance action
 *   when a snackbar is non self-dismissive. Consider using [ColorScheme.inverseOnSurface] as the
 *   color for the action, if you do not have a predefined color you wish to use instead.
 * @param actionOnNewLine whether or not action should be put on a separate line. Recommended for
 *   action with long action text.
 * @param shape defines the shape of this snackbar's container
 * @param containerColor the color used for the background of this snackbar. Use [Color.Transparent]
 *   to have no color.
 * @param contentColor the preferred color for content inside this snackbar
 * @param actionContentColor the preferred content color for the optional [action] inside this
 *   snackbar
 * @param dismissActionContentColor the preferred content color for the optional [dismissAction]
 *   inside this snackbar
 * @param content content to show information about a process that an app has performed or will
 *   perform
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun Snackbar(
    modifier: Modifier = Modifier,
    action: @Composable (() -> Unit)? = null,
    dismissAction: @Composable (() -> Unit)? = null,
    actionOnNewLine: Boolean = false,

Sources: [live-androidx-material3-material3-material3-snackbar-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Snackbar.kt)
