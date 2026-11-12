---
type: reference
title: androidx.compose.material3 AppBar.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-appbar-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1
    endLine: 35
    sha256: c60c71da3ccf9d77958b5bf6d600ee915ee3575b22d83e97e4471218f1b00573
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
      import androidx.compose.animation.core.AnimationState
      import androidx.compose.animation.core.CubicBezierEasing
      import androidx.compose.animation.core.DecayAnimationSpec
      import androidx.compose.animation.core.FastOutLinearInEasing
      import androidx.compose.animation.core.animateDecay
      import androidx.compose.animation.core.animateTo
      import androidx.compose.animation.rememberSplineBasedDecay
      import androidx.compose.foundation.gestures.Orientation
      import androidx.compose.foundation.gestures.ScrollableState
      import androidx.compose.foundation.gestures.draggable
      import androidx.compose.foundation.gestures.rememberDraggableState
      import androidx.compose.foundation.layout.Arrangement
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.Column
      import androidx.compose.foundation.layout.PaddingValues
  - id: live-androidx-material3-material3-material3-appbar-lines-1034-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1034
    endLine: 1068
    sha256: 06ababe14494a72b66025f55c1330af3abf84b4e04119233a49c4c2258c70fe1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              tonalElevation = tonalElevation,
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              scrollBehavior = null,
          )

      /**
       * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
       *
       * A bottom app bar displays navigation and key actions at the bottom of small screens.
       *
       * ![Bottom app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
       *
       * @sample androidx.compose.material3.samples.SimpleBottomAppBar
       *
       * It can optionally display a [FloatingActionButton] embedded at the end of the BottomAppBar.
       *
       * @sample androidx.compose.material3.samples.BottomAppBarWithFAB
       *
       * A bottom app bar that uses a [BottomAppBarScrollBehavior] to customize its nested scrolling
       * behavior when working in conjunction with scrolling content looks like:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBar
       *
       * Also see [NavigationBar].
       *
       * @param actions the icon content of this BottomAppBar. The default layout here is a [Row], so
       *   content inside will be placed horizontally.
       * @param modifier the [Modifier] to be applied to this BottomAppBar
       * @param floatingActionButton optional floating action button at the end of this BottomAppBar
       * @param containerColor the color used for the background of this BottomAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
       *   the matching content color for [containerColor], or to the current [LocalContentColor] if
  - id: live-androidx-material3-material3-material3-appbar-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 106
    endLine: 140
    sha256: 961447f53682755263cf4e9460b4a215478142b06c78bc0c1be678eafa6bf5a5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.text.TextStyle
      import androidx.compose.ui.unit.Constraints
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.Velocity
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.isFinite
      import androidx.compose.ui.unit.isSpecified
      import androidx.compose.ui.util.fastFirst
      import androidx.compose.ui.util.fastMaxOfOrNull
      import androidx.compose.ui.util.fastSumBy
      import kotlin.math.abs
      import kotlin.math.absoluteValue
      import kotlin.math.max
      import kotlin.math.roundToInt

      /**
       * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * This small TopAppBar has slots for a title, navigation icon, and actions.
       *
       * ![Small top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
       *
       * A simple top app bar looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleTopAppBar
       *
       * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
       * scrolled under it looks like:
       *
       * @sample androidx.compose.material3.samples.PinnedTopAppBar
  - id: live-androidx-material3-material3-material3-appbar-lines-1069-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1069
    endLine: 1103
    sha256: 9dde69a77dd87c8ea8b9d7e33bcd31c3b4d6adfb821f2072ea3da894687ac08e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   [containerColor] is not a color from the theme.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param contentPadding the padding applied to the content of this BottomAppBar
       * @param windowInsets a window insets that app bar will respect.
       * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
       *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
       *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
       *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
       *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
       */
      @Composable
      public fun BottomAppBar(
          actions: @Composable RowScope.() -> Unit,
          modifier: Modifier = Modifier,
          floatingActionButton: @Composable (() -> Unit)? = null,
          containerColor: Color = BottomAppBarDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
          contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
          windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
          scrollBehavior: BottomAppBarScrollBehavior? = null,
      ): Unit =
          BottomAppBar(
              modifier = modifier,
              containerColor = containerColor,
              contentColor = contentColor,
              tonalElevation = tonalElevation,
              windowInsets = windowInsets,
              contentPadding = contentPadding,
              scrollBehavior = scrollBehavior,
          ) {
              Row(
                  modifier = Modifier.weight(1f),
  - id: live-androidx-material3-material3-material3-appbar-lines-1104-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1104
    endLine: 1138
    sha256: 8c839806d3dba53316bec3ecc593c5759d4273ffb2e98e87accfb2777691fb13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  horizontalArrangement = Arrangement.Start,
                  verticalAlignment = Alignment.CenterVertically,
                  content = actions,
              )
              if (floatingActionButton != null) {
                  Box(
                      Modifier.fillMaxHeight()
                          .padding(top = FABVerticalPadding, end = FABHorizontalPadding),
                      contentAlignment = Alignment.TopStart,
                  ) {
                      floatingActionButton()
                  }
              }
          }

      /**
       * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
       *
       * A bottom app bar displays navigation and key actions at the bottom of small screens.
       *
       * ![Bottom app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
       *
       * If you are interested in displaying a [FloatingActionButton], consider using another overload.
       *
       * Also see [NavigationBar].
       *
       * @param modifier the [Modifier] to be applied to this BottomAppBar
       * @param containerColor the color used for the background of this BottomAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
       *   the matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
  - id: live-androidx-material3-material3-material3-appbar-lines-1139-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1139
    endLine: 1173
    sha256: 37766e6b748285d72ed4737299b4707793c5fe63f8ab89906586d648c53146ff
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param contentPadding the padding applied to the content of this BottomAppBar
       * @param windowInsets a window insets that app bar will respect.
       * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
       *   inside will be placed horizontally.
       */
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BottomAppBar(
          modifier: Modifier = Modifier,
          containerColor: Color = BottomAppBarDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
          contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
          windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
          content: @Composable RowScope.() -> Unit,
      ): Unit =
          BottomAppBar(
              modifier = modifier,
              containerColor = containerColor,
              contentColor = contentColor,
              tonalElevation = tonalElevation,
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              scrollBehavior = null,
              content = content,
          )

      /**
       * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
       *
       * A bottom app bar displays navigation and key actions at the bottom of small screens.
       *
       * ![Bottom app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
  - id: live-androidx-material3-material3-material3-appbar-lines-1174-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1174
    endLine: 1208
    sha256: b3c6d273c602c302470e359a44358914b7f95d0d5e7598022920f9589128f4c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * If you are interested in displaying a [FloatingActionButton], consider using another overload.
       *
       * Also see [NavigationBar].
       *
       * @param modifier the [Modifier] to be applied to this BottomAppBar
       * @param containerColor the color used for the background of this BottomAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
       *   the matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param contentPadding the padding applied to the content of this BottomAppBar
       * @param windowInsets a window insets that app bar will respect.
       * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
       *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
       *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
       *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
       *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
       * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
       *   inside will be placed horizontally.
       */
      @Composable
      public fun BottomAppBar(
          modifier: Modifier = Modifier,
          containerColor: Color = BottomAppBarDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
          contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
          windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
          scrollBehavior: BottomAppBarScrollBehavior? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
  - id: live-androidx-material3-material3-material3-appbar-lines-1209-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1209
    endLine: 1243
    sha256: aa50a0efddff068d003ab508cf64e22c6b0a01cb41d98f0bf75f99d331112de3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          BottomAppBarLayout(
              containerHeight = BottomAppBarTokens.ContainerHeight,
              horizontalArrangement = Arrangement.Start,
              modifier = modifier,
              containerColor = containerColor,
              contentColor = contentColor,
              tonalElevation = tonalElevation,
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              scrollBehavior = scrollBehavior,
              content = content,
          )
      }

      // TODO missing image of the flexible bottom app bar.
      /**
       * [Material Design flexible bottom app
       * bar](https://m3.material.io/components/bottom-app-bar/overview)
       *
       * A flexible bottom app bar displays navigation and key actions at the bottom of small screens.
       *
       * This variation of the Bottom app bar has a [horizontalArrangement] parameter for controlling the
       * way the content is arranged. Also, it allows more flexibility in controlling the bar's expanded
       * height with an [expandedHeight] value.
       *
       * If you are interested in displaying a [FloatingActionButton], consider using another overload
       * that takes a [FloatingActionButton] parameter.
       *
       * Also see [NavigationBar].
       *
       * A flexible bottom app bar can be configured with a [horizontalArrangement], and can optionally
       * use a [BottomAppBarScrollBehavior] to collapse or expand on scroll:
       *
       * A bottom app bar with an actions row that automatically handles overflow when items do not fit:
       *
  - id: live-androidx-material3-material3-material3-appbar-lines-1244-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1244
    endLine: 1278
    sha256: 7e0a18fae7314a8db59d55f29f60c75d8ce04703e56359887d4f75e529be8e6a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @sample androidx.compose.material3.samples.BottomAppBarWithOverflow
       *
       * A bottom app bar collapsing on scroll, with items spaced around:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedAround
       *
       * A bottom app bar collapsing on scroll, with items spaced between:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedBetween
       *
       * A bottom app bar collapsing on scroll, with items spaced evenly:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedEvenly
       *
       * A bottom app bar collapsing on scroll, with items in a fixed arrangement:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarFixed
       *
       * A bottom app bar collapsing on scroll, with items in a fixed arrangement and a custom color:
       *
       * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarFixedVibrant
       * @param modifier the [Modifier] to be applied to this BottomAppBar
       * @param containerColor the color used for the background of this BottomAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
       *   the matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param contentPadding the padding applied to the content of this BottomAppBar
       * @param horizontalArrangement the horizontal arrangement of the content inside this BottomAppBar
       * @param expandedHeight the maximum height this bottom bar can reach when fully expanded. If a
       *   [scrollBehavior] is provided, the bar might collapse or expand based on scrolling. In that
       *   case, this value sets the upper limit for the bar's height during expansion. This [Dp] value
       *   must be specified, finite, and greater than zero; otherwise,
       *   [BottomAppBarDefaults.FlexibleBottomAppBarHeight] will be used as a default. In case the
       *   [scrollBehavior] is `null`, this value will simply be the fixed height of the bottom bar.
  - id: live-androidx-material3-material3-material3-appbar-lines-1279-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1279
    endLine: 1313
    sha256: 081bcff094017e1648dfbb145bd4c4206e80c62b9d757ec1655998a430a72204
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param windowInsets a window insets that app bar will respect.
       * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
       *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
       *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
       *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
       *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
       * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
       *   inside will be placed horizontally.
       *
       * @material3expressive
       */
      @Composable
      public fun FlexibleBottomAppBar(
          modifier: Modifier = Modifier,
          containerColor: Color = BottomAppBarDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          contentPadding: PaddingValues = BottomAppBarDefaults.FlexibleContentPadding,
          horizontalArrangement: Arrangement.Horizontal =
              BottomAppBarDefaults.FlexibleHorizontalArrangement,
          expandedHeight: Dp = BottomAppBarDefaults.FlexibleBottomAppBarHeight,
          windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
          scrollBehavior: BottomAppBarScrollBehavior? = null,
          content: @Composable RowScope.() -> Unit,
      ) {
          BottomAppBarLayout(
              containerHeight =
                  if (expandedHeight.isFinite && expandedHeight.isSpecified && expandedHeight > 0.dp) {
                      expandedHeight
                  } else {
                      BottomAppBarDefaults.FlexibleBottomAppBarHeight
                  },
              horizontalArrangement = horizontalArrangement,
              modifier = modifier,
              containerColor = containerColor,
              contentColor = contentColor,
  - id: live-androidx-material3-material3-material3-appbar-lines-1314-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1314
    endLine: 1348
    sha256: e763f96046a02e754179d01c4d2e759070a40eccb646149057f8a01391255662
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              tonalElevation = AppBarTokens.ContainerElevation,
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              scrollBehavior = scrollBehavior,
              content = content,
          )
      }

      @Composable
      private fun BottomAppBarLayout(
          containerHeight: Dp,
          horizontalArrangement: Arrangement.Horizontal,
          modifier: Modifier = Modifier,
          containerColor: Color,
          contentColor: Color,
          tonalElevation: Dp,
          contentPadding: PaddingValues,
          windowInsets: WindowInsets,
          scrollBehavior: BottomAppBarScrollBehavior?,
          content: @Composable RowScope.() -> Unit,
      ) {
          val touchExplorationServiceEnabled by rememberTouchExplorationService()
          val activeScrollBehavior = if (!touchExplorationServiceEnabled) scrollBehavior else null
          // Set up support for resizing the bottom app bar when vertically dragging the bar itself.
          val appBarDragModifier =
              if (activeScrollBehavior != null && !activeScrollBehavior.isPinned) {
                  Modifier.draggable(
                      orientation = Orientation.Vertical,
                      state =
                          rememberDraggableState { delta ->
                              activeScrollBehavior.state.heightOffset -= delta
                          },
                      onDragStopped = { velocity ->
                          settleAppBarBottom(
                              activeScrollBehavior.state,
  - id: live-androidx-material3-material3-material3-appbar-lines-1349-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1349
    endLine: 1383
    sha256: aaa5cfbd93700893f1afcb36b6c8297c4a7781aafe854d6f972289c18a38fd88
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              velocity,
                              activeScrollBehavior.flingAnimationSpec,
                              activeScrollBehavior.snapAnimationSpec,
                          )
                      },
                  )
              } else {
                  Modifier
              }

          // Compose a Surface with a Row content.
          // The height of the app bar is determined by subtracting the bar's height offset from the
          // app bar's defined constant height value (i.e. the ContainerHeight token).
          Surface(
              color = containerColor,
              contentColor = contentColor,
              tonalElevation = tonalElevation,
              // TODO(b/209583788): Consider adding a shape parameter if updated design guidance allows
              shape = BottomAppBarTokens.ContainerShape.value,
              modifier =
                  modifier
                      .layout { measurable, constraints ->
                          val placeable = measurable.measure(constraints)

                          // Sets the app bar's height offset to collapse the entire bar's height when
                          // content is scrolled.
                          activeScrollBehavior?.state?.heightOffsetLimit = -placeable.height.toFloat()

                          val height =
                              (placeable.height + (activeScrollBehavior?.state?.heightOffset ?: 0f))
                                  .coerceAtLeast(0f)
                          layout(placeable.width, height.roundToInt()) { placeable.place(0, 0) }
                      }
                      .then(appBarDragModifier),
          ) {
  - id: live-androidx-material3-material3-material3-appbar-lines-1384-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1384
    endLine: 1418
    sha256: 9daa36345124f292100eb552d2f81ace857505223340f1012f62ece8b28a2096
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              Row(
                  Modifier.fillMaxWidth()
                      .windowInsetsPadding(windowInsets)
                      .height(containerHeight)
                      .padding(contentPadding),
                  horizontalArrangement = horizontalArrangement,
                  verticalAlignment = Alignment.CenterVertically,
                  content = content,
              )
          }
      }

      /**
       * A TopAppBarScrollBehavior defines how an app bar should behave when the content under it is
       * scrolled.
       *
       * @see [TopAppBarDefaults.pinnedScrollBehavior]
       * @see [TopAppBarDefaults.enterAlwaysScrollBehavior]
       * @see [TopAppBarDefaults.exitUntilCollapsedScrollBehavior]
       */
      @Stable
      public interface TopAppBarScrollBehavior {

          /**
           * A [TopAppBarState] that is attached to this behavior and is read and updated when scrolling
           * happens.
           */
          public val state: TopAppBarState

          /**
           * Indicates whether the top app bar is pinned.
           *
           * A pinned app bar will stay fixed in place when content is scrolled and will not react to any
           * drag gestures.
           */
  - id: live-androidx-material3-material3-material3-appbar-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 141
    endLine: 175
    sha256: ef92408c5c1030bf0742c8db386fda5b855a85990f22461f6b08c28ae2019447
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * A top app bar that uses an [EnterAlwaysScrollBehavior] to collapse and expand as content is
       * scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBar
       * @param title the title to be displayed in the top app bar
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
       *   to collapse or expand, this value will represent the maximum height that the bar will be
       *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
       *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       */
      @Deprecated(
          message = "Deprecated in favor of TopAppBar with contentPadding parameter",
          level = DeprecationLevel.HIDDEN,
      )
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun TopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
  - id: live-androidx-material3-material3-material3-appbar-lines-1419-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1419
    endLine: 1453
    sha256: 96e3c71dd704c3f678edda27a582bb95069798ed5ed4e0b8fe5ab7d29d331103
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          public val isPinned: Boolean

          /**
           * An optional [AnimationSpec] that defines how the top app bar snaps to either fully collapsed
           * or fully extended state when a fling or a drag scrolled it into an intermediate position. If
           * `null` is provided, the app bar will not snap and will remain in its current state.
           */
          public val snapAnimationSpec: AnimationSpec<Float>?

          /**
           * An optional [DecayAnimationSpec] that defines how to fling the top app bar when the user
           * flings the app bar itself, or the scrollable content. If `null` is provided, the app bar will
           * not continue to animate its height based on the scroll velocity.
           */
          public val flingAnimationSpec: DecayAnimationSpec<Float>?

          /**
           * A [NestedScrollConnection] that should be attached to a
           * [androidx.compose.ui.input.nestedscroll.nestedScroll] in order to keep track of the scroll
           * events.
           */
          public val nestedScrollConnection: NestedScrollConnection
      }

      /** Contains default values used for the top app bar implementations. */
      public object TopAppBarDefaults {

          /**
           * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
           * between the provided colors according to the Material Design specification.
           */
          @Composable
          public fun topAppBarColors(): TopAppBarColors = MaterialTheme.colorScheme.defaultTopAppBarColors

          /**
  - id: live-androidx-material3-material3-material3-appbar-lines-1454-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1454
    endLine: 1488
    sha256: c22986f422f25b5c7d1c640a31b1a32e3d452151cddaf0fc654ae183c3023a7d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
           * between the provided colors according to the Material Design specification.
           *
           * @param containerColor the container color
           * @param scrolledContainerColor the container color when content is scrolled behind it
           * @param navigationIconContentColor the content color used for the navigation icon
           * @param titleContentColor the content color used for the title
           * @param actionIconContentColor the content color used for actions
           * @param subtitleContentColor the content color used for the subtitle
           * @return the resulting [TopAppBarColors] used for the top app bar
           */
          @Composable
          public fun topAppBarColors(
              containerColor: Color = Color.Unspecified,
              scrolledContainerColor: Color = Color.Unspecified,
              navigationIconContentColor: Color = Color.Unspecified,
              titleContentColor: Color = Color.Unspecified,
              actionIconContentColor: Color = Color.Unspecified,
              subtitleContentColor: Color = Color.Unspecified,
          ): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
                  containerColor,
                  scrolledContainerColor,
                  navigationIconContentColor,
                  titleContentColor,
                  actionIconContentColor,
                  subtitleContentColor,
              )

          /**
           * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
           * between the provided colors according to the Material Design specification.
           *
           * @param containerColor the container color
           * @param scrolledContainerColor the container color when content is scrolled behind it
  - id: live-androidx-material3-material3-material3-appbar-lines-1489-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1489
    endLine: 1523
    sha256: de13fb61694d57363c7cc365c21da9ed83e6b2eb13adca33c3132a447812d7bd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param navigationIconContentColor the content color used for the navigation icon
           * @param titleContentColor the content color used for the title
           * @param actionIconContentColor the content color used for actions
           * @return the resulting [TopAppBarColors] used for the top app bar
           */
          @Deprecated(
              "Maintained for binary compatibility in favor of topAppBarColors with subtitleContentColor",
              level = DeprecationLevel.HIDDEN,
          )
          @Composable
          public fun topAppBarColors(
              containerColor: Color = Color.Unspecified,
              scrolledContainerColor: Color = Color.Unspecified,
              navigationIconContentColor: Color = Color.Unspecified,
              titleContentColor: Color = Color.Unspecified,
              actionIconContentColor: Color = Color.Unspecified,
          ): TopAppBarColors =
              topAppBarColors(
                  containerColor = containerColor,
                  scrolledContainerColor = scrolledContainerColor,
                  navigationIconContentColor = navigationIconContentColor,
                  titleContentColor = titleContentColor,
                  actionIconContentColor = actionIconContentColor,
                  subtitleContentColor = titleContentColor,
              )

          internal val ColorScheme.defaultTopAppBarColors: TopAppBarColors
              get() {
                  return defaultTopAppBarColorsCached
                      ?: TopAppBarColors(
                              containerColor = fromToken(AppBarTokens.ContainerColor),
                              scrolledContainerColor = fromToken(AppBarTokens.OnScrollContainerColor),
                              navigationIconContentColor = fromToken(AppBarTokens.LeadingIconColor),
                              titleContentColor = fromToken(AppBarTokens.TitleColor),
                              actionIconContentColor = fromToken(AppBarTokens.TrailingIconColor),
  - id: live-androidx-material3-material3-material3-appbar-lines-1524-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1524
    endLine: 1558
    sha256: 8ee65dc50aba4945bdd8a0ba9ddc283c15ae069cd565aed81d4b6b989beea55c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              subtitleContentColor = fromToken(AppBarTokens.SubtitleColor),
                          )
                          .also { defaultTopAppBarColorsCached = it }
              }

          /** Default padding used for [TopAppBar] content */
          public val ContentPadding: PaddingValues = PaddingValues(all = 0.dp)

          /** Default insets to be used and consumed by the top app bars */
          public val windowInsets: WindowInsets
              @Composable
              get() =
                  WindowInsets.systemBarsForVisualComponents.only(
                      WindowInsetsSides.Horizontal + WindowInsetsSides.Top
                  )

          /**
           * Default [AnimationSpec] that defines how the top app bar snaps to either fully collapsed or
           * fully extended state when a fling or a drag scrolled it into an intermediate position.
           */
          public val snapAnimationSpec: AnimationSpec<Float>
              @Composable get() = MotionSchemeKeyTokens.DefaultEffects.value()

          /**
           * Default [DecayAnimationSpec] that defines how to fling the top app bar when the user flings
           * the app bar itself, or the scrollable content.
           */
          public val flingAnimationSpec: DecayAnimationSpec<Float>
              @Composable get() = rememberSplineBasedDecay()

          /**
           * Creates a [TopAppBarColors] for [CenterAlignedTopAppBar]s. The default implementation
           * animates between the provided colors according to the Material Design specification.
           */
          @Deprecated(
  - id: live-androidx-material3-material3-material3-appbar-lines-1559-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1559
    endLine: 1593
    sha256: e3bba5017837d427cc227042d348bc6fdf30301eebc8a2f8dc3354a9fd3eea24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              "Use topAppBarColors instead",
              replaceWith = ReplaceWith("topAppBarColors()"),
              DeprecationLevel.WARNING,
          )
          @Composable
          public fun centerAlignedTopAppBarColors(): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors

          /**
           * Creates a [TopAppBarColors] for [CenterAlignedTopAppBar]s. The default implementation
           * animates between the provided colors according to the Material Design specification.
           *
           * @param containerColor the container color
           * @param scrolledContainerColor the container color when content is scrolled behind it
           * @param navigationIconContentColor the content color used for the navigation icon
           * @param titleContentColor the content color used for the title
           * @param actionIconContentColor the content color used for actions
           * @return the resulting [TopAppBarColors] used for the top app bar
           */
          @Deprecated(
              "Use topAppBarColors instead",
              replaceWith =
                  ReplaceWith(
                      "topAppBarColors(containerColor, scrolledContainerColor, " +
                          "navigationIconContentColor, titleContentColor, actionIconContentColor)"
                  ),
              DeprecationLevel.WARNING,
          )
          @Composable
          public fun centerAlignedTopAppBarColors(
              containerColor: Color = Color.Unspecified,
              scrolledContainerColor: Color = Color.Unspecified,
              navigationIconContentColor: Color = Color.Unspecified,
              titleContentColor: Color = Color.Unspecified,
              actionIconContentColor: Color = Color.Unspecified,
  - id: live-androidx-material3-material3-material3-appbar-lines-1594-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1594
    endLine: 1628
    sha256: cd82177abc962f326ec8e7d522bca04cb8fda866de3efbf0a04144c49a9b837b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
                  containerColor,
                  scrolledContainerColor,
                  navigationIconContentColor,
                  titleContentColor,
                  actionIconContentColor,
              )

          /**
           * Creates a [TopAppBarColors] for [MediumTopAppBar]s. The default implementation interpolates
           * between the provided colors as the top app bar scrolls according to the Material Design
           * specification.
           */
          @Deprecated(
              "Use topAppBarColors instead",
              replaceWith = ReplaceWith("topAppBarColors()"),
              DeprecationLevel.WARNING,
          )
          @Composable
          public fun mediumTopAppBarColors(): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors

          /**
           * Creates a [TopAppBarColors] for [MediumTopAppBar]s. The default implementation interpolates
           * between the provided colors as the top app bar scrolls according to the Material Design
           * specification.
           *
           * @param containerColor the container color
           * @param scrolledContainerColor the container color when content is scrolled behind it
           * @param navigationIconContentColor the content color used for the navigation icon
           * @param titleContentColor the content color used for the title
           * @param actionIconContentColor the content color used for actions
           * @return the resulting [TopAppBarColors] used for the top app bar
           */
  - id: live-androidx-material3-material3-material3-appbar-lines-1629-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1629
    endLine: 1663
    sha256: 8d6c79b65ffb6ed2833e0169c5344337d5004a1448412edb7cc0b859865f1fc5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Deprecated(
              "Use topAppBarColors instead",
              replaceWith =
                  ReplaceWith(
                      "topAppBarColors(containerColor, scrolledContainerColor, " +
                          "navigationIconContentColor, titleContentColor, actionIconContentColor)"
                  ),
              DeprecationLevel.WARNING,
          )
          @Composable
          public fun mediumTopAppBarColors(
              containerColor: Color = Color.Unspecified,
              scrolledContainerColor: Color = Color.Unspecified,
              navigationIconContentColor: Color = Color.Unspecified,
              titleContentColor: Color = Color.Unspecified,
              actionIconContentColor: Color = Color.Unspecified,
          ): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
                  containerColor,
                  scrolledContainerColor,
                  navigationIconContentColor,
                  titleContentColor,
                  actionIconContentColor,
              )

          /**
           * Creates a [TopAppBarColors] for [LargeTopAppBar]s. The default implementation interpolates
           * between the provided colors as the top app bar scrolls according to the Material Design
           * specification.
           */
          @Deprecated(
              "Use topAppBarColors instead",
              replaceWith = ReplaceWith("topAppBarColors()"),
              DeprecationLevel.WARNING,
          )
  - id: live-androidx-material3-material3-material3-appbar-lines-1664-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1664
    endLine: 1698
    sha256: f7d05b19eb137cb80abe89e8fbc7a4096cc091314d774b9ad233b587f600dc5e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          @Composable
          public fun largeTopAppBarColors(): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors

          /**
           * Creates a [TopAppBarColors] for [LargeTopAppBar]s. The default implementation interpolates
           * between the provided colors as the top app bar scrolls according to the Material Design
           * specification.
           *
           * @param containerColor the container color
           * @param scrolledContainerColor the container color when content is scrolled behind it
           * @param navigationIconContentColor the content color used for the navigation icon
           * @param titleContentColor the content color used for the title
           * @param actionIconContentColor the content color used for actions
           * @return the resulting [TopAppBarColors] used for the top app bar
           */
          @Deprecated(
              "Use topAppBarColors instead",
              replaceWith =
                  ReplaceWith(
                      "topAppBarColors(containerColor, scrolledContainerColor, " +
                          "navigationIconContentColor, titleContentColor, actionIconContentColor)"
                  ),
              DeprecationLevel.WARNING,
          )
          @Composable
          public fun largeTopAppBarColors(
              containerColor: Color = Color.Unspecified,
              scrolledContainerColor: Color = Color.Unspecified,
              navigationIconContentColor: Color = Color.Unspecified,
              titleContentColor: Color = Color.Unspecified,
              actionIconContentColor: Color = Color.Unspecified,
          ): TopAppBarColors =
              MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
                  containerColor,
  - id: live-androidx-material3-material3-material3-appbar-lines-1699-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1699
    endLine: 1733
    sha256: f9f55ee0208f46e7bc4c02c49a17946f8bcdb666b23762fd0a3b433c0c9a4671
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  scrolledContainerColor,
                  navigationIconContentColor,
                  titleContentColor,
                  actionIconContentColor,
              )

          /**
           * Returns a pinned [TopAppBarScrollBehavior] that tracks nested-scroll callbacks and updates
           * its [TopAppBarState.contentOffset] accordingly. Note: If your layout utilizes `reverseLayout`
           * or `reverseScrolling`, please use the overload that takes a [ScrollableState] parameter.
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   pinned [TopAppBarScrollBehavior]
           */
          @Composable
          public fun pinnedScrollBehavior(
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
          ): TopAppBarScrollBehavior =
              remember(state, canScroll) { PinnedScrollBehavior(state = state, canScroll = canScroll) }

          /**
           * Returns a pinned [TopAppBarScrollBehavior] that tracks nested-scroll callbacks and updates
           * its [TopAppBarState.contentOffset] accordingly.
           *
           * This overload is intended for use cases where the scroll state is represented by a
           * [ScrollableState] (e.g. `LazyVerticalGrid`). It automatically determines if the content is at
           * the start by observing the scroll position of the provided [ScrollableState].
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
  - id: live-androidx-material3-material3-material3-appbar-lines-1734-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1734
    endLine: 1768
    sha256: acdacf1f99dd9a2ec93a7d60ae5a8b00dbae3660a72069038d97b08d95983926
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * A sample for a pinned small [TopAppBar] that is scrolled with a reversed [LazyVerticalGrid]:
           *
           * @sample androidx.compose.material3.samples.PinnedTopAppBarWithReversedLazyGrid
           *
           * A sample for a pinned small [TopAppBar] that is scrolled with a pre-scrolled [LazyColumn]:
           *
           * @sample androidx.compose.material3.samples.PinnedTopAppBarWithPreScrolledLazyColumn
           * @param scrollableState the [ScrollableState] of the scrollable container, used to determine
           *   if the content is at the start
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   pinned [TopAppBarScrollBehavior]
           */
          @Composable
          public fun pinnedScrollBehavior(
              scrollableState: ScrollableState,
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
          ): TopAppBarScrollBehavior {
              return remember(scrollableState, state, canScroll) {
                  PinnedScrollBehavior(
                      state = state,
                      canScroll = canScroll,
                      isScrollingContentAtStart = {
                          (scrollableState.scrollIndicatorState?.scrollOffset ?: 0) == 0
                      },
                  )
              }
          }

          /**
           * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
           * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
           * immediately appear when the content is pulled down. Note: If your layout utilizes
  - id: live-androidx-material3-material3-material3-appbar-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 176
    endLine: 210
    sha256: 9e8b7f20f323399e984305bd825c6b29302302529be0004f0fdbd655ed806c99
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          TopAppBar(
              title = title,
              modifier = modifier,
              navigationIcon = navigationIcon,
              actions = actions,
              expandedHeight = expandedHeight,
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
              contentPadding = TopAppBarDefaults.ContentPadding,
          )

      /**
       * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * This small TopAppBar has slots for a title, navigation icon, and actions.
       *
       * ![Small top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
       *
       * A top app bar looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleTopAppBar
       *
       * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
       * scrolled under it looks like:
       *
       * @sample androidx.compose.material3.samples.PinnedTopAppBar
       *
  - id: live-androidx-material3-material3-material3-appbar-lines-1769-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1769
    endLine: 1803
    sha256: 44ddf83d33b88e9c1cd61dedca006584c76c033e373eca13ccc403ca60a43294
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * `reverseLayout` or `reverseScrolling`, please use the overload that takes a [ScrollableState]
           * parameter.
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [TopAppBarScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
           *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
           *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
           *   in its current state.
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
           *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
           *   provided, the app bar will not continue to animate its height based on the scroll velocity.
           */
          @Composable
          public fun enterAlwaysScrollBehavior(
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
              snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
          ): TopAppBarScrollBehavior =
              remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
                  EnterAlwaysScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                  )
              }

          /**
           * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
  - id: live-androidx-material3-material3-material3-appbar-lines-1804-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1804
    endLine: 1838
    sha256: bce8a9252fc3e2f744e5e906428327b64125e97a9c56bf89d84ee2498bfba152
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
           * immediately appear when the content is pulled down.
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [EnterAlwaysScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
           *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
           *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
           *   in its current state.
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
           *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
           *   provided, the app bar will not continue to animate its height based on the scroll velocity.
           * @param reverseLayout indicates that this behavior is applied to a scrollable content that has
           *   a reversed direction of scrolling and layout
           */
          @Deprecated(
              message =
                  "Please use the enterAlwaysScrollBehavior() function that takes a scrollableState parameter.",
              replaceWith =
                  ReplaceWith(
                      "enterAlwaysScrollBehavior(scrollableState, state, canScroll, snapAnimationSpec, flingAnimationSpec)"
                  ),
              level = DeprecationLevel.WARNING,
          )
          @Composable
          public fun enterAlwaysScrollBehavior(
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
              snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
              reverseLayout: Boolean = false,
  - id: live-androidx-material3-material3-material3-appbar-lines-1839-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1839
    endLine: 1873
    sha256: 978c25beddb69c4e269d7d8e80a6ff04e8eca3d7e57a96ae4d63f4673d7b738c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): TopAppBarScrollBehavior =
              remember(state, canScroll, snapAnimationSpec, flingAnimationSpec, reverseLayout) {
                  LegacyEnterAlwaysScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                      reverseLayout = reverseLayout,
                  )
              }

          /**
           * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
           * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
           * immediately appear when the content is pulled down.
           *
           * This overload is intended for use cases that are not covered by the standard overloads, such
           * as when a custom `isScrollingContentAtStart` state needs to be determined for custom or
           * complex layouts (e.g. `LazyVerticalGrid` with `reverseLayout = true`).
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [TopAppBarScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
           *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
           *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
           *   in its current state.
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
           *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
           *   provided, the app bar will not continue to animate its height based on the scroll velocity.
           * @param isScrollingContentAtStart A callback that returns true when the scrollable is at the
           *   origin of its content. Handles reversed layouts to ensure "start" always refers to the
  - id: live-androidx-material3-material3-material3-appbar-lines-1874-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1874
    endLine: 1908
    sha256: a6a42bf0b954922718e9d29d364e9b62c0afa02062540f6086d4baa2422b5990
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   first logical item.
           */
          @Deprecated(
              message =
                  "Please use the enterAlwaysScrollBehavior function that takes a ScrollableState parameter.",
              level = DeprecationLevel.WARNING,
          )
          @Composable
          public fun enterAlwaysScrollBehavior(
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
              snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
              isScrollingContentAtStart: () -> Boolean = { true },
          ): TopAppBarScrollBehavior =
              remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
                  EnterAlwaysScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                      isScrollingContentAtStart = isScrollingContentAtStart,
                  )
              }

          /**
           * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
           * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
           * immediately appear when the content is pulled down.
           *
           * This overload is intended for use cases with scrollable containers (such as [LazyColumn], a
           * [Column] with `verticalScroll`, or any other container that implements [ScrollableState])
           * when the content is pre-scrolled or uses `reverseLayout`/`reverseScrolling`, as it correctly
           * handles [TopAppBar] color transitions for these specific scroll states.
           *
  - id: live-androidx-material3-material3-material3-appbar-lines-1909-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1909
    endLine: 1943
    sha256: 6b253972fe7a0f30a8b2bf2ed44cf8b0610aec5c27523da65d4a326ba884c4ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * An enter always top app bar with reverse scrolling looks like:
           *
           * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBarWithReverseScrolling
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * @param scrollableState the [ScrollableState] of the scrollable container, used to determine
           *   if the content is at the start
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [TopAppBarScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
           *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
           *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
           *   in its current state.
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
           *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
           *   provided, the app bar will not continue to animate its height based on the scroll velocity.
           */
          @Composable
          public fun enterAlwaysScrollBehavior(
              scrollableState: ScrollableState,
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
              snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
          ): TopAppBarScrollBehavior {
              return remember(scrollableState, state, canScroll, snapAnimationSpec, flingAnimationSpec) {
                  EnterAlwaysScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                      isScrollingContentAtStart = {
  - id: live-androidx-material3-material3-material3-appbar-lines-1944-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1944
    endLine: 1978
    sha256: cedc13ed19472c89c65e609521740d005c96d9fe094256473a335daf2c2bc040
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          (scrollableState.scrollIndicatorState?.scrollOffset ?: 0) == 0
                      },
                  )
              }
          }

          /**
           * Returns a [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and
           * height of the top app bar.
           *
           * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse
           * when the nested content is pulled up, and will expand back the collapsed area when the
           * content is pulled all the way down.
           *
           * The returned [TopAppBarScrollBehavior] is remembered across compositions.
           *
           * A sample for a [MediumTopAppBar] with [exitUntilCollapsedScrollBehavior]:
           *
           * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumTopAppBar
           * @param state the state object to be used to control or observe the top app bar's scroll
           *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [ExitUntilCollapsedScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
           *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
           *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
           *   in its current state.
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
           *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
           *   provided, the app bar will not continue to animate its height based on the scroll velocity.
           */
          @Composable
          public fun exitUntilCollapsedScrollBehavior(
              state: TopAppBarState = rememberTopAppBarState(),
              canScroll: () -> Boolean = { true },
  - id: live-androidx-material3-material3-material3-appbar-lines-1979-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 1979
    endLine: 2013
    sha256: 7c12ecd678b3abbe68f114450e65dbc186f0683cd31027e4659fb79c3767c9ba
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
          ): TopAppBarScrollBehavior =
              remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
                  ExitUntilCollapsedScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                  )
              }

          /** The default expanded height of a [TopAppBar] and the [CenterAlignedTopAppBar]. */
          public val TopAppBarExpandedHeight: Dp = AppBarSmallTokens.ContainerHeight

          /** The default height of a [MediumTopAppBar] when collapsed by a [TopAppBarScrollBehavior]. */
          public val MediumAppBarCollapsedHeight: Dp = AppBarSmallTokens.ContainerHeight

          /** The default expanded height of a [MediumTopAppBar]. */
          public val MediumAppBarExpandedHeight: Dp = AppBarMediumTokens.ContainerHeight

          /** The default expanded height of a [MediumFlexibleTopAppBar] without subtitle. */
          public val MediumFlexibleAppBarWithoutSubtitleExpandedHeight: Dp =
              AppBarMediumFlexibleTokens.ContainerHeight

          /** The default expanded height of a [MediumFlexibleTopAppBar] with subtitle. */
          public val MediumFlexibleAppBarWithSubtitleExpandedHeight: Dp =
              AppBarMediumFlexibleTokens.LargeContainerHeight

          /** The default height of a [LargeTopAppBar] when collapsed by a [TopAppBarScrollBehavior]. */
          public val LargeAppBarCollapsedHeight: Dp = AppBarSmallTokens.ContainerHeight

          /** The default expanded height of a [LargeTopAppBar]. */
          public val LargeAppBarExpandedHeight: Dp = AppBarLargeTokens.ContainerHeight
  - id: live-androidx-material3-material3-material3-appbar-lines-2014-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2014
    endLine: 2048
    sha256: 1b9d22c14b5c4eefcb0de2e2912d49a28678c5eb5d7425e02e35c27368c5d129
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          /** The default expanded height of a [LargeFlexibleTopAppBar] without subtitle. */
          public val LargeFlexibleAppBarWithoutSubtitleExpandedHeight: Dp =
              AppBarLargeFlexibleTokens.ContainerHeight

          /** The default expanded height of a [LargeFlexibleTopAppBar] with subtitle. */
          public val LargeFlexibleAppBarWithSubtitleExpandedHeight: Dp =
              AppBarLargeFlexibleTokens.LargeContainerHeight
      }

      /**
       * Creates a [TopAppBarState] that is remembered across compositions.
       *
       * @param initialHeightOffsetLimit the initial value for [TopAppBarState.heightOffsetLimit], which
       *   represents the pixel limit that a top app bar is allowed to collapse when the scrollable
       *   content is scrolled
       * @param initialHeightOffset the initial value for [TopAppBarState.heightOffset]. The initial
       *   offset height offset should be between zero and [initialHeightOffsetLimit].
       * @param initialContentOffset the initial value for [TopAppBarState.contentOffset]
       */
      @Composable
      public fun rememberTopAppBarState(
          initialHeightOffsetLimit: Float = -Float.MAX_VALUE,
          initialHeightOffset: Float = 0f,
          initialContentOffset: Float = 0f,
      ): TopAppBarState {
          return rememberSaveable(saver = TopAppBarState.Saver) {
              TopAppBarState(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)
          }
      }

      /**
       * A state object that can be hoisted to control and observe the top app bar state. The state is
       * read and updated by a [TopAppBarScrollBehavior] implementation.
       *
       * In most cases, this state will be created via [rememberTopAppBarState].
  - id: live-androidx-material3-material3-material3-appbar-lines-2049-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2049
    endLine: 2083
    sha256: a60c7a5657c2cb8f4d3c0001bae6934d95606ed010ea5645b4c176687dca4ad0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @param initialHeightOffsetLimit the initial value for [TopAppBarState.heightOffsetLimit]
       * @param initialHeightOffset the initial value for [TopAppBarState.heightOffset]
       * @param initialContentOffset the initial value for [TopAppBarState.contentOffset]
       */
      @Stable
      public class TopAppBarState(
          initialHeightOffsetLimit: Float,
          initialHeightOffset: Float,
          initialContentOffset: Float,
      ) {

          /**
           * The top app bar's height offset limit in pixels, which represents the limit that a top app
           * bar is allowed to collapse to.
           *
           * Use this limit to coerce the [heightOffset] value when it's updated.
           */
          public var heightOffsetLimit: Float = initialHeightOffsetLimit

          /**
           * The top app bar's current height offset in pixels. This height offset is applied to the fixed
           * height of the app bar to control the displayed height when content is being scrolled.
           *
           * Updates to the [heightOffset] value are coerced between zero and [heightOffsetLimit].
           */
          public var heightOffset: Float
              get() = _heightOffset.floatValue
              set(newOffset) {
                  _heightOffset.floatValue =
                      newOffset.coerceIn(minimumValue = heightOffsetLimit, maximumValue = 0f)
              }

          /**
           * The total offset of the content scrolled under the top app bar.
  - id: live-androidx-material3-material3-material3-appbar-lines-2084-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2084
    endLine: 2118
    sha256: b1f4124c3ed6031407196e24bcfee3fdb95a98f568127138dcfb65f65e9a173e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * The content offset is used to compute the [overlappedFraction], which can later be read by an
           * implementation.
           *
           * This value is updated by a [TopAppBarScrollBehavior] whenever a nested scroll connection
           * consumes scroll events. A common implementation would update the value to be the sum of all
           * [NestedScrollConnection.onPostScroll] `consumed.y` values.
           */
          public var contentOffset: Float by mutableFloatStateOf(initialContentOffset)

          /**
           * Determines if the content is currently at the starting scroll position. This is used to
           * calculate the [overlappedFraction] for the app bar's visual state.
           */
          internal var isScrollingContentAtStart: () -> Boolean = { true }

          /**
           * A value that represents the collapsed height percentage of the app bar.
           *
           * A `0.0` represents a fully expanded bar, and `1.0` represents a fully collapsed bar (computed
           * as [heightOffset] / [heightOffsetLimit]).
           */
          public val collapsedFraction: Float
              get() =
                  if (heightOffsetLimit != 0f) {
                      heightOffset / heightOffsetLimit
                  } else {
                      0f
                  }

          /**
           * A value that represents the percentage of the app bar area that is overlapping with the
           * content scrolled behind it.
           *
           * A `0.0` indicates that the app bar does not overlap any content, while `1.0` indicates that
  - id: live-androidx-material3-material3-material3-appbar-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 211
    endLine: 243
    sha256: 7af9bed5469fa1fafca8a0374a6423bf1ee07669324d494655e0bc87ca41f635
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * A top app bar that uses an [EnterAlwaysScrollBehavior] to collapse and expand as content is
       * scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBar
       * @param title the title to be displayed in the top app bar
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
       *   to collapse or expand, this value will represent the maximum height that the bar will be
       *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
       *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @param contentPadding the padding applied to the content of this TopAppBar.
       */
      @Composable
      public fun TopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
  - id: live-androidx-material3-material3-material3-appbar-lines-2119-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2119
    endLine: 2153
    sha256: 346ce774c00333b36cc10c2cee9ff9f1d7c00a2975d39ace215bf358ecc6420f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * the entire visible app bar area overlaps the scrolled content.
           */
          public val overlappedFraction: Float
              get() =
                  if (!isScrollingContentAtStart() && contentOffset == 0f) {
                      1f
                  } else if (heightOffsetLimit != 0f) {
                      1 -
                          ((heightOffsetLimit + contentOffset.absoluteValue).coerceIn(
                              minimumValue = heightOffsetLimit,
                              maximumValue = 0f,
                          ) / heightOffsetLimit)
                  } else {
                      0f
                  }

          public companion object {
              /** The default [Saver] implementation for [TopAppBarState]. */
              public val Saver: Saver<TopAppBarState, *> =
                  listSaver(
                      save = { listOf(it.heightOffsetLimit, it.heightOffset, it.contentOffset) },
                      restore = {
                          TopAppBarState(
                              initialHeightOffsetLimit = it[0],
                              initialHeightOffset = it[1],
                              initialContentOffset = it[2],
                          )
                      },
                  )
          }

          private var _heightOffset = mutableFloatStateOf(initialHeightOffset)
      }

      /**
  - id: live-androidx-material3-material3-material3-appbar-lines-2154-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2154
    endLine: 2188
    sha256: d2007adfa920f37d635c944ee76da137a85e7e561bf5862b192918113fae15c6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Represents the colors used by a top app bar in different states. This implementation animates the
       * container color according to the top app bar scroll state. It does not animate the leading,
       * headline, or trailing colors.
       *
       * @param containerColor the color used for the background of this TopAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param scrolledContainerColor the container color when content is scrolled behind it
       * @param navigationIconContentColor the content color used for the navigation icon
       * @param titleContentColor the content color used for the title
       * @param actionIconContentColor the content color used for actions
       * @param subtitleContentColor the content color used for a subtitle
       * @constructor create an instance with arbitrary colors, see [TopAppBarColors] for a factory method
       *   using the default material3 spec
       */
      @Stable
      public class TopAppBarColors(
          public val containerColor: Color,
          public val scrolledContainerColor: Color,
          public val navigationIconContentColor: Color,
          public val titleContentColor: Color,
          public val actionIconContentColor: Color,
          public val subtitleContentColor: Color,
      ) {
          @Deprecated(
              "Use the TopAppBarColors constructor with subtitleContentColor",
              replaceWith =
                  ReplaceWith(
                      "TopAppBarColors(containerColor, scrolledContainerColor," +
                          "navigationIconContentColor, titleContentColor, actionIconContentColor, " +
                          "subtitleContentColor)"
                  ),
              DeprecationLevel.WARNING,
          )
          public constructor(
              containerColor: Color,
  - id: live-androidx-material3-material3-material3-appbar-lines-2189-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2189
    endLine: 2223
    sha256: f04c07c8a8434bb90c781d638ce4d59eefe41827393b53d7960e339957b26c3f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              scrolledContainerColor: Color,
              navigationIconContentColor: Color,
              titleContentColor: Color,
              actionIconContentColor: Color,
          ) : this(
              containerColor = containerColor,
              scrolledContainerColor = scrolledContainerColor,
              navigationIconContentColor = navigationIconContentColor,
              titleContentColor = titleContentColor,
              actionIconContentColor = actionIconContentColor,
              subtitleContentColor = titleContentColor,
          )

          /**
           * Returns a copy of this TopAppBarColors, optionally overriding some of the values. This uses
           * the Color.Unspecified to mean “use the value from the source”
           */
          public fun copy(
              containerColor: Color = this.containerColor,
              scrolledContainerColor: Color = this.scrolledContainerColor,
              navigationIconContentColor: Color = this.navigationIconContentColor,
              titleContentColor: Color = this.titleContentColor,
              actionIconContentColor: Color = this.actionIconContentColor,
              subtitleContentColor: Color = this.subtitleContentColor,
          ): TopAppBarColors =
              TopAppBarColors(
                  containerColor.takeOrElse { this.containerColor },
                  scrolledContainerColor.takeOrElse { this.scrolledContainerColor },
                  navigationIconContentColor.takeOrElse { this.navigationIconContentColor },
                  titleContentColor.takeOrElse { this.titleContentColor },
                  actionIconContentColor.takeOrElse { this.actionIconContentColor },
                  subtitleContentColor.takeOrElse { this.subtitleContentColor },
              )

          /**
  - id: live-androidx-material3-material3-material3-appbar-lines-2224-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2224
    endLine: 2258
    sha256: 039b3cf730cf9b37243fd915548bdfbb9cdf4adbb5af300a8facd012bcb856c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Represents the container color used for the top app bar.
           *
           * A [colorTransitionFraction] provides a percentage value that can be used to generate a color.
           * Usually, an app bar implementation will pass in a [colorTransitionFraction] read from the
           * [TopAppBarState.collapsedFraction] or the [TopAppBarState.overlappedFraction].
           *
           * @param colorTransitionFraction a `0.0` to `1.0` value that represents a color transition
           *   percentage
           */
          @Stable
          internal fun containerColor(colorTransitionFraction: Float): Color {
              return lerp(
                  containerColor,
                  scrolledContainerColor,
                  FastOutLinearInEasing.transform(colorTransitionFraction),
              )
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other == null || other !is TopAppBarColors) return false

              if (containerColor != other.containerColor) return false
              if (scrolledContainerColor != other.scrolledContainerColor) return false
              if (navigationIconContentColor != other.navigationIconContentColor) return false
              if (titleContentColor != other.titleContentColor) return false
              if (actionIconContentColor != other.actionIconContentColor) return false
              if (subtitleContentColor != other.subtitleContentColor) return false

              return true
          }

          override fun hashCode(): Int {
              var result = containerColor.hashCode()
              result = 31 * result + scrolledContainerColor.hashCode()
  - id: live-androidx-material3-material3-material3-appbar-lines-2259-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2259
    endLine: 2293
    sha256: 74db757a1ee659e980468cc8f9cd35eed75d672a0ddf984d3b0cca762291f39e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              result = 31 * result + navigationIconContentColor.hashCode()
              result = 31 * result + titleContentColor.hashCode()
              result = 31 * result + actionIconContentColor.hashCode()
              result = 31 * result + subtitleContentColor.hashCode()

              return result
          }
      }

      /**
       * A BottomAppBarScrollBehavior defines how a bottom app bar should behave when the content under it
       * is scrolled.
       *
       * @see [BottomAppBarDefaults.exitAlwaysScrollBehavior]
       */
      @Stable
      public interface BottomAppBarScrollBehavior {

          /**
           * A [BottomAppBarState] that is attached to this behavior and is read and updated when
           * scrolling happens.
           */
          public val state: BottomAppBarState

          /**
           * Indicates whether the bottom app bar is pinned.
           *
           * A pinned app bar will stay fixed in place when content is scrolled and will not react to any
           * drag gestures.
           */
          public val isPinned: Boolean

          /**
           * An optional [AnimationSpec] that defines how the bottom app bar snaps to either fully
           * collapsed or fully extended state when a fling or a drag scrolled it into an intermediate
  - id: live-androidx-material3-material3-material3-appbar-lines-2294-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2294
    endLine: 2328
    sha256: 6b4413b544aeab3c00b453ea727e6b1a0791f060d4d87561fb26c1d924a81520
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * position.
           */
          public val snapAnimationSpec: AnimationSpec<Float>?

          /**
           * An optional [DecayAnimationSpec] that defines how to fling the bottom app bar when the user
           * flings the app bar itself, or the scrollable content.
           */
          public val flingAnimationSpec: DecayAnimationSpec<Float>?

          /**
           * A [NestedScrollConnection] that should be attached to a
           * [androidx.compose.ui.input.nestedscroll.nestedScroll] in order to keep track of the scroll
           * events.
           */
          public val nestedScrollConnection: NestedScrollConnection
      }

      /** Contains default values used for the bottom app bar implementations. */
      public object BottomAppBarDefaults {

          /** Default color used for [BottomAppBar] container */
          public val containerColor: Color
              @Composable get() = BottomAppBarTokens.ContainerColor.value

          /** Default elevation used for [BottomAppBar] */
          public val ContainerElevation: Dp = 0.dp

          /**
           * Default padding used for [BottomAppBar] when content are default size (24dp) icons in
           * [IconButton] that meet the minimum touch target (48.dp).
           */
          public val ContentPadding: PaddingValues =
              PaddingValues(
                  start = BottomAppBarHorizontalPadding,
  - id: live-androidx-material3-material3-material3-appbar-lines-2329-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2329
    endLine: 2363
    sha256: a9ba0ded683029e670283d9fc989dc8c516d0b364239c32e609da4d254a4be35
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  top = BottomAppBarVerticalPadding,
                  end = BottomAppBarHorizontalPadding,
              )

          /** Default insets that will be used and consumed by [BottomAppBar]. */
          public val windowInsets: WindowInsets
              @Composable
              get() {
                  return WindowInsets.systemBarsForVisualComponents.only(
                      WindowInsetsSides.Horizontal + WindowInsetsSides.Bottom
                  )
              }

          /** The color of a [BottomAppBar]'s [FloatingActionButton] */
          public val bottomAppBarFabColor: Color
              @Composable get() = FabSecondaryContainerTokens.ContainerColor.value

          /** Default padding used for [FlexibleBottomAppBar]. */
          public val FlexibleContentPadding: PaddingValues =
              PaddingValues(
                  start = DockedToolbarTokens.ContainerLeadingSpace,
                  end = DockedToolbarTokens.ContainerTrailingSpace,
              )

          /**
           * Default height of a flexible [FlexibleBottomAppBar]. The height here represents the height of
           * the bottom app bar in its expanded state.
           */
          public val FlexibleBottomAppBarHeight: Dp = DockedToolbarTokens.ContainerHeight

          /** A default [Arrangement] that will be used to space a [FlexibleBottomAppBar]'s content. */
          public val FlexibleHorizontalArrangement: Arrangement.Horizontal = Arrangement.SpaceBetween

          /**
           * An [Arrangement] that will be used to space [FlexibleBottomAppBar]'s with a fixed spacing.
  - id: live-androidx-material3-material3-material3-appbar-lines-2364-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2364
    endLine: 2398
    sha256: 45a6be908769367aa16574c6fff95b6dd1c97eece9d028525c737b76f90ccb42
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           */
          public val FlexibleFixedHorizontalArrangement: Arrangement.Horizontal =
              Arrangement.spacedBy(DockedToolbarTokens.ContainerMaxSpacing, Alignment.CenterHorizontally)

          /**
           * Default [AnimationSpec] that defines how the bottom app bar snaps to either fully collapsed
           * or fully extended state when a fling or a drag scrolled it into an intermediate position.
           */
          public val snapAnimationSpec: AnimationSpec<Float>
              @Composable get() = MotionSchemeKeyTokens.FastSpatial.value()

          /**
           * Default [DecayAnimationSpec] that defines how to fling the bottom app bar when the user
           * flings the app bar itself, or the scrollable content.
           */
          public val flingAnimationSpec: DecayAnimationSpec<Float>
              @Composable get() = rememberSplineBasedDecay()

          /**
           * Returns a [BottomAppBarScrollBehavior]. A bottom app bar that is set up with this
           * [BottomAppBarScrollBehavior] will immediately collapse when the content is pulled up, and
           * will immediately appear when the content is pulled down. Note: Scroll behavior is
           * automatically disabled when a touch exploration service (e.g. TalkBack) is active to preserve
           * accessibility.
           *
           * The returned [BottomAppBarScrollBehavior] is remembered across compositions.
           *
           * @param state the state object to be used to control or observe the bottom app bar's scroll
           *   state. See [rememberBottomAppBarState] for a state that is remembered across compositions.
           * @param canScroll a callback used to determine whether scroll events are to be handled by this
           *   [ExitAlwaysScrollBehavior]
           * @param snapAnimationSpec an optional [AnimationSpec] that defines how the bottom app bar
           *   snaps to either fully collapsed or fully extended state when a fling or a drag scrolled it
           *   into an intermediate position. If `null` is provided, the app bar will not snap and will
           *   remain in its current state.
  - id: live-androidx-material3-material3-material3-appbar-lines-2399-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2399
    endLine: 2433
    sha256: 6723b181912c5a1b44caf035c893946fcd091df46e0d893d64b0faed25cd908c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the
           *   bottom app bar when the user flings the app bar itself, or the scrollable content. If
           *   `null` is provided, the app bar will not continue to animate its height based on the scroll
           *   velocity.
           */
          @Composable
          public fun exitAlwaysScrollBehavior(
              state: BottomAppBarState = rememberBottomAppBarState(),
              canScroll: () -> Boolean = { true },
              snapAnimationSpec: AnimationSpec<Float>? = BottomAppBarDefaults.snapAnimationSpec,
              flingAnimationSpec: DecayAnimationSpec<Float>? = BottomAppBarDefaults.flingAnimationSpec,
          ): BottomAppBarScrollBehavior =
              remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
                  ExitAlwaysScrollBehavior(
                      state = state,
                      snapAnimationSpec = snapAnimationSpec,
                      flingAnimationSpec = flingAnimationSpec,
                      canScroll = canScroll,
                  )
              }
      }

      /**
       * Creates a [BottomAppBarState] that is remembered across compositions.
       *
       * @param initialHeightOffsetLimit the initial value for [BottomAppBarState.heightOffsetLimit],
       *   which represents the pixel limit that a bottom app bar is allowed to collapse when the
       *   scrollable content is scrolled
       * @param initialHeightOffset the initial value for [BottomAppBarState.heightOffset]. The initial
       *   offset height offset should be between zero and [initialHeightOffsetLimit].
       * @param initialContentOffset the initial value for [BottomAppBarState.contentOffset]
       */
      @Composable
      public fun rememberBottomAppBarState(
          initialHeightOffsetLimit: Float = -Float.MAX_VALUE,
  - id: live-androidx-material3-material3-material3-appbar-lines-2434-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2434
    endLine: 2468
    sha256: 3760f9aead95b8f4df3cf3be5de521e9e8038620d5683b5922991bff9434508e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          initialHeightOffset: Float = 0f,
          initialContentOffset: Float = 0f,
      ): BottomAppBarState {
          return rememberSaveable(saver = BottomAppBarState.Saver) {
              BottomAppBarState(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)
          }
      }

      /**
       * A state object that can be hoisted to control and observe the bottom app bar state. The state is
       * read and updated by a [BottomAppBarScrollBehavior] implementation.
       *
       * In most cases, this state will be created via [rememberBottomAppBarState].
       */
      @Stable
      public interface BottomAppBarState {

          /**
           * The bottom app bar's height offset limit in pixels, which represents the limit that a bottom
           * app bar is allowed to collapse to.
           *
           * Use this limit to coerce the [heightOffset] value when it's updated.
           */
          public var heightOffsetLimit: Float

          /**
           * The bottom app bar's current height offset in pixels. This height offset is applied to the
           * fixed height of the app bar to control the displayed height when content is being scrolled.
           *
           * Updates to the [heightOffset] value are coerced between zero and [heightOffsetLimit].
           */
          public var heightOffset: Float

          /**
           * The total offset of the content scrolled under the bottom app bar.
  - id: live-androidx-material3-material3-material3-appbar-lines-244-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 244
    endLine: 278
    sha256: 8363c295f3d79b4aa01a63f8b37fe498ab88fe257497f654fda71086f98239cf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
      ): Unit =
          SingleRowTopAppBar(
              modifier = modifier,
              title = title,
              titleTextStyle = AppBarSmallTokens.TitleFont.value,
              subtitle = null,
              subtitleTextStyle = TextStyle.Default,
              titleHorizontalAlignment = Alignment.Start,
              navigationIcon = navigationIcon,
              actions = actions,
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      TopAppBarDefaults.TopAppBarExpandedHeight
                  } else {
                      expandedHeight
                  },
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design center-aligned small top app
       * bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * This small top app bar has a header title that is horizontally aligned to the center.
       *
       * ![Center-aligned top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/center-aligned-top-app-bar.png)
       *
       * This CenterAlignedTopAppBar has slots for a title, navigation icon, and actions.
  - id: live-androidx-material3-material3-material3-appbar-lines-2469-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2469
    endLine: 2503
    sha256: e69e2a60cb63a28db6203be0f0a2e78486099b65a0fd2f0bc2080d5fd0bffd12
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *
           * This value is updated by a [BottomAppBarScrollBehavior] whenever a nested scroll connection
           * consumes scroll events. A common implementation would update the value to be the sum of all
           * [NestedScrollConnection.onPostScroll] `consumed.y` values.
           */
          public var contentOffset: Float

          /**
           * A value that represents the collapsed height percentage of the app bar.
           *
           * A `0.0` represents a fully expanded bar, and `1.0` represents a fully collapsed bar (computed
           * as [heightOffset] / [heightOffsetLimit]).
           */
          public val collapsedFraction: Float

          public companion object {
              /** The default [Saver] implementation for [BottomAppBarState]. */
              public val Saver: Saver<BottomAppBarState, *> =
                  listSaver(
                      save = { listOf(it.heightOffsetLimit, it.heightOffset, it.contentOffset) },
                      restore = {
                          BottomAppBarState(
                              initialHeightOffsetLimit = it[0],
                              initialHeightOffset = it[1],
                              initialContentOffset = it[2],
                          )
                      },
                  )
          }
      }

      /**
       * Creates a [BottomAppBarState].
       *
       * @param initialHeightOffsetLimit the initial value for [BottomAppBarState.heightOffsetLimit],
  - id: live-androidx-material3-material3-material3-appbar-lines-2504-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2504
    endLine: 2538
    sha256: 3e2d60fdf1da48233bd19359c66456039ff3bd37e8d68022e064bcbdc23aaacd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   which represents the pixel limit that a bottom app bar is allowed to collapse when the
       *   scrollable content is scrolled
       * @param initialHeightOffset the initial value for [BottomAppBarState.heightOffset]. The initial
       *   offset height offset should be between zero and [initialHeightOffsetLimit].
       * @param initialContentOffset the initial value for [BottomAppBarState.contentOffset]
       */
      public fun BottomAppBarState(
          initialHeightOffsetLimit: Float = -Float.MAX_VALUE,
          initialHeightOffset: Float = 0f,
          initialContentOffset: Float = 0f,
      ): BottomAppBarState =
          BottomAppBarStateImpl(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)

      @Stable
      private class BottomAppBarStateImpl(
          initialHeightOffsetLimit: Float,
          initialHeightOffset: Float,
          initialContentOffset: Float,
      ) : BottomAppBarState {

          override var heightOffsetLimit by mutableFloatStateOf(initialHeightOffsetLimit)

          override var heightOffset: Float
              get() = _heightOffset.floatValue
              set(newOffset) {
                  _heightOffset.floatValue =
                      newOffset.coerceIn(minimumValue = heightOffsetLimit, maximumValue = 0f)
              }

          override var contentOffset by mutableFloatStateOf(initialContentOffset)

          override val collapsedFraction: Float
              get() =
                  if (heightOffsetLimit != 0f) {
                      heightOffset / heightOffsetLimit
  - id: live-androidx-material3-material3-material3-appbar-lines-2539-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2539
    endLine: 2573
    sha256: d9f17702718e13a0de7077ac74583719af47d211461032c733db5bbb840bb610
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  } else {
                      0f
                  }

          private var _heightOffset = mutableFloatStateOf(initialHeightOffset)
      }

      /**
       * A [BottomAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a
       * bottom app bar.
       *
       * A bottom app bar that is set up with this [BottomAppBarScrollBehavior] will immediately collapse
       * when the nested content is pulled up, and will immediately appear when the content is pulled
       * down.
       *
       * @param state a [BottomAppBarState]
       * @param snapAnimationSpec an optional [AnimationSpec] that defines how the bottom app bar snaps to
       *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
       *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
       *   current state.
       * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the bottom
       *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
       *   provided, the app bar will not continue to animate its height based on the scroll velocity.
       * @param canScroll a callback used to determine whether scroll events are to be handled by this
       *   [ExitAlwaysScrollBehavior]
       */
      private class ExitAlwaysScrollBehavior(
          override val state: BottomAppBarState,
          override val snapAnimationSpec: AnimationSpec<Float>?,
          override val flingAnimationSpec: DecayAnimationSpec<Float>?,
          val canScroll: () -> Boolean = { true },
      ) : BottomAppBarScrollBehavior {
          override val isPinned: Boolean = false
          override var nestedScrollConnection =
              object : NestedScrollConnection {
  - id: live-androidx-material3-material3-material3-appbar-lines-2574-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2574
    endLine: 2608
    sha256: 17ab6ec021da2c7fdd79dea8519b424f0243b7067fd147474db4f48d9be9cfc8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  override fun onPostScroll(
                      consumed: Offset,
                      available: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      if (!canScroll()) return Offset.Zero
                      state.contentOffset += consumed.y
                      state.heightOffset = state.heightOffset + consumed.y
                      return Offset.Zero
                  }

                  override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                      if (
                          available.y > 0f &&
                              (state.heightOffset == 0f || state.heightOffset == state.heightOffsetLimit)
                      ) {
                          // Reset the total content offset to zero when scrolling all the way down.
                          // This will eliminate some float precision inaccuracies.
                          state.contentOffset = 0f
                      }
                      val superConsumed = super.onPostFling(consumed, available)
                      return superConsumed +
                          settleAppBarBottom(state, available.y, flingAnimationSpec, snapAnimationSpec)
                  }
              }
      }

      /**
       * Settles the app bar by flinging, in case the given velocity is greater than zero, and snapping
       * after the fling settles.
       */
      private suspend fun settleAppBarBottom(
          state: BottomAppBarState,
          velocity: Float,
          flingAnimationSpec: DecayAnimationSpec<Float>?,
  - id: live-androidx-material3-material3-material3-appbar-lines-2609-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2609
    endLine: 2643
    sha256: 99564ad0c6cc4ff1780237418f1a1dff10427cb01cf1794e159cc40c2b76b295
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          snapAnimationSpec: AnimationSpec<Float>?,
      ): Velocity {
          // Check if the app bar is completely collapsed/expanded. If so, no need to settle the app bar,
          // and just return Zero Velocity.
          // Note that we don't check for 0f due to float precision with the collapsedFraction
          // calculation.
          if (state.collapsedFraction < 0.01f || state.collapsedFraction == 1f) {
              return Velocity.Zero
          }
          var remainingVelocity = velocity
          // In case there is an initial velocity that was left after a previous user fling, animate to
          // continue the motion to expand or collapse the app bar.
          if (flingAnimationSpec != null && abs(velocity) > 1f) {
              var lastValue = 0f
              AnimationState(initialValue = 0f, initialVelocity = velocity).animateDecay(
                  flingAnimationSpec
              ) {
                  val delta = value - lastValue
                  val initialHeightOffset = state.heightOffset
                  state.heightOffset = initialHeightOffset + delta
                  val consumed = abs(initialHeightOffset - state.heightOffset)
                  lastValue = value
                  remainingVelocity = this.velocity
                  // avoid rounding errors and stop if anything is unconsumed
                  if (abs(delta - consumed) > 0.5f) this.cancelAnimation()
              }
          }
          // Snap if animation specs were provided.
          if (snapAnimationSpec != null) {
              if (state.heightOffset < 0 && state.heightOffset > state.heightOffsetLimit) {
                  AnimationState(initialValue = state.heightOffset).animateTo(
                      if (state.collapsedFraction < 0.5f) {
                          0f
                      } else {
                          state.heightOffsetLimit
  - id: live-androidx-material3-material3-material3-appbar-lines-2644-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2644
    endLine: 2678
    sha256: 017e27aa64d4d0b3df59178ae58c470597e29f1e9ef26fac282d8882645fef50
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      },
                      animationSpec = snapAnimationSpec,
                  ) {
                      state.heightOffset = value
                  }
              }
          }

          return Velocity(0f, remainingVelocity)
      }

      // Padding minus IconButton's min touch target expansion
      private val BottomAppBarHorizontalPadding = 16.dp - 12.dp
      internal val BottomAppBarVerticalPadding = 16.dp - 12.dp

      // Padding minus content padding
      private val FABHorizontalPadding = 16.dp - BottomAppBarHorizontalPadding
      private val FABVerticalPadding = 12.dp - BottomAppBarVerticalPadding

      /**
       * A single-row top app bar that is designed to be called by the small and center aligned top app
       * bar composables.
       *
       * This SingleRowTopAppBar has slots for a title, subtitle, navigation icon, and actions.
       */
      @Composable
      private fun SingleRowTopAppBar(
          modifier: Modifier = Modifier,
          title: @Composable () -> Unit,
          titleTextStyle: TextStyle,
          subtitle: (@Composable () -> Unit)?,
          subtitleTextStyle: TextStyle,
          titleHorizontalAlignment: Alignment.Horizontal,
          navigationIcon: @Composable () -> Unit,
          actions: @Composable RowScope.() -> Unit,
  - id: live-androidx-material3-material3-material3-appbar-lines-2679-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2679
    endLine: 2713
    sha256: 7fb08cbb8f3eb152b16152d82b2dfceea274d2acb791a15660ccd542d39def79
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          expandedHeight: Dp,
          contentPadding: PaddingValues,
          windowInsets: WindowInsets,
          colors: TopAppBarColors,
          scrollBehavior: TopAppBarScrollBehavior?,
      ) {
          require(expandedHeight.isSpecified && expandedHeight.isFinite) {
              "The expandedHeight is expected to be specified and finite"
          }

          // Obtain the container color from the TopAppBarColors using the `overlapFraction`. This
          // ensures that the colors will adjust whether the app bar behavior is pinned or scrolled.
          // This may potentially animate or interpolate a transition between the container-color and
          // the container's scrolled-color according to the app bar's scroll state.
          val targetColor by
              remember(colors, scrollBehavior) {
                  derivedStateOf {
                      val overlappingFraction = scrollBehavior?.state?.overlappedFraction ?: 0f
                      colors.containerColor(if (overlappingFraction > 0.01f) 1f else 0f)
                  }
              }
          // TODO: Load the motionScheme tokens from the component tokens file
          val appBarContainerColor =
              animateColorAsState(
                  targetColor,
                  animationSpec = MotionSchemeKeyTokens.DefaultEffects.value(),
              )

          // Wrap the given actions in a Row.
          val actionsRow =
              @Composable {
                  Row(
                      horizontalArrangement = Arrangement.End,
                      verticalAlignment = Alignment.CenterVertically,
                      content = actions,
  - id: live-androidx-material3-material3-material3-appbar-lines-2714-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2714
    endLine: 2748
    sha256: 3d5a5f50d8412e60c7efe09ab485e308d8ac1a3141c8ed1f50952dfe2eb6355e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  )
              }

          // Set up support for resizing the top app bar when vertically dragging the bar itself.
          val appBarDragModifier =
              if (scrollBehavior != null && !scrollBehavior.isPinned) {
                  Modifier.draggable(
                      orientation = Orientation.Vertical,
                      state =
                          rememberDraggableState { delta -> scrollBehavior.state.heightOffset += delta },
                      onDragStopped = { velocity ->
                          settleAppBar(
                              scrollBehavior.state,
                              velocity,
                              scrollBehavior.flingAnimationSpec,
                              scrollBehavior.snapAnimationSpec,
                          )
                      },
                  )
              } else {
                  Modifier
              }

          // Compose a Surface with a TopAppBarLayout content.
          // The surface's background color is animated as specified above.
          // The height of the app bar is determined by subtracting the bar's height offset from the
          // app bar's defined constant height value (i.e. the ContainerHeight token).
          Box(
              modifier =
                  modifier
                      .then(appBarDragModifier)
                      .drawBehind {
                          val color = appBarContainerColor.value
                          if (color != Color.Unspecified) {
                              drawRect(color = color)
  - id: live-androidx-material3-material3-material3-appbar-lines-2749-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2749
    endLine: 2783
    sha256: 2f67229653e29cf41a868508f1562cadbaf17021f515449f5dad35a0abc23c0f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          }
                      }
                      .semantics { isTraversalGroup = true }
                      .pointerInput(Unit) {}
          ) {
              TopAppBarLayout(
                  modifier =
                      Modifier.windowInsetsPadding(windowInsets)
                          // clip after padding so we don't show the title over the inset area
                          .clipToBounds()
                          .adjustHeightOffsetLimit(scrollBehavior),
                  scrolledOffset = { scrollBehavior?.state?.heightOffset ?: 0f },
                  navigationIconContentColor = colors.navigationIconContentColor,
                  titleContentColor = colors.titleContentColor,
                  actionIconContentColor = colors.actionIconContentColor,
                  subtitleContentColor = colors.subtitleContentColor,
                  title = title,
                  titleTextStyle = titleTextStyle,
                  subtitle = subtitle,
                  subtitleTextStyle = subtitleTextStyle,
                  titleAlpha = { 1f },
                  titleVerticalArrangement = Arrangement.Center,
                  titleHorizontalAlignment = titleHorizontalAlignment,
                  titleBottomPadding = 0,
                  hideTitleSemantics = false,
                  navigationIcon = navigationIcon,
                  actions = actionsRow,
                  height = expandedHeight,
                  contentPadding = contentPadding,
              )
          }
      }

      /**
       * A two-rows top app bar that is designed to be called by the Large and Medium top app bar
  - id: live-androidx-material3-material3-material3-appbar-lines-2784-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2784
    endLine: 2818
    sha256: 4bf2ce7513fe56659e4bd018cd00ada3ea8a0f78c778de89ce5abd94e1559345
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * composables.
       */
      @Composable
      private fun TwoRowsTopAppBar(
          modifier: Modifier = Modifier,
          title: @Composable () -> Unit,
          titleTextStyle: TextStyle,
          titleBottomPadding: Dp,
          smallTitle: @Composable () -> Unit,
          smallTitleTextStyle: TextStyle,
          subtitle: (@Composable () -> Unit)?,
          subtitleTextStyle: TextStyle,
          smallSubtitle: (@Composable () -> Unit)?,
          smallSubtitleTextStyle: TextStyle,
          titleHorizontalAlignment: Alignment.Horizontal,
          navigationIcon: @Composable () -> Unit,
          actions: @Composable RowScope.() -> Unit,
          collapsedHeight: Dp,
          expandedHeight: Dp,
          windowInsets: WindowInsets,
          colors: TopAppBarColors,
          scrollBehavior: TopAppBarScrollBehavior?,
      ) {
          require(collapsedHeight.isSpecified && collapsedHeight.isFinite) {
              "The collapsedHeight is expected to be specified and finite"
          }
          require(expandedHeight.isSpecified && expandedHeight.isFinite) {
              "The expandedHeight is expected to be specified and finite"
          }
          require(expandedHeight >= collapsedHeight) {
              "The expandedHeight is expected to be greater or equal to the collapsedHeight"
          }
          val titleBottomPaddingPx = with(LocalDensity.current) { titleBottomPadding.roundToPx() }

          // Obtain the container Color from the TopAppBarColors using the `collapsedFraction`, as the
  - id: live-androidx-material3-material3-material3-appbar-lines-279-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 279
    endLine: 313
    sha256: cdd06a171fe7bd5fac00535ceee9f7c1affa769512e1964ef186e5f09cb19826
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * A center aligned top app bar that uses a [TopAppBarScrollBehavior] to customize its nested
       * scrolling behavior when working in conjunction with scrolling content looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleCenterAlignedTopAppBar
       * @param title the title to be displayed in the top app bar
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
       *   to collapse or expand, this value will represent the maximum height that the bar will be
       *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
       *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       */
      @Deprecated(
          message = "Deprecated in favor of CenterAlignedTopAppBar with contentPadding parameter",
          level = DeprecationLevel.HIDDEN,
      )
      @OptIn(ExperimentalMaterial3Api::class)
      @Composable
      public fun CenterAlignedTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
  - id: live-androidx-material3-material3-material3-appbar-lines-2819-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2819
    endLine: 2853
    sha256: 5f797e474ba98632de8dc303145509a87bbe258091404339cfc0d950e80f10dc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // bottom part of this TwoRowsTopAppBar changes color at the same rate the app bar expands
          // or collapse.
          // This will potentially animate or interpolate a transition between the container color and
          // the container's scrolled color according to the app bar's scroll state.
          val colorTransitionFraction = { scrollBehavior?.state?.collapsedFraction ?: 0f }
          val appBarContainerColor = { colors.containerColor(colorTransitionFraction()) }

          // Wrap the given actions in a Row.
          val actionsRow =
              @Composable {
                  Row(
                      horizontalArrangement = Arrangement.End,
                      verticalAlignment = Alignment.CenterVertically,
                      content = actions,
                  )
              }
          val topTitleAlpha = { TopTitleAlphaEasing.transform(colorTransitionFraction()) }
          val bottomTitleAlpha = { 1f - colorTransitionFraction() }
          // Hide the top row title semantics when its alpha value goes below 0.5 threshold.
          // Hide the bottom row title semantics when the top title semantics are active.
          val hideTopRowSemantics by
              remember(colorTransitionFraction) { derivedStateOf { colorTransitionFraction() < 0.5f } }
          val hideBottomRowSemantics = !hideTopRowSemantics

          // Set up support for resizing the top app bar when vertically dragging the bar itself.
          val appBarDragModifier =
              if (scrollBehavior != null && !scrollBehavior.isPinned) {
                  Modifier.draggable(
                      orientation = Orientation.Vertical,
                      state =
                          rememberDraggableState { delta -> scrollBehavior.state.heightOffset += delta },
                      onDragStopped = { velocity ->
                          settleAppBar(
                              scrollBehavior.state,
                              velocity,
  - id: live-androidx-material3-material3-material3-appbar-lines-2854-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2854
    endLine: 2888
    sha256: 758035bfe273b92fadd7c66465c889aa90b26e15f9ba9d6e4f0c55ac36a0b722
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              scrollBehavior.flingAnimationSpec,
                              scrollBehavior.snapAnimationSpec,
                          )
                      },
                  )
              } else {
                  Modifier
              }

          Box(
              modifier =
                  modifier
                      .then(appBarDragModifier)
                      .drawBehind { drawRect(color = appBarContainerColor()) }
                      .semantics { isTraversalGroup = true }
                      .pointerInput(Unit) {}
          ) {
              Column {
                  TopAppBarLayout(
                      modifier =
                          Modifier.windowInsetsPadding(windowInsets)
                              // clip after padding so we don't show the title over the inset area
                              .clipToBounds(),
                      scrolledOffset = { 0f },
                      navigationIconContentColor = colors.navigationIconContentColor,
                      titleContentColor = colors.titleContentColor,
                      actionIconContentColor = colors.actionIconContentColor,
                      subtitleContentColor = colors.subtitleContentColor,
                      title = smallTitle,
                      titleTextStyle = smallTitleTextStyle,
                      subtitle = smallSubtitle,
                      subtitleTextStyle = smallSubtitleTextStyle,
                      titleAlpha = topTitleAlpha,
                      titleVerticalArrangement = Arrangement.Center,
                      titleHorizontalAlignment = titleHorizontalAlignment,
  - id: live-androidx-material3-material3-material3-appbar-lines-2889-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2889
    endLine: 2923
    sha256: 580c13fb9defae8d16b367bf7f41d0862a96044684f2e3b422912f561ed400e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      titleBottomPadding = 0,
                      hideTitleSemantics = hideTopRowSemantics,
                      navigationIcon = navigationIcon,
                      actions = actionsRow,
                      height = collapsedHeight,
                      contentPadding = TopAppBarDefaults.ContentPadding,
                  )
                  TopAppBarLayout(
                      modifier =
                          Modifier
                              // only apply the horizontal sides of the window insets padding, since
                              // the top padding will always be applied by the layout above
                              .windowInsetsPadding(windowInsets.only(WindowInsetsSides.Horizontal))
                              .clipToBounds()
                              .adjustHeightOffsetLimit(scrollBehavior),
                      scrolledOffset = { scrollBehavior?.state?.heightOffset ?: 0f },
                      navigationIconContentColor = colors.navigationIconContentColor,
                      titleContentColor = colors.titleContentColor,
                      actionIconContentColor = colors.actionIconContentColor,
                      subtitleContentColor = colors.subtitleContentColor,
                      title = title,
                      titleTextStyle = titleTextStyle,
                      subtitle = subtitle,
                      subtitleTextStyle = subtitleTextStyle,
                      titleAlpha = bottomTitleAlpha,
                      titleVerticalArrangement = Arrangement.Bottom,
                      titleHorizontalAlignment = titleHorizontalAlignment,
                      titleBottomPadding = titleBottomPaddingPx,
                      hideTitleSemantics = hideBottomRowSemantics,
                      navigationIcon = {},
                      actions = {},
                      height = expandedHeight - collapsedHeight,
                      contentPadding = TopAppBarDefaults.ContentPadding,
                  )
              }
  - id: live-androidx-material3-material3-material3-appbar-lines-2924-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2924
    endLine: 2958
    sha256: b816fecd7e175c560808ea274a78992c0057f1bc850b2fbef10f400caa6e1403
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          }
      }

      private fun Modifier.adjustHeightOffsetLimit(scrollBehavior: TopAppBarScrollBehavior?) =
          scrollBehavior?.state?.let {
              onSizeChanged { size ->
                  val offset = size.height.toFloat() - it.heightOffset
                  it.heightOffsetLimit = -offset
              }
          } ?: this

      /**
       * The base [Layout] for all top app bars. This function lays out a top app bar navigation icon
       * (leading icon), a title (header), and action icons (trailing icons). Note that the navigation and
       * the actions are optional.
       *
       * @param modifier a [Modifier]
       * @param scrolledOffset a [FloatProducer] that provides the app bar offset in pixels (note that
       *   when the app bar is scrolled, the lambda will output negative values)
       * @param navigationIconContentColor the content color that will be applied via a
       *   [LocalContentColor] when composing the navigation icon
       * @param titleContentColor the color that will be applied via a [LocalContentColor] when composing
       *   the title
       * @param subtitleContentColor the color that will be applied via a [LocalContentColor] when
       *   composing the subtitle
       * @param actionIconContentColor the content color that will be applied via a [LocalContentColor]
       *   when composing the action icons
       * @param title the top app bar title (header)
       * @param titleTextStyle the title's text style
       * @param titleAlpha the title's alpha
       * @param titleVerticalArrangement the title's vertical arrangement
       * @param titleHorizontalAlignment the title's horizontal alignment
       * @param titleBottomPadding the title's bottom padding
       * @param hideTitleSemantics hides the title node from the semantic tree. Apply this boolean when
       *   this layout is part of a [TwoRowsTopAppBar] to hide the title's semantics from accessibility
  - id: live-androidx-material3-material3-material3-appbar-lines-2959-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2959
    endLine: 2993
    sha256: 439decb58c679cc507f2a2f6e91e31d3ac15b6193796986256a29882e6814126
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   services. This is needed to avoid having multiple titles visible to accessibility services at
       *   the same time, when animating between collapsed / expanded states.
       * @param navigationIcon a navigation icon [Composable]
       * @param actions actions [Composable]
       * @param height this app bar's requested height
       * @param contentPadding the padding applied to the content of this TopAppBar.
       */
      @Composable
      private fun TopAppBarLayout(
          modifier: Modifier,
          scrolledOffset: FloatProducer,
          navigationIconContentColor: Color,
          titleContentColor: Color,
          subtitleContentColor: Color,
          actionIconContentColor: Color,
          title: @Composable () -> Unit,
          titleTextStyle: TextStyle,
          subtitle: (@Composable () -> Unit)?,
          subtitleTextStyle: TextStyle,
          titleAlpha: () -> Float,
          titleVerticalArrangement: Arrangement.Vertical,
          titleHorizontalAlignment: Alignment.Horizontal,
          titleBottomPadding: Int,
          hideTitleSemantics: Boolean,
          navigationIcon: @Composable () -> Unit,
          actions: @Composable () -> Unit,
          height: Dp,
          contentPadding: PaddingValues,
      ) {
          Layout(
              {
                  Box(Modifier.layoutId("navigationIcon").padding(start = TopAppBarHorizontalPadding)) {
                      CompositionLocalProvider(
                          LocalContentColor provides navigationIconContentColor,
                          content = navigationIcon,
  - id: live-androidx-material3-material3-material3-appbar-lines-2994-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 2994
    endLine: 3028
    sha256: 67a313b56f92ccc7bbc2371ffba647d314ffa1d43c61442edbe47ccdf7635e6a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      )
                  }
                  if (subtitle != null) {
                      Column(
                          modifier =
                              Modifier.layoutId("title")
                                  .padding(horizontal = TopAppBarHorizontalPadding)
                                  .then(
                                      if (hideTitleSemantics) {
                                          Modifier.clearAndSetSemantics {}
                                      } else {
                                          Modifier.semantics { isTraversalGroup = true }
                                      }
                                  )
                                  .graphicsLayer { alpha = titleAlpha() },
                          horizontalAlignment = titleHorizontalAlignment,
                      ) {
                          ProvideContentColorTextStyle(
                              contentColor = titleContentColor,
                              textStyle = titleTextStyle,
                              content = title,
                          )
                          ProvideContentColorTextStyle(
                              contentColor = subtitleContentColor,
                              textStyle = subtitleTextStyle,
                              content = subtitle,
                          )
                      }
                  } else { // TODO(b/352770398): Workaround to maintain compatibility
                      Box(
                          modifier =
                              Modifier.layoutId("title")
                                  .padding(horizontal = TopAppBarHorizontalPadding)
                                  .then(
                                      if (hideTitleSemantics) Modifier.clearAndSetSemantics {}
  - id: live-androidx-material3-material3-material3-appbar-lines-3029-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3029
    endLine: 3063
    sha256: 8da1fa579b9cd7396710ec5f513eddbcdbadc40410d26db6da89215a85c31b1c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                      else Modifier
                                  )
                                  .graphicsLayer { alpha = titleAlpha() }
                      ) {
                          ProvideContentColorTextStyle(
                              contentColor = titleContentColor,
                              textStyle = titleTextStyle,
                              content = title,
                          )
                      }
                  }
                  Box(Modifier.layoutId("actionIcons").padding(end = TopAppBarHorizontalPadding)) {
                      CompositionLocalProvider(
                          LocalContentColor provides actionIconContentColor,
                          content = actions,
                      )
                  }
              },
              modifier = modifier,
              measurePolicy =
                  remember(
                      scrolledOffset,
                      titleVerticalArrangement,
                      titleHorizontalAlignment,
                      titleBottomPadding,
                      height,
                  ) {
                      TopAppBarMeasurePolicy(
                          scrolledOffset,
                          titleVerticalArrangement,
                          titleHorizontalAlignment,
                          titleBottomPadding,
                          height,
                          contentPadding,
                      )
  - id: live-androidx-material3-material3-material3-appbar-lines-3064-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3064
    endLine: 3098
    sha256: 6ff96ca9c907f73acf73f94d863cd460269f4f9b34771af2fda1057d8fe33f2c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  },
          )
      }

      private class TopAppBarMeasurePolicy(
          val scrolledOffset: FloatProducer,
          val titleVerticalArrangement: Arrangement.Vertical,
          val titleHorizontalAlignment: Alignment.Horizontal,
          val titleBottomPadding: Int,
          val height: Dp,
          val contentPadding: PaddingValues,
      ) : MeasurePolicy {
          override fun MeasureScope.measure(
              measurables: List<Measurable>,
              constraints: Constraints,
          ): MeasureResult {
              val navigationIconPlaceable =
                  measurables
                      .fastFirst { it.layoutId == "navigationIcon" }
                      .measure(constraints.copy(minWidth = 0))
              val actionIconsPlaceable =
                  measurables
                      .fastFirst { it.layoutId == "actionIcons" }
                      .measure(constraints.copy(minWidth = 0))
              val startPaddingPx = contentPadding.calculateStartPadding(layoutDirection)
              val endPaddingPx = contentPadding.calculateEndPadding(layoutDirection)
              val titleStartSpace = max(TopAppBarTitleInset.roundToPx(), navigationIconPlaceable.width)
              val maxTitleWidth =
                  if (constraints.maxWidth == Constraints.Infinity) {
                      constraints.maxWidth
                  } else {
                      (constraints.maxWidth -
                              titleStartSpace -
                              actionIconsPlaceable.width -
                              startPaddingPx.roundToPx() -
  - id: live-androidx-material3-material3-material3-appbar-lines-3099-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3099
    endLine: 3133
    sha256: b719e8a5027936a1fc607209bfe2b9b7c3d89fd6aa7828c450e9bfbef26ee8bf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              endPaddingPx.roundToPx())
                          .coerceAtLeast(0)
                  }
              val titlePlaceable =
                  measurables
                      .fastFirst { it.layoutId == "title" }
                      .measure(constraints.copy(minWidth = 0, maxWidth = maxTitleWidth))

              // Locate the title's baseline.
              val titleBaseline =
                  if (titlePlaceable[LastBaseline] != AlignmentLine.Unspecified) {
                      titlePlaceable[LastBaseline]
                  } else {
                      0
                  }

              // Subtract the scrolledOffset from the maxHeight. The scrolledOffset is expected to be
              // equal or smaller than zero.
              val scrolledOffsetValue = scrolledOffset()
              val heightOffset = if (scrolledOffsetValue.isNaN()) 0 else scrolledOffsetValue.roundToInt()
              val topPaddingPx = contentPadding.calculateTopPadding().roundToPx()
              val bottomPaddingPx = contentPadding.calculateBottomPadding().roundToPx()
              val maxLayoutHeight =
                  max(height.roundToPx(), titlePlaceable.height) + topPaddingPx + bottomPaddingPx
              val layoutHeight =
                  if (constraints.maxHeight == Constraints.Infinity) {
                      maxLayoutHeight
                  } else {
                      (maxLayoutHeight + heightOffset).coerceAtLeast(0)
                  }

              return placeTopAppBar(
                  constraints,
                  layoutHeight,
                  maxLayoutHeight,
  - id: live-androidx-material3-material3-material3-appbar-lines-3134-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3134
    endLine: 3168
    sha256: c75d7cfd5302341fee1660ce011919c3dcff89c1f5e94027ace7212efe7c5a20
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  navigationIconPlaceable,
                  titlePlaceable,
                  actionIconsPlaceable,
                  titleBaseline,
                  contentPadding,
              )
          }

          override fun IntrinsicMeasureScope.minIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastSumBy { it.minIntrinsicWidth(height) }

          override fun IntrinsicMeasureScope.minIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
              return max(
                  height.roundToPx(),
                  measurables.fastMaxOfOrNull { it.minIntrinsicHeight(width) } ?: 0,
              )
          }

          override fun IntrinsicMeasureScope.maxIntrinsicWidth(
              measurables: List<IntrinsicMeasurable>,
              height: Int,
          ) = measurables.fastSumBy { it.maxIntrinsicWidth(height) }

          override fun IntrinsicMeasureScope.maxIntrinsicHeight(
              measurables: List<IntrinsicMeasurable>,
              width: Int,
          ): Int {
              return max(
                  height.roundToPx(),
                  measurables.fastMaxOfOrNull { it.maxIntrinsicHeight(width) } ?: 0,
  - id: live-androidx-material3-material3-material3-appbar-lines-314-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 314
    endLine: 348
    sha256: 726e96f18857a18b01a2e2362aaf7861c1684faa9308f6d976cc352ff759d965
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          CenterAlignedTopAppBar(
              title = title,
              modifier = modifier,
              navigationIcon = navigationIcon,
              actions = actions,
              expandedHeight = expandedHeight,
              contentPadding = TopAppBarDefaults.ContentPadding,
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design center-aligned small top app
       * bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * This small top app bar has a header title that is horizontally aligned to the center.
       *
       * ![Center-aligned top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/center-aligned-top-app-bar.png)
       *
       * This CenterAlignedTopAppBar has slots for a title, navigation icon, and actions.
       *
       * A center aligned top app bar that uses a [TopAppBarScrollBehavior] to customize its nested
       * scrolling behavior when working in conjunction with scrolling content looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleCenterAlignedTopAppBar
       * @param title the title to be displayed in the top app bar
       * @param modifier the [Modifier] to be applied to this top app bar
  - id: live-androidx-material3-material3-material3-appbar-lines-3169-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3169
    endLine: 3203
    sha256: f5ad553c67e4d99cabd8b457f058b1cc0b94755acf064e0284db39ebad52317c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              )
          }

          private fun MeasureScope.placeTopAppBar(
              constraints: Constraints,
              layoutHeight: Int,
              maxLayoutHeight: Int,
              navigationIconPlaceable: Placeable,
              titlePlaceable: Placeable,
              actionIconsPlaceable: Placeable,
              titleBaseline: Int,
              contentPadding: PaddingValues,
          ): MeasureResult {
              val topPadding = contentPadding.calculateTopPadding().roundToPx()
              val bottomPadding = contentPadding.calculateBottomPadding().roundToPx()
              val startPadding = contentPadding.calculateStartPadding(layoutDirection).roundToPx()
              val endPadding = contentPadding.calculateEndPadding(layoutDirection).roundToPx()
              val contentHeight = layoutHeight + topPadding - bottomPadding
              return layout(constraints.maxWidth, layoutHeight) {
                  // Navigation icon
                  navigationIconPlaceable.placeRelative(
                      x = startPadding,
                      y = (contentHeight - navigationIconPlaceable.height) / 2,
                  )

                  titlePlaceable.let {
                      val start = max(TopAppBarTitleInset.roundToPx(), navigationIconPlaceable.width)
                      val end = actionIconsPlaceable.width

                      // Align using the maxWidth. We will adjust the position later according to the
                      // start and end. This is done to ensure that a center alignment is still maintained
                      // when the start and end have different widths. Note that the title is centered
                      // relative to the entire app bar width, and not just centered between the
                      // navigation icon and the actions.
                      var titleX =
  - id: live-androidx-material3-material3-material3-appbar-lines-3204-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3204
    endLine: 3238
    sha256: f3e65673ca931b638afec0b9c1182348841a43ee330c91b199cf7a50e82695cd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          titleHorizontalAlignment.align(
                              size = titlePlaceable.width,
                              space = constraints.maxWidth,
                              // Using Ltr as we call placeRelative later on.
                              layoutDirection = LayoutDirection.Ltr,
                          )
                      // Reposition the title based on the start and the end (i.e. the navigation and
                      // action widths).
                      if (titleX < start) {
                          titleX += startPadding + (start - titleX)
                      } else if (titleX + titlePlaceable.width > constraints.maxWidth - end) {
                          titleX +=
                              startPadding +
                                  ((constraints.maxWidth - end) - (titleX + titlePlaceable.width))
                      }

                      // The titleVerticalArrangement is always one of Center or Bottom.
                      val titleY =
                          when (titleVerticalArrangement) {
                              Arrangement.Center -> (contentHeight - titlePlaceable.height) / 2
                              // Apply bottom padding from the title's baseline only when the Arrangement
                              // is "Bottom".
                              Arrangement.Bottom ->
                                  if (titleBottomPadding == 0) {
                                      contentHeight - titlePlaceable.height
                                  } else {
                                      // Calculate the actual padding from the bottom of the title, taking
                                      // into account its baseline.
                                      val paddingFromBottom =
                                          titleBottomPadding - (titlePlaceable.height - titleBaseline)
                                      // Adjust the bottom padding to a smaller number if there is no room
                                      // to fit the title.
                                      val heightWithPadding = paddingFromBottom + titlePlaceable.height
                                      val adjustedBottomPadding =
                                          if (heightWithPadding > maxLayoutHeight) {
  - id: live-androidx-material3-material3-material3-appbar-lines-3239-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3239
    endLine: 3273
    sha256: 19f9c214035c9fadf546afd14362c02261d42dbe5607186b00e8923fd9081e26
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                              paddingFromBottom - (heightWithPadding - maxLayoutHeight)
                                          } else {
                                              paddingFromBottom
                                          }

                                      contentHeight -
                                          titlePlaceable.height -
                                          max(0, adjustedBottomPadding)
                                  }
                              // Arrangement.Top
                              else -> 0
                          }

                      it.placeRelative(titleX, titleY)
                  }

                  // Action icons
                  actionIconsPlaceable.placeRelative(
                      x = constraints.maxWidth - actionIconsPlaceable.width - endPadding,
                      y = (contentHeight - actionIconsPlaceable.height) / 2,
                  )
              }
          }
      }

      /**
       * Returns a [TopAppBarScrollBehavior] that only adjusts its content offset, without adjusting any
       * properties that affect the height of a top app bar.
       *
       * @param state a [TopAppBarState]
       * @param canScroll a callback used to determine whether scroll events are to be handled by this
       *   [PinnedScrollBehavior]
       */
      private class PinnedScrollBehavior(
          override val state: TopAppBarState,
  - id: live-androidx-material3-material3-material3-appbar-lines-3274-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3274
    endLine: 3308
    sha256: 97c8a09eccf63333a263c0103bdf26536826a160bd0c8996b1d0fc327889a52b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val canScroll: () -> Boolean = { true },
          isScrollingContentAtStart: (() -> Boolean)? = null,
      ) : TopAppBarScrollBehavior {

          init {
              if (isScrollingContentAtStart != null) {
                  state.isScrollingContentAtStart = isScrollingContentAtStart
              }
          }

          override val isPinned: Boolean = true
          override val snapAnimationSpec: AnimationSpec<Float>? = null
          override val flingAnimationSpec: DecayAnimationSpec<Float>? = null
          override var nestedScrollConnection =
              object : NestedScrollConnection {
                  override fun onPostScroll(
                      consumed: Offset,
                      available: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      if (!canScroll()) return Offset.Zero
                      state.contentOffset += consumed.y
                      return Offset.Zero
                  }

                  override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                      if (available.y > 0f) {
                          // Reset the total content offset to zero when scrolling all the way down.
                          // This will eliminate some float precision inaccuracies.
                          state.contentOffset = 0f
                      }
                      return super.onPostFling(consumed, available)
                  }
              }
      }
  - id: live-androidx-material3-material3-material3-appbar-lines-3309-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3309
    endLine: 3343
    sha256: e5e57f59a117be9d99311155752b46e7585b1a776d7f05490291a41797051c22
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      
      /**
       * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
       * app bar.
       *
       * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
       * the nested content is pulled up, and will immediately appear when the content is pulled down.
       *
       * @param state a [TopAppBarState]
       * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
       *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
       *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
       *   current state.
       * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
       *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
       *   the app bar will not continue to animate its height based on the scroll velocity.
       * @param canScroll a callback used to determine whether scroll events are to be handled by this
       *   [EnterAlwaysScrollBehavior]
       * @param reverseLayout indicates that this behavior is applied to a scrollable content that has a
       *   reversed direction of scrolling and layout
       */
      private class LegacyEnterAlwaysScrollBehavior(
          override val state: TopAppBarState,
          override val snapAnimationSpec: AnimationSpec<Float>?,
          override val flingAnimationSpec: DecayAnimationSpec<Float>?,
          val canScroll: () -> Boolean = { true },
          val reverseLayout: Boolean = false,
      ) : TopAppBarScrollBehavior {
          override val isPinned: Boolean = false
          override var nestedScrollConnection =
              object : NestedScrollConnection {
                  override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                      if (!canScroll()) return Offset.Zero
                      val prevHeightOffset = state.heightOffset
                      state.heightOffset += available.y
  - id: live-androidx-material3-material3-material3-appbar-lines-3344-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3344
    endLine: 3378
    sha256: 06d09cb97d3c976554e44a6e3bf3d8c8f4035ee53140f4686a43460b35643d85
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      // The state's heightOffset is coerce in a minimum value of heightOffsetLimit and a
                      // maximum value 0f, so we check if its value was actually changed after the
                      // available.y was added to it in order to tell if the top app bar is currently
                      // collapsing or expanding.
                      // Note that when the content was set with a revered layout, we always return a
                      // zero offset.
                      return if (!reverseLayout && prevHeightOffset != state.heightOffset) {
                          // We're in the middle of top app bar collapse or expand.
                          // Consume only the scroll on the Y axis.
                          available.copy(x = 0f)
                      } else {
                          Offset.Zero
                      }
                  }

                  override fun onPostScroll(
                      consumed: Offset,
                      available: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      if (!canScroll()) return Offset.Zero
                      state.contentOffset += consumed.y
                      if (!reverseLayout) state.heightOffset += consumed.y
                      return Offset.Zero
                  }

                  override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                      if (
                          available.y > 0f &&
                              (state.heightOffset == 0f || state.heightOffset == state.heightOffsetLimit)
                      ) {
                          // Reset the total content offset to zero when scrolling all the way down.
                          // This will eliminate some float precision inaccuracies.
                          state.contentOffset = 0f
                      }
  - id: live-androidx-material3-material3-material3-appbar-lines-3379-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3379
    endLine: 3413
    sha256: 60e11ea6f55db26c7487689b4bce5cf0b5e50804c7153efdc1414e64422e00b7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      val superConsumed = super.onPostFling(consumed, available)
                      return superConsumed +
                          settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
                  }
              }
      }

      /**
       * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
       * app bar.
       *
       * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
       * the nested content is pulled up, and will expand back the collapsed area when the content is
       * pulled all the way down.
       *
       * @param state a [TopAppBarState]
       * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
       *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
       *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
       *   current state.
       * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
       *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
       *   the app bar will not continue to animate its height based on the scroll velocity.
       * @param canScroll a callback used to determine whether scroll events are to be handled by this
       *   [EnterAlwaysScrollBehavior]
       */
      private class EnterAlwaysScrollBehavior(
          override val state: TopAppBarState,
          override val snapAnimationSpec: AnimationSpec<Float>?,
          override val flingAnimationSpec: DecayAnimationSpec<Float>?,
          val canScroll: () -> Boolean = { true },
          isScrollingContentAtStart: (() -> Boolean)? = null,
      ) : TopAppBarScrollBehavior {

          init {
  - id: live-androidx-material3-material3-material3-appbar-lines-3414-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3414
    endLine: 3448
    sha256: 242623f2ed5f1dc05e53ad96eb5cb4fa9bf055327fa6dc9c86ba8228856c9716
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
              if (isScrollingContentAtStart != null) {
                  state.isScrollingContentAtStart = isScrollingContentAtStart
              }
          }

          override val isPinned: Boolean = false
          override var nestedScrollConnection =
              object : NestedScrollConnection {
                  override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                      if (!canScroll()) return Offset.Zero
                      val prevHeightOffset = state.heightOffset
                      state.heightOffset += available.y
                      // The state's heightOffset is coerce in a minimum value of heightOffsetLimit and a
                      // maximum value 0f, so we check if its value was actually changed after the
                      // available.y was added to it in order to tell if the top app bar is currently
                      // collapsing or expanding.
                      return if (prevHeightOffset != state.heightOffset) {
                          // We're in the middle of top app bar collapse or expand.
                          // Consume only the scroll on the Y axis.
                          available.copy(x = 0f)
                      } else {
                          Offset.Zero
                      }
                  }

                  override fun onPostScroll(
                      consumed: Offset,
                      available: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      if (!canScroll()) return Offset.Zero
                      state.contentOffset += consumed.y
                      return Offset.Zero
                  }
  - id: live-androidx-material3-material3-material3-appbar-lines-3449-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3449
    endLine: 3483
    sha256: 7f1e844e7cac9e06e9624c286c23ff924b804b2cefe3c10ead44e4138a2f9660
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                      if (available.y > 0f) {
                          // Reset the total content offset to zero when scrolling all the way down.
                          // This will eliminate some float precision inaccuracies.
                          state.contentOffset = 0f
                      }
                      val superConsumed = super.onPostFling(consumed, available)
                      return superConsumed +
                          settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
                  }
              }
      }

      /**
       * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
       * app bar.
       *
       * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
       * the nested content is pulled up, and will expand back the collapsed area when the content is
       * pulled all the way down.
       *
       * @param state a [TopAppBarState]
       * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
       *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
       *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
       *   current state.
       * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
       *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
       *   the app bar will not continue to animate its height based on the scroll velocity.
       * @param canScroll a callback used to determine whether scroll events are to be handled by this
       *   [ExitUntilCollapsedScrollBehavior]
       */
      private class ExitUntilCollapsedScrollBehavior(
          override val state: TopAppBarState,
          override val snapAnimationSpec: AnimationSpec<Float>?,
  - id: live-androidx-material3-material3-material3-appbar-lines-3484-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3484
    endLine: 3518
    sha256: de93c2e663d2498518a167c1706d94265bb4bb9dd2f5994bdbf3d4dc49079738
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override val flingAnimationSpec: DecayAnimationSpec<Float>?,
          val canScroll: () -> Boolean = { true },
      ) : TopAppBarScrollBehavior {
          override val isPinned: Boolean = false
          override var nestedScrollConnection =
              object : NestedScrollConnection {
                  override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                      // Don't intercept if scrolling down.
                      if (!canScroll() || available.y > 0f) return Offset.Zero

                      val prevHeightOffset = state.heightOffset
                      state.heightOffset = state.heightOffset + available.y
                      return if (prevHeightOffset != state.heightOffset) {
                          // We're in the middle of top app bar collapse or expand.
                          // Consume only the scroll on the Y axis.
                          available.copy(x = 0f)
                      } else {
                          Offset.Zero
                      }
                  }

                  override fun onPostScroll(
                      consumed: Offset,
                      available: Offset,
                      source: NestedScrollSource,
                  ): Offset {
                      if (!canScroll()) return Offset.Zero
                      state.contentOffset += consumed.y

                      if (available.y < 0f || consumed.y < 0f) {
                          // When scrolling up, just update the state's height offset.
                          val oldHeightOffset = state.heightOffset
                          state.heightOffset = state.heightOffset + consumed.y
                          return Offset(0f, state.heightOffset - oldHeightOffset)
                      }
  - id: live-androidx-material3-material3-material3-appbar-lines-349-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 349
    endLine: 383
    sha256: 34f3ae63da57557509149bdc2d4fc0b2508a18d727de7d59bf96c5ef6948290d
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
       *   to collapse or expand, this value will represent the maximum height that the bar will be
       *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
       *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @param contentPadding the padding applied to the content of this TopAppBar.
       */
      @Composable
      public fun CenterAlignedTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
          contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
      ): Unit =
          SingleRowTopAppBar(
              modifier = modifier,
              title = title,
              titleTextStyle = AppBarSmallTokens.TitleFont.value,
              subtitle = null,
              subtitleTextStyle = TextStyle.Default,
  - id: live-androidx-material3-material3-material3-appbar-lines-3519-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3519
    endLine: 3553
    sha256: e46a83121d14f071524147c7bf8c7c3ce4129fc99cf0d0f277cda76f0104d981
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
                      if (available.y > 0f) {
                          // Adjust the height offset in case the consumed delta Y is less than what was
                          // recorded as available delta Y in the pre-scroll.
                          val oldHeightOffset = state.heightOffset
                          state.heightOffset = state.heightOffset + available.y
                          return Offset(0f, state.heightOffset - oldHeightOffset)
                      }
                      return Offset.Zero
                  }

                  override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                      if (available.y > 0) {
                          // Reset the total content offset to zero when scrolling all the way down. This
                          // will eliminate some float precision inaccuracies.
                          state.contentOffset = 0f
                      }
                      val superConsumed = super.onPostFling(consumed, available)
                      return superConsumed +
                          settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
                  }
              }
      }

      /**
       * Settles the app bar by flinging, in case the given velocity is greater than zero, and snapping
       * after the fling settles.
       */
      private suspend fun settleAppBar(
          state: TopAppBarState,
          velocity: Float,
          flingAnimationSpec: DecayAnimationSpec<Float>?,
          snapAnimationSpec: AnimationSpec<Float>?,
      ): Velocity {
          // Check if the app bar is completely collapsed/expanded. If so, no need to settle the app bar,
  - id: live-androidx-material3-material3-material3-appbar-lines-3554-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3554
    endLine: 3588
    sha256: 9ae77f27a68d9a26831a674663423d86b20271ad6b51279cdba0f42d80a3de87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          // and just return Zero Velocity.
          // Note that we don't check for 0f due to float precision with the collapsedFraction
          // calculation.
          if (state.collapsedFraction < 0.01f || state.collapsedFraction == 1f) {
              return Velocity.Zero
          }
          var remainingVelocity = velocity
          // In case there is an initial velocity that was left after a previous user fling, animate to
          // continue the motion to expand or collapse the app bar.
          if (flingAnimationSpec != null && abs(velocity) > 1f) {
              var lastValue = 0f
              AnimationState(initialValue = 0f, initialVelocity = velocity).animateDecay(
                  flingAnimationSpec
              ) {
                  val delta = value - lastValue
                  val initialHeightOffset = state.heightOffset
                  state.heightOffset = initialHeightOffset + delta
                  val consumed = abs(initialHeightOffset - state.heightOffset)
                  lastValue = value
                  remainingVelocity = this.velocity
                  // avoid rounding errors and stop if anything is unconsumed
                  if (abs(delta - consumed) > 0.5f) this.cancelAnimation()
              }
          }
          // Snap if animation specs were provided.
          if (snapAnimationSpec != null) {
              if (state.heightOffset < 0 && state.heightOffset > state.heightOffsetLimit) {
                  AnimationState(initialValue = state.heightOffset).animateTo(
                      if (state.collapsedFraction < 0.5f) {
                          0f
                      } else {
                          state.heightOffsetLimit
                      },
                      animationSpec = snapAnimationSpec,
                  ) {
  - id: live-androidx-material3-material3-material3-appbar-lines-3589-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 3589
    endLine: 3621
    sha256: b2ddeefb3057ccce52d198dd1777a3d0cd470a0a24dfb0f84885d954d664fbc7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                      state.heightOffset = value
                  }
              }
          }

          return Velocity(0f, remainingVelocity)
      }

      /** Returns the current accessibility touch exploration service [State]. */
      @Composable
      private fun rememberTouchExplorationService() =
          rememberAccessibilityServiceState(
              listenToTouchExplorationState = true,
              listenToSwitchAccessState = false,
              listenToVoiceAccessState = false,
          )

      // An easing function used to compute the alpha value that is applied to the top title part of a
      // Medium or Large app bar.
      /*@VisibleForTesting*/
      internal val TopTitleAlphaEasing = CubicBezierEasing(.8f, 0f, .8f, .15f)

      private val MediumTitleBottomPadding
          get() = 24.dp
      private val LargeTitleBottomPadding
          get() = 28.dp
      private val TopAppBarHorizontalPadding
          get() = 4.dp

      // A title inset when the App-Bar is a Medium or Large one. Also used to size a spacer when the
      // navigation icon is missing.
      private val TopAppBarTitleInset = 16.dp - TopAppBarHorizontalPadding
  - id: live-androidx-material3-material3-material3-appbar-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 36
    endLine: 70
    sha256: 430775a4d8baa44e3c9081db13223ee64711a259e459d0164f81ecf409cd822b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.foundation.layout.Row
      import androidx.compose.foundation.layout.RowScope
      import androidx.compose.foundation.layout.WindowInsets
      import androidx.compose.foundation.layout.WindowInsetsSides
      import androidx.compose.foundation.layout.calculateEndPadding
      import androidx.compose.foundation.layout.calculateStartPadding
      import androidx.compose.foundation.layout.fillMaxHeight
      import androidx.compose.foundation.layout.fillMaxWidth
      import androidx.compose.foundation.layout.height
      import androidx.compose.foundation.layout.only
      import androidx.compose.foundation.layout.padding
      import androidx.compose.foundation.layout.windowInsetsPadding
      import androidx.compose.foundation.lazy.LazyColumn
      import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
      import androidx.compose.material3.BottomAppBarState.Companion.Saver
      import androidx.compose.material3.TopAppBarState.Companion.Saver
      import androidx.compose.material3.internal.FloatProducer
      import androidx.compose.material3.internal.ProvideContentColorTextStyle
      import androidx.compose.material3.internal.rememberAccessibilityServiceState
      import androidx.compose.material3.internal.systemBarsForVisualComponents
      import androidx.compose.material3.tokens.AppBarLargeFlexibleTokens
      import androidx.compose.material3.tokens.AppBarLargeTokens
      import androidx.compose.material3.tokens.AppBarMediumFlexibleTokens
      import androidx.compose.material3.tokens.AppBarMediumTokens
      import androidx.compose.material3.tokens.AppBarSmallTokens
      import androidx.compose.material3.tokens.AppBarTokens
      import androidx.compose.material3.tokens.BottomAppBarTokens
      import androidx.compose.material3.tokens.DockedToolbarTokens
      import androidx.compose.material3.tokens.FabSecondaryContainerTokens
      import androidx.compose.material3.tokens.MotionSchemeKeyTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.derivedStateOf
  - id: live-androidx-material3-material3-material3-appbar-lines-384-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 384
    endLine: 418
    sha256: ab89e6e7edfb286f7f2f51eb2b9cd5dcc3ba14b266489df0cb05f4a2b1a6621c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              titleHorizontalAlignment = Alignment.CenterHorizontally,
              navigationIcon = navigationIcon,
              actions = actions,
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      TopAppBarDefaults.TopAppBarExpandedHeight
                  } else {
                      expandedHeight
                  },
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * This small TopAppBar has slots for a title, subtitle, navigation icon, and actions.
       *
       * ![Small top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
       *
       * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
       * scrolled under it looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleTopAppBarWithSubtitle
       *
       * A top app bar with a centered title and subtitle looks like:
       *
       * @sample androidx.compose.material3.samples.SimpleTopAppBarWithSubtitleAndCenterAligned
       * @param title the title to be displayed in the top app bar
       * @param subtitle the subtitle to be displayed in the top app bar
  - id: live-androidx-material3-material3-material3-appbar-lines-419-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 419
    endLine: 451
    sha256: e800a6a7c81f56b9bd52f8f5f089080bec3ace816ae5b238c0380b6ed677ab1a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
       * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
       *   to collapse or expand, this value will represent the maximum height that the bar will be
       *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
       *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @param contentPadding the padding applied to the content of this TopAppBar.
       *
       * @material3expressive
       */
      @Composable
      public fun TopAppBar(
          title: @Composable () -> Unit,
          subtitle: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
          expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
  - id: live-androidx-material3-material3-material3-appbar-lines-452-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 452
    endLine: 486
    sha256: de88e0c225fb953443a056926937babbc53d85f3cc1cc9d804f564dbb3333387
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
      ): Unit =
          SingleRowTopAppBar(
              modifier = modifier,
              title = title,
              titleTextStyle = AppBarSmallTokens.TitleFont.value,
              subtitle = subtitle,
              subtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
              titleHorizontalAlignment = titleHorizontalAlignment,
              navigationIcon = navigationIcon,
              actions = actions,
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      TopAppBarDefaults.TopAppBarExpandedHeight
                  } else {
                      expandedHeight
                  },
              contentPadding = contentPadding,
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design medium top app bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * ![Medium top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
       *
       * This MediumTopAppBar has slots for a title, navigation icon, and actions. In its default expanded
       * state, the title is displayed in a second row under the navigation and actions.
       *
       * A medium top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and expand as
  - id: live-androidx-material3-material3-material3-appbar-lines-487-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 487
    endLine: 513
    sha256: 69efe3a04d9cad939c198046bce66cff3fd8062b9ef0b8b5f6f0b7316db71c13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * content is scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumTopAppBar
       * @param title the title to be displayed in the top app bar. This title will be used in the app
       *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
       *   smaller sized [TextStyle]
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
       *   value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.MediumAppBarCollapsedHeight].
       * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
       *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
       *   will be allowed to expand. The expanded height is expected to be greater or equal to the
       *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
       *   this value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.MediumAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
  - id: live-androidx-material3-material3-material3-appbar-lines-514-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 514
    endLine: 548
    sha256: 6c9ca101384e8dc62f49cd8bbe90ead9cb0ebfbdd658e4ac3a23f2b943a729b5
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @throws IllegalArgumentException if the provided [expandedHeight] is smaller than the
       *   [collapsedHeight]
       */
      @Composable
      public fun MediumTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          collapsedHeight: Dp = TopAppBarDefaults.MediumAppBarCollapsedHeight,
          expandedHeight: Dp = TopAppBarDefaults.MediumAppBarExpandedHeight,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          TwoRowsTopAppBar(
              modifier = modifier,
              title = title,
              titleTextStyle = AppBarMediumTokens.TitleFont.value,
              smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
              titleBottomPadding = MediumTitleBottomPadding,
              smallTitle = title,
              subtitle = null,
              subtitleTextStyle = TextStyle.Default,
              smallSubtitle = null,
              smallSubtitleTextStyle = TextStyle.Default,
              titleHorizontalAlignment = Alignment.Start,
              navigationIcon = navigationIcon,
              actions = actions,
              collapsedHeight =
                  if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                      TopAppBarDefaults.MediumAppBarCollapsedHeight
                  } else {
                      collapsedHeight
                  },
  - id: live-androidx-material3-material3-material3-appbar-lines-549-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 549
    endLine: 583
    sha256: 79e22d250ede25f3cb30256ce9ad11c447a6fbcd162b55e8abf89a29f59ec144
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      TopAppBarDefaults.MediumAppBarExpandedHeight
                  } else {
                      expandedHeight
                  },
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design medium flexible top app
       * bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * ![Medium top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
       *
       * (Note: The image above shows the standard MediumTopAppBar layout, which is visually identical to
       * this bar when no subtitle is provided.)
       *
       * This `MediumFlexibleTopAppBar` has slots for a title, subtitle, navigation icon, and actions. In
       * its default expanded state, the title and subtitle are displayed in a second row under the
       * navigation and actions.
       *
       * A medium flexible top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and
       * expand as content is scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumFlexibleTopAppBar
       *
       * A medium flexible top app bar with a centered title and subtitle looks like:
       *
       * @sample androidx.compose.material3.samples.MediumFlexibleTopAppBarWithSubtitleAndCenterAligned
  - id: live-androidx-material3-material3-material3-appbar-lines-584-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 584
    endLine: 609
    sha256: e4967d1b1763b79b1dda663b635c178b1e1dfcaf149b4527829a666d44283ba4
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param title the title to be displayed in the top app bar. This title will be used in the app
       *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
       *   smaller sized [TextStyle]
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param subtitle optional subtitle to be displayed in the top app bar. This subtitle will be used
       *   in the app bar's expanded and collapsed states
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
       * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
       *   value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.MediumAppBarCollapsedHeight].
       * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
       *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
       *   will be allowed to expand. The expanded height is expected to be greater or equal to the
       *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
       *   this value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight] or
       *   [TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
  - id: live-androidx-material3-material3-material3-appbar-lines-610-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 610
    endLine: 644
    sha256: ff3c0f7c477fde707ff4cc7b3821addba838c760e93bda896e63c31b72566b83
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @throws IllegalArgumentException if the provided [expandedHeight] is smaller than the
       *   [collapsedHeight]
       *
       * @material3expressive
       */
      @Composable
      public fun MediumFlexibleTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          subtitle: (@Composable () -> Unit)? = null,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
          collapsedHeight: Dp = TopAppBarDefaults.MediumAppBarCollapsedHeight,
          expandedHeight: Dp =
              if (subtitle != null) {
                  TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
              } else {
                  TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
              },
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          TwoRowsTopAppBar(
              modifier = modifier,
              title = title,
              titleTextStyle = AppBarMediumFlexibleTokens.TitleFont.value,
              smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
              titleBottomPadding = MediumTitleBottomPadding,
              smallTitle = title,
              subtitle = subtitle ?: {},
              subtitleTextStyle = AppBarMediumFlexibleTokens.SubtitleFont.value,
  - id: live-androidx-material3-material3-material3-appbar-lines-645-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 645
    endLine: 679
    sha256: 6abb8e76a915b28ef452b2017747aa5edfa5a2e26f0e5f0fb868fc42e4de2c88
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              smallSubtitle = subtitle ?: {},
              smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
              titleHorizontalAlignment = titleHorizontalAlignment,
              navigationIcon = navigationIcon,
              actions = actions,
              collapsedHeight =
                  if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                      TopAppBarDefaults.MediumAppBarCollapsedHeight
                  } else {
                      collapsedHeight
                  },
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      if (subtitle != null) {
                          TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
                      } else {
                          TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
                      }
                  } else {
                      expandedHeight
                  },
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design large top app bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * ![Large top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/large-top-app-bar.png)
       *
       * This LargeTopAppBar has slots for a title, navigation icon, and actions. In its default expanded
  - id: live-androidx-material3-material3-material3-appbar-lines-680-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 680
    endLine: 707
    sha256: 0262401a5b7e1c7721a6735f6defe25425e73195d6ed7825c8ef4cc08a5c18c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * state, the title is displayed in a second row under the navigation and actions.
       *
       * A large top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and expand as
       * content is scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.ExitUntilCollapsedLargeTopAppBar
       * @param title the title to be displayed in the top app bar. This title will be used in the app
       *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
       *   smaller sized [TextStyle]
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
       *   value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.LargeAppBarCollapsedHeight].
       * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
       *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
       *   will be allowed to expand. The expanded height is expected to be greater or equal to the
       *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
       *   this value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.LargeAppBarExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
  - id: live-androidx-material3-material3-material3-appbar-lines-708-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 708
    endLine: 742
    sha256: 1d0ccc0186440a13d1c61a0b5b9d23675fcd379591daa73fd43347402466fc32
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the
       *   [collapsedHeight]
       */
      @Composable
      public fun LargeTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          collapsedHeight: Dp = TopAppBarDefaults.LargeAppBarCollapsedHeight,
          expandedHeight: Dp = TopAppBarDefaults.LargeAppBarExpandedHeight,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          TwoRowsTopAppBar(
              title = title,
              titleTextStyle = AppBarLargeTokens.TitleFont.value,
              smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
              titleBottomPadding = LargeTitleBottomPadding,
              smallTitle = title,
              modifier = modifier,
              subtitle = null,
              subtitleTextStyle = TextStyle.Default,
              smallSubtitle = null,
              smallSubtitleTextStyle = TextStyle.Default,
              titleHorizontalAlignment = Alignment.Start,
              navigationIcon = navigationIcon,
              actions = actions,
              collapsedHeight =
                  if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                      TopAppBarDefaults.LargeAppBarCollapsedHeight
                  } else {
  - id: live-androidx-material3-material3-material3-appbar-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 71
    endLine: 105
    sha256: 90dd45eff2467209a219f0407ad89638e44a2dfd1e4b2ef1bfecca2287dacbcf
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableFloatStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.saveable.Saver
      import androidx.compose.runtime.saveable.listSaver
      import androidx.compose.runtime.saveable.rememberSaveable
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.clipToBounds
      import androidx.compose.ui.draw.drawBehind
      import androidx.compose.ui.geometry.Offset
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.graphicsLayer
      import androidx.compose.ui.graphics.lerp
      import androidx.compose.ui.graphics.takeOrElse
      import androidx.compose.ui.input.nestedscroll.NestedScrollConnection
      import androidx.compose.ui.input.nestedscroll.NestedScrollSource
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.layout.AlignmentLine
      import androidx.compose.ui.layout.IntrinsicMeasurable
      import androidx.compose.ui.layout.IntrinsicMeasureScope
      import androidx.compose.ui.layout.LastBaseline
      import androidx.compose.ui.layout.Layout
      import androidx.compose.ui.layout.Measurable
      import androidx.compose.ui.layout.MeasurePolicy
      import androidx.compose.ui.layout.MeasureResult
      import androidx.compose.ui.layout.MeasureScope
      import androidx.compose.ui.layout.Placeable
      import androidx.compose.ui.layout.layout
      import androidx.compose.ui.layout.layoutId
      import androidx.compose.ui.layout.onSizeChanged
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.semantics.clearAndSetSemantics
      import androidx.compose.ui.semantics.isTraversalGroup
  - id: live-androidx-material3-material3-material3-appbar-lines-743-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 743
    endLine: 777
    sha256: 9ef530950c7dcca1ad85085f4f99a4ef81f27f60ef3030cd4ff80a0f58113526
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      collapsedHeight
                  },
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      TopAppBarDefaults.LargeAppBarExpandedHeight
                  } else {
                      expandedHeight
                  },
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * [Material Design large flexible top app
       * bar](https://m3.material.io/components/top-app-bar/overview)
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * ![Large top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/large-top-app-bar.png)
       *
       * (Note: The image above shows the standard LargeTopAppBar layout, which is visually identical to
       * this bar when no subtitle is provided.)
       *
       * This `LargeFlexibleTopAppBar` has slots for a title, subtitle, navigation icon, and actions. In
       * its default expanded state, the title and subtitle are displayed in a second row under the
       * navigation and actions.
       *
       * A large flexible top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and
       * expand as content is scrolled looks like:
       *
       * @sample androidx.compose.material3.samples.ExitUntilCollapsedLargeFlexibleTopAppBar
       *
       * A large flexible top app bar with a centered title and subtitle looks like:
  - id: live-androidx-material3-material3-material3-appbar-lines-778-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 778
    endLine: 804
    sha256: 9490ec16393e42f01824697e7c1eaa745b14e15fe44631f3e8c64464c8bf9fd1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *
       * @sample androidx.compose.material3.samples.LargeFlexibleTopAppBarWithSubtitleAndCenterAligned
       * @param title the title to be displayed in the top app bar. This title will be used in the app
       *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
       *   smaller sized [TextStyle]
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param subtitle an optional subtitle to be displayed in the top app bar. This subtitle will be
       *   used in the app bar's expanded and collapsed states.
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
       * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
       *   value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.LargeAppBarCollapsedHeight].
       * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
       *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
       *   will be allowed to expand. The expanded height is expected to be greater or equal to the
       *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
       *   this value must be specified and finite, otherwise it will be ignored and replaced with
       *   [TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight] or
       *   [TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight].
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
  - id: live-androidx-material3-material3-material3-appbar-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 805
    endLine: 839
    sha256: a9abebd70f8af957b91852a581535ebd9922501125deb29c74284117ae0ddd75
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the
       *   [collapsedHeight]
       *
       * @material3expressive
       */
      @Composable
      public fun LargeFlexibleTopAppBar(
          title: @Composable () -> Unit,
          modifier: Modifier = Modifier,
          subtitle: (@Composable () -> Unit)? = null,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
          collapsedHeight: Dp = TopAppBarDefaults.LargeAppBarCollapsedHeight,
          expandedHeight: Dp =
              if (subtitle != null) {
                  TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight
              } else {
                  TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight
              },
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ): Unit =
          TwoRowsTopAppBar(
              title = title,
              titleTextStyle = AppBarLargeFlexibleTokens.TitleFont.value,
              smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
              titleBottomPadding = LargeTitleBottomPadding,
              smallTitle = title,
              modifier = modifier,
              subtitle = subtitle ?: {},
  - id: live-androidx-material3-material3-material3-appbar-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 840
    endLine: 874
    sha256: bca4e61afee517b0c55c632f4e1b50710e9fd0fa9ad7acfac4c92472397b4952
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              subtitleTextStyle = AppBarLargeFlexibleTokens.SubtitleFont.value,
              smallSubtitle = subtitle ?: {},
              smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
              titleHorizontalAlignment = titleHorizontalAlignment,
              navigationIcon = navigationIcon,
              actions = actions,
              collapsedHeight =
                  if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                      TopAppBarDefaults.LargeAppBarCollapsedHeight
                  } else {
                      collapsedHeight
                  },
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      if (subtitle != null) {
                          TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight
                      } else {
                          TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight
                      }
                  } else {
                      expandedHeight
                  },
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )

      /**
       * A basic two-rows Material Design top app bar.
       *
       * Top app bars display information and actions at the top of a screen.
       *
       * ![Two rows top app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
       *
  - id: live-androidx-material3-material3-material3-appbar-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 875
    endLine: 903
    sha256: d7e6569b90d9f10719f7a0bf1845ab28ea7fe7fb3d1d8c0ab096e4d6720a8526
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * (Note: The image above shows the standard MediumTopAppBar layout, which is visually identical to
       * this bar when no subtitle is provided.)
       *
       * This two-rows top app bar has slots for titles and subtitles, navigation icon, and actions. In
       * its default expanded state, the expanded title and subtitle are displayed in a second row under
       * the navigation and actions.
       *
       * By default, the two-rows top app bar will apply the [MediumFlexibleTopAppBar] text styles to the
       * expanded and collapsed titles and subtitles. You may override that by applying your own style to
       * the content you provide in the [title] and [subtitle] slots.
       *
       * A two-rows top app bar that uses a [scrollBehavior] to customize its nested scrolling behavior
       * when working in conjunction with scrolling content looks like:
       *
       * @sample androidx.compose.material3.samples.CustomTwoRowsTopAppBar
       * @param title a lambda for providing a title to be displayed in the top app bar in collapsed and
       *   expanded states. By default, the [MediumFlexibleTopAppBar] title [TextStyle]s are applied to
       *   the Composition (a medium-flexible-app-bar style when `expanded` is `true`, and a small-app-bar
       *   style when `expanded` is `false`), and you may override them on the provided component or by
       *   wrapping it with a composition local. Note that unlike the large or medium top app bars, the
       *   `TwoRowsTopAppBar` does not append bottom padding to the expanded title Composable by default.
       *   Padding should be applied directly to the provided expanded title, or to the [subtitle] that
       *   appears below it.
       * @param modifier the [Modifier] to be applied to this top app bar
       * @param subtitle a lambda for providing an optional subtitle to be displayed in the top app bar in
       *   collapsed and expanded states. By default, the [MediumFlexibleTopAppBar] subtitle [TextStyle]s
       *   are applied to the Composition (a medium-flexible-app-bar style when `expanded` is `true`, and
       *   a small-app-bar style when `expanded` is `false`), and you may override them on the provided
       *   component or by wrapping it with a composition local.
  - id: live-androidx-material3-material3-material3-appbar-lines-904-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 904
    endLine: 928
    sha256: ba5dbe28e7be85d2494a527cc77ab0e2c41e38d4b5b54e2a93657940752004c8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
       *   typically be an [IconButton] or [IconToggleButton].
       * @param actions the actions displayed at the end of the top app bar. This should typically be
       *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
       * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
       * @param collapsedHeight the app bar's height in its collapsed state. Note that this value might be
       *   adjusted to support displaying larger fonts. In case the provided value is [Dp.Unspecified] or
       *   [Dp.Infinity], the height will default to [TopAppBarDefaults.MediumAppBarCollapsedHeight].
       * @param expandedHeight this app bar's height in its expanded state. When a specified
       *   [scrollBehavior] causes the app bar to collapse or expand, this value will represent the total
       *   height that the app-bar will expand to. The expanded height is expected to be greater or equal
       *   to the [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise.
       *   Note that this value might be adjusted to support displaying larger fonts. In case the provided
       *   value is [Dp.Unspecified] or [Dp.Infinity], the height will default to
       *   [TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight] when a [subtitle] is
       *   provided, or to [TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight] when it's
       *   not.
       * @param windowInsets a window insets that app bar will respect.
       * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
       *   in different states. See [TopAppBarDefaults.topAppBarColors].
       * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
       *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
       *   work in conjunction with a scrolled content to change the top app bar appearance as the content
       *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
       * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the
  - id: live-androidx-material3-material3-material3-appbar-lines-929-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 929
    endLine: 963
    sha256: 6cfaf9ff059f38ae8faef02f8509f3d1a7f550ff221606dde27d1571ee348b65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   [collapsedHeight]
       *
       * @material3expressive
       */
      @Composable
      public fun TwoRowsTopAppBar(
          title: @Composable (expanded: Boolean) -> Unit,
          modifier: Modifier = Modifier,
          subtitle: (@Composable (expanded: Boolean) -> Unit)? = null,
          navigationIcon: @Composable () -> Unit = {},
          actions: @Composable RowScope.() -> Unit = {},
          titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
          collapsedHeight: Dp = Dp.Unspecified,
          expandedHeight: Dp = Dp.Unspecified,
          windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
          colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
          scrollBehavior: TopAppBarScrollBehavior? = null,
      ) {
          TwoRowsTopAppBar(
              title = { title(true) },
              titleTextStyle = AppBarMediumFlexibleTokens.TitleFont.value,
              smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
              titleBottomPadding = 0.dp,
              smallTitle = { title(false) },
              modifier = modifier,
              subtitle = { subtitle?.invoke(true) },
              subtitleTextStyle = AppBarMediumFlexibleTokens.SubtitleFont.value,
              smallSubtitle = { subtitle?.invoke(false) },
              smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
              titleHorizontalAlignment = titleHorizontalAlignment,
              navigationIcon = navigationIcon,
              actions = actions,
              collapsedHeight =
                  if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                      // Default to the medium app-bar collapsed height
  - id: live-androidx-material3-material3-material3-appbar-lines-964-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 964
    endLine: 998
    sha256: 81bf9f41483c5b2c3fc60003386095c99eaa851e2c2727adfca9a4175525a876
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      TopAppBarDefaults.MediumAppBarCollapsedHeight
                  } else {
                      collapsedHeight
                  },
              expandedHeight =
                  if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                      // Default to the medium app-bar expanded height
                      if (subtitle != null) {
                          TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
                      } else {
                          TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
                      }
                  } else {
                      expandedHeight
                  },
              windowInsets = windowInsets,
              colors = colors,
              scrollBehavior = scrollBehavior,
          )
      }

      /**
       * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
       *
       * A bottom app bar displays navigation and key actions at the bottom of small screens.
       *
       * ![Bottom app bar
       * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
       *
       * @sample androidx.compose.material3.samples.SimpleBottomAppBar
       *
       * It can optionally display a [FloatingActionButton] embedded at the end of the BottomAppBar.
       *
       * @sample androidx.compose.material3.samples.BottomAppBarWithFAB
       *
  - id: live-androidx-material3-material3-material3-appbar-lines-999-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt
    startLine: 999
    endLine: 1033
    sha256: 1df8359b6797ce860a4a46d99959e694dce9df00688f82f9886c9d8f7ce00d13
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Also see [NavigationBar].
       *
       * @param actions the icon content of this BottomAppBar. The default layout here is a [Row], so
       *   content inside will be placed horizontally.
       * @param modifier the [Modifier] to be applied to this BottomAppBar
       * @param floatingActionButton optional floating action button at the end of this BottomAppBar
       * @param containerColor the color used for the background of this BottomAppBar. Use
       *   [Color.Transparent] to have no color.
       * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
       *   the matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param contentPadding the padding applied to the content of this BottomAppBar
       * @param windowInsets a window insets that app bar will respect.
       */
      @Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
      @Composable
      public fun BottomAppBar(
          actions: @Composable RowScope.() -> Unit,
          modifier: Modifier = Modifier,
          floatingActionButton: @Composable (() -> Unit)? = null,
          containerColor: Color = BottomAppBarDefaults.containerColor,
          contentColor: Color = contentColorFor(containerColor),
          tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
          contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
          windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
      ): Unit =
          BottomAppBar(
              actions = actions,
              modifier = modifier,
              floatingActionButton = floatingActionButton,
              containerColor = containerColor,
              contentColor = contentColor,
compose:
  id: live-androidx-material3-material3-material3-appbar
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-appbar-lines-1
      title: androidx.compose.material3 AppBar.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1034
      title: androidx.compose.material3 AppBar.kt source (lines 1034–1068)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1034-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-106
      title: androidx.compose.material3 AppBar.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.TopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1069
      title: androidx.compose.material3 AppBar.kt source (lines 1069–1103)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1069-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1104
      title: androidx.compose.material3 AppBar.kt source (lines 1104–1138)
      aliases:
        - androidx.compose.material3.BottomAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1104-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1139
      title: androidx.compose.material3 AppBar.kt source (lines 1139–1173)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1139-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1174
      title: androidx.compose.material3 AppBar.kt source (lines 1174–1208)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1174-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1209
      title: androidx.compose.material3 AppBar.kt source (lines 1209–1243)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1209-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1244
      title: androidx.compose.material3 AppBar.kt source (lines 1244–1278)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1244-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1279
      title: androidx.compose.material3 AppBar.kt source (lines 1279–1313)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.FlexibleBottomAppBar
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1279-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1314
      title: androidx.compose.material3 AppBar.kt source (lines 1314–1348)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1314-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1349
      title: androidx.compose.material3 AppBar.kt source (lines 1349–1383)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1349-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1384
      title: androidx.compose.material3 AppBar.kt source (lines 1384–1418)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1384-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-141
      title: androidx.compose.material3 AppBar.kt source (lines 141–175)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1419
      title: androidx.compose.material3 AppBar.kt source (lines 1419–1453)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1419-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1454
      title: androidx.compose.material3 AppBar.kt source (lines 1454–1488)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1454-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1489
      title: androidx.compose.material3 AppBar.kt source (lines 1489–1523)
      aliases:
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1489-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1524
      title: androidx.compose.material3 AppBar.kt source (lines 1524–1558)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1524-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1559
      title: androidx.compose.material3 AppBar.kt source (lines 1559–1593)
      aliases:
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1559-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1594
      title: androidx.compose.material3 AppBar.kt source (lines 1594–1628)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1594-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1629
      title: androidx.compose.material3 AppBar.kt source (lines 1629–1663)
      aliases:
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1629-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1664
      title: androidx.compose.material3 AppBar.kt source (lines 1664–1698)
      aliases:
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1664-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1699
      title: androidx.compose.material3 AppBar.kt source (lines 1699–1733)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1699-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1734
      title: androidx.compose.material3 AppBar.kt source (lines 1734–1768)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1734-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-176
      title: androidx.compose.material3 AppBar.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1769
      title: androidx.compose.material3 AppBar.kt source (lines 1769–1803)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1769-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1804
      title: androidx.compose.material3 AppBar.kt source (lines 1804–1838)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1804-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1839
      title: androidx.compose.material3 AppBar.kt source (lines 1839–1873)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.rememberTopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1839-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1874
      title: androidx.compose.material3 AppBar.kt source (lines 1874–1908)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1874-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1909
      title: androidx.compose.material3 AppBar.kt source (lines 1909–1943)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1909-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1944
      title: androidx.compose.material3 AppBar.kt source (lines 1944–1978)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1944-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-1979
      title: androidx.compose.material3 AppBar.kt source (lines 1979–2013)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.MediumFlexibleTopAppBar
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-1979-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2014
      title: androidx.compose.material3 AppBar.kt source (lines 2014–2048)
      aliases:
        - androidx.compose.material3.LargeFlexibleTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.rememberTopAppBarState
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2014-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2049
      title: androidx.compose.material3 AppBar.kt source (lines 2049–2083)
      aliases:
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2049-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2084
      title: androidx.compose.material3 AppBar.kt source (lines 2084–2118)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2084-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-211
      title: androidx.compose.material3 AppBar.kt source (lines 211–243)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2119
      title: androidx.compose.material3 AppBar.kt source (lines 2119–2153)
      aliases:
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2119-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2154
      title: androidx.compose.material3 AppBar.kt source (lines 2154–2188)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2154-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2189
      title: androidx.compose.material3 AppBar.kt source (lines 2189–2223)
      aliases:
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2189-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2224
      title: androidx.compose.material3 AppBar.kt source (lines 2224–2258)
      aliases:
        - androidx.compose.material3.TopAppBarState
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2224-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2259
      title: androidx.compose.material3 AppBar.kt source (lines 2259–2293)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarDefaults
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2259-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2294
      title: androidx.compose.material3 AppBar.kt source (lines 2294–2328)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2294-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2329
      title: androidx.compose.material3 AppBar.kt source (lines 2329–2363)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.FlexibleBottomAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2329-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2364
      title: androidx.compose.material3 AppBar.kt source (lines 2364–2398)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.rememberBottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2364-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2399
      title: androidx.compose.material3 AppBar.kt source (lines 2399–2433)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarDefaults
        - androidx.compose.material3.rememberBottomAppBarState
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2399-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2434
      title: androidx.compose.material3 AppBar.kt source (lines 2434–2468)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.rememberBottomAppBarState
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2434-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-244
      title: androidx.compose.material3 AppBar.kt source (lines 244–278)
      aliases:
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-244-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2469
      title: androidx.compose.material3 AppBar.kt source (lines 2469–2503)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2469-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2504
      title: androidx.compose.material3 AppBar.kt source (lines 2504–2538)
      aliases:
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2504-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2539
      title: androidx.compose.material3 AppBar.kt source (lines 2539–2573)
      aliases:
        - androidx.compose.material3.BottomAppBarScrollBehavior
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2539-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2574
      title: androidx.compose.material3 AppBar.kt source (lines 2574–2608)
      aliases:
        - androidx.compose.material3.BottomAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2574-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2609
      title: androidx.compose.material3 AppBar.kt source (lines 2609–2643)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2609-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2644
      title: androidx.compose.material3 AppBar.kt source (lines 2644–2678)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2644-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2679
      title: androidx.compose.material3 AppBar.kt source (lines 2679–2713)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2679-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2714
      title: androidx.compose.material3 AppBar.kt source (lines 2714–2748)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2714-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2749
      title: androidx.compose.material3 AppBar.kt source (lines 2749–2783)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2749-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2784
      title: androidx.compose.material3 AppBar.kt source (lines 2784–2818)
      aliases:
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2784-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-279
      title: androidx.compose.material3 AppBar.kt source (lines 279–313)
      aliases:
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-279-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2819
      title: androidx.compose.material3 AppBar.kt source (lines 2819–2853)
      aliases:
        - androidx.compose.material3.TwoRowsTopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2819-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2854
      title: androidx.compose.material3 AppBar.kt source (lines 2854–2888)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2854-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2889
      title: androidx.compose.material3 AppBar.kt source (lines 2889–2923)
      aliases:
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2889-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2924
      title: androidx.compose.material3 AppBar.kt source (lines 2924–2958)
      aliases:
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2924-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2959
      title: androidx.compose.material3 AppBar.kt source (lines 2959–2993)
      aliases:
        - androidx.compose.material3.TopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2959-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-2994
      title: androidx.compose.material3 AppBar.kt source (lines 2994–3028)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-2994-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3029
      title: androidx.compose.material3 AppBar.kt source (lines 3029–3063)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3029-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3064
      title: androidx.compose.material3 AppBar.kt source (lines 3064–3098)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3064-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3099
      title: androidx.compose.material3 AppBar.kt source (lines 3099–3133)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3099-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3134
      title: androidx.compose.material3 AppBar.kt source (lines 3134–3168)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3134-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-314
      title: androidx.compose.material3 AppBar.kt source (lines 314–348)
      aliases:
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-314-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3169
      title: androidx.compose.material3 AppBar.kt source (lines 3169–3203)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3169-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3204
      title: androidx.compose.material3 AppBar.kt source (lines 3204–3238)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3204-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3239
      title: androidx.compose.material3 AppBar.kt source (lines 3239–3273)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3239-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3274
      title: androidx.compose.material3 AppBar.kt source (lines 3274–3308)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3274-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3309
      title: androidx.compose.material3 AppBar.kt source (lines 3309–3343)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3309-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3344
      title: androidx.compose.material3 AppBar.kt source (lines 3344–3378)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3344-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3379
      title: androidx.compose.material3 AppBar.kt source (lines 3379–3413)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3379-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3414
      title: androidx.compose.material3 AppBar.kt source (lines 3414–3448)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3414-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3449
      title: androidx.compose.material3 AppBar.kt source (lines 3449–3483)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3449-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3484
      title: androidx.compose.material3 AppBar.kt source (lines 3484–3518)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3484-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-349
      title: androidx.compose.material3 AppBar.kt source (lines 349–383)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.CenterAlignedTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-349-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3519
      title: androidx.compose.material3 AppBar.kt source (lines 3519–3553)
      aliases:
        - androidx.compose.material3.TopAppBarState
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3519-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3554
      title: androidx.compose.material3 AppBar.kt source (lines 3554–3588)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3554-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-3589
      title: androidx.compose.material3 AppBar.kt source (lines 3589–3621)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-3589-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-36
      title: androidx.compose.material3 AppBar.kt source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-384
      title: androidx.compose.material3 AppBar.kt source (lines 384–418)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-384-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-419
      title: androidx.compose.material3 AppBar.kt source (lines 419–451)
      aliases:
        - androidx.compose.material3.TopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-419-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-452
      title: androidx.compose.material3 AppBar.kt source (lines 452–486)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-452-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-487
      title: androidx.compose.material3 AppBar.kt source (lines 487–513)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-487-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-514
      title: androidx.compose.material3 AppBar.kt source (lines 514–548)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-514-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-549
      title: androidx.compose.material3 AppBar.kt source (lines 549–583)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.MediumFlexibleTopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-549-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-584
      title: androidx.compose.material3 AppBar.kt source (lines 584–609)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-584-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-610
      title: androidx.compose.material3 AppBar.kt source (lines 610–644)
      aliases:
        - androidx.compose.material3.MediumFlexibleTopAppBar
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-610-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-645
      title: androidx.compose.material3 AppBar.kt source (lines 645–679)
      aliases:
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-645-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-680
      title: androidx.compose.material3 AppBar.kt source (lines 680–707)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-680-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-708
      title: androidx.compose.material3 AppBar.kt source (lines 708–742)
      aliases:
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-708-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-71
      title: androidx.compose.material3 AppBar.kt source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-743
      title: androidx.compose.material3 AppBar.kt source (lines 743–777)
      aliases:
        - androidx.compose.material3.LargeTopAppBar
        - androidx.compose.material3.LargeFlexibleTopAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-743-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-778
      title: androidx.compose.material3 AppBar.kt source (lines 778–804)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-778-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-805
      title: androidx.compose.material3 AppBar.kt source (lines 805–839)
      aliases:
        - androidx.compose.material3.LargeFlexibleTopAppBar
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-805-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-840
      title: androidx.compose.material3 AppBar.kt source (lines 840–874)
      aliases:
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-840-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-875
      title: androidx.compose.material3 AppBar.kt source (lines 875–903)
      aliases:
        - androidx.compose.material3.MediumTopAppBar
        - androidx.compose.material3.MediumFlexibleTopAppBar
        - androidx.compose.material3.TwoRowsTopAppBar
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-875-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-904
      title: androidx.compose.material3 AppBar.kt source (lines 904–928)
      aliases:
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-904-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-929
      title: androidx.compose.material3 AppBar.kt source (lines 929–963)
      aliases:
        - androidx.compose.material3.TwoRowsTopAppBar
        - androidx.compose.material3.TopAppBarScrollBehavior
        - androidx.compose.material3.TopAppBarDefaults
        - androidx.compose.material3.TopAppBarColors
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-929-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-964
      title: androidx.compose.material3 AppBar.kt source (lines 964–998)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.TopAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-964-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-appbar-lines-999
      title: androidx.compose.material3 AppBar.kt source (lines 999–1033)
      aliases:
        - androidx.compose.material3.BottomAppBar
        - androidx.compose.material3.BottomAppBarDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-appbar-lines-999-source
      relatedIds: []
---

# androidx.compose.material3 AppBar.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt

## androidx.compose.material3 AppBar.kt source (lines 1–35)

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
import androidx.compose.animation.core.AnimationState
import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.DecayAnimationSpec
import androidx.compose.animation.core.FastOutLinearInEasing
import androidx.compose.animation.core.animateDecay
import androidx.compose.animation.core.animateTo
import androidx.compose.animation.rememberSplineBasedDecay
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.ScrollableState
import androidx.compose.foundation.gestures.draggable
import androidx.compose.foundation.gestures.rememberDraggableState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues

Sources: [live-androidx-material3-material3-material3-appbar-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1034–1068)

        tonalElevation = tonalElevation,
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        scrollBehavior = null,
    )

