---
type: reference
title: DropdownMenu
description: Public AndroidX source evidence; independently attributed per section.
tags:
  - Compose
  - Android
  - menu
  - popup
sources:
  - id: menu-android-implementation-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar
    revision: androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2
    path: material3-1.3.2/androidMain/androidx/compose/material3/AndroidMenu.android.kt
    startLine: 42
    endLine: 194
    sha256: cc4ee39d16b0ba6b54269e192bd6c4691c70f6e9305e5fd73907237d82999573
    license: Apache-2.0
    excerpt: |-
      actual fun DropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier,
          offset: DpOffset,
          scrollState: ScrollState,
          properties: PopupProperties,
          shape: Shape,
          containerColor: Color,
          tonalElevation: Dp,
          shadowElevation: Dp,
          border: BorderStroke?,
          content: @Composable ColumnScope.() -> Unit
      ) {
          val expandedState = remember { MutableTransitionState(false) }
          expandedState.targetState = expanded

          if (expandedState.currentState || expandedState.targetState) {
              val transformOriginState = remember { mutableStateOf(TransformOrigin.Center) }
              val density = LocalDensity.current
              val popupPositionProvider =
                  remember(offset, density) {
                      DropdownMenuPositionProvider(offset, density) { parentBounds, menuBounds ->
                          transformOriginState.value = calculateTransformOrigin(parentBounds, menuBounds)
                      }
                  }

              Popup(
                  onDismissRequest = onDismissRequest,
                  popupPositionProvider = popupPositionProvider,
                  properties = properties
              ) {
                  DropdownMenuContent(
                      expandedState = expandedState,
                      transformOriginState = transformOriginState,
                      scrollState = scrollState,
                      shape = shape,
                      containerColor = containerColor,
                      tonalElevation = tonalElevation,
                      shadowElevation = shadowElevation,
                      border = border,
                      modifier = modifier,
                      content = content,
                  )
              }
          }
      }

      @Deprecated(
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  expression =
                      "DropdownMenu(\n" +
                          "    expanded = expanded,\n" +
                          "    onDismissRequest = onDismissRequest,\n" +
                          "    modifier = modifier,\n" +
                          "    offset = offset,\n" +
                          "    scrollState = scrollState,\n" +
                          "    properties = properties,\n" +
                          "    shape = MenuDefaults.shape,\n" +
                          "    containerColor = MenuDefaults.containerColor,\n" +
                          "    tonalElevation = MenuDefaults.TonalElevation,\n" +
                          "    shadowElevation = MenuDefaults.ShadowElevation,\n" +
                          "    border = null,\n" +
                          "    content = content,\n" +
                          ")",
              ),
          message =
              "Maintained for binary compatibility. Use overload with parameters for shape, " +
                  "color, elevation, and border."
      )
      @Composable
      fun DropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier = Modifier,
          offset: DpOffset = DpOffset(0.dp, 0.dp),
          scrollState: ScrollState = rememberScrollState(),
          properties: PopupProperties = PopupProperties(focusable = true),
          content: @Composable ColumnScope.() -> Unit
      ) =
          DropdownMenu(
              expanded = expanded,
              onDismissRequest = onDismissRequest,
              modifier = modifier,
              offset = offset,
              scrollState = scrollState,
              properties = properties,
              shape = MenuDefaults.shape,
              containerColor = MenuDefaults.containerColor,
              tonalElevation = MenuDefaults.TonalElevation,
              shadowElevation = MenuDefaults.ShadowElevation,
              border = null,
              content = content,
          )

      @Deprecated(
          level = DeprecationLevel.HIDDEN,
          replaceWith =
              ReplaceWith(
                  expression =
                      "DropdownMenu(expanded,onDismissRequest, modifier, offset, " +
                          "rememberScrollState(), properties, content)",
                  "androidx.compose.foundation.rememberScrollState"
              ),
          message = "Replaced by a DropdownMenu function with a ScrollState parameter"
      )
      @Composable
      fun DropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier = Modifier,
          offset: DpOffset = DpOffset(0.dp, 0.dp),
          properties: PopupProperties = PopupProperties(focusable = true),
          content: @Composable ColumnScope.() -> Unit
      ) =
          DropdownMenu(
              expanded = expanded,
              onDismissRequest = onDismissRequest,
              modifier = modifier,
              offset = offset,
              scrollState = rememberScrollState(),
              properties = properties,
              content = content
          )

      @Composable
      actual fun DropdownMenuItem(
          text: @Composable () -> Unit,
          onClick: () -> Unit,
          modifier: Modifier,
          leadingIcon: @Composable (() -> Unit)?,
          trailingIcon: @Composable (() -> Unit)?,
          enabled: Boolean,
          colors: MenuItemColors,
          contentPadding: PaddingValues,
          interactionSource: MutableInteractionSource?,
      ) {
          DropdownMenuItemContent(
              text = text,
              onClick = onClick,
              modifier = modifier,
              leadingIcon = leadingIcon,
              trailingIcon = trailingIcon,
              enabled = enabled,
              colors = colors,
              contentPadding = contentPadding,
              interactionSource = interactionSource,
          )
      }

      internal actual val DefaultMenuProperties = PopupProperties(focusable = true)
  - id: menu-api-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar
    revision: androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2
    path: material3-1.3.2/commonMain/androidx/compose/material3/Menu.kt
    startLine: 78
    endLine: 138
    sha256: 3137588042e651cdc79ca35b5a0bebb74e976529355e33cf577743ed2766f9c7
    license: Apache-2.0
    excerpt: |2-
       * A [DropdownMenu] behaves similarly to a [Popup], and will use the position of the parent layout
       * to position itself on screen. Commonly a [DropdownMenu] will be placed in a [Box] with a sibling
       * that will be used as the 'anchor'. Note that a [DropdownMenu] by itself will not take up any
       * space in a layout, as the menu is displayed in a separate window, on top of other content.
       *
       * The [content] of a [DropdownMenu] will typically be [DropdownMenuItem]s, as well as custom
       * content. Using [DropdownMenuItem]s will result in a menu that matches the Material specification
       * for menus. Also note that the [content] is placed inside a scrollable [Column], so using a
       * [LazyColumn] as the root layout inside [content] is unsupported.
       *
       * [onDismissRequest] will be called when the menu should close - for example when there is a tap
       * outside the menu, or when the back key is pressed.
       *
       * [DropdownMenu] changes its positioning depending on the available space, always trying to be
       * fully visible. Depending on layout direction, first it will try to align its start to the start
       * of its parent, then its end to the end of its parent, and then to the edge of the window.
       * Vertically, it will try to align its top to the bottom of its parent, then its bottom to top of
       * its parent, and then to the edge of the window.
       *
       * An [offset] can be provided to adjust the positioning of the menu for cases when the layout
       * bounds of its parent do not coincide with its visual bounds.
       *
       * Example usage:
       *
       * @sample androidx.compose.material3.samples.MenuSample
       *
       * Example usage with a [ScrollState] to control the menu items scroll position:
       *
       * @sample androidx.compose.material3.samples.MenuWithScrollStateSample
       *
       * @param expanded whether the menu is expanded or not
       * @param onDismissRequest called when the user requests to dismiss the menu, such as by tapping
       *   outside the menu's bounds
       * @param modifier [Modifier] to be applied to the menu's content
       * @param offset [DpOffset] from the original position of the menu. The offset respects the
       *   [LayoutDirection], so the offset's x position will be added in LTR and subtracted in RTL.
       * @param scrollState a [ScrollState] to used by the menu's content for items vertical scrolling
       * @param properties [PopupProperties] for further customization of this popup's behavior
       * @param shape the shape of the menu
       * @param containerColor the container color of the menu
       * @param tonalElevation when [containerColor] is [ColorScheme.surface], a translucent primary color
       *   overlay is applied on top of the container. A higher tonal elevation value will result in a
       *   darker color in light theme and lighter color in dark theme. See also: [Surface].
       * @param shadowElevation the elevation for the shadow below the menu
       * @param border the border to draw around the container of the menu. Pass `null` for no border.
       * @param content the content of this dropdown menu, typically a [DropdownMenuItem]
       */
      @Composable
      expect fun DropdownMenu(
          expanded: Boolean,
          onDismissRequest: () -> Unit,
          modifier: Modifier = Modifier,
          offset: DpOffset = DpOffset(0.dp, 0.dp),
          scrollState: ScrollState = rememberScrollState(),
          properties: PopupProperties = DefaultMenuProperties,
          shape: Shape = MenuDefaults.shape,
          containerColor: Color = MenuDefaults.containerColor,
          tonalElevation: Dp = MenuDefaults.TonalElevation,
          shadowElevation: Dp = MenuDefaults.ShadowElevation,
          border: BorderStroke? = null,
          content: @Composable ColumnScope.() -> Unit
  - id: menu-state-sample-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-samples-sources.jar
    revision: androidx.compose.material3:material3-android:1.3.2@sha256:3329e1a97328bbeda1e9c4f8305037ef6c13ab227af31b8ea65f757c2e791162
    path: material3-1.3.2/androidx/compose/material3/samples/MenuSamples.kt
    startLine: 46
    endLine: 76
    sha256: 74870fea31843f839e1164b973a7a92219a38cc82089d5903c763f18bef37cfc
    license: Apache-2.0
    excerpt: |-
      @Preview
      @Sampled
      @Composable
      fun MenuSample() {
          var expanded by remember { mutableStateOf(false) }

          Box(modifier = Modifier.fillMaxSize().wrapContentSize(Alignment.TopStart)) {
              IconButton(onClick = { expanded = true }) {
                  Icon(Icons.Default.MoreVert, contentDescription = "Localized description")
              }
              DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
                  DropdownMenuItem(
                      text = { Text("Edit") },
                      onClick = { /* Handle edit! */ },
                      leadingIcon = { Icon(Icons.Outlined.Edit, contentDescription = null) }
                  )
                  DropdownMenuItem(
                      text = { Text("Settings") },
                      onClick = { /* Handle settings! */ },
                      leadingIcon = { Icon(Icons.Outlined.Settings, contentDescription = null) }
                  )
                  HorizontalDivider()
                  DropdownMenuItem(
                      text = { Text("Send Feedback") },
                      onClick = { /* Handle send feedback! */ },
                      leadingIcon = { Icon(Icons.Outlined.Email, contentDescription = null) },
                      trailingIcon = { Text("F11", textAlign = TextAlign.Center) }
                  )
              }
          }
      }
