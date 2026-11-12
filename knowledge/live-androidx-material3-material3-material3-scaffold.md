---
type: reference
title: androidx.compose.material3 Scaffold.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-material3-material3-scaffold-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 1
    endLine: 35
    sha256: 81ebeddf2d15c8d661942737ecda6210557f613d2163ed11ecf70a00657aedc1
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

      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.WindowInsets
      import androidx.compose.foundation.layout.asPaddingValues
      import androidx.compose.foundation.layout.calculateEndPadding
      import androidx.compose.foundation.layout.calculateStartPadding
      import androidx.compose.foundation.layout.consumeWindowInsets
      import androidx.compose.foundation.layout.exclude
      import androidx.compose.foundation.layout.onConsumedWindowInsetsChanged
      import androidx.compose.material3.internal.MutableWindowInsets
      import androidx.compose.material3.internal.systemBarsForVisualComponents
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Modifier
  - id: live-androidx-material3-material3-material3-scaffold-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 106
    endLine: 140
    sha256: 526365b04d5c56d263b3247673148e7b7231957234eafd4187276e34cd6ccb4a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              color = containerColor,
              contentColor = contentColor,
          ) {
              ScaffoldLayout(
                  fabPosition = floatingActionButtonPosition,
                  topBar = topBar,
                  bottomBar = bottomBar,
                  content = content,
                  snackbar = snackbarHost,
                  contentWindowInsets = safeInsets,
                  fab = floatingActionButton,
              )
          }
      }

      /**
       * Layout for a [Scaffold]'s content.
       *
       * @param fabPosition [FabPosition] for the FAB (if present)
       * @param topBar the content to place at the top of the [Scaffold], typically a small [TopAppBar]
       * @param content the main 'body' of the [Scaffold]
       * @param snackbar the [Snackbar] displayed on top of the [content]
       * @param fab the [FloatingActionButton] displayed on top of the [content], below the [snackbar] and
       *   above the [bottomBar]
       * @param bottomBar the content to place at the bottom of the [Scaffold], on top of the [content],
       *   typically a [NavigationBar].
       */
      @Composable
      private fun ScaffoldLayout(
          fabPosition: FabPosition,
          topBar: @Composable () -> Unit,
          content: @Composable (PaddingValues) -> Unit,
          snackbar: @Composable () -> Unit,
          fab: @Composable () -> Unit,
          contentWindowInsets: WindowInsets,
  - id: live-androidx-material3-material3-material3-scaffold-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 141
    endLine: 175
    sha256: 1b8f3355b11d63e4e2058b0640f1027dde2d0f6466ba82474c6150ed6de4daa6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          bottomBar: @Composable () -> Unit,
      ) {
          // Create the backing value for the content padding
          // These values will be updated during measurement, but before subcomposing the body content
          // Remembering and updating a single PaddingValues avoids needing to recompose when the values
          // change
          val contentPadding = remember {
              object : PaddingValues {
                  var paddingHolder by mutableStateOf(PaddingValues(0.dp))

                  override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
                      paddingHolder.calculateLeftPadding(layoutDirection)

                  override fun calculateTopPadding(): Dp = paddingHolder.calculateTopPadding()

                  override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
                      paddingHolder.calculateRightPadding(layoutDirection)

                  override fun calculateBottomPadding(): Dp = paddingHolder.calculateBottomPadding()
              }
          }

          SubcomposeLayout { constraints ->
              val layoutWidth = constraints.maxWidth
              val layoutHeight = constraints.maxHeight

              val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)

              // respect only bottom and horizontal for snackbar and fab
              val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
              val rightInset = contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
              val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)

              val topBarPlaceables =
                  subcompose(ScaffoldLayoutContent.TopBar, topBar).fastMap {
  - id: live-androidx-material3-material3-material3-scaffold-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 176
    endLine: 210
    sha256: 6991c8ba68bd69ff5b70b9fa71553d2f4a40fb2984dadaf85e78028a23095a0b
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      it.measure(looseConstraints)
                  }
              val topBarHeight = topBarPlaceables.fastMaxBy { it.height }?.height ?: 0

              val snackbarPlaceables =
                  subcompose(ScaffoldLayoutContent.Snackbar, snackbar).fastMap {
                      it.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
                  }

              val snackbarHeight = snackbarPlaceables.fastMaxBy { it.height }?.height ?: 0
              val snackbarWidth = snackbarPlaceables.fastMaxBy { it.width }?.width ?: 0

              val fabPlaceables =
                  subcompose(ScaffoldLayoutContent.Fab, fab).fastMapNotNull { measurable ->
                      measurable
                          .measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
                          .takeIf { it.height != 0 && it.width != 0 }
                  }

              val fabPlacement =
                  if (fabPlaceables.isNotEmpty()) {
                      val fabWidth = fabPlaceables.fastMaxBy { it.width }!!.width
                      val fabHeight = fabPlaceables.fastMaxBy { it.height }!!.height
                      // FAB distance from the left of the layout, taking into account LTR / RTL
                      val fabLeftOffset =
                          when (fabPosition) {
                              FabPosition.Start -> {
                                  if (layoutDirection == LayoutDirection.Ltr) {
                                      FabSpacing.roundToPx() + leftInset
                                  } else {
                                      layoutWidth - FabSpacing.roundToPx() - fabWidth - rightInset
                                  }
                              }

                              FabPosition.End,
  - id: live-androidx-material3-material3-material3-scaffold-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 211
    endLine: 245
    sha256: 1c3afb11214af342db7dd70448aed32ce072d65267d1aa8647e83b4280dd205f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
                              FabPosition.EndOverlay -> {
                                  if (layoutDirection == LayoutDirection.Ltr) {
                                      layoutWidth - FabSpacing.roundToPx() - fabWidth - rightInset
                                  } else {
                                      FabSpacing.roundToPx() + leftInset
                                  }
                              }

                              else -> (layoutWidth - fabWidth + leftInset - rightInset) / 2
                          }

                      FabPlacement(left = fabLeftOffset, width = fabWidth, height = fabHeight)
                  } else {
                      null
                  }

              val bottomBarPlaceables =
                  subcompose(ScaffoldLayoutContent.BottomBar, bottomBar).fastMap {
                      it.measure(looseConstraints)
                  }

              val bottomBarHeight = bottomBarPlaceables.fastMaxBy { it.height }?.height

              val fabOffsetFromBottom = fabPlacement?.let {
                  if (bottomBarHeight == null || fabPosition == FabPosition.EndOverlay) {
                      it.height +
                          FabSpacing.roundToPx() +
                          contentWindowInsets.getBottom(this@SubcomposeLayout)
                  } else {
                      // Total height is the bottom bar height + the FAB height + the padding
                      // between the FAB and bottom bar
                      bottomBarHeight + it.height + FabSpacing.roundToPx()
                  }
              }
  - id: live-androidx-material3-material3-material3-scaffold-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 246
    endLine: 280
    sha256: 78020571f0b872955de556f4a4d15122d62d7efd2fa4feb677347fc2b0af9990
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val snackbarOffsetFromBottom =
                  if (snackbarHeight != 0) {
                      snackbarHeight +
                          (fabOffsetFromBottom
                              ?: bottomBarHeight
                              ?: contentWindowInsets.getBottom(this@SubcomposeLayout))
                  } else {
                      0
                  }

              // Update the backing state for the content padding before subcomposing the body
              val insets = contentWindowInsets.asPaddingValues(this)
              contentPadding.paddingHolder =
                  PaddingValues(
                      top =
                          if (topBarPlaceables.isEmpty()) {
                              insets.calculateTopPadding()
                          } else {
                              topBarHeight.toDp()
                          },
                      bottom = bottomBarHeight?.toDp() ?: insets.calculateBottomPadding(),
                      start = insets.calculateStartPadding(layoutDirection),
                      end = insets.calculateEndPadding(layoutDirection),
                  )

              @Suppress("ComposableLambdaInMeasurePolicy")
              val bodyContentPlaceables =
                  subcompose(ScaffoldLayoutContent.MainContent) { content(contentPadding) }
                      .fastMap { it.measure(looseConstraints) }

              layout(layoutWidth, layoutHeight) {
                  // Placing to have correct keyboard focus order and setting zIndex to control drawing
                  // order to match default elevation of each placeable.
                  topBarPlaceables.fastForEach { it.place(0, 0, zIndex = TopBarZIndex) }
                  bodyContentPlaceables.fastForEach { it.place(0, 0, zIndex = ContentZIndex) }
  - id: live-androidx-material3-material3-material3-scaffold-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 281
    endLine: 315
    sha256: 885b56ce2bec7a2db9c3b93a4862c915bea7a830f8fd3aec3ed24400abedaadc
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  snackbarPlaceables.fastForEach {
                      it.place(
                          (layoutWidth - snackbarWidth +
                              contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection) -
                              contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)) / 2,
                          layoutHeight - snackbarOffsetFromBottom,
                          zIndex = SnackbarZIndex,
                      )
                  }
                  // Explicitly not using placeRelative here as `leftOffset` already accounts for RTL
                  fabPlacement?.let { placement ->
                      fabPlaceables.fastForEach {
                          it.place(
                              placement.left,
                              layoutHeight - fabOffsetFromBottom!!,
                              zIndex = FabZIndex,
                          )
                      }
                  }
                  // The bottom bar is always at the bottom of the layout
                  bottomBarPlaceables.fastForEach {
                      it.place(0, layoutHeight - (bottomBarHeight ?: 0), zIndex = BottomBarZIndex)
                  }
              }
          }
      }

      /** Object containing various default values for [Scaffold] component. */
      public object ScaffoldDefaults {
          /** Default insets to be used and consumed by the scaffold content slot */
          public val contentWindowInsets: WindowInsets
              @Composable get() = WindowInsets.systemBarsForVisualComponents
      }

      /** The possible positions for a [FloatingActionButton] attached to a [Scaffold]. */
  - id: live-androidx-material3-material3-material3-scaffold-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 316
    endLine: 350
    sha256: 82356e78d0fea3ba39f5f580d51cffa3e6e6e4dcb74592f2488923958a725d24
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @kotlin.jvm.JvmInline
      public value class FabPosition internal constructor(@Suppress("unused") private val value: Int) {
          public companion object {
              /**
               * Position FAB at the bottom of the screen at the start, above the [NavigationBar] (if it
               * exists)
               */
              public val Start: FabPosition
                  get() = FabPosition(0)

              /**
               * Position FAB at the bottom of the screen in the center, above the [NavigationBar] (if it
               * exists)
               */
              public val Center: FabPosition
                  get() = FabPosition(1)

              /**
               * Position FAB at the bottom of the screen at the end, above the [NavigationBar] (if it
               * exists)
               */
              public val End: FabPosition
                  get() = FabPosition(2)

              /**
               * Position FAB at the bottom of the screen at the end, overlaying the [NavigationBar] (if
               * it exists)
               */
              public val EndOverlay: FabPosition
                  get() = FabPosition(3)
          }

          public override fun toString(): String {
              return when (this) {
                  Start -> "FabPosition.Start"
  - id: live-androidx-material3-material3-material3-scaffold-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 351
    endLine: 385
    sha256: 498ab7c38d124eaea222f24dca8037f63a626bc6dd74ad9145d9937b05b6f5db
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  Center -> "FabPosition.Center"
                  End -> "FabPosition.End"
                  else -> "FabPosition.EndOverlay"
              }
          }
      }

      /**
       * Placement information for a [FloatingActionButton] inside a [Scaffold].
       *
       * @property left the FAB's offset from the left edge of the bottom bar, already adjusted for RTL
       *   support
       * @property width the width of the FAB
       * @property height the height of the FAB
       */
      @Immutable internal class FabPlacement(val left: Int, val width: Int, val height: Int)

      // FAB spacing above the bottom bar / bottom of the Scaffold
      private val FabSpacing
          get() = 16.dp

      // Z-indices for the different scaffold layout contents
      private const val ContentZIndex = 0f
      private const val TopBarZIndex = 1f
      private const val SnackbarZIndex = 2f
      private const val BottomBarZIndex = 3f
      private const val FabZIndex = 4f

      private enum class ScaffoldLayoutContent {
          TopBar,
          MainContent,
          Snackbar,
          Fab,
          BottomBar,
      }
  - id: live-androidx-material3-material3-material3-scaffold-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 36
    endLine: 70
    sha256: 43d48be7aea6357df588267b5dfc400a4063cfa671e6b4ef80e863c69fb0b04a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.layout.SubcomposeLayout
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.offset
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastMap
      import androidx.compose.ui.util.fastMapNotNull
      import androidx.compose.ui.util.fastMaxBy

      /**
       * [Material Design layout](https://m3.material.io/foundations/layout/understanding-layout/)
       *
       * Scaffold implements the basic Material Design visual layout structure.
       *
       * This component provides API to put together several Material components to construct your screen,
       * by ensuring proper layout strategy for them and collecting necessary data so these components
       * will work together correctly.
       *
       * Simple example of a Scaffold with [TopAppBar] and [FloatingActionButton]:
       *
       * @sample androidx.compose.material3.samples.SimpleScaffoldWithTopBar
       *
       * To show a [Snackbar], use [SnackbarHostState.showSnackbar].
       *
       * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
       * @param modifier the [Modifier] to be applied to this scaffold
       * @param topBar top app bar of the screen, typically a [TopAppBar]
       * @param bottomBar bottom bar of the screen, typically a [NavigationBar]
       * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
       *   [SnackbarHostState.showSnackbar], typically a [SnackbarHost]
       * @param floatingActionButton Main action button of the screen, typically a [FloatingActionButton]
       * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition].
       * @param containerColor the color used for the background of this scaffold. Use [Color.Transparent]
  - id: live-androidx-material3-material3-material3-scaffold-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt
    startLine: 71
    endLine: 105
    sha256: 06af57696efa3c7313cbd165d943a09e8077aa3521243716b0d9658aba7240e0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   to have no color.
       * @param contentColor the preferred color for content inside this scaffold. Defaults to either the
       *   matching content color for [containerColor], or to the current [LocalContentColor] if
       *   [containerColor] is not a color from the theme.
       * @param contentWindowInsets window insets to be passed to [content] slot via [PaddingValues]
       *   params. Scaffold will take the insets into account from the top/bottom only if the [topBar]/
       *   [bottomBar] are not present, as the scaffold expect [topBar]/[bottomBar] to handle insets
       *   instead. Any insets consumed by other insets padding modifiers or [consumeWindowInsets] on a
       *   parent layout will be excluded from [contentWindowInsets].
       * @param content content of the screen. The lambda receives a [PaddingValues] that should be
       *   applied to the content root via [androidx.compose.foundation.layout.padding] and
       *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
       *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
       *   of the scroll, and not on the scroll itself.
       */
      @Composable
      public fun Scaffold(
          modifier: Modifier = Modifier,
          topBar: @Composable () -> Unit = {},
          bottomBar: @Composable () -> Unit = {},
          snackbarHost: @Composable () -> Unit = {},
          floatingActionButton: @Composable () -> Unit = {},
          floatingActionButtonPosition: FabPosition = FabPosition.End,
          containerColor: Color = MaterialTheme.colorScheme.background,
          contentColor: Color = contentColorFor(containerColor),
          contentWindowInsets: WindowInsets = ScaffoldDefaults.contentWindowInsets,
          content: @Composable (PaddingValues) -> Unit,
      ) {
          val safeInsets = remember(contentWindowInsets) { MutableWindowInsets(contentWindowInsets) }
          Surface(
              modifier =
                  modifier.onConsumedWindowInsetsChanged { consumedWindowInsets ->
                      // Exclude currently consumed window insets from user provided contentWindowInsets
                      safeInsets.insets = contentWindowInsets.exclude(consumedWindowInsets)
                  },
compose:
  id: live-androidx-material3-material3-material3-scaffold
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3
  sections:
    - id: live-androidx-material3-material3-material3-scaffold-lines-1
      title: androidx.compose.material3 Scaffold.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-106
      title: androidx.compose.material3 Scaffold.kt source (lines 106–140)
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-141
      title: androidx.compose.material3 Scaffold.kt source (lines 141–175)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-176
      title: androidx.compose.material3 Scaffold.kt source (lines 176–210)
      aliases:
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-211
      title: androidx.compose.material3 Scaffold.kt source (lines 211–245)
      aliases:
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-246
      title: androidx.compose.material3 Scaffold.kt source (lines 246–280)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-281
      title: androidx.compose.material3 Scaffold.kt source (lines 281–315)
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.ScaffoldDefaults
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-316
      title: androidx.compose.material3 Scaffold.kt source (lines 316–350)
      aliases:
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-351
      title: androidx.compose.material3 Scaffold.kt source (lines 351–385)
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-36
      title: androidx.compose.material3 Scaffold.kt source (lines 36–70)
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-material3-material3-scaffold-lines-71
      title: androidx.compose.material3 Scaffold.kt source (lines 71–105)
      aliases:
        - androidx.compose.material3.Scaffold
        - androidx.compose.material3.ScaffoldDefaults
        - androidx.compose.material3.FabPosition
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-material3-material3-scaffold-lines-71-source
      relatedIds: []
---

# androidx.compose.material3 Scaffold.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt

## androidx.compose.material3 Scaffold.kt source (lines 1–35)

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

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.exclude
import androidx.compose.foundation.layout.onConsumedWindowInsetsChanged
import androidx.compose.material3.internal.MutableWindowInsets
import androidx.compose.material3.internal.systemBarsForVisualComponents
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier

Sources: [live-androidx-material3-material3-material3-scaffold-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 106–140)

        color = containerColor,
        contentColor = contentColor,
    ) {
        ScaffoldLayout(
            fabPosition = floatingActionButtonPosition,
            topBar = topBar,
            bottomBar = bottomBar,
            content = content,
            snackbar = snackbarHost,
            contentWindowInsets = safeInsets,
            fab = floatingActionButton,
        )
    }
}