/**
 * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
 *
 * A bottom app bar displays navigation and key actions at the bottom of small screens.
 *
 * ![Bottom app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
 *
 * @sample androidx.compose.material3.samples.SimpleBottomAppBar
 *
 * It can optionally display a [FloatingActionButton] embedded at the end of the BottomAppBar.
 *
 * @sample androidx.compose.material3.samples.BottomAppBarWithFAB
 *
 * A bottom app bar that uses a [BottomAppBarScrollBehavior] to customize its nested scrolling
 * behavior when working in conjunction with scrolling content looks like:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBar
 *
 * Also see [NavigationBar].
 *
 * @param actions the icon content of this BottomAppBar. The default layout here is a [Row], so
 *   content inside will be placed horizontally.
 * @param modifier the [Modifier] to be applied to this BottomAppBar
 * @param floatingActionButton optional floating action button at the end of this BottomAppBar
 * @param containerColor the color used for the background of this BottomAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
 *   the matching content color for [containerColor], or to the current [LocalContentColor] if

Sources: [live-androidx-material3-material3-material3-appbar-lines-1034-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 106–140)

import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.Constraints
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.Velocity
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.isFinite
import androidx.compose.ui.unit.isSpecified
import androidx.compose.ui.util.fastFirst
import androidx.compose.ui.util.fastMaxOfOrNull
import androidx.compose.ui.util.fastSumBy
import kotlin.math.abs
import kotlin.math.absoluteValue
import kotlin.math.max
import kotlin.math.roundToInt

/**
 * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * This small TopAppBar has slots for a title, navigation icon, and actions.
 *
 * ![Small top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
 *
 * A simple top app bar looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleTopAppBar
 *
 * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
 * scrolled under it looks like:
 *
 * @sample androidx.compose.material3.samples.PinnedTopAppBar

Sources: [live-androidx-material3-material3-material3-appbar-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1069–1103)

 *   [containerColor] is not a color from the theme.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param contentPadding the padding applied to the content of this BottomAppBar
 * @param windowInsets a window insets that app bar will respect.
 * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
 *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
 *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
 *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
 *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
 */
