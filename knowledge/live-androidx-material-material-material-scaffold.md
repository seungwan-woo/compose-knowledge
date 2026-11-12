---
type: reference
title: androidx.compose.material Scaffold.kt source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material-material-material-scaffold-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 1
    endLine: 35
    sha256: 0e980b143f443f7f9f94c094463cdb17848d5887fbe097b81c45855a210f0b6a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      /*
       * Copyright 2019 The Android Open Source Project
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

      package androidx.compose.material

      import androidx.compose.foundation.layout.ColumnScope
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.WindowInsets
      import androidx.compose.foundation.layout.asPaddingValues
      import androidx.compose.foundation.layout.calculateEndPadding
      import androidx.compose.foundation.layout.calculateStartPadding
      import androidx.compose.foundation.layout.consumeWindowInsets
      import androidx.compose.foundation.layout.exclude
      import androidx.compose.foundation.layout.onConsumedWindowInsetsChanged
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.CompositionLocalProvider
      import androidx.compose.runtime.Immutable
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
  - id: live-androidx-material-material-material-scaffold-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 106
    endLine: 140
    sha256: 52fe625f5f592fe08cc795a77c71aacaf7b031ae195127f8b860a6b572291518
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          override fun toString(): String {
              return when (this) {
                  Start -> "FabPosition.Start"
                  Center -> "FabPosition.Center"
                  else -> "FabPosition.End"
              }
          }
      }

      /**
       * [Material Design layout](https://material.io/design/layout/understanding-layout.html)
       *
       * Scaffold implements the basic Material Design visual layout structure.
       *
       * This component provides API to put together several Material components to construct your screen,
       * by ensuring proper layout strategy for them and collecting necessary data so these components
       * will work together correctly.
       *
       * For similar components that implement different layout structures, see [BackdropScaffold], which
       * uses a backdrop as the centerpiece of the screen, and [BottomSheetScaffold], which uses a
       * persistent bottom sheet as the centerpiece of the screen.
       *
       * This particular overload provides ability to specify [WindowInsets]. Recommended value can be
       * found in [ScaffoldDefaults.contentWindowInsets].
       *
       * Simple example of a Scaffold with [TopAppBar], [FloatingActionButton] and drawer:
       *
       * @sample androidx.compose.material.samples.SimpleScaffoldWithTopBar
       *
       * More fancy usage with [BottomAppBar] with cutout and docked [FloatingActionButton], which
       * animates its shape when clicked:
       *
       * @sample androidx.compose.material.samples.ScaffoldWithBottomBarAndCutout
       *
       * To show a [Snackbar], use [SnackbarHostState.showSnackbar]. Scaffold state already have
  - id: live-androidx-material-material-material-scaffold-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 141
    endLine: 170
    sha256: 07cc6419577887b1f3a751c76b5a400f8574bf1f3d9b427b22d77f54d542c3a0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * [ScaffoldState.snackbarHostState] when created.
       *
       * @sample androidx.compose.material.samples.ScaffoldWithSimpleSnackbar
       * @param contentWindowInsets window insets to be passed to [content] slot via [PaddingValues]
       *   params. Scaffold will take the insets into account from the top/bottom only if the [topBar]/
       *   [bottomBar] are not present, as the scaffold expect [topBar]/[bottomBar] to handle insets
       *   instead. Any insets consumed by other insets padding modifiers or [consumeWindowInsets] on a
       *   parent layout will be excluded from [contentWindowInsets].
       * @param modifier optional Modifier for the root of the [Scaffold]
       * @param scaffoldState state of this scaffold widget. It contains the state of the screen, e.g.
       *   variables to provide manual control over the drawer behavior, sizes of components, etc
       * @param topBar top app bar of the screen. Consider using [TopAppBar].
       * @param bottomBar bottom bar of the screen. Consider using [BottomAppBar].
       * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
       *   [SnackbarHostState.showSnackbar]. Usually it's a [SnackbarHost]
       * @param floatingActionButton Main action button of your screen. Consider using
       *   [FloatingActionButton] for this slot.
       * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition] for
       *   possible options available.
       * @param isFloatingActionButtonDocked whether [floatingActionButton] should overlap with
       *   [bottomBar] for half a height, if [bottomBar] exists. Ignored if there's no [bottomBar] or no
       *   [floatingActionButton].
       * @param drawerContent content of the Drawer sheet that can be pulled from the left side (right for
       *   RTL).
       * @param drawerGesturesEnabled whether or not drawer (if set) can be interacted with via gestures
       * @param drawerShape shape of the drawer sheet (if set)
       * @param drawerElevation drawer sheet elevation. This controls the size of the shadow below the
       *   drawer sheet (if set)
       * @param drawerBackgroundColor background color to be used for the drawer sheet
       * @param drawerContentColor color of the content to use inside the drawer sheet. Defaults to either
  - id: live-androidx-material-material-material-scaffold-lines-171-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 171
    endLine: 205
    sha256: ad7dddfbd80b8abaf40c1f01f63649fcdfd20750bae5d2796cf2baba846246c2
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       *   the matching content color for [drawerBackgroundColor], or, if it is not a color from the
       *   theme, this will keep the same value set above this Surface.
       * @param drawerScrimColor color of the scrim that obscures content when the drawer is open
       * @param backgroundColor background of the scaffold body
       * @param contentColor color of the content in scaffold body. Defaults to either the matching
       *   content color for [backgroundColor], or, if it is not a color from the theme, this will keep
       *   the same value set above this Surface.
       * @param content content of your screen. The lambda receives an [PaddingValues] that should be
       *   applied to the content root via [androidx.compose.foundation.layout.padding] and
       *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
       *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
       *   of the scroll, and not on the scroll itself.
       */
      @Composable
      public fun Scaffold(
          contentWindowInsets: WindowInsets,
          modifier: Modifier = Modifier,
          scaffoldState: ScaffoldState = rememberScaffoldState(),
          topBar: @Composable () -> Unit = {},
          bottomBar: @Composable () -> Unit = {},
          snackbarHost: @Composable (SnackbarHostState) -> Unit = { SnackbarHost(it) },
          floatingActionButton: @Composable () -> Unit = {},
          floatingActionButtonPosition: FabPosition = FabPosition.End,
          isFloatingActionButtonDocked: Boolean = false,
          drawerContent: @Composable (ColumnScope.() -> Unit)? = null,
          drawerGesturesEnabled: Boolean = true,
          drawerShape: Shape = MaterialTheme.shapes.large,
          drawerElevation: Dp = DrawerDefaults.Elevation,
          drawerBackgroundColor: Color = MaterialTheme.colors.surface,
          drawerContentColor: Color = contentColorFor(drawerBackgroundColor),
          drawerScrimColor: Color = DrawerDefaults.scrimColor,
          backgroundColor: Color = MaterialTheme.colors.background,
          contentColor: Color = contentColorFor(backgroundColor),
          content: @Composable (PaddingValues) -> Unit,
      ) {
  - id: live-androidx-material-material-material-scaffold-lines-206-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 206
    endLine: 240
    sha256: 248165f3b58e281d8e76ee1bacebaace881d81786e0a5c04a3de3d198ed941d8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          val safeInsets = remember(contentWindowInsets) { MutableWindowInsets(contentWindowInsets) }
          val child =
              @Composable { childModifier: Modifier ->
                  Surface(
                      modifier =
                          childModifier.onConsumedWindowInsetsChanged { consumedWindowInsets ->
                              // Exclude currently consumed window insets from user provided
                              // contentWindowInsets
                              safeInsets.insets = contentWindowInsets.exclude(consumedWindowInsets)
                          },
                      color = backgroundColor,
                      contentColor = contentColor,
                  ) {
                      ScaffoldLayout(
                          isFabDocked = isFloatingActionButtonDocked,
                          fabPosition = floatingActionButtonPosition,
                          topBar = topBar,
                          content = content,
                          contentWindowInsets = safeInsets,
                          snackbar = { snackbarHost(scaffoldState.snackbarHostState) },
                          fab = floatingActionButton,
                          bottomBar = bottomBar,
                      )
                  }
              }

          if (drawerContent != null) {
              ModalDrawer(
                  modifier = modifier,
                  drawerState = scaffoldState.drawerState,
                  gesturesEnabled = drawerGesturesEnabled,
                  drawerContent = drawerContent,
                  drawerShape = drawerShape,
                  drawerElevation = drawerElevation,
                  drawerBackgroundColor = drawerBackgroundColor,
  - id: live-androidx-material-material-material-scaffold-lines-241-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 241
    endLine: 275
    sha256: 7a6f9bee9e7958d56c722febfa012c1abb0975dd10741c8fd343a20f3e8f70a1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  drawerContentColor = drawerContentColor,
                  scrimColor = drawerScrimColor,
                  content = { child(Modifier) },
              )
          } else {
              child(modifier)
          }
      }

      /**
       * [Material Design layout](https://material.io/design/layout/understanding-layout.html)
       *
       * Scaffold implements the basic Material Design visual layout structure.
       *
       * This component provides API to put together several Material components to construct your screen,
       * by ensuring proper layout strategy for them and collecting necessary data so these components
       * will work together correctly.
       *
       * For similar components that implement different layout structures, see [BackdropScaffold], which
       * uses a backdrop as the centerpiece of the screen, and [BottomSheetScaffold], which uses a
       * persistent bottom sheet as the centerpiece of the screen.
       *
       * Simple example of a Scaffold with [TopAppBar], [FloatingActionButton] and drawer:
       *
       * @sample androidx.compose.material.samples.SimpleScaffoldWithTopBar
       *
       * More fancy usage with [BottomAppBar] with cutout and docked [FloatingActionButton], which
       * animates its shape when clicked:
       *
       * @sample androidx.compose.material.samples.ScaffoldWithBottomBarAndCutout
       *
       * To show a [Snackbar], use [SnackbarHostState.showSnackbar]. Scaffold state already have
       * [ScaffoldState.snackbarHostState] when created
       *
       * @sample androidx.compose.material.samples.ScaffoldWithSimpleSnackbar
  - id: live-androidx-material-material-material-scaffold-lines-276-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 276
    endLine: 304
    sha256: b15b03594c5953c30b722d04882db569010097a70d25730f981fb34dcd354c84
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param modifier optional Modifier for the root of the [Scaffold]
       * @param scaffoldState state of this scaffold widget. It contains the state of the screen, e.g.
       *   variables to provide manual control over the drawer behavior, sizes of components, etc
       * @param topBar top app bar of the screen. Consider using [TopAppBar].
       * @param bottomBar bottom bar of the screen. Consider using [BottomAppBar].
       * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
       *   [SnackbarHostState.showSnackbar]. Usually it's a [SnackbarHost]
       * @param floatingActionButton Main action button of your screen. Consider using
       *   [FloatingActionButton] for this slot.
       * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition] for
       *   possible options available.
       * @param isFloatingActionButtonDocked whether [floatingActionButton] should overlap with
       *   [bottomBar] for half a height, if [bottomBar] exists. Ignored if there's no [bottomBar] or no
       *   [floatingActionButton].
       * @param drawerContent content of the Drawer sheet that can be pulled from the left side (right for
       *   RTL).
       * @param drawerGesturesEnabled whether or not drawer (if set) can be interacted with via gestures
       * @param drawerShape shape of the drawer sheet (if set)
       * @param drawerElevation drawer sheet elevation. This controls the size of the shadow below the
       *   drawer sheet (if set)
       * @param drawerBackgroundColor background color to be used for the drawer sheet
       * @param drawerContentColor color of the content to use inside the drawer sheet. Defaults to either
       *   the matching content color for [drawerBackgroundColor], or, if it is not a color from the
       *   theme, this will keep the same value set above this Surface.
       * @param drawerScrimColor color of the scrim that obscures content when the drawer is open
       * @param backgroundColor background of the scaffold body
       * @param contentColor color of the content in scaffold body. Defaults to either the matching
       *   content color for [backgroundColor], or, if it is not a color from the theme, this will keep
       *   the same value set above this Surface.
  - id: live-androidx-material-material-material-scaffold-lines-305-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 305
    endLine: 339
    sha256: 93ac06eacc9b0d157008ed3b168f77f4dad82cfd5ae0d213a9717cb5bf7b34e6
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * @param content content of your screen. The lambda receives an [PaddingValues] that should be
       *   applied to the content root via [androidx.compose.foundation.layout.padding] and
       *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
       *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
       *   of the scroll, and not on the scroll itself.
       */
      @Composable
      public fun Scaffold(
          modifier: Modifier = Modifier,
          scaffoldState: ScaffoldState = rememberScaffoldState(),
          topBar: @Composable () -> Unit = {},
          bottomBar: @Composable () -> Unit = {},
          snackbarHost: @Composable (SnackbarHostState) -> Unit = { SnackbarHost(it) },
          floatingActionButton: @Composable () -> Unit = {},
          floatingActionButtonPosition: FabPosition = FabPosition.End,
          isFloatingActionButtonDocked: Boolean = false,
          drawerContent: @Composable (ColumnScope.() -> Unit)? = null,
          drawerGesturesEnabled: Boolean = true,
          drawerShape: Shape = MaterialTheme.shapes.large,
          drawerElevation: Dp = DrawerDefaults.Elevation,
          drawerBackgroundColor: Color = MaterialTheme.colors.surface,
          drawerContentColor: Color = contentColorFor(drawerBackgroundColor),
          drawerScrimColor: Color = DrawerDefaults.scrimColor,
          backgroundColor: Color = MaterialTheme.colors.background,
          contentColor: Color = contentColorFor(backgroundColor),
          content: @Composable (PaddingValues) -> Unit,
      ) {
          Scaffold(
              WindowInsets(0.dp),
              modifier,
              scaffoldState,
              topBar,
              bottomBar,
              snackbarHost,
              floatingActionButton,
  - id: live-androidx-material-material-material-scaffold-lines-340-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 340
    endLine: 374
    sha256: b99fd96f17fac5834e5519f74741d247b376c361a2ca672ea9a2a120268426fa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              floatingActionButtonPosition,
              isFloatingActionButtonDocked,
              drawerContent,
              drawerGesturesEnabled,
              drawerShape,
              drawerElevation,
              drawerBackgroundColor,
              drawerContentColor,
              drawerScrimColor,
              backgroundColor,
              contentColor,
              content,
          )
      }

      /** Object containing various default values for [Scaffold] component. */
      public object ScaffoldDefaults {
          /** Recommended insets to be used and consumed by the scaffold content slot */
          public val contentWindowInsets: WindowInsets
              @Composable get() = WindowInsets.systemBarsForVisualComponents
      }

      /**
       * Layout for a [Scaffold]'s content.
       *
       * @param isFabDocked whether the FAB (if present) is docked to the bottom bar or not
       * @param fabPosition [FabPosition] for the FAB (if present)
       * @param topBar the content to place at the top of the [Scaffold], typically a [TopAppBar]
       * @param content the main 'body' of the [Scaffold]
       * @param snackbar the [Snackbar] displayed on top of the [content]
       * @param fab the [FloatingActionButton] displayed on top of the [content], below the [snackbar] and
       *   above the [bottomBar]
       * @param bottomBar the content to place at the bottom of the [Scaffold], on top of the [content],
       *   typically a [BottomAppBar].
       */
  - id: live-androidx-material-material-material-scaffold-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 36
    endLine: 70
    sha256: c5f8ab2d49f786ef5ec668ed3d60a242ba65c6866f0cdebc97afce3e0327be52
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.runtime.staticCompositionLocalOf
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.UiComposable
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.layout.SubcomposeLayout
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.offset
      import androidx.compose.ui.util.fastForEach
      import androidx.compose.ui.util.fastMap
      import androidx.compose.ui.util.fastMaxBy
      import kotlin.jvm.JvmInline

      /**
       * State for [Scaffold] composable component.
       *
       * Contains basic screen state, e.g. Drawer configuration, as well as sizes of components after
       * layout has happened
       *
       * @param drawerState the drawer state
       * @param snackbarHostState instance of [SnackbarHostState] to be used to show [Snackbar]s inside of
       *   the [Scaffold]
       */
      @Stable
      public class ScaffoldState(
          public val drawerState: DrawerState,
          public val snackbarHostState: SnackbarHostState,
      )

      /**
       * Creates a [ScaffoldState] with the default animation clock and memoizes it.
       *
       * @param drawerState the drawer state
  - id: live-androidx-material-material-material-scaffold-lines-375-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 375
    endLine: 409
    sha256: 1448badb1c1f6dc08eba6360f8d83a652f520d1399b9a5322db1d65f00121efe
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      @Suppress("ComposableLambdaInMeasurePolicy")
      @Composable
      @UiComposable
      private fun ScaffoldLayout(
          isFabDocked: Boolean,
          fabPosition: FabPosition,
          topBar: @Composable @UiComposable () -> Unit,
          content: @Composable @UiComposable (PaddingValues) -> Unit,
          snackbar: @Composable @UiComposable () -> Unit,
          fab: @Composable @UiComposable () -> Unit,
          contentWindowInsets: WindowInsets,
          bottomBar: @Composable @UiComposable () -> Unit,
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
  - id: live-androidx-material-material-material-scaffold-lines-410-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 410
    endLine: 444
    sha256: 057c9ee6b34269c0117d3a52c743044a5162116808b701450247d201eb5e02f0
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              val layoutHeight = constraints.maxHeight

              val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)

              val topBarPlaceables =
                  subcompose(ScaffoldLayoutContent.TopBar, topBar).fastMap {
                      it.measure(looseConstraints)
                  }

              val topBarHeight = topBarPlaceables.fastMaxBy { it.height }?.height ?: 0

              val snackbarPlaceables =
                  subcompose(ScaffoldLayoutContent.Snackbar, snackbar).fastMap {
                      // respect only bottom and horizontal for snackbar and fab
                      val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
                      val rightInset =
                          contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
                      val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)
                      // offset the snackbar constraints by the insets values
                      it.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
                  }

              val snackbarHeight = snackbarPlaceables.fastMaxBy { it.height }?.height ?: 0

              val fabPlaceables =
                  subcompose(ScaffoldLayoutContent.Fab, fab).fastMap { measurable ->
                      // respect only bottom and horizontal for snackbar and fab
                      val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
                      val rightInset =
                          contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
                      val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)
                      measurable.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
                  }

              val fabPlacement =
  - id: live-androidx-material-material-material-scaffold-lines-445-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 445
    endLine: 479
    sha256: 19ef3c133d3e6df0907b6aea84857df7cd4cc22104da706822665456c3b7434e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  if (fabPlaceables.isNotEmpty()) {
                      val fabWidth = fabPlaceables.fastMaxBy { it.width }?.width ?: 0
                      val fabHeight = fabPlaceables.fastMaxBy { it.height }?.height ?: 0
                      // FAB distance from the left of the layout, taking into account LTR / RTL
                      if (fabWidth != 0 && fabHeight != 0) {
                          val fabLeftOffset =
                              when (fabPosition) {
                                  FabPosition.Start -> {
                                      if (layoutDirection == LayoutDirection.Ltr) {
                                          FabSpacing.roundToPx()
                                      } else {
                                          layoutWidth - FabSpacing.roundToPx() - fabWidth
                                      }
                                  }
                                  FabPosition.End -> {
                                      if (layoutDirection == LayoutDirection.Ltr) {
                                          layoutWidth - FabSpacing.roundToPx() - fabWidth
                                      } else {
                                          FabSpacing.roundToPx()
                                      }
                                  }
                                  else -> (layoutWidth - fabWidth) / 2
                              }

                          FabPlacement(
                              isDocked = isFabDocked,
                              left = fabLeftOffset,
                              width = fabWidth,
                              height = fabHeight,
                          )
                      } else {
                          null
                      }
                  } else {
                      null
  - id: live-androidx-material-material-material-scaffold-lines-480-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 480
    endLine: 514
    sha256: b397d78d49de049bdc02c4d66e003e23cbe3aeb415d71eb7a21fe757c4028ad8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  }

              val bottomBarPlaceables =
                  subcompose(ScaffoldLayoutContent.BottomBar) {
                          CompositionLocalProvider(
                              LocalFabPlacement provides fabPlacement,
                              content = bottomBar,
                          )
                      }
                      .fastMap { it.measure(looseConstraints) }

              val bottomBarHeight = bottomBarPlaceables.fastMaxBy { it.height }?.height
              val fabOffsetFromBottom = fabPlacement?.let {
                  if (bottomBarHeight == null) {
                      it.height +
                          FabSpacing.roundToPx() +
                          contentWindowInsets.getBottom(this@SubcomposeLayout)
                  } else {
                      if (isFabDocked) {
                          // Total height is the bottom bar height + half the FAB height
                          bottomBarHeight + (it.height / 2)
                      } else {
                          // Total height is the bottom bar height + the FAB height + the padding
                          // between the FAB and bottom bar
                          bottomBarHeight + it.height + FabSpacing.roundToPx()
                      }
                  }
              }

              val snackbarOffsetFromBottom =
                  if (snackbarHeight != 0) {
                      snackbarHeight +
                          (fabOffsetFromBottom
                              ?: bottomBarHeight
                              ?: contentWindowInsets.getBottom(this@SubcomposeLayout))
  - id: live-androidx-material-material-material-scaffold-lines-515-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 515
    endLine: 549
    sha256: 5100f89bf22760b76bfe6582298dab5b147ca13cccf04ffa32ad69920de2c023
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
                              0.dp
                          },
                      bottom =
                          if (bottomBarPlaceables.isEmpty() || bottomBarHeight == null) {
                              insets.calculateBottomPadding()
                          } else {
                              bottomBarHeight.toDp()
                          },
                      start = insets.calculateStartPadding(layoutDirection),
                      end = insets.calculateEndPadding(layoutDirection),
                  )

              val bodyContentHeight = layoutHeight - topBarHeight

              val bodyContentPlaceables =
                  subcompose(ScaffoldLayoutContent.MainContent) { content(contentPadding) }
                      .fastMap { it.measure(looseConstraints.copy(maxHeight = bodyContentHeight)) }

              layout(layoutWidth, layoutHeight) {
                  // Placing to control drawing order to match default elevation of each placeable

                  bodyContentPlaceables.fastForEach { it.place(0, topBarHeight) }
                  topBarPlaceables.fastForEach { it.place(0, 0) }
  - id: live-androidx-material-material-material-scaffold-lines-550-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 550
    endLine: 584
    sha256: 08ff785c814804cc2ac56ed8dfebf9438a64f0e4679f3abd6024e7a6847b1a22
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  snackbarPlaceables.fastForEach { it.place(0, layoutHeight - snackbarOffsetFromBottom) }
                  // The bottom bar is always at the bottom of the layout
                  bottomBarPlaceables.fastForEach { it.place(0, layoutHeight - (bottomBarHeight ?: 0)) }
                  // Explicitly not using placeRelative here as `leftOffset` already accounts for RTL
                  fabPlaceables.fastForEach {
                      it.place(fabPlacement?.left ?: 0, layoutHeight - (fabOffsetFromBottom ?: 0))
                  }
              }
          }
      }

      /**
       * Placement information for a [FloatingActionButton] inside a [Scaffold].
       *
       * @property isDocked whether the FAB should be docked with the bottom bar
       * @property left the FAB's offset from the left edge of the bottom bar, already adjusted for RTL
       *   support
       * @property width the width of the FAB
       * @property height the height of the FAB
       */
      @Immutable
      internal class FabPlacement(val isDocked: Boolean, val left: Int, val width: Int, val height: Int)

      /**
       * CompositionLocal containing a [FabPlacement] that is read by [BottomAppBar] to calculate notch
       * location.
       */
      internal val LocalFabPlacement = staticCompositionLocalOf<FabPlacement?> { null }

      // FAB spacing above the bottom bar / bottom of the Scaffold
      private val FabSpacing
          get() = 16.dp

      private enum class ScaffoldLayoutContent {
          TopBar,
  - id: live-androidx-material-material-material-scaffold-lines-585-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 585
    endLine: 590
    sha256: 7d4b85f7bf92c85fbf42b4a8be80d143dcb5d125d16ade459427487d5489d8fd
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
          MainContent,
          Snackbar,
          Fab,
          BottomBar,
      }
  - id: live-androidx-material-material-material-scaffold-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    revision: 07f09ade563fe07a62dd26797ba27a2f6ff5571a
    path: compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt
    startLine: 71
    endLine: 105
    sha256: b91557ae6d18f17bb3f765faf4ae32e17d658bc5e0c18bbc3d22da3b85696228
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2
       * @param snackbarHostState instance of [SnackbarHostState] to be used to show [Snackbar]s inside of
       *   the [Scaffold]
       */
      @Composable
      public fun rememberScaffoldState(
          drawerState: DrawerState = rememberDrawerState(DrawerValue.Closed),
          snackbarHostState: SnackbarHostState = remember { SnackbarHostState() },
      ): ScaffoldState = remember { ScaffoldState(drawerState, snackbarHostState) }

      /** The possible positions for a [FloatingActionButton] attached to a [Scaffold]. */
      @JvmInline
      public value class FabPosition internal constructor(@Suppress("unused") private val value: Int) {
          public companion object {
              /**
               * Position FAB at the bottom of the screen at the start, above the [BottomAppBar] (if it
               * exists)
               */
              public val Start: FabPosition
                  get() = FabPosition(0)

              /**
               * Position FAB at the bottom of the screen in the center, above the [BottomAppBar] (if it
               * exists)
               */
              public val Center: FabPosition
                  get() = FabPosition(1)

              /**
               * Position FAB at the bottom of the screen at the end, above the [BottomAppBar] (if it
               * exists)
               */
              public val End: FabPosition
                  get() = FabPosition(2)
          }
compose:
  id: live-androidx-material-material-material-scaffold
  artifact: androidx.compose.material:material
  fqn: androidx.compose.material
  sections:
    - id: live-androidx-material-material-material-scaffold-lines-1
      title: androidx.compose.material Scaffold.kt source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-1-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-106
      title: androidx.compose.material Scaffold.kt source (lines 106–140)
      aliases:
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
        - androidx.compose.material.ScaffoldDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-106-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-141
      title: androidx.compose.material Scaffold.kt source (lines 141–170)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-141-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-171
      title: androidx.compose.material Scaffold.kt source (lines 171–205)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.rememberScaffoldState
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-171-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-206
      title: androidx.compose.material Scaffold.kt source (lines 206–240)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-206-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-241
      title: androidx.compose.material Scaffold.kt source (lines 241–275)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-241-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-276
      title: androidx.compose.material Scaffold.kt source (lines 276–304)
      aliases:
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-276-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-305
      title: androidx.compose.material Scaffold.kt source (lines 305–339)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.rememberScaffoldState
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-305-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-340
      title: androidx.compose.material Scaffold.kt source (lines 340–374)
      aliases:
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
        - androidx.compose.material.ScaffoldDefaults
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-340-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-36
      title: androidx.compose.material Scaffold.kt source (lines 36–70)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-36-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-375
      title: androidx.compose.material Scaffold.kt source (lines 375–409)
      aliases:
        - androidx.compose.material.FabPosition
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-375-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-410
      title: androidx.compose.material Scaffold.kt source (lines 410–444)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-410-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-445
      title: androidx.compose.material Scaffold.kt source (lines 445–479)
      aliases:
        - androidx.compose.material.FabPosition
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-445-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-480
      title: androidx.compose.material Scaffold.kt source (lines 480–514)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-480-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-515
      title: androidx.compose.material Scaffold.kt source (lines 515–549)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-515-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-550
      title: androidx.compose.material Scaffold.kt source (lines 550–584)
      aliases:
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-550-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-585
      title: androidx.compose.material Scaffold.kt source (lines 585–590)
      aliases: []
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-585-source
      relatedIds: []
    - id: live-androidx-material-material-material-scaffold-lines-71
      title: androidx.compose.material Scaffold.kt source (lines 71–105)
      aliases:
        - androidx.compose.material.ScaffoldState
        - androidx.compose.material.rememberScaffoldState
        - androidx.compose.material.FabPosition
        - androidx.compose.material.Scaffold
      requires:
        - artifact: androidx.compose.material:material
          version: null
      sourceIds:
        - live-androidx-material-material-material-scaffold-lines-71-source
      relatedIds: []
---

# androidx.compose.material Scaffold.kt source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt

## androidx.compose.material Scaffold.kt source (lines 1–35)

/*
 * Copyright 2019 The Android Open Source Project
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

package androidx.compose.material

import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.calculateEndPadding
import androidx.compose.foundation.layout.calculateStartPadding
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.exclude
import androidx.compose.foundation.layout.onConsumedWindowInsetsChanged
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

Sources: [live-androidx-material-material-material-scaffold-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 106–140)

    override fun toString(): String {
        return when (this) {
            Start -> "FabPosition.Start"
            Center -> "FabPosition.Center"
            else -> "FabPosition.End"
        }
    }
}

/**
 * [Material Design layout](https://material.io/design/layout/understanding-layout.html)
 *
 * Scaffold implements the basic Material Design visual layout structure.
 *
 * This component provides API to put together several Material components to construct your screen,
 * by ensuring proper layout strategy for them and collecting necessary data so these components
 * will work together correctly.
 *
 * For similar components that implement different layout structures, see [BackdropScaffold], which
 * uses a backdrop as the centerpiece of the screen, and [BottomSheetScaffold], which uses a
 * persistent bottom sheet as the centerpiece of the screen.
 *
 * This particular overload provides ability to specify [WindowInsets]. Recommended value can be
 * found in [ScaffoldDefaults.contentWindowInsets].
 *
 * Simple example of a Scaffold with [TopAppBar], [FloatingActionButton] and drawer:
 *
 * @sample androidx.compose.material.samples.SimpleScaffoldWithTopBar
 *
 * More fancy usage with [BottomAppBar] with cutout and docked [FloatingActionButton], which
 * animates its shape when clicked:
 *
 * @sample androidx.compose.material.samples.ScaffoldWithBottomBarAndCutout
 *
 * To show a [Snackbar], use [SnackbarHostState.showSnackbar]. Scaffold state already have

Sources: [live-androidx-material-material-material-scaffold-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 141–170)

 * [ScaffoldState.snackbarHostState] when created.
 *
 * @sample androidx.compose.material.samples.ScaffoldWithSimpleSnackbar
 * @param contentWindowInsets window insets to be passed to [content] slot via [PaddingValues]
 *   params. Scaffold will take the insets into account from the top/bottom only if the [topBar]/
 *   [bottomBar] are not present, as the scaffold expect [topBar]/[bottomBar] to handle insets
 *   instead. Any insets consumed by other insets padding modifiers or [consumeWindowInsets] on a
 *   parent layout will be excluded from [contentWindowInsets].
 * @param modifier optional Modifier for the root of the [Scaffold]
 * @param scaffoldState state of this scaffold widget. It contains the state of the screen, e.g.
 *   variables to provide manual control over the drawer behavior, sizes of components, etc
 * @param topBar top app bar of the screen. Consider using [TopAppBar].
 * @param bottomBar bottom bar of the screen. Consider using [BottomAppBar].
 * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
 *   [SnackbarHostState.showSnackbar]. Usually it's a [SnackbarHost]
 * @param floatingActionButton Main action button of your screen. Consider using
 *   [FloatingActionButton] for this slot.
 * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition] for
 *   possible options available.
 * @param isFloatingActionButtonDocked whether [floatingActionButton] should overlap with
 *   [bottomBar] for half a height, if [bottomBar] exists. Ignored if there's no [bottomBar] or no
 *   [floatingActionButton].
 * @param drawerContent content of the Drawer sheet that can be pulled from the left side (right for
 *   RTL).
 * @param drawerGesturesEnabled whether or not drawer (if set) can be interacted with via gestures
 * @param drawerShape shape of the drawer sheet (if set)
 * @param drawerElevation drawer sheet elevation. This controls the size of the shadow below the
 *   drawer sheet (if set)
 * @param drawerBackgroundColor background color to be used for the drawer sheet
 * @param drawerContentColor color of the content to use inside the drawer sheet. Defaults to either

Sources: [live-androidx-material-material-material-scaffold-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 171–205)

 *   the matching content color for [drawerBackgroundColor], or, if it is not a color from the
 *   theme, this will keep the same value set above this Surface.
 * @param drawerScrimColor color of the scrim that obscures content when the drawer is open
 * @param backgroundColor background of the scaffold body
 * @param contentColor color of the content in scaffold body. Defaults to either the matching
 *   content color for [backgroundColor], or, if it is not a color from the theme, this will keep
 *   the same value set above this Surface.
 * @param content content of your screen. The lambda receives an [PaddingValues] that should be
 *   applied to the content root via [androidx.compose.foundation.layout.padding] and
 *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
 *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
 *   of the scroll, and not on the scroll itself.
 */
@Composable
public fun Scaffold(
    contentWindowInsets: WindowInsets,
    modifier: Modifier = Modifier,
    scaffoldState: ScaffoldState = rememberScaffoldState(),
    topBar: @Composable () -> Unit = {},
    bottomBar: @Composable () -> Unit = {},
    snackbarHost: @Composable (SnackbarHostState) -> Unit = { SnackbarHost(it) },
    floatingActionButton: @Composable () -> Unit = {},
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    isFloatingActionButtonDocked: Boolean = false,
    drawerContent: @Composable (ColumnScope.() -> Unit)? = null,
    drawerGesturesEnabled: Boolean = true,
    drawerShape: Shape = MaterialTheme.shapes.large,
    drawerElevation: Dp = DrawerDefaults.Elevation,
    drawerBackgroundColor: Color = MaterialTheme.colors.surface,
    drawerContentColor: Color = contentColorFor(drawerBackgroundColor),
    drawerScrimColor: Color = DrawerDefaults.scrimColor,
    backgroundColor: Color = MaterialTheme.colors.background,
    contentColor: Color = contentColorFor(backgroundColor),
    content: @Composable (PaddingValues) -> Unit,
) {

Sources: [live-androidx-material-material-material-scaffold-lines-171-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 206–240)

    val safeInsets = remember(contentWindowInsets) { MutableWindowInsets(contentWindowInsets) }
    val child =
        @Composable { childModifier: Modifier ->
            Surface(
                modifier =
                    childModifier.onConsumedWindowInsetsChanged { consumedWindowInsets ->
                        // Exclude currently consumed window insets from user provided
                        // contentWindowInsets
                        safeInsets.insets = contentWindowInsets.exclude(consumedWindowInsets)
                    },
                color = backgroundColor,
                contentColor = contentColor,
            ) {
                ScaffoldLayout(
                    isFabDocked = isFloatingActionButtonDocked,
                    fabPosition = floatingActionButtonPosition,
                    topBar = topBar,
                    content = content,
                    contentWindowInsets = safeInsets,
                    snackbar = { snackbarHost(scaffoldState.snackbarHostState) },
                    fab = floatingActionButton,
                    bottomBar = bottomBar,
                )
            }
        }

    if (drawerContent != null) {
        ModalDrawer(
            modifier = modifier,
            drawerState = scaffoldState.drawerState,
            gesturesEnabled = drawerGesturesEnabled,
            drawerContent = drawerContent,
            drawerShape = drawerShape,
            drawerElevation = drawerElevation,
            drawerBackgroundColor = drawerBackgroundColor,

Sources: [live-androidx-material-material-material-scaffold-lines-206-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 241–275)

            drawerContentColor = drawerContentColor,
            scrimColor = drawerScrimColor,
            content = { child(Modifier) },
        )
    } else {
        child(modifier)
    }
}

/**
 * [Material Design layout](https://material.io/design/layout/understanding-layout.html)
 *
 * Scaffold implements the basic Material Design visual layout structure.
 *
 * This component provides API to put together several Material components to construct your screen,
 * by ensuring proper layout strategy for them and collecting necessary data so these components
 * will work together correctly.
 *
 * For similar components that implement different layout structures, see [BackdropScaffold], which
 * uses a backdrop as the centerpiece of the screen, and [BottomSheetScaffold], which uses a
 * persistent bottom sheet as the centerpiece of the screen.
 *
 * Simple example of a Scaffold with [TopAppBar], [FloatingActionButton] and drawer:
 *
 * @sample androidx.compose.material.samples.SimpleScaffoldWithTopBar
 *
 * More fancy usage with [BottomAppBar] with cutout and docked [FloatingActionButton], which
 * animates its shape when clicked:
 *
 * @sample androidx.compose.material.samples.ScaffoldWithBottomBarAndCutout
 *
 * To show a [Snackbar], use [SnackbarHostState.showSnackbar]. Scaffold state already have
 * [ScaffoldState.snackbarHostState] when created
 *
 * @sample androidx.compose.material.samples.ScaffoldWithSimpleSnackbar

Sources: [live-androidx-material-material-material-scaffold-lines-241-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 276–304)

 * @param modifier optional Modifier for the root of the [Scaffold]
 * @param scaffoldState state of this scaffold widget. It contains the state of the screen, e.g.
 *   variables to provide manual control over the drawer behavior, sizes of components, etc
 * @param topBar top app bar of the screen. Consider using [TopAppBar].
 * @param bottomBar bottom bar of the screen. Consider using [BottomAppBar].
 * @param snackbarHost component to host [Snackbar]s that are pushed to be shown via
 *   [SnackbarHostState.showSnackbar]. Usually it's a [SnackbarHost]
 * @param floatingActionButton Main action button of your screen. Consider using
 *   [FloatingActionButton] for this slot.
 * @param floatingActionButtonPosition position of the FAB on the screen. See [FabPosition] for
 *   possible options available.
 * @param isFloatingActionButtonDocked whether [floatingActionButton] should overlap with
 *   [bottomBar] for half a height, if [bottomBar] exists. Ignored if there's no [bottomBar] or no
 *   [floatingActionButton].
 * @param drawerContent content of the Drawer sheet that can be pulled from the left side (right for
 *   RTL).
 * @param drawerGesturesEnabled whether or not drawer (if set) can be interacted with via gestures
 * @param drawerShape shape of the drawer sheet (if set)
 * @param drawerElevation drawer sheet elevation. This controls the size of the shadow below the
 *   drawer sheet (if set)
 * @param drawerBackgroundColor background color to be used for the drawer sheet
 * @param drawerContentColor color of the content to use inside the drawer sheet. Defaults to either
 *   the matching content color for [drawerBackgroundColor], or, if it is not a color from the
 *   theme, this will keep the same value set above this Surface.
 * @param drawerScrimColor color of the scrim that obscures content when the drawer is open
 * @param backgroundColor background of the scaffold body
 * @param contentColor color of the content in scaffold body. Defaults to either the matching
 *   content color for [backgroundColor], or, if it is not a color from the theme, this will keep
 *   the same value set above this Surface.

Sources: [live-androidx-material-material-material-scaffold-lines-276-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 305–339)

 * @param content content of your screen. The lambda receives an [PaddingValues] that should be
 *   applied to the content root via [androidx.compose.foundation.layout.padding] and
 *   [androidx.compose.foundation.layout.consumeWindowInsets] to properly offset top and bottom
 *   bars. If using [androidx.compose.foundation.verticalScroll], apply this modifier to the child
 *   of the scroll, and not on the scroll itself.
 */
@Composable
public fun Scaffold(
    modifier: Modifier = Modifier,
    scaffoldState: ScaffoldState = rememberScaffoldState(),
    topBar: @Composable () -> Unit = {},
    bottomBar: @Composable () -> Unit = {},
    snackbarHost: @Composable (SnackbarHostState) -> Unit = { SnackbarHost(it) },
    floatingActionButton: @Composable () -> Unit = {},
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    isFloatingActionButtonDocked: Boolean = false,
    drawerContent: @Composable (ColumnScope.() -> Unit)? = null,
    drawerGesturesEnabled: Boolean = true,
    drawerShape: Shape = MaterialTheme.shapes.large,
    drawerElevation: Dp = DrawerDefaults.Elevation,
    drawerBackgroundColor: Color = MaterialTheme.colors.surface,
    drawerContentColor: Color = contentColorFor(drawerBackgroundColor),
    drawerScrimColor: Color = DrawerDefaults.scrimColor,
    backgroundColor: Color = MaterialTheme.colors.background,
    contentColor: Color = contentColorFor(backgroundColor),
    content: @Composable (PaddingValues) -> Unit,
) {
    Scaffold(
        WindowInsets(0.dp),
        modifier,
        scaffoldState,
        topBar,
        bottomBar,
        snackbarHost,
        floatingActionButton,

Sources: [live-androidx-material-material-material-scaffold-lines-305-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 340–374)

        floatingActionButtonPosition,
        isFloatingActionButtonDocked,
        drawerContent,
        drawerGesturesEnabled,
        drawerShape,
        drawerElevation,
        drawerBackgroundColor,
        drawerContentColor,
        drawerScrimColor,
        backgroundColor,
        contentColor,
        content,
    )
}

/** Object containing various default values for [Scaffold] component. */
public object ScaffoldDefaults {
    /** Recommended insets to be used and consumed by the scaffold content slot */
    public val contentWindowInsets: WindowInsets
        @Composable get() = WindowInsets.systemBarsForVisualComponents
}

/**
 * Layout for a [Scaffold]'s content.
 *
 * @param isFabDocked whether the FAB (if present) is docked to the bottom bar or not
 * @param fabPosition [FabPosition] for the FAB (if present)
 * @param topBar the content to place at the top of the [Scaffold], typically a [TopAppBar]
 * @param content the main 'body' of the [Scaffold]
 * @param snackbar the [Snackbar] displayed on top of the [content]
 * @param fab the [FloatingActionButton] displayed on top of the [content], below the [snackbar] and
 *   above the [bottomBar]
 * @param bottomBar the content to place at the bottom of the [Scaffold], on top of the [content],
 *   typically a [BottomAppBar].
 */

Sources: [live-androidx-material-material-material-scaffold-lines-340-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 36–70)

import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.UiComposable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.layout.SubcomposeLayout
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.offset
import androidx.compose.ui.util.fastForEach
import androidx.compose.ui.util.fastMap
import androidx.compose.ui.util.fastMaxBy
import kotlin.jvm.JvmInline

/**
 * State for [Scaffold] composable component.
 *
 * Contains basic screen state, e.g. Drawer configuration, as well as sizes of components after
 * layout has happened
 *
 * @param drawerState the drawer state
 * @param snackbarHostState instance of [SnackbarHostState] to be used to show [Snackbar]s inside of
 *   the [Scaffold]
 */
@Stable
public class ScaffoldState(
    public val drawerState: DrawerState,
    public val snackbarHostState: SnackbarHostState,
)

/**
 * Creates a [ScaffoldState] with the default animation clock and memoizes it.
 *
 * @param drawerState the drawer state

Sources: [live-androidx-material-material-material-scaffold-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 375–409)

@Suppress("ComposableLambdaInMeasurePolicy")
@Composable
@UiComposable
private fun ScaffoldLayout(
    isFabDocked: Boolean,
    fabPosition: FabPosition,
    topBar: @Composable @UiComposable () -> Unit,
    content: @Composable @UiComposable (PaddingValues) -> Unit,
    snackbar: @Composable @UiComposable () -> Unit,
    fab: @Composable @UiComposable () -> Unit,
    contentWindowInsets: WindowInsets,
    bottomBar: @Composable @UiComposable () -> Unit,
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

Sources: [live-androidx-material-material-material-scaffold-lines-375-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 410–444)

        val layoutHeight = constraints.maxHeight

        val looseConstraints = constraints.copy(minWidth = 0, minHeight = 0)

        val topBarPlaceables =
            subcompose(ScaffoldLayoutContent.TopBar, topBar).fastMap {
                it.measure(looseConstraints)
            }

        val topBarHeight = topBarPlaceables.fastMaxBy { it.height }?.height ?: 0

        val snackbarPlaceables =
            subcompose(ScaffoldLayoutContent.Snackbar, snackbar).fastMap {
                // respect only bottom and horizontal for snackbar and fab
                val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
                val rightInset =
                    contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
                val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)
                // offset the snackbar constraints by the insets values
                it.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
            }

        val snackbarHeight = snackbarPlaceables.fastMaxBy { it.height }?.height ?: 0

        val fabPlaceables =
            subcompose(ScaffoldLayoutContent.Fab, fab).fastMap { measurable ->
                // respect only bottom and horizontal for snackbar and fab
                val leftInset = contentWindowInsets.getLeft(this@SubcomposeLayout, layoutDirection)
                val rightInset =
                    contentWindowInsets.getRight(this@SubcomposeLayout, layoutDirection)
                val bottomInset = contentWindowInsets.getBottom(this@SubcomposeLayout)
                measurable.measure(looseConstraints.offset(-leftInset - rightInset, -bottomInset))
            }

        val fabPlacement =

Sources: [live-androidx-material-material-material-scaffold-lines-410-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 445–479)

            if (fabPlaceables.isNotEmpty()) {
                val fabWidth = fabPlaceables.fastMaxBy { it.width }?.width ?: 0
                val fabHeight = fabPlaceables.fastMaxBy { it.height }?.height ?: 0
                // FAB distance from the left of the layout, taking into account LTR / RTL
                if (fabWidth != 0 && fabHeight != 0) {
                    val fabLeftOffset =
                        when (fabPosition) {
                            FabPosition.Start -> {
                                if (layoutDirection == LayoutDirection.Ltr) {
                                    FabSpacing.roundToPx()
                                } else {
                                    layoutWidth - FabSpacing.roundToPx() - fabWidth
                                }
                            }
                            FabPosition.End -> {
                                if (layoutDirection == LayoutDirection.Ltr) {
                                    layoutWidth - FabSpacing.roundToPx() - fabWidth
                                } else {
                                    FabSpacing.roundToPx()
                                }
                            }
                            else -> (layoutWidth - fabWidth) / 2
                        }

                    FabPlacement(
                        isDocked = isFabDocked,
                        left = fabLeftOffset,
                        width = fabWidth,
                        height = fabHeight,
                    )
                } else {
                    null
                }
            } else {
                null

Sources: [live-androidx-material-material-material-scaffold-lines-445-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 480–514)

            }

        val bottomBarPlaceables =
            subcompose(ScaffoldLayoutContent.BottomBar) {
                    CompositionLocalProvider(
                        LocalFabPlacement provides fabPlacement,
                        content = bottomBar,
                    )
                }
                .fastMap { it.measure(looseConstraints) }

        val bottomBarHeight = bottomBarPlaceables.fastMaxBy { it.height }?.height
        val fabOffsetFromBottom = fabPlacement?.let {
            if (bottomBarHeight == null) {
                it.height +
                    FabSpacing.roundToPx() +
                    contentWindowInsets.getBottom(this@SubcomposeLayout)
            } else {
                if (isFabDocked) {
                    // Total height is the bottom bar height + half the FAB height
                    bottomBarHeight + (it.height / 2)
                } else {
                    // Total height is the bottom bar height + the FAB height + the padding
                    // between the FAB and bottom bar
                    bottomBarHeight + it.height + FabSpacing.roundToPx()
                }
            }
        }

        val snackbarOffsetFromBottom =
            if (snackbarHeight != 0) {
                snackbarHeight +
                    (fabOffsetFromBottom
                        ?: bottomBarHeight
                        ?: contentWindowInsets.getBottom(this@SubcomposeLayout))

Sources: [live-androidx-material-material-material-scaffold-lines-480-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 515–549)

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
                        0.dp
                    },
                bottom =
                    if (bottomBarPlaceables.isEmpty() || bottomBarHeight == null) {
                        insets.calculateBottomPadding()
                    } else {
                        bottomBarHeight.toDp()
                    },
                start = insets.calculateStartPadding(layoutDirection),
                end = insets.calculateEndPadding(layoutDirection),
            )

        val bodyContentHeight = layoutHeight - topBarHeight

        val bodyContentPlaceables =
            subcompose(ScaffoldLayoutContent.MainContent) { content(contentPadding) }
                .fastMap { it.measure(looseConstraints.copy(maxHeight = bodyContentHeight)) }

        layout(layoutWidth, layoutHeight) {
            // Placing to control drawing order to match default elevation of each placeable

            bodyContentPlaceables.fastForEach { it.place(0, topBarHeight) }
            topBarPlaceables.fastForEach { it.place(0, 0) }

Sources: [live-androidx-material-material-material-scaffold-lines-515-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 550–584)

            snackbarPlaceables.fastForEach { it.place(0, layoutHeight - snackbarOffsetFromBottom) }
            // The bottom bar is always at the bottom of the layout
            bottomBarPlaceables.fastForEach { it.place(0, layoutHeight - (bottomBarHeight ?: 0)) }
            // Explicitly not using placeRelative here as `leftOffset` already accounts for RTL
            fabPlaceables.fastForEach {
                it.place(fabPlacement?.left ?: 0, layoutHeight - (fabOffsetFromBottom ?: 0))
            }
        }
    }
}

/**
 * Placement information for a [FloatingActionButton] inside a [Scaffold].
 *
 * @property isDocked whether the FAB should be docked with the bottom bar
 * @property left the FAB's offset from the left edge of the bottom bar, already adjusted for RTL
 *   support
 * @property width the width of the FAB
 * @property height the height of the FAB
 */
@Immutable
internal class FabPlacement(val isDocked: Boolean, val left: Int, val width: Int, val height: Int)

/**
 * CompositionLocal containing a [FabPlacement] that is read by [BottomAppBar] to calculate notch
 * location.
 */
internal val LocalFabPlacement = staticCompositionLocalOf<FabPlacement?> { null }

// FAB spacing above the bottom bar / bottom of the Scaffold
private val FabSpacing
    get() = 16.dp

private enum class ScaffoldLayoutContent {
    TopBar,

Sources: [live-androidx-material-material-material-scaffold-lines-550-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 585–590)

    MainContent,
    Snackbar,
    Fab,
    BottomBar,
}


Sources: [live-androidx-material-material-material-scaffold-lines-585-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)

## androidx.compose.material Scaffold.kt source (lines 71–105)

 * @param snackbarHostState instance of [SnackbarHostState] to be used to show [Snackbar]s inside of
 *   the [Scaffold]
 */
@Composable
public fun rememberScaffoldState(
    drawerState: DrawerState = rememberDrawerState(DrawerValue.Closed),
    snackbarHostState: SnackbarHostState = remember { SnackbarHostState() },
): ScaffoldState = remember { ScaffoldState(drawerState, snackbarHostState) }

/** The possible positions for a [FloatingActionButton] attached to a [Scaffold]. */
@JvmInline
public value class FabPosition internal constructor(@Suppress("unused") private val value: Int) {
    public companion object {
        /**
         * Position FAB at the bottom of the screen at the start, above the [BottomAppBar] (if it
         * exists)
         */
        public val Start: FabPosition
            get() = FabPosition(0)

        /**
         * Position FAB at the bottom of the screen in the center, above the [BottomAppBar] (if it
         * exists)
         */
        public val Center: FabPosition
            get() = FabPosition(1)

        /**
         * Position FAB at the bottom of the screen at the end, above the [BottomAppBar] (if it
         * exists)
         */
        public val End: FabPosition
            get() = FabPosition(2)
    }


Sources: [live-androidx-material-material-material-scaffold-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/07f09ade563fe07a62dd26797ba27a2f6ff5571a/compose/material/material/src/commonMain/kotlin/androidx/compose/material/Scaffold.kt)
