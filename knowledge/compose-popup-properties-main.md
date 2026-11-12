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
  - id: unknown-reference-source
    kind: code
    resource: https://raw.githubusercontent.com/androidx/androidx/07bb66ae1eada12632eb10c75246d7b2c5ba6ede/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    revision: 07bb66ae1eada12632eb10c75246d7b2c5ba6ede
    path: androidx-main-07bb66ae/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt
    startLine: 27
    endLine: 52
    sha256: 6707ad89d860a72bc704e1a2c9a7b36be56438eb9a0b4a88be4b8230f2ac4e1e
    license: Apache-2.0
    excerpt: |-
      /**
       * Properties used to customize the behavior of a [Popup].
       *
       * @property focusable Whether the popup is focusable. When true, the popup will receive IME events
       *   and key presses, such as when the back button is pressed.
       * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back or escape
       *   buttons on Android or the escape key on desktop. If true, pressing the back button will call
       *   onDismissRequest. Note that [focusable] must be set to true in order to receive key events such
       *   as the back button - if the popup is not focusable then this property does nothing.
       * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
       *   popup's bounds. If true, clicking outside the popup will call onDismissRequest.
       * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
       *   screen. By default the window is clipped to the screen boundaries. Setting this to false will
       *   allow windows to be accurately positioned. The default value is true.
       * @property usePlatformDefaultWidth Whether the width of the popup's content should be limited to
       *   the platform default, which is smaller than the screen width.
       */
      @Immutable
      public expect class PopupProperties {
          public constructor(
              focusable: Boolean = false,
              dismissOnBackPress: Boolean = true,
              dismissOnClickOutside: Boolean = true,
              clippingEnabled: Boolean = true,
              usePlatformDefaultWidth: Boolean = false,
          )
compose:
  id: compose-popup-properties-main
  artifact: androidx.compose.ui:ui
  fqn: androidx.compose.ui.window.PopupProperties
  sections:
    - id: unknown-reference
      title: "AndroidX main PopupProperties: unknown release"
      aliases:
        - PopupProperties
        - androidx-main
        - reference
        - usePlatformDefaultWidth
        - unknown
        - 버전 미확인
        - 공식 참조
      requires:
        - artifact: androidx.compose.ui:ui
          version: null
          platform: android
      sourceIds:
        - unknown-reference-source
      relatedIds:
        - popup-properties
---

# PopupProperties

Public AndroidX source evidence; independently attributed per section.

## AndroidX main PopupProperties: unknown release

Official AndroidX main PopupProperties reference frozen at an immutable commit; release applicability remains unknown. [^unknown-reference-source]

Scope: Commit pinning does not establish a published Maven version.

```kotlin
/**
 * Properties used to customize the behavior of a [Popup].
 *
 * @property focusable Whether the popup is focusable. When true, the popup will receive IME events
 *   and key presses, such as when the back button is pressed.
 * @property dismissOnBackPress Whether the popup can be dismissed by pressing the back or escape
 *   buttons on Android or the escape key on desktop. If true, pressing the back button will call
 *   onDismissRequest. Note that [focusable] must be set to true in order to receive key events such
 *   as the back button - if the popup is not focusable then this property does nothing.
 * @property dismissOnClickOutside Whether the popup can be dismissed by clicking outside the
 *   popup's bounds. If true, clicking outside the popup will call onDismissRequest.
 * @property clippingEnabled Whether to allow the popup window to extend beyond the bounds of the
 *   screen. By default the window is clipped to the screen boundaries. Setting this to false will
 *   allow windows to be accurately positioned. The default value is true.
 * @property usePlatformDefaultWidth Whether the width of the popup's content should be limited to
 *   the platform default, which is smaller than the screen width.
 */
@Immutable
public expect class PopupProperties {
    public constructor(
        focusable: Boolean = false,
        dismissOnBackPress: Boolean = true,
        dismissOnClickOutside: Boolean = true,
        clippingEnabled: Boolean = true,
        usePlatformDefaultWidth: Boolean = false,
    )
```

[^unknown-reference-source]: androidx-main-07bb66ae/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt:27-52; 07bb66ae1eada12632eb10c75246d7b2c5ba6ede; Apache-2.0.


Sources: [unknown-reference-source](https://raw.githubusercontent.com/androidx/androidx/07bb66ae1eada12632eb10c75246d7b2c5ba6ede/compose/ui/ui/src/commonMain/kotlin/androidx/compose/ui/window/Popup.kt)