@Composable
public fun BottomAppBar(
    actions: @Composable RowScope.() -> Unit,
    modifier: Modifier = Modifier,
    floatingActionButton: @Composable (() -> Unit)? = null,
    containerColor: Color = BottomAppBarDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
    contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
    scrollBehavior: BottomAppBarScrollBehavior? = null,
): Unit =
    BottomAppBar(
        modifier = modifier,
        containerColor = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        windowInsets = windowInsets,
        contentPadding = contentPadding,
        scrollBehavior = scrollBehavior,
    ) {
        Row(
            modifier = Modifier.weight(1f),

Sources: [live-androidx-material3-material3-material3-appbar-lines-1069-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1104–1138)

            horizontalArrangement = Arrangement.Start,
            verticalAlignment = Alignment.CenterVertically,
            content = actions,
        )
        if (floatingActionButton != null) {
            Box(
                Modifier.fillMaxHeight()
                    .padding(top = FABVerticalPadding, end = FABHorizontalPadding),
                contentAlignment = Alignment.TopStart,
            ) {
                floatingActionButton()
            }
        }
    }

/**
 * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
 *
 * A bottom app bar displays navigation and key actions at the bottom of small screens.
 *
 * ![Bottom app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
 *
 * If you are interested in displaying a [FloatingActionButton], consider using another overload.
 *
 * Also see [NavigationBar].
 *
 * @param modifier the [Modifier] to be applied to this BottomAppBar
 * @param containerColor the color used for the background of this BottomAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
 *   the matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a

Sources: [live-androidx-material3-material3-material3-appbar-lines-1104-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1139–1173)

 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param contentPadding the padding applied to the content of this BottomAppBar
 * @param windowInsets a window insets that app bar will respect.
 * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
 *   inside will be placed horizontally.
 */
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BottomAppBar(
    modifier: Modifier = Modifier,
    containerColor: Color = BottomAppBarDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
    contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
    content: @Composable RowScope.() -> Unit,
): Unit =
    BottomAppBar(
        modifier = modifier,
        containerColor = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        scrollBehavior = null,
        content = content,
    )

