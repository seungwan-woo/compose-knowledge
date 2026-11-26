---
type: reference
title: Material 3 exposed dropdown menu source
description: "Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt"
tags:
  - Compose
  - Android
sources:
  - id: live-androidx-material3-exposed-dropdown-menu-lines-1-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 1
    endLine: 35
    sha256: d202db470e8a0990eeeebbd4c63bf55812137902b9b3100298d0992b9aa6561a
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

      import androidx.compose.animation.core.MutableTransitionState
      import androidx.compose.foundation.BorderStroke
      import androidx.compose.foundation.ScrollState
      import androidx.compose.foundation.gestures.awaitEachGesture
      import androidx.compose.foundation.gestures.awaitFirstDown
      import androidx.compose.foundation.gestures.waitForUpOrCancellation
      import androidx.compose.foundation.layout.Box
      import androidx.compose.foundation.layout.ColumnScope
      import androidx.compose.foundation.layout.PaddingValues
      import androidx.compose.foundation.layout.WindowInsets
      import androidx.compose.foundation.layout.statusBars
      import androidx.compose.foundation.rememberScrollState
      import androidx.compose.foundation.text.selection.LocalTextSelectionColors
      import androidx.compose.foundation.text.selection.TextSelectionColors
      import androidx.compose.material3.ExposedDropdownMenu as ExposedDropdownMenuExtension
      import androidx.compose.material3.internal.BackHandler
      import androidx.compose.material3.internal.Icons
  - id: live-androidx-material3-exposed-dropdown-menu-lines-1015-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 1015
    endLine: 1049
    sha256: 78cdfbbcfeda7e334c544ff987d9c84894017abe580758271916fc3722674f6f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      
      private val KeyEvent.isEnterMinusSpacebar: Boolean
          get() =
              when (key) {
                  Key.DirectionCenter,
                  Key.Enter,
                  Key.NumPadEnter -> true
                  else -> false
              }

      private fun calculateMaxHeight(
          windowBounds: IntRect,
          anchorBounds: Rect?,
          verticalMargin: Int,
      ): Int {
          anchorBounds ?: return 0

          val marginedWindowTop = windowBounds.top + verticalMargin
          val marginedWindowBottom = windowBounds.bottom - verticalMargin
          val availableHeight =
              if (anchorBounds.top > windowBounds.bottom || anchorBounds.bottom < windowBounds.top) {
                  marginedWindowBottom - marginedWindowTop
              } else {
                  val heightAbove = anchorBounds.top - marginedWindowTop
                  val heightBelow = marginedWindowBottom - anchorBounds.bottom
                  max(heightAbove, heightBelow).roundToInt()
              }

          return max(availableHeight, 0)
      }

      // Don't use `boundsInWindow()` because it can report 0 when the window is animating/resizing
      private fun LayoutCoordinates?.getAnchorBounds(): Rect =
          if (this == null || !this.isAttached) Rect.Zero else Rect(positionInWindow(), size.toSize())
  - id: live-androidx-material3-exposed-dropdown-menu-lines-1050-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 1050
    endLine: 1072
    sha256: 673fd34b9812daf5ec6109b34b1b5f060a6866abd91403040457069f92d072a3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |
      internal expect class WindowBoundsCalculator {
          fun getVisibleWindowBounds(): IntRect
      }

      @Composable internal expect fun platformWindowBoundsCalculator(): WindowBoundsCalculator

      @Composable internal expect fun OnPlatformWindowBoundsChange(block: () -> Unit)

      /**
       * Creates a [PopupProperties] used for [ExposedDropdownMenuBoxScope.ExposedDropdownMenu].
       *
       * @param anchorType the type of element that is anchoring the menu. See
       *   [ExposedDropdownMenuAnchorType].
       */
      @Composable
      internal expect fun popupPropertiesForAnchorType(
          anchorType: ExposedDropdownMenuAnchorType,
          alwaysFocusable: Boolean,
      ): PopupProperties

      private val ExposedDropdownMenuItemHorizontalPadding
          get() = 16.dp
  - id: live-androidx-material3-exposed-dropdown-menu-lines-106-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 106
    endLine: 140
    sha256: 5a16ce64047e588d98e37de9ca8b116862f7b95fd61db07c34e9a612f78698b9
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
       * Exposed dropdown menus, sometimes also called "spinners" or "combo boxes", display the currently
       * selected item in a text field to which the menu is anchored. In some cases, it can accept and
       * display user input (whether or not it’s listed as a menu choice), in which case it may be used to
       * implement autocomplete.
       *
       * ![Exposed dropdown menu
       * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu.png)
       *
       * The [ExposedDropdownMenuBox] is expected to contain a [TextField] (or [OutlinedTextField]) and
       * [ExposedDropdownMenu][ExposedDropdownMenuBoxScope.ExposedDropdownMenu] as content. The
       * [menuAnchor][ExposedDropdownMenuBoxScope.menuAnchor] modifier should be passed to the text field.
       *
       * An example of a read-only exposed dropdown menu:
       *
       * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
       *
       * An example of an editable exposed dropdown menu:
       *
       * @sample androidx.compose.material3.samples.EditableExposedDropdownMenuSample
       *
       * An example of an editable exposed dropdown menu used like a MultiAutoCompleteTextView:
       *
       * @sample androidx.compose.material3.samples.MultiAutocompleteExposedDropdownMenuSample
       * @param expanded whether the menu is expanded or not
       * @param onExpandedChange called when the exposed dropdown menu is clicked and the expansion state
       *   changes.
       * @param modifier the [Modifier] to be applied to this ExposedDropdownMenuBox
       * @param content the content of this ExposedDropdownMenuBox, typically a [TextField] and an
       *   [ExposedDropdownMenu][ExposedDropdownMenuBoxScope.ExposedDropdownMenu].
       */
      @Composable
      public fun ExposedDropdownMenuBox(
          expanded: Boolean,
          onExpandedChange: (Boolean) -> Unit,
          modifier: Modifier = Modifier,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-141-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 141
    endLine: 175
    sha256: 370e06ba14bc8ae9f0f18499906572cde7643bda7f2c9a7f6dd402b64a5c2d5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          content: @Composable ExposedDropdownMenuBoxScope.() -> Unit,
      ) {
          val windowBoundsCalculator = platformWindowBoundsCalculator()
          val density = LocalDensity.current

          val verticalMargin = with(density) { MenuVerticalMargin.roundToPx() }

          var anchorCoordinates by remember { mutableStateOf<LayoutCoordinates?>(null) }
          var anchorWidth by remember { mutableIntStateOf(0) }
          var menuMaxHeight by remember { mutableIntStateOf(0) }

          val focusRequester = remember { FocusRequester() }
          val keyboardController = LocalSoftwareKeyboardController.current
          val expandedDescription = getString(Strings.MenuExpanded)
          val collapsedDescription = getString(Strings.MenuCollapsed)
          val toggleDescription = getString(Strings.ToggleDropdownMenu)
          val anchorTypeState = remember {
              mutableStateOf(ExposedDropdownMenuAnchorType.PrimaryNotEditable)
          }
          val alwaysFocusable = remember { mutableStateOf(false) }

          val scope =
              remember(expanded, onExpandedChange, windowBoundsCalculator, density) {
                  object : ExposedDropdownMenuBoxScopeImpl() {
                      override fun Modifier.menuAnchor(
                          type: ExposedDropdownMenuAnchorType,
                          enabled: Boolean,
                      ): Modifier =
                          this.focusRequester(focusRequester)
                              .then(
                                  ExposedDropdownMenuAnchorElement {
                                      if (type.hasGreaterOrEqualPriorityThan(anchorTypeState.value)) {
                                          anchorTypeState.value = type
                                      }
                                  }
  - id: live-androidx-material3-exposed-dropdown-menu-lines-176-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 176
    endLine: 210
    sha256: 2118c2f53cfb5fb254ab1827f92ef552db951c46eb532e8f871d26fb6acc7e99
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              )
                              .then(
                                  if (!enabled) Modifier
                                  else
                                      Modifier.expandable(
                                          expanded = expanded,
                                          onExpandedChange = {
                                              anchorTypeState.value = type
                                              onExpandedChange(!expanded)
                                          },
                                          alwaysFocusable = alwaysFocusable,
                                          anchorType = type,
                                          expandedDescription = expandedDescription,
                                          collapsedDescription = collapsedDescription,
                                          toggleDescription = toggleDescription,
                                          keyboardController = keyboardController,
                                          focusRequester = focusRequester,
                                      )
                              )

                      override val anchorType: ExposedDropdownMenuAnchorType
                          get() = anchorTypeState.value

                      override val alwaysFocusable: Boolean
                          get() = alwaysFocusable.value

                      override fun Modifier.exposedDropdownSize(matchAnchorWidth: Boolean): Modifier =
                          layout { measurable, constraints ->
                              val menuWidth = constraints.constrainWidth(anchorWidth)
                              val menuConstraints =
                                  constraints.copy(
                                      maxHeight = constraints.constrainHeight(menuMaxHeight),
                                      minWidth =
                                          if (matchAnchorWidth) menuWidth else constraints.minWidth,
                                      maxWidth =
  - id: live-androidx-material3-exposed-dropdown-menu-lines-211-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 211
    endLine: 245
    sha256: 3e06a67c416e29d370d33e15fca9b13f217e69aff9a5b17d18f50bd1a1ce0395
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                                          if (matchAnchorWidth) menuWidth else constraints.maxWidth,
                                  )
                              val placeable = measurable.measure(menuConstraints)
                              layout(placeable.width, placeable.height) { placeable.place(0, 0) }
                          }
                  }
              }

          Box(
              modifier.onGloballyPositioned {
                  anchorCoordinates = it
                  anchorWidth = it.size.width
                  menuMaxHeight =
                      calculateMaxHeight(
                          windowBounds = windowBoundsCalculator.getVisibleWindowBounds(),
                          anchorBounds = anchorCoordinates.getAnchorBounds(),
                          verticalMargin = verticalMargin,
                      )
              }
          ) {
              scope.content()
          }

          if (expanded) {
              OnPlatformWindowBoundsChange {
                  menuMaxHeight =
                      calculateMaxHeight(
                          windowBounds = windowBoundsCalculator.getVisibleWindowBounds(),
                          anchorBounds = anchorCoordinates.getAnchorBounds(),
                          verticalMargin = verticalMargin,
                      )
              }
          }

          SideEffect { if (expanded) focusRequester.requestFocus() }
  - id: live-androidx-material3-exposed-dropdown-menu-lines-246-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 246
    endLine: 280
    sha256: 77fc0f474d05a5be5d9568dbd6afb33ae410c8be2e46509280d0580c24190292
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          // Back events are handled in the Popup layer if the menu is focusable.
          // If it's not focusable, we handle them here.
          BackHandler(enabled = expanded) { onExpandedChange(false) }
      }

      /** Scope for [ExposedDropdownMenuBox]. */
      public sealed class ExposedDropdownMenuBoxScope {
          /**
           * Modifier which should be applied to an element inside the [ExposedDropdownMenuBoxScope],
           * typically a text field or an icon within the text field. It's responsible for requesting
           * focus, and if [enabled], expanding/collapsing the menu on click and applying semantics.
           *
           * @param type the type of element that is anchoring the menu. See
           *   [ExposedDropdownMenuAnchorType].
           * @param enabled whether controlling the menu via this anchor is enabled. When `false`, the
           *   component will not expand or collapse the menu in response to user input, and menu
           *   semantics will be invisible to accessibility services. Note that this value only controls
           *   interactions with the menu. It does not affect the enabled state of other kinds of
           *   interactions, such as [TextField]'s `enabled` parameter.
           */
          public abstract fun Modifier.menuAnchor(
              type: ExposedDropdownMenuAnchorType,
              enabled: Boolean = true,
          ): Modifier

          /**
           * Modifier which should be applied to a menu placed inside the [ExposedDropdownMenuBoxScope].
           * It will set constraints on the width and height of the menu so it will not overlap the text
           * field or software keyboard.
           *
           * [ExposedDropdownMenu] applies this modifier automatically, so this is only needed when using
           * custom menu components.
           *
           * @param matchAnchorWidth whether the menu's width should be forcefully constrained to match
  - id: live-androidx-material3-exposed-dropdown-menu-lines-281-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 281
    endLine: 315
    sha256: 76244431b0b5dd7f129ca7c26430d34f42cbd470fa797dace0b0fe06b44587c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           *   the width of the text field to which it's attached.
           */
          public abstract fun Modifier.exposedDropdownSize(matchAnchorWidth: Boolean = true): Modifier

          internal abstract val anchorType: ExposedDropdownMenuAnchorType

          internal abstract val alwaysFocusable: Boolean

          @ExperimentalMaterial3Api
          @Deprecated(
              message = "Use the version of ExposedDropdownMenu defined as an extension method",
              level = DeprecationLevel.HIDDEN,
          )
          @Composable
          public fun ExposedDropdownMenu(
              expanded: Boolean,
              onDismissRequest: () -> Unit,
              modifier: Modifier = Modifier,
              scrollState: ScrollState = rememberScrollState(),
              matchAnchorWidth: Boolean = true,
              shape: Shape = MenuDefaults.shape,
              containerColor: Color = MenuDefaults.containerColor,
              tonalElevation: Dp = MenuDefaults.TonalElevation,
              shadowElevation: Dp = MenuDefaults.ShadowElevation,
              border: BorderStroke? = null,
              content: @Composable ColumnScope.() -> Unit,
          ) {
              ExposedDropdownMenuExtension(
                  expanded = expanded,
                  onDismissRequest = onDismissRequest,
                  modifier = modifier,
                  scrollState = scrollState,
                  matchAnchorWidth = matchAnchorWidth,
                  shape = shape,
                  containerColor = containerColor,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-316-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 316
    endLine: 350
    sha256: 4d928c92972f1f1f18b8e53fe5ec9caf1b764117ab5dfcc5c1e88d583280e2f7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  tonalElevation = tonalElevation,
                  shadowElevation = shadowElevation,
                  border = border,
                  content = content,
              )
          }
      }

      /**
       * The composable defining the exposed dropdown menu popup. It should be used inside the content of
       * [ExposedDropdownMenuBox].
       *
       * @param expanded whether the menu is expanded
       * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
       *   outside the menu's bounds
       * @param modifier the [Modifier] to be applied to this menu
       * @param scrollState a [ScrollState] used by the menu's content for items vertical scrolling
       * @param matchAnchorWidth whether the menu's width should be forcefully constrained to match the
       *   width of the text field to which it's attached.
       * @param shape the shape of the menu
       * @param containerColor the container color of the menu
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param shadowElevation the elevation for the shadow below the menu
       * @param border the border to draw around the container of the menu. Pass `null` for no border.
       * @param content the content of the menu
       */
      @Composable
      public fun ExposedDropdownMenuBoxScope.ExposedDropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier = Modifier,
          scrollState: ScrollState = rememberScrollState(),
          matchAnchorWidth: Boolean = true,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-351-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 351
    endLine: 385
    sha256: 2a68602fd8170e629199c4c18320a514ee05922e7bc694d316276fe5c5b236ea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          shape: Shape = MenuDefaults.shape,
          containerColor: Color = MenuDefaults.containerColor,
          tonalElevation: Dp = MenuDefaults.TonalElevation,
          shadowElevation: Dp = MenuDefaults.ShadowElevation,
          border: BorderStroke? = null,
          content: @Composable ColumnScope.() -> Unit,
      ) {
          // Workaround for b/326394521. We create a state that's read in `calculatePosition`.
          // Then trigger a state change in `OnPlatformWindowBoundsChange` to force recalculation.
          val keyboardSignalState = remember { mutableStateOf(Unit, neverEqualPolicy()) }
          val density = LocalDensity.current
          val topWindowInsets = WindowInsets.statusBars.getTop(density)

          if (expanded) {
              OnPlatformWindowBoundsChange { keyboardSignalState.value = Unit }
          }

          // TODO(b/326064777): use DropdownMenu when it supports custom PositionProvider
          val expandedState = remember { MutableTransitionState(false) }
          expandedState.targetState = expanded

          if (expandedState.currentState || expandedState.targetState) {
              val popupPositionProvider =
                  remember(density, topWindowInsets) {
                      ExposedDropdownMenuPositionProvider(
                          density = density,
                          topWindowInsets = topWindowInsets,
                          keyboardSignalState = keyboardSignalState,
                      )
                  }

              Popup(
                  onDismissRequest = onDismissRequest,
                  popupPositionProvider = popupPositionProvider,
                  properties = popupPropertiesForAnchorType(anchorType, alwaysFocusable),
  - id: live-androidx-material3-exposed-dropdown-menu-lines-36-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 36
    endLine: 70
    sha256: d7f8ef88b81e077812ab72fda7dc282e483e313ebca667061e4dd74b15d50208
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.material3.internal.MenuPosition
      import androidx.compose.material3.internal.Strings
      import androidx.compose.material3.internal.getString
      import androidx.compose.material3.tokens.FilledAutocompleteTokens
      import androidx.compose.material3.tokens.OutlinedAutocompleteTokens
      import androidx.compose.runtime.Composable
      import androidx.compose.runtime.MutableState
      import androidx.compose.runtime.SideEffect
      import androidx.compose.runtime.Stable
      import androidx.compose.runtime.State
      import androidx.compose.runtime.getValue
      import androidx.compose.runtime.mutableIntStateOf
      import androidx.compose.runtime.mutableStateOf
      import androidx.compose.runtime.neverEqualPolicy
      import androidx.compose.runtime.remember
      import androidx.compose.runtime.setValue
      import androidx.compose.ui.Alignment
      import androidx.compose.ui.Modifier
      import androidx.compose.ui.draw.rotate
      import androidx.compose.ui.focus.FocusRequester
      import androidx.compose.ui.focus.focusRequester
      import androidx.compose.ui.geometry.Rect
      import androidx.compose.ui.graphics.Color
      import androidx.compose.ui.graphics.Shape
      import androidx.compose.ui.graphics.TransformOrigin
      import androidx.compose.ui.input.key.Key
      import androidx.compose.ui.input.key.KeyEvent
      import androidx.compose.ui.input.key.KeyEventType.Companion.KeyUp
      import androidx.compose.ui.input.key.key
      import androidx.compose.ui.input.key.onPreviewKeyEvent
      import androidx.compose.ui.input.key.type
      import androidx.compose.ui.input.pointer.PointerEventPass
      import androidx.compose.ui.input.pointer.pointerInput
      import androidx.compose.ui.layout.LayoutCoordinates
      import androidx.compose.ui.layout.layout
  - id: live-androidx-material3-exposed-dropdown-menu-lines-386-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 386
    endLine: 420
    sha256: 49f327bd6cfc76cde3bef399b53d7d60cb6459624e2a22843d3f66f8343c43af
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              ) {
                  DropdownMenuContent(
                      expandedState = expandedState,
                      transformOrigin = { popupPositionProvider.transformOrigin },
                      scrollState = scrollState,
                      shape = shape,
                      containerColor = containerColor,
                      tonalElevation = tonalElevation,
                      shadowElevation = shadowElevation,
                      border = border,
                      modifier = modifier.exposedDropdownSize(matchAnchorWidth),
                      content = content,
                  )
              }
          }
      }

      // Sealed classes don't allow dynamic anonymous subclasses.
      private abstract class ExposedDropdownMenuBoxScopeImpl : ExposedDropdownMenuBoxScope()

      /** The type of anchor for an exposed dropdown menu. */
      @JvmInline
      public value class ExposedDropdownMenuAnchorType private constructor(private val name: String) {
          public companion object {
              /**
               * A non-editable primary anchor of the dropdown menu, such as a read-only text field.
               *
               * When this anchor opens the menu, focus will move to the menu.
               */
              public val PrimaryNotEditable: ExposedDropdownMenuAnchorType
                  get() = ExposedDropdownMenuAnchorType("PrimaryNotEditable")

              /**
               * An editable primary anchor of the dropdown menu, such as a text field that allows user
               * input.
  - id: live-androidx-material3-exposed-dropdown-menu-lines-421-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 421
    endLine: 455
    sha256: b4c7fcda2af095574948fa9a6f7284774ebcf61d7f514ee832fe4d28f28c20d8
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
               *
               * When this anchor opens the menu, focus will remain on the text field in order to allow
               * typing.
               */
              public val PrimaryEditable: ExposedDropdownMenuAnchorType
                  get() = ExposedDropdownMenuAnchorType("PrimaryEditable")

              /**
               * A secondary anchor of the dropdown menu that lives alongside an editable primary anchor,
               * such as an icon within an editable text field.
               *
               * When this anchor opens the menu, if accessibility services are enabled, focus will move
               * to the menu. Otherwise, focus will remain on the text field in order to allow typing.
               */
              public val SecondaryEditable: ExposedDropdownMenuAnchorType
                  get() = ExposedDropdownMenuAnchorType("SecondaryEditable")
          }

          public override fun toString(): String = name
      }

      private fun ExposedDropdownMenuAnchorType.hasGreaterOrEqualPriorityThan(
          that: ExposedDropdownMenuAnchorType
      ): Boolean =
          when (this) {
              ExposedDropdownMenuAnchorType.PrimaryNotEditable,
              ExposedDropdownMenuAnchorType.PrimaryEditable -> true
              ExposedDropdownMenuAnchorType.SecondaryEditable ->
                  that == ExposedDropdownMenuAnchorType.SecondaryEditable
              else -> false
          }

      /** Contains default values used by Exposed Dropdown Menu. */
      public object ExposedDropdownMenuDefaults {
          /**
  - id: live-androidx-material3-exposed-dropdown-menu-lines-456-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 456
    endLine: 488
    sha256: e57c78f32c39d6304a126653713ab5eb3fa5328282ffda8008d204ac0ea16a65
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * Default trailing icon for Exposed Dropdown Menu.
           *
           * @param expanded whether the menu is expanded or not. Affects the appearance of the icon.
           * @param modifier the [Modifier] to be applied to this icon
           */
          @Composable
          public fun TrailingIcon(expanded: Boolean, modifier: Modifier = Modifier) {
              Icon(Icons.Filled.ArrowDropDown, null, modifier.rotate(if (expanded) 180f else 0f))
          }

          /**
           * Creates a [TextFieldColors] that represents the default input text, container, and content
           * colors (including label, placeholder, icons, etc.) used in a [TextField] within an
           * [ExposedDropdownMenuBox].
           *
           * @param focusedTextColor the color used for the input text of this text field when focused
           * @param unfocusedTextColor the color used for the input text of this text field when not
           *   focused
           * @param disabledTextColor the color used for the input text of this text field when disabled
           * @param errorTextColor the color used for the input text of this text field when in error
           *   state
           * @param focusedContainerColor the container color for this text field when focused
           * @param unfocusedContainerColor the container color for this text field when not focused
           * @param disabledContainerColor the container color for this text field when disabled
           * @param errorContainerColor the container color for this text field when in error state
           * @param cursorColor the cursor color for this text field
           * @param errorCursorColor the cursor color for this text field when in error state
           * @param selectionColors the colors used when the input text of this text field is selected
           * @param focusedIndicatorColor the indicator color for this text field when focused
           * @param unfocusedIndicatorColor the indicator color for this text field when not focused
           * @param disabledIndicatorColor the indicator color for this text field when disabled
           * @param errorIndicatorColor the indicator color for this text field when in error state
           * @param focusedLeadingIconColor the leading icon color for this text field when focused
  - id: live-androidx-material3-exposed-dropdown-menu-lines-489-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 489
    endLine: 515
    sha256: 07a1960acdd5bb8e41066511906cc02e6f1208de5374c8f8e4f8c9e280cc6cfa
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param unfocusedLeadingIconColor the leading icon color for this text field when not focused
           * @param disabledLeadingIconColor the leading icon color for this text field when disabled
           * @param errorLeadingIconColor the leading icon color for this text field when in error state
           * @param focusedTrailingIconColor the trailing icon color for this text field when focused
           * @param unfocusedTrailingIconColor the trailing icon color for this text field when not
           *   focused
           * @param disabledTrailingIconColor the trailing icon color for this text field when disabled
           * @param errorTrailingIconColor the trailing icon color for this text field when in error state
           * @param focusedLabelColor the label color for this text field when focused
           * @param unfocusedLabelColor the label color for this text field when not focused
           * @param disabledLabelColor the label color for this text field when disabled
           * @param errorLabelColor the label color for this text field when in error state
           * @param focusedPlaceholderColor the placeholder color for this text field when focused
           * @param unfocusedPlaceholderColor the placeholder color for this text field when not focused
           * @param disabledPlaceholderColor the placeholder color for this text field when disabled
           * @param errorPlaceholderColor the placeholder color for this text field when in error state
           * @param focusedPrefixColor the prefix color for this text field when focused
           * @param unfocusedPrefixColor the prefix color for this text field when not focused
           * @param disabledPrefixColor the prefix color for this text field when disabled
           * @param errorPrefixColor the prefix color for this text field when in error state
           * @param focusedSuffixColor the suffix color for this text field when focused
           * @param unfocusedSuffixColor the suffix color for this text field when not focused
           * @param disabledSuffixColor the suffix color for this text field when disabled
           * @param errorSuffixColor the suffix color for this text field when in error state
           */
          @Composable
          public fun textFieldColors(
  - id: live-androidx-material3-exposed-dropdown-menu-lines-516-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 516
    endLine: 544
    sha256: a8565dcddd96c54c0e013414f048564504f4319192e1c287dab85375e023f3c1
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              focusedTextColor: Color = FilledAutocompleteTokens.FocusInputTextColor.value,
              unfocusedTextColor: Color = FilledAutocompleteTokens.InputTextColor.value,
              disabledTextColor: Color =
                  FilledAutocompleteTokens.DisabledInputTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledInputTextOpacity
                  ),
              errorTextColor: Color = FilledAutocompleteTokens.ErrorInputTextColor.value,
              focusedContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
              unfocusedContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
              disabledContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
              errorContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
              cursorColor: Color = FilledAutocompleteTokens.CaretColor.value,
              errorCursorColor: Color = FilledAutocompleteTokens.ErrorFocusCaretColor.value,
              selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
              focusedIndicatorColor: Color = FilledAutocompleteTokens.FocusActiveIndicatorColor.value,
              unfocusedIndicatorColor: Color = FilledAutocompleteTokens.ActiveIndicatorColor.value,
              disabledIndicatorColor: Color =
                  FilledAutocompleteTokens.DisabledActiveIndicatorColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledActiveIndicatorOpacity
                  ),
              errorIndicatorColor: Color = FilledAutocompleteTokens.ErrorActiveIndicatorColor.value,
              focusedLeadingIconColor: Color = FilledAutocompleteTokens.FocusLeadingIconColor.value,
              unfocusedLeadingIconColor: Color = FilledAutocompleteTokens.LeadingIconColor.value,
              disabledLeadingIconColor: Color =
                  FilledAutocompleteTokens.DisabledLeadingIconColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledLeadingIconOpacity
                  ),
              errorLeadingIconColor: Color = FilledAutocompleteTokens.ErrorLeadingIconColor.value,
              focusedTrailingIconColor: Color = FilledAutocompleteTokens.FocusTrailingIconColor.value,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-545-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 545
    endLine: 575
    sha256: ae1f6fd3f60f34d2d6e39c266febb2dab8099235705b30cc401ed6d6d2f14262
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              unfocusedTrailingIconColor: Color = FilledAutocompleteTokens.TrailingIconColor.value,
              disabledTrailingIconColor: Color =
                  FilledAutocompleteTokens.DisabledTrailingIconColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledTrailingIconOpacity
                  ),
              errorTrailingIconColor: Color = FilledAutocompleteTokens.ErrorTrailingIconColor.value,
              focusedLabelColor: Color = FilledAutocompleteTokens.FocusLabelTextColor.value,
              unfocusedLabelColor: Color = FilledAutocompleteTokens.LabelTextColor.value,
              disabledLabelColor: Color = FilledAutocompleteTokens.DisabledLabelTextColor.value,
              errorLabelColor: Color = FilledAutocompleteTokens.ErrorLabelTextColor.value,
              focusedPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              unfocusedPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              disabledPlaceholderColor: Color =
                  FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              focusedPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              unfocusedPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              disabledPrefixColor: Color =
                  FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              focusedSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              unfocusedSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
              disabledSuffixColor: Color =
                  FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-576-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 576
    endLine: 610
    sha256: 94a0f5cb92f2b3c7bc33124d987f6394450866a5617a6cad6fac9073fb2b122e
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          ): TextFieldColors =
              TextFieldDefaults.colors(
                  focusedTextColor = focusedTextColor,
                  unfocusedTextColor = unfocusedTextColor,
                  disabledTextColor = disabledTextColor,
                  errorTextColor = errorTextColor,
                  focusedContainerColor = focusedContainerColor,
                  unfocusedContainerColor = unfocusedContainerColor,
                  disabledContainerColor = disabledContainerColor,
                  errorContainerColor = errorContainerColor,
                  cursorColor = cursorColor,
                  errorCursorColor = errorCursorColor,
                  selectionColors = selectionColors,
                  focusedIndicatorColor = focusedIndicatorColor,
                  unfocusedIndicatorColor = unfocusedIndicatorColor,
                  disabledIndicatorColor = disabledIndicatorColor,
                  errorIndicatorColor = errorIndicatorColor,
                  focusedLeadingIconColor = focusedLeadingIconColor,
                  unfocusedLeadingIconColor = unfocusedLeadingIconColor,
                  disabledLeadingIconColor = disabledLeadingIconColor,
                  errorLeadingIconColor = errorLeadingIconColor,
                  focusedTrailingIconColor = focusedTrailingIconColor,
                  unfocusedTrailingIconColor = unfocusedTrailingIconColor,
                  disabledTrailingIconColor = disabledTrailingIconColor,
                  errorTrailingIconColor = errorTrailingIconColor,
                  focusedLabelColor = focusedLabelColor,
                  unfocusedLabelColor = unfocusedLabelColor,
                  disabledLabelColor = disabledLabelColor,
                  errorLabelColor = errorLabelColor,
                  focusedPlaceholderColor = focusedPlaceholderColor,
                  unfocusedPlaceholderColor = unfocusedPlaceholderColor,
                  disabledPlaceholderColor = disabledPlaceholderColor,
                  errorPlaceholderColor = errorPlaceholderColor,
                  focusedPrefixColor = focusedPrefixColor,
                  unfocusedPrefixColor = unfocusedPrefixColor,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-611-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 611
    endLine: 642
    sha256: c020d7d8d4948fbbb4945b09e3320c24159575b717ad24d052d73bb8a4a7c3c7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  disabledPrefixColor = disabledPrefixColor,
                  errorPrefixColor = errorPrefixColor,
                  focusedSuffixColor = focusedSuffixColor,
                  unfocusedSuffixColor = unfocusedSuffixColor,
                  disabledSuffixColor = disabledSuffixColor,
                  errorSuffixColor = errorSuffixColor,
              )

          /**
           * Creates a [TextFieldColors] that represents the default input text, container, and content
           * colors (including label, placeholder, icons, etc.) used in an [OutlinedTextField] within an
           * [ExposedDropdownMenuBox].
           *
           * @param focusedTextColor the color used for the input text of this text field when focused
           * @param unfocusedTextColor the color used for the input text of this text field when not
           *   focused
           * @param disabledTextColor the color used for the input text of this text field when disabled
           * @param errorTextColor the color used for the input text of this text field when in error
           *   state
           * @param focusedContainerColor the container color for this text field when focused
           * @param unfocusedContainerColor the container color for this text field when not focused
           * @param disabledContainerColor the container color for this text field when disabled
           * @param errorContainerColor the container color for this text field when in error state
           * @param cursorColor the cursor color for this text field
           * @param errorCursorColor the cursor color for this text field when in error state
           * @param selectionColors the colors used when the input text of this text field is selected
           * @param focusedBorderColor the border color for this text field when focused
           * @param unfocusedBorderColor the border color for this text field when not focused
           * @param disabledBorderColor the border color for this text field when disabled
           * @param errorBorderColor the border color for this text field when in error state
           * @param focusedLeadingIconColor the leading icon color for this text field when focused
           * @param unfocusedLeadingIconColor the leading icon color for this text field when not focused
  - id: live-androidx-material3-exposed-dropdown-menu-lines-643-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 643
    endLine: 669
    sha256: fa264fb264559875f926873cfa4d14863b32a0f481ec5df3ef8ddb2c647a6bbb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param disabledLeadingIconColor the leading icon color for this text field when disabled
           * @param errorLeadingIconColor the leading icon color for this text field when in error state
           * @param focusedTrailingIconColor the trailing icon color for this text field when focused
           * @param unfocusedTrailingIconColor the trailing icon color for this text field when not
           *   focused
           * @param disabledTrailingIconColor the trailing icon color for this text field when disabled
           * @param errorTrailingIconColor the trailing icon color for this text field when in error state
           * @param focusedLabelColor the label color for this text field when focused
           * @param unfocusedLabelColor the label color for this text field when not focused
           * @param disabledLabelColor the label color for this text field when disabled
           * @param errorLabelColor the label color for this text field when in error state
           * @param focusedPlaceholderColor the placeholder color for this text field when focused
           * @param unfocusedPlaceholderColor the placeholder color for this text field when not focused
           * @param disabledPlaceholderColor the placeholder color for this text field when disabled
           * @param errorPlaceholderColor the placeholder color for this text field when in error state
           * @param focusedPrefixColor the prefix color for this text field when focused
           * @param unfocusedPrefixColor the prefix color for this text field when not focused
           * @param disabledPrefixColor the prefix color for this text field when disabled
           * @param errorPrefixColor the prefix color for this text field when in error state
           * @param focusedSuffixColor the suffix color for this text field when focused
           * @param unfocusedSuffixColor the suffix color for this text field when not focused
           * @param disabledSuffixColor the suffix color for this text field when disabled
           * @param errorSuffixColor the suffix color for this text field when in error state
           */
          @Composable
          public fun outlinedTextFieldColors(
              focusedTextColor: Color = OutlinedAutocompleteTokens.FocusInputTextColor.value,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-670-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 670
    endLine: 701
    sha256: 653656df6a338bd494f850701c484e3010a997f662a90e28560aeeeae3775507
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              unfocusedTextColor: Color = OutlinedAutocompleteTokens.InputTextColor.value,
              disabledTextColor: Color =
                  OutlinedAutocompleteTokens.DisabledInputTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledInputTextOpacity
                  ),
              errorTextColor: Color = OutlinedAutocompleteTokens.ErrorInputTextColor.value,
              focusedContainerColor: Color = Color.Transparent,
              unfocusedContainerColor: Color = Color.Transparent,
              disabledContainerColor: Color = Color.Transparent,
              errorContainerColor: Color = Color.Transparent,
              cursorColor: Color = OutlinedAutocompleteTokens.CaretColor.value,
              errorCursorColor: Color = OutlinedAutocompleteTokens.ErrorFocusCaretColor.value,
              selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
              focusedBorderColor: Color = OutlinedAutocompleteTokens.FocusOutlineColor.value,
              unfocusedBorderColor: Color = OutlinedAutocompleteTokens.OutlineColor.value,
              disabledBorderColor: Color =
                  OutlinedAutocompleteTokens.DisabledOutlineColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledOutlineOpacity
                  ),
              errorBorderColor: Color = OutlinedAutocompleteTokens.ErrorOutlineColor.value,
              focusedLeadingIconColor: Color = OutlinedAutocompleteTokens.FocusLeadingIconColor.value,
              unfocusedLeadingIconColor: Color = OutlinedAutocompleteTokens.LeadingIconColor.value,
              disabledLeadingIconColor: Color =
                  OutlinedAutocompleteTokens.DisabledLeadingIconColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledLeadingIconOpacity
                  ),
              errorLeadingIconColor: Color = OutlinedAutocompleteTokens.ErrorLeadingIconColor.value,
              focusedTrailingIconColor: Color = OutlinedAutocompleteTokens.FocusTrailingIconColor.value,
              unfocusedTrailingIconColor: Color = OutlinedAutocompleteTokens.TrailingIconColor.value,
              disabledTrailingIconColor: Color =
                  OutlinedAutocompleteTokens.DisabledTrailingIconColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledTrailingIconOpacity
  - id: live-androidx-material3-exposed-dropdown-menu-lines-702-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 702
    endLine: 734
    sha256: 47893f5c45a5e1f5d947044bcc34f5982bbbdff6a511b5ffb59de1f69e0a5885
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  ),
              errorTrailingIconColor: Color = OutlinedAutocompleteTokens.ErrorTrailingIconColor.value,
              focusedLabelColor: Color = OutlinedAutocompleteTokens.FocusLabelTextColor.value,
              unfocusedLabelColor: Color = OutlinedAutocompleteTokens.LabelTextColor.value,
              disabledLabelColor: Color =
                  OutlinedAutocompleteTokens.DisabledLabelTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledLabelTextOpacity
                  ),
              errorLabelColor: Color = OutlinedAutocompleteTokens.ErrorLabelTextColor.value,
              focusedPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              unfocusedPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              disabledPlaceholderColor: Color =
                  OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              focusedPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              unfocusedPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              disabledPrefixColor: Color =
                  OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              focusedSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              unfocusedSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
              disabledSuffixColor: Color =
                  OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
                  ),
              errorSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
          ): TextFieldColors =
              OutlinedTextFieldDefaults.colors(
                  focusedTextColor = focusedTextColor,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-71-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 71
    endLine: 105
    sha256: 54b28386a6cac71514b69971fbfa2f5b339d47722a20c0bc1e45765d3f8c2f06
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
      import androidx.compose.ui.layout.onGloballyPositioned
      import androidx.compose.ui.layout.positionInWindow
      import androidx.compose.ui.node.ModifierNodeElement
      import androidx.compose.ui.platform.InspectorInfo
      import androidx.compose.ui.platform.LocalDensity
      import androidx.compose.ui.platform.LocalSoftwareKeyboardController
      import androidx.compose.ui.platform.SoftwareKeyboardController
      import androidx.compose.ui.semantics.Role
      import androidx.compose.ui.semantics.contentDescription
      import androidx.compose.ui.semantics.onClick
      import androidx.compose.ui.semantics.role
      import androidx.compose.ui.semantics.semantics
      import androidx.compose.ui.semantics.stateDescription
      import androidx.compose.ui.unit.Density
      import androidx.compose.ui.unit.Dp
      import androidx.compose.ui.unit.IntOffset
      import androidx.compose.ui.unit.IntRect
      import androidx.compose.ui.unit.IntSize
      import androidx.compose.ui.unit.LayoutDirection
      import androidx.compose.ui.unit.constrainHeight
      import androidx.compose.ui.unit.constrainWidth
      import androidx.compose.ui.unit.dp
      import androidx.compose.ui.unit.toSize
      import androidx.compose.ui.window.Popup
      import androidx.compose.ui.window.PopupProperties
      import kotlin.jvm.JvmInline
      import kotlin.math.max
      import kotlin.math.roundToInt

      /**
       * [Material Design exposed dropdown menu](https://m3.material.io/components/menus/overview)
       *
       * Menus display a list of choices on a temporary surface. They appear when users interact with a
       * button, action, or other control.
       *
  - id: live-androidx-material3-exposed-dropdown-menu-lines-735-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 735
    endLine: 769
    sha256: dd8a02c98438e2e7d6731d826a95ae54e0cd2d229e2785573e466ab739589aeb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  unfocusedTextColor = unfocusedTextColor,
                  disabledTextColor = disabledTextColor,
                  errorTextColor = errorTextColor,
                  focusedContainerColor = focusedContainerColor,
                  unfocusedContainerColor = unfocusedContainerColor,
                  disabledContainerColor = disabledContainerColor,
                  errorContainerColor = errorContainerColor,
                  cursorColor = cursorColor,
                  errorCursorColor = errorCursorColor,
                  selectionColors = selectionColors,
                  focusedBorderColor = focusedBorderColor,
                  unfocusedBorderColor = unfocusedBorderColor,
                  disabledBorderColor = disabledBorderColor,
                  errorBorderColor = errorBorderColor,
                  focusedLeadingIconColor = focusedLeadingIconColor,
                  unfocusedLeadingIconColor = unfocusedLeadingIconColor,
                  disabledLeadingIconColor = disabledLeadingIconColor,
                  errorLeadingIconColor = errorLeadingIconColor,
                  focusedTrailingIconColor = focusedTrailingIconColor,
                  unfocusedTrailingIconColor = unfocusedTrailingIconColor,
                  disabledTrailingIconColor = disabledTrailingIconColor,
                  errorTrailingIconColor = errorTrailingIconColor,
                  focusedLabelColor = focusedLabelColor,
                  unfocusedLabelColor = unfocusedLabelColor,
                  disabledLabelColor = disabledLabelColor,
                  errorLabelColor = errorLabelColor,
                  focusedPlaceholderColor = focusedPlaceholderColor,
                  unfocusedPlaceholderColor = unfocusedPlaceholderColor,
                  disabledPlaceholderColor = disabledPlaceholderColor,
                  errorPlaceholderColor = errorPlaceholderColor,
                  focusedPrefixColor = focusedPrefixColor,
                  unfocusedPrefixColor = unfocusedPrefixColor,
                  disabledPrefixColor = disabledPrefixColor,
                  errorPrefixColor = errorPrefixColor,
                  focusedSuffixColor = focusedSuffixColor,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-770-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 770
    endLine: 804
    sha256: eb4eff87c7b7348a99c03460425ac2031a84a14867e04605942b1efc1fd0f6ea
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  unfocusedSuffixColor = unfocusedSuffixColor,
                  disabledSuffixColor = disabledSuffixColor,
                  errorSuffixColor = errorSuffixColor,
              )

          /**
           * Padding for [DropdownMenuItem]s within [ExposedDropdownMenuBoxScope.ExposedDropdownMenu] to
           * align them properly with [TextField] components.
           */
          public val ItemContentPadding: PaddingValues =
              PaddingValues(horizontal = ExposedDropdownMenuItemHorizontalPadding, vertical = 0.dp)
      }

      @Stable
      internal class ExposedDropdownMenuPositionProvider(
          val density: Density,
          val topWindowInsets: Int,
          val keyboardSignalState: State<Unit>? = null,
          val verticalMargin: Int = with(density) { MenuVerticalMargin.roundToPx() },
          val onPositionCalculated: (anchorBounds: IntRect, menuBounds: IntRect) -> Unit = { _, _ -> },
      ) : DropdownMenuPopupPositionProvider {
          override var transformOrigin by mutableStateOf(TransformOrigin.Center)
              private set

          // Horizontal position
          private val startToAnchorStart = MenuPosition.startToAnchorStart
          private val endToAnchorEnd = MenuPosition.endToAnchorEnd
          private val leftToWindowLeft = MenuPosition.leftToWindowLeft
          private val rightToWindowRight = MenuPosition.rightToWindowRight

          // Vertical position
          private val topToAnchorBottom = MenuPosition.topToAnchorBottom
          private val bottomToAnchorTop = MenuPosition.bottomToAnchorTop
          private val topToWindowTop = MenuPosition.topToWindowTop
          private val bottomToWindowBottom = MenuPosition.bottomToWindowBottom
  - id: live-androidx-material3-exposed-dropdown-menu-lines-805-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 805
    endLine: 839
    sha256: 4b207f5cd7efcf65214ffcb8b3d0dd6f13d1f53306b0000fb2c29b55cd67a7a7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun calculatePosition(
              anchorBounds: IntRect,
              windowSize: IntSize,
              layoutDirection: LayoutDirection,
              popupContentSize: IntSize,
          ): IntOffset {
              // Workaround for b/326394521
              // Read the state because we want any changes to the state to trigger recalculation.
              // See PopupLayout.snapshotStateObserver and PopupLayout.onCommitAffectingPopupPosition
              // for more info.
              keyboardSignalState?.value

              // Workaround for b/256233441
              // Popup fails to account for window insets so we do it here instead
              @Suppress("NAME_SHADOWING")
              val windowSize = IntSize(windowSize.width, windowSize.height + topWindowInsets)

              val xCandidates =
                  listOf(
                      startToAnchorStart,
                      endToAnchorEnd,
                      if (anchorBounds.center.x < windowSize.width / 2) {
                          leftToWindowLeft
                      } else {
                          rightToWindowRight
                      },
                  )
              var x = 0
              for (index in xCandidates.indices) {
                  val xCandidate =
                      xCandidates[index].position(
                          anchorBounds = anchorBounds,
                          windowSize = windowSize,
                          menuWidth = popupContentSize.width,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-840-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 840
    endLine: 874
    sha256: 826c1cf75b380b267cfb4895d7ed060e79f769a804e8a15e479d11a8eab5eca3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                          layoutDirection = layoutDirection,
                      )
                  if (
                      index == xCandidates.lastIndex ||
                          (xCandidate >= 0 && xCandidate + popupContentSize.width <= windowSize.width)
                  ) {
                      x = xCandidate
                      break
                  }
              }

              val yCandidates =
                  listOf(
                      topToAnchorBottom,
                      bottomToAnchorTop,
                      if (anchorBounds.center.y < windowSize.height / 2) {
                          topToWindowTop
                      } else {
                          bottomToWindowBottom
                      },
                  )
              var y = 0
              for (index in yCandidates.indices) {
                  var yCandidate =
                      yCandidates[index].position(
                          anchorBounds = anchorBounds,
                          windowSize = windowSize,
                          menuHeight = popupContentSize.height,
                      )
                  if (index == yCandidates.lastIndex) {
                      yCandidate =
                          if (popupContentSize.height >= windowSize.height - 2 * verticalMargin) {
                              Alignment.CenterVertically.align(
                                  size = popupContentSize.height,
                                  space = windowSize.height,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-875-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 875
    endLine: 909
    sha256: 1cf5c0ead94d5fd642d5b09cadf3d0e5ddd3e5b76f6274ee1fbf7cfec02c6c87
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              )
                          } else {
                              yCandidate.coerceIn(
                                  verticalMargin,
                                  windowSize.height - verticalMargin - popupContentSize.height,
                              )
                          }
                  }
                  if (
                      index == yCandidates.lastIndex ||
                          (yCandidate >= 0 && yCandidate + popupContentSize.height <= windowSize.height)
                  ) {
                      y = yCandidate
                      break
                  }
              }

              val menuOffset = IntOffset(x, y)
              transformOrigin =
                  calculateTransformOrigin(anchorBounds, IntRect(offset = menuOffset, popupContentSize))
              onPositionCalculated(
                  /* anchorBounds = */ anchorBounds,
                  /* menuBounds = */ IntRect(offset = menuOffset, size = popupContentSize),
              )
              return menuOffset
          }
      }

      private class ExposedDropdownMenuAnchorElement(val updateStateOnAttach: () -> Unit) :
          ModifierNodeElement<ExposedDropdownMenuAnchorNode>() {
          override fun create() = ExposedDropdownMenuAnchorNode(updateStateOnAttach)

          override fun update(node: ExposedDropdownMenuAnchorNode) {
              node.updateStateOnAttach = updateStateOnAttach
          }
  - id: live-androidx-material3-exposed-dropdown-menu-lines-910-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 910
    endLine: 944
    sha256: 3323c45adec6512fdde875e87a15a4a236990ed2e1d520d66c2f13737ccccf82
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
      
          override fun InspectorInfo.inspectableProperties() {
              name = "exposedDropdownMenuAnchorType"
              properties["updateStateOnAttach"] = updateStateOnAttach
          }

          override fun equals(other: Any?): Boolean {
              if (this === other) return true
              if (other !is ExposedDropdownMenuAnchorElement) return false

              return updateStateOnAttach === other.updateStateOnAttach
          }

          override fun hashCode(): Int {
              return updateStateOnAttach.hashCode()
          }
      }

      private class ExposedDropdownMenuAnchorNode(var updateStateOnAttach: () -> Unit) : Modifier.Node() {
          override fun onAttach() {
              updateStateOnAttach()
          }
      }

      private fun Modifier.expandable(
          expanded: Boolean,
          onExpandedChange: () -> Unit,
          anchorType: ExposedDropdownMenuAnchorType,
          alwaysFocusable: MutableState<Boolean>,
          expandedDescription: String,
          collapsedDescription: String,
          toggleDescription: String,
          keyboardController: SoftwareKeyboardController?,
          focusRequester: FocusRequester,
      ) =
  - id: live-androidx-material3-exposed-dropdown-menu-lines-945-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 945
    endLine: 979
    sha256: 569cec18e8ec263505c41b355270d7707ae9cc1e1a89abfb26effe18897ca63c
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
          pointerInput(onExpandedChange) {
                  awaitEachGesture {
                      // Modifier.clickable makes the ExposedDropdownMenuBox capture focus first instead
                      // of the text field, which would be a confusing user experience, so we use
                      // Modifier.pointerInput in the Initial pass to observe events before the text field
                      // consumes them in the Main pass.
                      val downEvent = awaitFirstDown(pass = PointerEventPass.Initial)
                      if (anchorType == ExposedDropdownMenuAnchorType.SecondaryEditable) {
                          downEvent.consume()
                      }
                      val upEvent = waitForUpOrCancellation(pass = PointerEventPass.Initial)
                      if (upEvent != null) {
                          onExpandedChange()
                      }
                  }
              }
              .onPreviewKeyEvent {
                  // Make sure keyboard input works like if Modifier.clickable was set.
                  if (it.isClick) {
                      if (anchorType != ExposedDropdownMenuAnchorType.PrimaryEditable) {
                          onExpandedChange()
                      } else if (it.isEnterMinusSpacebar) {
                          // Primary editable shouldn't expand menu via spacebar.
                          // TODO: First menu item shouldn't have darker background before gaining focus.
                          onExpandedChange()
                          return@onPreviewKeyEvent true
                      }
                  }

                  if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable && expanded) {
                      // Since we make the popup menu not focusable for PrimaryEditable to not interrupt
                      // typing, we need to make sure the menu becomes focusable when the user try to
                      // reach the menu via keyboard navigation.
                      if (
                          it.key == Key.Tab ||
  - id: live-androidx-material3-exposed-dropdown-menu-lines-980-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: 4f62eee6bfdd6515cc005c0006087f9aa807a549
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 980
    endLine: 1014
    sha256: 319b04079badae2bdcc1256735d83d8a5220f68f13471115dd58f1159ce4ab4a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                              it.key == Key.DirectionDown ||
                              it.key == Key.NumPadDirectionDown ||
                              it.key == Key.DirectionUp ||
                              it.key == Key.NumPadDirectionUp
                      ) {
                          alwaysFocusable.value = true
                          return@onPreviewKeyEvent true
                      }
                  }

                  alwaysFocusable.value = false
                  return@onPreviewKeyEvent false
              }
              .semantics {
                  if (anchorType == ExposedDropdownMenuAnchorType.SecondaryEditable) {
                      role = Role.Button
                      stateDescription = if (expanded) expandedDescription else collapsedDescription
                      contentDescription = toggleDescription
                  } else {
                      role = Role.DropdownList
                  }
                  onClick {
                      if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable) {
                          focusRequester.requestFocus()
                      }
                      onExpandedChange()
                      if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable) {
                          keyboardController?.show()
                      }
                      true
                  }
              }

      private val KeyEvent.isClick: Boolean
          get() = type == KeyUp && (isEnterMinusSpacebar || key == Key.Spacebar)
