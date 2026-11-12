---
type: reference
title: Use window size classes
description: "Public source: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes"
tags:
  - Compose
  - Android
sources:
  - id: live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-2-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#main-content
    revision: web:compose-guide-layouts-adaptive-use-window-size-classes:content@sha256:fa8ea15362fbf056de6de0ab639e4ac50320c0246debf7834e79a23e110c3282
    sha256: 4a7ebcfcbe47f25df5267ce02438041c6f9f9e9dce23462e2e8edd5a11f51de2
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      has two important implications:

      Physical devices do not guarantee a specific window size class. The screen space available to your app can differ from the screen size of the device for many reasons. On mobile devices, split‑screen mode can partition the screen between two applications. On ChromeOS, Android apps can be presented in desktop‑type windows that are arbitrarily resizable. Foldables can have two different‑sized screens individually accessed by folding or unfolding the device.

      The window size class can change throughout the lifetime of your app. While your app is running, device orientation changes, multitasking, and folding/unfolding can change the amount of screen space available. As a result, the window size class is dynamic, and your app's UI should adapt accordingly.

      Window size classes map to the compact, medium, and expanded breakpoints in the Material Design layout guidance. Additionally, large and extra-large breakpoints have been added to better target desktop and connected displays.

      Use window size classes to make high‑level application layout decisions, such as deciding whether to use a specific canonical layout to take advantage of additional screen space.

      Compute the current WindowSizeClass using the currentWindowAdaptiveInfo() top‑level function of the androidx.compose.material3.adaptive library. The function returns an instance of WindowAdaptiveInfo, which contains windowSizeClass. To support large and extra-large breakpoints, add the supportLargeAndXLargeWidth parameter set to true to the function call. The following example shows how to calculate the window size class and receive updates whenever the window size class changes:

      val windowSizeClass = currentWindowAdaptiveInfo().windowSizeClassAdaptiveLayoutSnippets.kt
  - id: live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#main-content
    revision: web:compose-guide-layouts-adaptive-use-window-size-classes:content@sha256:fa8ea15362fbf056de6de0ab639e4ac50320c0246debf7834e79a23e110c3282
    sha256: 3a426e1943f3bca50ad902b2d3e1c7e81fa984389eaf478e034cfbf03aecb5cd
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Window size classes are a set of opinionated viewport breakpoints that help you design, develop, and test responsive/adaptive layouts. The breakpoints balance layout simplicity with the flexibility of optimizing your app for unique cases.

      Window size classes categorize the display area available to your app as compact, medium, expanded, large, or extra large. Available width and height are classified separately, so at any point in time, your app has two window size classes—one for width, one for height. Available width is usually more important than available height due to the ubiquity of vertical scrolling, so the width window size class is likely more relevant to your app's UI.

      Figure 1.

      Representations of width-based window size classes.

      Figure 2.

      Representations of height-based window size classes.

      As visualized in the figures, the breakpoints allow you to continue thinking about layouts in terms of devices and configurations. Each size class breakpoint represents a majority case for typical device scenarios, which can be a helpful frame of reference as you think about the design of your breakpoint-based layouts.

      Size class Breakpoint Device representation Compact width width < 600dp 99.96% of phones in portrait Medium width 600dp ≤ width < 840dp 93.73% of tablets in portrait, most large unfolded inner displays in portrait Expanded width 840dp ≤ width < 1200dp 97.22% of tablets in landscape, most large unfolded inner displays in landscape are at least expanded width Large width 1200dp ≤ width < 1600dp Large tablet displays Extra-large width width ≥ 1600dp Desktop displays Compact height height < 480dp 99.78% of phones in landscape Medium height 480dp ≤ height < 900dp 96.56% of tablets in landscape, 97.59% of phones in portrait Expanded height height ≥ 900dp 94.25% of tablets in portrait

      Although visualizing size classes as physical devices can be useful, window size classes are explicitly not determined by the size of the device screen. Window size classes are not intended for isTablet‑type logic. Rather, window size classes are determined by the window size available to your application regardless of the type of device the app is running on, which
  - id: live-compose-guide-layouts-adaptive-use-window-size-classes-manage-layouts-with-window-size-classes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#manage_layouts_with_window_size_classes
    revision: web:compose-guide-layouts-adaptive-use-window-size-classes:content@sha256:fa8ea15362fbf056de6de0ab639e4ac50320c0246debf7834e79a23e110c3282
    sha256: 198c5b2fa7b39ac6f2e0197aa5b8cc9ea2f86ec8620e2364c243feaf8c9b5f21
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      Window size classes enable you to change your app layout as the display space available to your app changes, for example, when a device folds or unfolds, the device orientation changes, or the app window is resized in multi‑window mode.

      Localize the logic for handling display size changes by passing window size classes down as state to nested composables just like any other app state:

      @Composable
      fun MyApp(
          windowSizeClass: WindowSizeClass = currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true).windowSizeClass
      ) {
          // Decide whether to show the top app bar based on window size class.
          val showTopAppBar = windowSizeClass.isHeightAtLeastBreakpoint(WindowSizeClass.HEIGHT_DP_MEDIUM_LOWER_BOUND)

          // MyScreen logic is based on the showTopAppBar boolean flag.
          MyScreen(
              showTopAppBar = showTopAppBar,
              /* ... */
          )
      }AdaptiveLayoutSnippets.kt
  - id: live-compose-guide-layouts-adaptive-use-window-size-classes-next-steps-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#next_steps
    revision: web:compose-guide-layouts-adaptive-use-window-size-classes:content@sha256:fa8ea15362fbf056de6de0ab639e4ac50320c0246debf7834e79a23e110c3282
    sha256: e794563b1a310fe60d928ef06187fc1749aaa6d9bffc4afe4445c825ddb46769
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      To learn more about how to use window size classes to create responsive/adaptive layouts, see the following:

      For Compose-based layouts: Support different display sizes

      For view-based layouts: Responsive/adaptive design with views

      To learn more about what makes an app great on all devices and screen sizes, see:

      Migrate your UI to responsive layouts

      Large screen app quality
  - id: live-compose-guide-layouts-adaptive-use-window-size-classes-test-window-size-classes-source
    kind: guide
    resource: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#test_window_size_classes
    revision: web:compose-guide-layouts-adaptive-use-window-size-classes:content@sha256:fa8ea15362fbf056de6de0ab639e4ac50320c0246debf7834e79a23e110c3282
    sha256: b739284ce182b720d91a6d08fb1a297340096cb5c75e7b90bced6b4f48954ea0
    license: Apache-2.0 (https://developer.android.com/license)
    excerpt: |-
      As you make layout changes, test the layout behavior across all window sizes, especially at the compact, medium, and expanded breakpoint widths.

      If you have an existing layout for compact screens, first optimize your layout for the expanded width size class, since this size class provides the most space for additional content and UI changes. Then decide what layout makes sense for the medium width size class; consider adding a specialized layout.
compose:
  id: live-compose-guide-layouts-adaptive-use-window-size-classes
  artifact: androidx.compose.material3.adaptive:adaptive
  fqn: androidx.compose.material3.adaptive
  sections:
    - id: live-compose-guide-layouts-adaptive-use-window-size-classes-main-content
      title: Introduction
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-2
      title: Introduction
      aliases:
        - androidx.compose.material3.adaptive.currentWindowAdaptiveInfo
        - androidx.compose.material3.adaptive.WindowAdaptiveInfo
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-2-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-use-window-size-classes-manage-layouts-with-window-size-classes
      title: Manage layouts with window size classes
      aliases:
        - androidx.compose.material3.adaptive.currentWindowAdaptiveInfo
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-use-window-size-classes-manage-layouts-with-window-size-classes-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-use-window-size-classes-next-steps
      title: Next steps
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-use-window-size-classes-next-steps-source
      relatedIds: []
    - id: live-compose-guide-layouts-adaptive-use-window-size-classes-test-window-size-classes
      title: Test window size classes
      aliases: []
      requires:
        - artifact: androidx.compose.material3.adaptive:adaptive
          version: null
      sourceIds:
        - live-compose-guide-layouts-adaptive-use-window-size-classes-test-window-size-classes-source
      relatedIds: []
---

# Use window size classes

Public source: https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes

## Introduction

Window size classes are a set of opinionated viewport breakpoints that help you design, develop, and test responsive/adaptive layouts. The breakpoints balance layout simplicity with the flexibility of optimizing your app for unique cases.

Window size classes categorize the display area available to your app as compact, medium, expanded, large, or extra large. Available width and height are classified separately, so at any point in time, your app has two window size classes—one for width, one for height. Available width is usually more important than available height due to the ubiquity of vertical scrolling, so the width window size class is likely more relevant to your app's UI.

Figure 1.

Representations of width-based window size classes.

Figure 2.

Representations of height-based window size classes.

As visualized in the figures, the breakpoints allow you to continue thinking about layouts in terms of devices and configurations. Each size class breakpoint represents a majority case for typical device scenarios, which can be a helpful frame of reference as you think about the design of your breakpoint-based layouts.

Size class Breakpoint Device representation Compact width width < 600dp 99.96% of phones in portrait Medium width 600dp ≤ width < 840dp 93.73% of tablets in portrait, most large unfolded inner displays in portrait Expanded width 840dp ≤ width < 1200dp 97.22% of tablets in landscape, most large unfolded inner displays in landscape are at least expanded width Large width 1200dp ≤ width < 1600dp Large tablet displays Extra-large width width ≥ 1600dp Desktop displays Compact height height < 480dp 99.78% of phones in landscape Medium height 480dp ≤ height < 900dp 96.56% of tablets in landscape, 97.59% of phones in portrait Expanded height height ≥ 900dp 94.25% of tablets in portrait

Although visualizing size classes as physical devices can be useful, window size classes are explicitly not determined by the size of the device screen. Window size classes are not intended for isTablet‑type logic. Rather, window size classes are determined by the window size available to your application regardless of the type of device the app is running on, which

Sources: [live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#main-content)

## Introduction

has two important implications:

Physical devices do not guarantee a specific window size class. The screen space available to your app can differ from the screen size of the device for many reasons. On mobile devices, split‑screen mode can partition the screen between two applications. On ChromeOS, Android apps can be presented in desktop‑type windows that are arbitrarily resizable. Foldables can have two different‑sized screens individually accessed by folding or unfolding the device.

The window size class can change throughout the lifetime of your app. While your app is running, device orientation changes, multitasking, and folding/unfolding can change the amount of screen space available. As a result, the window size class is dynamic, and your app's UI should adapt accordingly.

Window size classes map to the compact, medium, and expanded breakpoints in the Material Design layout guidance. Additionally, large and extra-large breakpoints have been added to better target desktop and connected displays.

Use window size classes to make high‑level application layout decisions, such as deciding whether to use a specific canonical layout to take advantage of additional screen space.

Compute the current WindowSizeClass using the currentWindowAdaptiveInfo() top‑level function of the androidx.compose.material3.adaptive library. The function returns an instance of WindowAdaptiveInfo, which contains windowSizeClass. To support large and extra-large breakpoints, add the supportLargeAndXLargeWidth parameter set to true to the function call. The following example shows how to calculate the window size class and receive updates whenever the window size class changes:

val windowSizeClass = currentWindowAdaptiveInfo().windowSizeClassAdaptiveLayoutSnippets.kt

Sources: [live-compose-guide-layouts-adaptive-use-window-size-classes-main-content-2-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#main-content)

## Manage layouts with window size classes

Window size classes enable you to change your app layout as the display space available to your app changes, for example, when a device folds or unfolds, the device orientation changes, or the app window is resized in multi‑window mode.

Localize the logic for handling display size changes by passing window size classes down as state to nested composables just like any other app state:

@Composable
fun MyApp(
    windowSizeClass: WindowSizeClass = currentWindowAdaptiveInfo(supportLargeAndXLargeWidth = true).windowSizeClass
) {
    // Decide whether to show the top app bar based on window size class.
    val showTopAppBar = windowSizeClass.isHeightAtLeastBreakpoint(WindowSizeClass.HEIGHT_DP_MEDIUM_LOWER_BOUND)

    // MyScreen logic is based on the showTopAppBar boolean flag.
    MyScreen(
        showTopAppBar = showTopAppBar,
        /* ... */
    )
}AdaptiveLayoutSnippets.kt

Sources: [live-compose-guide-layouts-adaptive-use-window-size-classes-manage-layouts-with-window-size-classes-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#manage_layouts_with_window_size_classes)

## Next steps

To learn more about how to use window size classes to create responsive/adaptive layouts, see the following:

For Compose-based layouts: Support different display sizes

For view-based layouts: Responsive/adaptive design with views

To learn more about what makes an app great on all devices and screen sizes, see:

Migrate your UI to responsive layouts

Large screen app quality

Sources: [live-compose-guide-layouts-adaptive-use-window-size-classes-next-steps-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#next_steps)

## Test window size classes

As you make layout changes, test the layout behavior across all window sizes, especially at the compact, medium, and expanded breakpoint widths.

If you have an existing layout for compact screens, first optimize your layout for the expanded width size class, since this size class provides the most space for additional content and UI changes. Then decide what layout makes sense for the medium width size class; consider adding a specialized layout.

Sources: [live-compose-guide-layouts-adaptive-use-window-size-classes-test-window-size-classes-source](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes#test_window_size_classes)