/**
 * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
 *
 * A bottom app bar displays navigation and key actions at the bottom of small screens.
 *
 * ![Bottom app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)

Sources: [live-androidx-material3-material3-material3-appbar-lines-1139-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1174–1208)

 *
 * If you are interested in displaying a [FloatingActionButton], consider using another overload.
 *
 * Also see [NavigationBar].
 *
 * @param modifier the [Modifier] to be applied to this BottomAppBar
 * @param containerColor the color used for the background of this BottomAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
 *   the matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param contentPadding the padding applied to the content of this BottomAppBar
 * @param windowInsets a window insets that app bar will respect.
 * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
 *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
 *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
 *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
 *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
 * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
 *   inside will be placed horizontally.
 */
@Composable
public fun BottomAppBar(
    modifier: Modifier = Modifier,
    containerColor: Color = BottomAppBarDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
    contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
    scrollBehavior: BottomAppBarScrollBehavior? = null,
    content: @Composable RowScope.() -> Unit,
) {

Sources: [live-androidx-material3-material3-material3-appbar-lines-1174-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1209–1243)

    BottomAppBarLayout(
        containerHeight = BottomAppBarTokens.ContainerHeight,
        horizontalArrangement = Arrangement.Start,
        modifier = modifier,
        containerColor = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        scrollBehavior = scrollBehavior,
        content = content,
    )
}