compose:
  id: live-androidx-material3-exposed-dropdown-menu
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.ExposedDropdownMenuBox
  sections:
    - id: live-androidx-material3-exposed-dropdown-menu-lines-1
      title: Material 3 exposed dropdown menu source (lines 1–35)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-1-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-1015
      title: Material 3 exposed dropdown menu source (lines 1015–1049)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-1015-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-1050
      title: Material 3 exposed dropdown menu source (lines 1050–1072)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-1050-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-106
      title: Material 3 exposed dropdown menu source (lines 106–140)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-106-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-141
      title: Material 3 exposed dropdown menu source (lines 141–175)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-141-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-176
      title: Material 3 exposed dropdown menu source (lines 176–210)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-176-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-211
      title: Material 3 exposed dropdown menu source (lines 211–245)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-211-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-246
      title: Material 3 exposed dropdown menu source (lines 246–280)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-246-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-281
      title: Material 3 exposed dropdown menu source (lines 281–315)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-281-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-316
      title: Material 3 exposed dropdown menu source (lines 316–350)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-316-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-351
      title: Material 3 exposed dropdown menu source (lines 351–385)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-351-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-36
      title: Material 3 exposed dropdown menu source (lines 36–70)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-36-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-386
      title: Material 3 exposed dropdown menu source (lines 386–420)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-386-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-421
      title: Material 3 exposed dropdown menu source (lines 421–455)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-421-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-456
      title: Material 3 exposed dropdown menu source (lines 456–488)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-456-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-489
      title: Material 3 exposed dropdown menu source (lines 489–515)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-489-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-516
      title: Material 3 exposed dropdown menu source (lines 516–544)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-516-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-545
      title: Material 3 exposed dropdown menu source (lines 545–575)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-545-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-576
      title: Material 3 exposed dropdown menu source (lines 576–610)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-576-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-611
      title: Material 3 exposed dropdown menu source (lines 611–642)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-611-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-643
      title: Material 3 exposed dropdown menu source (lines 643–669)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-643-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-670
      title: Material 3 exposed dropdown menu source (lines 670–701)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-670-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-702
      title: Material 3 exposed dropdown menu source (lines 702–734)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-702-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-71
      title: Material 3 exposed dropdown menu source (lines 71–105)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-71-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-735
      title: Material 3 exposed dropdown menu source (lines 735–769)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-735-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-770
      title: Material 3 exposed dropdown menu source (lines 770–804)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-770-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-805
      title: Material 3 exposed dropdown menu source (lines 805–839)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-805-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-840
      title: Material 3 exposed dropdown menu source (lines 840–874)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-840-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-875
      title: Material 3 exposed dropdown menu source (lines 875–909)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-875-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-910
      title: Material 3 exposed dropdown menu source (lines 910–944)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-910-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-945
      title: Material 3 exposed dropdown menu source (lines 945–979)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-945-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-980
      title: Material 3 exposed dropdown menu source (lines 980–1014)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-980-source
      relatedIds: []