/**
 * Layout for a [Scaffold]'s content.
 *
 * @param fabPosition [FabPosition] for the FAB (if present)
 * @param topBar the content to place at the top of the [Scaffold], typically a small [TopAppBar]
 * @param content the main 'body' of the [Scaffold]
 * @param snackbar the [Snackbar] displayed on top of the [content]
 * @param fab the [FloatingActionButton] displayed on top of the [content], below the [snackbar] and
 *   above the [bottomBar]
 * @param bottomBar the content to place at the bottom of the [Scaffold], on top of the [content],
 *   typically a [NavigationBar].
 */
@Composable
private fun ScaffoldLayout(
    fabPosition: FabPosition,
    topBar: @Composable () -> Unit,
    content: @Composable (PaddingValues) -> Unit,
    snackbar: @Composable () -> Unit,
    fab: @Composable () -> Unit,
    contentWindowInsets: WindowInsets,

Sources: [live-androidx-material3-material3-material3-scaffold-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 141–175)

    bottomBar: @Composable () -> Unit,
) {
    // Create the backing value for the content padding
    // These values will be updated during measurement, but before subcomposing the body content
    // Remembering and updating a single PaddingValues avoids needing to recompose when the values
    // change
    val contentPadding = remember {
        object : PaddingValues {
            var paddingHolder by mutableStateOf(PaddingValues(0.dp))

            override fun calculateLeftPadding(layoutDirection: LayoutDirection): Dp =
                paddingHolder.calculateLeftPadding(layoutDirection)

            override fun calculateTopPadding(): Dp = paddingHolder.calculateTopPadding()

            override fun calculateRightPadding(layoutDirection: LayoutDirection): Dp =
                paddingHolder.calculateRightPadding(layoutDirection)

            override fun calculateBottomPadding(): Dp = paddingHolder.calculateBottomPadding()
        }
    }

    SubcomposeLayout { constraints ->
        val layoutWidth = constraints.maxWidth
        val layoutHeight = constraints.maxHeight

        val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)

        // respect only bottom and horizontal for snackbar and fab
        val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
        val rightInset = contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
        val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)

        val topBarPlaceables =
            subcompose(ScaffoldLayoutContent.TopBar, topBar).fastMap {

Sources: [live-androidx-material3-material3-material3-scaffold-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 176–210)

                it.measure(looseConstraints)
            }
        val topBarHeight = topBarPlaceables.fastMaxBy { it.height }?.height ?: 0

        val snackbarPlaceables =
            subcompose(ScaffoldLayoutContent.Snackbar, snackbar).fastMap {
                it.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
            }

        val snackbarHeight = snackbarPlaceables.fastMaxBy { it.height }?.height ?: 0
        val snackbarWidth = snackbarPlaceables.fastMaxBy { it.width }?.width ?: 0

        val fabPlaceables =
            subcompose(ScaffoldLayoutContent.Fab, fab).fastMapNotNull { measurable ->
                measurable
                    .measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
                    .takeIf { it.height != 0 && it.width != 0 }
            }

        val fabPlacement =
            if (fabPlaceables.isNotEmpty()) {
                val fabWidth = fabPlaceables.fastMaxBy { it.width }!!.width
                val fabHeight = fabPlaceables.fastMaxBy { it.height }!!.height
                // FAB distance from the left of the layout, taking into account LTR / RTL
                val fabLeftOffset =
                    when (fabPosition) {
                        FabPosition.Start -> {
                            if (layoutDirection == LayoutDirection.Ltr) {
                                FabSpacing.roundToPx() + leftInset
                            } else {
                                layoutWidth - FabSpacing.roundToPx() - fabWidth - rightInset
                            }
                        }

                        FabPosition.End,

Sources: [live-androidx-material3-material3-material3-scaffold-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 211–245)

                        FabPosition.EndOverlay -> {
                            if (layoutDirection == LayoutDirection.Ltr) {
                                layoutWidth - FabSpacing.roundToPx() - fabWidth - rightInset
                            } else {
                                FabSpacing.roundToPx() + leftInset
                            }
                        }

                        else -> (layoutWidth - fabWidth + leftInset - rightInset) / 2
                    }

                FabPlacement(left = fabLeftOffset, width = fabWidth, height = fabHeight)
            } else {
                null
            }

        val bottomBarPlaceables =
            subcompose(ScaffoldLayoutContent.BottomBar, bottomBar).fastMap {
                it.measure(looseConstraints)
            }

        val bottomBarHeight = bottomBarPlaceables.fastMaxBy { it.height }?.height

        val fabOffsetFromBottom = fabPlacement?.let {
            if (bottomBarHeight == null || fabPosition == FabPosition.EndOverlay) {
                it.height +
                    FabSpacing.roundToPx() +
                    contentWindowInsets.getBottom(this@SubcomposeLayout)
            } else {
                // Total height is the bottom bar height + the FAB height + the padding
                // between the FAB and bottom bar
                bottomBarHeight + it.height + FabSpacing.roundToPx()
            }
        }