compose:
  id: material3-dropdown-menu
  artifact: androidx.compose.material3:material3
  fqn: androidx.compose.material3.DropdownMenu
  sections:
    - id: menu-android-implementation
      title: Android DropdownMenu default focusability and Popup forwarding
      aliases:
        - DropdownMenu
        - Android 구현
        - 기본 포커스
        - focusable
        - DefaultMenuProperties
        - Popup
        - properties
        - callback
        - implementation
      requires:
        - artifact: androidx.compose.material3:material3
          version: 1.3.2
          platform: android
      sourceIds:
        - menu-android-implementation-source
      relatedIds:
        - popup-properties
        - popup-touch-routing
    - id: menu-api
      title: DropdownMenu API and dismissal request
      aliases:
        - DropdownMenu
        - 메뉴
        - 바깥 터치
        - 닫기 요청
        - 뒤로 가기
        - dismiss
        - outside click
        - back key
        - expanded
        - onDismissRequest
        - API
      requires:
        - artifact: androidx.compose.material3:material3
          version: 1.3.2
          platform: android
      sourceIds:
        - menu-api-source
      relatedIds:
        - menu-state-sample
        - menu-android-implementation
    - id: menu-state-sample
      title: DropdownMenu expanded state sample
      aliases:
        - DropdownMenu
        - 상태
        - expanded
        - remember
        - mutableStateOf
        - onDismissRequest
        - 샘플
        - 예제
        - state
        - sample
        - "false"
      requires:
        - artifact: androidx.compose.material3:material3
          version: 1.3.2
          platform: android
      sourceIds:
        - menu-state-sample-source
      relatedIds:
        - menu-api