// TODO missing image of the flexible bottom app bar.
/**
 * [Material Design flexible bottom app
 * bar](https://m3.material.io/components/bottom-app-bar/overview)
 *
 * A flexible bottom app bar displays navigation and key actions at the bottom of small screens.
 *
 * This variation of the Bottom app bar has a [horizontalArrangement] parameter for controlling the
 * way the content is arranged. Also, it allows more flexibility in controlling the bar's expanded
 * height with an [expandedHeight] value.
 *
 * If you are interested in displaying a [FloatingActionButton], consider using another overload
 * that takes a [FloatingActionButton] parameter.
 *
 * Also see [NavigationBar].
 *
 * A flexible bottom app bar can be configured with a [horizontalArrangement], and can optionally
 * use a [BottomAppBarScrollBehavior] to collapse or expand on scroll:
 *
 * A bottom app bar with an actions row that automatically handles overflow when items do not fit:
 *

Sources: [live-androidx-material3-material3-material3-appbar-lines-1209-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1244–1278)

 * @sample androidx.compose.material3.samples.BottomAppBarWithOverflow
 *
 * A bottom app bar collapsing on scroll, with items spaced around:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedAround
 *
 * A bottom app bar collapsing on scroll, with items spaced between:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedBetween
 *
 * A bottom app bar collapsing on scroll, with items spaced evenly:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarSpacedEvenly
 *
 * A bottom app bar collapsing on scroll, with items in a fixed arrangement:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarFixed
 *
 * A bottom app bar collapsing on scroll, with items in a fixed arrangement and a custom color:
 *
 * @sample androidx.compose.material3.samples.ExitAlwaysBottomAppBarFixedVibrant
 * @param modifier the [Modifier] to be applied to this BottomAppBar
 * @param containerColor the color used for the background of this BottomAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
 *   the matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param contentPadding the padding applied to the content of this BottomAppBar
 * @param horizontalArrangement the horizontal arrangement of the content inside this BottomAppBar
 * @param expandedHeight the maximum height this bottom bar can reach when fully expanded. If a
 *   [scrollBehavior] is provided, the bar might collapse or expand based on scrolling. In that
 *   case, this value sets the upper limit for the bar's height during expansion. This [Dp] value
 *   must be specified, finite, and greater than zero; otherwise,
 *   [BottomAppBarDefaults.FlexibleBottomAppBarHeight] will be used as a default. In case the
 *   [scrollBehavior] is `null`, this value will simply be the fixed height of the bottom bar.

Sources: [live-androidx-material3-material3-material3-appbar-lines-1244-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1279–1313)

 * @param windowInsets a window insets that app bar will respect.
 * @param scrollBehavior a [BottomAppBarScrollBehavior] which holds various offset values that will
 *   be applied by this bottom app bar to set up its height. A scroll behavior is designed to work
 *   in conjunction with a scrolled content to change the bottom app bar appearance as the content
 *   scrolls. Note that the bottom app bar will not react to scrolling in case a touch exploration
 *   service (e.g., TalkBack) is active. See [BottomAppBarScrollBehavior.nestedScrollConnection].
 * @param content the content of this BottomAppBar. The default layout here is a [Row], so content
 *   inside will be placed horizontally.
 *
 * @material3expressive
 */
@Composable
public fun FlexibleBottomAppBar(
    modifier: Modifier = Modifier,
    containerColor: Color = BottomAppBarDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    contentPadding: PaddingValues = BottomAppBarDefaults.FlexibleContentPadding,
    horizontalArrangement: Arrangement.Horizontal =
        BottomAppBarDefaults.FlexibleHorizontalArrangement,
    expandedHeight: Dp = BottomAppBarDefaults.FlexibleBottomAppBarHeight,
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
    scrollBehavior: BottomAppBarScrollBehavior? = null,
    content: @Composable RowScope.() -> Unit,
) {
    BottomAppBarLayout(
        containerHeight =
            if (expandedHeight.isFinite && expandedHeight.isSpecified && expandedHeight > 0.dp) {
                expandedHeight
            } else {
                BottomAppBarDefaults.FlexibleBottomAppBarHeight
            },
        horizontalArrangement = horizontalArrangement,
        modifier = modifier,
        containerColor = containerColor,
        contentColor = contentColor,

Sources: [live-androidx-material3-material3-material3-appbar-lines-1279-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1314–1348)

        tonalElevation = AppBarTokens.ContainerElevation,
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        scrollBehavior = scrollBehavior,
        content = content,
    )
}

@Composable
private fun BottomAppBarLayout(
    containerHeight: Dp,
    horizontalArrangement: Arrangement.Horizontal,
    modifier: Modifier = Modifier,
    containerColor: Color,
    contentColor: Color,
    tonalElevation: Dp,
    contentPadding: PaddingValues,
    windowInsets: WindowInsets,
    scrollBehavior: BottomAppBarScrollBehavior?,
    content: @Composable RowScope.() -> Unit,
) {
    val touchExplorationServiceEnabled by rememberTouchExplorationService()
    val activeScrollBehavior = if (!touchExplorationServiceEnabled) scrollBehavior else null
    // Set up support for resizing the bottom app bar when vertically dragging the bar itself.
    val appBarDragModifier =
        if (activeScrollBehavior != null && !activeScrollBehavior.isPinned) {
            Modifier.draggable(
                orientation = Orientation.Vertical,
                state =
                    rememberDraggableState { delta ->
                        activeScrollBehavior.state.heightOffset -= delta
                    },
                onDragStopped = { velocity ->
                    settleAppBarBottom(
                        activeScrollBehavior.state,

Sources: [live-androidx-material3-material3-material3-appbar-lines-1314-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1349–1383)

                        velocity,
                        activeScrollBehavior.flingAnimationSpec,
                        activeScrollBehavior.snapAnimationSpec,
                    )
                },
            )
        } else {
            Modifier
        }

    // Compose a Surface with a Row content.
    // The height of the app bar is determined by subtracting the bar's height offset from the
    // app bar's defined constant height value (i.e. the ContainerHeight token).
    Surface(
        color = containerColor,
        contentColor = contentColor,
        tonalElevation = tonalElevation,
        // TODO(b/209583788): Consider adding a shape parameter if updated design guidance allows
        shape = BottomAppBarTokens.ContainerShape.value,
        modifier =
            modifier
                .layout { measurable, constraints ->
                    val placeable = measurable.measure(constraints)

                    // Sets the app bar's height offset to collapse the entire bar's height when
                    // content is scrolled.
                    activeScrollBehavior?.state?.heightOffsetLimit = -placeable.height.toFloat()

                    val height =
                        (placeable.height + (activeScrollBehavior?.state?.heightOffset ?: 0f))
                            .coerceAtLeast(0f)
                    layout(placeable.width, height.roundToInt()) { placeable.place(0, 0) }
                }
                .then(appBarDragModifier),
    ) {

Sources: [live-androidx-material3-material3-material3-appbar-lines-1349-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1384–1418)

        Row(
            Modifier.fillMaxWidth()
                .windowInsetsPadding(windowInsets)
                .height(containerHeight)
                .padding(contentPadding),
            horizontalArrangement = horizontalArrangement,
            verticalAlignment = Alignment.CenterVertically,
            content = content,
        )
    }
}

/**
 * A TopAppBarScrollBehavior defines how an app bar should behave when the content under it is
 * scrolled.
 *
 * @see [TopAppBarDefaults.pinnedScrollBehavior]
 * @see [TopAppBarDefaults.enterAlwaysScrollBehavior]
 * @see [TopAppBarDefaults.exitUntilCollapsedScrollBehavior]
 */
@Stable
public interface TopAppBarScrollBehavior {

    /**
     * A [TopAppBarState] that is attached to this behavior and is read and updated when scrolling
     * happens.
     */
    public val state: TopAppBarState

    /**
     * Indicates whether the top app bar is pinned.
     *
     * A pinned app bar will stay fixed in place when content is scrolled and will not react to any
     * drag gestures.
     */

Sources: [live-androidx-material3-material3-material3-appbar-lines-1384-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 141–175)

 *
 * A top app bar that uses an [EnterAlwaysScrollBehavior] to collapse and expand as content is
 * scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBar
 * @param title the title to be displayed in the top app bar
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
 *   to collapse or expand, this value will represent the maximum height that the bar will be
 *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
 *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 */
@Deprecated(
    message = "Deprecated in favor of TopAppBar with contentPadding parameter",
    level = DeprecationLevel.HIDDEN,
)
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun TopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,

Sources: [live-androidx-material3-material3-material3-appbar-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1419–1453)

    public val isPinned: Boolean

    /**
     * An optional [AnimationSpec] that defines how the top app bar snaps to either fully collapsed
     * or fully extended state when a fling or a drag scrolled it into an intermediate position. If
     * `null` is provided, the app bar will not snap and will remain in its current state.
     */
    public val snapAnimationSpec: AnimationSpec<Float>?

    /**
     * An optional [DecayAnimationSpec] that defines how to fling the top app bar when the user
     * flings the app bar itself, or the scrollable content. If `null` is provided, the app bar will
     * not continue to animate its height based on the scroll velocity.
     */
    public val flingAnimationSpec: DecayAnimationSpec<Float>?

    /**
     * A [NestedScrollConnection] that should be attached to a
     * [androidx.compose.ui.input.nestedscroll.nestedScroll] in order to keep track of the scroll
     * events.
     */
    public val nestedScrollConnection: NestedScrollConnection
}

/** Contains default values used for the top app bar implementations. */
public object TopAppBarDefaults {

    /**
     * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
     * between the provided colors according to the Material Design specification.
     */
    @Composable
    public fun topAppBarColors(): TopAppBarColors = MaterialTheme.colorScheme.defaultTopAppBarColors

    /**

Sources: [live-androidx-material3-material3-material3-appbar-lines-1419-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1454–1488)

     * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
     * between the provided colors according to the Material Design specification.
     *
     * @param containerColor the container color
     * @param scrolledContainerColor the container color when content is scrolled behind it
     * @param navigationIconContentColor the content color used for the navigation icon
     * @param titleContentColor the content color used for the title
     * @param actionIconContentColor the content color used for actions
     * @param subtitleContentColor the content color used for the subtitle
     * @return the resulting [TopAppBarColors] used for the top app bar
     */
    @Composable
    public fun topAppBarColors(
        containerColor: Color = Color.Unspecified,
        scrolledContainerColor: Color = Color.Unspecified,
        navigationIconContentColor: Color = Color.Unspecified,
        titleContentColor: Color = Color.Unspecified,
        actionIconContentColor: Color = Color.Unspecified,
        subtitleContentColor: Color = Color.Unspecified,
    ): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
            containerColor,
            scrolledContainerColor,
            navigationIconContentColor,
            titleContentColor,
            actionIconContentColor,
            subtitleContentColor,
        )

    /**
     * Creates a [TopAppBarColors] for small [TopAppBar]. The default implementation animates
     * between the provided colors according to the Material Design specification.
     *
     * @param containerColor the container color
     * @param scrolledContainerColor the container color when content is scrolled behind it

Sources: [live-androidx-material3-material3-material3-appbar-lines-1454-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1489–1523)

     * @param navigationIconContentColor the content color used for the navigation icon
     * @param titleContentColor the content color used for the title
     * @param actionIconContentColor the content color used for actions
     * @return the resulting [TopAppBarColors] used for the top app bar
     */
    @Deprecated(
        "Maintained for binary compatibility in favor of topAppBarColors with subtitleContentColor",
        level = DeprecationLevel.HIDDEN,
    )
    @Composable
    public fun topAppBarColors(
        containerColor: Color = Color.Unspecified,
        scrolledContainerColor: Color = Color.Unspecified,
        navigationIconContentColor: Color = Color.Unspecified,
        titleContentColor: Color = Color.Unspecified,
        actionIconContentColor: Color = Color.Unspecified,
    ): TopAppBarColors =
        topAppBarColors(
            containerColor = containerColor,
            scrolledContainerColor = scrolledContainerColor,
            navigationIconContentColor = navigationIconContentColor,
            titleContentColor = titleContentColor,
            actionIconContentColor = actionIconContentColor,
            subtitleContentColor = titleContentColor,
        )

    internal val ColorScheme.defaultTopAppBarColors: TopAppBarColors
        get() {
            return defaultTopAppBarColorsCached
                ?: TopAppBarColors(
                        containerColor = fromToken(AppBarTokens.ContainerColor),
                        scrolledContainerColor = fromToken(AppBarTokens.OnScrollContainerColor),
                        navigationIconContentColor = fromToken(AppBarTokens.LeadingIconColor),
                        titleContentColor = fromToken(AppBarTokens.TitleColor),
                        actionIconContentColor = fromToken(AppBarTokens.TrailingIconColor),

Sources: [live-androidx-material3-material3-material3-appbar-lines-1489-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1524–1558)

                        subtitleContentColor = fromToken(AppBarTokens.SubtitleColor),
                    )
                    .also { defaultTopAppBarColorsCached = it }
        }

    /** Default padding used for [TopAppBar] content */
    public val ContentPadding: PaddingValues = PaddingValues(all = 0.dp)

    /** Default insets to be used and consumed by the top app bars */
    public val windowInsets: WindowInsets
        @Composable
        get() =
            WindowInsets.systemBarsForVisualComponents.only(
                WindowInsetsSides.Horizontal + WindowInsetsSides.Top
            )

    /**
     * Default [AnimationSpec] that defines how the top app bar snaps to either fully collapsed or
     * fully extended state when a fling or a drag scrolled it into an intermediate position.
     */
    public val snapAnimationSpec: AnimationSpec<Float>
        @Composable get() = MotionSchemeKeyTokens.DefaultEffects.value()

    /**
     * Default [DecayAnimationSpec] that defines how to fling the top app bar when the user flings
     * the app bar itself, or the scrollable content.
     */
    public val flingAnimationSpec: DecayAnimationSpec<Float>
        @Composable get() = rememberSplineBasedDecay()

    /**
     * Creates a [TopAppBarColors] for [CenterAlignedTopAppBar]s. The default implementation
     * animates between the provided colors according to the Material Design specification.
     */
    @Deprecated(

Sources: [live-androidx-material3-material3-material3-appbar-lines-1524-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1559–1593)

        "Use topAppBarColors instead",
        replaceWith = ReplaceWith("topAppBarColors()"),
        DeprecationLevel.WARNING,
    )
    @Composable
    public fun centerAlignedTopAppBarColors(): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors

    /**
     * Creates a [TopAppBarColors] for [CenterAlignedTopAppBar]s. The default implementation
     * animates between the provided colors according to the Material Design specification.
     *
     * @param containerColor the container color
     * @param scrolledContainerColor the container color when content is scrolled behind it
     * @param navigationIconContentColor the content color used for the navigation icon
     * @param titleContentColor the content color used for the title
     * @param actionIconContentColor the content color used for actions
     * @return the resulting [TopAppBarColors] used for the top app bar
     */
    @Deprecated(
        "Use topAppBarColors instead",
        replaceWith =
            ReplaceWith(
                "topAppBarColors(containerColor, scrolledContainerColor, " +
                    "navigationIconContentColor, titleContentColor, actionIconContentColor)"
            ),
        DeprecationLevel.WARNING,
    )
    @Composable
    public fun centerAlignedTopAppBarColors(
        containerColor: Color = Color.Unspecified,
        scrolledContainerColor: Color = Color.Unspecified,
        navigationIconContentColor: Color = Color.Unspecified,
        titleContentColor: Color = Color.Unspecified,
        actionIconContentColor: Color = Color.Unspecified,

Sources: [live-androidx-material3-material3-material3-appbar-lines-1559-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1594–1628)

    ): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
            containerColor,
            scrolledContainerColor,
            navigationIconContentColor,
            titleContentColor,
            actionIconContentColor,
        )

    /**
     * Creates a [TopAppBarColors] for [MediumTopAppBar]s. The default implementation interpolates
     * between the provided colors as the top app bar scrolls according to the Material Design
     * specification.
     */
    @Deprecated(
        "Use topAppBarColors instead",
        replaceWith = ReplaceWith("topAppBarColors()"),
        DeprecationLevel.WARNING,
    )
    @Composable
    public fun mediumTopAppBarColors(): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors

    /**
     * Creates a [TopAppBarColors] for [MediumTopAppBar]s. The default implementation interpolates
     * between the provided colors as the top app bar scrolls according to the Material Design
     * specification.
     *
     * @param containerColor the container color
     * @param scrolledContainerColor the container color when content is scrolled behind it
     * @param navigationIconContentColor the content color used for the navigation icon
     * @param titleContentColor the content color used for the title
     * @param actionIconContentColor the content color used for actions
     * @return the resulting [TopAppBarColors] used for the top app bar
     */