---

# Material 3 exposed dropdown menu source

Public source: https://android.googlesource.com/platform/frameworks/support/+/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt

## Material 3 exposed dropdown menu source (lines 1–35)

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

import androidx.compose.animation.core.MutableTransitionState
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.ScrollState
import androidx.compose.foundation.gestures.awaitEachGesture
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.waitForUpOrCancellation
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.statusBars
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.selection.LocalTextSelectionColors
import androidx.compose.foundation.text.selection.TextSelectionColors
import androidx.compose.material3.ExposedDropdownMenu as ExposedDropdownMenuExtension
import androidx.compose.material3.internal.BackHandler
import androidx.compose.material3.internal.Icons

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-1-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 1015–1049)


private val KeyEvent.isEnterMinusSpacebar: Boolean
    get() =
        when (key) {
            Key.DirectionCenter,
            Key.Enter,
            Key.NumPadEnter -> true
            else -> false
        }

private fun calculateMaxHeight(
    windowBounds: IntRect,
    anchorBounds: Rect?,
    verticalMargin: Int,
): Int {
    anchorBounds ?: return 0

    val marginedWindowTop = windowBounds.top + verticalMargin
    val marginedWindowBottom = windowBounds.bottom - verticalMargin
    val availableHeight =
        if (anchorBounds.top > windowBounds.bottom || anchorBounds.bottom < windowBounds.top) {
            marginedWindowBottom - marginedWindowTop
        } else {
            val heightAbove = anchorBounds.top - marginedWindowTop
            val heightBelow = marginedWindowBottom - anchorBounds.bottom
            max(heightAbove, heightBelow).roundToInt()
        }

    return max(availableHeight, 0)
}

