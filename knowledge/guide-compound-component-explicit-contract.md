---
type: reference
title: "Guidance: Compose compound components through explicit scope and state contracts"
description: AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.
tags:
  - Compose
  - Android
  - curated-guidance
sources:
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
compose:
  id: guide-compound-component-explicit-contract
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.ExposedDropdownMenuBox
  sections:
    - id: guide-compound-component-explicit-contract
      title: "Guidance: Compose compound components through explicit scope and state contracts"
      aliases:
        - androidx.compose.material3.ExposedDropdownMenuBox
        - androidx.compose.material3.ExposedDropdownMenuBoxScope
        - compound component
        - compound pattern
        - 복합 컴포넌트
        - 컴파운드 패턴
      requires:
        - artifact: androidx.compose.material3:material3
          version: null
      sourceIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-106-source
        - live-androidx-material3-exposed-dropdown-menu-lines-141-source
      relatedIds:
        - live-androidx-material3-exposed-dropdown-menu-lines-106
        - live-androidx-material3-exposed-dropdown-menu-lines-141
---

# Guidance: Compose compound components through explicit scope and state contracts

AI-assisted, reviewed guidance bound to exact raw evidence. Released-version applicability is unknown.

## Guidance: Compose compound components through explicit scope and state contracts

Guidance: Here, "compound component" is a repository synthesis for coordinating composable parts through an explicit container contract. Material 3 ExposedDropdownMenuBox demonstrates caller-supplied expanded state and onExpandedChange, a scoped content lambda, and a documented menuAnchor modifier on its text field. Use this as a reference when designing related parts of a component library: expose the state, event, content, and attachment contracts that callers must supply. Limitation: compound component is not presented here as an official Android pattern name. This example establishes neither a React-style namespace API nor an automatic performance improvement; its specific text-field/menu requirements still apply.

Sources: [live-androidx-material3-exposed-dropdown-menu-lines-106-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt), [live-androidx-material3-exposed-dropdown-menu-lines-141-source](https://android.googlesource.com/platform/frameworks/support/+/aecce470261af232883b790016ce79fc51c962ca/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/ExposedDropdownMenu.kt)