Sources: [live-androidx-material3-material3-material3-appbar-lines-1594-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1629–1663)

    @Deprecated(
        "Use topAppBarColors instead",
        replaceWith =
            ReplaceWith(
                "topAppBarColors(containerColor, scrolledContainerColor, " +
                    "navigationIconContentColor, titleContentColor, actionIconContentColor)"
            ),
        DeprecationLevel.WARNING,
    )
    @Composable
    public fun mediumTopAppBarColors(
        containerColor: Color = Color.Unspecified,
        scrolledContainerColor: Color = Color.Unspecified,
        navigationIconContentColor: Color = Color.Unspecified,
        titleContentColor: Color = Color.Unspecified,
        actionIconContentColor: Color = Color.Unspecified,
    ): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
            containerColor,
            scrolledContainerColor,
            navigationIconContentColor,
            titleContentColor,
            actionIconContentColor,
        )

    /**
     * Creates a [TopAppBarColors] for [LargeTopAppBar]s. The default implementation interpolates
     * between the provided colors as the top app bar scrolls according to the Material Design
     * specification.
     */
    @Deprecated(
        "Use topAppBarColors instead",
        replaceWith = ReplaceWith("topAppBarColors()"),
        DeprecationLevel.WARNING,
    )

Sources: [live-androidx-material3-material3-material3-appbar-lines-1629-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1664–1698)

    @Composable
    public fun largeTopAppBarColors(): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors

    /**
     * Creates a [TopAppBarColors] for [LargeTopAppBar]s. The default implementation interpolates
     * between the provided colors as the top app bar scrolls according to the Material Design
     * specification.
     *
     * @param containerColor the container color
     * @param scrolledContainerColor the container color when content is scrolled behind it
     * @param navigationIconContentColor the content color used for the navigation icon
     * @param titleContentColor the content color used for the title
     * @param actionIconContentColor the content color used for actions
     * @return the resulting [TopAppBarColors] used for the top app bar
     */
    @Deprecated(
        "Use topAppBarColors instead",
        replaceWith =
            ReplaceWith(
                "topAppBarColors(containerColor, scrolledContainerColor, " +
                    "navigationIconContentColor, titleContentColor, actionIconContentColor)"
            ),
        DeprecationLevel.WARNING,
    )
    @Composable
    public fun largeTopAppBarColors(
        containerColor: Color = Color.Unspecified,
        scrolledContainerColor: Color = Color.Unspecified,
        navigationIconContentColor: Color = Color.Unspecified,
        titleContentColor: Color = Color.Unspecified,
        actionIconContentColor: Color = Color.Unspecified,
    ): TopAppBarColors =
        MaterialTheme.colorScheme.defaultTopAppBarColors.copy(
            containerColor,

Sources: [live-androidx-material3-material3-material3-appbar-lines-1664-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1699–1733)

            scrolledContainerColor,
            navigationIconContentColor,
            titleContentColor,
            actionIconContentColor,
        )

    /**
     * Returns a pinned [TopAppBarScrollBehavior] that tracks nested-scroll callbacks and updates
     * its [TopAppBarState.contentOffset] accordingly. Note: If your layout utilizes `reverseLayout`
     * or `reverseScrolling`, please use the overload that takes a [ScrollableState] parameter.
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   pinned [TopAppBarScrollBehavior]
     */
    @Composable
    public fun pinnedScrollBehavior(
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
    ): TopAppBarScrollBehavior =
        remember(state, canScroll) { PinnedScrollBehavior(state = state, canScroll = canScroll) }

    /**
     * Returns a pinned [TopAppBarScrollBehavior] that tracks nested-scroll callbacks and updates
     * its [TopAppBarState.contentOffset] accordingly.
     *
     * This overload is intended for use cases where the scroll state is represented by a
     * [ScrollableState] (e.g. `LazyVerticalGrid`). It automatically determines if the content is at
     * the start by observing the scroll position of the provided [ScrollableState].
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *

Sources: [live-androidx-material3-material3-material3-appbar-lines-1699-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1734–1768)

     * A sample for a pinned small [TopAppBar] that is scrolled with a reversed [LazyVerticalGrid]:
     *
     * @sample androidx.compose.material3.samples.PinnedTopAppBarWithReversedLazyGrid
     *
     * A sample for a pinned small [TopAppBar] that is scrolled with a pre-scrolled [LazyColumn]:
     *
     * @sample androidx.compose.material3.samples.PinnedTopAppBarWithPreScrolledLazyColumn
     * @param scrollableState the [ScrollableState] of the scrollable container, used to determine
     *   if the content is at the start
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   pinned [TopAppBarScrollBehavior]
     */
    @Composable
    public fun pinnedScrollBehavior(
        scrollableState: ScrollableState,
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
    ): TopAppBarScrollBehavior {
        return remember(scrollableState, state, canScroll) {
            PinnedScrollBehavior(
                state = state,
                canScroll = canScroll,
                isScrollingContentAtStart = {
                    (scrollableState.scrollIndicatorState?.scrollOffset ?: 0) == 0
                },
            )
        }
    }

    /**
     * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
     * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
     * immediately appear when the content is pulled down. Note: If your layout utilizes

Sources: [live-androidx-material3-material3-material3-appbar-lines-1734-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 176–210)

    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    TopAppBar(
        title = title,
        modifier = modifier,
        navigationIcon = navigationIcon,
        actions = actions,
        expandedHeight = expandedHeight,
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
        contentPadding = TopAppBarDefaults.ContentPadding,
    )

/**
 * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * This small TopAppBar has slots for a title, navigation icon, and actions.
 *
 * ![Small top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
 *
 * A top app bar looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleTopAppBar
 *
 * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
 * scrolled under it looks like:
 *
 * @sample androidx.compose.material3.samples.PinnedTopAppBar
 *

Sources: [live-androidx-material3-material3-material3-appbar-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1769–1803)

     * `reverseLayout` or `reverseScrolling`, please use the overload that takes a [ScrollableState]
     * parameter.
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [TopAppBarScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
     *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
     *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
     *   in its current state.
     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
     *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
     *   provided, the app bar will not continue to animate its height based on the scroll velocity.
     */
    @Composable
    public fun enterAlwaysScrollBehavior(
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
        snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
    ): TopAppBarScrollBehavior =
        remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
            EnterAlwaysScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
            )
        }

    /**
     * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this

Sources: [live-androidx-material3-material3-material3-appbar-lines-1769-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1804–1838)

     * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
     * immediately appear when the content is pulled down.
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [EnterAlwaysScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
     *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
     *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
     *   in its current state.
     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
     *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
     *   provided, the app bar will not continue to animate its height based on the scroll velocity.
     * @param reverseLayout indicates that this behavior is applied to a scrollable content that has
     *   a reversed direction of scrolling and layout
     */
    @Deprecated(
        message =
            "Please use the enterAlwaysScrollBehavior() function that takes a scrollableState parameter.",
        replaceWith =
            ReplaceWith(
                "enterAlwaysScrollBehavior(scrollableState, state, canScroll, snapAnimationSpec, flingAnimationSpec)"
            ),
        level = DeprecationLevel.WARNING,
    )
    @Composable
    public fun enterAlwaysScrollBehavior(
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
        snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
        reverseLayout: Boolean = false,

Sources: [live-androidx-material3-material3-material3-appbar-lines-1804-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1839–1873)

    ): TopAppBarScrollBehavior =
        remember(state, canScroll, snapAnimationSpec, flingAnimationSpec, reverseLayout) {
            LegacyEnterAlwaysScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
                reverseLayout = reverseLayout,
            )
        }

    /**
     * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
     * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
     * immediately appear when the content is pulled down.
     *
     * This overload is intended for use cases that are not covered by the standard overloads, such
     * as when a custom `isScrollingContentAtStart` state needs to be determined for custom or
     * complex layouts (e.g. `LazyVerticalGrid` with `reverseLayout = true`).
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [TopAppBarScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
     *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
     *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
     *   in its current state.
     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
     *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
     *   provided, the app bar will not continue to animate its height based on the scroll velocity.
     * @param isScrollingContentAtStart A callback that returns true when the scrollable is at the
     *   origin of its content. Handles reversed layouts to ensure "start" always refers to the

Sources: [live-androidx-material3-material3-material3-appbar-lines-1839-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1874–1908)

     *   first logical item.
     */
    @Deprecated(
        message =
            "Please use the enterAlwaysScrollBehavior function that takes a ScrollableState parameter.",
        level = DeprecationLevel.WARNING,
    )
    @Composable
    public fun enterAlwaysScrollBehavior(
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
        snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
        isScrollingContentAtStart: () -> Boolean = { true },
    ): TopAppBarScrollBehavior =
        remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
            EnterAlwaysScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
                isScrollingContentAtStart = isScrollingContentAtStart,
            )
        }

    /**
     * Returns a [TopAppBarScrollBehavior]. A top app bar that is set up with this
     * [TopAppBarScrollBehavior] will immediately collapse when the content is pulled up, and will
     * immediately appear when the content is pulled down.
     *
     * This overload is intended for use cases with scrollable containers (such as [LazyColumn], a
     * [Column] with `verticalScroll`, or any other container that implements [ScrollableState])
     * when the content is pre-scrolled or uses `reverseLayout`/`reverseScrolling`, as it correctly
     * handles [TopAppBar] color transitions for these specific scroll states.
     *

Sources: [live-androidx-material3-material3-material3-appbar-lines-1874-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1909–1943)

     * An enter always top app bar with reverse scrolling looks like:
     *
     * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBarWithReverseScrolling
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * @param scrollableState the [ScrollableState] of the scrollable container, used to determine
     *   if the content is at the start
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [TopAppBarScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
     *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
     *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
     *   in its current state.
     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
     *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
     *   provided, the app bar will not continue to animate its height based on the scroll velocity.
     */
    @Composable
    public fun enterAlwaysScrollBehavior(
        scrollableState: ScrollableState,
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },
        snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
    ): TopAppBarScrollBehavior {
        return remember(scrollableState, state, canScroll, snapAnimationSpec, flingAnimationSpec) {
            EnterAlwaysScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
                isScrollingContentAtStart = {

Sources: [live-androidx-material3-material3-material3-appbar-lines-1909-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1944–1978)

                    (scrollableState.scrollIndicatorState?.scrollOffset ?: 0) == 0
                },
            )
        }
    }

    /**
     * Returns a [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and
     * height of the top app bar.
     *
     * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse
     * when the nested content is pulled up, and will expand back the collapsed area when the
     * content is pulled all the way down.
     *
     * The returned [TopAppBarScrollBehavior] is remembered across compositions.
     *
     * A sample for a [MediumTopAppBar] with [exitUntilCollapsedScrollBehavior]:
     *
     * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumTopAppBar
     * @param state the state object to be used to control or observe the top app bar's scroll
     *   state. See [rememberTopAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [ExitUntilCollapsedScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps
     *   to either fully collapsed or fully extended state when a fling or a drag scrolled it into
     *   an intermediate position. If `null` is provided, the app bar will not snap and will remain
     *   in its current state.
     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top
     *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
     *   provided, the app bar will not continue to animate its height based on the scroll velocity.
     */
    @Composable
    public fun exitUntilCollapsedScrollBehavior(
        state: TopAppBarState = rememberTopAppBarState(),
        canScroll: () -> Boolean = { true },

Sources: [live-androidx-material3-material3-material3-appbar-lines-1944-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 1979–2013)

        snapAnimationSpec: AnimationSpec<Float>? = TopAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = TopAppBarDefaults.flingAnimationSpec,
    ): TopAppBarScrollBehavior =
        remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
            ExitUntilCollapsedScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
            )
        }

    /** The default expanded height of a [TopAppBar] and the [CenterAlignedTopAppBar]. */
    public val TopAppBarExpandedHeight: Dp = AppBarSmallTokens.ContainerHeight

    /** The default height of a [MediumTopAppBar] when collapsed by a [TopAppBarScrollBehavior]. */
    public val MediumAppBarCollapsedHeight: Dp = AppBarSmallTokens.ContainerHeight

    /** The default expanded height of a [MediumTopAppBar]. */
    public val MediumAppBarExpandedHeight: Dp = AppBarMediumTokens.ContainerHeight

    /** The default expanded height of a [MediumFlexibleTopAppBar] without subtitle. */
    public val MediumFlexibleAppBarWithoutSubtitleExpandedHeight: Dp =
        AppBarMediumFlexibleTokens.ContainerHeight

    /** The default expanded height of a [MediumFlexibleTopAppBar] with subtitle. */
    public val MediumFlexibleAppBarWithSubtitleExpandedHeight: Dp =
        AppBarMediumFlexibleTokens.LargeContainerHeight

    /** The default height of a [LargeTopAppBar] when collapsed by a [TopAppBarScrollBehavior]. */
    public val LargeAppBarCollapsedHeight: Dp = AppBarSmallTokens.ContainerHeight

    /** The default expanded height of a [LargeTopAppBar]. */
    public val LargeAppBarExpandedHeight: Dp = AppBarLargeTokens.ContainerHeight


Sources: [live-androidx-material3-material3-material3-appbar-lines-1979-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2014–2048)

    /** The default expanded height of a [LargeFlexibleTopAppBar] without subtitle. */
    public val LargeFlexibleAppBarWithoutSubtitleExpandedHeight: Dp =
        AppBarLargeFlexibleTokens.ContainerHeight

    /** The default expanded height of a [LargeFlexibleTopAppBar] with subtitle. */
    public val LargeFlexibleAppBarWithSubtitleExpandedHeight: Dp =
        AppBarLargeFlexibleTokens.LargeContainerHeight
}

/**
 * Creates a [TopAppBarState] that is remembered across compositions.
 *
 * @param initialHeightOffsetLimit the initial value for [TopAppBarState.heightOffsetLimit], which
 *   represents the pixel limit that a top app bar is allowed to collapse when the scrollable
 *   content is scrolled
 * @param initialHeightOffset the initial value for [TopAppBarState.heightOffset]. The initial
 *   offset height offset should be between zero and [initialHeightOffsetLimit].
 * @param initialContentOffset the initial value for [TopAppBarState.contentOffset]
 */
@Composable
public fun rememberTopAppBarState(
    initialHeightOffsetLimit: Float = -Float.MAX_VALUE,
    initialHeightOffset: Float = 0f,
    initialContentOffset: Float = 0f,
): TopAppBarState {
    return rememberSaveable(saver = TopAppBarState.Saver) {
        TopAppBarState(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)
    }
}

/**
 * A state object that can be hoisted to control and observe the top app bar state. The state is
 * read and updated by a [TopAppBarScrollBehavior] implementation.
 *
 * In most cases, this state will be created via [rememberTopAppBarState].

Sources: [live-androidx-material3-material3-material3-appbar-lines-2014-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2049–2083)

 *
 * @param initialHeightOffsetLimit the initial value for [TopAppBarState.heightOffsetLimit]
 * @param initialHeightOffset the initial value for [TopAppBarState.heightOffset]
 * @param initialContentOffset the initial value for [TopAppBarState.contentOffset]
 */
@Stable
public class TopAppBarState(
    initialHeightOffsetLimit: Float,
    initialHeightOffset: Float,
    initialContentOffset: Float,
) {

    /**
     * The top app bar's height offset limit in pixels, which represents the limit that a top app
     * bar is allowed to collapse to.
     *
     * Use this limit to coerce the [heightOffset] value when it's updated.
     */
    public var heightOffsetLimit: Float = initialHeightOffsetLimit

    /**
     * The top app bar's current height offset in pixels. This height offset is applied to the fixed
     * height of the app bar to control the displayed height when content is being scrolled.
     *
     * Updates to the [heightOffset] value are coerced between zero and [heightOffsetLimit].
     */
    public var heightOffset: Float
        get() = _heightOffset.floatValue
        set(newOffset) {
            _heightOffset.floatValue =
                newOffset.coerceIn(minimumValue = heightOffsetLimit, maximumValue = 0f)
        }

    /**
     * The total offset of the content scrolled under the top app bar.

Sources: [live-androidx-material3-material3-material3-appbar-lines-2049-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2084–2118)

     *
     * The content offset is used to compute the [overlappedFraction], which can later be read by an
     * implementation.
     *
     * This value is updated by a [TopAppBarScrollBehavior] whenever a nested scroll connection
     * consumes scroll events. A common implementation would update the value to be the sum of all
     * [NestedScrollConnection.onPostScroll] `consumed.y` values.
     */
    public var contentOffset: Float by mutableFloatStateOf(initialContentOffset)

    /**
     * Determines if the content is currently at the starting scroll position. This is used to
     * calculate the [overlappedFraction] for the app bar's visual state.
     */
    internal var isScrollingContentAtStart: () -> Boolean = { true }

    /**
     * A value that represents the collapsed height percentage of the app bar.
     *
     * A `0.0` represents a fully expanded bar, and `1.0` represents a fully collapsed bar (computed
     * as [heightOffset] / [heightOffsetLimit]).
     */
    public val collapsedFraction: Float
        get() =
            if (heightOffsetLimit != 0f) {
                heightOffset / heightOffsetLimit
            } else {
                0f
            }

    /**
     * A value that represents the percentage of the app bar area that is overlapping with the
     * content scrolled behind it.
     *
     * A `0.0` indicates that the app bar does not overlap any content, while `1.0` indicates that

Sources: [live-androidx-material3-material3-material3-appbar-lines-2084-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 211–243)

 * A top app bar that uses an [EnterAlwaysScrollBehavior] to collapse and expand as content is
 * scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.EnterAlwaysTopAppBar
 * @param title the title to be displayed in the top app bar
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
 *   to collapse or expand, this value will represent the maximum height that the bar will be
 *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
 *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @param contentPadding the padding applied to the content of this TopAppBar.
 */
@Composable
public fun TopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,

Sources: [live-androidx-material3-material3-material3-appbar-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2119–2153)

     * the entire visible app bar area overlaps the scrolled content.
     */
    public val overlappedFraction: Float
        get() =
            if (!isScrollingContentAtStart() && contentOffset == 0f) {
                1f
            } else if (heightOffsetLimit != 0f) {
                1 -
                    ((heightOffsetLimit + contentOffset.absoluteValue).coerceIn(
                        minimumValue = heightOffsetLimit,
                        maximumValue = 0f,
                    ) / heightOffsetLimit)
            } else {
                0f
            }

    public companion object {
        /** The default [Saver] implementation for [TopAppBarState]. */
        public val Saver: Saver<TopAppBarState, *> =
            listSaver(
                save = { listOf(it.heightOffsetLimit, it.heightOffset, it.contentOffset) },
                restore = {
                    TopAppBarState(
                        initialHeightOffsetLimit = it[0],
                        initialHeightOffset = it[1],
                        initialContentOffset = it[2],
                    )
                },
            )
    }

    private var _heightOffset = mutableFloatStateOf(initialHeightOffset)
}

/**

Sources: [live-androidx-material3-material3-material3-appbar-lines-2119-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2154–2188)

 * Represents the colors used by a top app bar in different states. This implementation animates the
 * container color according to the top app bar scroll state. It does not animate the leading,
 * headline, or trailing colors.
 *
 * @param containerColor the color used for the background of this TopAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param scrolledContainerColor the container color when content is scrolled behind it
 * @param navigationIconContentColor the content color used for the navigation icon
 * @param titleContentColor the content color used for the title
 * @param actionIconContentColor the content color used for actions
 * @param subtitleContentColor the content color used for a subtitle
 * @constructor create an instance with arbitrary colors, see [TopAppBarColors] for a factory method
 *   using the default material3 spec
 */
@Stable
public class TopAppBarColors(
    public val containerColor: Color,
    public val scrolledContainerColor: Color,
    public val navigationIconContentColor: Color,
    public val titleContentColor: Color,
    public val actionIconContentColor: Color,
    public val subtitleContentColor: Color,
) {
    @Deprecated(
        "Use the TopAppBarColors constructor with subtitleContentColor",
        replaceWith =
            ReplaceWith(
                "TopAppBarColors(containerColor, scrolledContainerColor," +
                    "navigationIconContentColor, titleContentColor, actionIconContentColor, " +
                    "subtitleContentColor)"
            ),
        DeprecationLevel.WARNING,
    )
    public constructor(
        containerColor: Color,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2154-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2189–2223)

        scrolledContainerColor: Color,
        navigationIconContentColor: Color,
        titleContentColor: Color,
        actionIconContentColor: Color,
    ) : this(
        containerColor = containerColor,
        scrolledContainerColor = scrolledContainerColor,
        navigationIconContentColor = navigationIconContentColor,
        titleContentColor = titleContentColor,
        actionIconContentColor = actionIconContentColor,
        subtitleContentColor = titleContentColor,
    )

    /**
     * Returns a copy of this TopAppBarColors, optionally overriding some of the values. This uses
     * the Color.Unspecified to mean “use the value from the source”
     */
    public fun copy(
        containerColor: Color = this.containerColor,
        scrolledContainerColor: Color = this.scrolledContainerColor,
        navigationIconContentColor: Color = this.navigationIconContentColor,
        titleContentColor: Color = this.titleContentColor,
        actionIconContentColor: Color = this.actionIconContentColor,
        subtitleContentColor: Color = this.subtitleContentColor,
    ): TopAppBarColors =
        TopAppBarColors(
            containerColor.takeOrElse { this.containerColor },
            scrolledContainerColor.takeOrElse { this.scrolledContainerColor },
            navigationIconContentColor.takeOrElse { this.navigationIconContentColor },
            titleContentColor.takeOrElse { this.titleContentColor },
            actionIconContentColor.takeOrElse { this.actionIconContentColor },
            subtitleContentColor.takeOrElse { this.subtitleContentColor },
        )

    /**

Sources: [live-androidx-material3-material3-material3-appbar-lines-2189-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2224–2258)

     * Represents the container color used for the top app bar.
     *
     * A [colorTransitionFraction] provides a percentage value that can be used to generate a color.
     * Usually, an app bar implementation will pass in a [colorTransitionFraction] read from the
     * [TopAppBarState.collapsedFraction] or the [TopAppBarState.overlappedFraction].
     *
     * @param colorTransitionFraction a `0.0` to `1.0` value that represents a color transition
     *   percentage
     */
    @Stable
    internal fun containerColor(colorTransitionFraction: Float): Color {
        return lerp(
            containerColor,
            scrolledContainerColor,
            FastOutLinearInEasing.transform(colorTransitionFraction),
        )
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || other !is TopAppBarColors) return false

        if (containerColor != other.containerColor) return false
        if (scrolledContainerColor != other.scrolledContainerColor) return false
        if (navigationIconContentColor != other.navigationIconContentColor) return false
        if (titleContentColor != other.titleContentColor) return false
        if (actionIconContentColor != other.actionIconContentColor) return false
        if (subtitleContentColor != other.subtitleContentColor) return false

        return true
    }

    override fun hashCode(): Int {
        var result = containerColor.hashCode()
        result = 31 * result + scrolledContainerColor.hashCode()

Sources: [live-androidx-material3-material3-material3-appbar-lines-2224-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2259–2293)

        result = 31 * result + navigationIconContentColor.hashCode()
        result = 31 * result + titleContentColor.hashCode()
        result = 31 * result + actionIconContentColor.hashCode()
        result = 31 * result + subtitleContentColor.hashCode()

        return result
    }
}

/**
 * A BottomAppBarScrollBehavior defines how a bottom app bar should behave when the content under it
 * is scrolled.
 *
 * @see [BottomAppBarDefaults.exitAlwaysScrollBehavior]
 */
@Stable
public interface BottomAppBarScrollBehavior {

    /**
     * A [BottomAppBarState] that is attached to this behavior and is read and updated when
     * scrolling happens.
     */
    public val state: BottomAppBarState

    /**
     * Indicates whether the bottom app bar is pinned.
     *
     * A pinned app bar will stay fixed in place when content is scrolled and will not react to any
     * drag gestures.
     */
    public val isPinned: Boolean

    /**
     * An optional [AnimationSpec] that defines how the bottom app bar snaps to either fully
     * collapsed or fully extended state when a fling or a drag scrolled it into an intermediate

Sources: [live-androidx-material3-material3-material3-appbar-lines-2259-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2294–2328)

     * position.
     */
    public val snapAnimationSpec: AnimationSpec<Float>?

    /**
     * An optional [DecayAnimationSpec] that defines how to fling the bottom app bar when the user
     * flings the app bar itself, or the scrollable content.
     */
    public val flingAnimationSpec: DecayAnimationSpec<Float>?

    /**
     * A [NestedScrollConnection] that should be attached to a
     * [androidx.compose.ui.input.nestedscroll.nestedScroll] in order to keep track of the scroll
     * events.
     */
    public val nestedScrollConnection: NestedScrollConnection
}

/** Contains default values used for the bottom app bar implementations. */
public object BottomAppBarDefaults {

    /** Default color used for [BottomAppBar] container */
    public val containerColor: Color
        @Composable get() = BottomAppBarTokens.ContainerColor.value

    /** Default elevation used for [BottomAppBar] */
    public val ContainerElevation: Dp = 0.dp

    /**
     * Default padding used for [BottomAppBar] when content are default size (24dp) icons in
     * [IconButton] that meet the minimum touch target (48.dp).
     */
    public val ContentPadding: PaddingValues =
        PaddingValues(
            start = BottomAppBarHorizontalPadding,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2294-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2329–2363)

            top = BottomAppBarVerticalPadding,
            end = BottomAppBarHorizontalPadding,
        )

    /** Default insets that will be used and consumed by [BottomAppBar]. */
    public val windowInsets: WindowInsets
        @Composable
        get() {
            return WindowInsets.systemBarsForVisualComponents.only(
                WindowInsetsSides.Horizontal + WindowInsetsSides.Bottom
            )
        }

    /** The color of a [BottomAppBar]'s [FloatingActionButton] */
    public val bottomAppBarFabColor: Color
        @Composable get() = FabSecondaryContainerTokens.ContainerColor.value

    /** Default padding used for [FlexibleBottomAppBar]. */
    public val FlexibleContentPadding: PaddingValues =
        PaddingValues(
            start = DockedToolbarTokens.ContainerLeadingSpace,
            end = DockedToolbarTokens.ContainerTrailingSpace,
        )

    /**
     * Default height of a flexible [FlexibleBottomAppBar]. The height here represents the height of
     * the bottom app bar in its expanded state.
     */
    public val FlexibleBottomAppBarHeight: Dp = DockedToolbarTokens.ContainerHeight

    /** A default [Arrangement] that will be used to space a [FlexibleBottomAppBar]'s content. */
    public val FlexibleHorizontalArrangement: Arrangement.Horizontal = Arrangement.SpaceBetween

    /**
     * An [Arrangement] that will be used to space [FlexibleBottomAppBar]'s with a fixed spacing.

Sources: [live-androidx-material3-material3-material3-appbar-lines-2329-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2364–2398)

     */
    public val FlexibleFixedHorizontalArrangement: Arrangement.Horizontal =
        Arrangement.spacedBy(DockedToolbarTokens.ContainerMaxSpacing, Alignment.CenterHorizontally)

    /**
     * Default [AnimationSpec] that defines how the bottom app bar snaps to either fully collapsed
     * or fully extended state when a fling or a drag scrolled it into an intermediate position.
     */
    public val snapAnimationSpec: AnimationSpec<Float>
        @Composable get() = MotionSchemeKeyTokens.FastSpatial.value()

    /**
     * Default [DecayAnimationSpec] that defines how to fling the bottom app bar when the user
     * flings the app bar itself, or the scrollable content.
     */
    public val flingAnimationSpec: DecayAnimationSpec<Float>
        @Composable get() = rememberSplineBasedDecay()

    /**
     * Returns a [BottomAppBarScrollBehavior]. A bottom app bar that is set up with this
     * [BottomAppBarScrollBehavior] will immediately collapse when the content is pulled up, and
     * will immediately appear when the content is pulled down. Note: Scroll behavior is
     * automatically disabled when a touch exploration service (e.g. TalkBack) is active to preserve
     * accessibility.
     *
     * The returned [BottomAppBarScrollBehavior] is remembered across compositions.
     *
     * @param state the state object to be used to control or observe the bottom app bar's scroll
     *   state. See [rememberBottomAppBarState] for a state that is remembered across compositions.
     * @param canScroll a callback used to determine whether scroll events are to be handled by this
     *   [ExitAlwaysScrollBehavior]
     * @param snapAnimationSpec an optional [AnimationSpec] that defines how the bottom app bar
     *   snaps to either fully collapsed or fully extended state when a fling or a drag scrolled it
     *   into an intermediate position. If `null` is provided, the app bar will not snap and will
     *   remain in its current state.

Sources: [live-androidx-material3-material3-material3-appbar-lines-2364-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2399–2433)

     * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the
     *   bottom app bar when the user flings the app bar itself, or the scrollable content. If
     *   `null` is provided, the app bar will not continue to animate its height based on the scroll
     *   velocity.
     */
    @Composable
    public fun exitAlwaysScrollBehavior(
        state: BottomAppBarState = rememberBottomAppBarState(),
        canScroll: () -> Boolean = { true },
        snapAnimationSpec: AnimationSpec<Float>? = BottomAppBarDefaults.snapAnimationSpec,
        flingAnimationSpec: DecayAnimationSpec<Float>? = BottomAppBarDefaults.flingAnimationSpec,
    ): BottomAppBarScrollBehavior =
        remember(state, canScroll, snapAnimationSpec, flingAnimationSpec) {
            ExitAlwaysScrollBehavior(
                state = state,
                snapAnimationSpec = snapAnimationSpec,
                flingAnimationSpec = flingAnimationSpec,
                canScroll = canScroll,
            )
        }
}

/**
 * Creates a [BottomAppBarState] that is remembered across compositions.
 *
 * @param initialHeightOffsetLimit the initial value for [BottomAppBarState.heightOffsetLimit],
 *   which represents the pixel limit that a bottom app bar is allowed to collapse when the
 *   scrollable content is scrolled
 * @param initialHeightOffset the initial value for [BottomAppBarState.heightOffset]. The initial
 *   offset height offset should be between zero and [initialHeightOffsetLimit].
 * @param initialContentOffset the initial value for [BottomAppBarState.contentOffset]
 */
@Composable
public fun rememberBottomAppBarState(
    initialHeightOffsetLimit: Float = -Float.MAX_VALUE,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2399-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2434–2468)

    initialHeightOffset: Float = 0f,
    initialContentOffset: Float = 0f,
): BottomAppBarState {
    return rememberSaveable(saver = BottomAppBarState.Saver) {
        BottomAppBarState(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)
    }
}

/**
 * A state object that can be hoisted to control and observe the bottom app bar state. The state is
 * read and updated by a [BottomAppBarScrollBehavior] implementation.
 *
 * In most cases, this state will be created via [rememberBottomAppBarState].
 */
@Stable
public interface BottomAppBarState {

    /**
     * The bottom app bar's height offset limit in pixels, which represents the limit that a bottom
     * app bar is allowed to collapse to.
     *
     * Use this limit to coerce the [heightOffset] value when it's updated.
     */
    public var heightOffsetLimit: Float

    /**
     * The bottom app bar's current height offset in pixels. This height offset is applied to the
     * fixed height of the app bar to control the displayed height when content is being scrolled.
     *
     * Updates to the [heightOffset] value are coerced between zero and [heightOffsetLimit].
     */
    public var heightOffset: Float

    /**
     * The total offset of the content scrolled under the bottom app bar.

Sources: [live-androidx-material3-material3-material3-appbar-lines-2434-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 244–278)

    contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
): Unit =
    SingleRowTopAppBar(
        modifier = modifier,
        title = title,
        titleTextStyle = AppBarSmallTokens.TitleFont.value,
        subtitle = null,
        subtitleTextStyle = TextStyle.Default,
        titleHorizontalAlignment = Alignment.Start,
        navigationIcon = navigationIcon,
        actions = actions,
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                TopAppBarDefaults.TopAppBarExpandedHeight
            } else {
                expandedHeight
            },
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design center-aligned small top app
 * bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * This small top app bar has a header title that is horizontally aligned to the center.
 *
 * ![Center-aligned top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/center-aligned-top-app-bar.png)
 *
 * This CenterAlignedTopAppBar has slots for a title, navigation icon, and actions.

Sources: [live-androidx-material3-material3-material3-appbar-lines-244-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2469–2503)

     *
     * This value is updated by a [BottomAppBarScrollBehavior] whenever a nested scroll connection
     * consumes scroll events. A common implementation would update the value to be the sum of all
     * [NestedScrollConnection.onPostScroll] `consumed.y` values.
     */
    public var contentOffset: Float

    /**
     * A value that represents the collapsed height percentage of the app bar.
     *
     * A `0.0` represents a fully expanded bar, and `1.0` represents a fully collapsed bar (computed
     * as [heightOffset] / [heightOffsetLimit]).
     */
    public val collapsedFraction: Float

    public companion object {
        /** The default [Saver] implementation for [BottomAppBarState]. */
        public val Saver: Saver<BottomAppBarState, *> =
            listSaver(
                save = { listOf(it.heightOffsetLimit, it.heightOffset, it.contentOffset) },
                restore = {
                    BottomAppBarState(
                        initialHeightOffsetLimit = it[0],
                        initialHeightOffset = it[1],
                        initialContentOffset = it[2],
                    )
                },
            )
    }
}