// Don't use `boundsInWindow()` because it can report 0 when the window is animating/resizing
private fun LayoutCoordinates?.getAnchorBounds(): Rect =
    if (this == null || !this.isAttached) Rect.Zero else Rect(positionInWindow(), size.toSize())


Sources: [live-androidx-material3-exposed-dropdown-menu-lines-1015-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 1050–1072)

internal expect class WindowBoundsCalculator {
    fun getVisibleWindowBounds(): IntRect
}

@Composable internal expect fun platformWindowBoundsCalculator(): WindowBoundsCalculator

@Composable internal expect fun OnPlatformWindowBoundsChange(block: () -> Unit)

/**
 * Creates a [PopupProperties] used for [ExposedDropdownMenuBoxScope.ExposedDropdownMenu].
 *
 * @param anchorType the type of element that is anchoring the menu. See
 *   [ExposedDropdownMenuAnchorType].
 */
@Composable
internal expect fun popupPropertiesForAnchorType(
    anchorType: ExposedDropdownMenuAnchorType,
    alwaysFocusable: Boolean,
): PopupProperties

private val ExposedDropdownMenuItemHorizontalPadding
    get() = 16.dp


Sources: [live-androidx-material3-exposed-dropdown-menu-lines-1050-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 106–140)

 * Exposed dropdown menus, sometimes also called "spinners" or "combo boxes", display the currently
 * selected item in a text field to which the menu is anchored. In some cases, it can accept and
 * display user input (whether or not it’s listed as a menu choice), in which case it may be used to
 * implement autocomplete.
 *
 * ![Exposed dropdown menu
 * image](https://developer.android.com/images/reference/androidx/compose/material3/exposed-dropdown-menu.png)
 *
 * The [ExposedDropdownMenuBox] is expected to contain a [TextField] (or [OutlinedTextField]) and
 * [ExposedDropdownMenu][ExposedDropdownMenuBoxScope.ExposedDropdownMenu] as content. The
 * [menuAnchor][ExposedDropdownMenuBoxScope.menuAnchor] modifier should be passed to the text field.
 *
 * An example of a read-only exposed dropdown menu:
 *
 * @sample androidx.compose.material3.samples.ExposedDropdownMenuSample
 *
 * An example of an editable exposed dropdown menu:
 *
 * @sample androidx.compose.material3.samples.EditableExposedDropdownMenuSample
 *
 * An example of an editable exposed dropdown menu used like a MultiAutoCompleteTextView:
 *
 * @sample androidx.compose.material3.samples.MultiAutocompleteExposedDropdownMenuSample
 * @param expanded whether the menu is expanded or not
 * @param onExpandedChange called when the exposed dropdown menu is clicked and the expansion state
 *   changes.
 * @param modifier the [Modifier] to be applied to this ExposedDropdownMenuBox
 * @param content the content of this ExposedDropdownMenuBox, typically a [TextField] and an
 *   [ExposedDropdownMenu][ExposedDropdownMenuBoxScope.ExposedDropdownMenu].
 */
@Composable
public fun ExposedDropdownMenuBox(
    expanded: Boolean,
    onExpandedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 141–175)

    content: @Composable ExposedDropdownMenuBoxScope.() -> Unit,
) {
    val windowBoundsCalculator = platformWindowBoundsCalculator()
    val density = LocalDensity.current

    val verticalMargin = with(density) { MenuVerticalMargin.roundToPx() }

    var anchorCoordinates by remember { mutableStateOf<LayoutCoordinates?>(null) }
    var anchorWidth by remember { mutableIntStateOf(0) }
    var menuMaxHeight by remember { mutableIntStateOf(0) }

    val focusRequester = remember { FocusRequester() }
    val keyboardController = LocalSoftwareKeyboardController.current
    val expandedDescription = getString(Strings.MenuExpanded)
    val collapsedDescription = getString(Strings.MenuCollapsed)
    val toggleDescription = getString(Strings.ToggleDropdownMenu)
    val anchorTypeState = remember {
        mutableStateOf(ExposedDropdownMenuAnchorType.PrimaryNotEditable)
    }
    val alwaysFocusable = remember { mutableStateOf(false) }

    val scope =
        remember(expanded, onExpandedChange, windowBoundsCalculator, density) {
            object : ExposedDropdownMenuBoxScopeImpl() {
                override fun Modifier.menuAnchor(
                    type: ExposedDropdownMenuAnchorType,
                    enabled: Boolean,
                ): Modifier =
                    this.focusRequester(focusRequester)
                        .then(
                            ExposedDropdownMenuAnchorElement {
                                if (type.hasGreaterOrEqualPriorityThan(anchorTypeState.value)) {
                                    anchorTypeState.value = type
                                }
                            }

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 176–210)

                        )
                        .then(
                            if (!enabled) Modifier
                            else
                                Modifier.expandable(
                                    expanded = expanded,
                                    onExpandedChange = {
                                        anchorTypeState.value = type
                                        onExpandedChange(!expanded)
                                    },
                                    alwaysFocusable = alwaysFocusable,
                                    anchorType = type,
                                    expandedDescription = expandedDescription,
                                    collapsedDescription = collapsedDescription,
                                    toggleDescription = toggleDescription,
                                    keyboardController = keyboardController,
                                    focusRequester = focusRequester,
                                )
                        )

                override val anchorType: ExposedDropdownMenuAnchorType
                    get() = anchorTypeState.value

                override val alwaysFocusable: Boolean
                    get() = alwaysFocusable.value

                override fun Modifier.exposedDropdownSize(matchAnchorWidth: Boolean): Modifier =
                    layout { measurable, constraints ->
                        val menuWidth = constraints.constrainWidth(anchorWidth)
                        val menuConstraints =
                            constraints.copy(
                                maxHeight = constraints.constrainHeight(menuMaxHeight),
                                minWidth =
                                    if (matchAnchorWidth) menuWidth else constraints.minWidth,
                                maxWidth =

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-176-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 211–245)

                                    if (matchAnchorWidth) menuWidth else constraints.maxWidth,
                            )
                        val placeable = measurable.measure(menuConstraints)
                        layout(placeable.width, placeable.height) { placeable.place(0, 0) }
                    }
            }
        }

    Box(
        modifier.onGloballyPositioned {
            anchorCoordinates = it
            anchorWidth = it.size.width
            menuMaxHeight =
                calculateMaxHeight(
                    windowBounds = windowBoundsCalculator.getVisibleWindowBounds(),
                    anchorBounds = anchorCoordinates.getAnchorBounds(),
                    verticalMargin = verticalMargin,
                )
        }
    ) {
        scope.content()
    }

    if (expanded) {
        OnPlatformWindowBoundsChange {
            menuMaxHeight =
                calculateMaxHeight(
                    windowBounds = windowBoundsCalculator.getVisibleWindowBounds(),
                    anchorBounds = anchorCoordinates.getAnchorBounds(),
                    verticalMargin = verticalMargin,
                )
        }
    }

    SideEffect { if (expanded) focusRequester.requestFocus() }

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-211-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 246–280)


    // Back events are handled in the Popup layer if the menu is focusable.
    // If it's not focusable, we handle them here.
    BackHandler(enabled = expanded) { onExpandedChange(false) }
}

