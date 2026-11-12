---
type: reference
title: PopupProperties
description: Public AndroidX source evidence; independently attributed per section.
tags:
  - Compose
  - Android
  - menu
  - popup
sources:
  - id: popup-properties-source
    kind: code
    resource: https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar
    revision: androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc
    path: ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt
    startLine: 27
    endLine: 54
    sha256: a8b4ea1dd0ede4a28f053173aa7f96e45c6ce8c9c90c34d0288167d73e4984a3
    license: Apache-2.0
    excerpt: |-
      
      /**
       * Properties used to customize the behavior of a [Popup].
       *
       * @property focusable Whether the popup is focusable. When true, the popup will receive IME
       * events and key presses, such as when the back button is pressed.
       * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back button
       * on Android or escape key on desktop.
       * If true, pressing the back button will call onDismissRequest. Note that [focusable] must be
       * set to true in order to receive key events such as the back button - if the popup is not
       * focusable then this property does nothing.
       * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
       * popup's bounds. If true, clicking outside the popup will call onDismissRequest.
       * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
       * screen. By default the window is clipped to the screen boundaries. Setting this to false will
       * allow windows to be accurately positioned.
       * The default value is true.
       */
      @Immutable
      expect class PopupProperties(
          focusable: Boolean = false,
          dismissOnBackPress: Boolean = true,
          dismissOnClickOutside: Boolean = true,
          clippingEnabled: Boolean = true,
      ) {
          val focusable: Boolean
          val dismissOnBackPress: Boolean
          val dismissOnClickOutside: Boolean
compose:
  id: compose-popup-properties
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.window.PopupProperties
  sections:
    - id: popup-properties
      title: PopupProperties defaults and focus requirements
      aliases:
        - PopupProperties
        - 팝업 속성
        - 기본값
        - 포커스
        - 뒤로 가기
        - 바깥 터치
        - focusable
        - IME
        - key presses
        - dismissOnBackPress
        - dismissOnClickOutside
        - defaults
      requires:
        - artifact: androidx.compose.ui:ui
          version: 1.7.8
          platform: android
      sourceIds:
        - popup-properties-source
      relatedIds:
        - popup-touch-routing
        - popup-dismiss-tests
---

# PopupProperties

Public AndroidX source evidence; independently attributed per section.

## PopupProperties defaults and focus requirements

PopupProperties defaults focusable=false and dismissal-on-back/outside=true; back handling needs focusability. [^popup-properties-source]

Scope: Generic Popup default focusability is not DropdownMenu default focusability.

```kotlin

/**
 * Properties used to customize the behavior of a [Popup].
 *
 * @property focusable Whether the popup is focusable. When true, the popup will receive IME
 * events and key presses, such as when the back button is pressed.
 * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back button
 * on Android or escape key on desktop.
 * If true, pressing the back button will call onDismissRequest. Note that [focusable] must be
 * set to true in order to receive key events such as the back button - if the popup is not
 * focusable then this property does nothing.
 * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
 * popup's bounds. If true, clicking outside the popup will call onDismissRequest.
 * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
 * screen. By default the window is clipped to the screen boundaries. Setting this to false will
 * allow windows to be accurately positioned.
 * The default value is true.
 */
@Immutable
expect class PopupProperties(
    focusable: Boolean = false,
    dismissOnBackPress: Boolean = true,
    dismissOnClickOutside: Boolean = true,
    clippingEnabled: Boolean = true,
) {
    val focusable: Boolean
    val dismissOnBackPress: Boolean
    val dismissOnClickOutside: Boolean
```

[^popup-properties-source]: ui-1.7.8/commonMain/androidx/compose/ui/window/Popup.kt:27-54; androidx.compose.ui:ui-android:1.7.8@sha256:0d72b414bba41ea48dc599cbd06d326cb860aa511bdf42fe8cbce07690cad8fc; Apache-2.0.


Sources: [popup-properties-source](https://dl.google.com/dl/android/maven2/androidx/compose/ui/ui-android/1.7.8/ui-android-1.7.8-sources.jar)