/**
 * Creates a [BottomAppBarState].
 *
 * @param initialHeightOffsetLimit the initial value for [BottomAppBarState.heightOffsetLimit],

Sources: [live-androidx-material3-material3-material3-appbar-lines-2469-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2504–2538)

 *   which represents the pixel limit that a bottom app bar is allowed to collapse when the
 *   scrollable content is scrolled
 * @param initialHeightOffset the initial value for [BottomAppBarState.heightOffset]. The initial
 *   offset height offset should be between zero and [initialHeightOffsetLimit].
 * @param initialContentOffset the initial value for [BottomAppBarState.contentOffset]
 */
public fun BottomAppBarState(
    initialHeightOffsetLimit: Float = -Float.MAX_VALUE,
    initialHeightOffset: Float = 0f,
    initialContentOffset: Float = 0f,
): BottomAppBarState =
    BottomAppBarStateImpl(initialHeightOffsetLimit, initialHeightOffset, initialContentOffset)

@Stable
private class BottomAppBarStateImpl(
    initialHeightOffsetLimit: Float,
    initialHeightOffset: Float,
    initialContentOffset: Float,
) : BottomAppBarState {

    override var heightOffsetLimit by mutableFloatStateOf(initialHeightOffsetLimit)

    override var heightOffset: Float
        get() = _heightOffset.floatValue
        set(newOffset) {
            _heightOffset.floatValue =
                newOffset.coerceIn(minimumValue = heightOffsetLimit, maximumValue = 0f)
        }

    override var contentOffset by mutableFloatStateOf(initialContentOffset)

    override val collapsedFraction: Float
        get() =
            if (heightOffsetLimit != 0f) {
                heightOffset / heightOffsetLimit

Sources: [live-androidx-material3-material3-material3-appbar-lines-2504-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2539–2573)

            } else {
                0f
            }

    private var _heightOffset = mutableFloatStateOf(initialHeightOffset)
}

/**
 * A [BottomAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a
 * bottom app bar.
 *
 * A bottom app bar that is set up with this [BottomAppBarScrollBehavior] will immediately collapse
 * when the nested content is pulled up, and will immediately appear when the content is pulled
 * down.
 *
 * @param state a [BottomAppBarState]
 * @param snapAnimationSpec an optional [AnimationSpec] that defines how the bottom app bar snaps to
 *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
 *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
 *   current state.
 * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the bottom
 *   app bar when the user flings the app bar itself, or the scrollable content. If `null` is
 *   provided, the app bar will not continue to animate its height based on the scroll velocity.
 * @param canScroll a callback used to determine whether scroll events are to be handled by this
 *   [ExitAlwaysScrollBehavior]
 */
private class ExitAlwaysScrollBehavior(
    override val state: BottomAppBarState,
    override val snapAnimationSpec: AnimationSpec<Float>?,
    override val flingAnimationSpec: DecayAnimationSpec<Float>?,
    val canScroll: () -> Boolean = { true },
) : BottomAppBarScrollBehavior {
    override val isPinned: Boolean = false
    override var nestedScrollConnection =
        object : NestedScrollConnection {

Sources: [live-androidx-material3-material3-material3-appbar-lines-2539-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2574–2608)

            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource,
            ): Offset {
                if (!canScroll()) return Offset.Zero
                state.contentOffset += consumed.y
                state.heightOffset = state.heightOffset + consumed.y
                return Offset.Zero
            }

            override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                if (
                    available.y > 0f &&
                        (state.heightOffset == 0f || state.heightOffset == state.heightOffsetLimit)
                ) {
                    // Reset the total content offset to zero when scrolling all the way down.
                    // This will eliminate some float precision inaccuracies.
                    state.contentOffset = 0f
                }
                val superConsumed = super.onPostFling(consumed, available)
                return superConsumed +
                    settleAppBarBottom(state, available.y, flingAnimationSpec, snapAnimationSpec)
            }
        }
}

/**
 * Settles the app bar by flinging, in case the given velocity is greater than zero, and snapping
 * after the fling settles.
 */
private suspend fun settleAppBarBottom(
    state: BottomAppBarState,
    velocity: Float,
    flingAnimationSpec: DecayAnimationSpec<Float>?,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2574-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2609–2643)

    snapAnimationSpec: AnimationSpec<Float>?,
): Velocity {
    // Check if the app bar is completely collapsed/expanded. If so, no need to settle the app bar,
    // and just return Zero Velocity.
    // Note that we don't check for 0f due to float precision with the collapsedFraction
    // calculation.
    if (state.collapsedFraction < 0.01f || state.collapsedFraction == 1f) {
        return Velocity.Zero
    }
    var remainingVelocity = velocity
    // In case there is an initial velocity that was left after a previous user fling, animate to
    // continue the motion to expand or collapse the app bar.
    if (flingAnimationSpec != null && abs(velocity) > 1f) {
        var lastValue = 0f
        AnimationState(initialValue = 0f, initialVelocity = velocity).animateDecay(
            flingAnimationSpec
        ) {
            val delta = value - lastValue
            val initialHeightOffset = state.heightOffset
            state.heightOffset = initialHeightOffset + delta
            val consumed = abs(initialHeightOffset - state.heightOffset)
            lastValue = value
            remainingVelocity = this.velocity
            // avoid rounding errors and stop if anything is unconsumed
            if (abs(delta - consumed) > 0.5f) this.cancelAnimation()
        }
    }
    // Snap if animation specs were provided.
    if (snapAnimationSpec != null) {
        if (state.heightOffset < 0 && state.heightOffset > state.heightOffsetLimit) {
            AnimationState(initialValue = state.heightOffset).animateTo(
                if (state.collapsedFraction < 0.5f) {
                    0f
                } else {
                    state.heightOffsetLimit

Sources: [live-androidx-material3-material3-material3-appbar-lines-2609-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2644–2678)

                },
                animationSpec = snapAnimationSpec,
            ) {
                state.heightOffset = value
            }
        }
    }

    return Velocity(0f, remainingVelocity)
}

// Padding minus IconButton's min touch target expansion
private val BottomAppBarHorizontalPadding = 16.dp - 12.dp
internal val BottomAppBarVerticalPadding = 16.dp - 12.dp

// Padding minus content padding
private val FABHorizontalPadding = 16.dp - BottomAppBarHorizontalPadding
private val FABVerticalPadding = 12.dp - BottomAppBarVerticalPadding

/**
 * A single-row top app bar that is designed to be called by the small and center aligned top app
 * bar composables.
 *
 * This SingleRowTopAppBar has slots for a title, subtitle, navigation icon, and actions.
 */
@Composable
private fun SingleRowTopAppBar(
    modifier: Modifier = Modifier,
    title: @Composable () -> Unit,
    titleTextStyle: TextStyle,
    subtitle: (@Composable () -> Unit)?,
    subtitleTextStyle: TextStyle,
    titleHorizontalAlignment: Alignment.Horizontal,
    navigationIcon: @Composable () -> Unit,
    actions: @Composable RowScope.() -> Unit,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2644-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2679–2713)

    expandedHeight: Dp,
    contentPadding: PaddingValues,
    windowInsets: WindowInsets,
    colors: TopAppBarColors,
    scrollBehavior: TopAppBarScrollBehavior?,
) {
    require(expandedHeight.isSpecified && expandedHeight.isFinite) {
        "The expandedHeight is expected to be specified and finite"
    }

    // Obtain the container color from the TopAppBarColors using the `overlapFraction`. This
    // ensures that the colors will adjust whether the app bar behavior is pinned or scrolled.
    // This may potentially animate or interpolate a transition between the container-color and
    // the container's scrolled-color according to the app bar's scroll state.
    val targetColor by
        remember(colors, scrollBehavior) {
            derivedStateOf {
                val overlappingFraction = scrollBehavior?.state?.overlappedFraction ?: 0f
                colors.containerColor(if (overlappingFraction > 0.01f) 1f else 0f)
            }
        }
    // TODO: Load the motionScheme tokens from the component tokens file
    val appBarContainerColor =
        animateColorAsState(
            targetColor,
            animationSpec = MotionSchemeKeyTokens.DefaultEffects.value(),
        )

    // Wrap the given actions in a Row.
    val actionsRow =
        @Composable {
            Row(
                horizontalArrangement = Arrangement.End,
                verticalAlignment = Alignment.CenterVertically,
                content = actions,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2679-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2714–2748)

            )
        }

    // Set up support for resizing the top app bar when vertically dragging the bar itself.
    val appBarDragModifier =
        if (scrollBehavior != null && !scrollBehavior.isPinned) {
            Modifier.draggable(
                orientation = Orientation.Vertical,
                state =
                    rememberDraggableState { delta -> scrollBehavior.state.heightOffset += delta },
                onDragStopped = { velocity ->
                    settleAppBar(
                        scrollBehavior.state,
                        velocity,
                        scrollBehavior.flingAnimationSpec,
                        scrollBehavior.snapAnimationSpec,
                    )
                },
            )
        } else {
            Modifier
        }

    // Compose a Surface with a TopAppBarLayout content.
    // The surface's background color is animated as specified above.
    // The height of the app bar is determined by subtracting the bar's height offset from the
    // app bar's defined constant height value (i.e. the ContainerHeight token).
    Box(
        modifier =
            modifier
                .then(appBarDragModifier)
                .drawBehind {
                    val color = appBarContainerColor.value
                    if (color != Color.Unspecified) {
                        drawRect(color = color)

Sources: [live-androidx-material3-material3-material3-appbar-lines-2714-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2749–2783)

                    }
                }
                .semantics { isTraversalGroup = true }
                .pointerInput(Unit) {}
    ) {
        TopAppBarLayout(
            modifier =
                Modifier.windowInsetsPadding(windowInsets)
                    // clip after padding so we don't show the title over the inset area
                    .clipToBounds()
                    .adjustHeightOffsetLimit(scrollBehavior),
            scrolledOffset = { scrollBehavior?.state?.heightOffset ?: 0f },
            navigationIconContentColor = colors.navigationIconContentColor,
            titleContentColor = colors.titleContentColor,
            actionIconContentColor = colors.actionIconContentColor,
            subtitleContentColor = colors.subtitleContentColor,
            title = title,
            titleTextStyle = titleTextStyle,
            subtitle = subtitle,
            subtitleTextStyle = subtitleTextStyle,
            titleAlpha = { 1f },
            titleVerticalArrangement = Arrangement.Center,
            titleHorizontalAlignment = titleHorizontalAlignment,
            titleBottomPadding = 0,
            hideTitleSemantics = false,
            navigationIcon = navigationIcon,
            actions = actionsRow,
            height = expandedHeight,
            contentPadding = contentPadding,
        )
    }
}

/**
 * A two-rows top app bar that is designed to be called by the Large and Medium top app bar

Sources: [live-androidx-material3-material3-material3-appbar-lines-2749-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2784–2818)

 * composables.
 */
@Composable
private fun TwoRowsTopAppBar(
    modifier: Modifier = Modifier,
    title: @Composable () -> Unit,
    titleTextStyle: TextStyle,
    titleBottomPadding: Dp,
    smallTitle: @Composable () -> Unit,
    smallTitleTextStyle: TextStyle,
    subtitle: (@Composable () -> Unit)?,
    subtitleTextStyle: TextStyle,
    smallSubtitle: (@Composable () -> Unit)?,
    smallSubtitleTextStyle: TextStyle,
    titleHorizontalAlignment: Alignment.Horizontal,
    navigationIcon: @Composable () -> Unit,
    actions: @Composable RowScope.() -> Unit,
    collapsedHeight: Dp,
    expandedHeight: Dp,
    windowInsets: WindowInsets,
    colors: TopAppBarColors,
    scrollBehavior: TopAppBarScrollBehavior?,
) {
    require(collapsedHeight.isSpecified && collapsedHeight.isFinite) {
        "The collapsedHeight is expected to be specified and finite"
    }
    require(expandedHeight.isSpecified && expandedHeight.isFinite) {
        "The expandedHeight is expected to be specified and finite"
    }
    require(expandedHeight >= collapsedHeight) {
        "The expandedHeight is expected to be greater or equal to the collapsedHeight"
    }
    val titleBottomPaddingPx = with(LocalDensity.current) { titleBottomPadding.roundToPx() }

    // Obtain the container Color from the TopAppBarColors using the `collapsedFraction`, as the

Sources: [live-androidx-material3-material3-material3-appbar-lines-2784-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 279–313)

 *
 * A center aligned top app bar that uses a [TopAppBarScrollBehavior] to customize its nested
 * scrolling behavior when working in conjunction with scrolling content looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleCenterAlignedTopAppBar
 * @param title the title to be displayed in the top app bar
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
 *   to collapse or expand, this value will represent the maximum height that the bar will be
 *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
 *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 */
@Deprecated(
    message = "Deprecated in favor of CenterAlignedTopAppBar with contentPadding parameter",
    level = DeprecationLevel.HIDDEN,
)
@OptIn(ExperimentalMaterial3Api::class)
@Composable
public fun CenterAlignedTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,

Sources: [live-androidx-material3-material3-material3-appbar-lines-279-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2819–2853)

    // bottom part of this TwoRowsTopAppBar changes color at the same rate the app bar expands
    // or collapse.
    // This will potentially animate or interpolate a transition between the container color and
    // the container's scrolled color according to the app bar's scroll state.
    val colorTransitionFraction = { scrollBehavior?.state?.collapsedFraction ?: 0f }
    val appBarContainerColor = { colors.containerColor(colorTransitionFraction()) }

    // Wrap the given actions in a Row.
    val actionsRow =
        @Composable {
            Row(
                horizontalArrangement = Arrangement.End,
                verticalAlignment = Alignment.CenterVertically,
                content = actions,
            )
        }
    val topTitleAlpha = { TopTitleAlphaEasing.transform(colorTransitionFraction()) }
    val bottomTitleAlpha = { 1f - colorTransitionFraction() }
    // Hide the top row title semantics when its alpha value goes below 0.5 threshold.
    // Hide the bottom row title semantics when the top title semantics are active.
    val hideTopRowSemantics by
        remember(colorTransitionFraction) { derivedStateOf { colorTransitionFraction() < 0.5f } }
    val hideBottomRowSemantics = !hideTopRowSemantics

    // Set up support for resizing the top app bar when vertically dragging the bar itself.
    val appBarDragModifier =
        if (scrollBehavior != null && !scrollBehavior.isPinned) {
            Modifier.draggable(
                orientation = Orientation.Vertical,
                state =
                    rememberDraggableState { delta -> scrollBehavior.state.heightOffset += delta },
                onDragStopped = { velocity ->
                    settleAppBar(
                        scrollBehavior.state,
                        velocity,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2819-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2854–2888)

                        scrollBehavior.flingAnimationSpec,
                        scrollBehavior.snapAnimationSpec,
                    )
                },
            )
        } else {
            Modifier
        }

    Box(
        modifier =
            modifier
                .then(appBarDragModifier)
                .drawBehind { drawRect(color = appBarContainerColor()) }
                .semantics { isTraversalGroup = true }
                .pointerInput(Unit) {}
    ) {
        Column {
            TopAppBarLayout(
                modifier =
                    Modifier.windowInsetsPadding(windowInsets)
                        // clip after padding so we don't show the title over the inset area
                        .clipToBounds(),
                scrolledOffset = { 0f },
                navigationIconContentColor = colors.navigationIconContentColor,
                titleContentColor = colors.titleContentColor,
                actionIconContentColor = colors.actionIconContentColor,
                subtitleContentColor = colors.subtitleContentColor,
                title = smallTitle,
                titleTextStyle = smallTitleTextStyle,
                subtitle = smallSubtitle,
                subtitleTextStyle = smallSubtitleTextStyle,
                titleAlpha = topTitleAlpha,
                titleVerticalArrangement = Arrangement.Center,
                titleHorizontalAlignment = titleHorizontalAlignment,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2854-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2889–2923)

                titleBottomPadding = 0,
                hideTitleSemantics = hideTopRowSemantics,
                navigationIcon = navigationIcon,
                actions = actionsRow,
                height = collapsedHeight,
                contentPadding = TopAppBarDefaults.ContentPadding,
            )
            TopAppBarLayout(
                modifier =
                    Modifier
                        // only apply the horizontal sides of the window insets padding, since
                        // the top padding will always be applied by the layout above
                        .windowInsetsPadding(windowInsets.only(WindowInsetsSides.Horizontal))
                        .clipToBounds()
                        .adjustHeightOffsetLimit(scrollBehavior),
                scrolledOffset = { scrollBehavior?.state?.heightOffset ?: 0f },
                navigationIconContentColor = colors.navigationIconContentColor,
                titleContentColor = colors.titleContentColor,
                actionIconContentColor = colors.actionIconContentColor,
                subtitleContentColor = colors.subtitleContentColor,
                title = title,
                titleTextStyle = titleTextStyle,
                subtitle = subtitle,
                subtitleTextStyle = subtitleTextStyle,
                titleAlpha = bottomTitleAlpha,
                titleVerticalArrangement = Arrangement.Bottom,
                titleHorizontalAlignment = titleHorizontalAlignment,
                titleBottomPadding = titleBottomPaddingPx,
                hideTitleSemantics = hideBottomRowSemantics,
                navigationIcon = {},
                actions = {},
                height = expandedHeight - collapsedHeight,
                contentPadding = TopAppBarDefaults.ContentPadding,
            )
        }

Sources: [live-androidx-material3-material3-material3-appbar-lines-2889-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2924–2958)

    }
}

private fun Modifier.adjustHeightOffsetLimit(scrollBehavior: TopAppBarScrollBehavior?) =
    scrollBehavior?.state?.let {
        onSizeChanged { size ->
            val offset = size.height.toFloat() - it.heightOffset
            it.heightOffsetLimit = -offset
        }
    } ?: this

/**
 * The base [Layout] for all top app bars. This function lays out a top app bar navigation icon
 * (leading icon), a title (header), and action icons (trailing icons). Note that the navigation and
 * the actions are optional.
 *
 * @param modifier a [Modifier]
 * @param scrolledOffset a [FloatProducer] that provides the app bar offset in pixels (note that
 *   when the app bar is scrolled, the lambda will output negative values)
 * @param navigationIconContentColor the content color that will be applied via a
 *   [LocalContentColor] when composing the navigation icon
 * @param titleContentColor the color that will be applied via a [LocalContentColor] when composing
 *   the title
 * @param subtitleContentColor the color that will be applied via a [LocalContentColor] when
 *   composing the subtitle
 * @param actionIconContentColor the content color that will be applied via a [LocalContentColor]
 *   when composing the action icons
 * @param title the top app bar title (header)
 * @param titleTextStyle the title's text style
 * @param titleAlpha the title's alpha
 * @param titleVerticalArrangement the title's vertical arrangement
 * @param titleHorizontalAlignment the title's horizontal alignment
 * @param titleBottomPadding the title's bottom padding
 * @param hideTitleSemantics hides the title node from the semantic tree. Apply this boolean when
 *   this layout is part of a [TwoRowsTopAppBar] to hide the title's semantics from accessibility

Sources: [live-androidx-material3-material3-material3-appbar-lines-2924-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2959–2993)

 *   services. This is needed to avoid having multiple titles visible to accessibility services at
 *   the same time, when animating between collapsed / expanded states.
 * @param navigationIcon a navigation icon [Composable]
 * @param actions actions [Composable]
 * @param height this app bar's requested height
 * @param contentPadding the padding applied to the content of this TopAppBar.
 */
@Composable
private fun TopAppBarLayout(
    modifier: Modifier,
    scrolledOffset: FloatProducer,
    navigationIconContentColor: Color,
    titleContentColor: Color,
    subtitleContentColor: Color,
    actionIconContentColor: Color,
    title: @Composable () -> Unit,
    titleTextStyle: TextStyle,
    subtitle: (@Composable () -> Unit)?,
    subtitleTextStyle: TextStyle,
    titleAlpha: () -> Float,
    titleVerticalArrangement: Arrangement.Vertical,
    titleHorizontalAlignment: Alignment.Horizontal,
    titleBottomPadding: Int,
    hideTitleSemantics: Boolean,
    navigationIcon: @Composable () -> Unit,
    actions: @Composable () -> Unit,
    height: Dp,
    contentPadding: PaddingValues,
) {
    Layout(
        {
            Box(Modifier.layoutId("navigationIcon").padding(start = TopAppBarHorizontalPadding)) {
                CompositionLocalProvider(
                    LocalContentColor provides navigationIconContentColor,
                    content = navigationIcon,

Sources: [live-androidx-material3-material3-material3-appbar-lines-2959-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 2994–3028)

                )
            }
            if (subtitle != null) {
                Column(
                    modifier =
                        Modifier.layoutId("title")
                            .padding(horizontal = TopAppBarHorizontalPadding)
                            .then(
                                if (hideTitleSemantics) {
                                    Modifier.clearAndSetSemantics {}
                                } else {
                                    Modifier.semantics { isTraversalGroup = true }
                                }
                            )
                            .graphicsLayer { alpha = titleAlpha() },
                    horizontalAlignment = titleHorizontalAlignment,
                ) {
                    ProvideContentColorTextStyle(
                        contentColor = titleContentColor,
                        textStyle = titleTextStyle,
                        content = title,
                    )
                    ProvideContentColorTextStyle(
                        contentColor = subtitleContentColor,
                        textStyle = subtitleTextStyle,
                        content = subtitle,
                    )
                }
            } else { // TODO(b/352770398): Workaround to maintain compatibility
                Box(
                    modifier =
                        Modifier.layoutId("title")
                            .padding(horizontal = TopAppBarHorizontalPadding)
                            .then(
                                if (hideTitleSemantics) Modifier.clearAndSetSemantics {}

Sources: [live-androidx-material3-material3-material3-appbar-lines-2994-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3029–3063)

                                else Modifier
                            )
                            .graphicsLayer { alpha = titleAlpha() }
                ) {
                    ProvideContentColorTextStyle(
                        contentColor = titleContentColor,
                        textStyle = titleTextStyle,
                        content = title,
                    )
                }
            }
            Box(Modifier.layoutId("actionIcons").padding(end = TopAppBarHorizontalPadding)) {
                CompositionLocalProvider(
                    LocalContentColor provides actionIconContentColor,
                    content = actions,
                )
            }
        },
        modifier = modifier,
        measurePolicy =
            remember(
                scrolledOffset,
                titleVerticalArrangement,
                titleHorizontalAlignment,
                titleBottomPadding,
                height,
            ) {
                TopAppBarMeasurePolicy(
                    scrolledOffset,
                    titleVerticalArrangement,
                    titleHorizontalAlignment,
                    titleBottomPadding,
                    height,
                    contentPadding,
                )

Sources: [live-androidx-material3-material3-material3-appbar-lines-3029-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3064–3098)

            },
    )
}

private class TopAppBarMeasurePolicy(
    val scrolledOffset: FloatProducer,
    val titleVerticalArrangement: Arrangement.Vertical,
    val titleHorizontalAlignment: Alignment.Horizontal,
    val titleBottomPadding: Int,
    val height: Dp,
    val contentPadding: PaddingValues,
) : MeasurePolicy {
    override fun MeasureScope.measure(
        measurables: List<Measurable>,
        constraints: Constraints,
    ): MeasureResult {
        val navigationIconPlaceable =
            measurables
                .fastFirst { it.layoutId == "navigationIcon" }
                .measure(constraints.copy(minWidth = 0))
        val actionIconsPlaceable =
            measurables
                .fastFirst { it.layoutId == "actionIcons" }
                .measure(constraints.copy(minWidth = 0))
        val startPaddingPx = contentPadding.calculateStartPadding(layoutDirection)
        val endPaddingPx = contentPadding.calculateEndPadding(layoutDirection)
        val titleStartSpace = max(TopAppBarTitleInset.roundToPx(), navigationIconPlaceable.width)
        val maxTitleWidth =
            if (constraints.maxWidth == Constraints.Infinity) {
                constraints.maxWidth
            } else {
                (constraints.maxWidth -
                        titleStartSpace -
                        actionIconsPlaceable.width -
                        startPaddingPx.roundToPx() -

Sources: [live-androidx-material3-material3-material3-appbar-lines-3064-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3099–3133)

                        endPaddingPx.roundToPx())
                    .coerceAtLeast(0)
            }
        val titlePlaceable =
            measurables
                .fastFirst { it.layoutId == "title" }
                .measure(constraints.copy(minWidth = 0, maxWidth = maxTitleWidth))

        // Locate the title's baseline.
        val titleBaseline =
            if (titlePlaceable[LastBaseline] != AlignmentLine.Unspecified) {
                titlePlaceable[LastBaseline]
            } else {
                0
            }

        // Subtract the scrolledOffset from the maxHeight. The scrolledOffset is expected to be
        // equal or smaller than zero.
        val scrolledOffsetValue = scrolledOffset()
        val heightOffset = if (scrolledOffsetValue.isNaN()) 0 else scrolledOffsetValue.roundToInt()
        val topPaddingPx = contentPadding.calculateTopPadding().roundToPx()
        val bottomPaddingPx = contentPadding.calculateBottomPadding().roundToPx()
        val maxLayoutHeight =
            max(height.roundToPx(), titlePlaceable.height) + topPaddingPx + bottomPaddingPx
        val layoutHeight =
            if (constraints.maxHeight == Constraints.Infinity) {
                maxLayoutHeight
            } else {
                (maxLayoutHeight + heightOffset).coerceAtLeast(0)
            }

        return placeTopAppBar(
            constraints,
            layoutHeight,
            maxLayoutHeight,

Sources: [live-androidx-material3-material3-material3-appbar-lines-3099-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3134–3168)

            navigationIconPlaceable,
            titlePlaceable,
            actionIconsPlaceable,
            titleBaseline,
            contentPadding,
        )
    }

    override fun IntrinsicMeasureScope.minIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastSumBy { it.minIntrinsicWidth(height) }

    override fun IntrinsicMeasureScope.minIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {
        return max(
            height.roundToPx(),
            measurables.fastMaxOfOrNull { it.minIntrinsicHeight(width) } ?: 0,
        )
    }

    override fun IntrinsicMeasureScope.maxIntrinsicWidth(
        measurables: List<IntrinsicMeasurable>,
        height: Int,
    ) = measurables.fastSumBy { it.maxIntrinsicWidth(height) }

    override fun IntrinsicMeasureScope.maxIntrinsicHeight(
        measurables: List<IntrinsicMeasurable>,
        width: Int,
    ): Int {
        return max(
            height.roundToPx(),
            measurables.fastMaxOfOrNull { it.maxIntrinsicHeight(width) } ?: 0,

Sources: [live-androidx-material3-material3-material3-appbar-lines-3134-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 314–348)

    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    CenterAlignedTopAppBar(
        title = title,
        modifier = modifier,
        navigationIcon = navigationIcon,
        actions = actions,
        expandedHeight = expandedHeight,
        contentPadding = TopAppBarDefaults.ContentPadding,
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design center-aligned small top app
 * bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * This small top app bar has a header title that is horizontally aligned to the center.
 *
 * ![Center-aligned top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/center-aligned-top-app-bar.png)
 *
 * This CenterAlignedTopAppBar has slots for a title, navigation icon, and actions.
 *
 * A center aligned top app bar that uses a [TopAppBarScrollBehavior] to customize its nested
 * scrolling behavior when working in conjunction with scrolling content looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleCenterAlignedTopAppBar
 * @param title the title to be displayed in the top app bar
 * @param modifier the [Modifier] to be applied to this top app bar

Sources: [live-androidx-material3-material3-material3-appbar-lines-314-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3169–3203)

        )
    }

    private fun MeasureScope.placeTopAppBar(
        constraints: Constraints,
        layoutHeight: Int,
        maxLayoutHeight: Int,
        navigationIconPlaceable: Placeable,
        titlePlaceable: Placeable,
        actionIconsPlaceable: Placeable,
        titleBaseline: Int,
        contentPadding: PaddingValues,
    ): MeasureResult {
        val topPadding = contentPadding.calculateTopPadding().roundToPx()
        val bottomPadding = contentPadding.calculateBottomPadding().roundToPx()
        val startPadding = contentPadding.calculateStartPadding(layoutDirection).roundToPx()
        val endPadding = contentPadding.calculateEndPadding(layoutDirection).roundToPx()
        val contentHeight = layoutHeight + topPadding - bottomPadding
        return layout(constraints.maxWidth, layoutHeight) {
            // Navigation icon
            navigationIconPlaceable.placeRelative(
                x = startPadding,
                y = (contentHeight - navigationIconPlaceable.height) / 2,
            )

            titlePlaceable.let {
                val start = max(TopAppBarTitleInset.roundToPx(), navigationIconPlaceable.width)
                val end = actionIconsPlaceable.width

                // Align using the maxWidth. We will adjust the position later according to the
                // start and end. This is done to ensure that a center alignment is still maintained
                // when the start and end have different widths. Note that the title is centered
                // relative to the entire app bar width, and not just centered between the
                // navigation icon and the actions.
                var titleX =

Sources: [live-androidx-material3-material3-material3-appbar-lines-3169-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3204–3238)

                    titleHorizontalAlignment.align(
                        size = titlePlaceable.width,
                        space = constraints.maxWidth,
                        // Using Ltr as we call placeRelative later on.
                        layoutDirection = LayoutDirection.Ltr,
                    )
                // Reposition the title based on the start and the end (i.e. the navigation and
                // action widths).
                if (titleX < start) {
                    titleX += startPadding + (start - titleX)
                } else if (titleX + titlePlaceable.width > constraints.maxWidth - end) {
                    titleX +=
                        startPadding +
                            ((constraints.maxWidth - end) - (titleX + titlePlaceable.width))
                }

                // The titleVerticalArrangement is always one of Center or Bottom.
                val titleY =
                    when (titleVerticalArrangement) {
                        Arrangement.Center -> (contentHeight - titlePlaceable.height) / 2
                        // Apply bottom padding from the title's baseline only when the Arrangement
                        // is "Bottom".
                        Arrangement.Bottom ->
                            if (titleBottomPadding == 0) {
                                contentHeight - titlePlaceable.height
                            } else {
                                // Calculate the actual padding from the bottom of the title, taking
                                // into account its baseline.
                                val paddingFromBottom =
                                    titleBottomPadding - (titlePlaceable.height - titleBaseline)
                                // Adjust the bottom padding to a smaller number if there is no room
                                // to fit the title.
                                val heightWithPadding = paddingFromBottom + titlePlaceable.height
                                val adjustedBottomPadding =
                                    if (heightWithPadding > maxLayoutHeight) {

Sources: [live-androidx-material3-material3-material3-appbar-lines-3204-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3239–3273)

                                        paddingFromBottom - (heightWithPadding - maxLayoutHeight)
                                    } else {
                                        paddingFromBottom
                                    }

                                contentHeight -
                                    titlePlaceable.height -
                                    max(0, adjustedBottomPadding)
                            }
                        // Arrangement.Top
                        else -> 0
                    }

                it.placeRelative(titleX, titleY)
            }

            // Action icons
            actionIconsPlaceable.placeRelative(
                x = constraints.maxWidth - actionIconsPlaceable.width - endPadding,
                y = (contentHeight - actionIconsPlaceable.height) / 2,
            )
        }
    }
}

/**
 * Returns a [TopAppBarScrollBehavior] that only adjusts its content offset, without adjusting any
 * properties that affect the height of a top app bar.
 *
 * @param state a [TopAppBarState]
 * @param canScroll a callback used to determine whether scroll events are to be handled by this
 *   [PinnedScrollBehavior]
 */
private class PinnedScrollBehavior(
    override val state: TopAppBarState,

Sources: [live-androidx-material3-material3-material3-appbar-lines-3239-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3274–3308)

    val canScroll: () -> Boolean = { true },
    isScrollingContentAtStart: (() -> Boolean)? = null,
) : TopAppBarScrollBehavior {

    init {
        if (isScrollingContentAtStart != null) {
            state.isScrollingContentAtStart = isScrollingContentAtStart
        }
    }

    override val isPinned: Boolean = true
    override val snapAnimationSpec: AnimationSpec<Float>? = null
    override val flingAnimationSpec: DecayAnimationSpec<Float>? = null
    override var nestedScrollConnection =
        object : NestedScrollConnection {
            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource,
            ): Offset {
                if (!canScroll()) return Offset.Zero
                state.contentOffset += consumed.y
                return Offset.Zero
            }

            override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                if (available.y > 0f) {
                    // Reset the total content offset to zero when scrolling all the way down.
                    // This will eliminate some float precision inaccuracies.
                    state.contentOffset = 0f
                }
                return super.onPostFling(consumed, available)
            }
        }
}

Sources: [live-androidx-material3-material3-material3-appbar-lines-3274-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3309–3343)


/**
 * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
 * app bar.
 *
 * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
 * the nested content is pulled up, and will immediately appear when the content is pulled down.
 *
 * @param state a [TopAppBarState]
 * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
 *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
 *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
 *   current state.
 * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
 *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
 *   the app bar will not continue to animate its height based on the scroll velocity.
 * @param canScroll a callback used to determine whether scroll events are to be handled by this
 *   [EnterAlwaysScrollBehavior]
 * @param reverseLayout indicates that this behavior is applied to a scrollable content that has a
 *   reversed direction of scrolling and layout
 */