---

# DropdownMenu

Public AndroidX source evidence; independently attributed per section.

## Android DropdownMenu default focusability and Popup forwarding

Android DropdownMenu forwards callback and properties into Popup. DefaultMenuProperties is PopupProperties(focusable=true). [^menu-android-implementation-source]

```kotlin
internal actual val DefaultMenuProperties = PopupProperties(focusable = true)

actual fun DropdownMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    modifier: Modifier,
    offset: DpOffset,
    scrollState: ScrollState,
    properties: PopupProperties,
    shape: Shape,
    containerColor: Color,
    tonalElevation: Dp,
    shadowElevation: Dp,
    border: BorderStroke?,
    content: @Composable ColumnScope.() -> Unit
) {
    val expandedState = remember { MutableTransitionState(false) }
    expandedState.targetState = expanded

    if (expandedState.currentState || expandedState.targetState) {
        val transformOriginState = remember { mutableStateOf(TransformOrigin.Center) }
        val density = LocalDensity.current
        val popupPositionProvider =
            remember(offset, density) {
                DropdownMenuPositionProvider(offset, density) { parentBounds, menuBounds ->
                    transformOriginState.value = calculateTransformOrigin(parentBounds, menuBounds)
                }
            }

        Popup(
            onDismissRequest = onDismissRequest,
            popupPositionProvider = popupPositionProvider,
            properties = properties
        ) {
```