/** Scope for [ExposedDropdownMenuBox]. */
public sealed class ExposedDropdownMenuBoxScope {
    /**
     * Modifier which should be applied to an element inside the [ExposedDropdownMenuBoxScope],
     * typically a text field or an icon within the text field. It's responsible for requesting
     * focus, and if [enabled], expanding/collapsing the menu on click and applying semantics.
     *
     * @param type the type of element that is anchoring the menu. See
     *   [ExposedDropdownMenuAnchorType].
     * @param enabled whether controlling the menu via this anchor is enabled. When `false`, the
     *   component will not expand or collapse the menu in response to user input, and menu
     *   semantics will be invisible to accessibility services. Note that this value only controls
     *   interactions with the menu. It does not affect the enabled state of other kinds of
     *   interactions, such as [TextField]'s `enabled` parameter.
     */
    public abstract fun Modifier.menuAnchor(
        type: ExposedDropdownMenuAnchorType,
        enabled: Boolean = true,
    ): Modifier

    /**
     * Modifier which should be applied to a menu placed inside the [ExposedDropdownMenuBoxScope].
     * It will set constraints on the width and height of the menu so it will not overlap the text
     * field or software keyboard.
     *
     * [ExposedDropdownMenu] applies this modifier automatically, so this is only needed when using
     * custom menu components.
     *
     * @param matchAnchorWidth whether the menu's width should be forcefully constrained to match

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-246-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 281–315)

     *   the width of the text field to which it's attached.
     */
    public abstract fun Modifier.exposedDropdownSize(matchAnchorWidth: Boolean = true): Modifier