private class LegacyEnterAlwaysScrollBehavior(
    override val state: TopAppBarState,
    override val snapAnimationSpec: AnimationSpec<Float>?,
    override val flingAnimationSpec: DecayAnimationSpec<Float>?,
    val canScroll: () -> Boolean = { true },
    val reverseLayout: Boolean = false,
) : TopAppBarScrollBehavior {
    override val isPinned: Boolean = false
    override var nestedScrollConnection =
        object : NestedScrollConnection {
            override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                if (!canScroll()) return Offset.Zero
                val prevHeightOffset = state.heightOffset
                state.heightOffset += available.y

Sources: [live-androidx-material3-material3-material3-appbar-lines-3309-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3344–3378)

                // The state's heightOffset is coerce in a minimum value of heightOffsetLimit and a
                // maximum value 0f, so we check if its value was actually changed after the
                // available.y was added to it in order to tell if the top app bar is currently
                // collapsing or expanding.
                // Note that when the content was set with a revered layout, we always return a
                // zero offset.
                return if (!reverseLayout && prevHeightOffset != state.heightOffset) {
                    // We're in the middle of top app bar collapse or expand.
                    // Consume only the scroll on the Y axis.
                    available.copy(x = 0f)
                } else {
                    Offset.Zero
                }
            }

            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource,
            ): Offset {
                if (!canScroll()) return Offset.Zero
                state.contentOffset += consumed.y
                if (!reverseLayout) state.heightOffset += consumed.y
                return Offset.Zero
            }

            override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                if (
                    available.y > 0f &&
                        (state.heightOffset == 0f || state.heightOffset == state.heightOffsetLimit)
                ) {
                    // Reset the total content offset to zero when scrolling all the way down.
                    // This will eliminate some float precision inaccuracies.
                    state.contentOffset = 0f
                }

Sources: [live-androidx-material3-material3-material3-appbar-lines-3344-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3379–3413)

                val superConsumed = super.onPostFling(consumed, available)
                return superConsumed +
                    settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
            }
        }
}

/**
 * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
 * app bar.
 *
 * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
 * the nested content is pulled up, and will expand back the collapsed area when the content is
 * pulled all the way down.
 *
 * @param state a [TopAppBarState]
 * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
 *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
 *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
 *   current state.
 * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
 *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
 *   the app bar will not continue to animate its height based on the scroll velocity.
 * @param canScroll a callback used to determine whether scroll events are to be handled by this
 *   [EnterAlwaysScrollBehavior]
 */
private class EnterAlwaysScrollBehavior(
    override val state: TopAppBarState,
    override val snapAnimationSpec: AnimationSpec<Float>?,
    override val flingAnimationSpec: DecayAnimationSpec<Float>?,
    val canScroll: () -> Boolean = { true },
    isScrollingContentAtStart: (() -> Boolean)? = null,
) : TopAppBarScrollBehavior {

    init {

Sources: [live-androidx-material3-material3-material3-appbar-lines-3379-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3414–3448)

        if (isScrollingContentAtStart != null) {
            state.isScrollingContentAtStart = isScrollingContentAtStart
        }
    }

    override val isPinned: Boolean = false
    override var nestedScrollConnection =
        object : NestedScrollConnection {
            override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                if (!canScroll()) return Offset.Zero
                val prevHeightOffset = state.heightOffset
                state.heightOffset += available.y
                // The state's heightOffset is coerce in a minimum value of heightOffsetLimit and a
                // maximum value 0f, so we check if its value was actually changed after the
                // available.y was added to it in order to tell if the top app bar is currently
                // collapsing or expanding.
                return if (prevHeightOffset != state.heightOffset) {
                    // We're in the middle of top app bar collapse or expand.
                    // Consume only the scroll on the Y axis.
                    available.copy(x = 0f)
                } else {
                    Offset.Zero
                }
            }

            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource,
            ): Offset {
                if (!canScroll()) return Offset.Zero
                state.contentOffset += consumed.y
                return Offset.Zero
            }


Sources: [live-androidx-material3-material3-material3-appbar-lines-3414-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3449–3483)

            override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                if (available.y > 0f) {
                    // Reset the total content offset to zero when scrolling all the way down.
                    // This will eliminate some float precision inaccuracies.
                    state.contentOffset = 0f
                }
                val superConsumed = super.onPostFling(consumed, available)
                return superConsumed +
                    settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
            }
        }
}

/**
 * A [TopAppBarScrollBehavior] that adjusts its properties to affect the colors and height of a top
 * app bar.
 *
 * A top app bar that is set up with this [TopAppBarScrollBehavior] will immediately collapse when
 * the nested content is pulled up, and will expand back the collapsed area when the content is
 * pulled all the way down.
 *
 * @param state a [TopAppBarState]
 * @param snapAnimationSpec an optional [AnimationSpec] that defines how the top app bar snaps to
 *   either fully collapsed or fully extended state when a fling or a drag scrolled it into an
 *   intermediate position. If `null` is provided, the app bar will not snap and will remain in its
 *   current state.
 * @param flingAnimationSpec an optional [DecayAnimationSpec] that defines how to fling the top app
 *   bar when the user flings the app bar itself, or the scrollable content. If `null` is provided,
 *   the app bar will not continue to animate its height based on the scroll velocity.
 * @param canScroll a callback used to determine whether scroll events are to be handled by this
 *   [ExitUntilCollapsedScrollBehavior]
 */
private class ExitUntilCollapsedScrollBehavior(
    override val state: TopAppBarState,
    override val snapAnimationSpec: AnimationSpec<Float>?,

Sources: [live-androidx-material3-material3-material3-appbar-lines-3449-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3484–3518)

    override val flingAnimationSpec: DecayAnimationSpec<Float>?,
    val canScroll: () -> Boolean = { true },
) : TopAppBarScrollBehavior {
    override val isPinned: Boolean = false
    override var nestedScrollConnection =
        object : NestedScrollConnection {
            override fun onPreScroll(available: Offset, source: NestedScrollSource): Offset {
                // Don't intercept if scrolling down.
                if (!canScroll() || available.y > 0f) return Offset.Zero

                val prevHeightOffset = state.heightOffset
                state.heightOffset = state.heightOffset + available.y
                return if (prevHeightOffset != state.heightOffset) {
                    // We're in the middle of top app bar collapse or expand.
                    // Consume only the scroll on the Y axis.
                    available.copy(x = 0f)
                } else {
                    Offset.Zero
                }
            }

            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource,
            ): Offset {
                if (!canScroll()) return Offset.Zero
                state.contentOffset += consumed.y

                if (available.y < 0f || consumed.y < 0f) {
                    // When scrolling up, just update the state's height offset.
                    val oldHeightOffset = state.heightOffset
                    state.heightOffset = state.heightOffset + consumed.y
                    return Offset(0f, state.heightOffset - oldHeightOffset)
                }

Sources: [live-androidx-material3-material3-material3-appbar-lines-3484-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 349–383)

 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
 *   to collapse or expand, this value will represent the maximum height that the bar will be
 *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
 *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @param contentPadding the padding applied to the content of this TopAppBar.
 */
@Composable
public fun CenterAlignedTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
    contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
): Unit =
    SingleRowTopAppBar(
        modifier = modifier,
        title = title,
        titleTextStyle = AppBarSmallTokens.TitleFont.value,
        subtitle = null,
        subtitleTextStyle = TextStyle.Default,

Sources: [live-androidx-material3-material3-material3-appbar-lines-349-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3519–3553)


                if (available.y > 0f) {
                    // Adjust the height offset in case the consumed delta Y is less than what was
                    // recorded as available delta Y in the pre-scroll.
                    val oldHeightOffset = state.heightOffset
                    state.heightOffset = state.heightOffset + available.y
                    return Offset(0f, state.heightOffset - oldHeightOffset)
                }
                return Offset.Zero
            }

            override suspend fun onPostFling(consumed: Velocity, available: Velocity): Velocity {
                if (available.y > 0) {
                    // Reset the total content offset to zero when scrolling all the way down. This
                    // will eliminate some float precision inaccuracies.
                    state.contentOffset = 0f
                }
                val superConsumed = super.onPostFling(consumed, available)
                return superConsumed +
                    settleAppBar(state, available.y, flingAnimationSpec, snapAnimationSpec)
            }
        }
}

/**
 * Settles the app bar by flinging, in case the given velocity is greater than zero, and snapping
 * after the fling settles.
 */
private suspend fun settleAppBar(
    state: TopAppBarState,
    velocity: Float,
    flingAnimationSpec: DecayAnimationSpec<Float>?,
    snapAnimationSpec: AnimationSpec<Float>?,
): Velocity {
    // Check if the app bar is completely collapsed/expanded. If so, no need to settle the app bar,

Sources: [live-androidx-material3-material3-material3-appbar-lines-3519-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3554–3588)

    // and just return Zero Velocity.
    // Note that we don't check for 0f due to float precision with the collapsedFraction
    // calculation.
    if (state.collapsedFraction < 0.01f || state.collapsedFraction == 1f) {
        return Velocity.Zero
    }
    var remainingVelocity = velocity
    // In case there is an initial velocity that was left after a previous user fling, animate to
    // continue the motion to expand or collapse the app bar.
    if (flingAnimationSpec != null && abs(velocity) > 1f) {
        var lastValue = 0f
        AnimationState(initialValue = 0f, initialVelocity = velocity).animateDecay(
            flingAnimationSpec
        ) {
            val delta = value - lastValue
            val initialHeightOffset = state.heightOffset
            state.heightOffset = initialHeightOffset + delta
            val consumed = abs(initialHeightOffset - state.heightOffset)
            lastValue = value
            remainingVelocity = this.velocity
            // avoid rounding errors and stop if anything is unconsumed
            if (abs(delta - consumed) > 0.5f) this.cancelAnimation()
        }
    }
    // Snap if animation specs were provided.
    if (snapAnimationSpec != null) {
        if (state.heightOffset < 0 && state.heightOffset > state.heightOffsetLimit) {
            AnimationState(initialValue = state.heightOffset).animateTo(
                if (state.collapsedFraction < 0.5f) {
                    0f
                } else {
                    state.heightOffsetLimit
                },
                animationSpec = snapAnimationSpec,
            ) {

Sources: [live-androidx-material3-material3-material3-appbar-lines-3554-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 3589–3621)

                state.heightOffset = value
            }
        }
    }

    return Velocity(0f, remainingVelocity)
}

/** Returns the current accessibility touch exploration service [State]. */
@Composable
private fun rememberTouchExplorationService() =
    rememberAccessibilityServiceState(
        listenToTouchExplorationState = true,
        listenToSwitchAccessState = false,
        listenToVoiceAccessState = false,
    )

// An easing function used to compute the alpha value that is applied to the top title part of a
// Medium or Large app bar.
/*@VisibleForTesting*/
internal val TopTitleAlphaEasing = CubicBezierEasing(.8f, 0f, .8f, .15f)

private val MediumTitleBottomPadding
    get() = 24.dp
private val LargeTitleBottomPadding
    get() = 28.dp
private val TopAppBarHorizontalPadding
    get() = 4.dp

// A title inset when the App-Bar is a Medium or Large one. Also used to size a spacer when the
// navigation icon is missing.
private val TopAppBarTitleInset = 16.dp - TopAppBarHorizontalPadding


Sources: [live-androidx-material3-material3-material3-appbar-lines-3589-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 36–70)

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.material3.BottomAppBarState.Companion.Saver
import androidx.compose.material3.TopAppBarState.Companion.Saver
import androidx.compose.material3.internal.FloatProducer
import androidx.compose.material3.internal.ProvideContentColorTextStyle
import androidx.compose.material3.internal.rememberAccessibilityServiceState
import androidx.compose.material3.internal.systemBarsForVisualComponents
import androidx.compose.material3.tokens.AppBarLargeFlexibleTokens
import androidx.compose.material3.tokens.AppBarLargeTokens
import androidx.compose.material3.tokens.AppBarMediumFlexibleTokens
import androidx.compose.material3.tokens.AppBarMediumTokens
import androidx.compose.material3.tokens.AppBarSmallTokens
import androidx.compose.material3.tokens.AppBarTokens
import androidx.compose.material3.tokens.BottomAppBarTokens
import androidx.compose.material3.tokens.DockedToolbarTokens
import androidx.compose.material3.tokens.FabSecondaryContainerTokens
import androidx.compose.material3.tokens.MotionSchemeKeyTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.derivedStateOf

Sources: [live-androidx-material3-material3-material3-appbar-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 384–418)

        titleHorizontalAlignment = Alignment.CenterHorizontally,
        navigationIcon = navigationIcon,
        actions = actions,
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                TopAppBarDefaults.TopAppBarExpandedHeight
            } else {
                expandedHeight
            },
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design small top app bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * This small TopAppBar has slots for a title, subtitle, navigation icon, and actions.
 *
 * ![Small top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/small-top-app-bar.png)
 *
 * A top app bar that uses a [PinnedScrollBehavior] to change its container color when content is
 * scrolled under it looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleTopAppBarWithSubtitle
 *
 * A top app bar with a centered title and subtitle looks like:
 *
 * @sample androidx.compose.material3.samples.SimpleTopAppBarWithSubtitleAndCenterAligned
 * @param title the title to be displayed in the top app bar
 * @param subtitle the subtitle to be displayed in the top app bar

Sources: [live-androidx-material3-material3-material3-appbar-lines-384-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 419–451)

 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
 * @param expandedHeight this app bar's height. When a specified [scrollBehavior] causes the app bar
 *   to collapse or expand, this value will represent the maximum height that the bar will be
 *   allowed to expand. This value must be specified and finite, otherwise it will be ignored and
 *   replaced with [TopAppBarDefaults.TopAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @param contentPadding the padding applied to the content of this TopAppBar.
 *
 * @material3expressive
 */
@Composable
public fun TopAppBar(
    title: @Composable () -> Unit,
    subtitle: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
    expandedHeight: Dp = TopAppBarDefaults.TopAppBarExpandedHeight,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,

Sources: [live-androidx-material3-material3-material3-appbar-lines-419-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 452–486)

    contentPadding: PaddingValues = TopAppBarDefaults.ContentPadding,
): Unit =
    SingleRowTopAppBar(
        modifier = modifier,
        title = title,
        titleTextStyle = AppBarSmallTokens.TitleFont.value,
        subtitle = subtitle,
        subtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
        titleHorizontalAlignment = titleHorizontalAlignment,
        navigationIcon = navigationIcon,
        actions = actions,
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                TopAppBarDefaults.TopAppBarExpandedHeight
            } else {
                expandedHeight
            },
        contentPadding = contentPadding,
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design medium top app bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * ![Medium top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
 *
 * This MediumTopAppBar has slots for a title, navigation icon, and actions. In its default expanded
 * state, the title is displayed in a second row under the navigation and actions.
 *
 * A medium top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and expand as

Sources: [live-androidx-material3-material3-material3-appbar-lines-452-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 487–513)

 * content is scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumTopAppBar
 * @param title the title to be displayed in the top app bar. This title will be used in the app
 *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
 *   smaller sized [TextStyle]
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
 *   value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.MediumAppBarCollapsedHeight].
 * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
 *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
 *   will be allowed to expand. The expanded height is expected to be greater or equal to the
 *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
 *   this value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.MediumAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].

Sources: [live-androidx-material3-material3-material3-appbar-lines-487-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 514–548)

 * @throws IllegalArgumentException if the provided [expandedHeight] is smaller than the
 *   [collapsedHeight]
 */
@Composable
public fun MediumTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    collapsedHeight: Dp = TopAppBarDefaults.MediumAppBarCollapsedHeight,
    expandedHeight: Dp = TopAppBarDefaults.MediumAppBarExpandedHeight,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    TwoRowsTopAppBar(
        modifier = modifier,
        title = title,
        titleTextStyle = AppBarMediumTokens.TitleFont.value,
        smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
        titleBottomPadding = MediumTitleBottomPadding,
        smallTitle = title,
        subtitle = null,
        subtitleTextStyle = TextStyle.Default,
        smallSubtitle = null,
        smallSubtitleTextStyle = TextStyle.Default,
        titleHorizontalAlignment = Alignment.Start,
        navigationIcon = navigationIcon,
        actions = actions,
        collapsedHeight =
            if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                TopAppBarDefaults.MediumAppBarCollapsedHeight
            } else {
                collapsedHeight
            },

Sources: [live-androidx-material3-material3-material3-appbar-lines-514-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 549–583)

        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                TopAppBarDefaults.MediumAppBarExpandedHeight
            } else {
                expandedHeight
            },
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design medium flexible top app
 * bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * ![Medium top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
 *
 * (Note: The image above shows the standard MediumTopAppBar layout, which is visually identical to
 * this bar when no subtitle is provided.)
 *
 * This `MediumFlexibleTopAppBar` has slots for a title, subtitle, navigation icon, and actions. In
 * its default expanded state, the title and subtitle are displayed in a second row under the
 * navigation and actions.
 *
 * A medium flexible top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and
 * expand as content is scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.ExitUntilCollapsedMediumFlexibleTopAppBar
 *
 * A medium flexible top app bar with a centered title and subtitle looks like:
 *
 * @sample androidx.compose.material3.samples.MediumFlexibleTopAppBarWithSubtitleAndCenterAligned

Sources: [live-androidx-material3-material3-material3-appbar-lines-549-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 584–609)

 * @param title the title to be displayed in the top app bar. This title will be used in the app
 *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
 *   smaller sized [TextStyle]
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param subtitle optional subtitle to be displayed in the top app bar. This subtitle will be used
 *   in the app bar's expanded and collapsed states
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
 * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
 *   value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.MediumAppBarCollapsedHeight].
 * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
 *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
 *   will be allowed to expand. The expanded height is expected to be greater or equal to the
 *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
 *   this value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight] or
 *   [TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to

Sources: [live-androidx-material3-material3-material3-appbar-lines-584-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 610–644)

 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @throws IllegalArgumentException if the provided [expandedHeight] is smaller than the
 *   [collapsedHeight]
 *
 * @material3expressive
 */
@Composable
public fun MediumFlexibleTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    subtitle: (@Composable () -> Unit)? = null,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
    collapsedHeight: Dp = TopAppBarDefaults.MediumAppBarCollapsedHeight,
    expandedHeight: Dp =
        if (subtitle != null) {
            TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
        } else {
            TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
        },
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    TwoRowsTopAppBar(
        modifier = modifier,
        title = title,
        titleTextStyle = AppBarMediumFlexibleTokens.TitleFont.value,
        smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
        titleBottomPadding = MediumTitleBottomPadding,
        smallTitle = title,
        subtitle = subtitle ?: {},
        subtitleTextStyle = AppBarMediumFlexibleTokens.SubtitleFont.value,

Sources: [live-androidx-material3-material3-material3-appbar-lines-610-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 645–679)

        smallSubtitle = subtitle ?: {},
        smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
        titleHorizontalAlignment = titleHorizontalAlignment,
        navigationIcon = navigationIcon,
        actions = actions,
        collapsedHeight =
            if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                TopAppBarDefaults.MediumAppBarCollapsedHeight
            } else {
                collapsedHeight
            },
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                if (subtitle != null) {
                    TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
                } else {
                    TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
                }
            } else {
                expandedHeight
            },
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design large top app bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * ![Large top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/large-top-app-bar.png)
 *
 * This LargeTopAppBar has slots for a title, navigation icon, and actions. In its default expanded

Sources: [live-androidx-material3-material3-material3-appbar-lines-645-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 680–707)

 * state, the title is displayed in a second row under the navigation and actions.
 *
 * A large top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and expand as
 * content is scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.ExitUntilCollapsedLargeTopAppBar
 * @param title the title to be displayed in the top app bar. This title will be used in the app
 *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
 *   smaller sized [TextStyle]
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
 *   value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.LargeAppBarCollapsedHeight].
 * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
 *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
 *   will be allowed to expand. The expanded height is expected to be greater or equal to the
 *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
 *   this value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.LargeAppBarExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to

Sources: [live-androidx-material3-material3-material3-appbar-lines-680-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 708–742)

 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the
 *   [collapsedHeight]
 */
@Composable
public fun LargeTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    collapsedHeight: Dp = TopAppBarDefaults.LargeAppBarCollapsedHeight,
    expandedHeight: Dp = TopAppBarDefaults.LargeAppBarExpandedHeight,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    TwoRowsTopAppBar(
        title = title,
        titleTextStyle = AppBarLargeTokens.TitleFont.value,
        smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
        titleBottomPadding = LargeTitleBottomPadding,
        smallTitle = title,
        modifier = modifier,
        subtitle = null,
        subtitleTextStyle = TextStyle.Default,
        smallSubtitle = null,
        smallSubtitleTextStyle = TextStyle.Default,
        titleHorizontalAlignment = Alignment.Start,
        navigationIcon = navigationIcon,
        actions = actions,
        collapsedHeight =
            if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                TopAppBarDefaults.LargeAppBarCollapsedHeight
            } else {

Sources: [live-androidx-material3-material3-material3-appbar-lines-708-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 71–105)

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.Saver
import androidx.compose.runtime.saveable.listSaver
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.lerp
import androidx.compose.ui.graphics.takeOrElse
import androidx.compose.ui.input.nestedscroll.NestedScrollConnection
import androidx.compose.ui.input.nestedscroll.NestedScrollSource
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.AlignmentLine
import androidx.compose.ui.layout.IntrinsicMeasurable
import androidx.compose.ui.layout.IntrinsicMeasureScope
import androidx.compose.ui.layout.LastBaseline
import androidx.compose.ui.layout.Layout
import androidx.compose.ui.layout.Measurable
import androidx.compose.ui.layout.MeasurePolicy
import androidx.compose.ui.layout.MeasureResult
import androidx.compose.ui.layout.MeasureScope
import androidx.compose.ui.layout.Placeable
import androidx.compose.ui.layout.layout
import androidx.compose.ui.layout.layoutId
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.semantics.isTraversalGroup

Sources: [live-androidx-material3-material3-material3-appbar-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 743–777)

                collapsedHeight
            },
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                TopAppBarDefaults.LargeAppBarExpandedHeight
            } else {
                expandedHeight
            },
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * [Material Design large flexible top app
 * bar](https://m3.material.io/components/top-app-bar/overview)
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * ![Large top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/large-top-app-bar.png)
 *
 * (Note: The image above shows the standard LargeTopAppBar layout, which is visually identical to
 * this bar when no subtitle is provided.)
 *
 * This `LargeFlexibleTopAppBar` has slots for a title, subtitle, navigation icon, and actions. In
 * its default expanded state, the title and subtitle are displayed in a second row under the
 * navigation and actions.
 *
 * A large flexible top app bar that uses an [ExitUntilCollapsedScrollBehavior] to collapse and
 * expand as content is scrolled looks like:
 *
 * @sample androidx.compose.material3.samples.ExitUntilCollapsedLargeFlexibleTopAppBar
 *
 * A large flexible top app bar with a centered title and subtitle looks like:

Sources: [live-androidx-material3-material3-material3-appbar-lines-743-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 778–804)

 *
 * @sample androidx.compose.material3.samples.LargeFlexibleTopAppBarWithSubtitleAndCenterAligned
 * @param title the title to be displayed in the top app bar. This title will be used in the app
 *   bar's expanded and collapsed states, although in its collapsed state it will be composed with a
 *   smaller sized [TextStyle]
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param subtitle an optional subtitle to be displayed in the top app bar. This subtitle will be
 *   used in the app bar's expanded and collapsed states.
 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
 * @param collapsedHeight this app bar height when collapsed by a provided [scrollBehavior]. This
 *   value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.LargeAppBarCollapsedHeight].
 * @param expandedHeight this app bar's maximum height. When a specified [scrollBehavior] causes the
 *   app bar to collapse or expand, this value will represent the maximum height that the app-bar
 *   will be allowed to expand. The expanded height is expected to be greater or equal to the
 *   [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise. Also,
 *   this value must be specified and finite, otherwise it will be ignored and replaced with
 *   [TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight] or
 *   [TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight].
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be

Sources: [live-androidx-material3-material3-material3-appbar-lines-778-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 805–839)

 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the
 *   [collapsedHeight]
 *
 * @material3expressive
 */
@Composable
public fun LargeFlexibleTopAppBar(
    title: @Composable () -> Unit,
    modifier: Modifier = Modifier,
    subtitle: (@Composable () -> Unit)? = null,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
    collapsedHeight: Dp = TopAppBarDefaults.LargeAppBarCollapsedHeight,
    expandedHeight: Dp =
        if (subtitle != null) {
            TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight
        } else {
            TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight
        },
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
): Unit =
    TwoRowsTopAppBar(
        title = title,
        titleTextStyle = AppBarLargeFlexibleTokens.TitleFont.value,
        smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
        titleBottomPadding = LargeTitleBottomPadding,
        smallTitle = title,
        modifier = modifier,
        subtitle = subtitle ?: {},

Sources: [live-androidx-material3-material3-material3-appbar-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 840–874)

        subtitleTextStyle = AppBarLargeFlexibleTokens.SubtitleFont.value,
        smallSubtitle = subtitle ?: {},
        smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
        titleHorizontalAlignment = titleHorizontalAlignment,
        navigationIcon = navigationIcon,
        actions = actions,
        collapsedHeight =
            if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                TopAppBarDefaults.LargeAppBarCollapsedHeight
            } else {
                collapsedHeight
            },
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                if (subtitle != null) {
                    TopAppBarDefaults.LargeFlexibleAppBarWithSubtitleExpandedHeight
                } else {
                    TopAppBarDefaults.LargeFlexibleAppBarWithoutSubtitleExpandedHeight
                }
            } else {
                expandedHeight
            },
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )

/**
 * A basic two-rows Material Design top app bar.
 *
 * Top app bars display information and actions at the top of a screen.
 *
 * ![Two rows top app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/medium-top-app-bar.png)
 *

Sources: [live-androidx-material3-material3-material3-appbar-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 875–903)

 * (Note: The image above shows the standard MediumTopAppBar layout, which is visually identical to
 * this bar when no subtitle is provided.)
 *
 * This two-rows top app bar has slots for titles and subtitles, navigation icon, and actions. In
 * its default expanded state, the expanded title and subtitle are displayed in a second row under
 * the navigation and actions.
 *
 * By default, the two-rows top app bar will apply the [MediumFlexibleTopAppBar] text styles to the
 * expanded and collapsed titles and subtitles. You may override that by applying your own style to
 * the content you provide in the [title] and [subtitle] slots.
 *
 * A two-rows top app bar that uses a [scrollBehavior] to customize its nested scrolling behavior
 * when working in conjunction with scrolling content looks like:
 *
 * @sample androidx.compose.material3.samples.CustomTwoRowsTopAppBar
 * @param title a lambda for providing a title to be displayed in the top app bar in collapsed and
 *   expanded states. By default, the [MediumFlexibleTopAppBar] title [TextStyle]s are applied to
 *   the Composition (a medium-flexible-app-bar style when `expanded` is `true`, and a small-app-bar
 *   style when `expanded` is `false`), and you may override them on the provided component or by
 *   wrapping it with a composition local. Note that unlike the large or medium top app bars, the
 *   `TwoRowsTopAppBar` does not append bottom padding to the expanded title Composable by default.
 *   Padding should be applied directly to the provided expanded title, or to the [subtitle] that
 *   appears below it.
 * @param modifier the [Modifier] to be applied to this top app bar
 * @param subtitle a lambda for providing an optional subtitle to be displayed in the top app bar in
 *   collapsed and expanded states. By default, the [MediumFlexibleTopAppBar] subtitle [TextStyle]s
 *   are applied to the Composition (a medium-flexible-app-bar style when `expanded` is `true`, and
 *   a small-app-bar style when `expanded` is `false`), and you may override them on the provided
 *   component or by wrapping it with a composition local.

Sources: [live-androidx-material3-material3-material3-appbar-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 904–928)

 * @param navigationIcon the navigation icon displayed at the start of the top app bar. This should
 *   typically be an [IconButton] or [IconToggleButton].
 * @param actions the actions displayed at the end of the top app bar. This should typically be
 *   [IconButton]s. The default layout here is a [Row], so icons inside will be placed horizontally.
 * @param titleHorizontalAlignment the horizontal alignment of the title and subtitle
 * @param collapsedHeight the app bar's height in its collapsed state. Note that this value might be
 *   adjusted to support displaying larger fonts. In case the provided value is [Dp.Unspecified] or
 *   [Dp.Infinity], the height will default to [TopAppBarDefaults.MediumAppBarCollapsedHeight].
 * @param expandedHeight this app bar's height in its expanded state. When a specified
 *   [scrollBehavior] causes the app bar to collapse or expand, this value will represent the total
 *   height that the app-bar will expand to. The expanded height is expected to be greater or equal
 *   to the [collapsedHeight], and the function will throw an [IllegalArgumentException] otherwise.
 *   Note that this value might be adjusted to support displaying larger fonts. In case the provided
 *   value is [Dp.Unspecified] or [Dp.Infinity], the height will default to
 *   [TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight] when a [subtitle] is
 *   provided, or to [TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight] when it's
 *   not.
 * @param windowInsets a window insets that app bar will respect.
 * @param colors [TopAppBarColors] that will be used to resolve the colors used for this top app bar
 *   in different states. See [TopAppBarDefaults.topAppBarColors].
 * @param scrollBehavior a [TopAppBarScrollBehavior] which holds various offset values that will be
 *   applied by this top app bar to set up its height and colors. A scroll behavior is designed to
 *   work in conjunction with a scrolled content to change the top app bar appearance as the content
 *   scrolls. See [TopAppBarScrollBehavior.nestedScrollConnection].
 * @throws IllegalArgumentException if the provided [expandedHeight] is smaller to the

Sources: [live-androidx-material3-material3-material3-appbar-lines-904-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 929–963)

 *   [collapsedHeight]
 *
 * @material3expressive
 */
@Composable
public fun TwoRowsTopAppBar(
    title: @Composable (expanded: Boolean) -> Unit,
    modifier: Modifier = Modifier,
    subtitle: (@Composable (expanded: Boolean) -> Unit)? = null,
    navigationIcon: @Composable () -> Unit = {},
    actions: @Composable RowScope.() -> Unit = {},
    titleHorizontalAlignment: Alignment.Horizontal = Alignment.Start,
    collapsedHeight: Dp = Dp.Unspecified,
    expandedHeight: Dp = Dp.Unspecified,
    windowInsets: WindowInsets = TopAppBarDefaults.windowInsets,
    colors: TopAppBarColors = TopAppBarDefaults.topAppBarColors(),
    scrollBehavior: TopAppBarScrollBehavior? = null,
) {
    TwoRowsTopAppBar(
        title = { title(true) },
        titleTextStyle = AppBarMediumFlexibleTokens.TitleFont.value,
        smallTitleTextStyle = AppBarSmallTokens.TitleFont.value,
        titleBottomPadding = 0.dp,
        smallTitle = { title(false) },
        modifier = modifier,
        subtitle = { subtitle?.invoke(true) },
        subtitleTextStyle = AppBarMediumFlexibleTokens.SubtitleFont.value,
        smallSubtitle = { subtitle?.invoke(false) },
        smallSubtitleTextStyle = AppBarSmallTokens.SubtitleFont.value,
        titleHorizontalAlignment = titleHorizontalAlignment,
        navigationIcon = navigationIcon,
        actions = actions,
        collapsedHeight =
            if (collapsedHeight == Dp.Unspecified || collapsedHeight == Dp.Infinity) {
                // Default to the medium app-bar collapsed height

Sources: [live-androidx-material3-material3-material3-appbar-lines-929-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 964–998)

                TopAppBarDefaults.MediumAppBarCollapsedHeight
            } else {
                collapsedHeight
            },
        expandedHeight =
            if (expandedHeight == Dp.Unspecified || expandedHeight == Dp.Infinity) {
                // Default to the medium app-bar expanded height
                if (subtitle != null) {
                    TopAppBarDefaults.MediumFlexibleAppBarWithSubtitleExpandedHeight
                } else {
                    TopAppBarDefaults.MediumFlexibleAppBarWithoutSubtitleExpandedHeight
                }
            } else {
                expandedHeight
            },
        windowInsets = windowInsets,
        colors = colors,
        scrollBehavior = scrollBehavior,
    )
}

/**
 * [Material Design bottom app bar](https://m3.material.io/components/bottom-app-bar/overview)
 *
 * A bottom app bar displays navigation and key actions at the bottom of small screens.
 *
 * ![Bottom app bar
 * image](https://developer.android.com/images/reference/androidx/compose/material3/bottom-app-bar.png)
 *
 * @sample androidx.compose.material3.samples.SimpleBottomAppBar
 *
 * It can optionally display a [FloatingActionButton] embedded at the end of the BottomAppBar.
 *
 * @sample androidx.compose.material3.samples.BottomAppBarWithFAB
 *

Sources: [live-androidx-material3-material3-material3-appbar-lines-964-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)

## androidx.compose.material3 AppBar.kt source (lines 999–1033)

 * Also see [NavigationBar].
 *
 * @param actions the icon content of this BottomAppBar. The default layout here is a [Row], so
 *   content inside will be placed horizontally.
 * @param modifier the [Modifier] to be applied to this BottomAppBar
 * @param floatingActionButton optional floating action button at the end of this BottomAppBar
 * @param containerColor the color used for the background of this BottomAppBar. Use
 *   [Color.Transparent] to have no color.
 * @param contentColor the preferred color for content inside this BottomAppBar. Defaults to either
 *   the matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param contentPadding the padding applied to the content of this BottomAppBar
 * @param windowInsets a window insets that app bar will respect.
 */
@Deprecated("Maintained for binary compatibility", level = DeprecationLevel.HIDDEN)
@Composable
public fun BottomAppBar(
    actions: @Composable RowScope.() -> Unit,
    modifier: Modifier = Modifier,
    floatingActionButton: @Composable (() -> Unit)? = null,
    containerColor: Color = BottomAppBarDefaults.containerColor,
    contentColor: Color = contentColorFor(containerColor),
    tonalElevation: Dp = BottomAppBarDefaults.ContainerElevation,
    contentPadding: PaddingValues = BottomAppBarDefaults.ContentPadding,
    windowInsets: WindowInsets = BottomAppBarDefaults.windowInsets,
): Unit =
    BottomAppBar(
        actions = actions,
        modifier = modifier,
        floatingActionButton = floatingActionButton,
        containerColor = containerColor,
        contentColor = contentColor,

Sources: [live-androidx-material3-material3-material3-appbar-lines-999-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/AppBar.kt)