[^menu-android-implementation-source]: material3-1.3.2/androidMain/androidx/compose/material3/AndroidMenu.android.kt:42-194; androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2; Apache-2.0.


Sources: [menu-android-implementation-source](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar)

## DropdownMenu API and dismissal request

DropdownMenu lives in a separate window; onDismissRequest is a close request on outside tap/back; expanded is caller-provided state. [^menu-api-source]

Scope: Dismissal callback alone proves neither expanded=false nor background touch delivery.

```kotlin
 * A [DropdownMenu] behaves similarly to a [Popup], and will use the position of the parent layout
 * to position itself on screen. Commonly a [DropdownMenu] will be placed in a [Box] with a sibling
 * that will be used as the 'anchor'. Note that a [DropdownMenu] by itself will not take up any
 * space in a layout, as the menu is displayed in a separate window, on top of other content.
 *
 * The [content] of a [DropdownMenu] will typically be [DropdownMenuItem]s, as well as custom
 * content. Using [DropdownMenuItem]s will result in a menu that matches the Material specification
 * for menus. Also note that the [content] is placed inside a scrollable [Column], so using a
 * [LazyColumn] as the root layout inside [content] is unsupported.
 *
 * [onDismissRequest] will be called when the menu should close - for example when there is a tap
 * outside the menu, or when the back key is pressed.

@Composable
expect fun DropdownMenu(
    expanded: Boolean,
    onDismissRequest: () -> Unit,
    modifier: Modifier = Modifier,
    offset: DpOffset = DpOffset(0.dp, 0.dp),
    scrollState: ScrollState = rememberScrollState(),
    properties: PopupProperties = DefaultMenuProperties,
    shape: Shape = MenuDefaults.shape,
    containerColor: Color = MenuDefaults.containerColor,
    tonalElevation: Dp = MenuDefaults.TonalElevation,
    shadowElevation: Dp = MenuDefaults.ShadowElevation,
    border: BorderStroke? = null,
    content: @Composable ColumnScope.() -> Unit
```

[^menu-api-source]: material3-1.3.2/commonMain/androidx/compose/material3/Menu.kt:78-138; androidx.compose.material3:material3-android:1.3.2@sha256:e58d105a4fcf1f65a6b2838ca8a6fe40b5784b5dba9ddcf27aabcdfc92b3e4e2; Apache-2.0.


Sources: [menu-api-source](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-sources.jar)

## DropdownMenu expanded state sample

The official MenuSample owns expanded state, opens it in the anchor IconButton callback, and sets expanded=false in onDismissRequest. MenuItem actions are separate handlers. [^menu-state-sample-source]

Scope: The sample does not prove automatic dismissal by the library or background touch delivery.

```kotlin
@Preview
@Sampled
@Composable
fun MenuSample() {
    var expanded by remember { mutableStateOf(false) }

    Box(modifier = Modifier.fillMaxSize().wrapContentSize(Alignment.TopStart)) {
        IconButton(onClick = { expanded = true }) {
            Icon(Icons.Default.MoreVert, contentDescription = "Localized description")
        }
        DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }) {
            DropdownMenuItem(
                text = { Text("Edit") },
                onClick = { /* Handle edit! */ },
                leadingIcon = { Icon(Icons.Outlined.Edit, contentDescription = null) }
            )
            DropdownMenuItem(
                text = { Text("Settings") },
                onClick = { /* Handle settings! */ },
                leadingIcon = { Icon(Icons.Outlined.Settings, contentDescription = null) }
            )
            HorizontalDivider()
            DropdownMenuItem(
                text = { Text("Send Feedback") },
                onClick = { /* Handle send feedback! */ },
                leadingIcon = { Icon(Icons.Outlined.Email, contentDescription = null) },
                trailingIcon = { Text("F11", textAlign = TextAlign.Center) }
            )
        }
    }
}
```

[^menu-state-sample-source]: material3-1.3.2/androidx/compose/material3/samples/MenuSamples.kt:46-76; androidx.compose.material3:material3-android:1.3.2@sha256:3329e1a97328bbeda1e9c4f8305037ef6c13ab227af31b8ea65f757c2e791162; Apache-2.0.


Sources: [menu-state-sample-source](https://dl.google.com/dl/android/maven2/androidx/compose/material3/material3-android/1.3.2/material3-android-1.3.2-samples-sources.jar)