    internal abstract val anchorType: ExposedDropdownMenuAnchorType

    internal abstract val alwaysFocusable: Boolean

    @ExperimentalMaterial3Api
    @Deprecated(
        message = "Use the version of ExposedDropdownMenu defined as an extension method",
        level = DeprecationLevel.HIDDEN,
    )
    @Composable
    public fun ExposedDropdownMenu(
        expanded: Boolean,
        onDismissRequest: () -> Unit,
        modifier: Modifier = Modifier,
        scrollState: ScrollState = rememberScrollState(),
        matchAnchorWidth: Boolean = true,
        shape: Shape = MenuDefaults.shape,
        containerColor: Color = MenuDefaults.containerColor,
        tonalElevation: Dp = MenuDefaults.TonalElevation,
        shadowElevation: Dp = MenuDefaults.ShadowElevation,
        border: BorderStroke? = null,
        content: @Composable ColumnScope.() -> Unit,
    ) {
        ExposedDropdownMenuExtension(
            expanded = expanded,
            onDismissRequest = onDismissRequest,
            modifier = modifier,
            scrollState = scrollState,
            matchAnchorWidth = matchAnchorWidth,
            shape = shape,
            containerColor = containerColor,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-281-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 316–350)

            tonalElevation = tonalElevation,
            shadowElevation = shadowElevation,
            border = border,
            content = content,
        )
    }
}

/**
 * The composable defining the exposed dropdown menu popup. It should be used inside the content of
 * [ExposedDropdownMenuBox].
 *
 * @param expanded whether the menu is expanded
 * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
 *   outside the menu's bounds
 * @param modifier the [Modifier] to be applied to this menu
 * @param scrollState a [ScrollState] used by the menu's content for items vertical scrolling
 * @param matchAnchorWidth whether the menu's width should be forcefully constrained to match the
 *   width of the text field to which it's attached.
 * @param shape the shape of the menu
 * @param containerColor the container color of the menu
 * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
 *   overlay is applied on top of the container. A higher tonal elevation value will result in a
 *   darker color in light theme and lighter color in dark theme. See also: [Surface].
 * @param shadowElevation the elevation for the shadow below the menu
 * @param border the border to draw around the container of the menu. Pass `null` for no border.
 * @param content the content of the menu
 */
@Composable
public fun ExposedDropdownMenuBoxScope.ExposedDropdownMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    scrollState: ScrollState = rememberScrollState(),
    matchAnchorWidth: Boolean = true,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-316-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 351–385)

    shape: Shape = MenuDefaults.shape,
    containerColor: Color = MenuDefaults.containerColor,
    tonalElevation: Dp = MenuDefaults.TonalElevation,
    shadowElevation: Dp = MenuDefaults.ShadowElevation,
    border: BorderStroke? = null,
    content: @Composable ColumnScope.() -> Unit,
) {
    // Workaround for b/326394521. We create a state that's read in `calculatePosition`.
    // Then trigger a state change in `OnPlatformWindowBoundsChange` to force recalculation.
    val keyboardSignalState = remember { mutableStateOf(Unit, neverEqualPolicy()) }
    val density = LocalDensity.current
    val topWindowInsets = WindowInsets.statusBars.getTop(density)

    if (expanded) {
        OnPlatformWindowBoundsChange { keyboardSignalState.value = Unit }
    }

    // TODO(b/326064777): use DropdownMenu when it supports custom PositionProvider
    val expandedState = remember { MutableTransitionState(false) }
    expandedState.targetState = expanded

    if (expandedState.currentState || expandedState.targetState) {
        val popupPositionProvider =
            remember(density, topWindowInsets) {
                ExposedDropdownMenuPositionProvider(
                    density = density,
                    topWindowInsets = topWindowInsets,
                    keyboardSignalState = keyboardSignalState,
                )
            }

        Popup(
            onDismissRequest = onDismissRequest,
            popupPositionProvider = popupPositionProvider,
            properties = popupPropertiesForAnchorType(anchorType, alwaysFocusable),

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-351-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 36–70)

import androidx.compose.material3.internal.MenuPosition
import androidx.compose.material3.internal.Strings
import androidx.compose.material3.internal.getString
import androidx.compose.material3.tokens.FilledAutocompleteTokens
import androidx.compose.material3.tokens.OutlinedAutocompleteTokens
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.Stable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.neverEqualPolicy
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.input.key.Key
import androidx.compose.ui.input.key.KeyEvent
import androidx.compose.ui.input.key.KeyEventType.Companion.KeyUp
import androidx.compose.ui.input.key.key
import androidx.compose.ui.input.key.onPreviewKeyEvent
import androidx.compose.ui.input.key.type
import androidx.compose.ui.input.pointer.PointerEventPass
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.LayoutCoordinates
import androidx.compose.ui.layout.layout

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-36-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 386–420)

        ) {
            DropdownMenuContent(
                expandedState = expandedState,
                transformOrigin = { popupPositionProvider.transformOrigin },
                scrollState = scrollState,
                shape = shape,
                containerColor = containerColor,
                tonalElevation = tonalElevation,
                shadowElevation = shadowElevation,
                border = border,
                modifier = modifier.exposedDropdownSize(matchAnchorWidth),
                content = content,
            )
        }
    }
}

// Sealed classes don't allow dynamic anonymous subclasses.
private abstract class ExposedDropdownMenuBoxScopeImpl : ExposedDropdownMenuBoxScope()

/** The type of anchor for an exposed dropdown menu. */
@JvmInline
public value class ExposedDropdownMenuAnchorType private constructor(private val name: String) {
    public companion object {
        /**
         * A non-editable primary anchor of the dropdown menu, such as a read-only text field.
         *
         * When this anchor opens the menu, focus will move to the menu.
         */
        public val PrimaryNotEditable: ExposedDropdownMenuAnchorType
            get() = ExposedDropdownMenuAnchorType("PrimaryNotEditable")

        /**
         * An editable primary anchor of the dropdown menu, such as a text field that allows user
         * input.

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-386-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 421–455)

         *
         * When this anchor opens the menu, focus will remain on the text field in order to allow
         * typing.
         */
        public val PrimaryEditable: ExposedDropdownMenuAnchorType
            get() = ExposedDropdownMenuAnchorType("PrimaryEditable")

        /**
         * A secondary anchor of the dropdown menu that lives alongside an editable primary anchor,
         * such as an icon within an editable text field.
         *
         * When this anchor opens the menu, if accessibility services are enabled, focus will move
         * to the menu. Otherwise, focus will remain on the text field in order to allow typing.
         */
        public val SecondaryEditable: ExposedDropdownMenuAnchorType
            get() = ExposedDropdownMenuAnchorType("SecondaryEditable")
    }

    public override fun toString(): String = name
}

private fun ExposedDropdownMenuAnchorType.hasGreaterOrEqualPriorityThan(
    that: ExposedDropdownMenuAnchorType
): Boolean =
    when (this) {
        ExposedDropdownMenuAnchorType.PrimaryNotEditable,
        ExposedDropdownMenuAnchorType.PrimaryEditable -> true
        ExposedDropdownMenuAnchorType.SecondaryEditable ->
            that == ExposedDropdownMenuAnchorType.SecondaryEditable
        else -> false
    }

/** Contains default values used by Exposed Dropdown Menu. */
public object ExposedDropdownMenuDefaults {
    /**

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-421-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 456–488)

     * Default trailing icon for Exposed Dropdown Menu.
     *
     * @param expanded whether the menu is expanded or not. Affects the appearance of the icon.
     * @param modifier the [Modifier] to be applied to this icon
     */
    @Composable
    public fun TrailingIcon(expanded: Boolean, modifier: Modifier = Modifier) {
        Icon(Icons.Filled.ArrowDropDown, null, modifier.rotate(if (expanded) 180f else 0f))
    }