Sources: [live-androidx-material3-material3-material3-scaffold-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 246–280)

        val snackbarOffsetFromBottom =
            if (snackbarHeight != 0) {
                snackbarHeight +
                    (fabOffsetFromBottom
                        ?: bottomBarHeight
                        ?: contentWindowInsets.getBottom(this@SubcomposeLayout))
            } else {
                0
            }

        // Update the backing state for the content padding before subcomposing the body
        val insets = contentWindowInsets.asPaddingValues(this)
        contentPadding.paddingHolder =
            PaddingValues(
                top =
                    if (topBarPlaceables.isEmpty()) {
                        insets.calculateTopPadding()
                    } else {
                        topBarHeight.toDp()
                    },
                bottom = bottomBarHeight?.toDp() ?: insets.calculateBottomPadding(),
                start = insets.calculateStartPadding(layoutDirection),
                end = insets.calculateEndPadding(layoutDirection),
            )

        @Suppress("ComposableLambdaInMeasurePolicy")
        val bodyContentPlaceables =
            subcompose(ScaffoldLayoutContent.MainContent) { content(contentPadding) }
                .fastMap { it.measure(looseConstraints) }

        layout(layoutWidth, layoutHeight) {
            // Placing to have correct keyboard focus order and setting zIndex to control drawing
            // order to match default elevation of each placeable.
            topBarPlaceables.fastForEach { it.place(0, 0, zIndex = TopBarZIndex) }
            bodyContentPlaceables.fastForEach { it.place(0, 0, zIndex = ContentZIndex) }

Sources: [live-androidx-material3-material3-material3-scaffold-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 281–315)

            snackbarPlaceables.fastForEach {
                it.place(
                    (layoutWidth - snackbarWidth +
                        contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection) -
                        contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)) / 2,
                    layoutHeight - snackbarOffsetFromBottom,
                    zIndex = SnackbarZIndex,
                )
            }
            // Explicitly not using placeRelative here as `leftOffset` already accounts for RTL
            fabPlacement?.let { placement ->
                fabPlaceables.fastForEach {
                    it.place(
                        placement.left,
                        layoutHeight - fabOffsetFromBottom!!,
                        zIndex = FabZIndex,
                    )
                }
            }
            // The bottom bar is always at the bottom of the layout
            bottomBarPlaceables.fastForEach {
                it.place(0, layoutHeight - (bottomBarHeight ?: 0), zIndex = BottomBarZIndex)
            }
        }
    }
}

