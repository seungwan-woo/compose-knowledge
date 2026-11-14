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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-1017-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 1017
    endLine: 1051
    sha256: cd61cbf54a57c9245ef7163d382d8ff5ece486e87a0dbbccd7b4b8f98817760a
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-1052-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 1052
    endLine: 1086
    sha256: 5077db68a41054d98278c4f68bfd955a12b975baca5912e36320f8ca944a4e59
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 516
    endLine: 547
    sha256: 12c065eaea45e0d9242b8283b6c49d42ce24fbf48635cebe9e604b0cb91d5d84
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              focusedTextColor: Color = FilledAutocompleteTokens.FieldFocusInputTextColor.value,
              unfocusedTextColor: Color = FilledAutocompleteTokens.FieldInputTextColor.value,
              disabledTextColor: Color =
                  FilledAutocompleteTokens.FieldDisabledInputTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.FieldDisabledInputTextOpacity
                  ),
              errorTextColor: Color = FilledAutocompleteTokens.FieldErrorInputTextColor.value,
              focusedContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
              unfocusedContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
              disabledContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
              errorContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
              cursorColor: Color = FilledAutocompleteTokens.TextFieldCaretColor.value,
              errorCursorColor: Color = FilledAutocompleteTokens.TextFieldErrorFocusCaretColor.value,
              selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
              focusedIndicatorColor: Color =
                  FilledAutocompleteTokens.TextFieldFocusActiveIndicatorColor.value,
              unfocusedIndicatorColor: Color =
                  FilledAutocompleteTokens.TextFieldActiveIndicatorColor.value,
              disabledIndicatorColor: Color =
                  FilledAutocompleteTokens.TextFieldDisabledActiveIndicatorColor.value.copy(
                      alpha = FilledAutocompleteTokens.TextFieldDisabledActiveIndicatorOpacity
                  ),
              errorIndicatorColor: Color =
                  FilledAutocompleteTokens.TextFieldErrorActiveIndicatorColor.value,
              focusedLeadingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldFocusLeadingIconColor.value,
              unfocusedLeadingIconColor: Color = FilledAutocompleteTokens.TextFieldLeadingIconColor.value,
              disabledLeadingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldDisabledLeadingIconColor.value.copy(
                      alpha = FilledAutocompleteTokens.TextFieldDisabledLeadingIconOpacity
                  ),
              errorLeadingIconColor: Color =
  - id: live-androidx-material3-exposed-dropdown-menu-lines-548-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 548
    endLine: 577
    sha256: 344de8a475168f322f49c53cf2525c2b6cbff71677a809108180c080b3716d44
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  FilledAutocompleteTokens.TextFieldErrorLeadingIconColor.value,
              focusedTrailingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldFocusTrailingIconColor.value,
              unfocusedTrailingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldTrailingIconColor.value,
              disabledTrailingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldDisabledTrailingIconColor.value.copy(
                      alpha = FilledAutocompleteTokens.TextFieldDisabledTrailingIconOpacity
                  ),
              errorTrailingIconColor: Color =
                  FilledAutocompleteTokens.TextFieldErrorTrailingIconColor.value,
              focusedLabelColor: Color = FilledAutocompleteTokens.FieldFocusLabelTextColor.value,
              unfocusedLabelColor: Color = FilledAutocompleteTokens.FieldLabelTextColor.value,
              disabledLabelColor: Color = FilledAutocompleteTokens.FieldDisabledLabelTextColor.value,
              errorLabelColor: Color = FilledAutocompleteTokens.FieldErrorLabelTextColor.value,
              focusedPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              unfocusedPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              disabledPlaceholderColor: Color =
                  FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              focusedPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              unfocusedPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              disabledPrefixColor: Color =
                  FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              focusedSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
  - id: live-androidx-material3-exposed-dropdown-menu-lines-578-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 578
    endLine: 612
    sha256: 34d5d406ec9581d2ea24b06536e2d5db93d62e508818fd7e4ec6e86c6826b8e7
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
              unfocusedSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
              disabledSuffixColor: Color =
                  FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                      alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-613-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 613
    endLine: 646
    sha256: 199d03f323671d24be9e4f07e91fcc97ab50b335d080491a5c5c305ca5ec0c5f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                  focusedPlaceholderColor = focusedPlaceholderColor,
                  unfocusedPlaceholderColor = unfocusedPlaceholderColor,
                  disabledPlaceholderColor = disabledPlaceholderColor,
                  errorPlaceholderColor = errorPlaceholderColor,
                  focusedPrefixColor = focusedPrefixColor,
                  unfocusedPrefixColor = unfocusedPrefixColor,
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-647-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 647
    endLine: 670
    sha256: c18058f0dac8c55f217e1df05cf47b192e6be7c31486e2a69753f154d1c738f3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param disabledBorderColor the border color for this text field when disabled
           * @param errorBorderColor the border color for this text field when in error state
           * @param focusedLeadingIconColor the leading icon color for this text field when focused
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-671-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 671
    endLine: 703
    sha256: 3b80d3c7f489db84295e31b9fd08866b6561f1e8158c821cb0e075ae8f400b61
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
           * @param unfocusedSuffixColor the suffix color for this text field when not focused
           * @param disabledSuffixColor the suffix color for this text field when disabled
           * @param errorSuffixColor the suffix color for this text field when in error state
           */
          @Composable
          public fun outlinedTextFieldColors(
              focusedTextColor: Color = OutlinedAutocompleteTokens.FieldFocusInputTextColor.value,
              unfocusedTextColor: Color = OutlinedAutocompleteTokens.FieldInputTextColor.value,
              disabledTextColor: Color =
                  OutlinedAutocompleteTokens.FieldDisabledInputTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.FieldDisabledInputTextOpacity
                  ),
              errorTextColor: Color = OutlinedAutocompleteTokens.FieldErrorInputTextColor.value,
              focusedContainerColor: Color = Color.Transparent,
              unfocusedContainerColor: Color = Color.Transparent,
              disabledContainerColor: Color = Color.Transparent,
              errorContainerColor: Color = Color.Transparent,
              cursorColor: Color = OutlinedAutocompleteTokens.TextFieldCaretColor.value,
              errorCursorColor: Color = OutlinedAutocompleteTokens.TextFieldErrorFocusCaretColor.value,
              selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
              focusedBorderColor: Color = OutlinedAutocompleteTokens.TextFieldFocusOutlineColor.value,
              unfocusedBorderColor: Color = OutlinedAutocompleteTokens.TextFieldOutlineColor.value,
              disabledBorderColor: Color =
                  OutlinedAutocompleteTokens.TextFieldDisabledOutlineColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.TextFieldDisabledOutlineOpacity
                  ),
              errorBorderColor: Color = OutlinedAutocompleteTokens.TextFieldErrorOutlineColor.value,
              focusedLeadingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldFocusLeadingIconColor.value,
              unfocusedLeadingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldLeadingIconColor.value,
              disabledLeadingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldDisabledLeadingIconColor.value.copy(
  - id: live-androidx-material3-exposed-dropdown-menu-lines-704-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 704
    endLine: 736
    sha256: a6c06c1c21cf1cf6f7c5361e636b6576bac0dd44fb0bdbb34c39b9c36dade235
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      alpha = OutlinedAutocompleteTokens.TextFieldDisabledLeadingIconOpacity
                  ),
              errorLeadingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldErrorLeadingIconColor.value,
              focusedTrailingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldFocusTrailingIconColor.value,
              unfocusedTrailingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldTrailingIconColor.value,
              disabledTrailingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldDisabledTrailingIconColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.TextFieldDisabledTrailingIconOpacity
                  ),
              errorTrailingIconColor: Color =
                  OutlinedAutocompleteTokens.TextFieldErrorTrailingIconColor.value,
              focusedLabelColor: Color = OutlinedAutocompleteTokens.FieldFocusLabelTextColor.value,
              unfocusedLabelColor: Color = OutlinedAutocompleteTokens.FieldLabelTextColor.value,
              disabledLabelColor: Color =
                  OutlinedAutocompleteTokens.FieldDisabledLabelTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.FieldDisabledLabelTextOpacity
                  ),
              errorLabelColor: Color = OutlinedAutocompleteTokens.FieldErrorLabelTextColor.value,
              focusedPlaceholderColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              unfocusedPlaceholderColor: Color =
                  OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              disabledPlaceholderColor: Color =
                  OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorPlaceholderColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              focusedPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              unfocusedPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              disabledPrefixColor: Color =
                  OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-737-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 737
    endLine: 771
    sha256: b639a43fdc99d2c6fc7edd2679b5d4dd77bbf2e8e54ee1f7c6a4a5f03e0878ab
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
                      alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              focusedSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              unfocusedSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
              disabledSuffixColor: Color =
                  OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                      alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
                  ),
              errorSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
          ): TextFieldColors =
              OutlinedTextFieldDefaults.colors(
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-772-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 772
    endLine: 806
    sha256: d5c369a373757e737b5e7116d5bf3cd5b9555fcae702bda8992182ef83ec4edb
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-807-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 807
    endLine: 841
    sha256: cbdbea4073c084de77092fffb422e48993ab2dcddf8a2f5b80e0f886021c4937
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-842-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 842
    endLine: 876
    sha256: c2d09fe61ee54b8cf6d523970aa059e1f84f995e4c0299c6bb961674d2b80346
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-877-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 877
    endLine: 911
    sha256: 254aa981ca05600e0ecb96dba072dcc599792bb2c6bad74440199bcbc68eb14f
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-912-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 912
    endLine: 946
    sha256: 7ca4017cb8f102b069bb10633e952a7b3c965add5e8b5ce1fd5bef441ad9af06
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-947-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 947
    endLine: 981
    sha256: e27422026a0d037b834e8a579176083aa50cc721999bdc93fac17a10908233ec
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |-
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
  - id: live-androidx-material3-exposed-dropdown-menu-lines-982-source
    kind: code
    resource: https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    revision: aecce470261af232883b790016ce79fc51c962ca
    path: compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt
    startLine: 982
    endLine: 1016
    sha256: dd3fe13057c52a075d21278baffea7ea5499637a6d28d42eaa4dc2ac829f01d3
    license: Apache-2.0 (https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/LICENSE.txt)
    excerpt: |2-
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
    - id: live-androidx-material3-exposed-dropdown-menu-lines-1017
      title: Material 3 exposed dropdown menu source (lines 1017–1051)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-1017-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-1052
      title: Material 3 exposed dropdown menu source (lines 1052–1086)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-1052-source
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
      title: Material 3 exposed dropdown menu source (lines 516–547)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-516-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-548
      title: Material 3 exposed dropdown menu source (lines 548–577)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-548-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-578
      title: Material 3 exposed dropdown menu source (lines 578–612)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-578-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-613
      title: Material 3 exposed dropdown menu source (lines 613–646)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-613-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-647
      title: Material 3 exposed dropdown menu source (lines 647–670)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-647-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-671
      title: Material 3 exposed dropdown menu source (lines 671–703)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-671-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-704
      title: Material 3 exposed dropdown menu source (lines 704–736)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-704-source
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
    - id: live-androidx-material3-exposed-dropdown-menu-lines-737
      title: Material 3 exposed dropdown menu source (lines 737–771)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-737-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-772
      title: Material 3 exposed dropdown menu source (lines 772–806)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-772-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-807
      title: Material 3 exposed dropdown menu source (lines 807–841)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-807-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-842
      title: Material 3 exposed dropdown menu source (lines 842–876)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-842-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-877
      title: Material 3 exposed dropdown menu source (lines 877–911)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-877-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-912
      title: Material 3 exposed dropdown menu source (lines 912–946)
      aliases: []
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-912-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-947
      title: Material 3 exposed dropdown menu source (lines 947–981)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-947-source
      relatedIds: []
    - id: live-androidx-material3-exposed-dropdown-menu-lines-982
      title: Material 3 exposed dropdown menu source (lines 982–1016)
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuAnchorType
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-982-source
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

## Material 3 exposed dropdown menu source (lines 1017–1051)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-1017-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 1052–1086)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-1052-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

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

## Material 3 exposed dropdown menu source (lines 516–547)

        focusedTextColor: Color = FilledAutocompleteTokens.FieldFocusInputTextColor.value,
        unfocusedTextColor: Color = FilledAutocompleteTokens.FieldInputTextColor.value,
        disabledTextColor: Color =
            FilledAutocompleteTokens.FieldDisabledInputTextColor.value.copy(
                alpha = FilledAutocompleteTokens.FieldDisabledInputTextOpacity
            ),
        errorTextColor: Color = FilledAutocompleteTokens.FieldErrorInputTextColor.value,
        focusedContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
        unfocusedContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
        disabledContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
        errorContainerColor: Color = FilledAutocompleteTokens.TextFieldContainerColor.value,
        cursorColor: Color = FilledAutocompleteTokens.TextFieldCaretColor.value,
        errorCursorColor: Color = FilledAutocompleteTokens.TextFieldErrorFocusCaretColor.value,
        selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
        focusedIndicatorColor: Color =
            FilledAutocompleteTokens.TextFieldFocusActiveIndicatorColor.value,
        unfocusedIndicatorColor: Color =
            FilledAutocompleteTokens.TextFieldActiveIndicatorColor.value,
        disabledIndicatorColor: Color =
            FilledAutocompleteTokens.TextFieldDisabledActiveIndicatorColor.value.copy(
                alpha = FilledAutocompleteTokens.TextFieldDisabledActiveIndicatorOpacity
            ),
        errorIndicatorColor: Color =
            FilledAutocompleteTokens.TextFieldErrorActiveIndicatorColor.value,
        focusedLeadingIconColor: Color =
            FilledAutocompleteTokens.TextFieldFocusLeadingIconColor.value,
        unfocusedLeadingIconColor: Color = FilledAutocompleteTokens.TextFieldLeadingIconColor.value,
        disabledLeadingIconColor: Color =
            FilledAutocompleteTokens.TextFieldDisabledLeadingIconColor.value.copy(
                alpha = FilledAutocompleteTokens.TextFieldDisabledLeadingIconOpacity
            ),
        errorLeadingIconColor: Color =

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-516-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 548–577)

            FilledAutocompleteTokens.TextFieldErrorLeadingIconColor.value,
        focusedTrailingIconColor: Color =
            FilledAutocompleteTokens.TextFieldFocusTrailingIconColor.value,
        unfocusedTrailingIconColor: Color =
            FilledAutocompleteTokens.TextFieldTrailingIconColor.value,
        disabledTrailingIconColor: Color =
            FilledAutocompleteTokens.TextFieldDisabledTrailingIconColor.value.copy(
                alpha = FilledAutocompleteTokens.TextFieldDisabledTrailingIconOpacity
            ),
        errorTrailingIconColor: Color =
            FilledAutocompleteTokens.TextFieldErrorTrailingIconColor.value,
        focusedLabelColor: Color = FilledAutocompleteTokens.FieldFocusLabelTextColor.value,
        unfocusedLabelColor: Color = FilledAutocompleteTokens.FieldLabelTextColor.value,
        disabledLabelColor: Color = FilledAutocompleteTokens.FieldDisabledLabelTextColor.value,
        errorLabelColor: Color = FilledAutocompleteTokens.FieldErrorLabelTextColor.value,
        focusedPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        unfocusedPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        disabledPlaceholderColor: Color =
            FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorPlaceholderColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        focusedPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        unfocusedPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        disabledPrefixColor: Color =
            FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorPrefixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        focusedSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-548-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 578–612)

        unfocusedSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
        disabledSuffixColor: Color =
            FilledAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                alpha = FilledAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorSuffixColor: Color = FilledAutocompleteTokens.FieldSupportingTextColor.value,
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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-578-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 613–646)

            focusedPlaceholderColor = focusedPlaceholderColor,
            unfocusedPlaceholderColor = unfocusedPlaceholderColor,
            disabledPlaceholderColor = disabledPlaceholderColor,
            errorPlaceholderColor = errorPlaceholderColor,
            focusedPrefixColor = focusedPrefixColor,
            unfocusedPrefixColor = unfocusedPrefixColor,
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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-613-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 647–670)

     * @param disabledBorderColor the border color for this text field when disabled
     * @param errorBorderColor the border color for this text field when in error state
     * @param focusedLeadingIconColor the leading icon color for this text field when focused
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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-647-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 671–703)

     * @param unfocusedSuffixColor the suffix color for this text field when not focused
     * @param disabledSuffixColor the suffix color for this text field when disabled
     * @param errorSuffixColor the suffix color for this text field when in error state
     */
    @Composable
    public fun outlinedTextFieldColors(
        focusedTextColor: Color = OutlinedAutocompleteTokens.FieldFocusInputTextColor.value,
        unfocusedTextColor: Color = OutlinedAutocompleteTokens.FieldInputTextColor.value,
        disabledTextColor: Color =
            OutlinedAutocompleteTokens.FieldDisabledInputTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.FieldDisabledInputTextOpacity
            ),
        errorTextColor: Color = OutlinedAutocompleteTokens.FieldErrorInputTextColor.value,
        focusedContainerColor: Color = Color.Transparent,
        unfocusedContainerColor: Color = Color.Transparent,
        disabledContainerColor: Color = Color.Transparent,
        errorContainerColor: Color = Color.Transparent,
        cursorColor: Color = OutlinedAutocompleteTokens.TextFieldCaretColor.value,
        errorCursorColor: Color = OutlinedAutocompleteTokens.TextFieldErrorFocusCaretColor.value,
        selectionColors: TextSelectionColors = LocalTextSelectionColors.current,
        focusedBorderColor: Color = OutlinedAutocompleteTokens.TextFieldFocusOutlineColor.value,
        unfocusedBorderColor: Color = OutlinedAutocompleteTokens.TextFieldOutlineColor.value,
        disabledBorderColor: Color =
            OutlinedAutocompleteTokens.TextFieldDisabledOutlineColor.value.copy(
                alpha = OutlinedAutocompleteTokens.TextFieldDisabledOutlineOpacity
            ),
        errorBorderColor: Color = OutlinedAutocompleteTokens.TextFieldErrorOutlineColor.value,
        focusedLeadingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldFocusLeadingIconColor.value,
        unfocusedLeadingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldLeadingIconColor.value,
        disabledLeadingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldDisabledLeadingIconColor.value.copy(

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-671-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 704–736)

                alpha = OutlinedAutocompleteTokens.TextFieldDisabledLeadingIconOpacity
            ),
        errorLeadingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldErrorLeadingIconColor.value,
        focusedTrailingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldFocusTrailingIconColor.value,
        unfocusedTrailingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldTrailingIconColor.value,
        disabledTrailingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldDisabledTrailingIconColor.value.copy(
                alpha = OutlinedAutocompleteTokens.TextFieldDisabledTrailingIconOpacity
            ),
        errorTrailingIconColor: Color =
            OutlinedAutocompleteTokens.TextFieldErrorTrailingIconColor.value,
        focusedLabelColor: Color = OutlinedAutocompleteTokens.FieldFocusLabelTextColor.value,
        unfocusedLabelColor: Color = OutlinedAutocompleteTokens.FieldLabelTextColor.value,
        disabledLabelColor: Color =
            OutlinedAutocompleteTokens.FieldDisabledLabelTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.FieldDisabledLabelTextOpacity
            ),
        errorLabelColor: Color = OutlinedAutocompleteTokens.FieldErrorLabelTextColor.value,
        focusedPlaceholderColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        unfocusedPlaceholderColor: Color =
            OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        disabledPlaceholderColor: Color =
            OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorPlaceholderColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        focusedPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        unfocusedPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        disabledPrefixColor: Color =
            OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-704-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

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

## Material 3 exposed dropdown menu source (lines 737–771)

                alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorPrefixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        focusedSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        unfocusedSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
        disabledSuffixColor: Color =
            OutlinedAutocompleteTokens.FieldDisabledSupportingTextColor.value.copy(
                alpha = OutlinedAutocompleteTokens.FieldDisabledSupportingTextOpacity
            ),
        errorSuffixColor: Color = OutlinedAutocompleteTokens.FieldSupportingTextColor.value,
    ): TextFieldColors =
        OutlinedTextFieldDefaults.colors(
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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-737-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 772–806)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-772-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 807–841)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-807-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 842–876)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-842-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 877–911)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-877-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 912–946)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-912-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 947–981)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-947-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)

## Material 3 exposed dropdown menu source (lines 982–1016)

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

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-982-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)