    /**
     * Creates a [TextFieldColors] that represents the default input text, container, and content
     * colors (including label, placeholder, icons, etc.) used in a [TextField] within an
     * [ExposedDropdownMenuBox].
     *
     * @param focusedTextColor the color used for the input text of this text field when focused
     * @param unfocusedTextColor the color used for the input text of this text field when not
     *   focused
     * @param disabledTextColor the color used for the input text of this text field when disabled
     * @param errorTextColor the color used for the input text of this text field when in error
     *   state
     * @param focusedContainerColor the container color for this text field when focused
     * @param unfocusedContainerColor the container color for this text field when not focused
     * @param disabledContainerColor the container color for this text field when disabled
     * @param errorContainerColor the container color for this text field when in error state
     * @param cursorColor the cursor color for this text field
     * @param errorCursorColor the cursor color for this text field when in error state
     * @param selectionColors the colors used when the input text of this text field is selected
     * @param focusedIndicatorColor the indicator color for this text field when focused
     * @param unfocusedIndicatorColor the indicator color for this text field when not focused
     * @param disabledIndicatorColor the indicator color for this text field when disabled
     * @param errorIndicatorColor the indicator color for this text field when in error state
     * @param focusedLeadingIconColor the leading icon color for this text field when focused

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-456-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 489–515)

     * @param unfocusedLeadingIconColor the leading icon color for this text field when not focused
     * @param disabledLeadingIconColor the leading icon color for this text field when disabled
     * @param errorLeadingIconColor the leading icon color for this text field when in error state
     * @param focusedTrailingIconColor the trailing icon color for this text field when focused
     * @param unfocusedTrailingIconColor the trailing icon color for this text field when not
     *   focused
     * @param disabledTrailingIconColor the trailing icon color for this text field when disabled
     * @param errorTrailingIconColor the trailing icon color for this text field when in error state
     * @param focusedLabelColor the label color for this text field when focused
     * @param unfocusedLabelColor the label color for this text field when not focused
     * @param disabledLabelColor the label color for this text field when disabled
     * @param errorLabelColor the label color for this text field when in error state
     * @param focusedPlaceholderColor the placeholder color for this text field when focused
     * @param unfocusedPlaceholderColor the placeholder color for this text field when not focused
     * @param disabledPlaceholderColor the placeholder color for this text field when disabled
     * @param errorPlaceholderColor the placeholder color for this text field when in error state
     * @param focusedPrefixColor the prefix color for this text field when focused
     * @param unfocusedPrefixColor the prefix color for this text field when not focused
     * @param disabledPrefixColor the prefix color for this text field when disabled
     * @param errorPrefixColor the prefix color for this text field when in error state
     * @param focusedSuffixColor the suffix color for this text field when focused
     * @param unfocusedSuffixColor the suffix color for this text field when not focused
     * @param disabledSuffixColor the suffix color for this text field when disabled
     * @param errorSuffixColor the suffix color for this text field when in error state
     */
    @Composable
    public fun textFieldColors(

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-489-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 516–544)

        focusedTextColor: Color = FilledAutocompleteTokens.FocusInputTextColor.value,
        unfocusedTextColor: Color = FilledAutocompleteTokens.InputTextColor.value,
        disabledTextColor: Color =
            FilledAutocompleteTokens.DisabledInputTextColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledInputTextOpacity
            ),
        errorTextColor: Color = FilledAutocompleteTokens.ErrorInputTextColor.value,
        focusedContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
        unfocusedContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
        disabledContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
        errorContainerColor: Color = FilledAutocompleteTokens.ContainerColor.value,
        cursorColor: Color = FilledAutocompleteTokens.CaretColor.value,
        errorCursorColor: Color = FilledAutocompleteTokens.ErrorFocusCaretColor.value,
        selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
        focusedIndicatorColor: Color = FilledAutocompleteTokens.FocusActiveIndicatorColor.value,
        unfocusedIndicatorColor: Color = FilledAutocompleteTokens.ActiveIndicatorColor.value,
        disabledIndicatorColor: Color =
            FilledAutocompleteTokens.DisabledActiveIndicatorColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledActiveIndicatorOpacity
            ),
        errorIndicatorColor: Color = FilledAutocompleteTokens.ErrorActiveIndicatorColor.value,
        focusedLeadingIconColor: Color = FilledAutocompleteTokens.FocusLeadingIconColor.value,
        unfocusedLeadingIconColor: Color = FilledAutocompleteTokens.LeadingIconColor.value,
        disabledLeadingIconColor: Color =
            FilledAutocompleteTokens.DisabledLeadingIconColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledLeadingIconOpacity
            ),
        errorLeadingIconColor: Color = FilledAutocompleteTokens.ErrorLeadingIconColor.value,
        focusedTrailingIconColor: Color = FilledAutocompleteTokens.FocusTrailingIconColor.value,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-516-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 545–575)

        unfocusedTrailingIconColor: Color = FilledAutocompleteTokens.TrailingIconColor.value,
        disabledTrailingIconColor: Color =
            FilledAutocompleteTokens.DisabledTrailingIconColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledTrailingIconOpacity
            ),
        errorTrailingIconColor: Color = FilledAutocompleteTokens.ErrorTrailingIconColor.value,
        focusedLabelColor: Color = FilledAutocompleteTokens.FocusLabelTextColor.value,
        unfocusedLabelColor: Color = FilledAutocompleteTokens.LabelTextColor.value,
        disabledLabelColor: Color = FilledAutocompleteTokens.DisabledLabelTextColor.value,
        errorLabelColor: Color = FilledAutocompleteTokens.ErrorLabelTextColor.value,
        focusedPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        unfocusedPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        disabledPlaceholderColor: Color =
            FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorPlaceholderColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        focusedPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        unfocusedPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        disabledPrefixColor: Color =
            FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorPrefixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        focusedSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        unfocusedSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,
        disabledSuffixColor: Color =
            FilledAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorSuffixColor: Color = FilledAutocompleteTokens.SupportingTextColor.value,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-545-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 576–610)

    ): TextFieldColors =
        TextFieldDefaults.colors(
            focusedTextColor = focusedTextColor,
            unfocusedTextColor = unfocusedTextColor,
            disabledTextColor = disabledTextColor,
            errorTextColor = errorTextColor,
            focusedContainerColor = focusedContainerColor,
            unfocusedContainerColor = unfocusedContainerColor,
            disabledContainerColor = disabledContainerColor,
            errorContainerColor = errorContainerColor,
            cursorColor = cursorColor,
            errorCursorColor = errorCursorColor,
            selectionColors = selectionColors,
            focusedIndicatorColor = focusedIndicatorColor,
            unfocusedIndicatorColor = unfocusedIndicatorColor,
            disabledIndicatorColor = disabledIndicatorColor,
            errorIndicatorColor = errorIndicatorColor,
            focusedLeadingIconColor = focusedLeadingIconColor,
            unfocusedLeadingIconColor = unfocusedLeadingIconColor,
            disabledLeadingIconColor = disabledLeadingIconColor,
            errorLeadingIconColor = errorLeadingIconColor,
            focusedTrailingIconColor = focusedTrailingIconColor,
            unfocusedTrailingIconColor = unfocusedTrailingIconColor,
            disabledTrailingIconColor = disabledTrailingIconColor,
            errorTrailingIconColor = errorTrailingIconColor,
            focusedLabelColor = focusedLabelColor,
            unfocusedLabelColor = unfocusedLabelColor,
            disabledLabelColor = disabledLabelColor,
            errorLabelColor = errorLabelColor,
            focusedPlaceholderColor = focusedPlaceholderColor,
            unfocusedPlaceholderColor = unfocusedPlaceholderColor,
            disabledPlaceholderColor = disabledPlaceholderColor,
            errorPlaceholderColor = errorPlaceholderColor,
            focusedPrefixColor = focusedPrefixColor,
            unfocusedPrefixColor = unfocusedPrefixColor,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-576-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 611–642)

            disabledPrefixColor = disabledPrefixColor,
            errorPrefixColor = errorPrefixColor,
            focusedSuffixColor = focusedSuffixColor,
            unfocusedSuffixColor = unfocusedSuffixColor,
            disabledSuffixColor = disabledSuffixColor,
            errorSuffixColor = errorSuffixColor,
        )

    /**
     * Creates a [TextFieldColors] that represents the default input text, container, and content
     * colors (including label, placeholder, icons, etc.) used in an [OutlinedTextField] within an
     * [ExposedDropdownMenuBox].
     *
     * @param focusedTextColor the color used for the input text of this text field when focused
     * @param unfocusedTextColor the color used for the input text of this text field when not
     *   focused
     * @param disabledTextColor the color used for the input text of this text field when disabled
     * @param errorTextColor the color used for the input text of this text field when in error
     *   state
     * @param focusedContainerColor the container color for this text field when focused
     * @param unfocusedContainerColor the container color for this text field when not focused
     * @param disabledContainerColor the container color for this text field when disabled
     * @param errorContainerColor the container color for this text field when in error state
     * @param cursorColor the cursor color for this text field
     * @param errorCursorColor the cursor color for this text field when in error state
     * @param selectionColors the colors used when the input text of this text field is selected
     * @param focusedBorderColor the border color for this text field when focused
     * @param unfocusedBorderColor the border color for this text field when not focused
     * @param disabledBorderColor the border color for this text field when disabled
     * @param errorBorderColor the border color for this text field when in error state
     * @param focusedLeadingIconColor the leading icon color for this text field when focused
     * @param unfocusedLeadingIconColor the leading icon color for this text field when not focused

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-611-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 643–669)

     * @param disabledLeadingIconColor the leading icon color for this text field when disabled
     * @param errorLeadingIconColor the leading icon color for this text field when in error state
     * @param focusedTrailingIconColor the trailing icon color for this text field when focused
     * @param unfocusedTrailingIconColor the trailing icon color for this text field when not
     *   focused
     * @param disabledTrailingIconColor the trailing icon color for this text field when disabled
     * @param errorTrailingIconColor the trailing icon color for this text field when in error state
     * @param focusedLabelColor the label color for this text field when focused
     * @param unfocusedLabelColor the label color for this text field when not focused
     * @param disabledLabelColor the label color for this text field when disabled
     * @param errorLabelColor the label color for this text field when in error state
     * @param focusedPlaceholderColor the placeholder color for this text field when focused
     * @param unfocusedPlaceholderColor the placeholder color for this text field when not focused
     * @param disabledPlaceholderColor the placeholder color for this text field when disabled
     * @param errorPlaceholderColor the placeholder color for this text field when in error state
     * @param focusedPrefixColor the prefix color for this text field when focused
     * @param unfocusedPrefixColor the prefix color for this text field when not focused
     * @param disabledPrefixColor the prefix color for this text field when disabled
     * @param errorPrefixColor the prefix color for this text field when in error state
     * @param focusedSuffixColor the suffix color for this text field when focused
     * @param unfocusedSuffixColor the suffix color for this text field when not focused
     * @param disabledSuffixColor the suffix color for this text field when disabled
     * @param errorSuffixColor the suffix color for this text field when in error state
     */
    @Composable
    public fun outlinedTextFieldColors(
        focusedTextColor: Color = OutlinedAutocompleteTokens.FocusInputTextColor.value,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-643-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 670–701)

        unfocusedTextColor: Color = OutlinedAutocompleteTokens.InputTextColor.value,
        disabledTextColor: Color =
            OutlinedAutocompleteTokens.DisabledInputTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledInputTextOpacity
            ),
        errorTextColor: Color = OutlinedAutocompleteTokens.ErrorInputTextColor.value,
        focusedContainerColor: Color = Color.Transparent,
        unfocusedContainerColor: Color = Color.Transparent,
        disabledContainerColor: Color = Color.Transparent,
        errorContainerColor: Color = Color.Transparent,
        cursorColor: Color = OutlinedAutocompleteTokens.CaretColor.value,
        errorCursorColor: Color = OutlinedAutocompleteTokens.ErrorFocusCaretColor.value,
        selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
        focusedBorderColor: Color = OutlinedAutocompleteTokens.FocusOutlineColor.value,
        unfocusedBorderColor: Color = OutlinedAutocompleteTokens.OutlineColor.value,
        disabledBorderColor: Color =
            OutlinedAutocompleteTokens.DisabledOutlineColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledOutlineOpacity
            ),
        errorBorderColor: Color = OutlinedAutocompleteTokens.ErrorOutlineColor.value,
        focusedLeadingIconColor: Color = OutlinedAutocompleteTokens.FocusLeadingIconColor.value,
        unfocusedLeadingIconColor: Color = OutlinedAutocompleteTokens.LeadingIconColor.value,
        disabledLeadingIconColor: Color =
            OutlinedAutocompleteTokens.DisabledLeadingIconColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledLeadingIconOpacity
            ),
        errorLeadingIconColor: Color = OutlinedAutocompleteTokens.ErrorLeadingIconColor.value,
        focusedTrailingIconColor: Color = OutlinedAutocompleteTokens.FocusTrailingIconColor.value,
        unfocusedTrailingIconColor: Color = OutlinedAutocompleteTokens.TrailingIconColor.value,
        disabledTrailingIconColor: Color =
            OutlinedAutocompleteTokens.DisabledTrailingIconColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledTrailingIconOpacity

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-670-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 702–734)

            ),
        errorTrailingIconColor: Color = OutlinedAutocompleteTokens.ErrorTrailingIconColor.value,
        focusedLabelColor: Color = OutlinedAutocompleteTokens.FocusLabelTextColor.value,
        unfocusedLabelColor: Color = OutlinedAutocompleteTokens.LabelTextColor.value,
        disabledLabelColor: Color =
            OutlinedAutocompleteTokens.DisabledLabelTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledLabelTextOpacity
            ),
        errorLabelColor: Color = OutlinedAutocompleteTokens.ErrorLabelTextColor.value,
        focusedPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        unfocusedPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        disabledPlaceholderColor: Color =
            OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorPlaceholderColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        focusedPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        unfocusedPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        disabledPrefixColor: Color =
            OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorPrefixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        focusedSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        unfocusedSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
        disabledSuffixColor: Color =
            OutlinedAutocompleteTokens.DisabledSupportingTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.DisabledSupportingTextOpacity
            ),
        errorSuffixColor: Color = OutlinedAutocompleteTokens.SupportingTextColor.value,
    ): TextFieldColors =
        OutlinedTextFieldDefaults.colors(
            focusedTextColor = focusedTextColor,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-702-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 71–105)