/** Object containing various default values for [Scaffold] component. */
public object ScaffoldDefaults {
    /** Default insets to be used and consumed by the scaffold content slot */
    public val contentWindowInsets: WindowInsets
        @Composable get() = WindowInsets.systemBarsForVisualComponents
}

/** The possible positions for a [FloatingActionButton] attached to a [Scaffold]. */

Sources: [live-androidx-material3-material3-material3-scaffold-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 316–350)

@kotlin.jvm.JvmInline
public value class FabPosition internal constructor(@Suppress("unused") private val value: Int) {
    public companion object {
        /**
         * Position FAB at the bottom of the screen at the start, above the [NavigationBar] (if it
         * exists)
         */
        public val Start: FabPosition
            get() = FabPosition(0)

        /**
         * Position FAB at the bottom of the screen in the center, above the [NavigationBar] (if it
         * exists)
         */
        public val Center: FabPosition
            get() = FabPosition(1)

        /**
         * Position FAB at the bottom of the screen at the end, above the [NavigationBar] (if it
         * exists)
         */
        public val End: FabPosition
            get() = FabPosition(2)

        /**
         * Position FAB at the bottom of the screen at the end, overlaying the [NavigationBar] (if
         * it exists)
         */
        public val EndOverlay: FabPosition
            get() = FabPosition(3)
    }

    public override fun toString(): String {
        return when (this) {
            Start -> "FabPosition.Start"

Sources: [live-androidx-material3-material3-material3-scaffold-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 351–385)

            Center -> "FabPosition.Center"
            End -> "FabPosition.End"
            else -> "FabPosition.EndOverlay"
        }
    }
}

/**
 * Placement information for a [FloatingActionButton] inside a [Scaffold].
 *
 * @property left the FAB's offset from the left edge of the bottom bar, already adjusted for RTL
 *   support
 * @property width the width of the FAB
 * @property height the height of the FAB
 */
@Immutable internal class FabPlacement(val left: Int, val width: Int, val height: Int)

// FAB spacing above the bottom bar / bottom of the Scaffold
private val FabSpacing
    get() = 16.dp

// Z-indices for the different scaffold layout contents
private const val ContentZIndex = 0f
private const val TopBarZIndex = 1f
private const val SnackbarZIndex = 2f
private const val BottomBarZIndex = 3f
private const val FabZIndex = 4f

private enum class ScaffoldLayoutContent {
    TopBar,
    MainContent,
    Snackbar,
    Fab,
    BottomBar,
}

Sources: [live-androidx-material3-material3-material3-scaffold-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 36–70)

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.SubcomposeLayout
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.offset
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastMap
import androidx.compose.ui.util.fastMapNotNull
import androidx.compose.ui.util.fastMaxBy

/**
 * [Material Design layout](https://m3.material.io/foundations/layout/understanding-layout/)
 *
 * Scaffold implements the basic Material Design visual layout structure.
 *
 * This component provides API to put together several Material components to construct your screen,
 * by ensuring proper layout strategy for them and collecting necessary data so these components
 * will work together correctly.
 *
 * Simple example of a Scaffold with [TopAppBar] and [FloatingActionButton]:
 *
 * @sample androidx.compose.material3.samples.SimpleScaffoldWithTopBar
 *
 * To show a [Snackbar], use [SnackbarHostState.showSnackbar].
 *
 * @sample androidx.compose.material3.samples.ScaffoldWithSimpleSnackbar
 * @param modifier the [Modifier] to be applied to this scaffold
 * @param topBar top app bar of the screen, typically a [TopAppBar]
 * @param bottomBar bottom bar of the screen, typically a [NavigationBar]
 * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
 *   [SnackbarHostState.showSnackbar], typically a [SnackbarHost]
 * @param floatingActionButton Main action button of the screen, typically a [FloatingActionButton]
 * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition].
 * @param containerColor the color used for the background of this scaffold. Use [Color.Transparent]

Sources: [live-androidx-material3-material3-material3-scaffold-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)

## androidx.compose.material3 Scaffold.kt source (lines 71–105)

 *   to have no color.
 * @param contentColor the preferred color for content inside this scaffold. Defaults to either the
 *   matching content color for [containerColor], or to the current [LocalContentColor] if
 *   [containerColor] is not a color from the theme.
 * @param contentWindowInsets window insets to be passed to [content] slot via [PaddingValues]
 *   params. Scaffold will take the insets into account from the top/bottom only if the [topBar]/
 *   [bottomBar] are not present, as the scaffold expect [topBar]/[bottomBar] to handle insets
 *   instead. Any insets consumed by other insets padding modifiers or [consumeWindowInsets] on a
 *   parent layout will be excluded from [contentWindowInsets].
 * @param content content of the screen. The lambda receives a [PaddingValues] that should be
 *   applied to the content root via [androidx.compose.foundation.layout.padding] and
 *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
 *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
 *   of the scroll, and not on the scroll itself.
 */
@Composable
public fun Scaffold(
    modifier: Modifier = Modifier,
    topBar: @Composable () -> Unit = {},
    bottomBar: @Composable () -> Unit = {},
    snackbarHost: @Composable () -> Unit = {},
    floatingActionButton: @Composable () -> Unit = {},
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    containerColor: Color = MaterialTheme.colorScheme.background,
    contentColor: Color = contentColorFor(containerColor),
    contentWindowInsets: WindowInsets = ScaffoldDefaults.contentWindowInsets,
    content: @Composable (PaddingValues) -> Unit,
) {
    val safeInsets = remember(contentWindowInsets) { MutableWindowInsets(contentWindowInsets) }
    Surface(
        modifier =
            modifier.onConsumedWindowInsetsChanged { consumedWindowInsets ->
                // Exclude currently consumed window insets from user provided contentWindowInsets
                safeInsets.insets = contentWindowInsets.exclude(consumedWindowInsets)
            },

Sources: [live-androidx-material3-material3-material3-scaffold-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/Scaffold.kt)