import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.layout.positionInWindow
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.platform.SoftwareKeyboardController
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.contentDescription
import androidx.compose.ui.semantics.onClick
import androidx.compose.ui.semantics.role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.semantics.stateDescription
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.IntRect
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.constrainHeight
import androidx.compose.ui.unit.constrainWidth
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.toSize
import androidx.compose.ui.window.Popup
import androidx.compose.ui.window.PopupProperties
import kotlin.jvm.JvmInline
import kotlin.math.max
import kotlin.math.roundToInt

/**
 * [Material Design exposed dropdown menu](https://m3.material.io/components/menus/overview)
 *
 * Menus display a list of choices on a temporary surface. They appear when users interact with a
 * button, action, or other control.
 *

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-71-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 735–769)

            unfocusedTextColor = unfocusedTextColor,
            disabledTextColor = disabledTextColor,
            errorTextColor = errorTextColor,
            focusedContainerColor = focusedContainerColor,
            unfocusedContainerColor = unfocusedContainerColor,
            disabledContainerColor = disabledContainerColor,
            errorContainerColor = errorContainerColor,
            cursorColor = cursorColor,
            errorCursorColor = errorCursorColor,
            selectionColors = selectionColors,
            focusedBorderColor = focusedBorderColor,
            unfocusedBorderColor = unfocusedBorderColor,
            disabledBorderColor = disabledBorderColor,
            errorBorderColor = errorBorderColor,
            focusedLeadingIconColor = focusedLeadingIconColor,
            unfocusedLeadingIconColor = unfocusedLeadingIconColor,
            disabledLeadingIconColor = disabledLeadingIconColor,
            errorLeadingIconColor = errorLeadingIconColor,
            focusedTrailingIconColor = focusedTrailingIconColor,
            unfocusedTrailingIconColor = unfocusedTrailingIconColor,
            disabledTrailingIconColor = disabledTrailingIconColor,
            errorTrailingIconColor = errorTrailingIconColor,
            focusedLabelColor = focusedLabelColor,
            unfocusedLabelColor = unfocusedLabelColor,
            disabledLabelColor = disabledLabelColor,
            errorLabelColor = errorLabelColor,
            focusedPlaceholderColor = focusedPlaceholderColor,
            unfocusedPlaceholderColor = unfocusedPlaceholderColor,
            disabledPlaceholderColor = disabledPlaceholderColor,
            errorPlaceholderColor = errorPlaceholderColor,
            focusedPrefixColor = focusedPrefixColor,
            unfocusedPrefixColor = unfocusedPrefixColor,
            disabledPrefixColor = disabledPrefixColor,
            errorPrefixColor = errorPrefixColor,
            focusedSuffixColor = focusedSuffixColor,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-735-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 770–804)

            unfocusedSuffixColor = unfocusedSuffixColor,
            disabledSuffixColor = disabledSuffixColor,
            errorSuffixColor = errorSuffixColor,
        )

    /**
     * Padding for [DropdownMenuItem]s within [ExposedDropdownMenuBoxScope.ExposedDropdownMenu] to
     * align them properly with [TextField] components.
     */
    public val ItemContentPadding: PaddingValues =
        PaddingValues(horizontal = ExposedDropdownMenuItemHorizontalPadding, vertical = 0.dp)
}

@Stable
internal class ExposedDropdownMenuPositionProvider(
    val density: Density,
    val topWindowInsets: Int,
    val keyboardSignalState: State<Unit>? = null,
    val verticalMargin: Int = with(density) { MenuVerticalMargin.roundToPx() },
    val onPositionCalculated: (anchorBounds: IntRect, menuBounds: IntRect) -> Unit = { _, _ -> },
) : DropdownMenuPopupPositionProvider {
    override var transformOrigin by mutableStateOf(TransformOrigin.Center)
        private set

    // Horizontal position
    private val startToAnchorStart = MenuPosition.startToAnchorStart
    private val endToAnchorEnd = MenuPosition.endToAnchorEnd
    private val leftToWindowLeft = MenuPosition.leftToWindowLeft
    private val rightToWindowRight = MenuPosition.rightToWindowRight

    // Vertical position
    private val topToAnchorBottom = MenuPosition.topToAnchorBottom
    private val bottomToAnchorTop = MenuPosition.bottomToAnchorTop
    private val topToWindowTop = MenuPosition.topToWindowTop
    private val bottomToWindowBottom = MenuPosition.bottomToWindowBottom

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-770-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 805–839)


    override fun calculatePosition(
        anchorBounds: IntRect,
        windowSize: IntSize,
        layoutDirection: LayoutDirection,
        popupContentSize: IntSize,
    ): IntOffset {
        // Workaround for b/326394521
        // Read the state because we want any changes to the state to trigger recalculation.
        // See PopupLayout.snapshotStateObserver and PopupLayout.onCommitAffectingPopupPosition
        // for more info.
        keyboardSignalState?.value

        // Workaround for b/256233441
        // Popup fails to account for window insets so we do it here instead
        @Suppress("NAME_SHADOWING")
        val windowSize = IntSize(windowSize.width, windowSize.height + topWindowInsets)

        val xCandidates =
            listOf(
                startToAnchorStart,
                endToAnchorEnd,
                if (anchorBounds.center.x < windowSize.width / 2) {
                    leftToWindowLeft
                } else {
                    rightToWindowRight
                },
            )
        var x = 0
        for (index in xCandidates.indices) {
            val xCandidate =
                xCandidates[index].position(
                    anchorBounds = anchorBounds,
                    windowSize = windowSize,
                    menuWidth = popupContentSize.width,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-805-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 840–874)

                    layoutDirection = layoutDirection,
                )
            if (
                index == xCandidates.lastIndex ||
                    (xCandidate >= 0 && xCandidate + popupContentSize.width <= windowSize.width)
            ) {
                x = xCandidate
                break
            }
        }

        val yCandidates =
            listOf(
                topToAnchorBottom,
                bottomToAnchorTop,
                if (anchorBounds.center.y < windowSize.height / 2) {
                    topToWindowTop
                } else {
                    bottomToWindowBottom
                },
            )
        var y = 0
        for (index in yCandidates.indices) {
            var yCandidate =
                yCandidates[index].position(
                    anchorBounds = anchorBounds,
                    windowSize = windowSize,
                    menuHeight = popupContentSize.height,
                )
            if (index == yCandidates.lastIndex) {
                yCandidate =
                    if (popupContentSize.height >= windowSize.height - 2 * verticalMargin) {
                        Alignment.CenterVertically.align(
                            size = popupContentSize.height,
                            space = windowSize.height,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-840-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 875–909)

                        )
                    } else {
                        yCandidate.coerceIn(
                            verticalMargin,
                            windowSize.height - verticalMargin - popupContentSize.height,
                        )
                    }
            }
            if (
                index == yCandidates.lastIndex ||
                    (yCandidate >= 0 && yCandidate + popupContentSize.height <= windowSize.height)
            ) {
                y = yCandidate
                break
            }
        }

        val menuOffset = IntOffset(x, y)
        transformOrigin =
            calculateTransformOrigin(anchorBounds, IntRect(offset = menuOffset, popupContentSize))
        onPositionCalculated(
            /* anchorBounds = */ anchorBounds,
            /* menuBounds = */ IntRect(offset = menuOffset, size = popupContentSize),
        )
        return menuOffset
    }
}

private class ExposedDropdownMenuAnchorElement(val updateStateOnAttach: () -> Unit) :
    ModifierNodeElement<ExposedDropdownMenuAnchorNode>() {
    override fun create() = ExposedDropdownMenuAnchorNode(updateStateOnAttach)

    override fun update(node: ExposedDropdownMenuAnchorNode) {
        node.updateStateOnAttach = updateStateOnAttach
    }

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-875-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 910–944)


    override fun InspectorInfo.inspectableProperties() {
        name = "exposedDropdownMenuAnchorType"
        properties["updateStateOnAttach"] = updateStateOnAttach
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is ExposedDropdownMenuAnchorElement) return false

        return updateStateOnAttach === other.updateStateOnAttach
    }

    override fun hashCode(): Int {
        return updateStateOnAttach.hashCode()
    }
}

private class ExposedDropdownMenuAnchorNode(var updateStateOnAttach: () -> Unit) : Modifier.Node() {
    override fun onAttach() {
        updateStateOnAttach()
    }
}

private fun Modifier.expandable(
    expanded: Boolean,
    onExpandedChange: () -> Unit,
    anchorType: ExposedDropdownMenuAnchorType,
    alwaysFocusable: MutableState<Boolean>,
    expandedDescription: String,
    collapsedDescription: String,
    toggleDescription: String,
    keyboardController: SoftwareKeyboardController?,
    focusRequester: FocusRequester,
) =

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-910-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 945–979)

    pointerInput(onExpandedChange) {
            awaitEachGesture {
                // Modifier.clickable makes the ExposedDropdownMenuBox capture focus first instead
                // of the text field, which would be a confusing user experience, so we use
                // Modifier.pointerInput in the Initial pass to observe events before the text field
                // consumes them in the Main pass.
                val downEvent = awaitFirstDown(pass = PointerEventPass.Initial)
                if (anchorType == ExposedDropdownMenuAnchorType.SecondaryEditable) {
                    downEvent.consume()
                }
                val upEvent = waitForUpOrCancellation(pass = PointerEventPass.Initial)
                if (upEvent != null) {
                    onExpandedChange()
                }
            }
        }
        .onPreviewKeyEvent {
            // Make sure keyboard input works like if Modifier.clickable was set.
            if (it.isClick) {
                if (anchorType != ExposedDropdownMenuAnchorType.PrimaryEditable) {
                    onExpandedChange()
                } else if (it.isEnterMinusSpacebar) {
                    // Primary editable shouldn't expand menu via spacebar.
                    // TODO: First menu item shouldn't have darker background before gaining focus.
                    onExpandedChange()
                    return@onPreviewKeyEvent true
                }
            }

            if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable && expanded) {
                // Since we make the popup menu not focusable for PrimaryEditable to not interrupt
                // typing, we need to make sure the menu becomes focusable when the user try to
                // reach the menu via keyboard navigation.
                if (
                    it.key == Key.Tab ||

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-945-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 980–1014)

                        it.key == Key.DirectionDown ||
                        it.key == Key.NumPadDirectionDown ||
                        it.key == Key.DirectionUp ||
                        it.key == Key.NumPadDirectionUp
                ) {
                    alwaysFocusable.value = true
                    return@onPreviewKeyEvent true
                }
            }

            alwaysFocusable.value = false
            return@onPreviewKeyEvent false
        }
        .semantics {
            if (anchorType == ExposedDropdownMenuAnchorType.SecondaryEditable) {
                role = Role.Button
                stateDescription = if (expanded) expandedDescription else collapsedDescription
                contentDescription = toggleDescription
            } else {
                role = Role.DropdownList
            }
            onClick {
                if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable) {
                    focusRequester.requestFocus()
                }
                onExpandedChange()
                if (anchorType == ExposedDropdownMenuAnchorType.PrimaryEditable) {
                    keyboardController?.show()
                }
                true
            }
        }

private val KeyEvent.isClick: Boolean
    get() = type == KeyUp && (isEnterMinusSpacebar || key == Key.Spacebar)

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-980-source](https://android.googlesource.com/platform/frameworks/support/+/4f62eee6bfdd6515cc005c0006087f9aa807a549/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)
